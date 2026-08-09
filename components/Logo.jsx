/**
 * Wordmark. If a logo image has been uploaded in the admin panel we show that;
 * otherwise we draw the droplet-and-ripple mark so the header is never empty.
 */
export default function Logo({ brand, tone = 'navy', className = '' }) {
  const text = tone === 'light' ? '#ffffff' : 'var(--navy)';

  if (brand?.logo) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        className={`h-10 w-auto object-contain sm:h-11 ${className}`}
      />
    );
  }

  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 44 44" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" aria-hidden="true">
        <circle cx="22" cy="22" r="20" fill="none" stroke="var(--orange)" strokeWidth="4" />
        <path
          d="M22 8c0 0 8 9.4 8 14.6a8 8 0 0 1-16 0C14 17.4 22 8 22 8Z"
          fill={tone === 'light' ? '#ffffff' : 'var(--navy)'}
        />
        <circle cx="19.5" cy="21" r="2.4" fill={tone === 'light' ? 'var(--navy)' : '#ffffff'} />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display text-[1.15rem] font-extrabold tracking-tight xs:text-[1.35rem] sm:text-[1.5rem]"
          style={{ color: text }}
        >
          {brand?.name || "Orange's Aqua"}
        </span>
        <span
          className="mt-0.5 block text-[8.5px] font-semibold uppercase tracking-[0.2em] sm:text-[9.5px] sm:tracking-[0.22em]"
          style={{ color: tone === 'light' ? 'rgba(255,255,255,.7)' : 'var(--orange)' }}
        >
          {brand?.tagline || 'Pure Water, Pure Life'}
        </span>
      </span>
    </span>
  );
}
