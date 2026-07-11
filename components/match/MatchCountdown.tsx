"use client";

import { useEffect, useState } from "react";
import { getCountdown } from "@/lib/time/countdown";

export function MatchCountdown({ kickoffUtc }: { kickoffUtc: string }) {
  const [countdown, setCountdown] = useState(() => getCountdown(kickoffUtc));
  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown(kickoffUtc)), 1000);
    return () => window.clearInterval(timer);
  }, [kickoffUtc]);
  return <p className="countdown" aria-live="off"><span>{countdown.label}</span><small>{countdown.state === "future" ? "until kickoff" : "schedule status unconfirmed"}</small></p>;
}
