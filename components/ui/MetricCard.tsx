interface MetricCardProps {
  label: string;
  value: string;
}

export default function MetricCard({ label, value }: MetricCardProps) {
  return (
    <div className="flex flex-col gap-1 py-4 border-l border-[var(--color-border)] pl-6">
      <span className="font-semibold text-2xl md:text-3xl text-[var(--color-foreground)]">{value}</span>
      <span className="mono text-xs text-[var(--color-muted)] uppercase tracking-wide">{label}</span>
    </div>
  );
}
