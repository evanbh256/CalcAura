import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import IncidentCard from "@/components/IncidentCard";
import Link from "next/link";
import { Plus } from "lucide-react";
import { runSystemPulse } from "@/lib/pulse";

export const dynamic = "force-dynamic";

export default async function Home() {
  // Trigger system pulse on every feed load to check for expirations
  await runSystemPulse();

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const user = await prisma.user.findUnique({
    where: { id: session.user.id }
  });

  const incidents = await prisma.incident.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      reporter: { select: { username: true, avatarUrl: true } },
      offender: { select: { username: true, avatarUrl: true } },
      votes: true
    }
  });

  return (
    <div className="space-y-6">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">CalcAura</h1>
        <div className="text-right">
          <p className="text-[10px] uppercase font-bold text-aura-gain">Current Aura</p>
          <p className={`text-2xl font-black ${user?.auraScore && user.auraScore < 1000 ? "text-aura-loss" : "text-white"}`}>
            {user?.auraScore} pts
          </p>
        </div>
      </header>

      <div className="space-y-4 pb-24">
        {incidents.length === 0 ? (
          <div className="brutal-card text-center py-12">
            <p className="text-gray-400 font-bold uppercase mb-4">No reports yet.</p>
            <p className="text-xs">Be the first to snitch.</p>
          </div>
        ) : (
          incidents.map((incident) => (
            <IncidentCard 
              key={incident.id} 
              incident={incident} 
              currentUserId={session.user.id} 
            />
          ))
        )}
      </div>
    </div>
  );
}