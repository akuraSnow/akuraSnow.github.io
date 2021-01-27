// @ts-nocheck
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Spin, Tabs} from 'antd';
import _ from 'lodash';
import {Button} from '../components';
import {formulaEditor} from '../toolbarIcon';
import DragModel from './../../../DragModel/index';
import {symbolList} from '../client';
import {Editor, Node, Transforms, createEditor} from 'slate';
import './iconCompents.less';
import {Tips} from "../../../MessageTips/index";
import $ from 'jquery';
let _visible = true;


const FormulaEditor = (props) => {

  const [visible, setVisible] = useState(false);
  const [modalPosition, setModalPosition] = useState(props.modalPosition);
  const [selection, setSelection] = useState(null);
  const editorRef = useRef();
  const [editor, setEditor] = useState(null);

  useEffect(() => {

    
    setTimeout(() => {

      if ($.mathEditor) {
        const editor = $(editorRef.current).mathEditor({
          width: 1000,
          height: 450,
          defFormula: '<math></math>'
        });
        setEditor(editor);
      }

    }, 0);
    return function cleanup() {
      const bodyDivs = Array.from(document.querySelectorAll('body > div'));
      const bodySpans = Array.from(document.querySelectorAll('body > span'));
      bodyDivs.forEach((el) => {
        if (
          el.getAttribute && el.getAttribute('class') && (
            el.getAttribute('class').indexOf('ui-') !== -1 ||
            el.getAttribute('class').indexOf('sp-') !== -1
          )
        ) {
          document.body.removeChild(el);
        }
      });
      bodySpans.forEach((el) => {
        if (
          el.getAttribute &&
          el.getAttribute('id') &&
          el.getAttribute('id').indexOf('spanN') !== -1
        ) {
          document.body.removeChild(el);
        }
      });
    };
  }, [visible]);

  useEffect(() => {
    setModalPosition(props.modalPosition);
  }, [props.modalPosition]);

  useEffect(() => {
    if (props.editor.selection) {
      setSelection(props.editor.selection);
    }
  }, [props.editor.selection]);

  function onOk() {
    props.editor.selection = selection;
    Transforms.setSelection(props.editor, selection);
    let formulaResult = editor && editor.mathEditor ? editor.mathEditor('getMathML', 'UNICODE', 'true') : null;
    const formulaDOM = new DOMParser().parseFromString(formulaResult, 'text/html');
    const mathEl = formulaDOM.getElementsByTagName('math')[0];
    if (!mathEl.children.length) {
      Tips.open({
        message: '内容不能为空',
        type: 'fail'
      });
    } else {
      Transforms.insertNodes(props.editor, {
        type: 'mention',
        mediaType: 'FORMULA',
        character: formulaResult,
        tag: String(Math.random()).replace('\.', ''),
        children: [{text: ' ', mark: []}],
      });
      setVisible(false);
      props.changeFocuse(false);
      props.isFocuse && props.postion && props.postion({
        ...modalPosition,
        visible: false
      });
    }
  }


  return (
    <div>
      <Button
        className={props.isFocuse ? 'tabbarIcon' : ''}
        active={false}
        style={{width: '24px', height: '24px', textAlign: 'center', position: 'relative', top: '0px'}}
        onMouseDown={(event) => {
          event.preventDefault();
          if (props.isFocuse) {
            _visible = true
          }
          props.isFocuse && setVisible(true);
          props.isFocuse && props.setVisible && props.setVisible(true);
          props.isFocuse && props.postion && props.postion({
            ...modalPosition,
            visible: true
          });
          props.changeFocuse(true);
        }}
      >
        <span style={{display: 'inline-block', width: '24px', height: '24px', lineHeight: '24px'}}>
          {formulaEditor}
          <span className="title" style={{width: `80px`, height: '20px', lineHeight: '20px'}}>{props.title}</span>
        </span>
      </Button>
      <div>
        {
          /* eslint-disable */
          visible && props.isFocuse ? <DragModel
            style={{
              width: '1000px',
              height: '560px',
              left: modalPosition.left,
              top: modalPosition.top
            }}
            title="插入公式"
            onCancle={() => {
              setVisible(false);
              _visible = false;
              props.isFocuse && props.postion && props.postion({
                ...modalPosition,
                visible: false,
                isCloseMedoal: true
              });
            }}
            onOk={() => onOk()}
            isModals={true}
          >
            <div className="parse-body identifySpin">
              <div ref={editorRef}/>
            </div>

          </DragModel> : ''
        }

      </div>
    </div>

  );
};


export default FormulaEditor;
