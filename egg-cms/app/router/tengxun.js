module.exports = (app) => {
  const { router, controller } = app;
  router.post(
    `/api/${app.config.public}/ekyc/applysdkverificationtoken`,
    controller[app.config.public].tengxun.index.apiApplySdkVerificationToken
  ); // 获取ApplySdkVerificationToken 对接腾讯云
  router.post(
    `/api/${app.config.public}/ekyc/getsdkverificationresult`,
    controller[app.config.public].tengxun.index.apiGetSdkVerificationResult
  ); // 获取ApplySdkVerificationToken 对接腾讯云
  // ----------------------分页查询------------------------------
  router.post(
    `/api/${app.config.public}/ekyc/indexVerificationResultResponseLog`,
    controller[app.config.public].tengxun.index
      .indexVerificationResultResponseLog
  );
  router.post(
    `/api/${app.config.public}/ekyc/indexVerificationTokenResponseLog`,
    controller[app.config.public].tengxun.index
      .indexVerificationTokenResponseLog
  );

  router.post(
    `/api/${app.config.public}/ekyc/indexVerificationResultRequestLog`,
    controller[app.config.public].tengxun.index
      .indexVerificationResultRequestLog
  );
  router.post(
    `/api/${app.config.public}/ekyc/indexVerificationTokenRequestLog`,
    controller[app.config.public].tengxun.index.indexVerificationTokenRequestLog
  );
};
