import { proofStats } from "@/data/home";

export default function ProofBar() {
  return (
    <section aria-label="Results" className="py-8 border-y border-[var(--color-border)]">
      <dl className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {proofStats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="text-3xl font-semibold text-[var(--color-accent)]">{stat.value}</dd>
            <dd className="text-sm">{stat.label}</dd>
            <dd className="mono text-xs text-[var(--color-muted)]">{stat.context}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
