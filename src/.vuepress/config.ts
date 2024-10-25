import { getDirname, path } from "vuepress/utils";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "無馬 かな wiki",
  description: "無馬 かな wiki 个人搬运翻译",

  theme,

  alias: {
      // vuepress hope theme components resolved
      "@theme-hope/components/NormalPage": path.resolve(
        __dirname,
        "./components/NormalPage.vue",
      ),
      "@theme-hope/modules/info/components/DateInfo": path.resolve(
        __dirname,
        "./components/PageHeader.vue",
      ),
      "@theme-hope/modules/info/components/PageMeta": path.resolve(
        __dirname,
        "./components/ReturnLink.vue",
      ),
      "@theme-hope/modules/navbar/components/NavScreen": path.resolve(
        __dirname,
        "./components/NavScreen.vue",
      ),
      "@theme-hope/modules/navbar/components/RepoLink": path.resolve(
        __dirname,
        "./components/RepoLink.vue",
      ),
      // vuepress hope theme blog components resolved
      "@theme-hope/modules/blog/components/BloggerInfo": path.resolve(
        __dirname,
        "./components/EmptyNode.vue"
      ),
      // "@theme-hope/modules/blog/components/TimelineList": path.resolve(
      //   __dirname,
      //   "./components/EmptyNode.vue"
      // ),
      // Components
      "@DataTable": path.resolve(
        __dirname,
        "./components/DataTable.vue",
      ),
      "@DataTableVertical": path.resolve(
        __dirname,
        "./components/DataTableVertical.vue",
      ),
      "@EpisodeButton": path.resolve(
        __dirname,
        "./components/EpisodeButton.vue"
      ),
      // Data path 
      "@GalleryData": path.resolve(
        __dirname,
        "./table-data/galleryData.js"
      ),
      "@ClothesData": path.resolve(
        __dirname,
        "./table-data/clothesData.js"
      ),
      "@VehicleData": path.resolve(
        __dirname,
        "./table-data/vehicleData.js"
      ),
      "@LocationData": path.resolve(
        __dirname,
        "./table-data/locationData.js"
      ),
      "@HistoryData": path.resolve(
        __dirname,
        "./table-data/historyData.js"
      ),
   },
  
   clientConfigFile: path.resolve(__dirname, "./client.ts"),

  
  // head: [
  //   ["script", {src: "/styles/index.js"}],
  // ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
