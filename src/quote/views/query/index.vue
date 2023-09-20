<template>
  <div class="child-quote-query">
    <header-bar />
    <drawer-box />
    <data-table />
  </div>
</template>

<script lang="ts" setup>
import drawerBox from "./drawer-box.vue";
import headerBar from "./header-bar.vue";
import dataTable from "./data-table.vue";
</script>

<style scoped lang="less">
.child-quote-query {
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
}
</style>
