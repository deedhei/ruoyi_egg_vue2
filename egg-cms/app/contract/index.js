module.exports = {
  // baseRequest: {
  //   id: {
  //     type: "string",
  //     description: "id 唯一键",
  //     required: true,
  //     example: "1",
  //   },
  // },
  baseResponse: {
    code: { type: "integer", required: true, example: 200 },
    data: { type: "string", example: "请求成功" },
    message: { type: "string", example: "请求成功" },
  },
  loginClientBaseResponse: {
    code: { type: "integer", required: true, example: 200 },
    data: { type: "string", example: "请求成功" },
    message: { type: "string", example: "请求成功" },
  },
  loginClientBaseRequest: {
    userId: { type: "string" },
    password: { type: "string" },
  },
  createClientBaseRequest: {
    userId: { type: "integer", require: true },
    password: { type: "string", require: true },
    registerTime: { type: "string", require: false },
    clientType: { type: "string", require: true, enum: ["ios", "android"] },
    macAddress: { type: "string", require: true },
    sourceIp: { type: "string", require: false },
  },
  applyTokenRequest: {
    action: { type: "string", required: true },
    version: { type: "string", required: true },
    region: { type: "string", required: true },
    needVerifyIdCard: { type: "boolean", required: true },
    idCardType: { type: "string", required: false },
    disableChangeOcrResult: { type: "boolean", required: false },
    disableCheckOcrWarnings: { type: "boolean", required: false },
    extra: { type: "string", required: false },
  },
  getsdkresultRequest: {
    action: { type: "string", required: true },
    version: { type: "string", required: true },
    region: { type: "string", required: true },
    sdkToken: { type: "string", required: true },
  },
  indexVerificationResultRequest: {
    pageSize: { type: "string", required: true },
    pageNum: { type: "string", required: true },
  },
};
