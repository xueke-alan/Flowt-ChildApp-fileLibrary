<template>
  <n-data-table
    ref="myTable"
    class="datatable quoteListDrawerTarget"
    :class="{ blurTable: drawerStore.active }"
    striped
    :columns="(columns as TableColumns<any>)"
    :data="[...data]"
    size="small"
    :style="tableSwitchStyle"
    :single-line="false"
    :row-props="rowProps"
    :max-height="tableMaxHeight"
    :min-height="data.length > 0 ? '' : tableMaxHeight"
    :render-cell="renderCell"
  >
    <template #empty><br /></template>
  </n-data-table>
</template>

<script lang="ts" setup>
import { store as dataTableStore } from "@/store/table";
import { store as drawerStore } from "@/store/drawer";

import { NDataTable } from "naive-ui";
import { TableColumns } from "naive-ui/es/data-table/src/interface";

const tableLoading = ref(true);
const tableMaxHeight = ref("0");
const tableSwitchStyle = ref({});
const columns = ref<any[]>([
  {
    title: "测试项目",
    key: "测试项目",
    width: "150",
    fixed: "left",
  },

  {
    title: "测试标准",
    key: "测试标准",
    width: "200",
    fixed: "left",
  },
  {
    title: "测试参数",
    key: "测试参数",
    width: "200",
  },
  {
    title: "价格",
    key: "价格",
    width: "200",
  },
  {
    title: "TAT",
    key: "TAT",
    width: "200",
  },
  {
    title: "样品要求",
    key: "样品要求",
    width: "200",
  },
  {
    title: "能力范围",
    key: "能力范围",
    width: "200",
  },
  {
    title: "必须确认参数条件",
    key: "必须确认参数条件",
    width: "200",
  },
  {
    title: "备注",
    key: "备注",
    width: "200",
  },
  {
    title: "实验室能力",
    key: "实验室能力",
    width: "200",
  },
  {
    title: "CNAS",
    key: "CNAS",
    width: "200",
  },
  {
    title: "CMA",
    key: "CMA",
    width: "200",
  },
]);
const data = ref<any[]>([
  {
    id: 1,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 2,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 3,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 4,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 5,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 6,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 7,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 8,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 9,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 10,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
  {
    id: 11,
    测试项目: "<div>邵氏硬度</div><div>Shore Hardness</div>",
    测试参数: "硬度值<br> Hardness value",
    测试标准: "ASTM D2240-15ε1<br> 用硬度计测定橡胶硬度的试验方法",
    价格: 5,
    TAT: 1,
    样品要求: 1,
    能力范围: 1,
    必须确认参数条件: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
]);
const rowProps = (row: any) => {
  return {
    style: "cursor: pointer;",
    class: { blurRow: drawerStore.active && row.id != clickedRowId.value },
    onClick: () => {
      drawerStore.active = true;
      clickedRowId.value = row.id;
    },
  };
};
const renderCell = (value: string | number) => {
  return createVNode("div", {
    innerHTML: value,
  });
};
</script>
