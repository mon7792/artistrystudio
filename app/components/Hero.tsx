'use client';

import { useReveal } from "../hooks/useReveal";
import { waLink } from "../lib/constants";

export default function Hero() {
  const ref = useReveal();

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#FBF7EE]"
    >
      {/* Liquid blob background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob blob-1"
          style={{ width: "44vw", height: "44vw", top: "-10%", left: "-10%", background: "var(--aqua)" }}
        />
        <div
          className="blob blob-2"
          style={{ width: "38vw", height: "38vw", bottom: "-12%", right: "-8%", background: "var(--ocean)", opacity: 0.22 }}
        />
        <div
          className="blob blob-3"
          style={{ width: "26vw", height: "26vw", top: "30%", right: "20%", background: "var(--gold-bright)", opacity: 0.18 }}
        />
        {/* grain overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-multiply"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="fade-up relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center pt-28 pb-32"
      >
        <p className="text-[11px] md:text-xs tracking-[0.4em] uppercase text-[#4A453E] mb-8">
          Artistry Studio · India
        </p>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] text-[#1C1A17]">
          Preserving your
          <br className="hidden sm:block" />
          <span className="font-script text-[#C9A227] text-7xl sm:text-8xl md:text-[10rem] leading-none align-middle mx-2 md:mx-4 italic">
            moments
          </span>
          <span className="block mt-2">in resin.</span>
        </h1>

        <p className="mt-10 max-w-xl mx-auto text-[15px] md:text-base text-[#4A453E] leading-relaxed font-light">
          Digital art, resin art &amp; flower preservation by Akshada — an
          engineer who became an artist to keep the moments that mattered.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waLink("Hi Akshada! I'd love to commission a piece. Could you share details?")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shimmer commission-btn bg-[#C9A227] text-[#1C1A17] px-8 py-4 text-xs tracking-[0.3em] uppercase border border-[#C9A227] hover:bg-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-500"
          >
            Commission a piece
          </a>
          <a
            href="#work"
            className="text-[#1C1A17] text-xs tracking-[0.3em] uppercase border-b border-[#C9A227]/40 hover:border-[#C9A227] pb-1 transition-colors"
          >
            View the work
          </a>
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#marquee"
        aria-label="Scroll to next section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-[#4A453E]">
          Scroll
        </span>
        <span className="block w-px h-12 bg-gradient-to-b from-[#C9A227] to-transparent" />
      </a>
    </section>
  );
}
