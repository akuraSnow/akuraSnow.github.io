import { Component } from 'react';
interface Htmlrops {
    htmlData: any;
    className?: any;
}
interface HtmlState {
    htmlData: any;
    className: any;
}
export default class Html extends Component<Htmlrops, HtmlState> {
    constructor(props: Htmlrops);
    componentDidMount(): void;
    shouldComponentUpdate(): boolean;
    render(): JSX.Element;
}
export {};
