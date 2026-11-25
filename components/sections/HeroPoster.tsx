// Static poster of the hero scene: scattered blocks on the left resolve into an
// ordered pipeline (one lead node dispatching to worker nodes). Used as the
// placeholder before the 3D scene loads and as its reduced-motion / no-WebGL fallback.

const workers = [96, 198, 300, 402, 504];

const scattered: Array<[number, number, number, number]> = [
  [42, 92, 26, -18],
  [96, 150, 18, 24],
  [58, 228, 22, 12],
  [30, 360, 20, -30],
  [88, 430, 28, 8],
  [50, 506, 16, 40],
  [128, 70, 14, 35],
  [132, 528, 18, -12],
];

export default function HeroPoster({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 600"
      className={className}
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
    >
      {scattered.map(([x, y, s, r], i) => (
        <rect
          key={i}
          x={x}
          y={y}
          width={s}
          height={s}
          rx="3"
          transform={`rotate(${r} ${x + s / 2} ${y + s / 2})`}
          fill="var(--color-surface-2)"
          stroke="var(--color-line-strong)"
          strokeWidth="1.5"
        />
      ))}

      {workers.map((y) => (
        <path
          key={`l-${y}`}
          d={`M 262 300 C 360 300, 360 ${y}, 452 ${y}`}
          fill="none"
          stroke="var(--color-line-strong)"
          strokeWidth="1.5"
        />
      ))}

      {workers.map((y, i) => {
        const t = [0.35, 0.7, 0.5, 0.25, 0.6][i];
        const x = 262 + (452 - 262) * t;
        const yy = 300 + (y - 300) * (3 * t * t - 2 * t * t * t);
        return <circle key={`p-${y}`} cx={x} cy={yy} r="4" fill="var(--color-accent)" />;
      })}

      <rect x="190" y="228" width="144" height="144" rx="10" fill="var(--color-surface)" stroke="var(--color-fg)" strokeWidth="1.5" />
      <rect x="222" y="260" width="80" height="80" rx="6" fill="none" stroke="var(--color-line-strong)" strokeWidth="1.5" />

      {workers.map((y) => (
        <rect
          key={`w-${y}`}
          x="452"
          y={y - 26}
          width="52"
          height="52"
          rx="6"
          fill="var(--color-surface)"
          stroke="var(--color-muted)"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  );
}
