<template>
  <div class="securityMain">
    <div class="bigTitle">

      <n-icon style="margin-right: 10px;margin-top: 2px;">
        <component :is="Key24Regular"></component>
      </n-icon>
      <span>安全</span>
    </div>
    <div class="inputGroup">
      <div class="mainInput" style="flex: 2;">
        <div class="lable">工号</div>
        <n-input value="GZ10548" :disabled="true" />
      </div>
      <div class="mainInput" style="flex: 3;">
        <div class="lable">邮件地址</div>
        <n-input placeholder="请输入新的邮件地址" value="xueke.alan@hw.com" :disabled="true" />
      </div>
    </div>
    <div class="mainInput">
      <div class="lable">电话号码</div>
      <div class="inputGroup">
        <n-input placeholder="大" readonly value="19998765432" style="flex: 1;" />
        <n-button ghost>
          申请更改
        </n-button>
      </div>
    </div>
    <n-divider />



    <div class="mainInput">
      <n-space justify="space-between" align="center">
        <div class="lable">
          更改密码
          <div class="dic">至少需要包含3种类型的字符12位</div>
        </div>

        <n-rate :count="4" :value="newPswStrength" readonly :color="rateColor" size="small" class="pswStrength">
          <n-icon size="28" class="rateItem">
            <component :is="TextColorAccent24Filled"></component>
          </n-icon>
        </n-rate>
      </n-space>


      <n-input placeholder="输入新密码" type="password" v-model:value="newPsw"
        :input-props="{ autocomplete: 'new-password' }" />

    </div>
    <div class="mainInput">
      <div class="lable">确认密码</div>

      <div class="inputGroup" :class="{ notAllow: pswState.code != 4 }">
        <n-input :placeholder="pswState.btnLable" type="password" v-model:value="newPswCheck" />
        <n-button :ghost="pswState.code != 4" :secondary="pswState.code == 4"
          :type="pswState.code != 4 ? undefined : 'primary'" style="width: 150px;"
          :class="{ disableSub: pswState.code != 4 }">
          <transition name="fade10" mode="out-in">
            <span :key="pswState.btnLable">{{ pswState.btnLable }}</span>
          </transition>
        </n-button>
      </div>
    </div>

    <n-divider />
    <div class="bigTitle">
      <n-icon style="margin-right: 10px;margin-top: 2px;">
        <component :is="BuildingMultiple24Regular"></component>
      </n-icon>
      <span>组织</span>
    </div>

    <div class="mainInput">
      <div class="lable">部门</div>
      <n-input value="GZMR 物理组 测试工程师" :disabled="true" />
    </div>

    <div class="mainInput">
      <div class="lable">管理员</div>
      <n-input value="Alan_xue" :disabled="true" />
    </div>

    <n-divider />



    <n-space>

      <n-button>退出登录</n-button>
    </n-space>
  </div>
</template>
  
  
<script setup lang="ts">
import { BuildingMultiple24Regular, Key24Regular, TextColorAccent24Filled } from "@vicons/fluent";
import { NDivider, NSpace, NInput, NRate, NIcon, NButton } from "naive-ui";
import { computed } from "vue";
import { ref } from "vue";
// import { passwordStrength } from '@cmss/check-password-strength'
import { analyzePassword } from '~/utils/password/strength'

const newPsw = ref('')
const newPswCheck = ref('')

const rateColor = computed(() => {
  if (newPswStrength.value >= 4) {
    return '#4fb233'

  } else {
    return 'red'
  }
})

// BUG 以数字开头的密码强度始终显示为0
const newPswStrength = computed(() => {


  const config = [
    {
      code: 0,
      minDiversity: 1,
      minLength: 0
    },
    {
      code: 1,
      minDiversity: 1,
      minLength: 8
    },
    {
      code: 2,
      minDiversity: 2,
      minLength: 10
    },
    {
      code: 3,
      minDiversity: 3,
      minLength: 12
    },
    {
      code: 4,
      minDiversity: 4,
      minLength: 12
    },
  ]
  const res = analyzePassword(newPsw.value, config)

  return res.code

})


const pswState = computed(() => {
  if (newPsw.value == '') {
    return { code: 0, btnLable: '请输入新密码' }
  }
  else if (newPswStrength.value < 3) {
    return { code: 1, btnLable: '密码强度过低' }
  }
  else if (newPswCheck.value == '') {
    return { code: 2, btnLable: '请再次确认密码' }
  }
  else if (newPsw.value != newPswCheck.value) {
    return { code: 3, btnLable: '两次密码不匹配' }
  }
  else {
    return { code: 4, btnLable: '提交修改' }
  }
})


</script>
  
<style lang="less" scoped>
.securityMain {

  max-width: 500px;
  // color: #1e1e1e;

  .bigTitle {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  }

  .mainInput {
    margin-top: 15px;
    flex: 1;

    .lable {
      font-size: 14px;
      margin-bottom: 5px;

      // font-weight: 600;
      .dic {
        font-size: 12px;
        color: #aaa;
      }
    }

    .rateItem {
      transform: scale3d(1.4, 1, 1);

    }

    .pswStrength {
      --n-item-color: #d8d8d866 !important;
    }


  }

  .inputGroup {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    &.notAllow {
      cursor: not-allowed;
    }

    .disableSub {
      pointer-events: none;
      color: rgba(194, 194, 194, 1);
    }
  }
}
</style>