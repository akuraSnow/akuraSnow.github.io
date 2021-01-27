"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _toolbarIcon = require("../toolbarIcon");

var _index = _interopRequireDefault(require("./../../../DragModel/index"));

var _slate = require("slate");

require("./iconCompents.css");

var _index2 = require("../../../MessageTips/index");

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _visible = true;

var FormulaEditor = function FormulaEditor(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(props.modalPosition),
      _useState4 = _slicedToArray(_useState3, 2),
      modalPosition = _useState4[0],
      setModalPosition = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selection = _useState6[0],
      setSelection = _useState6[1];

  var editorRef = (0, _react.useRef)();

  var _useState7 = (0, _react.useState)(null),
      _useState8 = _slicedToArray(_useState7, 2),
      editor = _useState8[0],
      setEditor = _useState8[1];

  (0, _react.useEffect)(function () {
    setTimeout(function () {
      if (_jquery.default.mathEditor) {
        var _editor = (0, _jquery.default)(editorRef.current).mathEditor({
          width: 1000,
          height: 450,
          defFormula: '<math></math>'
        });

        setEditor(_editor);
      }
    }, 0);
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
  }, [visible]);
  (0, _react.useEffect)(function () {
    setModalPosition(props.modalPosition);
  }, [props.modalPosition]);
  (0, _react.useEffect)(function () {
    if (props.editor.selection) {
      setSelection(props.editor.selection);
    }
  }, [props.editor.selection]);

  function _onOk() {
    props.editor.selection = selection;

    _slate.Transforms.setSelection(props.editor, selection);

    var formulaResult = editor && editor.mathEditor ? editor.mathEditor('getMathML', 'UNICODE', 'true') : null;
    var formulaDOM = new DOMParser().parseFromString(formulaResult, 'text/html');
    var mathEl = formulaDOM.getElementsByTagName('math')[0];

    if (!mathEl.children.length) {
      _index2.Tips.open({
        message: '内容不能为空',
        type: 'fail'
      });
    } else {
      _slate.Transforms.insertNodes(props.editor, {
        type: 'mention',
        mediaType: 'FORMULA',
        character: formulaResult,
        tag: String(Math.random()).replace('\.', ''),
        children: [{
          text: ' ',
          mark: []
        }]
      });

      setVisible(false);
      props.changeFocuse(false);
      props.isFocuse && props.postion && props.postion(Object.assign(Object.assign({}, modalPosition), {
        visible: false
      }));
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: props.isFocuse ? 'tabbarIcon' : '',
    active: false,
    style: {
      width: '24px',
      height: '24px',
      textAlign: 'center',
      position: 'relative',
      top: '0px'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();

      if (props.isFocuse) {
        _visible = true;
      }

      props.isFocuse && setVisible(true);
      props.isFocuse && props.setVisible && props.setVisible(true);
      props.isFocuse && props.postion && props.postion(Object.assign(Object.assign({}, modalPosition), {
        visible: true
      }));
      props.changeFocuse(true);
    }
  }, /*#__PURE__*/_react.default.createElement("span", {
    style: {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      lineHeight: '24px'
    }
  }, _toolbarIcon.formulaEditor, /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "80px",
      height: '20px',
      lineHeight: '20px'
    }
  }, props.title))), /*#__PURE__*/_react.default.createElement("div", null,
  /* eslint-disable */
  visible && props.isFocuse ? /*#__PURE__*/_react.default.createElement(_index.default, {
    style: {
      width: '1000px',
      height: '560px',
      left: modalPosition.left,
      top: modalPosition.top
    },
    title: "\u63D2\u5165\u516C\u5F0F",
    onCancle: function onCancle() {
      setVisible(false);
      _visible = false;
      props.isFocuse && props.postion && props.postion(Object.assign(Object.assign({}, modalPosition), {
        visible: false,
        isCloseMedoal: true
      }));
    },
    onOk: function onOk() {
      return _onOk();
    },
    isModals: true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "parse-body identifySpin"
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: editorRef
  }))) : ''));
};

var _default = FormulaEditor;
exports.default = _default;