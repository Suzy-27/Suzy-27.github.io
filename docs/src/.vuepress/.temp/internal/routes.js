export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/index.html.js"), meta: {"t":"主页","i":"home"} }],
  ["/wiki/clothes.html", { loader: () => import(/* webpackChunkName: "wiki_clothes.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/clothes.html.js"), meta: {"t":"服装情报","i":"user-tie"} }],
  ["/wiki/gallery.html", { loader: () => import(/* webpackChunkName: "wiki_gallery.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/gallery.html.js"), meta: {"t":"画廊","i":"image"} }],
  ["/wiki/location.html", { loader: () => import(/* webpackChunkName: "wiki_location.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/location.html.js"), meta: {"t":"据点情报","i":"house"} }],
  ["/wiki/mainPage.html", { loader: () => import(/* webpackChunkName: "wiki_mainPage.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/mainPage.html.js"), meta: {"t":"無馬 かな","i":"book"} }],
  ["/wiki/organzation.html", { loader: () => import(/* webpackChunkName: "wiki_organzation.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/organzation.html.js"), meta: {"t":"组织关系","i":"sitemap"} }],
  ["/wiki/", { loader: () => import(/* webpackChunkName: "wiki_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/index.html.js"), meta: {"t":"Wiki 使用说明","i":"triangle-exclamation"} }],
  ["/wiki/vehicle.html", { loader: () => import(/* webpackChunkName: "wiki_vehicle.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/vehicle.html.js"), meta: {"t":"车辆情报","i":"car"} }],
  ["/wiki/friendship/", { loader: () => import(/* webpackChunkName: "wiki_friendship_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/index.html.js"), meta: {"t":"交友关系","i":"users"} }],
  ["/wiki/history/", { loader: () => import(/* webpackChunkName: "wiki_history_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/index.html.js"), meta: {"t":"年表"} }],
  ["/wiki/friendship/black/doctor.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_black_doctor.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/black/doctor.html.js"), meta: {"t":"私人医生","i":"stethoscope"} }],
  ["/wiki/friendship/black/other.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_black_other.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/black/other.html.js"), meta: {"t":"其他","i":"user"} }],
  ["/wiki/friendship/black/", { loader: () => import(/* webpackChunkName: "wiki_friendship_black_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/black/index.html.js"), meta: {"t":"黑市民"} }],
  ["/wiki/friendship/self/arcana.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_self_arcana.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/self/arcana.html.js"), meta: {"t":"ARCANA","i":"moon"} }],
  ["/wiki/friendship/self/femme-fatale.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_self_femme-fatale.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/self/femme-fatale.html.js"), meta: {"t":"FEMME FATALE","i":"gun"} }],
  ["/wiki/friendship/self/nsm-group.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_self_nsm-group.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/self/nsm-group.html.js"), meta: {"t":"無馬集团","i":"crown"} }],
  ["/wiki/friendship/self/", { loader: () => import(/* webpackChunkName: "wiki_friendship_self_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/self/index.html.js"), meta: {"t":"自组织"} }],
  ["/wiki/friendship/gang/868.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_868.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/868.html.js"), meta: {"t":"🌸868"} }],
  ["/wiki/friendship/gang/allin.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_allin.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/allin.html.js"), meta: {"t":"♠️ ALLIN"} }],
  ["/wiki/friendship/gang/anbrella.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_anbrella.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/anbrella.html.js"), meta: {"t":"Anbrella","i":"biohazard"} }],
  ["/wiki/friendship/gang/gbc.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_gbc.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/gbc.html.js"), meta: {"t":"🎪GBC"} }],
  ["/wiki/friendship/gang/mozu.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_mozu.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/mozu.html.js"), meta: {"t":"🦅MOZU"} }],
  ["/wiki/friendship/gang/nolimit.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_nolimit.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/nolimit.html.js"), meta: {"t":"☠️NO LIMIT"} }],
  ["/wiki/friendship/gang/", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/index.html.js"), meta: {"t":"帮派"} }],
  ["/wiki/friendship/gang/topgear.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_gang_topgear.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/gang/topgear.html.js"), meta: {"t":"⚙TOPGRAR"} }],
  ["/wiki/friendship/white/aid.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_white_aid.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/white/aid.html.js"), meta: {"t":"急救队","i":"heart-pulse"} }],
  ["/wiki/friendship/white/other.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_white_other.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/white/other.html.js"), meta: {"t":"其他","i":"user"} }],
  ["/wiki/friendship/white/police.html", { loader: () => import(/* webpackChunkName: "wiki_friendship_white_police.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/white/police.html.js"), meta: {"t":"警察","i":"shield"} }],
  ["/wiki/friendship/white/", { loader: () => import(/* webpackChunkName: "wiki_friendship_white_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/friendship/white/index.html.js"), meta: {"t":"白市民"} }],
  ["/wiki/history/episode/", { loader: () => import(/* webpackChunkName: "wiki_history_episode_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/index.html.js"), meta: {"t":"剧情故事"} }],
  ["/wiki/history/episode/past/", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/index.html.js"), meta: {"t":"过去的剧情"} }],
  ["/wiki/history/episode/past/y2023/p03-08.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_p03-08.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/p03-08.html.js"), meta: {"t":"2023年08月"} }],
  ["/wiki/history/episode/past/y2023/p03-09.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_p03-09.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/p03-09.html.js"), meta: {"t":"2023年09月"} }],
  ["/wiki/history/episode/past/y2023/p03-10.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_p03-10.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/p03-10.html.js"), meta: {"t":"2023年10月"} }],
  ["/wiki/history/episode/past/y2023/p03-11.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_p03-11.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/p03-11.html.js"), meta: {"t":"2023年11月"} }],
  ["/wiki/history/episode/past/y2023/p03-12.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_p03-12.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/p03-12.html.js"), meta: {"t":"2023年12月"} }],
  ["/wiki/history/episode/past/y2023/", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2023_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2023/index.html.js"), meta: {"t":"2023年"} }],
  ["/wiki/history/episode/past/y2024/p04-01.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-01.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-01.html.js"), meta: {"t":"2024年01月"} }],
  ["/wiki/history/episode/past/y2024/p04-02.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-02.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-02.html.js"), meta: {"t":"2024年02月"} }],
  ["/wiki/history/episode/past/y2024/p04-03.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-03.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-03.html.js"), meta: {"t":"2024年03月"} }],
  ["/wiki/history/episode/past/y2024/p04-04.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-04.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-04.html.js"), meta: {"t":"2024年04月"} }],
  ["/wiki/history/episode/past/y2024/p04-05.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-05.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-05.html.js"), meta: {"t":"2024年05月"} }],
  ["/wiki/history/episode/past/y2024/p04-06.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-06.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-06.html.js"), meta: {"t":"2024年06月"} }],
  ["/wiki/history/episode/past/y2024/p04-07.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-07.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-07.html.js"), meta: {"t":"2024年07月"} }],
  ["/wiki/history/episode/past/y2024/p04-08.html", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_p04-08.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/p04-08.html.js"), meta: {"t":"2024年08月"} }],
  ["/wiki/history/episode/past/y2024/", { loader: () => import(/* webpackChunkName: "wiki_history_episode_past_y2024_index.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/wiki/history/episode/past/y2024/index.html.js"), meta: {"t":"2024年"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/susie/Project/Suzy-27.github.io/src/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
