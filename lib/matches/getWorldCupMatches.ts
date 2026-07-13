import { mockMatches } from "./mock-data";
import { getApiFootballFixtures } from "./api-football";

export type MatchFeed = { matches: typeof mockMatches; source: "api-football" | "fallback"; updatedAt: string };

/** Uses a live, cached provider feed when configured; fixtures remain available during provider failures. */
export async function getWorldCupMatchFeed(): Promise<MatchFeed> {
  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) return { matches: mockMatches, source: "fallback", updatedAt: mockMatches[0]?.providerUpdatedAt || new Date(0).toISOString() };

  try {
    const matches = await getApiFootballFixtures({
      apiKey,
      leagueId: process.env.API_FOOTBALL_LEAGUE_ID || "1",
      season: process.env.API_FOOTBALL_SEASON || "2026",
    });
    if (matches.length) return { matches, source: "api-football", updatedAt: new Date().toISOString() };
  } catch (error) {
    console.error("Unable to load World Cup fixtures from API-Football", error);
  }

  return { matches: mockMatches, source: "fallback", updatedAt: mockMatches[0]?.providerUpdatedAt || new Date(0).toISOString() };
}
