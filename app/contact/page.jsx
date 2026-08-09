import { Suspense } from 'react';
import PageHeader from '../../components/PageHeader';
import EnquiryForm from '../../components/EnquiryForm';
import Icon from '../../components/Icon';
import JsonLd from '../../components/JsonLd';
import { getConfig } from '../../lib/store';
import { breadcrumbSchema, buildMetadata } from '../../lib/seo';
import { whatsappLink } from '../../lib/enquiry';

export function generateMetadata() {
  return buildMetadata(getConfig(), 'contact', { path: '/contact' });
}

export default function ContactPage() {
  const config = getConfig();
  const { contact, widgets, enquiry, brand } = config;
  const wa = whatsappLink(contact.whatsapp, widgets?.whatsappMessage);

  return (
    <>
      <PageHeader eyebrow="Contact" headline={contact.headline} intro={contact.intro} />

      <section className="section bg-mist">
        <div className="shell grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:gap-12">
          <div className="space-y-4">
            <ul className="card divide-y divide-navy/10">
              {contact.phone ? (
                <li>
                  <a href={`tel:${contact.phone}`} className="flex items-start gap-4 p-5 hover:bg-mist">
                    <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <span>
                      <span className="block text-[12px] uppercase tracking-wider text-ink/45">
                        {contact.phoneLabel || 'Phone'}
                      </span>
                      <span className="mt-0.5 block font-display text-lg font-bold text-navy">
                        {contact.phone}
                      </span>
                    </span>
                  </a>
                </li>
              ) : null}
              {contact.whatsapp ? (
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 hover:bg-mist"
                  >
                    <Icon name="chat" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <span>
                      <span className="block text-[12px] uppercase tracking-wider text-ink/45">WhatsApp</span>
                      <span className="mt-0.5 block font-semibold text-navy">
                        +{String(contact.whatsapp).replace(/\D/g, '')}
                      </span>
                    </span>
                  </a>
                </li>
              ) : null}
              {contact.email ? (
                <li>
                  <a href={`mailto:${contact.email}`} className="flex items-start gap-4 p-5 hover:bg-mist">
                    <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                    <span className="min-w-0">
                      <span className="block text-[12px] uppercase tracking-wider text-ink/45">Email</span>
                      <span className="mt-0.5 block break-all font-semibold text-navy">{contact.email}</span>
                    </span>
                  </a>
                </li>
              ) : null}
              {contact.address ? (
                <li className="flex items-start gap-4 p-5">
                  <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span>
                    <span className="block text-[12px] uppercase tracking-wider text-ink/45">Plant &amp; office</span>
                    <span className="mt-0.5 block text-[0.95rem] leading-relaxed text-ink/80">
                      {contact.address}
                    </span>
                  </span>
                </li>
              ) : null}
              {contact.hours ? (
                <li className="flex items-start gap-4 p-5">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-orange" />
                  <span>
                    <span className="block text-[12px] uppercase tracking-wider text-ink/45">Open</span>
                    <span className="mt-0.5 block text-[0.95rem] text-ink/80">{contact.hours}</span>
                  </span>
                </li>
              ) : null}
            </ul>

            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp w-full">
                <Icon name="chat" className="h-4 w-4" /> Chat on WhatsApp
              </a>
            ) : null}

            {contact.mapEmbed ? (
              <div
                className="overflow-hidden ring-1 ring-navy/10"
                style={{ borderRadius: 'var(--radius)' }}
                dangerouslySetInnerHTML={{ __html: contact.mapEmbed }}
              />
            ) : null}
          </div>

          {/* useSearchParams needs a Suspense boundary in a statically exported
              app — the query string is only known in the browser. */}
          <Suspense fallback={<div className="card h-96 animate-pulse bg-white" />}>
            <EnquiryForm
              contact={contact}
              products={config.products.items}
              enquiry={enquiry}
              brandName={brand?.name}
            />
          </Suspense>
        </div>
      </section>

      <JsonLd
        data={breadcrumbSchema(config, [
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />
    </>
  );
}
