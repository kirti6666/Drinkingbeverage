import SectionHead from './SectionHead';
import Icon from './Icon';

export default function WhyUs({ why }) {
  if (!why?.show) return null;
  return (
    <section className="section bg-white">
      <div className="shell">
        <SectionHead eyebrow={why.eyebrow} headline={why.headline} center />
        <div className="mt-12 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {(why.items || []).map((item, i) => (
            /* Icon sits beside the heading on narrow screens, where a stacked
               icon wastes a whole line; it moves above at four columns. */
            <div key={i} className="flex gap-4 lg:block">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy text-white lg:h-12 lg:w-12">
                <Icon name={item.icon} className="h-5 w-5 lg:h-6 lg:w-6" />
              </span>
              <div className="min-w-0 lg:mt-5">
                <h3 className="font-display text-lg font-bold leading-snug text-navy">{item.title}</h3>
                <p className="mt-2 text-[0.94rem] leading-relaxed text-ink/70">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
