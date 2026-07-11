"use client";

import { useEffect, useState } from "react";
import { formatKickoff } from "@/lib/time/format";

export function LocalKickoffTime({ kickoffUtc, timeZone }: { kickoffUtc: string; timeZone?: string }) {
  const [zone, setZone] = useState(timeZone ?? "UTC");
  useEffect(() => {
    const detected = timeZone || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    setZone(detected);
    const onChange = (event: Event) => setZone((event as CustomEvent<string>).detail);
    window.addEventListener("timezone-change", onChange);
    return () => window.removeEventListener("timezone-change", onChange);
  }, [timeZone]);
  return <p className="kickoff-time"><time dateTime={kickoffUtc}>{formatKickoff(kickoffUtc, zone)}</time><span> Your local time</span></p>;
}
