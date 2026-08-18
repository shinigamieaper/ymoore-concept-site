import Image from "next/image";
import Reveal from "./Reveal";
import { categories } from "@/lib/content";

function ArrowOut() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M17 7H9M17 7v8" />
    </svg>
  );
}

export default function Categories() {
  return (
    <section id="rooms" className="pb-[clamp(4rem,9vw,8rem)]">
      <div className="shell">
        <div className="mb-[clamp(2.5rem,5vw,4rem)] grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
          <div>
            <Reveal>
              <p className="eyebrow text-muted">What we make</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,4rem)]">
                Room by room.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160}>
            <p className="max-w-[46ch] text-muted">
              Six lines of work, all built in the same workshop, all delivered
              and installed by the same team.
            </p>
          </Reveal>
        </div>

        <div className="cat-grid grid gap-4">
          {categories.map((c, i) => (
            <Reveal key={c.name} delay={i * 60}>
              <a
                href="#enquire"
                className="group relative flex h-full min-h-[210px] items-end overflow-hidden bg-ink-2 text-bone"
              >
                <Image
                  src={c.img}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 800px) 45vw, 100vw"
                  className="object-cover transition-transform duration-1000 ease-shelf group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[linear-gradient(to_top,rgba(23,19,15,0.88)_0%,rgba(23,19,15,0.18)_55%,rgba(23,19,15,0.05)_100%)]" />
                <span className="absolute right-6 top-6 translate-x-[-6px] translate-y-[6px] text-bone opacity-0 transition-all duration-400 ease-shelf group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <ArrowOut />
                </span>
                <span className="relative flex w-full flex-col gap-1.5 p-6 sm:p-8">
                  <span className="font-display text-[clamp(1.35rem,1.15rem+0.7vw,2rem)] leading-tight">
                    {c.name}
                  </span>
                  <span className="text-[0.8125rem] text-bone/60">
                    {c.items}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
