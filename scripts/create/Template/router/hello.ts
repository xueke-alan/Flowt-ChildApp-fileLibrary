import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    // 账户管理表，分为三个子路由，使用cardTabs渲染路由
    path: "/youPath",
    name: "youRouterName",
    redirect: "/youPath/defaultChildRouterName",
    meta: {
      subtitle: "subtitle",
    },
    // 父路由的component可以是从模板格式中选择
    component: () => import("~/components/cardTabs.vue"),
    children: [
      {
        path: "child",
        // 父路由的component可以是从模板格式中选择
        component: () => import(""),
        name: "child",
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
