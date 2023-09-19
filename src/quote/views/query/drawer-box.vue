<template>
  <n-drawer
    v-model:show="drawerStore.active"
    width="60%"
    :height="200"
    :trap-focus="false"
    :block-scroll="false"
    to=".quoteListDrawerTarget .n-data-table-base-table-body"
    show-mask="transparent"
  >
    <n-drawer-content :title="drawerStore.title">
      <div>在这里查看或者编辑每一行的详细信息</div>
      <div>表单模式</div>
      <div>如果是录入信息的话，宽度为100%</div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { NDrawerContent, NDrawer } from "naive-ui";
import { store as drawerStore } from "@/store/drawer";

// const store = useChildQuoteStore();
</script>
