import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import Link from "next/link";

export const metadata = { title: "Argentina World Cup 2026 Schedule, Results and Next Match", description: "Argentina World Cup team page with the latest result, next possible opponent, kickoff times and match links." };
export const revalidate = 3600;

export default async function ArgentinaPage() {
  const { matches } = await getWorldCupMatchFeed();
  const teamMatches = matches.filter((match) => [match.homeTeam.name, match.awayTeam.name].includes("Argentina"));
  return <WorldCupSeoPage eyebrow="World Cup team guide" title="Argentina schedule" matches={teamMatches}>
    <p>Argentina’s World Cup 2026 route is currently centered on a quarterfinal result against Spain. Argentina won that match 2–1 at SoFi Stadium in Inglewood, a result that sent the team into the next knockout round and ended Spain’s quarterfinal run. This page collects the team’s match times, results and the next bracket context in one place.</p>
    <p>The previous result is Spain 1–2 Argentina. The score is shown from Spain’s perspective because Spain was the home-listed team in the fixture data; Argentina scored twice and advanced. Supporters checking the result should also open the <Link href="/match/spain-vs-argentina">match centre</Link> for the venue and the original kickoff reference.</p>
    <p>Argentina’s next possible opponent depends on the knockout bracket and the provider-confirmed fixture list. The team may face the winner of the next quarterfinal route, so the schedule will be updated when that opponent is confirmed. Until then, the full <Link href="/world-cup-schedule">World Cup schedule</Link> is the best way to follow the branch that leads toward the semifinal and final.</p>
    <p>The team page keeps Argentina’s identity separate from any one game. That makes it useful for supporters looking for results, future fixtures and venue context across the tournament, even after the next match has finished. When a new fixture is confirmed, its own match page supplies the local kickoff conversion, countdown and calendar link.</p>
    <p>Kickoff times on this page are anchored to UTC, while each match page offers a local timezone conversion in your browser. That distinction matters for Argentina supporters abroad and for anyone following games in different host cities. You can also compare Argentina’s route with the <Link href="/teams/england">England team schedule</Link> and return to the <Link href="/world-cup-next-game">next World Cup game</Link> for the tournament-wide countdown.</p>
  </WorldCupSeoPage>;
}
