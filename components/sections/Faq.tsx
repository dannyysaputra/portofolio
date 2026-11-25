import { faqs } from "@/data/home";

export default function Faq() {
  return (
    <section id="faq" className="flex flex-col gap-8">
      <h2 className="heading-section mb-0">Questions clients ask</h2>
      <div className="flex flex-col border-t border-[var(--color-border)]">
        {faqs.map((faq) => (
          <details key={faq.question} className="border-b border-[var(--color-border)] py-5">
            <summary className="cursor-pointer font-medium text-lg">{faq.question}</summary>
            <p className="mt-3 text-[var(--color-muted)] max-w-3xl">{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
