
/ tslint:disable /
import React, { Component, useEffect, useState } from 'react';
import { message, Button } from 'antd';

// import { Dispatch } from 'redux';
// @ts-ignore
import Cos from 'cos-js-sdk-v5';
// @ts-ignore
import jsMd5File from 'js-md5-file';
// @ts-ignore
import fileExtension from 'file-extension';

import {
  postSignatures, // 获取签名
  updateFile, // 上传文件成功后，更新数据
} from './servers';

import { fileListType } from './index';


export interface UploadInputbProps {
  // dispatch?: Dispatch;
  children: any;
  accept?: string;
  multiple?: boolean;
  fileList: Array<fileListType>;
  updateList: Function;
  url: string;
  maxSize: number;
  fileNameLength: number;
  token: string;
  error: Function;
  onRef?: Function;
  onCancelFile?: Function;
}

interface  CosParam {
  signature: string;
  bucket: string;
  region: string;
  path: string;
  id: number;
};

interface UploadInputState {
  file: any;

  fileList: fileListType[];
}

class UploadInput extends Component<UploadInputbProps, UploadInputState> {
  uniqueId: string = '';

  private inputFile: any;

  constructor(props: UploadInputbProps) {
    super(props);
    this.state = {
      file: [],

      fileList: props.fileList || [],
    };
  }

  componentDidMount() { 
    this.props.onRef && this.props.onRef(this)
  }

  componentWillReceiveProps(props: any) {
    if (JSON.stringify(props.fileList) !== JSON.stringify(this.state.fileList)) {
      if (props.fileList.length < this.state.fileList.length) {
        this.inputFile.value ? this.inputFile.value = null : '';
      }
      this.setState({
        fileList: props.fileList,
      });
    }
  }

  // 点击上传文件
  // @ts-ignore
  handleFiles = async (e: any) => {
    // const file = e.target.files[0];

    const { fileList } = this.state;
    const { maxSize, accept, fileNameLength } = this.props;

    let files = this.inputFile.files;

    if (!files) {
      return false;

    }

    let filesList = Array.from(files).filter((file: any) => {

      let name = file.name;
      let size = file.size ? file.size / 1024 / 1024 : 0;
      var extension = name.substring(name.lastIndexOf(".") + 1, name.length);//文件扩展名
      // @ts-ignore
      if (accept.indexOf(extension.toLowerCase()) === -1 && accept !== '*') {
        this.props.error('不支持上传的文件类型！');
        // this.inputFile.files[index] = null;
        return false;
      }
  
      if (!file) {
        // this.inputFile.files[index] = null;
        return false;
      }
  
      // if (fileList.length > 9) {
      //   this.props.error('目前仅支持上传10个附件！');
      //   this.inputFile.value = null;
      //   return false;
      // }
  
      // 文件名过长的时候
      if (fileNameLength && file.name.length > fileNameLength) {
        this.props.error(`文件名称不能超过${fileNameLength}个字符！`);
        // this.inputFile.files[index] = null;
        return false;
      }
  
      // 当文件过大的时候，进行提示
      if (size > maxSize) {
        let sizeLength = maxSize > 1024 ? `${maxSize / 1024}G` : `${maxSize}M`
        this.props.error(`上传文件大小不能超过${sizeLength}！`);
        // this.inputFile.files[index] = null;
        return false;
      }

      return true;
  
    });

    if (filesList.length === 0) {
      this.inputFile.value ? this.inputFile.value = null : '';
      return false;
    }


    let newfileList = filesList.map((file: any, index: number) => {

      let id =String(Math.random()).replace('\.', '');
      let name = file.name;
      let size = file.size ? file.size : 0;
      var extension = name.substring(name.lastIndexOf(".") + 1, name.length);//文件扩展名
  
      let fileObj = {
        index: index,
        id: id,
        file: file,
        name: file.name,
        status: "ready",
        progress: 0,
        uid: '',
        url: '',
        fileId: '',
        size: size,
        md5: '',
        fileName: name,
        createTime: new Date().getTime(),
        extension: extension,
        downloadUrl: '',
        previewUrl: '',
      };
      return fileObj
    })
  
    this.setState({
      file: filesList,
      fileList: fileList.concat(newfileList)
    }, () => {

      this.updateFileList();

      setTimeout(() => {
        for (let index = 0; index < filesList.length; index++) {
          const element = filesList[index];
          this.sendFiles(element, newfileList[index].id);
        }
  
      }, 10);

    })

  };

  sendFiles = (file: any, id: string) => {
    this.uploadStatus(id, {
      progress: 0,
      status: "ready",
    }, () => {
      this.sendFiles1(file, id)
    });


  }

  // 把文件传到后端
  sendFiles1 = async(file: any, id: string) => {
    const { url, token } = this.props;
    const { fileList } = this.state;

    if (!file.name) {
      return false;
    }
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
    
    try {
      let response: any = await postSignatures(sendData, url, token);
      console.log("UploadInput -> response", response)
  
      // 判断文件是否还存在
      let hasExist = this.props.fileList.some((fileListItem: any) => {

        return fileListItem.id === id || 
        fileListItem.fileId === response.fileId ||
        fileListItem.id === response.fileId ||
        fileListItem.md5 === response.md5;
      });

      // 如果是token失效的时候
      if (response.code === 40100) {
        this.props.error('登录已失效，请重新登录！', 401);

        return false;
      }
     

      
      /**当文件存在的时候**/
      if (response && response.upload && hasExist) {
        this.uploadStatus(id, {
          progress: 100,
          status: "uploading",
        });

        this.inputFile.value ? this.inputFile.value = null : '';
   
        // 判断文件是否已经存在
        let hasFile = this.state.fileList.some((fileListItem: any) => {
        
          return fileListItem.uid === response.fileId || 
          fileListItem.fileId === response.fileId ||
          fileListItem.md5 === response.md5;
        });


        if (!hasFile) {
          message.success(`${file.name}  文件上传成功!`);

          setTimeout(() => {
            this.uploadStatus(id, {
              progress: 100,
              uid: response.fileId,
              status: "done",
              name: file.name,
              url: response.path,
              fileId: response.fileId,
              md5: response.md5,
              downloadUrl: response.path,
              previewUrl: response.path,
            });
          }, 500)
        } else if ( hasExist ){
          this.props.error('文件已存在，不能重新上传！');
          this.inputFile.value ? this.inputFile.value = null : '';
          this.props.onCancelFile && this.props.onCancelFile(id);
        }

      } else if (hasExist) {
        // 设置参数
        let CosParam: CosParam = {
          signature: response.signature,
          bucket: response.bucket,
          region: response.region,
          path: response.path,
          id: response.fileId,
        };

        this.sendCosFile(file, CosParam, id);

      }
    } catch (err) {
      this.uploadStatus(id, {
        progress: 0,
        status: 'error'
      });
      this.props.error('网络错误,请稍后重试！');
      this.inputFile.value ? this.inputFile.value = null : '';
    }
  }

  // 进行请求腾讯云文件上传
  sendCosFile = (file: any, CosParam: CosParam, id: string) => {
    const { fileList } = this.state;
    const { url, token } = this.props;
    let that = this;

    let OSSData = new Cos({
      // @ts-ignore
      getAuthorization: function (options: any, callback: Function) {
        callback(CosParam.signature);
      },
    });

    try {
      OSSData.putObject(
        {
          Bucket: CosParam.bucket,
          Region: CosParam.region,
          Key: CosParam.path,
          Body: file, // 上传文件对象
          // SliceSize: '5M',
          // AsyncLimit: '5',
          // @ts-ignore
          TaskReady: function (e: any) {
            /* 非必须 */
          },
          // @ts-ignore
          onHashProgress: function (e: any) {
            /* 非必须 */
            //
          },
          onProgress: function (e: any) { 

            that.uploadStatus(id, {
              status: "uploading",
              progress: Math.round(e.percent * 100)
            });

          },
        },
        async function (err: any, data: any) {

          // 判断文件是否还存在id
          let hasExist = that.props.fileList.some((fileListItem: any) => {
            return fileListItem.id === id;
          });

          if (!err && data.statusCode === 200 && hasExist) {
        
            let response: any = await updateFile({ fileId: `${CosParam.id}`, version: 1.0 }, url, token);
  
            if (response) {
              that.inputFile.value = null;
  
              // 判断文件是否已经存在
              let hasFile = that.state.fileList.some((fileListItem: any) => {
            
                return fileListItem.uid === response.id || fileListItem.fileId === response.id;
              });

           
              if (!hasFile) {

                message.success(`${file.name}  文件上传成功!`);

                that.uploadStatus(id, {
                  progress: 100,
                  uid: response.id,
                  name: response.fileName,
                  status: 'done',
                  url: response.path,
                  fileId: response.id,
                  md5: response.md5,
                  downloadUrl: response.path,
                  previewUrl: response.path,
                });
              } else {

                that.props.error('文件已存在，不能重新上传！');
                that.props.onCancelFile && that.props.onCancelFile(id);
              }
  
            }
          } else if (hasExist) {
            that.uploadStatus(id, {
              progress: 0,
              status: 'error'
            });

            that.props.error(`${file.name}  文件上传失败!`);
          }
        },
      );
    } catch {
      this.props.error('网络错误,请稍后重试！');
      this.inputFile.value ? this.inputFile.value = null : '';
    }


  };

  // 更新不同文件的状态
  uploadStatus = (id: string, options?: any, callback?: Function) => {

    
    // 判断文件是否已经存在
    let hasFile = this.props.fileList.some((fileListItem: any) => {
      return fileListItem.id === id;
    });


    if (hasFile) {
      let newfileList = this.state.fileList.map((file: any) => {
    
        if (file.id === id) {
          return {
            ...file,
            ...options
          };
        }
        return file;
      });
  

      this.setState({
        fileList: newfileList
      }, () => {
        this.updateFileList();
        callback && callback()
      });
    }

  }

  // 当文件上传成功的时候，更新列表

  updateFileList = () => {
    const { file, fileList } = this.state;
    this.props.updateList({
      file: file,
      fileList: fileList,
    });
  };

  getFileMd5 = async (file: any) => {
    let md5String = new Promise((resolve, reject) => {
      jsMd5File(
        file,
        // @ts-ignore
        (err: any, fileMd5: any) => {
          if (fileMd5) {
            resolve(fileMd5);
          }
        },
        function (err: any, data: any) {
          if (err === 1 && data) {
            reject(data);
          }
        },
      );
    });
    return md5String;
  };

  render() {
    const { children, accept, multiple = false } = this.props;

    return (
      <div onClick={() => this.inputFile.click()}>
        <input
          type="file"
          name="file"
          accept={accept}
          multiple={multiple}
          onChange={(e: any) => this.handleFiles(e)}
          style={{ display: 'none' }}
          ref={(e: any) => (this.inputFile = e)}
        />
        {children}
      </div>
    );
  }
}

export default UploadInput;
