<template>
  <n-card :title="route.name" style="margin-bottom: 16px">

    <div>{{ router }}</div>
    <div>{{ route }}</div>
  </n-card>
</template>

<script setup>
import { NButton, NCard } from 'naive-ui'
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>

<style></style>