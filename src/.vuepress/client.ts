import { defineClientConfig } from "vuepress/client";
import { defineWalineConfig } from '@vuepress/plugin-comment/client';
import DetailsButton from "./components/DetailsButton.vue";
import CollapsableText from "./components/CollapsableText.vue";
import Anchor from "./components/Anchor.vue";

defineWalineConfig({
    serverURL: "https://www.waline-comment.online/", // your server url
    meta: ['nick', 'mail'],
    dark: '[data-theme="dark"]',
    imageUploader: false,
    search: false,
    lang: 'zh-CN',
    comment: false,
});

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("DetailsButton", DetailsButton);
        app.component("CollapsableText", CollapsableText);
        app.component("Anchor", Anchor);
    },
});