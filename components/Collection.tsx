import Image from "next/image";
import Reveal from "./Reveal";
import { pieces } from "@/lib/content";

export default function Collection() {
  return (
    <section id="collection" className="section-y">
      <div className="shell">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-muted">Selected pieces</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,4rem)]">
                Every piece here was made
                <br />
                for one particular room.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[46ch] text-muted">
              Nothing is mass produced. Pick a shape you like, tell us the
              measurements and the fabric, and we build it. Swipe to look
              through recent work.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="rail" tabIndex={0} aria-label="Selected pieces, scrollable">
        {pieces.map((p, i) => (
          <Reveal
            key={p.name}
            as="article"
            delay={i * 70}
            className="group flex snap-start flex-col gap-4"
          >
            <div
              className={`relative overflow-hidden bg-bone-2 ${p.shape === "tall" ? "aspect-3/4" : "aspect-4/3"}`}
            >
              <Image
                src={p.img}
                alt={p.alt}
                fill
                sizes="(min-width: 1100px) 26vw, (min-width: 700px) 38vw, 76vw"
                className="object-cover transition-transform duration-1000 ease-shelf group-hover:scale-[1.045]"
              />
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-4 border-t border-text/15 pt-3.5">
                <h3 className="font-display text-xl leading-tight">{p.name}</h3>
                <span className="eyebrow whitespace-nowrap text-brass">
                  Price on request
                </span>
              </div>
              <p className="mt-2.5 max-w-[34ch] text-[0.9375rem] text-muted">
                {p.note}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
