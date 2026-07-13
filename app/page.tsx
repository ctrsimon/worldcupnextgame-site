import { CinematicHome } from "@/components/home/CinematicHome";
import { getWorldCupMatchFeed } from "@/lib/matches/getWorldCupMatches";
import { selectNextMatch } from "@/lib/matches/selectNextMatch";
import { getCountdown } from "@/lib/time/countdown";

export const revalidate = 3600;

export default async function Home() {
  const { matches } = await getWorldCupMatchFeed();
  const selection = selectNextMatch(matches);
  const primary = selection.kind === "complete" ? undefined : selection.matches[0];
  if (!primary) return <main>Tournament schedule will be announced soon.</main>;
  const upcoming = matches.filter((match) => match.id !== primary.id);
  return <CinematicHome match={primary} upcoming={upcoming} initialCountdown={getCountdown(primary.kickoffUtc)} />;
}
