interface CapabilityGroupProps {
  title: string;
  items: string[];
}

export default function CapabilityGroup({ title, items }: CapabilityGroupProps) {
  return (
    <div className="flex flex-col gap-3">
      <h4 className="font-semibold text-[var(--color-foreground)]">{title}</h4>
      <ul className="flex flex-col gap-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-[var(--color-muted)] text-sm flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[var(--color-border)] rounded-full shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
