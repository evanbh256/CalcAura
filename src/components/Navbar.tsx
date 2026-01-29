"use client";

import Link from "next/link";
import { LayoutDashboard, Trophy, User, PlusCircle, ShieldAlert } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const isAdmin = session?.user?.isAdmin;

  if (status !== "authenticated") {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-aura-black border-t-4 border-aura-white h-20 flex items-center justify-around px-4 z-50">
      <Link href="/" className="flex flex-col items-center gap-1 group">
        <LayoutDashboard className="group-hover:text-aura-gain transition-colors" />
        <span className="text-[10px] font-black uppercase">Feed</span>
      </Link>
      <Link href="/leaderboard" className="flex flex-col items-center gap-1 group">
        <Trophy className="group-hover:text-aura-gain transition-colors" />
        <span className="text-[10px] font-black uppercase">Board</span>
      </Link>
      <Link href="/report" className="flex flex-col items-center gap-1 group bg-aura-gain text-aura-black px-4 py-2 brutal-border border-aura-black hover:scale-105 transition-transform">
        <PlusCircle size={24} strokeWidth={3} />
        <span className="text-[10px] font-black uppercase">Report</span>
      </Link>
      <Link href="/profile" className="flex flex-col items-center gap-1 group">
        <User className="group-hover:text-aura-gain transition-colors" />
        <span className="text-[10px] font-black uppercase">Profile</span>
      </Link>
      {isAdmin && (
        <Link href="/admin" className="flex flex-col items-center gap-1 group">
          <ShieldAlert className="text-aura-loss group-hover:text-white transition-colors" />
          <span className="text-[10px] font-black uppercase text-aura-loss">Admin</span>
        </Link>
      )}
    </nav>
  );
}

