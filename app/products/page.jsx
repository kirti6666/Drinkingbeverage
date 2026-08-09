import ProductCard from '../../components/ProductCard';
import CertBand from '../../components/CertBand';
import FooterCta from '../../components/FooterCta';
import PageHeader from '../../components/PageHeader';
import JsonLd from '../../components/JsonLd';
import { getConfig } from '../../lib/store';
import { breadcrumbSchema, buildMetadata, productSchema } from '../../lib/seo';

export function generateMetadata() {
  return buildMetadata(getConfig(), 'products', { path: '/products' });
}

export default function ProductsPage() {
  const config = getConfig();
  const items = (config.products.items || []).filter((p) => p.show !== false);

  return (
    <>
      <PageHeader
        eyebrow={config.products.eyebrow}
        headline="Every pack, every price, in one place."
        intro={config.products.intro}
      />
      <section className="section bg-white">
        <div className="shell grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((product, i) => (
            <ProductCard key={product.id || i} product={product} detailed />
          ))}
        </div>
        <div className="shell mt-12">
          <div className="rounded-brand bg-mist p-6 text-[0.94rem] leading-relaxed text-ink/70 sm:p-8">
            <h2 className="font-display text-lg font-bold text-navy">What is inside every bottle</h2>
            <p className="mt-3">
              Treated water with added minerals — salts of calcium and magnesium — processed through reverse
              osmosis, ultraviolet sterilisation and ozonisation. Best before six months from the date of
              manufacture. Keep the container away from direct sunlight, and do not buy if the seal is broken.
            </p>
          </div>
        </div>
      </section>
      <CertBand certifications={config.certifications} />
      <FooterCta footerCta={config.footerCta} contact={config.contact} widgets={config.widgets} />
      <JsonLd
        data={[
          breadcrumbSchema(config, [
            { name: 'Home', path: '/' },
            { name: 'Products', path: '/products' },
          ]),
          ...items.map((product) => productSchema(config, product)),
        ]}
      />
    </>
  );
}
