

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "/info",
  name: "个人信息",
  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: () => import("@/info/views/index.vue"),
};

export default routes;
