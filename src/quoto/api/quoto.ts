import { http } from "~/utils/http/axios";

// 定义返回数据的接口
interface dataType {
  lable: string;
  suffix: any[];
}

/**
 * @description: query查询搜索结果
 */
export function searchQuotoByQuery(query: string): Promise<dataType[]> {
  return http.request({
    url: `/quoto?q=${query}`,
    method: "get",
  });
}
