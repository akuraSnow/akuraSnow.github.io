var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
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
/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-25 17:53:54
 * @LastEditTime: 2019-11-14 13:14:50
 * @LastEditors: Please set LastEditors
 */
// import Http from '../../axios/http';


import JAVAHttp from '../utils/axios/javaHttp';
import request from '../utils/request';
import BaseConfig from '../utils/axios/baseUrl';
var javaBasic = BaseConfig.questionanalyze(); // @ts-ignore

export function JAVAHttpFuc(state, url, data) {
  var sendData = {};

  if (state !== 'get' && state !== 'postmultipart') {
    sendData = {
      type: state,
      url: '/warehouse' + url,
      data: data
    };
  } else if (state === 'postmultipart') {
    var formData = new FormData();
    Object.keys(data).forEach(function (key) {
      formData.append(key, data[key]);
    });
    sendData = {
      type: 'post',
      url: '/warehouse' + url,
      data: formData,
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
  } else {
    sendData = {
      type: state,
      url: '/warehouse' + url,
      params: data
    };
  }

  return JAVAHttp.config(sendData);
}
export function JAVAHttpEbook(state, url, data) {
  var sendData = {};

  if (state !== 'get') {
    sendData = {
      type: state,
      url: '/ebook' + url,
      data: data
    };
  } else {
    sendData = {
      type: state,
      url: '/ebook' + url,
      params: data
    };
  }

  return JAVAHttp.config(sendData);
} // /warehouse
// 从图片识别公式

export function identifyFormulaFromImage(data) {
  return JAVAHttpFuc('postmultipart', '/api/images/formula/text', data);
} // 提交签名数据，返回签名信息（2步合一）
// export function postSignatures(data) {
//     return JAVAHttpFuc('post',`/ebook/api/admin/ebook/file`, data)
// }
// // 提交文件数据，更新数据
// export async function updateFile(params) {
//     return JAVAHttpFuc('put',`/ebook/api/admin/ebook/file?fileId=${params.fileId}`, {})
// }
// 备课包图片试题保存并上架接口

export function SaveAndPutAway(data) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", request("javaUrl|/warehouse/api/admin/preparations/question", {
              method: 'post',
              data: data
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
} // 提交签名数据，返回签名信息（2步合一）

export function postSignatures(data) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", request("javaUrl|/ebook/api/admin/ebook/file", {
              method: 'post',
              data: data
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
} // 提交文件数据，更新数据

export function updateFile(data) {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", request("javaUrl|/ebook/api/admin/ebook/file", {
              method: 'PUT',
              data: data
            }));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}