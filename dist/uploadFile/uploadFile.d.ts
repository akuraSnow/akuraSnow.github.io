import { Component } from 'react';
import { fileListType } from './index';
export interface UploadInputbProps {
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
interface CosParam {
    signature: string;
    bucket: string;
    region: string;
    path: string;
    id: number;
}
interface UploadInputState {
    file: any;
    fileList: fileListType[];
}
declare class UploadInput extends Component<UploadInputbProps, UploadInputState> {
    uniqueId: string;
    private inputFile;
    constructor(props: UploadInputbProps);
    componentDidMount(): void;
    componentWillReceiveProps(props: any): void;
    handleFiles: (e: any) => Promise<false | undefined>;
    sendFiles: (file: any, id: string) => void;
    sendFiles1: (file: any, id: string) => Promise<false | undefined>;
    sendCosFile: (file: any, CosParam: CosParam, id: string) => void;
    uploadStatus: (id: string, options?: any, callback?: Function | undefined) => void;
    updateFileList: () => void;
    getFileMd5: (file: any) => Promise<unknown>;
    render(): JSX.Element;
}
export default UploadInput;
