import { HopeIcon, Layout, NotFound, injectDarkmode, setupDarkmode, setupSidebarItems, scrollPromise } from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@waline+client@3.3.2_markdown-it@14.1.0_sass-embedded@1.79.4__qa2asfojwkipn6jnwfovsg3xda/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineCatalogInfoGetter } from "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/@vuepress+plugin-catalog@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17__5dlg4nz25ibm5f47ucuvwtv2jy/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"

import "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_gi2gbx6sqk7fdoe75udjtmp6ca/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.52_vuepress@2.0.0-rc.17_@vuepress+bundler-vite@2.0.0-rc.17_@types+n_gi2gbx6sqk7fdoe75udjtmp6ca/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "C:/Users/susie/Project/Suzy-27.github.io/node_modules/.pnpm/vuepress-theme-hope@2.0.0-rc.58_@waline+client@3.3.2_markdown-it@14.1.0_sass-embedded@1.79.4__qa2asfojwkipn6jnwfovsg3xda/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.t;
  const shouldIndex = meta.I !== false;
  const icon = meta.i;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(HopeIcon, { icon }), title] : null,
    order: meta.O,
    index: meta.I,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);


  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
