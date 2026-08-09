export const dynamic = 'force-static';

import { getConfig } from '../lib/store';
import { absolute } from '../lib/seo';

export default function sitemap() {
  const config = getConfig();
  const now = new Date();
  return [
    { url: absolute(config, '/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absolute(config, '/products'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: absolute(config, '/about'), lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: absolute(config, '/contact'), lastModified: now, changeFrequency: 'yearly', priority: 0.8 },
  ];
}
