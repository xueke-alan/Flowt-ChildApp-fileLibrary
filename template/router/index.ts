// const baseUrl = "quote";
import { microAppName as baseUrl } from "!/tsconfig.json";
import { createRouter, createWebHistory } from "vue-router";
import { routerModules as routes } from "~/utils/importGlob";

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
