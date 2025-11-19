export const prerender = true
import { getCollection, type CollectionEntry } from "astro:content"
import fs from "fs"
import { join, resolve } from "node:path"
import { ImageResponse } from "@vercel/og"
import { getPostsByLocale } from "~/utils"
import type { ReactElement } from "react"

interface Props {
  params: { slug: string }
  props: { post: CollectionEntry<"enPosts" | "dePosts"> }
}

export async function getStaticPaths() {
  const blogPostsEN = await getPostsByLocale("en")
  const blogPostsDE = await getPostsByLocale("de")
  const posts = [...blogPostsEN, ...blogPostsDE]
  return posts.map((post) => ({
    params: { slug: post.id, lang: post.data.lang },
    props: { post },
  }))
}

export async function GET({ props }: Props) {
  const options = {
    width: 1200,
    height: 600,
    padding: 10,
    color: "#FFB900",
  }
  const { post } = props
  const path = join(process.cwd(), "public", "fonts", "JetBrainsMono-Bold.ttf")
  // using custom font files
  const jetbrainsMono = fs.readFileSync(path)

  // Astro doesn't support tsx endpoints so usign React-element objects
  const html = {
    type: "div",
    key: "extra-margin",
    props: {
      style: {
        display: "flex",
        width: options.width,
        height: options.height,
        backgroundColor: options.color,
        padding: options.padding,
        boxSizing: "border-box",
      },
      children: [
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              width: "100%",
              height: "100%",
              backgroundColor: options.color,
              position: "relative",
              overflow: "hidden",
            },
            children: [
              {
                type: "img",
                props: {
                  src: "https://pogge.rs/i/36b0b9ec4980.png",
                  alt: "logo",
                  style: {
                    position: "absolute",
                    top: 32,
                    right: 32,
                    width: 465.18,
                    height: 141,
                  },
                },
              },
              {
                type: "div",
                props: {
                  style: {
                    position: "absolute",
                    left: 48,
                    bottom: 48,
                    width: 1000,
                    color: "#222",
                    fontFamily: "monospace",
                    fontWeight: "bold",
                    fontSize: 58,
                    lineHeight: 1.2,
                    whiteSpace: "pre-wrap",
                    textAlign: "left",
                    display: "block",
                  },
                  children: post.data.title,
                },
              },
            ],
          },
        },
      ],
    },
  } as unknown as ReactElement

  return new ImageResponse(html, {
    width: options.width,
    height: options.height,
    fonts: [
      {
        name: "monospace",
        // @ts-ignore
        data: jetbrainsMono.buffer,
        style: "normal",
      },
    ],
  })
}
