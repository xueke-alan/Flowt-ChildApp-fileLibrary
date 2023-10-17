import { RouteRecordRaw } from "vue-router";
import sideView from "~/views/sideView.vue";

const routes: RouteRecordRaw = {
  path: "/",
  name: "personal",
  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: sideView,
  children: [
    {
      path: "equip",
      name: "equip",
      component: () => import("@/unique/views/equip.vue"),
    },
    {
      path: "security",
      name: "security",
      component: () => import("@/unique/views/security.vue"),
    },
    {
      path: "info",
      name: "info",
      component: () => import("@/unique/views/info.vue"),
    },
    {
      path: "rewards",
      name: "rewards",
      component: () => import("@/unique/views/rewards.vue"),
    },
  ],
};

export default routes;
