// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://floydhomesandland.com',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      // Thank-you pages are reached only after a form, and campaign pages (/offer/) are
      // for people holding a mailer, so keep both out of search.
      filter: (page) => !page.includes('/thanks/') && !page.includes('/offer/'),
    }),
  ],
});
