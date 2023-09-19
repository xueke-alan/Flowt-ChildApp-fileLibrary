<template>
  <div class="mainSearch">
    <div class="searchConter">
      <div class="titleandicon">
        <n-icon size="120">
          <svg
            viewBox="0 0 100 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="LogoComponent_a-logo-component__svg__qyebU"
            type="primary"
            title="SGS"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M86.663 13.928c-.446-5.188-3.672-7.498-9.581-7.486-8.244.019-10.66 4.023-10.665 9.068 0 5.398 4.305 7.873 8.074 10.04 2.932 1.685 5.538 3.183 5.538 5.725 0 2.193-1.119 3.663-3.398 3.663-3.718 0-3.855-2.586-3.855-5.672h-6.76c-.288 4.47.659 8.51 5.337 9.944h9.428c2.793-.751 5.164-2.463 5.88-6.235v-4.672c-.928-4.2-4.596-6.178-7.86-7.938-2.93-1.58-5.534-2.984-5.534-5.662 0-2.23 1.303-3.435 3.496-3.435 2.731 0 3.322 2.514 3.317 4.865h6.584v-2.205zM25.606 39.213c-4.678-1.435-5.625-5.475-5.339-9.945h6.762c0 3.086.133 5.672 3.85 5.672 2.284 0 3.403-1.47 3.403-3.662 0-2.543-2.606-4.04-5.537-5.726-3.768-2.166-8.073-4.642-8.073-10.04 0-5.049 2.417-9.07 10.659-9.07 6.58 0 9.848 2.949 9.402 9.691H34.15c0-2.412-.4-4.865-3.134-4.865-2.19 0-3.491 1.204-3.491 3.435 0 2.678 2.603 4.082 5.533 5.663 3.77 2.034 8.082 4.36 8.082 10.065 0 5.586-2.745 7.877-6.102 8.78h-9.432v.002zm31.982-22.317c.047-2.996-.449-5.626-4.031-5.626-4.208 0-4.208 5.672-4.208 11.926 0 10.093.986 11.881 4.836 11.881 1.119 0 2.329-.27 3.357-.627v-7.147h-3.67v-4.956h10.43v16.35c-.717.139-1.85.332-3.13.515H49.606c-6.264-1.558-7.109-6.518-7.109-16.372 0-8.135.405-16.396 11.463-16.396 6.628 0 10.75 3.71 10.345 10.452h-6.716z"
              fill="#848484"
            ></path>
            <path d="M0 39.212h100v.777H0v-.776z" fill="#F60"></path>
            <path d="M86.664 0h.78v46.654h-.78V0z" fill="#F60"></path>
          </svg>
        </n-icon>
        <span class="title">
          <span>MR-Lab</span>
          <span class="right">报价系统</span>
        </span>
      </div>

      <n-input
        size="large"
        placeholder=" 搜索报价单"
        class="inputBar"
        :class="{ focused: searchTipsOption.length }"
        @input="handleInput"
        @blur.stop="handleBlur"
        @focus="handleInput(inputValue)"
        @keyup="handleKeyUp"
        @keydown="handleKeyDown"
        v-model:value="inputValue"
        maxlength="30"
        :status="inputStatus"
      >
        <template #prefix>
          <n-icon size="24" style="margin: 0 10px 0 5px">
            <component :is="BookmarkSearch24Regular"></component>
          </n-icon>
        </template>
        <template #suffix>
          <n-icon size="24" class="spinner suffixIcon" v-if="searchLoading">
            <component :is="SpinnerIos20Filled"></component>
          </n-icon>

          <n-icon v-else size="28" class="suffixIcon">
            <component :is="Search48Filled"></component>
          </n-icon>
        </template>
      </n-input>

      <div class="searchTipsCont">
        <div class="note">
          <n-button
            class="error"
            v-if="inputStatus == 'error'"
            text
            type="error"
          >
            <n-icon style="margin-right: 5px">
              <component :is="ErrorCircle24Regular"></component>
            </n-icon>
            不能搜索空的内容！
          </n-button>
        </div>

        <div class="tagGroup" v-if="!searchTipsOption.length">
          <n-tag
            class="tag"
            v-for="i in 6"
            round
            :bordered="false"
            type="success"
            closable
          >
            <template #icon>
              <n-icon>
                <component :is="ErrorCircle24Regular"></component>
              </n-icon>
            </template>
            气候老化类 {{ i }}
          </n-tag>

          <n-tag class="tag" round :bordered="false" type="warning" closable>
            测试咨询统计表
          </n-tag>

          <n-popover trigger="click" placement="bottom" :width="300">
            <template #trigger>
              <n-tag class="tag" round>
                <n-icon style="margin: 2px 8px 0 8px">
                  <component :is="Add24Filled"></component>
                </n-icon>
              </n-tag>
            </template>
            <!-- <template #header>
              <n-text strong depth="1"> 下面就是分割线 </n-text>
            </template> -->
            <div>
              <n-input-group>
                <n-input
                  size="small"
                  placeholder="搜索内容"
                  :style="{ flex: 2 }"
                >
                </n-input>
                <n-select
                  size="small"
                  :style="{ flex: 1 }"
                  placeholder="精确"
                />
              </n-input-group>
            </div>
            <template #footer>
              <div style="display: flex; gap: 5px">
                <n-popselect trigger="click">
                  <n-button size="small" secondary type="tertiary">
                    <n-icon size="20">
                      <component :is="Sticker24Regular"></component> </n-icon
                  ></n-button>
                </n-popselect>
                <n-input size="small" placeholder="设置标题"> </n-input>
                <n-button size="small" strong secondary type="primary">
                  添加
                </n-button>
              </div>
            </template>
          </n-popover>
        </div>

        <n-list
          class="searchTips"
          v-if="searchTipsOption.length"
          :class="{ focused: searchTipsOption.length }"
          bordered
          @click="searchPush()"
        >
          <n-list-item
            v-for="(i, index) in searchTipsOption"
            class="searchTipsItem"
            :class="{ selected: index == optionSelected }"
            >{{ i.lable }}

            <template #prefix> </template>
            <template #suffix>
              <n-tag
                round
                :bordered="false"
                type="success"
                style="
                  padding-left: 20px;
                  padding-right: 15px;
                  pointer-events: none;
                "
                v-for="t in i.suffix"
              >
                <!-- 海棉类测试，含100个测试项目 -->
                {{ t.text }}
                <template #icon>
                  <!-- <n-icon :component="CheckmarkCircle" /> -->
                  <n-icon style="margin-right: 2px">
                    <component :is="DocumentBulletList24Regular"></component>
                  </n-icon>
                </template>
              </n-tag> </template
          ></n-list-item>
        </n-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";

const router = useRouter();
import {
  NInput,
  NIcon,
  NList,
  NListItem,
  NButton,
  NTag,
  NPopover,
  NInputGroup,
  NSelect,
  NPopselect,
} from "naive-ui";
import { searchquoteByQuery } from "@/api/quote";
import {
  BookmarkSearch24Regular,
  Search48Filled,
  SpinnerIos20Filled,
  ErrorCircle24Regular,
  Sticker24Regular,
  DocumentBulletList24Regular,
  Add24Filled,
} from "@vicons/fluent";
import { Ref, ref } from "vue";
import { debounce } from "lodash";
const inputValue = ref("");
const searchTipsOption: Ref<any[]> = ref([]);
const optionSelected = ref(-1);
const inputStatus = ref();

const searchLoading = ref(false);

const handleInput = debounce(async (v: string) => {
  console.log(v);
  searchLoading.value = true;
  if (v) {
    const queryList: any[] = await searchquoteByQuery(v);
    console.log(queryList);
    if (inputValue.value) {
      searchTipsOption.value = queryList;
    }
    searchLoading.value = false;
  } else {
    searchTipsOption.value = [];
    searchLoading.value = false;
  }
}, 200);
const handleBlur = () => {
  setTimeout(() => {
    searchTipsOption.value = [];
    optionSelected.value = -1;
    inputStatus.value = undefined;
  }, 150);
};
const handleKeyUp = (k) => {
  switch (k.keyCode) {
    case 40:
      optionSelected.value += 1;
      optionSelected.value %= searchTipsOption.value.length;
      inputValue.value = searchTipsOption.value[optionSelected.value].lable;
      break;
    case 38:
      optionSelected.value += searchTipsOption.value.length - 1;
      optionSelected.value %= searchTipsOption.value.length;
      inputValue.value = searchTipsOption.value[optionSelected.value].lable;
      break;
    default:
      break;
  }
};
const handleKeyDown = (k) => {
  if (k.keyCode === 38 || k.keyCode === 40) {
    k.preventDefault(); // 阻止默认事件
  }
  if (k.key === "Enter") {
    // 当用户按下回车键时执行路由跳转
    searchPush();
  }
};
const searchPush = () => {
  console.log("beforePush");
  if (inputValue.value) {
    router.push({ name: "全部报价单" });
  } else {
    inputStatus.value = "error";
  }
};
</script>

<style lang="less" scoped>
.mainSearch {
  // height: 100%;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  .searchConter {
    position: relative;
    width: 80%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .titleandicon {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      // gap: 30px;
      font-size: 48px;

      line-height: 1.45;
      font-weight: 900;
      // color: #848484;
      font-family: Quotes, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, "Microsoft Yahei", Cantarell, "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
user-select: none;
      .title {
        background: -webkit-linear-gradient(315deg, #8b8b8b 25%, #777777);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        display: flex;
        align-items: center;
        gap: 15px;
        .right {
          font-size: 40px;
         
        }
      }
    }
  }
}
.searchInput {
  box-shadow: 2px 2px 4px 0px #aaaaaa25;
}
.inputBar {
  border-radius: 20px;
  transition: all ease 0.2s;
  height: 50px;
  line-height: 52px;
  font-size: 16px;
  position: relative;

  &.focused {
    border-radius: 20px 20px 0 0;
    transition: all ease 0.2s;
  }

  .suffixIcon {
    margin-right: 5px;
    // animation: fadeIn .5s ease-in-out; /* 使用fadeIn动画，持续1秒，使用ease-in-out缓动函数 */
    animation: fadeIn 0.5s ease;

    &.spinner {
      animation: rotate 0.6s linear infinite, fadeIn 0.5s ease; /* 可以根据需要更改旋转时间 */
    }
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
.searchTipsCont {
  position: relative;
  // overflow: hidden;
  // height: 0;
  width: 100%;
  .note {
    position: absolute;
    padding: 8px 23px;
    pointer-events: none;
    font-size: 14px;
    .error {
      color: red;
    }
  }
}
.tagGroup {
  padding: 10px 10px;
  display: flex;
  gap: 10px;
  position: absolute;
  flex-wrap: wrap;
  .tag {
    cursor: pointer;
  }
}

.searchTips {
  width: 100%;
  border-top-width: 0;
  border-radius: 0 0 20px 20px;
  transition: all ease 0.3s;
  // transform: translateY(-100%);

  overflow: hidden;
  position: absolute;
  top: 0;
  opacity: 0;
  // z-index: -1;
  &.focused {
    // transform: translateY(0%);

    transition: all ease 0.3s;
    opacity: 1;
  }
  .searchTipsItem {
    cursor: pointer;
    padding: 8px 15px;
    &:hover,
    &.selected {
      background-color: #aaaaaa25;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0; /* 初始状态：完全透明 */
  }
  to {
    opacity: 1; /* 最终状态：完全不透明 */
  }
}
</style>

<style></style>
