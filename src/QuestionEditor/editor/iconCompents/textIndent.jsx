import React, { useState } from 'react';
import { Menu, Dropdown } from 'antd';
import _ from 'lodash';
import { Button, Icon, Toolbar } from '../components';
import { Editor, Transforms, createEditor } from 'slate';

import {
    iconObj,
} from '../client';

const TextIndentList = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const toggleBlock = (editor, format, num, itemList) => {

    // 获取之前设置的值
    let rawData = isBlockActiveNum(editor, format, itemList);

    Transforms.setNodes(editor, {
        [format]: num,
    });
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


const TextIndentBtn = (props) => {

    const [value, setValue] = useState(props.value);
    function onClick({ key }) {

        const { editor, format, itemList } = props;
        toggleBlock(editor, format, key, itemList);
    }

    const menu = (
        <Menu onClick={onClick}>
            {
                props.itemList.map((indentItem, index) => {

                    return <Menu.Item 
                        key={indentItem} 
                        style={{ 
                            background: `${props.active}` === `${indentItem}` ? '#F5F5F5' : '#fff', 
                            fontWeight: `${props.active}` === `${indentItem}` ? '700' : '' 
                        }}>
                        <div className="MenuBtn" >{indentItem}{props.unit}</div>
                    </Menu.Item>;
                })
            }
        </Menu>
    );

    return (
        <div>
            <Button
                className="tabbarIcon"
                active={props.active !== props.itemList[0] && props.active !== '0'}
                onMouseDown={(event) => {
                    event.preventDefault();

                }}
            >
                <Dropdown overlay={menu} trigger={['click']}>
                    <span>
                        {props.icon}
                        <span style={{ position: 'relative', bottom: '7px' }} className="trigger">{iconObj['lowerTriangle']}</span>
                        <span className="title" style={{ width: `${props.title && props.title.length * 18}px` }}>
                            {props.title}
                    
                        </span>
                    </span>
                </Dropdown>
            </Button>
        </div>
    );
};



export default TextIndentBtn;
