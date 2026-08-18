import Image from "next/image";
import Reveal from "./Reveal";
import { categories } from "@/lib/content";

export default function Categories() {
  return (
    <section id="rooms" className="section-y">
      <div className="shell">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="eyebrow text-green">Shop by room</p>
            </Reveal>
            <Reveal delay={70}>
              <h2 className="mt-2 text-[clamp(1.9rem,1.3rem+2.2vw,3rem)]">
                What we make
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <a
              href="#enquire"
              className="text-[0.8125rem] tracking-wide text-green underline-offset-4 hover:underline"
            >
              Ask for anything not listed
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <a href="#enquire" className="group block">
                <div className="relative aspect-4/5 overflow-hidden bg-bone-2">
                  <Image
                    src={c.img}
                    alt={c.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 30vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-shelf group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 text-[0.9375rem] leading-snug transition-colors duration-300 group-hover:text-green">
                  {c.name}
                </p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
