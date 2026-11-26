import { testimonials } from "@/data/testimonials";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <div className="mt-16 flex flex-col gap-6">
      <h3 className="type-label text-subtle">What clients say</h3>
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <Card as="figure" key={`${t.name}-${t.company}`} className="flex flex-col gap-6">
            <blockquote className="font-serif text-2xl leading-snug">&ldquo;{t.quote}&rdquo;</blockquote>
            <figcaption className="type-small text-muted">
              {t.name}, {t.role} at {t.company}
            </figcaption>
          </Card>
        ))}
      </div>
    </div>
  );
}
