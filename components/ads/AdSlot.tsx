import { AdSenseSlot } from "./AdSenseSlot";

const adsenseClientId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-3374016401769525";

const slotIds = {
  schedule: process.env.NEXT_PUBLIC_ADSENSE_SLOT_SCHEDULE || process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID,
  match: process.env.NEXT_PUBLIC_ADSENSE_SLOT_MATCH || process.env.NEXT_PUBLIC_ADSENSE_SLOT_ID,
} as const;

type AdPlacement = keyof typeof slotIds;

type AdSlotProps = {
  placement: AdPlacement;
  className?: string;
  style?: React.CSSProperties;
};

export function AdSlot({ placement, className = "", style }: AdSlotProps) {
  const slotId = slotIds[placement];

  if (!slotId) {
    if (process.env.NODE_ENV !== "production") {
      return (
        <aside className={`ad-slot ${className}`.trim()} aria-label="Advertisement">
          <span>Advertisement</span>
          <small>Set NEXT_PUBLIC_ADSENSE_SLOT_{placement.toUpperCase()}</small>
        </aside>
      );
    }

    return null;
  }

  return (
    <aside className={`ad-slot ${className}`.trim()} aria-label="Advertisement">
      <AdSenseSlot
        clientId={adsenseClientId}
        slotId={slotId}
        style={style}
      />
    </aside>
  );
}
