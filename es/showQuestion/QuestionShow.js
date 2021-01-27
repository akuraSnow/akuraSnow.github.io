function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/icon/style";
import _Icon from "antd/es/icon";

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

// @ts-nocheck
import React, { Component } from 'react';
import FormatQuestion from './singleQuestion';
import Html from './html';

var QuestionShow = /*#__PURE__*/function (_Component) {
  _inherits(QuestionShow, _Component);

  var _super = _createSuper(QuestionShow);

  function QuestionShow(props) {
    var _this;

    _classCallCheck(this, QuestionShow);

    _this = _super.call(this, props);

    _this.StemClickFun = function (fStemId, cStemId, type) {
      var postComponentData = _this.state.postComponentData;
      var newData = {
        fStemId: fStemId,
        cStemId: cStemId,
        type: type
      };

      if (postComponentData && postComponentData.fStemId === fStemId && postComponentData.cStemId === cStemId) {
        // 点击已选择的试题
        newData = {};
      }

      _this.props.getClickData(newData);
    };

    _this.state = {
      questionData: props.questionData,
      postComponentData: props.postComponentData,
      heightDom: 0,
      open: false,
      associationState: props.associationState,
      ebookDirectory: props.title,
      showEbookDirectory: props.showEbookDirectory
    };
    return _this;
  }

  _createClass(QuestionShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      FormatQuestion.start(this.htmlContent);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // if (!nextProps.associationState) {
      //     return false;
      // }
      this.setState({
        postComponentData: nextProps.postComponentData,
        associationState: nextProps.associationState,
        ebookDirectory: nextProps.title,
        showEbookDirectory: nextProps.showEbookDirectory
      });
    }
  }, {
    key: "ChangeShowState",
    value: function ChangeShowState(event) {
      var _this2 = this;

      event.stopPropagation();
      var height = 0;
      this.childStem.map(function (item, index) {
        height += item.clientHeight;
      });
      var open = this.state.open;
      this.setState({
        open: !open,
        heightDom: height + this.childStem.length * 15
      }, function () {
        setTimeout(function () {
          var open = _this2.state.open;

          if (!open) {
            _this2.setState({
              heightDom: 0
            });
          } else {
            _this2.setState({
              heightDom: height + _this2.childStem.length * 15
            });
          }
        }, 1);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.childStem = [];
      var _this$state = this.state,
          heightDom = _this$state.heightDom,
          open = _this$state.open,
          postComponentData = _this$state.postComponentData,
          questionData = _this$state.questionData,
          associationState = _this$state.associationState,
          ebookDirectory = _this$state.ebookDirectory,
          showEbookDirectory = _this$state.showEbookDirectory;
      var question = questionData.question;
      var questionFid = showEbookDirectory ? 0 : questionData.baseInfo.id;
      return /*#__PURE__*/React.createElement("div", {
        className: "association-question a"
      }, showEbookDirectory ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "directory",
        onClick: function onClick() {
          return _this3.StemClickFun(ebookDirectory.id, '', 'chapter');
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "name"
      }, ebookDirectory.name, /*#__PURE__*/React.createElement("div", {
        className: "mask-layer",
        style: {
          display: postComponentData.fStemId === ebookDirectory.id ? '' : 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "associate",
        style: {
          display: associationState ? 'block' : 'none'
        }
      })))) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        className: "father-stem",
        onClick: function onClick() {
          return _this3.StemClickFun(questionFid, question.id, 'question');
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: "stem"
      }, /*#__PURE__*/React.createElement(Html, {
        htmlData: question.stem
      })), /*#__PURE__*/React.createElement("div", {
        className: "option"
      }, /*#__PURE__*/React.createElement(Html, {
        htmlData: question.option
      })), /*#__PURE__*/React.createElement("div", {
        className: "showbtn",
        style: {
          display: question.questions && question.questions.length > 0 ? 'block' : 'none'
        },
        onClick: function onClick(event) {
          return _this3.ChangeShowState(event);
        }
      }, open ? '收起' : '展开', /*#__PURE__*/React.createElement(_Icon, {
        className: "showbtn-icon",
        type: open ? 'up' : 'down'
      })), /*#__PURE__*/React.createElement("div", {
        className: "mask-layer",
        style: {
          display: postComponentData.fStemId === questionFid && postComponentData.cStemId === question.id ? '' : 'none'
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "associate",
        style: {
          display: associationState ? 'block' : 'none'
        }
      })), /*#__PURE__*/React.createElement("div", {
        className: "child-stem ".concat(open ? 'open' : 'close'),
        style: {
          height: heightDom
        }
      }, ((question === null || question === void 0 ? void 0 : question.questions) || []).map(function (item, index) {
        return /*#__PURE__*/React.createElement("div", {
          key: index,
          ref: function ref(c) {
            if (c) {
              _this3.childStem.push(c);
            }
          }
        }, /*#__PURE__*/React.createElement("div", {
          className: "stem",
          onClick: function onClick() {
            return _this3.StemClickFun(questionFid, item.id, 'question');
          }
        }, /*#__PURE__*/React.createElement(Html, {
          htmlData: item.stem
        }), /*#__PURE__*/React.createElement("div", {
          className: "mask-layer",
          style: {
            display: postComponentData.fStemId === questionFid && postComponentData.cStemId === item.id ? '' : 'none'
          }
        })), /*#__PURE__*/React.createElement("div", {
          className: "option"
        }, /*#__PURE__*/React.createElement(Html, {
          htmlData: item.option
        })));
      }))));
    }
  }]);

  return QuestionShow;
}(Component);

export { QuestionShow as default };