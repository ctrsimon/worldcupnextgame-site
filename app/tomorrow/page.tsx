import { StaticPage } from "@/components/layout/StaticPage";
import { mockMatches } from "@/lib/matches/mock-data";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
export default function TomorrowPage() { return <StaticPage eyebrow="Tomorrow" title="World Cup matches tomorrow"><UpcomingMatches matches={mockMatches.filter((match) => match.kickoffUtc.startsWith("2026-07-12"))} /></StaticPage>; }
