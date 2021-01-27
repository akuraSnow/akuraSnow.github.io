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

// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { useSelected, useFocused, useSlate } from 'slate-react';
import { Editor, Transforms, Node } from 'slate';
import { iconObj, classNamesList } from './client';
import { Button, Button2, Icon } from './components';
import SubscriptButton from './iconCompents/subscript'; // @ts-ignore

import TextIndentBtn from './iconCompents/textIndent';
import WordSpacing from './iconCompents/WordSpacing';
import WordSpace from './iconCompents/WordSpace';
import SymbolIcon from './iconCompents/symbol';
import InsertFormula from './iconCompents/InsertFormula';
import FormulaEditor from './iconCompents/FormulaEditor';
import OrderSortButton from './iconCompents/OrderSort';
import MarkColorBtn from './iconCompents/MarkColorBtn';
import MarkFontBtn from './iconCompents/MarkFontBtn'; // @ts-ignore

import enlarge from './Icon/icon-enlarge.png'; // @ts-ignore

import narrow from './Icon/icon-narrow.png'; // @ts-ignore

import deletes from './Icon/icon-deletes.png';
import { cx, css } from 'emotion';
import _ from 'lodash';
export var Element = function Element(props) {
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

  var innerStyle = _.filter(blockStyleList, function (styleItem) {
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
      return /*#__PURE__*/React.createElement(MentionElement, props);

    case 'Right':
      el = /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'right'
        }
      }), children);
      break;

    case 'Center':
      el = /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'center'
        }
      }), children);
      break;

    case 'Left':
      el = /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'left'
        }
      }), children);
      break;

    case 'space':
      el = /*#__PURE__*/React.createElement("span", _extends({}, attributes, {
        style: {
          textAlign: 'left'
        }
      }), children);
      break;

    case 'Both':
      el = /*#__PURE__*/React.createElement("div", _extends({}, attributes, {
        style: {
          textAlign: 'justify'
        }
      }), children);
      break;

    default:
      el = /*#__PURE__*/React.createElement("span", attributes, children);
      break;
  }

  if (element['ListItem']) {
    return /*#__PURE__*/React.createElement("li", attributes, /*#__PURE__*/React.createElement("div", {
      style: Object.assign(Object.assign({}, obj2), {
        textAlign: element.type
      })
    }, children));
  } else if (element['NumberedList'] === 'None') {
    return /*#__PURE__*/React.createElement("ul", attributes, children);
  } else if (element['NumberedList']) {
    return /*#__PURE__*/React.createElement("ol", _extends({}, attributes, {
      type: element['NumberedList']
    }), children);
  }

  el = /*#__PURE__*/React.createElement("div", {
    style: _.cloneDeep(obj2)
  }, el);
  return el;
};

var InserImage = function InserImage(props) {
  console.log('value====>', props.value);
  var editor = useSlate();

  var _useState = useState(props.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // let value = props.value;


  useEffect(function () {
    setValue(props.value);
  }, [props.value]);
  return /*#__PURE__*/React.createElement("div", {
    className: "editingImg"
  },
  /*#__PURE__*/
  // @ts-ignore
  React.createElement(Button2, {
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var newValue = (value * 10 - 1) / 10;
      var showValue = newValue >= 0.1 ? newValue : 0.1;
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: narrow,
    alt: ""
  })), /*#__PURE__*/React.createElement(Button2 // width={100}
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
  }, /*#__PURE__*/React.createElement("div", {
    className: "Original buttonTitle"
  }, "1:1")), /*#__PURE__*/React.createElement(Button2, {
    active: isMarkActive(editor, 'widthMore'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      var newValue = (value * 10 + 1) / 10;
      var showValue = newValue <= 2 ? newValue : 2;
      toggleImage(editor, showValue);
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: enlarge,
    alt: ""
  })), /*#__PURE__*/React.createElement("span", {
    className: "Separate1"
  }), /*#__PURE__*/React.createElement(Button2, {
    active: isMarkActive(editor, 'width'),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      deletesMark(editor, 'width', 'd');
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: deletes,
    alt: ""
  })));
};

export var MentionElement = function MentionElement(props) {
  var attributes = props.attributes,
      children = props.children,
      element = props.element;
  var selected = useSelected();
  var focused = useFocused(); // console.error('selected===>', selected);
  // console.error('focused===>', focused);

  if (element.mediaType === 'IMAGE') {
    return /*#__PURE__*/React.createElement("span", _extends({}, attributes, {
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
    }), children, /*#__PURE__*/React.createElement("img", {
      className: "opacityImag",
      src: element.character,
      alt: "",
      style: element.width ? {
        width: element.width + 'px'
      } : {}
    }), selected && focused ? /*#__PURE__*/React.createElement(InserImage, {
      value: element.scale || 1
    }) : '');
  } else {
    return /*#__PURE__*/React.createElement("span", _extends({}, attributes, {
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
    }), children, /*#__PURE__*/React.createElement("span", {
      contentEditable: false,
      dangerouslySetInnerHTML: {
        __html: element.character
      }
    }));
  }
}; // 删除图片

var deletesMark = function deletesMark(editor, format, isADD) {
  var isActive = isMarkActive(editor, format);
  var a = Node.parent(editor, editor.selection.anchor.path);
  var b = JSON.parse(JSON.stringify(a));
  Transforms.removeNodes(editor, {
    match: function match(n) {
      return n.type === 'mention';
    }
  });
};

var toggleImage = function toggleImage(editor, value, isADD) {
  if (editor.selection) {
    var a = Node.parent(editor, editor.selection.anchor.path);
    var b = JSON.parse(JSON.stringify(a));
    var pictureUrl = a.character;
    var nImg = new Image();
    nImg.src = pictureUrl;

    nImg.onload = function () {
      var nWidth = nImg.width;
      Transforms.setNodes(editor, {
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

export var Leaf = function Leaf(props) {
  var attributes = props.attributes,
      children = props.children,
      leaf = props.leaf; // 加粗

  var _children = children,
      text = _children.text,
      parent = _children.parent;
  var classNames = classNamesList.filter(function (item) {
    return leaf[item];
  });
  var styleData = {};

  if (leaf.highlight) {
    styleData = {
      background: '#FF4E4EFF',
      color: '#FFFF00'
    };
    children = /*#__PURE__*/React.createElement("span", {
      style: styleData
    }, children);
  } // 波浪线颜色


  if (leaf.UnderlineWave && leaf.color) {
    children = /*#__PURE__*/React.createElement("span", {
      className: cx(classNames.join(' '), css(_templateObject(), svgGenerator(leaf.color)))
    }, children);
  } else {
    children = /*#__PURE__*/React.createElement("span", {
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
    children = /*#__PURE__*/React.createElement("span", {
      className: cx("EmphasisDot1", css(_templateObject2(), dotSvgGenerator(leaf.color)))
    }, children);
  } else if (leaf.EmphasisDot) {
    children = /*#__PURE__*/React.createElement("span", {
      className: "EmphasisDot1"
    }, children);
  }

  if (leaf.Strike) {
    children = /*#__PURE__*/React.createElement("span", {
      className: "Strike"
    }, children);
  } // 显示颜色


  if (leaf.color) {
    children = /*#__PURE__*/React.createElement("span", {
      style: {
        color: leaf.color
      }
    }, children);
  } // 显示字体


  if (leaf.Font) {
    children = /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: leaf.Font
      }
    }, children);
  } // 显示字号


  if (leaf.FontSize) {
    children = /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "".concat(leaf.FontSize / 2, "px")
      }
    }, children);
  }

  if (leaf.Wordspace) {
    children = /*#__PURE__*/React.createElement("span", {
      style: {
        letterSpacing: "".concat(leaf.Wordspace, "em")
      }
    }, children);
  } // console.log('leaf==>', leaf);
  // console.log('children==>', children);


  return /*#__PURE__*/React.createElement("span", attributes, children);
};

var toggleMark = function toggleMark(editor, format) {
  var isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

var toggleMarkVertAlign = function toggleMarkVertAlign(editor, format) {
  var isActive = isMarkActive(editor, format);
  Editor.removeMark(editor, 'VertAlignSubscript');
  Editor.removeMark(editor, 'VertAlignSuperscript');

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

var LIST_TYPES = ['NumberedList', 'BulletedList'];
var styleList = ['Left', 'Center', 'Right'];

var toggleBlock = function toggleBlock(editor, format, num) {
  var isActive = isBlockActive(editor, format); // 判断是否是居左居中居右的样式

  if (styleList.includes(format)) {
    Transforms.setNodes(editor, {
      type: format
    });
  }
};

var toggleSort = function toggleSort(editor, format, num) {
  var isActive = isSortActive(editor, format);
  var isList = LIST_TYPES.includes(format);
  Transforms.unwrapNodes(editor, {
    match: function match(n) {
      return n[format];
    },
    split: true
  });
  console.log(isActive);
  Transforms.setNodes(editor, {
    'ListItem': isActive ? false : isList ? true : format
  });

  if (!isActive && isList) {
    var _block;

    var block = (_block = {}, _defineProperty(_block, format, 'None'), _defineProperty(_block, "children", []), _block);
    Transforms.wrapNodes(editor, block);
  }
};

var isMarkActive = function isMarkActive(editor, format) {
  var marks = Editor.marks(editor);
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
  var marks = Editor.marks(editor);

  var a = _.filter(formatList, function (o) {
    return marks && marks[o];
  });

  return marks ? a && a.length > 0 : false;
};

var isBlockActive = function isBlockActive(editor, format) {
  var _Editor$nodes = Editor.nodes(editor, {
    match: function match(n) {
      return n.type === format || n[format];
    }
  }),
      _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
      match = _Editor$nodes2[0];

  return !!match;
}; // 判断是否是全部选择


export var isSortActive = function isSortActive(editor, format) {
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
  var _Editor$nodes3 = Editor.nodes(editor, {
    match: function match(n) {
      return n[format] === 'None';
    }
  }),
      _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
      match = _Editor$nodes4[0];

  return !!match;
}; // 获取选中的数据


var isBlockActiveNum = function isBlockActiveNum(editor, format, itemList) {
  var _Editor$nodes5 = Editor.nodes(editor, {
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

export var MarkIcon = function MarkIcon(props) {
  var format = props.format,
      title = props.title,
      icon = props.icon;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMark(editor, format);
    }
  }, props['icon'], /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};
export var MarkVertAlign = function MarkVertAlign(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    active: isMarkActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleMarkVertAlign(editor, format);
    }
  }, props['icon'], /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};
export var MarkSubscript = function MarkSubscript(props) {
  var format = props.format,
      title = props.title,
      icon = props.icon;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SubscriptButton, {
    active: isMarkList(editor, ['UnderlineSingle', 'UnderlineDouble', 'UnderlineDotted', 'UnderlineWave']),
    editor: editor,
    title: title
  }));
};
export var MarkNode = function MarkNode(props) {
  var format = props.format,
      icon = props.icon;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    active: isBlockActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, iconObj[props['icon']]));
};
export var MarkTextIndent = function MarkTextIndent(props) {
  var format = props.format,
      icon = props.icon,
      itemList = props.itemList,
      unit = props.unit,
      title = props.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement(TextIndentBtn, {
    active: isBlockActiveNum(editor, format, itemList),
    format: format,
    icon: icon,
    itemList: itemList,
    unit: unit,
    editor: editor,
    title: title
  });
};
export var MarkWordSpace = function MarkWordSpace(props) {
  var format = props.format,
      icon = props.icon,
      itemList = props.itemList,
      unit = props.unit,
      title = props.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement(WordSpace, {
    active: isBlockActiveNum(editor, format, itemList),
    format: format,
    icon: icon,
    itemList: itemList,
    unit: unit,
    editor: editor,
    title: title
  });
};
export var MarkWordSpacing = function MarkWordSpacing(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title,
      _geta = props.geta,
      id = props.id;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement(WordSpacing, {
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

var _Symbol = function _Symbol(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      id = props.id;
  var editor = useSlate(); // console.log(isFocuse);

  return /*#__PURE__*/React.createElement(SymbolIcon, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition
  });
};

export { _Symbol as Symbol };
export var MarkInsertFormula = function MarkInsertFormula(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      changeFocuse = props.changeFocuse;
  var editor = useSlate(); // console.log(editor);

  return /*#__PURE__*/React.createElement(InsertFormula, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition,
    changeFocuse: changeFocuse
  });
};
export var MarkFormulaEditor = function MarkFormulaEditor(props) {
  var isFocuse = props.isFocuse,
      setVisible = props.setVisible,
      postion = props.postion,
      title = props.title,
      modalPosition = props.modalPosition,
      changeFocuse = props.changeFocuse;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement(FormulaEditor, {
    editor: editor,
    title: title,
    isFocuse: isFocuse,
    setVisible: setVisible,
    postion: postion,
    modalPosition: modalPosition,
    changeFocuse: changeFocuse
  });
};
export var MarkAlignment = function MarkAlignment(props) {
  var format = props.format,
      icon = props.icon,
      title = props.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    active: isAlignmentActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleBlock(editor, format);
    }
  }, icon, /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(props.title && props.title.length * 18, "px")
    }
  }, props.title)));
}; // 设置无序排序

export var UnorderedSorting = function UnorderedSorting(_ref) {
  var format = _ref.format,
      icon = _ref.icon,
      title = _ref.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", {
    className: "LowerTriangle"
  }, /*#__PURE__*/React.createElement(Button, {
    className: "tabbarIcon",
    style: {
      borderRadius: '2px 0px 0px 2px'
    },
    active: isSortActive(editor, format),
    onMouseDown: function onMouseDown(event) {
      event.preventDefault();
      toggleSort(editor, format, 'null');
    }
  }, /*#__PURE__*/React.createElement(Icon, null, icon), /*#__PURE__*/React.createElement("span", {
    className: "title",
    style: {
      width: "".concat(title && title.length * 18, "px")
    }
  }, title)));
};
export var OrderSorting = function OrderSorting(props) {
  var format = props.format,
      title = props.title,
      sortFormat = props.sortFormat,
      setFormat = props.setFormat;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(OrderSortButton, {
    editor: editor,
    format: format,
    title: title,
    sortFormat: sortFormat,
    setFormat: setFormat
  }));
};
export var MarkColor = function MarkColor(props) {
  var format = props.format,
      title = props.title,
      changeColor = props.changeColor,
      color = props.color;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MarkColorBtn, {
    editor: editor,
    format: format,
    title: title,
    color: color,
    changeColor: changeColor
  }));
};
export var MarkFont = function MarkFont(props) {
  var format = props.format,
      fontList = props.fontList,
      fontObj = props.fontObj,
      width = props.width,
      defluteVal = props.defluteVal,
      title = props.title;
  var editor = useSlate();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MarkFontBtn, {
    editor: editor,
    format: format,
    fontList: fontList,
    fontObj: fontObj,
    width: width,
    defluteVal: defluteVal,
    title: title
  }));
};