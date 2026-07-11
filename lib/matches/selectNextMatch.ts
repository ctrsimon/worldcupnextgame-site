import type { Match } from "./types";

export type MatchSelection =
  | { kind: "active"; matches: Match[] }
  | { kind: "upcoming"; matches: Match[] }
  | { kind: "complete"; latest?: Match };

/** Selects provider-confirmed live games first, then the earliest confirmed fixture. */
export function selectNextMatch(matches: Match[], now = new Date()): MatchSelection {
  const valid = matches.filter((match) => match.status !== "cancelled");
  const active = valid.filter((match) => match.status === "live" || match.status === "halftime");
  if (active.length) return { kind: "active", matches: byKickoff(active) };

  const future = valid.filter((match) => {
    if (match.status === "postponed" && !match.kickoffUtc) return false;
    return match.status === "scheduled" || match.status === "delayed" || match.status === "postponed";
  });
  if (future.length) {
    const sorted = byKickoff(future);
    const firstTime = sorted[0].kickoffUtc;
    return { kind: "upcoming", matches: sorted.filter((match) => match.kickoffUtc === firstTime) };
  }

  const completed = valid.filter((match) => match.status === "completed");
  return { kind: "complete", latest: byKickoff(completed).at(-1) };
}

function byKickoff(matches: Match[]) {
  return [...matches].sort((a, b) => Date.parse(a.kickoffUtc) - Date.parse(b.kickoffUtc));
}
