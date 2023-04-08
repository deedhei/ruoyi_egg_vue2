import HttpRequest from "@/utils/request";

// Applysdkverificationtoken
export function getApplysdkverificationtoken(params = {}) {
  return HttpRequest("/ekyc/applysdkverificationtoken", "post", params);
}

export function getGetsdkverificationresult(params = {}) {
  return HttpRequest("/ekyc/getsdkverificationresult", "post", params);
}

export function getIndexVerificationResultResponseLog(params = {}) {
  return HttpRequest(
    "/ekyc/indexVerificationResultResponseLog",
    "post",
    params
  );
}
