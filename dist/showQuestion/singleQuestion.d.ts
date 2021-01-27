export default class formatQuestion {
    constructor();
    init(content: any): string;
    static start(wrapperEl: any): void;
    getColor(styles: any): string;
    getWordspace(styles: any): string;
    formatStem(e: any): string;
    getString(stemItem: any, key: any): string;
    getSortingStructure(stem: any): any[];
    isEmphasis(stylesArr: any): boolean;
    getcontent(): void;
    MathData(item: any): any;
}
