import PageHeader from '../../components/PageHeader';
import WhyUs from '../../components/WhyUs';
import CertBand from '../../components/CertBand';
import FooterCta from '../../components/FooterCta';
import { getConfig } from '../../lib/store';
import { breadcrumbSchema, buildMetadata } from '../../lib/seo';
import JsonLd from '../../components/JsonLd';


export function generateMetadata() {
  const config = getConfig();
  return buildMetadata(config, 'about', { path: '/about' });
}

export default function AboutPage() {
  const config = getConfig();
  const { about } = config;

  return (
    <>
      <PageHeader eyebrow="About us" headline={about.headline} intro={about.intro} />

      <section className="section bg-white">
        <div className="shell grid gap-10 lg:grid-cols-2 lg:gap-16">
          {about.image ? (
            <figure
              className="flex items-center justify-center overflow-hidden bg-mist p-5 sm:p-8"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <img
                src={about.image}
                alt=""
                className="max-h-[280px] w-full object-contain sm:max-h-[380px]"
                loading="lazy"
              />
            </figure>
          ) : null}
          <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink/75">
            {(about.story || []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {about.timeline?.length ? (
        <section className="section bg-mist">
          <div className="shell">
            <h2 className="h-section ripple text-navy">How we got here</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-3">
              {about.timeline.map((entry, i) => (
                <li key={i} className="card p-6">
                  <span className="font-display text-sm font-bold uppercase tracking-[0.14em] text-orange">
                    {entry.year}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-navy">{entry.title}</h3>
                  <p className="mt-2 text-[0.94rem] leading-relaxed text-ink/70">{entry.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      <WhyUs why={config.why} />

      {about.legal?.show ? (
        <section className="border-t border-navy/10 bg-white py-12">
          <div className="shell">
            <h2 className="font-display text-lg font-bold text-navy">Company details</h2>
            <dl className="mt-5 grid gap-x-8 gap-y-4 text-[0.94rem] sm:grid-cols-2 lg:grid-cols-3">
              {[
                ['Legal name', about.legal.companyName],
                ['Constitution', about.legal.constitution],
                ['GSTIN', about.legal.gstin],
                ['FSSAI licence', about.legal.fssai],
                ['Registered address', about.legal.registered],
              ]
                .filter(([, value]) => value)
                .map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[12px] font-semibold uppercase tracking-wider text-ink/45">{label}</dt>
                    <dd className="mt-1 text-ink/80">{value}</dd>
                  </div>
                ))}
            </dl>
          </div>
        </section>
      ) : null}

      <CertBand certifications={config.certifications} />
      <FooterCta footerCta={config.footerCta} contact={config.contact} widgets={config.widgets} />
      <JsonLd
        data={breadcrumbSchema(config, [
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />
    </>
  );
}
