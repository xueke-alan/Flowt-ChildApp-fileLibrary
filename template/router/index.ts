// const baseUrl = "quote";
import { microAppName as baseUrl } from "!/tsconfig.json";

import { createRouter, createWebHistory } from "vue-router";
import type { IModuleType } from "./types";

import quoteRouter from "@/router/quote";
const modules = import.meta.glob<IModuleType>("@/router/*.ts", { eager: true });
console.log(modules);
console.log(Object.values(modules));

console.log(quoteRouter);

const routes: any[] = [...quoteRouter];

// const addBaseUrl = (routers) => {
//   routers.forEach((r) => {
//     r.path = `/${baseUrl}${r.path}`;
//     if (r.redirect) {
//       r.redirect = `/${baseUrl}${r.redirect}`;
//     }
//   });
//   return routes;
// };

// // addBaseUrl(routes);

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
