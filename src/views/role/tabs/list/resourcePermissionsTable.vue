<template>
  <n-data-table size="small" :columns="columns" :row-key="rowKey" :data="data" :pagination="false" :bordered="false"
    @update:checked-row-keys="handleCheck" default-expand-all />
</template>

<script lang="ts" setup>

import type { DataTableColumns } from 'naive-ui'
import { NDataTable } from 'naive-ui'


type RowData = {
  name: string
  index: string
  children?: RowData[]
}
const rowKey = (row) => row.index
const handleCheck = () => {
  // checkedRowKeysRef.value = rowKeys
}


const columns: DataTableColumns<RowData> = [
  {
    type: 'selection'
  },
  {
    title: '权限（组织结构）',
    key: 'name',
    width: 200
  },
  {
    title: '',
    key: 'index'
  }
]


const data: RowData[] = [
  {
    name: '用户编辑权限',
    index: '07',
    children: [
      {
        name: '修改用户信息',
        index: '08',
        children: [
          {
            name: '修改个人信息',
            index: '09'
          },
          {
            name: '修改工作信息',
            index: '10'
          }
        ]
      }
    ]
  },
  {
    name: '11akioni',
    index: '11'
  }
]


</script>