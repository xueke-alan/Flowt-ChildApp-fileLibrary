<template>
  <div style="" class="quote">
    <div style="display: flex; gap: 5px">
      <n-button-group>
        <n-button ghost size="small"> 物理性能 </n-button>
        <n-button ghost size="small"> 材料耐老侯 </n-button>
        <n-button size="small"> 环境可靠性 </n-button>
        <n-button size="small"> 机械可靠性 </n-button>
        <n-button size="small"> 热分析 </n-button>
        <n-button size="small"> 成分分析 </n-button>
      </n-button-group>
      <n-dropdown size="small" trigger="click" :options="moreQueryOptions">
        <n-button size="small">
          更多类别
          <n-icon size="20" style="margin-left: 5px; color: #aaa">
            <component :is="AddSquareMultiple20Regular"></component>
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>
    <!-- TODO 文件拆分 -->
    <div style="display: flex">
      <n-input
        v-model:value="headerBarStore.searchValue"
        round
        size="small"
        type="text"
        placeholder="输入即搜索"
        style="margin-right: 10px; width: 250px"
      />
      <n-button ghost size="small" style="margin-right: 10px"> 刷新 </n-button>

      <n-button-group>
        <n-button ghost size="small"> 录入 </n-button>
      </n-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButtonGroup, NButton, NInput, NDropdown, NIcon } from "naive-ui";

import { reactive, ref, h } from "vue";
import type { Component } from "vue";
import {
  AddSquareMultiple20Regular,
  Beaker24Regular,
  CaretRight24Regular,
} from "@vicons/fluent";
import { store as headerBarStore } from "@/store/headerBar";

const paginationReactive = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [5, 10, 15],
  onChange: (page: number) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
  },
});

const renderIcon = (icon: Component) => {
  return () => {
    return h(
      NIcon,
      { size: "18" },
      {
        default: () => h(icon),
      }
    );
  };
};
const moreQueryOptions = ref([
  {
    label: "燃烧",
    key: "燃烧",
    icon: renderIcon(Beaker24Regular),
  },
  {
    label: "电学",
    key: "电学",
    icon: renderIcon(Beaker24Regular),
  },
  {
    label: "复合材料",
    key: "复合材料",
    icon: renderIcon(Beaker24Regular),
  },
  {
    label: "生物降解",
    key: "生物降解",
    icon: renderIcon(Beaker24Regular),
  },
  {
    label: "涂料",
    key: "涂料",
    icon: renderIcon(Beaker24Regular),
  },
  {
    label: "胶带",
    key: "胶带",
    icon: renderIcon(Beaker24Regular),
  },
  {
    type: "divider",
    key: "d1",
  },
  {
    label: "其他类别",
    key: "others1",
    icon: renderIcon(CaretRight24Regular),
    children: [
      {
        label: "迪卡侬",
        key: "迪卡侬",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "高分子技术服务",
        key: "高分子技术服务",
        icon: renderIcon(Beaker24Regular),
      },
    ],
  },
]);
</script>
