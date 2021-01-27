/**
 * author: huangyu
 * 暂无数据组件
 */
import { Component } from 'react';
interface NoDataProps {
    show: any;
    message: any;
}
interface NoDataState {
    showAni: boolean;
}
export default class NoData extends Component<NoDataProps, NoDataState> {
    constructor(props: NoDataProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
