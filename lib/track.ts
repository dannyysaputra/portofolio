// Click tracking contract shared by the client tracker and the /api/track route.
// Add an analytics provider (GA4 via dataLayer, Vercel Analytics, etc.) in
// sendTrackEvent only; call sites mark elements with data-track attributes.

export const TRACK_EVENTS = ["whatsapp_click", "email_click", "email_copy"] as const;
export type TrackEventName = (typeof TRACK_EVENTS)[number];

export type TrackPayload = {
  event: TrackEventName;
  location: string;
  path: string;
};

const LOCATION_RE = /^[a-z0-9_-]{1,40}$/;

export function isTrackEventName(v: unknown): v is TrackEventName {
  return typeof v === "string" && (TRACK_EVENTS as readonly string[]).includes(v);
}

/** Validates an untrusted payload. Returns null when anything is off. */
export function parseTrackPayload(input: unknown): TrackPayload | null {
  if (!input || typeof input !== "object") return null;
  const { event, location, path } = input as Record<string, unknown>;
  if (!isTrackEventName(event)) return null;
  if (typeof location !== "string" || !LOCATION_RE.test(location)) return null;
  if (typeof path !== "string" || path.length > 200 || !path.startsWith("/")) return null;
  return { event, location, path };
}
