"use client";

import { useState } from "react";
import {
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  PHONE_DISPLAY,
  WHATSAPP,
  contactModes,
  pieceOptions,
} from "@/lib/content";

type Fields = {
  name: string;
  phone: string;
  piece: string;
  mode: string;
  where: string;
  notes: string;
};
type Errors = Partial<Record<"name" | "phone" | "piece", string>>;

const empty: Fields = {
  name: "",
  phone: "",
  piece: "",
  mode: contactModes[0],
  where: "",
  notes: "",
};

function validate(v: Fields): Errors {
  const e: Errors = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.phone.trim()) e.phone = "We need a number to send the quote to.";
  else if (v.phone.replace(/\D/g, "").length < 7)
    e.phone = "That number looks too short.";
  if (!v.piece) e.piece = "Pick the closest one, we can adjust later.";
  return e;
}

const fieldBase =
  "border border-text/15 bg-transparent px-4 py-3.5 font-light transition-colors duration-300 hover:border-text/30 focus:border-brass focus:outline-none";

export default function Enquiry() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function set<K extends keyof Fields>(key: K, val: string) {
    setValues((v) => ({ ...v, [key]: val }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  async function onSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (found.name || found.phone || found.piece) {
      setState("idle");
      return;
    }
    setState("sending");
    await new Promise((r) => setTimeout(r, 550));
    setState("done");
  }

  const bad = { borderColor: "var(--color-danger)" };

  return (
    <section id="enquire" className="section-y bg-bone-2">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="flex flex-col gap-7">
            <div>
              <p className="eyebrow text-muted">Get in touch</p>
              <h2 className="mt-3 text-[clamp(2.1rem,1.35rem+3.1vw,3.5rem)]">
                Tell us the piece
                <br />
                and the room.
              </h2>
              <p className="mt-4 text-muted">
                We answer on WhatsApp first, it is the fastest way to send
                pictures of the space.
              </p>
            </div>

            <div className="flex flex-col gap-1 border-t border-text/15 pt-4">
              <span className="eyebrow text-muted">WhatsApp and calls</span>
              <span className="font-display text-xl">
                <a
                  href={WHATSAPP}
                  className="transition-colors hover:text-brass"
                >
                  {PHONE_DISPLAY}
                </a>
              </span>
            </div>

            <div className="flex flex-col gap-1 border-t border-text/15 pt-4">
              <span className="eyebrow text-muted">Instagram</span>
              <span className="font-display text-xl">
                <a
                  href={INSTAGRAM}
                  rel="noopener"
                  className="transition-colors hover:text-brass"
                >
                  {INSTAGRAM_HANDLE}
                </a>
              </span>
            </div>

            <div className="flex flex-col gap-1 border-t border-text/15 pt-4">
              <span className="eyebrow text-muted">Where we deliver</span>
              <span className="font-display text-xl">
                Lagos, and nationwide
              </span>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate>
            <div className="grid gap-x-5 sm:grid-cols-2">
              <div className="mb-5 flex flex-col gap-2">
                <label
                  htmlFor="f-name"
                  className="text-[0.8125rem] font-medium"
                >
                  Your name
                </label>
                <input
                  id="f-name"
                  className={fieldBase}
                  autoComplete="name"
                  value={values.name}
                  onChange={(e) => set("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  style={errors.name ? bad : undefined}
                />
                {errors.name ? (
                  <span className="text-xs text-danger">{errors.name}</span>
                ) : null}
              </div>

              <div className="mb-5 flex flex-col gap-2">
                <label
                  htmlFor="f-phone"
                  className="text-[0.8125rem] font-medium"
                >
                  Phone or WhatsApp
                </label>
                <input
                  id="f-phone"
                  type="tel"
                  className={fieldBase}
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  style={errors.phone ? bad : undefined}
                />
                {errors.phone ? (
                  <span className="text-xs text-danger">{errors.phone}</span>
                ) : null}
              </div>
            </div>

            <div className="grid gap-x-5 sm:grid-cols-2">
              <div className="mb-5 flex flex-col gap-2">
                <label
                  htmlFor="f-piece"
                  className="text-[0.8125rem] font-medium"
                >
                  What do you need
                </label>
                <select
                  id="f-piece"
                  className={fieldBase}
                  value={values.piece}
                  onChange={(e) => set("piece", e.target.value)}
                  aria-invalid={Boolean(errors.piece)}
                  style={errors.piece ? bad : undefined}
                >
                  <option value="">Choose one</option>
                  {pieceOptions.map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
                {errors.piece ? (
                  <span className="text-xs text-danger">{errors.piece}</span>
                ) : null}
              </div>

              <div className="mb-5 flex flex-col gap-2">
                <label htmlFor="f-mode" className="text-[0.8125rem] font-medium">
                  How would you like to do it
                </label>
                <select
                  id="f-mode"
                  className={fieldBase}
                  value={values.mode}
                  onChange={(e) => set("mode", e.target.value)}
                >
                  {contactModes.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid gap-x-5 sm:grid-cols-2">
              <div className="mb-5 flex flex-col gap-2">
                <label
                  htmlFor="f-where"
                  className="text-[0.8125rem] font-medium"
                >
                  Your area
                </label>
                <input
                  id="f-where"
                  className={fieldBase}
                  placeholder="Lekki, Ikeja, Abuja"
                  value={values.where}
                  onChange={(e) => set("where", e.target.value)}
                />
                <span className="text-xs text-muted">
                  Optional. Helps us quote delivery or plan the visit.
                </span>
              </div>
            </div>

            <div className="mb-5 flex flex-col gap-2">
              <label htmlFor="f-notes" className="text-[0.8125rem] font-medium">
                Measurements or anything else
              </label>
              <textarea
                id="f-notes"
                rows={4}
                className={fieldBase}
                placeholder="Room size, colour, fabric, deadline"
                value={values.notes}
                onChange={(e) => set("notes", e.target.value)}
              />
              <span className="text-xs text-muted">
                Optional. You can send photos on WhatsApp after.
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={state === "sending"}
                className="inline-flex items-center bg-brass px-7 py-3.5 text-sm tracking-wide text-[#fdfbf7] transition-colors duration-300 ease-shelf hover:bg-brass-deep active:translate-y-px disabled:opacity-70"
              >
                {state === "sending" ? "Sending" : "Send enquiry"}
              </button>
              <a
                href={WHATSAPP}
                className="inline-flex items-center border border-text/15 px-7 py-3.5 text-sm tracking-wide transition-colors duration-300 ease-shelf hover:border-text active:translate-y-px"
              >
                Message on WhatsApp instead
              </a>
            </div>

            <p className="mt-4 text-[0.8125rem] text-muted">
              No deposit is taken here. We reply with a price first.
            </p>

            {state === "done" ? (
              <div
                role="status"
                className="mt-5 flex items-start gap-3 border border-brass p-5"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-hidden="true"
                  className="mt-1 shrink-0 text-brass"
                >
                  <path d="M4 12.5 9 17.5 20 6.5" />
                </svg>
                <span className="text-sm">
                  <strong className="font-medium">Enquiry ready.</strong> This
                  is a design preview, so nothing was submitted. On the live
                  site this lands in your inbox and pings your WhatsApp.
                </span>
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
