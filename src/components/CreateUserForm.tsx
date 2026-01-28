"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateUserForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      const res = await fetch("/api/admin/users", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed");
      }

      form.reset();
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="brutal-card bg-aura-black">
      {error && (
        <p className="bg-aura-loss text-white p-2 text-xs font-bold mb-4">{error}</p>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          name="username" 
          placeholder="Username" 
          required 
          className="w-full bg-aura-black brutal-border-white p-2 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Default Password" 
          required 
          className="w-full bg-aura-black brutal-border-white p-2 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
        />
        <button 
          type="submit" 
          disabled={loading}
          className="w-full brutal-button bg-aura-white text-aura-black text-sm py-2 uppercase hover:bg-aura-gain disabled:opacity-50"
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
}
