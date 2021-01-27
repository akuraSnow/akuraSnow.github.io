function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n                display: inline-block;\n                cursor: pointer;\n                border: 1px solid #FE8D29;\n                color: #FE8D29;\n                "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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

import * as React from 'react';
import { cx, css } from 'emotion';
import "./index.css"; // @ts-ignore

var ButtonContiner = /*#__PURE__*/React.forwardRef(function (e, ref) {
  var props = __rest(e, []);

  return /*#__PURE__*/React.createElement("button", _extends({}, props, {
    className: cx("defaultButtn", css(_templateObject()))
  }));
});

var Button = function Button(props) {
  var children = props.children; // console.log("Button -> children", children)
  // @ts-ignore

  return /*#__PURE__*/React.createElement(ButtonContiner, null, children);
};

export default Button;