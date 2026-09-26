import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Update `site` once the real domain is known — it only affects sitemap/canonical URLs.
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: { prefixDefaultLocale: true },
  },
  redirects: {
    '/': '/en/',
  },
  integrations: [sitemap()],
});
