export default function SectionHead({ eyebrow, headline, intro, center = false, tone = 'dark' }) {
  const light = tone === 'light';
  return (
    <header className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
      <h2
        className={`h-section mt-3 ripple ${center ? 'ripple-center' : ''} ${light ? 'text-white' : 'text-navy'}`}
      >
        {headline}
      </h2>
      {intro ? (
        <p className={`mt-5 text-[1.02rem] leading-relaxed ${light ? 'text-white/70' : 'text-ink/70'}`}>
          {intro}
        </p>
      ) : null}
    </header>
  );
}
