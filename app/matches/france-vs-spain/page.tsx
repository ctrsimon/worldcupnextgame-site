import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/JsonLd";
import { WorldCupSeoPage } from "@/components/seo/WorldCupSeoPage";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";

export const revalidate = 3600;

export async function generateMetadata() {
  return { title: "France vs Spain: World Cup Semifinal Time, Date and Countdown", description: "France vs Spain World Cup semifinal date, kickoff time, venue, local timezone conversion and countdown." };
}

export default async function FranceSpainPage() {
  const { matches } = await getWorldCupMatchFeed();
  const match = matches.find((item) => item.slug === "france-vs-spain");
  if (!match) notFound();
  const schema = {
    "@context": "https://schema.org",
    "@type": "SportsEvent",
    name: "France vs Spain: World Cup Semifinal",
    description: "2026 World Cup semifinal between France and Spain.",
    startDate: match.kickoffUtc,
    eventStatus: "https://schema.org/EventScheduled",
    sport: "Soccer",
    location: { "@type": "Place", name: match.venue?.name, address: { "@type": "PostalAddress", addressLocality: match.venue?.city } },
    competitor: [{ "@type": "SportsTeam", name: "France" }, { "@type": "SportsTeam", name: "Spain" }],
    url: "https://worldcupnextgame.com/matches/france-vs-spain",
  };
  return <WorldCupSeoPage eyebrow="World Cup semifinal" title="France vs Spain" match={match}>
    <JsonLd data={schema} />
    <p>France vs Spain is the next World Cup semifinal on Tuesday, July 14, 2026. The listed kickoff is 19:00 UTC at Mercedes-Benz Stadium in Atlanta. Use the local kickoff line in the match card to convert the time automatically to your timezone, then use the countdown to see how long remains before the semifinal starts.</p>
    <p>France’s previous result was a 2–0 quarterfinal win over Mexico at Hard Rock Stadium in Miami Gardens. Spain’s previous result was a 1–2 quarterfinal defeat by Argentina at SoFi Stadium in Inglewood. Those results provide the immediate form and route into this semifinal, while the winner will earn a place in the World Cup final.</p>
    <p>The next possible opponent is the winner of the other semifinal. That final is scheduled for Sunday, July 19 at MetLife Stadium in East Rutherford. Until the other semifinal is complete, it is more accurate to describe the opponent as a bracket winner than to guess a team name. Follow the <a href="/world-cup-final">World Cup final guide</a> for the venue, date and final-round context.</p>
    <p>Supporters in France, Spain, the United States and elsewhere will see different local dates or hours for the same kickoff. That is why the page keeps 19:00 UTC as the source time and renders a separate local-time conversion in the match card. The venue line identifies Atlanta, while the schedule links make it easy to continue following the semifinal route after the whistle.</p>
    <p>This permanent match URL is designed to remain useful after the game finishes: the page can preserve the fixture identity, add the confirmed result and keep the schedule links intact. For broader coverage, visit the <a href="/world-cup-next-game">next World Cup game page</a> or the <a href="/world-cup-schedule">full World Cup schedule</a>.</p>
  </WorldCupSeoPage>;
}
