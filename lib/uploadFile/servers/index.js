"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postSignatures = postSignatures;
exports.updateFile = updateFile;

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

// 提交签名数据，返回签名信息（2步合一）
function postSignatures(params, url, token) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", (0, _request.default)("".concat(url, "/ebook/api/admin/ebook/file?version=1.0"), {
              method: 'POST',
              data: params,
              // @ts-ignore
              token: token
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
} // 提交文件数据，更新数据


function updateFile(params, url, token) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", (0, _request.default)("".concat(url, "/ebook/api/admin/ebook/file?fileId=").concat(params.fileId, "&version=1.0"), {
              method: 'PUT',
              data: {},
              // @ts-ignore
              token: token
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
}