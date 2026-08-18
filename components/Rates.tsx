import Reveal from "./Reveal";
import { WHATSAPP, rates } from "@/lib/content";

export default function Rates() {
  return (
    <section className="section-y">
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow text-brass">Published rates</p>
            <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,3.25rem)]">
              The fabrication work
              <br />
              is priced openly.
            </h2>
            <p className="mt-4 max-w-[42ch] text-muted">
              Doors, kitchen cabinets and wardrobe carcasses are charged at a
              set rate. Everything else is quoted per job once we know the size
              and the finish.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <dl className="border-t border-ink/12">
              {rates.map((r) => (
                <div
                  key={r.item}
                  className="flex items-baseline justify-between gap-6 border-b border-ink/12 py-5"
                >
                  <dt className="text-[1.0625rem]">{r.item}</dt>
                  <dd className="flex items-baseline gap-2 text-right">
                    <span className="font-display text-2xl text-ink tabular-nums">
                      {r.price}
                    </span>
                    <span className="text-[0.8125rem] text-muted">
                      {r.unit}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
            <a
              href={WHATSAPP}
              className="mt-6 inline-flex items-center border border-ink/20 px-7 py-3.5 text-sm tracking-wide text-ink transition-colors duration-300 ease-shelf hover:border-ink active:translate-y-px"
            >
              Ask for a full quote
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
