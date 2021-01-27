function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import "antd/es/progress/style";
import _Progress from "antd/es/progress";
import "antd/es/icon/style";
import _Icon from "antd/es/icon";
import "antd/es/message/style";
import _message from "antd/es/message";
import "antd/es/button/style";
import _Button from "antd/es/button";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

// @ts-nocheck
import React from 'react';
import UploadFile from '../UploadFile';
import Tips from '../MessageTips/Tips/Tips';
import styles from "./index.css"; // 提交更新属性需要的值

var attriubteModle = ["areaName", "category", "chapters", "createUserName", "createUserid", "descreption", "extendJson", "files", "grades", "name", "ownerId", "ownerOrgId", "referenceResourceId", "schoolYear", "sourceAppCode", "sourceOrgId", "studySectionCode", "subjects", "transferOriginId", "year"];

var AddQuestionVideo = /*#__PURE__*/function (_React$Component) {
  _inherits(AddQuestionVideo, _React$Component);

  var _super = _createSuper(AddQuestionVideo);

  function AddQuestionVideo(props) {
    var _this;

    _classCallCheck(this, AddQuestionVideo);

    _this = _super.call(this, props); // // 删除文件

    _this.onDeleteFile = function (id) {
      var fileList = _this.state.fileList;
      var cacheMap = _this.props.cacheMap;
      var newFileList = fileList.filter(function (item) {
        return item.id !== id;
      }); // 对cacheMap进行更新
      // if (cacheMap[id]) {

      cacheMap[id] = null; // }

      _this.setState({
        fileList: newFileList
      });
    };

    _this.cleanFileList = function () {
      var transmissionValue = _this.props.transmissionValue;

      _this.setState({
        fileList: []
      }, function () {
        transmissionValue && transmissionValue([]);
      });
    }; // 取消编辑


    _this.cancleEdit = function () {
      _this.setState({
        visible: false,
        attribute: {}
      });
    }; // 焦点获得


    _this.getFocus = function (id) {
      _this.setState({
        currentFocus: id
      });
    }; // 调用子组件中的上传函数


    _this.reUploadFile = function (fileItem) {
      _this.child.reUploadFile(fileItem);
    };

    _this.onCancelFile = function (id) {
      var fileList = _this.state.fileList;
      var newFileList = fileList.filter(function (item) {
        return item.id !== id;
      });

      _this.setState({
        fileList: newFileList
      });
    };

    var fileList = props.videoUrl ? [{
      downloadUrl: props.videoUrl,
      extension: "mp3",
      fileId: "530051721603457024",
      name: "xxx.mp3",
      previewUrl: props.videoUrl,
      progress: 100,
      status: "done",
      url: props.videoUrl
    }] : [];
    _this.state = {
      visible: false,
      inputStatus: false,
      attribute: {},
      currentFocus: undefined,
      currentEditItem: undefined,
      fileList: fileList
    };
    _this.child = null;
    _this.hasTips = false;
    return _this;
  }

  _createClass(AddQuestionVideo, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.videoUrl && this.state.fileList.length === 0) {
        var url = nextProps.videoUrl;
        this.setState({
          fileList: [{
            createTime: 1604383055108,
            downloadUrl: url,
            extension: "mp3",
            fileId: "530051721603457024",
            previewUrl: url,
            progress: 100,
            size: 100,
            status: "done",
            url: url
          }]
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          transmissionValue = _this$props.transmissionValue,
          accept = _this$props.accept;
      var _this$state = this.state,
          visible = _this$state.visible,
          attribute = _this$state.attribute,
          currentFocus = _this$state.currentFocus,
          fileList = _this$state.fileList;
      return /*#__PURE__*/React.createElement("div", {
        className: styles.wrapper
      }, /*#__PURE__*/React.createElement("header", {
        className: styles.title
      }, fileList.length === 1 && (fileList[0].status === 'done' || fileList[0].status === 'error') ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Button, {
        type: "primary",
        disabled: true
      }, "\u4E0A\u4F20\u97F3\u9891"), /*#__PURE__*/React.createElement("span", {
        className: styles.remarks
      }, "\u975E\u5FC5\u586B\uFF0C\u4EC5\u652F\u6301\u4E0A\u4F20\u4E00\u4E2AMP3\u6587\u4EF6")) : /*#__PURE__*/React.createElement(UploadFile, {
        url: process.env.javaUrl,
        token: localStorage.getItem('userToken'),
        maxSize: 2048,
        onRef: function onRef(ref) {
          return _this2.child = ref;
        } // maxLength={10}
        ,
        fileNameLength: 100,
        showLists: false,
        multiple: false,
        fileList: fileList,
        accept: accept,
        error: function error(_error, status) {
          _message.error(_error);
        },
        onChangeFileList: function onChangeFileList(list) {
          console.log("FileListAndArea -> render -> list", list);

          _this2.setState({
            fileList: _toConsumableArray(list)
          }, function () {
            if (!_this2.hasTips) {
              Tips.open({
                message: '音频上传中！',
                type: 'spin',
                isShow: true,
                maskBackgroud: 'rgba(0, 0, 0, 0.1)'
              });
              _this2.hasTips = true;
            }

            if (list[0].status === 'done' || list[0].status === 'error') {
              Tips.close();
              _this2.hasTips = false;
            }

            if (list[0].status === 'done') {
              transmissionValue && transmissionValue(list);
            }
          });
        }
      }, /*#__PURE__*/React.createElement(_Button, {
        type: "primary"
      }, "\u4E0A\u4F20\u97F3\u9891"), /*#__PURE__*/React.createElement("span", {
        className: styles.remarks
      }, "\u975E\u5FC5\u586B\uFF0C\u4EC5\u652F\u6301\u4E0A\u4F20\u4E00\u4E2AMP3\u6587\u4EF6"))), /*#__PURE__*/React.createElement("main", {
        className: styles.list,
        ref: function ref(node) {
          return _this2.listArea = node;
        }
      }, fileList.length === 1 && fileList[0].status !== 'done' ? fileList.map(function (fileItem, index) {
        return /*#__PURE__*/React.createElement("div", {
          className: "audioItem ".concat(styles.fileItemList, " ").concat(fileItem.status === 'error' ? styles.err : ''),
          key: fileItem.id,
          title: fileItem.name
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
          className: styles.fileItemName
        }, fileItem.name), fileItem.status === 'ready' ? /*#__PURE__*/React.createElement(_Icon, {
          type: "loading"
        }) : '', /*#__PURE__*/React.createElement("div", {
          className: styles.errInfo
        }, fileItem.status === 'error' ? '上传失败' : '')), fileItem.status === 'ready' || fileItem.status === 'uploading' || fileItem.status === 'error' ? /*#__PURE__*/React.createElement("div", {
          className: styles.progressClass
        }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(_Progress, {
          percent: fileItem.progress,
          width: 1100,
          size: "small",
          status: "active",
          strokeColor: "#FE8D29",
          trailColor: "#D9D9D9"
        })), /*#__PURE__*/React.createElement("div", {
          className: styles.oprationBtn,
          onClick: function onClick() {
            return _this2.onCancelFile(fileItem.id);
          }
        }, fileItem.status === 'error' ? '删除' : '')) : '', !fileItem.editStatus && (fileItem.status === 'done' || fileItem.status === 'olddone') ? /*#__PURE__*/React.createElement("div", {
          className: styles.operationBox
        }, /*#__PURE__*/React.createElement("div", {
          onClick: function onClick() {
            return _this2.onDeleteFile(fileItem.id);
          }
        }, "\u5220\u9664")) : '');
      }) : /*#__PURE__*/React.createElement("div", null), fileList.length === 1 && fileList[0].status === 'done' ? /*#__PURE__*/React.createElement("div", {
        className: styles.videoItem
      }, /*#__PURE__*/React.createElement("audio", {
        width: "320",
        height: "54",
        controls: true,
        loop: true,
        controlsList: "nodownload"
      }, /*#__PURE__*/React.createElement("source", {
        src: fileList[0].previewUrl,
        type: ""
      })), /*#__PURE__*/React.createElement("span", {
        onClick: this.cleanFileList
      }, "\u5220\u9664")) : /*#__PURE__*/React.createElement("div", null)));
    }
  }]);

  return AddQuestionVideo;
}(React.Component);

export { AddQuestionVideo as default };