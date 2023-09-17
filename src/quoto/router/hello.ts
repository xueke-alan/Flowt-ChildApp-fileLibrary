import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/search",
    name: "search",
    redirect: "/search/tab-one",
    meta: {
      subtitle: "查询测试报价，测试周期等",
    },
    // 父路由的component可以是从模板格式中选择
    component: () => import("~/components/cardTabs.vue"),
    children: [
      {
        path: "tab-one",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/hello/hello.vue"),
        name: "搜索报价单",
        meta: {
          // 一些meta信息
          icon: AppsListDetail24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-two",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/allQuotos/index.vue"),
        name: "全部报价单",
        meta: {
          // 一些meta信息
          icon: AppsListDetail24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-fore",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/hello/hello.vue"),
        name: "报价说明",
        meta: {
          // 一些meta信息
          icon: AppsListDetail24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-three",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/hello/hello.vue"),
        name: "查询统计",
        meta: {
          // 一些meta信息
          icon: AppsListDetail24Regular,
          display: "show:lazy",
        },
      },
    ],
  },
];

export default routes;
