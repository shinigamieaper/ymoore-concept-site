const lines = [
  "Sofas",
  "Beds and wardrobes",
  "Dining sets",
  "TV stands and centre tables",
  "Interior design",
  "Accessories and fittings",
];

export default function Band() {
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-t border-bone/15 bg-ink py-4"
    >
      <div className="marquee">
        {[...lines, ...lines].map((l, i) => (
          <span
            key={`${l}-${i}`}
            className="whitespace-nowrap px-7 font-display text-[clamp(1.1rem,1rem+0.5vw,1.6rem)] text-bone/40"
          >
            {l}
            <span className="pl-7 text-brass">/</span>
          </span>
        ))}
      </div>
    </div>
  );
}
