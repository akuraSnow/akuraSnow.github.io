// @ts-nocheck
import {Tips} from '../../../MessageTips';
import axios from 'axios';
import BaseConfig from './baseUrl';
import {
    Component
} from 'react';


interface HttpProps{

}

interface HttpState{

}

class Http extends Component<HttpProps, HttpState> {


    private base: any;

    private options: any;

    private timeOutCallBack: any;

    constructor(props?: any) {
        super(props);
        this.base = {
            baseUrl: BaseConfig.url(),
            type: ''
        };
        this.options = {
            url: null,
            params: null,
            data: null,
        };
        this.timeOutCallBack = undefined;
    }
    config(obj: any, callBack: Function) {
        this.options = obj;
        this.timeOutCallBack = callBack;
        return this.run();
    }
    setConfig(type: any) {
        return {
            // 加入权限
            method: type,
            headers: {
                usertoken: localStorage.getItem('userToken'),
                // Authorization: `bearer ${localStorage.getItem('userToken')}`,
                // Authorization: `Bearer 303a8708c2ee45ffb5ac2f9a5d44610b`,
                apptoken: 'RUFT'
            },
            // timeout: 20000,
            url: this.base.baseUrl + this.options.url,
            params: this.options.params, // Get的参数
            data: this.options.data // Post的参数
        };
    }
    run() {
        return new Promise((resolve, reject) => {
            axios
                .request(this.setConfig(this.options.type))
                .then(res => {
                    if (res.data.Status === 1) {
                        resolve(res);
                    } else {
                        Tips.close();
                        Tips.open({
                            message: `服务器连接错误,请重试！`,
                            type: 'fail',
                            callBack: () => {
                                resolve(res);
                            }
                        });
                    }
                })
                .catch(this.handleErr);
        });
    }
    handleErr = (error: any) => {
        Tips.close();
        if (error.response) {
            // 请求已发出，但服务器响应的状态码不在 2xx 范围内
            let {
                status,
                // data,
                // headers
            } = error.response;
            // token失效，重新登陆
            if (status === 401) {
                // Tips.open({
                //     'message': '登陆失效，请重新登陆',
                //     'type': 'fail',
                //     'callBack': () => {

                //     }
                // });
                // localStorage.removeItem('AdminUserId');
                // localStorage.removeItem('userToken');
                // localStorage.removeItem('AdminToken');
                // location.reload();
            }
            // 服务器异常
            else {
                Tips.open({
                    message: `服务器连接错误,请重试！`,
                    type: 'fail'
                });
            }
        } else {
            Tips.open({
                'message': '网络超时！',
                'type': 'fail'
            });
            if (typeof this.timeOutCallBack === 'function') {
                this.timeOutCallBack();
            }
        }
    }
}
export default new Http();