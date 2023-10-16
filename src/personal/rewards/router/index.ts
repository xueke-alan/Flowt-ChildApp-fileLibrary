

import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw = {
  path: "/rewards",
  name: "Rewards",
  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: () => import("@/rewards/views/index.vue"),
};

export default routes;
