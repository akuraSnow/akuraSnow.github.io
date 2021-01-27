"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _slate = require("slate");

var _lodash = _interopRequireDefault(require("lodash"));

var _slateReact = require("slate-react");

var _components = require("../components");

var _iconEnlarge = _interopRequireDefault(require("../Icon/icon-enlarge.png"));

var _iconNarrow = _interopRequireDefault(require("../Icon/icon-narrow.png"));

var _iconDeletes = _interopRequireDefault(require("../Icon/icon-deletes.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var toggleImage = function toggleImage(editor, value, isADD) {
  if (editor.selection) {
    var a = _slate.Node.parent(editor, editor.selection.anchor.path);

    var b = JSON.parse(JSON.stringify(a));
    var pictureUrl = a.character;
    var nImg = new Image();
    nImg.src = pictureUrl;

    nImg.onload = function () {
      var nWidth = nImg.width;

      _slate.Transforms.setNodes(editor, {
        'width': nWidth * value,
        scale: value
      }, {
        match: function match(n) {
          return n.type === 'mention';
        },
        split: true
      });
    };
  }
};

var deletesMark = function deletesMark(editor, format, isADD) {
  var isActive = isMarkActive(editor, format);

  var a = _slate.Node.parent(editor, editor.selection.anchor.path);

  var b = JSON.parse(JSON.stringify(a));

  _slate.Transforms.removeNodes(editor, {
    match: function match(n) {
      return n.type === 'mention';
    }
  });
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = _slate.Editor.marks(editor);

  return marks ? marks[format] === true : false;
};

var InserImage = function InserImage(props) {
  var format = props.format,
      icon = props.icon,
      add = props.add;
  var ref = (0, _react.useRef)();
  var editor = (0, _slateReact.useSlate)();

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      cacheSelection = _useState2[0],
      setCacheSelection = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showIcon = _useState4[0],
      setShowIcon = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  (0, _react.useEffect)(function () {
    var el = ref.current;
    var selection = editor.selection;
    var a = {};

    if (!el) {
      return;
    }

    if (selection && _slate.Range.isCollapsed(selection)) {
      a = _slate.Node.parent(editor, selection.anchor.path);
    }

    if (!props.isFocuse) {
      el.style.display = 'none';
      setShowIcon(false); // console.log('props.isFocuse==>', props.isFocuse);
    } else if (a.mediaType === 'IMAGE') {// el.style.display = 'flex';
      // setShowIcon(true);
      // setImageShow();
    }
  }, [props.isFocuse]);
  (0, _react.useEffect)(function () {
    setImageShow();
  }, [props.isFocuse, JSON.stringify(editor.selection)]);
  (0, _react.useEffect)(function () {
    var el = ref.current;

    if (!el) {
      return;
    }

    window.addEventListener('scroll', function () {
      var selection = editor.selection;
      var a = {};

      if (!el) {
        return;
      }

      if (selection) {
        a = _slate.Node.parent(editor, selection.anchor.path);
      }

      if (a.mediaType === 'IMAGE') {
        var domSelection = window.getSelection();
        var domRange = domSelection.getRangeAt(0);
        var rect = domRange.getBoundingClientRect();
        el.style.position = 'fixed';
        el.style.opacity = 1;
        el.style.zIndex = 0;
        el.style.display = 'flex';
        setShowIcon(true);

        if (rect.top > 0) {
          var top = rect.top + window.pageYOffset - el.offsetHeight + 30;
          var newTop = top >= 110 ? top : -100;
          el.style.top = "".concat(newTop, "px");
          el.style.left = "".concat(rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2 + 74, "px");
        }
      }
    }, true);
  }, []);

  var setImageShow = _lodash.default.throttle(function setImageShow() {
    var el = ref.current; // const editor = useSlate();

    var selection = editor.selection;
    var a = {};

    if (!el) {
      return;
    }

    if (selection && _slate.Range.isCollapsed(selection)) {
      a = _slate.Node.parent(editor, selection.anchor.path);
    }

    if (a.mediaType === 'IMAGE') {
      setCacheSelection(selection);
      setValue(a.scale ? Number(a.scale) : 1);
    } // console.log('b===>', a);


    if ((!selection || !_slateReact.ReactEditor.isFocused(editor) || _slate.Range.isCollapsed(selection) // Editor.string(editor, selection) === '' ||
    // Editor.string(editor, selection) !== ''
    ) && a.mediaType !== 'IMAGE' || !_slateReact.ReactEditor.isFocused(editor)) {
      el.removeAttribute('style');
      el.style.display = 'none';
      setShowIcon(false); // a = {};

      return;
    } // console.log(ref);
    // console.log('a===>', a);


    var domSelection = window.getSelection();
    var domRange = domSelection.getRangeAt(0);
    var rect = domRange.getBoundingClientRect(); // console.log('rect.top ===>', rect.top);

    if (rect.top > 0 && a.mediaType === 'IMAGE') {
      el.style.position = 'fixed';
      el.style.zIndex = 0;
      el.style.opacity = 1;
      el.style.display = 'flex';
      setShowIcon(true);
      var top = rect.top + window.pageYOffset - el.offsetHeight + 30;
      var newTop = top >= 110 ? top : -100; // console.log('newTop===>', newTop);

      el.style.top = "".concat(newTop, "px");
      el.style.left = "".concat(rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2 + 74, "px");
    } else if (rect.top === 0 && a.mediaType === 'IMAGE') {// setShowIcon(true);
      // let { path } = selection.anchor;
      // let newPath = [];
      // if (path.length === 3) {
      //     newPath = [path[0], path[1] + 1];
      // } else if (path.length === 4) {
      //     newPath = [path[0], path[1], path[2] + 1];
      // }
      // let newPositiong = {
      //     anchor: {
      //         offset: 0,
      //         path: newPath
      //     },
      //     focus: {
      //         offset: 0,
      //         path: newPath
      //     }
      // };
      // Transforms.setSelection(editor, newPositiong);
    }
  }, 1000);

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "editingImg"
  }, /*#__PURE__*/_react.default.createElement(_components.Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleImage(editor, 'width', 'd');

      var newValue = (value * 10 - 1) / 10;
      var showValue = newValue >= 0.1 ? newValue : 0.1;
      setValue(showValue);
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconNarrow.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_components.Button2 // width={100}
  , {
    style: {
      width: '20px',
      margin: '0 15px'
    },
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleImage(editor, 'widthMore', 'add');

      setValue(1);
      toggleImage(editor, 1);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Original buttonTitle"
  }, "1:1")), /*#__PURE__*/_react.default.createElement(_components.Button2, {
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleImage(editor, 'widthMore', 'add');

      var newValue = (value * 10 + 1) / 10;
      var showValue = newValue <= 2 ? newValue : 2;
      setValue(showValue);
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconEnlarge.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "Separate1"
  }), /*#__PURE__*/_react.default.createElement(_components.Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      deletesMark(editor, 'width', 'd');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconDeletes.default,
    alt: ""
  })));
};

var _default = InserImage;
exports.default = _default;