# CalcAura | Raw Democracy

**CalcAura** is a private, brutalist social score tracker designed for close-knit friend groups. It tracks "Aura Points" based on real-world actions, allowing friends to report, vote, and judge each other in a gamified social experiment.

![CalcAura Feed](https://calc-aura.vercel.app/)

## ⚡ Features

### 1. The Aura System
- Everyone starts with **1000 Aura**.
- Friends report incidents ("Snitching") to add or deduct points.
- **Real-time Leaderboard** tracks the current hierarchy.

### 2. Raw Democracy (Voting)
- Every report is voted on by the group.
- **>50% Agree:** The report is **APPROVED** instantly. Points are applied.
- **Any Disagree:** The report becomes **DISPUTED**.
- **Spam Cooldown:** You cannot report the same person twice in 1 hour.

### 3. The Judge Protocol
- If a report is DISPUTED, a 24-hour timer starts.
- If no consensus is reached, the system assigns a **Judge**.
- **The Judge** is the user with the **Highest Aura Score** who is NOT involved in the incident.
- The Judge has absolute power to Approve or Reject the case.

### 4. The Pulse System
- Automated logic handles expirations and monthly resets.
- **Season Resets:** On the 1st of every month, a winner is recorded, and scores reset to 1000.

## 🛠 Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Database:** Postgres (via Prisma ORM)
- **Styling:** Tailwind CSS (Brutalist / High Contrast)
- **Auth:** NextAuth.js
- **Deployment:** Vercel

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- A Postgres Database (Vercel Postgres recommended)

### Installation

1.  **Clone the repo**
    ```bash
    git clone https://github.com/your-username/calcaura.git
    cd calcaura
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Create a `.env` file based on the example:
    ```env
    POSTGRES_PRISMA_URL="postgres://..."
    NEXTAUTH_SECRET="your-secret"
    NEXTAUTH_URL="http://localhost:3000"
    ```

4.  **Initialize Database**
    ```bash
    npx prisma db push
    ```

5.  **Seed Data (Optional)**
    Adds default users (Evan, Tenzing, etc.) and admin access.
    ```bash
    npx tsx prisma/seed.ts
    ```

6.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 🛡 Admin & Security

- **Invite Only:** Public registration is disabled. Users must be added by an Admin.
- **Admin Panel:** Admins can add/remove users via `/admin`.
- **Default Admin:** The seed script sets 'Evan' as the default admin.

## 🤝 Contributing

This is a private project for the boys. If you have a feature idea, push it to main and pray it doesn't break the build.

---
*Built with hate and neon green by Evan.*
