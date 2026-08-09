export default function PageHeader({ eyebrow, headline, intro }) {
  return (
    <section className="relative isolate overflow-hidden bg-navy py-12 sm:py-16 lg:py-20">
      <div
        className="absolute inset-0 -z-10"
        style={{ background: 'linear-gradient(150deg, var(--navy) 0%, var(--navy-deep) 100%)' }}
      />
      <span aria-hidden="true" className="absolute -left-20 bottom-[-60px] -z-10 h-56 w-56 rounded-full bg-white/5" />
      <div className="shell max-w-2xl">
        {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
        <h1 className="mt-3 font-display text-[2rem] font-extrabold leading-[1.1] text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h1>
        {intro ? <p className="mt-5 text-[1.02rem] leading-relaxed text-white/70">{intro}</p> : null}
      </div>
    </section>
  );
}
