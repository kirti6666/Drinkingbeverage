import SectionHead from './SectionHead';
import Icon from './Icon';

const fallbackIcons = ['building', 'cup', 'calendar', 'store'];

export default function Industries({ industries }) {
  if (!industries?.show) return null;
  return (
    <section className="section bg-navy-deep">
      <div className="shell">
        <SectionHead eyebrow={industries.eyebrow} headline={industries.headline} tone="light" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {(industries.items || []).map((item, i) => (
            <article
              key={i}
              className="group relative isolate overflow-hidden p-6 ring-1 ring-white/10 sm:p-7"
              style={{ borderRadius: 'var(--radius)' }}
            >
              {item.image ? (
                <>
                  <img
                    src={item.image}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/50" />
                </>
              ) : (
                <span className="absolute inset-0 -z-10 bg-white/[0.05]" />
              )}
              <Icon name={fallbackIcons[i % 4]} className="h-7 w-7 text-orange" />
              <h3 className="mt-5 font-display text-lg font-bold text-white sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-[0.94rem] leading-relaxed text-white/65">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
