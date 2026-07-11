import Link from "next/link";
import type { Match } from "@/lib/matches/types";
import { formatKickoff } from "@/lib/time/format";
import { MatchStatusBadge } from "./MatchStatusBadge";

export function UpcomingMatches({ matches }: { matches: Match[] }) {
  return <section className="upcoming" aria-labelledby="upcoming-title"><div className="section-heading"><p className="eyebrow">Keep watching</p><h2 id="upcoming-title">Upcoming matches</h2><Link href="/schedule">Full schedule</Link></div><div className="fixture-list">{matches.slice(0, 5).map((match) => <Link href={`/match/${match.slug}`} className="fixture" key={match.id}><time dateTime={match.kickoffUtc}>{formatKickoff(match.kickoffUtc, "UTC", false)}</time><div><strong>{match.homeTeam.name} <span>vs</span> {match.awayTeam.name}</strong><p>{match.stage} · {match.venue?.city}</p></div><MatchStatusBadge status={match.status} /></Link>)}</div></section>;
}
