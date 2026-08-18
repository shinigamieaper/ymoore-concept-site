import Image from "next/image";
import Reveal from "./Reveal";
import { pieces } from "@/lib/content";

export default function Collection() {
  return (
    <section id="collection" className="section-y bg-bone-2">
      <div className="shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="eyebrow text-green">Recent work</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-2 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)]">
                Pieces we have built
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <p className="max-w-[38ch] text-[0.9375rem] text-muted">
              Nothing is mass produced. Pick a shape, send the measurements, we
              build it.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {pieces.map((p, i) => (
            <Reveal key={p.name} delay={i * 60}>
              <article className="group flex h-full flex-col bg-bone">
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                    className="object-cover transition-transform duration-700 ease-shelf group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-0 top-0 bg-green px-3 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-white">
                    Made to order
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="font-display text-[1.35rem] leading-tight">
                    {p.name}
                  </h3>
                  <p className="text-[0.875rem] text-muted">{p.note}</p>
                  <div className="mt-auto flex items-center justify-between gap-3 border-t border-ink/10 pt-3.5">
                    <span className="text-[0.8125rem] text-muted">
                      Price on request
                    </span>
                    <a
                      href="#enquire"
                      className="text-[0.8125rem] tracking-wide text-green underline-offset-4 hover:underline"
                    >
                      Get a quote
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
