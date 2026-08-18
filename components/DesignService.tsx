import Image from "next/image";
import Reveal from "./Reveal";

const points = [
  "Space planning and layout before a single piece is ordered",
  "Finishes, fabrics and colour chosen together, with samples",
  "Homes, offices, short lets and reception areas, in Lagos and beyond",
  "Delivery and installation handled by our own people",
];

function Tick() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      className="mt-2 shrink-0 text-brass"
    >
      <path d="M4 12.5 9 17.5 20 6.5" />
    </svg>
  );
}

export default function DesignService() {
  return (
    <section id="design" className="section-y">
      <div className="shell">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal className="relative">
            <Image
              src="/img/interior.jpg"
              alt="A styled living room with a sectional sofa, gallery wall and timber table"
              width={1000}
              height={800}
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="aspect-5/4 w-full object-cover"
            />
          </Reveal>

          <Reveal delay={80} className="flex flex-col gap-5">
            <p className="eyebrow text-muted">Interior design</p>
            <h2 className="text-[clamp(2.1rem,1.35rem+3.1vw,3.5rem)]">
              We can furnish the whole place, not just one corner of it.
            </h2>
            <p className="text-muted">
              Residential and commercial. You show us the space, empty or half
              done, and we plan what goes where before anything is built. One
              team from the drawing to the day it is installed.
            </p>
            <ul className="grid">
              {points.map((p, i) => (
                <li
                  key={p}
                  className={`grid grid-cols-[auto_1fr] items-start gap-3.5 border-b border-text/15 py-3.5 ${i === 0 ? "border-t" : ""}`}
                >
                  <Tick />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <div>
              <a
                href="#enquire"
                className="inline-flex items-center bg-ink px-7 py-3.5 text-sm tracking-wide text-bone transition-colors duration-300 ease-shelf hover:bg-ink-3 active:translate-y-px"
              >
                Book a consultation
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
