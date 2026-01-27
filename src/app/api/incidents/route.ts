import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { offenderId, description, auraAmount, evidenceUrl } = await req.json();

  // Rule 1: THE SPAM COOLDOWN
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  const recentReport = await prisma.incident.findFirst({
    where: {
      reporterId: session.user.id,
      offenderId: offenderId,
      createdAt: { gte: oneHourAgo }
    }
  });

  if (recentReport) {
    return NextResponse.json({ 
      error: "Spam Cooldown: You can't report the same person twice in an hour." 
    }, { status: 429 });
  }

  // Set expiration (1 hour for quick approval, 24 hours if disputed)
  // For now, we set it to 1 hour. If someone disagrees, we'll update it to 24 hours.
  const expiresAt = new Date(Date.now() + 60 * 60 * 1000);

  const incident = await prisma.incident.create({
    data: {
      reporterId: session.user.id,
      offenderId,
      description,
      auraAmount,
      evidenceUrl,
      expiresAt,
      status: "PENDING"
    }
  });

  return NextResponse.json(incident);
}

export async function GET() {
  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      reporter: { select: { username: true, avatarUrl: true } },
      offender: { select: { username: true, avatarUrl: true } },
      votes: true
    }
  });
  return NextResponse.json(incidents);
}
