// const baseUrl = "quote";
import { microAppName as baseUrl } from "!/tsconfig.json";
import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import { routerModulesImported } from "~/utils/importGlob";

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

for (const path in routerModulesImported) {
  routes.push(...addBaseUrl(routerModulesImported[path].default));
}

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
