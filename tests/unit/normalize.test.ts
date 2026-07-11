import { describe, expect, it } from "vitest";
import { normalizeMatch, normalizeStatus } from "@/lib/matches/normalize";
import { mockMatches } from "@/lib/matches/mock-data";

describe("match normalization", () => {
  it("accepts the stable internal match shape", () => expect(normalizeMatch(mockMatches[0])).toMatchObject({ id: "norway-england" }));
  it("rejects unknown provider status values", () => expect(() => normalizeStatus("unconfirmed")).toThrow());
});
