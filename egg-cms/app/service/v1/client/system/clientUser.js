"use strict";

const Service = require("egg").Service;
const svgCaptcha = require("svg-captcha");

class CommonService extends Service {
  constructor(...arg) {
    super(...arg);
    this.modelName = "ClientUser";
  }
  async getUserId(query) {
    const { ctx } = this;
    // 在当前数据库中验证此用户思否存在
    const result = await ctx.model[this.modelName].findOne({
      where: {
        userId: query.userId,
      },
    });
    return result;
  }
  // 新增
  async create(query) {
    // 建立事务对象
    try {
      // 事务增操作
      let user = await this.ctx.model.ClientUser.create(query);
      return true;
    } catch (error) {
      this.ctx.throw(500, "服务器错误");
    }
  }
}

module.exports = CommonService;
