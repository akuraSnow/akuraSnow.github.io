function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/progress/style";
import _Progress from "antd/es/progress";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";

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

import React, { Component } from 'react';
import "./index.css"; // import tEmpty from './assets/tEmpty.svg';
// import Cos from 'cos-js-sdk-v5';
// import jsMd5File from 'js-md5-file';
// import fileExtension from 'file-extension';
// import tUpload from './assets/tUploads.svg';
// import iuploadFile from './assets/iuploadFile.svg';
// @ts-ignore

import audioPic from './assets/ic_file_audio.svg'; // @ts-ignore

import picturePic from './assets/ic_file_picture.svg'; // @ts-ignore

import videoPic from './assets/ic_file_video.svg'; // @ts-ignore

import unknownPic from './assets/ic_file_unknown.svg'; // @ts-ignore

import attachmentPic from './assets/ic_file_attachment.svg'; // @ts-ignore

import flashPic from './assets/ic_file_animate.svg'; // @ts-ignore

import wordPic from './assets/ic_file_word.svg'; // @ts-ignore

import pptPic from './assets/ic_file_ppt.svg'; // @ts-ignore

import gspPic from './assets/ic_file_gsp.svg'; // @ts-ignore

import UploadInput from './uploadFile'; // const { Dragger } = Upload;

export var acceptName = {
  image: ['JPG', 'PNG', 'JPEG', 'JFIF', 'PJPEG', 'PJG', 'GIF', 'BMP', 'DIB', 'GIF', 'IFF', 'JPEG', 'JPG', 'JPE', 'PNG', 'TIF', 'TIFF'],
  video: ['CDA', 'WAV', 'WMA', 'RA', 'MIDI', 'OGG', 'APE', 'FLAC', 'AAC', 'mp3', 'wma', 'wav'],
  audio: ['MPGE', 'MOV', 'rm', 'ram', 'mp4', 'avi', 'mkv', 'flv', 'rmvb', 'wmv', '3gp', 'asf', 'm4v'],
  flash: ['swf', 'exe', 'swl'],
  word: ['xls', 'xlsx', 'txt', 'doc', 'docx', 'pdf', 'text'],
  zip: ['zip', 'rar', '7z'],
  gsp: ['gsp', 'gss'],
  ppt: ['ppt', 'pptx', 'pptm']
};

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
        'ppt': pptPic,
        'flash': flashPic,
        'image': picturePic,
        'video': videoPic,
        'word': wordPic,
        'audio': audioPic,
        'zip': attachmentPic,
        'gsp': gspPic,
        'unknownPic': unknownPic
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

      return /*#__PURE__*/React.createElement("img", {
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

      return /*#__PURE__*/React.createElement("div", {
        className: "fileContent"
      }, /*#__PURE__*/React.createElement("div", {
        className: "hasFileBotton"
      }, /*#__PURE__*/React.createElement(UploadInput, {
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
        return /*#__PURE__*/React.createElement("div", {
          className: "fileItemList".concat(" ", fileItem.status === 'error' ? "err" : ''),
          key: fileItem.id,
          title: fileItem.name
        }, /*#__PURE__*/React.createElement("div", null, _this2.getExtensionImage(fileItem.extension), /*#__PURE__*/React.createElement("span", {
          className: "fileName"
        }, fileItem.name), fileItem.status === 'ready' ? /*#__PURE__*/React.createElement(_Icon, {
          type: "loading"
        }) : ''), fileItem.status === 'ready' || fileItem.status === 'uploading' || fileItem.status === 'error' ? /*#__PURE__*/React.createElement("div", {
          className: "progressClass"
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Progress, {
          percent: fileItem.progress,
          width: 1100,
          size: "small",
          status: "active",
          strokeColor: "#FE8D29",
          trailColor: "#D9D9D9"
        })), fileItem.status === 'error' ? /*#__PURE__*/React.createElement("div", {
          className: "oprationBtn",
          onClick: function onClick() {
            return _this2.reUploadFile(fileItem);
          }
        }, "\u91CD\u65B0\u4E0A\u4F20") : /*#__PURE__*/React.createElement("div", null), /*#__PURE__*/React.createElement("div", {
          className: "oprationBtn",
          onClick: function onClick() {
            return _this2.onCancelFile(fileItem.id);
          }
        }, "\u53D6\u6D88\u4E0A\u4F20")) : '');
      }));
    }
  }]);

  return UploadFile;
}(Component);

export { UploadFile as default };