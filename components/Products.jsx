import Link from 'next/link';
import SectionHead from './SectionHead';
import ProductCard from './ProductCard';
import Icon from './Icon';

export default function Products({ products }) {
  if (!products?.show) return null;
  const items = (products.items || []).filter((p) => p.show !== false);
  if (!items.length) return null;

  return (
    <section id="products" className="section bg-mist">
      <div className="shell">
        <SectionHead
          eyebrow={products.eyebrow}
          headline={products.headline}
          intro={products.intro}
          center
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => (
            <ProductCard key={product.id || i} product={product} />
          ))}
        </div>
        {products.ctaLabel ? (
          <div className="mt-10 text-center">
            <Link href={products.ctaHref || '/products'} className="btn btn-outline">
              {products.ctaLabel}
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
