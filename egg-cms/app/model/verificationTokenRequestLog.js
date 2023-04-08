"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const VerificationTokenRequestLog = app.model.define(
    "verification_token_request_log",
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
    }
  );

  return VerificationTokenRequestLog;
};
