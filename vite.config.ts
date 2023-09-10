import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
const useDevMode = true; // useDevMode = true 时不开启热更新
// import { microAppName } from "./public/qiankun.config.json";
// const dev = process.env.NODE_ENV === "development";

// const apiUrl = import.meta.env.VITE_API_BASE_URL;
// const microAppName = "account";
import { microAppName } from "./tsconfig.json";

export default defineConfig({
  plugins: [vue(), qiankun(microAppName, { useDevMode })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./template"),
      "@": path.resolve(__dirname, `./src/`, microAppName),
    },
  },
  // 开发环境与生产环境路径配置
  // 生产环境中必须写死base地址，带上https://
  base: `https://microapp.flowt.work/${microAppName}`,
  server: {
    // host:'0.0.0.0' ,//ip地址
    // port: 5678, // 设置服务启动端口号
    open: false,
  },
});
