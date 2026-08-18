import Reveal from "./Reveal";
import { steps } from "@/lib/content";

export default function Process() {
  return (
    <section id="process" className="section-y">
      <div className="shell">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-muted">How it works</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,4rem)]">
                Four steps, start to finish.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[46ch] text-muted">
              Most orders run four to six weeks depending on the piece and the
              fabric. You will know the timeline before you pay anything.
            </p>
          </Reveal>
        </div>

        <ol className="grid border-t border-text/15 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              as="li"
              delay={i * 70}
              className={`flex flex-col gap-2.5 border-b border-text/15 py-8 md:border-b-0 md:border-r md:px-7 md:pb-10 md:pt-9 ${i === 0 ? "md:pl-0" : ""} ${i === steps.length - 1 ? "md:border-r-0 md:pr-0" : ""}`}
            >
              <span className="font-display text-4xl leading-none text-brass">
                {s.n}
              </span>
              <span className="font-medium">{s.title}</span>
              <span className="text-[0.9375rem] text-muted">{s.note}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
