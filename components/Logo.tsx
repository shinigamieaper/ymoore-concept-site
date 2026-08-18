export function LogoMark({
  className = "",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 62"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* roof / gable */}
      <path d="M8 34 50 6l42 28" />
      {/* eaves */}
      <path d="M22 44h56" />
      {/* swoosh beneath the roof */}
      <path d="M14 56c14-9 30-13 46-11 9 1 18 4 26 8" strokeWidth="4" />
    </svg>
  );
}

export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const ink = tone === "dark" ? "text-ink" : "text-bone";
  const mark = tone === "dark" ? "text-green" : "text-green";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={`h-8 w-[52px] shrink-0 ${mark}`} />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.4rem] leading-none ${ink}`}>
          Y&rsquo;MOORE
        </span>
        <span
          className={`mt-1 text-[0.5rem] font-medium uppercase tracking-[0.42em] ${tone === "dark" ? "text-muted" : "text-bone/60"}`}
        >
          Concept
        </span>
      </span>
    </span>
  );
}
