"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.questionType = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _singleQuestion = _interopRequireDefault(require("./singleQuestion"));

var _Tips = _interopRequireDefault(require("../MessageTips/Tips/Tips"));

var _html = _interopRequireDefault(require("./html"));

var _showQuestion = _interopRequireDefault(require("./showQuestion.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var questionType = {
  SINGLE_CHOICE: '单选题',
  MULTIPLE_CHOICE: '多选题',
  INDEFINITE_CHOICE: '不定项选择题',
  COMPLETION: '填空题',
  JUDGEMENT: '判断题',
  FREE_RESPONSE: '解答题',
  COMPREHENSIVE: '综合题'
};
exports.questionType = questionType;

var SaveQuestionShow = /*#__PURE__*/function (_Component) {
  _inherits(SaveQuestionShow, _Component);

  var _super = _createSuper(SaveQuestionShow);

  function SaveQuestionShow(props) {
    var _this;

    _classCallCheck(this, SaveQuestionShow);

    _this = _super.call(this, props);

    _this.htmlDomShow = function (data) {
      if (!data || data.length === 0) {
        return 'none';
      } else {
        return '';
      }
    };

    _this.changeheight = function (event) {
      if (event.target && event.target.getAttribute('calss') === 'ausioBtn') {
        _Tips.default.open({
          message: '音频下载中，请稍后！',
          type: 'spin'
        });

        try {
          var url = event.target.getAttribute('attr-url');
          var fileNameArr = url.split('/');
          var fileName = fileNameArr[fileNameArr.length - 1];
          console.log("url", url);
          var x = new XMLHttpRequest();
          x.open("GET", url, true);
          x.responseType = 'blob';

          x.onreadystatechange = function () {
            console.log(x);

            if (x.readyState == 4) {
              // 4 = "loaded"
              _Tips.default.close();
            }
          };

          x.onload = function (e) {
            var url = window.URL.createObjectURL(x.response);
            var a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click(); // window.open(url);
          };

          x.send();
        } catch (error) {
          _Tips.default.close();
        }
      } else {
        var open = _this.state.open;

        _this.setState({
          open: !open
        });
      } // event.stopPropagation();

    };

    _this.state = {
      questionData: props.questionData,
      postComponentData: props.postComponentData,
      heightDom: 0,
      open: props.open ? props.open : false,
      associationState: props.associationState,
      ebookDirectory: props.title
    };
    return _this;
  }

  _createClass(SaveQuestionShow, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _singleQuestion.default.start(this.htmlContent, this.props.showSpin);
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
        questionData: nextProps.questionData,
        open: nextProps.open
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
    } // 获取颜色

  }, {
    key: "getColor",
    value: function getColor() {
      return function (styles) {
        var color = '';
        styles.map(function (style) {
          if (style.includes('Color')) {
            color = style.split('Color')[1];
          }
        });
        return {
          color: '#' + color
        };
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      this.childStem = [];
      var _this$props = this.props,
          isModal = _this$props.isModal,
          questionOrder = _this$props.questionOrder,
          _this$props$defaultEx = _this$props.defaultExpanded,
          defaultExpanded = _this$props$defaultEx === void 0 ? false : _this$props$defaultEx;
      var _this$state = this.state,
          heightDom = _this$state.heightDom,
          open = _this$state.open,
          questionData = _this$state.questionData;
      var _questionData$questio = questionData.question,
          question = _questionData$questio === void 0 ? {} : _questionData$questio;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: isModal ? _showQuestion.default.modalQuestionShow : _showQuestion.default.neqQuestionShow
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "questionCotent ".concat(_showQuestion.default.test, " ").concat(defaultExpanded || open ? _showQuestion.default.open : _showQuestion.default.close),
        style: {
          height: defaultExpanded || open ? 'auto' : 200
        },
        onClick: function onClick(event) {
          return !defaultExpanded && _this3.changeheight(event);
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.fatherStem, " fatherQuestion-").concat(questionOrder)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.stem, " fatherStem-").concat(questionOrder),
        style: {
          display: this.htmlDomShow(question.stem)
        }
      }, /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.stem || [],
        className: _showQuestion.default.questionHtml
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.option, " fatherOption-").concat(questionOrder),
        style: {
          display: this.htmlDomShow(question.option)
        }
      }, /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.option || [],
        className: _showQuestion.default.questionHtml
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.answer, " fatherAnswer-").concat(questionOrder),
        style: {
          display: this.htmlDomShow(question.answer)
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _showQuestion.default.questionTitle
      }, "\u3010\u7B54\u6848\u3011"), /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.answer || [],
        className: _showQuestion.default.questionHtml
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.explanation, " fatherExplanation-").concat(questionOrder, "                                                                                                                                                                                                                                                           "),
        style: {
          display: this.htmlDomShow(question.explanation)
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _showQuestion.default.questionTitle
      }, "\u3010\u89E3\u6790\u3011"), /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.explanation || [],
        className: _showQuestion.default.questionHtml
      }))), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_showQuestion.default.childStem, " ").concat(open ? _showQuestion.default.open : _showQuestion.default.close)
      }, ((question === null || question === void 0 ? void 0 : question.questions) || []).map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          ref: function ref(c) {
            if (c) {
              _this3.childStem.push(c);
            }
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _showQuestion.default.stem,
          style: {
            display: _this3.htmlDomShow(item.stem)
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _showQuestion.default.attrQuestionType,
          style: {
            verticalAlign: 'top'
          }
        }, questionType[item.questionType]), (item.questionType === 'SINGLE_CHOICE' || item.questionType === 'INDEFINITE_CHOICE' || item.questionType === 'MULTIPLE_CHOICE') && item.option && item.option.length ? /*#__PURE__*/_react.default.createElement("div", {
          className: _showQuestion.default.attrOptionType,
          style: {
            marginLeft: '10px',
            verticalAlign: 'top'
          }
        }, "\u5171", item.option && item.option.length, "\u4E2A\u9009\u9879") : ''), /*#__PURE__*/_react.default.createElement("div", {
          style: {
            display: 'flex',
            marginTop: 16
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          style: {
            color: '#FE8D29',
            marginRight: 8,
            fontWeight: 'bold',
            minWidth: 20
          }
        }, "".concat(index + 1, " . ")), /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.stem || [],
          className: "".concat(_showQuestion.default.questionHtml, " subQuestion-").concat(questionOrder, "-").concat(index)
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(_showQuestion.default.option, " subOption-").concat(questionOrder, "-").concat(index),
          style: {
            display: _this3.htmlDomShow(item.option)
          }
        }, /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.option || [],
          className: _showQuestion.default.questionHtml
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(_showQuestion.default.answer, " subAnswer-").concat(questionOrder, "-").concat(index),
          style: {
            display: _this3.htmlDomShow(item.answer)
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _showQuestion.default.questionTitle,
          style: {
            fontWeight: 'bolder'
          }
        }, "\u3010\u7B54\u6848\u3011"), /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.answer || [],
          className: _showQuestion.default.questionHtml
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "".concat(_showQuestion.default.explanation, " subExplanation-").concat(questionOrder, "-").concat(index),
          style: {
            display: _this3.htmlDomShow(item.explanation)
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: _showQuestion.default.questionTitle,
          style: {
            fontWeight: 'bolder'
          }
        }, "\u3010\u89E3\u6790\u3011"), /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.explanation || [],
          className: _showQuestion.default.questionHtml
        })));
      })), !defaultExpanded ? /*#__PURE__*/_react.default.createElement("div", {
        className: _showQuestion.default.showbtn,
        onClick: function onClick(event) {
          return _this3.changeheight(event);
        }
      }, open ? '收起更多内容' : '展开更多内容', /*#__PURE__*/_react.default.createElement(_icon.default, {
        className: _showQuestion.default.showbtnIcon,
        type: open ? 'up' : 'down'
      })) : null));
    }
  }]);

  return SaveQuestionShow;
}(_react.Component);

exports.default = SaveQuestionShow;