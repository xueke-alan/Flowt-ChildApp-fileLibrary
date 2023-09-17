<template>
  <div
    style="display: flex; justify-content: space-between; margin-bottom: 8px"
  >
    <div style="display: flex; gap: 5px">
      <n-button-group>
        <n-button ghost size="small"> 物理性能 </n-button>
        <n-button ghost size="small"> 材料耐老侯 </n-button>
        <n-button size="small"> 环境可靠性 </n-button>
        <n-button size="small"> 机械可靠性 </n-button>
        <n-button size="small"> 热分析 </n-button>
        <n-button size="small"> 成分分析 </n-button>
        <!-- <n-button size="small"> 燃烧 </n-button>
        <n-button size="small"> 电学 </n-button>
        <n-button size="small"> 复合材料 </n-button>
        <n-button size="small"> 生物降解 </n-button>
        <n-button size="small"> 涂料 </n-button>
        <n-button size="small"> 胶带 </n-button> -->
      </n-button-group>
      <n-dropdown size="small" trigger="click" :options="moreQueryOptions">
        <n-button size="small">
          更多类别
          <n-icon size="15" style="margin-left: 5px; color: #aaa">
            <component :is="ArrowDownload16Filled"></component>
          </n-icon>
        </n-button>
      </n-dropdown>
    </div>

    <div style="display: flex">
      <n-input
        v-model:value="value"
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
  <n-spin :show="tableLoading" style="height: 100%">
    <n-data-table
      ref="myTable"
      class="datatable"
      striped
      :columns="(columns as TableColumns<any>)"
      :data="[...data]"
      size="small"
      :style="tableSwitchStyle"
      :single-line="false"
      :row-props="rowProps"
      :max-height="tableMaxHeight"
      :min-height="data.length > 0 ? '' : tableMaxHeight"
      :scroll-x="2400"
    >
      <template #empty><br /></template>
    </n-data-table>
  </n-spin>
</template>

<script lang="ts" setup>
import {
  NDataTable,
  NButtonGroup,
  NButton,
  NInput,
  NSpin,
  NDropdown,
  NIcon,
} from "naive-ui";
import { onMounted, reactive, ref, watch, toRef, onUnmounted, h } from "vue";
import { useRouter } from "vue-router";
import type { Component } from "vue";
import type { DataTableColumns } from "naive-ui";
import {
  ArrowDownload16Filled,
  Beaker24Regular,
  CaretRight24Regular,
} from "@vicons/fluent";
import { TableColumns } from "naive-ui/es/data-table/src/interface";
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
const router = useRouter();

// 监听主题变化，卸载大Dom数量组件
import { useGlobalSetting } from "~/stores/global";
const globalStore = useGlobalSetting();

console.log(globalStore.darkTheme);

const tableLoading = ref(true);
const tableMaxHeight = ref("0");
const tableSwitchStyle = ref({});

// TODO 还要监听侧边栏收起 需要拿数据
watch(
  () => globalStore.getDarkTheme,
  () => {
    tableSwitchStyle.value = { display: "none", opacity: 0 };
    setTimeout(() => {
      tableSwitchStyle.value = { opacity: 0 };
    }, 300);
    setTimeout(() => {
      tableSwitchStyle.value = { opacity: 1 };
    }, 400);
  }
);

const rowProps = (row: any) => {
  return {
    style: "cursor: pointer;",
    // onClick: () => {
    //   router.push({
    //     path: "info",
    //     query: { staffId: row.staffId },
    //   });
    // },
  };
};

const columns = ref<any[]>([
  {
    title: "测试项目",
    key: "staffId",
    width: "200",
    fixed: "left",
  },
  {
    title: "测试参数",
    key: "username",
    width: "200",
    fixed: "left",
  },
  {
    title: "测试标准",
    key: "usernameCn",
    width: "200",
    fixed: "left",
  },
  {
    title: "价格(￥)",
    key: "gender",
    width: "200",
  },
  {
    title: "TAT",
    key: "email",
    width: "200",
  },
  {
    title: "样品要求",
    key: "mobile",
    width: "200",
  },
  {
    title: "能力范围",
    width: "200",
    key: "shortDir",
  },
  {
    title: "必须确认参数条件",
    width: "200",
    key: "group",
  },
  {
    title: "备注",
    width: "200",
    key: "备注",
  },
  {
    title: "实验室能力",
    width: "200",
    key: "实验室能力",
  },
  {
    title: "CNAS",
    width: "200",
    key: "CNAS",
  },
  {
    title: "CMA",
    width: "200",
    key: "CMA",
  },
]);

const data = ref<any[]>([
  {
    staffId: "200",
    username: "200",
    usernameCn: 1,
    gender: 1,
    mobile: 1,
    hortDir: 1,
    group: 1,
    备注: 1,
    实验室能力: 1,
    CNAS: 1,
    CMA: 1,
  },
]);
const value = ref("");

const myTable = ref();

function resetTableMaxHeight() {
  const myTableValue = toRef(myTable, "value"); // 使用toRef创建响应式引用
  console.log(myTableValue);
  const myTableEl = myTableValue.value?.$el;
  if (myTableEl) {
    const parentHeight =
      myTableEl.parentElement.parentElement.parentElement.clientHeight;
    const topDistance = myTableEl.parentElement.parentElement.offsetTop;
    tableMaxHeight.value = parentHeight - 60 - topDistance + "px";
  }
}

onMounted(async () => {
  // 根据页码拿到全部的user数据
  // await getUserList();
  tableLoading.value = false;
  resetTableMaxHeight();
  window.addEventListener("resize", resetTableMaxHeight);
});
onUnmounted(() => {
  window.removeEventListener("resize", resetTableMaxHeight);
});
</script>

<style scoped lang="less">
.datatable {
  opacity: 1;
  transition: height 0.6s var(--n-bezier), opacity 1s var(--n-bezier);

  // &.tablehide {
  //   opacity: 0;
  //   display: none;

  // }
}
</style>
