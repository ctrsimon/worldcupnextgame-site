import { StaticPage } from "@/components/layout/StaticPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { formatKickoff } from "@/lib/time/format";
export const revalidate = 3600;
export default async function TodayPage() { const { matches: allMatches } = await getWorldCupMatchFeed(); const today = new Date().toISOString().slice(0, 10); const matches = allMatches.filter((match) => match.kickoffUtc.slice(0, 10) === today); return <StaticPage eyebrow="Today (UTC)" title="World Cup matches today">{matches.length ? <ul>{matches.map((match) => <li key={match.id}>{match.homeTeam.name} vs {match.awayTeam.name} — {formatKickoff(match.kickoffUtc)}</li>)}</ul> : <p>No World Cup matches are scheduled today.</p>}</StaticPage>; }
