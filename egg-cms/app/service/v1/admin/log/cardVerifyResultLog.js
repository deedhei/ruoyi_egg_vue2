"use strict";

const BaseService = require("../../base");
const { getDeptWhere } = require("../../../../utils/tools");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = "CardVerifyResultLog";
  }

  // 查询, 传页面，分页返回，否则全部返回
  async findList(query) {
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
    const result = await this.ctx.model[this.modelName].findAndCountAll(obj);
    return result;
  }

  // 查询某条数据
  async findOne(id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id,
      },
    });
  }
  // 新增
  async create(query) {
    // 建立事务对象
    // const transaction = await this.ctx.model.transaction();
    try {
      // 事务增操作
      let user = await this.ctx.model[this.modelName].create(query);
      // 提交事务
      return true;
    } catch (error) {
      this.ctx.throw(500, "服务器错误");
    }
  }
  // 修改
  async update(query, id) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      // 事务增操作
      await this.ctx.model[this.modelName].update(query, {
        where: {
          id,
        },
      });
      return true;
    } catch (error) {
      this.ctx.throw(500, "服务器错误");
    }
  }

  // 删除
  async destroy(ids) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      await this.ctx.model[this.modelName].destroy({
        where: {
          id: {
            [Op.or]: ids,
          },
        },
      });
      return true;
    } catch (error) {
      this.ctx.throw(500, "服务器错误");
    }
  }
}

module.exports = Service;
