"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.acceptName = void 0;

require("antd/es/progress/style");

var _progress = _interopRequireDefault(require("antd/es/progress"));

require("antd/es/icon/style");

var _icon = _interopRequireDefault(require("antd/es/icon"));

var _react = _interopRequireWildcard(require("react"));

require("./index.css");

var _ic_file_audio = _interopRequireDefault(require("./assets/ic_file_audio.svg"));

var _ic_file_picture = _interopRequireDefault(require("./assets/ic_file_picture.svg"));

var _ic_file_video = _interopRequireDefault(require("./assets/ic_file_video.svg"));

var _ic_file_unknown = _interopRequireDefault(require("./assets/ic_file_unknown.svg"));

var _ic_file_attachment = _interopRequireDefault(require("./assets/ic_file_attachment.svg"));

var _ic_file_animate = _interopRequireDefault(require("./assets/ic_file_animate.svg"));

var _ic_file_word = _interopRequireDefault(require("./assets/ic_file_word.svg"));

var _ic_file_ppt = _interopRequireDefault(require("./assets/ic_file_ppt.svg"));

var _ic_file_gsp = _interopRequireDefault(require("./assets/ic_file_gsp.svg"));

var _uploadFile = _interopRequireDefault(require("./uploadFile"));

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

// const { Dragger } = Upload;
var acceptName = {
  image: ['JPG', 'PNG', 'JPEG', 'JFIF', 'PJPEG', 'PJG', 'GIF', 'BMP', 'DIB', 'GIF', 'IFF', 'JPEG', 'JPG', 'JPE', 'PNG', 'TIF', 'TIFF'],
  video: ['CDA', 'WAV', 'WMA', 'RA', 'MIDI', 'OGG', 'APE', 'FLAC', 'AAC', 'mp3', 'wma', 'wav'],
  audio: ['MPGE', 'MOV', 'rm', 'ram', 'mp4', 'avi', 'mkv', 'flv', 'rmvb', 'wmv', '3gp', 'asf', 'm4v'],
  flash: ['swf', 'exe', 'swl'],
  word: ['xls', 'xlsx', 'txt', 'doc', 'docx', 'pdf', 'text'],
  zip: ['zip', 'rar', '7z'],
  gsp: ['gsp', 'gss'],
  ppt: ['ppt', 'pptx', 'pptm']
};
exports.acceptName = acceptName;

var UploadFile = /*#__PURE__*/function (_Component) {
  _inherits(UploadFile, _Component);

  var _super = _createSuper(UploadFile);

  function UploadFile(props) {
    var _this;

    _classCallCheck(this, UploadFile);

    _this = _super.call(this, props); // 更新上传文件数组

    _this.updateList = function (fileObj) {
      _this.setState({
        fileList: fileObj.fileList
      }, function () {
        _this.onChangeFileList();
      });
    }; // 删除文件列表


    _this.OnDeleteFile = function (id) {
      var fileList = _this.state.fileList;
      var newFileList = fileList.filter(function (item) {
        return item.uid !== id;
      });

      _this.setState({
        fileList: newFileList
      }, function () {
        _this.onChangeFileList();
      });
    }; // 增加删改的文件的时候，传出文件的值


    _this.onChangeFileList = function () {
      var fileList = _this.state.fileList;

      _this.props.onChangeFileList(fileList);
    };

    _this.onCancelFile = function (id) {
      var fileList = _this.state.fileList;
      var newFileList = fileList.filter(function (item) {
        return item.id !== id;
      });

      _this.setState({
        fileList: newFileList
      }, function () {
        _this.onChangeFileList();
      });
    }; // 调用子组件中的上传函数


    _this.reUploadFile = function (fileItem) {
      _this.child.sendFiles(fileItem.file, fileItem.id);
    }; // 获取文件图片


    _this.getExtensionImage = function (fileItem) {
      var _a;

      var fileType = 'unknownPic';
      var getImg = {
        'ppt': _ic_file_ppt.default,
        'flash': _ic_file_animate.default,
        'image': _ic_file_picture.default,
        'video': _ic_file_video.default,
        'word': _ic_file_word.default,
        'audio': _ic_file_audio.default,
        'zip': _ic_file_attachment.default,
        'gsp': _ic_file_gsp.default,
        'unknownPic': _ic_file_unknown.default
      };

      for (var key in acceptName) {
        if (Object.prototype.hasOwnProperty.call(acceptName, key) && Array.isArray(acceptName[key])) {
          var element = (_a = acceptName[key]) === null || _a === void 0 ? void 0 : _a.reduce(function (string, item) {
            return string + (item === null || item === void 0 ? void 0 : item.toLowerCase());
          }, '');

          if (element.indexOf(fileItem) > -1) {
            fileType = key;
          }
        }
      }

      return /*#__PURE__*/_react.default.createElement("img", {
        src: getImg[fileType]
      });
    };

    _this.state = {
      OSSData: {},
      fileList: props.fileList,
      files: null,
      fileMd5: ''
    };
    _this.child = null;
    return _this;
  }

  _createClass(UploadFile, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onRef && this.props.onRef(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (JSON.stringify(props.fileList) !== JSON.stringify(this.state.fileList)) {
        this.setState({
          fileList: props.fileList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          fileList = _this$state.fileList,
          files = _this$state.files;
      var _this$props = this.props,
          url = _this$props.url,
          token = _this$props.token,
          fileNameLength = _this$props.fileNameLength,
          _this$props$accept = _this$props.accept,
          accept = _this$props$accept === void 0 ? '' : _this$props$accept,
          _this$props$children = _this$props.children,
          children = _this$props$children === void 0 ? null : _this$props$children,
          _this$props$maxSize = _this$props.maxSize,
          maxSize = _this$props$maxSize === void 0 ? 100 : _this$props$maxSize,
          _this$props$multiple = _this$props.multiple,
          multiple = _this$props$multiple === void 0 ? true : _this$props$multiple,
          _this$props$showLists = _this$props.showLists,
          showLists = _this$props$showLists === void 0 ? true : _this$props$showLists; // let newFileList = JSON.parse(JSON.stringify(fileList));

      return /*#__PURE__*/_react.default.createElement("div", {
        className: "fileContent"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "hasFileBotton"
      }, /*#__PURE__*/_react.default.createElement(_uploadFile.default, {
        accept: accept,
        multiple: multiple,
        fileList: fileList,
        updateList: this.updateList,
        maxSize: maxSize,
        fileNameLength: fileNameLength,
        url: url,
        token: token,
        onRef: function onRef(ref) {
          return _this2.child = ref;
        },
        error: this.props.error,
        onCancelFile: function onCancelFile(id) {
          return _this2.onCancelFile(id);
        }
      }, children)), fileList.map(function (fileItem) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "fileItemList".concat(" ", fileItem.status === 'error' ? "err" : ''),
          key: fileItem.id,
          title: fileItem.name
        }, /*#__PURE__*/_react.default.createElement("div", null, _this2.getExtensionImage(fileItem.extension), /*#__PURE__*/_react.default.createElement("span", {
          className: "fileName"
        }, fileItem.name), fileItem.status === 'ready' ? /*#__PURE__*/_react.default.createElement(_icon.default, {
          type: "loading"
        }) : ''), fileItem.status === 'ready' || fileItem.status === 'uploading' || fileItem.status === 'error' ? /*#__PURE__*/_react.default.createElement("div", {
          className: "progressClass"
        }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_progress.default, {
          percent: fileItem.progress,
          width: 1100,
          size: "small",
          status: "active",
          strokeColor: "#FE8D29",
          trailColor: "#D9D9D9"
        })), fileItem.status === 'error' ? /*#__PURE__*/_react.default.createElement("div", {
          className: "oprationBtn",
          onClick: function onClick() {
            return _this2.reUploadFile(fileItem);
          }
        }, "\u91CD\u65B0\u4E0A\u4F20") : /*#__PURE__*/_react.default.createElement("div", null), /*#__PURE__*/_react.default.createElement("div", {
          className: "oprationBtn",
          onClick: function onClick() {
            return _this2.onCancelFile(fileItem.id);
          }
        }, "\u53D6\u6D88\u4E0A\u4F20")) : '');
      }));
    }
  }]);

  return UploadFile;
}(_react.Component);

exports.default = UploadFile;