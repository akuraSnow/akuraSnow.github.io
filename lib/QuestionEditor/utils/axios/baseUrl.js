"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * @Author: your name
 * @Date: 2019-11-07 18:24:36
 * @LastEditTime: 2019-11-14 13:34:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \constructionService(共建系统)\src\utils\axios\baseUrl.ts
 */
var NODE_ENV = process.env.NODE_ENV;

var BaseConfig = function BaseConfig() {
  _classCallCheck(this, BaseConfig);

  this.url = function () {
    return process.env.netUrl;
  };

  this.javaurl = function () {
    return process.env.javaUrl;
  };

  this.questionanalyze = function () {
    return process.env.questionanalyze;
  };

  this.fileService = function () {
    return process.env.fileService;
  };
};

var _default = new BaseConfig();

exports.default = _default;