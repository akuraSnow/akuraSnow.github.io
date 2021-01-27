// @ts-nocheck
import Cos from 'cos-js-sdk-v5';
import jsMd5File from 'js-md5-file';
import fileExtension from 'file-extension';

// import { Tips, message } from './../../index';
import { Tips } from '../../../MessageTips/index';
import {
    postSignatures, // 获取签名
    updateFile, // 上传文件成功后，更新数据
  } from '../../services/EditdQuestion';

class UploadFile {

    

    constructor(props) {

        console.log(props);

        this.CosParam = {
            signature: '',
            bucket: '',
            region: '',
            path: '',
            id: 0,
        };

        this.callBack = props.callBack;
        this.handleFiles(props.blob);
        this.imageUrl = '';
        
    }

    // 点击上传文件
    handleFiles = async (file: any) => {
        // const file = e.target.files[0];

        let name = file.name;

        // 获取文件后缀
        let ext = fileExtension(file.name).toLowerCase();

        // 获取文件MD5加密
        let fileMd5 = await this.getFileMd5(file);

        // 请求密钥
        let sendData = {
            client: 'R_Center',
            extension: ext,
            fileName: file.name,
            genre: 1,
            guid: null,
            md5: fileMd5,
            method: 'put',
            provider: 'tencent',
            size: file.size,
        };

        let res = await postSignatures(sendData);

        console.log('res===>', res);

        let response = res;

        /** 当文件存在的时候 **/
        if (response.upload) {
            let uploadFile = {
                uid: response.fileId,
                name: file.name,
                status: 'done',
                url: response.path,
            };

            this.file = uploadFile;

            // Tips.open({
            //     message: `${file.name}  文件上传成功!`,
            //     type: 'success',
            //     time: 2000
            // });
            // message.success(`${file.name}  文件上传成功!`);

            // ;

            this.updateFileList(response.path);

        } else {
            
            // 设置参数

            this.CosParam = {
                signature: response.signature,
                bucket: response.bucket,
                region: response.region,
                path: response.path,
                id: response.fileId,
            };

            this.file = file;

            this.sendCosFile();

   
        }
    };

    // 进行请求腾讯云文件上传
    sendCosFile = () => {

        let CosParam = this.CosParam;
        let file = this.file;

        let that = this;

        // console.log('file===>', file);
        // console.log('CosParam===>', CosParam);

        let OSSData = new Cos({
            getAuthorization: function (options, callback) {
                callback(CosParam.signature);
            },
        });

        OSSData.putObject(
            {
                Bucket: CosParam.bucket,
                Region: CosParam.region,
                Key: CosParam.path,
                Body: file, // 上传文件对象
                // SliceSize: '5M',
                // AsyncLimit: '5',
                TaskReady: function (e) {
                    /* 非必须 */
                },
                onHashProgress: function (e) {
                    /* 非必须 */
                    //
                },
                onProgress: function (e) { },
            },
            async function (err, data) {
                if (!err && data.statusCode === 200) {
                    let res = await updateFile({ fileId: `${CosParam.id}`, version: 1.0 });
                    let response = res;

                    if (response) {

                        let uploadFile = {
                            uid: response.id,
                            name: response.fileName,
                            status: 'done',
                            url: response.path,
                        };

                        that.file = uploadFile;
                        
                        that.updateFileList(response.path);

                    }
                } else {
                    console.error('文件上传失败原因==>',err);
                    Tips.open({
                        message: '文件上传失败！',
                        type: 'fail',
                        time: 2000
                    });
                }
            },
        );
    };

    // 当文件上传成功的时候，更新列表

    updateFileList = (path: any) => {
        
        this.imageUrl = path;

        this.callBack(path);

    };


    getFileMd5 = async (file) => {
        let md5String = new Promise((resolve, reject) => {
            jsMd5File(
                file,
                /* eslint handle-callback-err: "warn" */
                (err, fileMd5) => {
                    console.log('fileMd5===>', fileMd5);
                    if (fileMd5) {
                        resolve(fileMd5);
                    }
                },
                function (err, data) {
                    if (err === 1 && data) {
                        reject(data);
                    }
                },
            );
        });

        return md5String;
    };

}

export default UploadFile;