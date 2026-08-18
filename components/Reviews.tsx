import Reveal from "./Reveal";

const slots = [
  {
    n: "Review slot 01",
    q: "Your longest and best review sits here, in the client's own words.",
  },
  { n: "Review slot 02", q: "A shorter one, about delivery or the fit." },
  { n: "Review slot 03", q: "A third, ideally from a repeat client." },
];

export default function Reviews() {
  return (
    <section className="section-y">
      <div className="shell">
        <div className="mb-8">
          <Reveal>
            <p className="eyebrow text-muted">In their words</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,4rem)]">
              What clients say.
            </h2>
          </Reveal>
        </div>

        <p className="mb-8 flex max-w-[60ch] items-start gap-3 border-l-2 border-brass py-3.5 pl-4 text-sm text-muted">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="mt-1 shrink-0 text-brass"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5M12 16.5v.01" />
          </svg>
          <span>
            Layout only. These three slots are where your real reviews from the
            Instagram highlight go, word for word, with the client&apos;s first
            name and the piece they bought.
          </span>
        </p>

        <div className="grid gap-6 md:grid-cols-[1.3fr_1fr] md:gap-8">
          <Reveal>
            <blockquote className="flex flex-col gap-3 border-t border-text/15 pt-5">
              <span className="eyebrow text-brass">{slots[0].n}</span>
              <p className="font-display text-[clamp(1.15rem,1.05rem+0.5vw,1.5rem)] leading-snug">
                {slots[0].q}
              </p>
              <cite className="text-sm not-italic text-muted">
                Client name, area, piece purchased
              </cite>
            </blockquote>
          </Reveal>

          <div className="grid gap-6">
            {slots.slice(1).map((s, i) => (
              <Reveal key={s.n} delay={(i + 1) * 80}>
                <blockquote className="flex flex-col gap-3 border-t border-text/15 pt-5">
                  <span className="eyebrow text-brass">{s.n}</span>
                  <p className="font-display text-[clamp(1.15rem,1.05rem+0.5vw,1.5rem)] leading-snug">
                    {s.q}
                  </p>
                  <cite className="text-sm not-italic text-muted">
                    Client name, area, piece purchased
                  </cite>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
