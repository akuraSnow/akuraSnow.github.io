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

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import React from 'react';
import './draggableModal.css';
import debounce from 'lodash/debounce';
/*  拖拽组件  */

var DragModel = /*#__PURE__*/function (_React$Component) {
  _inherits(DragModel, _React$Component);

  var _super = _createSuper(DragModel);

  function DragModel(props) {
    var _this;

    _classCallCheck(this, DragModel);

    _this = _super.call(this, props);

    _this.initialEvent = function () {
      var oDiv = document.getElementById('div1');
      var oMoveDom = document.getElementsByClassName('header-title')[0];

      _this.drag(oDiv, oMoveDom);
    };

    _this.changVal = function (L, T) {
      _this.props.postion && _this.props.postion({
        left: L,
        top: T
      });
    };

    _this.drag = function (obj, oMoveDom) {
      var that = _assertThisInitialized(_this);

      obj.onmousedown = function (e) {
        var ev = e || event;
        var disX = ev.clientX - this.offsetLeft;
        var disY = ev.clientY - this.offsetTop;

        if (obj.setCapture) {
          obj.setCapture();
        }

        if (!oMoveDom.contains(e.target)) {
          return false;
        }

        document.onmousemove = function (e) {
          var ev = e || event;
          var L = ev.clientX - disX; // 拖动元素左侧的位置=当前鼠标距离浏览器左侧的距离 - （物体宽度的一半）

          var T = ev.clientY - disY; // 拖动元素顶部的位置=当前鼠标距离浏览器顶部的距离 - （物体高度的一半）

          if (L < 0) {
            // 如果左侧的距离小于0，就让距离等于0.不能超出屏幕左侧。如果需要磁性吸附，把0改为100或者想要的数字即可
            L = 0;
          } else if (L > document.documentElement.clientWidth - obj.offsetWidth) {
            // 如果左侧的距离>屏幕的宽度-元素的宽度。也就是说元素的右侧超出屏幕的右侧，就让元素的右侧在屏幕的右侧上
            L = document.documentElement.clientWidth - obj.offsetWidth;
          }

          if (T < 0) {
            // 和左右距离同理
            T = 0;
          } else if (T > document.documentElement.clientHeight - obj.offsetHeight) {
            T = document.documentElement.clientHeight - obj.offsetHeight;
          }

          obj.style.left = L + 'px';
          obj.style.top = T + 'px';
          that.changVal(L, T);
        };

        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;

          if (obj.releaseCapture) {
            obj.releaseCapture();
          }
        };

        return false;
      };
    };

    _this.state = {
      style: Object.assign({}, _this.props.style)
    };
    return _this;
  }

  _createClass(DragModel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          _this$props$visible = _this$props.visible,
          visible = _this$props$visible === void 0 ? false : _this$props$visible,
          _this$props$canDrag = _this$props.canDrag,
          canDrag = _this$props$canDrag === void 0 ? true : _this$props$canDrag;

      if (canDrag) {
        this.initialEvent();
      } else {
        this.setState({
          style: Object.assign(Object.assign({}, this.state.style), {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            margin: 'auto'
          })
        });
      }

      this.changVal = debounce(this.changVal, 200);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('mouseup', this.initialEvent, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      /* 返回元素 */
      var _a = this.props,
          children = _a.children,
          wrapClassName = _a.wrapClassName,
          title = _a.title,
          noneFooter = _a.noneFooter,
          isModals = _a.isModals,
          other = __rest(_a, ["children", "wrapClassName", "title", "noneFooter", "isModals"]);

      var style = this.state.style;
      return (
        /*#__PURE__*/
        // <div id="div1"></div>
        React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
          id: "div1",
          style: style
        }, /*#__PURE__*/React.createElement("div", {
          className: "modal-content"
        }, /*#__PURE__*/React.createElement("div", {
          className: "modal-header"
        }, /*#__PURE__*/React.createElement("span", {
          className: "header-title"
        }, title), /*#__PURE__*/React.createElement("span", {
          className: "header-close",
          onClick: function onClick() {
            return _this2.props.onCancle();
          }
        }, "\xD7")), /*#__PURE__*/React.createElement("div", {
          className: "modal-body"
        }, children), !noneFooter ? /*#__PURE__*/React.createElement("div", {
          className: "modal-footer"
        }, /*#__PURE__*/React.createElement(_Button, {
          onClick: function onClick() {
            return _this2.props.onCancle();
          }
        }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(_Button, {
          type: "primary",
          style: {
            marginLeft: '8px'
          },
          onClick: function onClick() {
            return _this2.props.onOk();
          }
        }, "\u786E\u5B9A")) : '')), isModals ? /*#__PURE__*/React.createElement("div", {
          className: "models"
        }) : '')
      );
    }
  }]);

  return DragModel;
}(React.Component);

export default DragModel;