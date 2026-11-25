import { services } from "@/data/home";

export default function Services() {
  return (
    <section id="services" className="flex flex-col gap-10">
      <div className="flex flex-col gap-2">
        <h2 className="heading-section mb-0">What I can do for you</h2>
        <p className="subheading max-w-2xl">Three ways I help teams get manual work off their plate.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <article key={service.title} className="flex flex-col gap-4 border border-[var(--color-border)] rounded-xl p-6">
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <div>
              <p className="mono text-xs uppercase text-[var(--color-muted)]">The problem</p>
              <p>{service.problem}</p>
            </div>
            <div>
              <p className="mono text-xs uppercase text-[var(--color-muted)]">What you get</p>
              <p>{service.outcome}</p>
            </div>
            <div>
              <p className="mono text-xs uppercase text-[var(--color-muted)]">Real examples</p>
              <ul className="list-disc pl-5">
                {service.examples.map((ex) => (
                  <li key={ex}>{ex}</li>
                ))}
              </ul>
            </div>
            <p className="mono text-xs text-[var(--color-muted)] mt-auto">{service.tools.join(" · ")}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
