"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

var _singleQuestion = _interopRequireDefault(require("./singleQuestion"));

var _html = _interopRequireDefault(require("./html"));

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
      _singleQuestion.default.start(this.htmlContent);
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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "association-question a"
      }, showEbookDirectory ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "directory",
        onClick: function onClick() {
          return _this3.StemClickFun(ebookDirectory.id, '', 'chapter');
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "name"
      }, ebookDirectory.name, /*#__PURE__*/_react.default.createElement("div", {
        className: "mask-layer",
        style: {
          display: postComponentData.fStemId === ebookDirectory.id ? '' : 'none'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "associate",
        style: {
          display: associationState ? 'block' : 'none'
        }
      })))) : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        className: "father-stem",
        onClick: function onClick() {
          return _this3.StemClickFun(questionFid, question.id, 'question');
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "stem"
      }, /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.stem
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "option"
      }, /*#__PURE__*/_react.default.createElement(_html.default, {
        htmlData: question.option
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "showbtn",
        style: {
          display: question.questions && question.questions.length > 0 ? 'block' : 'none'
        },
        onClick: function onClick(event) {
          return _this3.ChangeShowState(event);
        }
      }, open ? '收起' : '展开', /*#__PURE__*/_react.default.createElement(_icon.default, {
        className: "showbtn-icon",
        type: open ? 'up' : 'down'
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "mask-layer",
        style: {
          display: postComponentData.fStemId === questionFid && postComponentData.cStemId === question.id ? '' : 'none'
        }
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "associate",
        style: {
          display: associationState ? 'block' : 'none'
        }
      })), /*#__PURE__*/_react.default.createElement("div", {
        className: "child-stem ".concat(open ? 'open' : 'close'),
        style: {
          height: heightDom
        }
      }, ((question === null || question === void 0 ? void 0 : question.questions) || []).map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index,
          ref: function ref(c) {
            if (c) {
              _this3.childStem.push(c);
            }
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "stem",
          onClick: function onClick() {
            return _this3.StemClickFun(questionFid, item.id, 'question');
          }
        }, /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.stem
        }), /*#__PURE__*/_react.default.createElement("div", {
          className: "mask-layer",
          style: {
            display: postComponentData.fStemId === questionFid && postComponentData.cStemId === item.id ? '' : 'none'
          }
        })), /*#__PURE__*/_react.default.createElement("div", {
          className: "option"
        }, /*#__PURE__*/_react.default.createElement(_html.default, {
          htmlData: item.option
        })));
      }))));
    }
  }]);

  return QuestionShow;
}(_react.Component);

exports.default = QuestionShow;