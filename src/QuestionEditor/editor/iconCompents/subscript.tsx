// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Menu, Dropdown } from 'antd';
import _ from 'lodash';
import { Button, Icon, Toolbar } from '../components';
import { lowerTriangle, underline } from '../toolbarIcon';
import { Editor, Transforms, createEditor } from 'slate';

const markList = [
    {
        name: 'UnderlineSingle',
        class: 'Underline'
    },
    {
        name: 'UnderlineDouble',
        class: 'DoubleUnderline'
    },
    {
        name: 'UnderlineDotted',
        class: 'DashedLine'
    },
    {
        name: 'UnderlineWave',
        class: 'WavyLine'
    },
];

const iconList = [
    'UnderlineSingle',
    'UnderlineDouble',
    'UnderlineDotted',
    'UnderlineWave'];

// @ts-ignore
const toggleMark = (editor, format) => {
    const isActive = isMarkActive(editor, format);

    _.map(markList, (formatItem) => {
        Editor.removeMark(editor, formatItem.name);
    });

    if (isActive) {
        Editor.removeMark(editor, format);
    } else {
        Editor.addMark(editor, format, true);
    }
};

// 判断是否包含该样式
const isMarkList = (editor, formatList) => {
    const marks = Editor.marks(editor);
    let a = _.filter(formatList, (o) => {
        return marks && marks[o];
    });

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

    return marks ? a && a.length > 0 : false;
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


const SubscriptButton = (props) => {

    const [value, setValue] = useState(props.value);

    const [format, setFormat] = useState('UnderlineSingle');
    const [isActive, setIsActive] = useState(false);
    const [visible, setVisible] = useState(false); 

    
    function onClick({ key }) {
        
        // props.onKeyDown(key);
        toggleMark(props.editor, key);
        setFormat(key);
        if (key !== format) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
        setVisible(false);

    }

    const menu = (
        <Menu onClick={onClick}>
            {
                _.map(markList, (formatItem) => {
                    let obj = Editor.marks(props.editor);

                    return <Menu.Item key={formatItem.name} style={{ background: obj && obj[formatItem.name] ? '#F5F5F5' : '#fff' }}>
                        <div className={formatItem.class}></div>
                    </Menu.Item>;
                })
            }
        </Menu>
    );

    return (
        <div className="LowerTriangle">
            <Button
                className="tabbarIcon"
                style={{ borderRadius: '2px 0px 0px 2px' }}
                active={isMarkList(props.editor, iconList)}
                visible={visible}
                onMouseDown={(event) => {
                    event.preventDefault();
                    toggleMark(props.editor, format);

                    if (isMarkList(props.editor, iconList)) {
                        setIsActive(true);
                    } else {
                        setIsActive(false);
                    }
                    setFormat(format);

                }}
            >
                {underline}
                <span className="title" style={{ width: `${props.title && props.title.length * 18}px` }}>
                    {props.title}
                </span>
            </Button>
            <Button
                className="tabbarIcon"
                // active={}
                style={{ 
                    width: '12px', 
                    textAlign: 'center', 
                    position: 'relative', 
                    top: '-8px', 
                    borderRadius: '0px 2px 2px 0px', 
                    background: visible ? '#BFBFBF' : isMarkList(props.editor, iconList) ? '#F5F5F5' : 'white' 
                }}
                onMouseDown={(event) => {
                    event.preventDefault();

                }}
            >
                <Dropdown overlay={menu} trigger={['click']} onVisibleChange={(visible) => {

                    setVisible(visible);
                }}>
                    <span className="trigger">
                        {lowerTriangle}
                    </span>
                </Dropdown>
            </Button>
        </div>
    );
};



export default SubscriptButton;
