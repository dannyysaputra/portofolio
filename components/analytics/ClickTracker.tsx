"use client";

import { useEffect } from "react";
import { isTrackEventName, type TrackPayload } from "@/lib/track";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

function sendTrackEvent(payload: TrackPayload) {
  // Ready for GA4 / GTM if a tag is added later.
  window.dataLayer?.push({ event: payload.event, cta_location: payload.location, page_path: payload.path });

  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/track", new Blob([body], { type: "application/json" }));
  } else {
    void fetch("/api/track", { method: "POST", body, keepalive: true, headers: { "content-type": "application/json" } });
  }
}

// One delegated listener for every element marked with data-track / data-track-location.
export default function ClickTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>("[data-track]");
      if (!el) return;
      const event = el.dataset.track;
      if (!isTrackEventName(event)) return;
      sendTrackEvent({ event, location: el.dataset.trackLocation ?? "unknown", path: window.location.pathname });
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
