"use strict";

const rule = {
  userId: [{ required: true, message: "userId不能为空" }],
  password: [{ required: true, message: "password不能为空" }],
  macAddress: [
    {
      required: true,
      message: "macAddress不能为空",
    },
  ],
  clientType: [
    {
      required: true,
      message: "clientType不能为空",
    },
  ],
};

module.exports = rule;
