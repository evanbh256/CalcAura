import Link from "next/link";
import { LayoutDashboard, Trophy, User, PlusCircle } from "lucide-react";

export default function Navbar() {
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
    </nav>
  );
}
