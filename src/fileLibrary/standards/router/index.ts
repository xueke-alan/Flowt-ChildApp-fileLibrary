import { ChartPerson24Regular } from "@vicons/fluent";
import ASTMBackground from "../img/astm.vue";
import { RouteRecordRaw } from "vue-router";
import cardGrid from "~/components/cardGrid.vue";
const routes: RouteRecordRaw = {
  path: "/standards",
  name: "标准库",

  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: cardGrid,
  children: [
    {
      path: "view",
      component: () => import("@/standards/views/view.vue"),
      name: "standardsView",
      meta: {
        hidden: true,
      },
    },
    {
      path: "ASTM",
      component: () => import("@/standards/views/table.vue"),
      name: "ASTM",
      meta: {
        subtitle: "美国材料与试验协会",
        background: ASTMBackground,
      },
    },
    {
      path: "ISO",
      component: () => import("@/standards/views/table.vue"),
      name: "ISO",
      meta: {
        icon: ChartPerson24Regular,
        display: "show",
        background: ASTMBackground,
      },
    },
    {
      path: "preandpres",
      component: () => import("@/standards/views/table.vue"),
      name: "BS,DIN,EN",
      meta: {
        icon: ChartPerson24Regular,
        display: "show",
      },
    },
    {
      path: "preandpres2",
      component: () => import("@/standards/views/table.vue"),
      name: "GB,行标,团体",
      meta: {
        icon: ChartPerson24Regular,
        display: "show",
      },
    },
    {
      path: "preandpres3",
      component: () => import("@/standards/views/table.vue"),
      name: "IEC,JIS",
      meta: {
        icon: ChartPerson24Regular,
        display: "show",
      },
    },
  ],
};

export default routes;
