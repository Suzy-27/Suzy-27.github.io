<template>
  <table class="horizontal-table" cellspacing="0" cellpadding="5">
    <tbody>
      <tr v-for="(field, index) in fields" 
          :key="index">
        <td v-for="(item, i) in data" 
            :key="i" 
          :class="colStyle[field]">
            <ComponentRenderer :content="item[field]" />
        </td>
      </tr>
    </tbody>
    <div v-if="$slots.footer" class="table-footer">
      <slot name="footer"></slot>
    </div>
  </table>
</template>

<script>
import ComponentRenderer from "../renderers/ComponentRenderer.vue";
import "../styles/vertical-table.scss";
export default {
  components: {
    ComponentRenderer
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
    colStyle: {
      type: Object,
      default: {},
    },
  },
  computed: {
    fields() {
      // Assuming all objects have the same fields, get the keys from the first object
      return this.data.length > 0 ? Object.keys(this.data[0]) : [];
    }
  },
  method: {
    isValue(key, value) {
      return key === value
    }
  }
}
</script>
