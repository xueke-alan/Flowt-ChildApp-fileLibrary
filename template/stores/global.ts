import { defineStore } from "pinia";
import { store as _store } from "~/stores";

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
export const useGlobalSettingStore = defineStore({
  id: "child-global-setting",
  state: (): any => ({

  }),
  getters: {},
  actions: {},
});

// 在setup内部使用时直接创建store
export const store = useGlobalSetting();

// 在setup外部使用
export function useGlobalSetting() {
  return useGlobalSettingStore(_store);
}

