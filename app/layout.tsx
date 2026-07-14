import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";
import "./static.css";
import "./cinematic.css";

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

export const metadata: Metadata = {
  title: "World Cup Next Game: Teams, Kickoff Time and Countdown",
  description: "See the next World Cup match, a live countdown to kickoff, your local start time, venue, and upcoming fixtures.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://worldcupnextgame.com"),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", name: "World Cup Next Game", url: "https://worldcupnextgame.com", description: "World Cup match kickoff times, countdowns, venues and schedules." };
  return <html lang="en"><head>{adsenseClientId ? <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClientId}`} crossOrigin="anonymous" /> : null}<JsonLd data={websiteSchema} /></head><body>{children}<Analytics /></body></html>;
}
