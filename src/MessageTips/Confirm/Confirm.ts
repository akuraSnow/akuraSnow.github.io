/**
 * author: huangyu
 * Comfirm消息提示组件js
 */
import React from 'react';
// @ts-ignore
import ReactDOM from 'react-dom';
import ConfirmChild from './ConfirmChild';
class Confirm {

    public show: boolean = true;

    public root: any;

    public popup: any;

    open(params: any) {
        this.show = true;
        this.root = React.createElement(ConfirmChild, {
            params,
            show: true,
            cancleHandle: () => {
                this.close();
            }
        });

        this.popup = document.createElement('div');
        this.popup && document.body.appendChild(this.popup);
        ReactDOM.render(this.root, this.popup);
    }
    close() {
        ReactDOM.unmountComponentAtNode(this.popup);
        this.popup && document.body.removeChild(this.popup);
        this.show = false;

    }
}
export default new Confirm();
