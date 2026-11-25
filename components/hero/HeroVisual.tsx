"use client";

// Client wrapper around the 3D hero. Responsibilities:
// - Render the static poster first (server HTML), so the 3D is never the LCP element.
// - Load the scene chunk only after the page has loaded and the browser is idle.
// - Fall back to the poster for reduced motion, missing WebGL, or low-end devices.
// - Use a simplified scene on small / touch screens.
// - Pause rendering when the canvas is offscreen or the tab is hidden.

import dynamic from "next/dynamic";
import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import HeroPoster from "@/components/sections/HeroPoster";
import type { SceneQuality } from "./HeroScene";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false, loading: () => null });

function subscribeMedia(query: string) {
  return (cb: () => void) => {
    const mql = window.matchMedia(query);
    mql.addEventListener("change", cb);
    return () => mql.removeEventListener("change", cb);
  };
}

const REDUCED = "(prefers-reduced-motion: reduce)";
const subscribeReduced = subscribeMedia(REDUCED);
const LITE = "(max-width: 767px), (pointer: coarse)";
const subscribeLite = subscribeMedia(LITE);

function subscribeVisibility(cb: () => void) {
  document.addEventListener("visibilitychange", cb);
  return () => document.removeEventListener("visibilitychange", cb);
}

function canRender3D() {
  const nav = navigator as Navigator & { deviceMemory?: number; connection?: { saveData?: boolean } };
  if (nav.connection?.saveData) return false;
  if ((nav.hardwareConcurrency ?? 8) <= 2) return false;
  if (nav.deviceMemory !== undefined && nav.deviceMemory <= 2) return false;
  try {
    const c = document.createElement("canvas");
    const ctx = c.getContext("webgl2") ?? c.getContext("webgl");
    if (!ctx) return false;
    (ctx as WebGLRenderingContext).getExtension("WEBGL_lose_context")?.loseContext();
    return true;
  } catch {
    return false;
  }
}

export default function HeroVisual() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useSyncExternalStore(subscribeReduced, () => window.matchMedia(REDUCED).matches, () => true);
  const lite = useSyncExternalStore(subscribeLite, () => window.matchMedia(LITE).matches, () => false);
  const tabVisible = useSyncExternalStore(subscribeVisibility, () => !document.hidden, () => false);

  const [load, setLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const [inView, setInView] = useState(false);

  // Load the scene only after first paint AND the visitor's first interaction
  // (pointer, touch, scroll, key), then wait for idle time. Visitors who never
  // interact never pay for the 3D chunk; the static poster stays in place.
  useEffect(() => {
    if (reducedMotion) return;
    let cancelled = false;
    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    const triggers = ["pointermove", "pointerdown", "touchstart", "wheel", "scroll", "keydown"] as const;

    const run = () => {
      if (!cancelled && canRender3D()) setLoad(true);
    };
    const scheduleIdle = () => {
      if ("requestIdleCallback" in window) idleId = window.requestIdleCallback(run, { timeout: 1500 });
      else timeoutId = setTimeout(run, 300);
    };
    const onFirstInteraction = () => {
      triggers.forEach((t) => window.removeEventListener(t, onFirstInteraction));
      if (document.readyState === "complete") scheduleIdle();
      else window.addEventListener("load", scheduleIdle, { once: true });
    };
    triggers.forEach((t) => window.addEventListener(t, onFirstInteraction, { passive: true, once: true }));

    return () => {
      cancelled = true;
      triggers.forEach((t) => window.removeEventListener(t, onFirstInteraction));
      window.removeEventListener("load", scheduleIdle);
      if (idleId !== undefined) window.cancelIdleCallback(idleId);
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [reducedMotion]);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { rootMargin: "100px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const onReady = useCallback(() => setReady(true), []);

  const showScene = load && !reducedMotion;
  const quality: SceneQuality = lite ? "lite" : "full";

  return (
    <div ref={wrapRef} className="relative mx-auto aspect-square w-full max-w-[28rem]">
      <HeroPoster
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
          showScene && ready ? "opacity-0" : "opacity-100"
        }`}
      />
      {showScene && (
        <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}>
          <HeroScene key={quality} quality={quality} running={inView && tabVisible} trackRef={wrapRef} onReady={onReady} />
        </div>
      )}
    </div>
  );
}
