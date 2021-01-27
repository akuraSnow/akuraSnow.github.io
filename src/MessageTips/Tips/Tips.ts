/*
 * @Author: your name
 * @Date: 2019-11-06 09:38:46
 * @LastEditTime: 2019-11-06 10:00:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\components\MessageTips\Tips\Tips.ts
 */
/**
 * author: huangyu
 * Tips消息提示组件js
 */
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import TipsChild from './Tip';
class Tips {

    private show: boolean = true;

    private root: any;

    private popup: any;

    open(params: any) {
        this.show = true;
        this.root = React.createElement(TipsChild, {
            params,
            show: true,
            cancleHandle: () => {
                this.close();
            }
        });
        let hasTips = document.getElementById('tips');
        if (!hasTips) {
            this.popup = document.createElement('div');
            this.popup.setAttribute('id', 'tips');
            document.body.appendChild(this.popup);
            ReactDOM.render(this.root, this.popup);
        }
    }
    close() {
        if (!!document.getElementById('tips')) {
            ReactDOM.unmountComponentAtNode(this.popup);
            document.body.removeChild(this.popup);
        }
    }
}
export default new Tips();