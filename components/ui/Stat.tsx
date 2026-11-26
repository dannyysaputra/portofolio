type StatProps = {
  value: string;
  label: string;
  context?: string;
  className?: string;
};

// Renders one dt/dd group. Must be a direct child of a <dl> (a single div wrapper is valid HTML).
export default function Stat({ value, label, context, className = "" }: StatProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* The label is the term (read first); CSS order shows the value on top. */}
      <dt className="order-2 text-fg">{label}</dt>
      <dd className="type-number depth-reveal order-1 text-accent">{value}</dd>
      {context && <dd className="type-label order-3 text-subtle">{context}</dd>}
    </div>
  );
}
