"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/spin/style");

var _spin = _interopRequireDefault(require("antd/es/spin"));

var _react = _interopRequireWildcard(require("react"));

var _components = require("../components");

var _index = _interopRequireDefault(require("../../../DragModel/index"));

var _slate = require("slate");

var _index2 = require("./../../../components/index");

require("./iconCompents.css");

var _api = require("../../../public/api");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}; // @ts-nocheck


var InsertFormula = function InsertFormula(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      visible = _useState2[0],
      setVisible = _useState2[1];

  var _useState3 = (0, _react.useState)(props.editor),
      _useState4 = _slicedToArray(_useState3, 2),
      editor = _useState4[0],
      setEditor = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      selection = _useState6[0],
      setSelection = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      previewImage = _useState8[0],
      setPreviewImage = _useState8[1];

  var _useState9 = (0, _react.useState)(null),
      _useState10 = _slicedToArray(_useState9, 2),
      identifyResult = _useState10[0],
      setIdentifyResult = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var parseImgRef = (0, _react.useRef)();

  function focusHandler(_ref) {
    var target = _ref.target;
    var className = target.getAttribute('class');

    if (className === 'parse-input') {
      target.focus();
    }
  }

  (0, _react.useEffect)(function () {
    document.addEventListener('click', focusHandler);
    return function cleanup() {
      document.removeEventListener('click', focusHandler);
    };
  }, []);
  (0, _react.useEffect)(function () {
    if (props.editor.selection) {
      setSelection(props.editor.selection);
    }
  }, [props.editor.selection]);
  (0, _react.useEffect)(function () {
    if (visible) {
      parseImgRef.current.addEventListener('paste', function (e) {
        if (e.clipboardData) {
          if (previewImage) {
            setPreviewImage(null);
            setIdentifyResult(null);
          }

          var items = e.clipboardData.items;

          if (items) {
            var item = items[0];

            if (item.kind === 'file' && item.type.indexOf('image') !== -1) {
              setLoading(true);
              var blob = item.getAsFile();
              var fileReader = new FileReader();

              fileReader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;

                image.onload = function () {
                  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                    var imageWidth, imageHeight, _yield$identifyFormul, _yield$identifyFormul2, confidence, html, data, resultsMML, resultsLatex, latexRes, convertResultEl;

                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            imageWidth = image.width;
                            imageHeight = image.height;
                            _context.prev = 2;
                            _context.next = 5;
                            return (0, _api.identifyFormulaFromImage)({
                              image: blob
                            });

                          case 5:
                            _yield$identifyFormul = _context.sent;
                            _yield$identifyFormul2 = _yield$identifyFormul.data;
                            confidence = _yield$identifyFormul2.confidence;
                            html = _yield$identifyFormul2.html;
                            data = _yield$identifyFormul2.data;

                            if (confidence) {
                              resultsMML = data.filter(function (d) {
                                return d.type === 'mathml';
                              });
                              resultsLatex = data.filter(function (d) {
                                return d.type === 'latex';
                              }).map(function (latex) {
                                return latex.value;
                              });
                              latexRes = "\\begin{aligned}&\\begin{array}{l}".concat(resultsLatex.join('\\\\'), "\\end{array}\\end{aligned}");
                              convertResultEl = document.createElement('span');
                              convertResultEl.innerText = latexRes;
                              convertResultEl.style.display = 'none';
                              convertResultEl.setAttribute('id', 'convertResultEl');
                              document.body.appendChild(convertResultEl);
                              MathJax.Hub.Typeset(document.getElementById('convertResultEl'), function () {
                                var mmlResult = document.querySelector('#convertResultEl .MathJax_Display .MathJax').getAttribute('data-mathml');
                                setIdentifyResult([{
                                  value: mmlResult
                                }]);
                                document.body.removeChild(document.getElementById('convertResultEl'));
                              });
                              resultsMML.forEach(function (result, index) {
                                var getSVGWidthRegExp = /width="(\d*\S*)ex"/g;
                                var getSVGHeightRegExp = /height="(\d*\S*)ex"/g;
                                getSVGWidthRegExp.lastIndex = index;
                                getSVGWidthRegExp.lastIndex = index;
                                var svgWidth = getSVGWidthRegExp.exec(html)[1];
                                var svgHeight = getSVGHeightRegExp.exec(html)[1];
                                var ratio = imageWidth / imageHeight;

                                if (imageWidth > imageHeight) {
                                  html = html.replace(svgWidth + 'ex', '800px');
                                  html = html.replace(svgHeight + 'ex', 800 / ratio / resultsMML.length * 0.7 + 'px');
                                } else {
                                  html = html.replace(svgWidth + 'ex', 340 * ratio / resultsMML.length + 'px');
                                  html = html.replace(svgHeight + 'ex', '340px');
                                }
                              });
                              setPreviewImage(html);
                            } else {
                              _index2.Tips.open({
                                message: "\u8BF7\u4E0A\u4F20\u516C\u5F0F\u56FE\u7247",
                                type: 'fail',
                                time: 1000
                              });
                            }

                            _context.next = 16;
                            break;

                          case 13:
                            _context.prev = 13;
                            _context.t0 = _context["catch"](2);

                            _index2.Tips.open({
                              message: "\u7F51\u7EDC\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5",
                              type: 'fail',
                              time: 1000
                            });

                          case 16:
                            _context.prev = 16;
                            setLoading(false);
                            return _context.finish(16);

                          case 19:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee, null, [[2, 13, 16, 19]]);
                  }));
                };
              };

              fileReader.readAsDataURL(blob);
            } else {
              _index2.Tips.open({
                message: "\u8BF7\u5728\u6B64\u5904\u7C98\u8D34\u56FE\u7247",
                type: 'fail',
                time: 1000
              });
            }
          }
        }
      });
    } else {
      setPreviewImage(null);
      setIdentifyResult(null);
    }
  }, [visible]);

  function _onOk() {
    props.editor.selection = selection;

    _slate.Transforms.setSelection(props.editor, selection);

    identifyResult.forEach(function (formula) {
      _slate.Transforms.insertNodes(props.editor, {
        type: 'mention',
        mediaType: 'FORMULA',
        character: formula.value,
        tag: String(Math.random()).replace('\.', ''),
        children: [{
          text: ' ',
          mark: []
        }]
      });
    });
    setVisible(false);
  }

  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: props.active,
    style: {
      width: '25px',
      textAlign: 'center',
      position: 'relative'
    },
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      setVisible(true);
    }
  }, props.icon, /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title), /*#__PURE__*/_react.default.createElement("div", {
    className: "tabbarIcon1",
    style: {
      display: visible ? 'block' : 'none'
    }
  }, visible ? /*#__PURE__*/_react.default.createElement(_index.default, {
    style: {
      width: '1000px',
      height: '500px'
    },
    title: "\u4ECE\u56FE\u7247\u63D2\u5165\u516C\u5F0F",
    onCancle: function onCancle() {
      setVisible(false);
    },
    onOk: function onOk() {
      return _onOk();
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "parse-body"
  }, /*#__PURE__*/_react.default.createElement(_spin.default, {
    spinning: loading,
    tip: "\u6B63\u5728\u8F6C\u6362\u4E2D..."
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    ref: parseImgRef,
    rows: "10",
    autoFocus: true,
    className: 'parse-input'
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "parse-div",
    style: {
      overflow: 'hidden'
    }
  }, !previewImage ? /*#__PURE__*/_react.default.createElement("span", null, "\u8BF7\u5C06\u56FE\u7247\u7C98\u8D34\u5230\u6B64\u5904") : /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      position: 'absolute',
      left: 20,
      top: 40,
      width: '100%',
      marginBottom: 20,
      fontSize: 18
    }
  }, "\u8BC6\u522B\u7ED3\u679C"), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      paddingTop: 32
    },
    dangerouslySetInnerHTML: {
      __html: previewImage
    }
  })))))) : '')));
};

var _default = InsertFormula;
exports.default = _default;