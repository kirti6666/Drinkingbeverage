/**
 * ORANGE'S AQUA — site content.
 *
 * This one file controls the whole website: every heading, price, phone
 * number, the FSSAI licence, the WhatsApp number and where enquiries are
 * emailed. Edit it, run `npm run build`, and every page updates.
 *
 * There is no admin panel and no database — the site builds to plain HTML.
 */

export const site = {
  brand: {
    name: "Orange's Aqua",
    company: 'Orange Beverage',
    tagline: 'Pure Water, Pure Life',
    /* Leave empty to draw the built-in droplet wordmark. */
    logo: '',
    favicon: '',
  },

  /* ------------------------------------------------------------------
     WHERE ENQUIRIES GO
     The form posts to FormSubmit (formsubmit.co) — free, no account, and it
     works on a static site with no server of its own.

     FIRST-TIME SETUP: after the site is live, send one test enquiry.
     FormSubmit emails `toEmail` a confirmation link. Click it once, and
     every enquiry from then on arrives in that inbox.

     RECOMMENDED once activated: FormSubmit gives you a random code so your
     address is not sitting in the page source for spam bots to scrape.
     Paste it into `formsubmitCode` and rebuild.
     ------------------------------------------------------------------ */
  enquiry: {
    toEmail: 'mail@orangebeverage.com',
    formsubmitCode: '',
    subjectLine: "New enquiry from Orange's Aqua website",
  },

  /* Theme tokens. Change a colour here and the whole site repaints. */
  theme: {
    navy: '#1c3568',
    navyDeep: '#132648',
    orange: '#f47b20',
    orangeDeep: '#d9641a',
    ink: '#0d1a2e',
    mist: '#eef4fb',
    surface: '#ffffff',
    radius: '18',
  },

  seo: {
    /* Your live address. Canonical URLs, the sitemap and the social share
       cards are built from this, so it must match the real domain. */
    siteUrl: 'https://orangebeverage.com',

    title: "Packaged Drinking Water Supplier in Varanasi | Bulk Water Orders — Orange's Aqua",
    description:
      'Buy packaged drinking water in bulk from Orange Beverage, Varanasi. FSSAI certified 200ml, 500ml and 1 litre bottles, RO + UV + Ozonised. Wholesale rates for offices, events, restaurants and distributors. Call 9984324601.',
    keywords:
      'packaged drinking water supplier Varanasi, bulk water bottle order, mineral water wholesale, 1 litre water bottle carton price, 200ml water bottle for events, water bottle distributor Uttar Pradesh, FSSAI packaged drinking water',

    /* Per-page titles. Search engines penalise sites where every page shares
       one title, so each gets its own here. */
    pages: {
      home: {
        title: "Packaged Drinking Water Supplier in Varanasi | Bulk Orders — Orange's Aqua",
        description:
          'FSSAI certified packaged drinking water in 200ml, 500ml and 1 litre packs. Bulk and wholesale supply for offices, events, restaurants and distributors across Varanasi and Uttar Pradesh.',
      },
      products: {
        title: "Water Bottle Sizes & Carton Prices — 200ml, 500ml, 1 Litre | Orange's Aqua",
        description:
          'Compare our 200ml, 500ml and 1 litre packaged drinking water bottles. Carton sizes, MRP and bulk rates for retail, HoReCa and distributor orders in Varanasi.',
      },
      about: {
        title: 'About Orange Beverage — Water Bottling Plant in Varanasi',
        description:
          'Orange Beverage bottles packaged drinking water in Varanasi using RO, UV and ozonisation, with daily in-house laboratory testing. GST and FSSAI registered.',
      },
      contact: {
        title: "Contact Us for Bulk Water Supply in Varanasi | Orange's Aqua",
        description:
          'Request a bulk water quote or distributor rates. Call 9984324601 or send an enquiry — we reply with a rate card the same working day.',
      },
    },

    /* Feeds the LocalBusiness listing behind Google Maps results.
       Fill latitude and longitude from Google Maps for best accuracy. */
    address: {
      street: 'Arazi No. 906, Mauza Parmanandpur, Shivpur',
      city: 'Varanasi',
      region: 'Uttar Pradesh',
      postalCode: '221003',
      latitude: '',
      longitude: '',
    },
    areasServed: ['Varanasi', 'Chandauli', 'Jaunpur', 'Mirzapur', 'Ghazipur', 'Bhadohi', 'Uttar Pradesh'],
    opens: '09:00',
    closes: '19:00',
    priceRange: '₹₹',

    /* Image used when the site is shared on WhatsApp, Facebook or LinkedIn. */
    shareImage: '/uploads/hero-banner.png',

    /* Paste the content value from Google Search Console's HTML tag method. */
    googleVerification: '',
  },

  nav: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    ctaLabel: 'Get Bulk Quote',
    ctaHref: '/contact?intent=quote',
  },

  hero: {
    /* 'split' keeps the banner artwork intact beside the copy.
       'full' stretches it edge-to-edge and lays the copy over a scrim. */
    layout: 'split',
    /* 'contain' shows the whole picture — right for banner artwork that has
       its own logo and text. 'cover' fills the frame and crops. */
    imageFit: 'contain',
    image: '/uploads/hero-banner.png',
    imageMobile: '',
    imageAlt: "Orange's Aqua bottles on a boardroom table",
    eyebrow: 'FSSAI Certified',
    headline: 'Packaged Drinking Water, Supplied in Bulk.',
    subheadline:
      'Orange Beverage bottles 200 ml, 500 ml and 1 litre packaged drinking water — RO, UV and ozonised. Wholesale supply for offices, events, restaurants and distributors.',
    primaryCta: { label: 'Get Bulk Quote', href: '/contact?intent=quote' },
    secondaryCta: { label: 'Enquire Now', href: '/contact' },
    badges: [
      { icon: 'drop', label: '100% Pure & Safe' },
      { icon: 'shield', label: 'RO + UV + Ozonised' },
      { icon: 'certificate', label: 'FSSAI Certified' },
      { icon: 'truck', label: 'Timely Delivery' },
    ],
  },

  intro: {
    show: true,
    eyebrow: 'Who we are',
    headline: 'Purity you can trust, every single drop.',
    body: [
      'Orange Beverage bottles water the way it should be done — in a modern, fully automated plant where the bottle is blown, rinsed, filled and capped without a single hand touching the inside.',
      'Every batch is checked in our in-house laboratory for TDS, pH and microbiological safety before it leaves the line. Nothing ships until it clears.',
    ],
    image: '/uploads/product-family.png',
    imageAlt: "Orange's Aqua 200 ml, 500 ml and 1 litre bottles",
    stats: [
      { value: '3', label: 'Stage purification' },
      { value: '6', label: 'Month shelf life' },
      { value: '100%', label: 'Food-grade PET' },
    ],
  },

  /* Three packs only: 200 ml, 500 ml and 1 litre. */
  products: {
    show: true,
    eyebrow: 'Our range',
    headline: 'Water bottle sizes and carton rates.',
    intro:
      'Retail packs, event packs and bulk cartons — 200 ml, 500 ml and 1 litre, all from the same line, the same water and the same checks.',
    ctaLabel: 'View full product range',
    ctaHref: '/products',
    items: [
      {
        id: 'p200',
        name: '200 ml Mini Bottle',
        volume: '200 ml',
        price: '₹5',
        priceNote: 'MRP per bottle',
        packSize: '48 bottles / carton',
        description: 'Ideal for events, airlines, catering and conference tables where a full bottle goes to waste.',
        image: '/uploads/bottle-200ml.png',
        /* Drawn at this fraction of the card height, so the three packs read
           as a true size comparison. 1 = the tallest bottle. */
        scale: 0.62,
        badge: 'Events',
        ctaLabel: 'Enquire',
        show: true,
      },
      {
        id: 'p500',
        name: '500 ml Standard Bottle',
        volume: '500 ml',
        price: '₹10',
        priceNote: 'MRP per bottle',
        packSize: '24 bottles / carton',
        description: 'The everyday pack. Perfect for offices, retail shelves, travel and daily hydration.',
        image: '/uploads/bottle-500ml.png',
        scale: 0.82,
        badge: 'Best seller',
        ctaLabel: 'Enquire',
        show: true,
      },
      {
        id: 'p1l',
        name: '1 Litre Family Bottle',
        volume: '1 Ltr',
        price: '₹20',
        priceNote: 'MRP per bottle',
        packSize: '12 bottles / carton',
        description: 'Built for restaurants, long journeys and family tables. Sturdy neck, easy grip, tamper-evident cap.',
        image: '/uploads/bottle-1l.png',
        scale: 1,
        badge: 'Family & HoReCa',
        ctaLabel: 'Enquire',
        show: true,
      },
    ],
  },

  why: {
    show: true,
    eyebrow: 'Why choose us',
    headline: 'Four things we refuse to compromise on.',
    items: [
      {
        icon: 'drop',
        title: 'Multi-stage purification',
        body: 'Reverse osmosis, ultraviolet sterilisation and ozonisation — impurities, bacteria and odour removed in sequence.',
      },
      {
        icon: 'leaf',
        title: 'Eco-friendly packaging',
        body: '100% recyclable, food-grade PET bottles. Light to carry, easy to crush, kinder to dispose of.',
      },
      {
        icon: 'lab',
        title: 'Rigorous quality control',
        body: 'Daily laboratory testing for chemical and microbiological safety, with batch records kept for every run.',
      },
      {
        icon: 'truck',
        title: 'Reliable supply chain',
        body: 'A distribution network built for repeat bulk orders — scheduled dispatch, honest lead times, no surprises.',
      },
    ],
  },

  industries: {
    show: true,
    eyebrow: 'Industries we serve',
    headline: 'Wherever people gather, water follows.',
    items: [
      { title: 'Corporate offices & workplaces', body: 'Pantry stock and desk packs on a standing weekly schedule.', image: '' },
      { title: 'Hotels, restaurants & cafés', body: 'Table-ready 500 ml and 1 L bottles for HoReCa service.', image: '' },
      { title: 'Events, exhibitions & weddings', body: 'High-volume 200 ml packs delivered the morning of the event.', image: '' },
      { title: 'Retail distributors & wholesalers', body: 'Carton-rate pricing with territory-wise distributor support.', image: '' },
    ],
  },

  /* FSSAI only — no BIS, no ISO anywhere on the site. */
  certifications: {
    show: true,
    headline: 'Certified, tested, accountable.',
    microcopy: 'Licensed by the Food Safety and Standards Authority of India and tested daily in our own laboratory.',
    fssaiLabel: 'FSSAI Lic. No.',
    fssaiNumber: '12726038000487',
    items: [{ name: 'FSSAI', full: 'Food Safety and Standards Authority of India', logo: '' }],
  },

  testimonials: {
    show: true,
    eyebrow: 'What partners say',
    headline: 'Trusted by the people who order in cartons.',
    items: [
      {
        quote: 'We moved our entire pantry supply across three floors to Orange’s Aqua. Six months in, not one missed delivery.',
        name: 'Rajesh Verma',
        role: 'Admin Head',
        company: 'Northline Business Park',
        logo: '',
      },
      {
        quote: 'The 200 ml packs cleared our conference of half-empty bottles. Guests noticed how crisp the water tasted.',
        name: 'Ananya Sethi',
        role: 'Events Director',
        company: 'Kashi Convention Group',
        logo: '',
      },
      {
        quote: 'Carton rates are honest and the stock reaches on the day they commit. That is all a distributor really wants.',
        name: 'Imran Qureshi',
        role: 'Proprietor',
        company: 'Qureshi Beverages Distribution',
        logo: '',
      },
    ],
  },

  /* Questions people actually type into Google. Answering them plainly is one
     of the few reliable ways to win the box at the top of the results. */
  faq: {
    show: true,
    eyebrow: 'Questions',
    headline: 'Bulk water orders, answered.',
    items: [
      {
        question: 'How do I order packaged drinking water in bulk in Varanasi?',
        answer:
          'Call 9984324601 or send an enquiry through this website with your pack size and monthly quantity. We reply the same working day with carton rates and a delivery schedule. Minimum orders start at a single carton for retail and 50 cartons for distributor pricing.',
      },
      {
        question: 'What sizes of water bottles do you supply?',
        answer:
          'Three packs: 200 ml mini bottles at 48 per carton for events and conferences, 500 ml standard bottles at 24 per carton for offices and retail, and 1 litre family bottles at 12 per carton for restaurants and households.',
      },
      {
        question: 'What is the price of a carton of water bottles?',
        answer:
          'MRP is ₹5 for 200 ml, ₹10 for 500 ml and ₹20 for 1 litre. Carton and wholesale rates depend on order volume and delivery distance, so we quote them per enquiry rather than publishing a single rate.',
      },
      {
        question: 'Is your drinking water FSSAI certified?',
        answer:
          'Yes. Orange Beverage holds FSSAI licence 12726038000487. Every batch is treated by reverse osmosis, ultraviolet sterilisation and ozonisation, then tested in our own laboratory for TDS, pH and microbiological safety before dispatch.',
      },
      {
        question: 'Do you deliver water for weddings and corporate events?',
        answer:
          'Yes. Event supply is one of our main lines. Tell us the date, venue and expected headcount and we deliver on the morning of the event, usually in 200 ml packs which cut down on half-finished bottles.',
      },
      {
        question: 'Which areas do you deliver to?',
        answer:
          'Varanasi and the neighbouring districts, including Chandauli, Jaunpur, Mirzapur, Ghazipur and Bhadohi. For larger distributor orders elsewhere in Uttar Pradesh, get in touch and we will work out logistics.',
      },
      {
        question: 'How long does packaged drinking water stay fresh?',
        answer:
          'Best before six months from the date of manufacture, which is printed on every bottle. Store away from direct sunlight, and do not use a bottle if the cap seal is broken.',
      },
      {
        question: "Can I become a distributor for Orange's Aqua?",
        answer:
          'Yes. We appoint distributors territory by territory. Send a distributor enquiry with your location and monthly capacity, and we will share margins and stocking terms.',
      },
    ],
  },

  footerCta: {
    show: true,
    headline: 'Ready to order pure water for your business or event?',
    subheadline: 'Get in touch today for custom pricing, bulk availability and distributor enquiries.',
    primaryCta: { label: 'Request a quote', href: '/contact?intent=quote' },
    secondaryCta: { label: 'Chat on WhatsApp', href: '' },
  },

  contact: {
    headline: 'Talk to us about your requirement',
    intro: 'Tell us the pack size and monthly volume you need. We reply with a rate card the same working day.',
    phone: '9984324601',
    phoneLabel: 'Customer care',
    email: 'mail@orangebeverage.com',
    website: 'orangebeverage.com',
    /* Country code + number, digits only. Drives every WhatsApp button. */
    whatsapp: '919984324601',
    address: 'Arazi No. 906, Mauza Parmanandpur, Shivpur, Varanasi, Uttar Pradesh 221003',
    /* Paste a Google Maps "Embed a map" iframe here to show a map. */
    mapEmbed: '',
    hours: 'Monday to Saturday, 9:00 AM – 7:00 PM',
    formSubjects: ['Bulk order', 'Distributor enquiry', 'Event supply', 'Retail stocking', 'Something else'],
  },

  about: {
    headline: 'Water is the only product we make.',
    intro:
      'Orange Beverage is a partnership firm bottling packaged drinking water in Varanasi, Uttar Pradesh under the Orange’s Aqua brand.',
    image: '/uploads/product-family.png',
    story: [
      'Our plant treats incoming water through a sequence of sand and carbon filtration, reverse osmosis, ultraviolet sterilisation and ozonisation. Minerals — salts of calcium and magnesium — are added back so the water tastes like water, not like nothing.',
      'Bottles are blown on site from food-grade preforms, rinsed, filled and capped in one enclosed motion. Batch and expiry coding happens inline, so every bottle can be traced back to the hour it was made.',
    ],
    timeline: [
      { year: '2026', title: 'Orange Beverage registered', body: 'Partnership firm constituted in Varanasi with GST registration granted in February.' },
      { year: '2026', title: 'Bottling line commissioned', body: 'Automated RO + UV + ozonisation line begins production of 200 ml, 500 ml and 1 L packs.' },
      { year: 'Today', title: 'Serving offices, events and distributors', body: 'Supplying across Varanasi and neighbouring districts with scheduled bulk dispatch.' },
    ],
    legal: {
      show: true,
      companyName: 'Orange Beverage',
      constitution: 'Partnership',
      gstin: '09AAKFO0715E1ZG',
      fssai: '12726038000487',
      registered: 'Arazi No. 906, Mauza Parmanandpur, Shivpur, Varanasi, Uttar Pradesh 221003',
    },
  },

  footer: {
    blurb:
      'Packaged drinking water supplier in Varanasi. RO, UV and ozonised, bottled by Orange Beverage and delivered in bulk to offices, events, restaurants and distributors across Uttar Pradesh.',
    columns: [
      {
        title: 'Company',
        links: [
          { label: 'About us', href: '/about' },
          { label: 'Products', href: '/products' },
          { label: 'Contact', href: '/contact' },
        ],
      },
      {
        title: 'Products',
        links: [
          { label: '200 ml Mini', href: '/products' },
          { label: '500 ml Standard', href: '/products' },
          { label: '1 Litre Family', href: '/products' },
        ],
      },
    ],
    /* Leave a href empty to hide that social link. */
    social: [
      { label: 'Facebook', href: '' },
      { label: 'Instagram', href: '' },
      { label: 'LinkedIn', href: '' },
    ],
    copyright: 'Orange Beverage. All rights reserved.',
  },

  widgets: {
    whatsappFloat: true,
    whatsappMessage: "Hi, I'd like to know more about Orange's Aqua bulk supply.",
    callFloat: true,
  },
};

export default site;
