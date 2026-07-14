import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import Link from "next/link";

export const metadata = { title: "World Cup Final 2026: Date, Kickoff Time, Venue and Route", description: "World Cup final date, kickoff time, venue, timezone help and the semifinal routes that decide the finalists." };
export const revalidate = 3600;

export default async function WorldCupFinalPage() {
  const { matches } = await getWorldCupMatchFeed();
  const match = matches.find((item) => item.slug === "world-cup-final");
  return <WorldCupSeoPage eyebrow="World Cup 2026" title="World Cup final" match={match}>
    <p>The 2026 World Cup final is scheduled for Sunday, July 19, 2026. The tournament’s deciding match is listed for 19:00 UTC at MetLife Stadium in East Rutherford, New Jersey. The match card above converts that kickoff into your browser’s timezone and keeps a countdown available until the final begins.</p>
    <p>The finalists are not confirmed yet. One finalist will come from the France vs Spain semifinal, while the other will come from the opposite semifinal in the knockout bracket. That means the next possible opponent for either semifinal winner is the winner of the other semifinal. Check the <Link href="/matches/france-vs-spain">France vs Spain match page</Link> for the first route and the <Link href="/world-cup-schedule">World Cup schedule</Link> for the remaining bracket.</p>
    <p>MetLife Stadium is in the New York metropolitan area and is the final venue in this fixture guide. Because the final is listed in UTC, supporters in North America, Europe, Asia and Oceania can compare the same reference time without ambiguity. The local kickoff display is useful for planning travel, television coverage or a late-night watch-along.</p>
    <p>A final preview should distinguish confirmed facts from bracket possibilities. The date, UTC kickoff and venue are the scheduled details; the two team names remain open until both semifinals are complete. That distinction keeps the page accurate during the transition from semifinal week to final week and avoids presenting a possible opponent as if it were already official.</p>
    <p>The previous results that shape the final route are France’s 2–0 win over Mexico and Spain’s 1–2 defeat by Argentina in the quarterfinal stage. Those results explain why France and Spain meet in a semifinal rather than a quarterfinal rematch. Once the semifinal results are known, this permanent final URL can continue to describe the final without replacing the page or changing its address.</p>
  </WorldCupSeoPage>;
}
