<template>
  <div v-if="text && number && header" class="footnote-style">
    <!-- References Header -->
    <h3 v-if="showHeader" class="references-header">
      <i class="fa-solid fa-bell"></i>
      注释
    </h3>
    <h3 v-if="isAuthorNote && showHeader" class="references-header">
      <i class="fa-solid fa-quote-left"></i>
      译者の考察
    </h3>

    <!-- Footnote Content -->
    <p
      :id="'footnote-' + number + '-ref'"
      class="footnote"
      @mouseover="hovered = true"
      @mouseleave="hovered = false"
      @click="scrollToFootnote"
    >
      <span class="footnote-number" :class="{ 'underline': hovered }">{{ header }}</span>
      <span class="footnote-text">{{ text }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: "FootNote",
  props: {
    number: {
      type: Number,
      default: '',
    },
    header: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    showHeader: {
      type: Boolean,
      default: false, // Controls whether the "References" header is displayed
    },
    isAuthorNote: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hovered: false,
    };
  },
  methods: {
    scrollToFootnote() {
      const footnote = document.getElementById('footnote-' + this.number);
      const offset = 100; // Customize offset as needed
      const targetPosition = footnote.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style scoped>
.footnote-style {
  position: relative;

  justify-content: space-evenly;

  padding-inline: 1rem;
  border-top: 1px solid var(--vp-c-border);
  padding-top: 2em;
  transition:
    border-top-color var(--vp-t-color),
    background var(--vp-t-color),
    padding var(--vp-t-transform);
}
.references-header {
  margin-top: 20px;
  font-size: 1.5em;
  font-weight: bold;
}

.footnote {
  margin-top: 10px;
}

.footnote-link {
  text-decoration: none;
  color: inherit;
}

.footnote-number {
  font-weight: bold;
}

.underline {
  text-decoration: underline;
  text-underline-offset: 3px; /* Adjust offset as needed */
}

.footnote-text {
  text-decoration: none;
}
</style>
