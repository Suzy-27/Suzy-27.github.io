<template>
<div class="details-button" :style="{ margin: margin }">
  <div>
    <div class="btn" @click="toggleDiv">
        <div class="btn-with-border">
            {{ isCollapsed ? '+' : '-' }}
        </div>
    </div>
  </div>

  <!-- label render if content is collapsed -->
  <div v-if="isCollapsed" style="margin-left: 5px">{{ label }}</div>
  
  <!-- using slot tag to insert html content -->
  <div :class="['collapsed-content', { 'div-scrollable' : isScrollabel }, { 'div-visible' : isCollapsed }]">
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
            default: false,
        },
        margin: {
            type: String,
            default: '0px',
        }
    },

    data() {
        return {
            isCollapsed: localStorage.getItem('collapsibleState') === 'collapsed' || true,
            isScrollabel: this.isScrollable,
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
    font-size: 1em;
    color: var(--vp-c-text);
    display: block;
}
.btn-with-border {
    width: 1.5em;
    height: 1.5em;
    border: 1px solid var(--vp-c-text);
    display: block;
    text-align: center;
}
.btn:hover .btn-with-border {
    background-color: var(--vp-c-control-hover);
}
.div-visible {
    display: none;
}
.collapsed-content {
    margin-left: 5px;
}
.div-scrollable {
    width: 100%;
    overflow-x: auto;
}
</style>