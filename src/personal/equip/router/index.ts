

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "/equip",
  name: "设备归属",
  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: () => import("@/equip/views/index.vue"),
};

export default routes;
