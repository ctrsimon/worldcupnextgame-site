import { normalizeMatch } from "./normalize";
import type { Match, MatchStatus } from "./types";

type FootballDataMatch = {
  id?: number;
  utcDate?: string;
  status?: string;
  stage?: string;
  group?: string | null;
  lastUpdated?: string;
  competition?: { code?: string; name?: string };
  homeTeam?: { name?: string; tla?: string | null };
  awayTeam?: { name?: string; tla?: string | null };
  score?: { fullTime?: { home?: number | null; away?: number | null } };
};

const statusByProviderCode: Record<string, MatchStatus> = {
  SCHEDULED: "scheduled", TIMED: "scheduled", IN_PLAY: "live", PAUSED: "halftime", EXTRA_TIME: "live", PENALTY_SHOOTOUT: "live",
  FINISHED: "completed", POSTPONED: "postponed", CANCELLED: "cancelled", SUSPENDED: "delayed", AWARDED: "completed",
};

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Converts football-data.org's World Cup feed into the provider-neutral UI model. */
export function footballDataMatchToMatch(input: FootballDataMatch): Match | null {
  if (!input.id || !input.utcDate) return null;
  const homeName = input.homeTeam?.name || "To be confirmed";
  const awayName = input.awayTeam?.name || "To be confirmed";
  const homeScore = input.score?.fullTime?.home;
  const awayScore = input.score?.fullTime?.away;

  return normalizeMatch({
    id: String(input.id),
    slug: `${slugify(homeName)}-vs-${slugify(awayName)}-${input.id}`,
    tournamentId: input.competition?.code || "WC",
    tournamentName: input.competition?.name || "FIFA World Cup",
    stage: input.stage?.replaceAll("_", " ") || "World Cup",
    group: input.group || undefined,
    kickoffUtc: new Date(input.utcDate).toISOString(),
    status: statusByProviderCode[input.status || "SCHEDULED"] || "scheduled",
    homeTeam: { name: homeName, code: input.homeTeam?.tla || "TBC", flag: "" },
    awayTeam: { name: awayName, code: input.awayTeam?.tla || "TBC", flag: "" },
    score: typeof homeScore === "number" && typeof awayScore === "number" ? { home: homeScore, away: awayScore } : undefined,
    providerUpdatedAt: input.lastUpdated ? new Date(input.lastUpdated).toISOString() : new Date().toISOString(),
  });
}

export async function getFootballDataWorldCupMatches(apiToken: string) {
  const response = await fetch("https://api.football-data.org/v4/competitions/WC/matches", {
    headers: { "X-Auth-Token": apiToken },
    next: { revalidate: 3600 },
  });
  if (!response.ok) throw new Error(`football-data.org matches request failed (${response.status})`);
  const body = await response.json() as { message?: string; matches?: FootballDataMatch[] };
  if (body.message) throw new Error(`football-data.org returned an error: ${body.message}`);
  return (body.matches || []).map(footballDataMatchToMatch).filter((match): match is Match => match !== null);
}
