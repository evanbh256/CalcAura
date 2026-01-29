
import webpush from "web-push";
import { prisma } from "./prisma";

// Configure Web Push
if (process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY) {
  webpush.setVapidDetails(
    process.env.VAPID_SUBJECT || "mailto:admin@example.com",
    process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
    process.env.VAPID_PRIVATE_KEY
  );
}

export async function sendNotification(userId: string, title: string, body: string, url: string = "/") {
  try {
    const subscriptions = await prisma.pushSubscription.findMany({
      where: { userId }
    });

    if (subscriptions.length === 0) return;

    const payload = JSON.stringify({ title, body, url });

    const promises = subscriptions.map(sub => 
      webpush.sendNotification({
        endpoint: sub.endpoint,
        keys: {
          p256dh: sub.p256dh,
          auth: sub.auth
        }
      }, payload).catch(err => {
        if (err.statusCode === 410) {
          // Subscription expired/gone, delete it
          console.log(`Deleting expired subscription for user ${userId}`);
          return prisma.pushSubscription.delete({ where: { id: sub.id } });
        }
        console.error("Error sending push", err);
      })
    );

    await Promise.all(promises);
  } catch (error) {
    console.error("Failed to send notification", error);
  }
}
