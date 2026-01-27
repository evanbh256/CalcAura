import { prisma } from "./prisma";

/**
 * Rule 4: SEASONS & RESETS
 * On the 1st of every month, record winner and reset scores.
 */
export async function checkAndHandleSeasonReset() {
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  // Check if we already recorded a winner for last month
  const lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
  const lastMonthYear = currentMonth === 1 ? currentYear - 1 : currentYear;

  const existingSeason = await prisma.season.findFirst({
    where: { month: lastMonth, year: lastMonthYear }
  });

  if (existingSeason) return; // Already reset for this period

  // Only run on the 1st of the month (or after)
  if (now.getDate() >= 1) {
    // 1. Record the current winner
    const winner = await prisma.user.findFirst({
      orderBy: { auraScore: "desc" }
    });

    if (winner) {
      await prisma.season.create({
        data: {
          month: lastMonth,
          year: lastMonthYear,
          winnerId: winner.id,
          winnerName: winner.username,
          winnerScore: winner.auraScore
        }
      });
    }

    // 2. Reset everyone's score back to 1000
    await prisma.user.updateMany({
      data: { auraScore: 1000 }
    });

    // 3. Optional: Logic to "Clear the main feed" could be filtering by date in queries
  }
}
