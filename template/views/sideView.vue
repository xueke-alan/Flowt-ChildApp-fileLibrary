
<template>
  <n-layout position="absolute" style="height: 100%; padding: 10px 0;" has-sider>

    <n-layout-sider :width="200" :native-scrollbar="false" bordered collapse-mode="width" :collapsed-width="70"
      :collapsed="collapsed" show-trigger @collapse="collapsed = true" @expand="collapsed = false"
      :trigger-style="{ bottom: '20px', top: 'unset' }" :collapsed-trigger-style="{ bottom: '20px', top: 'unset' }">
      <n-menu :root-indent="24" :indent="12" :options="menuOptions" @update:value="handleUpdateValue" :value="MenuVal"
        :collapsed-icon-size="20" :collapsed-width="68" />
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


import { NLayout, NLayoutSider, NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'


import { VNodeChild, computed, onMounted, ref } from 'vue';

const menuOptions = ref<MenuOption[]>([])

const MenuVal = computed(() => router.currentRoute.value.fullPath)

const collapsed = ref(false)
import { useRouter } from 'vue-router';
const router = useRouter();

const handleUpdateValue = (key: string, item: MenuOption) => {
  console.log(key);
  console.log(item);



  console.log(router);

  router.push({
    path: key,
  })
}

onMounted(() => {
  console.log(router.getRoutes());

  const childrens = router.getRoutes()

  // 去掉第一个和最后一个
  for (let i = 1; i < childrens.length - 1; i++) {
    const element = childrens[i];
    console.log(element);

    menuOptions.value.push({
      label: element.name,
      key: element.path,
      icon: element.meta?.icon as (() => VNodeChild) || undefined
    })

    if (element.meta?.divider) {
      menuOptions.value.push({
        key: `${element.path}-divider`,
        type: 'divider',
      },)
    }

  }
  console.log(menuOptions);

  console.log(router.getRoutes());

})
</script>