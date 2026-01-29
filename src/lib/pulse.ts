import { prisma } from "./prisma";
import { getJudgeForIncident } from "./judge";
import { checkAndHandleSeasonReset } from "./seasons";

export async function runSystemPulse() {
  console.log("❤️ System Pulse: Checking for expired items...");

  const now = new Date();

  // 1. Check for Season Reset (1st of month)
  await checkAndHandleSeasonReset();

  // 2. Handle EXPIRING PENDING Incidents
  // Spec: "If anyone votes Disagree... Disputed". "If >50% agree... Approved".
  // Gap in spec: What if 1 hour passes, no one disagreed, but <50% agreed?
  // Logic: Silence is consent. If it hasn't been disputed in 1 hour, it passes.
  const expiredPending = await prisma.incident.findMany({
    where: {
      status: "PENDING",
      expiresAt: { lt: now }
    },
    include: { votes: true }
  });

  for (const incident of expiredPending) {
    // Double check it has no disagrees (should have moved to disputed)
    const hasDisagree = incident.votes.some(v => v.type === "DISAGREE");
    
    if (hasDisagree) {
      // Should have been DISPUTED already, but fix it now
      await prisma.incident.update({
        where: { id: incident.id },
        data: { 
          status: "DISPUTED",
          expiresAt: new Date(now.getTime() + 24 * 60 * 60 * 1000) // +24 hours
        }
      });
    } else {
      // No disputes, time is up -> Auto Approve
      console.log(`✅ Auto-approving incident ${incident.id}`);
      await prisma.$transaction([
        prisma.incident.update({
          where: { id: incident.id },
          data: { status: "APPROVED" }
        }),
        prisma.user.update({
          where: { id: incident.offenderId },
          data: { auraScore: { increment: incident.auraAmount } }
        })
      ]);
    }
  }

  // 3. Handle EXPIRING DISPUTED Incidents
  // If Agree > Disagree -> Approved.
  // Else -> Assign Judge (if not already assigned).
  const expiredDisputed = await prisma.incident.findMany({
    where: {
      status: "DISPUTED",
      expiresAt: { lt: now }
    },
    include: { votes: true }
  });

  for (const incident of expiredDisputed) {
    const agreeCount = incident.votes.filter(v => v.type === "AGREE").length;
    const disagreeCount = incident.votes.filter(v => v.type === "DISAGREE").length;

    if (agreeCount > disagreeCount) {
      // Community voted to Approve
      console.log(`✅ Community approved disputed incident ${incident.id} (${agreeCount} vs ${disagreeCount})`);
      await prisma.$transaction([
        prisma.incident.update({
          where: { id: incident.id },
          data: { status: "APPROVED" }
        }),
        prisma.user.update({
          where: { id: incident.offenderId },
          data: { auraScore: { increment: incident.auraAmount } }
        })
      ]);
    } else if (disagreeCount > agreeCount) {
      // Community voted to Reject
      console.log(`❌ Community rejected disputed incident ${incident.id} (${disagreeCount} vs ${agreeCount})`);
      await prisma.incident.update({
        where: { id: incident.id },
        data: { status: "REJECTED" }
      });
    } else {
      // Tie -> Requires Judge
      if (!incident.judgeId) {
        console.log(`⚖️ Finding judge for disputed incident ${incident.id}`);
        const judge = await getJudgeForIncident(incident.id);
        
        if (judge) {
          await prisma.incident.update({
            where: { id: incident.id },
            data: { judgeId: judge.id }
          });
        }
      }
    }
  }

  return { processed: expiredPending.length + expiredDisputed.length };
}
