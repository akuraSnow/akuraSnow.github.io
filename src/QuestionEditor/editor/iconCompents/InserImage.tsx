// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { Select, Dropdown, Menu, Slider } from 'antd';

import { Editor, Transforms, Range, Node, createEditor } from 'slate';
// import { Editor, Transforms, Range, createEditor, Path, Node } from 'slate'
import _ from 'lodash';
import {

    useSelected,
    useFocused,
    useSlate,
    ReactEditor,
} from 'slate-react';
import { Button, Button2, Button3 } from '../components';

// import Sliders from '../components/slider1';

import enlarge from '../Icon/icon-enlarge.png';
import narrow from '../Icon/icon-narrow.png';
import deletes from '../Icon/icon-deletes.png';

const toggleImage = (editor, value, isADD) => {

    if (editor.selection) {
        let a = Node.parent(editor, editor.selection.anchor.path);
        let b = JSON.parse(JSON.stringify(a));
        let pictureUrl = a.character;
        let nImg = new Image();
        nImg.src = pictureUrl;

        nImg.onload = function () {
            let nWidth = nImg.width;

            Transforms.setNodes(
                editor,
                { 'width': nWidth * value, scale: value },
                { match: (n) => n.type === 'mention', split: true }
            );

        };
    }

};


const deletesMark = (editor, format, isADD) => {
    const isActive = isMarkActive(editor, format);


    let a = Node.parent(editor, editor.selection.anchor.path);
    let b = JSON.parse(JSON.stringify(a));

    Transforms.removeNodes(editor, {
        match: (n) => n.type === 'mention'
    });

};

const isMarkActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
};

const InserImage = (props) => {


    const { format, icon, add } = props;
    const ref = useRef();
    const editor = useSlate();

    const [cacheSelection, setCacheSelection] = useState({});
    const [showIcon, setShowIcon] = useState(false);
    

    const [value, setValue] = useState(null);

        
    useEffect(() => {

        const el: any = ref.current;

        const { selection } = editor;
        let a: any = {};
        if (!el) {
            return;
        }

        if (selection && Range.isCollapsed(selection)) {
            a = Node.parent(editor, selection.anchor.path);
        }

        if (!props.isFocuse) {

            el.style.display = 'none';
            setShowIcon(false);

            // console.log('props.isFocuse==>', props.isFocuse);

            
        } else if (a.mediaType === 'IMAGE') {

            // el.style.display = 'flex';
            // setShowIcon(true);
            // setImageShow();
        }
    
    }, [props.isFocuse]);


    useEffect(() => {
        setImageShow();

    }, [props.isFocuse, JSON.stringify(editor.selection)]);


    useEffect(() => {

        const el: any = ref.current;

        if (!el) {
            return;
        }

        window.addEventListener('scroll', function() {
            
            const { selection } = editor;
            let a: any = {};
            if (!el) {
                return;
            }
    
            if (selection) {
                a = Node.parent(editor, selection.anchor.path);
            }
    
            if (a.mediaType === 'IMAGE') {
                const domSelection: any = window.getSelection();
                const domRange = domSelection.getRangeAt(0);
                const rect = domRange.getBoundingClientRect();
        
                el.style.position = 'fixed';
                el.style.opacity = 1;
                el.style.zIndex = 0;
                el.style.display = 'flex';
                setShowIcon(true);
                if (rect.top > 0) {
    
                    let top = rect.top + window.pageYOffset - el.offsetHeight + 30;
                    let newTop = top >= 110 ? top : -100;
                    el.style.top = `${newTop}px`;
                    el.style.left = `${rect.left +
                        window.pageXOffset -
                        el.offsetWidth / 2 +
                        rect.width / 2 + 74}px`;
                }

            }
        }, true);
    
    }, []);

    const setImageShow = _.throttle(function setImageShow() {

        const el: any = ref.current;
        // const editor = useSlate();
        const { selection } = editor;
        let a: any = {};
        if (!el) {
            return;
        }

        if (selection && Range.isCollapsed(selection)) {
            a = Node.parent(editor, selection.anchor.path);
        }

        if (a.mediaType === 'IMAGE') {
            setCacheSelection(selection);
            setValue(a.scale ? Number(a.scale) : 1);
        }

        // console.log('b===>', a);

        if (
            (!selection ||
                !ReactEditor.isFocused(editor) ||
                Range.isCollapsed(selection)
                // Editor.string(editor, selection) === '' ||
                // Editor.string(editor, selection) !== ''
            ) && a.mediaType !== 'IMAGE' || !ReactEditor.isFocused(editor)
        ) {

            el.removeAttribute('style');
            el.style.display = 'none';
            setShowIcon(false);

            // a = {};
            return;
        }

        // console.log(ref);

        // console.log('a===>', a);

        const domSelection = window.getSelection();
        const domRange = domSelection.getRangeAt(0);
        const rect = domRange.getBoundingClientRect();


        // console.log('rect.top ===>', rect.top);
        if (rect.top > 0 && a.mediaType === 'IMAGE') {
            
           
            el.style.position = 'fixed';
            el.style.zIndex = 0;
            el.style.opacity = 1;
            el.style.display = 'flex';
            setShowIcon(true);

            let top = rect.top + window.pageYOffset - el.offsetHeight + 30;
            let newTop = top >= 110 ? top : -100;
            // console.log('newTop===>', newTop);

            el.style.top = `${newTop}px`;

            el.style.left = `${rect.left +
                window.pageXOffset -
                el.offsetWidth / 2 +
                rect.width / 2 + 74}px`;

        } else if (rect.top === 0 && a.mediaType === 'IMAGE') {
            // setShowIcon(true);

            // let { path } = selection.anchor;
            // let newPath = [];

            // if (path.length === 3) {
            //     newPath = [path[0], path[1] + 1];

            // } else if (path.length === 4) {
            //     newPath = [path[0], path[1], path[2] + 1];
            // }
            
            // let newPositiong = {
            //     anchor: {
            //         offset: 0,
            //         path: newPath
            //     },
            //     focus: {
            //         offset: 0,
            //         path: newPath
            //     }
            // };

            // Transforms.setSelection(editor, newPositiong);
        }

    }, 1000);
    


    return (

        <div
            ref={ref}
            className="editingImg"
        >
            <Button2
                active={isMarkActive(editor, 'width')}
                onMouseDown={event => {
                    event.preventDefault();
                    // toggleImage(editor, 'width', 'd');
                    let newValue = (value * 10 - 1) / 10;
                    let showValue = newValue >= 0.1 ? newValue : 0.1;
                    setValue(showValue);

                    toggleImage(editor, showValue);
                }}
            >
                <img src={narrow} alt="" />
            </Button2>


            {/* <Button3
                // active={isMarkActive(editor, 'widthMore')}
                onMouseDown={event => {
                    event.preventDefault();
                    toggleImage(editor, 'widthMore', 'add');
                }}
            >

            </Button3> */}
            <Button2
                // width={100}
                style={{
                    width: '20px',
                    margin: '0 15px'
                }}
                active={isMarkActive(editor, 'widthMore')}
                onMouseDown={event => {
                    event.preventDefault();
                    // toggleImage(editor, 'widthMore', 'add');
                    setValue(1);

                    toggleImage(editor, 1);
                }}
            >

                <div className="Original buttonTitle">
                    1:1
                </div>

            </Button2>

            <Button2
                active={isMarkActive(editor, 'widthMore')}
                onMouseDown={event => {
                    event.preventDefault();
                    // toggleImage(editor, 'widthMore', 'add');
                    let newValue = (value * 10 + 1) / 10;
                    let showValue = newValue <= 2 ? newValue : 2;
                    setValue(showValue);

                    toggleImage(editor, showValue);
                }}
            >
                <img src={enlarge} alt="" />
            </Button2>


            <span className="Separate1"></span>

            <Button2
                active={isMarkActive(editor, 'width')}
                onMouseDown={event => {
                    event.preventDefault();
                    deletesMark(editor, 'width', 'd');
                }}
            >
                <img src={deletes} alt="" />
            </Button2>
        </div>

    );
};



export default InserImage;
