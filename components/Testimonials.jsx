import SectionHead from './SectionHead';

export default function Testimonials({ testimonials }) {
  if (!testimonials?.show) return null;
  const items = testimonials.items || [];
  if (!items.length) return null;

  return (
    <section className="section bg-white">
      <div className="shell">
        <SectionHead eyebrow={testimonials.eyebrow} headline={testimonials.headline} />
        {/* Swipeable on phones, an even grid from tablet up. */}
        <div className="rail mt-11 -mx-5 flex snap-x gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
          {items.map((item, i) => (
            <figure
              key={i}
              className="card flex w-[85vw] shrink-0 flex-col p-6 sm:w-auto sm:p-7"
            >
              <span aria-hidden="true" className="font-display text-4xl leading-none text-orange">&ldquo;</span>
              <blockquote className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink/80">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-navy/10 pt-5">
                {item.logo ? (
                  <img src={item.logo} alt="" className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                ) : (
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-mist font-display font-bold text-navy">
                    {item.name?.slice(0, 1)}
                  </span>
                )}
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-navy">{item.name}</span>
                  <span className="block text-[12px] text-ink/55">
                    {[item.role, item.company].filter(Boolean).join(', ')}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
