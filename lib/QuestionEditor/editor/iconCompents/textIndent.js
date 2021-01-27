"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/dropdown/style");

var _dropdown = _interopRequireDefault(require("antd/es/dropdown"));

require("antd/es/menu/style");

var _menu = _interopRequireDefault(require("antd/es/menu"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _components = require("../components");

var _slate = require("slate");

var _client = require("../client");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TextIndentList = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var toggleBlock = function toggleBlock(editor, format, num, itemList) {
  // 获取之前设置的值
  var rawData = isBlockActiveNum(editor, format, itemList);

  _slate.Transforms.setNodes(editor, _defineProperty({}, format, num));
}; // 获取选中的数据


var isBlockActiveNum = function isBlockActiveNum(editor, format, itemList) {
  var _Editor$nodes = _slate.Editor.nodes(editor, {
    match: function match(n) {
      return n.type === format || n[format];
    }
  }),
      _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  if (!!match) {
    return match[0][format];
  } else {
    return itemList[0];
  }
};

var TextIndentBtn = function TextIndentBtn(props) {
  var _useState = (0, _react.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  function onClick(_ref) {
    var key = _ref.key;
    var editor = props.editor,
        format = props.format,
        itemList = props.itemList;
    toggleBlock(editor, format, key, itemList);
  }

  var menu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: onClick
  }, props.itemList.map(function (indentItem, index) {
    return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: indentItem,
      style: {
        background: "".concat(props.active) === "".concat(indentItem) ? '#F5F5F5' : '#fff',
        fontWeight: "".concat(props.active) === "".concat(indentItem) ? '700' : ''
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "MenuBtn"
    }, indentItem, props.unit));
  }));

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: props.active !== props.itemList[0] && props.active !== '0',
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: menu,
    trigger: ['click']
  }, /*#__PURE__*/_react.default.createElement("span", null, props.icon, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      position: 'relative',
      bottom: '7px'
    },
    className: "trigger"
  }, _client.iconObj['lowerTriangle']), /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)))));
};

var _default = TextIndentBtn;
exports.default = _default;