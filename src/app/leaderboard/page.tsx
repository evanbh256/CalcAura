import { prisma } from "@/lib/prisma";

export default async function LeaderboardPage() {
  const users = await prisma.user.findMany({
    orderBy: { auraScore: "desc" }
  });

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-4xl font-black italic tracking-tighter uppercase">Leaderboard</h1>
        <p className="text-aura-gain font-bold text-xs uppercase">Current Season</p>
      </header>

      <div className="space-y-4">
        {users.map((user, index) => (
          <div key={user.id} className={`brutal-card flex items-center justify-between ${index === 0 ? "bg-aura-gain text-aura-black" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black">#{index + 1}</span>
              <div className="w-10 h-10 bg-aura-white brutal-border border-aura-black"></div>
              <span className="font-bold text-lg">{user.username}</span>
            </div>
            <span className="text-2xl font-black">{user.auraScore}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
