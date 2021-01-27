function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Editor, Transforms, Range, Node } from 'slate'; // import { Editor, Transforms, Range, createEditor, Path, Node } from 'slate'

import _ from 'lodash';
import { useSlate, ReactEditor } from 'slate-react';
import { Button2 } from '../components'; // import Sliders from '../components/slider1';

import enlarge from '../Icon/icon-enlarge.png';
import narrow from '../Icon/icon-narrow.png';
import deletes from '../Icon/icon-deletes.png';

var toggleImage = function toggleImage(editor, value, isADD) {
  if (editor.selection) {
    var a = Node.parent(editor, editor.selection.anchor.path);
    var b = JSON.parse(JSON.stringify(a));
    var pictureUrl = a.character;
    var nImg = new Image();
    nImg.src = pictureUrl;

    nImg.onload = function () {
      var nWidth = nImg.width;
      Transforms.setNodes(editor, {
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
  var a = Node.parent(editor, editor.selection.anchor.path);
  var b = JSON.parse(JSON.stringify(a));
  Transforms.removeNodes(editor, {
    match: function match(n) {
      return n.type === 'mention';
    }
  });
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

var InserImage = function InserImage(props) {
  var format = props.format,
      icon = props.icon,
      add = props.add;
  var ref = useRef();
  var editor = useSlate();

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cacheSelection = _useState2[0],
      setCacheSelection = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showIcon = _useState4[0],
      setShowIcon = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      value = _useState6[0],
      setValue = _useState6[1];

  useEffect(function () {
    var el = ref.current;
    var selection = editor.selection;
    var a = {};

    if (!el) {
      return;
    }

    if (selection && Range.isCollapsed(selection)) {
      a = Node.parent(editor, selection.anchor.path);
    }

    if (!props.isFocuse) {
      el.style.display = 'none';
      setShowIcon(false); // console.log('props.isFocuse==>', props.isFocuse);
    } else if (a.mediaType === 'IMAGE') {// el.style.display = 'flex';
      // setShowIcon(true);
      // setImageShow();
    }
  }, [props.isFocuse]);
  useEffect(function () {
    setImageShow();
  }, [props.isFocuse, JSON.stringify(editor.selection)]);
  useEffect(function () {
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
        a = Node.parent(editor, selection.anchor.path);
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

  var setImageShow = _.throttle(function setImageShow() {
    var el = ref.current; // const editor = useSlate();

    var selection = editor.selection;
    var a = {};

    if (!el) {
      return;
    }

    if (selection && Range.isCollapsed(selection)) {
      a = Node.parent(editor, selection.anchor.path);
    }

    if (a.mediaType === 'IMAGE') {
      setCacheSelection(selection);
      setValue(a.scale ? Number(a.scale) : 1);
    } // console.log('b===>', a);


    if ((!selection || !ReactEditor.isFocused(editor) || Range.isCollapsed(selection) // Editor.string(editor, selection) === '' ||
    // Editor.string(editor, selection) !== ''
    ) && a.mediaType !== 'IMAGE' || !ReactEditor.isFocused(editor)) {
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

  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    className: "editingImg"
  }, /*#__PURE__*/React.createElement(Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleImage(editor, 'width', 'd');

      var newValue = (value * 10 - 1) / 10;
      var showValue = newValue >= 0.1 ? newValue : 0.1;
      setValue(showValue);
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: narrow,
    alt: ""
  })), /*#__PURE__*/React.createElement(Button2 // width={100}
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "Original buttonTitle"
  }, "1:1")), /*#__PURE__*/React.createElement(Button2, {
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleImage(editor, 'widthMore', 'add');

      var newValue = (value * 10 + 1) / 10;
      var showValue = newValue <= 2 ? newValue : 2;
      setValue(showValue);
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: enlarge,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "Separate1"
  }), /*#__PURE__*/React.createElement(Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      deletesMark(editor, 'width', 'd');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: deletes,
    alt: ""
  })));
};

export default InserImage;