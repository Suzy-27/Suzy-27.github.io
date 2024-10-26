<template>
    <div v-if="lastUpdated" class="lastUpdated">
      最后更新：{{ lastUpdated || '' }}
    </div>
</template>
  
<script>
import { defineComponent, computed } from "vue";
import { useUpdateTime } from "@theme-hope/modules/info/composables/index";

export default defineComponent({
  setup() {
    const lastUpdatedRaw = useUpdateTime();
    //let page = usePageData();

    const lastUpdated = computed(() => {
      if (!lastUpdatedRaw.value) return null;

      const updatedDate = new Date(lastUpdatedRaw.value);

      // Manually format as "xx年xx月xx日 hh:mm"
      const year = updatedDate.getFullYear();
      const month = String(updatedDate.getMonth() + 1).padStart(2, "0");
      const day = String(updatedDate.getDate()).padStart(2, "0");
      const hours = String(updatedDate.getHours()).padStart(2, "0");
      const minutes = String(updatedDate.getMinutes()).padStart(2, "0");

      //page.frontmatter.date = `${year}年${month}月${day}日 ${hours}:${minutes}`;

      // Return formatted string in "xx年xx月xx日 hh:mm"
      return `${year}年${month}月${day}日 ${hours}:${minutes}`;
    });

    return {
      lastUpdated,
    };
  },
});
    // mounted() {
    //   this.fetchLastUpdatedDate();
    // },
    // methods: {
    //   async fetchLastUpdatedDate() {
    //     try {
    //       const response = await fetch('/lastUpdated.txt');
    //       if (!response.ok) {
    //         throw new Error('Failed to fetch the last updated date');
    //       }
    //       const text = await response.text();
    //       this.lastUpdated = text.trim();
    //     } catch (error) {
    //       console.error('Error fetching last updated date:', error);
    //     }
    //   },
    // },

</script>
  
  <style lang="scss" scoped>
    .lastUpdated {
        margin: 0 20px 0 5px;
    }
  </style>