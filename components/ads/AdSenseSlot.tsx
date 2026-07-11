"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: Array<Record<string, unknown>>;
  }
}

type AdSenseSlotProps = {
  clientId: string;
  slotId: string;
  className?: string;
  style?: React.CSSProperties;
  format?: "auto";
  responsive?: boolean;
};

export function AdSenseSlot({
  clientId,
  slotId,
  className,
  style,
  format = "auto",
  responsive = true,
}: AdSenseSlotProps) {
  const pushed = useRef(false);

  useEffect(() => {
    if (pushed.current) return;
    pushed.current = true;

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense can throw when the script is blocked or during local development.
    }
  }, [slotId]);

  return (
    <ins
      className={`adsbygoogle ${className ?? ""}`.trim()}
      style={{
        display: "block",
        ...(style ?? {}),
      }}
      data-ad-client={clientId}
      data-ad-slot={slotId}
      data-ad-format={format}
      data-full-width-responsive={responsive ? "true" : "false"}
    />
  );
}
