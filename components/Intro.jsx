import SectionHead from './SectionHead';

export default function Intro({ intro }) {
  if (!intro?.show) return null;
  return (
    <section className="section bg-white">
      <div className="shell grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow={intro.eyebrow} headline={intro.headline} />
          <div className="mt-6 space-y-4 text-[1.02rem] leading-relaxed text-ink/75">
            {(intro.body || []).map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          {intro.stats?.length ? (
            <dl className="mt-9 grid grid-cols-3 gap-3 border-t border-navy/10 pt-7">
              {intro.stats.map((stat, i) => (
                <div key={i}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-extrabold text-orange sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-[12.5px] leading-snug text-ink/60">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>

        {intro.image ? (
          <figure>
            <div
              className="flex items-center justify-center overflow-hidden bg-mist p-5 sm:p-8"
              style={{ borderRadius: 'var(--radius)' }}
            >
              <img
                src={intro.image}
                alt={intro.imageAlt || ''}
                className="max-h-[260px] w-full object-contain sm:max-h-[340px] lg:max-h-[420px]"
                loading="lazy"
              />
            </div>
          </figure>
        ) : null}
      </div>
    </section>
  );
}
