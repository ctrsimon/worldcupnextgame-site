import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./static.css";
import "./cinematic.css";

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-3374016401769525";

export const metadata: Metadata = {
  title: "World Cup Next Game: Teams, Kickoff Time and Countdown",
  description: "See the next World Cup match, a live countdown to kickoff, your local start time, venue, and upcoming fixtures.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://worldcupnextgame.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><Script id="adsense-verification" strategy="beforeInteractive" async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`} crossOrigin="anonymous" /></head><body>{children}</body></html>;
}
