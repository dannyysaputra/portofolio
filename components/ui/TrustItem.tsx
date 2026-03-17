import { CheckCircle2 } from "lucide-react";

interface TrustItemProps {
  text: string;
}

export default function TrustItem({ text }: TrustItemProps) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2 className="h-5 w-5 text-[var(--color-accent)] shrink-0 mt-0.5" />
      <span className="text-[var(--color-foreground)] leading-relaxed">{text}</span>
    </div>
  );
}
