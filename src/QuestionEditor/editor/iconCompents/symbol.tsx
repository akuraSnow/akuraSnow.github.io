// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Tabs } from 'antd';
import _ from 'lodash';
import { Button } from '../components';
import { symbol } from '../toolbarIcon';
import DragModel from '../../../DragModel/index';
import { symbolList } from '../client';
import { Editor, Node, Transforms, createEditor } from 'slate';

import './iconCompents.less';


const { TabPane } = Tabs;


const SymbolIcon = (props) => {

    const [visible, setVisible] = useState(false);

    const [modalPosition, setModalPosition] = useState(props.modalPosition);

    useEffect(() => {

        setModalPosition(props.modalPosition);
        setVisible(props.modalPosition.visible);

    }, [props.modalPosition]);
    

    function insertIcon(value) {

        const { editor } = props;
        let selection = editor.selection;

        // Transforms.insertNodes(editor, value);

        console.error(value);

        if (value.type !== 'mention') {

            Transforms.insertText(editor, value.text);

        } else if (selection && selection.focus && selection.focus.path.length !== 3) {

            Transforms.insertNodes(editor, value);

            let { path } = selection.anchor;

            let newPath = [path[0], path[1] + 2];
            let newPositiong = {
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

        } else if (selection && selection.focus && selection.focus.path.length === 3 && Node.parent(editor, selection.anchor.path).ListItem) {
           
            Transforms.insertNodes(editor, value);

            // let selection = props.editor.selection;
            let { path } = selection.anchor;

            console.log(path);

            let newPath = [path[0], path[1], path[2] + 2];
            let newPositiong = {
                anchor: {
                    offset: 0,
                    path: newPath
                },
                focus: {
                    offset: 0,
                    path: newPath
                }
            };
            console.log('newPositiong===>', newPositiong);

            Transforms.setSelection(editor, newPositiong);
        }

    }

    function callback(e) {

        document.querySelector('.ant-tabs-card-content').scrollTop = 0;
        props.postion && props.postion({
            ...modalPosition,
            ActiveKey: e
        });
    }

    return (
        <div>
            <Button
                className={props.isFocuse ? 'tabbarIcon' : ''}
                active={false}
                style={{ width: '28px', height: '28px', textAlign: 'center', position: 'relative', top: '2px' }}
                onMouseDown={(event) => {
                    event.preventDefault();
                    props.isFocuse && setVisible(true);
                    props.isFocuse && props.setVisible && props.setVisible(true);
                    props.isFocuse && props.postion && props.postion({
                        ...modalPosition,
                        visible: true
                    });
                }}
            >
                <span style={{ display: 'inline-block', width: '28px', height: '28px', lineHeight: '25px' }}>
                    {symbol}
                    {/* <span style={{ fontSize: '10px', width: '27px', position: 'absolute', bottom: '-20px', left: '0px' }}>符号</span> */}
                </span>
            </Button>
            <div>
                {/* && props.isFocuse */}
                {
                    visible && props.isFocuse ? <DragModel
                        style={{
                            width: '400px',
                            height: '412px',
                            backgroundColor: '#fff',
                            // position: 'absolute' 
                            left: modalPosition.left,
                            top: modalPosition.top
                        }}
                        title={props.title}
                        noneFooter={true}
                        postion={(e: any) => props.postion && props.postion({
                            ...modalPosition,
                            ...e,
                            visible: visible
                        })}
                        onCancle={() => {
                            setVisible(false);
                            props.postion && props.postion({
                                left: 'calc(50% - 200px)',
                                top: 'calc(50vh - 207px)',
                                visible: false,
                                ActiveKey: '0'
                            });
                        }}
                    >
                        <div className="card-container">
                            <Tabs
                                defaultActiveKey={modalPosition.ActiveKey}
                                type="card"
                                tabPosition="left"
                                onChange={(e) => callback(e)}
                            >
                                {
                                    _.map(symbolList(), (symbolItem: any, index: any) => {
                                        return <TabPane 
                                            tab={symbolItem.label} 
                                            key={index}
                                        >
                                            <div 
                                                className="symbolContent"
                                            >
                                                {
                                                    _.map(symbolItem.content, (contentItem, i) => {
                                                        let str = null;
                                                        if (contentItem.fontSize) {
                                                            str = <span style={{ fontSize: `${contentItem.fontSize}px` }}>{unescape(contentItem.text)}</span>;
                                                        } else if (contentItem.type === 'mention') {
                                                            str = <img src={contentItem.character} alt="" />;
                                                        } else {
                                                            str = unescape(contentItem.text.replace(/\\u/g, '%u'));
                                                        }
                                                        return <div
                                                            className="symbolIcon"
                                                            key={i}
                                                            onClick={() => insertIcon(contentItem)}
                                                        >
                                                            <span>{str}</span>
                                                        </div>;
                                                    })
                                                }
                                            </div>
                                        </TabPane>;
                                    })
                                }
                            </Tabs>
                        </div>
                    </DragModel> : ''
                }
            </div>
        </div>
    );
};



export default SymbolIcon;
