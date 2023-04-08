"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  require("./router/admin")(app); // 后台管理系统
  require("./router/blog")(app); // web端
  require("./router/tengxun")(app); // tenxunapi
  app.router.redirect("/", "/swagger-ui.html", 302);
};
