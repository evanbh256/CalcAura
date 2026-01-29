"use client";

import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

export default function LogoutButton() {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: "/login" })}
      className="w-full brutal-btn bg-aura-loss text-white flex items-center justify-center gap-2 mt-4"
    >
      <LogOut size={18} />
      <span className="font-bold uppercase">Logout</span>
    </button>
  );
}
