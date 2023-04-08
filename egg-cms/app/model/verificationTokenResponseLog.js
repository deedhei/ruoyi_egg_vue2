"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const VerificationTokenResponseLog = app.model.define(
    "verification_token_response_log",
    {
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
    }
  );

  return VerificationTokenResponseLog;
};
