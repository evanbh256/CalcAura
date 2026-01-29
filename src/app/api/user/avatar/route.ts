
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { avatarUrl } = await req.json();

    if (!avatarUrl) {
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    await prisma.user.update({
      where: { id: session.user.id },
      data: { avatarUrl }
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Avatar update failed:", error);
    return NextResponse.json({ error: "Failed to update avatar" }, { status: 500 });
  }
}
