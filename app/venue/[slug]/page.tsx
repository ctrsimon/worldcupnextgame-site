import { notFound } from "next/navigation";
import { StaticPage } from "@/components/layout/StaticPage";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { mockMatches } from "@/lib/matches/mock-data";
const slugify = (value: string) => value.toLowerCase().replaceAll(" ", "-");
export function generateStaticParams() { return mockMatches.filter((match) => match.venue).map((match) => ({ slug: slugify(match.venue!.name) })); }
export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const matches = mockMatches.filter((match) => match.venue && slugify(match.venue.name) === slug); if (!matches.length) notFound(); const venue = matches[0].venue!; return <StaticPage eyebrow={venue.city} title={venue.name}><p>Upcoming World Cup fixtures at this venue.</p><UpcomingMatches matches={matches} /></StaticPage>; }
