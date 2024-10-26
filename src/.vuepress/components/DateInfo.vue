<template>
    <div v-if="lastUpdated" class="lastUpdated">
      最后更新：{{ lastUpdated || '' }}
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref, computed } from "vue";
  import { useUpdateTime } from "@theme-hope/modules/info/composables/index";
  import { usePageData } from "vuepress/client"; 
  import { updateData } from "../table-data/updateData.js"; 
  
  export default defineComponent({
    setup() {
      const pageData = usePageData(); // Get the page data
      const pageTitle = pageData.value.frontmatter.title; // Extract the title from the page data
      const updateTime = useUpdateTime(); // Get the update time

      const lastUpdated = computed(() => {
      if (!updateTime.value) return null;

      const updatedDate = new Date(updateTime.value);

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
  
      // Store the last update time for the current page
        const existingEntry = updateData.find(entry => entry.title === pageTitle);
        
        if (existingEntry) {
          existingEntry.date = lastUpdated;
        } else {
          updateData.push({ title: pageTitle, date: lastUpdated });
        }
  
        // Retrieve and display the update time based on the page title
        const entry = updateData.find(entry => entry.title === pageTitle);
        if (entry) {
            return entry.date;
        }
        else return null;
    }
  });
  </script>
  
  <style scoped>
  .lastUpdated {
        margin: 0 20px 0 5px;
  }
  </style>
  