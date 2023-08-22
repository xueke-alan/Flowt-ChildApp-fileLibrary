import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import qiankun from "vite-plugin-qiankun";
const useDevMode = true; // useDevMode = true 时不开启热更新
import { baseUrl } from "./public/qiankun.config.json";

export default defineConfig({
  base: `/${baseUrl}`,
  plugins: [vue(), qiankun(baseUrl, { useDevMode })],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./template"),
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // host:'0.0.0.0' ,//ip地址
    port: 5678, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
  },
});
