// @ts-nocheck
import {Tips} from '../../../MessageTips';
import axios from 'axios';
import BaseConfig from './baseUrl';
import { Component } from 'react';

class JAVAHttp extends Component {
  private base: any;

  private options: any;

  private timeOutCallBack: any;

  constructor(props?: any) {
    super(props);
    this.base = {
      baseUrl: BaseConfig.javaurl(),
      type: '',
    };
    this.options = {
      url: null,
      params: null,
      data: null,
    };
    this.timeOutCallBack = undefined;
  }
  config(obj: any, callBack?: Function) {
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
        Authorization: 'Bearer ' + localStorage.getItem('userToken'),
        // Authorization: 'basic MTIzNDU2',
      },
      timeout: this.options.timeout,
      url: this.base.baseUrl + this.options.url,
      params: {
        ...(this.options.url.indexOf("version") === -1 ? { version: '1.0' } : {}),
        ...this.options.params
      }, // Get的参数
      data: this.options.data, // Post的参数
    };
  }
  run() {
    return new Promise((resolve, reject) => {
      axios
        .request(this.setConfig(this.options.type))
        .then(res => {
          if (res.status === 200) {
            resolve(res);
          } else {
            Tips.close();
            Tips.open({
              message: `网络错误，请稍后重试`,
              type: 'fail',
              callBack: () => {
                reject(res);
              },
            });

          }
        })
        .catch((e) => {
          this.handleErr(e)
          reject(e)
        });
    });
  }
  handleErr = (error: any) => {
  console.log("🚀 ~ file: javaHttp.ts ~ line 94 ~ JAVAHttp ~ error", error)

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
        Tips.open({
          message: "登录已失效，请重新登录！",
          type: 'fail',
        });
        localStorage.removeItem('UserId');
        localStorage.removeItem('userToken');
        localStorage.removeItem('AdminToken');
        location.reload();
      }
      // 服务器异常
      else if (status === 500) {

        console.log("JAVAHttp -> handleErr -> error", error.response)
        if (
          error.response.data.message &&
          error.response.data.message.trim() === '注册账号失败: 数据已存在'
        ) {
          Tips.open({
            message: error.response.data.message,
            type: 'fail',
          });
        } else if (
          error.response.data.message &&
          error.response.data.message.trim() === '修改用户信息失败: 数据已存在'
        ) {
          Tips.open({
            message: error.response.data.message,
            type: 'fail',
          });
        } else {
          // Tips.open({
          //     message: `服务器连接错误,请重试！`,
          //     type: 'fail'
          // });
          setTimeout(() => {
            Tips.open({
              message: error.response.data.message,
              type: 'fail',
            });
          }, 100);

        }

        if (typeof this.timeOutCallBack === 'function') {
          this.timeOutCallBack();
        }
      } else {
        // const errorText = codeMessage[error.response.status] || error.response.statusText || '';
        // const { status, url } = error.response;

        // notification.error({
        //   message: `请求错误`,
        //   description: error.response.data.message,
        // });

        Tips.open({
          message: error.response.data.message,
          type: 'fail',
        });
      }
    } else {
      setTimeout(() => {
        Tips.open({
          message: '网络错误，请稍后重试',
          type: 'fail',
        });
      }, 200);

      if (typeof this.timeOutCallBack === 'function') {
        this.timeOutCallBack();
      }
    }
  };
}
export default new JAVAHttp();
