"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/button/style");

var _button = _interopRequireDefault(require("antd/es/button"));

var _react = _interopRequireWildcard(require("react"));

var _Confirm = _interopRequireDefault(require("./Confirm.css"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ConfirmChild = /*#__PURE__*/function (_Component) {
  _inherits(ConfirmChild, _Component);

  var _super = _createSuper(ConfirmChild);

  function ConfirmChild(props) {
    var _this;

    _classCallCheck(this, ConfirmChild);

    _this = _super.call(this, props);

    _this.okHandle = function () {
      _this.props.params.onOk();

      _this.setState({
        showAni: false,
        loading: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            loading: false
          }, function () {
            _this.props.cancleHandle();
          });
        }, 200);
      });
    };

    _this.cancleHandle = function () {
      var params = _this.props.params;

      _this.setState({
        showAni: false
      }, function () {
        setTimeout(function () {
          var callBack = typeof params.cancle === 'function' ? params.cancle : function () {};
          callBack();

          _this.props.cancleHandle();
        }, 200);
      });
    };

    _this.state = {
      showAni: false,
      loading: false
    };
    return _this;
  }

  _createClass(ConfirmChild, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var show = this.props.show;
      var that = this;
      this.setState({
        showAni: show
      });
      window.addEventListener("popstate", function () {
        var box = document.getElementById('modalBox');

        if (box) {
          that.props && that.props.cancleHandle();
        }
      }, false);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var show = nextProps.show;
      this.setState({
        showAni: show
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // 重写组件的setState方法，直接返回空\
      var that = this;

      this.setState = function () {
        return;
      };
    }
  }, {
    key: "render",
    value: function render() {
      var params = this.props.params;
      var _this$state = this.state,
          showAni = _this$state.showAni,
          loading = _this$state.loading;
      return /*#__PURE__*/_react.default.createElement("div", {
        id: "modalBox"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_Confirm.default.modalContainer, " ").concat(showAni ? _Confirm.default.animate : _Confirm.default.leave)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _Confirm.default.modalBox
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _Confirm.default.modalContent
      }, /*#__PURE__*/_react.default.createElement("h2", null, params.content), /*#__PURE__*/_react.default.createElement("p", null, params.desc)), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_Confirm.default.modalFooter, " ").concat(_Confirm.default.clearfix)
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: _Confirm.default.modalFooterContent
      }, params.cancleText ? params.cancleText : /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "default",
        onClick: this.cancleHandle
      }, "\u53D6\u6D88"), /*#__PURE__*/_react.default.createElement(_button.default, {
        type: "primary",
        onClick: this.okHandle,
        loading: loading
      }, "\u786E\u8BA4")))), /*#__PURE__*/_react.default.createElement("div", {
        className: "".concat(_Confirm.default.modalBg, " ").concat(showAni ? _Confirm.default.animate : _Confirm.default.leave),
        onClick: !params.forbiddenCheck ? this.cancleHandle : undefined
      })));
    }
  }]);

  return ConfirmChild;
}(_react.Component);

exports.default = ConfirmChild;