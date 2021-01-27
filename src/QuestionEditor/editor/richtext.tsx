// @ts-ignore
import React, {useCallback, useMemo, useState, useEffect, useRef} from 'react';
import isHotkey, {isKeyHotkey, toKeyName, toKeyCode} from 'is-hotkey';
import {
  Editable,
  withReact,
  useSlate,
  Slate,
  useSelected,
  useFocused,
} from 'slate-react';
import {Text} from 'slate'

import {
  Element,
  MentionElement,
  Leaf,
  MarkIcon,
  MarkSubscript,
  MarkVertAlign,
  MarkNode,
  MarkTextIndent,
  MarkWordSpacing,
  MarkWordSpace,
  Symbol,
  MarkInsertFormula,
  MarkAlignment,
  UnorderedSorting,
  OrderSorting,
  MarkColor,
  MarkFont,
  MarkFormulaEditor
} from './richtextDetail';

import {
  bold,
  centerAlignment,
  cleanUp,
  disorder,
  formatMatch,
  Italic,
  leftAlignment,
  order,
  picture,
  pinyin,
  point,
  rightAlignment,
  strikeout,
  subscript,
  superscript,
  symbol,
  textIndent,
  triangle,
  underline,
  video,
  wordspace,
  lineSpace,
  lowerTriangle,
  insertFormula
} from './toolbarIcon';

import {
  TextIndentList,
  LineSpaceList,
  ListWordSpace,
  fontSizeList,
  fontList,
  fontObj,
  fontSizeObj,
  showMathJax
} from './client';

import {Editor, Operation, Transforms, Node, createEditor, Path} from 'slate';
import {withHistory, HistoryEditor} from 'slate-history';

import {Toolbar} from './components';
import FormulaEditor from './components/FormulaEditor';
import './richtext.less';
import _ from 'lodash';
// import { Tips } from '../../components/index';
import {Tips} from '../../MessageTips/index';

import UploadFile from './components/UploadFile';


const RichText = (props: any) => {

  const [value, setValue] = useState(props.value);

  const [isFocuse, setIsFocuse] = useState(false);
  const [isSelection, setIsSelection] = useState(false);
  const [formula, setFormula] = useState(null);
  const [selection, setSelection] = useState(null);
  const [modalPosition, setModalPosition] = useState(props.modalPosition);
  const [modalPositionInsertFormula, setModalPositionInsertFormula] = useState(props.modalPositionInsertFormula);
  const [isInBox, setIsInBox] = useState(props.isInBox);
  const [search, setSearch] = useState(props.search);
  const [placeholder, setPlaceholder] = useState('请输入内容');


  // const [insertCompositionText, setInsertCompositionText] = useState(false);
  const editorRef = useRef();
  const renderElement = useCallback(props => <Element {...props} />, []);
  const renderLeaf = (props: any) => <Leaf {...props} />;
  const editor = useMemo(() => withMentions(withHistory(withReact(createEditor())), props), []);

  // 对常见错误的字段进行检查
  const decorate = useCallback(([node, path]) => {
    const newRanges: any = []
    const len = search.length !== 0;
    if (len && Text.isText(node)) {
      const {text} = node;

      search.forEach((item: any, index: number) => {
        let texts = text;
        const markLen = index + 1;
        let replaceStr = '**';
        for (let j = 0; j < markLen; j++) {
          replaceStr += '>';
        }
        ;
        replaceStr += '**';

        item.forEach((el: string) => {
          if (el !== '+' &&
            el !== '[' &&
            el !== '(' &&
            el !== ')' &&
            el !== ']') {
            texts = texts.replace(new RegExp(`${el}`, 'g'), replaceStr);
          } else {
            texts = texts.replace(new RegExp(`\\${el}`, 'g'), replaceStr);
          }
        })

        // 标记高亮字段
        const parts = texts.split(replaceStr);
        let offset = 0;
        parts.forEach((part: any, i: number) => {
          if (part[i] === '' && i === 0) {
            newRanges.push({
              anchor: {path, offset},
              focus: {path, offset: offset + markLen},
              highlight: true,
            });
            offset = offset + markLen;
            return true;
          }

          if (i !== 0) {
            newRanges.push({
              anchor: {path, offset},
              focus: {path, offset: offset + markLen},
              highlight: true,
            });
            offset = offset + part.length + markLen;
            return true;
          } else {
            offset = offset + part.length;
          }
        })
      });
    }
    ;

    // 排序
    newRanges.sort((pre: any, next: any) => {
      if (pre.anchor && next.anchor) {
        const d = Path.compare(pre.anchor.path, next.anchor.path);
        if (d === 0) {
          return pre.anchor.offset - next.anchor.offset;
        } else {
          return d;
        }
      }
      return false;
    })

    // 归并
    const finalRanges = newRanges.reduce((acc: any, item1: any) => {
      const len = acc.length;
      const item = JSON.parse(JSON.stringify(item1));
      if (len) {
        if (Path.compare(acc[len - 1].anchor.path, item.anchor.path) === 0) {
          if (acc[len - 1].focus.offset === item.anchor.offset) {  // !如果是连续的range位置
            acc[len - 1].focus.offset = item.focus.offset;
          } else { // !非连续位置
            acc.push(item);
          }
        } else { // 跨元素
          acc.push(item);
        }
      } else { // 第一次进入
        acc.push(item);
      }
      return acc;
    }, []);

    return finalRanges;

  }, [search]);


  useEffect(() => {

    setSearch(props.search);

  }, [props.search])


  const addDblEvent = (e: any) => {

    if (navigator.onLine) {
      setSelection(editor.selection);
      setFormula(getMathML(e.target));
    } else if (e.target.className && e.target.className.indexOf('buttonTitle') === -1) {
      Tips.open({
        message: '网络错误，请稍后重试',
        type: 'fail'
      });
    }
  };

  const getMathML: any = function (el: any) {
    if (el.getAttribute && (!el.getAttribute('class') || el.getAttribute('class').indexOf('richBox') < 0)) {
      if (el.getAttribute('class') && el.getAttribute('class').indexOf('MathJax') !== -1) {
        return el.getAttribute('data-mathml');
      } else {
        return getMathML(el.parentNode);
      }
    } else {
      return null;
    }
  };

  useEffect(() => {

    setIsInBox(props.isInBox);

  }, [props.isInBox]);

  useEffect(() => {
    setValue(props.value);
    setTimeout(() => {
      let {current}: any = editorRef;
      current && current.addEventListener('dblclick', addDblEvent);
      return function cleanup() {
        current.removeEventListener('dblclick', addDblEvent);
      };
    }, 0);

  }, [props.isFilled]);

  useEffect(() => {

    setModalPosition(props.modalPosition);

  }, [JSON.stringify(props.modalPosition)]);

  useEffect(() => {

    setModalPositionInsertFormula(props.modalPositionInsertFormula);

  }, [JSON.stringify(props.modalPositionInsertFormula)]);


  function isSelections() {
    let selection = editor.selection;
    if (selection &&
      selection.anchor &&
      selection.focus &&
      JSON.stringify(selection.anchor.path) !== JSON.stringify(selection.focus.path)) {
      return true;
    } else {
      return false;
    }
  }

  function updateFormula(formula: any) {

    // TODO: 插入公式可能存在问题需要后续优化

    if (formula) {
      // @ts-ignore
      Transforms.setSelection(editor, selection);

      let tag: any;
      (function () {
        let children = editor;
        // @ts-ignore
        let _path = JSON.parse(JSON.stringify(selection.anchor.path));
        _path.splice(-2);
        _path.forEach((key: any) => {
          children = children.children[key];
        });
        // @ts-ignore
        tag = children.children[selection.anchor.path[selection.anchor.path.length - 2]].tag;
      })();
      // @ts-ignore
      Transforms.insertNodes(editor, {
        type: 'mention',
        mediaType: 'FORMULA',
        character: formula,
        tag: String(Math.random()).replace('\.', ''),
        children: [{text: ' ', mark: []}],
      }, {
        // @ts-ignore
        at: selection
      });

      let newSelection = JSON.parse(JSON.stringify(selection));

      (function () {
        let children = editor;
        // @ts-ignore
        let _path = JSON.parse(JSON.stringify(selection.anchor.path));
        _path.splice(-2);
        _path.forEach((key: any) => {
          children = children.children[key];
        });

        children.children.forEach((child: any, index: number) => {
          if (child.tag === tag) {
            newSelection.anchor.path[newSelection.anchor.path.length - 2] = index;
            newSelection.focus.path[newSelection.focus.path.length - 2] = index;
          }
        });

      })();

      Transforms.delete(editor, {
        at: newSelection
      });
    }
    setSelection(null);
    setFormula(null);
    setTimeout(() => {
      showMathJax(true);
    }, 0);
  }
  // @ts-ignore
  return (
    <div
      // @ts-ignore
      ref={editorRef}
      className={`${'richBox'} ${isFocuse ? 'isChoose' : ''}`}
    >
      <Slate
        editor={editor}
        value={value}
        onChange={(e: any) => {
          // const { selection } = editor;
          // setValue(e);
          let element = [];

          if (
            e.length === 1 &&
            e[0].children.length === 1 &&
            e[0].children[0].text === '' &&
            (!e[0].children[0].isAdd)
          ) {
            element = [
              {
                children: [
                  {text: ''}
                ],
                styles: [],
                type: 'Left'
              }];
          } else if (e.length && e[0].NumberedList) {

            if (e.length === 1 &&
              e[0].children.length === 1 &&
              e[0].children[0].children.length === 1 &&
              e[0].children[0].children[0].text === '') {
              element = [
                {
                  NumberedList: e[0].NumberedList,
                  children: [{
                    children: [
                      {text: ''}
                    ],
                    styles: [],
                    type: 'Left',
                    ListItem: true
                  }]
                }
              ];
            } else if (e[0].children[0].children[0].text === '') {
              element = _.cloneDeep(e);
              element[0].children[0].ListItem = true;
            } else {
              element = e;
            }
          } else {
            element = e;
          }

          if (!e.length) {
            element = [
              {
                children: [
                  {text: ''}
                ],
                styles: [],
                type: 'Left'
              }];
          }

          if (JSON.stringify(element) !== JSON.stringify(value)) {
            props.changeValue(element);
            setSearch([]);
          }

          setValue(element);
          console.log("RichText -> element", element)
        }}
      >
        {
          isFocuse || props.isFistRich ? <div
            className={'Toolbar'}
          >
            {
              // @ts-ignore
              <Toolbar>
              <MarkFont
                format={'Font'}
                fontList={fontList}
                fontObj={fontObj}
                width={98}
                title="字体"
              />
              <MarkFont
                format={'FontSize'}
                fontList={fontSizeList}
                fontObj={fontSizeObj}
                width={54}
                title="字号"
              />
              <MarkIcon format={'Bold'} icon={bold} title="加粗"/>
              <MarkIcon format={'Italic'} icon={Italic} title="倾斜"/>
              <MarkSubscript format={'UnderlineSingle'} icon={underline} title="下划线"/>
              <MarkIcon format={'Strike'} icon={strikeout} title="删除线"/>
              <MarkVertAlign format={'VertAlignSubscript'} icon={subscript} title="下标"></MarkVertAlign>
              <MarkVertAlign format={'VertAlignSuperscript'} icon={superscript} title="上标"></MarkVertAlign>
              <MarkIcon format={'EmphasisDot'} icon={point} title="着重字"/>
              <MarkColor
                format={'color'}
                icon={order}
                title="字体颜色"
                color={props.color}
                changeColor={(e: any) => props.changeColor(e)}
              />
              <span className="Separate"></span>
              <MarkAlignment format={'Left'} icon={leftAlignment} title="左对齐"/>
              <MarkAlignment format={'Center'} icon={centerAlignment} title="居中对齐"/>
              <MarkAlignment format={'Right'} icon={rightAlignment} title="右对齐"/>
              <MarkWordSpace
                format={'Wordspace'}
                icon={wordspace}
                itemList={ListWordSpace}
                unit="字符"
                title="字间距"
              >
              </MarkWordSpace>
              <MarkTextIndent
                format={'LineSpace'}
                icon={lineSpace}
                itemList={LineSpaceList}
                unit="倍"
                title="行和段落间距"
              >
              </MarkTextIndent>
              <MarkTextIndent
                format={'TextIndent'}
                icon={textIndent}
                itemList={TextIndentList}
                unit="字符"
                title="首行缩进"
              ></MarkTextIndent>

              <UnorderedSorting format={'NumberedList'} icon={disorder} title="无序列表"/>
              <OrderSorting
                format={'NumberedList'}
                icon={order}
                title="有序列表"
                sortFormat={props.sortFormat}
                setFormat={props.setFormat}
              />
              <span className="Separate"></span>
              <MarkInsertFormula
                title="从图片插入公式"
                isFocuse={isFocuse}
                // setVisible={props.setVisible && props.setVisible}
                modalPosition={modalPositionInsertFormula}
                postion={(e: any) => {
                  if (e && e.isCloseMedoal) {
                    setIsFocuse(false);
                    delete e.isCloseMedoal;
                  }
                  props.positionInsertFormula && props.positionInsertFormula(e);
                }}
                changeFocuse={(e: any) => setIsFocuse(e)}
              />
              <MarkFormulaEditor
                title="插入公式"
                isFocuse={isFocuse}
                // setVisible={props.setVisible && props.setVisible}
                modalPosition={modalPositionInsertFormula}
                postion={(e: any) => {
                  
                  console.log('e====>', e);
                  
                  if (e && e.isCloseMedoal) {
                    setIsFocuse(false);
                    delete e.isCloseMedoal;
                  }
                  props.positionInsertFormula && props.positionInsertFormula(e);
                }}
                changeFocuse={(e: any) => setIsFocuse(e)}
              />
              <span className="Separate"></span>
              <Symbol
                title="符号"
                isFocuse={isFocuse}
                setVisible={props.setVisible && props.setVisible}
                modalPosition={modalPosition}
                postion={props.postion && props.postion}
              />
            </Toolbar>
            }
          </div> : ''
        }
        {
          formula ? <FormulaEditor formula={formula} onSubmit={(formula: any) => {
            updateFormula(formula)
          }}/> : ''
        }

        <Editable
          decorate={decorate}
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder={placeholder}
          style={{minHeight: props.isOption ? '14px' : '63px'}}
          autoFocus={props.autoFocus ? props.autoFocus : false}
          onFocus={() => {
            console.error(1);
            setIsFocuse(true);
            props.isInBox && props.isInBox(true);
          }}
          onBlur={() => {
            console.error(2);
            if (!modalPositionInsertFormula.visible || isInBox) {
              setIsFocuse(false);
            }
          }}
          onMouseMove={() => {
            if (isSelections()) {
              setIsSelection(true);
            } else {
              setIsSelection(false);
            }
          }}
          onDOMBeforeInput={() => {

          }}
          onInput={() => {
            if (isSelection || isSelections()) {
              editor.deleteFragment();
              setIsSelection(false);
            }
          }}
          onKeyDown={(event: any) => {

            if (event.keyCode === 13 && props.isoption) {
              event.preventDefault();
            }

            const {selection} = editor;

            if (selection &&
              selection.anchor.offset === 0 &&
              selection.focus.offset !== 0) {
              setSearch('');

            }

            if (isHotkey('delete', event) || isHotkey('backspace', event)) {
              if(!editor.selection) return false; // 2020/06/22 修改 删除会报错 editor.select === null;
              let path = editor.selection && editor.selection.anchor.path;
              let b = Node.parent(editor, editor.selection.anchor.path);

              // Editor.removeMark(editor, 'Bold');
              if (path && b && b.type === 'mention') {
                event.preventDefault();
                editor.deleteBackward({unit: 'character'});
              }

              // 处理首行是排序列表的时候，敲击回退键进行删除排序样式
              if (event.keyCode === 8) {

                let a = Node.get(editor, editor.selection.anchor.path);
                let b = Node.parent(editor, editor.selection.anchor.path);

                if (
                  a.text === '' &&
                  b.ListItem &&
                  b.children.length === 1
                  && editor.selection.anchor.path[0] === 0
                  && editor.selection.anchor.path[1] === 0
                ) {

                  Transforms.unwrapNodes(editor, {
                    // @ts-ignore
                    match: n => n['NumberedList'],
                    split: true,
                  });
                  Transforms.setNodes(editor, {
                    'ListItem': false,
                  });
                }
              }
              const selection = JSON.parse(JSON.stringify(editor.selection));
              const children = JSON.parse(JSON.stringify(editor.children));
              if (JSON.stringify(selection.anchor) !== JSON.stringify(selection.focus) && selection.anchor.path[1] === 0 && selection.anchor.offset === 0) {
                // patch: 判断是否从头选到尾
                if (selection.anchor.path[0] === 0 &&
                  selection.focus.path[0] === children.length - 1 &&
                  selection.focus.path[1] === children[children.length - 1].children.length - 1 &&
                  selection.focus.offset === children[selection.focus.path[0]].children[selection.focus.path[1]].text.length
                ) {
                  Transforms.removeNodes(editor);
                }
              }
            } else if (event.keyCode === 229) {

              let path = editor.selection && editor.selection.anchor.path;

              if (isSelection || isSelections()) {

                event.preventDefault();
                editor.deleteFragment();
                setIsSelection(false);

              }
            } else if (isHotkey('Control+X', event) || isHotkey('Command+X', event)) { // 在剪切的时候，删除图片
              const selection = JSON.parse(JSON.stringify(editor.selection));
              const selectionFragment = JSON.parse(JSON.stringify(Node.fragment(editor, selection)));
              const children = JSON.parse(JSON.stringify(editor.children));
              const hasFormula = selectionFragment.filter((fragment: any) => {
                return fragment.children.filter((child: any) => {
                  return child.mediaType === 'FORMULA' || child.mediaType === 'IMAGE'
                }).length
              });
              console.log(hasFormula)
              if (hasFormula.length) {
                if (JSON.stringify(selection.anchor) !== JSON.stringify(selection.focus) && selection.anchor.path[1] === 0 && selection.anchor.offset === 0) {
                  Transforms.removeNodes(editor, selection);
                  // patch: 判断是否从头选到尾
                  if (selection.anchor.path[0] === 0 &&
                    selection.focus.path[0] === children.length - 1 &&
                    selection.focus.path[1] === children[children.length - 1].children.length - 1 &&
                    selection.focus.offset === children[selection.focus.path[0]].children[selection.focus.path[1]].text.length
                  ) {
                    Transforms.removeNodes(editor);
                  }
                } else {
                  Transforms.delete(editor, {
                    at: selection
                  });
                }
                event.preventDefault();
                const cloneActiveElement = JSON.stringify({
                  fromCut: true,
                  fragment: selectionFragment
                });
                const copyText: any = document.getElementById("copy_text");
                copyText.innerHTML = cloneActiveElement;
                copyText.readOnly = false;
                copyText.select();
                copyText.setSelectionRange(0, copyText.value.length);
                document.execCommand("copy");
                copyText.readOnly = true;
              }
            }
          }}
        />
      </Slate>
    </div>
  );
};

const updateFragment = (fragmentData: any) => {
  if (!fragmentData.children) {
    return fragmentData;
  }
  fragmentData.children = fragmentData.children.map((child: any) => {
    if (child.children && child.mediaType !== 'FORMULA' && child.mediaType !== 'IMAGE') {
      const {children} = updateFragment(child);
      return {
        ...child,
        children
      };
    } else {
      child.tag = String(Math.random()).replace('\.', '');
      return child;
    }
  });
  return fragmentData;
};

const withMentions = (editor: any, props: any) => {
  const {insertData} = editor;
  const {isInline, isVoid} = editor;

  editor.undo = function () {

    let e = editor;

    let history = e.history;
    let undos = history.undos;

    if (undos.length > 0) {
      let batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        Editor.withoutNormalizing(e, () => {
          const inverseOps = Array.from(batch.map(Operation.inverse).reverse());

          for (const op of inverseOps) {
            // If the final operation is deselecting the editor, skip it. This is
            if (
              op === inverseOps[inverseOps.length - 1] &&
              // @ts-ignore
              op.type === 'set_selection' &&
              // @ts-ignore
              (op.newProperties == null || op.properties == null)
            ) {
              continue;
            } else {
              if (
                // @ts-ignore
                op.type === 'set_selection' && (op.newProperties == null || op.properties == null)
              ) {
                continue;
              }
              e.apply(op);
            }
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };

  editor.isInline = (element: any) => {
    return element.type === 'mention' ? true : isInline(element);
  };

  editor.isVoid = (element: any) => {
    return element.type === 'mention' ? true : isVoid(element);
  };

  editor.insertData = (data: any) => {

    const html = data.getData('text/html');

    let blob = data.items[0] && data.items[0].getAsFile();
    const slateFragment = data.getData('application/x-slate-fragment');
    const textData = data.getData('text/plain');
    const parsed = new DOMParser().parseFromString(html, 'text/html');
    const scripts = parsed.getElementsByTagName('script');
    if (scripts.length) {
      let fragmentData = JSON.parse(decodeURIComponent(window.atob(slateFragment)));
      const isList = fragmentData.filter((fragment: any) => {
        return fragment.NumberedList
      });
      fragmentData = fragmentData.map((fragment: any) => {
        return updateFragment(fragment);
      });
      if (props.isoption) {
        let newFragmentData: any = [];
        _.map(fragmentData, (el: any) => {
          if (el.NumberedList) {

            _.map(el.children, (el: any) => {
              if (newFragmentData.length === 0) {
                newFragmentData = _.cloneDeep([el]);
              } else {
                newFragmentData[0].children = newFragmentData[0].children.concat(el.children);
              }

            });
          } else {

            if (newFragmentData.length === 0) {
              newFragmentData = _.cloneDeep([el]);
            } else {
              newFragmentData[0].children = newFragmentData[0].children.concat(el.children);
            }

          }
        });
        fragmentData = newFragmentData
      }

      if (!isList.length) {
        Transforms.insertFragment(editor, fragmentData);
      } else {
        if (
          editor.selection.anchor.offset === 0 &&
          editor.selection.anchor.path
            .reduce((reduce: number, path: any) => reduce + path, 0) === 0
        ) {
          Transforms.removeNodes(editor, editor.selection);
        }
        Transforms.insertNodes(editor, fragmentData);
      }
    } else if (blob) {
      /* eslint-disable */
      let a = new Promise((resolve) => {
        new UploadFile({
          blob: blob,
          callBack: (e: any) => {
            resolve(e);
          }
        });
      }).then((res) => {

        // 插入图片内容
        Transforms.insertNodes(editor, {
          mediaType: 'IMAGE',
          character: res,
          children: [{text: '', mark: []}],
          type: 'mention'
        });
        let {path} = editor.selection.anchor;
        let newPath = [];
        let newPositiong: any = [];

        // 修改聚焦的坐标
        if (path.length === 4) {
          newPath = [path[0], path[1], path[2] + 1];

        } else {
          newPath = [path[0], path[1] + 1];
        }
        // 对左边进行赋值
        newPositiong = {
          anchor: {
            offset: 0,
            path: newPath
          },
          focus: {
            offset: 0,
            path: newPath
          }
        };

        Transforms.setSelection(editor, newPositiong);

      });


    } else {

      let fromCut = false;

      try{ // 处理JSON错误
        fromCut = JSON.parse(textData).fromCut
      }catch(e){

      }

      if (slateFragment || fromCut) {


        let fragmentData = fromCut ? JSON.parse(textData).fragment : JSON.parse(decodeURIComponent(window.atob(slateFragment)));

        if (props.isoption) {

          let newFragmentData: any = [];

          _.map(fragmentData, (el: any ) => {
            if (el.NumberedList) {

              _.map(el.children, (el: any) => {
                if (newFragmentData.length === 0) {
                  newFragmentData = _.cloneDeep([el]);
                } else {
                  newFragmentData[0].children = newFragmentData[0].children.concat(el.children);
                }
              });
            } else {

              if (newFragmentData.length === 0) {
                newFragmentData = _.cloneDeep([el]);
              } else {
                newFragmentData[0].children = newFragmentData[0].children.concat(el.children);
              }
            }
          });
          Transforms.insertFragment(editor, newFragmentData);

        } else {
          const isNumberedList = fragmentData.filter((fragment: any) => fragment.NumberedList).length
          if (isNumberedList || fromCut) {
            if (
              editor.selection.anchor.offset === 0 &&
              editor.selection.anchor.path
                .reduce((reduce: number, path: any) => reduce + path, 0) === 0
            ) {
              Transforms.removeNodes(editor, editor.selection);
            }
            Transforms.insertNodes(editor, fragmentData);
          } else {
            insertData(data);
          }
        }
      } else {
        insertData(data);
      }
    }
  };

  return editor;
};


export default RichText;
