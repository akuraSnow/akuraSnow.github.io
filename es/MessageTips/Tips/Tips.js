function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * @Author: your name
 * @Date: 2019-11-06 09:38:46
 * @LastEditTime: 2019-11-06 10:00:50
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \myapp\src\components\MessageTips\Tips\Tips.ts
 */

/**
 * author: huangyu
 * Tips消息提示组件js
 */
import React from 'react'; // @ts-ignore

import ReactDOM from 'react-dom';
import TipsChild from './Tip';

var Tips = /*#__PURE__*/function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.show = true;
  }

  _createClass(Tips, [{
    key: "open",
    value: function open(params) {
      var _this = this;

      this.show = true;
      this.root = /*#__PURE__*/React.createElement(TipsChild, {
        params: params,
        show: true,
        cancleHandle: function cancleHandle() {
          _this.close();
        }
      });
      var hasTips = document.getElementById('tips');

      if (!hasTips) {
        this.popup = document.createElement('div');
        this.popup.setAttribute('id', 'tips');
        document.body.appendChild(this.popup);
        ReactDOM.render(this.root, this.popup);
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (!!document.getElementById('tips')) {
        ReactDOM.unmountComponentAtNode(this.popup);
        document.body.removeChild(this.popup);
      }
    }
  }]);

  return Tips;
}();

export default new Tips();