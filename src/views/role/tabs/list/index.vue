<template>
  <!-- <headerBar></headerBar> -->
  <div style="display: flex;height: 100%; overflow: hidden;">

    <n-card size="small" style="flex: 1;max-width: 350px;"
      content-style="height: 100%;overflow-y: hidden;padding-right:2px">
      <template #header>
        <span>角色 / 组</span>
        <span style="color: #aaa;font-size: 14px;margin-left: 20px;">基于分组概念</span>
      </template>
      <n-scrollbar style="height: 100%;padding-right: 14px;" trigger="none">
        <roleList></roleList>
      </n-scrollbar>
    </n-card>


    <n-layout style="flex: 2;" content-style="display:flex;flex-direction: column;">
      <n-layout-content content-style="padding-left:12px" style="flex: none;">
        <n-card size="small" title="角色：可靠性组 测试工程师" content-style="height: 100%">
          <div>描述：可靠性组的测试工程师</div>
          <div>权限继承于：可靠性组 ；测试工程师 ；四号楼员工/工程师</div>
        </n-card>
      </n-layout-content>
      <n-layout-content style="flex: 1;" content-style="padding: 12px 0 0 12px;">
        <div style="display: flex;gap: 12px;height: 100%;">
          <n-card size="small" title="功能操作权限" style="max-width: 350px;" content-style="height: 100%;padding-right:2px">
            <n-scrollbar style="height: 100%;padding-right: 14px;" trigger="none">
              <routerPermissionsTree></routerPermissionsTree>
            </n-scrollbar>
          </n-card>
          <n-card size="small" title="数据访问权限" content-style="height: 100%;padding:  0">
            <resourcePermissionsTable></resourcePermissionsTable>
          </n-card>
        </div>
      </n-layout-content>
    </n-layout> 
  </div>
</template>

<script lang="ts" setup>
import { NCard, NScrollbar, NLayout, NLayoutContent } from "naive-ui";
import roleList from "./list.vue";
import resourcePermissionsTable from "./resourcePermissionsTable.vue";
import routerPermissionsTree from "./routerPermissionsTree.vue";
</script>