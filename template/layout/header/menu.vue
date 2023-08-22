<template>
  <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { NMenu } from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import { RouterLink, useRouter } from 'vue-router';


const router = useRouter().getRoutes()




const menuOptions: MenuOption[] = router.map(({ name, path }) => {
  return {
    label: () => h(RouterLink, { to: { name } }, { default: () => path }),
    key: name as string,
  }
})

console.log(menuOptions);

const activeKey = ref(null)

</script>
