import React from 'react';
export default class ErrorBoundary extends React.Component {
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
    };
    constructor(props: any);
    componentDidCatch(error: any, info: any): void;
    render(): {} | null | undefined;
}
