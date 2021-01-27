import { Component } from 'react';
export declare class AnnotateToolbar extends Component {
    submitChange: (...args: any[]) => void;
    handleSubmit: (e: any, closePortal: any) => void;
    render(): JSX.Element;
}
export declare const plugin: () => {
    renderMark: {
        annotate: (props: any) => JSX.Element;
    };
    name: string;
    changes: {
        addAnnotateMark: (change: any, annotation: any) => void;
    };
};
