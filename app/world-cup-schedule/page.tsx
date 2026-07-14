import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import Link from "next/link";

export const metadata = { title: "World Cup Schedule 2026: Fixtures, Dates and Kickoff Times", description: "Follow the 2026 World Cup schedule with fixture dates, kickoff times, venues and links to every match." };
export const revalidate = 3600;

export default async function WorldCupSchedulePage() {
  const { matches } = await getWorldCupMatchFeed();
  return <WorldCupSeoPage eyebrow="World Cup 2026" title="World Cup schedule" matches={matches}>
    <p>The World Cup schedule brings every confirmed fixture into one practical match list. Use this page to check the date, kickoff time, stage and venue for the remaining tournament, then open an individual match page for a countdown and a timezone conversion.</p>
    <p>The schedule is written in UTC so it has one stable reference point for supporters around the world. Each match card also identifies the host city and links to the full match centre. Your browser can show the local kickoff time on the match page, which is especially useful when a game starts late at night or early in the morning where you live.</p>
    <p>At the current point in the knockout bracket, France vs Spain is the next headline fixture: a semifinal on Tuesday, July 14, 2026. The match is listed at Mercedes-Benz Stadium in Atlanta. France reached this match after a 2–0 quarterfinal win over Mexico, while Spain’s route ended with a 1–2 quarterfinal defeat by Argentina. The winner will progress to the World Cup final at MetLife Stadium on July 19.</p>
    <p>For each fixture, look for four details before making plans: the competition stage, the UTC kickoff, the host venue and the match status. The schedule can be useful even when you are not watching live because it shows how the bracket connects quarterfinals, semifinals and the final. Match pages also include a calendar action and a permanent URL, so a result can be revisited after the tournament moves on.</p>
    <p>Fixtures can change when a provider corrects a kickoff time or status, so the page keeps a source and update timestamp in the match experience. If live data is unavailable, a vetted schedule remains visible so visitors can still find the next game and the tournament context. For a shorter answer, visit the <Link href="/world-cup-next-game">next World Cup game page</Link>; for the title match, see the <Link href="/world-cup-final">World Cup final guide</Link>.</p>
  </WorldCupSeoPage>;
}
