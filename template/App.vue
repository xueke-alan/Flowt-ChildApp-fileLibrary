<template>
  <n-config-provider  :theme-overrides="getThemeOverrides" style="height: 100%;">
    <layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import layout from "~/layout/index.vue";

import { computed} from 'vue'
import {  NConfigProvider } from 'naive-ui'
import { lighten } from '~/utils/index';



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

</script>