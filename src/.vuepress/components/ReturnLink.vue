<template>
  <div v-if="isFriendshipPage" class="return-padding">
    <a class="return-link" href="/wiki/friendship/">
      <div class="return-head">
       ↩️返回&ensp; <span class="return-text">交友关系</span>
      </div>
    </a>
  </div>
  <div v-if="isEpisodePage" class="return-padding">
    <a class="return-link" href="/wiki/history/episode/">
      <div class="return-head">
       ↩️返回&ensp; <span class="return-text">剧情故事</span>
     </div>
    </a>
  </div>
</template>

<script>
export default {
  computed: {
    isFriendshipPage() {
      const path= this.$route.path;
      return path.includes("/wiki/friendship/") && path !== "/wiki/friendship/"
    },
    isEpisodePage() {
      const path= this.$route.path;
      return path.includes("/wiki/history/episode/") && path !== "/wiki/history/episode/"
    }
  },
}
</script>

<style lang="scss" scoped>
.return-link {
    display: block;
    background-color: var(--vp-c-bg);
    border-radius: 0.5rem;
    font-size: 1em;
    width: fit-content;
    margin: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
}
.return-link:hover {
    background-color: var(--vp-c-control-hover);
}
.return-head {
  color: var(--vp-c-text)
}
.return-link:hover .return-head {
    color: var(--vp-c-accent-hover);
}
.return-text {
  color: var(--vp-c-accent);
}


.return-padding {
  padding-inline: 2rem;
}
@media (max-width: 959px) {
  .return-padding {
        padding-inline: 1rem;
    }
}
</style>