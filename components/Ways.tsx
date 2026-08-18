import Reveal from "./Reveal";
import { WHATSAPP, ways } from "@/lib/content";

export default function Ways() {
  return (
    <section id="buy" className="section-y bg-green text-ink">
      <div className="shell">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-ink/60">Ways to buy</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,4rem)]">
                Three ways to do this.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[46ch] text-ink/75">
              Some people want it brought to the door. Some want to sit on it
              first. Some want us in the room before anything is decided. All
              three are fine.
            </p>
          </Reveal>
        </div>

        <div className="grid border-t border-ink/25 md:grid-cols-3">
          {ways.map((w, i) => (
            <Reveal
              key={w.title}
              delay={i * 80}
              className={`flex flex-col gap-3 border-b border-ink/25 py-8 md:border-b-0 md:border-r md:px-8 md:pb-10 md:pt-9 ${i === 0 ? "md:pl-0" : ""} ${i === ways.length - 1 ? "md:border-r-0 md:pr-0" : ""}`}
            >
              <h3 className="font-display text-[1.5rem] leading-tight">
                {w.title}
              </h3>
              <p className="text-[0.9375rem] text-ink/75">{w.note}</p>
              <a
                href={i === 0 ? "#enquire" : WHATSAPP}
                className="group mt-1 inline-flex w-fit items-center gap-2 text-[0.8125rem] tracking-wide text-ink"
              >
                {w.cta}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="transition-transform duration-300 ease-shelf group-hover:translate-x-1"
                >
                  <path d="M4 12h15M13 6l6 6-6 6" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-[62ch] text-[0.8125rem] text-ink/65">
          Showroom address goes here once you send it to me. Everything else on
          this page came off your Instagram.
        </p>
      </div>
    </section>
  );
}
