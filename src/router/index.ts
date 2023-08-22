import { baseUrl } from "../../public/qiankun.config.json";
import { createRouter, createWebHistory } from "vue-router";

import userRouter from "./users";
import rolesRouter from "./roles";

const routes: any[] = [
  ...userRouter,
  ...rolesRouter,
];

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
