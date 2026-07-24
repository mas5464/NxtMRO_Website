import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const barlowSemiCondensed = Barlow_Semi_Condensed({
  variable: "--font-barlow-semi-condensed",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "NxtMRO — AI-Powered Airline MRO Platform",
  description:
    "Next-generation Maintenance, Repair & Overhaul software for airlines. Predictive AI, digital work orders, compliance tracking, and intelligent scheduling — built around FAA and EASA workflows.",
  openGraph: {
    title: "NxtMRO — AI-Powered Airline MRO Platform",
    description:
      "The AI-driven MRO platform that keeps your fleet airworthy, your records audit-ready, and your team ahead of the schedule.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowSemiCondensed.variable} ${plexMono.variable}`}
    >
      <body className="antialiased bg-paper text-ink font-sans">{children}</body>
    </html>
  );
}
