// const baseUrl = "quote";
import { microAppName as baseUrl } from "!/tsconfig.json";
import { createRouter, createWebHistory } from "vue-router";

import childAppRouter from "@/router";

childAppRouter.forEach((r) => {
  r.path = `/${baseUrl}${r.path}`;
  r.redirect = r.redirect ? `/${baseUrl}${r.redirect}` : undefined;
});

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes: childAppRouter,
});
