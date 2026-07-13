import Link from "next/link";
import type { Match } from "@/lib/matches/types";
import { formatKickoff } from "@/lib/time/format";
import { MatchStatusBadge } from "./MatchStatusBadge";
import { AdSlot } from "@/components/ads/AdSlot";

export function UpcomingMatches({ matches, showAd = false }: { matches: Match[]; showAd?: boolean }) {
  return <section className="upcoming" aria-labelledby="upcoming-title"><div className="section-heading"><p className="eyebrow">Keep watching</p><h2 id="upcoming-title">Upcoming matches</h2><Link href="/schedule">Full schedule</Link></div><div className="fixture-list">{matches.slice(0, 12).map((match, index) => <div key={match.id}><Link href={`/match/${match.slug}`} className="fixture"><time dateTime={match.kickoffUtc}>{formatKickoff(match.kickoffUtc, "UTC", false)}</time><div><strong>{match.homeTeam.name} <span>vs</span> {match.awayTeam.name}</strong><p>{match.stage}{match.venue?.city ? ` · ${match.venue.city}` : ""}</p></div><MatchStatusBadge status={match.status} /></Link>{showAd && index === 2 ? <AdSlot placement="schedule" className="in-feed-ad" /> : null}</div>)}</div></section>;
}
