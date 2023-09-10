import { http } from "~/utils/http/axios";

// 定义返回数据的接口
interface UserData {
  page: number;
  pagesize: number;
  total: number;
  users: any[];
}
/**
 * @description: 获取用户信息
 */
export function getUserAll({ page, pagesize }): Promise<UserData> {
  return http.request({
    url: `user?page=${page}&pagesize=${pagesize}`,
    method: "get",
  });
}

/**
 * @description: 获取某个用户信息
 */
export function getUserByStaffId(staffId: string): Promise<UserData> {
  return http.request({
    url: `user/info/${staffId}`,
    method: "get",
  });
}
