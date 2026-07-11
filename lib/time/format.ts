export function formatKickoff(kickoffUtc: string, timeZone = "UTC", includeDate = true) {
  return new Intl.DateTimeFormat("en", {
    weekday: includeDate ? "long" : undefined,
    month: includeDate ? "long" : undefined,
    day: includeDate ? "numeric" : undefined,
    hour: "numeric",
    minute: "2-digit",
    timeZone,
    timeZoneName: "short",
  }).format(new Date(kickoffUtc));
}
