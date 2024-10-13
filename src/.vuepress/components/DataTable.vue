<template>
    <div>
      <!-- Checkboxes to toggle column visibility -->
      <div class="checkbox-table" v-if="TogglableState">
        <label v-for="(header, index) in headers" :key="index">
          <input 
            type="checkbox" 
            :value="index" 
            v-model="visibleColumns" 
            :checked="isVisible(index)"
          />
          {{ header }}
        </label>
      </div>
      <br v-if="!TogglableState">
  
      <table class="table-hidden checkbox-table" cellspacing="0" cellpadding="5">
        <thead>
          <tr v-if="isHeader">
            <th v-for="(header, index) in headers" 
                :key="index" 
                v-show="isVisible(index)">
                {{  header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in data" :key="rowIndex">
            <td v-for="(cell, colIndex) in row" 
                :key="colIndex" 
                :class="colStyle[colIndex]"
                v-show="isVisible(colIndex)">
                <ComponentRenderer :content="cell" />
            </td>
          </tr>
        </tbody>
        <div v-if="$slots.footer" class="table-footer">
          <slot name="footer"></slot>
        </div>
      </table>
    </div>
  </template>
  
  <script>
  import ComponentRenderer from "../renderers/ComponentRenderer.vue";
  import "../styles/table-data.scss";
  export default {
    components: {
      ComponentRenderer
    },
    props: {
      isTogglable: {
        type: Boolean,
        default: false,
      },
      headers: {
        type: Object,
        default: {},
      },
      headersInitState: {
        type: Object,
        default: {},
      },
      colStyle: {
        type: Object,
        default: {},
      },
      data: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        visibleColumns: [],
      };
    },
    created() {
      if (this.isHeader) {
        var headerIndex = Object.keys(this.headersInitState);
        var headersInitStateValue = Object.values(this.headersInitState);
        for (var i = 0; i < headersInitStateValue.length; i++) {
          if (headersInitStateValue[i]) {
            this.visibleColumns.push(headerIndex[i]);
          }
        }
      }
    },
    computed: {
        isHeader() {
            return this.headers !== null;
        },
        TogglableState() {
          return this.isTogglable;
        }
    },
    methods: {
      isVisible(h) {
        return this.visibleColumns.includes(h);
      },
    }
  };
  </script>

<style lang="scss" scoped>
.table-footer {
  color: var(--vp-c-text-mute);
  font-size: 0.8em;
  margin: 0;
  padding: 0;
}
</style>
  