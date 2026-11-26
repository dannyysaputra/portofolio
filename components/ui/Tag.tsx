import type { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="type-label inline-flex items-center rounded-[var(--radius-tag)] border border-line px-2 py-1 text-subtle">
      {children}
    </span>
  );
}
