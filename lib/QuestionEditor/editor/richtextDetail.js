"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkFont = exports.MarkColor = exports.OrderSorting = exports.UnorderedSorting = exports.MarkAlignment = exports.MarkFormulaEditor = exports.MarkInsertFormula = exports.Symbol = exports.MarkWordSpacing = exports.MarkWordSpace = exports.MarkTextIndent = exports.MarkNode = exports.MarkSubscript = exports.MarkVertAlign = exports.MarkIcon = exports.isSortActive = exports.Leaf = exports.MentionElement = exports.Element = void 0;

var _react = _interopRequireWildcard(require("react"));

var _slateReact = require("slate-react");

var _slate = require("slate");

var _client = require("./client");

var _components = require("./components");

var _subscript = _interopRequireDefault(require("./iconCompents/subscript"));

var _textIndent = _interopRequireDefault(require("./iconCompents/textIndent"));

var _WordSpacing = _interopRequireDefault(require("./iconCompents/WordSpacing"));

var _WordSpace = _interopRequireDefault(require("./iconCompents/WordSpace"));

var _symbol = _interopRequireDefault(require("./iconCompents/symbol"));

var _InsertFormula = _interopRequireDefault(require("./iconCompents/InsertFormula"));

var _FormulaEditor = _interopRequireDefault(require("./iconCompents/FormulaEditor"));

var _OrderSort = _interopRequireDefault(require("./iconCompents/OrderSort"));

var _MarkColorBtn = _interopRequireDefault(require("./iconCompents/MarkColorBtn"));

var _MarkFontBtn = _interopRequireDefault(require("./iconCompents/MarkFontBtn"));

var _iconEnlarge = _interopRequireDefault(require("./Icon/icon-enlarge.png"));

var _iconNarrow = _interopRequireDefault(require("./Icon/icon-narrow.png"));

var _iconDeletes = _interopRequireDefault(require("./Icon/icon-deletes.png"));

var _emotion = require("emotion");

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["background-image: url(", ");"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["background-image: url(", ")"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Element = function Element(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;
  var obj2 = {
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5',
    display: element.type === 'mention' ? 'inline-block' : 'block'
  }; // 默认1.5倍行距

  var el;
  var blockStyleList = [{
    Label: 'TextIndent',
    name: 'textIndent',
    content: "".concat(element.TextIndent, "em")
  }, {
    Label: 'LineSpace',
    name: 'lineHeight',
    content: "".concat(element.LineSpace * 1.5)
  }];

  var innerStyle = _lodash.default.filter(blockStyleList, function (styleItem) {
    return element[styleItem['Label']];
  });

  innerStyle.forEach(function (item) {
    if (element.type !== 'mention') {
      obj2[item.name] = item.content;
    } else {
      obj2['textIndent'] = '0px';
    }
  });

  switch (element.type) {
    case 'mention':
      return /*#__PURE__*/_react.default.createElement(MentionElement, props);

    case 'Right':
      el = /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'right'
        }
      }), children);
      break;

    case 'Center':
      el = /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'center'
        }
      }), children);
      break;

    case 'Left':
      el = /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'left'
        }
      }), children);
      break;

    case 'space':
      el = /*#__PURE__*/_react.default.createElement("span", _extends({}, attributes, {
        style: {
          textAlign: 'left'
        }
      }), children);
      break;

    case 'Both':
      el = /*#__PURE__*/_react.default.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'justify'
        }
      }), children);
      break;

    default:
      el = /*#__PURE__*/_react.default.createElement("span", attributes, children);
      break;
  }

  if (element['ListItem']) {
    return /*#__PURE__*/_react.default.createElement("li", attributes, /*#__PURE__*/_react.default.createElement("div", {
      style: Object.assign(Object.assign({}, obj2), {
        textAlign: element.type
      })
    }, children));
  } else if (element['NumberedList'] === 'None') {
    return /*#__PURE__*/_react.default.createElement("ul", attributes, children);
  } else if (element['NumberedList']) {
    return /*#__PURE__*/_react.default.createElement("ol", _extends({}, attributes, {
      type: element['NumberedList']
    }), children);
  }

  el = /*#__PURE__*/_react.default.createElement("div", {
    style: _lodash.default.cloneDeep(obj2)
  }, el);
  return el;
};

exports.Element = Element;

var InserImage = function InserImage(props) {
  console.log('value====>', props.value);
  var editor = (0, _slateReact.useSlate)();

  var _useState = (0, _react.useState)(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // let value = props.value;


  (0, _react.useEffect)(function () {
    setValue(props.value);
  }, [props.value]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "editingImg"
  },
  /*#__PURE__*/
  // @ts-ignore
  _react.default.createElement(_components.Button2, {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var newValue = (value * 10 - 1) / 10;
      var showValue = newValue >= 0.1 ? newValue : 0.1;
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconNarrow.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement(_components.Button2 // width={100}
  , {
    style: {
      width: '45x',
      margin: '0 1px'
    },
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleImage(editor, 1);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "Original buttonTitle"
  }, "1:1")), /*#__PURE__*/_react.default.createElement(_components.Button2, {
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var newValue = (value * 10 + 1) / 10;
      var showValue = newValue <= 2 ? newValue : 2;
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconEnlarge.default,
    alt: ""
  })), /*#__PURE__*/_react.default.createElement("span", {
    className: "Separate1"
  }), /*#__PURE__*/_react.default.createElement(_components.Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      deletesMark(editor, 'width', 'd');
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: _iconDeletes.default,
    alt: ""
  })));
};

var MentionElement = function MentionElement(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;
  var selected = (0, _slateReact.useSelected)();
  var focused = (0, _slateReact.useFocused)(); // console.error('selected===>', selected);
  // console.error('focused===>', focused);

  if (element.mediaType === 'IMAGE') {
    return /*#__PURE__*/_react.default.createElement("span", _extends({}, attributes, {
      contentEditable: false,
      className: selected && focused ? "dimback" : '',
      style: {
        // padding: '3px 3px 2px',
        margin: '0 1px',
        verticalAlign: 'baseline',
        display: 'inline-block',
        borderRadius: '4px',
        fontSize: '0.9em',
        textIndent: '0em',
        // border: '1px solid black',
        boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none'
      }
    }), children, /*#__PURE__*/_react.default.createElement("img", {
      className: "opacityImag",
      src: element.character,
      alt: "",
      style: element.width ? {
        width: element.width + 'px'
      } : {}
    }), selected && focused ? /*#__PURE__*/_react.default.createElement(InserImage, {
      value: element.scale || 1
    }) : '');
  } else {
    return /*#__PURE__*/_react.default.createElement("span", _extends({}, attributes, {
      contentEditable: false,
      style: {
        margin: '0 1px',
        verticalAlign: 'baseline',
        display: 'inline-block',
        borderRadius: '4px',
        fontSize: '0.9em',
        textIndent: '0em',
        boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none'
      }
    }), children, /*#__PURE__*/_react.default.createElement("span", {
      contentEditable: false,
      dangerouslySetInnerHTML: {
        __html: element.character
      }
    }));
  }
}; // 删除图片


exports.MentionElement = MentionElement;

var deletesMark = function deletesMark(editor, format, isADD) {
  var isActive = isMarkActive(editor, format);

  var a = _slate.Node.parent(editor, editor.selection.anchor.path);

  var b = JSON.parse(JSON.stringify(a));

  _slate.Transforms.removeNodes(editor, {
    match: function match(n) {
      return n.type === 'mention';
    }
  });
};

var toggleImage = function toggleImage(editor, value, isADD) {
  if (editor.selection) {
    var a = _slate.Node.parent(editor, editor.selection.anchor.path);

    var b = JSON.parse(JSON.stringify(a));
    var pictureUrl = a.character;
    var nImg = new Image();
    nImg.src = pictureUrl;

    nImg.onload = function () {
      var nWidth = nImg.width;

      _slate.Transforms.setNodes(editor, {
        'width': nWidth * value,
        scale: value
      }, {
        match: function match(n) {
          return n.type === 'mention';
        },
        split: true
      });
    };
  }
}; // 波浪线图片生成


var svgGenerator = function svgGenerator() {
  var color = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '#000000';
  var str = "<svg width=\"20\" height=\"5\" xmlns=\"http://www.w3.org/2000/svg\"><g><rect fill=\"none\" height=\"7\" width=\"22\" y=\"-1\" x=\"-1\"/></g><g><g fillRule=\"evenodd\" fill=\"none\"><g stroke=\"null\" fillRule=\"nonzero\" fill=\"#979797\"><path fill=\"".concat(color, "\" stroke=\"null\" d=\"m-0.238096,3.613095c0.836461,0 1.286668,0.150872 2.073605,0.599413l0.143688,0.082051c1.004851,0.57273 1.712047,0.800678 2.992583,0.800678c1.25625,0 1.860909,-0.21038 2.759285,-0.783392l0.041634,-0.02656c0.796739,-0.508044 1.279382,-0.672191 2.408958,-0.672191c1.120354,0 1.560544,0.154667 2.330839,0.665991l0.004108,0.002727c0.899552,0.597131 1.516811,0.813425 2.874929,0.813425c1.381444,0 1.927945,-0.232395 2.54929,-0.851071l0.002285,-0.002273c0.492482,-0.490372 0.816745,-0.628799 1.914034,-0.628799l0,-0.494048c-1.371522,0 -1.913007,0.23116 -2.533303,0.848799l-0.002285,0.002273c-0.493353,0.491237 -0.822193,0.631072 -1.930021,0.631072c-1.131154,0 -1.576159,-0.155936 -2.34865,-0.668718l-0.004116,-0.002732c-0.897282,-0.595619 -1.509398,-0.810693 -2.857111,-0.810693c-1.350571,0 -2.001583,0.221407 -2.924557,0.809952l-0.041709,0.0266c-0.77264,0.492817 -1.211736,0.645592 -2.243611,0.645592c-1.071501,0 -1.625281,-0.178499 -2.507737,-0.681465l-0.143681,-0.082046c-0.909176,-0.518216 -1.507225,-0.718632 -2.558459,-0.718632l0,0.494048z\"/></g></g></g></svg>");
  var base64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(str)));
  return base64;
}; // 着重号图片生成


var dotSvgGenerator = function dotSvgGenerator(color) {
  var str = "<?xml version=\"1.0\" standalone=\"no\"?><!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\"><svg class=\"icon\" width=\"16px\" height=\"12.00px\" viewBox=\"0 0 1365 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"".concat(color, "\" d=\"M682.666667 563.2m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z\"/></svg>");
  var base64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(str)));
  return base64;
};

var Leaf = function Leaf(props) {
  var attributes = props.attributes,
      children = props.children,
      leaf = props.leaf; // 加粗

  var _children = children,
      text = _children.text,
      parent = _children.parent;

  var classNames = _client.classNamesList.filter(function (item) {
    return leaf[item];
  });

  var styleData = {};

  if (leaf.highlight) {
    styleData = {
      background: '#FF4E4EFF',
      color: '#FFFF00'
    };
    children = /*#__PURE__*/_react.default.createElement("span", {
      style: styleData
    }, children);
  } // 波浪线颜色


  if (leaf.UnderlineWave && leaf.color) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _emotion.cx)(classNames.join(' '), (0, _emotion.css)(_templateObject(), svgGenerator(leaf.color)))
    }, children);
  } else {
    children = /*#__PURE__*/_react.default.createElement("span", {
      className: classNames.join(' ')
    }, children);
  } // // 着重字 跟字体颜色一致
  // // let rate = leaf.FontSize ? (28/leaf.FontSize) : 1; // !计算字体字号的大小 影响
  // if (leaf.EmphasisDot) {
  //     // if(leaf.FontSize >= 24){
  //     //     children = <span className={cx("EmphasisDot1",css`background-image: url(${dotSvgGenerator(leaf.color)});
  //     //     background-size: ${leaf.Wordspace ? Number(leaf.Wordspace)*rate+1 : 1}em ${rate}em;
  //     //     background-position-x:${leaf.Wordspace ? 1+(Number(leaf.Wordspace))*0.5*rate : 0}em`)}>{children}</span>;
  //     // }else{ // 小5特殊处理
  //     //     children = <span className={cx("EmphasisDot1",css`background-image: url(${dotSvgGenerator(leaf.color)});
  //     //     background-size: ${(leaf.Wordspace ? Number(leaf.Wordspace)*rate+1 : 1)*12}px ${rate*12}px;
  //     //     background-position-x:${(leaf.Wordspace ? 1+(Number(leaf.Wordspace))*0.5*rate : 0)*12}px`)}>{children}</span>;
  //     // }
  //     children = <span className="EmphasisDot1">{children}</span>
  // }
  // 着重字 跟字体颜色一致


  if (leaf.EmphasisDot && leaf.color) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _emotion.cx)("EmphasisDot1", (0, _emotion.css)(_templateObject2(), dotSvgGenerator(leaf.color)))
    }, children);
  } else if (leaf.EmphasisDot) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      className: "EmphasisDot1"
    }, children);
  }

  if (leaf.Strike) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      className: "Strike"
    }, children);
  } // 显示颜色


  if (leaf.color) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      style: {
        color: leaf.color
      }
    }, children);
  } // 显示字体


  if (leaf.Font) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      style: {
        fontFamily: leaf.Font
      }
    }, children);
  } // 显示字号


  if (leaf.FontSize) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      style: {
        fontSize: "".concat(leaf.FontSize / 2, "px")
      }
    }, children);
  }

  if (leaf.Wordspace) {
    children = /*#__PURE__*/_react.default.createElement("span", {
      style: {
        letterSpacing: "".concat(leaf.Wordspace, "em")
      }
    }, children);
  } // console.log('leaf==>', leaf);
  // console.log('children==>', children);


  return /*#__PURE__*/_react.default.createElement("span", attributes, children);
};

exports.Leaf = Leaf;

var toggleMark = function toggleMark(editor, format) {
  var isActive = isMarkActive(editor, format);

  if (isActive) {
    _slate.Editor.removeMark(editor, format);
  } else {
    _slate.Editor.addMark(editor, format, true);
  }
};

var toggleMarkVertAlign = function toggleMarkVertAlign(editor, format) {
  var isActive = isMarkActive(editor, format);

  _slate.Editor.removeMark(editor, 'VertAlignSubscript');

  _slate.Editor.removeMark(editor, 'VertAlignSuperscript');

  if (isActive) {
    _slate.Editor.removeMark(editor, format);
  } else {
    _slate.Editor.addMark(editor, format, true);
  }
};

var LIST_TYPES = ['NumberedList', 'BulletedList'];
var styleList = ['Left', 'Center', 'Right'];

var toggleBlock = function toggleBlock(editor, format, num) {
  var isActive = isBlockActive(editor, format); // 判断是否是居左居中居右的样式

  if (styleList.includes(format)) {
    _slate.Transforms.setNodes(editor, {
      type: format
    });
  }
};

var toggleSort = function toggleSort(editor, format, num) {
  var isActive = isSortActive(editor, format);
  var isList = LIST_TYPES.includes(format);

  _slate.Transforms.unwrapNodes(editor, {
    match: function match(n) {
      return n[format];
    },
    split: true
  });

  console.log(isActive);

  _slate.Transforms.setNodes(editor, {
    'ListItem': isActive ? false : isList ? true : format
  });

  if (!isActive && isList) {
    var _block;

    var block = (_block = {}, _defineProperty(_block, format, 'None'), _defineProperty(_block, "children", []), _block);

    _slate.Transforms.wrapNodes(editor, block);
  }
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = _slate.Editor.marks(editor);

  var selection = editor.selection;
  var velue = editor.children;

  if (selection && JSON.stringify(selection.anchor) === JSON.stringify(selection.focus)) {
    var path = selection.focus.path;
    var offset = selection.focus.offset;
    var aBefore = path[1] > 1 ? velue[path[0]]['children'][path[1] - 1] : {};
    var a = velue[path[0]]['children'][path[1]];

    if ((aBefore.type === 'mention' || aBefore.type === 'space' || a.type === 'mention') && offset === 0) {
      return false;
    }
  }

  return marks ? marks[format] === true : false;
}; // 判断是否包含该样式


var isMarkList = function isMarkList(editor, formatList) {
  var marks = _slate.Editor.marks(editor);

  var a = _lodash.default.filter(formatList, function (o) {
    return marks && marks[o];
  });

  return marks ? a && a.length > 0 : false;
};

var isBlockActive = function isBlockActive(editor, format) {
  var _Editor$nodes = _slate.Editor.nodes(editor, {
    match: function match(n) {
      return n.type === format || n[format];
    }
  }),
      _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  return !!match;
}; // 判断是否是全部选择


var isSortActive = function isSortActive(editor, format) {
  var selection = editor.selection,
      children = editor.children;
  var isMarks = false;

  if (selection) {
    var anchor = selection.anchor,
        focus = selection.focus;
    isMarks = getFilterChildren(children, [anchor.path, focus.path]);
  }

  return isMarks;
};

exports.isSortActive = isSortActive;

var getFilterChildren = function getFilterChildren(item, pathList) {
  var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var newItem = item.filter(function (e, i) {
    return i >= pathList[0][index] && i <= pathList[1][index];
  });
  return newItem.every(function (e) {
    return e['NumberedList'] === 'None';
  });
}; // 获取对齐选中状态


var isAlignmentActive = function isAlignmentActive(editor, format) {
  var selection = editor.selection,
      children = editor.children;
  var selectTionNode = '';

  if (selection) {
    var anchor = selection.anchor,
        focus = selection.focus;

    if (!children[anchor.path[0]]['NumberedList']) {
      selectTionNode = children[anchor.path[0]];
    } else {
      selectTionNode = children[anchor.path[0]].children[anchor.path[1]];
    }
  }

  return selectTionNode ? selectTionNode.type === format : false;
}; // 获取无序排序的选中


var isUnorderedSortActive = function isUnorderedSortActive(editor, format) {
  var _Editor$nodes3 = _slate.Editor.nodes(editor, {
    match: function match(n) {
      return n[format] === 'None';
    }
  }),
      _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
      match = _Editor$nodes4[0];

  return !!match;
}; // 获取选中的数据


var isBlockActiveNum = function isBlockActiveNum(editor, format, itemList) {
  var _Editor$nodes5 = _slate.Editor.nodes(editor, {
    match: function match(n) {
      return n.type === format || n[format];
    }
  }),
      _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
      match = _Editor$nodes6[0];

  if (!!match) {
    return match[0][format];
  } else {
    return itemList[0];
  }
};

var MarkIcon = function MarkIcon(props) {
  var format = props.format,
      title = props.title,
      icon = props.icon;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, props['icon'], /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};

exports.MarkIcon = MarkIcon;

var MarkVertAlign = function MarkVertAlign(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMarkVertAlign(editor, format);
    }
  }, props['icon'], /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};

exports.MarkVertAlign = MarkVertAlign;

var MarkSubscript = function MarkSubscript(props) {
  var format = props.format,
      title = props.title,
      icon = props.icon;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_subscript.default, {
    active: isMarkList(editor, ['UnderlineSingle', 'UnderlineDouble', 'UnderlineDotted', 'UnderlineWave']),
    editor: editor,
    title: title
  }));
};

exports.MarkSubscript = MarkSubscript;

var MarkNode = function MarkNode(props) {
  var format = props.format,
      icon = props.icon;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: isBlockActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, _client.iconObj[props['icon']]));
};

exports.MarkNode = MarkNode;

var MarkTextIndent = function MarkTextIndent(props) {
  var format = props.format,
      icon = props.icon,
      itemList = props.itemList,
      unit = props.unit,
      title = props.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement(_textIndent.default, {
    active: isBlockActiveNum(editor, format, itemList),
    format: format,
    icon: icon,
    itemList: itemList,
    unit: unit,
    editor: editor,
    title: title
  });
};

exports.MarkTextIndent = MarkTextIndent;

var MarkWordSpace = function MarkWordSpace(props) {
  var format = props.format,
      icon = props.icon,
      itemList = props.itemList,
      unit = props.unit,
      title = props.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement(_WordSpace.default, {
    active: isBlockActiveNum(editor, format, itemList),
    format: format,
    icon: icon,
    itemList: itemList,
    unit: unit,
    editor: editor,
    title: title
  });
};

exports.MarkWordSpace = MarkWordSpace;

var MarkWordSpacing = function MarkWordSpacing(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title,
      _geta = props.geta,
      id = props.id;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement(_WordSpacing.default, {
    active: isMarkActive(editor, format),
    format: format,
    icon: icon,
    editor: editor,
    title: title,
    id: id,
    geta: function geta() {
      return _geta();
    },
    changeVal: function changeVal(e) {}
  });
};

exports.MarkWordSpacing = MarkWordSpacing;

var _Symbol = function _Symbol(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      id = props.id;
  var editor = (0, _slateReact.useSlate)(); // console.log(isFocuse);

  return /*#__PURE__*/_react.default.createElement(_symbol.default, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition
  });
};

exports.Symbol = _Symbol;

var MarkInsertFormula = function MarkInsertFormula(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      changeFocuse = props.changeFocuse;
  var editor = (0, _slateReact.useSlate)(); // console.log(editor);

  return /*#__PURE__*/_react.default.createElement(_InsertFormula.default, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition,
    changeFocuse: changeFocuse
  });
};

exports.MarkInsertFormula = MarkInsertFormula;

var MarkFormulaEditor = function MarkFormulaEditor(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      changeFocuse = props.changeFocuse;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement(_FormulaEditor.default, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition,
    changeFocuse: changeFocuse
  });
};

exports.MarkFormulaEditor = MarkFormulaEditor;

var MarkAlignment = function MarkAlignment(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    active: isAlignmentActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, icon, /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)));
}; // 设置无序排序


exports.MarkAlignment = MarkAlignment;

var UnorderedSorting = function UnorderedSorting(_ref) {
  var format = _ref.format,
      icon = _ref.icon,
      title = _ref.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "LowerTriangle"
  }, /*#__PURE__*/_react.default.createElement(_components.Button, {
    className: "tabbarIcon",
    style: {
      borderRadius: '2px 0px 0px 2px'
    },
    active: isSortActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleSort(editor, format, 'null');
    }
  }, /*#__PURE__*/_react.default.createElement(_components.Icon, null, icon), /*#__PURE__*/_react.default.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};

exports.UnorderedSorting = UnorderedSorting;

var OrderSorting = function OrderSorting(props) {
  var format = props.format,
      title = props.title,
      sortFormat = props.sortFormat,
      setFormat = props.setFormat;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_OrderSort.default, {
    editor: editor,
    format: format,
    title: title,
    sortFormat: sortFormat,
    setFormat: setFormat
  }));
};

exports.OrderSorting = OrderSorting;

var MarkColor = function MarkColor(props) {
  var format = props.format,
      title = props.title,
      changeColor = props.changeColor,
      color = props.color;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MarkColorBtn.default, {
    editor: editor,
    format: format,
    title: title,
    color: color,
    changeColor: changeColor
  }));
};

exports.MarkColor = MarkColor;

var MarkFont = function MarkFont(props) {
  var format = props.format,
      fontList = props.fontList,
      fontObj = props.fontObj,
      width = props.width,
      defluteVal = props.defluteVal,
      title = props.title;
  var editor = (0, _slateReact.useSlate)();
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MarkFontBtn.default, {
    editor: editor,
    format: format,
    fontList: fontList,
    fontObj: fontObj,
    width: width,
    defluteVal: defluteVal,
    title: title
  }));
};

exports.MarkFont = MarkFont;