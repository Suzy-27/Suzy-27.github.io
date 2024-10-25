import { navbar } from "vuepress-theme-hope";

export const wikiNavbar = navbar([
  {
    text: "使用说明",
    link: "get-started.md",
  },
  {
    text: "wiki文档",
    link: "/wiki/",
  },
  {
    text: "剧情归档",
    icon: "box-archive",
    children: [
      {
        text: "归档页面",
        icon: "box-archive",
        link: "/article/",
      },
      {
        text: "近期更新",
        icon: "star",
        link: "/tag/最近更新/",
      },
    ],
  },
]);
