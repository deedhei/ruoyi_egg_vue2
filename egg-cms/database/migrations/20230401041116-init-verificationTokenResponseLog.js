"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("verification_token_response_log", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
        field: "id",
      },
      sdkToken: {
        allowNull: true,
        type: STRING,
        field: "sdk_token",
      },
      requestId: {
        allowNull: true,
        type: STRING,
        field: "request_id",
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
    await queryInterface.dropTable("verification_token_response_log");
  },
};
