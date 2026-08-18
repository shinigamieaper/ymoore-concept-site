import Reveal from "./Reveal";

export default function Proof() {
  return (
    <section className="section-y bg-ink text-bone">
      <div className="shell">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr] md:items-start md:gap-14">
          <Reveal>
            <p className="eyebrow text-bone/50">Why people come back</p>
            <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,3.5rem)] text-bone">
              Furniture that survives
              <br />
              the second year.
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <dl>
              <dt className="eyebrow text-bone/50">
                Clients in Lagos and nationwide
              </dt>
              <dd className="mt-2 font-display text-[clamp(2.25rem,1.8rem+1.6vw,3.25rem)] leading-none text-brass">
                1,200+
              </dd>
            </dl>
            <p className="mt-2 text-[0.9375rem] text-bone/60">
              Built one order at a time since the workshop opened.
            </p>
          </Reveal>

          <Reveal delay={160}>
            <dl>
              <dt className="eyebrow text-bone/50">Built to order</dt>
              <dd className="mt-2 font-display text-[clamp(2.25rem,1.8rem+1.6vw,3.25rem)] leading-none text-brass">
                Every piece
              </dd>
            </dl>
            <p className="mt-2 text-[0.9375rem] text-bone/60">
              Nothing off a shelf, so nothing arrives the wrong size.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
