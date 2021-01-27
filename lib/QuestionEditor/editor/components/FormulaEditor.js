"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/modal/style");

var _modal = _interopRequireDefault(require("antd/es/modal"));

var _react = _interopRequireWildcard(require("react"));

require("../iconCompents/iconCompents.css");

var _index = require("../../../MessageTips/index");

var _jquery = _interopRequireDefault(require("jquery"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FormulaEditor = function FormulaEditor(props) {
  var editorRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      editor = _useState2[0],
      setEditor = _useState2[1];

  var _useState3 = (0, _react.useState)(props.formula.replace(' xmlns="http://www.w3.org/1998/Math/MathML"', '')),
      _useState4 = _slicedToArray(_useState3, 2),
      formula = _useState4[0],
      setFormula = _useState4[1];

  (0, _react.useEffect)(function () {
    if (!editor) {
      setTimeout(function () {
        console.log('editorRef.current==>', editorRef.current);
        var editor = (0, _jquery.default)(editorRef.current).mathEditor({
          width: 1000,
          height: 450,
          defFormula: formula
        });
        setEditor(editor);
      }, 0);
    } else if (editor.mathEditor) {
      editor.mathEditor('setMathML', props.formula);
    }

    return function cleanup() {
      var bodyDivs = Array.from(document.querySelectorAll('body > div'));
      var bodySpans = Array.from(document.querySelectorAll('body > span'));
      bodyDivs.forEach(function (el) {
        if (el.getAttribute && el.getAttribute('class') && (el.getAttribute('class').indexOf('ui-') !== -1 || el.getAttribute('class').indexOf('sp-') !== -1)) {
          document.body.removeChild(el);
        }
      });
      bodySpans.forEach(function (el) {
        if (el.getAttribute && el.getAttribute('id') && el.getAttribute('id').indexOf('spanN') !== -1) {
          document.body.removeChild(el);
        }
      });
    };
  }, [props.formula]);

  function _onOk() {
    var formulaResult = editor ? editor.mathEditor('getMathML', 'UNICODE', 'true') : null;
    var formulaDOM = new DOMParser().parseFromString(formulaResult, 'text/html');
    var mathEl = formulaDOM.getElementsByTagName('math')[0];

    if (mathEl.children.length === 1 && !mathEl.children[0].children.length) {
      _index.Tips.open({
        message: '内容不能为空',
        type: 'fail'
      });
    } else {
      props.onSubmit(formulaResult);
    }
  }

  function _onCancel() {
    props.onSubmit(null);
  }

  return /*#__PURE__*/_react.default.createElement(_modal.default, {
    visible: true,
    maskClosable: false,
    width: 1000,
    bodyStyle: {
      width: 1000,
      height: 450,
      padding: 0,
      overflow: 'hidden'
    },
    title: "\u516C\u5F0F\u7F16\u8F91\u5668",
    onOk: function onOk() {
      _onOk();
    },
    onCancel: function onCancel() {
      _onCancel();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'content-body',
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: editorRef
  })));
};

var _default = FormulaEditor;
exports.default = _default;