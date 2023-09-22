import type { RouteRecordRaw } from "vue-router";
import { microAppName as baseUrl } from "!/tsconfig.json";

export interface IModuleType {
  default: Array<RouteRecordRaw> | RouteRecordRaw;
}

// 在这里放所有 import.meta.glob 代码

export const routerModules: RouteRecordRaw[] = (() => {
  const routes: RouteRecordRaw[] = [];

  const addBaseUrl = (routers) => {
    return routers.map((r) => {
      const updatedRoute = { ...r }; // 创建一个新对象以避免直接修改原始对象
      updatedRoute.path = `/${baseUrl}${r.path}`;
      if (updatedRoute.redirect) {
        updatedRoute.redirect = `/${baseUrl}${r.redirect}`;
      }
      return updatedRoute;
    });
  };

  const routerModulesImported = import.meta.glob<IModuleType>("@/router/*.ts", {
    eager: true,
  });

  for (const path in routerModulesImported) {
    routes.push(...addBaseUrl(routerModulesImported[path].default));
  }

  return routes;
})();
