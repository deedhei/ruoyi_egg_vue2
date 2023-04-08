"use strict";
const Controller = require("egg").Controller;
const fs = require("fs");
const JWT = require("jsonwebtoken");
const { mkdirsSync } = require("../../../../utils/tools");
const { log } = require("console");
/**
 * @Controller 客户端管理
 */
class clientUserController extends Controller {
  constructor(...arg) {
    super(...arg);
    this.serviceName = "clientUser";
    this.modleName = "system";
  }
  // 登录
  /**
   * @summary
   * @description
   * @router post /api/v1/client/system/clientUser/login
   * @Request body loginClientBaseRequest
   * @response 200 loginClientBaseResponse 创建成功（DTO）
   *
   */
  async login() {
    try {
      const { ctx, app, service } = this;
      // 获取登录时的 username, password
      const { userId, password } = ctx.request.body;
      const query = ctx.request.body;
      // 根据用户名，在数据库查找相对应的id操作

      const userInfo = await service[app.config.public].client[this.modleName][
        this.serviceName
      ].getUserId(query);
      // 1、没找到说明没有该用户
      if (!userInfo || !userInfo.password) {
        ctx.body = {
          status: 500,
          desc: "账号不存在",
          data: null,
        };
        return;
      }
      // 2、找到用户，并且判断输入密码与数据库中用户密码
      let checkPwd = await ctx.compare(
        query.password,
        userInfo.get("password")
      ); // 对比两次密码是否一致
      if (userInfo && !checkPwd) {
        ctx.body = {
          status: 500,
          msg: "账号密码错误",
          data: null,
        };
        return;
      }
      // 签发token
      const token = JWT.sign(
        {
          userId: userInfo.userId,
          password: userInfo.password,
        },
        this.config.jwt.secret,
        {
          expiresIn: this.config.jwt.expiresIn,
        }
      );
      ctx.state.clientUser = userInfo;
      userInfo.token = token;
      ctx.returnBody({
        userInfo: userInfo,
      });
    } catch (error) {
      throw error;
    }
  }
  // 新增
  /**
   * @summary
   * @description
   * @router post /api/v1/client/system/clientUser/create
   * @Request body createClientBaseRequest
   * @response 200 baseResponse
   */
  async create() {
    const { ctx, service } = this;
    let validateResult = await ctx.checkValidate(
      ctx.request.body,
      "clientUser.create"
    );
    if (!validateResult) return;
    ctx.request.body["password"] = await ctx.genHash(
      ctx.request.body["password"]
    );
    let query = {
      userId: ctx.request.body["userId"],
      password: ctx.request.body["password"],
      clientType: ctx.request.body["clientType"],
      macAddress: ctx.request.body["macAddress"],
      registerTime: new Date(),
      sourceIp: ctx.request.ip,
    };
    console.log("[Log] query-->", query);
    const result = await service[this.app.config.public].client[this.modleName][
      this.serviceName
    ].create(query);

    if (result) {
      ctx.returnBody(null, 200);
    } else {
      ctx.returnBody(null, 500);
    }
  }
}

module.exports = clientUserController;
