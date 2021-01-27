/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-25 17:53:54
 * @LastEditTime: 2019-11-14 13:14:50
 * @LastEditors: Please set LastEditors
 */
// import Http from '../../axios/http';
import JAVAHttp from '../utils/axios/javaHttp';
import request from '../utils/request';

import BaseConfig from '../utils/axios/baseUrl';

let javaBasic = BaseConfig.questionanalyze();

// @ts-ignore
export function JAVAHttpFuc(state, url, data) {

    let sendData = {};

    if (state !== 'get' && state !== 'postmultipart') {
        sendData = {
            type: state,
            url: '/warehouse' + url,
            data: data
        }
    } else if (state === 'postmultipart') {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });
        sendData = {
            type: 'post',
            url: '/warehouse' + url,
            data: formData,
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
    } else {
        sendData = {
            type: state,
            url: '/warehouse' + url,
            params: data
        }
    }

    return JAVAHttp.config(sendData);
}

export function JAVAHttpEbook(state: any, url: string, data?: any) {
    let sendData = {};

    if (state !== 'get') {
        sendData = {
            type: state,
            url: '/ebook' + url,
            data: data,
        };
    } else {
        sendData = {
            type: state,
            url: '/ebook' + url,
            params: data,
        };
    }
    return JAVAHttp.config(sendData);
}

// /warehouse



// 从图片识别公式
export function identifyFormulaFromImage(data: any) {
    return JAVAHttpFuc('postmultipart', '/api/images/formula/text', data);
}

// 提交签名数据，返回签名信息（2步合一）

// export function postSignatures(data) {

//     return JAVAHttpFuc('post',`/ebook/api/admin/ebook/file`, data)
// }


// // 提交文件数据，更新数据
// export async function updateFile(params) {

//     return JAVAHttpFuc('put',`/ebook/api/admin/ebook/file?fileId=${params.fileId}`, {})
// }

// 备课包图片试题保存并上架接口
export async function SaveAndPutAway(data: any) {
    return request(`javaUrl|/warehouse/api/admin/preparations/question`, {
        method: 'post',
        data: data
    })
}

// 提交签名数据，返回签名信息（2步合一）
export async function postSignatures(data: any) {
    return request(`javaUrl|/ebook/api/admin/ebook/file`, {
        method: 'post',
        data: data
    });
}

// 提交文件数据，更新数据
export async function updateFile(data: any) {
    return request(`javaUrl|/ebook/api/admin/ebook/file`, {
        method: 'PUT',
        data
    });
}
