<template>
  <n-card class="card"
    content-style="display: flex;flex-direction: column;padding: 10px;overflow: hidden;height: 100%;position: relative;"
    :key="matchedRouter.name">
    <div class="header">
      <n-tabs class="tabs" type="line" :value="currentRouteName" @update:value="name => router.push({ name })">
        <n-tab :name="(name as string)" v-for="{ name, meta } in matchedRouter.children">
          <div class="tab">
            <n-icon size="20" class="icon">
              <component :is="meta?.icon" />
            </n-icon>
            <span>{{ name }}</span>
          </div>
        </n-tab>
      </n-tabs>
      <div class="right">
        <span class="subtitle">{{ subtitle }}</span>
        <n-icon size="20" class="icon">
          <component :is="PersonFeedback24Regular" />
        </n-icon>
      </div>
    </div>

    <router-view v-slot="{ Component }">
      <div class="tanCantainer">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </div>
    </router-view>
  </n-card>
</template>

<script lang="ts" setup>
import { PersonFeedback24Regular } from "@vicons/fluent";
import { NCard, NTabs, NTab, NIcon } from "naive-ui";
import { computed } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const matchedRouter = computed(() => router.currentRoute.value.matched[0]);
const currentRouteName = computed(
  () => router.currentRoute.value.name as string
);
const subtitle = computed(() => matchedRouter.value.meta.subtitle);
console.log(router);
</script>

<style lang="less" scoped>
.card {
  margin-bottom: 16px;
  height: 100%;

  .header {
    padding: 0 10px;
    user-select: none;

    .tabs {
      .tab {
        font-size: 14px;
        display: flex;
        align-items: center;

        .icon {
          margin-right: 8px;
        }
      }
    }

    .right {
      position: absolute;
      top: 10px;
      right: 24px;
      opacity: 0.8;
      height: 45px;
      overflow: hidden;
      display: flex;
      align-items: center;

      .icon {
        margin-right: 8px;
      }

      .subtitle {
        margin-right: 85px;
      }
    }
  }

  .tanCantainer {
    // padding: 10px;
    height: 100%;
    display: flex;
    flex-direction: column;

    &>* {
      padding: 10px;
    }
  }
}
</style>
<style scoped>
/* 定义 "fade" 过渡效果的 CSS 样式 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

