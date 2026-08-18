import Image from "next/image";
import Reveal from "./Reveal";

const meta = [
  { k: "Clients served", v: "1,200+" },
  { k: "Delivery", v: "Nationwide" },
  { k: "Built to", v: "Your size" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-bone text-text">
      <div className="mx-auto grid max-w-[1400px] items-end lg:min-h-[calc(100dvh-70px)] lg:grid-cols-[1.02fr_0.98fr]">
        <div className="flex flex-col gap-6 px-[clamp(1.25rem,5vw,5.5rem)] pb-[clamp(3rem,5vw,5rem)] pt-[clamp(3rem,6vw,6rem)] sm:gap-8">
          <Reveal>
            <p className="eyebrow text-brass">
              Furniture and interior design, Lagos
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="text-[clamp(2.75rem,1.6rem+5.2vw,6rem)] text-ink">
              Built for the room
              <br />
              you actually <em className="italic text-brass">live in</em>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="max-w-[46ch] text-[clamp(1rem,0.95rem+0.3vw,1.1875rem)] text-muted">
              Sofas, beds, wardrobes, dining sets and office pieces, made to
              your measurements in Lagos. Have it delivered, come and see it, or
              have us come to your space.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex items-center bg-ink px-7 py-3.5 text-sm tracking-wide text-bone transition-colors duration-300 ease-shelf hover:bg-brass active:translate-y-px"
              >
                Request a quote
              </a>
              <a
                href="#collection"
                className="inline-flex items-center border border-ink/20 px-7 py-3.5 text-sm tracking-wide text-ink transition-colors duration-300 ease-shelf hover:border-ink active:translate-y-px"
              >
                See the collection
              </a>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl className="grid grid-cols-2 gap-x-8 gap-y-5 border-t border-ink/12 pt-8 sm:grid-cols-3">
              {meta.map((m) => (
                <div key={m.k}>
                  <dt className="eyebrow text-muted">{m.k}</dt>
                  <dd className="mt-1.5 font-display text-2xl leading-tight text-ink">
                    {m.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="relative min-h-[62vw] lg:min-h-full">
          <Image
            src="/img/hero.jpg"
            alt="A living room with cream sofas, a timber coffee table and an olive tree"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#f5f0ec_0%,rgba(245,240,236,0)_38%)] lg:bg-[linear-gradient(to_right,#f5f0ec_0%,rgba(245,240,236,0.5)_16%,rgba(245,240,236,0)_52%)]" />
        </div>
      </div>
    </section>
  );
}
