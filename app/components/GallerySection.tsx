'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { WA } from '../lib/constants';

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface Pillar {
  num: string;
  title: string;
  desc: string;
  items: GalleryItem[];
}

const pillars: Pillar[] = [
  {
    num: '01',
    title: 'Abstract & Ocean Wall Art',
    desc: 'Fine-art resin canvases with fluid rivers of colour — made for spaces that deserve a story.',
    items: [
      { src: '/products/abstract-1.png', alt: 'Teal river abstract resin canvas with fluid colour', caption: 'Teal River · Abstract Resin Canvas' },
      { src: '/products/abstract-2.jpg', alt: 'Ocean series abstract resin artwork', caption: 'Ocean Series · Abstract Resin' },
      { src: '/products/abstract-3.jpg', alt: 'Deep blue resin canvas wall art', caption: 'Deep Blue · Resin Canvas' },
    ],
  },
  {
    num: '02',
    title: 'Keepsakes & Flower Preservation',
    desc: 'Wedding platters, pressed-flower pieces, and occasion gifts — made to outlast the moment.',
    items: [
      { src: '/products/keepsake-1.png', alt: 'Personalised wedding platter with gold calligraphy and preserved flowers', caption: 'Nikita ❤ Pranav · Wedding Platter' },
      { src: '/products/keepsake-2.jpg', alt: 'Pressed flowers preserved in resin', caption: 'Floral Preserve · Pressed Flowers in Resin' },
      { src: '/products/keepsake-3.jpg', alt: 'Anniversary flower preservation gift', caption: 'Anniversary Gift · Flower Preservation' },
    ],
  },
  {
    num: '03',
    title: 'Custom & Themed Commissions',
    desc: 'Embedded objects, fan art, luxury themes — no brief too bold.',
    items: [
      { src: '/products/custom-1.png', alt: 'Porsche themed custom resin art commission', caption: 'Porsche Edition · Custom Resin Piece' },
      { src: '/products/custom-2.jpg', alt: 'Custom fan series themed resin commission', caption: 'Fan Series · Custom Themed Resin' },
      { src: '/products/custom-3.jpg', alt: 'Luxury themed bespoke resin commission', caption: 'Luxury Theme · Bespoke Commission' },
    ],
  },
];

interface LightboxState {
  src: string;
  alt: string;
  caption: string;
}

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback((item: LightboxState) => {
    setLightbox(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && lightboxOpen) closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox]);

  // Scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -48px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section id="work" className="gallery" aria-label="Work gallery">
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {['Abstract Wall Art', 'Keepsakes & Preservation', 'Custom Commissions', 'Flower Preservation', 'Ocean Resin Art', 'Wedding Keepsakes'].map((t, i) => (
              <span key={i}>{t}<span className="marquee-sep"> · </span></span>
            ))}
            {['Abstract Wall Art', 'Keepsakes & Preservation', 'Custom Commissions', 'Flower Preservation', 'Ocean Resin Art', 'Wedding Keepsakes'].map((t, i) => (
              <span key={`b${i}`}>{t}<span className="marquee-sep"> · </span></span>
            ))}
          </div>
        </div>

        {pillars.map((pillar) => (
          <div key={pillar.num} className="gallery__pillar reveal">
            <div className="pillar__header">
              <span className="pillar__label">{pillar.num}</span>
              <h2 className="pillar__title">{pillar.title}</h2>
              <p className="pillar__desc">{pillar.desc}</p>
            </div>
            <div className="pillar__grid">
              {pillar.items.map((item) => (
                <button
                  key={item.src}
                  className="gallery-item"
                  onClick={() => openLightbox(item)}
                  aria-label={`View: ${item.caption}`}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay" aria-hidden="true">
                    <span>View</span>
                  </div>
                </button>
              ))}
            </div>
            <a
              href={WA}
              className="pillar__cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Commission something like this →
            </a>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      <div
        className={`lightbox${lightboxOpen ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Image viewer"
        onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
      >
        <button className="lightbox__close" onClick={closeLightbox} aria-label="Close image viewer">
          &times;
        </button>
        {lightbox && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={lightbox.src} alt={lightbox.alt} className="lightbox__img" />
        )}
        {lightbox && (
          <p className="lightbox__caption">{lightbox.caption}</p>
        )}
      </div>
    </>
  );
}
