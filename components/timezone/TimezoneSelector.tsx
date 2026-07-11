"use client";

import { useEffect, useState } from "react";

const zones = ["UTC", "America/New_York", "America/Los_Angeles", "Europe/London", "Europe/Paris", "Asia/Ho_Chi_Minh", "Asia/Tokyo", "Australia/Sydney"];
export function TimezoneSelector() {
  const [zone, setZone] = useState("UTC");
  useEffect(() => setZone(localStorage.getItem("wc-timezone") || Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC"), []);
  return <label className="timezone">Timezone<select value={zone} onChange={(event) => { setZone(event.target.value); localStorage.setItem("wc-timezone", event.target.value); window.dispatchEvent(new CustomEvent("timezone-change", { detail: event.target.value })); }}><option value={zone}>{zone}</option>{zones.filter((item) => item !== zone).map((item) => <option value={item} key={item}>{item}</option>)}</select></label>;
}
