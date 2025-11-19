import rss from "@astrojs/rss"
import { de, defaultLanguage, en } from "~/config"
import { getPostsByLocale } from "~/utils"

export async function GET() {
  const posts = await getPostsByLocale(defaultLanguage)
  const config = defaultLanguage === "en" ? en : de

  return rss({
    title: config.meta.title,
    description: config.meta.description,
    site:
    config.meta.url,
    items: posts.map((post: any) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
      content: post.rendered ? post.rendered.html : post.data.description,
    })),
    customData: "",
  })
}
