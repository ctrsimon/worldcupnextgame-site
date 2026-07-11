import { notFound } from "next/navigation";
import { StaticPage } from "@/components/layout/StaticPage";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { mockMatches } from "@/lib/matches/mock-data";

export function generateStaticParams() { return [...new Set(mockMatches.flatMap((match) => [match.homeTeam.name, match.awayTeam.name]).map((name) => name.toLowerCase().replaceAll(" ", "-")))].map((slug) => ({ slug })); }
export default async function TeamPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const matches = mockMatches.filter((match) => [match.homeTeam.name, match.awayTeam.name].some((name) => name.toLowerCase().replaceAll(" ", "-") === slug)); if (!matches.length) notFound(); const name = matches.find((match) => match.homeTeam.name.toLowerCase().replaceAll(" ", "-") === slug)?.homeTeam.name || matches[0].awayTeam.name; return <StaticPage eyebrow="Team fixtures" title={`${name} schedule`}><UpcomingMatches matches={matches} /></StaticPage>; }
