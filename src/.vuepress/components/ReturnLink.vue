<template>
  <div class="return-link">
    ↩️返回 {{ text }}
  <div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    }
  },
  computed: {
    isFriendshipPage() {
      return this.$route.path === "/wiki/friendship/"
    }
    
  },
}
</script>

<style lang="scss" scoped>
.return-link {
    display: inline;
    background-color: var(--vp-c-bg);
    border-radius: 0.5rem;
    display: flex;
    font-size: 1em;
    max-width: fit-content;
    height: 2rem;
    margin: 0 0 0 1.2em;
    padding: 10px 10px 0px 10px;
    color: var(--vp-c-text);
}
.return-link:hover {
    background-color: var(--vp-c-control-hover);
}
.route-link:hover {
  text-decoration: underline;
}
</style>