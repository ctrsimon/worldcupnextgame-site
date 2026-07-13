import { describe, expect, it } from "vitest";
import { footballDataMatchToMatch } from "@/lib/matches/football-data";

describe("footballDataMatchToMatch", () => {
  it("maps a scheduled World Cup fixture from football-data.org", () => {
    const match = footballDataMatchToMatch({
      id: 987, utcDate: "2026-06-11T19:00:00Z", status: "SCHEDULED", stage: "GROUP_STAGE", group: "GROUP_A",
      competition: { code: "WC", name: "FIFA World Cup" },
      homeTeam: { name: "Mexico", tla: "MEX" }, awayTeam: { name: "South Africa", tla: "RSA" },
      lastUpdated: "2026-01-01T00:00:00Z",
    });

    expect(match).toMatchObject({ id: "987", status: "scheduled", stage: "GROUP STAGE", group: "GROUP_A", homeTeam: { code: "MEX" } });
  });
});
