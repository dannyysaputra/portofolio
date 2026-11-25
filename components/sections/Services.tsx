import { services } from "@/data/home";
import Section from "@/components/ui/Section";
import Tag from "@/components/ui/Tag";

export default function Services() {
  return (
    <Section
      id="services"
      index="01"
      eyebrow="Services"
      title="What I can take off your plate"
      intro="Three kinds of work, each starting from a real business problem and ending with something your team uses every day."
    >
      <ol className="flex flex-col">
        {services.map((service, i) => (
          <li key={service.title} className="grid gap-6 border-t border-line py-10 md:grid-cols-12 md:gap-8 md:py-12">
            <div className="flex flex-col gap-3 md:col-span-3">
              <span className="type-label text-subtle">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="type-heading">{service.title}</h3>
            </div>
            <div className="flex flex-col gap-6 md:col-span-5">
              <div className="flex flex-col gap-2">
                <p className="type-label text-subtle">The problem</p>
                <p className="text-fg">{service.problem}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="type-label text-subtle">What you get</p>
                <p className="text-muted">{service.outcome}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 md:col-span-4">
              <p className="type-label text-subtle">Real examples</p>
              <ul className="flex flex-col gap-3">
                {service.examples.map((ex) => (
                  <li key={ex} className="type-small border-l border-line-strong pl-3 text-muted">
                    {ex}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-wrap gap-2 pt-2" aria-label="Tools">
                {service.tools.map((tool) => (
                  <li key={tool}>
                    <Tag>{tool}</Tag>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
