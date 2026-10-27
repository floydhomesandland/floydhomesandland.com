// Content Dustin can edit: one Markdown file per item, images beside it.
// See src/content/README.md for how to add one.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const properties = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/properties' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.enum(['For sale', 'Under contract', 'Sold', 'Coming soon']),
      market: z.enum(['SEVA', 'NENC', 'OBX']),
      location: z.string(),
      type: z.enum(['Home', 'Land', 'Home with land', 'Commercial']),
      price: z.string().optional(),
      acres: z.number().optional(),
      beds: z.number().optional(),
      baths: z.number().optional(),
      listingUrl: z.url().optional(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string() })).default([]),
      order: z.number().default(0),
    }),
});

const developments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/developments' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      status: z.enum(['Planning', 'Approvals', 'Under construction', 'Complete']),
      location: z.string(),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
      order: z.number().default(0),
    }),
});

const housePlans = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/house-plans' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      footprint: z.string().optional(),
      beds: z.number().optional(),
      baths: z.number().optional(),
      sqft: z.number().optional(),
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      gallery: z.array(z.object({ src: image(), alt: z.string(), caption: z.string().optional() })).default([]),
      order: z.number().default(0),
    }),
});

const memos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/memos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
  }),
});

export const collections = { properties, developments, housePlans, memos };
