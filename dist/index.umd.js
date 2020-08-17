(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('antd/es/message/style'), require('antd/es/message'), require('react'), require('url'), require('http'), require('https'), require('zlib'), require('stream'), require('buffer'), require('string_decoder'), require('util')) :
  typeof define === 'function' && define.amd ? define(['exports', 'antd/es/message/style', 'antd/es/message', 'react', 'url', 'http', 'https', 'zlib', 'stream', 'buffer', 'string_decoder', 'util'], factory) :
  (global = global || self, factory(global.eastedu = {}, null, global._message, global.React, global.url, global.http, global.https, global.zlib, global.stream, global.buffer, global.string_decoder, global.util$1));
}(this, (function (exports, style, _message, React, url, http, https, zlib, stream, buffer, string_decoder, util$1) { 'use strict';

  _message = _message && _message.hasOwnProperty('default') ? _message['default'] : _message;
  var React__default = 'default' in React ? React['default'] : React;
  url = url && url.hasOwnProperty('default') ? url['default'] : url;
  http = http && http.hasOwnProperty('default') ? http['default'] : http;
  https = https && https.hasOwnProperty('default') ? https['default'] : https;
  zlib = zlib && zlib.hasOwnProperty('default') ? zlib['default'] : zlib;
  stream = stream && stream.hasOwnProperty('default') ? stream['default'] : stream;
  buffer = buffer && buffer.hasOwnProperty('default') ? buffer['default'] : buffer;
  string_decoder = string_decoder && string_decoder.hasOwnProperty('default') ? string_decoder['default'] : string_decoder;
  util$1 = util$1 && util$1.hasOwnProperty('default') ? util$1['default'] : util$1;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  /**
   * http://www.myersdaily.org/joseph/javascript/md5-text.html
   * http://pajhome.org.uk/crypt/md5
   * https://github.com/wbond/md5-js
   */
  function md5cycle(x, k) {
      var a = x[0], b = x[1], c = x[2], d = x[3];

      a = ff(a, b, c, d, k[0], 7, -680876936);
      d = ff(d, a, b, c, k[1], 12, -389564586);
      c = ff(c, d, a, b, k[2], 17, 606105819);
      b = ff(b, c, d, a, k[3], 22, -1044525330);
      a = ff(a, b, c, d, k[4], 7, -176418897);
      d = ff(d, a, b, c, k[5], 12, 1200080426);
      c = ff(c, d, a, b, k[6], 17, -1473231341);
      b = ff(b, c, d, a, k[7], 22, -45705983);
      a = ff(a, b, c, d, k[8], 7, 1770035416);
      d = ff(d, a, b, c, k[9], 12, -1958414417);
      c = ff(c, d, a, b, k[10], 17, -42063);
      b = ff(b, c, d, a, k[11], 22, -1990404162);
      a = ff(a, b, c, d, k[12], 7, 1804603682);
      d = ff(d, a, b, c, k[13], 12, -40341101);
      c = ff(c, d, a, b, k[14], 17, -1502002290);
      b = ff(b, c, d, a, k[15], 22, 1236535329);

      a = gg(a, b, c, d, k[1], 5, -165796510);
      d = gg(d, a, b, c, k[6], 9, -1069501632);
      c = gg(c, d, a, b, k[11], 14, 643717713);
      b = gg(b, c, d, a, k[0], 20, -373897302);
      a = gg(a, b, c, d, k[5], 5, -701558691);
      d = gg(d, a, b, c, k[10], 9, 38016083);
      c = gg(c, d, a, b, k[15], 14, -660478335);
      b = gg(b, c, d, a, k[4], 20, -405537848);
      a = gg(a, b, c, d, k[9], 5, 568446438);
      d = gg(d, a, b, c, k[14], 9, -1019803690);
      c = gg(c, d, a, b, k[3], 14, -187363961);
      b = gg(b, c, d, a, k[8], 20, 1163531501);
      a = gg(a, b, c, d, k[13], 5, -1444681467);
      d = gg(d, a, b, c, k[2], 9, -51403784);
      c = gg(c, d, a, b, k[7], 14, 1735328473);
      b = gg(b, c, d, a, k[12], 20, -1926607734);

      a = hh(a, b, c, d, k[5], 4, -378558);
      d = hh(d, a, b, c, k[8], 11, -2022574463);
      c = hh(c, d, a, b, k[11], 16, 1839030562);
      b = hh(b, c, d, a, k[14], 23, -35309556);
      a = hh(a, b, c, d, k[1], 4, -1530992060);
      d = hh(d, a, b, c, k[4], 11, 1272893353);
      c = hh(c, d, a, b, k[7], 16, -155497632);
      b = hh(b, c, d, a, k[10], 23, -1094730640);
      a = hh(a, b, c, d, k[13], 4, 681279174);
      d = hh(d, a, b, c, k[0], 11, -358537222);
      c = hh(c, d, a, b, k[3], 16, -722521979);
      b = hh(b, c, d, a, k[6], 23, 76029189);
      a = hh(a, b, c, d, k[9], 4, -640364487);
      d = hh(d, a, b, c, k[12], 11, -421815835);
      c = hh(c, d, a, b, k[15], 16, 530742520);
      b = hh(b, c, d, a, k[2], 23, -995338651);

      a = ii(a, b, c, d, k[0], 6, -198630844);
      d = ii(d, a, b, c, k[7], 10, 1126891415);
      c = ii(c, d, a, b, k[14], 15, -1416354905);
      b = ii(b, c, d, a, k[5], 21, -57434055);
      a = ii(a, b, c, d, k[12], 6, 1700485571);
      d = ii(d, a, b, c, k[3], 10, -1894986606);
      c = ii(c, d, a, b, k[10], 15, -1051523);
      b = ii(b, c, d, a, k[1], 21, -2054922799);
      a = ii(a, b, c, d, k[8], 6, 1873313359);
      d = ii(d, a, b, c, k[15], 10, -30611744);
      c = ii(c, d, a, b, k[6], 15, -1560198380);
      b = ii(b, c, d, a, k[13], 21, 1309151649);
      a = ii(a, b, c, d, k[4], 6, -145523070);
      d = ii(d, a, b, c, k[11], 10, -1120210379);
      c = ii(c, d, a, b, k[2], 15, 718787259);
      b = ii(b, c, d, a, k[9], 21, -343485551);

      x[0] = add32(a, x[0]);
      x[1] = add32(b, x[1]);
      x[2] = add32(c, x[2]);
      x[3] = add32(d, x[3]);
  }

  function cmn(q, a, b, x, s, t) {
      a = add32(add32(a, q), add32(x, t));
      return add32((a << s) | (a >>> (32 - s)), b);
  }

  function ff(a, b, c, d, x, s, t) {
      return cmn((b & c) | ((~b) & d), a, b, x, s, t);
  }

  function gg(a, b, c, d, x, s, t) {
      return cmn((b & d) | (c & (~d)), a, b, x, s, t);
  }

  function hh(a, b, c, d, x, s, t) {
      return cmn(b ^ c ^ d, a, b, x, s, t);
  }

  function ii(a, b, c, d, x, s, t) {
      return cmn(c ^ (b | (~d)), a, b, x, s, t);
  }

  function md5blk(s) { /* I figured global was faster.   */
      var md5blks = [], i; /* Andy King said do it this way. */
      for (i = 0; i < 64; i += 4) {
          md5blks[i >> 2] = s.charCodeAt(i) +
              (s.charCodeAt(i + 1) << 8) +
              (s.charCodeAt(i + 2) << 16) +
              (s.charCodeAt(i + 3) << 24);
      }
      return md5blks;
  }

  var hex_chr = '0123456789abcdef'.split('');

  function rhex(n) {
      var s = '', j = 0;
      for (; j < 4; j++)
          s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] +
              hex_chr[(n >> (j * 8)) & 0x0F];
      return s;
  }

  function hex(x) {
      for (var i = 0; i < x.length; i++)
          x[i] = rhex(x[i]);
      return x.join('');
  }

  var add32 = function (a, b) {
      return (a + b) & 0xFFFFFFFF;
  };

  function getCtx() {
      var ctx = {};
      ctx.state = [1732584193, -271733879, -1732584194, 271733878];
      ctx.tail = '';
      ctx.size = 0;
      ctx.update = function (s, isBinStr) {
          if (!isBinStr) s = unescape(encodeURIComponent(s));
          ctx.size += s.length;
          s = ctx.tail + s;
          var i, state = ctx.state;
          for (i = 64; i <= s.length; i += 64) {
              md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          ctx.tail = s.substring(i - 64);
          return ctx;
      };
      ctx.digest = function (encode) {
          var i,
              n = ctx.size,
              state = ctx.state,
              s = ctx.tail,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < s.length; i++)
              tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i++) tail[i] = 0;
          }
          tail[14] = n * 8;
          md5cycle(state, tail);
          return hex(state);
      };
      return ctx;
  }

  var md5 = function (s, isBinStr) {
      return getCtx().update(s, isBinStr).digest('hex');
  };

  if (md5('hello') !== '5d41402abc4b2a76b9719d911017c592') {
      add32 = function (x, y) {
          var lsw = (x & 0xFFFF) + (y & 0xFFFF),
              msw = (x >> 16) + (y >> 16) + (lsw >> 16);
          return (msw << 16) | (lsw & 0xFFFF);
      };
  }

  md5.getCtx = getCtx;
  var md5_1 = md5;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  function getCjsExportFromNamespace (n) {
  	return n && n['default'] || n;
  }

  var crypto = createCommonjsModule(function (module) {
  /*
   CryptoJS v3.1.2
   code.google.com/p/crypto-js
   (c) 2009-2013 by Jeff Mott. All rights reserved.
   code.google.com/p/crypto-js/wiki/License
   */
  var CryptoJS=CryptoJS||function(g,l){var e={},d=e.lib={},m=function(){},k=d.Base={extend:function(a){m.prototype=this;var c=new m;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments);});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString);},clone:function(){return this.init.prototype.extend(this)}},
          p=d.WordArray=k.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=l?c:4*a.length;},toString:function(a){return (a||n).stringify(this)},concat:function(a){var c=this.words,q=a.words,f=this.sigBytes;a=a.sigBytes;this.clamp();if(f%4)for(var b=0;b<a;b++)c[f+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((f+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[f+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
              32-8*(c%4);a.length=g.ceil(c/4);},clone:function(){var a=k.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*g.random()|0);return new p.init(c,a)}}),b=e.enc={},n=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],f=0;f<a;f++){var d=c[f>>>2]>>>24-8*(f%4)&255;b.push((d>>>4).toString(16));b.push((d&15).toString(16));}return b.join("")},parse:function(a){for(var c=a.length,b=[],f=0;f<c;f+=2)b[f>>>3]|=parseInt(a.substr(f,
                  2),16)<<24-4*(f%8);return new p.init(b,c/2)}},j=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],f=0;f<a;f++)b.push(String.fromCharCode(c[f>>>2]>>>24-8*(f%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],f=0;f<c;f++)b[f>>>2]|=(a.charCodeAt(f)&255)<<24-8*(f%4);return new p.init(b,c)}},h=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(j.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return j.parse(unescape(encodeURIComponent(a)))}},
          r=d.BufferedBlockAlgorithm=k.extend({reset:function(){this._data=new p.init;this._nDataBytes=0;},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes;},_process:function(a){var c=this._data,b=c.words,f=c.sigBytes,d=this.blockSize,e=f/(4*d),e=a?g.ceil(e):g.max((e|0)-this._minBufferSize,0);a=e*d;f=g.min(4*a,f);if(a){for(var k=0;k<a;k+=d)this._doProcessBlock(b,k);k=b.splice(0,a);c.sigBytes-=f;}return new p.init(k,f)},clone:function(){var a=k.clone.call(this);
              a._data=this._data.clone();return a},_minBufferSize:0});d.Hasher=r.extend({cfg:k.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset();},reset:function(){r.reset.call(this);this._doReset();},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,d){return (new a.init(d)).finalize(b)}},_createHmacHelper:function(a){return function(b,d){return (new s.HMAC.init(a,
          d)).finalize(b)}}});var s=e.algo={};return e}(Math);
  (function(){var g=CryptoJS,l=g.lib,e=l.WordArray,d=l.Hasher,m=[],l=g.algo.SHA1=d.extend({_doReset:function(){this._hash=new e.init([1732584193,4023233417,2562383102,271733878,3285377520]);},_doProcessBlock:function(d,e){for(var b=this._hash.words,n=b[0],j=b[1],h=b[2],g=b[3],l=b[4],a=0;80>a;a++){if(16>a)m[a]=d[e+a]|0;else{var c=m[a-3]^m[a-8]^m[a-14]^m[a-16];m[a]=c<<1|c>>>31;}c=(n<<5|n>>>27)+l+m[a];c=20>a?c+((j&h|~j&g)+1518500249):40>a?c+((j^h^g)+1859775393):60>a?c+((j&h|j&g|h&g)-1894007588):c+((j^h^
  g)-899497514);l=g;g=h;h=j<<30|j>>>2;j=n;n=c;}b[0]=b[0]+n|0;b[1]=b[1]+j|0;b[2]=b[2]+h|0;b[3]=b[3]+g|0;b[4]=b[4]+l|0;},_doFinalize:function(){var d=this._data,e=d.words,b=8*this._nDataBytes,g=8*d.sigBytes;e[g>>>5]|=128<<24-g%32;e[(g+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(g+64>>>9<<4)+15]=b;d.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=d.clone.call(this);e._hash=this._hash.clone();return e}});g.SHA1=d._createHelper(l);g.HmacSHA1=d._createHmacHelper(l);})();
  (function(){var g=CryptoJS,l=g.enc.Utf8;g.algo.HMAC=g.lib.Base.extend({init:function(e,d){e=this._hasher=new e.init;"string"==typeof d&&(d=l.parse(d));var g=e.blockSize,k=4*g;d.sigBytes>k&&(d=e.finalize(d));d.clamp();for(var p=this._oKey=d.clone(),b=this._iKey=d.clone(),n=p.words,j=b.words,h=0;h<g;h++)n[h]^=1549556828,j[h]^=909522486;p.sigBytes=b.sigBytes=k;this.reset();},reset:function(){var e=this._hasher;e.reset();e.update(this._iKey);},update:function(e){this._hasher.update(e);return this},finalize:function(e){var d=
      this._hasher;e=d.finalize(e);d.reset();return d.finalize(this._oKey.clone().concat(e))}});})();


  (function () {
      // Shortcuts
      var C = CryptoJS;
      var C_lib = C.lib;
      var WordArray = C_lib.WordArray;
      var C_enc = C.enc;

      /**
       * Base64 encoding strategy.
       */
      var Base64 = C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function (wordArray) {
              // Shortcuts
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var map = this._map;

              // Clamp excess bits
              wordArray.clamp();

              // Convert
              var base64Chars = [];
              for (var i = 0; i < sigBytes; i += 3) {
                  var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                  var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                  var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                  var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                  for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                      base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                  }
              }

              // Add padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                  while (base64Chars.length % 4) {
                      base64Chars.push(paddingChar);
                  }
              }

              return base64Chars.join('');
          },

          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function (base64Str) {
              // Shortcuts
              var base64StrLength = base64Str.length;
              var map = this._map;

              // Ignore padding
              var paddingChar = map.charAt(64);
              if (paddingChar) {
                  var paddingIndex = base64Str.indexOf(paddingChar);
                  if (paddingIndex != -1) {
                      base64StrLength = paddingIndex;
                  }
              }

              // Convert
              var words = [];
              var nBytes = 0;
              for (var i = 0; i < base64StrLength; i++) {
                  if (i % 4) {
                      var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                      var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                      words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                      nBytes++;
                  }
              }

              return WordArray.create(words, nBytes);
          },

          _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
      };
  }());

  {
      module.exports = CryptoJS;
  }
  });

  //[4]   	NameStartChar	   ::=   	":" | [A-Z] | "_" | [a-z] | [#xC0-#xD6] | [#xD8-#xF6] | [#xF8-#x2FF] | [#x370-#x37D] | [#x37F-#x1FFF] | [#x200C-#x200D] | [#x2070-#x218F] | [#x2C00-#x2FEF] | [#x3001-#xD7FF] | [#xF900-#xFDCF] | [#xFDF0-#xFFFD] | [#x10000-#xEFFFF]
  //[4a]   	NameChar	   ::=   	NameStartChar | "-" | "." | [0-9] | #xB7 | [#x0300-#x036F] | [#x203F-#x2040]
  //[5]   	Name	   ::=   	NameStartChar (NameChar)*
  var nameStartChar = /[A-Z_a-z\xC0-\xD6\xD8-\xF6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/;//\u10000-\uEFFFF
  var nameChar = new RegExp("[\\-\\.0-9"+nameStartChar.source.slice(1,-1)+"\\u00B7\\u0300-\\u036F\\u203F-\\u2040]");
  var tagNamePattern = new RegExp('^'+nameStartChar.source+nameChar.source+'*(?:\:'+nameStartChar.source+nameChar.source+'*)?$');
  //var tagNamePattern = /^[a-zA-Z_][\w\-\.]*(?:\:[a-zA-Z_][\w\-\.]*)?$/
  //var handlers = 'resolveEntity,getExternalSubset,characters,endDocument,endElement,endPrefixMapping,ignorableWhitespace,processingInstruction,setDocumentLocator,skippedEntity,startDocument,startElement,startPrefixMapping,notationDecl,unparsedEntityDecl,error,fatalError,warning,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,comment,endCDATA,endDTD,endEntity,startCDATA,startDTD,startEntity'.split(',')

  //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
  //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
  var S_TAG = 0;//tag name offerring
  var S_ATTR = 1;//attr name offerring 
  var S_ATTR_SPACE=2;//attr name end and space offer
  var S_EQ = 3;//=space?
  var S_ATTR_NOQUOT_VALUE = 4;//attr value(no quot value only)
  var S_ATTR_END = 5;//attr value end and no space(quot end)
  var S_TAG_SPACE = 6;//(attr value end || tag end ) && (space offer)
  var S_TAG_CLOSE = 7;//closed el<el />

  function XMLReader(){
  	
  }

  XMLReader.prototype = {
  	parse:function(source,defaultNSMap,entityMap){
  		var domBuilder = this.domBuilder;
  		domBuilder.startDocument();
  		_copy(defaultNSMap ,defaultNSMap = {});
  		parse(source,defaultNSMap,entityMap,
  				domBuilder,this.errorHandler);
  		domBuilder.endDocument();
  	}
  };
  function parse(source,defaultNSMapCopy,entityMap,domBuilder,errorHandler){
  	function fixedFromCharCode(code) {
  		// String.prototype.fromCharCode does not supports
  		// > 2 bytes unicode chars directly
  		if (code > 0xffff) {
  			code -= 0x10000;
  			var surrogate1 = 0xd800 + (code >> 10)
  				, surrogate2 = 0xdc00 + (code & 0x3ff);

  			return String.fromCharCode(surrogate1, surrogate2);
  		} else {
  			return String.fromCharCode(code);
  		}
  	}
  	function entityReplacer(a){
  		var k = a.slice(1,-1);
  		if(k in entityMap){
  			return entityMap[k]; 
  		}else if(k.charAt(0) === '#'){
  			return fixedFromCharCode(parseInt(k.substr(1).replace('x','0x')))
  		}else{
  			errorHandler.error('entity not found:'+a);
  			return a;
  		}
  	}
  	function appendText(end){//has some bugs
  		if(end>start){
  			var xt = source.substring(start,end).replace(/&#?\w+;/g,entityReplacer);
  			locator&&position(start);
  			domBuilder.characters(xt,0,end-start);
  			start = end;
  		}
  	}
  	function position(p,m){
  		while(p>=lineEnd && (m = linePattern.exec(source))){
  			lineStart = m.index;
  			lineEnd = lineStart + m[0].length;
  			locator.lineNumber++;
  			//console.log('line++:',locator,startPos,endPos)
  		}
  		locator.columnNumber = p-lineStart+1;
  	}
  	var lineStart = 0;
  	var lineEnd = 0;
  	var linePattern = /.*(?:\r\n?|\n)|.*$/g;
  	var locator = domBuilder.locator;
  	
  	var parseStack = [{currentNSMap:defaultNSMapCopy}];
  	var closeMap = {};
  	var start = 0;
  	while(true){
  		try{
  			var tagStart = source.indexOf('<',start);
  			if(tagStart<0){
  				if(!source.substr(start).match(/^\s*$/)){
  					var doc = domBuilder.doc;
  	    			var text = doc.createTextNode(source.substr(start));
  	    			doc.appendChild(text);
  	    			domBuilder.currentElement = text;
  				}
  				return;
  			}
  			if(tagStart>start){
  				appendText(tagStart);
  			}
  			switch(source.charAt(tagStart+1)){
  			case '/':
  				var end = source.indexOf('>',tagStart+3);
  				var tagName = source.substring(tagStart+2,end);
  				var config = parseStack.pop();
  				if(end<0){
  					
  	        		tagName = source.substring(tagStart+2).replace(/[\s<].*/,'');
  	        		//console.error('#@@@@@@'+tagName)
  	        		errorHandler.error("end tag name: "+tagName+' is not complete:'+config.tagName);
  	        		end = tagStart+1+tagName.length;
  	        	}else if(tagName.match(/\s</)){
  	        		tagName = tagName.replace(/[\s<].*/,'');
  	        		errorHandler.error("end tag name: "+tagName+' maybe not complete');
  	        		end = tagStart+1+tagName.length;
  				}
  				//console.error(parseStack.length,parseStack)
  				//console.error(config);
  				var localNSMap = config.localNSMap;
  				var endMatch = config.tagName == tagName;
  				var endIgnoreCaseMach = endMatch || config.tagName&&config.tagName.toLowerCase() == tagName.toLowerCase();
  		        if(endIgnoreCaseMach){
  		        	domBuilder.endElement(config.uri,config.localName,tagName);
  					if(localNSMap){
  						for(var prefix in localNSMap){
  							domBuilder.endPrefixMapping(prefix) ;
  						}
  					}
  					if(!endMatch){
  		            	errorHandler.fatalError("end tag name: "+tagName+' is not match the current start tagName:'+config.tagName );
  					}
  		        }else{
  		        	parseStack.push(config);
  		        }
  				
  				end++;
  				break;
  				// end elment
  			case '?':// <?...?>
  				locator&&position(tagStart);
  				end = parseInstruction(source,tagStart,domBuilder);
  				break;
  			case '!':// <!doctype,<![CDATA,<!--
  				locator&&position(tagStart);
  				end = parseDCC(source,tagStart,domBuilder,errorHandler);
  				break;
  			default:
  				locator&&position(tagStart);
  				var el = new ElementAttributes();
  				var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  				//elStartEnd
  				var end = parseElementStartPart(source,tagStart,el,currentNSMap,entityReplacer,errorHandler);
  				var len = el.length;
  				
  				
  				if(!el.closed && fixSelfClosed(source,end,el.tagName,closeMap)){
  					el.closed = true;
  					if(!entityMap.nbsp){
  						errorHandler.warning('unclosed xml attribute');
  					}
  				}
  				if(locator && len){
  					var locator2 = copyLocator(locator,{});
  					//try{//attribute position fixed
  					for(var i = 0;i<len;i++){
  						var a = el[i];
  						position(a.offset);
  						a.locator = copyLocator(locator,{});
  					}
  					//}catch(e){console.error('@@@@@'+e)}
  					domBuilder.locator = locator2;
  					if(appendElement(el,domBuilder,currentNSMap)){
  						parseStack.push(el);
  					}
  					domBuilder.locator = locator;
  				}else{
  					if(appendElement(el,domBuilder,currentNSMap)){
  						parseStack.push(el);
  					}
  				}
  				
  				
  				
  				if(el.uri === 'http://www.w3.org/1999/xhtml' && !el.closed){
  					end = parseHtmlSpecialContent(source,end,el.tagName,entityReplacer,domBuilder);
  				}else{
  					end++;
  				}
  			}
  		}catch(e){
  			errorHandler.error('element parse error: '+e);
  			//errorHandler.error('element parse error: '+e);
  			end = -1;
  			//throw e;
  		}
  		if(end>start){
  			start = end;
  		}else{
  			//TODO: 这里有可能sax回退，有位置错误风险
  			appendText(Math.max(tagStart,start)+1);
  		}
  	}
  }
  function copyLocator(f,t){
  	t.lineNumber = f.lineNumber;
  	t.columnNumber = f.columnNumber;
  	return t;
  }

  /**
   * @see #appendElement(source,elStartEnd,el,selfClosed,entityReplacer,domBuilder,parseStack);
   * @return end of the elementStartPart(end of elementEndPart for selfClosed el)
   */
  function parseElementStartPart(source,start,el,currentNSMap,entityReplacer,errorHandler){
  	var attrName;
  	var value;
  	var p = ++start;
  	var s = S_TAG;//status
  	while(true){
  		var c = source.charAt(p);
  		switch(c){
  		case '=':
  			if(s === S_ATTR){//attrName
  				attrName = source.slice(start,p);
  				s = S_EQ;
  			}else if(s === S_ATTR_SPACE){
  				s = S_EQ;
  			}else{
  				//fatalError: equal must after attrName or space after attrName
  				throw new Error('attribute equal must after attrName');
  			}
  			break;
  		case '\'':
  		case '"':
  			if(s === S_EQ || s === S_ATTR //|| s == S_ATTR_SPACE
  				){//equal
  				if(s === S_ATTR){
  					errorHandler.warning('attribute value must after "="');
  					attrName = source.slice(start,p);
  				}
  				start = p+1;
  				p = source.indexOf(c,start);
  				if(p>0){
  					value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  					el.add(attrName,value,start-1);
  					s = S_ATTR_END;
  				}else{
  					//fatalError: no end quot match
  					throw new Error('attribute value no end \''+c+'\' match');
  				}
  			}else if(s == S_ATTR_NOQUOT_VALUE){
  				value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  				//console.log(attrName,value,start,p)
  				el.add(attrName,value,start);
  				//console.dir(el)
  				errorHandler.warning('attribute "'+attrName+'" missed start quot('+c+')!!');
  				start = p+1;
  				s = S_ATTR_END;
  			}else{
  				//fatalError: no equal before
  				throw new Error('attribute value must after "="');
  			}
  			break;
  		case '/':
  			switch(s){
  			case S_TAG:
  				el.setTagName(source.slice(start,p));
  			case S_ATTR_END:
  			case S_TAG_SPACE:
  			case S_TAG_CLOSE:
  				s =S_TAG_CLOSE;
  				el.closed = true;
  			case S_ATTR_NOQUOT_VALUE:
  			case S_ATTR:
  			case S_ATTR_SPACE:
  				break;
  			//case S_EQ:
  			default:
  				throw new Error("attribute invalid close char('/')")
  			}
  			break;
  		case ''://end document
  			//throw new Error('unexpected end of input')
  			errorHandler.error('unexpected end of input');
  			if(s == S_TAG){
  				el.setTagName(source.slice(start,p));
  			}
  			return p;
  		case '>':
  			switch(s){
  			case S_TAG:
  				el.setTagName(source.slice(start,p));
  			case S_ATTR_END:
  			case S_TAG_SPACE:
  			case S_TAG_CLOSE:
  				break;//normal
  			case S_ATTR_NOQUOT_VALUE://Compatible state
  			case S_ATTR:
  				value = source.slice(start,p);
  				if(value.slice(-1) === '/'){
  					el.closed  = true;
  					value = value.slice(0,-1);
  				}
  			case S_ATTR_SPACE:
  				if(s === S_ATTR_SPACE){
  					value = attrName;
  				}
  				if(s == S_ATTR_NOQUOT_VALUE){
  					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
  					el.add(attrName,value.replace(/&#?\w+;/g,entityReplacer),start);
  				}else{
  					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !value.match(/^(?:disabled|checked|selected)$/i)){
  						errorHandler.warning('attribute "'+value+'" missed value!! "'+value+'" instead!!');
  					}
  					el.add(value,value,start);
  				}
  				break;
  			case S_EQ:
  				throw new Error('attribute value missed!!');
  			}
  //			console.log(tagName,tagNamePattern,tagNamePattern.test(tagName))
  			return p;
  		/*xml space '\x20' | #x9 | #xD | #xA; */
  		case '\u0080':
  			c = ' ';
  		default:
  			if(c<= ' '){//space
  				switch(s){
  				case S_TAG:
  					el.setTagName(source.slice(start,p));//tagName
  					s = S_TAG_SPACE;
  					break;
  				case S_ATTR:
  					attrName = source.slice(start,p);
  					s = S_ATTR_SPACE;
  					break;
  				case S_ATTR_NOQUOT_VALUE:
  					var value = source.slice(start,p).replace(/&#?\w+;/g,entityReplacer);
  					errorHandler.warning('attribute "'+value+'" missed quot(")!!');
  					el.add(attrName,value,start);
  				case S_ATTR_END:
  					s = S_TAG_SPACE;
  					break;
  				//case S_TAG_SPACE:
  				//case S_EQ:
  				//case S_ATTR_SPACE:
  				//	void();break;
  				//case S_TAG_CLOSE:
  					//ignore warning
  				}
  			}else{//not space
  //S_TAG,	S_ATTR,	S_EQ,	S_ATTR_NOQUOT_VALUE
  //S_ATTR_SPACE,	S_ATTR_END,	S_TAG_SPACE, S_TAG_CLOSE
  				switch(s){
  				//case S_TAG:void();break;
  				//case S_ATTR:void();break;
  				//case S_ATTR_NOQUOT_VALUE:void();break;
  				case S_ATTR_SPACE:
  					var tagName =  el.tagName;
  					if(currentNSMap[''] !== 'http://www.w3.org/1999/xhtml' || !attrName.match(/^(?:disabled|checked|selected)$/i)){
  						errorHandler.warning('attribute "'+attrName+'" missed value!! "'+attrName+'" instead2!!');
  					}
  					el.add(attrName,attrName,start);
  					start = p;
  					s = S_ATTR;
  					break;
  				case S_ATTR_END:
  					errorHandler.warning('attribute space is required"'+attrName+'"!!');
  				case S_TAG_SPACE:
  					s = S_ATTR;
  					start = p;
  					break;
  				case S_EQ:
  					s = S_ATTR_NOQUOT_VALUE;
  					start = p;
  					break;
  				case S_TAG_CLOSE:
  					throw new Error("elements closed character '/' and '>' must be connected to");
  				}
  			}
  		}//end outer switch
  		//console.log('p++',p)
  		p++;
  	}
  }
  /**
   * @return true if has new namespace define
   */
  function appendElement(el,domBuilder,currentNSMap){
  	var tagName = el.tagName;
  	var localNSMap = null;
  	//var currentNSMap = parseStack[parseStack.length-1].currentNSMap;
  	var i = el.length;
  	while(i--){
  		var a = el[i];
  		var qName = a.qName;
  		var value = a.value;
  		var nsp = qName.indexOf(':');
  		if(nsp>0){
  			var prefix = a.prefix = qName.slice(0,nsp);
  			var localName = qName.slice(nsp+1);
  			var nsPrefix = prefix === 'xmlns' && localName;
  		}else{
  			localName = qName;
  			prefix = null;
  			nsPrefix = qName === 'xmlns' && '';
  		}
  		//can not set prefix,because prefix !== ''
  		a.localName = localName ;
  		//prefix == null for no ns prefix attribute 
  		if(nsPrefix !== false){//hack!!
  			if(localNSMap == null){
  				localNSMap = {};
  				//console.log(currentNSMap,0)
  				_copy(currentNSMap,currentNSMap={});
  				//console.log(currentNSMap,1)
  			}
  			currentNSMap[nsPrefix] = localNSMap[nsPrefix] = value;
  			a.uri = 'http://www.w3.org/2000/xmlns/';
  			domBuilder.startPrefixMapping(nsPrefix, value); 
  		}
  	}
  	var i = el.length;
  	while(i--){
  		a = el[i];
  		var prefix = a.prefix;
  		if(prefix){//no prefix attribute has no namespace
  			if(prefix === 'xml'){
  				a.uri = 'http://www.w3.org/XML/1998/namespace';
  			}if(prefix !== 'xmlns'){
  				a.uri = currentNSMap[prefix || ''];
  				
  				//{console.log('###'+a.qName,domBuilder.locator.systemId+'',currentNSMap,a.uri)}
  			}
  		}
  	}
  	var nsp = tagName.indexOf(':');
  	if(nsp>0){
  		prefix = el.prefix = tagName.slice(0,nsp);
  		localName = el.localName = tagName.slice(nsp+1);
  	}else{
  		prefix = null;//important!!
  		localName = el.localName = tagName;
  	}
  	//no prefix element has default namespace
  	var ns = el.uri = currentNSMap[prefix || ''];
  	domBuilder.startElement(ns,localName,tagName,el);
  	//endPrefixMapping and startPrefixMapping have not any help for dom builder
  	//localNSMap = null
  	if(el.closed){
  		domBuilder.endElement(ns,localName,tagName);
  		if(localNSMap){
  			for(prefix in localNSMap){
  				domBuilder.endPrefixMapping(prefix); 
  			}
  		}
  	}else{
  		el.currentNSMap = currentNSMap;
  		el.localNSMap = localNSMap;
  		//parseStack.push(el);
  		return true;
  	}
  }
  function parseHtmlSpecialContent(source,elStartEnd,tagName,entityReplacer,domBuilder){
  	if(/^(?:script|textarea)$/i.test(tagName)){
  		var elEndStart =  source.indexOf('</'+tagName+'>',elStartEnd);
  		var text = source.substring(elStartEnd+1,elEndStart);
  		if(/[&<]/.test(text)){
  			if(/^script$/i.test(tagName)){
  				//if(!/\]\]>/.test(text)){
  					//lexHandler.startCDATA();
  					domBuilder.characters(text,0,text.length);
  					//lexHandler.endCDATA();
  					return elEndStart;
  				//}
  			}//}else{//text area
  				text = text.replace(/&#?\w+;/g,entityReplacer);
  				domBuilder.characters(text,0,text.length);
  				return elEndStart;
  			//}
  			
  		}
  	}
  	return elStartEnd+1;
  }
  function fixSelfClosed(source,elStartEnd,tagName,closeMap){
  	//if(tagName in closeMap){
  	var pos = closeMap[tagName];
  	if(pos == null){
  		//console.log(tagName)
  		pos =  source.lastIndexOf('</'+tagName+'>');
  		if(pos<elStartEnd){//忘记闭合
  			pos = source.lastIndexOf('</'+tagName);
  		}
  		closeMap[tagName] =pos;
  	}
  	return pos<elStartEnd;
  	//} 
  }
  function _copy(source,target){
  	for(var n in source){target[n] = source[n];}
  }
  function parseDCC(source,start,domBuilder,errorHandler){//sure start with '<!'
  	var next= source.charAt(start+2);
  	switch(next){
  	case '-':
  		if(source.charAt(start + 3) === '-'){
  			var end = source.indexOf('-->',start+4);
  			//append comment source.substring(4,end)//<!--
  			if(end>start){
  				domBuilder.comment(source,start+4,end-start-4);
  				return end+3;
  			}else{
  				errorHandler.error("Unclosed comment");
  				return -1;
  			}
  		}else{
  			//error
  			return -1;
  		}
  	default:
  		if(source.substr(start+3,6) == 'CDATA['){
  			var end = source.indexOf(']]>',start+9);
  			domBuilder.startCDATA();
  			domBuilder.characters(source,start+9,end-start-9);
  			domBuilder.endCDATA(); 
  			return end+3;
  		}
  		//<!DOCTYPE
  		//startDTD(java.lang.String name, java.lang.String publicId, java.lang.String systemId) 
  		var matchs = split(source,start);
  		var len = matchs.length;
  		if(len>1 && /!doctype/i.test(matchs[0][0])){
  			var name = matchs[1][0];
  			var pubid = len>3 && /^public$/i.test(matchs[2][0]) && matchs[3][0];
  			var sysid = len>4 && matchs[4][0];
  			var lastMatch = matchs[len-1];
  			domBuilder.startDTD(name,pubid && pubid.replace(/^(['"])(.*?)\1$/,'$2'),
  					sysid && sysid.replace(/^(['"])(.*?)\1$/,'$2'));
  			domBuilder.endDTD();
  			
  			return lastMatch.index+lastMatch[0].length
  		}
  	}
  	return -1;
  }



  function parseInstruction(source,start,domBuilder){
  	var end = source.indexOf('?>',start);
  	if(end){
  		var match = source.substring(start,end).match(/^<\?(\S*)\s*([\s\S]*?)\s*$/);
  		if(match){
  			var len = match[0].length;
  			domBuilder.processingInstruction(match[1], match[2]) ;
  			return end+2;
  		}else{//error
  			return -1;
  		}
  	}
  	return -1;
  }

  /**
   * @param source
   */
  function ElementAttributes(source){
  	
  }
  ElementAttributes.prototype = {
  	setTagName:function(tagName){
  		if(!tagNamePattern.test(tagName)){
  			throw new Error('invalid tagName:'+tagName)
  		}
  		this.tagName = tagName;
  	},
  	add:function(qName,value,offset){
  		if(!tagNamePattern.test(qName)){
  			throw new Error('invalid attribute:'+qName)
  		}
  		this[this.length++] = {qName:qName,value:value,offset:offset};
  	},
  	length:0,
  	getLocalName:function(i){return this[i].localName},
  	getLocator:function(i){return this[i].locator},
  	getQName:function(i){return this[i].qName},
  	getURI:function(i){return this[i].uri},
  	getValue:function(i){return this[i].value}
  //	,getIndex:function(uri, localName)){
  //		if(localName){
  //			
  //		}else{
  //			var qName = uri
  //		}
  //	},
  //	getValue:function(){return this.getValue(this.getIndex.apply(this,arguments))},
  //	getType:function(uri,localName){}
  //	getType:function(i){},
  };




  function _set_proto_(thiz,parent){
  	thiz.__proto__ = parent;
  	return thiz;
  }
  if(!(_set_proto_({},_set_proto_.prototype) instanceof _set_proto_)){
  	_set_proto_ = function(thiz,parent){
  		function p(){}		p.prototype = parent;
  		p = new p();
  		for(parent in thiz){
  			p[parent] = thiz[parent];
  		}
  		return p;
  	};
  }

  function split(source,start){
  	var match;
  	var buf = [];
  	var reg = /'[^']+'|"[^"]+"|[^\s<>\/=]+=?|(\/?\s*>|<)/g;
  	reg.lastIndex = start;
  	reg.exec(source);//skip <
  	while(match = reg.exec(source)){
  		buf.push(match);
  		if(match[1])return buf;
  	}
  }

  var XMLReader_1 = XMLReader;

  var sax = {
  	XMLReader: XMLReader_1
  };

  /*
   * DOM Level 2
   * Object DOMException
   * @see http://www.w3.org/TR/REC-DOM-Level-1/ecma-script-language-binding.html
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/ecma-script-binding.html
   */

  function copy(src,dest){
  	for(var p in src){
  		dest[p] = src[p];
  	}
  }
  /**
  ^\w+\.prototype\.([_\w]+)\s*=\s*((?:.*\{\s*?[\r\n][\s\S]*?^})|\S.*?(?=[;\r\n]));?
  ^\w+\.prototype\.([_\w]+)\s*=\s*(\S.*?(?=[;\r\n]));?
   */
  function _extends(Class,Super){
  	var pt = Class.prototype;
  	if(Object.create){
  		var ppt = Object.create(Super.prototype);
  		pt.__proto__ = ppt;
  	}
  	if(!(pt instanceof Super)){
  		function t(){}		t.prototype = Super.prototype;
  		t = new t();
  		copy(pt,t);
  		Class.prototype = pt = t;
  	}
  	if(pt.constructor != Class){
  		if(typeof Class != 'function'){
  			console.error("unknow Class:"+Class);
  		}
  		pt.constructor = Class;
  	}
  }
  var htmlns = 'http://www.w3.org/1999/xhtml' ;
  // Node Types
  var NodeType = {};
  var ELEMENT_NODE                = NodeType.ELEMENT_NODE                = 1;
  var ATTRIBUTE_NODE              = NodeType.ATTRIBUTE_NODE              = 2;
  var TEXT_NODE                   = NodeType.TEXT_NODE                   = 3;
  var CDATA_SECTION_NODE          = NodeType.CDATA_SECTION_NODE          = 4;
  var ENTITY_REFERENCE_NODE       = NodeType.ENTITY_REFERENCE_NODE       = 5;
  var ENTITY_NODE                 = NodeType.ENTITY_NODE                 = 6;
  var PROCESSING_INSTRUCTION_NODE = NodeType.PROCESSING_INSTRUCTION_NODE = 7;
  var COMMENT_NODE                = NodeType.COMMENT_NODE                = 8;
  var DOCUMENT_NODE               = NodeType.DOCUMENT_NODE               = 9;
  var DOCUMENT_TYPE_NODE          = NodeType.DOCUMENT_TYPE_NODE          = 10;
  var DOCUMENT_FRAGMENT_NODE      = NodeType.DOCUMENT_FRAGMENT_NODE      = 11;
  var NOTATION_NODE               = NodeType.NOTATION_NODE               = 12;

  // ExceptionCode
  var ExceptionCode = {};
  var ExceptionMessage = {};
  var INDEX_SIZE_ERR              = ExceptionCode.INDEX_SIZE_ERR              = ((ExceptionMessage[1]="Index size error"),1);
  var DOMSTRING_SIZE_ERR          = ExceptionCode.DOMSTRING_SIZE_ERR          = ((ExceptionMessage[2]="DOMString size error"),2);
  var HIERARCHY_REQUEST_ERR       = ExceptionCode.HIERARCHY_REQUEST_ERR       = ((ExceptionMessage[3]="Hierarchy request error"),3);
  var WRONG_DOCUMENT_ERR          = ExceptionCode.WRONG_DOCUMENT_ERR          = ((ExceptionMessage[4]="Wrong document"),4);
  var INVALID_CHARACTER_ERR       = ExceptionCode.INVALID_CHARACTER_ERR       = ((ExceptionMessage[5]="Invalid character"),5);
  var NO_DATA_ALLOWED_ERR         = ExceptionCode.NO_DATA_ALLOWED_ERR         = ((ExceptionMessage[6]="No data allowed"),6);
  var NO_MODIFICATION_ALLOWED_ERR = ExceptionCode.NO_MODIFICATION_ALLOWED_ERR = ((ExceptionMessage[7]="No modification allowed"),7);
  var NOT_FOUND_ERR               = ExceptionCode.NOT_FOUND_ERR               = ((ExceptionMessage[8]="Not found"),8);
  var NOT_SUPPORTED_ERR           = ExceptionCode.NOT_SUPPORTED_ERR           = ((ExceptionMessage[9]="Not supported"),9);
  var INUSE_ATTRIBUTE_ERR         = ExceptionCode.INUSE_ATTRIBUTE_ERR         = ((ExceptionMessage[10]="Attribute in use"),10);
  //level2
  var INVALID_STATE_ERR        	= ExceptionCode.INVALID_STATE_ERR        	= ((ExceptionMessage[11]="Invalid state"),11);
  var SYNTAX_ERR               	= ExceptionCode.SYNTAX_ERR               	= ((ExceptionMessage[12]="Syntax error"),12);
  var INVALID_MODIFICATION_ERR 	= ExceptionCode.INVALID_MODIFICATION_ERR 	= ((ExceptionMessage[13]="Invalid modification"),13);
  var NAMESPACE_ERR            	= ExceptionCode.NAMESPACE_ERR           	= ((ExceptionMessage[14]="Invalid namespace"),14);
  var INVALID_ACCESS_ERR       	= ExceptionCode.INVALID_ACCESS_ERR      	= ((ExceptionMessage[15]="Invalid access"),15);


  function DOMException(code, message) {
  	if(message instanceof Error){
  		var error = message;
  	}else{
  		error = this;
  		Error.call(this, ExceptionMessage[code]);
  		this.message = ExceptionMessage[code];
  		if(Error.captureStackTrace) Error.captureStackTrace(this, DOMException);
  	}
  	error.code = code;
  	if(message) this.message = this.message + ": " + message;
  	return error;
  }DOMException.prototype = Error.prototype;
  copy(ExceptionCode,DOMException);
  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-536297177
   * The NodeList interface provides the abstraction of an ordered collection of nodes, without defining or constraining how this collection is implemented. NodeList objects in the DOM are live.
   * The items in the NodeList are accessible via an integral index, starting from 0.
   */
  function NodeList() {
  }NodeList.prototype = {
  	/**
  	 * The number of nodes in the list. The range of valid child node indices is 0 to length-1 inclusive.
  	 * @standard level1
  	 */
  	length:0, 
  	/**
  	 * Returns the indexth item in the collection. If index is greater than or equal to the number of nodes in the list, this returns null.
  	 * @standard level1
  	 * @param index  unsigned long 
  	 *   Index into the collection.
  	 * @return Node
  	 * 	The node at the indexth position in the NodeList, or null if that is not a valid index. 
  	 */
  	item: function(index) {
  		return this[index] || null;
  	},
  	toString:function(isHTML,nodeFilter){
  		for(var buf = [], i = 0;i<this.length;i++){
  			serializeToString(this[i],buf,isHTML,nodeFilter);
  		}
  		return buf.join('');
  	}
  };
  function LiveNodeList(node,refresh){
  	this._node = node;
  	this._refresh = refresh;
  	_updateLiveList(this);
  }
  function _updateLiveList(list){
  	var inc = list._node._inc || list._node.ownerDocument._inc;
  	if(list._inc != inc){
  		var ls = list._refresh(list._node);
  		//console.log(ls.length)
  		__set__(list,'length',ls.length);
  		copy(ls,list);
  		list._inc = inc;
  	}
  }
  LiveNodeList.prototype.item = function(i){
  	_updateLiveList(this);
  	return this[i];
  };

  _extends(LiveNodeList,NodeList);
  /**
   * 
   * Objects implementing the NamedNodeMap interface are used to represent collections of nodes that can be accessed by name. Note that NamedNodeMap does not inherit from NodeList; NamedNodeMaps are not maintained in any particular order. Objects contained in an object implementing NamedNodeMap may also be accessed by an ordinal index, but this is simply to allow convenient enumeration of the contents of a NamedNodeMap, and does not imply that the DOM specifies an order to these Nodes.
   * NamedNodeMap objects in the DOM are live.
   * used for attributes or DocumentType entities 
   */
  function NamedNodeMap() {
  }
  function _findNodeIndex(list,node){
  	var i = list.length;
  	while(i--){
  		if(list[i] === node){return i}
  	}
  }

  function _addNamedNode(el,list,newAttr,oldAttr){
  	if(oldAttr){
  		list[_findNodeIndex(list,oldAttr)] = newAttr;
  	}else{
  		list[list.length++] = newAttr;
  	}
  	if(el){
  		newAttr.ownerElement = el;
  		var doc = el.ownerDocument;
  		if(doc){
  			oldAttr && _onRemoveAttribute(doc,el,oldAttr);
  			_onAddAttribute(doc,el,newAttr);
  		}
  	}
  }
  function _removeNamedNode(el,list,attr){
  	//console.log('remove attr:'+attr)
  	var i = _findNodeIndex(list,attr);
  	if(i>=0){
  		var lastIndex = list.length-1;
  		while(i<lastIndex){
  			list[i] = list[++i];
  		}
  		list.length = lastIndex;
  		if(el){
  			var doc = el.ownerDocument;
  			if(doc){
  				_onRemoveAttribute(doc,el,attr);
  				attr.ownerElement = null;
  			}
  		}
  	}else{
  		throw DOMException(NOT_FOUND_ERR,new Error(el.tagName+'@'+attr))
  	}
  }
  NamedNodeMap.prototype = {
  	length:0,
  	item:NodeList.prototype.item,
  	getNamedItem: function(key) {
  //		if(key.indexOf(':')>0 || key == 'xmlns'){
  //			return null;
  //		}
  		//console.log()
  		var i = this.length;
  		while(i--){
  			var attr = this[i];
  			//console.log(attr.nodeName,key)
  			if(attr.nodeName == key){
  				return attr;
  			}
  		}
  	},
  	setNamedItem: function(attr) {
  		var el = attr.ownerElement;
  		if(el && el!=this._ownerElement){
  			throw new DOMException(INUSE_ATTRIBUTE_ERR);
  		}
  		var oldAttr = this.getNamedItem(attr.nodeName);
  		_addNamedNode(this._ownerElement,this,attr,oldAttr);
  		return oldAttr;
  	},
  	/* returns Node */
  	setNamedItemNS: function(attr) {// raises: WRONG_DOCUMENT_ERR,NO_MODIFICATION_ALLOWED_ERR,INUSE_ATTRIBUTE_ERR
  		var el = attr.ownerElement, oldAttr;
  		if(el && el!=this._ownerElement){
  			throw new DOMException(INUSE_ATTRIBUTE_ERR);
  		}
  		oldAttr = this.getNamedItemNS(attr.namespaceURI,attr.localName);
  		_addNamedNode(this._ownerElement,this,attr,oldAttr);
  		return oldAttr;
  	},

  	/* returns Node */
  	removeNamedItem: function(key) {
  		var attr = this.getNamedItem(key);
  		_removeNamedNode(this._ownerElement,this,attr);
  		return attr;
  		
  		
  	},// raises: NOT_FOUND_ERR,NO_MODIFICATION_ALLOWED_ERR
  	
  	//for level2
  	removeNamedItemNS:function(namespaceURI,localName){
  		var attr = this.getNamedItemNS(namespaceURI,localName);
  		_removeNamedNode(this._ownerElement,this,attr);
  		return attr;
  	},
  	getNamedItemNS: function(namespaceURI, localName) {
  		var i = this.length;
  		while(i--){
  			var node = this[i];
  			if(node.localName == localName && node.namespaceURI == namespaceURI){
  				return node;
  			}
  		}
  		return null;
  	}
  };
  /**
   * @see http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#ID-102161490
   */
  function DOMImplementation(/* Object */ features) {
  	this._features = {};
  	if (features) {
  		for (var feature in features) {
  			 this._features = features[feature];
  		}
  	}
  }
  DOMImplementation.prototype = {
  	hasFeature: function(/* string */ feature, /* string */ version) {
  		var versions = this._features[feature.toLowerCase()];
  		if (versions && (!version || version in versions)) {
  			return true;
  		} else {
  			return false;
  		}
  	},
  	// Introduced in DOM Level 2:
  	createDocument:function(namespaceURI,  qualifiedName, doctype){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR,WRONG_DOCUMENT_ERR
  		var doc = new Document();
  		doc.implementation = this;
  		doc.childNodes = new NodeList();
  		doc.doctype = doctype;
  		if(doctype){
  			doc.appendChild(doctype);
  		}
  		if(qualifiedName){
  			var root = doc.createElementNS(namespaceURI,qualifiedName);
  			doc.appendChild(root);
  		}
  		return doc;
  	},
  	// Introduced in DOM Level 2:
  	createDocumentType:function(qualifiedName, publicId, systemId){// raises:INVALID_CHARACTER_ERR,NAMESPACE_ERR
  		var node = new DocumentType();
  		node.name = qualifiedName;
  		node.nodeName = qualifiedName;
  		node.publicId = publicId;
  		node.systemId = systemId;
  		// Introduced in DOM Level 2:
  		//readonly attribute DOMString        internalSubset;
  		
  		//TODO:..
  		//  readonly attribute NamedNodeMap     entities;
  		//  readonly attribute NamedNodeMap     notations;
  		return node;
  	}
  };


  /**
   * @see http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1950641247
   */

  function Node() {
  }
  Node.prototype = {
  	firstChild : null,
  	lastChild : null,
  	previousSibling : null,
  	nextSibling : null,
  	attributes : null,
  	parentNode : null,
  	childNodes : null,
  	ownerDocument : null,
  	nodeValue : null,
  	namespaceURI : null,
  	prefix : null,
  	localName : null,
  	// Modified in DOM Level 2:
  	insertBefore:function(newChild, refChild){//raises 
  		return _insertBefore(this,newChild,refChild);
  	},
  	replaceChild:function(newChild, oldChild){//raises 
  		this.insertBefore(newChild,oldChild);
  		if(oldChild){
  			this.removeChild(oldChild);
  		}
  	},
  	removeChild:function(oldChild){
  		return _removeChild(this,oldChild);
  	},
  	appendChild:function(newChild){
  		return this.insertBefore(newChild,null);
  	},
  	hasChildNodes:function(){
  		return this.firstChild != null;
  	},
  	cloneNode:function(deep){
  		return cloneNode(this.ownerDocument||this,this,deep);
  	},
  	// Modified in DOM Level 2:
  	normalize:function(){
  		var child = this.firstChild;
  		while(child){
  			var next = child.nextSibling;
  			if(next && next.nodeType == TEXT_NODE && child.nodeType == TEXT_NODE){
  				this.removeChild(next);
  				child.appendData(next.data);
  			}else{
  				child.normalize();
  				child = next;
  			}
  		}
  	},
    	// Introduced in DOM Level 2:
  	isSupported:function(feature, version){
  		return this.ownerDocument.implementation.hasFeature(feature,version);
  	},
      // Introduced in DOM Level 2:
      hasAttributes:function(){
      	return this.attributes.length>0;
      },
      lookupPrefix:function(namespaceURI){
      	var el = this;
      	while(el){
      		var map = el._nsMap;
      		//console.dir(map)
      		if(map){
      			for(var n in map){
      				if(map[n] == namespaceURI){
      					return n;
      				}
      			}
      		}
      		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
      	}
      	return null;
      },
      // Introduced in DOM Level 3:
      lookupNamespaceURI:function(prefix){
      	var el = this;
      	while(el){
      		var map = el._nsMap;
      		//console.dir(map)
      		if(map){
      			if(prefix in map){
      				return map[prefix] ;
      			}
      		}
      		el = el.nodeType == ATTRIBUTE_NODE?el.ownerDocument : el.parentNode;
      	}
      	return null;
      },
      // Introduced in DOM Level 3:
      isDefaultNamespace:function(namespaceURI){
      	var prefix = this.lookupPrefix(namespaceURI);
      	return prefix == null;
      }
  };


  function _xmlEncoder(c){
  	return c == '<' && '&lt;' ||
           c == '>' && '&gt;' ||
           c == '&' && '&amp;' ||
           c == '"' && '&quot;' ||
           '&#'+c.charCodeAt()+';'
  }


  copy(NodeType,Node);
  copy(NodeType,Node.prototype);

  /**
   * @param callback return true for continue,false for break
   * @return boolean true: break visit;
   */
  function _visitNode(node,callback){
  	if(callback(node)){
  		return true;
  	}
  	if(node = node.firstChild){
  		do{
  			if(_visitNode(node,callback)){return true}
          }while(node=node.nextSibling)
      }
  }



  function Document(){
  }
  function _onAddAttribute(doc,el,newAttr){
  	doc && doc._inc++;
  	var ns = newAttr.namespaceURI ;
  	if(ns == 'http://www.w3.org/2000/xmlns/'){
  		//update namespace
  		el._nsMap[newAttr.prefix?newAttr.localName:''] = newAttr.value;
  	}
  }
  function _onRemoveAttribute(doc,el,newAttr,remove){
  	doc && doc._inc++;
  	var ns = newAttr.namespaceURI ;
  	if(ns == 'http://www.w3.org/2000/xmlns/'){
  		//update namespace
  		delete el._nsMap[newAttr.prefix?newAttr.localName:''];
  	}
  }
  function _onUpdateChild(doc,el,newChild){
  	if(doc && doc._inc){
  		doc._inc++;
  		//update childNodes
  		var cs = el.childNodes;
  		if(newChild){
  			cs[cs.length++] = newChild;
  		}else{
  			//console.log(1)
  			var child = el.firstChild;
  			var i = 0;
  			while(child){
  				cs[i++] = child;
  				child =child.nextSibling;
  			}
  			cs.length = i;
  		}
  	}
  }

  /**
   * attributes;
   * children;
   * 
   * writeable properties:
   * nodeValue,Attr:value,CharacterData:data
   * prefix
   */
  function _removeChild(parentNode,child){
  	var previous = child.previousSibling;
  	var next = child.nextSibling;
  	if(previous){
  		previous.nextSibling = next;
  	}else{
  		parentNode.firstChild = next;
  	}
  	if(next){
  		next.previousSibling = previous;
  	}else{
  		parentNode.lastChild = previous;
  	}
  	_onUpdateChild(parentNode.ownerDocument,parentNode);
  	return child;
  }
  /**
   * preformance key(refChild == null)
   */
  function _insertBefore(parentNode,newChild,nextChild){
  	var cp = newChild.parentNode;
  	if(cp){
  		cp.removeChild(newChild);//remove and update
  	}
  	if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
  		var newFirst = newChild.firstChild;
  		if (newFirst == null) {
  			return newChild;
  		}
  		var newLast = newChild.lastChild;
  	}else{
  		newFirst = newLast = newChild;
  	}
  	var pre = nextChild ? nextChild.previousSibling : parentNode.lastChild;

  	newFirst.previousSibling = pre;
  	newLast.nextSibling = nextChild;
  	
  	
  	if(pre){
  		pre.nextSibling = newFirst;
  	}else{
  		parentNode.firstChild = newFirst;
  	}
  	if(nextChild == null){
  		parentNode.lastChild = newLast;
  	}else{
  		nextChild.previousSibling = newLast;
  	}
  	do{
  		newFirst.parentNode = parentNode;
  	}while(newFirst !== newLast && (newFirst= newFirst.nextSibling))
  	_onUpdateChild(parentNode.ownerDocument||parentNode,parentNode);
  	//console.log(parentNode.lastChild.nextSibling == null)
  	if (newChild.nodeType == DOCUMENT_FRAGMENT_NODE) {
  		newChild.firstChild = newChild.lastChild = null;
  	}
  	return newChild;
  }
  function _appendSingleChild(parentNode,newChild){
  	var cp = newChild.parentNode;
  	if(cp){
  		var pre = parentNode.lastChild;
  		cp.removeChild(newChild);//remove and update
  		var pre = parentNode.lastChild;
  	}
  	var pre = parentNode.lastChild;
  	newChild.parentNode = parentNode;
  	newChild.previousSibling = pre;
  	newChild.nextSibling = null;
  	if(pre){
  		pre.nextSibling = newChild;
  	}else{
  		parentNode.firstChild = newChild;
  	}
  	parentNode.lastChild = newChild;
  	_onUpdateChild(parentNode.ownerDocument,parentNode,newChild);
  	return newChild;
  	//console.log("__aa",parentNode.lastChild.nextSibling == null)
  }
  Document.prototype = {
  	//implementation : null,
  	nodeName :  '#document',
  	nodeType :  DOCUMENT_NODE,
  	doctype :  null,
  	documentElement :  null,
  	_inc : 1,
  	
  	insertBefore :  function(newChild, refChild){//raises 
  		if(newChild.nodeType == DOCUMENT_FRAGMENT_NODE){
  			var child = newChild.firstChild;
  			while(child){
  				var next = child.nextSibling;
  				this.insertBefore(child,refChild);
  				child = next;
  			}
  			return newChild;
  		}
  		if(this.documentElement == null && newChild.nodeType == ELEMENT_NODE){
  			this.documentElement = newChild;
  		}
  		
  		return _insertBefore(this,newChild,refChild),(newChild.ownerDocument = this),newChild;
  	},
  	removeChild :  function(oldChild){
  		if(this.documentElement == oldChild){
  			this.documentElement = null;
  		}
  		return _removeChild(this,oldChild);
  	},
  	// Introduced in DOM Level 2:
  	importNode : function(importedNode,deep){
  		return importNode(this,importedNode,deep);
  	},
  	// Introduced in DOM Level 2:
  	getElementById :	function(id){
  		var rtv = null;
  		_visitNode(this.documentElement,function(node){
  			if(node.nodeType == ELEMENT_NODE){
  				if(node.getAttribute('id') == id){
  					rtv = node;
  					return true;
  				}
  			}
  		});
  		return rtv;
  	},
  	
  	//document factory method:
  	createElement :	function(tagName){
  		var node = new Element();
  		node.ownerDocument = this;
  		node.nodeName = tagName;
  		node.tagName = tagName;
  		node.childNodes = new NodeList();
  		var attrs	= node.attributes = new NamedNodeMap();
  		attrs._ownerElement = node;
  		return node;
  	},
  	createDocumentFragment :	function(){
  		var node = new DocumentFragment();
  		node.ownerDocument = this;
  		node.childNodes = new NodeList();
  		return node;
  	},
  	createTextNode :	function(data){
  		var node = new Text();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createComment :	function(data){
  		var node = new Comment();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createCDATASection :	function(data){
  		var node = new CDATASection();
  		node.ownerDocument = this;
  		node.appendData(data);
  		return node;
  	},
  	createProcessingInstruction :	function(target,data){
  		var node = new ProcessingInstruction();
  		node.ownerDocument = this;
  		node.tagName = node.target = target;
  		node.nodeValue= node.data = data;
  		return node;
  	},
  	createAttribute :	function(name){
  		var node = new Attr();
  		node.ownerDocument	= this;
  		node.name = name;
  		node.nodeName	= name;
  		node.localName = name;
  		node.specified = true;
  		return node;
  	},
  	createEntityReference :	function(name){
  		var node = new EntityReference();
  		node.ownerDocument	= this;
  		node.nodeName	= name;
  		return node;
  	},
  	// Introduced in DOM Level 2:
  	createElementNS :	function(namespaceURI,qualifiedName){
  		var node = new Element();
  		var pl = qualifiedName.split(':');
  		var attrs	= node.attributes = new NamedNodeMap();
  		node.childNodes = new NodeList();
  		node.ownerDocument = this;
  		node.nodeName = qualifiedName;
  		node.tagName = qualifiedName;
  		node.namespaceURI = namespaceURI;
  		if(pl.length == 2){
  			node.prefix = pl[0];
  			node.localName = pl[1];
  		}else{
  			//el.prefix = null;
  			node.localName = qualifiedName;
  		}
  		attrs._ownerElement = node;
  		return node;
  	},
  	// Introduced in DOM Level 2:
  	createAttributeNS :	function(namespaceURI,qualifiedName){
  		var node = new Attr();
  		var pl = qualifiedName.split(':');
  		node.ownerDocument = this;
  		node.nodeName = qualifiedName;
  		node.name = qualifiedName;
  		node.namespaceURI = namespaceURI;
  		node.specified = true;
  		if(pl.length == 2){
  			node.prefix = pl[0];
  			node.localName = pl[1];
  		}else{
  			//el.prefix = null;
  			node.localName = qualifiedName;
  		}
  		return node;
  	}
  };
  _extends(Document,Node);


  function Element() {
  	this._nsMap = {};
  }Element.prototype = {
  	nodeType : ELEMENT_NODE,
  	hasAttribute : function(name){
  		return this.getAttributeNode(name)!=null;
  	},
  	getAttribute : function(name){
  		var attr = this.getAttributeNode(name);
  		return attr && attr.value || '';
  	},
  	getAttributeNode : function(name){
  		return this.attributes.getNamedItem(name);
  	},
  	setAttribute : function(name, value){
  		var attr = this.ownerDocument.createAttribute(name);
  		attr.value = attr.nodeValue = "" + value;
  		this.setAttributeNode(attr);
  	},
  	removeAttribute : function(name){
  		var attr = this.getAttributeNode(name);
  		attr && this.removeAttributeNode(attr);
  	},
  	
  	//four real opeartion method
  	appendChild:function(newChild){
  		if(newChild.nodeType === DOCUMENT_FRAGMENT_NODE){
  			return this.insertBefore(newChild,null);
  		}else{
  			return _appendSingleChild(this,newChild);
  		}
  	},
  	setAttributeNode : function(newAttr){
  		return this.attributes.setNamedItem(newAttr);
  	},
  	setAttributeNodeNS : function(newAttr){
  		return this.attributes.setNamedItemNS(newAttr);
  	},
  	removeAttributeNode : function(oldAttr){
  		//console.log(this == oldAttr.ownerElement)
  		return this.attributes.removeNamedItem(oldAttr.nodeName);
  	},
  	//get real attribute name,and remove it by removeAttributeNode
  	removeAttributeNS : function(namespaceURI, localName){
  		var old = this.getAttributeNodeNS(namespaceURI, localName);
  		old && this.removeAttributeNode(old);
  	},
  	
  	hasAttributeNS : function(namespaceURI, localName){
  		return this.getAttributeNodeNS(namespaceURI, localName)!=null;
  	},
  	getAttributeNS : function(namespaceURI, localName){
  		var attr = this.getAttributeNodeNS(namespaceURI, localName);
  		return attr && attr.value || '';
  	},
  	setAttributeNS : function(namespaceURI, qualifiedName, value){
  		var attr = this.ownerDocument.createAttributeNS(namespaceURI, qualifiedName);
  		attr.value = attr.nodeValue = "" + value;
  		this.setAttributeNode(attr);
  	},
  	getAttributeNodeNS : function(namespaceURI, localName){
  		return this.attributes.getNamedItemNS(namespaceURI, localName);
  	},
  	
  	getElementsByTagName : function(tagName){
  		return new LiveNodeList(this,function(base){
  			var ls = [];
  			_visitNode(base,function(node){
  				if(node !== base && node.nodeType == ELEMENT_NODE && (tagName === '*' || node.tagName == tagName)){
  					ls.push(node);
  				}
  			});
  			return ls;
  		});
  	},
  	getElementsByTagNameNS : function(namespaceURI, localName){
  		return new LiveNodeList(this,function(base){
  			var ls = [];
  			_visitNode(base,function(node){
  				if(node !== base && node.nodeType === ELEMENT_NODE && (namespaceURI === '*' || node.namespaceURI === namespaceURI) && (localName === '*' || node.localName == localName)){
  					ls.push(node);
  				}
  			});
  			return ls;
  			
  		});
  	}
  };
  Document.prototype.getElementsByTagName = Element.prototype.getElementsByTagName;
  Document.prototype.getElementsByTagNameNS = Element.prototype.getElementsByTagNameNS;


  _extends(Element,Node);
  function Attr() {
  }Attr.prototype.nodeType = ATTRIBUTE_NODE;
  _extends(Attr,Node);


  function CharacterData() {
  }CharacterData.prototype = {
  	data : '',
  	substringData : function(offset, count) {
  		return this.data.substring(offset, offset+count);
  	},
  	appendData: function(text) {
  		text = this.data+text;
  		this.nodeValue = this.data = text;
  		this.length = text.length;
  	},
  	insertData: function(offset,text) {
  		this.replaceData(offset,0,text);
  	
  	},
  	appendChild:function(newChild){
  		throw new Error(ExceptionMessage[HIERARCHY_REQUEST_ERR])
  	},
  	deleteData: function(offset, count) {
  		this.replaceData(offset,count,"");
  	},
  	replaceData: function(offset, count, text) {
  		var start = this.data.substring(0,offset);
  		var end = this.data.substring(offset+count);
  		text = start + text + end;
  		this.nodeValue = this.data = text;
  		this.length = text.length;
  	}
  };
  _extends(CharacterData,Node);
  function Text() {
  }Text.prototype = {
  	nodeName : "#text",
  	nodeType : TEXT_NODE,
  	splitText : function(offset) {
  		var text = this.data;
  		var newText = text.substring(offset);
  		text = text.substring(0, offset);
  		this.data = this.nodeValue = text;
  		this.length = text.length;
  		var newNode = this.ownerDocument.createTextNode(newText);
  		if(this.parentNode){
  			this.parentNode.insertBefore(newNode, this.nextSibling);
  		}
  		return newNode;
  	}
  };
  _extends(Text,CharacterData);
  function Comment() {
  }Comment.prototype = {
  	nodeName : "#comment",
  	nodeType : COMMENT_NODE
  };
  _extends(Comment,CharacterData);

  function CDATASection() {
  }CDATASection.prototype = {
  	nodeName : "#cdata-section",
  	nodeType : CDATA_SECTION_NODE
  };
  _extends(CDATASection,CharacterData);


  function DocumentType() {
  }DocumentType.prototype.nodeType = DOCUMENT_TYPE_NODE;
  _extends(DocumentType,Node);

  function Notation() {
  }Notation.prototype.nodeType = NOTATION_NODE;
  _extends(Notation,Node);

  function Entity() {
  }Entity.prototype.nodeType = ENTITY_NODE;
  _extends(Entity,Node);

  function EntityReference() {
  }EntityReference.prototype.nodeType = ENTITY_REFERENCE_NODE;
  _extends(EntityReference,Node);

  function DocumentFragment() {
  }DocumentFragment.prototype.nodeName =	"#document-fragment";
  DocumentFragment.prototype.nodeType =	DOCUMENT_FRAGMENT_NODE;
  _extends(DocumentFragment,Node);


  function ProcessingInstruction() {
  }
  ProcessingInstruction.prototype.nodeType = PROCESSING_INSTRUCTION_NODE;
  _extends(ProcessingInstruction,Node);
  function XMLSerializer$1(){}
  XMLSerializer$1.prototype.serializeToString = function(node,isHtml,nodeFilter){
  	return nodeSerializeToString.call(node,isHtml,nodeFilter);
  };
  Node.prototype.toString = nodeSerializeToString;
  function nodeSerializeToString(isHtml,nodeFilter){
  	var buf = [];
  	var refNode = this.nodeType == 9?this.documentElement:this;
  	var prefix = refNode.prefix;
  	var uri = refNode.namespaceURI;
  	
  	if(uri && prefix == null){
  		//console.log(prefix)
  		var prefix = refNode.lookupPrefix(uri);
  		if(prefix == null){
  			//isHTML = true;
  			var visibleNamespaces=[
  			{namespace:uri,prefix:null}
  			//{namespace:uri,prefix:''}
  			];
  		}
  	}
  	serializeToString(this,buf,isHtml,nodeFilter,visibleNamespaces);
  	//console.log('###',this.nodeType,uri,prefix,buf.join(''))
  	return buf.join('');
  }
  function needNamespaceDefine(node,isHTML, visibleNamespaces) {
  	var prefix = node.prefix||'';
  	var uri = node.namespaceURI;
  	if (!prefix && !uri){
  		return false;
  	}
  	if (prefix === "xml" && uri === "http://www.w3.org/XML/1998/namespace" 
  		|| uri == 'http://www.w3.org/2000/xmlns/'){
  		return false;
  	}
  	
  	var i = visibleNamespaces.length; 
  	//console.log('@@@@',node.tagName,prefix,uri,visibleNamespaces)
  	while (i--) {
  		var ns = visibleNamespaces[i];
  		// get namespace prefix
  		//console.log(node.nodeType,node.tagName,ns.prefix,prefix)
  		if (ns.prefix == prefix){
  			return ns.namespace != uri;
  		}
  	}
  	//console.log(isHTML,uri,prefix=='')
  	//if(isHTML && prefix ==null && uri == 'http://www.w3.org/1999/xhtml'){
  	//	return false;
  	//}
  	//node.flag = '11111'
  	//console.error(3,true,node.flag,node.prefix,node.namespaceURI)
  	return true;
  }
  function serializeToString(node,buf,isHTML,nodeFilter,visibleNamespaces){
  	if(nodeFilter){
  		node = nodeFilter(node);
  		if(node){
  			if(typeof node == 'string'){
  				buf.push(node);
  				return;
  			}
  		}else{
  			return;
  		}
  		//buf.sort.apply(attrs, attributeSorter);
  	}
  	switch(node.nodeType){
  	case ELEMENT_NODE:
  		if (!visibleNamespaces) visibleNamespaces = [];
  		var startVisibleNamespaces = visibleNamespaces.length;
  		var attrs = node.attributes;
  		var len = attrs.length;
  		var child = node.firstChild;
  		var nodeName = node.tagName;
  		
  		isHTML =  (htmlns === node.namespaceURI) ||isHTML; 
  		buf.push('<',nodeName);
  		
  		
  		
  		for(var i=0;i<len;i++){
  			// add namespaces for attributes
  			var attr = attrs.item(i);
  			if (attr.prefix == 'xmlns') {
  				visibleNamespaces.push({ prefix: attr.localName, namespace: attr.value });
  			}else if(attr.nodeName == 'xmlns'){
  				visibleNamespaces.push({ prefix: '', namespace: attr.value });
  			}
  		}
  		for(var i=0;i<len;i++){
  			var attr = attrs.item(i);
  			if (needNamespaceDefine(attr,isHTML, visibleNamespaces)) {
  				var prefix = attr.prefix||'';
  				var uri = attr.namespaceURI;
  				var ns = prefix ? ' xmlns:' + prefix : " xmlns";
  				buf.push(ns, '="' , uri , '"');
  				visibleNamespaces.push({ prefix: prefix, namespace:uri });
  			}
  			serializeToString(attr,buf,isHTML,nodeFilter,visibleNamespaces);
  		}
  		// add namespace for current node		
  		if (needNamespaceDefine(node,isHTML, visibleNamespaces)) {
  			var prefix = node.prefix||'';
  			var uri = node.namespaceURI;
  			var ns = prefix ? ' xmlns:' + prefix : " xmlns";
  			buf.push(ns, '="' , uri , '"');
  			visibleNamespaces.push({ prefix: prefix, namespace:uri });
  		}
  		
  		if(child || isHTML && !/^(?:meta|link|img|br|hr|input)$/i.test(nodeName)){
  			buf.push('>');
  			//if is cdata child node
  			if(isHTML && /^script$/i.test(nodeName)){
  				while(child){
  					if(child.data){
  						buf.push(child.data);
  					}else{
  						serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
  					}
  					child = child.nextSibling;
  				}
  			}else
  			{
  				while(child){
  					serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
  					child = child.nextSibling;
  				}
  			}
  			buf.push('</',nodeName,'>');
  		}else{
  			buf.push('/>');
  		}
  		// remove added visible namespaces
  		//visibleNamespaces.length = startVisibleNamespaces;
  		return;
  	case DOCUMENT_NODE:
  	case DOCUMENT_FRAGMENT_NODE:
  		var child = node.firstChild;
  		while(child){
  			serializeToString(child,buf,isHTML,nodeFilter,visibleNamespaces);
  			child = child.nextSibling;
  		}
  		return;
  	case ATTRIBUTE_NODE:
  		return buf.push(' ',node.name,'="',node.value.replace(/[<&"]/g,_xmlEncoder),'"');
  	case TEXT_NODE:
  		return buf.push(node.data.replace(/[<&]/g,_xmlEncoder));
  	case CDATA_SECTION_NODE:
  		return buf.push( '<![CDATA[',node.data,']]>');
  	case COMMENT_NODE:
  		return buf.push( "<!--",node.data,"-->");
  	case DOCUMENT_TYPE_NODE:
  		var pubid = node.publicId;
  		var sysid = node.systemId;
  		buf.push('<!DOCTYPE ',node.name);
  		if(pubid){
  			buf.push(' PUBLIC "',pubid);
  			if (sysid && sysid!='.') {
  				buf.push( '" "',sysid);
  			}
  			buf.push('">');
  		}else if(sysid && sysid!='.'){
  			buf.push(' SYSTEM "',sysid,'">');
  		}else{
  			var sub = node.internalSubset;
  			if(sub){
  				buf.push(" [",sub,"]");
  			}
  			buf.push(">");
  		}
  		return;
  	case PROCESSING_INSTRUCTION_NODE:
  		return buf.push( "<?",node.target," ",node.data,"?>");
  	case ENTITY_REFERENCE_NODE:
  		return buf.push( '&',node.nodeName,';');
  	//case ENTITY_NODE:
  	//case NOTATION_NODE:
  	default:
  		buf.push('??',node.nodeName);
  	}
  }
  function importNode(doc,node,deep){
  	var node2;
  	switch (node.nodeType) {
  	case ELEMENT_NODE:
  		node2 = node.cloneNode(false);
  		node2.ownerDocument = doc;
  		//var attrs = node2.attributes;
  		//var len = attrs.length;
  		//for(var i=0;i<len;i++){
  			//node2.setAttributeNodeNS(importNode(doc,attrs.item(i),deep));
  		//}
  	case DOCUMENT_FRAGMENT_NODE:
  		break;
  	case ATTRIBUTE_NODE:
  		deep = true;
  		break;
  	//case ENTITY_REFERENCE_NODE:
  	//case PROCESSING_INSTRUCTION_NODE:
  	////case TEXT_NODE:
  	//case CDATA_SECTION_NODE:
  	//case COMMENT_NODE:
  	//	deep = false;
  	//	break;
  	//case DOCUMENT_NODE:
  	//case DOCUMENT_TYPE_NODE:
  	//cannot be imported.
  	//case ENTITY_NODE:
  	//case NOTATION_NODE：
  	//can not hit in level3
  	//default:throw e;
  	}
  	if(!node2){
  		node2 = node.cloneNode(false);//false
  	}
  	node2.ownerDocument = doc;
  	node2.parentNode = null;
  	if(deep){
  		var child = node.firstChild;
  		while(child){
  			node2.appendChild(importNode(doc,child,deep));
  			child = child.nextSibling;
  		}
  	}
  	return node2;
  }
  //
  //var _relationMap = {firstChild:1,lastChild:1,previousSibling:1,nextSibling:1,
  //					attributes:1,childNodes:1,parentNode:1,documentElement:1,doctype,};
  function cloneNode(doc,node,deep){
  	var node2 = new node.constructor();
  	for(var n in node){
  		var v = node[n];
  		if(typeof v != 'object' ){
  			if(v != node2[n]){
  				node2[n] = v;
  			}
  		}
  	}
  	if(node.childNodes){
  		node2.childNodes = new NodeList();
  	}
  	node2.ownerDocument = doc;
  	switch (node2.nodeType) {
  	case ELEMENT_NODE:
  		var attrs	= node.attributes;
  		var attrs2	= node2.attributes = new NamedNodeMap();
  		var len = attrs.length;
  		attrs2._ownerElement = node2;
  		for(var i=0;i<len;i++){
  			node2.setAttributeNode(cloneNode(doc,attrs.item(i),true));
  		}
  		break;	case ATTRIBUTE_NODE:
  		deep = true;
  	}
  	if(deep){
  		var child = node.firstChild;
  		while(child){
  			node2.appendChild(cloneNode(doc,child,deep));
  			child = child.nextSibling;
  		}
  	}
  	return node2;
  }

  function __set__(object,key,value){
  	object[key] = value;
  }
  //do dynamic
  try{
  	if(Object.defineProperty){
  		Object.defineProperty(LiveNodeList.prototype,'length',{
  			get:function(){
  				_updateLiveList(this);
  				return this.$$length;
  			}
  		});
  		Object.defineProperty(Node.prototype,'textContent',{
  			get:function(){
  				return getTextContent(this);
  			},
  			set:function(data){
  				switch(this.nodeType){
  				case ELEMENT_NODE:
  				case DOCUMENT_FRAGMENT_NODE:
  					while(this.firstChild){
  						this.removeChild(this.firstChild);
  					}
  					if(data || String(data)){
  						this.appendChild(this.ownerDocument.createTextNode(data));
  					}
  					break;
  				default:
  					//TODO:
  					this.data = data;
  					this.value = data;
  					this.nodeValue = data;
  				}
  			}
  		});
  		
  		function getTextContent(node){
  			switch(node.nodeType){
  			case ELEMENT_NODE:
  			case DOCUMENT_FRAGMENT_NODE:
  				var buf = [];
  				node = node.firstChild;
  				while(node){
  					if(node.nodeType!==7 && node.nodeType !==8){
  						buf.push(getTextContent(node));
  					}
  					node = node.nextSibling;
  				}
  				return buf.join('');
  			default:
  				return node.nodeValue;
  			}
  		}
  		__set__ = function(object,key,value){
  			//console.log(value)
  			object['$$'+key] = value;
  		};
  	}
  }catch(e){//ie8
  }

  //if(typeof require == 'function'){
  	var DOMImplementation_1 = DOMImplementation;
  	var XMLSerializer_1 = XMLSerializer$1;
  //}

  var dom = {
  	DOMImplementation: DOMImplementation_1,
  	XMLSerializer: XMLSerializer_1
  };

  var domParser = createCommonjsModule(function (module, exports) {
  function DOMParser(options){
  	this.options = options ||{locator:{}};
  	
  }
  DOMParser.prototype.parseFromString = function(source,mimeType){
  	var options = this.options;
  	var sax =  new XMLReader();
  	var domBuilder = options.domBuilder || new DOMHandler();//contentHandler and LexicalHandler
  	var errorHandler = options.errorHandler;
  	var locator = options.locator;
  	var defaultNSMap = options.xmlns||{};
  	var entityMap = {'lt':'<','gt':'>','amp':'&','quot':'"','apos':"'"};
  	if(locator){
  		domBuilder.setDocumentLocator(locator);
  	}
  	
  	sax.errorHandler = buildErrorHandler(errorHandler,domBuilder,locator);
  	sax.domBuilder = options.domBuilder || domBuilder;
  	if(/\/x?html?$/.test(mimeType)){
  		entityMap.nbsp = '\xa0';
  		entityMap.copy = '\xa9';
  		defaultNSMap['']= 'http://www.w3.org/1999/xhtml';
  	}
  	defaultNSMap.xml = defaultNSMap.xml || 'http://www.w3.org/XML/1998/namespace';
  	if(source){
  		sax.parse(source,defaultNSMap,entityMap);
  	}else{
  		sax.errorHandler.error("invalid doc source");
  	}
  	return domBuilder.doc;
  };
  function buildErrorHandler(errorImpl,domBuilder,locator){
  	if(!errorImpl){
  		if(domBuilder instanceof DOMHandler){
  			return domBuilder;
  		}
  		errorImpl = domBuilder ;
  	}
  	var errorHandler = {};
  	var isCallback = errorImpl instanceof Function;
  	locator = locator||{};
  	function build(key){
  		var fn = errorImpl[key];
  		if(!fn && isCallback){
  			fn = errorImpl.length == 2?function(msg){errorImpl(key,msg);}:errorImpl;
  		}
  		errorHandler[key] = fn && function(msg){
  			fn('[xmldom '+key+']\t'+msg+_locator(locator));
  		}||function(){};
  	}
  	build('warning');
  	build('error');
  	build('fatalError');
  	return errorHandler;
  }

  //console.log('#\n\n\n\n\n\n\n####')
  /**
   * +ContentHandler+ErrorHandler
   * +LexicalHandler+EntityResolver2
   * -DeclHandler-DTDHandler 
   * 
   * DefaultHandler:EntityResolver, DTDHandler, ContentHandler, ErrorHandler
   * DefaultHandler2:DefaultHandler,LexicalHandler, DeclHandler, EntityResolver2
   * @link http://www.saxproject.org/apidoc/org/xml/sax/helpers/DefaultHandler.html
   */
  function DOMHandler() {
      this.cdata = false;
  }
  function position(locator,node){
  	node.lineNumber = locator.lineNumber;
  	node.columnNumber = locator.columnNumber;
  }
  /**
   * @see org.xml.sax.ContentHandler#startDocument
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ContentHandler.html
   */ 
  DOMHandler.prototype = {
  	startDocument : function() {
      	this.doc = new DOMImplementation().createDocument(null, null, null);
      	if (this.locator) {
          	this.doc.documentURI = this.locator.systemId;
      	}
  	},
  	startElement:function(namespaceURI, localName, qName, attrs) {
  		var doc = this.doc;
  	    var el = doc.createElementNS(namespaceURI, qName||localName);
  	    var len = attrs.length;
  	    appendElement(this, el);
  	    this.currentElement = el;
  	    
  		this.locator && position(this.locator,el);
  	    for (var i = 0 ; i < len; i++) {
  	        var namespaceURI = attrs.getURI(i);
  	        var value = attrs.getValue(i);
  	        var qName = attrs.getQName(i);
  			var attr = doc.createAttributeNS(namespaceURI, qName);
  			this.locator &&position(attrs.getLocator(i),attr);
  			attr.value = attr.nodeValue = value;
  			el.setAttributeNode(attr);
  	    }
  	},
  	endElement:function(namespaceURI, localName, qName) {
  		var current = this.currentElement;
  		var tagName = current.tagName;
  		this.currentElement = current.parentNode;
  	},
  	startPrefixMapping:function(prefix, uri) {
  	},
  	endPrefixMapping:function(prefix) {
  	},
  	processingInstruction:function(target, data) {
  	    var ins = this.doc.createProcessingInstruction(target, data);
  	    this.locator && position(this.locator,ins);
  	    appendElement(this, ins);
  	},
  	ignorableWhitespace:function(ch, start, length) {
  	},
  	characters:function(chars, start, length) {
  		chars = _toString.apply(this,arguments);
  		//console.log(chars)
  		if(chars){
  			if (this.cdata) {
  				var charNode = this.doc.createCDATASection(chars);
  			} else {
  				var charNode = this.doc.createTextNode(chars);
  			}
  			if(this.currentElement){
  				this.currentElement.appendChild(charNode);
  			}else if(/^\s*$/.test(chars)){
  				this.doc.appendChild(charNode);
  				//process xml
  			}
  			this.locator && position(this.locator,charNode);
  		}
  	},
  	skippedEntity:function(name) {
  	},
  	endDocument:function() {
  		this.doc.normalize();
  	},
  	setDocumentLocator:function (locator) {
  	    if(this.locator = locator){// && !('lineNumber' in locator)){
  	    	locator.lineNumber = 0;
  	    }
  	},
  	//LexicalHandler
  	comment:function(chars, start, length) {
  		chars = _toString.apply(this,arguments);
  	    var comm = this.doc.createComment(chars);
  	    this.locator && position(this.locator,comm);
  	    appendElement(this, comm);
  	},
  	
  	startCDATA:function() {
  	    //used in characters() methods
  	    this.cdata = true;
  	},
  	endCDATA:function() {
  	    this.cdata = false;
  	},
  	
  	startDTD:function(name, publicId, systemId) {
  		var impl = this.doc.implementation;
  	    if (impl && impl.createDocumentType) {
  	        var dt = impl.createDocumentType(name, publicId, systemId);
  	        this.locator && position(this.locator,dt);
  	        appendElement(this, dt);
  	    }
  	},
  	/**
  	 * @see org.xml.sax.ErrorHandler
  	 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
  	 */
  	warning:function(error) {
  		console.warn('[xmldom warning]\t'+error,_locator(this.locator));
  	},
  	error:function(error) {
  		console.error('[xmldom error]\t'+error,_locator(this.locator));
  	},
  	fatalError:function(error) {
  		console.error('[xmldom fatalError]\t'+error,_locator(this.locator));
  	    throw error;
  	}
  };
  function _locator(l){
  	if(l){
  		return '\n@'+(l.systemId ||'')+'#[line:'+l.lineNumber+',col:'+l.columnNumber+']'
  	}
  }
  function _toString(chars,start,length){
  	if(typeof chars == 'string'){
  		return chars.substr(start,length)
  	}else{//java sax connect width xmldom on rhino(what about: "? && !(chars instanceof String)")
  		if(chars.length >= start+length || start){
  			return new java.lang.String(chars,start,length)+'';
  		}
  		return chars;
  	}
  }

  /*
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/LexicalHandler.html
   * used method of org.xml.sax.ext.LexicalHandler:
   *  #comment(chars, start, length)
   *  #startCDATA()
   *  #endCDATA()
   *  #startDTD(name, publicId, systemId)
   *
   *
   * IGNORED method of org.xml.sax.ext.LexicalHandler:
   *  #endDTD()
   *  #startEntity(name)
   *  #endEntity(name)
   *
   *
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/DeclHandler.html
   * IGNORED method of org.xml.sax.ext.DeclHandler
   * 	#attributeDecl(eName, aName, type, mode, value)
   *  #elementDecl(name, model)
   *  #externalEntityDecl(name, publicId, systemId)
   *  #internalEntityDecl(name, value)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/ext/EntityResolver2.html
   * IGNORED method of org.xml.sax.EntityResolver2
   *  #resolveEntity(String name,String publicId,String baseURI,String systemId)
   *  #resolveEntity(publicId, systemId)
   *  #getExternalSubset(name, baseURI)
   * @link http://www.saxproject.org/apidoc/org/xml/sax/DTDHandler.html
   * IGNORED method of org.xml.sax.DTDHandler
   *  #notationDecl(name, publicId, systemId) {};
   *  #unparsedEntityDecl(name, publicId, systemId, notationName) {};
   */
  "endDTD,startEntity,endEntity,attributeDecl,elementDecl,externalEntityDecl,internalEntityDecl,resolveEntity,getExternalSubset,notationDecl,unparsedEntityDecl".replace(/\w+/g,function(key){
  	DOMHandler.prototype[key] = function(){return null};
  });

  /* Private static helpers treated below as private instance methods, so don't need to add these to the public API; we might use a Relator to also get rid of non-standard public properties */
  function appendElement (hander,node) {
      if (!hander.currentElement) {
          hander.doc.appendChild(node);
      } else {
          hander.currentElement.appendChild(node);
      }
  }//appendChild and setAttributeNS are preformance key

  //if(typeof require == 'function'){
  	var XMLReader = sax.XMLReader;
  	var DOMImplementation = exports.DOMImplementation = dom.DOMImplementation;
  	exports.XMLSerializer = dom.XMLSerializer ;
  	exports.DOMParser = DOMParser;
  //}
  });
  var domParser_1 = domParser.DOMImplementation;
  var domParser_2 = domParser.XMLSerializer;
  var domParser_3 = domParser.DOMParser;

  /* Copyright 2015 William Summers, MetaTribal LLC
   * adapted from https://developer.mozilla.org/en-US/docs/JXON
   *
   * Licensed under the MIT License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     https://opensource.org/licenses/MIT
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /**
   * @author William Summers
   * https://github.com/metatribal/xmlToJSON
   */
  var DOMParser$1 = domParser.DOMParser;

  var xmlToJSON = (function () {

      this.version = "1.3.5";

      var options = { // set up the default options
          mergeCDATA: true, // extract cdata and merge with text
          normalize: true, // collapse multiple spaces to single space
          stripElemPrefix: true, // for elements of same name in diff namespaces, you can enable namespaces and access the nskey property
      };

      var prefixMatch = new RegExp(/(?!xmlns)^.*:/);

      this.grokType = function (sValue) {
          if (/^\s*$/.test(sValue)) {
              return null;
          }
          if (/^(?:true|false)$/i.test(sValue)) {
              return sValue.toLowerCase() === "true";
          }
          if (isFinite(sValue)) {
              return parseFloat(sValue);
          }
          return sValue;
      };

      this.parseString = function (xmlString, opt) {
          if (xmlString) {
              var xml = this.stringToXML(xmlString);
              if (xml.getElementsByTagName('parsererror').length) {
                  return null;
              } else {
                  return this.parseXML(xml, opt);
              }
          } else {
              return null;
          }
      };

      this.parseXML = function (oXMLParent, opt) {

          // initialize options
          for (var key in opt) {
              options[key] = opt[key];
          }

          var vResult = {},
              nLength = 0,
              sCollectedTxt = "";

          // iterate over the children
          var childNum = oXMLParent.childNodes.length;
          if (childNum) {
              for (var oNode, sProp, vContent, nItem = 0; nItem < oXMLParent.childNodes.length; nItem++) {
                  oNode = oXMLParent.childNodes.item(nItem);

                  if (oNode.nodeType === 4) {
                      if (options.mergeCDATA) {
                          sCollectedTxt += oNode.nodeValue;
                      }
                  } /* nodeType is "CDATASection" (4) */
                  else if (oNode.nodeType === 3) {
                      sCollectedTxt += oNode.nodeValue;
                  } /* nodeType is "Text" (3) */
                  else if (oNode.nodeType === 1) { /* nodeType is "Element" (1) */

                      if (nLength === 0) {
                          vResult = {};
                      }

                      // using nodeName to support browser (IE) implementation with no 'localName' property
                      if (options.stripElemPrefix) {
                          sProp = oNode.nodeName.replace(prefixMatch, '');
                      } else {
                          sProp = oNode.nodeName;
                      }

                      vContent = xmlToJSON.parseXML(oNode);

                      if (vResult.hasOwnProperty(sProp)) {
                          if (vResult[sProp].constructor !== Array) {
                              vResult[sProp] = [vResult[sProp]];
                          }
                          vResult[sProp].push(vContent);

                      } else {
                          vResult[sProp] = vContent;
                          nLength++;
                      }
                  }
              }
          }

          if (!Object.keys(vResult).length) {
              // vResult = sCollectedTxt.replace(trimMatch, '') || ''; // by carsonxu 修复 getBucket返回的 Key 是 " /" 这种场景
              vResult = sCollectedTxt || '';
          }

          return vResult;
      };

      // Convert xmlDocument to a string
      // Returns null on failure
      this.xmlToString = function (xmlDoc) {
          try {
              var xmlString = xmlDoc.xml ? xmlDoc.xml : (new XMLSerializer()).serializeToString(xmlDoc);
              return xmlString;
          } catch (err) {
              return null;
          }
      };

      // Convert a string to XML Node Structure
      // Returns null on failure
      this.stringToXML = function (xmlString) {
          try {
              var xmlDoc = null;

              if (window.DOMParser) {

                  var parser = new DOMParser$1();
                  xmlDoc = parser.parseFromString(xmlString, "text/xml");

                  return xmlDoc;
              } else {
                  xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
                  xmlDoc.async = false;
                  xmlDoc.loadXML(xmlString);

                  return xmlDoc;
              }
          } catch (e) {
              return null;
          }
      };

      return this;

  }).call({});

  var xml2json = function (xmlString) {
      return xmlToJSON.parseString(xmlString);
  };

  var xml2json_1 = xml2json;

  //copyright Ryan Day 2010 <http://ryanday.org>, Joscha Feth 2013 <http://www.feth.com> [MIT Licensed]

  var element_start_char =
      "a-zA-Z_\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u00FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FFF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD";
  var element_non_start_char = "\-.0-9\u00B7\u0300-\u036F\u203F\u2040";
  var element_replace = new RegExp("^([^" + element_start_char + "])|^((x|X)(m|M)(l|L))|([^" + element_start_char + element_non_start_char + "])", "g");
  var not_safe_in_xml = /[^\x09\x0A\x0D\x20-\xFF\x85\xA0-\uD7FF\uE000-\uFDCF\uFDE0-\uFFFD]/gm;

  var objKeys = function (obj) {
      var l = [];
      if (obj instanceof Object) {
          for (var k in obj) {
              if (obj.hasOwnProperty(k)) {
                  l.push(k);
              }
          }
      }
      return l;
  };
  var process_to_xml = function (node_data, options) {

      var makeNode = function (name, content, attributes, level, hasSubNodes) {
          var indent_value = options.indent !== undefined ? options.indent : "\t";
          var indent = options.prettyPrint ? '\n' + new Array(level).join(indent_value) : '';
          if (options.removeIllegalNameCharacters) {
              name = name.replace(element_replace, '_');
          }

          var node = [indent, '<', name, (attributes || '')];
          if (content && content.length > 0) {
              node.push('>');
              node.push(content);
              hasSubNodes && node.push(indent);
              node.push('</');
              node.push(name);
              node.push('>');
          } else {
              node.push('/>');
          }
          return node.join('');
      };

      return (function fn(node_data, node_descriptor, level) {
          var type = typeof node_data;
          if ((Array.isArray) ? Array.isArray(node_data) : node_data instanceof Array) {
              type = 'array';
          } else if (node_data instanceof Date) {
              type = 'date';
          }

          switch (type) {
              //if value is an array create child nodes from values
              case 'array':
                  var ret = [];
                  node_data.map(function (v) {
                      ret.push(fn(v, 1, level + 1));
                      //entries that are values of an array are the only ones that can be special node descriptors
                  });
                  options.prettyPrint && ret.push('\n');
                  return ret.join('');

              case 'date':
                  // cast dates to ISO 8601 date (soap likes it)
                  return node_data.toJSON ? node_data.toJSON() : node_data + '';

              case 'object':
                  var nodes = [];
                  for (var name in node_data) {
                      if (node_data.hasOwnProperty(name)) {
                          if (node_data[name] instanceof Array) {
                              for (var j = 0; j < node_data[name].length; j++) {
                                  if (node_data[name].hasOwnProperty(j)) {
                                      nodes.push(makeNode(name, fn(node_data[name][j], 0, level + 1), null, level + 1, objKeys(node_data[name][j]).length));
                                  }
                              }
                          } else {
                              nodes.push(makeNode(name, fn(node_data[name], 0, level + 1), null, level + 1));
                          }
                      }
                  }
                  options.prettyPrint && nodes.length > 0 && nodes.push('\n');
                  return nodes.join('');

              case 'function':
                  return node_data();

              default:
                  return options.escape ? esc(node_data) : '' + node_data;
          }

      }(node_data, 0, 0))
  };


  var xml_header = function (standalone) {
      var ret = ['<?xml version="1.0" encoding="UTF-8"'];

      if (standalone) {
          ret.push(' standalone="yes"');
      }
      ret.push('?>');

      return ret.join('');
  };

  function esc(str) {
      return ('' + str).replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/'/g, '&apos;')
          .replace(/"/g, '&quot;')
          .replace(not_safe_in_xml, '');
  }

  var json2xml = function (obj, options) {
      if (!options) {
          options = {
              xmlHeader: {
                  standalone: true
              },
              prettyPrint: true,
              indent: "  ",
              escape: true,
          };
      }

      if (typeof obj == 'string') {
          try {
              obj = JSON.parse(obj.toString());
          } catch (e) {
              return false;
          }
      }

      var xmlheader = '';
      var docType = '';
      if (options) {
          if (typeof options == 'object') {
              // our config is an object

              if (options.xmlHeader) {
                  // the user wants an xml header
                  xmlheader = xml_header(!!options.xmlHeader.standalone);
              }

              if (typeof options.docType != 'undefined') {
                  docType = '<!DOCTYPE ' + options.docType + '>';
              }
          } else {
              // our config is a boolean value, so just add xml header
              xmlheader = xml_header();
          }
      }
      options = options || {};

      var ret = [
          xmlheader,
          (options.prettyPrint && docType ? '\n' : ''),
          docType,
          process_to_xml(obj, options)
      ];
      return ret.join('').replace(/\n{2,}/g, '\n').replace(/\s+$/g, '');
  };

  function camSafeUrlEncode(str) {
      return encodeURIComponent(str)
          .replace(/!/g, '%21')
          .replace(/'/g, '%27')
          .replace(/\(/g, '%28')
          .replace(/\)/g, '%29')
          .replace(/\*/g, '%2A');
  }

  //测试用的key后面可以去掉
  var getAuth = function (opt) {
      opt = opt || {};

      var SecretId = opt.SecretId;
      var SecretKey = opt.SecretKey;
      var KeyTime = opt.KeyTime;
      var method = (opt.method || opt.Method || 'get').toLowerCase();
      var queryParams = clone(opt.Query || opt.params || {});
      var headers = clone(opt.Headers || opt.headers || {});

      var Key = opt.Key || '';
      var pathname;
      if (opt.UseRawKey) {
          pathname = opt.Pathname || opt.pathname || '/' + Key;
      } else {
          pathname = opt.Pathname || opt.pathname || Key;
          pathname.indexOf('/') !== 0 && (pathname = '/' + pathname);
      }

      if (!SecretId) return console.error('missing param SecretId');
      if (!SecretKey) return console.error('missing param SecretKey');

      var getObjectKeys = function (obj) {
          var list = [];
          for (var key in obj) {
              if (obj.hasOwnProperty(key)) {
                  list.push(key);
              }
          }
          return list.sort(function (a, b) {
              a = a.toLowerCase();
              b = b.toLowerCase();
              return a === b ? 0 : (a > b ? 1 : -1);
          });
      };

      var obj2str = function (obj) {
          var i, key, val;
          var list = [];
          var keyList = getObjectKeys(obj);
          for (i = 0; i < keyList.length; i++) {
              key = keyList[i];
              val = (obj[key] === undefined || obj[key] === null) ? '' : ('' + obj[key]);
              key = key.toLowerCase();
              key = camSafeUrlEncode(key);
              val = camSafeUrlEncode(val) || '';
              list.push(key + '=' + val);
          }
          return list.join('&');
      };

      // 签名有效起止时间
      var now = Math.round(getSkewTime(opt.SystemClockOffset) / 1000) - 1;
      var exp = now;

      var Expires = opt.Expires || opt.expires;
      if (Expires === undefined) {
          exp += 900; // 签名过期时间为当前 + 900s
      } else {
          exp += (Expires * 1) || 0;
      }

      // 要用到的 Authorization 参数列表
      var qSignAlgorithm = 'sha1';
      var qAk = SecretId;
      var qSignTime = KeyTime || now + ';' + exp;
      var qKeyTime = KeyTime || now + ';' + exp;
      var qHeaderList = getObjectKeys(headers).join(';').toLowerCase();
      var qUrlParamList = getObjectKeys(queryParams).join(';').toLowerCase();

      // 签名算法说明文档：https://www.qcloud.com/document/product/436/7778
      // 步骤一：计算 SignKey
      var signKey = crypto.HmacSHA1(qKeyTime, SecretKey).toString();

      // 步骤二：构成 FormatString
      var formatString = [method, pathname, obj2str(queryParams), obj2str(headers), ''].join('\n');

      // 步骤三：计算 StringToSign
      var stringToSign = ['sha1', qSignTime, crypto.SHA1(formatString).toString(), ''].join('\n');

      // 步骤四：计算 Signature
      var qSignature = crypto.HmacSHA1(stringToSign, signKey).toString();

      // 步骤五：构造 Authorization
      var authorization = [
          'q-sign-algorithm=' + qSignAlgorithm,
          'q-ak=' + qAk,
          'q-sign-time=' + qSignTime,
          'q-key-time=' + qKeyTime,
          'q-header-list=' + qHeaderList,
          'q-url-param-list=' + qUrlParamList,
          'q-signature=' + qSignature
      ].join('&');

      return authorization;

  };

  var noop = function () {

  };

  // 清除对象里值为的 undefined 或 null 的属性
  var clearKey = function (obj) {
      var retObj = {};
      for (var key in obj) {
          if (obj.hasOwnProperty(key) && obj[key] !== undefined && obj[key] !== null) {
              retObj[key] = obj[key];
          }
      }
      return retObj;
  };

  var readAsBinaryString = function (blob, callback) {
      var readFun;
      var fr = new FileReader();
      if (FileReader.prototype.readAsBinaryString) {
          readFun = FileReader.prototype.readAsBinaryString;
          fr.onload = function () {
              callback(this.result);
          };
      } else if (FileReader.prototype.readAsArrayBuffer) { // 在 ie11 添加 readAsBinaryString 兼容
          readFun = function (fileData) {
              var binary = "";
              var reader = new FileReader();
              reader.onload = function (e) {
                  var bytes = new Uint8Array(reader.result);
                  var length = bytes.byteLength;
                  for (var i = 0; i < length; i++) {
                      binary += String.fromCharCode(bytes[i]);
                  }
                  callback(binary);
              };
              reader.readAsArrayBuffer(fileData);
          };
      } else {
          console.error('FileReader not support readAsBinaryString');
      }
      readFun.call(fr, blob);
  };

  var fileSliceNeedCopy = (function () {
      var compareVersion = function(a, b) {
          a = a.split('.');
          b = b.split('.');
          for (var i = 0; i < b.length; i++) {
              if (a[i] !== b[i]) {
                  return parseInt(a[i]) > parseInt(b[i]) ? 1 : -1;
              }
          }
          return 0;
      };
      var check = function (ua) {
          var ChromeVersion = (ua.match(/Chrome\/([.\d]+)/) || [])[1];
          var QBCoreVersion = (ua.match(/QBCore\/([.\d]+)/) || [])[1];
          var QQBrowserVersion = (ua.match(/QQBrowser\/([.\d]+)/) || [])[1];
          var need = ChromeVersion && compareVersion(ChromeVersion, '53.0.2785.116') < 0
              && QBCoreVersion && compareVersion(QBCoreVersion, '3.53.991.400') < 0
              && QQBrowserVersion && compareVersion(QQBrowserVersion, '9.0.2524.400') <= 0 || false;
          return need;
      };
      return check(navigator && navigator.userAgent);
  })();

  // 获取文件分片
  var fileSlice = function (file, start, end, isUseToUpload, callback) {
      var blob;
      if (file.slice) {
          blob = file.slice(start, end);
      } else if (file.mozSlice) {
          blob = file.mozSlice(start, end);
      } else if (file.webkitSlice) {
          blob = file.webkitSlice(start, end);
      }
      if (isUseToUpload && fileSliceNeedCopy) {
          var reader = new FileReader();
          reader.onload = function (e) {
              blob = null;
              callback(new Blob([reader.result]));
          };
          reader.readAsArrayBuffer(blob);
      } else {
          callback(blob);
      }
  };

  // 获取文件内容的 MD5
  var getBodyMd5 = function (UploadCheckContentMd5, Body, callback, onProgress) {
      callback = callback || noop;
      if (UploadCheckContentMd5) {
          if (typeof Body === 'string') {
              callback(util.md5(Body, true));
          } else if (Blob && Body instanceof Blob) {
              util.getFileMd5(Body, function (err, md5) {
                  callback(md5);
              }, onProgress);
          } else {
              callback();
          }
      } else {
          callback();
      }
  };

  // 获取文件 md5 值
  var md5ChunkSize = 1024 * 1024;
  var getFileMd5 = function (blob, callback, onProgress) {
      var size = blob.size;
      var loaded = 0;
      var md5ctx = md5_1.getCtx();
      var next = function (start) {
          if (start >= size) {
              var hash = md5ctx.digest('hex');
              callback(null, hash);
              return;
          }
          var end = Math.min(size, start + md5ChunkSize);
          util.fileSlice(blob, start, end, false, function (chunk) {
              readAsBinaryString(chunk, function (content) {
                  chunk = null;
                  md5ctx = md5ctx.update(content, true);
                  loaded += content.length;
                  content = null;
                  if (onProgress) onProgress({loaded: loaded, total: size, percent: Math.round(loaded / size * 10000) / 10000});
                  next(start + md5ChunkSize);
              });
          });
      };
      next(0);
  };

  function clone(obj) {
      return map(obj, function (v) {
          return typeof v === 'object' ? clone(v) : v;
      });
  }

  function extend(target, source) {
      each(source, function (val, key) {
          target[key] = source[key];
      });
      return target;
  }

  function isArray(arr) {
      return arr instanceof Array;
  }

  function isInArray(arr, item) {
      var flag = false;
      for (var i = 0; i < arr.length; i++) {
          if (item === arr[i]) {
              flag = true;
              break;
          }
      }
      return flag;
  }

  function makeArray(arr) {
      return isArray(arr) ? arr : [arr];
  }

  function each(obj, fn) {
      for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
              fn(obj[i], i);
          }
      }
  }

  function map(obj, fn) {
      var o = isArray(obj) ? [] : {};
      for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
              o[i] = fn(obj[i], i);
          }
      }
      return o;
  }

  function filter(obj, fn) {
      var iaArr = isArray(obj);
      var o = iaArr ? [] : {};
      for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
              if (fn(obj[i], i)) {
                  if (iaArr) {
                      o.push(obj[i]);
                  } else {
                      o[i] = obj[i];
                  }
              }
          }
      }
      return o;
  }

  var binaryBase64 = function (str) {
      var i, len, char, res = '';
      for (i = 0, len = str.length / 2; i < len; i++) {
          char = parseInt(str[i * 2] + str[i * 2 + 1], 16);
          res += String.fromCharCode(char);
      }
      return btoa(res);
  };
  var uuid = function () {
      var S4 = function () {
          return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
      };
      return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  };

  var hasMissingParams = function (apiName, params) {
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      if (apiName.indexOf('Bucket') > -1 || apiName === 'deleteMultipleObject' || apiName === 'multipartList' || apiName === 'listObjectVersions') {
          if (!Bucket) return 'Bucket';
          if (!Region) return 'Region';
      } else if (apiName.indexOf('Object') > -1 || apiName.indexOf('multipart') > -1 || apiName === 'sliceUploadFile' || apiName === 'abortUploadTask') {
          if (!Bucket) return 'Bucket';
          if (!Region) return 'Region';
          if (!Key) return 'Key';
      }
      return false;
  };

  var formatParams = function (apiName, params) {

      // 复制参数对象
      params = extend({}, params);

      // 统一处理 Headers
      if (apiName !== 'getAuth' && apiName !== 'getV4Auth' && apiName !== 'getObjectUrl') {
          var Headers = params.Headers || {};
          if (params && typeof params === 'object') {
              (function () {
                  for (var key in params) {
                      if (params.hasOwnProperty(key) && key.indexOf('x-cos-') > -1) {
                          Headers[key] = params[key];
                      }
                  }
              })();

              var headerMap = {
                  // params headers
                  'x-cos-mfa': 'MFA',
                  'Content-MD5': 'ContentMD5',
                  'Content-Length': 'ContentLength',
                  'Content-Type': 'ContentType',
                  'Expect': 'Expect',
                  'Expires': 'Expires',
                  'Cache-Control': 'CacheControl',
                  'Content-Disposition': 'ContentDisposition',
                  'Content-Encoding': 'ContentEncoding',
                  'Range': 'Range',
                  'If-Modified-Since': 'IfModifiedSince',
                  'If-Unmodified-Since': 'IfUnmodifiedSince',
                  'If-Match': 'IfMatch',
                  'If-None-Match': 'IfNoneMatch',
                  'x-cos-copy-source': 'CopySource',
                  'x-cos-copy-source-Range': 'CopySourceRange',
                  'x-cos-metadata-directive': 'MetadataDirective',
                  'x-cos-copy-source-If-Modified-Since': 'CopySourceIfModifiedSince',
                  'x-cos-copy-source-If-Unmodified-Since': 'CopySourceIfUnmodifiedSince',
                  'x-cos-copy-source-If-Match': 'CopySourceIfMatch',
                  'x-cos-copy-source-If-None-Match': 'CopySourceIfNoneMatch',
                  'x-cos-acl': 'ACL',
                  'x-cos-grant-read': 'GrantRead',
                  'x-cos-grant-write': 'GrantWrite',
                  'x-cos-grant-full-control': 'GrantFullControl',
                  'x-cos-grant-read-acp': 'GrantReadAcp',
                  'x-cos-grant-write-acp': 'GrantWriteAcp',
                  'x-cos-storage-class': 'StorageClass',
                  // SSE-C
                  'x-cos-server-side-encryption-customer-algorithm': 'SSECustomerAlgorithm',
                  'x-cos-server-side-encryption-customer-key': 'SSECustomerKey',
                  'x-cos-server-side-encryption-customer-key-MD5': 'SSECustomerKeyMD5',
                  // SSE-COS、SSE-KMS
                  'x-cos-server-side-encryption': 'ServerSideEncryption',
                  'x-cos-server-side-encryption-cos-kms-key-id': 'SSEKMSKeyId',
                  'x-cos-server-side-encryption-context': 'SSEContext',
              };
              util.each(headerMap, function (paramKey, headerKey) {
                  if (params[paramKey] !== undefined) {
                      Headers[headerKey] = params[paramKey];
                  }
              });

              params.Headers = clearKey(Headers);
          }
      }

      return params;
  };

  var apiWrapper = function (apiName, apiFn) {
      return function (params, callback) {

          // 处理参数
          if (typeof params === 'function') {
              callback = params;
              params = {};
          }

          // 整理参数格式
          params = formatParams(apiName, params);

          // 代理回调函数
          var formatResult = function (result) {
              if (result && result.headers) {
                  result.headers['x-cos-version-id'] && (result.VersionId = result.headers['x-cos-version-id']);
                  result.headers['x-cos-delete-marker'] && (result.DeleteMarker = result.headers['x-cos-delete-marker']);
              }
              return result;
          };
          var _callback = function (err, data) {
              callback && callback(formatResult(err), formatResult(data));
          };

          if (apiName !== 'getService' && apiName !== 'abortUploadTask') {
              // 判断参数是否完整
              var missingResult;
              if (missingResult = hasMissingParams(apiName, params)) {
                  _callback({error: 'missing param ' + missingResult});
                  return;
              }
              // 判断 region 格式
              if (params.Region) {
                  if (params.Region.indexOf('cos.') > -1) {
                      _callback({error: 'param Region should not be start with "cos."'});
                      return;
                  } else if (!/^([a-z\d-]+)$/.test(params.Region)) {
                      _callback({error: 'Region format error.'});
                      return;
                  }
                  // 判断 region 格式
                  if (!this.options.CompatibilityMode && params.Region.indexOf('-') === -1 && params.Region !== 'yfb' && params.Region !== 'default') {
                      console.warn('warning: param Region format error, find help here: https://cloud.tencent.com/document/product/436/6224');
                  }
              }
              // 兼容不带 AppId 的 Bucket
              if (params.Bucket) {
                  if (!/^([a-z\d-]+)-(\d+)$/.test(params.Bucket)) {
                      if (params.AppId) {
                          params.Bucket = params.Bucket + '-' + params.AppId;
                      } else if (this.options.AppId) {
                          params.Bucket = params.Bucket + '-' + this.options.AppId;
                      } else {
                          _callback({error: 'Bucket should format as "test-1250000000".'});
                          return;
                      }
                  }
                  if (params.AppId) {
                      console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g Bucket:"test-1250000000" ).');
                      delete params.AppId;
                  }
              }
              // 如果 Key 是 / 开头，强制去掉第一个 /
              if (!this.options.UseRawKey && params.Key && params.Key.substr(0, 1) === '/') {
                  params.Key = params.Key.substr(1);
              }
          }
          var res = apiFn.call(this, params, _callback);
          if (apiName === 'getAuth' || apiName === 'getObjectUrl') {
              return res;
          }
      }
  };

  var throttleOnProgress = function (total, onProgress) {
      var self = this;
      var size0 = 0;
      var size1 = 0;
      var time0 = Date.now();
      var time1;
      var timer;

      function update() {
          timer = 0;
          if (onProgress && (typeof onProgress === 'function')) {
              time1 = Date.now();
              var speed = Math.max(0, Math.round((size1 - size0) / ((time1 - time0) / 1000) * 100) / 100);
              var percent;
              if (size1 === 0 && total === 0) {
                  percent = 1;
              } else {
                  percent = Math.round(size1 / total * 100) / 100 || 0;
              }
              time0 = time1;
              size0 = size1;
              try {
                  onProgress({loaded: size1, total: total, speed: speed, percent: percent});
              } catch (e) {
              }
          }
      }

      return function (info, immediately) {
          if (info) {
              size1 = info.loaded;
              total = info.total;
          }
          if (immediately) {
              clearTimeout(timer);
              update();
          } else {
              if (timer) return;
              timer = setTimeout(update, self.options.ProgressInterval);
          }
      };
  };

  var getFileSize = function (api, params, callback) {
      var size;
      if (typeof params.Body === 'string') {
          params.Body = new Blob([params.Body], {type: 'text/plain'});
      }
      if ((params.Body && (params.Body instanceof Blob || params.Body.toString() === '[object File]' || params.Body.toString() === '[object Blob]'))) {
          size = params.Body.size;
      } else {
          callback({error: 'params body format error, Only allow File|Blob|String.'});
          return;
      }
      params.ContentLength = size;
      callback(null, size);
  };

  // 获取调正的时间戳
  var getSkewTime = function (offset) {
      return Date.now() + (offset || 0);
  };

  var util = {
      noop: noop,
      formatParams: formatParams,
      apiWrapper: apiWrapper,
      xml2json: xml2json_1,
      json2xml: json2xml,
      md5: md5_1,
      clearKey: clearKey,
      fileSlice: fileSlice,
      getBodyMd5: getBodyMd5,
      getFileMd5: getFileMd5,
      binaryBase64: binaryBase64,
      extend: extend,
      isArray: isArray,
      isInArray: isInArray,
      makeArray: makeArray,
      each: each,
      map: map,
      filter: filter,
      clone: clone,
      uuid: uuid,
      camSafeUrlEncode: camSafeUrlEncode,
      throttleOnProgress: throttleOnProgress,
      getFileSize: getFileSize,
      getSkewTime: getSkewTime,
      getAuth: getAuth,
      isBrowser: true,
  };

  var util_1 = util;

  var initEvent = function (cos) {
      var listeners = {};
      var getList = function (action) {
          !listeners[action] && (listeners[action] = []);
          return listeners[action];
      };
      cos.on = function (action, callback) {
          if (action === 'task-list-update') {
              console.warn('warning: Event "' + action + '" has been deprecated. Please use "list-update" instead.');
          }
          getList(action).push(callback);
      };
      cos.off = function (action, callback) {
          var list = getList(action);
          for (var i = list.length - 1; i >= 0; i--) {
              callback === list[i] && list.splice(i, 1);
          }
      };
      cos.emit = function (action, data) {
          var list = getList(action).map(function (cb) {
              return cb;
          });
          for (var i = 0; i < list.length; i++) {
              list[i](data);
          }
      };
  };

  var EventProxy = function () {
      initEvent(this);
  };

  var init = initEvent;
  var EventProxy_1 = EventProxy;

  var event$1 = {
  	init: init,
  	EventProxy: EventProxy_1
  };

  // 按照文件特征值，缓存 UploadId
  var cacheKey = 'cos_sdk_upload_cache';
  var expires = 30 * 24 * 3600;
  var cache;
  var timer;

  var init$1 = function () {
      if (cache) return;
      cache = JSON.parse(localStorage.getItem(cacheKey) || '[]') || [];
      // 清理太老旧的数据
      var changed = false;
      var now = Math.round(Date.now() / 1000);
      for (var i = cache.length - 1; i >= 0; i--) {
          var mtime = cache[i][2];
          if (!mtime || mtime + expires < now) {
              cache.splice(i, 1);
              changed = true;
          }
      }
      changed && localStorage.setItem(cacheKey, JSON.stringify(cache));
  };

  // 把缓存存到本地
  var save = function () {
      if (timer) return;
      timer = setTimeout(function () {
          localStorage.setItem(cacheKey, JSON.stringify(cache));
          timer = null;
      }, 400);
  };

  var mod = {
      using: {},
      // 标记 UploadId 正在使用
      setUsing: function (uuid) {
          mod.using[uuid] = true;
      },
      // 标记 UploadId 已经没在使用
      removeUsing: function (uuid) {
          delete mod.using[uuid];
      },
      // 用上传参数生成哈希值
      getFileId: function (file, ChunkSize, Bucket, Key) {
          if (file.name && file.size && file.lastModifiedDate && ChunkSize) {
              return util_1.md5([file.name, file.size, file.lastModifiedDate, ChunkSize, Bucket, Key].join('::'));
          } else {
              return null;
          }
      },
      // 获取文件对应的 UploadId 列表
      getUploadIdList: function (uuid) {
          if (!uuid) return null;
          init$1();
          var list = [];
          for (var i = 0; i < cache.length; i++) {
              if (cache[i][0] === uuid)
                  list.push(cache[i][1]);
          }
          return list.length ? list : null;
      },
      // 缓存 UploadId
      saveUploadId: function (uuid, UploadId, limit) {
          init$1();
          if (!uuid) return;
          // 清理没用的 UploadId
          for (var i = cache.length - 1; i >= 0; i--) {
              var item = cache[i];
              if (item[0] === uuid && item[1] === UploadId) {
                  cache.splice(i, 1);
              }
          }
          cache.unshift([uuid, UploadId, Math.round(Date.now() / 1000)]);
          if (cache.length > limit) cache.splice(limit);
          save();
      },
      // UploadId 已用完，移除掉
      removeUploadId: function (UploadId) {
          init$1();
          delete mod.using[UploadId];
          for (var i = cache.length - 1; i >= 0; i--) {
              if (cache[i][1] === UploadId) cache.splice(i, 1);
          }
          save();
      },
  };

  var session = mod;

  var originApiMap = {};
  var transferToTaskMethod = function (apiMap, apiName) {
      originApiMap[apiName] = apiMap[apiName];
      apiMap[apiName] = function (params, callback) {
          if (params.SkipTask) {
              originApiMap[apiName].call(this, params, callback);
          } else {
              this._addTask(apiName, params, callback);
          }
      };
  };

  var initTask = function (cos) {

      var queue = [];
      var tasks = {};
      var uploadingFileCount = 0;
      var nextUploadIndex = 0;

      // 接口返回简略的任务信息
      var formatTask = function (task) {
          var t = {
              id: task.id,
              Bucket: task.Bucket,
              Region: task.Region,
              Key: task.Key,
              FilePath: task.FilePath,
              state: task.state,
              loaded: task.loaded,
              size: task.size,
              speed: task.speed,
              percent: task.percent,
              hashPercent: task.hashPercent,
              error: task.error,
          };
          if (task.FilePath) t.FilePath = task.FilePath;
          if (task._custom) t._custom = task._custom;
          return t;
      };

      var emitListUpdate = (function () {
          var timer;
          var emit = function () {
              timer = 0;
              cos.emit('task-list-update', {list: util_1.map(queue, formatTask)});
              cos.emit('list-update', {list: util_1.map(queue, formatTask)});
          };
          return function () {
              if (!timer) timer = setTimeout(emit);
          }
      })();

      var clearQueue = function () {
          if (queue.length <= cos.options.UploadQueueSize) return;
          for (var i = 0;
               i < nextUploadIndex && // 小于当前操作的 index 才清理
               i < queue.length && // 大于队列才清理
               queue.length > cos.options.UploadQueueSize // 如果还太多，才继续清理
              ;) {
              var isActive = queue[i].state === 'waiting' || queue[i].state === 'checking' || queue[i].state === 'uploading';
              if (!queue[i] || !isActive) {
                  tasks[queue[i].id] && (delete tasks[queue[i].id]);
                  queue.splice(i, 1);
                  nextUploadIndex--;
              } else {
                  i++;
              }
          }
          emitListUpdate();
      };

      var startNextTask = function () {
          // 检查是否允许增加执行进程
          if (uploadingFileCount >= cos.options.FileParallelLimit) return;
          // 跳过不可执行的任务
          while (queue[nextUploadIndex] && queue[nextUploadIndex].state !== 'waiting') nextUploadIndex++;
          // 检查是否已遍历结束
          if (nextUploadIndex >= queue.length) return;
          // 上传该遍历到的任务
          var task = queue[nextUploadIndex];
          nextUploadIndex++;
          uploadingFileCount++;
          task.state = 'checking';
          task.params.onTaskStart && task.params.onTaskStart(formatTask(task));
          !task.params.UploadData && (task.params.UploadData = {});
          var apiParams = util_1.formatParams(task.api, task.params);
          originApiMap[task.api].call(cos, apiParams, function (err, data) {
              if (!cos._isRunningTask(task.id)) return;
              if (task.state === 'checking' || task.state === 'uploading') {
                  task.state = err ? 'error' : 'success';
                  err && (task.error = err);
                  uploadingFileCount--;
                  emitListUpdate();
                  startNextTask();
                  task.callback && task.callback(err, data);
                  if (task.state === 'success') {
                      if (task.params) {
                          delete task.params.UploadData;
                          delete task.params.Body;
                          delete task.params;
                      }
                      delete task.callback;
                  }
              }
              clearQueue();
          });
          emitListUpdate();
          // 异步执行下一个任务
          setTimeout(startNextTask);
      };

      var killTask = function (id, switchToState) {
          var task = tasks[id];
          if (!task) return;
          var waiting = task && task.state === 'waiting';
          var running = task && (task.state === 'checking' || task.state === 'uploading');
          if (switchToState === 'canceled' && task.state !== 'canceled' ||
              switchToState === 'paused' && waiting ||
              switchToState === 'paused' && running) {
              if (switchToState === 'paused' && task.params.Body && typeof task.params.Body.pipe === 'function') {
                  console.error('stream not support pause');
                  return;
              }
              task.state = switchToState;
              cos.emit('inner-kill-task', {TaskId: id, toState: switchToState});
              try {
                  var UploadId = task && task.params && task.params.UploadData.UploadId;
              } catch(e) {}
              if (switchToState === 'canceled' && UploadId) session.removeUsing(UploadId);
              emitListUpdate();
              if (running) {
                  uploadingFileCount--;
                  startNextTask();
              }
              if (switchToState === 'canceled') {
                  if (task.params) {
                      delete task.params.UploadData;
                      delete task.params.Body;
                      delete task.params;
                  }
                  delete task.callback;
              }
          }
          clearQueue();
      };

      cos._addTasks = function (taskList) {
          util_1.each(taskList, function (task) {
              cos._addTask(task.api, task.params, task.callback, true);
          });
          emitListUpdate();
      };

      var isTaskReadyWarning = true;
      cos._addTask = function (api, params, callback, ignoreAddEvent) {

          // 复制参数对象
          params = util_1.formatParams(api, params);

          // 生成 id
          var id = util_1.uuid();
          params.TaskId = id;
          params.onTaskReady && params.onTaskReady(id);
          if (params.TaskReady) {
              params.TaskReady(id);
              isTaskReadyWarning && console.warn('warning: Param "TaskReady" has been deprecated. Please use "onTaskReady" instead.');
              isTaskReadyWarning = false;
          }

          var task = {
              // env
              params: params,
              callback: callback,
              api: api,
              index: queue.length,
              // task
              id: id,
              Bucket: params.Bucket,
              Region: params.Region,
              Key: params.Key,
              FilePath: params.FilePath || '',
              state: 'waiting',
              loaded: 0,
              size: 0,
              speed: 0,
              percent: 0,
              hashPercent: 0,
              error: null,
              _custom: params._custom,
          };
          var onHashProgress = params.onHashProgress;
          params.onHashProgress = function (info) {
              if (!cos._isRunningTask(task.id)) return;
              task.hashPercent = info.percent;
              onHashProgress && onHashProgress(info);
              emitListUpdate();
          };
          var onProgress = params.onProgress;
          params.onProgress = function (info) {
              if (!cos._isRunningTask(task.id)) return;
              task.state === 'checking' && (task.state = 'uploading');
              task.loaded = info.loaded;
              task.speed = info.speed;
              task.percent = info.percent;
              onProgress && onProgress(info);
              emitListUpdate();
          };

          // 异步获取 filesize
          util_1.getFileSize(api, params, function (err, size) {
              // 开始处理上传
              if (err) { // 如果获取大小出错，不加入队列
                  callback(err);
                  return;
              }
              // 获取完文件大小再把任务加入队列
              tasks[id] = task;
              queue.push(task);
              task.size = size;
              !ignoreAddEvent && emitListUpdate();
              startNextTask();
              clearQueue();
          });
          return id;
      };
      cos._isRunningTask = function (id) {
          var task = tasks[id];
          return !!(task && (task.state === 'checking' || task.state === 'uploading'));
      };
      cos.getTaskList = function () {
          return util_1.map(queue, formatTask);
      };
      cos.cancelTask = function (id) {
          killTask(id, 'canceled');
      };
      cos.pauseTask = function (id) {
          killTask(id, 'paused');
      };
      cos.restartTask = function (id) {
          var task = tasks[id];
          if (task && (task.state === 'paused' || task.state === 'error')) {
              task.state = 'waiting';
              emitListUpdate();
              nextUploadIndex = Math.min(nextUploadIndex, task.index);
              startNextTask();
          }
      };
      cos.isUploadRunning = function () {
          return uploadingFileCount || nextUploadIndex < queue.length;
      };

  };

  var transferToTaskMethod_1 = transferToTaskMethod;
  var init$2 = initTask;

  var task = {
  	transferToTaskMethod: transferToTaskMethod_1,
  	init: init$2
  };

  var $ = (function () {
      var deletedIds = [];

      var slice = deletedIds.slice;

      var concat = deletedIds.concat;

      var push = deletedIds.push;

      var indexOf = deletedIds.indexOf;

      var class2type = {};

      var toString = class2type.toString;

      var hasOwn = class2type.hasOwnProperty;

      var support = {};


      var
          version = "1.11.1 -css,-css/addGetHookIf,-css/curCSS,-css/defaultDisplay,-css/hiddenVisibleSelectors,-css/support,-css/swap,-css/var/cssExpand,-css/var/isHidden,-css/var/rmargin,-css/var/rnumnonpx,-effects,-effects/Tween,-effects/animatedSelector,-effects/support,-dimensions,-offset,-deprecated,-event-alias,-wrap",

          // Define a local copy of jQuery
          jQuery = function (selector, context) {
              // The jQuery object is actually just the init constructor 'enhanced'
              // Need init if jQuery is called (just allow error to be thrown if not included)
              return new jQuery.fn.init(selector, context);
          },

          // Support: Android<4.1, IE<9
          // Make sure we trim BOM and NBSP
          rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

          // Matches dashed string for camelizing
          rmsPrefix = /^-ms-/,
          rdashAlpha = /-([\da-z])/gi,

          // Used by jQuery.camelCase as callback to replace()
          fcamelCase = function (all, letter) {
              return letter.toUpperCase();
          };

      jQuery.fn = jQuery.prototype = {
          // The current version of jQuery being used
          jquery: version,

          constructor: jQuery,

          // Start with an empty selector
          selector: "",

          // The default length of a jQuery object is 0
          length: 0,

          toArray: function () {
              return slice.call(this);
          },

          // Get the Nth element in the matched element set OR
          // Get the whole matched element set as a clean array
          get: function (num) {
              return num != null ?

                  // Return just the one element from the set
                  ( num < 0 ? this[num + this.length] : this[num] ) :

                  // Return all the elements in a clean array
                  slice.call(this);
          },

          // Take an array of elements and push it onto the stack
          // (returning the new matched element set)
          pushStack: function (elems) {

              // Build a new jQuery matched element set
              var ret = jQuery.merge(this.constructor(), elems);

              // Add the old object onto the stack (as a reference)
              ret.prevObject = this;
              ret.context = this.context;

              // Return the newly-formed element set
              return ret;
          },

          // Execute a callback for every element in the matched set.
          // (You can seed the arguments with an array of args, but this is
          // only used internally.)
          each: function (callback, args) {
              return jQuery.each(this, callback, args);
          },

          map: function (callback) {
              return this.pushStack(jQuery.map(this, function (elem, i) {
                  return callback.call(elem, i, elem);
              }));
          },

          slice: function () {
              return this.pushStack(slice.apply(this, arguments));
          },

          first: function () {
              return this.eq(0);
          },

          last: function () {
              return this.eq(-1);
          },

          eq: function (i) {
              var len = this.length,
                  j = +i + ( i < 0 ? len : 0 );
              return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
          },

          end: function () {
              return this.prevObject || this.constructor(null);
          },

          // For internal use only.
          // Behaves like an Array's method, not like a jQuery method.
          push: push,
          sort: deletedIds.sort,
          splice: deletedIds.splice
      };

      jQuery.extend = jQuery.fn.extend = function () {
          var src, copyIsArray, copy, name, options, clone,
              target = arguments[0] || {},
              i = 1,
              length = arguments.length,
              deep = false;

          // Handle a deep copy situation
          if (typeof target === "boolean") {
              deep = target;

              // skip the boolean and the target
              target = arguments[i] || {};
              i++;
          }

          // Handle case when target is a string or something (possible in deep copy)
          if (typeof target !== "object" && !jQuery.isFunction(target)) {
              target = {};
          }

          // extend jQuery itself if only one argument is passed
          if (i === length) {
              target = this;
              i--;
          }

          for (; i < length; i++) {
              // Only deal with non-null/undefined values
              if ((options = arguments[i]) != null) {
                  // Extend the base object
                  for (name in options) {
                      src = target[name];
                      copy = options[name];

                      // Prevent never-ending loop
                      if (target === copy) {
                          continue;
                      }

                      // Recurse if we're merging plain objects or arrays
                      if (deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) )) {
                          if (copyIsArray) {
                              copyIsArray = false;
                              clone = src && jQuery.isArray(src) ? src : [];

                          } else {
                              clone = src && jQuery.isPlainObject(src) ? src : {};
                          }

                          // Never move original objects, clone them
                          target[name] = jQuery.extend(deep, clone, copy);

                          // Don't bring in undefined values
                      } else if (copy !== undefined) {
                          target[name] = copy;
                      }
                  }
              }
          }

          // Return the modified object
          return target;
      };

      jQuery.extend({
          // Unique for each copy of jQuery on the page
          expando: "jQuery" + ( version + Math.random() ).replace(/\D/g, ""),

          // Assume jQuery is ready without the ready module
          isReady: true,

          error: function (msg) {
              throw new Error(msg);
          },

          noop: function () {
          },

          // See test/unit/core.js for details concerning isFunction.
          // Since version 1.3, DOM methods and functions like alert
          // aren't supported. They return false on IE (#2968).
          isFunction: function (obj) {
              return jQuery.type(obj) === "function";
          },

          isArray: Array.isArray || function (obj) {
              return jQuery.type(obj) === "array";
          },

          isWindow: function (obj) {
              /* jshint eqeqeq: false */
              return obj != null && obj == obj.window;
          },

          isNumeric: function (obj) {
              // parseFloat NaNs numeric-cast false positives (null|true|false|"")
              // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
              // subtraction forces infinities to NaN
              return !jQuery.isArray(obj) && obj - parseFloat(obj) >= 0;
          },

          isEmptyObject: function (obj) {
              var name;
              for (name in obj) {
                  return false;
              }
              return true;
          },

          isPlainObject: function (obj) {
              var key;

              // Must be an Object.
              // Because of IE, we also have to check the presence of the constructor property.
              // Make sure that DOM nodes and window objects don't pass through, as well
              if (!obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
                  return false;
              }

              try {
                  // Not own constructor property must be Object
                  if (obj.constructor &&
                      !hasOwn.call(obj, "constructor") &&
                      !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
                      return false;
                  }
              } catch (e) {
                  // IE8,9 Will throw exceptions on certain host objects #9897
                  return false;
              }

              // Support: IE<9
              // Handle iteration over inherited properties before own properties.
              if (support.ownLast) {
                  for (key in obj) {
                      return hasOwn.call(obj, key);
                  }
              }

              // Own properties are enumerated firstly, so to speed up,
              // if last one is own, then all properties are own.
              for (key in obj) {
              }

              return key === undefined || hasOwn.call(obj, key);
          },

          type: function (obj) {
              if (obj == null) {
                  return obj + "";
              }
              return typeof obj === "object" || typeof obj === "function" ?
                  class2type[toString.call(obj)] || "object" :
                  typeof obj;
          },

          // Evaluates a script in a global context
          // Workarounds based on findings by Jim Driscoll
          // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
          globalEval: function (data) {
              if (data && jQuery.trim(data)) {
                  // We use execScript on Internet Explorer
                  // We use an anonymous function so that context is window
                  // rather than jQuery in Firefox
                  ( window.execScript || function (data) {
                      window["eval"].call(window, data);
                  } )(data);
              }
          },

          // Convert dashed to camelCase; used by the css and data modules
          // Microsoft forgot to hump their vendor prefix (#9572)
          camelCase: function (string) {
              return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
          },

          nodeName: function (elem, name) {
              return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
          },

          // args is for internal usage only
          each: function (obj, callback, args) {
              var value,
                  i = 0,
                  length = obj.length,
                  isArray = isArraylike(obj);

              if (args) {
                  if (isArray) {
                      for (; i < length; i++) {
                          value = callback.apply(obj[i], args);

                          if (value === false) {
                              break;
                          }
                      }
                  } else {
                      for (i in obj) {
                          value = callback.apply(obj[i], args);

                          if (value === false) {
                              break;
                          }
                      }
                  }

                  // A special, fast, case for the most common use of each
              } else {
                  if (isArray) {
                      for (; i < length; i++) {
                          value = callback.call(obj[i], i, obj[i]);

                          if (value === false) {
                              break;
                          }
                      }
                  } else {
                      for (i in obj) {
                          value = callback.call(obj[i], i, obj[i]);

                          if (value === false) {
                              break;
                          }
                      }
                  }
              }

              return obj;
          },

          // Support: Android<4.1, IE<9
          trim: function (text) {
              return text == null ?
                  "" :
                  ( text + "" ).replace(rtrim, "");
          },

          // results is for internal usage only
          makeArray: function (arr, results) {
              var ret = results || [];

              if (arr != null) {
                  if (isArraylike(Object(arr))) {
                      jQuery.merge(ret,
                          typeof arr === "string" ?
                              [arr] : arr
                      );
                  } else {
                      push.call(ret, arr);
                  }
              }

              return ret;
          },

          inArray: function (elem, arr, i) {
              var len;

              if (arr) {
                  if (indexOf) {
                      return indexOf.call(arr, elem, i);
                  }

                  len = arr.length;
                  i = i ? i < 0 ? Math.max(0, len + i) : i : 0;

                  for (; i < len; i++) {
                      // Skip accessing in sparse arrays
                      if (i in arr && arr[i] === elem) {
                          return i;
                      }
                  }
              }

              return -1;
          },

          merge: function (first, second) {
              var len = +second.length,
                  j = 0,
                  i = first.length;

              while (j < len) {
                  first[i++] = second[j++];
              }

              // Support: IE<9
              // Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
              if (len !== len) {
                  while (second[j] !== undefined) {
                      first[i++] = second[j++];
                  }
              }

              first.length = i;

              return first;
          },

          grep: function (elems, callback, invert) {
              var callbackInverse,
                  matches = [],
                  i = 0,
                  length = elems.length,
                  callbackExpect = !invert;

              // Go through the array, only saving the items
              // that pass the validator function
              for (; i < length; i++) {
                  callbackInverse = !callback(elems[i], i);
                  if (callbackInverse !== callbackExpect) {
                      matches.push(elems[i]);
                  }
              }

              return matches;
          },

          // arg is for internal usage only
          map: function (elems, callback, arg) {
              var value,
                  i = 0,
                  length = elems.length,
                  isArray = isArraylike(elems),
                  ret = [];

              // Go through the array, translating each of the items to their new values
              if (isArray) {
                  for (; i < length; i++) {
                      value = callback(elems[i], i, arg);

                      if (value != null) {
                          ret.push(value);
                      }
                  }

                  // Go through every key on the object,
              } else {
                  for (i in elems) {
                      value = callback(elems[i], i, arg);

                      if (value != null) {
                          ret.push(value);
                      }
                  }
              }

              // Flatten any nested arrays
              return concat.apply([], ret);
          },

          // A global GUID counter for objects
          guid: 1,

          // Bind a function to a context, optionally partially applying any
          // arguments.
          proxy: function (fn, context) {
              var args, proxy, tmp;

              if (typeof context === "string") {
                  tmp = fn[context];
                  context = fn;
                  fn = tmp;
              }

              // Quick check to determine if target is callable, in the spec
              // this throws a TypeError, but we will just return undefined.
              if (!jQuery.isFunction(fn)) {
                  return undefined;
              }

              // Simulated bind
              args = slice.call(arguments, 2);
              proxy = function () {
                  return fn.apply(context || this, args.concat(slice.call(arguments)));
              };

              // Set the guid of unique handler to the same of original handler, so it can be removed
              proxy.guid = fn.guid = fn.guid || jQuery.guid++;

              return proxy;
          },

          now: function () {
              return +( new Date() );
          },

          // jQuery.support is not used in Core but other projects attach their
          // properties to it so it needs to exist.
          support: support
      });

  // Populate the class2type map
      jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
          class2type["[object " + name + "]"] = name.toLowerCase();
      });

      function isArraylike(obj) {
          var length = obj.length,
              type = jQuery.type(obj);

          if (type === "function" || jQuery.isWindow(obj)) {
              return false;
          }

          if (obj.nodeType === 1 && length) {
              return true;
          }

          return type === "array" || length === 0 ||
              typeof length === "number" && length > 0 && ( length - 1 ) in obj;
      }


  // Initialize a jQuery object


  // A central reference to the root jQuery(document)
      var rootjQuery,

          // Use the correct document accordingly with window argument (sandbox)
          document = window.document,

          // A simple way to check for HTML strings
          // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
          // Strict HTML recognition (#11290: must start with <)
          rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

          init = jQuery.fn.init = function (selector, context) {
              var match, elem;

              // HANDLE: $(""), $(null), $(undefined), $(false)
              if (!selector) {
                  return this;
              }

              // Handle HTML strings
              if (typeof selector === "string") {
                  if (selector.charAt(0) === "<" && selector.charAt(selector.length - 1) === ">" && selector.length >= 3) {
                      // Assume that strings that start and end with <> are HTML and skip the regex check
                      match = [null, selector, null];

                  } else {
                      match = rquickExpr.exec(selector);
                  }

                  // Match html or make sure no context is specified for #id
                  if (match && (match[1] || !context)) {

                      // HANDLE: $(html) -> $(array)
                      if (match[1]) {
                          context = context instanceof jQuery ? context[0] : context;

                          // scripts is true for back-compat
                          // Intentionally let the error be thrown if parseHTML is not present
                          jQuery.merge(this, jQuery.parseHTML(
                              match[1],
                              context && context.nodeType ? context.ownerDocument || context : document,
                              true
                          ));

                          // HANDLE: $(html, props)
                          if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
                              for (match in context) {
                                  // Properties of context are called as methods if possible
                                  if (jQuery.isFunction(this[match])) {
                                      this[match](context[match]);

                                      // ...and otherwise set as attributes
                                  } else {
                                      this.attr(match, context[match]);
                                  }
                              }
                          }

                          return this;

                          // HANDLE: $(#id)
                      } else {
                          elem = document.getElementById(match[2]);

                          // Check parentNode to catch when Blackberry 4.6 returns
                          // nodes that are no longer in the document #6963
                          if (elem && elem.parentNode) {
                              // Handle the case where IE and Opera return items
                              // by name instead of ID
                              if (elem.id !== match[2]) {
                                  return rootjQuery.find(selector);
                              }

                              // Otherwise, we inject the element directly into the jQuery object
                              this.length = 1;
                              this[0] = elem;
                          }

                          this.context = document;
                          this.selector = selector;
                          return this;
                      }

                      // HANDLE: $(expr, $(...))
                  } else if (!context || context.jquery) {
                      return ( context || rootjQuery ).find(selector);

                      // HANDLE: $(expr, context)
                      // (which is just equivalent to: $(context).find(expr)
                  } else {
                      return this.constructor(context).find(selector);
                  }

                  // HANDLE: $(DOMElement)
              } else if (selector.nodeType) {
                  this.context = this[0] = selector;
                  this.length = 1;
                  return this;

                  // HANDLE: $(function)
                  // Shortcut for document ready
              } else if (jQuery.isFunction(selector)) {
                  return typeof rootjQuery.ready !== "undefined" ?
                      rootjQuery.ready(selector) :
                      // Execute immediately if ready is not present
                      selector(jQuery);
              }

              if (selector.selector !== undefined) {
                  this.selector = selector.selector;
                  this.context = selector.context;
              }

              return jQuery.makeArray(selector, this);
          };

  // Give the init function the jQuery prototype for later instantiation
      init.prototype = jQuery.fn;

  // Initialize central reference
      rootjQuery = jQuery(document);


      var rnotwhite = (/\S+/g);

  // String to Object options format cache
      var optionsCache = {};

  // Convert String-formatted options into Object-formatted ones and store in cache
      function createOptions(options) {
          var object = optionsCache[options] = {};
          jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
              object[flag] = true;
          });
          return object;
      }

      /*
       * Create a callback list using the following parameters:
       *
       *	options: an optional list of space-separated options that will change how
       *			the callback list behaves or a more traditional option object
       *
       * By default a callback list will act like an event callback list and can be
       * "fired" multiple times.
       *
       * Possible options:
       *
       *	once:			will ensure the callback list can only be fired once (like a Deferred)
       *
       *	memory:			will keep track of previous values and will call any callback added
       *					after the list has been fired right away with the latest "memorized"
       *					values (like a Deferred)
       *
       *	unique:			will ensure a callback can only be added once (no duplicate in the list)
       *
       *	stopOnFalse:	interrupt callings when a callback returns false
       *
       */
      jQuery.Callbacks = function (options) {

          // Convert options from String-formatted to Object-formatted if needed
          // (we check in cache first)
          options = typeof options === "string" ?
              ( optionsCache[options] || createOptions(options) ) :
              jQuery.extend({}, options);

          var // Flag to know if list is currently firing
              firing,
              // Last fire value (for non-forgettable lists)
              memory,
              // Flag to know if list was already fired
              fired,
              // End of the loop when firing
              firingLength,
              // Index of currently firing callback (modified by remove if needed)
              firingIndex,
              // First callback to fire (used internally by add and fireWith)
              firingStart,
              // Actual callback list
              list = [],
              // Stack of fire calls for repeatable lists
              stack = !options.once && [],
              // Fire callbacks
              fire = function (data) {
                  memory = options.memory && data;
                  fired = true;
                  firingIndex = firingStart || 0;
                  firingStart = 0;
                  firingLength = list.length;
                  firing = true;
                  for (; list && firingIndex < firingLength; firingIndex++) {
                      if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
                          memory = false; // To prevent further calls using add
                          break;
                      }
                  }
                  firing = false;
                  if (list) {
                      if (stack) {
                          if (stack.length) {
                              fire(stack.shift());
                          }
                      } else if (memory) {
                          list = [];
                      } else {
                          self.disable();
                      }
                  }
              },
              // Actual Callbacks object
              self = {
                  // Add a callback or a collection of callbacks to the list
                  add: function () {
                      if (list) {
                          // First, we save the current length
                          var start = list.length;
                          (function add(args) {
                              jQuery.each(args, function (_, arg) {
                                  var type = jQuery.type(arg);
                                  if (type === "function") {
                                      if (!options.unique || !self.has(arg)) {
                                          list.push(arg);
                                      }
                                  } else if (arg && arg.length && type !== "string") {
                                      // Inspect recursively
                                      add(arg);
                                  }
                              });
                          })(arguments);
                          // Do we need to add the callbacks to the
                          // current firing batch?
                          if (firing) {
                              firingLength = list.length;
                              // With memory, if we're not firing then
                              // we should call right away
                          } else if (memory) {
                              firingStart = start;
                              fire(memory);
                          }
                      }
                      return this;
                  },
                  // Remove a callback from the list
                  remove: function () {
                      if (list) {
                          jQuery.each(arguments, function (_, arg) {
                              var index;
                              while (( index = jQuery.inArray(arg, list, index) ) > -1) {
                                  list.splice(index, 1);
                                  // Handle firing indexes
                                  if (firing) {
                                      if (index <= firingLength) {
                                          firingLength--;
                                      }
                                      if (index <= firingIndex) {
                                          firingIndex--;
                                      }
                                  }
                              }
                          });
                      }
                      return this;
                  },
                  // Check if a given callback is in the list.
                  // If no argument is given, return whether or not list has callbacks attached.
                  has: function (fn) {
                      return fn ? jQuery.inArray(fn, list) > -1 : !!( list && list.length );
                  },
                  // Remove all callbacks from the list
                  empty: function () {
                      list = [];
                      firingLength = 0;
                      return this;
                  },
                  // Have the list do nothing anymore
                  disable: function () {
                      list = stack = memory = undefined;
                      return this;
                  },
                  // Is it disabled?
                  disabled: function () {
                      return !list;
                  },
                  // Lock the list in its current state
                  lock: function () {
                      stack = undefined;
                      if (!memory) {
                          self.disable();
                      }
                      return this;
                  },
                  // Is it locked?
                  locked: function () {
                      return !stack;
                  },
                  // Call all callbacks with the given context and arguments
                  fireWith: function (context, args) {
                      if (list && ( !fired || stack )) {
                          args = args || [];
                          args = [context, args.slice ? args.slice() : args];
                          if (firing) {
                              stack.push(args);
                          } else {
                              fire(args);
                          }
                      }
                      return this;
                  },
                  // Call all the callbacks with the given arguments
                  fire: function () {
                      self.fireWith(this, arguments);
                      return this;
                  },
                  // To know if the callbacks have already been called at least once
                  fired: function () {
                      return !!fired;
                  }
              };

          return self;
      };


      jQuery.extend({

          Deferred: function (func) {
              var tuples = [
                      // action, add listener, listener list, final state
                      ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
                      ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"],
                      ["notify", "progress", jQuery.Callbacks("memory")]
                  ],
                  state = "pending",
                  promise = {
                      state: function () {
                          return state;
                      },
                      always: function () {
                          deferred.done(arguments).fail(arguments);
                          return this;
                      },
                      then: function (/* fnDone, fnFail, fnProgress */) {
                          var fns = arguments;
                          return jQuery.Deferred(function (newDefer) {
                              jQuery.each(tuples, function (i, tuple) {
                                  var fn = jQuery.isFunction(fns[i]) && fns[i];
                                  // deferred[ done | fail | progress ] for forwarding actions to newDefer
                                  deferred[tuple[1]](function () {
                                      var returned = fn && fn.apply(this, arguments);
                                      if (returned && jQuery.isFunction(returned.promise)) {
                                          returned.promise()
                                              .done(newDefer.resolve)
                                              .fail(newDefer.reject)
                                              .progress(newDefer.notify);
                                      } else {
                                          newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                                      }
                                  });
                              });
                              fns = null;
                          }).promise();
                      },
                      // Get a promise for this deferred
                      // If obj is provided, the promise aspect is added to the object
                      promise: function (obj) {
                          return obj != null ? jQuery.extend(obj, promise) : promise;
                      }
                  },
                  deferred = {};

              // Keep pipe for back-compat
              promise.pipe = promise.then;

              // Add list-specific methods
              jQuery.each(tuples, function (i, tuple) {
                  var list = tuple[2],
                      stateString = tuple[3];

                  // promise[ done | fail | progress ] = list.add
                  promise[tuple[1]] = list.add;

                  // Handle state
                  if (stateString) {
                      list.add(function () {
                          // state = [ resolved | rejected ]
                          state = stateString;

                          // [ reject_list | resolve_list ].disable; progress_list.lock
                      }, tuples[i ^ 1][2].disable, tuples[2][2].lock);
                  }

                  // deferred[ resolve | reject | notify ]
                  deferred[tuple[0]] = function () {
                      deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
                      return this;
                  };
                  deferred[tuple[0] + "With"] = list.fireWith;
              });

              // Make the deferred a promise
              promise.promise(deferred);

              // Call given func if any
              if (func) {
                  func.call(deferred, deferred);
              }

              // All done!
              return deferred;
          },

          // Deferred helper
          when: function (subordinate /* , ..., subordinateN */) {
              var i = 0,
                  resolveValues = slice.call(arguments),
                  length = resolveValues.length,

                  // the count of uncompleted subordinates
                  remaining = length !== 1 || ( subordinate && jQuery.isFunction(subordinate.promise) ) ? length : 0,

                  // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
                  deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

                  // Update function for both resolve and progress values
                  updateFunc = function (i, contexts, values) {
                      return function (value) {
                          contexts[i] = this;
                          values[i] = arguments.length > 1 ? slice.call(arguments) : value;
                          if (values === progressValues) {
                              deferred.notifyWith(contexts, values);

                          } else if (!(--remaining)) {
                              deferred.resolveWith(contexts, values);
                          }
                      };
                  },

                  progressValues, progressContexts, resolveContexts;

              // add listeners to Deferred subordinates; treat others as resolved
              if (length > 1) {
                  progressValues = new Array(length);
                  progressContexts = new Array(length);
                  resolveContexts = new Array(length);
                  for (; i < length; i++) {
                      if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
                          resolveValues[i].promise()
                              .done(updateFunc(i, resolveContexts, resolveValues))
                              .fail(deferred.reject)
                              .progress(updateFunc(i, progressContexts, progressValues));
                      } else {
                          --remaining;
                      }
                  }
              }

              // if we're not waiting on anything, resolve the master
              if (!remaining) {
                  deferred.resolveWith(resolveContexts, resolveValues);
              }

              return deferred.promise();
          }
      });


  // The deferred used on DOM ready
      var readyList;

      jQuery.fn.ready = function (fn) {
          // Add the callback
          jQuery.ready.promise().done(fn);

          return this;
      };

      jQuery.extend({
          // Is the DOM ready to be used? Set to true once it occurs.
          isReady: false,

          // A counter to track how many items to wait for before
          // the ready event fires. See #6781
          readyWait: 1,

          // Hold (or release) the ready event
          holdReady: function (hold) {
              if (hold) {
                  jQuery.readyWait++;
              } else {
                  jQuery.ready(true);
              }
          },

          // Handle when the DOM is ready
          ready: function (wait) {

              // Abort if there are pending holds or we're already ready
              if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                  return;
              }

              // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
              if (!document.body) {
                  return setTimeout(jQuery.ready);
              }

              // Remember that the DOM is ready
              jQuery.isReady = true;

              // If a normal DOM Ready event fired, decrement, and wait if need be
              if (wait !== true && --jQuery.readyWait > 0) {
                  return;
              }

              // If there are functions bound, to execute
              readyList.resolveWith(document, [jQuery]);

              // Trigger any bound ready events
              if (jQuery.fn.triggerHandler) {
                  jQuery(document).triggerHandler("ready");
                  jQuery(document).off("ready");
              }
          }
      });

      /**
       * Clean-up method for dom ready events
       */
      function detach() {
          if (document.addEventListener) {
              document.removeEventListener("DOMContentLoaded", completed, false);
              window.removeEventListener("load", completed, false);

          } else {
              document.detachEvent("onreadystatechange", completed);
              window.detachEvent("onload", completed);
          }
      }

      /**
       * The ready event handler and self cleanup method
       */
      function completed() {
          // readyState === "complete" is good enough for us to call the dom ready in oldIE
          if (document.addEventListener || event.type === "load" || document.readyState === "complete") {
              detach();
              jQuery.ready();
          }
      }

      jQuery.ready.promise = function (obj) {
          if (!readyList) {

              readyList = jQuery.Deferred();

              // Catch cases where $(document).ready() is called after the browser event has already occurred.
              // we once tried to use readyState "interactive" here, but it caused issues like the one
              // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
              if (document.readyState === "complete") {
                  // Handle it asynchronously to allow scripts the opportunity to delay ready
                  setTimeout(jQuery.ready);

                  // Standards-based browsers support DOMContentLoaded
              } else if (document.addEventListener) {
                  // Use the handy event callback
                  document.addEventListener("DOMContentLoaded", completed, false);

                  // A fallback to window.onload, that will always work
                  window.addEventListener("load", completed, false);

                  // If IE event model is used
              } else {
                  // Ensure firing before onload, maybe late but safe also for iframes
                  document.attachEvent("onreadystatechange", completed);

                  // A fallback to window.onload, that will always work
                  window.attachEvent("onload", completed);

                  // If IE and not a frame
                  // continually check to see if the document is ready
                  var top = false;

                  try {
                      top = window.frameElement == null && document.documentElement;
                  } catch (e) {
                  }

                  if (top && top.doScroll) {
                      (function doScrollCheck() {
                          if (!jQuery.isReady) {

                              try {
                                  // Use the trick by Diego Perini
                                  // http://javascript.nwbox.com/IEContentLoaded/
                                  top.doScroll("left");
                              } catch (e) {
                                  return setTimeout(doScrollCheck, 50);
                              }

                              // detach all dom ready events
                              detach();

                              // and execute any waiting functions
                              jQuery.ready();
                          }
                      })();
                  }
              }
          }
          return readyList.promise(obj);
      };


      var strundefined = typeof undefined;


  // Support: IE<9
  // Iteration over object's inherited properties before its own
      var i;
      for (i in jQuery(support)) {
          break;
      }
      support.ownLast = i !== "0";

  // Note: most support tests are defined in their respective modules.
  // false until the test is run
      support.inlineBlockNeedsLayout = false;


  // Execute ASAP in case we need to set body.style.zoom
      jQuery(function () {
          // Minified: var a,b,c,d
          var val, div, body, container;

          body = document.getElementsByTagName("body")[0];
          if (!body || !body.style) {
              // Return for frameset docs that don't have a body
              return;
          }

          // Setup
          div = document.createElement("div");
          container = document.createElement("div");
          container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
          body.appendChild(container).appendChild(div);

          if (typeof div.style.zoom !== strundefined) {
              // Support: IE<8
              // Check if natively block-level elements act like inline-block
              // elements when setting their display to 'inline' and giving
              // them layout
              div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

              support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
              if (val) {
                  // Prevent IE 6 from affecting layout for positioned elements #11048
                  // Prevent IE from shrinking the body in IE 7 mode #12869
                  // Support: IE<8
                  body.style.zoom = 1;
              }
          }

          body.removeChild(container);
      });


      (function () {
          var div = document.createElement("div");

          // Execute the test only if not already executed in another module.
          if (support.deleteExpando == null) {
              // Support: IE<9
              support.deleteExpando = true;
              try {
                  delete div.test;
              } catch (e) {
                  support.deleteExpando = false;
              }
          }

          // Null elements to avoid leaks in IE.
          div = null;
      })();


      /**
       * Determines whether an object can have data
       */
      jQuery.acceptData = function (elem) {
          var noData = jQuery.noData[(elem.nodeName + " ").toLowerCase()],
              nodeType = +elem.nodeType || 1;

          // Do not set data on non-element DOM nodes because it will not be cleared (#8335).
          return nodeType !== 1 && nodeType !== 9 ?
              false :

              // Nodes accept data unless otherwise specified; rejection can be conditional
              !noData || noData !== true && elem.getAttribute("classid") === noData;
      };


      var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          rmultiDash = /([A-Z])/g;

      function dataAttr(elem, key, data) {
          // If nothing was found internally, try to fetch any
          // data from the HTML5 data-* attribute
          if (data === undefined && elem.nodeType === 1) {

              var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

              data = elem.getAttribute(name);

              if (typeof data === "string") {
                  try {
                      data = data === "true" ? true :
                          data === "false" ? false :
                              data === "null" ? null :
                                  // Only convert to a number if it doesn't change the string
                                  +data + "" === data ? +data :
                                      rbrace.test(data) ? jQuery.parseJSON(data) :
                                          data;
                  } catch (e) {
                  }

                  // Make sure we set the data so it isn't changed later
                  jQuery.data(elem, key, data);

              } else {
                  data = undefined;
              }
          }

          return data;
      }

  // checks a cache object for emptiness
      function isEmptyDataObject(obj) {
          var name;
          for (name in obj) {

              // if the public data object is empty, the private is still empty
              if (name === "data" && jQuery.isEmptyObject(obj[name])) {
                  continue;
              }
              if (name !== "toJSON") {
                  return false;
              }
          }

          return true;
      }

      function internalData(elem, name, data, pvt /* Internal Use Only */) {
          if (!jQuery.acceptData(elem)) {
              return;
          }

          var ret, thisCache,
              internalKey = jQuery.expando,

              // We have to handle DOM nodes and JS objects differently because IE6-7
              // can't GC object references properly across the DOM-JS boundary
              isNode = elem.nodeType,

              // Only DOM nodes need the global jQuery cache; JS object data is
              // attached directly to the object so GC can occur automatically
              cache = isNode ? jQuery.cache : elem,

              // Only defining an ID for JS objects if its cache already exists allows
              // the code to shortcut on the same path as a DOM node with no cache
              id = isNode ? elem[internalKey] : elem[internalKey] && internalKey;

          // Avoid doing any more work than we need to when trying to get data on an
          // object that has no data at all
          if ((!id || !cache[id] || (!pvt && !cache[id].data)) && data === undefined && typeof name === "string") {
              return;
          }

          if (!id) {
              // Only DOM nodes need a new unique ID for each element since their data
              // ends up in the global cache
              if (isNode) {
                  id = elem[internalKey] = deletedIds.pop() || jQuery.guid++;
              } else {
                  id = internalKey;
              }
          }

          if (!cache[id]) {
              // Avoid exposing jQuery metadata on plain JS objects when the object
              // is serialized using JSON.stringify
              cache[id] = isNode ? {} : {toJSON: jQuery.noop};
          }

          // An object can be passed to jQuery.data instead of a key/value pair; this gets
          // shallow copied over onto the existing cache
          if (typeof name === "object" || typeof name === "function") {
              if (pvt) {
                  cache[id] = jQuery.extend(cache[id], name);
              } else {
                  cache[id].data = jQuery.extend(cache[id].data, name);
              }
          }

          thisCache = cache[id];

          // jQuery data() is stored in a separate object inside the object's internal data
          // cache in order to avoid key collisions between internal data and user-defined
          // data.
          if (!pvt) {
              if (!thisCache.data) {
                  thisCache.data = {};
              }

              thisCache = thisCache.data;
          }

          if (data !== undefined) {
              thisCache[jQuery.camelCase(name)] = data;
          }

          // Check for both converted-to-camel and non-converted data property names
          // If a data property was specified
          if (typeof name === "string") {

              // First Try to find as-is property data
              ret = thisCache[name];

              // Test for null|undefined property data
              if (ret == null) {

                  // Try to find the camelCased property
                  ret = thisCache[jQuery.camelCase(name)];
              }
          } else {
              ret = thisCache;
          }

          return ret;
      }

      function internalRemoveData(elem, name, pvt) {
          if (!jQuery.acceptData(elem)) {
              return;
          }

          var thisCache, i,
              isNode = elem.nodeType,

              // See jQuery.data for more information
              cache = isNode ? jQuery.cache : elem,
              id = isNode ? elem[jQuery.expando] : jQuery.expando;

          // If there is already no cache entry for this object, there is no
          // purpose in continuing
          if (!cache[id]) {
              return;
          }

          if (name) {

              thisCache = pvt ? cache[id] : cache[id].data;

              if (thisCache) {

                  // Support array or space separated string names for data keys
                  if (!jQuery.isArray(name)) {

                      // try the string as a key before any manipulation
                      if (name in thisCache) {
                          name = [name];
                      } else {

                          // split the camel cased version by spaces unless a key with the spaces exists
                          name = jQuery.camelCase(name);
                          if (name in thisCache) {
                              name = [name];
                          } else {
                              name = name.split(" ");
                          }
                      }
                  } else {
                      // If "name" is an array of keys...
                      // When data is initially created, via ("key", "val") signature,
                      // keys will be converted to camelCase.
                      // Since there is no way to tell _how_ a key was added, remove
                      // both plain key and camelCase key. #12786
                      // This will only penalize the array argument path.
                      name = name.concat(jQuery.map(name, jQuery.camelCase));
                  }

                  i = name.length;
                  while (i--) {
                      delete thisCache[name[i]];
                  }

                  // If there is no data left in the cache, we want to continue
                  // and let the cache object itself get destroyed
                  if (pvt ? !isEmptyDataObject(thisCache) : !jQuery.isEmptyObject(thisCache)) {
                      return;
                  }
              }
          }

          // See jQuery.data for more information
          if (!pvt) {
              delete cache[id].data;

              // Don't destroy the parent cache unless the internal data object
              // had been the only thing left in it
              if (!isEmptyDataObject(cache[id])) {
                  return;
              }
          }

          // Destroy the cache
          if (isNode) {
              jQuery.cleanData([elem], true);

              // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
              /* jshint eqeqeq: false */
          } else if (support.deleteExpando || cache != cache.window) {
              /* jshint eqeqeq: true */
              delete cache[id];

              // When all else fails, null
          } else {
              cache[id] = null;
          }
      }

      jQuery.extend({
          cache: {},

          // The following elements (space-suffixed to avoid Object.prototype collisions)
          // throw uncatchable exceptions if you attempt to set expando properties
          noData: {
              "applet ": true,
              "embed ": true,
              // ...but Flash objects (which have this classid) *can* handle expandos
              "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
          },

          hasData: function (elem) {
              elem = elem.nodeType ? jQuery.cache[elem[jQuery.expando]] : elem[jQuery.expando];
              return !!elem && !isEmptyDataObject(elem);
          },

          data: function (elem, name, data) {
              return internalData(elem, name, data);
          },

          removeData: function (elem, name) {
              return internalRemoveData(elem, name);
          },

          // For internal use only.
          _data: function (elem, name, data) {
              return internalData(elem, name, data, true);
          },

          _removeData: function (elem, name) {
              return internalRemoveData(elem, name, true);
          }
      });

      jQuery.fn.extend({
          data: function (key, value) {
              var i, name, data,
                  elem = this[0],
                  attrs = elem && elem.attributes;

              // Special expections of .data basically thwart jQuery.access,
              // so implement the relevant behavior ourselves

              // Gets all values
              if (key === undefined) {
                  if (this.length) {
                      data = jQuery.data(elem);

                      if (elem.nodeType === 1 && !jQuery._data(elem, "parsedAttrs")) {
                          i = attrs.length;
                          while (i--) {

                              // Support: IE11+
                              // The attrs elements can be null (#14894)
                              if (attrs[i]) {
                                  name = attrs[i].name;
                                  if (name.indexOf("data-") === 0) {
                                      name = jQuery.camelCase(name.slice(5));
                                      dataAttr(elem, name, data[name]);
                                  }
                              }
                          }
                          jQuery._data(elem, "parsedAttrs", true);
                      }
                  }

                  return data;
              }

              // Sets multiple values
              if (typeof key === "object") {
                  return this.each(function () {
                      jQuery.data(this, key);
                  });
              }

              return arguments.length > 1 ?

                  // Sets one value
                  this.each(function () {
                      jQuery.data(this, key, value);
                  }) :

                  // Gets one value
                  // Try to fetch any internally stored data first
                  elem ? dataAttr(elem, key, jQuery.data(elem, key)) : undefined;
          },

          removeData: function (key) {
              return this.each(function () {
                  jQuery.removeData(this, key);
              });
          }
      });


      jQuery.extend({
          queue: function (elem, type, data) {
              var queue;

              if (elem) {
                  type = ( type || "fx" ) + "queue";
                  queue = jQuery._data(elem, type);

                  // Speed up dequeue by getting out quickly if this is just a lookup
                  if (data) {
                      if (!queue || jQuery.isArray(data)) {
                          queue = jQuery._data(elem, type, jQuery.makeArray(data));
                      } else {
                          queue.push(data);
                      }
                  }
                  return queue || [];
              }
          },

          dequeue: function (elem, type) {
              type = type || "fx";

              var queue = jQuery.queue(elem, type),
                  startLength = queue.length,
                  fn = queue.shift(),
                  hooks = jQuery._queueHooks(elem, type),
                  next = function () {
                      jQuery.dequeue(elem, type);
                  };

              // If the fx queue is dequeued, always remove the progress sentinel
              if (fn === "inprogress") {
                  fn = queue.shift();
                  startLength--;
              }

              if (fn) {

                  // Add a progress sentinel to prevent the fx queue from being
                  // automatically dequeued
                  if (type === "fx") {
                      queue.unshift("inprogress");
                  }

                  // clear up the last queue stop function
                  delete hooks.stop;
                  fn.call(elem, next, hooks);
              }

              if (!startLength && hooks) {
                  hooks.empty.fire();
              }
          },

          // not intended for public consumption - generates a queueHooks object, or returns the current one
          _queueHooks: function (elem, type) {
              var key = type + "queueHooks";
              return jQuery._data(elem, key) || jQuery._data(elem, key, {
                      empty: jQuery.Callbacks("once memory").add(function () {
                          jQuery._removeData(elem, type + "queue");
                          jQuery._removeData(elem, key);
                      })
                  });
          }
      });

      jQuery.fn.extend({
          queue: function (type, data) {
              var setter = 2;

              if (typeof type !== "string") {
                  data = type;
                  type = "fx";
                  setter--;
              }

              if (arguments.length < setter) {
                  return jQuery.queue(this[0], type);
              }

              return data === undefined ?
                  this :
                  this.each(function () {
                      var queue = jQuery.queue(this, type, data);

                      // ensure a hooks for this queue
                      jQuery._queueHooks(this, type);

                      if (type === "fx" && queue[0] !== "inprogress") {
                          jQuery.dequeue(this, type);
                      }
                  });
          },
          dequeue: function (type) {
              return this.each(function () {
                  jQuery.dequeue(this, type);
              });
          },
          clearQueue: function (type) {
              return this.queue(type || "fx", []);
          },
          // Get a promise resolved when queues of a certain type
          // are emptied (fx is the type by default)
          promise: function (type, obj) {
              var tmp,
                  count = 1,
                  defer = jQuery.Deferred(),
                  elements = this,
                  i = this.length,
                  resolve = function () {
                      if (!( --count )) {
                          defer.resolveWith(elements, [elements]);
                      }
                  };

              if (typeof type !== "string") {
                  obj = type;
                  type = undefined;
              }
              type = type || "fx";

              while (i--) {
                  tmp = jQuery._data(elements[i], type + "queueHooks");
                  if (tmp && tmp.empty) {
                      count++;
                      tmp.empty.add(resolve);
                  }
              }
              resolve();
              return defer.promise(obj);
          }
      });


      /*
       * Helper functions for managing events -- not part of the public interface.
       * Props to Dean Edwards' addEvent library for many of the ideas.
       */
      jQuery.event = {

          global: {},

          add: function (elem, types, handler, data, selector) {
              var tmp, events, t, handleObjIn,
                  special, eventHandle, handleObj,
                  handlers, type, namespaces, origType,
                  elemData = jQuery._data(elem);

              // Don't attach events to noData or text/comment nodes (but allow plain objects)
              if (!elemData) {
                  return;
              }

              // Caller can pass in an object of custom data in lieu of the handler
              if (handler.handler) {
                  handleObjIn = handler;
                  handler = handleObjIn.handler;
                  selector = handleObjIn.selector;
              }

              // Make sure that the handler has a unique ID, used to find/remove it later
              if (!handler.guid) {
                  handler.guid = jQuery.guid++;
              }

              // Init the element's event structure and main handler, if this is the first
              if (!(events = elemData.events)) {
                  events = elemData.events = {};
              }
              if (!(eventHandle = elemData.handle)) {
                  eventHandle = elemData.handle = function (e) {
                      // Discard the second event of a jQuery.event.trigger() and
                      // when an event is called after a page has unloaded
                      return typeof jQuery !== strundefined && (!e || jQuery.event.triggered !== e.type) ?
                          jQuery.event.dispatch.apply(eventHandle.elem, arguments) :
                          undefined;
                  };
                  // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
                  eventHandle.elem = elem;
              }

              // Handle multiple events separated by a space
              types = ( types || "" ).match(rnotwhite) || [""];
              t = types.length;
              while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || [];
                  type = origType = tmp[1];
                  namespaces = ( tmp[2] || "" ).split(".").sort();

                  // There *must* be a type, no attaching namespace-only handlers
                  if (!type) {
                      continue;
                  }

                  // If event changes its type, use the special event handlers for the changed type
                  special = jQuery.event.special[type] || {};

                  // If selector defined, determine special event api type, otherwise given type
                  type = ( selector ? special.delegateType : special.bindType ) || type;

                  // Update special based on newly reset type
                  special = jQuery.event.special[type] || {};

                  // handleObj is passed to all event handlers
                  handleObj = jQuery.extend({
                      type: type,
                      origType: origType,
                      data: data,
                      handler: handler,
                      guid: handler.guid,
                      selector: selector,
                      needsContext: selector && jQuery.expr.match.needsContext.test(selector),
                      namespace: namespaces.join(".")
                  }, handleObjIn);

                  // Init the event handler queue if we're the first
                  if (!(handlers = events[type])) {
                      handlers = events[type] = [];
                      handlers.delegateCount = 0;

                      // Only use addEventListener/attachEvent if the special events handler returns false
                      if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
                          // Bind the global event handler to the element
                          if (elem.addEventListener) {
                              elem.addEventListener(type, eventHandle, false);

                          } else if (elem.attachEvent) {
                              elem.attachEvent("on" + type, eventHandle);
                          }
                      }
                  }

                  if (special.add) {
                      special.add.call(elem, handleObj);

                      if (!handleObj.handler.guid) {
                          handleObj.handler.guid = handler.guid;
                      }
                  }

                  // Add to the element's handler list, delegates in front
                  if (selector) {
                      handlers.splice(handlers.delegateCount++, 0, handleObj);
                  } else {
                      handlers.push(handleObj);
                  }

                  // Keep track of which events have ever been used, for event optimization
                  jQuery.event.global[type] = true;
              }

              // Nullify elem to prevent memory leaks in IE
              elem = null;
          },

          // Detach an event or set of events from an element
          remove: function (elem, types, handler, selector, mappedTypes) {
              var j, handleObj, tmp,
                  origCount, t, events,
                  special, handlers, type,
                  namespaces, origType,
                  elemData = jQuery.hasData(elem) && jQuery._data(elem);

              if (!elemData || !(events = elemData.events)) {
                  return;
              }

              // Once for each type.namespace in types; type may be omitted
              types = ( types || "" ).match(rnotwhite) || [""];
              t = types.length;
              while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || [];
                  type = origType = tmp[1];
                  namespaces = ( tmp[2] || "" ).split(".").sort();

                  // Unbind all events (on this namespace, if provided) for the element
                  if (!type) {
                      for (type in events) {
                          jQuery.event.remove(elem, type + types[t], handler, selector, true);
                      }
                      continue;
                  }

                  special = jQuery.event.special[type] || {};
                  type = ( selector ? special.delegateType : special.bindType ) || type;
                  handlers = events[type] || [];
                  tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

                  // Remove matching events
                  origCount = j = handlers.length;
                  while (j--) {
                      handleObj = handlers[j];

                      if (( mappedTypes || origType === handleObj.origType ) &&
                          ( !handler || handler.guid === handleObj.guid ) &&
                          ( !tmp || tmp.test(handleObj.namespace) ) &&
                          ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector )) {
                          handlers.splice(j, 1);

                          if (handleObj.selector) {
                              handlers.delegateCount--;
                          }
                          if (special.remove) {
                              special.remove.call(elem, handleObj);
                          }
                      }
                  }

                  // Remove generic event handler if we removed something and no more handlers exist
                  // (avoids potential for endless recursion during removal of special event handlers)
                  if (origCount && !handlers.length) {
                      if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
                          jQuery.removeEvent(elem, type, elemData.handle);
                      }

                      delete events[type];
                  }
              }

              // Remove the expando if it's no longer used
              if (jQuery.isEmptyObject(events)) {
                  delete elemData.handle;

                  // removeData also checks for emptiness and clears the expando if empty
                  // so use it instead of delete
                  jQuery._removeData(elem, "events");
              }
          },

          trigger: function (event, data, elem, onlyHandlers) {
              var handle, ontype, cur,
                  bubbleType, special, tmp, i,
                  eventPath = [elem || document],
                  type = hasOwn.call(event, "type") ? event.type : event,
                  namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

              cur = tmp = elem = elem || document;

              // Don't do events on text and comment nodes
              if (elem.nodeType === 3 || elem.nodeType === 8) {
                  return;
              }

              // focus/blur morphs to focusin/out; ensure we're not firing them right now
              if (rfocusMorph.test(type + jQuery.event.triggered)) {
                  return;
              }

              if (type.indexOf(".") >= 0) {
                  // Namespaced trigger; create a regexp to match event type in handle()
                  namespaces = type.split(".");
                  type = namespaces.shift();
                  namespaces.sort();
              }
              ontype = type.indexOf(":") < 0 && "on" + type;

              // Caller can pass in a jQuery.Event object, Object, or just an event type string
              event = event[jQuery.expando] ?
                  event :
                  new jQuery.Event(type, typeof event === "object" && event);

              // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
              event.isTrigger = onlyHandlers ? 2 : 3;
              event.namespace = namespaces.join(".");
              event.namespace_re = event.namespace ?
                  new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") :
                  null;

              // Clean up the event in case it is being reused
              event.result = undefined;
              if (!event.target) {
                  event.target = elem;
              }

              // Clone any incoming data and prepend the event, creating the handler arg list
              data = data == null ?
                  [event] :
                  jQuery.makeArray(data, [event]);

              // Allow special events to draw outside the lines
              special = jQuery.event.special[type] || {};
              if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
                  return;
              }

              // Determine event propagation path in advance, per W3C events spec (#9951)
              // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
              if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

                  bubbleType = special.delegateType || type;
                  if (!rfocusMorph.test(bubbleType + type)) {
                      cur = cur.parentNode;
                  }
                  for (; cur; cur = cur.parentNode) {
                      eventPath.push(cur);
                      tmp = cur;
                  }

                  // Only add window if we got to document (e.g., not plain obj or detached DOM)
                  if (tmp === (elem.ownerDocument || document)) {
                      eventPath.push(tmp.defaultView || tmp.parentWindow || window);
                  }
              }

              // Fire handlers on the event path
              i = 0;
              while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

                  event.type = i > 1 ?
                      bubbleType :
                      special.bindType || type;

                  // jQuery handler
                  handle = ( jQuery._data(cur, "events") || {} )[event.type] && jQuery._data(cur, "handle");
                  if (handle) {
                      handle.apply(cur, data);
                  }

                  // Native handler
                  handle = ontype && cur[ontype];
                  if (handle && handle.apply && jQuery.acceptData(cur)) {
                      event.result = handle.apply(cur, data);
                      if (event.result === false) {
                          event.preventDefault();
                      }
                  }
              }
              event.type = type;

              // If nobody prevented the default action, do it now
              if (!onlyHandlers && !event.isDefaultPrevented()) {

                  if ((!special._default || special._default.apply(eventPath.pop(), data) === false) &&
                      jQuery.acceptData(elem)) {

                      // Call a native DOM method on the target with the same name name as the event.
                      // Can't use an .isFunction() check here because IE6/7 fails that test.
                      // Don't do default actions on window, that's where global variables be (#6170)
                      if (ontype && elem[type] && !jQuery.isWindow(elem)) {

                          // Don't re-trigger an onFOO event when we call its FOO() method
                          tmp = elem[ontype];

                          if (tmp) {
                              elem[ontype] = null;
                          }

                          // Prevent re-triggering of the same event, since we already bubbled it above
                          jQuery.event.triggered = type;
                          try {
                              elem[type]();
                          } catch (e) {
                              // IE<9 dies on focus/blur to hidden element (#1486,#12518)
                              // only reproducible on winXP IE8 native, not IE9 in IE8 mode
                          }
                          jQuery.event.triggered = undefined;

                          if (tmp) {
                              elem[ontype] = tmp;
                          }
                      }
                  }
              }

              return event.result;
          },

          dispatch: function (event) {

              // Make a writable jQuery.Event from the native event object
              event = jQuery.event.fix(event);

              var i, ret, handleObj, matched, j,
                  handlerQueue = [],
                  args = slice.call(arguments),
                  handlers = ( jQuery._data(this, "events") || {} )[event.type] || [],
                  special = jQuery.event.special[event.type] || {};

              // Use the fix-ed jQuery.Event rather than the (read-only) native event
              args[0] = event;
              event.delegateTarget = this;

              // Call the preDispatch hook for the mapped type, and let it bail if desired
              if (special.preDispatch && special.preDispatch.call(this, event) === false) {
                  return;
              }

              // Determine handlers
              handlerQueue = jQuery.event.handlers.call(this, event, handlers);

              // Run delegates first; they may want to stop propagation beneath us
              i = 0;
              while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
                  event.currentTarget = matched.elem;

                  j = 0;
                  while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

                      // Triggered event must either 1) have no namespace, or
                      // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
                      if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

                          event.handleObj = handleObj;
                          event.data = handleObj.data;

                          ret = ( (jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler )
                              .apply(matched.elem, args);

                          if (ret !== undefined) {
                              if ((event.result = ret) === false) {
                                  event.preventDefault();
                                  event.stopPropagation();
                              }
                          }
                      }
                  }
              }

              // Call the postDispatch hook for the mapped type
              if (special.postDispatch) {
                  special.postDispatch.call(this, event);
              }

              return event.result;
          },

          handlers: function (event, handlers) {
              var sel, handleObj, matches, i,
                  handlerQueue = [],
                  delegateCount = handlers.delegateCount,
                  cur = event.target;

              // Find delegate handlers
              // Black-hole SVG <use> instance trees (#13180)
              // Avoid non-left-click bubbling in Firefox (#3861)
              if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

                  /* jshint eqeqeq: false */
                  for (; cur != this; cur = cur.parentNode || this) {
                      /* jshint eqeqeq: true */

                      // Don't check non-elements (#13208)
                      // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
                      if (cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click")) {
                          matches = [];
                          for (i = 0; i < delegateCount; i++) {
                              handleObj = handlers[i];

                              // Don't conflict with Object.prototype properties (#13203)
                              sel = handleObj.selector + " ";

                              if (matches[sel] === undefined) {
                                  matches[sel] = handleObj.needsContext ?
                                      jQuery(sel, this).index(cur) >= 0 :
                                      jQuery.find(sel, this, null, [cur]).length;
                              }
                              if (matches[sel]) {
                                  matches.push(handleObj);
                              }
                          }
                          if (matches.length) {
                              handlerQueue.push({elem: cur, handlers: matches});
                          }
                      }
                  }
              }

              // Add the remaining (directly-bound) handlers
              if (delegateCount < handlers.length) {
                  handlerQueue.push({elem: this, handlers: handlers.slice(delegateCount)});
              }

              return handlerQueue;
          },

          fix: function (event) {
              if (event[jQuery.expando]) {
                  return event;
              }

              // Create a writable copy of the event object and normalize some properties
              var i, prop, copy,
                  type = event.type,
                  originalEvent = event,
                  fixHook = this.fixHooks[type];

              if (!fixHook) {
                  this.fixHooks[type] = fixHook =
                      rmouseEvent.test(type) ? this.mouseHooks :
                          rkeyEvent.test(type) ? this.keyHooks :
                              {};
              }
              copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

              event = new jQuery.Event(originalEvent);

              i = copy.length;
              while (i--) {
                  prop = copy[i];
                  event[prop] = originalEvent[prop];
              }

              // Support: IE<9
              // Fix target property (#1925)
              if (!event.target) {
                  event.target = originalEvent.srcElement || document;
              }

              // Support: Chrome 23+, Safari?
              // Target should not be a text node (#504, #13143)
              if (event.target.nodeType === 3) {
                  event.target = event.target.parentNode;
              }

              // Support: IE<9
              // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
              event.metaKey = !!event.metaKey;

              return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
          },

          // Includes some event props shared by KeyEvent and MouseEvent
          props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

          fixHooks: {},

          keyHooks: {
              props: "char charCode key keyCode".split(" "),
              filter: function (event, original) {

                  // Add which for key events
                  if (event.which == null) {
                      event.which = original.charCode != null ? original.charCode : original.keyCode;
                  }

                  return event;
              }
          },

          mouseHooks: {
              props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
              filter: function (event, original) {
                  var body, eventDoc, doc,
                      button = original.button,
                      fromElement = original.fromElement;

                  // Calculate pageX/Y if missing and clientX/Y available
                  if (event.pageX == null && original.clientX != null) {
                      eventDoc = event.target.ownerDocument || document;
                      doc = eventDoc.documentElement;
                      body = eventDoc.body;

                      event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
                      event.pageY = original.clientY + ( doc && doc.scrollTop || body && body.scrollTop || 0 ) - ( doc && doc.clientTop || body && body.clientTop || 0 );
                  }

                  // Add relatedTarget, if necessary
                  if (!event.relatedTarget && fromElement) {
                      event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
                  }

                  // Add which for click: 1 === left; 2 === middle; 3 === right
                  // Note: button is not normalized, so don't use it
                  if (!event.which && button !== undefined) {
                      event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
                  }

                  return event;
              }
          },

          special: {
              load: {
                  // Prevent triggered image.load events from bubbling to window.load
                  noBubble: true
              },
              focus: {
                  // Fire native event if possible so blur/focus sequence is correct
                  trigger: function () {
                      if (this !== safeActiveElement() && this.focus) {
                          try {
                              this.focus();
                              return false;
                          } catch (e) {
                              // Support: IE<9
                              // If we error on focus to hidden element (#1486, #12518),
                              // let .trigger() run the handlers
                          }
                      }
                  },
                  delegateType: "focusin"
              },
              blur: {
                  trigger: function () {
                      if (this === safeActiveElement() && this.blur) {
                          this.blur();
                          return false;
                      }
                  },
                  delegateType: "focusout"
              },
              click: {
                  // For checkbox, fire native event so checked state will be right
                  trigger: function () {
                      if (jQuery.nodeName(this, "input") && this.type === "checkbox" && this.click) {
                          this.click();
                          return false;
                      }
                  },

                  // For cross-browser consistency, don't fire native .click() on links
                  _default: function (event) {
                      return jQuery.nodeName(event.target, "a");
                  }
              },

              beforeunload: {
                  postDispatch: function (event) {

                      // Support: Firefox 20+
                      // Firefox doesn't alert if the returnValue field is not set.
                      if (event.result !== undefined && event.originalEvent) {
                          event.originalEvent.returnValue = event.result;
                      }
                  }
              }
          },

          simulate: function (type, elem, event, bubble) {
              // Piggyback on a donor event to simulate a different one.
              // Fake originalEvent to avoid donor's stopPropagation, but if the
              // simulated event prevents default then we do the same on the donor.
              var e = jQuery.extend(
                  new jQuery.Event(),
                  event,
                  {
                      type: type,
                      isSimulated: true,
                      originalEvent: {}
                  }
              );
              if (bubble) {
                  jQuery.event.trigger(e, null, elem);
              } else {
                  jQuery.event.dispatch.call(elem, e);
              }
              if (e.isDefaultPrevented()) {
                  event.preventDefault();
              }
          }
      };

      jQuery.removeEvent = document.removeEventListener ?
          function (elem, type, handle) {
              if (elem.removeEventListener) {
                  elem.removeEventListener(type, handle, false);
              }
          } :
          function (elem, type, handle) {
              var name = "on" + type;

              if (elem.detachEvent) {

                  // #8545, #7054, preventing memory leaks for custom events in IE6-8
                  // detachEvent needed property on element, by name of that event, to properly expose it to GC
                  if (typeof elem[name] === strundefined) {
                      elem[name] = null;
                  }

                  elem.detachEvent(name, handle);
              }
          };

      jQuery.Event = function (src, props) {
          // Allow instantiation without the 'new' keyword
          if (!(this instanceof jQuery.Event)) {
              return new jQuery.Event(src, props);
          }

          // Event object
          if (src && src.type) {
              this.originalEvent = src;
              this.type = src.type;

              // Events bubbling up the document may have been marked as prevented
              // by a handler lower down the tree; reflect the correct value.
              this.isDefaultPrevented = src.defaultPrevented ||
              src.defaultPrevented === undefined &&
              // Support: IE < 9, Android < 4.0
              src.returnValue === false ?
                  returnTrue :
                  returnFalse;

              // Event type
          } else {
              this.type = src;
          }

          // Put explicitly provided properties onto the event object
          if (props) {
              jQuery.extend(this, props);
          }

          // Create a timestamp if incoming event doesn't have one
          this.timeStamp = src && src.timeStamp || jQuery.now();

          // Mark it as fixed
          this[jQuery.expando] = true;
      };

      var rformElems = /^(?:input|select|textarea)$/i,
          rkeyEvent = /^key/,
          rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
          rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
          rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

      function returnTrue() {
          return true;
      }

      function returnFalse() {
          return false;
      }

  // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
  // http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
      jQuery.Event.prototype = {
          isDefaultPrevented: returnFalse,
          isPropagationStopped: returnFalse,
          isImmediatePropagationStopped: returnFalse,

          preventDefault: function () {
              var e = this.originalEvent;

              this.isDefaultPrevented = returnTrue;
              if (!e) {
                  return;
              }

              // If preventDefault exists, run it on the original event
              if (e.preventDefault) {
                  e.preventDefault();

                  // Support: IE
                  // Otherwise set the returnValue property of the original event to false
              } else {
                  e.returnValue = false;
              }
          },
          stopPropagation: function () {
              var e = this.originalEvent;

              this.isPropagationStopped = returnTrue;
              if (!e) {
                  return;
              }
              // If stopPropagation exists, run it on the original event
              if (e.stopPropagation) {
                  e.stopPropagation();
              }

              // Support: IE
              // Set the cancelBubble property of the original event to true
              e.cancelBubble = true;
          },
          stopImmediatePropagation: function () {
              var e = this.originalEvent;

              this.isImmediatePropagationStopped = returnTrue;

              if (e && e.stopImmediatePropagation) {
                  e.stopImmediatePropagation();
              }

              this.stopPropagation();
          }
      };


  // IE submit delegation
      if (!support.submitBubbles) {

          jQuery.event.special.submit = {
              setup: function () {
                  // Only need this for delegated form submit events
                  if (jQuery.nodeName(this, "form")) {
                      return false;
                  }

                  // Lazy-add a submit handler when a descendant form may potentially be submitted
                  jQuery.event.add(this, "click._submit keypress._submit", function (e) {
                      // Node name check avoids a VML-related crash in IE (#9807)
                      var elem = e.target,
                          form = jQuery.nodeName(elem, "input") || jQuery.nodeName(elem, "button") ? elem.form : undefined;
                      if (form && !jQuery._data(form, "submitBubbles")) {
                          jQuery.event.add(form, "submit._submit", function (event) {
                              event._submit_bubble = true;
                          });
                          jQuery._data(form, "submitBubbles", true);
                      }
                  });
                  // return undefined since we don't need an event listener
              },

              postDispatch: function (event) {
                  // If form was submitted by the user, bubble the event up the tree
                  if (event._submit_bubble) {
                      delete event._submit_bubble;
                      if (this.parentNode && !event.isTrigger) {
                          jQuery.event.simulate("submit", this.parentNode, event, true);
                      }
                  }
              },

              teardown: function () {
                  // Only need this for delegated form submit events
                  if (jQuery.nodeName(this, "form")) {
                      return false;
                  }

                  // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
                  jQuery.event.remove(this, "._submit");
              }
          };
      }

  // IE change delegation and checkbox/radio fix
      if (!support.changeBubbles) {

          jQuery.event.special.change = {

              setup: function () {

                  if (rformElems.test(this.nodeName)) {
                      // IE doesn't fire change on a check/radio until blur; trigger it on click
                      // after a propertychange. Eat the blur-change in special.change.handle.
                      // This still fires onchange a second time for check/radio after blur.
                      if (this.type === "checkbox" || this.type === "radio") {
                          jQuery.event.add(this, "propertychange._change", function (event) {
                              if (event.originalEvent.propertyName === "checked") {
                                  this._just_changed = true;
                              }
                          });
                          jQuery.event.add(this, "click._change", function (event) {
                              if (this._just_changed && !event.isTrigger) {
                                  this._just_changed = false;
                              }
                              // Allow triggered, simulated change events (#11500)
                              jQuery.event.simulate("change", this, event, true);
                          });
                      }
                      return false;
                  }
                  // Delegated event; lazy-add a change handler on descendant inputs
                  jQuery.event.add(this, "beforeactivate._change", function (e) {
                      var elem = e.target;

                      if (rformElems.test(elem.nodeName) && !jQuery._data(elem, "changeBubbles")) {
                          jQuery.event.add(elem, "change._change", function (event) {
                              if (this.parentNode && !event.isSimulated && !event.isTrigger) {
                                  jQuery.event.simulate("change", this.parentNode, event, true);
                              }
                          });
                          jQuery._data(elem, "changeBubbles", true);
                      }
                  });
              },

              handle: function (event) {
                  var elem = event.target;

                  // Swallow native change events from checkbox/radio, we already triggered them above
                  if (this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox")) {
                      return event.handleObj.handler.apply(this, arguments);
                  }
              },

              teardown: function () {
                  jQuery.event.remove(this, "._change");

                  return !rformElems.test(this.nodeName);
              }
          };
      }

  // Create "bubbling" focus and blur events
      if (!support.focusinBubbles) {
          jQuery.each({focus: "focusin", blur: "focusout"}, function (orig, fix) {

              // Attach a single capturing handler on the document while someone wants focusin/focusout
              var handler = function (event) {
                  jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
              };

              jQuery.event.special[fix] = {
                  setup: function () {
                      var doc = this.ownerDocument || this,
                          attaches = jQuery._data(doc, fix);

                      if (!attaches) {
                          doc.addEventListener(orig, handler, true);
                      }
                      jQuery._data(doc, fix, ( attaches || 0 ) + 1);
                  },
                  teardown: function () {
                      var doc = this.ownerDocument || this,
                          attaches = jQuery._data(doc, fix) - 1;

                      if (!attaches) {
                          doc.removeEventListener(orig, handler, true);
                          jQuery._removeData(doc, fix);
                      } else {
                          jQuery._data(doc, fix, attaches);
                      }
                  }
              };
          });
      }

      jQuery.fn.extend({

          on: function (types, selector, data, fn, /*INTERNAL*/ one) {
              var type, origFn;

              // Types can be a map of types/handlers
              if (typeof types === "object") {
                  // ( types-Object, selector, data )
                  if (typeof selector !== "string") {
                      // ( types-Object, data )
                      data = data || selector;
                      selector = undefined;
                  }
                  for (type in types) {
                      this.on(type, selector, data, types[type], one);
                  }
                  return this;
              }

              if (data == null && fn == null) {
                  // ( types, fn )
                  fn = selector;
                  data = selector = undefined;
              } else if (fn == null) {
                  if (typeof selector === "string") {
                      // ( types, selector, fn )
                      fn = data;
                      data = undefined;
                  } else {
                      // ( types, data, fn )
                      fn = data;
                      data = selector;
                      selector = undefined;
                  }
              }
              if (fn === false) {
                  fn = returnFalse;
              } else if (!fn) {
                  return this;
              }

              if (one === 1) {
                  origFn = fn;
                  fn = function (event) {
                      // Can use an empty set, since event contains the info
                      jQuery().off(event);
                      return origFn.apply(this, arguments);
                  };
                  // Use same guid so caller can remove using origFn
                  fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
              }
              return this.each(function () {
                  jQuery.event.add(this, types, fn, data, selector);
              });
          },
          one: function (types, selector, data, fn) {
              return this.on(types, selector, data, fn, 1);
          },
          off: function (types, selector, fn) {
              var handleObj, type;
              if (types && types.preventDefault && types.handleObj) {
                  // ( event )  dispatched jQuery.Event
                  handleObj = types.handleObj;
                  jQuery(types.delegateTarget).off(
                      handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
                      handleObj.selector,
                      handleObj.handler
                  );
                  return this;
              }
              if (typeof types === "object") {
                  // ( types-object [, selector] )
                  for (type in types) {
                      this.off(type, selector, types[type]);
                  }
                  return this;
              }
              if (selector === false || typeof selector === "function") {
                  // ( types [, fn] )
                  fn = selector;
                  selector = undefined;
              }
              if (fn === false) {
                  fn = returnFalse;
              }
              return this.each(function () {
                  jQuery.event.remove(this, types, fn, selector);
              });
          },

          trigger: function (type, data) {
              return this.each(function () {
                  jQuery.event.trigger(type, data, this);
              });
          },
          triggerHandler: function (type, data) {
              var elem = this[0];
              if (elem) {
                  return jQuery.event.trigger(type, data, elem, true);
              }
          }
      });


  // Based off of the plugin by Clint Helfers, with permission.
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
      jQuery.fn.delay = function (time, type) {
          time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
          type = type || "fx";

          return this.queue(type, function (next, hooks) {
              var timeout = setTimeout(next, time);
              hooks.stop = function () {
                  clearTimeout(timeout);
              };
          });
      };


      var nonce = jQuery.now();

      var rquery = (/\?/);


      var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

      jQuery.parseJSON = function (data) {
          // Attempt to parse using the native JSON parser first
          if (window.JSON && window.JSON.parse) {
              // Support: Android 2.3
              // Workaround failure to string-cast null input
              return window.JSON.parse(data + "");
          }

          var requireNonComma,
              depth = null,
              str = jQuery.trim(data + "");

          // Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
          // after removing valid tokens
          return str && !jQuery.trim(str.replace(rvalidtokens, function (token, comma, open, close) {

              // Force termination if we see a misplaced comma
              if (requireNonComma && comma) {
                  depth = 0;
              }

              // Perform no more replacements after returning to outermost depth
              if (depth === 0) {
                  return token;
              }

              // Commas must not follow "[", "{", or ","
              requireNonComma = open || comma;

              // Determine new depth
              // array/object open ("[" or "{"): depth += true - false (increment)
              // array/object close ("]" or "}"): depth += false - true (decrement)
              // other cases ("," or primitive): depth += true - true (numeric cast)
              depth += !close - !open;

              // Remove this token
              return "";
          })) ?
              ( Function("return " + str) )() :
              jQuery.error("Invalid JSON: " + data);
      };


  // Cross-browser xml parsing
      jQuery.parseXML = function (data) {
          var xml, tmp;
          if (!data || typeof data !== "string") {
              return null;
          }
          try {
              if (window.DOMParser) { // Standard
                  tmp = new DOMParser();
                  xml = tmp.parseFromString(data, "text/xml");
              } else { // IE
                  xml = new ActiveXObject("Microsoft.XMLDOM");
                  xml.async = "false";
                  xml.loadXML(data);
              }
          } catch (e) {
              xml = undefined;
          }
          if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
              jQuery.error("Invalid XML: " + data);
          }
          return xml;
      };


      var
          // Document location
          ajaxLocParts,
          ajaxLocation,

          rhash = /#.*$/,
          rts = /([?&])_=[^&]*/,
          rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
          // #7653, #8125, #8152: local protocol detection
          rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
          rnoContent = /^(?:GET|HEAD)$/,
          rprotocol = /^\/\//,
          rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

          /* Prefilters
           * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
           * 2) These are called:
           *    - BEFORE asking for a transport
           *    - AFTER param serialization (s.data is a string if s.processData is true)
           * 3) key is the dataType
           * 4) the catchall symbol "*" can be used
           * 5) execution will start with transport dataType and THEN continue down to "*" if needed
           */
          prefilters = {},

          /* Transports bindings
           * 1) key is the dataType
           * 2) the catchall symbol "*" can be used
           * 3) selection will start with transport dataType and THEN go to "*" if needed
           */
          transports = {},

          // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
          allTypes = "*/".concat("*");

  // #8138, IE may throw an exception when accessing
  // a field from window.location if document.domain has been set
      try {
          ajaxLocation = location.href;
      } catch (e) {
          // Use the href attribute of an A element
          // since IE will modify it given document.location
          ajaxLocation = document.createElement("a");
          ajaxLocation.href = "";
          ajaxLocation = ajaxLocation.href;
      }

  // Segment location into parts
      ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

  // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
      function addToPrefiltersOrTransports(structure) {

          // dataTypeExpression is optional and defaults to "*"
          return function (dataTypeExpression, func) {

              if (typeof dataTypeExpression !== "string") {
                  func = dataTypeExpression;
                  dataTypeExpression = "*";
              }

              var dataType,
                  i = 0,
                  dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

              if (jQuery.isFunction(func)) {
                  // For each dataType in the dataTypeExpression
                  while ((dataType = dataTypes[i++])) {
                      // Prepend if requested
                      if (dataType.charAt(0) === "+") {
                          dataType = dataType.slice(1) || "*";
                          (structure[dataType] = structure[dataType] || []).unshift(func);

                          // Otherwise append
                      } else {
                          (structure[dataType] = structure[dataType] || []).push(func);
                      }
                  }
              }
          };
      }

  // Base inspection function for prefilters and transports
      function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

          var inspected = {},
              seekingTransport = ( structure === transports );

          function inspect(dataType) {
              var selected;
              inspected[dataType] = true;
              jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
                  var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
                  if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
                      options.dataTypes.unshift(dataTypeOrTransport);
                      inspect(dataTypeOrTransport);
                      return false;
                  } else if (seekingTransport) {
                      return !( selected = dataTypeOrTransport );
                  }
              });
              return selected;
          }

          return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
      }

  // A special extend for ajax options
  // that takes "flat" options (not to be deep extended)
  // Fixes #9887
      function ajaxExtend(target, src) {
          var deep, key,
              flatOptions = jQuery.ajaxSettings.flatOptions || {};

          for (key in src) {
              if (src[key] !== undefined) {
                  ( flatOptions[key] ? target : ( deep || (deep = {}) ) )[key] = src[key];
              }
          }
          if (deep) {
              jQuery.extend(true, target, deep);
          }

          return target;
      }

      /* Handles responses to an ajax request:
       * - finds the right dataType (mediates between content-type and expected dataType)
       * - returns the corresponding response
       */
      function ajaxHandleResponses(s, jqXHR, responses) {
          var firstDataType, ct, finalDataType, type,
              contents = s.contents,
              dataTypes = s.dataTypes;

          // Remove auto dataType and get content-type in the process
          while (dataTypes[0] === "*") {
              dataTypes.shift();
              if (ct === undefined) {
                  ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
              }
          }

          // Check if we're dealing with a known content-type
          if (ct) {
              for (type in contents) {
                  if (contents[type] && contents[type].test(ct)) {
                      dataTypes.unshift(type);
                      break;
                  }
              }
          }

          // Check to see if we have a response for the expected dataType
          if (dataTypes[0] in responses) {
              finalDataType = dataTypes[0];
          } else {
              // Try convertible dataTypes
              for (type in responses) {
                  if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
                      finalDataType = type;
                      break;
                  }
                  if (!firstDataType) {
                      firstDataType = type;
                  }
              }
              // Or just use first one
              finalDataType = finalDataType || firstDataType;
          }

          // If we found a dataType
          // We add the dataType to the list if needed
          // and return the corresponding response
          if (finalDataType) {
              if (finalDataType !== dataTypes[0]) {
                  dataTypes.unshift(finalDataType);
              }
              return responses[finalDataType];
          }
      }

      /* Chain conversions given the request and the original response
       * Also sets the responseXXX fields on the jqXHR instance
       */
      function ajaxConvert(s, response, jqXHR, isSuccess) {
          var conv2, current, conv, tmp, prev,
              converters = {},
              // Work with a copy of dataTypes in case we need to modify it for conversion
              dataTypes = s.dataTypes.slice();

          // Create converters map with lowercased keys
          if (dataTypes[1]) {
              for (conv in s.converters) {
                  converters[conv.toLowerCase()] = s.converters[conv];
              }
          }

          current = dataTypes.shift();

          // Convert to each sequential dataType
          while (current) {

              if (s.responseFields[current]) {
                  jqXHR[s.responseFields[current]] = response;
              }

              // Apply the dataFilter if provided
              if (!prev && isSuccess && s.dataFilter) {
                  response = s.dataFilter(response, s.dataType);
              }

              prev = current;
              current = dataTypes.shift();

              if (current) {

                  // There's only work to do if current dataType is non-auto
                  if (current === "*") {

                      current = prev;

                      // Convert response if prev dataType is non-auto and differs from current
                  } else if (prev !== "*" && prev !== current) {

                      // Seek a direct converter
                      conv = converters[prev + " " + current] || converters["* " + current];

                      // If none found, seek a pair
                      if (!conv) {
                          for (conv2 in converters) {

                              // If conv2 outputs current
                              tmp = conv2.split(" ");
                              if (tmp[1] === current) {

                                  // If prev can be converted to accepted input
                                  conv = converters[prev + " " + tmp[0]] ||
                                      converters["* " + tmp[0]];
                                  if (conv) {
                                      // Condense equivalence converters
                                      if (conv === true) {
                                          conv = converters[conv2];

                                          // Otherwise, insert the intermediate dataType
                                      } else if (converters[conv2] !== true) {
                                          current = tmp[0];
                                          dataTypes.unshift(tmp[1]);
                                      }
                                      break;
                                  }
                              }
                          }
                      }

                      // Apply converter (if not an equivalence)
                      if (conv !== true) {

                          // Unless errors are allowed to bubble, catch and return them
                          if (conv && s["throws"]) {
                              response = conv(response);
                          } else {
                              try {
                                  response = conv(response);
                              } catch (e) {
                                  return {
                                      state: "parsererror",
                                      error: conv ? e : "No conversion from " + prev + " to " + current
                                  };
                              }
                          }
                      }
                  }
              }
          }

          return {state: "success", data: response};
      }

      jQuery.extend({

          // Counter for holding the number of active queries
          active: 0,

          // Last-Modified header cache for next request
          lastModified: {},
          etag: {},

          ajaxSettings: {
              url: ajaxLocation,
              type: "GET",
              isLocal: rlocalProtocol.test(ajaxLocParts[1]),
              global: true,
              processData: true,
              async: true,
              contentType: "application/x-www-form-urlencoded; charset=UTF-8",
              /*
               timeout: 0,
               data: null,
               dataType: null,
               username: null,
               password: null,
               cache: null,
               throws: false,
               traditional: false,
               headers: {},
               */

              accepts: {
                  "*": allTypes,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript"
              },

              contents: {
                  xml: /xml/,
                  html: /html/,
                  json: /json/
              },

              responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON"
              },

              // Data converters
              // Keys separate source (or catchall "*") and destination types with a single space
              converters: {

                  // Convert anything to text
                  "* text": String,

                  // Text to html (true = no transformation)
                  "text html": true,

                  // Evaluate text as a json expression
                  "text json": jQuery.parseJSON,

                  // Parse text as xml
                  "text xml": jQuery.parseXML
              },

              // For options that shouldn't be deep extended:
              // you can add your own custom options here if
              // and when you create one that shouldn't be
              // deep extended (see ajaxExtend)
              flatOptions: {
                  url: true,
                  context: true
              }
          },

          // Creates a full fledged settings object into target
          // with both ajaxSettings and settings fields.
          // If target is omitted, writes into ajaxSettings.
          ajaxSetup: function (target, settings) {
              return settings ?

                  // Building a settings object
                  ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

                  // Extending ajaxSettings
                  ajaxExtend(jQuery.ajaxSettings, target);
          },

          ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
          ajaxTransport: addToPrefiltersOrTransports(transports),

          // Main method
          ajax: function (url, options) {

              // If url is an object, simulate pre-1.5 signature
              if (typeof url === "object") {
                  options = url;
                  url = undefined;
              }

              // Force options to be an object
              options = options || {};

              var // Cross-domain detection vars
                  parts,
                  // Loop variable
                  i,
                  // URL without anti-cache param
                  cacheURL,
                  // Response headers as string
                  responseHeadersString,
                  // timeout handle
                  timeoutTimer,

                  // To know if global events are to be dispatched
                  fireGlobals,

                  transport,
                  // Response headers
                  responseHeaders,
                  // Create the final options object
                  s = jQuery.ajaxSetup({}, options),
                  // Callbacks context
                  callbackContext = s.context || s,
                  // Context for global events is callbackContext if it is a DOM node or jQuery collection
                  globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
                      jQuery(callbackContext) :
                      jQuery.event,
                  // Deferreds
                  deferred = jQuery.Deferred(),
                  completeDeferred = jQuery.Callbacks("once memory"),
                  // Status-dependent callbacks
                  statusCode = s.statusCode || {},
                  // Headers (they are sent all at once)
                  requestHeaders = {},
                  requestHeadersNames = {},
                  // The jqXHR state
                  state = 0,
                  // Default abort message
                  strAbort = "canceled",
                  // Fake xhr
                  jqXHR = {
                      readyState: 0,

                      // Builds headers hashtable if needed
                      getResponseHeader: function (key) {
                          var match;
                          if (state === 2) {
                              if (!responseHeaders) {
                                  responseHeaders = {};
                                  while ((match = rheaders.exec(responseHeadersString))) {
                                      responseHeaders[match[1].toLowerCase()] = match[2];
                                  }
                              }
                              match = responseHeaders[key.toLowerCase()];
                          }
                          return match == null ? null : match;
                      },

                      // Raw string
                      getAllResponseHeaders: function () {
                          return state === 2 ? responseHeadersString : null;
                      },

                      // Caches the header
                      setRequestHeader: function (name, value) {
                          var lname = name.toLowerCase();
                          if (!state) {
                              name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
                              requestHeaders[name] = value;
                          }
                          return this;
                      },

                      // Overrides response content-type header
                      overrideMimeType: function (type) {
                          if (!state) {
                              s.mimeType = type;
                          }
                          return this;
                      },

                      // Status-dependent callbacks
                      statusCode: function (map) {
                          var code;
                          if (map) {
                              if (state < 2) {
                                  for (code in map) {
                                      // Lazy-add the new callback in a way that preserves old ones
                                      statusCode[code] = [statusCode[code], map[code]];
                                  }
                              } else {
                                  // Execute the appropriate callbacks
                                  jqXHR.always(map[jqXHR.status]);
                              }
                          }
                          return this;
                      },

                      // Cancel the request
                      abort: function (statusText) {
                          var finalText = statusText || strAbort;
                          if (transport) {
                              transport.abort(finalText);
                          }
                          done(0, finalText);
                          return this;
                      }
                  };

              // Attach deferreds
              deferred.promise(jqXHR).complete = completeDeferred.add;
              jqXHR.success = jqXHR.done;
              jqXHR.error = jqXHR.fail;

              // Remove hash character (#7531: and string promotion)
              // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
              // Handle falsy url in the settings object (#10093: consistency with old signature)
              // We also use the url parameter if available
              s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

              // Alias method option to type as per ticket #12004
              s.type = options.method || options.type || s.method || s.type;

              // Extract dataTypes list
              s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

              // A cross-domain request is in order when we have a protocol:host:port mismatch
              if (s.crossDomain == null) {
                  parts = rurl.exec(s.url.toLowerCase());
                  s.crossDomain = !!( parts &&
                      ( parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] ||
                      ( parts[3] || ( parts[1] === "http:" ? "80" : "443" ) ) !==
                      ( ajaxLocParts[3] || ( ajaxLocParts[1] === "http:" ? "80" : "443" ) ) )
                  );
              }

              // Convert data if not already a string
              if (s.data && s.processData && typeof s.data !== "string") {
                  s.data = jQuery.param(s.data, s.traditional);
              }

              // Apply prefilters
              inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

              // If request was aborted inside a prefilter, stop there
              if (state === 2) {
                  return jqXHR;
              }

              // We can fire global events as of now if asked to
              fireGlobals = s.global;

              // Watch for a new set of requests
              if (fireGlobals && jQuery.active++ === 0) {
                  jQuery.event.trigger("ajaxStart");
              }

              // Uppercase the type
              s.type = s.type.toUpperCase();

              // Determine if request has content
              s.hasContent = !rnoContent.test(s.type);

              // Save the URL in case we're toying with the If-Modified-Since
              // and/or If-None-Match header later on
              cacheURL = s.url;

              // More options handling for requests with no content
              if (!s.hasContent) {

                  // If data is available, append data to url
                  if (s.data) {
                      cacheURL = ( s.url += ( rquery.test(cacheURL) ? "&" : "?" ) + s.data );
                      // #9682: remove data so that it's not used in an eventual retry
                      delete s.data;
                  }

                  // Add anti-cache in url if needed
                  if (s.cache === false) {
                      s.url = rts.test(cacheURL) ?

                          // If there is already a '_' parameter, set its value
                          cacheURL.replace(rts, "$1_=" + nonce++) :

                          // Otherwise add one to the end
                          cacheURL + ( rquery.test(cacheURL) ? "&" : "?" ) + "_=" + nonce++;
                  }
              }

              // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
              if (s.ifModified) {
                  if (jQuery.lastModified[cacheURL]) {
                      jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
                  }
                  if (jQuery.etag[cacheURL]) {
                      jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
                  }
              }

              // Set the correct header, if data is being sent
              if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
                  jqXHR.setRequestHeader("Content-Type", s.contentType);
              }

              // Set the Accepts header for the server, depending on the dataType
              // jqXHR.setRequestHeader(
              //     "Accept",
              //     s.dataTypes[0] && s.accepts[s.dataTypes[0]] ?
              //         s.accepts[s.dataTypes[0]] + ( s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
              //         s.accepts["*"]
              // );

              // Check for headers option
              for (i in s.headers) {
                  jqXHR.setRequestHeader(i, s.headers[i]);
              }

              // Allow custom headers/mimetypes and early abort
              if (s.beforeSend && ( s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2 )) {
                  // Abort if not done already and return
                  return jqXHR.abort();
              }

              // aborting is no longer a cancellation
              strAbort = "abort";

              // Install callbacks on deferreds
              for (i in {success: 1, error: 1, complete: 1}) {
                  jqXHR[i](s[i]);
              }

              // Get transport
              transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

              // If no transport, we auto-abort
              if (!transport) {
                  done(-1, "No Transport");
              } else {
                  jqXHR.readyState = 1;

                  // Send global event
                  if (fireGlobals) {
                      globalEventContext.trigger("ajaxSend", [jqXHR, s]);
                  }
                  // Timeout
                  if (s.async && s.timeout > 0) {
                      timeoutTimer = setTimeout(function () {
                          jqXHR.abort("timeout");
                      }, s.timeout);
                  }

                  try {
                      state = 1;
                      transport.send(requestHeaders, done);
                  } catch (e) {
                      // Propagate exception as error if not done
                      if (state < 2) {
                          done(-1, e);
                          // Simply rethrow otherwise
                      } else {
                          throw e;
                      }
                  }
              }

              // Callback for when everything is done
              function done(status, nativeStatusText, responses, headers) {
                  var isSuccess, success, error, response, modified,
                      statusText = nativeStatusText;

                  // Called once
                  if (state === 2) {
                      return;
                  }

                  // State is "done" now
                  state = 2;

                  // Clear timeout if it exists
                  if (timeoutTimer) {
                      clearTimeout(timeoutTimer);
                  }

                  // Dereference transport for early garbage collection
                  // (no matter how long the jqXHR object will be used)
                  transport = undefined;

                  // Cache response headers
                  responseHeadersString = headers || "";

                  // Set readyState
                  jqXHR.readyState = status > 0 ? 4 : 0;

                  // Determine if successful
                  isSuccess = status >= 200 && status < 300 || status === 304;

                  // Get response data
                  if (responses) {
                      response = ajaxHandleResponses(s, jqXHR, responses);
                  }

                  // Convert no matter what (that way responseXXX fields are always set)
                  response = ajaxConvert(s, response, jqXHR, isSuccess);

                  // If successful, handle type chaining
                  if (isSuccess) {

                      // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                      if (s.ifModified) {
                          modified = jqXHR.getResponseHeader("Last-Modified");
                          if (modified) {
                              jQuery.lastModified[cacheURL] = modified;
                          }
                          modified = jqXHR.getResponseHeader("etag");
                          if (modified) {
                              jQuery.etag[cacheURL] = modified;
                          }
                      }

                      // if no content
                      if (status === 204 || s.type === "HEAD") {
                          statusText = "nocontent";

                          // if not modified
                      } else if (status === 304) {
                          statusText = "notmodified";

                          // If we have data, let's convert it
                      } else {
                          statusText = response.state;
                          success = response.data;
                          error = response.error;
                          isSuccess = !error;
                      }
                  } else {
                      // We extract error from statusText
                      // then normalize statusText and status for non-aborts
                      error = statusText;
                      if (status || !statusText) {
                          statusText = "error";
                          if (status < 0) {
                              status = 0;
                          }
                      }
                  }

                  // Set data for the fake xhr object
                  jqXHR.status = status;
                  jqXHR.statusText = ( nativeStatusText || statusText ) + "";

                  // Success/Error
                  if (isSuccess) {
                      deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
                  } else {
                      deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
                  }

                  // Status-dependent callbacks
                  jqXHR.statusCode(statusCode);
                  statusCode = undefined;

                  if (fireGlobals) {
                      globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError",
                          [jqXHR, s, isSuccess ? success : error]);
                  }

                  // Complete
                  completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

                  if (fireGlobals) {
                      globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
                      // Handle the global AJAX counter
                      if (!( --jQuery.active )) {
                          jQuery.event.trigger("ajaxStop");
                      }
                  }
              }

              return jqXHR;
          },

          getJSON: function (url, data, callback) {
              return jQuery.get(url, data, callback, "json");
          },

          getScript: function (url, callback) {
              return jQuery.get(url, undefined, callback, "script");
          }
      });

      jQuery.each(["get", "post"], function (i, method) {
          jQuery[method] = function (url, data, callback, type) {
              // shift arguments if data argument was omitted
              if (jQuery.isFunction(data)) {
                  type = type || callback;
                  callback = data;
                  data = undefined;
              }

              return jQuery.ajax({
                  url: url,
                  type: method,
                  dataType: type,
                  data: data,
                  success: callback
              });
          };
      });

  // Attach a bunch of functions for handling common AJAX events
      jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
          jQuery.fn[type] = function (fn) {
              return this.on(type, fn);
          };
      });


      jQuery._evalUrl = function (url) {
          return jQuery.ajax({
              url: url,
              type: "GET",
              dataType: "script",
              async: false,
              global: false,
              "throws": true
          });
      };


      var r20 = /%20/g,
          rbracket = /\[\]$/,
          rCRLF = /\r?\n/g,
          rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
          rsubmittable = /^(?:input|select|textarea|keygen)/i;

      function buildParams(prefix, obj, traditional, add) {
          var name;

          if (jQuery.isArray(obj)) {
              // Serialize array item.
              jQuery.each(obj, function (i, v) {
                  if (traditional || rbracket.test(prefix)) {
                      // Treat each array item as a scalar.
                      add(prefix, v);

                  } else {
                      // Item is non-scalar (array or object), encode its numeric index.
                      buildParams(prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add);
                  }
              });

          } else if (!traditional && jQuery.type(obj) === "object") {
              // Serialize object item.
              for (name in obj) {
                  buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
              }

          } else {
              // Serialize scalar item.
              add(prefix, obj);
          }
      }

  // Serialize an array of form elements or a set of
  // key/values into a query string
      jQuery.param = function (a, traditional) {
          var prefix,
              s = [],
              add = function (key, value) {
                  // If value is a function, invoke it and return its value
                  value = jQuery.isFunction(value) ? value() : ( value == null ? "" : value );
                  s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
              };

          // Set traditional to true for jQuery <= 1.3.2 behavior.
          if (traditional === undefined) {
              traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
          }

          // If an array was passed in, assume that it is an array of form elements.
          if (jQuery.isArray(a) || ( a.jquery && !jQuery.isPlainObject(a) )) {
              // Serialize the form elements
              jQuery.each(a, function () {
                  add(this.name, this.value);
              });

          } else {
              // If traditional, encode the "old" way (the way 1.3.2 or older
              // did it), otherwise encode params recursively.
              for (prefix in a) {
                  buildParams(prefix, a[prefix], traditional, add);
              }
          }

          // Return the resulting serialization
          return s.join("&").replace(r20, "+");
      };

      jQuery.fn.extend({
          serialize: function () {
              return jQuery.param(this.serializeArray());
          },
          serializeArray: function () {
              return this.map(function () {
                  // Can add propHook for "elements" to filter or add form elements
                  var elements = jQuery.prop(this, "elements");
                  return elements ? jQuery.makeArray(elements) : this;
              })
                  .filter(function () {
                      var type = this.type;
                      // Use .is(":disabled") so that fieldset[disabled] works
                      return this.name && !jQuery(this).is(":disabled") &&
                          rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) &&
                          ( this.checked || !rcheckableType.test(type) );
                  })
                  .map(function (i, elem) {
                      var val = jQuery(this).val();

                      return val == null ?
                          null :
                          jQuery.isArray(val) ?
                              jQuery.map(val, function (val) {
                                  return {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                              }) :
                              {name: elem.name, value: val.replace(rCRLF, "\r\n")};
                  }).get();
          }
      });


  // Create the request object
  // (This is still attached to ajaxSettings for backward compatibility)
      jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
          // Support: IE6+
          function () {

              // XHR cannot access local files, always use ActiveX for that case
              return !this.isLocal &&

                  // Support: IE7-8
                  // oldIE XHR does not support non-RFC2616 methods (#13240)
                  // See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
                  // and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
                  // Although this check for six methods instead of eight
                  // since IE also does not support "trace" and "connect"
                  /^(get|post|head|put|delete|options)$/i.test(this.type) &&

                  createStandardXHR() || createActiveXHR();
          } :
          // For all other browsers, use the standard XMLHttpRequest object
          createStandardXHR;

      var xhrId = 0,
          xhrCallbacks = {},
          xhrSupported = jQuery.ajaxSettings.xhr();

  // Support: IE<10
  // Open requests must be manually aborted on unload (#5280)
      if (window.ActiveXObject) {
          jQuery(window).on("unload", function () {
              for (var key in xhrCallbacks) {
                  xhrCallbacks[key](undefined, true);
              }
          });
      }

  // Determine support properties
      support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
      xhrSupported = support.ajax = !!xhrSupported;

  // Create transport if the browser can provide an xhr
      if (xhrSupported) {

          jQuery.ajaxTransport(function (options) {
              // Cross domain only allowed if supported through XMLHttpRequest
              if (!options.crossDomain || support.cors) {

                  var callback;

                  return {
                      send: function (headers, complete) {
                          var i,
                              xhr = options.xhr(),
                              id = ++xhrId;

                          // Open the socket
                          xhr.open(options.type, options.url, options.async, options.username, options.password);

                          // Apply custom fields if provided
                          if (options.xhrFields) {
                              for (i in options.xhrFields) {
                                  xhr[i] = options.xhrFields[i];
                              }
                          }

                          // Override mime type if needed
                          if (options.mimeType && xhr.overrideMimeType) {
                              xhr.overrideMimeType(options.mimeType);
                          }

                          // X-Requested-With header
                          // For cross-domain requests, seeing as conditions for a preflight are
                          // akin to a jigsaw puzzle, we simply never set it to be sure.
                          // (it can always be set on a per-request basis or even using ajaxSetup)
                          // For same-domain requests, won't change header if already provided.
                          if (!options.crossDomain && !headers["X-Requested-With"]) {
                              headers["X-Requested-With"] = "XMLHttpRequest";
                          }

                          // Set headers
                          for (i in headers) {
                              // Support: IE<9
                              // IE's ActiveXObject throws a 'Type Mismatch' exception when setting
                              // request header to a null-value.
                              //
                              // To keep consistent with other XHR implementations, cast the value
                              // to string and ignore `undefined`.
                              if (headers[i] !== undefined) {
                                  xhr.setRequestHeader(i, headers[i] + "");
                              }
                          }

                          if (xhr.upload && options.progress) {
                              xhr.upload.onprogress = options.progress;
                          }

                          // Do send the request
                          // This may raise an exception which is actually
                          // handled in jQuery.ajax (so no try/catch here)
                          xhr.send(( options.hasContent && (options.body || options.data)) || null);

                          // Listener
                          callback = function (_, isAbort) {
                              var status, statusText, responses;

                              // Was never called and is aborted or complete
                              if (callback && ( isAbort || xhr.readyState === 4 )) {
                                  // Clean up
                                  delete xhrCallbacks[id];
                                  callback = undefined;
                                  xhr.onreadystatechange = jQuery.noop;

                                  // Abort manually if needed
                                  if (isAbort) {
                                      if (xhr.readyState !== 4) {
                                          xhr.abort();
                                      }
                                  } else {
                                      responses = {};
                                      status = xhr.status;

                                      // Support: IE<10
                                      // Accessing binary-data responseText throws an exception
                                      // (#11426)
                                      if (typeof xhr.responseText === "string") {
                                          responses.text = xhr.responseText;
                                      }

                                      // Firefox throws an exception when accessing
                                      // statusText for faulty cross-domain requests
                                      try {
                                          statusText = xhr.statusText;
                                      } catch (e) {
                                          // We normalize with Webkit giving an empty statusText
                                          statusText = "";
                                      }

                                      // Filter status for non standard behaviors

                                      // If the request is local and we have data: assume a success
                                      // (success with no data won't get notified, that's the best we
                                      // can do given current implementations)
                                      if (!status && options.isLocal && !options.crossDomain) {
                                          status = responses.text ? 200 : 404;
                                          // IE - #1450: sometimes returns 1223 when it should be 204
                                      } else if (status === 1223) {
                                          status = 204;
                                      }
                                  }
                              }

                              // Call complete if needed
                              if (responses) {
                                  complete(status, statusText, responses, xhr.getAllResponseHeaders());
                              }
                          };

                          if (!options.async) {
                              // if we're in sync mode we fire the callback
                              callback();
                          } else if (xhr.readyState === 4) {
                              // (IE6 & IE7) if it's in cache and has been
                              // retrieved directly we need to fire the callback
                              setTimeout(callback);
                          } else {
                              // Add to the list of active xhr callbacks
                              xhr.onreadystatechange = xhrCallbacks[id] = callback;
                          }
                      },

                      abort: function () {
                          if (callback) {
                              callback(undefined, true);
                          }
                      }
                  };
              }
          });
      }

  // Functions to create xhrs
      function createStandardXHR() {
          try {
              return new window.XMLHttpRequest();
          } catch (e) {
          }
      }

      function createActiveXHR() {
          try {
              return new window.ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {
          }
      }


  // Install script dataType
      jQuery.ajaxSetup({
          accepts: {
              script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
          },
          contents: {
              script: /(?:java|ecma)script/
          },
          converters: {
              "text script": function (text) {
                  jQuery.globalEval(text);
                  return text;
              }
          }
      });

  // Handle cache's special case and global
      jQuery.ajaxPrefilter("script", function (s) {
          if (s.cache === undefined) {
              s.cache = false;
          }
          if (s.crossDomain) {
              s.type = "GET";
              s.global = false;
          }
      });

  // Bind script tag hack transport
      jQuery.ajaxTransport("script", function (s) {

          // This transport only deals with cross domain requests
          if (s.crossDomain) {

              var script,
                  head = document.head || jQuery("head")[0] || document.documentElement;

              return {

                  send: function (_, callback) {

                      script = document.createElement("script");

                      script.async = true;

                      if (s.scriptCharset) {
                          script.charset = s.scriptCharset;
                      }

                      script.src = s.url;

                      // Attach handlers for all browsers
                      script.onload = script.onreadystatechange = function (_, isAbort) {

                          if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {

                              // Handle memory leak in IE
                              script.onload = script.onreadystatechange = null;

                              // Remove the script
                              if (script.parentNode) {
                                  script.parentNode.removeChild(script);
                              }

                              // Dereference the script
                              script = null;

                              // Callback if not abort
                              if (!isAbort) {
                                  callback(200, "success");
                              }
                          }
                      };

                      // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
                      // Use native DOM manipulation to avoid our domManip AJAX trickery
                      head.insertBefore(script, head.firstChild);
                  },

                  abort: function () {
                      if (script) {
                          script.onload(undefined, true);
                      }
                  }
              };
          }
      });


      var oldCallbacks = [],
          rjsonp = /(=)\?(?=&|$)|\?\?/;

  // Default jsonp settings
      jQuery.ajaxSetup({
          jsonp: "callback",
          jsonpCallback: function () {
              var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
              this[callback] = true;
              return callback;
          }
      });

  // Detect, normalize options and install callbacks for jsonp requests
      jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

          var callbackName, overwritten, responseContainer,
              jsonProp = s.jsonp !== false && ( rjsonp.test(s.url) ?
                          "url" :
                          typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data"
                  );

          // Handle iff the expected data type is "jsonp" or we have a parameter to set
          if (jsonProp || s.dataTypes[0] === "jsonp") {

              // Get callback name, remembering preexisting value associated with it
              callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ?
                  s.jsonpCallback() :
                  s.jsonpCallback;

              // Insert callback into url or form data
              if (jsonProp) {
                  s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
              } else if (s.jsonp !== false) {
                  s.url += ( rquery.test(s.url) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
              }

              // Use data converter to retrieve json after script execution
              s.converters["script json"] = function () {
                  if (!responseContainer) {
                      jQuery.error(callbackName + " was not called");
                  }
                  return responseContainer[0];
              };

              // force json dataType
              s.dataTypes[0] = "json";

              // Install callback
              overwritten = window[callbackName];
              window[callbackName] = function () {
                  responseContainer = arguments;
              };

              // Clean-up function (fires after converters)
              jqXHR.always(function () {
                  // Restore preexisting value
                  window[callbackName] = overwritten;

                  // Save back as free
                  if (s[callbackName]) {
                      // make sure that re-using the options doesn't screw things around
                      s.jsonpCallback = originalSettings.jsonpCallback;

                      // save the callback name for future use
                      oldCallbacks.push(callbackName);
                  }

                  // Call if it was a function and we have a response
                  if (responseContainer && jQuery.isFunction(overwritten)) {
                      overwritten(responseContainer[0]);
                  }

                  responseContainer = overwritten = undefined;
              });

              // Delegate to script
              return "script";
          }
      });

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context, defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
      jQuery.parseHTML = function (data, context, keepScripts) {
          if (!data || typeof data !== "string") {
              return null;
          }
          if (typeof context === "boolean") {
              keepScripts = context;
              context = false;
          }
          context = context || document;

          var parsed = rsingleTag.exec(data),
              scripts = !keepScripts && [];

          // Single tag
          if (parsed) {
              return [context.createElement(parsed[1])];
          }

          parsed = jQuery.buildFragment([data], context, scripts);

          if (scripts && scripts.length) {
              jQuery(scripts).remove();
          }

          return jQuery.merge([], parsed.childNodes);
      };

      return jQuery;

  })();

  var stringifyPrimitive = function(v) {
      switch (typeof v) {
          case 'string':
              return v;
          case 'boolean':
              return v ? 'true' : 'false';
          case 'number':
              return isFinite(v) ? v : '';
          default:
              return '';
      }
  };

  var queryStringify = function(obj, sep, eq, name) {
      sep = sep || '&';
      eq = eq || '=';
      if (obj === null) {
          obj = undefined;
      }
      if (typeof obj === 'object') {
          return Object.keys(obj).map(function(k) {
              var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
              if (Array.isArray(obj[k])) {
                  return obj[k].map(function(v) {
                      return ks + encodeURIComponent(stringifyPrimitive(v));
                  }).join(sep);
              } else {
                  return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
              }
          }).filter(Boolean).join(sep);

      }
      if (!name) return '';
      return encodeURIComponent(stringifyPrimitive(name)) + eq +
          encodeURIComponent(stringifyPrimitive(obj));
  };

  var request = function (options, callback) {

      options = $.extend(true, {headers: {}, qs: {}}, options);

      // method
      options.type = options.method;
      delete options.method;

      // progress
      if (options.onProgress) {
          options.progress = options.onProgress;
          delete options.onProgress;
      }

      // qs
      if (options.qs) {
          var qsStr = queryStringify(options.qs);
          if (qsStr) {
              options.url += (options.url.indexOf('?') === -1 ? '?' : '&') + qsStr;
          }
          delete options.qs;
      }

      // json
      if (options.json) {
          options.data = options.body;
          delete options.json;
          delete options.body;
          !options.headers && (options.headers = {});
          options.headers['Content-Type'] = 'application/json';
      }

      // body
      if (options.body) {
          if (!(options.body instanceof Blob || options.body.toString() === '[object File]' || options.body.toString() === '[object Blob]')) {
              options.data = options.body;
              delete options.body;
          }
      }

      // headers
      if (options.headers) {
          var headers = options.headers;
          delete options.headers;
          options.beforeSend = function (xhr) {
              for (var key in headers) {
                  if (headers.hasOwnProperty(key) &&
                      key.toLowerCase() !== 'content-length' &&
                      key.toLowerCase() !== 'user-agent' &&
                      key.toLowerCase() !== 'origin' &&
                      key.toLowerCase() !== 'host') {
                      xhr.setRequestHeader(key, headers[key]);
                  }
              }
          };
      }

      var getResponse = function (xhr) {
          var headers = {};
          xhr.getAllResponseHeaders().trim().split('\n').forEach(function (item) {
              if (item) {
                  var index = item.indexOf(':');
                  var key = item.substr(0, index).trim().toLowerCase();
                  var val = item.substr(index + 1).trim();
                  headers[key] = val;
              }
          });
          return {
              statusCode: xhr.status,
              statusMessage: xhr.statusText,
              headers: headers
          };
      };

      // callback
      options.success = function (data, state, xhr) {
          callback(null, getResponse(xhr), data);
      };
      options.error = function (xhr) {
          if (xhr.responseText) {
              callback(null, getResponse(xhr), xhr.responseText);
          } else {
              callback(xhr.statusText, getResponse(xhr), xhr.responseText);
          }
      };

      options.dataType = 'text';

      // send
      return $.ajax(options);

  };

  var request_1 = request;

  // Bucket 相关

  /**
   * 获取用户的 bucket 列表
   * @param  {Object}  params         回调函数，必须，下面为参数列表
   * 无特殊参数
   * @param  {Function}  callback     回调函数，必须
   */
  function getService(params, callback) {

      if (typeof params === 'function') {
          callback = params;
          params = {};
      }
      var protocol = this.options.Protocol || (util_1.isBrowser && location.protocol === 'http:' ? 'http:' : 'https:');
      var domain = this.options.ServiceDomain;
      var region = params.Region;
      if (domain) {
          domain = domain.replace(/\{Region\}/ig, region || '').replace(/\{.*?\}/ig, '');
          if (!/^[a-zA-Z]+:\/\//.test(domain)) {
              domain = protocol + '//' + domain;
          }
          if (domain.slice(-1) === '/') {
              domain = domain.slice(0, -1);
          }
      } else if(region){
          domain = protocol + '//cos.'+ region + '.myqcloud.com';
      } else {
          domain = protocol + '//service.cos.myqcloud.com';
      }

      submitRequest.call(this, {
          Action: 'name/cos:GetService',
          url: domain,
          method: 'GET',
          headers: params.Headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var buckets = (data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Buckets
              && data.ListAllMyBucketsResult.Buckets.Bucket) || [];
          buckets = util_1.isArray(buckets) ? buckets : [buckets];
          var owner = (data && data.ListAllMyBucketsResult && data.ListAllMyBucketsResult.Owner) || {};
          callback(null, {
              Buckets: buckets,
              Owner: owner,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 创建 Bucket，并初始化访问权限
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
   *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
   *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
   *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   *     @return  {String}  data.Location             操作地址
   */
  function putBucket(params, callback) {

      var self = this;
      submitRequest.call(this, {
          Action: 'name/cos:PutBucket',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var url = getUrl({
              protocol: self.options.Protocol,
              domain: self.options.Domain,
              bucket: params.Bucket,
              region: params.Region,
              isLocation: true,
          });
          callback(null, {
              Location: url,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 查看是否存在该Bucket，是否有权限访问
   * @param  {Object}  params                     参数对象，必须
   *     @param  {String}  params.Bucket          Bucket名称，必须
   *     @param  {String}  params.Region          地域名称，必须
   * @param  {Function}  callback                 回调函数，必须
   * @return  {Object}  err                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                      返回的数据
   *     @return  {Boolean}  data.BucketExist     Bucket是否存在
   *     @return  {Boolean}  data.BucketAuth      是否有 Bucket 的访问权限
   */
  function headBucket(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:HeadBucket',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          method: 'HEAD',
      }, function (err, data) {
          callback(err, data);
      });
  }

  /**
   * 获取 Bucket 下的 object 列表
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   *     @param  {String}  params.Prefix              前缀匹配，用来规定返回的文件前缀地址，非必须
   *     @param  {String}  params.Delimiter           定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，非必须
   *     @param  {String}  params.Marker              默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
   *     @param  {String}  params.MaxKeys             单次返回最大的条目数量，默认1000，非必须
   *     @param  {String}  params.EncodingType        规定返回值的编码方式，非必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   *     @return  {Object}  data.ListBucketResult     返回的 object 列表信息
   */
  function getBucket(params, callback) {
      var reqParams = {};
      reqParams['prefix'] = params['Prefix'] || '';
      reqParams['delimiter'] = params['Delimiter'];
      reqParams['marker'] = params['Marker'];
      reqParams['max-keys'] = params['MaxKeys'];
      reqParams['encoding-type'] = params['EncodingType'];

      submitRequest.call(this, {
          Action: 'name/cos:GetBucket',
          ResourceKey: reqParams['prefix'],
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          qs: reqParams,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var ListBucketResult = data.ListBucketResult || {};
          var Contents = ListBucketResult.Contents || [];
          var CommonPrefixes = ListBucketResult.CommonPrefixes || [];

          Contents = util_1.isArray(Contents) ? Contents : [Contents];
          CommonPrefixes = util_1.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];

          var result = util_1.clone(ListBucketResult);
          util_1.extend(result, {
              Contents: Contents,
              CommonPrefixes: CommonPrefixes,
              statusCode: data.statusCode,
              headers: data.headers,
          });

          callback(null, result);
      });
  }

  /**
   * 删除 Bucket
   * @param  {Object}  params                 参数对象，必须
   *     @param  {String}  params.Bucket      Bucket名称，必须
   *     @param  {String}  params.Region      地域名称，必须
   * @param  {Function}  callback             回调函数，必须
   * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                  返回的数据
   *     @return  {String}  data.Location     操作地址
   */
  function deleteBucket(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucket',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          method: 'DELETE',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 设置 Bucket 的 权限列表
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   *     @param  {String}  params.ACL                 用户自定义文件权限，可以设置：private，public-read；默认值：private，非必须
   *     @param  {String}  params.GrantRead           赋予被授权者读的权限，格式x-cos-grant-read: uin=" ",uin=" "，非必须
   *     @param  {String}  params.GrantWrite          赋予被授权者写的权限，格式x-cos-grant-write: uin=" ",uin=" "，非必须
   *     @param  {String}  params.GrantFullControl    赋予被授权者读写权限，格式x-cos-grant-full-control: uin=" ",uin=" "，非必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   */
  function putBucketAcl(params, callback) {
      var headers = params.Headers;

      var xml = '';
      if (params['AccessControlPolicy']) {
          var AccessControlPolicy = util_1.clone(params['AccessControlPolicy'] || {});
          var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
          Grants = util_1.isArray(Grants) ? Grants : [Grants];
          delete AccessControlPolicy.Grant;
          delete AccessControlPolicy.Grants;
          AccessControlPolicy.AccessControlList = {Grant: Grants};
          xml = util_1.json2xml({AccessControlPolicy: AccessControlPolicy});

          headers['Content-Type'] = 'application/xml';
          headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));
      }

      // Grant Header 去重
      util_1.each(headers, function (val, key) {
          if (key.indexOf('x-cos-grant-') === 0) {
              headers[key] = uniqGrant(headers[key]);
          }
      });

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketACL',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: headers,
          action: 'acl',
          body: xml,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的 权限列表
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   *     @return  {Object}  data.AccessControlPolicy  访问权限信息
   */
  function getBucketAcl(params, callback) {

      submitRequest.call(this, {
          Action: 'name/cos:GetBucketACL',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'acl',
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var AccessControlPolicy = data.AccessControlPolicy || {};
          var Owner = AccessControlPolicy.Owner || {};
          var Grant = AccessControlPolicy.AccessControlList.Grant || [];
          Grant = util_1.isArray(Grant) ? Grant : [Grant];
          var result = decodeAcl(AccessControlPolicy);
          if (data.headers && data.headers['x-cos-acl']) {
              result.ACL = data.headers['x-cos-acl'];
          }
          result = util_1.extend(result, {
              Owner: Owner,
              Grants: Grant,
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  /**
   * 设置 Bucket 的 跨域设置
   * @param  {Object}  params                             参数对象，必须
   *     @param  {String}  params.Bucket                  Bucket名称，必须
   *     @param  {String}  params.Region                  地域名称，必须
   *     @param  {Object}  params.CORSConfiguration       相关的跨域设置，必须
   * @param  {Array}  params.CORSConfiguration.CORSRules  对应的跨域规则
   * @param  {Function}  callback                         回调函数，必须
   * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                              返回的数据
   */
  function putBucketCors(params, callback) {

      var CORSConfiguration = params['CORSConfiguration'] || {};
      var CORSRules = CORSConfiguration['CORSRules'] || params['CORSRules'] || [];
      CORSRules = util_1.clone(util_1.isArray(CORSRules) ? CORSRules : [CORSRules]);
      util_1.each(CORSRules, function (rule) {
          util_1.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key, k) {
              var sKey = key + 's';
              var val = rule[sKey] || rule[key] || [];
              delete rule[sKey];
              rule[key] = util_1.isArray(val) ? val : [val];
          });
      });

      var xml = util_1.json2xml({CORSConfiguration: {CORSRule: CORSRules}});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketCORS',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'cors',
          headers: headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的 跨域设置
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   *     @return  {Object}  data.CORSRules            Bucket的跨域设置
   */
  function getBucketCors(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketCORS',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'cors',
      }, function (err, data) {
          if (err) {
              if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchCORSConfiguration') {
                  var result = {
                      CORSRules: [],
                      statusCode: err.statusCode,
                  };
                  err.headers && (result.headers = err.headers);
                  callback(null, result);
              } else {
                  callback(err);
              }
              return;
          }
          var CORSConfiguration = data.CORSConfiguration || {};
          var CORSRules = CORSConfiguration.CORSRules || CORSConfiguration.CORSRule || [];
          CORSRules = util_1.clone(util_1.isArray(CORSRules) ? CORSRules : [CORSRules]);

          util_1.each(CORSRules, function (rule) {
              util_1.each(['AllowedOrigin', 'AllowedHeader', 'AllowedMethod', 'ExposeHeader'], function (key, j) {
                  var sKey = key + 's';
                  var val = rule[sKey] || rule[key] || [];
                  delete rule[key];
                  rule[sKey] = util_1.isArray(val) ? val : [val];
              });
          });

          callback(null, {
              CORSRules: CORSRules,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 删除 Bucket 的 跨域设置
   * @param  {Object}  params                 参数对象，必须
   *     @param  {String}  params.Bucket      Bucket名称，必须
   *     @param  {String}  params.Region      地域名称，必须
   * @param  {Function}  callback             回调函数，必须
   * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                  返回的数据
   */
  function deleteBucketCors(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketCORS',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'cors',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode || err.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的 地域信息
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据，包含地域信息 LocationConstraint
   */
  function getBucketLocation(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketLocation',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'location',
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          callback(null, data);
      });
  }

  function putBucketPolicy(params, callback) {
      var Policy = params['Policy'];
      var PolicyStr = Policy;
      try {
          if (typeof Policy === 'string') {
              Policy = JSON.parse(PolicyStr);
          } else {
              PolicyStr = JSON.stringify(Policy);
          }
      } catch (e) {
          callback({error: 'Policy format error'});
      }

      var headers = params.Headers;
      headers['Content-Type'] = 'application/json';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(PolicyStr));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketPolicy',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          action: 'policy',
          body: util_1.isBrowser ? PolicyStr : Policy,
          headers: headers,
          json: true,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的读取权限策略
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据
   */
  function getBucketPolicy(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketPolicy',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'policy',
          rawBody: true,
      }, function (err, data) {
          if (err) {
              if (err.statusCode && err.statusCode === 403) {
                  return callback({ErrorStatus: 'Access Denied'});
              }
              if (err.statusCode && err.statusCode === 405) {
                  return callback({ErrorStatus: 'Method Not Allowed'});
              }
              if (err.statusCode && err.statusCode === 404) {
                  return callback({ErrorStatus: 'Policy Not Found'});
              }
              return callback(err);
          }
          var Policy = {};
          try {
              Policy = JSON.parse(data.body);
          } catch (e) {
          }
          callback(null, {
              Policy: Policy,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 删除 Bucket 的 跨域设置
   * @param  {Object}  params                 参数对象，必须
   *     @param  {String}  params.Bucket      Bucket名称，必须
   *     @param  {String}  params.Region      地域名称，必须
   * @param  {Function}  callback             回调函数，必须
   * @return  {Object}  err                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                  返回的数据
   */
  function deleteBucketPolicy(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketPolicy',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'policy',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode || err.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 设置 Bucket 的标签
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   *     @param  {Array}   params.TagSet  标签设置，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据
   */
  function putBucketTagging(params, callback) {

      var Tagging = params['Tagging'] || {};
      var Tags = Tagging.TagSet || Tagging.Tags || params['Tags'] || [];
      Tags = util_1.clone(util_1.isArray(Tags) ? Tags : [Tags]);
      var xml = util_1.json2xml({Tagging: {TagSet: {Tag: Tags}}});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketTagging',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'tagging',
          headers: headers,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的标签设置
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据
   */
  function getBucketTagging(params, callback) {

      submitRequest.call(this, {
          Action: 'name/cos:GetBucketTagging',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'tagging',
      }, function (err, data) {
          if (err) {
              if (err.statusCode === 404 && err.error && (err.error === "Not Found" || err.error.Code === 'NoSuchTagSet')) {
                  var result = {
                      Tags: [],
                      statusCode: err.statusCode,
                  };
                  err.headers && (result.headers = err.headers);
                  callback(null, result);
              } else {
                  callback(err);
              }
              return;
          }
          var Tags = [];
          try {
              Tags = data.Tagging.TagSet.Tag || [];
          } catch (e) {
          }
          Tags = util_1.clone(util_1.isArray(Tags) ? Tags : [Tags]);
          callback(null, {
              Tags: Tags,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 删除 Bucket 的 标签设置
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回的数据
   */
  function deleteBucketTagging(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketTagging',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'tagging',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function putBucketLifecycle(params, callback) {

      var LifecycleConfiguration = params['LifecycleConfiguration'] || {};
      var Rules = LifecycleConfiguration.Rules || params.Rules || [];
      Rules = util_1.clone(Rules);
      var xml = util_1.json2xml({LifecycleConfiguration: {Rule: Rules}});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketLifecycle',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'lifecycle',
          headers: headers,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function getBucketLifecycle(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketLifecycle',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'lifecycle',
      }, function (err, data) {
          if (err) {
              if (err.statusCode === 404 && err.error && err.error.Code === 'NoSuchLifecycleConfiguration') {
                  var result = {
                      Rules: [],
                      statusCode: err.statusCode,
                  };
                  err.headers && (result.headers = err.headers);
                  callback(null, result);
              } else {
                  callback(err);
              }
              return;
          }
          var Rules = [];
          try {
              Rules = data.LifecycleConfiguration.Rule || [];
          } catch (e) {
          }
          Rules = util_1.clone(util_1.isArray(Rules) ? Rules : [Rules]);
          callback(null, {
              Rules: Rules,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function deleteBucketLifecycle(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketLifecycle',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'lifecycle',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function putBucketVersioning(params, callback) {

      if (!params['VersioningConfiguration']) {
          callback({error: 'missing param VersioningConfiguration'});
          return;
      }
      var VersioningConfiguration = params['VersioningConfiguration'] || {};
      var xml = util_1.json2xml({VersioningConfiguration: VersioningConfiguration});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketVersioning',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'versioning',
          headers: headers,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function getBucketVersioning(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketVersioning',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'versioning',
      }, function (err, data) {
          if (!err) {
              !data.VersioningConfiguration && (data.VersioningConfiguration = {});
          }
          callback(err, data);
      });
  }

  function putBucketReplication(params, callback) {
      var ReplicationConfiguration = util_1.clone(params.ReplicationConfiguration);
      var xml = util_1.json2xml({ReplicationConfiguration: ReplicationConfiguration});
      xml = xml.replace(/<(\/?)Rules>/ig, '<$1Rule>');
      xml = xml.replace(/<(\/?)Tags>/ig, '<$1Tag>');

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketReplication',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'replication',
          headers: headers,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  function getBucketReplication(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:GetBucketReplication',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'replication',
      }, function (err, data) {
          if (err) {
              if (err.statusCode === 404 && err.error && (err.error === 'Not Found' || err.error.Code === 'ReplicationConfigurationnotFoundError')) {
                  var result = {
                      ReplicationConfiguration: {Rules: []},
                      statusCode: err.statusCode,
                  };
                  err.headers && (result.headers = err.headers);
                  callback(null, result);
              } else {
                  callback(err);
              }
              return;
          }
          if (!err) {
              !data.ReplicationConfiguration && (data.ReplicationConfiguration = {});
          }
          if (data.ReplicationConfiguration.Rule) {
              data.ReplicationConfiguration.Rules = data.ReplicationConfiguration.Rule;
              delete data.ReplicationConfiguration.Rule;
          }
          callback(err, data);
      });
  }

  function deleteBucketReplication(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketReplication',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'replication',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 设置 Bucket 静态网站配置信息
   * @param  {Object}  params                                                 参数对象，必须
   *     @param  {String}  params.Bucket                                      Bucket名称，必须
   *     @param  {String}  params.Region                                      地域名称，必须
   *     @param  {Object}  params.WebsiteConfiguration                        地域名称，必须
   *         @param  {Object}   WebsiteConfiguration.IndexDocument            索引文档，必须
   *         @param  {Object}   WebsiteConfiguration.ErrorDocument            错误文档，非必须
   *         @param  {Object}   WebsiteConfiguration.RedirectAllRequestsTo    重定向所有请求，非必须
   *         @param  {Array}   params.RoutingRules                            重定向规则，非必须
   * @param  {Function}  callback                                             回调函数，必须
   * @return  {Object}  err                                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                                                  返回数据
   */
  function putBucketWebsite(params, callback) {

      if (!params['WebsiteConfiguration']) {
          callback({ error: 'missing param WebsiteConfiguration' });
          return;
      }

      var WebsiteConfiguration = util_1.clone(params['WebsiteConfiguration'] || {});
      var RoutingRules = WebsiteConfiguration['RoutingRules'] || WebsiteConfiguration['RoutingRule'] || [];
      RoutingRules = util_1.isArray(RoutingRules) ? RoutingRules : [RoutingRules];
      delete WebsiteConfiguration.RoutingRule;
      delete WebsiteConfiguration.RoutingRules;
      RoutingRules.length > 0 && (WebsiteConfiguration.RoutingRules = { RoutingRule: RoutingRules });
      var xml = util_1.json2xml({ WebsiteConfiguration: WebsiteConfiguration });

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:PutBucketWebsite',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'website',
          headers: headers,
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 Bucket 的静态网站配置信息
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据
   */
  function getBucketWebsite(params, callback) {

      submitRequest.call(this, {
          Action: 'name/cos:GetBucketWebsite',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: params.Headers,
          action: 'website',
      }, function (err, data) {
          if (err) {
              if(err.statusCode === 404 && err.error.Code === 'NoSuchWebsiteConfiguration'){
                  var result = {
                      WebsiteConfiguration: {},
                      statusCode: err.statusCode,
                  };
                  err.headers && (result.headers = err.headers);
                  callback(null, result);
              } else {
                  callback(err);
              }
              return;
          }

          var WebsiteConfiguration = data.WebsiteConfiguration || {};
          if (WebsiteConfiguration['RoutingRules']) {
              var RoutingRules = util_1.clone(WebsiteConfiguration['RoutingRules'].RoutingRule || []);
              RoutingRules = util_1.makeArray(RoutingRules);
              WebsiteConfiguration.RoutingRules = RoutingRules;
          }

          callback(null, {
              WebsiteConfiguration: WebsiteConfiguration,
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 删除 Bucket 的静态网站配置
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回数据
   */
  function deleteBucketWebsite(params, callback) {

      submitRequest.call(this, {
          Action: 'name/cos:DeleteBucketWebsite',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          action: 'website',
      }, function (err, data) {
          if (err && err.statusCode === 204) {
              return callback(null, {statusCode: err.statusCode});
          } else if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  // Object 相关

  /**
   * 取回对应Object的元数据，Head的权限与Get的权限一致
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   *     @param  {String}  params.Key                 文件名称，必须
   *     @param  {String}  params.IfModifiedSince     当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          为指定 object 的元数据，如果设置了 IfModifiedSince ，且文件未修改，则返回一个对象，NotModified 属性为 true
   *     @return  {Boolean}  data.NotModified         是否在 IfModifiedSince 时间点之后未修改该 object，则为 true
   */
  function headObject(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:HeadObject',
          method: 'HEAD',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          VersionId: params.VersionId,
          headers: params.Headers,
      }, function (err, data) {
          if (err) {
              var statusCode = err.statusCode;
              if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
                  return callback(null, {
                      NotModified: true,
                      statusCode: statusCode,
                  });
              }
              return callback(err);
          }
          if (data.headers && data.headers.etag) {
              data.ETag = data.headers && data.headers.etag;
          }
          callback(null, data);
      });
  }


  function listObjectVersions(params, callback) {
      var reqParams = {};
      reqParams['prefix'] = params['Prefix'] || '';
      reqParams['delimiter'] = params['Delimiter'];
      reqParams['key-marker'] = params['KeyMarker'];
      reqParams['version-id-marker'] = params['VersionIdMarker'];
      reqParams['max-keys'] = params['MaxKeys'];
      reqParams['encoding-type'] = params['EncodingType'];

      submitRequest.call(this, {
          Action: 'name/cos:GetBucketObjectVersions',
          ResourceKey: reqParams['prefix'],
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          qs: reqParams,
          action: 'versions',
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var ListVersionsResult = data.ListVersionsResult || {};
          var DeleteMarkers = ListVersionsResult.DeleteMarker || [];
          DeleteMarkers = util_1.isArray(DeleteMarkers) ? DeleteMarkers : [DeleteMarkers];
          var Versions = ListVersionsResult.Version || [];
          Versions = util_1.isArray(Versions) ? Versions : [Versions];

          var result = util_1.clone(ListVersionsResult);
          delete result.DeleteMarker;
          delete result.Version;
          util_1.extend(result, {
              DeleteMarkers: DeleteMarkers,
              Versions: Versions,
              statusCode: data.statusCode,
              headers: data.headers,
          });

          callback(null, result);
      });
  }

  /**
   * 下载 object
   * @param  {Object}  params                                 参数对象，必须
   *     @param  {String}  params.Bucket                      Bucket名称，必须
   *     @param  {String}  params.Region                      地域名称，必须
   *     @param  {String}  params.Key                         文件名称，必须
   *     @param  {WriteStream}  params.Output                 文件写入流，非必须
   *     @param  {String}  params.IfModifiedSince             当Object在指定时间后被修改，则返回对应Object元信息，否则返回304，非必须
   *     @param  {String}  params.IfUnmodifiedSince           如果文件修改时间早于或等于指定时间，才返回文件内容。否则返回 412 (precondition failed)，非必须
   *     @param  {String}  params.IfMatch                     当 ETag 与指定的内容一致，才返回文件。否则返回 412 (precondition failed)，非必须
   *     @param  {String}  params.IfNoneMatch                 当 ETag 与指定的内容不一致，才返回文件。否则返回304 (not modified)，非必须
   *     @param  {String}  params.ResponseContentType         设置返回头部中的 Content-Type 参数，非必须
   *     @param  {String}  params.ResponseContentLanguage     设置返回头部中的 Content-Language 参数，非必须
   *     @param  {String}  params.ResponseExpires             设置返回头部中的 Content-Expires 参数，非必须
   *     @param  {String}  params.ResponseCacheControl        设置返回头部中的 Cache-Control 参数，非必须
   *     @param  {String}  params.ResponseContentDisposition  设置返回头部中的 Content-Disposition 参数，非必须
   *     @param  {String}  params.ResponseContentEncoding     设置返回头部中的 Content-Encoding 参数，非必须
   * @param  {Function}  callback                             回调函数，必须
   * @param  {Object}  err                                    请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @param  {Object}  data                                   为对应的 object 数据，包括 body 和 headers
   */
  function getObject(params, callback) {
      var reqParams = {};

      reqParams['response-content-type'] = params['ResponseContentType'];
      reqParams['response-content-language'] = params['ResponseContentLanguage'];
      reqParams['response-expires'] = params['ResponseExpires'];
      reqParams['response-cache-control'] = params['ResponseCacheControl'];
      reqParams['response-content-disposition'] = params['ResponseContentDisposition'];
      reqParams['response-content-encoding'] = params['ResponseContentEncoding'];

      // 如果用户自己传入了 output
      submitRequest.call(this, {
          Action: 'name/cos:GetObject',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          VersionId: params.VersionId,
          headers: params.Headers,
          qs: reqParams,
          rawBody: true,
      }, function (err, data) {
          if (err) {
              var statusCode = err.statusCode;
              if (params.Headers['If-Modified-Since'] && statusCode && statusCode === 304) {
                  return callback(null, {
                      NotModified: true
                  });
              }
              return callback(err);
          }
          var result = {};
          result.Body = data.body;
          if (data.headers && data.headers.etag) {
              result.ETag = data.headers && data.headers.etag;
          }
          util_1.extend(result, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });

  }

  /**
   * 上传 object
   * @param  {Object} params                                          参数对象，必须
   *     @param  {String}  params.Bucket                              Bucket名称，必须
   *     @param  {String}  params.Region                              地域名称，必须
   *     @param  {String}  params.Key                                 文件名称，必须
   *     @param  {File || Blob || String}  params.Body                上传文件对象或字符串，必须
   *     @param  {String}  params.CacheControl                        RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ContentDisposition                  RFC 2616 中定义的文件名称，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ContentEncoding                     RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ContentLength                       RFC 2616 中定义的 HTTP 请求内容长度（字节），必须
   *     @param  {String}  params.ContentType                         RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
   *     @param  {String}  params.Expect                              当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
   *     @param  {String}  params.Expires                             RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ACL                                 允许用户自定义文件权限，有效值：private | public-read，非必须
   *     @param  {String}  params.GrantRead                           赋予被授权者读取对象的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
   *     @param  {String}  params.GrantReadAcp                        赋予被授权者读取对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
   *     @param  {String}  params.GrantWriteAcp                       赋予被授权者写入对象的访问控制列表（ACL）的权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
   *     @param  {String}  params.GrantFullControl                    赋予被授权者操作对象的所有权限，格式：id="[OwnerUin]"，可使用半角逗号（,）分隔多组被授权者，非必须
   *     @param  {String}  params.StorageClass                        设置对象的存储级别，枚举值：STANDARD、STANDARD_IA、ARCHIVE，默认值：STANDARD，非必须
   *     @param  {String}  params.x-cos-meta-*                        允许用户自定义的头部信息，将作为对象的元数据保存。大小限制2KB，非必须
   *     @param  {String}  params.ContentSha1                         RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验，非必须
   *     @param  {String}  params.ServerSideEncryption                支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
   *     @param  {Function}  params.onProgress                        上传进度回调函数
   * @param  {Function}  callback                                     回调函数，必须
   * @return  {Object}  err                                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                                          为对应的 object 数据
   *     @return  {String}  data.ETag                                 为对应上传文件的 ETag 值
   */
  function putObject(params, callback) {
      var self = this;
      var FileSize = params.ContentLength;
      var onProgress = util_1.throttleOnProgress.call(self, FileSize, params.onProgress);

      // 特殊处理 Cache-Control
      var headers = params.Headers;
      !headers['Cache-Control'] && (headers['Cache-Control'] = '');

      // 获取 File 或 Blob 的 type 属性，如果有，作为文件 Content-Type
      var ContentType = headers['Content-Type'] || (params.Body && params.Body.type);
      !headers['Content-Type'] && ContentType && (headers['Content-Type'] = ContentType);

      var needCalcMd5 = params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5 || self.options.UploadCheckContentMd5;
      util_1.getBodyMd5(needCalcMd5, params.Body, function (md5) {
          if (md5) {
              if (self.options.UploadCheckContentMd5) params.Headers['Content-MD5'] = util_1.binaryBase64(md5);
              if (params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5) params.Headers['x-cos-meta-md5'] = md5;
          }

          if (params.ContentLength !== undefined) {
              params.Headers['Content-Length'] = params.ContentLength;
          }
          onProgress(null, true); // 任务状态开始 uploading
          submitRequest.call(self, {
              Action: 'name/cos:PutObject',
              TaskId: params.TaskId,
              method: 'PUT',
              Bucket: params.Bucket,
              Region: params.Region,
              Key: params.Key,
              headers: params.Headers,
              body: params.Body,
              onProgress: onProgress,
          }, function (err, data) {
              if (err) {
                  onProgress(null, true);
                  return callback(err);
              }
              onProgress({loaded: FileSize, total: FileSize}, true);
              if (data) {
                  var url = getUrl({
                      ForcePathStyle: self.options.ForcePathStyle,
                      protocol: self.options.Protocol,
                      domain: self.options.Domain,
                      bucket: params.Bucket,
                      region: params.Region,
                      object: params.Key,
                  });
                  url = url.substr(url.indexOf('://') + 3);
                  var result = {
                      Location: url,
                      statusCode: data.statusCode,
                      headers: data.headers,
                  };
                  if (data.headers && data.headers.etag) {
                      result.ETag = data.headers.etag;
                  }
                  return callback(null, result);
              }
              callback(null, data);
          });
      }, params.onHashProgress);
  }

  /**
   * 删除 object
   * @param  {Object}  params                     参数对象，必须
   *     @param  {String}  params.Bucket          Bucket名称，必须
   *     @param  {String}  params.Region          地域名称，必须
   *     @param  {String}  params.Key             object名称，必须
   * @param  {Function}  callback                 回调函数，必须
   * @param  {Object}  err                        请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @param  {Object}  data                       删除操作成功之后返回的数据
   */
  function deleteObject(params, callback) {
      submitRequest.call(this, {
          Action: 'name/cos:DeleteObject',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: params.Headers,
          VersionId: params.VersionId,
      }, function (err, data) {
          if (err) {
              var statusCode = err.statusCode;
              if (statusCode && statusCode === 204) {
                  return callback(null, {statusCode: statusCode});
              } else if (statusCode && statusCode === 404) {
                  return callback(null, {BucketNotFound: true, statusCode: statusCode,});
              } else {
                  return callback(err);
              }
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取 object 的 权限列表
   * @param  {Object}  params                         参数对象，必须
   *     @param  {String}  params.Bucket              Bucket名称，必须
   *     @param  {String}  params.Region              地域名称，必须
   *     @param  {String}  params.Key                 object名称，必须
   * @param  {Function}  callback                     回调函数，必须
   * @return  {Object}  err                           请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                          返回的数据
   *     @return  {Object}  data.AccessControlPolicy  权限列表
   */
  function getObjectAcl(params, callback) {

      submitRequest.call(this, {
          Action: 'name/cos:GetObjectACL',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: params.Headers,
          action: 'acl',
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var AccessControlPolicy = data.AccessControlPolicy || {};
          var Owner = AccessControlPolicy.Owner || {};
          var Grant = AccessControlPolicy.AccessControlList && AccessControlPolicy.AccessControlList.Grant || [];
          Grant = util_1.isArray(Grant) ? Grant : [Grant];
          var result = decodeAcl(AccessControlPolicy);
          if (data.headers && data.headers['x-cos-acl']) {
              result.ACL = data.headers['x-cos-acl'];
          }
          result = util_1.extend(result, {
              Owner: Owner,
              Grants: Grant,
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  /**
   * 设置 object 的 权限列表
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   *     @param  {String}  params.Key     object名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回的数据
   */
  function putObjectAcl(params, callback) {
      var headers = params.Headers;

      var xml = '';
      if (params['AccessControlPolicy']) {
          var AccessControlPolicy = util_1.clone(params['AccessControlPolicy'] || {});
          var Grants = AccessControlPolicy.Grants || AccessControlPolicy.Grant;
          Grants = util_1.isArray(Grants) ? Grants : [Grants];
          delete AccessControlPolicy.Grant;
          delete AccessControlPolicy.Grants;
          AccessControlPolicy.AccessControlList = {Grant: Grants};
          xml = util_1.json2xml({AccessControlPolicy: AccessControlPolicy});

          headers['Content-Type'] = 'application/xml';
          headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));
      }

      // Grant Header 去重
      util_1.each(headers, function (val, key) {
          if (key.indexOf('x-cos-grant-') === 0) {
              headers[key] = uniqGrant(headers[key]);
          }
      });

      submitRequest.call(this, {
          Action: 'name/cos:PutObjectACL',
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          action: 'acl',
          headers: headers,
          body: xml,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * Options Object请求实现跨域访问的预请求。即发出一个 OPTIONS 请求给服务器以确认是否可以进行跨域操作。
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Bucket  Bucket名称，必须
   *     @param  {String}  params.Region  地域名称，必须
   *     @param  {String}  params.Key     object名称，必须
   * @param  {Function}  callback         回调函数，必须
   * @return  {Object}  err               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data              返回的数据
   */
  function optionsObject(params, callback) {

      var headers = params.Headers;
      headers['Origin'] = params['Origin'];
      headers['Access-Control-Request-Method'] = params['AccessControlRequestMethod'];
      headers['Access-Control-Request-Headers'] = params['AccessControlRequestHeaders'];

      submitRequest.call(this, {
          Action: 'name/cos:OptionsObject',
          method: 'OPTIONS',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: headers,
      }, function (err, data) {
          if (err) {
              if (err.statusCode && err.statusCode === 403) {
                  return callback(null, {
                      OptionsForbidden: true,
                      statusCode: err.statusCode
                  });
              }
              return callback(err);
          }

          var headers = data.headers || {};
          callback(null, {
              AccessControlAllowOrigin: headers['access-control-allow-origin'],
              AccessControlAllowMethods: headers['access-control-allow-methods'],
              AccessControlAllowHeaders: headers['access-control-allow-headers'],
              AccessControlExposeHeaders: headers['access-control-expose-headers'],
              AccessControlMaxAge: headers['access-control-max-age'],
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * @param  {Object}                                     参数列表
   *     @param  {String}  Bucket                         Bucket 名称
   *     @param  {String}  Region                         地域名称
   *     @param  {String}  Key                            文件名称
   *     @param  {String}  CopySource                     源文件URL绝对路径，可以通过versionid子资源指定历史版本
   *     @param  {String}  ACL                            允许用户自定义文件权限。有效值：private，public-read默认值：private。
   *     @param  {String}  GrantRead                      赋予被授权者读的权限，格式 x-cos-grant-read: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
   *     @param  {String}  GrantWrite                     赋予被授权者写的权限，格式 x-cos-grant-write: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
   *     @param  {String}  GrantFullControl               赋予被授权者读写权限，格式 x-cos-grant-full-control: uin=" ",uin=" "，当需要给子账户授权时，uin="RootAcountID/SubAccountID"，当需要给根账户授权时，uin="RootAcountID"。
   *     @param  {String}  MetadataDirective              是否拷贝元数据，枚举值：Copy, Replaced，默认值Copy。假如标记为Copy，忽略Header中的用户元数据信息直接复制；假如标记为Replaced，按Header信息修改元数据。当目标路径和原路径一致，即用户试图修改元数据时，必须为Replaced
   *     @param  {String}  CopySourceIfModifiedSince      当Object在指定时间后被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-None-Match一起使用，与其他条件联合使用返回冲突。
   *     @param  {String}  CopySourceIfUnmodifiedSince    当Object在指定时间后未被修改，则执行操作，否则返回412。可与x-cos-copy-source-If-Match一起使用，与其他条件联合使用返回冲突。
   *     @param  {String}  CopySourceIfMatch              当Object的Etag和给定一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Unmodified-Since一起使用，与其他条件联合使用返回冲突。
   *     @param  {String}  CopySourceIfNoneMatch          当Object的Etag和给定不一致时，则执行操作，否则返回412。可与x-cos-copy-source-If-Modified-Since一起使用，与其他条件联合使用返回冲突。
   *     @param  {String}  StorageClass                   存储级别，枚举值：存储级别，枚举值：Standard, Standard_IA，Archive；默认值：Standard
   *     @param  {String}  CacheControl                   指定所有缓存机制在整个请求/响应链中必须服从的指令。
   *     @param  {String}  ContentDisposition             MIME 协议的扩展，MIME 协议指示 MIME 用户代理如何显示附加的文件
   *     @param  {String}  ContentEncoding                HTTP 中用来对「采用何种编码格式传输正文」进行协定的一对头部字段
   *     @param  {String}  ContentLength                  设置响应消息的实体内容的大小，单位为字节
   *     @param  {String}  ContentType                    RFC 2616 中定义的 HTTP 请求内容类型（MIME），例如text/plain
   *     @param  {String}  Expect                         请求的特定的服务器行为
   *     @param  {String}  Expires                        响应过期的日期和时间
   *     @param  {String}  params.ServerSideEncryption   支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
   *     @param  {String}  ContentLanguage                指定内容语言
   *     @param  {String}  x-cos-meta-*                   允许用户自定义的头部信息，将作为 Object 元数据返回。大小限制2K。
   */
  function putObjectCopy(params, callback) {

      // 特殊处理 Cache-Control
      var headers = params.Headers;
      !headers['Cache-Control'] && (headers['Cache-Control'] = '');

      var CopySource = params.CopySource || '';
      var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);
      if (!m) {
          callback({error: 'CopySource format error'});
          return;
      }

      var SourceBucket = m[1];
      var SourceRegion = m[3];
      var SourceKey = decodeURIComponent(m[4]);

      submitRequest.call(this, {
          Scope: [{
              action: 'name/cos:GetObject',
              bucket: SourceBucket,
              region: SourceRegion,
              prefix: SourceKey,
          }, {
              action: 'name/cos:PutObject',
              bucket: params.Bucket,
              region: params.Region,
              prefix: params.Key,
          }],
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          VersionId: params.VersionId,
          headers: params.Headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var result = util_1.clone(data.CopyObjectResult || {});
          util_1.extend(result, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  function uploadPartCopy(params, callback) {

      var CopySource = params.CopySource || '';
      var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);
      if (!m) {
          callback({error: 'CopySource format error'});
          return;
      }

      var SourceBucket = m[1];
      var SourceRegion = m[3];
      var SourceKey = decodeURIComponent(m[4]);

      submitRequest.call(this, {
          Scope: [{
              action: 'name/cos:GetObject',
              bucket: SourceBucket,
              region: SourceRegion,
              prefix: SourceKey,
          }, {
              action: 'name/cos:PutObject',
              bucket: params.Bucket,
              region: params.Region,
              prefix: params.Key,
          }],
          method: 'PUT',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          VersionId: params.VersionId,
          qs: {
              partNumber: params['PartNumber'],
              uploadId: params['UploadId'],
          },
          headers: params.Headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var result = util_1.clone(data.CopyPartResult || {});
          util_1.extend(result, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  function deleteMultipleObject(params, callback) {
      var Objects = params.Objects || [];
      var Quiet = params.Quiet;
      Objects = util_1.isArray(Objects) ? Objects : [Objects];

      var xml = util_1.json2xml({Delete: {Object: Objects, Quiet: Quiet || false}});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      var Scope = util_1.map(Objects, function (v) {
          return {
              action: 'name/cos:DeleteObject',
              bucket: params.Bucket,
              region: params.Region,
              prefix: v.Key,
          };
      });

      submitRequest.call(this, {
          Scope: Scope,
          method: 'POST',
          Bucket: params.Bucket,
          Region: params.Region,
          body: xml,
          action: 'delete',
          headers: headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var DeleteResult = data.DeleteResult || {};
          var Deleted = DeleteResult.Deleted || [];
          var Errors = DeleteResult.Error || [];

          Deleted = util_1.isArray(Deleted) ? Deleted : [Deleted];
          Errors = util_1.isArray(Errors) ? Errors : [Errors];

          var result = util_1.clone(DeleteResult);
          util_1.extend(result, {
              Error: Errors,
              Deleted: Deleted,
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  function restoreObject(params, callback) {
      var headers = params.Headers;
      if (!params['RestoreRequest']) {
          callback({error: 'missing param RestoreRequest'});
          return;
      }

      var RestoreRequest = params.RestoreRequest || {};
      var xml = util_1.json2xml({RestoreRequest: RestoreRequest});

      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:RestoreObject',
          method: 'POST',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          VersionId: params.VersionId,
          body: xml,
          action: 'restore',
          headers: headers,
      }, function (err, data) {
          callback(err, data);
      });
  }


  // 分块上传


  /**
   * 初始化分块上传
   * @param  {Object}  params                                     参数对象，必须
   *     @param  {String}  params.Bucket                          Bucket名称，必须
   *     @param  {String}  params.Region                          地域名称，必须
   *     @param  {String}  params.Key                             object名称，必须
   *     @param  {String}  params.UploadId                        object名称，必须
   *     @param  {String}  params.CacheControl                    RFC 2616 中定义的缓存策略，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ContentDisposition              RFC 2616 中定义的文件名称，将作为 Object 元数据保存    ，非必须
   *     @param  {String}  params.ContentEncoding                 RFC 2616 中定义的编码格式，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ContentType                     RFC 2616 中定义的内容类型（MIME），将作为 Object 元数据保存，非必须
   *     @param  {String}  params.Expires                         RFC 2616 中定义的过期时间，将作为 Object 元数据保存，非必须
   *     @param  {String}  params.ACL                             允许用户自定义文件权限，非必须
   *     @param  {String}  params.GrantRead                       赋予被授权者读的权限 ，非必须
   *     @param  {String}  params.GrantWrite                      赋予被授权者写的权限 ，非必须
   *     @param  {String}  params.GrantFullControl                赋予被授权者读写权限 ，非必须
   *     @param  {String}  params.StorageClass                    设置Object的存储级别，枚举值：Standard，Standard_IA，Archive，非必须
   *     @param  {String}  params.ServerSideEncryption           支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
   * @param  {Function}  callback                                 回调函数，必须
   * @return  {Object}  err                                       请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                                      返回的数据
   */
  function multipartInit(params, callback) {

      var self = this;
      // 特殊处理 Cache-Control
      var headers = params.Headers;
      !headers['Cache-Control'] && (headers['Cache-Control'] = '');
      util_1.getBodyMd5(params.Body && (params.UploadAddMetaMd5 || self.options.UploadAddMetaMd5), params.Body, function (md5) {
          if (md5) params.Headers['x-cos-meta-md5'] = md5;
          submitRequest.call(self, {
              Action: 'name/cos:InitiateMultipartUpload',
              method: 'POST',
              Bucket: params.Bucket,
              Region: params.Region,
              Key: params.Key,
              action: 'uploads',
              headers: params.Headers,
          }, function (err, data) {
              if (err) {
                  return callback(err);
              }
              data = util_1.clone(data || {});
              if (data && data.InitiateMultipartUploadResult) {
                  return callback(null, util_1.extend(data.InitiateMultipartUploadResult, {
                      statusCode: data.statusCode,
                      headers: data.headers,
                  }));
              }
              callback(null, data);
          });
      }, params.onHashProgress);
  }

  /**
   * 分块上传
   * @param  {Object}  params                                 参数对象，必须
   *     @param  {String}  params.Bucket                      Bucket名称，必须
   *     @param  {String}  params.Region                      地域名称，必须
   *     @param  {String}  params.Key                         object名称，必须
   *     @param  {File || Blob || String}  params.Body        上传文件对象或字符串
   *     @param  {String} params.ContentLength                RFC 2616 中定义的 HTTP 请求内容长度（字节），非必须
   *     @param  {String} params.Expect                       当使用 Expect: 100-continue 时，在收到服务端确认后，才会发送请求内容，非必须
   *     @param  {String} params.ServerSideEncryption         支持按照指定的加密算法进行服务端数据加密，格式 x-cos-server-side-encryption: "AES256"，非必须
   *     @param  {String} params.ContentSha1                  RFC 3174 中定义的 160-bit 内容 SHA-1 算法校验值，非必须
   * @param  {Function}  callback                             回调函数，必须
   *     @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   *     @return  {Object}  data                              返回的数据
   *     @return  {Object}  data.ETag                         返回的文件分块 sha1 值
   */
  function multipartUpload(params, callback) {

      var self = this;
      util_1.getFileSize('multipartUpload', params, function () {
          util_1.getBodyMd5(self.options.UploadCheckContentMd5, params.Body, function (md5) {
              if (md5) params.Headers['Content-MD5'] = util_1.binaryBase64(md5);
              submitRequest.call(self, {
                  Action: 'name/cos:UploadPart',
                  TaskId: params.TaskId,
                  method: 'PUT',
                  Bucket: params.Bucket,
                  Region: params.Region,
                  Key: params.Key,
                  qs: {
                      partNumber: params['PartNumber'],
                      uploadId: params['UploadId'],
                  },
                  headers: params.Headers,
                  onProgress: params.onProgress,
                  body: params.Body || null
              }, function (err, data) {
                  if (err) {
                      return callback(err);
                  }
                  data['headers'] = data['headers'] || {};
                  callback(null, {
                      ETag: data['headers']['etag'] || '',
                      statusCode: data.statusCode,
                      headers: data.headers,
                  });
              });
          });
      });

  }

  /**
   * 完成分块上传
   * @param  {Object}  params                             参数对象，必须
   *     @param  {String}  params.Bucket                  Bucket名称，必须
   *     @param  {String}  params.Region                  地域名称，必须
   *     @param  {String}  params.Key                     object名称，必须
   *     @param  {Array}   params.Parts                   分块信息列表，必须
   *     @param  {String}  params.Parts[i].PartNumber     块编号，必须
   *     @param  {String}  params.Parts[i].ETag           分块的 sha1 校验值
   * @param  {Function}  callback                         回调函数，必须
   * @return  {Object}  err                               请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                              返回的数据
   *     @return  {Object}  data.CompleteMultipartUpload  完成分块上传后的文件信息，包括Location, Bucket, Key 和 ETag
   */
  function multipartComplete(params, callback) {
      var self = this;

      var UploadId = params.UploadId;

      var Parts = params['Parts'];

      for (var i = 0, len = Parts.length; i < len; i++) {
          if (Parts[i]['ETag'].indexOf('"') === 0) {
              continue;
          }
          Parts[i]['ETag'] = '"' + Parts[i]['ETag'] + '"';
      }

      var xml = util_1.json2xml({CompleteMultipartUpload: {Part: Parts}});

      var headers = params.Headers;
      headers['Content-Type'] = 'application/xml';
      headers['Content-MD5'] = util_1.binaryBase64(util_1.md5(xml));

      submitRequest.call(this, {
          Action: 'name/cos:CompleteMultipartUpload',
          method: 'POST',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          qs: {
              uploadId: UploadId
          },
          body: xml,
          headers: headers,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var url = getUrl({
              ForcePathStyle: self.options.ForcePathStyle,
              protocol: self.options.Protocol,
              domain: self.options.Domain,
              bucket: params.Bucket,
              region: params.Region,
              object: params.Key,
              isLocation: true,
          });
          var CompleteMultipartUploadResult = data.CompleteMultipartUploadResult || {};
          var result = util_1.extend(CompleteMultipartUploadResult, {
              Location: url,
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  /**
   * 分块上传任务列表查询
   * @param  {Object}  params                                 参数对象，必须
   *     @param  {String}  params.Bucket                      Bucket名称，必须
   *     @param  {String}  params.Region                      地域名称，必须
   *     @param  {String}  params.Delimiter                   定界符为一个符号，如果有Prefix，则将Prefix到delimiter之间的相同路径归为一类，定义为Common Prefix，然后列出所有Common Prefix。如果没有Prefix，则从路径起点开始，非必须
   *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
   *     @param  {String}  params.Prefix                      前缀匹配，用来规定返回的文件前缀地址，非必须
   *     @param  {String}  params.MaxUploads                  单次返回最大的条目数量，默认1000，非必须
   *     @param  {String}  params.KeyMarker                   与upload-id-marker一起使用 </Br>当upload-id-marker未被指定时，ObjectName字母顺序大于key-marker的条目将被列出 </Br>当upload-id-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
   *     @param  {String}  params.UploadIdMarker              与key-marker一起使用 </Br>当key-marker未被指定时，upload-id-marker将被忽略 </Br>当key-marker被指定时，ObjectName字母顺序大于key-marker的条目被列出，ObjectName字母顺序等于key-marker同时UploadId大于upload-id-marker的条目将被列出，非必须
   * @param  {Function}  callback                             回调函数，必须
   * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                                  返回的数据
   *     @return  {Object}  data.ListMultipartUploadsResult   分块上传任务信息
   */
  function multipartList(params, callback) {
      var reqParams = {};

      reqParams['delimiter'] = params['Delimiter'];
      reqParams['encoding-type'] = params['EncodingType'];
      reqParams['prefix'] = params['Prefix'] || '';

      reqParams['max-uploads'] = params['MaxUploads'];

      reqParams['key-marker'] = params['KeyMarker'];
      reqParams['upload-id-marker'] = params['UploadIdMarker'];

      reqParams = util_1.clearKey(reqParams);

      submitRequest.call(this, {
          Action: 'name/cos:ListMultipartUploads',
          ResourceKey: reqParams['prefix'],
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          headers: params.Headers,
          qs: reqParams,
          action: 'uploads',
      }, function (err, data) {
          if (err) {
              return callback(err);
          }

          if (data && data.ListMultipartUploadsResult) {
              var Upload = data.ListMultipartUploadsResult.Upload || [];

              var CommonPrefixes = data.ListMultipartUploadsResult.CommonPrefixes || [];

              CommonPrefixes = util_1.isArray(CommonPrefixes) ? CommonPrefixes : [CommonPrefixes];
              Upload = util_1.isArray(Upload) ? Upload : [Upload];

              data.ListMultipartUploadsResult.Upload = Upload;
              data.ListMultipartUploadsResult.CommonPrefixes = CommonPrefixes;
          }
          var result = util_1.clone(data.ListMultipartUploadsResult || {});
          util_1.extend(result, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  /**
   * 上传的分块列表查询
   * @param  {Object}  params                                 参数对象，必须
   *     @param  {String}  params.Bucket                      Bucket名称，必须
   *     @param  {String}  params.Region                      地域名称，必须
   *     @param  {String}  params.Key                         object名称，必须
   *     @param  {String}  params.UploadId                    标示本次分块上传的ID，必须
   *     @param  {String}  params.EncodingType                规定返回值的编码方式，非必须
   *     @param  {String}  params.MaxParts                    单次返回最大的条目数量，默认1000，非必须
   *     @param  {String}  params.PartNumberMarker            默认以UTF-8二进制顺序列出条目，所有列出条目从marker开始，非必须
   * @param  {Function}  callback                             回调函数，必须
   * @return  {Object}  err                                   请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   * @return  {Object}  data                                  返回的数据
   *     @return  {Object}  data.ListMultipartUploadsResult   分块信息
   */
  function multipartListPart(params, callback) {
      var reqParams = {};

      reqParams['uploadId'] = params['UploadId'];
      reqParams['encoding-type'] = params['EncodingType'];
      reqParams['max-parts'] = params['MaxParts'];
      reqParams['part-number-marker'] = params['PartNumberMarker'];

      submitRequest.call(this, {
          Action: 'name/cos:ListParts',
          method: 'GET',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: params.Headers,
          qs: reqParams,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          var ListPartsResult = data.ListPartsResult || {};
          var Part = ListPartsResult.Part || [];
          Part = util_1.isArray(Part) ? Part : [Part];

          ListPartsResult.Part = Part;
          var result = util_1.clone(ListPartsResult);
          util_1.extend(result, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
          callback(null, result);
      });
  }

  /**
   * 抛弃分块上传
   * @param  {Object}  params                 参数对象，必须
   *     @param  {String}  params.Bucket      Bucket名称，必须
   *     @param  {String}  params.Region      地域名称，必须
   *     @param  {String}  params.Key         object名称，必须
   *     @param  {String}  params.UploadId    标示本次分块上传的ID，必须
   * @param  {Function}  callback             回调函数，必须
   *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   *     @return  {Object}    data            返回的数据
   */
  function multipartAbort(params, callback) {
      var reqParams = {};

      reqParams['uploadId'] = params['UploadId'];
      submitRequest.call(this, {
          Action: 'name/cos:AbortMultipartUpload',
          method: 'DELETE',
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          headers: params.Headers,
          qs: reqParams,
      }, function (err, data) {
          if (err) {
              return callback(err);
          }
          callback(null, {
              statusCode: data.statusCode,
              headers: data.headers,
          });
      });
  }

  /**
   * 获取签名
   * @param  {Object}  params             参数对象，必须
   *     @param  {String}  params.Method  请求方法，必须
   *     @param  {String}  params.Key     object名称，必须
   *     @param  {String}  params.Expires 名超时时间，单位秒，可选
   * @return  {String}  data              返回签名字符串
   */
  function getAuth$1(params) {
      var self = this;
      return util_1.getAuth({
          SecretId: params.SecretId || this.options.SecretId || '',
          SecretKey: params.SecretKey || this.options.SecretKey || '',
          Method: params.Method,
          Key: params.Key,
          Query: params.Query,
          Headers: params.Headers,
          Expires: params.Expires,
          UseRawKey: self.options.UseRawKey,
          SystemClockOffset: self.options.SystemClockOffset,
      });
  }

  /**
   * 获取文件下载链接
   * @param  {Object}  params                 参数对象，必须
   *     @param  {String}  params.Bucket      Bucket名称，必须
   *     @param  {String}  params.Region      地域名称，必须
   *     @param  {String}  params.Key         object名称，必须
   *     @param  {String}  params.Method      请求的方法，可选
   *     @param  {String}  params.Expires     签名超时时间，单位秒，可选
   * @param  {Function}  callback             回调函数，必须
   *     @return  {Object}    err             请求失败的错误，如果请求成功，则为空。https://cloud.tencent.com/document/product/436/7730
   *     @return  {Object}    data            返回的数据
   */
  function getObjectUrl(params, callback) {
      var self = this;
      var url = getUrl({
          ForcePathStyle: self.options.ForcePathStyle,
          protocol: params.Protocol || self.options.Protocol,
          domain: self.options.Domain,
          bucket: params.Bucket,
          region: params.Region,
          object: params.Key,
      });
      if (params.Sign !== undefined && !params.Sign) {
          callback(null, {Url: url});
          return url;
      }
      var AuthData = getAuthorizationAsync.call(this, {
          Action: ((params.Method || '').toUpperCase() === 'PUT' ? 'name/cos:PutObject' : 'name/cos:GetObject'),
          Bucket: params.Bucket || '',
          Region: params.Region || '',
          Method: params.Method || 'get',
          Key: params.Key,
          Expires: params.Expires,
      }, function (err, AuthData) {
          if (!callback) return;
          if (err) {
              callback(err);
              return;
          }
          var signUrl = url;
          signUrl += '?' + (AuthData.Authorization.indexOf('q-signature') > -1 ?
              AuthData.Authorization : 'sign=' + encodeURIComponent(AuthData.Authorization));
          AuthData.XCosSecurityToken && (signUrl += '&x-cos-security-token=' + AuthData.XCosSecurityToken);
          AuthData.ClientIP && (signUrl += '&clientIP=' + AuthData.ClientIP);
          AuthData.ClientUA && (signUrl += '&clientUA=' + AuthData.ClientUA);
          AuthData.Token && (signUrl += '&token=' + AuthData.Token);
          setTimeout(function () {
              callback(null, {Url: signUrl});
          });
      });
      if (AuthData) {
          return url + '?' + AuthData.Authorization +
              (AuthData.XCosSecurityToken ? '&x-cos-security-token=' + AuthData.XCosSecurityToken : '');
      } else {
          return url;
      }
  }


  /**
   * 私有方法
   */
  function decodeAcl(AccessControlPolicy) {
      var result = {
          GrantFullControl: [],
          GrantWrite: [],
          GrantRead: [],
          GrantReadAcp: [],
          GrantWriteAcp: [],
          ACL: '',
      };
      var GrantMap = {
          'FULL_CONTROL': 'GrantFullControl',
          'WRITE': 'GrantWrite',
          'READ': 'GrantRead',
          'READ_ACP': 'GrantReadAcp',
          'WRITE_ACP': 'GrantWriteAcp',
      };
      var AccessControlList = AccessControlPolicy && AccessControlPolicy.AccessControlList || {};
      var Grant = AccessControlList.Grant;
      if (Grant) {
          Grant = util_1.isArray(Grant) ? Grant : [Grant];
      }
      var PublicAcl = {READ: 0, WRITE: 0, FULL_CONTROL: 0};
      Grant && Grant.length && util_1.each(Grant, function (item) {
          if (item.Grantee.ID === 'qcs::cam::anyone:anyone' || item.Grantee.URI === 'http://cam.qcloud.com/groups/global/AllUsers') {
              PublicAcl[item.Permission] = 1;
          } else if (item.Grantee.ID !== AccessControlPolicy.Owner.ID) {
              result[GrantMap[item.Permission]].push('id="' + item.Grantee.ID + '"');
          }
      });
      if (PublicAcl.FULL_CONTROL || (PublicAcl.WRITE && PublicAcl.READ)) {
          result.ACL = 'public-read-write';
      } else if (PublicAcl.READ) {
          result.ACL = 'public-read';
      } else {
          result.ACL = 'private';
      }
      util_1.each(GrantMap, function (item) {
          result[item] = uniqGrant(result[item].join(','));
      });
      return result;
  }

  // Grant 去重
  function uniqGrant(str) {
      var arr = str.split(',');
      var exist = {};
      var i, item;
      for (i = 0; i < arr.length; ) {
          item = arr[i].trim();
          if (exist[item]) {
              arr.splice(i, 1);
          } else {
              exist[item] = true;
              arr[i] = item;
              i++;
          }
      }
      return arr.join(',');
  }

  // 生成操作 url
  function getUrl(params) {
      var longBucket = params.bucket;
      var shortBucket = longBucket.substr(0, longBucket.lastIndexOf('-'));
      var appId = longBucket.substr(longBucket.lastIndexOf('-') + 1);
      var domain = params.domain;
      var region = params.region;
      var object = params.object;
      var protocol = params.protocol || (util_1.isBrowser && location.protocol === 'http:' ? 'http:' : 'https:');
      if (!domain) {
          if (['cn-south', 'cn-south-2', 'cn-north', 'cn-east', 'cn-southwest', 'sg'].indexOf(region) > -1) {
              domain = '{Region}.myqcloud.com';
          } else {
              domain = 'cos.{Region}.myqcloud.com';
          }
          if (!params.ForcePathStyle) {
              domain = '{Bucket}.' + domain;
          }
      }
      domain = domain.replace(/\{\{AppId\}\}/ig, appId)
          .replace(/\{\{Bucket\}\}/ig, shortBucket)
          .replace(/\{\{Region\}\}/ig, region)
          .replace(/\{\{.*?\}\}/ig, '');
      domain = domain.replace(/\{AppId\}/ig, appId)
          .replace(/\{BucketName\}/ig, shortBucket)
          .replace(/\{Bucket\}/ig, longBucket)
          .replace(/\{Region\}/ig, region)
          .replace(/\{.*?\}/ig, '');
      if (!/^[a-zA-Z]+:\/\//.test(domain)) {
          domain = protocol + '//' + domain;
      }

      // 去掉域名最后的斜杆
      if (domain.slice(-1) === '/') {
          domain = domain.slice(0, -1);
      }
      var url = domain;

      if (params.ForcePathStyle) {
          url += '/' + longBucket;
      }
      url += '/';
      if (object) {
          url += util_1.camSafeUrlEncode(object).replace(/%2F/g, '/');
      }

      if (params.isLocation) {
          url = url.replace(/^https?:\/\//, '');
      }
      return url;
  }

  // 异步获取签名
  function getAuthorizationAsync(params, callback) {

      var headers = util_1.clone(params.Headers);
      delete headers['Content-Type'];
      delete headers['Cache-Control'];
      util_1.each(headers, function (v, k) {
          v === '' && delete headers[k];
      });

      var cb = function (AuthData) {

          // 检查签名格式
          var formatAllow = false;
          var auth = AuthData.Authorization;
          if (auth) {
              if (auth.indexOf(' ') > -1) {
                  formatAllow = false;
              } else if (auth.indexOf('q-sign-algorithm=') > -1 &&
                  auth.indexOf('q-ak=') > -1 &&
                  auth.indexOf('q-sign-time=') > -1 &&
                  auth.indexOf('q-key-time=') > -1 &&
                  auth.indexOf('q-url-param-list=') > -1) {
                  formatAllow = true;
              } else {
                  try {
                      auth = atob(auth);
                      if (auth.indexOf('a=') > -1 &&
                          auth.indexOf('k=') > -1 &&
                          auth.indexOf('t=') > -1 &&
                          auth.indexOf('r=') > -1 &&
                          auth.indexOf('b=') > -1) {
                          formatAllow = true;
                      }
                  } catch (e) {}
              }
          }
          if (formatAllow) {
              callback && callback(null, AuthData);
          } else {
              callback && callback('authorization error');
          }
      };

      var self = this;
      var Bucket = params.Bucket || '';
      var Region = params.Region || '';

      // PathName
      var KeyName = params.Key || '';
      if (self.options.ForcePathStyle && Bucket) {
          KeyName = Bucket + '/' + KeyName;
      }
      var Pathname = '/' + KeyName;

      // Action、ResourceKey
      var StsData = {};
      var Scope = params.Scope;
      if (!Scope) {
          var Action = params.Action || '';
          var ResourceKey = params.ResourceKey || params.Key || '';
          Scope = params.Scope || [{
              action: Action,
              bucket: Bucket,
              region: Region,
              prefix: ResourceKey,
          }];
      }
      var ScopeKey  = util_1.md5(JSON.stringify(Scope));

      // STS
      self._StsCache = self._StsCache ||[];
      (function () {
          var i, AuthData;
          for (i = self._StsCache.length - 1; i >= 0; i--) {
              AuthData = self._StsCache[i];
              var compareTime = Math.round(util_1.getSkewTime(self.options.SystemClockOffset) / 1000) + 30;
              if (AuthData.StartTime && compareTime < AuthData.StartTime || compareTime >= AuthData.ExpiredTime) {
                  self._StsCache.splice(i, 1);
                  continue;
              }
              if (!AuthData.ScopeLimit || AuthData.ScopeLimit && AuthData.ScopeKey === ScopeKey) {
                  StsData = AuthData;
                  break;
              }
          }
      })();

      var calcAuthByTmpKey = function () {
          var KeyTime = StsData.StartTime && StsData.ExpiredTime ? StsData.StartTime + ';' + StsData.ExpiredTime : '';
          var Authorization = util_1.getAuth({
              SecretId: StsData.TmpSecretId,
              SecretKey: StsData.TmpSecretKey,
              Method: params.Method,
              Pathname: Pathname,
              Query: params.Query,
              Headers: headers,
              Expires: params.Expires,
              UseRawKey: self.options.UseRawKey,
              SystemClockOffset: self.options.SystemClockOffset,
              KeyTime: KeyTime
          });
          var AuthData = {
              Authorization: Authorization,
              XCosSecurityToken: StsData.XCosSecurityToken || '',
              Token: StsData.Token || '',
              ClientIP: StsData.ClientIP || '',
              ClientUA: StsData.ClientUA || '',
          };
          cb(AuthData);
      };

      // 先判断是否有临时密钥
      if (StsData.ExpiredTime && StsData.ExpiredTime - (util_1.getSkewTime(self.options.SystemClockOffset) / 1000) > 60) { // 如果缓存的临时密钥有效，并还有超过60秒有效期就直接使用
          calcAuthByTmpKey();
      } else if (self.options.getAuthorization) { // 外部计算签名或获取临时密钥
          self.options.getAuthorization.call(self, {
              Bucket: Bucket,
              Region: Region,
              Method: params.Method,
              Key: KeyName,
              Pathname: Pathname,
              Query: params.Query,
              Headers: headers,
              Scope: Scope,
          }, function (AuthData) {
              if (typeof AuthData === 'string') {
                  AuthData = {Authorization: AuthData};
              }
              if (AuthData.TmpSecretId &&
                  AuthData.TmpSecretKey &&
                  AuthData.XCosSecurityToken &&
                  AuthData.ExpiredTime) {
                  StsData = AuthData || {};
                  StsData.Scope = Scope;
                  StsData.ScopeKey = ScopeKey;
                  self._StsCache.push(StsData);
                  calcAuthByTmpKey();
              } else {
                  cb(AuthData);
              }
          });
      } else if (self.options.getSTS) { // 外部获取临时密钥
          self.options.getSTS.call(self, {
              Bucket: Bucket,
              Region: Region,
          }, function (data) {
              StsData = data || {};
              StsData.Scope = Scope;
              StsData.ScopeKey = ScopeKey;
              StsData.TmpSecretId = StsData.SecretId;
              StsData.TmpSecretKey = StsData.SecretKey;
              self._StsCache.push(StsData);
              calcAuthByTmpKey();
          });
      } else { // 内部计算获取签名
          return (function () {
              var Authorization = util_1.getAuth({
                  SecretId: params.SecretId || self.options.SecretId,
                  SecretKey: params.SecretKey || self.options.SecretKey,
                  Method: params.Method,
                  Pathname: Pathname,
                  Query: params.Query,
                  Headers: headers,
                  Expires: params.Expires,
                  UseRawKey: self.options.UseRawKey,
                  SystemClockOffset: self.options.SystemClockOffset,
              });
              var AuthData = {
                  Authorization: Authorization,
                  XCosSecurityToken: self.options.XCosSecurityToken,
              };
              cb(AuthData);
              return AuthData;
          })();
      }
      return '';
  }

  // 调整时间偏差
  function allowRetry(err) {
      var allowRetry = false;
      var isTimeError = false;
      var serverDate = (err.headers && (err.headers.date || err.headers.Date)) || (err.error && err.error.ServerTime);
      try {
          var errorCode = err.error.Code;
          var errorMessage = err.error.Message;
          if (errorCode === 'RequestTimeTooSkewed' ||
              (errorCode === 'AccessDenied' && errorMessage === 'Request has expired')) {
              isTimeError = true;
          }
      } catch (e) {
      }
      if (err) {
          if (isTimeError && serverDate) {
              var serverTime = Date.parse(serverDate);
              if (this.options.CorrectClockSkew && Math.abs(util_1.getSkewTime(this.options.SystemClockOffset) - serverTime) >= 30000) {
                  console.error('error: Local time is too skewed.');
                  this.options.SystemClockOffset = serverTime - Date.now();
                  allowRetry = true;
              }
          } else if (Math.round(err.statusCode / 100) === 5) {
              allowRetry = true;
          }
      }
      return allowRetry;
  }

  // 获取签名并发起请求
  function submitRequest(params, callback) {
      var self = this;

      // 处理 headers
      !params.headers && (params.headers = {});

      // 处理 query
      !params.qs && (params.qs = {});
      params.VersionId && (params.qs.versionId = params.VersionId);
      params.qs = util_1.clearKey(params.qs);

      // 清理 undefined 和 null 字段
      params.headers && (params.headers = util_1.clearKey(params.headers));
      params.qs && (params.qs = util_1.clearKey(params.qs));

      var Query = util_1.clone(params.qs);
      params.action && (Query[params.action] = '');

      var next = function (tryTimes) {
          var oldClockOffset = self.options.SystemClockOffset;
          getAuthorizationAsync.call(self, {
              Bucket: params.Bucket || '',
              Region: params.Region || '',
              Method: params.method,
              Key: params.Key,
              Query: Query,
              Headers: params.headers,
              Action: params.Action,
              ResourceKey: params.ResourceKey,
              Scope: params.Scope,
          }, function (err, AuthData) {
              if (err) {
                  callback(err);
                  return;
              }
              params.AuthData = AuthData;
              _submitRequest.call(self, params, function (err, data) {
                  if (err && tryTimes < 2 && (oldClockOffset !== self.options.SystemClockOffset || allowRetry.call(self, err))) {
                      if (params.headers) {
                          delete params.headers.Authorization;
                          delete params.headers['token'];
                          delete params.headers['clientIP'];
                          delete params.headers['clientUA'];
                          delete params.headers['x-cos-security-token'];
                      }
                      next(tryTimes + 1);
                  } else {
                      callback(err, data);
                  }
              });
          });
      };
      next(1);

  }

  // 发起请求
  function _submitRequest(params, callback) {
      var self = this;
      var TaskId = params.TaskId;
      if (TaskId && !self._isRunningTask(TaskId)) return;

      var bucket = params.Bucket;
      var region = params.Region;
      var object = params.Key;
      var method = params.method || 'GET';
      var url = params.url;
      var body = params.body;
      var json = params.json;
      var rawBody = params.rawBody;

      // url
      url = url || getUrl({
          ForcePathStyle: self.options.ForcePathStyle,
          protocol: self.options.Protocol,
          domain: self.options.Domain,
          bucket: bucket,
          region: region,
          object: object,
      });
      if (params.action) {
          url = url + '?' + params.action;
      }

      var opt = {
          method: method,
          url: url,
          headers: params.headers,
          qs: params.qs,
          body: body,
          json: json,
      };

      // 获取签名
      opt.headers.Authorization = params.AuthData.Authorization;
      params.AuthData.Token && (opt.headers['token'] = params.AuthData.Token);
      params.AuthData.ClientIP && (opt.headers['clientIP'] = params.AuthData.ClientIP);
      params.AuthData.ClientUA && (opt.headers['clientUA'] = params.AuthData.ClientUA);
      params.AuthData.XCosSecurityToken && (opt.headers['x-cos-security-token'] = params.AuthData.XCosSecurityToken);

      // 清理 undefined 和 null 字段
      opt.headers && (opt.headers = util_1.clearKey(opt.headers));
      opt = util_1.clearKey(opt);

      // progress
      if (params.onProgress && typeof params.onProgress === 'function') {
          var contentLength = body && (body.size || body.length) || 0;
          opt.onProgress = function (e) {
              if (TaskId && !self._isRunningTask(TaskId)) return;
              var loaded = e ? e.loaded : 0;
              params.onProgress({loaded: loaded, total: contentLength});
          };
      }
      if (this.options.Timeout) {
          opt.timeout = this.options.Timeout;
      }

      self.emit('before-send', opt);
      var sender = request_1(opt, function (err, response, body) {
          if (err === 'abort') return;

          // 返回内容添加 状态码 和 headers
          var hasReturned;
          var cb = function (err, data) {
              TaskId && self.off('inner-kill-task', killTask);
              if (hasReturned) return;
              hasReturned = true;
              var attrs = {};
              response && response.statusCode && (attrs.statusCode = response.statusCode);
              response && response.headers && (attrs.headers = response.headers);

              if (err) {
                  err = util_1.extend(err || {}, attrs);
                  callback(err, null);
              } else {
                  data = util_1.extend(data || {}, attrs);
                  callback(null, data);
              }
              sender = null;
          };

          // 请求错误，发生网络错误
          if (err) {
              cb({error: err});
              return;
          }

          var jsonRes;

          // 不对 body 进行转换，body 直接挂载返回
          if(rawBody) {
              jsonRes = {};
              jsonRes.body = body;
          } else {
              try {
                  jsonRes = body && body.indexOf('<') > -1 && body.indexOf('>') > -1 && util_1.xml2json(body) || {};
              } catch (e) {
                  jsonRes = body || {};
              }
          }

          // 请求返回码不为 200
          var statusCode = response.statusCode;
          var statusSuccess = Math.floor(statusCode / 100) === 2; // 200 202 204 206
          if (!statusSuccess) {
              cb({error: jsonRes.Error || jsonRes});
              return;
          }


          if (jsonRes.Error) {
              cb({error: jsonRes.Error});
              return;
          }
          cb(null, jsonRes);
      });

      // kill task
      var killTask = function (data) {
          if (data.TaskId === TaskId) {
              sender && sender.abort && sender.abort();
              self.off('inner-kill-task', killTask);
          }
      };
      TaskId && self.on('inner-kill-task', killTask);

  }


  var API_MAP = {
      // Bucket 相关方法
      getService: getService,                      // Bucket
      putBucket: putBucket,
      headBucket: headBucket,                      // Bucket
      getBucket: getBucket,
      deleteBucket: deleteBucket,
      putBucketAcl: putBucketAcl,                  // BucketACL
      getBucketAcl: getBucketAcl,
      putBucketCors: putBucketCors,                // BucketCors
      getBucketCors: getBucketCors,
      deleteBucketCors: deleteBucketCors,
      getBucketLocation: getBucketLocation,        // BucketLocation
      getBucketPolicy: getBucketPolicy,            // BucketPolicy
      putBucketPolicy: putBucketPolicy,
      deleteBucketPolicy: deleteBucketPolicy,
      putBucketTagging: putBucketTagging,          // BucketTagging
      getBucketTagging: getBucketTagging,
      deleteBucketTagging: deleteBucketTagging,
      putBucketLifecycle: putBucketLifecycle,      // BucketLifecycle
      getBucketLifecycle: getBucketLifecycle,
      deleteBucketLifecycle: deleteBucketLifecycle,
      putBucketVersioning: putBucketVersioning,    // BucketVersioning
      getBucketVersioning: getBucketVersioning,
      putBucketReplication: putBucketReplication,  // BucketReplication
      getBucketReplication: getBucketReplication,
      deleteBucketReplication: deleteBucketReplication,
      putBucketWebsite: putBucketWebsite,          // BucketWebsite
      getBucketWebsite: getBucketWebsite,
      deleteBucketWebsite: deleteBucketWebsite,

      // Object 相关方法
      getObject: getObject,
      headObject: headObject,
      listObjectVersions: listObjectVersions,
      putObject: putObject,
      deleteObject: deleteObject,
      getObjectAcl: getObjectAcl,
      putObjectAcl: putObjectAcl,
      optionsObject: optionsObject,
      putObjectCopy: putObjectCopy,
      deleteMultipleObject: deleteMultipleObject,
      restoreObject: restoreObject,

      // 分块上传相关方法
      uploadPartCopy: uploadPartCopy,
      multipartInit: multipartInit,
      multipartUpload: multipartUpload,
      multipartComplete: multipartComplete,
      multipartList: multipartList,
      multipartListPart: multipartListPart,
      multipartAbort: multipartAbort,

      // 工具方法
      getObjectUrl: getObjectUrl,
      getAuth: getAuth$1,
  };

  function warnOldApi(apiName, fn, proto) {
      util_1.each(['Cors', 'Acl'], function (suffix) {
          if (apiName.slice(-suffix.length) === suffix) {
              var oldName = apiName.slice(0, -suffix.length) + suffix.toUpperCase();
              var apiFn = util_1.apiWrapper(apiName, fn);
              var warned = false;
              proto[oldName] = function () {
                  !warned && console.warn('warning: cos.' + oldName + ' has been deprecated. Please Use cos.' + apiName + ' instead.');
                  warned = true;
                  apiFn.apply(this, arguments);
              };
          }
      });
  }

  var init$3 = function (COS, task) {
      task.transferToTaskMethod(API_MAP, 'putObject');
      util_1.each(API_MAP, function (fn, apiName) {
          COS.prototype[apiName] = util_1.apiWrapper(apiName, fn);
          warnOldApi(apiName, fn, COS.prototype);
      });
  };

  var base = {
  	init: init$3
  };

  var eachLimit = function (arr, limit, iterator, callback) {
      callback = callback || function () {};
      if (!arr.length || limit <= 0) {
          return callback();
      }

      var completed = 0;
      var started = 0;
      var running = 0;

      (function replenish () {
          if (completed >= arr.length) {
              return callback();
          }

          while (running < limit && started < arr.length) {
              started += 1;
              running += 1;
              iterator(arr[started - 1], function (err) {

                  if (err) {
                      callback(err);
                      callback = function () {};
                  } else {
                      completed += 1;
                      running -= 1;
                      if (completed >= arr.length) {
                          callback();
                      } else {
                          replenish();
                      }
                  }
              });
          }
      })();
  };

  var retry = function (times, iterator, callback) {
      var next = function (index) {
          iterator(function (err, data) {
              if (err && index < times) {
                  next(index + 1);
              } else {
                  callback(err, data);
              }
          });
      };
      if (times < 1) {
          callback();
      } else {
          next(1);
      }
  };

  var async = {
      eachLimit: eachLimit,
      retry: retry
  };

  var async_1 = async;

  var EventProxy$1 = event$1.EventProxy;


  // 文件分块上传全过程，暴露的分块上传接口
  function sliceUploadFile(params, callback) {
      var self = this;
      var ep = new EventProxy$1();
      var TaskId = params.TaskId;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var Body = params.Body;
      var ChunkSize = params.ChunkSize || params.SliceSize || self.options.ChunkSize;
      var AsyncLimit = params.AsyncLimit;
      var StorageClass = params.StorageClass || 'Standard';
      var ServerSideEncryption = params.ServerSideEncryption;
      var FileSize;

      var onProgress;
      var onHashProgress = params.onHashProgress;

      // 上传过程中出现错误，返回错误
      ep.on('error', function (err) {
          if (!self._isRunningTask(TaskId)) return;
          return callback(err);
      });

      // 上传分块完成，开始 uploadSliceComplete 操作
      ep.on('upload_complete', function (UploadCompleteData) {
          callback(null, UploadCompleteData);
      });

      // 上传分块完成，开始 uploadSliceComplete 操作
      ep.on('upload_slice_complete', function (UploadData) {
          uploadSliceComplete.call(self, {
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              UploadId: UploadData.UploadId,
              SliceList: UploadData.SliceList,
          }, function (err, data) {
              if (!self._isRunningTask(TaskId)) return;
              session.removeUsing(UploadData.UploadId);
              if (err) {
                  onProgress(null, true);
                  return ep.emit('error', err);
              }
              session.removeUploadId(UploadData.UploadId);
              onProgress({loaded: FileSize, total: FileSize}, true);
              ep.emit('upload_complete', data);
          });
      });

      // 获取 UploadId 完成，开始上传每个分片
      ep.on('get_upload_data_finish', function (UploadData) {

          // 处理 UploadId 缓存
          var uuid = session.getFileId(Body, params.ChunkSize, Bucket, Key);
          uuid && session.saveUploadId(uuid, UploadData.UploadId, self.options.UploadIdCacheLimit); // 缓存 UploadId
          session.setUsing(UploadData.UploadId); // 标记 UploadId 为正在使用

          // 获取 UploadId
          onProgress(null, true); // 任务状态开始 uploading
          uploadSliceList.call(self, {
              TaskId: TaskId,
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              Body: Body,
              FileSize: FileSize,
              SliceSize: ChunkSize,
              AsyncLimit: AsyncLimit,
              ServerSideEncryption: ServerSideEncryption,
              UploadData: UploadData,
              onProgress: onProgress
          }, function (err, data) {
              if (!self._isRunningTask(TaskId)) return;
              if (err) {
                  onProgress(null, true);
                  return ep.emit('error', err);
              }
              ep.emit('upload_slice_complete', data);
          });
      });

      // 开始获取文件 UploadId，里面会视情况计算 ETag，并比对，保证文件一致性，也优化上传
      ep.on('get_file_size_finish', function () {

          onProgress = util_1.throttleOnProgress.call(self, FileSize, params.onProgress);

          if (params.UploadData.UploadId) {
              ep.emit('get_upload_data_finish', params.UploadData);
          } else {
              var _params = util_1.extend({
                  TaskId: TaskId,
                  Bucket: Bucket,
                  Region: Region,
                  Key: Key,
                  Headers: params.Headers,
                  StorageClass: StorageClass,
                  Body: Body,
                  FileSize: FileSize,
                  SliceSize: ChunkSize,
                  onHashProgress: onHashProgress,
              }, params);
              getUploadIdAndPartList.call(self, _params, function (err, UploadData) {
                  if (!self._isRunningTask(TaskId)) return;
                  if (err) return ep.emit('error', err);
                  params.UploadData.UploadId = UploadData.UploadId;
                  params.UploadData.PartList = UploadData.PartList;
                  ep.emit('get_upload_data_finish', params.UploadData);
              });
          }
      });

      // 获取上传文件大小
      FileSize = params.ContentLength;
      delete params.ContentLength;
      !params.Headers && (params.Headers = {});
      util_1.each(params.Headers, function (item, key) {
          if (key.toLowerCase() === 'content-length') {
              delete params.Headers[key];
          }
      });

      // 控制分片大小
      (function () {
          var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
          var AutoChunkSize = 1024 * 1024;
          for (var i = 0; i < SIZE.length; i++) {
              AutoChunkSize = SIZE[i] * 1024 * 1024;
              if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
          }
          params.ChunkSize = params.SliceSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);
      })();

      // 开始上传
      if (FileSize === 0) {
          params.Body = '';
          params.ContentLength = 0;
          params.SkipTask = true;
          self.putObject(params, function (err, data) {
              if (err) {
                  return callback(err);
              }
              callback(null, data);
          });
      } else {
          ep.emit('get_file_size_finish');
      }

  }

  // 获取上传任务的 UploadId
  function getUploadIdAndPartList(params, callback) {
      var TaskId = params.TaskId;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var StorageClass = params.StorageClass;
      var self = this;

      // 计算 ETag
      var ETagMap = {};
      var FileSize = params.FileSize;
      var SliceSize = params.SliceSize;
      var SliceCount = Math.ceil(FileSize / SliceSize);
      var FinishSize = 0;
      var onHashProgress = util_1.throttleOnProgress.call(self, FileSize, params.onHashProgress);
      var getChunkETag = function (PartNumber, callback) {
          var start = SliceSize * (PartNumber - 1);
          var end = Math.min(start + SliceSize, FileSize);
          var ChunkSize = end - start;

          if (ETagMap[PartNumber]) {
              callback(null, {
                  PartNumber: PartNumber,
                  ETag: ETagMap[PartNumber],
                  Size: ChunkSize
              });
          } else {
              util_1.fileSlice(params.Body, start, end, false, function (chunkItem) {
                  util_1.getFileMd5(chunkItem, function (err, md5) {
                      if (err) return callback(err);
                      var ETag = '"' + md5 + '"';
                      ETagMap[PartNumber] = ETag;
                      FinishSize += ChunkSize;
                      callback(err, {
                          PartNumber: PartNumber,
                          ETag: ETag,
                          Size: ChunkSize
                      });
                      onHashProgress({loaded: FinishSize, total: FileSize});
                  });
              });
          }
      };

      // 通过和文件的 md5 对比，判断 UploadId 是否可用
      var isAvailableUploadList = function (PartList, callback) {
          var PartCount = PartList.length;
          // 如果没有分片，通过
          if (PartCount === 0) {
              return callback(null, true);
          }
          // 检查分片数量
          if (PartCount > SliceCount) {
              return callback(null, false);
          }
          // 检查分片大小
          if (PartCount > 1) {
              var PartSliceSize = Math.max(PartList[0].Size, PartList[1].Size);
              if (PartSliceSize !== SliceSize) {
                  return callback(null, false);
              }
          }
          // 逐个分片计算并检查 ETag 是否一致
          var next = function (index) {
              if (index < PartCount) {
                  var Part = PartList[index];
                  getChunkETag(Part.PartNumber, function (err, chunk) {
                      if (chunk && chunk.ETag === Part.ETag && chunk.Size === Part.Size) {
                          next(index + 1);
                      } else {
                          callback(null, false);
                      }
                  });
              } else {
                  callback(null, true);
              }
          };
          next(0);
      };

      var ep = new EventProxy$1();
      ep.on('error', function (errData) {
          if (!self._isRunningTask(TaskId)) return;
          return callback(errData);
      });

      // 存在 UploadId
      ep.on('upload_id_available', function (UploadData) {
          // 转换成 map
          var map = {};
          var list = [];
          util_1.each(UploadData.PartList, function (item) {
              map[item.PartNumber] = item;
          });
          for (var PartNumber = 1; PartNumber <= SliceCount; PartNumber++) {
              var item = map[PartNumber];
              if (item) {
                  item.PartNumber = PartNumber;
                  item.Uploaded = true;
              } else {
                  item = {
                      PartNumber: PartNumber,
                      ETag: null,
                      Uploaded: false
                  };
              }
              list.push(item);
          }
          UploadData.PartList = list;
          callback(null, UploadData);
      });

      // 不存在 UploadId, 初始化生成 UploadId
      ep.on('no_available_upload_id', function () {
          if (!self._isRunningTask(TaskId)) return;
          var _params = util_1.extend({
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              Headers: util_1.clone(params.Headers),
              StorageClass: StorageClass,
              Body: params.Body,
          }, params);
          // 获取 File 或 Blob 的 type 属性，如果有，作为文件 Content-Type
          var ContentType = params.Headers['Content-Type'] || (params.Body && params.Body.type);
          if (ContentType) {
              _params.Headers['Content-Type'] = ContentType;
          }
          self.multipartInit(_params, function (err, data) {
              if (!self._isRunningTask(TaskId)) return;
              if (err) return ep.emit('error', err);
              var UploadId = data.UploadId;
              if (!UploadId) {
                  return callback({Message: 'no upload id'});
              }
              ep.emit('upload_id_available', {UploadId: UploadId, PartList: []});
          });
      });

      // 如果已存在 UploadId，找一个可以用的 UploadId
      ep.on('has_and_check_upload_id', function (UploadIdList) {
          // 串行地，找一个内容一致的 UploadId
          UploadIdList = UploadIdList.reverse();
          async_1.eachLimit(UploadIdList, 1, function (UploadId, asyncCallback) {
              if (!self._isRunningTask(TaskId)) return;
              // 如果正在上传，跳过
              if (session.using[UploadId]) {
                  asyncCallback(); // 检查下一个 UploadId
                  return;
              }
              // 判断 UploadId 是否可用
              wholeMultipartListPart.call(self, {
                  Bucket: Bucket,
                  Region: Region,
                  Key: Key,
                  UploadId: UploadId,
              }, function (err, PartListData) {
                  if (!self._isRunningTask(TaskId)) return;
                  if (err) {
                      session.removeUsing(UploadId);
                      return ep.emit('error', err);
                  }
                  var PartList = PartListData.PartList;
                  PartList.forEach(function (item) {
                      item.PartNumber *= 1;
                      item.Size *= 1;
                      item.ETag = item.ETag || '';
                  });
                  isAvailableUploadList(PartList, function (err, isAvailable) {
                      if (!self._isRunningTask(TaskId)) return;
                      if (err) return ep.emit('error', err);
                      if (isAvailable) {
                          asyncCallback({
                              UploadId: UploadId,
                              PartList: PartList
                          }); // 马上结束
                      } else {
                          asyncCallback(); // 检查下一个 UploadId
                      }
                  });
              });
          }, function (AvailableUploadData) {
              if (!self._isRunningTask(TaskId)) return;
              onHashProgress(null, true);
              if (AvailableUploadData && AvailableUploadData.UploadId) {
                  ep.emit('upload_id_available', AvailableUploadData);
              } else {
                  ep.emit('no_available_upload_id');
              }
          });
      });

      // 在本地缓存找可用的 UploadId
      ep.on('seek_local_avail_upload_id', function (RemoteUploadIdList) {
          // 在本地找可用的 UploadId
          var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key);
          var LocalUploadIdList = session.getUploadIdList(uuid);
          if (!uuid || !LocalUploadIdList) {
              ep.emit('has_and_check_upload_id', RemoteUploadIdList);
              return;
          }
          var next = function (index) {
              // 如果本地找不到可用 UploadId，再一个个遍历校验远端
              if (index >= LocalUploadIdList.length) {
                  ep.emit('has_and_check_upload_id', RemoteUploadIdList);
                  return;
              }
              var UploadId = LocalUploadIdList[index];
              // 如果不在远端 UploadId 列表里，跳过并删除
              if (!util_1.isInArray(RemoteUploadIdList, UploadId)) {
                  session.removeUploadId(UploadId);
                  next(index + 1);
                  return;
              }
              // 如果正在上传，跳过
              if (session.using[UploadId]) {
                  next(index + 1);
                  return;
              }
              // 判断 UploadId 是否存在线上
              wholeMultipartListPart.call(self, {
                  Bucket: Bucket,
                  Region: Region,
                  Key: Key,
                  UploadId: UploadId,
              }, function (err, PartListData) {
                  if (!self._isRunningTask(TaskId)) return;
                  if (err) {
                      // 如果 UploadId 获取会出错，跳过并删除
                      session.removeUploadId(UploadId);
                      next(index + 1);
                  } else {
                      // 找到可用 UploadId
                      ep.emit('upload_id_available', {
                          UploadId: UploadId,
                          PartList: PartListData.PartList,
                      });
                  }
              });
          };
          next(0);
      });

      // 获取线上 UploadId 列表
      ep.on('get_remote_upload_id_list', function (RemoteUploadIdList) {
          // 获取符合条件的 UploadId 列表，因为同一个文件可以有多个上传任务。
          wholeMultipartList.call(self, {
              Bucket: Bucket,
              Region: Region,
              Key: Key,
          }, function (err, data) {
              if (!self._isRunningTask(TaskId)) return;
              if (err) {
                  return ep.emit('error', err);
              }
              // 整理远端 UploadId 列表
              var RemoteUploadIdList = util_1.filter(data.UploadList, function (item) {
                  return item.Key === Key && (!StorageClass || item.StorageClass.toUpperCase() === StorageClass.toUpperCase());
              }).reverse().map(function (item) {
                  return item.UploadId || item.UploadID;
              });
              if (RemoteUploadIdList.length) {
                  ep.emit('seek_local_avail_upload_id', RemoteUploadIdList);
              } else {
                  // 远端没有 UploadId，清理缓存的 UploadId
                  var uuid = session.getFileId(params.Body, params.ChunkSize, Bucket, Key), LocalUploadIdList;
                  if (uuid && (LocalUploadIdList = session.getUploadIdList(uuid))) {
                      util_1.each(LocalUploadIdList, function (UploadId) {
                          session.removeUploadId(UploadId);
                      });
                  }
                  ep.emit('no_available_upload_id');
              }
          });
      });

      // 开始找可用 UploadId
      ep.emit('get_remote_upload_id_list');

  }

  // 获取符合条件的全部上传任务 (条件包括 Bucket, Region, Prefix)
  function wholeMultipartList(params, callback) {
      var self = this;
      var UploadList = [];
      var sendParams = {
          Bucket: params.Bucket,
          Region: params.Region,
          Prefix: params.Key
      };
      var next = function () {
          self.multipartList(sendParams, function (err, data) {
              if (err) return callback(err);
              UploadList.push.apply(UploadList, data.Upload || []);
              if (data.IsTruncated === 'true') { // 列表不完整
                  sendParams.KeyMarker = data.NextKeyMarker;
                  sendParams.UploadIdMarker = data.NextUploadIdMarker;
                  next();
              } else {
                  callback(null, {UploadList: UploadList});
              }
          });
      };
      next();
  }

  // 获取指定上传任务的分块列表
  function wholeMultipartListPart(params, callback) {
      var self = this;
      var PartList = [];
      var sendParams = {
          Bucket: params.Bucket,
          Region: params.Region,
          Key: params.Key,
          UploadId: params.UploadId
      };
      var next = function () {
          self.multipartListPart(sendParams, function (err, data) {
              if (err) return callback(err);
              PartList.push.apply(PartList, data.Part || []);
              if (data.IsTruncated === 'true') { // 列表不完整
                  sendParams.PartNumberMarker = data.NextPartNumberMarker;
                  next();
              } else {
                  callback(null, {PartList: PartList});
              }
          });
      };
      next();
  }

  // 上传文件分块，包括
  /*
   UploadId (上传任务编号)
   AsyncLimit (并发量)，
   SliceList (上传的分块数组)，
   FilePath (本地文件的位置)，
   SliceSize (文件分块大小)
   FileSize (文件大小)
   onProgress (上传成功之后的回调函数)
   */
  function uploadSliceList(params, cb) {
      var self = this;
      var TaskId = params.TaskId;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var UploadData = params.UploadData;
      var FileSize = params.FileSize;
      var SliceSize = params.SliceSize;
      var ChunkParallel = Math.min(params.AsyncLimit || self.options.ChunkParallelLimit || 1, 256);
      var Body = params.Body;
      var SliceCount = Math.ceil(FileSize / SliceSize);
      var FinishSize = 0;
      var ServerSideEncryption = params.ServerSideEncryption;
      var needUploadSlices = util_1.filter(UploadData.PartList, function (SliceItem) {
          if (SliceItem['Uploaded']) {
              FinishSize += SliceItem['PartNumber'] >= SliceCount ? (FileSize % SliceSize || SliceSize) : SliceSize;
          }
          return !SliceItem['Uploaded'];
      });
      var onProgress = params.onProgress;

      async_1.eachLimit(needUploadSlices, ChunkParallel, function (SliceItem, asyncCallback) {
          if (!self._isRunningTask(TaskId)) return;
          var PartNumber = SliceItem['PartNumber'];
          var currentSize = Math.min(FileSize, SliceItem['PartNumber'] * SliceSize) - (SliceItem['PartNumber'] - 1) * SliceSize;
          var preAddSize = 0;
          uploadSliceItem.call(self, {
              TaskId: TaskId,
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              SliceSize: SliceSize,
              FileSize: FileSize,
              PartNumber: PartNumber,
              ServerSideEncryption: ServerSideEncryption,
              Body: Body,
              UploadData: UploadData,
              onProgress: function (data) {
                  FinishSize += data.loaded - preAddSize;
                  preAddSize = data.loaded;
                  onProgress({loaded: FinishSize, total: FileSize});
              },
          }, function (err, data) {
              if (!self._isRunningTask(TaskId)) return;
              if (util_1.isBrowser && !err && !data.ETag) {
                  err = 'get ETag error, please add "ETag" to CORS ExposeHeader setting.';
              }
              if (err) {
                  FinishSize -= preAddSize;
              } else {
                  FinishSize += currentSize - preAddSize;
                  SliceItem.ETag = data.ETag;
              }
              asyncCallback(err || null, data);
          });
      }, function (err) {
          if (!self._isRunningTask(TaskId)) return;
          if (err)  return cb(err);
          cb(null, {
              UploadId: UploadData.UploadId,
              SliceList: UploadData.PartList
          });
      });
  }

  // 上传指定分片
  function uploadSliceItem(params, callback) {
      var self = this;
      var TaskId = params.TaskId;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var FileSize = params.FileSize;
      var FileBody = params.Body;
      var PartNumber = params.PartNumber * 1;
      var SliceSize = params.SliceSize;
      var ServerSideEncryption = params.ServerSideEncryption;
      var UploadData = params.UploadData;
      var ChunkRetryTimes = self.options.ChunkRetryTimes + 1;

      var start = SliceSize * (PartNumber - 1);

      var ContentLength = SliceSize;

      var end = start + SliceSize;

      if (end > FileSize) {
          end = FileSize;
          ContentLength = end - start;
      }

      var PartItem = UploadData.PartList[PartNumber - 1];
      async_1.retry(ChunkRetryTimes, function (tryCallback) {
          if (!self._isRunningTask(TaskId)) return;
          util_1.fileSlice(FileBody, start, end, true, function (Body) {
              self.multipartUpload({
                  TaskId: TaskId,
                  Bucket: Bucket,
                  Region: Region,
                  Key: Key,
                  ContentLength: ContentLength,
                  PartNumber: PartNumber,
                  UploadId: UploadData.UploadId,
                  ServerSideEncryption: ServerSideEncryption,
                  Body: Body,
                  onProgress: params.onProgress,
              }, function (err, data) {
                  if (!self._isRunningTask(TaskId)) return;
                  if (err) {
                      return tryCallback(err);
                  } else {
                      PartItem.Uploaded = true;
                      return tryCallback(null, data);
                  }
              });
          });
      }, function (err, data) {
          if (!self._isRunningTask(TaskId)) return;
          return callback(err, data);
      });
  }


  // 完成分块上传
  function uploadSliceComplete(params, callback) {
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var UploadId = params.UploadId;
      var SliceList = params.SliceList;
      var self = this;
      var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
      var Parts = SliceList.map(function (item) {
          return {
              PartNumber: item.PartNumber,
              ETag: item.ETag
          };
      });
      // 完成上传的请求也做重试
      async_1.retry(ChunkRetryTimes, function (tryCallback) {
          self.multipartComplete({
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              UploadId: UploadId,
              Parts: Parts
          }, tryCallback);
      }, function (err, data) {
          callback(err, data);
      });
  }

  // 抛弃分块上传任务
  /*
   AsyncLimit (抛弃上传任务的并发量)，
   UploadId (上传任务的编号，当 Level 为 task 时候需要)
   Level (抛弃分块上传任务的级别，task : 抛弃指定的上传任务，file ： 抛弃指定的文件对应的上传任务，其他值 ：抛弃指定Bucket 的全部上传任务)
   */
  function abortUploadTask(params, callback) {
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var UploadId = params.UploadId;
      var Level = params.Level || 'task';
      var AsyncLimit = params.AsyncLimit;
      var self = this;

      var ep = new EventProxy$1();

      ep.on('error', function (errData) {
          return callback(errData);
      });

      // 已经获取到需要抛弃的任务列表
      ep.on('get_abort_array', function (AbortArray) {
          abortUploadTaskArray.call(self, {
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              Headers: params.Headers,
              AsyncLimit: AsyncLimit,
              AbortArray: AbortArray
          }, function (err, data) {
              if (err) {
                  return callback(err);
              }
              callback(null, data);
          });
      });

      if (Level === 'bucket') {
          // Bucket 级别的任务抛弃，抛弃该 Bucket 下的全部上传任务
          wholeMultipartList.call(self, {
              Bucket: Bucket,
              Region: Region
          }, function (err, data) {
              if (err) {
                  return callback(err);
              }
              ep.emit('get_abort_array', data.UploadList || []);
          });
      } else if (Level === 'file') {
          // 文件级别的任务抛弃，抛弃该文件的全部上传任务
          if (!Key) return callback({error: 'abort_upload_task_no_key'});
          wholeMultipartList.call(self, {
              Bucket: Bucket,
              Region: Region,
              Key: Key
          }, function (err, data) {
              if (err) {
                  return callback(err);
              }
              ep.emit('get_abort_array', data.UploadList || []);
          });
      } else if (Level === 'task') {
          // 单个任务级别的任务抛弃，抛弃指定 UploadId 的上传任务
          if (!UploadId) return callback({error: 'abort_upload_task_no_id'});
          if (!Key) return callback({error: 'abort_upload_task_no_key'});
          ep.emit('get_abort_array', [{
              Key: Key,
              UploadId: UploadId
          }]);
      } else {
          return callback({error: 'abort_unknown_level'});
      }
  }

  // 批量抛弃分块上传任务
  function abortUploadTaskArray(params, callback) {

      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var AbortArray = params.AbortArray;
      var AsyncLimit = params.AsyncLimit || 1;
      var self = this;

      var index = 0;
      var resultList = new Array(AbortArray.length);
      async_1.eachLimit(AbortArray, AsyncLimit, function (AbortItem, callback) {
          var eachIndex = index;
          if (Key && Key !== AbortItem.Key) {
              resultList[eachIndex] = {error: {KeyNotMatch: true}};
              callback(null);
              return;
          }
          var UploadId = AbortItem.UploadId || AbortItem.UploadID;

          self.multipartAbort({
              Bucket: Bucket,
              Region: Region,
              Key: AbortItem.Key,
              Headers: params.Headers,
              UploadId: UploadId
          }, function (err, data) {
              var task = {
                  Bucket: Bucket,
                  Region: Region,
                  Key: AbortItem.Key,
                  UploadId: UploadId
              };
              resultList[eachIndex] = {error: err, task: task};
              callback(null);
          });
          index++;

      }, function (err) {
          if (err) {
              return callback(err);
          }

          var successList = [];
          var errorList = [];

          for (var i = 0, len = resultList.length; i < len; i++) {
              var item = resultList[i];
              if (item['task']) {
                  if (item['error']) {
                      errorList.push(item['task']);
                  } else {
                      successList.push(item['task']);
                  }
              }
          }

          return callback(null, {
              successList: successList,
              errorList: errorList
          });
      });
  }


  // 批量上传文件
  function uploadFiles(params, callback) {
      var self = this;

      // 判断多大的文件使用分片上传
      var SliceSize = params.SliceSize === undefined ? self.options.SliceSize : params.SliceSize;

      // 汇总返回进度
      var TotalSize = 0;
      var TotalFinish = 0;
      var onTotalProgress = util_1.throttleOnProgress.call(self, TotalFinish, params.onProgress);

      // 汇总返回回调
      var unFinishCount = params.files.length;
      var _onTotalFileFinish = params.onFileFinish;
      var resultList = Array(unFinishCount);
      var onTotalFileFinish = function (err, data, options) {
          onTotalProgress(null, true);
          _onTotalFileFinish && _onTotalFileFinish(err, data, options);
          resultList[options.Index] = {
              options: options,
              error: err,
              data: data
          };
          if (--unFinishCount <= 0 && callback) {
              callback(null, {
                  files: resultList,
              });
          }
      };

      // 开始处理每个文件
      var taskList = [];
      util_1.each(params.files, function (fileParams, index) {
          (function () { // 对齐 nodejs 缩进

              var Body = fileParams.Body;
              var FileSize = Body.size || Body.length || 0;
              var fileInfo = {Index: index, TaskId: ''};

              // 更新文件总大小
              TotalSize += FileSize;

              // 整理 option，用于返回给回调
              util_1.each(fileParams, function (v, k) {
                  if (typeof v !== 'object' && typeof v !== 'function') {
                      fileInfo[k] = v;
                  }
              });

              // 处理单个文件 TaskReady
              var _onTaskReady = fileParams.onTaskReady;
              var onTaskReady = function (tid) {
                  fileInfo.TaskId = tid;
                  _onTaskReady && _onTaskReady(tid);
              };
              fileParams.onTaskReady = onTaskReady;

              // 处理单个文件进度
              var PreAddSize = 0;
              var _onProgress = fileParams.onProgress;
              var onProgress = function (info) {
                  TotalFinish = TotalFinish - PreAddSize + info.loaded;
                  PreAddSize = info.loaded;
                  _onProgress && _onProgress(info);
                  onTotalProgress({loaded: TotalFinish, total: TotalSize});
              };
              fileParams.onProgress = onProgress;

              // 处理单个文件完成
              var _onFileFinish = fileParams.onFileFinish;
              var onFileFinish = function (err, data) {
                  _onFileFinish && _onFileFinish(err, data);
                  onTotalFileFinish && onTotalFileFinish(err, data, fileInfo);
              };

              // 添加上传任务
              var api = FileSize >= SliceSize ? 'sliceUploadFile' : 'putObject';
              taskList.push({
                  api: api,
                  params: fileParams,
                  callback: onFileFinish,
              });
          })();
      });
      self._addTasks(taskList);
  }

  // 分片复制文件
  function sliceCopyFile(params, callback) {
      var ep = new EventProxy$1();

      var self = this;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var CopySource = params.CopySource;
      var m = CopySource.match(/^([^.]+-\d+)\.cos(v6)?\.([^.]+)\.[^/]+\/(.+)$/);
      if (!m) {
          callback({error: 'CopySource format error'});
          return;
      }

      var SourceBucket = m[1];
      var SourceRegion = m[3];
      var SourceKey = decodeURIComponent(m[4]);
      var CopySliceSize = params.CopySliceSize === undefined ? self.options.CopySliceSize : params.CopySliceSize;
      CopySliceSize = Math.max(0, CopySliceSize);

      var ChunkSize = params.CopyChunkSize || this.options.CopyChunkSize;
      var ChunkParallel = this.options.CopyChunkParallelLimit;

      var FinishSize = 0;
      var FileSize;
      var onProgress;

      // 分片复制完成，开始 multipartComplete 操作
      ep.on('copy_slice_complete', function (UploadData) {
          self.multipartComplete({
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              UploadId: UploadData.UploadId,
              Parts: UploadData.PartList,
          },function (err, data) {
              if (err) {
                  onProgress(null, true);
                  return callback(err);
              }
              onProgress({loaded: FileSize, total: FileSize}, true);
              callback(null, data);
          });
      });

      ep.on('get_copy_data_finish',function (UploadData) {
          async_1.eachLimit(UploadData.PartList, ChunkParallel, function (SliceItem, asyncCallback) {
              var PartNumber = SliceItem.PartNumber;
              var CopySourceRange = SliceItem.CopySourceRange;
              var currentSize = SliceItem.end - SliceItem.start;
              var preAddSize = 0;

              copySliceItem.call(self, {
                  Bucket: Bucket,
                  Region: Region,
                  Key: Key,
                  CopySource: CopySource,
                  UploadId: UploadData.UploadId,
                  PartNumber: PartNumber,
                  CopySourceRange: CopySourceRange,
                  onProgress: function (data) {
                      FinishSize += data.loaded - preAddSize;
                      preAddSize = data.loaded;
                      onProgress({loaded: FinishSize, total: FileSize});
                  }
              },function (err,data) {
                  if (err) {
                      return asyncCallback(err);
                  }
                  onProgress({loaded: FinishSize, total: FileSize});

                  FinishSize += currentSize - preAddSize;
                  SliceItem.ETag = data.ETag;
                  asyncCallback(err || null, data);
              });
          }, function (err) {
              if (err) {
                  onProgress(null, true);
                  return callback(err);
              }

              ep.emit('copy_slice_complete', UploadData);
          });
      });

      ep.on('get_file_size_finish', function (SourceHeaders) {
          // 控制分片大小
          (function () {
              var SIZE = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 1024 * 2, 1024 * 4, 1024 * 5];
              var AutoChunkSize = 1024 * 1024;
              for (var i = 0; i < SIZE.length; i++) {
                  AutoChunkSize = SIZE[i] * 1024 * 1024;
                  if (FileSize / AutoChunkSize <= self.options.MaxPartNumber) break;
              }
              params.ChunkSize = ChunkSize = Math.max(ChunkSize, AutoChunkSize);

              var ChunkCount = Math.ceil(FileSize / ChunkSize);

              var list = [];
              for (var partNumber = 1; partNumber <= ChunkCount; partNumber++) {
                  var start = (partNumber - 1) * ChunkSize;
                  var end = partNumber * ChunkSize < FileSize ? (partNumber * ChunkSize - 1) : FileSize - 1;
                  var item = {
                      PartNumber: partNumber,
                      start: start,
                      end: end,
                      CopySourceRange: "bytes=" + start + "-" + end,
                  };
                  list.push(item);
              }
              params.PartList = list;
          })();

          var TargetHeader;
          if (params.Headers['x-cos-metadata-directive'] === 'Replaced') {
              TargetHeader = params.Headers;
          } else {
              TargetHeader = SourceHeaders;
          }
          TargetHeader['x-cos-storage-class'] = params.Headers['x-cos-storage-class'] || SourceHeaders['x-cos-storage-class'];
          TargetHeader = util_1.clearKey(TargetHeader);
          /**
           * 对于归档存储的对象，如果未恢复副本，则不允许 Copy
           */
          if (SourceHeaders['x-cos-storage-class'] === 'ARCHIVE') {
              var restoreHeader = SourceHeaders['x-cos-restore'];
              if (!restoreHeader || restoreHeader === 'ongoing-request="true"') {
                  callback({ error: 'Unrestored archive object is not allowed to be copied' });
                  return;
              }
          }
          /**
           * 去除一些无用的头部，规避 multipartInit 出错
           * 这些头部通常是在 putObjectCopy 时才使用
           */
          delete TargetHeader['x-cos-copy-source'];
          delete TargetHeader['x-cos-metadata-directive'];
          delete TargetHeader['x-cos-copy-source-If-Modified-Since'];
          delete TargetHeader['x-cos-copy-source-If-Unmodified-Since'];
          delete TargetHeader['x-cos-copy-source-If-Match'];
          delete TargetHeader['x-cos-copy-source-If-None-Match'];
          self.multipartInit({
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              Headers: TargetHeader,
          },function (err,data) {
              if (err) {
                  return callback(err);
              }
              params.UploadId = data.UploadId;
              ep.emit('get_copy_data_finish', params);
          });
      });

      // 获取远端复制源文件的大小
      self.headObject({
          Bucket: SourceBucket,
          Region: SourceRegion,
          Key: SourceKey,
      },function(err, data) {
          if (err) {
              if (err.statusCode && err.statusCode === 404) {
                  callback({ErrorStatus: SourceKey + ' Not Exist'});
              } else {
                  callback(err);
              }
              return;
          }

          FileSize = params.FileSize = data.headers['content-length'];
          if (FileSize === undefined || !FileSize) {
              callback({error: 'get Content-Length error, please add "Content-Length" to CORS ExposeHeader setting.'});
              return;
          }

          onProgress = util_1.throttleOnProgress.call(self, FileSize, params.onProgress);

          // 开始上传
          if (FileSize <= CopySliceSize) {
              if (!params.Headers['x-cos-metadata-directive']) {
                  params.Headers['x-cos-metadata-directive'] = 'Copy';
              }
              self.putObjectCopy(params, function (err, data) {
                  if (err) {
                      onProgress(null, true);
                      return callback(err);
                  }
                  onProgress({loaded: FileSize, total: FileSize}, true);
                  callback(err, data);
              });
          } else {
              var resHeaders = data.headers;
              var SourceHeaders = {
                  'Cache-Control': resHeaders['cache-control'],
                  'Content-Disposition': resHeaders['content-disposition'],
                  'Content-Encoding': resHeaders['content-encoding'],
                  'Content-Type': resHeaders['content-type'],
                  'Expires': resHeaders['expires'],
                  'x-cos-storage-class': resHeaders['x-cos-storage-class'],
              };
              util_1.each(resHeaders, function (v, k) {
                  var metaPrefix = 'x-cos-meta-';
                  if (k.indexOf(metaPrefix) === 0 && k.length > metaPrefix.length) {
                      SourceHeaders[k] = v;
                  }
              });
              ep.emit('get_file_size_finish', SourceHeaders);
          }
      });
  }

  // 复制指定分片
  function copySliceItem(params, callback) {
      var TaskId = params.TaskId;
      var Bucket = params.Bucket;
      var Region = params.Region;
      var Key = params.Key;
      var CopySource = params.CopySource;
      var UploadId = params.UploadId;
      var PartNumber = params.PartNumber * 1;
      var CopySourceRange = params.CopySourceRange;

      var ChunkRetryTimes = this.options.ChunkRetryTimes + 1;
      var self = this;

      async_1.retry(ChunkRetryTimes, function (tryCallback) {
          self.uploadPartCopy({
              TaskId: TaskId,
              Bucket: Bucket,
              Region: Region,
              Key: Key,
              CopySource: CopySource,
              UploadId: UploadId,
              PartNumber:PartNumber,
              CopySourceRange:CopySourceRange,
              onProgress:params.onProgress,
          },function (err,data) {
              tryCallback(err || null, data);
          });
      }, function (err, data) {
          return callback(err, data);
      });
  }


  var API_MAP$1 = {
      sliceUploadFile: sliceUploadFile,
      abortUploadTask: abortUploadTask,
      uploadFiles: uploadFiles,
      sliceCopyFile: sliceCopyFile,
  };

  var init$4 = function (COS, task) {
      task.transferToTaskMethod(API_MAP$1, 'sliceUploadFile');
      util_1.each(API_MAP$1, function (fn, apiName) {
          COS.prototype[apiName] = util_1.apiWrapper(apiName, fn);
      });
  };

  var advance = {
  	init: init$4
  };

  var defaultOptions = {
      AppId: '', // AppId 已废弃，请拼接到 Bucket 后传入，例如：test-1250000000
      SecretId: '',
      SecretKey: '',
      XCosSecurityToken: '', // 使用临时密钥需要注意自行刷新 Token
      ChunkRetryTimes: 2,
      FileParallelLimit: 3,
      ChunkParallelLimit: 3,
      ChunkSize: 1024 * 1024,
      SliceSize: 1024 * 1024,
      CopyChunkParallelLimit: 20,
      CopyChunkSize: 1024 * 1024 * 10,
      CopySliceSize: 1024 * 1024 * 10,
      MaxPartNumber: 10000,
      ProgressInterval: 1000,
      UploadQueueSize: 10000,
      Domain: '',
      ServiceDomain: '',
      Protocol: '',
      CompatibilityMode: false,
      ForcePathStyle: false,
      UseRawKey: false,
      Timeout: 0, // 单位毫秒，0 代表不设置超时时间
      CorrectClockSkew: true,
      SystemClockOffset: 0, // 单位毫秒，ms
      UploadCheckContentMd5: false,
      UploadAddMetaMd5: false,
      UploadIdCacheLimit: 50,
  };

  // 对外暴露的类
  var COS = function (options) {
      this.options = util_1.extend(util_1.clone(defaultOptions), options || {});
      this.options.FileParallelLimit = Math.max(1, this.options.FileParallelLimit);
      this.options.ChunkParallelLimit = Math.max(1, this.options.ChunkParallelLimit);
      this.options.ChunkRetryTimes = Math.max(0, this.options.ChunkRetryTimes);
      this.options.ChunkSize = Math.max(1024 * 1024, this.options.ChunkSize);
      this.options.CopyChunkParallelLimit = Math.max(1, this.options.CopyChunkParallelLimit);
      this.options.CopyChunkSize = Math.max(1024 * 1024, this.options.CopyChunkSize);
      this.options.CopySliceSize = Math.max(0, this.options.CopySliceSize);
      this.options.MaxPartNumber = Math.max(1024, Math.min(10000, this.options.MaxPartNumber));
      this.options.Timeout = Math.max(0, this.options.Timeout);
      if (this.options.AppId) {
          console.warn('warning: AppId has been deprecated, Please put it at the end of parameter Bucket(E.g: "test-1250000000").');
      }
      event$1.init(this);
      task.init(this);
  };

  base.init(COS, task);
  advance.init(COS, task);

  COS.getAuthorization = util_1.getAuth;
  COS.version = '0.5.27';

  var cos = COS;

  var cosJsSdkV5 = cos;

  var sparkMd5 = createCommonjsModule(function (module, exports) {
  (function (factory) {
      {
          // Node/CommonJS
          module.exports = factory();
      }
  }(function (undefined$1) {

      /*
       * Fastest md5 implementation around (JKM md5).
       * Credits: Joseph Myers
       *
       * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
       * @see http://jsperf.com/md5-shootout/7
       */

      /* this function is much faster,
        so if possible we use it. Some IEs
        are the only ones I know of that
        need the idiotic second function,
        generated by an if clause.  */
      var add32 = function (a, b) {
          return (a + b) & 0xFFFFFFFF;
      },
          hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


      function cmn(q, a, b, x, s, t) {
          a = add32(add32(a, q), add32(x, t));
          return add32((a << s) | (a >>> (32 - s)), b);
      }

      function ff(a, b, c, d, x, s, t) {
          return cmn((b & c) | ((~b) & d), a, b, x, s, t);
      }

      function gg(a, b, c, d, x, s, t) {
          return cmn((b & d) | (c & (~d)), a, b, x, s, t);
      }

      function hh(a, b, c, d, x, s, t) {
          return cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function ii(a, b, c, d, x, s, t) {
          return cmn(c ^ (b | (~d)), a, b, x, s, t);
      }

      function md5cycle(x, k) {
          var a = x[0],
              b = x[1],
              c = x[2],
              d = x[3];

          a = ff(a, b, c, d, k[0], 7, -680876936);
          d = ff(d, a, b, c, k[1], 12, -389564586);
          c = ff(c, d, a, b, k[2], 17, 606105819);
          b = ff(b, c, d, a, k[3], 22, -1044525330);
          a = ff(a, b, c, d, k[4], 7, -176418897);
          d = ff(d, a, b, c, k[5], 12, 1200080426);
          c = ff(c, d, a, b, k[6], 17, -1473231341);
          b = ff(b, c, d, a, k[7], 22, -45705983);
          a = ff(a, b, c, d, k[8], 7, 1770035416);
          d = ff(d, a, b, c, k[9], 12, -1958414417);
          c = ff(c, d, a, b, k[10], 17, -42063);
          b = ff(b, c, d, a, k[11], 22, -1990404162);
          a = ff(a, b, c, d, k[12], 7, 1804603682);
          d = ff(d, a, b, c, k[13], 12, -40341101);
          c = ff(c, d, a, b, k[14], 17, -1502002290);
          b = ff(b, c, d, a, k[15], 22, 1236535329);

          a = gg(a, b, c, d, k[1], 5, -165796510);
          d = gg(d, a, b, c, k[6], 9, -1069501632);
          c = gg(c, d, a, b, k[11], 14, 643717713);
          b = gg(b, c, d, a, k[0], 20, -373897302);
          a = gg(a, b, c, d, k[5], 5, -701558691);
          d = gg(d, a, b, c, k[10], 9, 38016083);
          c = gg(c, d, a, b, k[15], 14, -660478335);
          b = gg(b, c, d, a, k[4], 20, -405537848);
          a = gg(a, b, c, d, k[9], 5, 568446438);
          d = gg(d, a, b, c, k[14], 9, -1019803690);
          c = gg(c, d, a, b, k[3], 14, -187363961);
          b = gg(b, c, d, a, k[8], 20, 1163531501);
          a = gg(a, b, c, d, k[13], 5, -1444681467);
          d = gg(d, a, b, c, k[2], 9, -51403784);
          c = gg(c, d, a, b, k[7], 14, 1735328473);
          b = gg(b, c, d, a, k[12], 20, -1926607734);

          a = hh(a, b, c, d, k[5], 4, -378558);
          d = hh(d, a, b, c, k[8], 11, -2022574463);
          c = hh(c, d, a, b, k[11], 16, 1839030562);
          b = hh(b, c, d, a, k[14], 23, -35309556);
          a = hh(a, b, c, d, k[1], 4, -1530992060);
          d = hh(d, a, b, c, k[4], 11, 1272893353);
          c = hh(c, d, a, b, k[7], 16, -155497632);
          b = hh(b, c, d, a, k[10], 23, -1094730640);
          a = hh(a, b, c, d, k[13], 4, 681279174);
          d = hh(d, a, b, c, k[0], 11, -358537222);
          c = hh(c, d, a, b, k[3], 16, -722521979);
          b = hh(b, c, d, a, k[6], 23, 76029189);
          a = hh(a, b, c, d, k[9], 4, -640364487);
          d = hh(d, a, b, c, k[12], 11, -421815835);
          c = hh(c, d, a, b, k[15], 16, 530742520);
          b = hh(b, c, d, a, k[2], 23, -995338651);

          a = ii(a, b, c, d, k[0], 6, -198630844);
          d = ii(d, a, b, c, k[7], 10, 1126891415);
          c = ii(c, d, a, b, k[14], 15, -1416354905);
          b = ii(b, c, d, a, k[5], 21, -57434055);
          a = ii(a, b, c, d, k[12], 6, 1700485571);
          d = ii(d, a, b, c, k[3], 10, -1894986606);
          c = ii(c, d, a, b, k[10], 15, -1051523);
          b = ii(b, c, d, a, k[1], 21, -2054922799);
          a = ii(a, b, c, d, k[8], 6, 1873313359);
          d = ii(d, a, b, c, k[15], 10, -30611744);
          c = ii(c, d, a, b, k[6], 15, -1560198380);
          b = ii(b, c, d, a, k[13], 21, 1309151649);
          a = ii(a, b, c, d, k[4], 6, -145523070);
          d = ii(d, a, b, c, k[11], 10, -1120210379);
          c = ii(c, d, a, b, k[2], 15, 718787259);
          b = ii(b, c, d, a, k[9], 21, -343485551);

          x[0] = add32(a, x[0]);
          x[1] = add32(b, x[1]);
          x[2] = add32(c, x[2]);
          x[3] = add32(d, x[3]);
      }

      function md5blk(s) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
          }
          return md5blks;
      }

      function md5blk_array(a) {
          var md5blks = [],
              i; /* Andy King said do it this way. */

          for (i = 0; i < 64; i += 4) {
              md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
          }
          return md5blks;
      }

      function md51(s) {
          var n = s.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk(s.substring(i - 64, i)));
          }
          s = s.substring(i - 64);
          length = s.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
          }
          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);
          return state;
      }

      function md51_array(a) {
          var n = a.length,
              state = [1732584193, -271733879, -1732584194, 271733878],
              i,
              length,
              tail,
              tmp,
              lo,
              hi;

          for (i = 64; i <= n; i += 64) {
              md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
          }

          // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
          // containing the last element of the parent array if the sub array specified starts
          // beyond the length of the parent array - weird.
          // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
          a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

          length = a.length;
          tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= a[i] << ((i % 4) << 3);
          }

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(state, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Beware that the final length might not fit in 32 bits so we take care of that
          tmp = n * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;

          md5cycle(state, tail);

          return state;
      }

      function rhex(n) {
          var s = '',
              j;
          for (j = 0; j < 4; j += 1) {
              s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
          }
          return s;
      }

      function hex(x) {
          var i;
          for (i = 0; i < x.length; i += 1) {
              x[i] = rhex(x[i]);
          }
          return x.join('');
      }

      // In some cases the fast add32 function cannot be used..
      if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
          add32 = function (x, y) {
              var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                  msw = (x >> 16) + (y >> 16) + (lsw >> 16);
              return (msw << 16) | (lsw & 0xFFFF);
          };
      }

      // ---------------------------------------------------

      /**
       * ArrayBuffer slice polyfill.
       *
       * @see https://github.com/ttaubert/node-arraybuffer-slice
       */

      if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
          (function () {
              function clamp(val, length) {
                  val = (val | 0) || 0;

                  if (val < 0) {
                      return Math.max(val + length, 0);
                  }

                  return Math.min(val, length);
              }

              ArrayBuffer.prototype.slice = function (from, to) {
                  var length = this.byteLength,
                      begin = clamp(from, length),
                      end = length,
                      num,
                      target,
                      targetArray,
                      sourceArray;

                  if (to !== undefined$1) {
                      end = clamp(to, length);
                  }

                  if (begin > end) {
                      return new ArrayBuffer(0);
                  }

                  num = end - begin;
                  target = new ArrayBuffer(num);
                  targetArray = new Uint8Array(target);

                  sourceArray = new Uint8Array(this, begin, num);
                  targetArray.set(sourceArray);

                  return target;
              };
          })();
      }

      // ---------------------------------------------------

      /**
       * Helpers.
       */

      function toUtf8(str) {
          if (/[\u0080-\uFFFF]/.test(str)) {
              str = unescape(encodeURIComponent(str));
          }

          return str;
      }

      function utf8Str2ArrayBuffer(str, returnUInt8Array) {
          var length = str.length,
             buff = new ArrayBuffer(length),
             arr = new Uint8Array(buff),
             i;

          for (i = 0; i < length; i += 1) {
              arr[i] = str.charCodeAt(i);
          }

          return returnUInt8Array ? arr : buff;
      }

      function arrayBuffer2Utf8Str(buff) {
          return String.fromCharCode.apply(null, new Uint8Array(buff));
      }

      function concatenateArrayBuffers(first, second, returnUInt8Array) {
          var result = new Uint8Array(first.byteLength + second.byteLength);

          result.set(new Uint8Array(first));
          result.set(new Uint8Array(second), first.byteLength);

          return returnUInt8Array ? result : result.buffer;
      }

      function hexToBinaryString(hex) {
          var bytes = [],
              length = hex.length,
              x;

          for (x = 0; x < length - 1; x += 2) {
              bytes.push(parseInt(hex.substr(x, 2), 16));
          }

          return String.fromCharCode.apply(String, bytes);
      }

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation.
       *
       * Use this class to perform an incremental md5, otherwise use the
       * static methods instead.
       */

      function SparkMD5() {
          // call reset to init the instance
          this.reset();
      }

      /**
       * Appends a string.
       * A conversion will be applied if an utf8 string is detected.
       *
       * @param {String} str The string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.append = function (str) {
          // Converts the string to utf8 bytes if necessary
          // Then append as binary
          this.appendBinary(toUtf8(str));

          return this;
      };

      /**
       * Appends a binary string.
       *
       * @param {String} contents The binary string to be appended
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.appendBinary = function (contents) {
          this._buff += contents;
          this._length += contents.length;

          var length = this._buff.length,
              i;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
          }

          this._buff = this._buff.substring(i - 64);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              i,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.reset = function () {
          this._buff = '';
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.prototype.getState = function () {
          return {
              buff: this._buff,
              length: this._length,
              hash: this._hash
          };
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5} The instance itself
       */
      SparkMD5.prototype.setState = function (state) {
          this._buff = state.buff;
          this._length = state.length;
          this._hash = state.hash;

          return this;
      };

      /**
       * Releases memory used by the incremental buffer and other additional
       * resources. If you plan to use the instance again, use reset instead.
       */
      SparkMD5.prototype.destroy = function () {
          delete this._hash;
          delete this._buff;
          delete this._length;
      };

      /**
       * Finish the final calculation based on the tail.
       *
       * @param {Array}  tail   The tail (will be modified)
       * @param {Number} length The length of the remaining buffer
       */
      SparkMD5.prototype._finish = function (tail, length) {
          var i = length,
              tmp,
              lo,
              hi;

          tail[i >> 2] |= 0x80 << ((i % 4) << 3);
          if (i > 55) {
              md5cycle(this._hash, tail);
              for (i = 0; i < 16; i += 1) {
                  tail[i] = 0;
              }
          }

          // Do the final computation based on the tail and length
          // Beware that the final length may not fit in 32 bits so we take care of that
          tmp = this._length * 8;
          tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
          lo = parseInt(tmp[2], 16);
          hi = parseInt(tmp[1], 16) || 0;

          tail[14] = lo;
          tail[15] = hi;
          md5cycle(this._hash, tail);
      };

      /**
       * Performs the md5 hash on a string.
       * A conversion will be applied if utf8 string is detected.
       *
       * @param {String}  str The string
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hash = function (str, raw) {
          // Converts the string to utf8 bytes if necessary
          // Then compute it using the binary function
          return SparkMD5.hashBinary(toUtf8(str), raw);
      };

      /**
       * Performs the md5 hash on a binary string.
       *
       * @param {String}  content The binary string
       * @param {Boolean} raw     True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.hashBinary = function (content, raw) {
          var hash = md51(content),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      // ---------------------------------------------------

      /**
       * SparkMD5 OOP implementation for array buffers.
       *
       * Use this class to perform an incremental md5 ONLY for array buffers.
       */
      SparkMD5.ArrayBuffer = function () {
          // call reset to init the instance
          this.reset();
      };

      /**
       * Appends an array buffer.
       *
       * @param {ArrayBuffer} arr The array to be appended
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.append = function (arr) {
          var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
              length = buff.length,
              i;

          this._length += arr.byteLength;

          for (i = 64; i <= length; i += 64) {
              md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
          }

          this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

          return this;
      };

      /**
       * Finishes the incremental computation, reseting the internal state and
       * returning the result.
       *
       * @param {Boolean} raw True to get the raw string, false to get the hex string
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.prototype.end = function (raw) {
          var buff = this._buff,
              length = buff.length,
              tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
              i,
              ret;

          for (i = 0; i < length; i += 1) {
              tail[i >> 2] |= buff[i] << ((i % 4) << 3);
          }

          this._finish(tail, length);
          ret = hex(this._hash);

          if (raw) {
              ret = hexToBinaryString(ret);
          }

          this.reset();

          return ret;
      };

      /**
       * Resets the internal state of the computation.
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.reset = function () {
          this._buff = new Uint8Array(0);
          this._length = 0;
          this._hash = [1732584193, -271733879, -1732584194, 271733878];

          return this;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @return {Object} The state
       */
      SparkMD5.ArrayBuffer.prototype.getState = function () {
          var state = SparkMD5.prototype.getState.call(this);

          // Convert buffer to a string
          state.buff = arrayBuffer2Utf8Str(state.buff);

          return state;
      };

      /**
       * Gets the internal state of the computation.
       *
       * @param {Object} state The state
       *
       * @return {SparkMD5.ArrayBuffer} The instance itself
       */
      SparkMD5.ArrayBuffer.prototype.setState = function (state) {
          // Convert string to buffer
          state.buff = utf8Str2ArrayBuffer(state.buff, true);

          return SparkMD5.prototype.setState.call(this, state);
      };

      SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

      SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

      /**
       * Performs the md5 hash on an array buffer.
       *
       * @param {ArrayBuffer} arr The array buffer
       * @param {Boolean}     raw True to get the raw string, false to get the hex one
       *
       * @return {String} The result
       */
      SparkMD5.ArrayBuffer.hash = function (arr, raw) {
          var hash = md51_array(new Uint8Array(arr)),
              ret = hex(hash);

          return raw ? hexToBinaryString(ret) : ret;
      };

      return SparkMD5;
  }));
  });

  var jsMd5File = function (file, callback, progress) {
    var blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice;
    var chunkSize = 2097152;
    var chunks = Math.ceil(file.size / chunkSize);
    var currentChunk = 0;
    var spark = new sparkMd5.ArrayBuffer();
    var reader = new FileReader();

    loadNext();

    reader.onloadend = function (e) {
      spark.append(e.target.result); // Append array buffer
      currentChunk++;

      if (currentChunk < chunks) {
        loadNext();
      } else {
        notify(1.0);
        callback(null, spark.end());
      }
    };

    reader.onerror = function () {
  	notify(1.0);
      callback('oops, something went wrong.');
    };
    

    /////////////////////////
    function notify(percent) {
  	if (progress) {
  		progress(percent);
  	}
    }
  	
    function loadNext() {
      var start = currentChunk * chunkSize;
      var end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize;
      notify(start / file.size);
      reader.readAsArrayBuffer(blobSlice.call(file, start, end));
    }

  };

  var jsMd5File$1 = jsMd5File;

  var fileExtension = createCommonjsModule(function (module, exports) {

  (function(m) {
    {
      module.exports = m();
    }
  })(function() {
    return function fileExtension(filename, opts) {
      if (!opts) opts = {};
      if (!filename) return "";
      var ext = (/[^./\\]*$/.exec(filename) || [""])[0];
      return opts.preserveCase ? ext : ext.toLowerCase();
    };
  });
  });

  var has = Object.prototype.hasOwnProperty;
  var isArray$1 = Array.isArray;

  var hexTable = (function () {
      var array = [];
      for (var i = 0; i < 256; ++i) {
          array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
      }

      return array;
  }());

  var compactQueue = function compactQueue(queue) {
      while (queue.length > 1) {
          var item = queue.pop();
          var obj = item.obj[item.prop];

          if (isArray$1(obj)) {
              var compacted = [];

              for (var j = 0; j < obj.length; ++j) {
                  if (typeof obj[j] !== 'undefined') {
                      compacted.push(obj[j]);
                  }
              }

              item.obj[item.prop] = compacted;
          }
      }
  };

  var arrayToObject = function arrayToObject(source, options) {
      var obj = options && options.plainObjects ? Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
          if (typeof source[i] !== 'undefined') {
              obj[i] = source[i];
          }
      }

      return obj;
  };

  var merge = function merge(target, source, options) {
      /* eslint no-param-reassign: 0 */
      if (!source) {
          return target;
      }

      if (typeof source !== 'object') {
          if (isArray$1(target)) {
              target.push(source);
          } else if (target && typeof target === 'object') {
              if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                  target[source] = true;
              }
          } else {
              return [target, source];
          }

          return target;
      }

      if (!target || typeof target !== 'object') {
          return [target].concat(source);
      }

      var mergeTarget = target;
      if (isArray$1(target) && !isArray$1(source)) {
          mergeTarget = arrayToObject(target, options);
      }

      if (isArray$1(target) && isArray$1(source)) {
          source.forEach(function (item, i) {
              if (has.call(target, i)) {
                  var targetItem = target[i];
                  if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                      target[i] = merge(targetItem, item, options);
                  } else {
                      target.push(item);
                  }
              } else {
                  target[i] = item;
              }
          });
          return target;
      }

      return Object.keys(source).reduce(function (acc, key) {
          var value = source[key];

          if (has.call(acc, key)) {
              acc[key] = merge(acc[key], value, options);
          } else {
              acc[key] = value;
          }
          return acc;
      }, mergeTarget);
  };

  var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function (acc, key) {
          acc[key] = source[key];
          return acc;
      }, target);
  };

  var decode = function (str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, ' ');
      if (charset === 'iso-8859-1') {
          // unescape never throws, no try...catch needed:
          return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      // utf-8
      try {
          return decodeURIComponent(strWithoutPlus);
      } catch (e) {
          return strWithoutPlus;
      }
  };

  var encode = function encode(str, defaultEncoder, charset) {
      // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
      // It has been adapted here for stricter adherence to RFC 3986
      if (str.length === 0) {
          return str;
      }

      var string = str;
      if (typeof str === 'symbol') {
          string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== 'string') {
          string = String(str);
      }

      if (charset === 'iso-8859-1') {
          return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
              return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
          });
      }

      var out = '';
      for (var i = 0; i < string.length; ++i) {
          var c = string.charCodeAt(i);

          if (
              c === 0x2D // -
              || c === 0x2E // .
              || c === 0x5F // _
              || c === 0x7E // ~
              || (c >= 0x30 && c <= 0x39) // 0-9
              || (c >= 0x41 && c <= 0x5A) // a-z
              || (c >= 0x61 && c <= 0x7A) // A-Z
          ) {
              out += string.charAt(i);
              continue;
          }

          if (c < 0x80) {
              out = out + hexTable[c];
              continue;
          }

          if (c < 0x800) {
              out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          if (c < 0xD800 || c >= 0xE000) {
              out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
              continue;
          }

          i += 1;
          c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
          out += hexTable[0xF0 | (c >> 18)]
              + hexTable[0x80 | ((c >> 12) & 0x3F)]
              + hexTable[0x80 | ((c >> 6) & 0x3F)]
              + hexTable[0x80 | (c & 0x3F)];
      }

      return out;
  };

  var compact = function compact(value) {
      var queue = [{ obj: { o: value }, prop: 'o' }];
      var refs = [];

      for (var i = 0; i < queue.length; ++i) {
          var item = queue[i];
          var obj = item.obj[item.prop];

          var keys = Object.keys(obj);
          for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                  queue.push({ obj: obj, prop: key });
                  refs.push(val);
              }
          }
      }

      compactQueue(queue);

      return value;
  };

  var isRegExp = function isRegExp(obj) {
      return Object.prototype.toString.call(obj) === '[object RegExp]';
  };

  var isBuffer = function isBuffer(obj) {
      if (!obj || typeof obj !== 'object') {
          return false;
      }

      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
  };

  var combine = function combine(a, b) {
      return [].concat(a, b);
  };

  var maybeMap = function maybeMap(val, fn) {
      if (isArray$1(val)) {
          var mapped = [];
          for (var i = 0; i < val.length; i += 1) {
              mapped.push(fn(val[i]));
          }
          return mapped;
      }
      return fn(val);
  };

  var utils = {
      arrayToObject: arrayToObject,
      assign: assign,
      combine: combine,
      compact: compact,
      decode: decode,
      encode: encode,
      isBuffer: isBuffer,
      isRegExp: isRegExp,
      maybeMap: maybeMap,
      merge: merge
  };

  var replace = String.prototype.replace;
  var percentTwenties = /%20/g;



  var Format = {
      RFC1738: 'RFC1738',
      RFC3986: 'RFC3986'
  };

  var formats = utils.assign(
      {
          'default': Format.RFC3986,
          formatters: {
              RFC1738: function (value) {
                  return replace.call(value, percentTwenties, '+');
              },
              RFC3986: function (value) {
                  return String(value);
              }
          }
      },
      Format
  );

  var has$1 = Object.prototype.hasOwnProperty;

  var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
          return prefix + '[]';
      },
      comma: 'comma',
      indices: function indices(prefix, key) {
          return prefix + '[' + key + ']';
      },
      repeat: function repeat(prefix) {
          return prefix;
      }
  };

  var isArray$2 = Array.isArray;
  var push = Array.prototype.push;
  var pushToArray = function (arr, valueOrArray) {
      push.apply(arr, isArray$2(valueOrArray) ? valueOrArray : [valueOrArray]);
  };

  var toISO = Date.prototype.toISOString;

  var defaultFormat = formats['default'];
  var defaults = {
      addQueryPrefix: false,
      allowDots: false,
      charset: 'utf-8',
      charsetSentinel: false,
      delimiter: '&',
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      // deprecated
      indices: false,
      serializeDate: function serializeDate(date) {
          return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
  };

  var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
      return typeof v === 'string'
          || typeof v === 'number'
          || typeof v === 'boolean'
          || typeof v === 'symbol'
          || typeof v === 'bigint';
  };

  var stringify = function stringify(
      object,
      prefix,
      generateArrayPrefix,
      strictNullHandling,
      skipNulls,
      encoder,
      filter,
      sort,
      allowDots,
      serializeDate,
      formatter,
      encodeValuesOnly,
      charset
  ) {
      var obj = object;
      if (typeof filter === 'function') {
          obj = filter(prefix, obj);
      } else if (obj instanceof Date) {
          obj = serializeDate(obj);
      } else if (generateArrayPrefix === 'comma' && isArray$2(obj)) {
          obj = utils.maybeMap(obj, function (value) {
              if (value instanceof Date) {
                  return serializeDate(value);
              }
              return value;
          }).join(',');
      }

      if (obj === null) {
          if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key') : prefix;
          }

          obj = '';
      }

      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
          if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key');
              return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value'))];
          }
          return [formatter(prefix) + '=' + formatter(String(obj))];
      }

      var values = [];

      if (typeof obj === 'undefined') {
          return values;
      }

      var objKeys;
      if (isArray$2(filter)) {
          objKeys = filter;
      } else {
          var keys = Object.keys(obj);
          objKeys = sort ? keys.sort(sort) : keys;
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];
          var value = obj[key];

          if (skipNulls && value === null) {
              continue;
          }

          var keyPrefix = isArray$2(obj)
              ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(prefix, key) : prefix
              : prefix + (allowDots ? '.' + key : '[' + key + ']');

          pushToArray(values, stringify(
              value,
              keyPrefix,
              generateArrayPrefix,
              strictNullHandling,
              skipNulls,
              encoder,
              filter,
              sort,
              allowDots,
              serializeDate,
              formatter,
              encodeValuesOnly,
              charset
          ));
      }

      return values;
  };

  var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
      if (!opts) {
          return defaults;
      }

      if (opts.encoder !== null && opts.encoder !== undefined && typeof opts.encoder !== 'function') {
          throw new TypeError('Encoder has to be a function.');
      }

      var charset = opts.charset || defaults.charset;
      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }

      var format = formats['default'];
      if (typeof opts.format !== 'undefined') {
          if (!has$1.call(formats.formatters, opts.format)) {
              throw new TypeError('Unknown format option provided.');
          }
          format = opts.format;
      }
      var formatter = formats.formatters[format];

      var filter = defaults.filter;
      if (typeof opts.filter === 'function' || isArray$2(opts.filter)) {
          filter = opts.filter;
      }

      return {
          addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
          allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
          delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
          encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
          encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
          encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
          filter: filter,
          formatter: formatter,
          serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
          skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
          sort: typeof opts.sort === 'function' ? opts.sort : null,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
      };
  };

  var stringify_1 = function (object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);

      var objKeys;
      var filter;

      if (typeof options.filter === 'function') {
          filter = options.filter;
          obj = filter('', obj);
      } else if (isArray$2(options.filter)) {
          filter = options.filter;
          objKeys = filter;
      }

      var keys = [];

      if (typeof obj !== 'object' || obj === null) {
          return '';
      }

      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
          arrayFormat = opts.arrayFormat;
      } else if (opts && 'indices' in opts) {
          arrayFormat = opts.indices ? 'indices' : 'repeat';
      } else {
          arrayFormat = 'indices';
      }

      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];

      if (!objKeys) {
          objKeys = Object.keys(obj);
      }

      if (options.sort) {
          objKeys.sort(options.sort);
      }

      for (var i = 0; i < objKeys.length; ++i) {
          var key = objKeys[i];

          if (options.skipNulls && obj[key] === null) {
              continue;
          }
          pushToArray(keys, stringify(
              obj[key],
              key,
              generateArrayPrefix,
              options.strictNullHandling,
              options.skipNulls,
              options.encode ? options.encoder : null,
              options.filter,
              options.sort,
              options.allowDots,
              options.serializeDate,
              options.formatter,
              options.encodeValuesOnly,
              options.charset
          ));
      }

      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? '?' : '';

      if (options.charsetSentinel) {
          if (options.charset === 'iso-8859-1') {
              // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
              prefix += 'utf8=%26%2310003%3B&';
          } else {
              // encodeURIComponent('✓')
              prefix += 'utf8=%E2%9C%93&';
          }
      }

      return joined.length > 0 ? prefix + joined : '';
  };

  var has$2 = Object.prototype.hasOwnProperty;
  var isArray$3 = Array.isArray;

  var defaults$1 = {
      allowDots: false,
      allowPrototypes: false,
      arrayLimit: 20,
      charset: 'utf-8',
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: '&',
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1000,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
  };

  var interpretNumericEntities = function (str) {
      return str.replace(/&#(\d+);/g, function ($0, numberStr) {
          return String.fromCharCode(parseInt(numberStr, 10));
      });
  };

  var parseArrayValue = function (val, options) {
      if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
          return val.split(',');
      }

      return val;
  };

  // This is what browsers will submit when the ✓ character occurs in an
  // application/x-www-form-urlencoded body and the encoding of the page containing
  // the form is iso-8859-1, or when the submitted form has an accept-charset
  // attribute of iso-8859-1. Presumably also with other charsets that do not contain
  // the ✓ character, such as us-ascii.
  var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

  // These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
  var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

  var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
      var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1; // Keep track of where the utf8 sentinel was found
      var i;

      var charset = options.charset;
      if (options.charsetSentinel) {
          for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf('utf8=') === 0) {
                  if (parts[i] === charsetSentinel) {
                      charset = 'utf-8';
                  } else if (parts[i] === isoSentinel) {
                      charset = 'iso-8859-1';
                  }
                  skipIndex = i;
                  i = parts.length; // The eslint settings do not allow break;
              }
          }
      }

      for (i = 0; i < parts.length; ++i) {
          if (i === skipIndex) {
              continue;
          }
          var part = parts[i];

          var bracketEqualsPos = part.indexOf(']=');
          var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

          var key, val;
          if (pos === -1) {
              key = options.decoder(part, defaults$1.decoder, charset, 'key');
              val = options.strictNullHandling ? null : '';
          } else {
              key = options.decoder(part.slice(0, pos), defaults$1.decoder, charset, 'key');
              val = utils.maybeMap(
                  parseArrayValue(part.slice(pos + 1), options),
                  function (encodedVal) {
                      return options.decoder(encodedVal, defaults$1.decoder, charset, 'value');
                  }
              );
          }

          if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
              val = interpretNumericEntities(val);
          }

          if (part.indexOf('[]=') > -1) {
              val = isArray$3(val) ? [val] : val;
          }

          if (has$2.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
          } else {
              obj[key] = val;
          }
      }

      return obj;
  };

  var parseObject = function (chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);

      for (var i = chain.length - 1; i >= 0; --i) {
          var obj;
          var root = chain[i];

          if (root === '[]' && options.parseArrays) {
              obj = [].concat(leaf);
          } else {
              obj = options.plainObjects ? Object.create(null) : {};
              var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === '') {
                  obj = { 0: leaf };
              } else if (
                  !isNaN(index)
                  && root !== cleanRoot
                  && String(index) === cleanRoot
                  && index >= 0
                  && (options.parseArrays && index <= options.arrayLimit)
              ) {
                  obj = [];
                  obj[index] = leaf;
              } else {
                  obj[cleanRoot] = leaf;
              }
          }

          leaf = obj; // eslint-disable-line no-param-reassign
      }

      return leaf;
  };

  var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
          return;
      }

      // Transform dot notation to bracket notation
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

      // The regex chunks

      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;

      // Get the parent

      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;

      // Stash the parent if it exists

      var keys = [];
      if (parent) {
          // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
          if (!options.plainObjects && has$2.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                  return;
              }
          }

          keys.push(parent);
      }

      // Loop through children appending to the array until we hit depth

      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
          i += 1;
          if (!options.plainObjects && has$2.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                  return;
              }
          }
          keys.push(segment[1]);
      }

      // If there's a remainder, just add whatever is left

      if (segment) {
          keys.push('[' + key.slice(segment.index) + ']');
      }

      return parseObject(keys, val, options, valuesParsed);
  };

  var normalizeParseOptions = function normalizeParseOptions(opts) {
      if (!opts) {
          return defaults$1;
      }

      if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
          throw new TypeError('Decoder has to be a function.');
      }

      if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
          throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
      }
      var charset = typeof opts.charset === 'undefined' ? defaults$1.charset : opts.charset;

      return {
          allowDots: typeof opts.allowDots === 'undefined' ? defaults$1.allowDots : !!opts.allowDots,
          allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults$1.allowPrototypes,
          arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults$1.arrayLimit,
          charset: charset,
          charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults$1.charsetSentinel,
          comma: typeof opts.comma === 'boolean' ? opts.comma : defaults$1.comma,
          decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults$1.decoder,
          delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults$1.delimiter,
          // eslint-disable-next-line no-implicit-coercion, no-extra-parens
          depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults$1.depth,
          ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
          interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults$1.interpretNumericEntities,
          parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults$1.parameterLimit,
          parseArrays: opts.parseArrays !== false,
          plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults$1.plainObjects,
          strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults$1.strictNullHandling
      };
  };

  var parse$1 = function (str, opts) {
      var options = normalizeParseOptions(opts);

      if (str === '' || str === null || typeof str === 'undefined') {
          return options.plainObjects ? Object.create(null) : {};
      }

      var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
      var obj = options.plainObjects ? Object.create(null) : {};

      // Iterate over the keys and setup the new object

      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
          var key = keys[i];
          var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
          obj = utils.merge(obj, newObj, options);
      }

      return utils.compact(obj);
  };

  var lib = {
      formats: formats,
      parse: parse$1,
      stringify: stringify_1
  };
  var lib_2 = lib.parse;
  var lib_3 = lib.stringify;

  var Buffer$1 = buffer.Buffer;

  var safer = {};

  var key;

  for (key in buffer) {
    if (!buffer.hasOwnProperty(key)) continue
    if (key === 'SlowBuffer' || key === 'Buffer') continue
    safer[key] = buffer[key];
  }

  var Safer = safer.Buffer = {};
  for (key in Buffer$1) {
    if (!Buffer$1.hasOwnProperty(key)) continue
    if (key === 'allocUnsafe' || key === 'allocUnsafeSlow') continue
    Safer[key] = Buffer$1[key];
  }

  safer.Buffer.prototype = Buffer$1.prototype;

  if (!Safer.from || Safer.from === Uint8Array.from) {
    Safer.from = function (value, encodingOrOffset, length) {
      if (typeof value === 'number') {
        throw new TypeError('The "value" argument must not be of type number. Received type ' + typeof value)
      }
      if (value && typeof value.length === 'undefined') {
        throw new TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof value)
      }
      return Buffer$1(value, encodingOrOffset, length)
    };
  }

  if (!Safer.alloc) {
    Safer.alloc = function (size, fill, encoding) {
      if (typeof size !== 'number') {
        throw new TypeError('The "size" argument must be of type number. Received type ' + typeof size)
      }
      if (size < 0 || size >= 2 * (1 << 30)) {
        throw new RangeError('The value "' + size + '" is invalid for option "size"')
      }
      var buf = Buffer$1(size);
      if (!fill || fill.length === 0) {
        buf.fill(0);
      } else if (typeof encoding === 'string') {
        buf.fill(fill, encoding);
      } else {
        buf.fill(fill);
      }
      return buf
    };
  }

  if (!safer.kStringMaxLength) {
    try {
      safer.kStringMaxLength = process.binding('buffer').kStringMaxLength;
    } catch (e) {
      // we can't determine kStringMaxLength in environments where process.binding
      // is unsupported, so let's not set it
    }
  }

  if (!safer.constants) {
    safer.constants = {
      MAX_LENGTH: safer.kMaxLength
    };
    if (safer.kStringMaxLength) {
      safer.constants.MAX_STRING_LENGTH = safer.kStringMaxLength;
    }
  }

  var safer_1 = safer;

  var BOMChar = '\uFEFF';

  var PrependBOM = PrependBOMWrapper;
  function PrependBOMWrapper(encoder, options) {
      this.encoder = encoder;
      this.addBOM = true;
  }

  PrependBOMWrapper.prototype.write = function(str) {
      if (this.addBOM) {
          str = BOMChar + str;
          this.addBOM = false;
      }

      return this.encoder.write(str);
  };

  PrependBOMWrapper.prototype.end = function() {
      return this.encoder.end();
  };


  //------------------------------------------------------------------------------

  var StripBOM = StripBOMWrapper;
  function StripBOMWrapper(decoder, options) {
      this.decoder = decoder;
      this.pass = false;
      this.options = options || {};
  }

  StripBOMWrapper.prototype.write = function(buf) {
      var res = this.decoder.write(buf);
      if (this.pass || !res)
          return res;

      if (res[0] === BOMChar) {
          res = res.slice(1);
          if (typeof this.options.stripBOM === 'function')
              this.options.stripBOM();
      }

      this.pass = true;
      return res;
  };

  StripBOMWrapper.prototype.end = function() {
      return this.decoder.end();
  };

  var bomHandling = {
  	PrependBOM: PrependBOM,
  	StripBOM: StripBOM
  };

  var Buffer$2 = safer_1.Buffer;

  // Export Node.js internal encodings.

  var internal = {
      // Encodings
      utf8:   { type: "_internal", bomAware: true},
      cesu8:  { type: "_internal", bomAware: true},
      unicode11utf8: "utf8",

      ucs2:   { type: "_internal", bomAware: true},
      utf16le: "ucs2",

      binary: { type: "_internal" },
      base64: { type: "_internal" },
      hex:    { type: "_internal" },

      // Codec.
      _internal: InternalCodec,
  };

  //------------------------------------------------------------------------------

  function InternalCodec(codecOptions, iconv) {
      this.enc = codecOptions.encodingName;
      this.bomAware = codecOptions.bomAware;

      if (this.enc === "base64")
          this.encoder = InternalEncoderBase64;
      else if (this.enc === "cesu8") {
          this.enc = "utf8"; // Use utf8 for decoding.
          this.encoder = InternalEncoderCesu8;

          // Add decoder for versions of Node not supporting CESU-8
          if (Buffer$2.from('eda0bdedb2a9', 'hex').toString() !== '💩') {
              this.decoder = InternalDecoderCesu8;
              this.defaultCharUnicode = iconv.defaultCharUnicode;
          }
      }
  }

  InternalCodec.prototype.encoder = InternalEncoder;
  InternalCodec.prototype.decoder = InternalDecoder;

  //------------------------------------------------------------------------------

  // We use node.js internal decoder. Its signature is the same as ours.
  var StringDecoder = string_decoder.StringDecoder;

  if (!StringDecoder.prototype.end) // Node v0.8 doesn't have this method.
      StringDecoder.prototype.end = function() {};


  function InternalDecoder(options, codec) {
      this.decoder = new StringDecoder(codec.enc);
  }

  InternalDecoder.prototype.write = function(buf) {
      if (!Buffer$2.isBuffer(buf)) {
          buf = Buffer$2.from(buf);
      }

      return this.decoder.write(buf);
  };

  InternalDecoder.prototype.end = function() {
      return this.decoder.end();
  };


  //------------------------------------------------------------------------------
  // Encoder is mostly trivial

  function InternalEncoder(options, codec) {
      this.enc = codec.enc;
  }

  InternalEncoder.prototype.write = function(str) {
      return Buffer$2.from(str, this.enc);
  };

  InternalEncoder.prototype.end = function() {
  };


  //------------------------------------------------------------------------------
  // Except base64 encoder, which must keep its state.

  function InternalEncoderBase64(options, codec) {
      this.prevStr = '';
  }

  InternalEncoderBase64.prototype.write = function(str) {
      str = this.prevStr + str;
      var completeQuads = str.length - (str.length % 4);
      this.prevStr = str.slice(completeQuads);
      str = str.slice(0, completeQuads);

      return Buffer$2.from(str, "base64");
  };

  InternalEncoderBase64.prototype.end = function() {
      return Buffer$2.from(this.prevStr, "base64");
  };


  //------------------------------------------------------------------------------
  // CESU-8 encoder is also special.

  function InternalEncoderCesu8(options, codec) {
  }

  InternalEncoderCesu8.prototype.write = function(str) {
      var buf = Buffer$2.alloc(str.length * 3), bufIdx = 0;
      for (var i = 0; i < str.length; i++) {
          var charCode = str.charCodeAt(i);
          // Naive implementation, but it works because CESU-8 is especially easy
          // to convert from UTF-16 (which all JS strings are encoded in).
          if (charCode < 0x80)
              buf[bufIdx++] = charCode;
          else if (charCode < 0x800) {
              buf[bufIdx++] = 0xC0 + (charCode >>> 6);
              buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          }
          else { // charCode will always be < 0x10000 in javascript.
              buf[bufIdx++] = 0xE0 + (charCode >>> 12);
              buf[bufIdx++] = 0x80 + ((charCode >>> 6) & 0x3f);
              buf[bufIdx++] = 0x80 + (charCode & 0x3f);
          }
      }
      return buf.slice(0, bufIdx);
  };

  InternalEncoderCesu8.prototype.end = function() {
  };

  //------------------------------------------------------------------------------
  // CESU-8 decoder is not implemented in Node v4.0+

  function InternalDecoderCesu8(options, codec) {
      this.acc = 0;
      this.contBytes = 0;
      this.accBytes = 0;
      this.defaultCharUnicode = codec.defaultCharUnicode;
  }

  InternalDecoderCesu8.prototype.write = function(buf) {
      var acc = this.acc, contBytes = this.contBytes, accBytes = this.accBytes, 
          res = '';
      for (var i = 0; i < buf.length; i++) {
          var curByte = buf[i];
          if ((curByte & 0xC0) !== 0x80) { // Leading byte
              if (contBytes > 0) { // Previous code is invalid
                  res += this.defaultCharUnicode;
                  contBytes = 0;
              }

              if (curByte < 0x80) { // Single-byte code
                  res += String.fromCharCode(curByte);
              } else if (curByte < 0xE0) { // Two-byte code
                  acc = curByte & 0x1F;
                  contBytes = 1; accBytes = 1;
              } else if (curByte < 0xF0) { // Three-byte code
                  acc = curByte & 0x0F;
                  contBytes = 2; accBytes = 1;
              } else { // Four or more are not supported for CESU-8.
                  res += this.defaultCharUnicode;
              }
          } else { // Continuation byte
              if (contBytes > 0) { // We're waiting for it.
                  acc = (acc << 6) | (curByte & 0x3f);
                  contBytes--; accBytes++;
                  if (contBytes === 0) {
                      // Check for overlong encoding, but support Modified UTF-8 (encoding NULL as C0 80)
                      if (accBytes === 2 && acc < 0x80 && acc > 0)
                          res += this.defaultCharUnicode;
                      else if (accBytes === 3 && acc < 0x800)
                          res += this.defaultCharUnicode;
                      else
                          // Actually add character.
                          res += String.fromCharCode(acc);
                  }
              } else { // Unexpected continuation byte
                  res += this.defaultCharUnicode;
              }
          }
      }
      this.acc = acc; this.contBytes = contBytes; this.accBytes = accBytes;
      return res;
  };

  InternalDecoderCesu8.prototype.end = function() {
      var res = 0;
      if (this.contBytes > 0)
          res += this.defaultCharUnicode;
      return res;
  };

  var Buffer$3 = safer_1.Buffer;

  // == UTF32-LE/BE codec. ==========================================================

  var _utf32 = Utf32Codec;

  function Utf32Codec(codecOptions, iconv) {
      this.iconv = iconv;
      this.bomAware = true;
      this.isLE = codecOptions.isLE;
  }

  var utf32le = { type: '_utf32', isLE: true };
  var utf32be = { type: '_utf32', isLE: false };

  // Aliases
  var ucs4le = 'utf32le';
  var ucs4be = 'utf32be';

  Utf32Codec.prototype.encoder = Utf32Encoder;
  Utf32Codec.prototype.decoder = Utf32Decoder;

  // -- Encoding

  function Utf32Encoder(options, codec) {
      this.isLE = codec.isLE;
      this.highSurrogate = 0;
  }

  Utf32Encoder.prototype.write = function(str) {
      var src = Buffer$3.from(str, 'ucs2');
      var dst = Buffer$3.alloc(src.length * 2);
      var write32 = this.isLE ? dst.writeUInt32LE : dst.writeUInt32BE;
      var offset = 0;

      for (var i = 0; i < src.length; i += 2) {
          var code = src.readUInt16LE(i);
          var isHighSurrogate = (0xD800 <= code && code < 0xDC00);
          var isLowSurrogate = (0xDC00 <= code && code < 0xE000);

          if (this.highSurrogate) {
              if (isHighSurrogate || !isLowSurrogate) {
                  // There shouldn't be two high surrogates in a row, nor a high surrogate which isn't followed by a low
                  // surrogate. If this happens, keep the pending high surrogate as a stand-alone semi-invalid character
                  // (technically wrong, but expected by some applications, like Windows file names).
                  write32.call(dst, this.highSurrogate, offset);
                  offset += 4;
              }
              else {
                  // Create 32-bit value from high and low surrogates;
                  var codepoint = (((this.highSurrogate - 0xD800) << 10) | (code - 0xDC00)) + 0x10000;

                  write32.call(dst, codepoint, offset);
                  offset += 4;
                  this.highSurrogate = 0;

                  continue;
              }
          }

          if (isHighSurrogate)
              this.highSurrogate = code;
          else {
              // Even if the current character is a low surrogate, with no previous high surrogate, we'll
              // encode it as a semi-invalid stand-alone character for the same reasons expressed above for
              // unpaired high surrogates.
              write32.call(dst, code, offset);
              offset += 4;
              this.highSurrogate = 0;
          }
      }

      if (offset < dst.length)
          dst = dst.slice(0, offset);

      return dst;
  };

  Utf32Encoder.prototype.end = function() {
      // Treat any leftover high surrogate as a semi-valid independent character.
      if (!this.highSurrogate)
          return;

      var buf = Buffer$3.alloc(4);

      if (this.isLE)
          buf.writeUInt32LE(this.highSurrogate, 0);
      else
          buf.writeUInt32BE(this.highSurrogate, 0);

      this.highSurrogate = 0;

      return buf;
  };

  // -- Decoding

  function Utf32Decoder(options, codec) {
      this.isLE = codec.isLE;
      this.badChar = codec.iconv.defaultCharUnicode.charCodeAt(0);
      this.overflow = [];
  }

  Utf32Decoder.prototype.write = function(src) {
      if (src.length === 0)
          return '';

      var i = 0;
      var codepoint = 0;
      var dst = Buffer$3.alloc(src.length + 4);
      var offset = 0;
      var isLE = this.isLE;
      var overflow = this.overflow;
      var badChar = this.badChar;

      if (overflow.length > 0) {
          for (; i < src.length && overflow.length < 4; i++)
              overflow.push(src[i]);
          
          if (overflow.length === 4) {
              // NOTE: codepoint is a signed int32 and can be negative.
              // NOTE: We copied this block from below to help V8 optimize it (it works with array, not buffer).
              if (isLE) {
                  codepoint = overflow[i] | (overflow[i+1] << 8) | (overflow[i+2] << 16) | (overflow[i+3] << 24);
              } else {
                  codepoint = overflow[i+3] | (overflow[i+2] << 8) | (overflow[i+1] << 16) | (overflow[i] << 24);
              }
              overflow.length = 0;

              offset = _writeCodepoint(dst, offset, codepoint, badChar);
          }
      }

      // Main loop. Should be as optimized as possible.
      for (; i < src.length - 3; i += 4) {
          // NOTE: codepoint is a signed int32 and can be negative.
          if (isLE) {
              codepoint = src[i] | (src[i+1] << 8) | (src[i+2] << 16) | (src[i+3] << 24);
          } else {
              codepoint = src[i+3] | (src[i+2] << 8) | (src[i+1] << 16) | (src[i] << 24);
          }
          offset = _writeCodepoint(dst, offset, codepoint, badChar);
      }

      // Keep overflowing bytes.
      for (; i < src.length; i++) {
          overflow.push(src[i]);
      }

      return dst.slice(0, offset).toString('ucs2');
  };

  function _writeCodepoint(dst, offset, codepoint, badChar) {
      // NOTE: codepoint is signed int32 and can be negative. We keep it that way to help V8 with optimizations.
      if (codepoint < 0 || codepoint > 0x10FFFF) {
          // Not a valid Unicode codepoint
          codepoint = badChar;
      } 

      // Ephemeral Planes: Write high surrogate.
      if (codepoint >= 0x10000) {
          codepoint -= 0x10000;

          var high = 0xD800 | (codepoint >> 10);
          dst[offset++] = high & 0xff;
          dst[offset++] = high >> 8;

          // Low surrogate is written below.
          var codepoint = 0xDC00 | (codepoint & 0x3FF);
      }

      // Write BMP char or low surrogate.
      dst[offset++] = codepoint & 0xff;
      dst[offset++] = codepoint >> 8;

      return offset;
  }
  Utf32Decoder.prototype.end = function() {
      this.overflow.length = 0;
  };

  // == UTF-32 Auto codec =============================================================
  // Decoder chooses automatically from UTF-32LE and UTF-32BE using BOM and space-based heuristic.
  // Defaults to UTF-32LE. http://en.wikipedia.org/wiki/UTF-32
  // Encoder/decoder default can be changed: iconv.decode(buf, 'utf32', {defaultEncoding: 'utf-32be'});

  // Encoder prepends BOM (which can be overridden with (addBOM: false}).

  var utf32_1 = Utf32AutoCodec;
  var ucs4 = 'utf32';

  function Utf32AutoCodec(options, iconv) {
      this.iconv = iconv;
  }

  Utf32AutoCodec.prototype.encoder = Utf32AutoEncoder;
  Utf32AutoCodec.prototype.decoder = Utf32AutoDecoder;

  // -- Encoding

  function Utf32AutoEncoder(options, codec) {
      options = options || {};

      if (options.addBOM === undefined)
          options.addBOM = true;

      this.encoder = codec.iconv.getEncoder(options.defaultEncoding || 'utf-32le', options);
  }

  Utf32AutoEncoder.prototype.write = function(str) {
      return this.encoder.write(str);
  };

  Utf32AutoEncoder.prototype.end = function() {
      return this.encoder.end();
  };

  // -- Decoding

  function Utf32AutoDecoder(options, codec) {
      this.decoder = null;
      this.initialBufs = [];
      this.initialBufsLen = 0;
      this.options = options || {};
      this.iconv = codec.iconv;
  }

  Utf32AutoDecoder.prototype.write = function(buf) {
      if (!this.decoder) { 
          // Codec is not chosen yet. Accumulate initial bytes.
          this.initialBufs.push(buf);
          this.initialBufsLen += buf.length;

          if (this.initialBufsLen < 32) // We need more bytes to use space heuristic (see below)
              return '';

          // We have enough bytes -> detect endianness.
          var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);

          var resStr = '';
          for (var i = 0; i < this.initialBufs.length; i++)
              resStr += this.decoder.write(this.initialBufs[i]);

          this.initialBufs.length = this.initialBufsLen = 0;
          return resStr;
      }

      return this.decoder.write(buf);
  };

  Utf32AutoDecoder.prototype.end = function() {
      if (!this.decoder) {
          var encoding = detectEncoding(this.initialBufs, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);

          var resStr = '';
          for (var i = 0; i < this.initialBufs.length; i++)
              resStr += this.decoder.write(this.initialBufs[i]);

          var trail = this.decoder.end();
          if (trail)
              resStr += trail;

          this.initialBufs.length = this.initialBufsLen = 0;
          return resStr;
      }

      return this.decoder.end();
  };

  function detectEncoding(bufs, defaultEncoding) {
      var b = [];
      var charsProcessed = 0;
      var invalidLE = 0, invalidBE = 0;   // Number of invalid chars when decoded as LE or BE.
      var bmpCharsLE = 0, bmpCharsBE = 0; // Number of BMP chars when decoded as LE or BE.

      outer_loop:
      for (var i = 0; i < bufs.length; i++) {
          var buf = bufs[i];
          for (var j = 0; j < buf.length; j++) {
              b.push(buf[j]);
              if (b.length === 4) {
                  if (charsProcessed === 0) {
                      // Check BOM first.
                      if (b[0] === 0xFF && b[1] === 0xFE && b[2] === 0 && b[3] === 0) {
                          return 'utf-32le';
                      }
                      if (b[0] === 0 && b[1] === 0 && b[2] === 0xFE && b[3] === 0xFF) {
                          return 'utf-32be';
                      }
                  }

                  if (b[0] !== 0 || b[1] > 0x10) invalidBE++;
                  if (b[3] !== 0 || b[2] > 0x10) invalidLE++;

                  if (b[0] === 0 && b[1] === 0 && (b[2] !== 0 || b[3] !== 0)) bmpCharsBE++;
                  if ((b[0] !== 0 || b[1] !== 0) && b[2] === 0 && b[3] === 0) bmpCharsLE++;

                  b.length = 0;
                  charsProcessed++;

                  if (charsProcessed >= 100) {
                      break outer_loop;
                  }
              }
          }
      }

      // Make decisions.
      if (bmpCharsBE - invalidBE > bmpCharsLE - invalidLE)  return 'utf-32be';
      if (bmpCharsBE - invalidBE < bmpCharsLE - invalidLE)  return 'utf-32le';

      // Couldn't decide (likely all zeros or not enough data).
      return defaultEncoding || 'utf-32le';
  }

  var utf32 = {
  	_utf32: _utf32,
  	utf32le: utf32le,
  	utf32be: utf32be,
  	ucs4le: ucs4le,
  	ucs4be: ucs4be,
  	utf32: utf32_1,
  	ucs4: ucs4
  };

  var Buffer$4 = safer_1.Buffer;

  // Note: UTF16-LE (or UCS2) codec is Node.js native. See encodings/internal.js

  // == UTF16-BE codec. ==========================================================

  var utf16be = Utf16BECodec;
  function Utf16BECodec() {
  }

  Utf16BECodec.prototype.encoder = Utf16BEEncoder;
  Utf16BECodec.prototype.decoder = Utf16BEDecoder;
  Utf16BECodec.prototype.bomAware = true;


  // -- Encoding

  function Utf16BEEncoder() {
  }

  Utf16BEEncoder.prototype.write = function(str) {
      var buf = Buffer$4.from(str, 'ucs2');
      for (var i = 0; i < buf.length; i += 2) {
          var tmp = buf[i]; buf[i] = buf[i+1]; buf[i+1] = tmp;
      }
      return buf;
  };

  Utf16BEEncoder.prototype.end = function() {
  };


  // -- Decoding

  function Utf16BEDecoder() {
      this.overflowByte = -1;
  }

  Utf16BEDecoder.prototype.write = function(buf) {
      if (buf.length == 0)
          return '';

      var buf2 = Buffer$4.alloc(buf.length + 1),
          i = 0, j = 0;

      if (this.overflowByte !== -1) {
          buf2[0] = buf[0];
          buf2[1] = this.overflowByte;
          i = 1; j = 2;
      }

      for (; i < buf.length-1; i += 2, j+= 2) {
          buf2[j] = buf[i+1];
          buf2[j+1] = buf[i];
      }

      this.overflowByte = (i == buf.length-1) ? buf[buf.length-1] : -1;

      return buf2.slice(0, j).toString('ucs2');
  };

  Utf16BEDecoder.prototype.end = function() {
      this.overflowByte = -1;
  };


  // == UTF-16 codec =============================================================
  // Decoder chooses automatically from UTF-16LE and UTF-16BE using BOM and space-based heuristic.
  // Defaults to UTF-16LE, as it's prevalent and default in Node.
  // http://en.wikipedia.org/wiki/UTF-16 and http://encoding.spec.whatwg.org/#utf-16le
  // Decoder default can be changed: iconv.decode(buf, 'utf16', {defaultEncoding: 'utf-16be'});

  // Encoder uses UTF-16LE and prepends BOM (which can be overridden with addBOM: false).

  var utf16_1 = Utf16Codec;
  function Utf16Codec(codecOptions, iconv) {
      this.iconv = iconv;
  }

  Utf16Codec.prototype.encoder = Utf16Encoder;
  Utf16Codec.prototype.decoder = Utf16Decoder;


  // -- Encoding (pass-through)

  function Utf16Encoder(options, codec) {
      options = options || {};
      if (options.addBOM === undefined)
          options.addBOM = true;
      this.encoder = codec.iconv.getEncoder('utf-16le', options);
  }

  Utf16Encoder.prototype.write = function(str) {
      return this.encoder.write(str);
  };

  Utf16Encoder.prototype.end = function() {
      return this.encoder.end();
  };


  // -- Decoding

  function Utf16Decoder(options, codec) {
      this.decoder = null;
      this.initialBufs = [];
      this.initialBufsLen = 0;

      this.options = options || {};
      this.iconv = codec.iconv;
  }

  Utf16Decoder.prototype.write = function(buf) {
      if (!this.decoder) {
          // Codec is not chosen yet. Accumulate initial bytes.
          this.initialBufs.push(buf);
          this.initialBufsLen += buf.length;
          
          if (this.initialBufsLen < 16) // We need more bytes to use space heuristic (see below)
              return '';

          // We have enough bytes -> detect endianness.
          var encoding = detectEncoding$1(this.initialBufs, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);

          var resStr = '';
          for (var i = 0; i < this.initialBufs.length; i++)
              resStr += this.decoder.write(this.initialBufs[i]);

          this.initialBufs.length = this.initialBufsLen = 0;
          return resStr;
      }

      return this.decoder.write(buf);
  };

  Utf16Decoder.prototype.end = function() {
      if (!this.decoder) {
          var encoding = detectEncoding$1(this.initialBufs, this.options.defaultEncoding);
          this.decoder = this.iconv.getDecoder(encoding, this.options);

          var resStr = '';
          for (var i = 0; i < this.initialBufs.length; i++)
              resStr += this.decoder.write(this.initialBufs[i]);

          var trail = this.decoder.end();
          if (trail)
              resStr += trail;

          this.initialBufs.length = this.initialBufsLen = 0;
          return resStr;
      }
      return this.decoder.end();
  };

  function detectEncoding$1(bufs, defaultEncoding) {
      var b = [];
      var charsProcessed = 0;
      var asciiCharsLE = 0, asciiCharsBE = 0; // Number of ASCII chars when decoded as LE or BE.

      outer_loop:
      for (var i = 0; i < bufs.length; i++) {
          var buf = bufs[i];
          for (var j = 0; j < buf.length; j++) {
              b.push(buf[j]);
              if (b.length === 2) {
                  if (charsProcessed === 0) {
                      // Check BOM first.
                      if (b[0] === 0xFF && b[1] === 0xFE) return 'utf-16le';
                      if (b[0] === 0xFE && b[1] === 0xFF) return 'utf-16be';
                  }

                  if (b[0] === 0 && b[1] !== 0) asciiCharsBE++;
                  if (b[0] !== 0 && b[1] === 0) asciiCharsLE++;

                  b.length = 0;
                  charsProcessed++;

                  if (charsProcessed >= 100) {
                      break outer_loop;
                  }
              }
          }
      }

      // Make decisions.
      // Most of the time, the content has ASCII chars (U+00**), but the opposite (U+**00) is uncommon.
      // So, we count ASCII as if it was LE or BE, and decide from that.
      if (asciiCharsBE > asciiCharsLE) return 'utf-16be';
      if (asciiCharsBE < asciiCharsLE) return 'utf-16le';

      // Couldn't decide (likely all zeros or not enough data).
      return defaultEncoding || 'utf-16le';
  }

  var utf16 = {
  	utf16be: utf16be,
  	utf16: utf16_1
  };

  var Buffer$5 = safer_1.Buffer;

  // UTF-7 codec, according to https://tools.ietf.org/html/rfc2152
  // See also below a UTF-7-IMAP codec, according to http://tools.ietf.org/html/rfc3501#section-5.1.3

  var utf7_1 = Utf7Codec;
  var unicode11utf7 = 'utf7'; // Alias UNICODE-1-1-UTF-7
  function Utf7Codec(codecOptions, iconv) {
      this.iconv = iconv;
  }
  Utf7Codec.prototype.encoder = Utf7Encoder;
  Utf7Codec.prototype.decoder = Utf7Decoder;
  Utf7Codec.prototype.bomAware = true;


  // -- Encoding

  var nonDirectChars = /[^A-Za-z0-9'\(\),-\.\/:\? \n\r\t]+/g;

  function Utf7Encoder(options, codec) {
      this.iconv = codec.iconv;
  }

  Utf7Encoder.prototype.write = function(str) {
      // Naive implementation.
      // Non-direct chars are encoded as "+<base64>-"; single "+" char is encoded as "+-".
      return Buffer$5.from(str.replace(nonDirectChars, function(chunk) {
          return "+" + (chunk === '+' ? '' : 
              this.iconv.encode(chunk, 'utf16-be').toString('base64').replace(/=+$/, '')) 
              + "-";
      }.bind(this)));
  };

  Utf7Encoder.prototype.end = function() {
  };


  // -- Decoding

  function Utf7Decoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = '';
  }

  var base64Regex = /[A-Za-z0-9\/+]/;
  var base64Chars = [];
  for (var i = 0; i < 256; i++)
      base64Chars[i] = base64Regex.test(String.fromCharCode(i));

  var plusChar = '+'.charCodeAt(0), 
      minusChar = '-'.charCodeAt(0),
      andChar = '&'.charCodeAt(0);

  Utf7Decoder.prototype.write = function(buf) {
      var res = "", lastI = 0,
          inBase64 = this.inBase64,
          base64Accum = this.base64Accum;

      // The decoder is more involved as we must handle chunks in stream.

      for (var i = 0; i < buf.length; i++) {
          if (!inBase64) { // We're in direct mode.
              // Write direct chars until '+'
              if (buf[i] == plusChar) {
                  res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                  lastI = i+1;
                  inBase64 = true;
              }
          } else { // We decode base64.
              if (!base64Chars[buf[i]]) { // Base64 ended.
                  if (i == lastI && buf[i] == minusChar) {// "+-" -> "+"
                      res += "+";
                  } else {
                      var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii");
                      res += this.iconv.decode(Buffer$5.from(b64str, 'base64'), "utf16-be");
                  }

                  if (buf[i] != minusChar) // Minus is absorbed after base64.
                      i--;

                  lastI = i+1;
                  inBase64 = false;
                  base64Accum = '';
              }
          }
      }

      if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
      } else {
          var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii");

          var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
          b64str = b64str.slice(0, canBeDecoded);

          res += this.iconv.decode(Buffer$5.from(b64str, 'base64'), "utf16-be");
      }

      this.inBase64 = inBase64;
      this.base64Accum = base64Accum;

      return res;
  };

  Utf7Decoder.prototype.end = function() {
      var res = "";
      if (this.inBase64 && this.base64Accum.length > 0)
          res = this.iconv.decode(Buffer$5.from(this.base64Accum, 'base64'), "utf16-be");

      this.inBase64 = false;
      this.base64Accum = '';
      return res;
  };


  // UTF-7-IMAP codec.
  // RFC3501 Sec. 5.1.3 Modified UTF-7 (http://tools.ietf.org/html/rfc3501#section-5.1.3)
  // Differences:
  //  * Base64 part is started by "&" instead of "+"
  //  * Direct characters are 0x20-0x7E, except "&" (0x26)
  //  * In Base64, "," is used instead of "/"
  //  * Base64 must not be used to represent direct characters.
  //  * No implicit shift back from Base64 (should always end with '-')
  //  * String must end in non-shifted position.
  //  * "-&" while in base64 is not allowed.


  var utf7imap = Utf7IMAPCodec;
  function Utf7IMAPCodec(codecOptions, iconv) {
      this.iconv = iconv;
  }
  Utf7IMAPCodec.prototype.encoder = Utf7IMAPEncoder;
  Utf7IMAPCodec.prototype.decoder = Utf7IMAPDecoder;
  Utf7IMAPCodec.prototype.bomAware = true;


  // -- Encoding

  function Utf7IMAPEncoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = Buffer$5.alloc(6);
      this.base64AccumIdx = 0;
  }

  Utf7IMAPEncoder.prototype.write = function(str) {
      var inBase64 = this.inBase64,
          base64Accum = this.base64Accum,
          base64AccumIdx = this.base64AccumIdx,
          buf = Buffer$5.alloc(str.length*5 + 10), bufIdx = 0;

      for (var i = 0; i < str.length; i++) {
          var uChar = str.charCodeAt(i);
          if (0x20 <= uChar && uChar <= 0x7E) { // Direct character or '&'.
              if (inBase64) {
                  if (base64AccumIdx > 0) {
                      bufIdx += buf.write(base64Accum.slice(0, base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
                      base64AccumIdx = 0;
                  }

                  buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
                  inBase64 = false;
              }

              if (!inBase64) {
                  buf[bufIdx++] = uChar; // Write direct character

                  if (uChar === andChar)  // Ampersand -> '&-'
                      buf[bufIdx++] = minusChar;
              }

          } else { // Non-direct character
              if (!inBase64) {
                  buf[bufIdx++] = andChar; // Write '&', then go to base64 mode.
                  inBase64 = true;
              }
              if (inBase64) {
                  base64Accum[base64AccumIdx++] = uChar >> 8;
                  base64Accum[base64AccumIdx++] = uChar & 0xFF;

                  if (base64AccumIdx == base64Accum.length) {
                      bufIdx += buf.write(base64Accum.toString('base64').replace(/\//g, ','), bufIdx);
                      base64AccumIdx = 0;
                  }
              }
          }
      }

      this.inBase64 = inBase64;
      this.base64AccumIdx = base64AccumIdx;

      return buf.slice(0, bufIdx);
  };

  Utf7IMAPEncoder.prototype.end = function() {
      var buf = Buffer$5.alloc(10), bufIdx = 0;
      if (this.inBase64) {
          if (this.base64AccumIdx > 0) {
              bufIdx += buf.write(this.base64Accum.slice(0, this.base64AccumIdx).toString('base64').replace(/\//g, ',').replace(/=+$/, ''), bufIdx);
              this.base64AccumIdx = 0;
          }

          buf[bufIdx++] = minusChar; // Write '-', then go to direct mode.
          this.inBase64 = false;
      }

      return buf.slice(0, bufIdx);
  };


  // -- Decoding

  function Utf7IMAPDecoder(options, codec) {
      this.iconv = codec.iconv;
      this.inBase64 = false;
      this.base64Accum = '';
  }

  var base64IMAPChars = base64Chars.slice();
  base64IMAPChars[','.charCodeAt(0)] = true;

  Utf7IMAPDecoder.prototype.write = function(buf) {
      var res = "", lastI = 0,
          inBase64 = this.inBase64,
          base64Accum = this.base64Accum;

      // The decoder is more involved as we must handle chunks in stream.
      // It is forgiving, closer to standard UTF-7 (for example, '-' is optional at the end).

      for (var i = 0; i < buf.length; i++) {
          if (!inBase64) { // We're in direct mode.
              // Write direct chars until '&'
              if (buf[i] == andChar) {
                  res += this.iconv.decode(buf.slice(lastI, i), "ascii"); // Write direct chars.
                  lastI = i+1;
                  inBase64 = true;
              }
          } else { // We decode base64.
              if (!base64IMAPChars[buf[i]]) { // Base64 ended.
                  if (i == lastI && buf[i] == minusChar) { // "&-" -> "&"
                      res += "&";
                  } else {
                      var b64str = base64Accum + this.iconv.decode(buf.slice(lastI, i), "ascii").replace(/,/g, '/');
                      res += this.iconv.decode(Buffer$5.from(b64str, 'base64'), "utf16-be");
                  }

                  if (buf[i] != minusChar) // Minus may be absorbed after base64.
                      i--;

                  lastI = i+1;
                  inBase64 = false;
                  base64Accum = '';
              }
          }
      }

      if (!inBase64) {
          res += this.iconv.decode(buf.slice(lastI), "ascii"); // Write direct chars.
      } else {
          var b64str = base64Accum + this.iconv.decode(buf.slice(lastI), "ascii").replace(/,/g, '/');

          var canBeDecoded = b64str.length - (b64str.length % 8); // Minimal chunk: 2 quads -> 2x3 bytes -> 3 chars.
          base64Accum = b64str.slice(canBeDecoded); // The rest will be decoded in future.
          b64str = b64str.slice(0, canBeDecoded);

          res += this.iconv.decode(Buffer$5.from(b64str, 'base64'), "utf16-be");
      }

      this.inBase64 = inBase64;
      this.base64Accum = base64Accum;

      return res;
  };

  Utf7IMAPDecoder.prototype.end = function() {
      var res = "";
      if (this.inBase64 && this.base64Accum.length > 0)
          res = this.iconv.decode(Buffer$5.from(this.base64Accum, 'base64'), "utf16-be");

      this.inBase64 = false;
      this.base64Accum = '';
      return res;
  };

  var utf7 = {
  	utf7: utf7_1,
  	unicode11utf7: unicode11utf7,
  	utf7imap: utf7imap
  };

  var Buffer$6 = safer_1.Buffer;

  // Single-byte codec. Needs a 'chars' string parameter that contains 256 or 128 chars that
  // correspond to encoded bytes (if 128 - then lower half is ASCII). 

  var _sbcs = SBCSCodec;
  function SBCSCodec(codecOptions, iconv) {
      if (!codecOptions)
          throw new Error("SBCS codec is called without the data.")
      
      // Prepare char buffer for decoding.
      if (!codecOptions.chars || (codecOptions.chars.length !== 128 && codecOptions.chars.length !== 256))
          throw new Error("Encoding '"+codecOptions.type+"' has incorrect 'chars' (must be of len 128 or 256)");
      
      if (codecOptions.chars.length === 128) {
          var asciiString = "";
          for (var i = 0; i < 128; i++)
              asciiString += String.fromCharCode(i);
          codecOptions.chars = asciiString + codecOptions.chars;
      }

      this.decodeBuf = Buffer$6.from(codecOptions.chars, 'ucs2');
      
      // Encoding buffer.
      var encodeBuf = Buffer$6.alloc(65536, iconv.defaultCharSingleByte.charCodeAt(0));

      for (var i = 0; i < codecOptions.chars.length; i++)
          encodeBuf[codecOptions.chars.charCodeAt(i)] = i;

      this.encodeBuf = encodeBuf;
  }

  SBCSCodec.prototype.encoder = SBCSEncoder;
  SBCSCodec.prototype.decoder = SBCSDecoder;


  function SBCSEncoder(options, codec) {
      this.encodeBuf = codec.encodeBuf;
  }

  SBCSEncoder.prototype.write = function(str) {
      var buf = Buffer$6.alloc(str.length);
      for (var i = 0; i < str.length; i++)
          buf[i] = this.encodeBuf[str.charCodeAt(i)];
      
      return buf;
  };

  SBCSEncoder.prototype.end = function() {
  };


  function SBCSDecoder(options, codec) {
      this.decodeBuf = codec.decodeBuf;
  }

  SBCSDecoder.prototype.write = function(buf) {
      // Strings are immutable in JS -> we use ucs2 buffer to speed up computations.
      var decodeBuf = this.decodeBuf;
      var newBuf = Buffer$6.alloc(buf.length*2);
      var idx1 = 0, idx2 = 0;
      for (var i = 0; i < buf.length; i++) {
          idx1 = buf[i]*2; idx2 = i*2;
          newBuf[idx2] = decodeBuf[idx1];
          newBuf[idx2+1] = decodeBuf[idx1+1];
      }
      return newBuf.toString('ucs2');
  };

  SBCSDecoder.prototype.end = function() {
  };

  var sbcsCodec = {
  	_sbcs: _sbcs
  };

  // Manually added data to be used by sbcs codec in addition to generated one.

  var sbcsData = {
      // Not supported by iconv, not sure why.
      "10029": "maccenteuro",
      "maccenteuro": {
          "type": "_sbcs",
          "chars": "ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ"
      },

      "808": "cp808",
      "ibm808": "cp808",
      "cp808": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№€■ "
      },

      "mik": {
          "type": "_sbcs",
          "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя└┴┬├─┼╣║╚╔╩╦╠═╬┐░▒▓│┤№§╗╝┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
      },

      "cp720": {
          "type": "_sbcs",
          "chars": "\x80\x81éâ\x84à\x86çêëèïî\x8d\x8e\x8f\x90\u0651\u0652ô¤ـûùءآأؤ£إئابةتثجحخدذرزسشص«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ضطظعغفµقكلمنهوىي≡\u064b\u064c\u064d\u064e\u064f\u0650≈°∙·√ⁿ²■\u00a0"
      },

      // Aliases of generated encodings.
      "ascii8bit": "ascii",
      "usascii": "ascii",
      "ansix34": "ascii",
      "ansix341968": "ascii",
      "ansix341986": "ascii",
      "csascii": "ascii",
      "cp367": "ascii",
      "ibm367": "ascii",
      "isoir6": "ascii",
      "iso646us": "ascii",
      "iso646irv": "ascii",
      "us": "ascii",

      "latin1": "iso88591",
      "latin2": "iso88592",
      "latin3": "iso88593",
      "latin4": "iso88594",
      "latin5": "iso88599",
      "latin6": "iso885910",
      "latin7": "iso885913",
      "latin8": "iso885914",
      "latin9": "iso885915",
      "latin10": "iso885916",

      "csisolatin1": "iso88591",
      "csisolatin2": "iso88592",
      "csisolatin3": "iso88593",
      "csisolatin4": "iso88594",
      "csisolatincyrillic": "iso88595",
      "csisolatinarabic": "iso88596",
      "csisolatingreek" : "iso88597",
      "csisolatinhebrew": "iso88598",
      "csisolatin5": "iso88599",
      "csisolatin6": "iso885910",

      "l1": "iso88591",
      "l2": "iso88592",
      "l3": "iso88593",
      "l4": "iso88594",
      "l5": "iso88599",
      "l6": "iso885910",
      "l7": "iso885913",
      "l8": "iso885914",
      "l9": "iso885915",
      "l10": "iso885916",

      "isoir14": "iso646jp",
      "isoir57": "iso646cn",
      "isoir100": "iso88591",
      "isoir101": "iso88592",
      "isoir109": "iso88593",
      "isoir110": "iso88594",
      "isoir144": "iso88595",
      "isoir127": "iso88596",
      "isoir126": "iso88597",
      "isoir138": "iso88598",
      "isoir148": "iso88599",
      "isoir157": "iso885910",
      "isoir166": "tis620",
      "isoir179": "iso885913",
      "isoir199": "iso885914",
      "isoir203": "iso885915",
      "isoir226": "iso885916",

      "cp819": "iso88591",
      "ibm819": "iso88591",

      "cyrillic": "iso88595",

      "arabic": "iso88596",
      "arabic8": "iso88596",
      "ecma114": "iso88596",
      "asmo708": "iso88596",

      "greek" : "iso88597",
      "greek8" : "iso88597",
      "ecma118" : "iso88597",
      "elot928" : "iso88597",

      "hebrew": "iso88598",
      "hebrew8": "iso88598",

      "turkish": "iso88599",
      "turkish8": "iso88599",

      "thai": "iso885911",
      "thai8": "iso885911",

      "celtic": "iso885914",
      "celtic8": "iso885914",
      "isoceltic": "iso885914",

      "tis6200": "tis620",
      "tis62025291": "tis620",
      "tis62025330": "tis620",

      "10000": "macroman",
      "10006": "macgreek",
      "10007": "maccyrillic",
      "10079": "maciceland",
      "10081": "macturkish",

      "cspc8codepage437": "cp437",
      "cspc775baltic": "cp775",
      "cspc850multilingual": "cp850",
      "cspcp852": "cp852",
      "cspc862latinhebrew": "cp862",
      "cpgr": "cp869",

      "msee": "cp1250",
      "mscyrl": "cp1251",
      "msansi": "cp1252",
      "msgreek": "cp1253",
      "msturk": "cp1254",
      "mshebr": "cp1255",
      "msarab": "cp1256",
      "winbaltrim": "cp1257",

      "cp20866": "koi8r",
      "20866": "koi8r",
      "ibm878": "koi8r",
      "cskoi8r": "koi8r",

      "cp21866": "koi8u",
      "21866": "koi8u",
      "ibm1168": "koi8u",

      "strk10482002": "rk1048",

      "tcvn5712": "tcvn",
      "tcvn57121": "tcvn",

      "gb198880": "iso646cn",
      "cn": "iso646cn",

      "csiso14jisc6220ro": "iso646jp",
      "jisc62201969ro": "iso646jp",
      "jp": "iso646jp",

      "cshproman8": "hproman8",
      "r8": "hproman8",
      "roman8": "hproman8",
      "xroman8": "hproman8",
      "ibm1051": "hproman8",

      "mac": "macintosh",
      "csmacintosh": "macintosh",
  };

  // Generated data for sbcs codec. Don't edit manually. Regenerate using generation/gen-sbcs.js script.
  var sbcsDataGenerated = {
    "437": "cp437",
    "737": "cp737",
    "775": "cp775",
    "850": "cp850",
    "852": "cp852",
    "855": "cp855",
    "856": "cp856",
    "857": "cp857",
    "858": "cp858",
    "860": "cp860",
    "861": "cp861",
    "862": "cp862",
    "863": "cp863",
    "864": "cp864",
    "865": "cp865",
    "866": "cp866",
    "869": "cp869",
    "874": "windows874",
    "922": "cp922",
    "1046": "cp1046",
    "1124": "cp1124",
    "1125": "cp1125",
    "1129": "cp1129",
    "1133": "cp1133",
    "1161": "cp1161",
    "1162": "cp1162",
    "1163": "cp1163",
    "1250": "windows1250",
    "1251": "windows1251",
    "1252": "windows1252",
    "1253": "windows1253",
    "1254": "windows1254",
    "1255": "windows1255",
    "1256": "windows1256",
    "1257": "windows1257",
    "1258": "windows1258",
    "28591": "iso88591",
    "28592": "iso88592",
    "28593": "iso88593",
    "28594": "iso88594",
    "28595": "iso88595",
    "28596": "iso88596",
    "28597": "iso88597",
    "28598": "iso88598",
    "28599": "iso88599",
    "28600": "iso885910",
    "28601": "iso885911",
    "28603": "iso885913",
    "28604": "iso885914",
    "28605": "iso885915",
    "28606": "iso885916",
    "windows874": {
      "type": "_sbcs",
      "chars": "€����…�����������‘’“”•–—�������� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "win874": "windows874",
    "cp874": "windows874",
    "windows1250": {
      "type": "_sbcs",
      "chars": "€�‚�„…†‡�‰Š‹ŚŤŽŹ�‘’“”•–—�™š›śťžź ˇ˘Ł¤Ą¦§¨©Ş«¬­®Ż°±˛ł´µ¶·¸ąş»Ľ˝ľżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    "win1250": "windows1250",
    "cp1250": "windows1250",
    "windows1251": {
      "type": "_sbcs",
      "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊЌЋЏђ‘’“”•–—�™љ›њќћџ ЎўЈ¤Ґ¦§Ё©Є«¬­®Ї°±Ііґµ¶·ё№є»јЅѕїАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "win1251": "windows1251",
    "cp1251": "windows1251",
    "windows1252": {
      "type": "_sbcs",
      "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ�Ž��‘’“”•–—˜™š›œ�žŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    "win1252": "windows1252",
    "cp1252": "windows1252",
    "windows1253": {
      "type": "_sbcs",
      "chars": "€�‚ƒ„…†‡�‰�‹�����‘’“”•–—�™�›���� ΅Ά£¤¥¦§¨©�«¬­®―°±²³΄µ¶·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    "win1253": "windows1253",
    "cp1253": "windows1253",
    "windows1254": {
      "type": "_sbcs",
      "chars": "€�‚ƒ„…†‡ˆ‰Š‹Œ����‘’“”•–—˜™š›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    "win1254": "windows1254",
    "cp1254": "windows1254",
    "windows1255": {
      "type": "_sbcs",
      "chars": "€�‚ƒ„…†‡ˆ‰�‹�����‘’“”•–—˜™�›���� ¡¢£₪¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾¿ְֱֲֳִֵֶַָֹֺֻּֽ־ֿ׀ׁׂ׃װױײ׳״�������אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    "win1255": "windows1255",
    "cp1255": "windows1255",
    "windows1256": {
      "type": "_sbcs",
      "chars": "€پ‚ƒ„…†‡ˆ‰ٹ‹Œچژڈگ‘’“”•–—ک™ڑ›œ‌‍ں ،¢£¤¥¦§¨©ھ«¬­®¯°±²³´µ¶·¸¹؛»¼½¾؟ہءآأؤإئابةتثجحخدذرزسشصض×طظعغـفقكàلâمنهوçèéêëىيîïًٌٍَôُِ÷ّùْûü‎‏ے"
    },
    "win1256": "windows1256",
    "cp1256": "windows1256",
    "windows1257": {
      "type": "_sbcs",
      "chars": "€�‚�„…†‡�‰�‹�¨ˇ¸�‘’“”•–—�™�›�¯˛� �¢£¤�¦§Ø©Ŗ«¬­®Æ°±²³´µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž˙"
    },
    "win1257": "windows1257",
    "cp1257": "windows1257",
    "windows1258": {
      "type": "_sbcs",
      "chars": "€�‚ƒ„…†‡ˆ‰�‹Œ����‘’“”•–—˜™�›œ��Ÿ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    "win1258": "windows1258",
    "cp1258": "windows1258",
    "iso88591": {
      "type": "_sbcs",
      "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    "cp28591": "iso88591",
    "iso88592": {
      "type": "_sbcs",
      "chars": " Ą˘Ł¤ĽŚ§¨ŠŞŤŹ­ŽŻ°ą˛ł´ľśˇ¸šşťź˝žżŔÁÂĂÄĹĆÇČÉĘËĚÍÎĎĐŃŇÓÔŐÖ×ŘŮÚŰÜÝŢßŕáâăäĺćçčéęëěíîďđńňóôőö÷řůúűüýţ˙"
    },
    "cp28592": "iso88592",
    "iso88593": {
      "type": "_sbcs",
      "chars": " Ħ˘£¤�Ĥ§¨İŞĞĴ­�Ż°ħ²³´µĥ·¸ışğĵ½�żÀÁÂ�ÄĊĈÇÈÉÊËÌÍÎÏ�ÑÒÓÔĠÖ×ĜÙÚÛÜŬŜßàáâ�äċĉçèéêëìíîï�ñòóôġö÷ĝùúûüŭŝ˙"
    },
    "cp28593": "iso88593",
    "iso88594": {
      "type": "_sbcs",
      "chars": " ĄĸŖ¤ĨĻ§¨ŠĒĢŦ­Ž¯°ą˛ŗ´ĩļˇ¸šēģŧŊžŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎĪĐŅŌĶÔÕÖ×ØŲÚÛÜŨŪßāáâãäåæįčéęëėíîīđņōķôõö÷øųúûüũū˙"
    },
    "cp28594": "iso88594",
    "iso88595": {
      "type": "_sbcs",
      "chars": " ЁЂЃЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђѓєѕіїјљњћќ§ўџ"
    },
    "cp28595": "iso88595",
    "iso88596": {
      "type": "_sbcs",
      "chars": " ���¤�������،­�������������؛���؟�ءآأؤإئابةتثجحخدذرزسشصضطظعغ�����ـفقكلمنهوىيًٌٍَُِّْ�������������"
    },
    "cp28596": "iso88596",
    "iso88597": {
      "type": "_sbcs",
      "chars": " ‘’£€₯¦§¨©ͺ«¬­�―°±²³΄΅Ά·ΈΉΊ»Ό½ΎΏΐΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡ�ΣΤΥΦΧΨΩΪΫάέήίΰαβγδεζηθικλμνξοπρςστυφχψωϊϋόύώ�"
    },
    "cp28597": "iso88597",
    "iso88598": {
      "type": "_sbcs",
      "chars": " �¢£¤¥¦§¨©×«¬­®¯°±²³´µ¶·¸¹÷»¼½¾��������������������������������‗אבגדהוזחטיךכלםמןנסעףפץצקרשת��‎‏�"
    },
    "cp28598": "iso88598",
    "iso88599": {
      "type": "_sbcs",
      "chars": " ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏĞÑÒÓÔÕÖ×ØÙÚÛÜİŞßàáâãäåæçèéêëìíîïğñòóôõö÷øùúûüışÿ"
    },
    "cp28599": "iso88599",
    "iso885910": {
      "type": "_sbcs",
      "chars": " ĄĒĢĪĨĶ§ĻĐŠŦŽ­ŪŊ°ąēģīĩķ·ļđšŧž―ūŋĀÁÂÃÄÅÆĮČÉĘËĖÍÎÏÐŅŌÓÔÕÖŨØŲÚÛÜÝÞßāáâãäåæįčéęëėíîïðņōóôõöũøųúûüýþĸ"
    },
    "cp28600": "iso885910",
    "iso885911": {
      "type": "_sbcs",
      "chars": " กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "cp28601": "iso885911",
    "iso885913": {
      "type": "_sbcs",
      "chars": " ”¢£¤„¦§Ø©Ŗ«¬­®Æ°±²³“µ¶·ø¹ŗ»¼½¾æĄĮĀĆÄÅĘĒČÉŹĖĢĶĪĻŠŃŅÓŌÕÖ×ŲŁŚŪÜŻŽßąįāćäåęēčéźėģķīļšńņóōõö÷ųłśūüżž’"
    },
    "cp28603": "iso885913",
    "iso885914": {
      "type": "_sbcs",
      "chars": " Ḃḃ£ĊċḊ§Ẁ©ẂḋỲ­®ŸḞḟĠġṀṁ¶ṖẁṗẃṠỳẄẅṡÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŴÑÒÓÔÕÖṪØÙÚÛÜÝŶßàáâãäåæçèéêëìíîïŵñòóôõöṫøùúûüýŷÿ"
    },
    "cp28604": "iso885914",
    "iso885915": {
      "type": "_sbcs",
      "chars": " ¡¢£€¥Š§š©ª«¬­®¯°±²³Žµ¶·ž¹º»ŒœŸ¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    "cp28605": "iso885915",
    "iso885916": {
      "type": "_sbcs",
      "chars": " ĄąŁ€„Š§š©Ș«Ź­źŻ°±ČłŽ”¶·žčș»ŒœŸżÀÁÂĂÄĆÆÇÈÉÊËÌÍÎÏĐŃÒÓÔŐÖŚŰÙÚÛÜĘȚßàáâăäćæçèéêëìíîïđńòóôőöśűùúûüęțÿ"
    },
    "cp28606": "iso885916",
    "cp437": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm437": "cp437",
    "csibm437": "cp437",
    "cp737": {
      "type": "_sbcs",
      "chars": "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρσςτυφχψ░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀ωάέήϊίόύϋώΆΈΉΊΌΎΏ±≥≤ΪΫ÷≈°∙·√ⁿ²■ "
    },
    "ibm737": "cp737",
    "csibm737": "cp737",
    "cp775": {
      "type": "_sbcs",
      "chars": "ĆüéāäģåćłēŖŗīŹÄÅÉæÆōöĢ¢ŚśÖÜø£Ø×¤ĀĪóŻżź”¦©®¬½¼Ł«»░▒▓│┤ĄČĘĖ╣║╗╝ĮŠ┐└┴┬├─┼ŲŪ╚╔╩╦╠═╬Žąčęėįšųūž┘┌█▄▌▐▀ÓßŌŃõÕµńĶķĻļņĒŅ’­±“¾¶§÷„°∙·¹³²■ "
    },
    "ibm775": "cp775",
    "csibm775": "cp775",
    "cp850": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈıÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    "ibm850": "cp850",
    "csibm850": "cp850",
    "cp852": {
      "type": "_sbcs",
      "chars": "ÇüéâäůćçłëŐőîŹÄĆÉĹĺôöĽľŚśÖÜŤťŁ×čáíóúĄąŽžĘę¬źČş«»░▒▓│┤ÁÂĚŞ╣║╗╝Żż┐└┴┬├─┼Ăă╚╔╩╦╠═╬¤đĐĎËďŇÍÎě┘┌█▄ŢŮ▀ÓßÔŃńňŠšŔÚŕŰýÝţ´­˝˛ˇ˘§÷¸°¨˙űŘř■ "
    },
    "ibm852": "cp852",
    "csibm852": "cp852",
    "cp855": {
      "type": "_sbcs",
      "chars": "ђЂѓЃёЁєЄѕЅіІїЇјЈљЉњЊћЋќЌўЎџЏюЮъЪаАбБцЦдДеЕфФгГ«»░▒▓│┤хХиИ╣║╗╝йЙ┐└┴┬├─┼кК╚╔╩╦╠═╬¤лЛмМнНоОп┘┌█▄Пя▀ЯрРсСтТуУжЖвВьЬ№­ыЫзЗшШэЭщЩчЧ§■ "
    },
    "ibm855": "cp855",
    "csibm855": "cp855",
    "cp856": {
      "type": "_sbcs",
      "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת�£�×����������®¬½¼�«»░▒▓│┤���©╣║╗╝¢¥┐└┴┬├─┼��╚╔╩╦╠═╬¤���������┘┌█▄¦�▀������µ�������¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    "ibm856": "cp856",
    "csibm856": "cp856",
    "cp857": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèïîıÄÅÉæÆôöòûùİÖÜø£ØŞşáíóúñÑĞğ¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ºªÊËÈ�ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµ�×ÚÛÙìÿ¯´­±�¾¶§÷¸°¨·¹³²■ "
    },
    "ibm857": "cp857",
    "csibm857": "cp857",
    "cp858": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø×ƒáíóúñÑªº¿®¬½¼¡«»░▒▓│┤ÁÂÀ©╣║╗╝¢¥┐└┴┬├─┼ãÃ╚╔╩╦╠═╬¤ðÐÊËÈ€ÍÎÏ┘┌█▄¦Ì▀ÓßÔÒõÕµþÞÚÛÙýÝ¯´­±‗¾¶§÷¸°¨·¹³²■ "
    },
    "ibm858": "cp858",
    "csibm858": "cp858",
    "cp860": {
      "type": "_sbcs",
      "chars": "ÇüéâãàÁçêÊèÍÔìÃÂÉÀÈôõòÚùÌÕÜ¢£Ù₧ÓáíóúñÑªº¿Ò¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm860": "cp860",
    "csibm860": "cp860",
    "cp861": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèÐðÞÄÅÉæÆôöþûÝýÖÜø£Ø₧ƒáíóúÁÍÓÚ¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm861": "cp861",
    "csibm861": "cp861",
    "cp862": {
      "type": "_sbcs",
      "chars": "אבגדהוזחטיךכלםמןנסעףפץצקרשת¢£¥₧ƒáíóúñÑªº¿⌐¬½¼¡«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm862": "cp862",
    "csibm862": "cp862",
    "cp863": {
      "type": "_sbcs",
      "chars": "ÇüéâÂà¶çêëèïî‗À§ÉÈÊôËÏûù¤ÔÜ¢£ÙÛƒ¦´óú¨¸³¯Î⌐¬½¼¾«»░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm863": "cp863",
    "csibm863": "cp863",
    "cp864": {
      "type": "_sbcs",
      "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$٪&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~°·∙√▒─│┼┤┬├┴┐┌└┘β∞φ±½¼≈«»ﻷﻸ��ﻻﻼ� ­ﺂ£¤ﺄ��ﺎﺏﺕﺙ،ﺝﺡﺥ٠١٢٣٤٥٦٧٨٩ﻑ؛ﺱﺵﺹ؟¢ﺀﺁﺃﺅﻊﺋﺍﺑﺓﺗﺛﺟﺣﺧﺩﺫﺭﺯﺳﺷﺻﺿﻁﻅﻋﻏ¦¬÷×ﻉـﻓﻗﻛﻟﻣﻧﻫﻭﻯﻳﺽﻌﻎﻍﻡﹽّﻥﻩﻬﻰﻲﻐﻕﻵﻶﻝﻙﻱ■�"
    },
    "ibm864": "cp864",
    "csibm864": "cp864",
    "cp865": {
      "type": "_sbcs",
      "chars": "ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜø£Ø₧ƒáíóúñÑªº¿⌐¬½¼¡«¤░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀αßΓπΣσµτΦΘΩδ∞φε∩≡±≥≤⌠⌡÷≈°∙·√ⁿ²■ "
    },
    "ibm865": "cp865",
    "csibm865": "cp865",
    "cp866": {
      "type": "_sbcs",
      "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёЄєЇїЎў°∙·√№¤■ "
    },
    "ibm866": "cp866",
    "csibm866": "cp866",
    "cp869": {
      "type": "_sbcs",
      "chars": "������Ά�·¬¦‘’Έ―ΉΊΪΌ��ΎΫ©Ώ²³ά£έήίϊΐόύΑΒΓΔΕΖΗ½ΘΙ«»░▒▓│┤ΚΛΜΝ╣║╗╝ΞΟ┐└┴┬├─┼ΠΡ╚╔╩╦╠═╬ΣΤΥΦΧΨΩαβγ┘┌█▄δε▀ζηθικλμνξοπρσςτ΄­±υφχ§ψ΅°¨ωϋΰώ■ "
    },
    "ibm869": "cp869",
    "csibm869": "cp869",
    "cp922": {
      "type": "_sbcs",
      "chars": " ¡¢£¤¥¦§¨©ª«¬­®‾°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏŠÑÒÓÔÕÖ×ØÙÚÛÜÝŽßàáâãäåæçèéêëìíîïšñòóôõö÷øùúûüýžÿ"
    },
    "ibm922": "cp922",
    "csibm922": "cp922",
    "cp1046": {
      "type": "_sbcs",
      "chars": "ﺈ×÷ﹱ■│─┐┌└┘ﹹﹻﹽﹿﹷﺊﻰﻳﻲﻎﻏﻐﻶﻸﻺﻼ ¤ﺋﺑﺗﺛﺟﺣ،­ﺧﺳ٠١٢٣٤٥٦٧٨٩ﺷ؛ﺻﺿﻊ؟ﻋءآأؤإئابةتثجحخدذرزسشصضطﻇعغﻌﺂﺄﺎﻓـفقكلمنهوىيًٌٍَُِّْﻗﻛﻟﻵﻷﻹﻻﻣﻧﻬﻩ�"
    },
    "ibm1046": "cp1046",
    "csibm1046": "cp1046",
    "cp1124": {
      "type": "_sbcs",
      "chars": " ЁЂҐЄЅІЇЈЉЊЋЌ­ЎЏАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя№ёђґєѕіїјљњћќ§ўџ"
    },
    "ibm1124": "cp1124",
    "csibm1124": "cp1124",
    "cp1125": {
      "type": "_sbcs",
      "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмноп░▒▓│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌█▄▌▐▀рстуфхцчшщъыьэюяЁёҐґЄєІіЇї·√№¤■ "
    },
    "ibm1125": "cp1125",
    "csibm1125": "cp1125",
    "cp1129": {
      "type": "_sbcs",
      "chars": " ¡¢£¤¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    "ibm1129": "cp1129",
    "csibm1129": "cp1129",
    "cp1133": {
      "type": "_sbcs",
      "chars": " ກຂຄງຈສຊຍດຕຖທນບປຜຝພຟມຢຣລວຫອຮ���ຯະາຳິີຶືຸູຼັົຽ���ເແໂໃໄ່້໊໋໌ໍໆ�ໜໝ₭����������������໐໑໒໓໔໕໖໗໘໙��¢¬¦�"
    },
    "ibm1133": "cp1133",
    "csibm1133": "cp1133",
    "cp1161": {
      "type": "_sbcs",
      "chars": "��������������������������������่กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู้๊๋€฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛¢¬¦ "
    },
    "ibm1161": "cp1161",
    "csibm1161": "cp1161",
    "cp1162": {
      "type": "_sbcs",
      "chars": "€…‘’“”•–— กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    },
    "ibm1162": "cp1162",
    "csibm1162": "cp1162",
    "cp1163": {
      "type": "_sbcs",
      "chars": " ¡¢£€¥¦§œ©ª«¬­®¯°±²³Ÿµ¶·Œ¹º»¼½¾¿ÀÁÂĂÄÅÆÇÈÉÊË̀ÍÎÏĐÑ̉ÓÔƠÖ×ØÙÚÛÜỮßàáâăäåæçèéêë́íîïđṇ̃óôơö÷øùúûüư₫ÿ"
    },
    "ibm1163": "cp1163",
    "csibm1163": "cp1163",
    "maccroatian": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊�©⁄¤‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ"
    },
    "maccyrillic": {
      "type": "_sbcs",
      "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°¢£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµ∂ЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    "macgreek": {
      "type": "_sbcs",
      "chars": "Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦­ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ�"
    },
    "maciceland": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    "macroman": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    "macromania": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂŞ∞±≤≥¥µ∂∑∏π∫ªºΩăş¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›Ţţ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    "macthai": {
      "type": "_sbcs",
      "chars": "«»…“”�•‘’� กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู﻿​–—฿เแโใไๅๆ็่้๊๋์ํ™๏๐๑๒๓๔๕๖๗๘๙®©����"
    },
    "macturkish": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙ�ˆ˜¯˘˙˚¸˝˛ˇ"
    },
    "macukraine": {
      "type": "_sbcs",
      "chars": "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю¤"
    },
    "koi8r": {
      "type": "_sbcs",
      "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ё╓╔╕╖╗╘╙╚╛╜╝╞╟╠╡Ё╢╣╤╥╦╧╨╩╪╫╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8u": {
      "type": "_sbcs",
      "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґ╝╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪Ґ╬©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8ru": {
      "type": "_sbcs",
      "chars": "─│┌┐└┘├┤┬┴┼▀▄█▌▐░▒▓⌠■∙√≈≤≥ ⌡°²·÷═║╒ёє╔ії╗╘╙╚╛ґў╞╟╠╡ЁЄ╣ІЇ╦╧╨╩╪ҐЎ©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "koi8t": {
      "type": "_sbcs",
      "chars": "қғ‚Ғ„…†‡�‰ҳ‹ҲҷҶ�Қ‘’“”•–—�™�›�����ӯӮё¤ӣ¦§���«¬­®�°±²Ё�Ӣ¶·�№�»���©юабцдефгхийклмнопярстужвьызшэщчъЮАБЦДЕФГХИЙКЛМНОПЯРСТУЖВЬЫЗШЭЩЧЪ"
    },
    "armscii8": {
      "type": "_sbcs",
      "chars": " �և։)(»«—.՝,-֊…՜՛՞ԱաԲբԳգԴդԵեԶզԷէԸըԹթԺժԻիԼլԽխԾծԿկՀհՁձՂղՃճՄմՅյՆնՇշՈոՉչՊպՋջՌռՍսՎվՏտՐրՑցՒւՓփՔքՕօՖֆ՚�"
    },
    "rk1048": {
      "type": "_sbcs",
      "chars": "ЂЃ‚ѓ„…†‡€‰Љ‹ЊҚҺЏђ‘’“”•–—�™љ›њқһџ ҰұӘ¤Ө¦§Ё©Ғ«¬­®Ү°±Ііөµ¶·ё№ғ»әҢңүАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "tcvn": {
      "type": "_sbcs",
      "chars": "\u0000ÚỤ\u0003ỪỬỮ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010ỨỰỲỶỸÝỴ\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ÀẢÃÁẠẶẬÈẺẼÉẸỆÌỈĨÍỊÒỎÕÓỌỘỜỞỠỚỢÙỦŨ ĂÂÊÔƠƯĐăâêôơưđẶ̀̀̉̃́àảãáạẲằẳẵắẴẮẦẨẪẤỀặầẩẫấậèỂẻẽéẹềểễếệìỉỄẾỒĩíịòỔỏõóọồổỗốộờởỡớợùỖủũúụừửữứựỳỷỹýỵỐ"
    },
    "georgianacademy": {
      "type": "_sbcs",
      "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰჱჲჳჴჵჶçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    "georgianps": {
      "type": "_sbcs",
      "chars": "‚ƒ„…†‡ˆ‰Š‹Œ‘’“”•–—˜™š›œŸ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵæçèéêëìíîïðñòóôõö÷øùúûüýþÿ"
    },
    "pt154": {
      "type": "_sbcs",
      "chars": "ҖҒӮғ„…ҶҮҲүҠӢҢҚҺҸҗ‘’“”•–—ҳҷҡӣңқһҹ ЎўЈӨҘҰ§Ё©Ә«¬ӯ®Ҝ°ұІіҙө¶·ё№ә»јҪҫҝАБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя"
    },
    "viscii": {
      "type": "_sbcs",
      "chars": "\u0000\u0001Ẳ\u0003\u0004ẴẪ\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013Ỷ\u0015\u0016\u0017\u0018Ỹ\u001a\u001b\u001c\u001dỴ\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~ẠẮẰẶẤẦẨẬẼẸẾỀỂỄỆỐỒỔỖỘỢỚỜỞỊỎỌỈỦŨỤỲÕắằặấầẩậẽẹếềểễệốồổỗỠƠộờởịỰỨỪỬơớƯÀÁÂÃẢĂẳẵÈÉÊẺÌÍĨỳĐứÒÓÔạỷừửÙÚỹỵÝỡưàáâãảăữẫèéêẻìíĩỉđựòóôõỏọụùúũủýợỮ"
    },
    "iso646cn": {
      "type": "_sbcs",
      "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#¥%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
    },
    "iso646jp": {
      "type": "_sbcs",
      "chars": "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\b\t\n\u000b\f\r\u000e\u000f\u0010\u0011\u0012\u0013\u0014\u0015\u0016\u0017\u0018\u0019\u001a\u001b\u001c\u001d\u001e\u001f !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[¥]^_`abcdefghijklmnopqrstuvwxyz{|}‾��������������������������������������������������������������������������������������������������������������������������������"
    },
    "hproman8": {
      "type": "_sbcs",
      "chars": " ÀÂÈÊËÎÏ´ˋˆ¨˜ÙÛ₤¯Ýý°ÇçÑñ¡¿¤£¥§ƒ¢âêôûáéóúàèòùäëöüÅîØÆåíøæÄìÖÜÉïßÔÁÃãÐðÍÌÓÒÕõŠšÚŸÿÞþ·µ¶¾—¼½ªº«■»±�"
    },
    "macintosh": {
      "type": "_sbcs",
      "chars": "ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄¤‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔ�ÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ"
    },
    "ascii": {
      "type": "_sbcs",
      "chars": "��������������������������������������������������������������������������������������������������������������������������������"
    },
    "tis620": {
      "type": "_sbcs",
      "chars": "���������������������������������กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรฤลฦวศษสหฬอฮฯะัาำิีึืฺุู����฿เแโใไๅๆ็่้๊๋์ํ๎๏๐๑๒๓๔๕๖๗๘๙๚๛����"
    }
  };

  var Buffer$7 = safer_1.Buffer;

  // Multibyte codec. In this scheme, a character is represented by 1 or more bytes.
  // Our codec supports UTF-16 surrogates, extensions for GB18030 and unicode sequences.
  // To save memory and loading time, we read table files only when requested.

  var _dbcs = DBCSCodec;

  var UNASSIGNED = -1,
      GB18030_CODE = -2,
      SEQ_START  = -10,
      NODE_START = -1000,
      UNASSIGNED_NODE = new Array(0x100),
      DEF_CHAR = -1;

  for (var i$1 = 0; i$1 < 0x100; i$1++)
      UNASSIGNED_NODE[i$1] = UNASSIGNED;


  // Class DBCSCodec reads and initializes mapping tables.
  function DBCSCodec(codecOptions, iconv) {
      this.encodingName = codecOptions.encodingName;
      if (!codecOptions)
          throw new Error("DBCS codec is called without the data.")
      if (!codecOptions.table)
          throw new Error("Encoding '" + this.encodingName + "' has no data.");

      // Load tables.
      var mappingTable = codecOptions.table();


      // Decode tables: MBCS -> Unicode.

      // decodeTables is a trie, encoded as an array of arrays of integers. Internal arrays are trie nodes and all have len = 256.
      // Trie root is decodeTables[0].
      // Values: >=  0 -> unicode character code. can be > 0xFFFF
      //         == UNASSIGNED -> unknown/unassigned sequence.
      //         == GB18030_CODE -> this is the end of a GB18030 4-byte sequence.
      //         <= NODE_START -> index of the next node in our trie to process next byte.
      //         <= SEQ_START  -> index of the start of a character code sequence, in decodeTableSeq.
      this.decodeTables = [];
      this.decodeTables[0] = UNASSIGNED_NODE.slice(0); // Create root node.

      // Sometimes a MBCS char corresponds to a sequence of unicode chars. We store them as arrays of integers here. 
      this.decodeTableSeq = [];

      // Actual mapping tables consist of chunks. Use them to fill up decode tables.
      for (var i = 0; i < mappingTable.length; i++)
          this._addDecodeChunk(mappingTable[i]);

      // Load & create GB18030 tables when needed.
      if (typeof codecOptions.gb18030 === 'function') {
          this.gb18030 = codecOptions.gb18030(); // Load GB18030 ranges.

          // Add GB18030 common decode nodes.
          var commonThirdByteNodeIdx = this.decodeTables.length;
          this.decodeTables.push(UNASSIGNED_NODE.slice(0));

          var commonFourthByteNodeIdx = this.decodeTables.length;
          this.decodeTables.push(UNASSIGNED_NODE.slice(0));

          // Fill out the tree
          var firstByteNode = this.decodeTables[0];
          for (var i = 0x81; i <= 0xFE; i++) {
              var secondByteNode = this.decodeTables[NODE_START - firstByteNode[i]];
              for (var j = 0x30; j <= 0x39; j++) {
                  if (secondByteNode[j] === UNASSIGNED) {
                      secondByteNode[j] = NODE_START - commonThirdByteNodeIdx;
                  } else if (secondByteNode[j] > NODE_START) {
                      throw new Error("gb18030 decode tables conflict at byte 2");
                  }

                  var thirdByteNode = this.decodeTables[NODE_START - secondByteNode[j]];
                  for (var k = 0x81; k <= 0xFE; k++) {
                      if (thirdByteNode[k] === UNASSIGNED) {
                          thirdByteNode[k] = NODE_START - commonFourthByteNodeIdx;
                      } else if (thirdByteNode[k] === NODE_START - commonFourthByteNodeIdx) {
                          continue;
                      } else if (thirdByteNode[k] > NODE_START) {
                          throw new Error("gb18030 decode tables conflict at byte 3");
                      }

                      var fourthByteNode = this.decodeTables[NODE_START - thirdByteNode[k]];
                      for (var l = 0x30; l <= 0x39; l++) {
                          if (fourthByteNode[l] === UNASSIGNED)
                              fourthByteNode[l] = GB18030_CODE;
                      }
                  }
              }
          }
      }

      this.defaultCharUnicode = iconv.defaultCharUnicode;

      
      // Encode tables: Unicode -> DBCS.

      // `encodeTable` is array mapping from unicode char to encoded char. All its values are integers for performance.
      // Because it can be sparse, it is represented as array of buckets by 256 chars each. Bucket can be null.
      // Values: >=  0 -> it is a normal char. Write the value (if <=256 then 1 byte, if <=65536 then 2 bytes, etc.).
      //         == UNASSIGNED -> no conversion found. Output a default char.
      //         <= SEQ_START  -> it's an index in encodeTableSeq, see below. The character starts a sequence.
      this.encodeTable = [];
      
      // `encodeTableSeq` is used when a sequence of unicode characters is encoded as a single code. We use a tree of
      // objects where keys correspond to characters in sequence and leafs are the encoded dbcs values. A special DEF_CHAR key
      // means end of sequence (needed when one sequence is a strict subsequence of another).
      // Objects are kept separately from encodeTable to increase performance.
      this.encodeTableSeq = [];

      // Some chars can be decoded, but need not be encoded.
      var skipEncodeChars = {};
      if (codecOptions.encodeSkipVals)
          for (var i = 0; i < codecOptions.encodeSkipVals.length; i++) {
              var val = codecOptions.encodeSkipVals[i];
              if (typeof val === 'number')
                  skipEncodeChars[val] = true;
              else
                  for (var j = val.from; j <= val.to; j++)
                      skipEncodeChars[j] = true;
          }
          
      // Use decode trie to recursively fill out encode tables.
      this._fillEncodeTable(0, 0, skipEncodeChars);

      // Add more encoding pairs when needed.
      if (codecOptions.encodeAdd) {
          for (var uChar in codecOptions.encodeAdd)
              if (Object.prototype.hasOwnProperty.call(codecOptions.encodeAdd, uChar))
                  this._setEncodeChar(uChar.charCodeAt(0), codecOptions.encodeAdd[uChar]);
      }

      this.defCharSB  = this.encodeTable[0][iconv.defaultCharSingleByte.charCodeAt(0)];
      if (this.defCharSB === UNASSIGNED) this.defCharSB = this.encodeTable[0]['?'];
      if (this.defCharSB === UNASSIGNED) this.defCharSB = "?".charCodeAt(0);
  }

  DBCSCodec.prototype.encoder = DBCSEncoder;
  DBCSCodec.prototype.decoder = DBCSDecoder;

  // Decoder helpers
  DBCSCodec.prototype._getDecodeTrieNode = function(addr) {
      var bytes = [];
      for (; addr > 0; addr >>>= 8)
          bytes.push(addr & 0xFF);
      if (bytes.length == 0)
          bytes.push(0);

      var node = this.decodeTables[0];
      for (var i = bytes.length-1; i > 0; i--) { // Traverse nodes deeper into the trie.
          var val = node[bytes[i]];

          if (val == UNASSIGNED) { // Create new node.
              node[bytes[i]] = NODE_START - this.decodeTables.length;
              this.decodeTables.push(node = UNASSIGNED_NODE.slice(0));
          }
          else if (val <= NODE_START) { // Existing node.
              node = this.decodeTables[NODE_START - val];
          }
          else
              throw new Error("Overwrite byte in " + this.encodingName + ", addr: " + addr.toString(16));
      }
      return node;
  };


  DBCSCodec.prototype._addDecodeChunk = function(chunk) {
      // First element of chunk is the hex mbcs code where we start.
      var curAddr = parseInt(chunk[0], 16);

      // Choose the decoding node where we'll write our chars.
      var writeTable = this._getDecodeTrieNode(curAddr);
      curAddr = curAddr & 0xFF;

      // Write all other elements of the chunk to the table.
      for (var k = 1; k < chunk.length; k++) {
          var part = chunk[k];
          if (typeof part === "string") { // String, write as-is.
              for (var l = 0; l < part.length;) {
                  var code = part.charCodeAt(l++);
                  if (0xD800 <= code && code < 0xDC00) { // Decode surrogate
                      var codeTrail = part.charCodeAt(l++);
                      if (0xDC00 <= codeTrail && codeTrail < 0xE000)
                          writeTable[curAddr++] = 0x10000 + (code - 0xD800) * 0x400 + (codeTrail - 0xDC00);
                      else
                          throw new Error("Incorrect surrogate pair in "  + this.encodingName + " at chunk " + chunk[0]);
                  }
                  else if (0x0FF0 < code && code <= 0x0FFF) { // Character sequence (our own encoding used)
                      var len = 0xFFF - code + 2;
                      var seq = [];
                      for (var m = 0; m < len; m++)
                          seq.push(part.charCodeAt(l++)); // Simple variation: don't support surrogates or subsequences in seq.

                      writeTable[curAddr++] = SEQ_START - this.decodeTableSeq.length;
                      this.decodeTableSeq.push(seq);
                  }
                  else
                      writeTable[curAddr++] = code; // Basic char
              }
          } 
          else if (typeof part === "number") { // Integer, meaning increasing sequence starting with prev character.
              var charCode = writeTable[curAddr - 1] + 1;
              for (var l = 0; l < part; l++)
                  writeTable[curAddr++] = charCode++;
          }
          else
              throw new Error("Incorrect type '" + typeof part + "' given in "  + this.encodingName + " at chunk " + chunk[0]);
      }
      if (curAddr > 0xFF)
          throw new Error("Incorrect chunk in "  + this.encodingName + " at addr " + chunk[0] + ": too long" + curAddr);
  };

  // Encoder helpers
  DBCSCodec.prototype._getEncodeBucket = function(uCode) {
      var high = uCode >> 8; // This could be > 0xFF because of astral characters.
      if (this.encodeTable[high] === undefined)
          this.encodeTable[high] = UNASSIGNED_NODE.slice(0); // Create bucket on demand.
      return this.encodeTable[high];
  };

  DBCSCodec.prototype._setEncodeChar = function(uCode, dbcsCode) {
      var bucket = this._getEncodeBucket(uCode);
      var low = uCode & 0xFF;
      if (bucket[low] <= SEQ_START)
          this.encodeTableSeq[SEQ_START-bucket[low]][DEF_CHAR] = dbcsCode; // There's already a sequence, set a single-char subsequence of it.
      else if (bucket[low] == UNASSIGNED)
          bucket[low] = dbcsCode;
  };

  DBCSCodec.prototype._setEncodeSequence = function(seq, dbcsCode) {
      
      // Get the root of character tree according to first character of the sequence.
      var uCode = seq[0];
      var bucket = this._getEncodeBucket(uCode);
      var low = uCode & 0xFF;

      var node;
      if (bucket[low] <= SEQ_START) {
          // There's already a sequence with  - use it.
          node = this.encodeTableSeq[SEQ_START-bucket[low]];
      }
      else {
          // There was no sequence object - allocate a new one.
          node = {};
          if (bucket[low] !== UNASSIGNED) node[DEF_CHAR] = bucket[low]; // If a char was set before - make it a single-char subsequence.
          bucket[low] = SEQ_START - this.encodeTableSeq.length;
          this.encodeTableSeq.push(node);
      }

      // Traverse the character tree, allocating new nodes as needed.
      for (var j = 1; j < seq.length-1; j++) {
          var oldVal = node[uCode];
          if (typeof oldVal === 'object')
              node = oldVal;
          else {
              node = node[uCode] = {};
              if (oldVal !== undefined)
                  node[DEF_CHAR] = oldVal;
          }
      }

      // Set the leaf to given dbcsCode.
      uCode = seq[seq.length-1];
      node[uCode] = dbcsCode;
  };

  DBCSCodec.prototype._fillEncodeTable = function(nodeIdx, prefix, skipEncodeChars) {
      var node = this.decodeTables[nodeIdx];
      var hasValues = false;
      var subNodeEmpty = {};
      for (var i = 0; i < 0x100; i++) {
          var uCode = node[i];
          var mbCode = prefix + i;
          if (skipEncodeChars[mbCode])
              continue;

          if (uCode >= 0) {
              this._setEncodeChar(uCode, mbCode);
              hasValues = true;
          } else if (uCode <= NODE_START) {
              var subNodeIdx = NODE_START - uCode;
              if (!subNodeEmpty[subNodeIdx]) {  // Skip empty subtrees (they are too large in gb18030).
                  var newPrefix = (mbCode << 8) >>> 0;  // NOTE: '>>> 0' keeps 32-bit num positive.
                  if (this._fillEncodeTable(subNodeIdx, newPrefix, skipEncodeChars))
                      hasValues = true;
                  else
                      subNodeEmpty[subNodeIdx] = true;
              }
          } else if (uCode <= SEQ_START) {
              this._setEncodeSequence(this.decodeTableSeq[SEQ_START - uCode], mbCode);
              hasValues = true;
          }
      }
      return hasValues;
  };



  // == Encoder ==================================================================

  function DBCSEncoder(options, codec) {
      // Encoder state
      this.leadSurrogate = -1;
      this.seqObj = undefined;
      
      // Static data
      this.encodeTable = codec.encodeTable;
      this.encodeTableSeq = codec.encodeTableSeq;
      this.defaultCharSingleByte = codec.defCharSB;
      this.gb18030 = codec.gb18030;
  }

  DBCSEncoder.prototype.write = function(str) {
      var newBuf = Buffer$7.alloc(str.length * (this.gb18030 ? 4 : 3)),
          leadSurrogate = this.leadSurrogate,
          seqObj = this.seqObj, nextChar = -1,
          i = 0, j = 0;

      while (true) {
          // 0. Get next character.
          if (nextChar === -1) {
              if (i == str.length) break;
              var uCode = str.charCodeAt(i++);
          }
          else {
              var uCode = nextChar;
              nextChar = -1;    
          }

          // 1. Handle surrogates.
          if (0xD800 <= uCode && uCode < 0xE000) { // Char is one of surrogates.
              if (uCode < 0xDC00) { // We've got lead surrogate.
                  if (leadSurrogate === -1) {
                      leadSurrogate = uCode;
                      continue;
                  } else {
                      leadSurrogate = uCode;
                      // Double lead surrogate found.
                      uCode = UNASSIGNED;
                  }
              } else { // We've got trail surrogate.
                  if (leadSurrogate !== -1) {
                      uCode = 0x10000 + (leadSurrogate - 0xD800) * 0x400 + (uCode - 0xDC00);
                      leadSurrogate = -1;
                  } else {
                      // Incomplete surrogate pair - only trail surrogate found.
                      uCode = UNASSIGNED;
                  }
                  
              }
          }
          else if (leadSurrogate !== -1) {
              // Incomplete surrogate pair - only lead surrogate found.
              nextChar = uCode; uCode = UNASSIGNED; // Write an error, then current char.
              leadSurrogate = -1;
          }

          // 2. Convert uCode character.
          var dbcsCode = UNASSIGNED;
          if (seqObj !== undefined && uCode != UNASSIGNED) { // We are in the middle of the sequence
              var resCode = seqObj[uCode];
              if (typeof resCode === 'object') { // Sequence continues.
                  seqObj = resCode;
                  continue;

              } else if (typeof resCode == 'number') { // Sequence finished. Write it.
                  dbcsCode = resCode;

              } else if (resCode == undefined) { // Current character is not part of the sequence.

                  // Try default character for this sequence
                  resCode = seqObj[DEF_CHAR];
                  if (resCode !== undefined) {
                      dbcsCode = resCode; // Found. Write it.
                      nextChar = uCode; // Current character will be written too in the next iteration.

                  }
              }
              seqObj = undefined;
          }
          else if (uCode >= 0) {  // Regular character
              var subtable = this.encodeTable[uCode >> 8];
              if (subtable !== undefined)
                  dbcsCode = subtable[uCode & 0xFF];
              
              if (dbcsCode <= SEQ_START) { // Sequence start
                  seqObj = this.encodeTableSeq[SEQ_START-dbcsCode];
                  continue;
              }

              if (dbcsCode == UNASSIGNED && this.gb18030) {
                  // Use GB18030 algorithm to find character(s) to write.
                  var idx = findIdx(this.gb18030.uChars, uCode);
                  if (idx != -1) {
                      var dbcsCode = this.gb18030.gbChars[idx] + (uCode - this.gb18030.uChars[idx]);
                      newBuf[j++] = 0x81 + Math.floor(dbcsCode / 12600); dbcsCode = dbcsCode % 12600;
                      newBuf[j++] = 0x30 + Math.floor(dbcsCode / 1260); dbcsCode = dbcsCode % 1260;
                      newBuf[j++] = 0x81 + Math.floor(dbcsCode / 10); dbcsCode = dbcsCode % 10;
                      newBuf[j++] = 0x30 + dbcsCode;
                      continue;
                  }
              }
          }

          // 3. Write dbcsCode character.
          if (dbcsCode === UNASSIGNED)
              dbcsCode = this.defaultCharSingleByte;
          
          if (dbcsCode < 0x100) {
              newBuf[j++] = dbcsCode;
          }
          else if (dbcsCode < 0x10000) {
              newBuf[j++] = dbcsCode >> 8;   // high byte
              newBuf[j++] = dbcsCode & 0xFF; // low byte
          }
          else if (dbcsCode < 0x1000000) {
              newBuf[j++] = dbcsCode >> 16;
              newBuf[j++] = (dbcsCode >> 8) & 0xFF;
              newBuf[j++] = dbcsCode & 0xFF;
          } else {
              newBuf[j++] = dbcsCode >>> 24;
              newBuf[j++] = (dbcsCode >>> 16) & 0xFF;
              newBuf[j++] = (dbcsCode >>> 8) & 0xFF;
              newBuf[j++] = dbcsCode & 0xFF;
          }
      }

      this.seqObj = seqObj;
      this.leadSurrogate = leadSurrogate;
      return newBuf.slice(0, j);
  };

  DBCSEncoder.prototype.end = function() {
      if (this.leadSurrogate === -1 && this.seqObj === undefined)
          return; // All clean. Most often case.

      var newBuf = Buffer$7.alloc(10), j = 0;

      if (this.seqObj) { // We're in the sequence.
          var dbcsCode = this.seqObj[DEF_CHAR];
          if (dbcsCode !== undefined) { // Write beginning of the sequence.
              if (dbcsCode < 0x100) {
                  newBuf[j++] = dbcsCode;
              }
              else {
                  newBuf[j++] = dbcsCode >> 8;   // high byte
                  newBuf[j++] = dbcsCode & 0xFF; // low byte
              }
          }
          this.seqObj = undefined;
      }

      if (this.leadSurrogate !== -1) {
          // Incomplete surrogate pair - only lead surrogate found.
          newBuf[j++] = this.defaultCharSingleByte;
          this.leadSurrogate = -1;
      }
      
      return newBuf.slice(0, j);
  };

  // Export for testing
  DBCSEncoder.prototype.findIdx = findIdx;


  // == Decoder ==================================================================

  function DBCSDecoder(options, codec) {
      // Decoder state
      this.nodeIdx = 0;
      this.prevBytes = [];

      // Static data
      this.decodeTables = codec.decodeTables;
      this.decodeTableSeq = codec.decodeTableSeq;
      this.defaultCharUnicode = codec.defaultCharUnicode;
      this.gb18030 = codec.gb18030;
  }

  DBCSDecoder.prototype.write = function(buf) {
      var newBuf = Buffer$7.alloc(buf.length*2),
          nodeIdx = this.nodeIdx, 
          prevBytes = this.prevBytes, prevOffset = this.prevBytes.length,
          seqStart = -this.prevBytes.length, // idx of the start of current parsed sequence.
          uCode;

      for (var i = 0, j = 0; i < buf.length; i++) {
          var curByte = (i >= 0) ? buf[i] : prevBytes[i + prevOffset];

          // Lookup in current trie node.
          var uCode = this.decodeTables[nodeIdx][curByte];

          if (uCode >= 0) ;
          else if (uCode === UNASSIGNED) { // Unknown char.
              // TODO: Callback with seq.
              uCode = this.defaultCharUnicode.charCodeAt(0);
              i = seqStart; // Skip one byte ('i' will be incremented by the for loop) and try to parse again.
          }
          else if (uCode === GB18030_CODE) {
              if (i >= 3) {
                  var ptr = (buf[i-3]-0x81)*12600 + (buf[i-2]-0x30)*1260 + (buf[i-1]-0x81)*10 + (curByte-0x30);
              } else {
                  var ptr = (prevBytes[i-3+prevOffset]-0x81)*12600 + 
                            (((i-2 >= 0) ? buf[i-2] : prevBytes[i-2+prevOffset])-0x30)*1260 + 
                            (((i-1 >= 0) ? buf[i-1] : prevBytes[i-1+prevOffset])-0x81)*10 + 
                            (curByte-0x30);
              }
              var idx = findIdx(this.gb18030.gbChars, ptr);
              uCode = this.gb18030.uChars[idx] + ptr - this.gb18030.gbChars[idx];
          }
          else if (uCode <= NODE_START) { // Go to next trie node.
              nodeIdx = NODE_START - uCode;
              continue;
          }
          else if (uCode <= SEQ_START) { // Output a sequence of chars.
              var seq = this.decodeTableSeq[SEQ_START - uCode];
              for (var k = 0; k < seq.length - 1; k++) {
                  uCode = seq[k];
                  newBuf[j++] = uCode & 0xFF;
                  newBuf[j++] = uCode >> 8;
              }
              uCode = seq[seq.length-1];
          }
          else
              throw new Error("iconv-lite internal error: invalid decoding table value " + uCode + " at " + nodeIdx + "/" + curByte);

          // Write the character to buffer, handling higher planes using surrogate pair.
          if (uCode >= 0x10000) { 
              uCode -= 0x10000;
              var uCodeLead = 0xD800 | (uCode >> 10);
              newBuf[j++] = uCodeLead & 0xFF;
              newBuf[j++] = uCodeLead >> 8;

              uCode = 0xDC00 | (uCode & 0x3FF);
          }
          newBuf[j++] = uCode & 0xFF;
          newBuf[j++] = uCode >> 8;

          // Reset trie node.
          nodeIdx = 0; seqStart = i+1;
      }

      this.nodeIdx = nodeIdx;
      this.prevBytes = (seqStart >= 0)
          ? Array.prototype.slice.call(buf, seqStart)
          : prevBytes.slice(seqStart + prevOffset).concat(Array.prototype.slice.call(buf));

      return newBuf.slice(0, j).toString('ucs2');
  };

  DBCSDecoder.prototype.end = function() {
      var ret = '';

      // Try to parse all remaining chars.
      while (this.prevBytes.length > 0) {
          // Skip 1 character in the buffer.
          ret += this.defaultCharUnicode;
          var bytesArr = this.prevBytes.slice(1);

          // Parse remaining as usual.
          this.prevBytes = [];
          this.nodeIdx = 0;
          if (bytesArr.length > 0)
              ret += this.write(bytesArr);
      }

      this.prevBytes = [];
      this.nodeIdx = 0;
      return ret;
  };

  // Binary search for GB18030. Returns largest i such that table[i] <= val.
  function findIdx(table, val) {
      if (table[0] > val)
          return -1;

      var l = 0, r = table.length;
      while (l < r-1) { // always table[l] <= val < table[r]
          var mid = l + ((r-l+1) >> 1);
          if (table[mid] <= val)
              l = mid;
          else
              r = mid;
      }
      return l;
  }

  var dbcsCodec = {
  	_dbcs: _dbcs
  };

  var shiftjis = [
  	[
  		"0",
  		"\u0000",
  		128
  	],
  	[
  		"a1",
  		"｡",
  		62
  	],
  	[
  		"8140",
  		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
  		9,
  		"＋－±×"
  	],
  	[
  		"8180",
  		"÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇◆□■△▲▽▼※〒→←↑↓〓"
  	],
  	[
  		"81b8",
  		"∈∋⊆⊇⊂⊃∪∩"
  	],
  	[
  		"81c8",
  		"∧∨￢⇒⇔∀∃"
  	],
  	[
  		"81da",
  		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  	],
  	[
  		"81f0",
  		"Å‰♯♭♪†‡¶"
  	],
  	[
  		"81fc",
  		"◯"
  	],
  	[
  		"824f",
  		"０",
  		9
  	],
  	[
  		"8260",
  		"Ａ",
  		25
  	],
  	[
  		"8281",
  		"ａ",
  		25
  	],
  	[
  		"829f",
  		"ぁ",
  		82
  	],
  	[
  		"8340",
  		"ァ",
  		62
  	],
  	[
  		"8380",
  		"ム",
  		22
  	],
  	[
  		"839f",
  		"Α",
  		16,
  		"Σ",
  		6
  	],
  	[
  		"83bf",
  		"α",
  		16,
  		"σ",
  		6
  	],
  	[
  		"8440",
  		"А",
  		5,
  		"ЁЖ",
  		25
  	],
  	[
  		"8470",
  		"а",
  		5,
  		"ёж",
  		7
  	],
  	[
  		"8480",
  		"о",
  		17
  	],
  	[
  		"849f",
  		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  	],
  	[
  		"8740",
  		"①",
  		19,
  		"Ⅰ",
  		9
  	],
  	[
  		"875f",
  		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  	],
  	[
  		"877e",
  		"㍻"
  	],
  	[
  		"8780",
  		"〝〟№㏍℡㊤",
  		4,
  		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  	],
  	[
  		"889f",
  		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  	],
  	[
  		"8940",
  		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円"
  	],
  	[
  		"8980",
  		"園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  	],
  	[
  		"8a40",
  		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫"
  	],
  	[
  		"8a80",
  		"橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  	],
  	[
  		"8b40",
  		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救"
  	],
  	[
  		"8b80",
  		"朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  	],
  	[
  		"8c40",
  		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨"
  	],
  	[
  		"8c80",
  		"劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  	],
  	[
  		"8d40",
  		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降"
  	],
  	[
  		"8d80",
  		"項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  	],
  	[
  		"8e40",
  		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止"
  	],
  	[
  		"8e80",
  		"死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  	],
  	[
  		"8f40",
  		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳"
  	],
  	[
  		"8f80",
  		"準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  	],
  	[
  		"9040",
  		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨"
  	],
  	[
  		"9080",
  		"逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  	],
  	[
  		"9140",
  		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻"
  	],
  	[
  		"9180",
  		"操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  	],
  	[
  		"9240",
  		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄"
  	],
  	[
  		"9280",
  		"逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  	],
  	[
  		"9340",
  		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬"
  	],
  	[
  		"9380",
  		"凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  	],
  	[
  		"9440",
  		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅"
  	],
  	[
  		"9480",
  		"楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  	],
  	[
  		"9540",
  		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷"
  	],
  	[
  		"9580",
  		"斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  	],
  	[
  		"9640",
  		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆"
  	],
  	[
  		"9680",
  		"摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  	],
  	[
  		"9740",
  		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲"
  	],
  	[
  		"9780",
  		"沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  	],
  	[
  		"9840",
  		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  	],
  	[
  		"989f",
  		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  	],
  	[
  		"9940",
  		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭"
  	],
  	[
  		"9980",
  		"凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  	],
  	[
  		"9a40",
  		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸"
  	],
  	[
  		"9a80",
  		"噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  	],
  	[
  		"9b40",
  		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀"
  	],
  	[
  		"9b80",
  		"它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  	],
  	[
  		"9c40",
  		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠"
  	],
  	[
  		"9c80",
  		"怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  	],
  	[
  		"9d40",
  		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫"
  	],
  	[
  		"9d80",
  		"捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  	],
  	[
  		"9e40",
  		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎"
  	],
  	[
  		"9e80",
  		"梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  	],
  	[
  		"9f40",
  		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯"
  	],
  	[
  		"9f80",
  		"麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  	],
  	[
  		"e040",
  		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝"
  	],
  	[
  		"e080",
  		"烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  	],
  	[
  		"e140",
  		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿"
  	],
  	[
  		"e180",
  		"痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  	],
  	[
  		"e240",
  		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰"
  	],
  	[
  		"e280",
  		"窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  	],
  	[
  		"e340",
  		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷"
  	],
  	[
  		"e380",
  		"縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  	],
  	[
  		"e440",
  		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤"
  	],
  	[
  		"e480",
  		"艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  	],
  	[
  		"e540",
  		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬"
  	],
  	[
  		"e580",
  		"蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  	],
  	[
  		"e640",
  		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧"
  	],
  	[
  		"e680",
  		"諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  	],
  	[
  		"e740",
  		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜"
  	],
  	[
  		"e780",
  		"轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  	],
  	[
  		"e840",
  		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙"
  	],
  	[
  		"e880",
  		"閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  	],
  	[
  		"e940",
  		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃"
  	],
  	[
  		"e980",
  		"騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  	],
  	[
  		"ea40",
  		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯"
  	],
  	[
  		"ea80",
  		"黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠堯槇遙瑤凜熙"
  	],
  	[
  		"ed40",
  		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏"
  	],
  	[
  		"ed80",
  		"塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  	],
  	[
  		"ee40",
  		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙"
  	],
  	[
  		"ee80",
  		"蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  	],
  	[
  		"eeef",
  		"ⅰ",
  		9,
  		"￢￤＇＂"
  	],
  	[
  		"f040",
  		"",
  		62
  	],
  	[
  		"f080",
  		"",
  		124
  	],
  	[
  		"f140",
  		"",
  		62
  	],
  	[
  		"f180",
  		"",
  		124
  	],
  	[
  		"f240",
  		"",
  		62
  	],
  	[
  		"f280",
  		"",
  		124
  	],
  	[
  		"f340",
  		"",
  		62
  	],
  	[
  		"f380",
  		"",
  		124
  	],
  	[
  		"f440",
  		"",
  		62
  	],
  	[
  		"f480",
  		"",
  		124
  	],
  	[
  		"f540",
  		"",
  		62
  	],
  	[
  		"f580",
  		"",
  		124
  	],
  	[
  		"f640",
  		"",
  		62
  	],
  	[
  		"f680",
  		"",
  		124
  	],
  	[
  		"f740",
  		"",
  		62
  	],
  	[
  		"f780",
  		"",
  		124
  	],
  	[
  		"f840",
  		"",
  		62
  	],
  	[
  		"f880",
  		"",
  		124
  	],
  	[
  		"f940",
  		""
  	],
  	[
  		"fa40",
  		"ⅰ",
  		9,
  		"Ⅰ",
  		9,
  		"￢￤＇＂㈱№℡∵纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊"
  	],
  	[
  		"fa80",
  		"兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯"
  	],
  	[
  		"fb40",
  		"涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神"
  	],
  	[
  		"fb80",
  		"祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙"
  	],
  	[
  		"fc40",
  		"髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  	]
  ];

  var shiftjis$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': shiftjis
  });

  var eucjp = [
  	[
  		"0",
  		"\u0000",
  		127
  	],
  	[
  		"8ea1",
  		"｡",
  		62
  	],
  	[
  		"a1a1",
  		"　、。，．・：；？！゛゜´｀¨＾￣＿ヽヾゝゞ〃仝々〆〇ー―‐／＼～∥｜…‥‘’“”（）〔〕［］｛｝〈",
  		9,
  		"＋－±×÷＝≠＜＞≦≧∞∴♂♀°′″℃￥＄￠￡％＃＆＊＠§☆★○●◎◇"
  	],
  	[
  		"a2a1",
  		"◆□■△▲▽▼※〒→←↑↓〓"
  	],
  	[
  		"a2ba",
  		"∈∋⊆⊇⊂⊃∪∩"
  	],
  	[
  		"a2ca",
  		"∧∨￢⇒⇔∀∃"
  	],
  	[
  		"a2dc",
  		"∠⊥⌒∂∇≡≒≪≫√∽∝∵∫∬"
  	],
  	[
  		"a2f2",
  		"Å‰♯♭♪†‡¶"
  	],
  	[
  		"a2fe",
  		"◯"
  	],
  	[
  		"a3b0",
  		"０",
  		9
  	],
  	[
  		"a3c1",
  		"Ａ",
  		25
  	],
  	[
  		"a3e1",
  		"ａ",
  		25
  	],
  	[
  		"a4a1",
  		"ぁ",
  		82
  	],
  	[
  		"a5a1",
  		"ァ",
  		85
  	],
  	[
  		"a6a1",
  		"Α",
  		16,
  		"Σ",
  		6
  	],
  	[
  		"a6c1",
  		"α",
  		16,
  		"σ",
  		6
  	],
  	[
  		"a7a1",
  		"А",
  		5,
  		"ЁЖ",
  		25
  	],
  	[
  		"a7d1",
  		"а",
  		5,
  		"ёж",
  		25
  	],
  	[
  		"a8a1",
  		"─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂"
  	],
  	[
  		"ada1",
  		"①",
  		19,
  		"Ⅰ",
  		9
  	],
  	[
  		"adc0",
  		"㍉㌔㌢㍍㌘㌧㌃㌶㍑㍗㌍㌦㌣㌫㍊㌻㎜㎝㎞㎎㎏㏄㎡"
  	],
  	[
  		"addf",
  		"㍻〝〟№㏍℡㊤",
  		4,
  		"㈱㈲㈹㍾㍽㍼≒≡∫∮∑√⊥∠∟⊿∵∩∪"
  	],
  	[
  		"b0a1",
  		"亜唖娃阿哀愛挨姶逢葵茜穐悪握渥旭葦芦鯵梓圧斡扱宛姐虻飴絢綾鮎或粟袷安庵按暗案闇鞍杏以伊位依偉囲夷委威尉惟意慰易椅為畏異移維緯胃萎衣謂違遺医井亥域育郁磯一壱溢逸稲茨芋鰯允印咽員因姻引飲淫胤蔭"
  	],
  	[
  		"b1a1",
  		"院陰隠韻吋右宇烏羽迂雨卯鵜窺丑碓臼渦嘘唄欝蔚鰻姥厩浦瓜閏噂云運雲荏餌叡営嬰影映曳栄永泳洩瑛盈穎頴英衛詠鋭液疫益駅悦謁越閲榎厭円園堰奄宴延怨掩援沿演炎焔煙燕猿縁艶苑薗遠鉛鴛塩於汚甥凹央奥往応"
  	],
  	[
  		"b2a1",
  		"押旺横欧殴王翁襖鴬鴎黄岡沖荻億屋憶臆桶牡乙俺卸恩温穏音下化仮何伽価佳加可嘉夏嫁家寡科暇果架歌河火珂禍禾稼箇花苛茄荷華菓蝦課嘩貨迦過霞蚊俄峨我牙画臥芽蛾賀雅餓駕介会解回塊壊廻快怪悔恢懐戒拐改"
  	],
  	[
  		"b3a1",
  		"魁晦械海灰界皆絵芥蟹開階貝凱劾外咳害崖慨概涯碍蓋街該鎧骸浬馨蛙垣柿蛎鈎劃嚇各廓拡撹格核殻獲確穫覚角赫較郭閣隔革学岳楽額顎掛笠樫橿梶鰍潟割喝恰括活渇滑葛褐轄且鰹叶椛樺鞄株兜竃蒲釜鎌噛鴨栢茅萱"
  	],
  	[
  		"b4a1",
  		"粥刈苅瓦乾侃冠寒刊勘勧巻喚堪姦完官寛干幹患感慣憾換敢柑桓棺款歓汗漢澗潅環甘監看竿管簡緩缶翰肝艦莞観諌貫還鑑間閑関陥韓館舘丸含岸巌玩癌眼岩翫贋雁頑顔願企伎危喜器基奇嬉寄岐希幾忌揮机旗既期棋棄"
  	],
  	[
  		"b5a1",
  		"機帰毅気汽畿祈季稀紀徽規記貴起軌輝飢騎鬼亀偽儀妓宜戯技擬欺犠疑祇義蟻誼議掬菊鞠吉吃喫桔橘詰砧杵黍却客脚虐逆丘久仇休及吸宮弓急救朽求汲泣灸球究窮笈級糾給旧牛去居巨拒拠挙渠虚許距鋸漁禦魚亨享京"
  	],
  	[
  		"b6a1",
  		"供侠僑兇競共凶協匡卿叫喬境峡強彊怯恐恭挟教橋況狂狭矯胸脅興蕎郷鏡響饗驚仰凝尭暁業局曲極玉桐粁僅勤均巾錦斤欣欽琴禁禽筋緊芹菌衿襟謹近金吟銀九倶句区狗玖矩苦躯駆駈駒具愚虞喰空偶寓遇隅串櫛釧屑屈"
  	],
  	[
  		"b7a1",
  		"掘窟沓靴轡窪熊隈粂栗繰桑鍬勲君薫訓群軍郡卦袈祁係傾刑兄啓圭珪型契形径恵慶慧憩掲携敬景桂渓畦稽系経継繋罫茎荊蛍計詣警軽頚鶏芸迎鯨劇戟撃激隙桁傑欠決潔穴結血訣月件倹倦健兼券剣喧圏堅嫌建憲懸拳捲"
  	],
  	[
  		"b8a1",
  		"検権牽犬献研硯絹県肩見謙賢軒遣鍵険顕験鹸元原厳幻弦減源玄現絃舷言諺限乎個古呼固姑孤己庫弧戸故枯湖狐糊袴股胡菰虎誇跨鈷雇顧鼓五互伍午呉吾娯後御悟梧檎瑚碁語誤護醐乞鯉交佼侯候倖光公功効勾厚口向"
  	],
  	[
  		"b9a1",
  		"后喉坑垢好孔孝宏工巧巷幸広庚康弘恒慌抗拘控攻昂晃更杭校梗構江洪浩港溝甲皇硬稿糠紅紘絞綱耕考肯肱腔膏航荒行衡講貢購郊酵鉱砿鋼閤降項香高鴻剛劫号合壕拷濠豪轟麹克刻告国穀酷鵠黒獄漉腰甑忽惚骨狛込"
  	],
  	[
  		"baa1",
  		"此頃今困坤墾婚恨懇昏昆根梱混痕紺艮魂些佐叉唆嵯左差査沙瑳砂詐鎖裟坐座挫債催再最哉塞妻宰彩才採栽歳済災采犀砕砦祭斎細菜裁載際剤在材罪財冴坂阪堺榊肴咲崎埼碕鷺作削咋搾昨朔柵窄策索錯桜鮭笹匙冊刷"
  	],
  	[
  		"bba1",
  		"察拶撮擦札殺薩雑皐鯖捌錆鮫皿晒三傘参山惨撒散桟燦珊産算纂蚕讃賛酸餐斬暫残仕仔伺使刺司史嗣四士始姉姿子屍市師志思指支孜斯施旨枝止死氏獅祉私糸紙紫肢脂至視詞詩試誌諮資賜雌飼歯事似侍児字寺慈持時"
  	],
  	[
  		"bca1",
  		"次滋治爾璽痔磁示而耳自蒔辞汐鹿式識鴫竺軸宍雫七叱執失嫉室悉湿漆疾質実蔀篠偲柴芝屡蕊縞舎写射捨赦斜煮社紗者謝車遮蛇邪借勺尺杓灼爵酌釈錫若寂弱惹主取守手朱殊狩珠種腫趣酒首儒受呪寿授樹綬需囚収周"
  	],
  	[
  		"bda1",
  		"宗就州修愁拾洲秀秋終繍習臭舟蒐衆襲讐蹴輯週酋酬集醜什住充十従戎柔汁渋獣縦重銃叔夙宿淑祝縮粛塾熟出術述俊峻春瞬竣舜駿准循旬楯殉淳準潤盾純巡遵醇順処初所暑曙渚庶緒署書薯藷諸助叙女序徐恕鋤除傷償"
  	],
  	[
  		"bea1",
  		"勝匠升召哨商唱嘗奨妾娼宵将小少尚庄床廠彰承抄招掌捷昇昌昭晶松梢樟樵沼消渉湘焼焦照症省硝礁祥称章笑粧紹肖菖蒋蕉衝裳訟証詔詳象賞醤鉦鍾鐘障鞘上丈丞乗冗剰城場壌嬢常情擾条杖浄状畳穣蒸譲醸錠嘱埴飾"
  	],
  	[
  		"bfa1",
  		"拭植殖燭織職色触食蝕辱尻伸信侵唇娠寝審心慎振新晋森榛浸深申疹真神秦紳臣芯薪親診身辛進針震人仁刃塵壬尋甚尽腎訊迅陣靭笥諏須酢図厨逗吹垂帥推水炊睡粋翠衰遂酔錐錘随瑞髄崇嵩数枢趨雛据杉椙菅頗雀裾"
  	],
  	[
  		"c0a1",
  		"澄摺寸世瀬畝是凄制勢姓征性成政整星晴棲栖正清牲生盛精聖声製西誠誓請逝醒青静斉税脆隻席惜戚斥昔析石積籍績脊責赤跡蹟碩切拙接摂折設窃節説雪絶舌蝉仙先千占宣専尖川戦扇撰栓栴泉浅洗染潜煎煽旋穿箭線"
  	],
  	[
  		"c1a1",
  		"繊羨腺舛船薦詮賎践選遷銭銑閃鮮前善漸然全禅繕膳糎噌塑岨措曾曽楚狙疏疎礎祖租粗素組蘇訴阻遡鼠僧創双叢倉喪壮奏爽宋層匝惣想捜掃挿掻操早曹巣槍槽漕燥争痩相窓糟総綜聡草荘葬蒼藻装走送遭鎗霜騒像増憎"
  	],
  	[
  		"c2a1",
  		"臓蔵贈造促側則即息捉束測足速俗属賊族続卒袖其揃存孫尊損村遜他多太汰詑唾堕妥惰打柁舵楕陀駄騨体堆対耐岱帯待怠態戴替泰滞胎腿苔袋貸退逮隊黛鯛代台大第醍題鷹滝瀧卓啄宅托択拓沢濯琢託鐸濁諾茸凧蛸只"
  	],
  	[
  		"c3a1",
  		"叩但達辰奪脱巽竪辿棚谷狸鱈樽誰丹単嘆坦担探旦歎淡湛炭短端箪綻耽胆蛋誕鍛団壇弾断暖檀段男談値知地弛恥智池痴稚置致蜘遅馳築畜竹筑蓄逐秩窒茶嫡着中仲宙忠抽昼柱注虫衷註酎鋳駐樗瀦猪苧著貯丁兆凋喋寵"
  	],
  	[
  		"c4a1",
  		"帖帳庁弔張彫徴懲挑暢朝潮牒町眺聴脹腸蝶調諜超跳銚長頂鳥勅捗直朕沈珍賃鎮陳津墜椎槌追鎚痛通塚栂掴槻佃漬柘辻蔦綴鍔椿潰坪壷嬬紬爪吊釣鶴亭低停偵剃貞呈堤定帝底庭廷弟悌抵挺提梯汀碇禎程締艇訂諦蹄逓"
  	],
  	[
  		"c5a1",
  		"邸鄭釘鼎泥摘擢敵滴的笛適鏑溺哲徹撤轍迭鉄典填天展店添纏甜貼転顛点伝殿澱田電兎吐堵塗妬屠徒斗杜渡登菟賭途都鍍砥砺努度土奴怒倒党冬凍刀唐塔塘套宕島嶋悼投搭東桃梼棟盗淘湯涛灯燈当痘祷等答筒糖統到"
  	],
  	[
  		"c6a1",
  		"董蕩藤討謄豆踏逃透鐙陶頭騰闘働動同堂導憧撞洞瞳童胴萄道銅峠鴇匿得徳涜特督禿篤毒独読栃橡凸突椴届鳶苫寅酉瀞噸屯惇敦沌豚遁頓呑曇鈍奈那内乍凪薙謎灘捺鍋楢馴縄畷南楠軟難汝二尼弐迩匂賑肉虹廿日乳入"
  	],
  	[
  		"c7a1",
  		"如尿韮任妊忍認濡禰祢寧葱猫熱年念捻撚燃粘乃廼之埜嚢悩濃納能脳膿農覗蚤巴把播覇杷波派琶破婆罵芭馬俳廃拝排敗杯盃牌背肺輩配倍培媒梅楳煤狽買売賠陪這蝿秤矧萩伯剥博拍柏泊白箔粕舶薄迫曝漠爆縛莫駁麦"
  	],
  	[
  		"c8a1",
  		"函箱硲箸肇筈櫨幡肌畑畠八鉢溌発醗髪伐罰抜筏閥鳩噺塙蛤隼伴判半反叛帆搬斑板氾汎版犯班畔繁般藩販範釆煩頒飯挽晩番盤磐蕃蛮匪卑否妃庇彼悲扉批披斐比泌疲皮碑秘緋罷肥被誹費避非飛樋簸備尾微枇毘琵眉美"
  	],
  	[
  		"c9a1",
  		"鼻柊稗匹疋髭彦膝菱肘弼必畢筆逼桧姫媛紐百謬俵彪標氷漂瓢票表評豹廟描病秒苗錨鋲蒜蛭鰭品彬斌浜瀕貧賓頻敏瓶不付埠夫婦富冨布府怖扶敷斧普浮父符腐膚芙譜負賦赴阜附侮撫武舞葡蕪部封楓風葺蕗伏副復幅服"
  	],
  	[
  		"caa1",
  		"福腹複覆淵弗払沸仏物鮒分吻噴墳憤扮焚奮粉糞紛雰文聞丙併兵塀幣平弊柄並蔽閉陛米頁僻壁癖碧別瞥蔑箆偏変片篇編辺返遍便勉娩弁鞭保舗鋪圃捕歩甫補輔穂募墓慕戊暮母簿菩倣俸包呆報奉宝峰峯崩庖抱捧放方朋"
  	],
  	[
  		"cba1",
  		"法泡烹砲縫胞芳萌蓬蜂褒訪豊邦鋒飽鳳鵬乏亡傍剖坊妨帽忘忙房暴望某棒冒紡肪膨謀貌貿鉾防吠頬北僕卜墨撲朴牧睦穆釦勃没殆堀幌奔本翻凡盆摩磨魔麻埋妹昧枚毎哩槙幕膜枕鮪柾鱒桝亦俣又抹末沫迄侭繭麿万慢満"
  	],
  	[
  		"cca1",
  		"漫蔓味未魅巳箕岬密蜜湊蓑稔脈妙粍民眠務夢無牟矛霧鵡椋婿娘冥名命明盟迷銘鳴姪牝滅免棉綿緬面麺摸模茂妄孟毛猛盲網耗蒙儲木黙目杢勿餅尤戻籾貰問悶紋門匁也冶夜爺耶野弥矢厄役約薬訳躍靖柳薮鑓愉愈油癒"
  	],
  	[
  		"cda1",
  		"諭輸唯佑優勇友宥幽悠憂揖有柚湧涌猶猷由祐裕誘遊邑郵雄融夕予余与誉輿預傭幼妖容庸揚揺擁曜楊様洋溶熔用窯羊耀葉蓉要謡踊遥陽養慾抑欲沃浴翌翼淀羅螺裸来莱頼雷洛絡落酪乱卵嵐欄濫藍蘭覧利吏履李梨理璃"
  	],
  	[
  		"cea1",
  		"痢裏裡里離陸律率立葎掠略劉流溜琉留硫粒隆竜龍侶慮旅虜了亮僚両凌寮料梁涼猟療瞭稜糧良諒遼量陵領力緑倫厘林淋燐琳臨輪隣鱗麟瑠塁涙累類令伶例冷励嶺怜玲礼苓鈴隷零霊麗齢暦歴列劣烈裂廉恋憐漣煉簾練聯"
  	],
  	[
  		"cfa1",
  		"蓮連錬呂魯櫓炉賂路露労婁廊弄朗楼榔浪漏牢狼篭老聾蝋郎六麓禄肋録論倭和話歪賄脇惑枠鷲亙亘鰐詫藁蕨椀湾碗腕"
  	],
  	[
  		"d0a1",
  		"弌丐丕个丱丶丼丿乂乖乘亂亅豫亊舒弍于亞亟亠亢亰亳亶从仍仄仆仂仗仞仭仟价伉佚估佛佝佗佇佶侈侏侘佻佩佰侑佯來侖儘俔俟俎俘俛俑俚俐俤俥倚倨倔倪倥倅伜俶倡倩倬俾俯們倆偃假會偕偐偈做偖偬偸傀傚傅傴傲"
  	],
  	[
  		"d1a1",
  		"僉僊傳僂僖僞僥僭僣僮價僵儉儁儂儖儕儔儚儡儺儷儼儻儿兀兒兌兔兢竸兩兪兮冀冂囘册冉冏冑冓冕冖冤冦冢冩冪冫决冱冲冰况冽凅凉凛几處凩凭凰凵凾刄刋刔刎刧刪刮刳刹剏剄剋剌剞剔剪剴剩剳剿剽劍劔劒剱劈劑辨"
  	],
  	[
  		"d2a1",
  		"辧劬劭劼劵勁勍勗勞勣勦飭勠勳勵勸勹匆匈甸匍匐匏匕匚匣匯匱匳匸區卆卅丗卉卍凖卞卩卮夘卻卷厂厖厠厦厥厮厰厶參簒雙叟曼燮叮叨叭叺吁吽呀听吭吼吮吶吩吝呎咏呵咎呟呱呷呰咒呻咀呶咄咐咆哇咢咸咥咬哄哈咨"
  	],
  	[
  		"d3a1",
  		"咫哂咤咾咼哘哥哦唏唔哽哮哭哺哢唹啀啣啌售啜啅啖啗唸唳啝喙喀咯喊喟啻啾喘喞單啼喃喩喇喨嗚嗅嗟嗄嗜嗤嗔嘔嗷嘖嗾嗽嘛嗹噎噐營嘴嘶嘲嘸噫噤嘯噬噪嚆嚀嚊嚠嚔嚏嚥嚮嚶嚴囂嚼囁囃囀囈囎囑囓囗囮囹圀囿圄圉"
  	],
  	[
  		"d4a1",
  		"圈國圍圓團圖嗇圜圦圷圸坎圻址坏坩埀垈坡坿垉垓垠垳垤垪垰埃埆埔埒埓堊埖埣堋堙堝塲堡塢塋塰毀塒堽塹墅墹墟墫墺壞墻墸墮壅壓壑壗壙壘壥壜壤壟壯壺壹壻壼壽夂夊夐夛梦夥夬夭夲夸夾竒奕奐奎奚奘奢奠奧奬奩"
  	],
  	[
  		"d5a1",
  		"奸妁妝佞侫妣妲姆姨姜妍姙姚娥娟娑娜娉娚婀婬婉娵娶婢婪媚媼媾嫋嫂媽嫣嫗嫦嫩嫖嫺嫻嬌嬋嬖嬲嫐嬪嬶嬾孃孅孀孑孕孚孛孥孩孰孳孵學斈孺宀它宦宸寃寇寉寔寐寤實寢寞寥寫寰寶寳尅將專對尓尠尢尨尸尹屁屆屎屓"
  	],
  	[
  		"d6a1",
  		"屐屏孱屬屮乢屶屹岌岑岔妛岫岻岶岼岷峅岾峇峙峩峽峺峭嶌峪崋崕崗嵜崟崛崑崔崢崚崙崘嵌嵒嵎嵋嵬嵳嵶嶇嶄嶂嶢嶝嶬嶮嶽嶐嶷嶼巉巍巓巒巖巛巫已巵帋帚帙帑帛帶帷幄幃幀幎幗幔幟幢幤幇幵并幺麼广庠廁廂廈廐廏"
  	],
  	[
  		"d7a1",
  		"廖廣廝廚廛廢廡廨廩廬廱廳廰廴廸廾弃弉彝彜弋弑弖弩弭弸彁彈彌彎弯彑彖彗彙彡彭彳彷徃徂彿徊很徑徇從徙徘徠徨徭徼忖忻忤忸忱忝悳忿怡恠怙怐怩怎怱怛怕怫怦怏怺恚恁恪恷恟恊恆恍恣恃恤恂恬恫恙悁悍惧悃悚"
  	],
  	[
  		"d8a1",
  		"悄悛悖悗悒悧悋惡悸惠惓悴忰悽惆悵惘慍愕愆惶惷愀惴惺愃愡惻惱愍愎慇愾愨愧慊愿愼愬愴愽慂慄慳慷慘慙慚慫慴慯慥慱慟慝慓慵憙憖憇憬憔憚憊憑憫憮懌懊應懷懈懃懆憺懋罹懍懦懣懶懺懴懿懽懼懾戀戈戉戍戌戔戛"
  	],
  	[
  		"d9a1",
  		"戞戡截戮戰戲戳扁扎扞扣扛扠扨扼抂抉找抒抓抖拔抃抔拗拑抻拏拿拆擔拈拜拌拊拂拇抛拉挌拮拱挧挂挈拯拵捐挾捍搜捏掖掎掀掫捶掣掏掉掟掵捫捩掾揩揀揆揣揉插揶揄搖搴搆搓搦搶攝搗搨搏摧摯摶摎攪撕撓撥撩撈撼"
  	],
  	[
  		"daa1",
  		"據擒擅擇撻擘擂擱擧舉擠擡抬擣擯攬擶擴擲擺攀擽攘攜攅攤攣攫攴攵攷收攸畋效敖敕敍敘敞敝敲數斂斃變斛斟斫斷旃旆旁旄旌旒旛旙无旡旱杲昊昃旻杳昵昶昴昜晏晄晉晁晞晝晤晧晨晟晢晰暃暈暎暉暄暘暝曁暹曉暾暼"
  	],
  	[
  		"dba1",
  		"曄暸曖曚曠昿曦曩曰曵曷朏朖朞朦朧霸朮朿朶杁朸朷杆杞杠杙杣杤枉杰枩杼杪枌枋枦枡枅枷柯枴柬枳柩枸柤柞柝柢柮枹柎柆柧檜栞框栩桀桍栲桎梳栫桙档桷桿梟梏梭梔條梛梃檮梹桴梵梠梺椏梍桾椁棊椈棘椢椦棡椌棍"
  	],
  	[
  		"dca1",
  		"棔棧棕椶椒椄棗棣椥棹棠棯椨椪椚椣椡棆楹楷楜楸楫楔楾楮椹楴椽楙椰楡楞楝榁楪榲榮槐榿槁槓榾槎寨槊槝榻槃榧樮榑榠榜榕榴槞槨樂樛槿權槹槲槧樅榱樞槭樔槫樊樒櫁樣樓橄樌橲樶橸橇橢橙橦橈樸樢檐檍檠檄檢檣"
  	],
  	[
  		"dda1",
  		"檗蘗檻櫃櫂檸檳檬櫞櫑櫟檪櫚櫪櫻欅蘖櫺欒欖鬱欟欸欷盜欹飮歇歃歉歐歙歔歛歟歡歸歹歿殀殄殃殍殘殕殞殤殪殫殯殲殱殳殷殼毆毋毓毟毬毫毳毯麾氈氓气氛氤氣汞汕汢汪沂沍沚沁沛汾汨汳沒沐泄泱泓沽泗泅泝沮沱沾"
  	],
  	[
  		"dea1",
  		"沺泛泯泙泪洟衍洶洫洽洸洙洵洳洒洌浣涓浤浚浹浙涎涕濤涅淹渕渊涵淇淦涸淆淬淞淌淨淒淅淺淙淤淕淪淮渭湮渮渙湲湟渾渣湫渫湶湍渟湃渺湎渤滿渝游溂溪溘滉溷滓溽溯滄溲滔滕溏溥滂溟潁漑灌滬滸滾漿滲漱滯漲滌"
  	],
  	[
  		"dfa1",
  		"漾漓滷澆潺潸澁澀潯潛濳潭澂潼潘澎澑濂潦澳澣澡澤澹濆澪濟濕濬濔濘濱濮濛瀉瀋濺瀑瀁瀏濾瀛瀚潴瀝瀘瀟瀰瀾瀲灑灣炙炒炯烱炬炸炳炮烟烋烝烙焉烽焜焙煥煕熈煦煢煌煖煬熏燻熄熕熨熬燗熹熾燒燉燔燎燠燬燧燵燼"
  	],
  	[
  		"e0a1",
  		"燹燿爍爐爛爨爭爬爰爲爻爼爿牀牆牋牘牴牾犂犁犇犒犖犢犧犹犲狃狆狄狎狒狢狠狡狹狷倏猗猊猜猖猝猴猯猩猥猾獎獏默獗獪獨獰獸獵獻獺珈玳珎玻珀珥珮珞璢琅瑯琥珸琲琺瑕琿瑟瑙瑁瑜瑩瑰瑣瑪瑶瑾璋璞璧瓊瓏瓔珱"
  	],
  	[
  		"e1a1",
  		"瓠瓣瓧瓩瓮瓲瓰瓱瓸瓷甄甃甅甌甎甍甕甓甞甦甬甼畄畍畊畉畛畆畚畩畤畧畫畭畸當疆疇畴疊疉疂疔疚疝疥疣痂疳痃疵疽疸疼疱痍痊痒痙痣痞痾痿痼瘁痰痺痲痳瘋瘍瘉瘟瘧瘠瘡瘢瘤瘴瘰瘻癇癈癆癜癘癡癢癨癩癪癧癬癰"
  	],
  	[
  		"e2a1",
  		"癲癶癸發皀皃皈皋皎皖皓皙皚皰皴皸皹皺盂盍盖盒盞盡盥盧盪蘯盻眈眇眄眩眤眞眥眦眛眷眸睇睚睨睫睛睥睿睾睹瞎瞋瞑瞠瞞瞰瞶瞹瞿瞼瞽瞻矇矍矗矚矜矣矮矼砌砒礦砠礪硅碎硴碆硼碚碌碣碵碪碯磑磆磋磔碾碼磅磊磬"
  	],
  	[
  		"e3a1",
  		"磧磚磽磴礇礒礑礙礬礫祀祠祗祟祚祕祓祺祿禊禝禧齋禪禮禳禹禺秉秕秧秬秡秣稈稍稘稙稠稟禀稱稻稾稷穃穗穉穡穢穩龝穰穹穽窈窗窕窘窖窩竈窰窶竅竄窿邃竇竊竍竏竕竓站竚竝竡竢竦竭竰笂笏笊笆笳笘笙笞笵笨笶筐"
  	],
  	[
  		"e4a1",
  		"筺笄筍笋筌筅筵筥筴筧筰筱筬筮箝箘箟箍箜箚箋箒箏筝箙篋篁篌篏箴篆篝篩簑簔篦篥籠簀簇簓篳篷簗簍篶簣簧簪簟簷簫簽籌籃籔籏籀籐籘籟籤籖籥籬籵粃粐粤粭粢粫粡粨粳粲粱粮粹粽糀糅糂糘糒糜糢鬻糯糲糴糶糺紆"
  	],
  	[
  		"e5a1",
  		"紂紜紕紊絅絋紮紲紿紵絆絳絖絎絲絨絮絏絣經綉絛綏絽綛綺綮綣綵緇綽綫總綢綯緜綸綟綰緘緝緤緞緻緲緡縅縊縣縡縒縱縟縉縋縢繆繦縻縵縹繃縷縲縺繧繝繖繞繙繚繹繪繩繼繻纃緕繽辮繿纈纉續纒纐纓纔纖纎纛纜缸缺"
  	],
  	[
  		"e6a1",
  		"罅罌罍罎罐网罕罔罘罟罠罨罩罧罸羂羆羃羈羇羌羔羞羝羚羣羯羲羹羮羶羸譱翅翆翊翕翔翡翦翩翳翹飜耆耄耋耒耘耙耜耡耨耿耻聊聆聒聘聚聟聢聨聳聲聰聶聹聽聿肄肆肅肛肓肚肭冐肬胛胥胙胝胄胚胖脉胯胱脛脩脣脯腋"
  	],
  	[
  		"e7a1",
  		"隋腆脾腓腑胼腱腮腥腦腴膃膈膊膀膂膠膕膤膣腟膓膩膰膵膾膸膽臀臂膺臉臍臑臙臘臈臚臟臠臧臺臻臾舁舂舅與舊舍舐舖舩舫舸舳艀艙艘艝艚艟艤艢艨艪艫舮艱艷艸艾芍芒芫芟芻芬苡苣苟苒苴苳苺莓范苻苹苞茆苜茉苙"
  	],
  	[
  		"e8a1",
  		"茵茴茖茲茱荀茹荐荅茯茫茗茘莅莚莪莟莢莖茣莎莇莊荼莵荳荵莠莉莨菴萓菫菎菽萃菘萋菁菷萇菠菲萍萢萠莽萸蔆菻葭萪萼蕚蒄葷葫蒭葮蒂葩葆萬葯葹萵蓊葢蒹蒿蒟蓙蓍蒻蓚蓐蓁蓆蓖蒡蔡蓿蓴蔗蔘蔬蔟蔕蔔蓼蕀蕣蕘蕈"
  	],
  	[
  		"e9a1",
  		"蕁蘂蕋蕕薀薤薈薑薊薨蕭薔薛藪薇薜蕷蕾薐藉薺藏薹藐藕藝藥藜藹蘊蘓蘋藾藺蘆蘢蘚蘰蘿虍乕虔號虧虱蚓蚣蚩蚪蚋蚌蚶蚯蛄蛆蚰蛉蠣蚫蛔蛞蛩蛬蛟蛛蛯蜒蜆蜈蜀蜃蛻蜑蜉蜍蛹蜊蜴蜿蜷蜻蜥蜩蜚蝠蝟蝸蝌蝎蝴蝗蝨蝮蝙"
  	],
  	[
  		"eaa1",
  		"蝓蝣蝪蠅螢螟螂螯蟋螽蟀蟐雖螫蟄螳蟇蟆螻蟯蟲蟠蠏蠍蟾蟶蟷蠎蟒蠑蠖蠕蠢蠡蠱蠶蠹蠧蠻衄衂衒衙衞衢衫袁衾袞衵衽袵衲袂袗袒袮袙袢袍袤袰袿袱裃裄裔裘裙裝裹褂裼裴裨裲褄褌褊褓襃褞褥褪褫襁襄褻褶褸襌褝襠襞"
  	],
  	[
  		"eba1",
  		"襦襤襭襪襯襴襷襾覃覈覊覓覘覡覩覦覬覯覲覺覽覿觀觚觜觝觧觴觸訃訖訐訌訛訝訥訶詁詛詒詆詈詼詭詬詢誅誂誄誨誡誑誥誦誚誣諄諍諂諚諫諳諧諤諱謔諠諢諷諞諛謌謇謚諡謖謐謗謠謳鞫謦謫謾謨譁譌譏譎證譖譛譚譫"
  	],
  	[
  		"eca1",
  		"譟譬譯譴譽讀讌讎讒讓讖讙讚谺豁谿豈豌豎豐豕豢豬豸豺貂貉貅貊貍貎貔豼貘戝貭貪貽貲貳貮貶賈賁賤賣賚賽賺賻贄贅贊贇贏贍贐齎贓賍贔贖赧赭赱赳趁趙跂趾趺跏跚跖跌跛跋跪跫跟跣跼踈踉跿踝踞踐踟蹂踵踰踴蹊"
  	],
  	[
  		"eda1",
  		"蹇蹉蹌蹐蹈蹙蹤蹠踪蹣蹕蹶蹲蹼躁躇躅躄躋躊躓躑躔躙躪躡躬躰軆躱躾軅軈軋軛軣軼軻軫軾輊輅輕輒輙輓輜輟輛輌輦輳輻輹轅轂輾轌轉轆轎轗轜轢轣轤辜辟辣辭辯辷迚迥迢迪迯邇迴逅迹迺逑逕逡逍逞逖逋逧逶逵逹迸"
  	],
  	[
  		"eea1",
  		"遏遐遑遒逎遉逾遖遘遞遨遯遶隨遲邂遽邁邀邊邉邏邨邯邱邵郢郤扈郛鄂鄒鄙鄲鄰酊酖酘酣酥酩酳酲醋醉醂醢醫醯醪醵醴醺釀釁釉釋釐釖釟釡釛釼釵釶鈞釿鈔鈬鈕鈑鉞鉗鉅鉉鉤鉈銕鈿鉋鉐銜銖銓銛鉚鋏銹銷鋩錏鋺鍄錮"
  	],
  	[
  		"efa1",
  		"錙錢錚錣錺錵錻鍜鍠鍼鍮鍖鎰鎬鎭鎔鎹鏖鏗鏨鏥鏘鏃鏝鏐鏈鏤鐚鐔鐓鐃鐇鐐鐶鐫鐵鐡鐺鑁鑒鑄鑛鑠鑢鑞鑪鈩鑰鑵鑷鑽鑚鑼鑾钁鑿閂閇閊閔閖閘閙閠閨閧閭閼閻閹閾闊濶闃闍闌闕闔闖關闡闥闢阡阨阮阯陂陌陏陋陷陜陞"
  	],
  	[
  		"f0a1",
  		"陝陟陦陲陬隍隘隕隗險隧隱隲隰隴隶隸隹雎雋雉雍襍雜霍雕雹霄霆霈霓霎霑霏霖霙霤霪霰霹霽霾靄靆靈靂靉靜靠靤靦靨勒靫靱靹鞅靼鞁靺鞆鞋鞏鞐鞜鞨鞦鞣鞳鞴韃韆韈韋韜韭齏韲竟韶韵頏頌頸頤頡頷頽顆顏顋顫顯顰"
  	],
  	[
  		"f1a1",
  		"顱顴顳颪颯颱颶飄飃飆飩飫餃餉餒餔餘餡餝餞餤餠餬餮餽餾饂饉饅饐饋饑饒饌饕馗馘馥馭馮馼駟駛駝駘駑駭駮駱駲駻駸騁騏騅駢騙騫騷驅驂驀驃騾驕驍驛驗驟驢驥驤驩驫驪骭骰骼髀髏髑髓體髞髟髢髣髦髯髫髮髴髱髷"
  	],
  	[
  		"f2a1",
  		"髻鬆鬘鬚鬟鬢鬣鬥鬧鬨鬩鬪鬮鬯鬲魄魃魏魍魎魑魘魴鮓鮃鮑鮖鮗鮟鮠鮨鮴鯀鯊鮹鯆鯏鯑鯒鯣鯢鯤鯔鯡鰺鯲鯱鯰鰕鰔鰉鰓鰌鰆鰈鰒鰊鰄鰮鰛鰥鰤鰡鰰鱇鰲鱆鰾鱚鱠鱧鱶鱸鳧鳬鳰鴉鴈鳫鴃鴆鴪鴦鶯鴣鴟鵄鴕鴒鵁鴿鴾鵆鵈"
  	],
  	[
  		"f3a1",
  		"鵝鵞鵤鵑鵐鵙鵲鶉鶇鶫鵯鵺鶚鶤鶩鶲鷄鷁鶻鶸鶺鷆鷏鷂鷙鷓鷸鷦鷭鷯鷽鸚鸛鸞鹵鹹鹽麁麈麋麌麒麕麑麝麥麩麸麪麭靡黌黎黏黐黔黜點黝黠黥黨黯黴黶黷黹黻黼黽鼇鼈皷鼕鼡鼬鼾齊齒齔齣齟齠齡齦齧齬齪齷齲齶龕龜龠"
  	],
  	[
  		"f4a1",
  		"堯槇遙瑤凜熙"
  	],
  	[
  		"f9a1",
  		"纊褜鍈銈蓜俉炻昱棈鋹曻彅丨仡仼伀伃伹佖侒侊侚侔俍偀倢俿倞偆偰偂傔僴僘兊兤冝冾凬刕劜劦勀勛匀匇匤卲厓厲叝﨎咜咊咩哿喆坙坥垬埈埇﨏塚增墲夋奓奛奝奣妤妺孖寀甯寘寬尞岦岺峵崧嵓﨑嵂嵭嶸嶹巐弡弴彧德"
  	],
  	[
  		"faa1",
  		"忞恝悅悊惞惕愠惲愑愷愰憘戓抦揵摠撝擎敎昀昕昻昉昮昞昤晥晗晙晴晳暙暠暲暿曺朎朗杦枻桒柀栁桄棏﨓楨﨔榘槢樰橫橆橳橾櫢櫤毖氿汜沆汯泚洄涇浯涖涬淏淸淲淼渹湜渧渼溿澈澵濵瀅瀇瀨炅炫焏焄煜煆煇凞燁燾犱"
  	],
  	[
  		"fba1",
  		"犾猤猪獷玽珉珖珣珒琇珵琦琪琩琮瑢璉璟甁畯皂皜皞皛皦益睆劯砡硎硤硺礰礼神祥禔福禛竑竧靖竫箞精絈絜綷綠緖繒罇羡羽茁荢荿菇菶葈蒴蕓蕙蕫﨟薰蘒﨡蠇裵訒訷詹誧誾諟諸諶譓譿賰賴贒赶﨣軏﨤逸遧郞都鄕鄧釚"
  	],
  	[
  		"fca1",
  		"釗釞釭釮釤釥鈆鈐鈊鈺鉀鈼鉎鉙鉑鈹鉧銧鉷鉸鋧鋗鋙鋐﨧鋕鋠鋓錥錡鋻﨨錞鋿錝錂鍰鍗鎤鏆鏞鏸鐱鑅鑈閒隆﨩隝隯霳霻靃靍靏靑靕顗顥飯飼餧館馞驎髙髜魵魲鮏鮱鮻鰀鵰鵫鶴鸙黑"
  	],
  	[
  		"fcf1",
  		"ⅰ",
  		9,
  		"￢￤＇＂"
  	],
  	[
  		"8fa2af",
  		"˘ˇ¸˙˝¯˛˚～΄΅"
  	],
  	[
  		"8fa2c2",
  		"¡¦¿"
  	],
  	[
  		"8fa2eb",
  		"ºª©®™¤№"
  	],
  	[
  		"8fa6e1",
  		"ΆΈΉΊΪ"
  	],
  	[
  		"8fa6e7",
  		"Ό"
  	],
  	[
  		"8fa6e9",
  		"ΎΫ"
  	],
  	[
  		"8fa6ec",
  		"Ώ"
  	],
  	[
  		"8fa6f1",
  		"άέήίϊΐόςύϋΰώ"
  	],
  	[
  		"8fa7c2",
  		"Ђ",
  		10,
  		"ЎЏ"
  	],
  	[
  		"8fa7f2",
  		"ђ",
  		10,
  		"ўџ"
  	],
  	[
  		"8fa9a1",
  		"ÆĐ"
  	],
  	[
  		"8fa9a4",
  		"Ħ"
  	],
  	[
  		"8fa9a6",
  		"Ĳ"
  	],
  	[
  		"8fa9a8",
  		"ŁĿ"
  	],
  	[
  		"8fa9ab",
  		"ŊØŒ"
  	],
  	[
  		"8fa9af",
  		"ŦÞ"
  	],
  	[
  		"8fa9c1",
  		"æđðħıĳĸłŀŉŋøœßŧþ"
  	],
  	[
  		"8faaa1",
  		"ÁÀÄÂĂǍĀĄÅÃĆĈČÇĊĎÉÈËÊĚĖĒĘ"
  	],
  	[
  		"8faaba",
  		"ĜĞĢĠĤÍÌÏÎǏİĪĮĨĴĶĹĽĻŃŇŅÑÓÒÖÔǑŐŌÕŔŘŖŚŜŠŞŤŢÚÙÜÛŬǓŰŪŲŮŨǗǛǙǕŴÝŸŶŹŽŻ"
  	],
  	[
  		"8faba1",
  		"áàäâăǎāąåãćĉčçċďéèëêěėēęǵĝğ"
  	],
  	[
  		"8fabbd",
  		"ġĥíìïîǐ"
  	],
  	[
  		"8fabc5",
  		"īįĩĵķĺľļńňņñóòöôǒőōõŕřŗśŝšşťţúùüûŭǔűūųůũǘǜǚǖŵýÿŷźžż"
  	],
  	[
  		"8fb0a1",
  		"丂丄丅丌丒丟丣两丨丫丮丯丰丵乀乁乄乇乑乚乜乣乨乩乴乵乹乿亍亖亗亝亯亹仃仐仚仛仠仡仢仨仯仱仳仵份仾仿伀伂伃伈伋伌伒伕伖众伙伮伱你伳伵伷伹伻伾佀佂佈佉佋佌佒佔佖佘佟佣佪佬佮佱佷佸佹佺佽佾侁侂侄"
  	],
  	[
  		"8fb1a1",
  		"侅侉侊侌侎侐侒侓侔侗侙侚侞侟侲侷侹侻侼侽侾俀俁俅俆俈俉俋俌俍俏俒俜俠俢俰俲俼俽俿倀倁倄倇倊倌倎倐倓倗倘倛倜倝倞倢倧倮倰倲倳倵偀偁偂偅偆偊偌偎偑偒偓偗偙偟偠偢偣偦偧偪偭偰偱倻傁傃傄傆傊傎傏傐"
  	],
  	[
  		"8fb2a1",
  		"傒傓傔傖傛傜傞",
  		4,
  		"傪傯傰傹傺傽僀僃僄僇僌僎僐僓僔僘僜僝僟僢僤僦僨僩僯僱僶僺僾儃儆儇儈儋儌儍儎僲儐儗儙儛儜儝儞儣儧儨儬儭儯儱儳儴儵儸儹兂兊兏兓兕兗兘兟兤兦兾冃冄冋冎冘冝冡冣冭冸冺冼冾冿凂"
  	],
  	[
  		"8fb3a1",
  		"凈减凑凒凓凕凘凞凢凥凮凲凳凴凷刁刂刅划刓刕刖刘刢刨刱刲刵刼剅剉剕剗剘剚剜剟剠剡剦剮剷剸剹劀劂劅劊劌劓劕劖劗劘劚劜劤劥劦劧劯劰劶劷劸劺劻劽勀勄勆勈勌勏勑勔勖勛勜勡勥勨勩勪勬勰勱勴勶勷匀匃匊匋"
  	],
  	[
  		"8fb4a1",
  		"匌匑匓匘匛匜匞匟匥匧匨匩匫匬匭匰匲匵匼匽匾卂卌卋卙卛卡卣卥卬卭卲卹卾厃厇厈厎厓厔厙厝厡厤厪厫厯厲厴厵厷厸厺厽叀叅叏叒叓叕叚叝叞叠另叧叵吂吓吚吡吧吨吪启吱吴吵呃呄呇呍呏呞呢呤呦呧呩呫呭呮呴呿"
  	],
  	[
  		"8fb5a1",
  		"咁咃咅咈咉咍咑咕咖咜咟咡咦咧咩咪咭咮咱咷咹咺咻咿哆哊响哎哠哪哬哯哶哼哾哿唀唁唅唈唉唌唍唎唕唪唫唲唵唶唻唼唽啁啇啉啊啍啐啑啘啚啛啞啠啡啤啦啿喁喂喆喈喎喏喑喒喓喔喗喣喤喭喲喿嗁嗃嗆嗉嗋嗌嗎嗑嗒"
  	],
  	[
  		"8fb6a1",
  		"嗓嗗嗘嗛嗞嗢嗩嗶嗿嘅嘈嘊嘍",
  		5,
  		"嘙嘬嘰嘳嘵嘷嘹嘻嘼嘽嘿噀噁噃噄噆噉噋噍噏噔噞噠噡噢噣噦噩噭噯噱噲噵嚄嚅嚈嚋嚌嚕嚙嚚嚝嚞嚟嚦嚧嚨嚩嚫嚬嚭嚱嚳嚷嚾囅囉囊囋囏囐囌囍囙囜囝囟囡囤",
  		4,
  		"囱囫园"
  	],
  	[
  		"8fb7a1",
  		"囶囷圁圂圇圊圌圑圕圚圛圝圠圢圣圤圥圩圪圬圮圯圳圴圽圾圿坅坆坌坍坒坢坥坧坨坫坭",
  		4,
  		"坳坴坵坷坹坺坻坼坾垁垃垌垔垗垙垚垜垝垞垟垡垕垧垨垩垬垸垽埇埈埌埏埕埝埞埤埦埧埩埭埰埵埶埸埽埾埿堃堄堈堉埡"
  	],
  	[
  		"8fb8a1",
  		"堌堍堛堞堟堠堦堧堭堲堹堿塉塌塍塏塐塕塟塡塤塧塨塸塼塿墀墁墇墈墉墊墌墍墏墐墔墖墝墠墡墢墦墩墱墲壄墼壂壈壍壎壐壒壔壖壚壝壡壢壩壳夅夆夋夌夒夓夔虁夝夡夣夤夨夯夰夳夵夶夿奃奆奒奓奙奛奝奞奟奡奣奫奭"
  	],
  	[
  		"8fb9a1",
  		"奯奲奵奶她奻奼妋妌妎妒妕妗妟妤妧妭妮妯妰妳妷妺妼姁姃姄姈姊姍姒姝姞姟姣姤姧姮姯姱姲姴姷娀娄娌娍娎娒娓娞娣娤娧娨娪娭娰婄婅婇婈婌婐婕婞婣婥婧婭婷婺婻婾媋媐媓媖媙媜媞媟媠媢媧媬媱媲媳媵媸媺媻媿"
  	],
  	[
  		"8fbaa1",
  		"嫄嫆嫈嫏嫚嫜嫠嫥嫪嫮嫵嫶嫽嬀嬁嬈嬗嬴嬙嬛嬝嬡嬥嬭嬸孁孋孌孒孖孞孨孮孯孼孽孾孿宁宄宆宊宎宐宑宓宔宖宨宩宬宭宯宱宲宷宺宼寀寁寍寏寖",
  		4,
  		"寠寯寱寴寽尌尗尞尟尣尦尩尫尬尮尰尲尵尶屙屚屜屢屣屧屨屩"
  	],
  	[
  		"8fbba1",
  		"屭屰屴屵屺屻屼屽岇岈岊岏岒岝岟岠岢岣岦岪岲岴岵岺峉峋峒峝峗峮峱峲峴崁崆崍崒崫崣崤崦崧崱崴崹崽崿嵂嵃嵆嵈嵕嵑嵙嵊嵟嵠嵡嵢嵤嵪嵭嵰嵹嵺嵾嵿嶁嶃嶈嶊嶒嶓嶔嶕嶙嶛嶟嶠嶧嶫嶰嶴嶸嶹巃巇巋巐巎巘巙巠巤"
  	],
  	[
  		"8fbca1",
  		"巩巸巹帀帇帍帒帔帕帘帟帠帮帨帲帵帾幋幐幉幑幖幘幛幜幞幨幪",
  		4,
  		"幰庀庋庎庢庤庥庨庪庬庱庳庽庾庿廆廌廋廎廑廒廔廕廜廞廥廫异弆弇弈弎弙弜弝弡弢弣弤弨弫弬弮弰弴弶弻弽弿彀彄彅彇彍彐彔彘彛彠彣彤彧"
  	],
  	[
  		"8fbda1",
  		"彯彲彴彵彸彺彽彾徉徍徏徖徜徝徢徧徫徤徬徯徰徱徸忄忇忈忉忋忐",
  		4,
  		"忞忡忢忨忩忪忬忭忮忯忲忳忶忺忼怇怊怍怓怔怗怘怚怟怤怭怳怵恀恇恈恉恌恑恔恖恗恝恡恧恱恾恿悂悆悈悊悎悑悓悕悘悝悞悢悤悥您悰悱悷"
  	],
  	[
  		"8fbea1",
  		"悻悾惂惄惈惉惊惋惎惏惔惕惙惛惝惞惢惥惲惵惸惼惽愂愇愊愌愐",
  		4,
  		"愖愗愙愜愞愢愪愫愰愱愵愶愷愹慁慅慆慉慞慠慬慲慸慻慼慿憀憁憃憄憋憍憒憓憗憘憜憝憟憠憥憨憪憭憸憹憼懀懁懂懎懏懕懜懝懞懟懡懢懧懩懥"
  	],
  	[
  		"8fbfa1",
  		"懬懭懯戁戃戄戇戓戕戜戠戢戣戧戩戫戹戽扂扃扄扆扌扐扑扒扔扖扚扜扤扭扯扳扺扽抍抎抏抐抦抨抳抶抷抺抾抿拄拎拕拖拚拪拲拴拼拽挃挄挊挋挍挐挓挖挘挩挪挭挵挶挹挼捁捂捃捄捆捊捋捎捒捓捔捘捛捥捦捬捭捱捴捵"
  	],
  	[
  		"8fc0a1",
  		"捸捼捽捿掂掄掇掊掐掔掕掙掚掞掤掦掭掮掯掽揁揅揈揎揑揓揔揕揜揠揥揪揬揲揳揵揸揹搉搊搐搒搔搘搞搠搢搤搥搩搪搯搰搵搽搿摋摏摑摒摓摔摚摛摜摝摟摠摡摣摭摳摴摻摽撅撇撏撐撑撘撙撛撝撟撡撣撦撨撬撳撽撾撿"
  	],
  	[
  		"8fc1a1",
  		"擄擉擊擋擌擎擐擑擕擗擤擥擩擪擭擰擵擷擻擿攁攄攈攉攊攏攓攔攖攙攛攞攟攢攦攩攮攱攺攼攽敃敇敉敐敒敔敟敠敧敫敺敽斁斅斊斒斕斘斝斠斣斦斮斲斳斴斿旂旈旉旎旐旔旖旘旟旰旲旴旵旹旾旿昀昄昈昉昍昑昒昕昖昝"
  	],
  	[
  		"8fc2a1",
  		"昞昡昢昣昤昦昩昪昫昬昮昰昱昳昹昷晀晅晆晊晌晑晎晗晘晙晛晜晠晡曻晪晫晬晾晳晵晿晷晸晹晻暀晼暋暌暍暐暒暙暚暛暜暟暠暤暭暱暲暵暻暿曀曂曃曈曌曎曏曔曛曟曨曫曬曮曺朅朇朎朓朙朜朠朢朳朾杅杇杈杌杔杕杝"
  	],
  	[
  		"8fc3a1",
  		"杦杬杮杴杶杻极构枎枏枑枓枖枘枙枛枰枱枲枵枻枼枽柹柀柂柃柅柈柉柒柗柙柜柡柦柰柲柶柷桒栔栙栝栟栨栧栬栭栯栰栱栳栻栿桄桅桊桌桕桗桘桛桫桮",
  		4,
  		"桵桹桺桻桼梂梄梆梈梖梘梚梜梡梣梥梩梪梮梲梻棅棈棌棏"
  	],
  	[
  		"8fc4a1",
  		"棐棑棓棖棙棜棝棥棨棪棫棬棭棰棱棵棶棻棼棽椆椉椊椐椑椓椖椗椱椳椵椸椻楂楅楉楎楗楛楣楤楥楦楨楩楬楰楱楲楺楻楿榀榍榒榖榘榡榥榦榨榫榭榯榷榸榺榼槅槈槑槖槗槢槥槮槯槱槳槵槾樀樁樃樏樑樕樚樝樠樤樨樰樲"
  	],
  	[
  		"8fc5a1",
  		"樴樷樻樾樿橅橆橉橊橎橐橑橒橕橖橛橤橧橪橱橳橾檁檃檆檇檉檋檑檛檝檞檟檥檫檯檰檱檴檽檾檿櫆櫉櫈櫌櫐櫔櫕櫖櫜櫝櫤櫧櫬櫰櫱櫲櫼櫽欂欃欆欇欉欏欐欑欗欛欞欤欨欫欬欯欵欶欻欿歆歊歍歒歖歘歝歠歧歫歮歰歵歽"
  	],
  	[
  		"8fc6a1",
  		"歾殂殅殗殛殟殠殢殣殨殩殬殭殮殰殸殹殽殾毃毄毉毌毖毚毡毣毦毧毮毱毷毹毿氂氄氅氉氍氎氐氒氙氟氦氧氨氬氮氳氵氶氺氻氿汊汋汍汏汒汔汙汛汜汫汭汯汴汶汸汹汻沅沆沇沉沔沕沗沘沜沟沰沲沴泂泆泍泏泐泑泒泔泖"
  	],
  	[
  		"8fc7a1",
  		"泚泜泠泧泩泫泬泮泲泴洄洇洊洎洏洑洓洚洦洧洨汧洮洯洱洹洼洿浗浞浟浡浥浧浯浰浼涂涇涑涒涔涖涗涘涪涬涴涷涹涽涿淄淈淊淎淏淖淛淝淟淠淢淥淩淯淰淴淶淼渀渄渞渢渧渲渶渹渻渼湄湅湈湉湋湏湑湒湓湔湗湜湝湞"
  	],
  	[
  		"8fc8a1",
  		"湢湣湨湳湻湽溍溓溙溠溧溭溮溱溳溻溿滀滁滃滇滈滊滍滎滏滫滭滮滹滻滽漄漈漊漌漍漖漘漚漛漦漩漪漯漰漳漶漻漼漭潏潑潒潓潗潙潚潝潞潡潢潨潬潽潾澃澇澈澋澌澍澐澒澓澔澖澚澟澠澥澦澧澨澮澯澰澵澶澼濅濇濈濊"
  	],
  	[
  		"8fc9a1",
  		"濚濞濨濩濰濵濹濼濽瀀瀅瀆瀇瀍瀗瀠瀣瀯瀴瀷瀹瀼灃灄灈灉灊灋灔灕灝灞灎灤灥灬灮灵灶灾炁炅炆炔",
  		4,
  		"炛炤炫炰炱炴炷烊烑烓烔烕烖烘烜烤烺焃",
  		4,
  		"焋焌焏焞焠焫焭焯焰焱焸煁煅煆煇煊煋煐煒煗煚煜煞煠"
  	],
  	[
  		"8fcaa1",
  		"煨煹熀熅熇熌熒熚熛熠熢熯熰熲熳熺熿燀燁燄燋燌燓燖燙燚燜燸燾爀爇爈爉爓爗爚爝爟爤爫爯爴爸爹牁牂牃牅牎牏牐牓牕牖牚牜牞牠牣牨牫牮牯牱牷牸牻牼牿犄犉犍犎犓犛犨犭犮犱犴犾狁狇狉狌狕狖狘狟狥狳狴狺狻"
  	],
  	[
  		"8fcba1",
  		"狾猂猄猅猇猋猍猒猓猘猙猞猢猤猧猨猬猱猲猵猺猻猽獃獍獐獒獖獘獝獞獟獠獦獧獩獫獬獮獯獱獷獹獼玀玁玃玅玆玎玐玓玕玗玘玜玞玟玠玢玥玦玪玫玭玵玷玹玼玽玿珅珆珉珋珌珏珒珓珖珙珝珡珣珦珧珩珴珵珷珹珺珻珽"
  	],
  	[
  		"8fcca1",
  		"珿琀琁琄琇琊琑琚琛琤琦琨",
  		9,
  		"琹瑀瑃瑄瑆瑇瑋瑍瑑瑒瑗瑝瑢瑦瑧瑨瑫瑭瑮瑱瑲璀璁璅璆璇璉璏璐璑璒璘璙璚璜璟璠璡璣璦璨璩璪璫璮璯璱璲璵璹璻璿瓈瓉瓌瓐瓓瓘瓚瓛瓞瓟瓤瓨瓪瓫瓯瓴瓺瓻瓼瓿甆"
  	],
  	[
  		"8fcda1",
  		"甒甖甗甠甡甤甧甩甪甯甶甹甽甾甿畀畃畇畈畎畐畒畗畞畟畡畯畱畹",
  		5,
  		"疁疅疐疒疓疕疙疜疢疤疴疺疿痀痁痄痆痌痎痏痗痜痟痠痡痤痧痬痮痯痱痹瘀瘂瘃瘄瘇瘈瘊瘌瘏瘒瘓瘕瘖瘙瘛瘜瘝瘞瘣瘥瘦瘩瘭瘲瘳瘵瘸瘹"
  	],
  	[
  		"8fcea1",
  		"瘺瘼癊癀癁癃癄癅癉癋癕癙癟癤癥癭癮癯癱癴皁皅皌皍皕皛皜皝皟皠皢",
  		6,
  		"皪皭皽盁盅盉盋盌盎盔盙盠盦盨盬盰盱盶盹盼眀眆眊眎眒眔眕眗眙眚眜眢眨眭眮眯眴眵眶眹眽眾睂睅睆睊睍睎睏睒睖睗睜睞睟睠睢"
  	],
  	[
  		"8fcfa1",
  		"睤睧睪睬睰睲睳睴睺睽瞀瞄瞌瞍瞔瞕瞖瞚瞟瞢瞧瞪瞮瞯瞱瞵瞾矃矉矑矒矕矙矞矟矠矤矦矪矬矰矱矴矸矻砅砆砉砍砎砑砝砡砢砣砭砮砰砵砷硃硄硇硈硌硎硒硜硞硠硡硣硤硨硪确硺硾碊碏碔碘碡碝碞碟碤碨碬碭碰碱碲碳"
  	],
  	[
  		"8fd0a1",
  		"碻碽碿磇磈磉磌磎磒磓磕磖磤磛磟磠磡磦磪磲磳礀磶磷磺磻磿礆礌礐礚礜礞礟礠礥礧礩礭礱礴礵礻礽礿祄祅祆祊祋祏祑祔祘祛祜祧祩祫祲祹祻祼祾禋禌禑禓禔禕禖禘禛禜禡禨禩禫禯禱禴禸离秂秄秇秈秊秏秔秖秚秝秞"
  	],
  	[
  		"8fd1a1",
  		"秠秢秥秪秫秭秱秸秼稂稃稇稉稊稌稑稕稛稞稡稧稫稭稯稰稴稵稸稹稺穄穅穇穈穌穕穖穙穜穝穟穠穥穧穪穭穵穸穾窀窂窅窆窊窋窐窑窔窞窠窣窬窳窵窹窻窼竆竉竌竎竑竛竨竩竫竬竱竴竻竽竾笇笔笟笣笧笩笪笫笭笮笯笰"
  	],
  	[
  		"8fd2a1",
  		"笱笴笽笿筀筁筇筎筕筠筤筦筩筪筭筯筲筳筷箄箉箎箐箑箖箛箞箠箥箬箯箰箲箵箶箺箻箼箽篂篅篈篊篔篖篗篙篚篛篨篪篲篴篵篸篹篺篼篾簁簂簃簄簆簉簋簌簎簏簙簛簠簥簦簨簬簱簳簴簶簹簺籆籊籕籑籒籓籙",
  		5
  	],
  	[
  		"8fd3a1",
  		"籡籣籧籩籭籮籰籲籹籼籽粆粇粏粔粞粠粦粰粶粷粺粻粼粿糄糇糈糉糍糏糓糔糕糗糙糚糝糦糩糫糵紃紇紈紉紏紑紒紓紖紝紞紣紦紪紭紱紼紽紾絀絁絇絈絍絑絓絗絙絚絜絝絥絧絪絰絸絺絻絿綁綂綃綅綆綈綋綌綍綑綖綗綝"
  	],
  	[
  		"8fd4a1",
  		"綞綦綧綪綳綶綷綹緂",
  		4,
  		"緌緍緎緗緙縀緢緥緦緪緫緭緱緵緶緹緺縈縐縑縕縗縜縝縠縧縨縬縭縯縳縶縿繄繅繇繎繐繒繘繟繡繢繥繫繮繯繳繸繾纁纆纇纊纍纑纕纘纚纝纞缼缻缽缾缿罃罄罇罏罒罓罛罜罝罡罣罤罥罦罭"
  	],
  	[
  		"8fd5a1",
  		"罱罽罾罿羀羋羍羏羐羑羖羗羜羡羢羦羪羭羴羼羿翀翃翈翎翏翛翟翣翥翨翬翮翯翲翺翽翾翿耇耈耊耍耎耏耑耓耔耖耝耞耟耠耤耦耬耮耰耴耵耷耹耺耼耾聀聄聠聤聦聭聱聵肁肈肎肜肞肦肧肫肸肹胈胍胏胒胔胕胗胘胠胭胮"
  	],
  	[
  		"8fd6a1",
  		"胰胲胳胶胹胺胾脃脋脖脗脘脜脞脠脤脧脬脰脵脺脼腅腇腊腌腒腗腠腡腧腨腩腭腯腷膁膐膄膅膆膋膎膖膘膛膞膢膮膲膴膻臋臃臅臊臎臏臕臗臛臝臞臡臤臫臬臰臱臲臵臶臸臹臽臿舀舃舏舓舔舙舚舝舡舢舨舲舴舺艃艄艅艆"
  	],
  	[
  		"8fd7a1",
  		"艋艎艏艑艖艜艠艣艧艭艴艻艽艿芀芁芃芄芇芉芊芎芑芔芖芘芚芛芠芡芣芤芧芨芩芪芮芰芲芴芷芺芼芾芿苆苐苕苚苠苢苤苨苪苭苯苶苷苽苾茀茁茇茈茊茋荔茛茝茞茟茡茢茬茭茮茰茳茷茺茼茽荂荃荄荇荍荎荑荕荖荗荰荸"
  	],
  	[
  		"8fd8a1",
  		"荽荿莀莂莄莆莍莒莔莕莘莙莛莜莝莦莧莩莬莾莿菀菇菉菏菐菑菔菝荓菨菪菶菸菹菼萁萆萊萏萑萕萙莭萯萹葅葇葈葊葍葏葑葒葖葘葙葚葜葠葤葥葧葪葰葳葴葶葸葼葽蒁蒅蒒蒓蒕蒞蒦蒨蒩蒪蒯蒱蒴蒺蒽蒾蓀蓂蓇蓈蓌蓏蓓"
  	],
  	[
  		"8fd9a1",
  		"蓜蓧蓪蓯蓰蓱蓲蓷蔲蓺蓻蓽蔂蔃蔇蔌蔎蔐蔜蔞蔢蔣蔤蔥蔧蔪蔫蔯蔳蔴蔶蔿蕆蕏",
  		4,
  		"蕖蕙蕜",
  		6,
  		"蕤蕫蕯蕹蕺蕻蕽蕿薁薅薆薉薋薌薏薓薘薝薟薠薢薥薧薴薶薷薸薼薽薾薿藂藇藊藋藎薭藘藚藟藠藦藨藭藳藶藼"
  	],
  	[
  		"8fdaa1",
  		"藿蘀蘄蘅蘍蘎蘐蘑蘒蘘蘙蘛蘞蘡蘧蘩蘶蘸蘺蘼蘽虀虂虆虒虓虖虗虘虙虝虠",
  		4,
  		"虩虬虯虵虶虷虺蚍蚑蚖蚘蚚蚜蚡蚦蚧蚨蚭蚱蚳蚴蚵蚷蚸蚹蚿蛀蛁蛃蛅蛑蛒蛕蛗蛚蛜蛠蛣蛥蛧蚈蛺蛼蛽蜄蜅蜇蜋蜎蜏蜐蜓蜔蜙蜞蜟蜡蜣"
  	],
  	[
  		"8fdba1",
  		"蜨蜮蜯蜱蜲蜹蜺蜼蜽蜾蝀蝃蝅蝍蝘蝝蝡蝤蝥蝯蝱蝲蝻螃",
  		6,
  		"螋螌螐螓螕螗螘螙螞螠螣螧螬螭螮螱螵螾螿蟁蟈蟉蟊蟎蟕蟖蟙蟚蟜蟟蟢蟣蟤蟪蟫蟭蟱蟳蟸蟺蟿蠁蠃蠆蠉蠊蠋蠐蠙蠒蠓蠔蠘蠚蠛蠜蠞蠟蠨蠭蠮蠰蠲蠵"
  	],
  	[
  		"8fdca1",
  		"蠺蠼衁衃衅衈衉衊衋衎衑衕衖衘衚衜衟衠衤衩衱衹衻袀袘袚袛袜袟袠袨袪袺袽袾裀裊",
  		4,
  		"裑裒裓裛裞裧裯裰裱裵裷褁褆褍褎褏褕褖褘褙褚褜褠褦褧褨褰褱褲褵褹褺褾襀襂襅襆襉襏襒襗襚襛襜襡襢襣襫襮襰襳襵襺"
  	],
  	[
  		"8fdda1",
  		"襻襼襽覉覍覐覔覕覛覜覟覠覥覰覴覵覶覷覼觔",
  		4,
  		"觥觩觫觭觱觳觶觹觽觿訄訅訇訏訑訒訔訕訞訠訢訤訦訫訬訯訵訷訽訾詀詃詅詇詉詍詎詓詖詗詘詜詝詡詥詧詵詶詷詹詺詻詾詿誀誃誆誋誏誐誒誖誗誙誟誧誩誮誯誳"
  	],
  	[
  		"8fdea1",
  		"誶誷誻誾諃諆諈諉諊諑諓諔諕諗諝諟諬諰諴諵諶諼諿謅謆謋謑謜謞謟謊謭謰謷謼譂",
  		4,
  		"譈譒譓譔譙譍譞譣譭譶譸譹譼譾讁讄讅讋讍讏讔讕讜讞讟谸谹谽谾豅豇豉豋豏豑豓豔豗豘豛豝豙豣豤豦豨豩豭豳豵豶豻豾貆"
  	],
  	[
  		"8fdfa1",
  		"貇貋貐貒貓貙貛貜貤貹貺賅賆賉賋賏賖賕賙賝賡賨賬賯賰賲賵賷賸賾賿贁贃贉贒贗贛赥赩赬赮赿趂趄趈趍趐趑趕趞趟趠趦趫趬趯趲趵趷趹趻跀跅跆跇跈跊跎跑跔跕跗跙跤跥跧跬跰趼跱跲跴跽踁踄踅踆踋踑踔踖踠踡踢"
  	],
  	[
  		"8fe0a1",
  		"踣踦踧踱踳踶踷踸踹踽蹀蹁蹋蹍蹎蹏蹔蹛蹜蹝蹞蹡蹢蹩蹬蹭蹯蹰蹱蹹蹺蹻躂躃躉躐躒躕躚躛躝躞躢躧躩躭躮躳躵躺躻軀軁軃軄軇軏軑軔軜軨軮軰軱軷軹軺軭輀輂輇輈輏輐輖輗輘輞輠輡輣輥輧輨輬輭輮輴輵輶輷輺轀轁"
  	],
  	[
  		"8fe1a1",
  		"轃轇轏轑",
  		4,
  		"轘轝轞轥辝辠辡辤辥辦辵辶辸达迀迁迆迊迋迍运迒迓迕迠迣迤迨迮迱迵迶迻迾适逄逈逌逘逛逨逩逯逪逬逭逳逴逷逿遃遄遌遛遝遢遦遧遬遰遴遹邅邈邋邌邎邐邕邗邘邙邛邠邡邢邥邰邲邳邴邶邽郌邾郃"
  	],
  	[
  		"8fe2a1",
  		"郄郅郇郈郕郗郘郙郜郝郟郥郒郶郫郯郰郴郾郿鄀鄄鄅鄆鄈鄍鄐鄔鄖鄗鄘鄚鄜鄞鄠鄥鄢鄣鄧鄩鄮鄯鄱鄴鄶鄷鄹鄺鄼鄽酃酇酈酏酓酗酙酚酛酡酤酧酭酴酹酺酻醁醃醅醆醊醎醑醓醔醕醘醞醡醦醨醬醭醮醰醱醲醳醶醻醼醽醿"
  	],
  	[
  		"8fe3a1",
  		"釂釃釅釓釔釗釙釚釞釤釥釩釪釬",
  		5,
  		"釷釹釻釽鈀鈁鈄鈅鈆鈇鈉鈊鈌鈐鈒鈓鈖鈘鈜鈝鈣鈤鈥鈦鈨鈮鈯鈰鈳鈵鈶鈸鈹鈺鈼鈾鉀鉂鉃鉆鉇鉊鉍鉎鉏鉑鉘鉙鉜鉝鉠鉡鉥鉧鉨鉩鉮鉯鉰鉵",
  		4,
  		"鉻鉼鉽鉿銈銉銊銍銎銒銗"
  	],
  	[
  		"8fe4a1",
  		"銙銟銠銤銥銧銨銫銯銲銶銸銺銻銼銽銿",
  		4,
  		"鋅鋆鋇鋈鋋鋌鋍鋎鋐鋓鋕鋗鋘鋙鋜鋝鋟鋠鋡鋣鋥鋧鋨鋬鋮鋰鋹鋻鋿錀錂錈錍錑錔錕錜錝錞錟錡錤錥錧錩錪錳錴錶錷鍇鍈鍉鍐鍑鍒鍕鍗鍘鍚鍞鍤鍥鍧鍩鍪鍭鍯鍰鍱鍳鍴鍶"
  	],
  	[
  		"8fe5a1",
  		"鍺鍽鍿鎀鎁鎂鎈鎊鎋鎍鎏鎒鎕鎘鎛鎞鎡鎣鎤鎦鎨鎫鎴鎵鎶鎺鎩鏁鏄鏅鏆鏇鏉",
  		4,
  		"鏓鏙鏜鏞鏟鏢鏦鏧鏹鏷鏸鏺鏻鏽鐁鐂鐄鐈鐉鐍鐎鐏鐕鐖鐗鐟鐮鐯鐱鐲鐳鐴鐻鐿鐽鑃鑅鑈鑊鑌鑕鑙鑜鑟鑡鑣鑨鑫鑭鑮鑯鑱鑲钄钃镸镹"
  	],
  	[
  		"8fe6a1",
  		"镾閄閈閌閍閎閝閞閟閡閦閩閫閬閴閶閺閽閿闆闈闉闋闐闑闒闓闙闚闝闞闟闠闤闦阝阞阢阤阥阦阬阱阳阷阸阹阺阼阽陁陒陔陖陗陘陡陮陴陻陼陾陿隁隂隃隄隉隑隖隚隝隟隤隥隦隩隮隯隳隺雊雒嶲雘雚雝雞雟雩雯雱雺霂"
  	],
  	[
  		"8fe7a1",
  		"霃霅霉霚霛霝霡霢霣霨霱霳靁靃靊靎靏靕靗靘靚靛靣靧靪靮靳靶靷靸靻靽靿鞀鞉鞕鞖鞗鞙鞚鞞鞟鞢鞬鞮鞱鞲鞵鞶鞸鞹鞺鞼鞾鞿韁韄韅韇韉韊韌韍韎韐韑韔韗韘韙韝韞韠韛韡韤韯韱韴韷韸韺頇頊頙頍頎頔頖頜頞頠頣頦"
  	],
  	[
  		"8fe8a1",
  		"頫頮頯頰頲頳頵頥頾顄顇顊顑顒顓顖顗顙顚顢顣顥顦顪顬颫颭颮颰颴颷颸颺颻颿飂飅飈飌飡飣飥飦飧飪飳飶餂餇餈餑餕餖餗餚餛餜餟餢餦餧餫餱",
  		4,
  		"餹餺餻餼饀饁饆饇饈饍饎饔饘饙饛饜饞饟饠馛馝馟馦馰馱馲馵"
  	],
  	[
  		"8fe9a1",
  		"馹馺馽馿駃駉駓駔駙駚駜駞駧駪駫駬駰駴駵駹駽駾騂騃騄騋騌騐騑騖騞騠騢騣騤騧騭騮騳騵騶騸驇驁驄驊驋驌驎驑驔驖驝骪骬骮骯骲骴骵骶骹骻骾骿髁髃髆髈髎髐髒髕髖髗髛髜髠髤髥髧髩髬髲髳髵髹髺髽髿",
  		4
  	],
  	[
  		"8feaa1",
  		"鬄鬅鬈鬉鬋鬌鬍鬎鬐鬒鬖鬙鬛鬜鬠鬦鬫鬭鬳鬴鬵鬷鬹鬺鬽魈魋魌魕魖魗魛魞魡魣魥魦魨魪",
  		4,
  		"魳魵魷魸魹魿鮀鮄鮅鮆鮇鮉鮊鮋鮍鮏鮐鮔鮚鮝鮞鮦鮧鮩鮬鮰鮱鮲鮷鮸鮻鮼鮾鮿鯁鯇鯈鯎鯐鯗鯘鯝鯟鯥鯧鯪鯫鯯鯳鯷鯸"
  	],
  	[
  		"8feba1",
  		"鯹鯺鯽鯿鰀鰂鰋鰏鰑鰖鰘鰙鰚鰜鰞鰢鰣鰦",
  		4,
  		"鰱鰵鰶鰷鰽鱁鱃鱄鱅鱉鱊鱎鱏鱐鱓鱔鱖鱘鱛鱝鱞鱟鱣鱩鱪鱜鱫鱨鱮鱰鱲鱵鱷鱻鳦鳲鳷鳹鴋鴂鴑鴗鴘鴜鴝鴞鴯鴰鴲鴳鴴鴺鴼鵅鴽鵂鵃鵇鵊鵓鵔鵟鵣鵢鵥鵩鵪鵫鵰鵶鵷鵻"
  	],
  	[
  		"8feca1",
  		"鵼鵾鶃鶄鶆鶊鶍鶎鶒鶓鶕鶖鶗鶘鶡鶪鶬鶮鶱鶵鶹鶼鶿鷃鷇鷉鷊鷔鷕鷖鷗鷚鷞鷟鷠鷥鷧鷩鷫鷮鷰鷳鷴鷾鸊鸂鸇鸎鸐鸑鸒鸕鸖鸙鸜鸝鹺鹻鹼麀麂麃麄麅麇麎麏麖麘麛麞麤麨麬麮麯麰麳麴麵黆黈黋黕黟黤黧黬黭黮黰黱黲黵"
  	],
  	[
  		"8feda1",
  		"黸黿鼂鼃鼉鼏鼐鼑鼒鼔鼖鼗鼙鼚鼛鼟鼢鼦鼪鼫鼯鼱鼲鼴鼷鼹鼺鼼鼽鼿齁齃",
  		4,
  		"齓齕齖齗齘齚齝齞齨齩齭",
  		4,
  		"齳齵齺齽龏龐龑龒龔龖龗龞龡龢龣龥"
  	]
  ];

  var eucjp$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': eucjp
  });

  var cp936 = [
  	[
  		"0",
  		"\u0000",
  		127,
  		"€"
  	],
  	[
  		"8140",
  		"丂丄丅丆丏丒丗丟丠両丣並丩丮丯丱丳丵丷丼乀乁乂乄乆乊乑乕乗乚乛乢乣乤乥乧乨乪",
  		5,
  		"乲乴",
  		9,
  		"乿",
  		6,
  		"亇亊"
  	],
  	[
  		"8180",
  		"亐亖亗亙亜亝亞亣亪亯亰亱亴亶亷亸亹亼亽亾仈仌仏仐仒仚仛仜仠仢仦仧仩仭仮仯仱仴仸仹仺仼仾伀伂",
  		6,
  		"伋伌伒",
  		4,
  		"伜伝伡伣伨伩伬伭伮伱伳伵伷伹伻伾",
  		4,
  		"佄佅佇",
  		5,
  		"佒佔佖佡佢佦佨佪佫佭佮佱佲併佷佸佹佺佽侀侁侂侅來侇侊侌侎侐侒侓侕侖侘侙侚侜侞侟価侢"
  	],
  	[
  		"8240",
  		"侤侫侭侰",
  		4,
  		"侶",
  		8,
  		"俀俁係俆俇俈俉俋俌俍俒",
  		4,
  		"俙俛俠俢俤俥俧俫俬俰俲俴俵俶俷俹俻俼俽俿",
  		11
  	],
  	[
  		"8280",
  		"個倎倐們倓倕倖倗倛倝倞倠倢倣値倧倫倯",
  		10,
  		"倻倽倿偀偁偂偄偅偆偉偊偋偍偐",
  		4,
  		"偖偗偘偙偛偝",
  		7,
  		"偦",
  		5,
  		"偭",
  		8,
  		"偸偹偺偼偽傁傂傃傄傆傇傉傊傋傌傎",
  		20,
  		"傤傦傪傫傭",
  		4,
  		"傳",
  		6,
  		"傼"
  	],
  	[
  		"8340",
  		"傽",
  		17,
  		"僐",
  		5,
  		"僗僘僙僛",
  		10,
  		"僨僩僪僫僯僰僱僲僴僶",
  		4,
  		"僼",
  		9,
  		"儈"
  	],
  	[
  		"8380",
  		"儉儊儌",
  		5,
  		"儓",
  		13,
  		"儢",
  		28,
  		"兂兇兊兌兎兏児兒兓兗兘兙兛兝",
  		4,
  		"兣兤兦內兩兪兯兲兺兾兿冃冄円冇冊冋冎冏冐冑冓冔冘冚冝冞冟冡冣冦",
  		4,
  		"冭冮冴冸冹冺冾冿凁凂凃凅凈凊凍凎凐凒",
  		5
  	],
  	[
  		"8440",
  		"凘凙凚凜凞凟凢凣凥",
  		5,
  		"凬凮凱凲凴凷凾刄刅刉刋刌刏刐刓刔刕刜刞刟刡刢刣別刦刧刪刬刯刱刲刴刵刼刾剄",
  		5,
  		"剋剎剏剒剓剕剗剘"
  	],
  	[
  		"8480",
  		"剙剚剛剝剟剠剢剣剤剦剨剫剬剭剮剰剱剳",
  		9,
  		"剾劀劃",
  		4,
  		"劉",
  		6,
  		"劑劒劔",
  		6,
  		"劜劤劥劦劧劮劯劰労",
  		9,
  		"勀勁勂勄勅勆勈勊勌勍勎勏勑勓勔動勗務",
  		5,
  		"勠勡勢勣勥",
  		10,
  		"勱",
  		7,
  		"勻勼勽匁匂匃匄匇匉匊匋匌匎"
  	],
  	[
  		"8540",
  		"匑匒匓匔匘匛匜匞匟匢匤匥匧匨匩匫匬匭匯",
  		9,
  		"匼匽區卂卄卆卋卌卍卐協単卙卛卝卥卨卪卬卭卲卶卹卻卼卽卾厀厁厃厇厈厊厎厏"
  	],
  	[
  		"8580",
  		"厐",
  		4,
  		"厖厗厙厛厜厞厠厡厤厧厪厫厬厭厯",
  		6,
  		"厷厸厹厺厼厽厾叀參",
  		4,
  		"収叏叐叒叓叕叚叜叝叞叡叢叧叴叺叾叿吀吂吅吇吋吔吘吙吚吜吢吤吥吪吰吳吶吷吺吽吿呁呂呄呅呇呉呌呍呎呏呑呚呝",
  		4,
  		"呣呥呧呩",
  		7,
  		"呴呹呺呾呿咁咃咅咇咈咉咊咍咑咓咗咘咜咞咟咠咡"
  	],
  	[
  		"8640",
  		"咢咥咮咰咲咵咶咷咹咺咼咾哃哅哊哋哖哘哛哠",
  		4,
  		"哫哬哯哰哱哴",
  		5,
  		"哻哾唀唂唃唄唅唈唊",
  		4,
  		"唒唓唕",
  		5,
  		"唜唝唞唟唡唥唦"
  	],
  	[
  		"8680",
  		"唨唩唫唭唲唴唵唶唸唹唺唻唽啀啂啅啇啈啋",
  		4,
  		"啑啒啓啔啗",
  		4,
  		"啝啞啟啠啢啣啨啩啫啯",
  		5,
  		"啹啺啽啿喅喆喌喍喎喐喒喓喕喖喗喚喛喞喠",
  		6,
  		"喨",
  		8,
  		"喲喴営喸喺喼喿",
  		4,
  		"嗆嗇嗈嗊嗋嗎嗏嗐嗕嗗",
  		4,
  		"嗞嗠嗢嗧嗩嗭嗮嗰嗱嗴嗶嗸",
  		4,
  		"嗿嘂嘃嘄嘅"
  	],
  	[
  		"8740",
  		"嘆嘇嘊嘋嘍嘐",
  		7,
  		"嘙嘚嘜嘝嘠嘡嘢嘥嘦嘨嘩嘪嘫嘮嘯嘰嘳嘵嘷嘸嘺嘼嘽嘾噀",
  		11,
  		"噏",
  		4,
  		"噕噖噚噛噝",
  		4
  	],
  	[
  		"8780",
  		"噣噥噦噧噭噮噯噰噲噳噴噵噷噸噹噺噽",
  		7,
  		"嚇",
  		6,
  		"嚐嚑嚒嚔",
  		14,
  		"嚤",
  		10,
  		"嚰",
  		6,
  		"嚸嚹嚺嚻嚽",
  		12,
  		"囋",
  		8,
  		"囕囖囘囙囜団囥",
  		5,
  		"囬囮囯囲図囶囷囸囻囼圀圁圂圅圇國",
  		6
  	],
  	[
  		"8840",
  		"園",
  		9,
  		"圝圞圠圡圢圤圥圦圧圫圱圲圴",
  		4,
  		"圼圽圿坁坃坄坅坆坈坉坋坒",
  		4,
  		"坘坙坢坣坥坧坬坮坰坱坲坴坵坸坹坺坽坾坿垀"
  	],
  	[
  		"8880",
  		"垁垇垈垉垊垍",
  		4,
  		"垔",
  		6,
  		"垜垝垞垟垥垨垪垬垯垰垱垳垵垶垷垹",
  		8,
  		"埄",
  		6,
  		"埌埍埐埑埓埖埗埛埜埞埡埢埣埥",
  		7,
  		"埮埰埱埲埳埵埶執埻埼埾埿堁堃堄堅堈堉堊堌堎堏堐堒堓堔堖堗堘堚堛堜堝堟堢堣堥",
  		4,
  		"堫",
  		4,
  		"報堲堳場堶",
  		7
  	],
  	[
  		"8940",
  		"堾",
  		5,
  		"塅",
  		6,
  		"塎塏塐塒塓塕塖塗塙",
  		4,
  		"塟",
  		5,
  		"塦",
  		4,
  		"塭",
  		16,
  		"塿墂墄墆墇墈墊墋墌"
  	],
  	[
  		"8980",
  		"墍",
  		4,
  		"墔",
  		4,
  		"墛墜墝墠",
  		7,
  		"墪",
  		17,
  		"墽墾墿壀壂壃壄壆",
  		10,
  		"壒壓壔壖",
  		13,
  		"壥",
  		5,
  		"壭壯壱売壴壵壷壸壺",
  		7,
  		"夃夅夆夈",
  		4,
  		"夎夐夑夒夓夗夘夛夝夞夠夡夢夣夦夨夬夰夲夳夵夶夻"
  	],
  	[
  		"8a40",
  		"夽夾夿奀奃奅奆奊奌奍奐奒奓奙奛",
  		4,
  		"奡奣奤奦",
  		12,
  		"奵奷奺奻奼奾奿妀妅妉妋妌妎妏妐妑妔妕妘妚妛妜妝妟妠妡妢妦"
  	],
  	[
  		"8a80",
  		"妧妬妭妰妱妳",
  		5,
  		"妺妼妽妿",
  		6,
  		"姇姈姉姌姍姎姏姕姖姙姛姞",
  		4,
  		"姤姦姧姩姪姫姭",
  		11,
  		"姺姼姽姾娀娂娊娋娍娎娏娐娒娔娕娖娗娙娚娛娝娞娡娢娤娦娧娨娪",
  		6,
  		"娳娵娷",
  		4,
  		"娽娾娿婁",
  		4,
  		"婇婈婋",
  		9,
  		"婖婗婘婙婛",
  		5
  	],
  	[
  		"8b40",
  		"婡婣婤婥婦婨婩婫",
  		8,
  		"婸婹婻婼婽婾媀",
  		17,
  		"媓",
  		6,
  		"媜",
  		13,
  		"媫媬"
  	],
  	[
  		"8b80",
  		"媭",
  		4,
  		"媴媶媷媹",
  		4,
  		"媿嫀嫃",
  		5,
  		"嫊嫋嫍",
  		4,
  		"嫓嫕嫗嫙嫚嫛嫝嫞嫟嫢嫤嫥嫧嫨嫪嫬",
  		4,
  		"嫲",
  		22,
  		"嬊",
  		11,
  		"嬘",
  		25,
  		"嬳嬵嬶嬸",
  		7,
  		"孁",
  		6
  	],
  	[
  		"8c40",
  		"孈",
  		7,
  		"孒孖孞孠孡孧孨孫孭孮孯孲孴孶孷學孹孻孼孾孿宂宆宊宍宎宐宑宒宔宖実宧宨宩宬宭宮宯宱宲宷宺宻宼寀寁寃寈寉寊寋寍寎寏"
  	],
  	[
  		"8c80",
  		"寑寔",
  		8,
  		"寠寢寣實寧審",
  		4,
  		"寯寱",
  		6,
  		"寽対尀専尃尅將專尋尌對導尐尒尓尗尙尛尞尟尠尡尣尦尨尩尪尫尭尮尯尰尲尳尵尶尷屃屄屆屇屌屍屒屓屔屖屗屘屚屛屜屝屟屢層屧",
  		6,
  		"屰屲",
  		6,
  		"屻屼屽屾岀岃",
  		4,
  		"岉岊岋岎岏岒岓岕岝",
  		4,
  		"岤",
  		4
  	],
  	[
  		"8d40",
  		"岪岮岯岰岲岴岶岹岺岻岼岾峀峂峃峅",
  		5,
  		"峌",
  		5,
  		"峓",
  		5,
  		"峚",
  		6,
  		"峢峣峧峩峫峬峮峯峱",
  		9,
  		"峼",
  		4
  	],
  	[
  		"8d80",
  		"崁崄崅崈",
  		5,
  		"崏",
  		4,
  		"崕崗崘崙崚崜崝崟",
  		4,
  		"崥崨崪崫崬崯",
  		4,
  		"崵",
  		7,
  		"崿",
  		7,
  		"嵈嵉嵍",
  		10,
  		"嵙嵚嵜嵞",
  		10,
  		"嵪嵭嵮嵰嵱嵲嵳嵵",
  		12,
  		"嶃",
  		21,
  		"嶚嶛嶜嶞嶟嶠"
  	],
  	[
  		"8e40",
  		"嶡",
  		21,
  		"嶸",
  		12,
  		"巆",
  		6,
  		"巎",
  		12,
  		"巜巟巠巣巤巪巬巭"
  	],
  	[
  		"8e80",
  		"巰巵巶巸",
  		4,
  		"巿帀帄帇帉帊帋帍帎帒帓帗帞",
  		7,
  		"帨",
  		4,
  		"帯帰帲",
  		4,
  		"帹帺帾帿幀幁幃幆",
  		5,
  		"幍",
  		6,
  		"幖",
  		4,
  		"幜幝幟幠幣",
  		14,
  		"幵幷幹幾庁庂広庅庈庉庌庍庎庒庘庛庝庡庢庣庤庨",
  		4,
  		"庮",
  		4,
  		"庴庺庻庼庽庿",
  		6
  	],
  	[
  		"8f40",
  		"廆廇廈廋",
  		5,
  		"廔廕廗廘廙廚廜",
  		11,
  		"廩廫",
  		8,
  		"廵廸廹廻廼廽弅弆弇弉弌弍弎弐弒弔弖弙弚弜弝弞弡弢弣弤"
  	],
  	[
  		"8f80",
  		"弨弫弬弮弰弲",
  		6,
  		"弻弽弾弿彁",
  		14,
  		"彑彔彙彚彛彜彞彟彠彣彥彧彨彫彮彯彲彴彵彶彸彺彽彾彿徃徆徍徎徏徑従徔徖徚徛徝從徟徠徢",
  		5,
  		"復徫徬徯",
  		5,
  		"徶徸徹徺徻徾",
  		4,
  		"忇忈忊忋忎忓忔忕忚忛応忞忟忢忣忥忦忨忩忬忯忰忲忳忴忶忷忹忺忼怇"
  	],
  	[
  		"9040",
  		"怈怉怋怌怐怑怓怗怘怚怞怟怢怣怤怬怭怮怰",
  		4,
  		"怶",
  		4,
  		"怽怾恀恄",
  		6,
  		"恌恎恏恑恓恔恖恗恘恛恜恞恟恠恡恥恦恮恱恲恴恵恷恾悀"
  	],
  	[
  		"9080",
  		"悁悂悅悆悇悈悊悋悎悏悐悑悓悕悗悘悙悜悞悡悢悤悥悧悩悪悮悰悳悵悶悷悹悺悽",
  		7,
  		"惇惈惉惌",
  		4,
  		"惒惓惔惖惗惙惛惞惡",
  		4,
  		"惪惱惲惵惷惸惻",
  		4,
  		"愂愃愄愅愇愊愋愌愐",
  		4,
  		"愖愗愘愙愛愜愝愞愡愢愥愨愩愪愬",
  		18,
  		"慀",
  		6
  	],
  	[
  		"9140",
  		"慇慉態慍慏慐慒慓慔慖",
  		6,
  		"慞慟慠慡慣慤慥慦慩",
  		6,
  		"慱慲慳慴慶慸",
  		18,
  		"憌憍憏",
  		4,
  		"憕"
  	],
  	[
  		"9180",
  		"憖",
  		6,
  		"憞",
  		8,
  		"憪憫憭",
  		9,
  		"憸",
  		5,
  		"憿懀懁懃",
  		4,
  		"應懌",
  		4,
  		"懓懕",
  		16,
  		"懧",
  		13,
  		"懶",
  		8,
  		"戀",
  		5,
  		"戇戉戓戔戙戜戝戞戠戣戦戧戨戩戫戭戯戰戱戲戵戶戸",
  		4,
  		"扂扄扅扆扊"
  	],
  	[
  		"9240",
  		"扏扐払扖扗扙扚扜",
  		6,
  		"扤扥扨扱扲扴扵扷扸扺扻扽抁抂抃抅抆抇抈抋",
  		5,
  		"抔抙抜抝択抣抦抧抩抪抭抮抯抰抲抳抴抶抷抸抺抾拀拁"
  	],
  	[
  		"9280",
  		"拃拋拏拑拕拝拞拠拡拤拪拫拰拲拵拸拹拺拻挀挃挄挅挆挊挋挌挍挏挐挒挓挔挕挗挘挙挜挦挧挩挬挭挮挰挱挳",
  		5,
  		"挻挼挾挿捀捁捄捇捈捊捑捒捓捔捖",
  		7,
  		"捠捤捥捦捨捪捫捬捯捰捲捳捴捵捸捹捼捽捾捿掁掃掄掅掆掋掍掑掓掔掕掗掙",
  		6,
  		"採掤掦掫掯掱掲掵掶掹掻掽掿揀"
  	],
  	[
  		"9340",
  		"揁揂揃揅揇揈揊揋揌揑揓揔揕揗",
  		6,
  		"揟揢揤",
  		4,
  		"揫揬揮揯揰揱揳揵揷揹揺揻揼揾搃搄搆",
  		4,
  		"損搎搑搒搕",
  		5,
  		"搝搟搢搣搤"
  	],
  	[
  		"9380",
  		"搥搧搨搩搫搮",
  		5,
  		"搵",
  		4,
  		"搻搼搾摀摂摃摉摋",
  		6,
  		"摓摕摖摗摙",
  		4,
  		"摟",
  		7,
  		"摨摪摫摬摮",
  		9,
  		"摻",
  		6,
  		"撃撆撈",
  		8,
  		"撓撔撗撘撚撛撜撝撟",
  		4,
  		"撥撦撧撨撪撫撯撱撲撳撴撶撹撻撽撾撿擁擃擄擆",
  		6,
  		"擏擑擓擔擕擖擙據"
  	],
  	[
  		"9440",
  		"擛擜擝擟擠擡擣擥擧",
  		24,
  		"攁",
  		7,
  		"攊",
  		7,
  		"攓",
  		4,
  		"攙",
  		8
  	],
  	[
  		"9480",
  		"攢攣攤攦",
  		4,
  		"攬攭攰攱攲攳攷攺攼攽敀",
  		4,
  		"敆敇敊敋敍敎敐敒敓敔敗敘敚敜敟敠敡敤敥敧敨敩敪敭敮敯敱敳敵敶數",
  		14,
  		"斈斉斊斍斎斏斒斔斕斖斘斚斝斞斠斢斣斦斨斪斬斮斱",
  		7,
  		"斺斻斾斿旀旂旇旈旉旊旍旐旑旓旔旕旘",
  		7,
  		"旡旣旤旪旫"
  	],
  	[
  		"9540",
  		"旲旳旴旵旸旹旻",
  		4,
  		"昁昄昅昇昈昉昋昍昐昑昒昖昗昘昚昛昜昞昡昢昣昤昦昩昪昫昬昮昰昲昳昷",
  		4,
  		"昽昿晀時晄",
  		6,
  		"晍晎晐晑晘"
  	],
  	[
  		"9580",
  		"晙晛晜晝晞晠晢晣晥晧晩",
  		4,
  		"晱晲晳晵晸晹晻晼晽晿暀暁暃暅暆暈暉暊暋暍暎暏暐暒暓暔暕暘",
  		4,
  		"暞",
  		8,
  		"暩",
  		4,
  		"暯",
  		4,
  		"暵暶暷暸暺暻暼暽暿",
  		25,
  		"曚曞",
  		7,
  		"曧曨曪",
  		5,
  		"曱曵曶書曺曻曽朁朂會"
  	],
  	[
  		"9640",
  		"朄朅朆朇朌朎朏朑朒朓朖朘朙朚朜朞朠",
  		5,
  		"朧朩朮朰朲朳朶朷朸朹朻朼朾朿杁杄杅杇杊杋杍杒杔杕杗",
  		4,
  		"杝杢杣杤杦杧杫杬杮東杴杶"
  	],
  	[
  		"9680",
  		"杸杹杺杻杽枀枂枃枅枆枈枊枌枍枎枏枑枒枓枔枖枙枛枟枠枡枤枦枩枬枮枱枲枴枹",
  		7,
  		"柂柅",
  		9,
  		"柕柖柗柛柟柡柣柤柦柧柨柪柫柭柮柲柵",
  		7,
  		"柾栁栂栃栄栆栍栐栒栔栕栘",
  		4,
  		"栞栟栠栢",
  		6,
  		"栫",
  		6,
  		"栴栵栶栺栻栿桇桋桍桏桒桖",
  		5
  	],
  	[
  		"9740",
  		"桜桝桞桟桪桬",
  		7,
  		"桵桸",
  		8,
  		"梂梄梇",
  		7,
  		"梐梑梒梔梕梖梘",
  		9,
  		"梣梤梥梩梪梫梬梮梱梲梴梶梷梸"
  	],
  	[
  		"9780",
  		"梹",
  		6,
  		"棁棃",
  		5,
  		"棊棌棎棏棐棑棓棔棖棗棙棛",
  		4,
  		"棡棢棤",
  		9,
  		"棯棲棳棴棶棷棸棻棽棾棿椀椂椃椄椆",
  		4,
  		"椌椏椑椓",
  		11,
  		"椡椢椣椥",
  		7,
  		"椮椯椱椲椳椵椶椷椸椺椻椼椾楀楁楃",
  		16,
  		"楕楖楘楙楛楜楟"
  	],
  	[
  		"9840",
  		"楡楢楤楥楧楨楩楪楬業楯楰楲",
  		4,
  		"楺楻楽楾楿榁榃榅榊榋榌榎",
  		5,
  		"榖榗榙榚榝",
  		9,
  		"榩榪榬榮榯榰榲榳榵榶榸榹榺榼榽"
  	],
  	[
  		"9880",
  		"榾榿槀槂",
  		7,
  		"構槍槏槑槒槓槕",
  		5,
  		"槜槝槞槡",
  		11,
  		"槮槯槰槱槳",
  		9,
  		"槾樀",
  		9,
  		"樋",
  		11,
  		"標",
  		5,
  		"樠樢",
  		5,
  		"権樫樬樭樮樰樲樳樴樶",
  		6,
  		"樿",
  		4,
  		"橅橆橈",
  		7,
  		"橑",
  		6,
  		"橚"
  	],
  	[
  		"9940",
  		"橜",
  		4,
  		"橢橣橤橦",
  		10,
  		"橲",
  		6,
  		"橺橻橽橾橿檁檂檃檅",
  		8,
  		"檏檒",
  		4,
  		"檘",
  		7,
  		"檡",
  		5
  	],
  	[
  		"9980",
  		"檧檨檪檭",
  		114,
  		"欥欦欨",
  		6
  	],
  	[
  		"9a40",
  		"欯欰欱欳欴欵欶欸欻欼欽欿歀歁歂歄歅歈歊歋歍",
  		11,
  		"歚",
  		7,
  		"歨歩歫",
  		13,
  		"歺歽歾歿殀殅殈"
  	],
  	[
  		"9a80",
  		"殌殎殏殐殑殔殕殗殘殙殜",
  		4,
  		"殢",
  		7,
  		"殫",
  		7,
  		"殶殸",
  		6,
  		"毀毃毄毆",
  		4,
  		"毌毎毐毑毘毚毜",
  		4,
  		"毢",
  		7,
  		"毬毭毮毰毱毲毴毶毷毸毺毻毼毾",
  		6,
  		"氈",
  		4,
  		"氎氒気氜氝氞氠氣氥氫氬氭氱氳氶氷氹氺氻氼氾氿汃汄汅汈汋",
  		4,
  		"汑汒汓汖汘"
  	],
  	[
  		"9b40",
  		"汙汚汢汣汥汦汧汫",
  		4,
  		"汱汳汵汷汸決汻汼汿沀沄沇沊沋沍沎沑沒沕沖沗沘沚沜沝沞沠沢沨沬沯沰沴沵沶沷沺泀況泂泃泆泇泈泋泍泎泏泑泒泘"
  	],
  	[
  		"9b80",
  		"泙泚泜泝泟泤泦泧泩泬泭泲泴泹泿洀洂洃洅洆洈洉洊洍洏洐洑洓洔洕洖洘洜洝洟",
  		5,
  		"洦洨洩洬洭洯洰洴洶洷洸洺洿浀浂浄浉浌浐浕浖浗浘浛浝浟浡浢浤浥浧浨浫浬浭浰浱浲浳浵浶浹浺浻浽",
  		4,
  		"涃涄涆涇涊涋涍涏涐涒涖",
  		4,
  		"涜涢涥涬涭涰涱涳涴涶涷涹",
  		5,
  		"淁淂淃淈淉淊"
  	],
  	[
  		"9c40",
  		"淍淎淏淐淒淓淔淕淗淚淛淜淟淢淣淥淧淨淩淪淭淯淰淲淴淵淶淸淺淽",
  		7,
  		"渆渇済渉渋渏渒渓渕渘渙減渜渞渟渢渦渧渨渪測渮渰渱渳渵"
  	],
  	[
  		"9c80",
  		"渶渷渹渻",
  		7,
  		"湅",
  		7,
  		"湏湐湑湒湕湗湙湚湜湝湞湠",
  		10,
  		"湬湭湯",
  		14,
  		"満溁溂溄溇溈溊",
  		4,
  		"溑",
  		6,
  		"溙溚溛溝溞溠溡溣溤溦溨溩溫溬溭溮溰溳溵溸溹溼溾溿滀滃滄滅滆滈滉滊滌滍滎滐滒滖滘滙滛滜滝滣滧滪",
  		5
  	],
  	[
  		"9d40",
  		"滰滱滲滳滵滶滷滸滺",
  		7,
  		"漃漄漅漇漈漊",
  		4,
  		"漐漑漒漖",
  		9,
  		"漡漢漣漥漦漧漨漬漮漰漲漴漵漷",
  		6,
  		"漿潀潁潂"
  	],
  	[
  		"9d80",
  		"潃潄潅潈潉潊潌潎",
  		9,
  		"潙潚潛潝潟潠潡潣潤潥潧",
  		5,
  		"潯潰潱潳潵潶潷潹潻潽",
  		6,
  		"澅澆澇澊澋澏",
  		12,
  		"澝澞澟澠澢",
  		4,
  		"澨",
  		10,
  		"澴澵澷澸澺",
  		5,
  		"濁濃",
  		5,
  		"濊",
  		6,
  		"濓",
  		10,
  		"濟濢濣濤濥"
  	],
  	[
  		"9e40",
  		"濦",
  		7,
  		"濰",
  		32,
  		"瀒",
  		7,
  		"瀜",
  		6,
  		"瀤",
  		6
  	],
  	[
  		"9e80",
  		"瀫",
  		9,
  		"瀶瀷瀸瀺",
  		17,
  		"灍灎灐",
  		13,
  		"灟",
  		11,
  		"灮灱灲灳灴灷灹灺灻災炁炂炃炄炆炇炈炋炌炍炏炐炑炓炗炘炚炛炞",
  		12,
  		"炰炲炴炵炶為炾炿烄烅烆烇烉烋",
  		12,
  		"烚"
  	],
  	[
  		"9f40",
  		"烜烝烞烠烡烢烣烥烪烮烰",
  		6,
  		"烸烺烻烼烾",
  		10,
  		"焋",
  		4,
  		"焑焒焔焗焛",
  		10,
  		"焧",
  		7,
  		"焲焳焴"
  	],
  	[
  		"9f80",
  		"焵焷",
  		13,
  		"煆煇煈煉煋煍煏",
  		12,
  		"煝煟",
  		4,
  		"煥煩",
  		4,
  		"煯煰煱煴煵煶煷煹煻煼煾",
  		5,
  		"熅",
  		4,
  		"熋熌熍熎熐熑熒熓熕熖熗熚",
  		4,
  		"熡",
  		6,
  		"熩熪熫熭",
  		5,
  		"熴熶熷熸熺",
  		8,
  		"燄",
  		9,
  		"燏",
  		4
  	],
  	[
  		"a040",
  		"燖",
  		9,
  		"燡燢燣燤燦燨",
  		5,
  		"燯",
  		9,
  		"燺",
  		11,
  		"爇",
  		19
  	],
  	[
  		"a080",
  		"爛爜爞",
  		9,
  		"爩爫爭爮爯爲爳爴爺爼爾牀",
  		6,
  		"牉牊牋牎牏牐牑牓牔牕牗牘牚牜牞牠牣牤牥牨牪牫牬牭牰牱牳牴牶牷牸牻牼牽犂犃犅",
  		4,
  		"犌犎犐犑犓",
  		11,
  		"犠",
  		11,
  		"犮犱犲犳犵犺",
  		6,
  		"狅狆狇狉狊狋狌狏狑狓狔狕狖狘狚狛"
  	],
  	[
  		"a1a1",
  		"　、。·ˉˇ¨〃々—～‖…‘’“”〔〕〈",
  		7,
  		"〖〗【】±×÷∶∧∨∑∏∪∩∈∷√⊥∥∠⌒⊙∫∮≡≌≈∽∝≠≮≯≤≥∞∵∴♂♀°′″℃＄¤￠￡‰§№☆★○●◎◇◆□■△▲※→←↑↓〓"
  	],
  	[
  		"a2a1",
  		"ⅰ",
  		9
  	],
  	[
  		"a2b1",
  		"⒈",
  		19,
  		"⑴",
  		19,
  		"①",
  		9
  	],
  	[
  		"a2e5",
  		"㈠",
  		9
  	],
  	[
  		"a2f1",
  		"Ⅰ",
  		11
  	],
  	[
  		"a3a1",
  		"！＂＃￥％",
  		88,
  		"￣"
  	],
  	[
  		"a4a1",
  		"ぁ",
  		82
  	],
  	[
  		"a5a1",
  		"ァ",
  		85
  	],
  	[
  		"a6a1",
  		"Α",
  		16,
  		"Σ",
  		6
  	],
  	[
  		"a6c1",
  		"α",
  		16,
  		"σ",
  		6
  	],
  	[
  		"a6e0",
  		"︵︶︹︺︿﹀︽︾﹁﹂﹃﹄"
  	],
  	[
  		"a6ee",
  		"︻︼︷︸︱"
  	],
  	[
  		"a6f4",
  		"︳︴"
  	],
  	[
  		"a7a1",
  		"А",
  		5,
  		"ЁЖ",
  		25
  	],
  	[
  		"a7d1",
  		"а",
  		5,
  		"ёж",
  		25
  	],
  	[
  		"a840",
  		"ˊˋ˙–―‥‵℅℉↖↗↘↙∕∟∣≒≦≧⊿═",
  		35,
  		"▁",
  		6
  	],
  	[
  		"a880",
  		"█",
  		7,
  		"▓▔▕▼▽◢◣◤◥☉⊕〒〝〞"
  	],
  	[
  		"a8a1",
  		"āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜüêɑ"
  	],
  	[
  		"a8bd",
  		"ńň"
  	],
  	[
  		"a8c0",
  		"ɡ"
  	],
  	[
  		"a8c5",
  		"ㄅ",
  		36
  	],
  	[
  		"a940",
  		"〡",
  		8,
  		"㊣㎎㎏㎜㎝㎞㎡㏄㏎㏑㏒㏕︰￢￤"
  	],
  	[
  		"a959",
  		"℡㈱"
  	],
  	[
  		"a95c",
  		"‐"
  	],
  	[
  		"a960",
  		"ー゛゜ヽヾ〆ゝゞ﹉",
  		9,
  		"﹔﹕﹖﹗﹙",
  		8
  	],
  	[
  		"a980",
  		"﹢",
  		4,
  		"﹨﹩﹪﹫"
  	],
  	[
  		"a996",
  		"〇"
  	],
  	[
  		"a9a4",
  		"─",
  		75
  	],
  	[
  		"aa40",
  		"狜狝狟狢",
  		5,
  		"狪狫狵狶狹狽狾狿猀猂猄",
  		5,
  		"猋猌猍猏猐猑猒猔猘猙猚猟猠猣猤猦猧猨猭猯猰猲猳猵猶猺猻猼猽獀",
  		8
  	],
  	[
  		"aa80",
  		"獉獊獋獌獎獏獑獓獔獕獖獘",
  		7,
  		"獡",
  		10,
  		"獮獰獱"
  	],
  	[
  		"ab40",
  		"獲",
  		11,
  		"獿",
  		4,
  		"玅玆玈玊玌玍玏玐玒玓玔玕玗玘玙玚玜玝玞玠玡玣",
  		5,
  		"玪玬玭玱玴玵玶玸玹玼玽玾玿珁珃",
  		4
  	],
  	[
  		"ab80",
  		"珋珌珎珒",
  		6,
  		"珚珛珜珝珟珡珢珣珤珦珨珪珫珬珮珯珰珱珳",
  		4
  	],
  	[
  		"ac40",
  		"珸",
  		10,
  		"琄琇琈琋琌琍琎琑",
  		8,
  		"琜",
  		5,
  		"琣琤琧琩琫琭琯琱琲琷",
  		4,
  		"琽琾琿瑀瑂",
  		11
  	],
  	[
  		"ac80",
  		"瑎",
  		6,
  		"瑖瑘瑝瑠",
  		12,
  		"瑮瑯瑱",
  		4,
  		"瑸瑹瑺"
  	],
  	[
  		"ad40",
  		"瑻瑼瑽瑿璂璄璅璆璈璉璊璌璍璏璑",
  		10,
  		"璝璟",
  		7,
  		"璪",
  		15,
  		"璻",
  		12
  	],
  	[
  		"ad80",
  		"瓈",
  		9,
  		"瓓",
  		8,
  		"瓝瓟瓡瓥瓧",
  		6,
  		"瓰瓱瓲"
  	],
  	[
  		"ae40",
  		"瓳瓵瓸",
  		6,
  		"甀甁甂甃甅",
  		7,
  		"甎甐甒甔甕甖甗甛甝甞甠",
  		4,
  		"甦甧甪甮甴甶甹甼甽甿畁畂畃畄畆畇畉畊畍畐畑畒畓畕畖畗畘"
  	],
  	[
  		"ae80",
  		"畝",
  		7,
  		"畧畨畩畫",
  		6,
  		"畳畵當畷畺",
  		4,
  		"疀疁疂疄疅疇"
  	],
  	[
  		"af40",
  		"疈疉疊疌疍疎疐疓疕疘疛疜疞疢疦",
  		4,
  		"疭疶疷疺疻疿痀痁痆痋痌痎痏痐痑痓痗痙痚痜痝痟痠痡痥痩痬痭痮痯痲痳痵痶痷痸痺痻痽痾瘂瘄瘆瘇"
  	],
  	[
  		"af80",
  		"瘈瘉瘋瘍瘎瘏瘑瘒瘓瘔瘖瘚瘜瘝瘞瘡瘣瘧瘨瘬瘮瘯瘱瘲瘶瘷瘹瘺瘻瘽癁療癄"
  	],
  	[
  		"b040",
  		"癅",
  		6,
  		"癎",
  		5,
  		"癕癗",
  		4,
  		"癝癟癠癡癢癤",
  		6,
  		"癬癭癮癰",
  		7,
  		"癹発發癿皀皁皃皅皉皊皌皍皏皐皒皔皕皗皘皚皛"
  	],
  	[
  		"b080",
  		"皜",
  		7,
  		"皥",
  		8,
  		"皯皰皳皵",
  		9,
  		"盀盁盃啊阿埃挨哎唉哀皑癌蔼矮艾碍爱隘鞍氨安俺按暗岸胺案肮昂盎凹敖熬翱袄傲奥懊澳芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸白柏百摆佰败拜稗斑班搬扳般颁板版扮拌伴瓣半办绊邦帮梆榜膀绑棒磅蚌镑傍谤苞胞包褒剥"
  	],
  	[
  		"b140",
  		"盄盇盉盋盌盓盕盙盚盜盝盞盠",
  		4,
  		"盦",
  		7,
  		"盰盳盵盶盷盺盻盽盿眀眂眃眅眆眊県眎",
  		10,
  		"眛眜眝眞眡眣眤眥眧眪眫"
  	],
  	[
  		"b180",
  		"眬眮眰",
  		4,
  		"眹眻眽眾眿睂睄睅睆睈",
  		7,
  		"睒",
  		7,
  		"睜薄雹保堡饱宝抱报暴豹鲍爆杯碑悲卑北辈背贝钡倍狈备惫焙被奔苯本笨崩绷甭泵蹦迸逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛鞭边编贬扁便变卞辨辩辫遍标彪膘表鳖憋别瘪彬斌濒滨宾摈兵冰柄丙秉饼炳"
  	],
  	[
  		"b240",
  		"睝睞睟睠睤睧睩睪睭",
  		11,
  		"睺睻睼瞁瞂瞃瞆",
  		5,
  		"瞏瞐瞓",
  		11,
  		"瞡瞣瞤瞦瞨瞫瞭瞮瞯瞱瞲瞴瞶",
  		4
  	],
  	[
  		"b280",
  		"瞼瞾矀",
  		12,
  		"矎",
  		8,
  		"矘矙矚矝",
  		4,
  		"矤病并玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳捕卜哺补埠不布步簿部怖擦猜裁材才财睬踩采彩菜蔡餐参蚕残惭惨灿苍舱仓沧藏操糙槽曹草厕策侧册测层蹭插叉茬茶查碴搽察岔差诧拆柴豺搀掺蝉馋谗缠铲产阐颤昌猖"
  	],
  	[
  		"b340",
  		"矦矨矪矯矰矱矲矴矵矷矹矺矻矼砃",
  		5,
  		"砊砋砎砏砐砓砕砙砛砞砠砡砢砤砨砪砫砮砯砱砲砳砵砶砽砿硁硂硃硄硆硈硉硊硋硍硏硑硓硔硘硙硚"
  	],
  	[
  		"b380",
  		"硛硜硞",
  		11,
  		"硯",
  		7,
  		"硸硹硺硻硽",
  		6,
  		"场尝常长偿肠厂敞畅唱倡超抄钞朝嘲潮巢吵炒车扯撤掣彻澈郴臣辰尘晨忱沉陈趁衬撑称城橙成呈乘程惩澄诚承逞骋秤吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽充冲虫崇宠抽酬畴踌稠愁筹仇绸瞅丑臭初出橱厨躇锄雏滁除楚"
  	],
  	[
  		"b440",
  		"碄碅碆碈碊碋碏碐碒碔碕碖碙碝碞碠碢碤碦碨",
  		7,
  		"碵碶碷碸確碻碼碽碿磀磂磃磄磆磇磈磌磍磎磏磑磒磓磖磗磘磚",
  		9
  	],
  	[
  		"b480",
  		"磤磥磦磧磩磪磫磭",
  		4,
  		"磳磵磶磸磹磻",
  		5,
  		"礂礃礄礆",
  		6,
  		"础储矗搐触处揣川穿椽传船喘串疮窗幢床闯创吹炊捶锤垂春椿醇唇淳纯蠢戳绰疵茨磁雌辞慈瓷词此刺赐次聪葱囱匆从丛凑粗醋簇促蹿篡窜摧崔催脆瘁粹淬翠村存寸磋撮搓措挫错搭达答瘩打大呆歹傣戴带殆代贷袋待逮"
  	],
  	[
  		"b540",
  		"礍",
  		5,
  		"礔",
  		9,
  		"礟",
  		4,
  		"礥",
  		14,
  		"礵",
  		4,
  		"礽礿祂祃祄祅祇祊",
  		8,
  		"祔祕祘祙祡祣"
  	],
  	[
  		"b580",
  		"祤祦祩祪祫祬祮祰",
  		6,
  		"祹祻",
  		4,
  		"禂禃禆禇禈禉禋禌禍禎禐禑禒怠耽担丹单郸掸胆旦氮但惮淡诞弹蛋当挡党荡档刀捣蹈倒岛祷导到稻悼道盗德得的蹬灯登等瞪凳邓堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔颠掂滇碘点典靛垫电佃甸店惦奠淀殿碉叼雕凋刁掉吊钓调跌爹碟蝶迭谍叠"
  	],
  	[
  		"b640",
  		"禓",
  		6,
  		"禛",
  		11,
  		"禨",
  		10,
  		"禴",
  		4,
  		"禼禿秂秄秅秇秈秊秌秎秏秐秓秔秖秗秙",
  		5,
  		"秠秡秢秥秨秪"
  	],
  	[
  		"b680",
  		"秬秮秱",
  		6,
  		"秹秺秼秾秿稁稄稅稇稈稉稊稌稏",
  		4,
  		"稕稖稘稙稛稜丁盯叮钉顶鼎锭定订丢东冬董懂动栋侗恫冻洞兜抖斗陡豆逗痘都督毒犊独读堵睹赌杜镀肚度渡妒端短锻段断缎堆兑队对墩吨蹲敦顿囤钝盾遁掇哆多夺垛躲朵跺舵剁惰堕蛾峨鹅俄额讹娥恶厄扼遏鄂饿恩而儿耳尔饵洱二"
  	],
  	[
  		"b740",
  		"稝稟稡稢稤",
  		14,
  		"稴稵稶稸稺稾穀",
  		5,
  		"穇",
  		9,
  		"穒",
  		4,
  		"穘",
  		16
  	],
  	[
  		"b780",
  		"穩",
  		6,
  		"穱穲穳穵穻穼穽穾窂窅窇窉窊窋窌窎窏窐窓窔窙窚窛窞窡窢贰发罚筏伐乏阀法珐藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛坊芳方肪房防妨仿访纺放菲非啡飞肥匪诽吠肺废沸费芬酚吩氛分纷坟焚汾粉奋份忿愤粪丰封枫蜂峰锋风疯烽逢冯缝讽奉凤佛否夫敷肤孵扶拂辐幅氟符伏俘服"
  	],
  	[
  		"b840",
  		"窣窤窧窩窪窫窮",
  		4,
  		"窴",
  		10,
  		"竀",
  		10,
  		"竌",
  		9,
  		"竗竘竚竛竜竝竡竢竤竧",
  		5,
  		"竮竰竱竲竳"
  	],
  	[
  		"b880",
  		"竴",
  		4,
  		"竻竼竾笀笁笂笅笇笉笌笍笎笐笒笓笖笗笘笚笜笝笟笡笢笣笧笩笭浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐噶嘎该改概钙盖溉干甘杆柑竿肝赶感秆敢赣冈刚钢缸肛纲岗港杠篙皋高膏羔糕搞镐稿告哥歌搁戈鸽胳疙割革葛格蛤阁隔铬个各给根跟耕更庚羹"
  	],
  	[
  		"b940",
  		"笯笰笲笴笵笶笷笹笻笽笿",
  		5,
  		"筆筈筊筍筎筓筕筗筙筜筞筟筡筣",
  		10,
  		"筯筰筳筴筶筸筺筼筽筿箁箂箃箄箆",
  		6,
  		"箎箏"
  	],
  	[
  		"b980",
  		"箑箒箓箖箘箙箚箛箞箟箠箣箤箥箮箯箰箲箳箵箶箷箹",
  		7,
  		"篂篃範埂耿梗工攻功恭龚供躬公宫弓巩汞拱贡共钩勾沟苟狗垢构购够辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇刮瓜剐寡挂褂乖拐怪棺关官冠观管馆罐惯灌贯光广逛瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽辊滚棍锅郭国果裹过哈"
  	],
  	[
  		"ba40",
  		"篅篈築篊篋篍篎篏篐篒篔",
  		4,
  		"篛篜篞篟篠篢篣篤篧篨篩篫篬篭篯篰篲",
  		4,
  		"篸篹篺篻篽篿",
  		7,
  		"簈簉簊簍簎簐",
  		5,
  		"簗簘簙"
  	],
  	[
  		"ba80",
  		"簚",
  		4,
  		"簠",
  		5,
  		"簨簩簫",
  		12,
  		"簹",
  		5,
  		"籂骸孩海氦亥害骇酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉夯杭航壕嚎豪毫郝好耗号浩呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺嘿黑痕很狠恨哼亨横衡恒轰哄烘虹鸿洪宏弘红喉侯猴吼厚候后呼乎忽瑚壶葫胡蝴狐糊湖"
  	],
  	[
  		"bb40",
  		"籃",
  		9,
  		"籎",
  		36,
  		"籵",
  		5,
  		"籾",
  		9
  	],
  	[
  		"bb80",
  		"粈粊",
  		6,
  		"粓粔粖粙粚粛粠粡粣粦粧粨粩粫粬粭粯粰粴",
  		4,
  		"粺粻弧虎唬护互沪户花哗华猾滑画划化话槐徊怀淮坏欢环桓还缓换患唤痪豢焕涣宦幻荒慌黄磺蝗簧皇凰惶煌晃幌恍谎灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘荤昏婚魂浑混豁活伙火获或惑霍货祸击圾基机畸稽积箕"
  	],
  	[
  		"bc40",
  		"粿糀糂糃糄糆糉糋糎",
  		6,
  		"糘糚糛糝糞糡",
  		6,
  		"糩",
  		5,
  		"糰",
  		7,
  		"糹糺糼",
  		13,
  		"紋",
  		5
  	],
  	[
  		"bc80",
  		"紑",
  		14,
  		"紡紣紤紥紦紨紩紪紬紭紮細",
  		6,
  		"肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件"
  	],
  	[
  		"bd40",
  		"紷",
  		54,
  		"絯",
  		7
  	],
  	[
  		"bd80",
  		"絸",
  		32,
  		"健舰剑饯渐溅涧建僵姜将浆江疆蒋桨奖讲匠酱降蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸"
  	],
  	[
  		"be40",
  		"継",
  		12,
  		"綧",
  		6,
  		"綯",
  		42
  	],
  	[
  		"be80",
  		"線",
  		32,
  		"尽劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净炯窘揪究纠玖韭久灸九酒厩救旧臼舅咎就疚鞠拘狙疽居驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧捐鹃娟倦眷卷绢撅攫抉掘倔爵觉决诀绝均菌钧军君峻"
  	],
  	[
  		"bf40",
  		"緻",
  		62
  	],
  	[
  		"bf80",
  		"縺縼",
  		4,
  		"繂",
  		4,
  		"繈",
  		21,
  		"俊竣浚郡骏喀咖卡咯开揩楷凯慨刊堪勘坎砍看康慷糠扛抗亢炕考拷烤靠坷苛柯棵磕颗科壳咳可渴克刻客课肯啃垦恳坑吭空恐孔控抠口扣寇枯哭窟苦酷库裤夸垮挎跨胯块筷侩快宽款匡筐狂框矿眶旷况亏盔岿窥葵奎魁傀"
  	],
  	[
  		"c040",
  		"繞",
  		35,
  		"纃",
  		23,
  		"纜纝纞"
  	],
  	[
  		"c080",
  		"纮纴纻纼绖绤绬绹缊缐缞缷缹缻",
  		6,
  		"罃罆",
  		9,
  		"罒罓馈愧溃坤昆捆困括扩廓阔垃拉喇蜡腊辣啦莱来赖蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥琅榔狼廊郎朗浪捞劳牢老佬姥酪烙涝勒乐雷镭蕾磊累儡垒擂肋类泪棱楞冷厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐"
  	],
  	[
  		"c140",
  		"罖罙罛罜罝罞罠罣",
  		4,
  		"罫罬罭罯罰罳罵罶罷罸罺罻罼罽罿羀羂",
  		7,
  		"羋羍羏",
  		4,
  		"羕",
  		4,
  		"羛羜羠羢羣羥羦羨",
  		6,
  		"羱"
  	],
  	[
  		"c180",
  		"羳",
  		4,
  		"羺羻羾翀翂翃翄翆翇翈翉翋翍翏",
  		4,
  		"翖翗翙",
  		5,
  		"翢翣痢立粒沥隶力璃哩俩联莲连镰廉怜涟帘敛脸链恋炼练粮凉梁粱良两辆量晾亮谅撩聊僚疗燎寥辽潦了撂镣廖料列裂烈劣猎琳林磷霖临邻鳞淋凛赁吝拎玲菱零龄铃伶羚凌灵陵岭领另令溜琉榴硫馏留刘瘤流柳六龙聋咙笼窿"
  	],
  	[
  		"c240",
  		"翤翧翨翪翫翬翭翯翲翴",
  		6,
  		"翽翾翿耂耇耈耉耊耎耏耑耓耚耛耝耞耟耡耣耤耫",
  		5,
  		"耲耴耹耺耼耾聀聁聄聅聇聈聉聎聏聐聑聓聕聖聗"
  	],
  	[
  		"c280",
  		"聙聛",
  		13,
  		"聫",
  		5,
  		"聲",
  		11,
  		"隆垄拢陇楼娄搂篓漏陋芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮驴吕铝侣旅履屡缕虑氯律率滤绿峦挛孪滦卵乱掠略抡轮伦仑沦纶论萝螺罗逻锣箩骡裸落洛骆络妈麻玛码蚂马骂嘛吗埋买麦卖迈脉瞒馒蛮满蔓曼慢漫"
  	],
  	[
  		"c340",
  		"聾肁肂肅肈肊肍",
  		5,
  		"肔肕肗肙肞肣肦肧肨肬肰肳肵肶肸肹肻胅胇",
  		4,
  		"胏",
  		6,
  		"胘胟胠胢胣胦胮胵胷胹胻胾胿脀脁脃脄脅脇脈脋"
  	],
  	[
  		"c380",
  		"脌脕脗脙脛脜脝脟",
  		12,
  		"脭脮脰脳脴脵脷脹",
  		4,
  		"脿谩芒茫盲氓忙莽猫茅锚毛矛铆卯茂冒帽貌贸么玫枚梅酶霉煤没眉媒镁每美昧寐妹媚门闷们萌蒙檬盟锰猛梦孟眯醚靡糜迷谜弥米秘觅泌蜜密幂棉眠绵冕免勉娩缅面苗描瞄藐秒渺庙妙蔑灭民抿皿敏悯闽明螟鸣铭名命谬摸"
  	],
  	[
  		"c440",
  		"腀",
  		5,
  		"腇腉腍腎腏腒腖腗腘腛",
  		4,
  		"腡腢腣腤腦腨腪腫腬腯腲腳腵腶腷腸膁膃",
  		4,
  		"膉膋膌膍膎膐膒",
  		5,
  		"膙膚膞",
  		4,
  		"膤膥"
  	],
  	[
  		"c480",
  		"膧膩膫",
  		7,
  		"膴",
  		5,
  		"膼膽膾膿臄臅臇臈臉臋臍",
  		6,
  		"摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谋牟某拇牡亩姆母墓暮幕募慕木目睦牧穆拿哪呐钠那娜纳氖乃奶耐奈南男难囊挠脑恼闹淖呢馁内嫩能妮霓倪泥尼拟你匿腻逆溺蔫拈年碾撵捻念娘酿鸟尿捏聂孽啮镊镍涅您柠狞凝宁"
  	],
  	[
  		"c540",
  		"臔",
  		14,
  		"臤臥臦臨臩臫臮",
  		4,
  		"臵",
  		5,
  		"臽臿舃與",
  		4,
  		"舎舏舑舓舕",
  		5,
  		"舝舠舤舥舦舧舩舮舲舺舼舽舿"
  	],
  	[
  		"c580",
  		"艀艁艂艃艅艆艈艊艌艍艎艐",
  		7,
  		"艙艛艜艝艞艠",
  		7,
  		"艩拧泞牛扭钮纽脓浓农弄奴努怒女暖虐疟挪懦糯诺哦欧鸥殴藕呕偶沤啪趴爬帕怕琶拍排牌徘湃派攀潘盘磐盼畔判叛乓庞旁耪胖抛咆刨炮袍跑泡呸胚培裴赔陪配佩沛喷盆砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯砒霹批披劈琵毗"
  	],
  	[
  		"c640",
  		"艪艫艬艭艱艵艶艷艸艻艼芀芁芃芅芆芇芉芌芐芓芔芕芖芚芛芞芠芢芣芧芲芵芶芺芻芼芿苀苂苃苅苆苉苐苖苙苚苝苢苧苨苩苪苬苭苮苰苲苳苵苶苸"
  	],
  	[
  		"c680",
  		"苺苼",
  		4,
  		"茊茋茍茐茒茓茖茘茙茝",
  		9,
  		"茩茪茮茰茲茷茻茽啤脾疲皮匹痞僻屁譬篇偏片骗飘漂瓢票撇瞥拼频贫品聘乒坪苹萍平凭瓶评屏坡泼颇婆破魄迫粕剖扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫掐"
  	],
  	[
  		"c740",
  		"茾茿荁荂荄荅荈荊",
  		4,
  		"荓荕",
  		4,
  		"荝荢荰",
  		6,
  		"荹荺荾",
  		6,
  		"莇莈莊莋莌莍莏莐莑莔莕莖莗莙莚莝莟莡",
  		6,
  		"莬莭莮"
  	],
  	[
  		"c780",
  		"莯莵莻莾莿菂菃菄菆菈菉菋菍菎菐菑菒菓菕菗菙菚菛菞菢菣菤菦菧菨菫菬菭恰洽牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉枪呛腔羌墙蔷强抢橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍切茄且怯窃钦侵亲秦琴勤芹擒禽寝沁青轻氢倾卿清擎晴氰情顷请庆琼穷秋丘邱球求囚酋泅趋区蛆曲躯屈驱渠"
  	],
  	[
  		"c840",
  		"菮華菳",
  		4,
  		"菺菻菼菾菿萀萂萅萇萈萉萊萐萒",
  		5,
  		"萙萚萛萞",
  		5,
  		"萩",
  		7,
  		"萲",
  		5,
  		"萹萺萻萾",
  		7,
  		"葇葈葉"
  	],
  	[
  		"c880",
  		"葊",
  		6,
  		"葒",
  		4,
  		"葘葝葞葟葠葢葤",
  		4,
  		"葪葮葯葰葲葴葷葹葻葼取娶龋趣去圈颧权醛泉全痊拳犬券劝缺炔瘸却鹊榷确雀裙群然燃冉染瓤壤攘嚷让饶扰绕惹热壬仁人忍韧任认刃妊纫扔仍日戎茸蓉荣融熔溶容绒冗揉柔肉茹蠕儒孺如辱乳汝入褥软阮蕊瑞锐闰润若弱撒洒萨腮鳃塞赛三叁"
  	],
  	[
  		"c940",
  		"葽",
  		4,
  		"蒃蒄蒅蒆蒊蒍蒏",
  		7,
  		"蒘蒚蒛蒝蒞蒟蒠蒢",
  		12,
  		"蒰蒱蒳蒵蒶蒷蒻蒼蒾蓀蓂蓃蓅蓆蓇蓈蓋蓌蓎蓏蓒蓔蓕蓗"
  	],
  	[
  		"c980",
  		"蓘",
  		4,
  		"蓞蓡蓢蓤蓧",
  		4,
  		"蓭蓮蓯蓱",
  		10,
  		"蓽蓾蔀蔁蔂伞散桑嗓丧搔骚扫嫂瑟色涩森僧莎砂杀刹沙纱傻啥煞筛晒珊苫杉山删煽衫闪陕擅赡膳善汕扇缮墒伤商赏晌上尚裳梢捎稍烧芍勺韶少哨邵绍奢赊蛇舌舍赦摄射慑涉社设砷申呻伸身深娠绅神沈审婶甚肾慎渗声生甥牲升绳"
  	],
  	[
  		"ca40",
  		"蔃",
  		8,
  		"蔍蔎蔏蔐蔒蔔蔕蔖蔘蔙蔛蔜蔝蔞蔠蔢",
  		8,
  		"蔭",
  		9,
  		"蔾",
  		4,
  		"蕄蕅蕆蕇蕋",
  		10
  	],
  	[
  		"ca80",
  		"蕗蕘蕚蕛蕜蕝蕟",
  		4,
  		"蕥蕦蕧蕩",
  		8,
  		"蕳蕵蕶蕷蕸蕼蕽蕿薀薁省盛剩胜圣师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试收手首守寿授售受瘦兽蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱"
  	],
  	[
  		"cb40",
  		"薂薃薆薈",
  		6,
  		"薐",
  		10,
  		"薝",
  		6,
  		"薥薦薧薩薫薬薭薱",
  		5,
  		"薸薺",
  		6,
  		"藂",
  		6,
  		"藊",
  		4,
  		"藑藒"
  	],
  	[
  		"cb80",
  		"藔藖",
  		5,
  		"藝",
  		6,
  		"藥藦藧藨藪",
  		14,
  		"恕刷耍摔衰甩帅栓拴霜双爽谁水睡税吮瞬顺舜说硕朔烁斯撕嘶思私司丝死肆寺嗣四伺似饲巳松耸怂颂送宋讼诵搜艘擞嗽苏酥俗素速粟僳塑溯宿诉肃酸蒜算虽隋随绥髓碎岁穗遂隧祟孙损笋蓑梭唆缩琐索锁所塌他它她塔"
  	],
  	[
  		"cc40",
  		"藹藺藼藽藾蘀",
  		4,
  		"蘆",
  		10,
  		"蘒蘓蘔蘕蘗",
  		15,
  		"蘨蘪",
  		13,
  		"蘹蘺蘻蘽蘾蘿虀"
  	],
  	[
  		"cc80",
  		"虁",
  		11,
  		"虒虓處",
  		4,
  		"虛虜虝號虠虡虣",
  		7,
  		"獭挞蹋踏胎苔抬台泰酞太态汰坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭汤塘搪堂棠膛唐糖倘躺淌趟烫掏涛滔绦萄桃逃淘陶讨套特藤腾疼誊梯剔踢锑提题蹄啼体替嚏惕涕剃屉天添填田甜恬舔腆挑条迢眺跳贴铁帖厅听烃"
  	],
  	[
  		"cd40",
  		"虭虯虰虲",
  		6,
  		"蚃",
  		6,
  		"蚎",
  		4,
  		"蚔蚖",
  		5,
  		"蚞",
  		4,
  		"蚥蚦蚫蚭蚮蚲蚳蚷蚸蚹蚻",
  		4,
  		"蛁蛂蛃蛅蛈蛌蛍蛒蛓蛕蛖蛗蛚蛜"
  	],
  	[
  		"cd80",
  		"蛝蛠蛡蛢蛣蛥蛦蛧蛨蛪蛫蛬蛯蛵蛶蛷蛺蛻蛼蛽蛿蜁蜄蜅蜆蜋蜌蜎蜏蜐蜑蜔蜖汀廷停亭庭挺艇通桐酮瞳同铜彤童桶捅筒统痛偷投头透凸秃突图徒途涂屠土吐兔湍团推颓腿蜕褪退吞屯臀拖托脱鸵陀驮驼椭妥拓唾挖哇蛙洼娃瓦袜歪外豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕汪王亡枉网往旺望忘妄威"
  	],
  	[
  		"ce40",
  		"蜙蜛蜝蜟蜠蜤蜦蜧蜨蜪蜫蜬蜭蜯蜰蜲蜳蜵蜶蜸蜹蜺蜼蜽蝀",
  		6,
  		"蝊蝋蝍蝏蝐蝑蝒蝔蝕蝖蝘蝚",
  		5,
  		"蝡蝢蝦",
  		7,
  		"蝯蝱蝲蝳蝵"
  	],
  	[
  		"ce80",
  		"蝷蝸蝹蝺蝿螀螁螄螆螇螉螊螌螎",
  		4,
  		"螔螕螖螘",
  		6,
  		"螠",
  		4,
  		"巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫瘟温蚊文闻纹吻稳紊问嗡翁瓮挝蜗涡窝我斡卧握沃巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误昔熙析西硒矽晰嘻吸锡牺"
  	],
  	[
  		"cf40",
  		"螥螦螧螩螪螮螰螱螲螴螶螷螸螹螻螼螾螿蟁",
  		4,
  		"蟇蟈蟉蟌",
  		4,
  		"蟔",
  		6,
  		"蟜蟝蟞蟟蟡蟢蟣蟤蟦蟧蟨蟩蟫蟬蟭蟯",
  		9
  	],
  	[
  		"cf80",
  		"蟺蟻蟼蟽蟿蠀蠁蠂蠄",
  		5,
  		"蠋",
  		7,
  		"蠔蠗蠘蠙蠚蠜",
  		4,
  		"蠣稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细瞎虾匣霞辖暇峡侠狭下厦夏吓掀锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象萧硝霄削哮嚣销消宵淆晓"
  	],
  	[
  		"d040",
  		"蠤",
  		13,
  		"蠳",
  		5,
  		"蠺蠻蠽蠾蠿衁衂衃衆",
  		5,
  		"衎",
  		5,
  		"衕衖衘衚",
  		6,
  		"衦衧衪衭衯衱衳衴衵衶衸衹衺"
  	],
  	[
  		"d080",
  		"衻衼袀袃袆袇袉袊袌袎袏袐袑袓袔袕袗",
  		4,
  		"袝",
  		4,
  		"袣袥",
  		5,
  		"小孝校肖啸笑效楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑薪芯锌欣辛新忻心信衅星腥猩惺兴刑型形邢行醒幸杏性姓兄凶胸匈汹雄熊休修羞朽嗅锈秀袖绣墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续轩喧宣悬旋玄"
  	],
  	[
  		"d140",
  		"袬袮袯袰袲",
  		4,
  		"袸袹袺袻袽袾袿裀裃裄裇裈裊裋裌裍裏裐裑裓裖裗裚",
  		4,
  		"裠裡裦裧裩",
  		6,
  		"裲裵裶裷裺裻製裿褀褁褃",
  		5
  	],
  	[
  		"d180",
  		"褉褋",
  		4,
  		"褑褔",
  		4,
  		"褜",
  		4,
  		"褢褣褤褦褧褨褩褬褭褮褯褱褲褳褵褷选癣眩绚靴薛学穴雪血勋熏循旬询寻驯巡殉汛训讯逊迅压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾邀腰妖瑶"
  	],
  	[
  		"d240",
  		"褸",
  		8,
  		"襂襃襅",
  		24,
  		"襠",
  		5,
  		"襧",
  		19,
  		"襼"
  	],
  	[
  		"d280",
  		"襽襾覀覂覄覅覇",
  		26,
  		"摇尧遥窑谣姚咬舀药要耀椰噎耶爷野冶也页掖业叶曳腋夜液一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎茵荫因殷音阴姻吟银淫寅饮尹引隐"
  	],
  	[
  		"d340",
  		"覢",
  		30,
  		"觃觍觓觔觕觗觘觙觛觝觟觠觡觢觤觧觨觩觪觬觭觮觰觱觲觴",
  		6
  	],
  	[
  		"d380",
  		"觻",
  		4,
  		"訁",
  		5,
  		"計",
  		21,
  		"印英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映哟拥佣臃痈庸雍踊蛹咏泳涌永恿勇用幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉"
  	],
  	[
  		"d440",
  		"訞",
  		31,
  		"訿",
  		8,
  		"詉",
  		21
  	],
  	[
  		"d480",
  		"詟",
  		25,
  		"詺",
  		6,
  		"浴寓裕预豫驭鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院曰约越跃钥岳粤月悦阅耘云郧匀陨允运蕴酝晕韵孕匝砸杂栽哉灾宰载再在咱攒暂赞赃脏葬遭糟凿藻枣早澡蚤躁噪造皂灶燥责择则泽贼怎增憎曾赠扎喳渣札轧"
  	],
  	[
  		"d540",
  		"誁",
  		7,
  		"誋",
  		7,
  		"誔",
  		46
  	],
  	[
  		"d580",
  		"諃",
  		32,
  		"铡闸眨栅榨咋乍炸诈摘斋宅窄债寨瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽樟章彰漳张掌涨杖丈帐账仗胀瘴障招昭找沼赵照罩兆肇召遮折哲蛰辙者锗蔗这浙珍斟真甄砧臻贞针侦枕疹诊震振镇阵蒸挣睁征狰争怔整拯正政"
  	],
  	[
  		"d640",
  		"諤",
  		34,
  		"謈",
  		27
  	],
  	[
  		"d680",
  		"謤謥謧",
  		30,
  		"帧症郑证芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒中盅忠钟衷终种肿重仲众舟周州洲诌粥轴肘帚咒皱宙昼骤珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑"
  	],
  	[
  		"d740",
  		"譆",
  		31,
  		"譧",
  		4,
  		"譭",
  		25
  	],
  	[
  		"d780",
  		"讇",
  		24,
  		"讬讱讻诇诐诪谉谞住注祝驻抓爪拽专砖转撰赚篆桩庄装妆撞壮状椎锥追赘坠缀谆准捉拙卓桌琢茁酌啄着灼浊兹咨资姿滋淄孜紫仔籽滓子自渍字鬃棕踪宗综总纵邹走奏揍租足卒族祖诅阻组钻纂嘴醉最罪尊遵昨左佐柞做作坐座"
  	],
  	[
  		"d840",
  		"谸",
  		8,
  		"豂豃豄豅豈豊豋豍",
  		7,
  		"豖豗豘豙豛",
  		5,
  		"豣",
  		6,
  		"豬",
  		6,
  		"豴豵豶豷豻",
  		6,
  		"貃貄貆貇"
  	],
  	[
  		"d880",
  		"貈貋貍",
  		6,
  		"貕貖貗貙",
  		20,
  		"亍丌兀丐廿卅丕亘丞鬲孬噩丨禺丿匕乇夭爻卮氐囟胤馗毓睾鼗丶亟鼐乜乩亓芈孛啬嘏仄厍厝厣厥厮靥赝匚叵匦匮匾赜卦卣刂刈刎刭刳刿剀剌剞剡剜蒯剽劂劁劐劓冂罔亻仃仉仂仨仡仫仞伛仳伢佤仵伥伧伉伫佞佧攸佚佝"
  	],
  	[
  		"d940",
  		"貮",
  		62
  	],
  	[
  		"d980",
  		"賭",
  		32,
  		"佟佗伲伽佶佴侑侉侃侏佾佻侪佼侬侔俦俨俪俅俚俣俜俑俟俸倩偌俳倬倏倮倭俾倜倌倥倨偾偃偕偈偎偬偻傥傧傩傺僖儆僭僬僦僮儇儋仝氽佘佥俎龠汆籴兮巽黉馘冁夔勹匍訇匐凫夙兕亠兖亳衮袤亵脔裒禀嬴蠃羸冫冱冽冼"
  	],
  	[
  		"da40",
  		"贎",
  		14,
  		"贠赑赒赗赟赥赨赩赪赬赮赯赱赲赸",
  		8,
  		"趂趃趆趇趈趉趌",
  		4,
  		"趒趓趕",
  		9,
  		"趠趡"
  	],
  	[
  		"da80",
  		"趢趤",
  		12,
  		"趲趶趷趹趻趽跀跁跂跅跇跈跉跊跍跐跒跓跔凇冖冢冥讠讦讧讪讴讵讷诂诃诋诏诎诒诓诔诖诘诙诜诟诠诤诨诩诮诰诳诶诹诼诿谀谂谄谇谌谏谑谒谔谕谖谙谛谘谝谟谠谡谥谧谪谫谮谯谲谳谵谶卩卺阝阢阡阱阪阽阼陂陉陔陟陧陬陲陴隈隍隗隰邗邛邝邙邬邡邴邳邶邺"
  	],
  	[
  		"db40",
  		"跕跘跙跜跠跡跢跥跦跧跩跭跮跰跱跲跴跶跼跾",
  		6,
  		"踆踇踈踋踍踎踐踑踒踓踕",
  		7,
  		"踠踡踤",
  		4,
  		"踫踭踰踲踳踴踶踷踸踻踼踾"
  	],
  	[
  		"db80",
  		"踿蹃蹅蹆蹌",
  		4,
  		"蹓",
  		5,
  		"蹚",
  		11,
  		"蹧蹨蹪蹫蹮蹱邸邰郏郅邾郐郄郇郓郦郢郜郗郛郫郯郾鄄鄢鄞鄣鄱鄯鄹酃酆刍奂劢劬劭劾哿勐勖勰叟燮矍廴凵凼鬯厶弁畚巯坌垩垡塾墼壅壑圩圬圪圳圹圮圯坜圻坂坩垅坫垆坼坻坨坭坶坳垭垤垌垲埏垧垴垓垠埕埘埚埙埒垸埴埯埸埤埝"
  	],
  	[
  		"dc40",
  		"蹳蹵蹷",
  		4,
  		"蹽蹾躀躂躃躄躆躈",
  		6,
  		"躑躒躓躕",
  		6,
  		"躝躟",
  		11,
  		"躭躮躰躱躳",
  		6,
  		"躻",
  		7
  	],
  	[
  		"dc80",
  		"軃",
  		10,
  		"軏",
  		21,
  		"堋堍埽埭堀堞堙塄堠塥塬墁墉墚墀馨鼙懿艹艽艿芏芊芨芄芎芑芗芙芫芸芾芰苈苊苣芘芷芮苋苌苁芩芴芡芪芟苄苎芤苡茉苷苤茏茇苜苴苒苘茌苻苓茑茚茆茔茕苠苕茜荑荛荜茈莒茼茴茱莛荞茯荏荇荃荟荀茗荠茭茺茳荦荥"
  	],
  	[
  		"dd40",
  		"軥",
  		62
  	],
  	[
  		"dd80",
  		"輤",
  		32,
  		"荨茛荩荬荪荭荮莰荸莳莴莠莪莓莜莅荼莶莩荽莸荻莘莞莨莺莼菁萁菥菘堇萘萋菝菽菖萜萸萑萆菔菟萏萃菸菹菪菅菀萦菰菡葜葑葚葙葳蒇蒈葺蒉葸萼葆葩葶蒌蒎萱葭蓁蓍蓐蓦蒽蓓蓊蒿蒺蓠蒡蒹蒴蒗蓥蓣蔌甍蔸蓰蔹蔟蔺"
  	],
  	[
  		"de40",
  		"轅",
  		32,
  		"轪辀辌辒辝辠辡辢辤辥辦辧辪辬辭辮辯農辳辴辵辷辸辺辻込辿迀迃迆"
  	],
  	[
  		"de80",
  		"迉",
  		4,
  		"迏迒迖迗迚迠迡迣迧迬迯迱迲迴迵迶迺迻迼迾迿逇逈逌逎逓逕逘蕖蔻蓿蓼蕙蕈蕨蕤蕞蕺瞢蕃蕲蕻薤薨薇薏蕹薮薜薅薹薷薰藓藁藜藿蘧蘅蘩蘖蘼廾弈夼奁耷奕奚奘匏尢尥尬尴扌扪抟抻拊拚拗拮挢拶挹捋捃掭揶捱捺掎掴捭掬掊捩掮掼揲揸揠揿揄揞揎摒揆掾摅摁搋搛搠搌搦搡摞撄摭撖"
  	],
  	[
  		"df40",
  		"這逜連逤逥逧",
  		5,
  		"逰",
  		4,
  		"逷逹逺逽逿遀遃遅遆遈",
  		4,
  		"過達違遖遙遚遜",
  		5,
  		"遤遦遧適遪遫遬遯",
  		4,
  		"遶",
  		6,
  		"遾邁"
  	],
  	[
  		"df80",
  		"還邅邆邇邉邊邌",
  		4,
  		"邒邔邖邘邚邜邞邟邠邤邥邧邨邩邫邭邲邷邼邽邿郀摺撷撸撙撺擀擐擗擤擢攉攥攮弋忒甙弑卟叱叽叩叨叻吒吖吆呋呒呓呔呖呃吡呗呙吣吲咂咔呷呱呤咚咛咄呶呦咝哐咭哂咴哒咧咦哓哔呲咣哕咻咿哌哙哚哜咩咪咤哝哏哞唛哧唠哽唔哳唢唣唏唑唧唪啧喏喵啉啭啁啕唿啐唼"
  	],
  	[
  		"e040",
  		"郂郃郆郈郉郋郌郍郒郔郕郖郘郙郚郞郟郠郣郤郥郩郪郬郮郰郱郲郳郵郶郷郹郺郻郼郿鄀鄁鄃鄅",
  		19,
  		"鄚鄛鄜"
  	],
  	[
  		"e080",
  		"鄝鄟鄠鄡鄤",
  		10,
  		"鄰鄲",
  		6,
  		"鄺",
  		8,
  		"酄唷啖啵啶啷唳唰啜喋嗒喃喱喹喈喁喟啾嗖喑啻嗟喽喾喔喙嗪嗷嗉嘟嗑嗫嗬嗔嗦嗝嗄嗯嗥嗲嗳嗌嗍嗨嗵嗤辔嘞嘈嘌嘁嘤嘣嗾嘀嘧嘭噘嘹噗嘬噍噢噙噜噌噔嚆噤噱噫噻噼嚅嚓嚯囔囗囝囡囵囫囹囿圄圊圉圜帏帙帔帑帱帻帼"
  	],
  	[
  		"e140",
  		"酅酇酈酑酓酔酕酖酘酙酛酜酟酠酦酧酨酫酭酳酺酻酼醀",
  		4,
  		"醆醈醊醎醏醓",
  		6,
  		"醜",
  		5,
  		"醤",
  		5,
  		"醫醬醰醱醲醳醶醷醸醹醻"
  	],
  	[
  		"e180",
  		"醼",
  		10,
  		"釈釋釐釒",
  		9,
  		"針",
  		8,
  		"帷幄幔幛幞幡岌屺岍岐岖岈岘岙岑岚岜岵岢岽岬岫岱岣峁岷峄峒峤峋峥崂崃崧崦崮崤崞崆崛嵘崾崴崽嵬嵛嵯嵝嵫嵋嵊嵩嵴嶂嶙嶝豳嶷巅彳彷徂徇徉後徕徙徜徨徭徵徼衢彡犭犰犴犷犸狃狁狎狍狒狨狯狩狲狴狷猁狳猃狺"
  	],
  	[
  		"e240",
  		"釦",
  		62
  	],
  	[
  		"e280",
  		"鈥",
  		32,
  		"狻猗猓猡猊猞猝猕猢猹猥猬猸猱獐獍獗獠獬獯獾舛夥飧夤夂饣饧",
  		5,
  		"饴饷饽馀馄馇馊馍馐馑馓馔馕庀庑庋庖庥庠庹庵庾庳赓廒廑廛廨廪膺忄忉忖忏怃忮怄忡忤忾怅怆忪忭忸怙怵怦怛怏怍怩怫怊怿怡恸恹恻恺恂"
  	],
  	[
  		"e340",
  		"鉆",
  		45,
  		"鉵",
  		16
  	],
  	[
  		"e380",
  		"銆",
  		7,
  		"銏",
  		24,
  		"恪恽悖悚悭悝悃悒悌悛惬悻悱惝惘惆惚悴愠愦愕愣惴愀愎愫慊慵憬憔憧憷懔懵忝隳闩闫闱闳闵闶闼闾阃阄阆阈阊阋阌阍阏阒阕阖阗阙阚丬爿戕氵汔汜汊沣沅沐沔沌汨汩汴汶沆沩泐泔沭泷泸泱泗沲泠泖泺泫泮沱泓泯泾"
  	],
  	[
  		"e440",
  		"銨",
  		5,
  		"銯",
  		24,
  		"鋉",
  		31
  	],
  	[
  		"e480",
  		"鋩",
  		32,
  		"洹洧洌浃浈洇洄洙洎洫浍洮洵洚浏浒浔洳涑浯涞涠浞涓涔浜浠浼浣渚淇淅淞渎涿淠渑淦淝淙渖涫渌涮渫湮湎湫溲湟溆湓湔渲渥湄滟溱溘滠漭滢溥溧溽溻溷滗溴滏溏滂溟潢潆潇漤漕滹漯漶潋潴漪漉漩澉澍澌潸潲潼潺濑"
  	],
  	[
  		"e540",
  		"錊",
  		51,
  		"錿",
  		10
  	],
  	[
  		"e580",
  		"鍊",
  		31,
  		"鍫濉澧澹澶濂濡濮濞濠濯瀚瀣瀛瀹瀵灏灞宀宄宕宓宥宸甯骞搴寤寮褰寰蹇謇辶迓迕迥迮迤迩迦迳迨逅逄逋逦逑逍逖逡逵逶逭逯遄遑遒遐遨遘遢遛暹遴遽邂邈邃邋彐彗彖彘尻咫屐屙孱屣屦羼弪弩弭艴弼鬻屮妁妃妍妩妪妣"
  	],
  	[
  		"e640",
  		"鍬",
  		34,
  		"鎐",
  		27
  	],
  	[
  		"e680",
  		"鎬",
  		29,
  		"鏋鏌鏍妗姊妫妞妤姒妲妯姗妾娅娆姝娈姣姘姹娌娉娲娴娑娣娓婀婧婊婕娼婢婵胬媪媛婷婺媾嫫媲嫒嫔媸嫠嫣嫱嫖嫦嫘嫜嬉嬗嬖嬲嬷孀尕尜孚孥孳孑孓孢驵驷驸驺驿驽骀骁骅骈骊骐骒骓骖骘骛骜骝骟骠骢骣骥骧纟纡纣纥纨纩"
  	],
  	[
  		"e740",
  		"鏎",
  		7,
  		"鏗",
  		54
  	],
  	[
  		"e780",
  		"鐎",
  		32,
  		"纭纰纾绀绁绂绉绋绌绐绔绗绛绠绡绨绫绮绯绱绲缍绶绺绻绾缁缂缃缇缈缋缌缏缑缒缗缙缜缛缟缡",
  		6,
  		"缪缫缬缭缯",
  		4,
  		"缵幺畿巛甾邕玎玑玮玢玟珏珂珑玷玳珀珉珈珥珙顼琊珩珧珞玺珲琏琪瑛琦琥琨琰琮琬"
  	],
  	[
  		"e840",
  		"鐯",
  		14,
  		"鐿",
  		43,
  		"鑬鑭鑮鑯"
  	],
  	[
  		"e880",
  		"鑰",
  		20,
  		"钑钖钘铇铏铓铔铚铦铻锜锠琛琚瑁瑜瑗瑕瑙瑷瑭瑾璜璎璀璁璇璋璞璨璩璐璧瓒璺韪韫韬杌杓杞杈杩枥枇杪杳枘枧杵枨枞枭枋杷杼柰栉柘栊柩枰栌柙枵柚枳柝栀柃枸柢栎柁柽栲栳桠桡桎桢桄桤梃栝桕桦桁桧桀栾桊桉栩梵梏桴桷梓桫棂楮棼椟椠棹"
  	],
  	[
  		"e940",
  		"锧锳锽镃镈镋镕镚镠镮镴镵長",
  		7,
  		"門",
  		42
  	],
  	[
  		"e980",
  		"閫",
  		32,
  		"椤棰椋椁楗棣椐楱椹楠楂楝榄楫榀榘楸椴槌榇榈槎榉楦楣楹榛榧榻榫榭槔榱槁槊槟榕槠榍槿樯槭樗樘橥槲橄樾檠橐橛樵檎橹樽樨橘橼檑檐檩檗檫猷獒殁殂殇殄殒殓殍殚殛殡殪轫轭轱轲轳轵轶轸轷轹轺轼轾辁辂辄辇辋"
  	],
  	[
  		"ea40",
  		"闌",
  		27,
  		"闬闿阇阓阘阛阞阠阣",
  		6,
  		"阫阬阭阯阰阷阸阹阺阾陁陃陊陎陏陑陒陓陖陗"
  	],
  	[
  		"ea80",
  		"陘陙陚陜陝陞陠陣陥陦陫陭",
  		4,
  		"陳陸",
  		12,
  		"隇隉隊辍辎辏辘辚軎戋戗戛戟戢戡戥戤戬臧瓯瓴瓿甏甑甓攴旮旯旰昊昙杲昃昕昀炅曷昝昴昱昶昵耆晟晔晁晏晖晡晗晷暄暌暧暝暾曛曜曦曩贲贳贶贻贽赀赅赆赈赉赇赍赕赙觇觊觋觌觎觏觐觑牮犟牝牦牯牾牿犄犋犍犏犒挈挲掰"
  	],
  	[
  		"eb40",
  		"隌階隑隒隓隕隖隚際隝",
  		9,
  		"隨",
  		7,
  		"隱隲隴隵隷隸隺隻隿雂雃雈雊雋雐雑雓雔雖",
  		9,
  		"雡",
  		6,
  		"雫"
  	],
  	[
  		"eb80",
  		"雬雭雮雰雱雲雴雵雸雺電雼雽雿霂霃霅霊霋霌霐霑霒霔霕霗",
  		4,
  		"霝霟霠搿擘耄毪毳毽毵毹氅氇氆氍氕氘氙氚氡氩氤氪氲攵敕敫牍牒牖爰虢刖肟肜肓肼朊肽肱肫肭肴肷胧胨胩胪胛胂胄胙胍胗朐胝胫胱胴胭脍脎胲胼朕脒豚脶脞脬脘脲腈腌腓腴腙腚腱腠腩腼腽腭腧塍媵膈膂膑滕膣膪臌朦臊膻"
  	],
  	[
  		"ec40",
  		"霡",
  		8,
  		"霫霬霮霯霱霳",
  		4,
  		"霺霻霼霽霿",
  		18,
  		"靔靕靗靘靚靜靝靟靣靤靦靧靨靪",
  		7
  	],
  	[
  		"ec80",
  		"靲靵靷",
  		4,
  		"靽",
  		7,
  		"鞆",
  		4,
  		"鞌鞎鞏鞐鞓鞕鞖鞗鞙",
  		4,
  		"臁膦欤欷欹歃歆歙飑飒飓飕飙飚殳彀毂觳斐齑斓於旆旄旃旌旎旒旖炀炜炖炝炻烀炷炫炱烨烊焐焓焖焯焱煳煜煨煅煲煊煸煺熘熳熵熨熠燠燔燧燹爝爨灬焘煦熹戾戽扃扈扉礻祀祆祉祛祜祓祚祢祗祠祯祧祺禅禊禚禧禳忑忐"
  	],
  	[
  		"ed40",
  		"鞞鞟鞡鞢鞤",
  		6,
  		"鞬鞮鞰鞱鞳鞵",
  		46
  	],
  	[
  		"ed80",
  		"韤韥韨韮",
  		4,
  		"韴韷",
  		23,
  		"怼恝恚恧恁恙恣悫愆愍慝憩憝懋懑戆肀聿沓泶淼矶矸砀砉砗砘砑斫砭砜砝砹砺砻砟砼砥砬砣砩硎硭硖硗砦硐硇硌硪碛碓碚碇碜碡碣碲碹碥磔磙磉磬磲礅磴礓礤礞礴龛黹黻黼盱眄眍盹眇眈眚眢眙眭眦眵眸睐睑睇睃睚睨"
  	],
  	[
  		"ee40",
  		"頏",
  		62
  	],
  	[
  		"ee80",
  		"顎",
  		32,
  		"睢睥睿瞍睽瞀瞌瞑瞟瞠瞰瞵瞽町畀畎畋畈畛畲畹疃罘罡罟詈罨罴罱罹羁罾盍盥蠲钅钆钇钋钊钌钍钏钐钔钗钕钚钛钜钣钤钫钪钭钬钯钰钲钴钶",
  		4,
  		"钼钽钿铄铈",
  		6,
  		"铐铑铒铕铖铗铙铘铛铞铟铠铢铤铥铧铨铪"
  	],
  	[
  		"ef40",
  		"顯",
  		5,
  		"颋颎颒颕颙颣風",
  		37,
  		"飏飐飔飖飗飛飜飝飠",
  		4
  	],
  	[
  		"ef80",
  		"飥飦飩",
  		30,
  		"铩铫铮铯铳铴铵铷铹铼铽铿锃锂锆锇锉锊锍锎锏锒",
  		4,
  		"锘锛锝锞锟锢锪锫锩锬锱锲锴锶锷锸锼锾锿镂锵镄镅镆镉镌镎镏镒镓镔镖镗镘镙镛镞镟镝镡镢镤",
  		8,
  		"镯镱镲镳锺矧矬雉秕秭秣秫稆嵇稃稂稞稔"
  	],
  	[
  		"f040",
  		"餈",
  		4,
  		"餎餏餑",
  		28,
  		"餯",
  		26
  	],
  	[
  		"f080",
  		"饊",
  		9,
  		"饖",
  		12,
  		"饤饦饳饸饹饻饾馂馃馉稹稷穑黏馥穰皈皎皓皙皤瓞瓠甬鸠鸢鸨",
  		4,
  		"鸲鸱鸶鸸鸷鸹鸺鸾鹁鹂鹄鹆鹇鹈鹉鹋鹌鹎鹑鹕鹗鹚鹛鹜鹞鹣鹦",
  		6,
  		"鹱鹭鹳疒疔疖疠疝疬疣疳疴疸痄疱疰痃痂痖痍痣痨痦痤痫痧瘃痱痼痿瘐瘀瘅瘌瘗瘊瘥瘘瘕瘙"
  	],
  	[
  		"f140",
  		"馌馎馚",
  		10,
  		"馦馧馩",
  		47
  	],
  	[
  		"f180",
  		"駙",
  		32,
  		"瘛瘼瘢瘠癀瘭瘰瘿瘵癃瘾瘳癍癞癔癜癖癫癯翊竦穸穹窀窆窈窕窦窠窬窨窭窳衤衩衲衽衿袂袢裆袷袼裉裢裎裣裥裱褚裼裨裾裰褡褙褓褛褊褴褫褶襁襦襻疋胥皲皴矜耒耔耖耜耠耢耥耦耧耩耨耱耋耵聃聆聍聒聩聱覃顸颀颃"
  	],
  	[
  		"f240",
  		"駺",
  		62
  	],
  	[
  		"f280",
  		"騹",
  		32,
  		"颉颌颍颏颔颚颛颞颟颡颢颥颦虍虔虬虮虿虺虼虻蚨蚍蚋蚬蚝蚧蚣蚪蚓蚩蚶蛄蚵蛎蚰蚺蚱蚯蛉蛏蚴蛩蛱蛲蛭蛳蛐蜓蛞蛴蛟蛘蛑蜃蜇蛸蜈蜊蜍蜉蜣蜻蜞蜥蜮蜚蜾蝈蜴蜱蜩蜷蜿螂蜢蝽蝾蝻蝠蝰蝌蝮螋蝓蝣蝼蝤蝙蝥螓螯螨蟒"
  	],
  	[
  		"f340",
  		"驚",
  		17,
  		"驲骃骉骍骎骔骕骙骦骩",
  		6,
  		"骲骳骴骵骹骻骽骾骿髃髄髆",
  		4,
  		"髍髎髏髐髒體髕髖髗髙髚髛髜"
  	],
  	[
  		"f380",
  		"髝髞髠髢髣髤髥髧髨髩髪髬髮髰",
  		8,
  		"髺髼",
  		6,
  		"鬄鬅鬆蟆螈螅螭螗螃螫蟥螬螵螳蟋蟓螽蟑蟀蟊蟛蟪蟠蟮蠖蠓蟾蠊蠛蠡蠹蠼缶罂罄罅舐竺竽笈笃笄笕笊笫笏筇笸笪笙笮笱笠笥笤笳笾笞筘筚筅筵筌筝筠筮筻筢筲筱箐箦箧箸箬箝箨箅箪箜箢箫箴篑篁篌篝篚篥篦篪簌篾篼簏簖簋"
  	],
  	[
  		"f440",
  		"鬇鬉",
  		5,
  		"鬐鬑鬒鬔",
  		10,
  		"鬠鬡鬢鬤",
  		10,
  		"鬰鬱鬳",
  		7,
  		"鬽鬾鬿魀魆魊魋魌魎魐魒魓魕",
  		5
  	],
  	[
  		"f480",
  		"魛",
  		32,
  		"簟簪簦簸籁籀臾舁舂舄臬衄舡舢舣舭舯舨舫舸舻舳舴舾艄艉艋艏艚艟艨衾袅袈裘裟襞羝羟羧羯羰羲籼敉粑粝粜粞粢粲粼粽糁糇糌糍糈糅糗糨艮暨羿翎翕翥翡翦翩翮翳糸絷綦綮繇纛麸麴赳趄趔趑趱赧赭豇豉酊酐酎酏酤"
  	],
  	[
  		"f540",
  		"魼",
  		62
  	],
  	[
  		"f580",
  		"鮻",
  		32,
  		"酢酡酰酩酯酽酾酲酴酹醌醅醐醍醑醢醣醪醭醮醯醵醴醺豕鹾趸跫踅蹙蹩趵趿趼趺跄跖跗跚跞跎跏跛跆跬跷跸跣跹跻跤踉跽踔踝踟踬踮踣踯踺蹀踹踵踽踱蹉蹁蹂蹑蹒蹊蹰蹶蹼蹯蹴躅躏躔躐躜躞豸貂貊貅貘貔斛觖觞觚觜"
  	],
  	[
  		"f640",
  		"鯜",
  		62
  	],
  	[
  		"f680",
  		"鰛",
  		32,
  		"觥觫觯訾謦靓雩雳雯霆霁霈霏霎霪霭霰霾龀龃龅",
  		5,
  		"龌黾鼋鼍隹隼隽雎雒瞿雠銎銮鋈錾鍪鏊鎏鐾鑫鱿鲂鲅鲆鲇鲈稣鲋鲎鲐鲑鲒鲔鲕鲚鲛鲞",
  		5,
  		"鲥",
  		4,
  		"鲫鲭鲮鲰",
  		7,
  		"鲺鲻鲼鲽鳄鳅鳆鳇鳊鳋"
  	],
  	[
  		"f740",
  		"鰼",
  		62
  	],
  	[
  		"f780",
  		"鱻鱽鱾鲀鲃鲄鲉鲊鲌鲏鲓鲖鲗鲘鲙鲝鲪鲬鲯鲹鲾",
  		4,
  		"鳈鳉鳑鳒鳚鳛鳠鳡鳌",
  		4,
  		"鳓鳔鳕鳗鳘鳙鳜鳝鳟鳢靼鞅鞑鞒鞔鞯鞫鞣鞲鞴骱骰骷鹘骶骺骼髁髀髅髂髋髌髑魅魃魇魉魈魍魑飨餍餮饕饔髟髡髦髯髫髻髭髹鬈鬏鬓鬟鬣麽麾縻麂麇麈麋麒鏖麝麟黛黜黝黠黟黢黩黧黥黪黯鼢鼬鼯鼹鼷鼽鼾齄"
  	],
  	[
  		"f840",
  		"鳣",
  		62
  	],
  	[
  		"f880",
  		"鴢",
  		32
  	],
  	[
  		"f940",
  		"鵃",
  		62
  	],
  	[
  		"f980",
  		"鶂",
  		32
  	],
  	[
  		"fa40",
  		"鶣",
  		62
  	],
  	[
  		"fa80",
  		"鷢",
  		32
  	],
  	[
  		"fb40",
  		"鸃",
  		27,
  		"鸤鸧鸮鸰鸴鸻鸼鹀鹍鹐鹒鹓鹔鹖鹙鹝鹟鹠鹡鹢鹥鹮鹯鹲鹴",
  		9,
  		"麀"
  	],
  	[
  		"fb80",
  		"麁麃麄麅麆麉麊麌",
  		5,
  		"麔",
  		8,
  		"麞麠",
  		5,
  		"麧麨麩麪"
  	],
  	[
  		"fc40",
  		"麫",
  		8,
  		"麵麶麷麹麺麼麿",
  		4,
  		"黅黆黇黈黊黋黌黐黒黓黕黖黗黙黚點黡黣黤黦黨黫黬黭黮黰",
  		8,
  		"黺黽黿",
  		6
  	],
  	[
  		"fc80",
  		"鼆",
  		4,
  		"鼌鼏鼑鼒鼔鼕鼖鼘鼚",
  		5,
  		"鼡鼣",
  		8,
  		"鼭鼮鼰鼱"
  	],
  	[
  		"fd40",
  		"鼲",
  		4,
  		"鼸鼺鼼鼿",
  		4,
  		"齅",
  		10,
  		"齒",
  		38
  	],
  	[
  		"fd80",
  		"齹",
  		5,
  		"龁龂龍",
  		11,
  		"龜龝龞龡",
  		4,
  		"郎凉秊裏隣"
  	],
  	[
  		"fe40",
  		"兀嗀﨎﨏﨑﨓﨔礼﨟蘒﨡﨣﨤﨧﨨﨩"
  	]
  ];

  var cp936$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': cp936
  });

  var gbkAdded = [
  	[
  		"a140",
  		"",
  		62
  	],
  	[
  		"a180",
  		"",
  		32
  	],
  	[
  		"a240",
  		"",
  		62
  	],
  	[
  		"a280",
  		"",
  		32
  	],
  	[
  		"a2ab",
  		"",
  		5
  	],
  	[
  		"a2e3",
  		"€"
  	],
  	[
  		"a2ef",
  		""
  	],
  	[
  		"a2fd",
  		""
  	],
  	[
  		"a340",
  		"",
  		62
  	],
  	[
  		"a380",
  		"",
  		31,
  		"　"
  	],
  	[
  		"a440",
  		"",
  		62
  	],
  	[
  		"a480",
  		"",
  		32
  	],
  	[
  		"a4f4",
  		"",
  		10
  	],
  	[
  		"a540",
  		"",
  		62
  	],
  	[
  		"a580",
  		"",
  		32
  	],
  	[
  		"a5f7",
  		"",
  		7
  	],
  	[
  		"a640",
  		"",
  		62
  	],
  	[
  		"a680",
  		"",
  		32
  	],
  	[
  		"a6b9",
  		"",
  		7
  	],
  	[
  		"a6d9",
  		"",
  		6
  	],
  	[
  		"a6ec",
  		""
  	],
  	[
  		"a6f3",
  		""
  	],
  	[
  		"a6f6",
  		"",
  		8
  	],
  	[
  		"a740",
  		"",
  		62
  	],
  	[
  		"a780",
  		"",
  		32
  	],
  	[
  		"a7c2",
  		"",
  		14
  	],
  	[
  		"a7f2",
  		"",
  		12
  	],
  	[
  		"a896",
  		"",
  		10
  	],
  	[
  		"a8bc",
  		"ḿ"
  	],
  	[
  		"a8bf",
  		"ǹ"
  	],
  	[
  		"a8c1",
  		""
  	],
  	[
  		"a8ea",
  		"",
  		20
  	],
  	[
  		"a958",
  		""
  	],
  	[
  		"a95b",
  		""
  	],
  	[
  		"a95d",
  		""
  	],
  	[
  		"a989",
  		"〾⿰",
  		11
  	],
  	[
  		"a997",
  		"",
  		12
  	],
  	[
  		"a9f0",
  		"",
  		14
  	],
  	[
  		"aaa1",
  		"",
  		93
  	],
  	[
  		"aba1",
  		"",
  		93
  	],
  	[
  		"aca1",
  		"",
  		93
  	],
  	[
  		"ada1",
  		"",
  		93
  	],
  	[
  		"aea1",
  		"",
  		93
  	],
  	[
  		"afa1",
  		"",
  		93
  	],
  	[
  		"d7fa",
  		"",
  		4
  	],
  	[
  		"f8a1",
  		"",
  		93
  	],
  	[
  		"f9a1",
  		"",
  		93
  	],
  	[
  		"faa1",
  		"",
  		93
  	],
  	[
  		"fba1",
  		"",
  		93
  	],
  	[
  		"fca1",
  		"",
  		93
  	],
  	[
  		"fda1",
  		"",
  		93
  	],
  	[
  		"fe50",
  		"⺁⺄㑳㑇⺈⺋㖞㘚㘎⺌⺗㥮㤘㧏㧟㩳㧐㭎㱮㳠⺧⺪䁖䅟⺮䌷⺳⺶⺷䎱䎬⺻䏝䓖䙡䙌"
  	],
  	[
  		"fe80",
  		"䜣䜩䝼䞍⻊䥇䥺䥽䦂䦃䦅䦆䦟䦛䦷䦶䲣䲟䲠䲡䱷䲢䴓",
  		6,
  		"䶮",
  		93
  	],
  	[
  		"8135f437",
  		""
  	]
  ];

  var gbkAdded$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': gbkAdded
  });

  var uChars = [
  	128,
  	165,
  	169,
  	178,
  	184,
  	216,
  	226,
  	235,
  	238,
  	244,
  	248,
  	251,
  	253,
  	258,
  	276,
  	284,
  	300,
  	325,
  	329,
  	334,
  	364,
  	463,
  	465,
  	467,
  	469,
  	471,
  	473,
  	475,
  	477,
  	506,
  	594,
  	610,
  	712,
  	716,
  	730,
  	930,
  	938,
  	962,
  	970,
  	1026,
  	1104,
  	1106,
  	8209,
  	8215,
  	8218,
  	8222,
  	8231,
  	8241,
  	8244,
  	8246,
  	8252,
  	8365,
  	8452,
  	8454,
  	8458,
  	8471,
  	8482,
  	8556,
  	8570,
  	8596,
  	8602,
  	8713,
  	8720,
  	8722,
  	8726,
  	8731,
  	8737,
  	8740,
  	8742,
  	8748,
  	8751,
  	8760,
  	8766,
  	8777,
  	8781,
  	8787,
  	8802,
  	8808,
  	8816,
  	8854,
  	8858,
  	8870,
  	8896,
  	8979,
  	9322,
  	9372,
  	9548,
  	9588,
  	9616,
  	9622,
  	9634,
  	9652,
  	9662,
  	9672,
  	9676,
  	9680,
  	9702,
  	9735,
  	9738,
  	9793,
  	9795,
  	11906,
  	11909,
  	11913,
  	11917,
  	11928,
  	11944,
  	11947,
  	11951,
  	11956,
  	11960,
  	11964,
  	11979,
  	12284,
  	12292,
  	12312,
  	12319,
  	12330,
  	12351,
  	12436,
  	12447,
  	12535,
  	12543,
  	12586,
  	12842,
  	12850,
  	12964,
  	13200,
  	13215,
  	13218,
  	13253,
  	13263,
  	13267,
  	13270,
  	13384,
  	13428,
  	13727,
  	13839,
  	13851,
  	14617,
  	14703,
  	14801,
  	14816,
  	14964,
  	15183,
  	15471,
  	15585,
  	16471,
  	16736,
  	17208,
  	17325,
  	17330,
  	17374,
  	17623,
  	17997,
  	18018,
  	18212,
  	18218,
  	18301,
  	18318,
  	18760,
  	18811,
  	18814,
  	18820,
  	18823,
  	18844,
  	18848,
  	18872,
  	19576,
  	19620,
  	19738,
  	19887,
  	40870,
  	59244,
  	59336,
  	59367,
  	59413,
  	59417,
  	59423,
  	59431,
  	59437,
  	59443,
  	59452,
  	59460,
  	59478,
  	59493,
  	63789,
  	63866,
  	63894,
  	63976,
  	63986,
  	64016,
  	64018,
  	64021,
  	64025,
  	64034,
  	64037,
  	64042,
  	65074,
  	65093,
  	65107,
  	65112,
  	65127,
  	65132,
  	65375,
  	65510,
  	65536
  ];
  var gbChars = [
  	0,
  	36,
  	38,
  	45,
  	50,
  	81,
  	89,
  	95,
  	96,
  	100,
  	103,
  	104,
  	105,
  	109,
  	126,
  	133,
  	148,
  	172,
  	175,
  	179,
  	208,
  	306,
  	307,
  	308,
  	309,
  	310,
  	311,
  	312,
  	313,
  	341,
  	428,
  	443,
  	544,
  	545,
  	558,
  	741,
  	742,
  	749,
  	750,
  	805,
  	819,
  	820,
  	7922,
  	7924,
  	7925,
  	7927,
  	7934,
  	7943,
  	7944,
  	7945,
  	7950,
  	8062,
  	8148,
  	8149,
  	8152,
  	8164,
  	8174,
  	8236,
  	8240,
  	8262,
  	8264,
  	8374,
  	8380,
  	8381,
  	8384,
  	8388,
  	8390,
  	8392,
  	8393,
  	8394,
  	8396,
  	8401,
  	8406,
  	8416,
  	8419,
  	8424,
  	8437,
  	8439,
  	8445,
  	8482,
  	8485,
  	8496,
  	8521,
  	8603,
  	8936,
  	8946,
  	9046,
  	9050,
  	9063,
  	9066,
  	9076,
  	9092,
  	9100,
  	9108,
  	9111,
  	9113,
  	9131,
  	9162,
  	9164,
  	9218,
  	9219,
  	11329,
  	11331,
  	11334,
  	11336,
  	11346,
  	11361,
  	11363,
  	11366,
  	11370,
  	11372,
  	11375,
  	11389,
  	11682,
  	11686,
  	11687,
  	11692,
  	11694,
  	11714,
  	11716,
  	11723,
  	11725,
  	11730,
  	11736,
  	11982,
  	11989,
  	12102,
  	12336,
  	12348,
  	12350,
  	12384,
  	12393,
  	12395,
  	12397,
  	12510,
  	12553,
  	12851,
  	12962,
  	12973,
  	13738,
  	13823,
  	13919,
  	13933,
  	14080,
  	14298,
  	14585,
  	14698,
  	15583,
  	15847,
  	16318,
  	16434,
  	16438,
  	16481,
  	16729,
  	17102,
  	17122,
  	17315,
  	17320,
  	17402,
  	17418,
  	17859,
  	17909,
  	17911,
  	17915,
  	17916,
  	17936,
  	17939,
  	17961,
  	18664,
  	18703,
  	18814,
  	18962,
  	19043,
  	33469,
  	33470,
  	33471,
  	33484,
  	33485,
  	33490,
  	33497,
  	33501,
  	33505,
  	33513,
  	33520,
  	33536,
  	33550,
  	37845,
  	37921,
  	37948,
  	38029,
  	38038,
  	38064,
  	38065,
  	38066,
  	38069,
  	38075,
  	38076,
  	38078,
  	39108,
  	39109,
  	39113,
  	39114,
  	39115,
  	39116,
  	39265,
  	39394,
  	189000
  ];
  var gb18030Ranges = {
  	uChars: uChars,
  	gbChars: gbChars
  };

  var gb18030Ranges$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    uChars: uChars,
    gbChars: gbChars,
    'default': gb18030Ranges
  });

  var cp949 = [
  	[
  		"0",
  		"\u0000",
  		127
  	],
  	[
  		"8141",
  		"갂갃갅갆갋",
  		4,
  		"갘갞갟갡갢갣갥",
  		6,
  		"갮갲갳갴"
  	],
  	[
  		"8161",
  		"갵갶갷갺갻갽갾갿걁",
  		9,
  		"걌걎",
  		5,
  		"걕"
  	],
  	[
  		"8181",
  		"걖걗걙걚걛걝",
  		18,
  		"걲걳걵걶걹걻",
  		4,
  		"겂겇겈겍겎겏겑겒겓겕",
  		6,
  		"겞겢",
  		5,
  		"겫겭겮겱",
  		6,
  		"겺겾겿곀곂곃곅곆곇곉곊곋곍",
  		7,
  		"곖곘",
  		7,
  		"곢곣곥곦곩곫곭곮곲곴곷",
  		4,
  		"곾곿괁괂괃괅괇",
  		4,
  		"괎괐괒괓"
  	],
  	[
  		"8241",
  		"괔괕괖괗괙괚괛괝괞괟괡",
  		7,
  		"괪괫괮",
  		5
  	],
  	[
  		"8261",
  		"괶괷괹괺괻괽",
  		6,
  		"굆굈굊",
  		5,
  		"굑굒굓굕굖굗"
  	],
  	[
  		"8281",
  		"굙",
  		7,
  		"굢굤",
  		7,
  		"굮굯굱굲굷굸굹굺굾궀궃",
  		4,
  		"궊궋궍궎궏궑",
  		10,
  		"궞",
  		5,
  		"궥",
  		17,
  		"궸",
  		7,
  		"귂귃귅귆귇귉",
  		6,
  		"귒귔",
  		7,
  		"귝귞귟귡귢귣귥",
  		18
  	],
  	[
  		"8341",
  		"귺귻귽귾긂",
  		5,
  		"긊긌긎",
  		5,
  		"긕",
  		7
  	],
  	[
  		"8361",
  		"긝",
  		18,
  		"긲긳긵긶긹긻긼"
  	],
  	[
  		"8381",
  		"긽긾긿깂깄깇깈깉깋깏깑깒깓깕깗",
  		4,
  		"깞깢깣깤깦깧깪깫깭깮깯깱",
  		6,
  		"깺깾",
  		5,
  		"꺆",
  		5,
  		"꺍",
  		46,
  		"꺿껁껂껃껅",
  		6,
  		"껎껒",
  		5,
  		"껚껛껝",
  		8
  	],
  	[
  		"8441",
  		"껦껧껩껪껬껮",
  		5,
  		"껵껶껷껹껺껻껽",
  		8
  	],
  	[
  		"8461",
  		"꼆꼉꼊꼋꼌꼎꼏꼑",
  		18
  	],
  	[
  		"8481",
  		"꼤",
  		7,
  		"꼮꼯꼱꼳꼵",
  		6,
  		"꼾꽀꽄꽅꽆꽇꽊",
  		5,
  		"꽑",
  		10,
  		"꽞",
  		5,
  		"꽦",
  		18,
  		"꽺",
  		5,
  		"꾁꾂꾃꾅꾆꾇꾉",
  		6,
  		"꾒꾓꾔꾖",
  		5,
  		"꾝",
  		26,
  		"꾺꾻꾽꾾"
  	],
  	[
  		"8541",
  		"꾿꿁",
  		5,
  		"꿊꿌꿏",
  		4,
  		"꿕",
  		6,
  		"꿝",
  		4
  	],
  	[
  		"8561",
  		"꿢",
  		5,
  		"꿪",
  		5,
  		"꿲꿳꿵꿶꿷꿹",
  		6,
  		"뀂뀃"
  	],
  	[
  		"8581",
  		"뀅",
  		6,
  		"뀍뀎뀏뀑뀒뀓뀕",
  		6,
  		"뀞",
  		9,
  		"뀩",
  		26,
  		"끆끇끉끋끍끏끐끑끒끖끘끚끛끜끞",
  		29,
  		"끾끿낁낂낃낅",
  		6,
  		"낎낐낒",
  		5,
  		"낛낝낞낣낤"
  	],
  	[
  		"8641",
  		"낥낦낧낪낰낲낶낷낹낺낻낽",
  		6,
  		"냆냊",
  		5,
  		"냒"
  	],
  	[
  		"8661",
  		"냓냕냖냗냙",
  		6,
  		"냡냢냣냤냦",
  		10
  	],
  	[
  		"8681",
  		"냱",
  		22,
  		"넊넍넎넏넑넔넕넖넗넚넞",
  		4,
  		"넦넧넩넪넫넭",
  		6,
  		"넶넺",
  		5,
  		"녂녃녅녆녇녉",
  		6,
  		"녒녓녖녗녙녚녛녝녞녟녡",
  		22,
  		"녺녻녽녾녿놁놃",
  		4,
  		"놊놌놎놏놐놑놕놖놗놙놚놛놝"
  	],
  	[
  		"8741",
  		"놞",
  		9,
  		"놩",
  		15
  	],
  	[
  		"8761",
  		"놹",
  		18,
  		"뇍뇎뇏뇑뇒뇓뇕"
  	],
  	[
  		"8781",
  		"뇖",
  		5,
  		"뇞뇠",
  		7,
  		"뇪뇫뇭뇮뇯뇱",
  		7,
  		"뇺뇼뇾",
  		5,
  		"눆눇눉눊눍",
  		6,
  		"눖눘눚",
  		5,
  		"눡",
  		18,
  		"눵",
  		6,
  		"눽",
  		26,
  		"뉙뉚뉛뉝뉞뉟뉡",
  		6,
  		"뉪",
  		4
  	],
  	[
  		"8841",
  		"뉯",
  		4,
  		"뉶",
  		5,
  		"뉽",
  		6,
  		"늆늇늈늊",
  		4
  	],
  	[
  		"8861",
  		"늏늒늓늕늖늗늛",
  		4,
  		"늢늤늧늨늩늫늭늮늯늱늲늳늵늶늷"
  	],
  	[
  		"8881",
  		"늸",
  		15,
  		"닊닋닍닎닏닑닓",
  		4,
  		"닚닜닞닟닠닡닣닧닩닪닰닱닲닶닼닽닾댂댃댅댆댇댉",
  		6,
  		"댒댖",
  		5,
  		"댝",
  		54,
  		"덗덙덚덝덠덡덢덣"
  	],
  	[
  		"8941",
  		"덦덨덪덬덭덯덲덳덵덶덷덹",
  		6,
  		"뎂뎆",
  		5,
  		"뎍"
  	],
  	[
  		"8961",
  		"뎎뎏뎑뎒뎓뎕",
  		10,
  		"뎢",
  		5,
  		"뎩뎪뎫뎭"
  	],
  	[
  		"8981",
  		"뎮",
  		21,
  		"돆돇돉돊돍돏돑돒돓돖돘돚돜돞돟돡돢돣돥돦돧돩",
  		18,
  		"돽",
  		18,
  		"됑",
  		6,
  		"됙됚됛됝됞됟됡",
  		6,
  		"됪됬",
  		7,
  		"됵",
  		15
  	],
  	[
  		"8a41",
  		"둅",
  		10,
  		"둒둓둕둖둗둙",
  		6,
  		"둢둤둦"
  	],
  	[
  		"8a61",
  		"둧",
  		4,
  		"둭",
  		18,
  		"뒁뒂"
  	],
  	[
  		"8a81",
  		"뒃",
  		4,
  		"뒉",
  		19,
  		"뒞",
  		5,
  		"뒥뒦뒧뒩뒪뒫뒭",
  		7,
  		"뒶뒸뒺",
  		5,
  		"듁듂듃듅듆듇듉",
  		6,
  		"듑듒듓듔듖",
  		5,
  		"듞듟듡듢듥듧",
  		4,
  		"듮듰듲",
  		5,
  		"듹",
  		26,
  		"딖딗딙딚딝"
  	],
  	[
  		"8b41",
  		"딞",
  		5,
  		"딦딫",
  		4,
  		"딲딳딵딶딷딹",
  		6,
  		"땂땆"
  	],
  	[
  		"8b61",
  		"땇땈땉땊땎땏땑땒땓땕",
  		6,
  		"땞땢",
  		8
  	],
  	[
  		"8b81",
  		"땫",
  		52,
  		"떢떣떥떦떧떩떬떭떮떯떲떶",
  		4,
  		"떾떿뗁뗂뗃뗅",
  		6,
  		"뗎뗒",
  		5,
  		"뗙",
  		18,
  		"뗭",
  		18
  	],
  	[
  		"8c41",
  		"똀",
  		15,
  		"똒똓똕똖똗똙",
  		4
  	],
  	[
  		"8c61",
  		"똞",
  		6,
  		"똦",
  		5,
  		"똭",
  		6,
  		"똵",
  		5
  	],
  	[
  		"8c81",
  		"똻",
  		12,
  		"뙉",
  		26,
  		"뙥뙦뙧뙩",
  		50,
  		"뚞뚟뚡뚢뚣뚥",
  		5,
  		"뚭뚮뚯뚰뚲",
  		16
  	],
  	[
  		"8d41",
  		"뛃",
  		16,
  		"뛕",
  		8
  	],
  	[
  		"8d61",
  		"뛞",
  		17,
  		"뛱뛲뛳뛵뛶뛷뛹뛺"
  	],
  	[
  		"8d81",
  		"뛻",
  		4,
  		"뜂뜃뜄뜆",
  		33,
  		"뜪뜫뜭뜮뜱",
  		6,
  		"뜺뜼",
  		7,
  		"띅띆띇띉띊띋띍",
  		6,
  		"띖",
  		9,
  		"띡띢띣띥띦띧띩",
  		6,
  		"띲띴띶",
  		5,
  		"띾띿랁랂랃랅",
  		6,
  		"랎랓랔랕랚랛랝랞"
  	],
  	[
  		"8e41",
  		"랟랡",
  		6,
  		"랪랮",
  		5,
  		"랶랷랹",
  		8
  	],
  	[
  		"8e61",
  		"럂",
  		4,
  		"럈럊",
  		19
  	],
  	[
  		"8e81",
  		"럞",
  		13,
  		"럮럯럱럲럳럵",
  		6,
  		"럾렂",
  		4,
  		"렊렋렍렎렏렑",
  		6,
  		"렚렜렞",
  		5,
  		"렦렧렩렪렫렭",
  		6,
  		"렶렺",
  		5,
  		"롁롂롃롅",
  		11,
  		"롒롔",
  		7,
  		"롞롟롡롢롣롥",
  		6,
  		"롮롰롲",
  		5,
  		"롹롺롻롽",
  		7
  	],
  	[
  		"8f41",
  		"뢅",
  		7,
  		"뢎",
  		17
  	],
  	[
  		"8f61",
  		"뢠",
  		7,
  		"뢩",
  		6,
  		"뢱뢲뢳뢵뢶뢷뢹",
  		4
  	],
  	[
  		"8f81",
  		"뢾뢿룂룄룆",
  		5,
  		"룍룎룏룑룒룓룕",
  		7,
  		"룞룠룢",
  		5,
  		"룪룫룭룮룯룱",
  		6,
  		"룺룼룾",
  		5,
  		"뤅",
  		18,
  		"뤙",
  		6,
  		"뤡",
  		26,
  		"뤾뤿륁륂륃륅",
  		6,
  		"륍륎륐륒",
  		5
  	],
  	[
  		"9041",
  		"륚륛륝륞륟륡",
  		6,
  		"륪륬륮",
  		5,
  		"륶륷륹륺륻륽"
  	],
  	[
  		"9061",
  		"륾",
  		5,
  		"릆릈릋릌릏",
  		15
  	],
  	[
  		"9081",
  		"릟",
  		12,
  		"릮릯릱릲릳릵",
  		6,
  		"릾맀맂",
  		5,
  		"맊맋맍맓",
  		4,
  		"맚맜맟맠맢맦맧맩맪맫맭",
  		6,
  		"맶맻",
  		4,
  		"먂",
  		5,
  		"먉",
  		11,
  		"먖",
  		33,
  		"먺먻먽먾먿멁멃멄멅멆"
  	],
  	[
  		"9141",
  		"멇멊멌멏멐멑멒멖멗멙멚멛멝",
  		6,
  		"멦멪",
  		5
  	],
  	[
  		"9161",
  		"멲멳멵멶멷멹",
  		9,
  		"몆몈몉몊몋몍",
  		5
  	],
  	[
  		"9181",
  		"몓",
  		20,
  		"몪몭몮몯몱몳",
  		4,
  		"몺몼몾",
  		5,
  		"뫅뫆뫇뫉",
  		14,
  		"뫚",
  		33,
  		"뫽뫾뫿묁묂묃묅",
  		7,
  		"묎묐묒",
  		5,
  		"묙묚묛묝묞묟묡",
  		6
  	],
  	[
  		"9241",
  		"묨묪묬",
  		7,
  		"묷묹묺묿",
  		4,
  		"뭆뭈뭊뭋뭌뭎뭑뭒"
  	],
  	[
  		"9261",
  		"뭓뭕뭖뭗뭙",
  		7,
  		"뭢뭤",
  		7,
  		"뭭",
  		4
  	],
  	[
  		"9281",
  		"뭲",
  		21,
  		"뮉뮊뮋뮍뮎뮏뮑",
  		18,
  		"뮥뮦뮧뮩뮪뮫뮭",
  		6,
  		"뮵뮶뮸",
  		7,
  		"믁믂믃믅믆믇믉",
  		6,
  		"믑믒믔",
  		35,
  		"믺믻믽믾밁"
  	],
  	[
  		"9341",
  		"밃",
  		4,
  		"밊밎밐밒밓밙밚밠밡밢밣밦밨밪밫밬밮밯밲밳밵"
  	],
  	[
  		"9361",
  		"밶밷밹",
  		6,
  		"뱂뱆뱇뱈뱊뱋뱎뱏뱑",
  		8
  	],
  	[
  		"9381",
  		"뱚뱛뱜뱞",
  		37,
  		"벆벇벉벊벍벏",
  		4,
  		"벖벘벛",
  		4,
  		"벢벣벥벦벩",
  		6,
  		"벲벶",
  		5,
  		"벾벿볁볂볃볅",
  		7,
  		"볎볒볓볔볖볗볙볚볛볝",
  		22,
  		"볷볹볺볻볽"
  	],
  	[
  		"9441",
  		"볾",
  		5,
  		"봆봈봊",
  		5,
  		"봑봒봓봕",
  		8
  	],
  	[
  		"9461",
  		"봞",
  		5,
  		"봥",
  		6,
  		"봭",
  		12
  	],
  	[
  		"9481",
  		"봺",
  		5,
  		"뵁",
  		6,
  		"뵊뵋뵍뵎뵏뵑",
  		6,
  		"뵚",
  		9,
  		"뵥뵦뵧뵩",
  		22,
  		"붂붃붅붆붋",
  		4,
  		"붒붔붖붗붘붛붝",
  		6,
  		"붥",
  		10,
  		"붱",
  		6,
  		"붹",
  		24
  	],
  	[
  		"9541",
  		"뷒뷓뷖뷗뷙뷚뷛뷝",
  		11,
  		"뷪",
  		5,
  		"뷱"
  	],
  	[
  		"9561",
  		"뷲뷳뷵뷶뷷뷹",
  		6,
  		"븁븂븄븆",
  		5,
  		"븎븏븑븒븓"
  	],
  	[
  		"9581",
  		"븕",
  		6,
  		"븞븠",
  		35,
  		"빆빇빉빊빋빍빏",
  		4,
  		"빖빘빜빝빞빟빢빣빥빦빧빩빫",
  		4,
  		"빲빶",
  		4,
  		"빾빿뺁뺂뺃뺅",
  		6,
  		"뺎뺒",
  		5,
  		"뺚",
  		13,
  		"뺩",
  		14
  	],
  	[
  		"9641",
  		"뺸",
  		23,
  		"뻒뻓"
  	],
  	[
  		"9661",
  		"뻕뻖뻙",
  		6,
  		"뻡뻢뻦",
  		5,
  		"뻭",
  		8
  	],
  	[
  		"9681",
  		"뻶",
  		10,
  		"뼂",
  		5,
  		"뼊",
  		13,
  		"뼚뼞",
  		33,
  		"뽂뽃뽅뽆뽇뽉",
  		6,
  		"뽒뽓뽔뽖",
  		44
  	],
  	[
  		"9741",
  		"뾃",
  		16,
  		"뾕",
  		8
  	],
  	[
  		"9761",
  		"뾞",
  		17,
  		"뾱",
  		7
  	],
  	[
  		"9781",
  		"뾹",
  		11,
  		"뿆",
  		5,
  		"뿎뿏뿑뿒뿓뿕",
  		6,
  		"뿝뿞뿠뿢",
  		89,
  		"쀽쀾쀿"
  	],
  	[
  		"9841",
  		"쁀",
  		16,
  		"쁒",
  		5,
  		"쁙쁚쁛"
  	],
  	[
  		"9861",
  		"쁝쁞쁟쁡",
  		6,
  		"쁪",
  		15
  	],
  	[
  		"9881",
  		"쁺",
  		21,
  		"삒삓삕삖삗삙",
  		6,
  		"삢삤삦",
  		5,
  		"삮삱삲삷",
  		4,
  		"삾샂샃샄샆샇샊샋샍샎샏샑",
  		6,
  		"샚샞",
  		5,
  		"샦샧샩샪샫샭",
  		6,
  		"샶샸샺",
  		5,
  		"섁섂섃섅섆섇섉",
  		6,
  		"섑섒섓섔섖",
  		5,
  		"섡섢섥섨섩섪섫섮"
  	],
  	[
  		"9941",
  		"섲섳섴섵섷섺섻섽섾섿셁",
  		6,
  		"셊셎",
  		5,
  		"셖셗"
  	],
  	[
  		"9961",
  		"셙셚셛셝",
  		6,
  		"셦셪",
  		5,
  		"셱셲셳셵셶셷셹셺셻"
  	],
  	[
  		"9981",
  		"셼",
  		8,
  		"솆",
  		5,
  		"솏솑솒솓솕솗",
  		4,
  		"솞솠솢솣솤솦솧솪솫솭솮솯솱",
  		11,
  		"솾",
  		5,
  		"쇅쇆쇇쇉쇊쇋쇍",
  		6,
  		"쇕쇖쇙",
  		6,
  		"쇡쇢쇣쇥쇦쇧쇩",
  		6,
  		"쇲쇴",
  		7,
  		"쇾쇿숁숂숃숅",
  		6,
  		"숎숐숒",
  		5,
  		"숚숛숝숞숡숢숣"
  	],
  	[
  		"9a41",
  		"숤숥숦숧숪숬숮숰숳숵",
  		16
  	],
  	[
  		"9a61",
  		"쉆쉇쉉",
  		6,
  		"쉒쉓쉕쉖쉗쉙",
  		6,
  		"쉡쉢쉣쉤쉦"
  	],
  	[
  		"9a81",
  		"쉧",
  		4,
  		"쉮쉯쉱쉲쉳쉵",
  		6,
  		"쉾슀슂",
  		5,
  		"슊",
  		5,
  		"슑",
  		6,
  		"슙슚슜슞",
  		5,
  		"슦슧슩슪슫슮",
  		5,
  		"슶슸슺",
  		33,
  		"싞싟싡싢싥",
  		5,
  		"싮싰싲싳싴싵싷싺싽싾싿쌁",
  		6,
  		"쌊쌋쌎쌏"
  	],
  	[
  		"9b41",
  		"쌐쌑쌒쌖쌗쌙쌚쌛쌝",
  		6,
  		"쌦쌧쌪",
  		8
  	],
  	[
  		"9b61",
  		"쌳",
  		17,
  		"썆",
  		7
  	],
  	[
  		"9b81",
  		"썎",
  		25,
  		"썪썫썭썮썯썱썳",
  		4,
  		"썺썻썾",
  		5,
  		"쎅쎆쎇쎉쎊쎋쎍",
  		50,
  		"쏁",
  		22,
  		"쏚"
  	],
  	[
  		"9c41",
  		"쏛쏝쏞쏡쏣",
  		4,
  		"쏪쏫쏬쏮",
  		5,
  		"쏶쏷쏹",
  		5
  	],
  	[
  		"9c61",
  		"쏿",
  		8,
  		"쐉",
  		6,
  		"쐑",
  		9
  	],
  	[
  		"9c81",
  		"쐛",
  		8,
  		"쐥",
  		6,
  		"쐭쐮쐯쐱쐲쐳쐵",
  		6,
  		"쐾",
  		9,
  		"쑉",
  		26,
  		"쑦쑧쑩쑪쑫쑭",
  		6,
  		"쑶쑷쑸쑺",
  		5,
  		"쒁",
  		18,
  		"쒕",
  		6,
  		"쒝",
  		12
  	],
  	[
  		"9d41",
  		"쒪",
  		13,
  		"쒹쒺쒻쒽",
  		8
  	],
  	[
  		"9d61",
  		"쓆",
  		25
  	],
  	[
  		"9d81",
  		"쓠",
  		8,
  		"쓪",
  		5,
  		"쓲쓳쓵쓶쓷쓹쓻쓼쓽쓾씂",
  		9,
  		"씍씎씏씑씒씓씕",
  		6,
  		"씝",
  		10,
  		"씪씫씭씮씯씱",
  		6,
  		"씺씼씾",
  		5,
  		"앆앇앋앏앐앑앒앖앚앛앜앟앢앣앥앦앧앩",
  		6,
  		"앲앶",
  		5,
  		"앾앿얁얂얃얅얆얈얉얊얋얎얐얒얓얔"
  	],
  	[
  		"9e41",
  		"얖얙얚얛얝얞얟얡",
  		7,
  		"얪",
  		9,
  		"얶"
  	],
  	[
  		"9e61",
  		"얷얺얿",
  		4,
  		"엋엍엏엒엓엕엖엗엙",
  		6,
  		"엢엤엦엧"
  	],
  	[
  		"9e81",
  		"엨엩엪엫엯엱엲엳엵엸엹엺엻옂옃옄옉옊옋옍옎옏옑",
  		6,
  		"옚옝",
  		6,
  		"옦옧옩옪옫옯옱옲옶옸옺옼옽옾옿왂왃왅왆왇왉",
  		6,
  		"왒왖",
  		5,
  		"왞왟왡",
  		10,
  		"왭왮왰왲",
  		5,
  		"왺왻왽왾왿욁",
  		6,
  		"욊욌욎",
  		5,
  		"욖욗욙욚욛욝",
  		6,
  		"욦"
  	],
  	[
  		"9f41",
  		"욨욪",
  		5,
  		"욲욳욵욶욷욻",
  		4,
  		"웂웄웆",
  		5,
  		"웎"
  	],
  	[
  		"9f61",
  		"웏웑웒웓웕",
  		6,
  		"웞웟웢",
  		5,
  		"웪웫웭웮웯웱웲"
  	],
  	[
  		"9f81",
  		"웳",
  		4,
  		"웺웻웼웾",
  		5,
  		"윆윇윉윊윋윍",
  		6,
  		"윖윘윚",
  		5,
  		"윢윣윥윦윧윩",
  		6,
  		"윲윴윶윸윹윺윻윾윿읁읂읃읅",
  		4,
  		"읋읎읐읙읚읛읝읞읟읡",
  		6,
  		"읩읪읬",
  		7,
  		"읶읷읹읺읻읿잀잁잂잆잋잌잍잏잒잓잕잙잛",
  		4,
  		"잢잧",
  		4,
  		"잮잯잱잲잳잵잶잷"
  	],
  	[
  		"a041",
  		"잸잹잺잻잾쟂",
  		5,
  		"쟊쟋쟍쟏쟑",
  		6,
  		"쟙쟚쟛쟜"
  	],
  	[
  		"a061",
  		"쟞",
  		5,
  		"쟥쟦쟧쟩쟪쟫쟭",
  		13
  	],
  	[
  		"a081",
  		"쟻",
  		4,
  		"젂젃젅젆젇젉젋",
  		4,
  		"젒젔젗",
  		4,
  		"젞젟젡젢젣젥",
  		6,
  		"젮젰젲",
  		5,
  		"젹젺젻젽젾젿졁",
  		6,
  		"졊졋졎",
  		5,
  		"졕",
  		26,
  		"졲졳졵졶졷졹졻",
  		4,
  		"좂좄좈좉좊좎",
  		5,
  		"좕",
  		7,
  		"좞좠좢좣좤"
  	],
  	[
  		"a141",
  		"좥좦좧좩",
  		18,
  		"좾좿죀죁"
  	],
  	[
  		"a161",
  		"죂죃죅죆죇죉죊죋죍",
  		6,
  		"죖죘죚",
  		5,
  		"죢죣죥"
  	],
  	[
  		"a181",
  		"죦",
  		14,
  		"죶",
  		5,
  		"죾죿줁줂줃줇",
  		4,
  		"줎　、。·‥…¨〃­―∥＼∼‘’“”〔〕〈",
  		9,
  		"±×÷≠≤≥∞∴°′″℃Å￠￡￥♂♀∠⊥⌒∂∇≡≒§※☆★○●◎◇◆□■△▲▽▼→←↑↓↔〓≪≫√∽∝∵∫∬∈∋⊆⊇⊂⊃∪∩∧∨￢"
  	],
  	[
  		"a241",
  		"줐줒",
  		5,
  		"줙",
  		18
  	],
  	[
  		"a261",
  		"줭",
  		6,
  		"줵",
  		18
  	],
  	[
  		"a281",
  		"쥈",
  		7,
  		"쥒쥓쥕쥖쥗쥙",
  		6,
  		"쥢쥤",
  		7,
  		"쥭쥮쥯⇒⇔∀∃´～ˇ˘˝˚˙¸˛¡¿ː∮∑∏¤℉‰◁◀▷▶♤♠♡♥♧♣⊙◈▣◐◑▒▤▥▨▧▦▩♨☏☎☜☞¶†‡↕↗↙↖↘♭♩♪♬㉿㈜№㏇™㏂㏘℡€®"
  	],
  	[
  		"a341",
  		"쥱쥲쥳쥵",
  		6,
  		"쥽",
  		10,
  		"즊즋즍즎즏"
  	],
  	[
  		"a361",
  		"즑",
  		6,
  		"즚즜즞",
  		16
  	],
  	[
  		"a381",
  		"즯",
  		16,
  		"짂짃짅짆짉짋",
  		4,
  		"짒짔짗짘짛！",
  		58,
  		"￦］",
  		32,
  		"￣"
  	],
  	[
  		"a441",
  		"짞짟짡짣짥짦짨짩짪짫짮짲",
  		5,
  		"짺짻짽짾짿쨁쨂쨃쨄"
  	],
  	[
  		"a461",
  		"쨅쨆쨇쨊쨎",
  		5,
  		"쨕쨖쨗쨙",
  		12
  	],
  	[
  		"a481",
  		"쨦쨧쨨쨪",
  		28,
  		"ㄱ",
  		93
  	],
  	[
  		"a541",
  		"쩇",
  		4,
  		"쩎쩏쩑쩒쩓쩕",
  		6,
  		"쩞쩢",
  		5,
  		"쩩쩪"
  	],
  	[
  		"a561",
  		"쩫",
  		17,
  		"쩾",
  		5,
  		"쪅쪆"
  	],
  	[
  		"a581",
  		"쪇",
  		16,
  		"쪙",
  		14,
  		"ⅰ",
  		9
  	],
  	[
  		"a5b0",
  		"Ⅰ",
  		9
  	],
  	[
  		"a5c1",
  		"Α",
  		16,
  		"Σ",
  		6
  	],
  	[
  		"a5e1",
  		"α",
  		16,
  		"σ",
  		6
  	],
  	[
  		"a641",
  		"쪨",
  		19,
  		"쪾쪿쫁쫂쫃쫅"
  	],
  	[
  		"a661",
  		"쫆",
  		5,
  		"쫎쫐쫒쫔쫕쫖쫗쫚",
  		5,
  		"쫡",
  		6
  	],
  	[
  		"a681",
  		"쫨쫩쫪쫫쫭",
  		6,
  		"쫵",
  		18,
  		"쬉쬊─│┌┐┘└├┬┤┴┼━┃┏┓┛┗┣┳┫┻╋┠┯┨┷┿┝┰┥┸╂┒┑┚┙┖┕┎┍┞┟┡┢┦┧┩┪┭┮┱┲┵┶┹┺┽┾╀╁╃",
  		7
  	],
  	[
  		"a741",
  		"쬋",
  		4,
  		"쬑쬒쬓쬕쬖쬗쬙",
  		6,
  		"쬢",
  		7
  	],
  	[
  		"a761",
  		"쬪",
  		22,
  		"쭂쭃쭄"
  	],
  	[
  		"a781",
  		"쭅쭆쭇쭊쭋쭍쭎쭏쭑",
  		6,
  		"쭚쭛쭜쭞",
  		5,
  		"쭥",
  		7,
  		"㎕㎖㎗ℓ㎘㏄㎣㎤㎥㎦㎙",
  		9,
  		"㏊㎍㎎㎏㏏㎈㎉㏈㎧㎨㎰",
  		9,
  		"㎀",
  		4,
  		"㎺",
  		5,
  		"㎐",
  		4,
  		"Ω㏀㏁㎊㎋㎌㏖㏅㎭㎮㎯㏛㎩㎪㎫㎬㏝㏐㏓㏃㏉㏜㏆"
  	],
  	[
  		"a841",
  		"쭭",
  		10,
  		"쭺",
  		14
  	],
  	[
  		"a861",
  		"쮉",
  		18,
  		"쮝",
  		6
  	],
  	[
  		"a881",
  		"쮤",
  		19,
  		"쮹",
  		11,
  		"ÆÐªĦ"
  	],
  	[
  		"a8a6",
  		"Ĳ"
  	],
  	[
  		"a8a8",
  		"ĿŁØŒºÞŦŊ"
  	],
  	[
  		"a8b1",
  		"㉠",
  		27,
  		"ⓐ",
  		25,
  		"①",
  		14,
  		"½⅓⅔¼¾⅛⅜⅝⅞"
  	],
  	[
  		"a941",
  		"쯅",
  		14,
  		"쯕",
  		10
  	],
  	[
  		"a961",
  		"쯠쯡쯢쯣쯥쯦쯨쯪",
  		18
  	],
  	[
  		"a981",
  		"쯽",
  		14,
  		"찎찏찑찒찓찕",
  		6,
  		"찞찟찠찣찤æđðħıĳĸŀłøœßþŧŋŉ㈀",
  		27,
  		"⒜",
  		25,
  		"⑴",
  		14,
  		"¹²³⁴ⁿ₁₂₃₄"
  	],
  	[
  		"aa41",
  		"찥찦찪찫찭찯찱",
  		6,
  		"찺찿",
  		4,
  		"챆챇챉챊챋챍챎"
  	],
  	[
  		"aa61",
  		"챏",
  		4,
  		"챖챚",
  		5,
  		"챡챢챣챥챧챩",
  		6,
  		"챱챲"
  	],
  	[
  		"aa81",
  		"챳챴챶",
  		29,
  		"ぁ",
  		82
  	],
  	[
  		"ab41",
  		"첔첕첖첗첚첛첝첞첟첡",
  		6,
  		"첪첮",
  		5,
  		"첶첷첹"
  	],
  	[
  		"ab61",
  		"첺첻첽",
  		6,
  		"쳆쳈쳊",
  		5,
  		"쳑쳒쳓쳕",
  		5
  	],
  	[
  		"ab81",
  		"쳛",
  		8,
  		"쳥",
  		6,
  		"쳭쳮쳯쳱",
  		12,
  		"ァ",
  		85
  	],
  	[
  		"ac41",
  		"쳾쳿촀촂",
  		5,
  		"촊촋촍촎촏촑",
  		6,
  		"촚촜촞촟촠"
  	],
  	[
  		"ac61",
  		"촡촢촣촥촦촧촩촪촫촭",
  		11,
  		"촺",
  		4
  	],
  	[
  		"ac81",
  		"촿",
  		28,
  		"쵝쵞쵟А",
  		5,
  		"ЁЖ",
  		25
  	],
  	[
  		"acd1",
  		"а",
  		5,
  		"ёж",
  		25
  	],
  	[
  		"ad41",
  		"쵡쵢쵣쵥",
  		6,
  		"쵮쵰쵲",
  		5,
  		"쵹",
  		7
  	],
  	[
  		"ad61",
  		"춁",
  		6,
  		"춉",
  		10,
  		"춖춗춙춚춛춝춞춟"
  	],
  	[
  		"ad81",
  		"춠춡춢춣춦춨춪",
  		5,
  		"춱",
  		18,
  		"췅"
  	],
  	[
  		"ae41",
  		"췆",
  		5,
  		"췍췎췏췑",
  		16
  	],
  	[
  		"ae61",
  		"췢",
  		5,
  		"췩췪췫췭췮췯췱",
  		6,
  		"췺췼췾",
  		4
  	],
  	[
  		"ae81",
  		"츃츅츆츇츉츊츋츍",
  		6,
  		"츕츖츗츘츚",
  		5,
  		"츢츣츥츦츧츩츪츫"
  	],
  	[
  		"af41",
  		"츬츭츮츯츲츴츶",
  		19
  	],
  	[
  		"af61",
  		"칊",
  		13,
  		"칚칛칝칞칢",
  		5,
  		"칪칬"
  	],
  	[
  		"af81",
  		"칮",
  		5,
  		"칶칷칹칺칻칽",
  		6,
  		"캆캈캊",
  		5,
  		"캒캓캕캖캗캙"
  	],
  	[
  		"b041",
  		"캚",
  		5,
  		"캢캦",
  		5,
  		"캮",
  		12
  	],
  	[
  		"b061",
  		"캻",
  		5,
  		"컂",
  		19
  	],
  	[
  		"b081",
  		"컖",
  		13,
  		"컦컧컩컪컭",
  		6,
  		"컶컺",
  		5,
  		"가각간갇갈갉갊감",
  		7,
  		"같",
  		4,
  		"갠갤갬갭갯갰갱갸갹갼걀걋걍걔걘걜거걱건걷걸걺검겁것겄겅겆겉겊겋게겐겔겜겝겟겠겡겨격겪견겯결겸겹겻겼경곁계곈곌곕곗고곡곤곧골곪곬곯곰곱곳공곶과곽관괄괆"
  	],
  	[
  		"b141",
  		"켂켃켅켆켇켉",
  		6,
  		"켒켔켖",
  		5,
  		"켝켞켟켡켢켣"
  	],
  	[
  		"b161",
  		"켥",
  		6,
  		"켮켲",
  		5,
  		"켹",
  		11
  	],
  	[
  		"b181",
  		"콅",
  		14,
  		"콖콗콙콚콛콝",
  		6,
  		"콦콨콪콫콬괌괍괏광괘괜괠괩괬괭괴괵괸괼굄굅굇굉교굔굘굡굣구국군굳굴굵굶굻굼굽굿궁궂궈궉권궐궜궝궤궷귀귁귄귈귐귑귓규균귤그극근귿글긁금급긋긍긔기긱긴긷길긺김깁깃깅깆깊까깍깎깐깔깖깜깝깟깠깡깥깨깩깬깰깸"
  	],
  	[
  		"b241",
  		"콭콮콯콲콳콵콶콷콹",
  		6,
  		"쾁쾂쾃쾄쾆",
  		5,
  		"쾍"
  	],
  	[
  		"b261",
  		"쾎",
  		18,
  		"쾢",
  		5,
  		"쾩"
  	],
  	[
  		"b281",
  		"쾪",
  		5,
  		"쾱",
  		18,
  		"쿅",
  		6,
  		"깹깻깼깽꺄꺅꺌꺼꺽꺾껀껄껌껍껏껐껑께껙껜껨껫껭껴껸껼꼇꼈꼍꼐꼬꼭꼰꼲꼴꼼꼽꼿꽁꽂꽃꽈꽉꽐꽜꽝꽤꽥꽹꾀꾄꾈꾐꾑꾕꾜꾸꾹꾼꿀꿇꿈꿉꿋꿍꿎꿔꿜꿨꿩꿰꿱꿴꿸뀀뀁뀄뀌뀐뀔뀜뀝뀨끄끅끈끊끌끎끓끔끕끗끙"
  	],
  	[
  		"b341",
  		"쿌",
  		19,
  		"쿢쿣쿥쿦쿧쿩"
  	],
  	[
  		"b361",
  		"쿪",
  		5,
  		"쿲쿴쿶",
  		5,
  		"쿽쿾쿿퀁퀂퀃퀅",
  		5
  	],
  	[
  		"b381",
  		"퀋",
  		5,
  		"퀒",
  		5,
  		"퀙",
  		19,
  		"끝끼끽낀낄낌낍낏낑나낙낚난낟날낡낢남납낫",
  		4,
  		"낱낳내낵낸낼냄냅냇냈냉냐냑냔냘냠냥너넉넋넌널넒넓넘넙넛넜넝넣네넥넨넬넴넵넷넸넹녀녁년녈념녑녔녕녘녜녠노녹논놀놂놈놉놋농높놓놔놘놜놨뇌뇐뇔뇜뇝"
  	],
  	[
  		"b441",
  		"퀮",
  		5,
  		"퀶퀷퀹퀺퀻퀽",
  		6,
  		"큆큈큊",
  		5
  	],
  	[
  		"b461",
  		"큑큒큓큕큖큗큙",
  		6,
  		"큡",
  		10,
  		"큮큯"
  	],
  	[
  		"b481",
  		"큱큲큳큵",
  		6,
  		"큾큿킀킂",
  		18,
  		"뇟뇨뇩뇬뇰뇹뇻뇽누눅눈눋눌눔눕눗눙눠눴눼뉘뉜뉠뉨뉩뉴뉵뉼늄늅늉느늑는늘늙늚늠늡늣능늦늪늬늰늴니닉닌닐닒님닙닛닝닢다닥닦단닫",
  		4,
  		"닳담답닷",
  		4,
  		"닿대댁댄댈댐댑댓댔댕댜더덕덖던덛덜덞덟덤덥"
  	],
  	[
  		"b541",
  		"킕",
  		14,
  		"킦킧킩킪킫킭",
  		5
  	],
  	[
  		"b561",
  		"킳킶킸킺",
  		5,
  		"탂탃탅탆탇탊",
  		5,
  		"탒탖",
  		4
  	],
  	[
  		"b581",
  		"탛탞탟탡탢탣탥",
  		6,
  		"탮탲",
  		5,
  		"탹",
  		11,
  		"덧덩덫덮데덱덴델뎀뎁뎃뎄뎅뎌뎐뎔뎠뎡뎨뎬도독돈돋돌돎돐돔돕돗동돛돝돠돤돨돼됐되된될됨됩됫됴두둑둔둘둠둡둣둥둬뒀뒈뒝뒤뒨뒬뒵뒷뒹듀듄듈듐듕드득든듣들듦듬듭듯등듸디딕딘딛딜딤딥딧딨딩딪따딱딴딸"
  	],
  	[
  		"b641",
  		"턅",
  		7,
  		"턎",
  		17
  	],
  	[
  		"b661",
  		"턠",
  		15,
  		"턲턳턵턶턷턹턻턼턽턾"
  	],
  	[
  		"b681",
  		"턿텂텆",
  		5,
  		"텎텏텑텒텓텕",
  		6,
  		"텞텠텢",
  		5,
  		"텩텪텫텭땀땁땃땄땅땋때땍땐땔땜땝땟땠땡떠떡떤떨떪떫떰떱떳떴떵떻떼떽뗀뗄뗌뗍뗏뗐뗑뗘뗬또똑똔똘똥똬똴뙈뙤뙨뚜뚝뚠뚤뚫뚬뚱뛔뛰뛴뛸뜀뜁뜅뜨뜩뜬뜯뜰뜸뜹뜻띄띈띌띔띕띠띤띨띰띱띳띵라락란랄람랍랏랐랑랒랖랗"
  	],
  	[
  		"b741",
  		"텮",
  		13,
  		"텽",
  		6,
  		"톅톆톇톉톊"
  	],
  	[
  		"b761",
  		"톋",
  		20,
  		"톢톣톥톦톧"
  	],
  	[
  		"b781",
  		"톩",
  		6,
  		"톲톴톶톷톸톹톻톽톾톿퇁",
  		14,
  		"래랙랜랠램랩랫랬랭랴략랸럇량러럭런럴럼럽럿렀렁렇레렉렌렐렘렙렛렝려력련렬렴렵렷렸령례롄롑롓로록론롤롬롭롯롱롸롼뢍뢨뢰뢴뢸룀룁룃룅료룐룔룝룟룡루룩룬룰룸룹룻룽뤄뤘뤠뤼뤽륀륄륌륏륑류륙륜률륨륩"
  	],
  	[
  		"b841",
  		"퇐",
  		7,
  		"퇙",
  		17
  	],
  	[
  		"b861",
  		"퇫",
  		8,
  		"퇵퇶퇷퇹",
  		13
  	],
  	[
  		"b881",
  		"툈툊",
  		5,
  		"툑",
  		24,
  		"륫륭르륵른를름릅릇릉릊릍릎리릭린릴림립릿링마막만많",
  		4,
  		"맘맙맛망맞맡맣매맥맨맬맴맵맷맸맹맺먀먁먈먕머먹먼멀멂멈멉멋멍멎멓메멕멘멜멤멥멧멨멩며멱면멸몃몄명몇몌모목몫몬몰몲몸몹못몽뫄뫈뫘뫙뫼"
  	],
  	[
  		"b941",
  		"툪툫툮툯툱툲툳툵",
  		6,
  		"툾퉀퉂",
  		5,
  		"퉉퉊퉋퉌"
  	],
  	[
  		"b961",
  		"퉍",
  		14,
  		"퉝",
  		6,
  		"퉥퉦퉧퉨"
  	],
  	[
  		"b981",
  		"퉩",
  		22,
  		"튂튃튅튆튇튉튊튋튌묀묄묍묏묑묘묜묠묩묫무묵묶문묻물묽묾뭄뭅뭇뭉뭍뭏뭐뭔뭘뭡뭣뭬뮈뮌뮐뮤뮨뮬뮴뮷므믄믈믐믓미믹민믿밀밂밈밉밋밌밍및밑바",
  		4,
  		"받",
  		4,
  		"밤밥밧방밭배백밴밸뱀뱁뱃뱄뱅뱉뱌뱍뱐뱝버벅번벋벌벎범법벗"
  	],
  	[
  		"ba41",
  		"튍튎튏튒튓튔튖",
  		5,
  		"튝튞튟튡튢튣튥",
  		6,
  		"튭"
  	],
  	[
  		"ba61",
  		"튮튯튰튲",
  		5,
  		"튺튻튽튾틁틃",
  		4,
  		"틊틌",
  		5
  	],
  	[
  		"ba81",
  		"틒틓틕틖틗틙틚틛틝",
  		6,
  		"틦",
  		9,
  		"틲틳틵틶틷틹틺벙벚베벡벤벧벨벰벱벳벴벵벼벽변별볍볏볐병볕볘볜보복볶본볼봄봅봇봉봐봔봤봬뵀뵈뵉뵌뵐뵘뵙뵤뵨부북분붇불붉붊붐붑붓붕붙붚붜붤붰붸뷔뷕뷘뷜뷩뷰뷴뷸븀븃븅브븍븐블븜븝븟비빅빈빌빎빔빕빗빙빚빛빠빡빤"
  	],
  	[
  		"bb41",
  		"틻",
  		4,
  		"팂팄팆",
  		5,
  		"팏팑팒팓팕팗",
  		4,
  		"팞팢팣"
  	],
  	[
  		"bb61",
  		"팤팦팧팪팫팭팮팯팱",
  		6,
  		"팺팾",
  		5,
  		"퍆퍇퍈퍉"
  	],
  	[
  		"bb81",
  		"퍊",
  		31,
  		"빨빪빰빱빳빴빵빻빼빽뺀뺄뺌뺍뺏뺐뺑뺘뺙뺨뻐뻑뻔뻗뻘뻠뻣뻤뻥뻬뼁뼈뼉뼘뼙뼛뼜뼝뽀뽁뽄뽈뽐뽑뽕뾔뾰뿅뿌뿍뿐뿔뿜뿟뿡쀼쁑쁘쁜쁠쁨쁩삐삑삔삘삠삡삣삥사삭삯산삳살삵삶삼삽삿샀상샅새색샌샐샘샙샛샜생샤"
  	],
  	[
  		"bc41",
  		"퍪",
  		17,
  		"퍾퍿펁펂펃펅펆펇"
  	],
  	[
  		"bc61",
  		"펈펉펊펋펎펒",
  		5,
  		"펚펛펝펞펟펡",
  		6,
  		"펪펬펮"
  	],
  	[
  		"bc81",
  		"펯",
  		4,
  		"펵펶펷펹펺펻펽",
  		6,
  		"폆폇폊",
  		5,
  		"폑",
  		5,
  		"샥샨샬샴샵샷샹섀섄섈섐섕서",
  		4,
  		"섣설섦섧섬섭섯섰성섶세섹센셀셈셉셋셌셍셔셕션셜셤셥셧셨셩셰셴셸솅소속솎손솔솖솜솝솟송솥솨솩솬솰솽쇄쇈쇌쇔쇗쇘쇠쇤쇨쇰쇱쇳쇼쇽숀숄숌숍숏숑수숙순숟술숨숩숫숭"
  	],
  	[
  		"bd41",
  		"폗폙",
  		7,
  		"폢폤",
  		7,
  		"폮폯폱폲폳폵폶폷"
  	],
  	[
  		"bd61",
  		"폸폹폺폻폾퐀퐂",
  		5,
  		"퐉",
  		13
  	],
  	[
  		"bd81",
  		"퐗",
  		5,
  		"퐞",
  		25,
  		"숯숱숲숴쉈쉐쉑쉔쉘쉠쉥쉬쉭쉰쉴쉼쉽쉿슁슈슉슐슘슛슝스슥슨슬슭슴습슷승시식신싣실싫심십싯싱싶싸싹싻싼쌀쌈쌉쌌쌍쌓쌔쌕쌘쌜쌤쌥쌨쌩썅써썩썬썰썲썸썹썼썽쎄쎈쎌쏀쏘쏙쏜쏟쏠쏢쏨쏩쏭쏴쏵쏸쐈쐐쐤쐬쐰"
  	],
  	[
  		"be41",
  		"퐸",
  		7,
  		"푁푂푃푅",
  		14
  	],
  	[
  		"be61",
  		"푔",
  		7,
  		"푝푞푟푡푢푣푥",
  		7,
  		"푮푰푱푲"
  	],
  	[
  		"be81",
  		"푳",
  		4,
  		"푺푻푽푾풁풃",
  		4,
  		"풊풌풎",
  		5,
  		"풕",
  		8,
  		"쐴쐼쐽쑈쑤쑥쑨쑬쑴쑵쑹쒀쒔쒜쒸쒼쓩쓰쓱쓴쓸쓺쓿씀씁씌씐씔씜씨씩씬씰씸씹씻씽아악안앉않알앍앎앓암압앗았앙앝앞애액앤앨앰앱앳앴앵야약얀얄얇얌얍얏양얕얗얘얜얠얩어억언얹얻얼얽얾엄",
  		6,
  		"엌엎"
  	],
  	[
  		"bf41",
  		"풞",
  		10,
  		"풪",
  		14
  	],
  	[
  		"bf61",
  		"풹",
  		18,
  		"퓍퓎퓏퓑퓒퓓퓕"
  	],
  	[
  		"bf81",
  		"퓖",
  		5,
  		"퓝퓞퓠",
  		7,
  		"퓩퓪퓫퓭퓮퓯퓱",
  		6,
  		"퓹퓺퓼에엑엔엘엠엡엣엥여역엮연열엶엷염",
  		5,
  		"옅옆옇예옌옐옘옙옛옜오옥온올옭옮옰옳옴옵옷옹옻와왁완왈왐왑왓왔왕왜왝왠왬왯왱외왹왼욀욈욉욋욍요욕욘욜욤욥욧용우욱운울욹욺움웁웃웅워웍원월웜웝웠웡웨"
  	],
  	[
  		"c041",
  		"퓾",
  		5,
  		"픅픆픇픉픊픋픍",
  		6,
  		"픖픘",
  		5
  	],
  	[
  		"c061",
  		"픞",
  		25
  	],
  	[
  		"c081",
  		"픸픹픺픻픾픿핁핂핃핅",
  		6,
  		"핎핐핒",
  		5,
  		"핚핛핝핞핟핡핢핣웩웬웰웸웹웽위윅윈윌윔윕윗윙유육윤율윰윱윳융윷으윽은을읊음읍읏응",
  		7,
  		"읜읠읨읫이익인일읽읾잃임입잇있잉잊잎자작잔잖잗잘잚잠잡잣잤장잦재잭잰잴잼잽잿쟀쟁쟈쟉쟌쟎쟐쟘쟝쟤쟨쟬저적전절젊"
  	],
  	[
  		"c141",
  		"핤핦핧핪핬핮",
  		5,
  		"핶핷핹핺핻핽",
  		6,
  		"햆햊햋"
  	],
  	[
  		"c161",
  		"햌햍햎햏햑",
  		19,
  		"햦햧"
  	],
  	[
  		"c181",
  		"햨",
  		31,
  		"점접젓정젖제젝젠젤젬젭젯젱져젼졀졈졉졌졍졔조족존졸졺좀좁좃종좆좇좋좌좍좔좝좟좡좨좼좽죄죈죌죔죕죗죙죠죡죤죵주죽준줄줅줆줌줍줏중줘줬줴쥐쥑쥔쥘쥠쥡쥣쥬쥰쥴쥼즈즉즌즐즘즙즛증지직진짇질짊짐집짓"
  	],
  	[
  		"c241",
  		"헊헋헍헎헏헑헓",
  		4,
  		"헚헜헞",
  		5,
  		"헦헧헩헪헫헭헮"
  	],
  	[
  		"c261",
  		"헯",
  		4,
  		"헶헸헺",
  		5,
  		"혂혃혅혆혇혉",
  		6,
  		"혒"
  	],
  	[
  		"c281",
  		"혖",
  		5,
  		"혝혞혟혡혢혣혥",
  		7,
  		"혮",
  		9,
  		"혺혻징짖짙짚짜짝짠짢짤짧짬짭짯짰짱째짹짼쨀쨈쨉쨋쨌쨍쨔쨘쨩쩌쩍쩐쩔쩜쩝쩟쩠쩡쩨쩽쪄쪘쪼쪽쫀쫄쫌쫍쫏쫑쫓쫘쫙쫠쫬쫴쬈쬐쬔쬘쬠쬡쭁쭈쭉쭌쭐쭘쭙쭝쭤쭸쭹쮜쮸쯔쯤쯧쯩찌찍찐찔찜찝찡찢찧차착찬찮찰참찹찻"
  	],
  	[
  		"c341",
  		"혽혾혿홁홂홃홄홆홇홊홌홎홏홐홒홓홖홗홙홚홛홝",
  		4
  	],
  	[
  		"c361",
  		"홢",
  		4,
  		"홨홪",
  		5,
  		"홲홳홵",
  		11
  	],
  	[
  		"c381",
  		"횁횂횄횆",
  		5,
  		"횎횏횑횒횓횕",
  		7,
  		"횞횠횢",
  		5,
  		"횩횪찼창찾채책챈챌챔챕챗챘챙챠챤챦챨챰챵처척천철첨첩첫첬청체첵첸첼쳄쳅쳇쳉쳐쳔쳤쳬쳰촁초촉촌촐촘촙촛총촤촨촬촹최쵠쵤쵬쵭쵯쵱쵸춈추축춘출춤춥춧충춰췄췌췐취췬췰췸췹췻췽츄츈츌츔츙츠측츤츨츰츱츳층"
  	],
  	[
  		"c441",
  		"횫횭횮횯횱",
  		7,
  		"횺횼",
  		7,
  		"훆훇훉훊훋"
  	],
  	[
  		"c461",
  		"훍훎훏훐훒훓훕훖훘훚",
  		5,
  		"훡훢훣훥훦훧훩",
  		4
  	],
  	[
  		"c481",
  		"훮훯훱훲훳훴훶",
  		5,
  		"훾훿휁휂휃휅",
  		11,
  		"휒휓휔치칙친칟칠칡침칩칫칭카칵칸칼캄캅캇캉캐캑캔캘캠캡캣캤캥캬캭컁커컥컨컫컬컴컵컷컸컹케켁켄켈켐켑켓켕켜켠켤켬켭켯켰켱켸코콕콘콜콤콥콧콩콰콱콴콸쾀쾅쾌쾡쾨쾰쿄쿠쿡쿤쿨쿰쿱쿳쿵쿼퀀퀄퀑퀘퀭퀴퀵퀸퀼"
  	],
  	[
  		"c541",
  		"휕휖휗휚휛휝휞휟휡",
  		6,
  		"휪휬휮",
  		5,
  		"휶휷휹"
  	],
  	[
  		"c561",
  		"휺휻휽",
  		6,
  		"흅흆흈흊",
  		5,
  		"흒흓흕흚",
  		4
  	],
  	[
  		"c581",
  		"흟흢흤흦흧흨흪흫흭흮흯흱흲흳흵",
  		6,
  		"흾흿힀힂",
  		5,
  		"힊힋큄큅큇큉큐큔큘큠크큭큰클큼큽킁키킥킨킬킴킵킷킹타탁탄탈탉탐탑탓탔탕태택탠탤탬탭탯탰탱탸턍터턱턴털턺텀텁텃텄텅테텍텐텔템텝텟텡텨텬텼톄톈토톡톤톨톰톱톳통톺톼퇀퇘퇴퇸툇툉툐투툭툰툴툼툽툿퉁퉈퉜"
  	],
  	[
  		"c641",
  		"힍힎힏힑",
  		6,
  		"힚힜힞",
  		5
  	],
  	[
  		"c6a1",
  		"퉤튀튁튄튈튐튑튕튜튠튤튬튱트특튼튿틀틂틈틉틋틔틘틜틤틥티틱틴틸팀팁팃팅파팍팎판팔팖팜팝팟팠팡팥패팩팬팰팸팹팻팼팽퍄퍅퍼퍽펀펄펌펍펏펐펑페펙펜펠펨펩펫펭펴편펼폄폅폈평폐폘폡폣포폭폰폴폼폽폿퐁"
  	],
  	[
  		"c7a1",
  		"퐈퐝푀푄표푠푤푭푯푸푹푼푿풀풂품풉풋풍풔풩퓌퓐퓔퓜퓟퓨퓬퓰퓸퓻퓽프픈플픔픕픗피픽핀필핌핍핏핑하학한할핥함합핫항해핵핸핼햄햅햇했행햐향허헉헌헐헒험헙헛헝헤헥헨헬헴헵헷헹혀혁현혈혐협혓혔형혜혠"
  	],
  	[
  		"c8a1",
  		"혤혭호혹혼홀홅홈홉홋홍홑화확환활홧황홰홱홴횃횅회획횐횔횝횟횡효횬횰횹횻후훅훈훌훑훔훗훙훠훤훨훰훵훼훽휀휄휑휘휙휜휠휨휩휫휭휴휵휸휼흄흇흉흐흑흔흖흗흘흙흠흡흣흥흩희흰흴흼흽힁히힉힌힐힘힙힛힝"
  	],
  	[
  		"caa1",
  		"伽佳假價加可呵哥嘉嫁家暇架枷柯歌珂痂稼苛茄街袈訶賈跏軻迦駕刻却各恪慤殼珏脚覺角閣侃刊墾奸姦干幹懇揀杆柬桿澗癎看磵稈竿簡肝艮艱諫間乫喝曷渴碣竭葛褐蝎鞨勘坎堪嵌感憾戡敢柑橄減甘疳監瞰紺邯鑑鑒龕"
  	],
  	[
  		"cba1",
  		"匣岬甲胛鉀閘剛堈姜岡崗康强彊慷江畺疆糠絳綱羌腔舡薑襁講鋼降鱇介价個凱塏愷愾慨改槪漑疥皆盖箇芥蓋豈鎧開喀客坑更粳羹醵倨去居巨拒据據擧渠炬祛距踞車遽鉅鋸乾件健巾建愆楗腱虔蹇鍵騫乞傑杰桀儉劍劒檢"
  	],
  	[
  		"cca1",
  		"瞼鈐黔劫怯迲偈憩揭擊格檄激膈覡隔堅牽犬甄絹繭肩見譴遣鵑抉決潔結缺訣兼慊箝謙鉗鎌京俓倞傾儆勁勍卿坰境庚徑慶憬擎敬景暻更梗涇炅烱璟璥瓊痙硬磬竟競絅經耕耿脛莖警輕逕鏡頃頸驚鯨係啓堺契季屆悸戒桂械"
  	],
  	[
  		"cda1",
  		"棨溪界癸磎稽系繫繼計誡谿階鷄古叩告呱固姑孤尻庫拷攷故敲暠枯槁沽痼皐睾稿羔考股膏苦苽菰藁蠱袴誥賈辜錮雇顧高鼓哭斛曲梏穀谷鵠困坤崑昆梱棍滾琨袞鯤汨滑骨供公共功孔工恐恭拱控攻珙空蚣貢鞏串寡戈果瓜"
  	],
  	[
  		"cea1",
  		"科菓誇課跨過鍋顆廓槨藿郭串冠官寬慣棺款灌琯瓘管罐菅觀貫關館刮恝括适侊光匡壙廣曠洸炚狂珖筐胱鑛卦掛罫乖傀塊壞怪愧拐槐魁宏紘肱轟交僑咬喬嬌嶠巧攪敎校橋狡皎矯絞翹膠蕎蛟較轎郊餃驕鮫丘久九仇俱具勾"
  	],
  	[
  		"cfa1",
  		"區口句咎嘔坵垢寇嶇廐懼拘救枸柩構歐毆毬求溝灸狗玖球瞿矩究絿耉臼舅舊苟衢謳購軀逑邱鉤銶駒驅鳩鷗龜國局菊鞠鞫麴君窘群裙軍郡堀屈掘窟宮弓穹窮芎躬倦券勸卷圈拳捲權淃眷厥獗蕨蹶闕机櫃潰詭軌饋句晷歸貴"
  	],
  	[
  		"d0a1",
  		"鬼龜叫圭奎揆槻珪硅窺竅糾葵規赳逵閨勻均畇筠菌鈞龜橘克剋劇戟棘極隙僅劤勤懃斤根槿瑾筋芹菫覲謹近饉契今妗擒昑檎琴禁禽芩衾衿襟金錦伋及急扱汲級給亘兢矜肯企伎其冀嗜器圻基埼夔奇妓寄岐崎己幾忌技旗旣"
  	],
  	[
  		"d1a1",
  		"朞期杞棋棄機欺氣汽沂淇玘琦琪璂璣畸畿碁磯祁祇祈祺箕紀綺羈耆耭肌記譏豈起錡錤飢饑騎騏驥麒緊佶吉拮桔金喫儺喇奈娜懦懶拏拿癩",
  		5,
  		"那樂",
  		4,
  		"諾酪駱亂卵暖欄煖爛蘭難鸞捏捺南嵐枏楠湳濫男藍襤拉"
  	],
  	[
  		"d2a1",
  		"納臘蠟衲囊娘廊",
  		4,
  		"乃來內奈柰耐冷女年撚秊念恬拈捻寧寗努勞奴弩怒擄櫓爐瑙盧",
  		5,
  		"駑魯",
  		10,
  		"濃籠聾膿農惱牢磊腦賂雷尿壘",
  		7,
  		"嫩訥杻紐勒",
  		5,
  		"能菱陵尼泥匿溺多茶"
  	],
  	[
  		"d3a1",
  		"丹亶但單團壇彖斷旦檀段湍短端簞緞蛋袒鄲鍛撻澾獺疸達啖坍憺擔曇淡湛潭澹痰聃膽蕁覃談譚錟沓畓答踏遝唐堂塘幢戇撞棠當糖螳黨代垈坮大對岱帶待戴擡玳臺袋貸隊黛宅德悳倒刀到圖堵塗導屠島嶋度徒悼挑掉搗桃"
  	],
  	[
  		"d4a1",
  		"棹櫂淘渡滔濤燾盜睹禱稻萄覩賭跳蹈逃途道都鍍陶韜毒瀆牘犢獨督禿篤纛讀墩惇敦旽暾沌焞燉豚頓乭突仝冬凍動同憧東桐棟洞潼疼瞳童胴董銅兜斗杜枓痘竇荳讀豆逗頭屯臀芚遁遯鈍得嶝橙燈登等藤謄鄧騰喇懶拏癩羅"
  	],
  	[
  		"d5a1",
  		"蘿螺裸邏樂洛烙珞絡落諾酪駱丹亂卵欄欒瀾爛蘭鸞剌辣嵐擥攬欖濫籃纜藍襤覽拉臘蠟廊朗浪狼琅瑯螂郞來崍徠萊冷掠略亮倆兩凉梁樑粮粱糧良諒輛量侶儷勵呂廬慮戾旅櫚濾礪藜蠣閭驢驪麗黎力曆歷瀝礫轢靂憐戀攣漣"
  	],
  	[
  		"d6a1",
  		"煉璉練聯蓮輦連鍊冽列劣洌烈裂廉斂殮濂簾獵令伶囹寧岺嶺怜玲笭羚翎聆逞鈴零靈領齡例澧禮醴隷勞怒撈擄櫓潞瀘爐盧老蘆虜路輅露魯鷺鹵碌祿綠菉錄鹿麓論壟弄朧瀧瓏籠聾儡瀨牢磊賂賚賴雷了僚寮廖料燎療瞭聊蓼"
  	],
  	[
  		"d7a1",
  		"遼鬧龍壘婁屢樓淚漏瘻累縷蔞褸鏤陋劉旒柳榴流溜瀏琉瑠留瘤硫謬類六戮陸侖倫崙淪綸輪律慄栗率隆勒肋凜凌楞稜綾菱陵俚利厘吏唎履悧李梨浬犁狸理璃異痢籬罹羸莉裏裡里釐離鯉吝潾燐璘藺躪隣鱗麟林淋琳臨霖砬"
  	],
  	[
  		"d8a1",
  		"立笠粒摩瑪痲碼磨馬魔麻寞幕漠膜莫邈万卍娩巒彎慢挽晩曼滿漫灣瞞萬蔓蠻輓饅鰻唜抹末沫茉襪靺亡妄忘忙望網罔芒茫莽輞邙埋妹媒寐昧枚梅每煤罵買賣邁魅脈貊陌驀麥孟氓猛盲盟萌冪覓免冕勉棉沔眄眠綿緬面麵滅"
  	],
  	[
  		"d9a1",
  		"蔑冥名命明暝椧溟皿瞑茗蓂螟酩銘鳴袂侮冒募姆帽慕摸摹暮某模母毛牟牡瑁眸矛耗芼茅謀謨貌木沐牧目睦穆鶩歿沒夢朦蒙卯墓妙廟描昴杳渺猫竗苗錨務巫憮懋戊拇撫无楙武毋無珷畝繆舞茂蕪誣貿霧鵡墨默們刎吻問文"
  	],
  	[
  		"daa1",
  		"汶紊紋聞蚊門雯勿沕物味媚尾嵋彌微未梶楣渼湄眉米美薇謎迷靡黴岷悶愍憫敏旻旼民泯玟珉緡閔密蜜謐剝博拍搏撲朴樸泊珀璞箔粕縛膊舶薄迫雹駁伴半反叛拌搬攀斑槃泮潘班畔瘢盤盼磐磻礬絆般蟠返頒飯勃拔撥渤潑"
  	],
  	[
  		"dba1",
  		"發跋醱鉢髮魃倣傍坊妨尨幇彷房放方旁昉枋榜滂磅紡肪膀舫芳蒡蚌訪謗邦防龐倍俳北培徘拜排杯湃焙盃背胚裴裵褙賠輩配陪伯佰帛柏栢白百魄幡樊煩燔番磻繁蕃藩飜伐筏罰閥凡帆梵氾汎泛犯範范法琺僻劈壁擘檗璧癖"
  	],
  	[
  		"dca1",
  		"碧蘗闢霹便卞弁變辨辯邊別瞥鱉鼈丙倂兵屛幷昞昺柄棅炳甁病秉竝輧餠騈保堡報寶普步洑湺潽珤甫菩補褓譜輔伏僕匐卜宓復服福腹茯蔔複覆輹輻馥鰒本乶俸奉封峯峰捧棒烽熢琫縫蓬蜂逢鋒鳳不付俯傅剖副否咐埠夫婦"
  	],
  	[
  		"dda1",
  		"孚孵富府復扶敷斧浮溥父符簿缶腐腑膚艀芙莩訃負賦賻赴趺部釜阜附駙鳧北分吩噴墳奔奮忿憤扮昐汾焚盆粉糞紛芬賁雰不佛弗彿拂崩朋棚硼繃鵬丕備匕匪卑妃婢庇悲憊扉批斐枇榧比毖毗毘沸泌琵痺砒碑秕秘粃緋翡肥"
  	],
  	[
  		"dea1",
  		"脾臂菲蜚裨誹譬費鄙非飛鼻嚬嬪彬斌檳殯浜濱瀕牝玭貧賓頻憑氷聘騁乍事些仕伺似使俟僿史司唆嗣四士奢娑寫寺射巳師徙思捨斜斯柶査梭死沙泗渣瀉獅砂社祀祠私篩紗絲肆舍莎蓑蛇裟詐詞謝賜赦辭邪飼駟麝削數朔索"
  	],
  	[
  		"dfa1",
  		"傘刪山散汕珊産疝算蒜酸霰乷撒殺煞薩三參杉森渗芟蔘衫揷澁鈒颯上傷像償商喪嘗孀尙峠常床庠廂想桑橡湘爽牀狀相祥箱翔裳觴詳象賞霜塞璽賽嗇塞穡索色牲生甥省笙墅壻嶼序庶徐恕抒捿敍暑曙書栖棲犀瑞筮絮緖署"
  	],
  	[
  		"e0a1",
  		"胥舒薯西誓逝鋤黍鼠夕奭席惜昔晳析汐淅潟石碩蓆釋錫仙僊先善嬋宣扇敾旋渲煽琁瑄璇璿癬禪線繕羨腺膳船蘚蟬詵跣選銑鐥饍鮮卨屑楔泄洩渫舌薛褻設說雪齧剡暹殲纖蟾贍閃陝攝涉燮葉城姓宬性惺成星晟猩珹盛省筬"
  	],
  	[
  		"e1a1",
  		"聖聲腥誠醒世勢歲洗稅笹細說貰召嘯塑宵小少巢所掃搔昭梳沼消溯瀟炤燒甦疏疎瘙笑篠簫素紹蔬蕭蘇訴逍遡邵銷韶騷俗屬束涑粟續謖贖速孫巽損蓀遜飡率宋悚松淞訟誦送頌刷殺灑碎鎖衰釗修受嗽囚垂壽嫂守岫峀帥愁"
  	],
  	[
  		"e2a1",
  		"戍手授搜收數樹殊水洙漱燧狩獸琇璲瘦睡秀穗竪粹綏綬繡羞脩茱蒐蓚藪袖誰讐輸遂邃酬銖銹隋隧隨雖需須首髓鬚叔塾夙孰宿淑潚熟琡璹肅菽巡徇循恂旬栒楯橓殉洵淳珣盾瞬筍純脣舜荀蓴蕣詢諄醇錞順馴戌術述鉥崇崧"
  	],
  	[
  		"e3a1",
  		"嵩瑟膝蝨濕拾習褶襲丞乘僧勝升承昇繩蠅陞侍匙嘶始媤尸屎屍市弑恃施是時枾柴猜矢示翅蒔蓍視試詩諡豕豺埴寔式息拭植殖湜熄篒蝕識軾食飾伸侁信呻娠宸愼新晨燼申神紳腎臣莘薪藎蜃訊身辛辰迅失室實悉審尋心沁"
  	],
  	[
  		"e4a1",
  		"沈深瀋甚芯諶什十拾雙氏亞俄兒啞娥峨我牙芽莪蛾衙訝阿雅餓鴉鵝堊岳嶽幄惡愕握樂渥鄂鍔顎鰐齷安岸按晏案眼雁鞍顔鮟斡謁軋閼唵岩巖庵暗癌菴闇壓押狎鴨仰央怏昻殃秧鴦厓哀埃崖愛曖涯碍艾隘靄厄扼掖液縊腋額"
  	],
  	[
  		"e5a1",
  		"櫻罌鶯鸚也倻冶夜惹揶椰爺耶若野弱掠略約若葯蒻藥躍亮佯兩凉壤孃恙揚攘敭暘梁楊樣洋瀁煬痒瘍禳穰糧羊良襄諒讓釀陽量養圄御於漁瘀禦語馭魚齬億憶抑檍臆偃堰彦焉言諺孼蘖俺儼嚴奄掩淹嶪業円予余勵呂女如廬"
  	],
  	[
  		"e6a1",
  		"旅歟汝濾璵礖礪與艅茹輿轝閭餘驪麗黎亦力域役易曆歷疫繹譯轢逆驛嚥堧姸娟宴年延憐戀捐挻撚椽沇沿涎涓淵演漣烟然煙煉燃燕璉硏硯秊筵緣練縯聯衍軟輦蓮連鉛鍊鳶列劣咽悅涅烈熱裂說閱厭廉念捻染殮炎焰琰艶苒"
  	],
  	[
  		"e7a1",
  		"簾閻髥鹽曄獵燁葉令囹塋寧嶺嶸影怜映暎楹榮永泳渶潁濚瀛瀯煐營獰玲瑛瑩瓔盈穎纓羚聆英詠迎鈴鍈零霙靈領乂倪例刈叡曳汭濊猊睿穢芮藝蘂禮裔詣譽豫醴銳隸霓預五伍俉傲午吾吳嗚塢墺奧娛寤悟惡懊敖旿晤梧汚澳"
  	],
  	[
  		"e8a1",
  		"烏熬獒筽蜈誤鰲鼇屋沃獄玉鈺溫瑥瘟穩縕蘊兀壅擁瓮甕癰翁邕雍饔渦瓦窩窪臥蛙蝸訛婉完宛梡椀浣玩琓琬碗緩翫脘腕莞豌阮頑曰往旺枉汪王倭娃歪矮外嵬巍猥畏了僚僥凹堯夭妖姚寥寮尿嶢拗搖撓擾料曜樂橈燎燿瑤療"
  	],
  	[
  		"e9a1",
  		"窈窯繇繞耀腰蓼蟯要謠遙遼邀饒慾欲浴縟褥辱俑傭冗勇埇墉容庸慂榕涌湧溶熔瑢用甬聳茸蓉踊鎔鏞龍于佑偶優又友右宇寓尤愚憂旴牛玗瑀盂祐禑禹紆羽芋藕虞迂遇郵釪隅雨雩勖彧旭昱栯煜稶郁頊云暈橒殞澐熉耘芸蕓"
  	],
  	[
  		"eaa1",
  		"運隕雲韻蔚鬱亐熊雄元原員圓園垣媛嫄寃怨愿援沅洹湲源爰猿瑗苑袁轅遠阮院願鴛月越鉞位偉僞危圍委威尉慰暐渭爲瑋緯胃萎葦蔿蝟衛褘謂違韋魏乳侑儒兪劉唯喩孺宥幼幽庾悠惟愈愉揄攸有杻柔柚柳楡楢油洧流游溜"
  	],
  	[
  		"eba1",
  		"濡猶猷琉瑜由留癒硫紐維臾萸裕誘諛諭踰蹂遊逾遺酉釉鍮類六堉戮毓肉育陸倫允奫尹崙淪潤玧胤贇輪鈗閏律慄栗率聿戎瀜絨融隆垠恩慇殷誾銀隱乙吟淫蔭陰音飮揖泣邑凝應膺鷹依倚儀宜意懿擬椅毅疑矣義艤薏蟻衣誼"
  	],
  	[
  		"eca1",
  		"議醫二以伊利吏夷姨履已弛彛怡易李梨泥爾珥理異痍痢移罹而耳肄苡荑裏裡貽貳邇里離飴餌匿溺瀷益翊翌翼謚人仁刃印吝咽因姻寅引忍湮燐璘絪茵藺蚓認隣靭靷鱗麟一佚佾壹日溢逸鎰馹任壬妊姙恁林淋稔臨荏賃入卄"
  	],
  	[
  		"eda1",
  		"立笠粒仍剩孕芿仔刺咨姉姿子字孜恣慈滋炙煮玆瓷疵磁紫者自茨蔗藉諮資雌作勺嚼斫昨灼炸爵綽芍酌雀鵲孱棧殘潺盞岑暫潛箴簪蠶雜丈仗匠場墻壯奬將帳庄張掌暲杖樟檣欌漿牆狀獐璋章粧腸臟臧莊葬蔣薔藏裝贓醬長"
  	],
  	[
  		"eea1",
  		"障再哉在宰才材栽梓渽滓災縡裁財載齋齎爭箏諍錚佇低儲咀姐底抵杵楮樗沮渚狙猪疽箸紵苧菹著藷詛貯躇這邸雎齟勣吊嫡寂摘敵滴狄炙的積笛籍績翟荻謫賊赤跡蹟迪迹適鏑佃佺傳全典前剪塡塼奠專展廛悛戰栓殿氈澱"
  	],
  	[
  		"efa1",
  		"煎琠田甸畑癲筌箋箭篆纏詮輾轉鈿銓錢鐫電顚顫餞切截折浙癤竊節絶占岾店漸点粘霑鮎點接摺蝶丁井亭停偵呈姃定幀庭廷征情挺政整旌晶晸柾楨檉正汀淀淨渟湞瀞炡玎珽町睛碇禎程穽精綎艇訂諪貞鄭酊釘鉦鋌錠霆靖"
  	],
  	[
  		"f0a1",
  		"靜頂鼎制劑啼堤帝弟悌提梯濟祭第臍薺製諸蹄醍除際霽題齊俎兆凋助嘲弔彫措操早晁曺曹朝條棗槽漕潮照燥爪璪眺祖祚租稠窕粗糟組繰肇藻蚤詔調趙躁造遭釣阻雕鳥族簇足鏃存尊卒拙猝倧宗從悰慫棕淙琮種終綜縱腫"
  	],
  	[
  		"f1a1",
  		"踪踵鍾鐘佐坐左座挫罪主住侏做姝胄呪周嗾奏宙州廚晝朱柱株注洲湊澍炷珠疇籌紂紬綢舟蛛註誅走躊輳週酎酒鑄駐竹粥俊儁准埈寯峻晙樽浚準濬焌畯竣蠢逡遵雋駿茁中仲衆重卽櫛楫汁葺增憎曾拯烝甑症繒蒸證贈之只"
  	],
  	[
  		"f2a1",
  		"咫地址志持指摯支旨智枝枳止池沚漬知砥祉祗紙肢脂至芝芷蜘誌識贄趾遲直稙稷織職唇嗔塵振搢晉晋桭榛殄津溱珍瑨璡畛疹盡眞瞋秦縉縝臻蔯袗診賑軫辰進鎭陣陳震侄叱姪嫉帙桎瓆疾秩窒膣蛭質跌迭斟朕什執潗緝輯"
  	],
  	[
  		"f3a1",
  		"鏶集徵懲澄且侘借叉嗟嵯差次此磋箚茶蹉車遮捉搾着窄錯鑿齪撰澯燦璨瓚竄簒纂粲纘讚贊鑽餐饌刹察擦札紮僭參塹慘慙懺斬站讒讖倉倡創唱娼廠彰愴敞昌昶暢槍滄漲猖瘡窓脹艙菖蒼債埰寀寨彩採砦綵菜蔡采釵冊柵策"
  	],
  	[
  		"f4a1",
  		"責凄妻悽處倜刺剔尺慽戚拓擲斥滌瘠脊蹠陟隻仟千喘天川擅泉淺玔穿舛薦賤踐遷釧闡阡韆凸哲喆徹撤澈綴輟轍鐵僉尖沾添甛瞻簽籤詹諂堞妾帖捷牒疊睫諜貼輒廳晴淸聽菁請靑鯖切剃替涕滯締諦逮遞體初剿哨憔抄招梢"
  	],
  	[
  		"f5a1",
  		"椒楚樵炒焦硝礁礎秒稍肖艸苕草蕉貂超酢醋醮促囑燭矗蜀觸寸忖村邨叢塚寵悤憁摠總聰蔥銃撮催崔最墜抽推椎楸樞湫皺秋芻萩諏趨追鄒酋醜錐錘鎚雛騶鰍丑畜祝竺筑築縮蓄蹙蹴軸逐春椿瑃出朮黜充忠沖蟲衝衷悴膵萃"
  	],
  	[
  		"f6a1",
  		"贅取吹嘴娶就炊翠聚脆臭趣醉驟鷲側仄厠惻測層侈値嗤峙幟恥梔治淄熾痔痴癡稚穉緇緻置致蚩輜雉馳齒則勅飭親七柒漆侵寢枕沈浸琛砧針鍼蟄秤稱快他咤唾墮妥惰打拖朶楕舵陀馱駝倬卓啄坼度托拓擢晫柝濁濯琢琸託"
  	],
  	[
  		"f7a1",
  		"鐸呑嘆坦彈憚歎灘炭綻誕奪脫探眈耽貪塔搭榻宕帑湯糖蕩兌台太怠態殆汰泰笞胎苔跆邰颱宅擇澤撑攄兎吐土討慟桶洞痛筒統通堆槌腿褪退頹偸套妬投透鬪慝特闖坡婆巴把播擺杷波派爬琶破罷芭跛頗判坂板版瓣販辦鈑"
  	],
  	[
  		"f8a1",
  		"阪八叭捌佩唄悖敗沛浿牌狽稗覇貝彭澎烹膨愎便偏扁片篇編翩遍鞭騙貶坪平枰萍評吠嬖幣廢弊斃肺蔽閉陛佈包匍匏咆哺圃布怖抛抱捕暴泡浦疱砲胞脯苞葡蒲袍褒逋鋪飽鮑幅暴曝瀑爆輻俵剽彪慓杓標漂瓢票表豹飇飄驃"
  	],
  	[
  		"f9a1",
  		"品稟楓諷豊風馮彼披疲皮被避陂匹弼必泌珌畢疋筆苾馝乏逼下何厦夏廈昰河瑕荷蝦賀遐霞鰕壑學虐謔鶴寒恨悍旱汗漢澣瀚罕翰閑閒限韓割轄函含咸啣喊檻涵緘艦銜陷鹹合哈盒蛤閤闔陜亢伉姮嫦巷恒抗杭桁沆港缸肛航"
  	],
  	[
  		"faa1",
  		"行降項亥偕咳垓奚孩害懈楷海瀣蟹解該諧邂駭骸劾核倖幸杏荇行享向嚮珦鄕響餉饗香噓墟虛許憲櫶獻軒歇險驗奕爀赫革俔峴弦懸晛泫炫玄玹現眩睍絃絢縣舷衒見賢鉉顯孑穴血頁嫌俠協夾峽挾浹狹脅脇莢鋏頰亨兄刑型"
  	],
  	[
  		"fba1",
  		"形泂滎瀅灐炯熒珩瑩荊螢衡逈邢鎣馨兮彗惠慧暳蕙蹊醯鞋乎互呼壕壺好岵弧戶扈昊晧毫浩淏湖滸澔濠濩灝狐琥瑚瓠皓祜糊縞胡芦葫蒿虎號蝴護豪鎬頀顥惑或酷婚昏混渾琿魂忽惚笏哄弘汞泓洪烘紅虹訌鴻化和嬅樺火畵"
  	],
  	[
  		"fca1",
  		"禍禾花華話譁貨靴廓擴攫確碻穫丸喚奐宦幻患換歡晥桓渙煥環紈還驩鰥活滑猾豁闊凰幌徨恍惶愰慌晃晄榥況湟滉潢煌璜皇篁簧荒蝗遑隍黃匯回廻徊恢悔懷晦會檜淮澮灰獪繪膾茴蛔誨賄劃獲宖橫鐄哮嚆孝效斅曉梟涍淆"
  	],
  	[
  		"fda1",
  		"爻肴酵驍侯候厚后吼喉嗅帿後朽煦珝逅勛勳塤壎焄熏燻薰訓暈薨喧暄煊萱卉喙毁彙徽揮暉煇諱輝麾休携烋畦虧恤譎鷸兇凶匈洶胸黑昕欣炘痕吃屹紇訖欠欽歆吸恰洽翕興僖凞喜噫囍姬嬉希憙憘戱晞曦熙熹熺犧禧稀羲詰"
  	]
  ];

  var cp949$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': cp949
  });

  var cp950 = [
  	[
  		"0",
  		"\u0000",
  		127
  	],
  	[
  		"a140",
  		"　，、。．‧；：？！︰…‥﹐﹑﹒·﹔﹕﹖﹗｜–︱—︳╴︴﹏（）︵︶｛｝︷︸〔〕︹︺【】︻︼《》︽︾〈〉︿﹀「」﹁﹂『』﹃﹄﹙﹚"
  	],
  	[
  		"a1a1",
  		"﹛﹜﹝﹞‘’“”〝〞‵′＃＆＊※§〃○●△▲◎☆★◇◆□■▽▼㊣℅¯￣＿ˍ﹉﹊﹍﹎﹋﹌﹟﹠﹡＋－×÷±√＜＞＝≦≧≠∞≒≡﹢",
  		4,
  		"～∩∪⊥∠∟⊿㏒㏑∫∮∵∴♀♂⊕⊙↑↓←→↖↗↙↘∥∣／"
  	],
  	[
  		"a240",
  		"＼∕﹨＄￥〒￠￡％＠℃℉﹩﹪﹫㏕㎜㎝㎞㏎㎡㎎㎏㏄°兙兛兞兝兡兣嗧瓩糎▁",
  		7,
  		"▏▎▍▌▋▊▉┼┴┬┤├▔─│▕┌┐└┘╭"
  	],
  	[
  		"a2a1",
  		"╮╰╯═╞╪╡◢◣◥◤╱╲╳０",
  		9,
  		"Ⅰ",
  		9,
  		"〡",
  		8,
  		"十卄卅Ａ",
  		25,
  		"ａ",
  		21
  	],
  	[
  		"a340",
  		"ｗｘｙｚΑ",
  		16,
  		"Σ",
  		6,
  		"α",
  		16,
  		"σ",
  		6,
  		"ㄅ",
  		10
  	],
  	[
  		"a3a1",
  		"ㄐ",
  		25,
  		"˙ˉˊˇˋ"
  	],
  	[
  		"a3e1",
  		"€"
  	],
  	[
  		"a440",
  		"一乙丁七乃九了二人儿入八几刀刁力匕十卜又三下丈上丫丸凡久么也乞于亡兀刃勺千叉口土士夕大女子孑孓寸小尢尸山川工己已巳巾干廾弋弓才"
  	],
  	[
  		"a4a1",
  		"丑丐不中丰丹之尹予云井互五亢仁什仃仆仇仍今介仄元允內六兮公冗凶分切刈勻勾勿化匹午升卅卞厄友及反壬天夫太夭孔少尤尺屯巴幻廿弔引心戈戶手扎支文斗斤方日曰月木欠止歹毋比毛氏水火爪父爻片牙牛犬王丙"
  	],
  	[
  		"a540",
  		"世丕且丘主乍乏乎以付仔仕他仗代令仙仞充兄冉冊冬凹出凸刊加功包匆北匝仟半卉卡占卯卮去可古右召叮叩叨叼司叵叫另只史叱台句叭叻四囚外"
  	],
  	[
  		"a5a1",
  		"央失奴奶孕它尼巨巧左市布平幼弁弘弗必戊打扔扒扑斥旦朮本未末札正母民氐永汁汀氾犯玄玉瓜瓦甘生用甩田由甲申疋白皮皿目矛矢石示禾穴立丞丟乒乓乩亙交亦亥仿伉伙伊伕伍伐休伏仲件任仰仳份企伋光兇兆先全"
  	],
  	[
  		"a640",
  		"共再冰列刑划刎刖劣匈匡匠印危吉吏同吊吐吁吋各向名合吃后吆吒因回囝圳地在圭圬圯圩夙多夷夸妄奸妃好她如妁字存宇守宅安寺尖屹州帆并年"
  	],
  	[
  		"a6a1",
  		"式弛忙忖戎戌戍成扣扛托收早旨旬旭曲曳有朽朴朱朵次此死氖汝汗汙江池汐汕污汛汍汎灰牟牝百竹米糸缶羊羽老考而耒耳聿肉肋肌臣自至臼舌舛舟艮色艾虫血行衣西阡串亨位住佇佗佞伴佛何估佐佑伽伺伸佃佔似但佣"
  	],
  	[
  		"a740",
  		"作你伯低伶余佝佈佚兌克免兵冶冷別判利刪刨劫助努劬匣即卵吝吭吞吾否呎吧呆呃吳呈呂君吩告吹吻吸吮吵吶吠吼呀吱含吟听囪困囤囫坊坑址坍"
  	],
  	[
  		"a7a1",
  		"均坎圾坐坏圻壯夾妝妒妨妞妣妙妖妍妤妓妊妥孝孜孚孛完宋宏尬局屁尿尾岐岑岔岌巫希序庇床廷弄弟彤形彷役忘忌志忍忱快忸忪戒我抄抗抖技扶抉扭把扼找批扳抒扯折扮投抓抑抆改攻攸旱更束李杏材村杜杖杞杉杆杠"
  	],
  	[
  		"a840",
  		"杓杗步每求汞沙沁沈沉沅沛汪決沐汰沌汨沖沒汽沃汲汾汴沆汶沍沔沘沂灶灼災灸牢牡牠狄狂玖甬甫男甸皂盯矣私秀禿究系罕肖肓肝肘肛肚育良芒"
  	],
  	[
  		"a8a1",
  		"芋芍見角言谷豆豕貝赤走足身車辛辰迂迆迅迄巡邑邢邪邦那酉釆里防阮阱阪阬並乖乳事些亞享京佯依侍佳使佬供例來侃佰併侈佩佻侖佾侏侑佺兔兒兕兩具其典冽函刻券刷刺到刮制剁劾劻卒協卓卑卦卷卸卹取叔受味呵"
  	],
  	[
  		"a940",
  		"咖呸咕咀呻呷咄咒咆呼咐呱呶和咚呢周咋命咎固垃坷坪坩坡坦坤坼夜奉奇奈奄奔妾妻委妹妮姑姆姐姍始姓姊妯妳姒姅孟孤季宗定官宜宙宛尚屈居"
  	],
  	[
  		"a9a1",
  		"屆岷岡岸岩岫岱岳帘帚帖帕帛帑幸庚店府底庖延弦弧弩往征彿彼忝忠忽念忿怏怔怯怵怖怪怕怡性怩怫怛或戕房戾所承拉拌拄抿拂抹拒招披拓拔拋拈抨抽押拐拙拇拍抵拚抱拘拖拗拆抬拎放斧於旺昔易昌昆昂明昀昏昕昊"
  	],
  	[
  		"aa40",
  		"昇服朋杭枋枕東果杳杷枇枝林杯杰板枉松析杵枚枓杼杪杲欣武歧歿氓氛泣注泳沱泌泥河沽沾沼波沫法泓沸泄油況沮泗泅泱沿治泡泛泊沬泯泜泖泠"
  	],
  	[
  		"aaa1",
  		"炕炎炒炊炙爬爭爸版牧物狀狎狙狗狐玩玨玟玫玥甽疝疙疚的盂盲直知矽社祀祁秉秈空穹竺糾罔羌羋者肺肥肢肱股肫肩肴肪肯臥臾舍芳芝芙芭芽芟芹花芬芥芯芸芣芰芾芷虎虱初表軋迎返近邵邸邱邶采金長門阜陀阿阻附"
  	],
  	[
  		"ab40",
  		"陂隹雨青非亟亭亮信侵侯便俠俑俏保促侶俘俟俊俗侮俐俄係俚俎俞侷兗冒冑冠剎剃削前剌剋則勇勉勃勁匍南卻厚叛咬哀咨哎哉咸咦咳哇哂咽咪品"
  	],
  	[
  		"aba1",
  		"哄哈咯咫咱咻咩咧咿囿垂型垠垣垢城垮垓奕契奏奎奐姜姘姿姣姨娃姥姪姚姦威姻孩宣宦室客宥封屎屏屍屋峙峒巷帝帥帟幽庠度建弈弭彥很待徊律徇後徉怒思怠急怎怨恍恰恨恢恆恃恬恫恪恤扁拜挖按拼拭持拮拽指拱拷"
  	],
  	[
  		"ac40",
  		"拯括拾拴挑挂政故斫施既春昭映昧是星昨昱昤曷柿染柱柔某柬架枯柵柩柯柄柑枴柚查枸柏柞柳枰柙柢柝柒歪殃殆段毒毗氟泉洋洲洪流津洌洱洞洗"
  	],
  	[
  		"aca1",
  		"活洽派洶洛泵洹洧洸洩洮洵洎洫炫為炳炬炯炭炸炮炤爰牲牯牴狩狠狡玷珊玻玲珍珀玳甚甭畏界畎畋疫疤疥疢疣癸皆皇皈盈盆盃盅省盹相眉看盾盼眇矜砂研砌砍祆祉祈祇禹禺科秒秋穿突竿竽籽紂紅紀紉紇約紆缸美羿耄"
  	],
  	[
  		"ad40",
  		"耐耍耑耶胖胥胚胃胄背胡胛胎胞胤胝致舢苧范茅苣苛苦茄若茂茉苒苗英茁苜苔苑苞苓苟苯茆虐虹虻虺衍衫要觔計訂訃貞負赴赳趴軍軌述迦迢迪迥"
  	],
  	[
  		"ada1",
  		"迭迫迤迨郊郎郁郃酋酊重閂限陋陌降面革韋韭音頁風飛食首香乘亳倌倍倣俯倦倥俸倩倖倆值借倚倒們俺倀倔倨俱倡個候倘俳修倭倪俾倫倉兼冤冥冢凍凌准凋剖剜剔剛剝匪卿原厝叟哨唐唁唷哼哥哲唆哺唔哩哭員唉哮哪"
  	],
  	[
  		"ae40",
  		"哦唧唇哽唏圃圄埂埔埋埃堉夏套奘奚娑娘娜娟娛娓姬娠娣娩娥娌娉孫屘宰害家宴宮宵容宸射屑展屐峭峽峻峪峨峰島崁峴差席師庫庭座弱徒徑徐恙"
  	],
  	[
  		"aea1",
  		"恣恥恐恕恭恩息悄悟悚悍悔悌悅悖扇拳挈拿捎挾振捕捂捆捏捉挺捐挽挪挫挨捍捌效敉料旁旅時晉晏晃晒晌晅晁書朔朕朗校核案框桓根桂桔栩梳栗桌桑栽柴桐桀格桃株桅栓栘桁殊殉殷氣氧氨氦氤泰浪涕消涇浦浸海浙涓"
  	],
  	[
  		"af40",
  		"浬涉浮浚浴浩涌涊浹涅浥涔烊烘烤烙烈烏爹特狼狹狽狸狷玆班琉珮珠珪珞畔畝畜畚留疾病症疲疳疽疼疹痂疸皋皰益盍盎眩真眠眨矩砰砧砸砝破砷"
  	],
  	[
  		"afa1",
  		"砥砭砠砟砲祕祐祠祟祖神祝祗祚秤秣秧租秦秩秘窄窈站笆笑粉紡紗紋紊素索純紐紕級紜納紙紛缺罟羔翅翁耆耘耕耙耗耽耿胱脂胰脅胭胴脆胸胳脈能脊胼胯臭臬舀舐航舫舨般芻茫荒荔荊茸荐草茵茴荏茲茹茶茗荀茱茨荃"
  	],
  	[
  		"b040",
  		"虔蚊蚪蚓蚤蚩蚌蚣蚜衰衷袁袂衽衹記訐討訌訕訊託訓訖訏訑豈豺豹財貢起躬軒軔軏辱送逆迷退迺迴逃追逅迸邕郡郝郢酒配酌釘針釗釜釙閃院陣陡"
  	],
  	[
  		"b0a1",
  		"陛陝除陘陞隻飢馬骨高鬥鬲鬼乾偺偽停假偃偌做偉健偶偎偕偵側偷偏倏偯偭兜冕凰剪副勒務勘動匐匏匙匿區匾參曼商啪啦啄啞啡啃啊唱啖問啕唯啤唸售啜唬啣唳啁啗圈國圉域堅堊堆埠埤基堂堵執培夠奢娶婁婉婦婪婀"
  	],
  	[
  		"b140",
  		"娼婢婚婆婊孰寇寅寄寂宿密尉專將屠屜屝崇崆崎崛崖崢崑崩崔崙崤崧崗巢常帶帳帷康庸庶庵庾張強彗彬彩彫得徙從徘御徠徜恿患悉悠您惋悴惦悽"
  	],
  	[
  		"b1a1",
  		"情悻悵惜悼惘惕惆惟悸惚惇戚戛扈掠控捲掖探接捷捧掘措捱掩掉掃掛捫推掄授掙採掬排掏掀捻捩捨捺敝敖救教敗啟敏敘敕敔斜斛斬族旋旌旎晝晚晤晨晦晞曹勗望梁梯梢梓梵桿桶梱梧梗械梃棄梭梆梅梔條梨梟梡梂欲殺"
  	],
  	[
  		"b240",
  		"毫毬氫涎涼淳淙液淡淌淤添淺清淇淋涯淑涮淞淹涸混淵淅淒渚涵淚淫淘淪深淮淨淆淄涪淬涿淦烹焉焊烽烯爽牽犁猜猛猖猓猙率琅琊球理現琍瓠瓶"
  	],
  	[
  		"b2a1",
  		"瓷甜產略畦畢異疏痔痕疵痊痍皎盔盒盛眷眾眼眶眸眺硫硃硎祥票祭移窒窕笠笨笛第符笙笞笮粒粗粕絆絃統紮紹紼絀細紳組累終紲紱缽羞羚翌翎習耜聊聆脯脖脣脫脩脰脤舂舵舷舶船莎莞莘荸莢莖莽莫莒莊莓莉莠荷荻荼"
  	],
  	[
  		"b340",
  		"莆莧處彪蛇蛀蚶蛄蚵蛆蛋蚱蚯蛉術袞袈被袒袖袍袋覓規訪訝訣訥許設訟訛訢豉豚販責貫貨貪貧赧赦趾趺軛軟這逍通逗連速逝逐逕逞造透逢逖逛途"
  	],
  	[
  		"b3a1",
  		"部郭都酗野釵釦釣釧釭釩閉陪陵陳陸陰陴陶陷陬雀雪雩章竟頂頃魚鳥鹵鹿麥麻傢傍傅備傑傀傖傘傚最凱割剴創剩勞勝勛博厥啻喀喧啼喊喝喘喂喜喪喔喇喋喃喳單喟唾喲喚喻喬喱啾喉喫喙圍堯堪場堤堰報堡堝堠壹壺奠"
  	],
  	[
  		"b440",
  		"婷媚婿媒媛媧孳孱寒富寓寐尊尋就嵌嵐崴嵇巽幅帽幀幃幾廊廁廂廄弼彭復循徨惑惡悲悶惠愜愣惺愕惰惻惴慨惱愎惶愉愀愒戟扉掣掌描揀揩揉揆揍"
  	],
  	[
  		"b4a1",
  		"插揣提握揖揭揮捶援揪換摒揚揹敞敦敢散斑斐斯普晰晴晶景暑智晾晷曾替期朝棺棕棠棘棗椅棟棵森棧棹棒棲棣棋棍植椒椎棉棚楮棻款欺欽殘殖殼毯氮氯氬港游湔渡渲湧湊渠渥渣減湛湘渤湖湮渭渦湯渴湍渺測湃渝渾滋"
  	],
  	[
  		"b540",
  		"溉渙湎湣湄湲湩湟焙焚焦焰無然煮焜牌犄犀猶猥猴猩琺琪琳琢琥琵琶琴琯琛琦琨甥甦畫番痢痛痣痙痘痞痠登發皖皓皴盜睏短硝硬硯稍稈程稅稀窘"
  	],
  	[
  		"b5a1",
  		"窗窖童竣等策筆筐筒答筍筋筏筑粟粥絞結絨絕紫絮絲絡給絢絰絳善翔翕耋聒肅腕腔腋腑腎脹腆脾腌腓腴舒舜菩萃菸萍菠菅萋菁華菱菴著萊菰萌菌菽菲菊萸萎萄菜萇菔菟虛蛟蛙蛭蛔蛛蛤蛐蛞街裁裂袱覃視註詠評詞証詁"
  	],
  	[
  		"b640",
  		"詔詛詐詆訴診訶詖象貂貯貼貳貽賁費賀貴買貶貿貸越超趁跎距跋跚跑跌跛跆軻軸軼辜逮逵週逸進逶鄂郵鄉郾酣酥量鈔鈕鈣鈉鈞鈍鈐鈇鈑閔閏開閑"
  	],
  	[
  		"b6a1",
  		"間閒閎隊階隋陽隅隆隍陲隄雁雅雄集雇雯雲韌項順須飧飪飯飩飲飭馮馭黃黍黑亂傭債傲傳僅傾催傷傻傯僇剿剷剽募勦勤勢勣匯嗟嗨嗓嗦嗎嗜嗇嗑嗣嗤嗯嗚嗡嗅嗆嗥嗉園圓塞塑塘塗塚塔填塌塭塊塢塒塋奧嫁嫉嫌媾媽媼"
  	],
  	[
  		"b740",
  		"媳嫂媲嵩嵯幌幹廉廈弒彙徬微愚意慈感想愛惹愁愈慎慌慄慍愾愴愧愍愆愷戡戢搓搾搞搪搭搽搬搏搜搔損搶搖搗搆敬斟新暗暉暇暈暖暄暘暍會榔業"
  	],
  	[
  		"b7a1",
  		"楚楷楠楔極椰概楊楨楫楞楓楹榆楝楣楛歇歲毀殿毓毽溢溯滓溶滂源溝滇滅溥溘溼溺溫滑準溜滄滔溪溧溴煎煙煩煤煉照煜煬煦煌煥煞煆煨煖爺牒猷獅猿猾瑯瑚瑕瑟瑞瑁琿瑙瑛瑜當畸瘀痰瘁痲痱痺痿痴痳盞盟睛睫睦睞督"
  	],
  	[
  		"b840",
  		"睹睪睬睜睥睨睢矮碎碰碗碘碌碉硼碑碓硿祺祿禁萬禽稜稚稠稔稟稞窟窠筷節筠筮筧粱粳粵經絹綑綁綏絛置罩罪署義羨群聖聘肆肄腱腰腸腥腮腳腫"
  	],
  	[
  		"b8a1",
  		"腹腺腦舅艇蒂葷落萱葵葦葫葉葬葛萼萵葡董葩葭葆虞虜號蛹蜓蜈蜇蜀蛾蛻蜂蜃蜆蜊衙裟裔裙補裘裝裡裊裕裒覜解詫該詳試詩詰誇詼詣誠話誅詭詢詮詬詹詻訾詨豢貊貉賊資賈賄貲賃賂賅跡跟跨路跳跺跪跤跦躲較載軾輊"
  	],
  	[
  		"b940",
  		"辟農運遊道遂達逼違遐遇遏過遍遑逾遁鄒鄗酬酪酩釉鈷鉗鈸鈽鉀鈾鉛鉋鉤鉑鈴鉉鉍鉅鈹鈿鉚閘隘隔隕雍雋雉雊雷電雹零靖靴靶預頑頓頊頒頌飼飴"
  	],
  	[
  		"b9a1",
  		"飽飾馳馱馴髡鳩麂鼎鼓鼠僧僮僥僖僭僚僕像僑僱僎僩兢凳劃劂匱厭嗾嘀嘛嘗嗽嘔嘆嘉嘍嘎嗷嘖嘟嘈嘐嗶團圖塵塾境墓墊塹墅塽壽夥夢夤奪奩嫡嫦嫩嫗嫖嫘嫣孵寞寧寡寥實寨寢寤察對屢嶄嶇幛幣幕幗幔廓廖弊彆彰徹慇"
  	],
  	[
  		"ba40",
  		"愿態慷慢慣慟慚慘慵截撇摘摔撤摸摟摺摑摧搴摭摻敲斡旗旖暢暨暝榜榨榕槁榮槓構榛榷榻榫榴槐槍榭槌榦槃榣歉歌氳漳演滾漓滴漩漾漠漬漏漂漢"
  	],
  	[
  		"baa1",
  		"滿滯漆漱漸漲漣漕漫漯澈漪滬漁滲滌滷熔熙煽熊熄熒爾犒犖獄獐瑤瑣瑪瑰瑭甄疑瘧瘍瘋瘉瘓盡監瞄睽睿睡磁碟碧碳碩碣禎福禍種稱窪窩竭端管箕箋筵算箝箔箏箸箇箄粹粽精綻綰綜綽綾綠緊綴網綱綺綢綿綵綸維緒緇綬"
  	],
  	[
  		"bb40",
  		"罰翠翡翟聞聚肇腐膀膏膈膊腿膂臧臺與舔舞艋蓉蒿蓆蓄蒙蒞蒲蒜蓋蒸蓀蓓蒐蒼蓑蓊蜿蜜蜻蜢蜥蜴蜘蝕蜷蜩裳褂裴裹裸製裨褚裯誦誌語誣認誡誓誤"
  	],
  	[
  		"bba1",
  		"說誥誨誘誑誚誧豪貍貌賓賑賒赫趙趕跼輔輒輕輓辣遠遘遜遣遙遞遢遝遛鄙鄘鄞酵酸酷酴鉸銀銅銘銖鉻銓銜銨鉼銑閡閨閩閣閥閤隙障際雌雒需靼鞅韶頗領颯颱餃餅餌餉駁骯骰髦魁魂鳴鳶鳳麼鼻齊億儀僻僵價儂儈儉儅凜"
  	],
  	[
  		"bc40",
  		"劇劈劉劍劊勰厲嘮嘻嘹嘲嘿嘴嘩噓噎噗噴嘶嘯嘰墀墟增墳墜墮墩墦奭嬉嫻嬋嫵嬌嬈寮寬審寫層履嶝嶔幢幟幡廢廚廟廝廣廠彈影德徵慶慧慮慝慕憂"
  	],
  	[
  		"bca1",
  		"慼慰慫慾憧憐憫憎憬憚憤憔憮戮摩摯摹撞撲撈撐撰撥撓撕撩撒撮播撫撚撬撙撢撳敵敷數暮暫暴暱樣樟槨樁樞標槽模樓樊槳樂樅槭樑歐歎殤毅毆漿潼澄潑潦潔澆潭潛潸潮澎潺潰潤澗潘滕潯潠潟熟熬熱熨牖犛獎獗瑩璋璃"
  	],
  	[
  		"bd40",
  		"瑾璀畿瘠瘩瘟瘤瘦瘡瘢皚皺盤瞎瞇瞌瞑瞋磋磅確磊碾磕碼磐稿稼穀稽稷稻窯窮箭箱範箴篆篇篁箠篌糊締練緯緻緘緬緝編緣線緞緩綞緙緲緹罵罷羯"
  	],
  	[
  		"bda1",
  		"翩耦膛膜膝膠膚膘蔗蔽蔚蓮蔬蔭蔓蔑蔣蔡蔔蓬蔥蓿蔆螂蝴蝶蝠蝦蝸蝨蝙蝗蝌蝓衛衝褐複褒褓褕褊誼諒談諄誕請諸課諉諂調誰論諍誶誹諛豌豎豬賠賞賦賤賬賭賢賣賜質賡赭趟趣踫踐踝踢踏踩踟踡踞躺輝輛輟輩輦輪輜輞"
  	],
  	[
  		"be40",
  		"輥適遮遨遭遷鄰鄭鄧鄱醇醉醋醃鋅銻銷鋪銬鋤鋁銳銼鋒鋇鋰銲閭閱霄霆震霉靠鞍鞋鞏頡頫頜颳養餓餒餘駝駐駟駛駑駕駒駙骷髮髯鬧魅魄魷魯鴆鴉"
  	],
  	[
  		"bea1",
  		"鴃麩麾黎墨齒儒儘儔儐儕冀冪凝劑劓勳噙噫噹噩噤噸噪器噥噱噯噬噢噶壁墾壇壅奮嬝嬴學寰導彊憲憑憩憊懍憶憾懊懈戰擅擁擋撻撼據擄擇擂操撿擒擔撾整曆曉暹曄曇暸樽樸樺橙橫橘樹橄橢橡橋橇樵機橈歙歷氅濂澱澡"
  	],
  	[
  		"bf40",
  		"濃澤濁澧澳激澹澶澦澠澴熾燉燐燒燈燕熹燎燙燜燃燄獨璜璣璘璟璞瓢甌甍瘴瘸瘺盧盥瞠瞞瞟瞥磨磚磬磧禦積穎穆穌穋窺篙簑築篤篛篡篩篦糕糖縊"
  	],
  	[
  		"bfa1",
  		"縑縈縛縣縞縝縉縐罹羲翰翱翮耨膳膩膨臻興艘艙蕊蕙蕈蕨蕩蕃蕉蕭蕪蕞螃螟螞螢融衡褪褲褥褫褡親覦諦諺諫諱謀諜諧諮諾謁謂諷諭諳諶諼豫豭貓賴蹄踱踴蹂踹踵輻輯輸輳辨辦遵遴選遲遼遺鄴醒錠錶鋸錳錯錢鋼錫錄錚"
  	],
  	[
  		"c040",
  		"錐錦錡錕錮錙閻隧隨險雕霎霑霖霍霓霏靛靜靦鞘頰頸頻頷頭頹頤餐館餞餛餡餚駭駢駱骸骼髻髭鬨鮑鴕鴣鴦鴨鴒鴛默黔龍龜優償儡儲勵嚎嚀嚐嚅嚇"
  	],
  	[
  		"c0a1",
  		"嚏壕壓壑壎嬰嬪嬤孺尷屨嶼嶺嶽嶸幫彌徽應懂懇懦懋戲戴擎擊擘擠擰擦擬擱擢擭斂斃曙曖檀檔檄檢檜櫛檣橾檗檐檠歜殮毚氈濘濱濟濠濛濤濫濯澀濬濡濩濕濮濰燧營燮燦燥燭燬燴燠爵牆獰獲璩環璦璨癆療癌盪瞳瞪瞰瞬"
  	],
  	[
  		"c140",
  		"瞧瞭矯磷磺磴磯礁禧禪穗窿簇簍篾篷簌篠糠糜糞糢糟糙糝縮績繆縷縲繃縫總縱繅繁縴縹繈縵縿縯罄翳翼聱聲聰聯聳臆臃膺臂臀膿膽臉膾臨舉艱薪"
  	],
  	[
  		"c1a1",
  		"薄蕾薜薑薔薯薛薇薨薊虧蟀蟑螳蟒蟆螫螻螺蟈蟋褻褶襄褸褽覬謎謗謙講謊謠謝謄謐豁谿豳賺賽購賸賻趨蹉蹋蹈蹊轄輾轂轅輿避遽還邁邂邀鄹醣醞醜鍍鎂錨鍵鍊鍥鍋錘鍾鍬鍛鍰鍚鍔闊闋闌闈闆隱隸雖霜霞鞠韓顆颶餵騁"
  	],
  	[
  		"c240",
  		"駿鮮鮫鮪鮭鴻鴿麋黏點黜黝黛鼾齋叢嚕嚮壙壘嬸彝懣戳擴擲擾攆擺擻擷斷曜朦檳檬櫃檻檸櫂檮檯歟歸殯瀉瀋濾瀆濺瀑瀏燻燼燾燸獷獵璧璿甕癖癘"
  	],
  	[
  		"c2a1",
  		"癒瞽瞿瞻瞼礎禮穡穢穠竄竅簫簧簪簞簣簡糧織繕繞繚繡繒繙罈翹翻職聶臍臏舊藏薩藍藐藉薰薺薹薦蟯蟬蟲蟠覆覲觴謨謹謬謫豐贅蹙蹣蹦蹤蹟蹕軀轉轍邇邃邈醫醬釐鎔鎊鎖鎢鎳鎮鎬鎰鎘鎚鎗闔闖闐闕離雜雙雛雞霤鞣鞦"
  	],
  	[
  		"c340",
  		"鞭韹額顏題顎顓颺餾餿餽餮馥騎髁鬃鬆魏魎魍鯊鯉鯽鯈鯀鵑鵝鵠黠鼕鼬儳嚥壞壟壢寵龐廬懲懷懶懵攀攏曠曝櫥櫝櫚櫓瀛瀟瀨瀚瀝瀕瀘爆爍牘犢獸"
  	],
  	[
  		"c3a1",
  		"獺璽瓊瓣疇疆癟癡矇礙禱穫穩簾簿簸簽簷籀繫繭繹繩繪羅繳羶羹羸臘藩藝藪藕藤藥藷蟻蠅蠍蟹蟾襠襟襖襞譁譜識證譚譎譏譆譙贈贊蹼蹲躇蹶蹬蹺蹴轔轎辭邊邋醱醮鏡鏑鏟鏃鏈鏜鏝鏖鏢鏍鏘鏤鏗鏨關隴難霪霧靡韜韻類"
  	],
  	[
  		"c440",
  		"願顛颼饅饉騖騙鬍鯨鯧鯖鯛鶉鵡鵲鵪鵬麒麗麓麴勸嚨嚷嚶嚴嚼壤孀孃孽寶巉懸懺攘攔攙曦朧櫬瀾瀰瀲爐獻瓏癢癥礦礪礬礫竇競籌籃籍糯糰辮繽繼"
  	],
  	[
  		"c4a1",
  		"纂罌耀臚艦藻藹蘑藺蘆蘋蘇蘊蠔蠕襤覺觸議譬警譯譟譫贏贍躉躁躅躂醴釋鐘鐃鏽闡霰飄饒饑馨騫騰騷騵鰓鰍鹹麵黨鼯齟齣齡儷儸囁囀囂夔屬巍懼懾攝攜斕曩櫻欄櫺殲灌爛犧瓖瓔癩矓籐纏續羼蘗蘭蘚蠣蠢蠡蠟襪襬覽譴"
  	],
  	[
  		"c540",
  		"護譽贓躊躍躋轟辯醺鐮鐳鐵鐺鐸鐲鐫闢霸霹露響顧顥饗驅驃驀騾髏魔魑鰭鰥鶯鶴鷂鶸麝黯鼙齜齦齧儼儻囈囊囉孿巔巒彎懿攤權歡灑灘玀瓤疊癮癬"
  	],
  	[
  		"c5a1",
  		"禳籠籟聾聽臟襲襯觼讀贖贗躑躓轡酈鑄鑑鑒霽霾韃韁顫饕驕驍髒鬚鱉鰱鰾鰻鷓鷗鼴齬齪龔囌巖戀攣攫攪曬欐瓚竊籤籣籥纓纖纔臢蘸蘿蠱變邐邏鑣鑠鑤靨顯饜驚驛驗髓體髑鱔鱗鱖鷥麟黴囑壩攬灞癱癲矗罐羈蠶蠹衢讓讒"
  	],
  	[
  		"c640",
  		"讖艷贛釀鑪靂靈靄韆顰驟鬢魘鱟鷹鷺鹼鹽鼇齷齲廳欖灣籬籮蠻觀躡釁鑲鑰顱饞髖鬣黌灤矚讚鑷韉驢驥纜讜躪釅鑽鑾鑼鱷鱸黷豔鑿鸚爨驪鬱鸛鸞籲"
  	],
  	[
  		"c940",
  		"乂乜凵匚厂万丌乇亍囗兀屮彳丏冇与丮亓仂仉仈冘勼卬厹圠夃夬尐巿旡殳毌气爿丱丼仨仜仩仡仝仚刌匜卌圢圣夗夯宁宄尒尻屴屳帄庀庂忉戉扐氕"
  	],
  	[
  		"c9a1",
  		"氶汃氿氻犮犰玊禸肊阞伎优伬仵伔仱伀价伈伝伂伅伢伓伄仴伒冱刓刉刐劦匢匟卍厊吇囡囟圮圪圴夼妀奼妅奻奾奷奿孖尕尥屼屺屻屾巟幵庄异弚彴忕忔忏扜扞扤扡扦扢扙扠扚扥旯旮朾朹朸朻机朿朼朳氘汆汒汜汏汊汔汋"
  	],
  	[
  		"ca40",
  		"汌灱牞犴犵玎甪癿穵网艸艼芀艽艿虍襾邙邗邘邛邔阢阤阠阣佖伻佢佉体佤伾佧佒佟佁佘伭伳伿佡冏冹刜刞刡劭劮匉卣卲厎厏吰吷吪呔呅吙吜吥吘"
  	],
  	[
  		"caa1",
  		"吽呏呁吨吤呇囮囧囥坁坅坌坉坋坒夆奀妦妘妠妗妎妢妐妏妧妡宎宒尨尪岍岏岈岋岉岒岊岆岓岕巠帊帎庋庉庌庈庍弅弝彸彶忒忑忐忭忨忮忳忡忤忣忺忯忷忻怀忴戺抃抌抎抏抔抇扱扻扺扰抁抈扷扽扲扴攷旰旴旳旲旵杅杇"
  	],
  	[
  		"cb40",
  		"杙杕杌杈杝杍杚杋毐氙氚汸汧汫沄沋沏汱汯汩沚汭沇沕沜汦汳汥汻沎灴灺牣犿犽狃狆狁犺狅玕玗玓玔玒町甹疔疕皁礽耴肕肙肐肒肜芐芏芅芎芑芓"
  	],
  	[
  		"cba1",
  		"芊芃芄豸迉辿邟邡邥邞邧邠阰阨阯阭丳侘佼侅佽侀侇佶佴侉侄佷佌侗佪侚佹侁佸侐侜侔侞侒侂侕佫佮冞冼冾刵刲刳剆刱劼匊匋匼厒厔咇呿咁咑咂咈呫呺呾呥呬呴呦咍呯呡呠咘呣呧呤囷囹坯坲坭坫坱坰坶垀坵坻坳坴坢"
  	],
  	[
  		"cc40",
  		"坨坽夌奅妵妺姏姎妲姌姁妶妼姃姖妱妽姀姈妴姇孢孥宓宕屄屇岮岤岠岵岯岨岬岟岣岭岢岪岧岝岥岶岰岦帗帔帙弨弢弣弤彔徂彾彽忞忥怭怦怙怲怋"
  	],
  	[
  		"cca1",
  		"怴怊怗怳怚怞怬怢怍怐怮怓怑怌怉怜戔戽抭抴拑抾抪抶拊抮抳抯抻抩抰抸攽斨斻昉旼昄昒昈旻昃昋昍昅旽昑昐曶朊枅杬枎枒杶杻枘枆构杴枍枌杺枟枑枙枃杽极杸杹枔欥殀歾毞氝沓泬泫泮泙沶泔沭泧沷泐泂沺泃泆泭泲"
  	],
  	[
  		"cd40",
  		"泒泝沴沊沝沀泞泀洰泍泇沰泹泏泩泑炔炘炅炓炆炄炑炖炂炚炃牪狖狋狘狉狜狒狔狚狌狑玤玡玭玦玢玠玬玝瓝瓨甿畀甾疌疘皯盳盱盰盵矸矼矹矻矺"
  	],
  	[
  		"cda1",
  		"矷祂礿秅穸穻竻籵糽耵肏肮肣肸肵肭舠芠苀芫芚芘芛芵芧芮芼芞芺芴芨芡芩苂芤苃芶芢虰虯虭虮豖迒迋迓迍迖迕迗邲邴邯邳邰阹阽阼阺陃俍俅俓侲俉俋俁俔俜俙侻侳俛俇俖侺俀侹俬剄剉勀勂匽卼厗厖厙厘咺咡咭咥哏"
  	],
  	[
  		"ce40",
  		"哃茍咷咮哖咶哅哆咠呰咼咢咾呲哞咰垵垞垟垤垌垗垝垛垔垘垏垙垥垚垕壴复奓姡姞姮娀姱姝姺姽姼姶姤姲姷姛姩姳姵姠姾姴姭宨屌峐峘峌峗峋峛"
  	],
  	[
  		"cea1",
  		"峞峚峉峇峊峖峓峔峏峈峆峎峟峸巹帡帢帣帠帤庰庤庢庛庣庥弇弮彖徆怷怹恔恲恞恅恓恇恉恛恌恀恂恟怤恄恘恦恮扂扃拏挍挋拵挎挃拫拹挏挌拸拶挀挓挔拺挕拻拰敁敃斪斿昶昡昲昵昜昦昢昳昫昺昝昴昹昮朏朐柁柲柈枺"
  	],
  	[
  		"cf40",
  		"柜枻柸柘柀枷柅柫柤柟枵柍枳柷柶柮柣柂枹柎柧柰枲柼柆柭柌枮柦柛柺柉柊柃柪柋欨殂殄殶毖毘毠氠氡洨洴洭洟洼洿洒洊泚洳洄洙洺洚洑洀洝浂"
  	],
  	[
  		"cfa1",
  		"洁洘洷洃洏浀洇洠洬洈洢洉洐炷炟炾炱炰炡炴炵炩牁牉牊牬牰牳牮狊狤狨狫狟狪狦狣玅珌珂珈珅玹玶玵玴珫玿珇玾珃珆玸珋瓬瓮甮畇畈疧疪癹盄眈眃眄眅眊盷盻盺矧矨砆砑砒砅砐砏砎砉砃砓祊祌祋祅祄秕种秏秖秎窀"
  	],
  	[
  		"d040",
  		"穾竑笀笁籺籸籹籿粀粁紃紈紁罘羑羍羾耇耎耏耔耷胘胇胠胑胈胂胐胅胣胙胜胊胕胉胏胗胦胍臿舡芔苙苾苹茇苨茀苕茺苫苖苴苬苡苲苵茌苻苶苰苪"
  	],
  	[
  		"d0a1",
  		"苤苠苺苳苭虷虴虼虳衁衎衧衪衩觓訄訇赲迣迡迮迠郱邽邿郕郅邾郇郋郈釔釓陔陏陑陓陊陎倞倅倇倓倢倰倛俵俴倳倷倬俶俷倗倜倠倧倵倯倱倎党冔冓凊凄凅凈凎剡剚剒剞剟剕剢勍匎厞唦哢唗唒哧哳哤唚哿唄唈哫唑唅哱"
  	],
  	[
  		"d140",
  		"唊哻哷哸哠唎唃唋圁圂埌堲埕埒垺埆垽垼垸垶垿埇埐垹埁夎奊娙娖娭娮娕娏娗娊娞娳孬宧宭宬尃屖屔峬峿峮峱峷崀峹帩帨庨庮庪庬弳弰彧恝恚恧"
  	],
  	[
  		"d1a1",
  		"恁悢悈悀悒悁悝悃悕悛悗悇悜悎戙扆拲挐捖挬捄捅挶捃揤挹捋捊挼挩捁挴捘捔捙挭捇挳捚捑挸捗捀捈敊敆旆旃旄旂晊晟晇晑朒朓栟栚桉栲栳栻桋桏栖栱栜栵栫栭栯桎桄栴栝栒栔栦栨栮桍栺栥栠欬欯欭欱欴歭肂殈毦毤"
  	],
  	[
  		"d240",
  		"毨毣毢毧氥浺浣浤浶洍浡涒浘浢浭浯涑涍淯浿涆浞浧浠涗浰浼浟涂涘洯浨涋浾涀涄洖涃浻浽浵涐烜烓烑烝烋缹烢烗烒烞烠烔烍烅烆烇烚烎烡牂牸"
  	],
  	[
  		"d2a1",
  		"牷牶猀狺狴狾狶狳狻猁珓珙珥珖玼珧珣珩珜珒珛珔珝珚珗珘珨瓞瓟瓴瓵甡畛畟疰痁疻痄痀疿疶疺皊盉眝眛眐眓眒眣眑眕眙眚眢眧砣砬砢砵砯砨砮砫砡砩砳砪砱祔祛祏祜祓祒祑秫秬秠秮秭秪秜秞秝窆窉窅窋窌窊窇竘笐"
  	],
  	[
  		"d340",
  		"笄笓笅笏笈笊笎笉笒粄粑粊粌粈粍粅紞紝紑紎紘紖紓紟紒紏紌罜罡罞罠罝罛羖羒翃翂翀耖耾耹胺胲胹胵脁胻脀舁舯舥茳茭荄茙荑茥荖茿荁茦茜茢"
  	],
  	[
  		"d3a1",
  		"荂荎茛茪茈茼荍茖茤茠茷茯茩荇荅荌荓茞茬荋茧荈虓虒蚢蚨蚖蚍蚑蚞蚇蚗蚆蚋蚚蚅蚥蚙蚡蚧蚕蚘蚎蚝蚐蚔衃衄衭衵衶衲袀衱衿衯袃衾衴衼訒豇豗豻貤貣赶赸趵趷趶軑軓迾迵适迿迻逄迼迶郖郠郙郚郣郟郥郘郛郗郜郤酐"
  	],
  	[
  		"d440",
  		"酎酏釕釢釚陜陟隼飣髟鬯乿偰偪偡偞偠偓偋偝偲偈偍偁偛偊偢倕偅偟偩偫偣偤偆偀偮偳偗偑凐剫剭剬剮勖勓匭厜啵啶唼啍啐唴唪啑啢唶唵唰啒啅"
  	],
  	[
  		"d4a1",
  		"唌唲啥啎唹啈唭唻啀啋圊圇埻堔埢埶埜埴堀埭埽堈埸堋埳埏堇埮埣埲埥埬埡堎埼堐埧堁堌埱埩埰堍堄奜婠婘婕婧婞娸娵婭婐婟婥婬婓婤婗婃婝婒婄婛婈媎娾婍娹婌婰婩婇婑婖婂婜孲孮寁寀屙崞崋崝崚崠崌崨崍崦崥崏"
  	],
  	[
  		"d540",
  		"崰崒崣崟崮帾帴庱庴庹庲庳弶弸徛徖徟悊悐悆悾悰悺惓惔惏惤惙惝惈悱惛悷惊悿惃惍惀挲捥掊掂捽掽掞掭掝掗掫掎捯掇掐据掯捵掜捭掮捼掤挻掟"
  	],
  	[
  		"d5a1",
  		"捸掅掁掑掍捰敓旍晥晡晛晙晜晢朘桹梇梐梜桭桮梮梫楖桯梣梬梩桵桴梲梏桷梒桼桫桲梪梀桱桾梛梖梋梠梉梤桸桻梑梌梊桽欶欳欷欸殑殏殍殎殌氪淀涫涴涳湴涬淩淢涷淶淔渀淈淠淟淖涾淥淜淝淛淴淊涽淭淰涺淕淂淏淉"
  	],
  	[
  		"d640",
  		"淐淲淓淽淗淍淣涻烺焍烷焗烴焌烰焄烳焐烼烿焆焓焀烸烶焋焂焎牾牻牼牿猝猗猇猑猘猊猈狿猏猞玈珶珸珵琄琁珽琇琀珺珼珿琌琋珴琈畤畣痎痒痏"
  	],
  	[
  		"d6a1",
  		"痋痌痑痐皏皉盓眹眯眭眱眲眴眳眽眥眻眵硈硒硉硍硊硌砦硅硐祤祧祩祪祣祫祡离秺秸秶秷窏窔窐笵筇笴笥笰笢笤笳笘笪笝笱笫笭笯笲笸笚笣粔粘粖粣紵紽紸紶紺絅紬紩絁絇紾紿絊紻紨罣羕羜羝羛翊翋翍翐翑翇翏翉耟"
  	],
  	[
  		"d740",
  		"耞耛聇聃聈脘脥脙脛脭脟脬脞脡脕脧脝脢舑舸舳舺舴舲艴莐莣莨莍荺荳莤荴莏莁莕莙荵莔莩荽莃莌莝莛莪莋荾莥莯莈莗莰荿莦莇莮荶莚虙虖蚿蚷"
  	],
  	[
  		"d7a1",
  		"蛂蛁蛅蚺蚰蛈蚹蚳蚸蛌蚴蚻蚼蛃蚽蚾衒袉袕袨袢袪袚袑袡袟袘袧袙袛袗袤袬袌袓袎覂觖觙觕訰訧訬訞谹谻豜豝豽貥赽赻赹趼跂趹趿跁軘軞軝軜軗軠軡逤逋逑逜逌逡郯郪郰郴郲郳郔郫郬郩酖酘酚酓酕釬釴釱釳釸釤釹釪"
  	],
  	[
  		"d840",
  		"釫釷釨釮镺閆閈陼陭陫陱陯隿靪頄飥馗傛傕傔傞傋傣傃傌傎傝偨傜傒傂傇兟凔匒匑厤厧喑喨喥喭啷噅喢喓喈喏喵喁喣喒喤啽喌喦啿喕喡喎圌堩堷"
  	],
  	[
  		"d8a1",
  		"堙堞堧堣堨埵塈堥堜堛堳堿堶堮堹堸堭堬堻奡媯媔媟婺媢媞婸媦婼媥媬媕媮娷媄媊媗媃媋媩婻婽媌媜媏媓媝寪寍寋寔寑寊寎尌尰崷嵃嵫嵁嵋崿崵嵑嵎嵕崳崺嵒崽崱嵙嵂崹嵉崸崼崲崶嵀嵅幄幁彘徦徥徫惉悹惌惢惎惄愔"
  	],
  	[
  		"d940",
  		"惲愊愖愅惵愓惸惼惾惁愃愘愝愐惿愄愋扊掔掱掰揎揥揨揯揃撝揳揊揠揶揕揲揵摡揟掾揝揜揄揘揓揂揇揌揋揈揰揗揙攲敧敪敤敜敨敥斌斝斞斮旐旒"
  	],
  	[
  		"d9a1",
  		"晼晬晻暀晱晹晪晲朁椌棓椄棜椪棬棪棱椏棖棷棫棤棶椓椐棳棡椇棌椈楰梴椑棯棆椔棸棐棽棼棨椋椊椗棎棈棝棞棦棴棑椆棔棩椕椥棇欹欻欿欼殔殗殙殕殽毰毲毳氰淼湆湇渟湉溈渼渽湅湢渫渿湁湝湳渜渳湋湀湑渻渃渮湞"
  	],
  	[
  		"da40",
  		"湨湜湡渱渨湠湱湫渹渢渰湓湥渧湸湤湷湕湹湒湦渵渶湚焠焞焯烻焮焱焣焥焢焲焟焨焺焛牋牚犈犉犆犅犋猒猋猰猢猱猳猧猲猭猦猣猵猌琮琬琰琫琖"
  	],
  	[
  		"daa1",
  		"琚琡琭琱琤琣琝琩琠琲瓻甯畯畬痧痚痡痦痝痟痤痗皕皒盚睆睇睄睍睅睊睎睋睌矞矬硠硤硥硜硭硱硪确硰硩硨硞硢祴祳祲祰稂稊稃稌稄窙竦竤筊笻筄筈筌筎筀筘筅粢粞粨粡絘絯絣絓絖絧絪絏絭絜絫絒絔絩絑絟絎缾缿罥"
  	],
  	[
  		"db40",
  		"罦羢羠羡翗聑聏聐胾胔腃腊腒腏腇脽腍脺臦臮臷臸臹舄舼舽舿艵茻菏菹萣菀菨萒菧菤菼菶萐菆菈菫菣莿萁菝菥菘菿菡菋菎菖菵菉萉萏菞萑萆菂菳"
  	],
  	[
  		"dba1",
  		"菕菺菇菑菪萓菃菬菮菄菻菗菢萛菛菾蛘蛢蛦蛓蛣蛚蛪蛝蛫蛜蛬蛩蛗蛨蛑衈衖衕袺裗袹袸裀袾袶袼袷袽袲褁裉覕覘覗觝觚觛詎詍訹詙詀詗詘詄詅詒詈詑詊詌詏豟貁貀貺貾貰貹貵趄趀趉跘跓跍跇跖跜跏跕跙跈跗跅軯軷軺"
  	],
  	[
  		"dc40",
  		"軹軦軮軥軵軧軨軶軫軱軬軴軩逭逴逯鄆鄬鄄郿郼鄈郹郻鄁鄀鄇鄅鄃酡酤酟酢酠鈁鈊鈥鈃鈚鈦鈏鈌鈀鈒釿釽鈆鈄鈧鈂鈜鈤鈙鈗鈅鈖镻閍閌閐隇陾隈"
  	],
  	[
  		"dca1",
  		"隉隃隀雂雈雃雱雰靬靰靮頇颩飫鳦黹亃亄亶傽傿僆傮僄僊傴僈僂傰僁傺傱僋僉傶傸凗剺剸剻剼嗃嗛嗌嗐嗋嗊嗝嗀嗔嗄嗩喿嗒喍嗏嗕嗢嗖嗈嗲嗍嗙嗂圔塓塨塤塏塍塉塯塕塎塝塙塥塛堽塣塱壼嫇嫄嫋媺媸媱媵媰媿嫈媻嫆"
  	],
  	[
  		"dd40",
  		"媷嫀嫊媴媶嫍媹媐寖寘寙尟尳嵱嵣嵊嵥嵲嵬嵞嵨嵧嵢巰幏幎幊幍幋廅廌廆廋廇彀徯徭惷慉慊愫慅愶愲愮慆愯慏愩慀戠酨戣戥戤揅揱揫搐搒搉搠搤"
  	],
  	[
  		"dda1",
  		"搳摃搟搕搘搹搷搢搣搌搦搰搨摁搵搯搊搚摀搥搧搋揧搛搮搡搎敯斒旓暆暌暕暐暋暊暙暔晸朠楦楟椸楎楢楱椿楅楪椹楂楗楙楺楈楉椵楬椳椽楥棰楸椴楩楀楯楄楶楘楁楴楌椻楋椷楜楏楑椲楒椯楻椼歆歅歃歂歈歁殛嗀毻毼"
  	],
  	[
  		"de40",
  		"毹毷毸溛滖滈溏滀溟溓溔溠溱溹滆滒溽滁溞滉溷溰滍溦滏溲溾滃滜滘溙溒溎溍溤溡溿溳滐滊溗溮溣煇煔煒煣煠煁煝煢煲煸煪煡煂煘煃煋煰煟煐煓"
  	],
  	[
  		"dea1",
  		"煄煍煚牏犍犌犑犐犎猼獂猻猺獀獊獉瑄瑊瑋瑒瑑瑗瑀瑏瑐瑎瑂瑆瑍瑔瓡瓿瓾瓽甝畹畷榃痯瘏瘃痷痾痼痹痸瘐痻痶痭痵痽皙皵盝睕睟睠睒睖睚睩睧睔睙睭矠碇碚碔碏碄碕碅碆碡碃硹碙碀碖硻祼禂祽祹稑稘稙稒稗稕稢稓"
  	],
  	[
  		"df40",
  		"稛稐窣窢窞竫筦筤筭筴筩筲筥筳筱筰筡筸筶筣粲粴粯綈綆綀綍絿綅絺綎絻綃絼綌綔綄絽綒罭罫罧罨罬羦羥羧翛翜耡腤腠腷腜腩腛腢腲朡腞腶腧腯"
  	],
  	[
  		"dfa1",
  		"腄腡舝艉艄艀艂艅蓱萿葖葶葹蒏蒍葥葑葀蒆葧萰葍葽葚葙葴葳葝蔇葞萷萺萴葺葃葸萲葅萩菙葋萯葂萭葟葰萹葎葌葒葯蓅蒎萻葇萶萳葨葾葄萫葠葔葮葐蜋蜄蛷蜌蛺蛖蛵蝍蛸蜎蜉蜁蛶蜍蜅裖裋裍裎裞裛裚裌裐覅覛觟觥觤"
  	],
  	[
  		"e040",
  		"觡觠觢觜触詶誆詿詡訿詷誂誄詵誃誁詴詺谼豋豊豥豤豦貆貄貅賌赨赩趑趌趎趏趍趓趔趐趒跰跠跬跱跮跐跩跣跢跧跲跫跴輆軿輁輀輅輇輈輂輋遒逿"
  	],
  	[
  		"e0a1",
  		"遄遉逽鄐鄍鄏鄑鄖鄔鄋鄎酮酯鉈鉒鈰鈺鉦鈳鉥鉞銃鈮鉊鉆鉭鉬鉏鉠鉧鉯鈶鉡鉰鈱鉔鉣鉐鉲鉎鉓鉌鉖鈲閟閜閞閛隒隓隑隗雎雺雽雸雵靳靷靸靲頏頍頎颬飶飹馯馲馰馵骭骫魛鳪鳭鳧麀黽僦僔僗僨僳僛僪僝僤僓僬僰僯僣僠"
  	],
  	[
  		"e140",
  		"凘劀劁勩勫匰厬嘧嘕嘌嘒嗼嘏嘜嘁嘓嘂嗺嘝嘄嗿嗹墉塼墐墘墆墁塿塴墋塺墇墑墎塶墂墈塻墔墏壾奫嫜嫮嫥嫕嫪嫚嫭嫫嫳嫢嫠嫛嫬嫞嫝嫙嫨嫟孷寠"
  	],
  	[
  		"e1a1",
  		"寣屣嶂嶀嵽嶆嵺嶁嵷嶊嶉嶈嵾嵼嶍嵹嵿幘幙幓廘廑廗廎廜廕廙廒廔彄彃彯徶愬愨慁慞慱慳慒慓慲慬憀慴慔慺慛慥愻慪慡慖戩戧戫搫摍摛摝摴摶摲摳摽摵摦撦摎撂摞摜摋摓摠摐摿搿摬摫摙摥摷敳斠暡暠暟朅朄朢榱榶槉"
  	],
  	[
  		"e240",
  		"榠槎榖榰榬榼榑榙榎榧榍榩榾榯榿槄榽榤槔榹槊榚槏榳榓榪榡榞槙榗榐槂榵榥槆歊歍歋殞殟殠毃毄毾滎滵滱漃漥滸漷滻漮漉潎漙漚漧漘漻漒滭漊"
  	],
  	[
  		"e2a1",
  		"漶潳滹滮漭潀漰漼漵滫漇漎潃漅滽滶漹漜滼漺漟漍漞漈漡熇熐熉熀熅熂熏煻熆熁熗牄牓犗犕犓獃獍獑獌瑢瑳瑱瑵瑲瑧瑮甀甂甃畽疐瘖瘈瘌瘕瘑瘊瘔皸瞁睼瞅瞂睮瞀睯睾瞃碲碪碴碭碨硾碫碞碥碠碬碢碤禘禊禋禖禕禔禓"
  	],
  	[
  		"e340",
  		"禗禈禒禐稫穊稰稯稨稦窨窫窬竮箈箜箊箑箐箖箍箌箛箎箅箘劄箙箤箂粻粿粼粺綧綷緂綣綪緁緀緅綝緎緄緆緋緌綯綹綖綼綟綦綮綩綡緉罳翢翣翥翞"
  	],
  	[
  		"e3a1",
  		"耤聝聜膉膆膃膇膍膌膋舕蒗蒤蒡蒟蒺蓎蓂蒬蒮蒫蒹蒴蓁蓍蒪蒚蒱蓐蒝蒧蒻蒢蒔蓇蓌蒛蒩蒯蒨蓖蒘蒶蓏蒠蓗蓔蓒蓛蒰蒑虡蜳蜣蜨蝫蝀蜮蜞蜡蜙蜛蝃蜬蝁蜾蝆蜠蜲蜪蜭蜼蜒蜺蜱蜵蝂蜦蜧蜸蜤蜚蜰蜑裷裧裱裲裺裾裮裼裶裻"
  	],
  	[
  		"e440",
  		"裰裬裫覝覡覟覞觩觫觨誫誙誋誒誏誖谽豨豩賕賏賗趖踉踂跿踍跽踊踃踇踆踅跾踀踄輐輑輎輍鄣鄜鄠鄢鄟鄝鄚鄤鄡鄛酺酲酹酳銥銤鉶銛鉺銠銔銪銍"
  	],
  	[
  		"e4a1",
  		"銦銚銫鉹銗鉿銣鋮銎銂銕銢鉽銈銡銊銆銌銙銧鉾銇銩銝銋鈭隞隡雿靘靽靺靾鞃鞀鞂靻鞄鞁靿韎韍頖颭颮餂餀餇馝馜駃馹馻馺駂馽駇骱髣髧鬾鬿魠魡魟鳱鳲鳵麧僿儃儰僸儆儇僶僾儋儌僽儊劋劌勱勯噈噂噌嘵噁噊噉噆噘"
  	],
  	[
  		"e540",
  		"噚噀嘳嘽嘬嘾嘸嘪嘺圚墫墝墱墠墣墯墬墥墡壿嫿嫴嫽嫷嫶嬃嫸嬂嫹嬁嬇嬅嬏屧嶙嶗嶟嶒嶢嶓嶕嶠嶜嶡嶚嶞幩幝幠幜緳廛廞廡彉徲憋憃慹憱憰憢憉"
  	],
  	[
  		"e5a1",
  		"憛憓憯憭憟憒憪憡憍慦憳戭摮摰撖撠撅撗撜撏撋撊撌撣撟摨撱撘敶敺敹敻斲斳暵暰暩暲暷暪暯樀樆樗槥槸樕槱槤樠槿槬槢樛樝槾樧槲槮樔槷槧橀樈槦槻樍槼槫樉樄樘樥樏槶樦樇槴樖歑殥殣殢殦氁氀毿氂潁漦潾澇濆澒"
  	],
  	[
  		"e640",
  		"澍澉澌潢潏澅潚澖潶潬澂潕潲潒潐潗澔澓潝漀潡潫潽潧澐潓澋潩潿澕潣潷潪潻熲熯熛熰熠熚熩熵熝熥熞熤熡熪熜熧熳犘犚獘獒獞獟獠獝獛獡獚獙"
  	],
  	[
  		"e6a1",
  		"獢璇璉璊璆璁瑽璅璈瑼瑹甈甇畾瘥瘞瘙瘝瘜瘣瘚瘨瘛皜皝皞皛瞍瞏瞉瞈磍碻磏磌磑磎磔磈磃磄磉禚禡禠禜禢禛歶稹窲窴窳箷篋箾箬篎箯箹篊箵糅糈糌糋緷緛緪緧緗緡縃緺緦緶緱緰緮緟罶羬羰羭翭翫翪翬翦翨聤聧膣膟"
  	],
  	[
  		"e740",
  		"膞膕膢膙膗舖艏艓艒艐艎艑蔤蔻蔏蔀蔩蔎蔉蔍蔟蔊蔧蔜蓻蔫蓺蔈蔌蓴蔪蓲蔕蓷蓫蓳蓼蔒蓪蓩蔖蓾蔨蔝蔮蔂蓽蔞蓶蔱蔦蓧蓨蓰蓯蓹蔘蔠蔰蔋蔙蔯虢"
  	],
  	[
  		"e7a1",
  		"蝖蝣蝤蝷蟡蝳蝘蝔蝛蝒蝡蝚蝑蝞蝭蝪蝐蝎蝟蝝蝯蝬蝺蝮蝜蝥蝏蝻蝵蝢蝧蝩衚褅褌褔褋褗褘褙褆褖褑褎褉覢覤覣觭觰觬諏諆誸諓諑諔諕誻諗誾諀諅諘諃誺誽諙谾豍貏賥賟賙賨賚賝賧趠趜趡趛踠踣踥踤踮踕踛踖踑踙踦踧"
  	],
  	[
  		"e840",
  		"踔踒踘踓踜踗踚輬輤輘輚輠輣輖輗遳遰遯遧遫鄯鄫鄩鄪鄲鄦鄮醅醆醊醁醂醄醀鋐鋃鋄鋀鋙銶鋏鋱鋟鋘鋩鋗鋝鋌鋯鋂鋨鋊鋈鋎鋦鋍鋕鋉鋠鋞鋧鋑鋓"
  	],
  	[
  		"e8a1",
  		"銵鋡鋆銴镼閬閫閮閰隤隢雓霅霈霂靚鞊鞎鞈韐韏頞頝頦頩頨頠頛頧颲餈飺餑餔餖餗餕駜駍駏駓駔駎駉駖駘駋駗駌骳髬髫髳髲髱魆魃魧魴魱魦魶魵魰魨魤魬鳼鳺鳽鳿鳷鴇鴀鳹鳻鴈鴅鴄麃黓鼏鼐儜儓儗儚儑凞匴叡噰噠噮"
  	],
  	[
  		"e940",
  		"噳噦噣噭噲噞噷圜圛壈墽壉墿墺壂墼壆嬗嬙嬛嬡嬔嬓嬐嬖嬨嬚嬠嬞寯嶬嶱嶩嶧嶵嶰嶮嶪嶨嶲嶭嶯嶴幧幨幦幯廩廧廦廨廥彋徼憝憨憖懅憴懆懁懌憺"
  	],
  	[
  		"e9a1",
  		"憿憸憌擗擖擐擏擉撽撉擃擛擳擙攳敿敼斢曈暾曀曊曋曏暽暻暺曌朣樴橦橉橧樲橨樾橝橭橶橛橑樨橚樻樿橁橪橤橐橏橔橯橩橠樼橞橖橕橍橎橆歕歔歖殧殪殫毈毇氄氃氆澭濋澣濇澼濎濈潞濄澽澞濊澨瀄澥澮澺澬澪濏澿澸"
  	],
  	[
  		"ea40",
  		"澢濉澫濍澯澲澰燅燂熿熸燖燀燁燋燔燊燇燏熽燘熼燆燚燛犝犞獩獦獧獬獥獫獪瑿璚璠璔璒璕璡甋疀瘯瘭瘱瘽瘳瘼瘵瘲瘰皻盦瞚瞝瞡瞜瞛瞢瞣瞕瞙"
  	],
  	[
  		"eaa1",
  		"瞗磝磩磥磪磞磣磛磡磢磭磟磠禤穄穈穇窶窸窵窱窷篞篣篧篝篕篥篚篨篹篔篪篢篜篫篘篟糒糔糗糐糑縒縡縗縌縟縠縓縎縜縕縚縢縋縏縖縍縔縥縤罃罻罼罺羱翯耪耩聬膱膦膮膹膵膫膰膬膴膲膷膧臲艕艖艗蕖蕅蕫蕍蕓蕡蕘"
  	],
  	[
  		"eb40",
  		"蕀蕆蕤蕁蕢蕄蕑蕇蕣蔾蕛蕱蕎蕮蕵蕕蕧蕠薌蕦蕝蕔蕥蕬虣虥虤螛螏螗螓螒螈螁螖螘蝹螇螣螅螐螑螝螄螔螜螚螉褞褦褰褭褮褧褱褢褩褣褯褬褟觱諠"
  	],
  	[
  		"eba1",
  		"諢諲諴諵諝謔諤諟諰諈諞諡諨諿諯諻貑貒貐賵賮賱賰賳赬赮趥趧踳踾踸蹀蹅踶踼踽蹁踰踿躽輶輮輵輲輹輷輴遶遹遻邆郺鄳鄵鄶醓醐醑醍醏錧錞錈錟錆錏鍺錸錼錛錣錒錁鍆錭錎錍鋋錝鋺錥錓鋹鋷錴錂錤鋿錩錹錵錪錔錌"
  	],
  	[
  		"ec40",
  		"錋鋾錉錀鋻錖閼闍閾閹閺閶閿閵閽隩雔霋霒霐鞙鞗鞔韰韸頵頯頲餤餟餧餩馞駮駬駥駤駰駣駪駩駧骹骿骴骻髶髺髹髷鬳鮀鮅鮇魼魾魻鮂鮓鮒鮐魺鮕"
  	],
  	[
  		"eca1",
  		"魽鮈鴥鴗鴠鴞鴔鴩鴝鴘鴢鴐鴙鴟麈麆麇麮麭黕黖黺鼒鼽儦儥儢儤儠儩勴嚓嚌嚍嚆嚄嚃噾嚂噿嚁壖壔壏壒嬭嬥嬲嬣嬬嬧嬦嬯嬮孻寱寲嶷幬幪徾徻懃憵憼懧懠懥懤懨懞擯擩擣擫擤擨斁斀斶旚曒檍檖檁檥檉檟檛檡檞檇檓檎"
  	],
  	[
  		"ed40",
  		"檕檃檨檤檑橿檦檚檅檌檒歛殭氉濌澩濴濔濣濜濭濧濦濞濲濝濢濨燡燱燨燲燤燰燢獳獮獯璗璲璫璐璪璭璱璥璯甐甑甒甏疄癃癈癉癇皤盩瞵瞫瞲瞷瞶"
  	],
  	[
  		"eda1",
  		"瞴瞱瞨矰磳磽礂磻磼磲礅磹磾礄禫禨穜穛穖穘穔穚窾竀竁簅簏篲簀篿篻簎篴簋篳簂簉簃簁篸篽簆篰篱簐簊糨縭縼繂縳顈縸縪繉繀繇縩繌縰縻縶繄縺罅罿罾罽翴翲耬膻臄臌臊臅臇膼臩艛艚艜薃薀薏薧薕薠薋薣蕻薤薚薞"
  	],
  	[
  		"ee40",
  		"蕷蕼薉薡蕺蕸蕗薎薖薆薍薙薝薁薢薂薈薅蕹蕶薘薐薟虨螾螪螭蟅螰螬螹螵螼螮蟉蟃蟂蟌螷螯蟄蟊螴螶螿螸螽蟞螲褵褳褼褾襁襒褷襂覭覯覮觲觳謞"
  	],
  	[
  		"eea1",
  		"謘謖謑謅謋謢謏謒謕謇謍謈謆謜謓謚豏豰豲豱豯貕貔賹赯蹎蹍蹓蹐蹌蹇轃轀邅遾鄸醚醢醛醙醟醡醝醠鎡鎃鎯鍤鍖鍇鍼鍘鍜鍶鍉鍐鍑鍠鍭鎏鍌鍪鍹鍗鍕鍒鍏鍱鍷鍻鍡鍞鍣鍧鎀鍎鍙闇闀闉闃闅閷隮隰隬霠霟霘霝霙鞚鞡鞜"
  	],
  	[
  		"ef40",
  		"鞞鞝韕韔韱顁顄顊顉顅顃餥餫餬餪餳餲餯餭餱餰馘馣馡騂駺駴駷駹駸駶駻駽駾駼騃骾髾髽鬁髼魈鮚鮨鮞鮛鮦鮡鮥鮤鮆鮢鮠鮯鴳鵁鵧鴶鴮鴯鴱鴸鴰"
  	],
  	[
  		"efa1",
  		"鵅鵂鵃鴾鴷鵀鴽翵鴭麊麉麍麰黈黚黻黿鼤鼣鼢齔龠儱儭儮嚘嚜嚗嚚嚝嚙奰嬼屩屪巀幭幮懘懟懭懮懱懪懰懫懖懩擿攄擽擸攁攃擼斔旛曚曛曘櫅檹檽櫡櫆檺檶檷櫇檴檭歞毉氋瀇瀌瀍瀁瀅瀔瀎濿瀀濻瀦濼濷瀊爁燿燹爃燽獶"
  	],
  	[
  		"f040",
  		"璸瓀璵瓁璾璶璻瓂甔甓癜癤癙癐癓癗癚皦皽盬矂瞺磿礌礓礔礉礐礒礑禭禬穟簜簩簙簠簟簭簝簦簨簢簥簰繜繐繖繣繘繢繟繑繠繗繓羵羳翷翸聵臑臒"
  	],
  	[
  		"f0a1",
  		"臐艟艞薴藆藀藃藂薳薵薽藇藄薿藋藎藈藅薱薶藒蘤薸薷薾虩蟧蟦蟢蟛蟫蟪蟥蟟蟳蟤蟔蟜蟓蟭蟘蟣螤蟗蟙蠁蟴蟨蟝襓襋襏襌襆襐襑襉謪謧謣謳謰謵譇謯謼謾謱謥謷謦謶謮謤謻謽謺豂豵貙貘貗賾贄贂贀蹜蹢蹠蹗蹖蹞蹥蹧"
  	],
  	[
  		"f140",
  		"蹛蹚蹡蹝蹩蹔轆轇轈轋鄨鄺鄻鄾醨醥醧醯醪鎵鎌鎒鎷鎛鎝鎉鎧鎎鎪鎞鎦鎕鎈鎙鎟鎍鎱鎑鎲鎤鎨鎴鎣鎥闒闓闑隳雗雚巂雟雘雝霣霢霥鞬鞮鞨鞫鞤鞪"
  	],
  	[
  		"f1a1",
  		"鞢鞥韗韙韖韘韺顐顑顒颸饁餼餺騏騋騉騍騄騑騊騅騇騆髀髜鬈鬄鬅鬩鬵魊魌魋鯇鯆鯃鮿鯁鮵鮸鯓鮶鯄鮹鮽鵜鵓鵏鵊鵛鵋鵙鵖鵌鵗鵒鵔鵟鵘鵚麎麌黟鼁鼀鼖鼥鼫鼪鼩鼨齌齕儴儵劖勷厴嚫嚭嚦嚧嚪嚬壚壝壛夒嬽嬾嬿巃幰"
  	],
  	[
  		"f240",
  		"徿懻攇攐攍攉攌攎斄旞旝曞櫧櫠櫌櫑櫙櫋櫟櫜櫐櫫櫏櫍櫞歠殰氌瀙瀧瀠瀖瀫瀡瀢瀣瀩瀗瀤瀜瀪爌爊爇爂爅犥犦犤犣犡瓋瓅璷瓃甖癠矉矊矄矱礝礛"
  	],
  	[
  		"f2a1",
  		"礡礜礗礞禰穧穨簳簼簹簬簻糬糪繶繵繸繰繷繯繺繲繴繨罋罊羃羆羷翽翾聸臗臕艤艡艣藫藱藭藙藡藨藚藗藬藲藸藘藟藣藜藑藰藦藯藞藢蠀蟺蠃蟶蟷蠉蠌蠋蠆蟼蠈蟿蠊蠂襢襚襛襗襡襜襘襝襙覈覷覶觶譐譈譊譀譓譖譔譋譕"
  	],
  	[
  		"f340",
  		"譑譂譒譗豃豷豶貚贆贇贉趬趪趭趫蹭蹸蹳蹪蹯蹻軂轒轑轏轐轓辴酀鄿醰醭鏞鏇鏏鏂鏚鏐鏹鏬鏌鏙鎩鏦鏊鏔鏮鏣鏕鏄鏎鏀鏒鏧镽闚闛雡霩霫霬霨霦"
  	],
  	[
  		"f3a1",
  		"鞳鞷鞶韝韞韟顜顙顝顗颿颽颻颾饈饇饃馦馧騚騕騥騝騤騛騢騠騧騣騞騜騔髂鬋鬊鬎鬌鬷鯪鯫鯠鯞鯤鯦鯢鯰鯔鯗鯬鯜鯙鯥鯕鯡鯚鵷鶁鶊鶄鶈鵱鶀鵸鶆鶋鶌鵽鵫鵴鵵鵰鵩鶅鵳鵻鶂鵯鵹鵿鶇鵨麔麑黀黼鼭齀齁齍齖齗齘匷嚲"
  	],
  	[
  		"f440",
  		"嚵嚳壣孅巆巇廮廯忀忁懹攗攖攕攓旟曨曣曤櫳櫰櫪櫨櫹櫱櫮櫯瀼瀵瀯瀷瀴瀱灂瀸瀿瀺瀹灀瀻瀳灁爓爔犨獽獼璺皫皪皾盭矌矎矏矍矲礥礣礧礨礤礩"
  	],
  	[
  		"f4a1",
  		"禲穮穬穭竷籉籈籊籇籅糮繻繾纁纀羺翿聹臛臙舋艨艩蘢藿蘁藾蘛蘀藶蘄蘉蘅蘌藽蠙蠐蠑蠗蠓蠖襣襦覹觷譠譪譝譨譣譥譧譭趮躆躈躄轙轖轗轕轘轚邍酃酁醷醵醲醳鐋鐓鏻鐠鐏鐔鏾鐕鐐鐨鐙鐍鏵鐀鏷鐇鐎鐖鐒鏺鐉鏸鐊鏿"
  	],
  	[
  		"f540",
  		"鏼鐌鏶鐑鐆闞闠闟霮霯鞹鞻韽韾顠顢顣顟飁飂饐饎饙饌饋饓騲騴騱騬騪騶騩騮騸騭髇髊髆鬐鬒鬑鰋鰈鯷鰅鰒鯸鱀鰇鰎鰆鰗鰔鰉鶟鶙鶤鶝鶒鶘鶐鶛"
  	],
  	[
  		"f5a1",
  		"鶠鶔鶜鶪鶗鶡鶚鶢鶨鶞鶣鶿鶩鶖鶦鶧麙麛麚黥黤黧黦鼰鼮齛齠齞齝齙龑儺儹劘劗囃嚽嚾孈孇巋巏廱懽攛欂櫼欃櫸欀灃灄灊灈灉灅灆爝爚爙獾甗癪矐礭礱礯籔籓糲纊纇纈纋纆纍罍羻耰臝蘘蘪蘦蘟蘣蘜蘙蘧蘮蘡蘠蘩蘞蘥"
  	],
  	[
  		"f640",
  		"蠩蠝蠛蠠蠤蠜蠫衊襭襩襮襫觺譹譸譅譺譻贐贔趯躎躌轞轛轝酆酄酅醹鐿鐻鐶鐩鐽鐼鐰鐹鐪鐷鐬鑀鐱闥闤闣霵霺鞿韡顤飉飆飀饘饖騹騽驆驄驂驁騺"
  	],
  	[
  		"f6a1",
  		"騿髍鬕鬗鬘鬖鬺魒鰫鰝鰜鰬鰣鰨鰩鰤鰡鶷鶶鶼鷁鷇鷊鷏鶾鷅鷃鶻鶵鷎鶹鶺鶬鷈鶱鶭鷌鶳鷍鶲鹺麜黫黮黭鼛鼘鼚鼱齎齥齤龒亹囆囅囋奱孋孌巕巑廲攡攠攦攢欋欈欉氍灕灖灗灒爞爟犩獿瓘瓕瓙瓗癭皭礵禴穰穱籗籜籙籛籚"
  	],
  	[
  		"f740",
  		"糴糱纑罏羇臞艫蘴蘵蘳蘬蘲蘶蠬蠨蠦蠪蠥襱覿覾觻譾讄讂讆讅譿贕躕躔躚躒躐躖躗轠轢酇鑌鑐鑊鑋鑏鑇鑅鑈鑉鑆霿韣顪顩飋饔饛驎驓驔驌驏驈驊"
  	],
  	[
  		"f7a1",
  		"驉驒驐髐鬙鬫鬻魖魕鱆鱈鰿鱄鰹鰳鱁鰼鰷鰴鰲鰽鰶鷛鷒鷞鷚鷋鷐鷜鷑鷟鷩鷙鷘鷖鷵鷕鷝麶黰鼵鼳鼲齂齫龕龢儽劙壨壧奲孍巘蠯彏戁戃戄攩攥斖曫欑欒欏毊灛灚爢玂玁玃癰矔籧籦纕艬蘺虀蘹蘼蘱蘻蘾蠰蠲蠮蠳襶襴襳觾"
  	],
  	[
  		"f840",
  		"讌讎讋讈豅贙躘轤轣醼鑢鑕鑝鑗鑞韄韅頀驖驙鬞鬟鬠鱒鱘鱐鱊鱍鱋鱕鱙鱌鱎鷻鷷鷯鷣鷫鷸鷤鷶鷡鷮鷦鷲鷰鷢鷬鷴鷳鷨鷭黂黐黲黳鼆鼜鼸鼷鼶齃齏"
  	],
  	[
  		"f8a1",
  		"齱齰齮齯囓囍孎屭攭曭曮欓灟灡灝灠爣瓛瓥矕礸禷禶籪纗羉艭虃蠸蠷蠵衋讔讕躞躟躠躝醾醽釂鑫鑨鑩雥靆靃靇韇韥驞髕魙鱣鱧鱦鱢鱞鱠鸂鷾鸇鸃鸆鸅鸀鸁鸉鷿鷽鸄麠鼞齆齴齵齶囔攮斸欘欙欗欚灢爦犪矘矙礹籩籫糶纚"
  	],
  	[
  		"f940",
  		"纘纛纙臠臡虆虇虈襹襺襼襻觿讘讙躥躤躣鑮鑭鑯鑱鑳靉顲饟鱨鱮鱭鸋鸍鸐鸏鸒鸑麡黵鼉齇齸齻齺齹圞灦籯蠼趲躦釃鑴鑸鑶鑵驠鱴鱳鱱鱵鸔鸓黶鼊"
  	],
  	[
  		"f9a1",
  		"龤灨灥糷虪蠾蠽蠿讞貜躩軉靋顳顴飌饡馫驤驦驧鬤鸕鸗齈戇欞爧虌躨钂钀钁驩驨鬮鸙爩虋讟钃鱹麷癵驫鱺鸝灩灪麤齾齉龘碁銹裏墻恒粧嫺╔╦╗╠╬╣╚╩╝╒╤╕╞╪╡╘╧╛╓╥╖╟╫╢╙╨╜║═╭╮╰╯▓"
  	]
  ];

  var cp950$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': cp950
  });

  var big5Added = [
  	[
  		"8740",
  		"䏰䰲䘃䖦䕸𧉧䵷䖳𧲱䳢𧳅㮕䜶䝄䱇䱀𤊿𣘗𧍒𦺋𧃒䱗𪍑䝏䗚䲅𧱬䴇䪤䚡𦬣爥𥩔𡩣𣸆𣽡晍囻"
  	],
  	[
  		"8767",
  		"綕夝𨮹㷴霴𧯯寛𡵞媤㘥𩺰嫑宷峼杮薓𩥅瑡璝㡵𡵓𣚞𦀡㻬"
  	],
  	[
  		"87a1",
  		"𥣞㫵竼龗𤅡𨤍𣇪𠪊𣉞䌊蒄龖鐯䤰蘓墖靊鈘秐稲晠権袝瑌篅枂稬剏遆㓦珄𥶹瓆鿇垳䤯呌䄱𣚎堘穲𧭥讏䚮𦺈䆁𥶙箮𢒼鿈𢓁𢓉𢓌鿉蔄𣖻䂴鿊䓡𪷿拁灮鿋"
  	],
  	[
  		"8840",
  		"㇀",
  		4,
  		"𠄌㇅𠃑𠃍㇆㇇𠃋𡿨㇈𠃊㇉㇊㇋㇌𠄎㇍㇎ĀÁǍÀĒÉĚÈŌÓǑÒ࿿Ê̄Ế࿿Ê̌ỀÊāáǎàɑēéěèīíǐìōóǒòūúǔùǖǘǚ"
  	],
  	[
  		"88a1",
  		"ǜü࿿ê̄ế࿿ê̌ềêɡ⏚⏛"
  	],
  	[
  		"8940",
  		"𪎩𡅅"
  	],
  	[
  		"8943",
  		"攊"
  	],
  	[
  		"8946",
  		"丽滝鵎釟"
  	],
  	[
  		"894c",
  		"𧜵撑会伨侨兖兴农凤务动医华发变团声处备夲头学实実岚庆总斉柾栄桥济炼电纤纬纺织经统缆缷艺苏药视设询车轧轮"
  	],
  	[
  		"89a1",
  		"琑糼緍楆竉刧"
  	],
  	[
  		"89ab",
  		"醌碸酞肼"
  	],
  	[
  		"89b0",
  		"贋胶𠧧"
  	],
  	[
  		"89b5",
  		"肟黇䳍鷉鸌䰾𩷶𧀎鸊𪄳㗁"
  	],
  	[
  		"89c1",
  		"溚舾甙"
  	],
  	[
  		"89c5",
  		"䤑马骏龙禇𨑬𡷊𠗐𢫦两亁亀亇亿仫伷㑌侽㹈倃傈㑽㒓㒥円夅凛凼刅争剹劐匧㗇厩㕑厰㕓参吣㕭㕲㚁咓咣咴咹哐哯唘唣唨㖘唿㖥㖿嗗㗅"
  	],
  	[
  		"8a40",
  		"𧶄唥"
  	],
  	[
  		"8a43",
  		"𠱂𠴕𥄫喐𢳆㧬𠍁蹆𤶸𩓥䁓𨂾睺𢰸㨴䟕𨅝𦧲𤷪擝𠵼𠾴𠳕𡃴撍蹾𠺖𠰋𠽤𢲩𨉖𤓓"
  	],
  	[
  		"8a64",
  		"𠵆𩩍𨃩䟴𤺧𢳂骲㩧𩗴㿭㔆𥋇𩟔𧣈𢵄鵮頕"
  	],
  	[
  		"8a76",
  		"䏙𦂥撴哣𢵌𢯊𡁷㧻𡁯"
  	],
  	[
  		"8aa1",
  		"𦛚𦜖𧦠擪𥁒𠱃蹨𢆡𨭌𠜱"
  	],
  	[
  		"8aac",
  		"䠋𠆩㿺塳𢶍"
  	],
  	[
  		"8ab2",
  		"𤗈𠓼𦂗𠽌𠶖啹䂻䎺"
  	],
  	[
  		"8abb",
  		"䪴𢩦𡂝膪飵𠶜捹㧾𢝵跀嚡摼㹃"
  	],
  	[
  		"8ac9",
  		"𪘁𠸉𢫏𢳉"
  	],
  	[
  		"8ace",
  		"𡃈𣧂㦒㨆𨊛㕸𥹉𢃇噒𠼱𢲲𩜠㒼氽𤸻"
  	],
  	[
  		"8adf",
  		"𧕴𢺋𢈈𪙛𨳍𠹺𠰴𦠜羓𡃏𢠃𢤹㗻𥇣𠺌𠾍𠺪㾓𠼰𠵇𡅏𠹌"
  	],
  	[
  		"8af6",
  		"𠺫𠮩𠵈𡃀𡄽㿹𢚖搲𠾭"
  	],
  	[
  		"8b40",
  		"𣏴𧘹𢯎𠵾𠵿𢱑𢱕㨘𠺘𡃇𠼮𪘲𦭐𨳒𨶙𨳊閪哌苄喹"
  	],
  	[
  		"8b55",
  		"𩻃鰦骶𧝞𢷮煀腭胬尜𦕲脴㞗卟𨂽醶𠻺𠸏𠹷𠻻㗝𤷫㘉𠳖嚯𢞵𡃉𠸐𠹸𡁸𡅈𨈇𡑕𠹹𤹐𢶤婔𡀝𡀞𡃵𡃶垜𠸑"
  	],
  	[
  		"8ba1",
  		"𧚔𨋍𠾵𠹻𥅾㜃𠾶𡆀𥋘𪊽𤧚𡠺𤅷𨉼墙剨㘚𥜽箲孨䠀䬬鼧䧧鰟鮍𥭴𣄽嗻㗲嚉丨夂𡯁屮靑𠂆乛亻㔾尣彑忄㣺扌攵歺氵氺灬爫丬犭𤣩罒礻糹罓𦉪㓁"
  	],
  	[
  		"8bde",
  		"𦍋耂肀𦘒𦥑卝衤见𧢲讠贝钅镸长门𨸏韦页风飞饣𩠐鱼鸟黄歯龜丷𠂇阝户钢"
  	],
  	[
  		"8c40",
  		"倻淾𩱳龦㷉袏𤅎灷峵䬠𥇍㕙𥴰愢𨨲辧釶熑朙玺𣊁𪄇㲋𡦀䬐磤琂冮𨜏䀉橣𪊺䈣蘏𠩯稪𩥇𨫪靕灍匤𢁾鏴盙𨧣龧矝亣俰傼丯众龨吴綋墒壐𡶶庒庙忂𢜒斋"
  	],
  	[
  		"8ca1",
  		"𣏹椙橃𣱣泿"
  	],
  	[
  		"8ca7",
  		"爀𤔅玌㻛𤨓嬕璹讃𥲤𥚕窓篬糃繬苸薗龩袐龪躹龫迏蕟駠鈡龬𨶹𡐿䁱䊢娚"
  	],
  	[
  		"8cc9",
  		"顨杫䉶圽"
  	],
  	[
  		"8cce",
  		"藖𤥻芿𧄍䲁𦵴嵻𦬕𦾾龭龮宖龯曧繛湗秊㶈䓃𣉖𢞖䎚䔶"
  	],
  	[
  		"8ce6",
  		"峕𣬚諹屸㴒𣕑嵸龲煗䕘𤃬𡸣䱷㥸㑊𠆤𦱁諌侴𠈹妿腬顖𩣺弻"
  	],
  	[
  		"8d40",
  		"𠮟"
  	],
  	[
  		"8d42",
  		"𢇁𨥭䄂䚻𩁹㼇龳𪆵䃸㟖䛷𦱆䅼𨚲𧏿䕭㣔𥒚䕡䔛䶉䱻䵶䗪㿈𤬏㙡䓞䒽䇭崾嵈嵖㷼㠏嶤嶹㠠㠸幂庽弥徃㤈㤔㤿㥍惗愽峥㦉憷憹懏㦸戬抐拥挘㧸嚱"
  	],
  	[
  		"8da1",
  		"㨃揢揻搇摚㩋擀崕嘡龟㪗斆㪽旿晓㫲暒㬢朖㭂枤栀㭘桊梄㭲㭱㭻椉楃牜楤榟榅㮼槖㯝橥橴橱檂㯬檙㯲檫檵櫔櫶殁毁毪汵沪㳋洂洆洦涁㳯涤涱渕渘温溆𨧀溻滢滚齿滨滩漤漴㵆𣽁澁澾㵪㵵熷岙㶊瀬㶑灐灔灯灿炉𠌥䏁㗱𠻘"
  	],
  	[
  		"8e40",
  		"𣻗垾𦻓焾𥟠㙎榢𨯩孴穉𥣡𩓙穥穽𥦬窻窰竂竃燑𦒍䇊竚竝竪䇯咲𥰁笋筕笩𥌎𥳾箢筯莜𥮴𦱿篐萡箒箸𥴠㶭𥱥蒒篺簆簵𥳁籄粃𤢂粦晽𤕸糉糇糦籴糳糵糎"
  	],
  	[
  		"8ea1",
  		"繧䔝𦹄絝𦻖璍綉綫焵綳緒𤁗𦀩緤㴓緵𡟹緥𨍭縝𦄡𦅚繮纒䌫鑬縧罀罁罇礶𦋐駡羗𦍑羣𡙡𠁨䕜𣝦䔃𨌺翺𦒉者耈耝耨耯𪂇𦳃耻耼聡𢜔䦉𦘦𣷣𦛨朥肧𨩈脇脚墰𢛶汿𦒘𤾸擧𡒊舘𡡞橓𤩥𤪕䑺舩𠬍𦩒𣵾俹𡓽蓢荢𦬊𤦧𣔰𡝳𣷸芪椛芳䇛"
  	],
  	[
  		"8f40",
  		"蕋苐茚𠸖𡞴㛁𣅽𣕚艻苢茘𣺋𦶣𦬅𦮗𣗎㶿茝嗬莅䔋𦶥莬菁菓㑾𦻔橗蕚㒖𦹂𢻯葘𥯤葱㷓䓤檧葊𣲵祘蒨𦮖𦹷𦹃蓞萏莑䒠蒓蓤𥲑䉀𥳀䕃蔴嫲𦺙䔧蕳䔖枿蘖"
  	],
  	[
  		"8fa1",
  		"𨘥𨘻藁𧂈蘂𡖂𧃍䕫䕪蘨㙈𡢢号𧎚虾蝱𪃸蟮𢰧螱蟚蠏噡虬桖䘏衅衆𧗠𣶹𧗤衞袜䙛袴袵揁装睷𧜏覇覊覦覩覧覼𨨥觧𧤤𧪽誜瞓釾誐𧩙竩𧬺𣾏䜓𧬸煼謌謟𥐰𥕥謿譌譍誩𤩺讐讛誯𡛟䘕衏貛𧵔𧶏貫㜥𧵓賖𧶘𧶽贒贃𡤐賛灜贑𤳉㻐起"
  	],
  	[
  		"9040",
  		"趩𨀂𡀔𤦊㭼𨆼𧄌竧躭躶軃鋔輙輭𨍥𨐒辥錃𪊟𠩐辳䤪𨧞𨔽𣶻廸𣉢迹𪀔𨚼𨔁𢌥㦀𦻗逷𨔼𧪾遡𨕬𨘋邨𨜓郄𨛦邮都酧㫰醩釄粬𨤳𡺉鈎沟鉁鉢𥖹銹𨫆𣲛𨬌𥗛"
  	],
  	[
  		"90a1",
  		"𠴱錬鍫𨫡𨯫炏嫃𨫢𨫥䥥鉄𨯬𨰹𨯿鍳鑛躼閅閦鐦閠濶䊹𢙺𨛘𡉼𣸮䧟氜陻隖䅬隣𦻕懚隶磵𨫠隽双䦡𦲸𠉴𦐐𩂯𩃥𤫑𡤕𣌊霱虂霶䨏䔽䖅𤫩灵孁霛靜𩇕靗孊𩇫靟鐥僐𣂷𣂼鞉鞟鞱鞾韀韒韠𥑬韮琜𩐳響韵𩐝𧥺䫑頴頳顋顦㬎𧅵㵑𠘰𤅜"
  	],
  	[
  		"9140",
  		"𥜆飊颷飈飇䫿𦴧𡛓喰飡飦飬鍸餹𤨩䭲𩡗𩤅駵騌騻騐驘𥜥㛄𩂱𩯕髠髢𩬅髴䰎鬔鬭𨘀倴鬴𦦨㣃𣁽魐魀𩴾婅𡡣鮎𤉋鰂鯿鰌𩹨鷔𩾷𪆒𪆫𪃡𪄣𪇟鵾鶃𪄴鸎梈"
  	],
  	[
  		"91a1",
  		"鷄𢅛𪆓𪈠𡤻𪈳鴹𪂹𪊴麐麕麞麢䴴麪麯𤍤黁㭠㧥㴝伲㞾𨰫鼂鼈䮖鐤𦶢鼗鼖鼹嚟嚊齅馸𩂋韲葿齢齩竜龎爖䮾𤥵𤦻煷𤧸𤍈𤩑玞𨯚𡣺禟𨥾𨸶鍩鏳𨩄鋬鎁鏋𨥬𤒹爗㻫睲穃烐𤑳𤏸煾𡟯炣𡢾𣖙㻇𡢅𥐯𡟸㜢𡛻𡠹㛡𡝴𡣑𥽋㜣𡛀坛𤨥𡏾𡊨"
  	],
  	[
  		"9240",
  		"𡏆𡒶蔃𣚦蔃葕𤦔𧅥𣸱𥕜𣻻𧁒䓴𣛮𩦝𦼦柹㜳㰕㷧塬𡤢栐䁗𣜿𤃡𤂋𤄏𦰡哋嚞𦚱嚒𠿟𠮨𠸍鏆𨬓鎜仸儫㠙𤐶亼𠑥𠍿佋侊𥙑婨𠆫𠏋㦙𠌊𠐔㐵伩𠋀𨺳𠉵諚𠈌亘"
  	],
  	[
  		"92a1",
  		"働儍侢伃𤨎𣺊佂倮偬傁俌俥偘僼兙兛兝兞湶𣖕𣸹𣺿浲𡢄𣺉冨凃𠗠䓝𠒣𠒒𠒑赺𨪜𠜎剙劤𠡳勡鍮䙺熌𤎌𠰠𤦬𡃤槑𠸝瑹㻞璙琔瑖玘䮎𤪼𤂍叐㖄爏𤃉喴𠍅响𠯆圝鉝雴鍦埝垍坿㘾壋媙𨩆𡛺𡝯𡜐娬妸銏婾嫏娒𥥆𡧳𡡡𤊕㛵洅瑃娡𥺃"
  	],
  	[
  		"9340",
  		"媁𨯗𠐓鏠璌𡌃焅䥲鐈𨧻鎽㞠尞岞幞幈𡦖𡥼𣫮廍孏𡤃𡤄㜁𡢠㛝𡛾㛓脪𨩇𡶺𣑲𨦨弌弎𡤧𡞫婫𡜻孄蘔𧗽衠恾𢡠𢘫忛㺸𢖯𢖾𩂈𦽳懀𠀾𠁆𢘛憙憘恵𢲛𢴇𤛔𩅍"
  	],
  	[
  		"93a1",
  		"摱𤙥𢭪㨩𢬢𣑐𩣪𢹸挷𪑛撶挱揑𤧣𢵧护𢲡搻敫楲㯴𣂎𣊭𤦉𣊫唍𣋠𡣙𩐿曎𣊉𣆳㫠䆐𥖄𨬢𥖏𡛼𥕛𥐥磮𣄃𡠪𣈴㑤𣈏𣆂𤋉暎𦴤晫䮓昰𧡰𡷫晣𣋒𣋡昞𥡲㣑𣠺𣞼㮙𣞢𣏾瓐㮖枏𤘪梶栞㯄檾㡣𣟕𤒇樳橒櫉欅𡤒攑梘橌㯗橺歗𣿀𣲚鎠鋲𨯪𨫋"
  	],
  	[
  		"9440",
  		"銉𨀞𨧜鑧涥漋𤧬浧𣽿㶏渄𤀼娽渊塇洤硂焻𤌚𤉶烱牐犇犔𤞏𤜥兹𤪤𠗫瑺𣻸𣙟𤩊𤤗𥿡㼆㺱𤫟𨰣𣼵悧㻳瓌琼鎇琷䒟𦷪䕑疃㽣𤳙𤴆㽘畕癳𪗆㬙瑨𨫌𤦫𤦎㫻"
  	],
  	[
  		"94a1",
  		"㷍𤩎㻿𤧅𤣳釺圲鍂𨫣𡡤僟𥈡𥇧睸𣈲眎眏睻𤚗𣞁㩞𤣰琸璛㺿𤪺𤫇䃈𤪖𦆮錇𥖁砞碍碈磒珐祙𧝁𥛣䄎禛蒖禥樭𣻺稺秴䅮𡛦䄲鈵秱𠵌𤦌𠊙𣶺𡝮㖗啫㕰㚪𠇔𠰍竢婙𢛵𥪯𥪜娍𠉛磰娪𥯆竾䇹籝籭䈑𥮳𥺼𥺦糍𤧹𡞰粎籼粮檲緜縇緓罎𦉡"
  	],
  	[
  		"9540",
  		"𦅜𧭈綗𥺂䉪𦭵𠤖柖𠁎𣗏埄𦐒𦏸𤥢翝笧𠠬𥫩𥵃笌𥸎駦虅驣樜𣐿㧢𤧷𦖭騟𦖠蒀𧄧𦳑䓪脷䐂胆脉腂𦞴飃𦩂艢艥𦩑葓𦶧蘐𧈛媆䅿𡡀嬫𡢡嫤𡣘蚠蜨𣶏蠭𧐢娂"
  	],
  	[
  		"95a1",
  		"衮佅袇袿裦襥襍𥚃襔𧞅𧞄𨯵𨯙𨮜𨧹㺭蒣䛵䛏㟲訽訜𩑈彍鈫𤊄旔焩烄𡡅鵭貟賩𧷜妚矃姰䍮㛔踪躧𤰉輰轊䋴汘澻𢌡䢛潹溋𡟚鯩㚵𤤯邻邗啱䤆醻鐄𨩋䁢𨫼鐧𨰝𨰻蓥訫閙閧閗閖𨴴瑅㻂𤣿𤩂𤏪㻧𣈥随𨻧𨹦𨹥㻌𤧭𤩸𣿮琒瑫㻼靁𩂰"
  	],
  	[
  		"9640",
  		"桇䨝𩂓𥟟靝鍨𨦉𨰦𨬯𦎾銺嬑譩䤼珹𤈛鞛靱餸𠼦巁𨯅𤪲頟𩓚鋶𩗗釥䓀𨭐𤩧𨭤飜𨩅㼀鈪䤥萔餻饍𧬆㷽馛䭯馪驜𨭥𥣈檏騡嫾騯𩣱䮐𩥈馼䮽䮗鍽塲𡌂堢𤦸"
  	],
  	[
  		"96a1",
  		"𡓨硄𢜟𣶸棅㵽鑘㤧慐𢞁𢥫愇鱏鱓鱻鰵鰐魿鯏𩸭鮟𪇵𪃾鴡䲮𤄄鸘䲰鴌𪆴𪃭𪃳𩤯鶥蒽𦸒𦿟𦮂藼䔳𦶤𦺄𦷰萠藮𦸀𣟗𦁤秢𣖜𣙀䤭𤧞㵢鏛銾鍈𠊿碹鉷鑍俤㑀遤𥕝砽硔碶硋𡝗𣇉𤥁㚚佲濚濙瀞瀞吔𤆵垻壳垊鴖埗焴㒯𤆬燫𦱀𤾗嬨𡞵𨩉"
  	],
  	[
  		"9740",
  		"愌嫎娋䊼𤒈㜬䭻𨧼鎻鎸𡣖𠼝葲𦳀𡐓𤋺𢰦𤏁妔𣶷𦝁綨𦅛𦂤𤦹𤦋𨧺鋥珢㻩璴𨭣𡢟㻡𤪳櫘珳珻㻖𤨾𤪔𡟙𤩦𠎧𡐤𤧥瑈𤤖炥𤥶銄珦鍟𠓾錱𨫎𨨖鎆𨯧𥗕䤵𨪂煫"
  	],
  	[
  		"97a1",
  		"𤥃𠳿嚤𠘚𠯫𠲸唂秄𡟺緾𡛂𤩐𡡒䔮鐁㜊𨫀𤦭妰𡢿𡢃𧒄媡㛢𣵛㚰鉟婹𨪁𡡢鍴㳍𠪴䪖㦊僴㵩㵌𡎜煵䋻𨈘渏𩃤䓫浗𧹏灧沯㳖𣿭𣸭渂漌㵯𠏵畑㚼㓈䚀㻚䡱姄鉮䤾轁𨰜𦯀堒埈㛖𡑒烾𤍢𤩱𢿣𡊰𢎽梹楧𡎘𣓥𧯴𣛟𨪃𣟖𣏺𤲟樚𣚭𦲷萾䓟䓎"
  	],
  	[
  		"9840",
  		"𦴦𦵑𦲂𦿞漗𧄉茽𡜺菭𦲀𧁓𡟛妉媂𡞳婡婱𡤅𤇼㜭姯𡜼㛇熎鎐暚𤊥婮娫𤊓樫𣻹𧜶𤑛𤋊焝𤉙𨧡侰𦴨峂𤓎𧹍𤎽樌𤉖𡌄炦焳𤏩㶥泟勇𤩏繥姫崯㷳彜𤩝𡟟綤萦"
  	],
  	[
  		"98a1",
  		"咅𣫺𣌀𠈔坾𠣕𠘙㿥𡾞𪊶瀃𩅛嵰玏糓𨩙𩐠俈翧狍猐𧫴猸猹𥛶獁獈㺩𧬘遬燵𤣲珡臶㻊県㻑沢国琙琞琟㻢㻰㻴㻺瓓㼎㽓畂畭畲疍㽼痈痜㿀癍㿗癴㿜発𤽜熈嘣覀塩䀝睃䀹条䁅㗛瞘䁪䁯属瞾矋売砘点砜䂨砹硇硑硦葈𥔵礳栃礲䄃"
  	],
  	[
  		"9940",
  		"䄉禑禙辻稆込䅧窑䆲窼艹䇄竏竛䇏両筢筬筻簒簛䉠䉺类粜䊌粸䊔糭输烀𠳏総緔緐緽羮羴犟䎗耠耥笹耮耱联㷌垴炠肷胩䏭脌猪脎脒畠脔䐁㬹腖腙腚"
  	],
  	[
  		"99a1",
  		"䐓堺腼膄䐥膓䐭膥埯臁臤艔䒏芦艶苊苘苿䒰荗险榊萅烵葤惣蒈䔄蒾蓡蓸蔐蔸蕒䔻蕯蕰藠䕷虲蚒蚲蛯际螋䘆䘗袮裿褤襇覑𧥧訩訸誔誴豑賔賲贜䞘塟跃䟭仮踺嗘坔蹱嗵躰䠷軎転軤軭軲辷迁迊迌逳駄䢭飠鈓䤞鈨鉘鉫銱銮銿"
  	],
  	[
  		"9a40",
  		"鋣鋫鋳鋴鋽鍃鎄鎭䥅䥑麿鐗匁鐝鐭鐾䥪鑔鑹锭関䦧间阳䧥枠䨤靀䨵鞲韂噔䫤惨颹䬙飱塄餎餙冴餜餷饂饝饢䭰駅䮝騼鬏窃魩鮁鯝鯱鯴䱭鰠㝯𡯂鵉鰺"
  	],
  	[
  		"9aa1",
  		"黾噐鶓鶽鷀鷼银辶鹻麬麱麽黆铜黢黱黸竈齄𠂔𠊷𠎠椚铃妬𠓗塀铁㞹𠗕𠘕𠙶𡚺块煳𠫂𠫍𠮿呪吆𠯋咞𠯻𠰻𠱓𠱥𠱼惧𠲍噺𠲵𠳝𠳭𠵯𠶲𠷈楕鰯螥𠸄𠸎𠻗𠾐𠼭𠹳尠𠾼帋𡁜𡁏𡁶朞𡁻𡂈𡂖㙇𡂿𡃓𡄯𡄻卤蒭𡋣𡍵𡌶讁𡕷𡘙𡟃𡟇乸炻𡠭𡥪"
  	],
  	[
  		"9b40",
  		"𡨭𡩅𡰪𡱰𡲬𡻈拃𡻕𡼕熘桕𢁅槩㛈𢉼𢏗𢏺𢜪𢡱𢥏苽𢥧𢦓𢫕覥𢫨辠𢬎鞸𢬿顇骽𢱌"
  	],
  	[
  		"9b62",
  		"𢲈𢲷𥯨𢴈𢴒𢶷𢶕𢹂𢽴𢿌𣀳𣁦𣌟𣏞徱晈暿𧩹𣕧𣗳爁𤦺矗𣘚𣜖纇𠍆墵朎"
  	],
  	[
  		"9ba1",
  		"椘𣪧𧙗𥿢𣸑𣺹𧗾𢂚䣐䪸𤄙𨪚𤋮𤌍𤀻𤌴𤎖𤩅𠗊凒𠘑妟𡺨㮾𣳿𤐄𤓖垈𤙴㦛𤜯𨗨𩧉㝢𢇃譞𨭎駖𤠒𤣻𤨕爉𤫀𠱸奥𤺥𤾆𠝹軚𥀬劏圿煱𥊙𥐙𣽊𤪧喼𥑆𥑮𦭒釔㑳𥔿𧘲𥕞䜘𥕢𥕦𥟇𤤿𥡝偦㓻𣏌惞𥤃䝼𨥈𥪮𥮉𥰆𡶐垡煑澶𦄂𧰒遖𦆲𤾚譢𦐂𦑊"
  	],
  	[
  		"9c40",
  		"嵛𦯷輶𦒄𡤜諪𤧶𦒈𣿯𦔒䯀𦖿𦚵𢜛鑥𥟡憕娧晉侻嚹𤔡𦛼乪𤤴陖涏𦲽㘘襷𦞙𦡮𦐑𦡞營𦣇筂𩃀𠨑𦤦鄄𦤹穅鷰𦧺騦𦨭㙟𦑩𠀡禃𦨴𦭛崬𣔙菏𦮝䛐𦲤画补𦶮墶"
  	],
  	[
  		"9ca1",
  		"㜜𢖍𧁋𧇍㱔𧊀𧊅銁𢅺𧊋錰𧋦𤧐氹钟𧑐𠻸蠧裵𢤦𨑳𡞱溸𤨪𡠠㦤㚹尐秣䔿暶𩲭𩢤襃𧟌𧡘囖䃟𡘊㦡𣜯𨃨𡏅熭荦𧧝𩆨婧䲷𧂯𨦫𧧽𧨊𧬋𧵦𤅺筃祾𨀉澵𪋟樃𨌘厢𦸇鎿栶靝𨅯𨀣𦦵𡏭𣈯𨁈嶅𨰰𨂃圕頣𨥉嶫𤦈斾槕叒𤪥𣾁㰑朶𨂐𨃴𨄮𡾡𨅏"
  	],
  	[
  		"9d40",
  		"𨆉𨆯𨈚𨌆𨌯𨎊㗊𨑨𨚪䣺揦𨥖砈鉕𨦸䏲𨧧䏟𨧨𨭆𨯔姸𨰉輋𨿅𩃬筑𩄐𩄼㷷𩅞𤫊运犏嚋𩓧𩗩𩖰𩖸𩜲𩣑𩥉𩥪𩧃𩨨𩬎𩵚𩶛纟𩻸𩼣䲤镇𪊓熢𪋿䶑递𪗋䶜𠲜达嗁"
  	],
  	[
  		"9da1",
  		"辺𢒰边𤪓䔉繿潖檱仪㓤𨬬𧢝㜺躀𡟵𨀤𨭬𨮙𧨾𦚯㷫𧙕𣲷𥘵𥥖亚𥺁𦉘嚿𠹭踎孭𣺈𤲞揞拐𡟶𡡻攰嘭𥱊吚𥌑㷆𩶘䱽嘢嘞罉𥻘奵𣵀蝰东𠿪𠵉𣚺脗鵞贘瘻鱅癎瞹鍅吲腈苷嘥脲萘肽嗪祢噃吖𠺝㗎嘅嗱曱𨋢㘭甴嗰喺咗啲𠱁𠲖廐𥅈𠹶𢱢"
  	],
  	[
  		"9e40",
  		"𠺢麫絚嗞𡁵抝靭咔賍燶酶揼掹揾啩𢭃鱲𢺳冚㓟𠶧冧呍唞唓癦踭𦢊疱肶蠄螆裇膶萜𡃁䓬猄𤜆宐茋𦢓噻𢛴𧴯𤆣𧵳𦻐𧊶酰𡇙鈈𣳼𪚩𠺬𠻹牦𡲢䝎𤿂𧿹𠿫䃺"
  	],
  	[
  		"9ea1",
  		"鱝攟𢶠䣳𤟠𩵼𠿬𠸊恢𧖣𠿭"
  	],
  	[
  		"9ead",
  		"𦁈𡆇熣纎鵐业丄㕷嬍沲卧㚬㧜卽㚥𤘘墚𤭮舭呋垪𥪕𠥹"
  	],
  	[
  		"9ec5",
  		"㩒𢑥獴𩺬䴉鯭𣳾𩼰䱛𤾩𩖞𩿞葜𣶶𧊲𦞳𣜠挮紥𣻷𣸬㨪逈勌㹴㙺䗩𠒎癀嫰𠺶硺𧼮墧䂿噼鮋嵴癔𪐴麅䳡痹㟻愙𣃚𤏲"
  	],
  	[
  		"9ef5",
  		"噝𡊩垧𤥣𩸆刴𧂮㖭汊鵼"
  	],
  	[
  		"9f40",
  		"籖鬹埞𡝬屓擓𩓐𦌵𧅤蚭𠴨𦴢𤫢𠵱"
  	],
  	[
  		"9f4f",
  		"凾𡼏嶎霃𡷑麁遌笟鬂峑箣扨挵髿篏鬪籾鬮籂粆鰕篼鬉鼗鰛𤤾齚啳寃俽麘俲剠㸆勑坧偖妷帒韈鶫轜呩鞴饀鞺匬愰"
  	],
  	[
  		"9fa1",
  		"椬叚鰊鴂䰻陁榀傦畆𡝭駚剳"
  	],
  	[
  		"9fae",
  		"酙隁酜"
  	],
  	[
  		"9fb2",
  		"酑𨺗捿𦴣櫊嘑醎畺抅𠏼獏籰𥰡𣳽"
  	],
  	[
  		"9fc1",
  		"𤤙盖鮝个𠳔莾衂"
  	],
  	[
  		"9fc9",
  		"届槀僭坺刟巵从氱𠇲伹咜哚劚趂㗾弌㗳"
  	],
  	[
  		"9fdb",
  		"歒酼龥鮗頮颴骺麨麄煺笔"
  	],
  	[
  		"9fe7",
  		"毺蠘罸"
  	],
  	[
  		"9feb",
  		"嘠𪙊蹷齓"
  	],
  	[
  		"9ff0",
  		"跔蹏鸜踁抂𨍽踨蹵竓𤩷稾磘泪詧瘇"
  	],
  	[
  		"a040",
  		"𨩚鼦泎蟖痃𪊲硓咢贌狢獱謭猂瓱賫𤪻蘯徺袠䒷"
  	],
  	[
  		"a055",
  		"𡠻𦸅"
  	],
  	[
  		"a058",
  		"詾𢔛"
  	],
  	[
  		"a05b",
  		"惽癧髗鵄鍮鮏蟵"
  	],
  	[
  		"a063",
  		"蠏賷猬霡鮰㗖犲䰇籑饊𦅙慙䰄麖慽"
  	],
  	[
  		"a073",
  		"坟慯抦戹拎㩜懢厪𣏵捤栂㗒"
  	],
  	[
  		"a0a1",
  		"嵗𨯂迚𨸹"
  	],
  	[
  		"a0a6",
  		"僙𡵆礆匲阸𠼻䁥"
  	],
  	[
  		"a0ae",
  		"矾"
  	],
  	[
  		"a0b0",
  		"糂𥼚糚稭聦聣絍甅瓲覔舚朌聢𧒆聛瓰脃眤覉𦟌畓𦻑螩蟎臈螌詉貭譃眫瓸蓚㘵榲趦"
  	],
  	[
  		"a0d4",
  		"覩瑨涹蟁𤀑瓧㷛煶悤憜㳑煢恷"
  	],
  	[
  		"a0e2",
  		"罱𨬭牐惩䭾删㰘𣳇𥻗𧙖𥔱𡥄𡋾𩤃𦷜𧂭峁𦆭𨨏𣙷𠃮𦡆𤼎䕢嬟𦍌齐麦𦉫"
  	],
  	[
  		"a3c0",
  		"␀",
  		31,
  		"␡"
  	],
  	[
  		"c6a1",
  		"①",
  		9,
  		"⑴",
  		9,
  		"ⅰ",
  		9,
  		"丶丿亅亠冂冖冫勹匸卩厶夊宀巛⼳广廴彐彡攴无疒癶辵隶¨ˆヽヾゝゞ〃仝々〆〇ー［］✽ぁ",
  		23
  	],
  	[
  		"c740",
  		"す",
  		58,
  		"ァアィイ"
  	],
  	[
  		"c7a1",
  		"ゥ",
  		81,
  		"А",
  		5,
  		"ЁЖ",
  		4
  	],
  	[
  		"c840",
  		"Л",
  		26,
  		"ёж",
  		25,
  		"⇧↸↹㇏𠃌乚𠂊刂䒑"
  	],
  	[
  		"c8a1",
  		"龰冈龱𧘇"
  	],
  	[
  		"c8cd",
  		"￢￤＇＂㈱№℡゛゜⺀⺄⺆⺇⺈⺊⺌⺍⺕⺜⺝⺥⺧⺪⺬⺮⺶⺼⺾⻆⻊⻌⻍⻏⻖⻗⻞⻣"
  	],
  	[
  		"c8f5",
  		"ʃɐɛɔɵœøŋʊɪ"
  	],
  	[
  		"f9fe",
  		"￭"
  	],
  	[
  		"fa40",
  		"𠕇鋛𠗟𣿅蕌䊵珯况㙉𤥂𨧤鍄𡧛苮𣳈砼杄拟𤤳𨦪𠊠𦮳𡌅侫𢓭倈𦴩𧪄𣘀𤪱𢔓倩𠍾徤𠎀𠍇滛𠐟偽儁㑺儎顬㝃萖𤦤𠒇兠𣎴兪𠯿𢃼𠋥𢔰𠖎𣈳𡦃宂蝽𠖳𣲙冲冸"
  	],
  	[
  		"faa1",
  		"鴴凉减凑㳜凓𤪦决凢卂凭菍椾𣜭彻刋刦刼劵剗劔効勅簕蕂勠蘍𦬓包𨫞啉滙𣾀𠥔𣿬匳卄𠯢泋𡜦栛珕恊㺪㣌𡛨燝䒢卭却𨚫卾卿𡖖𡘓矦厓𨪛厠厫厮玧𥝲㽙玜叁叅汉义埾叙㪫𠮏叠𣿫𢶣叶𠱷吓灹唫晗浛呭𦭓𠵴啝咏咤䞦𡜍𠻝㶴𠵍"
  	],
  	[
  		"fb40",
  		"𨦼𢚘啇䳭启琗喆喩嘅𡣗𤀺䕒𤐵暳𡂴嘷曍𣊊暤暭噍噏磱囱鞇叾圀囯园𨭦㘣𡉏坆𤆥汮炋坂㚱𦱾埦𡐖堃𡑔𤍣堦𤯵塜墪㕡壠壜𡈼壻寿坃𪅐𤉸鏓㖡够梦㛃湙"
  	],
  	[
  		"fba1",
  		"𡘾娤啓𡚒蔅姉𠵎𦲁𦴪𡟜姙𡟻𡞲𦶦浱𡠨𡛕姹𦹅媫婣㛦𤦩婷㜈媖瑥嫓𦾡𢕔㶅𡤑㜲𡚸広勐孶斈孼𧨎䀄䡝𠈄寕慠𡨴𥧌𠖥寳宝䴐尅𡭄尓珎尔𡲥𦬨屉䣝岅峩峯嶋𡷹𡸷崐崘嵆𡺤岺巗苼㠭𤤁𢁉𢅳芇㠶㯂帮檊幵幺𤒼𠳓厦亷廐厨𡝱帉廴𨒂"
  	],
  	[
  		"fc40",
  		"廹廻㢠廼栾鐛弍𠇁弢㫞䢮𡌺强𦢈𢏐彘𢑱彣鞽𦹮彲鍀𨨶徧嶶㵟𥉐𡽪𧃸𢙨釖𠊞𨨩怱暅𡡷㥣㷇㘹垐𢞴祱㹀悞悤悳𤦂𤦏𧩓璤僡媠慤萤慂慈𦻒憁凴𠙖憇宪𣾷"
  	],
  	[
  		"fca1",
  		"𢡟懓𨮝𩥝懐㤲𢦀𢣁怣慜攞掋𠄘担𡝰拕𢸍捬𤧟㨗搸揸𡎎𡟼撐澊𢸶頔𤂌𥜝擡擥鑻㩦携㩗敍漖𤨨𤨣斅敭敟𣁾斵𤥀䬷旑䃘𡠩无旣忟𣐀昘𣇷𣇸晄𣆤𣆥晋𠹵晧𥇦晳晴𡸽𣈱𨗴𣇈𥌓矅𢣷馤朂𤎜𤨡㬫槺𣟂杞杧杢𤇍𩃭柗䓩栢湐鈼栁𣏦𦶠桝"
  	],
  	[
  		"fd40",
  		"𣑯槡樋𨫟楳棃𣗍椁椀㴲㨁𣘼㮀枬楡𨩊䋼椶榘㮡𠏉荣傐槹𣙙𢄪橅𣜃檝㯳枱櫈𩆜㰍欝𠤣惞欵歴𢟍溵𣫛𠎵𡥘㝀吡𣭚毡𣻼毜氷𢒋𤣱𦭑汚舦汹𣶼䓅𣶽𤆤𤤌𤤀"
  	],
  	[
  		"fda1",
  		"𣳉㛥㳫𠴲鮃𣇹𢒑羏样𦴥𦶡𦷫涖浜湼漄𤥿𤂅𦹲蔳𦽴凇沜渝萮𨬡港𣸯瑓𣾂秌湏媑𣁋濸㜍澝𣸰滺𡒗𤀽䕕鏰潄潜㵎潴𩅰㴻澟𤅄濓𤂑𤅕𤀹𣿰𣾴𤄿凟𤅖𤅗𤅀𦇝灋灾炧炁烌烕烖烟䄄㷨熴熖𤉷焫煅媈煊煮岜𤍥煏鍢𤋁焬𤑚𤨧𤨢熺𨯨炽爎"
  	],
  	[
  		"fe40",
  		"鑂爕夑鑃爤鍁𥘅爮牀𤥴梽牕牗㹕𣁄栍漽犂猪猫𤠣𨠫䣭𨠄猨献珏玪𠰺𦨮珉瑉𤇢𡛧𤨤昣㛅𤦷𤦍𤧻珷琕椃𤨦琹𠗃㻗瑜𢢭瑠𨺲瑇珤瑶莹瑬㜰瑴鏱樬璂䥓𤪌"
  	],
  	[
  		"fea1",
  		"𤅟𤩹𨮏孆𨰃𡢞瓈𡦈甎瓩甞𨻙𡩋寗𨺬鎅畍畊畧畮𤾂㼄𤴓疎瑝疞疴瘂瘬癑癏癯癶𦏵皐臯㟸𦤑𦤎皡皥皷盌𦾟葢𥂝𥅽𡸜眞眦着撯𥈠睘𣊬瞯𨥤𨥨𡛁矴砉𡍶𤨒棊碯磇磓隥礮𥗠磗礴碱𧘌辸袄𨬫𦂃𢘜禆褀椂禀𥡗禝𧬹礼禩渪𧄦㺨秆𩄍秔"
  	]
  ];

  var big5Added$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': big5Added
  });

  var require$$0 = getCjsExportFromNamespace(shiftjis$1);

  var require$$1 = getCjsExportFromNamespace(eucjp$1);

  var require$$2 = getCjsExportFromNamespace(cp936$1);

  var require$$3 = getCjsExportFromNamespace(gbkAdded$1);

  var require$$4 = getCjsExportFromNamespace(gb18030Ranges$1);

  var require$$5 = getCjsExportFromNamespace(cp949$1);

  var require$$6 = getCjsExportFromNamespace(cp950$1);

  var require$$7 = getCjsExportFromNamespace(big5Added$1);

  // Description of supported double byte encodings and aliases.
  // Tables are not require()-d until they are needed to speed up library load.
  // require()-s are direct to support Browserify.

  var dbcsData = {
      
      // == Japanese/ShiftJIS ====================================================
      // All japanese encodings are based on JIS X set of standards:
      // JIS X 0201 - Single-byte encoding of ASCII + ¥ + Kana chars at 0xA1-0xDF.
      // JIS X 0208 - Main set of 6879 characters, placed in 94x94 plane, to be encoded by 2 bytes. 
      //              Has several variations in 1978, 1983, 1990 and 1997.
      // JIS X 0212 - Supplementary plane of 6067 chars in 94x94 plane. 1990. Effectively dead.
      // JIS X 0213 - Extension and modern replacement of 0208 and 0212. Total chars: 11233.
      //              2 planes, first is superset of 0208, second - revised 0212.
      //              Introduced in 2000, revised 2004. Some characters are in Unicode Plane 2 (0x2xxxx)

      // Byte encodings are:
      //  * Shift_JIS: Compatible with 0201, uses not defined chars in top half as lead bytes for double-byte
      //               encoding of 0208. Lead byte ranges: 0x81-0x9F, 0xE0-0xEF; Trail byte ranges: 0x40-0x7E, 0x80-0x9E, 0x9F-0xFC.
      //               Windows CP932 is a superset of Shift_JIS. Some companies added more chars, notably KDDI.
      //  * EUC-JP:    Up to 3 bytes per character. Used mostly on *nixes.
      //               0x00-0x7F       - lower part of 0201
      //               0x8E, 0xA1-0xDF - upper part of 0201
      //               (0xA1-0xFE)x2   - 0208 plane (94x94).
      //               0x8F, (0xA1-0xFE)x2 - 0212 plane (94x94).
      //  * JIS X 208: 7-bit, direct encoding of 0208. Byte ranges: 0x21-0x7E (94 values). Uncommon.
      //               Used as-is in ISO2022 family.
      //  * ISO2022-JP: Stateful encoding, with escape sequences to switch between ASCII, 
      //                0201-1976 Roman, 0208-1978, 0208-1983.
      //  * ISO2022-JP-1: Adds esc seq for 0212-1990.
      //  * ISO2022-JP-2: Adds esc seq for GB2313-1980, KSX1001-1992, ISO8859-1, ISO8859-7.
      //  * ISO2022-JP-3: Adds esc seq for 0201-1976 Kana set, 0213-2000 Planes 1, 2.
      //  * ISO2022-JP-2004: Adds 0213-2004 Plane 1.
      //
      // After JIS X 0213 appeared, Shift_JIS-2004, EUC-JISX0213 and ISO2022-JP-2004 followed, with just changing the planes.
      //
      // Overall, it seems that it's a mess :( http://www8.plala.or.jp/tkubota1/unicode-symbols-map2.html

      'shiftjis': {
          type: '_dbcs',
          table: function() { return require$$0 },
          encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
          encodeSkipVals: [{from: 0xED40, to: 0xF940}],
      },
      'csshiftjis': 'shiftjis',
      'mskanji': 'shiftjis',
      'sjis': 'shiftjis',
      'windows31j': 'shiftjis',
      'ms31j': 'shiftjis',
      'xsjis': 'shiftjis',
      'windows932': 'shiftjis',
      'ms932': 'shiftjis',
      '932': 'shiftjis',
      'cp932': 'shiftjis',

      'eucjp': {
          type: '_dbcs',
          table: function() { return require$$1 },
          encodeAdd: {'\u00a5': 0x5C, '\u203E': 0x7E},
      },

      // TODO: KDDI extension to Shift_JIS
      // TODO: IBM CCSID 942 = CP932, but F0-F9 custom chars and other char changes.
      // TODO: IBM CCSID 943 = Shift_JIS = CP932 with original Shift_JIS lower 128 chars.


      // == Chinese/GBK ==========================================================
      // http://en.wikipedia.org/wiki/GBK
      // We mostly implement W3C recommendation: https://www.w3.org/TR/encoding/#gbk-encoder

      // Oldest GB2312 (1981, ~7600 chars) is a subset of CP936
      'gb2312': 'cp936',
      'gb231280': 'cp936',
      'gb23121980': 'cp936',
      'csgb2312': 'cp936',
      'csiso58gb231280': 'cp936',
      'euccn': 'cp936',

      // Microsoft's CP936 is a subset and approximation of GBK.
      'windows936': 'cp936',
      'ms936': 'cp936',
      '936': 'cp936',
      'cp936': {
          type: '_dbcs',
          table: function() { return require$$2 },
      },

      // GBK (~22000 chars) is an extension of CP936 that added user-mapped chars and some other.
      'gbk': {
          type: '_dbcs',
          table: function() { return require$$2.concat(require$$3) },
      },
      'xgbk': 'gbk',
      'isoir58': 'gbk',

      // GB18030 is an algorithmic extension of GBK.
      // Main source: https://www.w3.org/TR/encoding/#gbk-encoder
      // http://icu-project.org/docs/papers/gb18030.html
      // http://source.icu-project.org/repos/icu/data/trunk/charset/data/xml/gb-18030-2000.xml
      // http://www.khngai.com/chinese/charmap/tblgbk.php?page=0
      'gb18030': {
          type: '_dbcs',
          table: function() { return require$$2.concat(require$$3) },
          gb18030: function() { return require$$4 },
          encodeSkipVals: [0x80],
          encodeAdd: {'€': 0xA2E3},
      },

      'chinese': 'gb18030',


      // == Korean ===============================================================
      // EUC-KR, KS_C_5601 and KS X 1001 are exactly the same.
      'windows949': 'cp949',
      'ms949': 'cp949',
      '949': 'cp949',
      'cp949': {
          type: '_dbcs',
          table: function() { return require$$5 },
      },

      'cseuckr': 'cp949',
      'csksc56011987': 'cp949',
      'euckr': 'cp949',
      'isoir149': 'cp949',
      'korean': 'cp949',
      'ksc56011987': 'cp949',
      'ksc56011989': 'cp949',
      'ksc5601': 'cp949',


      // == Big5/Taiwan/Hong Kong ================================================
      // There are lots of tables for Big5 and cp950. Please see the following links for history:
      // http://moztw.org/docs/big5/  http://www.haible.de/bruno/charsets/conversion-tables/Big5.html
      // Variations, in roughly number of defined chars:
      //  * Windows CP 950: Microsoft variant of Big5. Canonical: http://www.unicode.org/Public/MAPPINGS/VENDORS/MICSFT/WINDOWS/CP950.TXT
      //  * Windows CP 951: Microsoft variant of Big5-HKSCS-2001. Seems to be never public. http://me.abelcheung.org/articles/research/what-is-cp951/
      //  * Big5-2003 (Taiwan standard) almost superset of cp950.
      //  * Unicode-at-on (UAO) / Mozilla 1.8. Falling out of use on the Web. Not supported by other browsers.
      //  * Big5-HKSCS (-2001, -2004, -2008). Hong Kong standard. 
      //    many unicode code points moved from PUA to Supplementary plane (U+2XXXX) over the years.
      //    Plus, it has 4 combining sequences.
      //    Seems that Mozilla refused to support it for 10 yrs. https://bugzilla.mozilla.org/show_bug.cgi?id=162431 https://bugzilla.mozilla.org/show_bug.cgi?id=310299
      //    because big5-hkscs is the only encoding to include astral characters in non-algorithmic way.
      //    Implementations are not consistent within browsers; sometimes labeled as just big5.
      //    MS Internet Explorer switches from big5 to big5-hkscs when a patch applied.
      //    Great discussion & recap of what's going on https://bugzilla.mozilla.org/show_bug.cgi?id=912470#c31
      //    In the encoder, it might make sense to support encoding old PUA mappings to Big5 bytes seq-s.
      //    Official spec: http://www.ogcio.gov.hk/en/business/tech_promotion/ccli/terms/doc/2003cmp_2008.txt
      //                   http://www.ogcio.gov.hk/tc/business/tech_promotion/ccli/terms/doc/hkscs-2008-big5-iso.txt
      // 
      // Current understanding of how to deal with Big5(-HKSCS) is in the Encoding Standard, http://encoding.spec.whatwg.org/#big5-encoder
      // Unicode mapping (http://www.unicode.org/Public/MAPPINGS/OBSOLETE/EASTASIA/OTHER/BIG5.TXT) is said to be wrong.

      'windows950': 'cp950',
      'ms950': 'cp950',
      '950': 'cp950',
      'cp950': {
          type: '_dbcs',
          table: function() { return require$$6 },
      },

      // Big5 has many variations and is an extension of cp950. We use Encoding Standard's as a consensus.
      'big5': 'big5hkscs',
      'big5hkscs': {
          type: '_dbcs',
          table: function() { return require$$6.concat(require$$7) },
          encodeSkipVals: [0xa2cc],
      },

      'cnbig5': 'big5hkscs',
      'csbig5': 'big5hkscs',
      'xxbig5': 'big5hkscs',
  };

  var encodings = createCommonjsModule(function (module, exports) {

  // Update this array if you add/rename/remove files in this directory.
  // We support Browserify by skipping automatic module discovery and requiring modules directly.
  var modules = [
      internal,
      utf32,
      utf16,
      utf7,
      sbcsCodec,
      sbcsData,
      sbcsDataGenerated,
      dbcsCodec,
      dbcsData,
  ];

  // Put all encoding/alias/codec definitions to single object and export it.
  for (var i = 0; i < modules.length; i++) {
      var module = modules[i];
      for (var enc in module)
          if (Object.prototype.hasOwnProperty.call(module, enc))
              exports[enc] = module[enc];
  }
  });

  var Buffer$8 = safer_1.Buffer;

  // NOTE: Due to 'stream' module being pretty large (~100Kb, significant in browser environments), 
  // we opt to dependency-inject it instead of creating a hard dependency.
  var streams = function(stream_module) {
      var Transform = stream_module.Transform;

      // == Encoder stream =======================================================

      function IconvLiteEncoderStream(conv, options) {
          this.conv = conv;
          options = options || {};
          options.decodeStrings = false; // We accept only strings, so we don't need to decode them.
          Transform.call(this, options);
      }

      IconvLiteEncoderStream.prototype = Object.create(Transform.prototype, {
          constructor: { value: IconvLiteEncoderStream }
      });

      IconvLiteEncoderStream.prototype._transform = function(chunk, encoding, done) {
          if (typeof chunk != 'string')
              return done(new Error("Iconv encoding stream needs strings as its input."));
          try {
              var res = this.conv.write(chunk);
              if (res && res.length) this.push(res);
              done();
          }
          catch (e) {
              done(e);
          }
      };

      IconvLiteEncoderStream.prototype._flush = function(done) {
          try {
              var res = this.conv.end();
              if (res && res.length) this.push(res);
              done();
          }
          catch (e) {
              done(e);
          }
      };

      IconvLiteEncoderStream.prototype.collect = function(cb) {
          var chunks = [];
          this.on('error', cb);
          this.on('data', function(chunk) { chunks.push(chunk); });
          this.on('end', function() {
              cb(null, Buffer$8.concat(chunks));
          });
          return this;
      };


      // == Decoder stream =======================================================

      function IconvLiteDecoderStream(conv, options) {
          this.conv = conv;
          options = options || {};
          options.encoding = this.encoding = 'utf8'; // We output strings.
          Transform.call(this, options);
      }

      IconvLiteDecoderStream.prototype = Object.create(Transform.prototype, {
          constructor: { value: IconvLiteDecoderStream }
      });

      IconvLiteDecoderStream.prototype._transform = function(chunk, encoding, done) {
          if (!Buffer$8.isBuffer(chunk) && !(chunk instanceof Uint8Array))
              return done(new Error("Iconv decoding stream needs buffers as its input."));
          try {
              var res = this.conv.write(chunk);
              if (res && res.length) this.push(res, this.encoding);
              done();
          }
          catch (e) {
              done(e);
          }
      };

      IconvLiteDecoderStream.prototype._flush = function(done) {
          try {
              var res = this.conv.end();
              if (res && res.length) this.push(res, this.encoding);                
              done();
          }
          catch (e) {
              done(e);
          }
      };

      IconvLiteDecoderStream.prototype.collect = function(cb) {
          var res = '';
          this.on('error', cb);
          this.on('data', function(chunk) { res += chunk; });
          this.on('end', function() {
              cb(null, res);
          });
          return this;
      };

      return {
          IconvLiteEncoderStream: IconvLiteEncoderStream,
          IconvLiteDecoderStream: IconvLiteDecoderStream,
      };
  };

  var lib$1 = createCommonjsModule(function (module) {

  var Buffer = safer_1.Buffer;

  var iconv = module.exports;

  // All codecs and aliases are kept here, keyed by encoding name/alias.
  // They are lazy loaded in `iconv.getCodec` from `encodings/index.js`.
  iconv.encodings = null;

  // Characters emitted in case of error.
  iconv.defaultCharUnicode = '�';
  iconv.defaultCharSingleByte = '?';

  // Public API.
  iconv.encode = function encode(str, encoding, options) {
      str = "" + (str || ""); // Ensure string.

      var encoder = iconv.getEncoder(encoding, options);

      var res = encoder.write(str);
      var trail = encoder.end();
      
      return (trail && trail.length > 0) ? Buffer.concat([res, trail]) : res;
  };

  iconv.decode = function decode(buf, encoding, options) {
      if (typeof buf === 'string') {
          if (!iconv.skipDecodeWarning) {
              console.error('Iconv-lite warning: decode()-ing strings is deprecated. Refer to https://github.com/ashtuchkin/iconv-lite/wiki/Use-Buffers-when-decoding');
              iconv.skipDecodeWarning = true;
          }

          buf = Buffer.from("" + (buf || ""), "binary"); // Ensure buffer.
      }

      var decoder = iconv.getDecoder(encoding, options);

      var res = decoder.write(buf);
      var trail = decoder.end();

      return trail ? (res + trail) : res;
  };

  iconv.encodingExists = function encodingExists(enc) {
      try {
          iconv.getCodec(enc);
          return true;
      } catch (e) {
          return false;
      }
  };

  // Legacy aliases to convert functions
  iconv.toEncoding = iconv.encode;
  iconv.fromEncoding = iconv.decode;

  // Search for a codec in iconv.encodings. Cache codec data in iconv._codecDataCache.
  iconv._codecDataCache = {};
  iconv.getCodec = function getCodec(encoding) {
      if (!iconv.encodings)
          iconv.encodings = encodings; // Lazy load all encoding definitions.
      
      // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
      var enc = iconv._canonicalizeEncoding(encoding);

      // Traverse iconv.encodings to find actual codec.
      var codecOptions = {};
      while (true) {
          var codec = iconv._codecDataCache[enc];
          if (codec)
              return codec;

          var codecDef = iconv.encodings[enc];

          switch (typeof codecDef) {
              case "string": // Direct alias to other encoding.
                  enc = codecDef;
                  break;

              case "object": // Alias with options. Can be layered.
                  for (var key in codecDef)
                      codecOptions[key] = codecDef[key];

                  if (!codecOptions.encodingName)
                      codecOptions.encodingName = enc;
                  
                  enc = codecDef.type;
                  break;

              case "function": // Codec itself.
                  if (!codecOptions.encodingName)
                      codecOptions.encodingName = enc;

                  // The codec function must load all tables and return object with .encoder and .decoder methods.
                  // It'll be called only once (for each different options object).
                  codec = new codecDef(codecOptions, iconv);

                  iconv._codecDataCache[codecOptions.encodingName] = codec; // Save it to be reused later.
                  return codec;

              default:
                  throw new Error("Encoding not recognized: '" + encoding + "' (searched as: '"+enc+"')");
          }
      }
  };

  iconv._canonicalizeEncoding = function(encoding) {
      // Canonicalize encoding name: strip all non-alphanumeric chars and appended year.
      return (''+encoding).toLowerCase().replace(/:\d{4}$|[^0-9a-z]/g, "");
  };

  iconv.getEncoder = function getEncoder(encoding, options) {
      var codec = iconv.getCodec(encoding),
          encoder = new codec.encoder(options, codec);

      if (codec.bomAware && options && options.addBOM)
          encoder = new bomHandling.PrependBOM(encoder, options);

      return encoder;
  };

  iconv.getDecoder = function getDecoder(encoding, options) {
      var codec = iconv.getCodec(encoding),
          decoder = new codec.decoder(options, codec);

      if (codec.bomAware && !(options && options.stripBOM === false))
          decoder = new bomHandling.StripBOM(decoder, options);

      return decoder;
  };

  // Streaming API
  // NOTE: Streaming API naturally depends on 'stream' module from Node.js. Unfortunately in browser environments this module can add
  // up to 100Kb to the output bundle. To avoid unnecessary code bloat, we don't enable Streaming API in browser by default.
  // If you would like to enable it explicitly, please add the following code to your app:
  // > iconv.enableStreamingAPI(require('stream'));
  iconv.enableStreamingAPI = function enableStreamingAPI(stream_module) {
      if (iconv.supportsStreams)
          return;

      // Dependency-inject stream module to create IconvLite stream classes.
      var streams$1 = streams(stream_module);

      // Not public API yet, but expose the stream classes.
      iconv.IconvLiteEncoderStream = streams$1.IconvLiteEncoderStream;
      iconv.IconvLiteDecoderStream = streams$1.IconvLiteDecoderStream;

      // Streaming API.
      iconv.encodeStream = function encodeStream(encoding, options) {
          return new iconv.IconvLiteEncoderStream(iconv.getEncoder(encoding, options), options);
      };

      iconv.decodeStream = function decodeStream(encoding, options) {
          return new iconv.IconvLiteDecoderStream(iconv.getDecoder(encoding, options), options);
      };

      iconv.supportsStreams = true;
  };

  // Enable Streaming API automatically if 'stream' module is available and non-empty (the majority of environments).
  var stream_module;
  try {
      stream_module = stream;
  } catch (e) {}

  if (stream_module && stream_module.Transform) {
      iconv.enableStreamingAPI(stream_module);

  } else {
      // In rare cases where 'stream' module is not available by default, throw a helpful exception.
      iconv.encodeStream = iconv.decodeStream = function() {
          throw new Error("iconv-lite Streaming API is not enabled. Use iconv.enableStreamingAPI(require('stream')); to enable it.");
      };
  }
  });

  // Expose to the world
  var convert_1 = convert;

  /**
   * Convert encoding of an UTF-8 string or a buffer
   *
   * @param {String|Buffer} str String to be converted
   * @param {String} to Encoding to be converted to
   * @param {String} [from='UTF-8'] Encoding to be converted from
   * @return {Buffer} Encoded string
   */
  function convert(str, to, from) {
      from = checkEncoding(from || 'UTF-8');
      to = checkEncoding(to || 'UTF-8');
      str = str || '';

      var result;

      if (from !== 'UTF-8' && typeof str === 'string') {
          str = Buffer.from(str, 'binary');
      }

      if (from === to) {
          if (typeof str === 'string') {
              result = Buffer.from(str);
          } else {
              result = str;
          }
      } else {
          try {
              result = convertIconvLite(str, to, from);
          } catch (E) {
              console.error(E);
              result = str;
          }
      }

      if (typeof result === 'string') {
          result = Buffer.from(result, 'utf-8');
      }

      return result;
  }

  /**
   * Convert encoding of astring with iconv-lite
   *
   * @param {String|Buffer} str String to be converted
   * @param {String} to Encoding to be converted to
   * @param {String} [from='UTF-8'] Encoding to be converted from
   * @return {Buffer} Encoded string
   */
  function convertIconvLite(str, to, from) {
      if (to === 'UTF-8') {
          return lib$1.decode(str, from);
      } else if (from === 'UTF-8') {
          return lib$1.encode(str, to);
      } else {
          return lib$1.encode(lib$1.decode(str, from), to);
      }
  }

  /**
   * Converts charset name if needed
   *
   * @param {String} name Character set
   * @return {String} Character set name
   */
  function checkEncoding(name) {
      return (name || '')
          .toString()
          .trim()
          .replace(/^latin[\-_]?(\d+)$/i, 'ISO-8859-$1')
          .replace(/^win(?:dows)?[\-_]?(\d+)$/i, 'WINDOWS-$1')
          .replace(/^utf[\-_]?(\d+)$/i, 'UTF-$1')
          .replace(/^ks_c_5601\-1987$/i, 'CP949')
          .replace(/^us[\-_]?ascii$/i, 'ASCII')
          .toUpperCase();
  }

  var encoding = {
  	convert: convert_1
  };

  var isStream_1 = createCommonjsModule(function (module) {

  var isStream = module.exports = function (stream) {
  	return stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';
  };

  isStream.writable = function (stream) {
  	return isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';
  };

  isStream.readable = function (stream) {
  	return isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';
  };

  isStream.duplex = function (stream) {
  	return isStream.writable(stream) && isStream.readable(stream);
  };

  isStream.transform = function (stream) {
  	return isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';
  };
  });

  /**
   * fetch-error.js
   *
   * FetchError interface for operational errors
   */

  var fetchError = FetchError;

  /**
   * Create FetchError instance
   *
   * @param   String      message      Error message for human
   * @param   String      type         Error type for machine
   * @param   String      systemError  For Node.js system error
   * @return  FetchError
   */
  function FetchError(message, type, systemError) {

  	this.name = this.constructor.name;
  	this.message = message;
  	this.type = type;

  	// when err.type is `system`, err.code contains system error code
  	if (systemError) {
  		this.code = this.errno = systemError.code;
  	}

  	// hide custom error implementation details from end-users
  	Error.captureStackTrace(this, this.constructor);
  }

  util$1.inherits(FetchError, Error);

  /**
   * body.js
   *
   * Body interface provides common methods for Request and Response
   */

  var convert$1 = encoding.convert;

  var PassThrough = stream.PassThrough;


  var body = Body;

  /**
   * Body class
   *
   * @param   Stream  body  Readable stream
   * @param   Object  opts  Response options
   * @return  Void
   */
  function Body(body, opts) {

  	opts = opts || {};

  	this.body = body;
  	this.bodyUsed = false;
  	this.size = opts.size || 0;
  	this.timeout = opts.timeout || 0;
  	this._raw = [];
  	this._abort = false;

  }

  /**
   * Decode response as json
   *
   * @return  Promise
   */
  Body.prototype.json = function() {

  	var self = this;

  	return this._decode().then(function(buffer) {
  		try {
  			return JSON.parse(buffer.toString());
  		} catch (err) {
  			return Body.Promise.reject(new fetchError('invalid json response body at ' + self.url + ' reason: ' + err.message, 'invalid-json'));
  		}
  	});

  };

  /**
   * Decode response as text
   *
   * @return  Promise
   */
  Body.prototype.text = function() {

  	return this._decode().then(function(buffer) {
  		return buffer.toString();
  	});

  };

  /**
   * Decode response as buffer (non-spec api)
   *
   * @return  Promise
   */
  Body.prototype.buffer = function() {

  	return this._decode();

  };

  /**
   * Decode buffers into utf-8 string
   *
   * @return  Promise
   */
  Body.prototype._decode = function() {

  	var self = this;

  	if (this.bodyUsed) {
  		return Body.Promise.reject(new Error('body used already for: ' + this.url));
  	}

  	this.bodyUsed = true;
  	this._bytes = 0;
  	this._abort = false;
  	this._raw = [];

  	return new Body.Promise(function(resolve, reject) {
  		var resTimeout;

  		// body is string
  		if (typeof self.body === 'string') {
  			self._bytes = self.body.length;
  			self._raw = [new Buffer(self.body)];
  			return resolve(self._convert());
  		}

  		// body is buffer
  		if (self.body instanceof Buffer) {
  			self._bytes = self.body.length;
  			self._raw = [self.body];
  			return resolve(self._convert());
  		}

  		// allow timeout on slow response body
  		if (self.timeout) {
  			resTimeout = setTimeout(function() {
  				self._abort = true;
  				reject(new fetchError('response timeout at ' + self.url + ' over limit: ' + self.timeout, 'body-timeout'));
  			}, self.timeout);
  		}

  		// handle stream error, such as incorrect content-encoding
  		self.body.on('error', function(err) {
  			reject(new fetchError('invalid response body at: ' + self.url + ' reason: ' + err.message, 'system', err));
  		});

  		// body is stream
  		self.body.on('data', function(chunk) {
  			if (self._abort || chunk === null) {
  				return;
  			}

  			if (self.size && self._bytes + chunk.length > self.size) {
  				self._abort = true;
  				reject(new fetchError('content size at ' + self.url + ' over limit: ' + self.size, 'max-size'));
  				return;
  			}

  			self._bytes += chunk.length;
  			self._raw.push(chunk);
  		});

  		self.body.on('end', function() {
  			if (self._abort) {
  				return;
  			}

  			clearTimeout(resTimeout);
  			resolve(self._convert());
  		});
  	});

  };

  /**
   * Detect buffer encoding and convert to target encoding
   * ref: http://www.w3.org/TR/2011/WD-html5-20110113/parsing.html#determining-the-character-encoding
   *
   * @param   String  encoding  Target encoding
   * @return  String
   */
  Body.prototype._convert = function(encoding) {

  	encoding = encoding || 'utf-8';

  	var ct = this.headers.get('content-type');
  	var charset = 'utf-8';
  	var res, str;

  	// header
  	if (ct) {
  		// skip encoding detection altogether if not html/xml/plain text
  		if (!/text\/html|text\/plain|\+xml|\/xml/i.test(ct)) {
  			return Buffer.concat(this._raw);
  		}

  		res = /charset=([^;]*)/i.exec(ct);
  	}

  	// no charset in content type, peek at response body for at most 1024 bytes
  	if (!res && this._raw.length > 0) {
  		for (var i = 0; i < this._raw.length; i++) {
  			str += this._raw[i].toString();
  			if (str.length > 1024) {
  				break;
  			}
  		}
  		str = str.substr(0, 1024);
  	}

  	// html5
  	if (!res && str) {
  		res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
  	}

  	// html4
  	if (!res && str) {
  		res = /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(str);

  		if (res) {
  			res = /charset=(.*)/i.exec(res.pop());
  		}
  	}

  	// xml
  	if (!res && str) {
  		res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
  	}

  	// found charset
  	if (res) {
  		charset = res.pop();

  		// prevent decode issues when sites use incorrect encoding
  		// ref: https://hsivonen.fi/encoding-menu/
  		if (charset === 'gb2312' || charset === 'gbk') {
  			charset = 'gb18030';
  		}
  	}

  	// turn raw buffers into a single utf-8 buffer
  	return convert$1(
  		Buffer.concat(this._raw)
  		, encoding
  		, charset
  	);

  };

  /**
   * Clone body given Res/Req instance
   *
   * @param   Mixed  instance  Response or Request instance
   * @return  Mixed
   */
  Body.prototype._clone = function(instance) {
  	var p1, p2;
  	var body = instance.body;

  	// don't allow cloning a used body
  	if (instance.bodyUsed) {
  		throw new Error('cannot clone body after it is used');
  	}

  	// check that body is a stream and not form-data object
  	// note: we can't clone the form-data object without having it as a dependency
  	if (isStream_1(body) && typeof body.getBoundary !== 'function') {
  		// tee instance body
  		p1 = new PassThrough();
  		p2 = new PassThrough();
  		body.pipe(p1);
  		body.pipe(p2);
  		// set instance body to teed body and return the other teed body
  		instance.body = p1;
  		body = p2;
  	}

  	return body;
  };

  // expose Promise
  Body.Promise = commonjsGlobal.Promise;

  /**
   * headers.js
   *
   * Headers class offers convenient helpers
   */

  var headers = Headers;

  /**
   * Headers class
   *
   * @param   Object  headers  Response headers
   * @return  Void
   */
  function Headers(headers) {

  	var self = this;
  	this._headers = {};

  	// Headers
  	if (headers instanceof Headers) {
  		headers = headers.raw();
  	}

  	// plain object
  	for (var prop in headers) {
  		if (!headers.hasOwnProperty(prop)) {
  			continue;
  		}

  		if (typeof headers[prop] === 'string') {
  			this.set(prop, headers[prop]);

  		} else if (typeof headers[prop] === 'number' && !isNaN(headers[prop])) {
  			this.set(prop, headers[prop].toString());

  		} else if (Array.isArray(headers[prop])) {
  			headers[prop].forEach(function(item) {
  				self.append(prop, item.toString());
  			});
  		}
  	}

  }

  /**
   * Return first header value given name
   *
   * @param   String  name  Header name
   * @return  Mixed
   */
  Headers.prototype.get = function(name) {
  	var list = this._headers[name.toLowerCase()];
  	return list ? list[0] : null;
  };

  /**
   * Return all header values given name
   *
   * @param   String  name  Header name
   * @return  Array
   */
  Headers.prototype.getAll = function(name) {
  	if (!this.has(name)) {
  		return [];
  	}

  	return this._headers[name.toLowerCase()];
  };

  /**
   * Iterate over all headers
   *
   * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
   * @param   Boolean   thisArg   `this` context for callback function
   * @return  Void
   */
  Headers.prototype.forEach = function(callback, thisArg) {
  	Object.getOwnPropertyNames(this._headers).forEach(function(name) {
  		this._headers[name].forEach(function(value) {
  			callback.call(thisArg, value, name, this);
  		}, this);
  	}, this);
  };

  /**
   * Overwrite header values given name
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  Headers.prototype.set = function(name, value) {
  	this._headers[name.toLowerCase()] = [value];
  };

  /**
   * Append a value onto existing header
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  Headers.prototype.append = function(name, value) {
  	if (!this.has(name)) {
  		this.set(name, value);
  		return;
  	}

  	this._headers[name.toLowerCase()].push(value);
  };

  /**
   * Check for header name existence
   *
   * @param   String   name  Header name
   * @return  Boolean
   */
  Headers.prototype.has = function(name) {
  	return this._headers.hasOwnProperty(name.toLowerCase());
  };

  /**
   * Delete all header values given name
   *
   * @param   String  name  Header name
   * @return  Void
   */
  Headers.prototype['delete'] = function(name) {
  	delete this._headers[name.toLowerCase()];
  };

  /**
   * Return raw headers (non-spec api)
   *
   * @return  Object
   */
  Headers.prototype.raw = function() {
  	return this._headers;
  };

  /**
   * response.js
   *
   * Response class provides content decoding
   */





  var response = Response;

  /**
   * Response class
   *
   * @param   Stream  body  Readable stream
   * @param   Object  opts  Response options
   * @return  Void
   */
  function Response(body$1, opts) {

  	opts = opts || {};

  	this.url = opts.url;
  	this.status = opts.status || 200;
  	this.statusText = opts.statusText || http.STATUS_CODES[this.status];
  	this.headers = new headers(opts.headers);
  	this.ok = this.status >= 200 && this.status < 300;

  	body.call(this, body$1, opts);

  }

  Response.prototype = Object.create(body.prototype);

  /**
   * Clone this response
   *
   * @return  Response
   */
  Response.prototype.clone = function() {
  	return new Response(this._clone(this), {
  		url: this.url
  		, status: this.status
  		, statusText: this.statusText
  		, headers: this.headers
  		, ok: this.ok
  	});
  };

  /**
   * request.js
   *
   * Request class contains server only options
   */

  var parse_url = url.parse;



  var request$1 = Request;

  /**
   * Request class
   *
   * @param   Mixed   input  Url or Request instance
   * @param   Object  init   Custom options
   * @return  Void
   */
  function Request(input, init) {
  	var url, url_parsed;

  	// normalize input
  	if (!(input instanceof Request)) {
  		url = input;
  		url_parsed = parse_url(url);
  		input = {};
  	} else {
  		url = input.url;
  		url_parsed = parse_url(url);
  	}

  	// normalize init
  	init = init || {};

  	// fetch spec options
  	this.method = init.method || input.method || 'GET';
  	this.redirect = init.redirect || input.redirect || 'follow';
  	this.headers = new headers(init.headers || input.headers || {});
  	this.url = url;

  	// server only options
  	this.follow = init.follow !== undefined ?
  		init.follow : input.follow !== undefined ?
  		input.follow : 20;
  	this.compress = init.compress !== undefined ?
  		init.compress : input.compress !== undefined ?
  		input.compress : true;
  	this.counter = init.counter || input.counter || 0;
  	this.agent = init.agent || input.agent;

  	body.call(this, init.body || this._clone(input), {
  		timeout: init.timeout || input.timeout || 0,
  		size: init.size || input.size || 0
  	});

  	// server request options
  	this.protocol = url_parsed.protocol;
  	this.hostname = url_parsed.hostname;
  	this.port = url_parsed.port;
  	this.path = url_parsed.path;
  	this.auth = url_parsed.auth;
  }

  Request.prototype = Object.create(body.prototype);

  /**
   * Clone this request
   *
   * @return  Request
   */
  Request.prototype.clone = function() {
  	return new Request(this);
  };

  var nodeFetch = createCommonjsModule(function (module) {
  /**
   * index.js
   *
   * a request API compatible with window.fetch
   */

  var parse_url = url.parse;
  var resolve_url = url.resolve;











  // commonjs
  module.exports = Fetch;
  // es6 default export compatibility
  module.exports.default = module.exports;

  /**
   * Fetch class
   *
   * @param   Mixed    url   Absolute url or Request instance
   * @param   Object   opts  Fetch options
   * @return  Promise
   */
  function Fetch(url, opts) {

  	// allow call as function
  	if (!(this instanceof Fetch))
  		return new Fetch(url, opts);

  	// allow custom promise
  	if (!Fetch.Promise) {
  		throw new Error('native promise missing, set Fetch.Promise to your favorite alternative');
  	}

  	body.Promise = Fetch.Promise;

  	var self = this;

  	// wrap http.request into fetch
  	return new Fetch.Promise(function(resolve, reject) {
  		// build request object
  		var options = new request$1(url, opts);

  		if (!options.protocol || !options.hostname) {
  			throw new Error('only absolute urls are supported');
  		}

  		if (options.protocol !== 'http:' && options.protocol !== 'https:') {
  			throw new Error('only http(s) protocols are supported');
  		}

  		var send;
  		if (options.protocol === 'https:') {
  			send = https.request;
  		} else {
  			send = http.request;
  		}

  		// normalize headers
  		var headers$1 = new headers(options.headers);

  		if (options.compress) {
  			headers$1.set('accept-encoding', 'gzip,deflate');
  		}

  		if (!headers$1.has('user-agent')) {
  			headers$1.set('user-agent', 'node-fetch/1.0 (+https://github.com/bitinn/node-fetch)');
  		}

  		if (!headers$1.has('connection') && !options.agent) {
  			headers$1.set('connection', 'close');
  		}

  		if (!headers$1.has('accept')) {
  			headers$1.set('accept', '*/*');
  		}

  		// detect form data input from form-data module, this hack avoid the need to pass multipart header manually
  		if (!headers$1.has('content-type') && options.body && typeof options.body.getBoundary === 'function') {
  			headers$1.set('content-type', 'multipart/form-data; boundary=' + options.body.getBoundary());
  		}

  		// bring node-fetch closer to browser behavior by setting content-length automatically
  		if (!headers$1.has('content-length') && /post|put|patch|delete/i.test(options.method)) {
  			if (typeof options.body === 'string') {
  				headers$1.set('content-length', Buffer.byteLength(options.body));
  			// detect form data input from form-data module, this hack avoid the need to add content-length header manually
  			} else if (options.body && typeof options.body.getLengthSync === 'function') {
  				// for form-data 1.x
  				if (options.body._lengthRetrievers && options.body._lengthRetrievers.length == 0) {
  					headers$1.set('content-length', options.body.getLengthSync().toString());
  				// for form-data 2.x
  				} else if (options.body.hasKnownLength && options.body.hasKnownLength()) {
  					headers$1.set('content-length', options.body.getLengthSync().toString());
  				}
  			// this is only necessary for older nodejs releases (before iojs merge)
  			} else if (options.body === undefined || options.body === null) {
  				headers$1.set('content-length', '0');
  			}
  		}

  		options.headers = headers$1.raw();

  		// http.request only support string as host header, this hack make custom host header possible
  		if (options.headers.host) {
  			options.headers.host = options.headers.host[0];
  		}

  		// send request
  		var req = send(options);
  		var reqTimeout;

  		if (options.timeout) {
  			req.once('socket', function(socket) {
  				reqTimeout = setTimeout(function() {
  					req.abort();
  					reject(new fetchError('network timeout at: ' + options.url, 'request-timeout'));
  				}, options.timeout);
  			});
  		}

  		req.on('error', function(err) {
  			clearTimeout(reqTimeout);
  			reject(new fetchError('request to ' + options.url + ' failed, reason: ' + err.message, 'system', err));
  		});

  		req.on('response', function(res) {
  			clearTimeout(reqTimeout);

  			// handle redirect
  			if (self.isRedirect(res.statusCode) && options.redirect !== 'manual') {
  				if (options.redirect === 'error') {
  					reject(new fetchError('redirect mode is set to error: ' + options.url, 'no-redirect'));
  					return;
  				}

  				if (options.counter >= options.follow) {
  					reject(new fetchError('maximum redirect reached at: ' + options.url, 'max-redirect'));
  					return;
  				}

  				if (!res.headers.location) {
  					reject(new fetchError('redirect location header missing at: ' + options.url, 'invalid-redirect'));
  					return;
  				}

  				// per fetch spec, for POST request with 301/302 response, or any request with 303 response, use GET when following redirect
  				if (res.statusCode === 303
  					|| ((res.statusCode === 301 || res.statusCode === 302) && options.method === 'POST'))
  				{
  					options.method = 'GET';
  					delete options.body;
  					delete options.headers['content-length'];
  				}

  				options.counter++;

  				resolve(Fetch(resolve_url(options.url, res.headers.location), options));
  				return;
  			}

  			// normalize location header for manual redirect mode
  			var headers$1 = new headers(res.headers);
  			if (options.redirect === 'manual' && headers$1.has('location')) {
  				headers$1.set('location', resolve_url(options.url, headers$1.get('location')));
  			}

  			// prepare response
  			var body = res.pipe(new stream.PassThrough());
  			var response_options = {
  				url: options.url
  				, status: res.statusCode
  				, statusText: res.statusMessage
  				, headers: headers$1
  				, size: options.size
  				, timeout: options.timeout
  			};

  			// response object
  			var output;

  			// in following scenarios we ignore compression support
  			// 1. compression support is disabled
  			// 2. HEAD request
  			// 3. no content-encoding header
  			// 4. no content response (204)
  			// 5. content not modified response (304)
  			if (!options.compress || options.method === 'HEAD' || !headers$1.has('content-encoding') || res.statusCode === 204 || res.statusCode === 304) {
  				output = new response(body, response_options);
  				resolve(output);
  				return;
  			}

  			// otherwise, check for gzip or deflate
  			var name = headers$1.get('content-encoding');

  			// for gzip
  			if (name == 'gzip' || name == 'x-gzip') {
  				body = body.pipe(zlib.createGunzip());
  				output = new response(body, response_options);
  				resolve(output);
  				return;

  			// for deflate
  			} else if (name == 'deflate' || name == 'x-deflate') {
  				// handle the infamous raw deflate response from old servers
  				// a hack for old IIS and Apache servers
  				var raw = res.pipe(new stream.PassThrough());
  				raw.once('data', function(chunk) {
  					// see http://stackoverflow.com/questions/37519828
  					if ((chunk[0] & 0x0F) === 0x08) {
  						body = body.pipe(zlib.createInflate());
  					} else {
  						body = body.pipe(zlib.createInflateRaw());
  					}
  					output = new response(body, response_options);
  					resolve(output);
  				});
  				return;
  			}

  			// otherwise, use response as-is
  			output = new response(body, response_options);
  			resolve(output);
  			return;
  		});

  		// accept string, buffer or readable stream as body
  		// per spec we will call tostring on non-stream objects
  		if (typeof options.body === 'string') {
  			req.write(options.body);
  			req.end();
  		} else if (options.body instanceof Buffer) {
  			req.write(options.body);
  			req.end();
  		} else if (typeof options.body === 'object' && options.body.pipe) {
  			options.body.pipe(req);
  		} else if (typeof options.body === 'object') {
  			req.write(options.body.toString());
  			req.end();
  		} else {
  			req.end();
  		}
  	});

  }
  /**
   * Redirect code matching
   *
   * @param   Number   code  Status code
   * @return  Boolean
   */
  Fetch.prototype.isRedirect = function(code) {
  	return code === 301 || code === 302 || code === 303 || code === 307 || code === 308;
  };

  // expose Promise
  Fetch.Promise = commonjsGlobal.Promise;
  Fetch.Response = response;
  Fetch.Headers = headers;
  Fetch.Request = request$1;
  });

  var fetchNpmNode = createCommonjsModule(function (module) {


  module.exports = function(url, options) {
  	if (/^\/\//.test(url)) {
  		url = 'https:' + url;
  	}
  	return nodeFetch.call(this, url, options);
  };

  if (!commonjsGlobal.fetch) {
  	commonjsGlobal.fetch = module.exports;
  	commonjsGlobal.Response = nodeFetch.Response;
  	commonjsGlobal.Headers = nodeFetch.Headers;
  	commonjsGlobal.Request = nodeFetch.Request;
  }
  });

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty$1;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var objectSpread = _objectSpread;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck$1;

  function _defineProperties$1(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass$1(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties$1(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties$1(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass$1;

  function createCommonjsModule$1(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof_1 = createCommonjsModule$1(function (module) {
  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      module.exports = _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      module.exports = _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  module.exports = _typeof;
  });

  // 返回一个组合了所有插件的“插件”
  function compose(middlewares) {
    if (!Array.isArray(middlewares)) throw new TypeError('Middlewares must be an array!');
    var middlewaresLen = middlewares.length;

    for (var i = 0; i < middlewaresLen; i++) {
      if (typeof middlewares[i] !== 'function') {
        throw new TypeError('Middleware must be componsed of function');
      }
    }

    return function wrapMiddlewares(params, next) {
      var index = -1;

      function dispatch(i) {
        if (i <= index) {
          return Promise.reject(new Error('next() should not be called multiple times in one middleware!'));
        }

        index = i;
        var fn = middlewares[i] || next;
        if (!fn) return Promise.resolve();

        try {
          return Promise.resolve(fn(params, function () {
            return dispatch(i + 1);
          }));
        } catch (err) {
          return Promise.reject(err);
        }
      }

      return dispatch(0);
    };
  }

  var Onion =
  /*#__PURE__*/
  function () {
    function Onion(defaultMiddlewares) {
      classCallCheck(this, Onion);

      if (!Array.isArray(defaultMiddlewares)) throw new TypeError('Default middlewares must be an array!');
      this.defaultMiddlewares = toConsumableArray(defaultMiddlewares);
      this.middlewares = [];
    }

    createClass(Onion, [{
      key: "use",
      // 内置内核中间件长度
      value: function use(newMiddleware) {
        var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          global: false,
          core: false,
          defaultInstance: false
        };
        var core = false;
        var global = false;
        var defaultInstance = false;

        if (typeof opts === 'number') {
          if (process && process.env && "development" === 'development') {
            console.warn('use() options should be object, number property would be deprecated in future，please update use() options to "{ core: true }".');
          }

          core = true;
          global = false;
        } else if (_typeof_1(opts) === 'object' && opts) {
          global = opts.global || false;
          core = opts.core || false;
          defaultInstance = opts.defaultInstance || false;
        } // 全局中间件


        if (global) {
          Onion.globalMiddlewares.splice(Onion.globalMiddlewares.length - Onion.defaultGlobalMiddlewaresLength, 0, newMiddleware);
          return;
        } // 内核中间件


        if (core) {
          Onion.coreMiddlewares.splice(Onion.coreMiddlewares.length - Onion.defaultCoreMiddlewaresLength, 0, newMiddleware);
          return;
        } // 默认实例中间件，供开发者使用


        if (defaultInstance) {
          this.defaultMiddlewares.push(newMiddleware);
          return;
        } // 实例中间件


        this.middlewares.push(newMiddleware);
      }
    }, {
      key: "execute",
      value: function execute() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var fn = compose([].concat(toConsumableArray(this.middlewares), toConsumableArray(this.defaultMiddlewares), toConsumableArray(Onion.globalMiddlewares), toConsumableArray(Onion.coreMiddlewares)));
        return fn(params);
      }
    }]);

    return Onion;
  }();

  Onion.globalMiddlewares = [];
  Onion.defaultGlobalMiddlewaresLength = 0;
  Onion.coreMiddlewares = [];
  Onion.defaultCoreMiddlewaresLength = 0;

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized$1;

  function _possibleConstructorReturn$1(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn$1;

  var getPrototypeOf = createCommonjsModule$1(function (module) {
  function _getPrototypeOf(o) {
    module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule$1(function (module) {
  function _setPrototypeOf(o, p) {
    module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  module.exports = _setPrototypeOf;
  });

  function _inherits$1(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits$1;

  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }

  var isNativeFunction = _isNativeFunction;

  var construct = createCommonjsModule$1(function (module) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      module.exports = _construct = Reflect.construct;
    } else {
      module.exports = _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }

    return _construct.apply(null, arguments);
  }

  module.exports = _construct;
  });

  var wrapNativeSuper = createCommonjsModule$1(function (module) {
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;

    module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !isNativeFunction(Class)) return Class;

      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }

      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);

        _cache.set(Class, Wrapper);
      }

      function Wrapper() {
        return construct(Class, arguments, getPrototypeOf(this).constructor);
      }

      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return setPrototypeOf(Wrapper, Class);
    };

    return _wrapNativeSuper(Class);
  }

  module.exports = _wrapNativeSuper;
  });

  var MapCache =
  /*#__PURE__*/
  function () {
    function MapCache(options) {
      classCallCheck(this, MapCache);

      this.cache = new Map();
      this.timer = {};
      this.extendOptions(options);
    }

    createClass(MapCache, [{
      key: "extendOptions",
      value: function extendOptions(options) {
        this.maxCache = options.maxCache || 0;
      }
    }, {
      key: "get",
      value: function get(key) {
        return this.cache.get(JSON.stringify(key));
      }
    }, {
      key: "set",
      value: function set(key, value) {
        var _this = this;

        var ttl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 60000;

        // 如果超过最大缓存数, 删除头部的第一个缓存.
        if (this.maxCache > 0 && this.cache.size >= this.maxCache) {
          var deleteKey = toConsumableArray(this.cache.keys())[0];

          this.cache.delete(deleteKey);

          if (this.timer[deleteKey]) {
            clearTimeout(this.timer[deleteKey]);
          }
        }

        var cacheKey = JSON.stringify(key);
        this.cache.set(cacheKey, value);

        if (ttl > 0) {
          this.timer[cacheKey] = setTimeout(function () {
            _this.cache.delete(cacheKey);

            delete _this.timer[cacheKey];
          }, ttl);
        }
      }
    }, {
      key: "delete",
      value: function _delete(key) {
        var cacheKey = JSON.stringify(key);
        delete this.timer[cacheKey];
        return this.cache.delete(cacheKey);
      }
    }, {
      key: "clear",
      value: function clear() {
        this.timer = {};
        return this.cache.clear();
      }
    }]);

    return MapCache;
  }();
  /**
   * 请求异常
   */

  var RequestError =
  /*#__PURE__*/
  function (_Error) {
    inherits(RequestError, _Error);

    function RequestError(text, request) {
      var _this2;

      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'RequestError';

      classCallCheck(this, RequestError);

      _this2 = possibleConstructorReturn(this, getPrototypeOf(RequestError).call(this, text));
      _this2.name = 'RequestError';
      _this2.request = request;
      _this2.type = type;
      return _this2;
    }

    return RequestError;
  }(wrapNativeSuper(Error));
  /**
   * 响应异常
   */

  var ResponseError =
  /*#__PURE__*/
  function (_Error2) {
    inherits(ResponseError, _Error2);

    function ResponseError(response, text, data, request) {
      var _this3;

      var type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'ResponseError';

      classCallCheck(this, ResponseError);

      _this3 = possibleConstructorReturn(this, getPrototypeOf(ResponseError).call(this, text || response.statusText));
      _this3.name = 'ResponseError';
      _this3.data = data;
      _this3.response = response;
      _this3.request = request;
      _this3.type = type;
      return _this3;
    }

    return ResponseError;
  }(wrapNativeSuper(Error));
  /**
   * http://gitlab.alipay-inc.com/KBSJ/gxt/blob/release_gxt_S8928905_20180531/src/util/request.js#L63
   * 支持gbk
   */

  function readerGBK(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onload = function () {
        resolve(reader.result);
      };

      reader.onerror = reject;
      reader.readAsText(file, 'GBK'); // setup GBK decoding
    });
  }
  /**
   * 安全的JSON.parse
   */

  function safeJsonParse(data) {
    var throwErrIfParseFail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var response = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    try {
      return JSON.parse(data);
    } catch (e) {
      if (throwErrIfParseFail) {
        throw new ResponseError(response, 'JSON.parse fail', data, request, 'ParseError');
      }
    } // eslint-disable-line no-empty


    return data;
  }
  function timeout2Throw(msec, request) {
    return new Promise(function (_, reject) {
      setTimeout(function () {
        reject(new RequestError("timeout of ".concat(msec, "ms exceeded"), request, 'Timeout'));
      }, msec);
    });
  } // If request options contain 'cancelToken', reject request when token has been canceled

  function cancel2Throw(opt) {
    return new Promise(function (_, reject) {
      if (opt.cancelToken) {
        opt.cancelToken.promise.then(function (cancel) {
          reject(cancel);
        });
      }
    });
  }
  var toString = Object.prototype.toString; // Check env is browser or node

  function getEnv() {
    var env; // Only Node.JS has a process variable that is of [[Class]] process

    if (typeof process !== 'undefined' && toString.call(process) === '[object process]') {
      // For node use HTTP adapter
      env = 'NODE';
    }

    if (typeof XMLHttpRequest !== 'undefined') {
      env = 'BROWSER';
    }

    return env;
  }
  function isArray$4(val) {
    return _typeof_1(val) === 'object' && Object.prototype.toString.call(val) === '[object Array]';
  }
  function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
  }
  function isDate(val) {
    return _typeof_1(val) === 'object' && Object.prototype.toString.call(val) === '[object Date]';
  }
  function isObject(val) {
    return val !== null && _typeof_1(val) === 'object';
  }
  function forEach2ObjArr(target, callback) {
    if (!target) return;

    if (_typeof_1(target) !== 'object') {
      target = [target];
    }

    if (isArray$4(target)) {
      for (var i = 0; i < target.length; i++) {
        callback.call(null, target[i], i, target);
      }
    } else {
      for (var key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          callback.call(null, target[key], key, target);
        }
      }
    }
  }
  function getParamObject(val) {
    if (isURLSearchParams(val)) {
      return lib_2(val.toString(), {
        strictNullHandling: true
      });
    }

    if (typeof val === 'string') {
      return [val];
    }

    return val;
  }
  function reqStringify(val) {
    return lib_3(val, {
      arrayFormat: 'repeat',
      strictNullHandling: true
    });
  }
  function mergeRequestOptions(options, options2Merge) {
    return objectSpread({}, options, options2Merge, {
      headers: objectSpread({}, options.headers, options2Merge.headers),
      params: objectSpread({}, getParamObject(options.params), getParamObject(options2Merge.params)),
      method: (options2Merge.method || options.method || 'get').toLowerCase()
    });
  }

  // 前后缀拦截
  var addfix = function addfix(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var prefix = options.prefix,
        suffix = options.suffix;

    if (prefix) {
      url = "".concat(prefix).concat(url);
    }

    if (suffix) {
      url = "".concat(url).concat(suffix);
    }

    return {
      url: url,
      options: options
    };
  };

  var warnedCoreType = false; // 默认缓存判断，开放缓存判断给非 get 请求使用

  function __defaultValidateCache(url, options) {
    var _options$method = options.method,
        method = _options$method === void 0 ? 'get' : _options$method;
    return method.toLowerCase() === 'get';
  }

  function fetchMiddleware(ctx, next) {
    if (!ctx) return next();
    var _ctx$req = ctx.req;
    _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
    var _ctx$req$options = _ctx$req.options,
        options = _ctx$req$options === void 0 ? {} : _ctx$req$options,
        _ctx$req$url = _ctx$req.url,
        url = _ctx$req$url === void 0 ? '' : _ctx$req$url,
        cache = ctx.cache,
        responseInterceptors = ctx.responseInterceptors;

    var _options$timeout = options.timeout,
        timeout = _options$timeout === void 0 ? 0 : _options$timeout,
        _options$__umiRequest = options.__umiRequestCoreType__,
        __umiRequestCoreType__ = _options$__umiRequest === void 0 ? 'normal' : _options$__umiRequest,
        _options$useCache = options.useCache,
        useCache = _options$useCache === void 0 ? false : _options$useCache,
        _options$method2 = options.method,
        method = _options$method2 === void 0 ? 'get' : _options$method2,
        params = options.params,
        ttl = options.ttl,
        _options$validateCach = options.validateCache,
        validateCache = _options$validateCach === void 0 ? __defaultValidateCache : _options$validateCach;

    if (__umiRequestCoreType__ !== 'normal') {
      if (process && process.env && "development" === 'development' && warnedCoreType === false) {
        warnedCoreType = true;
        console.warn('__umiRequestCoreType__ is a internal property that use in umi-request, change its value would affect the behavior of request! It only use when you want to extend or use request core.');
      }

      return next();
    }

    var adapter = fetch;

    if (!adapter) {
      throw new Error('Global fetch not exist!');
    } // 从缓存池检查是否有缓存数据


    var isBrowser = getEnv() === 'BROWSER';
    var needCache = validateCache(url, options) && useCache && isBrowser;

    if (needCache) {
      var responseCache = cache.get({
        url: url,
        params: params,
        method: method
      });

      if (responseCache) {
        responseCache = responseCache.clone();
        responseCache.useCache = true;
        ctx.res = responseCache;
        return next();
      }
    }

    var response; // 超时处理、取消请求处理

    if (timeout > 0) {
      response = Promise.race([cancel2Throw(options), adapter(url, options), timeout2Throw(timeout, ctx.req)]);
    } else {
      response = Promise.race([cancel2Throw(options), adapter(url, options)]);
    } // 兼容老版本 response.interceptor


    responseInterceptors.forEach(function (handler) {
      response = response.then(function (res) {
        // Fix multiple clones not working, issue: https://github.com/github/fetch/issues/504
        var clonedRes = typeof res.clone === 'function' ? res.clone() : res;
        return handler(clonedRes, options);
      });
    });
    return response.then(function (res) {
      // 是否存入缓存池
      if (needCache) {
        if (res.status === 200) {
          var copy = res.clone();
          copy.useCache = true;
          cache.set({
            url: url,
            params: params,
            method: method
          }, copy, ttl);
        }
      }

      ctx.res = res;
      return next();
    });
  }

  function parseResponseMiddleware(ctx, next) {
    var copy;
    return next().then(function () {
      if (!ctx) return;
      var _ctx$res = ctx.res,
          res = _ctx$res === void 0 ? {} : _ctx$res,
          _ctx$req = ctx.req,
          req = _ctx$req === void 0 ? {} : _ctx$req;

      var _ref = req || {},
          _ref$options = _ref.options;

      _ref$options = _ref$options === void 0 ? {} : _ref$options;
      var _ref$options$response = _ref$options.responseType,
          responseType = _ref$options$response === void 0 ? 'json' : _ref$options$response,
          _ref$options$charset = _ref$options.charset,
          charset = _ref$options$charset === void 0 ? 'utf8' : _ref$options$charset,
          _ref$options$getRespo = _ref$options.getResponse,
          _ref$options$throwErr = _ref$options.throwErrIfParseFail,
          throwErrIfParseFail = _ref$options$throwErr === void 0 ? false : _ref$options$throwErr,
          _ref$options$parseRes = _ref$options.parseResponse,
          parseResponse = _ref$options$parseRes === void 0 ? true : _ref$options$parseRes;

      if (!parseResponse) {
        return;
      }

      if (!res || !res.clone) {
        return;
      } // 只在浏览器环境对 response 做克隆， node 环境如果对 response 克隆会有问题：https://github.com/bitinn/node-fetch/issues/553


      copy = getEnv() === 'BROWSER' ? res.clone() : res;
      copy.useCache = res.useCache || false; // 解析数据

      if (charset === 'gbk') {
        try {
          return res.blob().then(readerGBK).then(function (d) {
            return safeJsonParse(d, false, copy, req);
          });
        } catch (e) {
          throw new ResponseError(copy, e.message, null, req, 'ParseError');
        }
      } else if (responseType === 'json') {
        return res.text().then(function (d) {
          return safeJsonParse(d, throwErrIfParseFail, copy, req);
        });
      }

      try {
        // 其他如text, blob, arrayBuffer, formData
        return res[responseType]();
      } catch (e) {
        throw new ResponseError(copy, 'responseType not support', null, req, 'ParseError');
      }
    }).then(function (body) {
      if (!ctx) return;
      var _ctx$res2 = ctx.res,
          _ctx$req2 = ctx.req,
          req = _ctx$req2 === void 0 ? {} : _ctx$req2;

      var _ref2 = req || {},
          _ref2$options = _ref2.options;

      _ref2$options = _ref2$options === void 0 ? {} : _ref2$options;
      var _ref2$options$getResp = _ref2$options.getResponse,
          getResponse = _ref2$options$getResp === void 0 ? false : _ref2$options$getResp;

      if (!copy) {
        return;
      }

      if (copy.status >= 200 && copy.status < 300) {
        // 提供源response, 以便自定义处理
        if (getResponse) {
          ctx.res = {
            data: body,
            response: copy
          };
          return;
        }

        ctx.res = body;
        return;
      }

      throw new ResponseError(copy, 'http error', body, req, 'HttpError');
    }).catch(function (e) {
      if (e instanceof RequestError || e instanceof ResponseError) {
        throw e;
      } // 对未知错误进行处理


      var req = ctx.req,
          res = ctx.res;
      e.request = e.request || req;
      e.response = e.response || res;
      e.type = e.type || e.name;
      e.data = e.data || undefined;
      throw e;
    });
  }

  function simplePostMiddleware(ctx, next) {
    if (!ctx) return next();
    var _ctx$req = ctx.req;
    _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
    var _ctx$req$options = _ctx$req.options,
        options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
    var _options$method = options.method,
        method = _options$method === void 0 ? 'get' : _options$method;

    if (['post', 'put', 'patch', 'delete'].indexOf(method.toLowerCase()) === -1) {
      return next();
    }

    var _options$requestType = options.requestType,
        requestType = _options$requestType === void 0 ? 'json' : _options$requestType,
        data = options.data; // 数据使用类axios的新字段data, 避免引用后影响旧代码, 如将body stringify多次

    if (data) {
      var dataType = Object.prototype.toString.call(data);

      if (dataType === '[object Object]' || dataType === '[object Array]') {
        if (requestType === 'json') {
          options.headers = objectSpread({
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
          }, options.headers);
          options.body = JSON.stringify(data);
        } else if (requestType === 'form') {
          options.headers = objectSpread({
            Accept: 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }, options.headers);
          options.body = reqStringify(data);
        }
      } else {
        // 其他 requestType 自定义header
        options.headers = objectSpread({
          Accept: 'application/json'
        }, options.headers);
        options.body = data;
      }
    }

    ctx.req.options = options;
    return next();
  }

  function paramsSerialize(params, paramsSerializer) {
    var serializedParams;
    var jsonStringifiedParams; // 支持参数自动拼装，其他 method 也可用，不冲突

    if (params) {
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        if (isArray$4(params)) {
          jsonStringifiedParams = [];
          forEach2ObjArr(params, function (item) {
            if (item === null || typeof item === 'undefined') {
              jsonStringifiedParams.push(item);
            } else {
              jsonStringifiedParams.push(isObject(item) ? JSON.stringify(item) : item);
            }
          }); // a: [1,2,3] => a=1&a=2&a=3

          serializedParams = reqStringify(jsonStringifiedParams);
        } else {
          jsonStringifiedParams = {};
          forEach2ObjArr(params, function (value, key) {
            var jsonStringifiedValue = value;

            if (value === null || typeof value === 'undefined') {
              jsonStringifiedParams[key] = value;
            } else if (isDate(value)) {
              jsonStringifiedValue = value.toISOString();
            } else if (isArray$4(value)) {
              jsonStringifiedValue = value;
            } else if (isObject(value)) {
              jsonStringifiedValue = JSON.stringify(value);
            }

            jsonStringifiedParams[key] = jsonStringifiedValue;
          });
          var tmp = reqStringify(jsonStringifiedParams);
          serializedParams = tmp;
        }
      }
    }

    return serializedParams;
  } // 对请求参数做处理，实现 query 简化、 post 简化

  function simpleGetMiddleware(ctx, next) {
    if (!ctx) return next();
    var _ctx$req = ctx.req;
    _ctx$req = _ctx$req === void 0 ? {} : _ctx$req;
    var _ctx$req$options = _ctx$req.options,
        options = _ctx$req$options === void 0 ? {} : _ctx$req$options;
    var paramsSerializer = options.paramsSerializer,
        params = options.params;
    var _ctx$req2 = ctx.req;
    _ctx$req2 = _ctx$req2 === void 0 ? {} : _ctx$req2;
    var _ctx$req2$url = _ctx$req2.url,
        url = _ctx$req2$url === void 0 ? '' : _ctx$req2$url; // 将 method 改为大写

    options.method = options.method ? options.method.toUpperCase() : 'GET'; // 设置 credentials 默认值为 same-origin，确保当开发者没有设置时，各浏览器对请求是否发送 cookies 保持一致的行为
    // - omit: 从不发送cookies.
    // - same-origin: 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息.(浏览器默认值,在旧版本浏览器，例如safari 11依旧是omit，safari 12已更改)
    // - include: 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息.

    options.credentials = options.credentials || 'same-origin'; // 支持类似axios 参数自动拼装, 其他method也可用, 不冲突.

    var serializedParams = paramsSerialize(params, paramsSerializer);
    ctx.req.originUrl = url;

    if (serializedParams) {
      var urlSign = url.indexOf('?') !== -1 ? '&' : '?';
      ctx.req.url = "".concat(url).concat(urlSign).concat(serializedParams);
    }

    ctx.req.options = options;
    return next();
  }

  var globalMiddlewares = [simplePostMiddleware, simpleGetMiddleware, parseResponseMiddleware];
  var coreMiddlewares = [fetchMiddleware];
  Onion.globalMiddlewares = globalMiddlewares;
  Onion.defaultGlobalMiddlewaresLength = globalMiddlewares.length;
  Onion.coreMiddlewares = coreMiddlewares;
  Onion.defaultCoreMiddlewaresLength = coreMiddlewares.length;

  var Core =
  /*#__PURE__*/
  function () {
    function Core(initOptions) {
      classCallCheck(this, Core);

      this.onion = new Onion([]);
      this.fetchIndex = 0; // 【即将废弃】请求中间件位置

      this.mapCache = new MapCache(initOptions);
      this.initOptions = initOptions;
      this.instanceRequestInterceptors = [];
      this.instanceResponseInterceptors = [];
    } // 旧版拦截器为共享


    createClass(Core, [{
      key: "use",
      value: function use(newMiddleware) {
        var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          global: false,
          core: false
        };
        this.onion.use(newMiddleware, opt);
        return this;
      }
    }, {
      key: "extendOptions",
      value: function extendOptions(options) {
        this.initOptions = mergeRequestOptions(this.initOptions, options);
        this.mapCache.extendOptions(options);
      } // 执行请求前拦截器

    }, {
      key: "dealRequestInterceptors",
      value: function dealRequestInterceptors(ctx) {
        var reducer = function reducer(p1, p2) {
          return p1.then(function () {
            var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            ctx.req.url = ret.url || ctx.req.url;
            ctx.req.options = ret.options || ctx.req.options;
            return p2(ctx.req.url, ctx.req.options);
          });
        };

        var allInterceptors = [].concat(toConsumableArray(Core.requestInterceptors), toConsumableArray(this.instanceRequestInterceptors));
        return allInterceptors.reduce(reducer, Promise.resolve()).then(function () {
          var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          ctx.req.url = ret.url || ctx.req.url;
          ctx.req.options = ret.options || ctx.req.options;
          return Promise.resolve();
        });
      }
    }, {
      key: "request",
      value: function request(url, options) {
        var _this = this;

        var onion = this.onion;
        var obj = {
          req: {
            url: url,
            options: options
          },
          res: null,
          cache: this.mapCache,
          responseInterceptors: [].concat(toConsumableArray(Core.responseInterceptors), toConsumableArray(this.instanceResponseInterceptors))
        };

        if (typeof url !== 'string') {
          throw new Error('url MUST be a string');
        }

        return new Promise(function (resolve, reject) {
          _this.dealRequestInterceptors(obj).then(function () {
            return onion.execute(obj);
          }).then(function () {
            resolve(obj.res);
          }).catch(function (error) {
            var errorHandler = obj.req.options.errorHandler;

            if (errorHandler) {
              try {
                var data = errorHandler(error);
                resolve(data);
              } catch (e) {
                reject(e);
              }
            } else {
              reject(error);
            }
          });
        });
      }
    }], [{
      key: "requestUse",
      // 请求拦截器 默认 { global: true } 兼容旧版本拦截器
      value: function requestUse(handler) {
        var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          global: true
        };
        if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

        if (opt.global) {
          Core.requestInterceptors.push(handler);
        } else {
          this.instanceRequestInterceptors.push(handler);
        }
      } // 响应拦截器 默认 { global: true } 兼容旧版本拦截器

    }, {
      key: "responseUse",
      value: function responseUse(handler) {
        var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
          global: true
        };
        if (typeof handler !== 'function') throw new TypeError('Interceptor must be function!');

        if (opt.global) {
          Core.responseInterceptors.push(handler);
        } else {
          this.instanceResponseInterceptors.push(handler);
        }
      }
    }]);

    return Core;
  }();

  Core.requestInterceptors = [addfix];
  Core.responseInterceptors = [];

  /**
   * 当执行 “取消请求” 操作时会抛出 Cancel 对象作为一场
   * @class
   * @param {string=} message The message.
   */

  function Cancel(message) {
    this.message = message;
  }

  Cancel.prototype.toString = function toString() {
    return this.message ? "Cancel: ".concat(this.message) : 'Cancel';
  };

  Cancel.prototype.__CANCEL__ = true;

  /**
   * 通过 CancelToken 来取消请求操作
   *
   * @class
   * @param {Function} executor The executor function.
   */

  function CancelToken(executor) {
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }

    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    var token = this;
    executor(function cancel(message) {
      if (token.reason) {
        // 取消操作已被调用过
        return;
      }

      token.reason = new Cancel(message);
      resolvePromise(token.reason);
    });
  }
  /**
   * 如果请求已经取消，抛出 Cancel 异常
   */


  CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  };
  /**
   * 通过 source 来返回 CancelToken 实例和取消 CancelToken 的函数
   */


  CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token: token,
      cancel: cancel
    };
  };

  function isCancel(value) {
    return !!(value && value.__CANCEL__);
  }

  var request$2 = function request() {
    var initOptions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var coreInstance = new Core(initOptions);

    var umiInstance = function umiInstance(url) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var mergeOptions = mergeRequestOptions(coreInstance.initOptions, options);
      return coreInstance.request(url, mergeOptions);
    }; // 中间件


    umiInstance.use = coreInstance.use.bind(coreInstance);
    umiInstance.fetchIndex = coreInstance.fetchIndex; // 拦截器

    umiInstance.interceptors = {
      request: {
        use: Core.requestUse.bind(coreInstance)
      },
      response: {
        use: Core.responseUse.bind(coreInstance)
      }
    }; // 请求语法糖： reguest.get request.post ……

    var METHODS = ['get', 'post', 'delete', 'put', 'patch', 'head', 'options', 'rpc'];
    METHODS.forEach(function (method) {
      umiInstance[method] = function (url, options) {
        return umiInstance(url, objectSpread({}, options, {
          method: method
        }));
      };
    });
    umiInstance.Cancel = Cancel;
    umiInstance.CancelToken = CancelToken;
    umiInstance.isCancel = isCancel;
    umiInstance.extendOptions = coreInstance.extendOptions.bind(coreInstance); // 暴露各个实例的中间件，供开发者自由组合

    umiInstance.middlewares = {
      instance: coreInstance.onion.middlewares,
      defaultInstance: coreInstance.onion.defaultMiddlewares,
      global: Onion.globalMiddlewares,
      core: Onion.coreMiddlewares
    };
    return umiInstance;
  };
  /**
   * extend 方法参考了ky, 让用户可以定制配置.
   * initOpions 初始化参数
   * @param {number} maxCache 最大缓存数
   * @param {string} prefix url前缀
   * @param {function} errorHandler 统一错误处理方法
   * @param {object} headers 统一的headers
   */


  var extend$1 = function extend(initOptions) {
    return request$2(initOptions);
  };
  /**
   * 暴露 fetch 中间件，保障依旧可以使用
   */

  var fetch$1 = request$2({
    parseResponse: false
  });
  var request$1$1 = request$2({});

  /**
   * 异常处理程序
   */

  var errorHandler = function errorHandler(error) {
    var response = error.response,
        data = error.data;
    return data;
  };
  /**
   * 配置request请求时的默认参数
   */


  var request$3 = extend$1({
    errorHandler: errorHandler,
    timeout: 10000,
    credentials: 'include'
  }); // request拦截器, 改变url 或 options.

  request$3.interceptors.request.use(function (url, options) {
    var c_token = options.token;

    if (c_token) {
      var headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        userToken: c_token,
        Authorization: 'Bearer ' + c_token
      };
      return {
        url: url,
        options: _objectSpread2(_objectSpread2({}, options), {}, {
          headers: headers
        })
      };
    } else {
      return {
        url: url,
        options: _objectSpread2({}, options)
      };
    }
  }); // response拦截器, 处理response
  // @ts-ignore

  request$3.interceptors.response.use(function (response, options) {
    var token = response.headers.get('userToken');

    if (token) {
      localStorage.setItem('userToken', token);
    }

    return response;
  });

  function postSignatures(_x, _x2, _x3) {
    return _postSignatures.apply(this, arguments);
  } // 提交文件数据，更新数据

  function _postSignatures() {
    _postSignatures = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params, url, token) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", request$3("".concat(url, "/ebook/api/admin/ebook/file?version=1.0"), {
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
    return _postSignatures.apply(this, arguments);
  }

  function updateFile(_x4, _x5, _x6) {
    return _updateFile.apply(this, arguments);
  }

  function _updateFile() {
    _updateFile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params, url, token) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", request$3("".concat(url, "/ebook/api/admin/ebook/file?fileId=").concat(params.fileId, "&version=1.0"), {
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
    return _updateFile.apply(this, arguments);
  }

  var UploadInput = /*#__PURE__*/function (_Component) {
    _inherits(UploadInput, _Component);

    var _super = _createSuper(UploadInput);

    function UploadInput(props) {
      var _this;

      _classCallCheck(this, UploadInput);

      _this = _super.call(this, props);
      _this.uniqueId = ''; // 点击上传文件
      // @ts-ignore

      _this.handleFiles = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
          var fileList, _this$props, maxSize, accept, fileNameLength, files, filesList, newfileList;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // const file = e.target.files[0];
                  fileList = _this.state.fileList;
                  _this$props = _this.props, maxSize = _this$props.maxSize, accept = _this$props.accept, fileNameLength = _this$props.fileNameLength;
                  files = _this.inputFile.files;

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
                      _this.props.error('不支持上传的文件类型！'); // this.inputFile.files[index] = null;


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
                      _this.props.error("\u6587\u4EF6\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC7".concat(fileNameLength, "\u4E2A\u5B57\u7B26\uFF01")); // this.inputFile.files[index] = null;


                      return false;
                    } // 当文件过大的时候，进行提示


                    if (size > maxSize) {
                      var sizeLength = maxSize > 1024 ? "".concat(maxSize / 1024, "G") : "".concat(maxSize, "M");

                      _this.props.error("\u4E0A\u4F20\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7".concat(sizeLength, "\uFF01")); // this.inputFile.files[index] = null;


                      return false;
                    }

                    return true;
                  });

                  if (!(filesList.length === 0)) {
                    _context.next = 9;
                    break;
                  }

                  _this.inputFile.value ? _this.inputFile.value = null : '';
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

                  _this.setState({
                    file: filesList,
                    fileList: fileList.concat(newfileList)
                  }, function () {
                    _this.updateFileList();

                    setTimeout(function () {
                      for (var index = 0; index < filesList.length; index++) {
                        var element = filesList[index];

                        _this.sendFiles(element, newfileList[index].id);
                      }
                    }, 10);
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }();

      _this.sendFiles = function (file, id) {
        _this.uploadStatus(id, {
          progress: 0,
          status: "ready"
        }, function () {
          _this.sendFiles1(file, id);
        });
      }; // 把文件传到后端


      _this.sendFiles1 = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(file, id) {
          var _this$props2, url, token, fileList, ext, fileMd5, sendData, response, hasExist, hasFile, CosParam;

          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _this$props2 = _this.props, url = _this$props2.url, token = _this$props2.token;
                  fileList = _this.state.fileList;

                  if (file.name) {
                    _context2.next = 4;
                    break;
                  }

                  return _context2.abrupt("return", false);

                case 4:
                  // 获取文件后缀
                  ext = fileExtension(file.name).toLowerCase(); // 获取文件MD5加密

                  _context2.next = 7;
                  return _this.getFileMd5(file);

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
                  return postSignatures(sendData, url, token);

                case 12:
                  response = _context2.sent;
                  console.log("UploadInput -> response", response); // 判断文件是否还存在

                  hasExist = _this.props.fileList.some(function (fileListItem) {
                    return fileListItem.id === id || fileListItem.fileId === response.fileId || fileListItem.id === response.fileId || fileListItem.md5 === response.md5;
                  }); // 如果是token失效的时候

                  if (!(response.code === 40100)) {
                    _context2.next = 18;
                    break;
                  }

                  _this.props.error('登录已失效，请重新登录！', 401);

                  return _context2.abrupt("return", false);

                case 18:
                  /**当文件存在的时候**/
                  if (response && response.upload && hasExist) {
                    _this.uploadStatus(id, {
                      progress: 100,
                      status: "uploading"
                    });

                    _this.inputFile.value ? _this.inputFile.value = null : ''; // 判断文件是否已经存在

                    hasFile = _this.state.fileList.some(function (fileListItem) {
                      return fileListItem.uid === response.fileId || fileListItem.fileId === response.fileId || fileListItem.md5 === response.md5;
                    });

                    if (!hasFile) {
                      _message.success("".concat(file.name, "  \u6587\u4EF6\u4E0A\u4F20\u6210\u529F!"));

                      setTimeout(function () {
                        _this.uploadStatus(id, {
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
                      _this.props.error('文件已存在，不能重新上传！');

                      _this.inputFile.value ? _this.inputFile.value = null : '';
                      _this.props.onCancelFile && _this.props.onCancelFile(id);
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

                    _this.sendCosFile(file, CosParam, id);
                  }

                  _context2.next = 26;
                  break;

                case 21:
                  _context2.prev = 21;
                  _context2.t0 = _context2["catch"](9);

                  _this.uploadStatus(id, {
                    progress: 0,
                    status: 'error'
                  });

                  _this.props.error('网络错误,请稍后重试！');

                  _this.inputFile.value ? _this.inputFile.value = null : '';

                case 26:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, null, [[9, 21]]);
        }));

        return function (_x2, _x3) {
          return _ref2.apply(this, arguments);
        };
      }(); // 进行请求腾讯云文件上传


      _this.sendCosFile = function (file, CosParam, id) {
        var fileList = _this.state.fileList;
        var _this$props3 = _this.props,
            url = _this$props3.url,
            token = _this$props3.token;

        var that = _assertThisInitialized(_this);

        var OSSData = new cosJsSdkV5({
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
          }, /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(err, data) {
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
                      return updateFile({
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
                          _message.success("".concat(file.name, "  \u6587\u4EF6\u4E0A\u4F20\u6210\u529F!"));

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

            return function (_x4, _x5) {
              return _ref3.apply(this, arguments);
            };
          }());
        } catch (_unused) {
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
              return _objectSpread2(_objectSpread2({}, file), options);
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

      _this.getFileMd5 = /*#__PURE__*/function () {
        var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(file) {
          var md5String;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  md5String = new Promise(function (resolve, reject) {
                    jsMd5File$1(file, // @ts-ignore
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

        return function (_x6) {
          return _ref4.apply(this, arguments);
        };
      }();

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
        var _this2 = this;

        var _this$props4 = this.props,
            children = _this$props4.children,
            accept = _this$props4.accept,
            _this$props4$multiple = _this$props4.multiple,
            multiple = _this$props4$multiple === void 0 ? false : _this$props4$multiple;
        return /*#__PURE__*/React__default.createElement("div", {
          onClick: function onClick() {
            return _this2.inputFile.click();
          }
        }, /*#__PURE__*/React__default.createElement("input", {
          type: "file",
          name: "file",
          accept: accept,
          multiple: multiple,
          onChange: function onChange(e) {
            return _this2.handleFiles(e);
          },
          style: {
            display: 'none'
          },
          ref: function ref(e) {
            return _this2.inputFile = e;
          }
        }), children);
      }
    }]);

    return UploadInput;
  }(React.Component);

  exports.EmptyLine = UploadInput;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=index.umd.js.map
