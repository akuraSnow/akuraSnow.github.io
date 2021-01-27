"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MathConfig = require("./MathConfig");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(0, _MathConfig.initMathjaxConfig)(); // import { Tips } from './../MessageTips/index/index';

var blockStyleList = ['LineSpace', 'TextIndent'];
var blockStyleList1 = [{
  Label: 'TextIndent',
  name: 'text-indent'
}, {
  Label: 'LineSpace',
  name: 'line-height'
}];

var formatQuestion = /*#__PURE__*/function () {
  function formatQuestion() {
    _classCallCheck(this, formatQuestion);

    this.content = {};
    this.wrapperId = null;
  }

  _createClass(formatQuestion, [{
    key: "init",
    value: function init(content) {
      this.wrapperId = "qs_".concat(Date.now());
      this.content = Object.assign({}, content);
      var inner = [this.formatStem(content)].join('');
      var formatInner = inner.replace(/\\\'/g, "'"); // !三方试题图片地址问题

      var html = "<div  id=\"".concat(this.wrapperId, "\" class=\"qestion-item\" style=\"").concat(content ? content.alignment : '', "\">").concat(formatInner, "</div>"); // setTimeout(() => {
      //     const wrapperEl = document.querySelector(`#${this.wrapperId}`);
      //     window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, wrapperEl]);
      // }, 0);

      return html;
    }
  }, {
    key: "getColor",
    value: function getColor(styles) {
      var result = '';
      styles.map(function (style) {
        if (style === null || style === void 0 ? void 0 : style.includes('Color')) {
          result += "color: #".concat(style.split('Color')[1], ";");
        }

        if (style === null || style === void 0 ? void 0 : style.includes('Wordspace')) {
          result += "letter-spacing: ".concat(style.split('#')[1], "em;");
        }

        if ((style === null || style === void 0 ? void 0 : style.includes('Font')) && !(style === null || style === void 0 ? void 0 : style.includes('FontSize'))) {
          result += "font-family: ".concat(style.split('Font')[1], ";");
        }

        if (style === null || style === void 0 ? void 0 : style.includes('FontSize')) {
          result += "font-size: ".concat(style.split('FontSize')[1] / 2, "px;");
        }
      });
      return result;
    }
  }, {
    key: "getWordspace",
    value: function getWordspace(styles) {
      var wordSpace = '';
      styles.map(function (style) {
        if (style === null || style === void 0 ? void 0 : style.includes('Wordspace')) {
          wordSpace = style.split('#')[1] + 'em';
        }
      });
      return wordSpace ? 'letter-spacing: ' + wordSpace : '';
    }
  }, {
    key: "formatStem",
    value: function formatStem(e) {
      var that = this; // 判断是否是排序字段

      var stem = this.getSortingStructure(e);
      var stemContent = ''; // console.error(stem);

      _lodash.default.map(stem, function (stemItem, key) {
        if (!stemItem['NumberedList']) {
          stemContent += that.getString(stemItem, key);
        } else {
          if (stemItem['NumberedList'] === 'None') {
            stemContent += '<ul>';

            _lodash.default.map(stemItem.children, function (stemItem, key) {
              stemContent += '<li>';
              stemContent += that.getString(stemItem, key);
              stemContent += '</li>';
            });

            stemContent += '</ul>';
          } else {
            stemContent += "<ol type=\"".concat(stemItem['NumberedList'], "\">");

            _lodash.default.map(stemItem.children, function (stemItem, key) {
              stemContent += '<li>';
              stemContent += that.getString(stemItem, key);
              stemContent += '</li>';
            });

            stemContent += '</ol>';
          }
        }
      });

      return stemContent;
    }
  }, {
    key: "getString",
    value: function getString(stemItem, key) {
      var content = this.MathData(stemItem).filter(function (v) {
        return !!v;
      }).join('');
      var result = '';
      var styleObj = {
        LineSpace: '1.5'
      };
      var obj2 = {
        'line-height': '1.5'
      };
      var obj = (stemItem.styles || []).map(function (item) {
        var num = blockStyleList.findIndex(function (styleItem) {
          return item === null || item === void 0 ? void 0 : item.includes(styleItem);
        });

        if (num > -1) {
          return _defineProperty({}, blockStyleList[num], item.split('#')[1]);
        }
      });
      obj.map(function (item) {
        // Object.assign({ ...styleObj }, item);
        styleObj = Object.assign(Object.assign({}, styleObj), item);
      });

      var innerStyle = _lodash.default.filter(blockStyleList1, function (item) {
        return styleObj[item.Label];
      });

      innerStyle.forEach(function (item) {
        obj2[item.name] = "".concat(styleObj[item.Label]);
      });

      for (var i in obj2) {
        result += "".concat(i, ": ").concat(obj2[i]).concat(i !== 'line-height' ? 'em' : '', "; ");
      }

      return "<div class=\"stem-content\" style=\"text-align:".concat(stemItem.alignment, ";").concat(result, "\">\n        ").concat(content, "\n        </div>");
    }
  }, {
    key: "getSortingStructure",
    value: function getSortingStructure(stem) {
      var obj = [];
      var NumberedListObj = {};

      for (var key in stem) {
        if (stem.hasOwnProperty(key)) {
          var element = stem[key];
          var hasNumberedList = (element.styles || []).filter(function (element) {
            return element === null || element === void 0 ? void 0 : element.includes('NumberedList');
          });

          if (hasNumberedList.length === 0) {
            obj.push(element);
          } else {
            var type = hasNumberedList[0].split('#');

            if (NumberedListObj[hasNumberedList[0]] === undefined) {
              obj.push({
                NumberedList: type[1],
                children: [element]
              });
              NumberedListObj[hasNumberedList[0]] = obj.length - 1;
            } else {
              obj[NumberedListObj[hasNumberedList[0]]].children.push(element);
              NumberedListObj[hasNumberedList[0]] = obj.length - 1;
            }
          }
        }
      }

      return obj;
    }
  }, {
    key: "isEmphasis",
    value: function isEmphasis(stylesArr) {
      if (stylesArr !== null && stylesArr.length > 0) {
        return !!stylesArr.find(function (item) {
          return item === 'EmphasisDot';
        });
      }

      return false;
    }
  }, {
    key: "getcontent",
    value: function getcontent() {
      var curNode = document.elementFromPoint(event.x, event.y);
      alert(curNode.parentElement.parentElement.firstChild.innerText);
    }
  }, {
    key: "MathData",
    value: function MathData(item) {
      var _this = this;

      return (item.fragments || []).map(function (citem) {
        var _citem$mediaType = citem.mediaType,
            mediaType = _citem$mediaType === void 0 ? '' : _citem$mediaType,
            _citem$content = citem.content,
            content = _citem$content === void 0 ? [] : _citem$content,
            _citem$styles = citem.styles,
            styles = _citem$styles === void 0 ? [] : _citem$styles;
        var newcontent = content;

        if (content && !(content === null || content === void 0 ? void 0 : content.includes('<math'))) {
          newcontent = content && content.replace(/</g, '<span><</span>'); // newcontent = content && newcontent.replace(/\$/g, '<span>$</span>');
          // newcontent = newcontent.replace(/\s/g, '&nbsp;&nbsp;');
        } // 处理图片显示


        if (mediaType === 'IMAGE') {
          var result = '';
          (styles || []).map(function (style) {
            if (style === null || style === void 0 ? void 0 : style.includes('width')) {
              result += "width: ".concat(style.split('#')[1], "px;");
            }
          });

          if (newcontent.toString().startsWith('data:image/png')) {
            return "<img src=\"".concat(newcontent, "\" crossorigin=\"anonymous\" style=\"max-width: 100%; ").concat(result, "\">");
          } else {
            return "<img src=\"".concat(newcontent, "?date=").concat(Date.now(), "\" crossorigin=\"anonymous\" style=\"max-width: 100%; ").concat(result, "\">");
          }
        } else if (mediaType === 'AUDIO') {
          return "<span style=\"margin-top: 10px; display: flex; align-items: center;color: #FE8D29\">\n          <audio key=\"".concat(Date.now(), "\" width=\"320\" height=\"54\"  controls controlsList=\"nodownload\">\n              <source src=\"").concat(newcontent, "?date=").concat(Date.now(), "\" />\n          </audio>\n          <a \n            calss=\"ausioBtn\" \n            attr-url=\"").concat(newcontent, "\"\n            style=\"color: #FE8D29; margin-left: 8px\"\n          >\u4E0B\u8F7D</a>\n        </span>");
        } else if (mediaType === 'VIDEO') {
          return "<video width=\"320\" height=\"54\" style=\"margin-top: 10px\" controls controlsList=\"nodownload\">\n            <source src=".concat(newcontent, "  />\n        </video>");
        } // 处理下波浪线


        if (!_this.isEmphasis(styles)) {
          // 处理删除线不能与下划线共存的问题
          if (styles && (styles === null || styles === void 0 ? void 0 : styles.includes('Strike'))) {
            newcontent = "<span class=\"Strike\" style=\"".concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) ? 'word-break: break-all;white-space: pre-wrap;' : '', "\">").concat(newcontent, "</span>");
          }

          return !!content ? "<span class=\"".concat((styles || []).join(' '), "\" style=\"").concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) && _this.getColor(styles || []), " ").concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) ? 'word-break: break-all;white-space: pre-wrap;' : '', "\">").concat(newcontent, "</span>") : '';
        } else {
          var _result = ''; // 处理删除线不能与下划线共存的问题

          if (styles && (styles === null || styles === void 0 ? void 0 : styles.includes('Strike'))) {
            _result += "<span class=\"Strike\" style=\"".concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) ? 'word-break: break-all;white-space: pre-wrap;' : '', "\">");
          }

          var newstyles = styles.filter(function (e) {
            return e !== 'EmphasisDot';
          });
          _result += "<span class=\"".concat((newstyles || []).join(' '), "\" style=\"").concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) && _this.getColor(styles || [])).concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) ? 'word-break: break-all;white-space: pre-wrap;' : '', "; text-indent: 0em\">");
          _result += newcontent.split('').map(function (font) {
            return "<span class=\"".concat(font.replace(/\s+/g, '') !== '' ? 'EmphasisDot' : '', " style=\"").concat(!(content === null || content === void 0 ? void 0 : content.includes('<math')) ? 'word-break: break-all;white-space: pre-wrap;' : '', "\">").concat(font, "</span>");
          }).join('');
          _result += "</span>";

          if (styles && (styles === null || styles === void 0 ? void 0 : styles.includes('Strike'))) {
            _result += "</span>";
          }

          return _result;
        }
      });
    }
  }], [{
    key: "start",
    value: function start(wrapperEl) {
      if (window.MathJax) {
        window.MathJax.Hub.Queue(['Typeset', MathJax.Hub, wrapperEl]);
      }
    }
  }]);

  return formatQuestion;
}();

exports.default = formatQuestion;