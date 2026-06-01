'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { WA } from '../lib/constants';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef<Element | null>(null);

  useEffect(() => {
    heroRef.current = document.getElementById('hero');
    if (!heroRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) closeMenu();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''} role="navigation" aria-label="Main navigation">
      <a href="#hero" className="nav__logo">
        <Image src="/logo.png" alt="Aartistry Studio" width={120} height={40} />
      </a>

      <button
        className="nav__hamburger"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        aria-controls="nav-menu"
        onClick={toggleMenu}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav__menu${menuOpen ? ' open' : ''}`} id="nav-menu" role="list">
        {(['Work', 'About', 'Process', 'Contact'] as const).map((label) => (
          <a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="nav__link"
            role="listitem"
            onClick={closeMenu}
          >
            {label}
          </a>
        ))}
        <a
          href={WA}
          className="btn-gold nav__cta"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          DM to Order
        </a>
      </div>
    </nav>
  );
}
