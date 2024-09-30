import { hasGlobalComponent } from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_gi2gbx6sqk7fdoe75udjtmp6ca/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/@vueuse+core@11.1.0_vue@3.5.10/node_modules/@vueuse/core/index.mjs";
import FontIcon from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_ynrl2ebylo6nfbwsslfcpkmg3e/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import Badge from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_ynrl2ebylo6nfbwsslfcpkmg3e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_ynrl2ebylo6nfbwsslfcpkmg3e/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.57_sass-embedded@1.79.4_vuepress@2.0.0-rc.17_@vuepress+bu_ynrl2ebylo6nfbwsslfcpkmg3e/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/brands.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
};
