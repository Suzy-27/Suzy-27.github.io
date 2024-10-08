<template>
    <div class="lastUpdated">
      最后更新：{{ lastUpdated || 'Loading...' }}
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        lastUpdated: null,
      };
    },
    mounted() {
      this.fetchLastUpdatedDate();
    },
    methods: {
      async fetchLastUpdatedDate() {
        try {
          const response = await fetch('/lastUpdated.txt');
          if (!response.ok) {
            throw new Error('Failed to fetch the last updated date');
          }
          const text = await response.text();
          this.lastUpdated = text.trim();
        } catch (error) {
          console.error('Error fetching last updated date:', error);
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
    .lastUpdated {
        margin: 0 20px 0 5px;
    }
  </style>