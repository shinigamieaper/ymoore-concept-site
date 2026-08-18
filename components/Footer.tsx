import { Wordmark } from "./Nav";
import { INSTAGRAM, PHONE_DISPLAY, WHATSAPP } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-ink py-14 text-sm text-bone/60">
      <div className="shell">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr_1fr] md:gap-12">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-[34ch]">
              Furniture and interior design, built in Lagos and delivered across
              Nigeria.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-4 text-bone/50">What we make</p>
            <ul className="flex flex-col gap-1.5">
              {[
                "Sofas and seating",
                "Beds and wardrobes",
                "Dining sets",
                "TV stands and centre tables",
              ].map((l) => (
                <li key={l}>
                  <a href="#rooms" className="transition-colors hover:text-bone">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-4 text-bone/50">Reach us</p>
            <ul className="flex flex-col gap-1.5">
              <li>
                <a href={WHATSAPP} className="transition-colors hover:text-bone">
                  WhatsApp {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM}
                  rel="noopener"
                  className="transition-colors hover:text-bone"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a href="#enquire" className="transition-colors hover:text-bone">
                  Request a quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-between gap-x-8 gap-y-3 border-t border-bone/15 pt-6 text-xs">
          <span>Yetty Moore Concept, Lagos, Nigeria</span>
          <span className="text-brass">
            Design preview built by Growveloper. Not a live shop.
          </span>
        </div>
      </div>
    </footer>
  );
}
