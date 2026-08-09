import Link from 'next/link';
import Icon from './Icon';
import { whatsappLink } from '../lib/enquiry';

export default function FooterCta({ footerCta, contact, widgets }) {
  if (!footerCta?.show) return null;
  const wa = footerCta.secondaryCta?.href || whatsappLink(contact?.whatsapp, widgets?.whatsappMessage);

  return (
    <section className="relative isolate overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(120deg, var(--orange) 0%, var(--orange-deep) 100%)' }}
      />
      <span aria-hidden="true" className="absolute -right-16 -top-16 -z-10 h-64 w-64 rounded-full bg-white/10" />
      <div className="shell py-14 sm:py-16 lg:py-20">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.3fr)_auto]">
          <div>
            <h2 className="font-display text-[1.7rem] font-extrabold leading-tight text-white sm:text-4xl">
              {footerCta.headline}
            </h2>
            <p className="mt-4 max-w-xl text-[1rem] text-white/85">{footerCta.subheadline}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            {footerCta.primaryCta?.label ? (
              <Link
                href={footerCta.primaryCta.href || '/contact'}
                className="btn bg-white text-navy hover:bg-mist"
              >
                {footerCta.primaryCta.label}
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            ) : null}
            {footerCta.secondaryCta?.label && wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                <Icon name="chat" className="h-4 w-4" />
                {footerCta.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
