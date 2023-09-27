import { defineStore } from "pinia";
import { store as _store } from "~/stores";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useChildQuoteStore = defineStore({
  id: "child-quote-drawer",
  state: (): any => ({
    title: "报价单详情",
    active: false,
    width: "60%",
    to: ".quoteListDrawerTarget .n-data-table-base-table-body",
  }),
  getters: {
    state(s) {
      if (s.active && s.width == "100%") {
        return "openNew";
      } else if (s.active && s.width == "60%") {
        return "openView";
      } else {
        return "close";
      }
    },
  },
  actions: {
    fullShow() {
      const set = () => {
        this.width = "100%";
        this.title = "创建报价单";
        this.active = true;
        this.to = ".quoteListDrawerTarget .n-data-table-base-table";
      };
      if (this.active) {
        this.active = false;
        setTimeout(() => {
          set();
        }, 400);
      } else {
        set();
      }
    },
    reset() {
      this.$reset();
    },
  },
});

// 在setup外部使用时调用
export function useChildQuote() {
  return useChildQuoteStore(_store);
}

// 在setup内部使用时直接创建store
export const store = useChildQuoteStore();
