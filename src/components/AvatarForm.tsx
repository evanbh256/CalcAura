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

    if (!avatarUrl) {
      setError("Please select an image");
      setIsLoading(false);
      return;
    }

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 3 * 1024 * 1024) {
      setError("File size must be less than 3MB");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setAvatarUrl(reader.result as string);
      setError("");
    };
    reader.readAsDataURL(file);
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
            <label className="text-xs font-bold uppercase">Select Image</label>
            <input 
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="brutal-input w-full p-2 bg-white text-black"
              required
            />
            <p className="text-[10px] opacity-60">Max size: 3MB. Formats: JPG, PNG, GIF.</p>
          </div>

          {avatarUrl && (
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full overflow-hidden brutal-border border-aura-white">
                <img src={avatarUrl} alt="Preview" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

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
