import {
  ChartMultiple24Regular,
  Search24Regular,
  TextBulletListSquare24Regular,
  BookInformation24Regular,
} from "@vicons/fluent";
import { RouteRecordRaw } from "vue-router";
import cardTabs from "~/components/cardTabs.vue";
const routes: RouteRecordRaw = {
  path: "/quote",
  name: "quote",
  redirect: "/quote/search",
  meta: {
    subtitle: "查询测试报价，测试周期等",
  },
  component: cardTabs,
  children: [
    {
      path: "search",
      component: () => import("@/quote/views/search/index.vue"),
      name: "搜索",
      meta: {
        icon: Search24Regular,
        display: "show:lazy",

      },
    },
    {
      path: "query",
      component: () => import("@/quote/views/query/index.vue"),
      name: "报价单",
      meta: {
        icon: TextBulletListSquare24Regular,
        display: "show:lazy",
      },
    },
    {
      path: "detail",
      component: () => import("@/quote/views/detail/index.vue"),
      name: "报价说明",
      meta: {
        icon: BookInformation24Regular,
        display: "show:lazy",
      },
    },
    {
      path: "charts",
      component: () => import("@/quote/views/charts/index.vue"),

      name: "查询统计",
      meta: {
        icon: ChartMultiple24Regular,
        display: "show:lazy",
      },
    },
  ],
};

export default routes;
