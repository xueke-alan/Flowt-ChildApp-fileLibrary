import { renderIcon } from "!/template/utils";
import { Reward24Regular, ShieldKeyhole24Regular, TabInprivateAccount24Regular, TvUsb24Regular } from "@vicons/fluent";
import { RouteRecordRaw } from "vue-router";
import sideView from "~/views/sideView.vue";

const routes: RouteRecordRaw = {
  path: "/",
  name: "personal",
  meta: {
    subtitle: "包含所有的标准，可选择分类方式",
    iconName: 'PersonTag24Regular'
  },
  component: sideView,
  children: [
    {
      path: "security",
      name: "账号安全",
      component: () => import("@/unique/views/security.vue"),
      meta: {
        icon: renderIcon(TabInprivateAccount24Regular),
        breadcrumb: false,
        divider: true
      }
    },
    {
      path: "info",
      name: "个人信息",
      component: () => import("@/unique/views/info.vue"),
      meta: {
        icon: renderIcon(ShieldKeyhole24Regular),
        breadcrumb: false,

      }
    },
    {
      path: "equip",
      name: "设备",
      component: () => import("@/unique/views/equip.vue"),
      meta: {
        breadcrumb: false,
        icon: renderIcon(TvUsb24Regular),
      }
    },
    {
      path: "rewards",
      name: "Rewards",
      component: () => import("@/unique/views/rewards.vue"),
      meta: {
        breadcrumb: false,
        icon: renderIcon(Reward24Regular),
      }
    },
  ],
};

export default routes;
