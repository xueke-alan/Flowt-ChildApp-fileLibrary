<template >
  <div style="display: flex;flex-direction: column;position: relative;height: 100%;">
    <n-grid cols="2 900:4 1200:6" :collapsed="false" x-gap="15" y-gap="15"
      style="position: absolute;z-index: 5;width: 100%;top: 0;left: 0;padding: 20px;background-color: red;">
      <n-gi v-for="i in matchedRouter.children" :key="i.name">
        <n-card :title="i.name?.toString()">
          {{ i.meta }}
        </n-card>
      </n-gi>
    </n-grid>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { PersonFeedback24Regular } from '@vicons/fluent';
import { NGi, NGrid, NCard } from 'naive-ui'
import { computed } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const matchedRouter = computed(() => router.currentRoute.value.matched[0])
const currentRouteName = computed(() => router.currentRoute.value.name as string)
const subtitle = computed(() => matchedRouter.value.meta.subtitle)
console.log(router);


</script>

<style lang="less" scoped></style>