<template>
  <div class="cardGrid">
    <n-card
      class="gridCon"
      :class="{ hide }"
      content-style="height:100%;padding-right:10px"
    >
      <n-scrollbar style="padding-right: 20px; height: 100%">
        <div
          style="
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            justify-content: space-between;
          "
        >
          <div style="display: flex; align-items: center">
            <n-icon size="24" style="margin-right: 15px">
              <component :is="Stack24Regular"></component>
            </n-icon>
            <div style="font-size: 20px; font-weight: bold; opacity: 0.95">
              {{ matchedRouter.name }}
            </div>
            <div style="font-size: 14px; margin-left: 15px; color: #aaa">
              {{ matchedRouter.meta.subtitle }}
            </div>
          </div>

          <div
            style="
              display: flex;
              gap: 10px;
              align-items: center;
              justify-content: space-between;
            "
          >
            <n-button-group size="small">
              <n-button @click="handleClickBackBtn"> 机构分组 </n-button>
              <n-button @click="handleClickBackBtn"> 年号分组 </n-button>
            </n-button-group>
            <n-button-group size="small">
              <n-button
                strong
                secondary
                :type="route.name == matchedRouter.name ? 'default' : 'primary'"
                @click="handleClickBackBtn"
                :disabled="route.name == matchedRouter.name"
                :style="{ opacity: route.name == matchedRouter.name ? 0.5 : 1 }"
              >
                <n-icon size="16" class="mr-1">
                  <component :is="Dismiss24Regular"></component>
                </n-icon>
                <span>关闭</span>
                <!-- 这个按钮只有当存在可返回的路径时才返回 -->
              </n-button>
            </n-button-group>
          </div>
        </div>
        <n-grid cols="2 900:4 1200:5" :collapsed="false" x-gap="15" y-gap="15">
          <n-gi
            v-for="(i, index) in matchedRouter.children.filter(
              (r) => !r.meta?.hidden
            )"
            style="cursor: pointer"
          >
            <n-card
              hoverable
              class="eachcard"
              :class="{ current: index == 1 }"
              @click="handleClickCard(i)"
            >
              <template #header>
                <div class="header">
                  <span class="title">{{ i.name?.toString() }}</span>
                  <div class="subTitle" style="">
                    {{ i.meta?.subtitle?.toString() || "/" }}
                  </div>

                  <div class="background">
                    <component :is="i.meta?.background"></component>
                  </div>
                </div>
              </template>

              <template #header-extra> </template>
              <div>
                <div>{{ matchedRouterPath }}</div>
              </div>
            </n-card>
          </n-gi>
        </n-grid>
      </n-scrollbar>
    </n-card>
    <n-tag
      round
      class="showGirdBtn"
      :class="{ hide }"
      @click="handleClickshowGirdBtn"
    >
      <n-icon size="30" style="margin-left: 2px; margin-top: 2px">
        <component :is="Stack24Regular"></component>
      </n-icon>
    </n-tag>

    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { Stack24Regular, Dismiss24Regular } from "@vicons/fluent";
import {
  NGi,
  NGrid,
  NCard,
  NScrollbar,
  NTag,
  NIcon,
  NButtonGroup,
  NButton,
} from "naive-ui";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
const matchedRouter = computed(() => router.currentRoute.value.matched[0]);

const matchedRouterPath = computed(
  () => router.currentRoute.value.matched[0].path
);

watch(matchedRouterPath, () => {
  console.log("大路由发生变化");
  // 应该是判断路由是否变化为耳机
  hide.value = false;
});
watch(
  () => route.name,
  () => {
    console.log("大路由发生变化");
    // 应该是判断路由是否变化为耳机
    hide.value = route.name != matchedRouter.value.name;
  }
);
console.log(router);

const hide = ref(true);
hide.value = route.name != matchedRouter.value.name;
const handleClickCard = (i) => {
  // hide.value = !hide.value
  router.push({ name: i.name });
  setTimeout(() => {
    hide.value = true;
  }, 300);
};
const handleClickshowGirdBtn = () => {
  hide.value = false;
  // setTimeout(() => {
  //   router.push({name:"标准库"})
  // }, 600);
};
const handleClickBackBtn = () => {
  hide.value = true;
};
</script>

<style lang="less" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.eachcard {
  border: 1px solid transparent;
  transition: all 0.3s var(--n-bezier) 0.1s;
  position: relative;
  overflow: hidden;
  background-color: #aaaaaa10;
  border-color: #aaaaaa30;
  .subTitle {
    font-size: 14px;
    color: #aaa;
  }

  .background {
    position: absolute;
    top: -10px;
    right: -10px;
    width: 100px;
    opacity: 0.35;
    z-index: -1;
    transform: rotate(15deg);
  }

  &.current {
    border-color: var(--n-color-target);
    background-color: #aaaaaa15;
  }

  &:hover {
    border-color: var(--n-color-target);
  }
}

.showGirdBtn {
  position: fixed;
  right: 100px;
  bottom: 80px;
  z-index: 4;
  width: 50px;
  height: 50px;
  opacity: 0;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px 0px rgba(0, 0, 0, 0.12);
  // transition: color .5s var(--n-bezier);
  cursor: pointer;
  border-radius: 50px;

  &:hover {
    color: var(--n-color-checked);
  }

  &.hide {
    transition: opacity 0.3s var(--n-bezier) 0.4s, color 0.3s var(--n-bezier);
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    display: none;
    opacity: 0;
  }

  50% {
    display: none;
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.cardGrid {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;
  animation: fadeIn 0.6s ease-in-out forwards;

  /* 应用名为fadeIn的动画，持续1秒，渐进缓动函数，动画结束后保持最终状态 */
  .gridCon {
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
    z-index: 5;
    transition: all 0.5s var(--n-bezier);

    // * {
    //   opacity: 1;
    //   transition: all 0.5s var(--n-bezier);
    // }

    &.hide {
      right: -120%;
      transition: all 0.5s var(--n-bezier);

      // * {
      //   opacity: 0;
      // }
    }
  }
}
</style>
