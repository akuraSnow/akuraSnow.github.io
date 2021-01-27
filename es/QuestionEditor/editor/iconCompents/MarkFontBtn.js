import "antd/es/dropdown/style";
import _Dropdown from "antd/es/dropdown";
import "antd/es/menu/style";
import _Menu from "antd/es/menu";
import "antd/es/select/style";
import _Select from "antd/es/select";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Button1 } from '../components';
import { Editor } from 'slate';
var TextIndentList = ['宋体', '楷体', 'TIMES NEW ROMAN'];
var Option = _Select.Option;

var toggleMark = function toggleMark(editor, format, value) {
  // const isActive = isMarkActive(editor, format);
  Editor.addMark(editor, format, value);
}; // 获取选中的数据


var isBlockActiveNum = function isBlockActiveNum(editor, format, itemList) {
  var _Editor$nodes = Editor.nodes(editor, {
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

var MarkFontBtn = function MarkFontBtn(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      visible = _useState4[0],
      setVisible = _useState4[1];

  function onClickMenu(_ref) {
    var key = _ref.key;
    var editor = props.editor,
        format = props.format;
    var keys = key.split('#');
    toggleMark(editor, format, keys[0]);
    setValue(keys[1]);
    setVisible(false);
  }

  useEffect(function () {
    var obj = Editor.marks(props.editor);
    var val = '';

    if (!props.defluteVal) {
      val = obj && obj[props.format] && props.fontObj[obj[props.format]];
    } else {
      val = obj && obj[props.format] ? props.fontObj[obj[props.format]] : props.defluteVal.content;
    }

    setValue(val);
  }, [JSON.stringify(props.editor)]); // function handleChange(e) {
  //     // setValue(e);
  //     // toggleMark(props.editor, props.format, e);
  // }

  var menu = /*#__PURE__*/React.createElement(_Menu, {
    onClick: function onClick(e) {
      return onClickMenu(e);
    }
  }, _.map(props.fontList, function (e, index) {
    return /*#__PURE__*/React.createElement(_Menu.Item, {
      key: "".concat(e.value, "#").concat(e.content),
      style: {
        background: value === e.content ? '#F5F5F5' : '#fff',
        fontWeight: value === e.content ? 'bolder' : '400'
      }
    }, /*#__PURE__*/React.createElement("div", null, e.content));
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button1, {
    className: "markFonts",
    active: menu,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: menu,
    trigger: ['click'],
    onVisibleChange: function onVisibleChange(visible) {
      setVisible(visible);
    }
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    className: "inputBox",
    style: {
      width: props.width ? "".concat(props.width, "px") : '98px',
      borderColor: visible ? '#FE8D29' : '#D9D9D9'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)))));
};

export default MarkFontBtn;