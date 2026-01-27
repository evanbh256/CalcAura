"use client";

import { useState } from "react";
import { Lock } from "lucide-react";

export default function ChangePasswordForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setMsg({ type: "", text: "" });

    const form = e.currentTarget;
    const formData = new FormData(form);
    const currentPassword = formData.get("currentPassword");
    const newPassword = formData.get("newPassword");

    try {
      const res = await fetch("/api/user/password", {
        method: "POST",
        body: JSON.stringify({ currentPassword, newPassword }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed");
      }

      setMsg({ type: "success", text: "Password updated!" });
      form.reset();
      setTimeout(() => setIsOpen(false), 2000);
    } catch (err: any) {
      setMsg({ type: "error", text: err.message });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="brutal-card mt-8">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full text-left font-black uppercase"
      >
        <Lock size={20} /> Change Password
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          {msg.text && (
            <p className={`text-xs font-bold p-2 ${msg.type === "error" ? "bg-aura-loss text-white" : "bg-aura-gain text-black"}`}>
              {msg.text}
            </p>
          )}
          
          <input 
            name="currentPassword"
            type="password"
            placeholder="Current Password"
            required
            className="w-full bg-aura-black brutal-border-white p-2 text-sm font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
          />
          <input 
            name="newPassword"
            type="password"
            placeholder="New Password"
            required
            className="w-full bg-aura-black brutal-border-white p-2 text-sm font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors"
          />
          <button 
            type="submit"
            disabled={loading}
            className="w-full brutal-button bg-aura-white text-aura-black text-xs py-2 uppercase hover:bg-aura-gain disabled:opacity-50"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>
      )}
    </div>
  );
}
