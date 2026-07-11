import { AdSlot } from "@/components/ads/AdSlot";
import { SoccerBallHero } from "@/components/hero/SoccerBallHero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { NextMatchCard } from "@/components/match/NextMatchCard";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { TimezoneSelector } from "@/components/timezone/TimezoneSelector";
import { mockMatches } from "@/lib/matches/mock-data";
import { selectNextMatch } from "@/lib/matches/selectNextMatch";

export default function Home() {
  const selection = selectNextMatch(mockMatches);
  const primary = selection.kind === "complete" ? undefined : selection.matches[0];
  if (!primary) return <main>Tournament schedule will be announced soon.</main>;
  const upcoming = mockMatches.filter((match) => match.id !== primary.id);
  return <><Header /><main><SoccerBallHero /><section className="content-shell"><aside className="rail rail-left"><AdSlot placement="Desktop rail" /></aside><div className="main-column"><div className="answer-head"><p className="eyebrow">Next World Cup match</p><TimezoneSelector /></div><NextMatchCard match={primary} /><AdSlot className="inline-ad" placement="Below next match" /><UpcomingMatches matches={upcoming} /><section className="info-grid"><article><p className="eyebrow">In your time</p><h2>Kickoff without the math.</h2><p>Times are shown in your local timezone. Match times and statuses can change, so confirm critical details with an official tournament or broadcaster source.</p></article><article><p className="eyebrow">Tournament guide</p><h2>What happens next?</h2><p>Follow every remaining fixture, from the quarterfinals through the final, in one quiet, useful schedule.</p></article></section><section className="faq"><p className="eyebrow">Quick answers</p><h2>World Cup schedule FAQ</h2><details><summary>How are match times shown?</summary><p>We use your device timezone when it is available. You can select a different timezone at any time.</p></details><details><summary>Is this an official FIFA website?</summary><p>No. This is an independent fan-made match utility.</p></details></section></div><aside className="rail rail-right"><AdSlot placement="Desktop rail" /></aside></section></main><Footer /></>;
}
