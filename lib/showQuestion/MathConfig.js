"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initMathjaxConfig = void 0;
var isMathjaxConfig = false;

var initMathjaxConfig = function initMathjaxConfig() {
  // @ts-ignore
  if (!window.MathJax || isMathjaxConfig) {
    return;
  } // @ts-ignore


  window.MathJax.Hub.Config({
    showProcessingMessages: false,
    messageStyle: 'none',
    jax: ['input/TeX', 'output/HTML-CSS'],
    tex2jax: {
      inlineMath: [['$', '$'], ['\\(', '\\)']],
      displayMath: [['$$', '$$'], ['\\[', '\\]']],
      processEscapes: true,
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'],
      // ignoreClass: 'comment-content', //避开含该Class的标签
      processClass: 'mathjaxContent'
    },
    'HTML-CSS': {
      availableFonts: ['STIX', 'TeX'],
      showMathMenu: false // 关闭右击菜单显示

    }
  });
  isMathjaxConfig = true; //
};

exports.initMathjaxConfig = initMathjaxConfig;