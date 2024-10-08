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
    <div v-if="!isCollapsed" :class="['collapsed-content', { 'inline-style' : isInline }]">
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
            isCollapsed: localStorage.getItem('collapsibleState') === 'collapsed' || true,
        };
    },

    methods: {
        toggleDiv() {
            this.isCollapsed = !this.isCollapsed;
              // Store the state in local storage
            localStorage.setItem(
                'collapsibleState', this.isCollapsed ? 'collapsed' : 'expanded'
            );
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