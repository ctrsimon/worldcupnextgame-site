import { notFound } from "next/navigation";
import { StaticPage } from "@/components/layout/StaticPage";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { slugify } from "@/lib/matches/slug";

export const revalidate = 3600;
export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const { matches: allMatches } = await getWorldCupMatchFeed(); const matches = allMatches.filter((match) => [match.homeTeam.name, match.awayTeam.name].some((name) => slugify(name) === slug)); if (!matches.length) notFound(); const name = matches.find((match) => slugify(match.homeTeam.name) === slug)?.homeTeam.name || matches[0].awayTeam.name; return <StaticPage eyebrow="Team fixtures" title={`${name} schedule`}><UpcomingMatches matches={matches} /></StaticPage>; }
