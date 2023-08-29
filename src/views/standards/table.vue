<template>
  <n-card :title="route.name" style="margin-bottom: 16px">
    <template #header>
      <div style="display: flex; align-items: center">
        <span style="font-weight: bold; font-size: 22px">{{ route.name }}</span>
        <span style="font-size: 14px; margin-left: 20px; color: #aaaaaa">{{
          route.meta.subtitle
        }}</span>
      </div>
    </template>
    <template #header-extra> #搜索按钮1 </template>
    <headerBar></headerBar>
    <n-data-table
      size="small"
      :columns="columns"
      :data="data"
      :pagination="true"
      :bordered="false"
      :row-props="rowProps"
    />
    <template #footer> </template>
    <template #action> #action </template>
  </n-card>
</template>

<script setup>
import { NButton, NCard, NDataTable } from "naive-ui";
import headerBar from "./headerBar.vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();

const columns = [
  {
    title: "标准编号",
    key: "no",
  },
  {
    title: "标准名称",
    key: "title",
  },
  {
    title: "生效日期",
    key: "eff",
    width: 100,
  },
  {
    title: "登记时间",
    key: "update",
    width: 100,
  },
  {
    title: "文件",
    key: "file",
    width: 100,
  },
  {
    title: "访问量",
    key: "stastic",
    width: 100,
  },
];
const rowProps = (row) => {
  return {
    style: "cursor: pointer;",
    onClick: () => {
      router.push({ name: "standardsView" });
    },
  };
};

const data = [
  {
    no: "ASTM A194/A194M-20AAAAAAAAAAAAAAAAAA",
    title:
      "Standard Test Methods for Determining the Izod Pendulum Impact Resistance of Plastics",
    eff: "1/6/2010",
    update: "15/1/2016",
    file: "电子版",
    stastic: "12K/45K",
  },
];
</script>

<style></style>
