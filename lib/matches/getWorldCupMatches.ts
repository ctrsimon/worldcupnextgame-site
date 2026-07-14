import { getApiFootballFixtures } from "./api-football";
import { getFootballDataWorldCupMatches } from "./football-data";
import { mockMatches } from "./mock-data";
import type { Match } from "./types";

export type MatchFeed = { matches: Match[]; source: "football-data" | "api-football" | "unavailable"; updatedAt: string };

/** Uses a live, cached provider feed when configured; fixtures remain available during provider failures. */
export async function getWorldCupMatchFeed(): Promise<MatchFeed> {
  const footballDataToken = process.env.FOOTBALL_DATA_API_TOKEN;
  if (footballDataToken) {
    try {
      const matches = await getFootballDataWorldCupMatches(footballDataToken);
      if (matches.length) return { matches, source: "football-data", updatedAt: new Date().toISOString() };
    } catch (error) {
      console.error("Unable to load World Cup fixtures from football-data.org", error);
    }
  }

  // API-Football costs money for the current World Cup season. Only use it when
  // explicitly selected; a leftover key must never override the free provider.
  if (process.env.MATCH_PROVIDER !== "api-football") {
    return { matches: [], source: "unavailable", updatedAt: new Date().toISOString() };
  }

  const apiKey = process.env.API_FOOTBALL_KEY;
  if (!apiKey) return { matches: [], source: "unavailable", updatedAt: new Date().toISOString() };

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

  return { matches: mockMatches, source: "unavailable", updatedAt: new Date().toISOString() };
}
