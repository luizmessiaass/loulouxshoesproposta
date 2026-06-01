export function CircleDecor({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none absolute opacity-20 ${className}`}
    >
      {[120, 200, 280, 360, 440].map((r) => (
        <circle
          key={r}
          cx="0"
          cy="600"
          r={r}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
