import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { NextAuthProvider } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Make it feel like a native app
};

export const metadata: Metadata = {
  title: "CalcAura",
  description: "Aura Point Tracker",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CalcAura",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-aura-black text-aura-white min-h-screen pb-24 overscroll-none`}>
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


