<!-- <template>
  <div>
    <span>index</span>
    <hr>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template> -->

<template>
  <n-layout position="absolute" style="height: 100%; padding: 10px 0;" has-sider>

    <n-layout-sider :width="200" :native-scrollbar="false" bordered>
      <n-menu :indent="20" :options="menuOptions" @update:value="handleUpdateValue" v-model:value="MenuVal" />
    </n-layout-sider>

    <n-layout content-style="padding: 24px;" :native-scrollbar="false">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </n-layout>
  </n-layout>
</template>

<script lang="ts" setup>


import { NIcon, NLayout, NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'

import { Reward24Regular, ShieldKeyhole24Regular, TabInprivateAccount24Regular } from "@vicons/fluent";
import { h, onMounted, ref } from 'vue';

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: '账号安全',
    key: 'security',
    icon: renderIcon(TabInprivateAccount24Regular)
  },
  {
    key: 'divider-1',
    type: 'divider',
  },
  {
    label: '个人信息',
    key: 'info',
    icon: renderIcon(ShieldKeyhole24Regular)
  },
  {
    label: '设备',
    key: 'equip',
    icon: renderIcon(ShieldKeyhole24Regular)
  },
  {
    label: 'Rewards',
    key: 'rewards',
    icon: renderIcon(Reward24Regular)
  },
]

const MenuVal = ref('security')
import { useRouter } from 'vue-router';
const router = useRouter();

const handleUpdateValue = (key: string, item: MenuOption) => {
  console.log(key);
  console.log(item);

  console.log(router);

  router.push({
    name: key,
  })
}

onMounted(() => {
  console.log(router.currentRoute.mat);
  console.log(router.getRoutes());

})
</script>