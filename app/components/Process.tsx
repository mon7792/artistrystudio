'use client';

import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    n: "01",
    title: "Share your idea",
    body: "Tell me the moment, the object, the feeling. WhatsApp is easiest — send photos if you have them.",
  },
  {
    n: "02",
    title: "Design & quote",
    body: "I sketch a direction, propose a size, materials and finish, and share a quote — all over chat. No pressure.",
  },
  {
    n: "03",
    title: "Crafting",
    body: "Resin is slow work. Most pieces take 3–6 weeks. I share photos as it comes together so it never feels like a black box.",
  },
  {
    n: "04",
    title: "Delivered to you",
    body: "Packed with care and shipped across India. Worldwide on request.",
  },
];

export default function Process() {
  const ref = useReveal();

  return (
    <section
      id="process"
      className="bg-[#F4ECDB] py-24 md:py-36"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24 items-end">
          <p className="md:col-span-2 text-[11px] tracking-[0.4em] uppercase text-[#C9A227]">
            Process
          </p>
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-light text-[#1C1A17] leading-[1.05]">
            How a commission works.
          </h2>
          <p className="md:col-span-3 text-sm text-[#4A453E] font-light">
            Four quiet steps — most start over WhatsApp and finish on your
            mantel.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="relative pt-8 md:pt-12 border-t border-[#1C1A17]/15"
            >
              <span className="absolute -top-1 left-0 font-display text-5xl md:text-6xl font-light text-[#C9A227] leading-none">
                {s.n}
              </span>
              <h3 className="font-display text-xl md:text-2xl text-[#1C1A17] mb-3 mt-2">
                {s.title}
              </h3>
              <p className="text-sm text-[#4A453E] font-light leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
