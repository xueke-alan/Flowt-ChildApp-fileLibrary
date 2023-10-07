import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


import { microAppName } from "./tsconfig.json";
import zipDist from "./plugin/zip";

export default defineConfig({
  plugins: [
    vue(),

    zipDist(microAppName),
  ],
  // root: "src",
  build: {
    outDir: `./dist/${microAppName}`,
    rollupOptions: {
      // 设置 --module 选项为 "esnext"
      output: {
        format: "es",
      },

    },
  },
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./template"),
      "@": path.resolve(__dirname, `./src/`, microAppName),
      "!": path.resolve(__dirname, "./"),
    },
  },

  // 开发环境与生产环境路径配置
  // 生产环境中必须写死base地址，带上https://
  base: `https://microapp.flowt.work/${microAppName}`,
  server: {
    // host:'0.0.0.0' ,//ip地址
    port: 5173, // 设置服务启动端口号
    open: false,

  },
});
