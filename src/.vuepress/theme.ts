import { hopeTheme } from "vuepress-theme-hope";

import { wikiNavbar } from "./navbar/index.js";
import { wikiSidebar } from "./sidebar/index.js";


export default hopeTheme({
  author: {
    name: "芷依",
    url: "https://space.bilibili.com/5384565?spm_id_from=333.1007.0.0",
  },
  darkmode: "toggle",

  iconAssets: "fontawesome-with-brands",

  logo: "/wiki-assets/banner/kana_icon.png",

  repo: "Suzy-27/wiki-nashima/",

  docsDir: "src",

  // navbar
  navbar: wikiNavbar,
  navbarLayout: { start: ["Brand"], center: ["Links"], end: ["Outlook", "Language", "Repo", "Search"] },
  navbarTitle: "無馬 かな",

  // sidebar
  sidebar: wikiSidebar,

  toc: false,

  footer: "译者：<a href='https://space.bilibili.com/5384565?spm_id_from=333.1007.0.0' target='_blank'>芷依</a> | 搬运自 <a href='https://w.atwiki.jp/streamergta5/pages/522.html' target='_blank'>STGR wiki  無馬 かな</a> | 所有版权均属于2019 AtWiki, Inc.",

  displayFooter: true,

  copyright: false,

  print: false,

  editLink: false,

  lastUpdated: false,

  contributors: false,

  //page meta
   metaLocales: {
    lastUpdated: "最后更新时间",
    contributors: "",
    // editLink: "在 GitHub 上编辑此页",
   },

  //encrypt: {
  //  config: {
  //    "/demo/encrypt.html": ["1234"],
  //    "/zh/demo/encrypt.html": ["1234"],
  //  },
  //},

  // hotReload: true,

  plugins: {
    // git: true,
    readingTime: false,
    
    // comment: {
    //   provider: "Giscus",
    //   repo: "Suzy-27/Comments",
    //   repoId: "R_kgDOM3tRMQ",
    //   category: "General",
    //   categoryId: "DIC_kwDOM3tRMc4Ci0of",
    // },

    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comments-e70x8hiqk-suzy-27s-projects.vercel.app", // your server url
    // },

    components: {
      components: ["Badge"],
    },

    // These features are enabled for demo, only preserve features you need here
    markdownImage: false,
    photoSwipe: false,
    //  markdownImage: {
    //    figure: true,
    //    lazyload: true,
    //    size: true,
    //    mark: true,
    //  },

    // markdownMath: {
    //   // install katex before enabling it
    //   type: "katex",
    //   // or install mathjax-full before enabling it
    //   type: "mathjax",
    // },

    // This features is enabled for demo, only preserve if you need it
    markdownTab: false,

    // These features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      component: true,
      demo: true,
      include: true,
      mark: true,
      plantuml: true,
      spoiler: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tasklist: true,
      vPre: true,

      // Install chart.js before enabling it
      // chart: true,

      // insert component easily

      // Install echarts before enabling it
      // echarts: true,

      // Install flowchart.ts before enabling it
      // flowchart: true,

      // gfm requires mathjax-full to provide tex support
      // gfm: true,

      // Install mermaid before enabling it
      // mermaid: true,

      // playground: {
      //   presets: ["ts", "vue"],
      // },

      // Install @vue/repl before enabling it
      // vuePlayground: true,

      // Install sandpack-vue3 before enabling it
      // sandpack: true,
    },

    // Install @vuepress/plugin-pwa and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cacheImage: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // install @vuepress/plugin-revealjs and uncomment these if you need slides
    // revealjs: {
    //   plugins: ["highlight", "math", "search", "notes", "zoom"],
    // },
  },
}, { custom: true }
);
