"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plugin = exports.AnnotateToolbar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var addAnnotateMark = function addAnnotateMark(change, annotation) {
  change.addMark({
    type: 'annotate',
    data: {
      annotation: annotation
    }
  });
};

var defaultRenderer = {
  annotate: function annotate(props) {
    var attributes = props.attributes,
        children = props.children,
        mark = props.mark;
    var annotation = mark.data.get('annotation');
    return /*#__PURE__*/_react.default.createElement("strong", _extends({}, attributes, {
      "data-annotation": annotation,
      style: {
        backgroundColor: '#00ff00'
      }
    }), children);
  }
};
var annotateRenderer = defaultRenderer;

var AnnotateToolbar = /*#__PURE__*/function (_Component) {
  _inherits(AnnotateToolbar, _Component);

  var _super = _createSuper(AnnotateToolbar);

  function AnnotateToolbar() {
    var _this;

    _classCallCheck(this, AnnotateToolbar);

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(_args));

    _this.submitChange = function () {
      var _value$change;

      var _this$props = _this.props,
          value = _this$props.value,
          onChange = _this$props.onChange;

      var change = (_value$change = value.change()).call.apply(_value$change, arguments);

      onChange(change);
    };

    _this.handleSubmit = function (e, closePortal) {
      e.preventDefault();
      var data = new FormData(e.target);
      var annotation = data.get('annotateText');
      console.log(annotation);

      if (annotation) {
        _this.submitChange(addAnnotateMark, annotation);

        closePortal();
      }
    };

    return _this;
  }

  _createClass(AnnotateToolbar, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react.default.createElement(_reactPortal.PortalWithState, {
        closeOnOutsideClick: true,
        closeOnEsc: true
      }, function (_ref) {
        var openPortal = _ref.openPortal,
            closePortal = _ref.closePortal,
            isOpen = _ref.isOpen,
            portal = _ref.portal;
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
          className: "toolbar"
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          onClick: openPortal
        }, "Annotate")), portal( /*#__PURE__*/_react.default.createElement("div", {
          className: "modal"
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "modal-content"
        }, /*#__PURE__*/_react.default.createElement("span", {
          className: "close"
        }, /*#__PURE__*/_react.default.createElement("button", {
          type: "button",
          onClick: closePortal
        }, "Close me!")), /*#__PURE__*/_react.default.createElement("form", {
          onSubmit: function onSubmit(e) {
            return _this2.handleSubmit(e, closePortal);
          }
        }, /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("textarea", {
          id: "annotateText",
          name: "annotateText"
        }), /*#__PURE__*/_react.default.createElement("button", {
          type: "submit"
        }, "Annotate")))))));
      });
    }
  }]);

  return AnnotateToolbar;
}(_react.Component);

exports.AnnotateToolbar = AnnotateToolbar;

var plugin = function plugin() {
  return {
    renderMark: annotateRenderer,
    name: 'mark-annotate',
    changes: {
      addAnnotateMark: addAnnotateMark
    }
  };
};

exports.plugin = plugin;