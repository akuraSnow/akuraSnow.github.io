"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./menu/default.min.css");

require("./menu/basicContext.min.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * author: huangyu
 * Comfirm消息提示组件js
 */
require('./fonts/fmathFormulaFonts.js');

require('./fmathFormulaC.js');

require('./menu/basicContext.min.js');

require('./allBrowserSolution.js');

// import './allBrowserSolution.css';
//  <script src="./assets/fonts/fmathFormulaFonts.js"></script>
//  <script src="./fmathFormulaC.js"></script>
//  <script src="./assets/menu/basicContext.min.js"></script>
//  <!-- <script src="./assets/menu/basicModal.min.js"></script> -->
//  <script type="text/JavaScript" src="./allBrowserSolution.js"></script>
//  <link rel="stylesheet" href="./assets/menu/default.min.css">
//  <link rel="stylesheet" href="./assets/menu/basicContext.min.css">
//  <!-- <link rel="stylesheet" href="./assets/menu/basicModal.min.css"> -->
//  <link rel="stylesheet" href="./allBrowserSolution.css">
var LoadMath = function LoadMath() {
  _classCallCheck(this, LoadMath);

  this.show = true;
  console.log('222');
};

var _default = LoadMath;
exports.default = _default;