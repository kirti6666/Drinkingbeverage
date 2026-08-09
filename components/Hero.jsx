import Link from 'next/link';
import Icon from './Icon';

function Bubbles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-white/5" />
      <span className="absolute right-[-60px] top-[-40px] h-64 w-64 rounded-full bg-orange/10" />
      <span className="absolute bottom-8 left-1/3 h-24 w-24 rounded-full bg-white/5 animate-drift" />
    </div>
  );
}

function Copy({ hero, align = 'left' }) {
  const centered = align === 'center';
  // Phones read better fully centred; the desktop split layout stays left-aligned.
  const alignText = centered ? 'mx-auto max-w-2xl text-center' : 'text-center lg:text-left';
  const alignRow = centered ? 'sm:justify-center' : 'items-center justify-center lg:items-start lg:justify-start';

  return (
    <div className={alignText}>
      {hero.eyebrow ? (
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white ring-1 ring-white/20">
          <Icon name="certificate" className="h-3.5 w-3.5 text-orange" />
          {hero.eyebrow}
        </span>
      ) : null}

      <h1 className="mt-5 font-display text-[2.15rem] font-extrabold leading-[1.06] text-white sm:text-5xl lg:text-[3.4rem]">
        {hero.headline}
      </h1>

      <div className={`mt-7 flex flex-col gap-3 sm:flex-row ${alignRow}`}>
        {hero.primaryCta?.label ? (
          <Link href={hero.primaryCta.href || '/contact'} className="btn btn-primary">
            {hero.primaryCta.label}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        ) : null}
        {hero.secondaryCta?.label ? (
          <Link href={hero.secondaryCta.href || '/contact'} className="btn btn-ghost">
            {hero.secondaryCta.label}
          </Link>
        ) : null}
      </div>

      <p
        className={`mt-7 max-w-xl text-[1.02rem] leading-relaxed text-white/75 sm:text-lg ${
          centered ? '' : 'mx-auto lg:mx-0'
        }`}
      >
        {hero.subheadline}
      </p>
    </div>
  );
}

export default function Hero({ hero }) {
  const full = hero.layout === 'full';
  const mobileImage = hero.imageMobile || '';

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(150deg, var(--navy) 0%, var(--navy-deep) 62%, #0b1a33 100%)' }}
      />
      {!full ? <Bubbles /> : null}

      {full && hero.image ? (
        <>
          <img
            src={mobileImage || hero.image}
            alt={hero.imageAlt || ''}
            className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-60 sm:hidden"
          />
          <img
            src={hero.image}
            alt={hero.imageAlt || ''}
            className="absolute inset-0 -z-10 hidden h-full w-full object-cover object-[68%_center] opacity-60 sm:block"
          />
          <div
            className="absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(180deg, rgba(19,38,72,.9) 0%, rgba(19,38,72,.72) 45%, rgba(19,38,72,.95) 100%)',
            }}
          />
        </>
      ) : null}

      <div className="shell relative py-12 sm:py-16 lg:py-20">
        {full ? (
          <Copy hero={hero} align="center" />
        ) : (
          <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_1.18fr] lg:gap-14">
            {hero.image ? (
              <figure className="order-1 lg:order-2">
                <div
                  className="overflow-hidden ring-1 ring-white/15 shadow-[0_40px_80px_-40px_rgba(0,0,0,.8)]"
                  style={{ borderRadius: 'var(--radius)' }}
                >
                  {/* A wide banner shrinks to an unreadable strip on a phone, so
                      a portrait crop is used below the small breakpoint. */}
                  {mobileImage ? (
                    <img
                      src={mobileImage}
                      alt={hero.imageAlt || ''}
                      className="block h-[300px] w-full object-cover object-center sm:hidden"
                      fetchPriority="high"
                    />
                  ) : null}
                  <img
                    src={hero.image}
                    alt={hero.imageAlt || ''}
                    className={`${mobileImage ? 'hidden sm:block' : 'block'} ${
                      hero.imageFit === 'cover'
                        ? 'h-[210px] w-full object-cover object-[64%_center] sm:h-[300px] lg:h-[420px] lg:object-center'
                        : 'h-auto w-full object-contain'
                    }`}
                    fetchPriority="high"
                  />
                </div>
              </figure>
            ) : null}
            <div className="order-2 lg:order-1">
              <Copy hero={hero} />
            </div>
          </div>
        )}
      </div>

      {hero.badges?.length ? (
        <div className="relative border-t border-white/10 bg-white/[0.04]">
          <div className="shell grid grid-cols-2 gap-x-4 gap-y-5 py-6 sm:py-7 lg:grid-cols-4">
            {hero.badges.map((badge, i) => (
              <div key={`${badge.label}-${i}`} className="flex items-center justify-center gap-3 lg:justify-start">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-orange/15 text-orange">
                  <Icon name={badge.icon} className="h-[18px] w-[18px]" />
                </span>
                <span className="text-[13px] font-semibold leading-tight text-white/90 sm:text-sm">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
