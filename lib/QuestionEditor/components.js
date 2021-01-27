"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toolbar = exports.Menu = exports.Icon = exports.Button = void 0;

var _react = _interopRequireDefault(require("react"));

var _emotion = require("emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n          position: relative;\n          padding: 1px 18px 17px;\n          margin: 0 - 20px;\n          border - bottom: 2px solid #eee;\n          margin - bottom: 20px;\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          & > * {\n            display: inline-block;\n          }\n\n          & > * + * {\n            margin-left: 15px;\n          }\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n          font - size: 18px;\n          vertical - align: text - bottom;\n          "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n          cursor: pointer;\n          color: ", ";\n"]);

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


var Button = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      active = _a.active,
      reversed = _a.reversed,
      props = __rest(_a, ["className", "active", "reversed"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject(), reversed ? active ? 'white' : '#aaa' : active ? 'black' : '#ccc'))
  }));
});

exports.Button = Button;

var Icon = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return /*#__PURE__*/_react.default.createElement("span", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)('material-icons', className, (0, _emotion.css)(_templateObject2()))
  }));
});

exports.Icon = Icon;

var Menu = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return /*#__PURE__*/_react.default.createElement("div", _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject3()))
  }));
});

exports.Menu = Menu;

var Toolbar = /*#__PURE__*/_react.default.forwardRef(function (_a, ref) {
  var className = _a.className,
      props = __rest(_a, ["className"]);

  return /*#__PURE__*/_react.default.createElement(Menu, _extends({}, props, {
    ref: ref,
    className: (0, _emotion.cx)(className, (0, _emotion.css)(_templateObject4()))
  }));
});

exports.Toolbar = Toolbar;