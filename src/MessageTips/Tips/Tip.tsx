/**
 * author: huangyu
 * Tips消息提示组件
 */
import React, { Component } from 'react';
import { Icon, Spin } from 'antd';
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
  constructor(props: TipsChildProps) {
    super(props);
    this.state = {
      showAni: false,
      endTime: props.endTime || 3000,
    };
  }
  componentDidMount() {
    let { show, cancleHandle, params } = this.props;

    let that = this;
    this.setState({
      showAni: show,
    });

    if (params.type !== 'spin' && params.type !== 'loading' && params.type !== 'successLoading') {
      setTimeout(() => {
        this.setState(
          {
            showAni: false,
          },
          () => {
            setTimeout(() => {
              let callBack = typeof params.callBack === 'function' ? params.callBack : () => {};
              callBack();
              cancleHandle();
            }, 200);
          },
        );
      }, params.time || 2000);
    } else if (params.type === 'successLoading') {
      let changeEndTime = setInterval(() => {
        that.setState(
          {
            endTime: that.state.endTime - 1000,
          },
          () => {
    
            if (that.state.endTime <= 0) {
              clearInterval(changeEndTime);
              this.setState(
                {
                  showAni: false,
                },
                () => {
                  setTimeout(() => {
                    let callBack =
                      typeof params.callBack === 'function' ? params.callBack : () => {};
                    callBack();
                    cancleHandle();
                  }, 200);
                },
              );
            }
          },
        );
      }, 1000);
    } else {
      if (params.isShow === false) {
        setTimeout(() => {
          this.setState(
            {
              showAni: false,
            },
            () => {
              setTimeout(() => {
                let callBack = typeof params.callBack === 'function' ? params.callBack : () => {};
                callBack();
                cancleHandle();
              }, 200);
            },
          );
        }, params.time || 2000);
      }
    }
  }

  componentWillUnmount() {
    // 重写组件的setState方法，直接返回空
    this.setState = () => {
      return;
    };
  }
  render() {
    let { params } = this.props;
    let { showAni, endTime } = this.state;
    let icon =
      params.type === 'success' || params.type === 'successLoading'
        ? 'check-circle'
        : params.type === 'loading'
        ? 'loading'
        : params.type === 'fail'
        ? 'close-circle'
        : params.type === 'warning'
        ? 'exclamation-circle'
        : '';
    let str: any;
    if (params.type === 'spin') {
      str = (
        <div className={`tips-container spin ${showAni ? 'animate' : 'leave'}`} 
        style={{
          background: params.maskBackgroud
        }}>
          <Spin size="default" tip={params.message}/>
          {/* <p>{params.message}</p> */}
        </div>
      );
    } else if (params.type === 'successLoading') {
      str = (
        <div className={`tips-container ${showAni ? 'animate' : 'leave'}`}>
          <div className={`${params.type} tips-content`}>
            <Icon className={`${params.type}-icon tips-icon`} type={icon} />
            <span>{params.message}</span>
            <span className="tips-time">
              {endTime / 1000}
              {params.content}
            </span>
          </div>
        </div>
      );
    } else {
      str = (
        <div className={`tips-container ${showAni ? 'animate' : 'leave'}`}>
          <div className={`${params.type} tips-content`}>
            <Icon className={`${params.type}-icon tips-icon`} type={icon} />
            <span>{params.message}</span>
          </div>
        </div>
      );
    }
    return <div>{str}</div>;
  }
}
