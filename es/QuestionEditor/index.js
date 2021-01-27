function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import EditItem from './editor/index';
import { getQuestion } from './editor/client';
import { data } from './data';

var Minpage = /*#__PURE__*/function (_Component) {
  _inherits(Minpage, _Component);

  var _super = _createSuper(Minpage);

  function Minpage(props) {
    var _this;

    _classCallCheck(this, Minpage);

    _this = _super.call(this, props);

    _this.changeValue = function (value, indexArr, ei, questionType) {
      console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ questionType", questionType);
      console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ ei", ei);
      console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ indexArr", indexArr);
      console.log("🚀 ~ file: index.tsx ~ line 47 ~ Minpage ~ value", value);

      _this.props.changeValue(value, indexArr, ei, questionType);
    };

    _this.changeAnswer = function () {}; // const queryParams = new URLSearchParams(props.location.pathname.split('?')[1]);
    // props.history.push(`${url}?openLink=true&step=${1}`);


    console.log(data[0].question);
    var questionStructure = getQuestion(props.question.question, 'SINGLE_CHOICE');
    console.log("🚀 ~ file: index.tsx ~ line 31 ~ Minpage ~ constructor ~ questionStructure", questionStructure); // init();

    _this.state = {
      questions: props.question,
      type: 'SINGLE_CHOICE',
      search: "",
      questionStructure: questionStructure
    };
    return _this;
  }

  _createClass(Minpage, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          type = _this$state.type,
          search = _this$state.search,
          questions = _this$state.questions,
          questionStructure = _this$state.questionStructure;
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EditItem, {
        type: type,
        search: search,
        value: questions,
        questionStructure: questionStructure,
        changeValue: this.changeValue,
        changeAnswer: this.changeAnswer
      }));
    }
  }]);

  return Minpage;
}(Component);

export { Minpage as default };