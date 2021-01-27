// @ts-nocheck
import React from 'react';
import ReactDOM from 'react-dom';
import { cx, css } from 'emotion';
import { Select, Dropdown, Slider } from 'antd';


export const Button = React.forwardRef(
    (e, ref) => {

        const { className, active, visible, title, reversed, ...props } = e;

        return (
            <span
                {...props}
                ref={ref}
                className={cx(
                    'buttonTitle',
                    className,
                    css`
                    display: inline-block;
                    cursor: pointer;
                    background: ${reversed ? active ? 'white' : '#E8E8E8' : active ? '#BFBFBF' : visible ? '#F5F5F5' : 'white'};`
                )}
            >
            </span>
        );
    }
);

export const Button1 = React.forwardRef(
    (e, ref) => {

        const { className, active, visible, title, reversed, ...props } = e;

        return (
            <span
                {...props}
                ref={ref}
                className={cx(
                    'buttonTitle',
                    className,
                    css`
                    display: inline-block;
                    cursor: pointer;
                    `
                )}
            >
            </span>
        );
    }
);

export const Button2 = React.forwardRef(
    (e, ref) => {

        const { className, active, visible, title, reversed, ...props } = e;

        return (
            <span
                {...props}
                ref={ref}
                className={cx(
                    'buttonTitle',
                    className,
                    css`
                    display: inline-block;
                    cursor: pointer;
                    `
                )}
            >
            </span>
        );
    }
);

export const Button3 = React.forwardRef(
    (e, ref) => {

        const { className, active, visible, title, reversed, ...props } = e;

        return (
            <Slider
                {...props}
                ref={ref}
                min={0.1}
                max={2.0}
                step={0.1}
                included={false}
                style={{ width: '100px' }}
                // focus={(e) => {

                //     console.e(e);
                // }}
                // defaultValue={30}
                // onChange={onChange}
                // onAfterChange={onAfterChange}
            ></Slider>
        );
    }
);


export const EditorValue = React.forwardRef(
    ({ className, value, ...props }, ref) => {
        const textLines = value.document.nodes
            .map(node => node.text)
            .toArray()
            .join('\n');
        return (
            <div
                ref={ref}
                {...props}
                className={cx(
                    className,
                    css`
                    margin: 30px -20px 0;
                `
                )}
            >
                <div
                    className={css`
                        font-size: 14px;
                        padding: 5px 20px;
                        color: #404040;
                        border-top: 2px solid #eeeeee;
                        background: #f8f8f8;
                    `}
                ></div>
                <div
                    className={css`
                        color: #404040;
                        font: 12px monospace;
                        white-space: pre-wrap;
                        padding: 10px 20px;
                        div {
                        margin: 0 0 0.5em;
                        }
                    `}
                >
                    {textLines}
                </div>
            </div>
        );
    }
);


export const Icon = React.forwardRef((e, ref) => {

    const { className, ...props } = e;
    return (
        <span
            {...props}
            ref={ref}
            className={cx(
                'material-icons',
                className,
                css`
                font-size: 18px;
                // vertical-align: text-bottom;
                `
            )}
        />
    );
});


export const Instruction = React.forwardRef(({ className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                white-space: pre-wrap;
                margin: 0 -20px 10px;
                padding: 10px 20px;
                font-size: 14px;
                background: #f8f8e8;
            `
        )}
    />
));

export const Menu = React.forwardRef(({ className, ...props }, ref) => (
    <div
        {...props}
        ref={ref}
        className={cx(
            className,
            css`
                & > * {
                display: inline-block;
                }

                & > * + * {
                    // min-width: px;
                    text-align: center;
                    // margin-left: 2px;
                    border: 1px solid #fff
                }
            `
        )}
    />
));

export const Portal = ({ children }: any) => {
    return ReactDOM.createPortal(children, document.body);
};

export const Toolbar = React.forwardRef((e, ref) => {
    // @ts-ignore
    const { className, ...props } = e;
    return (
        <Menu
            {...props}
            ref={ref}
            // @ts-ignore
            className={cx(
                className,
                css`
                position: relative;
                height: 25px;
                
                // padding: 15px 18px;
                // border-bottom: 2px solid #eee;
                `
            )}
        />
    );
});
