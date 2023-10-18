<template>
  <n-config-provider :theme="getDarkTheme" :theme-overrides="wujie.props.designStore.getThemeOverrides"
    style="height: 100%;">
    <layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import layout from "~/layout/index.vue";


import { computed, onMounted, ref } from 'vue'
import { NConfigProvider } from 'naive-ui'
import { BuiltInGlobalTheme } from "naive-ui/es/themes/interface";
import { lighten } from '~/utils/index';
import { useRouter } from 'vue-router';
const router = useRouter()
import wujie from "~/wujie";

let getDarkTheme: any = ref()

// 主题切换事件
wujie.bus.$on('changeTheme', (theme: BuiltInGlobalTheme) => {
  // 主应用直接下放主题
  getDarkTheme.value = theme
})



onMounted(() => {
  // 初始化页面
  console.log(wujie.props.currentRoutePath);
  if (wujie.props.currentRoutePath) {
    router.push({
      path: wujie.props.currentRoutePath,
    });
  }
})

</script>


<style>
input[type="password"]::-ms-reveal {
  display: none;
}

input[type="password"]::-ms-clear {
  display: none;
}

input[type="password"]::-o-clear {
  display: none;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}


.fade10-enter-active,
.fade10-leave-active {
  transition: opacity 0.10s ease;
}

.fade10-enter-from,
.fade10-leave-to {
  opacity: 0;
}
</style>