export type CountdownState = "future" | "expected";

export function getCountdown(kickoffUtc: string, now = new Date()) {
  const milliseconds = Math.max(0, Date.parse(kickoffUtc) - now.getTime());
  const totalSeconds = Math.floor(milliseconds / 1000);
  const months = Math.floor(totalSeconds / 2592000);
  const days = Math.floor((totalSeconds % 2592000) / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const pad = (value: number) => String(value).padStart(2, "0");
  return {
    state: milliseconds === 0 ? ("expected" as CountdownState) : ("future" as CountdownState),
    label: `${pad(months)}:${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`,
  };
}
