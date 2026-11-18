import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const media = z.discriminatedUnion('kind', [
  z.object({ kind: z.literal('image'), src: z.string(), alt: z.string(), width: z.number().optional(), height: z.number().optional() }),
  z.object({ kind: z.literal('video'), src: z.string(), mp4: z.string().optional(), poster: z.string().optional(), alt: z.string() }),
  z.object({ kind: z.literal('placeholder'), caption: z.string().optional() }),
  // A PDF shown as page previews plus a button that opens the full file.
  z.object({
    kind: z.literal('document'),
    pdf: z.string(),
    pages: z.array(z.object({ src: z.string(), alt: z.string() })),
    note: z.string(),
    cta: z.string(),
  }),
]);

// One YAML file per project and language: src/content/projects/{en,es}/<slug>.yaml
const projects = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    order: z.number(),
    featured: z.boolean().default(false), // wide card with image or video on the home page
    tag: z.string(),
    tagNote: z.string().optional(),
    cardTag: z.string(),
    summary: z.string(),
    description: z.string(),
    cardTech: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    media: z.object({ card: media.optional(), detail: media.optional() }).optional(),
    howItWorks: z.array(z.string()),
    decisions: z.array(z.string()).default([]),
  }),
});

export const collections = { projects };
