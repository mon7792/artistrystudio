'use client';

import { useReveal } from "../hooks/useReveal";
import { waLink } from "../lib/constants";

export default function Featured() {
  const ref = useReveal();

  return (
    <section
      id="featured"
      className="bg-[#F4ECDB] py-24 md:py-40"
    >
      <div ref={ref as React.RefObject<HTMLDivElement>} className="fade-up max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-12 md:mb-20">
          <p className="md:col-span-2 text-[11px] tracking-[0.4em] uppercase text-[#C9A227] mt-3">
            Featured
          </p>
          <h2 className="md:col-span-10 font-display text-4xl md:text-6xl lg:text-7xl font-light text-[#1C1A17] leading-[1.05]">
            The Porsche Project —
            <br />
            <em className="not-italic text-[#1B5FB0]">an obsession,</em> set in
            resin.
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8 md:gap-16 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#FBF7EE]">
              <img
                src="/products/porsche-project.webp"
                alt="The Porsche Project — custom resin commission"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="hidden md:block absolute -bottom-10 -right-10 w-48 h-48 border border-[#C9A227]/50" />
          </div>

          <div className="md:col-span-6 space-y-6">
            <p className="text-[11px] tracking-[0.4em] uppercase text-[#4A453E]">
              Custom Commission · 2024
            </p>
            <p className="font-display text-2xl md:text-3xl font-light text-[#1C1A17] leading-snug italic">
              &ldquo;He wanted the car he&apos;d drawn as a boy — frozen, the day he
              finally drove one.&rdquo;
            </p>
            <div className="gold-rule w-24" />
            <div className="space-y-4 text-[15px] text-[#4A453E] font-light leading-relaxed">
              <p>
                Built over six weeks: a hand-cast resin slab with embedded model
                detailing, ocean-deep blues bleeding into a single gold pour
                — a nod to the day, the drive, and the dream.
              </p>
              <p>
                Pieces like this are slow work. Each one starts with a
                conversation, an object, and the moment we&apos;re trying to keep.
              </p>
            </div>

            <a
              href={waLink("Hi Akshada! I'd like to discuss a custom commission similar to The Porsche Project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-shimmer commission-btn inline-block bg-[#C9A227] text-[#1C1A17] px-8 py-4 text-xs tracking-[0.3em] uppercase border border-[#C9A227] hover:bg-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-500 mt-4"
            >
              Commission a custom piece
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
