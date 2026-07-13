import { StaticPage } from "@/components/layout/StaticPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
export const revalidate = 3600;
export default async function TomorrowPage() { const { matches: allMatches } = await getWorldCupMatchFeed(); const tomorrow = new Date(Date.now() + 86_400_000).toISOString().slice(0, 10); return <StaticPage eyebrow="Tomorrow (UTC)" title="World Cup matches tomorrow"><UpcomingMatches matches={allMatches.filter((match) => match.kickoffUtc.slice(0, 10) === tomorrow)} /></StaticPage>; }
