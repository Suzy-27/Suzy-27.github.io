import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "無馬 かな wiki",
  description: "無馬 かな wiki 个人搬运翻译",
    
  theme,
  // head: [
  //   ["script", {src: "/styles/index.js"}],
  // ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
