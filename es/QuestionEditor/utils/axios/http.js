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

var Http = /*#__PURE__*/function (_Component) {
  _inherits(Http, _Component);

  var _super = _createSuper(Http);

  function Http(props) {
    var _this;

    _classCallCheck(this, Http);

    _this = _super.call(this, props);

    _this.handleErr = function (error) {
      Tips.close();

      if (error.response) {
        // 请求已发出，但服务器响应的状态码不在 2xx 范围内
        var status = error.response.status; // token失效，重新登陆

        if (status === 401) {// Tips.open({
          //     'message': '登陆失效，请重新登陆',
          //     'type': 'fail',
          //     'callBack': () => {
          //     }
          // });
          // localStorage.removeItem('AdminUserId');
          // localStorage.removeItem('userToken');
          // localStorage.removeItem('AdminToken');
          // location.reload();
        } // 服务器异常
        else {
            Tips.open({
              message: "\u670D\u52A1\u5668\u8FDE\u63A5\u9519\u8BEF,\u8BF7\u91CD\u8BD5\uFF01",
              type: 'fail'
            });
          }
      } else {
        Tips.open({
          'message': '网络超时！',
          'type': 'fail'
        });

        if (typeof _this.timeOutCallBack === 'function') {
          _this.timeOutCallBack();
        }
      }
    };

    _this.base = {
      baseUrl: BaseConfig.url(),
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

  _createClass(Http, [{
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
          // Authorization: `bearer ${localStorage.getItem('userToken')}`,
          // Authorization: `Bearer 303a8708c2ee45ffb5ac2f9a5d44610b`,
          apptoken: 'RUFT'
        },
        // timeout: 20000,
        url: this.base.baseUrl + this.options.url,
        params: this.options.params,
        data: this.options.data // Post的参数

      };
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        axios.request(_this2.setConfig(_this2.options.type)).then(function (res) {
          if (res.data.Status === 1) {
            resolve(res);
          } else {
            Tips.close();
            Tips.open({
              message: "\u670D\u52A1\u5668\u8FDE\u63A5\u9519\u8BEF,\u8BF7\u91CD\u8BD5\uFF01",
              type: 'fail',
              callBack: function callBack() {
                resolve(res);
              }
            });
          }
        }).catch(_this2.handleErr);
      });
    }
  }]);

  return Http;
}(Component);

export default new Http();