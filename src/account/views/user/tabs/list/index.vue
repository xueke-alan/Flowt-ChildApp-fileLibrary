<template>
  <div>


    <div style="display: flex;justify-content: space-between;margin-bottom: 8px;">
      <n-button-group>
        <n-button ghost size="small">
          正式员工
        </n-button>
        <n-button ghost size="small">
          外包员工
        </n-button>
        <n-button size="small">
          实习生
        </n-button>
        <n-button size="small">
          准入职
        </n-button>
        <n-button size="small">
          已离职
        </n-button>
      </n-button-group>

      <div style="display: flex;">
        <n-input v-model:value="value" round size="small" type="text" placeholder="工号/姓名/分机/分组"
          style="margin-right: 10px;width: 250px;" />
        <n-button ghost size="small" style="margin-right: 10px;" @click="getUserList">
          刷新
        </n-button>

        <n-button-group>
          <n-button ghost size="small">
            录入
          </n-button>

        </n-button-group>
      </div>
    </div>
    <n-spin :show="tableLoading" style="height: 100%;">
      <n-data-table ref="myTable" class="datatable" striped :columns="(columns as TableColumns<any>)" :data="[...data]"
        size="small" :style="tableSwitchStyle" :single-line="false" :row-props="rowProps" :max-height="tableMaxHeight"
        :min-height="data.length > 0 ? '' : tableMaxHeight">
        <template #empty><br></template>
      </n-data-table>
    </n-spin>
  </div>
</template>

<script lang="ts" setup>

import { NDataTable, NButtonGroup, NButton, NInput, NSpin } from 'naive-ui'
import { onMounted, reactive, ref, watch, toRef, onUnmounted } from 'vue';
import { useRouter } from "vue-router";
import { getUserAll } from "@/api/user";
import { TableColumns } from 'naive-ui/es/data-table/src/interface';
const paginationReactive = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [5, 10, 15],
  onChange: (page: number) => {
    paginationReactive.page = page
  },
  onUpdatePageSize: (pageSize: number) => {
    paginationReactive.pageSize = pageSize
    paginationReactive.page = 1
  }
})



const router = useRouter()








const tableLoading = ref(true)
const tableMaxHeight = ref("0")
const tableSwitchStyle = ref({})



const rowProps = (row: any) => {
  return {
    style: 'cursor: pointer;',
    onClick: () => {
      router.push({
        path: 'info',
        query: { staffId: row.staffId }
      });
    }
  }
}

const columns = ref<any[]>([
  {
    title: '工号',
    key: 'staffId',
    width: 100,
  },
  {
    title: '姓名',
    key: 'username',
    width: 120,
    titleColSpan: 2,
    titleAlign: 'center',
  },
  {
    title: '中文名',
    key: 'usernameCn',
    width: 80,
  },
  {
    title: '性别',
    key: 'gender',
    width: 50,
    titleAlign: 'center',
    align: 'center',
    render: ({ gender }) => {
      return gender == 'M' ? "男" : "女"
    }
  },
  {
    title: '邮箱',
    key: 'email',
    width: 120,
  },
  {
    title: '手机号',
    key: 'mobile',
    width: 100,
  },
  {
    title: '分机号',
    key: 'shortDir',
    width: 100,
  },
  {
    title: '分组',
    key: 'group',
    width: 80,
    filterOptions: [
      {
        label: 'PH',
        value: 'PH'
      },
      {
        label: 'QA',
        value: 'QA'
      }
    ],
    filter(value, row) {
      return ~row.group.indexOf(value)
    }
  }
])

const data = ref<any[]>([]);
const value = ref("");

const myTable = ref();

function resetTableMaxHeight() {
  const myTableValue = toRef(myTable, 'value'); // 使用toRef创建响应式引用
  console.log(myTableValue);
  const myTableEl = myTableValue.value?.$el
  if (myTableEl) {
    const parentHeight = myTableEl.parentElement.parentElement.parentElement.clientHeight;
    const topDistance = myTableEl.parentElement.parentElement.offsetTop;
    tableMaxHeight.value = (parentHeight - 60 - topDistance) + 'px'
  }
}
async function getUserList() {
  tableLoading.value = true
  const { users } = await getUserAll({ page: 1, pagesize: 500 })
  data.value = users;
  tableLoading.value = false
}


onMounted(async () => {
  // 根据页码拿到全部的user数据
  await getUserList()
  tableLoading.value = false
  resetTableMaxHeight()
  window.addEventListener('resize', resetTableMaxHeight);
})
onUnmounted(() => {
  window.removeEventListener('resize', resetTableMaxHeight);
});

</script>

<style scoped lang="less">
.datatable {
  opacity: 1;
  transition: height .6s var(--n-bezier), opacity 1s var(--n-bezier);


}
</style>