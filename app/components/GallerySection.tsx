'use client';

import { useState, useEffect } from "react";
import { pillars, type Piece } from "../lib/gallery";
import { useReveal } from "../hooks/useReveal";
import { waLink } from "../lib/constants";

function Lightbox({ piece, onClose }: { piece: Piece | null; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (piece) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [piece, onClose]);

  if (!piece) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-[#FBF7EE]/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-6 right-6 md:top-10 md:right-10 w-10 h-10 flex items-center justify-center text-[#1C1A17] hover:text-[#C9A227] transition-colors"
      >
        <span className="font-display text-3xl leading-none">×</span>
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[90vh] grid md:grid-cols-12 gap-6 md:gap-10 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-8 bg-[#F4ECDB] overflow-hidden">
          <img
            src={piece.img}
            alt={piece.title}
            className="w-full h-full max-h-[80vh] object-cover"
          />
        </div>
        <div className="md:col-span-4 space-y-6">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#C9A227]">
            {piece.category}
          </p>
          <h3 className="font-display text-3xl md:text-4xl font-light text-[#1C1A17] leading-tight">
            {piece.title}
          </h3>
          <div className="gold-rule" />
          <p className="text-sm text-[#4A453E] font-light leading-relaxed">
            A one-of-one piece from the studio. Inquire to commission something
            in the same spirit — sized, coloured, and detailed for your story.
          </p>
          <a
            href={waLink(`Hi Akshada! I love "${piece.title}". Can we discuss something similar?`)}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shimmer inline-block bg-[#1C1A17] text-[#FBF7EE] px-6 py-3 text-xs tracking-[0.3em] uppercase hover:bg-[#C9A227] transition-colors duration-500"
          >
            Commission similar
          </a>
        </div>
      </div>
    </div>
  );
}

function Pillar({
  pillar,
  idx,
  onOpen,
}: {
  pillar: (typeof pillars)[number];
  idx: number;
  onOpen: (p: Piece) => void;
}) {
  const ref = useReveal();
  const spans = [
    "md:col-span-7",
    "md:col-span-5 md:mt-16",
    "md:col-span-5",
    "md:col-span-7 md:mt-12",
  ];

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="fade-up py-16 md:py-24 border-t border-[#1C1A17]/10 first:border-t-0"
    >
      <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end mb-10 md:mb-16">
        <div className="md:col-span-7">
          <p className="text-[11px] tracking-[0.4em] uppercase text-[#C9A227] mb-4">
            {String(idx + 1).padStart(2, "0")} · Series
          </p>
          <h3 className="font-display text-3xl md:text-5xl font-light text-[#1C1A17] leading-tight">
            {pillar.label}
          </h3>
        </div>
        <p className="md:col-span-5 text-[15px] md:text-base text-[#4A453E] leading-relaxed font-light">
          {pillar.blurb}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-12 gap-4 md:gap-8">
        {pillar.pieces.map((p, i) => (
          <button
            key={p.id}
            onClick={() => onOpen(p)}
            className={`gallery-card group relative overflow-hidden bg-[#F4ECDB] block text-left ${spans[i % 4]}`}
          >
            <div className={`relative ${p.aspect} w-full overflow-hidden`}>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="gallery-img absolute inset-0 w-full h-full object-cover"
              />
              <div className="gallery-overlay absolute inset-0 bg-[#082A57]/30 flex items-end p-4 md:p-6">
                <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-[#FBF7EE] border-b border-[#E6C766] pb-1">
                  View piece
                </span>
              </div>
            </div>
            <div className="pt-4 flex items-baseline justify-between gap-4">
              <h4 className="font-display text-lg md:text-xl text-[#1C1A17]">
                {p.title}
              </h4>
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#4A453E] text-right">
                {p.category}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function GallerySection() {
  const [active, setActive] = useState<Piece | null>(null);

  return (
    <section id="work" className="bg-[#FBF7EE] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16 md:mb-24">
          <div className="md:col-span-2">
            <span className="text-[11px] tracking-[0.4em] uppercase text-[#4A453E]">
              Selected
            </span>
          </div>
          <h2 className="md:col-span-7 font-display text-4xl md:text-6xl font-light text-[#1C1A17] leading-[1.1]">
            Three quiet ways
            <br />
            of{" "}
            <em className="text-[#C9A227] not-italic font-script text-6xl md:text-7xl">
              keeping
            </em>{" "}
            a moment.
          </h2>
          <p className="md:col-span-3 text-sm text-[#4A453E] self-end font-light">
            Each piece is one-of-one. Tap any work to inquire — pricing is
            shared over WhatsApp once we understand your story.
          </p>
        </div>

        {pillars.map((p, i) => (
          <Pillar key={p.id} pillar={p} idx={i} onOpen={setActive} />
        ))}
      </div>

      <Lightbox piece={active} onClose={() => setActive(null)} />
    </section>
  );
}
