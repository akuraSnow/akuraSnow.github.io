import "antd/es/popconfirm/style";
import _Popconfirm from "antd/es/popconfirm";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Button } from '../components';
import { lowerTriangle, order } from '../toolbarIcon';
import { Editor, Transforms } from 'slate';
var listOrder = ['1', 'A', 'a', 'I', 'i'];
var LIST_TYPES = ['NumberedList', 'BulletedList'];

var toggleSort = function toggleSort(editor, format, num) {
  var isActive = isBlockActive(editor, format);
  var isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: function match(n) {
      return n[format];
    },
    split: true
  });
  Transforms.setNodes(editor, {
    'ListItem': isList ? true : format
  });

  if (num) {
    var _block;

    var block = (_block = {}, _defineProperty(_block, format, num), _defineProperty(_block, "children", []), _block);
    Transforms.wrapNodes(editor, block);
  }
}; // 判断是否包含该样式


var isMarkList = function isMarkList(editor, formatList) {
  var _Editor$nodes = Editor.nodes(editor, {
    match: function match(n) {
      var isMark = false;

      _.map(formatList, function (e) {
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

var isBlockActive = function isBlockActive(editor, format) {
  var markType = 'None';

  var _Editor$nodes3 = Editor.nodes(editor, {
    match: function match(n) {
      var isMark = false;

      _.map(listOrder, function (e) {
        if (n['NumberedList'] === e) {
          isMark = true;
          markType = e;
        }
      });

      return isMark;
    }
  }),
      _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
      match = _Editor$nodes4[0];

  return !!match ? markType : false;
};

var OrderSortButton = function OrderSortButton(props) {
  var _useState = useState(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState('1'),
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

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      visible1 = _useState10[0],
      setVisible1 = _useState10[1];

  var _useState11 = useState(''),
      _useState12 = _slicedToArray(_useState11, 2),
      marks = _useState12[0],
      setMarks = _useState12[1];

  useEffect(function () {
    setFormat(props.sortFormat);
  }, [props.sortFormat]);
  useEffect(function () {
    var marksStr = '';

    var _Editor$nodes5 = Editor.nodes(props.editor, {
      match: function match(n) {
        var isMark = false;

        _.map(listOrder, function (e) {
          if (n['NumberedList'] === e) {
            isMark = true;
          }
        });

        return isMark;
      }
    }),
        _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
        match = _Editor$nodes6[0];

    if (match && match.length > 0) {
      marksStr = match[0]['NumberedList'];
    }

    setMarks(marksStr);
  }, [JSON.stringify(props.editor)]);

  function handleVisibleChange(e) {
    console.log(e);
    setVisible1(e);
  }

  var text = /*#__PURE__*/React.createElement("div", {
    id: "orderContent"
  }, /*#__PURE__*/React.createElement("div", {
    className: "listTitle"
  }, "\u6709\u5E8F\u5217\u8868\u5E93"), /*#__PURE__*/React.createElement("div", {
    className: "listContent"
  }, _.map(listOrder, function (listItem, index) {
    var contentObj = {};

    if (marks === listItem) {
      contentObj = {
        borderColor: '#FE8D29',
        background: 'rgba(254, 141, 41, 0.2)'
      };
    }

    return /*#__PURE__*/React.createElement("div", {
      className: "listItem",
      key: index,
      style: contentObj,
      onClick: function onClick() {
        setVisible1(false);
        props.setFormat(listItem);
        toggleSort(props.editor, props.format, listItem);
      }
    }, /*#__PURE__*/React.createElement("ol", {
      type: listItem
    }, /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", null)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("div", null))));
  }), /*#__PURE__*/React.createElement("div", {
    style: marks === '' ? {
      borderColor: '#FE8D29',
      background: 'rgba(254, 141, 41, 0.2)'
    } : {},
    className: "listItem nullItem",
    onClick: function onClick() {
      props.setFormat('');
      toggleSort(props.editor, props.format, '');
      setVisible1(false);
    }
  }, "\u65E0")));
  return /*#__PURE__*/React.createElement("div", {
    className: "LowerTriangle"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    style: {
      borderRadius: '2px 0px 0px 2px'
    },
    active: isMarkList(props.editor, listOrder),
    visible: visible1,
    onMouseDown: function onMouseDown(event) {
      event.preventDefault(); // toggleMark(props.editor, format);

      console.error(format);
      toggleSort(props.editor, props.format, format);

      if (isMarkList(props.editor, listOrder)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      } // setFormat(format);

    }
  }, order, /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)), /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon orderDown" // active={}
    ,
    style: {
      width: '12px',
      textAlign: 'center',
      position: 'relative',
      top: '-8px',
      borderRadius: '0px 2px 2px 0px',
      background: visible1 ? '#BFBFBF' : isMarkList(props.editor, listOrder) ? '#F5F5F5' : 'white'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
    }
  }, /*#__PURE__*/React.createElement(_Popconfirm, {
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
  }, /*#__PURE__*/React.createElement("span", {
    className: "trigger"
  }, lowerTriangle))));
};

export default OrderSortButton;