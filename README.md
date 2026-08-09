# Orange's Aqua — website

Marketing site for Orange Beverage, built with **Next.js 16** (App Router) and Tailwind CSS.
It builds to plain HTML, so it can be hosted anywhere: Vercel, Netlify, Cloudflare Pages,
GitHub Pages, or ordinary shared hosting.

Three packs — 200 ml, 500 ml and 1 litre. FSSAI certified. No admin panel, no database.

---

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

```bash
npm run build    # writes the finished site to ./out
npm start        # previews ./out on http://localhost:3000
```

`npm run build` produces a folder called `out`. That folder *is* the website.

---

## Editing content

Everything is in one file: **`lib/site.config.js`**.

Headings, prices, pack sizes, phone number, WhatsApp number, the FSSAI licence,
the address, the FAQ, testimonials, SEO titles and the colour palette all live there.
Change a value, run `npm run build`, and every page updates.

A few things worth knowing:

| What you want to change | Where |
| --- | --- |
| Prices, carton sizes, product descriptions | `products.items` |
| Phone shown in the header, footer and contact page | `contact.phone` |
| WhatsApp number (country code + number, digits only) | `contact.whatsapp` |
| The message WhatsApp opens with | `widgets.whatsappMessage` |
| FSSAI licence number | `certifications.fssaiNumber` and `about.legal.fssai` |
| Brand colours | `theme` |
| Where enquiries are emailed | `enquiry.toEmail` |

Images live in `public/uploads/`. Replace a file with one of the same name and the
site picks it up — no code change needed.

---

## Enquiries — one-time setup

The site is static, so it has no server of its own to receive form posts.
The form sends to **FormSubmit** (formsubmit.co), which forwards each enquiry to
**kirtigunjan55@gmail.com**. It's free and needs no account.

**You must activate it once, after the site is live:**

1. Open the live site's contact page and send one test enquiry.
2. FormSubmit emails kirtigunjan55@gmail.com asking you to confirm. Click the link in it.
3. That's it. Every enquiry from then on arrives in that inbox.

Until you click that link, submissions are held rather than delivered — so don't skip it.

**Recommended once activated:** FormSubmit gives you a random code that stands in for
your address, so your email isn't sitting in the page source for spam bots to scrape.
Paste it into `enquiry.formsubmitCode` in `lib/site.config.js` and rebuild.

```js
enquiry: {
  toEmail: 'kirtigunjan55@gmail.com',
  formsubmitCode: 'xxxxxxxxxxxxxxxx',   // ← paste it here
}
```

### The WhatsApp button beside it

Every enquiry form has a second button: **Send on WhatsApp**. It takes whatever the
visitor typed into the form and opens a WhatsApp chat to **+91 99843 24601** with the
enquiry already written out — name, phone, pack size, quantity, message. Plenty of
people will never fill in a form but will happily send a WhatsApp, and it reaches you
instantly rather than through an inbox.

WhatsApp also appears as a floating button on every page, on the contact card, and in
the orange call-to-action band.

### If you'd rather use your own mail server

Swap the endpoint in `lib/enquiry.js`. Anything that accepts a JSON `POST` works —
Web3Forms, Formspree, or your own API. The form sends these field names:
`name`, `phone`, `email`, `organisation`, `subject`, `product`, `quantity`, `message`.

---

## Deploying

The build output is the `out` folder. Point any host at it.

**Vercel** — import the repository and press deploy. Settings are detected automatically;
`vercel.json` adds the security headers.

**Netlify / Cloudflare Pages** — build command `npm run build`, publish directory `out`.
`netlify.toml` already says so.

**GitHub Pages** — `.github/workflows/deploy.yml` builds and publishes on every push to
`main`. Enable it under *Settings → Pages → Source → GitHub Actions*.

> If the site is served from a subfolder (like `username.github.io/OrangeFinal/`)
> rather than its own domain, add this to `next.config.mjs`, otherwise the CSS and
> images will 404:
> ```js
> basePath: '/OrangeFinal',
> assetPrefix: '/OrangeFinal',
> ```

**Any normal web host** — run `npm run build` and upload the contents of `out` to
`public_html`. No Node.js needed on the server.

### Before you go live

- Set `seo.siteUrl` in `lib/site.config.js` to the real domain. Canonical URLs, the
  sitemap and social share cards are all built from it.
- Send the test enquiry and click FormSubmit's confirmation link.
- Add the site to Google Search Console and paste the verification string into
  `seo.googleVerification`.
- Optionally paste a Google Maps embed into `contact.mapEmbed` to show a map on the
  contact page.

---

## What's in here

```
app/
  layout.jsx        header, footer, floating buttons, theme tokens, JSON-LD
  page.jsx          home
  products/         all three packs, with size and carton detail
  about/            story, timeline, company and licence details
  contact/          contact card + enquiry form
  icon.png          favicon
  sitemap.js        /sitemap.xml
  robots.js         /robots.txt
components/         Hero, Products, FAQ, EnquiryForm, and the rest
lib/
  site.config.js    ← all content and settings
  enquiry.js        where the form posts, and WhatsApp link building
  seo.js            page metadata and structured data
```

### SEO

Each page has its own title and description, and the site emits structured data:
`LocalBusiness` for map results, `Product` with prices for the three packs, `FAQPage`
for the questions section, and breadcrumbs. Edit the copy in `lib/site.config.js` —
the markup follows automatically.
