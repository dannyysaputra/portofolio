import { ArrowRight, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappHref } from "@/data/contact";

export default function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-32 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-7 flex flex-col gap-6">
          <p className="mono text-sm uppercase tracking-wide text-[var(--color-accent)]">
            {profile.name} · {profile.role}
          </p>
          <h1 className="heading-hero max-w-3xl">{profile.headline}</h1>
          <p className="subheading max-w-2xl">{profile.subheadline}</p>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-medium"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-[var(--color-border)] px-6 py-3 rounded-md font-medium"
            >
              See results <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
          <p className="text-sm text-[var(--color-muted)]">{profile.availability}</p>
        </div>
        <div className="md:col-span-5" aria-hidden="true">
          <div className="aspect-square w-full rounded-2xl border border-dashed border-[var(--color-border)]" />
        </div>
      </div>
    </section>
  );
}
