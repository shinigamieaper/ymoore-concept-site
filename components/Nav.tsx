import Logo from "./Logo";
import { WHATSAPP } from "@/lib/content";

const links = [
  { href: "#collection", label: "Collection" },
  { href: "#rooms", label: "Rooms" },
  { href: "#buy", label: "Ways to buy" },
  { href: "#design", label: "Interior design" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-bone/92 backdrop-blur-sm">
      <div className="shell flex min-h-[70px] items-center justify-between gap-8">
        <a href="#top" aria-label="Yetty Moore Concept, home">
          <Logo />
        </a>

        <nav aria-label="Primary" className="hidden gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1 text-[0.8125rem] tracking-wide text-muted transition-colors duration-300 hover:text-ink"
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-sand transition-transform duration-500 ease-shelf group-hover:origin-left group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP}
          className="inline-flex items-center bg-ink px-5 py-2.5 text-[0.8125rem] tracking-wide text-bone transition-colors duration-300 ease-shelf hover:bg-brass active:translate-y-px"
        >
          Request a quote
        </a>
      </div>
    </header>
  );
}
