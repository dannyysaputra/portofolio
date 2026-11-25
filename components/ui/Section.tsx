import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, index, eyebrow, title, intro, children, className = "" }: SectionProps) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className={`scroll-mt-20 border-t border-line py-18 md:py-28 ${className}`}>
      <div className="container-page">
        <header className="grid gap-6 md:grid-cols-12 md:gap-8">
          <p className="type-label text-subtle md:col-span-3 md:pt-3">
            <span className="text-fg">{index}</span> / {eyebrow}
          </p>
          <div className="flex flex-col gap-5 md:col-span-9">
            <h2 id={headingId} className="type-title measure">
              {title}
            </h2>
            {intro && <p className="measure text-muted">{intro}</p>}
          </div>
        </header>
        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
