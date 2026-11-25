import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <div className="flex flex-col gap-6">
      <h3 className="text-xl font-semibold">What clients say</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <figure key={`${t.name}-${t.company}`} className="flex flex-col gap-4 border border-[var(--color-border)] rounded-xl p-6">
            <blockquote>“{t.quote}”</blockquote>
            <figcaption className="text-sm text-[var(--color-muted)]">
              {t.name}, {t.role} at {t.company}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
