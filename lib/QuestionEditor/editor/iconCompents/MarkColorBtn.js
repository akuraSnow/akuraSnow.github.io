"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/popconfirm/style");

var _popconfirm = _interopRequireDefault(require("antd/es/popconfirm"));

var _react = _interopRequireWildcard(require("react"));

var _lodash = _interopRequireDefault(require("lodash"));

var _components = require("../components");

var _toolbarIcon = require("../toolbarIcon");

var _slate = require("slate");

var _reactColor = require("react-color");

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

var listOrder = ['1', 'A', 'a', 'I', 'i'];

var toggleMark = function toggleMark(editor, format, value) {
  var isActive = isMarkActive(editor, format);

  _slate.Editor.addMark(editor, format, value);
}; // 判断是否包含该样式


var isMarkList = function isMarkList(editor, formatList) {
  var _Editor$nodes = _slate.Editor.nodes(editor, {
    match: function match(n) {
      var isMark = false;

      _lodash.default.map(formatList, function (e) {
        if (n['NumberedList'] === e) {
          isMark = true;
        }
      });

      return isMark;
    }
  }),
      _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  return !!match;
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = _slate.Editor.marks(editor);

  var selection = editor.selection;
  var velue = editor.children;

  if (selection && JSON.stringify(selection.anchor) === JSON.stringify(selection.focus)) {
    var path = selection.focus.path;
    var offset = selection.focus.offset;
    var aBefore = path[1] > 1 ? velue[path[0]]['children'][path[1] - 1] : {};
    var a = velue[path[0]]['children'][path[1]];

    if ((aBefore.type === 'mention' || aBefore.type === 'space' || a.type === 'mention') && offset === 0) {
      return false;
    }
  }

  return marks ? marks[format] === true : false;
};

var MarkColorBtn = function MarkColorBtn(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible1 = _useState2[0],
      setVisible1 = _useState2[1];

  var _useState3 = (0, _react.useState)('black'),
      _useState4 = _slicedToArray(_useState3, 2),
      color = _useState4[0],
      setColor = _useState4[1];

  (0, _react.useEffect)(function () {
    setColor(props.color);
  }, [JSON.stringify(props.color)]);

  function handleVisibleChange(e) {
    setVisible1(e);
  }

  function handleChange(value) {
    // console.log(value);
    var color = value.hex; // setColor(color);

    toggleMark(props.editor, props.format, color);
    setVisible1(false);
    props.changeColor(color);
  }

  var text = /*#__PURE__*/_react.default.createElement("div", {
    className: "pickerContent"
  }, /*#__PURE__*/_react.default.createElement(_reactColor.CirclePicker, {
    colors: _client.colorList.map(function (e) {
      return "#".concat(e);
    }) // width="40"
    ,
    circleSize: 35,
    color: color,
    onChange: function onChange(e) {
      return handleChange(e);
    }
  }));

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "LowerTriangle",
    style: {
      position: 'relative',
      top: '-8px'
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    style: {
      borderRadius: '2px 0px 0px 2px'
    },
    active: false,
    visible: visible1,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleMark(props.editor, format);

      toggleMark(props.editor, props.format, color);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "colorBtns"
  }, /*#__PURE__*/_react.default.createElement("span", null, "A"), /*#__PURE__*/_react.default.createElement("p", {
    className: "colorShow",
    style: {
      background: color
    }
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)), /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon orderDown" // active={}
    ,
    style: {
      width: '12px',
      textAlign: 'center',
      position: 'relative',
      // top: '-8px',
      borderRadius: '0px 2px 2px 0px',
      background: visible1 ? '#BFBFBF' : 'white'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_popconfirm.default, {
    placement: "bottomLeft",
    openClassName: "listContents",
    visible: visible1,
    onVisibleChange: function onVisibleChange(e) {
      return handleVisibleChange(e);
    },
    title: text,
    arrowPointAtCenter: "true",
    okText: " ",
    cancelText: " "
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "trigger"
  }, _toolbarIcon.lowerTriangle))));
};

var _default = MarkColorBtn;
exports.default = _default;