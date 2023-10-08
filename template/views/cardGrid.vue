<template>
  <div class="cardGrid">
    <n-card class="gridCon" :class="{ hide }" content-style="height:100%;padding-right:10px">
      <n-scrollbar style="padding-right: 20px; height: 100%">
        <div style="
            display: flex;
            margin-bottom: 10px;
            align-items: center;
            justify-content: space-between;
          ">
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

          <div style="
              display: flex;
              gap: 10px;
              align-items: center;
              justify-content: space-between;
            ">
            <n-button-group size="small">
              <n-button @click="handleClickBackBtn"> 机构分组 </n-button>
              <n-button @click="handleClickBackBtn"> 年号分组 </n-button>
            </n-button-group>
            <n-button-group size="small">
              <n-button strong secondary :type="route.name == matchedRouter.name ? 'default' : 'primary'"
                @click="handleClickBackBtn" :disabled="route.name == matchedRouter.name"
                :style="{ opacity: route.name == matchedRouter.name ? 0.5 : 1 }">
                <n-icon size="16" class="mr-1">
                  <component :is="Dismiss24Regular"></component>
                </n-icon>
                <span>关闭</span>
                <!-- 这个按钮只有当存在可返回的路径时才返回 -->
              </n-button>
            </n-button-group>
          </div>
        </div>

        <div class="cardItemGroup" v-resize:0="onResize">

          <n-card hoverable class="eachcard" :style="{ flex: flexStr }" :class="{ current: index == 1 }"
            @click="handleClickCard(i)" v-for="(i, index) in matchedRouter.children.filter((r) => !r.meta?.hidden)">
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
        </div>
        <!-- </n-grid> -->
      </n-scrollbar>
    </n-card>
    <n-tag round class="showGirdBtn" :class="{ hide }" @click="handleClickshowGirdBtn">
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

  NCard,
  NScrollbar,
  NTag,
  NIcon,
  NButtonGroup,
  NButton,
} from "naive-ui";
import { computed, onMounted, ref, watch } from "vue";
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

onMounted(() => {
  // console.log([]);
  const ele = document.querySelector('.cardItemGroup') as HTMLElement;
  if (ele) {
    onResize({ width: ele.offsetWidth })
  }

})
const cardGridItemNum = ref(0)
const flexStr = ref('')
const onResize = ({ width }) => {
  if (width > 1500) {
    cardGridItemNum.value = 6
  } else if (width > 1200) {
    cardGridItemNum.value = 5
  } else if (width > 1000) {
    cardGridItemNum.value = 4
  } else if (width > 800) {
    cardGridItemNum.value = 3
  } else if (width > 500) {
    cardGridItemNum.value = 2
  } else {
    cardGridItemNum.value = 1
  }
  flexStr.value = `0 0 calc((100% - 20px * (${cardGridItemNum.value} - 1)) / ${cardGridItemNum.value})`
}
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


.cardItemGroup {
  display: flex;
  gap: 20px;
  align-content: flex-start;
  flex-flow: row wrap;
  transition: none;

  .eachcard {
    border: 1px solid transparent;
    transition: all 0.25s var(--n-bezier) 0.1s;
    position: relative;
    overflow: hidden;
    background-color: #aaaaaa10;
    border-color: #aaaaaa30;

    &.current {
      border-color: var(--n-color-target);
      background-color: #aaaaaa15;
    }

    &:hover {
      border-color: var(--n-color-target);
    }

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
    transition: opacity 0.25s var(--n-bezier) 0.5s, color 0.3s var(--n-bezier);
    opacity: 1;
  }
}

.cardGrid {
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100%;

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

<style lang="less"></style>