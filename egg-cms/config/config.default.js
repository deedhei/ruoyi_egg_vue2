/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
const path = require("path");

module.exports = (appInfo) => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 7001,
  //     hostname: '0.0.0.0'
  //   }
  // }
  // # 注意，开启此模式后，应用就默认自己处于反向代理之后，
  // # 会支持通过解析约定的请求头来获取用户真实的 IP，协议和域名。
  // # 如果你的服务未部署在反向代理之后，请不要开启此配置，以防被恶意用户伪造请求 IP 等信息。
  config.proxy = true;
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1605250020379_4355";
  config.public = "v1"; // 版本
  config.whiteList = [
    "/",
    `/api/${config.public}/login`,
    `/api/${config.public}/logout`,
    `/api/${config.public}/captcha`,
    `/api/${config.public}/front/*`,
    "/web/*",
    "/swagger-ui.html",
    "/swagger-doc",
    // `/api/${config.public}/tengxun/*`,
    `/api/${config.public}/client/system/clientUser/login`,
    `/api/${config.public}/client/system/clientUser/create`,
  ]; // api 白名单

  // file模式上传文件
  config.multipart = {
    mode: "file",
  };

  // config.static = {
  //   prefix: '/public',
  // };
  config.static = {
    prefix: "/",
    dir: [
      path.join(__dirname, "../app/public"),
      path.join(__dirname, "../www"),
    ], // 多静态文件入口
  };

  // add your middleware config here
  config.middleware = [
    "gzip",
    "errorHandler", // 全局错误处理
    "jwt",
  ];

  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.jwt = {
    secret: "egg-api-jwt",
    expiresIn: 60 * 60 * 24, // 1天过期
  };

  config.bodyParser = {
    jsonLimit: "1mb",
    formLimit: "1mb",
  };
  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = "json";
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: "参数错误",
        };
      }
    },
  };

  config.sequelize = {
    dialect: "mysql", // 表示使用mysql

    port: 3306, // mysql服务端口
    database: "egg_cms_development", // 数据库名
    username: "root", // 数据库用户名
    password: "1234", // 数据库密码
    host: "127.0.0.1", // 连接的数据库主机地址

    timezone: "+8:00", // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    define: {
      // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      freezeTableName: true, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    dialectOptions: {
      // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === "DATETIME") {
          return field.string();
        }
        return next();
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: ["*"],
  };
  config.cors = {
    origin: "*",
    allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  config.swaggerdoc = {
    dirScanner: "./app/controller", //插件扫描的文档路径
    apiInfo: {
      title: "swagger文档",
      description: "egg.js swagger-demo文档",
      version: "1.0.0",
    },
    // 开启enableSecurity，配置securityDefinitions.apikey
    securityDefinitions: {
      apikey: {
        type: "apiKey",
        name: "Authorization", //jwt一般是这名字，根据需要调整
        in: "header",
      },
    },
    consumes: ["application/json", "multipart/form-data"], // 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html
    produces: ["application/json", "multipart/form-data"], // 指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    schemes: ["http", "https"],
    routerMap: true, // 是否自动生成route
    enable: true,
    enableSecurity: true,
  };
  return {
    ...config,
  };
};
