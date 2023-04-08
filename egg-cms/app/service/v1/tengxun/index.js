const BaseService = require("../base");
class tengxunService extends BaseService {
  constructor(...arg) {
    super(...arg);
  }
  // -----------------记录返回值重要日志------------------------
  async addCardVerifyResultLog(data) {
    try {
      const result = await this.ctx.model.CardVerifyResultLog.create(data);
    } catch (error) {}
  }
  async addCompareResultLog(data) {
    try {
      const result = await this.ctx.model.compareResultLog.create(data);
    } catch (error) {}
  }

  // -----------------记录日志------------------------
  async addVerificationResultRequestLog(data) {
    try {
      // let { action,version,region,sdkToken} = data
      data.userId = this.ctx.state.user.id || this.ctx.state.clientUser.id;
      data.createTime = new Date();
      const result = await this.ctx.model.VerificationResultRequestLog.create(
        data
      );
    } catch (error) {}
  }
  async addVerificationResultResponseLog(data) {
    try {
      let userId = this.ctx.state.user.id || this.ctx.state.clientUser.id;
      let { Result, Description, ChargeCount, Extra, RequestId } = data;
      let query = {
        result: Result,
        description: Description,
        chargeCount: ChargeCount,
        extra: Extra,
        requestId: RequestId,
        userId: userId,
        createTime: new Date(),
      };
      const result = await this.ctx.model.VerificationResultResponseLog.create(
        query
      );
    } catch (error) {}
  }
  async addVerificationTokenRequestLog(data) {
    try {
      let { action, version, region, needVerifyIdCard, idCardType } = data;
      let query = {
        action,
        version,
        region,
        needVerifyIdCard,
        idCardType,
        createTime: new Date(),
      };
      const result = await this.ctx.model["VerificationTokenRequestLog"].create(
        query
      );
    } catch (error) {}
  }
  async addVerificationTokenResponseLog(data) {
    try {
      let { SdkToken, RequestId } = data;
      console.log("[Log] data-->", data);
      let query = {
        sdkToken: SdkToken,
        requestId: RequestId,
        createTime: new Date(),
      };
      const result = await this.ctx.model.VerificationTokenResponseLog.create(
        query
      );
    } catch (error) {}
  }
  // -----------------分页查询日志------------------------
  async findListVerificationResultResponseLog(query) {
    let obj = {
      where: {},
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    const result =
      await this.ctx.model.VerificationResultResponseLog.findAndCountAll(obj);
    console.log("[Log] 查询 result-->", result);
    return result;
  }
  async findListVerificationTokenResponseLog(query) {
    let obj = {
      where: {},
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    const result =
      await this.ctx.model.VerificationTokenResponseLog.findAndCountAll(obj);
    console.log("[Log] 查询 result-->", result);
    return result;
  }

  async findListVerificationResultRequestLog(query) {
    let obj = {
      where: {},
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    const result =
      await this.ctx.model.VerificationResultRequestLog.findAndCountAll(obj);
    console.log("[Log] 查询 result-->", result);
    return result;
  }
  async findListVerificationTokenRequestLog(query) {
    let obj = {
      where: {},
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    const result =
      await this.ctx.model.VerificationTokenRequestLog.findAndCountAll(obj);
    console.log("[Log] 查询 result-->", result);
    return result;
  }
}

module.exports = tengxunService;
