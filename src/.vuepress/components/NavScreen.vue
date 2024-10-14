<script setup lang="ts">
import CommonWrapper from "vuepress-theme-hope/components/CommonWrapper.js";
import NavScreen from "vuepress-theme-hope/navbar/components/NavScreen.js";
import RepoLink from "vuepress-theme-hope/navbar/components/RepoLink.js"
</script>
<template>
<NavScreen>
    <template #after>
        <div class="nav-screen-bottom-slot">
            <RepoLink />
        </div>
    </template>
  </NavScreen>
</template>

<style lang="scss" scoped>
.nav-screen-bottom-slot {
    text-align: center;
    padding: 10px 6px;
    margin-block: 1rem;
    position: absolute;
    bottom: 0;
    left:40%;
    right:40%;
}   
</style>
