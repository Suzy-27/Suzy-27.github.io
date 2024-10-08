<template>
    <div>
      <!-- Checkboxes to toggle column visibility -->
      <div class="checkbox-table">
        <label :for="`${tableName}-addNo`">
          <input type="checkbox" :id="`${tableName}-addNo`" v-model="addNo" />
          地址
        </label>
        <label :for="`${tableName}-address`">
          <input type="checkbox" :id="`${tableName}-address`" v-model="address" />
          位置
        </label>
        <label :for="`${tableName}-called`">
          <input type="checkbox" :id="`${tableName}-called`" v-model="called" />
          通称
        </label>
        <label :for="`${tableName}-detail`">
          <input type="checkbox" :id="`${tableName}-detail`" v-model="detail" />
          备注
        </label>
      </div>
  
      <table class="table-hidden checkbox-table" cellspacing="0" cellpadding="5">
        <thead>
          <tr>
            <th v-if="addNo">地址</th>
            <th v-if="address">位置</th>
            <th v-if="called">通称</th>
            <th v-if="detail">备注</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, rowIndex) in data" :key="rowIndex">
            <td v-if="addNo" 
                :id="`${tableName}-addNo-${rowIndex}`"
                v-html="formatForHTML(item.addNo)">
            </td>
            <td v-if="address" 
                :id="`${tableName}-address-${rowIndex}`"
                v-html="item.address">
            </td>
            <td v-if="called" 
                :id="`${tableName}-called-${rowIndex}`"
                v-html="formatForHTML(item.called)">
            </td>
            <td v-if="detail" 
                :id="`${tableName}-detail-${rowIndex}`"
                v-html="item.detail">
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="$slots.footer" class="table-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </template>
  
  <script>
  import "../styles/checkbox-table.scss";
  export default {
    props: {
      data: {
        type: Array,
        required: true,
      },
      tableId: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        // Initial states for showing columns
        addNo: true,
        address: true,
        called: true,
        detail: true,
        tableName: "",
      };
    },
    created() {
        this.tableName = `vehicle-${this.tableId}`;
    },
    methods: {
      formatForHTML(content) {
        return content.replace(/\n/g, '<br>');
      }
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
  