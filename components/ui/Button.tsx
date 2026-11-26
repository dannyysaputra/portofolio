import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-[var(--radius-control)] text-[0.9375rem] font-medium transition-colors duration-200";

const variants: Record<Variant, string> = {
  primary: "bg-accent px-5 text-accent-fg hover:bg-accent-hover",
  secondary: "border border-line-strong px-5 text-fg hover:bg-surface-2",
  ghost: "text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg",
};

type ButtonProps = {
  href: string;
  variant?: Variant;
  external?: boolean;
  className?: string;
  children: ReactNode;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

export default function Button({ href, variant = "primary", external, className = "", children, ...rest }: ButtonProps) {
  const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...externalProps} {...rest}>
      {children}
    </a>
  );
}
