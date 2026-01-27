"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, CheckCircle, XCircle, AlertTriangle, User } from "lucide-react";

type IncidentProps = {
  incident: {
    id: string;
    description: string;
    auraAmount: number;
    status: string;
    createdAt: Date;
    expiresAt: Date;
    judgeId?: string | null;
    reporter: { username: string; avatarUrl: string | null };
    offender: { username: string; avatarUrl: string | null };
    votes: { userId: string; type: string }[];
  };
  currentUserId: string;
};

export default function IncidentCard({ incident, currentUserId }: IncidentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const agreeCount = incident.votes.filter((v) => v.type === "AGREE").length;
  const disagreeCount = incident.votes.filter((v) => v.type === "DISAGREE").length;
  const hasVoted = incident.votes.some((v) => v.userId === currentUserId);
  const isClosed = ["APPROVED", "REJECTED"].includes(incident.status);
  const isJudge = incident.judgeId === currentUserId;

  async function handleVote(type: "AGREE" | "DISAGREE") {
    if (hasVoted || loading || isClosed) return;
    setLoading(true);

    try {
      const res = await fetch("/api/votes", {
        method: "POST",
        body: JSON.stringify({ incidentId: incident.id, type }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function resolveAsJudge(decision: "APPROVED" | "REJECTED") {
    if (loading) return;
    setLoading(true);

    try {
      const res = await fetch(`/api/incidents/${incident.id}/resolve`, {
        method: "POST",
        body: JSON.stringify({ decision }),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.refresh();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "APPROVED": return "text-aura-gain";
      case "REJECTED": return "text-aura-loss";
      case "DISPUTED": return "text-yellow-400";
      default: return "text-gray-400";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "APPROVED": return <CheckCircle size={16} />;
      case "REJECTED": return <XCircle size={16} />;
      case "DISPUTED": return <AlertTriangle size={16} />;
      default: return <Clock size={16} />;
    }
  };

  return (
    <div className={`brutal-card space-y-3 relative overflow-hidden ${isClosed ? 'opacity-75' : ''}`}>
      {/* Status Badge */}
      <div className={`absolute top-0 right-0 px-2 py-1 text-[10px] font-black uppercase flex items-center gap-1 bg-aura-black border-l-2 border-b-2 border-aura-white ${getStatusColor(incident.status)}`}>
        {getStatusIcon(incident.status)}
        {incident.status}
      </div>

      <div className="flex justify-between items-start pr-16">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
            <span className="font-bold text-aura-gain flex items-center gap-1">
              <User size={12} /> {incident.reporter.username}
            </span>
            <span className="text-[10px] opacity-50 uppercase">Reported</span>
          </div>
          <div className="flex items-center gap-2 text-xl font-black text-aura-white">
            <span>{incident.offender.username}</span>
          </div>
        </div>
        <span className={`text-2xl font-black ${incident.auraAmount > 0 ? "text-aura-gain" : "text-aura-loss"}`}>
          {incident.auraAmount > 0 ? "+" : ""}{incident.auraAmount}
        </span>
      </div>

      <p className="text-sm font-bold border-l-4 border-aura-white pl-3 py-1 italic">
        "{incident.description}"
      </p>

      {!isClosed && (
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => handleVote("AGREE")}
            disabled={hasVoted || loading}
            className={`flex-1 brutal-button text-xs py-2 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed
              ${hasVoted ? 'bg-gray-800 text-gray-400 border-gray-600' : 'bg-aura-gain text-aura-black hover:bg-green-400'}`}
          >
            AGREE ({agreeCount})
          </button>
          <button
            onClick={() => handleVote("DISAGREE")}
            disabled={hasVoted || loading}
            className={`flex-1 brutal-button text-xs py-2 flex justify-center items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed
              ${hasVoted ? 'bg-gray-800 text-gray-400 border-gray-600' : 'bg-aura-loss text-aura-black hover:bg-red-500'}`}
          >
            DISAGREE ({disagreeCount})
          </button>
        </div>
      )}

      {/* Judge Interface */}
      {incident.status === "DISPUTED" && isJudge && !isClosed && (
        <div className="mt-4 pt-4 border-t-4 border-aura-white bg-aura-white text-aura-black -mx-4 -mb-4 p-4">
          <p className="text-[10px] font-black uppercase mb-2 flex items-center gap-2">
            <AlertTriangle size={14} /> You are the Judge. Decide their fate.
          </p>
          <div className="flex gap-2">
            <button 
              onClick={() => resolveAsJudge("APPROVED")}
              className="flex-1 bg-aura-gain text-aura-black font-black py-2 brutal-border border-aura-black text-xs hover:scale-105 transition-transform"
            >
              APPROVE (GIVE POINTS)
            </button>
            <button 
              onClick={() => resolveAsJudge("REJECTED")}
              className="flex-1 bg-aura-loss text-aura-black font-black py-2 brutal-border border-aura-black text-xs hover:scale-105 transition-transform"
            >
              REJECT (CANCEL)
            </button>
          </div>
        </div>
      )}

      {isClosed && (
        <div className="flex justify-between text-xs font-bold opacity-60 pt-2 border-t-2 border-gray-800 mt-2">
          <span>Agreed: {agreeCount}</span>
          <span>Disagreed: {disagreeCount}</span>
        </div>
      )}
    </div>
  );
}
