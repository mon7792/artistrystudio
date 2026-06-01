'use client';

import { useState } from "react";
import { CONTACT, waLink, igLink } from "../lib/constants";
import { useReveal } from "../hooks/useReveal";

export default function ContactForm() {
  const ref = useReveal();
  const [name, setName] = useState("");
  const [idea, setIdea] = useState("");

  const composedMsg = () =>
    `Hi Akshada! I'm ${name || "(your name)"}. I'd love to discuss: ${
      idea || "(your idea / occasion / piece)"
    }`;

  return (
    <section
      id="contact"
      className="bg-[#1C1A17] text-[#FBF7EE] py-24 md:py-36 relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="blob"
          style={{ width: "40vw", height: "40vw", top: "-15%", right: "-10%", background: "var(--ocean)", opacity: 0.35 }}
        />
        <div
          className="blob"
          style={{ width: "30vw", height: "30vw", bottom: "-15%", left: "-5%", background: "var(--gold)", opacity: 0.18 }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="fade-up relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center"
      >
        <p className="text-[11px] tracking-[0.4em] uppercase text-[#E6C766] mb-8">
          Contact
        </p>
        <h2 className="font-display text-5xl md:text-7xl font-light leading-[1.05]">
          Let&apos;s create something
          <br />
          <em className="not-italic font-script text-[#E6C766] text-7xl md:text-8xl">
            timeless.
          </em>
        </h2>

        <p className="mt-8 max-w-xl mx-auto text-base text-[#FBF7EE]/80 font-light leading-relaxed">
          The fastest way to a piece is a WhatsApp message — share a photo,
          a moment, a date. I&apos;ll take it from there.
        </p>

        <div className="mt-12 max-w-2xl mx-auto grid sm:grid-cols-2 gap-4 text-left">
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#FBF7EE]/60">
              Your name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Akshada Thombre"
              className="mt-2 w-full bg-transparent border-b border-[#FBF7EE]/30 focus:border-[#E6C766] outline-none py-2 text-[#FBF7EE] placeholder:text-[#FBF7EE]/30 font-light transition-colors"
            />
          </label>
          <label className="block">
            <span className="text-[10px] tracking-[0.3em] uppercase text-[#FBF7EE]/60">
              What you&apos;d like
            </span>
            <input
              type="text"
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Wedding flower preservation"
              className="mt-2 w-full bg-transparent border-b border-[#FBF7EE]/30 focus:border-[#E6C766] outline-none py-2 text-[#FBF7EE] placeholder:text-[#FBF7EE]/30 font-light transition-colors"
            />
          </label>
        </div>

        <a
          href={waLink(composedMsg())}
          target="_blank"
          rel="noopener noreferrer"
          className="gold-shimmer mt-12 inline-flex items-center gap-3 bg-[#C9A227] text-[#1C1A17] px-10 py-5 text-sm tracking-[0.3em] uppercase hover:bg-[#E6C766] transition-colors duration-500"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.83 11.83 0 013.48 8.414c-.003 6.554-5.338 11.89-11.893 11.89a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.299-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.207-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          WhatsApp Akshada
        </a>

        <div className="mt-10 flex flex-col sm:flex-row gap-6 sm:gap-12 items-center justify-center text-sm">
          <a
            href={igLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FBF7EE] hover:text-[#E6C766] transition-colors border-b border-[#E6C766]/30 hover:border-[#E6C766] pb-1 tracking-[0.2em] uppercase text-xs"
          >
            Instagram · @{CONTACT.instagramHandle}
          </a>
        </div>
      </div>
    </section>
  );
}
