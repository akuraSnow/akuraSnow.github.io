
import * as React from 'react';
import { cx, css } from 'emotion';
import './index.less';
// @ts-ignore
const ButtonContiner = React.forwardRef((e, ref) => {

    const { ...props } = e;

    return (
        <button
            {...props}
            className={cx(
                "defaultButtn",
                css`
                display: inline-block;
                cursor: pointer;
                border: 1px solid #FE8D29;
                color: #FE8D29;
                `
            )}
        >
        </button>
    );
}
);


const Button = (props: any) => {
    const { children } = props;
    // console.log("Button -> children", children)
    // @ts-ignore
    return <ButtonContiner>
            {children}
        </ButtonContiner>
}

export default Button;