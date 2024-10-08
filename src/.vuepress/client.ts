import { defineClientConfig } from "vuepress/client";
import DetailsButton from "./components/DetailsButton.vue";
import CollapsableText from "./components/CollapsableText.vue";
import Anchor from "./components/Anchor.vue";

export default defineClientConfig({
    enhance: ({ app }) => {
        app.component("DetailsButton", DetailsButton);
        app.component("CollapsableText", CollapsableText);
        app.component("Anchor", Anchor);
    },
});