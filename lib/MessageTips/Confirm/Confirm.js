"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ConfirmChild = _interopRequireDefault(require("./ConfirmChild"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Confirm = /*#__PURE__*/function () {
  function Confirm() {
    _classCallCheck(this, Confirm);

    this.show = true;
  }

  _createClass(Confirm, [{
    key: "open",
    value: function open(params) {
      var _this = this;

      this.show = true;
      this.root = /*#__PURE__*/_react.default.createElement(_ConfirmChild.default, {
        params: params,
        show: true,
        cancleHandle: function cancleHandle() {
          _this.close();
        }
      });
      this.popup = document.createElement('div');
      this.popup && document.body.appendChild(this.popup);

      _reactDom.default.render(this.root, this.popup);
    }
  }, {
    key: "close",
    value: function close() {
      _reactDom.default.unmountComponentAtNode(this.popup);

      this.popup && document.body.removeChild(this.popup);
      this.show = false;
    }
  }]);

  return Confirm;
}();

var _default = new Confirm();

exports.default = _default;