import { MessageCircle } from "lucide-react";
import { whatsappHref } from "@/data/contact";

// Sticky bottom WhatsApp CTA on small screens. PageContainer reserves matching
// bottom padding on small screens so it never covers the footer.
export default function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-bg px-5 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 sm:hidden">
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-track="whatsapp_click"
        data-track-location="sticky_mobile"
        className="flex min-h-12 w-full items-center justify-center gap-2 rounded-[var(--radius-control)] bg-accent px-5 font-medium text-accent-fg transition-colors hover:bg-accent-hover"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
      </a>
    </div>
  );
}
