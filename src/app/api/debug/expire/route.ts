import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const pastDate = new Date("2026-01-26T12:00:00Z");
  
  const result = await prisma.incident.updateMany({
    where: { 
      status: { in: ["PENDING", "DISPUTED"] }
    },
    data: { expiresAt: pastDate }
  });

  return NextResponse.json({ 
    message: `Warped ${result.count} incidents into the past.`,
    newExpiration: pastDate
  });
}
