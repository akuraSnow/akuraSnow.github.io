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
import { extend } from 'umi-request';



/**
 * 异常处理程序
 */
const errorHandler = (error: { response: any, data:any }): any => {
  const { response, data } = error;

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
request.interceptors.request.use((url: string, options: any) => {

  let c_token = options.token;
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
// @ts-ignore
request.interceptors.response.use((response, options) => {
  let token = response.headers.get('userToken');
  if (token) {
    localStorage.setItem('userToken', token);
  }
  return response;
});

export default request;
