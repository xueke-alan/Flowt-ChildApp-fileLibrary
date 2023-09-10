<template>
  <div style="display: flex;justify-content: space-between;margin-bottom: 8px;">
    <n-button-group>
      <n-button ghost size="small">
        正式员工
      </n-button>
      <n-button ghost size="small">
        外包员工
      </n-button>
      <n-button size="small">
        实习生
      </n-button>
      <n-button size="small">
        准入职
      </n-button>
      <n-button size="small">
        已离职
      </n-button>
    </n-button-group>

    <div style="display: flex;">

      <n-button ghost size="small" style="margin-right: 10px;">
        刷新
      </n-button>

      <n-button-group>
        <n-button ghost size="small">
          录入
        </n-button>

      </n-button-group>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { NButton, NButtonGroup } from "naive-ui";





</script>