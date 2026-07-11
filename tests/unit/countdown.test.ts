import { describe, expect, it } from "vitest";
import { getCountdown } from "@/lib/time/countdown";

describe("getCountdown", () => {
  it("uses a fixed months-days-hours-minutes-seconds timer format", () => {
    expect(getCountdown("2026-07-13T02:00:00Z", new Date("2026-07-11T00:00:00Z")).label).toBe("00:02:02:00:00");
  });

  it("returns a zeroed timer after kickoff rather than prose", () => {
    expect(getCountdown("2026-07-11T00:00:00Z", new Date("2026-07-11T00:01:00Z"))).toMatchObject({ state: "expected", label: "00:00:00:00:00" });
  });
});
