import { defineCollection, z } from 'astro:content';

const archivesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    category: z.string(),
    locale: z.enum(['en', 'id']),
    image: z.string().optional(),
  }),
});

export const collections = {
  'archives': archivesCollection,
};
