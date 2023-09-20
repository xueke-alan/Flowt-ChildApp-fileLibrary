<template>
  <div class="data-table-content">
    <n-spin :show="store.tableLoading">
      <n-data-table
        size="small"
        class="datatable quoteListDrawerTarget"
        :class="{ blurTable: drawerStore.active }"
        :single-line="false"
        :row-props="rowProps"
        :render-cell="renderCell"
        :columns="store.columns"
        :data="store.data"
        :style="store.tableSwitchStyle"
        :max-height="store.tableMaxHeight"
        :min-height="store.tableMinHeight"
      >
        <template #empty><br /></template>
      </n-data-table>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>
import { createVNode, onMounted, onUnmounted, watch } from "vue";
import { NDataTable, NSpin } from "naive-ui";
import { store } from "@/store/table";
import { store as drawerStore } from "@/store/drawer";
import { store as globalStore } from "~/stores/global";

const rowProps = (row: any) => {
  return {
    style: "cursor: pointer;",
    class: {
      tableRow: true,
      blurRow: drawerStore.active && row.id != store.clickedRowId,
    },
    onClick: () => {
      store.clickedRowId = row.id;
      drawerStore.active = true;
    },
  };
};

const renderCell = (value: string | number) => {
  return createVNode("div", {
    innerHTML: value,
  });
};

watch(() => globalStore.getDarkTheme, store.switchStyle);

onMounted(async () => {
  store.getData();
  store.resetTableMaxHeight();
  window.addEventListener("resize", store.resetTableMaxHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", store.resetTableMaxHeight);
});
</script>

<style scoped lang="less">
.datatable {
  opacity: 1;
  transition: height 0.6s var(--n-bezier), opacity 1s var(--n-bezier);
}
.data-table-content {
  overflow: hidden;
  flex: 1;
}
</style>

<style lang="less">
.child-quote-query {
  .n-scrollbar-container .blurRow .n-data-table-td > div {
    filter: blur(4px);
    opacity: 0.6;
  }

  .n-scrollbar-container .n-data-table-td > div {
    filter: blur(0px);
    opacity: 1;
    transition: all 0.2s ease;
  }
  .n-data-table-th__title {
    filter: blur(0px);
    opacity: 1;
    transition: all 0.2s ease;
  }
  &.blurTable {
    .n-data-table-th__title {
      filter: blur(4px);
      opacity: 0.6;
      transition: all 0.2s ease;
    }
  }
}
</style>
