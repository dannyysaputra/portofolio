import { parseTrackPayload } from "@/lib/track";

// Receives CTA click beacons and writes one structured log line per event
// (visible in the hosting provider's runtime logs). Stores nothing and returns
// no data, so an unauthenticated caller can at most add a log line.
export async function POST(request: Request) {
  // Reject oversized bodies before buffering them.
  if (Number(request.headers.get("content-length") ?? 0) > 1024) return new Response(null, { status: 413 });

  // Browsers send Origin on POST; refuse beacons from other sites.
  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) return new Response(null, { status: 403 });
    } catch {
      return new Response(null, { status: 403 });
    }
  }

  const raw = await request.text();
  if (raw.length > 1024) return new Response(null, { status: 413 });

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return new Response(null, { status: 400 });
  }

  const payload = parseTrackPayload(body);
  if (!payload) return new Response(null, { status: 400 });

  console.log(JSON.stringify({ type: "cta_click", ...payload, at: new Date().toISOString() }));
  return new Response(null, { status: 204 });
}
