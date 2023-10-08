<template>
  <div class="main-layout">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import wujie from "~/utils/wujie";
import { onMounted, watch } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

onMounted(() => {
  wujie.bus.$on("baseAppRouterChange", (path) => {
    router.push({ path });
  });
})



watch(
  () => router.currentRoute.value.fullPath,
  (newVal) => { wujie.bus.$emit("microAppRouterChange", newVal) }
)

</script>


<style lang="less" scoped>
.main-layout {
  height: 100%;
}
</style>

