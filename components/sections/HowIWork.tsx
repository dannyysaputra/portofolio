import { processSteps, whyFaster } from "@/data/home";

export default function HowIWork() {
  return (
    <section id="process" className="flex flex-col gap-10">
      <h2 className="heading-section mb-0">How we work together</h2>
      <ol className="grid md:grid-cols-4 gap-6">
        {processSteps.map((step, i) => (
          <li key={step.title} className="flex flex-col gap-2">
            <span className="mono text-sm text-[var(--color-muted)]">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-[var(--color-muted)]">{step.body}</p>
          </li>
        ))}
      </ol>
      <div className="border-l-2 border-[var(--color-accent)] pl-6 max-w-3xl">
        <h3 className="font-semibold text-lg">{whyFaster.title}</h3>
        <p className="text-[var(--color-muted)]">{whyFaster.body}</p>
      </div>
    </section>
  );
}
