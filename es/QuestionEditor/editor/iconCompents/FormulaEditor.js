function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components';
import { formulaEditor } from '../toolbarIcon';
import DragModel from './../../../DragModel/index';
import { Transforms } from 'slate';
import "./iconCompents.css";
import { Tips } from "../../../MessageTips/index";
import $ from 'jquery';
var _visible = true;

var FormulaEditor = function FormulaEditor(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = useState(props.modalPosition),
      _useState4 = _slicedToArray(_useState3, 2),
      modalPosition = _useState4[0],
      setModalPosition = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selection = _useState6[0],
      setSelection = _useState6[1];

  var editorRef = useRef();

  var _useState7 = useState(null),
      _useState8 = _slicedToArray(_useState7, 2),
      editor = _useState8[0],
      setEditor = _useState8[1];

  useEffect(function () {
    setTimeout(function () {
      if ($.mathEditor) {
        var _editor = $(editorRef.current).mathEditor({
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
  useEffect(function () {
    setModalPosition(props.modalPosition);
  }, [props.modalPosition]);
  useEffect(function () {
    if (props.editor.selection) {
      setSelection(props.editor.selection);
    }
  }, [props.editor.selection]);

  function _onOk() {
    props.editor.selection = selection;
    Transforms.setSelection(props.editor, selection);
    var formulaResult = editor && editor.mathEditor ? editor.mathEditor('getMathML', 'UNICODE', 'true') : null;
    var formulaDOM = new DOMParser().parseFromString(formulaResult, 'text/html');
    var mathEl = formulaDOM.getElementsByTagName('math')[0];

    if (!mathEl.children.length) {
      Tips.open({
        message: '内容不能为空',
        type: 'fail'
      });
    } else {
      Transforms.insertNodes(props.editor, {
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

  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
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
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      width: '24px',
      height: '24px',
      lineHeight: '24px'
    }
  }, formulaEditor, /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "80px",
      height: '20px',
      lineHeight: '20px'
    }
  }, props.title))), /*#__PURE__*/React.createElement("div", null,
  /* eslint-disable */
  visible && props.isFocuse ? /*#__PURE__*/React.createElement(DragModel, {
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "parse-body identifySpin"
  }, /*#__PURE__*/React.createElement("div", {
    ref: editorRef
  }))) : ''));
};

export default FormulaEditor;