/**
 * author: huangyu
 * Comfirm消息提示组件
 */
import { Component } from 'react';
interface confirmChildProps {
    show: any;
    params: any;
    cancleText?: any;
    cancleHandle: Function;
}
interface confirmChildState {
    showAni: any;
    loading: boolean;
}
export default class ConfirmChild extends Component<confirmChildProps, confirmChildState> {
    constructor(props: confirmChildProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentWillUnmount(): void;
    okHandle: () => void;
    cancleHandle: () => void;
    render(): JSX.Element;
}
export {};
