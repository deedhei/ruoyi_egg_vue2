const tencentcloud = require("tencentcloud-sdk-nodejs-intl-en");

const FaceidClient = tencentcloud.faceid.v20180301.Client;
const models = tencentcloud.faceid.v20180301.Models;
const Credential = tencentcloud.common.Credential;
const ClientProfile = tencentcloud.common.ClientProfile;
const HttpProfile = tencentcloud.common.HttpProfile;
let cred = new Credential("asdasd", "123123");
// 这里是秘钥自己去注册
let clientProfile = new ClientProfile("HmacSHA256", new HttpProfile());
let client = new FaceidClient(cred, "ap-singapore", clientProfile);

let request = new models.ApplySdkVerificationTokenRequest();
request.IdCardType = "IndonesiaIDCard";
request.NeedVerifyIdCard = false;

function ApiApplySdkVerificationToken(data) {
  let {
    action,
    version,
    region,
    needVerifyIdCard,
    idCardType,
    disableChangeOcrResult,
    disableCheckOcrWarnings,
    extra,
  } = data;
  if (action) {
    request.Action = action;
  }
  if (version) {
    request.Version = version;
  }

  if (region) {
    request.Region = region;
  }

  if (idCardType) {
    request.IdCardType = idCardType;
  }

  if (disableChangeOcrResult) {
    request.DisableChangeOcrResult = disableChangeOcrResult;
  }

  if (disableCheckOcrWarnings) {
    request.DisableCheckOcrWarnings = disableCheckOcrWarnings;
  }
  if (needVerifyIdCard) {
    request.NeedVerifyIdCard = needVerifyIdCard;
  }
  if (extra) {
    request.Extra = extra;
  }

  return new Promise((resolve, reject) => {
    client.ApplySdkVerificationToken(request, function (error, resp) {
      if (error == null) {
        resolve(resp);
      } else {
        reject(error);
      }
    });
  });
}

function ApiGetSdkVerificationResultRequest(req) {
  const Action = req.action;
  const Version = req.version;
  const Region = req.region;
  const SdkToken = req.sdkToken;
  let request = new models.GetSdkVerificationResultRequest();
  request.Action = SdkToken;
  request.Version = SdkToken;
  request.Region = SdkToken;
  request.SdkToken = SdkToken;
  return new Promise((resolve, reject) => {
    client.GetSdkVerificationResult(request, function (error, resp) {
      try {
        resolve(resp);
      } catch (err) {
        reject(error);
      }
    });
  });
}
module.exports = {
  ApiApplySdkVerificationToken,
  ApiGetSdkVerificationResultRequest,
};

// app.get("/getToken", (req, res) => {
//   client.ApplySdkVerificationToken(request, function (error, resp) {
//     console.log(error);
//     console.log(resp);
//     res.send(resp);
//   });
// });
// app.post("/sendReq", (req, res) => {
//   const SdkToken = req.query.SdkToken;
//   console.log("SdkToken", SdkToken);

//   let request = new models.GetSdkVerificationResultRequest();
//   request.SdkToken = SdkToken;

//   client.GetSdkVerificationResult(request, function (error, resp) {
//     try {
//       console.log("GetSdkVerificationResultResp", resp);
//       console.log("GetSdkVerificationResultError", error);
//       res.send(resp);
//     } catch (err) {
//       res.send(err);
//     }
//   });
// });
