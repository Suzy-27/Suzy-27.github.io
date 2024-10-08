import { computed, h } from "vue";
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import { usePageData } from "vuepress/client";
import { usePageFrontmatter, withBase } from "vuepress/client";


export default {
    setup() {
        const page = usePageData();
        const isEnable = computed(
            () => page.value.path === "/wiki/index.html" ?
                  true : false
        );

        return isEnable
    }
}