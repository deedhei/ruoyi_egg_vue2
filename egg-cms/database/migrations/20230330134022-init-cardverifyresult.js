"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("card_verify_result_log", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: INTEGER,
        field: "id",
      },
      passResult: {
        allowNull: true,
        type: INTEGER,
        field: "pass_result",
      },
      cardVideo: {
        allowNull: true,
        type: STRING,
        field: "card_video",
      },
      cardImage: {
        allowNull: true,
        type: STRING,
        field: "card_image",
      },
      cardInfoOcrJson: {
        allowNull: true,
        type: STRING,
        field: "card_info_ocr_json",
      },
      requestId: {
        allowNull: true,
        type: STRING,
        field: "request_id",
      },
      sdkVerificationId: {
        allowNull: true,
        type: INTEGER,
        field: "sdk_verification_id",
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
    await queryInterface.dropTable("card_verify_result_log");
  },
};
