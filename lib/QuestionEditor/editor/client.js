"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getVideoUrl = getVideoUrl;
exports.getQuestion = getQuestion;
exports.getQuestionHtml = getQuestionHtml;
exports.getEmptyOption = getEmptyOption;
exports.symbolList = symbolList;
exports.questionObj = exports.fontObj = exports.fontList = exports.fontSizeObj = exports.fontSizeList = exports.colorList = exports.symbolObj = exports.ListWordSpace = exports.LineSpaceList = exports.TextIndentList = exports.showNode = exports.showStyle = exports.classNamesList = exports.iconObj = exports.VerificationKey = exports.getQuestionType = exports.questionType = exports.questionTypeText = exports.optionValue = exports.optionObject = exports.isChoice = exports.showMathJax1 = exports.showMathJax = exports.changeHtml = exports.changeJson = void 0;

var _MathConfig = require("../../showQuestion/MathConfig");

var _index = require("../../MessageTips/index");

var _toolbarIcon = require("./toolbarIcon");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _MathConfig.initMathjaxConfig)(); // import { Tips } from '../index';

var changeJson = function changeJson(json) {
  var initVal = [];
  var NumberedListObj = {};

  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      (function () {
        var el = json[key].fragments;
        var children = []; // 添加段落样式

        var stylesObj = {};
        var isVideoItem = false;
        el.forEach(function (element) {
          element.content = element.content ? element.content : '';

          if (element.content !== "\u200B") {
            var obj = {};
            var object = element.styles;
            obj.text = element.content;

            for (var _key in object) {
              if (object.hasOwnProperty(_key)) {
                var _el = object[_key];

                if (_el.indexOf('Color') !== -1) {
                  var color = _el.split('Color')[1];

                  obj['color'] = "#".concat(color);
                } else if (_el.indexOf('Wordspace') !== -1) {
                  var Wordspace = _el.split('#')[1];

                  obj['Wordspace'] = "".concat(Wordspace);
                } else if (_el.indexOf('FontSize') !== -1) {
                  var FontSize = _el.split('FontSize')[1];

                  obj['FontSize'] = "".concat(FontSize);
                } else if (_el.indexOf('Font') !== -1) {
                  var Font = _el.split('Font')[1];

                  obj['Font'] = "".concat(Font);
                } else {
                  obj[_el] = true;
                }
              }
            }

            if (element.mediaType === 'IMAGE' || element.mediaType === 'FORMULA') {
              obj = {
                type: 'mention',
                mediaType: element.mediaType,
                character: element.content,
                tag: String(Math.random()).replace('\.', ''),
                children: [{
                  text: 'IMAGE',
                  mark: []
                }]
              };
              var _object = element.styles; // 添加图片的宽度和缩放

              for (var _key2 in _object) {
                if (_object.hasOwnProperty(_key2)) {
                  var _el2 = _object[_key2];

                  if (_el2.indexOf('width') !== -1) {
                    var width = _el2.split('#')[1];

                    obj['width'] = width;
                  }

                  if (_el2.indexOf('scale') !== -1) {
                    var scale = _el2.split('#')[1];

                    obj['scale'] = scale;
                  }
                }
              }

              children.push({
                text: "\u200B",
                type: 'space',
                tag: String(Math.random()).replace('\.', '')
              });
              children.push(obj);
              children.push({
                text: '',
                type: 'space',
                tag: String(Math.random()).replace('\.', '')
              });
            } else if (element.mediaType !== 'AUDIO') {
              children.push(obj);
            } else {
              isVideoItem = true;
            }
          }
        });
        (json[key].styles || []).map(function (item) {
          var styleItem = item.split('#');
          stylesObj[styleItem[0]] = styleItem[1];
        });

        if (children.length) {
          // 判断是否是排序
          var hasNumberedList = (json[key].styles || []).filter(function (element) {
            return element.includes('NumberedList');
          });

          if (hasNumberedList.length === 0) {
            initVal.push(Object.assign({
              children: children,
              type: json[key].alignment,
              styles: json[key].styles || []
            }, stylesObj));
          } else {
            var type = hasNumberedList[0].split('#');
            delete stylesObj.NumberedList;
            var styles = (json[key].styles || []).filter(function (e) {
              return !e.includes('NumberedList');
            });

            if (NumberedListObj[hasNumberedList[0]] === undefined) {
              initVal.push({
                NumberedList: type[1],
                children: [Object.assign({
                  ListItem: true,
                  children: children,
                  type: json[key].alignment,
                  styles: styles
                }, stylesObj)]
              });
              NumberedListObj[hasNumberedList[0]] = initVal.length - 1;
            } else {
              initVal[NumberedListObj[hasNumberedList[0]]].children.push(Object.assign({
                children: children,
                ListItem: true,
                type: json[key].alignment,
                styles: styles
              }, stylesObj));
              NumberedListObj[hasNumberedList[0]] = initVal.length - 1;
            }
          }
        } else if (!isVideoItem) {
          initVal.push(Object.assign({
            children: [{
              text: ''
            }],
            type: json[key].alignment,
            styles: json[key].styles || []
          }, stylesObj));
        }
      })();
    }
  } // 当最后是图片或者公式的时候，增加空格


  var lastChildren = initVal.length !== 0 && initVal[initVal.length - 1].children;

  if (lastChildren && lastChildren.length > 0 && lastChildren[lastChildren.length - 1].type === 'space') {
    initVal[initVal.length - 1].children.push({
      text: ' ',
      isEnd: true,
      type: ''
    });
  }

  if (initVal.length === 0) {
    initVal = [{
      children: [{
        text: ''
      }],
      type: 'Left'
    }];
  }

  return initVal;
};

exports.changeJson = changeJson;

function getVideoUrl(item) {
  var urlObj = {
    content: ''
  };

  _lodash.default.map(item.stem, function (element) {
    _lodash.default.map(element.fragments, function (el) {
      if (el.mediaType === 'AUDIO') {
        urlObj.content = el.content;
      }
    });
  });

  if (item.questions && item.questions.length > 0) {
    var questions = {};

    _lodash.default.map(item.questions, function (el, index) {
      questions[index] = getVideoUrl(el);
    });

    urlObj.questions = questions;
  }

  return urlObj;
}

var classNameList = ['Bold', 'UnderlineWave', 'Italic', 'UnderlineDotted', 'UnderlineDouble', 'VertAlignSuperscript', 'VertAlignSubscript', 'UnderlineSingle', 'Strike', 'EmphasisDot'];
var blockStyleList = ['LineSpace', 'TextIndent'];

var changeHtml = function changeHtml(json) {
  var editorJson = [];

  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      var element = json[key].children; // console.log(element);
      // 如果有排序的数据

      if (!json[key].NumberedList) {
        editorJson = getfragments(json, key, editorJson);
      } else {
        /* eslint-disable */
        for (var i in json[key].children) {
          if (json[key].children.hasOwnProperty(i)) {
            var _element = json[key].children[key];
            editorJson = getfragments(json[key].children, i, editorJson, json[key].NumberedList, key);
          }
        }
      }
    }
  }

  return editorJson;
};

exports.changeHtml = changeHtml;

var getfragments = function getfragments(json, key, editorJson, NumberedList, num) {
  var element = json[key].children;
  var fragments = []; // if (!element) {
  //     return [];
  // }

  if (element) {
    var _loop = function _loop(index) {
      var obj = {};
      var el = element[index];
      var styles = classNameList.filter(function (classNameItem) {
        return el[classNameItem];
      });

      if (el.color) {
        var color = el.color.slice(1);
        styles.push("Color".concat(color));
      }

      if (el.Font) {
        var fontFamily = el.Font;
        styles.push("Font".concat(fontFamily));
      }

      if (el.FontSize) {
        var fontSize = el.FontSize;
        styles.push("FontSize".concat(fontSize));
      }

      if (el.Wordspace) {
        styles.push("Wordspace#".concat(el.Wordspace));
      }

      if (el.width) {
        styles.push("width#".concat(el.width));
      }

      if (el.scale) {
        styles.push("scale#".concat(el.scale));
      }

      if (el.mediaType !== 'FORMULA' && el.mediaType !== 'IMAGE') {
        obj = {
          content: el.text,
          mediaType: 'TEXT',
          styles: styles
        };
      } else if (el.mediaType === 'IMAGE' || el.mediaType === 'FORMULA') {
        obj = {
          content: el.character,
          mediaType: el.mediaType,
          styles: styles
        };
      }

      if (el.type === 'space' && el.text && el.text.replace(/(^\s*)|(\s*$)/g, '') !== '' || el.type !== 'space') {
        fragments = fragments.concat(_lodash.default.cloneDeep(obj));
      }
    };

    for (var index = 0; index < element.length; index++) {
      _loop(index);
    }

    if (fragments.length) {
      var newStyleList = blockStyleList.filter(function (blockItem) {
        return json[key][blockItem];
      });
      newStyleList = newStyleList.map(function (StyleItem) {
        return "".concat(StyleItem, "#").concat(json[key][StyleItem]);
      }); // 有排序进行处理

      if (NumberedList) {
        newStyleList.push("NumberedList#".concat(NumberedList, "#").concat(num));
      }

      editorJson.push({
        fragments: fragments,
        alignment: json[key].type,
        styles: newStyleList,
        indentation: 0
      });
    }
  }

  return editorJson;
};

var showMathJax = function showMathJax(hidden) {
  if (!hidden) {// Tips.open({
    //     message: '加载中...',
    //     type: 'spin',
    //     isShow: true
    // });
  } // @ts-ignore


  if (window === null || window === void 0 ? void 0 : window.MathJax) {
    if (!hidden) {
      _index.Tips.close();
    } // @ts-ignore


    window === null || window === void 0 ? void 0 : window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, document.getElementById('RichText')]);
  }
};

exports.showMathJax = showMathJax;

var showMathJax1 = function showMathJax1(cb) {
  // @ts-ignore
  if (window === null || window === void 0 ? void 0 : window.MathJax) {
    // @ts-ignore
    window === null || window === void 0 ? void 0 : window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, document.getElementById('root')], function () {
      cb && cb();
    });
  }
};

exports.showMathJax1 = showMathJax1;
var isChoice = ['SINGLE_CHOICE', 'MULTIPLE_CHOICE', 'INDEFINITE_CHOICE'];
exports.isChoice = isChoice;
var optionObject = [['√', '×'], ['T', 'F'], ['True', 'False'], ['正确', '错误'], ['A', 'B']];
exports.optionObject = optionObject;
var optionValue = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
exports.optionValue = optionValue;
var questionTypeText = {
  SINGLE_CHOICE: '',
  MULTIPLE_CHOICE: '（请设置多个答案）',
  INDEFINITE_CHOICE: '（请设置一个或多个答案）',
  COMPLETION: '',
  JUDGEMENT: '',
  FREE_RESPONSE: '',
  COMPREHENSIVE: ''
};
exports.questionTypeText = questionTypeText;
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

function getQuestion(question, questionType) {
  var questionArr = getStructure(question, questionType);

  if (questionType === 'COMPREHENSIVE') {
    var Comprehensive = {
      type: 'comprehensive',
      title: '综合题',
      content: []
    };
    Comprehensive.content = (question.questions || []).map(function (questionItem) {
      return getStructure(questionItem, questionItem.questionType, true);
    });
    questionArr.push(Comprehensive);
  }

  return questionArr;
}

function getStructure(question, questionType, isMinorTopic) {
  var questionArr = getQuestionType(questionType, isMinorTopic).map(function (typeItem) {
    typeItem.content = changeJson(question[typeItem['type']]);
    typeItem.questionType = question.questionType; // 当选择题的时候，添加内容

    if (typeItem['type'] === 'option' && isChoice.indexOf(questionType) > -1) {
      typeItem.content = typeItem.content.map(function (item) {
        item['children'][0].isAdd = true;
        item.isFilled = true;
        item.isAnswer = false;
        item.key = String(Math.random()).replace('\.', '');
        item.requireText = '内容不能为空';
        return item;
      });
    }

    if (typeItem['type'] === 'answer') {
      if (isChoice.indexOf(questionType) > -1) {
        var optionLength = question.option && question.option.length;
        typeItem.isChoice = true;
        typeItem.option = optionValue.slice(0, optionLength);
        typeItem.questionType = questionType;
        typeItem.content = typeItem.content.filter(function (item) {
          return item.children && item.children.length === 1 && optionValue.indexOf(item.children[0]['text'].replace(/\s/g, '')) > -1;
        });
      } else if (questionType === 'JUDGEMENT') {
        typeItem.isChoice = true;
        typeItem.questionType = questionType;
        typeItem.option = optionObject.filter(function (optionItem) {
          return question.answer && question.answer[0] && optionItem.indexOf(question.answer[0].fragments[0]['content']) > -1;
        })[0] || ['√', '×'];
        typeItem.content = typeItem.content.filter(function (item) {
          return item.children && item.children.length && typeItem.option.indexOf(item.children[0]['text']) > -1;
        });
      } else {
        typeItem.requireText = '内容不能为空';
      }
    }

    return typeItem;
  });
  return questionArr;
}

function getQuestionHtml(question, type) {
  var questionList = {}; // 验证是否有错

  var checkQuestion = checkArr(question, type);
  question.map(function (item) {
    if (item.type !== 'comprehensive') {
      questionList[item.type] = changeHtml(item.content);
    } else {
      questionList.questions = item['content'].map(function (el) {
        var obj = {};
        el.map(function (i) {
          return obj[i.type] = changeHtml(i.content);
        });
        return obj;
      });
    }
  });
  return Object.assign({
    questionList: questionList
  }, checkQuestion);
}

function getEmptyOption(index, questionStructure, isOnlyOption, ei) {
  var newQuestionStructure = JSON.parse(JSON.stringify(questionStructure)).map(function (questionItem) {
    if (questionItem.type === 'option') {
      if (questionItem.content.length === 2) {
        isOnlyOption = true;
      }

      questionItem.content.length = 0;
    }

    if (questionItem.type === 'comprehensive') {
      questionItem.content[ei].map(function (item) {
        if (item.type === 'option') {
          if (item.content.length === 2) {
            isOnlyOption = true;
          }

          item.content.length = 0;
        }
      });
    }

    return questionItem;
  });
  var newQuestionStructure1 = JSON.parse(JSON.stringify(questionStructure)).map(function (questionItem) {
    if (questionItem.type === 'option') {
      questionItem.content.splice(index, 1);
    }

    if (questionItem.type === 'answer') {
      questionItem.option.pop();
      questionItem.content = questionItem.content.filter(function (item) {
        return questionItem.option.indexOf(item.children[0]['text'].replace(/(^\s*)|(\s*$)/g, '')) > -1;
      });
    }

    if (questionItem.type === 'comprehensive') {
      questionItem.content[ei].map(function (item) {
        if (item.type === 'option') {
          item.content.splice(index, 1);
        }

        if (item.type === 'answer') {
          item.option.pop();
          item.content = item.content.filter(function (el) {
            return item.option.indexOf(el.children[0]['text'].replace(/(^\s*)|(\s*$)/g, '')) > -1;
          });
        }
      });
    }

    return questionItem;
  });
  return {
    newQuestionStructure: newQuestionStructure,
    newQuestionStructure1: newQuestionStructure1,
    isOnlyOption: isOnlyOption
  };
}

function checkArr(question, type) {
  var errList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  question.map(function (questionItem) {
    if (questionItem.type !== 'comprehensive') {
      var obj = checkQuestion(questionItem, type, errList);
      questionItem = obj.questionItem;
      errList = obj.errList;
    } else {
      questionItem['content'].map(function (el, index) {
        el.map(function (e) {
          var obj = checkQuestion(e, e.questionType, errList, index);
          e = obj.questionItem;
          errList = obj.errList;
        });
      });
    }
  });
  return {
    question: question,
    errList: errList
  };
}

function checkQuestion(questionItem, type, errList, i) {
  var text = '';
  questionItem.content = typeof questionItem.content === 'string' ? JSON.parse(questionItem.content) : questionItem.content;
  (questionItem.content || []).map(function (item) {
    if (item.NumberedList) {
      text += ' ';
    }

    item.children.map(function (e) {
      // let result = e.text ? e.text.replace(/(^\s*)|(\s*$)/g, '') : '';
      var result = e.text;

      if (e.character) {
        result += e.character ? e.character : '';
      }

      text += result;
    });
  });

  if (questionItem.require && (questionItem.content.length === 0 || text === '')) {
    questionItem.isFilled = false;
    errList.push({
      index: i,
      type: questionItem.type
    });
  } // 当非必填没有数据的时候，加一个'略'


  if (!questionItem.require && text === '') {
    questionItem.content = [{
      children: [{
        text: '略'
      }],
      type: 'Left'
    }];
  }

  if (questionItem.type === 'option') {
    questionItem['content'].map(function (item) {
      var text = '';

      if (item.NumberedList) {
        text += ' ';
      } // item.children.map((e:any) => {
      //     let result = e.text ? e.text.replace(/(^\s*)|(\s*$)/g, '') : '';
      //     if (e.character) {
      //         result += e.character ? e.character.replace(/(^\s*)|(\s*$)/g, '') : '';
      //     }
      //     text += result;
      // });


      item.children.map(function (e) {
        // let result = e.text ? e.text.replace(/(^\s*)|(\s*$)/g, '') : '';
        var result = e.text;

        if (e.character) {
          result += e.character ? e.character : '';
        }

        text += result;
      });

      if (text === '') {
        item.isFilled = false;
        errList.push({
          index: i,
          type: questionItem.type
        });

        if (!questionItem.require) {
          item = [{
            children: [{
              text: '略'
            }],
            type: 'Left'
          }];
        }
      }
    });
  }

  if (questionItem.type === 'answer' && type === 'MULTIPLE_CHOICE' && questionItem['content'].length <= 1) {
    questionItem.isFilled = false;
    errList.push({
      index: i,
      type: questionItem.type
    });
  } else if (questionItem.type === 'answer' && (type === 'SINGLE_CHOICE' || type === 'JUDGEMENT') && questionItem['content'].length !== 1) {
    questionItem.isFilled = false;
    errList.push({
      index: i,
      type: questionItem.type
    });
  }

  return {
    questionItem: questionItem,
    errList: errList
  };
}

var b = [{
  children: [{
    text: "<math display='block'> <mrow>  <msub>   <mi>S</mi>   <mrow>    <mo>&#x25B3;</mo><mi>O</mi><mi>B</mi><mi>C</mi></mrow>  </msub>  <mo>=</mo><mfrac>   <mn>1</mn>   <mn>2</mn>  </mfrac>  <mi>B</mi><mi>C</mi><mo>&#x22C5;</mo><mi>r</mi></mrow></math>",
    FORMULA: true
  }, {
    text: 'https://www.mathjax.org/badge/sponsors/CUP'
  }, {
    text: 'https://www.mathjax.org/badge/sponsors/CUP.jpg',
    image: true
  }]
}, {
  type: 'paragraph',
  children: [{
    text: 'This is editable '
  }, {
    text: 'rich',
    bold: true
  }, {
    text: ' text, '
  }, {
    text: 'much',
    italic: true
  }, {
    text: ' better than a '
  }, {
    text: '<textarea>',
    code: true
  }, {
    text: '!'
  }]
}, {
  type: 'right',
  children: [{
    text: 'Since it'
  }, {
    text: 'bold',
    bold: true
  }, {
    text: ', or add a semantically rendered block quote in the middle of the page, like this:'
  }]
}, {
  type: 'block-quote',
  children: [{
    text: 'A wise quote.'
  }]
}, {
  type: 'center',
  children: [{
    text: 'Try it out for yourself!'
  }]
}];

var getQuestionType = function getQuestionType(questionType, isMinorTopic) {
  var questionDemo = [{
    type: 'stem',
    title: !isMinorTopic ? '题干' : '小题题干',
    require: true,
    isFilled: true,
    requireText: '内容不能为空',
    isFistRich: !isMinorTopic ? true : false,
    content: [] // 富文本内容

  }, {
    type: 'option',
    title: !isMinorTopic ? '选项' : '小题选项',
    require: true,
    isFilled: true,
    content: []
  }, {
    type: 'answer',
    title: !isMinorTopic ? '答案' : '小题答案',
    require: true,
    isFilled: true,
    requireText: '正确答案没有选填',
    option: [],
    content: []
  }, {
    type: 'explanation',
    title: !isMinorTopic ? '解析' : '小题解析',
    content: []
  }];

  if (isChoice.indexOf(questionType) === -1) {
    questionDemo.splice(1, 1);
  }

  if (questionType === 'COMPREHENSIVE') {
    questionDemo = questionDemo.slice(0, 1);
  }

  return questionDemo;
};

exports.getQuestionType = getQuestionType;
var VerificationKey = [9, 13, 16, 17, 18, 32, 37, 38, 39, 40, 93]; // 不被验证的按键；

exports.VerificationKey = VerificationKey;
var iconObj = {
  bold: _toolbarIcon.bold,
  centerAlignment: _toolbarIcon.centerAlignment,
  cleanUp: _toolbarIcon.cleanUp,
  disorder: _toolbarIcon.disorder,
  formatMatch: _toolbarIcon.formatMatch,
  Italic: _toolbarIcon.Italic,
  leftAlignment: _toolbarIcon.leftAlignment,
  order: _toolbarIcon.order,
  picture: _toolbarIcon.picture,
  pinyin: _toolbarIcon.pinyin,
  point: _toolbarIcon.point,
  rightAlignment: _toolbarIcon.rightAlignment,
  strikeout: _toolbarIcon.strikeout,
  subscript: _toolbarIcon.subscript,
  superscript: _toolbarIcon.superscript,
  symbol: _toolbarIcon.symbol,
  textIndent: _toolbarIcon.textIndent,
  triangle: _toolbarIcon.triangle,
  underline: _toolbarIcon.underline,
  video: _toolbarIcon.video,
  wordspace: _toolbarIcon.wordspace,
  lineSpace: _toolbarIcon.lineSpace,
  lowerTriangle: _toolbarIcon.lowerTriangle // 下三角

};
exports.iconObj = iconObj;
var classNamesList = ['Bold', 'UnderlineWave', 'Italic', 'UnderlineDotted', 'UnderlineDouble', 'VertAlignSuperscript', 'VertAlignSubscript', 'UnderlineSingle', 'Strike'];
exports.classNamesList = classNamesList;
var showStyle = [// { name: 'bold', sign: 'Bold' },
// { name: 'Italic', sign: 'Italic' },
{
  name: 'underline',
  sign: 'UnderlineSingle',
  SubscriptButton: true
}];
exports.showStyle = showStyle;
var showNode = [// { name: 'leftAlignment', sign: 'Left' },
  // { name: 'centerAlignment', sign: 'Center' },
  // { name: 'rightAlignment', sign: 'Right' },
  // { name: 'textIndent', sign: 'TextIndent', togetherLowerTriangle: true },
];
exports.showNode = showNode;
var TextIndentList = [0, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exports.TextIndentList = TextIndentList;
var LineSpaceList = ['1.0', 1.15, 1.5, '2.0', 2.25, '3.0'];
exports.LineSpaceList = LineSpaceList;
var ListWordSpace = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
exports.ListWordSpace = ListWordSpace;
var iconLst = {
  SpecialSymbols: '△ ▽ ○ ◇ □ ☆ ▷ ◁ ♤ ♡ ♢ ♧ ▲ ▼ ● ◆ ■ ★ ▶ ◀ ♠ ♥ ♦ ♣ ♀ ☺ ☑ √ ☒ × ∷ ※ ↖ ↑ ↗ ← → ↙ ↓ ↘ ↕ ↔',
  Punctuation: '， 。 ？ ！ ： ； · … ~ & @ # , . ? ! : ; 、 …… ～ ＆ ＠ ＃ “ ” ‘ ’ 〝 〞 " \' ＂ ＇ ´ ＇ ( ) 【 】 《 》 ＜ ＞ ﹝ ﹞ < > ( ) [ ] « » ‹ › 〔 〕 〈 〉 { } ［ ］ 「 」 ｛ ｝ 〖 〗 『 』 ︵ ︷ ︹ ︿ ︽ ﹁ ﹃ ︻ ︗ / | \\ ︶ ︸ ︺ ﹀ ︾ ﹂ ﹄ ︼ ︘ ／ ｜ ＼ _ ＿ ﹏ ﹍ ﹎ ` ¦ ¡ ^ ­­\¨ ˊ ¯ ￣ ﹋ ﹉ ﹊ ˋ ︴ ˇ',
  DigitSerialNumber: '① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩ ⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳ ⑴ ⑵ ⑶ ⑷ ⑸ ⑹ ⑺ ⑻ ⑼ ⑽ ⑾ ⑿ ⒀ ⒁ ⒂ ⒃ ⒄ ⒅ ⒆ ⒇ ⒈ ⒉ ⒊ ⒋ ⒌ ⒍ ⒎ ⒏ ⒐ ⒑ ⒒ ⒓ ⒔ ⒕ ⒖ ⒗ ⒘ ⒙ ⒚ ⒛ Ⅰ Ⅱ Ⅲ Ⅳ Ⅴ Ⅵ Ⅶ Ⅷ Ⅸ Ⅹ Ⅺ Ⅻ ⅰ ⅱ ⅲ ⅳ ⅴ ⅵ ⅶ ⅷ ⅸ ⅹ ❶ ❷ ❸ ❹ ❺ ❻ ❼ ❽ ❾ ❿ ㈠ ㈡ ㈢ ㈣ ㈤ ㈥ ㈦ ㈧ ㈨ ㈩',
  NumberNnit: '﹢ ﹣ · / = ﹤ ﹥ ≦ ≧ ≮ ≯ ≡ ＋ － × ÷ ＝ ＜ ＞ ≤ ≥ ≈ ≒ ≠ ﹢ ﹣ ± ∶ ∵ ∴ ∷ ㏒ ㏑ ∑ ∏ ∅ ∝ ∽ ∈ ∩ ∧ ⊙ ⌒ ∥ ∟ ∣ ∂ ∆ ∞ ≌ ∉ ∪ ∨ ⊕ ⊿ ⊥ ∠ ∫ ∬ ∭ % ‰ ％ º ¹ ² ³ ⁿ ℅ ∮ ∯ ∰ ₁ ₂ ₃ ½ ⅓ ⅔ ¼ ¾ ° ℃ ℉ 〒 ㎎ ㎏ μm ㎜ ㎝ ㎞ ′ ¥ \$ € ฿ ￡ ㎡ m³ ㏄ ml mol ㏕ ″ ￥ £ ￠ ₠',
  GreeceLatin: 'Α Β Γ Δ Ε Ζ Η Θ Ι Κ Λ Μ Ν Ξ Ο Π Ρ Σ Τ Υ Φ Χ Ψ Ω α β γ δ ε ζ η θ ι κ λ μ ν ξ ο π ρ σ τ υ φ χ ψ ω À Á Â Ã Ä Å Æ Ç È É Ê Ë Ì Í Î Ï Ð Ñ Ò Ó Ô Õ Ö Ø Ù Ú Û Ü Ý Þ Š Ÿ Œ à á â ã ä å æ ç è é ê ë ì í î ï ð ñ ò ó õ ô ö ø ù ú û ü ý þ š ÿ œ',
  PinyinBopomofo: 'ā á ǎ à ē é ě è ū ú ǔ ù ō ó ǒ ò ī í ǐ ì ǖ ǘ ǚ ǜ ê ń  ň ü  ㄚ ㄛ ㄜ ㄧ ㄨ ㄩ ㄝ ㄞ ㄟ ㄠ ㄡ ㄢ ㄣ ㄤ ㄥ ㄦ ㄅ ㄆ ㄇ ㄈ ㄉ ㄊ ㄋ ㄌ ㄍ ㄎ ㄏ ㄐ ㄑ ㄒ ㄓ ㄔ ㄕ ㄖ ㄗ ㄘ ㄙ',
  ChineseCharacters: '零 壹 贰 叁 肆 伍 陆 柒 捌 玖 拾 佰 仟 万 亿 兆 吉 太 拍 艾 分 厘 毫 微 玊 嘂 槑 朤 囍 嬲 嫐 靐 龘 鑫 淼 焱 嘦 巭 勥 氼 嫑 炛 恏 兲 奣 烎 忈 龑 一 丨 丿 丶 ㇏ 亅 乚 乛 ㇀ 乀 ㄋ 〇 𠃊 𠃎 𠃍 匚 凵 冂 丅 丄 𠄌 𠃋 𡿨 𠃌 卍 曱 〡 〢 〣 〤 〥 〦 〧 〨 〩 十 卐 甴 弍 弎 弐 卄 巜 〆 〃 々 の 囧 丶 冫 氵 灬 阝 卩 刂 忄 讠 扌 亻 彳 厃 ⺁ 𠘨 ⺆ ⺄ 广 疒 饣 钅 礻 衤 辶 牜 釒 飠 ⺪ ⻊ 糹 ⺝ 丩 丬 犭 纟 廴 攵 夊 皿 臼 虍 勹 尢 廾 歺 夬 氺 丂 爫 癶 耂 ⺻ ⺮ ⺳ ⺶ ⺷ ⺈ 龵 彐 ⺋ 罒 覀 ⻗ 亠 宀 冖 艹 ⺌ 丷 ⺧ 亇 彡',
  EnglishPhonogram: 'ɑː ɔ: ɜː i: u: ʌ ɒ ə ɪ ʊ e æ eɪ aɪ ɔɪ ɪə eə ʊə əʊ aʊ p t k f θ s b d g v ð z ʃ h ts tʃ j tr ʒ r dz dʒ dr w m n ŋ l',
  Other: '/ ∧ { $ # ¥ ♂ ♀'
};
var symbolObj = [{
  label: '特殊符号',
  type: 'SpecialSymbols',
  content: []
}, {
  label: '标点符号',
  type: 'Punctuation',
  content: []
}, {
  label: '数字序号',
  type: 'DigitSerialNumber',
  content: []
}, {
  label: '数字/单位',
  type: 'NumberNnit',
  content: []
}, {
  label: '希腊/拉丁',
  type: 'GreeceLatin',
  content: []
}, {
  label: '拼音/注音',
  type: 'PinyinBopomofo',
  content: []
}, {
  label: '中文字符',
  type: 'ChineseCharacters',
  content: []
}, {
  label: '英文音标',
  type: 'EnglishPhonogram',
  content: []
}, {
  label: '其他',
  type: 'Other',
  content: []
}];
exports.symbolObj = symbolObj;
var specialIcon = {
  '': 'https://test-1254455861.piccd.myqcloud.com/data/calculate_features/20200416/360c8e3b7c255a45303300db63aacb5a.png?imageView2/3/h/16',
  '': 'https://test-1254455861.piccd.myqcloud.com/data/calculate_features/20200416/f022230b0096a406297ef86fac3eb9ad.png?imageView2/3/h/16',
  'ㄧ': 'https://test-1254455861.piccd.myqcloud.com/data/calculate_features/20200415/53333b8d9a262d2852e2d96c5eb0ce4a.png?imageView2/3/h/16',
  '龵': 'https://test-1254455861.piccd.myqcloud.com/data/calculate_features/20200416/c2d91f7d49c400dcb0cf8d237fe21d9c.png?imageView2/3/w/15'
};

function symbolList() {
  var obj = _lodash.default.map(symbolObj, function (item) {
    // let contentItem = Array.from(iconLst[item.type]);
    var contentItem = iconLst[item.type].split(' ');
    item.content = _lodash.default.map(contentItem, function (item) {
      var str0 = '① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩';
      var str = '⑪ ⑫ ⑬ ⑭ ⑮ ⑯ ⑰ ⑱ ⑲ ⑳';
      var str2 = 'ㄧ龵';
      var str3 = 'mol'; // if (str0.indexOf(item) > -1) {
      //     return {
      //         text: item,
      //         fontSize: '16'
      //     };
      // }

      if (str.indexOf(item) > -1) {
        return {
          text: item,
          fontSize: '17'
        };
      }

      if (str3.indexOf(item) > -1) {
        return {
          text: item,
          fontSize: '10'
        };
      }

      if (str2.indexOf(item) > -1) {
        return {
          mediaType: 'IMAGE',
          character: specialIcon[item],
          children: [{
            text: '',
            mark: []
          }],
          type: 'mention'
        };
      }

      return {
        text: item,
        type: 'string'
      };
    });
    return item;
  });

  return obj;
}

var colorList = ['000000', '525252', '969696', 'd9d9d9', 'EDEDED', 'b71c1c', 'd32f2f', 'f44336', 'e57373', 'ffcdd2', '880e4f', 'c21856', 'e91e63', 'f06292', 'f8ddb0', '4a148c', '7b1fa2', '9c27b0', 'ba68c8', 'e1bee7', '311b92', '512da8', '673ab7', '9575cd', 'd1c4e9', '1a237e', '303f9f', '3f51b5', '7986cb', 'c5cae9', '0d47a1', '1976d2', '2196f3', '64b5f6', 'bbdefb', '015796', '0288d1', '03a9f4', '4fc3f7', 'b3e5fc', '006064', '0097a7', '00bcd4', '4dd0e1', 'b2ebf2', '004d40', '00796b', '009688', '4db6ac', 'b2dfdb', '194D33', '388e3c', '4caf50', '81c784', 'c8e6c9', '33691e', '689f38', '8bc34a', 'aed581', 'dcedc8', '827717', 'afb42b', 'cddc39', 'dce775', 'f0f4c3', 'f57f17', 'fbc02d', 'ffeb3b', 'fff176', 'fff9c4', 'ff6f00', 'ffa000', 'ffc107', 'ffd54f', 'ffecb3', 'e65100', 'f57c00', 'ff9800', 'ffb74d', 'ffe0b2', 'bf360c', 'e64a19', 'ff5722', 'ff8a65', 'ffccbc', '3e2723', '5d4037', '795548', 'a1887f', 'd7ccc8', '263238', '455a64', '607d8b', '90a4ae', 'cfd8dc'];
exports.colorList = colorList;
var fontSizeList = [{
  content: '五号',
  value: '21'
}, {
  content: '小四',
  value: '24'
}, {
  content: '四号',
  value: '28'
}, {
  content: '小三',
  value: '30'
}, {
  content: '三号',
  value: '32'
}, {
  content: '小二',
  value: '36'
}, {
  content: '二号',
  value: '44'
}, {
  content: '小一',
  value: '48'
}, {
  content: '一号',
  value: '52'
}, {
  content: '小初',
  value: '72'
}, {
  content: '初号',
  value: '84'
}];
exports.fontSizeList = fontSizeList;
var fontSizeObj = {
  '21': '五号',
  '24': '小四',
  '28': '四号',
  '30': '小三',
  '32': '三号',
  '36': '小二',
  '44': '二号',
  '48': '小一',
  '52': '一号',
  '72': '小初',
  '84': '初号'
};
exports.fontSizeObj = fontSizeObj;
var fontList = [{
  content: '宋体',
  value: '宋体'
}, {
  content: '楷体',
  value: '楷体'
}, {
  content: 'Times New Roman',
  value: 'Times New Roman'
}];
exports.fontList = fontList;
var fontObj = {
  '宋体': '宋体',
  '楷体': '楷体',
  'Times New Roman': 'Times New Roman'
};
exports.fontObj = fontObj;

var questionObj = function questionObj() {
  var data = {
    question: {
      questionType: '',
      stem: [{
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: []
        }]
      }],
      answer: [{
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: []
        }]
      }],
      explanation: [{
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: []
        }]
      }],
      option: [{
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: ['isAdd']
        }]
      }, {
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: ['isAdd']
        }]
      }, {
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: ['isAdd']
        }]
      }, {
        fragments: [{
          content: '',
          mediaType: 'TEXT',
          styles: ['isAdd']
        }]
      }]
    }
  };
  return _lodash.default.cloneDeep(data);
};

exports.questionObj = questionObj;