"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const VerificationResultRequestLog = app.model.define(
    "verification_result_request_log",
    {
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
      sdkToken: {
        allowNull: true,
        type: STRING,
        field: "sdk_token",
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
    }
  );

  return VerificationResultRequestLog;
};
