"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const VerificationResultResponseLog = app.model.define(
    "verification_result_response_log",
    {
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
    }
  );

  return VerificationResultResponseLog;
};
