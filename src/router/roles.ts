import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/role",
    name: "role",
    meta: {
      subtitle: "",
    },
    component: () => import("~/components/cardGrid.vue"),
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
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "权限与权限组",
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
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "权限与权限组",
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
