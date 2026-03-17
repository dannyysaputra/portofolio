import Link from "next/link";
import { ThemeToggle } from "../ui/ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-border)] bg-[var(--color-background)]/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Danny<span className="text-[var(--color-accent)]">.</span>
        </Link>
        <div className="flex items-center gap-6">
          <nav className="flex gap-6 text-sm font-medium text-[var(--color-muted)]">
            <Link href="/#projects" className="hover:text-[var(--color-foreground)] transition-colors">
              Work
            </Link>
            <Link href="/#experience" className="hover:text-[var(--color-foreground)] transition-colors hidden sm:block">
              Experience
            </Link>
            <Link href="/#contact" className="hover:text-[var(--color-foreground)] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="pl-6 border-l border-[var(--color-border)] ml-0">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
