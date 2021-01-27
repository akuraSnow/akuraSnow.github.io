// @ts-nocheck
import React, { Component } from 'react';
import { Tips } from '../index';

export default class ErrorBoundary extends React.Component {

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error, info) {
        // Display fallback UI

        Tips.open({
            message: `输入错误，请重新输入！`,
            type: 'fail',
            time: 2000
        });
        this.setState({ hasError: true });
        // You can also log the error to an error reporting service
        // logErrorToMyService(error, info);
    }

    render() {

        const { hasError } = this.state;

        if (hasError) {
            // You can render any custom fallback UI
            return '页面不能使用';
        }
        return this.props.children;
    }
}
