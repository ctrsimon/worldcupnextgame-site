import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import Link from "next/link";

export const metadata = { title: "England World Cup 2026 Schedule, Results and Next Match", description: "England World Cup team page with its latest result, kickoff times, venue information and possible next opponent." };
export const revalidate = 3600;

export default async function EnglandPage() {
  const { matches } = await getWorldCupMatchFeed();
  const teamMatches = matches.filter((match) => [match.homeTeam.name, match.awayTeam.name].includes("England"));
  return <WorldCupSeoPage eyebrow="World Cup team guide" title="England schedule" matches={teamMatches}>
    <p>England’s World Cup 2026 knockout schedule began with a quarterfinal against Norway at MetLife Stadium in East Rutherford. England won 2–1, turning a tight match into a place in the next round. The fixture list below keeps the result, venue and kickoff reference together so supporters can quickly find the team’s tournament context.</p>
    <p>The previous result is Norway 1–2 England. England was the away-listed team in the fixture data, and the scoreline records the result that moved the team onward. Open the <Link href="/match/norway-vs-england">Norway vs England match page</Link> for the individual match details, countdown state and calendar link.</p>
    <p>England’s next possible opponent is controlled by the following knockout bracket. The next opponent is not treated as confirmed until the provider supplies a named fixture, so this page keeps the language clear while the route develops. The <Link href="/world-cup-schedule">full World Cup schedule</Link> shows the other quarterfinal and semifinal matches that can shape England’s next game.</p>
    <p>Use this page as a stable starting point for England coverage rather than a single changing headline. It links the latest result to the wider bracket, keeps kickoff references consistent in UTC, and sends visitors to a permanent match URL for deeper details. That structure remains useful after the tournament because completed results can stay discoverable instead of being replaced by a new homepage card.</p>
    <p>All listed kickoff references use UTC for consistency, and the match centre converts them to the visitor’s local timezone. This is useful for England fans watching from the United Kingdom, supporters travelling to North America, and international audiences comparing the same World Cup match. For the tournament’s immediate headline fixture, visit the <Link href="/matches/france-vs-spain">France vs Spain semifinal page</Link>.</p>
  </WorldCupSeoPage>;
}
