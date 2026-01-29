import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";
import { sendNotification } from "@/lib/push";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { incidentId, type } = await req.json(); // type: "AGREE" or "DISAGREE"

  // Check if incident exists and is still open
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    include: { votes: true }
  });

  if (!incident || ["APPROVED", "REJECTED"].includes(incident.status)) {
    return NextResponse.json({ error: "Incident closed or not found" }, { status: 400 });
  }

  // Handle Vote (Create or Update)
  const existingVote = await prisma.vote.findUnique({
    where: {
      userId_incidentId: {
        userId: session.user.id,
        incidentId: incidentId
      }
    }
  });

  if (existingVote) {
    if (existingVote.type === type) {
      return NextResponse.json({ message: "Already voted this way" });
    }
    // Update existing vote
    await prisma.vote.update({
      where: { id: existingVote.id },
      data: { type }
    });
  } else {
    // Create new vote
    await prisma.vote.create({
      data: {
        userId: session.user.id,
        incidentId,
        type
      }
    });
  }

  // Refresh votes to calculate status
  const freshVotes = await prisma.vote.findMany({
    where: { incidentId }
  });

  const agreeCount = freshVotes.filter(v => v.type === "AGREE").length;
  // const disagreeCount = freshVotes.filter(v => v.type === "DISAGREE").length; 

  // Get total user count to calculate 50%
  const userCount = await prisma.user.count();

  let newStatus = incident.status;
  let newExpiresAt = incident.expiresAt;

  // Logic: Switching TO Disagree triggers Dispute
  if (type === "DISAGREE" && incident.status === "PENDING") {
    newStatus = "DISPUTED";
    newExpiresAt = new Date(incident.createdAt.getTime() + 24 * 60 * 60 * 1000);
  } else if (agreeCount > userCount / 2 && incident.status === "PENDING") {
    // If more than 50% of the group votes "Agree" within 1 hour, the report is automatically "Approved"
    newStatus = "APPROVED";
    
    // Apply points immediately
    await prisma.$transaction([
      prisma.incident.update({
         where: { id: incidentId },
         data: { status: "APPROVED" }
      }),
      prisma.user.update({
        where: { id: incident.offenderId },
        data: { auraScore: { increment: incident.auraAmount } }
      })
    ]);

    // Notify involved parties
    await Promise.all([
        sendNotification(incident.offenderId, "Verdict: APPROVED", `The group voted against you. ${incident.auraAmount} aura applied.`),
        sendNotification(incident.reporterId, "Verdict: APPROVED", `Your report against user was successful.`)
    ]);
    
    // Return early since we handled the DB update in transaction
    return NextResponse.json({ status: "APPROVED" });
  }

  await prisma.incident.update({
    where: { id: incidentId },
    data: { status: newStatus, expiresAt: newExpiresAt }
  });

  return NextResponse.json({ status: newStatus });
}
