import { sidebar } from "vuepress-theme-hope";

export const wikiSidebar = sidebar({
  "/": [
    "",
    "get-started.md",
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
        {
          text: "交友关系",
          icon: "users",
          link: "/wiki/friendship/",
          prefix: "wiki/friendship",
          collapsible: true,
          children: [
            {
              text: "自组织",
              prefix: "self/",
              collapsible: true,
              children: [
                "nsm-group.md",
                "arcana.md",
                "femme-fatale.md",
              ]
            },
            {
              text: "帮派",
              prefix: "gang/",
              collapsible: true,
              children: [
                "allin.md",
                "anbrella.md",
                "gbc.md",
                "mozu.md",
                "nolimit.md",
                "868.md",
                "topgear.md",
              ]
            },
            {
              text: "黑市民",
              prefix: "black/",
              collapsible: true,
              children: [
                "doctor.md",
                "other.md",
              ]
            },
            {
              text: "白市民",
              prefix: "white/",
              collapsible: true,
              children: [
                "police.md",
                "aid.md",
                "other.md",
              ]
            },
          ]
        },
        "/wiki/organzation.md",
        {
          text: "历史",
          icon: "calendar",
          prefix: "wiki/history/",
          children: [
            {
              text: "年表",
              link: "",
            },
            {
              text: "剧情故事",
              link: "/wiki/history/episode/",
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
          ],
        }
      ],
    },
  ],
});
