export type CountdownState = "future" | "expected";

export function getCountdown(kickoffUtc: string, now = new Date()) {
  const milliseconds = Math.max(0, Date.parse(kickoffUtc) - now.getTime());
  if (milliseconds === 0) return { state: "expected" as CountdownState, label: "Kickoff expected now" };
  const totalSeconds = Math.floor(milliseconds / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number) => String(value).padStart(2, "0");
  return {
    state: "future" as CountdownState,
    label: days > 0 ? `${days} day${days === 1 ? "" : "s"}, ${hours} hour${hours === 1 ? "" : "s"}` : `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  };
}
