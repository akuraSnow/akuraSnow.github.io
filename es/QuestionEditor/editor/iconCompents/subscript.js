import "antd/es/dropdown/style";
import _Dropdown from "antd/es/dropdown";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-nocheck
import React, { useState } from 'react';
import _ from 'lodash';
import { Button } from '../components';
import { lowerTriangle, underline } from '../toolbarIcon';
import { Editor } from 'slate';
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

  _.map(markList, function (formatItem) {
    Editor.removeMark(editor, formatItem.name);
  });

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
}; // 判断是否包含该样式


var isMarkList = function isMarkList(editor, formatList) {
  var marks = Editor.marks(editor);

  var a = _.filter(formatList, function (o) {
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
  var marks = Editor.marks(editor);
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
  var _useState = useState(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState('UnderlineSingle'),
      _useState4 = _slicedToArray(_useState3, 2),
      format = _useState4[0],
      setFormat = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isActive = _useState6[0],
      setIsActive = _useState6[1];

  var _useState7 = useState(false),
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

  var menu = /*#__PURE__*/React.createElement(_Menu, {
    onClick: onClick
  }, _.map(markList, function (formatItem) {
    var obj = Editor.marks(props.editor);
    return /*#__PURE__*/React.createElement(_Menu.Item, {
      key: formatItem.name,
      style: {
        background: obj && obj[formatItem.name] ? '#F5F5F5' : '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: formatItem.class
    }));
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "LowerTriangle"
  }, /*#__PURE__*/React.createElement(Button, {
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
  }, underline, /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)), /*#__PURE__*/React.createElement(Button, {
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
  }, /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: menu,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(visible) {
      setVisible(visible);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "trigger"
  }, lowerTriangle))));
};

export default SubscriptButton;