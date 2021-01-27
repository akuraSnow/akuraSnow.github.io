"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/input/style");

var _input = _interopRequireDefault(require("antd/es/input"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _index = _interopRequireDefault(require("../../../DragModel/index"));

var _slate = require("slate");

require("./iconCompents.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WordSpacing = function WordSpacing(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(2),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(props.editor),
      _useState6 = _slicedToArray(_useState5, 2),
      editor = _useState6[0],
      setEditor = _useState6[1];

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      selection = _useState8[0],
      setSelection = _useState8[1];

  (0, _react.useEffect)(function () {
    // console.log(props.editor.selection);
    if (props.editor.selection) {
      setSelection(props.editor.selection);
    }
  }, [props.editor.selection]);
  (0, _react.useEffect)(function () {
    console.log(props.editor); // setEditor(props.editor);
    // if (!!props.editor.selection) {
    //     setEditor(props.editor);
    // }
  }, [props.editor]);
  (0, _react.useEffect)(function () {// console.log(props.id);
    // setEditor(props.editor);
    // if (!!props.editor.selection) {
    //     setEditor(props.editor);
    // }
  }, [props.id]);

  function onClick(_ref) {
    var key = _ref.key;
    props.onKeyDown(key);
  }

  function _onOk() {
    props.editor.selection = selection;

    _slate.Transforms.setSelection(props.editor, selection);

    _slate.Editor.addMark(props.editor, 'WordSpacing', value);

    console.log(props.editor);
    setVisible(false);
  }

  function focusInput(id) {
    console.log(id);
    document.getElementById(id).focus();
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: props.active,
    style: {
      width: '25px',
      textAlign: 'center',
      position: 'relative'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      setVisible(true);
    }
  }, props.icon, /*#__PURE__*/_react.default.createElement("div", {
    className: "tabbarIcon1",
    style: {
      display: visible ? 'block' : 'none'
    }
  }, visible ? /*#__PURE__*/_react.default.createElement(_index.default, {
    style: {
      width: '400px',
      height: '203px'
    },
    title: "\u5B57\u95F4\u8DDD",
    onCancle: function onCancle() {
      setVisible(false);
    },
    onOk: function onOk() {
      return _onOk();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-body"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "content-label"
  }, "\u6587\u5B57\u5BBD\u5EA6:"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: function onClick() {
      return focusInput(props.id);
    }
  }, /*#__PURE__*/_react.default.createElement(_input.default, {
    suffix: "\u5B57\u7B26",
    id: props.id,
    value: value,
    aotufocuse: "true",
    onChange: function onChange(e) {
      console.log(e.target.value);
      props.changeVal(e.target.value);
      setValue(e.target.value);
      console.log(editor);
    }
  })))) : '')));
};

var _default = WordSpacing;
exports.default = _default;