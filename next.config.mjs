/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Builds the whole site to plain HTML in ./out — no Node server needed.
     Deploy that folder to Vercel, Netlify, Cloudflare Pages, GitHub Pages or
     any ordinary web host. */
  output: 'export',

  /* Required for `output: 'export'`: no on-the-fly image optimisation. */
  images: { unoptimized: true },

  /* Emits /about/index.html rather than /about.html, which every static host
     serves correctly without extra rewrite rules. */
  trailingSlash: true,

  poweredByHeader: false,
};

export default nextConfig;
