import React from 'react';
interface BaseProps {
    className: string;
    [key: string]: unknown;
}
export declare const Button: React.ForwardRefExoticComponent<Pick<{
    active: boolean;
    reversed: boolean;
} & BaseProps, string | number> & React.RefAttributes<HTMLSpanElement>>;
export declare const Icon: React.ForwardRefExoticComponent<Pick<BaseProps, string | number> & React.RefAttributes<HTMLSpanElement>>;
export declare const Menu: React.ForwardRefExoticComponent<Pick<BaseProps, string | number> & React.RefAttributes<HTMLDivElement>>;
export declare const Toolbar: React.ForwardRefExoticComponent<Pick<BaseProps, string | number> & React.RefAttributes<HTMLDivElement>>;
export {};
