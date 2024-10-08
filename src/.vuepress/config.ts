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
      "@theme-hope/components/NormalPage": path.resolve(
        __dirname,
        "./components/NormalPage.vue",
      ),
      "@theme-hope/modules/info/components/AuthorInfo": path.resolve(
        __dirname,
        "./components/PageHeader.vue",
      ),
      "@CheckableVehicleTable": path.resolve(
        __dirname,
        "./components/CheckableVehicleTable.vue",
      ),
      "@CheckableLocationTable": path.resolve(
        __dirname,
        "./components/CheckableLocationTable.vue",
      ),
      "@VehicleData": path.resolve(
        __dirname,
        "./table-data/vehicleData.js"
      ),
      "@LocationData": path.resolve(
        __dirname,
        "./table-data/locationData.js"
      ),
   },
  
   clientConfigFile: path.resolve(__dirname, "./client.ts"),

  
  // head: [
  //   ["script", {src: "/styles/index.js"}],
  // ]

  // Enable it with pwa
  // shouldPrefetch: false,
});
