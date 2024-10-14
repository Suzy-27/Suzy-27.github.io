<template>
    <div class="details-button" :style="{ margin: margin }">
      <div>
        <div :class="['btn', {'div-accent-bg': !computedIsCollapsed}]" @click="toggleDiv">
          <div class="btn-with-border">
              {{ computedIsCollapsed ? '+' : '-' }}
          </div>
        </div>
      </div>
  
      <!-- Label rendering when content is collapsed -->
      <div v-if="computedIsCollapsed" style="margin-left: 5px">{{ label }}</div>
      
      <!-- Collapsible content -->
      <div :class="['collapsed-content', { 'div-scrollable': isScrollable }, { 'div-invisible': computedIsCollapsed }]">
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
      isScrollable: {
        type: Boolean,
        default: false,
      },
      isCollapsed: {
        type: Boolean,
        default: true,
      },
      margin: {
        type: String,
        default: '0px',
      },
    },
  
    data() {
      return {
        collapsed: this.isCollapsed 
        // || (typeof localStorage !== 'undefined' && localStorage.getItem('collapsibleButtonState') === 'collapsed'),
      };
    },
  
    computed: {
      computedIsCollapsed: {
        get() {
          return this.collapsed;
        },
        set(value) {
          this.collapsed = value;
          // if (typeof localStorage !== 'undefined') {
          //   localStorage.setItem('collapsibleButtonState', value ? 'collapsed' : 'expanded');
          // }
        },
      },
    },
  
    // created() {
    //   if (typeof localStorage !== 'undefined') {
    //     const savedState = localStorage.getItem('collapsibleButtonState');
    //     this.collapsed = savedState ? savedState === 'collapsed' : this.isCollapsed;
    //   } else {
    //     this.collapsed = this.isCollapsed;
    //   }
    // },
  
    methods: {
      toggleDiv() {
        this.computedIsCollapsed = !this.computedIsCollapsed;
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .details-button {
    display: flex;
  }
  .btn {
    cursor: pointer;
    width: 100%;
    height: 100%;
    color: var(--vp-c-text);
    display: block;
  }
  .btn-with-border {
    width: 1.5em;
    height: 1.5em;
    font-size: 1em;
    border: 1px solid var(--vp-c-text);
    display: block;
    text-align: center;
  }
  .btn:hover {
    background-color: var(--vp-c-control-hover);
  }
  .div-invisible {
    display: none;
  }
  .collapsed-content {
    margin-left: 5px;
  }
  .div-scrollable {
    width: 100%;
    overflow-x: auto;
  }
  @media (max-width: 719px) {
    .div-accent-bg {
      background-color: var(--vp-c-control-hover);
    }
  }
  </style>
  