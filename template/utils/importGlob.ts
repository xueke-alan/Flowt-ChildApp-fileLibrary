import type { RouteRecordRaw } from "vue-router";

export interface IModuleType {
  default: Array<RouteRecordRaw> | RouteRecordRaw;
}

// 在这里放所有 import.meta.glob 代码
export const routerModulesImported = import.meta.glob<IModuleType>(
  "@/router/*.ts",
  {
    eager: true,
  }
);
