// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { Select, Dropdown, Menu } from 'antd';
import _ from 'lodash';
import { Button1 } from '../components';
import { Editor, Transforms, createEditor } from 'slate';

import {
    fontSizeObj,
} from '../client';

const TextIndentList = ['宋体', '楷体', 'TIMES NEW ROMAN'];
const { Option } = Select;

const toggleMark = (editor, format, value) => {
    // const isActive = isMarkActive(editor, format);


    Editor.addMark(editor, format, value);
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


const MarkFontBtn = (props) => {

    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    function onClickMenu({ key }) {

        const { editor, format } = props;

        let keys = key.split('#');
        toggleMark(editor, format, keys[0]);

        setValue(keys[1]);
        setVisible(false);

    }

    useEffect(() => {

        let obj = Editor.marks(props.editor);

        let val = '';

        if (!props.defluteVal) {
            val = obj && obj[props.format] && props.fontObj[obj[props.format]];
        } else {
            val = obj && obj[props.format] ? props.fontObj[obj[props.format]] : props.defluteVal.content;
        }

        setValue(val);

    }, [JSON.stringify(props.editor)]);

    // function handleChange(e) {

    //     // setValue(e);
    //     // toggleMark(props.editor, props.format, e);
    // }

    
    const menu = (
        <Menu onClick={(e) => onClickMenu(e)}>
            {
                _.map(props.fontList, (e, index) => {
         
                    return <Menu.Item 
                        key={`${e.value}#${e.content}`} 
                        style={{ 
                            background: value === e.content ? '#F5F5F5' : '#fff',
                            fontWeight: value === e.content ? 'bolder' : '400'
                        }}>
                        <div>{e.content}</div>
                    </Menu.Item>;
                })
            }
        </Menu>
    );

    return (
        <div>
            <Button1
                className="markFonts"
                active={menu}
                onMouseDown={(event) => {
                    event.preventDefault();

                }}
            >

                <Dropdown 
                    overlay={menu} 
                    trigger={['click']} 
                    onVisibleChange={(visible) => {
                        setVisible(visible);
                    }}
                >
                    <span>
                        <span className="inputBox" 
                            style={{ 
                                width: props.width ? `${props.width}px` : '98px',
                                borderColor: visible ? '#FE8D29' : '#D9D9D9'
                            }}
                        >
                            {value}

                        </span>
                        <span className="title" style={{ width: `${props.title && props.title.length * 18}px` }}>
                            {props.title}
                        </span>
                    </span>

                </Dropdown>
            </Button1>
        </div>
    );
};



export default MarkFontBtn;
