"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable("biz_user", {
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
  },
  // 在执行数据库降级时调用的函数，删除 users 表
  down: async (queryInterface) => {
    await queryInterface.dropTable("biz_user");
  },
};
