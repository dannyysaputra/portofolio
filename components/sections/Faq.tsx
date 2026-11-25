import { Plus } from "lucide-react";
import { faqs } from "@/data/home";
import Section from "@/components/ui/Section";

export default function Faq() {
  return (
    <Section id="faq" index="05" eyebrow="FAQ" title="Questions clients ask">
      <div className="grid md:grid-cols-12 md:gap-8">
        <div className="border-b border-line md:col-span-9 md:col-start-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-t border-line">
              <summary className="flex min-h-11 cursor-pointer items-center justify-between gap-6 py-5 text-lg">
                {faq.question}
                <Plus
                  className="h-5 w-5 shrink-0 text-subtle transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="measure pb-6 text-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
