import Link from "next/link";
import type { Match } from "@/lib/matches/types";
import { MatchCountdown } from "./MatchCountdown";
import { MatchStatusBadge } from "./MatchStatusBadge";
import { LocalKickoffTime } from "@/components/timezone/LocalKickoffTime";

export function NextMatchCard({ match }: { match: Match }) {
  return <article className="next-card" id="next-match">
    <div className="card-top"><p>{match.tournamentName} · {match.stage}</p><MatchStatusBadge status={match.status} /></div>
    <div className="teams"><Team team={match.homeTeam} /><span className="versus">VS</span><Team team={match.awayTeam} /></div>
    <MatchCountdown kickoffUtc={match.kickoffUtc} />
    <LocalKickoffTime kickoffUtc={match.kickoffUtc} />
    {match.venue && <p className="venue">{match.venue.name} <span>·</span> {match.venue.city}</p>}
    <div className="card-actions"><Link href={`/match/${match.slug}`}>Match details</Link><a href={`/api/matches/${match.slug}/calendar`}>Add to calendar</a></div>
  </article>;
}

function Team({ team }: { team: Match["homeTeam"] }) {
  return <div className="team">{team.flag ? <span className="flag" aria-hidden="true">{flagEmoji(team.flag)}</span> : <span className="placeholder-flag" aria-hidden="true" /> }<strong>{team.name}</strong></div>;
}
function flagEmoji(code: string) { return code.split("-")[0].toUpperCase().replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0))); }
