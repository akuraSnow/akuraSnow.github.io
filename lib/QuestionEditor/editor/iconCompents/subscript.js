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

var _toolbarIcon = require("../toolbarIcon");

var _slate = require("slate");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var markList = [{
  name: 'UnderlineSingle',
  class: 'Underline'
}, {
  name: 'UnderlineDouble',
  class: 'DoubleUnderline'
}, {
  name: 'UnderlineDotted',
  class: 'DashedLine'
}, {
  name: 'UnderlineWave',
  class: 'WavyLine'
}];
var iconList = ['UnderlineSingle', 'UnderlineDouble', 'UnderlineDotted', 'UnderlineWave']; // @ts-ignore

var toggleMark = function toggleMark(editor, format) {
  var isActive = isMarkActive(editor, format);

  _lodash.default.map(markList, function (formatItem) {
    _slate.Editor.removeMark(editor, formatItem.name);
  });

  if (isActive) {
    _slate.Editor.removeMark(editor, format);
  } else {
    _slate.Editor.addMark(editor, format, true);
  }
}; // 判断是否包含该样式


var isMarkList = function isMarkList(editor, formatList) {
  var marks = _slate.Editor.marks(editor);

  var a = _lodash.default.filter(formatList, function (o) {
    return marks && marks[o];
  });

  var selection = editor.selection;
  var velue = editor.children;

  if (selection && JSON.stringify(selection.anchor) === JSON.stringify(selection.focus)) {
    var path = selection.focus.path;
    var offset = selection.focus.offset;
    var aBefore = path[1] > 1 ? velue[path[0]]['children'][path[1] - 1] : {};
    var _a = velue[path[0]]['children'][path[1]];

    if ((aBefore.type === 'mention' || aBefore.type === 'space' || _a.type === 'mention') && offset === 0) {
      return false;
    }
  }

  return marks ? a && a.length > 0 : false;
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

var SubscriptButton = function SubscriptButton(props) {
  var _useState = (0, _react.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)('UnderlineSingle'),
      _useState4 = _slicedToArray(_useState3, 2),
      format = _useState4[0],
      setFormat = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isActive = _useState6[0],
      setIsActive = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      visible = _useState8[0],
      setVisible = _useState8[1];

  function onClick(_ref) {
    var key = _ref.key;
    // props.onKeyDown(key);
    toggleMark(props.editor, key);
    setFormat(key);

    if (key !== format) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }

    setVisible(false);
  }

  var menu = /*#__PURE__*/_react.default.createElement(_menu.default, {
    onClick: onClick
  }, _lodash.default.map(markList, function (formatItem) {
    var obj = _slate.Editor.marks(props.editor);

    return /*#__PURE__*/_react.default.createElement(_menu.default.Item, {
      key: formatItem.name,
      style: {
        background: obj && obj[formatItem.name] ? '#F5F5F5' : '#fff'
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: formatItem.class
    }));
  }));

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "LowerTriangle"
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    style: {
      borderRadius: '2px 0px 0px 2px'
    },
    active: isMarkList(props.editor, iconList),
    visible: visible,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMark(props.editor, format);

      if (isMarkList(props.editor, iconList)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }

      setFormat(format);
    }
  }, _toolbarIcon.underline, /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)), /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon" // active={}
    ,
    style: {
      width: '12px',
      textAlign: 'center',
      position: 'relative',
      top: '-8px',
      borderRadius: '0px 2px 2px 0px',
      background: visible ? '#BFBFBF' : isMarkList(props.editor, iconList) ? '#F5F5F5' : 'white'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/_react.default.createElement(_dropdown.default, {
    overlay: menu,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(visible) {
      setVisible(visible);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "trigger"
  }, _toolbarIcon.lowerTriangle))));
};

var _default = SubscriptButton;
exports.default = _default;