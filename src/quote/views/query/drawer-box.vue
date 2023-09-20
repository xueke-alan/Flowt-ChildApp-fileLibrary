<template>
  <n-drawer
    v-model:show="store.active"
    :width="store.width"
    :height="200"
    :trap-focus="false"
    :on-after-leave="afterLeave"
    :block-scroll="false"
    :to="store.to"
    show-mask="transparent"
  >
    <n-drawer-content closable>
      <template #header>
        <div style="display: flex; align-items: center; gap: 10px">
          <n-icon size="24">
            <component :is="SlideText48Regular"></component>
          </n-icon>
          <span>{{ store.title }}</span>
        </div>
      </template>
      <div>在这里查看或者编辑每一行的详细信息</div>
      <div>表单模式</div>
      <div>如果是录入信息的话，宽度为100%</div>
    </n-drawer-content>
  </n-drawer>
</template>

<script lang="ts" setup>
import { NDrawerContent, NDrawer, NIcon } from "naive-ui";
import { SlideText48Regular } from "@vicons/fluent";
import { store } from "@/store/drawer";
import { store as tableStore } from "@/store/table";
import { onUnmounted } from "vue";

const afterLeave = () => {
  store.reset();
  tableStore.clickedRowId = "";
};
// const store = useChildQuoteStore();
onUnmounted(() => {
  store.reset();
  tableStore.clickedRowId = "";
});
</script>
