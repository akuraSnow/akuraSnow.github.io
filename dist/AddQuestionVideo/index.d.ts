import React from 'react';
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
    fileList: Array<any>;
}
export default class AddQuestionVideo extends React.Component<FileListAndAreaProps, FileListAndAreaState> {
    private sourceAttribute;
    private listArea;
    private child;
    private hasTips;
    constructor(props: FileListAndAreaProps);
    componentWillReceiveProps(nextProps: any): void;
    onDeleteFile: (id: string) => void;
    cleanFileList: () => void;
    cancleEdit: () => void;
    getFocus: (id: number | string) => void;
    reUploadFile: (fileItem: any) => void;
    onCancelFile: (id: string) => void;
    render(): JSX.Element;
}
export {};
