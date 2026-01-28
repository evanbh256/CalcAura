import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CalcAura",
  description: "Aura Point Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-aura-black text-aura-white min-h-screen pb-24`}>
        <NextAuthProvider>
          <main className="max-w-md mx-auto p-4">
            {children}
          </main>
          <Navbar />
        </NextAuthProvider>
      </body>
    </html>
  );
}


