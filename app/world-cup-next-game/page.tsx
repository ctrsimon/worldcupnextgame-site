import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { selectNextMatch } from "@/lib/matches/selectNextMatch";
import Link from "next/link";

export const metadata = { title: "World Cup Next Game: France vs Spain Time, Date and Countdown", description: "Find the next World Cup game, France vs Spain, with kickoff time, local timezone conversion, venue and countdown." };
export const revalidate = 3600;

export default async function WorldCupNextGamePage() {
  const { matches } = await getWorldCupMatchFeed();
  const selection = selectNextMatch(matches);
  const match = selection.kind === "complete" ? matches.find((item) => item.slug === "france-vs-spain") : selection.matches[0];
  if (!match) return null;
  return <WorldCupSeoPage eyebrow="Next World Cup game" title={`${match.homeTeam.name} vs ${match.awayTeam.name}`} match={match}>
    <p>The next World Cup game is {match.homeTeam.name} vs {match.awayTeam.name} in the semifinal on Tuesday, July 14, 2026. See the kickoff time in your timezone, venue information, countdown, and the remaining World Cup schedule.</p>
    <p>The listed kickoff is 19:00 UTC. The live local-time line in the match card uses your browser timezone, so it can show the correct date as well as the local hour. Select a different timezone if you are planning a watch party with friends in another country. The venue is Mercedes-Benz Stadium in Atlanta, Georgia.</p>
    <p>This page is designed to answer the practical questions around a kickoff: who is playing, when the game starts, where it is being played and what comes next. The countdown is a live client-side display, while the fixture identity and venue are rendered in the page HTML so search engines and screen readers can understand the match without relying on the animation.</p>
    <p>France’s previous result was a 2–0 quarterfinal win against Mexico at Hard Rock Stadium. Spain’s previous result was a 1–2 quarterfinal loss to Argentina at SoFi Stadium. That makes this semifinal a meeting of two different routes through the knockout bracket, with a place in the final at stake.</p>
    <p>The next possible opponent is determined by the other semifinal: the winner of that match will meet the France–Spain winner in the final at MetLife Stadium on Sunday, July 19. For background on the teams, browse the <Link href="/teams/argentina">Argentina team page</Link> or <Link href="/teams/england">England team page</Link>, and use the <Link href="/world-cup-schedule">full World Cup schedule</Link> to follow every remaining fixture.</p>
  </WorldCupSeoPage>;
}
