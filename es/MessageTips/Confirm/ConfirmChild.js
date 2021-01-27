function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/button/style";
import _Button from "antd/es/button";

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
 * Comfirm消息提示组件
 */
import React, { Component } from 'react';
// @ts-ignore
import styles from "./Confirm.css";

var ConfirmChild = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmChild, _Component);

  var _super = _createSuper(ConfirmChild);

  function ConfirmChild(props) {
    var _this;

    _classCallCheck(this, ConfirmChild);

    _this = _super.call(this, props);

    _this.okHandle = function () {
      _this.props.params.onOk();

      _this.setState({
        showAni: false,
        loading: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            loading: false
          }, function () {
            _this.props.cancleHandle();
          });
        }, 200);
      });
    };

    _this.cancleHandle = function () {
      var params = _this.props.params;

      _this.setState({
        showAni: false
      }, function () {
        setTimeout(function () {
          var callBack = typeof params.cancle === 'function' ? params.cancle : function () {};
          callBack();

          _this.props.cancleHandle();
        }, 200);
      });
    };

    _this.state = {
      showAni: false,
      loading: false
    };
    return _this;
  }

  _createClass(ConfirmChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var show = this.props.show;
      var that = this;
      this.setState({
        showAni: show
      });
      window.addEventListener("popstate", function () {
        var box = document.getElementById('modalBox');

        if (box) {
          that.props && that.props.cancleHandle();
        }
      }, false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var show = nextProps.show;
      this.setState({
        showAni: show
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 重写组件的setState方法，直接返回空\
      var that = this;

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
          loading = _this$state.loading;
      return /*#__PURE__*/React.createElement("div", {
        id: "modalBox"
      }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(styles.modalContainer, " ").concat(showAni ? styles.animate : styles.leave)
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.modalBox
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.modalContent
      }, /*#__PURE__*/React.createElement("h2", null, params.content), /*#__PURE__*/React.createElement("p", null, params.desc)), /*#__PURE__*/React.createElement("div", {
        className: "".concat(styles.modalFooter, " ").concat(styles.clearfix)
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.modalFooterContent
      }, params.cancleText ? params.cancleText : /*#__PURE__*/React.createElement(_Button, {
        type: "default",
        onClick: this.cancleHandle
      }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(_Button, {
        type: "primary",
        onClick: this.okHandle,
        loading: loading
      }, "\u786E\u8BA4")))), /*#__PURE__*/React.createElement("div", {
        className: "".concat(styles.modalBg, " ").concat(showAni ? styles.animate : styles.leave),
        onClick: !params.forbiddenCheck ? this.cancleHandle : undefined
      })));
    }
  }]);

  return ConfirmChild;
}(Component);

export { ConfirmChild as default };