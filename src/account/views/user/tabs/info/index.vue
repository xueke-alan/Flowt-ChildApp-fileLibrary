<template>
  <n-descriptions bordered :column="3" label-placement="left" style="margin-bottom: 20px;" v-show="userInfo">

    <n-descriptions-item>
      <template #label>
        工号
      </template>
      {{ userInfo.staffId }}
    </n-descriptions-item>
    <n-descriptions-item label="英文名">
      {{ userInfo.username }}

    </n-descriptions-item>
    <n-descriptions-item label="中午名">
      {{ userInfo.usernameCn }}
    </n-descriptions-item>
    <n-descriptions-item label="性别">
      {{ userInfo.gender == 'M' ? "男" : "女" }}
    </n-descriptions-item>
    <n-descriptions-item label="职务">
      {{ userInfo.usernameCn }}
    </n-descriptions-item>
    <n-descriptions-item label="在职状态">
      休假 2023.6.13 - 2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="手机号">
      {{ userInfo.mobile }}
    </n-descriptions-item>
    <n-descriptions-item label="Dir. 直线">
      {{ userInfo.dir }}
    </n-descriptions-item>
    <n-descriptions-item label="分机号">
      {{ userInfo.shortDir }}
    </n-descriptions-item>

    <n-descriptions-item label="证件号">
      513030000000000000
    </n-descriptions-item>
    <n-descriptions-item label="Email" :span="2">
      {{ userInfo.email }}

    </n-descriptions-item>
    <n-descriptions-item label="入职日期">
      2023.6.15
    </n-descriptions-item>
    <n-descriptions-item label="E1用户">
      否
    </n-descriptions-item>
    <n-descriptions-item label="VPN">
      否
    </n-descriptions-item>
    <n-descriptions-item label="资产">
      无
    </n-descriptions-item>
    <n-descriptions-item label="备注" :span="3">
      /
    </n-descriptions-item>
    <n-descriptions-item label="信息码" :span="3">
      <div
        style="background-color: #aaaaaa88;height: 20px;font-size: 12px;line-height: 20px;display: flex;justify-content: center;">
        点击以获取加密信息码 </div>
    </n-descriptions-item>


  </n-descriptions>
</template>

<script setup lang="ts">
import { NDescriptions, NDescriptionsItem } from 'naive-ui'

import { getUserByStaffId } from "@/api/user";
import { onMounted, ref } from 'vue';

const userInfo: any = ref({})

import { useRoute } from 'vue-router';

const route = useRoute();



// 获取所有查询参数的对象
const queryParams = route.query;
console.log(queryParams);

onMounted(() => {
  getUserByStaffId((queryParams.staffId || 'GZ10548') as string).then((r) => {
    console.log(r);

    userInfo.value = r
  })
})

</script>