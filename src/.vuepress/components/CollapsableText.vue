<template>
    <span 
      :class="[{ 'small-font' : isSmallFont }]" 
      :style="{ margin: margin }">
      <span 
        v-html="label" 
        class="collapsed-label"
        @click="toggleDiv">
      </span>
      <span v-show="$slots.addon">
        <slot name="addon"></slot>
      </span>
      <span v-show="!computedIsCollapsed" class="collapsed-content">
          <slot></slot>
      </span>
    </span>
  </template>
  
  <script>
import { defineComponent } from 'vue';
  export default defineComponent ({
    name: 'CollapsableText',
      props: {
          label: {
              type: String,
              default: '',
          },
          isCollapsed: {
              type: Boolean,
              default: true,
          },
          isSmallFont: {
              type: Boolean,
              default: false,
          },
          margin: {
              type: String,
              default: '0px'
          },
      },
      
      data() {
          return {
              collapsed: this.isCollapsed 
              // || (typeof localStorage !== 'undefined' && localStorage.getItem('collapsibleTextState') === 'collapsed'),
          };
      },
  
      computed: {
          computedIsCollapsed: {
              get() {
                  return this.collapsed;
              },
              set(value) {
                  this.collapsed = value;
                //   if (typeof localStorage !== 'undefined') {
                //       localStorage.setItem(
                //           'collapsibleTextState', this.collapsed ? 'collapsed' : 'expanded'
                //       );
                //   }
              }
          }
      },
  
      methods: {
          toggleDiv() {
              this.computedIsCollapsed = !this.computedIsCollapsed;
          },
      },
  });
  </script>
  
  <style lang="scss" scoped>
  .inline-style {
      display: inline;
  }
  .small-font {
      font-size: 0.8em;
  }
  .collapsed-label {
      color: var(--vp-c-accent);
      max-width: fit-content;
  }
  .collapsed-label:hover {
      text-decoration: underline;
      cursor: pointer;
  }
  </style>
  