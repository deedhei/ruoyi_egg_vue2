module.exports = (app) => {
  const { router, controller } = app;
  /**
   * 客户端
   */
  router.post(
    `/api/${app.config.public}/client/system/clientUser/login`,
    controller[app.config.public].client.system.clientUser.login
  );
  router.post(
    `/api/${app.config.public}/client/system/clientUser/create`,
    controller[app.config.public].client.system.clientUser.create
  );
};
