import Link from 'next/link';
import BottleArt from './BottleArt';
import Icon from './Icon';

const fillFor = (volume = '') => {
  const v = volume.toLowerCase();
  if (v.includes('200') || v.includes('250')) return 0.34;
  if (v.includes('500')) return 0.58;
  return 0.82;
};

export default function ProductCard({ product, detailed = false }) {
  const href = `/contact?product=${encodeURIComponent(product.name)}&intent=quote`;
  return (
    <article className="card group flex flex-col transition-shadow duration-300 hover:shadow-[0_28px_60px_-40px_rgba(13,26,46,.65)]">
      <div className="flex h-[280px] flex-col items-start bg-mist p-5 sm:h-[320px]">
        {product.badge ? (
          <span className="max-w-full truncate rounded-full bg-navy px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            {product.badge}
          </span>
        ) : null}
        {/* Bottles sit on a shared baseline and are drawn at their true
            relative heights, so the three cards read as a size comparison
            rather than three identical bottles. */}
        <div className="flex min-h-0 w-full flex-1 items-end justify-center pt-3">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              style={{ height: `${Math.round((product.scale ?? 1) * 100)}%` }}
              className="w-auto max-w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.04]"
              loading="lazy"
            />
          ) : (
            <div className="h-full transition-transform duration-500 group-hover:scale-[1.04]">
              <BottleArt fill={fillFor(product.volume || product.name)} label={product.name} />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3 sm:min-h-[3.4rem]">
          <h3 className="font-display text-xl font-bold text-navy">{product.name}</h3>
          {product.price ? (
            <span className="whitespace-nowrap text-right">
              <span className="block font-display text-lg font-extrabold text-orange">{product.price}</span>
              {product.priceNote ? (
                <span className="block text-[11px] text-ink/50">{product.priceNote}</span>
              ) : null}
            </span>
          ) : null}
        </div>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">{product.description}</p>

        {detailed && product.packSize ? (
          <ul className="mt-5 space-y-2 border-t border-navy/10 pt-5 text-[0.9rem] text-ink/70">
            <li className="flex items-center gap-2">
              <Icon name="check" className="h-4 w-4 text-orange" />
              {product.packSize}
            </li>
            {product.volume ? (
              <li className="flex items-center gap-2">
                <Icon name="check" className="h-4 w-4 text-orange" />
                Net volume {product.volume}
              </li>
            ) : null}
          </ul>
        ) : product.packSize ? (
          <p className="mt-4 text-[13px] font-medium text-ink/55">{product.packSize}</p>
        ) : null}

        {/* mt-auto keeps the buttons on one line across cards even when the
            titles and descriptions run to different lengths. */}
        <div className="mt-auto pt-6">
          <Link href={href} className="btn btn-outline w-full">
            {product.ctaLabel || 'Enquire'}
          </Link>
        </div>
      </div>
    </article>
  );
}
