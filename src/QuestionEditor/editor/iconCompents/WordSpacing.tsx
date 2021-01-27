// @ts-nocheck
import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Button } from '../components';
import DragModel from '../../../DragModel/index';
import { Input } from 'antd';
import { Editor, Transforms} from 'slate';
import './iconCompents.less';
import {
    useSelected,
    useFocused,
    useSlate,
} from 'slate-react';


const WordSpacing = (props) => {


    const [visible, setVisible] = useState(false);
    const [value, setValue] = useState(2);
    const [editor, setEditor] = useState(props.editor);
    const [selection, setSelection] = useState(null);


    useEffect(() => {

        // console.log(props.editor.selection);

        if (props.editor.selection) {
            setSelection(props.editor.selection);
        }

    }, [props.editor.selection]);

    useEffect(() => {

        console.log(props.editor);
        // setEditor(props.editor);
        // if (!!props.editor.selection) {
        //     setEditor(props.editor);
        // }

    }, [props.editor]);
    
    useEffect(() => {

        // console.log(props.id);
        // setEditor(props.editor);
        // if (!!props.editor.selection) {
        //     setEditor(props.editor);
        // }

    }, [props.id]);

    function onClick({ key }) {

        props.onKeyDown(key);
    }

    function onOk() {

        props.editor.selection = selection;
        Transforms.setSelection(props.editor, selection);
        Editor.addMark(props.editor, 'WordSpacing', value);
        console.log(props.editor);
        setVisible(false);

    }

    function focusInput(id) {

        console.log(id);

        document.getElementById(id).focus();

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
                <div className="tabbarIcon1" style={{ display: visible ? 'block' : 'none' }}>

                    {
                        visible ? <DragModel
                            style={{
                                width: '400px',
                                height: '203px'
                            }}
                            title="字间距"
                            onCancle={() => {
                                setVisible(false);
                            }}
                            onOk={() => onOk()}
                        >
                            <div className="content-body">
                                <div className="content-label">
                                    文字宽度:
                                </div>
                                <div onClick={() => focusInput(props.id)}>
                                    <Input
                                        suffix="字符"
                                        id={props.id}
                                        value={value}
                                        aotufocuse="true"
                                        onChange={(e) => {

                                            console.log(e.target.value);
                                            props.changeVal(e.target.value);
                                            setValue(e.target.value);

                                            console.log(editor);
                                        }}
                                    />
                                </div>
                            </div>
                        </DragModel> : ''
                    }
                </div>
            </Button>
        </div>

    );
};



export default WordSpacing;
