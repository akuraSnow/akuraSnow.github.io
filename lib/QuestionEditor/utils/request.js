"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _umiRequest = require("umi-request");

var _MessageTips = require("../../MessageTips");

var _redirect2login = _interopRequireDefault(require("./redirect2login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
// @ts-nocheck
var codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
};
/**
 * 异常处理程序
 */

var errorHandler = function errorHandler(error) {
  var response = error.response,
      data = error.data;

  if (error.type === 'Timeout') {
    _MessageTips.Tips.close();

    setTimeout(function () {
      _MessageTips.Tips.open({
        message: '网络超时，请稍后重试',
        type: 'fail'
      });
    }, 300);
    return {
      message: '网络超时，请稍后重试'
    };
  } else if (response && response.status) {
    var errorText = codeMessage[response.status] || response.statusText || '';

    if (response && response.status === 401) {
      setTimeout(function () {
        _MessageTips.Tips.open({
          message: '登录已失效，请重新登录！',
          type: 'fail'
        }); // 带上当前路径信息跳转到登录页


        (0, _redirect2login.default)();
      }, 300);
    } else {
      if (data.code !== 10804 && data.code !== 10415) {
        setTimeout(function () {
          _MessageTips.Tips.open({
            message: data.message,
            type: 'fail'
          });
        }, 10);
      }
    }
  } else {
    _MessageTips.Tips.close();

    setTimeout(function () {
      _MessageTips.Tips.open({
        message: '网络错误，请稍后重试',
        type: 'fail'
      });
    }, 300);
    return undefined; // Tips.open({
    //   message: '网络错误，请稍后重试',
    //   type: 'fail',
    // });
  }

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
  var proxyObj = {
    url: url
  };
  var handler = {
    get: function get(target, key, proxy) {
      var urlList = target[key].split('|');
      var urlName = urlList.shift();
      var urlString = urlList.join('/'); // 同意添加版本号

      if (urlString.indexOf('version') === -1) {
        urlString = urlString + '?version=1.0';
      } // 是java接口的时候


      if (urlName === 'javaUrl') {
        return process.env.javaUrl + urlString;
      } else if (urlName === 'url') {
        // .net接口
        return process.env.netUrl + urlString;
      } else if (urlName === 'questionanalyze') {
        // 试题解析接口
        return process.env.questionanalyze + urlString;
      }

      return target[key];
    }
  };
  var newUrl = new Proxy(proxyObj, handler); // 修改接口地址

  url = newUrl['url'];
  var c_token = localStorage.getItem('userToken');

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

request.interceptors.response.use(function (response, options) {
  var token = response.headers.get('userToken');

  if (token) {
    localStorage.setItem('userToken', token);
  }

  return response;
});
var _default = request;
exports.default = _default;