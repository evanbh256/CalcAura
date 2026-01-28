import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { User, Trophy, AlertTriangle, ScrollText } from "lucide-react";

import ChangePasswordForm from "@/components/ChangePasswordForm";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  // Fetch current user data with relations
  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: {
      reportsFiled: { orderBy: { createdAt: 'desc' }, take: 5 },
      reportsAgainst: { orderBy: { createdAt: 'desc' }, take: 5 },
    }
  });

  if (!user) redirect("/login");

  // Calculate Rank
  // Count how many users have a higher score than the current user
  const higherScoringUsers = await prisma.user.count({
    where: { auraScore: { gt: user.auraScore } }
  });
  const rank = higherScoringUsers + 1;

  // Combine history for the list
  const history = [
    ...user.reportsFiled.map(r => ({ ...r, type: 'FILED' })),
    ...user.reportsAgainst.map(r => ({ ...r, type: 'AGAINST' }))
  ].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).slice(0, 5);

  return (
    <div className="space-y-8 pb-24">
      <header className="flex flex-col items-center gap-4 pt-8">
        <div className="w-32 h-32 bg-aura-white brutal-border border-aura-white rounded-full flex items-center justify-center overflow-hidden">
           {/* If we had real avatars, we'd use <img src={user.avatarUrl} /> */}
           <User size={64} className="text-aura-black" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black uppercase tracking-tight">{user.username}</h1>
          <p className="text-aura-gain font-bold uppercase">Rank #{rank} • Season 1</p>
        </div>
      </header>

      {/* Main Stat Card */}
      <div className="brutal-card text-center py-8 bg-aura-gain text-aura-black">
        <p className="text-sm font-black uppercase mb-2">Current Aura</p>
        <p className="text-6xl font-black tracking-tighter">{user.auraScore}</p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-4">
        <div className="brutal-card flex flex-col items-center gap-2">
          <AlertTriangle size={24} className="text-aura-loss" />
          <span className="text-2xl font-black">{user.reportsAgainst.length}</span>
          <span className="text-[10px] font-bold uppercase text-center opacity-60">Incidents Against</span>
        </div>
        <div className="brutal-card flex flex-col items-center gap-2">
          <Trophy size={24} className="text-aura-white" />
          <span className="text-2xl font-black">{user.reportsFiled.length}</span>
          <span className="text-[10px] font-bold uppercase text-center opacity-60">Snitched Count</span>
        </div>
      </div>

      {/* History Section */}
      <div className="space-y-4">
        <h2 className="text-xl font-black uppercase border-b-4 border-aura-white inline-block">Recent Activity</h2>
        <div className="space-y-2">
          {history.length === 0 ? (
            <div className="brutal-card opacity-50">
              <p className="text-center text-xs font-bold uppercase">No recent activity</p>
            </div>
          ) : (
            history.map((item) => (
              <div key={item.id} className="brutal-card p-3 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {item.type === 'FILED' ? (
                    <ScrollText size={16} className="text-aura-gain" />
                  ) : (
                    <AlertTriangle size={16} className="text-aura-loss" />
                  )}
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase">
                      {item.type === 'FILED' ? 'You Reported' : 'Reported For'}
                    </span>
                    <span className="text-[10px] opacity-60 truncate max-w-[150px]">
                      {item.description}
                    </span>
                  </div>
                </div>
                <span className={`font-black ${item.auraAmount > 0 ? 'text-aura-gain' : 'text-aura-loss'}`}>
                  {item.auraAmount > 0 ? '+' : ''}{item.auraAmount}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <ChangePasswordForm />
    </div>
  );
}

