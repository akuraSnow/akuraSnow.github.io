// @ts-nocheck
import React, {useState, useEffect, useRef, useCallback} from 'react';
import { Spin, Tabs } from 'antd';
import _ from 'lodash';
import { Button } from '../components';
import { insertFormula } from '../toolbarIcon';
import DragModel from '../../../DragModel/index';
import { symbolList } from '../client';
import { Editor, Node, Transforms, createEditor } from 'slate';

import './iconCompents.less';
import { identifyFormulaFromImage } from '../../services/EditdQuestion';



// import { Tips } from '../../index';
import { Tips } from '../../../MessageTips/index';


const { TabPane } = Tabs;

let _visible = true;


const InsertFormula = (props) => {

    const [visible, setVisible] = useState(false);
    const [modalPosition, setModalPosition] = useState(props.modalPosition);
    const [previewImage, setPreviewImage] = useState(false);
    const [identifyResult, setIdentifyResult] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selection, setSelection] = useState(null);
    const [isParseInput, setIsParseInput] = useState(false);

    const parseImgRef = useRef();

    function focusHandler({ target }) {
        const className = target.getAttribute('class');
        if (className === 'parse-input') {
            setIsParseInput(true);
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

        // console.log('props.modalPosition==>', props.modalPosition);

        setModalPosition(props.modalPosition);
        // setVisible(props.modalPosition.visible);

    }, [props.modalPosition]);

    useEffect(() => {
        if (props.editor.selection) {
            setSelection(props.editor.selection);
        }
    }, [props.editor.selection]);


    useEffect(() => {
        if (visible) {
            parseImgRef.current.addEventListener('paste', (e) => {

                // console.log('e===>', e);
                if (e.clipboardData) {
                    if (previewImage) {
                        setPreviewImage(null);
                        setIdentifyResult(null);
                    }
                    const { items } = e.clipboardData;
                    if (items) {
                        const item = items[0];
                        if (item && item.kind === 'file' && item.type.indexOf('image') !== -1) {
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
                                            if (resultsLatex.length > 1) {
                                                let latexRes = `\\begin{aligned}&\\begin{array}{l}${resultsLatex.join(
                                                    '\\\\',
                                                )}\\end{array}\\end{aligned}`;
                                                let convertResultEl = document.createElement('span');
                                                convertResultEl.innerText = latexRes;
                                                convertResultEl.style.display = 'none';
                                                convertResultEl.setAttribute('id', 'convertResultEl');
                                                document.body.appendChild(convertResultEl);
                                                MathJax.Hub.Typeset(
                                                    document.getElementById('convertResultEl'),
                                                    () => {
                                                        const mmlResult = document
                                                            .querySelector(
                                                                '#convertResultEl .MathJax_Display .MathJax',
                                                            )
                                                            .getAttribute('data-mathml');
                                                        setIdentifyResult([{ value: mmlResult }]);
                                                        document.body.removeChild(
                                                            document.getElementById('convertResultEl'),
                                                        );
                                                    },
                                                );
                                            } else {
                                              setIdentifyResult(_visible ? resultsMML : null);
                                            }
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
                                            setPreviewImage(_visible ? html : null);
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

            setTimeout(() => {
                console.log(document.getElementById('a'));
                /* eslint-disable */
                document.getElementById('a').focus();
            }, 100);
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
        setIsParseInput(false);

        props.changeFocuse(false);

        props.isFocuse && props.postion && props.postion({
            ...modalPosition,
            visible: false
        });
    }

    return (
        <div>
            <Button
                className={props.isFocuse ? 'tabbarIcon' : ''}
                active={false}
                style={{ width: '24px', height: '24px', textAlign: 'center', position: 'relative', top: '0px' }}
                onMouseDown={(event) => {
                    event.preventDefault();

                    if (props.isFocuse) {
                        _visible = true;
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
                <span style={{ display: 'inline-block', width: '24px', height: '24px', lineHeight: '24px' }}>
                    {insertFormula}
                    <span className="title" style={{ width: `100px`, height: '20px', lineHeight: '20px' }}>
                        {props.title}
                    </span>
                    {/* <span style={{ fontSize: '10px', width: '27px', position: 'absolute', bottom: '-20px', left: '0px' }}>符号</span> */}
                </span>


            </Button>
            <div>
                {/* && props.isFocuse */}

                {
                    /* eslint-disable */
                    visible && props.isFocuse ? <DragModel
                        style={{
                            width: '1000px',
                            height: '500px',
                            left: modalPosition.left,
                            top: modalPosition.top
                        }}
                        title="从图片插入公式"
                        onCancle={() => {
                            setVisible(false);
                            setLoading(false);
                            _visible = false;
                            props.isFocuse && props.postion && props.postion({
                                ...modalPosition,
                                visible: false,
                                isCloseMedoal: true
                            });
                            setIdentifyResult(null);
                        }}
                        onOk={() => onOk()}
                        isModals={true}
                    >
                        <div className="parse-body identifySpin">
                            <Spin spinning={loading} tip="正在转换中...">
                                <textarea ref={parseImgRef} rows="10" id="a" className={'parse-input'} onFocus={() => {
                                    setIsParseInput(true)
                                }} onBlur={() => {
                                    setIsParseInput(false)
                                }} />
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
        </div>

    );
};



export default InsertFormula;
