/**
 * author: huangyu
 * Comfirm消息提示组件
 */
import React, { Component } from 'react';
import { Button } from 'antd';
// @ts-ignore
import styles from './Confirm.less';

interface confirmChildProps{
    show: any;
    params: any;
    cancleText?: any;
    cancleHandle: Function;
}

interface confirmChildState{
    showAni: any;
    loading: boolean
}

export default class ConfirmChild extends Component<confirmChildProps, confirmChildState> {
    constructor(props: confirmChildProps) {
        super(props);
        this.state = {
            showAni: false,
            loading: false
        };
    }
    componentDidMount() {
        let { show } = this.props;
        let that = this;
        this.setState({
            showAni: show
        });

        window.addEventListener("popstate", function() {

            let box = document.getElementById('modalBox');
            if (box) {
                that.props && that.props.cancleHandle();
            }
        }, false);

    }

    componentWillReceiveProps(nextProps: any) {
        let { show } = nextProps;
        this.setState({
            showAni: show
        });
    }
    componentWillUnmount() {
        // 重写组件的setState方法，直接返回空\
        let that = this;


        this.setState = () => {
            return;
        };

    }


    okHandle = () => {
        this.props.params.onOk();
        this.setState({
            showAni: false,
            loading: true
        }, () => {
            setTimeout(() => {
                this.setState({
                    loading: false
                }, () => {
                    this.props.cancleHandle();
                })

            }, 200);
        });
    }
    cancleHandle = () => {
        let { params } = this.props;
        this.setState({
            showAni: false
        }, () => {
            setTimeout(() => {
                let callBack = typeof params.cancle === 'function' ? params.cancle : () => {};
                callBack();
                this.props.cancleHandle();
            }, 200);
        });
    }
    render() {
        let { params } = this.props;
        let { showAni, loading } = this.state;
        return (
            <div id="modalBox">
                <div className={`${styles.modalContainer} ${showAni ? styles.animate : styles.leave}`}>
                    <div className={styles.modalBox}>
                        {/* <div className="modal-header">消息提示</div> */}
                        <div className={styles.modalContent}>
                            <h2>{params.content}</h2>
                            <p>{params.desc}</p>
                        </div>
                        <div className={`${styles.modalFooter} ${styles.clearfix}`}>
                            <div className={styles.modalFooterContent}>
                                {
                                    params.cancleText ? params.cancleText : <Button type="default" onClick={this.cancleHandle} >取消</Button>
                                }

                                <Button type="primary" onClick={this.okHandle} loading={loading}>确认</Button>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.modalBg} ${showAni ? styles.animate : styles.leave}`} onClick={!params.forbiddenCheck ? this.cancleHandle : undefined}></div>
                </div>
            </div>
        );
    }
}
