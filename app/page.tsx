import { CinematicHome } from "@/components/home/CinematicHome";
import { mockMatches } from "@/lib/matches/mock-data";
import { selectNextMatch } from "@/lib/matches/selectNextMatch";

export default function Home() {
  const selection = selectNextMatch(mockMatches);
  const primary = selection.kind === "complete" ? undefined : selection.matches[0];
  if (!primary) return <main>Tournament schedule will be announced soon.</main>;
  const upcoming = mockMatches.filter((match) => match.id !== primary.id);
  return <CinematicHome match={primary} upcoming={upcoming} />;
}
