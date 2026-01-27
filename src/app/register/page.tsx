"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error || "Registration failed");
      setLoading(false);
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center gap-8">
      <header>
        <h1 className="text-5xl font-black italic tracking-tighter uppercase mb-2">
          Join<span className="text-aura-gain">Aura</span>
        </h1>
        <p className="font-bold text-sm uppercase text-gray-400">
          Create your profile. Start at 1000.
        </p>
      </header>

      <div className="brutal-card space-y-6">
        <h2 className="text-2xl font-black uppercase border-b-4 border-aura-white pb-2">
          Register
        </h2>

        {error && (
          <div className="bg-aura-loss text-white font-bold p-3 border-2 border-white">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="block text-xs font-black uppercase">Username</label>
            <input
              name="username"
              type="text"
              required
              className="w-full bg-aura-black border-2 border-aura-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase">Password</label>
            <input
              name="password"
              type="password"
              required
              className="w-full bg-aura-black border-2 border-aura-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-xs font-black uppercase">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              required
              className="w-full bg-aura-black border-2 border-aura-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full brutal-button text-xl py-3 mt-4 bg-aura-gain text-aura-black uppercase hover:bg-white hover:shadow-none transition-all disabled:opacity-50"
          >
            {loading ? "Creating..." : "Initialize Profile"}
          </button>
        </form>
      </div>

      <div className="text-center">
        <p className="text-sm font-bold uppercase mb-2">Already have a score?</p>
        <Link 
          href="/login" 
          className="inline-block border-b-4 border-white text-white font-black hover:bg-white hover:text-black transition-colors px-1"
        >
          Login Here
        </Link>
      </div>
    </div>
  );
}
