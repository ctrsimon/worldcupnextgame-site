import { describe, expect, it } from "vitest";
import { apiFootballFixtureToMatch } from "@/lib/matches/api-football";

describe("apiFootballFixtureToMatch", () => {
  it("maps a scheduled API-Football fixture into the site match model", () => {
    const match = apiFootballFixtureToMatch({
      fixture: { id: 123, date: "2026-06-11T19:00:00+00:00", status: { short: "NS" }, venue: { name: "Estadio", city: "Mexico City" } },
      league: { id: 1, name: "World Cup", round: "Group Stage" },
      teams: { home: { name: "Mexico", code: "MEX", country: "Mexico" }, away: { name: "South Africa", code: "ZAF", country: "South Africa" } },
      goals: { home: null, away: null },
      update: "2026-01-01T00:00:00+00:00",
    });

    expect(match).toMatchObject({ id: "123", status: "scheduled", slug: "mexico-vs-south-africa-123", venue: { name: "Estadio", city: "Mexico City" } });
  });
});
