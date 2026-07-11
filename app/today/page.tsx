import { StaticPage } from "@/components/layout/StaticPage";
import { mockMatches } from "@/lib/matches/mock-data";
import { formatKickoff } from "@/lib/time/format";
export default function TodayPage() { const matches = mockMatches.filter((match) => new Date(match.kickoffUtc).toISOString().slice(0, 10) === "2026-07-11"); return <StaticPage eyebrow="Today" title="World Cup matches today">{matches.length ? <ul>{matches.map((match) => <li key={match.id}>{match.homeTeam.name} vs {match.awayTeam.name} — {formatKickoff(match.kickoffUtc)}</li>)}</ul> : <p>No World Cup matches are scheduled in this sample schedule today. The next fixture is shown on the homepage.</p>}</StaticPage>; }
