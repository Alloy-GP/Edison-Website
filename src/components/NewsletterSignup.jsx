import React, { useState } from 'react';
import { InteriorButton, InteriorEyebrow } from './interior-components';

/* ============================================================
   NewsletterSignup — the one place on the site that actually posts
   to /api/subscribe (Mailchimp-backed, see src/pages/api/subscribe.ts).

   variant="band"  full-width section, used under every blog post
   variant="card"  compact box, used in the Education hub sidebar
   ============================================================ */

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

function NewsletterSignup({
  variant = 'band',
  eyebrow = 'Edison Board Newsletter',
  title = 'One email a month, written for Florida board members.',
  body = 'New articles, Florida compliance updates, and board education. No sales pitches. Unsubscribe any time.',
  background = 'var(--edison-teal-pale)',
  source = '',
  id
}) {
  const [email, setEmail] = useState('');
  const [hp, setHp] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const [error, setError] = useState('');
  const card = variant === 'card';

  async function submit(ev) {
    ev.preventDefault();
    if (state === 'sending') return;
    const value = email.trim();
    if (!EMAIL_RE.test(value)) { setError('Enter a valid email address.'); setState('error'); return; }
    setState('sending'); setError('');

    const fd = new FormData();
    fd.set('email', value);
    fd.set('website', hp); // honeypot — handler discards if non-empty
    fd.set('source', source || (typeof window !== 'undefined' ? window.location.pathname : ''));

    try {
      const res = await fetch('/api/subscribe', { method: 'POST', body: fd });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error(json.error || 'Could not subscribe. Please try again.');
      setState('done');
      if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        window.gtag('event', 'sign_up', { method: 'newsletter', page_path: window.location.pathname });
      }
    } catch (err) {
      setState('error');
      setError(err.message || 'Could not subscribe. Please try again.');
    }
  }

  const inputStyle = {
    flex: '1 1 220px', minWidth: 0,
    border: `1px solid ${state === 'error' ? '#c0392b' : 'var(--border-strong)'}`,
    outline: 0, padding: card ? '11px 14px' : '14px 16px', borderRadius: 8,
    fontFamily: 'var(--font-body)', fontSize: card ? 14 : 15.5,
    background: '#fff', color: 'var(--edison-navy)'
  };

  const form = state === 'done' ? (
    <p role="status" style={{
      fontFamily: 'var(--font-body)', fontSize: card ? 14 : 16, lineHeight: 1.55,
      color: 'var(--edison-navy)', margin: 0, fontWeight: 600
    }}>
      You're on the list. Watch for the next issue, and check your inbox for a welcome note from Edison.
    </p>
  ) : (
    <form onSubmit={submit} noValidate style={{ margin: 0 }}>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'stretch' }}>
        <label htmlFor={`nl-email-${variant}`} style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
          Email address
        </label>
        <input
          id={`nl-email-${variant}`}
          type="email" name="email" inputMode="email" autoComplete="email"
          placeholder="board@yourcommunity.org"
          value={email}
          onChange={(e) => { setEmail(e.target.value); if (state === 'error') { setState('idle'); setError(''); } }}
          style={inputStyle}
        />
        {/* Honeypot: hidden from people, filled by bots */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" value={hp}
               onChange={(e) => setHp(e.target.value)} aria-hidden="true"
               style={{ position: 'absolute', left: -9999, width: 1, height: 1, opacity: 0 }} />
        <InteriorButton variant="primary" size={card ? 'sm' : 'md'} type="submit">
          {state === 'sending' ? 'Subscribing…' : 'Subscribe'}
        </InteriorButton>
      </div>
      {error && (
        <p role="alert" style={{
          fontFamily: 'var(--font-body)', fontSize: 13, color: '#c0392b', margin: '8px 0 0'
        }}>{error}</p>
      )}
    </form>
  );

  if (card) {
    return (
      <div id={id} style={{ background, borderRadius: 12, padding: 24, position: 'relative' }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 11.5,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--edison-teal-dark)', marginBottom: 12
        }}>{eyebrow}</div>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55,
          color: 'var(--edison-text-body)', margin: '0 0 16px'
        }}>{body}</p>
        {form}
      </div>
    );
  }

  return (
    <section id={id} className="nl-band" style={{ background, padding: '72px 48px', position: 'relative' }}>
      <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
        <InteriorEyebrow>{eyebrow}</InteriorEyebrow>
        <h2 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 30, lineHeight: 1.2, letterSpacing: '-0.01em',
          color: 'var(--edison-navy)', margin: '12px 0 12px'
        }}>{title}</h2>
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 16, lineHeight: 1.6,
          color: 'var(--edison-text-body)', margin: '0 auto 24px', maxWidth: 560
        }}>{body}</p>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'left' }}>{form}</div>
      </div>
    </section>
  );
}

export { NewsletterSignup };
