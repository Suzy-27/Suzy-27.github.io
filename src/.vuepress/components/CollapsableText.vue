<template>
    <div 
      :class="[{ 'inline-style' : isInline }, { 'small-font' : isSmallFont }]" 
      :style="{ margin: margin }">
      <div 
        v-html="label" 
        :class="['collapsed-label', { 'inline-style' : isInline || $slots.addon }]"
        @click="toggleDiv">
      </div>
      <div v-if="$slots.addon" style="display:inline">
        <slot name="addon"></slot>
      </div>
      <div v-if="!computedIsCollapsed" :class="['collapsed-content', { 'inline-style' : isInline }]">
          <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      props: {
          label: {
              type: String,
              default: '',
          },
          isCollapsed: {
              type: Boolean,
              default: false,
          },
          isInline: {
              type: Boolean,
              default: false,
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
              collapsed: this.isCollapsed || (typeof localStorage !== 'undefined' && localStorage.getItem('collapsibleState') === 'collapsed'),
          };
      },
  
      computed: {
          computedIsCollapsed: {
              get() {
                  return this.collapsed;
              },
              set(value) {
                  this.collapsed = value;
                  if (typeof localStorage !== 'undefined') {
                      localStorage.setItem(
                          'collapsibleState', this.collapsed ? 'collapsed' : 'expanded'
                      );
                  }
              }
          }
      },
  
      methods: {
          toggleDiv() {
              this.computedIsCollapsed = !this.computedIsCollapsed;
          },
      },
  }
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
  