"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // ../shared/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../shared/node_modules/lodash/isArray.js"(exports, module) {
      var isArray3 = Array.isArray;
      module.exports = isArray3;
    }
  });

  // ../shared/node_modules/lodash/_freeGlobal.js
  var require_freeGlobal = __commonJS({
    "../shared/node_modules/lodash/_freeGlobal.js"(exports, module) {
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      module.exports = freeGlobal;
    }
  });

  // ../shared/node_modules/lodash/_root.js
  var require_root = __commonJS({
    "../shared/node_modules/lodash/_root.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      module.exports = root;
    }
  });

  // ../shared/node_modules/lodash/_Symbol.js
  var require_Symbol = __commonJS({
    "../shared/node_modules/lodash/_Symbol.js"(exports, module) {
      var root = require_root();
      var Symbol2 = root.Symbol;
      module.exports = Symbol2;
    }
  });

  // ../shared/node_modules/lodash/_getRawTag.js
  var require_getRawTag = __commonJS({
    "../shared/node_modules/lodash/_getRawTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = void 0;
          var unmasked = true;
        } catch (e2) {
        }
        var result = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result;
      }
      module.exports = getRawTag;
    }
  });

  // ../shared/node_modules/lodash/_objectToString.js
  var require_objectToString = __commonJS({
    "../shared/node_modules/lodash/_objectToString.js"(exports, module) {
      var objectProto = Object.prototype;
      var nativeObjectToString = objectProto.toString;
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      module.exports = objectToString;
    }
  });

  // ../shared/node_modules/lodash/_baseGetTag.js
  var require_baseGetTag = __commonJS({
    "../shared/node_modules/lodash/_baseGetTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var getRawTag = require_getRawTag();
      var objectToString = require_objectToString();
      var nullTag = "[object Null]";
      var undefinedTag = "[object Undefined]";
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function baseGetTag(value) {
        if (value == null) {
          return value === void 0 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
      }
      module.exports = baseGetTag;
    }
  });

  // ../shared/node_modules/lodash/isObjectLike.js
  var require_isObjectLike = __commonJS({
    "../shared/node_modules/lodash/isObjectLike.js"(exports, module) {
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      module.exports = isObjectLike;
    }
  });

  // ../shared/node_modules/lodash/isSymbol.js
  var require_isSymbol = __commonJS({
    "../shared/node_modules/lodash/isSymbol.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var symbolTag = "[object Symbol]";
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      module.exports = isSymbol;
    }
  });

  // ../shared/node_modules/lodash/_isKey.js
  var require_isKey = __commonJS({
    "../shared/node_modules/lodash/_isKey.js"(exports, module) {
      var isArray3 = require_isArray();
      var isSymbol = require_isSymbol();
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
      var reIsPlainProp = /^\w*$/;
      function isKey(value, object) {
        if (isArray3(value)) {
          return false;
        }
        var type11 = typeof value;
        if (type11 == "number" || type11 == "symbol" || type11 == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
      }
      module.exports = isKey;
    }
  });

  // ../shared/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../shared/node_modules/lodash/isObject.js"(exports, module) {
      function isObject2(value) {
        var type11 = typeof value;
        return value != null && (type11 == "object" || type11 == "function");
      }
      module.exports = isObject2;
    }
  });

  // ../shared/node_modules/lodash/isFunction.js
  var require_isFunction = __commonJS({
    "../shared/node_modules/lodash/isFunction.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObject2 = require_isObject();
      var asyncTag = "[object AsyncFunction]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var proxyTag = "[object Proxy]";
      function isFunction(value) {
        if (!isObject2(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      module.exports = isFunction;
    }
  });

  // ../shared/node_modules/lodash/_coreJsData.js
  var require_coreJsData = __commonJS({
    "../shared/node_modules/lodash/_coreJsData.js"(exports, module) {
      var root = require_root();
      var coreJsData = root["__core-js_shared__"];
      module.exports = coreJsData;
    }
  });

  // ../shared/node_modules/lodash/_isMasked.js
  var require_isMasked = __commonJS({
    "../shared/node_modules/lodash/_isMasked.js"(exports, module) {
      var coreJsData = require_coreJsData();
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      module.exports = isMasked;
    }
  });

  // ../shared/node_modules/lodash/_toSource.js
  var require_toSource = __commonJS({
    "../shared/node_modules/lodash/_toSource.js"(exports, module) {
      var funcProto = Function.prototype;
      var funcToString = funcProto.toString;
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e2) {
          }
          try {
            return func + "";
          } catch (e2) {
          }
        }
        return "";
      }
      module.exports = toSource;
    }
  });

  // ../shared/node_modules/lodash/_baseIsNative.js
  var require_baseIsNative = __commonJS({
    "../shared/node_modules/lodash/_baseIsNative.js"(exports, module) {
      var isFunction = require_isFunction();
      var isMasked = require_isMasked();
      var isObject2 = require_isObject();
      var toSource = require_toSource();
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      function baseIsNative(value) {
        if (!isObject2(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      module.exports = baseIsNative;
    }
  });

  // ../shared/node_modules/lodash/_getValue.js
  var require_getValue = __commonJS({
    "../shared/node_modules/lodash/_getValue.js"(exports, module) {
      function getValue(object, key) {
        return object == null ? void 0 : object[key];
      }
      module.exports = getValue;
    }
  });

  // ../shared/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../shared/node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
    }
  });

  // ../shared/node_modules/lodash/_nativeCreate.js
  var require_nativeCreate = __commonJS({
    "../shared/node_modules/lodash/_nativeCreate.js"(exports, module) {
      var getNative = require_getNative();
      var nativeCreate = getNative(Object, "create");
      module.exports = nativeCreate;
    }
  });

  // ../shared/node_modules/lodash/_hashClear.js
  var require_hashClear = __commonJS({
    "../shared/node_modules/lodash/_hashClear.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      module.exports = hashClear;
    }
  });

  // ../shared/node_modules/lodash/_hashDelete.js
  var require_hashDelete = __commonJS({
    "../shared/node_modules/lodash/_hashDelete.js"(exports, module) {
      function hashDelete(key) {
        var result = this.has(key) && delete this.__data__[key];
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = hashDelete;
    }
  });

  // ../shared/node_modules/lodash/_hashGet.js
  var require_hashGet = __commonJS({
    "../shared/node_modules/lodash/_hashGet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // ../shared/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../shared/node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty.call(data, key);
      }
      module.exports = hashHas;
    }
  });

  // ../shared/node_modules/lodash/_hashSet.js
  var require_hashSet = __commonJS({
    "../shared/node_modules/lodash/_hashSet.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === void 0 ? HASH_UNDEFINED : value;
        return this;
      }
      module.exports = hashSet;
    }
  });

  // ../shared/node_modules/lodash/_Hash.js
  var require_Hash = __commonJS({
    "../shared/node_modules/lodash/_Hash.js"(exports, module) {
      var hashClear = require_hashClear();
      var hashDelete = require_hashDelete();
      var hashGet = require_hashGet();
      var hashHas = require_hashHas();
      var hashSet = require_hashSet();
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      module.exports = Hash;
    }
  });

  // ../shared/node_modules/lodash/_listCacheClear.js
  var require_listCacheClear = __commonJS({
    "../shared/node_modules/lodash/_listCacheClear.js"(exports, module) {
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      module.exports = listCacheClear;
    }
  });

  // ../shared/node_modules/lodash/eq.js
  var require_eq = __commonJS({
    "../shared/node_modules/lodash/eq.js"(exports, module) {
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      module.exports = eq;
    }
  });

  // ../shared/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../shared/node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array8, key) {
        var length = array8.length;
        while (length--) {
          if (eq(array8[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      module.exports = assocIndexOf;
    }
  });

  // ../shared/node_modules/lodash/_listCacheDelete.js
  var require_listCacheDelete = __commonJS({
    "../shared/node_modules/lodash/_listCacheDelete.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      var arrayProto = Array.prototype;
      var splice = arrayProto.splice;
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      module.exports = listCacheDelete;
    }
  });

  // ../shared/node_modules/lodash/_listCacheGet.js
  var require_listCacheGet = __commonJS({
    "../shared/node_modules/lodash/_listCacheGet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? void 0 : data[index][1];
      }
      module.exports = listCacheGet;
    }
  });

  // ../shared/node_modules/lodash/_listCacheHas.js
  var require_listCacheHas = __commonJS({
    "../shared/node_modules/lodash/_listCacheHas.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      module.exports = listCacheHas;
    }
  });

  // ../shared/node_modules/lodash/_listCacheSet.js
  var require_listCacheSet = __commonJS({
    "../shared/node_modules/lodash/_listCacheSet.js"(exports, module) {
      var assocIndexOf = require_assocIndexOf();
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      module.exports = listCacheSet;
    }
  });

  // ../shared/node_modules/lodash/_ListCache.js
  var require_ListCache = __commonJS({
    "../shared/node_modules/lodash/_ListCache.js"(exports, module) {
      var listCacheClear = require_listCacheClear();
      var listCacheDelete = require_listCacheDelete();
      var listCacheGet = require_listCacheGet();
      var listCacheHas = require_listCacheHas();
      var listCacheSet = require_listCacheSet();
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      module.exports = ListCache;
    }
  });

  // ../shared/node_modules/lodash/_Map.js
  var require_Map = __commonJS({
    "../shared/node_modules/lodash/_Map.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Map2 = getNative(root, "Map");
      module.exports = Map2;
    }
  });

  // ../shared/node_modules/lodash/_mapCacheClear.js
  var require_mapCacheClear = __commonJS({
    "../shared/node_modules/lodash/_mapCacheClear.js"(exports, module) {
      var Hash = require_Hash();
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map2 || ListCache)(),
          "string": new Hash()
        };
      }
      module.exports = mapCacheClear;
    }
  });

  // ../shared/node_modules/lodash/_isKeyable.js
  var require_isKeyable = __commonJS({
    "../shared/node_modules/lodash/_isKeyable.js"(exports, module) {
      function isKeyable(value) {
        var type11 = typeof value;
        return type11 == "string" || type11 == "number" || type11 == "symbol" || type11 == "boolean" ? value !== "__proto__" : value === null;
      }
      module.exports = isKeyable;
    }
  });

  // ../shared/node_modules/lodash/_getMapData.js
  var require_getMapData = __commonJS({
    "../shared/node_modules/lodash/_getMapData.js"(exports, module) {
      var isKeyable = require_isKeyable();
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      module.exports = getMapData;
    }
  });

  // ../shared/node_modules/lodash/_mapCacheDelete.js
  var require_mapCacheDelete = __commonJS({
    "../shared/node_modules/lodash/_mapCacheDelete.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheDelete(key) {
        var result = getMapData(this, key)["delete"](key);
        this.size -= result ? 1 : 0;
        return result;
      }
      module.exports = mapCacheDelete;
    }
  });

  // ../shared/node_modules/lodash/_mapCacheGet.js
  var require_mapCacheGet = __commonJS({
    "../shared/node_modules/lodash/_mapCacheGet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      module.exports = mapCacheGet;
    }
  });

  // ../shared/node_modules/lodash/_mapCacheHas.js
  var require_mapCacheHas = __commonJS({
    "../shared/node_modules/lodash/_mapCacheHas.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      module.exports = mapCacheHas;
    }
  });

  // ../shared/node_modules/lodash/_mapCacheSet.js
  var require_mapCacheSet = __commonJS({
    "../shared/node_modules/lodash/_mapCacheSet.js"(exports, module) {
      var getMapData = require_getMapData();
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size = data.size;
        data.set(key, value);
        this.size += data.size == size ? 0 : 1;
        return this;
      }
      module.exports = mapCacheSet;
    }
  });

  // ../shared/node_modules/lodash/_MapCache.js
  var require_MapCache = __commonJS({
    "../shared/node_modules/lodash/_MapCache.js"(exports, module) {
      var mapCacheClear = require_mapCacheClear();
      var mapCacheDelete = require_mapCacheDelete();
      var mapCacheGet = require_mapCacheGet();
      var mapCacheHas = require_mapCacheHas();
      var mapCacheSet = require_mapCacheSet();
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      module.exports = MapCache;
    }
  });

  // ../shared/node_modules/lodash/memoize.js
  var require_memoize = __commonJS({
    "../shared/node_modules/lodash/memoize.js"(exports, module) {
      var MapCache = require_MapCache();
      var FUNC_ERROR_TEXT = "Expected a function";
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key)) {
            return cache2.get(key);
          }
          var result = func.apply(this, args);
          memoized.cache = cache2.set(key, result) || cache2;
          return result;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      module.exports = memoize;
    }
  });

  // ../shared/node_modules/lodash/_memoizeCapped.js
  var require_memoizeCapped = __commonJS({
    "../shared/node_modules/lodash/_memoizeCapped.js"(exports, module) {
      var memoize = require_memoize();
      var MAX_MEMOIZE_SIZE = 500;
      function memoizeCapped(func) {
        var result = memoize(func, function(key) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key;
        });
        var cache2 = result.cache;
        return result;
      }
      module.exports = memoizeCapped;
    }
  });

  // ../shared/node_modules/lodash/_stringToPath.js
  var require_stringToPath = __commonJS({
    "../shared/node_modules/lodash/_stringToPath.js"(exports, module) {
      var memoizeCapped = require_memoizeCapped();
      var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reEscapeChar = /\\(\\)?/g;
      var stringToPath = memoizeCapped(function(string11) {
        var result = [];
        if (string11.charCodeAt(0) === 46) {
          result.push("");
        }
        string11.replace(rePropName, function(match, number8, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number8 || match);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // ../shared/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../shared/node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array8, iteratee) {
        var index = -1, length = array8 == null ? 0 : array8.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array8[index], index, array8);
        }
        return result;
      }
      module.exports = arrayMap;
    }
  });

  // ../shared/node_modules/lodash/_baseToString.js
  var require_baseToString = __commonJS({
    "../shared/node_modules/lodash/_baseToString.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var arrayMap = require_arrayMap();
      var isArray3 = require_isArray();
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolToString = symbolProto ? symbolProto.toString : void 0;
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray3(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = baseToString;
    }
  });

  // ../shared/node_modules/lodash/toString.js
  var require_toString = __commonJS({
    "../shared/node_modules/lodash/toString.js"(exports, module) {
      var baseToString = require_baseToString();
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      module.exports = toString;
    }
  });

  // ../shared/node_modules/lodash/_castPath.js
  var require_castPath = __commonJS({
    "../shared/node_modules/lodash/_castPath.js"(exports, module) {
      var isArray3 = require_isArray();
      var isKey = require_isKey();
      var stringToPath = require_stringToPath();
      var toString = require_toString();
      function castPath(value, object) {
        if (isArray3(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // ../shared/node_modules/lodash/_toKey.js
  var require_toKey = __commonJS({
    "../shared/node_modules/lodash/_toKey.js"(exports, module) {
      var isSymbol = require_isSymbol();
      var INFINITY = 1 / 0;
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result = value + "";
        return result == "0" && 1 / value == -INFINITY ? "-0" : result;
      }
      module.exports = toKey;
    }
  });

  // ../shared/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../shared/node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : void 0;
      }
      module.exports = baseGet;
    }
  });

  // ../shared/node_modules/lodash/get.js
  var require_get = __commonJS({
    "../shared/node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get5(object, path, defaultValue) {
        var result = object == null ? void 0 : baseGet(object, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get5;
    }
  });

  // ../shared/node_modules/fp-ts/lib/function.js
  var require_function = __commonJS({
    "../shared/node_modules/fp-ts/lib/function.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.hole = exports.pipe = exports.untupled = exports.tupled = exports.absurd = exports.decrement = exports.increment = exports.tuple = exports.flow = exports.flip = exports.constVoid = exports.constUndefined = exports.constNull = exports.constFalse = exports.constTrue = exports.constant = exports.not = exports.unsafeCoerce = exports.identity = exports.getEndomorphismMonoid = exports.getRing = exports.getSemiring = exports.getMonoid = exports.getSemigroup = exports.getBooleanAlgebra = void 0;
      var getBooleanAlgebra = function(B) {
        return function() {
          return {
            meet: function(x, y2) {
              return function(a) {
                return B.meet(x(a), y2(a));
              };
            },
            join: function(x, y2) {
              return function(a) {
                return B.join(x(a), y2(a));
              };
            },
            zero: function() {
              return B.zero;
            },
            one: function() {
              return B.one;
            },
            implies: function(x, y2) {
              return function(a) {
                return B.implies(x(a), y2(a));
              };
            },
            not: function(x) {
              return function(a) {
                return B.not(x(a));
              };
            }
          };
        };
      };
      exports.getBooleanAlgebra = getBooleanAlgebra;
      var getSemigroup = function(S) {
        return function() {
          return {
            concat: function(f, g) {
              return function(a) {
                return S.concat(f(a), g(a));
              };
            }
          };
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function(M) {
        var getSemigroupM = exports.getSemigroup(M);
        return function() {
          return {
            concat: getSemigroupM().concat,
            empty: function() {
              return M.empty;
            }
          };
        };
      };
      exports.getMonoid = getMonoid;
      var getSemiring = function(S) {
        return {
          add: function(f, g) {
            return function(x) {
              return S.add(f(x), g(x));
            };
          },
          zero: function() {
            return S.zero;
          },
          mul: function(f, g) {
            return function(x) {
              return S.mul(f(x), g(x));
            };
          },
          one: function() {
            return S.one;
          }
        };
      };
      exports.getSemiring = getSemiring;
      var getRing = function(R) {
        var S = exports.getSemiring(R);
        return {
          add: S.add,
          mul: S.mul,
          one: S.one,
          zero: S.zero,
          sub: function(f, g) {
            return function(x) {
              return R.sub(f(x), g(x));
            };
          }
        };
      };
      exports.getRing = getRing;
      var getEndomorphismMonoid = function() {
        return {
          concat: function(x, y2) {
            return function(a) {
              return y2(x(a));
            };
          },
          empty: identity2
        };
      };
      exports.getEndomorphismMonoid = getEndomorphismMonoid;
      function identity2(a) {
        return a;
      }
      exports.identity = identity2;
      exports.unsafeCoerce = identity2;
      function not2(predicate) {
        return function(a) {
          return !predicate(a);
        };
      }
      exports.not = not2;
      function constant(a) {
        return function() {
          return a;
        };
      }
      exports.constant = constant;
      exports.constTrue = /* @__PURE__ */ constant(true);
      exports.constFalse = /* @__PURE__ */ constant(false);
      exports.constNull = /* @__PURE__ */ constant(null);
      exports.constUndefined = /* @__PURE__ */ constant(void 0);
      exports.constVoid = exports.constUndefined;
      function flip2(f) {
        return function(b, a) {
          return f(a, b);
        };
      }
      exports.flip = flip2;
      function flow2(ab, bc, cd, de, ef, fg, gh, hi, ij) {
        switch (arguments.length) {
          case 1:
            return ab;
          case 2:
            return function() {
              return bc(ab.apply(this, arguments));
            };
          case 3:
            return function() {
              return cd(bc(ab.apply(this, arguments)));
            };
          case 4:
            return function() {
              return de(cd(bc(ab.apply(this, arguments))));
            };
          case 5:
            return function() {
              return ef(de(cd(bc(ab.apply(this, arguments)))));
            };
          case 6:
            return function() {
              return fg(ef(de(cd(bc(ab.apply(this, arguments))))));
            };
          case 7:
            return function() {
              return gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))));
            };
          case 8:
            return function() {
              return hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments))))))));
            };
          case 9:
            return function() {
              return ij(hi(gh(fg(ef(de(cd(bc(ab.apply(this, arguments)))))))));
            };
        }
        return;
      }
      exports.flow = flow2;
      function tuple() {
        var t14 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          t14[_i] = arguments[_i];
        }
        return t14;
      }
      exports.tuple = tuple;
      function increment(n) {
        return n + 1;
      }
      exports.increment = increment;
      function decrement(n) {
        return n - 1;
      }
      exports.decrement = decrement;
      function absurd(_) {
        throw new Error("Called `absurd` function which should be uncallable");
      }
      exports.absurd = absurd;
      function tupled(f) {
        return function(a) {
          return f.apply(void 0, a);
        };
      }
      exports.tupled = tupled;
      function untupled(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return f(a);
        };
      }
      exports.untupled = untupled;
      function pipe3(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
        switch (arguments.length) {
          case 1:
            return a;
          case 2:
            return ab(a);
          case 3:
            return bc(ab(a));
          case 4:
            return cd(bc(ab(a)));
          case 5:
            return de(cd(bc(ab(a))));
          case 6:
            return ef(de(cd(bc(ab(a)))));
          case 7:
            return fg(ef(de(cd(bc(ab(a))))));
          case 8:
            return gh(fg(ef(de(cd(bc(ab(a)))))));
          case 9:
            return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
          case 10:
            return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
          case 11:
            return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
          case 12:
            return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
          case 13:
            return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
          case 14:
            return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
          case 15:
            return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
          case 16:
            return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
          case 17:
            return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
          case 18:
            return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
          case 19:
            return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
          case 20:
            return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
        }
        return;
      }
      exports.pipe = pipe3;
      exports.hole = absurd;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Apply.js
  var require_Apply = __commonJS({
    "../shared/node_modules/fp-ts/lib/Apply.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.sequenceS = exports.sequenceT = exports.getApplySemigroup = exports.apS = exports.apSecond = exports.apFirst = exports.ap = void 0;
      var function_1 = require_function();
      function ap(F, G) {
        return function(fa) {
          return function(fab) {
            return F.ap(F.map(fab, function(gab) {
              return function(ga) {
                return G.ap(gab, ga);
              };
            }), fa);
          };
        };
      }
      exports.ap = ap;
      function apFirst(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function(a) {
              return function() {
                return a;
              };
            }), second);
          };
        };
      }
      exports.apFirst = apFirst;
      function apSecond(A) {
        return function(second) {
          return function(first) {
            return A.ap(A.map(first, function() {
              return function(b) {
                return b;
              };
            }), second);
          };
        };
      }
      exports.apSecond = apSecond;
      function apS(F) {
        return function(name, fb) {
          return function(fa) {
            return F.ap(F.map(fa, function(a) {
              return function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              };
            }), fb);
          };
        };
      }
      exports.apS = apS;
      function getApplySemigroup(F) {
        return function(S) {
          return {
            concat: function(first, second) {
              return F.ap(F.map(first, function(x) {
                return function(y2) {
                  return S.concat(x, y2);
                };
              }), second);
            }
          };
        };
      }
      exports.getApplySemigroup = getApplySemigroup;
      function curried(f, n, acc) {
        return function(x) {
          var combined = Array(acc.length + 1);
          for (var i2 = 0; i2 < acc.length; i2++) {
            combined[i2] = acc[i2];
          }
          combined[acc.length] = x;
          return n === 0 ? f.apply(null, combined) : curried(f, n - 1, combined);
        };
      }
      var tupleConstructors = {
        1: function(a) {
          return [a];
        },
        2: function(a) {
          return function(b) {
            return [a, b];
          };
        },
        3: function(a) {
          return function(b) {
            return function(c2) {
              return [a, b, c2];
            };
          };
        },
        4: function(a) {
          return function(b) {
            return function(c2) {
              return function(d) {
                return [a, b, c2, d];
              };
            };
          };
        },
        5: function(a) {
          return function(b) {
            return function(c2) {
              return function(d) {
                return function(e2) {
                  return [a, b, c2, d, e2];
                };
              };
            };
          };
        }
      };
      function getTupleConstructor(len) {
        if (!tupleConstructors.hasOwnProperty(len)) {
          tupleConstructors[len] = curried(function_1.tuple, len - 1, []);
        }
        return tupleConstructors[len];
      }
      function sequenceT(F) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var len = args.length;
          var f = getTupleConstructor(len);
          var fas = F.map(args[0], f);
          for (var i2 = 1; i2 < len; i2++) {
            fas = F.ap(fas, args[i2]);
          }
          return fas;
        };
      }
      exports.sequenceT = sequenceT;
      function getRecordConstructor(keys) {
        var len = keys.length;
        switch (len) {
          case 1:
            return function(a) {
              var _a;
              return _a = {}, _a[keys[0]] = a, _a;
            };
          case 2:
            return function(a) {
              return function(b) {
                var _a;
                return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a;
              };
            };
          case 3:
            return function(a) {
              return function(b) {
                return function(c2) {
                  var _a;
                  return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c2, _a;
                };
              };
            };
          case 4:
            return function(a) {
              return function(b) {
                return function(c2) {
                  return function(d) {
                    var _a;
                    return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c2, _a[keys[3]] = d, _a;
                  };
                };
              };
            };
          case 5:
            return function(a) {
              return function(b) {
                return function(c2) {
                  return function(d) {
                    return function(e2) {
                      var _a;
                      return _a = {}, _a[keys[0]] = a, _a[keys[1]] = b, _a[keys[2]] = c2, _a[keys[3]] = d, _a[keys[4]] = e2, _a;
                    };
                  };
                };
              };
            };
          default:
            return curried(function() {
              var args = [];
              for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
              }
              var r = {};
              for (var i2 = 0; i2 < len; i2++) {
                r[keys[i2]] = args[i2];
              }
              return r;
            }, len - 1, []);
        }
      }
      function sequenceS(F) {
        return function(r) {
          var keys = Object.keys(r);
          var len = keys.length;
          var f = getRecordConstructor(keys);
          var fr = F.map(r[keys[0]], f);
          for (var i2 = 1; i2 < len; i2++) {
            fr = F.ap(fr, r[keys[i2]]);
          }
          return fr;
        };
      }
      exports.sequenceS = sequenceS;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Functor.js
  var require_Functor = __commonJS({
    "../shared/node_modules/fp-ts/lib/Functor.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFunctorComposition = exports.bindTo = exports.flap = exports.map = void 0;
      var function_1 = require_function();
      function map2(F, G) {
        return function(f) {
          return function(fa) {
            return F.map(fa, function(ga) {
              return G.map(ga, f);
            });
          };
        };
      }
      exports.map = map2;
      function flap3(F) {
        return function(a) {
          return function(fab) {
            return F.map(fab, function(f) {
              return f(a);
            });
          };
        };
      }
      exports.flap = flap3;
      function bindTo2(F) {
        return function(name) {
          return function(fa) {
            return F.map(fa, function(a) {
              var _a;
              return _a = {}, _a[name] = a, _a;
            });
          };
        };
      }
      exports.bindTo = bindTo2;
      function getFunctorComposition(F, G) {
        var _map2 = map2(F, G);
        return {
          map: function(fga, f) {
            return function_1.pipe(fga, _map2(f));
          }
        };
      }
      exports.getFunctorComposition = getFunctorComposition;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Applicative.js
  var require_Applicative = __commonJS({
    "../shared/node_modules/fp-ts/lib/Applicative.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getApplicativeComposition = exports.getApplicativeMonoid = void 0;
      var Apply_1 = require_Apply();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      function getApplicativeMonoid(F) {
        var f = Apply_1.getApplySemigroup(F);
        return function(M) {
          return {
            concat: f(M).concat,
            empty: F.of(M.empty)
          };
        };
      }
      exports.getApplicativeMonoid = getApplicativeMonoid;
      function getApplicativeComposition(F, G) {
        var map2 = Functor_1.getFunctorComposition(F, G).map;
        var _ap = Apply_1.ap(F, G);
        return {
          map: map2,
          of: function(a) {
            return F.of(G.of(a));
          },
          ap: function(fgab, fga) {
            return function_1.pipe(fgab, _ap(fga));
          }
        };
      }
      exports.getApplicativeComposition = getApplicativeComposition;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Chain.js
  var require_Chain = __commonJS({
    "../shared/node_modules/fp-ts/lib/Chain.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.bind = exports.chainFirst = void 0;
      function chainFirst(M) {
        return function(f) {
          return function(first) {
            return M.chain(first, function(a) {
              return M.map(f(a), function() {
                return a;
              });
            });
          };
        };
      }
      exports.chainFirst = chainFirst;
      function bind(M) {
        return function(name, f) {
          return function(ma) {
            return M.chain(ma, function(a) {
              return M.map(f(a), function(b) {
                var _a;
                return Object.assign({}, a, (_a = {}, _a[name] = b, _a));
              });
            });
          };
        };
      }
      exports.bind = bind;
    }
  });

  // ../shared/node_modules/fp-ts/lib/ChainRec.js
  var require_ChainRec = __commonJS({
    "../shared/node_modules/fp-ts/lib/ChainRec.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.tailRec = void 0;
      var tailRec = function(startWith, f) {
        var ab = f(startWith);
        while (ab._tag === "Left") {
          ab = f(ab.left);
        }
        return ab.right;
      };
      exports.tailRec = tailRec;
    }
  });

  // ../shared/node_modules/fp-ts/lib/internal.js
  var require_internal = __commonJS({
    "../shared/node_modules/fp-ts/lib/internal.js"(exports) {
      "use strict";
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from) {
        for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++)
          to[j] = from[i2];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fromReadonlyNonEmptyArray = exports.has = exports.isLeft = exports.isSome = void 0;
      var isSome = function(fa) {
        return fa._tag === "Some";
      };
      exports.isSome = isSome;
      var isLeft3 = function(ma) {
        return ma._tag === "Left";
      };
      exports.isLeft = isLeft3;
      exports.has = Object.prototype.hasOwnProperty;
      var fromReadonlyNonEmptyArray = function(as) {
        return __spreadArray2([as[0]], as.slice(1));
      };
      exports.fromReadonlyNonEmptyArray = fromReadonlyNonEmptyArray;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Separated.js
  var require_Separated = __commonJS({
    "../shared/node_modules/fp-ts/lib/Separated.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.right = exports.left = exports.flap = exports.Functor = exports.Bifunctor = exports.URI = exports.bimap = exports.mapLeft = exports.map = exports.separated = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var separated = function(left2, right3) {
        return { left: left2, right: right3 };
      };
      exports.separated = separated;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapLeft = function(fa, f) {
        return function_1.pipe(fa, exports.mapLeft(f));
      };
      var _bimap = function(fa, g, f) {
        return function_1.pipe(fa, exports.bimap(g, f));
      };
      var map2 = function(f) {
        return function(fa) {
          return exports.separated(exports.left(fa), f(exports.right(fa)));
        };
      };
      exports.map = map2;
      var mapLeft = function(f) {
        return function(fa) {
          return exports.separated(f(exports.left(fa)), exports.right(fa));
        };
      };
      exports.mapLeft = mapLeft;
      var bimap = function(f, g) {
        return function(fa) {
          return exports.separated(f(exports.left(fa)), g(exports.right(fa)));
        };
      };
      exports.bimap = bimap;
      exports.URI = "Separated";
      exports.Bifunctor = {
        URI: exports.URI,
        mapLeft: _mapLeft,
        bimap: _bimap
      };
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      var left = function(s2) {
        return s2.left;
      };
      exports.left = left;
      var right2 = function(s2) {
        return s2.right;
      };
      exports.right = right2;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Either.js
  var require_Either = __commonJS({
    "../shared/node_modules/fp-ts/lib/Either.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFilterable = exports.getCompactable = exports.getSemigroup = exports.getEq = exports.getShow = exports.URI = exports.throwError = exports.sequence = exports.traverse = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extend = exports.alt = exports.altW = exports.flatten = exports.chain = exports.chainW = exports.of = exports.ap = exports.apW = exports.mapLeft = exports.bimap = exports.map = exports.filterOrElse = exports.filterOrElseW = exports.orElse = exports.orElseW = exports.swap = exports.chainOptionK = exports.fromOptionK = exports.toUnion = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.fromPredicate = exports.fromOption = exports.right = exports.left = exports.isRight = exports.isLeft = void 0;
      exports.getValidation = exports.getValidationMonoid = exports.getValidationSemigroup = exports.getApplyMonoid = exports.getApplySemigroup = exports.either = exports.stringifyJSON = exports.parseJSON = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apSW = exports.apS = exports.bindW = exports.bind = exports.bindTo = exports.Do = exports.exists = exports.elem = exports.toError = exports.FromEither = exports.MonadThrow = exports.ChainRec = exports.Extend = exports.Alt = exports.Bifunctor = exports.Traversable = exports.Foldable = exports.chainFirstW = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getAltValidation = exports.getApplicativeValidation = exports.getWitherable = void 0;
      var Applicative_1 = require_Applicative();
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var ChainRec_1 = require_ChainRec();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Separated_1 = require_Separated();
      exports.isLeft = _.isLeft;
      var isRight = function(ma) {
        return ma._tag === "Right";
      };
      exports.isRight = isRight;
      var left = function(e2) {
        return { _tag: "Left", left: e2 };
      };
      exports.left = left;
      var right2 = function(a) {
        return { _tag: "Right", right: a };
      };
      exports.right = right2;
      var fromOption = function(onNone) {
        return function(ma) {
          return ma._tag === "None" ? exports.left(onNone()) : exports.right(ma.value);
        };
      };
      exports.fromOption = fromOption;
      var fromPredicate = function(predicate, onFalse) {
        return function(a) {
          return predicate(a) ? exports.right(a) : exports.left(onFalse(a));
        };
      };
      exports.fromPredicate = fromPredicate;
      var matchW = function(onLeft, onRight) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : onRight(ma.right);
        };
      };
      exports.matchW = matchW;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW = function(onLeft) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : ma.right;
        };
      };
      exports.getOrElseW = getOrElseW;
      exports.getOrElse = exports.getOrElseW;
      var fromNullable = function(e2) {
        return function(a) {
          return a == null ? exports.left(e2) : exports.right(a);
        };
      };
      exports.fromNullable = fromNullable;
      var tryCatch = function(f, onThrow) {
        try {
          return exports.right(f());
        } catch (e2) {
          return exports.left(onThrow(e2));
        }
      };
      exports.tryCatch = tryCatch;
      var tryCatchK = function(f, onThrow) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return exports.tryCatch(function() {
            return f.apply(void 0, a);
          }, onThrow);
        };
      };
      exports.tryCatchK = tryCatchK;
      var fromNullableK = function(e2) {
        var from = exports.fromNullable(e2);
        return function(f) {
          return function_1.flow(f, from);
        };
      };
      exports.fromNullableK = fromNullableK;
      var chainNullableK = function(e2) {
        var from = exports.fromNullableK(e2);
        return function(f) {
          return exports.chain(from(f));
        };
      };
      exports.chainNullableK = chainNullableK;
      exports.toUnion = /* @__PURE__ */ exports.foldW(function_1.identity, function_1.identity);
      var fromOptionK = function(onNone) {
        var from = exports.fromOption(onNone);
        return function(f) {
          return function_1.flow(f, from);
        };
      };
      exports.fromOptionK = fromOptionK;
      var chainOptionK = function(onNone) {
        var from = exports.fromOptionK(onNone);
        return function(f) {
          return exports.chain(from(f));
        };
      };
      exports.chainOptionK = chainOptionK;
      function swap(ma) {
        return exports.isLeft(ma) ? exports.right(ma.left) : exports.left(ma.right);
      }
      exports.swap = swap;
      var orElseW2 = function(onLeft) {
        return function(ma) {
          return exports.isLeft(ma) ? onLeft(ma.left) : ma;
        };
      };
      exports.orElseW = orElseW2;
      exports.orElse = exports.orElseW;
      var filterOrElseW = function(predicate, onFalse) {
        return exports.chainW(function(a) {
          return predicate(a) ? exports.right(a) : exports.left(onFalse(a));
        });
      };
      exports.filterOrElseW = filterOrElseW;
      exports.filterOrElse = exports.filterOrElseW;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        return function(fa, f) {
          var foldMapM = exports.foldMap(M);
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _bimap = function(fa, f, g) {
        return function_1.pipe(fa, exports.bimap(f, g));
      };
      var _mapLeft = function(fa, f) {
        return function_1.pipe(fa, exports.mapLeft(f));
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _extend = function(wa, f) {
        return function_1.pipe(wa, exports.extend(f));
      };
      var _chainRec = function(a, f) {
        return ChainRec_1.tailRec(f(a), function(e2) {
          return exports.isLeft(e2) ? exports.right(exports.left(e2.left)) : exports.isLeft(e2.right) ? exports.left(f(e2.right.left)) : exports.right(exports.right(e2.right.right));
        });
      };
      var map2 = function(f) {
        return function(fa) {
          return exports.isLeft(fa) ? fa : exports.right(f(fa.right));
        };
      };
      exports.map = map2;
      var bimap = function(f, g) {
        return function(fa) {
          return exports.isLeft(fa) ? exports.left(f(fa.left)) : exports.right(g(fa.right));
        };
      };
      exports.bimap = bimap;
      var mapLeft = function(f) {
        return function(fa) {
          return exports.isLeft(fa) ? exports.left(f(fa.left)) : fa;
        };
      };
      exports.mapLeft = mapLeft;
      var apW = function(fa) {
        return function(fab) {
          return exports.isLeft(fab) ? fab : exports.isLeft(fa) ? fa : exports.right(fab.right(fa.right));
        };
      };
      exports.apW = apW;
      exports.ap = exports.apW;
      exports.of = exports.right;
      var chainW = function(f) {
        return function(ma) {
          return exports.isLeft(ma) ? ma : f(ma.right);
        };
      };
      exports.chainW = chainW;
      exports.chain = exports.chainW;
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var altW = function(that) {
        return function(fa) {
          return exports.isLeft(fa) ? that() : fa;
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var extend = function(f) {
        return function(wa) {
          return exports.isLeft(wa) ? wa : exports.right(f(wa));
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      var reduce = function(b, f) {
        return function(fa) {
          return exports.isLeft(fa) ? b : f(b, fa.right);
        };
      };
      exports.reduce = reduce;
      var foldMap = function(M) {
        return function(f) {
          return function(fa) {
            return exports.isLeft(fa) ? M.empty : f(fa.right);
          };
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function(b, f) {
        return function(fa) {
          return exports.isLeft(fa) ? b : f(fa.right, b);
        };
      };
      exports.reduceRight = reduceRight;
      var traverse = function(F) {
        return function(f) {
          return function(ta) {
            return exports.isLeft(ta) ? F.of(exports.left(ta.left)) : F.map(f(ta.right), exports.right);
          };
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return function(ma) {
          return exports.isLeft(ma) ? F.of(exports.left(ma.left)) : F.map(ma.right, exports.right);
        };
      };
      exports.sequence = sequence;
      exports.throwError = exports.left;
      exports.URI = "Either";
      function getShow(SE, SA) {
        return {
          show: function(ma) {
            return exports.isLeft(ma) ? "left(" + SE.show(ma.left) + ")" : "right(" + SA.show(ma.right) + ")";
          }
        };
      }
      exports.getShow = getShow;
      function getEq(EL, EA) {
        return {
          equals: function(x, y2) {
            return x === y2 || (exports.isLeft(x) ? exports.isLeft(y2) && EL.equals(x.left, y2.left) : exports.isRight(y2) && EA.equals(x.right, y2.right));
          }
        };
      }
      exports.getEq = getEq;
      function getSemigroup(S) {
        return {
          concat: function(x, y2) {
            return exports.isLeft(y2) ? x : exports.isLeft(x) ? y2 : exports.right(S.concat(x.right, y2.right));
          }
        };
      }
      exports.getSemigroup = getSemigroup;
      var getCompactable = function(M) {
        var empty = exports.left(M.empty);
        return {
          URI: exports.URI,
          _E: void 0,
          compact: function(ma) {
            return exports.isLeft(ma) ? ma : ma.right._tag === "None" ? empty : exports.right(ma.right.value);
          },
          separate: function(ma) {
            return exports.isLeft(ma) ? Separated_1.separated(ma, ma) : exports.isLeft(ma.right) ? Separated_1.separated(exports.right(ma.right.left), empty) : Separated_1.separated(empty, exports.right(ma.right.right));
          }
        };
      };
      exports.getCompactable = getCompactable;
      function getFilterable(M) {
        var empty = exports.left(M.empty);
        var _a = exports.getCompactable(M), compact = _a.compact, separate = _a.separate;
        var filter = function(ma, predicate) {
          return exports.isLeft(ma) ? ma : predicate(ma.right) ? ma : empty;
        };
        var partition = function(ma, p) {
          return exports.isLeft(ma) ? Separated_1.separated(ma, ma) : p(ma.right) ? Separated_1.separated(empty, exports.right(ma.right)) : Separated_1.separated(exports.right(ma.right), empty);
        };
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          compact,
          separate,
          filter,
          filterMap: function(ma, f) {
            if (exports.isLeft(ma)) {
              return ma;
            }
            var ob = f(ma.right);
            return ob._tag === "None" ? empty : exports.right(ob.value);
          },
          partition,
          partitionMap: function(ma, f) {
            if (exports.isLeft(ma)) {
              return Separated_1.separated(ma, ma);
            }
            var e2 = f(ma.right);
            return exports.isLeft(e2) ? Separated_1.separated(exports.right(e2.left), empty) : Separated_1.separated(empty, exports.right(e2.right));
          }
        };
      }
      exports.getFilterable = getFilterable;
      function getWitherable(M) {
        var F_ = getFilterable(M);
        var wither = function(F) {
          var traverseF = _traverse(F);
          return function(ma, f) {
            return F.map(traverseF(ma, f), F_.compact);
          };
        };
        var wilt = function(F) {
          var traverseF = _traverse(F);
          return function(ma, f) {
            return F.map(traverseF(ma, f), F_.separate);
          };
        };
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          compact: F_.compact,
          separate: F_.separate,
          filter: F_.filter,
          filterMap: F_.filterMap,
          partition: F_.partition,
          partitionMap: F_.partitionMap,
          traverse: _traverse,
          sequence: exports.sequence,
          reduce: _reduce,
          foldMap: _foldMap,
          reduceRight: _reduceRight,
          wither,
          wilt
        };
      }
      exports.getWitherable = getWitherable;
      function getApplicativeValidation(SE) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          ap: function(fab, fa) {
            return exports.isLeft(fab) ? exports.isLeft(fa) ? exports.left(SE.concat(fab.left, fa.left)) : fab : exports.isLeft(fa) ? fa : exports.right(fab.right(fa.right));
          },
          of: exports.of
        };
      }
      exports.getApplicativeValidation = getApplicativeValidation;
      function getAltValidation(SE) {
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          alt: function(me, that) {
            if (exports.isRight(me)) {
              return me;
            }
            var ea = that();
            return exports.isLeft(ea) ? exports.left(SE.concat(me.left, ea.left)) : ea;
          }
        };
      }
      exports.getAltValidation = getAltValidation;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.chainFirstW = exports.chainFirst;
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.Bifunctor = {
        URI: exports.URI,
        bimap: _bimap,
        mapLeft: _mapLeft
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Extend = {
        URI: exports.URI,
        map: _map2,
        extend: _extend
      };
      exports.ChainRec = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain,
        chainRec: _chainRec
      };
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain,
        throwError: exports.throwError
      };
      exports.FromEither = {
        URI: exports.URI,
        fromEither: function_1.identity
      };
      function toError(e2) {
        return e2 instanceof Error ? e2 : new Error(String(e2));
      }
      exports.toError = toError;
      function elem(E) {
        return function(a, ma) {
          return exports.isLeft(ma) ? false : E.equals(a, ma.right);
        };
      }
      exports.elem = elem;
      function exists(predicate) {
        return function(ma) {
          return exports.isLeft(ma) ? false : predicate(ma.right);
        };
      }
      exports.exists = exists;
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.bindW = exports.bind;
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.apSW = exports.apS;
      var traverseArrayWithIndex = function(f) {
        return function(as) {
          var out = [];
          for (var i2 = 0; i2 < as.length; i2++) {
            var e2 = f(i2, as[i2]);
            if (exports.isLeft(e2)) {
              return e2;
            }
            out.push(e2.right);
          }
          return exports.right(out);
        };
      };
      exports.traverseArrayWithIndex = traverseArrayWithIndex;
      var traverseArray = function(f) {
        return exports.traverseArrayWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.traverseArray = traverseArray;
      exports.sequenceArray = /* @__PURE__ */ exports.traverseArray(function_1.identity);
      function parseJSON(s2, onError) {
        return exports.tryCatch(function() {
          return JSON.parse(s2);
        }, onError);
      }
      exports.parseJSON = parseJSON;
      var stringifyJSON = function(u, onError) {
        return exports.tryCatch(function() {
          var s2 = JSON.stringify(u);
          if (typeof s2 !== "string") {
            throw new Error("Converting unsupported structure to JSON");
          }
          return s2;
        }, onError);
      };
      exports.stringifyJSON = stringifyJSON;
      exports.either = {
        URI: exports.URI,
        map: _map2,
        of: exports.of,
        ap: _ap,
        chain: _chain,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        bimap: _bimap,
        mapLeft: _mapLeft,
        alt: _alt,
        extend: _extend,
        chainRec: _chainRec,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = /* @__PURE__ */ Apply_1.getApplySemigroup(exports.Apply);
      exports.getApplyMonoid = /* @__PURE__ */ Applicative_1.getApplicativeMonoid(exports.Applicative);
      var getValidationSemigroup = function(SE, SA) {
        return Apply_1.getApplySemigroup(getApplicativeValidation(SE))(SA);
      };
      exports.getValidationSemigroup = getValidationSemigroup;
      var getValidationMonoid = function(SE, MA) {
        return Applicative_1.getApplicativeMonoid(getApplicativeValidation(SE))(MA);
      };
      exports.getValidationMonoid = getValidationMonoid;
      function getValidation(SE) {
        var ap = getApplicativeValidation(SE).ap;
        var alt = getAltValidation(SE).alt;
        return {
          URI: exports.URI,
          _E: void 0,
          map: _map2,
          of: exports.of,
          chain: _chain,
          bimap: _bimap,
          mapLeft: _mapLeft,
          reduce: _reduce,
          foldMap: _foldMap,
          reduceRight: _reduceRight,
          extend: _extend,
          traverse: _traverse,
          sequence: exports.sequence,
          chainRec: _chainRec,
          throwError: exports.throwError,
          ap,
          alt
        };
      }
      exports.getValidation = getValidation;
    }
  });

  // ../shared/node_modules/io-ts/lib/index.js
  var require_lib = __commonJS({
    "../shared/node_modules/io-ts/lib/index.js"(exports) {
      "use strict";
      var __extends2 = exports && exports.__extends || /* @__PURE__ */ function() {
        var extendStatics2 = function(d, b) {
          extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
            d2.__proto__ = b2;
          } || function(d2, b2) {
            for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
          };
          return extendStatics2(d, b);
        };
        return function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics2(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
      }();
      var __assign3 = exports && exports.__assign || function() {
        __assign3 = Object.assign || function(t14) {
          for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
            s2 = arguments[i2];
            for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p))
              t14[p] = s2[p];
          }
          return t14;
        };
        return __assign3.apply(this, arguments);
      };
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
          if (ar || !(i2 in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
            ar[i2] = from[i2];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.partial = exports.PartialType = exports.type = exports.InterfaceType = exports.array = exports.ArrayType = exports.recursion = exports.RecursiveType = exports.Int = exports.brand = exports.RefinementType = exports.keyof = exports.KeyofType = exports.literal = exports.LiteralType = exports.void = exports.undefined = exports.null = exports.UnknownRecord = exports.AnyDictionaryType = exports.UnknownArray = exports.AnyArrayType = exports.boolean = exports.BooleanType = exports.bigint = exports.BigIntType = exports.number = exports.NumberType = exports.string = exports.StringType = exports.unknown = exports.UnknownType = exports.voidType = exports.VoidType = exports.UndefinedType = exports.nullType = exports.NullType = exports.getIndex = exports.getTags = exports.emptyTags = exports.mergeAll = exports.getDomainKeys = exports.appendContext = exports.getContextEntry = exports.getFunctionName = exports.identity = exports.Type = exports.success = exports.failure = exports.failures = void 0;
      exports.alias = exports.clean = exports.StrictType = exports.dictionary = exports.object = exports.ObjectType = exports.Dictionary = exports.getDefaultContext = exports.getValidationError = exports.interface = exports.Array = exports.taggedUnion = exports.TaggedUnionType = exports.Integer = exports.refinement = exports.any = exports.AnyType = exports.never = exports.NeverType = exports.Function = exports.FunctionType = exports.exact = exports.ExactType = exports.strict = exports.readonlyArray = exports.ReadonlyArrayType = exports.readonly = exports.ReadonlyType = exports.tuple = exports.TupleType = exports.intersection = exports.IntersectionType = exports.union = exports.UnionType = exports.record = exports.DictionaryType = void 0;
      var Either_1 = require_Either();
      exports.failures = Either_1.left;
      var failure = function(value, context, message) {
        return (0, exports.failures)([{ value, context, message }]);
      };
      exports.failure = failure;
      exports.success = Either_1.right;
      var Type = (
        /** @class */
        function() {
          function Type2(name, is, validate2, encode2) {
            this.name = name;
            this.is = is;
            this.validate = validate2;
            this.encode = encode2;
            this.decode = this.decode.bind(this);
          }
          Type2.prototype.pipe = function(ab, name) {
            var _this = this;
            if (name === void 0) {
              name = "pipe(".concat(this.name, ", ").concat(ab.name, ")");
            }
            return new Type2(name, ab.is, function(i2, c2) {
              var e2 = _this.validate(i2, c2);
              if ((0, Either_1.isLeft)(e2)) {
                return e2;
              }
              return ab.validate(e2.right, c2);
            }, this.encode === exports.identity && ab.encode === exports.identity ? exports.identity : function(b) {
              return _this.encode(ab.encode(b));
            });
          };
          Type2.prototype.asDecoder = function() {
            return this;
          };
          Type2.prototype.asEncoder = function() {
            return this;
          };
          Type2.prototype.decode = function(i2) {
            return this.validate(i2, [{ key: "", type: this, actual: i2 }]);
          };
          return Type2;
        }()
      );
      exports.Type = Type;
      var identity2 = function(a) {
        return a;
      };
      exports.identity = identity2;
      function getFunctionName(f) {
        return f.displayName || f.name || "<function".concat(f.length, ">");
      }
      exports.getFunctionName = getFunctionName;
      function getContextEntry(key, decoder) {
        return { key, type: decoder };
      }
      exports.getContextEntry = getContextEntry;
      function appendContext(c2, key, decoder, actual) {
        var len = c2.length;
        var r = Array(len + 1);
        for (var i2 = 0; i2 < len; i2++) {
          r[i2] = c2[i2];
        }
        r[len] = { key, type: decoder, actual };
        return r;
      }
      exports.appendContext = appendContext;
      function pushAll(xs, ys) {
        var l2 = ys.length;
        for (var i2 = 0; i2 < l2; i2++) {
          xs.push(ys[i2]);
        }
      }
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      function getNameFromProps(props) {
        return Object.keys(props).map(function(k) {
          return "".concat(k, ": ").concat(props[k].name);
        }).join(", ");
      }
      function useIdentity(codecs) {
        for (var i2 = 0; i2 < codecs.length; i2++) {
          if (codecs[i2].encode !== exports.identity) {
            return false;
          }
        }
        return true;
      }
      function getInterfaceTypeName(props) {
        return "{ ".concat(getNameFromProps(props), " }");
      }
      function getPartialTypeName(inner) {
        return "Partial<".concat(inner, ">");
      }
      function enumerableRecord(keys, domain, codomain, name) {
        if (name === void 0) {
          name = "{ [K in ".concat(domain.name, "]: ").concat(codomain.name, " }");
        }
        var len = keys.length;
        var props = {};
        for (var i2 = 0; i2 < len; i2++) {
          props[keys[i2]] = codomain;
        }
        var exactCodec = (0, exports.strict)(props, name);
        return new DictionaryType(name, function(u) {
          return exactCodec.is(u);
        }, exactCodec.validate, exactCodec.encode, domain, codomain);
      }
      function getDomainKeys(domain) {
        var _a;
        if (isLiteralC(domain)) {
          var literal_1 = domain.value;
          if (exports.string.is(literal_1)) {
            return _a = {}, _a[literal_1] = null, _a;
          }
        } else if (isKeyofC(domain)) {
          return domain.keys;
        } else if (isUnionC(domain)) {
          var keys = domain.types.map(function(type12) {
            return getDomainKeys(type12);
          });
          return keys.some(undefinedType.is) ? void 0 : Object.assign.apply(Object, __spreadArray2([{}], keys, false));
        }
        return void 0;
      }
      exports.getDomainKeys = getDomainKeys;
      function stripNonDomainKeys(o, domain) {
        var keys = Object.keys(o);
        var len = keys.length;
        var shouldStrip = false;
        var r = {};
        for (var i2 = 0; i2 < len; i2++) {
          var k = keys[i2];
          if (domain.is(k)) {
            r[k] = o[k];
          } else {
            shouldStrip = true;
          }
        }
        return shouldStrip ? r : o;
      }
      function nonEnumerableRecord(domain, codomain, name) {
        if (name === void 0) {
          name = "{ [K in ".concat(domain.name, "]: ").concat(codomain.name, " }");
        }
        return new DictionaryType(name, function(u) {
          if (exports.UnknownRecord.is(u)) {
            return Object.keys(u).every(function(k) {
              return !domain.is(k) || codomain.is(u[k]);
            });
          }
          return isAnyC(codomain) && Array.isArray(u);
        }, function(u, c2) {
          if (exports.UnknownRecord.is(u)) {
            var a = {};
            var errors = [];
            var keys = Object.keys(u);
            var len = keys.length;
            var changed = false;
            for (var i2 = 0; i2 < len; i2++) {
              var k = keys[i2];
              var ok = u[k];
              var domainResult = domain.validate(k, appendContext(c2, k, domain, k));
              if ((0, Either_1.isLeft)(domainResult)) {
                changed = true;
              } else {
                var vk = domainResult.right;
                changed = changed || vk !== k;
                k = vk;
                var codomainResult = codomain.validate(ok, appendContext(c2, k, codomain, ok));
                if ((0, Either_1.isLeft)(codomainResult)) {
                  pushAll(errors, codomainResult.left);
                } else {
                  var vok = codomainResult.right;
                  changed = changed || vok !== ok;
                  a[k] = vok;
                }
              }
            }
            return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(changed ? a : u);
          }
          if (isAnyC(codomain) && Array.isArray(u)) {
            return (0, exports.success)(u);
          }
          return (0, exports.failure)(u, c2);
        }, domain.encode === exports.identity && codomain.encode === exports.identity ? function(a) {
          return stripNonDomainKeys(a, domain);
        } : function(a) {
          var s2 = {};
          var keys = Object.keys(stripNonDomainKeys(a, domain));
          var len = keys.length;
          for (var i2 = 0; i2 < len; i2++) {
            var k = keys[i2];
            s2[String(domain.encode(k))] = codomain.encode(a[k]);
          }
          return s2;
        }, domain, codomain);
      }
      function getUnionName(codecs) {
        return "(" + codecs.map(function(type12) {
          return type12.name;
        }).join(" | ") + ")";
      }
      function mergeAll(base, us) {
        var equal = true;
        var primitive = true;
        var baseIsNotADictionary = !exports.UnknownRecord.is(base);
        for (var _i = 0, us_1 = us; _i < us_1.length; _i++) {
          var u = us_1[_i];
          if (u !== base) {
            equal = false;
          }
          if (exports.UnknownRecord.is(u)) {
            primitive = false;
          }
        }
        if (equal) {
          return base;
        } else if (primitive) {
          return us[us.length - 1];
        }
        var r = {};
        for (var _a = 0, us_2 = us; _a < us_2.length; _a++) {
          var u = us_2[_a];
          for (var k in u) {
            if (!hasOwnProperty.call(r, k) || baseIsNotADictionary || u[k] !== base[k]) {
              r[k] = u[k];
            }
          }
        }
        return r;
      }
      exports.mergeAll = mergeAll;
      function getProps(codec) {
        switch (codec._tag) {
          case "RefinementType":
          case "ReadonlyType":
            return getProps(codec.type);
          case "InterfaceType":
          case "StrictType":
          case "PartialType":
            return codec.props;
          case "IntersectionType":
            return codec.types.reduce(function(props, type12) {
              return Object.assign(props, getProps(type12));
            }, {});
        }
      }
      function stripKeys(o, props) {
        var keys = Object.getOwnPropertyNames(o);
        var shouldStrip = false;
        var r = {};
        for (var i2 = 0; i2 < keys.length; i2++) {
          var key = keys[i2];
          if (!hasOwnProperty.call(props, key)) {
            shouldStrip = true;
          } else {
            r[key] = o[key];
          }
        }
        return shouldStrip ? r : o;
      }
      function getExactTypeName(codec) {
        if (isTypeC(codec)) {
          return "{| ".concat(getNameFromProps(codec.props), " |}");
        } else if (isPartialC(codec)) {
          return getPartialTypeName("{| ".concat(getNameFromProps(codec.props), " |}"));
        }
        return "Exact<".concat(codec.name, ">");
      }
      function isNonEmpty(as) {
        return as.length > 0;
      }
      exports.emptyTags = {};
      function intersect(a, b) {
        var r = [];
        for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
          var v = a_1[_i];
          if (b.indexOf(v) !== -1) {
            r.push(v);
          }
        }
        return r;
      }
      function mergeTags(a, b) {
        if (a === exports.emptyTags) {
          return b;
        }
        if (b === exports.emptyTags) {
          return a;
        }
        var r = Object.assign({}, a);
        for (var k in b) {
          if (hasOwnProperty.call(a, k)) {
            var intersection_1 = intersect(a[k], b[k]);
            if (isNonEmpty(intersection_1)) {
              r[k] = intersection_1;
            } else {
              r = exports.emptyTags;
              break;
            }
          } else {
            r[k] = b[k];
          }
        }
        return r;
      }
      function intersectTags(a, b) {
        if (a === exports.emptyTags || b === exports.emptyTags) {
          return exports.emptyTags;
        }
        var r = exports.emptyTags;
        for (var k in a) {
          if (hasOwnProperty.call(b, k)) {
            var intersection_2 = intersect(a[k], b[k]);
            if (intersection_2.length === 0) {
              if (r === exports.emptyTags) {
                r = {};
              }
              r[k] = a[k].concat(b[k]);
            }
          }
        }
        return r;
      }
      function isAnyC(codec) {
        return codec._tag === "AnyType";
      }
      function isLiteralC(codec) {
        return codec._tag === "LiteralType";
      }
      function isKeyofC(codec) {
        return codec._tag === "KeyofType";
      }
      function isTypeC(codec) {
        return codec._tag === "InterfaceType";
      }
      function isPartialC(codec) {
        return codec._tag === "PartialType";
      }
      function isStrictC(codec) {
        return codec._tag === "StrictType";
      }
      function isExactC(codec) {
        return codec._tag === "ExactType";
      }
      function isRefinementC(codec) {
        return codec._tag === "RefinementType";
      }
      function isIntersectionC(codec) {
        return codec._tag === "IntersectionType";
      }
      function isUnionC(codec) {
        return codec._tag === "UnionType";
      }
      function isRecursiveC(codec) {
        return codec._tag === "RecursiveType";
      }
      var lazyCodecs = [];
      function getTags(codec) {
        if (lazyCodecs.indexOf(codec) !== -1) {
          return exports.emptyTags;
        }
        if (isTypeC(codec) || isStrictC(codec)) {
          var index = exports.emptyTags;
          for (var k in codec.props) {
            var prop = codec.props[k];
            if (isLiteralC(prop)) {
              if (index === exports.emptyTags) {
                index = {};
              }
              index[k] = [prop.value];
            }
          }
          return index;
        } else if (isExactC(codec) || isRefinementC(codec)) {
          return getTags(codec.type);
        } else if (isIntersectionC(codec)) {
          return codec.types.reduce(function(tags2, codec2) {
            return mergeTags(tags2, getTags(codec2));
          }, exports.emptyTags);
        } else if (isUnionC(codec)) {
          return codec.types.slice(1).reduce(function(tags2, codec2) {
            return intersectTags(tags2, getTags(codec2));
          }, getTags(codec.types[0]));
        } else if (isRecursiveC(codec)) {
          lazyCodecs.push(codec);
          var tags = getTags(codec.type);
          lazyCodecs.pop();
          return tags;
        }
        return exports.emptyTags;
      }
      exports.getTags = getTags;
      function getIndex(codecs) {
        var tags = getTags(codecs[0]);
        var keys = Object.keys(tags);
        var len = codecs.length;
        var _loop_1 = function(k2) {
          var all = tags[k2].slice();
          var index = [tags[k2]];
          for (var i2 = 1; i2 < len; i2++) {
            var codec = codecs[i2];
            var ctags = getTags(codec);
            var values = ctags[k2];
            if (values === void 0) {
              return "continue-keys";
            } else {
              if (values.some(function(v) {
                return all.indexOf(v) !== -1;
              })) {
                return "continue-keys";
              } else {
                all.push.apply(all, values);
                index.push(values);
              }
            }
          }
          return { value: [k2, index] };
        };
        keys: for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
          var k = keys_1[_i];
          var state_1 = _loop_1(k);
          if (typeof state_1 === "object")
            return state_1.value;
          switch (state_1) {
            case "continue-keys":
              continue keys;
          }
        }
        return void 0;
      }
      exports.getIndex = getIndex;
      var NullType = (
        /** @class */
        function(_super) {
          __extends2(NullType2, _super);
          function NullType2() {
            var _this = _super.call(this, "null", function(u) {
              return u === null;
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "NullType";
            return _this;
          }
          return NullType2;
        }(Type)
      );
      exports.NullType = NullType;
      exports.nullType = new NullType();
      exports.null = exports.nullType;
      var UndefinedType = (
        /** @class */
        function(_super) {
          __extends2(UndefinedType2, _super);
          function UndefinedType2() {
            var _this = _super.call(this, "undefined", function(u) {
              return u === void 0;
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "UndefinedType";
            return _this;
          }
          return UndefinedType2;
        }(Type)
      );
      exports.UndefinedType = UndefinedType;
      var undefinedType = new UndefinedType();
      exports.undefined = undefinedType;
      var VoidType = (
        /** @class */
        function(_super) {
          __extends2(VoidType2, _super);
          function VoidType2() {
            var _this = _super.call(this, "void", undefinedType.is, undefinedType.validate, exports.identity) || this;
            _this._tag = "VoidType";
            return _this;
          }
          return VoidType2;
        }(Type)
      );
      exports.VoidType = VoidType;
      exports.voidType = new VoidType();
      exports.void = exports.voidType;
      var UnknownType = (
        /** @class */
        function(_super) {
          __extends2(UnknownType2, _super);
          function UnknownType2() {
            var _this = _super.call(this, "unknown", function(_) {
              return true;
            }, exports.success, exports.identity) || this;
            _this._tag = "UnknownType";
            return _this;
          }
          return UnknownType2;
        }(Type)
      );
      exports.UnknownType = UnknownType;
      exports.unknown = new UnknownType();
      var StringType = (
        /** @class */
        function(_super) {
          __extends2(StringType2, _super);
          function StringType2() {
            var _this = _super.call(this, "string", function(u) {
              return typeof u === "string";
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "StringType";
            return _this;
          }
          return StringType2;
        }(Type)
      );
      exports.StringType = StringType;
      exports.string = new StringType();
      var NumberType = (
        /** @class */
        function(_super) {
          __extends2(NumberType2, _super);
          function NumberType2() {
            var _this = _super.call(this, "number", function(u) {
              return typeof u === "number";
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "NumberType";
            return _this;
          }
          return NumberType2;
        }(Type)
      );
      exports.NumberType = NumberType;
      exports.number = new NumberType();
      var BigIntType = (
        /** @class */
        function(_super) {
          __extends2(BigIntType2, _super);
          function BigIntType2() {
            var _this = _super.call(
              this,
              "bigint",
              // tslint:disable-next-line: valid-typeof
              function(u) {
                return typeof u === "bigint";
              },
              function(u, c2) {
                return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
              },
              exports.identity
            ) || this;
            _this._tag = "BigIntType";
            return _this;
          }
          return BigIntType2;
        }(Type)
      );
      exports.BigIntType = BigIntType;
      exports.bigint = new BigIntType();
      var BooleanType = (
        /** @class */
        function(_super) {
          __extends2(BooleanType2, _super);
          function BooleanType2() {
            var _this = _super.call(this, "boolean", function(u) {
              return typeof u === "boolean";
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "BooleanType";
            return _this;
          }
          return BooleanType2;
        }(Type)
      );
      exports.BooleanType = BooleanType;
      exports.boolean = new BooleanType();
      var AnyArrayType = (
        /** @class */
        function(_super) {
          __extends2(AnyArrayType2, _super);
          function AnyArrayType2() {
            var _this = _super.call(this, "UnknownArray", Array.isArray, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "AnyArrayType";
            return _this;
          }
          return AnyArrayType2;
        }(Type)
      );
      exports.AnyArrayType = AnyArrayType;
      exports.UnknownArray = new AnyArrayType();
      exports.Array = exports.UnknownArray;
      var AnyDictionaryType = (
        /** @class */
        function(_super) {
          __extends2(AnyDictionaryType2, _super);
          function AnyDictionaryType2() {
            var _this = _super.call(this, "UnknownRecord", function(u) {
              return u !== null && typeof u === "object" && !Array.isArray(u);
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "AnyDictionaryType";
            return _this;
          }
          return AnyDictionaryType2;
        }(Type)
      );
      exports.AnyDictionaryType = AnyDictionaryType;
      exports.UnknownRecord = new AnyDictionaryType();
      var LiteralType = (
        /** @class */
        function(_super) {
          __extends2(LiteralType2, _super);
          function LiteralType2(name, is, validate2, encode2, value) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.value = value;
            _this._tag = "LiteralType";
            return _this;
          }
          return LiteralType2;
        }(Type)
      );
      exports.LiteralType = LiteralType;
      function literal8(value, name) {
        if (name === void 0) {
          name = JSON.stringify(value);
        }
        var is = function(u) {
          return u === value;
        };
        return new LiteralType(name, is, function(u, c2) {
          return is(u) ? (0, exports.success)(value) : (0, exports.failure)(u, c2);
        }, exports.identity, value);
      }
      exports.literal = literal8;
      var KeyofType = (
        /** @class */
        function(_super) {
          __extends2(KeyofType2, _super);
          function KeyofType2(name, is, validate2, encode2, keys) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.keys = keys;
            _this._tag = "KeyofType";
            return _this;
          }
          return KeyofType2;
        }(Type)
      );
      exports.KeyofType = KeyofType;
      function keyof2(keys, name) {
        if (name === void 0) {
          name = Object.keys(keys).map(function(k) {
            return JSON.stringify(k);
          }).join(" | ");
        }
        var is = function(u) {
          return exports.string.is(u) && hasOwnProperty.call(keys, u);
        };
        return new KeyofType(name, is, function(u, c2) {
          return is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
        }, exports.identity, keys);
      }
      exports.keyof = keyof2;
      var RefinementType = (
        /** @class */
        function(_super) {
          __extends2(RefinementType2, _super);
          function RefinementType2(name, is, validate2, encode2, type12, predicate) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.type = type12;
            _this.predicate = predicate;
            _this._tag = "RefinementType";
            return _this;
          }
          return RefinementType2;
        }(Type)
      );
      exports.RefinementType = RefinementType;
      function brand(codec, predicate, name) {
        return refinement(codec, predicate, name);
      }
      exports.brand = brand;
      exports.Int = brand(exports.number, function(n) {
        return Number.isInteger(n);
      }, "Int");
      var RecursiveType = (
        /** @class */
        function(_super) {
          __extends2(RecursiveType2, _super);
          function RecursiveType2(name, is, validate2, encode2, runDefinition) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.runDefinition = runDefinition;
            _this._tag = "RecursiveType";
            return _this;
          }
          return RecursiveType2;
        }(Type)
      );
      exports.RecursiveType = RecursiveType;
      Object.defineProperty(RecursiveType.prototype, "type", {
        get: function() {
          return this.runDefinition();
        },
        enumerable: true,
        configurable: true
      });
      function recursion(name, definition) {
        var cache2;
        var runDefinition = function() {
          if (!cache2) {
            cache2 = definition(Self);
            cache2.name = name;
          }
          return cache2;
        };
        var Self = new RecursiveType(name, function(u) {
          return runDefinition().is(u);
        }, function(u, c2) {
          return runDefinition().validate(u, c2);
        }, function(a) {
          return runDefinition().encode(a);
        }, runDefinition);
        return Self;
      }
      exports.recursion = recursion;
      var ArrayType = (
        /** @class */
        function(_super) {
          __extends2(ArrayType2, _super);
          function ArrayType2(name, is, validate2, encode2, type12) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.type = type12;
            _this._tag = "ArrayType";
            return _this;
          }
          return ArrayType2;
        }(Type)
      );
      exports.ArrayType = ArrayType;
      function array8(item, name) {
        if (name === void 0) {
          name = "Array<".concat(item.name, ">");
        }
        return new ArrayType(name, function(u) {
          return exports.UnknownArray.is(u) && u.every(item.is);
        }, function(u, c2) {
          var e2 = exports.UnknownArray.validate(u, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var us = e2.right;
          var len = us.length;
          var as = us;
          var errors = [];
          for (var i2 = 0; i2 < len; i2++) {
            var ui = us[i2];
            var result = item.validate(ui, appendContext(c2, String(i2), item, ui));
            if ((0, Either_1.isLeft)(result)) {
              pushAll(errors, result.left);
            } else {
              var ai = result.right;
              if (ai !== ui) {
                if (as === us) {
                  as = us.slice();
                }
                as[i2] = ai;
              }
            }
          }
          return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(as);
        }, item.encode === exports.identity ? exports.identity : function(a) {
          return a.map(item.encode);
        }, item);
      }
      exports.array = array8;
      var InterfaceType = (
        /** @class */
        function(_super) {
          __extends2(InterfaceType2, _super);
          function InterfaceType2(name, is, validate2, encode2, props) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.props = props;
            _this._tag = "InterfaceType";
            return _this;
          }
          return InterfaceType2;
        }(Type)
      );
      exports.InterfaceType = InterfaceType;
      function type11(props, name) {
        if (name === void 0) {
          name = getInterfaceTypeName(props);
        }
        var keys = Object.keys(props);
        var types = keys.map(function(key) {
          return props[key];
        });
        var len = keys.length;
        return new InterfaceType(name, function(u) {
          if (exports.UnknownRecord.is(u)) {
            for (var i2 = 0; i2 < len; i2++) {
              var k = keys[i2];
              var uk = u[k];
              if (uk === void 0 && !hasOwnProperty.call(u, k) || !types[i2].is(uk)) {
                return false;
              }
            }
            return true;
          }
          return false;
        }, function(u, c2) {
          var e2 = exports.UnknownRecord.validate(u, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var o = e2.right;
          var a = o;
          var errors = [];
          for (var i2 = 0; i2 < len; i2++) {
            var k = keys[i2];
            var ak = a[k];
            var type_1 = types[i2];
            var result = type_1.validate(ak, appendContext(c2, k, type_1, ak));
            if ((0, Either_1.isLeft)(result)) {
              pushAll(errors, result.left);
            } else {
              var vak = result.right;
              if (vak !== ak || vak === void 0 && !hasOwnProperty.call(a, k)) {
                if (a === o) {
                  a = __assign3({}, o);
                }
                a[k] = vak;
              }
            }
          }
          return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(a);
        }, useIdentity(types) ? exports.identity : function(a) {
          var s2 = __assign3({}, a);
          for (var i2 = 0; i2 < len; i2++) {
            var k = keys[i2];
            var encode2 = types[i2].encode;
            if (encode2 !== exports.identity) {
              s2[k] = encode2(a[k]);
            }
          }
          return s2;
        }, props);
      }
      exports.type = type11;
      exports.interface = type11;
      var PartialType = (
        /** @class */
        function(_super) {
          __extends2(PartialType2, _super);
          function PartialType2(name, is, validate2, encode2, props) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.props = props;
            _this._tag = "PartialType";
            return _this;
          }
          return PartialType2;
        }(Type)
      );
      exports.PartialType = PartialType;
      function partial7(props, name) {
        if (name === void 0) {
          name = getPartialTypeName(getInterfaceTypeName(props));
        }
        var keys = Object.keys(props);
        var types = keys.map(function(key) {
          return props[key];
        });
        var len = keys.length;
        return new PartialType(name, function(u) {
          if (exports.UnknownRecord.is(u)) {
            for (var i2 = 0; i2 < len; i2++) {
              var k = keys[i2];
              var uk = u[k];
              if (uk !== void 0 && !props[k].is(uk)) {
                return false;
              }
            }
            return true;
          }
          return false;
        }, function(u, c2) {
          var e2 = exports.UnknownRecord.validate(u, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var o = e2.right;
          var a = o;
          var errors = [];
          for (var i2 = 0; i2 < len; i2++) {
            var k = keys[i2];
            var ak = a[k];
            var type_2 = props[k];
            var result = type_2.validate(ak, appendContext(c2, k, type_2, ak));
            if ((0, Either_1.isLeft)(result)) {
              if (ak !== void 0) {
                pushAll(errors, result.left);
              }
            } else {
              var vak = result.right;
              if (vak !== ak) {
                if (a === o) {
                  a = __assign3({}, o);
                }
                a[k] = vak;
              }
            }
          }
          return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(a);
        }, useIdentity(types) ? exports.identity : function(a) {
          var s2 = __assign3({}, a);
          for (var i2 = 0; i2 < len; i2++) {
            var k = keys[i2];
            var ak = a[k];
            if (ak !== void 0) {
              s2[k] = types[i2].encode(ak);
            }
          }
          return s2;
        }, props);
      }
      exports.partial = partial7;
      var DictionaryType = (
        /** @class */
        function(_super) {
          __extends2(DictionaryType2, _super);
          function DictionaryType2(name, is, validate2, encode2, domain, codomain) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.domain = domain;
            _this.codomain = codomain;
            _this._tag = "DictionaryType";
            return _this;
          }
          return DictionaryType2;
        }(Type)
      );
      exports.DictionaryType = DictionaryType;
      function record5(domain, codomain, name) {
        var keys = getDomainKeys(domain);
        return keys ? enumerableRecord(Object.keys(keys), domain, codomain, name) : nonEnumerableRecord(domain, codomain, name);
      }
      exports.record = record5;
      var UnionType = (
        /** @class */
        function(_super) {
          __extends2(UnionType2, _super);
          function UnionType2(name, is, validate2, encode2, types) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.types = types;
            _this._tag = "UnionType";
            return _this;
          }
          return UnionType2;
        }(Type)
      );
      exports.UnionType = UnionType;
      function union8(codecs, name) {
        if (name === void 0) {
          name = getUnionName(codecs);
        }
        var index = getIndex(codecs);
        if (index !== void 0 && codecs.length > 0) {
          var tag_1 = index[0], groups_1 = index[1];
          var len_1 = groups_1.length;
          var find_1 = function(value) {
            for (var i2 = 0; i2 < len_1; i2++) {
              if (groups_1[i2].indexOf(value) !== -1) {
                return i2;
              }
            }
            return void 0;
          };
          return new TaggedUnionType(name, function(u) {
            if (exports.UnknownRecord.is(u)) {
              var i2 = find_1(u[tag_1]);
              return i2 !== void 0 ? codecs[i2].is(u) : false;
            }
            return false;
          }, function(u, c2) {
            var e2 = exports.UnknownRecord.validate(u, c2);
            if ((0, Either_1.isLeft)(e2)) {
              return e2;
            }
            var r = e2.right;
            var i2 = find_1(r[tag_1]);
            if (i2 === void 0) {
              return (0, exports.failure)(u, c2);
            }
            var codec = codecs[i2];
            return codec.validate(r, appendContext(c2, String(i2), codec, r));
          }, useIdentity(codecs) ? exports.identity : function(a) {
            var i2 = find_1(a[tag_1]);
            if (i2 === void 0) {
              throw new Error("no codec found to encode value in union codec ".concat(name));
            } else {
              return codecs[i2].encode(a);
            }
          }, codecs, tag_1);
        } else {
          return new UnionType(name, function(u) {
            return codecs.some(function(type12) {
              return type12.is(u);
            });
          }, function(u, c2) {
            var errors = [];
            for (var i2 = 0; i2 < codecs.length; i2++) {
              var codec = codecs[i2];
              var result = codec.validate(u, appendContext(c2, String(i2), codec, u));
              if ((0, Either_1.isLeft)(result)) {
                pushAll(errors, result.left);
              } else {
                return (0, exports.success)(result.right);
              }
            }
            return (0, exports.failures)(errors);
          }, useIdentity(codecs) ? exports.identity : function(a) {
            for (var _i = 0, codecs_1 = codecs; _i < codecs_1.length; _i++) {
              var codec = codecs_1[_i];
              if (codec.is(a)) {
                return codec.encode(a);
              }
            }
            throw new Error("no codec found to encode value in union type ".concat(name));
          }, codecs);
        }
      }
      exports.union = union8;
      var IntersectionType = (
        /** @class */
        function(_super) {
          __extends2(IntersectionType2, _super);
          function IntersectionType2(name, is, validate2, encode2, types) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.types = types;
            _this._tag = "IntersectionType";
            return _this;
          }
          return IntersectionType2;
        }(Type)
      );
      exports.IntersectionType = IntersectionType;
      function intersection7(codecs, name) {
        if (name === void 0) {
          name = "(".concat(codecs.map(function(type12) {
            return type12.name;
          }).join(" & "), ")");
        }
        var len = codecs.length;
        return new IntersectionType(name, function(u) {
          return codecs.every(function(type12) {
            return type12.is(u);
          });
        }, codecs.length === 0 ? exports.success : function(u, c2) {
          var us = [];
          var errors = [];
          for (var i2 = 0; i2 < len; i2++) {
            var codec = codecs[i2];
            var result = codec.validate(u, appendContext(c2, String(i2), codec, u));
            if ((0, Either_1.isLeft)(result)) {
              pushAll(errors, result.left);
            } else {
              us.push(result.right);
            }
          }
          return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(mergeAll(u, us));
        }, codecs.length === 0 ? exports.identity : function(a) {
          return mergeAll(a, codecs.map(function(codec) {
            return codec.encode(a);
          }));
        }, codecs);
      }
      exports.intersection = intersection7;
      var TupleType = (
        /** @class */
        function(_super) {
          __extends2(TupleType2, _super);
          function TupleType2(name, is, validate2, encode2, types) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.types = types;
            _this._tag = "TupleType";
            return _this;
          }
          return TupleType2;
        }(Type)
      );
      exports.TupleType = TupleType;
      function tuple(codecs, name) {
        if (name === void 0) {
          name = "[".concat(codecs.map(function(type12) {
            return type12.name;
          }).join(", "), "]");
        }
        var len = codecs.length;
        return new TupleType(name, function(u) {
          return exports.UnknownArray.is(u) && u.length === len && codecs.every(function(type12, i2) {
            return type12.is(u[i2]);
          });
        }, function(u, c2) {
          var e2 = exports.UnknownArray.validate(u, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var us = e2.right;
          var as = us.length > len ? us.slice(0, len) : us;
          var errors = [];
          for (var i2 = 0; i2 < len; i2++) {
            var a = us[i2];
            var type_3 = codecs[i2];
            var result = type_3.validate(a, appendContext(c2, String(i2), type_3, a));
            if ((0, Either_1.isLeft)(result)) {
              pushAll(errors, result.left);
            } else {
              var va = result.right;
              if (va !== a) {
                if (as === us) {
                  as = us.slice();
                }
                as[i2] = va;
              }
            }
          }
          return errors.length > 0 ? (0, exports.failures)(errors) : (0, exports.success)(as);
        }, useIdentity(codecs) ? exports.identity : function(a) {
          return codecs.map(function(type12, i2) {
            return type12.encode(a[i2]);
          });
        }, codecs);
      }
      exports.tuple = tuple;
      var ReadonlyType = (
        /** @class */
        function(_super) {
          __extends2(ReadonlyType2, _super);
          function ReadonlyType2(name, is, validate2, encode2, type12) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.type = type12;
            _this._tag = "ReadonlyType";
            return _this;
          }
          return ReadonlyType2;
        }(Type)
      );
      exports.ReadonlyType = ReadonlyType;
      function readonly(codec, name) {
        if (name === void 0) {
          name = "Readonly<".concat(codec.name, ">");
        }
        return new ReadonlyType(name, codec.is, codec.validate, codec.encode, codec);
      }
      exports.readonly = readonly;
      var ReadonlyArrayType = (
        /** @class */
        function(_super) {
          __extends2(ReadonlyArrayType2, _super);
          function ReadonlyArrayType2(name, is, validate2, encode2, type12) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.type = type12;
            _this._tag = "ReadonlyArrayType";
            return _this;
          }
          return ReadonlyArrayType2;
        }(Type)
      );
      exports.ReadonlyArrayType = ReadonlyArrayType;
      function readonlyArray(item, name) {
        if (name === void 0) {
          name = "ReadonlyArray<".concat(item.name, ">");
        }
        var codec = array8(item);
        return new ReadonlyArrayType(name, codec.is, codec.validate, codec.encode, item);
      }
      exports.readonlyArray = readonlyArray;
      var strict = function(props, name) {
        return exact(type11(props), name);
      };
      exports.strict = strict;
      var ExactType = (
        /** @class */
        function(_super) {
          __extends2(ExactType2, _super);
          function ExactType2(name, is, validate2, encode2, type12) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.type = type12;
            _this._tag = "ExactType";
            return _this;
          }
          return ExactType2;
        }(Type)
      );
      exports.ExactType = ExactType;
      function exact(codec, name) {
        if (name === void 0) {
          name = getExactTypeName(codec);
        }
        var props = getProps(codec);
        return new ExactType(name, codec.is, function(u, c2) {
          var e2 = exports.UnknownRecord.validate(u, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var ce = codec.validate(u, c2);
          if ((0, Either_1.isLeft)(ce)) {
            return ce;
          }
          return (0, Either_1.right)(stripKeys(ce.right, props));
        }, function(a) {
          return codec.encode(stripKeys(a, props));
        }, codec);
      }
      exports.exact = exact;
      var FunctionType = (
        /** @class */
        function(_super) {
          __extends2(FunctionType2, _super);
          function FunctionType2() {
            var _this = _super.call(
              this,
              "Function",
              // tslint:disable-next-line:strict-type-predicates
              function(u) {
                return typeof u === "function";
              },
              function(u, c2) {
                return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
              },
              exports.identity
            ) || this;
            _this._tag = "FunctionType";
            return _this;
          }
          return FunctionType2;
        }(Type)
      );
      exports.FunctionType = FunctionType;
      exports.Function = new FunctionType();
      var NeverType = (
        /** @class */
        function(_super) {
          __extends2(NeverType2, _super);
          function NeverType2() {
            var _this = _super.call(
              this,
              "never",
              function(_) {
                return false;
              },
              function(u, c2) {
                return (0, exports.failure)(u, c2);
              },
              /* istanbul ignore next */
              function() {
                throw new Error("cannot encode never");
              }
            ) || this;
            _this._tag = "NeverType";
            return _this;
          }
          return NeverType2;
        }(Type)
      );
      exports.NeverType = NeverType;
      exports.never = new NeverType();
      var AnyType = (
        /** @class */
        function(_super) {
          __extends2(AnyType2, _super);
          function AnyType2() {
            var _this = _super.call(this, "any", function(_) {
              return true;
            }, exports.success, exports.identity) || this;
            _this._tag = "AnyType";
            return _this;
          }
          return AnyType2;
        }(Type)
      );
      exports.AnyType = AnyType;
      exports.any = new AnyType();
      function refinement(codec, predicate, name) {
        if (name === void 0) {
          name = "(".concat(codec.name, " | ").concat(getFunctionName(predicate), ")");
        }
        return new RefinementType(name, function(u) {
          return codec.is(u) && predicate(u);
        }, function(i2, c2) {
          var e2 = codec.validate(i2, c2);
          if ((0, Either_1.isLeft)(e2)) {
            return e2;
          }
          var a = e2.right;
          return predicate(a) ? (0, exports.success)(a) : (0, exports.failure)(a, c2);
        }, codec.encode, codec, predicate);
      }
      exports.refinement = refinement;
      exports.Integer = refinement(exports.number, Number.isInteger, "Integer");
      var TaggedUnionType = (
        /** @class */
        function(_super) {
          __extends2(TaggedUnionType2, _super);
          function TaggedUnionType2(name, is, validate2, encode2, codecs, tag) {
            var _this = _super.call(this, name, is, validate2, encode2, codecs) || this;
            _this.tag = tag;
            return _this;
          }
          return TaggedUnionType2;
        }(UnionType)
      );
      exports.TaggedUnionType = TaggedUnionType;
      var taggedUnion = function(tag, codecs, name) {
        if (name === void 0) {
          name = getUnionName(codecs);
        }
        var U = union8(codecs, name);
        if (U instanceof TaggedUnionType) {
          return U;
        } else {
          console.warn("[io-ts] Cannot build a tagged union for ".concat(name, ", returning a de-optimized union"));
          return new TaggedUnionType(name, U.is, U.validate, U.encode, codecs, tag);
        }
      };
      exports.taggedUnion = taggedUnion;
      var getValidationError = function(value, context) {
        return {
          value,
          context
        };
      };
      exports.getValidationError = getValidationError;
      var getDefaultContext2 = function(decoder) {
        return [
          { key: "", type: decoder }
        ];
      };
      exports.getDefaultContext = getDefaultContext2;
      exports.Dictionary = exports.UnknownRecord;
      var ObjectType = (
        /** @class */
        function(_super) {
          __extends2(ObjectType2, _super);
          function ObjectType2() {
            var _this = _super.call(this, "object", function(u) {
              return u !== null && typeof u === "object";
            }, function(u, c2) {
              return _this.is(u) ? (0, exports.success)(u) : (0, exports.failure)(u, c2);
            }, exports.identity) || this;
            _this._tag = "ObjectType";
            return _this;
          }
          return ObjectType2;
        }(Type)
      );
      exports.ObjectType = ObjectType;
      exports.object = new ObjectType();
      exports.dictionary = record5;
      var StrictType = (
        /** @class */
        function(_super) {
          __extends2(StrictType2, _super);
          function StrictType2(name, is, validate2, encode2, props) {
            var _this = _super.call(this, name, is, validate2, encode2) || this;
            _this.props = props;
            _this._tag = "StrictType";
            return _this;
          }
          return StrictType2;
        }(Type)
      );
      exports.StrictType = StrictType;
      function clean(codec) {
        return codec;
      }
      exports.clean = clean;
      function alias(codec) {
        return function() {
          return codec;
        };
      }
      exports.alias = alias;
    }
  });

  // ../shared/node_modules/fp-ts/lib/Option.js
  var require_Option = __commonJS({
    "../shared/node_modules/fp-ts/lib/Option.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getFirstMonoid = exports.getOrd = exports.getEq = exports.getShow = exports.URI = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.duplicate = exports.extend = exports.throwError = exports.zero = exports.alt = exports.altW = exports.flatten = exports.chain = exports.of = exports.ap = exports.map = exports.toUndefined = exports.toNullable = exports.chainNullableK = exports.fromNullableK = exports.tryCatchK = exports.tryCatch = exports.fromNullable = exports.getOrElse = exports.getOrElseW = exports.fold = exports.match = exports.foldW = exports.matchW = exports.fromEither = exports.getRight = exports.getLeft = exports.fromPredicate = exports.some = exports.none = exports.isNone = exports.isSome = void 0;
      exports.getApplyMonoid = exports.getApplySemigroup = exports.option = exports.mapNullable = exports.sequenceArray = exports.traverseArray = exports.traverseArrayWithIndex = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.getRefinement = exports.exists = exports.elem = exports.MonadThrow = exports.Witherable = exports.Traversable = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Foldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.Pointed = exports.flap = exports.Functor = exports.getMonoid = exports.getLastMonoid = void 0;
      var Applicative_1 = require_Applicative();
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var Separated_1 = require_Separated();
      exports.isSome = _.isSome;
      var isNone = function(fa) {
        return fa._tag === "None";
      };
      exports.isNone = isNone;
      exports.none = { _tag: "None" };
      var some = function(a) {
        return { _tag: "Some", value: a };
      };
      exports.some = some;
      function fromPredicate(predicate) {
        return function(a) {
          return predicate(a) ? exports.some(a) : exports.none;
        };
      }
      exports.fromPredicate = fromPredicate;
      function getLeft(ma) {
        return ma._tag === "Right" ? exports.none : exports.some(ma.left);
      }
      exports.getLeft = getLeft;
      function getRight(ma) {
        return ma._tag === "Left" ? exports.none : exports.some(ma.right);
      }
      exports.getRight = getRight;
      exports.fromEither = getRight;
      var matchW = function(onNone, onSome) {
        return function(ma) {
          return exports.isNone(ma) ? onNone() : onSome(ma.value);
        };
      };
      exports.matchW = matchW;
      exports.foldW = exports.matchW;
      exports.match = exports.matchW;
      exports.fold = exports.match;
      var getOrElseW = function(onNone) {
        return function(ma) {
          return exports.isNone(ma) ? onNone() : ma.value;
        };
      };
      exports.getOrElseW = getOrElseW;
      exports.getOrElse = exports.getOrElseW;
      var fromNullable = function(a) {
        return a == null ? exports.none : exports.some(a);
      };
      exports.fromNullable = fromNullable;
      var tryCatch = function(f) {
        try {
          return exports.some(f());
        } catch (e2) {
          return exports.none;
        }
      };
      exports.tryCatch = tryCatch;
      var tryCatchK = function(f) {
        return function() {
          var a = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            a[_i] = arguments[_i];
          }
          return exports.tryCatch(function() {
            return f.apply(void 0, a);
          });
        };
      };
      exports.tryCatchK = tryCatchK;
      var fromNullableK = function(f) {
        return function_1.flow(f, exports.fromNullable);
      };
      exports.fromNullableK = fromNullableK;
      var chainNullableK = function(f) {
        return function(ma) {
          return exports.isNone(ma) ? exports.none : exports.fromNullable(f(ma.value));
        };
      };
      exports.chainNullableK = chainNullableK;
      exports.toNullable = /* @__PURE__ */ exports.match(function_1.constNull, function_1.identity);
      exports.toUndefined = /* @__PURE__ */ exports.match(function_1.constUndefined, function_1.identity);
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _filter = function(fa, predicate) {
        return function_1.pipe(fa, exports.filter(predicate));
      };
      var _filterMap = function(fa, f) {
        return function_1.pipe(fa, exports.filterMap(f));
      };
      var _extend = function(wa, f) {
        return function_1.pipe(wa, exports.extend(f));
      };
      var _partition = function(fa, predicate) {
        return function_1.pipe(fa, exports.partition(predicate));
      };
      var _partitionMap = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMap(f));
      };
      var _wither = function(F) {
        var witherF = exports.wither(F);
        return function(fa, f) {
          return function_1.pipe(fa, witherF(f));
        };
      };
      var _wilt = function(F) {
        var wiltF = exports.wilt(F);
        return function(fa, f) {
          return function_1.pipe(fa, wiltF(f));
        };
      };
      var map2 = function(f) {
        return function(fa) {
          return exports.isNone(fa) ? exports.none : exports.some(f(fa.value));
        };
      };
      exports.map = map2;
      var ap = function(fa) {
        return function(fab) {
          return exports.isNone(fab) ? exports.none : exports.isNone(fa) ? exports.none : exports.some(fab.value(fa.value));
        };
      };
      exports.ap = ap;
      exports.of = exports.some;
      var chain = function(f) {
        return function(ma) {
          return exports.isNone(ma) ? exports.none : f(ma.value);
        };
      };
      exports.chain = chain;
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var altW = function(that) {
        return function(fa) {
          return exports.isNone(fa) ? that() : fa;
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var zero = function() {
        return exports.none;
      };
      exports.zero = zero;
      var throwError = function() {
        return exports.none;
      };
      exports.throwError = throwError;
      var extend = function(f) {
        return function(wa) {
          return exports.isNone(wa) ? exports.none : exports.some(f(wa));
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      var reduce = function(b, f) {
        return function(fa) {
          return exports.isNone(fa) ? b : f(b, fa.value);
        };
      };
      exports.reduce = reduce;
      var foldMap = function(M) {
        return function(f) {
          return function(fa) {
            return exports.isNone(fa) ? M.empty : f(fa.value);
          };
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function(b, f) {
        return function(fa) {
          return exports.isNone(fa) ? b : f(fa.value, b);
        };
      };
      exports.reduceRight = reduceRight;
      exports.compact = exports.flatten;
      var defaultSeparated = /* @__PURE__ */ Separated_1.separated(exports.none, exports.none);
      var separate = function(ma) {
        return exports.isNone(ma) ? defaultSeparated : Separated_1.separated(getLeft(ma.value), getRight(ma.value));
      };
      exports.separate = separate;
      var filter = function(predicate) {
        return function(fa) {
          return exports.isNone(fa) ? exports.none : predicate(fa.value) ? fa : exports.none;
        };
      };
      exports.filter = filter;
      var filterMap = function(f) {
        return function(fa) {
          return exports.isNone(fa) ? exports.none : f(fa.value);
        };
      };
      exports.filterMap = filterMap;
      var partition = function(predicate) {
        return function(fa) {
          return Separated_1.separated(_filter(fa, function(a) {
            return !predicate(a);
          }), _filter(fa, predicate));
        };
      };
      exports.partition = partition;
      var partitionMap = function(f) {
        return function_1.flow(exports.map(f), exports.separate);
      };
      exports.partitionMap = partitionMap;
      var traverse = function(F) {
        return function(f) {
          return function(ta) {
            return exports.isNone(ta) ? F.of(exports.none) : F.map(f(ta.value), exports.some);
          };
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return function(ta) {
          return exports.isNone(ta) ? F.of(exports.none) : F.map(ta.value, exports.some);
        };
      };
      exports.sequence = sequence;
      var wither = function(F) {
        return function(f) {
          return function(fa) {
            return exports.isNone(fa) ? F.of(exports.none) : f(fa.value);
          };
        };
      };
      exports.wither = wither;
      var wilt = function(F) {
        return function(f) {
          return function(fa) {
            return exports.isNone(fa) ? F.of(defaultSeparated) : F.map(f(fa.value), function(e2) {
              return Separated_1.separated(getLeft(e2), getRight(e2));
            });
          };
        };
      };
      exports.wilt = wilt;
      exports.URI = "Option";
      function getShow(S) {
        return {
          show: function(ma) {
            return exports.isNone(ma) ? "none" : "some(" + S.show(ma.value) + ")";
          }
        };
      }
      exports.getShow = getShow;
      function getEq(E) {
        return {
          equals: function(x, y2) {
            return x === y2 || (exports.isNone(x) ? exports.isNone(y2) : exports.isNone(y2) ? false : E.equals(x.value, y2.value));
          }
        };
      }
      exports.getEq = getEq;
      function getOrd(O) {
        return {
          equals: getEq(O).equals,
          compare: function(x, y2) {
            return x === y2 ? 0 : exports.isSome(x) ? exports.isSome(y2) ? O.compare(x.value, y2.value) : 1 : -1;
          }
        };
      }
      exports.getOrd = getOrd;
      function getFirstMonoid() {
        return {
          concat: function(x, y2) {
            return exports.isNone(x) ? y2 : x;
          },
          empty: exports.none
        };
      }
      exports.getFirstMonoid = getFirstMonoid;
      function getLastMonoid() {
        return {
          concat: function(x, y2) {
            return exports.isNone(y2) ? x : y2;
          },
          empty: exports.none
        };
      }
      exports.getLastMonoid = getLastMonoid;
      function getMonoid(S) {
        return {
          concat: function(x, y2) {
            return exports.isNone(x) ? y2 : exports.isNone(y2) ? x : exports.some(S.concat(x.value, y2.value));
          },
          empty: exports.none
        };
      }
      exports.getMonoid = getMonoid;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /* @__PURE__ */ Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Alternative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        alt: _alt,
        zero: exports.zero
      };
      exports.Extend = {
        URI: exports.URI,
        map: _map2,
        extend: _extend
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.Witherable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      exports.MonadThrow = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain,
        throwError: exports.throwError
      };
      function elem(E) {
        return function(a, ma) {
          return exports.isNone(ma) ? false : E.equals(a, ma.value);
        };
      }
      exports.elem = elem;
      function exists(predicate) {
        return function(ma) {
          return exports.isNone(ma) ? false : predicate(ma.value);
        };
      }
      exports.exists = exists;
      function getRefinement(getOption) {
        return function(a) {
          return exports.isSome(getOption(a));
        };
      }
      exports.getRefinement = getRefinement;
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      var traverseArrayWithIndex = function(f) {
        return function(as) {
          var out = [];
          for (var i2 = 0; i2 < as.length; i2++) {
            var b = f(i2, as[i2]);
            if (exports.isNone(b)) {
              return exports.none;
            }
            out.push(b.value);
          }
          return exports.some(out);
        };
      };
      exports.traverseArrayWithIndex = traverseArrayWithIndex;
      var traverseArray = function(f) {
        return exports.traverseArrayWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.traverseArray = traverseArray;
      exports.sequenceArray = /* @__PURE__ */ exports.traverseArray(function_1.identity);
      exports.mapNullable = exports.chainNullableK;
      exports.option = {
        URI: exports.URI,
        map: _map2,
        of: exports.of,
        ap: _ap,
        chain: _chain,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        zero: exports.zero,
        alt: _alt,
        extend: _extend,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt,
        throwError: exports.throwError
      };
      exports.getApplySemigroup = /* @__PURE__ */ Apply_1.getApplySemigroup(exports.Apply);
      exports.getApplyMonoid = /* @__PURE__ */ Applicative_1.getApplicativeMonoid(exports.Applicative);
    }
  });

  // ../shared/node_modules/fp-ts/lib/Eq.js
  var require_Eq = __commonJS({
    "../shared/node_modules/fp-ts/lib/Eq.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.eqDate = exports.eqNumber = exports.eqString = exports.eqBoolean = exports.eq = exports.strictEqual = exports.getStructEq = exports.getTupleEq = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.eqStrict = exports.URI = exports.contramap = exports.tuple = exports.struct = exports.fromEquals = void 0;
      var function_1 = require_function();
      function fromEquals(equals) {
        return {
          equals: function(x, y2) {
            return x === y2 || equals(x, y2);
          }
        };
      }
      exports.fromEquals = fromEquals;
      var struct = function(eqs) {
        return fromEquals(function(first, second) {
          for (var key in eqs) {
            if (!eqs[key].equals(first[key], second[key])) {
              return false;
            }
          }
          return true;
        });
      };
      exports.struct = struct;
      var tuple = function() {
        var eqs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          eqs[_i] = arguments[_i];
        }
        return fromEquals(function(first, second) {
          return eqs.every(function(E, i2) {
            return E.equals(first[i2], second[i2]);
          });
        });
      };
      exports.tuple = tuple;
      var contramap_ = function(fa, f) {
        return function_1.pipe(fa, exports.contramap(f));
      };
      var contramap = function(f) {
        return function(fa) {
          return fromEquals(function(x, y2) {
            return fa.equals(f(x), f(y2));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Eq";
      exports.eqStrict = {
        equals: function(a, b) {
          return a === b;
        }
      };
      var empty = {
        equals: function() {
          return true;
        }
      };
      var getSemigroup = function() {
        return {
          concat: function(x, y2) {
            return fromEquals(function(a, b) {
              return x.equals(a, b) && y2.equals(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function() {
        return {
          concat: exports.getSemigroup().concat,
          empty
        };
      };
      exports.getMonoid = getMonoid;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      exports.getTupleEq = exports.tuple;
      exports.getStructEq = exports.struct;
      exports.strictEqual = exports.eqStrict.equals;
      exports.eq = exports.Contravariant;
      exports.eqBoolean = exports.eqStrict;
      exports.eqString = exports.eqStrict;
      exports.eqNumber = exports.eqStrict;
      exports.eqDate = {
        equals: function(first, second) {
          return first.valueOf() === second.valueOf();
        }
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Ord.js
  var require_Ord = __commonJS({
    "../shared/node_modules/fp-ts/lib/Ord.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.ordDate = exports.ordNumber = exports.ordString = exports.ordBoolean = exports.ord = exports.getDualOrd = exports.getTupleOrd = exports.between = exports.clamp = exports.max = exports.min = exports.geq = exports.leq = exports.gt = exports.lt = exports.Contravariant = exports.getMonoid = exports.getSemigroup = exports.URI = exports.contramap = exports.reverse = exports.tuple = exports.fromCompare = exports.equalsDefault = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var equalsDefault = function(compare2) {
        return function(first, second) {
          return first === second || compare2(first, second) === 0;
        };
      };
      exports.equalsDefault = equalsDefault;
      var fromCompare = function(compare2) {
        return {
          equals: exports.equalsDefault(compare2),
          compare: function(first, second) {
            return first === second ? 0 : compare2(first, second);
          }
        };
      };
      exports.fromCompare = fromCompare;
      var tuple = function() {
        var ords = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          ords[_i] = arguments[_i];
        }
        return exports.fromCompare(function(first, second) {
          var i2 = 0;
          for (; i2 < ords.length - 1; i2++) {
            var r = ords[i2].compare(first[i2], second[i2]);
            if (r !== 0) {
              return r;
            }
          }
          return ords[i2].compare(first[i2], second[i2]);
        });
      };
      exports.tuple = tuple;
      var reverse = function(O) {
        return exports.fromCompare(function(first, second) {
          return O.compare(second, first);
        });
      };
      exports.reverse = reverse;
      var contramap_ = function(fa, f) {
        return function_1.pipe(fa, exports.contramap(f));
      };
      var contramap = function(f) {
        return function(fa) {
          return exports.fromCompare(function(first, second) {
            return fa.compare(f(first), f(second));
          });
        };
      };
      exports.contramap = contramap;
      exports.URI = "Ord";
      var getSemigroup = function() {
        return {
          concat: function(first, second) {
            return exports.fromCompare(function(a, b) {
              var ox = first.compare(a, b);
              return ox !== 0 ? ox : second.compare(a, b);
            });
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function() {
        return {
          concat: exports.getSemigroup().concat,
          empty: exports.fromCompare(function() {
            return 0;
          })
        };
      };
      exports.getMonoid = getMonoid;
      exports.Contravariant = {
        URI: exports.URI,
        contramap: contramap_
      };
      var lt = function(O) {
        return function(first, second) {
          return O.compare(first, second) === -1;
        };
      };
      exports.lt = lt;
      var gt = function(O) {
        return function(first, second) {
          return O.compare(first, second) === 1;
        };
      };
      exports.gt = gt;
      var leq = function(O) {
        return function(first, second) {
          return O.compare(first, second) !== 1;
        };
      };
      exports.leq = leq;
      var geq = function(O) {
        return function(first, second) {
          return O.compare(first, second) !== -1;
        };
      };
      exports.geq = geq;
      var min2 = function(O) {
        return function(first, second) {
          return first === second || O.compare(first, second) < 1 ? first : second;
        };
      };
      exports.min = min2;
      var max2 = function(O) {
        return function(first, second) {
          return first === second || O.compare(first, second) > -1 ? first : second;
        };
      };
      exports.max = max2;
      var clamp2 = function(O) {
        var minO = exports.min(O);
        var maxO = exports.max(O);
        return function(low, hi) {
          return function(a) {
            return maxO(minO(a, hi), low);
          };
        };
      };
      exports.clamp = clamp2;
      var between = function(O) {
        var ltO = exports.lt(O);
        var gtO = exports.gt(O);
        return function(low, hi) {
          return function(a) {
            return ltO(a, low) || gtO(a, hi) ? false : true;
          };
        };
      };
      exports.between = between;
      exports.getTupleOrd = exports.tuple;
      exports.getDualOrd = exports.reverse;
      exports.ord = exports.Contravariant;
      function compare(first, second) {
        return first < second ? -1 : first > second ? 1 : 0;
      }
      var strictOrd = {
        equals: Eq_1.eqStrict.equals,
        compare
      };
      exports.ordBoolean = strictOrd;
      exports.ordString = strictOrd;
      exports.ordNumber = strictOrd;
      exports.ordDate = /* @__PURE__ */ function_1.pipe(
        // tslint:disable-next-line: deprecation
        exports.ordNumber,
        /* @__PURE__ */ exports.contramap(function(date) {
          return date.valueOf();
        })
      );
    }
  });

  // ../shared/node_modules/fp-ts/lib/Semigroup.js
  var require_Semigroup = __commonJS({
    "../shared/node_modules/fp-ts/lib/Semigroup.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.semigroupProduct = exports.semigroupSum = exports.semigroupString = exports.getFunctionSemigroup = exports.semigroupAny = exports.semigroupAll = exports.fold = exports.getIntercalateSemigroup = exports.getMeetSemigroup = exports.getJoinSemigroup = exports.getDualSemigroup = exports.getStructSemigroup = exports.getTupleSemigroup = exports.getFirstSemigroup = exports.getLastSemigroup = exports.getObjectSemigroup = exports.concatAll = exports.semigroupVoid = exports.last = exports.first = exports.intercalate = exports.tuple = exports.struct = exports.reverse = exports.constant = exports.max = exports.min = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      var Or = __importStar(require_Ord());
      var min2 = function(O) {
        return {
          concat: Or.min(O)
        };
      };
      exports.min = min2;
      var max2 = function(O) {
        return {
          concat: Or.max(O)
        };
      };
      exports.max = max2;
      var constant = function(a) {
        return {
          concat: function() {
            return a;
          }
        };
      };
      exports.constant = constant;
      var reverse = function(S) {
        return {
          concat: function(x, y2) {
            return S.concat(y2, x);
          }
        };
      };
      exports.reverse = reverse;
      var struct = function(semigroups) {
        return {
          concat: function(first2, second) {
            var r = {};
            for (var k in semigroups) {
              if (_.has.call(semigroups, k)) {
                r[k] = semigroups[k].concat(first2[k], second[k]);
              }
            }
            return r;
          }
        };
      };
      exports.struct = struct;
      var tuple = function() {
        var semigroups = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          semigroups[_i] = arguments[_i];
        }
        return {
          concat: function(first2, second) {
            return semigroups.map(function(s2, i2) {
              return s2.concat(first2[i2], second[i2]);
            });
          }
        };
      };
      exports.tuple = tuple;
      var intercalate = function(middle) {
        return function(S) {
          return {
            concat: function(x, y2) {
              return S.concat(x, S.concat(middle, y2));
            }
          };
        };
      };
      exports.intercalate = intercalate;
      var first = function() {
        return { concat: function_1.identity };
      };
      exports.first = first;
      var last = function() {
        return { concat: function(_2, y2) {
          return y2;
        } };
      };
      exports.last = last;
      exports.semigroupVoid = exports.constant(void 0);
      var concatAll = function(S) {
        return function(startWith) {
          return function(as) {
            return as.reduce(S.concat, startWith);
          };
        };
      };
      exports.concatAll = concatAll;
      var getObjectSemigroup = function() {
        return {
          concat: function(first2, second) {
            return Object.assign({}, first2, second);
          }
        };
      };
      exports.getObjectSemigroup = getObjectSemigroup;
      exports.getLastSemigroup = exports.last;
      exports.getFirstSemigroup = exports.first;
      exports.getTupleSemigroup = exports.tuple;
      exports.getStructSemigroup = exports.struct;
      exports.getDualSemigroup = exports.reverse;
      exports.getJoinSemigroup = exports.max;
      exports.getMeetSemigroup = exports.min;
      exports.getIntercalateSemigroup = exports.intercalate;
      function fold2(S) {
        var concatAllS = exports.concatAll(S);
        return function(startWith, as) {
          return as === void 0 ? concatAllS(startWith) : concatAllS(startWith)(as);
        };
      }
      exports.fold = fold2;
      exports.semigroupAll = {
        concat: function(x, y2) {
          return x && y2;
        }
      };
      exports.semigroupAny = {
        concat: function(x, y2) {
          return x || y2;
        }
      };
      exports.getFunctionSemigroup = function_1.getSemigroup;
      exports.semigroupString = {
        concat: function(x, y2) {
          return x + y2;
        }
      };
      exports.semigroupSum = {
        concat: function(x, y2) {
          return x + y2;
        }
      };
      exports.semigroupProduct = {
        concat: function(x, y2) {
          return x * y2;
        }
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js
  var require_ReadonlyNonEmptyArray = __commonJS({
    "../shared/node_modules/fp-ts/lib/ReadonlyNonEmptyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from) {
        for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++)
          to[j] = from[i2];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.traverse = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.reduceRight = exports.foldMap = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.of = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.modifyAt = exports.updateAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.fromArray = exports.unappend = exports.unprepend = exports.fromReadonlyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = exports.empty = void 0;
      exports.readonlyNonEmptyArray = exports.fold = exports.prependToAll = exports.insertAt = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var O = __importStar(require_Option());
      var Ord_1 = require_Ord();
      var Se = __importStar(require_Semigroup());
      exports.empty = [];
      var isNonEmpty = function(as) {
        return as.length > 0;
      };
      exports.isNonEmpty = isNonEmpty;
      var isOutOfBound = function(i2, as) {
        return i2 < 0 || i2 >= as.length;
      };
      exports.isOutOfBound = isOutOfBound;
      var prepend = function(head) {
        return function(tail2) {
          return __spreadArray2([head], tail2);
        };
      };
      exports.prepend = prepend;
      var append = function(end) {
        return function(init2) {
          return concat(init2, [end]);
        };
      };
      exports.append = append;
      var unsafeInsertAt = function(i2, a, as) {
        if (exports.isNonEmpty(as)) {
          var xs = _.fromReadonlyNonEmptyArray(as);
          xs.splice(i2, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt;
      var unsafeUpdateAt = function(i2, a, as) {
        if (as[i2] === a) {
          return as;
        } else {
          var xs = _.fromReadonlyNonEmptyArray(as);
          xs[i2] = a;
          return xs;
        }
      };
      exports.unsafeUpdateAt = unsafeUpdateAt;
      var uniq = function(E) {
        return function(as) {
          if (as.length === 1) {
            return as;
          }
          var out = [exports.head(as)];
          var rest = exports.tail(as);
          var _loop_1 = function(a2) {
            if (out.every(function(o) {
              return !E.equals(o, a2);
            })) {
              out.push(a2);
            }
          };
          for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var a = rest_1[_i];
            _loop_1(a);
          }
          return out;
        };
      };
      exports.uniq = uniq;
      var sortBy = function(ords) {
        if (exports.isNonEmpty(ords)) {
          var M = Ord_1.getMonoid();
          return exports.sort(ords.reduce(M.concat, M.empty));
        }
        return function_1.identity;
      };
      exports.sortBy = sortBy;
      var union8 = function(E) {
        var uniqE = exports.uniq(E);
        return function(first, second) {
          return uniqE(concat(first, second));
        };
      };
      exports.union = union8;
      var rotate = function(n) {
        return function(as) {
          var len = as.length;
          var m = Math.round(n) % len;
          if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
            return as;
          }
          if (m < 0) {
            var _a = exports.splitAt(-m)(as), f = _a[0], s2 = _a[1];
            return concat(s2, f);
          } else {
            return exports.rotate(m - len)(as);
          }
        };
      };
      exports.rotate = rotate;
      var makeBy = function(n, f) {
        var j = Math.max(0, Math.floor(n));
        var out = [f(0)];
        for (var i2 = 1; i2 < j; i2++) {
          out.push(f(i2));
        }
        return out;
      };
      exports.makeBy = makeBy;
      var fromReadonlyArray = function(as) {
        return exports.isNonEmpty(as) ? O.some(as) : O.none;
      };
      exports.fromReadonlyArray = fromReadonlyArray;
      var unprepend = function(as) {
        return [exports.head(as), exports.tail(as)];
      };
      exports.unprepend = unprepend;
      var unappend = function(as) {
        return [exports.init(as), exports.last(as)];
      };
      exports.unappend = unappend;
      var fromArray = function(as) {
        return exports.fromReadonlyArray(as.slice());
      };
      exports.fromArray = fromArray;
      function concat(first, second) {
        return first.concat(second);
      }
      exports.concat = concat;
      var reverse = function(as) {
        return as.length === 1 ? as : __spreadArray2([exports.last(as)], as.slice(0, -1).reverse());
      };
      exports.reverse = reverse;
      function group(E) {
        return function(as) {
          var len = as.length;
          if (len === 0) {
            return exports.empty;
          }
          var out = [];
          var head = as[0];
          var nea = [head];
          for (var i2 = 1; i2 < len; i2++) {
            var a = as[i2];
            if (E.equals(a, head)) {
              nea.push(a);
            } else {
              out.push(nea);
              head = a;
              nea = [head];
            }
          }
          out.push(nea);
          return out;
        };
      }
      exports.group = group;
      function groupSort(O2) {
        var sortO = exports.sort(O2);
        var groupO = group(O2);
        return function(as) {
          return exports.isNonEmpty(as) ? groupO(sortO(as)) : exports.empty;
        };
      }
      exports.groupSort = groupSort;
      var groupBy = function(f) {
        return function(as) {
          var out = {};
          for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f(a);
            if (out.hasOwnProperty(k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      exports.groupBy = groupBy;
      var sort = function(O2) {
        return function(as) {
          return as.length === 1 ? as : as.slice().sort(O2.compare);
        };
      };
      exports.sort = sort;
      var updateAt = function(i2, a) {
        return exports.modifyAt(i2, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var modifyAt = function(i2, f) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeUpdateAt(i2, f(as[i2]), as));
        };
      };
      exports.modifyAt = modifyAt;
      var zipWith = function(as, bs, f) {
        var cs = [f(as[0], bs[0])];
        var len = Math.min(as.length, bs.length);
        for (var i2 = 1; i2 < len; i2++) {
          cs[i2] = f(as[i2], bs[i2]);
        }
        return cs;
      };
      exports.zipWith = zipWith;
      function zip(as, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip(bs2, as);
          };
        }
        return exports.zipWith(as, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip;
      var unzip = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i2 = 1; i2 < abs.length; i2++) {
          fa[i2] = abs[i2][0];
          fb[i2] = abs[i2][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip;
      var prependAll = function(middle) {
        return function(as) {
          var out = [middle, as[0]];
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push(middle, as[i2]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll;
      var intersperse = function(middle) {
        return function(as) {
          var rest = exports.tail(as);
          return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : as;
        };
      };
      exports.intersperse = intersperse;
      var chainWithIndex = function(f) {
        return function(as) {
          var out = _.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push.apply(out, f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex;
      var chop = function(f) {
        return function(as) {
          var _a = f(as), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (exports.isNonEmpty(next)) {
            var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop;
      var splitAt = function(n) {
        return function(as) {
          var m = Math.max(1, n);
          return m >= as.length ? [as, exports.empty] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
        };
      };
      exports.splitAt = splitAt;
      var chunksOf = function(n) {
        return exports.chop(exports.splitAt(n));
      };
      exports.chunksOf = chunksOf;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.mapWithIndex(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _extend = function(wa, f) {
        return function_1.pipe(wa, exports.extend(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var of = function(a) {
        return [a];
      };
      exports.of = of;
      var altW = function(that) {
        return function(as) {
          return concat(as, that());
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var ap = function(as) {
        return exports.chain(function(f) {
          return function_1.pipe(as, exports.map(f));
        });
      };
      exports.ap = ap;
      var chain = function(f) {
        return exports.chainWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.chain = chain;
      var extend = function(f) {
        return function(as) {
          var next = exports.tail(as);
          var out = [f(as)];
          while (exports.isNonEmpty(next)) {
            out.push(f(next));
            next = exports.tail(next);
          }
          return out;
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var map2 = function(f) {
        return exports.mapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.map = map2;
      var mapWithIndex = function(f) {
        return function(as) {
          var out = [f(0, exports.head(as))];
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push(f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex;
      var reduce = function(b, f) {
        return exports.reduceWithIndex(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduce = reduce;
      var foldMap = function(S) {
        return function(f) {
          return function(as) {
            return as.slice(1).reduce(function(s2, a) {
              return S.concat(s2, f(a));
            }, f(as[0]));
          };
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function(b, f) {
        return exports.reduceRightWithIndex(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduceRight = reduceRight;
      var reduceWithIndex = function(b, f) {
        return function(as) {
          return as.reduce(function(b2, a, i2) {
            return f(i2, b2, a);
          }, b);
        };
      };
      exports.reduceWithIndex = reduceWithIndex;
      var foldMapWithIndex = function(S) {
        return function(f) {
          return function(as) {
            return as.slice(1).reduce(function(s2, a, i2) {
              return S.concat(s2, f(i2 + 1, a));
            }, f(0, as[0]));
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex;
      var reduceRightWithIndex = function(b, f) {
        return function(as) {
          return as.reduceRight(function(b2, a, i2) {
            return f(i2, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex;
      var traverse = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(f) {
          return traverseWithIndexF(function(_2, a) {
            return f(a);
          });
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return exports.traverseWithIndex(F)(function(_2, a) {
          return a;
        });
      };
      exports.sequence = sequence;
      var traverseWithIndex = function(F) {
        return function(f) {
          return function(as) {
            var out = F.map(f(0, exports.head(as)), exports.of);
            for (var i2 = 1; i2 < as.length; i2++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return function_1.pipe(bs, exports.append(b));
                };
              }), f(i2, as[i2]));
            }
            return out;
          };
        };
      };
      exports.traverseWithIndex = traverseWithIndex;
      var extract = function(as) {
        return as[0];
      };
      exports.extract = extract;
      exports.URI = "ReadonlyNonEmptyArray";
      var getShow = function(S) {
        return {
          show: function(as) {
            return "[" + as.map(S.show).join(", ") + "]";
          }
        };
      };
      exports.getShow = getShow;
      var getSemigroup = function() {
        return {
          concat
        };
      };
      exports.getSemigroup = getSemigroup;
      var getEq = function(E) {
        return Eq_1.fromEquals(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i2) {
            return E.equals(x, ys[i2]);
          });
        });
      };
      exports.getEq = getEq;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map2,
        extend: _extend,
        extract: exports.extract
      };
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.head = exports.extract;
      var tail = function(as) {
        return as.slice(1);
      };
      exports.tail = tail;
      var last = function(as) {
        return as[as.length - 1];
      };
      exports.last = last;
      var init = function(as) {
        return as.slice(0, -1);
      };
      exports.init = init;
      var min2 = function(O2) {
        var S = Se.min(O2);
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.min = min2;
      var max2 = function(O2) {
        var S = Se.max(O2);
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.max = max2;
      var concatAll = function(S) {
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll;
      function filter(predicate) {
        return exports.filterWithIndex(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter;
      var filterWithIndex = function(predicate) {
        return function(as) {
          return exports.fromReadonlyArray(as.filter(function(a, i2) {
            return predicate(i2, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons(head, tail2) {
        return tail2 === void 0 ? exports.prepend(head) : function_1.pipe(tail2, exports.prepend(head));
      }
      exports.cons = cons;
      var snoc = function(init2, end) {
        return concat(init2, [end]);
      };
      exports.snoc = snoc;
      var insertAt = function(i2, a) {
        return function(as) {
          return i2 < 0 || i2 > as.length ? O.none : O.some(exports.unsafeInsertAt(i2, a, as));
        };
      };
      exports.insertAt = insertAt;
      exports.prependToAll = exports.prependAll;
      exports.fold = exports.concatAll;
      exports.readonlyNonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        ap: _ap,
        chain: _chain,
        extend: _extend,
        extract: exports.extract,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        alt: _alt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/NonEmptyArray.js
  var require_NonEmptyArray = __commonJS({
    "../shared/node_modules/fp-ts/lib/NonEmptyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __spreadArray2 = exports && exports.__spreadArray || function(to, from) {
        for (var i2 = 0, il = from.length, j = to.length; i2 < il; i2++, j++)
          to[j] = from[i2];
        return to;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.mapWithIndex = exports.map = exports.flatten = exports.duplicate = exports.extend = exports.chain = exports.ap = exports.alt = exports.altW = exports.chunksOf = exports.splitAt = exports.chop = exports.chainWithIndex = exports.foldMap = exports.foldMapWithIndex = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.of = exports.copy = exports.modifyAt = exports.updateAt = exports.insertAt = exports.sort = exports.groupBy = exports.groupSort = exports.group = exports.reverse = exports.concat = exports.unappend = exports.unprepend = exports.fromArray = exports.fromReadonlyNonEmptyArray = exports.makeBy = exports.rotate = exports.union = exports.sortBy = exports.uniq = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.append = exports.prepend = exports.isOutOfBound = exports.isNonEmpty = void 0;
      exports.nonEmptyArray = exports.fold = exports.prependToAll = exports.snoc = exports.cons = exports.unsnoc = exports.uncons = exports.filterWithIndex = exports.filter = exports.concatAll = exports.max = exports.min = exports.init = exports.last = exports.tail = exports.head = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.Comonad = exports.Alt = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = exports.flap = exports.Functor = exports.getEq = exports.getSemigroup = exports.getShow = exports.URI = exports.extract = exports.traverseWithIndex = exports.sequence = exports.traverse = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var O = __importStar(require_Option());
      var Ord_1 = require_Ord();
      var RNEA = __importStar(require_ReadonlyNonEmptyArray());
      var isNonEmpty = function(as) {
        return as.length > 0;
      };
      exports.isNonEmpty = isNonEmpty;
      var isOutOfBound = function(i2, as) {
        return i2 < 0 || i2 >= as.length;
      };
      exports.isOutOfBound = isOutOfBound;
      var prepend = function(head) {
        return function(tail2) {
          return __spreadArray2([head], tail2);
        };
      };
      exports.prepend = prepend;
      var append = function(end) {
        return function(init2) {
          return concat(init2, [end]);
        };
      };
      exports.append = append;
      var unsafeInsertAt = function(i2, a, as) {
        if (exports.isNonEmpty(as)) {
          var xs = exports.fromReadonlyNonEmptyArray(as);
          xs.splice(i2, 0, a);
          return xs;
        }
        return [a];
      };
      exports.unsafeInsertAt = unsafeInsertAt;
      var unsafeUpdateAt = function(i2, a, as) {
        var xs = exports.fromReadonlyNonEmptyArray(as);
        xs[i2] = a;
        return xs;
      };
      exports.unsafeUpdateAt = unsafeUpdateAt;
      var uniq = function(E) {
        return function(as) {
          if (as.length === 1) {
            return exports.copy(as);
          }
          var out = [exports.head(as)];
          var rest = exports.tail(as);
          var _loop_1 = function(a2) {
            if (out.every(function(o) {
              return !E.equals(o, a2);
            })) {
              out.push(a2);
            }
          };
          for (var _i = 0, rest_1 = rest; _i < rest_1.length; _i++) {
            var a = rest_1[_i];
            _loop_1(a);
          }
          return out;
        };
      };
      exports.uniq = uniq;
      var sortBy = function(ords) {
        if (exports.isNonEmpty(ords)) {
          var M = Ord_1.getMonoid();
          return exports.sort(ords.reduce(M.concat, M.empty));
        }
        return exports.copy;
      };
      exports.sortBy = sortBy;
      var union8 = function(E) {
        var uniqE = exports.uniq(E);
        return function(first, second) {
          return uniqE(concat(first, second));
        };
      };
      exports.union = union8;
      var rotate = function(n) {
        return function(as) {
          var len = as.length;
          var m = Math.round(n) % len;
          if (exports.isOutOfBound(Math.abs(m), as) || m === 0) {
            return exports.copy(as);
          }
          if (m < 0) {
            var _a = exports.splitAt(-m)(as), f = _a[0], s2 = _a[1];
            return concat(s2, f);
          } else {
            return exports.rotate(m - len)(as);
          }
        };
      };
      exports.rotate = rotate;
      var makeBy = function(n, f) {
        var j = Math.max(0, Math.floor(n));
        var out = [f(0)];
        for (var i2 = 1; i2 < j; i2++) {
          out.push(f(i2));
        }
        return out;
      };
      exports.makeBy = makeBy;
      exports.fromReadonlyNonEmptyArray = _.fromReadonlyNonEmptyArray;
      var fromArray = function(as) {
        return exports.isNonEmpty(as) ? O.some(as) : O.none;
      };
      exports.fromArray = fromArray;
      var unprepend = function(as) {
        return [exports.head(as), exports.tail(as)];
      };
      exports.unprepend = unprepend;
      var unappend = function(as) {
        return [exports.init(as), exports.last(as)];
      };
      exports.unappend = unappend;
      function concat(first, second) {
        return first.concat(second);
      }
      exports.concat = concat;
      var reverse = function(as) {
        return __spreadArray2([exports.last(as)], as.slice(0, -1).reverse());
      };
      exports.reverse = reverse;
      function group(E) {
        return function(as) {
          var len = as.length;
          if (len === 0) {
            return [];
          }
          var out = [];
          var head = as[0];
          var nea = [head];
          for (var i2 = 1; i2 < len; i2++) {
            var a = as[i2];
            if (E.equals(a, head)) {
              nea.push(a);
            } else {
              out.push(nea);
              head = a;
              nea = [head];
            }
          }
          out.push(nea);
          return out;
        };
      }
      exports.group = group;
      function groupSort(O2) {
        var sortO = exports.sort(O2);
        var groupO = group(O2);
        return function(as) {
          return exports.isNonEmpty(as) ? groupO(sortO(as)) : [];
        };
      }
      exports.groupSort = groupSort;
      var groupBy = function(f) {
        return function(as) {
          var out = {};
          for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            var k = f(a);
            if (out.hasOwnProperty(k)) {
              out[k].push(a);
            } else {
              out[k] = [a];
            }
          }
          return out;
        };
      };
      exports.groupBy = groupBy;
      var sort = function(O2) {
        return function(as) {
          return as.slice().sort(O2.compare);
        };
      };
      exports.sort = sort;
      var insertAt = function(i2, a) {
        return function(as) {
          return i2 < 0 || i2 > as.length ? O.none : O.some(exports.unsafeInsertAt(i2, a, as));
        };
      };
      exports.insertAt = insertAt;
      var updateAt = function(i2, a) {
        return exports.modifyAt(i2, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var modifyAt = function(i2, f) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeUpdateAt(i2, f(as[i2]), as));
        };
      };
      exports.modifyAt = modifyAt;
      exports.copy = exports.fromReadonlyNonEmptyArray;
      var of = function(a) {
        return [a];
      };
      exports.of = of;
      var zipWith = function(as, bs, f) {
        var cs = [f(as[0], bs[0])];
        var len = Math.min(as.length, bs.length);
        for (var i2 = 1; i2 < len; i2++) {
          cs[i2] = f(as[i2], bs[i2]);
        }
        return cs;
      };
      exports.zipWith = zipWith;
      function zip(as, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip(bs2, as);
          };
        }
        return exports.zipWith(as, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip;
      var unzip = function(abs) {
        var fa = [abs[0][0]];
        var fb = [abs[0][1]];
        for (var i2 = 1; i2 < abs.length; i2++) {
          fa[i2] = abs[i2][0];
          fb[i2] = abs[i2][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip;
      var prependAll = function(middle) {
        return function(as) {
          var out = [middle, as[0]];
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push(middle, as[i2]);
          }
          return out;
        };
      };
      exports.prependAll = prependAll;
      var intersperse = function(middle) {
        return function(as) {
          var rest = exports.tail(as);
          return exports.isNonEmpty(rest) ? function_1.pipe(rest, exports.prependAll(middle), exports.prepend(exports.head(as))) : exports.copy(as);
        };
      };
      exports.intersperse = intersperse;
      exports.foldMapWithIndex = RNEA.foldMapWithIndex;
      exports.foldMap = RNEA.foldMap;
      var chainWithIndex = function(f) {
        return function(as) {
          var out = exports.fromReadonlyNonEmptyArray(f(0, exports.head(as)));
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push.apply(out, f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex;
      var chop = function(f) {
        return function(as) {
          var _a = f(as), b = _a[0], rest = _a[1];
          var out = [b];
          var next = rest;
          while (exports.isNonEmpty(next)) {
            var _b = f(next), b_1 = _b[0], rest_2 = _b[1];
            out.push(b_1);
            next = rest_2;
          }
          return out;
        };
      };
      exports.chop = chop;
      var splitAt = function(n) {
        return function(as) {
          var m = Math.max(1, n);
          return m >= as.length ? [exports.copy(as), []] : [function_1.pipe(as.slice(1, m), exports.prepend(exports.head(as))), as.slice(m)];
        };
      };
      exports.splitAt = splitAt;
      var chunksOf = function(n) {
        return exports.chop(exports.splitAt(n));
      };
      exports.chunksOf = chunksOf;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.mapWithIndex(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _extend = function(wa, f) {
        return function_1.pipe(wa, exports.extend(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var altW = function(that) {
        return function(as) {
          return concat(as, that());
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var ap = function(as) {
        return exports.chain(function(f) {
          return function_1.pipe(as, exports.map(f));
        });
      };
      exports.ap = ap;
      var chain = function(f) {
        return exports.chainWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.chain = chain;
      var extend = function(f) {
        return function(as) {
          var next = exports.tail(as);
          var out = [f(as)];
          while (exports.isNonEmpty(next)) {
            out.push(f(next));
            next = exports.tail(next);
          }
          return out;
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var map2 = function(f) {
        return exports.mapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.map = map2;
      var mapWithIndex = function(f) {
        return function(as) {
          var out = [f(0, exports.head(as))];
          for (var i2 = 1; i2 < as.length; i2++) {
            out.push(f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.mapWithIndex = mapWithIndex;
      exports.reduce = RNEA.reduce;
      exports.reduceWithIndex = RNEA.reduceWithIndex;
      exports.reduceRight = RNEA.reduceRight;
      exports.reduceRightWithIndex = RNEA.reduceRightWithIndex;
      var traverse = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(f) {
          return traverseWithIndexF(function(_2, a) {
            return f(a);
          });
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return exports.traverseWithIndex(F)(function(_2, a) {
          return a;
        });
      };
      exports.sequence = sequence;
      var traverseWithIndex = function(F) {
        return function(f) {
          return function(as) {
            var out = F.map(f(0, exports.head(as)), exports.of);
            for (var i2 = 1; i2 < as.length; i2++) {
              out = F.ap(F.map(out, function(bs) {
                return function(b) {
                  return function_1.pipe(bs, exports.append(b));
                };
              }), f(i2, as[i2]));
            }
            return out;
          };
        };
      };
      exports.traverseWithIndex = traverseWithIndex;
      exports.extract = RNEA.head;
      exports.URI = "NonEmptyArray";
      exports.getShow = RNEA.getShow;
      var getSemigroup = function() {
        return {
          concat
        };
      };
      exports.getSemigroup = getSemigroup;
      exports.getEq = RNEA.getEq;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Comonad = {
        URI: exports.URI,
        map: _map2,
        extend: _extend,
        extract: exports.extract
      };
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.head = RNEA.head;
      var tail = function(as) {
        return as.slice(1);
      };
      exports.tail = tail;
      exports.last = RNEA.last;
      var init = function(as) {
        return as.slice(0, -1);
      };
      exports.init = init;
      exports.min = RNEA.min;
      exports.max = RNEA.max;
      var concatAll = function(S) {
        return function(as) {
          return as.reduce(S.concat);
        };
      };
      exports.concatAll = concatAll;
      function filter(predicate) {
        return exports.filterWithIndex(function(_2, a) {
          return predicate(a);
        });
      }
      exports.filter = filter;
      var filterWithIndex = function(predicate) {
        return function(as) {
          return exports.fromArray(as.filter(function(a, i2) {
            return predicate(i2, a);
          }));
        };
      };
      exports.filterWithIndex = filterWithIndex;
      exports.uncons = exports.unprepend;
      exports.unsnoc = exports.unappend;
      function cons(head, tail2) {
        return tail2 === void 0 ? exports.prepend(head) : function_1.pipe(tail2, exports.prepend(head));
      }
      exports.cons = cons;
      var snoc = function(init2, end) {
        return function_1.pipe(init2, exports.append(end));
      };
      exports.snoc = snoc;
      exports.prependToAll = exports.prependAll;
      exports.fold = RNEA.concatAll;
      exports.nonEmptyArray = {
        URI: exports.URI,
        of: exports.of,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        ap: _ap,
        chain: _chain,
        extend: _extend,
        extract: exports.extract,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        alt: _alt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Bounded.js
  var require_Bounded = __commonJS({
    "../shared/node_modules/fp-ts/lib/Bounded.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.boundedNumber = void 0;
      var Ord_1 = require_Ord();
      exports.boundedNumber = {
        // tslint:disable-next-line: deprecation
        equals: Ord_1.ordNumber.equals,
        // tslint:disable-next-line: deprecation
        compare: Ord_1.ordNumber.compare,
        top: Infinity,
        bottom: -Infinity
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Field.js
  var require_Field = __commonJS({
    "../shared/node_modules/fp-ts/lib/Field.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.fieldNumber = exports.lcm = exports.gcd = void 0;
      function gcd(E, field) {
        var zero = field.zero;
        var f = function(x, y2) {
          return E.equals(y2, zero) ? x : f(y2, field.mod(x, y2));
        };
        return f;
      }
      exports.gcd = gcd;
      function lcm(E, F) {
        var zero = F.zero;
        var gcdSF = gcd(E, F);
        return function(x, y2) {
          return E.equals(x, zero) || E.equals(y2, zero) ? zero : F.div(F.mul(x, y2), gcdSF(x, y2));
        };
      }
      exports.lcm = lcm;
      exports.fieldNumber = {
        add: function(x, y2) {
          return x + y2;
        },
        zero: 0,
        mul: function(x, y2) {
          return x * y2;
        },
        one: 1,
        sub: function(x, y2) {
          return x - y2;
        },
        degree: function(_) {
          return 1;
        },
        div: function(x, y2) {
          return x / y2;
        },
        mod: function(x, y2) {
          return x % y2;
        }
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Show.js
  var require_Show = __commonJS({
    "../shared/node_modules/fp-ts/lib/Show.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.showNumber = exports.showString = exports.showBoolean = exports.getStructShow = exports.getTupleShow = exports.tuple = exports.struct = void 0;
      var _ = __importStar(require_internal());
      var struct = function(shows) {
        return {
          show: function(a) {
            var s2 = "{";
            for (var k in shows) {
              if (_.has.call(shows, k)) {
                s2 += " " + k + ": " + shows[k].show(a[k]) + ",";
              }
            }
            if (s2.length > 1) {
              s2 = s2.slice(0, -1) + " ";
            }
            s2 += "}";
            return s2;
          }
        };
      };
      exports.struct = struct;
      var tuple = function() {
        var shows = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          shows[_i] = arguments[_i];
        }
        return {
          show: function(t14) {
            return "[" + t14.map(function(a, i2) {
              return shows[i2].show(a);
            }).join(", ") + "]";
          }
        };
      };
      exports.tuple = tuple;
      exports.getTupleShow = exports.tuple;
      exports.getStructShow = exports.struct;
      exports.showBoolean = {
        show: function(a) {
          return JSON.stringify(a);
        }
      };
      exports.showString = {
        show: function(a) {
          return JSON.stringify(a);
        }
      };
      exports.showNumber = {
        show: function(a) {
          return JSON.stringify(a);
        }
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Monoid.js
  var require_Monoid = __commonJS({
    "../shared/node_modules/fp-ts/lib/Monoid.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.monoidProduct = exports.monoidSum = exports.monoidString = exports.getEndomorphismMonoid = exports.getFunctionMonoid = exports.monoidAny = exports.monoidAll = exports.fold = exports.getMeetMonoid = exports.getJoinMonoid = exports.getDualMonoid = exports.getStructMonoid = exports.getTupleMonoid = exports.concatAll = exports.monoidVoid = exports.tuple = exports.struct = exports.reverse = exports.max = exports.min = void 0;
      var function_1 = require_function();
      var _ = __importStar(require_internal());
      var Se = __importStar(require_Semigroup());
      var min2 = function(B) {
        return {
          concat: Se.min(B).concat,
          empty: B.top
        };
      };
      exports.min = min2;
      var max2 = function(B) {
        return {
          concat: Se.max(B).concat,
          empty: B.bottom
        };
      };
      exports.max = max2;
      var reverse = function(M) {
        return {
          concat: Se.reverse(M).concat,
          empty: M.empty
        };
      };
      exports.reverse = reverse;
      var struct = function(monoids) {
        var empty = {};
        for (var k in monoids) {
          if (_.has.call(monoids, k)) {
            empty[k] = monoids[k].empty;
          }
        }
        return {
          concat: Se.struct(monoids).concat,
          empty
        };
      };
      exports.struct = struct;
      var tuple = function() {
        var monoids = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          monoids[_i] = arguments[_i];
        }
        return {
          concat: Se.tuple.apply(Se, monoids).concat,
          empty: monoids.map(function(m) {
            return m.empty;
          })
        };
      };
      exports.tuple = tuple;
      exports.monoidVoid = {
        concat: Se.semigroupVoid.concat,
        empty: void 0
      };
      var concatAll = function(M) {
        return Se.concatAll(M)(M.empty);
      };
      exports.concatAll = concatAll;
      exports.getTupleMonoid = exports.tuple;
      exports.getStructMonoid = exports.struct;
      exports.getDualMonoid = exports.reverse;
      exports.getJoinMonoid = exports.max;
      exports.getMeetMonoid = exports.min;
      exports.fold = exports.concatAll;
      exports.monoidAll = {
        // tslint:disable-next-line: deprecation
        concat: Se.semigroupAll.concat,
        empty: true
      };
      exports.monoidAny = {
        // tslint:disable-next-line: deprecation
        concat: Se.semigroupAny.concat,
        empty: false
      };
      exports.getFunctionMonoid = function_1.getMonoid;
      var getEndomorphismMonoid = function() {
        return exports.reverse(function_1.getEndomorphismMonoid());
      };
      exports.getEndomorphismMonoid = getEndomorphismMonoid;
      exports.monoidString = {
        // tslint:disable-next-line: deprecation
        concat: Se.semigroupString.concat,
        empty: ""
      };
      exports.monoidSum = {
        // tslint:disable-next-line: deprecation
        concat: Se.semigroupSum.concat,
        empty: 0
      };
      exports.monoidProduct = {
        // tslint:disable-next-line: deprecation
        concat: Se.semigroupProduct.concat,
        empty: 1
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/number.js
  var require_number = __commonJS({
    "../shared/node_modules/fp-ts/lib/number.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.MonoidProduct = exports.MonoidSum = exports.SemigroupProduct = exports.SemigroupSum = exports.Show = exports.Field = exports.Bounded = exports.Ord = exports.Eq = void 0;
      var B = __importStar(require_Bounded());
      var E = __importStar(require_Eq());
      var F = __importStar(require_Field());
      var O = __importStar(require_Ord());
      var S = __importStar(require_Show());
      var Semigroup_1 = require_Semigroup();
      var Monoid_1 = require_Monoid();
      exports.Eq = E.eqNumber;
      exports.Ord = O.ordNumber;
      exports.Bounded = B.boundedNumber;
      exports.Field = F.fieldNumber;
      exports.Show = S.showNumber;
      exports.SemigroupSum = Semigroup_1.semigroupSum;
      exports.SemigroupProduct = Semigroup_1.semigroupProduct;
      exports.MonoidSum = Monoid_1.monoidSum;
      exports.MonoidProduct = Monoid_1.monoidProduct;
    }
  });

  // ../shared/node_modules/fp-ts/lib/ReadonlyArray.js
  var require_ReadonlyArray = __commonJS({
    "../shared/node_modules/fp-ts/lib/ReadonlyArray.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.uniq = exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
      exports.Pointed = exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.foldMap = exports.reduce = exports.foldMapWithIndex = exports.duplicate = exports.extend = exports.filterWithIndex = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.filter = exports.separate = exports.mapWithIndex = exports.map = exports.flatten = exports.chain = exports.ap = exports.alt = exports.altW = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = void 0;
      exports.readonlyArray = exports.prependToAll = exports.snoc = exports.cons = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.empty = exports.fromArray = exports.toArray = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.chainFirst = exports.Monad = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var N = __importStar(require_number());
      var O = __importStar(require_Option());
      var Ord_1 = require_Ord();
      var RNEA = __importStar(require_ReadonlyNonEmptyArray());
      var Separated_1 = require_Separated();
      exports.prepend = RNEA.prepend;
      exports.append = RNEA.append;
      var makeBy = function(n, f) {
        return n <= 0 ? exports.empty : RNEA.makeBy(n, f);
      };
      exports.makeBy = makeBy;
      var range = function(start, end) {
        return start <= end ? exports.makeBy(end - start + 1, function(i2) {
          return start + i2;
        }) : [start];
      };
      exports.range = range;
      var replicate = function(n, a) {
        return exports.makeBy(n, function() {
          return a;
        });
      };
      exports.replicate = replicate;
      var matchLeft = function(onEmpty, onNonEmpty) {
        return function(as) {
          return exports.isNonEmpty(as) ? onNonEmpty(RNEA.head(as), RNEA.tail(as)) : onEmpty();
        };
      };
      exports.matchLeft = matchLeft;
      exports.foldLeft = exports.matchLeft;
      var matchRight = function(onEmpty, onNonEmpty) {
        return function(as) {
          return exports.isNonEmpty(as) ? onNonEmpty(RNEA.init(as), RNEA.last(as)) : onEmpty();
        };
      };
      exports.matchRight = matchRight;
      exports.foldRight = exports.matchRight;
      var chainWithIndex = function(f) {
        return function(as) {
          if (exports.isEmpty(as)) {
            return exports.empty;
          }
          var out = [];
          for (var i2 = 0; i2 < as.length; i2++) {
            out.push.apply(out, f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex;
      var scanLeft = function(b, f) {
        return function(as) {
          var len = as.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i2 = 0; i2 < len; i2++) {
            out[i2 + 1] = f(out[i2], as[i2]);
          }
          return out;
        };
      };
      exports.scanLeft = scanLeft;
      var scanRight = function(b, f) {
        return function(as) {
          var len = as.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i2 = len - 1; i2 >= 0; i2--) {
            out[i2] = f(as[i2], out[i2 + 1]);
          }
          return out;
        };
      };
      exports.scanRight = scanRight;
      var isEmpty = function(as) {
        return as.length === 0;
      };
      exports.isEmpty = isEmpty;
      exports.isNonEmpty = RNEA.isNonEmpty;
      var size = function(as) {
        return as.length;
      };
      exports.size = size;
      exports.isOutOfBound = RNEA.isOutOfBound;
      function lookup(i2, as) {
        return as === void 0 ? function(as2) {
          return lookup(i2, as2);
        } : exports.isOutOfBound(i2, as) ? O.none : O.some(as[i2]);
      }
      exports.lookup = lookup;
      var head = function(as) {
        return exports.isNonEmpty(as) ? O.some(RNEA.head(as)) : O.none;
      };
      exports.head = head;
      var last = function(as) {
        return exports.isNonEmpty(as) ? O.some(RNEA.last(as)) : O.none;
      };
      exports.last = last;
      var tail = function(as) {
        return exports.isNonEmpty(as) ? O.some(RNEA.tail(as)) : O.none;
      };
      exports.tail = tail;
      var init = function(as) {
        return exports.isNonEmpty(as) ? O.some(RNEA.init(as)) : O.none;
      };
      exports.init = init;
      var takeLeft = function(n) {
        return function(as) {
          return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(0, n);
        };
      };
      exports.takeLeft = takeLeft;
      var takeRight = function(n) {
        return function(as) {
          return exports.isOutOfBound(n, as) ? as : n === 0 ? exports.empty : as.slice(-n);
        };
      };
      exports.takeRight = takeRight;
      function takeLeftWhile(predicate) {
        return function(as) {
          var out = [];
          for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
              break;
            }
            out.push(a);
          }
          var len = out.length;
          return len === as.length ? as : len === 0 ? exports.empty : out;
        };
      }
      exports.takeLeftWhile = takeLeftWhile;
      var spanLeftIndex = function(as, predicate) {
        var l2 = as.length;
        var i2 = 0;
        for (; i2 < l2; i2++) {
          if (!predicate(as[i2])) {
            break;
          }
        }
        return i2;
      };
      function spanLeft(predicate) {
        return function(as) {
          var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init2 = _a[0], rest = _a[1];
          return { init: init2, rest };
        };
      }
      exports.spanLeft = spanLeft;
      var dropLeft = function(n) {
        return function(as) {
          return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(n, as.length);
        };
      };
      exports.dropLeft = dropLeft;
      var dropRight = function(n) {
        return function(as) {
          return n <= 0 || exports.isEmpty(as) ? as : n >= as.length ? exports.empty : as.slice(0, as.length - n);
        };
      };
      exports.dropRight = dropRight;
      var dropLeftWhile = function(predicate) {
        return function(as) {
          var i2 = spanLeftIndex(as, predicate);
          return i2 === 0 ? as : i2 === as.length ? exports.empty : as.slice(i2);
        };
      };
      exports.dropLeftWhile = dropLeftWhile;
      var findIndex = function(predicate) {
        return function(as) {
          for (var i2 = 0; i2 < as.length; i2++) {
            if (predicate(as[i2])) {
              return O.some(i2);
            }
          }
          return O.none;
        };
      };
      exports.findIndex = findIndex;
      function findFirst(predicate) {
        return function(as) {
          for (var i2 = 0; i2 < as.length; i2++) {
            if (predicate(as[i2])) {
              return O.some(as[i2]);
            }
          }
          return O.none;
        };
      }
      exports.findFirst = findFirst;
      var findFirstMap = function(f) {
        return function(as) {
          for (var i2 = 0; i2 < as.length; i2++) {
            var out = f(as[i2]);
            if (O.isSome(out)) {
              return out;
            }
          }
          return O.none;
        };
      };
      exports.findFirstMap = findFirstMap;
      function findLast(predicate) {
        return function(as) {
          for (var i2 = as.length - 1; i2 >= 0; i2--) {
            if (predicate(as[i2])) {
              return O.some(as[i2]);
            }
          }
          return O.none;
        };
      }
      exports.findLast = findLast;
      var findLastMap = function(f) {
        return function(as) {
          for (var i2 = as.length - 1; i2 >= 0; i2--) {
            var out = f(as[i2]);
            if (O.isSome(out)) {
              return out;
            }
          }
          return O.none;
        };
      };
      exports.findLastMap = findLastMap;
      var findLastIndex = function(predicate) {
        return function(as) {
          for (var i2 = as.length - 1; i2 >= 0; i2--) {
            if (predicate(as[i2])) {
              return O.some(i2);
            }
          }
          return O.none;
        };
      };
      exports.findLastIndex = findLastIndex;
      exports.insertAt = // tslint:disable-next-line: deprecation
      RNEA.insertAt;
      var updateAt = function(i2, a) {
        return exports.modifyAt(i2, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var deleteAt = function(i2) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeDeleteAt(i2, as));
        };
      };
      exports.deleteAt = deleteAt;
      var modifyAt = function(i2, f) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeUpdateAt(i2, f(as[i2]), as));
        };
      };
      exports.modifyAt = modifyAt;
      var reverse = function(as) {
        return as.length <= 1 ? as : as.slice().reverse();
      };
      exports.reverse = reverse;
      var rights = function(as) {
        var r = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          var a = as[i2];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      exports.rights = rights;
      var lefts = function(as) {
        var r = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          var a = as[i2];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      exports.lefts = lefts;
      var sort = function(O2) {
        return function(as) {
          return as.length <= 1 ? as : as.slice().sort(O2.compare);
        };
      };
      exports.sort = sort;
      var zipWith = function(fa, fb, f) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i2 = 0; i2 < len; i2++) {
          fc[i2] = f(fa[i2], fb[i2]);
        }
        return fc;
      };
      exports.zipWith = zipWith;
      function zip(as, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip(bs2, as);
          };
        }
        return exports.zipWith(as, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip;
      var unzip = function(as) {
        var fa = [];
        var fb = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          fa[i2] = as[i2][0];
          fb[i2] = as[i2][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip;
      var prependAll = function(middle) {
        var f = RNEA.prependAll(middle);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : as;
        };
      };
      exports.prependAll = prependAll;
      var intersperse = function(middle) {
        var f = RNEA.intersperse(middle);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : as;
        };
      };
      exports.intersperse = intersperse;
      var rotate = function(n) {
        var f = RNEA.rotate(n);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : as;
        };
      };
      exports.rotate = rotate;
      function elem(E) {
        return function(a, as) {
          if (as === void 0) {
            var elemE_1 = elem(E);
            return function(as2) {
              return elemE_1(a, as2);
            };
          }
          var predicate = function(element) {
            return E.equals(element, a);
          };
          var i2 = 0;
          for (; i2 < as.length; i2++) {
            if (predicate(as[i2])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.elem = elem;
      var uniq = function(E) {
        var f = RNEA.uniq(E);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : as;
        };
      };
      exports.uniq = uniq;
      var sortBy = function(ords) {
        var f = RNEA.sortBy(ords);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : as;
        };
      };
      exports.sortBy = sortBy;
      var chop = function(f) {
        var g = RNEA.chop(f);
        return function(as) {
          return exports.isNonEmpty(as) ? g(as) : exports.empty;
        };
      };
      exports.chop = chop;
      var splitAt = function(n) {
        return function(as) {
          return n >= 1 && exports.isNonEmpty(as) ? RNEA.splitAt(n)(as) : exports.isEmpty(as) ? [as, exports.empty] : [exports.empty, as];
        };
      };
      exports.splitAt = splitAt;
      var chunksOf = function(n) {
        var f = RNEA.chunksOf(n);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : exports.empty;
        };
      };
      exports.chunksOf = chunksOf;
      function comprehension(input, f, g) {
        if (g === void 0) {
          g = function() {
            return true;
          };
        }
        var go = function(scope, input2) {
          return exports.isNonEmpty(input2) ? function_1.pipe(RNEA.head(input2), exports.chain(function(x) {
            return go(function_1.pipe(scope, exports.append(x)), RNEA.tail(input2));
          })) : g.apply(void 0, scope) ? [f.apply(void 0, scope)] : exports.empty;
        };
        return go(exports.empty, input);
      }
      exports.comprehension = comprehension;
      function union8(E) {
        var unionE = RNEA.union(E);
        return function(first, second) {
          if (second === void 0) {
            var unionE_1 = union8(E);
            return function(ys) {
              return unionE_1(ys, first);
            };
          }
          return exports.isNonEmpty(first) && exports.isNonEmpty(second) ? unionE(first, second) : exports.isNonEmpty(first) ? first : second;
        };
      }
      exports.union = union8;
      function intersection7(E) {
        var elemE = elem(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var intersectionE_1 = intersection7(E);
            return function(ys2) {
              return intersectionE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return elemE(a, ys);
          });
        };
      }
      exports.intersection = intersection7;
      function difference(E) {
        var elemE = elem(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var differenceE_1 = difference(E);
            return function(ys2) {
              return differenceE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return !elemE(a, ys);
          });
        };
      }
      exports.difference = difference;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.mapWithIndex(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _filter = function(fa, predicate) {
        return function_1.pipe(fa, exports.filter(predicate));
      };
      var _filterMap = function(fa, f) {
        return function_1.pipe(fa, exports.filterMap(f));
      };
      var _partition = function(fa, predicate) {
        return function_1.pipe(fa, exports.partition(predicate));
      };
      var _partitionMap = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMap(f));
      };
      var _partitionWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex));
      };
      var _partitionMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMapWithIndex(f));
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
      };
      var _filterMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.filterMapWithIndex(f));
      };
      var _filterWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex));
      };
      var _extend = function(fa, f) {
        return function_1.pipe(fa, exports.extend(f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var _wither = function(F) {
        var witherF = exports.wither(F);
        return function(fa, f) {
          return function_1.pipe(fa, witherF(f));
        };
      };
      var _wilt = function(F) {
        var wiltF = exports.wilt(F);
        return function(fa, f) {
          return function_1.pipe(fa, wiltF(f));
        };
      };
      exports.of = RNEA.of;
      var zero = function() {
        return exports.empty;
      };
      exports.zero = zero;
      var altW = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var ap = function(fa) {
        return exports.chain(function(f) {
          return function_1.pipe(fa, exports.map(f));
        });
      };
      exports.ap = ap;
      var chain = function(f) {
        return function(ma) {
          return function_1.pipe(ma, exports.chainWithIndex(function(_, a) {
            return f(a);
          }));
        };
      };
      exports.chain = chain;
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var map2 = function(f) {
        return function(fa) {
          return fa.map(function(a) {
            return f(a);
          });
        };
      };
      exports.map = map2;
      var mapWithIndex = function(f) {
        return function(fa) {
          return fa.map(function(a, i2) {
            return f(i2, a);
          });
        };
      };
      exports.mapWithIndex = mapWithIndex;
      var separate = function(fa) {
        var left = [];
        var right2 = [];
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var e2 = fa_1[_i];
          if (e2._tag === "Left") {
            left.push(e2.left);
          } else {
            right2.push(e2.right);
          }
        }
        return Separated_1.separated(left, right2);
      };
      exports.separate = separate;
      var filter = function(predicate) {
        return function(fa) {
          return fa.filter(predicate);
        };
      };
      exports.filter = filter;
      var filterMapWithIndex = function(f) {
        return function(fa) {
          var out = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var optionB = f(i2, fa[i2]);
            if (O.isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      exports.filterMapWithIndex = filterMapWithIndex;
      var filterMap = function(f) {
        return exports.filterMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      exports.filterMap = filterMap;
      exports.compact = /* @__PURE__ */ exports.filterMap(function_1.identity);
      var partition = function(predicate) {
        return exports.partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      exports.partition = partition;
      var partitionWithIndex = function(predicateWithIndex) {
        return function(fa) {
          var left = [];
          var right2 = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var a = fa[i2];
            if (predicateWithIndex(i2, a)) {
              right2.push(a);
            } else {
              left.push(a);
            }
          }
          return Separated_1.separated(left, right2);
        };
      };
      exports.partitionWithIndex = partitionWithIndex;
      var partitionMap = function(f) {
        return exports.partitionMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      exports.partitionMap = partitionMap;
      var partitionMapWithIndex = function(f) {
        return function(fa) {
          var left = [];
          var right2 = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var e2 = f(i2, fa[i2]);
            if (e2._tag === "Left") {
              left.push(e2.left);
            } else {
              right2.push(e2.right);
            }
          }
          return Separated_1.separated(left, right2);
        };
      };
      exports.partitionMapWithIndex = partitionMapWithIndex;
      var filterWithIndex = function(predicateWithIndex) {
        return function(fa) {
          return fa.filter(function(a, i2) {
            return predicateWithIndex(i2, a);
          });
        };
      };
      exports.filterWithIndex = filterWithIndex;
      var extend = function(f) {
        return function(wa) {
          return wa.map(function(_, i2) {
            return f(wa.slice(i2));
          });
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      var foldMapWithIndex = function(M) {
        return function(f) {
          return function(fa) {
            return fa.reduce(function(b, a, i2) {
              return M.concat(b, f(i2, a));
            }, M.empty);
          };
        };
      };
      exports.foldMapWithIndex = foldMapWithIndex;
      var reduce = function(b, f) {
        return exports.reduceWithIndex(b, function(_, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduce = reduce;
      var foldMap = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(f) {
          return foldMapWithIndexM(function(_, a) {
            return f(a);
          });
        };
      };
      exports.foldMap = foldMap;
      var reduceWithIndex = function(b, f) {
        return function(fa) {
          var len = fa.length;
          var out = b;
          for (var i2 = 0; i2 < len; i2++) {
            out = f(i2, out, fa[i2]);
          }
          return out;
        };
      };
      exports.reduceWithIndex = reduceWithIndex;
      var reduceRight = function(b, f) {
        return exports.reduceRightWithIndex(b, function(_, a, b2) {
          return f(a, b2);
        });
      };
      exports.reduceRight = reduceRight;
      var reduceRightWithIndex = function(b, f) {
        return function(fa) {
          return fa.reduceRight(function(b2, a, i2) {
            return f(i2, a, b2);
          }, b);
        };
      };
      exports.reduceRightWithIndex = reduceRightWithIndex;
      var traverse = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(f) {
          return traverseWithIndexF(function(_, a) {
            return f(a);
          });
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return function(ta) {
          return _reduce(ta, F.of(exports.zero()), function(fas, fa) {
            return F.ap(F.map(fas, function(as) {
              return function(a) {
                return function_1.pipe(as, exports.append(a));
              };
            }), fa);
          });
        };
      };
      exports.sequence = sequence;
      var traverseWithIndex = function(F) {
        return function(f) {
          return exports.reduceWithIndex(F.of(exports.zero()), function(i2, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return function_1.pipe(bs, exports.append(b));
              };
            }), f(i2, a));
          });
        };
      };
      exports.traverseWithIndex = traverseWithIndex;
      var wither = function(F) {
        var traverseF = exports.traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.compact);
          };
        };
      };
      exports.wither = wither;
      var wilt = function(F) {
        var traverseF = exports.traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.separate);
          };
        };
      };
      exports.wilt = wilt;
      var unfold = function(b, f) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f(bb);
          if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
          } else {
            break;
          }
        }
        return out;
      };
      exports.unfold = unfold;
      exports.URI = "ReadonlyArray";
      var getShow = function(S) {
        return {
          show: function(as) {
            return "[" + as.map(S.show).join(", ") + "]";
          }
        };
      };
      exports.getShow = getShow;
      var getSemigroup = function() {
        return {
          concat: function(first, second) {
            return exports.isEmpty(first) ? second : exports.isEmpty(second) ? first : first.concat(second);
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function() {
        return {
          concat: exports.getSemigroup().concat,
          empty: exports.empty
        };
      };
      exports.getMonoid = getMonoid;
      var getEq = function(E) {
        return Eq_1.fromEquals(function(xs, ys) {
          return xs.length === ys.length && xs.every(function(x, i2) {
            return E.equals(x, ys[i2]);
          });
        });
      };
      exports.getEq = getEq;
      var getOrd = function(O2) {
        return Ord_1.fromCompare(function(a, b) {
          var aLen = a.length;
          var bLen = b.length;
          var len = Math.min(aLen, bLen);
          for (var i2 = 0; i2 < len; i2++) {
            var ordering = O2.compare(a[i2], b[i2]);
            if (ordering !== 0) {
              return ordering;
            }
          }
          return N.Ord.compare(aLen, bLen);
        });
      };
      exports.getOrd = getOrd;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.Unfoldable = {
        URI: exports.URI,
        unfold: exports.unfold
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Alternative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        alt: _alt,
        zero: exports.zero
      };
      exports.Extend = {
        URI: exports.URI,
        map: _map2,
        extend: _extend
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverse: _traverse,
        sequence: exports.sequence,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Witherable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        wither: _wither,
        wilt: _wilt
      };
      exports.unsafeInsertAt = RNEA.unsafeInsertAt;
      var unsafeUpdateAt = function(i2, a, as) {
        return exports.isNonEmpty(as) ? RNEA.unsafeUpdateAt(i2, a, as) : as;
      };
      exports.unsafeUpdateAt = unsafeUpdateAt;
      var unsafeDeleteAt = function(i2, as) {
        var xs = as.slice();
        xs.splice(i2, 1);
        return xs;
      };
      exports.unsafeDeleteAt = unsafeDeleteAt;
      var toArray2 = function(as) {
        return as.slice();
      };
      exports.toArray = toArray2;
      var fromArray = function(as) {
        return exports.isEmpty(as) ? exports.empty : as.slice();
      };
      exports.fromArray = fromArray;
      exports.empty = RNEA.empty;
      var every = function(predicate) {
        return function(as) {
          return as.every(predicate);
        };
      };
      exports.every = every;
      var some = function(predicate) {
        return function(as) {
          return as.some(predicate);
        };
      };
      exports.some = some;
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.cons = RNEA.cons;
      exports.snoc = RNEA.snoc;
      exports.prependToAll = exports.prependAll;
      exports.readonlyArray = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        mapWithIndex: _mapWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        alt: _alt,
        zero: exports.zero,
        unfold: exports.unfold,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        extend: _extend,
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Array.js
  var require_Array = __commonJS({
    "../shared/node_modules/fp-ts/lib/Array.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.elem = exports.rotate = exports.intersperse = exports.prependAll = exports.unzip = exports.zip = exports.zipWith = exports.sort = exports.lefts = exports.rights = exports.reverse = exports.modifyAt = exports.deleteAt = exports.updateAt = exports.insertAt = exports.copy = exports.findLastIndex = exports.findLastMap = exports.findLast = exports.findFirstMap = exports.findFirst = exports.findIndex = exports.dropLeftWhile = exports.dropRight = exports.dropLeft = exports.spanLeft = exports.takeLeftWhile = exports.takeRight = exports.takeLeft = exports.init = exports.tail = exports.last = exports.head = exports.lookup = exports.isOutOfBound = exports.size = exports.isNonEmpty = exports.isEmpty = exports.scanRight = exports.scanLeft = exports.chainWithIndex = exports.foldRight = exports.matchRight = exports.foldLeft = exports.matchLeft = exports.replicate = exports.range = exports.makeBy = exports.append = exports.prepend = void 0;
      exports.flap = exports.Functor = exports.getOrd = exports.getEq = exports.getMonoid = exports.getSemigroup = exports.getShow = exports.URI = exports.unfold = exports.wilt = exports.wither = exports.traverseWithIndex = exports.sequence = exports.traverse = exports.reduceRightWithIndex = exports.reduceRight = exports.reduceWithIndex = exports.reduce = exports.foldMapWithIndex = exports.foldMap = exports.duplicate = exports.extend = exports.filterWithIndex = exports.alt = exports.altW = exports.partitionMapWithIndex = exports.partitionMap = exports.partitionWithIndex = exports.partition = exports.filter = exports.separate = exports.compact = exports.filterMap = exports.filterMapWithIndex = exports.mapWithIndex = exports.flatten = exports.chain = exports.ap = exports.map = exports.zero = exports.of = exports.difference = exports.intersection = exports.union = exports.comprehension = exports.chunksOf = exports.splitAt = exports.chop = exports.sortBy = exports.uniq = void 0;
      exports.array = exports.prependToAll = exports.snoc = exports.cons = exports.empty = exports.apS = exports.bind = exports.bindTo = exports.Do = exports.some = exports.every = exports.unsafeDeleteAt = exports.unsafeUpdateAt = exports.unsafeInsertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FoldableWithIndex = exports.Foldable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.Extend = exports.Alternative = exports.Alt = exports.Unfoldable = exports.Monad = exports.chainFirst = exports.Chain = exports.Applicative = exports.apSecond = exports.apFirst = exports.Apply = exports.FunctorWithIndex = exports.Pointed = void 0;
      var Apply_1 = require_Apply();
      var Chain_1 = require_Chain();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var NEA = __importStar(require_NonEmptyArray());
      var O = __importStar(require_Option());
      var RA = __importStar(require_ReadonlyArray());
      var Separated_1 = require_Separated();
      exports.prepend = NEA.prepend;
      exports.append = NEA.append;
      var makeBy = function(n, f) {
        return n <= 0 ? [] : NEA.makeBy(n, f);
      };
      exports.makeBy = makeBy;
      var range = function(start, end) {
        return start <= end ? exports.makeBy(end - start + 1, function(i2) {
          return start + i2;
        }) : [start];
      };
      exports.range = range;
      var replicate = function(n, a) {
        return exports.makeBy(n, function() {
          return a;
        });
      };
      exports.replicate = replicate;
      var matchLeft = function(onEmpty, onNonEmpty) {
        return function(as) {
          return exports.isNonEmpty(as) ? onNonEmpty(NEA.head(as), NEA.tail(as)) : onEmpty();
        };
      };
      exports.matchLeft = matchLeft;
      exports.foldLeft = exports.matchLeft;
      var matchRight = function(onEmpty, onNonEmpty) {
        return function(as) {
          return exports.isNonEmpty(as) ? onNonEmpty(NEA.init(as), NEA.last(as)) : onEmpty();
        };
      };
      exports.matchRight = matchRight;
      exports.foldRight = exports.matchRight;
      var chainWithIndex = function(f) {
        return function(as) {
          var out = [];
          for (var i2 = 0; i2 < as.length; i2++) {
            out.push.apply(out, f(i2, as[i2]));
          }
          return out;
        };
      };
      exports.chainWithIndex = chainWithIndex;
      var scanLeft = function(b, f) {
        return function(as) {
          var len = as.length;
          var out = new Array(len + 1);
          out[0] = b;
          for (var i2 = 0; i2 < len; i2++) {
            out[i2 + 1] = f(out[i2], as[i2]);
          }
          return out;
        };
      };
      exports.scanLeft = scanLeft;
      var scanRight = function(b, f) {
        return function(as) {
          var len = as.length;
          var out = new Array(len + 1);
          out[len] = b;
          for (var i2 = len - 1; i2 >= 0; i2--) {
            out[i2] = f(as[i2], out[i2 + 1]);
          }
          return out;
        };
      };
      exports.scanRight = scanRight;
      exports.isEmpty = RA.isEmpty;
      exports.isNonEmpty = NEA.isNonEmpty;
      var size = function(as) {
        return as.length;
      };
      exports.size = size;
      exports.isOutOfBound = NEA.isOutOfBound;
      exports.lookup = RA.lookup;
      exports.head = RA.head;
      exports.last = RA.last;
      var tail = function(as) {
        return exports.isNonEmpty(as) ? O.some(NEA.tail(as)) : O.none;
      };
      exports.tail = tail;
      var init = function(as) {
        return exports.isNonEmpty(as) ? O.some(NEA.init(as)) : O.none;
      };
      exports.init = init;
      var takeLeft = function(n) {
        return function(as) {
          return exports.isOutOfBound(n, as) ? exports.copy(as) : as.slice(0, n);
        };
      };
      exports.takeLeft = takeLeft;
      var takeRight = function(n) {
        return function(as) {
          return exports.isOutOfBound(n, as) ? exports.copy(as) : n === 0 ? [] : as.slice(-n);
        };
      };
      exports.takeRight = takeRight;
      function takeLeftWhile(predicate) {
        return function(as) {
          var out = [];
          for (var _i = 0, as_1 = as; _i < as_1.length; _i++) {
            var a = as_1[_i];
            if (!predicate(a)) {
              break;
            }
            out.push(a);
          }
          return out;
        };
      }
      exports.takeLeftWhile = takeLeftWhile;
      var spanLeftIndex = function(as, predicate) {
        var l2 = as.length;
        var i2 = 0;
        for (; i2 < l2; i2++) {
          if (!predicate(as[i2])) {
            break;
          }
        }
        return i2;
      };
      function spanLeft(predicate) {
        return function(as) {
          var _a = exports.splitAt(spanLeftIndex(as, predicate))(as), init2 = _a[0], rest = _a[1];
          return { init: init2, rest };
        };
      }
      exports.spanLeft = spanLeft;
      var dropLeft = function(n) {
        return function(as) {
          return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(n, as.length);
        };
      };
      exports.dropLeft = dropLeft;
      var dropRight = function(n) {
        return function(as) {
          return n <= 0 || exports.isEmpty(as) ? exports.copy(as) : n >= as.length ? [] : as.slice(0, as.length - n);
        };
      };
      exports.dropRight = dropRight;
      var dropLeftWhile = function(predicate) {
        return function(as) {
          return as.slice(spanLeftIndex(as, predicate));
        };
      };
      exports.dropLeftWhile = dropLeftWhile;
      exports.findIndex = RA.findIndex;
      function findFirst(predicate) {
        return RA.findFirst(predicate);
      }
      exports.findFirst = findFirst;
      exports.findFirstMap = RA.findFirstMap;
      function findLast(predicate) {
        return RA.findLast(predicate);
      }
      exports.findLast = findLast;
      exports.findLastMap = RA.findLastMap;
      exports.findLastIndex = RA.findLastIndex;
      var copy = function(as) {
        return as.slice();
      };
      exports.copy = copy;
      var insertAt = function(i2, a) {
        return function(as) {
          return i2 < 0 || i2 > as.length ? O.none : O.some(exports.unsafeInsertAt(i2, a, as));
        };
      };
      exports.insertAt = insertAt;
      var updateAt = function(i2, a) {
        return exports.modifyAt(i2, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var deleteAt = function(i2) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeDeleteAt(i2, as));
        };
      };
      exports.deleteAt = deleteAt;
      var modifyAt = function(i2, f) {
        return function(as) {
          return exports.isOutOfBound(i2, as) ? O.none : O.some(exports.unsafeUpdateAt(i2, f(as[i2]), as));
        };
      };
      exports.modifyAt = modifyAt;
      var reverse = function(as) {
        return exports.isEmpty(as) ? [] : as.slice().reverse();
      };
      exports.reverse = reverse;
      var rights = function(as) {
        var r = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          var a = as[i2];
          if (a._tag === "Right") {
            r.push(a.right);
          }
        }
        return r;
      };
      exports.rights = rights;
      var lefts = function(as) {
        var r = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          var a = as[i2];
          if (a._tag === "Left") {
            r.push(a.left);
          }
        }
        return r;
      };
      exports.lefts = lefts;
      var sort = function(O2) {
        return function(as) {
          return as.length <= 1 ? exports.copy(as) : as.slice().sort(O2.compare);
        };
      };
      exports.sort = sort;
      var zipWith = function(fa, fb, f) {
        var fc = [];
        var len = Math.min(fa.length, fb.length);
        for (var i2 = 0; i2 < len; i2++) {
          fc[i2] = f(fa[i2], fb[i2]);
        }
        return fc;
      };
      exports.zipWith = zipWith;
      function zip(as, bs) {
        if (bs === void 0) {
          return function(bs2) {
            return zip(bs2, as);
          };
        }
        return exports.zipWith(as, bs, function(a, b) {
          return [a, b];
        });
      }
      exports.zip = zip;
      var unzip = function(as) {
        var fa = [];
        var fb = [];
        for (var i2 = 0; i2 < as.length; i2++) {
          fa[i2] = as[i2][0];
          fb[i2] = as[i2][1];
        }
        return [fa, fb];
      };
      exports.unzip = unzip;
      var prependAll = function(middle) {
        var f = NEA.prependAll(middle);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : [];
        };
      };
      exports.prependAll = prependAll;
      var intersperse = function(middle) {
        var f = NEA.intersperse(middle);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : exports.copy(as);
        };
      };
      exports.intersperse = intersperse;
      var rotate = function(n) {
        var f = NEA.rotate(n);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : exports.copy(as);
        };
      };
      exports.rotate = rotate;
      exports.elem = RA.elem;
      var uniq = function(E) {
        var f = NEA.uniq(E);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : exports.copy(as);
        };
      };
      exports.uniq = uniq;
      var sortBy = function(ords) {
        var f = NEA.sortBy(ords);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : exports.copy(as);
        };
      };
      exports.sortBy = sortBy;
      var chop = function(f) {
        var g = NEA.chop(f);
        return function(as) {
          return exports.isNonEmpty(as) ? g(as) : [];
        };
      };
      exports.chop = chop;
      var splitAt = function(n) {
        return function(as) {
          return n >= 1 && exports.isNonEmpty(as) ? NEA.splitAt(n)(as) : exports.isEmpty(as) ? [exports.copy(as), []] : [[], exports.copy(as)];
        };
      };
      exports.splitAt = splitAt;
      var chunksOf = function(n) {
        var f = NEA.chunksOf(n);
        return function(as) {
          return exports.isNonEmpty(as) ? f(as) : [];
        };
      };
      exports.chunksOf = chunksOf;
      function comprehension(input, f, g) {
        if (g === void 0) {
          g = function() {
            return true;
          };
        }
        var go = function(scope, input2) {
          return exports.isNonEmpty(input2) ? function_1.pipe(NEA.head(input2), exports.chain(function(x) {
            return go(function_1.pipe(scope, exports.append(x)), NEA.tail(input2));
          })) : g.apply(void 0, scope) ? [f.apply(void 0, scope)] : [];
        };
        return go([], input);
      }
      exports.comprehension = comprehension;
      function union8(E) {
        var unionE = NEA.union(E);
        return function(first, second) {
          if (second === void 0) {
            var unionE_1 = union8(E);
            return function(ys) {
              return unionE_1(ys, first);
            };
          }
          return exports.isNonEmpty(first) && exports.isNonEmpty(second) ? unionE(first, second) : exports.isNonEmpty(first) ? exports.copy(first) : exports.copy(second);
        };
      }
      exports.union = union8;
      function intersection7(E) {
        var elemE = exports.elem(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var intersectionE_1 = intersection7(E);
            return function(ys2) {
              return intersectionE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return elemE(a, ys);
          });
        };
      }
      exports.intersection = intersection7;
      function difference(E) {
        var elemE = exports.elem(E);
        return function(xs, ys) {
          if (ys === void 0) {
            var differenceE_1 = difference(E);
            return function(ys2) {
              return differenceE_1(ys2, xs);
            };
          }
          return xs.filter(function(a) {
            return !elemE(a, ys);
          });
        };
      }
      exports.difference = difference;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.mapWithIndex(f));
      };
      var _ap = function(fab, fa) {
        return function_1.pipe(fab, exports.ap(fa));
      };
      var _chain = function(ma, f) {
        return function_1.pipe(ma, exports.chain(f));
      };
      var _filter = function(fa, predicate) {
        return function_1.pipe(fa, exports.filter(predicate));
      };
      var _filterMap = function(fa, f) {
        return function_1.pipe(fa, exports.filterMap(f));
      };
      var _partition = function(fa, predicate) {
        return function_1.pipe(fa, exports.partition(predicate));
      };
      var _partitionMap = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMap(f));
      };
      var _partitionWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, exports.partitionWithIndex(predicateWithIndex));
      };
      var _partitionMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMapWithIndex(f));
      };
      var _alt = function(fa, that) {
        return function_1.pipe(fa, exports.alt(that));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
      };
      var _filterMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.filterMapWithIndex(f));
      };
      var _filterWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, exports.filterWithIndex(predicateWithIndex));
      };
      var _extend = function(fa, f) {
        return function_1.pipe(fa, exports.extend(f));
      };
      var _traverse = function(F) {
        var traverseF = exports.traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var _wither = function(F) {
        var witherF = exports.wither(F);
        return function(fa, f) {
          return function_1.pipe(fa, witherF(f));
        };
      };
      var _wilt = function(F) {
        var wiltF = exports.wilt(F);
        return function(fa, f) {
          return function_1.pipe(fa, wiltF(f));
        };
      };
      exports.of = NEA.of;
      var zero = function() {
        return [];
      };
      exports.zero = zero;
      var map2 = function(f) {
        return function(fa) {
          return fa.map(function(a) {
            return f(a);
          });
        };
      };
      exports.map = map2;
      var ap = function(fa) {
        return exports.chain(function(f) {
          return function_1.pipe(fa, exports.map(f));
        });
      };
      exports.ap = ap;
      var chain = function(f) {
        return function(ma) {
          return function_1.pipe(ma, exports.chainWithIndex(function(_, a) {
            return f(a);
          }));
        };
      };
      exports.chain = chain;
      exports.flatten = /* @__PURE__ */ exports.chain(function_1.identity);
      var mapWithIndex = function(f) {
        return function(fa) {
          return fa.map(function(a, i2) {
            return f(i2, a);
          });
        };
      };
      exports.mapWithIndex = mapWithIndex;
      var filterMapWithIndex = function(f) {
        return function(fa) {
          var out = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var optionB = f(i2, fa[i2]);
            if (O.isSome(optionB)) {
              out.push(optionB.value);
            }
          }
          return out;
        };
      };
      exports.filterMapWithIndex = filterMapWithIndex;
      var filterMap = function(f) {
        return exports.filterMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      exports.filterMap = filterMap;
      exports.compact = /* @__PURE__ */ exports.filterMap(function_1.identity);
      var separate = function(fa) {
        var left = [];
        var right2 = [];
        for (var _i = 0, fa_1 = fa; _i < fa_1.length; _i++) {
          var e2 = fa_1[_i];
          if (e2._tag === "Left") {
            left.push(e2.left);
          } else {
            right2.push(e2.right);
          }
        }
        return Separated_1.separated(left, right2);
      };
      exports.separate = separate;
      var filter = function(predicate) {
        return function(fa) {
          return fa.filter(predicate);
        };
      };
      exports.filter = filter;
      var partition = function(predicate) {
        return exports.partitionWithIndex(function(_, a) {
          return predicate(a);
        });
      };
      exports.partition = partition;
      var partitionWithIndex = function(predicateWithIndex) {
        return function(fa) {
          var left = [];
          var right2 = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var a = fa[i2];
            if (predicateWithIndex(i2, a)) {
              right2.push(a);
            } else {
              left.push(a);
            }
          }
          return Separated_1.separated(left, right2);
        };
      };
      exports.partitionWithIndex = partitionWithIndex;
      var partitionMap = function(f) {
        return exports.partitionMapWithIndex(function(_, a) {
          return f(a);
        });
      };
      exports.partitionMap = partitionMap;
      var partitionMapWithIndex = function(f) {
        return function(fa) {
          var left = [];
          var right2 = [];
          for (var i2 = 0; i2 < fa.length; i2++) {
            var e2 = f(i2, fa[i2]);
            if (e2._tag === "Left") {
              left.push(e2.left);
            } else {
              right2.push(e2.right);
            }
          }
          return Separated_1.separated(left, right2);
        };
      };
      exports.partitionMapWithIndex = partitionMapWithIndex;
      var altW = function(that) {
        return function(fa) {
          return fa.concat(that());
        };
      };
      exports.altW = altW;
      exports.alt = exports.altW;
      var filterWithIndex = function(predicateWithIndex) {
        return function(fa) {
          return fa.filter(function(a, i2) {
            return predicateWithIndex(i2, a);
          });
        };
      };
      exports.filterWithIndex = filterWithIndex;
      var extend = function(f) {
        return function(wa) {
          return wa.map(function(_, i2) {
            return f(wa.slice(i2));
          });
        };
      };
      exports.extend = extend;
      exports.duplicate = /* @__PURE__ */ exports.extend(function_1.identity);
      exports.foldMap = RA.foldMap;
      exports.foldMapWithIndex = RA.foldMapWithIndex;
      exports.reduce = RA.reduce;
      exports.reduceWithIndex = RA.reduceWithIndex;
      exports.reduceRight = RA.reduceRight;
      exports.reduceRightWithIndex = RA.reduceRightWithIndex;
      var traverse = function(F) {
        var traverseWithIndexF = exports.traverseWithIndex(F);
        return function(f) {
          return traverseWithIndexF(function(_, a) {
            return f(a);
          });
        };
      };
      exports.traverse = traverse;
      var sequence = function(F) {
        return function(ta) {
          return _reduce(ta, F.of(exports.zero()), function(fas, fa) {
            return F.ap(F.map(fas, function(as) {
              return function(a) {
                return function_1.pipe(as, exports.append(a));
              };
            }), fa);
          });
        };
      };
      exports.sequence = sequence;
      var traverseWithIndex = function(F) {
        return function(f) {
          return exports.reduceWithIndex(F.of(exports.zero()), function(i2, fbs, a) {
            return F.ap(F.map(fbs, function(bs) {
              return function(b) {
                return function_1.pipe(bs, exports.append(b));
              };
            }), f(i2, a));
          });
        };
      };
      exports.traverseWithIndex = traverseWithIndex;
      var wither = function(F) {
        var traverseF = exports.traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.compact);
          };
        };
      };
      exports.wither = wither;
      var wilt = function(F) {
        var traverseF = exports.traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.separate);
          };
        };
      };
      exports.wilt = wilt;
      var unfold = function(b, f) {
        var out = [];
        var bb = b;
        while (true) {
          var mt = f(bb);
          if (O.isSome(mt)) {
            var _a = mt.value, a = _a[0], b_1 = _a[1];
            out.push(a);
            bb = b_1;
          } else {
            break;
          }
        }
        return out;
      };
      exports.unfold = unfold;
      exports.URI = "Array";
      exports.getShow = RA.getShow;
      var getSemigroup = function() {
        return {
          concat: function(first, second) {
            return first.concat(second);
          }
        };
      };
      exports.getSemigroup = getSemigroup;
      var getMonoid = function() {
        return {
          concat: exports.getSemigroup().concat,
          empty: []
        };
      };
      exports.getMonoid = getMonoid;
      exports.getEq = RA.getEq;
      exports.getOrd = RA.getOrd;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.Pointed = {
        URI: exports.URI,
        of: exports.of
      };
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Apply = {
        URI: exports.URI,
        map: _map2,
        ap: _ap
      };
      exports.apFirst = /* @__PURE__ */ Apply_1.apFirst(exports.Apply);
      exports.apSecond = /* @__PURE__ */ Apply_1.apSecond(exports.Apply);
      exports.Applicative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of
      };
      exports.Chain = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        chain: _chain
      };
      exports.chainFirst = /* @__PURE__ */ Chain_1.chainFirst(exports.Chain);
      exports.Monad = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain
      };
      exports.Unfoldable = {
        URI: exports.URI,
        unfold: exports.unfold
      };
      exports.Alt = {
        URI: exports.URI,
        map: _map2,
        alt: _alt
      };
      exports.Alternative = {
        URI: exports.URI,
        map: _map2,
        ap: _ap,
        of: exports.of,
        alt: _alt,
        zero: exports.zero
      };
      exports.Extend = {
        URI: exports.URI,
        map: _map2,
        extend: _extend
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverse: _traverse,
        sequence: exports.sequence,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Witherable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        wither: _wither,
        wilt: _wilt
      };
      exports.unsafeInsertAt = NEA.unsafeInsertAt;
      var unsafeUpdateAt = function(i2, a, as) {
        return exports.isNonEmpty(as) ? NEA.unsafeUpdateAt(i2, a, as) : [];
      };
      exports.unsafeUpdateAt = unsafeUpdateAt;
      var unsafeDeleteAt = function(i2, as) {
        var xs = as.slice();
        xs.splice(i2, 1);
        return xs;
      };
      exports.unsafeDeleteAt = unsafeDeleteAt;
      exports.every = RA.every;
      var some = function(predicate) {
        return function(as) {
          return as.some(predicate);
        };
      };
      exports.some = some;
      exports.Do = /* @__PURE__ */ exports.of({});
      exports.bindTo = /* @__PURE__ */ Functor_1.bindTo(exports.Functor);
      exports.bind = /* @__PURE__ */ Chain_1.bind(exports.Chain);
      exports.apS = /* @__PURE__ */ Apply_1.apS(exports.Apply);
      exports.empty = [];
      exports.cons = NEA.cons;
      exports.snoc = NEA.snoc;
      exports.prependToAll = exports.prependAll;
      exports.array = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate,
        map: _map2,
        ap: _ap,
        of: exports.of,
        chain: _chain,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        mapWithIndex: _mapWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        alt: _alt,
        zero: exports.zero,
        unfold: exports.unfold,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence: exports.sequence,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverseWithIndex: _traverseWithIndex,
        extend: _extend,
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/ReadonlyRecord.js
  var require_ReadonlyRecord = __commonJS({
    "../shared/node_modules/fp-ts/lib/ReadonlyRecord.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.foldMap = exports.reduce = exports.partitionMap = exports.partition = exports.filterMap = exports.filter = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.empty = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toReadonlyArray = exports.collect = exports.keys = exports.isEmpty = exports.size = exports.toRecord = exports.fromRecord = void 0;
      exports.readonlyRecord = exports.hasOwnProperty = exports.insertAt = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.FoldableWithIndex = exports.Foldable = exports.FunctorWithIndex = exports.flap = exports.Functor = void 0;
      var Eq_1 = require_Eq();
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var _ = __importStar(require_internal());
      var O = __importStar(require_Option());
      var Separated_1 = require_Separated();
      function fromRecord(r) {
        return Object.assign({}, r);
      }
      exports.fromRecord = fromRecord;
      function toRecord(r) {
        return Object.assign({}, r);
      }
      exports.toRecord = toRecord;
      var size = function(r) {
        return Object.keys(r).length;
      };
      exports.size = size;
      var isEmpty = function(r) {
        for (var k in r) {
          if (_.has.call(r, k)) {
            return false;
          }
        }
        return true;
      };
      exports.isEmpty = isEmpty;
      var keys = function(r) {
        return Object.keys(r).sort();
      };
      exports.keys = keys;
      var collect = function(f) {
        return function(r) {
          var out = [];
          for (var _i = 0, _a = exports.keys(r); _i < _a.length; _i++) {
            var key = _a[_i];
            out.push(f(key, r[key]));
          }
          return out;
        };
      };
      exports.collect = collect;
      exports.toReadonlyArray = /* @__PURE__ */ exports.collect(function(k, a) {
        return [k, a];
      });
      function toUnfoldable(U) {
        return function(r) {
          var sas = exports.toReadonlyArray(r);
          var len = sas.length;
          return U.unfold(0, function(b) {
            return b < len ? O.some([sas[b], b + 1]) : O.none;
          });
        };
      }
      exports.toUnfoldable = toUnfoldable;
      var upsertAt = function(k, a) {
        return function(r) {
          if (_.has.call(r, k) && r[k] === a) {
            return r;
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return out;
        };
      };
      exports.upsertAt = upsertAt;
      var has = function(k, r) {
        return _.has.call(r, k);
      };
      exports.has = has;
      function deleteAt(k) {
        return function(r) {
          if (!_.has.call(r, k)) {
            return r;
          }
          var out = Object.assign({}, r);
          delete out[k];
          return out;
        };
      }
      exports.deleteAt = deleteAt;
      var updateAt = function(k, a) {
        return function(r) {
          if (!exports.has(k, r)) {
            return O.none;
          }
          if (r[k] === a) {
            return O.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = a;
          return O.some(out);
        };
      };
      exports.updateAt = updateAt;
      var modifyAt = function(k, f) {
        return function(r) {
          if (!exports.has(k, r)) {
            return O.none;
          }
          var next = f(r[k]);
          if (next === r[k]) {
            return O.some(r);
          }
          var out = Object.assign({}, r);
          out[k] = next;
          return O.some(out);
        };
      };
      exports.modifyAt = modifyAt;
      function pop(k) {
        var deleteAtk = deleteAt(k);
        return function(r) {
          var oa = lookup(k, r);
          return O.isNone(oa) ? O.none : O.some([oa.value, deleteAtk(r)]);
        };
      }
      exports.pop = pop;
      function isSubrecord(E) {
        return function(me, that) {
          if (that === void 0) {
            var isSubrecordE_1 = isSubrecord(E);
            return function(that2) {
              return isSubrecordE_1(that2, me);
            };
          }
          for (var k in me) {
            if (!_.has.call(that, k) || !E.equals(me[k], that[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.isSubrecord = isSubrecord;
      function lookup(k, r) {
        if (r === void 0) {
          return function(r2) {
            return lookup(k, r2);
          };
        }
        return _.has.call(r, k) ? O.some(r[k]) : O.none;
      }
      exports.lookup = lookup;
      exports.empty = {};
      function mapWithIndex(f) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              out[k] = f(k, r[k]);
            }
          }
          return out;
        };
      }
      exports.mapWithIndex = mapWithIndex;
      function map2(f) {
        return mapWithIndex(function(_2, a) {
          return f(a);
        });
      }
      exports.map = map2;
      function reduceWithIndex(b, f) {
        return function(fa) {
          var out = b;
          var ks = exports.keys(fa);
          var len = ks.length;
          for (var i2 = 0; i2 < len; i2++) {
            var k = ks[i2];
            out = f(k, out, fa[k]);
          }
          return out;
        };
      }
      exports.reduceWithIndex = reduceWithIndex;
      function foldMapWithIndex(M) {
        return function(f) {
          return function(fa) {
            var out = M.empty;
            var ks = exports.keys(fa);
            var len = ks.length;
            for (var i2 = 0; i2 < len; i2++) {
              var k = ks[i2];
              out = M.concat(out, f(k, fa[k]));
            }
            return out;
          };
        };
      }
      exports.foldMapWithIndex = foldMapWithIndex;
      function reduceRightWithIndex(b, f) {
        return function(fa) {
          var out = b;
          var ks = exports.keys(fa);
          var len = ks.length;
          for (var i2 = len - 1; i2 >= 0; i2--) {
            var k = ks[i2];
            out = f(k, fa[k], out);
          }
          return out;
        };
      }
      exports.reduceRightWithIndex = reduceRightWithIndex;
      var singleton = function(k, a) {
        var _a;
        return _a = {}, _a[k] = a, _a;
      };
      exports.singleton = singleton;
      function traverseWithIndex(F) {
        return function(f) {
          return function(ta) {
            var ks = exports.keys(ta);
            if (ks.length === 0) {
              return F.of(exports.empty);
            }
            var fr = F.of({});
            var _loop_1 = function(key2) {
              fr = F.ap(F.map(fr, function(r) {
                return function(b) {
                  r[key2] = b;
                  return r;
                };
              }), f(key2, ta[key2]));
            };
            for (var _i = 0, ks_1 = ks; _i < ks_1.length; _i++) {
              var key = ks_1[_i];
              _loop_1(key);
            }
            return fr;
          };
        };
      }
      exports.traverseWithIndex = traverseWithIndex;
      function traverse(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(f) {
          return traverseWithIndexF(function(_2, a) {
            return f(a);
          });
        };
      }
      exports.traverse = traverse;
      function sequence(F) {
        return traverseWithIndex(F)(function(_2, a) {
          return a;
        });
      }
      exports.sequence = sequence;
      var wither = function(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.compact);
          };
        };
      };
      exports.wither = wither;
      var wilt = function(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.separate);
          };
        };
      };
      exports.wilt = wilt;
      function partitionMapWithIndex(f) {
        return function(r) {
          var left = {};
          var right2 = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var e2 = f(k, r[k]);
              switch (e2._tag) {
                case "Left":
                  left[k] = e2.left;
                  break;
                case "Right":
                  right2[k] = e2.right;
                  break;
              }
            }
          }
          return Separated_1.separated(left, right2);
        };
      }
      exports.partitionMapWithIndex = partitionMapWithIndex;
      function partitionWithIndex(predicateWithIndex) {
        return function(r) {
          var left = {};
          var right2 = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var a = r[k];
              if (predicateWithIndex(k, a)) {
                right2[k] = a;
              } else {
                left[k] = a;
              }
            }
          }
          return Separated_1.separated(left, right2);
        };
      }
      exports.partitionWithIndex = partitionWithIndex;
      function filterMapWithIndex(f) {
        return function(r) {
          var out = {};
          for (var k in r) {
            if (_.has.call(r, k)) {
              var ob = f(k, r[k]);
              if (_.isSome(ob)) {
                out[k] = ob.value;
              }
            }
          }
          return out;
        };
      }
      exports.filterMapWithIndex = filterMapWithIndex;
      function filterWithIndex(predicateWithIndex) {
        return function(fa) {
          var out = {};
          var changed = false;
          for (var key in fa) {
            if (_.has.call(fa, key)) {
              var a = fa[key];
              if (predicateWithIndex(key, a)) {
                out[key] = a;
              } else {
                changed = true;
              }
            }
          }
          return changed ? out : fa;
        };
      }
      exports.filterWithIndex = filterWithIndex;
      function fromFoldable(M, F) {
        var fromFoldableMapM = fromFoldableMap(M, F);
        return function(fka) {
          return fromFoldableMapM(fka, function_1.identity);
        };
      }
      exports.fromFoldable = fromFoldable;
      function fromFoldableMap(M, F) {
        return function(ta, f) {
          return F.reduce(ta, {}, function(r, a) {
            var _a = f(a), k = _a[0], b = _a[1];
            r[k] = _.has.call(r, k) ? M.concat(r[k], b) : b;
            return r;
          });
        };
      }
      exports.fromFoldableMap = fromFoldableMap;
      function every(predicate) {
        return function(r) {
          for (var k in r) {
            if (!predicate(r[k])) {
              return false;
            }
          }
          return true;
        };
      }
      exports.every = every;
      function some(predicate) {
        return function(r) {
          for (var k in r) {
            if (predicate(r[k])) {
              return true;
            }
          }
          return false;
        };
      }
      exports.some = some;
      function elem(E) {
        return function(a, fa) {
          if (fa === void 0) {
            var elemE_1 = elem(E);
            return function(fa2) {
              return elemE_1(a, fa2);
            };
          }
          for (var k in fa) {
            if (E.equals(fa[k], a)) {
              return true;
            }
          }
          return false;
        };
      }
      exports.elem = elem;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, map2(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, mapWithIndex(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _filter = function(fa, predicate) {
        return function_1.pipe(fa, exports.filter(predicate));
      };
      var _filterMap = function(fa, f) {
        return function_1.pipe(fa, exports.filterMap(f));
      };
      var _partition = function(fa, predicate) {
        return function_1.pipe(fa, exports.partition(predicate));
      };
      var _partitionMap = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMap(f));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, reduceRightWithIndex(b, f));
      };
      var _partitionMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, partitionMapWithIndex(f));
      };
      var _partitionWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      var _filterMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, filterMapWithIndex(f));
      };
      var _filterWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, filterWithIndex(predicateWithIndex));
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var _wither = function(F) {
        var witherF = exports.wither(F);
        return function(fa, f) {
          return function_1.pipe(fa, witherF(f));
        };
      };
      var _wilt = function(F) {
        var wiltF = exports.wilt(F);
        return function(fa, f) {
          return function_1.pipe(fa, wiltF(f));
        };
      };
      var filter = function(predicate) {
        return filterWithIndex(function(_2, a) {
          return predicate(a);
        });
      };
      exports.filter = filter;
      var filterMap = function(f) {
        return filterMapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.filterMap = filterMap;
      var partition = function(predicate) {
        return partitionWithIndex(function(_2, a) {
          return predicate(a);
        });
      };
      exports.partition = partition;
      var partitionMap = function(f) {
        return partitionMapWithIndex(function(_2, a) {
          return f(a);
        });
      };
      exports.partitionMap = partitionMap;
      var reduce = function(b, f) {
        return reduceWithIndex(b, function(_2, b2, a) {
          return f(b2, a);
        });
      };
      exports.reduce = reduce;
      var foldMap = function(M) {
        var foldMapWithIndexM = foldMapWithIndex(M);
        return function(f) {
          return foldMapWithIndexM(function(_2, a) {
            return f(a);
          });
        };
      };
      exports.foldMap = foldMap;
      var reduceRight = function(b, f) {
        return reduceRightWithIndex(b, function(_2, a, b2) {
          return f(a, b2);
        });
      };
      exports.reduceRight = reduceRight;
      var compact = function(r) {
        var out = {};
        for (var k in r) {
          if (_.has.call(r, k)) {
            var oa = r[k];
            if (_.isSome(oa)) {
              out[k] = oa.value;
            }
          }
        }
        return out;
      };
      exports.compact = compact;
      var separate = function(r) {
        var left = {};
        var right2 = {};
        for (var k in r) {
          if (_.has.call(r, k)) {
            var e2 = r[k];
            if (_.isLeft(e2)) {
              left[k] = e2.left;
            } else {
              right2[k] = e2.right;
            }
          }
        }
        return Separated_1.separated(left, right2);
      };
      exports.separate = separate;
      exports.URI = "ReadonlyRecord";
      function getShow(S) {
        return {
          show: function(r) {
            var elements = exports.collect(function(k, a) {
              return JSON.stringify(k) + ": " + S.show(a);
            })(r).join(", ");
            return elements === "" ? "{}" : "{ " + elements + " }";
          }
        };
      }
      exports.getShow = getShow;
      function getEq(E) {
        var isSubrecordE = isSubrecord(E);
        return Eq_1.fromEquals(function(x, y2) {
          return isSubrecordE(x)(y2) && isSubrecordE(y2)(x);
        });
      }
      exports.getEq = getEq;
      function getMonoid(S) {
        return {
          concat: function(first, second) {
            if (exports.isEmpty(first)) {
              return second;
            }
            if (exports.isEmpty(second)) {
              return first;
            }
            var r = Object.assign({}, first);
            for (var k in second) {
              if (_.has.call(second, k)) {
                r[k] = _.has.call(first, k) ? S.concat(first[k], second[k]) : second[k];
              }
            }
            return r;
          },
          empty: exports.empty
        };
      }
      exports.getMonoid = getMonoid;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverse: _traverse,
        sequence,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Witherable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      exports.insertAt = exports.upsertAt;
      function hasOwnProperty(k, r) {
        return _.has.call(r === void 0 ? this : r, k);
      }
      exports.hasOwnProperty = hasOwnProperty;
      exports.readonlyRecord = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        traverseWithIndex: _traverseWithIndex,
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/Record.js
  var require_Record = __commonJS({
    "../shared/node_modules/fp-ts/lib/Record.js"(exports) {
      "use strict";
      var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __importStar = exports && exports.__importStar || function(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.FunctorWithIndex = exports.flap = exports.Functor = exports.getMonoid = exports.getEq = exports.getShow = exports.URI = exports.separate = exports.compact = exports.reduceRight = exports.reduce = exports.partitionMap = exports.partition = exports.foldMap = exports.filterMap = exports.filter = exports.elem = exports.some = exports.every = exports.fromFoldableMap = exports.fromFoldable = exports.filterWithIndex = exports.filterMapWithIndex = exports.partitionWithIndex = exports.partitionMapWithIndex = exports.wilt = exports.wither = exports.sequence = exports.traverse = exports.traverseWithIndex = exports.singleton = exports.reduceRightWithIndex = exports.foldMapWithIndex = exports.reduceWithIndex = exports.map = exports.mapWithIndex = exports.lookup = exports.isSubrecord = exports.pop = exports.modifyAt = exports.updateAt = exports.deleteAt = exports.has = exports.upsertAt = exports.toUnfoldable = exports.toArray = exports.collect = exports.keys = exports.isEmpty = exports.size = void 0;
      exports.record = exports.hasOwnProperty = exports.insertAt = exports.empty = exports.Witherable = exports.TraversableWithIndex = exports.Traversable = exports.FilterableWithIndex = exports.Filterable = exports.Compactable = exports.FoldableWithIndex = exports.Foldable = void 0;
      var function_1 = require_function();
      var Functor_1 = require_Functor();
      var O = __importStar(require_Option());
      var RR = __importStar(require_ReadonlyRecord());
      exports.size = RR.size;
      exports.isEmpty = RR.isEmpty;
      exports.keys = RR.keys;
      var collect = function(f) {
        return function(r) {
          var out = [];
          for (var _i = 0, _a = exports.keys(r); _i < _a.length; _i++) {
            var key = _a[_i];
            out.push(f(key, r[key]));
          }
          return out;
        };
      };
      exports.collect = collect;
      exports.toArray = /* @__PURE__ */ exports.collect(function(k, a) {
        return [k, a];
      });
      function toUnfoldable(U) {
        return function(r) {
          var sas = exports.toArray(r);
          var len = sas.length;
          return U.unfold(0, function(b) {
            return b < len ? O.some([sas[b], b + 1]) : O.none;
          });
        };
      }
      exports.toUnfoldable = toUnfoldable;
      exports.upsertAt = RR.upsertAt;
      exports.has = RR.has;
      var _hasOwnProperty = Object.prototype.hasOwnProperty;
      function deleteAt(k) {
        return function(r) {
          if (!_hasOwnProperty.call(r, k)) {
            return r;
          }
          var out = Object.assign({}, r);
          delete out[k];
          return out;
        };
      }
      exports.deleteAt = deleteAt;
      var updateAt = function(k, a) {
        return exports.modifyAt(k, function() {
          return a;
        });
      };
      exports.updateAt = updateAt;
      var modifyAt = function(k, f) {
        return function(r) {
          if (!exports.has(k, r)) {
            return O.none;
          }
          var out = Object.assign({}, r);
          out[k] = f(r[k]);
          return O.some(out);
        };
      };
      exports.modifyAt = modifyAt;
      function pop(k) {
        var deleteAtk = deleteAt(k);
        return function(r) {
          var oa = exports.lookup(k, r);
          return O.isNone(oa) ? O.none : O.some([oa.value, deleteAtk(r)]);
        };
      }
      exports.pop = pop;
      exports.isSubrecord = RR.isSubrecord;
      exports.lookup = RR.lookup;
      exports.mapWithIndex = RR.mapWithIndex;
      exports.map = RR.map;
      exports.reduceWithIndex = RR.reduceWithIndex;
      exports.foldMapWithIndex = RR.foldMapWithIndex;
      exports.reduceRightWithIndex = RR.reduceRightWithIndex;
      exports.singleton = RR.singleton;
      function traverseWithIndex(F) {
        return RR.traverseWithIndex(F);
      }
      exports.traverseWithIndex = traverseWithIndex;
      function traverse(F) {
        return RR.traverse(F);
      }
      exports.traverse = traverse;
      function sequence(F) {
        return RR.sequence(F);
      }
      exports.sequence = sequence;
      var wither = function(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.compact);
          };
        };
      };
      exports.wither = wither;
      var wilt = function(F) {
        var traverseF = traverse(F);
        return function(f) {
          return function(fa) {
            return F.map(function_1.pipe(fa, traverseF(f)), exports.separate);
          };
        };
      };
      exports.wilt = wilt;
      exports.partitionMapWithIndex = RR.partitionMapWithIndex;
      function partitionWithIndex(predicateWithIndex) {
        return RR.partitionWithIndex(predicateWithIndex);
      }
      exports.partitionWithIndex = partitionWithIndex;
      exports.filterMapWithIndex = RR.filterMapWithIndex;
      function filterWithIndex(predicateWithIndex) {
        return RR.filterWithIndex(predicateWithIndex);
      }
      exports.filterWithIndex = filterWithIndex;
      function fromFoldable(M, F) {
        return RR.fromFoldable(M, F);
      }
      exports.fromFoldable = fromFoldable;
      function fromFoldableMap(M, F) {
        return RR.fromFoldableMap(M, F);
      }
      exports.fromFoldableMap = fromFoldableMap;
      exports.every = RR.every;
      exports.some = RR.some;
      exports.elem = RR.elem;
      var _map2 = function(fa, f) {
        return function_1.pipe(fa, exports.map(f));
      };
      var _mapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.mapWithIndex(f));
      };
      var _reduce = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduce(b, f));
      };
      var _foldMap = function(M) {
        var foldMapM = exports.foldMap(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapM(f));
        };
      };
      var _reduceRight = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRight(b, f));
      };
      var _traverse = function(F) {
        var traverseF = traverse(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseF(f));
        };
      };
      var _filter = function(fa, predicate) {
        return function_1.pipe(fa, exports.filter(predicate));
      };
      var _filterMap = function(fa, f) {
        return function_1.pipe(fa, exports.filterMap(f));
      };
      var _partition = function(fa, predicate) {
        return function_1.pipe(fa, exports.partition(predicate));
      };
      var _partitionMap = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMap(f));
      };
      var _reduceWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceWithIndex(b, f));
      };
      var _foldMapWithIndex = function(M) {
        var foldMapWithIndexM = exports.foldMapWithIndex(M);
        return function(fa, f) {
          return function_1.pipe(fa, foldMapWithIndexM(f));
        };
      };
      var _reduceRightWithIndex = function(fa, b, f) {
        return function_1.pipe(fa, exports.reduceRightWithIndex(b, f));
      };
      var _partitionMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.partitionMapWithIndex(f));
      };
      var _partitionWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, partitionWithIndex(predicateWithIndex));
      };
      var _filterMapWithIndex = function(fa, f) {
        return function_1.pipe(fa, exports.filterMapWithIndex(f));
      };
      var _filterWithIndex = function(fa, predicateWithIndex) {
        return function_1.pipe(fa, filterWithIndex(predicateWithIndex));
      };
      var _traverseWithIndex = function(F) {
        var traverseWithIndexF = traverseWithIndex(F);
        return function(ta, f) {
          return function_1.pipe(ta, traverseWithIndexF(f));
        };
      };
      var _wither = function(F) {
        var witherF = exports.wither(F);
        return function(fa, f) {
          return function_1.pipe(fa, witherF(f));
        };
      };
      var _wilt = function(F) {
        var wiltF = exports.wilt(F);
        return function(fa, f) {
          return function_1.pipe(fa, wiltF(f));
        };
      };
      exports.filter = RR.filter;
      exports.filterMap = RR.filterMap;
      exports.foldMap = RR.foldMap;
      exports.partition = RR.partition;
      exports.partitionMap = RR.partitionMap;
      exports.reduce = RR.reduce;
      exports.reduceRight = RR.reduceRight;
      exports.compact = RR.compact;
      exports.separate = RR.separate;
      exports.URI = "Record";
      exports.getShow = RR.getShow;
      exports.getEq = RR.getEq;
      exports.getMonoid = RR.getMonoid;
      exports.Functor = {
        URI: exports.URI,
        map: _map2
      };
      exports.flap = /*#_PURE_*/
      Functor_1.flap(exports.Functor);
      exports.FunctorWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex
      };
      exports.Foldable = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight
      };
      exports.FoldableWithIndex = {
        URI: exports.URI,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex
      };
      exports.Compactable = {
        URI: exports.URI,
        compact: exports.compact,
        separate: exports.separate
      };
      exports.Filterable = {
        URI: exports.URI,
        map: _map2,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap
      };
      exports.FilterableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex
      };
      exports.Traversable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence
      };
      exports.TraversableWithIndex = {
        URI: exports.URI,
        map: _map2,
        mapWithIndex: _mapWithIndex,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        traverse: _traverse,
        sequence,
        traverseWithIndex: _traverseWithIndex
      };
      exports.Witherable = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        wither: _wither,
        wilt: _wilt
      };
      exports.empty = {};
      exports.insertAt = exports.upsertAt;
      exports.hasOwnProperty = RR.hasOwnProperty;
      exports.record = {
        URI: exports.URI,
        map: _map2,
        reduce: _reduce,
        foldMap: _foldMap,
        reduceRight: _reduceRight,
        traverse: _traverse,
        sequence,
        compact: exports.compact,
        separate: exports.separate,
        filter: _filter,
        filterMap: _filterMap,
        partition: _partition,
        partitionMap: _partitionMap,
        mapWithIndex: _mapWithIndex,
        reduceWithIndex: _reduceWithIndex,
        foldMapWithIndex: _foldMapWithIndex,
        reduceRightWithIndex: _reduceRightWithIndex,
        filterMapWithIndex: _filterMapWithIndex,
        filterWithIndex: _filterWithIndex,
        partitionMapWithIndex: _partitionMapWithIndex,
        partitionWithIndex: _partitionWithIndex,
        traverseWithIndex: _traverseWithIndex,
        wither: _wither,
        wilt: _wilt
      };
    }
  });

  // ../shared/node_modules/fp-ts/lib/pipeable.js
  var require_pipeable = __commonJS({
    "../shared/node_modules/fp-ts/lib/pipeable.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.pipe = exports.pipeable = void 0;
      var function_1 = require_function();
      var isFunctor = function(I) {
        return typeof I.map === "function";
      };
      var isContravariant = function(I) {
        return typeof I.contramap === "function";
      };
      var isFunctorWithIndex = function(I) {
        return typeof I.mapWithIndex === "function";
      };
      var isApply = function(I) {
        return typeof I.ap === "function";
      };
      var isChain = function(I) {
        return typeof I.chain === "function";
      };
      var isBifunctor = function(I) {
        return typeof I.bimap === "function";
      };
      var isExtend = function(I) {
        return typeof I.extend === "function";
      };
      var isFoldable = function(I) {
        return typeof I.reduce === "function";
      };
      var isFoldableWithIndex = function(I) {
        return typeof I.reduceWithIndex === "function";
      };
      var isAlt = function(I) {
        return typeof I.alt === "function";
      };
      var isCompactable = function(I) {
        return typeof I.compact === "function";
      };
      var isFilterable = function(I) {
        return typeof I.filter === "function";
      };
      var isFilterableWithIndex = function(I) {
        return typeof I.filterWithIndex === "function";
      };
      var isProfunctor = function(I) {
        return typeof I.promap === "function";
      };
      var isSemigroupoid = function(I) {
        return typeof I.compose === "function";
      };
      var isMonadThrow = function(I) {
        return typeof I.throwError === "function";
      };
      function pipeable(I) {
        var r = {};
        if (isFunctor(I)) {
          var map2 = function(f) {
            return function(fa) {
              return I.map(fa, f);
            };
          };
          r.map = map2;
        }
        if (isContravariant(I)) {
          var contramap = function(f) {
            return function(fa) {
              return I.contramap(fa, f);
            };
          };
          r.contramap = contramap;
        }
        if (isFunctorWithIndex(I)) {
          var mapWithIndex = function(f) {
            return function(fa) {
              return I.mapWithIndex(fa, f);
            };
          };
          r.mapWithIndex = mapWithIndex;
        }
        if (isApply(I)) {
          var ap = function(fa) {
            return function(fab) {
              return I.ap(fab, fa);
            };
          };
          var apFirst = function(fb) {
            return function(fa) {
              return I.ap(I.map(fa, function(a) {
                return function() {
                  return a;
                };
              }), fb);
            };
          };
          r.ap = ap;
          r.apFirst = apFirst;
          r.apSecond = function(fb) {
            return function(fa) {
              return I.ap(I.map(fa, function() {
                return function(b) {
                  return b;
                };
              }), fb);
            };
          };
        }
        if (isChain(I)) {
          var chain = function(f) {
            return function(ma) {
              return I.chain(ma, f);
            };
          };
          var chainFirst = function(f) {
            return function(ma) {
              return I.chain(ma, function(a) {
                return I.map(f(a), function() {
                  return a;
                });
              });
            };
          };
          var flatten = function(mma) {
            return I.chain(mma, function_1.identity);
          };
          r.chain = chain;
          r.chainFirst = chainFirst;
          r.flatten = flatten;
        }
        if (isBifunctor(I)) {
          var bimap = function(f, g) {
            return function(fa) {
              return I.bimap(fa, f, g);
            };
          };
          var mapLeft = function(f) {
            return function(fa) {
              return I.mapLeft(fa, f);
            };
          };
          r.bimap = bimap;
          r.mapLeft = mapLeft;
        }
        if (isExtend(I)) {
          var extend = function(f) {
            return function(wa) {
              return I.extend(wa, f);
            };
          };
          var duplicate = function(wa) {
            return I.extend(wa, function_1.identity);
          };
          r.extend = extend;
          r.duplicate = duplicate;
        }
        if (isFoldable(I)) {
          var reduce = function(b, f) {
            return function(fa) {
              return I.reduce(fa, b, f);
            };
          };
          var foldMap = function(M) {
            var foldMapM = I.foldMap(M);
            return function(f) {
              return function(fa) {
                return foldMapM(fa, f);
              };
            };
          };
          var reduceRight = function(b, f) {
            return function(fa) {
              return I.reduceRight(fa, b, f);
            };
          };
          r.reduce = reduce;
          r.foldMap = foldMap;
          r.reduceRight = reduceRight;
        }
        if (isFoldableWithIndex(I)) {
          var reduceWithIndex = function(b, f) {
            return function(fa) {
              return I.reduceWithIndex(fa, b, f);
            };
          };
          var foldMapWithIndex = function(M) {
            var foldMapM = I.foldMapWithIndex(M);
            return function(f) {
              return function(fa) {
                return foldMapM(fa, f);
              };
            };
          };
          var reduceRightWithIndex = function(b, f) {
            return function(fa) {
              return I.reduceRightWithIndex(fa, b, f);
            };
          };
          r.reduceWithIndex = reduceWithIndex;
          r.foldMapWithIndex = foldMapWithIndex;
          r.reduceRightWithIndex = reduceRightWithIndex;
        }
        if (isAlt(I)) {
          var alt = function(that) {
            return function(fa) {
              return I.alt(fa, that);
            };
          };
          r.alt = alt;
        }
        if (isCompactable(I)) {
          r.compact = I.compact;
          r.separate = I.separate;
        }
        if (isFilterable(I)) {
          var filter = function(predicate) {
            return function(fa) {
              return I.filter(fa, predicate);
            };
          };
          var filterMap = function(f) {
            return function(fa) {
              return I.filterMap(fa, f);
            };
          };
          var partition = function(predicate) {
            return function(fa) {
              return I.partition(fa, predicate);
            };
          };
          var partitionMap = function(f) {
            return function(fa) {
              return I.partitionMap(fa, f);
            };
          };
          r.filter = filter;
          r.filterMap = filterMap;
          r.partition = partition;
          r.partitionMap = partitionMap;
        }
        if (isFilterableWithIndex(I)) {
          var filterWithIndex = function(predicateWithIndex) {
            return function(fa) {
              return I.filterWithIndex(fa, predicateWithIndex);
            };
          };
          var filterMapWithIndex = function(f) {
            return function(fa) {
              return I.filterMapWithIndex(fa, f);
            };
          };
          var partitionWithIndex = function(predicateWithIndex) {
            return function(fa) {
              return I.partitionWithIndex(fa, predicateWithIndex);
            };
          };
          var partitionMapWithIndex = function(f) {
            return function(fa) {
              return I.partitionMapWithIndex(fa, f);
            };
          };
          r.filterWithIndex = filterWithIndex;
          r.filterMapWithIndex = filterMapWithIndex;
          r.partitionWithIndex = partitionWithIndex;
          r.partitionMapWithIndex = partitionMapWithIndex;
        }
        if (isProfunctor(I)) {
          var promap = function(f, g) {
            return function(fa) {
              return I.promap(fa, f, g);
            };
          };
          r.promap = promap;
        }
        if (isSemigroupoid(I)) {
          var compose = function(that) {
            return function(fa) {
              return I.compose(fa, that);
            };
          };
          r.compose = compose;
        }
        if (isMonadThrow(I)) {
          var fromOption = function(onNone) {
            return function(ma) {
              return ma._tag === "None" ? I.throwError(onNone()) : I.of(ma.value);
            };
          };
          var fromEither = function(ma) {
            return ma._tag === "Left" ? I.throwError(ma.left) : I.of(ma.right);
          };
          var fromPredicate = function(predicate, onFalse) {
            return function(a) {
              return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
            };
          };
          var filterOrElse = function(predicate, onFalse) {
            return function(ma) {
              return I.chain(ma, function(a) {
                return predicate(a) ? I.of(a) : I.throwError(onFalse(a));
              });
            };
          };
          r.fromOption = fromOption;
          r.fromEither = fromEither;
          r.fromPredicate = fromPredicate;
          r.filterOrElse = filterOrElse;
        }
        return r;
      }
      exports.pipeable = pipeable;
      exports.pipe = function_1.pipe;
    }
  });

  // ../shared/node_modules/io-ts-reporters/target/src/utils.js
  var require_utils = __commonJS({
    "../shared/node_modules/io-ts-reporters/target/src/utils.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.takeUntil = void 0;
      var takeUntil = function(predicate) {
        return function(as) {
          var init = [];
          for (var i2 = 0; i2 < as.length; i2++) {
            init[i2] = as[i2];
            if (predicate(as[i2])) {
              return init;
            }
          }
          return init;
        };
      };
      exports.takeUntil = takeUntil;
    }
  });

  // ../shared/node_modules/io-ts-reporters/target/src/index.js
  var require_src = __commonJS({
    "../shared/node_modules/io-ts-reporters/target/src/index.js"(exports) {
      "use strict";
      Object.defineProperty(exports, "__esModule", { value: true });
      exports.reporter = exports.formatValidationErrors = exports.formatValidationError = exports.TYPE_MAX_LEN = void 0;
      var A = require_Array();
      var E = require_Either();
      var NEA = require_NonEmptyArray();
      var O = require_Option();
      var R = require_Record();
      var pipeable_1 = require_pipeable();
      var t14 = require_lib();
      var utils_1 = require_utils();
      var isUnionType = function(_a) {
        var type11 = _a.type;
        return type11 instanceof t14.UnionType;
      };
      var jsToString = function(value) {
        return value === void 0 ? "undefined" : JSON.stringify(value);
      };
      var keyPath = function(ctx) {
        return ctx.map(function(c2) {
          return c2.key;
        }).filter(Boolean).join(".");
      };
      var getErrorFromCtx = function(validation) {
        return A.last(validation.context);
      };
      var getValidationContext = function(validation) {
        return validation.context;
      };
      exports.TYPE_MAX_LEN = 160;
      var truncateType = function(type11, options) {
        if (options === void 0) {
          options = {};
        }
        var _a = options.truncateLongTypes, truncateLongTypes = _a === void 0 ? true : _a;
        if (truncateLongTypes && type11.length > exports.TYPE_MAX_LEN) {
          return type11.slice(0, exports.TYPE_MAX_LEN - 3) + "...";
        }
        return type11;
      };
      var errorMessageSimple = function(expectedType, path, error, options) {
        return [
          "Expecting " + truncateType(expectedType, options),
          path === "" ? "" : "at " + path,
          "but instead got: " + jsToString(error.value),
          error.message ? "(" + error.message + ")" : ""
        ].filter(Boolean).join(" ");
      };
      var errorMessageUnion = function(expectedTypes, path, value, options) {
        return [
          "Expecting one of:\n",
          expectedTypes.map(function(type11) {
            return "    " + truncateType(type11, options);
          }).join("\n"),
          path === "" ? "\n" : "\nat " + path + " ",
          "but instead got: " + jsToString(value)
        ].filter(Boolean).join("");
      };
      var findExpectedType = function(ctx) {
        return pipeable_1.pipe(ctx, A.findIndex(isUnionType), O.chain(function(n) {
          return A.lookup(n + 1, ctx);
        }));
      };
      var formatValidationErrorOfUnion = function(path, errors, options) {
        var expectedTypes = pipeable_1.pipe(errors, A.map(getValidationContext), A.map(findExpectedType), A.compact);
        var value = pipeable_1.pipe(expectedTypes, A.head, O.map(function(v) {
          return v.actual;
        }), O.getOrElse(function() {
          return void 0;
        }));
        var expected = expectedTypes.map(function(_a) {
          var type11 = _a.type;
          return type11.name;
        });
        return expected.length > 0 ? O.some(errorMessageUnion(expected, path, value, options)) : O.none;
      };
      var formatValidationCommonError = function(path, error, options) {
        return pipeable_1.pipe(error, getErrorFromCtx, O.map(function(errorContext) {
          return errorMessageSimple(errorContext.type.name, path, error, options);
        }));
      };
      var groupByKey = NEA.groupBy(function(error) {
        return pipeable_1.pipe(error.context, utils_1.takeUntil(isUnionType), keyPath);
      });
      var format = function(path, errors, options) {
        return NEA.tail(errors).length > 0 ? formatValidationErrorOfUnion(path, errors, options) : formatValidationCommonError(path, NEA.head(errors), options);
      };
      var formatValidationError = function(error, options) {
        return formatValidationCommonError(keyPath(error.context), error, options);
      };
      exports.formatValidationError = formatValidationError;
      var formatValidationErrors = function(errors, options) {
        return pipeable_1.pipe(errors, groupByKey, R.mapWithIndex(function(path, errors2) {
          return format(path, errors2, options);
        }), R.compact, R.toArray, A.map(function(_a) {
          var _key = _a[0], error = _a[1];
          return error;
        }));
      };
      exports.formatValidationErrors = formatValidationErrors;
      var reporter2 = function(validation, options) {
        return pipeable_1.pipe(validation, E.mapLeft(function(errors) {
          return exports.formatValidationErrors(errors, options);
        }), E.fold(function(errors) {
          return errors;
        }, function() {
          return [];
        }));
      };
      exports.reporter = reporter2;
      var prettyReporter = { report: exports.reporter };
      exports.default = prettyReporter;
    }
  });

  // ../shared/node_modules/lodash/_defineProperty.js
  var require_defineProperty = __commonJS({
    "../shared/node_modules/lodash/_defineProperty.js"(exports, module) {
      var getNative = require_getNative();
      var defineProperty = function() {
        try {
          var func = getNative(Object, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e2) {
        }
      }();
      module.exports = defineProperty;
    }
  });

  // ../shared/node_modules/lodash/_baseAssignValue.js
  var require_baseAssignValue = __commonJS({
    "../shared/node_modules/lodash/_baseAssignValue.js"(exports, module) {
      var defineProperty = require_defineProperty();
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      module.exports = baseAssignValue;
    }
  });

  // ../shared/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../shared/node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // ../shared/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../shared/node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type11 = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type11 == "number" || type11 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
    }
  });

  // ../shared/node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "../shared/node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject2 = require_isObject();
      var toKey = require_toKey();
      function baseSet(object, path, value, customizer) {
        if (!isObject2(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : void 0;
            if (newValue === void 0) {
              newValue = isObject2(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      module.exports = baseSet;
    }
  });

  // ../shared/node_modules/lodash/set.js
  var require_set = __commonJS({
    "../shared/node_modules/lodash/set.js"(exports, module) {
      var baseSet = require_baseSet();
      function set4(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      module.exports = set4;
    }
  });

  // ../shared/node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "../shared/node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t14, e2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t14 = "undefined" != typeof globalThis ? globalThis : t14 || self).dayjs = e2();
      }(exports, function() {
        "use strict";
        var t14 = 1e3, e2 = 6e4, n = 36e5, r = "millisecond", i2 = "second", s2 = "minute", u = "hour", a = "day", o = "week", f = "month", h2 = "quarter", c2 = "year", d = "date", $ = "Invalid Date", l2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t15, e3, n2) {
          var r2 = String(t15);
          return !r2 || r2.length >= e3 ? t15 : "" + Array(e3 + 1 - r2.length).join(n2) + t15;
        }, g = { s: m, z: function(t15) {
          var e3 = -t15.utcOffset(), n2 = Math.abs(e3), r2 = Math.floor(n2 / 60), i3 = n2 % 60;
          return (e3 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i3, 2, "0");
        }, m: function t15(e3, n2) {
          if (e3.date() < n2.date()) return -t15(n2, e3);
          var r2 = 12 * (n2.year() - e3.year()) + (n2.month() - e3.month()), i3 = e3.clone().add(r2, f), s3 = n2 - i3 < 0, u2 = e3.clone().add(r2 + (s3 ? -1 : 1), f);
          return +(-(r2 + (n2 - i3) / (s3 ? i3 - u2 : u2 - i3)) || 0);
        }, a: function(t15) {
          return t15 < 0 ? Math.ceil(t15) || 0 : Math.floor(t15);
        }, p: function(t15) {
          return { M: f, y: c2, w: o, d: a, D: d, h: u, m: s2, s: i2, ms: r, Q: h2 }[t15] || String(t15 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t15) {
          return void 0 === t15;
        } }, v = "en", D = {};
        D[v] = M;
        var p = function(t15) {
          return t15 instanceof _;
        }, S = function t15(e3, n2, r2) {
          var i3;
          if (!e3) return v;
          if ("string" == typeof e3) {
            var s3 = e3.toLowerCase();
            D[s3] && (i3 = s3), n2 && (D[s3] = n2, i3 = s3);
            var u2 = e3.split("-");
            if (!i3 && u2.length > 1) return t15(u2[0]);
          } else {
            var a2 = e3.name;
            D[a2] = e3, i3 = a2;
          }
          return !r2 && i3 && (v = i3), i3 || !r2 && v;
        }, w = function(t15, e3) {
          if (p(t15)) return t15.clone();
          var n2 = "object" == typeof e3 ? e3 : {};
          return n2.date = t15, n2.args = arguments, new _(n2);
        }, O = g;
        O.l = S, O.i = p, O.w = function(t15, e3) {
          return w(t15, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _ = function() {
          function M2(t15) {
            this.$L = S(t15.locale, null, true), this.parse(t15);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t15) {
            this.$d = function(t16) {
              var e3 = t16.date, n2 = t16.utc;
              if (null === e3) return /* @__PURE__ */ new Date(NaN);
              if (O.u(e3)) return /* @__PURE__ */ new Date();
              if (e3 instanceof Date) return new Date(e3);
              if ("string" == typeof e3 && !/Z$/i.test(e3)) {
                var r2 = e3.match(l2);
                if (r2) {
                  var i3 = r2[2] - 1 || 0, s3 = (r2[7] || "0").substring(0, 3);
                  return n2 ? new Date(Date.UTC(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3)) : new Date(r2[1], i3, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s3);
                }
              }
              return new Date(e3);
            }(t15), this.$x = t15.x || {}, this.init();
          }, m2.init = function() {
            var t15 = this.$d;
            this.$y = t15.getFullYear(), this.$M = t15.getMonth(), this.$D = t15.getDate(), this.$W = t15.getDay(), this.$H = t15.getHours(), this.$m = t15.getMinutes(), this.$s = t15.getSeconds(), this.$ms = t15.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === $);
          }, m2.isSame = function(t15, e3) {
            var n2 = w(t15);
            return this.startOf(e3) <= n2 && n2 <= this.endOf(e3);
          }, m2.isAfter = function(t15, e3) {
            return w(t15) < this.startOf(e3);
          }, m2.isBefore = function(t15, e3) {
            return this.endOf(e3) < w(t15);
          }, m2.$g = function(t15, e3, n2) {
            return O.u(t15) ? this[e3] : this.set(n2, t15);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t15, e3) {
            var n2 = this, r2 = !!O.u(e3) || e3, h3 = O.p(t15), $2 = function(t16, e4) {
              var i3 = O.w(n2.$u ? Date.UTC(n2.$y, e4, t16) : new Date(n2.$y, e4, t16), n2);
              return r2 ? i3 : i3.endOf(a);
            }, l3 = function(t16, e4) {
              return O.w(n2.toDate()[t16].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n2);
            }, y3 = this.$W, M3 = this.$M, m3 = this.$D, g2 = "set" + (this.$u ? "UTC" : "");
            switch (h3) {
              case c2:
                return r2 ? $2(1, 0) : $2(31, 11);
              case f:
                return r2 ? $2(1, M3) : $2(0, M3 + 1);
              case o:
                var v2 = this.$locale().weekStart || 0, D2 = (y3 < v2 ? y3 + 7 : y3) - v2;
                return $2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
              case a:
              case d:
                return l3(g2 + "Hours", 0);
              case u:
                return l3(g2 + "Minutes", 1);
              case s2:
                return l3(g2 + "Seconds", 2);
              case i2:
                return l3(g2 + "Milliseconds", 3);
              default:
                return this.clone();
            }
          }, m2.endOf = function(t15) {
            return this.startOf(t15, false);
          }, m2.$set = function(t15, e3) {
            var n2, o2 = O.p(t15), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h3 + "Date", n2[d] = h3 + "Date", n2[f] = h3 + "Month", n2[c2] = h3 + "FullYear", n2[u] = h3 + "Hours", n2[s2] = h3 + "Minutes", n2[i2] = h3 + "Seconds", n2[r] = h3 + "Milliseconds", n2)[o2], l3 = o2 === a ? this.$D + (e3 - this.$W) : e3;
            if (o2 === f || o2 === c2) {
              var y3 = this.clone().set(d, 1);
              y3.$d[$2](l3), y3.init(), this.$d = y3.set(d, Math.min(this.$D, y3.daysInMonth())).$d;
            } else $2 && this.$d[$2](l3);
            return this.init(), this;
          }, m2.set = function(t15, e3) {
            return this.clone().$set(t15, e3);
          }, m2.get = function(t15) {
            return this[O.p(t15)]();
          }, m2.add = function(r2, h3) {
            var d2, $2 = this;
            r2 = Number(r2);
            var l3 = O.p(h3), y3 = function(t15) {
              var e3 = w($2);
              return O.w(e3.date(e3.date() + Math.round(t15 * r2)), $2);
            };
            if (l3 === f) return this.set(f, this.$M + r2);
            if (l3 === c2) return this.set(c2, this.$y + r2);
            if (l3 === a) return y3(1);
            if (l3 === o) return y3(7);
            var M3 = (d2 = {}, d2[s2] = e2, d2[u] = n, d2[i2] = t14, d2)[l3] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t15, e3) {
            return this.add(-1 * t15, e3);
          }, m2.format = function(t15) {
            var e3 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || $;
            var r2 = t15 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O.z(this), s3 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h3 = function(t16, n3, i4, s4) {
              return t16 && (t16[n3] || t16(e3, r2)) || i4[n3].slice(0, s4);
            }, c3 = function(t16) {
              return O.s(s3 % 12 || 12, t16, "0");
            }, d2 = n2.meridiem || function(t16, e4, n3) {
              var r3 = t16 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h3(n2.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n2.weekdaysMin, this.$W, o2, 2), ddd: h3(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s3), HH: O.s(s3, 2, "0"), h: c3(1), hh: c3(2), a: d2(s3, u2, true), A: d2(s3, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i3 };
            return r2.replace(y2, function(t16, e4) {
              return e4 || l3[t16] || i3.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, $2) {
            var l3, y3 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e2, g2 = this - M3, v2 = O.m(this, M3);
            return v2 = (l3 = {}, l3[c2] = v2 / 12, l3[f] = v2, l3[h2] = v2 / 3, l3[o] = (g2 - m3) / 6048e5, l3[a] = (g2 - m3) / 864e5, l3[u] = g2 / n, l3[s2] = g2 / e2, l3[i2] = g2 / t14, l3)[y3] || g2, $2 ? v2 : O.a(v2);
          }, m2.daysInMonth = function() {
            return this.endOf(f).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t15, e3) {
            if (!t15) return this.$L;
            var n2 = this.clone(), r2 = S(t15, e3, true);
            return r2 && (n2.$L = r2), n2;
          }, m2.clone = function() {
            return O.w(this.$d, this);
          }, m2.toDate = function() {
            return new Date(this.valueOf());
          }, m2.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
          }, m2.toISOString = function() {
            return this.$d.toISOString();
          }, m2.toString = function() {
            return this.$d.toUTCString();
          }, M2;
        }(), T = _.prototype;
        return w.prototype = T, [["$ms", r], ["$s", i2], ["$m", s2], ["$H", u], ["$W", a], ["$M", f], ["$y", c2], ["$D", d]].forEach(function(t15) {
          T[t15[1]] = function(e3) {
            return this.$g(e3, t15[0], t15[1]);
          };
        }), w.extend = function(t15, e3) {
          return t15.$i || (t15(e3, _, w), t15.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t15) {
          return w(1e3 * t15);
        }, w.en = D[v], w.Ls = D, w.p = {}, w;
      });
    }
  });

  // ../shared/node_modules/lodash/now.js
  var require_now = __commonJS({
    "../shared/node_modules/lodash/now.js"(exports, module) {
      var root = require_root();
      var now = function() {
        return root.Date.now();
      };
      module.exports = now;
    }
  });

  // ../shared/node_modules/lodash/_trimmedEndIndex.js
  var require_trimmedEndIndex = __commonJS({
    "../shared/node_modules/lodash/_trimmedEndIndex.js"(exports, module) {
      var reWhitespace = /\s/;
      function trimmedEndIndex(string11) {
        var index = string11.length;
        while (index-- && reWhitespace.test(string11.charAt(index))) {
        }
        return index;
      }
      module.exports = trimmedEndIndex;
    }
  });

  // ../shared/node_modules/lodash/_baseTrim.js
  var require_baseTrim = __commonJS({
    "../shared/node_modules/lodash/_baseTrim.js"(exports, module) {
      var trimmedEndIndex = require_trimmedEndIndex();
      var reTrimStart = /^\s+/;
      function baseTrim(string11) {
        return string11 ? string11.slice(0, trimmedEndIndex(string11) + 1).replace(reTrimStart, "") : string11;
      }
      module.exports = baseTrim;
    }
  });

  // ../shared/node_modules/lodash/toNumber.js
  var require_toNumber = __commonJS({
    "../shared/node_modules/lodash/toNumber.js"(exports, module) {
      var baseTrim = require_baseTrim();
      var isObject2 = require_isObject();
      var isSymbol = require_isSymbol();
      var NAN = 0 / 0;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject2(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject2(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = toNumber;
    }
  });

  // ../shared/node_modules/lodash/debounce.js
  var require_debounce = __commonJS({
    "../shared/node_modules/lodash/debounce.js"(exports, module) {
      var isObject2 = require_isObject();
      var now = require_now();
      var toNumber = require_toNumber();
      var FUNC_ERROR_TEXT = "Expected a function";
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      function debounce2(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject2(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel2() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel2;
        debounced.flush = flush;
        return debounced;
      }
      module.exports = debounce2;
    }
  });

  // ../shared/node_modules/lodash/_stackClear.js
  var require_stackClear = __commonJS({
    "../shared/node_modules/lodash/_stackClear.js"(exports, module) {
      var ListCache = require_ListCache();
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      module.exports = stackClear;
    }
  });

  // ../shared/node_modules/lodash/_stackDelete.js
  var require_stackDelete = __commonJS({
    "../shared/node_modules/lodash/_stackDelete.js"(exports, module) {
      function stackDelete(key) {
        var data = this.__data__, result = data["delete"](key);
        this.size = data.size;
        return result;
      }
      module.exports = stackDelete;
    }
  });

  // ../shared/node_modules/lodash/_stackGet.js
  var require_stackGet = __commonJS({
    "../shared/node_modules/lodash/_stackGet.js"(exports, module) {
      function stackGet(key) {
        return this.__data__.get(key);
      }
      module.exports = stackGet;
    }
  });

  // ../shared/node_modules/lodash/_stackHas.js
  var require_stackHas = __commonJS({
    "../shared/node_modules/lodash/_stackHas.js"(exports, module) {
      function stackHas(key) {
        return this.__data__.has(key);
      }
      module.exports = stackHas;
    }
  });

  // ../shared/node_modules/lodash/_stackSet.js
  var require_stackSet = __commonJS({
    "../shared/node_modules/lodash/_stackSet.js"(exports, module) {
      var ListCache = require_ListCache();
      var Map2 = require_Map();
      var MapCache = require_MapCache();
      var LARGE_ARRAY_SIZE = 200;
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      module.exports = stackSet;
    }
  });

  // ../shared/node_modules/lodash/_Stack.js
  var require_Stack = __commonJS({
    "../shared/node_modules/lodash/_Stack.js"(exports, module) {
      var ListCache = require_ListCache();
      var stackClear = require_stackClear();
      var stackDelete = require_stackDelete();
      var stackGet = require_stackGet();
      var stackHas = require_stackHas();
      var stackSet = require_stackSet();
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      module.exports = Stack;
    }
  });

  // ../shared/node_modules/lodash/_assignMergeValue.js
  var require_assignMergeValue = __commonJS({
    "../shared/node_modules/lodash/_assignMergeValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      function assignMergeValue(object, key, value) {
        if (value !== void 0 && !eq(object[key], value) || value === void 0 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      module.exports = assignMergeValue;
    }
  });

  // ../shared/node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../shared/node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object, iteratee, keysFunc) {
          var index = -1, iterable = Object(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      module.exports = createBaseFor;
    }
  });

  // ../shared/node_modules/lodash/_baseFor.js
  var require_baseFor = __commonJS({
    "../shared/node_modules/lodash/_baseFor.js"(exports, module) {
      var createBaseFor = require_createBaseFor();
      var baseFor = createBaseFor();
      module.exports = baseFor;
    }
  });

  // ../shared/node_modules/lodash/_cloneBuffer.js
  var require_cloneBuffer = __commonJS({
    "../shared/node_modules/lodash/_cloneBuffer.js"(exports, module) {
      var root = require_root();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : void 0;
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result);
        return result;
      }
      module.exports = cloneBuffer;
    }
  });

  // ../shared/node_modules/lodash/_Uint8Array.js
  var require_Uint8Array = __commonJS({
    "../shared/node_modules/lodash/_Uint8Array.js"(exports, module) {
      var root = require_root();
      var Uint8Array2 = root.Uint8Array;
      module.exports = Uint8Array2;
    }
  });

  // ../shared/node_modules/lodash/_cloneArrayBuffer.js
  var require_cloneArrayBuffer = __commonJS({
    "../shared/node_modules/lodash/_cloneArrayBuffer.js"(exports, module) {
      var Uint8Array2 = require_Uint8Array();
      function cloneArrayBuffer(arrayBuffer) {
        var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result).set(new Uint8Array2(arrayBuffer));
        return result;
      }
      module.exports = cloneArrayBuffer;
    }
  });

  // ../shared/node_modules/lodash/_cloneTypedArray.js
  var require_cloneTypedArray = __commonJS({
    "../shared/node_modules/lodash/_cloneTypedArray.js"(exports, module) {
      var cloneArrayBuffer = require_cloneArrayBuffer();
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      module.exports = cloneTypedArray;
    }
  });

  // ../shared/node_modules/lodash/_copyArray.js
  var require_copyArray = __commonJS({
    "../shared/node_modules/lodash/_copyArray.js"(exports, module) {
      function copyArray(source, array8) {
        var index = -1, length = source.length;
        array8 || (array8 = Array(length));
        while (++index < length) {
          array8[index] = source[index];
        }
        return array8;
      }
      module.exports = copyArray;
    }
  });

  // ../shared/node_modules/lodash/_baseCreate.js
  var require_baseCreate = __commonJS({
    "../shared/node_modules/lodash/_baseCreate.js"(exports, module) {
      var isObject2 = require_isObject();
      var objectCreate = Object.create;
      var baseCreate = /* @__PURE__ */ function() {
        function object() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result = new object();
          object.prototype = void 0;
          return result;
        };
      }();
      module.exports = baseCreate;
    }
  });

  // ../shared/node_modules/lodash/_overArg.js
  var require_overArg = __commonJS({
    "../shared/node_modules/lodash/_overArg.js"(exports, module) {
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      module.exports = overArg;
    }
  });

  // ../shared/node_modules/lodash/_getPrototype.js
  var require_getPrototype = __commonJS({
    "../shared/node_modules/lodash/_getPrototype.js"(exports, module) {
      var overArg = require_overArg();
      var getPrototype = overArg(Object.getPrototypeOf, Object);
      module.exports = getPrototype;
    }
  });

  // ../shared/node_modules/lodash/_isPrototype.js
  var require_isPrototype = __commonJS({
    "../shared/node_modules/lodash/_isPrototype.js"(exports, module) {
      var objectProto = Object.prototype;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      module.exports = isPrototype;
    }
  });

  // ../shared/node_modules/lodash/_initCloneObject.js
  var require_initCloneObject = __commonJS({
    "../shared/node_modules/lodash/_initCloneObject.js"(exports, module) {
      var baseCreate = require_baseCreate();
      var getPrototype = require_getPrototype();
      var isPrototype = require_isPrototype();
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      module.exports = initCloneObject;
    }
  });

  // ../shared/node_modules/lodash/_baseIsArguments.js
  var require_baseIsArguments = __commonJS({
    "../shared/node_modules/lodash/_baseIsArguments.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      module.exports = baseIsArguments;
    }
  });

  // ../shared/node_modules/lodash/isArguments.js
  var require_isArguments = __commonJS({
    "../shared/node_modules/lodash/isArguments.js"(exports, module) {
      var baseIsArguments = require_baseIsArguments();
      var isObjectLike = require_isObjectLike();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      module.exports = isArguments;
    }
  });

  // ../shared/node_modules/lodash/isLength.js
  var require_isLength = __commonJS({
    "../shared/node_modules/lodash/isLength.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      module.exports = isLength;
    }
  });

  // ../shared/node_modules/lodash/isArrayLike.js
  var require_isArrayLike = __commonJS({
    "../shared/node_modules/lodash/isArrayLike.js"(exports, module) {
      var isFunction = require_isFunction();
      var isLength = require_isLength();
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      module.exports = isArrayLike;
    }
  });

  // ../shared/node_modules/lodash/isArrayLikeObject.js
  var require_isArrayLikeObject = __commonJS({
    "../shared/node_modules/lodash/isArrayLikeObject.js"(exports, module) {
      var isArrayLike = require_isArrayLike();
      var isObjectLike = require_isObjectLike();
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      module.exports = isArrayLikeObject;
    }
  });

  // ../shared/node_modules/lodash/stubFalse.js
  var require_stubFalse = __commonJS({
    "../shared/node_modules/lodash/stubFalse.js"(exports, module) {
      function stubFalse() {
        return false;
      }
      module.exports = stubFalse;
    }
  });

  // ../shared/node_modules/lodash/isBuffer.js
  var require_isBuffer = __commonJS({
    "../shared/node_modules/lodash/isBuffer.js"(exports, module) {
      var root = require_root();
      var stubFalse = require_stubFalse();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var Buffer2 = moduleExports ? root.Buffer : void 0;
      var nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : void 0;
      var isBuffer = nativeIsBuffer || stubFalse;
      module.exports = isBuffer;
    }
  });

  // ../shared/node_modules/lodash/isPlainObject.js
  var require_isPlainObject = __commonJS({
    "../shared/node_modules/lodash/isPlainObject.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var getPrototype = require_getPrototype();
      var isObjectLike = require_isObjectLike();
      var objectTag = "[object Object]";
      var funcProto = Function.prototype;
      var objectProto = Object.prototype;
      var funcToString = funcProto.toString;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      module.exports = isPlainObject;
    }
  });

  // ../shared/node_modules/lodash/_baseIsTypedArray.js
  var require_baseIsTypedArray = __commonJS({
    "../shared/node_modules/lodash/_baseIsTypedArray.js"(exports, module) {
      var baseGetTag = require_baseGetTag();
      var isLength = require_isLength();
      var isObjectLike = require_isObjectLike();
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var funcTag = "[object Function]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var objectTag = "[object Object]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var weakMapTag = "[object WeakMap]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var float32Tag = "[object Float32Array]";
      var float64Tag = "[object Float64Array]";
      var int8Tag = "[object Int8Array]";
      var int16Tag = "[object Int16Array]";
      var int32Tag = "[object Int32Array]";
      var uint8Tag = "[object Uint8Array]";
      var uint8ClampedTag = "[object Uint8ClampedArray]";
      var uint16Tag = "[object Uint16Array]";
      var uint32Tag = "[object Uint32Array]";
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      module.exports = baseIsTypedArray;
    }
  });

  // ../shared/node_modules/lodash/_baseUnary.js
  var require_baseUnary = __commonJS({
    "../shared/node_modules/lodash/_baseUnary.js"(exports, module) {
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      module.exports = baseUnary;
    }
  });

  // ../shared/node_modules/lodash/_nodeUtil.js
  var require_nodeUtil = __commonJS({
    "../shared/node_modules/lodash/_nodeUtil.js"(exports, module) {
      var freeGlobal = require_freeGlobal();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e2) {
        }
      }();
      module.exports = nodeUtil;
    }
  });

  // ../shared/node_modules/lodash/isTypedArray.js
  var require_isTypedArray = __commonJS({
    "../shared/node_modules/lodash/isTypedArray.js"(exports, module) {
      var baseIsTypedArray = require_baseIsTypedArray();
      var baseUnary = require_baseUnary();
      var nodeUtil = require_nodeUtil();
      var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      module.exports = isTypedArray;
    }
  });

  // ../shared/node_modules/lodash/_safeGet.js
  var require_safeGet = __commonJS({
    "../shared/node_modules/lodash/_safeGet.js"(exports, module) {
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      module.exports = safeGet;
    }
  });

  // ../shared/node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "../shared/node_modules/lodash/_copyObject.js"(exports, module) {
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      module.exports = copyObject;
    }
  });

  // ../shared/node_modules/lodash/_baseTimes.js
  var require_baseTimes = __commonJS({
    "../shared/node_modules/lodash/_baseTimes.js"(exports, module) {
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      module.exports = baseTimes;
    }
  });

  // ../shared/node_modules/lodash/_arrayLikeKeys.js
  var require_arrayLikeKeys = __commonJS({
    "../shared/node_modules/lodash/_arrayLikeKeys.js"(exports, module) {
      var baseTimes = require_baseTimes();
      var isArguments = require_isArguments();
      var isArray3 = require_isArray();
      var isBuffer = require_isBuffer();
      var isIndex = require_isIndex();
      var isTypedArray = require_isTypedArray();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
          (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
          isIndex(key, length)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = arrayLikeKeys;
    }
  });

  // ../shared/node_modules/lodash/_nativeKeysIn.js
  var require_nativeKeysIn = __commonJS({
    "../shared/node_modules/lodash/_nativeKeysIn.js"(exports, module) {
      function nativeKeysIn(object) {
        var result = [];
        if (object != null) {
          for (var key in Object(object)) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = nativeKeysIn;
    }
  });

  // ../shared/node_modules/lodash/_baseKeysIn.js
  var require_baseKeysIn = __commonJS({
    "../shared/node_modules/lodash/_baseKeysIn.js"(exports, module) {
      var isObject2 = require_isObject();
      var isPrototype = require_isPrototype();
      var nativeKeysIn = require_nativeKeysIn();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeysIn(object) {
        if (!isObject2(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeysIn;
    }
  });

  // ../shared/node_modules/lodash/keysIn.js
  var require_keysIn = __commonJS({
    "../shared/node_modules/lodash/keysIn.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeysIn = require_baseKeysIn();
      var isArrayLike = require_isArrayLike();
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      module.exports = keysIn;
    }
  });

  // ../shared/node_modules/lodash/toPlainObject.js
  var require_toPlainObject = __commonJS({
    "../shared/node_modules/lodash/toPlainObject.js"(exports, module) {
      var copyObject = require_copyObject();
      var keysIn = require_keysIn();
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      module.exports = toPlainObject;
    }
  });

  // ../shared/node_modules/lodash/_baseMergeDeep.js
  var require_baseMergeDeep = __commonJS({
    "../shared/node_modules/lodash/_baseMergeDeep.js"(exports, module) {
      var assignMergeValue = require_assignMergeValue();
      var cloneBuffer = require_cloneBuffer();
      var cloneTypedArray = require_cloneTypedArray();
      var copyArray = require_copyArray();
      var initCloneObject = require_initCloneObject();
      var isArguments = require_isArguments();
      var isArray3 = require_isArray();
      var isArrayLikeObject = require_isArrayLikeObject();
      var isBuffer = require_isBuffer();
      var isFunction = require_isFunction();
      var isObject2 = require_isObject();
      var isPlainObject = require_isPlainObject();
      var isTypedArray = require_isTypedArray();
      var safeGet = require_safeGet();
      var toPlainObject = require_toPlainObject();
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : void 0;
        var isCommon = newValue === void 0;
        if (isCommon) {
          var isArr = isArray3(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray3(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject2(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      module.exports = baseMergeDeep;
    }
  });

  // ../shared/node_modules/lodash/_baseMerge.js
  var require_baseMerge = __commonJS({
    "../shared/node_modules/lodash/_baseMerge.js"(exports, module) {
      var Stack = require_Stack();
      var assignMergeValue = require_assignMergeValue();
      var baseFor = require_baseFor();
      var baseMergeDeep = require_baseMergeDeep();
      var isObject2 = require_isObject();
      var keysIn = require_keysIn();
      var safeGet = require_safeGet();
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      module.exports = baseMerge;
    }
  });

  // ../shared/node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../shared/node_modules/lodash/identity.js"(exports, module) {
      function identity2(value) {
        return value;
      }
      module.exports = identity2;
    }
  });

  // ../shared/node_modules/lodash/_apply.js
  var require_apply = __commonJS({
    "../shared/node_modules/lodash/_apply.js"(exports, module) {
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      module.exports = apply;
    }
  });

  // ../shared/node_modules/lodash/_overRest.js
  var require_overRest = __commonJS({
    "../shared/node_modules/lodash/_overRest.js"(exports, module) {
      var apply = require_apply();
      var nativeMax = Math.max;
      function overRest(func, start, transform) {
        start = nativeMax(start === void 0 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array8 = Array(length);
          while (++index < length) {
            array8[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array8);
          return apply(func, this, otherArgs);
        };
      }
      module.exports = overRest;
    }
  });

  // ../shared/node_modules/lodash/constant.js
  var require_constant = __commonJS({
    "../shared/node_modules/lodash/constant.js"(exports, module) {
      function constant(value) {
        return function() {
          return value;
        };
      }
      module.exports = constant;
    }
  });

  // ../shared/node_modules/lodash/_baseSetToString.js
  var require_baseSetToString = __commonJS({
    "../shared/node_modules/lodash/_baseSetToString.js"(exports, module) {
      var constant = require_constant();
      var defineProperty = require_defineProperty();
      var identity2 = require_identity();
      var baseSetToString = !defineProperty ? identity2 : function(func, string11) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string11),
          "writable": true
        });
      };
      module.exports = baseSetToString;
    }
  });

  // ../shared/node_modules/lodash/_shortOut.js
  var require_shortOut = __commonJS({
    "../shared/node_modules/lodash/_shortOut.js"(exports, module) {
      var HOT_COUNT = 800;
      var HOT_SPAN = 16;
      var nativeNow = Date.now;
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(void 0, arguments);
        };
      }
      module.exports = shortOut;
    }
  });

  // ../shared/node_modules/lodash/_setToString.js
  var require_setToString = __commonJS({
    "../shared/node_modules/lodash/_setToString.js"(exports, module) {
      var baseSetToString = require_baseSetToString();
      var shortOut = require_shortOut();
      var setToString = shortOut(baseSetToString);
      module.exports = setToString;
    }
  });

  // ../shared/node_modules/lodash/_baseRest.js
  var require_baseRest = __commonJS({
    "../shared/node_modules/lodash/_baseRest.js"(exports, module) {
      var identity2 = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity2), func + "");
      }
      module.exports = baseRest;
    }
  });

  // ../shared/node_modules/lodash/_isIterateeCall.js
  var require_isIterateeCall = __commonJS({
    "../shared/node_modules/lodash/_isIterateeCall.js"(exports, module) {
      var eq = require_eq();
      var isArrayLike = require_isArrayLike();
      var isIndex = require_isIndex();
      var isObject2 = require_isObject();
      function isIterateeCall(value, index, object) {
        if (!isObject2(object)) {
          return false;
        }
        var type11 = typeof index;
        if (type11 == "number" ? isArrayLike(object) && isIndex(index, object.length) : type11 == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      module.exports = isIterateeCall;
    }
  });

  // ../shared/node_modules/lodash/_createAssigner.js
  var require_createAssigner = __commonJS({
    "../shared/node_modules/lodash/_createAssigner.js"(exports, module) {
      var baseRest = require_baseRest();
      var isIterateeCall = require_isIterateeCall();
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard2 = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object = Object(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      module.exports = createAssigner;
    }
  });

  // ../shared/node_modules/lodash/mergeWith.js
  var require_mergeWith = __commonJS({
    "../shared/node_modules/lodash/mergeWith.js"(exports, module) {
      var baseMerge = require_baseMerge();
      var createAssigner = require_createAssigner();
      var mergeWith2 = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      module.exports = mergeWith2;
    }
  });

  // ../shared/node_modules/lodash/_setCacheAdd.js
  var require_setCacheAdd = __commonJS({
    "../shared/node_modules/lodash/_setCacheAdd.js"(exports, module) {
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      module.exports = setCacheAdd;
    }
  });

  // ../shared/node_modules/lodash/_setCacheHas.js
  var require_setCacheHas = __commonJS({
    "../shared/node_modules/lodash/_setCacheHas.js"(exports, module) {
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      module.exports = setCacheHas;
    }
  });

  // ../shared/node_modules/lodash/_SetCache.js
  var require_SetCache = __commonJS({
    "../shared/node_modules/lodash/_SetCache.js"(exports, module) {
      var MapCache = require_MapCache();
      var setCacheAdd = require_setCacheAdd();
      var setCacheHas = require_setCacheHas();
      function SetCache(values) {
        var index = -1, length = values == null ? 0 : values.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values[index]);
        }
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      module.exports = SetCache;
    }
  });

  // ../shared/node_modules/lodash/_arraySome.js
  var require_arraySome = __commonJS({
    "../shared/node_modules/lodash/_arraySome.js"(exports, module) {
      function arraySome(array8, predicate) {
        var index = -1, length = array8 == null ? 0 : array8.length;
        while (++index < length) {
          if (predicate(array8[index], index, array8)) {
            return true;
          }
        }
        return false;
      }
      module.exports = arraySome;
    }
  });

  // ../shared/node_modules/lodash/_cacheHas.js
  var require_cacheHas = __commonJS({
    "../shared/node_modules/lodash/_cacheHas.js"(exports, module) {
      function cacheHas(cache2, key) {
        return cache2.has(key);
      }
      module.exports = cacheHas;
    }
  });

  // ../shared/node_modules/lodash/_equalArrays.js
  var require_equalArrays = __commonJS({
    "../shared/node_modules/lodash/_equalArrays.js"(exports, module) {
      var SetCache = require_SetCache();
      var arraySome = require_arraySome();
      var cacheHas = require_cacheHas();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      function equalArrays(array8, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array8.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array8);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array8;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array8, other);
        stack.set(other, array8);
        while (++index < arrLength) {
          var arrValue = array8[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array8, stack) : customizer(arrValue, othValue, index, array8, other, stack);
          }
          if (compared !== void 0) {
            if (compared) {
              continue;
            }
            result = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result = false;
            break;
          }
        }
        stack["delete"](array8);
        stack["delete"](other);
        return result;
      }
      module.exports = equalArrays;
    }
  });

  // ../shared/node_modules/lodash/_mapToArray.js
  var require_mapToArray = __commonJS({
    "../shared/node_modules/lodash/_mapToArray.js"(exports, module) {
      function mapToArray(map2) {
        var index = -1, result = Array(map2.size);
        map2.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      module.exports = mapToArray;
    }
  });

  // ../shared/node_modules/lodash/_setToArray.js
  var require_setToArray = __commonJS({
    "../shared/node_modules/lodash/_setToArray.js"(exports, module) {
      function setToArray(set4) {
        var index = -1, result = Array(set4.size);
        set4.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      module.exports = setToArray;
    }
  });

  // ../shared/node_modules/lodash/_equalByTag.js
  var require_equalByTag = __commonJS({
    "../shared/node_modules/lodash/_equalByTag.js"(exports, module) {
      var Symbol2 = require_Symbol();
      var Uint8Array2 = require_Uint8Array();
      var eq = require_eq();
      var equalArrays = require_equalArrays();
      var mapToArray = require_mapToArray();
      var setToArray = require_setToArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var COMPARE_UNORDERED_FLAG = 2;
      var boolTag = "[object Boolean]";
      var dateTag = "[object Date]";
      var errorTag = "[object Error]";
      var mapTag = "[object Map]";
      var numberTag = "[object Number]";
      var regexpTag = "[object RegExp]";
      var setTag = "[object Set]";
      var stringTag = "[object String]";
      var symbolTag = "[object Symbol]";
      var arrayBufferTag = "[object ArrayBuffer]";
      var dataViewTag = "[object DataView]";
      var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
      var symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      module.exports = equalByTag;
    }
  });

  // ../shared/node_modules/lodash/_arrayPush.js
  var require_arrayPush = __commonJS({
    "../shared/node_modules/lodash/_arrayPush.js"(exports, module) {
      function arrayPush(array8, values) {
        var index = -1, length = values.length, offset2 = array8.length;
        while (++index < length) {
          array8[offset2 + index] = values[index];
        }
        return array8;
      }
      module.exports = arrayPush;
    }
  });

  // ../shared/node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../shared/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray3 = require_isArray();
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result = keysFunc(object);
        return isArray3(object) ? result : arrayPush(result, symbolsFunc(object));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // ../shared/node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../shared/node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array8, predicate) {
        var index = -1, length = array8 == null ? 0 : array8.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array8[index];
          if (predicate(value, index, array8)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      module.exports = arrayFilter;
    }
  });

  // ../shared/node_modules/lodash/stubArray.js
  var require_stubArray = __commonJS({
    "../shared/node_modules/lodash/stubArray.js"(exports, module) {
      function stubArray() {
        return [];
      }
      module.exports = stubArray;
    }
  });

  // ../shared/node_modules/lodash/_getSymbols.js
  var require_getSymbols = __commonJS({
    "../shared/node_modules/lodash/_getSymbols.js"(exports, module) {
      var arrayFilter = require_arrayFilter();
      var stubArray = require_stubArray();
      var objectProto = Object.prototype;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var nativeGetSymbols = Object.getOwnPropertySymbols;
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      module.exports = getSymbols;
    }
  });

  // ../shared/node_modules/lodash/_nativeKeys.js
  var require_nativeKeys = __commonJS({
    "../shared/node_modules/lodash/_nativeKeys.js"(exports, module) {
      var overArg = require_overArg();
      var nativeKeys = overArg(Object.keys, Object);
      module.exports = nativeKeys;
    }
  });

  // ../shared/node_modules/lodash/_baseKeys.js
  var require_baseKeys = __commonJS({
    "../shared/node_modules/lodash/_baseKeys.js"(exports, module) {
      var isPrototype = require_isPrototype();
      var nativeKeys = require_nativeKeys();
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result = [];
        for (var key in Object(object)) {
          if (hasOwnProperty.call(object, key) && key != "constructor") {
            result.push(key);
          }
        }
        return result;
      }
      module.exports = baseKeys;
    }
  });

  // ../shared/node_modules/lodash/keys.js
  var require_keys = __commonJS({
    "../shared/node_modules/lodash/keys.js"(exports, module) {
      var arrayLikeKeys = require_arrayLikeKeys();
      var baseKeys = require_baseKeys();
      var isArrayLike = require_isArrayLike();
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      module.exports = keys;
    }
  });

  // ../shared/node_modules/lodash/_getAllKeys.js
  var require_getAllKeys = __commonJS({
    "../shared/node_modules/lodash/_getAllKeys.js"(exports, module) {
      var baseGetAllKeys = require_baseGetAllKeys();
      var getSymbols = require_getSymbols();
      var keys = require_keys();
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      module.exports = getAllKeys;
    }
  });

  // ../shared/node_modules/lodash/_equalObjects.js
  var require_equalObjects = __commonJS({
    "../shared/node_modules/lodash/_equalObjects.js"(exports, module) {
      var getAllKeys = require_getAllKeys();
      var COMPARE_PARTIAL_FLAG = 1;
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result;
      }
      module.exports = equalObjects;
    }
  });

  // ../shared/node_modules/lodash/_DataView.js
  var require_DataView = __commonJS({
    "../shared/node_modules/lodash/_DataView.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var DataView = getNative(root, "DataView");
      module.exports = DataView;
    }
  });

  // ../shared/node_modules/lodash/_Promise.js
  var require_Promise = __commonJS({
    "../shared/node_modules/lodash/_Promise.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Promise2 = getNative(root, "Promise");
      module.exports = Promise2;
    }
  });

  // ../shared/node_modules/lodash/_Set.js
  var require_Set = __commonJS({
    "../shared/node_modules/lodash/_Set.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var Set2 = getNative(root, "Set");
      module.exports = Set2;
    }
  });

  // ../shared/node_modules/lodash/_WeakMap.js
  var require_WeakMap = __commonJS({
    "../shared/node_modules/lodash/_WeakMap.js"(exports, module) {
      var getNative = require_getNative();
      var root = require_root();
      var WeakMap2 = getNative(root, "WeakMap");
      module.exports = WeakMap2;
    }
  });

  // ../shared/node_modules/lodash/_getTag.js
  var require_getTag = __commonJS({
    "../shared/node_modules/lodash/_getTag.js"(exports, module) {
      var DataView = require_DataView();
      var Map2 = require_Map();
      var Promise2 = require_Promise();
      var Set2 = require_Set();
      var WeakMap2 = require_WeakMap();
      var baseGetTag = require_baseGetTag();
      var toSource = require_toSource();
      var mapTag = "[object Map]";
      var objectTag = "[object Object]";
      var promiseTag = "[object Promise]";
      var setTag = "[object Set]";
      var weakMapTag = "[object WeakMap]";
      var dataViewTag = "[object DataView]";
      var dataViewCtorString = toSource(DataView);
      var mapCtorString = toSource(Map2);
      var promiseCtorString = toSource(Promise2);
      var setCtorString = toSource(Set2);
      var weakMapCtorString = toSource(WeakMap2);
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap2 && getTag(new WeakMap2()) != weakMapTag) {
        getTag = function(value) {
          var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : void 0, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result;
        };
      }
      module.exports = getTag;
    }
  });

  // ../shared/node_modules/lodash/_baseIsEqualDeep.js
  var require_baseIsEqualDeep = __commonJS({
    "../shared/node_modules/lodash/_baseIsEqualDeep.js"(exports, module) {
      var Stack = require_Stack();
      var equalArrays = require_equalArrays();
      var equalByTag = require_equalByTag();
      var equalObjects = require_equalObjects();
      var getTag = require_getTag();
      var isArray3 = require_isArray();
      var isBuffer = require_isBuffer();
      var isTypedArray = require_isTypedArray();
      var COMPARE_PARTIAL_FLAG = 1;
      var argsTag = "[object Arguments]";
      var arrayTag = "[object Array]";
      var objectTag = "[object Object]";
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray3(object), othIsArr = isArray3(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      module.exports = baseIsEqualDeep;
    }
  });

  // ../shared/node_modules/lodash/_baseIsEqual.js
  var require_baseIsEqual = __commonJS({
    "../shared/node_modules/lodash/_baseIsEqual.js"(exports, module) {
      var baseIsEqualDeep = require_baseIsEqualDeep();
      var isObjectLike = require_isObjectLike();
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      module.exports = baseIsEqual;
    }
  });

  // ../shared/node_modules/lodash/isEqual.js
  var require_isEqual = __commonJS({
    "../shared/node_modules/lodash/isEqual.js"(exports, module) {
      var baseIsEqual = require_baseIsEqual();
      function isEqual5(value, other) {
        return baseIsEqual(value, other);
      }
      module.exports = isEqual5;
    }
  });

  // ../shared/node_modules/lodash/throttle.js
  var require_throttle = __commonJS({
    "../shared/node_modules/lodash/throttle.js"(exports, module) {
      var debounce2 = require_debounce();
      var isObject2 = require_isObject();
      var FUNC_ERROR_TEXT = "Expected a function";
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject2(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce2(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      module.exports = throttle2;
    }
  });

  // ../shared/src/sdk/globals.ts
  function getSDK() {
    return window.engagement;
  }

  // src/bridge.ts
  var NativeBridge = class {
    constructor(objectKey) {
      /**
       * Subscribe to messages from native code
       * @param callback Function to call when a message is received
       * @returns Function to unsubscribe
       */
      this.subscribeToAsyncMessages = (callback) => {
        asyncMessageSubscribers.push(callback);
        return () => {
          asyncMessageSubscribers = asyncMessageSubscribers.filter((subscriber) => subscriber !== callback);
        };
      };
      this.objectKey = objectKey;
    }
    /**
     * Set the function name to call on the native side
     * @param funcName name of the function to call on the native side
     * @returns this for method chaining
     */
    function(funcName) {
      this.funcName = funcName;
      return this;
    }
    /**
     * Executes the native function as a Promise
     * For QuickJS, we set up promises to work a bit differently. You'll see callAsyncFunction
     * we have a non-async bridge `callNativeFunction` that we use to send messages to native and ultimately
     * resolve a promise by listening for a message with the same id.
     *
     * @returns Promise that resolves with the result or rejects with an error
     */
    promise(params) {
      if (!this.funcName) {
        return Promise.reject(new Error("Function name is required"));
      }
      return this.callAsyncFunction(this.funcName, params);
    }
    /**
     * Executes the native function with the provided parameters
     * @param params parameters to pass to the native function
     * @returns The result of the native function call
     */
    call(...params) {
      if (!this.funcName) {
        throw new Error("Function name is required");
      }
      return this.callFunction(this.funcName, ...params);
    }
    /**
     * Call a function by name with the provided parameters
     * @param funcName The name of the function to call
     * @param params The parameters to pass to the function
     * @returns The result of the function call
     */
    callFunction(funcName, ...params) {
      let current = globalThis;
      if (this.objectKey) {
        current = current[this.objectKey];
      }
      const func = current[funcName];
      if (typeof func !== "function") {
        throw new Error(`Function ${funcName}${this.objectKey ? ` in ${this.objectKey}` : ""} not found`);
      }
      return func(...params);
    }
    callAsyncFunction(name, args) {
      const id = Math.random().toString();
      const result = new Promise((resolve, reject) => {
        const unsubscribe = this.subscribeToAsyncMessages((msg) => {
          if (msg.id === id) {
            unsubscribe();
            if (msg.error) {
              console.log("[JS] Rejecting", msg);
              reject(msg.error);
              return;
            }
            try {
              resolve(JSON.parse(msg.data));
            } catch (e2) {
              console.error("[JS] Error parsing data", e2);
              resolve(msg.data);
            }
          }
        });
      });
      asyncNativeBridge.call(name, id, JSON.stringify(args));
      return result;
    }
  };
  var JSBridge = class {
    constructor(key) {
      this.key = key;
    }
    /**
     * Attach a function to globalThis or a specific key in globalThis
     * Example:
     * // Attach the dismissNudge function to globalThis.nudgeActions
     * registerJSBridge('nudgeActions').function('dismissNudge', dismissNudge);
     *
     * @param fn Function to attach to object in globalThis/or key if provided
     * @returns this for method chaining
     */
    function(name, fn) {
      this.attachFunctionToGlobalThis(name, fn);
      return this;
    }
    /**
     * Attach an object to globalThis
     * Example:
     * // Attach an object to globalThis.myObject
     * registerJSBridge().object('myObject', { foo: 'bar' });
     *
     * @param valueKey Key to attach the object to in globalThis
     * @param value Object to attach to globalThis
     * @returns this for method chaining
     */
    object(valueKey, value = {}) {
      this.attachToGlobalThis(valueKey, value);
      return this;
    }
    /**
     * Internal method to attach a value to globalThis
     */
    attachFunctionToGlobalThis(name, fn) {
      const current = globalThis;
      if (this.key && current[this.key]) {
        delete current[this.key][name];
      } else if (current[name]) {
        delete current[name];
      }
      this.attachToGlobalThis(name, fn);
    }
    attachToGlobalThis(valueKey, value) {
      const current = globalThis;
      if (this.key) {
        if (!current[this.key]) {
          current[this.key] = {};
        }
        current[this.key] = {
          ...current[this.key],
          [valueKey]: value
        };
      } else {
        current[valueKey] = value;
      }
    }
  };
  function registerJSBridge(key) {
    return new JSBridge(key);
  }
  function registerNativeBridge(key) {
    return new NativeBridge(key);
  }
  var asyncMessageSubscribers = [];
  registerJSBridge().function("onNativeMessage", (msg) => {
    asyncMessageSubscribers.forEach((subscriber) => subscriber(msg));
  });
  var asyncNativeBridge = registerNativeBridge().function("callNativeFunction");

  // src/fetch-polyfill.ts
  var simpleFetch2 = (url, options) => {
    return registerNativeBridge().function("fetch").promise({ url, options });
  };
  globalThis.simpleFetch = simpleFetch2;

  // src/crypto-polyfill.ts
  function getRandomValues(array8) {
    if (!(array8 instanceof Int8Array || array8 instanceof Uint8Array || array8 instanceof Int16Array || array8 instanceof Uint16Array || array8 instanceof Int32Array || array8 instanceof Uint32Array || array8 instanceof Uint8ClampedArray)) {
      throw new Error("Expected an integer array");
    }
    if (array8.byteLength > 65536) {
      throw new Error("Can only request a maximum of 65536 bytes");
    }
    const base64 = registerNativeBridge().function("getRandomBase64").call(array8.byteLength);
    const decoded = registerNativeBridge().function("base64Decode").call(base64);
    const bytes = new Uint8Array(array8.byteLength);
    for (let i2 = 0; i2 < array8.byteLength; i2++) {
      bytes[i2] = decoded.charCodeAt(i2);
    }
    array8.set(bytes);
    return array8;
  }
  registerJSBridge("crypto").function("getRandomValues", getRandomValues);

  // src/abortcontroller-polyfill.ts
  var AbortError = class extends Error {
    constructor(message = "The operation was aborted") {
      super(message);
      this.name = "AbortError";
    }
  };
  var EventTarget = class {
    constructor() {
      this.listeners = /* @__PURE__ */ new Map();
    }
    addEventListener(type11, listener) {
      if (!this.listeners.has(type11)) {
        this.listeners.set(type11, /* @__PURE__ */ new Set());
      }
      this.listeners.get(type11)?.add(listener);
    }
    removeEventListener(type11, listener) {
      const typeListeners = this.listeners.get(type11);
      if (typeListeners) {
        typeListeners.delete(listener);
      }
    }
    dispatchEvent(event) {
      const typeListeners = this.listeners.get(event.type);
      if (typeListeners) {
        typeListeners.forEach((listener) => {
          try {
            listener(event);
          } catch (error) {
            console.error("Error in event listener:", error);
          }
        });
      }
      return true;
    }
  };
  var AbortSignal = class _AbortSignal extends EventTarget {
    constructor() {
      super(...arguments);
      this._aborted = false;
      this._reason = void 0;
      this.onabort = null;
    }
    get aborted() {
      return this._aborted;
    }
    get reason() {
      return this._reason;
    }
    /**
     * Creates an AbortSignal that is already aborted
     */
    static abort(reason) {
      const signal = new _AbortSignal();
      signal._abort(reason || new AbortError());
      return signal;
    }
    /**
     * Creates an AbortSignal that will be aborted after the specified timeout
     */
    static timeout(milliseconds) {
      const signal = new _AbortSignal();
      setTimeout(() => {
        signal._abort(new AbortError(`The operation timed out after ${milliseconds}ms`));
      }, milliseconds);
      return signal;
    }
    /**
     * Throws an AbortError if the signal is aborted
     */
    throwIfAborted() {
      if (this._aborted) {
        throw this._reason;
      }
    }
    /**
     * Internal method to abort the signal
     */
    _abort(reason) {
      if (this._aborted) {
        return;
      }
      this._aborted = true;
      this._reason = reason || new AbortError();
      const event = {
        type: "abort",
        target: this,
        currentTarget: this
      };
      this.dispatchEvent(event);
      if (this.onabort) {
        try {
          this.onabort(event);
        } catch (error) {
          console.error("Error in onabort handler:", error);
        }
      }
    }
  };
  var AbortController2 = class {
    constructor() {
      this._signal = new AbortSignal();
    }
    get signal() {
      return this._signal;
    }
    /**
     * Aborts the associated AbortSignal
     */
    abort(reason) {
      this._signal._abort(reason);
    }
  };
  globalThis.AbortController = AbortController2;
  globalThis.AbortSignal = AbortSignal;
  globalThis.AbortError = AbortError;

  // ../shared/src/products/nudges/store/selectors.ts
  var import_get = __toESM(require_get());

  // ../shared/src/internal/middleware/nudge.ts
  var t8 = __toESM(require_lib());

  // ../shared/node_modules/fp-ts/es6/function.js
  function pipe(a, ab, bc, cd, de, ef, fg, gh, hi, ij, jk, kl, lm, mn, no, op, pq, qr, rs, st) {
    switch (arguments.length) {
      case 1:
        return a;
      case 2:
        return ab(a);
      case 3:
        return bc(ab(a));
      case 4:
        return cd(bc(ab(a)));
      case 5:
        return de(cd(bc(ab(a))));
      case 6:
        return ef(de(cd(bc(ab(a)))));
      case 7:
        return fg(ef(de(cd(bc(ab(a))))));
      case 8:
        return gh(fg(ef(de(cd(bc(ab(a)))))));
      case 9:
        return hi(gh(fg(ef(de(cd(bc(ab(a))))))));
      case 10:
        return ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))));
      case 11:
        return jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))));
      case 12:
        return kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))));
      case 13:
        return lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))));
      case 14:
        return mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))));
      case 15:
        return no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))));
      case 16:
        return op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))));
      case 17:
        return pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))));
      case 18:
        return qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))));
      case 19:
        return rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a))))))))))))))))));
      case 20:
        return st(rs(qr(pq(op(no(mn(lm(kl(jk(ij(hi(gh(fg(ef(de(cd(bc(ab(a)))))))))))))))))));
    }
    return;
  }

  // ../shared/node_modules/fp-ts/es6/Functor.js
  function flap(F) {
    return function(a) {
      return function(fab) {
        return F.map(fab, function(f) {
          return f(a);
        });
      };
    };
  }

  // ../shared/node_modules/fp-ts/es6/internal.js
  var isLeft = function(ma) {
    return ma._tag === "Left";
  };

  // ../shared/node_modules/fp-ts/es6/Either.js
  var isLeft2 = isLeft;
  var right = function(a) {
    return { _tag: "Right", right: a };
  };
  var orElseW = function(onLeft) {
    return function(ma) {
      return isLeft2(ma) ? onLeft(ma.left) : ma;
    };
  };
  var orElse = orElseW;
  var _map = function(fa, f) {
    return pipe(fa, map(f));
  };
  var map = function(f) {
    return function(fa) {
      return isLeft2(fa) ? fa : right(f(fa.right));
    };
  };
  var URI = "Either";
  var Functor = {
    URI,
    map: _map
  };
  var flap2 = (
    /*#_PURE_*/
    flap(Functor)
  );

  // ../shared/node_modules/io-ts-types/es6/clone.js
  function clone(t14) {
    var r = Object.create(Object.getPrototypeOf(t14));
    Object.assign(r, t14);
    return r;
  }

  // ../shared/node_modules/io-ts-types/es6/withFallback.js
  var t2 = __toESM(require_lib());

  // ../shared/node_modules/io-ts-types/es6/withValidate.js
  var t = __toESM(require_lib());
  function withValidate(codec, validate2, name) {
    if (name === void 0) {
      name = codec.name;
    }
    var r = clone(codec);
    r.validate = validate2;
    r.decode = function(i2) {
      return validate2(i2, t.getDefaultContext(r));
    };
    r.name = name;
    return r;
  }

  // ../shared/node_modules/io-ts-types/es6/withFallback.js
  function withFallback(codec, a, name) {
    if (name === void 0) {
      name = "withFallback(" + codec.name + ")";
    }
    return withValidate(codec, function(u, c2) {
      return orElse(function() {
        return t2.success(a);
      })(codec.validate(u, c2));
    }, name);
  }

  // ../shared/src/internal/middleware/generics.ts
  var import_io_ts_reporters = __toESM(require_src());
  var import_function2 = __toESM(require_function());
  var import_Either2 = __toESM(require_Either());

  // ../shared/node_modules/@amplitude/analytics-types/lib/esm/logger.js
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["None"] = 0] = "None";
    LogLevel2[LogLevel2["Error"] = 1] = "Error";
    LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
    LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
    LogLevel2[LogLevel2["Debug"] = 4] = "Debug";
  })(LogLevel || (LogLevel = {}));

  // ../shared/src/sdk/symbols.ts
  var _analytics = "_analytics";
  var _configuration = "_configuration";

  // ../shared/src/internal/util/LocalStorage.ts
  var PREFIX = "amplitude.engagement";
  var set = (label, value) => {
    try {
      localStorage.setItem(`${PREFIX}.${label}`, value.toString());
      return value;
    } catch (err) {
      return "";
    }
  };
  var get = (label, defaultValue, prefixOverride) => {
    let value;
    const prefix = prefixOverride ?? PREFIX;
    try {
      value = localStorage.getItem(`${prefix}.${label}`);
    } catch (err) {
      value = null;
    }
    if (value === null) {
      return defaultValue;
    } else {
      if (value === "false") return false;
      if (value === "true") return true;
      if (+value) return +value;
      return value;
    }
  };
  var remove = (label) => {
    try {
      localStorage.removeItem(`${PREFIX}.${label}`);
      return;
    } catch (err) {
      return;
    }
  };
  var LocalStorage = {
    set,
    get,
    remove
  };
  var LocalStorage_default = LocalStorage;

  // ../shared/src/internal/util/Logger.ts
  var PREFIX2 = "Amplitude Engagement Logger ";
  var getlocalStorageOverride = () => {
    const level = parseInt(LocalStorage_default.get("logLevel", ""), 10);
    if ([0, 1, 2, 3, 4].includes(level)) {
      return level;
    }
    return null;
  };
  var DefaultLogger = class {
    logLevel;
    constructor() {
      this.logLevel = getlocalStorageOverride() ?? LogLevel.None;
    }
    disable() {
      this.logLevel = getlocalStorageOverride() ?? LogLevel.None;
    }
    enable(logLevel = LogLevel.Warn) {
      this.logLevel = getlocalStorageOverride() ?? logLevel;
    }
    log(...args) {
      if (this.logLevel < LogLevel.Verbose) {
        return;
      }
      console.log(`${PREFIX2}[Log]:`, ...args);
    }
    warn(...args) {
      if (this.logLevel < LogLevel.Warn) {
        return;
      }
      console.warn(`${PREFIX2}[Warn]:`, ...args);
    }
    error(...args) {
      if (this.logLevel < LogLevel.Error) {
        return;
      }
      console.error(`${PREFIX2}[Error]:`, ...args);
    }
    debug(...args) {
      if (this.logLevel < LogLevel.Debug) {
        return;
      }
      console.log(`${PREFIX2}[Debug]:`, ...args);
    }
  };
  var proxyLogger = {
    disable: () => {
    },
    enable: () => {
    },
    log: () => {
    },
    warn: () => {
    },
    error: () => {
    },
    debug: () => {
    }
  };
  var logger = new Proxy(proxyLogger, {
    get(_target, prop) {
      const sdkLogger = getSDK()?.[_configuration]?.options?.logger || proxyLogger;
      return sdkLogger[prop];
    }
  });

  // ../shared/src/internal/middleware/generics.ts
  function decodeThrowing(validator, input) {
    const result = validator.decode(input);
    return (0, import_function2.pipe)(
      result,
      (0, import_Either2.fold)(
        (_errors) => {
          const messages = import_io_ts_reporters.default.report(result);
          const errorMessage = `${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`;
          logger.debug(JSON.stringify(_errors));
          throw new Error(errorMessage);
        },
        (value) => value
      )
    );
  }

  // ../shared/src/types/entities/nudge/actions.ts
  var t3 = __toESM(require_lib());
  var AdminAction = t3.type({
    type: t3.literal("admin"),
    value: t3.string
  });
  var CallbackAction = t3.type({
    type: t3.literal("callback"),
    value: t3.string
  });
  var AppReviewAction = t3.intersection([
    t3.type({
      type: t3.literal("app_review")
    }),
    t3.partial({
      appStoreId: t3.string,
      playStorePackageName: t3.string
    })
  ]);
  var LinkAction = t3.intersection([
    t3.type({
      type: t3.literal("link"),
      value: t3.string
    }),
    t3.partial({
      operation: t3.union([t3.literal("router"), t3.literal("self"), t3.literal("blank"), t3.undefined]),
      meta: t3.type({
        command: t3.string
      })
    })
  ]);
  var OpenChatActionTypeV = t3.union([
    t3.literal("intercom"),
    t3.literal("helpscout"),
    t3.literal("freshdesk"),
    t3.literal("freshchat"),
    t3.literal("crisp"),
    t3.literal("zendesk"),
    t3.literal("liveChat"),
    t3.literal("gist"),
    t3.literal("olark"),
    t3.literal("hubspot"),
    t3.literal("drift"),
    t3.literal("pylon"),
    t3.literal("talkdesk_v2"),
    t3.literal("zendesk_handoff"),
    t3.string
  ]);
  var OpenChatActionV = t3.type({
    type: t3.literal("open_chat"),
    meta: t3.type({
      type: OpenChatActionTypeV
    })
  });
  var DismissAction = t3.type({
    type: t3.literal("dismiss")
  });
  var CompleteAction = t3.type({
    type: t3.literal("complete")
  });
  var StepBackAction = t3.type({
    type: t3.literal("step_back")
  });
  var StepForwardAction = t3.type({
    type: t3.literal("step_forward")
  });
  var StayOnStepAction = t3.type({
    type: t3.literal("stay_on_step")
  });
  var SnoozeInterval = t3.union([t3.literal("hour"), t3.literal("day"), t3.literal("week")]);
  var SnoozeValue = t3.number;
  var SnoozeAction = t3.intersection([
    t3.type({
      type: t3.literal("snooze")
    }),
    t3.partial({
      interval: SnoozeInterval,
      value: SnoozeValue
    })
  ]);
  var BuiltInAction = t3.type({
    type: t3.literal("builtin"),
    value: t3.string
  });
  var ScriptAction = t3.type({
    type: t3.literal("script"),
    value: t3.string
  });
  var VideoAction = t3.type({
    type: t3.literal("video"),
    value: t3.string
  });
  var NoAction = t3.type({ type: t3.literal("no_action") });
  var ClickAction = t3.type({
    type: t3.literal("click"),
    value: t3.string
  });
  var NudgeActionV = t3.type({
    type: t3.literal("nudge"),
    value: t3.number
  });
  var GoToNudgeStepActionV = t3.type({
    type: t3.literal("go_to_step"),
    value: t3.number
  });
  var UseConditionalLogicAction = t3.type({
    type: t3.literal("use_conditional_logic")
  });
  var ShowVideoAction = t3.type({
    type: t3.literal("video"),
    value: t3.number
  });
  var ShowDocumentAction = t3.type({
    type: t3.literal("document"),
    value: t3.number
  });
  var OpenResourceCenterAction = t3.type({
    type: t3.literal("open_resource_center")
  });
  var OpenAIAssistantAction = t3.type({
    type: t3.literal("open_ai_assistant")
  });
  var ActionV = t3.union([
    NoAction,
    ClickAction,
    LinkAction,
    OpenChatActionV,
    DismissAction,
    CompleteAction,
    SnoozeAction,
    NudgeActionV,
    GoToNudgeStepActionV,
    UseConditionalLogicAction,
    StepBackAction,
    StepForwardAction,
    StayOnStepAction,
    CallbackAction,
    ShowVideoAction,
    ShowDocumentAction,
    AppReviewAction,
    OpenResourceCenterAction,
    OpenAIAssistantAction
  ]);
  var LabeledActionV = t3.type({
    cta: t3.string,
    action: ActionV
  });
  var TriggerAction = t3.type({
    type: t3.literal("trigger"),
    value: ActionV
  });

  // ../shared/src/internal/middleware/helpers/goals.ts
  var t5 = __toESM(require_lib());

  // ../shared/src/internal/middleware/evaluation.ts
  var t4 = __toESM(require_lib());
  var EvaluationConditionV = t4.type({
    selector: t4.array(t4.string),
    op: t4.string,
    values: t4.array(t4.string)
  });

  // ../shared/src/internal/middleware/helpers/goals.ts
  var PageVisitedGoal = t5.type({
    type: t5.literal("page_visited"),
    value: t5.string
  });
  var ElementClickedGoal = t5.type({
    type: t5.literal("element_clicked"),
    value: t5.string
  });
  var CTAClickedGoal = t5.type({
    type: t5.literal("cta_clicked")
  });
  var EventTrackedGoal = t5.intersection([
    t5.type({
      type: t5.literal("event_tracked"),
      event: t5.string
    }),
    t5.partial({
      conditions: t5.array(t5.array(EvaluationConditionV))
    })
  ]);

  // ../shared/src/internal/middleware/page-targeting.ts
  var t6 = __toESM(require_lib());
  var PageTargetingConfigV = t6.type({
    conditions: t6.array(t6.array(EvaluationConditionV)),
    configs: t6.array(
      t6.type({
        isExclude: t6.boolean,
        matchType: t6.union([
          t6.literal("contains"),
          t6.literal("endsWith"),
          t6.literal("exact"),
          t6.literal("pattern"),
          t6.literal("regex"),
          t6.literal("simple"),
          t6.literal("startsWith")
        ]),
        url: t6.string
      })
    )
  });

  // ../shared/src/internal/middleware/organization.ts
  var t7 = __toESM(require_lib());
  var ThrottleV = t7.intersection([
    t7.type({
      max: t7.number,
      period: t7.string
    }),
    t7.partial({
      tagIds: t7.array(t7.number),
      // if it's a tag throttle, this will be set, otherwise the throttle is for all nudge interactions
      periodCount: t7.union([t7.number, t7.undefined]),
      type: t7.union([t7.literal("time-between"), t7.literal("basic")])
    })
  ]);
  var CustomThrottleV = t7.intersection([
    t7.type({
      limits: t7.array(ThrottleV),
      conditions: t7.array(t7.array(EvaluationConditionV))
    }),
    t7.partial({
      enabled: t7.boolean,
      limit: ThrottleV
    })
  ]);
  var TranslationBehaviorV = t7.keyof({
    showDefault: null,
    showOutOfDate: null,
    dontShow: null
  });
  var LocalizationV = t7.type({
    enabled: t7.boolean,
    defaultLocale: t7.string,
    addedLocales: t7.array(t7.string),
    translationUnavailable: TranslationBehaviorV,
    translationOutdated: TranslationBehaviorV
  });
  var OrganizationV = t7.intersection([
    t7.type({
      branding: t7.string,
      shareLinkParam: t7.string,
      guideThrottle: CustomThrottleV,
      surveyThrottle: CustomThrottleV
    }),
    t7.partial({
      localization: LocalizationV
    })
  ]);
  var defaults = {
    branding: "",
    shareLinkParam: "",
    guideThrottle: {
      limits: [{ max: 10, period: "day" }],
      conditions: [[]],
      enabled: false
    },
    surveyThrottle: {
      limits: [{ max: 10, period: "day" }],
      conditions: [[]],
      enabled: false
    },
    localization: {
      enabled: false,
      defaultLocale: "en",
      addedLocales: [],
      translationUnavailable: "showDefault",
      translationOutdated: "showOutOfDate"
    }
  };
  var decode = (data) => {
    try {
      return decodeThrowing(OrganizationV, data);
    } catch (e2) {
      logger.error("Error decoding project settings", { error: e2 });
      return decodeThrowing(OrganizationV, { ...defaults, ...data });
    }
  };

  // ../shared/src/internal/middleware/nudge.ts
  var ModalPositionV = t8.union([
    t8.literal("top-left"),
    t8.literal("top-center"),
    t8.literal("top-right"),
    t8.literal("bottom-left"),
    t8.literal("bottom-center"),
    t8.literal("bottom-right"),
    t8.literal("left-center"),
    t8.literal("right-center"),
    t8.literal("center")
  ]);
  var PopoverPositionV = ModalPositionV;
  var BannerPositionV = t8.union([t8.literal("top"), t8.literal("bottom")]);
  var PinPositionV = t8.union([
    t8.literal("auto"),
    t8.literal("top"),
    t8.literal("bottom"),
    t8.literal("left"),
    t8.literal("right")
  ]);
  var CardPositionV = t8.union([
    t8.literal("prepend"),
    t8.literal("append"),
    t8.literal("replace"),
    t8.literal("before"),
    t8.literal("after")
  ]);
  var NudgeContentMarkdownBlockV = t8.type({
    type: t8.literal("markdown"),
    meta: t8.type({ value: t8.string })
  });
  var NudgeContentImageBlockV = t8.type({
    type: t8.literal("image"),
    meta: t8.intersection([
      t8.type({ src: t8.string, filename: t8.string, size: t8.string }),
      t8.partial({
        altText: t8.string,
        style: t8.partial({
          scale: t8.string
        })
      })
    ])
  });
  var NudgeContentVideoBlockV = t8.type({
    type: t8.literal("video"),
    meta: t8.type({ type: t8.literal("url"), src: t8.string })
  });
  var Required = t8.union([
    t8.type({
      value: t8.literal(true),
      message: t8.string
    }),
    t8.type({
      value: t8.literal(false),
      message: t8.union([t8.null, t8.undefined, t8.string])
    })
  ]);
  var SurveyValidation = t8.partial({
    validation: t8.partial({
      required: Required
    })
  });
  var EffectfulActionV = t8.union([
    AppReviewAction,
    CallbackAction,
    ClickAction,
    LinkAction,
    NudgeActionV,
    OpenAIAssistantAction,
    OpenChatActionV,
    OpenResourceCenterAction,
    ShowDocumentAction,
    ShowVideoAction
  ]);
  var NavigationActionV = t8.union([
    CompleteAction,
    DismissAction,
    GoToNudgeStepActionV,
    SnoozeAction,
    StepBackAction,
    StepForwardAction,
    StayOnStepAction
  ]);
  var ConcreteAction = t8.union([EffectfulActionV, NavigationActionV]);
  var NudgeButtonActionV = t8.union([NoAction, UseConditionalLogicAction, ConcreteAction]);
  var ActionSequenceV = t8.type({
    navigation: NavigationActionV,
    effects: t8.array(EffectfulActionV)
  });
  var isActionSequence = (action) => ActionSequenceV.is(action);
  var NudgeConditionalActionConditionV = t8.type({
    field: t8.string,
    operator: t8.union([
      t8.literal("eq"),
      t8.literal("neq"),
      t8.literal("gt"),
      t8.literal("lt"),
      t8.literal("gte"),
      t8.literal("lte"),
      t8.literal("contains"),
      t8.literal("does_not_contain")
    ]),
    operand: t8.union([t8.string, t8.number, t8.array(t8.union([t8.string, t8.number]))]),
    type: t8.union([t8.literal("survey_response"), t8.literal("user_property")])
  });
  var NudgeConditionalActionV = t8.intersection([
    t8.type({
      operator: t8.union([t8.literal("eq"), t8.literal("neq"), t8.literal("gt"), t8.literal("lt")]),
      operand: t8.union([t8.string, t8.number]),
      action: NudgeButtonActionV
    }),
    t8.partial({
      v2: t8.intersection([
        t8.type({
          conditions: t8.array(NudgeConditionalActionConditionV),
          action: NudgeButtonActionV,
          logic: withFallback(t8.union([t8.literal("and"), t8.literal("or")]), "and")
        }),
        t8.partial({
          actions: ActionSequenceV,
          evaluationConditions: t8.array(t8.array(EvaluationConditionV))
        })
      ])
    })
  ]);
  var NudgeContentButtonBlockV = t8.type({
    type: t8.literal("button"),
    meta: t8.union([
      t8.partial({
        label: t8.string,
        action: NudgeButtonActionV,
        actions: ActionSequenceV,
        buttonType: t8.union([t8.literal("primary"), t8.literal("secondary"), t8.literal("snooze")], void 0),
        conditionalActions: t8.array(NudgeConditionalActionV),
        defaultAction: NudgeButtonActionV,
        defaultActions: ActionSequenceV
      }),
      t8.null
    ])
  });
  var NudgeContentSurveyTextBlockV = t8.type({
    uuid: t8.string,
    type: t8.literal("survey_text"),
    meta: t8.intersection([
      t8.type({ prompt: t8.string }),
      SurveyValidation,
      t8.partial({ label: t8.string, ariaLabel: t8.string })
    ])
  });
  var NudgeStepContentSurveyTextShortBlockTypeV = t8.type({
    uuid: t8.string,
    type: t8.literal("survey_text_short"),
    meta: t8.intersection([
      t8.intersection([
        t8.type({ prompt: t8.string }),
        t8.partial({ prefill: t8.type({ enabled: t8.boolean, userProperty: t8.string }) })
      ]),
      SurveyValidation,
      t8.partial({ label: t8.string, ariaLabel: t8.string })
    ])
  });
  var NudgeContentListBlockV = t8.type({
    uuid: t8.string,
    type: t8.literal("survey_list"),
    meta: t8.intersection([
      t8.type({
        options: t8.array(t8.string),
        listType: t8.union([t8.literal("single"), t8.literal("multiple")]),
        displayType: t8.union([t8.literal("dropdown"), t8.literal("list"), t8.literal("grid")])
      }),
      SurveyValidation,
      t8.partial({
        conditionalActions: t8.array(NudgeConditionalActionV),
        defaultAction: NudgeButtonActionV,
        isOrderRandom: t8.boolean,
        otherOption: t8.type({
          enabled: t8.boolean,
          label: t8.string,
          placeholderLabel: t8.string
        }),
        label: t8.string,
        ariaLabel: t8.string
      })
    ])
  });
  var NudgeContentSurveyRatingBlockV = t8.type({
    uuid: t8.string,
    type: t8.literal("survey_rating"),
    meta: t8.intersection([
      t8.union([
        t8.type({
          type: t8.literal("emojis"),
          lowerLabel: t8.string,
          upperLabel: t8.string,
          options: t8.number,
          emojis: t8.array(t8.string)
        }),
        t8.type({
          type: t8.literal("numbers"),
          lowerLabel: t8.string,
          upperLabel: t8.string,
          options: t8.number
        }),
        t8.type({
          type: t8.literal("stars"),
          lowerLabel: t8.string,
          upperLabel: t8.string,
          options: t8.number
        }),
        t8.type({
          type: t8.literal("nps"),
          lowerLabel: t8.string,
          upperLabel: t8.string,
          options: t8.number
        })
      ]),
      SurveyValidation,
      t8.partial({
        conditionalActions: t8.array(NudgeConditionalActionV),
        defaultAction: NudgeButtonActionV,
        label: t8.string,
        ariaLabel: t8.string
      })
    ])
  });
  var NudgeContentBlockV = t8.union([
    NudgeContentMarkdownBlockV,
    NudgeContentImageBlockV,
    NudgeContentVideoBlockV,
    NudgeContentButtonBlockV,
    NudgeContentSurveyTextBlockV,
    NudgeStepContentSurveyTextShortBlockTypeV,
    NudgeContentSurveyRatingBlockV,
    NudgeContentListBlockV
  ]);
  var NudgeStepBaseV = t8.type({
    id: t8.number,
    title: t8.string,
    content: t8.array(NudgeContentBlockV)
  });
  var MediaPositionV = t8.union([t8.literal("left"), t8.literal("right")]);
  var NudgeStepFooterLayoutConfigV = t8.partial({
    footerLayout: t8.union([t8.literal("classic"), t8.literal("split"), t8.literal("centered"), t8.literal("stacked")])
  });
  var NudgeStepLayoutConfigV = t8.intersection([
    t8.union([
      t8.partial({
        layout: t8.union([t8.literal("classic"), t8.literal("vertical"), t8.literal("showcase")])
      }),
      t8.partial({
        layout: t8.literal("horizontal"),
        mediaPosition: MediaPositionV
      })
    ]),
    t8.partial({
      titleAlignment: t8.union([t8.literal("start"), t8.literal("center"), t8.literal("end")]),
      contentAlignment: t8.union([t8.literal("start"), t8.literal("center"), t8.literal("end")])
    })
  ]);
  var ElementSelectorV = t8.intersection([
    t8.type({
      selector: t8.string,
      text: t8.string,
      tag: t8.string,
      attributes: t8.record(t8.string, t8.string)
    }),
    t8.partial({
      strategy: withFallback(
        t8.union([t8.literal("strict"), t8.literal("fallback"), t8.literal("selector_only")]),
        "fallback"
      )
    })
  ]);
  var NudgeStepAdditionalV = t8.intersection(
    [
      t8.type({
        formFactor: t8.union([
          t8.intersection([
            t8.type({
              type: t8.literal("modal")
            }),
            t8.partial({
              position: ModalPositionV,
              textAnimation: t8.literal("typewriter"),
              canClickOutsideToClose: t8.boolean
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("checklist")
            }),
            t8.partial({
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number])
            })
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("popover"),
              position: PopoverPositionV
            }),
            t8.partial({
              textAnimation: t8.literal("typewriter"),
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number])
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("banner"),
              position: BannerPositionV,
              placement: t8.union([t8.literal("default"), t8.literal("overlay")]),
              sticky: t8.boolean
            }),
            t8.partial({
              textAnimation: t8.literal("typewriter"),
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number])
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("pin"),
              anchor: t8.string
            }),
            t8.partial({
              anchorSelector: ElementSelectorV,
              isOpenByDefault: t8.boolean,
              isShowingMask: t8.boolean,
              advanceTrigger: t8.string,
              offset: t8.type({
                x: t8.string,
                y: t8.string
              }),
              position: PinPositionV,
              alignment: t8.union([
                t8.literal("center"),
                t8.literal("top"),
                t8.literal("bottom"),
                t8.literal("left"),
                t8.literal("right")
              ]),
              textAnimation: t8.literal("typewriter"),
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number]),
              pointer: t8.type({ type: t8.union([t8.literal("beacon"), t8.literal("arrow")]) })
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("tooltip"),
              anchor: t8.string,
              showOn: t8.union([t8.literal("hover"), t8.literal("click")]),
              marker: t8.intersection([
                t8.union([
                  t8.type({
                    type: t8.literal("beacon")
                  }),
                  t8.type({
                    type: t8.literal("icon"),
                    icon: t8.union([
                      t8.literal("helpCircle"),
                      t8.literal("helpSquare"),
                      t8.literal("infoCircle"),
                      t8.literal("bookClosed"),
                      t8.literal("lightBulb"),
                      t8.literal("lightning")
                    ])
                  }),
                  t8.type({
                    type: t8.literal("image"),
                    source: t8.string
                  })
                ]),
                t8.type({
                  positioning: t8.type({
                    position: t8.union([
                      t8.literal("left"),
                      t8.literal("right"),
                      t8.literal("inline_left"),
                      t8.literal("inline_right")
                    ]),
                    offset: t8.type({
                      x: t8.string,
                      y: t8.string
                    })
                  })
                }),
                t8.partial({
                  width: t8.number
                })
              ])
            }),
            t8.partial({
              anchorSelector: ElementSelectorV,
              textAnimation: t8.literal("typewriter"),
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number]),
              pointer: t8.type({ type: t8.union([t8.literal("none"), t8.literal("arrow")]) })
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          t8.intersection([
            t8.type({
              type: t8.literal("card"),
              anchor: t8.string,
              position: CardPositionV
            }),
            t8.partial({
              anchorSelector: ElementSelectorV,
              textAnimation: t8.literal("typewriter"),
              zIndexOverride: t8.union([t8.undefined, t8.null, t8.number]),
              alignment: t8.union([t8.literal("start"), t8.literal("center"), t8.literal("end")]),
              cardWidth: t8.type({
                type: t8.union([t8.literal("auto"), t8.literal("fixed"), t8.literal("full")]),
                value: t8.union([t8.number, t8.undefined])
              }),
              cardHeight: t8.type({
                type: t8.union([t8.literal("auto"), t8.literal("fixed"), t8.literal("full")]),
                value: t8.union([t8.number, t8.undefined])
              }),
              cardMargin: t8.type({
                top: t8.number,
                right: t8.number,
                bottom: t8.number,
                left: t8.number
              })
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ])
        ])
      }),
      t8.partial({
        goal: t8.union([PageVisitedGoal, ElementClickedGoal, CTAClickedGoal, EventTrackedGoal, t8.null])
      })
    ],
    "NudgeStepAdditional"
  );
  var stepDefaults = {
    formFactor: {
      type: "popover",
      position: "top-right"
    }
  };
  var NudgeStepV = t8.intersection([NudgeStepBaseV, NudgeStepAdditionalV], "Nudge");
  var SimpleNudgeTriggerType = t8.union([
    t8.literal("immediately"),
    t8.literal("smart_delay"),
    t8.literal("rage_click"),
    t8.literal("user_confusion"),
    t8.literal("exit_intent"),
    t8.literal("none")
  ]);
  var ElementAppearedTriggerConfigV = t8.type({
    type: t8.literal("element_appeared"),
    data: t8.type({ selector: t8.string }),
    conditions: t8.array(t8.array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var ElementClickedTriggerConfigV = t8.type({
    type: t8.literal("element_clicked"),
    data: t8.type({ selector: t8.string }),
    conditions: t8.array(t8.array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var EventTriggerConfigV = t8.type({
    type: t8.literal("analytics_event"),
    data: t8.type({
      event: t8.string
    }),
    conditions: t8.array(t8.array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var AfterTimeTriggerConfigV = t8.type({
    type: t8.literal("after_time"),
    data: t8.type({ unit: t8.union([t8.literal("minute"), t8.literal("second")]), value: t8.number }),
    conditions: t8.array(t8.array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var NudgeTriggerConfigV = t8.union([
    t8.type({
      type: SimpleNudgeTriggerType,
      conditions: t8.array(t8.array(EvaluationConditionV)),
      data: t8.union([t8.null, t8.undefined, t8.record(t8.string, t8.any)])
    }),
    ElementAppearedTriggerConfigV,
    ElementClickedTriggerConfigV,
    EventTriggerConfigV,
    AfterTimeTriggerConfigV
  ]);
  var NudgeCooldownPeriodV = t8.union([
    t8.literal("day"),
    t8.literal("week"),
    t8.literal("month"),
    t8.literal("year"),
    t8.literal("session"),
    t8.string
    // keep for forward compatibility
  ]);
  var NudgeLifecycleConfigV = t8.type({
    stopShowingIfCompleted: t8.boolean,
    stopShowingIfDismissed: t8.boolean,
    cooldownLimits: t8.array(ThrottleV),
    conditions: t8.array(t8.array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var TagV = t8.type({
    id: t8.number,
    name: t8.string
  });
  var NudgeBaseV = t8.intersection(
    [
      t8.type({
        title: t8.string,
        // TODO: can be removed, not needed in the SDK
        variantId: t8.number,
        steps: t8.array(NudgeStepV),
        triggerConfig: NudgeTriggerConfigV,
        lifecycleConfig: NudgeLifecycleConfigV,
        flagKey: t8.string
      }),
      t8.partial({
        archived: t8.boolean,
        displayTitle: t8.string,
        displayDescription: t8.string,
        position: t8.union([t8.literal("bottomRight"), t8.literal("bottomLeft")]),
        priority: t8.number,
        dir: t8.union([t8.literal("ltr"), t8.literal("rtl")]),
        stepCounterFormat: t8.union([t8.literal("numeric"), t8.literal("verbose")]),
        tags: t8.array(TagV),
        version: t8.number,
        latestVersion: t8.number
      })
    ],
    "NudgeBase"
  );
  var NudgeTypeV = t8.union([
    t8.literal("survey"),
    t8.literal("tour"),
    t8.literal("banner"),
    t8.literal("tooltip"),
    t8.literal("checklist"),
    t8.string
  ]);
  var TranslationStatusV = t8.type({
    translated: t8.boolean,
    status: t8.union([t8.literal("missing"), t8.literal("outdated"), t8.literal("up-to-date"), t8.null, t8.undefined]),
    resolvedLocale: t8.union([t8.string, t8.null, t8.undefined])
  });
  var NudgeAdditionalV = t8.type(
    {
      platform: withFallback(
        t8.union([
          t8.literal("web"),
          t8.literal("android"),
          t8.literal("ios"),
          t8.literal("react-native"),
          t8.literal("flutter")
        ]),
        "web"
      ),
      showStepCounter: t8.boolean,
      isCarousel: t8.union([t8.boolean, t8.undefined]),
      isDismissible: t8.boolean,
      isSnoozable: t8.boolean,
      isSnoozableOnAllSteps: t8.boolean,
      assistantIntro: t8.boolean,
      snoozeLabel: t8.string,
      doneLabel: t8.string,
      snoozeDuration: t8.type({
        interval: SnoozeInterval,
        value: SnoozeValue
      }),
      type: NudgeTypeV,
      previewUrl: t8.union([t8.string, t8.null, t8.undefined]),
      customThemeId: t8.union([t8.number, t8.null, t8.undefined]),
      variant: t8.string,
      pageTargeting: PageTargetingConfigV,
      hideIfPageTargetingNotMet: t8.boolean,
      temporarilyHideTargeting: PageTargetingConfigV,
      translationStatus: t8.union([TranslationStatusV, t8.null, t8.undefined]),
      breakingFeatures: t8.union([t8.string, t8.null, t8.undefined])
    },
    "NudgeAdditional"
  );
  var defaults2 = {
    platform: "web",
    showStepCounter: false,
    isCarousel: false,
    isDismissible: true,
    isSnoozable: false,
    isSnoozableOnAllSteps: true,
    assistantIntro: false,
    snoozeLabel: "Snooze",
    doneLabel: "Done",
    snoozeDuration: {
      interval: "day",
      value: 3
    },
    type: "tour",
    previewUrl: null,
    customThemeId: null,
    translationStatus: null,
    variant: "treatment",
    pageTargeting: {
      conditions: [[]],
      configs: []
    },
    hideIfPageTargetingNotMet: true,
    temporarilyHideTargeting: {
      conditions: [[]],
      configs: []
    },
    breakingFeatures: null
  };
  var NudgeV = t8.intersection([NudgeBaseV, NudgeAdditionalV], "Nudge");
  var createUnsupportedFeatureNudge = (data) => {
    return {
      title: data?.title || "Unsupported Feature",
      variantId: data?.variantId ?? 0,
      flagKey: data?.flagKey || "unsupported",
      steps: [],
      triggerConfig: {
        type: "none",
        conditions: [[]],
        data: null
      },
      lifecycleConfig: {
        conditions: [[]],
        cooldownLimits: [],
        stopShowingIfCompleted: false,
        stopShowingIfDismissed: false
      },
      ...defaults2,
      breakingFeatures: data?.breakingFeatures ?? null
    };
  };
  var hasUnsupportedBreakingFeatures = (data, supportedBreakingFeatures) => {
    if (!supportedBreakingFeatures || !data.breakingFeatures) {
      return false;
    }
    const breakingFeatures = typeof data.breakingFeatures === "string" ? data.breakingFeatures.split(",").map((f) => f.trim()).filter((f) => f.length > 0) : [];
    return breakingFeatures.some((feature) => !supportedBreakingFeatures.includes(feature));
  };
  var Nudge = class {
    static decode = (data, supportedBreakingFeatures) => {
      const variantId = data?.variantId ?? "unknown";
      if (hasUnsupportedBreakingFeatures(data, supportedBreakingFeatures)) {
        logger.debug(
          `Nudge variant ${variantId} uses breaking features not supported by this platform. Breaking features used: ${JSON.stringify(data?.breakingFeatures)}, Supported features: ${JSON.stringify(supportedBreakingFeatures)}`
        );
        return decodeThrowing(NudgeV, createUnsupportedFeatureNudge(data));
      }
      try {
        return decodeThrowing(NudgeV, data);
      } catch (e2) {
        const errorMessage = e2 instanceof Error ? e2.message : String(e2);
        logger.debug(`Error decoding nudge variant ${variantId}. Error: ${errorMessage}.`);
        try {
          return decodeThrowing(NudgeV, {
            ...defaults2,
            ...data,
            steps: (data?.steps || []).map((step) => ({ ...stepDefaults, ...step }))
          });
        } catch (fallbackError) {
          const fallbackErrorMessage = fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
          logger.debug(
            `Error decoding nudge variant ${variantId} with fallback values. Error: ${errorMessage}. Fallback error: ${fallbackErrorMessage}.`
          );
          return decodeThrowing(NudgeV, createUnsupportedFeatureNudge(data));
        }
      }
    };
  };

  // ../shared/src/internal/middleware/types.ts
  var isValidSessionPropertyKey = (key) => typeof key === "string" && key.length > 0;
  var isValidSessionPropertyValue = (value) => typeof value === "number" || typeof value === "string" || typeof value === "boolean";
  var isListBlock = (block) => block.type === "survey_list";
  var hasConditionalActionsBlock = (block) => {
    if (!(block.type === "survey_rating" || block.type === "survey_list" || block.type === "button")) {
      return false;
    }
    if (!block.meta) {
      return false;
    }
    return !!(block.meta.conditionalActions && block.meta.conditionalActions.length > 0 || block.meta.defaultAction && block.meta.defaultAction.type !== "no_action");
  };

  // ../shared/src/products/nudges/store/rules.ts
  var RAGE_CLOSE_THRESHOLD = 2e3;
  var RULES = {
    generic: {
      stepsPresentation: "sequential",
      blockedBy: ["generic"],
      includedInCustomThrottles: true,
      media: true,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    checklist: {
      stepsPresentation: "all",
      blockedBy: ["checklist"],
      includedInCustomThrottles: true,
      media: false,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    banner: {
      stepsPresentation: "single",
      blockedBy: ["banner"],
      includedInCustomThrottles: false,
      media: false,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    tooltip: {
      stepsPresentation: "single",
      blockedBy: [],
      includedInCustomThrottles: false,
      media: true,
      stopOnSimulateStart: false,
      canBeActive: false
    },
    card: {
      stepsPresentation: "sequential",
      blockedBy: [],
      includedInCustomThrottles: false,
      media: true,
      stopOnSimulateStart: false,
      canBeActive: true
    }
  };
  var getApplicableNudgeTypeForStrings = (formFactor) => {
    if (formFactor in RULES) {
      return formFactor;
    }
    return "generic";
  };
  var getApplicableNudgeType = (nudge) => {
    return getApplicableNudgeTypeForStrings(nudge.steps[0].formFactor.type);
  };
  var isIncludedInCustomThrottles = (nudge) => {
    return RULES[getApplicableNudgeType(nudge)].includedInCustomThrottles;
  };
  var canBeActive = (nudge) => {
    return RULES[getApplicableNudgeType(nudge)].canBeActive;
  };
  var typeIsIncludedInCustomThrottles = (formFactor) => {
    return RULES[getApplicableNudgeTypeForStrings(formFactor)].includedInCustomThrottles;
  };
  var isBlocked = (nudge, renderingNudges) => {
    const renderingNudgeTypes = new Set(renderingNudges.map((n) => getApplicableNudgeType(n)));
    return RULES[getApplicableNudgeType(nudge)].blockedBy.some((element) => renderingNudgeTypes.has(element));
  };
  var getBlockingNudge = (nudge, renderingNudges) => {
    const nudgeType = getApplicableNudgeType(nudge);
    const blockedByTypes = RULES[nudgeType].blockedBy;
    for (const renderingNudge of renderingNudges) {
      const renderingNudgeType = getApplicableNudgeType(renderingNudge);
      if (blockedByTypes.includes(renderingNudgeType)) {
        return renderingNudge;
      }
    }
    return null;
  };
  var hasSequentialSteps = (nudge) => {
    return RULES[getApplicableNudgeType(nudge)].stepsPresentation === "sequential";
  };
  var shouldStopOnSimulateStart = (nudge) => {
    return RULES[getApplicableNudgeType(nudge)].stopOnSimulateStart;
  };
  var usesNavigationStack = (nudge) => {
    return !nudge.isCarousel;
  };
  var closesNudgeOnStepChange = (nudge, event, stepIndex) => {
    if (isCardNudge(nudge)) {
      if (event.type === "REGRESS") {
        return false;
      }
      if (event.type === "ADVANCE" && stepIndex !== nudge.steps.length - 1) {
        return false;
      }
    }
    if (!nudge.isCarousel) {
      return true;
    }
    if (event.type === "REGRESS") {
      return false;
    } else if (event.type === "ADVANCE") {
      if (event.action?.type === "go_to_step") {
        return false;
      } else if (event.action?.type === "step_forward" && stepIndex !== nudge.steps.length - 1) {
        return false;
      }
    }
    return true;
  };
  var isSurvey = (nudge) => {
    return nudge.type === "survey";
  };
  var getNudgeProductType = (nudge) => {
    return nudge.type === "survey" ? "survey" : "guide";
  };
  var getProductMeta = (nudge) => {
    const type11 = getNudgeProductType(nudge);
    return {
      type: type11,
      name: getNudgeProductType(nudge) === "guide" ? "Guide" : "Survey"
    };
  };

  // ../shared/src/products/nudges/store/utils.ts
  var urlMatchesConditions = (_, url, conditions, defaultValue = true) => {
    const pageTarget = {
      context: {
        url
      },
      result: {}
    };
    if (conditions.flat().length === 0) {
      return defaultValue;
    }
    return _.evalEngine.evaluateConditions(pageTarget, conditions);
  };

  // ../shared/src/services/targeting/helpers.ts
  var getActiveVariantForFlag = (flagKey, decideResult) => {
    return decideResult?.[flagKey]?.key;
  };
  var nudgePassesDecide = (nudge, decideResult) => {
    const activeVariantForNudge = getActiveVariantForFlag(nudge.flagKey, decideResult);
    if (!activeVariantForNudge) {
      logger.error("Nudge does not have a decide result!");
      return false;
    }
    return activeVariantForNudge === nudge.variant;
  };
  var getExperimentKey = (nudge, decideResult) => decideResult?.[nudge.flagKey]?.metadata?.experimentKey;
  var getEvaluationId = (nudge, decideResult) => decideResult?.[nudge.flagKey]?.metadata?.evaluationId;

  // ../shared/src/products/nudges/store/selectors.ts
  var normalizePlainFalsyValues = (record5) => {
    let updatedRecord = null;
    for (const [key, value] of Object.entries(record5)) {
      if (value === 0 || value === false) {
        if (!updatedRecord) {
          updatedRecord = { ...record5 };
        }
        updatedRecord[key] = value === 0 ? "0" : "false";
      }
    }
    return updatedRecord ?? record5;
  };
  var isAnalyticsEventTrigger = (trigger) => trigger.type === "analytics_event";
  var getTriggerWithNormalizedProperties = (trigger) => {
    if (!trigger || !isAnalyticsEventTrigger(trigger) || !trigger.data.properties) {
      return trigger;
    }
    const normalizedProperties = normalizePlainFalsyValues(trigger.data.properties);
    if (normalizedProperties === trigger.data.properties) {
      return trigger;
    }
    return {
      ...trigger,
      data: {
        ...trigger.data,
        properties: normalizedProperties
      }
    };
  };
  var getAllNudgeActors = (_) => _.nudgesManager?.getSnapshot()?.context.nudgeMachines;
  var getNudgeActor = (_, id) => _.nudgesManager?.getSnapshot().context.nudgeMachines.get(id.toString());
  var getDebugActor = (_) => {
    const debuggingNudge = _.nudgesManager?.getSnapshot()?.context.debugMode.currentNudge;
    if (debuggingNudge) {
      return getNudgeActor(_, debuggingNudge.variantId);
    }
  };
  var getNudgeActorSnapshot = (_, id) => getNudgeActor(_, id)?.getSnapshot();
  var getEffectiveSessionStart = (_) => {
    const analyticsSessionStart = _.user?.getSessionId?.();
    if (typeof analyticsSessionStart === "number" && Number.isFinite(analyticsSessionStart) && analyticsSessionStart > 0) {
      return analyticsSessionStart;
    }
    return _.sessionStart;
  };
  var passesBuiltInThrottles = (_, nudge) => {
    const nudgesInRenderLoop = getNudgesInRenderLoop(_);
    return !isBlocked(nudge, nudgesInRenderLoop);
  };
  var passesCustomThrottles = (_, nudge) => {
    if (!_.organization) return true;
    const nudgesState = getAllNudgeDataFromUserStore(_);
    const nudgeProductType = getNudgeProductType(nudge);
    const sessionStart = getEffectiveSessionStart(_);
    if (!nudgesState) return true;
    const throttleConfig = nudgeProductType === "survey" ? _.organization.surveyThrottle : _.organization.guideThrottle;
    let limits = throttleConfig.limits;
    if (!limits && throttleConfig.limit) {
      limits = [throttleConfig.limit];
    }
    const { productTypeCounts, tagThrottleCounts, secondsSinceLastActivation } = getAllActivationCounts(
      nudgesState,
      sessionStart,
      nudgeProductType,
      throttleConfig.limits
    );
    const nudgeStateTarget = {
      context: {
        derivedNudgeState: {
          activationCounts: {
            ...productTypeCounts,
            ...tagThrottleCounts
          },
          secondsSinceLastActivation
        }
      },
      result: {}
    };
    const applicableConditions = throttleConfig.conditions.map((andGroup) => {
      return andGroup.filter((condition) => {
        const hasTagThrottle = condition.selector.some((part) => part.startsWith("tagThrottle_"));
        if (!hasTagThrottle) {
          return true;
        }
        const tagThrottlePart = condition.selector.find((part) => part.startsWith("tagThrottle_"));
        if (tagThrottlePart) {
          const tagIds = tagThrottlePart.replace("tagThrottle_", "").split("_").map(Number);
          return tagIds.some((tagId) => nudge.tags?.some((tag) => tag.id === tagId));
        }
        return false;
      });
    }).filter((andGroup) => andGroup.length > 0);
    const passed = applicableConditions.flat().length == 0 || _.evalEngine.evaluateConditions(nudgeStateTarget, applicableConditions);
    if (!passed) {
      return false;
    }
    return true;
  };
  var countGreaterThan = (epoch, timestamps) => {
    return timestamps.filter((ts) => ts > epoch).length;
  };
  var countForPeriod = (timestamps, sessionStart, period, periodCount = 1) => {
    const currentEpoch = Date.now();
    const dayInMillis = 1e3 * 60 * 60 * 24;
    let startEpoch;
    switch (period) {
      case "session":
        startEpoch = sessionStart;
        break;
      case "day":
        startEpoch = currentEpoch - dayInMillis * periodCount;
        break;
      case "week":
        startEpoch = currentEpoch - dayInMillis * 7 * periodCount;
        break;
      case "month":
        startEpoch = currentEpoch - dayInMillis * 30 * periodCount;
        break;
      case "quarter":
        startEpoch = currentEpoch - dayInMillis * 90 * periodCount;
        break;
      case "year":
        startEpoch = currentEpoch - dayInMillis * 365 * periodCount;
        break;
      case "ever":
        return `${timestamps.length}`;
      default:
        startEpoch = currentEpoch;
    }
    return `${countGreaterThan(startEpoch, timestamps)}`;
  };
  var countsByTimeWindow = (timestamps, sessionStart) => {
    const currentEpoch = Date.now();
    const dayInMillis = 1e3 * 60 * 60 * 24;
    const thresholds = {
      session: sessionStart,
      day: currentEpoch - dayInMillis,
      week: currentEpoch - dayInMillis * 7,
      month: currentEpoch - dayInMillis * 30,
      quarter: currentEpoch - dayInMillis * 90,
      year: currentEpoch - dayInMillis * 365
    };
    const counts = {
      session: 0,
      day: 0,
      week: 0,
      month: 0,
      quarter: 0,
      year: 0,
      ever: timestamps.length
    };
    for (const timestamp of timestamps) {
      if (timestamp > thresholds.session) counts.session++;
      if (timestamp > thresholds.day) counts.day++;
      if (timestamp > thresholds.week) counts.week++;
      if (timestamp > thresholds.month) counts.month++;
      if (timestamp > thresholds.quarter) counts.quarter++;
      if (timestamp > thresholds.year) counts.year++;
    }
    return {
      // TODO: return numbers directly once bug in evalengine with number value 0 is fixed
      session: `${counts.session}`,
      day: `${counts.day}`,
      week: `${counts.week}`,
      month: `${counts.month}`,
      quarter: `${counts.quarter}`,
      year: `${counts.year}`,
      ever: `${counts.ever}`
    };
  };
  var getTagThrottleKey = (tagIds) => {
    const sortedTagIds = [...tagIds].sort((a, b) => a - b);
    return `tagThrottle_${sortedTagIds.join("_")}`;
  };
  var getAllActivationCounts = (nudgesState, sessionStart, targetProductType, limits) => {
    if (!nudgesState) {
      return {
        productTypeCounts: { session: "0", day: "0", week: "0", month: "0", quarter: "0", year: "0", ever: "0" },
        tagThrottleCounts: {}
      };
    }
    const currentEpoch = Date.now();
    const dayInMillis = 1e3 * 60 * 60 * 24;
    const thresholds = {
      session: sessionStart,
      day: currentEpoch - dayInMillis,
      week: currentEpoch - dayInMillis * 7,
      month: currentEpoch - dayInMillis * 30,
      quarter: currentEpoch - dayInMillis * 90,
      year: currentEpoch - dayInMillis * 365
    };
    let lastActivationTs = 0;
    const productTypeCounts = {
      session: 0,
      day: 0,
      week: 0,
      month: 0,
      quarter: 0,
      year: 0,
      ever: 0
    };
    const tagThrottleCounters = {};
    const tagThrottles = limits.filter((limit) => limit.tagIds?.length);
    tagThrottles.forEach((throttle2) => {
      if (throttle2.tagIds) {
        const throttleKey = getTagThrottleKey(throttle2.tagIds);
        tagThrottleCounters[throttleKey] = {
          session: 0,
          day: 0,
          week: 0,
          month: 0,
          quarter: 0,
          year: 0,
          ever: 0
        };
      }
    });
    for (const nudgeState of Object.values(nudgesState)) {
      if (nudgeState?.activatedTs?.length && nudgeState.type) {
        const stateNudgeProductType = nudgeState.type === "survey" ? "survey" : "guide";
        const matchingTagThrottles = [];
        if (nudgeState?.tagIds?.length) {
          tagThrottles.forEach((throttle2) => {
            if (throttle2.tagIds && throttle2.tagIds.some((tagId) => nudgeState.tagIds.includes(tagId))) {
              const throttleKey = getTagThrottleKey(throttle2.tagIds);
              if (throttleKey in tagThrottleCounters) {
                matchingTagThrottles.push(throttleKey);
              }
            }
          });
        }
        const formFactor = nudgeState.formFactor || nudgeState.type;
        for (const timestamp of nudgeState.activatedTs) {
          if (stateNudgeProductType === targetProductType && typeIsIncludedInCustomThrottles(formFactor)) {
            if (timestamp > lastActivationTs) lastActivationTs = timestamp;
            productTypeCounts.ever++;
            if (timestamp > thresholds.session) productTypeCounts.session++;
            if (timestamp > thresholds.day) productTypeCounts.day++;
            if (timestamp > thresholds.week) productTypeCounts.week++;
            if (timestamp > thresholds.month) productTypeCounts.month++;
            if (timestamp > thresholds.quarter) productTypeCounts.quarter++;
            if (timestamp > thresholds.year) productTypeCounts.year++;
          }
          for (const throttleKey of matchingTagThrottles) {
            tagThrottleCounters[throttleKey].ever++;
            if (timestamp > thresholds.session) tagThrottleCounters[throttleKey].session++;
            if (timestamp > thresholds.day) tagThrottleCounters[throttleKey].day++;
            if (timestamp > thresholds.week) tagThrottleCounters[throttleKey].week++;
            if (timestamp > thresholds.month) tagThrottleCounters[throttleKey].month++;
            if (timestamp > thresholds.quarter) tagThrottleCounters[throttleKey].quarter++;
            if (timestamp > thresholds.year) tagThrottleCounters[throttleKey].year++;
          }
        }
      }
    }
    const productTypeCountsFormatted = {
      session: `${productTypeCounts.session}`,
      day: `${productTypeCounts.day}`,
      week: `${productTypeCounts.week}`,
      month: `${productTypeCounts.month}`,
      quarter: `${productTypeCounts.quarter}`,
      year: `${productTypeCounts.year}`,
      ever: `${productTypeCounts.ever}`
    };
    const tagThrottleCounts = {};
    for (const [throttleKey, counts] of Object.entries(tagThrottleCounters)) {
      tagThrottleCounts[throttleKey] = {
        session: `${counts.session}`,
        day: `${counts.day}`,
        week: `${counts.week}`,
        month: `${counts.month}`,
        quarter: `${counts.quarter}`,
        year: `${counts.year}`,
        ever: `${counts.ever}`
      };
    }
    const secondsSinceLastActivation = lastActivationTs ? Math.floor((currentEpoch - lastActivationTs) / 1e3) : Number.MAX_SAFE_INTEGER;
    return {
      productTypeCounts: productTypeCountsFormatted,
      tagThrottleCounts,
      secondsSinceLastActivation: `${secondsSinceLastActivation}`
    };
  };
  var passesCooldown = (_, nudge) => {
    const nudgeState = getNudgeDataFromUserStore(_, nudge.variantId);
    const timestamps = nudgeState?.activatedTs ?? [];
    const sessionStart = getEffectiveSessionStart(_);
    const activationCounts = {};
    const legacyCounts = countsByTimeWindow(timestamps, sessionStart);
    Object.assign(activationCounts, legacyCounts);
    for (const cooldownLimit of nudge.lifecycleConfig.cooldownLimits) {
      if (cooldownLimit.period) {
        const periodCount = cooldownLimit.periodCount ?? 1;
        const key = `${periodCount}_${cooldownLimit.period}`;
        activationCounts[key] = countForPeriod(timestamps, sessionStart, cooldownLimit.period, periodCount);
      }
    }
    const nudgeStateTarget = {
      context: {
        derivedNudgeState: { activationCounts },
        nudgeState
      },
      result: {}
    };
    const retval = _.evalEngine.evaluateConditions(nudgeStateTarget, nudge.lifecycleConfig.conditions);
    return retval;
  };
  var passesSnoozedConditions = (_, nudge) => {
    const snoozedUntilTs = getNudgeDataFromUserStore(_, nudge.variantId)?.snoozedUntilTs;
    return !(snoozedUntilTs && snoozedUntilTs > Date.now());
  };
  var passesPageTargeting = (_, nudge) => {
    return urlMatchesConditions(_, _.location.href, nudge.pageTargeting.conditions);
  };
  var passesClickedElement = (_, nudge, triggerEvent) => {
    if (triggerEvent?.trigger.type === "element_clicked" && nudge.triggerConfig.type === "element_clicked") {
      return triggerEvent.trigger.match(nudge.triggerConfig.data.selector);
    }
    return true;
  };
  var passesTriggerElement = async (_, nudge, triggerEvent, nudgeSeenThisSessionTs) => {
    if (triggerEvent?.trigger.type == "element_appeared" && nudge.triggerConfig.type == "element_appeared") {
      if (nudgeSeenThisSessionTs.length > 0) {
        return false;
      }
      const elementToAppearIsVisible = await _.services.isElementVisible(nudge.triggerConfig.data.selector);
      if (!elementToAppearIsVisible) return false;
    }
    return true;
  };
  var shouldTemporarilyHide = (_, nudge) => {
    if (nudge.hideIfPageTargetingNotMet) {
      return !passesPageTargeting(_, nudge);
    } else {
      return urlMatchesConditions(_, _.location.href, nudge.temporarilyHideTargeting.conditions, false);
    }
  };
  var getAllNudgeDataFromUserStore = (_) => {
    return _.endUserStore.data.nudgeInteractions;
  };
  var getNudgeDataFromUserStore = (_, variantId) => getAllNudgeDataFromUserStore(_)?.[Number(variantId)];
  var getSessionPropertyConditions = (conditionGroups) => conditionGroups.map((andGroup) => andGroup.filter((condition) => condition.selector.includes("sessionProperties"))).filter((sessionOnlyAndGroup) => sessionOnlyAndGroup.length > 0);
  var passesSessionProperties = (_, sessionPropertyConditions) => {
    if (sessionPropertyConditions.flat().length === 0) {
      return true;
    }
    const normalizedSessionProperties = _.sessionProperties ? normalizePlainFalsyValues(_.sessionProperties) : {};
    const sessionPropertyEvalTarget = {
      context: {
        sessionProperties: normalizedSessionProperties
      },
      result: {}
    };
    return _.evalEngine.evaluateConditions(sessionPropertyEvalTarget, sessionPropertyConditions);
  };
  var passesTriggerMatch = (_, nudge, triggerEvent) => {
    if (!triggerEvent) return false;
    if (triggerEvent.overrides?.excludeNudgeIds?.includes(nudge.variantId)) {
      return false;
    }
    const nudgeState = getNudgeActorSnapshot(_, nudge.variantId);
    if (triggerEvent.trigger.type === "active" && isNudgeActive(_, nudge)) {
      return true;
    }
    if (nudgeState?.status !== "done") {
      const normalizedTrigger = getTriggerWithNormalizedProperties(triggerEvent.trigger);
      const normalizedSessionProperties = normalizePlainFalsyValues(_.sessionProperties);
      const evalTarget = {
        context: {
          ...normalizedTrigger ?? {},
          sessionProperties: normalizedSessionProperties
        },
        result: {}
      };
      let conditionsToEvaluate = nudge.triggerConfig.conditions;
      if (triggerEvent?.overrides?.triggerFilters && conditionsToEvaluate?.[0]?.length > 0) {
        conditionsToEvaluate = [[conditionsToEvaluate[0][0]]];
      }
      if (!_.evalEngine.evaluateConditions(evalTarget, conditionsToEvaluate)) {
        return false;
      }
      return true;
    }
    return false;
  };
  var isNudgeActive = (_, nudge) => canBeActive(nudge) && !!getNudgeDataFromUserStore(_, nudge.variantId)?.activelifeCycleUuid;
  var passesPinnedElement = async (_, nudge, stepIndex) => {
    const step = getNudgeStep(nudge, stepIndex);
    if (!step) return false;
    if (isAnchorableStep(step)) {
      return _.services.isElementVisible(step.formFactor.anchorSelector || step.formFactor.anchor);
    }
    return true;
  };
  var hasRemainingSteps = (nudge) => ({ stepIndex }) => stepIndex < nudge.steps.length - 1;
  var shouldBypassCustomThrottles = (_, nudge) => nudge.priority === 4 /* Urgent */ || !isIncludedInCustomThrottles(nudge) || _.nudgeDebugToolBar.visible && _.nudgeDebugToolBar.bypassCustomThrottles || isTestNudge(_, nudge);
  var checkBuiltInThrottle = (_, nudge) => {
    const { type: type11 } = getProductMeta(nudge);
    const result = passesBuiltInThrottles(_, nudge);
    const nudgesInRenderLoop = getNudgesInRenderLoop(_);
    const blockingNudge = getBlockingNudge(nudge, nudgesInRenderLoop);
    let explanation = `This ${type11} is blocked by another currently rendered guide or survey.`;
    if (result) {
      explanation = `This ${type11} is not blocked by other guides or surveys.`;
    }
    if (blockingNudge?.variantId === nudge.variantId) {
      explanation = "This nudge is alreadying rendering.";
    }
    if (blockingNudge) {
      explanation = `This ${type11} is blocked by '${blockingNudge.title} - ${blockingNudge.variant}'.`;
    }
    return {
      result,
      explanation,
      detail: {
        blockingNudge
      }
    };
  };
  var getGlobalChecks = (_, nudge) => {
    const { type: type11 } = getProductMeta(nudge);
    const builtInThrottlesCheck = checkBuiltInThrottle(_, nudge);
    const globalChecks = {
      builtInThrottles: builtInThrottlesCheck,
      customThrottles: {
        result: shouldBypassCustomThrottles(_, nudge) || passesCustomThrottles(_, nudge),
        explanation: `The custom throttle for ${type11}s of this type prevents further guides or surveys from being shown.`,
        detail: {
          throttles: type11 === "survey" ? _.organization?.surveyThrottle : _.organization?.guideThrottle
        }
      }
    };
    return globalChecks;
  };
  var getNudgeChecks = (_, nudge, skipChecks = []) => {
    const { name } = getProductMeta(nudge);
    const sessionPropertyConditions = getSessionPropertyConditions(nudge.triggerConfig.conditions);
    const nudgeChecks = {
      ...skipChecks.includes("limits") ? {} : {
        limits: {
          result: passesCooldown(_, nudge),
          explanation: `${name} has been seen the maximum number of times.`,
          detail: {
            limits: nudge.lifecycleConfig
          }
        }
      },
      ...skipChecks.includes("userTargeting") ? {} : {
        userTargeting: {
          result: nudgePassesDecide(nudge, _.decide),
          explanation: "Booted user is not targeted by this flag.",
          detail: {
            userTargeting: nudge.flagKey
          }
        }
      },
      ...skipChecks.includes("page") ? {} : {
        page: {
          result: passesPageTargeting(_, nudge),
          explanation: `${name} is not shown on this page.`,
          detail: {
            page: nudge.pageTargeting.conditions
          }
        }
      },
      ...skipChecks.includes("snooze") ? {} : {
        snooze: {
          result: passesSnoozedConditions(_, nudge),
          explanation: `${name} is snoozed.`,
          detail: {
            isSnoozable: nudge.isSnoozable,
            isSnoozableOnAllSteps: nudge.isSnoozableOnAllSteps,
            snoozeDuration: nudge.snoozeDuration
          }
        }
      },
      ...skipChecks.includes("sessionProperties") ? {} : {
        sessionProperties: {
          result: passesSessionProperties(_, sessionPropertyConditions),
          explanation: "Session properties do not match the conditions.",
          detail: {
            conditions: sessionPropertyConditions,
            sessionProperties: _.sessionProperties
          }
        }
      }
    };
    return nudgeChecks;
  };
  var getStepChecks = async (_, nudge, stepIndex) => {
    const nudgeActorContext = getNudgeActorSnapshot(_, nudge.variantId)?.context;
    const currentStep = stepIndex ?? nudgeActorContext?.stepIndex ?? 0;
    const step = nudgeActorContext ? getNudgeStep(nudgeActorContext.nudge, currentStep) : void 0;
    const stepChecks = {
      element: {
        result: await passesPinnedElement(_, nudge, currentStep),
        explanation: "Pinned element is not visible on the page.",
        detail: {
          element: isAnchorableStep(step) ? step?.formFactor.anchor : "unknown"
        }
      }
    };
    return stepChecks;
  };
  var getNudgeById = (_, id) => getNudgeActorSnapshot(_, id)?.context.nudge;
  var getNudgeByFlagKey = (_, flagKey) => getAllNudges(_).find((nudge) => nudge.flagKey === flagKey);
  var getAllNudges = (_) => {
    const nudgeActors = getAllNudgeActors(_);
    return Array.from(nudgeActors?.values() ?? []).map((actor) => actor.getSnapshot()?.context?.nudge);
  };
  var getDebuggedNudge = (_, options = { getOriginal: false }) => {
    const debuggingNudge = options.getOriginal ? _.nudgesManager?.getSnapshot()?.context.debugMode.originalNudge : _.nudgesManager?.getSnapshot()?.context.debugMode.currentNudge;
    if (debuggingNudge) {
      return getNudgeById(_, debuggingNudge.variantId);
    }
  };
  var getNudgesInRenderLoop = (_) => {
    const nudgesInRenderLoop = [];
    if (_.activeChecklist) {
      nudgesInRenderLoop.push(_.activeChecklist.nudge);
    }
    const nudgeActors = getAllNudgeActors(_);
    if (!nudgeActors) {
      return nudgesInRenderLoop;
    }
    for (const actor of nudgeActors.values()) {
      const nudgeMachineState = actor.getSnapshot();
      if (nudgeMachineState.matches({ Step: "Render Loop" })) {
        nudgesInRenderLoop.push(nudgeMachineState.context.nudge);
      }
    }
    return nudgesInRenderLoop;
  };
  var getSmartNudges = (nudges) => {
    return {
      rageClick: nudges.filter((nudge) => nudge.triggerConfig.type === "rage_click"),
      smartDelay: nudges.filter((nudge) => nudge.triggerConfig.type === "smart_delay"),
      userConfusion: nudges.filter((nudge) => nudge.triggerConfig.type === "user_confusion")
    };
  };
  var getNudgeStep = (nudge, stepIndex) => (0, import_get.default)(nudge.steps, stepIndex, void 0);
  var isTestNudge = (_, nudge) => !!_?.decide?.[nudge.flagKey]?.metadata?.testInstrumentation;
  var generateUserKey = (_) => {
    if (_.user?.user_id) {
      return `uid_${_.user.user_id}`;
    }
    if (_.user?.device_id) {
      return `did_${_.user.device_id}`;
    }
    if (_.user?.getSessionId?.()) {
      return `sid_${_.user.getSessionId()}`;
    }
    return "anonymous";
  };
  var buildEvaluationContext = (_, event, conditions) => {
    const surveyResponse = {};
    if (event.surveyResponses && conditions) {
      const surveyConditions = conditions.filter((c2) => c2.type === "survey_response");
      const surveyResponses = Object.values(event.surveyResponses);
      for (const condition of surveyConditions) {
        const value = event.surveyResponses[condition.field]?.value ?? surveyResponses[0]?.value;
        surveyResponse[condition.field] = typeof value === "number" ? String(value) : value;
      }
    }
    return {
      context: {
        user: _.user ?? {},
        surveyResponse,
        location: _.location ?? {}
      },
      result: {}
    };
  };
  var evaluateCondition = (_, condition, event, options) => {
    if (condition.v2?.evaluationConditions) {
      const evalContext = buildEvaluationContext(_, event, condition.v2.conditions);
      const result = _.evalEngine.evaluateConditions(evalContext, condition.v2.evaluationConditions);
      return result;
    }
    const surveyResponses = Object.values(event.surveyResponses ?? {});
    const surveyResponse = surveyResponses[0];
    if (surveyResponse) {
      switch (condition.operator) {
        case "eq":
          return surveyResponse?.value === (typeof condition.operand === "string" ? options?.findIndex((option) => option === condition.operand) : condition.operand);
        case "neq":
          return surveyResponse?.value !== (typeof condition.operand === "string" ? options?.findIndex((option) => option === condition.operand) : condition.operand);
        case "gt":
          return typeof surveyResponse?.value === "number" && typeof condition.operand === "number" && surveyResponse?.value > condition.operand;
        case "lt":
          return typeof surveyResponse?.value === "number" && typeof condition.operand === "number" && surveyResponse?.value < condition.operand;
        default:
          return false;
      }
    }
    return false;
  };
  var getImmediateAction = (buttonMeta) => {
    if (buttonMeta?.buttonType === "snooze") {
      return { type: "snooze" };
    }
    const buttonAction = buttonMeta?.action;
    if (buttonAction && buttonAction?.type !== "no_action") {
      return buttonAction;
    }
    return null;
  };
  var resolveConditionalAction = (conditionalAction) => {
    const v2 = conditionalAction.v2;
    if (v2) {
      return v2.actions ?? v2.action ?? null;
    }
    return conditionalAction.action ?? null;
  };
  var resolveDefaultAction = (block) => block.defaultActions ?? block.defaultAction ?? null;
  var getActionBasedOnConditions = (_, step, event, buttonType) => {
    const options = step.content.find(isListBlock)?.meta.options;
    const surveyBlocks = step.content.filter(hasConditionalActionsBlock).filter((block2) => block2.type === "survey_rating" || block2.type === "survey_list");
    if (buttonType && surveyBlocks.length > 0) {
      const surveyBlock = surveyBlocks[0];
      const conditionalActions2 = surveyBlock.meta.conditionalActions;
      if (conditionalActions2) {
        for (let i2 = 0; i2 < conditionalActions2.length; i2++) {
          const conditionalAction = conditionalActions2[i2];
          if (evaluateCondition(_, conditionalAction, event, options)) {
            return resolveConditionalAction(conditionalAction);
          }
        }
      }
      return resolveDefaultAction(surveyBlock.meta);
    }
    const block = step.content.find(hasConditionalActionsBlock);
    const conditionalActions = block?.meta.conditionalActions;
    if (conditionalActions) {
      for (let i2 = 0; i2 < conditionalActions.length; i2++) {
        const conditionalAction = conditionalActions[i2];
        if (evaluateCondition(_, conditionalAction, event, options)) {
          return resolveConditionalAction(conditionalAction);
        }
      }
    }
    return block ? resolveDefaultAction(block.meta) : null;
  };
  var getActionBasedOnButtonConditions = (_, buttonBlock, event) => {
    const { conditionalActions } = buttonBlock.meta || {};
    if (conditionalActions) {
      for (let i2 = 0; i2 < conditionalActions.length; i2++) {
        const conditionalAction = conditionalActions[i2];
        if (evaluateCondition(_, conditionalAction, event)) {
          return resolveConditionalAction(conditionalAction);
        }
      }
    }
    return buttonBlock.meta ? resolveDefaultAction(buttonBlock.meta) : null;
  };
  var determineAction = (_, step, event) => {
    if (event.buttonMeta?.actions) {
      return event.buttonMeta.actions;
    }
    const immediateAction = getImmediateAction(event.buttonMeta);
    if (event.buttonMeta?.action?.type === "use_conditional_logic") {
      if (event.buttonMeta?.buttonType !== "snooze") {
        const buttonBlocks = step.content.filter(
          (block) => block.type === "button"
        );
        const clickedButtonBlock = buttonBlocks.find((block) => {
          return block.meta?.buttonType === event.buttonMeta?.buttonType && block.meta?.label === event.buttonMeta?.label;
        });
        if (clickedButtonBlock && hasConditionalActionsBlock(clickedButtonBlock)) {
          return getActionBasedOnButtonConditions(_, clickedButtonBlock, event);
        }
      }
      return getActionBasedOnConditions(_, step, event, event.buttonMeta?.buttonType);
    }
    if (event.buttonMeta?.action?.type === "no_action") {
      const surveyBlockWithConditions = step.content.find(
        (block) => (block.type === "survey_rating" || block.type === "survey_list") && hasConditionalActionsBlock(block)
      );
      if (surveyBlockWithConditions) {
        return getActionBasedOnConditions(_, step, event, event.buttonMeta?.buttonType);
      }
    }
    return immediateAction;
  };
  var isTooltipNudge = (nudge) => nudge?.type === "tooltip" || nudge?.steps[0]?.formFactor.type === "tooltip";
  var isChecklistNudge = (nudge) => {
    return nudge?.type === "checklist" || nudge?.steps[0]?.formFactor.type === "checklist";
  };
  var isTooltipStep = (step) => step?.formFactor.type === "tooltip";
  var isPinStep = (step) => step?.formFactor.type === "pin";
  var isCardStep = (step) => step?.formFactor.type === "card";
  var isCardNudge = (nudge) => nudge.steps.some((step) => step.formFactor.type === "card");
  var isAnchorableStep = (step) => isPinStep(step) || isTooltipStep(step) || isCardStep(step);
  var passesLocalization = (_, nudge, currentLocale) => {
    const localizationSettings = _.organization?.localization;
    const translationStatus = nudge.translationStatus;
    if (!localizationSettings?.enabled) {
      return true;
    }
    if (!translationStatus?.status) {
      return true;
    }
    switch (translationStatus.status) {
      case "missing":
        if (currentLocale === localizationSettings.defaultLocale) {
          return true;
        }
        return localizationSettings.translationUnavailable === "showDefault";
      case "outdated":
        return localizationSettings.translationOutdated === "showDefault" || localizationSettings.translationOutdated === "showOutOfDate";
      case "up-to-date":
        return true;
      default:
        return true;
    }
  };
  var getAppliedNudgeLocale = (nudge, localizationSettings) => {
    if (!localizationSettings || !localizationSettings.enabled || !nudge.translationStatus) {
      return void 0;
    }
    if (nudge.translationStatus.translated) {
      return getSDK()?.[_configuration].locale;
    } else {
      return localizationSettings.defaultLocale;
    }
  };

  // ../shared/node_modules/xstate/dev/dist/xstate-dev.esm.js
  function getGlobal() {
    if (typeof globalThis !== "undefined") {
      return globalThis;
    }
    if (typeof self !== "undefined") {
      return self;
    }
    if (typeof window !== "undefined") {
      return window;
    }
    if (typeof global !== "undefined") {
      return global;
    }
  }
  function getDevTools() {
    const w = getGlobal();
    if (w.__xstate__) {
      return w.__xstate__;
    }
    return void 0;
  }
  var devToolsAdapter = (service) => {
    if (typeof window === "undefined") {
      return;
    }
    const devTools = getDevTools();
    if (devTools) {
      devTools.register(service);
    }
  };

  // ../shared/node_modules/xstate/dist/raise-c17ec2bc.esm.js
  var Mailbox = class {
    constructor(_process) {
      this._process = _process;
      this._active = false;
      this._current = null;
      this._last = null;
    }
    start() {
      this._active = true;
      this.flush();
    }
    clear() {
      if (this._current) {
        this._current.next = null;
        this._last = this._current;
      }
    }
    enqueue(event) {
      const enqueued = {
        value: event,
        next: null
      };
      if (this._current) {
        this._last.next = enqueued;
        this._last = enqueued;
        return;
      }
      this._current = enqueued;
      this._last = enqueued;
      if (this._active) {
        this.flush();
      }
    }
    flush() {
      while (this._current) {
        const consumed = this._current;
        this._process(consumed.value);
        this._current = consumed.next;
      }
      this._last = null;
    }
  };
  var STATE_DELIMITER = ".";
  var TARGETLESS_KEY = "";
  var NULL_EVENT = "";
  var STATE_IDENTIFIER = "#";
  var WILDCARD = "*";
  var XSTATE_INIT = "xstate.init";
  var XSTATE_ERROR = "xstate.error";
  var XSTATE_STOP = "xstate.stop";
  function createAfterEvent(delayRef, id) {
    return {
      type: `xstate.after.${delayRef}.${id}`
    };
  }
  function createDoneStateEvent(id, output) {
    return {
      type: `xstate.done.state.${id}`,
      output
    };
  }
  function createDoneActorEvent(invokeId, output) {
    return {
      type: `xstate.done.actor.${invokeId}`,
      output,
      actorId: invokeId
    };
  }
  function createErrorActorEvent(id, error) {
    return {
      type: `xstate.error.actor.${id}`,
      error,
      actorId: id
    };
  }
  function createInitEvent(input) {
    return {
      type: XSTATE_INIT,
      input
    };
  }
  function reportUnhandledError(err) {
    setTimeout(() => {
      throw err;
    });
  }
  var symbolObservable = (() => typeof Symbol === "function" && Symbol.observable || "@@observable")();
  function matchesState(parentStateId, childStateId) {
    const parentStateValue = toStateValue(parentStateId);
    const childStateValue = toStateValue(childStateId);
    if (typeof childStateValue === "string") {
      if (typeof parentStateValue === "string") {
        return childStateValue === parentStateValue;
      }
      return false;
    }
    if (typeof parentStateValue === "string") {
      return parentStateValue in childStateValue;
    }
    return Object.keys(parentStateValue).every((key) => {
      if (!(key in childStateValue)) {
        return false;
      }
      return matchesState(parentStateValue[key], childStateValue[key]);
    });
  }
  function toStatePath(stateId) {
    if (isArray(stateId)) {
      return stateId;
    }
    const result = [];
    let segment = "";
    for (let i2 = 0; i2 < stateId.length; i2++) {
      const char = stateId.charCodeAt(i2);
      switch (char) {
        // \
        case 92:
          segment += stateId[i2 + 1];
          i2++;
          continue;
        // .
        case 46:
          result.push(segment);
          segment = "";
          continue;
      }
      segment += stateId[i2];
    }
    result.push(segment);
    return result;
  }
  function toStateValue(stateValue) {
    if (isMachineSnapshot(stateValue)) {
      return stateValue.value;
    }
    if (typeof stateValue !== "string") {
      return stateValue;
    }
    const statePath = toStatePath(stateValue);
    return pathToStateValue(statePath);
  }
  function pathToStateValue(statePath) {
    if (statePath.length === 1) {
      return statePath[0];
    }
    const value = {};
    let marker = value;
    for (let i2 = 0; i2 < statePath.length - 1; i2++) {
      if (i2 === statePath.length - 2) {
        marker[statePath[i2]] = statePath[i2 + 1];
      } else {
        const previous = marker;
        marker = {};
        previous[statePath[i2]] = marker;
      }
    }
    return value;
  }
  function mapValues(collection, iteratee) {
    const result = {};
    const collectionKeys = Object.keys(collection);
    for (let i2 = 0; i2 < collectionKeys.length; i2++) {
      const key = collectionKeys[i2];
      result[key] = iteratee(collection[key], key, collection, i2);
    }
    return result;
  }
  function toArrayStrict(value) {
    if (isArray(value)) {
      return value;
    }
    return [value];
  }
  function toArray(value) {
    if (value === void 0) {
      return [];
    }
    return toArrayStrict(value);
  }
  function resolveOutput(mapper, context, event, self2) {
    if (typeof mapper === "function") {
      return mapper({
        context,
        event,
        self: self2
      });
    }
    return mapper;
  }
  function isArray(value) {
    return Array.isArray(value);
  }
  function isErrorActorEvent(event) {
    return event.type.startsWith("xstate.error.actor");
  }
  function toTransitionConfigArray(configLike) {
    return toArrayStrict(configLike).map((transitionLike) => {
      if (typeof transitionLike === "undefined" || typeof transitionLike === "string") {
        return {
          target: transitionLike
        };
      }
      return transitionLike;
    });
  }
  function normalizeTarget(target) {
    if (target === void 0 || target === TARGETLESS_KEY) {
      return void 0;
    }
    return toArray(target);
  }
  function toObserver(nextHandler, errorHandler, completionHandler) {
    const isObserver = typeof nextHandler === "object";
    const self2 = isObserver ? nextHandler : void 0;
    return {
      next: (isObserver ? nextHandler.next : nextHandler)?.bind(self2),
      error: (isObserver ? nextHandler.error : errorHandler)?.bind(self2),
      complete: (isObserver ? nextHandler.complete : completionHandler)?.bind(self2)
    };
  }
  function createInvokeId(stateNodeId, index) {
    return `${index}.${stateNodeId}`;
  }
  function resolveReferencedActor(machine, src) {
    const match = src.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!match) {
      return machine.implementations.actors[src];
    }
    const [, indexStr, nodeId] = match;
    const node = machine.getStateNodeById(nodeId);
    const invokeConfig = node.config.invoke;
    return (Array.isArray(invokeConfig) ? invokeConfig[indexStr] : invokeConfig).src;
  }
  function createScheduledEventId(actorRef, id) {
    return `${actorRef.sessionId}.${id}`;
  }
  var idCounter = 0;
  function createSystem(rootActor, options) {
    const children = /* @__PURE__ */ new Map();
    const keyedActors = /* @__PURE__ */ new Map();
    const reverseKeyedActors = /* @__PURE__ */ new WeakMap();
    const inspectionObservers = /* @__PURE__ */ new Set();
    const timerMap = {};
    const {
      clock,
      logger: logger2
    } = options;
    const scheduler = {
      schedule: (source, target, event, delay, id = Math.random().toString(36).slice(2)) => {
        const scheduledEvent = {
          source,
          target,
          event,
          delay,
          id,
          startedAt: Date.now()
        };
        const scheduledEventId = createScheduledEventId(source, id);
        system._snapshot._scheduledEvents[scheduledEventId] = scheduledEvent;
        const timeout = clock.setTimeout(() => {
          delete timerMap[scheduledEventId];
          delete system._snapshot._scheduledEvents[scheduledEventId];
          system._relay(source, target, event);
        }, delay);
        timerMap[scheduledEventId] = timeout;
      },
      cancel: (source, id) => {
        const scheduledEventId = createScheduledEventId(source, id);
        const timeout = timerMap[scheduledEventId];
        delete timerMap[scheduledEventId];
        delete system._snapshot._scheduledEvents[scheduledEventId];
        if (timeout !== void 0) {
          clock.clearTimeout(timeout);
        }
      },
      cancelAll: (actorRef) => {
        for (const scheduledEventId in system._snapshot._scheduledEvents) {
          const scheduledEvent = system._snapshot._scheduledEvents[scheduledEventId];
          if (scheduledEvent.source === actorRef) {
            scheduler.cancel(actorRef, scheduledEvent.id);
          }
        }
      }
    };
    const sendInspectionEvent = (event) => {
      if (!inspectionObservers.size) {
        return;
      }
      const resolvedInspectionEvent = {
        ...event,
        rootId: rootActor.sessionId
      };
      inspectionObservers.forEach((observer) => observer.next?.(resolvedInspectionEvent));
    };
    const system = {
      _snapshot: {
        _scheduledEvents: (options?.snapshot && options.snapshot.scheduler) ?? {}
      },
      _bookId: () => `x:${idCounter++}`,
      _register: (sessionId, actorRef) => {
        children.set(sessionId, actorRef);
        return sessionId;
      },
      _unregister: (actorRef) => {
        children.delete(actorRef.sessionId);
        const systemId = reverseKeyedActors.get(actorRef);
        if (systemId !== void 0) {
          keyedActors.delete(systemId);
          reverseKeyedActors.delete(actorRef);
        }
      },
      get: (systemId) => {
        return keyedActors.get(systemId);
      },
      _set: (systemId, actorRef) => {
        const existing = keyedActors.get(systemId);
        if (existing && existing !== actorRef) {
          throw new Error(`Actor with system ID '${systemId}' already exists.`);
        }
        keyedActors.set(systemId, actorRef);
        reverseKeyedActors.set(actorRef, systemId);
      },
      inspect: (observerOrFn) => {
        const observer = toObserver(observerOrFn);
        inspectionObservers.add(observer);
        return {
          unsubscribe() {
            inspectionObservers.delete(observer);
          }
        };
      },
      _sendInspectionEvent: sendInspectionEvent,
      _relay: (source, target, event) => {
        system._sendInspectionEvent({
          type: "@xstate.event",
          sourceRef: source,
          actorRef: target,
          event
        });
        target._send(event);
      },
      scheduler,
      getSnapshot: () => {
        return {
          _scheduledEvents: {
            ...system._snapshot._scheduledEvents
          }
        };
      },
      start: () => {
        const scheduledEvents = system._snapshot._scheduledEvents;
        system._snapshot._scheduledEvents = {};
        for (const scheduledId in scheduledEvents) {
          const {
            source,
            target,
            event,
            delay,
            id
          } = scheduledEvents[scheduledId];
          scheduler.schedule(source, target, event, delay, id);
        }
      },
      _clock: clock,
      _logger: logger2
    };
    return system;
  }
  var executingCustomAction = false;
  var $$ACTOR_TYPE = 1;
  var ProcessingStatus = /* @__PURE__ */ function(ProcessingStatus2) {
    ProcessingStatus2[ProcessingStatus2["NotStarted"] = 0] = "NotStarted";
    ProcessingStatus2[ProcessingStatus2["Running"] = 1] = "Running";
    ProcessingStatus2[ProcessingStatus2["Stopped"] = 2] = "Stopped";
    return ProcessingStatus2;
  }({});
  var defaultOptions = {
    clock: {
      setTimeout: (fn, ms) => {
        return setTimeout(fn, ms);
      },
      clearTimeout: (id) => {
        return clearTimeout(id);
      }
    },
    logger: console.log.bind(console),
    devTools: false
  };
  var Actor = class {
    /**
     * Creates a new actor instance for the given logic with the provided options,
     * if any.
     *
     * @param logic The logic to create an actor from
     * @param options Actor options
     */
    constructor(logic, options) {
      this.logic = logic;
      this._snapshot = void 0;
      this.clock = void 0;
      this.options = void 0;
      this.id = void 0;
      this.mailbox = new Mailbox(this._process.bind(this));
      this.observers = /* @__PURE__ */ new Set();
      this.eventListeners = /* @__PURE__ */ new Map();
      this.logger = void 0;
      this._processingStatus = ProcessingStatus.NotStarted;
      this._parent = void 0;
      this._syncSnapshot = void 0;
      this.ref = void 0;
      this._actorScope = void 0;
      this._systemId = void 0;
      this.sessionId = void 0;
      this.system = void 0;
      this._doneEvent = void 0;
      this.src = void 0;
      this._deferred = [];
      const resolvedOptions = {
        ...defaultOptions,
        ...options
      };
      const {
        clock,
        logger: logger2,
        parent,
        syncSnapshot,
        id,
        systemId,
        inspect
      } = resolvedOptions;
      this.system = parent ? parent.system : createSystem(this, {
        clock,
        logger: logger2
      });
      if (inspect && !parent) {
        this.system.inspect(toObserver(inspect));
      }
      this.sessionId = this.system._bookId();
      this.id = id ?? this.sessionId;
      this.logger = options?.logger ?? this.system._logger;
      this.clock = options?.clock ?? this.system._clock;
      this._parent = parent;
      this._syncSnapshot = syncSnapshot;
      this.options = resolvedOptions;
      this.src = resolvedOptions.src ?? logic;
      this.ref = this;
      this._actorScope = {
        self: this,
        id: this.id,
        sessionId: this.sessionId,
        logger: this.logger,
        defer: (fn) => {
          this._deferred.push(fn);
        },
        system: this.system,
        stopChild: (child) => {
          if (child._parent !== this) {
            throw new Error(`Cannot stop child actor ${child.id} of ${this.id} because it is not a child`);
          }
          child._stop();
        },
        emit: (emittedEvent) => {
          const listeners = this.eventListeners.get(emittedEvent.type);
          const wildcardListener = this.eventListeners.get("*");
          if (!listeners && !wildcardListener) {
            return;
          }
          const allListeners = [...listeners ? listeners.values() : [], ...wildcardListener ? wildcardListener.values() : []];
          for (const handler of allListeners) {
            handler(emittedEvent);
          }
        },
        actionExecutor: (action) => {
          const exec = () => {
            this._actorScope.system._sendInspectionEvent({
              type: "@xstate.action",
              actorRef: this,
              action: {
                type: action.type,
                params: action.params
              }
            });
            if (!action.exec) {
              return;
            }
            const saveExecutingCustomAction = executingCustomAction;
            try {
              executingCustomAction = true;
              action.exec(action.info, action.params);
            } finally {
              executingCustomAction = saveExecutingCustomAction;
            }
          };
          if (this._processingStatus === ProcessingStatus.Running) {
            exec();
          } else {
            this._deferred.push(exec);
          }
        }
      };
      this.send = this.send.bind(this);
      this.system._sendInspectionEvent({
        type: "@xstate.actor",
        actorRef: this
      });
      if (systemId) {
        this._systemId = systemId;
        this.system._set(systemId, this);
      }
      this._initState(options?.snapshot ?? options?.state);
      if (systemId && this._snapshot.status !== "active") {
        this.system._unregister(this);
      }
    }
    _initState(persistedState) {
      try {
        this._snapshot = persistedState ? this.logic.restoreSnapshot ? this.logic.restoreSnapshot(persistedState, this._actorScope) : persistedState : this.logic.getInitialSnapshot(this._actorScope, this.options?.input);
      } catch (err) {
        this._snapshot = {
          status: "error",
          output: void 0,
          error: err
        };
      }
    }
    update(snapshot, event) {
      this._snapshot = snapshot;
      let deferredFn;
      while (deferredFn = this._deferred.shift()) {
        try {
          deferredFn();
        } catch (err) {
          this._deferred.length = 0;
          this._snapshot = {
            ...snapshot,
            status: "error",
            error: err
          };
        }
      }
      switch (this._snapshot.status) {
        case "active":
          for (const observer of this.observers) {
            try {
              observer.next?.(snapshot);
            } catch (err) {
              reportUnhandledError(err);
            }
          }
          break;
        case "done":
          for (const observer of this.observers) {
            try {
              observer.next?.(snapshot);
            } catch (err) {
              reportUnhandledError(err);
            }
          }
          this._stopProcedure();
          this._complete();
          this._doneEvent = createDoneActorEvent(this.id, this._snapshot.output);
          if (this._parent) {
            this.system._relay(this, this._parent, this._doneEvent);
          }
          break;
        case "error":
          this._error(this._snapshot.error);
          break;
      }
      this.system._sendInspectionEvent({
        type: "@xstate.snapshot",
        actorRef: this,
        event,
        snapshot
      });
    }
    /**
     * Subscribe an observer to an actor’s snapshot values.
     *
     * @remarks
     * The observer will receive the actor’s snapshot value when it is emitted.
     * The observer can be:
     *
     * - A plain function that receives the latest snapshot, or
     * - An observer object whose `.next(snapshot)` method receives the latest
     *   snapshot
     *
     * @example
     *
     * ```ts
     * // Observer as a plain function
     * const subscription = actor.subscribe((snapshot) => {
     *   console.log(snapshot);
     * });
     * ```
     *
     * @example
     *
     * ```ts
     * // Observer as an object
     * const subscription = actor.subscribe({
     *   next(snapshot) {
     *     console.log(snapshot);
     *   },
     *   error(err) {
     *     // ...
     *   },
     *   complete() {
     *     // ...
     *   }
     * });
     * ```
     *
     * The return value of `actor.subscribe(observer)` is a subscription object
     * that has an `.unsubscribe()` method. You can call
     * `subscription.unsubscribe()` to unsubscribe the observer:
     *
     * @example
     *
     * ```ts
     * const subscription = actor.subscribe((snapshot) => {
     *   // ...
     * });
     *
     * // Unsubscribe the observer
     * subscription.unsubscribe();
     * ```
     *
     * When the actor is stopped, all of its observers will automatically be
     * unsubscribed.
     *
     * @param observer - Either a plain function that receives the latest
     *   snapshot, or an observer object whose `.next(snapshot)` method receives
     *   the latest snapshot
     */
    subscribe(nextListenerOrObserver, errorListener, completeListener) {
      const observer = toObserver(nextListenerOrObserver, errorListener, completeListener);
      if (this._processingStatus !== ProcessingStatus.Stopped) {
        this.observers.add(observer);
      } else {
        switch (this._snapshot.status) {
          case "done":
            try {
              observer.complete?.();
            } catch (err) {
              reportUnhandledError(err);
            }
            break;
          case "error": {
            const err = this._snapshot.error;
            if (!observer.error) {
              reportUnhandledError(err);
            } else {
              try {
                observer.error(err);
              } catch (err2) {
                reportUnhandledError(err2);
              }
            }
            break;
          }
        }
      }
      return {
        unsubscribe: () => {
          this.observers.delete(observer);
        }
      };
    }
    on(type11, handler) {
      let listeners = this.eventListeners.get(type11);
      if (!listeners) {
        listeners = /* @__PURE__ */ new Set();
        this.eventListeners.set(type11, listeners);
      }
      const wrappedHandler = handler.bind(void 0);
      listeners.add(wrappedHandler);
      return {
        unsubscribe: () => {
          listeners.delete(wrappedHandler);
        }
      };
    }
    /** Starts the Actor from the initial state */
    start() {
      if (this._processingStatus === ProcessingStatus.Running) {
        return this;
      }
      if (this._syncSnapshot) {
        this.subscribe({
          next: (snapshot) => {
            if (snapshot.status === "active") {
              this.system._relay(this, this._parent, {
                type: `xstate.snapshot.${this.id}`,
                snapshot
              });
            }
          },
          error: () => {
          }
        });
      }
      this.system._register(this.sessionId, this);
      if (this._systemId) {
        this.system._set(this._systemId, this);
      }
      this._processingStatus = ProcessingStatus.Running;
      const initEvent = createInitEvent(this.options.input);
      this.system._sendInspectionEvent({
        type: "@xstate.event",
        sourceRef: this._parent,
        actorRef: this,
        event: initEvent
      });
      const status = this._snapshot.status;
      switch (status) {
        case "done":
          this.update(this._snapshot, initEvent);
          return this;
        case "error":
          this._error(this._snapshot.error);
          return this;
      }
      if (!this._parent) {
        this.system.start();
      }
      if (this.logic.start) {
        try {
          this.logic.start(this._snapshot, this._actorScope);
        } catch (err) {
          this._snapshot = {
            ...this._snapshot,
            status: "error",
            error: err
          };
          this._error(err);
          return this;
        }
      }
      this.update(this._snapshot, initEvent);
      if (this.options.devTools) {
        this.attachDevTools();
      }
      this.mailbox.start();
      return this;
    }
    _process(event) {
      let nextState;
      let caughtError;
      try {
        nextState = this.logic.transition(this._snapshot, event, this._actorScope);
      } catch (err) {
        caughtError = {
          err
        };
      }
      if (caughtError) {
        const {
          err
        } = caughtError;
        this._snapshot = {
          ...this._snapshot,
          status: "error",
          error: err
        };
        this._error(err);
        return;
      }
      this.update(nextState, event);
      if (event.type === XSTATE_STOP) {
        this._stopProcedure();
        this._complete();
      }
    }
    _stop() {
      if (this._processingStatus === ProcessingStatus.Stopped) {
        return this;
      }
      this.mailbox.clear();
      if (this._processingStatus === ProcessingStatus.NotStarted) {
        this._processingStatus = ProcessingStatus.Stopped;
        return this;
      }
      this.mailbox.enqueue({
        type: XSTATE_STOP
      });
      return this;
    }
    /** Stops the Actor and unsubscribe all listeners. */
    stop() {
      if (this._parent) {
        throw new Error("A non-root actor cannot be stopped directly.");
      }
      return this._stop();
    }
    _complete() {
      for (const observer of this.observers) {
        try {
          observer.complete?.();
        } catch (err) {
          reportUnhandledError(err);
        }
      }
      this.observers.clear();
    }
    _reportError(err) {
      if (!this.observers.size) {
        if (!this._parent) {
          reportUnhandledError(err);
        }
        return;
      }
      let reportError = false;
      for (const observer of this.observers) {
        const errorListener = observer.error;
        reportError ||= !errorListener;
        try {
          errorListener?.(err);
        } catch (err2) {
          reportUnhandledError(err2);
        }
      }
      this.observers.clear();
      if (reportError) {
        reportUnhandledError(err);
      }
    }
    _error(err) {
      this._stopProcedure();
      this._reportError(err);
      if (this._parent) {
        this.system._relay(this, this._parent, createErrorActorEvent(this.id, err));
      }
    }
    // TODO: atm children don't belong entirely to the actor so
    // in a way - it's not even super aware of them
    // so we can't stop them from here but we really should!
    // right now, they are being stopped within the machine's transition
    // but that could throw and leave us with "orphaned" active actors
    _stopProcedure() {
      if (this._processingStatus !== ProcessingStatus.Running) {
        return this;
      }
      this.system.scheduler.cancelAll(this);
      this.mailbox.clear();
      this.mailbox = new Mailbox(this._process.bind(this));
      this._processingStatus = ProcessingStatus.Stopped;
      this.system._unregister(this);
      return this;
    }
    /** @internal */
    _send(event) {
      if (this._processingStatus === ProcessingStatus.Stopped) {
        return;
      }
      this.mailbox.enqueue(event);
    }
    /**
     * Sends an event to the running Actor to trigger a transition.
     *
     * @param event The event to send
     */
    send(event) {
      this.system._relay(void 0, this, event);
    }
    attachDevTools() {
      const {
        devTools
      } = this.options;
      if (devTools) {
        const resolvedDevToolsAdapter = typeof devTools === "function" ? devTools : devToolsAdapter;
        resolvedDevToolsAdapter(this);
      }
    }
    toJSON() {
      return {
        xstate$$type: $$ACTOR_TYPE,
        id: this.id
      };
    }
    /**
     * Obtain the internal state of the actor, which can be persisted.
     *
     * @remarks
     * The internal state can be persisted from any actor, not only machines.
     *
     * Note that the persisted state is not the same as the snapshot from
     * {@link Actor.getSnapshot}. Persisted state represents the internal state of
     * the actor, while snapshots represent the actor's last emitted value.
     *
     * Can be restored with {@link ActorOptions.state}
     * @see https://stately.ai/docs/persistence
     */
    getPersistedSnapshot(options) {
      return this.logic.getPersistedSnapshot(this._snapshot, options);
    }
    [symbolObservable]() {
      return this;
    }
    /**
     * Read an actor’s snapshot synchronously.
     *
     * @remarks
     * The snapshot represent an actor's last emitted value.
     *
     * When an actor receives an event, its internal state may change. An actor
     * may emit a snapshot when a state transition occurs.
     *
     * Note that some actors, such as callback actors generated with
     * `fromCallback`, will not emit snapshots.
     * @see {@link Actor.subscribe} to subscribe to an actor’s snapshot values.
     * @see {@link Actor.getPersistedSnapshot} to persist the internal state of an actor (which is more than just a snapshot).
     */
    getSnapshot() {
      return this._snapshot;
    }
  };
  function createActor(logic, ...[options]) {
    return new Actor(logic, options);
  }
  function resolveCancel(_, snapshot, actionArgs, actionParams, {
    sendId
  }) {
    const resolvedSendId = typeof sendId === "function" ? sendId(actionArgs, actionParams) : sendId;
    return [snapshot, {
      sendId: resolvedSendId
    }, void 0];
  }
  function executeCancel(actorScope, params) {
    actorScope.defer(() => {
      actorScope.system.scheduler.cancel(actorScope.self, params.sendId);
    });
  }
  function cancel(sendId) {
    function cancel2(_args, _params) {
    }
    cancel2.type = "xstate.cancel";
    cancel2.sendId = sendId;
    cancel2.resolve = resolveCancel;
    cancel2.execute = executeCancel;
    return cancel2;
  }
  function resolveSpawn(actorScope, snapshot, actionArgs, _actionParams, {
    id,
    systemId,
    src,
    input,
    syncSnapshot
  }) {
    const logic = typeof src === "string" ? resolveReferencedActor(snapshot.machine, src) : src;
    const resolvedId = typeof id === "function" ? id(actionArgs) : id;
    let actorRef;
    let resolvedInput = void 0;
    if (logic) {
      resolvedInput = typeof input === "function" ? input({
        context: snapshot.context,
        event: actionArgs.event,
        self: actorScope.self
      }) : input;
      actorRef = createActor(logic, {
        id: resolvedId,
        src,
        parent: actorScope.self,
        syncSnapshot,
        systemId,
        input: resolvedInput
      });
    }
    return [cloneMachineSnapshot(snapshot, {
      children: {
        ...snapshot.children,
        [resolvedId]: actorRef
      }
    }), {
      id,
      systemId,
      actorRef,
      src,
      input: resolvedInput
    }, void 0];
  }
  function executeSpawn(actorScope, {
    actorRef
  }) {
    if (!actorRef) {
      return;
    }
    actorScope.defer(() => {
      if (actorRef._processingStatus === ProcessingStatus.Stopped) {
        return;
      }
      actorRef.start();
    });
  }
  function spawnChild(...[src, {
    id,
    systemId,
    input,
    syncSnapshot = false
  } = {}]) {
    function spawnChild2(_args, _params) {
    }
    spawnChild2.type = "xstate.spawnChild";
    spawnChild2.id = id;
    spawnChild2.systemId = systemId;
    spawnChild2.src = src;
    spawnChild2.input = input;
    spawnChild2.syncSnapshot = syncSnapshot;
    spawnChild2.resolve = resolveSpawn;
    spawnChild2.execute = executeSpawn;
    return spawnChild2;
  }
  function resolveStop(_, snapshot, args, actionParams, {
    actorRef
  }) {
    const actorRefOrString = typeof actorRef === "function" ? actorRef(args, actionParams) : actorRef;
    const resolvedActorRef = typeof actorRefOrString === "string" ? snapshot.children[actorRefOrString] : actorRefOrString;
    let children = snapshot.children;
    if (resolvedActorRef) {
      children = {
        ...children
      };
      delete children[resolvedActorRef.id];
    }
    return [cloneMachineSnapshot(snapshot, {
      children
    }), resolvedActorRef, void 0];
  }
  function executeStop(actorScope, actorRef) {
    if (!actorRef) {
      return;
    }
    actorScope.system._unregister(actorRef);
    if (actorRef._processingStatus !== ProcessingStatus.Running) {
      actorScope.stopChild(actorRef);
      return;
    }
    actorScope.defer(() => {
      actorScope.stopChild(actorRef);
    });
  }
  function stopChild(actorRef) {
    function stop2(_args, _params) {
    }
    stop2.type = "xstate.stopChild";
    stop2.actorRef = actorRef;
    stop2.resolve = resolveStop;
    stop2.execute = executeStop;
    return stop2;
  }
  function evaluateGuard(guard2, context, event, snapshot) {
    const {
      machine
    } = snapshot;
    const isInline = typeof guard2 === "function";
    const resolved = isInline ? guard2 : machine.implementations.guards[typeof guard2 === "string" ? guard2 : guard2.type];
    if (!isInline && !resolved) {
      throw new Error(`Guard '${typeof guard2 === "string" ? guard2 : guard2.type}' is not implemented.'.`);
    }
    if (typeof resolved !== "function") {
      return evaluateGuard(resolved, context, event, snapshot);
    }
    const guardArgs = {
      context,
      event
    };
    const guardParams = isInline || typeof guard2 === "string" ? void 0 : "params" in guard2 ? typeof guard2.params === "function" ? guard2.params({
      context,
      event
    }) : guard2.params : void 0;
    if (!("check" in resolved)) {
      return resolved(guardArgs, guardParams);
    }
    const builtinGuard = resolved;
    return builtinGuard.check(
      snapshot,
      guardArgs,
      resolved
      // this holds all params
    );
  }
  var isAtomicStateNode = (stateNode) => stateNode.type === "atomic" || stateNode.type === "final";
  function getChildren(stateNode) {
    return Object.values(stateNode.states).filter((sn) => sn.type !== "history");
  }
  function getProperAncestors(stateNode, toStateNode) {
    const ancestors = [];
    if (toStateNode === stateNode) {
      return ancestors;
    }
    let m = stateNode.parent;
    while (m && m !== toStateNode) {
      ancestors.push(m);
      m = m.parent;
    }
    return ancestors;
  }
  function getAllStateNodes(stateNodes) {
    const nodeSet = new Set(stateNodes);
    const adjList = getAdjList(nodeSet);
    for (const s2 of nodeSet) {
      if (s2.type === "compound" && (!adjList.get(s2) || !adjList.get(s2).length)) {
        getInitialStateNodesWithTheirAncestors(s2).forEach((sn) => nodeSet.add(sn));
      } else {
        if (s2.type === "parallel") {
          for (const child of getChildren(s2)) {
            if (child.type === "history") {
              continue;
            }
            if (!nodeSet.has(child)) {
              const initialStates = getInitialStateNodesWithTheirAncestors(child);
              for (const initialStateNode of initialStates) {
                nodeSet.add(initialStateNode);
              }
            }
          }
        }
      }
    }
    for (const s2 of nodeSet) {
      let m = s2.parent;
      while (m) {
        nodeSet.add(m);
        m = m.parent;
      }
    }
    return nodeSet;
  }
  function getValueFromAdj(baseNode, adjList) {
    const childStateNodes = adjList.get(baseNode);
    if (!childStateNodes) {
      return {};
    }
    if (baseNode.type === "compound") {
      const childStateNode = childStateNodes[0];
      if (childStateNode) {
        if (isAtomicStateNode(childStateNode)) {
          return childStateNode.key;
        }
      } else {
        return {};
      }
    }
    const stateValue = {};
    for (const childStateNode of childStateNodes) {
      stateValue[childStateNode.key] = getValueFromAdj(childStateNode, adjList);
    }
    return stateValue;
  }
  function getAdjList(stateNodes) {
    const adjList = /* @__PURE__ */ new Map();
    for (const s2 of stateNodes) {
      if (!adjList.has(s2)) {
        adjList.set(s2, []);
      }
      if (s2.parent) {
        if (!adjList.has(s2.parent)) {
          adjList.set(s2.parent, []);
        }
        adjList.get(s2.parent).push(s2);
      }
    }
    return adjList;
  }
  function getStateValue(rootNode, stateNodes) {
    const config = getAllStateNodes(stateNodes);
    return getValueFromAdj(rootNode, getAdjList(config));
  }
  function isInFinalState(stateNodeSet, stateNode) {
    if (stateNode.type === "compound") {
      return getChildren(stateNode).some((s2) => s2.type === "final" && stateNodeSet.has(s2));
    }
    if (stateNode.type === "parallel") {
      return getChildren(stateNode).every((sn) => isInFinalState(stateNodeSet, sn));
    }
    return stateNode.type === "final";
  }
  var isStateId = (str) => str[0] === STATE_IDENTIFIER;
  function getCandidates(stateNode, receivedEventType) {
    const candidates = stateNode.transitions.get(receivedEventType) || [...stateNode.transitions.keys()].filter((eventDescriptor) => {
      if (eventDescriptor === WILDCARD) {
        return true;
      }
      if (!eventDescriptor.endsWith(".*")) {
        return false;
      }
      const partialEventTokens = eventDescriptor.split(".");
      const eventTokens = receivedEventType.split(".");
      for (let tokenIndex = 0; tokenIndex < partialEventTokens.length; tokenIndex++) {
        const partialEventToken = partialEventTokens[tokenIndex];
        const eventToken = eventTokens[tokenIndex];
        if (partialEventToken === "*") {
          const isLastToken = tokenIndex === partialEventTokens.length - 1;
          return isLastToken;
        }
        if (partialEventToken !== eventToken) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => b.length - a.length).flatMap((key) => stateNode.transitions.get(key));
    return candidates;
  }
  function getDelayedTransitions(stateNode) {
    const afterConfig = stateNode.config.after;
    if (!afterConfig) {
      return [];
    }
    const mutateEntryExit = (delay) => {
      const afterEvent = createAfterEvent(delay, stateNode.id);
      const eventType = afterEvent.type;
      stateNode.entry.push(raise(afterEvent, {
        id: eventType,
        delay
      }));
      stateNode.exit.push(cancel(eventType));
      return eventType;
    };
    const delayedTransitions = Object.keys(afterConfig).flatMap((delay) => {
      const configTransition = afterConfig[delay];
      const resolvedTransition = typeof configTransition === "string" ? {
        target: configTransition
      } : configTransition;
      const resolvedDelay = Number.isNaN(+delay) ? delay : +delay;
      const eventType = mutateEntryExit(resolvedDelay);
      return toArray(resolvedTransition).map((transition) => ({
        ...transition,
        event: eventType,
        delay: resolvedDelay
      }));
    });
    return delayedTransitions.map((delayedTransition) => {
      const {
        delay
      } = delayedTransition;
      return {
        ...formatTransition(stateNode, delayedTransition.event, delayedTransition),
        delay
      };
    });
  }
  function formatTransition(stateNode, descriptor, transitionConfig) {
    const normalizedTarget = normalizeTarget(transitionConfig.target);
    const reenter = transitionConfig.reenter ?? false;
    const target = resolveTarget(stateNode, normalizedTarget);
    const transition = {
      ...transitionConfig,
      actions: toArray(transitionConfig.actions),
      guard: transitionConfig.guard,
      target,
      source: stateNode,
      reenter,
      eventType: descriptor,
      toJSON: () => ({
        ...transition,
        source: `#${stateNode.id}`,
        target: target ? target.map((t14) => `#${t14.id}`) : void 0
      })
    };
    return transition;
  }
  function formatTransitions(stateNode) {
    const transitions = /* @__PURE__ */ new Map();
    if (stateNode.config.on) {
      for (const descriptor of Object.keys(stateNode.config.on)) {
        if (descriptor === NULL_EVENT) {
          throw new Error('Null events ("") cannot be specified as a transition key. Use `always: { ... }` instead.');
        }
        const transitionsConfig = stateNode.config.on[descriptor];
        transitions.set(descriptor, toTransitionConfigArray(transitionsConfig).map((t14) => formatTransition(stateNode, descriptor, t14)));
      }
    }
    if (stateNode.config.onDone) {
      const descriptor = `xstate.done.state.${stateNode.id}`;
      transitions.set(descriptor, toTransitionConfigArray(stateNode.config.onDone).map((t14) => formatTransition(stateNode, descriptor, t14)));
    }
    for (const invokeDef of stateNode.invoke) {
      if (invokeDef.onDone) {
        const descriptor = `xstate.done.actor.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onDone).map((t14) => formatTransition(stateNode, descriptor, t14)));
      }
      if (invokeDef.onError) {
        const descriptor = `xstate.error.actor.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onError).map((t14) => formatTransition(stateNode, descriptor, t14)));
      }
      if (invokeDef.onSnapshot) {
        const descriptor = `xstate.snapshot.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onSnapshot).map((t14) => formatTransition(stateNode, descriptor, t14)));
      }
    }
    for (const delayedTransition of stateNode.after) {
      let existing = transitions.get(delayedTransition.eventType);
      if (!existing) {
        existing = [];
        transitions.set(delayedTransition.eventType, existing);
      }
      existing.push(delayedTransition);
    }
    return transitions;
  }
  function formatInitialTransition(stateNode, _target) {
    const resolvedTarget = typeof _target === "string" ? stateNode.states[_target] : _target ? stateNode.states[_target.target] : void 0;
    if (!resolvedTarget && _target) {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions, @typescript-eslint/no-base-to-string
        `Initial state node "${_target}" not found on parent state node #${stateNode.id}`
      );
    }
    const transition = {
      source: stateNode,
      actions: !_target || typeof _target === "string" ? [] : toArray(_target.actions),
      eventType: null,
      reenter: false,
      target: resolvedTarget ? [resolvedTarget] : [],
      toJSON: () => ({
        ...transition,
        source: `#${stateNode.id}`,
        target: resolvedTarget ? [`#${resolvedTarget.id}`] : []
      })
    };
    return transition;
  }
  function resolveTarget(stateNode, targets) {
    if (targets === void 0) {
      return void 0;
    }
    return targets.map((target) => {
      if (typeof target !== "string") {
        return target;
      }
      if (isStateId(target)) {
        return stateNode.machine.getStateNodeById(target);
      }
      const isInternalTarget = target[0] === STATE_DELIMITER;
      if (isInternalTarget && !stateNode.parent) {
        return getStateNodeByPath(stateNode, target.slice(1));
      }
      const resolvedTarget = isInternalTarget ? stateNode.key + target : target;
      if (stateNode.parent) {
        try {
          const targetStateNode = getStateNodeByPath(stateNode.parent, resolvedTarget);
          return targetStateNode;
        } catch (err) {
          throw new Error(`Invalid transition definition for state node '${stateNode.id}':
${err.message}`);
        }
      } else {
        throw new Error(`Invalid target: "${target}" is not a valid target from the root node. Did you mean ".${target}"?`);
      }
    });
  }
  function resolveHistoryDefaultTransition(stateNode) {
    const normalizedTarget = normalizeTarget(stateNode.config.target);
    if (!normalizedTarget) {
      return stateNode.parent.initial;
    }
    return {
      target: normalizedTarget.map((t14) => typeof t14 === "string" ? getStateNodeByPath(stateNode.parent, t14) : t14)
    };
  }
  function isHistoryNode(stateNode) {
    return stateNode.type === "history";
  }
  function getInitialStateNodesWithTheirAncestors(stateNode) {
    const states = getInitialStateNodes(stateNode);
    for (const initialState of states) {
      for (const ancestor of getProperAncestors(initialState, stateNode)) {
        states.add(ancestor);
      }
    }
    return states;
  }
  function getInitialStateNodes(stateNode) {
    const set4 = /* @__PURE__ */ new Set();
    function iter(descStateNode) {
      if (set4.has(descStateNode)) {
        return;
      }
      set4.add(descStateNode);
      if (descStateNode.type === "compound") {
        iter(descStateNode.initial.target[0]);
      } else if (descStateNode.type === "parallel") {
        for (const child of getChildren(descStateNode)) {
          iter(child);
        }
      }
    }
    iter(stateNode);
    return set4;
  }
  function getStateNode(stateNode, stateKey) {
    if (isStateId(stateKey)) {
      return stateNode.machine.getStateNodeById(stateKey);
    }
    if (!stateNode.states) {
      throw new Error(`Unable to retrieve child state '${stateKey}' from '${stateNode.id}'; no child states exist.`);
    }
    const result = stateNode.states[stateKey];
    if (!result) {
      throw new Error(`Child state '${stateKey}' does not exist on '${stateNode.id}'`);
    }
    return result;
  }
  function getStateNodeByPath(stateNode, statePath) {
    if (typeof statePath === "string" && isStateId(statePath)) {
      try {
        return stateNode.machine.getStateNodeById(statePath);
      } catch {
      }
    }
    const arrayStatePath = toStatePath(statePath).slice();
    let currentStateNode = stateNode;
    while (arrayStatePath.length) {
      const key = arrayStatePath.shift();
      if (!key.length) {
        break;
      }
      currentStateNode = getStateNode(currentStateNode, key);
    }
    return currentStateNode;
  }
  function getStateNodes(stateNode, stateValue) {
    if (typeof stateValue === "string") {
      const childStateNode = stateNode.states[stateValue];
      if (!childStateNode) {
        throw new Error(`State '${stateValue}' does not exist on '${stateNode.id}'`);
      }
      return [stateNode, childStateNode];
    }
    const childStateKeys = Object.keys(stateValue);
    const childStateNodes = childStateKeys.map((subStateKey) => getStateNode(stateNode, subStateKey)).filter(Boolean);
    return [stateNode.machine.root, stateNode].concat(childStateNodes, childStateKeys.reduce((allSubStateNodes, subStateKey) => {
      const subStateNode = getStateNode(stateNode, subStateKey);
      if (!subStateNode) {
        return allSubStateNodes;
      }
      const subStateNodes = getStateNodes(subStateNode, stateValue[subStateKey]);
      return allSubStateNodes.concat(subStateNodes);
    }, []));
  }
  function transitionAtomicNode(stateNode, stateValue, snapshot, event) {
    const childStateNode = getStateNode(stateNode, stateValue);
    const next = childStateNode.next(snapshot, event);
    if (!next || !next.length) {
      return stateNode.next(snapshot, event);
    }
    return next;
  }
  function transitionCompoundNode(stateNode, stateValue, snapshot, event) {
    const subStateKeys = Object.keys(stateValue);
    const childStateNode = getStateNode(stateNode, subStateKeys[0]);
    const next = transitionNode(childStateNode, stateValue[subStateKeys[0]], snapshot, event);
    if (!next || !next.length) {
      return stateNode.next(snapshot, event);
    }
    return next;
  }
  function transitionParallelNode(stateNode, stateValue, snapshot, event) {
    const allInnerTransitions = [];
    for (const subStateKey of Object.keys(stateValue)) {
      const subStateValue = stateValue[subStateKey];
      if (!subStateValue) {
        continue;
      }
      const subStateNode = getStateNode(stateNode, subStateKey);
      const innerTransitions = transitionNode(subStateNode, subStateValue, snapshot, event);
      if (innerTransitions) {
        allInnerTransitions.push(...innerTransitions);
      }
    }
    if (!allInnerTransitions.length) {
      return stateNode.next(snapshot, event);
    }
    return allInnerTransitions;
  }
  function transitionNode(stateNode, stateValue, snapshot, event) {
    if (typeof stateValue === "string") {
      return transitionAtomicNode(stateNode, stateValue, snapshot, event);
    }
    if (Object.keys(stateValue).length === 1) {
      return transitionCompoundNode(stateNode, stateValue, snapshot, event);
    }
    return transitionParallelNode(stateNode, stateValue, snapshot, event);
  }
  function getHistoryNodes(stateNode) {
    return Object.keys(stateNode.states).map((key) => stateNode.states[key]).filter((sn) => sn.type === "history");
  }
  function isDescendant(childStateNode, parentStateNode) {
    let marker = childStateNode;
    while (marker.parent && marker.parent !== parentStateNode) {
      marker = marker.parent;
    }
    return marker.parent === parentStateNode;
  }
  function hasIntersection(s1, s2) {
    const set1 = new Set(s1);
    const set22 = new Set(s2);
    for (const item of set1) {
      if (set22.has(item)) {
        return true;
      }
    }
    for (const item of set22) {
      if (set1.has(item)) {
        return true;
      }
    }
    return false;
  }
  function removeConflictingTransitions(enabledTransitions, stateNodeSet, historyValue) {
    const filteredTransitions = /* @__PURE__ */ new Set();
    for (const t1 of enabledTransitions) {
      let t1Preempted = false;
      const transitionsToRemove = /* @__PURE__ */ new Set();
      for (const t22 of filteredTransitions) {
        if (hasIntersection(computeExitSet([t1], stateNodeSet, historyValue), computeExitSet([t22], stateNodeSet, historyValue))) {
          if (isDescendant(t1.source, t22.source)) {
            transitionsToRemove.add(t22);
          } else {
            t1Preempted = true;
            break;
          }
        }
      }
      if (!t1Preempted) {
        for (const t32 of transitionsToRemove) {
          filteredTransitions.delete(t32);
        }
        filteredTransitions.add(t1);
      }
    }
    return Array.from(filteredTransitions);
  }
  function findLeastCommonAncestor(stateNodes) {
    const [head, ...tail] = stateNodes;
    for (const ancestor of getProperAncestors(head, void 0)) {
      if (tail.every((sn) => isDescendant(sn, ancestor))) {
        return ancestor;
      }
    }
  }
  function getEffectiveTargetStates(transition, historyValue) {
    if (!transition.target) {
      return [];
    }
    const targets = /* @__PURE__ */ new Set();
    for (const targetNode of transition.target) {
      if (isHistoryNode(targetNode)) {
        if (historyValue[targetNode.id]) {
          for (const node of historyValue[targetNode.id]) {
            targets.add(node);
          }
        } else {
          for (const node of getEffectiveTargetStates(resolveHistoryDefaultTransition(targetNode), historyValue)) {
            targets.add(node);
          }
        }
      } else {
        targets.add(targetNode);
      }
    }
    return [...targets];
  }
  function getTransitionDomain(transition, historyValue) {
    const targetStates = getEffectiveTargetStates(transition, historyValue);
    if (!targetStates) {
      return;
    }
    if (!transition.reenter && targetStates.every((target) => target === transition.source || isDescendant(target, transition.source))) {
      return transition.source;
    }
    const lca = findLeastCommonAncestor(targetStates.concat(transition.source));
    if (lca) {
      return lca;
    }
    if (transition.reenter) {
      return;
    }
    return transition.source.machine.root;
  }
  function computeExitSet(transitions, stateNodeSet, historyValue) {
    const statesToExit = /* @__PURE__ */ new Set();
    for (const t14 of transitions) {
      if (t14.target?.length) {
        const domain = getTransitionDomain(t14, historyValue);
        if (t14.reenter && t14.source === domain) {
          statesToExit.add(domain);
        }
        for (const stateNode of stateNodeSet) {
          if (isDescendant(stateNode, domain)) {
            statesToExit.add(stateNode);
          }
        }
      }
    }
    return [...statesToExit];
  }
  function areStateNodeCollectionsEqual(prevStateNodes, nextStateNodeSet) {
    if (prevStateNodes.length !== nextStateNodeSet.size) {
      return false;
    }
    for (const node of prevStateNodes) {
      if (!nextStateNodeSet.has(node)) {
        return false;
      }
    }
    return true;
  }
  function microstep(transitions, currentSnapshot, actorScope, event, isInitial, internalQueue) {
    if (!transitions.length) {
      return currentSnapshot;
    }
    const mutStateNodeSet = new Set(currentSnapshot._nodes);
    let historyValue = currentSnapshot.historyValue;
    const filteredTransitions = removeConflictingTransitions(transitions, mutStateNodeSet, historyValue);
    let nextState = currentSnapshot;
    if (!isInitial) {
      [nextState, historyValue] = exitStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, historyValue, internalQueue, actorScope.actionExecutor);
    }
    nextState = resolveActionsAndContext(nextState, event, actorScope, filteredTransitions.flatMap((t14) => t14.actions), internalQueue, void 0);
    nextState = enterStates(nextState, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial);
    const nextStateNodes = [...mutStateNodeSet];
    if (nextState.status === "done") {
      nextState = resolveActionsAndContext(nextState, event, actorScope, nextStateNodes.sort((a, b) => b.order - a.order).flatMap((state) => state.exit), internalQueue, void 0);
    }
    try {
      if (historyValue === currentSnapshot.historyValue && areStateNodeCollectionsEqual(currentSnapshot._nodes, mutStateNodeSet)) {
        return nextState;
      }
      return cloneMachineSnapshot(nextState, {
        _nodes: nextStateNodes,
        historyValue
      });
    } catch (e2) {
      throw e2;
    }
  }
  function getMachineOutput(snapshot, event, actorScope, rootNode, rootCompletionNode) {
    if (rootNode.output === void 0) {
      return;
    }
    const doneStateEvent = createDoneStateEvent(rootCompletionNode.id, rootCompletionNode.output !== void 0 && rootCompletionNode.parent ? resolveOutput(rootCompletionNode.output, snapshot.context, event, actorScope.self) : void 0);
    return resolveOutput(rootNode.output, snapshot.context, doneStateEvent, actorScope.self);
  }
  function enterStates(currentSnapshot, event, actorScope, filteredTransitions, mutStateNodeSet, internalQueue, historyValue, isInitial) {
    let nextSnapshot = currentSnapshot;
    const statesToEnter = /* @__PURE__ */ new Set();
    const statesForDefaultEntry = /* @__PURE__ */ new Set();
    computeEntrySet(filteredTransitions, historyValue, statesForDefaultEntry, statesToEnter);
    if (isInitial) {
      statesForDefaultEntry.add(currentSnapshot.machine.root);
    }
    const completedNodes = /* @__PURE__ */ new Set();
    for (const stateNodeToEnter of [...statesToEnter].sort((a, b) => a.order - b.order)) {
      mutStateNodeSet.add(stateNodeToEnter);
      const actions = [];
      actions.push(...stateNodeToEnter.entry);
      for (const invokeDef of stateNodeToEnter.invoke) {
        actions.push(spawnChild(invokeDef.src, {
          ...invokeDef,
          syncSnapshot: !!invokeDef.onSnapshot
        }));
      }
      if (statesForDefaultEntry.has(stateNodeToEnter)) {
        const initialActions = stateNodeToEnter.initial.actions;
        actions.push(...initialActions);
      }
      nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, actions, internalQueue, stateNodeToEnter.invoke.map((invokeDef) => invokeDef.id));
      if (stateNodeToEnter.type === "final") {
        const parent = stateNodeToEnter.parent;
        let ancestorMarker = parent?.type === "parallel" ? parent : parent?.parent;
        let rootCompletionNode = ancestorMarker || stateNodeToEnter;
        if (parent?.type === "compound") {
          internalQueue.push(createDoneStateEvent(parent.id, stateNodeToEnter.output !== void 0 ? resolveOutput(stateNodeToEnter.output, nextSnapshot.context, event, actorScope.self) : void 0));
        }
        while (ancestorMarker?.type === "parallel" && !completedNodes.has(ancestorMarker) && isInFinalState(mutStateNodeSet, ancestorMarker)) {
          completedNodes.add(ancestorMarker);
          internalQueue.push(createDoneStateEvent(ancestorMarker.id));
          rootCompletionNode = ancestorMarker;
          ancestorMarker = ancestorMarker.parent;
        }
        if (ancestorMarker) {
          continue;
        }
        nextSnapshot = cloneMachineSnapshot(nextSnapshot, {
          status: "done",
          output: getMachineOutput(nextSnapshot, event, actorScope, nextSnapshot.machine.root, rootCompletionNode)
        });
      }
    }
    return nextSnapshot;
  }
  function computeEntrySet(transitions, historyValue, statesForDefaultEntry, statesToEnter) {
    for (const t14 of transitions) {
      const domain = getTransitionDomain(t14, historyValue);
      for (const s2 of t14.target || []) {
        if (!isHistoryNode(s2) && // if the target is different than the source then it will *definitely* be entered
        (t14.source !== s2 || // we know that the domain can't lie within the source
        // if it's different than the source then it's outside of it and it means that the target has to be entered as well
        t14.source !== domain || // reentering transitions always enter the target, even if it's the source itself
        t14.reenter)) {
          statesToEnter.add(s2);
          statesForDefaultEntry.add(s2);
        }
        addDescendantStatesToEnter(s2, historyValue, statesForDefaultEntry, statesToEnter);
      }
      const targetStates = getEffectiveTargetStates(t14, historyValue);
      for (const s2 of targetStates) {
        const ancestors = getProperAncestors(s2, domain);
        if (domain?.type === "parallel") {
          ancestors.push(domain);
        }
        addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, !t14.source.parent && t14.reenter ? void 0 : domain);
      }
    }
  }
  function addDescendantStatesToEnter(stateNode, historyValue, statesForDefaultEntry, statesToEnter) {
    if (isHistoryNode(stateNode)) {
      if (historyValue[stateNode.id]) {
        const historyStateNodes = historyValue[stateNode.id];
        for (const s2 of historyStateNodes) {
          statesToEnter.add(s2);
          addDescendantStatesToEnter(s2, historyValue, statesForDefaultEntry, statesToEnter);
        }
        for (const s2 of historyStateNodes) {
          addProperAncestorStatesToEnter(s2, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
        }
      } else {
        const historyDefaultTransition = resolveHistoryDefaultTransition(stateNode);
        for (const s2 of historyDefaultTransition.target) {
          statesToEnter.add(s2);
          if (historyDefaultTransition === stateNode.parent?.initial) {
            statesForDefaultEntry.add(stateNode.parent);
          }
          addDescendantStatesToEnter(s2, historyValue, statesForDefaultEntry, statesToEnter);
        }
        for (const s2 of historyDefaultTransition.target) {
          addProperAncestorStatesToEnter(s2, stateNode.parent, statesToEnter, historyValue, statesForDefaultEntry);
        }
      }
    } else {
      if (stateNode.type === "compound") {
        const [initialState] = stateNode.initial.target;
        if (!isHistoryNode(initialState)) {
          statesToEnter.add(initialState);
          statesForDefaultEntry.add(initialState);
        }
        addDescendantStatesToEnter(initialState, historyValue, statesForDefaultEntry, statesToEnter);
        addProperAncestorStatesToEnter(initialState, stateNode, statesToEnter, historyValue, statesForDefaultEntry);
      } else {
        if (stateNode.type === "parallel") {
          for (const child of getChildren(stateNode).filter((sn) => !isHistoryNode(sn))) {
            if (![...statesToEnter].some((s2) => isDescendant(s2, child))) {
              if (!isHistoryNode(child)) {
                statesToEnter.add(child);
                statesForDefaultEntry.add(child);
              }
              addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
            }
          }
        }
      }
    }
  }
  function addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, reentrancyDomain) {
    for (const anc of ancestors) {
      if (!reentrancyDomain || isDescendant(anc, reentrancyDomain)) {
        statesToEnter.add(anc);
      }
      if (anc.type === "parallel") {
        for (const child of getChildren(anc).filter((sn) => !isHistoryNode(sn))) {
          if (![...statesToEnter].some((s2) => isDescendant(s2, child))) {
            statesToEnter.add(child);
            addDescendantStatesToEnter(child, historyValue, statesForDefaultEntry, statesToEnter);
          }
        }
      }
    }
  }
  function addProperAncestorStatesToEnter(stateNode, toStateNode, statesToEnter, historyValue, statesForDefaultEntry) {
    addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, getProperAncestors(stateNode, toStateNode));
  }
  function exitStates(currentSnapshot, event, actorScope, transitions, mutStateNodeSet, historyValue, internalQueue, _actionExecutor) {
    let nextSnapshot = currentSnapshot;
    const statesToExit = computeExitSet(transitions, mutStateNodeSet, historyValue);
    statesToExit.sort((a, b) => b.order - a.order);
    let changedHistory;
    for (const exitStateNode of statesToExit) {
      for (const historyNode of getHistoryNodes(exitStateNode)) {
        let predicate;
        if (historyNode.history === "deep") {
          predicate = (sn) => isAtomicStateNode(sn) && isDescendant(sn, exitStateNode);
        } else {
          predicate = (sn) => {
            return sn.parent === exitStateNode;
          };
        }
        changedHistory ??= {
          ...historyValue
        };
        changedHistory[historyNode.id] = Array.from(mutStateNodeSet).filter(predicate);
      }
    }
    for (const s2 of statesToExit) {
      nextSnapshot = resolveActionsAndContext(nextSnapshot, event, actorScope, [...s2.exit, ...s2.invoke.map((def) => stopChild(def.id))], internalQueue, void 0);
      mutStateNodeSet.delete(s2);
    }
    return [nextSnapshot, changedHistory || historyValue];
  }
  function getAction(machine, actionType) {
    return machine.implementations.actions[actionType];
  }
  function resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, extra, retries) {
    const {
      machine
    } = currentSnapshot;
    let intermediateSnapshot = currentSnapshot;
    for (const action of actions) {
      const isInline = typeof action === "function";
      const resolvedAction = isInline ? action : (
        // the existing type of `.actions` assumes non-nullable `TExpressionAction`
        // it's fine to cast this here to get a common type and lack of errors in the rest of the code
        // our logic below makes sure that we call those 2 "variants" correctly
        getAction(machine, typeof action === "string" ? action : action.type)
      );
      const actionArgs = {
        context: intermediateSnapshot.context,
        event,
        self: actorScope.self,
        system: actorScope.system
      };
      const actionParams = isInline || typeof action === "string" ? void 0 : "params" in action ? typeof action.params === "function" ? action.params({
        context: intermediateSnapshot.context,
        event
      }) : action.params : void 0;
      if (!resolvedAction || !("resolve" in resolvedAction)) {
        actorScope.actionExecutor({
          type: typeof action === "string" ? action : typeof action === "object" ? action.type : action.name || "(anonymous)",
          info: actionArgs,
          params: actionParams,
          exec: resolvedAction
        });
        continue;
      }
      const builtinAction = resolvedAction;
      const [nextState, params, actions2] = builtinAction.resolve(
        actorScope,
        intermediateSnapshot,
        actionArgs,
        actionParams,
        resolvedAction,
        // this holds all params
        extra
      );
      intermediateSnapshot = nextState;
      if ("retryResolve" in builtinAction) {
        retries?.push([builtinAction, params]);
      }
      if ("execute" in builtinAction) {
        actorScope.actionExecutor({
          type: builtinAction.type,
          info: actionArgs,
          params,
          exec: builtinAction.execute.bind(null, actorScope, params)
        });
      }
      if (actions2) {
        intermediateSnapshot = resolveAndExecuteActionsWithContext(intermediateSnapshot, event, actorScope, actions2, extra, retries);
      }
    }
    return intermediateSnapshot;
  }
  function resolveActionsAndContext(currentSnapshot, event, actorScope, actions, internalQueue, deferredActorIds) {
    const retries = deferredActorIds ? [] : void 0;
    const nextState = resolveAndExecuteActionsWithContext(currentSnapshot, event, actorScope, actions, {
      internalQueue,
      deferredActorIds
    }, retries);
    retries?.forEach(([builtinAction, params]) => {
      builtinAction.retryResolve(actorScope, nextState, params);
    });
    return nextState;
  }
  function macrostep(snapshot, event, actorScope, internalQueue) {
    let nextSnapshot = snapshot;
    const microstates = [];
    function addMicrostate(microstate, event2, transitions) {
      actorScope.system._sendInspectionEvent({
        type: "@xstate.microstep",
        actorRef: actorScope.self,
        event: event2,
        snapshot: microstate,
        _transitions: transitions
      });
      microstates.push(microstate);
    }
    if (event.type === XSTATE_STOP) {
      nextSnapshot = cloneMachineSnapshot(stopChildren(nextSnapshot, event, actorScope), {
        status: "stopped"
      });
      addMicrostate(nextSnapshot, event, []);
      return {
        snapshot: nextSnapshot,
        microstates
      };
    }
    let nextEvent = event;
    if (nextEvent.type !== XSTATE_INIT) {
      const currentEvent = nextEvent;
      const isErr = isErrorActorEvent(currentEvent);
      const transitions = selectTransitions(currentEvent, nextSnapshot);
      if (isErr && !transitions.length) {
        nextSnapshot = cloneMachineSnapshot(snapshot, {
          status: "error",
          error: currentEvent.error
        });
        addMicrostate(nextSnapshot, currentEvent, []);
        return {
          snapshot: nextSnapshot,
          microstates
        };
      }
      nextSnapshot = microstep(
        transitions,
        snapshot,
        actorScope,
        nextEvent,
        false,
        // isInitial
        internalQueue
      );
      addMicrostate(nextSnapshot, currentEvent, transitions);
    }
    let shouldSelectEventlessTransitions = true;
    while (nextSnapshot.status === "active") {
      let enabledTransitions = shouldSelectEventlessTransitions ? selectEventlessTransitions(nextSnapshot, nextEvent) : [];
      const previousState = enabledTransitions.length ? nextSnapshot : void 0;
      if (!enabledTransitions.length) {
        if (!internalQueue.length) {
          break;
        }
        nextEvent = internalQueue.shift();
        enabledTransitions = selectTransitions(nextEvent, nextSnapshot);
      }
      nextSnapshot = microstep(enabledTransitions, nextSnapshot, actorScope, nextEvent, false, internalQueue);
      shouldSelectEventlessTransitions = nextSnapshot !== previousState;
      addMicrostate(nextSnapshot, nextEvent, enabledTransitions);
    }
    if (nextSnapshot.status !== "active") {
      stopChildren(nextSnapshot, nextEvent, actorScope);
    }
    return {
      snapshot: nextSnapshot,
      microstates
    };
  }
  function stopChildren(nextState, event, actorScope) {
    return resolveActionsAndContext(nextState, event, actorScope, Object.values(nextState.children).map((child) => stopChild(child)), [], void 0);
  }
  function selectTransitions(event, nextState) {
    return nextState.machine.getTransitionData(nextState, event);
  }
  function selectEventlessTransitions(nextState, event) {
    const enabledTransitionSet = /* @__PURE__ */ new Set();
    const atomicStates = nextState._nodes.filter(isAtomicStateNode);
    for (const stateNode of atomicStates) {
      loop: for (const s2 of [stateNode].concat(getProperAncestors(stateNode, void 0))) {
        if (!s2.always) {
          continue;
        }
        for (const transition of s2.always) {
          if (transition.guard === void 0 || evaluateGuard(transition.guard, nextState.context, event, nextState)) {
            enabledTransitionSet.add(transition);
            break loop;
          }
        }
      }
    }
    return removeConflictingTransitions(Array.from(enabledTransitionSet), new Set(nextState._nodes), nextState.historyValue);
  }
  function resolveStateValue(rootNode, stateValue) {
    const allStateNodes = getAllStateNodes(getStateNodes(rootNode, stateValue));
    return getStateValue(rootNode, [...allStateNodes]);
  }
  function isMachineSnapshot(value) {
    return !!value && typeof value === "object" && "machine" in value && "value" in value;
  }
  var machineSnapshotMatches = function matches(testValue) {
    return matchesState(testValue, this.value);
  };
  var machineSnapshotHasTag = function hasTag(tag) {
    return this.tags.has(tag);
  };
  var machineSnapshotCan = function can(event) {
    const transitionData = this.machine.getTransitionData(this, event);
    return !!transitionData?.length && // Check that at least one transition is not forbidden
    transitionData.some((t14) => t14.target !== void 0 || t14.actions.length);
  };
  var machineSnapshotToJSON = function toJSON() {
    const {
      _nodes: nodes,
      tags,
      machine,
      getMeta: getMeta2,
      toJSON: toJSON2,
      can: can2,
      hasTag: hasTag2,
      matches: matches2,
      ...jsonValues
    } = this;
    return {
      ...jsonValues,
      tags: Array.from(tags)
    };
  };
  var machineSnapshotGetMeta = function getMeta() {
    return this._nodes.reduce((acc, stateNode) => {
      if (stateNode.meta !== void 0) {
        acc[stateNode.id] = stateNode.meta;
      }
      return acc;
    }, {});
  };
  function createMachineSnapshot(config, machine) {
    return {
      status: config.status,
      output: config.output,
      error: config.error,
      machine,
      context: config.context,
      _nodes: config._nodes,
      value: getStateValue(machine.root, config._nodes),
      tags: new Set(config._nodes.flatMap((sn) => sn.tags)),
      children: config.children,
      historyValue: config.historyValue || {},
      matches: machineSnapshotMatches,
      hasTag: machineSnapshotHasTag,
      can: machineSnapshotCan,
      getMeta: machineSnapshotGetMeta,
      toJSON: machineSnapshotToJSON
    };
  }
  function cloneMachineSnapshot(snapshot, config = {}) {
    return createMachineSnapshot({
      ...snapshot,
      ...config
    }, snapshot.machine);
  }
  function getPersistedSnapshot(snapshot, options) {
    const {
      _nodes: nodes,
      tags,
      machine,
      children,
      context,
      can: can2,
      hasTag: hasTag2,
      matches: matches2,
      getMeta: getMeta2,
      toJSON: toJSON2,
      ...jsonValues
    } = snapshot;
    const childrenJson = {};
    for (const id in children) {
      const child = children[id];
      childrenJson[id] = {
        snapshot: child.getPersistedSnapshot(options),
        src: child.src,
        systemId: child._systemId,
        syncSnapshot: child._syncSnapshot
      };
    }
    const persisted = {
      ...jsonValues,
      context: persistContext(context),
      children: childrenJson
    };
    return persisted;
  }
  function persistContext(contextPart) {
    let copy;
    for (const key in contextPart) {
      const value = contextPart[key];
      if (value && typeof value === "object") {
        if ("sessionId" in value && "send" in value && "ref" in value) {
          copy ??= Array.isArray(contextPart) ? contextPart.slice() : {
            ...contextPart
          };
          copy[key] = {
            xstate$$type: $$ACTOR_TYPE,
            id: value.id
          };
        } else {
          const result = persistContext(value);
          if (result !== value) {
            copy ??= Array.isArray(contextPart) ? contextPart.slice() : {
              ...contextPart
            };
            copy[key] = result;
          }
        }
      }
    }
    return copy ?? contextPart;
  }
  function resolveRaise(_, snapshot, args, actionParams, {
    event: eventOrExpr,
    id,
    delay
  }, {
    internalQueue
  }) {
    const delaysMap = snapshot.machine.implementations.delays;
    if (typeof eventOrExpr === "string") {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Only event objects may be used with raise; use raise({ type: "${eventOrExpr}" }) instead`
      );
    }
    const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
    let resolvedDelay;
    if (typeof delay === "string") {
      const configDelay = delaysMap && delaysMap[delay];
      resolvedDelay = typeof configDelay === "function" ? configDelay(args, actionParams) : configDelay;
    } else {
      resolvedDelay = typeof delay === "function" ? delay(args, actionParams) : delay;
    }
    if (typeof resolvedDelay !== "number") {
      internalQueue.push(resolvedEvent);
    }
    return [snapshot, {
      event: resolvedEvent,
      id,
      delay: resolvedDelay
    }, void 0];
  }
  function executeRaise(actorScope, params) {
    const {
      event,
      delay,
      id
    } = params;
    if (typeof delay === "number") {
      actorScope.defer(() => {
        const self2 = actorScope.self;
        actorScope.system.scheduler.schedule(self2, self2, event, delay, id);
      });
      return;
    }
  }
  function raise(eventOrExpr, options) {
    function raise2(_args, _params) {
    }
    raise2.type = "xstate.raise";
    raise2.event = eventOrExpr;
    raise2.id = options?.id;
    raise2.delay = options?.delay;
    raise2.resolve = resolveRaise;
    raise2.execute = executeRaise;
    return raise2;
  }

  // ../shared/node_modules/xstate/actors/dist/xstate-actors.esm.js
  function fromTransition(transition, initialContext) {
    return {
      config: transition,
      transition: (snapshot, event, actorScope) => {
        return {
          ...snapshot,
          context: transition(snapshot.context, event, actorScope)
        };
      },
      getInitialSnapshot: (_, input) => {
        return {
          status: "active",
          output: void 0,
          error: void 0,
          context: typeof initialContext === "function" ? initialContext({
            input
          }) : initialContext
        };
      },
      getPersistedSnapshot: (snapshot) => snapshot,
      restoreSnapshot: (snapshot) => snapshot
    };
  }
  var instanceStates = /* @__PURE__ */ new WeakMap();
  function fromCallback(callback) {
    const logic = {
      config: callback,
      start: (state, actorScope) => {
        const {
          self: self2,
          system,
          emit: emit2
        } = actorScope;
        const callbackState = {
          receivers: void 0,
          dispose: void 0
        };
        instanceStates.set(self2, callbackState);
        callbackState.dispose = callback({
          input: state.input,
          system,
          self: self2,
          sendBack: (event) => {
            if (self2.getSnapshot().status === "stopped") {
              return;
            }
            if (self2._parent) {
              system._relay(self2, self2._parent, event);
            }
          },
          receive: (listener) => {
            callbackState.receivers ??= /* @__PURE__ */ new Set();
            callbackState.receivers.add(listener);
          },
          emit: emit2
        });
      },
      transition: (state, event, actorScope) => {
        const callbackState = instanceStates.get(actorScope.self);
        if (event.type === XSTATE_STOP) {
          state = {
            ...state,
            status: "stopped",
            error: void 0
          };
          callbackState.dispose?.();
          return state;
        }
        callbackState.receivers?.forEach((receiver) => receiver(event));
        return state;
      },
      getInitialSnapshot: (_, input) => {
        return {
          status: "active",
          output: void 0,
          error: void 0,
          input
        };
      },
      getPersistedSnapshot: (snapshot) => snapshot,
      restoreSnapshot: (snapshot) => snapshot
    };
    return logic;
  }
  var XSTATE_PROMISE_RESOLVE = "xstate.promise.resolve";
  var XSTATE_PROMISE_REJECT = "xstate.promise.reject";
  var controllerMap = /* @__PURE__ */ new WeakMap();
  function fromPromise(promiseCreator) {
    const logic = {
      config: promiseCreator,
      transition: (state, event, scope) => {
        if (state.status !== "active") {
          return state;
        }
        switch (event.type) {
          case XSTATE_PROMISE_RESOLVE: {
            const resolvedValue = event.data;
            return {
              ...state,
              status: "done",
              output: resolvedValue,
              input: void 0
            };
          }
          case XSTATE_PROMISE_REJECT:
            return {
              ...state,
              status: "error",
              error: event.data,
              input: void 0
            };
          case XSTATE_STOP: {
            controllerMap.get(scope.self)?.abort();
            return {
              ...state,
              status: "stopped",
              input: void 0
            };
          }
          default:
            return state;
        }
      },
      start: (state, {
        self: self2,
        system,
        emit: emit2
      }) => {
        if (state.status !== "active") {
          return;
        }
        const controller = new AbortController();
        controllerMap.set(self2, controller);
        const resolvedPromise = Promise.resolve(promiseCreator({
          input: state.input,
          system,
          self: self2,
          signal: controller.signal,
          emit: emit2
        }));
        resolvedPromise.then((response) => {
          if (self2.getSnapshot().status !== "active") {
            return;
          }
          controllerMap.delete(self2);
          system._relay(self2, self2, {
            type: XSTATE_PROMISE_RESOLVE,
            data: response
          });
        }, (errorData) => {
          if (self2.getSnapshot().status !== "active") {
            return;
          }
          controllerMap.delete(self2);
          system._relay(self2, self2, {
            type: XSTATE_PROMISE_REJECT,
            data: errorData
          });
        });
      },
      getInitialSnapshot: (_, input) => {
        return {
          status: "active",
          output: void 0,
          error: void 0,
          input
        };
      },
      getPersistedSnapshot: (snapshot) => snapshot,
      restoreSnapshot: (snapshot) => snapshot
    };
    return logic;
  }
  var emptyLogic = fromTransition((_) => void 0, void 0);

  // ../shared/node_modules/xstate/dist/log-2a773d37.esm.js
  function createSpawner(actorScope, {
    machine,
    context
  }, event, spawnedChildren) {
    const spawn = (src, options = {}) => {
      const {
        systemId,
        input
      } = options;
      if (typeof src === "string") {
        const logic = resolveReferencedActor(machine, src);
        if (!logic) {
          throw new Error(`Actor logic '${src}' not implemented in machine '${machine.id}'`);
        }
        const actorRef = createActor(logic, {
          id: options.id,
          parent: actorScope.self,
          syncSnapshot: options.syncSnapshot,
          input: typeof input === "function" ? input({
            context,
            event,
            self: actorScope.self
          }) : input,
          src,
          systemId
        });
        spawnedChildren[actorRef.id] = actorRef;
        return actorRef;
      } else {
        const actorRef = createActor(src, {
          id: options.id,
          parent: actorScope.self,
          syncSnapshot: options.syncSnapshot,
          input: options.input,
          src,
          systemId
        });
        return actorRef;
      }
    };
    return (src, options) => {
      const actorRef = spawn(src, options);
      spawnedChildren[actorRef.id] = actorRef;
      actorScope.defer(() => {
        if (actorRef._processingStatus === ProcessingStatus.Stopped) {
          return;
        }
        actorRef.start();
      });
      return actorRef;
    };
  }
  function resolveAssign(actorScope, snapshot, actionArgs, actionParams, {
    assignment
  }) {
    if (!snapshot.context) {
      throw new Error("Cannot assign to undefined `context`. Ensure that `context` is defined in the machine config.");
    }
    const spawnedChildren = {};
    const assignArgs = {
      context: snapshot.context,
      event: actionArgs.event,
      spawn: createSpawner(actorScope, snapshot, actionArgs.event, spawnedChildren),
      self: actorScope.self,
      system: actorScope.system
    };
    let partialUpdate = {};
    if (typeof assignment === "function") {
      partialUpdate = assignment(assignArgs, actionParams);
    } else {
      for (const key of Object.keys(assignment)) {
        const propAssignment = assignment[key];
        partialUpdate[key] = typeof propAssignment === "function" ? propAssignment(assignArgs, actionParams) : propAssignment;
      }
    }
    const updatedContext = Object.assign({}, snapshot.context, partialUpdate);
    return [cloneMachineSnapshot(snapshot, {
      context: updatedContext,
      children: Object.keys(spawnedChildren).length ? {
        ...snapshot.children,
        ...spawnedChildren
      } : snapshot.children
    }), void 0, void 0];
  }
  function assign(assignment) {
    function assign2(_args, _params) {
    }
    assign2.type = "xstate.assign";
    assign2.assignment = assignment;
    assign2.resolve = resolveAssign;
    return assign2;
  }
  function resolveEmit(_, snapshot, args, actionParams, {
    event: eventOrExpr
  }) {
    const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
    return [snapshot, {
      event: resolvedEvent
    }, void 0];
  }
  function executeEmit(actorScope, {
    event
  }) {
    actorScope.defer(() => actorScope.emit(event));
  }
  function emit(eventOrExpr) {
    function emit2(_args, _params) {
    }
    emit2.type = "xstate.emit";
    emit2.event = eventOrExpr;
    emit2.resolve = resolveEmit;
    emit2.execute = executeEmit;
    return emit2;
  }
  var SpecialTargets = /* @__PURE__ */ function(SpecialTargets2) {
    SpecialTargets2["Parent"] = "#_parent";
    SpecialTargets2["Internal"] = "#_internal";
    return SpecialTargets2;
  }({});
  function resolveSendTo(actorScope, snapshot, args, actionParams, {
    to,
    event: eventOrExpr,
    id,
    delay
  }, extra) {
    const delaysMap = snapshot.machine.implementations.delays;
    if (typeof eventOrExpr === "string") {
      throw new Error(
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        `Only event objects may be used with sendTo; use sendTo({ type: "${eventOrExpr}" }) instead`
      );
    }
    const resolvedEvent = typeof eventOrExpr === "function" ? eventOrExpr(args, actionParams) : eventOrExpr;
    let resolvedDelay;
    if (typeof delay === "string") {
      const configDelay = delaysMap && delaysMap[delay];
      resolvedDelay = typeof configDelay === "function" ? configDelay(args, actionParams) : configDelay;
    } else {
      resolvedDelay = typeof delay === "function" ? delay(args, actionParams) : delay;
    }
    const resolvedTarget = typeof to === "function" ? to(args, actionParams) : to;
    let targetActorRef;
    if (typeof resolvedTarget === "string") {
      if (resolvedTarget === SpecialTargets.Parent) {
        targetActorRef = actorScope.self._parent;
      } else if (resolvedTarget === SpecialTargets.Internal) {
        targetActorRef = actorScope.self;
      } else if (resolvedTarget.startsWith("#_")) {
        targetActorRef = snapshot.children[resolvedTarget.slice(2)];
      } else {
        targetActorRef = extra.deferredActorIds?.includes(resolvedTarget) ? resolvedTarget : snapshot.children[resolvedTarget];
      }
      if (!targetActorRef) {
        throw new Error(`Unable to send event to actor '${resolvedTarget}' from machine '${snapshot.machine.id}'.`);
      }
    } else {
      targetActorRef = resolvedTarget || actorScope.self;
    }
    return [snapshot, {
      to: targetActorRef,
      targetId: typeof resolvedTarget === "string" ? resolvedTarget : void 0,
      event: resolvedEvent,
      id,
      delay: resolvedDelay
    }, void 0];
  }
  function retryResolveSendTo(_, snapshot, params) {
    if (typeof params.to === "string") {
      params.to = snapshot.children[params.to];
    }
  }
  function executeSendTo(actorScope, params) {
    actorScope.defer(() => {
      const {
        to,
        event,
        delay,
        id
      } = params;
      if (typeof delay === "number") {
        actorScope.system.scheduler.schedule(actorScope.self, to, event, delay, id);
        return;
      }
      actorScope.system._relay(
        actorScope.self,
        // at this point, in a deferred task, it should already be mutated by retryResolveSendTo
        // if it initially started as a string
        to,
        event.type === XSTATE_ERROR ? createErrorActorEvent(actorScope.self.id, event.data) : event
      );
    });
  }
  function sendTo(to, eventOrExpr, options) {
    function sendTo2(_args, _params) {
    }
    sendTo2.type = "xstate.sendTo";
    sendTo2.to = to;
    sendTo2.event = eventOrExpr;
    sendTo2.id = options?.id;
    sendTo2.delay = options?.delay;
    sendTo2.resolve = resolveSendTo;
    sendTo2.retryResolve = retryResolveSendTo;
    sendTo2.execute = executeSendTo;
    return sendTo2;
  }
  function sendParent(event, options) {
    return sendTo(SpecialTargets.Parent, event, options);
  }
  function resolveEnqueueActions(actorScope, snapshot, args, actionParams, {
    collect
  }) {
    const actions = [];
    const enqueue = function enqueue2(action) {
      actions.push(action);
    };
    enqueue.assign = (...args2) => {
      actions.push(assign(...args2));
    };
    enqueue.cancel = (...args2) => {
      actions.push(cancel(...args2));
    };
    enqueue.raise = (...args2) => {
      actions.push(raise(...args2));
    };
    enqueue.sendTo = (...args2) => {
      actions.push(sendTo(...args2));
    };
    enqueue.sendParent = (...args2) => {
      actions.push(sendParent(...args2));
    };
    enqueue.spawnChild = (...args2) => {
      actions.push(spawnChild(...args2));
    };
    enqueue.stopChild = (...args2) => {
      actions.push(stopChild(...args2));
    };
    enqueue.emit = (...args2) => {
      actions.push(emit(...args2));
    };
    collect({
      context: args.context,
      event: args.event,
      enqueue,
      check: (guard2) => evaluateGuard(guard2, snapshot.context, args.event, snapshot),
      self: actorScope.self,
      system: actorScope.system
    }, actionParams);
    return [snapshot, void 0, actions];
  }
  function enqueueActions(collect) {
    function enqueueActions2(_args, _params) {
    }
    enqueueActions2.type = "xstate.enqueueActions";
    enqueueActions2.collect = collect;
    enqueueActions2.resolve = resolveEnqueueActions;
    return enqueueActions2;
  }

  // ../shared/node_modules/xstate/dist/xstate.esm.js
  var cache = /* @__PURE__ */ new WeakMap();
  function memo(object, key, fn) {
    let memoizedData = cache.get(object);
    if (!memoizedData) {
      memoizedData = {
        [key]: fn()
      };
      cache.set(object, memoizedData);
    } else if (!(key in memoizedData)) {
      memoizedData[key] = fn();
    }
    return memoizedData[key];
  }
  var EMPTY_OBJECT = {};
  var toSerializableAction = (action) => {
    if (typeof action === "string") {
      return {
        type: action
      };
    }
    if (typeof action === "function") {
      if ("resolve" in action) {
        return {
          type: action.type
        };
      }
      return {
        type: action.name
      };
    }
    return action;
  };
  var StateNode = class _StateNode {
    constructor(config, options) {
      this.config = config;
      this.key = void 0;
      this.id = void 0;
      this.type = void 0;
      this.path = void 0;
      this.states = void 0;
      this.history = void 0;
      this.entry = void 0;
      this.exit = void 0;
      this.parent = void 0;
      this.machine = void 0;
      this.meta = void 0;
      this.output = void 0;
      this.order = -1;
      this.description = void 0;
      this.tags = [];
      this.transitions = void 0;
      this.always = void 0;
      this.parent = options._parent;
      this.key = options._key;
      this.machine = options._machine;
      this.path = this.parent ? this.parent.path.concat(this.key) : [];
      this.id = this.config.id || [this.machine.id, ...this.path].join(STATE_DELIMITER);
      this.type = this.config.type || (this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
      this.description = this.config.description;
      this.order = this.machine.idMap.size;
      this.machine.idMap.set(this.id, this);
      this.states = this.config.states ? mapValues(this.config.states, (stateConfig, key) => {
        const stateNode = new _StateNode(stateConfig, {
          _parent: this,
          _key: key,
          _machine: this.machine
        });
        return stateNode;
      }) : EMPTY_OBJECT;
      if (this.type === "compound" && !this.config.initial) {
        throw new Error(`No initial state specified for compound state node "#${this.id}". Try adding { initial: "${Object.keys(this.states)[0]}" } to the state config.`);
      }
      this.history = this.config.history === true ? "shallow" : this.config.history || false;
      this.entry = toArray(this.config.entry).slice();
      this.exit = toArray(this.config.exit).slice();
      this.meta = this.config.meta;
      this.output = this.type === "final" || !this.parent ? this.config.output : void 0;
      this.tags = toArray(config.tags).slice();
    }
    /** @internal */
    _initialize() {
      this.transitions = formatTransitions(this);
      if (this.config.always) {
        this.always = toTransitionConfigArray(this.config.always).map((t14) => formatTransition(this, NULL_EVENT, t14));
      }
      Object.keys(this.states).forEach((key) => {
        this.states[key]._initialize();
      });
    }
    /** The well-structured state node definition. */
    get definition() {
      return {
        id: this.id,
        key: this.key,
        version: this.machine.version,
        type: this.type,
        initial: this.initial ? {
          target: this.initial.target,
          source: this,
          actions: this.initial.actions.map(toSerializableAction),
          eventType: null,
          reenter: false,
          toJSON: () => ({
            target: this.initial.target.map((t14) => `#${t14.id}`),
            source: `#${this.id}`,
            actions: this.initial.actions.map(toSerializableAction),
            eventType: null
          })
        } : void 0,
        history: this.history,
        states: mapValues(this.states, (state) => {
          return state.definition;
        }),
        on: this.on,
        transitions: [...this.transitions.values()].flat().map((t14) => ({
          ...t14,
          actions: t14.actions.map(toSerializableAction)
        })),
        entry: this.entry.map(toSerializableAction),
        exit: this.exit.map(toSerializableAction),
        meta: this.meta,
        order: this.order || -1,
        output: this.output,
        invoke: this.invoke,
        description: this.description,
        tags: this.tags
      };
    }
    /** @internal */
    toJSON() {
      return this.definition;
    }
    /** The logic invoked as actors by this state node. */
    get invoke() {
      return memo(this, "invoke", () => toArray(this.config.invoke).map((invokeConfig, i2) => {
        const {
          src,
          systemId
        } = invokeConfig;
        const resolvedId = invokeConfig.id ?? createInvokeId(this.id, i2);
        const sourceName = typeof src === "string" ? src : `xstate.invoke.${createInvokeId(this.id, i2)}`;
        return {
          ...invokeConfig,
          src: sourceName,
          id: resolvedId,
          systemId,
          toJSON() {
            const {
              onDone,
              onError,
              ...invokeDefValues
            } = invokeConfig;
            return {
              ...invokeDefValues,
              type: "xstate.invoke",
              src: sourceName,
              id: resolvedId
            };
          }
        };
      }));
    }
    /** The mapping of events to transitions. */
    get on() {
      return memo(this, "on", () => {
        const transitions = this.transitions;
        return [...transitions].flatMap(([descriptor, t14]) => t14.map((t15) => [descriptor, t15])).reduce((map2, [descriptor, transition]) => {
          map2[descriptor] = map2[descriptor] || [];
          map2[descriptor].push(transition);
          return map2;
        }, {});
      });
    }
    get after() {
      return memo(this, "delayedTransitions", () => getDelayedTransitions(this));
    }
    get initial() {
      return memo(this, "initial", () => formatInitialTransition(this, this.config.initial));
    }
    /** @internal */
    next(snapshot, event) {
      const eventType = event.type;
      const actions = [];
      let selectedTransition;
      const candidates = memo(this, `candidates-${eventType}`, () => getCandidates(this, eventType));
      for (const candidate of candidates) {
        const {
          guard: guard2
        } = candidate;
        const resolvedContext = snapshot.context;
        let guardPassed = false;
        try {
          guardPassed = !guard2 || evaluateGuard(guard2, resolvedContext, event, snapshot);
        } catch (err) {
          const guardType = typeof guard2 === "string" ? guard2 : typeof guard2 === "object" ? guard2.type : void 0;
          throw new Error(`Unable to evaluate guard ${guardType ? `'${guardType}' ` : ""}in transition for event '${eventType}' in state node '${this.id}':
${err.message}`);
        }
        if (guardPassed) {
          actions.push(...candidate.actions);
          selectedTransition = candidate;
          break;
        }
      }
      return selectedTransition ? [selectedTransition] : void 0;
    }
    /** All the event types accepted by this state node and its descendants. */
    get events() {
      return memo(this, "events", () => {
        const {
          states
        } = this;
        const events = new Set(this.ownEvents);
        if (states) {
          for (const stateId of Object.keys(states)) {
            const state = states[stateId];
            if (state.states) {
              for (const event of state.events) {
                events.add(`${event}`);
              }
            }
          }
        }
        return Array.from(events);
      });
    }
    /**
     * All the events that have transitions directly from this state node.
     *
     * Excludes any inert events.
     */
    get ownEvents() {
      const events = new Set([...this.transitions.keys()].filter((descriptor) => {
        return this.transitions.get(descriptor).some((transition) => !(!transition.target && !transition.actions.length && !transition.reenter));
      }));
      return Array.from(events);
    }
  };
  var STATE_IDENTIFIER2 = "#";
  var StateMachine = class _StateMachine {
    constructor(config, implementations) {
      this.config = config;
      this.version = void 0;
      this.schemas = void 0;
      this.implementations = void 0;
      this.__xstatenode = true;
      this.idMap = /* @__PURE__ */ new Map();
      this.root = void 0;
      this.id = void 0;
      this.states = void 0;
      this.events = void 0;
      this.id = config.id || "(machine)";
      this.implementations = {
        actors: implementations?.actors ?? {},
        actions: implementations?.actions ?? {},
        delays: implementations?.delays ?? {},
        guards: implementations?.guards ?? {}
      };
      this.version = this.config.version;
      this.schemas = this.config.schemas;
      this.transition = this.transition.bind(this);
      this.getInitialSnapshot = this.getInitialSnapshot.bind(this);
      this.getPersistedSnapshot = this.getPersistedSnapshot.bind(this);
      this.restoreSnapshot = this.restoreSnapshot.bind(this);
      this.start = this.start.bind(this);
      this.root = new StateNode(config, {
        _key: this.id,
        _machine: this
      });
      this.root._initialize();
      this.states = this.root.states;
      this.events = this.root.events;
    }
    /**
     * Clones this state machine with the provided implementations and merges the
     * `context` (if provided).
     *
     * @param implementations Options (`actions`, `guards`, `actors`, `delays`,
     *   `context`) to recursively merge with the existing options.
     * @returns A new `StateMachine` instance with the provided implementations.
     */
    provide(implementations) {
      const {
        actions,
        guards,
        actors,
        delays
      } = this.implementations;
      return new _StateMachine(this.config, {
        actions: {
          ...actions,
          ...implementations.actions
        },
        guards: {
          ...guards,
          ...implementations.guards
        },
        actors: {
          ...actors,
          ...implementations.actors
        },
        delays: {
          ...delays,
          ...implementations.delays
        }
      });
    }
    resolveState(config) {
      const resolvedStateValue = resolveStateValue(this.root, config.value);
      const nodeSet = getAllStateNodes(getStateNodes(this.root, resolvedStateValue));
      return createMachineSnapshot({
        _nodes: [...nodeSet],
        context: config.context || {},
        children: {},
        status: isInFinalState(nodeSet, this.root) ? "done" : config.status || "active",
        output: config.output,
        error: config.error,
        historyValue: config.historyValue
      }, this);
    }
    /**
     * Determines the next snapshot given the current `snapshot` and received
     * `event`. Calculates a full macrostep from all microsteps.
     *
     * @param snapshot The current snapshot
     * @param event The received event
     */
    transition(snapshot, event, actorScope) {
      return macrostep(snapshot, event, actorScope, []).snapshot;
    }
    /**
     * Determines the next state given the current `state` and `event`. Calculates
     * a microstep.
     *
     * @param state The current state
     * @param event The received event
     */
    microstep(snapshot, event, actorScope) {
      return macrostep(snapshot, event, actorScope, []).microstates;
    }
    getTransitionData(snapshot, event) {
      return transitionNode(this.root, snapshot.value, snapshot, event) || [];
    }
    /**
     * The initial state _before_ evaluating any microsteps. This "pre-initial"
     * state is provided to initial actions executed in the initial state.
     */
    getPreInitialState(actorScope, initEvent, internalQueue) {
      const {
        context
      } = this.config;
      const preInitial = createMachineSnapshot({
        context: typeof context !== "function" && context ? context : {},
        _nodes: [this.root],
        children: {},
        status: "active"
      }, this);
      if (typeof context === "function") {
        const assignment = ({
          spawn,
          event,
          self: self2
        }) => context({
          spawn,
          input: event.input,
          self: self2
        });
        return resolveActionsAndContext(preInitial, initEvent, actorScope, [assign(assignment)], internalQueue, void 0);
      }
      return preInitial;
    }
    /**
     * Returns the initial `State` instance, with reference to `self` as an
     * `ActorRef`.
     */
    getInitialSnapshot(actorScope, input) {
      const initEvent = createInitEvent(input);
      const internalQueue = [];
      const preInitialState = this.getPreInitialState(actorScope, initEvent, internalQueue);
      const nextState = microstep([{
        target: [...getInitialStateNodes(this.root)],
        source: this.root,
        reenter: true,
        actions: [],
        eventType: null,
        toJSON: null
        // TODO: fix
      }], preInitialState, actorScope, initEvent, true, internalQueue);
      const {
        snapshot: macroState
      } = macrostep(nextState, initEvent, actorScope, internalQueue);
      return macroState;
    }
    start(snapshot) {
      Object.values(snapshot.children).forEach((child) => {
        if (child.getSnapshot().status === "active") {
          child.start();
        }
      });
    }
    getStateNodeById(stateId) {
      const fullPath = toStatePath(stateId);
      const relativePath = fullPath.slice(1);
      const resolvedStateId = isStateId(fullPath[0]) ? fullPath[0].slice(STATE_IDENTIFIER2.length) : fullPath[0];
      const stateNode = this.idMap.get(resolvedStateId);
      if (!stateNode) {
        throw new Error(`Child state node '#${resolvedStateId}' does not exist on machine '${this.id}'`);
      }
      return getStateNodeByPath(stateNode, relativePath);
    }
    get definition() {
      return this.root.definition;
    }
    toJSON() {
      return this.definition;
    }
    getPersistedSnapshot(snapshot, options) {
      return getPersistedSnapshot(snapshot, options);
    }
    restoreSnapshot(snapshot, _actorScope) {
      const children = {};
      const snapshotChildren = snapshot.children;
      Object.keys(snapshotChildren).forEach((actorId) => {
        const actorData = snapshotChildren[actorId];
        const childState = actorData.snapshot;
        const src = actorData.src;
        const logic = typeof src === "string" ? resolveReferencedActor(this, src) : src;
        if (!logic) {
          return;
        }
        const actorRef = createActor(logic, {
          id: actorId,
          parent: _actorScope.self,
          syncSnapshot: actorData.syncSnapshot,
          snapshot: childState,
          src,
          systemId: actorData.systemId
        });
        children[actorId] = actorRef;
      });
      const restoredSnapshot = createMachineSnapshot({
        ...snapshot,
        children,
        _nodes: Array.from(getAllStateNodes(getStateNodes(this.root, snapshot.value)))
      }, this);
      const seen = /* @__PURE__ */ new Set();
      function reviveContext(contextPart, children2) {
        if (seen.has(contextPart)) {
          return;
        }
        seen.add(contextPart);
        for (const key in contextPart) {
          const value = contextPart[key];
          if (value && typeof value === "object") {
            if ("xstate$$type" in value && value.xstate$$type === $$ACTOR_TYPE) {
              contextPart[key] = children2[value.id];
              continue;
            }
            reviveContext(value, children2);
          }
        }
      }
      reviveContext(restoredSnapshot.context, children);
      return restoredSnapshot;
    }
  };
  function createMachine(config, implementations) {
    return new StateMachine(config, implementations);
  }
  function setup({
    schemas,
    actors,
    actions,
    guards,
    delays
  }) {
    return {
      createMachine: (config) => createMachine({
        ...config,
        schemas
      }, {
        actors,
        actions,
        guards,
        delays
      })
    };
  }

  // ../shared/src/products/nudges/store/actions.ts
  var import_set = __toESM(require_set());

  // ../shared/node_modules/proxy-compare/dist/index.modern.js
  var e = Symbol();
  var t9 = Symbol();
  var s = Object.getPrototypeOf;
  var c = /* @__PURE__ */ new WeakMap();
  var l = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype);
  var y = (e2) => l(e2) && e2[t9] || null;
  var h = (e2, t14 = true) => {
    c.set(e2, t14);
  };

  // ../shared/node_modules/valtio/esm/vanilla.mjs
  var import_meta = {};
  var isObject = (x) => typeof x === "object" && x !== null;
  var proxyStateMap = /* @__PURE__ */ new WeakMap();
  var refSet = /* @__PURE__ */ new WeakSet();
  var buildProxyFunction = (objectIs = Object.is, newProxy = (target, handler) => new Proxy(target, handler), canProxy = (x) => isObject(x) && !refSet.has(x) && (Array.isArray(x) || !(Symbol.iterator in x)) && !(x instanceof WeakMap) && !(x instanceof WeakSet) && !(x instanceof Error) && !(x instanceof Number) && !(x instanceof Date) && !(x instanceof String) && !(x instanceof RegExp) && !(x instanceof ArrayBuffer), defaultHandlePromise = (promise) => {
    switch (promise.status) {
      case "fulfilled":
        return promise.value;
      case "rejected":
        throw promise.reason;
      default:
        throw promise;
    }
  }, snapCache = /* @__PURE__ */ new WeakMap(), createSnapshot = (target, version2, handlePromise = defaultHandlePromise) => {
    const cache2 = snapCache.get(target);
    if ((cache2 == null ? void 0 : cache2[0]) === version2) {
      return cache2[1];
    }
    const snap = Array.isArray(target) ? [] : Object.create(Object.getPrototypeOf(target));
    h(snap, true);
    snapCache.set(target, [version2, snap]);
    Reflect.ownKeys(target).forEach((key) => {
      if (Object.getOwnPropertyDescriptor(snap, key)) {
        return;
      }
      const value = Reflect.get(target, key);
      const { enumerable } = Reflect.getOwnPropertyDescriptor(
        target,
        key
      );
      const desc = {
        value,
        enumerable,
        // This is intentional to avoid copying with proxy-compare.
        // It's still non-writable, so it avoids assigning a value.
        configurable: true
      };
      if (refSet.has(value)) {
        h(value, false);
      } else if (value instanceof Promise) {
        delete desc.value;
        desc.get = () => handlePromise(value);
      } else if (proxyStateMap.has(value)) {
        const [target2, ensureVersion] = proxyStateMap.get(
          value
        );
        desc.value = createSnapshot(
          target2,
          ensureVersion(),
          handlePromise
        );
      }
      Object.defineProperty(snap, key, desc);
    });
    return Object.preventExtensions(snap);
  }, proxyCache = /* @__PURE__ */ new WeakMap(), versionHolder = [1, 1], proxyFunction = (initialObject) => {
    if (!isObject(initialObject)) {
      throw new Error("object required");
    }
    const found = proxyCache.get(initialObject);
    if (found) {
      return found;
    }
    let version2 = versionHolder[0];
    const listeners = /* @__PURE__ */ new Set();
    const notifyUpdate = (op, nextVersion = ++versionHolder[0]) => {
      if (version2 !== nextVersion) {
        version2 = nextVersion;
        listeners.forEach((listener) => listener(op, nextVersion));
      }
    };
    let checkVersion = versionHolder[1];
    const ensureVersion = (nextCheckVersion = ++versionHolder[1]) => {
      if (checkVersion !== nextCheckVersion && !listeners.size) {
        checkVersion = nextCheckVersion;
        propProxyStates.forEach(([propProxyState]) => {
          const propVersion = propProxyState[1](nextCheckVersion);
          if (propVersion > version2) {
            version2 = propVersion;
          }
        });
      }
      return version2;
    };
    const createPropListener = (prop) => (op, nextVersion) => {
      const newOp = [...op];
      newOp[1] = [prop, ...newOp[1]];
      notifyUpdate(newOp, nextVersion);
    };
    const propProxyStates = /* @__PURE__ */ new Map();
    const addPropListener = (prop, propProxyState) => {
      if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && propProxyStates.has(prop)) {
        throw new Error("prop listener already exists");
      }
      if (listeners.size) {
        const remove3 = propProxyState[3](createPropListener(prop));
        propProxyStates.set(prop, [propProxyState, remove3]);
      } else {
        propProxyStates.set(prop, [propProxyState]);
      }
    };
    const removePropListener = (prop) => {
      var _a;
      const entry = propProxyStates.get(prop);
      if (entry) {
        propProxyStates.delete(prop);
        (_a = entry[1]) == null ? void 0 : _a.call(entry);
      }
    };
    const addListener = (listener) => {
      listeners.add(listener);
      if (listeners.size === 1) {
        propProxyStates.forEach(([propProxyState, prevRemove], prop) => {
          if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && prevRemove) {
            throw new Error("remove already exists");
          }
          const remove3 = propProxyState[3](createPropListener(prop));
          propProxyStates.set(prop, [propProxyState, remove3]);
        });
      }
      const removeListener = () => {
        listeners.delete(listener);
        if (listeners.size === 0) {
          propProxyStates.forEach(([propProxyState, remove3], prop) => {
            if (remove3) {
              remove3();
              propProxyStates.set(prop, [propProxyState]);
            }
          });
        }
      };
      return removeListener;
    };
    const baseObject = Array.isArray(initialObject) ? [] : Object.create(Object.getPrototypeOf(initialObject));
    const handler = {
      deleteProperty(target, prop) {
        const prevValue = Reflect.get(target, prop);
        removePropListener(prop);
        const deleted = Reflect.deleteProperty(target, prop);
        if (deleted) {
          notifyUpdate(["delete", [prop], prevValue]);
        }
        return deleted;
      },
      set(target, prop, value, receiver) {
        const hasPrevValue = Reflect.has(target, prop);
        const prevValue = Reflect.get(target, prop, receiver);
        if (hasPrevValue && (objectIs(prevValue, value) || proxyCache.has(value) && objectIs(prevValue, proxyCache.get(value)))) {
          return true;
        }
        removePropListener(prop);
        if (isObject(value)) {
          value = y(value) || value;
        }
        let nextValue = value;
        if (value instanceof Promise) {
          value.then((v) => {
            value.status = "fulfilled";
            value.value = v;
            notifyUpdate(["resolve", [prop], v]);
          }).catch((e2) => {
            value.status = "rejected";
            value.reason = e2;
            notifyUpdate(["reject", [prop], e2]);
          });
        } else {
          if (!proxyStateMap.has(value) && canProxy(value)) {
            nextValue = proxyFunction(value);
          }
          const childProxyState = !refSet.has(nextValue) && proxyStateMap.get(nextValue);
          if (childProxyState) {
            addPropListener(prop, childProxyState);
          }
        }
        Reflect.set(target, prop, nextValue, receiver);
        notifyUpdate(["set", [prop], value, prevValue]);
        return true;
      }
    };
    const proxyObject = newProxy(baseObject, handler);
    proxyCache.set(initialObject, proxyObject);
    const proxyState = [
      baseObject,
      ensureVersion,
      createSnapshot,
      addListener
    ];
    proxyStateMap.set(proxyObject, proxyState);
    Reflect.ownKeys(initialObject).forEach((key) => {
      const desc = Object.getOwnPropertyDescriptor(
        initialObject,
        key
      );
      if ("value" in desc) {
        proxyObject[key] = initialObject[key];
        delete desc.value;
        delete desc.writable;
      }
      Object.defineProperty(baseObject, key, desc);
    });
    return proxyObject;
  }) => [
    // public functions
    proxyFunction,
    // shared state
    proxyStateMap,
    refSet,
    // internal things
    objectIs,
    newProxy,
    canProxy,
    defaultHandlePromise,
    snapCache,
    createSnapshot,
    proxyCache,
    versionHolder
  ];
  var [defaultProxyFunction] = buildProxyFunction();
  function proxy(initialObject = {}) {
    return defaultProxyFunction(initialObject);
  }
  function subscribe(proxyObject, callback, notifyInSync) {
    const proxyState = proxyStateMap.get(proxyObject);
    if ((import_meta.env ? import_meta.env.MODE : void 0) !== "production" && !proxyState) {
      console.warn("Please use proxy object");
    }
    let promise;
    const ops = [];
    const addListener = proxyState[3];
    let isListenerActive = false;
    const listener = (op) => {
      ops.push(op);
      if (notifyInSync) {
        callback(ops.splice(0));
        return;
      }
      if (!promise) {
        promise = Promise.resolve().then(() => {
          promise = void 0;
          if (isListenerActive) {
            callback(ops.splice(0));
          }
        });
      }
    };
    const removeListener = addListener(listener);
    isListenerActive = true;
    return () => {
      isListenerActive = false;
      removeListener();
    };
  }
  function ref(obj) {
    refSet.add(obj);
    return obj;
  }

  // ../shared/src/products/nudges/store/actions.ts
  var import_dayjs3 = __toESM(require_dayjs_min());

  // ../shared/node_modules/uuid/dist/esm-browser/rng.js
  var getRandomValues2;
  var rnds8 = new Uint8Array(16);
  function rng() {
    if (!getRandomValues2) {
      getRandomValues2 = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
      if (!getRandomValues2) {
        throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
      }
    }
    return getRandomValues2(rnds8);
  }

  // ../shared/node_modules/uuid/dist/esm-browser/regex.js
  var regex_default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

  // ../shared/node_modules/uuid/dist/esm-browser/validate.js
  function validate(uuid) {
    return typeof uuid === "string" && regex_default.test(uuid);
  }
  var validate_default = validate;

  // ../shared/node_modules/uuid/dist/esm-browser/stringify.js
  var byteToHex = [];
  for (i2 = 0; i2 < 256; ++i2) {
    byteToHex.push((i2 + 256).toString(16).substr(1));
  }
  var i2;
  function stringify(arr) {
    var offset2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset2 + 0]] + byteToHex[arr[offset2 + 1]] + byteToHex[arr[offset2 + 2]] + byteToHex[arr[offset2 + 3]] + "-" + byteToHex[arr[offset2 + 4]] + byteToHex[arr[offset2 + 5]] + "-" + byteToHex[arr[offset2 + 6]] + byteToHex[arr[offset2 + 7]] + "-" + byteToHex[arr[offset2 + 8]] + byteToHex[arr[offset2 + 9]] + "-" + byteToHex[arr[offset2 + 10]] + byteToHex[arr[offset2 + 11]] + byteToHex[arr[offset2 + 12]] + byteToHex[arr[offset2 + 13]] + byteToHex[arr[offset2 + 14]] + byteToHex[arr[offset2 + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // ../shared/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset2) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset2 = offset2 || 0;
      for (var i2 = 0; i2 < 16; ++i2) {
        buf[offset2 + i2] = rnds[i2];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v4;

  // ../shared/src/types/entities/endUser.ts
  var t10 = __toESM(require_lib());
  var NudgeInteractionStateV = t10.type({
    type: t10.union([
      t10.literal("survey"),
      t10.literal("tour"),
      t10.literal("banner"),
      t10.literal("tooltip"),
      t10.literal("checklist"),
      t10.string
    ]),
    formFactor: withFallback(
      t10.union([
        t10.literal("modal"),
        t10.literal("checklist"),
        t10.literal("popover"),
        t10.literal("banner"),
        t10.literal("pin"),
        t10.literal("tooltip"),
        t10.literal("card"),
        t10.literal("")
      ]),
      ""
    ),
    activelifeCycleUuid: t10.union([t10.string, t10.literal("")]),
    activatedTs: t10.array(t10.number),
    dismissedTs: t10.array(t10.number),
    isDismissed: t10.boolean,
    completedTs: t10.array(t10.number),
    isCompleted: t10.boolean,
    lastSeenTs: t10.union([t10.number, t10.literal(-1)]),
    lastSeenSessionId: withFallback(t10.number, -1),
    lastSeenDeviceId: withFallback(t10.string, ""),
    snoozedUntilTs: t10.union([t10.number, t10.literal(-1)]),
    stepIndexStack: t10.array(t10.number),
    currentStep: t10.number,
    isChecklistExpanded: t10.boolean,
    steps: t10.record(
      t10.string,
      t10.type({
        completedTs: t10.union([t10.number, t10.literal(-1)])
        // only used for checklists
      })
    ),
    tagIds: withFallback(t10.array(t10.number), []),
    // Tag IDs associated with this nudge
    lastUpdatedTs: withFallback(t10.number, -1)
  });
  var NudgeInteractionsV = t10.record(t10.string, NudgeInteractionStateV);
  var EndUserStoreDataV = t10.type({
    nudgeInteractions: NudgeInteractionsV
  });

  // ../shared/src/internal/middleware/getBaseURL.ts
  var getServerUrl = () => {
    const apiEndpoint = getSDK()?.[_configuration]?.serverUrl;
    if (apiEndpoint) {
      return apiEndpoint;
    } else {
      if (getSDK()?.[_configuration].serverZone === "EU") {
        return "https://gs.eu.amplitude.com";
      } else {
        return "https://gs.amplitude.com";
      }
    }
  };
  var getBaseURL_default = getServerUrl;

  // ../shared/src/internal/middleware/network.ts
  var MAX_WAIT_TIME_MS = 3e4;
  var isRetryable = ({ method, path, status }) => {
    const shouldRetryForMethod = method.toLowerCase() === "get";
    const shouldRetryForEndpoint = ["/decide", "/config", "/state"].some((s2) => path.includes(s2));
    const shouldRetryForStatus = status >= 500;
    return shouldRetryForMethod && shouldRetryForEndpoint && shouldRetryForStatus;
  };
  var post = (url, data = void 0, options = {}) => _fetch("POST", url, data, options);
  var get3 = (url, options = {}) => _fetch("GET", url, void 0, options);
  var _fetch = async (method, path, data, options = {}, numRetries = 5) => {
    const _baseURL = getBaseURL_default();
    let json, response;
    while (path.startsWith("/")) path = path.slice(1);
    let dataString = "";
    if (data !== void 0 && typeof data !== "string") {
      dataString = JSON.stringify(data);
    }
    if (!simpleFetch) {
      throw new Error("simpleFetch has not been initialized");
    }
    let n = 0;
    do {
      response = await simpleFetch(_baseURL + "/" + path, {
        method,
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          ...options.headers
        },
        body: dataString
      });
      let shouldRetry = false;
      if (!response.ok) {
        if (isRetryable({ method, path, status: response.status })) {
          shouldRetry = true;
        } else {
          try {
            let data2 = response.data;
            try {
              data2 = JSON.parse(data2);
            } catch (e2) {
            }
            return Promise.reject(data2 || "Something went wrong");
          } catch (e2) {
            throw new Error("Something went wrong");
          }
        }
        json = null;
      } else {
        if (response.status === 204) json = null;
        else if (response.headers["content-length"] === "0") json = null;
        else json = JSON.parse(response.data);
      }
      if (!shouldRetry) break;
      await new Promise(
        (resolve) => (
          // wait 2^n * 100ms + random jitter up to 1s, up to a max of 30s
          setTimeout(resolve, Math.min(Math.pow(2, n) * 100 + Math.floor(Math.random() * 1e3), MAX_WAIT_TIME_MS))
        )
      );
      n++;
    } while (n <= numRetries);
    return {
      data: json,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers
    };
  };

  // ../shared/src/store/end-user/state.ts
  var import_debounce = __toESM(require_debounce());
  var import_isArray = __toESM(require_isArray());
  var import_mergeWith = __toESM(require_mergeWith());

  // ../shared/src/internal/util/encoding.ts
  var jsonBase64Encoder = (object) => {
    const jsonString = JSON.stringify(object);
    return globalThis.base64Encode(jsonString);
  };

  // ../shared/src/store/end-user/state.ts
  var MAX_INTERACTION_TIMESTAMPS = 5;
  var CAPPED_TS_KEYS = /* @__PURE__ */ new Set(["activatedTs", "dismissedTs", "completedTs"]);
  var PUSH_DEBOUNCE_MS = 1e3;
  var PUSH_MAX_WAIT_MS = 5e3;
  var emptyEndUserStoreData = () => {
    return {
      nudgeInteractions: {}
    };
  };
  var REPLACE_ARRAY_KEYS = /* @__PURE__ */ new Set(["stepIndexStack", "tagIds"]);
  var createDefaultNudgeInteractionState = () => {
    return {
      type: "__unknown__",
      formFactor: "",
      activelifeCycleUuid: "",
      activatedTs: [],
      dismissedTs: [],
      isDismissed: false,
      completedTs: [],
      isCompleted: false,
      lastSeenTs: -1,
      lastSeenSessionId: -1,
      lastSeenDeviceId: "",
      snoozedUntilTs: -1,
      stepIndexStack: [],
      currentStep: 0,
      isChecklistExpanded: true,
      steps: {},
      tagIds: [],
      lastUpdatedTs: -1
    };
  };
  var updateEndUserStore = async (eus, updates, options = {}) => {
    const eusData = eus.data;
    Object.entries(updates).forEach(([variantId, updates2]) => {
      if (updates2 === null) {
        delete eusData.nudgeInteractions[variantId];
      } else {
        if (!eusData.nudgeInteractions[variantId]) {
          eusData.nudgeInteractions[variantId] = createDefaultNudgeInteractionState();
        }
        (0, import_mergeWith.default)(eusData.nudgeInteractions[variantId], updates2, (obj, src, key) => {
          if (src === void 0) {
            return obj;
          }
          if (CAPPED_TS_KEYS.has(key) && ((0, import_isArray.default)(obj) || (0, import_isArray.default)(src))) {
            const existing = (0, import_isArray.default)(obj) ? obj : [];
            const incoming = (0, import_isArray.default)(src) ? src : [src];
            return [...existing, ...incoming].slice(-MAX_INTERACTION_TIMESTAMPS);
          }
          if ((0, import_isArray.default)(obj)) {
            return REPLACE_ARRAY_KEYS.has(key) ? src : obj.concat(src);
          }
        });
        eusData.nudgeInteractions[variantId].lastUpdatedTs = Date.now();
        eus.dirtyVariantIds.add(variantId);
      }
    });
    await eus.pushData({ immediate: options.immediate });
  };
  var RemoteEndUserStore = class {
    data;
    initializedSuccessfully;
    dirtyVariantIds;
    debouncedNetworkPush;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = false;
      this.dirtyVariantIds = /* @__PURE__ */ new Set();
      this.debouncedNetworkPush = (0, import_debounce.default)(() => this.networkPush(), PUSH_DEBOUNCE_MS, { maxWait: PUSH_MAX_WAIT_MS });
    }
    reset() {
      this.debouncedNetworkPush.cancel();
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = false;
      this.dirtyVariantIds = /* @__PURE__ */ new Set();
    }
    getApiKeyPrefix() {
      const { apiKey } = getSDK()._configuration;
      return apiKey.substring(0, 6);
    }
    getLocalStorageLabel() {
      const user = getSDK()._.user;
      const prefix = this.getApiKeyPrefix();
      if (user?.user_id) {
        return `eus.${prefix}.user_id:${user.user_id}`;
      } else if (user?.device_id) {
        return `eus.${prefix}.device_id:${user.device_id}`;
      }
      return null;
    }
    saveToLocalStorage() {
      const label = this.getLocalStorageLabel();
      if (!label) return;
      LocalStorage_default.set(label, JSON.stringify(this.data));
    }
    loadFromLocalStorage() {
      const label = this.getLocalStorageLabel();
      if (!label) return null;
      try {
        const raw = LocalStorage_default.get(label, "");
        if (!raw) return null;
        return decodeThrowing(EndUserStoreDataV, JSON.parse(raw));
      } catch (e2) {
        return null;
      }
    }
    mergeEndUserStoreData(remote, local) {
      const allVariantIds = /* @__PURE__ */ new Set([...Object.keys(remote.nudgeInteractions), ...Object.keys(local.nudgeInteractions)]);
      const mergedInteractions = {};
      for (const variantId of allVariantIds) {
        const remoteNudge = remote.nudgeInteractions[variantId];
        const localNudge = local.nudgeInteractions[variantId];
        if (remoteNudge && localNudge) {
          mergedInteractions[variantId] = (localNudge.lastUpdatedTs ?? -1) > (remoteNudge.lastUpdatedTs ?? -1) ? localNudge : remoteNudge;
        } else if (localNudge) {
          mergedInteractions[variantId] = localNudge;
        } else if (remoteNudge) {
          mergedInteractions[variantId] = remoteNudge;
        }
      }
      return {
        nudgeInteractions: mergedInteractions
      };
    }
    hasNewerLocalNudges(remote, local) {
      return Object.entries(local.nudgeInteractions).some(([variantId, localNudge]) => {
        const remoteNudge = remote.nudgeInteractions[variantId];
        return !remoteNudge || (localNudge.lastUpdatedTs ?? -1) > (remoteNudge.lastUpdatedTs ?? -1);
      });
    }
    async fetchData() {
      const endUser = getSDK()._.user;
      if (!endUser) return;
      const { apiKey } = getSDK()._configuration;
      const userJsonBase64 = jsonBase64Encoder(endUser);
      let remoteData = null;
      try {
        const response = await get3("/sdk/v1/state", {
          headers: {
            Authorization: `Api-Key ${apiKey}`,
            "X-Amp-User": userJsonBase64
          }
        });
        remoteData = decodeThrowing(EndUserStoreDataV, response.data);
      } catch (e2) {
        logger.error("Failed to fetch remote end user store data", { error: e2 });
      }
      const localData = this.loadFromLocalStorage();
      if (remoteData && localData) {
        this.data = this.mergeEndUserStoreData(remoteData, localData);
        this.initializedSuccessfully = true;
        this.saveToLocalStorage();
        if (this.hasNewerLocalNudges(remoteData, localData)) {
          for (const [variantId, localNudge] of Object.entries(localData.nudgeInteractions)) {
            const remoteNudge = remoteData.nudgeInteractions[variantId];
            if (!remoteNudge || (localNudge.lastUpdatedTs ?? -1) > (remoteNudge.lastUpdatedTs ?? -1)) {
              this.dirtyVariantIds.add(variantId);
            }
          }
          this.pushData();
        }
      } else if (remoteData) {
        this.data = remoteData;
        this.initializedSuccessfully = true;
        this.saveToLocalStorage();
      } else if (localData) {
        this.data = localData;
        this.initializedSuccessfully = true;
      }
    }
    async pushData(options) {
      const endUser = getSDK()._.user;
      if (!endUser || !this.initializedSuccessfully) {
        return;
      }
      this.saveToLocalStorage();
      if (this.dirtyVariantIds.size === 0) {
        return;
      }
      if (options?.immediate) {
        this.debouncedNetworkPush.cancel();
        await this.networkPush();
      } else {
        this.debouncedNetworkPush();
      }
    }
    async networkPush() {
      const sdk = getSDK();
      const endUser = sdk._.user;
      const eus = sdk._.endUserStore;
      if (!endUser || eus.dirtyVariantIds.size === 0) {
        return;
      }
      const pushedVariantIds = new Set(eus.dirtyVariantIds);
      const dirtyInteractions = {};
      for (const variantId of pushedVariantIds) {
        if (eus.data.nudgeInteractions[variantId]) {
          dirtyInteractions[variantId] = eus.data.nudgeInteractions[variantId];
        }
      }
      if (Object.keys(dirtyInteractions).length === 0) {
        for (const id of pushedVariantIds) {
          eus.dirtyVariantIds.delete(id);
        }
        return;
      }
      const payload = { nudgeInteractions: dirtyInteractions };
      const validData = decodeThrowing(EndUserStoreDataV, payload);
      const { apiKey } = sdk[_configuration];
      const userJsonBase64 = jsonBase64Encoder(endUser);
      try {
        await post("/sdk/v1/state", validData, {
          headers: {
            Authorization: `Api-Key ${apiKey}`,
            "X-Amp-User": userJsonBase64
          }
        });
        for (const id of pushedVariantIds) {
          eus.dirtyVariantIds.delete(id);
        }
      } catch (e2) {
        logger.error("Failed to push data to remote end user store", { error: e2 });
      }
    }
  };
  var NullEndUserStore = class {
    data;
    initializedSuccessfully;
    dirtyVariantIds;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = true;
      this.dirtyVariantIds = /* @__PURE__ */ new Set();
    }
    reset() {
    }
    async fetchData() {
    }
    async pushData() {
    }
  };
  var LocalStorageTestEndUserStore = class {
    data;
    initializedSuccessfully;
    dirtyVariantIds;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = false;
      this.dirtyVariantIds = /* @__PURE__ */ new Set();
    }
    reset() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = true;
      this.dirtyVariantIds = /* @__PURE__ */ new Set();
    }
    getEUSKey() {
      const user = getSDK()._.user;
      if (user?.user_id) {
        return `eus.user_id:${user?.user_id}`;
      } else if (user?.device_id) {
        return `eus.device_id:${user?.device_id}`;
      } else {
        throw new Error("No user ID or device ID were provided to the EUS");
      }
    }
    async fetchData() {
      const data = JSON.parse(LocalStorage_default.get(this.getEUSKey(), JSON.stringify(emptyEndUserStoreData())));
      this.data = decodeThrowing(EndUserStoreDataV, data);
      this.initializedSuccessfully = true;
    }
    async pushData() {
      if (!this.initializedSuccessfully) return;
      LocalStorage_default.set(this.getEUSKey(), JSON.stringify(this.data));
    }
  };

  // ../shared/src/store/global-actions.ts
  var global_actions_exports = {};
  __export(global_actions_exports, {
    activatePushExperience: () => activatePushExperience,
    addCallbacks: () => addCallbacks,
    executeAction: () => executeAction,
    initEffectsSequencer: () => initEffectsSequencer,
    publishAnalyticsEventToMessageBus: () => publishAnalyticsEventToMessageBus,
    removeCallback: () => removeCallback,
    setOrganization: () => setOrganization,
    setSessionProperties: () => setSessionProperties,
    setTheme: () => setTheme,
    setThemeMode: () => setThemeMode
  });
  var import_isEqual = __toESM(require_isEqual());

  // ../shared/src/products/nudges/service-actions.ts
  var service_actions_exports = {};
  __export(service_actions_exports, {
    closeAllNudgeMocks: () => closeAllNudgeMocks,
    forceTriggerSingleNudge: () => forceTriggerSingleNudge,
    getDebugSnapshot: () => getDebugSnapshot,
    getDebugSnapshotForHeadless: () => getDebugSnapshotForHeadless,
    getDebuggedNudge: () => getDebuggedNudge,
    initNudges: () => initNudges,
    resetNudge: () => resetNudge,
    resetTimedTriggers: () => resetTimedTriggers,
    restartDebugSession: () => restartDebugSession,
    restorePreviewSession: () => restorePreviewSession,
    sendConstantTriggers: () => sendConstantTriggers,
    sendDirectedTrigger: () => sendDirectedTrigger,
    sendIndirectTrigger: () => sendIndirectTrigger,
    setupTimedTriggers: () => setupTimedTriggers,
    showStepMock: () => showStepMock,
    shutdownNudges: () => shutdownNudges,
    startDebugSession: () => startDebugSession,
    stopDebugSession: () => stopDebugSession,
    updateNudgeStepForPreview: () => updateNudgeStepForPreview
  });

  // ../shared/src/products/nudges/store/effectsSequencer.ts
  var t11 = __toESM(require_lib());

  // ../shared/src/internal/util/SessionStorage.ts
  var PREFIX3 = "amplitude.engagement";
  var set2 = (label, value) => {
    try {
      sessionStorage.setItem(`${PREFIX3}.${label}`, value.toString());
      return value;
    } catch (err) {
      return "";
    }
  };
  var get4 = (label, defaultValue, prefixOverride) => {
    let value;
    const prefix = prefixOverride ?? PREFIX3;
    try {
      value = sessionStorage.getItem(`${prefix}.${label}`);
    } catch (err) {
      value = null;
    }
    if (value === null) {
      return defaultValue;
    } else {
      if (value === "false") return false;
      if (value === "true") return true;
      if (+value) return +value;
      return value;
    }
  };
  var remove2 = (label) => {
    try {
      sessionStorage.removeItem(`${PREFIX3}.${label}`);
      return;
    } catch (err) {
      return;
    }
  };
  var SessionStorage = {
    set: set2,
    get: get4,
    remove: remove2
  };
  var SessionStorage_default = SessionStorage;

  // ../shared/src/util/Interpolate.ts
  var import_get2 = __toESM(require_get());

  // ../shared/src/util/Errors.ts
  var InternalError = class extends Error {
    constructor(message) {
      super(message);
      this.name = "InternalError";
    }
  };

  // ../shared/src/util/Interpolate.ts
  var ENGAGEMENT_CONTEXT_REFERENCE_REGEXP_INTERPOLATE = new RegExp(/{{(?:property).([^{{]+)}}+/g);
  var extractValue = (object, key, throwErrorIfUndefined) => {
    if (object === void 0 || object === null) {
      return void 0;
    }
    switch (typeof object) {
      case "string":
      case "number":
        return object;
      case "object":
        if (Array.isArray(object)) {
          return object.toString();
        }
        if (key) {
          const toRet = (0, import_get2.default)(object, key);
          if (toRet === void 0 && throwErrorIfUndefined) {
            throw new InternalError(`Cannot interpolate ${key}`);
          }
          return toRet;
        }
        return "";
    }
  };
  var replaceInString = (str, re, fn) => {
    if (str === "") {
      return [""];
    }
    const result = str.split(re);
    for (let i2 = 1, length = result.length; i2 < length; i2 += 2) {
      result[i2] = fn(result[i2]);
    }
    return result;
  };
  var interpolateUserProperties = (inputString, _, throwErrorIfUndefined) => {
    let returnValue = inputString;
    returnValue = returnValue.replace(/{{property.user_id}}/g, _.user?.user_id ?? "");
    returnValue = returnValue.replace(/{{property.device_id}}/g, _.user?.device_id ?? "");
    if (returnValue.includes("{{property")) {
      returnValue = replaceInString(returnValue, ENGAGEMENT_CONTEXT_REFERENCE_REGEXP_INTERPOLATE, (match) => {
        const [contextKey, fallback] = match.replace(/\s*\|\s*/g, "|").split("|");
        const contextValue = extractValue(
          _.user?.user_properties,
          contextKey || match,
          // Throw an error only if there is no fallback
          !fallback && throwErrorIfUndefined
        );
        return extractValue(contextValue, "value", throwErrorIfUndefined) ?? fallback;
      }).join("");
    }
    return returnValue;
  };
  var interpolateUserPropertiesDeep = (obj, store, throwErrorIfUndefined) => {
    if (typeof obj === "string") {
      return interpolateUserProperties(obj, store, throwErrorIfUndefined);
    }
    if (Array.isArray(obj)) {
      const result = [];
      for (const item of obj) {
        result.push(interpolateUserPropertiesDeep(item, store, throwErrorIfUndefined));
      }
      return result;
    }
    if (obj && typeof obj === "object") {
      const result = {};
      for (const key of Reflect.ownKeys(obj)) {
        result[key] = interpolateUserPropertiesDeep(obj[key], store, throwErrorIfUndefined);
      }
      return result;
    }
    return obj;
  };

  // ../shared/src/store/executables/executable-actions.ts
  var clickExecutable = (_, action) => {
    const value = interpolateUserProperties(action.value, _, true);
    const success2 = _.services.clickElement(value);
    if (!success2) {
      throw new InternalError(`Cannot find element to click: [${value}]`);
    }
  };
  var executeAction = (_, action, executionEventSource, forceOpenLinkInNewTab, e2) => {
    switch (action?.type) {
      case "click": {
        clickExecutable(_, action);
        break;
      }
      case "link":
        if (_.isEditorPreview) {
          const _url = interpolateUserProperties(action.value, _, true);
          _.callbacks["engagement-router"](_url);
          return;
        }
        _.services.linkExecutable(_, action, forceOpenLinkInNewTab);
        break;
      case "open_chat":
        if (_.isEditorPreview) {
          const upperCase = `${action?.meta?.type.charAt(0).toUpperCase()}${action?.meta?.type.slice(1)}`;
          _.callbacks["__standalone-editor-cb_hh_cta"](upperCase);
        } else {
          _.services.openChatExecutable(_, action);
        }
        break;
      case "nudge": {
        const nudge = getNudgeById(_, action.value);
        if (nudge) {
          const x = e2?.clientX;
          const y2 = e2?.clientY;
          const startingPosition = x && y2 ? [x, y2] : void 0;
          activatePushExperience(_, nudge, {
            type: "nudge",
            id: executionEventSource,
            position: startingPosition
          });
        }
        break;
      }
      case "callback": {
        const callback = _.callbacks[action.value];
        if (!callback) {
          throw new InternalError(`Callback is not available: [${action.value}]`);
        }
        callback();
        break;
      }
      case "document": {
        _.services.showResourceCenter(_, true);
        _.services.setCurrentContentId(_, action.value);
        break;
      }
      case "video": {
        _.services.setCurrentContentId(_, action.value);
        break;
      }
      case "app_review": {
        _.services.appReviewExecutable(_, action);
        break;
      }
      case "open_resource_center": {
        _.services.setCurrentContentId(_, null);
        _.services.showResourceCenter(_, true, { initialPage: "help-hub" });
        break;
      }
      case "open_ai_assistant": {
        _.services.showResourceCenter(_, true, { initialPage: "assistant" });
        break;
      }
    }
  };

  // ../shared/src/products/nudges/store/effectsSequencer.ts
  var EFFECTS_SEQUENCER_ID = "EffectsSequencer";
  var RETRY_INTERVAL = 250;
  var RETRY_TIMEOUT = 5e3;
  var SEQUENCE_EXPIRATION_TIME = 6e4;
  var SEQUENCE_STORAGE_KEY = "effects_sequencer_sequence";
  var PersistedActionSequenceV = t11.type({
    effects: t11.array(EffectfulActionV),
    source: t11.type({
      variantId: t11.number
    }),
    expiresAt: t11.number,
    sessionKey: t11.string
  });
  var clearSavedSequence = () => {
    SessionStorage_default.remove(SEQUENCE_STORAGE_KEY);
  };
  var EffectsSequencerMachine = (globalStore) => {
    const hasEffects = ({ event }) => event.effects.length > 0;
    const hasEffectToExecute = ({ context }) => !!context.effects.at(context.currentEffectIndex);
    const getLinkSequenceStrategy = ({ context }) => {
      const effect = context.effects.at(context.currentEffectIndex);
      const hasRemainingEffects = context.currentEffectIndex < context.effects.length - 1;
      if (!hasRemainingEffects || effect?.type !== "link") return "continue";
      if (__GS_PLATFORM__ === "web" && effect.operation === "self") return "persist";
      if (__GS_PLATFORM__ !== "web" && effect.operation !== "router") return "terminate";
      return "continue";
    };
    const shouldPersist = (args) => getLinkSequenceStrategy(args) === "persist";
    const shouldTerminateSequence = (args) => getLinkSequenceStrategy(args) === "terminate";
    const isRetryable2 = ({ context }) => context.effects.at(context.currentEffectIndex)?.type === "click";
    const saveSequence = ({ context }) => {
      if (!context.source) {
        return;
      }
      const sessionKey = String(getEffectiveSessionStart(globalStore));
      const remainingEffects = context.effects.slice(context.currentEffectIndex + 1);
      const sequence = PersistedActionSequenceV.encode({
        effects: remainingEffects,
        source: context.source,
        expiresAt: Date.now() + SEQUENCE_EXPIRATION_TIME,
        sessionKey
      });
      SessionStorage_default.set(SEQUENCE_STORAGE_KEY, JSON.stringify(sequence));
    };
    return setup({
      types: {},
      actions: {
        loadSequence: enqueueActions(({ enqueue }) => {
          const sequence = SessionStorage_default.get(SEQUENCE_STORAGE_KEY, false);
          if (typeof sequence !== "string") {
            return;
          }
          let parsed;
          try {
            parsed = JSON.parse(sequence);
          } catch {
            logger.error("Malformed sequence in sessionStorage, clearing");
            clearSavedSequence();
            return;
          }
          const parsedSequence = PersistedActionSequenceV.decode(parsed);
          if (parsedSequence._tag === "Left") {
            logger.error("Invalid sequence stored in sessionStorage", parsedSequence);
            clearSavedSequence();
            return;
          }
          const sessionKey = String(getEffectiveSessionStart(globalStore));
          if (parsedSequence.right.sessionKey !== sessionKey) {
            clearSavedSequence();
            return;
          }
          if (parsedSequence.right.expiresAt < Date.now()) {
            clearSavedSequence();
            return;
          }
          enqueue.raise({
            type: "RUN",
            ...parsedSequence.right
          });
        }),
        clearSavedSequence,
        saveSequence,
        assignSequence: assign({
          effects: ({ event }) => event.effects,
          source: ({ event }) => event.source,
          currentEffectIndex: 0
        }),
        advanceEffect: assign({
          currentEffectIndex: ({ context }) => context.currentEffectIndex + 1
        }),
        clearSequence: assign({
          effects: [],
          currentEffectIndex: 0,
          source: null
        })
      },
      actors: {
        executeEffect: fromPromise(async ({ input }) => {
          if (!input.source) {
            throw new Error("No execution event source");
          }
          if (!input.effect) {
            throw new Error("No effect to execute");
          }
          executeAction(globalStore, input.effect, input.source.variantId);
        })
      },
      guards: { hasEffects, hasEffectToExecute, shouldPersist, shouldTerminateSequence, isRetryable: isRetryable2 },
      delays: { RETRY_INTERVAL, RETRY_TIMEOUT }
    }).createMachine({
      /** @xstate-layout N4IgpgJg5mDOIC5QFEBmqwGMAusDKYAjgK5gB2mYATgHQCSEANmAMQBKAqgHIDaADAF1EoAA4B7WAEtsksWWEgAHogC0ANgAcGmgCYALAFYNAdh0BGDWYNq1xgDQgAnoisBOGmeN81Ovq7Wueq4AzJ4AvmEOaBg4+ESkFNQ0BCTkmJJkUOzc-EJIIOJSMnIKyggqesF6NMFqVmp+da4G-g7OCME62nx6JgZ6enyeFgMRUehYuCkJlLTTaRlQNADCABZYANaL0ZMsuQqF0rLy+WVmVsE0lq7GwTdm+l16bS6+NHzBxiGufBr9Gq5AmMQDtYvNEnN4gtMit1pgtplQdg9mY8qIJEcSqcXLU+B5jACgsYGgYLDoXggzJV3lTep5SV0qsFgUi4qkIckoRRFjRkIosMQZJkWIpYNgAIbYMA0cWoKVUAAUbGQABU2ABNAD6KroAFlkAB5DgqgCULFZ4NmnPZ6RhfIFQqg+3yh2KJ1AZQGeM8Nj4vzUelp3gpDTxpJ+IV6AVqzMiIImYK5VstPPtmEFPIAgtgpQBbESOlgQOTSjIANzEG2lFqTSRTdv56cdNGzeYLiwQ5bEmElx1yzvRRWOpUQRjMNFMOjuQQM1hawQpxnOV28GmCGnMZiqNxZCamtchNtTjYzMNbYHzheoVDEtBEjElqFvud5e7ZMzrSePDqzOYv7cyTsyArHs3X7QQDgxN0R0pP0DBoWcNDUAw-B0JdDFcClXC3XQBh+Dc+B0AxggMXcYn3G1PyPBsfzPP9L0WFhr1vGh70fZ9X3I980iomZvybX820dICQN7OR+1RSChyxD0XD9bQDAJKwrB0H4lzUCkzD4YxqgMHQ1E6PhiOsLc1DIyZuI5esljTU8lgAdXFI5MhVMQ2DAbAqEcEUxUlaVZXlJVVQ1TU6C4FVkDYAA1TMABkzRrSjDz4miBJhRznKgVz3M8xwBwKKDh2xSlKnguo-g3foqkDDSnEQJc8Q0Vc9FMO5ASCczEyS60UqWTMIDLcVuWFfLXSK2SED4Ck+E6iiP2S6E+oGobbSyHhJJdQqZKURAprqybZss5Mv1SuyADEMnFRgkSLEsaC7KtOIsy1eMW3kT0dC6yCupERO7MSyHAtECuk90doQb4JyGTQUNcLofA0TS9B0XQAxaxTiSnKNDpehbhpsj7Fi+n69yYqgbzvB9sCfKgX0S+aere2zPsu669z+0C+0EUatrBsoum0KkA3MIw0P0hd9q6YwaBCWoBjMBoNF6YwIjjMgxAgOAFHpniqCkzE+dULR3D8EjglqLdjYl9oKj9GggkBb5ZyM-ocYPegmDAfXoOKlQlfHU3iIt9cAWt1QA10FC-R8KP12Rt3uus73xvBipEf2lQfXeP0hk+NDFNGOMdask6ljWTZtj3ZPtrOX4FKDj5zDuRTMIzgZs79c4Hk+bDjFIou31xxn8fe2ioGrw2IYVq4ugeIx-FMJWKVJeuAh6Ho4ZQjQE4Z6zR7Svr6IA8fNtBmD-GqDdLCIgFbCeEMvHeawledgkMJ33Xh9W-e7JoDLHWyh5LyE8YKmTDLUawQwtC2GRhSLQ2gghBCpDcHoekdAfxLtRJag18YgOKtPHwiCFY6SnIEGwmlCKXEIgZIYVJ9K-D0Bg46WCf4s2+mzcieCJoEgUsSZC64hhzlqu0IieJfREThqbCwZgmGvRHpmAA7k5R0XBxRlkkFAAGXDwadGlr4Mw-gWg6H0BYAwWETa0iXA8cW65XCqzCEAA */
      id: EFFECTS_SEQUENCER_ID,
      exit: ["clearSavedSequence"],
      description: "Executes a sequence of CTA button effects (clicks, links, nudge opens) one at a time. On web, persists remaining effects to sessionStorage when a same-page navigation is about to occur and resumes on the next page load. On mobile, terminates the sequence when a non-router link navigates out of the app context.",
      context: {
        effects: [],
        currentEffectIndex: 0,
        source: null
      },
      initial: "Idle",
      states: {
        Idle: {
          description: "Waiting for a RUN event. On entry, attempts to restore a persisted sequence from sessionStorage (e.g. after a same-page navigation).",
          entry: ["loadSequence", "clearSequence"],
          on: {
            RUN: {
              target: "Sequencing",
              guard: "hasEffects",
              actions: ["assignSequence"]
            }
          }
        },
        Sequencing: {
          description: "Actively processing a chain of effects one at a time.",
          on: {
            RUN: {
              description: "Interrupts the current sequence and restarts with a new set of effects.",
              target: "Sequencing",
              guard: "hasEffects",
              actions: ["assignSequence"],
              reenter: true
            }
          },
          initial: "CheckingEffect",
          states: {
            CheckingEffect: {
              description: "Routes the current effect: if it will cause same-page navigation, persists remaining effects and goes to ExecutingFinalEffect; on mobile, non-router links terminate the sequence after execution; otherwise proceeds to standard Executing.",
              always: [
                {
                  target: "ExecutingFinalEffect",
                  guard: "shouldPersist",
                  actions: ["saveSequence"]
                },
                {
                  target: "ExecutingFinalEffect",
                  guard: "shouldTerminateSequence"
                },
                "Executing"
              ]
            },
            Executing: {
              description: "Runs the current effect with retry support for click-type effects. A global RETRY_TIMEOUT caps total retry duration before advancing.",
              initial: "Attempting",
              after: {
                RETRY_TIMEOUT: {
                  description: "Safety net: if retries exceed the timeout, skip this effect and advance.",
                  target: "Advancing"
                }
              },
              states: {
                Attempting: {
                  description: "Invokes a single execution attempt of the current effect.",
                  invoke: {
                    src: "executeEffect",
                    input: ({ context }) => ({
                      effect: context.effects.at(context.currentEffectIndex),
                      source: context.source ? { variantId: context.source.variantId } : void 0
                    }),
                    onDone: {
                      target: "#Advancing"
                    },
                    onError: [
                      {
                        target: "WaitingToRetry",
                        guard: "isRetryable"
                      },
                      {
                        target: "#Advancing"
                      }
                    ]
                  }
                },
                WaitingToRetry: {
                  description: "Pauses before re-attempting a failed click effect.",
                  after: {
                    RETRY_INTERVAL: {
                      target: "Attempting",
                      reenter: true
                    }
                  }
                }
              }
            },
            Advancing: {
              description: "Increments the effect index. If more effects remain, loops back to CheckingEffect; otherwise returns to Idle and clears state.",
              id: "Advancing",
              entry: ["advanceEffect"],
              always: [
                {
                  target: "CheckingEffect",
                  guard: "hasEffectToExecute"
                },
                {
                  target: "#EffectsSequencer.Idle",
                  actions: ["clearSequence", "clearSavedSequence"],
                  reenter: true
                }
              ]
            },
            ExecutingFinalEffect: {
              description: "Executes a link effect that ends the sequence. On web, this is a self-link with remaining effects persisted to sessionStorage. On mobile, this is a non-router link that terminates the sequence since navigation leaves the app context.",
              invoke: {
                src: "executeEffect",
                input: ({ context }) => ({
                  effect: context.effects.at(context.currentEffectIndex),
                  source: context.source ? { variantId: context.source.variantId } : void 0
                }),
                onDone: "AwaitingNavigation",
                onError: {
                  target: "#Advancing",
                  actions: ["clearSavedSequence"]
                }
              }
            },
            AwaitingNavigation: {
              description: "Terminal state \u2014 navigation is taking the user away from the current context. On web, the sequence will resume from Idle on the next page load via persisted sessionStorage data. On mobile, the sequence ends here.",
              type: "final"
            }
          }
        }
      }
    });
  };

  // ../shared/src/store/global-actions.ts
  var addCallbacks = (_, callbacks) => {
    const callbacksAfterAdd = { ..._.callbacks, ...callbacks };
    if ((0, import_isEqual.default)(_.callbacks, callbacksAfterAdd)) return;
    _.callbacks = callbacksAfterAdd;
  };
  var removeCallback = (_, toRemove) => {
    if (!(toRemove in _.callbacks)) return;
    delete _.callbacks[toRemove];
  };
  var setSessionProperties = (_, sessionProperties) => {
    const sessionPropertiesToSet = { ..._.sessionProperties, ...sessionProperties };
    if ((0, import_isEqual.default)(_.sessionProperties, sessionPropertiesToSet)) return;
    _.sessionProperties = sessionPropertiesToSet;
  };
  var setTheme = (_, theme) => {
    _.theme = theme;
  };
  var setThemeMode = (_, mode) => {
    if (["lightMode", "darkMode", "auto"].includes(mode)) _.themeMode = mode;
  };
  var setOrganization = (_, organization) => {
    _.organization = organization;
  };
  var initEffectsSequencer = (_) => {
    const machine = EffectsSequencerMachine(_);
    _.effectsSequencer = ref(createActor(machine, { id: EFFECTS_SEQUENCER_ID }));
    _.effectsSequencer.start();
  };
  var publishAnalyticsEventToMessageBus = (_, event_type, event_properties) => {
    event_properties = event_properties || {};
    _.messageBus.publish("analytics_event", { event_type, event_properties });
  };
  var activatePushExperience = (_, experience, source) => {
    if (isChecklistNudge(experience)) {
      updateEndUserStore(_.endUserStore, {
        [experience.variantId]: { isChecklistExpanded: true }
      });
    }
    forceTriggerSingleNudge(_, experience, {
      source,
      overrides: {
        // allow admins to trigger nudge outside simulate mode
        admin: true,
        // don't check audience conditions
        audience: true,
        // don't check frequency
        cooldown: true,
        // don't check that conditions have changed since last trigger
        flip: true,
        // don't check global limit
        customThrottles: true,
        // always start tours at first step even if they've been seen before
        stepIndex: 0,
        builtInThrottles: true,
        closeBlockingNudges: true,
        excludeNudgeIds: []
      }
    });
  };

  // ../shared/src/services/end-users/decide.ts
  var decide = async (apiKey, user, isEditorPreview) => {
    if (isEditorPreview) {
      return {};
    }
    const userJsonBase64 = jsonBase64Encoder(user);
    const result = await get3(`/sdk/v1/decide`, {
      headers: {
        Authorization: `Api-Key ${apiKey}`,
        "X-Amp-User": userJsonBase64
      }
    });
    return result.data;
  };
  var decide_default = {
    decide
  };

  // ../shared/src/internal/middleware/helpers/pushTrigger.ts
  var generateTriggerableEntityId = (triggerableEntity) => `nudge-${triggerableEntity.variantId}`;

  // ../shared/src/store/util/hasOp.ts
  var import_isEqual2 = __toESM(require_isEqual());
  var hasOp = (opType, path, ops) => {
    return ops.some((op) => op[0] === opType && (0, import_isEqual2.default)(op[1], path));
  };
  var hasSetOp = hasOp.bind(null, "set");
  var hasMatchingOp = (dependencies, ops) => dependencies === "*" || ops.some(
    ([_, updatePath]) => dependencies.some((dep) => {
      const len = Math.min(dep.length, updatePath.length);
      for (let i2 = 0; i2 < len; i2++) {
        if (dep[i2] !== "*" && dep[i2] !== updatePath[i2]) {
          return false;
        }
      }
      return true;
    })
  );

  // ../shared/src/store/util/sub.ts
  var sub = (state, action, dependencies, async = true) => {
    const log2 = LocalStorage_default.get("logChanges", false);
    return subscribe(
      state,
      (ops) => {
        if (hasMatchingOp(dependencies, ops)) {
          if (log2) console.log("subscription triggered: ", action.name, ops);
          action(state, ops);
        }
      },
      !async
    );
  };

  // ../shared/src/store/preview-session-storage-manager.ts
  var PREVIEW_SESSION_KEY = "previewSession";
  var savePreviewSession = (state) => {
    try {
      SessionStorage_default.set(PREVIEW_SESSION_KEY, JSON.stringify(state));
    } catch (e2) {
      logger.error("Error saving preview session state:", e2);
    }
  };
  var getStoredPreviewSession = () => {
    try {
      const stored = SessionStorage_default.get(PREVIEW_SESSION_KEY, "");
      if (stored && typeof stored === "string" && stored !== "") {
        return JSON.parse(stored);
      }
    } catch (e2) {
      logger.error("Error parsing stored preview session state:", e2);
    }
    return null;
  };
  var clearPreviewSession = () => {
    try {
      SessionStorage_default.remove(PREVIEW_SESSION_KEY);
    } catch (e2) {
      logger.error("Error clearing preview session state:", e2);
    }
  };
  var getUrlDebugVariantId = () => {
    try {
      if (typeof window !== "undefined" && window.location) {
        const search = window.location.search;
        const match = search.match(/[?&]gs-debug-id=(\d+)/);
        if (match && match[1]) {
          const variantId = Number(match[1]);
          if (!isNaN(variantId)) {
            return variantId;
          }
        }
      }
    } catch (e2) {
    }
    return null;
  };
  var getPendingPreviewVariantId = (_) => {
    if (getDebuggedNudge(_)) {
      return null;
    }
    const storedSession = getStoredPreviewSession();
    if (storedSession) {
      return storedSession.variantId;
    }
    return getUrlDebugVariantId();
  };

  // ../shared/src/store/util/logChanges.ts
  var i = 0;
  var logChanges = (ops) => {
    console.group(`state change [${i++}]`);
    ops.forEach((op) => {
      console.log(`${op[0]} ${op[1].join(".")}`);
    });
    console.groupEnd();
  };

  // ../shared/src/products/nudges/store/smartActions.ts
  var triggerSmartNudge = (_, triggerEvent) => {
    const debuggedNudge = getDebuggedNudge(_);
    if (debuggedNudge) {
      sendDirectedTrigger(_, debuggedNudge, triggerEvent);
    } else if (!_.activeChecklist) {
      sendIndirectTrigger(_, triggerEvent);
    }
  };

  // ../shared/src/services/analytics/track.ts
  var import_dayjs = __toESM(require_dayjs_min());

  // ../shared/src/services/analytics/types.ts
  var guideSpecificEvents = {
    tooltipMarkerViewed: "[Guides-Surveys] Guide Tooltip Icon Viewed"
  };
  var surveySpecificEvents = {
    surveySubmitted: "[Guides-Surveys] Survey Submitted",
    surveyAbandoned: "[Guides-Surveys] Survey Abandoned"
  };
  var getEventNameCreator = (nudge) => (type11) => {
    const productName = isSurvey(nudge) ? "Survey" : "Guide";
    const events = {
      viewed: `[Guides-Surveys] ${productName} Viewed`,
      dismissed: `[Guides-Surveys] ${productName} Dismissed`,
      completed: `[Guides-Surveys] ${productName} Completed`,
      rageClosed: `[Guides-Surveys] ${productName} Rage Closed`,
      stepCompleted: `[Guides-Surveys] ${productName} Step Completed`,
      snoozed: `[Guides-Surveys] ${productName} Snoozed`,
      engaged: `[Guides-Surveys] ${productName} Engaged`,
      pinTargetNotFound: "[Guides-Surveys] Error: Pin Target Not Found",
      ...guideSpecificEvents,
      ...surveySpecificEvents
    };
    return events[type11];
  };

  // ../shared/src/services/analytics/track.ts
  var getClient = () => {
    const sdk = getSDK();
    return sdk?.[_analytics];
  };
  var getEmojiOrStringValue = (response) => {
    if (response?.type === "number") {
      return response.stringResponse;
    } else if (response?.type === "string") {
      return Array.isArray(response.stringResponse) ? response.stringResponse.join(", ") : response.stringResponse;
    }
    return null;
  };
  var Track = {
    resourceCenter: {
      /**
       * Fired whenever Resource Center is opened.
       * TODO: Add source property once we have a proper way to plumb it through
       */
      opened: () => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Opened", {});
      },
      /**
       * Fired whenever Resource Center is closed.
       */
      closed: () => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Closed", {});
      },
      /**
       * Fired whenever a piece of content is viewed in Resource Center.
       * @param title The title of the article
       * @param url The URL of the article
       * @param sourceKey The source key of the article (if available)
       */
      articleViewed: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Article Viewed", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever the link to a document in Resource Center is copied.
       * @param title The title of the article
       * @param url The URL of the article
       * @param sourceKey The source key of the article (if available)
       */
      articleLinkCopied: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Article Link Copied", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a link in a piece of content is clicked.
       * @param title The title of the article
       * @param url The URL of the article
       * @param sourceKey The source key of the article (if available)
       * @param destination The destination URL of the link
       */
      articleLinkClicked: (title, url, sourceKey, destination) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Article Link Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          ["[Guides-Surveys] Destination" /* Destination */]: destination
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a piece of content is scrolled.
       * @param title The title of the article
       * @param url The URL of the article
       * @param sourceKey The source key of the article (if available)
       */
      articleScrolled: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Article Scrolled", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a video is viewed within the Resource Center.
       * @param title The title of the article
       * @param url The URL of the article/video
       * @param sourceKey The source key of the article (if available)
       */
      videoViewed: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Video Viewed", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever the play button of a video is clicked.
       * @param title The title of the article
       * @param url The URL of the article/video
       * @param sourceKey The source key of the article (if available)
       */
      videoPlayed: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Video Played", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever the pause button of a video is clicked.
       * @param title The title of the article
       * @param url The URL of the article/video
       * @param sourceKey The source key of the article (if available)
       */
      videoPaused: (title, url, sourceKey) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Video Paused", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a video is closed or stopped within the Resource Center.
       * @param title The title of the article
       * @param url The URL of the article/video
       * @param sourceKey The source key of the article (if available)
       * @param duration The duration in milliseconds that the video was viewed
       */
      videoClosed: (title, url, sourceKey, duration) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Video Closed", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          ["[Guides-Surveys] Duration" /* Duration */]: duration
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a piece of content is closed or navigated away from.
       * @param title The title of the article
       * @param url The URL of the article
       * @param sourceKey The source key of the article (if available)
       * @param duration The duration in milliseconds that the article was viewed
       */
      articleClosed: (title, url, sourceKey, duration) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Article Closed", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          ["[Guides-Surveys] Duration" /* Duration */]: duration
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a search is executed in Resource Center.
       * @param inputText The search query text
       * @param resultsCount The number of search results
       */
      searchExecuted: (inputText, resultsCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Search", {
          ["[Guides-Surveys] Input Text" /* InputText */]: inputText,
          ["[Guides-Surveys] Results Count" /* ResultsCount */]: resultsCount ?? 0
          // TODO: Add source property once we have a proper way to plumb it through
        });
      },
      /**
       * Fired whenever a search result is clicked in Resource Center.
       * @param title The title of the clicked result
       * @param excerpt The excerpt of the clicked result
       * @param type The type of the clicked result (e.g., 'document', 'video', 'resource', 'nudge')
       * @param id The ID of the clicked result
       * @param sourceKey The source key of the clicked result (if available)
       * @param position The position of the clicked result in the list
       */
      resultClicked: (title, excerpt, type11, id, sourceKey, position2) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Result Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Excerpt" /* Excerpt */]: excerpt,
          ["[Guides-Surveys] Type" /* Type */]: type11,
          ["[Guides-Surveys] Key" /* Key */]: null,
          // Content Item ID is not tracked
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position2
        });
      },
      /**
       * Fired whenever a recommendation set is shown in Resource Center.
       * @param title The title of the recommendation set
       * @param key The key of the recommendation set
       * @param isDefault Whether the recommendation set is the default set
       */
      recommendationSetShown: (title, key, isDefault) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Recommendation Set Shown", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Key" /* Key */]: key,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Is Default" /* IsDefault */]: isDefault
        });
      },
      /**
       * Fired whenever an item in a recommendation set is clicked in Resource Center.
       * @param title The title of the clicked recommendation
       * @param type The type of the clicked recommendation (e.g., 'document', 'video', 'link', 'nudge')
       * @param url The URL of the clicked recommendation (if available)
       * @param key The key of the clicked recommendation (if available)
       * @param sourceKey The source key of the clicked recommendation (if available)
       * @param position The position of the clicked recommendation in the list
       * @param recommendationSetKey The key of the recommendation set that contains the clicked recommendation
       * @param isDefault Whether the recommendation set is the default set
       * @param isAutopilot Whether the recommendation is an autopilot recommendation
       */
      recommendationClicked: (title, type11, url, key, sourceKey, position2, recommendationSetKey, isDefault, isAutopilot) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Recommendation Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Type" /* Type */]: type11,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Key" /* Key */]: key,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position2,
          ["[Guides-Surveys] Recommendation Set Key" /* RecommendationSetKey */]: recommendationSetKey,
          ["[Guides-Surveys] Is Default" /* IsDefault */]: isDefault,
          ["[Guides-Surveys] Is Autopilot" /* IsAutopilot */]: isAutopilot
        });
      },
      /**
       * Fired whenever an item in the additional resources section (quick links) is clicked in Resource Center.
       * @param title The title of the clicked quick link
       * @param type The type of the clicked quick link (e.g., 'document', 'video', 'link', 'nudge')
       * @param url The URL of the clicked quick link (if available)
       * @param key The key of the clicked quick link (if available)
       * @param sourceKey The source key of the clicked quick link (if available)
       * @param position The position of the clicked quick link in the list
       * @param isDefault Whether the quick link is in the default set
       */
      quickLinkClicked: (title, type11, url, key, sourceKey, position2, isDefault) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Quick Link Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Type" /* Type */]: type11,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Key" /* Key */]: key,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position2,
          ["[Guides-Surveys] Is Default" /* IsDefault */]: isDefault
        });
      }
    },
    nudge: {
      /**
       * Properties that will be included on all nudge events.
       */
      _getCommonProperties: (nudge, stepIndex, context) => {
        const nudgeStep = typeof stepIndex === "undefined" ? null : getNudgeStep(nudge, stepIndex);
        const isLastStep = stepIndex === nudge.steps.length - 1;
        const _ = getSDK()?._;
        return {
          ["[Guides-Surveys] Title" /* Title */]: nudge.title,
          ["[Guides-Surveys] Type" /* Type */]: nudge.type,
          ["[Guides-Surveys] Key" /* Key */]: nudge.flagKey,
          ["[Guides-Surveys] Tags" /* Tags */]: nudge.tags?.map((tag) => tag.name),
          ["[Guides-Surveys] Variant ID" /* Variant */]: nudge.variant,
          ["[Guides-Surveys] Step ID" /* StepId */]: nudgeStep?.id ?? 0,
          ["[Guides-Surveys] Step Index" /* StepIndex */]: stepIndex ?? 0,
          ["[Guides-Surveys] Step Title" /* StepTitle */]: nudgeStep?.title ?? "",
          ["[Guides-Surveys] Is Last Step" /* IsLastStep */]: isLastStep,
          ["[Guides-Surveys] Lifecycle UUID" /* LifecycleUuid */]: context?.interactionState?.activelifeCycleUuid,
          ["[Guides-Surveys] Is From Debug Mode" /* IsFromDebugMode */]: !!context?.triggerEvent?.overrides?.simulateMode,
          ["[Guides-Surveys] Is From Test Mode" /* IsFromTestMode */]: isTestNudge(_, nudge),
          ["[Guides-Surveys] App Type" /* AppType */]: nudge.platform,
          ["[Guides-Surveys] Localization Language" /* LocalizationLanguage */]: getAppliedNudgeLocale(nudge, _?.organization?.localization),
          ["[Guides-Surveys] History Version" /* HistoryVersion */]: nudge.version ?? null
        };
      },
      /**
       * Fired whenever a nudge is viewed.
       * @param nudge The nudge that was viewed.
       * @param stepIndex The step of the nudge that was viewed.
       * @param context nudge related state
       */
      viewed: (nudge, stepIndex, context) => {
        const sourceType = isSurvey(nudge) ? "survey" : "guide";
        const source = context?.triggerEvent?.source.type === "nudge" ? { ...context.triggerEvent.source, type: sourceType } : context?.triggerEvent?.source;
        getClient()?.trackEvent?.(getEventNameCreator(nudge)("viewed"), {
          ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
          ["[Guides-Surveys] Source" /* Source */]: source,
          ["[Guides-Surveys] Evaluation ID" /* EvaluationId */]: context?.evaluationId ?? null
        });
      },
      /**
       * Fired whenever nudge content is engaged.
       * @param nudge The nudge that was viewed.
       * @param stepIndex The step of the nudge that was viewed.
       * @param context nudge related state including the source of the engagement.
       */
      engaged: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(getEventNameCreator(nudge)("engaged"), {
          ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
          ["[Guides-Surveys] Engagement" /* Engagement */]: context.source
        });
      },
      /**
       * Fired whenever a nudge is viewed.
       * @param nudge The nudge that was viewed.
       * @param stepIndex The step of the nudge that was viewed.
       * @param context Metadata about nudge state
       */
      tooltipMarkerViewed: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(
          getEventNameCreator(nudge)("tooltipMarkerViewed"),
          Track.nudge._getCommonProperties(nudge, stepIndex, context)
        );
      },
      /**
       * Fired whenever a nudge is dismissed.
       * @param nudge The nudge that was dismissed.
       * @param stepIndex The step of the nudge that was dismissed.
       * @param context Metadata about nudge state
       */
      dismissed: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(
          getEventNameCreator(nudge)("dismissed"),
          Track.nudge._getCommonProperties(nudge, stepIndex, context)
        );
      },
      /**
       * Fired whenever a nudge is rage closed (dismissed<= 200ms).
       * @param nudge The nudge that was dismissed.
       * @param stepIndex The step of the nudge that was dismissed.
       * @param context Metadata about nudge state
       */
      rageClosed: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(
          getEventNameCreator(nudge)("rageClosed"),
          Track.nudge._getCommonProperties(nudge, stepIndex, context)
        );
      },
      /**
       * Fired whenever a nudge is completed.
       * @param nudge The nudge that was completed.
       * @param stepIndex The step of the nudge that was completed.
       * @param context Metadata about nudge state
       */
      completed: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(
          getEventNameCreator(nudge)("completed"),
          Track.nudge._getCommonProperties(nudge, stepIndex, context)
        );
      },
      /**
       * Fired whenever a nudge step is completed.
       * @param nudge The nudge that was completed.
       * @param stepIndex The step of the nudge that was completed.
       * @param context Metadata about nudge state and whether the event was triggered via CTA
       */
      stepCompleted: (nudge, stepIndex, context) => {
        getClient()?.trackEvent?.(getEventNameCreator(nudge)("stepCompleted"), {
          ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
          ["[Guides-Surveys] Was Completed Via CTA" /* WasCompletedViaCta */]: context?.completedViaCta
        });
      },
      /**
       * Fired whenever a nudge is snoozed.
       * @param nudge The nudge that was snoozed.
       * @param stepIndex The step of the nudge that was snoozed.
       * @param context Metadata about nudge state and The number of ms that the nudge will be snoozed for.
       */
      snoozed: (nudge, stepIndex, context) => {
        const start = (0, import_dayjs.default)();
        const end = start.add(context.duration.value ?? 0, context.duration.interval);
        getClient()?.trackEvent?.(getEventNameCreator(nudge)("snoozed"), {
          ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
          ["[Guides-Surveys] Snooze Duration" /* SnoozeDuration */]: end.diff(start)
        });
      },
      /**
       * Common function to track survey events with response data
       * @param eventName The name of the event to track
       * @param nudge The nudge that the response was submitted for
       * @param stepIndex The step of the nudge that the response was submitted for
       * @param context Metadata about nudge state and the response to the survey
       */
      _trackSurveyEvent: (eventName, nudge, stepIndex, context) => {
        const { response } = context;
        const value = response?.value;
        getClient()?.trackEvent?.(getEventNameCreator(nudge)(eventName), {
          ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
          ["[Guides-Surveys] Question UUID" /* QuestionUuid */]: response.blockId,
          ["[Guides-Surveys] Survey Response" /* SurveyResponse */]: value,
          ["[Guides-Surveys] Survey Response String" /* SurveyResponseString */]: getEmojiOrStringValue(response) ?? null,
          ["[Guides-Surveys] Survey Response Number" /* SurveyResponseNumber */]: response.type === "number" ? value : null,
          ["[Guides-Surveys] Survey Response Array" /* SurveyResponseArray */]: Array.isArray(value) ? response.type === "string" ? response.stringResponse : value : null,
          ["[Guides-Surveys] Survey Response Other" /* SurveyResponseOther */]: "otherText" in response ? response.otherText : null
        });
      },
      /**
       * Fired whenever a survey is submitted.
       * @param nudge The nudge that the survey was submitted for.
       * @param stepIndex The step of the nudge that the survey was submitted for.
       * @param context Metadata about nudge state and the response to the survey.
       */
      surveySubmitted: (nudge, stepIndex, context) => {
        Track.nudge._trackSurveyEvent("surveySubmitted", nudge, stepIndex, context);
      },
      /**
       * Fired whenever a survey is abandoned.
       * @param nudge The nudge that the survey was submitted for.
       * @param stepIndex The step of the nudge that the survey was submitted for.
       * @param context Metadata about nudge state and the response to the survey.
       */
      surveyAbandoned: (nudge, stepIndex, context) => {
        Track.nudge._trackSurveyEvent("surveyAbandoned", nudge, stepIndex, context);
      },
      internal: {
        /**
         * Fired whenever the target element cannot be found within the search timeout.
         * @param nudge The nudge that the survey was submitted for.
         * @param stepIndex The step of the nudge that the survey was submitted for.
         */
        pinTargetNotFoundError: (nudge, stepIndex, context) => {
          getClient()?.trackEvent?.(getEventNameCreator(nudge)("pinTargetNotFound"), {
            ...Track.nudge._getCommonProperties(nudge, stepIndex, context),
            internal: true
          });
        }
      }
    },
    experiment: {
      /**
       * Fired whenever a nudge is viewed that is part of an experiment.
       * @param nudge The nudge that was viewed.
       */
      exposure: (flagKey, experimentKey, variant) => {
        const eventProperties = {
          flag_key: flagKey,
          experiment_key: experimentKey,
          variant
        };
        getClient()?.trackEvent?.("$exposure", eventProperties);
      }
    },
    chat: {
      /**
       * Fired whenever a chat session is started/initialized.
       * @param sessionId The ID of the chat session
       * @param title The title of the chat session
       */
      sessionStarted: (sessionId, title) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Session Started", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Chat Session Title" /* ChatSessionTitle */]: title || null
        });
      },
      /**
       * Fired whenever a chat session is restarted.
       * @param sessionId The ID of the chat session
       * @param previousMessageCount The number of messages in the previous session
       */
      sessionRestarted: (sessionId, previousMessageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Session Restarted", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: previousMessageCount
        });
      },
      /**
       * Fired whenever a user sends a message in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message
       * @param messageLength The length of the message
       * @param messageCount The total number of messages in the session
       */
      messageSent: (sessionId, messageId, messageLength, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Message Sent", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Message Length" /* MessageLength */]: messageLength,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever the assistant responds with a message.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message
       * @param messageLength The length of the response
       * @param responseTime The time it took to generate the response (in ms)
       * @param messageCount The total number of messages in the session
       * @param hasToolCalls Whether the response includes tool calls
       * @param resolution The resolution of the response (fallback, escalation, or response)
       */
      messageReceived: (sessionId, messageId, messageLength, responseTime, messageCount, hasToolCalls, resolution) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Message Received", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Message Length" /* MessageLength */]: messageLength,
          ["[Guides-Surveys] Response Time" /* ResponseTime */]: responseTime,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount,
          ["[Guides-Surveys] Message Resolution" /* MessageResolution */]: resolution,
          "Has Tool Calls": hasToolCalls
        });
      },
      /**
       * Fired whenever feedback is submitted for a chat message.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message receiving feedback
       * @param feedbackType The type of feedback (positive, negative, or cleared)
       * @param messageCount The total number of messages in the session
       * @param reason The reason for negative feedback (if applicable)
       */
      feedbackSubmitted: (sessionId, messageId, feedbackType, messageCount, reason) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Feedback Submitted", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount,
          ["[Guides-Surveys] Feedback Type" /* FeedbackType */]: feedbackType,
          ...reason ? { ["[Guides-Surveys] Feedback Reason" /* FeedbackReason */]: reason } : {}
        });
      },
      /**
       * Fired whenever a tool call is executed in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the tool call
       * @param toolCallId The ID of the tool call
       * @param toolCallName The name of the tool being called
       * @param messageCount The total number of messages in the session
       */
      toolCallExecuted: (sessionId, messageId, toolCallId, toolCallName, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Tool Call Executed", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Tool Call ID" /* ToolCallId */]: toolCallId,
          ["[Guides-Surveys] Tool Call Name" /* ToolCallName */]: toolCallName,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever a tool call result is displayed in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the tool result
       * @param toolCallId The ID of the tool call
       * @param toolCallName The name of the tool that was called
       * @param status Whether the tool call succeeded or failed
       * @param messageCount The total number of messages in the session
       */
      toolResultDisplayed: (sessionId, messageId, toolCallId, toolCallName, status, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Tool Result Displayed", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Tool Call ID" /* ToolCallId */]: toolCallId,
          ["[Guides-Surveys] Tool Call Name" /* ToolCallName */]: toolCallName,
          ["[Guides-Surveys] Tool Result Status" /* ToolResultStatus */]: status,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever a citation is clicked in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the citation
       * @param citationId The ID of the citation that was clicked
       * @param messageCount The total number of messages in the session
       */
      citationClicked: (sessionId, messageId, citationId, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Citation Clicked", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Citation ID" /* CitationId */]: citationId,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever a launch nudge button is clicked in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the launch button
       * @param toolCallName The name of the tool that provided the nudge
       * @param messageCount The total number of messages in the session
       */
      launchNudgeClicked: (sessionId, messageId, toolCallName, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Launch Nudge Clicked", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Tool Call Name" /* ToolCallName */]: toolCallName,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever a fallback tool is triggered in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the fallback tool call
       * @param toolCallName The name of the fallback tool that was called
       * @param messageCount The total number of messages in the session
       */
      fallbackTriggered: (sessionId, messageId, toolCallName, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Fallback Triggered", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Tool Call Name" /* ToolCallName */]: toolCallName,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever an escalation tool is triggered in chat.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the message containing the escalation tool call
       * @param toolCallName The name of the escalation tool that was called
       * @param messageCount The total number of messages in the session
       */
      escalationTriggered: (sessionId, messageId, toolCallName, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Escalation Triggered", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Tool Call Name" /* ToolCallName */]: toolCallName,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      },
      /**
       * Fired whenever a response message is successfully generated without fallback tools.
       * @param sessionId The ID of the chat session
       * @param messageId The ID of the generated response message
       * @param messageLength The length of the response message
       * @param messageCount The total number of messages in the session
       */
      responseGenerated: (sessionId, messageId, messageLength, messageCount) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Chat Response Generated", {
          ["[Guides-Surveys] Session ID" /* SessionId */]: sessionId,
          ["[Guides-Surveys] Message ID" /* MessageId */]: messageId,
          ["[Guides-Surveys] Message Length" /* MessageLength */]: messageLength,
          ["[Guides-Surveys] Message Count" /* MessageCount */]: messageCount
        });
      }
    }
  };

  // ../shared/src/products/checklists/store/selectors.ts
  var getChecklistData = (_, checklist) => {
    return _.endUserStore.data.nudgeInteractions[Number(checklist.variantId)];
  };
  var isStepCompleted = (_, parent, item) => !!getChecklistData(_, parent)?.steps?.[item.id]?.completedTs;

  // ../shared/src/products/checklists/store/actions.ts
  var goalHasMatchingEvent = (goal, eventKey) => goal && goal.type === "event_tracked" && goal.event === eventKey;
  var updateChecklistStepEventGoals = (_, eventKey, properties) => {
    const activeChecklist = _.activeChecklist?.nudge;
    if (!activeChecklist) {
      return;
    }
    for (let stepIndex = 0; stepIndex < activeChecklist.steps.length; stepIndex++) {
      const step = activeChecklist.steps[stepIndex];
      if (!step.goal) continue;
      if (!goalHasMatchingEvent(step.goal, eventKey) || isStepCompleted(_, activeChecklist, step)) {
        continue;
      }
      if (step.goal.conditions) {
        const evalTarget = {
          context: { data: { event: eventKey, properties } },
          result: {}
        };
        const result = _.evalEngine.evaluateConditions(evalTarget, step.goal.conditions);
        if (!result) {
          continue;
        }
      }
      onChecklistStepComplete(_, step, stepIndex);
    }
  };
  var onChecklistStepComplete = (_, step, stepIndex, source = { completedViaCta: false }, options = { skipped: false }) => {
    if (!_.activeChecklist) {
      return;
    }
    const checklist = _.activeChecklist.nudge;
    if (!options?.skipped) {
      Track.nudge.stepCompleted(checklist, stepIndex, {
        completedViaCta: source.completedViaCta,
        interactionState: getNudgeDataFromUserStore(_, checklist.variantId)
      });
      if (source.completedViaCta) {
        Track.nudge.engaged(checklist, stepIndex, { source: { type: "cta", level: "primary" } });
      }
    }
    const allNudgesData = {
      ..._.endUserStore.data.nudgeInteractions
    };
    const thisChecklistData = allNudgesData[Number(_.activeChecklist.nudge.variantId)];
    const steps = { ...thisChecklistData?.steps };
    steps[step.id] = { completedTs: Date.now() };
    const newNudgesData = { ...allNudgesData, [Number(checklist.variantId)]: { ...thisChecklistData, steps } };
    updateEndUserStore(_.endUserStore, newNudgesData);
  };

  // ../shared/src/store/storage.ts
  var CustomStorageStore = class {
    get(key, defaultValue) {
      const apiKey = window.engagement?.[_configuration].apiKey;
      if (apiKey) {
        return LocalStorage_default.get(`${apiKey}-${key}`, defaultValue).toString();
      }
      return defaultValue;
    }
    set(key, value) {
      const apiKey = window.engagement?.[_configuration].apiKey;
      if (apiKey) {
        LocalStorage_default.set(`${apiKey}-${key}`, value);
      }
    }
    remove(key) {
      const apiKey = window.engagement?.[_configuration].apiKey;
      if (apiKey) {
        LocalStorage_default.remove(`${apiKey}-${key}`);
      }
    }
  };

  // ../shared/src/store/resource-center-storage-manager.ts
  var STORAGE_KEY = "resourceCenter";
  var PERSISTED_FIELDS = ["visible", "minimized", "scrollPosition", "query", "isAdditionalResourcesExpanded"];
  var retrieveStoredResourceCenterState = () => {
    const obj = {};
    const storage = new CustomStorageStore();
    const saved = storage.get(STORAGE_KEY, "");
    if (saved !== "") {
      try {
        const parsed = JSON.parse(saved);
        for (const key of PERSISTED_FIELDS) {
          if (parsed[key] !== void 0) {
            obj[key] = parsed[key];
          }
        }
      } catch (e2) {
        console.error(`Error parsing stored data for ${STORAGE_KEY}:`, e2);
      }
    }
    return obj;
  };
  var storeResourceCenterStateDebounced = (_, debounceDelay = 300) => {
    const storage = new CustomStorageStore();
    let debounceTimeout = null;
    const saveToStorage = () => {
      try {
        const fieldsToPersist = PERSISTED_FIELDS;
        const objectToStore = Object.fromEntries(fieldsToPersist.map((k) => [k, _.resourceCenter[k]]));
        storage.set(STORAGE_KEY, JSON.stringify(objectToStore));
      } catch (e2) {
        console.error(`Error serializing and storing data for ${STORAGE_KEY}:`, e2);
      }
    };
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }
    debounceTimeout = setTimeout(saveToStorage, debounceDelay);
  };

  // ../shared/src/internal/middleware/theme.ts
  var t12 = __toESM(require_lib());
  var ThemeModeV = t12.intersection([
    t12.type({
      varDefaults: t12.record(t12.string, t12.union([t12.string, t12.number])),
      varOverrides: t12.record(t12.string, t12.union([t12.string, t12.number])),
      componentOverrides: t12.record(t12.string, t12.any),
      mobileOverrides: t12.record(t12.string, t12.any)
    }),
    t12.partial({
      customCss: t12.string
    })
  ]);
  var ThemeV = t12.union([
    t12.type({
      lightMode: ThemeModeV,
      darkMode: ThemeModeV
    }),
    t12.null,
    t12.undefined
  ]);
  var ThemeObjectBaseV = t12.type(
    {
      id: t12.number,
      name: t12.string,
      isDefault: t12.boolean,
      theme: ThemeV
    },
    "ThemeBase"
  );
  var ProductV = t12.union([t12.literal("guides-surveys"), t12.literal("assistant")]);
  var PlatformV = t12.type({
    type: t12.union([
      t12.literal("web"),
      t12.literal("ios"),
      t12.literal("android"),
      t12.literal("react-native"),
      t12.literal("flutter"),
      t12.string
    ])
  });
  var ThemeObjectAdditionalV = t12.partial(
    {
      platform: PlatformV,
      product: ProductV
    },
    "ThemeAdditional"
  );
  var ThemeObjectV = t12.intersection([ThemeObjectBaseV, ThemeObjectAdditionalV], "Nudge");
  var defaults3 = {};
  var decode2 = (data) => {
    try {
      return decodeThrowing(ThemeObjectV, data);
    } catch (e2) {
      if (e2 instanceof Error) {
        logger.error("Error decoding theme", e2.message);
      }
      return decodeThrowing(ThemeObjectV, { ...defaults3, ...data });
    }
  };

  // ../shared/src/types/flags.ts
  var defaultFlags = {
    "enable-when-element-appears-trigger": true
  };

  // ../shared/src/types/api/resource-center.ts
  var t13 = __toESM(require_lib());
  var LauncherV = t13.intersection([
    t13.type({
      type: t13.string,
      position: t13.string,
      offsetX: t13.number,
      offsetY: t13.number,
      zIndex: t13.number
    }),
    t13.partial({
      anchorElement: t13.union([t13.string, t13.null]),
      iconSrc: t13.union([t13.string, t13.null])
    })
  ]);
  var ResourceCenterV = t13.intersection([
    t13.type({
      isAutopilotEnabled: t13.boolean,
      textStrings: t13.record(t13.string, t13.string),
      showQuickLinks: t13.boolean
    }),
    t13.partial({
      key: t13.union([t13.string, t13.null, t13.undefined]),
      mobileLauncher: t13.union([LauncherV, t13.null]),
      desktopLauncher: t13.union([LauncherV, t13.null]),
      windowPosition: t13.union([t13.string, t13.null]),
      customTheme: t13.union([t13.number, t13.null]),
      chatEnabled: t13.boolean,
      resourceCenterEnabled: t13.boolean,
      showBranding: t13.boolean
    })
  ]);
  var ResourceCenter = class {
    static decode = (data) => {
      return decodeThrowing(ResourceCenterV, data);
    };
  };

  // ../shared/src/sdk/config.ts
  function guard(meta, fn, defaultValue) {
    try {
      const result = fn();
      if (result === void 0) return defaultValue;
      return result;
    } catch (e2) {
      logger.error(`Error decoding config response (${meta.apiKey}). Using default value for '${meta.field}'`, {
        error: e2,
        field: meta.field,
        defaultValue
      });
      return defaultValue;
    }
  }
  async function fetchConfig(apiKey, isEditorPreview, isAdmin = false, locale = void 0) {
    let path = isAdmin ? `/sdk/v1/preview/config` : `/sdk/v1/config`;
    if (locale) {
      path += `?locale=${locale}`;
    }
    if (isEditorPreview) return null;
    const result = await get3(path, {
      headers: {
        Authorization: `Api-Key ${apiKey}`
      }
    });
    return result.data;
  }
  async function fetchResourceCenters(apiKey, isEditorPreview = false) {
    try {
      const path = `/sdk/v1/resource_center`;
      if (isEditorPreview) return { resourceCenters: [], themes: [] };
      const result = await get3(path, {
        headers: {
          Authorization: `Api-Key ${apiKey}`
        }
      });
      const data = result.data;
      const resourceCenters = data?.resourceCenters ? data.resourceCenters.map((rc) => {
        try {
          return ResourceCenter.decode(rc);
        } catch (e2) {
          if (e2 instanceof Error) {
            logger.error(
              `Decoding resource center: ${rc?.key ?? "unknown"}

`,
              `${e2.message}

`,
              "--------------\n\n",
              `Resource Center: ${JSON.stringify(rc)}`
            );
          }
          return void 0;
        }
      }).filter((rc) => Boolean(rc)) : [];
      const themes = data?.themes ?? [];
      return { resourceCenters, themes };
    } catch (error) {
      if (error instanceof Error) {
        logger.error("Error fetching resource center settings. Continuing with empty data.", error.message);
      }
      return { resourceCenters: [], themes: [] };
    }
  }
  function sanitizeLocale(locale) {
    let sanitized = locale.replace(/_/g, "-");
    const standardLocalePattern = /^[a-z]{2}(-[A-Z]{2})?$/;
    if (!standardLocalePattern.test(sanitized)) {
      logger.warn(`Unusual locale format detected: "${locale}". Expected format: xx-XX (e.g., en-US)`);
    }
    const parts = sanitized.split("-");
    if (parts.length === 2) {
      sanitized = `${parts[0].toLowerCase()}-${parts[1].toUpperCase()}`;
    } else if (parts.length === 1) {
      sanitized = parts[0].toLowerCase();
    } else {
      logger.warn(`Locale "${locale}" has unexpected number of parts. Expected format: xx or xx-XX (e.g., en or en-US)`);
    }
    if (locale !== sanitized) {
      logger.log(`Locale converted from "${locale}" to "${sanitized}"`);
    }
    return sanitized;
  }
  async function getConfig(apiKey, isAdmin = false, locale = void 0, isEditorPreview = false) {
    if (locale) {
      locale = sanitizeLocale(locale);
      const sdk2 = getSDK();
      if (sdk2 && sdk2[_configuration] !== void 0 && sdk2[_configuration].locale !== locale) {
        sdk2[_configuration].locale = locale;
      }
    }
    if (isEditorPreview) {
      return {
        organization: defaults,
        nudges: [],
        flags: defaultFlags,
        themes: [],
        resourceCenters: []
      };
    }
    const [data, resourceCenterData, flags] = await Promise.all([
      fetchConfig(apiKey, isEditorPreview, isAdmin, locale).catch((error) => {
        if (error instanceof Error) {
          logger.error("Error fetching config. Continuing with empty data.", error.message);
        }
        return {};
      }),
      fetchResourceCenters(apiKey, isEditorPreview),
      // XXX(pjhul): using mocked data for now!
      defaultFlags
    ]);
    if (!data || Object.keys(data).length === 0) {
      logger.error("Error decoding config response. It is empty.");
    }
    const { organization, nudges, themes } = data || {};
    const sdk = getSDK();
    const supportedBreakingFeatures = sdk?._?.services?.supportedBreakingFeatures;
    const decodedNudges = nudges?.flatMap((nudge) => {
      try {
        return [Nudge.decode(nudge, supportedBreakingFeatures)];
      } catch (e2) {
        if (e2 instanceof Error) {
          logger.error(
            `Decoding nudge variant: ${nudge?.variantId ?? "unknown"}

`,
            `${e2.message}

`,
            "--------------\n\n",
            `Nudge: ${JSON.stringify(nudge)}`
          );
        }
        return [];
      }
    });
    const allThemes = [...themes ?? [], ...resourceCenterData.themes ?? []];
    const decodedThemes = allThemes.flatMap((theme) => {
      try {
        return [decode2(theme)];
      } catch (e2) {
        if (e2 instanceof Error) {
          logger.error(
            `Decoding theme: ${theme?.id ?? "unknown"}

`,
            `${e2.message}

`,
            "--------------\n\n",
            `Theme: ${JSON.stringify(theme)}`
          );
        }
        return [];
      }
    });
    return {
      organization: guard(
        { apiKey, field: "organization" },
        () => decode(organization),
        defaults
      ),
      nudges: (decodedNudges ?? []).flatMap(
        (nudge) => guard({ apiKey, field: `nudges[id=${nudge?.variantId}]` }, () => [nudge], [])
      ),
      flags,
      themes: (decodedThemes ?? []).flatMap(
        (theme) => guard({ apiKey, field: `themes[id=${theme?.id}]` }, () => [theme], [])
      ),
      resourceCenters: resourceCenterData.resourceCenters
    };
  }
  async function getPreviewConfig(apiKey, isEditorPreview = false, locale) {
    if (!apiKey) {
      return;
    }
    const previewLocale = locale ?? getSDK()?.[_configuration].locale;
    return getConfig(apiKey, true, previewLocale, isEditorPreview);
  }
  async function getEndUserConfig(apiKey, isEditorPreview = false) {
    return getConfig(apiKey, false, getSDK()?.[_configuration].locale, isEditorPreview);
  }

  // ../shared/src/store/global-subscriptions.ts
  var locationChanged = (_) => {
    if (!_.endUserStore.initializedSuccessfully) {
      return false;
    }
    _.messageBus.publish("location_change");
  };
  var sessionPropertiesChanged = (_) => {
    _.messageBus.publish("session_properties_change");
  };
  var locationSub = (_) => _.services.onLocationChange((location) => {
    _.location = ref(location);
  });
  var updateChecklistStepConditionsGoals = (_) => {
    const activeChecklist = _.activeChecklist?.nudge;
    if (!activeChecklist) {
      return;
    }
    activeChecklist.steps.forEach((step, stepIndex) => {
      if (!step.goal) return;
      switch (step.goal.type) {
        case "page_visited":
          if (!!step.goal.value && _.location.href.includes(step.goal.value)) {
            onChecklistStepComplete(_, step, stepIndex);
          }
          break;
        default:
          break;
      }
    });
  };
  var initValtioGlobalStoreSubs = (_) => [
    // debugging tool to log all changes in the global store
    sub(_, LocalStorage_default.get("logChanges", false) ? (_2, ops) => logChanges(ops) : () => null, "*"),
    // detect location changes and set _.location, initialized once
    locationSub(_),
    // used to trigger share link nudges
    sub(_, locationChanged, [
      ["endUserStore", "initializedSuccessfully"],
      // NOTE: need this because nudges and checklist triggering depends on _.endUser
      ["location", "href"]
    ]),
    sub(_, sessionPropertiesChanged, [["sessionProperties"]]),
    sub(_, (_2) => updateChecklistStepConditionsGoals(_2), [["activeChecklist"], ["location"]]),
    sub(_, (_2) => resetTimedTriggers(_2), [["location"]]),
    sub(
      _,
      (_2) => storeResourceCenterStateDebounced(_2),
      PERSISTED_FIELDS.map((field) => ["resourceCenter", field])
    )
  ];
  var setupMessageBusNudgeTriggerSubscriptions = (_) => {
    _.messageBus.subscribe("rage_click", () => {
      triggerSmartNudge(_, {
        trigger: { type: "rage_click" },
        source: {
          type: "trigger",
          properties: {
            triggerType: "rage_click"
          }
        }
      });
    });
    _.messageBus.subscribe("analytics_event", (message) => {
      updateChecklistStepEventGoals(_, message.event_type, message.event_properties);
    });
    _.messageBus.subscribe("analytics_event", (message) => {
      sendIndirectTrigger(_, {
        trigger: { type: "analytics_event", data: { event: message.event_type, properties: message.event_properties } },
        source: {
          type: "trigger",
          properties: {
            triggerType: "analytics_event"
          }
        }
      });
    });
    _.messageBus.subscribe("user_inactive", () => {
      triggerSmartNudge(_, {
        trigger: { type: "smart_delay" },
        source: { type: "trigger", properties: { triggerType: "smart_delay" } }
      });
    });
    _.messageBus.subscribe("user_confusion", () => {
      triggerSmartNudge(_, {
        trigger: { type: "user_confusion" },
        source: { type: "trigger", properties: { triggerType: "user_confusion" } }
      });
    });
    _.messageBus.subscribe("exit_intent", () => {
      triggerSmartNudge(_, {
        trigger: { type: "exit_intent" },
        source: { type: "trigger", properties: { triggerType: "exit_intent" } }
      });
    });
    _.messageBus.subscribe(
      "dom_mutation",
      () => {
        sendIndirectTrigger(_, {
          trigger: { type: "active" },
          source: { type: "active" },
          overrides: { cooldown: true, customThrottles: true, page: true }
        });
        sendIndirectTrigger(_, {
          trigger: { type: "element_appeared" },
          source: {
            type: "trigger",
            properties: {
              triggerType: "element_appeared"
            }
          }
        });
      },
      "nudge_trigger_dom_mutation",
      2e3
      // long timeout to avoid performance issues and because we are fine with a small lag here
    );
    _.messageBus.subscribe(
      "click",
      ({ event }) => {
        if (!event.target) {
          return;
        }
        sendIndirectTrigger(_, {
          trigger: {
            type: "element_clicked",
            match: (selector) => _.services.matchesSelector(event.target, selector)
          },
          source: { type: "trigger", properties: { triggerType: "element_clicked" } }
        });
      },
      "nudge_trigger_click",
      150
    );
    _.messageBus.subscribe("session_properties_change", () => {
      sendIndirectTrigger(_, {
        trigger: { type: "immediately" },
        source: {
          type: "trigger",
          properties: {
            triggerType: "immediately"
          }
        }
      });
    });
    _.messageBus.subscribe("start_debug", (message) => {
      const { experience } = message.event.data;
      if (getPendingPreviewVariantId(_) != null) {
        return;
      }
      savePreviewSession({
        variantId: experience.nudge.variantId,
        toStepIndex: 0,
        locale: experience.locale
      });
      if (_.endUserStore.initializedSuccessfully) {
        restorePreviewSession(_);
      }
    });
    _.messageBus.subscribe("start_recorder", async (message) => {
      shutdownNudges(_);
      closeAllNudgeMocks(_);
      _.nudgeRecorderToolBar.visible = true;
      _.nudgeRecorderToolBar.experience = message.event.data.experience;
      const { experience } = message.event.data;
      const configuration = getSDK()?.[_configuration];
      const previewConfig = await getPreviewConfig(configuration?.apiKey, _.isEditorPreview, experience.locale);
      if (previewConfig?.nudges) {
        await getSDK()?._reloadNudges(previewConfig);
      }
      const updatedTheme = _.nudgeRecorderToolBar.experience?.theme;
      if (updatedTheme) {
        const themeId = updatedTheme.id;
        let themeFound = false;
        const updatedThemes = _.themes.map((themeItem) => {
          if (themeId && themeItem.id === themeId) {
            themeFound = true;
            return updatedTheme;
          }
          return themeItem;
        });
        if (!themeFound && themeId) {
          updatedThemes.push(updatedTheme);
        }
        await getSDK()?._reloadThemes({ themes: updatedThemes });
      }
    });
  };

  // ../shared/src/products/nudges/store/nudgesManagerMachine.ts
  var import_isEqual3 = __toESM(require_isEqual());

  // ../shared/src/products/nudges/store/nudgeStepMachine.ts
  var StepConditionsMachine = (_) => setup({
    types: {},
    actions: {
      reportFailure: ({ context }) => {
        Track.nudge.internal.pinTargetNotFoundError(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(_, context.nudge.variantId)
        });
      },
      setChecksFailed: assign({
        stepChecksFailed: true
      }),
      setChecksPassed: assign({
        stepChecksFailed: false
      })
    },
    actors: {
      searchForElement: fromCallback(
        ({ sendBack, input }) => {
          const checkElement = async () => {
            try {
              if (await passesPinnedElement(_, input.nudge, input.stepIndex)) {
                sendBack({ type: "PASSED_TARGET_ELEMENT" });
              }
            } catch (error) {
            }
          };
          checkElement();
          _.messageBus.subscribe("dom_mutation", checkElement, `search-for-pin-target-${input.nudge.variantId}`);
          return () => {
            _.messageBus.unsubscribe("dom_mutation", `search-for-pin-target-${input.nudge.variantId}`);
          };
        }
      )
    },
    guards: {
      stepHasTargetElement: ({ context }) => context.triggerEvent?.overrides?.pinnedElement || isAnchorableStep(getNudgeStep(context.nudge, context.stepIndex)),
      hasSearchTimeout: ({ context }) => typeof context.searchTimeout !== "undefined"
    },
    delays: { ELEMENT_SEARCH_TIMEOUT: ({ context }) => context.searchTimeout ?? Number.POSITIVE_INFINITY }
  }).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QGUAuYAOBhA9gOwgEtVD9YA6ABTAMLygGIBtABgF1FQMdZjS9OIAB6IAjAFZx5ACwA2FgE4ATAoAcAdhbzx09QBoQATzFKl5JdIVWVqliyXitAXycG0mXLRJkqNIvWZRDiQQbl5vARCRBAkpOUUbTW1dA2MEU1VyKyt1XKVRJQBmWRc3dGx8IgiKZDAAQwAnAGMACzooAAIAMRwGjoAVRphUDoBRABswAFsaVAZKAEFkZFGAEQB9foWAJQBxUf710YAZUYBZUYA5ftZgrh4+fEFo2XFM9VfZUXVCpJZJVJif7kdSWKy2WSyJSqWzqUogdwVLz8Gr1ZptejdXoDIZgEYTaazBhCWCoOroch1ABm6AaAAoTucrocVjssAAJTYASQuAHkAKr9ACUDERniqKPItUarXaWL6gwawzGkxmeFQt0EYUekVALzeIM+31+Wn+4kB6Wh5kcdkcuUhPzh8LwOAgcEEYsqOvgIW1EWeiAAtLILcH4Z7kT5qLR6FqHv6oohpEoLQVZFlRJDxApZHJZApjeHyuLvVK0bLMT0Fbj8arZnHwvwAwhCgXyCxVNnEqadPojIgFOp23Y7KoijDRNICkWPF7quRLjgcUq8SrCeqGzrm63RO3O8o1H9exalPYZNlcup8kUSq4EcW55KCWqRtL0d06oRJhBNwm9UDQXIcQJHkJR1DUVRCiUEN+xiVQFHPbIIShGEWCdMpZ0jPAKGfWYsQAVwIX8m0TGI0OkICQPscCYSgmC0lUXcwXBLQUNhFwXCAA */
    id: "StepConditions",
    initial: "Pending",
    context: ({ input }) => ({
      ...input,
      stepChecksFailed: false
    }),
    states: {
      Pending: {
        always: [
          {
            target: "Searching For Target Element",
            guard: "stepHasTargetElement"
          },
          {
            target: "No Target Element"
          }
        ]
      },
      "Searching For Target Element": {
        invoke: {
          src: "searchForElement",
          input: ({ context }) => ({
            nudge: context.nudge,
            stepIndex: context.stepIndex
          })
        },
        on: {
          PASSED_TARGET_ELEMENT: {
            target: "Element Found"
          }
        },
        after: {
          ELEMENT_SEARCH_TIMEOUT: {
            target: "Element Search Failed",
            guard: "hasSearchTimeout"
          }
        }
      },
      "No Target Element": {
        type: "final",
        entry: [{ type: "setChecksPassed" }]
      },
      "Element Search Failed": {
        entry: [{ type: "reportFailure" }, { type: "setChecksFailed" }],
        type: "final"
      },
      "Element Found": {
        type: "final",
        entry: [{ type: "setChecksPassed" }]
      }
    },
    output: ({ context }) => ({ stepChecksFailed: context.stepChecksFailed })
  });

  // ../shared/src/products/nudges/store/nudgeMachine.ts
  var import_dayjs2 = __toESM(require_dayjs_min());

  // ../shared/src/store/end-user/responses.ts
  var submitSurveyResponse = async (_, variantId, nudgeStepId, blockId, response, { isFromTestMode, isFromDebugMode }) => {
    const { apiKey } = getSDK()[_configuration];
    const userJsonBase64 = jsonBase64Encoder(_.user);
    try {
      await post(
        `/sdk/v1/responses`,
        {
          responses: [
            {
              lifecycleId: getNudgeDataFromUserStore(_, variantId)?.activelifeCycleUuid,
              nudgeStepId,
              blockId,
              response: {
                value: response.value,
                stringResponse: response.stringResponse,
                otherText: "otherText" in response ? response?.otherText : null
              }
              // Only send value - can send blockId/type in future if needed
            }
          ],
          isFromTestMode,
          isFromDebugMode
        },
        {
          headers: {
            Authorization: `Api-Key ${apiKey}`,
            "X-Amp-User": userJsonBase64
          }
        }
      );
    } catch (error) {
      logger.debug("Error submitting response:", error);
    }
  };

  // ../shared/src/products/nudges/store/nudgeMachine.ts
  var NudgeMachine = (globalStore, nudge) => setup({
    types: {},
    actors: {
      StepConditionsMachine: StepConditionsMachine(globalStore),
      FindTargetElementMachine: fromPromise(
        async ({
          input
        }) => {
          return passesTriggerElement(globalStore, input.nudge, input.triggerEvent, input.nudgeSeenThisSessionTs);
        }
      )
    },
    guards: {
      passesNudgeMatch: ({ context }) => !context.triggerEvent?.nudgeId || context.nudge.variantId === context.triggerEvent.nudgeId,
      passesBuiltInThrottles: ({ context }) => context.triggerEvent?.overrides?.builtInThrottles || passesBuiltInThrottles(globalStore, context.nudge),
      passesTriggerMatch: ({ context }) => context.triggerEvent?.overrides?.triggerMatch || passesTriggerMatch(globalStore, context.nudge, context.triggerEvent),
      passesCooldown: ({ context }) => context.triggerEvent?.overrides?.cooldown || isTooltipNudge(context.nudge) || passesCooldown(globalStore, context.nudge),
      passesAudience: ({ context }) => context.triggerEvent?.overrides?.audience || context.triggerEvent?.overrides?.simulateMode || // In debug/simulate mode we always want our audience guard to pass
      getActiveVariantForFlag(context.nudge.flagKey, globalStore.decide) === "control" || nudgePassesDecide(context.nudge, globalStore.decide),
      passesSnoozed: ({ context }) => context.triggerEvent?.overrides?.snoozed || passesSnoozedConditions(globalStore, context.nudge),
      passesPage: ({ context }) => {
        const passesRegularPageTargeting = context.triggerEvent?.overrides?.page || passesPageTargeting(globalStore, context.nudge);
        return !shouldTemporarilyHide(globalStore, context.nudge) && passesRegularPageTargeting;
      },
      passesClicked: ({ context }) => passesClickedElement(globalStore, context.nudge, context.triggerEvent),
      passesCustomThrottles: ({ context }) => shouldBypassCustomThrottles(globalStore, context.nudge) || context.triggerEvent?.overrides?.customThrottles || passesCustomThrottles(globalStore, context.nudge),
      passesLocalization: ({ context }) => context.triggerEvent?.overrides?.localization || passesLocalization(globalStore, context.nudge, getSDK()?.[_configuration].locale),
      passesExperimentVariant: ({ context }) => context.triggerEvent?.overrides?.audience || context.triggerEvent?.overrides?.simulateMode || nudgePassesDecide(context.nudge, globalStore.decide),
      // step specific
      remainingSteps: ({ context }) => hasRemainingSteps(context.nudge)(context),
      advanceToSpecificStep: ({ context }, params) => params.step !== void 0 && params.step >= 0 && params.step < context.nudge.steps.length,
      stepChecksFailed: (_, params) => params.passed,
      canStepBack: ({ context }) => usesNavigationStack(context.nudge) ? context.stepIndexStack.length > 0 : context.stepIndex > 0,
      isTooltipNudge: ({ context }) => !!isTooltipNudge(context.nudge),
      isPinStep: ({ context }) => !!isPinStep(getNudgeStep(context.nudge, context.stepIndex)),
      isCardStep: ({ context }) => !!isCardStep(getNudgeStep(context.nudge, context.stepIndex)),
      isWebPlatform: ({ context }) => context.nudge.platform === "web",
      hasSurveyResponse: (_, params) => "surveyResponse" in params.event,
      hasSequentialSteps: ({ context }) => hasSequentialSteps(context.nudge),
      isDismissal: (_, params) => params.isDismissAction
    },
    actions: {
      setPinGraceUntil: assign({
        pinGraceUntil: (_, params) => params.until,
        pinGraceStepIndex: (_, params) => params.stepIndex
      }),
      setTriggerEvent: assign({
        triggerEvent: (_, params) => params.triggerEvent
      }),
      setPassedConditions: assign({
        prevPassedConditions: () => true
      }),
      setFailedConditions: assign({
        prevPassedConditions: () => false
      }),
      captureEvaluationId: assign({
        evaluationId: ({ context }) => {
          const audienceSkipped = context.triggerEvent?.overrides?.audience || context.triggerEvent?.overrides?.simulateMode;
          if (audienceSkipped) return null;
          const id = getEvaluationId(context.nudge, globalStore.decide);
          return typeof id === "string" ? id : null;
        }
      }),
      sendEnterRenderLoop: sendTo(({ context }) => context.parentRef, {
        type: "ENTER_RENDER_LOOP",
        nudge
      }),
      sendExitRenderLoop: sendTo(({ context }) => context.parentRef, { type: "EXIT_RENDER_LOOP" }),
      cleanupSmartNudges: sendTo(({ context }) => context.parentRef, {
        type: "CLEANUP_SMART_NUDGES",
        nudge
      }),
      // step specific
      renderStep: ({ context }) => {
        const triggerSource = context.triggerEvent?.source;
        const startPosition = triggerSource?.type === "nudge" ? triggerSource.position : void 0;
        globalStore.services.renderNudge(globalStore, context.nudge, context.stepIndex, {
          context,
          source: startPosition ? { animateIn: true, startPosition } : void 0
        });
      },
      incrementStep: assign({
        stepIndex: ({ context }) => context.stepIndex + 1,
        stepIndexStack: ({ context }) => [context.stepIndex, ...context.stepIndexStack],
        pinGraceUntil: () => void 0,
        pinGraceStepIndex: () => void 0
      }),
      decrementStep: assign({
        stepIndex: ({ context }) => usesNavigationStack(context.nudge) ? context.stepIndexStack[0] : context.stepIndex - 1,
        stepIndexStack: ({ context }) => usesNavigationStack(context.nudge) ? context.stepIndexStack.slice(1) : context.stepIndexStack,
        pinGraceUntil: () => void 0,
        pinGraceStepIndex: () => void 0
      }),
      closeStep: ({ context }) => {
        globalStore.services.closeStep(globalStore, context.nudge, context.stepIndex);
      },
      execAction: ({ context }, params) => {
        context.triggerEvent?.overrides?.ctaAction || execStepAction(globalStore, context.nudge, context.stepIndex, params.action);
      },
      reportExposure: ({ context }) => {
        const experimentKey = getExperimentKey(context.nudge, globalStore.decide);
        if (experimentKey && typeof experimentKey === "string") {
          const exposureKey = `experiment_variant_${generateUserKey(globalStore)}_${context.nudge.flagKey}_${experimentKey}_${context.nudge.variant}`;
          if (!SessionStorage_default.get(exposureKey, false)) {
            Track.experiment.exposure(context.nudge.flagKey, experimentKey, context.nudge.variant);
            SessionStorage_default.set(exposureKey, true);
          }
        }
      },
      reportExperimentControlExposure: ({ context }) => {
        const experimentKey = getExperimentKey(context.nudge, globalStore.decide);
        const activeVariantForExperiment = getActiveVariantForFlag(context.nudge.flagKey, globalStore.decide);
        if (experimentKey && typeof experimentKey === "string" && activeVariantForExperiment == "control") {
          const exposureKey = `experiment_control_${generateUserKey(globalStore)}_${context.nudge.flagKey}_${experimentKey}`;
          if (!SessionStorage_default.get(exposureKey, false)) {
            Track.experiment.exposure(context.nudge.flagKey, experimentKey, "control");
            SessionStorage_default.set(exposureKey, true);
          }
        }
      },
      reportSeen: ({ context }) => {
        Track.nudge.viewed(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
        });
      },
      reportEngaged: ({ context }, params) => {
        Track.nudge.engaged(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
          source: {
            type: "cta",
            level: params.buttonType === "snooze" ? "tertiary" : params.buttonType ?? "primary"
          }
        });
      },
      reportStepCompletion: ({ context }, params) => {
        let completedViaCta = false;
        if (params.buttonType === "primary" || params.buttonType === "secondary" || !params.buttonType && params.cta) {
          completedViaCta = true;
        }
        if (params.buttonType) {
          Track.nudge.engaged(context.nudge, context.stepIndex, {
            ...context,
            interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
            source: {
              type: "cta",
              level: params.buttonType === "snooze" ? "tertiary" : params.buttonType
            }
          });
        }
        Track.nudge.stepCompleted(context.nudge, context.stepIndex, {
          ...context,
          completedViaCta,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
        });
      },
      reportSurveyResponse: ({ context }) => {
        const step = getNudgeStep(context.nudge, context.stepIndex);
        if (!step) return;
        const stepResponses = context?.surveyResponses[step.id];
        if (!stepResponses || Object.keys(stepResponses).length === 0) return;
        const isFromDebugMode = !!context.triggerEvent?.overrides?.simulateMode;
        const isFromTestMode = isTestNudge(globalStore, context.nudge);
        Object.values(stepResponses).forEach((surveyResponse) => {
          submitSurveyResponse(globalStore, context.nudge.variantId, step.id, surveyResponse.blockId, surveyResponse, {
            isFromTestMode,
            isFromDebugMode
          });
          Track.nudge.surveySubmitted(context.nudge, context.stepIndex, {
            ...context,
            interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
            response: surveyResponse
          });
        });
      },
      reportCompleted: ({ context }) => {
        Track.nudge.completed(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
        });
      },
      reportDismissed: ({ context }) => {
        const now = (0, import_dayjs2.default)();
        const viewedTs = (0, import_dayjs2.default)(context.nudgeSeenThisSessionTs[context.nudgeSeenThisSessionTs.length - 1]);
        if (now.diff(viewedTs) < RAGE_CLOSE_THRESHOLD) {
          Track.nudge.rageClosed(context.nudge, context.stepIndex, {
            ...context,
            interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
          });
        }
        const step = getNudgeStep(context.nudge, context.stepIndex);
        const stepResponses = step ? context.surveyResponses[step.id] : void 0;
        if (stepResponses && Object.keys(stepResponses).length > 0) {
          Object.values(stepResponses).forEach((surveyResponse) => {
            Track.nudge.surveyAbandoned(context.nudge, context.stepIndex, {
              ...context,
              interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
              response: surveyResponse
            });
          });
        }
        Track.nudge.dismissed(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
        });
      },
      reportSnoozed: ({ context }, params) => {
        Track.nudge.engaged(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
          source: {
            type: "cta",
            level: params.buttonType === "snooze" ? "tertiary" : params.buttonType ?? "primary"
          }
        });
        Track.nudge.snoozed(context.nudge, context.stepIndex, {
          ...context,
          duration: params.duration,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId)
        });
      },
      saveSeen: ({ context }) => {
        if (context.triggerEvent?.overrides?.saveProgress) return;
        saveProgressToEndUserStore(globalStore, {
          nudge: context.nudge,
          stepIndex: context.stepIndex,
          stepIndexStack: context.stepIndexStack,
          markSeen: true,
          activate: context.triggerEvent?.trigger.type !== "active" && canBeActive(context.nudge)
        });
      },
      saveInteraction: ({ context }, params) => {
        const { isCompleted, isDismissed } = params || {};
        const { stepIndex, stepIndexStack, triggerEvent, nudge: nudge2 } = context;
        if (triggerEvent?.overrides?.saveProgress) return;
        saveProgressToEndUserStore(globalStore, {
          nudge: nudge2,
          stepIndex,
          stepIndexStack,
          isCompleted,
          isDismissed,
          deactivate: isDismissed || isCompleted
        });
      },
      saveSnoozed: ({ context }, params) => {
        const { stepIndex, stepIndexStack, triggerEvent, nudge: nudge2 } = context;
        if (triggerEvent?.overrides?.saveProgress) return;
        saveProgressToEndUserStore(globalStore, {
          nudge: nudge2,
          stepIndex,
          stepIndexStack,
          snoozed: {
            interval: params.action?.interval ?? nudge2.snoozeDuration.interval,
            value: params.action?.value ?? nudge2.snoozeDuration.value
          }
        });
      },
      markSeen: assign({
        nudgeSeenThisSessionTs: ({ context }) => [...context.nudgeSeenThisSessionTs, Date.now()]
      }),
      resetStepViewed: assign({
        hasReportedStepViewed: () => false
      }),
      markStepViewed: assign({
        hasReportedStepViewed: () => true
      }),
      setStepIndexWithHistory: assign(({ context }, params) => {
        if (params.step === void 0 || !(params.step >= 0 && params.step < context.nudge.steps.length)) {
          return {};
        }
        return {
          stepIndex: params.step,
          stepIndexStack: [context.stepIndex, ...context.stepIndexStack]
        };
      }),
      determineInitialStepIndex: assign({
        stepIndex: ({ context }) => {
          if (context.triggerEvent?.overrides?.stepIndex !== void 0) {
            return context.triggerEvent.overrides.stepIndex;
          }
          if (context.triggerEvent?.trigger.type === "active") {
            return context.stepIndex;
          }
          return 0;
        }
      }),
      setStepIndex: assign({
        stepIndex: ({ context }, params) => {
          if (params.step >= 0 && params.step < context.nudge.steps.length) {
            return params.step;
          }
          return context.triggerEvent?.overrides?.stepIndex ?? context.stepIndex;
        },
        pinGraceUntil: () => void 0,
        pinGraceStepIndex: () => void 0
      }),
      setSurveyResponses: assign({
        surveyResponses: ({ context }, params) => {
          const step = getNudgeStep(context.nudge, context.stepIndex);
          if (!step || !params.surveyResponse) {
            return context.surveyResponses;
          }
          return {
            ...context.surveyResponses,
            [step.id]: params.surveyResponse
          };
        }
      }),
      resetSurveyResponses: assign({
        surveyResponses: ({ context }, params) => {
          if (params?.blockId) {
            const step = getNudgeStep(context.nudge, context.stepIndex);
            if (!step) return context.surveyResponses;
            const stepResponses = { ...context.surveyResponses[step.id] || {} };
            delete stepResponses[params.blockId];
            return {
              ...context.surveyResponses,
              [step.id]: stepResponses
            };
          }
          if (params?.step !== void 0 && params.step >= 0 && params.step < context.nudge.steps.length) {
            const newRespones = { ...context.surveyResponses };
            for (let index = params.step; index < context.nudge.steps.length; index++) {
              const step = getNudgeStep(context.nudge, index);
              if (step) {
                delete newRespones[step.id];
              }
            }
            return newRespones;
          }
          return context.surveyResponses;
        }
      }),
      resetAllSurveyResponses: assign({
        surveyResponses: () => {
          return {};
        }
      }),
      resetStep: assign({
        stepIndex: () => 0,
        stepIndexStack: () => []
      }),
      reevaluateChecklistItemGoals: () => {
        updateChecklistStepConditionsGoals(globalStore);
      },
      saveStepIndex: ({ context }) => {
        const { stepIndex, stepIndexStack, triggerEvent, nudge: nudge2 } = context;
        if (triggerEvent?.overrides?.saveProgress) return;
        saveProgressToEndUserStore(globalStore, { nudge: nudge2, stepIndex, stepIndexStack });
      },
      refreshNudge: assign({
        nudge: (_, params) => params.nudge
      }),
      assignPopoverActor: assign({
        popoverActor: (_, params) => params.actor
      }),
      closePopover: ({ context }) => {
        context.popoverActor?.send({ type: "CLOSE" });
      },
      setTriggerMatch: assign({
        triggerMatch: ({ event, context }) => {
          if (event.type === "TRIGGER") {
            return event;
          }
          return context.triggerMatch;
        }
      }),
      logCondition: ({ context }, params) => {
        if (shouldDebugNudges) {
          try {
            logger.debug(
              JSON.stringify(
                {
                  type: "Check Result",
                  ...params,
                  nudge: { variantId: context.nudge.variantId, title: context.nudge.title },
                  trigger: context.triggerEvent
                },
                null,
                2
              )
            );
          } catch (error) {
            logger.error("Failed to log condition", error);
          }
        }
      }
    }
  }).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDkCu0wGIBKBRAyrgCoD6+RAgkbgNoAMAuoqAA4D2sAlgC6dsB2zEAA9EAFgBMAGhABPRAEYA7EoB0ATgCsAZgWaJADk1ilxugYC+FmWgw5cAMTz4AEiWQBVACIBxWoyF2Ll4BIVEESRl5BAMFVTF1RPUEwwMlZW0rG3QYVQBJCAAbLCJsPJ8-bHomJBAgnj5BWvD9KMRtADZNdVUJTSUxBTp1JQNzdSyQW1yAYQALMABjAGtOfigAAhmBCAaBWFV5pdX1jYp0TjB+RaxqwI49ptBwhQMJCVUh9W0JLQ6uhTaNoIXTDVR0bR0UyaAxiBIGSzWKY5MCHBYrNabbb8XYhfgHI4Y07nXZXG6YGgKGqsB54sKITQKZSfbSQiQKSSjYGaCG9AzqCTmBTfCSSTJI6aowknLE7R4E9Eyjb4fhsNgAL0gFICtXqdOa4kB2nBKmS-TZA2BP15HQ5wyMooM2kR2QwaOOmK2crxCo9pxVas1EApVPuwUa9IQjIkaiNdHZnIMwI6CU+YiMMLe6gREkmkvdRNlOPlBaVAAUAIYwbXUuq0iMGhCA76qIzJbTqBRdEyM4G-MQdPnmPqvCSs5R5lGlz3Y3GNX2FjaV6uU2t6hvPBlDWOs+McmNJuTtWGqZ2-H6Cpms7RKSdu6Uz73z6enGaFTgrLV3XX10KNsSaB0PRjmI5g9toCRAkeIKsh8hhQv0EISEBt4SlOD6vk++wvli76fsGq5ho8kaMjeLJsvuXLQQMcRDMoXY8pICSaHesyKo+xY+jhGxEAATpwUAwLxGy4MUAC2VzcDWRH6puUZ6DuFGJsCwoCqooyMlCSjOh0AysVK7GYZxz4YZsfECUJIniZJIZrr+TwiFuJjkXuynQU6xp0MYowdE67LqCm+ncbOJamV6bCFBAbAAO78NJP7hn+cmdCmqhdB0EIItCRgdFaUJiBoJjpp06h0MKQVhSFXGVWqkUxXFhEJcRjaMrpLkJgeVqAgY4LOkYoI5qhrpsX6RZzthYWShsACyFbcIsczxTSiUOeEoEFWkPI6HQYg-K8fZGAVTFeQK-S+eKw0GaNXrGRNhmbFNs3zYtjXLc1cmMiM7WUYe0TaGY6n9KBHR9emLrIve903eN+LceZglgMJT0LUtdYrZGyQfP9Iqldm-K6AdoGqN0UKQnQEKmBBFVQ1VJlQ-DlnIy9oZNbJjnyV9cYdVRf0JAVphKCDNHCrt1PXbTd3i6gsDcGwYk8XMvFsNw3DFLAqPrkl7PvKYp4DAixj8imOhdfGaV2tm+jFUYYuLhLsOVdLsvy0QivK6rcC2TJG7s4yaTfW5f03porbRuYgHY+D+Y1bdDtQwAMmwiwVu+6pzY0Gv2ZGvxfQKZr-DpgJiHlCLqWMsT9oM5VoZD4tYXH12J8nqfpwIXusz7LTKIprmddBPyAYV0aduT3wdEF+DcGALCYFF-CojLc2ovmk-T9+b1s+EyTOR2UJGEMxiaH2ZUh2VyiDIkPLxhPU8sMF9fq3PqJrAAbmwyyoqvLD27As0LWsYB15o3er7TsHxhSkU6KKBSKkmRqAhAoZCbxrzaRvtPe+sdH4CGfvwN+H9VBfx-n-OYADXrAM3gyMBnwtBGg6NA-oKk0gFV3Iyfo-IBh9DQXfMKs1hAbGwFcCAiMvw6g3p3RAukBifEdGaCCYxi7QVeGpLsfV+TrR5FHKcX9uK8P4YI4RBEWZiK1uESRBVEHplkemHaKk+jATYSYJkopBZcNUAInEiMNiJzYDPLweR8DTX8fgIBmtVqIDSCeLo3RBjkwHFCPs7wjqJAMHQ1k-JEgXQhrkbR7ihHCW8TPfAyAADyxSABa-g7Lo0bAiCCaVNDRKGDtDKSg+x0XBN8fQXkMwZUySvW+bj9H5LVDPPATgCBuE8L4Sp3sTGIFGETax7J-pKE7J0FSCRYxMP0BmEemi3Q5KGV4kZmAZjx2KYQEJWcalOgKlE5ITS4mtOgoKHkxNviWN0MgiYNdskDNyZ4gppzzmEBIAAdTyEQFwxSPCkDwBQGYRA8gADUqB5GKcgK51S5JZTUOlDkpgTC-GedEGMZsEiJFtOYeMzo+laP+UcoF5BillixSA8IOY7kNIebElpx9yYdM6D8AYwc0iuIBcMnxmAHB5GQP4lwbKKExFiFyxpvL4mKLeB8UYXwxjwSJeKxlJyPBli8FQXAZAPDYGRbgAAmiQZwZYMWXNEeQ8RCBTR4pPnQVJTDcqKNAnQdSEEzwxhTCkQ1HjJV3wlZiTAFAvCouQDMGZHc5kevHPEd4ZV-q6BTAoBJg93hC0tukLQka8nHJ8YMqNcbnDEDIJQagir3XaV0Fmy8uauyDD7LaEO+KLxaFhF5CtgKRk1ryXW3APhnDBNdaEyMba4iSE7TobtBaXlOh6EoQwfxMYIRYr8z+DKo1VpjUMuNFB8D4HKMgEgTqnU2uwCQBFRBilVHndcuSSgfU9UQWu2lu6j4vJWfEfQltYjKChKO6NE7EZxq8Bi1NxiwnKp2vUtVzSNXRG7SHAcKSeRdE2oFI9BCT2VoKXB-i6xMDkFwGWEgyL-F5AAELx2Q269N2lYini6QKFVPISWIGzT1YtN5S0QJg2e1QFAIAvwrNcONJTSCIeQBxhdjYFlqB3V0fsqyUzSBA4kDQ4HMydvHqRw5p7KOyfk4pmjqn1NfvZlp9SyFwMmACpEF5CC0rrWgTtJidKDnkbHdW2zCnFgIaQ2QjTOKFkYZ5VhoTCAxyChM2yeMKYERdik5RmOMMsHz1UK-d+x7p5EIrP-eeLb00RNVUlp5fZ4S9CicYbMJ0Yx5fHQV+Us9sEldwWVsjFWH7ENIUYzjqHXM6Y8-p7zpKEiDmBkyXScTu7derQIqAvE4BcBo7V6bsJtPub015wzpKtXgiMNpICkFRibfPTtvbcbYvOY5Ql+5MTkt9kPupKJKTqVjidFYJEqohHwFqJKWZqGAC06hgSw8HOTcmYwwIDF2sYIKBRigw4xnQj4XkeSQj5roYDpLR6ti0LEgeq2LOXQwYVvHjYOx9h3T0YYwxcNk-2SNO2D9uIkkuNcMAzO5J6DaiDX4vwhgIidH2M0vRzQ7phABDItslQ-24gGDUkAxfsx0moJIAUoTZiYnlbSGhRQIOGGOFxpHevVShsuUXabUOrbuasjSZ8AojAOl2d5UI7SCy6D8hnju6bizwh-CA+u1o-B6gXUwOUifk-aIKD4JNfIm5paLB3NMBdhQZp40SYAJL8G4HH8QAteghqMGVAjG6g7tr6NpdMsvbf06yVdfnmD74RSirFKvIJ2QfF8ukJp3K1sl20+aXpA5ISHvDwXvvk0UQzTmgtYfaRCYFVbzePosJGSoPz3XVf9N+IIyRpvuYw+6FHTXWMdnOYDqQizeta83Tec9814XmmTs5YFYlYVY1Zh8M84g1kRg1dS0Lt2hAQg1986Ed1lB2Qu9o4V9CtuIm4U5OA042Y4ttZj8NBklSobxdooR-U-p2ks8jZyYQJgs-lp5h8dAd1qEdBQIuxfIEhgQ-hiYycBxu1BhTBXEvBsFh9+MehOgf1BRYRkJ0xftLcdkYRpdbRcxLMBkI99hmDJAg0IEIIyp-hYQEdFFVkep+QsNMsYQhpu8RtuEoZdEJU9c3dIw6E3hpEewuxOwK5GFUpIR0gfUoEvg1CGcrMKMRlh9pDdC+hdBAN+Q08mx2c0wvJBh2QGl9AGDytz1rNx1Y11gIjtw0pjZ+MORBNmsYQNAfUOQbxRVkhHsZM5NItMQIj0hzEzAzcAQtAElVl1J4x2xXgUxhD1D0EJVpNND8Rt87d6lbQewiU-cXkUiTQtA2R2RtJ+g6jttdtYB9soBmjEEs0Jdk8ux0gDoQZegicM90h-oSMrAgA */
    id: "Nudge",
    initial: "Idle",
    states: {
      Idle: {
        on: {
          TRIGGER: {
            target: "Checking Conditions",
            actions: [{ type: "setTriggerEvent", params: ({ event }) => ({ triggerEvent: event }) }]
          }
        }
      },
      "Checking Conditions": {
        initial: "Checking Nudge Match",
        states: {
          "Checking Audience": {
            always: [
              {
                target: "Checking Custom Throttles",
                guard: "passesAudience",
                actions: [
                  { type: "captureEvaluationId" },
                  { type: "logCondition", params: { conditionName: "audience", conditionResult: "PASS" } }
                ]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "setFailedConditions" },
                  { type: "logCondition", params: { conditionName: "audience", conditionResult: "FAIL" } }
                ]
              }
            ],
            description: `Are audience conditions satisfied?`
          },
          "Checking Snoozed": {
            always: [
              {
                target: "Checking Clicked",
                guard: "passesSnoozed",
                actions: [{ type: "logCondition", params: { conditionName: "snooze", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [{ type: "logCondition", params: { conditionName: "snooze", conditionResult: "FAIL" } }]
              }
            ],
            description: `Is the nudge not currently snoozed?`
          },
          "Checking Page": {
            always: [
              {
                target: "Checking Audience",
                guard: "passesPage",
                actions: [{ type: "logCondition", params: { conditionName: "page", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "logCondition", params: { conditionName: "page", conditionResult: "FAIL" } },
                  { type: "setFailedConditions" }
                ]
              }
            ],
            description: `Are page conditions satisfied?`
          },
          "Checking Clicked": {
            always: [
              {
                target: "Checking Trigger Element",
                guard: "passesClicked",
                actions: [{ type: "logCondition", params: { conditionName: "clicked", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [{ type: "logCondition", params: { conditionName: "clicked", conditionResult: "FAIL" } }]
              }
            ],
            description: "Was the target element clicked?"
          },
          "Checking Trigger Element": {
            invoke: {
              src: "FindTargetElementMachine",
              id: "FindTargetElementMachine",
              input: ({ context }) => ({
                nudge: context.nudge,
                triggerEvent: context.triggerEvent,
                nudgeSeenThisSessionTs: context.nudgeSeenThisSessionTs
              }),
              onDone: [
                {
                  target: "#Nudge.Step",
                  guard: ({ event }) => event.output,
                  actions: [
                    { type: "logCondition", params: { conditionName: "triggerElement", conditionResult: "PASS" } }
                  ]
                },
                {
                  target: "#Nudge.Idle",
                  actions: [
                    { type: "logCondition", params: { conditionName: "triggerElement", conditionResult: "FAIL" } }
                  ]
                }
              ]
            },
            description: "Was the trigger element added to the DOM?"
          },
          "Checking Cooldown": {
            always: [
              {
                target: "Checking Snoozed",
                guard: "passesCooldown",
                actions: [{ type: "logCondition", params: { conditionName: "cooldown", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "cleanupSmartNudges" },
                  { type: "logCondition", params: { conditionName: "cooldown", conditionResult: "FAIL" } }
                ]
              }
            ],
            description: `Has this specific nudge been seen the maximum number of times?`
          },
          "Checking Nudge Match": {
            always: [
              {
                target: "Checking Trigger Match",
                guard: "passesNudgeMatch"
              },
              {
                target: "#Nudge.Idle"
              }
            ],
            description: "Is the triggered nudge the same as this one?"
          },
          "Checking Trigger Match": {
            always: [
              {
                target: "Checking Page",
                guard: "passesTriggerMatch",
                actions: [{ type: "setTriggerMatch" }]
              },
              {
                target: "#Nudge.Idle"
              }
            ],
            description: `Is the trigger event applicable to this nudge?`
          },
          "Checking Custom Throttles": {
            always: [
              {
                target: "Checking Localization",
                guard: "passesCustomThrottles",
                actions: [
                  { type: "logCondition", params: { conditionName: "customThrottles", conditionResult: "PASS" } }
                ]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "cleanupSmartNudges" },
                  { type: "logCondition", params: { conditionName: "customThrottles", conditionResult: "FAIL" } }
                ]
              }
            ]
          },
          "Checking Localization": {
            always: [
              {
                target: "Checking Cooldown",
                guard: "passesLocalization",
                actions: [{ type: "logCondition", params: { conditionName: "localization", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "cleanupSmartNudges" },
                  { type: "logCondition", params: { conditionName: "localization", conditionResult: "FAIL" } }
                ]
              }
            ],
            description: "Does the nudge pass localization rules based on organization settings?"
          }
        }
      },
      Step: {
        initial: "Checking Conditions",
        states: {
          Done: {
            entry: [
              // Clear persisted survey responses so the next time this survey shows it is fresh
              { type: "resetAllSurveyResponses" }
            ],
            always: [
              {
                target: "#Nudge.Idle"
              }
            ]
          },
          "Checking Conditions": {
            invoke: {
              src: "StepConditionsMachine",
              id: "StepConditionsMachine",
              input: ({ context }) => ({
                nudge: context.nudge,
                stepIndex: context.stepIndex,
                triggerEvent: context.triggerEvent
              }),
              onDone: [
                {
                  target: "Done",
                  guard: {
                    type: "stepChecksFailed",
                    params: ({ event }) => ({ passed: event.output.stepChecksFailed })
                  },
                  actions: [
                    { type: "logCondition", params: { conditionName: "findTargetElement", conditionResult: "FAIL" } }
                  ]
                },
                {
                  target: "Checking Max Rendered",
                  actions: [
                    { type: "logCondition", params: { conditionName: "findTargetElement", conditionResult: "PASS" } }
                  ]
                }
              ]
            },
            on: {
              // Allow closing while waiting for target element (e.g., via closeBlockingNudges)
              CLOSE: "Done"
            },
            description: `This is where we check any step specific conditions.
This includes searching for elements to pin to or checking availability of commands on a CTA.`
          },
          "Checking Max Rendered": {
            always: [
              {
                target: "Checking Experiment Variant",
                guard: "passesBuiltInThrottles",
                actions: [
                  { type: "logCondition", params: { conditionName: "builtInThrottles", conditionResult: "PASS" } }
                ]
              },
              {
                target: "Done",
                actions: [
                  { type: "logCondition", params: { conditionName: "builtInThrottles", conditionResult: "FAIL" } }
                ]
              }
            ],
            description: `Are we already rendering the maximum number of simultaneous nudges?
Limit is currently hard-coded to 1`
          },
          "Checking Experiment Variant": {
            always: [
              {
                target: "Render Loop",
                guard: "passesExperimentVariant",
                actions: [
                  { type: "logCondition", params: { conditionName: "experimentVariant", conditionResult: "PASS" } }
                ]
              },
              {
                target: "Done",
                actions: [
                  { type: "logCondition", params: { conditionName: "experimentVariant", conditionResult: "FAIL" } },
                  { type: "reportExperimentControlExposure" }
                ]
              }
            ],
            description: `Is this nudge the correct variant for the experiment?
This ensures only the right variant is shown for experiment nudges.`
          },
          "Render Loop": {
            entry: enqueueActions(({ enqueue, check }) => {
              enqueue({ type: "sendEnterRenderLoop" });
              const isPinOnWeb = check({ type: "isPinStep" }) && check({ type: "isWebPlatform" });
              if (!isPinOnWeb && !check({ type: "isCardStep" })) {
                enqueue({ type: "markSeen" });
                enqueue({ type: "saveSeen" });
              }
            }),
            states: {
              Rendering: {
                entry: enqueueActions(({ enqueue, check }) => {
                  enqueue({ type: "resetStepViewed" });
                  enqueue({ type: "renderStep" });
                  enqueue({ type: "reevaluateChecklistItemGoals" });
                  const isPinOnWeb = check({ type: "isPinStep" }) && check({ type: "isWebPlatform" });
                  if (!check({ type: "isTooltipNudge" }) && !isPinOnWeb && !check({ type: "isCardStep" })) {
                    enqueue({ type: "reportSeen" });
                    enqueue({ type: "markStepViewed" });
                  }
                  enqueue({ type: "reportExposure" });
                }),
                exit: enqueueActions(({ context, event, enqueue }) => {
                  if (closesNudgeOnStepChange(context.nudge, event, context.stepIndex)) {
                    enqueue({ type: "closeStep" });
                  }
                }),
                on: {
                  ADVANCE: {
                    target: "Advancing",
                    actions: enqueueActions(({ enqueue, check, event }) => {
                      enqueue({ type: "execAction", params: { action: event.action } });
                      enqueue({
                        type: "reportSurveyResponse"
                      });
                      enqueue({
                        type: "reportStepCompletion",
                        params: { cta: event.cta, buttonType: event.buttonType }
                      });
                      if (check("hasSequentialSteps")) {
                        if (check({ type: "advanceToSpecificStep", params: { step: event.step } })) {
                          enqueue({ type: "setStepIndexWithHistory", params: { step: event.step } });
                          enqueue.raise({ type: "NOT_DONE" });
                        } else if (check({ type: "remainingSteps" })) {
                          enqueue({ type: "incrementStep" });
                          enqueue.raise({ type: "NOT_DONE" });
                        } else {
                          enqueue.raise({ type: "DONE" });
                        }
                      } else {
                        enqueue.raise({ type: "DONE" });
                      }
                    })
                  },
                  RESET_STATE: {
                    description: "This event is dispatched when calling the sdk method `resetNudge(id: INudgeType['id'], stepIndex?: number)`.",
                    target: "Checking Conditions",
                    actions: [
                      { type: "setStepIndex", params: ({ event }) => ({ step: event.step }) },
                      { type: "saveStepIndex" },
                      { type: "resetSurveyResponses", params: ({ event }) => ({ step: event.step }) }
                    ]
                  },
                  REGRESS: {
                    target: "Regressing",
                    actions: [{ type: "reportEngaged", params: ({ event }) => ({ buttonType: event.buttonType }) }]
                  },
                  STAY_ON_STEP: {
                    actions: [
                      { type: "reportSurveyResponse" },
                      { type: "resetAllSurveyResponses" },
                      { type: "reportEngaged", params: ({ event }) => ({ buttonType: event.buttonType }) }
                    ]
                  },
                  ASSIGN_POPOVER_ACTOR: {
                    actions: [{ type: "assignPopoverActor", params: ({ event }) => ({ actor: event.actor }) }]
                  },
                  DONE: {
                    target: "#Nudge.Step.Done",
                    actions: [
                      { type: "reportCompleted" },
                      { type: "resetStep" },
                      { type: "saveInteraction", params: { isCompleted: true, isDismissed: false } }
                    ]
                  },
                  STEP_VISIBLE: {
                    actions: enqueueActions(({ context, enqueue }) => {
                      enqueue({ type: "markSeen" });
                      enqueue({ type: "saveSeen" });
                      if (!context.hasReportedStepViewed) {
                        enqueue({ type: "reportSeen" });
                        enqueue({ type: "markStepViewed" });
                      }
                    })
                  }
                }
              },
              Advancing: {
                // if specific step; go to that step and then go to Checking Conditions
                // else if more steps; idx++ and go to Checking Conditions
                // else (if no more steps); go to Done
                on: {
                  NOT_DONE: {
                    target: "Checking Conditions",
                    actions: [{ type: "saveInteraction" }]
                  },
                  DONE: [
                    {
                      target: "#Nudge.Step.Render Loop",
                      actions: [
                        { type: "reportCompleted" },
                        { type: "resetStep" },
                        { type: "resetAllSurveyResponses" },
                        { type: "saveInteraction", params: { isCompleted: true, isDismissed: false } }
                      ],
                      guard: "isTooltipNudge"
                    },
                    {
                      target: "#Nudge.Step.Done",
                      actions: [
                        { type: "reportCompleted" },
                        { type: "resetStep" },
                        { type: "saveInteraction", params: { isCompleted: true, isDismissed: false } }
                      ]
                    }
                  ]
                }
              },
              "Checking Conditions": {
                invoke: {
                  src: "StepConditionsMachine",
                  id: "StepConditionsMachine",
                  input: ({ context }) => ({
                    nudge: context.nudge,
                    stepIndex: context.stepIndex,
                    triggerEvent: context.triggerEvent,
                    searchTimeout: 5e3
                  }),
                  onDone: [
                    {
                      target: "#Nudge.Step.Done",
                      guard: {
                        type: "stepChecksFailed",
                        params: ({ event }) => ({ passed: event.output.stepChecksFailed })
                      }
                    },
                    {
                      target: "Rendering"
                    }
                  ]
                },
                description: `Perform the same step conditions check that occurs before the render loop.`
              },
              Regressing: {
                always: [
                  {
                    target: "Checking Conditions",
                    guard: "canStepBack",
                    actions: [{ type: "decrementStep" }, { type: "saveInteraction" }]
                  },
                  {
                    target: "#Nudge.Step.Done",
                    actions: [
                      { type: "reportDismissed" },
                      { type: "saveInteraction", params: { isCompleted: false, isDismissed: true } }
                    ]
                  }
                ]
              }
            },
            initial: "Rendering",
            description: `Once a nudge has rendered, it should not be interrupted by other nudges until it is dismissed, snoozed, or cannot render its next step.
The nudge manager will keep track of how many nudges are in a render loop. If we are at the limit, we will not forward any triggers.`,
            on: {
              DISMISS: {
                target: "Done",
                actions: enqueueActions(({ check, enqueue, event }) => {
                  if (check({ type: "hasSurveyResponse", params: { event } })) {
                    enqueue({ type: "reportSurveyResponse" });
                  }
                  enqueue({ type: "reportDismissed" });
                  enqueue({ type: "saveInteraction", params: { isCompleted: false, isDismissed: true } });
                })
              },
              SNOOZE: {
                target: "Done",
                actions: [
                  {
                    type: "reportSnoozed",
                    params: ({ event }) => ({
                      duration: {
                        interval: event.action?.interval,
                        value: event.action?.value
                      },
                      buttonType: event.buttonType
                    })
                  },
                  {
                    type: "saveSnoozed",
                    params: ({ event }) => ({
                      action: {
                        interval: event.action?.interval,
                        value: event.action?.value
                      }
                    })
                  }
                ]
              },
              REFRESH_NUDGE: {
                actions: [{ type: "refreshNudge", params: ({ event }) => ({ nudge: event.nudge }) }]
              },
              CLOSE: "Done",
              CLOSE_WITHOUT_REACTIVATION: "Done",
              STOP: "Done",
              FINISH: {
                target: "Done",
                actions: [
                  { type: "reportSurveyResponse" },
                  enqueueActions(({ enqueue, check, event }) => {
                    if (check({
                      type: "isDismissal",
                      params: ({ event: event2 }) => ({
                        isDismissAction: event2.action?.type === "dismiss"
                      })
                    })) {
                      enqueue({ type: "reportDismissed" });
                      enqueue({ type: "saveInteraction", params: { isCompleted: false, isDismissed: true } });
                    } else {
                      enqueue({
                        type: "reportStepCompletion",
                        params: { cta: event.cta, buttonType: event.buttonType }
                      });
                      enqueue({ type: "reportCompleted" });
                      enqueue({ type: "saveInteraction", params: { isCompleted: true, isDismissed: false } });
                    }
                  }),
                  { type: "resetStep" }
                ]
              },
              UPDATE_SURVEY_RESPONSE: {
                actions: [
                  {
                    type: "setSurveyResponses",
                    params: ({ event }) => ({
                      surveyResponse: event.surveyResponse
                    })
                  }
                ]
              }
            },
            exit: [
              enqueueActions(({ context, enqueue, event }) => {
                if (!(context?.triggerEvent?.overrides?.simulateMode || !isIncludedInCustomThrottles(nudge)) && event.type !== "STOP") {
                  if (event.type !== "CLOSE_WITHOUT_REACTIVATION") {
                    enqueue.sendTo(({ context: context2 }) => context2.parentRef, {
                      type: "TRIGGER",
                      trigger: { type: "active" },
                      source: { type: "active" }
                    });
                  }
                  const allNudgesSeenThisSession = Array.from(getAllNudgeActors(globalStore)?.values() ?? []).reduce((acc, curr) => {
                    const context2 = curr.getSnapshot().context;
                    if (context2.nudgeSeenThisSessionTs.length > 0) {
                      acc.push(context2.nudge.variantId);
                    }
                    return acc;
                  }, []);
                  enqueue.sendTo(({ context: context2 }) => context2.parentRef, {
                    type: "TRIGGER",
                    trigger: { type: "immediately" },
                    source: { type: "trigger", properties: { triggerType: "immediately" } },
                    overrides: {
                      flipLimit: true,
                      // Filter out any nudges we have already seen this session to prevent trigger loops
                      excludeNudgeIds: allNudgesSeenThisSession
                    }
                  });
                }
              }),
              { type: "closePopover" },
              { type: "sendExitRenderLoop" }
            ]
          }
        },
        exit: [{ type: "reevaluateChecklistItemGoals" }],
        entry: [{ type: "determineInitialStepIndex" }]
      }
    },
    context: ({ input }) => {
      const nudgeInteractionState = getNudgeDataFromUserStore(globalStore, nudge.variantId);
      const savedStep = (nudgeInteractionState && "currentStep" in nudgeInteractionState ? nudgeInteractionState?.currentStep : 0) ?? 0;
      const stepIndexStack = (nudgeInteractionState && "stepIndexStack" in nudgeInteractionState ? nudgeInteractionState?.stepIndexStack : []) ?? [];
      const surveyResponses = {};
      return {
        nudge,
        parentRef: input.parentRef,
        stepIndex: savedStep > nudge.steps.length - 1 ? nudge.steps.length - 1 : savedStep,
        stepIndexStack,
        surveyResponses,
        nudgeSeenThisSessionTs: [],
        hasReportedStepViewed: false,
        triggerEvent: null,
        triggerMatch: null,
        prevPassedConditions: false,
        pinGraceUntil: void 0,
        pinGraceStepIndex: void 0,
        evaluationId: null
      };
    },
    on: {
      PIN_GRACE: {
        actions: [
          {
            type: "setPinGraceUntil",
            params: ({ event }) => ({
              until: event.until,
              stepIndex: event.stepIndex
            })
          }
        ]
      },
      RESET_STATE: {
        description: "This event is dispatched when calling the sdk method `resetNudge(id: INudgeType['id'], stepIndex?: number)`.",
        target: ".Idle",
        actions: [
          { type: "setStepIndex", params: ({ event }) => ({ step: event.step }) },
          { type: "saveStepIndex" },
          { type: "resetSurveyResponses", params: ({ event }) => ({ step: event.step }) }
        ]
      },
      REFRESH_NUDGE: {
        target: ".Idle",
        actions: [{ type: "refreshNudge", params: ({ event }) => ({ nudge: event.nudge }) }]
      }
    }
  });

  // ../shared/src/products/nudges/store/nudgesManagerMachine.ts
  var NUDGES_MANAGER_ID = "NudgesManager";
  var NudgesManagerMachine = (globalStore, nudges) => setup({
    types: {},
    actions: {
      recordEvent: assign({
        event: ({ event }) => event
      }),
      // @ts-expect-error HACK: specifying the id is legal but makes this type error
      spawnNudgeMachines: assign(({ context, spawn, self: self2 }) => ({
        ...context,
        nudgeMachines: new Map(
          nudges.map((nudge) => [
            nudge.variantId.toString(),
            // @ts-expect-error HACK: specifying the id is legal but makes this type error
            spawn(NudgeMachine(globalStore, nudge), {
              id: nudge.variantId.toString(),
              input: {
                parentRef: self2
              }
            })
          ])
        )
      })),
      stopNudgeMachines: ({ context }) => {
        const nudgeActors = context.nudgeMachines.values();
        for (const actor of nudgeActors) {
          if (!shouldStopOnSimulateStart(actor.getSnapshot().context.nudge)) {
            return;
          }
          if (actor) {
            actor.send({ type: "STOP" });
            stopChild(actor);
          }
        }
      },
      stopAllNudgeMachines: ({ context }) => {
        const nudgeActors = context.nudgeMachines.values();
        for (const actor of nudgeActors) {
          if (actor) {
            stopChild(actor);
          }
        }
      },
      refreshSimulatedNudge: assign({
        debugMode: (_, params) => ({
          originalNudge: params.nudge,
          currentNudge: params.nudge
        })
      }),
      // @ts-expect-error HACK: specifying the id is legal but makes this type error
      initNudgeMachinesForDebug: assign(({ context, spawn, self: self2 }) => {
        const currentNudges = getAllNudges(globalStore);
        const getUpdatedNudges = () => {
          const { originalNudge: debugNudge } = context.debugMode;
          if (!debugNudge || currentNudges.some((nudge) => nudge.variantId === debugNudge.variantId)) {
            return currentNudges;
          }
          return [...currentNudges, debugNudge];
        };
        const updatedNudges = getUpdatedNudges();
        return {
          ...context,
          nudgeMachines: new Map(
            updatedNudges.map((nudge) => [
              nudge.variantId.toString(),
              // @ts-expect-error HACK: specifying the id is legal but makes this type error
              spawn(NudgeMachine(globalStore, nudge), {
                id: nudge.variantId.toString(),
                input: {
                  parentRef: self2
                }
              })
            ])
          )
        };
      }),
      enqueueTrigger: assign({
        // share link nudges should be prioritized in the queue
        triggerEventQueue: ({ context }, params) => {
          const updatedQueue = [...context.triggerEventQueue, params.triggerEvent];
          const sortTriggers = (a, b) => {
            const order = {
              direct: 1,
              // share links
              active: 2
              // currently active nudges
            };
            const positionA = order[a.trigger.type] || 3;
            const positionB = order[b.trigger.type] || 3;
            return positionA - positionB;
          };
          return updatedQueue.sort(sortTriggers);
        },
        triggerEvent: ({ context }) => context.triggerEventQueue[0]
      }),
      clearTriggerQueue: assign({
        triggerEventQueue: () => []
      }),
      showDebugToolbar: () => {
        setDebugToolBarVisibility(globalStore, true);
      },
      closeDebugToolbar: () => {
        setDebugToolBarVisibility(globalStore, false);
      },
      showRecorderToolbar: () => {
        setRecorderToolBarVisibility(globalStore, true);
      },
      updateSmartNudges: assign(({ context }, params) => {
        return {
          smartNudges: {
            rageClick: context.smartNudges.rageClick.filter((n) => n?.variantId !== params.nudge.variantId),
            smartDelay: context.smartNudges.smartDelay.filter((n) => n?.variantId !== params.nudge.variantId),
            userConfusion: context.smartNudges.userConfusion.filter((n) => n?.variantId !== params.nudge.variantId)
          }
        };
      }),
      cleanupSmartNudges: () => {
        removeTimedTriggers(globalStore);
      },
      // this gets set when simulate mode is engaged
      setOriginalDebuggingNudge: assign({
        debugMode: ({ context }, params) => ({
          ...context.debugMode,
          originalNudge: params.nudge
        })
      }),
      setDebuggingNudgeId: assign({
        debugMode: ({ context }, params) => {
          if (context.debugMode.currentNudge && params.nudgeId) {
            return {
              ...context.debugMode,
              currentNudge: getNudgeById(globalStore, params.nudgeId) ?? context.debugMode.currentNudge
            };
          }
          return context.debugMode;
        }
      }),
      // this gets set when simulate mode is engaged and when triggering a new nudge within simulate mode
      setDebuggingNudge: assign({
        debugMode: ({ context }, params) => {
          return {
            ...context.debugMode,
            currentNudge: params.nudge
          };
        }
      }),
      // This gets set when simulate mode is disengaged.
      // When resetting simulate mode, the editor stays closed and we want to reset the current nudge to the original nudge.
      // When ending simulate mode entirely, we reopen the editor. In this case, we should also clear the original nudge.
      unsetDebuggingNudge: assign({
        debugMode: ({ context }) => ({
          currentNudge: null,
          originalNudge: context.debugMode?.originalNudge
        })
      }),
      setTriggerEvent: assign({ triggerEvent: (_, params) => params.triggerEvent }),
      unsetTriggerEvent: assign({
        triggerEvent: () => null
      }),
      setActiveNudge: assign({
        activeNudge: (_, params) => params.nudge
      }),
      clearActiveNudge: assign({
        activeNudge: null
      }),
      handleShareLink: (_, params) => {
        const nudge = nudges.find((nudge2) => nudge2.flagKey === params.flagKey);
        if (!nudge) return;
        activatePushExperience(globalStore, nudge, { type: "share_link" });
      }
    },
    guards: {
      passesUser: () => !globalStore.isEditorPreview,
      hasDecideResults: () => !!globalStore.decide
    }
  }).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDkCu04FkCGA7bMATgMQASAgsgCIAyAogPoDKFASozQJLIDSA2gAYAuolAAHAPawAlgBdpE3KJAAPRAEYALAGYAnADpdAJiMB2ABwDdAVms6rAGhABPRAFpNpw0YHWBmgDZPU3Vza10AXwinNAxYHHwiYiYAFQB5AAUGKjoAIQBVAHFBESQQSRl5RWU1BG0An31Nc3NjAV8BLW1NJ1cEIIF9cwDTU21hzSNzLqiY9Bh4vAIwEnYAMXYWBg20zAYAYTTkNc5i4WUKuQUlMtr1XW1tQ1aja2mLIy0jXvdPbw7AsFQuFZiBYgsEssSKlyKwUtk8kUShcpFdqrdEPVdF51KYjHpugEBKZrAEfghTAEng9TMSprpzKZPNZQeCsEskix8ikqGkAOrIZFlS5VG6gO54gL6WwCfGaN547TkjxeNp+QGjYGRaJg+bsxIrYgAKiF4lRopqGh8UvUb3aAipdi0pmVgSaPms6ntjPlpICrL1iwNhH05AA7tgrrgoAACfKwFYxpiyCSEMDEFKsU6FOisU3lc3XS0Uh36V5ad7E0KvcnaIwGRkCR7WKYhfFGANxSFEUMRqOx+OJ5Op9N0agMfJMXPMdLsBg0NLkHJUfMiosYhDqLfU2zqAIBOyadT4skuRCU6z6PHmemafyaYzaTsQjkrfQ0CTYCCQOMJwhJlM02IfZ6EofIsiYTBYXhZB8ioHMmFXQt0XFDQmSMaVmjrR5jybJUz03EkpRCSxWgCe5rG6cxn31KF30-b8IF-IdANHZAUmndhqGnBdMiQyp11QhAjB0BtbGGXROjvIJyVxUkr1CAQyIoqiaKDOiPy-H9B3-YcgLoAANTh4S4nJWHnNI+POYVkLFVREE+XxpX3MIiWMYZ8L6OTiMU5SbFUnU2XUntNMY5jdNY4gcn2TgcgYdgAEV8joVI6BXayzQElD7OEowRmlWlaUk+U8JdAj6kGOw-F0EYlLCTRNDU7s31C7S-wAkde0jeRoxjKgwAAY2kb8oroGK4oXJc0v4tE7NqExcSvFsj3lBp1E889OmlFomUoukm1MJrXxDVqmJ0jq0y6-s+sG4b02i2LGFzVg0jzDKCyyuaHP3DDmneAJdBsGwSXJQJzGlExdAah1xkmHQjuDeitLO9q9LAK6etjfqhpGzNs1zGaLQ3V4STLLFwm6bRbXlWtbH0bRaTrCxRjyyYEY0hi2pYzrw266Reuxu7iBUWBZGwWR0ewAAzCXCAACm0e0BAASmIILmpOzmUe5y7eeuwXv0JwScpE2lpUeUxjA9SxsXJIJNCGBoTBJMYH39QLAw1pGwvOtH9BSQhpCgIgYw-CQxGIdZNlIZhOEwfIaHIDiqAYWD4LoI3stqOs3n0XxQhaKYGcLu2AnBu8odeNzj2GdmQq18KLvRgOg5DsOxHfaRRbAXB+agDMs0KHM3tKTLZuLSHBjvMYtzLkT7jKrz-EGKGoZ9S2Rk+OuWob33WP9wPg8TduD9blY++ITOvrqHwvCZeptEo6ZOm+Ajj1Jsw-tbPLHm3zXkcbn7FuR9-wn32AAC0GgAaz7uFS+701xZwcm2aU61zANVeA1LQskMHSgZA8WU0kmx-29lzCKnVgFtwkOHfQEDoGwJ0pfdQo8Prj2JiELwvgphBCZmXPcsliQGAPK8T060txHmoh7Lsx1SHa3IZdOhA0YEC1uiNK+xY9yA3pgSciDpKLjHJFDB2jNhhMhqvuOsJDTqAP3oo5RWNVHpj4MwlEn0NF4nUFeB88pKRfDrKePofgvAmCJCSN4NgRKNVBLgCQ354BlHVsdVxbChIHnBuWZouIqw3msIYqUjZ6hUjGADJS7s5jSMRnrTGNiRzJKJkJQGXhmhBC9Iye+DJyR+EGFocIpJbSSRvFE8pL5EbWL3rUmybiNy2lLPuJk8pJJ5UGbJdB9NGa2B8K8TotcpEjI5gA8Zus+zVINmAOpxt5rHnyabB0FEbDqFBlSMseVl6USJJ4dQVjd6o33qcmMaxIwABtIDnKQcJGqTSYboPCBYmsBFAhPBCa8iqngOy7NovXA5PyKGHyoeHUF18fBaM+BTEYVyGbkhvODW0JNdD3G6A1IZuoKn7J9tiy6lDj7UI7jQLuEte7RgJcWRWpYLAHiqn4Y8oQBGhH0MIokoiy50skcMjFO8sU62brirlNDOWB0FZMlJOURXEWGLYX0L9pVvwZp49BLRGR+nQmi1VwV1Vss1afEBoduW0MgUohhf4hXE2dGWfp9Q2xFNkgzS8VhWhKU8HDboXyNXyPRnY2Bpyg1CVtHYOVIwGrhFlHPHob9BF5y3BRHNVMRJRCiEAA */
    id: NUDGES_MANAGER_ID,
    context: {
      nudgeMachines: /* @__PURE__ */ new Map(),
      event: null,
      debugMode: {
        originalNudge: null,
        currentNudge: null
      },
      triggerEventQueue: [],
      triggerEvent: null,
      smartNudges: getSmartNudges(nudges),
      activeNudge: null
    },
    states: {
      Disabled: {
        description: 'Inactive state entered after SHUTDOWN. Does not queue triggers. Transitions to "Awaiting User Store" when a new boot cycle begins (signaled by DECIDE_REQUESTED).',
        on: {
          DECIDE_REQUESTED: {
            target: "Awaiting User Store"
          }
        }
      },
      "Awaiting User Store": {
        description: "State while the end user store (EUS) is loading during an active boot. Trigger events are queued during this period so they can be replayed once the store is ready.",
        on: {
          TRIGGER: {
            actions: [{ type: "enqueueTrigger", params: ({ event }) => ({ triggerEvent: event }) }],
            target: "Awaiting User Store",
            description: "Only triggers that match any of the spawned nudge actors' triggers will be enqueued."
          },
          END_USER_STORE_LOADED: {
            target: "Loaded User Store",
            actions: [{ type: "spawnNudgeMachines" }]
          }
        }
      },
      "Loaded User Store": {
        description: "Main operational state after the EUS has loaded. Routes through a decide check before entering the trigger loop. Can re-enter the decide flow when new decide requests arrive.",
        on: {
          CLEANUP_SMART_NUDGES: {
            target: ".",
            actions: [{ type: "updateSmartNudges", params: ({ event }) => ({ nudge: event.nudge }) }]
          },
          ENTER_RENDER_LOOP: {
            actions: [{ type: "setActiveNudge", params: ({ event }) => ({ nudge: event.nudge }) }]
          },
          EXIT_RENDER_LOOP: {
            actions: [{ type: "clearActiveNudge" }]
          },
          DECIDE_REQUESTED: ".Awaiting Decide"
        },
        states: {
          "Awaiting Decide": {
            description: "Waiting for the decide API response. Triggers are queued during this period (same as Awaiting User Store). The queue is cleared after 30s as a safety valve.",
            on: {
              DECIDE_LOADED: "Trigger Loop",
              DECIDE_ERROR: {
                target: "Decide Failed",
                actions: ["clearTriggerQueue", "unsetTriggerEvent"],
                reenter: true
              },
              TRIGGER: {
                target: "Awaiting Decide",
                actions: [{ type: "enqueueTrigger", params: ({ event }) => ({ triggerEvent: event }) }]
              }
            },
            after: {
              "30000": {
                target: "Awaiting Decide",
                actions: "clearTriggerQueue",
                description: "Safety valve: clears queued triggers after 30s to prevent stale triggers from firing if the decide API takes too long."
              }
            }
          },
          "Decide Failed": {
            description: "Terminal state when the decide API fails. No triggers will be processed. A new DECIDE_REQUESTED event from the parent state will re-enter the decide flow."
          },
          "Trigger Loop": {
            description: "Core trigger processing loop. Drains the trigger queue on entry to Listening, then forwards each trigger to nudge machines after passing the user check. In debug mode, triggers are sent with simulate overrides.",
            initial: "Listening",
            states: {
              Listening: {
                description: "Idle state that drains one queued trigger on entry via raise(). This creates a self-sustaining loop: enter Listening \u2192 drain queue \u2192 raise trigger \u2192 Checking User \u2192 Triggering \u2192 back to Listening.",
                on: {
                  TRIGGER: {
                    target: "Checking User",
                    actions: [
                      { type: "setTriggerEvent", params: ({ event }) => ({ triggerEvent: event }) },
                      {
                        type: "setDebuggingNudgeId",
                        params: ({ event }) => ({ eventType: event.type, nudgeId: event.nudgeId })
                      }
                    ]
                  }
                },
                entry: enqueueActions(({ context, enqueue }) => {
                  const { triggerEventQueue } = context;
                  const triggerEvent = triggerEventQueue.shift();
                  if (triggerEvent) {
                    enqueue.raise(triggerEvent);
                  }
                })
              },
              Triggering: {
                description: "Forwards the current trigger to all nudge machines. In debug mode, all machines receive the trigger with simulate overrides. In normal mode, machines are sorted by priority (then by last seen timestamp) and blocking nudges are closed if the trigger requests it.",
                entry: enqueueActions(({ context, enqueue }) => {
                  const { triggerEvent, debugMode, nudgeMachines } = context;
                  if (debugMode.currentNudge && triggerEvent) {
                    const debugEvent = {
                      ...triggerEvent,
                      overrides: {
                        ...triggerEvent?.overrides,
                        simulateMode: true
                      }
                    };
                    for (const machine of nudgeMachines.values()) {
                      enqueue.sendTo(machine, debugEvent);
                    }
                  } else if (triggerEvent) {
                    const sortedMachines = Array.from(nudgeMachines.values()).sort((a, b) => {
                      const priorityA = a.getSnapshot()?.context.nudge.priority ?? 2 /* Medium */;
                      const priorityB = b.getSnapshot()?.context.nudge.priority ?? 2 /* Medium */;
                      if (priorityA === priorityB) {
                        const userStoreNudgeDataA = getNudgeDataFromUserStore(
                          globalStore,
                          a.getSnapshot()?.context.nudge?.variantId
                        );
                        const lastSeenA = userStoreNudgeDataA?.lastSeenTs;
                        const userStoreNudgeDataB = getNudgeDataFromUserStore(
                          globalStore,
                          b.getSnapshot()?.context.nudge?.variantId
                        );
                        const lastSeenB = userStoreNudgeDataB?.lastSeenTs;
                        if (lastSeenA && lastSeenB) {
                          return lastSeenB - lastSeenA;
                        }
                      }
                      return priorityB - priorityA;
                    });
                    for (const machine of sortedMachines) {
                      if (triggerEvent.overrides?.closeBlockingNudges && triggerEvent.nudgeId) {
                        const nudgeToTrigger = getNudgeById(globalStore, triggerEvent.nudgeId);
                        const nudge = machine.getSnapshot().context.nudge;
                        if (nudgeToTrigger && isBlocked(nudgeToTrigger, [nudge])) {
                          enqueue.sendTo(machine, { type: "CLOSE" });
                        }
                      }
                    }
                    for (const machine of sortedMachines) {
                      enqueue.sendTo(machine, triggerEvent);
                    }
                  }
                }),
                always: "Listening"
              },
              "Checking User": {
                always: [
                  {
                    target: "Triggering",
                    guard: "passesUser",
                    reenter: true
                  },
                  "Listening"
                ],
                description: `By default, we will only forward triggers for non-admins. This prevents nudges from popping up while using the application while logged into the editor.

This can be bypassed by setting the debug or admin overrride on a trigger.`
              }
            },
            on: {
              REFRESH_SIMULATED_NUDGE: {
                actions: [{ type: "refreshSimulatedNudge", params: ({ event }) => ({ nudge: event.nudge }) }],
                target: "Trigger Loop"
              }
            }
          },
          "Checking Decide": {
            description: "Routing state on entry to Loaded User Store. If decide results already exist (e.g. from a prior fetch), skips directly to the Trigger Loop. Otherwise, waits for the decide API.",
            always: [
              {
                target: "Trigger Loop",
                guard: "hasDecideResults",
                reenter: true
              },
              {
                target: "Awaiting Decide",
                reenter: true
              }
            ]
          }
        },
        initial: "Checking Decide"
      }
    },
    initial: "Awaiting User Store",
    on: {
      "*": {
        actions: ["recordEvent"]
      },
      HANDLE_SHARE_LINK: {
        actions: [{ type: "handleShareLink", params: ({ event }) => ({ flagKey: event.flagKey }) }]
      },
      STOP_DEBUG: {
        target: ".Loaded User Store",
        actions: enqueueActions(({ context, enqueue }) => {
          const nudgeActors = context.nudgeMachines.values();
          for (const nudgeMachine of nudgeActors) {
            enqueue.sendTo(nudgeMachine, { type: "CLOSE" });
          }
          enqueue({ type: "closeDebugToolbar" });
          enqueue({ type: "unsetDebuggingNudge" });
          enqueue({ type: "unsetTriggerEvent" });
          enqueue({ type: "cleanupSmartNudges" });
          enqueue({ type: "stopAllNudgeMachines" });
        })
      },
      REFRESH_FROM_CONFIG: {
        actions: enqueueActions(({ context, enqueue, event }) => {
          const refreshedNudgeIds = event.nudges.map((nudge) => nudge.variantId.toString());
          const currentNudgeIds = Array.from(context.nudgeMachines.keys());
          if ((0, import_isEqual3.default)(refreshedNudgeIds, currentNudgeIds)) {
            for (const machine of context.nudgeMachines.values()) {
              const nudge = event.nudges.find(
                (nudge2) => nudge2.variantId === machine.getSnapshot()?.context.nudge.variantId
              );
              if (nudge) {
                enqueue.sendTo(machine, { type: "REFRESH_NUDGE", nudge });
              }
            }
            return;
          }
          for (const nudgeMachine of context.nudgeMachines.values()) {
            nudgeMachine.send({ type: "STOP" });
            stopChild(nudgeMachine);
          }
          enqueue.assign(({ context: context2, spawn, self: self2 }) => ({
            ...context2,
            nudgeMachines: new Map(
              event.nudges.map((nudge) => [
                nudge.variantId.toString(),
                // @ts-expect-error HACK: specifying the id is legal but makes this type error
                spawn(NudgeMachine(globalStore, nudge), {
                  id: nudge.variantId.toString(),
                  input: {
                    parentRef: self2
                  }
                })
              ])
            )
          }));
        })
      },
      START_DEBUG: {
        target: ".Loaded User Store.Trigger Loop",
        actions: [
          { type: "clearTriggerQueue" },
          { type: "setDebuggingNudge", params: ({ event }) => ({ nudge: event.nudge }) },
          { type: "setOriginalDebuggingNudge", params: ({ event }) => ({ nudge: event.nudge }) },
          { type: "stopNudgeMachines" },
          { type: "initNudgeMachinesForDebug" },
          { type: "showDebugToolbar" }
        ]
      },
      SHUTDOWN: {
        target: ".Disabled",
        actions: enqueueActions(({ context, enqueue }) => {
          for (const nudgeMachine of context.nudgeMachines.values()) {
            enqueue.sendTo(nudgeMachine, { type: "CLOSE" });
          }
          enqueue({ type: "stopAllNudgeMachines" });
          enqueue({ type: "clearTriggerQueue" });
          enqueue({ type: "unsetTriggerEvent" });
          enqueue({ type: "clearActiveNudge" });
          enqueue.assign({
            nudgeMachines: () => /* @__PURE__ */ new Map()
          });
        })
      }
    }
  });

  // ../shared/src/products/nudges/store/actions.ts
  var shouldDebugNudges = !!LocalStorage_default.get("debug:nudges", false);
  var sendConstantTriggers = (_) => {
    if (getSDK()?.[_configuration]?.options?.headless) return;
    restorePreviewSession(_);
    if (getPendingPreviewVariantId(_) !== null) {
      logger.debug("Skipping constant triggers due to pending preview session");
      return;
    }
    sendIndirectTrigger(_, {
      trigger: { type: "active" },
      source: { type: "active" },
      overrides: { cooldown: true, customThrottles: true, page: true }
    });
    sendIndirectTrigger(_, {
      trigger: { type: "immediately" },
      source: {
        type: "trigger",
        properties: {
          triggerType: "immediately"
        }
      }
    });
    sendIndirectTrigger(_, {
      trigger: { type: "element_appeared" },
      source: {
        type: "trigger",
        properties: {
          triggerType: "element_appeared"
        }
      }
    });
  };
  var initNudges = (_, nudges) => {
    const platformNudges = nudges.filter((nudge) => nudge.platform === __GS_PLATFORM__);
    if (_.nudgesManager) {
      _.nudgesManager.send({ type: "REFRESH_FROM_CONFIG", nudges: platformNudges });
      return;
    }
    const machine = NudgesManagerMachine(_, platformNudges);
    const actor = createActor(machine, {
      id: NUDGES_MANAGER_ID,
      inspect: (inspectionEvent) => {
        if (shouldDebugNudges && inspectionEvent.type === "@xstate.event") {
          const nudgeMachines = getAllNudgeActors(_);
          const { actorRef } = inspectionEvent;
          const targetNudge = "id" in actorRef && typeof actorRef.id === "string" ? nudgeMachines?.get(actorRef.id)?.getSnapshot().context.nudge : null;
          const { source, ...event } = inspectionEvent.event;
          logger.debug(
            JSON.stringify(
              {
                type: "NudgesManager Event",
                event: event.type,
                source,
                ...targetNudge ? { destination: { variantId: targetNudge?.variantId, title: targetNudge?.title } } : {}
              },
              null,
              2
            )
          );
        }
      }
    });
    _.nudgesManager = ref(actor);
    _.nudgesManager.start();
    setupMessageBusNudgeTriggerSubscriptions(_);
  };
  var sendIndirectTrigger = (_, triggerEventPayload) => {
    const simulatedNudge = getDebuggedNudge(_);
    if (simulatedNudge) {
      sendDirectedTrigger(_, simulatedNudge, triggerEventPayload);
    } else {
      if (getPendingPreviewVariantId(_) !== null) {
        logger.debug("Skipping indirect trigger due to pending preview session");
        return;
      }
      _.nudgesManager?.send({
        type: "TRIGGER",
        ...triggerEventPayload
      });
    }
  };
  var forceTriggerSingleNudge = (_, nudge, triggerEventPayload) => {
    const pendingPreviewVariantId = getPendingPreviewVariantId(_);
    if (pendingPreviewVariantId !== null && pendingPreviewVariantId !== nudge.variantId) {
      logger.debug("Skipping force trigger - nudge does not match pending preview session");
      return;
    }
    const defaultOverrides = {
      // allow admins to trigger nudge outside simulate mode
      admin: true,
      // don't check page conditions
      page: true,
      // don't check audience conditions
      audience: true,
      // don't check cooldown
      cooldown: true,
      // don't check that conditions have changed since last trigger
      flip: true,
      // don't check custom throttles
      customThrottles: true,
      // always start tours at first step even if they've been seen before
      stepIndex: 0,
      // special `direct` trigger should not need to match trigger conditions
      triggerMatch: true,
      closeBlockingNudges: true,
      excludeNudgeIds: []
    };
    _.nudgesManager?.send({
      type: "TRIGGER",
      trigger: { type: "direct" },
      ...triggerEventPayload,
      nudgeId: nudge.variantId,
      overrides: {
        ...defaultOverrides,
        ...triggerEventPayload.overrides
      }
    });
  };
  var sendDirectedTrigger = (_, nudge, triggerEventPayload) => {
    const pendingPreviewVariantId = getPendingPreviewVariantId(_);
    if (pendingPreviewVariantId !== null && pendingPreviewVariantId !== nudge.variantId) {
      logger.debug("Skipping directed trigger - nudge does not match pending preview session");
      return;
    }
    _.nudgesManager?.send({
      ...triggerEventPayload,
      type: "TRIGGER",
      nudgeId: nudge.variantId
    });
  };
  var refreshDecideResult = async (_) => {
    const sdk = getSDK();
    if (!_.user) {
      throw new Error("User must be provided to refresh the result from decide");
    }
    _.decide = await decide(sdk[_configuration].apiKey, _.user, _.isEditorPreview);
  };
  var startDebugSession = async (_, nudge, options = { refreshDecide: true }) => {
    const configuration = getSDK()?.[_configuration];
    const localeForConfig = options.locale ?? _.nudgeDebugToolBar.originalInitLocale;
    const previewConfig = await getPreviewConfig(configuration?.apiKey, _.isEditorPreview, localeForConfig);
    if (previewConfig?.nudges) {
      await getSDK()?._reloadNudges(previewConfig);
    }
    if (previewConfig?.themes) {
      await getSDK()?._reloadThemes({ themes: previewConfig.themes });
    }
    const adminNudge = previewConfig?.nudges.find((n) => n.variantId === nudge.variantId);
    if (!adminNudge) {
      _.services.postMessageToDashboard("FAILED_TO_LOAD_PREVIEW_NUDGE" /* FailedToLoadPreviewNudge */);
      return;
    }
    _.nudgesManager?.send({ type: "START_DEBUG", nudge: adminNudge });
    savePreviewSession({
      variantId: adminNudge.variantId,
      // toStepIndex intentionally omitted - see note above
      locale: localeForConfig,
      bypassCustomThrottles: _.nudgeDebugToolBar.bypassCustomThrottles
    });
    const overrides = options.toStepIndex !== void 0 ? { stepIndex: options.toStepIndex } : {};
    setupTimedTriggers(_, [adminNudge]);
    sendDirectedTrigger(_, adminNudge, {
      trigger: { type: "active" },
      source: { type: "active" },
      overrides: { cooldown: true, customThrottles: true, page: true, ...overrides }
    });
    sendDirectedTrigger(_, adminNudge, {
      trigger: { type: "immediately" },
      overrides,
      source: { type: "trigger", properties: { triggerType: "immediately" } }
    });
    sendIndirectTrigger(_, {
      trigger: { type: "element_appeared" },
      source: {
        type: "trigger",
        properties: {
          triggerType: "element_appeared"
        }
      }
    });
  };
  var restartDebugSession = async (_, options = {
    resetToOriginalDebugNudge: true
  }) => {
    const debugNudge = getDebuggedNudge(_, { getOriginal: !!options.resetToOriginalDebugNudge });
    if (debugNudge) {
      await stopDebugSession(_, { refreshDecide: false });
      resetNudge(_, debugNudge.variantId);
      setTimeout(() => {
        startDebugSession(_, debugNudge, {
          toStepIndex: options.toStepIndex,
          refreshDecide: false,
          locale: options.locale ?? getSDK()?.[_configuration].locale
        });
      }, 50);
    }
  };
  var stopDebugSession = async (_, options = { refreshDecide: true }) => {
    const debugNudge = getDebuggedNudge(_);
    if (debugNudge) {
      if (options.refreshDecide) {
        await refreshDecideResult(_);
      }
      clearPreviewSession();
      _.nudgesManager?.send({ type: "STOP_DEBUG" });
      if (options.restoreTriggers) {
        const sdk = getSDK();
        const originalLocale = _.nudgeDebugToolBar.originalInitLocale;
        if (originalLocale && sdk[_configuration].locale !== originalLocale) {
          sdk[_configuration].locale = originalLocale;
          await sdk._reloadNudges();
        }
        sendConstantTriggers(_);
      }
    }
  };
  var restorePreviewSession = async (_) => {
    if (getDebuggedNudge(_)) {
      logger.debug("Skipping session storage restoration - already in debug mode");
      return;
    }
    const storedSession = getStoredPreviewSession();
    if (!storedSession) {
      return;
    }
    if (storedSession.bypassCustomThrottles !== void 0) {
      _.nudgeDebugToolBar.bypassCustomThrottles = storedSession.bypassCustomThrottles;
    }
    logger.debug("Restoring preview session from session storage", storedSession);
    await startDebugSession(
      _,
      { variantId: storedSession.variantId },
      {
        toStepIndex: storedSession.toStepIndex,
        locale: storedSession.locale,
        refreshDecide: false
      }
    );
  };
  var showStepMock = (_, nudge, stepIndex, options) => {
    _.services.renderNudge(_, nudge, stepIndex ?? 0, {
      renderMode: 1 /* MOCK */,
      forceOpen: options?.forceOpen,
      overrides: options?.overrides
    });
  };
  var shutdownNudges = (_) => {
    _.nudgesManager?.send({ type: "SHUTDOWN" });
  };
  var closeAllNudgeMocks = (_) => {
    _.services.closeAllNudgeMocks(_);
  };
  var dismissNudge = (_, nudge, renderMode) => {
    if (renderMode === 1 /* MOCK */) {
      _.services.closeNudgeMock(_, nudge);
    } else {
      const actor = getNudgeActor(_, nudge.variantId);
      actor?.send({ type: "DISMISS" });
    }
  };
  var closeNudgeWithoutReactivation = (_, nudge) => {
    const actor = getNudgeActor(_, nudge.variantId);
    actor?.send({ type: "CLOSE_WITHOUT_REACTIVATION" });
  };
  var closeNudge = (_, nudge) => {
    const actor = getNudgeActor(_, nudge.variantId);
    actor?.send({ type: "CLOSE" });
  };
  var snoozeNudge = (_, nudge, duration, renderMode = 0 /* DEFAULT */) => {
    if (renderMode === 1 /* MOCK */) {
      _.services.closeNudgeMock(_, nudge);
    } else {
      const actor = getNudgeActor(_, nudge.variantId);
      actor?.send({
        type: "SNOOZE",
        action: {
          type: "snooze",
          interval: duration.interval ?? nudge.snoozeDuration.interval,
          value: duration.value ?? nudge.snoozeDuration.value
        },
        buttonType: "snooze"
      });
    }
  };
  var execStepAction = (_, nudge, stepIndex, action) => {
    if (!action) return;
    if (action?.type === "nudge") {
      resetNudge(_, nudge.variantId, {
        step: stepIndex + 1,
        dismiss: isIncludedInCustomThrottles(nudge)
      });
    }
    executeAction(_, action, nudge.variantId);
  };
  var saveProgressToEndUserStore = (_, {
    nudge,
    stepIndex,
    stepIndexStack,
    isCompleted,
    isDismissed,
    snoozed,
    // ---actions---
    activate,
    deactivate,
    markSeen
  }) => {
    const type11 = nudge.type;
    const existingLifecycleUuid = getNudgeDataFromUserStore(_, nudge.variantId)?.activelifeCycleUuid;
    const activelifeCycleUuid = activate ? v4_default() : deactivate ? "" : markSeen && !existingLifecycleUuid ? v4_default() : void 0;
    const updatedContext = {
      [Number(nudge.variantId)]: {
        type: type11,
        formFactor: nudge?.steps?.[0]?.formFactor?.type ?? "",
        currentStep: stepIndex,
        stepIndexStack,
        lastSeenTs: markSeen ? Date.now() : void 0,
        lastSeenSessionId: _.user?.getSessionId?.(),
        lastSeenDeviceId: _.user?.device_id,
        activatedTs: activate ? [Date.now()] : void 0,
        activelifeCycleUuid,
        snoozedUntilTs: snoozed ? (0, import_dayjs3.default)().add(snoozed.value, snoozed.interval).valueOf() : void 0,
        isCompleted,
        isDismissed,
        completedTs: isCompleted ? [Date.now()] : void 0,
        dismissedTs: isDismissed ? [Date.now()] : void 0,
        tagIds: nudge.tags?.map((tag) => tag.id) || []
      }
    };
    const immediate = !!(isDismissed || isCompleted || snoozed || activate);
    try {
      updateEndUserStore(_.endUserStore, updatedContext, { immediate });
    } catch (e2) {
      logger.error("Unable to save end-user state to remote", e2);
    }
  };
  var resetNudge = (_, id, options) => {
    const actor = getDebugActor(_) ?? getNudgeActor(_, id);
    if (actor) {
      if (options?.dismiss) {
        actor.send({ type: "DISMISS" });
      }
      actor.send({
        type: "RESET_STATE",
        step: options?.step ?? 0
      });
    }
    clearNudgeDataById(_, Number(id), options?.step);
  };
  var clearNudgeDataById = (_, id, step) => {
    const allNudgeData = { ..._.endUserStore.data.nudgeInteractions };
    if (step !== void 0 && step > 0 && allNudgeData[id]) {
      allNudgeData[id].currentStep = step;
    } else {
      allNudgeData[id] = null;
    }
    updateEndUserStore(_.endUserStore, allNudgeData);
  };
  var getDebugSnapshot = async (_, nudge, stepIndex) => {
    const nudgeActorContext = getNudgeActorSnapshot(_, nudge.variantId)?.context;
    const snapShot = {
      ...getGlobalChecks(_, nudge),
      ...getNudgeChecks(_, nudge),
      ...await getStepChecks(_, nudge, stepIndex)
    };
    return {
      guideOrSurvey: nudge,
      willRenderIfTriggered: Object.values(snapShot).every(({ result }) => result),
      checks: Object.fromEntries(
        Object.entries(snapShot).map(([key, value]) => [
          key,
          {
            result: value.result ? "PASS" : "FAIL",
            ...value.result ? {} : { explanation: value.explanation },
            // only show the explanation if the check fails
            ...value.detail ? { detail: value.detail } : {}
          }
        ])
      ),
      trigger: nudge.triggerConfig,
      mostRecentTrigger: nudgeActorContext?.triggerEvent?.trigger
    };
  };
  var getDebugSnapshotForHeadless = (_, nudge, skipChecks = []) => {
    const nudgeActorContext = getNudgeActorSnapshot(_, nudge.variantId)?.context;
    const snapShot = {
      ...getGlobalChecks(_, nudge),
      ...getNudgeChecks(_, nudge, skipChecks)
    };
    return {
      guideOrSurvey: nudge,
      willRenderIfTriggered: Object.values(snapShot).every(({ result }) => result),
      checks: Object.fromEntries(
        Object.entries(snapShot).map(([key, value]) => [
          key,
          {
            result: value.result ? "PASS" : "FAIL",
            ...value.result ? {} : { explanation: value.explanation },
            // only show the explanation if the check fails
            ...value.detail ? { detail: value.detail } : {}
          }
        ])
      ),
      trigger: nudge.triggerConfig,
      mostRecentTrigger: nudgeActorContext?.triggerEvent?.trigger
    };
  };
  var updateNudgeStepForPreview = (_, nudge, stepIndex, field, value) => {
    let newNudge = { ...nudge };
    newNudge = (0, import_set.default)(newNudge, `steps.${stepIndex}.${field}`, value);
    _.nudgesManager?.send({ type: "REFRESH_SIMULATED_NUDGE", nudge: newNudge });
    restartDebugSession(_, { resetToOriginalDebugNudge: false, toStepIndex: stepIndex });
  };
  var setDebugToolBarVisibility = (_, visible) => {
    _.nudgeDebugToolBar.visible = visible;
  };
  var toggleBypassCustomThrottles = (_) => {
    _.nudgeDebugToolBar.bypassCustomThrottles = !_.nudgeDebugToolBar.bypassCustomThrottles;
  };
  var setRecorderToolBarVisibility = (_, visible) => {
    _.nudgeRecorderToolBar.visible = visible;
  };
  var setEntityTimer = (_, entity) => {
    const delay = entity.triggerConfig.data.unit === "minute" ? entity.triggerConfig.data.value * 60 * 1e3 : entity.triggerConfig.data.value * 1e3;
    const timer = setTimeout(() => {
      sendDirectedTrigger(_, entity, {
        trigger: { type: "direct" },
        overrides: { triggerMatch: true },
        source: {
          type: "trigger",
          properties: {
            triggerType: "after_time"
          }
        }
      });
    }, delay);
    _.timedTriggers.set({ id: generateTriggerableEntityId(entity), entity }, timer);
  };
  var removeTimedTriggers = (_) => {
    for (const [entity, timer] of _.timedTriggers) {
      clearTimeout(timer);
      _.timedTriggers.delete(entity);
    }
  };
  var resetTimedTriggers = (_) => {
    const entriesSnapshot = Array.from(_.timedTriggers.keys());
    removeTimedTriggers(_);
    for (const { entity } of entriesSnapshot) {
      setEntityTimer(_, entity);
    }
  };
  var setupTimedTriggers = (_, nudges) => {
    removeTimedTriggers(_);
    const delayedTriggerableEntities = nudges.filter(
      (nudge) => nudge.triggerConfig.type === "after_time"
    ).sort((b, a) => (a.priority ?? 0) - (b.priority ?? 0));
    for (const entity of delayedTriggerableEntities) {
      setEntityTimer(_, entity);
    }
  };
  var execNavigationAction = (action, meta, actor) => {
    switch (action.type) {
      case "step_back": {
        actor?.send({
          type: "REGRESS",
          action,
          buttonType: meta?.buttonType
        });
        break;
      }
      case "complete":
      case "dismiss": {
        actor?.send({
          type: "FINISH",
          action,
          buttonType: meta?.buttonType,
          cta: meta?.label
        });
        break;
      }
      case "snooze": {
        actor?.send({
          type: "SNOOZE",
          action,
          buttonType: meta?.buttonType
        });
        break;
      }
      case "stay_on_step": {
        actor?.send({
          type: "STAY_ON_STEP",
          buttonType: meta?.buttonType
        });
        break;
      }
      default: {
        if (action.type === "nudge") {
          const snapshot = actor?.getSnapshot();
          const currentNudge = snapshot?.context?.nudge;
          if (currentNudge?.isCarousel) {
            const currentStepIndex = snapshot?.context?.stepIndex ?? 0;
            const isLastStep = currentStepIndex === currentNudge.steps.length - 1;
            if (!isLastStep) return false;
          }
        }
        actor?.send({
          type: "ADVANCE",
          buttonType: meta?.buttonType,
          cta: meta?.label,
          action,
          ...action.type === "go_to_step" && { step: action.value }
        });
        break;
      }
    }
    return true;
  };
  var dispatchEffects = (_, effects, variantId) => {
    if (variantId != null) {
      _.effectsSequencer?.send({ type: "RUN", effects, source: { variantId } });
    }
  };
  var execNudgeAction = (_, action, meta, renderMode, actor) => {
    if (renderMode === 1 /* MOCK */ && _.nudgeRecorderToolBar.visible) {
      return;
    }
    if (!action) {
      actor?.send({ type: "ADVANCE", buttonType: meta?.buttonType, cta: meta?.label, action: null });
      return;
    }
    if (isActionSequence(action)) {
      const variantId = actor?.getSnapshot()?.context?.nudge?.variantId;
      const executed = execNavigationAction(action.navigation, meta, actor);
      if (executed) {
        dispatchEffects(_, action.effects, variantId);
      }
      return;
    }
    execNavigationAction(action, meta, actor);
  };

  // src/actions/nudge.ts
  var nudgeActionsBridge = registerJSBridge("nudgeActions");
  nudgeActionsBridge.function("dismissNudge", (nudge) => {
    dismissNudge(window.engagement._, nudge, 0 /* DEFAULT */);
  });
  nudgeActionsBridge.function("closeNudge", (nudge) => {
    closeNudge(window.engagement._, nudge);
  });
  nudgeActionsBridge.function("closeNudgeWithoutReactivation", (nudge) => {
    closeNudgeWithoutReactivation(window.engagement._, nudge);
  });
  nudgeActionsBridge.function(
    "execNudgeAction",
    (variantId, action, meta) => {
      const actor = getNudgeActor(window.engagement._, variantId);
      execNudgeAction(window.engagement._, action, meta, 0 /* DEFAULT */, actor);
    }
  );
  nudgeActionsBridge.function("stopDebugSession", () => {
    stopDebugSession(window.engagement._, { refreshDecide: false });
  });
  nudgeActionsBridge.function("restartDebugSession", () => {
    restartDebugSession(window.engagement._, { resetToOriginalDebugNudge: true });
  });
  nudgeActionsBridge.function("forceTriggerSingleNudge", (nudge, triggerEventPayload) => {
    forceTriggerSingleNudge(window.engagement._, nudge, triggerEventPayload);
  });
  nudgeActionsBridge.function("sendDirectedTrigger", (nudge, triggerEventPayload) => {
    sendDirectedTrigger(window.engagement._, nudge, triggerEventPayload);
  });
  nudgeActionsBridge.function("toggleBypassCustomThrottles", () => {
    toggleBypassCustomThrottles(window.engagement._);
  });
  nudgeActionsBridge.function(
    "determineAction",
    (step, buttonMeta, surveyResponse) => {
      return determineAction(window.engagement._, step, {
        buttonMeta,
        surveyResponses: surveyResponse ? { [surveyResponse.blockId]: surveyResponse } : void 0
      });
    }
  );
  nudgeActionsBridge.function(
    "updateSurveyResponse",
    (variantId, surveyResponse) => {
      const actor = getNudgeActor(window.engagement._, variantId);
      actor?.send({
        type: "UPDATE_SURVEY_RESPONSE",
        surveyResponse: surveyResponse ? { [surveyResponse.blockId]: surveyResponse } : void 0
      });
    }
  );
  nudgeActionsBridge.function(
    "handleLinkTap",
    (nudgeVariantId, stepIndex, url) => {
      const actor = getNudgeActor(window.engagement._, nudgeVariantId);
      const nudge = actor?.getSnapshot().context.nudge;
      if (nudge) {
        Track.nudge.engaged(nudge, stepIndex, {
          ...actor?.getSnapshot().context,
          source: { type: "link", url },
          interactionState: getNudgeDataFromUserStore(window.engagement._, nudgeVariantId)
        });
      }
    }
  );

  // src/services/on-location-change.ts
  var locationSubscribers = [];
  var onLocationChange = (callback) => {
    locationSubscribers.push(callback);
    return () => {
      const index = locationSubscribers.indexOf(callback);
      if (index > -1) {
        locationSubscribers.splice(index, 1);
      }
    };
  };
  var notifyLocationSubscribers = (location) => {
    locationSubscribers.forEach((cb) => cb(location));
  };

  // src/actions/location.ts
  var setLocation = (_, location) => {
    _.messageBus.publish("dom_mutation");
    notifyLocationSubscribers(location);
    getAllNudgeActors(_)?.forEach((actor) => {
      const snapshot = actor.getSnapshot();
      const nudge = snapshot.context.nudge;
      if (snapshot.matches({ Step: "Render Loop" }) && shouldTemporarilyHide(_, nudge)) {
        actor?.send({ type: "CLOSE" });
      }
    });
    sendIndirectTrigger(_, {
      trigger: { type: "immediately" },
      source: { type: "trigger", properties: { triggerType: "immediately" } }
    });
  };
  registerJSBridge("locationActions").function("setLocation", (location) => {
    setLocation(window.engagement._, location);
  });

  // src/actions/simulation.ts
  var simulationActionsBridge = registerNativeBridge("simulationActions");
  var updateSimulationContext = async (_, context, triggerMatched, updateTriggerMatched) => {
    if (_.nudgeDebugToolBar.visible) {
      logger.debug("[SimulationContext] Updating simulation context");
      const simulatedNudge = context?.debugMode?.currentNudge;
      const simulatedNudgeActor = simulatedNudge ? _.nudgesManager?.getSnapshot().context.nudgeMachines.get(String(simulatedNudge.variantId)) : null;
      const currentStepIndex = simulatedNudgeActor?.getSnapshot()?.context?.stepIndex ?? 0;
      const relevantContext = {
        lastTriggerEvent: context?.triggerEvent,
        simulatedNudge,
        lastEvent: context?.event,
        currentStepIndex,
        // limits
        passesCooldown: simulatedNudge ? passesCooldown(_, simulatedNudge) : false,
        passesSnoozedConditions: simulatedNudge ? passesSnoozedConditions(_, simulatedNudge) : false,
        passesCustomThrottles: simulatedNudge ? passesCustomThrottles(_, simulatedNudge) : false,
        surveyThrottleLimit: _.organization?.surveyThrottle.limit,
        guideThrottleLimit: _.organization?.guideThrottle.limit,
        bypassCustomThrottles: _.nudgeDebugToolBar.bypassCustomThrottles,
        // targeting information
        passesPageTargeting: simulatedNudge ? passesPageTargeting(_, simulatedNudge) : false,
        passesPinnedElement: simulatedNudge ? await passesPinnedElement(_, simulatedNudge, currentStepIndex) : false,
        shouldTemporarilyHide: simulatedNudge ? shouldTemporarilyHide(_, simulatedNudge) : false,
        passesTriggerMatch: simulatedNudge && context?.triggerEvent ? await (async () => {
          if (triggerMatched) {
            return true;
          }
          const hasOverride = context.triggerEvent?.overrides?.triggerMatch;
          const baseTriggerConditionMet = passesTriggerMatch(_, simulatedNudge, context.triggerEvent);
          if (hasOverride) {
            updateTriggerMatched(true);
            return true;
          }
          if (baseTriggerConditionMet && simulatedNudge.triggerConfig.type === "element_clicked") {
            const clickedElementMatch = passesClickedElement(_, simulatedNudge, context.triggerEvent);
            if (clickedElementMatch) {
              updateTriggerMatched(true);
            }
            return clickedElementMatch;
          }
          if (baseTriggerConditionMet && simulatedNudge.triggerConfig.type === "element_appeared") {
            const triggerElementMatch = await passesTriggerElement(_, simulatedNudge, context.triggerEvent, []);
            if (triggerElementMatch) {
              updateTriggerMatched(true);
            }
            return triggerElementMatch;
          }
          if (baseTriggerConditionMet) {
            updateTriggerMatched(true);
          }
          return baseTriggerConditionMet;
        })() : false,
        passesClickedElement: simulatedNudge && context?.triggerEvent ? passesClickedElement(_, simulatedNudge, context.triggerEvent) : false,
        isAnchorableStep: simulatedNudge && isAnchorableStep(simulatedNudge.steps[currentStepIndex]) ? !!simulatedNudge.steps[currentStepIndex] : false,
        // user context
        endUser: _.user,
        screen: _.location.href
      };
      try {
        const contextJson = JSON.stringify(relevantContext);
        simulationActionsBridge.function("updateSimulationContext").call(contextJson);
      } catch (error) {
        logger.error("[SimulationContext] Error calling native bridge:", error);
      }
    } else {
      logger.debug("[SimulationContext] Skipping update because Debug toolbar is not visible");
    }
  };
  var subscribeToSimulationActions = (_) => {
    let triggerMatched = false;
    const updateTriggerMatched = (value) => {
      triggerMatched = value;
    };
    let currentNudgeActorSubscription = null;
    const subscribeToIndividualNudgeActor = () => {
      logger.debug("[SimulationContext] Subscribing to individual nudge actor");
      if (currentNudgeActorSubscription) {
        currentNudgeActorSubscription.unsubscribe();
        currentNudgeActorSubscription = null;
      }
      const simulatedNudge = _.nudgesManager?.getSnapshot().context.debugMode?.currentNudge;
      if (simulatedNudge) {
        const actor = _.nudgesManager?.getSnapshot().context.nudgeMachines.get(String(simulatedNudge.variantId));
        if (actor) {
          currentNudgeActorSubscription = actor.subscribe(() => {
            logger.debug("[SimulationContext] Nudge actor state changed");
            if (_.nudgeDebugToolBar.visible) {
              logger.debug("[SimulationContext] Updating simulation context because the nudge actor state changed");
              const managerSnapshot = _.nudgesManager?.getSnapshot();
              if (managerSnapshot) {
                logger.debug(
                  "[SimulationContext] Updating simulation context with manager snapshot",
                  JSON.stringify(managerSnapshot.context, null, 2)
                );
                updateSimulationContext(_, managerSnapshot.context, triggerMatched, updateTriggerMatched);
              }
            }
          });
        }
      }
    };
    sub(
      _,
      () => {
        logger.debug("[SimulationContext] Update occured to nudgeDebugToolBar.visible", _.nudgeDebugToolBar.visible);
        if (_.nudgeDebugToolBar.visible) {
          logger.debug("[SimulationContext] showing debug toolbar");
          simulationActionsBridge.function("showDebugToolbar").promise({});
          subscribeToIndividualNudgeActor();
        } else {
          logger.debug("[SimulationContext] hiding debug toolbar");
          simulationActionsBridge.function("hideDebugToolbar").promise({});
          updateTriggerMatched(false);
          if (currentNudgeActorSubscription) {
            currentNudgeActorSubscription.unsubscribe();
            currentNudgeActorSubscription = null;
          }
        }
      },
      [["nudgeDebugToolBar", "visible"]]
    );
    _.nudgesManager?.subscribe((x) => {
      logger.debug("[SimulationContext] Update occured to nudgesManager, updating simulation context");
      updateSimulationContext(_, x.context, triggerMatched, updateTriggerMatched);
      if (_.nudgeDebugToolBar.visible) {
        const currentSimulatedNudge = x.context.debugMode?.currentNudge;
        if (currentSimulatedNudge) {
          logger.debug(
            "[SimulationContext] Re-subscribing to individual nudge actor because the simulated nudge changed"
          );
          subscribeToIndividualNudgeActor();
        } else {
          logger.debug("[SimulationContext] No simulated nudge found, not re-subscribing to individual nudge actor");
        }
      }
    });
    sub(
      _,
      () => {
        logger.debug(
          "[SimulationContext] Update occured to nudgeDebugToolBar.bypassCustomThrottles, is visible:",
          _.nudgeDebugToolBar.visible
        );
        if (_.nudgeDebugToolBar.visible) {
          const snapshot = _.nudgesManager?.getSnapshot();
          if (snapshot) {
            logger.debug(
              "[SimulationContext] Updating simulation context because the bypassCustomThrottles changed",
              JSON.stringify(snapshot.context, null, 2)
            );
            updateSimulationContext(_, snapshot.context, triggerMatched, updateTriggerMatched);
          }
        }
      },
      [["nudgeDebugToolBar", "bypassCustomThrottles"]]
    );
  };

  // src/actions/view-hierarchy-mutation.ts
  var viewHierarchyMutationActionsBridge = registerJSBridge("viewHierarchyMutationActions");
  viewHierarchyMutationActionsBridge.function("publishViewHierarchyMutation", () => {
    window.engagement._.messageBus.publish("dom_mutation");
  });

  // src/actions/share-link.ts
  var shareLinkActionsBridge = registerJSBridge("shareLinkActions");
  shareLinkActionsBridge.function("handleShareLink", (flagKey) => {
    window.engagement._.nudgesManager?.send({ type: "HANDLE_SHARE_LINK", flagKey });
  });

  // node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
  var sides = ["top", "right", "bottom", "left"];
  var min = Math.min;
  var max = Math.max;
  var oppositeSideMap = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  var oppositeAlignmentMap = {
    start: "end",
    end: "start"
  };
  function clamp(start, value, end) {
    return max(start, min(value, end));
  }
  function evaluate(value, param) {
    return typeof value === "function" ? value(param) : value;
  }
  function getSide(placement) {
    return placement.split("-")[0];
  }
  function getAlignment(placement) {
    return placement.split("-")[1];
  }
  function getOppositeAxis(axis) {
    return axis === "x" ? "y" : "x";
  }
  function getAxisLength(axis) {
    return axis === "y" ? "height" : "width";
  }
  function getSideAxis(placement) {
    return ["top", "bottom"].includes(getSide(placement)) ? "y" : "x";
  }
  function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
  }
  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
  }
  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, (alignment) => oppositeAlignmentMap[alignment]);
  }
  function getSideList(side, isStart, rtl) {
    const lr = ["left", "right"];
    const rl = ["right", "left"];
    const tb = ["top", "bottom"];
    const bt = ["bottom", "top"];
    switch (side) {
      case "top":
      case "bottom":
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case "left":
      case "right":
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === "start", rtl);
    if (alignment) {
      list = list.map((side) => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, (side) => oppositeSideMap[side]);
  }
  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }
  function getPaddingObject(padding) {
    return typeof padding !== "number" ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }
  function rectToClientRect(rect) {
    const {
      x,
      y: y2,
      width,
      height
    } = rect;
    return {
      width,
      height,
      top: y2,
      left: x,
      right: x + width,
      bottom: y2 + height,
      x,
      y: y2
    };
  }

  // node_modules/@floating-ui/core/dist/floating-ui.core.mjs
  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === "y";
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
      case "top":
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case "bottom":
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case "right":
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case "left":
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case "start":
        coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case "end":
        coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }
  var computePosition = async (reference, floating, config) => {
    const {
      placement = "bottom",
      strategy = "absolute",
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y: y2
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i2 = 0; i2 < validMiddleware.length; i2++) {
      const {
        name,
        fn
      } = validMiddleware[i2];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y: y2,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y2 = nextY != null ? nextY : y2;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === "object") {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y: y2
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i2 = -1;
      }
    }
    return {
      x,
      y: y2,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y: y2,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = "clippingAncestors",
      rootBoundary = "viewport",
      elementContext = "floating",
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === "floating" ? "reference" : "floating";
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === "floating" ? {
      x,
      y: y2,
      width: rects.floating.width,
      height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements,
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }
  var arrow = (options) => ({
    name: "arrow",
    options,
    async fn(state) {
      const {
        x,
        y: y2,
        placement,
        rects,
        platform,
        elements,
        middlewareData
      } = state;
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getPaddingObject(padding);
      const coords = {
        x,
        y: y2
      };
      const axis = getAlignmentAxis(placement);
      const length = getAxisLength(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === "y";
      const minProp = isYAxis ? "top" : "left";
      const maxProp = isYAxis ? "bottom" : "right";
      const clientProp = isYAxis ? "clientHeight" : "clientWidth";
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
      if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
      const min$1 = minPadding;
      const max2 = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset2 = clamp(min$1, center, max2);
      const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset2 && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max2 : 0;
      return {
        [axis]: coords[axis] + alignmentOffset,
        data: {
          [axis]: offset2,
          centerOffset: center - offset2 - alignmentOffset,
          ...shouldAddOffset && {
            alignmentOffset
          }
        },
        reset: shouldAddOffset
      };
    }
  });
  var flip = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "flip",
      options,
      async fn(state) {
        var _middlewareData$arrow, _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = "bestFit",
          fallbackAxisSideDirection = "none",
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        const side = getSide(placement);
        const initialSideAxis = getSideAxis(initialPlacement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
        if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements2 = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const sides2 = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];
        if (!overflows.every((side2) => side2 <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements2[nextIndex];
          if (nextPlacement) {
            const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
            if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
            // overflows the main axis.
            overflowsData.every((d) => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
              return {
                data: {
                  index: nextIndex,
                  overflows: overflowsData
                },
                reset: {
                  placement: nextPlacement
                }
              };
            }
          }
          let resetPlacement = (_overflowsData$filter = overflowsData.filter((d) => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case "bestFit": {
                var _overflowsData$filter2;
                const placement2 = (_overflowsData$filter2 = overflowsData.filter((d) => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === "y";
                  }
                  return true;
                }).map((d) => [d.placement, d.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement2) {
                  resetPlacement = placement2;
                }
                break;
              }
              case "initialPlacement":
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };
  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some((side) => overflow[side] >= 0);
  }
  var hide = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "hide",
      options,
      async fn(state) {
        const {
          rects
        } = state;
        const {
          strategy = "referenceHidden",
          ...detectOverflowOptions
        } = evaluate(options, state);
        switch (strategy) {
          case "referenceHidden": {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: "reference"
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case "escaped": {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default: {
            return {};
          }
        }
      }
    };
  };
  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === "y";
    const mainAxisMulti = ["left", "top"].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === "number" ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: rawValue.mainAxis || 0,
      crossAxis: rawValue.crossAxis || 0,
      alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === "number") {
      crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }
  var offset = function(options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: "offset",
      options,
      async fn(state) {
        var _middlewareData$offse, _middlewareData$arrow;
        const {
          x,
          y: y2,
          placement,
          middlewareData
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
          return {};
        }
        return {
          x: x + diffCoords.x,
          y: y2 + diffCoords.y,
          data: {
            ...diffCoords,
            placement
          }
        };
      }
    };
  };
  var shift = function(options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: "shift",
      options,
      async fn(state) {
        const {
          x,
          y: y2,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: (_ref) => {
              let {
                x: x2,
                y: y3
              } = _ref;
              return {
                x: x2,
                y: y3
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y: y2
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const crossAxis = getSideAxis(getSide(placement));
        const mainAxis = getOppositeAxis(crossAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === "y" ? "top" : "left";
          const maxSide = mainAxis === "y" ? "bottom" : "right";
          const min2 = mainAxisCoord + overflow[minSide];
          const max2 = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = clamp(min2, mainAxisCoord, max2);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === "y" ? "top" : "left";
          const maxSide = crossAxis === "y" ? "bottom" : "right";
          const min2 = crossAxisCoord + overflow[minSide];
          const max2 = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = clamp(min2, crossAxisCoord, max2);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y2,
            enabled: {
              [mainAxis]: checkMainAxis,
              [crossAxis]: checkCrossAxis
            }
          }
        };
      }
    };
  };

  // src/pin-positioning/index.ts
  var pinPositioningBridge = registerJSBridge("pinPositioning");
  async function position(reference, floating, clippingRect, position2 = "auto", alignment = "center") {
    const alignmentMap = {
      left: "start",
      top: "start",
      right: "end",
      bottom: "end"
    };
    const resolvedAlignment = alignment == "center" ? void 0 : alignmentMap[alignment];
    const placementStr = position2 === "auto" ? "top" : resolvedAlignment ? `${position2}-${resolvedAlignment}` : position2;
    const arrowEl = { x: 0, y: 0, width: 24, height: 12 };
    const platform = {
      getElementRects: (data) => data,
      getDimensions: (element) => element,
      getClippingRect: () => clippingRect
    };
    const props = await computePosition(reference, floating, {
      platform,
      placement: placementStr,
      middleware: [offset(arrowEl.height), flip(), shift({ padding: 5 }), arrow({ element: arrowEl }), hide()]
    });
    const { x, y: y2, placement } = props;
    return {
      x,
      y: y2,
      placement,
      arrow: props.middlewareData.arrow,
      isHidden: props.middlewareData.hide?.referenceHidden ?? false
    };
  }
  pinPositioningBridge.function("position", position);

  // ../shared/node_modules/@amplitude/analytics-connector/dist/analytics-connector.esm.js
  var ApplicationContextProviderImpl = (
    /** @class */
    function() {
      function ApplicationContextProviderImpl2() {
      }
      ApplicationContextProviderImpl2.prototype.getApplicationContext = function() {
        return {
          versionName: this.versionName,
          language: getLanguage(),
          platform: "Web",
          os: void 0,
          deviceModel: void 0
        };
      };
      return ApplicationContextProviderImpl2;
    }()
  );
  var getLanguage = function() {
    return typeof navigator !== "undefined" && (navigator.languages && navigator.languages[0] || navigator.language) || "";
  };
  var EventBridgeImpl = (
    /** @class */
    function() {
      function EventBridgeImpl2() {
        this.queue = [];
      }
      EventBridgeImpl2.prototype.logEvent = function(event) {
        if (!this.receiver) {
          if (this.queue.length < 512) {
            this.queue.push(event);
          }
        } else {
          this.receiver(event);
        }
      };
      EventBridgeImpl2.prototype.setEventReceiver = function(receiver) {
        this.receiver = receiver;
        if (this.queue.length > 0) {
          this.queue.forEach(function(event) {
            receiver(event);
          });
          this.queue = [];
        }
      };
      return EventBridgeImpl2;
    }()
  );
  var __assign = function() {
    __assign = Object.assign || function __assign3(t14) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t14[p] = s2[p];
      }
      return t14;
    };
    return __assign.apply(this, arguments);
  };
  function __values(o) {
    var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o[s2], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return {
          value: o && o[i2++],
          done: !o
        };
      }
    };
    throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i2 = m.call(o), r, ar = [], e2;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i2.next()).done) ar.push(r.value);
    } catch (error) {
      e2 = {
        error
      };
    } finally {
      try {
        if (r && !r.done && (m = i2["return"])) m.call(i2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return ar;
  }
  var isEqual4 = function(obj1, obj2) {
    var e_1, _a;
    var primitive = ["string", "number", "boolean", "undefined"];
    var typeA = typeof obj1;
    var typeB = typeof obj2;
    if (typeA !== typeB) {
      return false;
    }
    try {
      for (var primitive_1 = __values(primitive), primitive_1_1 = primitive_1.next(); !primitive_1_1.done; primitive_1_1 = primitive_1.next()) {
        var p = primitive_1_1.value;
        if (p === typeA) {
          return obj1 === obj2;
        }
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (primitive_1_1 && !primitive_1_1.done && (_a = primitive_1.return)) _a.call(primitive_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    if (obj1 == null && obj2 == null) {
      return true;
    } else if (obj1 == null || obj2 == null) {
      return false;
    }
    if (obj1.length !== obj2.length) {
      return false;
    }
    var isArrayA = Array.isArray(obj1);
    var isArrayB = Array.isArray(obj2);
    if (isArrayA !== isArrayB) {
      return false;
    }
    if (isArrayA && isArrayB) {
      for (var i2 = 0; i2 < obj1.length; i2++) {
        if (!isEqual4(obj1[i2], obj2[i2])) {
          return false;
        }
      }
    } else {
      var sorted1 = Object.keys(obj1).sort();
      var sorted2 = Object.keys(obj2).sort();
      if (!isEqual4(sorted1, sorted2)) {
        return false;
      }
      var result_1 = true;
      Object.keys(obj1).forEach(function(key) {
        if (!isEqual4(obj1[key], obj2[key])) {
          result_1 = false;
        }
      });
      return result_1;
    }
    return true;
  };
  var ID_OP_SET = "$set";
  var ID_OP_UNSET = "$unset";
  var ID_OP_CLEAR_ALL = "$clearAll";
  if (!Object.entries) {
    Object.entries = function(obj) {
      var ownProps = Object.keys(obj);
      var i2 = ownProps.length;
      var resArray = new Array(i2);
      while (i2--) {
        resArray[i2] = [ownProps[i2], obj[ownProps[i2]]];
      }
      return resArray;
    };
  }
  var IdentityStoreImpl = (
    /** @class */
    function() {
      function IdentityStoreImpl2() {
        this.identity = { userProperties: {} };
        this.listeners = /* @__PURE__ */ new Set();
      }
      IdentityStoreImpl2.prototype.editIdentity = function() {
        var self2 = this;
        var actingUserProperties = __assign({}, this.identity.userProperties);
        var actingIdentity = __assign(__assign({}, this.identity), { userProperties: actingUserProperties });
        return {
          setUserId: function(userId) {
            actingIdentity.userId = userId;
            return this;
          },
          setDeviceId: function(deviceId) {
            actingIdentity.deviceId = deviceId;
            return this;
          },
          setUserProperties: function(userProperties) {
            actingIdentity.userProperties = userProperties;
            return this;
          },
          setOptOut: function(optOut) {
            actingIdentity.optOut = optOut;
            return this;
          },
          updateUserProperties: function(actions) {
            var e_1, _a, e_2, _b, e_3, _c;
            var actingProperties = actingIdentity.userProperties || {};
            try {
              for (var _d = __values(Object.entries(actions)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var _f = __read(_e.value, 2), action = _f[0], properties = _f[1];
                switch (action) {
                  case ID_OP_SET:
                    try {
                      for (var _g = (e_2 = void 0, __values(Object.entries(properties))), _h = _g.next(); !_h.done; _h = _g.next()) {
                        var _j = __read(_h.value, 2), key = _j[0], value = _j[1];
                        actingProperties[key] = value;
                      }
                    } catch (e_2_1) {
                      e_2 = { error: e_2_1 };
                    } finally {
                      try {
                        if (_h && !_h.done && (_b = _g.return)) _b.call(_g);
                      } finally {
                        if (e_2) throw e_2.error;
                      }
                    }
                    break;
                  case ID_OP_UNSET:
                    try {
                      for (var _k = (e_3 = void 0, __values(Object.keys(properties))), _l = _k.next(); !_l.done; _l = _k.next()) {
                        var key = _l.value;
                        delete actingProperties[key];
                      }
                    } catch (e_3_1) {
                      e_3 = { error: e_3_1 };
                    } finally {
                      try {
                        if (_l && !_l.done && (_c = _k.return)) _c.call(_k);
                      } finally {
                        if (e_3) throw e_3.error;
                      }
                    }
                    break;
                  case ID_OP_CLEAR_ALL:
                    actingProperties = {};
                    break;
                }
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_e && !_e.done && (_a = _d.return)) _a.call(_d);
              } finally {
                if (e_1) throw e_1.error;
              }
            }
            actingIdentity.userProperties = actingProperties;
            return this;
          },
          commit: function() {
            self2.setIdentity(actingIdentity);
            return this;
          }
        };
      };
      IdentityStoreImpl2.prototype.getIdentity = function() {
        return __assign({}, this.identity);
      };
      IdentityStoreImpl2.prototype.setIdentity = function(identity2) {
        var originalIdentity = __assign({}, this.identity);
        this.identity = __assign({}, identity2);
        if (!isEqual4(originalIdentity, this.identity)) {
          this.listeners.forEach(function(listener) {
            listener(identity2);
          });
        }
      };
      IdentityStoreImpl2.prototype.addIdentityListener = function(listener) {
        this.listeners.add(listener);
      };
      IdentityStoreImpl2.prototype.removeIdentityListener = function(listener) {
        this.listeners.delete(listener);
      };
      return IdentityStoreImpl2;
    }()
  );
  var safeGlobal = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : self;
  var AnalyticsConnector = (
    /** @class */
    function() {
      function AnalyticsConnector2() {
        this.identityStore = new IdentityStoreImpl();
        this.eventBridge = new EventBridgeImpl();
        this.applicationContextProvider = new ApplicationContextProviderImpl();
      }
      AnalyticsConnector2.getInstance = function(instanceName) {
        if (!safeGlobal["analyticsConnectorInstances"]) {
          safeGlobal["analyticsConnectorInstances"] = {};
        }
        if (!safeGlobal["analyticsConnectorInstances"][instanceName]) {
          safeGlobal["analyticsConnectorInstances"][instanceName] = new AnalyticsConnector2();
        }
        return safeGlobal["analyticsConnectorInstances"][instanceName];
      };
      return AnalyticsConnector2;
    }()
  );

  // ../shared/src/sdk/createProxy.ts
  var ASYNC_METHODS_SNIPPET = ["boot"];
  var ASYNC_METHODS = ["boot"];
  var DEFAULT_INSTANCE_NAME = "$default_instance";
  function createProxy(loadAsyncScripts) {
    const existingProxy = typeof window !== "undefined" ? window.engagement : void 0;
    let bundleFailedToLoad = false;
    const proxy2 = {
      _q: existingProxy?._q ?? [],
      _configuration: {
        apiKey: existingProxy?._configuration?.apiKey ?? "",
        serverUrl: existingProxy?._configuration?.serverUrl,
        chatUrl: existingProxy?._configuration?.chatUrl,
        mediaUrl: existingProxy?._configuration?.mediaUrl,
        serverZone: existingProxy?._configuration?.serverZone ?? "US",
        options: {
          ...existingProxy?._configuration?.options
        }
      },
      /**
       * Initializes Guides and Surveys, mounting parent containers to the document body. This will **not** make them available right away.
       * You must use `window.engagement.boot('user')` to identify the end user first.
       *
       * @param {string} apiKey Amplitude API Key
       * @param {InitOptions} [initOptions] Optional configuration options
       */
      init(apiKey, initOptions) {
        if (proxy2._configuration.apiKey) {
          console.log("Engagement SDK has already been initialized. Ignoring additional init call.");
          return;
        }
        if (initOptions?.useEngagementDomain) {
          const isEU = (initOptions.serverZone ?? proxy2._configuration.serverZone) === "EU";
          const domain = "amplitudeengagement.com";
          if (!initOptions.serverUrl) {
            initOptions.serverUrl = isEU ? `https://gs.eu.${domain}` : `https://gs.${domain}`;
          }
          if (!initOptions.chatUrl) {
            initOptions.chatUrl = isEU ? `https://houston-chat.eu.${domain}` : `https://houston-chat.${domain}`;
          }
          if (!initOptions.mediaUrl) {
            initOptions.mediaUrl = isEU ? `https://engagement-static.eu.${domain}` : `https://engagement-static.${domain}`;
          }
          if (!initOptions.cdnUrl) {
            initOptions.cdnUrl = isEU ? `https://cdn.eu.${domain}` : `https://cdn.${domain}`;
          }
        }
        proxy2._configuration = {
          ...proxy2._configuration,
          ...initOptions,
          apiKey,
          options: { splitting: true, ...proxy2._configuration.options, ...initOptions?.options }
        };
        if (proxy2._configuration?.options?.logger) {
          proxy2._configuration.options.logger.enable(proxy2._configuration.options.logLevel ?? 2);
        }
        let bundleURL = void 0;
        if (initOptions?.cdnUrl) {
          if (proxy2._configuration.options.splitting) {
            bundleURL = `${initOptions.cdnUrl}/engagement-browser/prod/split/index.js`;
          } else {
            bundleURL = initOptions.cdnUrl + "/engagement-browser/prod/index.min.js.gz";
          }
        } else {
          const cdnBaseUrl = proxy2._configuration.serverZone === "EU" ? "https://cdn.eu.amplitude.com" : "https://cdn.amplitude.com";
          if (proxy2._configuration.options.splitting) {
            bundleURL = `${cdnBaseUrl}/engagement-browser/prod/split/index.js`;
          } else {
            bundleURL = `${cdnBaseUrl}/engagement-browser/prod/index.min.js.gz`;
          }
        }
        let timeoutId = null;
        const clearQueueAndCleanup = () => {
          bundleFailedToLoad = true;
          if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
          }
          if (proxy2._q && proxy2._q.length > 0) {
            console.warn(
              `Engagement SDK failed to load within ${LOAD_TIMEOUT_MS}ms. Resolving pending calls gracefully.`
            );
            while (proxy2._q.length > 0) {
              const item = proxy2._q.shift();
              if (!item) continue;
              const methodName = item[0];
              const isAsyncMethod = ASYNC_METHODS_SNIPPET.includes(methodName);
              console.warn(
                `Engagement SDK method '${methodName}' still in queue (isAsyncMethod=${isAsyncMethod}); attempting to resolve as no-op.`
              );
              if (isAsyncMethod) {
                if (item[1] instanceof Function && item[2] instanceof Function) {
                  const resolve = item[1];
                  console.warn(`Engagement SDK method '${methodName}' resolved as no-op due to script loading failure`);
                  resolve(void 0);
                }
              }
            }
          }
        };
        loadAsyncScripts(
          bundleURL,
          proxy2._configuration.options.splitting ? "module" : void 0,
          initOptions?.nonce,
          clearQueueAndCleanup
        );
        const LOAD_TIMEOUT_MS = 1e4;
        timeoutId = setTimeout(() => {
          clearQueueAndCleanup();
        }, LOAD_TIMEOUT_MS);
      },
      plugin(options) {
        const initFunc = proxy2.init;
        return {
          name: "@amplitude/engagement-browser",
          type: "enrichment",
          async setup(config, client) {
            const instanceName = config.instanceName ?? DEFAULT_INSTANCE_NAME;
            const identityStore = AnalyticsConnector.getInstance(instanceName).identityStore;
            initFunc(config.apiKey, {
              serverZone: config.serverZone,
              ...options,
              options: { logLevel: config.logLevel, logger: config.loggerProvider, ...options?.options }
            });
            const integrations = [
              {
                track: (event) => {
                  client.track(event);
                }
              }
            ];
            await window.engagement.boot({
              user: () => {
                const identity2 = identityStore.getIdentity();
                return {
                  user_id: client.getUserId(),
                  device_id: client.getDeviceId(),
                  user_properties: identity2.userProperties,
                  getSessionId: client.getSessionId
                };
              },
              integrations
            });
            identityStore.addIdentityListener((identity2) => {
              if (!window.engagement?._.user || !window.engagement?._analytics.hasBooted) {
                console.warn(`Engagement SDK not booted. Ignoring identity change.`);
                return;
              }
              if (window.engagement?._.user?.user_id !== identity2.userId) {
                window.engagement.shutdown();
                window.engagement.boot({
                  user: () => {
                    const identity3 = identityStore.getIdentity();
                    return {
                      user_id: client.getUserId(),
                      device_id: client.getDeviceId(),
                      user_properties: identity3.userProperties,
                      getSessionId: client.getSessionId
                    };
                  },
                  integrations
                });
              } else {
                window.engagement._setUserProperties(identity2.userProperties);
              }
            });
          },
          async execute(context) {
            window.engagement.forwardEvent(context);
            return context;
          }
        };
      }
    };
    const sdk = proxy2;
    return new Proxy(proxy2, {
      get: function(_, prop) {
        if (prop in sdk) return sdk[prop];
        if (prop === "then") return void 0;
        if (prop === "gs" || prop === "rc") {
          return new Proxy(
            {},
            {
              get: function(_2, nestedProp) {
                return function() {
                  const args = Array.from(arguments);
                  const methodPath = `${prop}.${nestedProp}`;
                  args.unshift(methodPath);
                  proxy2._q.push(args);
                };
              }
            }
          );
        }
        if (ASYNC_METHODS_SNIPPET.includes(prop)) {
          return function() {
            const a = Array.prototype.slice.call(arguments);
            return new Promise((resolve, reject) => {
              a.unshift(prop, resolve, reject);
              proxy2._q.push(a);
              if (bundleFailedToLoad) {
                resolve(void 0);
              }
            });
          };
        }
        return function() {
          const a = Array.prototype.slice.call(arguments);
          a.unshift(prop);
          proxy2._q.push(a);
        };
      }
    });
  }

  // ../shared/src/sdk/proxyHelpers.ts
  var convertProxyObjectToRealObject = async (instance, queue) => {
    const resolveNestedMethod = (obj, methodPath) => {
      const pathParts = methodPath.split(".");
      let current = obj;
      for (const part of pathParts) {
        if (!(part in current)) {
          logger.warn(`Engagement SDK method ${methodPath} is not defined.`);
          return void 0;
        }
        current = current[part];
      }
      return current;
    };
    const call = async (item) => {
      const args = [...item];
      const methodPath = args.shift();
      const method = resolveNestedMethod(instance, methodPath);
      if (!method) return;
      if (ASYNC_METHODS_SNIPPET.includes(methodPath)) {
        if (args[0] instanceof Function) {
          const resolve = args.shift();
          const reject = args.shift();
          try {
            await method.bind(instance)(...args).then(resolve, reject);
          } catch (err) {
            logger.error(err);
          }
        } else {
          await method.bind(instance)(...args);
        }
      } else {
        await method.bind(instance)(...args);
      }
    };
    const callAll = async (fnName) => {
      do {
        const i2 = queue.findIndex((item2) => item2?.[0] === fnName);
        if (i2 === -1) break;
        const item = queue.splice(i2, 1)[0];
        await call(item);
      } while (true);
    };
    const bootFinished = callAll("boot");
    const lingeringBootCalls = [];
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item) continue;
      const fnName = item[0];
      if (fnName === "boot") {
        lingeringBootCalls.push(item);
        continue;
      }
      if (ASYNC_METHODS.includes(fnName)) {
        logger.debug("Scheduling async call", fnName);
        await call(item);
        logger.debug("Finished async call", fnName);
      } else {
        logger.debug("Scheduling sync call", fnName);
        call(item).catch((e2) => {
          logger.warn(`Error processing queued call for ${fnName}`, e2);
          throw e2;
        });
        logger.debug("Finished sync call", fnName);
      }
    }
    queue.length = 0;
    bootFinished.then(async () => {
      for (let idx = 0; idx < lingeringBootCalls.length; idx++) {
        const item = lingeringBootCalls[idx];
        await call(item);
      }
    });
    return instance;
  };

  // ../shared/src/store/util/bindActions.ts
  var bindActions = (_, actions) => {
    const bound = {};
    Object.keys(actions).forEach((k) => {
      bound[k] = actions[k].bind(null, _);
    });
    return bound;
  };

  // ../shared/src/sdk/sdk.ts
  var import_throttle = __toESM(require_throttle());

  // ../shared/src/products/resource-center/service-actions.ts
  var service_actions_exports2 = {};
  __export(service_actions_exports2, {
    previewAutopilotKeywords: () => previewAutopilotKeywords,
    previewContentItem: () => previewContentItem,
    previewRecSet: () => previewRecSet,
    previewResourceCenter: () => previewResourceCenter,
    setInitialPage: () => setInitialPage,
    setResourceCenterFilter: () => setResourceCenterFilter,
    showResourceCenter: () => showResourceCenter
  });

  // ../shared/src/products/resource-center/store/actions.ts
  var showResourceCenter = (_, show) => {
    _.services.showResourceCenter(_, show);
  };
  var previewRecSet = (_, recSet) => {
    _.services.previewRecSet(_, recSet);
  };
  var previewResourceCenter = (_, resourceCenter, quickLinks) => {
    _.services.previewResourceCenter(_, resourceCenter, quickLinks);
  };
  var previewAutopilotKeywords = (_, keywords) => {
    _.services.previewAutopilotKeywords(_, keywords);
  };
  var previewContentItem = (_, contentItemId) => {
    _.services.setCurrentContentId(_, contentItemId);
  };
  var setInitialPage = (_, navigateTo) => {
    _.resourceCenter.initialPage = navigateTo;
  };
  var setResourceCenterFilter = (_, filter) => {
    _.resourceCenter.filter = filter;
  };

  // ../shared/src/services/analytics/client.ts
  var addPageProperties = (event) => {
    if (typeof window === "undefined" || typeof document === "undefined") {
      return event;
    }
    return {
      ...event,
      event_properties: {
        ...event.event_properties,
        ["[Guides-Surveys] Page" /* Page */]: {
          domain: window.location?.hostname,
          hash: window.location?.hash,
          path: window.location?.pathname,
          query: window.location?.search,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          title: document.title
        }
      }
    };
  };
  var addVersion = (event) => {
    return {
      ...event,
      event_properties: {
        ...event.event_properties,
        ["[Guides-Surveys] Version" /* Version */]: "1"
      }
    };
  };
  var enrichEvent = (event) => {
    event = addVersion(event);
    event = addPageProperties(event);
    return event;
  };
  var Analytics = class {
    hasBooted = false;
    integrations;
    constructor(integrations) {
      this.integrations = integrations;
    }
    trackEvent(name, properties = {}) {
      this.track(name, properties);
    }
    track(event_type, event_properties = {}) {
      const event = {
        event_type,
        event_properties
      };
      if (!this.hasBooted) {
        logger.warn("Events cannot be tracked before `boot` is called");
        return;
      }
      try {
        const enrichedEvent = enrichEvent(event);
        logger.debug("Tracking event", JSON.stringify(enrichedEvent, null, 2));
        try {
          this.integrations().forEach((i2) => {
            i2.track?.({
              event_type: enrichedEvent.event_type,
              event_properties: enrichedEvent.event_properties
            });
          });
        } catch (e2) {
          logger.error("Unexpected error tracking event; ignoring", { error: e2 });
        }
      } catch (error) {
        logger.error("Unexpected error logging event; ignoring", { error });
      }
    }
    setBootStatus(hasBooted) {
      this.hasBooted = hasBooted;
    }
  };

  // ../shared/src/sdk/sdk.ts
  var _reloadTargets = ["_reloadOrganization", "_reloadNudges", "_reloadThemes"];
  var DEFAULT_OPTIONS = {};
  var EngagementSDK = class {
    _;
    nudgeActions;
    resourceCenterActions;
    globalActions;
    _analytics = new Analytics(() => this._.integrations);
    _configuration = {
      serverZone: "US",
      serverUrl: void 0,
      mediaUrl: void 0,
      apiKey: "",
      options: { ...DEFAULT_OPTIONS }
    };
    _initStarted = false;
    _isProxy = false;
    _fingerprint;
    _throttledDecide;
    _autoRefreshTimer = null;
    _isDisabled = false;
    _lastUsedBootOptions;
    _cancelDecide = null;
    _cancelBoot = null;
    constructor(_, sdkConfig) {
      this._ = _;
      this.nudgeActions = bindActions(_, service_actions_exports);
      this.resourceCenterActions = bindActions(_, service_actions_exports2);
      this.globalActions = bindActions(_, global_actions_exports);
      this._configuration = {
        ...this._configuration,
        ...sdkConfig,
        options: { ...this._configuration.options, ...sdkConfig.options }
      };
      if (this._configuration.options.logger) {
        this._configuration.options.logger.enable(this._configuration.options.logLevel ?? 2);
      }
      this._throttledDecide = (0, import_throttle.default)(async () => {
        await this.decide();
        this.nudgeActions.sendConstantTriggers();
      }, 1e4);
    }
    /**
     * Initializes the Engagement SDK. This will usually not be necessary as it happens automatically when you do amplitude.add(engagementPlugin());
     *
     * @param {string} apiKey Amplitude API Key
     * @param {InitOptions} [initOptions]
     */
    init(apiKey, initOptions) {
      if (this._configuration.apiKey) {
        logger.warn("Engagement SDK has already been initialized. Ignoring additional init call.");
        return;
      }
      this._configuration = {
        ...this._configuration,
        apiKey,
        ...initOptions,
        options: { ...this._configuration.options, ...initOptions?.options }
      };
      if (this._configuration.options.logger) {
        this._configuration.options.logger.enable(this._configuration.options.logLevel ?? 2);
      }
    }
    plugin(_initOptions) {
      const setup2 = async (config, client) => {
        const instanceName = config.instanceName ?? DEFAULT_INSTANCE_NAME;
        const identityStore = AnalyticsConnector.getInstance(instanceName).identityStore;
        await this.boot({
          user: () => {
            const identity2 = identityStore.getIdentity();
            return {
              user_id: client.getUserId(),
              device_id: client.getDeviceId(),
              user_properties: identity2.userProperties,
              getSessionId: client.getSessionId
            };
          },
          integrations: [
            {
              track: (event) => {
                client.track(event);
              }
            }
          ]
        });
        identityStore.addIdentityListener((identity2) => {
          this._setUserProperties(identity2.userProperties);
        });
      };
      const execute = async (context) => {
        this.forwardEvent(context);
        return context;
      };
      return {
        name: "@amplitude/engagement-browser",
        type: "enrichment",
        setup: setup2,
        execute
      };
    }
    /**
     * Transforms the result from getAllGuidesAndSurveys to a headless-friendly format
     * by removing sensitive internal data like conditions arrays
     */
    transformForHeadless = (items) => {
      return items.map((item) => {
        const result = JSON.parse(JSON.stringify(item));
        if (result.lifecycleConfig?.conditions) {
          delete result.lifecycleConfig.conditions;
        }
        if (result.pageTargeting?.conditions) {
          delete result.pageTargeting.conditions;
        }
        if (result.temporarilyHideTargeting?.conditions) {
          delete result.temporarilyHideTargeting.conditions;
        }
        if (result.lifeCycleState?.checks?.sessionProperties) {
          delete result.lifeCycleState.checks.sessionProperties;
        }
        if (result.lifeCycleState?.checks?.limits?.detail?.limits?.conditions) {
          delete result.lifeCycleState.checks.limits.detail.limits.conditions;
        }
        if (result.lifeCycleState?.willRenderIfTriggered !== void 0) {
          result.lifeCycleState.passesAllChecks = result.lifeCycleState.willRenderIfTriggered;
          delete result.lifeCycleState.willRenderIfTriggered;
        }
        return result;
      });
    };
    gs = {
      /**
       * Resets a guide or survey to a specific step. If no step is provided, resets the nudge to initial step.
       * If the nudge is currently active, it will become inactive.
       *
       * @param id The id of the nudge to reset
       * @param step The step to reset the nudge to
       */
      reset: (key, step) => {
        const nudge = getNudgeByFlagKey(this._, key);
        if (!nudge) {
          logger.warn(`gs.reset: Guide or survey with flagKey: ${key} not found`);
          return;
        }
        this.nudgeActions.resetNudge(nudge?.variantId, { step });
      },
      getAllGuidesAndSurveys: (filterOptions, skipChecks = []) => {
        const allActors = getAllNudgeActors(this._);
        if (!allActors) return [];
        const retval = [];
        for (const actor of allActors.values()) {
          const nudge = actor.getSnapshot().context.nudge;
          const eustoreSnapshot = getNudgeDataFromUserStore(this._, nudge.variantId);
          const rendering = actor.getSnapshot().matches({ Step: "Render Loop" });
          const active = !!eustoreSnapshot?.activelifeCycleUuid;
          const debugSnapshot = getDebugSnapshotForHeadless(this._, nudge, skipChecks);
          const lifeCycleState = {
            activelifeCycleUuid: eustoreSnapshot?.activelifeCycleUuid || "",
            currentStep: eustoreSnapshot?.currentStep || 0,
            isCompleted: eustoreSnapshot?.isCompleted || false,
            isDismissed: eustoreSnapshot?.isDismissed || false,
            isChecklistExpanded: eustoreSnapshot?.isChecklistExpanded ?? true,
            steps: eustoreSnapshot?.steps || {},
            shouldShow: rendering || active,
            checks: debugSnapshot?.checks || {},
            willRenderIfTriggered: debugSnapshot?.willRenderIfTriggered || false
          };
          if (filterOptions?.onlyEligible && !lifeCycleState.willRenderIfTriggered) {
            continue;
          }
          if (filterOptions?.variantIds && !filterOptions.variantIds.includes(nudge.variantId)) {
            continue;
          }
          retval.push({
            ...nudge,
            lifeCycleState
          });
        }
        return this.transformForHeadless(retval);
      },
      getPreviewGuideOrSurvey: async (variantId) => {
        const configuration = getSDK()?.[_configuration];
        const previewConfig = await getPreviewConfig(configuration?.apiKey);
        if (previewConfig?.nudges) {
          await getSDK()?._reloadNudges(previewConfig);
        }
        const nudge = this.gs.getAllGuidesAndSurveys({ variantIds: [variantId] }, ["userTargeting"])[0];
        nudge.lifeCycleState.checks.userTargeting = {
          result: "PASS",
          explanation: "User targeting always passes in preview mode",
          detail: {
            userTargeting: nudge.flagKey
          }
        };
        nudge.lifeCycleState.willRenderIfTriggered = Object.values(nudge.lifeCycleState.checks).every(
          ({ result }) => result === "PASS"
        );
        return nudge;
      },
      /**
       * Returns a list of active and visible guides or surveys.
       */
      list: () => {
        const retval = [];
        const allActors = getAllNudgeActors(this._);
        if (!allActors) return retval;
        for (const actor of allActors.values()) {
          const nudge = actor.getSnapshot().context.nudge;
          const eustoreSnapshot = getNudgeDataFromUserStore(this._, nudge.variantId);
          const rendering = actor.getSnapshot().matches({ Step: "Render Loop" });
          const active = !!eustoreSnapshot?.activelifeCycleUuid;
          if (!active && !rendering) continue;
          retval.push({
            id: nudge.variantId,
            step: eustoreSnapshot?.currentStep,
            title: nudge.title,
            status: rendering ? "visible" : "active",
            key: nudge.flagKey
          });
        }
        return retval;
      },
      /**
       * Manually trigger a guide or survey by its corresponding flag key.
       */
      show: (flagKey, step = 0) => {
        const nudge = getNudgeByFlagKey(this._, flagKey);
        if (nudge) {
          this.nudgeActions.closeAllNudgeMocks();
          this.nudgeActions.forceTriggerSingleNudge(nudge, { source: { type: "sdk" }, overrides: { stepIndex: step } });
        } else {
          logger.error(`triggerNudge: Nudge with key: ${flagKey} not found`);
        }
      },
      /**
       * Force close all active guides and surveys
       * Analytics events will not be sent for guides or surveys that are closed this way.
       */
      closeAll: () => {
        getAllNudgeActors(this._)?.forEach((actor) => {
          actor?.send({ type: "DISMISS" });
        });
      }
    };
    rc = {
      /**
       * Opens the Resource Center widget.
       */
      open: () => {
        this.resourceCenterActions.showResourceCenter(true);
      },
      /**
       * Closes the Resource Center widget.
       */
      close: () => {
        this.resourceCenterActions.showResourceCenter(false);
      },
      /**
       * Toggles the Resource Center widget visibility.
       */
      toggle: () => {
        this.resourceCenterActions.showResourceCenter(!this._.resourceCenter.visible);
      }
    };
    /**
     * Sets a router function can be used during navigation to update the page's URL without triggering a reload..
     *
     * @param routerFn The router function. It should accept the following arguments:
     * * `url` {string} The url to navigate to
     */
    setRouter(routerFn) {
      this.globalActions.addCallbacks({ "engagement-router": routerFn });
    }
    /**
     * Updates the localization locale. This will trigger a re-fetch of the config and refresh all nudges.
     *
     * @param locale The new locale code (e.g., 'en-US' or 'en').
     */
    async updateLanguage(locale) {
      if (this._configuration) {
        this._configuration.locale = locale;
      }
      const updatedConfig = await getEndUserConfig(this._configuration.apiKey);
      const refreshedNudges = updatedConfig.nudges;
      getAllNudgeActors(this._)?.forEach((actor) => {
        const nudge = refreshedNudges.find((nudge2) => nudge2.variantId === actor.getSnapshot().context.nudge.variantId);
        if (nudge) {
          actor?.send({ type: "REFRESH_NUDGE", nudge });
        }
      });
    }
    async decide() {
      this._cancelDecide?.();
      let cancelled = false;
      this._cancelDecide = () => {
        cancelled = true;
      };
      const user = this._.user;
      if (!user) {
        logger.error("User must be set before calling decide");
        return;
      }
      if (!this._configuration.apiKey) {
        logger.error("API key must be set before calling decide");
        return;
      }
      try {
        this._.nudgesManager?.send({ type: "DECIDE_REQUESTED" });
        const result = await decide_default.decide(this._configuration.apiKey, user, this._.isEditorPreview);
        if (cancelled) return;
        this._.decide = result;
        this._.nudgesManager?.send({ type: "DECIDE_LOADED" });
        return this._.decide;
      } catch (e2) {
        if (cancelled) return;
        logger.error("Failed to fetch decide data", e2);
        this._.nudgesManager?.send({ type: "DECIDE_ERROR" });
      }
    }
    enable() {
      if (!this._isDisabled) {
        logger.warn("enable() called, but Engagement SDK is already enabled. This is a no-op.");
        return;
      }
      if (!this._lastUsedBootOptions) {
        logger.debug(
          "enable() called before boot() was ever called; there are no boot options to use. Will not boot() right now."
        );
        return;
      }
      this._isDisabled = false;
      this.boot(this._lastUsedBootOptions);
    }
    disable() {
      this._isDisabled = true;
      this.shutdownWithoutClearingBootOptions();
    }
    shutdownWithoutClearingBootOptions() {
      this._cancelBoot?.();
      this._cancelDecide?.();
      this._analytics.setBootStatus(false);
      this._clearAutoRefreshTimer();
      this._.integrations = [];
      this._.decide = void 0;
      this._.user = void 0;
      this._.hasBooted = false;
      this._.nudgesManager?.send({ type: "SHUTDOWN" });
      this._.endUserStore.reset();
      if (this._.effectsSequencer) {
        this._.effectsSequencer.stop();
        this._.effectsSequencer = null;
      }
    }
    shutdown() {
      this.shutdownWithoutClearingBootOptions();
      this._lastUsedBootOptions = void 0;
    }
    /**
     * Sets the auto-refresh interval. Can be called after boot to change or disable the refresh interval.
     * @param intervalSeconds The interval in seconds. If not specified, 0, or negative, auto-refresh is disabled.
     * Must be greater than 60 seconds if enabled.
     *
     * @example
     * // Set refresh interval to 1 hour
     * sdk.setAutoRefreshInterval(3600);
     *
     * // Disable auto-refresh
     * sdk.setAutoRefreshInterval(0);
     */
    setAutoRefreshInterval(intervalSeconds) {
      this._clearAutoRefreshTimer();
      if (intervalSeconds && intervalSeconds >= 60) {
        const autoRefreshIntervalMs = intervalSeconds * 1e3;
        const scheduleRefresh = () => {
          this._autoRefreshTimer = setTimeout(async () => {
            logger.log("Auto-refreshing due to timeout");
            await this.refresh();
            scheduleRefresh();
          }, autoRefreshIntervalMs);
        };
        scheduleRefresh();
        logger.debug(`Auto-refresh interval set to ${intervalSeconds} seconds`);
      } else if (intervalSeconds !== void 0 && intervalSeconds < 60) {
        logger.warn("Auto-refresh interval must be greater or equal to 60 seconds - auto-refresh disabled");
      }
    }
    _clearAutoRefreshTimer() {
      if (this._autoRefreshTimer) {
        clearTimeout(this._autoRefreshTimer);
        this._autoRefreshTimer = null;
      }
    }
    async refresh() {
      const visibleNudges = this.gs.list().filter((nudge) => nudge.status === "visible");
      if (visibleNudges.length > 0) {
        logger.debug("Skipping refresh because guides or surveys are currently visible and we don't want to close them", {
          visibleNudges: visibleNudges.map((n) => ({ id: n.id, key: n.key }))
        });
        return;
      }
      await this.decide();
      await this._.endUserStore.fetchData();
      await this._reload();
      this.nudgeActions.sendConstantTriggers();
    }
    /**
     * Make Guides and Surveys available to the user. They will not be available before `.boot` is called, even if the
     * snippet has been run on the page they are on.
     */
    async boot(options) {
      if (this._isDisabled) {
        logger.debug(
          "boot() called while Engagement SDK is disabled; updating boot options but not booting until enable() is called"
        );
        this._lastUsedBootOptions = options;
        return;
      }
      if (this._.user) {
        logger.warn(
          "User already booted, ignoring additional boot call. Call shutdown first if you want to boot a different user."
        );
        return;
      }
      let user = void 0;
      if (typeof options.user === "function") {
        try {
          user = options.user();
        } catch (e2) {
          logger.error("Failed to get user from provider function", e2);
        }
      } else if (typeof options === "string") {
        user = { user_id: options };
      } else if (typeof options.user === "string") {
        user = { user_id: options.user };
      } else {
        user = options.user;
      }
      if (user) {
        if (user.user_id === "") {
          user.user_id = void 0;
        }
        if (user.device_id === "") {
          user.device_id = void 0;
        }
      }
      if (!user || !user.user_id && !user.device_id) {
        logger.error("User must specify at least a user_id or device_id");
        this._.user = void 0;
        return;
      }
      user = this._.services.enrichUser(user);
      if (!user) return;
      if (this._.hasBooted) {
        getAllNudgeActors(this._)?.forEach((actor) => {
          actor?.send({ type: "CLOSE" });
        });
      }
      this._.user = user;
      this._lastUsedBootOptions = options;
      this._cancelBoot?.();
      let bootCancelled = false;
      this._cancelBoot = () => {
        bootCancelled = true;
      };
      if (!this._.effectsSequencer) {
        this.globalActions.initEffectsSequencer();
      }
      if (options.integrations != void 0) {
        this._.integrations = [];
        options.integrations?.forEach((integration) => {
          this.addIntegration(integration);
        });
      }
      try {
        await this.decide();
        if (bootCancelled) return;
        logger.debug("Decide data fetched successfully");
      } catch (e2) {
        if (bootCancelled) return;
        logger.error("Failed to fetch decide data", e2);
      }
      try {
        await this._.endUserStore.fetchData();
        if (bootCancelled) return;
        if (this._.endUserStore.initializedSuccessfully) {
          this._analytics.setBootStatus(true);
          this._.hasBooted = true;
          if (options.autoRefreshIntervalSeconds !== void 0) {
            this.setAutoRefreshInterval(options.autoRefreshIntervalSeconds);
          }
          this._.nudgesManager?.send({ type: "END_USER_STORE_LOADED" });
          logger.debug("End user state loaded successfully");
        }
      } catch (e2) {
        if (bootCancelled) return;
        logger.error("Failed to fetch end user state", e2);
      }
      if (bootCancelled) return;
      this.nudgeActions.sendConstantTriggers();
    }
    /**
     * Trigger nudges via external events. Primarily used to send events from a 3rd party SDK to trigger nudges.
     * @param event The event to trigger nudges with.
     */
    forwardEvent(event) {
      if (typeof event === "string") {
        event = { event_type: event };
      }
      logger.debug(`Registering event ${event.event_type}`);
      publishAnalyticsEventToMessageBus(
        this._,
        event.event_type,
        event.event_properties
      );
    }
    /**
     * Add an integration to track events generated by the SDK. You may also pass
     * integrations to `boot` directly.
     *
     * @param integration The integration to add.
     */
    addIntegration(integration) {
      this._.integrations.push(integration);
    }
    /**
     * Changes the current default theme to the light- or dark-mode version.
     * If 'auto', it will choose the user-preferred color-scheme
     *
     * @param mode A string 'lightMode', 'darkMode', or 'auto'
     */
    setThemeMode(mode) {
      if (["lightMode", "darkMode", "auto"].includes(mode)) this._.themeMode = mode;
    }
    /**
     * Add a callback to the SDK.
     * @param callbackKey The key to add the callback to.
     * @param callbackFn The function to call when the callback is triggered.
     */
    addCallback(callbackKey, callbackFn) {
      this.globalActions.addCallbacks({ [callbackKey]: callbackFn });
    }
    /**
     * Set a session property to the SDK.
     * @param key The key to set the session property to.
     * @param value The value to set for the session property.
     */
    setSessionProperty(key, value) {
      if (!isValidSessionPropertyKey(key)) {
        console.error("Invalid session property key", key);
        return;
      }
      if (!isValidSessionPropertyValue(value)) {
        console.error("Invalid session property value", value);
        return;
      }
      this.globalActions.setSessionProperties({ [key]: value });
    }
    /**
     * Register an action on a guide or survey by its variant ID.
     * @param variantId The variant ID of the guide or survey
     * @param action The action object to perform with type and optional metadata
     */
    registerAction(variantId, action) {
      const nudge = getNudgeById(this._, variantId);
      if (!nudge) {
        logger.warn(`registerAction: Guide or survey with variantId: ${variantId} not found`);
        return;
      }
      if (action.type === "show") {
        this.nudgeActions.forceTriggerSingleNudge(nudge, { source: { type: "sdk" } });
      } else if (action.type === "dismiss") {
        dismissNudge(this._, nudge, 0 /* DEFAULT */);
      } else if (action.type === "snooze") {
        snoozeNudge(this._, nudge, nudge.snoozeDuration, 0 /* DEFAULT */);
      } else if (action.type === "ctaClick") {
        const actor = getNudgeActor(this._, variantId);
        const nudgeData = getNudgeDataFromUserStore(this._, variantId);
        const currentStepIndex = nudgeData?.currentStep || 0;
        const currentStep = nudge.steps[currentStepIndex];
        if (!currentStep) {
          logger.error(`registerAction: Step ${currentStepIndex} not found for nudge ${variantId}`);
          return;
        }
        const buttonBlock = currentStep.content.find(
          (block) => block.type === "button" && block.meta?.buttonType === action.buttonType
        );
        if (action.surveyResponses) {
          actor?.send({
            type: "UPDATE_SURVEY_RESPONSE",
            surveyResponse: action.surveyResponses
          });
        }
        const snapshot = actor?.getSnapshot();
        const storedSurveyResponse = snapshot?.context?.surveyResponses?.[currentStep.id];
        const surveyResponses = storedSurveyResponse ?? action.surveyResponses;
        const meta = buttonBlock?.meta ?? {
          buttonType: action.buttonType,
          action: { type: "no_action" },
          label: ""
        };
        const buttonAction = determineAction(this._, currentStep, { buttonMeta: meta, surveyResponses });
        execNudgeAction(this._, buttonAction, meta, 0 /* DEFAULT */, actor);
      } else {
        logger.error(
          `registerAction: Invalid action type "${action.type}". Must be "show", "dismiss", "snooze", or "ctaClick"`
        );
      }
    }
    /** Internal SDK methods **/
    async _configUser() {
      const { organization, nudges, flags, themes, resourceCenters } = await getEndUserConfig(
        this._configuration.apiKey,
        this._.isEditorPreview
      );
      this._.flags = flags;
      this._.themes = themes;
      const [resourceCenter] = resourceCenters;
      if (resourceCenter) {
        this._.resourceCenter = {
          ...this._.resourceCenter,
          ...resourceCenter
        };
      }
      this.globalActions.setOrganization(organization);
      this.nudgeActions.initNudges(nudges || []);
      this.nudgeActions.setupTimedTriggers([...nudges]);
    }
    _updateEditorPreviewDevice(device) {
      this._.editorPreviewDevice = device;
    }
    _getEditorPreviewDevice() {
      return this._.editorPreviewDevice;
    }
    async _reload(reloadTargets = _reloadTargets) {
      const config = await getEndUserConfig(this._configuration.apiKey, this._.isEditorPreview);
      for (const method of reloadTargets) {
        const symbol = method;
        const fn = this[symbol];
        if (fn instanceof Function) {
          fn.call(this, config);
        }
      }
    }
    async _reloadOrganization(preLoadedConfig) {
      const { organization } = preLoadedConfig || await getEndUserConfig(this._configuration.apiKey, this._.isEditorPreview);
      this.globalActions.setOrganization(organization);
    }
    async _reloadNudges(preLoadedConfig) {
      const { nudges } = preLoadedConfig || await getEndUserConfig(this._configuration.apiKey, this._.isEditorPreview);
      this.nudgeActions.initNudges(nudges || []);
    }
    async _reloadThemes(preLoadedConfig) {
      const { themes } = preLoadedConfig || await getEndUserConfig(this._configuration.apiKey, this._.isEditorPreview);
      this._.themes = themes;
    }
    _startNudgeDebug(data) {
      const { nudge } = data;
      this.nudgeActions.closeAllNudgeMocks();
      this.nudgeActions.startDebugSession(nudge, { refreshDecide: true, toStepIndex: 0 });
    }
    async _stopNudgeDebug() {
      this.nudgeActions.stopDebugSession();
    }
    _showNudgeStepMock(data) {
      getAllNudgeActors(this._)?.forEach((actor) => {
        actor?.send({ type: "CLOSE" });
      });
      this.nudgeActions.showStepMock(data.nudge, data.stepIndex, { forceOpen: data.forceOpen });
    }
    _closeNudgeMocks() {
      this.nudgeActions.closeAllNudgeMocks();
    }
    _setUserProperties(properties) {
      if (!this._.user) {
        logger.error("User is undefined, likely hasn't been booted yet");
        return;
      }
      this._.user.user_properties = { ...this._.user.user_properties, ...properties };
      this._.nudgesManager?.send({ type: "DECIDE_REQUESTED" });
      this._throttledDecide();
    }
    _shareConfig() {
      return {
        organization: this._.organization || void 0,
        nudges: getAllNudges(this._)
      };
    }
    _shareTrackedEvents() {
      return { trackedEvents: [...this._.trackedAppEvents] };
    }
    _startDebug() {
      LocalStorage_default.set(`debug:nudges`, "true");
      logger.log(`Enabled debugging for nudges. Restart the application.`);
    }
    _stopDebug() {
      LocalStorage_default.remove(`debug:nudges`);
      logger.log(`Disabled debugging for nudges. Restart the application.`);
    }
    _showResourceCenter(show, options) {
      this.resourceCenterActions.showResourceCenter(show);
      if (options?.recSet !== void 0) {
        this.resourceCenterActions.previewRecSet(options.recSet);
      }
      if (options?.resourceCenter && options?.quickLinks !== void 0) {
        this.resourceCenterActions.previewResourceCenter(options.resourceCenter, options.quickLinks);
      }
      if (options?.autopilotKeywords !== void 0) {
        this.resourceCenterActions.previewAutopilotKeywords(options.autopilotKeywords);
      }
      if (options?.contentItemId !== void 0) {
        this.resourceCenterActions.previewContentItem(options.contentItemId);
      }
    }
    /**
     * Sets a filter to restrict Resource Center content by tags.
     * Applies to Resource Center search and Autopilot recommendations.
     */
    setResourceCenterFilter(filter) {
      this.resourceCenterActions.setResourceCenterFilter(filter);
    }
    _startChat(sessionId, messages) {
      this.resourceCenterActions.setInitialPage({ item: { page: "assistant", params: {} } });
      this.resourceCenterActions.showResourceCenter(true);
      if (window.engagement?.assistant?._startChat) {
        window.engagement.assistant._startChat(sessionId, messages);
      }
    }
    _shareCurrentChatSession() {
      if (window.engagement?.assistant?._shareCurrentChatSession) {
        return window.engagement.assistant._shareCurrentChatSession();
      }
      return { sessionId: null, messages: [], isReviewMode: false };
    }
    /**
     * Logs debug snapshots for guides and surveys in the system.
     *
     * @param {Object} [options] - Optional configuration object for the snapshot
     * @param {string} [options.variantId] - The variant ID of a specific nudge to snapshot
     * @param {number} [options.stepIndex] - The step index to capture in the snapshot
     *
     * @returns {void}
     *
     * @remarks
     * Logs debug information to the console for each snapshot. Each log consists of:
     * 1. A message string in the format: `${name} debug snapshot: ${title|variantId}`
     * 2. A snapshot object with the following type:
     * ```ts
     * type Snapshot = {
     *   guideOrSurvey: IEnduserNudge;
     *   willRenderIfTriggered: boolean;
     *   checks: {
     *     builtInThrottles: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     customThrottles: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     status: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     frequency: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     audience: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     page: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     snooze: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *     element: { result: 'PASS' | 'FAIL'; explanation: string; detail?: Record<string, unknown> };
     *   };
     *   trigger: IEnduserNudge['triggerConfig'];
     *   mostRecentTrigger?: Trigger;
     * }
     * ```
     *
     * @description
     * If a variantId is provided, generates a snapshot for that specific guide or survey.
     * Otherwise, generates snapshots for all guides and surveys from /config.
     * Each snapshot includes the product type, name, and either the title or variantId,
     * which are logged to the console.
     *
     * @example
     * // Get snapshot for a specific guide or survey
     * _getDebugSnapshot({ variantId: 'guide-123', stepIndex: 2 });
     *
     * // Get snapshots for all guides and surveys
     * _getDebugSnapshot();
     */
    async _getDebugSnapshot(options) {
      if (options?.variantId) {
        if (typeof options.variantId === "number") {
          const nudge = getNudgeById(this._, options.variantId);
          if (nudge) {
            const stepIndex = typeof options.stepIndex === "number" ? options.stepIndex : 0;
            const snapshot = await getDebugSnapshot(this._, nudge, stepIndex);
            const { name } = getProductMeta(nudge);
            const message = `${name} debug snapshot: ${snapshot.guideOrSurvey.title} - ${snapshot.guideOrSurvey.variant}`;
            console.log(message, snapshot);
            return snapshot;
          }
        }
        return;
      }
      const nudges = getAllNudges(this._);
      const snapshots = [];
      for (const nudge of nudges) {
        const snapshot = await getDebugSnapshot(this._, nudge);
        const { name } = getProductMeta(nudge);
        const message = `${name} debug snapshot: ${snapshot.guideOrSurvey.title} - ${snapshot.guideOrSurvey.variant}`;
        console.log(message, snapshot);
        snapshots.push(snapshot);
      }
      return snapshots;
    }
    _debugStatus() {
      console.log({
        user: this._.user,
        apiKey: this._configuration.apiKey,
        stateInitialized: this._.endUserStore.initializedSuccessfully,
        decideSuccessful: this._.decide != void 0,
        num_guides_surveys: getAllNudges(this._).length,
        analyticsIntegrations: this._.integrations.length
      });
    }
    _setTheme(theme, mode) {
      if (!theme) this._.themeOverride = void 0;
      this._.themeOverride = { theme, mode };
    }
    _showWidgetTableau(show, widgetSelection) {
      this._.widgetTableauSelection = widgetSelection;
      this._.showWidgetTableau = show;
    }
    /**
     * @deprecated Use addCallback instead
     */
    _addCallback(callbackKey, callbackFn) {
      this.globalActions.addCallbacks({ [callbackKey]: callbackFn });
    }
    _clearNudgeInteractions(variantId) {
      if (variantId) {
        this._.endUserStore.data = {
          nudgeInteractions: {
            ...this._.endUserStore.data.nudgeInteractions,
            [variantId]: createDefaultNudgeInteractionState()
          }
        };
        this._.endUserStore.dirtyVariantIds.add(String(variantId));
      } else {
        const keys = Object.keys(this._.endUserStore.data.nudgeInteractions);
        this._.endUserStore.data = {
          nudgeInteractions: Object.fromEntries(keys.map((key) => [key, createDefaultNudgeInteractionState()]))
        };
        for (const key of keys) {
          this._.endUserStore.dirtyVariantIds.add(key);
        }
      }
      this._.endUserStore.pushData({ immediate: true });
    }
  };

  // ../shared/node_modules/@amplitude/experiment-core/dist/experiment-core.esm.js
  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(d2, b2) {
      d2.__proto__ = b2;
    } || function(d2, b2) {
      for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
    };
    return extendStatics(d, b);
  };
  function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign2 = function() {
    __assign2 = Object.assign || function __assign3(t14) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t14[p] = s2[p];
      }
      return t14;
    };
    return __assign2.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e2) {
          reject(e2);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e2) {
          reject(e2);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function() {
        if (t14[0] & 1) throw t14[1];
        return t14[1];
      },
      trys: [],
      ops: []
    }, f, y2, t14, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
      return this;
    }), g;
    function verb(n) {
      return function(v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
        if (f = 1, y2 && (t14 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t14 = y2["return"]) && t14.call(y2), 0) : y2.next) && !(t14 = t14.call(y2, op[1])).done) return t14;
        if (y2 = 0, t14) op = [op[0] & 2, t14.value];
        switch (op[0]) {
          case 0:
          case 1:
            t14 = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y2 = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t14 = _.trys, t14 = t14.length > 0 && t14[t14.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t14 || op[1] > t14[0] && op[1] < t14[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t14[1]) {
              _.label = t14[1];
              t14 = op;
              break;
            }
            if (t14 && _.label < t14[2]) {
              _.label = t14[2];
              _.ops.push(op);
              break;
            }
            if (t14[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f = t14 = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function __values2(o) {
    var s2 = typeof Symbol === "function" && Symbol.iterator, m = s2 && o[s2], i2 = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function() {
        if (o && i2 >= o.length) o = void 0;
        return {
          value: o && o[i2++],
          done: !o
        };
      }
    };
    throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function __read2(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i2 = m.call(o), r, ar = [], e2;
    try {
      while ((n === void 0 || n-- > 0) && !(r = i2.next()).done) ar.push(r.value);
    } catch (error) {
      e2 = {
        error
      };
    } finally {
      try {
        if (r && !r.done && (m = i2["return"])) m.call(i2);
      } finally {
        if (e2) throw e2.error;
      }
    }
    return ar;
  }
  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }
  var EvaluationOperator = {
    IS: "is",
    IS_NOT: "is not",
    CONTAINS: "contains",
    DOES_NOT_CONTAIN: "does not contain",
    LESS_THAN: "less",
    LESS_THAN_EQUALS: "less or equal",
    GREATER_THAN: "greater",
    GREATER_THAN_EQUALS: "greater or equal",
    VERSION_LESS_THAN: "version less",
    VERSION_LESS_THAN_EQUALS: "version less or equal",
    VERSION_GREATER_THAN: "version greater",
    VERSION_GREATER_THAN_EQUALS: "version greater or equal",
    SET_IS: "set is",
    SET_IS_NOT: "set is not",
    SET_CONTAINS: "set contains",
    SET_DOES_NOT_CONTAIN: "set does not contain",
    SET_CONTAINS_ANY: "set contains any",
    SET_DOES_NOT_CONTAIN_ANY: "set does not contain any",
    REGEX_MATCH: "regex match",
    REGEX_DOES_NOT_MATCH: "regex does not match"
  };
  var stringToUtf8ByteArray = function(str) {
    var out = [];
    var p = 0;
    for (var i2 = 0; i2 < str.length; i2++) {
      var c2 = str.charCodeAt(i2);
      if (c2 < 128) {
        out[p++] = c2;
      } else if (c2 < 2048) {
        out[p++] = c2 >> 6 | 192;
        out[p++] = c2 & 63 | 128;
      } else if ((c2 & 64512) == 55296 && i2 + 1 < str.length && (str.charCodeAt(i2 + 1) & 64512) == 56320) {
        c2 = 65536 + ((c2 & 1023) << 10) + (str.charCodeAt(++i2) & 1023);
        out[p++] = c2 >> 18 | 240;
        out[p++] = c2 >> 12 & 63 | 128;
        out[p++] = c2 >> 6 & 63 | 128;
        out[p++] = c2 & 63 | 128;
      } else {
        out[p++] = c2 >> 12 | 224;
        out[p++] = c2 >> 6 & 63 | 128;
        out[p++] = c2 & 63 | 128;
      }
    }
    return Uint8Array.from(out);
  };
  var C1_32 = -862048943;
  var C2_32 = 461845907;
  var R1_32 = 15;
  var R2_32 = 13;
  var M_32 = 5;
  var N_32 = -430675100;
  var hash32x86 = function(input, seed) {
    if (seed === void 0) {
      seed = 0;
    }
    var data = stringToUtf8ByteArray(input);
    var length = data.length;
    var nBlocks = length >> 2;
    var hash = seed;
    for (var i2 = 0; i2 < nBlocks; i2++) {
      var index_1 = i2 << 2;
      var k = readIntLe(data, index_1);
      hash = mix32(k, hash);
    }
    var index = nBlocks << 2;
    var k1 = 0;
    switch (length - index) {
      case 3:
        k1 ^= data[index + 2] << 16;
        k1 ^= data[index + 1] << 8;
        k1 ^= data[index];
        k1 = Math.imul(k1, C1_32);
        k1 = rotateLeft(k1, R1_32);
        k1 = Math.imul(k1, C2_32);
        hash ^= k1;
        break;
      case 2:
        k1 ^= data[index + 1] << 8;
        k1 ^= data[index];
        k1 = Math.imul(k1, C1_32);
        k1 = rotateLeft(k1, R1_32);
        k1 = Math.imul(k1, C2_32);
        hash ^= k1;
        break;
      case 1:
        k1 ^= data[index];
        k1 = Math.imul(k1, C1_32);
        k1 = rotateLeft(k1, R1_32);
        k1 = Math.imul(k1, C2_32);
        hash ^= k1;
        break;
    }
    hash ^= length;
    return fmix32(hash) >>> 0;
  };
  var mix32 = function(k, hash) {
    var kResult = k;
    var hashResult = hash;
    kResult = Math.imul(kResult, C1_32);
    kResult = rotateLeft(kResult, R1_32);
    kResult = Math.imul(kResult, C2_32);
    hashResult ^= kResult;
    hashResult = rotateLeft(hashResult, R2_32);
    hashResult = Math.imul(hashResult, M_32);
    return hashResult + N_32 | 0;
  };
  var fmix32 = function(hash) {
    var hashResult = hash;
    hashResult ^= hashResult >>> 16;
    hashResult = Math.imul(hashResult, -2048144789);
    hashResult ^= hashResult >>> 13;
    hashResult = Math.imul(hashResult, -1028477387);
    hashResult ^= hashResult >>> 16;
    return hashResult;
  };
  var rotateLeft = function(x, n, width) {
    if (width === void 0) {
      width = 32;
    }
    if (n > width)
      n = n % width;
    var mask = 4294967295 << width - n >>> 0;
    var r = (x & mask) >>> 0 >>> width - n >>> 0;
    return (x << n | r) >>> 0;
  };
  var readIntLe = function(data, index) {
    if (index === void 0) {
      index = 0;
    }
    var n = data[index] << 24 | data[index + 1] << 16 | data[index + 2] << 8 | data[index + 3];
    return reverseBytes(n);
  };
  var reverseBytes = function(n) {
    return (n & -16777216) >>> 24 | (n & 16711680) >>> 8 | (n & 65280) << 8 | (n & 255) << 24;
  };
  var select = function(selectable, selector) {
    var e_1, _a;
    if (!selector || selector.length === 0) {
      return void 0;
    }
    try {
      for (var selector_1 = __values2(selector), selector_1_1 = selector_1.next(); !selector_1_1.done; selector_1_1 = selector_1.next()) {
        var selectorElement = selector_1_1.value;
        if (!selectorElement || !selectable || typeof selectable !== "object") {
          return void 0;
        }
        selectable = selectable[selectorElement];
      }
    } catch (e_1_1) {
      e_1 = { error: e_1_1 };
    } finally {
      try {
        if (selector_1_1 && !selector_1_1.done && (_a = selector_1.return)) _a.call(selector_1);
      } finally {
        if (e_1) throw e_1.error;
      }
    }
    if (selectable === void 0 || selectable === null) {
      return void 0;
    } else {
      return selectable;
    }
  };
  var MAJOR_MINOR_REGEX = "(\\d+)\\.(\\d+)";
  var PATCH_REGEX = "(\\d+)";
  var PRERELEASE_REGEX = "(-(([-\\w]+\\.?)*))?";
  var VERSION_PATTERN = "^".concat(MAJOR_MINOR_REGEX, "(\\.").concat(PATCH_REGEX).concat(PRERELEASE_REGEX, ")?$");
  var SemanticVersion = (
    /** @class */
    function() {
      function SemanticVersion2(major, minor, patch, preRelease) {
        if (preRelease === void 0) {
          preRelease = void 0;
        }
        this.major = major;
        this.minor = minor;
        this.patch = patch;
        this.preRelease = preRelease;
      }
      SemanticVersion2.parse = function(version2) {
        if (!version2) {
          return void 0;
        }
        var matchGroup = new RegExp(VERSION_PATTERN).exec(version2);
        if (!matchGroup) {
          return void 0;
        }
        var major = Number(matchGroup[1]);
        var minor = Number(matchGroup[2]);
        if (isNaN(major) || isNaN(minor)) {
          return void 0;
        }
        var patch = Number(matchGroup[4]) || 0;
        var preRelease = matchGroup[5] || void 0;
        return new SemanticVersion2(major, minor, patch, preRelease);
      };
      SemanticVersion2.prototype.compareTo = function(other) {
        if (this.major > other.major)
          return 1;
        if (this.major < other.major)
          return -1;
        if (this.minor > other.minor)
          return 1;
        if (this.minor < other.minor)
          return -1;
        if (this.patch > other.patch)
          return 1;
        if (this.patch < other.patch)
          return -1;
        if (this.preRelease && !other.preRelease)
          return -1;
        if (!this.preRelease && other.preRelease)
          return 1;
        if (this.preRelease && other.preRelease) {
          if (this.preRelease > other.preRelease)
            return 1;
          if (this.preRelease < other.preRelease)
            return -1;
          return 0;
        }
        return 0;
      };
      return SemanticVersion2;
    }()
  );
  var EvaluationEngine = (
    /** @class */
    function() {
      function EvaluationEngine2() {
      }
      EvaluationEngine2.prototype.evaluate = function(context, flags) {
        var e_1, _a;
        var results = {};
        var target = {
          context,
          result: results
        };
        try {
          for (var flags_1 = __values2(flags), flags_1_1 = flags_1.next(); !flags_1_1.done; flags_1_1 = flags_1.next()) {
            var flag = flags_1_1.value;
            var variant = this.evaluateFlag(target, flag);
            if (variant) {
              results[flag.key] = variant;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (flags_1_1 && !flags_1_1.done && (_a = flags_1.return)) _a.call(flags_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return results;
      };
      EvaluationEngine2.prototype.evaluateFlag = function(target, flag) {
        var e_2, _a;
        var result;
        try {
          for (var _b = __values2(flag.segments), _c = _b.next(); !_c.done; _c = _b.next()) {
            var segment = _c.value;
            result = this.evaluateSegment(target, flag, segment);
            if (result) {
              var metadata = __assign2(__assign2(__assign2({}, flag.metadata), segment.metadata), result.metadata);
              result = __assign2(__assign2({}, result), { metadata });
              break;
            }
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        return result;
      };
      EvaluationEngine2.prototype.evaluateSegment = function(target, flag, segment) {
        if (!segment.conditions) {
          var variantKey = this.bucket(target, segment);
          if (variantKey !== void 0) {
            return flag.variants[variantKey];
          } else {
            return void 0;
          }
        }
        var match = this.evaluateConditions(target, segment.conditions);
        if (match) {
          var variantKey = this.bucket(target, segment);
          if (variantKey !== void 0) {
            return flag.variants[variantKey];
          } else {
            return void 0;
          }
        }
        return void 0;
      };
      EvaluationEngine2.prototype.evaluateConditions = function(target, conditions) {
        var e_3, _a, e_4, _b;
        try {
          for (var conditions_1 = __values2(conditions), conditions_1_1 = conditions_1.next(); !conditions_1_1.done; conditions_1_1 = conditions_1.next()) {
            var innerConditions = conditions_1_1.value;
            var match = true;
            try {
              for (var innerConditions_1 = (e_4 = void 0, __values2(innerConditions)), innerConditions_1_1 = innerConditions_1.next(); !innerConditions_1_1.done; innerConditions_1_1 = innerConditions_1.next()) {
                var condition = innerConditions_1_1.value;
                match = this.matchCondition(target, condition);
                if (!match) {
                  break;
                }
              }
            } catch (e_4_1) {
              e_4 = { error: e_4_1 };
            } finally {
              try {
                if (innerConditions_1_1 && !innerConditions_1_1.done && (_b = innerConditions_1.return)) _b.call(innerConditions_1);
              } finally {
                if (e_4) throw e_4.error;
              }
            }
            if (match) {
              return true;
            }
          }
        } catch (e_3_1) {
          e_3 = { error: e_3_1 };
        } finally {
          try {
            if (conditions_1_1 && !conditions_1_1.done && (_a = conditions_1.return)) _a.call(conditions_1);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
        return false;
      };
      EvaluationEngine2.prototype.matchCondition = function(target, condition) {
        var propValue = select(target, condition.selector);
        if (propValue === void 0 || propValue === null) {
          return this.matchNull(condition.op, condition.values);
        } else if (this.isSetOperator(condition.op)) {
          var propValueStringList = this.coerceStringArray(propValue);
          if (!propValueStringList) {
            return false;
          }
          return this.matchSet(propValueStringList, condition.op, condition.values);
        } else {
          var propValueString = this.coerceString(propValue);
          if (propValueString !== void 0) {
            return this.matchString(propValueString, condition.op, condition.values);
          } else {
            return false;
          }
        }
      };
      EvaluationEngine2.prototype.getHash = function(key) {
        return hash32x86(key);
      };
      EvaluationEngine2.prototype.bucket = function(target, segment) {
        var e_5, _a, e_6, _b;
        if (!segment.bucket) {
          return segment.variant;
        }
        var bucketingValue = this.coerceString(select(target, segment.bucket.selector));
        if (!bucketingValue || bucketingValue.length === 0) {
          return segment.variant;
        }
        var keyToHash = "".concat(segment.bucket.salt, "/").concat(bucketingValue);
        var hash = this.getHash(keyToHash);
        var allocationValue = hash % 100;
        var distributionValue = Math.floor(hash / 100);
        try {
          for (var _c = __values2(segment.bucket.allocations), _d = _c.next(); !_d.done; _d = _c.next()) {
            var allocation = _d.value;
            var allocationStart = allocation.range[0];
            var allocationEnd = allocation.range[1];
            if (allocationValue >= allocationStart && allocationValue < allocationEnd) {
              try {
                for (var _e = (e_6 = void 0, __values2(allocation.distributions)), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var distribution = _f.value;
                  var distributionStart = distribution.range[0];
                  var distributionEnd = distribution.range[1];
                  if (distributionValue >= distributionStart && distributionValue < distributionEnd) {
                    return distribution.variant;
                  }
                }
              } catch (e_6_1) {
                e_6 = { error: e_6_1 };
              } finally {
                try {
                  if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                } finally {
                  if (e_6) throw e_6.error;
                }
              }
            }
          }
        } catch (e_5_1) {
          e_5 = { error: e_5_1 };
        } finally {
          try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
          } finally {
            if (e_5) throw e_5.error;
          }
        }
        return segment.variant;
      };
      EvaluationEngine2.prototype.matchNull = function(op, filterValues) {
        var containsNone = this.containsNone(filterValues);
        switch (op) {
          case EvaluationOperator.IS:
          case EvaluationOperator.CONTAINS:
          case EvaluationOperator.LESS_THAN:
          case EvaluationOperator.LESS_THAN_EQUALS:
          case EvaluationOperator.GREATER_THAN:
          case EvaluationOperator.GREATER_THAN_EQUALS:
          case EvaluationOperator.VERSION_LESS_THAN:
          case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
          case EvaluationOperator.VERSION_GREATER_THAN:
          case EvaluationOperator.VERSION_GREATER_THAN_EQUALS:
          case EvaluationOperator.SET_IS:
          case EvaluationOperator.SET_CONTAINS:
          case EvaluationOperator.SET_CONTAINS_ANY:
            return containsNone;
          case EvaluationOperator.IS_NOT:
          case EvaluationOperator.DOES_NOT_CONTAIN:
          case EvaluationOperator.SET_DOES_NOT_CONTAIN:
          case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY:
            return !containsNone;
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.matchSet = function(propValues, op, filterValues) {
        switch (op) {
          case EvaluationOperator.SET_IS:
            return this.setEquals(propValues, filterValues);
          case EvaluationOperator.SET_IS_NOT:
            return !this.setEquals(propValues, filterValues);
          case EvaluationOperator.SET_CONTAINS:
            return this.matchesSetContainsAll(propValues, filterValues);
          case EvaluationOperator.SET_DOES_NOT_CONTAIN:
            return !this.matchesSetContainsAll(propValues, filterValues);
          case EvaluationOperator.SET_CONTAINS_ANY:
            return this.matchesSetContainsAny(propValues, filterValues);
          case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY:
            return !this.matchesSetContainsAny(propValues, filterValues);
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.matchString = function(propValue, op, filterValues) {
        var _this = this;
        switch (op) {
          case EvaluationOperator.IS:
            return this.matchesIs(propValue, filterValues);
          case EvaluationOperator.IS_NOT:
            return !this.matchesIs(propValue, filterValues);
          case EvaluationOperator.CONTAINS:
            return this.matchesContains(propValue, filterValues);
          case EvaluationOperator.DOES_NOT_CONTAIN:
            return !this.matchesContains(propValue, filterValues);
          case EvaluationOperator.LESS_THAN:
          case EvaluationOperator.LESS_THAN_EQUALS:
          case EvaluationOperator.GREATER_THAN:
          case EvaluationOperator.GREATER_THAN_EQUALS:
            return this.matchesComparable(propValue, op, filterValues, function(value) {
              return _this.parseNumber(value);
            }, this.comparator);
          case EvaluationOperator.VERSION_LESS_THAN:
          case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
          case EvaluationOperator.VERSION_GREATER_THAN:
          case EvaluationOperator.VERSION_GREATER_THAN_EQUALS:
            return this.matchesComparable(propValue, op, filterValues, function(value) {
              return SemanticVersion.parse(value);
            }, this.versionComparator);
          case EvaluationOperator.REGEX_MATCH:
            return this.matchesRegex(propValue, filterValues);
          case EvaluationOperator.REGEX_DOES_NOT_MATCH:
            return !this.matchesRegex(propValue, filterValues);
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.matchesIs = function(propValue, filterValues) {
        if (this.containsBooleans(filterValues)) {
          var lower_1 = propValue.toLowerCase();
          if (lower_1 === "true" || lower_1 === "false") {
            return filterValues.some(function(value) {
              return value.toLowerCase() === lower_1;
            });
          }
        }
        return filterValues.some(function(value) {
          return propValue === value;
        });
      };
      EvaluationEngine2.prototype.matchesContains = function(propValue, filterValues) {
        var e_7, _a;
        try {
          for (var filterValues_1 = __values2(filterValues), filterValues_1_1 = filterValues_1.next(); !filterValues_1_1.done; filterValues_1_1 = filterValues_1.next()) {
            var filterValue = filterValues_1_1.value;
            if (propValue.toLowerCase().includes(filterValue.toLowerCase())) {
              return true;
            }
          }
        } catch (e_7_1) {
          e_7 = { error: e_7_1 };
        } finally {
          try {
            if (filterValues_1_1 && !filterValues_1_1.done && (_a = filterValues_1.return)) _a.call(filterValues_1);
          } finally {
            if (e_7) throw e_7.error;
          }
        }
        return false;
      };
      EvaluationEngine2.prototype.matchesComparable = function(propValue, op, filterValues, typeTransformer, typeComparator) {
        var _this = this;
        var propValueTransformed = typeTransformer(propValue);
        var filterValuesTransformed = filterValues.map(function(filterValue) {
          return typeTransformer(filterValue);
        }).filter(function(filterValue) {
          return filterValue !== void 0;
        });
        if (propValueTransformed === void 0 || filterValuesTransformed.length === 0) {
          return filterValues.some(function(filterValue) {
            return _this.comparator(propValue, op, filterValue);
          });
        } else {
          return filterValuesTransformed.some(function(filterValueTransformed) {
            return typeComparator(propValueTransformed, op, filterValueTransformed);
          });
        }
      };
      EvaluationEngine2.prototype.comparator = function(propValue, op, filterValue) {
        switch (op) {
          case EvaluationOperator.LESS_THAN:
          case EvaluationOperator.VERSION_LESS_THAN:
            return propValue < filterValue;
          case EvaluationOperator.LESS_THAN_EQUALS:
          case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
            return propValue <= filterValue;
          case EvaluationOperator.GREATER_THAN:
          case EvaluationOperator.VERSION_GREATER_THAN:
            return propValue > filterValue;
          case EvaluationOperator.GREATER_THAN_EQUALS:
          case EvaluationOperator.VERSION_GREATER_THAN_EQUALS:
            return propValue >= filterValue;
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.versionComparator = function(propValue, op, filterValue) {
        var compareTo = propValue.compareTo(filterValue);
        switch (op) {
          case EvaluationOperator.LESS_THAN:
          case EvaluationOperator.VERSION_LESS_THAN:
            return compareTo < 0;
          case EvaluationOperator.LESS_THAN_EQUALS:
          case EvaluationOperator.VERSION_LESS_THAN_EQUALS:
            return compareTo <= 0;
          case EvaluationOperator.GREATER_THAN:
          case EvaluationOperator.VERSION_GREATER_THAN:
            return compareTo > 0;
          case EvaluationOperator.GREATER_THAN_EQUALS:
          case EvaluationOperator.VERSION_GREATER_THAN_EQUALS:
            return compareTo >= 0;
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.matchesRegex = function(propValue, filterValues) {
        return filterValues.some(function(filterValue) {
          return Boolean(new RegExp(filterValue).exec(propValue));
        });
      };
      EvaluationEngine2.prototype.containsNone = function(filterValues) {
        return filterValues.some(function(filterValue) {
          return filterValue === "(none)";
        });
      };
      EvaluationEngine2.prototype.containsBooleans = function(filterValues) {
        return filterValues.some(function(filterValue) {
          switch (filterValue.toLowerCase()) {
            case "true":
            case "false":
              return true;
            default:
              return false;
          }
        });
      };
      EvaluationEngine2.prototype.parseNumber = function(value) {
        var _a;
        return (_a = Number(value)) !== null && _a !== void 0 ? _a : void 0;
      };
      EvaluationEngine2.prototype.coerceString = function(value) {
        if (value === void 0 || value === null) {
          return void 0;
        }
        if (typeof value === "object") {
          return JSON.stringify(value);
        }
        return String(value);
      };
      EvaluationEngine2.prototype.coerceStringArray = function(value) {
        var _this = this;
        if (Array.isArray(value)) {
          var anyArray = value;
          return anyArray.map(function(e2) {
            return _this.coerceString(e2);
          }).filter(Boolean);
        }
        var stringValue = String(value);
        try {
          var parsedValue = JSON.parse(stringValue);
          if (Array.isArray(parsedValue)) {
            var anyArray = value;
            return anyArray.map(function(e2) {
              return _this.coerceString(e2);
            }).filter(Boolean);
          } else {
            var s2 = this.coerceString(stringValue);
            return s2 ? [s2] : void 0;
          }
        } catch (_a) {
          var s2 = this.coerceString(stringValue);
          return s2 ? [s2] : void 0;
        }
      };
      EvaluationEngine2.prototype.isSetOperator = function(op) {
        switch (op) {
          case EvaluationOperator.SET_IS:
          case EvaluationOperator.SET_IS_NOT:
          case EvaluationOperator.SET_CONTAINS:
          case EvaluationOperator.SET_DOES_NOT_CONTAIN:
          case EvaluationOperator.SET_CONTAINS_ANY:
          case EvaluationOperator.SET_DOES_NOT_CONTAIN_ANY:
            return true;
          default:
            return false;
        }
      };
      EvaluationEngine2.prototype.setEquals = function(xa, ya) {
        var xs = new Set(xa);
        var ys = new Set(ya);
        return xs.size === ys.size && __spreadArray([], __read2(ys), false).every(function(y2) {
          return xs.has(y2);
        });
      };
      EvaluationEngine2.prototype.matchesSetContainsAll = function(propValues, filterValues) {
        var e_8, _a;
        if (propValues.length < filterValues.length) {
          return false;
        }
        try {
          for (var filterValues_2 = __values2(filterValues), filterValues_2_1 = filterValues_2.next(); !filterValues_2_1.done; filterValues_2_1 = filterValues_2.next()) {
            var filterValue = filterValues_2_1.value;
            if (!this.matchesIs(filterValue, propValues)) {
              return false;
            }
          }
        } catch (e_8_1) {
          e_8 = { error: e_8_1 };
        } finally {
          try {
            if (filterValues_2_1 && !filterValues_2_1.done && (_a = filterValues_2.return)) _a.call(filterValues_2);
          } finally {
            if (e_8) throw e_8.error;
          }
        }
        return true;
      };
      EvaluationEngine2.prototype.matchesSetContainsAny = function(propValues, filterValues) {
        var e_9, _a;
        try {
          for (var filterValues_3 = __values2(filterValues), filterValues_3_1 = filterValues_3.next(); !filterValues_3_1.done; filterValues_3_1 = filterValues_3.next()) {
            var filterValue = filterValues_3_1.value;
            if (this.matchesIs(filterValue, propValues)) {
              return true;
            }
          }
        } catch (e_9_1) {
          e_9 = { error: e_9_1 };
        } finally {
          try {
            if (filterValues_3_1 && !filterValues_3_1.done && (_a = filterValues_3.return)) _a.call(filterValues_3);
          } finally {
            if (e_9) throw e_9.error;
          }
        }
        return false;
      };
      return EvaluationEngine2;
    }()
  );
  var version = "3.7.7";
  var VERSION = version;
  var _hasBuffer = typeof Buffer === "function";
  var _TD = typeof TextDecoder === "function" ? new TextDecoder() : void 0;
  var _TE = typeof TextEncoder === "function" ? new TextEncoder() : void 0;
  var b64ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var b64chs = Array.prototype.slice.call(b64ch);
  var b64tab = ((a) => {
    let tab = {};
    a.forEach((c2, i2) => tab[c2] = i2);
    return tab;
  })(b64chs);
  var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
  var _fromCC = String.fromCharCode.bind(String);
  var _U8Afrom = typeof Uint8Array.from === "function" ? Uint8Array.from.bind(Uint8Array) : (it) => new Uint8Array(Array.prototype.slice.call(it, 0));
  var _mkUriSafe = (src) => src.replace(/=/g, "").replace(/[+\/]/g, (m0) => m0 == "+" ? "-" : "_");
  var _tidyB64 = (s2) => s2.replace(/[^A-Za-z0-9\+\/]/g, "");
  var btoaPolyfill = (bin) => {
    let u32, c0, c1, c2, asc = "";
    const pad = bin.length % 3;
    for (let i2 = 0; i2 < bin.length; ) {
      if ((c0 = bin.charCodeAt(i2++)) > 255 || (c1 = bin.charCodeAt(i2++)) > 255 || (c2 = bin.charCodeAt(i2++)) > 255) throw new TypeError("invalid character found");
      u32 = c0 << 16 | c1 << 8 | c2;
      asc += b64chs[u32 >> 18 & 63] + b64chs[u32 >> 12 & 63] + b64chs[u32 >> 6 & 63] + b64chs[u32 & 63];
    }
    return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
  };
  var _btoa = typeof btoa === "function" ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
  var _fromUint8Array = _hasBuffer ? (u8a) => Buffer.from(u8a).toString("base64") : (u8a) => {
    const maxargs = 4096;
    let strs = [];
    for (let i2 = 0, l2 = u8a.length; i2 < l2; i2 += maxargs) {
      strs.push(_fromCC.apply(null, u8a.subarray(i2, i2 + maxargs)));
    }
    return _btoa(strs.join(""));
  };
  var fromUint8Array = (u8a, urlsafe = false) => urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
  var cb_utob = (c2) => {
    if (c2.length < 2) {
      var cc = c2.charCodeAt(0);
      return cc < 128 ? c2 : cc < 2048 ? _fromCC(192 | cc >>> 6) + _fromCC(128 | cc & 63) : _fromCC(224 | cc >>> 12 & 15) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    } else {
      var cc = 65536 + (c2.charCodeAt(0) - 55296) * 1024 + (c2.charCodeAt(1) - 56320);
      return _fromCC(240 | cc >>> 18 & 7) + _fromCC(128 | cc >>> 12 & 63) + _fromCC(128 | cc >>> 6 & 63) + _fromCC(128 | cc & 63);
    }
  };
  var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
  var utob = (u) => u.replace(re_utob, cb_utob);
  var _encode = _hasBuffer ? (s2) => Buffer.from(s2, "utf8").toString("base64") : _TE ? (s2) => _fromUint8Array(_TE.encode(s2)) : (s2) => _btoa(utob(s2));
  var encode = (src, urlsafe = false) => urlsafe ? _mkUriSafe(_encode(src)) : _encode(src);
  var encodeURI = (src) => encode(src, true);
  var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
  var cb_btou = (cccc) => {
    switch (cccc.length) {
      case 4:
        var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset2 = cp - 65536;
        return _fromCC((offset2 >>> 10) + 55296) + _fromCC((offset2 & 1023) + 56320);
      case 3:
        return _fromCC((15 & cccc.charCodeAt(0)) << 12 | (63 & cccc.charCodeAt(1)) << 6 | 63 & cccc.charCodeAt(2));
      default:
        return _fromCC((31 & cccc.charCodeAt(0)) << 6 | 63 & cccc.charCodeAt(1));
    }
  };
  var btou = (b) => b.replace(re_btou, cb_btou);
  var atobPolyfill = (asc) => {
    asc = asc.replace(/\s+/g, "");
    if (!b64re.test(asc)) throw new TypeError("malformed base64.");
    asc += "==".slice(2 - (asc.length & 3));
    let u24, bin = "", r1, r2;
    for (let i2 = 0; i2 < asc.length; ) {
      u24 = b64tab[asc.charAt(i2++)] << 18 | b64tab[asc.charAt(i2++)] << 12 | (r1 = b64tab[asc.charAt(i2++)]) << 6 | (r2 = b64tab[asc.charAt(i2++)]);
      bin += r1 === 64 ? _fromCC(u24 >> 16 & 255) : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255) : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
    }
    return bin;
  };
  var _atob = typeof atob === "function" ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
  var _toUint8Array = _hasBuffer ? (a) => _U8Afrom(Buffer.from(a, "base64")) : (a) => _U8Afrom(_atob(a).split("").map((c2) => c2.charCodeAt(0)));
  var toUint8Array = (a) => _toUint8Array(_unURI(a));
  var _decode = _hasBuffer ? (a) => Buffer.from(a, "base64").toString("utf8") : _TD ? (a) => _TD.decode(_toUint8Array(a)) : (a) => btou(_atob(a));
  var _unURI = (a) => _tidyB64(a.replace(/[-_]/g, (m0) => m0 == "-" ? "+" : "/"));
  var decode3 = (src) => _decode(_unURI(src));
  var isValid = (src) => {
    if (typeof src !== "string") return false;
    const s2 = src.replace(/\s+/g, "").replace(/={0,2}$/, "");
    return !/[^\s0-9a-zA-Z\+/]/.test(s2) || !/[^\s0-9a-zA-Z\-_]/.test(s2);
  };
  var _noEnum = (v) => {
    return {
      value: v,
      enumerable: false,
      writable: true,
      configurable: true
    };
  };
  var extendString = function() {
    const _add = (name, body) => Object.defineProperty(String.prototype, name, _noEnum(body));
    _add("fromBase64", function() {
      return decode3(this);
    });
    _add("toBase64", function(urlsafe) {
      return encode(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return encode(this, true);
    });
    _add("toBase64URL", function() {
      return encode(this, true);
    });
    _add("toUint8Array", function() {
      return toUint8Array(this);
    });
  };
  var extendUint8Array = function() {
    const _add = (name, body) => Object.defineProperty(Uint8Array.prototype, name, _noEnum(body));
    _add("toBase64", function(urlsafe) {
      return fromUint8Array(this, urlsafe);
    });
    _add("toBase64URI", function() {
      return fromUint8Array(this, true);
    });
    _add("toBase64URL", function() {
      return fromUint8Array(this, true);
    });
  };
  var extendBuiltins = () => {
    extendString();
    extendUint8Array();
  };
  var gBase64 = {
    version,
    VERSION,
    atob: _atob,
    atobPolyfill,
    btoa: _btoa,
    btoaPolyfill,
    fromBase64: decode3,
    toBase64: encode,
    encode,
    encodeURI,
    encodeURL: encodeURI,
    utob,
    btou,
    decode: decode3,
    isValid,
    fromUint8Array,
    toUint8Array,
    extendString,
    extendUint8Array,
    extendBuiltins
  };
  var FetchError = (
    /** @class */
    function(_super) {
      __extends(FetchError2, _super);
      function FetchError2(statusCode, message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        Object.setPrototypeOf(_this, FetchError2.prototype);
        return _this;
      }
      return FetchError2;
    }(Error)
  );
  var TimeoutError = (
    /** @class */
    function(_super) {
      __extends(TimeoutError2, _super);
      function TimeoutError2(message) {
        var _this = _super.call(this, message) || this;
        Object.setPrototypeOf(_this, TimeoutError2.prototype);
        return _this;
      }
      return TimeoutError2;
    }(Error)
  );
  var SdkEvaluationApi = (
    /** @class */
    function() {
      function SdkEvaluationApi2(deploymentKey, serverUrl, httpClient) {
        this.deploymentKey = deploymentKey;
        this.serverUrl = serverUrl;
        this.httpClient = httpClient;
      }
      SdkEvaluationApi2.prototype.getVariants = function(user, options) {
        return __awaiter(this, void 0, void 0, function() {
          var userJsonBase64, headers, url, response;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                userJsonBase64 = gBase64.encodeURL(JSON.stringify(user));
                headers = {
                  Authorization: "Api-Key ".concat(this.deploymentKey),
                  "X-Amp-Exp-User": userJsonBase64
                };
                if (options === null || options === void 0 ? void 0 : options.flagKeys) {
                  headers["X-Amp-Exp-Flag-Keys"] = gBase64.encodeURL(JSON.stringify(options.flagKeys));
                }
                if (options === null || options === void 0 ? void 0 : options.trackingOption) {
                  headers["X-Amp-Exp-Track"] = options.trackingOption;
                }
                if (options === null || options === void 0 ? void 0 : options.exposureTrackingOption) {
                  headers["X-Amp-Exp-Exposure-Track"] = options.exposureTrackingOption;
                }
                url = new URL("".concat(this.serverUrl, "/sdk/v2/vardata?v=0"));
                if (options === null || options === void 0 ? void 0 : options.evaluationMode) {
                  url.searchParams.append("eval_mode", options === null || options === void 0 ? void 0 : options.evaluationMode);
                }
                if (options === null || options === void 0 ? void 0 : options.deliveryMethod) {
                  url.searchParams.append("delivery_method", options === null || options === void 0 ? void 0 : options.deliveryMethod);
                }
                return [4, this.httpClient.request({
                  requestUrl: url.toString(),
                  method: "GET",
                  headers,
                  timeoutMillis: options === null || options === void 0 ? void 0 : options.timeoutMillis
                })];
              case 1:
                response = _a.sent();
                if (response.status != 200) {
                  throw new FetchError(response.status, "Fetch error response: status=".concat(response.status));
                }
                return [2, JSON.parse(response.body)];
            }
          });
        });
      };
      return SdkEvaluationApi2;
    }()
  );
  var SdkFlagApi = (
    /** @class */
    function() {
      function SdkFlagApi2(deploymentKey, serverUrl, httpClient) {
        this.deploymentKey = deploymentKey;
        this.serverUrl = serverUrl;
        this.httpClient = httpClient;
      }
      SdkFlagApi2.prototype.getFlags = function(options) {
        return __awaiter(this, void 0, void 0, function() {
          var headers, response, flagsArray;
          return __generator(this, function(_a) {
            switch (_a.label) {
              case 0:
                headers = {
                  Authorization: "Api-Key ".concat(this.deploymentKey)
                };
                if ((options === null || options === void 0 ? void 0 : options.libraryName) && (options === null || options === void 0 ? void 0 : options.libraryVersion)) {
                  headers["X-Amp-Exp-Library"] = "".concat(options.libraryName, "/").concat(options.libraryVersion);
                }
                if (options === null || options === void 0 ? void 0 : options.user) {
                  headers["X-Amp-Exp-User"] = gBase64.encodeURL(JSON.stringify(options.user));
                }
                return [4, this.httpClient.request({
                  requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags") + ((options === null || options === void 0 ? void 0 : options.deliveryMethod) ? "?delivery_method=".concat(options.deliveryMethod) : ""),
                  method: "GET",
                  headers,
                  timeoutMillis: options === null || options === void 0 ? void 0 : options.timeoutMillis
                })];
              case 1:
                response = _a.sent();
                if (response.status != 200) {
                  throw Error("Flags error response: status=".concat(response.status));
                }
                flagsArray = JSON.parse(response.body);
                return [2, flagsArray.reduce(function(map2, flag) {
                  map2[flag.key] = flag;
                  return map2;
                }, {})];
            }
          });
        });
      };
      return SdkFlagApi2;
    }()
  );
  var safeGlobal2 = typeof globalThis !== "undefined" ? globalThis : global || self;
  var Poller = (
    /** @class */
    function() {
      function Poller2(action, ms) {
        this.poller = void 0;
        this.action = action;
        this.ms = ms;
      }
      Poller2.prototype.start = function() {
        if (this.poller) {
          return;
        }
        this.poller = safeGlobal2.setInterval(this.action, this.ms);
        void this.action();
      };
      Poller2.prototype.stop = function() {
        if (!this.poller) {
          return;
        }
        safeGlobal2.clearInterval(this.poller);
        this.poller = void 0;
      };
      return Poller2;
    }()
  );

  // ../shared/src/store/MessageBus.ts
  var import_debounce2 = __toESM(require_debounce());
  var MessageBus = class {
    messageToSubscriberGroup;
    debounce;
    constructor(debounce2 = import_debounce2.default) {
      this.messageToSubscriberGroup = /* @__PURE__ */ new Map();
      this.debounce = debounce2;
    }
    // Register a subscriber with optional ID (for unsubscribing) and optional debounce timeout (no debounce if not provided)
    subscribe(messageType, listener, listenerId = void 0, debounceTimeout = void 0) {
      let entry = this.messageToSubscriberGroup.get(messageType);
      if (!entry) {
        entry = { subscribers: [] };
        this.messageToSubscriberGroup.set(messageType, entry);
      }
      const subscriber = { identifier: listenerId, callback: listener };
      if (debounceTimeout !== void 0) {
        subscriber.debouncedCallback = this.debounce(listener, debounceTimeout, { maxWait: 5e3 });
      }
      entry.subscribers.push(subscriber);
    }
    // Publish a message, calling all subscribers for that subscribe to the corresponding message type
    publish(messageType, payload) {
      const entry = this.messageToSubscriberGroup.get(messageType);
      if (!entry) return;
      entry.subscribers.forEach((subscriber) => {
        payload = payload || {};
        try {
          if (subscriber.debouncedCallback) {
            subscriber.debouncedCallback(payload);
          } else {
            subscriber.callback(payload);
          }
        } catch (error) {
          logger.error("Error in message subscriber:", error);
        }
      });
    }
    // Remove a specific subscriber for an event by ID
    unsubscribe(messageType, subscriberIdentifier) {
      const entry = this.messageToSubscriberGroup.get(messageType);
      if (!entry) return;
      const activeSubscribers = [];
      for (const subscriber of entry.subscribers) {
        if (subscriber.identifier === subscriberIdentifier) {
          subscriber.debouncedCallback?.cancel();
        } else {
          activeSubscribers.push(subscriber);
        }
      }
      entry.subscribers = activeSubscribers;
    }
  };

  // ../shared/src/store/global-store.ts
  var NOOP_SERVICES = {
    closeNudgeMock: (..._args) => {
      return;
    },
    addClickListener: (..._args) => {
      return () => {
        return;
      };
    },
    clickElement: (..._args) => {
      return false;
    },
    closeAllNudgeMocks: (..._args) => {
      return;
    },
    closeStep: (..._args) => {
      return;
    },
    onLocationChange: (..._args) => {
      return () => {
        return;
      };
    },
    renderNudge: (..._args) => {
      return;
    },
    openChatExecutable: (..._args) => {
      return;
    },
    postMessageToDashboard: (..._args) => {
      return;
    },
    linkExecutable: (..._args) => {
      return;
    },
    getDefaultUIMode: () => "lightMode",
    isElementVisible: async () => false,
    matchesSelector: () => false,
    showResourceCenter: (..._args) => {
      return;
    },
    setCurrentContentId: (..._args) => {
      return;
    },
    previewRecSet: (..._args) => {
      return;
    },
    previewResourceCenter: (..._args) => {
      return;
    },
    previewAutopilotKeywords: (..._args) => {
      return;
    },
    enrichUser: (user) => {
      return user;
    },
    appReviewExecutable: (..._args) => {
      return;
    },
    supportedBreakingFeatures: []
  };
  var DEFAULT_OPTIONS2 = {
    isEditorPreview: false,
    isAssistantPreview: false,
    platform: "unknown",
    location: {
      href: "",
      pathname: "",
      search: ""
    },
    services: NOOP_SERVICES,
    persistResourceCenter: true
  };
  var SESSION_START_KEY = "sessionStart";
  var getOrCreateSessionStart = () => {
    const stored = SessionStorage_default.get(SESSION_START_KEY, 0);
    if (stored && typeof stored === "number" && stored > 0) {
      return stored;
    }
    const now = Date.now();
    SessionStorage_default.set(SESSION_START_KEY, now);
    return now;
  };
  var emptyGlobalStore = (optionsPartial) => {
    const options = { ...DEFAULT_OPTIONS2, ...optionsPartial };
    const { isEditorPreview, platform, isAssistantPreview } = options;
    return {
      hasBooted: false,
      services: options.services,
      location: options.location,
      organization: void 0,
      user: void 0,
      endUserStore: window.Cypress ? new LocalStorageTestEndUserStore() : isEditorPreview ? new NullEndUserStore() : new RemoteEndUserStore(),
      decide: void 0,
      evalEngine: new EvaluationEngine(),
      callbacks: {},
      sessionProperties: {},
      flags: null,
      nudgesManager: null,
      effectsSequencer: null,
      currentModalNudge: null,
      activeChecklist: null,
      timedTriggers: /* @__PURE__ */ new Map(),
      platform,
      trackedAppEvents: /* @__PURE__ */ new Set(),
      showWidgetTableau: false,
      widgetTableauSelection: { widgets: ["guide", "survey", "resourceCenter", "assistant"] },
      themeMode: "lightMode",
      themes: [],
      messageBus: new MessageBus(),
      nudgeDebugToolBar: {
        visible: false,
        closeTabWhenToolbarClosed: false,
        bypassCustomThrottles: true,
        position: "bottom",
        originalInitLocale: void 0
      },
      nudgeRecorderToolBar: {
        visible: false
      },
      // needed for dashboard preview
      editorPreviewDevice: "desktop",
      isEditorPreview,
      isAssistantPreview,
      sessionStart: getOrCreateSessionStart(),
      integrations: [],
      resourceCenter: {
        renderKey: 0,
        visible: false,
        minimized: false,
        loading: false,
        scrollPosition: 0,
        query: null,
        searchResults: [],
        experienceSearchResults: [],
        currentContentItemId: null,
        currentDocHeading: null,
        recommendationSets: null,
        previewedRecommendationSet: null,
        additionalResources: null,
        previewedAdditionalResources: null,
        parsingUrlParams: false,
        initialPage: null,
        isAutopilotEnabled: false,
        textStrings: {},
        showQuickLinks: false,
        isAdditionalResourcesExpanded: true,
        shouldPersistOnReload: true,
        filter: null
      }
    };
  };
  var initValtioGlobalStore = (options) => {
    const resourceCenterFromStorage = retrieveStoredResourceCenterState();
    const baseStore = emptyGlobalStore(options);
    const persistResourceCenter = (options?.persistResourceCenter ?? true) && !options?.isEditorPreview;
    return proxy({
      ...baseStore,
      resourceCenter: {
        ...baseStore.resourceCenter,
        shouldPersistOnReload: persistResourceCenter,
        ...persistResourceCenter ? resourceCenterFromStorage : {}
      }
    });
  };
  var initGlobalSubs = (_) => {
    const unsubs = [...initValtioGlobalStoreSubs(_)];
    return () => unsubs.forEach((unsub) => unsub());
  };

  // ../shared/src/internal/util/proxyMediaUrl.ts
  var AMPLITUDE_IMAGE_DOMAINS = [
    "engagement-static.amplitude.com",
    "engagement-static.eu.amplitude.com",
    "engagement-static.amplitudeengagement.com",
    "engagement-static.eu.amplitudeengagement.com"
  ];
  var stripAmplitudeImageDomain = (url) => {
    try {
      for (const domain of AMPLITUDE_IMAGE_DOMAINS) {
        const domainWithScheme = `https://${domain}/`;
        if (url.startsWith(domainWithScheme)) {
          return url.slice(domainWithScheme.length - 1);
        }
      }
    } catch (e2) {
      logger.warn(`isAmplitudeHosted#error url=${url}, error=${e2}`);
    }
    return null;
  };
  var proxyMediaUrl = (originalUrl) => {
    const sdk = getSDK();
    let customMediaUrl = sdk?.[_configuration]?.mediaUrl;
    if (!customMediaUrl) return originalUrl;
    if (customMediaUrl.endsWith("/")) customMediaUrl = customMediaUrl.slice(0, -1);
    const originalUrlStripped = stripAmplitudeImageDomain(originalUrl);
    if (originalUrlStripped == null) return originalUrl;
    try {
      return customMediaUrl + originalUrlStripped;
    } catch (e2) {
      logger.warn(
        "proxyMediaUrl#error -- will keep original url; originalUrl=${originalUrl}, customMediaUrl=${customMediaUrl}, error=${e}"
      );
      return originalUrl;
    }
  };

  // ../shared/src/internal/util/theme.ts
  var findDefaultTheme = (themes, productType) => {
    const productFilteredThemes = themes.filter(({ product }) => product === productType);
    const platformSpecificDefault = productFilteredThemes.find(
      ({ isDefault, platform }) => isDefault && platform?.type === __GS_PLATFORM__
    )?.theme;
    if (!platformSpecificDefault) {
      return productFilteredThemes.find(({ isDefault, platform }) => isDefault && !platform)?.theme;
    }
    return platformSpecificDefault;
  };

  // src/services/nudge.ts
  var nudgeServicesBridge = registerNativeBridge("nudgeServices");
  var nudgeService = {
    closeNudgeMock: () => {
    },
    closeAllNudgeMocks: () => {
    },
    closeStep: (_, nudge, stepIndex) => nudgeServicesBridge.function("closeStep").call(JSON.stringify(nudge), stepIndex),
    renderNudge(_, nudge, stepIndex, options) {
      nudge = interpolateUserPropertiesDeep(nudge, _);
      nudge = {
        ...nudge,
        steps: nudge.steps.map((step) => ({
          ...step,
          content: step.content.map((block) => {
            if (block.type === "image") {
              return {
                ...block,
                meta: {
                  ...block.meta,
                  src: block.meta.src ? proxyMediaUrl(block.meta.src) : block.meta.src
                }
              };
            }
            return block;
          })
        }))
      };
      let theme = _.themeOverride;
      const themeMode = _.themeMode === "auto" ? _.services.getDefaultUIMode() : _.themeMode;
      if (nudge?.customThemeId !== void 0 && nudge.customThemeId !== null) {
        theme = {
          theme: _.themes.find((t14) => t14.id === nudge.customThemeId)?.theme,
          mode: themeMode
        };
      }
      if (!theme) {
        theme = {
          theme: findDefaultTheme(_.themes, "guides-surveys"),
          mode: themeMode
        };
      }
      const _options = {
        renderMode: options?.renderMode,
        forceOpen: options?.forceOpen,
        overrides: options?.overrides
      };
      const actor = getNudgeActor(_, nudge.variantId);
      const currentStep = nudge.steps[stepIndex];
      const surveyResponses = actor?.getSnapshot()?.context?.surveyResponses?.[currentStep?.id] || {};
      nudgeServicesBridge.function("renderNudge").call(JSON.stringify({ nudge, stepIndex, options: _options, theme, surveyResponses }));
    }
  };
  var nudge_default = nudgeService;

  // src/services/index.ts
  var nudgeServicesBridge2 = registerNativeBridge("nudgeServices");
  var matchesSelector = (targetElement, identifier) => targetElement?.identifier === identifier;
  var DEFAULT_SUPPORTED_BREAKING_FEATURES = [];
  var getSupportedBreakingFeatures = () => {
    try {
      return nudgeServicesBridge2.function("supportedBreakingFeatures").call() ?? DEFAULT_SUPPORTED_BREAKING_FEATURES;
    } catch {
      return DEFAULT_SUPPORTED_BREAKING_FEATURES;
    }
  };
  var services = {
    ...NOOP_SERVICES,
    ...nudge_default,
    onLocationChange,
    enrichUser: (user) => user,
    // No-op for mobile - just return user as-is
    linkExecutable: (_, action, forceNewTab) => nudgeServicesBridge2.function("linkExecutable").call(JSON.stringify(action), forceNewTab),
    getDefaultUIMode: () => nudgeServicesBridge2.function("getDefaultUIMode").call(),
    clickElement: (selector) => nudgeServicesBridge2.function("clickElement").call(selector),
    isElementVisible: async (selector) => nudgeServicesBridge2.function("isElementVisible").promise({ selector: typeof selector === "string" ? selector : selector.selector || selector.text }),
    matchesSelector,
    appReviewExecutable: (_, action) => nudgeServicesBridge2.function("appReviewExecutable").call(JSON.stringify(action)),
    // Mobile native has limited support for breaking features
    // Features are identified by four-digit numbers (e.g., '0001')
    // Fetched from native SDK, with fallback for older versions that don't expose this function
    supportedBreakingFeatures: getSupportedBreakingFeatures()
  };

  // src/logger.ts
  var DefaultMobileLogger = class extends DefaultLogger {
    log(...args) {
      console.log(...args);
    }
    warn(...args) {
      console.warn(...args);
    }
    error(...args) {
      console.error(...args);
    }
    debug(...args) {
      console.debug(...args);
    }
  };

  // src/index.ts
  globalThis.window = {};
  var getApiEndpoint = (serverZone) => {
    switch (serverZone) {
      case "US":
        return "https://gs.amplitude.com";
      case "EU":
        return "https://gs.eu.amplitude.com";
      default:
        return "http://localhost:10001";
    }
  };
  var SERVER_LAUNCH_CODE_MAPPING = {
    local: "http://localhost:10001",
    staging: "https://gs.stag2.amplitude.com",
    stag: "https://gs.stag2.amplitude.com",
    stag2: "https://gs.stag2.amplitude.com",
    prod: "https://gs.amplitude.com",
    prodUs: "https://gs.amplitude.com",
    prodEu: "https://gs.eu.amplitude.com"
  };
  var invokeImmediately = async () => {
    if (window.engagement?._initStarted === true) {
      return;
    } else if (window.engagement) {
      window.engagement._initStarted = true;
    }
    const proxy2 = window.engagement;
    const { apiKey, serverUrl, serverZone } = proxy2._configuration;
    const takeoverApiKey = LocalStorage_default.get("takeover", "");
    if (!apiKey) {
      throw new Error(
        "Organization `apiKey` has not been set on the global _configuration object. Make sure you've called `init` before loading this script"
      );
    }
    proxy2[_configuration].serverUrl = serverUrl || getApiEndpoint(serverZone);
    const launchCode = LocalStorage_default.get("launchCode", "");
    if (launchCode) {
      const serverUrl2 = SERVER_LAUNCH_CODE_MAPPING[launchCode];
      if (serverUrl2) {
        logger.debug(`Using ${launchCode} launch code with server URL: ${serverUrl2}`);
        proxy2[_configuration].serverUrl = serverUrl2;
      }
    }
    proxy2[_configuration].apiKey = apiKey;
    const hasCustomLogger = !!proxy2[_configuration].options?.logger;
    if (!proxy2[_configuration].options?.logger) {
      proxy2[_configuration].options.logger = new DefaultMobileLogger();
    }
    const logLevel = proxy2[_configuration].options?.logLevel;
    if (logLevel !== void 0) {
      proxy2[_configuration].options.logger.enable(logLevel);
    }
    if (hasCustomLogger) {
      logger.log("Using custom logger", proxy2[_configuration].options.logger);
    } else {
      logger.log("Using default logger");
    }
    if (takeoverApiKey) {
      proxy2[_configuration].apiKey = takeoverApiKey;
    }
    logger.log("initializing client SDK...");
    const _ = initValtioGlobalStore({
      isEditorPreview: false,
      platform: "android",
      // TODO fixme
      location: {
        href: "",
        pathname: "",
        search: ""
      },
      services
    });
    initGlobalSubs(_);
    let sdk = new EngagementSDK(_, proxy2._configuration);
    await sdk._configUser();
    sdk = await convertProxyObjectToRealObject(sdk, proxy2._q);
    Object.assign(window.engagement, sdk);
    Object.setPrototypeOf(window.engagement, sdk);
    subscribeToSimulationActions(_);
    logger.debug("Engagement bundle loaded");
  };
  window.engagement = createProxy(invokeImmediately);
})();
