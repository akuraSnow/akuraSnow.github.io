/// <reference types="react" />
export declare const changeJson: (json: any) => any;
export declare function getVideoUrl(item: any): any;
export declare const changeHtml: (json: any) => any;
export declare const showMathJax: (hidden?: any) => void;
export declare const showMathJax1: (cb: Function) => void;
export declare const isChoice: string[];
export declare const optionObject: string[][];
export declare const optionValue: string[];
export declare let questionTypeText: any;
export declare let questionType: {
    SINGLE_CHOICE: string;
    MULTIPLE_CHOICE: string;
    INDEFINITE_CHOICE: string;
    COMPLETION: string;
    JUDGEMENT: string;
    FREE_RESPONSE: string;
    COMPREHENSIVE: string;
};
export declare function getQuestion(question: any, questionType: any): any[];
export declare function getQuestionHtml(question: any, type: string): {
    question: any;
    errList: any;
    questionList: any;
};
export declare function getEmptyOption(index: any, questionStructure: any, isOnlyOption: any, ei: any): {
    newQuestionStructure: any;
    newQuestionStructure1: any;
    isOnlyOption: any;
};
export declare let getQuestionType: (questionType: any, isMinorTopic: any) => ({
    type: string;
    title: string;
    require: boolean;
    isFilled: boolean;
    requireText: string;
    isFistRich: boolean;
    content: never[];
    option?: undefined;
} | {
    type: string;
    title: string;
    require: boolean;
    isFilled: boolean;
    content: never[];
    requireText?: undefined;
    isFistRich?: undefined;
    option?: undefined;
} | {
    type: string;
    title: string;
    require: boolean;
    isFilled: boolean;
    requireText: string;
    option: never[];
    content: never[];
    isFistRich?: undefined;
} | {
    type: string;
    title: string;
    content: never[];
    require?: undefined;
    isFilled?: undefined;
    requireText?: undefined;
    isFistRich?: undefined;
    option?: undefined;
})[];
export declare const VerificationKey: number[];
export declare const iconObj: {
    bold: JSX.Element;
    centerAlignment: JSX.Element;
    cleanUp: JSX.Element;
    disorder: JSX.Element;
    formatMatch: JSX.Element;
    Italic: JSX.Element;
    leftAlignment: JSX.Element;
    order: JSX.Element;
    picture: JSX.Element;
    pinyin: JSX.Element;
    point: JSX.Element;
    rightAlignment: JSX.Element;
    strikeout: JSX.Element;
    subscript: JSX.Element;
    superscript: JSX.Element;
    symbol: JSX.Element;
    textIndent: JSX.Element;
    triangle: JSX.Element;
    underline: JSX.Element;
    video: JSX.Element;
    wordspace: JSX.Element;
    lineSpace: JSX.Element;
    lowerTriangle: JSX.Element;
};
export declare const classNamesList: string[];
export declare const showStyle: {
    name: string;
    sign: string;
    SubscriptButton: boolean;
}[];
export declare const showNode: never[];
export declare const TextIndentList: number[];
export declare const LineSpaceList: (string | number)[];
export declare const ListWordSpace: number[];
export declare const symbolObj: {
    label: string;
    type: string;
    content: never[];
}[];
export declare function symbolList(): any[];
export declare const colorList: string[];
export declare const fontSizeList: {
    content: string;
    value: string;
}[];
export declare const fontSizeObj: {
    '21': string;
    '24': string;
    '28': string;
    '30': string;
    '32': string;
    '36': string;
    '44': string;
    '48': string;
    '52': string;
    '72': string;
    '84': string;
};
export declare const fontList: {
    content: string;
    value: string;
}[];
export declare const fontObj: {
    宋体: string;
    楷体: string;
    'Times New Roman': string;
};
export declare let questionObj: () => {
    question: {
        questionType: string;
        stem: {
            fragments: {
                content: string;
                mediaType: string;
                styles: never[];
            }[];
        }[];
        answer: {
            fragments: {
                content: string;
                mediaType: string;
                styles: never[];
            }[];
        }[];
        explanation: {
            fragments: {
                content: string;
                mediaType: string;
                styles: never[];
            }[];
        }[];
        option: {
            fragments: {
                content: string;
                mediaType: string;
                styles: string[];
            }[];
        }[];
    };
};
