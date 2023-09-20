import {
  ChartMultiple24Regular,
  Search24Regular,
  TextBulletListSquare24Regular,
  BookInformation24Regular,
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
        component: () => import("@/views/search/index.vue"),
        name: "搜索",
        meta: {
          // 一些meta信息
          icon: Search24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-two",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/query/index.vue"),
        name: "报价单",
        meta: {
          // 一些meta信息
          icon: TextBulletListSquare24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-fore",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/charts/index.vue"),
        name: "报价说明",
        meta: {
          // 一些meta信息
          icon: BookInformation24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "tab-three",
        // 父路由的component可以是从模板格式中选择
        component: () => import("@/views/charts/index.vue"),

        name: "查询统计",
        meta: {
          // 一些meta信息
          icon: ChartMultiple24Regular,
          display: "show:lazy",
        },
      },
    ],
  },
];

export default routes;
