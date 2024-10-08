import { sidebar } from "vuepress-theme-hope";

export const wikiSidebar = sidebar({
  "/": [
    "",
    "get-started.md",
    {
      text: "無馬 かな",
      icon: "book",
      link: "/wiki/",
      prefix: "/wiki/",
      children: [
        {
          text: "基本情报",
          link: "README.md#基本情报",
          icon: "address-card",
        },
        "gallery.md",
        "clothes.md",
        "vehicle.md",
        "location.md",
        {
          text: "交友关系",
          icon: "users",
          link: "friendship/",
          prefix: "friendship",
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
        "organization.md",
        {
          text: "历史",
          icon: "calendar",
          prefix: "history/",
          children: [
            {
              text: "年表",
              link: "README.md",
            },
            {
              text: "剧情故事",
              link: "episode/",
              prefix: "episode/",
              collapsible: true,
              children: [
                {
                  text: "2023年",
                  prefix: "y2023/",
                  collapsible: true,
                  children: [
                    "p08.md",
                    "p09.md",
                    "p10.md",
                    "p11.md",
                    "p12.md",
                  ]
                },
                {
                  text: "2024年",
                  prefix: "y2024/",
                  collapsible: true,
                  children: [
                    "p01.md",
                    "p02.md",
                    "p03.md",
                    "p04.md",
                    "p05.md",
                    "p06.md",
                    "p07.md",
                    "p08.md",
                    "p09.md",
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
