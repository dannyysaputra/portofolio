import { MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { whatsappHref } from "@/data/contact";
import Button from "@/components/ui/Button";
import { CopyEmailButton } from "@/components/ui/CopyEmailButton";

export default function FinalCta() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line py-18 md:py-28">
      <div className="container-page grid gap-10 md:grid-cols-12 md:gap-8">
        <p className="type-label text-subtle md:col-span-3 md:pt-3">
          <span className="text-fg">06</span> / Contact
        </p>
        <div className="flex flex-col gap-8 md:col-span-9">
          <h2 id="contact-title" className="type-display measure">
            Have manual work that should run on its own?
          </h2>
          <p className="measure text-lg text-muted">
            Tell me what&apos;s slowing your team down. I&apos;ll reply with a clear next step.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href={whatsappHref} external>
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
            </Button>
            <CopyEmailButton email={profile.email} />
          </div>
        </div>
      </div>
    </section>
  );
}
