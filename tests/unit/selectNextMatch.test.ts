import { describe, expect, it } from "vitest";
import { selectNextMatch } from "@/lib/matches/selectNextMatch";
import type { Match } from "@/lib/matches/types";

const match = (id: string, kickoffUtc: string, status: Match["status"]): Match => ({
  id, slug: id, tournamentId: "wc", tournamentName: "World Cup", stage: "Group stage", kickoffUtc, status,
  homeTeam: { name: "Home", code: "HOM", flag: "" }, awayTeam: { name: "Away", code: "AWY", flag: "" }, providerUpdatedAt: kickoffUtc,
});

describe("selectNextMatch", () => {
  it("prioritizes provider-confirmed live matches", () => {
    const result = selectNextMatch([match("future", "2026-07-12T12:00:00Z", "scheduled"), match("live", "2026-07-11T12:00:00Z", "live")]);
    expect(result).toMatchObject({ kind: "active", matches: [{ id: "live" }] });
  });
  it("groups simultaneous next fixtures", () => {
    const result = selectNextMatch([match("a", "2026-07-12T12:00:00Z", "scheduled"), match("b", "2026-07-12T12:00:00Z", "scheduled"), match("c", "2026-07-13T12:00:00Z", "scheduled")]);
    expect(result).toMatchObject({ kind: "upcoming", matches: [{ id: "a" }, { id: "b" }] });
  });
  it("ignores cancelled games", () => {
    const result = selectNextMatch([match("cancelled", "2026-07-11T12:00:00Z", "cancelled"), match("future", "2026-07-12T12:00:00Z", "scheduled")]);
    expect(result).toMatchObject({ kind: "upcoming", matches: [{ id: "future" }] });
  });
});
