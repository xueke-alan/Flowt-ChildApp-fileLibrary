import { http } from "~/utils/http/axios";

// 定义返回数据的接口
interface dataType {}
/**
 * @description: Api描述
 */
export function apiName(): Promise<dataType> {
  return http.request({
    url: "",
    method: "get",
  });
}
