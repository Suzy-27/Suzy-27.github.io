<template>
    <a :href="anchor.link" 
       :title="anchor.title" 
       class="link" 
       :target="isExternalLink ? '_blank' : '_self'"
    >
      <slot></slot>
    </a>
  </template>
  
  <script lang="ts">
  import { defineComponent, PropType } from 'vue';
  import linkMap, {LinkData} from '../table-data/LinkMap';
  
  export default defineComponent({
    name: 'Anchor',
    props: {
      href: {
        type: String as PropType<keyof typeof linkMap>,
        required: true,
      },
      isExternal: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      anchor(): LinkData {
        // Return the link data based on the name prop
        const data = linkMap[this.href];
        if (!data) {
          throw new Error(`Link not found for "${this.href}"`);
        }
        return {
          link: data.link,
          title: data.title,
        };
      },
      isExternalLink(): boolean {
      // Check if the link is external by looking for http/https at the start of the URL
      return /^(http|https):\/\//.test(this.anchor.link);
      },
    },
    methods: {
    setHighlightTarget() {
      // Store the target element ID in sessionStorage
      sessionStorage.setItem('highlightTarget', this.name);
    },
  },
});
  </script>

<style lang="scss">
.link::after {
  content: none !important; 
}
.link[target="_blank"] {
  text-decoration: none; 
}
</style>
  
  