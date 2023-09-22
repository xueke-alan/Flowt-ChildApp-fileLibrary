import {
  ChartMultiple24Regular,
  Search24Regular,
  TextBulletListSquare24Regular,
  BookInformation24Regular,
} from "@vicons/fluent";
import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    name: "quote",
    // redirect: "/query/search",
    meta: {
      subtitle: "查询测试报价，测试周期等",
    },
    component: () => import("~/components/cardTabs.vue"),
    children: [
      {
        path: "search",
        component: () => import("@/views/search/index.vue"),
        name: "搜索",
        meta: {
          icon: Search24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "query",
        component: () => import("@/views/query/index.vue"),
        name: "报价单",
        meta: {
          icon: TextBulletListSquare24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "detail",
        component: () => import("@/views/detail/index.vue"),
        name: "报价说明",
        meta: {
          icon: BookInformation24Regular,
          display: "show:lazy",
        },
      },
      {
        path: "charts",
        component: () => import("@/views/charts/index.vue"),

        name: "查询统计",
        meta: {
          icon: ChartMultiple24Regular,
          display: "show:lazy",
        },
      },
    ],
  },
];

export default routes;
