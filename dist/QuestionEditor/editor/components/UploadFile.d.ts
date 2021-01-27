declare class UploadFile {
    constructor(props: any);
    handleFiles: (file: any) => Promise<void>;
    sendCosFile: () => void;
    updateFileList: (path: any) => void;
    getFileMd5: (file: any) => Promise<unknown>;
}
export default UploadFile;
