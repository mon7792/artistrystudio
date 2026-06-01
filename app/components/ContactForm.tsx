'use client';

import { FormEvent } from 'react';
import { WA } from '../lib/constants';

export default function ContactForm() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = ((form.elements.namedItem('name') as HTMLInputElement)?.value || '').trim();
    const idea = ((form.elements.namedItem('idea') as HTMLTextAreaElement)?.value || '').trim();
    const contact = ((form.elements.namedItem('contact') as HTMLInputElement)?.value || '').trim();

    const parts = ['Hi! I came across Aartistry Studio and would love to discuss a commission.'];
    if (name) parts.push(`Name: ${name}`);
    if (idea) parts.push(`Idea: ${idea}`);
    if (contact) parts.push(`My contact: ${contact}`);

    const message = parts.join('\n');
    window.open(
      `${WA}?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit} noValidate>
      <div className="form__group">
        <label htmlFor="f-name">Your name</label>
        <input type="text" id="f-name" name="name" placeholder="Your name" autoComplete="given-name" required />
      </div>
      <div className="form__group">
        <label htmlFor="f-idea">What would you like?</label>
        <textarea id="f-idea" name="idea" rows={3} placeholder="A pressed-flower piece from our wedding bouquet…" required />
      </div>
      <div className="form__group">
        <label htmlFor="f-contact">Your WhatsApp / contact number</label>
        <input type="tel" id="f-contact" name="contact" placeholder="+91 98765 43210" autoComplete="tel" />
      </div>
      <button type="submit" className="btn-gold">Send via WhatsApp</button>
      <p className="form__note">Opens a pre-filled WhatsApp message — no backend, no sign-up.</p>
    </form>
  );
}
