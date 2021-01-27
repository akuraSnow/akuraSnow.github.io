// @ts-nocheck
import React, {useCallback, useMemo, useState, useEffect} from 'react';
import {

  useSelected,
  useFocused,
  useSlate,
} from 'slate-react';
import {Editor, Transforms, Node, createEditor} from 'slate';
import {
  iconObj,
  // LIST_TYPES,
  showStyle,
  showNode,
  classNamesList,
  fontSizeList,
} from './client';
import {Button, Button2, Icon} from './components';
import SubscriptButton from './iconCompents/subscript';
// @ts-ignore
import TextIndentBtn from './iconCompents/textIndent';
import WordSpacing from './iconCompents/WordSpacing';
import WordSpace from './iconCompents/WordSpace';
import SymbolIcon from './iconCompents/symbol';
import InsertFormula from './iconCompents/InsertFormula';
import FormulaEditor from './iconCompents/FormulaEditor';
import OrderSortButton from './iconCompents/OrderSort';
import MarkColorBtn from './iconCompents/MarkColorBtn';
import MarkFontBtn from './iconCompents/MarkFontBtn';
// @ts-ignore
import enlarge from './Icon/icon-enlarge.png';
// @ts-ignore
import narrow from './Icon/icon-narrow.png';
// @ts-ignore
import deletes from './Icon/icon-deletes.png';
import {cx, css} from 'emotion';


import _ from 'lodash';
// @ts-ignore
import {formulaEditor} from "@/components/Editltem1/toolbarIcon";


export const Element = (props: any) => {

  let {attributes, children, element} = props;

  let obj2: any = {
    wordBreak: 'break-all',
    whiteSpace: 'pre-wrap',
    lineHeight: '1.5',
    display: element.type === 'mention' ? 'inline-block' : 'block'
  }; // 默认1.5倍行距
  let el;

  let blockStyleList = [
    {
      Label: 'TextIndent',
      name: 'textIndent',
      content: `${element.TextIndent}em`
    },
    {
      Label: 'LineSpace',
      name: 'lineHeight',
      content: `${element.LineSpace * 1.5}`
    }
  ];

  let innerStyle = _.filter(blockStyleList, (styleItem) => {
    return element[styleItem['Label']];
  });


  innerStyle.forEach((item: any) => {
    if (element.type !== 'mention') {
      obj2[item.name] = item.content;
    } else {
      obj2['textIndent'] = '0px';
    }
  });

  switch (element.type) {
    case 'mention':
      return <MentionElement {...props} />;
    case 'Right':
      el = <div {...attributes} style={{textAlign: 'right'}}>{children}</div>;
      break;
    case 'Center':
      el = <div {...attributes} style={{textAlign: 'center'}}>{children}</div>;
      break;
    case 'Left':
      el = <div {...attributes} style={{textAlign: 'left'}}>{children}</div>;
      break;
    case 'space':
      el = <span {...attributes} style={{textAlign: 'left'}}>{children}</span>;
      break;
    case 'Both':
      el = <div {...attributes} style={{textAlign: 'justify'}}>{children}</div>;
      break;
    default:
      el = <span {...attributes}>{children}</span>;
      break;
  }

  if (element['ListItem']) {
    return <li {...attributes}>
      <div style={{...obj2, textAlign: element.type}}>{children}</div>
    </li>;
  } else if (element['NumberedList'] === 'None') {
    return <ul {...attributes}>{children}</ul>;

  } else if (element['NumberedList']) {
    return <ol {...attributes} type={element['NumberedList']}>{children}</ol>;
  }

  el = <div style={_.cloneDeep(obj2)}>{el}</div>;

  return el;
};

const InserImage = (props: any) => {

  console.log('value====>', props.value);
  const editor = useSlate();
  const [value, setValue] = useState(props.value);
  // let value = props.value;

  useEffect(() => {

    setValue(props.value);

  }, [props.value])

  return (<div
    className="editingImg"
  >
    {
      // @ts-ignore
      <Button2
        onMouseDown={(event: any) => {
          event.preventDefault();
          let newValue = (value * 10 - 1) / 10;
          let showValue = newValue >= 0.1 ? newValue : 0.1;
          toggleImage(editor, showValue);
        }}
      >
        <img src={narrow} alt=""/>
      </Button2>
    }


    <Button2
      // width={100}
      style={{
        width: '45x',
        margin: '0 1px'
      }}
      active={isMarkActive(editor, 'widthMore')}
      onMouseDown={(event: any) => {
        event.preventDefault();

        toggleImage(editor, 1);
      }}
    >

      <div className="Original buttonTitle">
        1:1
      </div>
    </Button2>

    <Button2
      active={isMarkActive(editor, 'widthMore')}
      onMouseDown={event => {
        event.preventDefault();

        let newValue = (value * 10 + 1) / 10;
        let showValue = newValue <= 2 ? newValue : 2;

        toggleImage(editor, showValue);
      }}
    >
      <img src={enlarge} alt=""/>
    </Button2>
    <span className="Separate1"></span>
    <Button2
      active={isMarkActive(editor, 'width')}
      onMouseDown={(event: any) => {
        event.preventDefault();
        deletesMark(editor, 'width', 'd');
      }}
    >
      <img src={deletes} alt=""/>
    </Button2>
  </div>);
};


export const MentionElement = (props: any) => {

  const {attributes, children, element} = props;
  const selected = useSelected();
  const focused = useFocused();

  // console.error('selected===>', selected);
  // console.error('focused===>', focused);


  if (element.mediaType === 'IMAGE') {
    return (
      <span
        {...attributes}
        contentEditable={false}
        className={selected && focused ? "dimback" : ''}
        style={{
          // padding: '3px 3px 2px',
          margin: '0 1px',
          verticalAlign: 'baseline',
          display: 'inline-block',
          borderRadius: '4px',
          fontSize: '0.9em',
          textIndent: '0em',
          // border: '1px solid black',
          boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
          // background: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
        }}
      >
                {children}
        <img className="opacityImag" src={element.character} alt=""
          style={element.width ? {width: element.width + 'px'} : {}}/>
        {
          selected && focused ? <InserImage
            value={element.scale || 1}
          /> : ''
        }
            </span>
    );
  } else {
    return (
      <span
        {...attributes}
        contentEditable={false}
        style={{

          margin: '0 1px',
          verticalAlign: 'baseline',
          display: 'inline-block',
          borderRadius: '4px',
          fontSize: '0.9em',
          textIndent: '0em',
          boxShadow: selected && focused ? '0 0 0 2px #B4D5FF' : 'none',
        }}
      >
                {children}
        <span contentEditable={false} dangerouslySetInnerHTML={{__html: element.character}}></span>
            </span>
    );
  }


};

// 删除图片
const deletesMark = (editor: any, format: any, isADD?: any) => {
  const isActive = isMarkActive(editor, format);

  let a = Node.parent(editor, editor.selection.anchor.path);
  let b = JSON.parse(JSON.stringify(a));

  Transforms.removeNodes(editor, {
    match: (n) => n.type === 'mention'
  });

};

const toggleImage = (editor: any, value: any, isADD?: any) => {

  if (editor.selection) {
    let a = Node.parent(editor, editor.selection.anchor.path);
    let b = JSON.parse(JSON.stringify(a));
    let pictureUrl = a.character;
    let nImg: any = new Image();
    nImg.src = pictureUrl;

    nImg.onload = function () {
      let nWidth = nImg.width;

      Transforms.setNodes(
        editor,
        {'width': nWidth * value, scale: value},
        {match: (n) => n.type === 'mention', split: true}
      );

    };
  }

};
// 波浪线图片生成
const svgGenerator = (color: string = '#000000') => {
  const str = `<svg width="20" height="5" xmlns="http://www.w3.org/2000/svg"><g><rect fill="none" height="7" width="22" y="-1" x="-1"/></g><g><g fillRule="evenodd" fill="none"><g stroke="null" fillRule="nonzero" fill="#979797"><path fill="${color}" stroke="null" d="m-0.238096,3.613095c0.836461,0 1.286668,0.150872 2.073605,0.599413l0.143688,0.082051c1.004851,0.57273 1.712047,0.800678 2.992583,0.800678c1.25625,0 1.860909,-0.21038 2.759285,-0.783392l0.041634,-0.02656c0.796739,-0.508044 1.279382,-0.672191 2.408958,-0.672191c1.120354,0 1.560544,0.154667 2.330839,0.665991l0.004108,0.002727c0.899552,0.597131 1.516811,0.813425 2.874929,0.813425c1.381444,0 1.927945,-0.232395 2.54929,-0.851071l0.002285,-0.002273c0.492482,-0.490372 0.816745,-0.628799 1.914034,-0.628799l0,-0.494048c-1.371522,0 -1.913007,0.23116 -2.533303,0.848799l-0.002285,0.002273c-0.493353,0.491237 -0.822193,0.631072 -1.930021,0.631072c-1.131154,0 -1.576159,-0.155936 -2.34865,-0.668718l-0.004116,-0.002732c-0.897282,-0.595619 -1.509398,-0.810693 -2.857111,-0.810693c-1.350571,0 -2.001583,0.221407 -2.924557,0.809952l-0.041709,0.0266c-0.77264,0.492817 -1.211736,0.645592 -2.243611,0.645592c-1.071501,0 -1.625281,-0.178499 -2.507737,-0.681465l-0.143681,-0.082046c-0.909176,-0.518216 -1.507225,-0.718632 -2.558459,-0.718632l0,0.494048z"/></g></g></g></svg>`;
  const base64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(str)));
  return base64;
}
// 着重号图片生成
const dotSvgGenerator = (color: string) => {
  const str = `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg class="icon" width="16px" height="12.00px" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="${color}" d="M682.666667 563.2m-85.333334 0a85.333333 85.333333 0 1 0 170.666667 0 85.333333 85.333333 0 1 0-170.666667 0Z"/></svg>`;
  const base64 = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(str)));
  return base64;
}


export const Leaf = (props: any) => {

  let {attributes, children, leaf} = props;
  // 加粗
  const {text, parent} = children;
  let classNames = classNamesList.filter((item) => {
    return leaf[item];
  });

  let styleData: any = {};

  if (leaf.highlight) {
    styleData = {
      background: `${'#FF4E4EFF'}`,
      color: `${'#FFFF00'}`
    }

    children = <span style={styleData}>{children}</span>;
  }
  // 波浪线颜色
  if (leaf.UnderlineWave && leaf.color) {
    children = <span
      className={cx(classNames.join(' '), css`background-image: url(${svgGenerator(leaf.color)})`)}
    >
            {children}
        </span>;
  } else {
    children = <span
      className={classNames.join(' ')}
    >
            {children}
        </span>;
  }
  // // 着重字 跟字体颜色一致
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
    children = <span
      className={cx("EmphasisDot1", css`background-image: url(${dotSvgGenerator(leaf.color)});`)}>{children}</span>;
  } else if (leaf.EmphasisDot) {
    children = <span className="EmphasisDot1">{children}</span>;
  }

  if (leaf.Strike) {
    children = <span className="Strike">{children}</span>;
  }

  // 显示颜色
  if (leaf.color) {
    children = <span style={{color: leaf.color}}>{children}</span>;
  }

  // 显示字体
  if (leaf.Font) {
    children = <span style={{fontFamily: leaf.Font}}>{children}</span>;
  }

  // 显示字号
  if (leaf.FontSize) {
    children = <span style={{fontSize: `${leaf.FontSize / 2}px`}}>{children}</span>;
  }

  if (leaf.Wordspace) {
    children = <span style={{letterSpacing: `${leaf.Wordspace}em`}}>{children}</span>;
  }

  // console.log('leaf==>', leaf);
  // console.log('children==>', children);


  return <span
    {...attributes}
    // style={styleData}
  >{children}</span>;
};


const toggleMark = (editor: any, format: any) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const toggleMarkVertAlign = (editor, format) => {
  const isActive = isMarkActive(editor, format);

  Editor.removeMark(editor, 'VertAlignSubscript');
  Editor.removeMark(editor, 'VertAlignSuperscript');

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

const LIST_TYPES = ['NumberedList', 'BulletedList'];
const styleList = ['Left', 'Center', 'Right'];

const toggleBlock = (editor, format, num) => {
  const isActive = isBlockActive(editor, format);

  // 判断是否是居左居中居右的样式
  if (styleList.includes(format)) {
    Transforms.setNodes(editor, {
      type: format,
    });
  }
};

const toggleSort = (editor, format, num) => { // tslint:disable-line

  const isActive = isSortActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: n => n[format],
    split: true,
  });

  console.log(isActive);

  Transforms.setNodes(editor, {
    'ListItem': isActive ? false : isList ? true : format,
  });

  if (!isActive && isList) {
    const block = {[format]: 'None', children: []};
    Transforms.wrapNodes(editor, block);
  }
};


const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor);
  let selection = editor.selection;
  let velue = editor.children;

  if (selection && JSON.stringify(selection.anchor) === JSON.stringify(selection.focus)) {
    let path = selection.focus.path;
    let offset = selection.focus.offset;

    let aBefore = path[1] > 1 ? velue[path[0]]['children'][path[1] - 1] : {};
    let a = velue[path[0]]['children'][path[1]];

    if ((aBefore.type === 'mention' || aBefore.type === 'space' || a.type === 'mention') && offset === 0) {
      return false;
    }
  }


  return marks ? marks[format] === true : false;
};

// 判断是否包含该样式
const isMarkList = (editor, formatList) => {
  const marks = Editor.marks(editor);
  let a = _.filter(formatList, (o) => {
    return marks && marks[o];
  });

  return marks ? a && a.length > 0 : false;
};

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => {
      return n.type === format || n[format];
    },
  });

  return !!match;
};

// 判断是否是全部选择
export const isSortActive = (editor, format) => {


  let {selection, children} = editor;
  let isMarks = false;
  if (selection) {
    let {anchor, focus} = selection;
    isMarks = getFilterChildren(children, [anchor.path, focus.path]);
  }

  return isMarks;

};

const getFilterChildren = (item, pathList, index = 0) => {

  let newItem = item.filter((e, i) => {

    return i >= pathList[0][index] && i <= pathList[1][index];
  });

  return newItem.every((e) => e['NumberedList'] === 'None');
};


// 获取对齐选中状态
const isAlignmentActive = (editor, format) => {

  let {selection, children} = editor;
  let selectTionNode = '';

  if (selection) {
    let {anchor, focus} = selection;

    if (!children[anchor.path[0]]['NumberedList']) {
      selectTionNode = children[anchor.path[0]];
    } else {
      selectTionNode = children[anchor.path[0]].children[anchor.path[1]];
    }
  }

  return selectTionNode ? selectTionNode.type === format : false;
};

// 获取无序排序的选中
const isUnorderedSortActive = (editor, format) => {

  const [match] = Editor.nodes(editor, {
    match: n => {
      return n[format] === 'None';
    },
  });

  return !!match;
};


// 获取选中的数据
const isBlockActiveNum = (editor, format, itemList) => {
  const [match] = Editor.nodes(editor, {
    match: n => {
      return n.type === format || n[format];
    },
  });

  if (!!match) {
    return match[0][format];
  } else {
    return itemList[0];
  }

};


export const MarkIcon = (props) => {

  const {format, title, icon} = props;
  const editor = useSlate();

  return (
    <div>
      <Button
        className="tabbarIcon"
        active={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMark(editor, format);
        }}
      >
        {props['icon']}
        <span className="title" style={{width: `${title && title.length * 18}px`}}>
                    {title}
                </span>
      </Button>

    </div>
  );
};

export const MarkVertAlign = (props) => {

  const {format, icon, title} = props;
  const editor = useSlate();

  return (
    <div>
      <Button
        className="tabbarIcon"
        active={isMarkActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleMarkVertAlign(editor, format);
        }}
      >
        {props['icon']}
        <span className="title" style={{width: `${title && title.length * 18}px`}}>
                    {title}
                </span>
      </Button>

    </div>
  );
};

export const MarkSubscript = (props) => {


  const {format, title, icon} = props;
  const editor = useSlate();

  return (
    <div>
      <SubscriptButton
        active={isMarkList(editor, [
          'UnderlineSingle',
          'UnderlineDouble',
          'UnderlineDotted',
          'UnderlineWave'])}
        editor={editor}
        title={title}
      ></SubscriptButton>

    </div>
  );
};


export const MarkNode = (props) => {

  const {format, icon} = props;
  const editor = useSlate();

  return (
    <div>
      <Button
        className="tabbarIcon"
        active={isBlockActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {iconObj[props['icon']]}

      </Button>
    </div>
  );
};

export const MarkTextIndent = (props) => {

  const {format, icon, itemList, unit, title} = props;
  const editor = useSlate();

  return (
    <TextIndentBtn
      active={isBlockActiveNum(editor, format, itemList)}
      format={format}
      icon={icon}
      itemList={itemList}
      unit={unit}
      editor={editor}
      title={title}
    ></TextIndentBtn>

  );
};

export const MarkWordSpace = (props) => {

  const {format, icon, itemList, unit, title} = props;
  const editor = useSlate();
  return (
    <WordSpace
      active={isBlockActiveNum(editor, format, itemList)}
      format={format}
      icon={icon}
      itemList={itemList}
      unit={unit}
      editor={editor}
      title={title}
    ></WordSpace>

  );
};


export const MarkWordSpacing = (props) => {

  const {format, icon, title, geta, id} = props;
  const editor = useSlate();
  return (
    <WordSpacing
      active={isMarkActive(editor, format)}
      format={format}
      icon={icon}
      editor={editor}
      title={title}
      id={id}
      geta={() => geta()}
      changeVal={(e) => {
      }}
    />
  );
};

export const Symbol = (props) => {
  const {isFocuse, setVisible, postion, title, modalPosition, id} = props;
  const editor = useSlate();

  // console.log(isFocuse);

  return (<SymbolIcon
    editor={editor}
    title={title}
    isFocuse={isFocuse}
    setVisible={setVisible}
    postion={postion}
    modalPosition={modalPosition}
  />);

};

export const MarkInsertFormula = (props) => {
  const {isFocuse, setVisible, postion, title, modalPosition, changeFocuse} = props;
  const editor = useSlate();

  // console.log(editor);

  return (<InsertFormula
    editor={editor}
    title={title}
    isFocuse={isFocuse}
    setVisible={setVisible}
    postion={postion}
    modalPosition={modalPosition}
    changeFocuse={changeFocuse}
  />);
};

export const MarkFormulaEditor = (props) => {
  const {isFocuse, setVisible, postion, title, modalPosition, changeFocuse} = props;
  const editor = useSlate();

  return (<FormulaEditor
    editor={editor}
    title={title}
    isFocuse={isFocuse}
    setVisible={setVisible}
    postion={postion}
    modalPosition={modalPosition}
    changeFocuse={changeFocuse}
  />);
};

export const MarkAlignment = (props) => {

  const {format, icon, title} = props;
  const editor = useSlate();

  return (
    <div>
      <Button
        className="tabbarIcon"
        active={isAlignmentActive(editor, format)}
        onMouseDown={(event) => {
          event.preventDefault();
          toggleBlock(editor, format);
        }}
      >
        {icon}
        <span className="title" style={{width: `${props.title && props.title.length * 18}px`}}>
                    {props.title}
                </span>
      </Button>
    </div>
  );
};

// 设置无序排序

export const UnorderedSorting = ({format, icon, title}) => {
  const editor = useSlate();
  return (
    <div className="LowerTriangle">
      <Button
        className="tabbarIcon"
        style={{borderRadius: '2px 0px 0px 2px'}}
        active={isSortActive(editor, format)}
        onMouseDown={(event: any) => {
          event.preventDefault();
          toggleSort(editor, format, 'null');
        }}
      >
        <Icon>{icon}</Icon>
        <span className="title" style={{width: `${title && title.length * 18}px`}}>
                    {title}
                </span>
      </Button>
    </div>
  );
};

export const OrderSorting = (props) => {

  const {format, title, sortFormat, setFormat} = props;
  const editor = useSlate();

  return (
    <div>
      <OrderSortButton
        editor={editor}
        format={format}
        title={title}
        sortFormat={sortFormat}
        setFormat={setFormat}
      ></OrderSortButton>
    </div>
  );

};

export const MarkColor = (props) => {

  const {format, title, changeColor, color} = props;
  const editor = useSlate();

  return (
    <div>
      <MarkColorBtn
        editor={editor}
        format={format}
        title={title}
        color={color}
        changeColor={changeColor}
      ></MarkColorBtn>
    </div>
  );
};

export const MarkFont = (props) => {

  const {
    format,
    fontList,
    fontObj,
    width,
    defluteVal,
    title
  } = props;
  const editor = useSlate();

  return (
    <div>
      <MarkFontBtn
        editor={editor}
        format={format}
        fontList={fontList}
        fontObj={fontObj}
        width={width}
        defluteVal={defluteVal}
        title={title}
      ></MarkFontBtn>
    </div>
  );
};

