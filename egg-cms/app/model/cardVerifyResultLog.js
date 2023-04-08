"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const CardVerifyResultLog = app.model.define("card_verify_result_log", {
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

  return CardVerifyResultLog;
};
