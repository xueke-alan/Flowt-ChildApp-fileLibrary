<template>
  <n-tree class="rolesTrees" block-line :data="data" :default-expanded-keys="defaultExpandedKeys" selectable
    :checkable="false" :default-expand-all="true" :render-suffix="renderSuffix" :render-prefix="renderPrefix"
    :render-label="renderLabel" :cancelable="false" />
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { NTree, NIcon } from "naive-ui";

import { TreeOption } from 'naive-ui'

const data: TreeOption[] = [
  {
    key: 0,
    label: "超级管理员",
    checkboxDisabled: true,
    subLable: "Root账号",
    disabled: true,
    type: 'leaf'
  },
  {
    key: 1,
    label: "管理员",
    checkboxDisabled: true,
    type: 'leaf',
    subLable: "一般开发人员账号",
  },
  {
    key: 2,
    label: "总监",
    checkboxDisabled: true,
    type: 'leaf',
  },
  {
    key: 3,
    label: "行政",
    checkboxDisabled: true,
    type: 'leaf',
    children: [
      {
        key: 110,
        label: "行政主管",
        checkboxDisabled: true,
        type: 'leaf',
      },
      {
        key: 120,
        label: "行政员工",
        checkboxDisabled: true,
        type: 'leaf',
      },
    ]
  },
  {
    key: 4,
    label: "质量保证",
    checkboxDisabled: true,
    type: 'leaf'

  },
  {
    key: 8,
    label: "技术支持",
    checkboxDisabled: true,
    type: 'leaf'

  },
  {
    key: 88,
    label: "物理组",
    checkboxDisabled: true,
    disabled: true,

    type: 'group',
    children: [
      {
        key: 11,
        label: "物理组主管",
        checkboxDisabled: true,
        type: 'leaf',
      },
      {
        key: 12,
        label: "物理组测试工程师",
        checkboxDisabled: true,
        type: 'leaf',
      },
      {
        key: 14,
        label: "物理组分单工程师",
        checkboxDisabled: true,
        type: 'leaf',
      },
      {
        key: 13,
        label: "物理组初审",
        checkboxDisabled: true,
        type: 'leaf',
      },
    ]
  },
  {
    key: 5,
    label: "测试主管",
    checkboxDisabled: true,
    type: 'group',
    subLable: "组",


    children: [
      {
        key: 11,
        label: "物理组 主管",
        checkboxDisabled: true,
        type: 'leaf',

      },
      {
        key: 22,
        label: "老化组 主管",
        type: 'leaf',
        checkboxDisabled: true,
      },
      {
        key: 33,
        label: "可靠性组 主管",
        type: 'leaf',
        checkboxDisabled: true,
      }
    ]
  },
  {
    key: 6,
    type: 'group',
    label: "测试工程师",
    checkboxDisabled: true,
    children: [
      {
        key: 11,
        type: 'leaf',
        label: "物理组 测试工程师",
        checkboxDisabled: true,
      },
      {
        key: 12,
        type: 'leaf',
        label: "红外组 测试工程师",
        checkboxDisabled: true,
      },
      {
        key: 22,
        type: 'leaf',
        label: "老化组 测试工程师",
        checkboxDisabled: true,
      },
      {
        key: 33,
        type: 'leaf',
        label: "可靠性组 测试工程师",
        checkboxDisabled: true,
      }
    ]
  },
  {
    key: 7,
    label: "技术服务工程师",
    checkboxDisabled: true,
  },
]
const defaultExpandedKeys = ref(['40', '41'])
import { Fluid24Regular, Tag24Regular } from '@vicons/fluent';


const renderLabel = ({ option }: { option: TreeOption, checked: boolean, selected: boolean }) => {
  const label = option.label
  const subLable = option.subLable || ''
  if (label) {
    return h('span', [
      h('span', { class: 'mainLable' }, { default: () => label }),
      h('span', { class: 'subLable' }, { default: () => subLable })
    ])
  }
}

const renderSuffix = ({ option }: { option: TreeOption, checked: boolean, selected: boolean }) => {
  const suffixIcon = option.suffixIcon
  if (suffixIcon) {
    return h(NIcon, { size: '14' }, { default: () => h(suffixIcon) })
  }
}

const renderPrefix = ({ option }: { option: TreeOption, checked: boolean, selected: boolean }) => {
  const children = option.children
  if (children) {
    return h(NIcon, { size: '16' }, { default: () => h(Fluid24Regular) })
  } else {
    return h(NIcon, { size: '16' }, { default: () => h(Tag24Regular) })
  }
}

</script>



<style lang="less">
.rolesTrees {
  &.n-tree.n-tree--block-line .n-tree-node:not(.n-tree-node--disabled).n-tree-node--selected {
    position: relative;
    transition: all .3s ease;
    background-color: transparent;
    border: 1px solid var(--n-color-target);

    &::before {
      background-color: var(--n-color-target);

    }
  }

  & .n-tree-node {
    border: 1px solid transparent;

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: transparent;
      opacity: .2;
      border-radius: var(--n-node-border-radius);
      transition: .2s ease all;
    }
  }

  .subLable {
    margin-left: 10px;
    color: #aaa;
    font-size: 12px;
  }
}
</style>