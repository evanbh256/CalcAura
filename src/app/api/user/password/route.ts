import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import { hash, compare } from "bcrypt";

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { currentPassword, newPassword } = await req.json();

  if (!currentPassword || !newPassword) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Verify old password
  const isValid = await compare(currentPassword, user.password);
  if (!isValid) {
    return NextResponse.json({ error: "Incorrect current password" }, { status: 400 });
  }

  // Hash and update
  const hashedPassword = await hash(newPassword, 10);
  await prisma.user.update({
    where: { id: session.user.id },
    data: { password: hashedPassword }
  });

  return NextResponse.json({ success: true });
}
