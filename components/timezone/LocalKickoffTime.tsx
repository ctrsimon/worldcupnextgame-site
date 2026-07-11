"use client";

import { useEffect, useState } from "react";
import { formatKickoff } from "@/lib/time/format";

export function LocalKickoffTime({ kickoffUtc, timeZone }: { kickoffUtc: string; timeZone?: string }) {
  const [zone, setZone] = useState(timeZone ?? "UTC");
  useEffect(() => setZone(timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"), [timeZone]);
  return <p className="kickoff-time"><time dateTime={kickoffUtc}>{formatKickoff(kickoffUtc, zone)}</time><span> Your local time</span></p>;
}
