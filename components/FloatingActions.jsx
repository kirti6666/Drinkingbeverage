'use client';

import { useEffect, useState } from 'react';
import Icon from './Icon';
import { whatsappLink } from '../lib/enquiry';

/** Persistent WhatsApp and call buttons. They appear after the first scroll so
 *  they never sit on top of the hero call to action. */
export default function FloatingActions({ contact, widgets }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!widgets?.whatsappFloat && !widgets?.callFloat) return null;
  const wa = whatsappLink(contact?.whatsapp, widgets?.whatsappMessage);

  return (
    <div
      className={`fixed bottom-5 right-4 z-40 flex flex-col gap-3 transition-all duration-300 sm:bottom-7 sm:right-6 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {widgets?.whatsappFloat && wa ? (
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm5.6 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1-.4-.1-1-.3-1.8-.6-3.1-1.3-5.1-4.4-5.3-4.6-.1-.2-1.2-1.6-1.2-3 0-1.4.8-2.1 1-2.4.3-.3.6-.4.8-.4h.6c.2 0 .5-.1.7.5l1 2.4c.1.2.1.4 0 .6l-.4.5-.3.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2 1.3 2.3 1.4.3.2.5.1.6 0l.9-1c.2-.3.4-.2.6-.1l2.2 1c.3.1.5.2.5.4.1.1.1.6-.1 1.3Z" />
          </svg>
        </a>
      ) : null}
      {widgets?.callFloat && contact?.phone ? (
        <a
          href={`tel:${contact.phone}`}
          aria-label="Call us"
          className="grid h-14 w-14 place-items-center rounded-full bg-navy text-white shadow-lg transition-transform hover:scale-105"
        >
          <Icon name="phone" className="h-6 w-6" />
        </a>
      ) : null}
    </div>
  );
}
