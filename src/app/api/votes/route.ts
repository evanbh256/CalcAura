import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

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

  // Prevent double voting
  const existingVote = await prisma.vote.findUnique({
    where: {
      userId_incidentId: {
        userId: session.user.id,
        incidentId: incidentId
      }
    }
  });

  if (existingVote) {
    return NextResponse.json({ error: "You already voted" }, { status: 400 });
  }

  // Record the vote
  const vote = await prisma.vote.create({
    data: {
      userId: session.user.id,
      incidentId,
      type
    }
  });

  // Rule 2 Logic
  const allVotes = [...incident.votes, vote];
  const agreeCount = allVotes.filter(v => v.type === "AGREE").length;
  const disagreeCount = allVotes.filter(v => v.type === "DISAGREE").length;

  // Get total user count to calculate 50%
  const userCount = await prisma.user.count();

  let newStatus = incident.status;
  let newExpiresAt = incident.expiresAt;

  if (type === "DISAGREE" && incident.status === "PENDING") {
    // If anyone votes "Disagree" before it is approved, the status changes to "Disputed."
    // Once "Disputed," the voting window remains open for 24 hours.
    newStatus = "DISPUTED";
    newExpiresAt = new Date(incident.createdAt.getTime() + 24 * 60 * 60 * 1000);
  } else if (agreeCount > userCount / 2 && incident.status === "PENDING") {
    // If more than 50% of the group votes "Agree" within 1 hour, the report is automatically "Approved"
    newStatus = "APPROVED";
    
    // Apply points immediately
    await prisma.user.update({
      where: { id: incident.offenderId },
      data: { auraScore: { increment: incident.auraAmount } }
    });
  }

  await prisma.incident.update({
    where: { id: incidentId },
    data: { status: newStatus, expiresAt: newExpiresAt }
  });

  return NextResponse.json({ vote, status: newStatus });
}
