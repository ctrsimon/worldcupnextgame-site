import Link from "next/link";
import type { Match } from "@/lib/matches/types";
import { NextMatchCard } from "@/components/match/NextMatchCard";
import { UpcomingMatches } from "@/components/match/UpcomingMatches";
import { StaticPage } from "@/components/layout/StaticPage";

type Props = {
  eyebrow: string;
  title: string;
  match?: Match;
  matches?: Match[];
  children: React.ReactNode;
};

export function WorldCupSeoPage({ eyebrow, title, match, matches = [], children }: Props) {
  return (
    <StaticPage eyebrow={eyebrow} title={title}>
      {children}
      {match ? <NextMatchCard match={match} /> : null}
      {matches.length ? <UpcomingMatches matches={matches} /> : null}
      <nav className="seo-links" aria-label="Related World Cup pages">
        <Link href="/world-cup-next-game">Next World Cup game</Link>
        <Link href="/world-cup-schedule">World Cup schedule</Link>
        <Link href="/world-cup-final">World Cup final</Link>
        <Link href="/teams/argentina">Argentina team page</Link>
        <Link href="/teams/england">England team page</Link>
        <Link href="/matches/france-vs-spain">France vs Spain match page</Link>
      </nav>
    </StaticPage>
  );
}
