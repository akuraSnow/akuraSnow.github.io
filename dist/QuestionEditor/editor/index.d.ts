import { Component } from 'react';
import './richtext.less';
export interface EditItemProps {
    value: any;
    type: any;
    handOkVal?: Function;
    questionStructure: any;
    changeValue?: Function;
    changeAnswer: Function;
    cancelCopy?: Function;
    search: any;
    copyQuestionMode?: any;
    renderDOM?: any;
}
interface EditItemState {
    questionRenderCompleted: boolean;
    questionItem: any;
    questionStructure: any;
    type: any;
    activeKey: string;
    answer: any;
    errList: any;
    isChangeQuestionList: any;
    hasError: boolean;
    orderSortVisible: boolean;
    modalPosition: any;
    modalPositionInsertFormula: any;
    color: string;
    sortFormat: string;
    isInBox: boolean;
    videoUrl: {
        content: string;
        questions: any;
    };
}
export default class EditItem extends Component<EditItemProps, EditItemState> {
    static getDerivedStateFromError(): {
        hasError: boolean;
    };
    constructor(props: any);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    componentDidCatch(): void;
    changChild: () => void;
    changeValue: (value: any, indexArr: any, ei: any, questionType?: string | undefined) => void;
    handleBatchOk: (n: any) => void;
    chooseBox: (index: any) => void;
    setAnswer: (e: any, ei: any) => void;
    deleteOption: (index: any, ei: any) => void;
    callback: (key: any) => void;
    postion: (e: any) => void;
    positionInsertFormula: (e: any) => void;
    changeItem: (option: any) => void;
    calcelAnswers: (index: any, i: any) => void;
    setAnswers: (index: any, i: any) => void;
    getAnswerStructure: (newQuestionStructure: any) => any;
    addAnswers: (index: any, i: any) => void;
    deleteAnswers: (index: any, i: any) => void;
    RichTextRender(item: any, index: any, ei: any): string | JSX.Element | undefined;
    render(): JSX.Element;
}
export {};
