import type { ElementType, ReactNode } from "react";

type CardProps = {
  as?: ElementType;
  className?: string;
  children: ReactNode;
};

export default function Card({ as: Tag = "div", className = "", children }: CardProps) {
  return (
    <Tag className={`rounded-[var(--radius-card)] border border-line bg-surface p-6 md:p-8 ${className}`}>{children}</Tag>
  );
}
