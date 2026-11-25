import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappHref } from "@/data/contact";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export default function FinalCta() {
  return (
    <section id="contact" className="flex flex-col gap-6 py-16 border-t border-[var(--color-border)]">
      <h2 className="heading-section mb-0 max-w-2xl">Have manual work that should be automated?</h2>
      <p className="text-[var(--color-muted)] max-w-xl">
        Tell me what&apos;s slowing your team down. I&apos;ll reply with a clear next step.
      </p>
      <div className="flex flex-wrap items-center gap-4">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[var(--color-accent)] text-white px-6 py-3 rounded-md font-medium"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
        </a>
        <CopyEmailButton email={profile.email} />
      </div>
    </section>
  );
}
