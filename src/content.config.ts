import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const relatedPageSchema = z.object({
  slug: z.string(),
  title: z.string(),
});

const faqSchema = z.object({
  question: z.string(),
  answer: z.string(),
});

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/pages",
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date(),
    relatedPages: z.array(relatedPageSchema).min(2).max(3),
    faq: z.array(faqSchema).optional(),
  }),
});

export const collections = {
  pages,
};
