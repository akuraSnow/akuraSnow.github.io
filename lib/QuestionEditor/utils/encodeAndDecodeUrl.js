"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encodeJsonToBase64URL = encodeJsonToBase64URL;
exports.decodeBase64URL = decodeBase64URL;
exports.originInfoAfterDecodeBase64URL = originInfoAfterDecodeBase64URL;

// 把地址转换为base64Url
function encodeJsonToBase64URL(jsonString) {
  if (!jsonString) return '';
  var base64URL = '';

  try {
    // 转为英文字符 汉字会报错
    var tempstr = window.encodeURIComponent(jsonString); // 转换为base64字符串

    var base64Str = window.btoa(tempstr); // 替换base64中 / --> _  = --> '' + --> -

    base64URL = base64Str.replace(/=/g, '').replace(/\//g, '_').replace(/\+/g, '-');
  } catch (e) {
    console.error(e);
  }

  return base64URL;
} // 解码base64URL


function decodeBase64URL(base64Str) {
  if (!base64Str) return '';
  var result = '';

  try {
    // 从base64URL 解析为base64
    var mode = base64Str.length % 4;

    if (mode > 0) {
      base64Str += new Array(5 - mode).join('=');
    }

    var tempStr = base64Str.replace(/\-/g, '+').replace(/\_/g, '/');
    var base64 = window.atob(tempStr);
    var url = window.decodeURIComponent(base64);
    result = url;
  } catch (e) {
    console.error(e);
  }

  return result;
}

function originInfoAfterDecodeBase64URL(base64Str) {
  var result = undefined;

  try {
    var temp = decodeBase64URL(base64Str);
    result = JSON.parse(temp);
  } catch (e) {
    console.error(e);
  }

  return result;
} // // 解码base64URL
// export function decodeBase64URLToQueryString(base64Str: string): string {
//     if (!base64Str) return '';
//     let result = '';
//     try {
//         // 从base64URL 解析为base64
//         const mode = base64Str.length % 4;
//         if (mode > 0) {
//             base64Str += new Array(5 - mode).join('=');
//         }
//         const tempStr = base64Str.replace(/\-/g, '+').replace(/\_/g, '/');
//         const base64 = window.atob(tempStr);
//         const jsonStr = (window as any).decodeURIComponent(base64);
//         // 解析到对象
//         const obj = JSON.parse(jsonStr);
//         let firstKey = true;
//         for (let key in obj) { // 需要URIencode
//             if (firstKey) {
//                 result += `${key}=${encodeURIComponent(obj[key])}`;
//                 firstKey = false;
//             } else {
//                 result += `&${key}=${encodeURIComponent(obj[key])}`;
//             }
//         }
//     } catch (e) {
//         console.error(e);
//     }
//     return result;
// }