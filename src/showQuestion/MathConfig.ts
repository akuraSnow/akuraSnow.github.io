let isMathjaxConfig = false;

export const initMathjaxConfig = () => {
    // @ts-ignore
    if (!window.MathJax ||isMathjaxConfig) {
        return;
    }
    // @ts-ignore
    window.MathJax.Hub.Config({
        showProcessingMessages: false, // 关闭js加载过程信息
        messageStyle: 'none', // 不显示信息
        jax: ['input/TeX', 'output/HTML-CSS'],
        tex2jax: {
            inlineMath: [['$', '$'], ['\\(', '\\)']], // 行内公式选择符
            displayMath: [['$$', '$$'], ['\\[', '\\]']], // 段内公式选择符
            processEscapes: true, // 当设置为true时，您可以使用\$表示文字美元符号，而不是将其用作数学分隔符。如果为false，则\$不会被更改，美元符号可能被视为数学分隔符的一部分。通常，如果启用$…，则此设置为true。$in-line分隔符，因此您可以键入\$并且tex2jax将它转换为呈现文档中的常规美元符号。
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'], // 避开某些标签
            // ignoreClass: 'comment-content', //避开含该Class的标签
            processClass: 'mathjaxContent'
        },
        'HTML-CSS': {
            availableFonts: ['STIX', 'TeX'], // 可选字体
            showMathMenu: false // 关闭右击菜单显示
        }
    });
    isMathjaxConfig = true; //
};
