"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/tabs/style");

var _tabs = _interopRequireDefault(require("antd/es/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _richtext = _interopRequireDefault(require("./richtext"));

var _choiceAnswer = _interopRequireDefault(require("./choiceAnswer"));

var _JudgementAnswer = _interopRequireDefault(require("./components/JudgementAnswer"));

var _MessageTips = require("../../MessageTips");

var _client = require("./client");

var _debounce = _interopRequireDefault(require("lodash/debounce"));

require("./richtext.css");

var _lodash = _interopRequireDefault(require("lodash"));

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

var TabPane = _tabs.default.TabPane;

var EditItem = /*#__PURE__*/function (_Component) {
  _inherits(EditItem, _Component);

  var _super = _createSuper(EditItem);

  function EditItem(props) {
    var _this;

    _classCallCheck(this, EditItem);

    _this = _super.call(this, props); // 父组件触犯

    _this.changChild = function () {
      console.error('222');
    };

    _this.changeValue = function (value, indexArr, ei, questionType) {
      // @ts-ignore
      _this.props.changeValue && _this.props.changeValue(value, indexArr, ei, questionType);
    };

    _this.handleBatchOk = function (n) {
      var _this$state = _this.state,
          questionItem = _this$state.questionItem,
          questionStructure = _this$state.questionStructure,
          isChangeQuestionList = _this$state.isChangeQuestionList,
          type = _this$state.type,
          videoUrl = _this$state.videoUrl;
      var changeValue = (0, _client.getQuestionHtml)(JSON.parse(JSON.stringify(questionStructure)), type);

      if (changeValue.questionList['questions']) {
        changeValue.questionList['questions'] = changeValue.questionList['questions'].map(function (item, index) {
          return Object.assign(Object.assign({}, questionItem['question']['questions'][index]), item);
        });
      }

      var newQuestionItem = Object.assign(Object.assign({}, questionItem), {
        question: Object.assign(Object.assign(Object.assign({}, questionItem['question']), changeValue.questionList), {
          isChangeQuestionList: n === 1 ? isChangeQuestionList : []
        })
      });

      if (changeValue.errList.length > 0 && n !== 0) {
        _MessageTips.Tips.open({
          message: "\u8BF7\u5B8C\u5584\u5185\u5BB9",
          type: 'fail'
        });

        var errKey = changeValue.errList.map(function (item) {
          return item.index;
        });
        errKey = errKey.filter(function (e) {
          return e !== undefined;
        });

        _this.setState({
          questionStructure: changeValue.question,
          errList: errKey,
          activeKey: "".concat(errKey && errKey.length > 0 ? errKey[0] : _this.state.activeKey)
        });
      } else {
        if (videoUrl.content) {
          newQuestionItem.question.stem.push({
            alignment: "Left",
            fragments: [{
              content: videoUrl.content,
              mediaType: "AUDIO",
              styles: []
            }],
            indentation: 0,
            styles: []
          });
        }

        ;

        if (videoUrl.questions && Object.keys(videoUrl.questions).length > 0) {
          for (var key in videoUrl.questions) {
            if (videoUrl.questions.hasOwnProperty(key)) {
              var element = videoUrl.questions[key].content;

              if (element) {
                newQuestionItem.question.questions[key].stem.push({
                  alignment: "Left",
                  fragments: [{
                    content: element,
                    mediaType: "AUDIO",
                    styles: []
                  }],
                  indentation: 0,
                  styles: []
                });
              }
            }
          }
        }

        _this.props.handOkVal && _this.props.handOkVal(newQuestionItem, n);
      }
    };

    _this.chooseBox = function (index) {
      var questionStructure = _this.state.questionStructure;
      var newQuestionStructure = questionStructure.map(function (item, i) {
        if (index !== i) {
          item.isChoose = false;
        } else {
          item.isChoose = true;
        }

        item.readOnly = false;
        return item;
      });

      _this.setState({
        questionStructure: newQuestionStructure
      });
    };

    _this.setAnswer = function (e, ei) {
      var questionStructure = _this.state.questionStructure;
      var newQuestionStructure = JSON.parse(JSON.stringify(questionStructure)).map(function (questionItem) {
        if (questionItem.type === 'answer') {
          questionItem.content = e;
          questionItem.isFilled = true;
        }

        if (questionItem.type === 'comprehensive') {
          questionItem.content[ei].map(function (item) {
            if (item.type === 'answer') {
              item.content = e;
              item.isFilled = true;
            }
          });
        }

        return questionItem;
      });
      console.log('newQuestionStructure==>', newQuestionStructure);

      _this.setState({
        questionStructure: newQuestionStructure
      }, function () {
        _this.props.changeAnswer(newQuestionStructure);
      });
    }; // 删除选择题选项


    _this.deleteOption = function (index, ei) {
      var _this$state2 = _this.state,
          questionStructure = _this$state2.questionStructure,
          isChangeQuestionList = _this$state2.isChangeQuestionList;
      var newQuestionStructures;
      var isOnlyOption = false;
      newQuestionStructures = (0, _client.getEmptyOption)(index, questionStructure, isOnlyOption, ei);

      if (ei !== undefined) {
        if (isChangeQuestionList.indexOf(ei) === -1) {
          isChangeQuestionList.push(ei);
        }
      } else {
        if (isChangeQuestionList.indexOf(-1) === -1) {
          isChangeQuestionList.push(-1);
        }
      }

      if (newQuestionStructures.isOnlyOption) {
        _MessageTips.Tips.open({
          message: "\u81F3\u5C11\u5305\u542B\u4E24\u4E2A\u9009\u9879",
          type: 'fail'
        });
      } else {
        _this.setState({
          questionStructure: newQuestionStructures.newQuestionStructure
        }, function () {
          _this.setState({
            questionStructure: newQuestionStructures.newQuestionStructure1,
            isChangeQuestionList: isChangeQuestionList
          }, function () {
            (0, _client.showMathJax)(true);
          });
        });
      }
    };

    _this.callback = function (key) {
      var _this$state3 = _this.state,
          questionItem = _this$state3.questionItem,
          questionStructure = _this$state3.questionStructure,
          type = _this$state3.type;
      var changeValue = (0, _client.getQuestionHtml)(JSON.parse(JSON.stringify(questionStructure)), type);
      var errKey = changeValue.errList.map(function (item) {
        return item.index;
      });
      errKey = errKey.filter(function (e) {
        return e !== undefined;
      });

      _this.setState({
        activeKey: key,
        errList: errKey
      }, function () {
        (0, _client.showMathJax)(true);
      });
    }; // 保存拖拽的位置


    _this.postion = function (e) {
      _this.setState({
        modalPosition: e
      });
    };

    _this.positionInsertFormula = function (e) {
      _this.setState({
        modalPositionInsertFormula: e
      });
    }; // 切换答案的类型


    _this.changeItem = function (option) {
      var questionStructure = _this.state.questionStructure;

      var newQuestionStructure = _lodash.default.map(questionStructure, function (item) {
        if (item.type === 'answer') {
          item.option = _lodash.default.cloneDeep(option);
          item.content = [{
            children: [{
              text: option[0],
              styles: [],
              type: 'Left'
            }]
          }];
        }

        return item;
      });

      _this.setState({
        questionStructure: newQuestionStructure
      }, function () {
        _this.props.changeAnswer(newQuestionStructure);
      }); // console.log('questionStructure==>', questionStructure);

    }; // 取消答案
    // @ts-ignore


    _this.calcelAnswers = function (index, i) {
      var _this$state4 = _this.state,
          questionStructure = _this$state4.questionStructure,
          type = _this$state4.type;

      var newQuestionStructure = _lodash.default.map(questionStructure, function (item) {
        if (item.type === 'option') {
          item.content = _lodash.default.map(item.content, function (el, eli) {
            if (eli === i) {
              el = Object.assign(Object.assign({}, el), {
                isAnswer: false
              });
            }

            return el;
          });
        }

        return item;
      });

      newQuestionStructure = _this.getAnswerStructure(newQuestionStructure);

      _this.setState({
        questionStructure: newQuestionStructure
      }, function () {
        _this.props.changeAnswer(newQuestionStructure);
      });
    }; // 设置答案
    // @ts-ignore


    _this.setAnswers = function (index, i) {
      var _this$state5 = _this.state,
          questionStructure = _this$state5.questionStructure,
          type = _this$state5.type;
      console.log('newQuestionStructure==>', questionStructure);

      var newQuestionStructure = _lodash.default.map(questionStructure, function (item) {
        // 修改报错的状态
        item.isFilled = true;

        if (item.type === 'option') {
          if (type === 'SINGLE_CHOICE') {
            item.content = _lodash.default.map(item.content, function (el, eli) {
              if (eli === i) {
                el = Object.assign(Object.assign({}, el), {
                  isAnswer: true
                });
              } else {
                el = Object.assign(Object.assign({}, el), {
                  isAnswer: false
                });
              }

              return el;
            });
          } else {
            item.content = _lodash.default.map(item.content, function (el, eli) {
              if (eli === i) {
                el = Object.assign(Object.assign({}, el), {
                  isAnswer: true
                });
              }

              return el;
            });
          }
        }

        return item;
      });

      newQuestionStructure = _this.getAnswerStructure(questionStructure);

      _this.setState({
        questionStructure: newQuestionStructure
      }, function () {
        _this.props.changeAnswer(newQuestionStructure);
      });
    };

    _this.getAnswerStructure = function (newQuestionStructure) {
      var contentItem = [];
      newQuestionStructure = _lodash.default.map(newQuestionStructure, function (item) {
        if (item.type === 'option') {
          item.content = _lodash.default.map(item.content, function (el, eli) {
            if (el.isAnswer) {
              contentItem.push({
                children: [{
                  text: _client.optionValue[eli]
                }],
                styles: [],
                type: 'Left'
              });
            }

            return el;
          });
        }

        return item;
      });
      newQuestionStructure = _lodash.default.map(newQuestionStructure, function (item) {
        if (item.type === 'answer') {
          item.content = _lodash.default.cloneDeep(contentItem);
        }

        return item;
      });
      return newQuestionStructure;
    };

    _this.addAnswers = function (index, i) {
      var questionStructure = _this.state.questionStructure;

      var newQuestionStructure = _lodash.default.cloneDeep(questionStructure); // console.log('questionStructure====>', _.cloneDeep(questionStructure));


      var contents = newQuestionStructure[index]['content'];
      newQuestionStructure[index]['content'] = _lodash.default.map(contents, function (item) {
        item = Object.assign(Object.assign({}, item), {
          autoFocus: false
        });
        return item;
      });
      newQuestionStructure[index]['content'].splice(i + 1, 0, {
        children: [{
          text: "",
          isAdd: true
        }],
        isFilled: true,
        autoFocus: true,
        key: String(Math.random()).replace('\.', ''),
        requireText: "内容不能为空",
        styles: [],
        type: 'Left'
      });

      _this.props.changeAnswer(_lodash.default.cloneDeep(newQuestionStructure));
    };

    _this.deleteAnswers = function (index, i) {
      var questionStructure = _this.state.questionStructure;
      questionStructure[index]['content'].splice(i, 1);
      var content = questionStructure[index]['content'].length; // @ts-ignore

      var option = _client.optionValue.filter(function (el, index) {
        return index < content;
      }); // 删除的时候，对答案进行处理


      questionStructure = _lodash.default.map(questionStructure, function (el) {
        if (el.type === 'answer') {
          // console.log(value);
          // 记录修改的题
          // 判断是否为空的
          el.content = el.content.map(function (item) {
            item.children = item.children.filter(function (e) {
              var text = '';
              var result = e.text ? e.text.replace(/(^\s*)|(\s*$)/g, '') : '';

              if (e.character) {
                result += e.character ? e.character.replace(/(^\s*)|(\s*$)/g, '') : '';
              }

              text += result;
              return option.includes(text);
            });
            item.option = _lodash.default.cloneDeep(option);
            return item;
          });
        }

        return el;
      });

      var newQuestionStructure = _this.getAnswerStructure(questionStructure);

      _this.setState({
        questionStructure: newQuestionStructure
      }, function () {
        _this.props.changeAnswer(_lodash.default.cloneDeep(newQuestionStructure));
      });
    }; // let initVal = changeJson(props.value.question.stem);


    var videoUrl = (0, _client.getVideoUrl)(props.value.question);
    _this.state = {
      questionRenderCompleted: false,
      questionItem: JSON.parse(JSON.stringify(props.value)),
      // initVal: initVal,
      questionStructure: props.questionStructure,
      type: props.value.question.questionType,
      // value: initVal,
      activeKey: '0',
      answer: ['A'],
      errList: [],
      isChangeQuestionList: props.value.question.isChangeQuestionList || [],
      hasError: false,
      orderSortVisible: false,
      modalPosition: {
        visible: false,
        ActiveKey: '0',
        left: 'calc(50% - 200px)',
        top: 'calc(50vh - 207px)'
      },
      modalPositionInsertFormula: {
        visible: false,
        ActiveKey: '0',
        left: 'calc(50% - 500px)',
        top: 'calc(50vh - 200px)'
      },
      color: 'black',
      sortFormat: '1',
      isInBox: false,
      videoUrl: videoUrl
    };
    _this.changeValue = (0, _debounce.default)(_this.changeValue, 100);
    return _this;
  }

  _createClass(EditItem, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _a;

      (0, _client.showMathJax)();
      (_a = document.getElementById('RichText')) === null || _a === void 0 ? void 0 : _a.addEventListener('dragstart', function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      var questionStructure = nextProps.questionStructure;

      if (JSON.stringify(this.state.questionStructure) !== JSON.stringify(questionStructure)) {
        // console.log('questionStructure====>', questionStructure);
        // let transitionQuestionStructure = _.map(_.cloneDeep(questionStructure), (el: any) => {
        //     el.content = [];
        //     return el;
        // });
        this.setState({
          questionStructure: []
        }, function () {
          _this2.setState({
            questionStructure: questionStructure,
            type: nextProps.value.question.questionType
          }, function () {
            (0, _client.showMathJax)(true);
          });
        });
      }
    }
  }, {
    key: "componentDidCatch",
    value: function componentDidCatch() {
      var hasError = this.state.hasError;

      _MessageTips.Tips.open({
        message: "\u8F93\u5165\u9519\u8BEF\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\uFF01",
        type: 'fail',
        time: 500
      });

      this.setState({
        hasError: !hasError
      });
      (0, _client.showMathJax)(true);
    }
  }, {
    key: "RichTextRender",
    value: function RichTextRender(item, index, ei) {
      var _this3 = this;

      var _this$state6 = this.state,
          modalPosition = _this$state6.modalPosition,
          color = _this$state6.color,
          sortFormat = _this$state6.sortFormat,
          modalPositionInsertFormula = _this$state6.modalPositionInsertFormula,
          isInBox = _this$state6.isInBox;
      var search = this.props.search;
      var renderDom;

      if (item.type !== 'option' && item.type !== 'answer') {
        renderDom = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
          className: !item.isFilled && item.require ? 'boxError' : 'RichTextInput'
        }, /*#__PURE__*/_react.default.createElement(_richtext.default, {
          search: search,
          value: item.content,
          isFistRich: item.isFistRich,
          minHeight: 63,
          id: "".concat(index).concat(ei),
          changeValue: function changeValue(e) {
            return _this3.changeValue(e, [index], ei);
          },
          postion: function postion(e) {
            return _this3.postion(e);
          },
          positionInsertFormula: function positionInsertFormula(e) {
            return _this3.positionInsertFormula(e);
          },
          modalPosition: modalPosition,
          modalPositionInsertFormula: modalPositionInsertFormula,
          changeColor: function changeColor(color) {
            return _this3.setState({
              color: color
            });
          },
          color: color,
          sortFormat: sortFormat,
          setFormat: function setFormat(e) {
            return _this3.setState({
              sortFormat: e
            });
          },
          isInBox: isInBox
        })), !item.isFilled && item.require ? /*#__PURE__*/_react.default.createElement("div", {
          className: 'error'
        }, item.requireText) : '');
      } else if (item.type !== 'answer') {
        renderDom = /*#__PURE__*/_react.default.createElement("div", {
          className: "optionContain"
        }, item.content.map(function (contentItem, i) {
          return /*#__PURE__*/_react.default.createElement("div", {
            key: contentItem.key || i,
            className: 'optionBox1'
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: 'optionItem'
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: 'richtext'.concat("\n                                        optionContent\n                                        ", !contentItem.isFilled ? 'boxError' : 'RichTextInput', "\n                                        ").concat(contentItem.isAnswer ? 'isAnswer' : '', "\n                                    "),
            id: contentItem['autoFocus'] ? 'autoFocus' : ''
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "answerOptate"
          }, item.content.length > 2 ? /*#__PURE__*/_react.default.createElement("div", {
            className: "cancelswer",
            onClick: function onClick() {
              return _this3.deleteAnswers(index, i);
            }
          }, "\u5220\u9664") : '', !contentItem.isAnswer ? /*#__PURE__*/_react.default.createElement("div", {
            className: "answer",
            onClick: function onClick() {
              return _this3.setAnswers(index, i);
            }
          }, "\u8BBE\u4E3A\u7B54\u6848") : /*#__PURE__*/_react.default.createElement("div", {
            className: "answer",
            onClick: function onClick() {
              return _this3.calcelAnswers(index, i);
            }
          }, "\u53D6\u6D88\u7B54\u6848"), /*#__PURE__*/_react.default.createElement("div", {
            className: "addswer",
            onMouseUp: function onMouseUp() {
              return _this3.addAnswers(index, i);
            }
          }, "\u65B0\u589E")), /*#__PURE__*/_react.default.createElement(_richtext.default, {
            search: search,
            index: contentItem['Key'],
            value: [contentItem],
            autoFocus: contentItem['autoFocus'],
            isoption: true,
            isOption: true,
            id: "".concat(index).concat(i),
            isFilled: contentItem.isFilled,
            changeValue: function changeValue(e) {
              return _this3.changeValue(e, [index, i], ei);
            },
            postion: function postion(e) {
              return _this3.postion(e);
            },
            positionInsertFormula: function positionInsertFormula(e) {
              return _this3.positionInsertFormula(e);
            },
            modalPosition: modalPosition,
            modalPositionInsertFormula: modalPositionInsertFormula,
            changeColor: function changeColor(color) {
              return _this3.setState({
                color: color
              });
            },
            color: color,
            sortFormat: sortFormat,
            setFormat: function setFormat(e) {
              return _this3.setState({
                sortFormat: e
              });
            },
            isInBox: isInBox
          }))), !contentItem.isFilled ? /*#__PURE__*/_react.default.createElement("div", {
            className: 'error'
          }, contentItem.requireText) : '');
        }));
      } else if (item.type === 'answer' && item.questionType !== 'SINGLE_CHOICE' && item.questionType !== 'MULTIPLE_CHOICE' && item.questionType !== 'INDEFINITE_CHOICE') {
        renderDom = item.isChoice ? /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_choiceAnswer.default, {
          answer: item.content,
          option: item.option,
          questionType: item.questionType,
          setAnswer: function setAnswer(e) {
            return _this3.setAnswer(e, ei);
          }
        }), !item.isFilled && item.require ? /*#__PURE__*/_react.default.createElement("div", {
          className: 'error'
        }, item.requireText) : '') : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
          className: !item.isFilled && item.require ? 'boxError' : 'RichTextInput'
        }, /*#__PURE__*/_react.default.createElement(_richtext.default, {
          search: search,
          value: item.content,
          isFistRich: item.isFistRich,
          minHeight: 63,
          id: "".concat(index).concat(ei),
          changeValue: function changeValue(e) {
            return _this3.changeValue(e, [index], ei, 'answer');
          },
          postion: function postion(e) {
            return _this3.postion(e);
          },
          positionInsertFormula: function positionInsertFormula(e) {
            return _this3.positionInsertFormula(e);
          },
          modalPosition: modalPosition,
          modalPositionInsertFormula: modalPositionInsertFormula,
          changeColor: function changeColor(color) {
            return _this3.setState({
              color: color
            });
          },
          color: color,
          sortFormat: sortFormat,
          setFormat: function setFormat(e) {
            return _this3.setState({
              sortFormat: e
            });
          },
          isInBox: isInBox
        })), !item.isFilled && item.require ? /*#__PURE__*/_react.default.createElement("div", {
          className: 'error'
        }, item.requireText) : '');
      } else if (item.type === 'answer') {
        renderDom = item.isChoice ? /*#__PURE__*/_react.default.createElement("div", null, !item.isFilled && item.require ? /*#__PURE__*/_react.default.createElement("div", {
          className: 'error'
        }, item.requireText) : '') : '';
      }

      return renderDom;
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$state7 = this.state,
          questionStructure = _this$state7.questionStructure,
          errList = _this$state7.errList,
          activeKey = _this$state7.activeKey,
          hasError = _this$state7.hasError,
          videoUrl = _this$state7.videoUrl;
      var _this$props = this.props,
          copyQuestionMode = _this$props.copyQuestionMode,
          renderDOM = _this$props.renderDOM;

      var topicContent = function topicContent(item, index, ei) {
        return /*#__PURE__*/_react.default.createElement("div", {
          key: index
        }, item.type === 'answer' && (item.questionType === 'SINGLE_CHOICE' || item.questionType === 'MULTIPLE_CHOICE' || item.questionType === 'INDEFINITE_CHOICE') ? '' : /*#__PURE__*/_react.default.createElement("div", {
          className: 'title'
        }, item.require ? /*#__PURE__*/_react.default.createElement("span", {
          className: 'require'
        }, "*") : '', /*#__PURE__*/_react.default.createElement("span", null, item.title), item.type === 'stem' && copyQuestionMode ? /*#__PURE__*/_react.default.createElement("span", {
          className: "copyQuestion",
          onClick: function onClick() {
            return _this4.props.cancelCopy;
          }
        }, "\u53D6\u6D88", copyQuestionMode === 1 ? '复制' : '引用') : '', item.type === 'option' ? /*#__PURE__*/_react.default.createElement("span", {
          className: 'choiceTips'
        }, _client.questionTypeText[item['questionType']]) : '', item.questionType === 'JUDGEMENT' && item.type === 'answer' ? /*#__PURE__*/_react.default.createElement(_JudgementAnswer.default, {
          option: item.option,
          changeItem: function changeItem(item) {
            return _this4.changeItem(item);
          }
        }) : ''), _this4.RichTextRender(item, index, ei), item.type === 'stem' ? /*#__PURE__*/_react.default.createElement("div", {
          className: "addQuestionItem"
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: 'questionType'
        }, renderDOM && renderDOM)) : '');
      };

      var RichText = function RichText(isError) {
        return /*#__PURE__*/_react.default.createElement("div", {
          id: "RichText",
          className: "".concat(isError)
        }, questionStructure.map(function (item, index) {
          var result = /*#__PURE__*/_react.default.createElement("div", {
            key: index
          });

          if (item.type !== 'comprehensive') {
            result = topicContent(item, index);
          }

          return result;
        }), /*#__PURE__*/_react.default.createElement("div", {
          id: "showImgBox"
        }));
      };

      return /*#__PURE__*/_react.default.createElement("div", null, hasError ? RichText(true) : RichText(false));
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return {
        hasError: true
      };
    }
  }]);

  return EditItem;
}(_react.Component);

exports.default = EditItem;