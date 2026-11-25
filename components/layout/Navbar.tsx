import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";
import { whatsappHref } from "@/data/contact";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Danny<span className="text-[var(--color-accent)]">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label="Main" className="hidden md:flex gap-6 text-sm font-medium text-[var(--color-muted)]">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-sm font-medium text-[var(--color-accent)]">
            Chat on WhatsApp
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
