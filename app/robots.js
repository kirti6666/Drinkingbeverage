export const dynamic = 'force-static';

import { getConfig } from '../lib/store';
import { absolute } from '../lib/seo';

export default function robots() {
  const config = getConfig();
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: absolute(config, '/sitemap.xml'),
  };
}
