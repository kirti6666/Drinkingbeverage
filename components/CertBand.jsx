import Icon from './Icon';

export default function CertBand({ certifications }) {
  if (!certifications?.show) return null;
  return (
    <section className="border-y border-navy/10 bg-mist py-12 sm:py-14">
      <div className="shell">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          <div>
            <h2 className="font-display text-xl font-bold text-navy sm:text-2xl">
              {certifications.headline}
            </h2>
            <p className="mt-2 max-w-lg text-[0.94rem] text-ink/65">{certifications.microcopy}</p>
            {certifications.fssaiNumber ? (
              <p className="mt-4 inline-flex flex-wrap items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-navy ring-1 ring-navy/10">
                <Icon name="certificate" className="h-4 w-4 text-orange" />
                {certifications.fssaiLabel} {certifications.fssaiNumber}
              </p>
            ) : null}
          </div>

          <ul className="flex flex-wrap items-center gap-3 sm:gap-4">
            {(certifications.items || []).map((item, i) => (
              <li
                key={i}
                className="flex min-w-[136px] flex-1 items-center gap-3 rounded-2xl bg-white px-4 py-3 ring-1 ring-navy/10 sm:flex-none"
              >
                {item.logo ? (
                  <img src={item.logo} alt={item.name} className="h-9 w-9 object-contain" loading="lazy" />
                ) : (
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy text-[9px] font-bold tracking-tight text-white">
                    {item.name}
                  </span>
                )}
                <span className="leading-tight">
                  <span className="block font-display text-sm font-bold text-navy">{item.name}</span>
                  <span className="block text-[11px] text-ink/55">{item.full}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
