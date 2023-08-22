// 传入基座应用的store，为这个store添加一个订阅，有修改时，就更新子应用的state

import { useGlobalSetting } from "~/stores/global";
const globalStore = useGlobalSetting();

export function useQiankunGlobalState(
  { designStore, qiankunBusStore } /* 解构出每一个store */
) {
  // 从基座应用初始化一些参数
  globalStore.darkTheme = designStore.darkTheme;
  // 存入整个store
  globalStore.designStore = designStore;
  globalStore.qiankunBusStore = qiankunBusStore;
  console.log(globalStore.qiankunBusStore);

  // 订阅designStore以切换主题
  const unsubscribeDesignStore = designStore.$subscribe(
    (newState, oldState) => {
      globalStore.darkTheme = oldState.darkTheme;
    }
  );

  return { unsubscribeDesignStore };
}
