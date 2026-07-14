import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NextMatchCard } from "@/components/match/NextMatchCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";

export const revalidate = 3600;
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { matches } = await getWorldCupMatchFeed();
  const match = matches.find((item) => item.slug === slug);
  return match ? { title: `${match.homeTeam.name} vs ${match.awayTeam.name}: ${match.tournamentName} ${match.stage} Time, Date and Countdown`, description: `${match.homeTeam.name} vs ${match.awayTeam.name} ${match.stage} kickoff time, venue, local timezone conversion and countdown.` } : { title: "World Cup match centre" };
}
export default async function MatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { matches } = await getWorldCupMatchFeed();
  const match = matches.find((item) => item.slug === slug);

  if (!match) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: `${match.homeTeam.name} vs ${match.awayTeam.name}`,
    startDate: match.kickoffUtc,
    eventStatus: "https://schema.org/EventScheduled",
    location: match.venue ? { "@type": "Place", name: match.venue.name, address: match.venue.city } : undefined,
    competitor: [{ "@type": "SportsTeam", name: match.homeTeam.name }, { "@type": "SportsTeam", name: match.awayTeam.name }],
  };

  return (
    <>
      <Header />
      <main className="static-page match-page">
        <JsonLd data={schema} />
        <p className="eyebrow">Match centre</p>
        <NextMatchCard match={match} />
        <AdSlot placement="match" className="inline-ad" />
      </main>
      <Footer />
    </>
  );
}
