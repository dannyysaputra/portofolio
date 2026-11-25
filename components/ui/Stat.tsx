type StatProps = {
  value: string;
  label: string;
  context?: string;
};

export default function Stat({ value, label, context }: StatProps) {
  return (
    <div className="flex flex-col gap-3">
      <dt className="sr-only">{label}</dt>
      <dd className="type-number text-accent">{value}</dd>
      <dd className="text-fg">{label}</dd>
      {context && <dd className="type-label text-subtle">{context}</dd>}
    </div>
  );
}
