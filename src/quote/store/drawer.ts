import { defineStore } from "pinia";
import { store as _store } from "~/stores";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useChildQuoteStore = defineStore({
  id: "child-quote-drawer",
  state: (): any => ({
    title: "报价单详情",
    active: false,
  }),
  getters: {},
  actions: {},
});

// 在setup外部使用时调用
export function useChildQuote() {
  return useChildQuoteStore(_store);
}

// 在setup内部使用时直接创建store
export const store = useChildQuoteStore();
