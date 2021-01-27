// @ts-nocheck
import React from 'react';

import { Modal, message, Icon, Progress, Button } from 'antd';

import UploadFile, { fileListType } from '../UploadFile';
import Tips from '../MessageTips/Tips/Tips';
// import { acceptName, acceptName1 } from '../index';
import _ from 'lodash';

import styles from './index.less';

interface FileListAndAreaProps {
    accept: string;
    transmissionValue?: Function;
    videoUrl?: string;
}

interface FileListAndAreaState {
    visible: boolean;
    attribute: any;
    currentFocus: undefined | number | string;
    currentEditItem: number | string | undefined;
    inputStatus: boolean;
    fileList: Array<any>
}

// 提交更新属性需要的值
const attriubteModle = [
    "areaName",
    "category",
    "chapters",
    "createUserName",
    "createUserid",
    "descreption",
    "extendJson",
    "files",
    "grades",
    "name",
    "ownerId",
    "ownerOrgId",
    "referenceResourceId",
    "schoolYear",
    "sourceAppCode",
    "sourceOrgId",
    "studySectionCode",
    "subjects",
    "transferOriginId",
    "year"
];


interface attribute {
    areaName: any,
    category: any,
    chapters: any,
    createUserName: any,
    createUserid: any,
    descreption: any,
    extendJson: any,
    files: any,
    grades: any,
    name: any,
    ownerId: any,
    ownerOrgId: any,
    referenceResourceId: any,
    schoolYear: any,
    sourceAppCode: any,
    sourceOrgId: any,
    studySectionCode: any,
    subjects: any,
    transferOriginId: any,
    year: any
}

export default class AddQuestionVideo extends React.Component<FileListAndAreaProps, FileListAndAreaState>{
    private sourceAttribute: any;
    private listArea: any;
    private child: any;
    private hasTips: boolean;

    constructor(props: FileListAndAreaProps) {
        super(props);

        let fileList = props.videoUrl ? [
            {
                downloadUrl: props.videoUrl,
                extension: "mp3",
                fileId: "530051721603457024",
                name: "xxx.mp3",
                previewUrl: props.videoUrl,
                progress: 100,
                status: "done",
                url: props.videoUrl
            }
        ] : [];

        this.state = {
            visible: false,
            inputStatus: false,
            attribute: {},
            currentFocus: undefined,
            currentEditItem: undefined,
            fileList: fileList
        }

        this.child = null;
        this.hasTips = false;
    }

    componentWillReceiveProps(nextProps: any) {

        if (nextProps.videoUrl && this.state.fileList.length === 0) {
            let url = nextProps.videoUrl;
            this.setState({
                fileList: [
                    {
                        createTime: 1604383055108,
                        downloadUrl: url,
                        extension: "mp3",
                        fileId: "530051721603457024",
                        previewUrl: url,
                        progress: 100,
                        size: 100,
                        status: "done",
                        url: url
                    }
                ]
            })
        }
    }

    // // 删除文件
    onDeleteFile = (id: string) => {


        const { fileList } = this.state;
        const { cacheMap } = this.props;

        let newFileList = fileList.filter((item: any) => {
            return item.id !== id;
        });

        // 对cacheMap进行更新
        // if (cacheMap[id]) {
        cacheMap[id] = null;
        // }

        this.setState({
            fileList: newFileList
        });

    }

    cleanFileList = () => {
        const { transmissionValue } = this.props;
        this.setState({
            fileList: []
        }, () => {
            transmissionValue && transmissionValue([]);
        })
    }

    // 取消编辑
    cancleEdit = () => {
        this.setState({
            visible: false,
            attribute: {}
        });
    };

    // 焦点获得
    getFocus = (id: number | string) => {
        this.setState({
            currentFocus: id
        })
    }

    // 调用子组件中的上传函数
    reUploadFile = (fileItem: any) => {

        this.child.reUploadFile(fileItem);
    }


    onCancelFile = (id: string) => {

        const { fileList } = this.state;

        let newFileList = fileList.filter((item: any) => {

            return item.id !== id;
        });

        this.setState({
            fileList: newFileList
        })

    }


    render() {
        const { transmissionValue, accept } = this.props;
        const { visible, attribute, currentFocus, fileList } = this.state;
  
        return (
            <div className={styles.wrapper}>
                <header className={styles.title}>
                    {
                        fileList.length === 1 && (fileList[0].status === 'done' ||
                        fileList[0].status === 'error'
                        ) ? <div>
                            <Button type="primary" disabled>上传音频</Button>
                            <span className={styles.remarks}>非必填，仅支持上传一个MP3文件</span>
                        </div> : <UploadFile
                            url={process.env.javaUrl}
                            token={localStorage.getItem('userToken')}
                            maxSize={2048}
                            onRef={(ref: any) => this.child = ref}
                            // maxLength={10}
                            fileNameLength={100}
                            showLists={false}
                            multiple={false}
                            fileList={fileList}
                            accept={accept}
                            error={(error: any, status?: number) => {
                                message.error(error);
                            }}
                            onChangeFileList={(list: any) => {
                                console.log("FileListAndArea -> render -> list", list)
                                this.setState({
                                    fileList: [...list],
                                }, () => {

                                    if (!this.hasTips) {
                                        Tips.open({
                                            message: '音频上传中！',
                                            type: 'spin',
                                            isShow: true,
                                            maskBackgroud: 'rgba(0, 0, 0, 0.1)',
                                        });

                                        this.hasTips = true;
                                    }

                                    if (list[0].status === 'done' || list[0].status === 'error') {
                                        Tips.close();
                                        this.hasTips = false;
                                    }
                               
                                    if (list[0].status === 'done') {
                                        transmissionValue && transmissionValue(list);
                                    }
                                })
                            }}
                        >
                            <Button type="primary">上传音频</Button>
                            <span className={styles.remarks}>非必填，仅支持上传一个MP3文件</span>
                        </UploadFile>
                    }


                </header>
                <main className={styles.list} ref={node => this.listArea = node}>

                    {
                        fileList.length === 1 && fileList[0].status !== 'done' ? fileList.map((fileItem: any, index: number) => {

                            return <div
                                className={`audioItem ${styles.fileItemList} ${fileItem.status === 'error' ? styles.err : ''}`}
                                key={fileItem.id}
                                title={fileItem.name}
                            >
                                <div>
                                    <span className={styles.fileItemName}>{fileItem.name}</span>
                                    {fileItem.status === 'ready' ? <Icon type="loading" /> : ''}
                                    <div className={styles.errInfo}>
                                        {fileItem.status === 'error' ? '上传失败' : ''}
                                    </div>
                                </div>
                                {
                                    fileItem.status === 'ready' || fileItem.status === 'uploading' || fileItem.status === 'error' ? <div className={styles.progressClass}>
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
                
                                        <div className={styles.oprationBtn} onClick={() => this.onCancelFile(fileItem.id)}>
                                            {fileItem.status === 'error' ? '删除' : ''}
                                        </div>
                                    </div> : ''
                                }
                                {
                                    !fileItem.editStatus && (fileItem.status === 'done' || fileItem.status === 'olddone') ? <div className={styles.operationBox}>
                                        <div onClick={() => this.onDeleteFile(fileItem.id)}>删除</div>
                                    </div> : ''
                                }
                            </div>
                        }) : (
                                <div></div>
                            )
                    }
                    {
                        fileList.length === 1 && fileList[0].status === 'done' ? <div className={styles.videoItem}>
                            <audio width="320" height="54" controls loop controlsList="nodownload">
                                <source src={fileList[0].previewUrl} type="" />
                            </audio>
                            <span onClick={this.cleanFileList}>
                                删除
                            </span>
                        </div> : <div></div>
                    }
                </main>

            </div>
        )
    }
}