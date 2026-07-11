import type { MatchStatus } from "@/lib/matches/types";

export function MatchStatusBadge({ status }: { status: MatchStatus }) {
  const labels: Record<MatchStatus, string> = { scheduled: "Scheduled", delayed: "Delayed", postponed: "Postponed", cancelled: "Cancelled", live: "Live", halftime: "Halftime", completed: "Final" };
  return <span className={`status status--${status}`}>{labels[status]}</span>;
}
