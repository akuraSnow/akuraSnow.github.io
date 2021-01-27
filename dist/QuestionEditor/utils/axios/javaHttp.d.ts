import { Component } from 'react';
declare class JAVAHttp extends Component {
    private base;
    private options;
    private timeOutCallBack;
    constructor(props?: any);
    config(obj: any, callBack?: Function): Promise<unknown>;
    setConfig(type: any): {
        method: any;
        headers: {
            usertoken: string | null;
            Authorization: string;
        };
        timeout: any;
        url: any;
        params: any;
        data: any;
    };
    run(): Promise<unknown>;
    handleErr: (error: any) => void;
}
declare const _default: JAVAHttp;
export default _default;
