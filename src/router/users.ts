import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/user",
    name: "user",
    // redirect: "/user/list",
    meta: {
      subtitle: "管理实验室账户基本信息",
    },
    component: () => import("~/components/cardGrid.vue"),
    children: [
      {
        path: "list",
        component: () => import("@/views/user/tabs/list/index.vue"),
        name: "用户列表",
        meta: {
          icon: AppsListDetail24Regular,
        },
      },
      {
        path: "info",
        component: () => import("@/views/user/tabs/info/index.vue"),
        name: "用户信息",
        meta: {
          icon: ChartPerson24Regular,
        },
      },
      {
        path: "chart",
        component: () => import("@/views/user/tabs/chart/index.vue"),
        name: "组织图",
        meta: {
          icon: Branch24Regular,
        },
      },
    ],
  },
];

export default routes;
