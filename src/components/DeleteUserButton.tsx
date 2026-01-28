"use client";

import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function DeleteUserButton({ userId }: { userId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    if (!confirm("Are you sure you want to banish this user? This cannot be undone.")) return;
    
    setLoading(true);
    try {
      const res = await fetch("/api/admin/users", {
        method: "DELETE",
        body: JSON.stringify({ id: userId }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.refresh();
      } else {
        alert("Failed to delete");
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button 
      onClick={handleDelete} 
      disabled={loading}
      className="text-aura-loss hover:scale-110 transition-transform disabled:opacity-50"
      title="Delete User"
    >
      <Trash2 size={16} />
    </button>
  );
}
