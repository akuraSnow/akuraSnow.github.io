/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 13:13:45
 * @LastEditTime: 2019-11-22 13:03:05
 * @LastEditors: Please set LastEditors
 */
/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
// @ts-nocheck
import { extend } from 'umi-request';
import { Tips } from '../../MessageTips';
import redirect2login from './redirect2login';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/**
 * 异常处理程序
 */
const errorHandler = (error: { response: any; data: any }): any => {
  const { response, data } = error;
  if (error.type === 'Timeout') {
    Tips.close();

    setTimeout(() => {
      Tips.open({
        message: '网络超时，请稍后重试',
        type: 'fail',
      });
    }, 300);

    return {
      message: '网络超时，请稍后重试',
    };
  } else if (response && response.status) {
    const errorText = codeMessage[response.status] || response.statusText || '';

    if (response && response.status === 401) {
      setTimeout(() => {
        Tips.open({
          message: '登录已失效，请重新登录！',
          type: 'fail',
        });
        // 带上当前路径信息跳转到登录页
        redirect2login();
      }, 300);
    } else {
      if (data.code !== 10804 && data.code !== 10415) {
        setTimeout(() => {
          Tips.open({
            message: data.message,
            type: 'fail',
          });
        }, 10);
      }
    }
  } else {
    Tips.close();

    setTimeout(() => {
      Tips.open({
        message: '网络错误，请稍后重试',
        type: 'fail',
      });
    }, 300);

    return undefined;

    // Tips.open({
    //   message: '网络错误，请稍后重试',
    //   type: 'fail',
    // });
  }

  return data;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  timeout: 10000, // 设置超时
  credentials: 'include', // 默认请求是否带上cookie
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  let proxyObj = {
    url: url,
  };

  const handler = {
    get(target: object, key: number, proxy: any) {
      let urlList = target[key].split('|');

      let urlName = urlList.shift();

      let urlString = urlList.join('/');

      // 同意添加版本号
      if (urlString.indexOf('version') === -1) {
        urlString = urlString + '?version=1.0';
      }

      // 是java接口的时候
      if (urlName === 'javaUrl') {
        return process.env.javaUrl + urlString;
      } else if (urlName === 'url') {
        // .net接口

        return process.env.netUrl + urlString;
      } else if (urlName === 'questionanalyze') {
        // 试题解析接口

        return process.env.questionanalyze + urlString;
      }

      return target[key];
    },
  };

  let newUrl = new Proxy(proxyObj, handler);

  // 修改接口地址
  url = newUrl['url'];

  let c_token = localStorage.getItem('userToken');
  if (c_token) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      userToken: c_token,
      Authorization: 'Bearer ' + c_token,
      // 'Authorization': 'basic 123'
    };
    return {
      url: url,
      options: { ...options, headers: headers },
    };
  } else {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      userToken: c_token,
    };
    return {
      url: url,
      options: { ...options },
    };
  }
});

// response拦截器, 处理response
request.interceptors.response.use((response, options) => {
  let token = response.headers.get('userToken');
  if (token) {
    localStorage.setItem('userToken', token);
  }
  return response;
});

export default request;
