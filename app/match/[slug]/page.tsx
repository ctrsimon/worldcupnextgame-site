import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ads/AdSlot";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NextMatchCard } from "@/components/match/NextMatchCard";
import { JsonLd } from "@/components/seo/JsonLd";
import { mockMatches } from "@/lib/matches/mock-data";
export function generateStaticParams() { return mockMatches.map((match) => ({ slug: match.slug })); }
export default async function MatchPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const match = mockMatches.find((item) => item.slug === slug);

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
