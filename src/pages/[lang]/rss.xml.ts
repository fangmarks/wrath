export const prerender = true
import rss from "@astrojs/rss"
import { de, en } from "~/config"
import { getPostsByLocale } from "~/utils"
import { getLanguagePaths } from "~/utils/langs"

export function getStaticPaths() {
  return getLanguagePaths()
}

export async function GET(request: { url: URL }) {
  const isEn = request.url.pathname.includes("en")

  const lang = isEn ? "en" : "de"
  const config = isEn ? en : de

  const posts = await getPostsByLocale(lang)

  return rss({
    title: config.meta.title,
    description: config.meta.description,
    site: config.meta.url,
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
