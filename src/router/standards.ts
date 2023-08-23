import {
  Branch24Regular,
  AppsListDetail24Regular,
  ChartPerson24Regular,
} from "@vicons/fluent";

const routes = [
  {
    path: "/standards",
    name: "标准库",
    meta: {
      subtitle: "",
    },
    component: () => import("~/components/cardGrid.vue"),
    children: [
      {
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",

        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },{
        path: "list",
        component: () => import("@/views/role/tabs/list/index.vue"),
        name: "ASTM",
        meta: {
          icon: AppsListDetail24Regular,
          display: "show",
          subtitle:'美国材料与试验协会'
        },
      },
      {
        path: "roleUser",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "ISO",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "BS,DIN,EN",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "GB,行标,团体",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "IEC,JIS",
        meta: {
          icon: ChartPerson24Regular,
          display: "show",
        },
      },
      {
        path: "preandpres",
        component: () => import("@/views/role/tabs/roleUser.vue"),
        name: "NF,KS,SUDI",
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
