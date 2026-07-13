import { normalizeMatch } from "./normalize";
import type { Match, MatchStatus } from "./types";

type ApiFootballFixture = {
  fixture?: { id?: number; date?: string; status?: { short?: string; long?: string }; venue?: { name?: string | null; city?: string | null } };
  league?: { id?: number; name?: string; round?: string; season?: number };
  teams?: { home?: { name?: string; code?: string | null; country?: string | null }; away?: { name?: string; code?: string | null; country?: string | null } };
  goals?: { home?: number | null; away?: number | null };
  score?: { fulltime?: { home?: number | null; away?: number | null } };
  update?: string;
};

type ApiFootballTeam = NonNullable<ApiFootballFixture["teams"]>["home"];

const statusByProviderCode: Record<string, MatchStatus> = {
  TBD: "scheduled", NS: "scheduled", PST: "postponed", CANC: "cancelled", ABD: "cancelled", AWD: "cancelled", WO: "cancelled",
  "1H": "live", HT: "halftime", "2H": "live", ET: "live", BT: "live", P: "live", LIVE: "live",
  FT: "completed", AET: "completed", PEN: "completed",
};

function team(input: ApiFootballTeam) {
  return { name: input?.name || "To be confirmed", code: input?.code || input?.country?.slice(0, 3).toUpperCase() || "TBC", flag: input?.country || "" };
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

/** Converts the small fixture subset this site needs into its provider-neutral UI model. */
export function apiFootballFixtureToMatch(input: ApiFootballFixture): Match | null {
  const fixture = input.fixture;
  const id = fixture?.id;
  const kickoffUtc = fixture?.date;
  if (!fixture || !id || !kickoffUtc || !input.league?.id) return null;

  const homeTeam = team(input.teams?.home);
  const awayTeam = team(input.teams?.away);
  const providerStatus = fixture.status?.short?.toUpperCase() || "TBD";
  const mappedStatus = statusByProviderCode[providerStatus] || "scheduled";
  const homeScore = input.goals?.home ?? input.score?.fulltime?.home;
  const awayScore = input.goals?.away ?? input.score?.fulltime?.away;
  const venue = fixture.venue?.name ? { name: fixture.venue.name, city: fixture.venue.city || "" } : undefined;

  return normalizeMatch({
    id: String(id),
    slug: `${slugify(homeTeam.name)}-vs-${slugify(awayTeam.name)}-${id}`,
    tournamentId: String(input.league.id),
    tournamentName: input.league.name || "FIFA World Cup",
    stage: input.league.round || "World Cup",
    kickoffUtc: new Date(kickoffUtc).toISOString(),
    status: mappedStatus,
    homeTeam,
    awayTeam,
    venue,
    score: typeof homeScore === "number" && typeof awayScore === "number" ? { home: homeScore, away: awayScore } : undefined,
    providerUpdatedAt: input.update ? new Date(input.update).toISOString() : new Date().toISOString(),
  });
}

export async function getApiFootballFixtures({ apiKey, leagueId, season }: { apiKey: string; leagueId: string; season: string }) {
  const url = new URL("/fixtures", process.env.API_FOOTBALL_BASE_URL || "https://v3.football.api-sports.io");
  url.searchParams.set("league", leagueId);
  url.searchParams.set("season", season);
  const response = await fetch(url, { headers: { "x-apisports-key": apiKey }, next: { revalidate: 3600 } });
  if (!response.ok) throw new Error(`API-Football fixtures request failed (${response.status})`);
  const body = await response.json() as { response?: ApiFootballFixture[]; errors?: Record<string, string> };
  if (body.errors && Object.keys(body.errors).length) {
    const reason = Object.values(body.errors).filter(Boolean).join("; ");
    throw new Error(`API-Football returned an error${reason ? `: ${reason}` : ""}`);
  }
  return (body.response || []).map(apiFootballFixtureToMatch).filter((match): match is Match => match !== null);
}
