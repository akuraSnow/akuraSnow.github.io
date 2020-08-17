
import request from './request';
// 提交签名数据，返回签名信息（2步合一）
export async function postSignatures(params: any, url: string, token: string) {
    // return request('javaUrl|file-service/v3/cloud/signatures', {
    //     method: 'POST',
    //     data: params,
    // });
  
    return request(`${url}/ebook/api/admin/ebook/file?version=1.0`, {
      method: 'POST',
      data: params,
      // @ts-ignore
      token: token
    });
}


// 提交文件数据，更新数据
export async function updateFile(params: any, url: string, token?: string) {
    return request(`${url}/ebook/api/admin/ebook/file?fileId=${params.fileId}&version=1.0`, {
      method: 'PUT',
      data: {},
      // @ts-ignore
      token: token
    });
}