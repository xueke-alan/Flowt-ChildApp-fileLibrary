<template>
  <n-tree block-line :data="data" :default-expanded-keys="defaultExpandedKeys" checkable expand-on-click selectable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { NTree } from "naive-ui";

import { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    key: 0,
    label: "总览面板",
  },
  {
    key: 1,
    label: "管理员 (组:2/2)",
    // checkboxDisabled: 1,
    children: [
      {
        key: 2,
        label: "路由管理",
      },
      {
        key: 3,
        label: "全局消息",
      },
    ]
  }
]
const defaultExpandedKeys = ref(['40', '41'])


</script>