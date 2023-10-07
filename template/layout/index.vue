<template>
  <div class="main-layout">

    <div style="width:100%; height: 100%;">
      <router-view />
    </div>
    <headerLine v-if="isLocal" />
  </div>
</template>

<script lang="ts" setup>

import headerLine from '~/layout/header/index.vue'

import { onMounted, ref } from 'vue';

const isLocal = ref(true)
onMounted(() => {

  // 如果是开发模式，则不显示头部

  const accessToken = localStorage.getItem('ACCESS-TOKEN');

  // 可以拿到accesstoken，就可以正常发送请求，
  if (accessToken) {
    console.log('Access Token:', accessToken);
  } else {
    console.log('Access Token not found in local storage.');
  }


})


</script>

<style  scope>
.main-layout {
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
}
</style>
