import { WHATSAPP } from "@/lib/content";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP}
      aria-label="Message Yetty Moore Concept on WhatsApp"
      className="fixed bottom-6 right-6 z-30 inline-flex items-center gap-2.5 border border-bone/15 bg-ink px-5 py-3.5 text-sm text-bone transition-colors duration-300 ease-shelf hover:border-brass hover:bg-brass active:translate-y-px"
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.7-5.1A8.5 8.5 0 1 1 21 11.5z" />
      </svg>
      WhatsApp us
    </a>
  );
}
