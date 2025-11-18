export const defaultLanguage: string = "en"

export const common = {
  domain: "https://lio.cat",
  meta: {
    favicon: "/images/general/avatar.png",
    url: "https://lio.cat",
  },
  googleAnalyticsId: "",
  social: [],
  rss: true,
  navigation: {
    home: true,
    archive: false,
    custom: [
      {
        label: "bluesky",
        link: "https://lio.to/bluesky",
      },
      {
        label: "mastodon",
        link: "https://lio.to/mastodon",
      },
      {
        label: "twitter",
        link: "https://lio.to/twitter",
      },
      {
        label: "github",
        link: "https://lio.to/github",
      },
      {
        label: "forge",
        link: "https://lio.to/git",
      },
      {
        label: "email",
        link: "mailto:wrath@lio.cat",
      },
    ],
    links: false,
    about: false,
  },
  latestPosts: 8,
  comments: {
    enabled: false,
    twikoo: {
      enabled: false,
      // replace with your own envId
      envId: import.meta.env.PUBLIC_TWIKOO_ENV_ID ?? "",
    },
  },
}

export const de = {
  ...common,
  siteName: "Lio",
  meta: {
    ...common.meta,
    title: "Lio",
    slogan: "fangmarks",
    description: "digital sorcerer and pixel wizard",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "归档",
      description: "小孙同学的所有文章",
      ogImage: "/images/page-meta/de/archive.png",
    },
    links: {
      title: "朋友们",
      description: "小孙同学的和他朋友们",
      ogImage: "/images/page-meta/de/links.png",
    },
    about: {
      title: "关于我",
      description: "小孙同学的自我介绍",
      ogImage: "/images/page-meta/de/about.png",
    },
  },
}

export const en = {
  ...common,
  siteName: "Lio",
  meta: {
    ...common.meta,
    title: "fangmarks",
    // slogan: "fangmarks",
    description: "digital sorcerer and pixel wizard",
  },
  navigation: {
    ...common.navigation,
  },
  pageMeta: {
    archive: {
      title: "All Posts",
      description: "All of Lio's posts",
      ogImage: "/images/page-meta/en/archive.png",
    },
    about: {
      title: "About",
      description: "About Lio",
      ogImage: "/images/page-meta/en/about.png",
    },
  },
}
