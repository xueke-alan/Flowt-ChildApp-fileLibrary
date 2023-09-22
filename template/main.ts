// import { createApp } from "vue";
import App from "./App.vue";
import { router } from "~/router/index"; // 导入路由配置
// import { createPinia } from "pinia";
import { useQiankunGlobalState } from "~/hooks/useGlobalState";
import { createApp } from "vue";
// import mitt from 'mitt';
import { setupStore } from "~/stores/index";

import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";

// 挂载函数
function render(props: any) {
  const app = createApp(App);
  const { container } = props;
  console.log(props);

  // 挂载状态管理
  setupStore(app);
  app.use(router);
  app.mount(container ? container.querySelector("#app") : "#app"); // 这个ID为index.html中div的ID名称
  // app.config.globalProperties.mittBus = mitt();
}

let unsubscribList: any[] = [];

renderWithQiankun({
  mount(props) {
    console.log(props);
    render(props);

    props.message();

    // 将传入的state存入自己的store
    const { unsubscribeDesignStore } = useQiankunGlobalState(
      props.globalStateList
    );
    //
    props.globalStateList.qiankunBusStore.loading = false;
    unsubscribList.push(unsubscribeDesignStore);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount() {
    console.log("unmount");
    unsubscribList.forEach((subscribe) => {
      subscribe();
    });
  },
  update() {
    console.log("update");
  },
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
