const baseUrl = "account";
import { createRouter, createWebHistory } from "vue-router";

import helloRouter from "./hello";

const routes: any[] = [...helloRouter];

const addBaseUrl = (routers) => {
  routers.forEach((r) => {
    r.path = `/${baseUrl}${r.path}`;
    if (r.redirect) {
      r.redirect = `/${baseUrl}${r.redirect}`;
    }
  });
  return routes;
};

addBaseUrl(routes);

export const router = createRouter({
  history: createWebHistory(
    window["__POWERED_BY_QIANKUN__"] ? `/${baseUrl}` : "/"
  ),
  routes,
});
