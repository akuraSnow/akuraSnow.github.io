"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cosJsSdkV = _interopRequireDefault(require("cos-js-sdk-v5"));

var _jsMd5File = _interopRequireDefault(require("js-md5-file"));

var _fileExtension = _interopRequireDefault(require("file-extension"));

var _index = require("../../../MessageTips/index");

var _EditdQuestion = require("../../services/EditdQuestion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
}; // @ts-nocheck


var UploadFile = function UploadFile(props) {
  var _this = this;

  _classCallCheck(this, UploadFile);

  // 点击上传文件
  this.handleFiles = function (file) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var name, ext, fileMd5, sendData, res, response, uploadFile;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // const file = e.target.files[0];
              name = file.name; // 获取文件后缀

              ext = (0, _fileExtension.default)(file.name).toLowerCase(); // 获取文件MD5加密

              _context.next = 4;
              return this.getFileMd5(file);

            case 4:
              fileMd5 = _context.sent;
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
              _context.next = 8;
              return (0, _EditdQuestion.postSignatures)(sendData);

            case 8:
              res = _context.sent;
              console.log('res===>', res);
              response = res;
              /** 当文件存在的时候 **/

              if (response.upload) {
                uploadFile = {
                  uid: response.fileId,
                  name: file.name,
                  status: 'done',
                  url: response.path
                };
                this.file = uploadFile; // Tips.open({
                //     message: `${file.name}  文件上传成功!`,
                //     type: 'success',
                //     time: 2000
                // });
                // message.success(`${file.name}  文件上传成功!`);
                // ;

                this.updateFileList(response.path);
              } else {
                // 设置参数
                this.CosParam = {
                  signature: response.signature,
                  bucket: response.bucket,
                  region: response.region,
                  path: response.path,
                  id: response.fileId
                };
                this.file = file;
                this.sendCosFile();
              }

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  }; // 进行请求腾讯云文件上传


  this.sendCosFile = function () {
    var CosParam = _this.CosParam;
    var file = _this.file;
    var that = _this; // console.log('file===>', file);
    // console.log('CosParam===>', CosParam);

    var OSSData = new _cosJsSdkV.default({
      getAuthorization: function getAuthorization(options, callback) {
        callback(CosParam.signature);
      }
    });
    OSSData.putObject({
      Bucket: CosParam.bucket,
      Region: CosParam.region,
      Key: CosParam.path,
      Body: file,
      // SliceSize: '5M',
      // AsyncLimit: '5',
      TaskReady: function TaskReady(e) {
        /* 非必须 */
      },
      onHashProgress: function onHashProgress(e) {
        /* 非必须 */
        //
      },
      onProgress: function onProgress(e) {}
    }, function (err, data) {
      return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res, response, uploadFile;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!err && data.statusCode === 200)) {
                  _context2.next = 8;
                  break;
                }

                _context2.next = 3;
                return (0, _EditdQuestion.updateFile)({
                  fileId: "".concat(CosParam.id),
                  version: 1.0
                });

              case 3:
                res = _context2.sent;
                response = res;

                if (response) {
                  uploadFile = {
                    uid: response.id,
                    name: response.fileName,
                    status: 'done',
                    url: response.path
                  };
                  that.file = uploadFile;
                  that.updateFileList(response.path);
                }

                _context2.next = 10;
                break;

              case 8:
                console.error('文件上传失败原因==>', err);

                _index.Tips.open({
                  message: '文件上传失败！',
                  type: 'fail',
                  time: 2000
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    });
  }; // 当文件上传成功的时候，更新列表


  this.updateFileList = function (path) {
    _this.imageUrl = path;

    _this.callBack(path);
  };

  this.getFileMd5 = function (file) {
    return __awaiter(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var md5String;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              md5String = new Promise(function (resolve, reject) {
                (0, _jsMd5File.default)(file,
                /* eslint handle-callback-err: "warn" */
                function (err, fileMd5) {
                  console.log('fileMd5===>', fileMd5);

                  if (fileMd5) {
                    resolve(fileMd5);
                  }
                }, function (err, data) {
                  if (err === 1 && data) {
                    reject(data);
                  }
                });
              });
              return _context3.abrupt("return", md5String);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
  };

  console.log(props);
  this.CosParam = {
    signature: '',
    bucket: '',
    region: '',
    path: '',
    id: 0
  };
  this.callBack = props.callBack;
  this.handleFiles(props.blob);
  this.imageUrl = '';
};

var _default = UploadFile;
exports.default = _default;