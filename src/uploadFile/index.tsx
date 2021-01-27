import { Progress, message, Button, Icon } from 'antd';

import React, { Component } from 'react';
import './index.less';
// import tEmpty from './assets/tEmpty.svg';
// import Cos from 'cos-js-sdk-v5';
// import jsMd5File from 'js-md5-file';
// import fileExtension from 'file-extension';

// import tUpload from './assets/tUploads.svg';

// import iuploadFile from './assets/iuploadFile.svg';

// @ts-ignore
import audioPic from './assets/ic_file_audio.svg';
// @ts-ignore
import picturePic from './assets/ic_file_picture.svg';
// @ts-ignore
import videoPic from './assets/ic_file_video.svg';
// @ts-ignore
import unknownPic from './assets/ic_file_unknown.svg';
// @ts-ignore
import attachmentPic from './assets/ic_file_attachment.svg';
// @ts-ignore
import flashPic from './assets/ic_file_animate.svg';
// @ts-ignore
import wordPic from './assets/ic_file_word.svg';
// @ts-ignore
import pptPic from './assets/ic_file_ppt.svg';
// @ts-ignore
import gspPic from './assets/ic_file_gsp.svg'
// @ts-ignore
import UploadInput from './uploadFile';

// const { Dragger } = Upload;

export const acceptName: any = {
  image: [ 'JPG', 'PNG', 'JPEG', 'JFIF', 'PJPEG', 'PJG', 'GIF', 'BMP', 'DIB', 'GIF', 'IFF', 'JPEG', 'JPG', 'JPE', 'PNG', 'TIF', 'TIFF'],
  video: ['CDA', 'WAV', 'WMA', 'RA', 'MIDI', 'OGG', 'APE', 'FLAC', 'AAC', 'mp3', 'wma', 'wav'],
  audio: ['MPGE', 'MOV', 'rm', 'ram', 'mp4', 'avi', 'mkv', 'flv', 'rmvb', 'wmv', '3gp', 'asf', 'm4v'],
  flash: ['swf', 'exe', 'swl'],
  word: ['xls', 'xlsx', 'txt', 'doc', 'docx', 'pdf', 'text'],
  zip: ['zip', 'rar', '7z'],
  gsp: ['gsp', 'gss'],
  ppt: ['ppt', 'pptx', 'pptm']
};
export interface accessoriesType {
  fileId: string;
  fileName: string;
  fileUrl: string;
}

export interface taskItemType {
  makeMode: any;
  makeUserId: number;
  makeUserName: string;
  makeUserPhone: string;
  name: string;
  state: string;
}

export interface UploadFileProps {
  url: string;
  token: any;
  multiple?: boolean;
  accept?: string;
  maxSize?: number;
  maxLength?: number;
  fileNameLength: number;
  error: Function;
  onChangeFileList: Function;
  showLists: boolean;
  onRef?: Function;
  fileList: any[]
}

export interface fileListType {
  uid: string;
  name: string;
  status: string;
  url: string;
  progress?: number;
  id: string;
  // thumbUrl: string;
  index: number,
  file: any;
  fileId: string;
  size: number;
  md5: string;
  fileName: string;
  extension: string;
  downloadUrl: string;
  previewUrl: string;
}

interface UploadFileState {
  OSSData: any;
  fileList: Array<fileListType>;
  files: any;
  fileMd5: string;
}

export default class UploadFile extends Component<UploadFileProps, UploadFileState> {
 
  private child: any;
 
  constructor(props: UploadFileProps) {
    super(props);
    this.state = {
      OSSData: {},
      fileList: props.fileList,
      files: null,
      fileMd5: '',
    };

    this.child = null;
  }

  componentDidMount() { 
    this.props.onRef && this.props.onRef(this)
  }

  componentWillReceiveProps(props: any) {
    if (JSON.stringify(props.fileList) !== JSON.stringify(this.state.fileList)) {
      this.setState({
        fileList: props.fileList,
      });
    }
  }

  // 更新上传文件数组
  updateList = (fileObj: { file: fileListType; fileList: fileListType[] }) => {
    this.setState(
      {
        fileList: fileObj.fileList,
      },
      () => {
        this.onChangeFileList();
      },
    );
  };

  // 删除文件列表

  OnDeleteFile = (id: string) => {
    const { fileList } = this.state;

    let newFileList = fileList.filter((item: fileListType) => {
      return item.uid !== id;
    });
    this.setState({
        fileList: newFileList,
      },() => {
        this.onChangeFileList();
      },
    );
  };

  // 增加删改的文件的时候，传出文件的值
  onChangeFileList = () => {
    const { fileList } = this.state;
    this.props.onChangeFileList(fileList);
  };

  onCancelFile = (id: string) => {

    const { fileList } = this.state;
    let newFileList = fileList.filter((item: any) =>{
      return item.id !== id;
    });

    this.setState({
      fileList: newFileList
    }, () => {
      this.onChangeFileList();
    }) 

  }

  // 调用子组件中的上传函数
  reUploadFile = (fileItem: any) => {
    this.child.sendFiles(fileItem.file, fileItem.id);
  }

  // 获取文件图片
  getExtensionImage = (fileItem: any) => {
      
    let fileType = 'unknownPic';
    const getImg:any =  {
        'ppt': pptPic,
        'flash': flashPic,
        'image': picturePic,
        'video': videoPic,
        'word': wordPic,
        'audio': audioPic,
        'zip':attachmentPic,
        'gsp': gspPic,
        'unknownPic': unknownPic,
    };

    for (const key in acceptName) {
        if (Object.prototype.hasOwnProperty.call(acceptName, key) && Array.isArray(acceptName[key])) {
          
            const element = acceptName[key]?.reduce((string: any, item:string) => string + item?.toLowerCase(), '');
            if (element.indexOf(fileItem) > -1) {
                fileType = key;
            }
        }
    }
    return <img src={getImg[fileType]} />
  }



  render() {
    let { fileList, files } = this.state;

    const { 
      url, 
      token, 
      fileNameLength, 
      accept='', 
      children=null,
      maxSize=100, 
      multiple=true, 
      showLists=true,

    } = this.props;

    // let newFileList = JSON.parse(JSON.stringify(fileList));

    return (
      <div className={"fileContent"}>
        <div className={"hasFileBotton"} >

          <UploadInput
            accept={accept}
            multiple={multiple}
            fileList={fileList}
            updateList={this.updateList}
            maxSize={maxSize}
            fileNameLength={fileNameLength}
            url={url}
            token={token}
            onRef={(ref: any) => this.child = ref}
            error={this.props.error}
            onCancelFile={(id: string) => this.onCancelFile(id)}
          >
            {children}
          </UploadInput>
  
        </div>
        {
          fileList.map((fileItem: any) => {
      
              return <div 
                  className={`${"fileItemList"} ${fileItem.status === 'error' ? "err" : ''}`} 
                  key={fileItem.id} 
                  title={fileItem.name}
              >
                  <div>
                      {this.getExtensionImage(fileItem.extension)}
                      <span className="fileName">{fileItem.name}</span>
                      {fileItem.status === 'ready' ? <Icon type="loading" /> : ''}
           
                  </div>
                  {
                      fileItem.status === 'ready' || fileItem.status === 'uploading' || fileItem.status === 'error' ? <div className={"progressClass"}>
                          <div>
                              {/* <SyncOutlined spin /> */}
                              <Progress
                                  percent={fileItem.progress}
                                  width={1100}
                                  size="small"
                                  status="active"
                                  strokeColor="#FE8D29"
                                  trailColor="#D9D9D9"
                              />
                          </div>
                  
                          {
                              fileItem.status === 'error' ? <div className={"oprationBtn"} onClick={() => this.reUploadFile(fileItem)}>
                                  重新上传
                              </div> : <div></div>
                          }
                          <div className={"oprationBtn"} onClick={() => this.onCancelFile(fileItem.id)}>
                              取消上传
                      </div>
                      </div> : ''
                  }
            
              
              </div>
          })
      }
      </div>
    );
  }
}
