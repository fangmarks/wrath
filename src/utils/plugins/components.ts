import type { Link } from "mdast"
import type { Plugin } from "unified"
import { visit } from "unist-util-visit"

interface CustomLinkOptions {
  /**
   * Custom class name to add to all links
   */
  className?: string
  /**
   * Function to determine if a link should open in a new tab
   * Default: opens external links (starting with http/https) in new tab
   */
  shouldOpenInNewTab?: (url: string) => boolean
  /**
   * Custom attributes to add to links
   */
  attributes?: (url: string, title?: string | null) => Record<string, string>
}

/**
 * Custom remark plugin that transforms link nodes in markdown
 * to customize how <a> tags are rendered
 */
export function remarkCustomLinks(options: CustomLinkOptions = {}): Plugin {
  const {
    className,
    shouldOpenInNewTab = (url: string) => {
      // Default: open external links in new tab
      return url.startsWith("http://") || url.startsWith("https://")
    },
    attributes,
  } = options

  return () => {
    return (tree: any) => {
      visit(tree, "link", (node: Link) => {
        const url = node.url
        const title = node.title

        // Initialize data.hProperties if it doesn't exist
        if (!node.data) {
          node.data = {}
        }
        if (!node.data.hProperties) {
          node.data.hProperties = {}
        }

        // Add custom className if provided
        if (className) {
          const existingClass = node.data.hProperties.class
          node.data.hProperties.class = existingClass
            ? `${existingClass} ${className}`
            : className
        }

        // Add target="_blank" and rel="noopener noreferrer" for external links
        if (shouldOpenInNewTab(url)) {
          node.data.hProperties.target = "_blank"
          node.data.hProperties.rel = "noopener noreferrer"
        }

        // Add custom attributes if provided
        if (attributes) {
          const customAttrs = attributes(url, title)
          Object.assign(node.data.hProperties, customAttrs)
        }
      })
    }
  }
}
