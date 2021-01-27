"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/es/message/style");

var _message2 = _interopRequireDefault(require("antd/es/message"));

var _react = _interopRequireWildcard(require("react"));

var _cosJsSdkV = _interopRequireDefault(require("cos-js-sdk-v5"));

var _jsMd5File = _interopRequireDefault(require("js-md5-file"));

var _fileExtension = _interopRequireDefault(require("file-extension"));

var _servers = require("./servers");

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

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

/ tslint:disable /;
;

var UploadInput = /*#__PURE__*/function (_Component) {
  _inherits(UploadInput, _Component);

  var _super = _createSuper(UploadInput);

  function UploadInput(props) {
    var _this;

    _classCallCheck(this, UploadInput);

    _this = _super.call(this, props);
    _this.uniqueId = ''; // 点击上传文件
    // @ts-ignore

    _this.handleFiles = function (e) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var fileList, _this$props, maxSize, accept, fileNameLength, files, filesList, newfileList;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const file = e.target.files[0];
                fileList = this.state.fileList;
                _this$props = this.props, maxSize = _this$props.maxSize, accept = _this$props.accept, fileNameLength = _this$props.fileNameLength;
                files = this.inputFile.files;

                if (files) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", false);

              case 5:
                filesList = Array.from(files).filter(function (file) {
                  var name = file.name;
                  var size = file.size ? file.size / 1024 / 1024 : 0;
                  var extension = name.substring(name.lastIndexOf(".") + 1, name.length); //文件扩展名
                  // @ts-ignore

                  if (accept.indexOf(extension.toLowerCase()) === -1 && accept !== '*') {
                    _this2.props.error('不支持上传的文件类型！'); // this.inputFile.files[index] = null;


                    return false;
                  }

                  if (!file) {
                    // this.inputFile.files[index] = null;
                    return false;
                  } // if (fileList.length > 9) {
                  //   this.props.error('目前仅支持上传10个附件！');
                  //   this.inputFile.value = null;
                  //   return false;
                  // }
                  // 文件名过长的时候


                  if (fileNameLength && file.name.length > fileNameLength) {
                    _this2.props.error("\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7".concat(fileNameLength, "\u4E2A\u5B57\u7B26\uFF01")); // this.inputFile.files[index] = null;


                    return false;
                  } // 当文件过大的时候，进行提示


                  if (size > maxSize) {
                    var sizeLength = maxSize > 1024 ? "".concat(maxSize / 1024, "G") : "".concat(maxSize, "M");

                    _this2.props.error("\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(sizeLength, "\uFF01")); // this.inputFile.files[index] = null;


                    return false;
                  }

                  return true;
                });

                if (!(filesList.length === 0)) {
                  _context.next = 9;
                  break;
                }

                this.inputFile.value ? this.inputFile.value = null : '';
                return _context.abrupt("return", false);

              case 9:
                newfileList = filesList.map(function (file, index) {
                  var id = String(Math.random()).replace('\.', '');
                  var name = file.name;
                  var size = file.size ? file.size : 0;
                  var extension = name.substring(name.lastIndexOf(".") + 1, name.length); //文件扩展名

                  var fileObj = {
                    index: index,
                    id: id,
                    file: file,
                    name: file.name,
                    status: "ready",
                    progress: 0,
                    uid: '',
                    url: '',
                    fileId: '',
                    size: size,
                    md5: '',
                    fileName: name,
                    createTime: new Date().getTime(),
                    extension: extension,
                    downloadUrl: '',
                    previewUrl: ''
                  };
                  return fileObj;
                });
                this.setState({
                  file: filesList,
                  fileList: fileList.concat(newfileList)
                }, function () {
                  _this2.updateFileList();

                  setTimeout(function () {
                    for (var index = 0; index < filesList.length; index++) {
                      var element = filesList[index];

                      _this2.sendFiles(element, newfileList[index].id);
                    }
                  }, 10);
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    };

    _this.sendFiles = function (file, id) {
      _this.uploadStatus(id, {
        progress: 0,
        status: "ready"
      }, function () {
        _this.sendFiles1(file, id);
      });
    }; // 把文件传到后端


    _this.sendFiles1 = function (file, id) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var _this3 = this;

        var _this$props2, url, token, fileList, ext, fileMd5, sendData, response, hasExist, hasFile, CosParam;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$props2 = this.props, url = _this$props2.url, token = _this$props2.token;
                fileList = this.state.fileList;

                if (file.name) {
                  _context2.next = 4;
                  break;
                }

                return _context2.abrupt("return", false);

              case 4:
                // 获取文件后缀
                ext = (0, _fileExtension.default)(file.name).toLowerCase(); // 获取文件MD5加密

                _context2.next = 7;
                return this.getFileMd5(file);

              case 7:
                fileMd5 = _context2.sent;
                // 请求密钥
                sendData = {
                  client: 'R_Center',
                  extension: ext,
                  fileName: file.name,
                  genre: 1,
                  guid: null,
                  md5: fileMd5,
                  method: 'put',
                  provider: 'tencent',
                  size: file.size
                };
                _context2.prev = 9;
                _context2.next = 12;
                return (0, _servers.postSignatures)(sendData, url, token);

              case 12:
                response = _context2.sent;
                console.log("UploadInput -> response", response); // 判断文件是否还存在

                hasExist = this.props.fileList.some(function (fileListItem) {
                  return fileListItem.id === id || fileListItem.fileId === response.fileId || fileListItem.id === response.fileId || fileListItem.md5 === response.md5;
                }); // 如果是token失效的时候

                if (!(response.code === 40100)) {
                  _context2.next = 18;
                  break;
                }

                this.props.error('登录已失效，请重新登录！', 401);
                return _context2.abrupt("return", false);

              case 18:
                /**当文件存在的时候**/
                if (response && response.upload && hasExist) {
                  this.uploadStatus(id, {
                    progress: 100,
                    status: "uploading"
                  });
                  this.inputFile.value ? this.inputFile.value = null : ''; // 判断文件是否已经存在

                  hasFile = this.state.fileList.some(function (fileListItem) {
                    return fileListItem.uid === response.fileId || fileListItem.fileId === response.fileId || fileListItem.md5 === response.md5;
                  });

                  if (!hasFile) {
                    _message2.default.success("".concat(file.name, "  \u6587\u4EF6\u4E0A\u4F20\u6210\u529F!"));

                    setTimeout(function () {
                      _this3.uploadStatus(id, {
                        progress: 100,
                        uid: response.fileId,
                        status: "done",
                        name: file.name,
                        url: response.path,
                        fileId: response.fileId,
                        md5: response.md5,
                        downloadUrl: response.path,
                        previewUrl: response.path
                      });
                    }, 500);
                  } else if (hasExist) {
                    this.props.error('文件已存在，不能重新上传！');
                    this.inputFile.value ? this.inputFile.value = null : '';
                    this.props.onCancelFile && this.props.onCancelFile(id);
                  }
                } else if (hasExist) {
                  // 设置参数
                  CosParam = {
                    signature: response.signature,
                    bucket: response.bucket,
                    region: response.region,
                    path: response.path,
                    id: response.fileId
                  };
                  this.sendCosFile(file, CosParam, id);
                }

                _context2.next = 26;
                break;

              case 21:
                _context2.prev = 21;
                _context2.t0 = _context2["catch"](9);
                this.uploadStatus(id, {
                  progress: 0,
                  status: 'error'
                });
                this.props.error('网络错误,请稍后重试！');
                this.inputFile.value ? this.inputFile.value = null : '';

              case 26:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[9, 21]]);
      }));
    }; // 进行请求腾讯云文件上传


    _this.sendCosFile = function (file, CosParam, id) {
      var fileList = _this.state.fileList;
      var _this$props3 = _this.props,
          url = _this$props3.url,
          token = _this$props3.token;

      var that = _assertThisInitialized(_this);

      var OSSData = new _cosJsSdkV.default({
        // @ts-ignore
        getAuthorization: function getAuthorization(options, callback) {
          callback(CosParam.signature);
        }
      });

      try {
        OSSData.putObject({
          Bucket: CosParam.bucket,
          Region: CosParam.region,
          Key: CosParam.path,
          Body: file,
          // SliceSize: '5M',
          // AsyncLimit: '5',
          // @ts-ignore
          TaskReady: function TaskReady(e) {
            /* 非必须 */
          },
          // @ts-ignore
          onHashProgress: function onHashProgress(e) {
            /* 非必须 */
            //
          },
          onProgress: function onProgress(e) {
            that.uploadStatus(id, {
              status: "uploading",
              progress: Math.round(e.percent * 100)
            });
          }
        }, function (err, data) {
          return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var hasExist, response, hasFile;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    // 判断文件是否还存在id
                    hasExist = that.props.fileList.some(function (fileListItem) {
                      return fileListItem.id === id;
                    });

                    if (!(!err && data.statusCode === 200 && hasExist)) {
                      _context3.next = 8;
                      break;
                    }

                    _context3.next = 4;
                    return (0, _servers.updateFile)({
                      fileId: "".concat(CosParam.id),
                      version: 1.0
                    }, url, token);

                  case 4:
                    response = _context3.sent;

                    if (response) {
                      that.inputFile.value = null; // 判断文件是否已经存在

                      hasFile = that.state.fileList.some(function (fileListItem) {
                        return fileListItem.uid === response.id || fileListItem.fileId === response.id;
                      });

                      if (!hasFile) {
                        _message2.default.success("".concat(file.name, "  \u6587\u4EF6\u4E0A\u4F20\u6210\u529F!"));

                        that.uploadStatus(id, {
                          progress: 100,
                          uid: response.id,
                          name: response.fileName,
                          status: 'done',
                          url: response.path,
                          fileId: response.id,
                          md5: response.md5,
                          downloadUrl: response.path,
                          previewUrl: response.path
                        });
                      } else {
                        that.props.error('文件已存在，不能重新上传！');
                        that.props.onCancelFile && that.props.onCancelFile(id);
                      }
                    }

                    _context3.next = 9;
                    break;

                  case 8:
                    if (hasExist) {
                      that.uploadStatus(id, {
                        progress: 0,
                        status: 'error'
                      });
                      that.props.error("".concat(file.name, "  \u6587\u4EF6\u4E0A\u4F20\u5931\u8D25!"));
                    }

                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        });
      } catch (_a) {
        _this.props.error('网络错误,请稍后重试！');

        _this.inputFile.value ? _this.inputFile.value = null : '';
      }
    }; // 更新不同文件的状态


    _this.uploadStatus = function (id, options, callback) {
      // 判断文件是否已经存在
      var hasFile = _this.props.fileList.some(function (fileListItem) {
        return fileListItem.id === id;
      });

      if (hasFile) {
        var newfileList = _this.state.fileList.map(function (file) {
          if (file.id === id) {
            return Object.assign(Object.assign({}, file), options);
          }

          return file;
        });

        _this.setState({
          fileList: newfileList
        }, function () {
          _this.updateFileList();

          callback && callback();
        });
      }
    }; // 当文件上传成功的时候，更新列表


    _this.updateFileList = function () {
      var _this$state = _this.state,
          file = _this$state.file,
          fileList = _this$state.fileList;

      _this.props.updateList({
        file: file,
        fileList: fileList
      });
    };

    _this.getFileMd5 = function (file) {
      return __awaiter(_assertThisInitialized(_this), void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
        var md5String;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                md5String = new Promise(function (resolve, reject) {
                  (0, _jsMd5File.default)(file, // @ts-ignore
                  function (err, fileMd5) {
                    if (fileMd5) {
                      resolve(fileMd5);
                    }
                  }, function (err, data) {
                    if (err === 1 && data) {
                      reject(data);
                    }
                  });
                });
                return _context4.abrupt("return", md5String);

              case 2:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));
    };

    _this.state = {
      file: [],
      fileList: props.fileList || []
    };
    return _this;
  }

  _createClass(UploadInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onRef && this.props.onRef(this);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (JSON.stringify(props.fileList) !== JSON.stringify(this.state.fileList)) {
        if (props.fileList.length < this.state.fileList.length) {
          this.inputFile.value ? this.inputFile.value = null : '';
        }

        this.setState({
          fileList: props.fileList
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props4 = this.props,
          children = _this$props4.children,
          accept = _this$props4.accept,
          _this$props4$multiple = _this$props4.multiple,
          multiple = _this$props4$multiple === void 0 ? false : _this$props4$multiple;
      return /*#__PURE__*/_react.default.createElement("div", {
        onClick: function onClick() {
          return _this4.inputFile.click();
        }
      }, /*#__PURE__*/_react.default.createElement("input", {
        type: "file",
        name: "file",
        accept: accept,
        multiple: multiple,
        onChange: function onChange(e) {
          return _this4.handleFiles(e);
        },
        style: {
          display: 'none'
        },
        ref: function ref(e) {
          return _this4.inputFile = e;
        }
      }), children);
    }
  }]);

  return UploadInput;
}(_react.Component);

var _default = UploadInput;
exports.default = _default;