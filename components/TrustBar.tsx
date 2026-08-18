import { LogoMark } from "./Logo";

function Truck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-6 w-6">
      <path d="M2 7h11v9H2zM13 10h4.5L21 13.5V16h-8z" />
      <circle cx="6" cy="18" r="1.6" />
      <circle cx="17" cy="18" r="1.6" />
    </svg>
  );
}
function Ruler() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-6 w-6">
      <path d="M3 14.5 14.5 3l6.5 6.5L9.5 21z" />
      <path d="M8 8.5 10 10.5M11 5.5 13 7.5M5 11.5 7 13.5" />
    </svg>
  );
}
function Pin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-6 w-6">
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

const items = [
  { icon: <Truck />, t: "We deliver to you", d: "Nationwide, not Lagos only" },
  { icon: <Pin />, t: "Come and see it", d: "Sit on it before you commit" },
  { icon: <Ruler />, t: "We come to you", d: "Site visits and measuring" },
  { icon: <LogoMark className="h-6 w-9" />, t: "Built to your size", d: "1,200+ clients served" },
];

export default function TrustBar() {
  return (
    <section id="buy" className="bg-ink text-bone">
      <div className="shell grid gap-x-8 gap-y-7 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.t} className="flex items-start gap-3.5">
            <span className="mt-0.5 shrink-0 text-green">{i.icon}</span>
            <span className="flex flex-col">
              <span className="text-[0.9375rem] font-medium leading-snug">{i.t}</span>
              <span className="text-[0.8125rem] text-bone/60">{i.d}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
