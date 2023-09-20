import { defineStore } from "pinia";
import { store as _store } from "~/stores";
import { h } from "vue";
import type { Component } from "vue";
import { NIcon } from "naive-ui";
import { Beaker24Regular, CaretRight24Regular } from "@vicons/fluent";

const renderIcon = (icon: Component) => {
  return () => {
    return h(
      NIcon,
      { size: "18" },
      {
        default: () => h(icon),
      }
    );
  };
};

export const useChildQuoteStore = defineStore({
  id: "child-quote-headerBar",
  state: (): any => ({
    searchValue: "",
    options: [
      "物理性能",
      "材料耐老侯",
      "环境可靠性",
      "机械可靠性",
      "热分析",
      "成分分析",
    ],
    moreOptions: [
      {
        label: "燃烧",
        key: "燃烧",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "电学",
        key: "电学",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "复合材料",
        key: "复合材料",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "生物降解",
        key: "生物降解",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "涂料",
        key: "涂料",
        icon: renderIcon(Beaker24Regular),
      },
      {
        label: "胶带",
        key: "胶带",
        icon: renderIcon(Beaker24Regular),
      },
      {
        type: "divider",
        key: "d1",
      },
      {
        label: "其他类别",
        key: "others1",
        icon: renderIcon(CaretRight24Regular),
        children: [
          {
            label: "迪卡侬",
            key: "迪卡侬",
            icon: renderIcon(Beaker24Regular),
          },
          {
            label: "高分子技术服务",
            key: "高分子技术服务",
            icon: renderIcon(Beaker24Regular),
          },
        ],
      },
    ],
  }),
  getters: {},
  actions: {},
});

// 在setup外部使用时调用
export function useChildQuote() {
  return useChildQuoteStore(_store);
}

// 在setup内部使用时直接创建store
export const store = useChildQuoteStore();
