<template>
  <n-config-provider :theme-overrides="getThemeOverrides" style="height: 100%;">
    <layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import layout from "~/layout/index.vue";

import { computed, onMounted, onBeforeUnmount } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { lighten } from '~/utils/index';
import { useRouter } from 'vue-router';
const router = useRouter()
import wujie from "~/wujie";

const appTheme = "#FF6600"
const getThemeOverrides = computed(() => {

  const lightenStr = lighten(appTheme, 6);
  return {
    common: {
      primaryColor: appTheme,
      primaryColorHover: lightenStr,
      primaryColorPressed: lightenStr,
      primaryColorSuppl: appTheme,
    },
    LoadingBar: {
      colorLoading: appTheme,
    },
  };
});

onMounted(() => {
  // 初始化页面
  console.log(wujie.props.currentRoutePath);
  if (wujie.props.currentRoutePath) {
    router.push({
      path: wujie.props.currentRoutePath,
    });
  }
})

onBeforeUnmount(() => {
  console.log('onUnmounted');

})

</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>