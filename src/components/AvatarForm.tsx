"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Camera, Save, X } from "lucide-react";

interface AvatarFormProps {
  initialAvatarUrl: string | null;
}

export default function AvatarForm({ initialAvatarUrl }: AvatarFormProps) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState(initialAvatarUrl || "");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("/api/user/avatar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ avatarUrl }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to update avatar");
      }

      setIsEditing(false);
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isEditing) {
    return (
      <button 
        onClick={() => setIsEditing(true)}
        className="absolute bottom-0 right-0 bg-aura-gain text-aura-black p-2 rounded-full border-2 border-aura-black hover:scale-110 transition-transform"
        title="Change Avatar"
      >
        <Camera size={16} />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="brutal-card w-full max-w-sm space-y-4">
        <h3 className="text-xl font-black uppercase">Update Avatar</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold uppercase">Image URL</label>
            <input 
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
              placeholder="https://example.com/image.png"
              className="brutal-input w-full"
              required
            />
            <p className="text-[10px] opacity-60">Paste a direct link to an image.</p>
          </div>

          {error && <p className="text-aura-loss text-xs font-bold">{error}</p>}

          <div className="flex gap-2">
            <button 
              type="button" 
              onClick={() => setIsEditing(false)}
              className="flex-1 brutal-btn bg-gray-600 text-white flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              <X size={16} /> Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 brutal-btn bg-aura-gain text-aura-black flex justify-center items-center gap-2"
              disabled={isLoading}
            >
              <Save size={16} /> {isLoading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
