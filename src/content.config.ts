import { glob } from "astro/loaders"
import { defineCollection, z } from "astro:content"

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  slug: z.string().optional(),
  tags: z.array(z.string()).optional(),
  published: z.boolean().optional().default(false),
  lang: z.string().optional()
})

const enPostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/en" }),
  schema: postSchema,
})

const dePostsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/posts/de" }),
  schema: postSchema
})

export const collections = {
  enPosts: enPostsCollection,
  dePosts: dePostsCollection,
}
