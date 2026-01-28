import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request, { params }: { params: { id: string } }) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { decision } = await req.json(); // "APPROVED" or "REJECTED"
  const incidentId = params.id;

  const incident = await prisma.incident.findUnique({
    where: { id: incidentId }
  });

  if (!incident || incident.status !== "DISPUTED") {
    return NextResponse.json({ error: "Incident not in resolvable state" }, { status: 400 });
  }

  // Check if current user is the assigned judge
  if (incident.judgeId !== session.user.id) {
    return NextResponse.json({ error: "Only the assigned Judge can resolve this" }, { status: 403 });
  }

  // Finalize the decision
  await prisma.incident.update({
    where: { id: incidentId },
    data: { status: decision }
  });

  if (decision === "APPROVED") {
    await prisma.user.update({
      where: { id: incident.offenderId },
      data: { auraScore: { increment: incident.auraAmount } }
    });
  }

  return NextResponse.json({ status: decision });
}
