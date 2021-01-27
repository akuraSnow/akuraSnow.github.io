"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = exports.Portal = exports.Menu = exports.Instruction = exports.Icon = exports.EditorValue = exports.Button3 = exports.Button2 = exports.Button1 = exports.Button = void 0;

require("antd/es/slider/style");

var _slider = _interopRequireDefault(require("antd/es/slider"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n                position: relative;\n                height: 25px;\n                \n                // padding: 15px 18px;\n                // border-bottom: 2px solid #eee;\n                "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                & > * {\n                display: inline-block;\n                }\n\n                & > * + * {\n                    // min-width: px;\n                    text-align: center;\n                    // margin-left: 2px;\n                    border: 1px solid #fff\n                }\n            "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                white-space: pre-wrap;\n                margin: 0 -20px 10px;\n                padding: 10px 20px;\n                font-size: 14px;\n                background: #f8f8e8;\n            "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                font-size: 18px;\n                // vertical-align: text-bottom;\n                "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                        color: #404040;\n                        font: 12px monospace;\n                        white-space: pre-wrap;\n                        padding: 10px 20px;\n                        div {\n                        margin: 0 0 0.5em;\n                        }\n                    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                        font-size: 14px;\n                        padding: 5px 20px;\n                        color: #404040;\n                        border-top: 2px solid #eeeeee;\n                        background: #f8f8f8;\n                    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                    margin: 30px -20px 0;\n                "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                    display: inline-block;\n                    cursor: pointer;\n                    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                    display: inline-block;\n                    cursor: pointer;\n                    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                    display: inline-block;\n                    cursor: pointer;\n                    background: ", ";"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var __rest = void 0 && (void 0).__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}; // @ts-nocheck


var Button = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  var className = e.className,
      active = e.active,
      visible = e.visible,
      title = e.title,
      reversed = e.reversed,
      props = __rest(e, ["className", "active", "visible", "title", "reversed"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)('buttonTitle', className, (0, _emotion.css)(_templateObject(), reversed ? active ? 'white' : '#E8E8E8' : active ? '#BFBFBF' : visible ? '#F5F5F5' : 'white'))
  }));
});

exports.Button = Button;

var Button1 = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  var className = e.className,
      active = e.active,
      visible = e.visible,
      title = e.title,
      reversed = e.reversed,
      props = __rest(e, ["className", "active", "visible", "title", "reversed"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)('buttonTitle', className, (0, _emotion.css)(_templateObject2()))
  }));
});

exports.Button1 = Button1;

var Button2 = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  var className = e.className,
      active = e.active,
      visible = e.visible,
      title = e.title,
      reversed = e.reversed,
      props = __rest(e, ["className", "active", "visible", "title", "reversed"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)('buttonTitle', className, (0, _emotion.css)(_templateObject3()))
  }));
});

exports.Button2 = Button2;

var Button3 = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  var className = e.className,
      active = e.active,
      visible = e.visible,
      title = e.title,
      reversed = e.reversed,
      props = __rest(e, ["className", "active", "visible", "title", "reversed"]);

  return /*#__PURE__*/_react.default.createElement(_slider.default, _extends({}, props, {
    ref: ref,
    min: 0.1,
    max: 2.0,
    step: 0.1,
    included: false,
    style: {
      width: '100px'
    }
  }));
});

exports.Button3 = Button3;

var EditorValue = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      value = _a.value,
      props = __rest(_a, ["className", "value"]);

  var textLines = value.document.nodes.map(function (node) {
    return node.text;
  }).toArray().join('\n');
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    ref: ref
  }, props, {
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject4()))
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.css)(_templateObject5())
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _emotion.css)(_templateObject6())
  }, textLines));
});

exports.EditorValue = EditorValue;

var Icon = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  var className = e.className,
      props = __rest(e, ["className"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)('material-icons', className, (0, _emotion.css)(_templateObject7()))
  }));
});

exports.Icon = Icon;

var Instruction = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject8()))
  }));
});

exports.Instruction = Instruction;

var Menu = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject9()))
  }));
});

exports.Menu = Menu;

var Portal = function Portal(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_reactDom.default.createPortal(children, document.body);
};

exports.Portal = Portal;

var Toolbar = /*#__PURE__*/_react.default.forwardRef(function (e, ref) {
  // @ts-ignore
  var className = e.className,
      props = __rest(e, ["className"]);

  return /*#__PURE__*/_react.default.createElement(Menu, _extends({}, props, {
    ref: ref // @ts-ignore
    ,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject10()))
  }));
});

exports.Toolbar = Toolbar;