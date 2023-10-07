// const baseUrl = "quote";
import { microAppName as baseUrl } from "!/tsconfig.json";
import { IModuleType } from "!/template/utils/importGlob";
import { createRouter, createWebHistory } from "vue-router";

// 按目录引入路由结构
const routesImport = import.meta.glob<IModuleType>('@/*/router/index.ts', { eager: true });
const childAppRouter = Object.values(routesImport).map(({ default: d }) => d);


childAppRouter.forEach((r) => {
  r.path = `/${baseUrl}${r.path}`;
  r.redirect = r.redirect ? `/${baseUrl}${r.redirect}` : undefined;
});


childAppRouter.push({
  path: `/${baseUrl}`,
  name: `${baseUrl}_base`,
  redirect: childAppRouter[0].path,
})

console.log(childAppRouter);


export const router = createRouter({
  history: createWebHistory(),
  routes: childAppRouter,
});
