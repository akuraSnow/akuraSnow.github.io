// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'antd';
import '../iconCompents/iconCompents.less';
// import { Tips } from '../../../components/index';
import { Tips } from '../../../MessageTips/index';
import $ from 'jquery';

const FormulaEditor = (props) => {

    const editorRef = useRef();
    const [editor, setEditor] = useState(null);
    const [formula, setFormula] = useState(props.formula.replace(' xmlns="http://www.w3.org/1998/Math/MathML"', ''));

    useEffect(() => {
        if (!editor) {
            setTimeout(() => {
                console.log('editorRef.current==>', editorRef.current);
                const editor = $(editorRef.current).mathEditor({
                    width: 1000,
                    height: 450,
                    defFormula: formula
                });
                setEditor(editor);
            }, 0);
        } else if (editor.mathEditor) {
            editor.mathEditor('setMathML', props.formula);
        }
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
    }, [props.formula]);

    function onOk() {

        let formulaResult = editor ? editor.mathEditor('getMathML', 'UNICODE', 'true') : null;
        const formulaDOM = new DOMParser().parseFromString(formulaResult, 'text/html');
        const mathEl = formulaDOM.getElementsByTagName('math')[0];
        if (mathEl.children.length === 1 && !mathEl.children[0].children.length) {
            Tips.open({
                message: '内容不能为空',
                type: 'fail'
            });
        } else {
            props.onSubmit(formulaResult);
        }
    }

    function onCancel() {
        props.onSubmit(null);
    }

    return (
        <Modal
            visible={true}
            maskClosable={false}
            width={1000}
            bodyStyle={{ width: 1000, height: 450, padding: 0, overflow: 'hidden' }}
            title="公式编辑器"
            onOk={() => { onOk() }}
            onCancel={() => { onCancel() }}
        >
            <div className={'content-body'} style={{ position: 'relative' }}>
                <div ref={editorRef} />
            </div>
        </Modal>
    );
};

export default FormulaEditor;
