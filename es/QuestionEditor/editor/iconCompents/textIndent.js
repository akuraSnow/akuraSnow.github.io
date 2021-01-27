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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useState } from 'react';
import _ from 'lodash';
import { Button, Icon, Toolbar } from '../components';
import { Editor, Transforms, createEditor } from 'slate';
import { iconObj } from '../client';
var TextIndentList = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var toggleBlock = function toggleBlock(editor, format, num, itemList) {
  // 获取之前设置的值
  var rawData = isBlockActiveNum(editor, format, itemList);
  Transforms.setNodes(editor, _defineProperty({}, format, num));
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

var TextIndentBtn = function TextIndentBtn(props) {
  var _useState = useState(props.value),
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

  var menu = /*#__PURE__*/React.createElement(_Menu, {
    onClick: onClick
  }, props.itemList.map(function (indentItem, index) {
    return /*#__PURE__*/React.createElement(_Menu.Item, {
      key: indentItem,
      style: {
        background: "".concat(props.active) === "".concat(indentItem) ? '#F5F5F5' : '#fff',
        fontWeight: "".concat(props.active) === "".concat(indentItem) ? '700' : ''
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "MenuBtn"
    }, indentItem, props.unit));
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    active: props.active !== props.itemList[0] && props.active !== '0',
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(_Dropdown, {
    overlay: menu,
    trigger: ['click']
  }, /*#__PURE__*/React.createElement("span", null, props.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      bottom: '7px'
    },
    className: "trigger"
  }, iconObj['lowerTriangle']), /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)))));
};

export default TextIndentBtn;