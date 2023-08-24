<template>
  <div style="display: flex;gap:10px;height: 100%;">


    <n-card :title="route.name" style="height: 100%;" content-style="height: 100%;overflow-y: hidden;padding-right:4px">

      <template #header>
        <div style="display: flex;align-items: center;">
          <span style="font-weight: bold">ASTM D149-20</span>
        </div>
      </template>

      <n-scrollbar style="height: 100%;padding-right: 16px;">
        {{ router }}{{ router }}{{ router }}{{ router }}{{ router }}{{ router }}
      </n-scrollbar>
    </n-card>
    <n-card :title="route.name" style="max-width: 500px;">

      <template #header>
        <div style="display: flex;align-items: center;">
          <span style="font-weight: bold">Chat Standars</span>
          <span style="font-size: 14px;margin-left: 20px;color: #aaaaaa;">向GPT提问，快速了解标准</span>
        </div>
      </template>

    </n-card>
  </div>
</template>

<script setup>
import { NButton, NCard, NDataTable, NScrollbar } from 'naive-ui'
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();





</script>

<style></style>