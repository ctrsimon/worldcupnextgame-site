import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "World Cup Next Game: Teams, Kickoff Time and Countdown",
  description: "See the next World Cup match, a live countdown to kickoff, your local start time, venue, and upcoming fixtures.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://worldcupnextgame.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
