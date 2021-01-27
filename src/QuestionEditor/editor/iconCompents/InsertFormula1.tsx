// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '../components';
import DragModel from '../../../DragModel/index';
import { Spin } from 'antd';
import { Transforms } from 'slate';
import { Tips } from './../../../components/index';
import './iconCompents.less';
import { identifyFormulaFromImage } from '../../../public/api';


const InsertFormula = (props) => {


    const [visible, setVisible] = useState(false);
    const [editor, setEditor] = useState(props.editor);
    const [selection, setSelection] = useState(null);
    const [previewImage, setPreviewImage] = useState(false);
    const [identifyResult, setIdentifyResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const parseImgRef = useRef();

    function focusHandler({ target }) {
        const className = target.getAttribute('class');
        if (className === 'parse-input') {
            target.focus();
        }
    }

    useEffect(() => {
        document.addEventListener('click', focusHandler);
        return function cleanup() {
            document.removeEventListener('click', focusHandler);
        };
    }, []);

    useEffect(() => {
        if (props.editor.selection) {
            setSelection(props.editor.selection);
        }
    }, [props.editor.selection]);

    useEffect(() => {
        if (visible) {
            parseImgRef.current.addEventListener('paste', (e) => {
                if (e.clipboardData) {
                    if (previewImage) {
                        setPreviewImage(null);
                        setIdentifyResult(null);
                    }
                    const { items } = e.clipboardData;
                    if (items) {
                        const item = items[0];
                        if (item.kind === 'file' && item.type.indexOf('image') !== -1) {
                            setLoading(true);
                            let blob = item.getAsFile();
                            let fileReader = new FileReader();
                            fileReader.onload = (e) => {
                                let image = new Image();
                                image.src = e.target.result;
                                image.onload = async () => {
                                    const imageWidth = image.width;
                                    const imageHeight = image.height;
                                    try {
                                        let { data: { confidence, html, data }} = await identifyFormulaFromImage({
                                            image: blob
                                        });
                                        if (confidence) {
                                            let resultsMML = data.filter((d) => {
                                                return d.type === 'mathml';
                                            });
                                            let resultsLatex = data.filter((d) => {
                                                return d.type === 'latex';
                                            }).map((latex) => latex.value);
                                            let latexRes = `\\begin{aligned}&\\begin{array}{l}${resultsLatex.join('\\\\')}\\end{array}\\end{aligned}`;
                                            let convertResultEl = document.createElement('span');
                                            convertResultEl.innerText = latexRes;
                                            convertResultEl.style.display = 'none';
                                            convertResultEl.setAttribute('id', 'convertResultEl');
                                            document.body.appendChild(convertResultEl);
                                            MathJax.Hub.Typeset(document.getElementById('convertResultEl'), () => {
                                                const mmlResult = document.querySelector('#convertResultEl .MathJax_Display .MathJax').getAttribute('data-mathml');
                                                setIdentifyResult([{ value: mmlResult }]);
                                                document.body.removeChild(document.getElementById('convertResultEl'));
                                            });
                                            resultsMML.forEach((result, index) => {
                                                let getSVGWidthRegExp = /width="(\d*\S*)ex"/g;
                                                let getSVGHeightRegExp = /height="(\d*\S*)ex"/g;
                                                getSVGWidthRegExp.lastIndex = index;
                                                getSVGWidthRegExp.lastIndex = index;
                                                let svgWidth = getSVGWidthRegExp.exec(html)[1];
                                                let svgHeight = getSVGHeightRegExp.exec(html)[1];
                                                let ratio = imageWidth / imageHeight;
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
                                            Tips.open({
                                                message: `请上传公式图片`,
                                                type: 'fail',
                                                time: 1000
                                            });
                                        }
                                    } catch (e) {
                                        Tips.open({
                                            message: `网络错误，请稍后重试`,
                                            type: 'fail',
                                            time: 1000
                                        });
                                    } finally {
                                        setLoading(false);
                                    }
                                };
                            };
                            fileReader.readAsDataURL(blob);
                        } else {
                            Tips.open({
                                message: `请在此处粘贴图片`,
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

    function onOk() {
        props.editor.selection = selection;
        Transforms.setSelection(props.editor, selection);
        identifyResult.forEach((formula) => {
            Transforms.insertNodes(props.editor, {
                type: 'mention',
                mediaType: 'FORMULA',
                character: formula.value,
                tag: String(Math.random()).replace('\.', ''),
                children: [{ text: ' ', mark: [] }],
            });
        });
        setVisible(false);
    }

    return (
        <div>
            <Button
                className="tabbarIcon"
                active={props.active}
                style={{ width: '25px', textAlign: 'center', position: 'relative' }}
                onMouseDown={(event) => {
                    event.preventDefault();
                    setVisible(true);
                }}
            >
                {props.icon}
                <span className="title" style={{ width: `${props.title && props.title.length * 18}px` }}>
                    {props.title}
                </span>
                <div className="tabbarIcon1" style={{ display: visible ? 'block' : 'none' }}>

                    {
                        visible ? <DragModel
                            style={{
                                width: '1000px',
                                height: '500px'
                            }}
                            title="从图片插入公式"
                            onCancle={() => {
                                setVisible(false);
                            }}
                            onOk={() => onOk()}
                        >
                            <div className="parse-body">
                                <Spin spinning={loading} tip="正在转换中...">
                                    <textarea ref={parseImgRef} rows="10" autoFocus={true} className={'parse-input'} />
                                    <div className="parse-div" style={{ overflow: 'hidden' }}>
                                        {!previewImage ? (<span>请将图片粘贴到此处</span>) : (
                                            <div>
                                                <div style={{ position: 'absolute', left: 20, top: 40, width: '100%', marginBottom: 20, fontSize: 18 }}>识别结果</div>
                                                <div style={{ paddingTop: 32 }} dangerouslySetInnerHTML={{ __html: previewImage }} />
                                            </div>
                                        )}
                                    </div>
                                </Spin>

                            </div>
                        </DragModel> : ''
                    }
                </div>
            </Button>

        </div>

    );
};

export default InsertFormula;
