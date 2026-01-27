import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import ReportForm from "@/components/ReportForm";

export default async function ReportPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Fetch users for dropdown, excluding self (optional, but logical)
  const users = await prisma.user.findMany({
    where: { NOT: { id: session.user.id } },
    select: { id: true, username: true }
  });

  return (
    <div className="space-y-8 pb-24">
      <header>
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">File Report</h1>
        <p className="text-aura-loss font-bold text-xs uppercase">Submit Evidence of Aura Loss/Gain</p>
      </header>

      <ReportForm users={users} />
    </div>
  );
}