"use strict";

module.exports = (app) => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const ClientUser = app.model.define("biz_user", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
      field: "id",
    },
    userId: {
      allowNull: true,
      type: INTEGER,
      field: "user_id",
    },
    realName: {
      allowNull: true,
      type: STRING,
      field: "real_name",
    },
    nickName: {
      allowNull: true,
      type: STRING,
      field: "nick_name",
    },
    sex: {
      allowNull: true,
      type: STRING,
      field: "sex",
    },
    address: {
      allowNull: true,
      type: STRING,
      field: "address",
    },
    email: {
      allowNull: true,
      type: INTEGER,
      field: "email",
    },
    avatar: {
      allowNull: true,
      type: STRING,
      field: "avatar",
    },
    phone: {
      allowNull: true,
      type: STRING,
      field: "phone",
    },
    password: {
      allowNull: true,
      type: STRING,
      field: "password",
    },
    birthDate: {
      allowNull: true,
      type: DATE,
      field: "birth_date",
    },
    token: {
      allowNull: true,
      type: STRING,
      field: "token",
    },
    tokenExpiredDate: {
      allowNull: true,
      type: DATE,
      field: "token_expired_date",
    },
    openid: {
      allowNull: true,
      type: STRING,
      field: "openid",
    },
    invitation: {
      allowNull: true,
      type: STRING,
      field: "invitation",
    },
    extraInfo: {
      allowNull: true,
      type: STRING,
      field: "extra_info",
    },
    registerTime: {
      allowNull: true,
      type: DATE,
      field: "register_time",
    },
    loginTime: {
      allowNull: true,
      type: DATE,
      field: "login_time",
    },
    clientType: {
      allowNull: true,
      type: STRING,
      field: "client_type",
    },
    macAddress: {
      allowNull: true,
      type: STRING,
      field: "mac_address",
    },
    sourceIp: {
      allowNull: true,
      type: STRING,
      field: "source_ip",
    },
  });

  return ClientUser;
};
