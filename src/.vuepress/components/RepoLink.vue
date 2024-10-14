<script setup>
import RepoLink from "vuepress-theme-hope/navbar/components/RepoLink.js"
</script>

<template>
    <div class="hide-in-mobile">
        <RepoLink />
    </div>
</template>

<style scoped>
@media (max-width: 719px) {
    .hide-in-mobile {
        display: none;
    }
}
</style>