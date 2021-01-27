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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

// @ts-nocheck
import React, { Component } from 'react';
import { PortalWithState } from 'react-portal';

var addAnnotateMark = function addAnnotateMark(change, annotation) {
  change.addMark({
    type: 'annotate',
    data: {
      annotation: annotation
    }
  });
};

var defaultRenderer = {
  annotate: function annotate(props) {
    var attributes = props.attributes,
        children = props.children,
        mark = props.mark;
    var annotation = mark.data.get('annotation');
    return /*#__PURE__*/React.createElement("strong", _extends({}, attributes, {
      "data-annotation": annotation,
      style: {
        backgroundColor: '#00ff00'
      }
    }), children);
  }
};
var annotateRenderer = defaultRenderer;
export var AnnotateToolbar = /*#__PURE__*/function (_Component) {
  _inherits(AnnotateToolbar, _Component);

  var _super = _createSuper(AnnotateToolbar);

  function AnnotateToolbar() {
    var _this;

    _classCallCheck(this, AnnotateToolbar);

    _this = _super.apply(this, arguments);

    _this.submitChange = function () {
      var _value$change;

      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;

      var change = (_value$change = value.change()).call.apply(_value$change, arguments);

      onChange(change);
    };

    _this.handleSubmit = function (e, closePortal) {
      e.preventDefault();
      var data = new FormData(e.target);
      var annotation = data.get('annotateText');
      console.log(annotation);

      if (annotation) {
        _this.submitChange(addAnnotateMark, annotation);

        closePortal();
      }
    };

    return _this;
  }

  _createClass(AnnotateToolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/React.createElement(PortalWithState, {
        closeOnOutsideClick: true,
        closeOnEsc: true
      }, function (_ref) {
        var openPortal = _ref.openPortal,
            closePortal = _ref.closePortal,
            isOpen = _ref.isOpen,
            portal = _ref.portal;
        return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
          className: "toolbar"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: openPortal
        }, "Annotate")), portal( /*#__PURE__*/React.createElement("div", {
          className: "modal"
        }, /*#__PURE__*/React.createElement("div", {
          className: "modal-content"
        }, /*#__PURE__*/React.createElement("span", {
          className: "close"
        }, /*#__PURE__*/React.createElement("button", {
          type: "button",
          onClick: closePortal
        }, "Close me!")), /*#__PURE__*/React.createElement("form", {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e, closePortal);
          }
        }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("textarea", {
          id: "annotateText",
          name: "annotateText"
        }), /*#__PURE__*/React.createElement("button", {
          type: "submit"
        }, "Annotate")))))));
      });
    }
  }]);

  return AnnotateToolbar;
}(Component);
export var plugin = function plugin() {
  return {
    renderMark: annotateRenderer,
    name: 'mark-annotate',
    changes: {
      addAnnotateMark: addAnnotateMark
    }
  };
};