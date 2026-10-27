// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://floydhomesandland.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Thank-you pages are reached only after a form, so keep them out of search.
      filter: (page) => !page.includes('/thanks/'),
    }),
  ],
});
