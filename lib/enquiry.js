/**
 * Enquiry delivery and WhatsApp links.
 *
 * The site is a static export, so there is no server of ours to receive the
 * form. FormSubmit acts as the postman: it accepts the submission and
 * forwards it to the inbox configured in lib/site.config.js.
 *
 * Two ways to address it:
 *   1. Plain email — works immediately, but the address sits in the page
 *      source where scrapers can find it.
 *   2. A random code FormSubmit issues after activation — same behaviour,
 *      address hidden. Prefer this once the site is live.
 */

const FORMSUBMIT = 'https://formsubmit.co/ajax/';

export function enquiryEndpoint(enquiry) {
  const code = (enquiry?.formsubmitCode || '').trim();
  const email = (enquiry?.toEmail || '').trim();
  return `${FORMSUBMIT}${code || email}`;
}

/** Builds a wa.me link with the message already typed out.
 *  `number` is country code + number, digits only, e.g. 919984324601. */
export function whatsappLink(number, message = '') {
  const digits = String(number || '').replace(/\D/g, '');
  if (!digits) return '';
  const text = message ? `?text=${encodeURIComponent(message)}` : '';
  return `https://wa.me/${digits}${text}`;
}
