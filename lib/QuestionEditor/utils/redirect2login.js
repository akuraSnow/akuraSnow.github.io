"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = redirect2login;

var _encodeAndDecodeUrl = require("./encodeAndDecodeUrl");

function redirect2login() {
  // getDvaApp()._store.dispatch({
  //   type: 'login/logout',
  //   payload: {
  //     redirect: redirectUrl,
  //   },
  // });
  // 如果当前时登录页，则不跳转
  if (location.pathname === '/user/login') {
    return;
  }

  var redirectUrl = (0, _encodeAndDecodeUrl.encodeJsonToBase64URL)(JSON.stringify(location.pathname + location.search));

  window.g_app._store.dispatch({
    type: 'login/logout',
    payload: {
      redirect: redirectUrl
    }
  });
}