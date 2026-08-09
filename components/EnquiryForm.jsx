'use client';

import { useSearchParams } from 'next/navigation';
import { useRef, useState } from 'react';
import Icon from './Icon';
import { enquiryEndpoint, whatsappLink } from '../lib/enquiry';

/**
 * The enquiry form.
 *
 * The site is fully static, so there is no server of our own to post to.
 * Instead the form posts to FormSubmit, which forwards the enquiry to the
 * inbox set in lib/site.config.js. See the README for the one-time
 * activation step.
 *
 * Beside the email button there is a WhatsApp button that opens a chat with
 * the same enquiry already typed out. People who would never fill in a form
 * will happily send a WhatsApp message, and it reaches you instantly.
 */

const field =
  'w-full rounded-xl border border-navy/15 bg-white px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink/35 focus:border-navy focus:outline-none';

const labelText = 'mb-1.5 block text-[13px] font-semibold text-navy';

/** A failed request can return an empty body or an HTML error page. Parsing
 *  that with res.json() throws "Unexpected end of JSON input", which tells the
 *  visitor nothing. This reads the body defensively instead. */
async function readResponse(res) {
  const text = await res.text();
  if (!text) {
    throw new Error(
      res.ok ? 'The server sent an empty response.' : `The server returned an error (${res.status}).`,
    );
  }
  try {
    const data = JSON.parse(text);
    if (!res.ok || data.success === 'false') {
      throw new Error(data.message || `Request failed (${res.status}).`);
    }
    return data;
  } catch (error) {
    if (error instanceof SyntaxError) throw new Error(`Unexpected response from the server (${res.status}).`);
    throw error;
  }
}

/** Turns the filled-in form into a readable WhatsApp message. */
function composeWhatsapp(data, brand) {
  const lines = [
    `Enquiry from the ${brand} website`,
    '',
    data.name && `Name: ${data.name}`,
    data.phone && `Phone: ${data.phone}`,
    data.email && `Email: ${data.email}`,
    data.organisation && `Company: ${data.organisation}`,
    data.subject && `Enquiry type: ${data.subject}`,
    data.product && `Pack size: ${data.product}`,
    data.quantity && `Monthly quantity: ${data.quantity}`,
    data.message && `\n${data.message}`,
  ].filter(Boolean);
  return lines.join('\n');
}

export default function EnquiryForm({ contact, products = [], enquiry, brandName = "Orange's Aqua" }) {
  const params = useSearchParams();
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const productNames = products.filter((p) => p.show !== false).map((p) => p.name);

  /* A visitor who clicked "Enquire" on the 1 litre card should not have to
     pick the pack size again — the card passes it in the URL. */
  const preselected = params.get('product') || '';
  const intent = params.get('intent') === 'quote' ? 'Bulk order' : '';

  function currentValues() {
    if (!formRef.current) return {};
    return Object.fromEntries(new FormData(formRef.current).entries());
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const data = currentValues();

    /* Honeypot: a real person never sees this field, so anything in it is a bot.
       Pretend it worked and drop it on the floor. */
    if (data._honey) {
      setStatus('sent');
      return;
    }

    setStatus('sending');
    setError('');

    try {
      const res = await fetch(enquiryEndpoint(enquiry), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...data,
          _subject: enquiry?.subjectLine || `New enquiry from ${brandName}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      await readResponse(res);
      formRef.current?.reset();
      setStatus('sent');
    } catch (err) {
      setError(
        `${err.message} You can still reach us on WhatsApp or call ${contact?.phone}.`,
      );
      setStatus('idle');
    }
  }

  /* Sends the same enquiry through WhatsApp instead of email. */
  function handleWhatsapp() {
    const data = currentValues();
    if (!data.name || !data.phone) {
      setError('Add your name and phone number first, then send on WhatsApp.');
      return;
    }
    setError('');
    const url = whatsappLink(contact?.whatsapp, composeWhatsapp(data, brandName));
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  }

  if (status === 'sent') {
    return (
      <div className="card p-8 text-center">
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-orange/12 text-orange">
          <Icon name="check" className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-navy">Enquiry received</h3>
        <p className="mt-2 text-[0.95rem] text-ink/70">
          We reply with a rate card the same working day. For anything urgent, call {contact?.phone}.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn btn-outline mt-6">
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="card p-6 sm:p-8">
      {/* Honeypot — hidden from people, irresistible to bots. */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px]"
        aria-hidden="true"
      />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className={labelText}>Name *</span>
          <input name="name" required className={field} placeholder="Your full name" />
        </label>
        <label className="block">
          <span className={labelText}>Phone *</span>
          <input name="phone" required inputMode="tel" className={field} placeholder="10-digit mobile number" />
        </label>
        <label className="block">
          <span className={labelText}>Email</span>
          <input name="email" type="email" className={field} placeholder="you@company.com" />
        </label>
        <label className="block">
          <span className={labelText}>Company or organisation</span>
          <input name="organisation" className={field} placeholder="Optional" />
        </label>
        <label className="block">
          <span className={labelText}>I am enquiring about</span>
          <select name="subject" defaultValue={intent} className={field}>
            <option value="">Choose one</option>
            {(contact?.formSubjects || []).map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
        <label className="block">
          <span className={labelText}>Pack size</span>
          <select name="product" defaultValue={preselected} className={field}>
            <option value="">Any / not sure yet</option>
            {productNames.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className={labelText}>Approximate monthly quantity</span>
          <input name="quantity" className={field} placeholder="e.g. 200 cartons a month" />
        </label>
        <label className="block sm:col-span-2">
          <span className={labelText}>Message</span>
          <textarea
            name="message"
            rows={4}
            className={`${field} resize-y`}
            placeholder="Delivery location, timelines, anything else we should know."
          />
        </label>
      </div>

      {error ? (
        <p className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-[13px] text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary w-full disabled:opacity-60">
          {status === 'sending' ? 'Sending…' : 'Send enquiry'}
        </button>
        {contact?.whatsapp ? (
          <button type="button" onClick={handleWhatsapp} className="btn btn-whatsapp w-full">
            <Icon name="chat" className="h-4 w-4" />
            Send on WhatsApp
          </button>
        ) : null}
      </div>

      <p className="mt-3 text-center text-[12px] text-ink/50">
        We use your details only to answer this enquiry.
      </p>
    </form>
  );
}
