<template>
    <div>
      <!-- Checkboxes to toggle column visibility -->
      <div class="checkbox-table">
        <label :for="`${tableName}-image`">
          <input type="checkbox" :id="`${tableName}-image`" v-model="image" />
          图片
        </label>
        <label :for="`${tableName}-type`">
          <input type="checkbox" :id="`${tableName}-type`" v-model="type" />
          车种
        </label>
        <label :for="`${tableName}-maker`">
          <input type="checkbox" :id="`${tableName}-maker`" v-model="maker" />
          制造商
        </label>
        <label :for="`${tableName}-name`">
          <input type="checkbox" :id="`${tableName}-name`" v-model="name" />
          车辆名字
        </label>
        <label :for="`${tableName}-date`">
          <input type="checkbox" :id="`${tableName}-date`" v-model="date" />
          入手日
        </label>
        <label :for="`${tableName}-detail`">
          <input type="checkbox" :id="`${tableName}-detail`" v-model="detail" />
          详细
        </label>
        <label :for="`${tableName}-purchase`">
          <input type="checkbox" :id="`${tableName}-purchase`" v-model="purchase" />
          购买处 · 改装担当
        </label>
      </div>
  
      <table class="table-hidden checkbox-table" cellspacing="5" cellpadding="5">
        <thead>
          <tr>
            <th v-if="image">图片</th>
            <th v-if="type">车种</th>
            <th v-if="maker">制造商</th>
            <th v-if="name">车辆名字</th>
            <th v-if="date">入手日</th>
            <th v-if="detail">详细</th>
            <th v-if="purchase">购买处 · 改装担当</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, rowIndex) in data" :key="rowIndex">
            <td v-if="image" 
                :id="`${tableName}-image-${rowIndex}`"
                v-html="item.image">
            </td>
            <td v-if="type" 
                :id="`${tableName}-type-${rowIndex}`"
                v-html="formatForHTML(item.type)">
            </td>
            <td v-if="maker" 
                :id="`${tableName}-maker-${rowIndex}`"
                v-html="formatForHTML(item.maker)">
            </td>
            <td v-if="name" 
                :id="`${tableName}-name-${rowIndex}`"
                v-html="formatForHTML(item.name)"
                style="font-weight: bold;">
            </td>
            <td v-if="date" 
                :id="`${tableName}-date-${rowIndex}`"
                v-html="formatForHTML(item.date)">
            </td>
            <td v-if="detail" 
                :id="`${tableName}-detail-${rowIndex}`"
                v-html="item.detail">
            </td>
            <td v-if="purchase" 
                :id="`${tableName}-purchase-${rowIndex}`"
                v-html="item.purchase">
            </td>
          </tr>
        </tbody>
      </table>
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
        image: false,
        type: true,
        maker: false,
        name: true,
        date: true,
        detail: true,
        purchase: true,
        tableName: "",
      };
    },
    created() {
      this.image = this.tableId === 'favorite' ? true : false;
      this.tableName = `vehicle-${this.tableId}`;
    },
    methods: {
      formatForHTML(content) {
        return content.replace(/\n/g, '<br>');
      //   if (content) {
      //   // Split content into lines
      //   const lines = content.split('\n');
      //   // Wrap the first line in a <span> for bold styling and join back with <br>
      //   return `<span class="bold-first-line">${lines[0]}</span>${lines.slice(1).join('<br>')}`;
      //   }
      // return content;
      }
    }
  };
  </script>

<style scoped>
.bold-first-line {
  font-weight: bold; /* Make the first line bold */
}
</style>
  