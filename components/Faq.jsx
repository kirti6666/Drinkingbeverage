import SectionHead from './SectionHead';

/**
 * Plain question-and-answer copy, marked up as a FAQPage in JSON-LD. This is
 * the section most likely to win a featured snippet for searches phrased as
 * questions — "how to order water bottles in bulk", and the like.
 *
 * Uses <details> so the answers are in the HTML from the first byte: content
 * hidden behind JavaScript is content search engines may not credit.
 */
export default function Faq({ faq }) {
  if (!faq?.show) return null;
  const items = (faq.items || []).filter((item) => item.question && item.answer);
  if (!items.length) return null;

  return (
    <section className="section bg-mist">
      <div className="shell max-w-3xl">
        <SectionHead eyebrow={faq.eyebrow} headline={faq.headline} center />
        <div className="mt-11 space-y-3">
          {items.map((item, i) => (
            <details key={i} className="card group px-5 py-4 sm:px-6" name="faq">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-[1.02rem] font-bold text-navy marker:hidden">
                <h3 className="text-[1.02rem] font-bold">{item.question}</h3>
                <span
                  aria-hidden="true"
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-mist text-orange transition-transform duration-300 group-open:rotate-45"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
