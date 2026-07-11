import { describe, expect, it } from "vitest";
import { getCountdown } from "@/lib/time/countdown";

describe("getCountdown", () => {
  it("uses a readable day label for fixtures more than a day away", () => {
    expect(getCountdown("2026-07-13T02:00:00Z", new Date("2026-07-11T00:00:00Z")).label).toBe("2 days, 2 hours");
  });
  it("does not infer a live state after scheduled kickoff", () => {
    expect(getCountdown("2026-07-11T00:00:00Z", new Date("2026-07-11T00:01:00Z"))).toMatchObject({ state: "expected", label: "Kickoff expected now" });
  });
});
