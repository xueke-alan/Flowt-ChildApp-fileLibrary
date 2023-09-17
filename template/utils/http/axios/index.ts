import axios from "axios";
// import { getAppEnvConfig } from "~/utils/env";
// const { VITE_GLOB_API_URL } = process.env.VITE_GLOB_API_URL;
// const VITE_GLOB_API_URL = "https://api.flowt.work";

// 创建 Axios 实例
const http = axios.create({
  baseURL: import.meta.env.VITE_GLOB_API_URL, // 设置默认的 baseURL
  timeout: 10000, // 请求超时时间，单位为毫秒
  headers: {
    "Content-Type": "application/json", // 设置默认的请求头
    // 在这里可以添加其他默认请求头，如认证信息等
  },
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在请求被发送之前，可以进行一些预处理，如添加认证信息等
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 在这里可以对响应数据进行统一处理，如格式化数据等
    return response.data?.result;
  },
  (error) => {
    // 处理响应错误，例如处理错误状态码等
    return Promise.reject(error);
  }
);

export { http };
