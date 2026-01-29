"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "lucide-react";

type UserType = {
  id: string;
  username: string;
};

export default function ReportForm({ users }: { users: UserType[] }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const offenderId = formData.get("offenderId") as string;
    const description = formData.get("description") as string;
    const amountStr = formData.get("amount") as string;
    const type = formData.get("type") as string;

    if (!offenderId || !description || !amountStr) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    const amount = parseInt(amountStr);
    const auraAmount = type === "loss" ? -amount : amount;

    try {
      let evidenceUrl = "";
      const file = formData.get("evidence") as File;

      if (file && file.size > 0) {
        const uploadFormData = new FormData();
        uploadFormData.append("file", file);
        
        const uploadRes = await fetch("/api/upload", {
          method: "POST",
          body: uploadFormData,
        });

        if (!uploadRes.ok) {
          const errorData = await uploadRes.json().catch(() => ({}));
          throw new Error(errorData.error || uploadRes.statusText || "Failed to upload evidence");
        }
        
        const uploadData = await uploadRes.json();
        evidenceUrl = uploadData.url;
      }

      const res = await fetch("/api/incidents", {
        method: "POST",
        body: JSON.stringify({
          offenderId,
          description,
          auraAmount,
          evidenceUrl,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit report");
      }

      router.push("/");
      router.refresh(); // Refresh feed
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-aura-loss text-white font-bold p-3 border-2 border-white">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label className="block text-xs font-black uppercase">Who is the offender?</label>
        <div className="relative">
          <select 
            name="offenderId"
            defaultValue=""
            className="w-full bg-aura-black brutal-border-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors appearance-none rounded-none"
          >
            <option value="" disabled>Select a friend...</option>
            {users.map(u => (
              <option key={u.id} value={u.id}>{u.username}</option>
            ))}
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <User size={16} />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-black uppercase">Description (The Crime)</label>
        <textarea 
          name="description"
          className="w-full bg-aura-black brutal-border-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors h-32 rounded-none resize-none"
          placeholder="Describe exactly what happened..."
        ></textarea>
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-black uppercase">Evidence (Optional)</label>
        <input 
          name="evidence"
          type="file"
          accept="image/*,video/*"
          className="w-full bg-aura-black brutal-border-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors rounded-none file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-sm file:font-semibold file:bg-aura-white file:text-aura-black hover:file:bg-gray-200"
        />
      </div>

      <div className="space-y-2">
        <label className="block text-xs font-black uppercase">Aura Impact</label>
        <div className="flex gap-4">
           <input 
            name="amount"
            type="number" 
            min="1"
            className="flex-1 bg-aura-black brutal-border-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors rounded-none"
            placeholder="Amount (e.g. 50)"
          />
          <select 
            name="type"
            className="w-1/3 bg-aura-black brutal-border-white p-3 font-bold focus:bg-aura-white focus:text-aura-black outline-none transition-colors rounded-none appearance-none text-center"
          >
            <option value="loss">- Loss</option>
            <option value="gain">+ Gain</option>
          </select>
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className="w-full brutal-button text-2xl py-4 mt-4 bg-aura-gain uppercase hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Case"}
      </button>
    </form>
  );
}
