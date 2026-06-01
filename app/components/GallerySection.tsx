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
        style={{ background: "#000000" }}
        className="fixed top-4 right-4 z-[70] w-14 h-14 flex items-center justify-center rounded-full border-2 border-white/40 text-white shadow-2xl hover:border-[#C9A227] hover:shadow-[0_0_0_3px_#C9A227] active:scale-95 transition-all duration-200"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
          <line x1="3" y1="3" x2="17" y2="17" />
          <line x1="17" y1="3" x2="3" y2="17" />
        </svg>
      </button>

      <div
        className="relative max-w-5xl w-full max-h-[90vh] grid md:grid-cols-12 gap-6 md:gap-10 items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:col-span-8 bg-[#F4ECDB] overflow-hidden rounded-2xl">
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
            href={waLink("Hi Akshada! I'd love to commission a piece. Could you share details?")}
            target="_blank"
            rel="noopener noreferrer"
            className="gold-shimmer commission-btn bg-[#C9A227] text-[#1C1A17] px-8 py-4 text-xs tracking-[0.3em] uppercase border border-[#C9A227] hover:bg-[#1C1A17] hover:border-[#1C1A17] transition-colors duration-500"
          >
            Commission a piece
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
            className={`gallery-card group relative overflow-hidden rounded-2xl bg-[#F4ECDB] block text-left ${spans[i % 4]}`}
          >
            <div className={`relative ${p.aspect} w-full overflow-hidden rounded-2xl`}>
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
            <div className="pt-4 flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-4">
              <h4 className="font-display text-lg md:text-xl text-[#1C1A17]">
                {p.title}
              </h4>
              <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#4A453E] md:text-right">
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
