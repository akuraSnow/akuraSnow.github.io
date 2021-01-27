function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/spin/style";
import _Spin from "antd/es/spin";

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

/**
 * author: huangyu
 * Tips消息提示组件
 */
import React, { Component } from 'react';
import "./Tips.css";

var TipsChild = /*#__PURE__*/function (_Component) {
  _inherits(TipsChild, _Component);

  var _super = _createSuper(TipsChild);

  function TipsChild(props) {
    var _this;

    _classCallCheck(this, TipsChild);

    _this = _super.call(this, props);
    _this.state = {
      showAni: false,
      endTime: props.endTime || 3000
    };
    return _this;
  }

  _createClass(TipsChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props = this.props,
          show = _this$props.show,
          cancleHandle = _this$props.cancleHandle,
          params = _this$props.params;
      var that = this;
      this.setState({
        showAni: show
      });

      if (params.type !== 'spin' && params.type !== 'loading' && params.type !== 'successLoading') {
        setTimeout(function () {
          _this2.setState({
            showAni: false
          }, function () {
            setTimeout(function () {
              var callBack = typeof params.callBack === 'function' ? params.callBack : function () {};
              callBack();
              cancleHandle();
            }, 200);
          });
        }, params.time || 2000);
      } else if (params.type === 'successLoading') {
        var changeEndTime = setInterval(function () {
          that.setState({
            endTime: that.state.endTime - 1000
          }, function () {
            if (that.state.endTime <= 0) {
              clearInterval(changeEndTime);

              _this2.setState({
                showAni: false
              }, function () {
                setTimeout(function () {
                  var callBack = typeof params.callBack === 'function' ? params.callBack : function () {};
                  callBack();
                  cancleHandle();
                }, 200);
              });
            }
          });
        }, 1000);
      } else {
        if (params.isShow === false) {
          setTimeout(function () {
            _this2.setState({
              showAni: false
            }, function () {
              setTimeout(function () {
                var callBack = typeof params.callBack === 'function' ? params.callBack : function () {};
                callBack();
                cancleHandle();
              }, 200);
            });
          }, params.time || 2000);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 重写组件的setState方法，直接返回空
      this.setState = function () {
        return;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var params = this.props.params;
      var _this$state = this.state,
          showAni = _this$state.showAni,
          endTime = _this$state.endTime;
      var icon = params.type === 'success' || params.type === 'successLoading' ? 'check-circle' : params.type === 'loading' ? 'loading' : params.type === 'fail' ? 'close-circle' : params.type === 'warning' ? 'exclamation-circle' : '';
      var str;

      if (params.type === 'spin') {
        str = /*#__PURE__*/React.createElement("div", {
          className: "tips-container spin ".concat(showAni ? 'animate' : 'leave'),
          style: {
            background: params.maskBackgroud
          }
        }, /*#__PURE__*/React.createElement(_Spin, {
          size: "default",
          tip: params.message
        }));
      } else if (params.type === 'successLoading') {
        str = /*#__PURE__*/React.createElement("div", {
          className: "tips-container ".concat(showAni ? 'animate' : 'leave')
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(params.type, " tips-content")
        }, /*#__PURE__*/React.createElement(_Icon, {
          className: "".concat(params.type, "-icon tips-icon"),
          type: icon
        }), /*#__PURE__*/React.createElement("span", null, params.message), /*#__PURE__*/React.createElement("span", {
          className: "tips-time"
        }, endTime / 1000, params.content)));
      } else {
        str = /*#__PURE__*/React.createElement("div", {
          className: "tips-container ".concat(showAni ? 'animate' : 'leave')
        }, /*#__PURE__*/React.createElement("div", {
          className: "".concat(params.type, " tips-content")
        }, /*#__PURE__*/React.createElement(_Icon, {
          className: "".concat(params.type, "-icon tips-icon"),
          type: icon
        }), /*#__PURE__*/React.createElement("span", null, params.message)));
      }

      return /*#__PURE__*/React.createElement("div", null, str);
    }
  }]);

  return TipsChild;
}(Component);

export { TipsChild as default };