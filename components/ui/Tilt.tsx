"use client";

import { useRef, type ReactNode } from "react";

const MAX_DEG = 4;

// Pointer tilt using CSS perspective transforms. Mouse only; the CSS disables
// it under prefers-reduced-motion. Transform-only, so it never shifts layout.
export default function Tilt({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef<number | null>(null);

  const set = (rx: number, ry: number) => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-rx", `${rx.toFixed(2)}deg`);
    el.style.setProperty("--tilt-ry", `${ry.toFixed(2)}deg`);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const { clientX, clientY } = e;
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      const r = el.getBoundingClientRect();
      const x = (clientX - r.left) / r.width - 0.5;
      const y = (clientY - r.top) / r.height - 0.5;
      set(-y * MAX_DEG, x * MAX_DEG);
    });
  };

  const onPointerLeave = () => {
    if (frame.current !== null) cancelAnimationFrame(frame.current);
    set(0, 0);
  };

  return (
    <div ref={ref} className={`tilt ${className}`} onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
      {children}
    </div>
  );
}
