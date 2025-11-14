import { Github, Twitter } from "lucide-react"

export const defaultLanguage: string = "en"

export const common = {
  domain: "https://lio.cat",
  meta: {
    favicon: "/avatar.png",
    url: "https://lio.cat",
  },
  googleAnalyticsId: "",
  social: [
    {
      icon: Twitter,
      label: "X",
      link: "https://lio.to/twitter",
    },
    {
      icon: Github,
      label: "GitHub",
      link: "https://lio.to/github",
    },
  ],
  rss: true,
  navigation: {
    home: true,
    archive: true,
    custom: [
      // {
      //   label: "CamLife",
      //   link: "https://camlife.cn",
      // },
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
    custom: [
      // {
      //   label: "影集",
      //   link: "https://camlife.cn",
      // },
    ],
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
    title: "Lio",
    slogan: "fangmarks",
    description: "digital sorcerer and pixel wizard",
  },
  navigation: {
    ...common.navigation,
    custom: [
      // {
      //   label: "CamLife",
      //   link: "https://camlife.cn",
      // },
    ],
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
