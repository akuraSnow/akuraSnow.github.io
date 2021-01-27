function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

// @ts-nocheck
import { Tips } from '../../../MessageTips';
import axios from 'axios';
import BaseConfig from './baseUrl';
import { Component } from 'react';

var JAVAHttp = /*#__PURE__*/function (_Component) {
  _inherits(JAVAHttp, _Component);

  var _super = _createSuper(JAVAHttp);

  function JAVAHttp(props) {
    var _this;

    _classCallCheck(this, JAVAHttp);

    _this = _super.call(this, props);

    _this.handleErr = function (error) {
      console.log("🚀 ~ file: javaHttp.ts ~ line 94 ~ JAVAHttp ~ error", error);
      Tips.close();

      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        var status = error.response.status; // token失效，重新登陆

        if (status === 401) {
          // Tips.open({
          //     'message': '登陆失效，请重新登陆',
          //     'type': 'fail',
          //     'callBack': () => {
          //     }
          // });
          Tips.open({
            message: "登录已失效，请重新登录！",
            type: 'fail'
          });
          localStorage.removeItem('UserId');
          localStorage.removeItem('userToken');
          localStorage.removeItem('AdminToken');
          location.reload();
        } // 服务器异常
        else if (status === 500) {
            console.log("JAVAHttp -> handleErr -> error", error.response);

            if (error.response.data.message && error.response.data.message.trim() === '注册账号失败: 数据已存在') {
              Tips.open({
                message: error.response.data.message,
                type: 'fail'
              });
            } else if (error.response.data.message && error.response.data.message.trim() === '修改用户信息失败: 数据已存在') {
              Tips.open({
                message: error.response.data.message,
                type: 'fail'
              });
            } else {
              // Tips.open({
              //     message: `服务器连接错误,请重试！`,
              //     type: 'fail'
              // });
              setTimeout(function () {
                Tips.open({
                  message: error.response.data.message,
                  type: 'fail'
                });
              }, 100);
            }

            if (typeof _this.timeOutCallBack === 'function') {
              _this.timeOutCallBack();
            }
          } else {
            // const errorText = codeMessage[error.response.status] || error.response.statusText || '';
            // const { status, url } = error.response;
            // notification.error({
            //   message: `请求错误`,
            //   description: error.response.data.message,
            // });
            Tips.open({
              message: error.response.data.message,
              type: 'fail'
            });
          }
      } else {
        setTimeout(function () {
          Tips.open({
            message: '网络错误，请稍后重试',
            type: 'fail'
          });
        }, 200);

        if (typeof _this.timeOutCallBack === 'function') {
          _this.timeOutCallBack();
        }
      }
    };

    _this.base = {
      baseUrl: BaseConfig.javaurl(),
      type: ''
    };
    _this.options = {
      url: null,
      params: null,
      data: null
    };
    _this.timeOutCallBack = undefined;
    return _this;
  }

  _createClass(JAVAHttp, [{
    key: "config",
    value: function config(obj, callBack) {
      this.options = obj;
      this.timeOutCallBack = callBack;
      return this.run();
    }
  }, {
    key: "setConfig",
    value: function setConfig(type) {
      return {
        // 加入权限
        method: type,
        headers: {
          usertoken: localStorage.getItem('userToken'),
          Authorization: 'Bearer ' + localStorage.getItem('userToken')
        },
        timeout: this.options.timeout,
        url: this.base.baseUrl + this.options.url,
        params: Object.assign(Object.assign({}, this.options.url.indexOf("version") === -1 ? {
          version: '1.0'
        } : {}), this.options.params),
        data: this.options.data
      };
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        axios.request(_this2.setConfig(_this2.options.type)).then(function (res) {
          if (res.status === 200) {
            resolve(res);
          } else {
            Tips.close();
            Tips.open({
              message: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
              type: 'fail',
              callBack: function callBack() {
                reject(res);
              }
            });
          }
        }).catch(function (e) {
          _this2.handleErr(e);

          reject(e);
        });
      });
    }
  }]);

  return JAVAHttp;
}(Component);

export default new JAVAHttp();