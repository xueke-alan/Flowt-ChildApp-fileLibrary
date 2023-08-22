<template>
  <n-config-provider :theme="theme" :theme-overrides="getThemeOverrides" style="height: 100%;">
    <layout />
  </n-config-provider>
</template>

<script setup lang="ts">
import layout from "~/layout/index.vue";

import { useGlobalSettingStore } from '~/stores/global'
import { computed } from 'vue'
import { darkTheme, NConfigProvider } from 'naive-ui'
const store = useGlobalSettingStore()
import { lighten } from '~/utils/index';




const theme = computed(() => store.darkTheme ? darkTheme : null);

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