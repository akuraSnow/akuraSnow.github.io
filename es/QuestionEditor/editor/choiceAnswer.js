function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import React, { useState, useEffect } from 'react';
import "./richtext.css";
export default function ChoiceAnswer(props) {
  var _useState = useState(props.option),
      _useState2 = _slicedToArray(_useState, 2),
      option = _useState2[0],
      setoption = _useState2[1];

  var _useState3 = useState(function () {
    var answers = [];
    props.answer.map(function (item) {
      var answerItem;

      if (item.children[0] && item.children[0].text) {
        answerItem = item.children[0].text;
      }

      answers.push(answerItem);
    });
    return answers;
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      answer = _useState4[0],
      setAnswer = _useState4[1];

  useEffect(function () {
    var answers = [];
    props.answer.map(function (item) {
      var answerItem;

      if (item.children[0] && item.children[0].text) {
        answerItem = item.children[0].text;
      }

      answers.push(answerItem);
    });
    setAnswer(answers);
  }, [props.answer]);
  useEffect(function () {
    setoption(props.option);
  }, [props.option]);

  function chooseAnswer(item) {
    var newAnswer = JSON.parse(JSON.stringify(answer));

    if (props.questionType === 'SINGLE_CHOICE' || props.questionType === 'JUDGEMENT') {
      newAnswer = [];
    }

    var num = answer.findIndex(function (answerItem) {
      return answerItem === item;
    });

    if (num > -1) {
      newAnswer.splice(num, 1);
    } else {
      newAnswer.push(item);
    } // 自动排序


    newAnswer.sort(function (a, b) {
      return a > b ? 1 : -1;
    });
    var contentAnswer = newAnswer.map(function (item) {
      return {
        children: [{
          text: item
        }],
        type: 'Left'
      };
    });
    props.setAnswer(contentAnswer);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: 'answerOption'
  }, option.map(function (item, index) {
    var isChecked = answer[0] === item;
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      className: 'item'.concat(" ", isChecked ? 'checked' : ''),
      onClick: function onClick() {
        return chooseAnswer(item);
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: item.length === 1 ? '22px' : '12px'
      }
    }, item));
  }));
}