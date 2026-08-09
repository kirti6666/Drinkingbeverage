import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Products from '../components/Products';
import WhyUs from '../components/WhyUs';
import Industries from '../components/Industries';
import CertBand from '../components/CertBand';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import FooterCta from '../components/FooterCta';
import JsonLd from '../components/JsonLd';
import { getConfig } from '../lib/store';
import { buildMetadata, faqSchema, productSchema } from '../lib/seo';

export function generateMetadata() {
  return buildMetadata(getConfig(), 'home', { path: '/' });
}

export default function HomePage() {
  const config = getConfig();
  return (
    <>
      <Hero hero={config.hero} />
      <Intro intro={config.intro} />
      <Products products={config.products} />
      <WhyUs why={config.why} />
      <Industries industries={config.industries} />
      <CertBand certifications={config.certifications} />
      <Testimonials testimonials={config.testimonials} />
      <Faq faq={config.faq} />
      <FooterCta footerCta={config.footerCta} contact={config.contact} widgets={config.widgets} />
      <JsonLd
        data={[
          faqSchema(config.faq),
          ...(config.products.items || [])
            .filter((p) => p.show !== false)
            .map((product) => productSchema(config, product)),
        ]}
      />
    </>
  );
}
