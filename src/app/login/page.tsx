"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
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

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid credentials");
      setLoading(false);
    } else {
      router.push("/");
      router.refresh();
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center gap-8">
      <header>
        <h1 className="text-6xl font-black italic tracking-tighter uppercase mb-2">
          Calc<span className="text-aura-gain">Aura</span>
        </h1>
        <p className="font-bold text-xl uppercase brutal-border-white bg-aura-white text-aura-black inline-block px-2">
          Private Access Only
        </p>
      </header>

      <div className="brutal-card space-y-6">
        <h2 className="text-2xl font-black uppercase border-b-4 border-aura-white pb-2">
          Login
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

          <button
            type="submit"
            disabled={loading}
            className="w-full brutal-button text-xl py-3 mt-4 bg-aura-white text-aura-black uppercase hover:bg-aura-gain disabled:opacity-50"
          >
            {loading ? "Accessing..." : "Enter System"}
          </button>
        </form>
      </div>

      <div className="text-center opacity-50">
        <p className="text-[10px] font-bold uppercase mb-2">Invite Only System</p>
      </div>
    </div>
  );
}
