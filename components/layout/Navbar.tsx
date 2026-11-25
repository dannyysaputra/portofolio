import Link from "next/link";
import { whatsappHref } from "@/data/contact";
import Button from "@/components/ui/Button";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href="/" className="inline-flex min-h-11 items-center font-serif text-2xl leading-none">
          Danny Saputra
        </Link>
        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex gap-7 text-[0.9375rem] text-muted">
              {links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden sm:block">
            <Button href={whatsappHref} external>
              Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
