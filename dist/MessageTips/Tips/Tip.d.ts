/**
 * author: huangyu
 * Tips消息提示组件
 */
import { Component } from 'react';
import './Tips.less';
interface TipsChildProps {
    show: any;
    cancleHandle: any;
    params: any;
    endTime?: number;
}
interface TipsChildState {
    showAni: boolean;
    endTime: number;
}
export default class TipsChild extends Component<TipsChildProps, TipsChildState> {
    constructor(props: TipsChildProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
