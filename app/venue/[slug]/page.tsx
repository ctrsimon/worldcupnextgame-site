import { notFound } from "next/navigation";
import { StaticPage } from "@/components/layout/StaticPage";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { slugify } from "@/lib/matches/slug";
export const revalidate = 3600;
export default async function VenuePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const { matches: allMatches } = await getWorldCupMatchFeed(); const matches = allMatches.filter((match) => match.venue && slugify(match.venue.name) === slug); if (!matches.length) notFound(); const venue = matches[0].venue!; return <StaticPage eyebrow={venue.city} title={venue.name}><p>Upcoming World Cup fixtures at this venue.</p><UpcomingMatches matches={matches} /></StaticPage>; }
