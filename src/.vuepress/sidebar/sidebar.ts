import { sidebar } from "vuepress-theme-hope";

export const wikiSidebar = sidebar({
  "/": [
    "",
    "/wiki/",
    {
      text: "無馬 かな",
      icon: "book",
      link: "/wiki/mainPage.md",
      children: [
        {
          text: "基本情报",
          link: "/wiki/mainPage.md#基本情报",
          icon: "address-card",
        },
        "/wiki/gallery.md",
        "/wiki/clothes.md",
        "/wiki/vehicle.md",
        "/wiki/location.md",
        "/wiki/friendship/",
        "/wiki/organzation.md",
        {
          text: "历史",
          icon: "calendar",
          prefix: "wiki/history/",
          children: [
            "",
            {
              text: "剧情故事",
              link: "/wiki/history/episode/",
              children: [
                {
                  text: "过去的剧情",
                  prefix: "episode/past/",
                  collapsible: true,
                  children: [
                     {
                       text: "2023年",
                       prefix: "y2023/",
                       collapsible: true,
                       children: [
                        "p03-08.md",
                        "p03-09.md",
                        "p03-10.md",
                        "p03-11.md",
                        "p03-12.md",
                       ]
                     },
                     {
                       text: "2024年",
                       prefix: "y2024/",
                       collapsible: true,
                       children: [
                        "p04-01.md",
                        "p04-02.md",
                        "p04-03.md",
                        "p04-04.md",
                        "p04-05.md",
                        "p04-06.md",
                        "p04-07.md",
                        "p04-08.md",
                      ]
                     }
                  ]
                }
              ]
            }
          ],
        }
      ],
    },
  ],
});
