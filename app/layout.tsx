import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NxtMRO — AI-Powered Airline MRO Platform",
  description:
    "Next-generation Maintenance, Repair & Overhaul software for airlines. Predictive AI, digital work orders, compliance automation, and intelligent scheduling — all in one platform.",
  openGraph: {
    title: "NxtMRO — AI-Powered Airline MRO Platform",
    description:
      "The AI-driven MRO platform that keeps your fleet airworthy, your team efficient, and your operation ahead of the curve.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased bg-slate-950">{children}</body>
    </html>
  );
}
