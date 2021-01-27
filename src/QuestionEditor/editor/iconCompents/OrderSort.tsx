// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Popconfirm } from 'antd';
import _ from 'lodash';
import { Button } from '../components';
import { lowerTriangle, order } from '../toolbarIcon';
import { Editor, Transforms, createEditor } from 'slate';

const listOrder = [
    '1',
    'A',
    'a',
    'I',
    'i',
];

const LIST_TYPES = ['NumberedList', 'BulletedList'];
const toggleSort = (editor, format, num) => {

    const isActive = isBlockActive(editor, format);
    const isList = LIST_TYPES.includes(format);

    Transforms.unwrapNodes(editor, {
        match: n => n[format],
        split: true,
    });

    Transforms.setNodes(editor, {
        'ListItem': isList ? true : format,
    });

    if (num) {
        const block = { [format]: num, children: [] };
        Transforms.wrapNodes(editor, block);
    }
};


// 判断是否包含该样式
const isMarkList = (editor, formatList) => {
    
    const [match] = Editor.nodes(editor, {
        match: n => {
            let isMark = false;
            _.map(formatList, (e) => {
                if (n['NumberedList'] === e) {
                    isMark = true;
                }
            });

            return isMark;
        },
    });

    return !!match;

};


const isBlockActive = (editor, format) => {

    let markType = 'None';
    const [match] = Editor.nodes(editor, {
        match: n => {
            let isMark = false;
            _.map(listOrder, (e) => {
                if (n['NumberedList'] === e) {
                    isMark = true;
                    markType = e;
                }
            });

            return isMark;
        },
    });

    return !!match ? markType : false;
};


const OrderSortButton = (props) => {

    const [value, setValue] = useState(props.value);

    const [format, setFormat] = useState('1');
    const [isActive, setIsActive] = useState(false);
    const [visible, setVisible] = useState(false); 
    const [visible1, setVisible1] = useState(false); 

    const [marks, setMarks] = useState(''); 

    useEffect(() => {

        setFormat(props.sortFormat);

    }, [props.sortFormat]);

    useEffect(() => {

        let marksStr = '';
        const [match] = Editor.nodes(props.editor, {
            match: n => {
                let isMark = false;
                _.map(listOrder, (e) => {
                    if (n['NumberedList'] === e) {
                        isMark = true;
                    }
                });
    
                return isMark;
            },
        });

        if (match && match.length > 0) {
            marksStr = match[0]['NumberedList'];
        }

        setMarks(marksStr);
        
    }, [JSON.stringify(props.editor)]);


    function handleVisibleChange(e) {

        console.log(e);
        setVisible1(e);
    }

    const text = <div id="orderContent">
        <div className="listTitle">有序列表库</div>
        <div className="listContent">
            {
                _.map(listOrder, (listItem, index) => {

                    let contentObj = {};

                    if (marks === listItem) {
                        contentObj = {
                            borderColor: '#FE8D29',
                            background: 'rgba(254, 141, 41, 0.2)'
                        };
                    }

                    return <div
                        className="listItem"
                        key={index}
                        style={contentObj}
                        onClick={() => {

                            setVisible1(false);
                            props.setFormat(listItem);
                            toggleSort(props.editor, props.format, listItem);
                        }}
                    >
                        <ol type={listItem}>
                            <li><div></div></li>
                            <li><div></div></li>
                            <li><div></div></li>
                        </ol>
                    </div>;
                })
            }
            <div 
                style={marks === '' ? { 
                    borderColor: '#FE8D29',
                    background: 'rgba(254, 141, 41, 0.2)'
                } : {}}
                className="listItem nullItem" 
                onClick={() => {
                    props.setFormat('');
                    toggleSort(props.editor, props.format, '');
                    setVisible1(false);
                }}
            >
                无
            </div>
        </div>
    </div>;


    return (
        <div className="LowerTriangle">
            <Button
                className="tabbarIcon"
                style={{ borderRadius: '2px 0px 0px 2px' }}
                active={isMarkList(props.editor, listOrder)}
                visible={visible1}
                onMouseDown={(event) => {
                    event.preventDefault();
                    // toggleMark(props.editor, format);

                    console.error(format);
                    toggleSort(props.editor, props.format, format);

                    if (isMarkList(props.editor, listOrder)) {
                        setIsActive(true);
                    } else {
                        setIsActive(false);
                    }
                    // setFormat(format);

                }}
            >
                {order}
                <span className="title" style={{ width: `${props.title && props.title.length * 18}px` }}>
                    {props.title}
                </span>
            </Button>

            <Button
                className="tabbarIcon orderDown"
                // active={}
                style={{
                    width: '12px',
                    textAlign: 'center',
                    position: 'relative',
                    top: '-8px',
                    borderRadius: '0px 2px 2px 0px',
                    background: visible1 ? '#BFBFBF' : isMarkList(props.editor, listOrder) ? '#F5F5F5' : 'white'
                }}
                onMouseDown={(event) => {
                    event.preventDefault();

                }}
                // onMouseDown={(event) => {
                //     event.preventDefault();

                //     let orderContent = document.getElementById('orderContent');

                //     if (!orderContent || (orderContent && !orderContent.contains(event.target))) {
                //         setVisible(!visible);
                //     }
                // }}
            >
                <Popconfirm
                    placement="bottomLeft"
                    openClassName="listContents"
                    visible={visible1}
                    onVisibleChange={(e) => handleVisibleChange(e)}
                    title={text}
                    arrowPointAtCenter="true"
                    okText=" "
                    cancelText=" "
                >
                    <span className="trigger">
                        {lowerTriangle}
                    </span>
                </Popconfirm>
                {/* <Dropdown 
                    overlay={menu} 
                    trigger={['click']} 
                    visible={visible}
                    onVisibleChange={(visible) => {

                        // setVisible(visible);
                    }}
                >
                    <span style={{ display: 'inline-block', height: '25px' }}>
                        {lowerTriangle}
                    </span>
                </Dropdown> */}
            </Button>


        </div>
    );
};



export default OrderSortButton;
