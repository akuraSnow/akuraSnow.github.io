import { Component } from 'react';
import './index.less';
export declare const acceptName: any;
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
    fileList: any[];
}
export interface fileListType {
    uid: string;
    name: string;
    status: string;
    url: string;
    progress?: number;
    id: string;
    index: number;
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
    private child;
    constructor(props: UploadFileProps);
    componentDidMount(): void;
    componentWillReceiveProps(props: any): void;
    updateList: (fileObj: {
        file: fileListType;
        fileList: fileListType[];
    }) => void;
    OnDeleteFile: (id: string) => void;
    onChangeFileList: () => void;
    onCancelFile: (id: string) => void;
    reUploadFile: (fileItem: any) => void;
    getExtensionImage: (fileItem: any) => JSX.Element;
    render(): JSX.Element;
}
export {};
