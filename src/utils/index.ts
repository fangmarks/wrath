import { getCollection } from "astro:content"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatDate = (
  date: Date | string | undefined,
  format: string = "YYYY-MM-DD",
  locale?: string,
): string => {
  const validDate = date ? new Date(date) : new Date()

  if (format === "locale")
    return validDate.toLocaleString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    })

  const tokens: Record<string, string> = {
    YYYY: validDate.getFullYear().toString(),
    MM: String(validDate.getMonth() + 1).padStart(2, "0"),
    DD: String(validDate.getDate()).padStart(2, "0"),
    HH: String(validDate.getHours()).padStart(2, "0"),
    mm: String(validDate.getMinutes()).padStart(2, "0"),
    ss: String(validDate.getSeconds()).padStart(2, "0"),
  }

  return format.replace(/YYYY|MM|DD|HH|mm|ss/g, (match) => tokens[match])
}

export const getPostsByLocale = async (locale: string) => {
  const posts =
    locale === "en"
      ? await getCollection("enPosts")
      : await getCollection("dePosts")
  // Add the locale to the data of each post

  posts.forEach((post: any) => {
    post.data.lang = locale
  })
  const filtered = posts.filter((p) => p.data.published)
  return filtered.sort(
    (a: any, b: any) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  )
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
