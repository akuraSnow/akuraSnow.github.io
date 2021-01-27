"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Tip = _interopRequireDefault(require("./Tip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      this.root = /*#__PURE__*/_react.default.createElement(_Tip.default, {
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

        _reactDom.default.render(this.root, this.popup);
      }
    }
  }, {
    key: "close",
    value: function close() {
      if (!!document.getElementById('tips')) {
        _reactDom.default.unmountComponentAtNode(this.popup);

        document.body.removeChild(this.popup);
      }
    }
  }]);

  return Tips;
}();

var _default = new Tips();

exports.default = _default;