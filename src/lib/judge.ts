import { prisma } from "./prisma";

/**
 * Rule 3: THE JUDGE PROTOCOL
 * The Judge is defined as the user with the HIGHEST Aura Score who is 
 * NOT the Reporter and NOT the Offender.
 */
export async function getJudgeForIncident(incidentId: string) {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId },
    select: { reporterId: true, offenderId: true }
  });

  if (!incident) return null;

  const possibleJudges = await prisma.user.findMany({
    where: {
      id: {
        notIn: [incident.reporterId, incident.offenderId]
      }
    },
    orderBy: {
      auraScore: "desc"
    },
    take: 1
  });

  return possibleJudges[0] || null;
}

export async function resolveExpiredIncident(incidentId: string) {
  const incident = await prisma.incident.findUnique({
    where: { id: incidentId }
  });

  if (!incident || incident.status !== "DISPUTED") return;

  const now = new Date();
  if (incident.expiresAt > now) return; // Not expired yet

  // If expired, the Judge is assigned (if not already)
  if (!incident.judgeId) {
    const judge = await getJudgeForIncident(incidentId);
    if (judge) {
      await prisma.incident.update({
        where: { id: incidentId },
        data: { judgeId: judge.id }
      });
    }
  }
}
