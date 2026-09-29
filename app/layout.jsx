import './globals.css';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import FloatingActions from '../components/FloatingActions';
import JsonLd from '../components/JsonLd';
import { getConfig } from '../lib/store';
import { toChannels } from '../lib/color';
import { buildMetadata, organisationSchema, websiteSchema } from '../lib/seo';
import Script from 'next/script';

export function generateMetadata() {
  return buildMetadata(getConfig(), 'home', { path: '/' });
}

export const viewport = { width: 'device-width', initialScale: 1, themeColor: '#1c3568' };

export default function RootLayout({ children }) {
  const config = getConfig();
  const { theme } = config;

  /* The palette in lib/site.config.js is written onto CSS custom properties
     here, so changing one hex value there repaints the entire site. */
  const vars = `:root{
    --navy:${theme.navy};
    --navy-deep:${theme.navyDeep};
    --orange:${theme.orange};
    --orange-deep:${theme.orangeDeep};
    --ink:${theme.ink};
    --mist:${theme.mist};
    --surface:${theme.surface};
    --radius:${theme.radius}px;
    --navy-rgb:${toChannels(theme.navy)};
    --navy-deep-rgb:${toChannels(theme.navyDeep)};
    --orange-rgb:${toChannels(theme.orange)};
    --orange-deep-rgb:${toChannels(theme.orangeDeep)};
    --ink-rgb:${toChannels(theme.ink)};
    --mist-rgb:${toChannels(theme.mist)};
    --surface-rgb:${toChannels(theme.surface, '255 255 255')};
  }`;

  return (
    <html lang="en-IN">
      <body>
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-R1F5K5V4PS"
          strategy="afterInteractive"
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-R1F5K5V4PS');
          `}
        </Script>
          
        <style dangerouslySetInnerHTML={{ __html: vars }} />
        {/* Describes the business to search engines on every page. */}
        <JsonLd data={[organisationSchema(config), websiteSchema(config)]} />

        <SiteHeader brand={config.brand} nav={config.nav} contact={config.contact} />
        <main>{children}</main>
        <SiteFooter
          brand={config.brand}
          footer={config.footer}
          contact={config.contact}
          certifications={config.certifications}
          seo={config.seo}
        />
        <FloatingActions contact={config.contact} widgets={config.widgets} />
      </body>
    </html>
  );
}
