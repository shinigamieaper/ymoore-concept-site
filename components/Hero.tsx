import Image from "next/image";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative isolate">
      <div className="relative h-[clamp(30rem,78vh,46rem)] w-full overflow-hidden">
        <Image
          src="/img/hero.jpg"
          alt="A living room with cream sofas, a timber coffee table and an olive tree"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(20,26,15,0.55)_0%,rgba(20,26,15,0.46)_42%,rgba(20,26,15,0.66)_100%)]" />

        <div className="relative flex h-full items-center justify-center px-6 text-center">
          <div className="max-w-[52rem]">
            <Reveal>
              <p className="eyebrow text-bone/85">
                Furniture and interior design, Lagos
              </p>
            </Reveal>
            <Reveal delay={90}>
              <h1 className="mt-5 text-[clamp(2.4rem,1.4rem+3.6vw,4.75rem)] text-bone">
                Built for the room you actually live in
              </h1>
            </Reveal>
            <Reveal delay={170}>
              <p className="mx-auto mt-5 max-w-[46ch] text-bone/90">
                Sofas, beds, wardrobes, dining sets and office pieces, made to
                your measurements and delivered nationwide.
              </p>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  href="#collection"
                  className="inline-flex items-center bg-green px-8 py-3.5 text-sm tracking-wide text-white transition-colors duration-300 ease-shelf hover:bg-green-deep active:translate-y-px"
                >
                  Browse the collection
                </a>
                <a
                  href="#enquire"
                  className="inline-flex items-center border border-bone/60 px-8 py-3.5 text-sm tracking-wide text-bone transition-colors duration-300 ease-shelf hover:bg-bone hover:text-ink active:translate-y-px"
                >
                  Request a quote
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
