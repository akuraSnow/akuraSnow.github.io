// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown, Popconfirm } from 'antd';
import _ from 'lodash';
import { Button } from '../components';
import { lowerTriangle, order } from '../toolbarIcon';
import { Editor, Transforms } from 'slate';
import { CirclePicker } from 'react-color';
import { colorList } from '../client';

const listOrder = [
    '1',
    'A',
    'a',
    'I',
    'i',
];

const toggleMark = (editor, format, value) => {
    const isActive = isMarkActive(editor, format);


    Editor.addMark(editor, format, value);
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



const MarkColorBtn = (props) => {

    const [visible1, setVisible1] = useState(false); 
    const [color, setColor] = useState('black');
 
    useEffect(() => {

        setColor(props.color);

    }, [JSON.stringify(props.color)]);

    function handleVisibleChange(e) {

        setVisible1(e);
    }

    function handleChange(value) {

        // console.log(value);
        let color = value.hex;
        // setColor(color);

        toggleMark(props.editor, props.format, color);
        setVisible1(false);

        props.changeColor(color);

    }

    const text = <div className="pickerContent">
        <CirclePicker 
            colors={colorList.map((e) => `#${e}`)}
            // width="40"
            circleSize={35}
            color={color} 
            onChange={(e) => handleChange(e)} 
        />
    </div>;


    return (
        <div className="LowerTriangle" style={{ position: 'relative', top: '-8px' }}>
            <Button
                className="tabbarIcon"
                style={{ borderRadius: '2px 0px 0px 2px' }}
                active={false}
                visible={visible1}
                onMouseDown={(event) => {
                    event.preventDefault();
                    // toggleMark(props.editor, format);
                    toggleMark(props.editor, props.format, color);
                }}
            >
                <span className="colorBtns">
                    <span>A</span>
                    <p className="colorShow"
                        style={{ background: color }}
                    ></p>
                </span>

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
                    // top: '-8px',
                    borderRadius: '0px 2px 2px 0px',
                    background: visible1 ? '#BFBFBF' : 'white'
                }}
                onMouseDown={(event) => {
                    event.preventDefault();
                }}
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
 
            </Button>


        </div>
    );
};



export default MarkColorBtn;
