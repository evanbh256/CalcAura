"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Clock, CheckCircle, XCircle, AlertTriangle, User } from "lucide-react";

type IncidentProps = {
  incident: {
    id: string;
    description: string;
    auraAmount: number;
    evidenceUrl?: string | null;
    status: string;
    createdAt: Date;
    expiresAt: Date;
    judgeId?: string | null;
    reporter: { username: string; avatarUrl: string | null };
    offender: { username: string; avatarUrl: string | null };
    votes: { userId: string; type: string; user: { username: string; avatarUrl: string | null } }[];
  };
  currentUserId: string;
};

export default function IncidentCard({ incident, currentUserId }: IncidentProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showVoters, setShowVoters] = useState(false);

  const agreeVotes = incident.votes.filter((v) => v.type === "AGREE");
  const disagreeVotes = incident.votes.filter((v) => v.type === "DISAGREE");
  
  const currentUserVote = incident.votes.find((v) => v.userId === currentUserId);
  const hasVoted = !!currentUserVote;
  const isClosed = ["APPROVED", "REJECTED"].includes(incident.status);
  const isJudge = incident.judgeId === currentUserId;

  async function handleVote(type: "AGREE" | "DISAGREE") {
    if (loading || isClosed) return;
    // Don't do anything if clicking the same vote
    if (currentUserVote?.type === type) return;
    
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

  const timeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - new Date(date).getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "mo ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "m ago";
    return "just now";
  };

  return (
    <div className={`brutal-card space-y-3 relative overflow-hidden ${isClosed ? 'opacity-75' : ''}`}>
      {/* Status Badge */}
      <div className={`absolute top-0 right-0 px-2 py-1 text-[10px] font-black uppercase flex items-center gap-1 bg-aura-black border-l-2 border-b-2 border-aura-white ${getStatusColor(incident.status)}`}>
        {getStatusIcon(incident.status)}
        {incident.status} • {timeAgo(incident.createdAt)}
      </div>

      <div className="flex justify-between items-start pr-16">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-sm">
             <div className="w-4 h-4 rounded-full overflow-hidden bg-aura-black border border-aura-gain flex items-center justify-center">
              {incident.reporter.avatarUrl ? (
                <img src={incident.reporter.avatarUrl} alt={incident.reporter.username} className="w-full h-full object-cover" />
              ) : (
                <User size={10} className="text-aura-gain" />
              )}
            </div>
            <span className="font-bold text-aura-gain">
              {incident.reporter.username}
            </span>
            <span className="text-[10px] opacity-50 uppercase">Reported</span>
          </div>
          <div className="flex items-center gap-2 mt-1">
            <div className="w-8 h-8 rounded-full overflow-hidden bg-aura-white border-2 border-aura-white flex items-center justify-center">
              {incident.offender.avatarUrl ? (
                <img src={incident.offender.avatarUrl} alt={incident.offender.username} className="w-full h-full object-cover" />
              ) : (
                <User size={16} className="text-aura-black" />
              )}
            </div>
            <span className="text-xl font-black text-aura-white">{incident.offender.username}</span>
          </div>
        </div>
        <span className={`text-2xl font-black ${incident.auraAmount > 0 ? "text-aura-gain" : "text-aura-loss"}`}>
          {incident.auraAmount > 0 ? "+" : ""}{incident.auraAmount}
        </span>
      </div>

      <p className="text-sm font-bold border-l-4 border-aura-white pl-3 py-1 italic">
        "{incident.description}"
      </p>

      {incident.evidenceUrl && (
        <div className="mt-3">
          {incident.evidenceUrl.match(/\.(mp4|webm|ogg)$/i) ? (
            <video src={incident.evidenceUrl} controls className="w-full brutal-border-white" />
          ) : (
            <img src={incident.evidenceUrl} alt="Evidence" className="w-full brutal-border-white" />
          )}
        </div>
      )}

      {!isClosed && (
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => handleVote("AGREE")}
            disabled={loading}
            className={`flex-1 brutal-button text-xs py-2 flex justify-center items-center gap-2 
              ${currentUserVote?.type === 'AGREE' 
                ? 'bg-aura-gain text-aura-black ring-2 ring-white ring-offset-2 ring-offset-black' 
                : 'bg-aura-gain/20 text-aura-gain border-aura-gain/50 hover:bg-aura-gain hover:text-aura-black'}`}
          >
            AGREE ({agreeVotes.length})
          </button>
          <button
            onClick={() => handleVote("DISAGREE")}
            disabled={loading}
            className={`flex-1 brutal-button text-xs py-2 flex justify-center items-center gap-2
              ${currentUserVote?.type === 'DISAGREE' 
                ? 'bg-aura-loss text-aura-black ring-2 ring-white ring-offset-2 ring-offset-black' 
                : 'bg-aura-loss/20 text-aura-loss border-aura-loss/50 hover:bg-aura-loss hover:text-aura-black'}`}
          >
            DISAGREE ({disagreeVotes.length})
          </button>
        </div>
      )}

      {/* Voters Toggle */}
      <button 
        onClick={() => setShowVoters(!showVoters)}
        className="w-full text-[10px] uppercase font-bold text-center opacity-60 hover:opacity-100 mt-2"
      >
        {showVoters ? "Hide Voters" : `See who voted (${incident.votes.length})`}
      </button>

      {/* Voters List */}
      {showVoters && (
        <div className="grid grid-cols-2 gap-4 pt-2 border-t border-gray-800">
          <div>
             <span className="text-[10px] text-aura-gain font-bold uppercase block mb-1">Agreed</span>
             <div className="space-y-1">
               {agreeVotes.map(v => (
                 <div key={v.userId} className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        {v.user.avatarUrl ? <img src={v.user.avatarUrl} className="w-full h-full object-cover"/> : <User size={10} />}
                    </div>
                    <span className="opacity-80">{v.user.username}</span>
                 </div>
               ))}
               {agreeVotes.length === 0 && <span className="text-[10px] opacity-40 italic">None</span>}
             </div>
          </div>
          <div>
             <span className="text-[10px] text-aura-loss font-bold uppercase block mb-1">Disagreed</span>
             <div className="space-y-1">
               {disagreeVotes.map(v => (
                 <div key={v.userId} className="flex items-center gap-2 text-xs">
                    <div className="w-4 h-4 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                        {v.user.avatarUrl ? <img src={v.user.avatarUrl} className="w-full h-full object-cover"/> : <User size={10} />}
                    </div>
                    <span className="opacity-80">{v.user.username}</span>
                 </div>
               ))}
               {disagreeVotes.length === 0 && <span className="text-[10px] opacity-40 italic">None</span>}
             </div>
          </div>
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

      {isClosed && !showVoters && (
        <div className="flex justify-between text-xs font-bold opacity-60 pt-2 border-t-2 border-gray-800 mt-2">
          <span>Agreed: {agreeVotes.length}</span>
          <span>Disagreed: {disagreeVotes.length}</span>
        </div>
      )}
    </div>
  );
}
