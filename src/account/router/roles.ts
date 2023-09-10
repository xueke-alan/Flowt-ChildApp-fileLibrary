import {
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/role",
    name: "role",
    redirect: "/role/list",
    meta: {
      subtitle: "定义角色，管理角色继承，分配角色与权限",
    },
    component: () => import("~/components/cardTabs.vue"),
    children: [
      {
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "角色权限分配",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
        },
      },
      {
        path: "roleUser",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "用户角色分配",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "权限与权限组",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
    ],
  },
];

export default routes;
