import { Component } from 'react';
interface QuestionShowProps {
    questionData: any;
    postComponentData: any;
    associationState: any;
    title: any;
    showEbookDirectory: any;
    getClickData: any;
}
interface QuestionShowState {
    questionData: any;
    postComponentData: any;
    heightDom: any;
    open: any;
    associationState: any;
    ebookDirectory: any;
    showEbookDirectory: any;
}
export default class QuestionShow extends Component<QuestionShowProps, QuestionShowState> {
    private htmlContent;
    private childStem;
    constructor(props: QuestionShowProps);
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: any): void;
    ChangeShowState(event: any): void;
    StemClickFun: (fStemId: any, cStemId: any, type: any) => void;
    render(): JSX.Element;
}
export {};
