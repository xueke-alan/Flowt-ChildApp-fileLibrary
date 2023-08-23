<template >
  <div class="cardGrid">

    <n-card class="gridCon" :class="{ hide }" content-style="height:100%;padding-right:10px">
      <n-scrollbar style="padding-right: 20px; height: 100%;">
        <n-grid cols="2 900:4 1200:5" :collapsed="false" x-gap="15" y-gap="15">
          <n-gi v-for=" i  in  matchedRouter.children " :key="i.name" style="cursor: pointer;">
            <n-card hoverable class="eachcard" @click="handleClickCard(i)">

              <template #header>
                <div style="padding-left: 10px;border-left: 3px solid #aaaaaa;">
                  <span>{{ i.name?.toString() }}</span>
                  <div style="font-size: 14px;color: #aaa">{{ i.meta?.subtitle?.toString() || '/' }}</div>
                </div>
              </template>
              <div>
                <div>文件数量：1125</div>
              </div>
            </n-card>
          </n-gi>
        </n-grid>
      </n-scrollbar>

    </n-card>



    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import { PersonFeedback24Regular } from '@vicons/fluent';
import { NGi, NGrid, NCard, NScrollbar } from 'naive-ui'
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const matchedRouter = computed(() => router.currentRoute.value.matched[0])
const currentRouteName = computed(() => router.currentRoute.value.name as string)
const subtitle = computed(() => matchedRouter.value.meta.subtitle)
console.log(router);
const hide = ref(false)
const handleClickCard = (i) => {
  hide.value = !hide.value
  router.push({ name: i.name })
  setTimeout(() => {
    hide.value = !hide.value
  }, 2000);
}
</script>

<style lang="less" scoped>
.eachcard {
  border: 1px solid transparent;
  transition: all .3s var(--n-bezier) .1s;
  position: relative;
  overflow: hidden;
  background-color: #aaaaaa10;
  border-color: #aaaaaa30;

  &:hover {
    border-color: var(--n-color-target);
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
    // background-color: red;
    top: 0;
    left: -0%;
    // padding-right: 20px;
    transition: all .3s var(--n-bezier);
    opacity: 1;
    z-index: 5;
    overflow: hidden;

    &.hide {
      left: -120%;
      opacity: 1;
      transition: all .5s var(--n-bezier);

    }
  }
}
</style>