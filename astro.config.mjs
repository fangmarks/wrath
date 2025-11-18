import mdx from "@astrojs/mdx"
import react from "@astrojs/react"
import sitemap from "@astrojs/sitemap"
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections"
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers"
import tailwindcss from "@tailwindcss/vite"
import expressiveCode from "astro-expressive-code"
import { defineConfig } from "astro/config"

import robotsTxt from "astro-robots-txt"
import addClasses from "rehype-class-names"
// import remarkRehype from "remark-rehype"

import og from "astro-og";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  prefetch: true,
  site: "https://lio.cat",

  markdown: {
    remarkRehype: {},
    rehypePlugins: [
      [
        addClasses, { a: 'markdown-link'}
      ],
    ],
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
    
  },

  integrations: [react(), sitemap(), expressiveCode({
    plugins: [pluginCollapsibleSections(), pluginLineNumbers()],
    themes: ["material-theme-lighter", "material-theme-darker"],
    defaultProps: {
      showLineNumbers: true,
    },
  }), mdx({}), robotsTxt(), og()],

  adapter: node({
    mode: "standalone",
  }),
})