import { processSteps, whyFaster } from "@/data/home";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

export default function HowIWork() {
  return (
    <Section
      id="process"
      index="03"
      eyebrow="Process"
      title="How we work together"
      intro="A simple, predictable process. You always know what is being built, what it costs, and what comes next."
    >
      <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <li
            key={step.title}
            className={`flex flex-col gap-3 border-b border-line py-8 sm:pr-6 lg:border-b-0 ${
              i > 0 ? "lg:border-l lg:border-line lg:pl-6" : ""
            } ${i % 2 === 1 ? "sm:border-l sm:border-line sm:pl-6" : ""}`}
          >
            <span className="font-mono text-sm text-subtle">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="type-heading">{step.title}</h3>
            <p className="type-small text-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      <Card className="mt-12 grid gap-6 md:mt-16 md:grid-cols-12 md:gap-8">
        <h3 className="type-title md:col-span-5">{whyFaster.title}</h3>
        <p className="measure text-muted md:col-span-7 md:pt-2">{whyFaster.body}</p>
      </Card>
    </Section>
  );
}
