export function AdSlot({ placement, className = "" }: { placement: string; className?: string }) {
  return <aside className={`ad-slot ${className}`} aria-label="Advertisement"><span>Advertisement</span><small>{placement}</small></aside>;
}
