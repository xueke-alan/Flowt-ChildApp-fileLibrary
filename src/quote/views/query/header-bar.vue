<template>
  <div style="" class="header-bar">
    <div style="display: flex; gap: 5px">

      <n-button-group>
        <n-button ghost size="small" v-for="o in store.options">
          {{ o }}
        </n-button>
      </n-button-group>

      <n-dropdown size="small" trigger="click" :options="store.moreOptions">
        <n-button size="small">
          更多类别
          <n-icon size="20" style="margin-left: 5px; color: #aaa">
            <component :is="AddSquareMultiple20Regular"></component>
          </n-icon>
        </n-button>
      </n-dropdown>

    </div>

    <div style="display: flex">
      <n-input
        v-model:value="store.searchValue"
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
import { AddSquareMultiple20Regular } from "@vicons/fluent";
import { store } from "@/store/headerBar";
</script>

<style scoped lang="less">
.header-bar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
</style>
