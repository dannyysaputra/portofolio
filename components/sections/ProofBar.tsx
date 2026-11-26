import { proofStats } from "@/data/home";
import Stat from "@/components/ui/Stat";

export default function ProofBar() {
  return (
    <section aria-label="Results at a glance" className="border-t border-line">
      <div className="container-page">
        {/* Mobile: divide-y. From sm: gap-px over a line-colored background draws the grid hairlines. */}
        <dl className="grid grid-cols-1 divide-y divide-line sm:grid-cols-3 sm:gap-px sm:divide-y-0 sm:bg-line">
          {proofStats.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              context={stat.context}
              className="bg-bg py-10 sm:px-6 lg:py-14"
            />
          ))}
        </dl>
      </div>
    </section>
  );
}
