"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE, FLOAT } = app.Sequelize;

  const CompareResultLog = app.model.define("compare_result_log", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
      field: "id",
    },
    errorCode: {
      allowNull: true,
      type: STRING,
      field: "error_code",
    },
    errorMsg: {
      allowNull: true,
      type: STRING,
      field: "error_msg",
    },
    liveData: {
      allowNull: true,
      type: STRING,
      field: "live_data",
    },
    liveVideo: {
      allowNull: true,
      type: STRING,
      field: "live_video",
    },
    liveErrorCode: {
      allowNull: true,
      type: STRING,
      field: "live_error_code",
    },
    liveErrorMsg: {
      allowNull: true,
      type: STRING,
      field: "live_error_msg",
    },
    bestFrame: {
      allowNull: true,
      type: STRING,
      field: "best_frame",
    },
    profileImage: {
      allowNull: true,
      type: STRING,
      field: "profile_image",
    },
    compareErrorCode: {
      allowNull: true,
      type: STRING,
      field: "compare_error_code",
    },
    compareErrorMsg: {
      allowNull: true,
      type: STRING,
      field: "compare_error_msg",
    },
    sim: {
      allowNull: true,
      type: FLOAT,
      field: "sim",
    },
    needChargeResult: {
      allowNull: true,
      type: INTEGER,
      field: "need_charge_result",
    },
    cardInfoInputJson: {
      allowNull: true,
      type: STRING,
      field: "card_info_input_json",
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

  return CompareResultLog;
};
