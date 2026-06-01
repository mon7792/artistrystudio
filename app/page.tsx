import Image from 'next/image';
import Nav from './components/Nav';
import GallerySection from './components/GallerySection';
import ContactForm from './components/ContactForm';
import { WA, IG } from './lib/constants';

export default function Home() {
  return (
    <>
      {/* ── Nav ── */}
      <Nav />

      {/* ── Hero ── */}
      <section id="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__content">
          <Image src="/logo.png" alt="Aartistry Studio wordmark" width={180} height={60} className="hero__logo" priority />
          <p className="hero__tagline">
            Preserving your <em className="script">moments</em> in resin
          </p>
          <a href={WA} className="btn-gold" target="_blank" rel="noopener noreferrer">
            Commission a Piece
          </a>
        </div>
        <div className="hero__scroll-hint" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Disciplines strip ── */}
      <div className="disciplines-strip" aria-label="Studio disciplines">
        <span className="discipline">Digital Art</span>
        <span className="discipline-sep" aria-hidden="true">◆</span>
        <span className="discipline">Resin Art</span>
        <span className="discipline-sep" aria-hidden="true">◆</span>
        <span className="discipline">Flower Preservation</span>
      </div>

      {/* ── Gallery (client — needs lightbox state) ── */}
      <GallerySection />

      {/* ── Featured Piece ── */}
      <section id="featured" className="featured">
        <div className="featured__inner reveal">
          <div className="featured__image">
            <Image
              src="/products/keepsake-1.png"
              alt="Nikita and Pranav wedding platter — flower preservation with gold calligraphy"
              width={600}
              height={800}
              loading="lazy"
            />
          </div>
          <div className="featured__story">
            <span className="section-label">Featured Piece</span>
            <h2 className="featured__title">Nikita &amp; Pranav</h2>
            <p className="featured__sub">Wedding Platter · Flower Preservation · Gold Calligraphy</p>
            <p>Every couple has a moment worth preserving. For Nikita and Pranav, it was the flowers from their wedding day — now pressed, set in resin, and surrounded by gold-leaf calligraphy that spells their names in the script they chose together.</p>
            <p>The platter took eight days to craft: drying the blooms, composing the layout, pouring in stages to build depth. What arrives is not a souvenir — it is the day itself, made permanent.</p>
            <a href={WA} className="btn-gold" target="_blank" rel="noopener noreferrer">
              Preserve your moment
            </a>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="about">
        <div className="about__inner reveal">
          <div className="about__photo">
            <Image
              src="/bio.png"
              alt="Akshada — Artist and IT Engineer, founder of Aartistry Studio"
              width={260}
              height={260}
              loading="lazy"
            />
          </div>
          <div className="about__text">
            <span className="section-label">About</span>
            <h2>Artist &amp; IT Engineer</h2>
            <p>I&apos;m Akshada — by day I write code, by night (and weekends) I pour resin. The two lives are less separate than they seem: both demand precision, patience, and an obsession with getting the details exactly right.</p>
            <p>Aartistry Studio grew from a simple belief — that the objects around us should carry meaning. I work mostly with couples, families, and collectors who want something that will still matter in twenty years. If you have a moment worth preserving, I&apos;d love to help you keep it.</p>
            <p className="about__handle">
              <a href={IG} target="_blank" rel="noopener noreferrer">@aartistrystudio</a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="process">
        <div className="process__header reveal">
          <span className="section-label">How it works</span>
          <h2>A Commission, Step by Step</h2>
        </div>
        <div className="process__steps">
          {[
            { num: '01', title: 'Share your idea', body: 'Drop a DM on Instagram or WhatsApp — a photo, a feeling, a few words. No brief too rough.' },
            { num: '02', title: 'Design & quote', body: "We'll discuss size, colours, and materials over chat. You'll receive a design direction and a clear quote before anything begins." },
            { num: '03', title: 'Crafting begins', body: 'I pour, layer, and finish your piece by hand. Timeline varies by complexity — typically 1–3 weeks.' },
            { num: '04', title: 'Delivery', body: 'Carefully packed and shipped across India, or collected in person. Progress photos shared along the way.' },
          ].map((step) => (
            <div key={step.num} className="process__step reveal">
              <span className="step__num">{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="contact">
        <div className="contact__inner reveal">
          <span className="section-label">Get in touch</span>
          <h2>Let&apos;s make something together</h2>
          <p className="contact__sub">
            Every commission starts with a conversation. Reach out on WhatsApp — it&apos;s the fastest way to begin.
          </p>

          <div className="contact__ctas">
            <a href={WA} className="btn-gold" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a href={IG} className="btn-outline" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Instagram DM
            </a>
            <a href="mailto:hello@aartistrystudio.com" className="contact__email">
              hello@aartistrystudio.com
            </a>
          </div>

          <ContactForm />

          <blockquote className="testimonial">
            <p>&ldquo;Akshada preserved our wedding flowers in a platter that takes my breath away every time I look at it. Arrived beautifully packed and exceeded every expectation.&rdquo;</p>
            <cite>— A happy client</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <a href="#hero" className="footer__logo" aria-label="Back to top">
          <Image src="/logo.png" alt="Aartistry Studio" width={120} height={36} />
        </a>
        <div className="footer__socials">
          <a href={IG} aria-label="Aartistry Studio on Instagram" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
        <p className="footer__copy">&copy; 2024 Aartistry Studio &middot; All rights reserved</p>
      </footer>
    </>
  );
}
