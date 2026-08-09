/**
 * Search engine plumbing.
 *
 * Two jobs: build the <head> metadata for each page (title, description,
 * canonical, social cards) and produce the JSON-LD structured data that lets
 * Google understand what the business sells, where it is, and what it charges.
 * Structured data is what makes a result eligible for rich snippets — the
 * star ratings, price ranges and FAQ dropdowns you see under some listings.
 */

export function siteUrl(config) {
  const url = config?.seo?.siteUrl || process.env.SITE_URL || 'https://orangebeverage.com';
  return url.replace(/\/$/, '');
}

export function absolute(config, path = '/') {
  if (!path) return siteUrl(config);
  if (path.startsWith('http')) return path;
  return `${siteUrl(config)}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Page metadata. `page` is one of the keys under config.seo.pages, letting the
 * admin panel set a distinct title and description per page — search engines
 * treat duplicated titles across a site as a quality problem.
 */
export function buildMetadata(config, page, fallback = {}) {
  const seo = config.seo || {};
  const pageSeo = seo.pages?.[page] || {};

  const title = pageSeo.title || fallback.title || seo.title;
  const description = pageSeo.description || fallback.description || seo.description;
  const path = fallback.path || '/';
  const image = absolute(config, seo.shareImage || config.hero?.image || '/uploads/hero-banner.png');

  return {
    metadataBase: new URL(siteUrl(config)),
    title,
    description,
    keywords: pageSeo.keywords || seo.keywords,
    alternates: { canonical: absolute(config, path) },
    openGraph: {
      title,
      description,
      url: absolute(config, path),
      siteName: config.brand?.name,
      locale: 'en_IN',
      type: 'website',
      images: [{ url: image, width: 1200, height: 630, alt: config.brand?.name }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [image] },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
    },
    icons: config.brand?.favicon ? { icon: config.brand.favicon } : undefined,
    other: seo.googleVerification ? { 'google-site-verification': seo.googleVerification } : undefined,
  };
}

/* ------------------------------------------------------------------ *
 * JSON-LD
 * ------------------------------------------------------------------ */

/** The business itself. LocalBusiness is what feeds Google's map pack and the
 *  knowledge panel for "water supplier near me" style searches. */
export function organisationSchema(config) {
  const contact = config.contact || {};
  const legal = config.about?.legal || {};
  const address = config.seo?.address || {};

  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'FoodEstablishment'],
    '@id': `${siteUrl(config)}/#business`,
    name: config.brand?.name,
    legalName: legal.companyName || config.brand?.company,
    description: config.seo?.description,
    url: siteUrl(config),
    telephone: contact.phone ? `+91${String(contact.phone).replace(/\D/g, '').slice(-10)}` : undefined,
    email: contact.email,
    logo: absolute(config, config.brand?.logo || '/uploads/hero-banner.png'),
    image: absolute(config, config.hero?.image || '/uploads/hero-banner.png'),
    priceRange: config.seo?.priceRange || '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street || 'Arazi No. 906, Mauza Parmanandpur, Shivpur',
      addressLocality: address.city || 'Varanasi',
      addressRegion: address.region || 'Uttar Pradesh',
      postalCode: address.postalCode || '221003',
      addressCountry: 'IN',
    },
    geo:
      address.latitude && address.longitude
        ? { '@type': 'GeoCoordinates', latitude: address.latitude, longitude: address.longitude }
        : undefined,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: config.seo?.opens || '09:00',
        closes: config.seo?.closes || '19:00',
      },
    ],
    areaServed: (config.seo?.areasServed || []).map((name) => ({ '@type': 'City', name })),
    sameAs: (config.footer?.social || []).map((s) => s.href).filter(Boolean),
    hasCredential: legal.fssai ? `FSSAI Licence ${legal.fssai}` : undefined,
    vatID: legal.gstin || undefined,
  };
}

/** Each pack, with its price. This is what can surface a price directly in the
 *  search result rather than making someone click through to find it. */
export function productSchema(config, product) {
  const price = String(product.price || '').replace(/[^\d.]/g, '');
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${config.brand?.name} ${product.name}`,
    description: product.description,
    image: absolute(config, product.image || '/uploads/product-family.png'),
    brand: { '@type': 'Brand', name: config.brand?.name },
    category: 'Packaged Drinking Water',
    offers: {
      '@type': 'Offer',
      url: absolute(config, '/products'),
      priceCurrency: 'INR',
      price: price || undefined,
      availability: 'https://schema.org/InStock',
      seller: { '@id': `${siteUrl(config)}/#business` },
    },
  };
}

export function faqSchema(faq) {
  const items = (faq?.items || []).filter((item) => item.question && item.answer);
  if (!items.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function breadcrumbSchema(config, trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      item: absolute(config, entry.path),
    })),
  };
}

export function websiteSchema(config) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: config.brand?.name,
    url: siteUrl(config),
    inLanguage: 'en-IN',
    publisher: { '@id': `${siteUrl(config)}/#business` },
  };
}
