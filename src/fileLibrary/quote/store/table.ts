import { defineStore } from "pinia";
import { store as _store } from "~/stores";

// useStore 可以是 useUser、useCart 之类的任何东西
import { TableColumns } from "naive-ui/es/data-table/src/interface";

type TableStore = {
  columns: TableColumns<any>;
  dataRow: any[];
  tableLoading: boolean;
  tableSwitchStyle: {};
  tableMaxHeight: string;
  clickedRowId: string;
};

export const useChildQuoteStore = defineStore({
  id: "child-quote-table",
  state: (): TableStore => ({
    columns: [
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
    ],
    dataRow: [],
    tableLoading: true,
    tableSwitchStyle: true,
    tableMaxHeight: "",
    clickedRowId: "",
  }),
  getters: {
    data: (state) => (filter: string) => {
      if (filter) {
        return state.dataRow.filter((row) => {
          const flag = Object.values(row).join("\n\n").includes(filter);
          return flag;
        });
      } else {
        return state.dataRow;
      }
    },
  },
  actions: {
    switchStyle() {
      this.tableSwitchStyle = { display: "none", opacity: 0 };
      setTimeout(() => {
        this.tableSwitchStyle = { opacity: 0 };
      }, 300);
      setTimeout(() => {
        this.tableSwitchStyle = { opacity: 1 };
      }, 400);
    },
    resetTableMaxHeight() {
      console.log('12345678900');
      
      // 获取表格容器高度
      const table = document.querySelector(".data-table-content");
      console.log(table);
      
      
      // 获取表头高度
      const header = table.querySelector(".n-data-table-base-table-header")!;
      console.log(table.clientHeight - header.clientHeight - 2);
      // 减去表头及表头border，则为表格主体高度
      this.tableMaxHeight = table.clientHeight - header.clientHeight - 2 + "px";
    },
    async getData() {
      this.dataRow = [
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
      ];
      this.tableLoading = false;
    },
  },
});

// 在setup外部使用时调用
export function useChildQuote() {
  return useChildQuoteStore(_store);
}

// 在setup内部使用时直接创建store
export const store = useChildQuoteStore();
