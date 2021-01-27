/**
 * author: huangyu
 * 暂无数据组件
 */
import React, { Component } from 'react';
// @ts-ignore
import { styles } from './NoData.less';

interface NoDataProps{
    show: any;
    message: any;
}

interface NoDataState{
    showAni: boolean
}

export default class NoData extends Component<NoDataProps, NoDataState> {
    constructor(props: NoDataProps) {
        super(props);
        this.state = {
            showAni: false
        };
    }
    componentDidMount() {
        let { show } = this.props;
        this.setState({
            showAni: show
        });
    }
    render() {
        let { message } = this.props;
        return (
            <div className="no-data">
                <div className="img"></div>
                <p>{message ? message : '亲~没找到符合条件的内容'}</p>
                {/* <span className="desc">没有找到符合条件的内容</span> */}
            </div>
        );
    }
}
