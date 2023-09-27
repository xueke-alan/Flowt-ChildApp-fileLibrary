import { http } from "~/utils/http/axios";

// 定义返回数据的接口
interface dataType {
  lable: string;
  suffix: any[];
}

/**
 * @description: query查询搜索结果
 */
export function searchquoteByQuery(query: string): Promise<dataType[]> {
  return http.request({
    url: `/quote?q=${query}`,
    method: "get",
  });
}
