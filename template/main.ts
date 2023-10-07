import App from "./App.vue";
import { router } from "~/router/index"; // 导入路由配置

import { createApp } from "vue";
import { setupStore } from "~/stores";
import Resizer from 'v-resize-observer'

// 挂载函数
function render() {
  const app = createApp(App);

  // 自定义指令名和组件名
  app.use(Resizer, {
    directive: 'resize',
    component: 'ResizeComponent'
  })
  // 挂载状态管理
  setupStore(app);
  app.use(router);
  app.mount('#app', true);

}

render()

