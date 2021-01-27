import React from 'react';
import './draggableModal.css';
declare class DragModel extends React.Component<any, any> {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    initialEvent: () => void;
    changVal: (L: any, T: any) => void;
    drag: (obj: any, oMoveDom: any) => void;
    render(): JSX.Element;
}
export default DragModel;
