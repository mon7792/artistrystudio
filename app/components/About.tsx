'use client';

import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();

  return (
    <section
      id="about"
      className="bg-[#FBF7EE] py-24 md:py-36"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="fade-up max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-10 md:gap-20 items-center"
      >
        <div className="md:col-span-5 order-2 md:order-1 relative">
          <div className="aspect-[5/7] overflow-hidden bg-[#F4ECDB]">
            <img
              src="/studio-portrait.webp"
              alt="Akshada in her studio"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="hidden md:block absolute -top-8 -left-8 w-32 h-32 border border-[#C9A227]/40" />
        </div>

        <div className="md:col-span-7 order-1 md:order-2 space-y-8">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C9A227]">
            About
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-[#1C1A17] leading-[1.1]">
            Engineer by training.
            <br />
            <em className="not-italic font-script text-[#C9A227] text-6xl md:text-7xl">
              Artist
            </em>{" "}
            by instinct.
          </h2>

          <div className="gold-rule w-24" />

          <div className="space-y-5 text-[15px] md:text-base text-[#4A453E] font-light leading-relaxed max-w-xl">
            <p>
              I&apos;m Akshada — I spent years writing code and somewhere along the
              way realised I was happiest with my hands in resin, trying to
              keep things that shouldn&apos;t go away. A wedding bouquet. A first
              love note. The watch my father wore.
            </p>
            <p>
              Artistry Studio is where the two halves meet — the precision of
              engineering and the sentiment of art, fused into objects that
              hold a moment longer than memory can.
            </p>
            <p className="font-display italic text-xl text-[#1C1A17]">
              Everything I make is one-of-one. So is the moment it&apos;s made for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
