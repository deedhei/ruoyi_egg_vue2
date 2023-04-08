import HttpRequest from "@/utils/request";

// 查询  CardVerifyResultLog 列表
export function getCardVerifyResultLog(params = {}) {
  return HttpRequest("/admin/log/cardVerifyResultLog", "get", params);
}

// 根据id删除  CardVerifyResultLog 列表
export function delCardVerifyResultLog(ids) {
  return HttpRequest("/admin/log/cardVerifyResultLog/" + ids, "delete");
}

// 查询  CompareResultLog 列表
export function getCompareResultLog(params = {}) {
  return HttpRequest("/admin/log/compareResultLog", "get", params);
}

// 根据id删除  CompareResultLog 列表
export function delCompareResultLog(ids) {
  return HttpRequest("/admin/log/compareResultLog/" + ids, "delete");
}
