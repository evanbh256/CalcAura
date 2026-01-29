"use client";

import { useState, useEffect } from "react";
import { Bell, BellOff, Loader2 } from "lucide-react";

export default function PushManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    } else {
      setLoading(false);
    }
  }, []);

  async function registerServiceWorker() {
    try {
      const registration = await navigator.serviceWorker.ready;
      const sub = await registration.pushManager.getSubscription();
      setSubscription(sub);
    } catch (e) {
      console.error("SW Error", e);
    } finally {
      setLoading(false);
    }
  }

  async function subscribe() {
    setLoading(true);
    try {
      const registration = await navigator.serviceWorker.ready;
      
      // Get public key
      const res = await fetch("/api/push/public-key");
      const { publicKey } = await res.json();

      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey)
      });

      // Save to server
      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subscription: sub })
      });

      setSubscription(sub);
      alert("Notifications enabled! You will now be alerted of new incidents.");
    } catch (e) {
      console.error("Subscription failed", e);
      alert("Failed to enable notifications. Make sure you are using a supported browser (Chrome, Safari iOS 16.4+).");
    } finally {
      setLoading(false);
    }
  }

  if (!isSupported) {
    return <div className="text-xs opacity-50 text-center">Push notifications not supported on this device.</div>;
  }

  if (loading) {
    return <div className="flex justify-center"><Loader2 className="animate-spin" /></div>;
  }

  if (subscription) {
    return (
      <div className="brutal-card bg-aura-black border-aura-gain text-aura-gain flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <Bell size={20} />
          <span className="font-bold uppercase text-xs">Notifications Active</span>
        </div>
        {/* We generally don't unsubscribe via UI, but just show state */}
      </div>
    );
  }

  return (
    <button 
      onClick={subscribe}
      className="w-full brutal-btn bg-aura-white text-aura-black flex items-center justify-center gap-2 py-3"
    >
      <Bell size={20} />
      <span className="font-bold uppercase">Enable Notifications</span>
    </button>
  );
}

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}
