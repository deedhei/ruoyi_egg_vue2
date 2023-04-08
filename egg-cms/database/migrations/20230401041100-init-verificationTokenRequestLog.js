"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("verification_token_request_log", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
        field: "id",
      },
      action: {
        allowNull: true,
        type: STRING,
        field: "action",
      },
      version: {
        allowNull: true,
        type: STRING,
        field: "version",
      },
      region: {
        allowNull: true,
        type: STRING,
        field: "region",
      },
      needVerifyIdCard: {
        allowNull: true,
        type: INTEGER,
        field: "need_verify_id_card",
      },
      idCardType: {
        allowNull: true,
        type: STRING,
        field: "id_card_type",
      },
      createTime: {
        allowNull: true,
        type: DATE,
        field: "create_time",
      },
    });
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface) => {
    await queryInterface.dropTable("verification_token_request_log");
  },
};
