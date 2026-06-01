'use client';

import { useEffect, useState } from "react";
import { waLink } from "../lib/constants";

const links = [
  { href: "#work", label: "Work" },
  { href: "#featured", label: "Featured" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#FBF7EE]/85 backdrop-blur-md border-b border-[#C9A227]/20"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl md:text-3xl tracking-tight text-[#1C1A17]">
            Artistry
          </span>
          <span className="font-script text-3xl md:text-4xl text-[#C9A227] leading-none -ml-1 translate-y-1">
            studio
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-widest uppercase text-[#4A453E] hover:text-[#1C1A17] transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#C9A227] hover:after:w-full after:transition-all after:duration-500"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink("Hi Akshada! I'd love to place an order.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex gold-shimmer items-center gap-2 border border-[#C9A227] text-[#1C1A17] px-5 py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-[#C9A227] hover:text-[#FBF7EE] transition-colors duration-500"
        >
          DM to order
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-px w-6 bg-[#1C1A17] transition-transform duration-300 ${
              open ? "translate-y-[3px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#1C1A17] transition-transform duration-300 ${
              open ? "-translate-y-[3px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 bg-[#FBF7EE] border-b border-[#C9A227]/20 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.25em] uppercase text-[#1C1A17]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waLink("Hi Akshada! I'd love to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-center border border-[#C9A227] text-[#1C1A17] px-5 py-3 text-xs tracking-[0.25em] uppercase"
          >
            DM to order
          </a>
        </div>
      </div>
    </header>
  );
}
