import { Component } from 'react';
interface HttpProps {
}
interface HttpState {
}
declare class Http extends Component<HttpProps, HttpState> {
    private base;
    private options;
    private timeOutCallBack;
    constructor(props?: any);
    config(obj: any, callBack: Function): Promise<unknown>;
    setConfig(type: any): {
        method: any;
        headers: {
            usertoken: string | null;
            apptoken: string;
        };
        url: any;
        params: any;
        data: any;
    };
    run(): Promise<unknown>;
    handleErr: (error: any) => void;
}
declare const _default: Http;
export default _default;
