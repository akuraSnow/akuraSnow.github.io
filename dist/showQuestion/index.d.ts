import { Component } from 'react';
export declare let questionType: {
    SINGLE_CHOICE: string;
    MULTIPLE_CHOICE: string;
    INDEFINITE_CHOICE: string;
    COMPLETION: string;
    JUDGEMENT: string;
    FREE_RESPONSE: string;
    COMPREHENSIVE: string;
};
interface SaveQuestionShowProps {
    questionData: any;
    postComponentData?: any;
    associationState?: any;
    title?: any;
    open?: boolean;
    isModal?: boolean;
    questionOrder?: any;
    defaultExpanded?: boolean;
    showSpin?: boolean;
}
interface SaveQuestionShowState {
    questionData: any;
    postComponentData: any;
    heightDom: any;
    open: any;
    associationState: any;
    ebookDirectory: any;
}
export default class SaveQuestionShow extends Component<SaveQuestionShowProps, SaveQuestionShowState> {
    htmlContent: any;
    childStem: any;
    constructor(props: SaveQuestionShowProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    ChangeShowState(event: any): void;
    htmlDomShow: (data: any) => "" | "none";
    changeheight: (event: any) => void;
    getColor(): (styles: any) => {
        color: string;
    };
    render(): JSX.Element;
}
export {};
