"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("verification_result_response_log", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
        field: "id",
      },
      result: {
        allowNull: true,
        type: STRING,
        field: "result",
      },
      description: {
        allowNull: true,
        type: STRING,
        field: "description",
      },
      chargeCount: {
        allowNull: true,
        type: STRING,
        field: "charge_count",
      },
      extra: {
        allowNull: true,
        type: STRING,
        field: "extra",
      },
      requestId: {
        allowNull: true,
        type: INTEGER,
        field: "request_id",
      },
      userId: {
        allowNull: true,
        type: INTEGER,
        field: "user_id",
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
    await queryInterface.dropTable("verification_result_response_log");
  },
};
