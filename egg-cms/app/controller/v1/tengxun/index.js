"use strict";
// app/controller/users.js

const BaseController = require("../base");
const {
  ApiApplySdkVerificationToken,
  ApiGetSdkVerificationResultRequest,
} = require("../../../utils/tencentcloud");
const { booleanChange } = require("../../../utils/booleanChange");

/**
 * @Controller ekyc管理
 */
class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.modleName = "tengxun";
    this.serviceName = "index";
  }
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/applysdkverificationtoken
   * @Request body applyTokenRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */

  async apiApplySdkVerificationToken() {
    const { ctx, service } = this;
    let rule = {
      action: [{ type: "string" }, { required: true }],
      version: [{ type: "string" }, { required: true }],
      region: [{ type: "string" }, { required: true }],
      needVerifyIdCard: [{ type: "boolean" }, { required: true }],
      idCardType: [{ type: "string" }, { required: false }],
      disableChangeOcrResult: [{ type: "boolean" }, { required: false }],
      disableCheckOcrWarnings: [{ type: "boolean" }, { required: false }],
      extra: [{ type: "string" }, { required: false }],
    };

    let data = ctx.request.body;
    data.needVerifyIdCard = booleanChange(data.needVerifyIdCard);
    let validateResult = await this.ctx.validate(rule, data);
    if (!validateResult) {
      ctx.returnBody("参数错误", 400);
      return;
    }
    let resp = await ApiApplySdkVerificationToken(data);

    await service[
      this.app.config.public
    ].tengxun.index.addVerificationTokenRequestLog(data);

    await service[
      this.app.config.public
    ].tengxun.index.addVerificationTokenResponseLog(resp);

    ctx.returnBody(resp, 200);
  }
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/getsdkverificationresult
   * @Request body getsdkresultRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */
  async apiGetSdkVerificationResult() {
    const { ctx, service } = this;

    let rule = {
      action: [{ type: "string" }, { required: true }],
      version: [{ type: "string" }, { required: true }],
      region: [{ type: "string" }, { required: true }],
      sdkToken: [{ type: "string" }, { required: true }],
    };
    let data = ctx.request.body;
    const validateResult = await ctx.validate(rule, data);
    if (!validateResult) {
      ctx.returnBody("参数错误", 400);
      return;
    }
    let resp = await ApiGetSdkVerificationResultRequest(data);

    await service[
      this.app.config.public
    ].tengxun.index.addVerificationResultRequestLog(data);

    await service[
      this.app.config.public
    ].tengxun.index.addVerificationResultResponseLog(resp);

    await service[this.app.config.public].tengxun.index.addCardVerifyResultLog(
      resp.CardVerifyResults
    );

    await service[this.app.config.public].tengxun.index.addCompareResultLog(
      resp.CompareResults
    );

    ctx.returnBody(resp, 200);
  }

  // 查询
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/indexVerificationResultResponseLog
   * @Request body indexVerificationResultRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */
  async indexVerificationResultResponseLog() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.request.body.pageSize),
      offset: ctx.helper.parseInt(ctx.request.body.pageNum),
    };
    const result = await service[this.app.config.public][this.modleName][
      this.serviceName
    ].findListVerificationResultResponseLog(query);
    ctx.returnBody(result, 200);
  }
  // 查询
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/indexVerificationTokenResponseLog
   * @Request body indexVerificationResultRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */
  async indexVerificationTokenResponseLog() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.request.body.pageSize),
      offset: ctx.helper.parseInt(ctx.request.body.pageNum),
    };
    console.log("===================进来了==============");
    const result = await service[this.app.config.public][this.modleName][
      this.serviceName
    ].findListVerificationTokenResponseLog(query);
    ctx.returnBody(result, 200);
  }

  // 查询
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/indexVerificationResultRequestLog
   * @Request body indexVerificationResultRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */
  async indexVerificationResultRequestLog() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.request.body.pageSize),
      offset: ctx.helper.parseInt(ctx.request.body.pageNum),
    };

    const result = await service[this.app.config.public][this.modleName][
      this.serviceName
    ].findListVerificationResultRequestLog(query);
    console.log("[Log] result-->", result);
    ctx.returnBody(result, 200);
  }

  // 查询
  /**
   * @summary
   * @description
   * @router post /api/v1/ekyc/indexVerificationTokenRequestLog
   * @Request body indexVerificationResultRequest
   * @response 200 baseResponse 创建成功（DTO）
   * @apikey
   */
  async indexVerificationTokenRequestLog() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.request.body.pageSize),
      offset: ctx.helper.parseInt(ctx.request.body.pageNum),
    };

    const result = await service[this.app.config.public][this.modleName][
      this.serviceName
    ].findListVerificationTokenRequestLog(query);
    ctx.returnBody(result, 200);
  }
}

module.exports = Controller;
