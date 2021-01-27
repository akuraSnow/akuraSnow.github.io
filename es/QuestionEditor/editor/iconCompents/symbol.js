import "antd/es/tabs/style";
import _Tabs from "antd/es/tabs";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Button } from '../components';
import { symbol } from '../toolbarIcon';
import DragModel from '../../../DragModel/index';
import { symbolList } from '../client';
import { Node, Transforms } from 'slate';
import "./iconCompents.css";
var TabPane = _Tabs.TabPane;

var SymbolIcon = function SymbolIcon(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(props.modalPosition),
      _useState4 = _slicedToArray(_useState3, 2),
      modalPosition = _useState4[0],
      setModalPosition = _useState4[1];

  useEffect(function () {
    setModalPosition(props.modalPosition);
    setVisible(props.modalPosition.visible);
  }, [props.modalPosition]);

  function insertIcon(value) {
    var editor = props.editor;
    var selection = editor.selection; // Transforms.insertNodes(editor, value);

    console.error(value);

    if (value.type !== 'mention') {
      Transforms.insertText(editor, value.text);
    } else if (selection && selection.focus && selection.focus.path.length !== 3) {
      Transforms.insertNodes(editor, value);
      var path = selection.anchor.path;
      var newPath = [path[0], path[1] + 2];
      var newPositiong = {
        anchor: {
          offset: 0,
          path: newPath
        },
        focus: {
          offset: 0,
          path: newPath
        }
      };
      Transforms.setSelection(editor, newPositiong);
    } else if (selection && selection.focus && selection.focus.path.length === 3 && Node.parent(editor, selection.anchor.path).ListItem) {
      Transforms.insertNodes(editor, value); // let selection = props.editor.selection;

      var _path = selection.anchor.path;
      console.log(_path);
      var _newPath = [_path[0], _path[1], _path[2] + 2];
      var _newPositiong = {
        anchor: {
          offset: 0,
          path: _newPath
        },
        focus: {
          offset: 0,
          path: _newPath
        }
      };
      console.log('newPositiong===>', _newPositiong);
      Transforms.setSelection(editor, _newPositiong);
    }
  }

  function callback(e) {
    document.querySelector('.ant-tabs-card-content').scrollTop = 0;
    props.postion && props.postion(Object.assign(Object.assign({}, modalPosition), {
      ActiveKey: e
    }));
  }

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: props.isFocuse ? 'tabbarIcon' : '',
    active: false,
    style: {
      width: '28px',
      height: '28px',
      textAlign: 'center',
      position: 'relative',
      top: '2px'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      props.isFocuse && setVisible(true);
      props.isFocuse && props.setVisible && props.setVisible(true);
      props.isFocuse && props.postion && props.postion(Object.assign(Object.assign({}, modalPosition), {
        visible: true
      }));
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '28px',
      height: '28px',
      lineHeight: '25px'
    }
  }, symbol)), /*#__PURE__*/React.createElement("div", null, visible && props.isFocuse ? /*#__PURE__*/React.createElement(DragModel, {
    style: {
      width: '400px',
      height: '412px',
      backgroundColor: '#fff',
      // position: 'absolute' 
      left: modalPosition.left,
      top: modalPosition.top
    },
    title: props.title,
    noneFooter: true,
    postion: function postion(e) {
      return props.postion && props.postion(Object.assign(Object.assign(Object.assign({}, modalPosition), e), {
        visible: visible
      }));
    },
    onCancle: function onCancle() {
      setVisible(false);
      props.postion && props.postion({
        left: 'calc(50% - 200px)',
        top: 'calc(50vh - 207px)',
        visible: false,
        ActiveKey: '0'
      });
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "card-container"
  }, /*#__PURE__*/React.createElement(_Tabs, {
    defaultActiveKey: modalPosition.ActiveKey,
    type: "card",
    tabPosition: "left",
    onChange: function onChange(e) {
      return callback(e);
    }
  }, _.map(symbolList(), function (symbolItem, index) {
    return /*#__PURE__*/React.createElement(TabPane, {
      tab: symbolItem.label,
      key: index
    }, /*#__PURE__*/React.createElement("div", {
      className: "symbolContent"
    }, _.map(symbolItem.content, function (contentItem, i) {
      var str = null;

      if (contentItem.fontSize) {
        str = /*#__PURE__*/React.createElement("span", {
          style: {
            fontSize: "".concat(contentItem.fontSize, "px")
          }
        }, unescape(contentItem.text));
      } else if (contentItem.type === 'mention') {
        str = /*#__PURE__*/React.createElement("img", {
          src: contentItem.character,
          alt: ""
        });
      } else {
        str = unescape(contentItem.text.replace(/\\u/g, '%u'));
      }

      return /*#__PURE__*/React.createElement("div", {
        className: "symbolIcon",
        key: i,
        onClick: function onClick() {
          return insertIcon(contentItem);
        }
      }, /*#__PURE__*/React.createElement("span", null, str));
    })));
  })))) : ''));
};

export default SymbolIcon;