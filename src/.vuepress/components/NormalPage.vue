<script setup lang="ts">
import NormalPage from "vuepress-theme-hope/components/NormalPage.js";
import FootNote from "./FootNote.vue";
</script>
<template>
  <NormalPage>
    <template #bottom>
      <FootNote />
    </template>
  </NormalPage>
</template>
