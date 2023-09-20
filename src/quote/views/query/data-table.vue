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
        :data="store.data(headerBarStore.searchValue)"
        :style="store.tableSwitchStyle"
        :max-height="store.tableMaxHeight"
        :min-height="store.data.length > 0 ? '' : store.tableMaxHeight"
      >
        <template #empty><br /></template>
      </n-data-table>
    </n-spin>

    <n-dropdown
      placement="bottom-start"
      trigger="manual"
      :x="x"
      :y="y"
      size="small"
      :options="options"
      :show="showDropdown"
      :on-clickoutside="onClickoutside"
      @select="handleSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  createVNode,
  h,
  nextTick,
  onMounted,
  onUnmounted,
  ref,
  watch,
} from "vue";
import { DropdownOption, NDataTable, NSpin, NDropdown } from "naive-ui";
import { store } from "@/store/table";
import { store as drawerStore } from "@/store/drawer";
import { store as headerBarStore } from "@/store/headerBar";
import { store as globalStore } from "~/stores/global";
import { renderIcon } from "~/utils";
import { Beaker24Regular } from "@vicons/fluent";

const rowProps = (row: any) => {
  return {
    style: "cursor: pointer;",
    class: {
      tableRow: true,
      selectedRow: drawerStore.active && row.id == store.clickedRowId,
      // blurRow: drawerStore.active && row.id != store.clickedRowId,
    },
    onContextmenu: (e) => {
      // e.preventDefault();
      store.clickedRowId = row.id;
      // drawerStore.active = true;

      e.preventDefault();
      showDropdown.value = false;
      nextTick().then(() => {
        showDropdown.value = true;
        x.value = e.clientX;
        y.value = e.clientY;
      });
    },
  };
};

const renderCell = (value: string | number) => {
  return createVNode("div", {
    innerHTML: value,
  });
};

const showDropdown = ref(false);
const x = ref(0);
const y = ref(0);
const options: DropdownOption[] = [
  {
    label: "查看详细信息",
    key: "edit",
    icon: renderIcon(Beaker24Regular),
    props: {
      onClick: (r) => {
        console.log(r);

        // store.clickedRowId = row.id;
        drawerStore.active = true;
      },
    },
  },
  {
    label: () => h("span", { style: { color: "red" } }, "复制本行信息"),
    key: "delete",
  },
];
const handleSelect = (option) => {
  console.log(option);

  showDropdown.value = false;
};
const onClickoutside = () => {
  showDropdown.value = false;
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
.data-table-content {
  overflow: hidden;
  flex: 1;
  .datatable {
    opacity: 1;
    transition: height 0.6s var(--n-bezier), opacity 1s var(--n-bezier);
  }
}
</style>

<style lang="less">
.child-quote-query {
  // 条纹状
  .tableRow:nth-child(2n) .n-data-table-td {
    background-color: var(--n-th-color);
  }
  // hover行
  .tableRow:hover {
    .n-data-table-td {
      background-color: var(--n-th-color-hover);
    }
  }
  // 处理模糊

  .datatable {
    .n-data-table-th__title {
      filter: blur(0px);
      opacity: 1;
      transition: all 0.2s ease;
    }
    .n-data-table-td > div {
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
      .n-data-table-td > div {
        filter: blur(4px);
        opacity: 0.6;
      }
    }

    .selectedRow {
      // position: relative;
      & td:first-child::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 2px;
        background-color: var(--n-th-icon-color-active);
      }
      .n-data-table-td {
        background-color: var(--n-th-color-hover);
        & > div {
          filter: blur(0px);
          opacity: 1;
        }
      }
    }
  }

  // .n-scrollbar-container {
  //   .n-data-table-td > div {
  //     filter: blur(0px);
  //     opacity: 1;
  //     transition: all 0.2s ease;
  //   }
  //   .blurRow .n-data-table-td > div {
  //     filter: blur(4px);
  //     opacity: 0.6;
  //   }
  // }
  // .n-scrollbar-container .n-data-table-th__title {
  //   filter: blur(0px);
  //   opacity: 1;
  //   transition: all 0.2s ease;
  // }
}
</style>
