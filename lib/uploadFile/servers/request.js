"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _umiRequest = require("umi-request");

/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 13:13:45
 * @LastEditTime: 2019-11-22 13:03:05
 * @LastEditors: Please set LastEditors
 */

/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */

/**
 * 异常处理程序
 */
var errorHandler = function errorHandler(error) {
  var response = error.response,
      data = error.data;
  return data;
};
/**
 * 配置request请求时的默认参数
 */


var request = (0, _umiRequest.extend)({
  errorHandler: errorHandler,
  timeout: 10000,
  credentials: 'include'
}); // request拦截器, 改变url 或 options.

request.interceptors.request.use(function (url, options) {
  var c_token = options.token;

  if (c_token) {
    var headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      userToken: c_token,
      Authorization: 'Bearer ' + c_token
    };
    return {
      url: url,
      options: Object.assign(Object.assign({}, options), {
        headers: headers
      })
    };
  } else {
    var _headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      userToken: c_token
    };
    return {
      url: url,
      options: Object.assign({}, options)
    };
  }
}); // response拦截器, 处理response
// @ts-ignore

request.interceptors.response.use(function (response, options) {
  var token = response.headers.get('userToken');

  if (token) {
    localStorage.setItem('userToken', token);
  }

  return response;
});
var _default = request;
exports.default = _default;