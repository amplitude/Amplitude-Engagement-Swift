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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var nativeObjectToString = objectProto.toString;
      var symToStringTag = Symbol2 ? Symbol2.toStringTag : void 0;
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
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

  // ../shared/node_modules/lodash/isObject.js
  var require_isObject = __commonJS({
    "../shared/node_modules/lodash/isObject.js"(exports, module) {
      function isObject2(value) {
        var type2 = typeof value;
        return value != null && (type2 == "object" || type2 == "function");
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var reIsNative = RegExp(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
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
      function getValue(object2, key) {
        return object2 == null ? void 0 : object2[key];
      }
      module.exports = getValue;
    }
  });

  // ../shared/node_modules/lodash/_getNative.js
  var require_getNative = __commonJS({
    "../shared/node_modules/lodash/_getNative.js"(exports, module) {
      var baseIsNative = require_baseIsNative();
      var getValue = require_getValue();
      function getNative(object2, key) {
        var value = getValue(object2, key);
        return baseIsNative(value) ? value : void 0;
      }
      module.exports = getNative;
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
      function baseAssignValue(object2, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object2, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object2[key] = value;
        }
      }
      module.exports = baseAssignValue;
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

  // ../shared/node_modules/lodash/_assignValue.js
  var require_assignValue = __commonJS({
    "../shared/node_modules/lodash/_assignValue.js"(exports, module) {
      var baseAssignValue = require_baseAssignValue();
      var eq = require_eq();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function assignValue(object2, key, value) {
        var objValue = object2[key];
        if (!(hasOwnProperty2.call(object2, key) && eq(objValue, value)) || value === void 0 && !(key in object2)) {
          baseAssignValue(object2, key, value);
        }
      }
      module.exports = assignValue;
    }
  });

  // ../shared/node_modules/lodash/isArray.js
  var require_isArray = __commonJS({
    "../shared/node_modules/lodash/isArray.js"(exports, module) {
      var isArray3 = Array.isArray;
      module.exports = isArray3;
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
      function isKey(value, object2) {
        if (isArray3(value)) {
          return false;
        }
        var type2 = typeof value;
        if (type2 == "number" || type2 == "symbol" || type2 == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object2 != null && value in Object(object2);
      }
      module.exports = isKey;
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result = data[key];
          return result === HASH_UNDEFINED ? void 0 : result;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : void 0;
      }
      module.exports = hashGet;
    }
  });

  // ../shared/node_modules/lodash/_hashHas.js
  var require_hashHas = __commonJS({
    "../shared/node_modules/lodash/_hashHas.js"(exports, module) {
      var nativeCreate = require_nativeCreate();
      var objectProto = Object.prototype;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== void 0 : hasOwnProperty2.call(data, key);
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

  // ../shared/node_modules/lodash/_assocIndexOf.js
  var require_assocIndexOf = __commonJS({
    "../shared/node_modules/lodash/_assocIndexOf.js"(exports, module) {
      var eq = require_eq();
      function assocIndexOf(array2, key) {
        var length = array2.length;
        while (length--) {
          if (eq(array2[length][0], key)) {
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
        var type2 = typeof value;
        return type2 == "string" || type2 == "number" || type2 == "symbol" || type2 == "boolean" ? value !== "__proto__" : value === null;
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
      var stringToPath = memoizeCapped(function(string2) {
        var result = [];
        if (string2.charCodeAt(0) === 46) {
          result.push("");
        }
        string2.replace(rePropName, function(match2, number2, quote, subString) {
          result.push(quote ? subString.replace(reEscapeChar, "$1") : number2 || match2);
        });
        return result;
      });
      module.exports = stringToPath;
    }
  });

  // ../shared/node_modules/lodash/_arrayMap.js
  var require_arrayMap = __commonJS({
    "../shared/node_modules/lodash/_arrayMap.js"(exports, module) {
      function arrayMap(array2, iteratee) {
        var index = -1, length = array2 == null ? 0 : array2.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array2[index], index, array2);
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
      function castPath(value, object2) {
        if (isArray3(value)) {
          return value;
        }
        return isKey(value, object2) ? [value] : stringToPath(toString(value));
      }
      module.exports = castPath;
    }
  });

  // ../shared/node_modules/lodash/_isIndex.js
  var require_isIndex = __commonJS({
    "../shared/node_modules/lodash/_isIndex.js"(exports, module) {
      var MAX_SAFE_INTEGER = 9007199254740991;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      function isIndex(value, length) {
        var type2 = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type2 == "number" || type2 != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      module.exports = isIndex;
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

  // ../shared/node_modules/lodash/_baseSet.js
  var require_baseSet = __commonJS({
    "../shared/node_modules/lodash/_baseSet.js"(exports, module) {
      var assignValue = require_assignValue();
      var castPath = require_castPath();
      var isIndex = require_isIndex();
      var isObject2 = require_isObject();
      var toKey = require_toKey();
      function baseSet(object2, path, value, customizer) {
        if (!isObject2(object2)) {
          return object2;
        }
        path = castPath(path, object2);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object2;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object2;
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
        return object2;
      }
      module.exports = baseSet;
    }
  });

  // ../shared/node_modules/lodash/set.js
  var require_set = __commonJS({
    "../shared/node_modules/lodash/set.js"(exports, module) {
      var baseSet = require_baseSet();
      function set4(object2, path, value) {
        return object2 == null ? object2 : baseSet(object2, path, value);
      }
      module.exports = set4;
    }
  });

  // ../shared/node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    "../shared/node_modules/dayjs/dayjs.min.js"(exports, module) {
      !function(t2, e2) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e2() : "function" == typeof define && define.amd ? define(e2) : (t2 = "undefined" != typeof globalThis ? globalThis : t2 || self).dayjs = e2();
      }(exports, function() {
        "use strict";
        var t2 = 1e3, e2 = 6e4, n = 36e5, r = "millisecond", i2 = "second", s2 = "minute", u = "hour", a = "day", o = "week", f = "month", h2 = "quarter", c2 = "year", d = "date", $ = "Invalid Date", l2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y2 = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, m = function(t3, e3, n2) {
          var r2 = String(t3);
          return !r2 || r2.length >= e3 ? t3 : "" + Array(e3 + 1 - r2.length).join(n2) + t3;
        }, g = { s: m, z: function(t3) {
          var e3 = -t3.utcOffset(), n2 = Math.abs(e3), r2 = Math.floor(n2 / 60), i3 = n2 % 60;
          return (e3 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i3, 2, "0");
        }, m: function t3(e3, n2) {
          if (e3.date() < n2.date()) return -t3(n2, e3);
          var r2 = 12 * (n2.year() - e3.year()) + (n2.month() - e3.month()), i3 = e3.clone().add(r2, f), s3 = n2 - i3 < 0, u2 = e3.clone().add(r2 + (s3 ? -1 : 1), f);
          return +(-(r2 + (n2 - i3) / (s3 ? i3 - u2 : u2 - i3)) || 0);
        }, a: function(t3) {
          return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
        }, p: function(t3) {
          return { M: f, y: c2, w: o, d: a, D: d, h: u, m: s2, s: i2, ms: r, Q: h2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
        }, u: function(t3) {
          return void 0 === t3;
        } }, v = "en", D = {};
        D[v] = M;
        var p = function(t3) {
          return t3 instanceof _;
        }, S = function t3(e3, n2, r2) {
          var i3;
          if (!e3) return v;
          if ("string" == typeof e3) {
            var s3 = e3.toLowerCase();
            D[s3] && (i3 = s3), n2 && (D[s3] = n2, i3 = s3);
            var u2 = e3.split("-");
            if (!i3 && u2.length > 1) return t3(u2[0]);
          } else {
            var a2 = e3.name;
            D[a2] = e3, i3 = a2;
          }
          return !r2 && i3 && (v = i3), i3 || !r2 && v;
        }, w = function(t3, e3) {
          if (p(t3)) return t3.clone();
          var n2 = "object" == typeof e3 ? e3 : {};
          return n2.date = t3, n2.args = arguments, new _(n2);
        }, O = g;
        O.l = S, O.i = p, O.w = function(t3, e3) {
          return w(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
        };
        var _ = function() {
          function M2(t3) {
            this.$L = S(t3.locale, null, true), this.parse(t3);
          }
          var m2 = M2.prototype;
          return m2.parse = function(t3) {
            this.$d = function(t4) {
              var e3 = t4.date, n2 = t4.utc;
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
            }(t3), this.$x = t3.x || {}, this.init();
          }, m2.init = function() {
            var t3 = this.$d;
            this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
          }, m2.$utils = function() {
            return O;
          }, m2.isValid = function() {
            return !(this.$d.toString() === $);
          }, m2.isSame = function(t3, e3) {
            var n2 = w(t3);
            return this.startOf(e3) <= n2 && n2 <= this.endOf(e3);
          }, m2.isAfter = function(t3, e3) {
            return w(t3) < this.startOf(e3);
          }, m2.isBefore = function(t3, e3) {
            return this.endOf(e3) < w(t3);
          }, m2.$g = function(t3, e3, n2) {
            return O.u(t3) ? this[e3] : this.set(n2, t3);
          }, m2.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
          }, m2.valueOf = function() {
            return this.$d.getTime();
          }, m2.startOf = function(t3, e3) {
            var n2 = this, r2 = !!O.u(e3) || e3, h3 = O.p(t3), $2 = function(t4, e4) {
              var i3 = O.w(n2.$u ? Date.UTC(n2.$y, e4, t4) : new Date(n2.$y, e4, t4), n2);
              return r2 ? i3 : i3.endOf(a);
            }, l3 = function(t4, e4) {
              return O.w(n2.toDate()[t4].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n2);
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
          }, m2.endOf = function(t3) {
            return this.startOf(t3, false);
          }, m2.$set = function(t3, e3) {
            var n2, o2 = O.p(t3), h3 = "set" + (this.$u ? "UTC" : ""), $2 = (n2 = {}, n2[a] = h3 + "Date", n2[d] = h3 + "Date", n2[f] = h3 + "Month", n2[c2] = h3 + "FullYear", n2[u] = h3 + "Hours", n2[s2] = h3 + "Minutes", n2[i2] = h3 + "Seconds", n2[r] = h3 + "Milliseconds", n2)[o2], l3 = o2 === a ? this.$D + (e3 - this.$W) : e3;
            if (o2 === f || o2 === c2) {
              var y3 = this.clone().set(d, 1);
              y3.$d[$2](l3), y3.init(), this.$d = y3.set(d, Math.min(this.$D, y3.daysInMonth())).$d;
            } else $2 && this.$d[$2](l3);
            return this.init(), this;
          }, m2.set = function(t3, e3) {
            return this.clone().$set(t3, e3);
          }, m2.get = function(t3) {
            return this[O.p(t3)]();
          }, m2.add = function(r2, h3) {
            var d2, $2 = this;
            r2 = Number(r2);
            var l3 = O.p(h3), y3 = function(t3) {
              var e3 = w($2);
              return O.w(e3.date(e3.date() + Math.round(t3 * r2)), $2);
            };
            if (l3 === f) return this.set(f, this.$M + r2);
            if (l3 === c2) return this.set(c2, this.$y + r2);
            if (l3 === a) return y3(1);
            if (l3 === o) return y3(7);
            var M3 = (d2 = {}, d2[s2] = e2, d2[u] = n, d2[i2] = t2, d2)[l3] || 1, m3 = this.$d.getTime() + r2 * M3;
            return O.w(m3, this);
          }, m2.subtract = function(t3, e3) {
            return this.add(-1 * t3, e3);
          }, m2.format = function(t3) {
            var e3 = this, n2 = this.$locale();
            if (!this.isValid()) return n2.invalidDate || $;
            var r2 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = O.z(this), s3 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h3 = function(t4, n3, i4, s4) {
              return t4 && (t4[n3] || t4(e3, r2)) || i4[n3].slice(0, s4);
            }, c3 = function(t4) {
              return O.s(s3 % 12 || 12, t4, "0");
            }, d2 = n2.meridiem || function(t4, e4, n3) {
              var r3 = t4 < 12 ? "AM" : "PM";
              return n3 ? r3.toLowerCase() : r3;
            }, l3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h3(n2.monthsShort, a2, f2, 3), MMMM: h3(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h3(n2.weekdaysMin, this.$W, o2, 2), ddd: h3(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s3), HH: O.s(s3, 2, "0"), h: c3(1), hh: c3(2), a: d2(s3, u2, true), A: d2(s3, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i3 };
            return r2.replace(y2, function(t4, e4) {
              return e4 || l3[t4] || i3.replace(":", "");
            });
          }, m2.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, m2.diff = function(r2, d2, $2) {
            var l3, y3 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e2, g2 = this - M3, v2 = O.m(this, M3);
            return v2 = (l3 = {}, l3[c2] = v2 / 12, l3[f] = v2, l3[h2] = v2 / 3, l3[o] = (g2 - m3) / 6048e5, l3[a] = (g2 - m3) / 864e5, l3[u] = g2 / n, l3[s2] = g2 / e2, l3[i2] = g2 / t2, l3)[y3] || g2, $2 ? v2 : O.a(v2);
          }, m2.daysInMonth = function() {
            return this.endOf(f).$D;
          }, m2.$locale = function() {
            return D[this.$L];
          }, m2.locale = function(t3, e3) {
            if (!t3) return this.$L;
            var n2 = this.clone(), r2 = S(t3, e3, true);
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
        return w.prototype = T, [["$ms", r], ["$s", i2], ["$m", s2], ["$H", u], ["$W", a], ["$M", f], ["$y", c2], ["$D", d]].forEach(function(t3) {
          T[t3[1]] = function(e3) {
            return this.$g(e3, t3[0], t3[1]);
          };
        }), w.extend = function(t3, e3) {
          return t3.$i || (t3(e3, _, w), t3.$i = true), w;
        }, w.locale = S, w.isDayjs = p, w.unix = function(t3) {
          return w(1e3 * t3);
        }, w.en = D[v], w.Ls = D, w.p = {}, w;
      });
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
      function assignMergeValue(object2, key, value) {
        if (value !== void 0 && !eq(object2[key], value) || value === void 0 && !(key in object2)) {
          baseAssignValue(object2, key, value);
        }
      }
      module.exports = assignMergeValue;
    }
  });

  // ../shared/node_modules/lodash/_createBaseFor.js
  var require_createBaseFor = __commonJS({
    "../shared/node_modules/lodash/_createBaseFor.js"(exports, module) {
      function createBaseFor(fromRight) {
        return function(object2, iteratee, keysFunc) {
          var index = -1, iterable = Object(object2), props = keysFunc(object2), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object2;
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
      function copyArray(source, array2) {
        var index = -1, length = source.length;
        array2 || (array2 = Array(length));
        while (++index < length) {
          array2[index] = source[index];
        }
        return array2;
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
        function object2() {
        }
        return function(proto) {
          if (!isObject2(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object2.prototype = proto;
          var result = new object2();
          object2.prototype = void 0;
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
      function initCloneObject(object2) {
        return typeof object2.constructor == "function" && !isPrototype(object2) ? baseCreate(getPrototype(object2)) : {};
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var isArguments = baseIsArguments(/* @__PURE__ */ function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var objectCtorString = funcToString.call(Object);
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
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
      function safeGet(object2, key) {
        if (key === "constructor" && typeof object2[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object2[key];
      }
      module.exports = safeGet;
    }
  });

  // ../shared/node_modules/lodash/_copyObject.js
  var require_copyObject = __commonJS({
    "../shared/node_modules/lodash/_copyObject.js"(exports, module) {
      var assignValue = require_assignValue();
      var baseAssignValue = require_baseAssignValue();
      function copyObject(source, props, object2, customizer) {
        var isNew = !object2;
        object2 || (object2 = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object2[key], source[key], key, object2, source) : void 0;
          if (newValue === void 0) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object2, key, newValue);
          } else {
            assignValue(object2, key, newValue);
          }
        }
        return object2;
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray3(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
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
      function nativeKeysIn(object2) {
        var result = [];
        if (object2 != null) {
          for (var key in Object(object2)) {
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseKeysIn(object2) {
        if (!isObject2(object2)) {
          return nativeKeysIn(object2);
        }
        var isProto = isPrototype(object2), result = [];
        for (var key in object2) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object2, key)))) {
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
      function keysIn(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2, true) : baseKeysIn(object2);
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
      function baseMergeDeep(object2, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object2, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object2, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object2, source, stack) : void 0;
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
        assignMergeValue(object2, key, newValue);
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
      function baseMerge(object2, source, srcIndex, customizer, stack) {
        if (object2 === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject2(srcValue)) {
            baseMergeDeep(object2, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object2, key), srcValue, key + "", object2, source, stack) : void 0;
            if (newValue === void 0) {
              newValue = srcValue;
            }
            assignMergeValue(object2, key, newValue);
          }
        }, keysIn);
      }
      module.exports = baseMerge;
    }
  });

  // ../shared/node_modules/lodash/identity.js
  var require_identity = __commonJS({
    "../shared/node_modules/lodash/identity.js"(exports, module) {
      function identity3(value) {
        return value;
      }
      module.exports = identity3;
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
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array2 = Array(length);
          while (++index < length) {
            array2[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform(array2);
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
      var identity3 = require_identity();
      var baseSetToString = !defineProperty ? identity3 : function(func, string2) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string2),
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
      var identity3 = require_identity();
      var overRest = require_overRest();
      var setToString = require_setToString();
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity3), func + "");
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
      function isIterateeCall(value, index, object2) {
        if (!isObject2(object2)) {
          return false;
        }
        var type2 = typeof index;
        if (type2 == "number" ? isArrayLike(object2) && isIndex(index, object2.length) : type2 == "string" && index in object2) {
          return eq(object2[index], value);
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
        return baseRest(function(object2, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : void 0, guard2 = length > 2 ? sources[2] : void 0;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : void 0;
          if (guard2 && isIterateeCall(sources[0], sources[1], guard2)) {
            customizer = length < 3 ? void 0 : customizer;
            length = 1;
          }
          object2 = Object(object2);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object2, source, index, customizer);
            }
          }
          return object2;
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
      var mergeWith2 = createAssigner(function(object2, source, srcIndex, customizer) {
        baseMerge(object2, source, srcIndex, customizer);
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
      function arraySome(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length;
        while (++index < length) {
          if (predicate(array2[index], index, array2)) {
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
      function equalArrays(array2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array2.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array2);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array2;
        }
        var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : void 0;
        stack.set(array2, other);
        stack.set(other, array2);
        while (++index < arrLength) {
          var arrValue = array2[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array2, stack) : customizer(arrValue, othValue, index, array2, other, stack);
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
        stack["delete"](array2);
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
      function equalByTag(object2, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object2.byteLength != other.byteLength || object2.byteOffset != other.byteOffset) {
              return false;
            }
            object2 = object2.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object2.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object2), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object2, +other);
          case errorTag:
            return object2.name == other.name && object2.message == other.message;
          case regexpTag:
          case stringTag:
            return object2 == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object2.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object2);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object2, other);
            var result = equalArrays(convert(object2), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object2);
            return result;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object2) == symbolValueOf.call(other);
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
      function arrayPush(array2, values) {
        var index = -1, length = values.length, offset = array2.length;
        while (++index < length) {
          array2[offset + index] = values[index];
        }
        return array2;
      }
      module.exports = arrayPush;
    }
  });

  // ../shared/node_modules/lodash/_baseGetAllKeys.js
  var require_baseGetAllKeys = __commonJS({
    "../shared/node_modules/lodash/_baseGetAllKeys.js"(exports, module) {
      var arrayPush = require_arrayPush();
      var isArray3 = require_isArray();
      function baseGetAllKeys(object2, keysFunc, symbolsFunc) {
        var result = keysFunc(object2);
        return isArray3(object2) ? result : arrayPush(result, symbolsFunc(object2));
      }
      module.exports = baseGetAllKeys;
    }
  });

  // ../shared/node_modules/lodash/_arrayFilter.js
  var require_arrayFilter = __commonJS({
    "../shared/node_modules/lodash/_arrayFilter.js"(exports, module) {
      function arrayFilter(array2, predicate) {
        var index = -1, length = array2 == null ? 0 : array2.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array2[index];
          if (predicate(value, index, array2)) {
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
      var getSymbols = !nativeGetSymbols ? stubArray : function(object2) {
        if (object2 == null) {
          return [];
        }
        object2 = Object(object2);
        return arrayFilter(nativeGetSymbols(object2), function(symbol) {
          return propertyIsEnumerable.call(object2, symbol);
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseKeys(object2) {
        if (!isPrototype(object2)) {
          return nativeKeys(object2);
        }
        var result = [];
        for (var key in Object(object2)) {
          if (hasOwnProperty2.call(object2, key) && key != "constructor") {
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
      function keys(object2) {
        return isArrayLike(object2) ? arrayLikeKeys(object2) : baseKeys(object2);
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
      function getAllKeys(object2) {
        return baseGetAllKeys(object2, keys, getSymbols);
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function equalObjects(object2, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object2), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object2);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object2;
        }
        var result = true;
        stack.set(object2, other);
        stack.set(other, object2);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object2[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object2, stack) : customizer(objValue, othValue, key, object2, other, stack);
          }
          if (!(compared === void 0 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result && !skipCtor) {
          var objCtor = object2.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object2 && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result = false;
          }
        }
        stack["delete"](object2);
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
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      function baseIsEqualDeep(object2, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray3(object2), othIsArr = isArray3(other), objTag = objIsArr ? arrayTag : getTag(object2), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object2)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object2) ? equalArrays(object2, other, bitmask, customizer, equalFunc, stack) : equalByTag(object2, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object2, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object2.value() : object2, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object2, other, bitmask, customizer, equalFunc, stack);
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

  // ../shared/node_modules/lodash/_baseGet.js
  var require_baseGet = __commonJS({
    "../shared/node_modules/lodash/_baseGet.js"(exports, module) {
      var castPath = require_castPath();
      var toKey = require_toKey();
      function baseGet(object2, path) {
        path = castPath(path, object2);
        var index = 0, length = path.length;
        while (object2 != null && index < length) {
          object2 = object2[toKey(path[index++])];
        }
        return index && index == length ? object2 : void 0;
      }
      module.exports = baseGet;
    }
  });

  // ../shared/node_modules/lodash/get.js
  var require_get = __commonJS({
    "../shared/node_modules/lodash/get.js"(exports, module) {
      var baseGet = require_baseGet();
      function get5(object2, path, defaultValue) {
        var result = object2 == null ? void 0 : baseGet(object2, path);
        return result === void 0 ? defaultValue : result;
      }
      module.exports = get5;
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
      function trimmedEndIndex(string2) {
        var index = string2.length;
        while (index-- && reWhitespace.test(string2.charAt(index))) {
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
      function baseTrim(string2) {
        return string2 ? string2.slice(0, trimmedEndIndex(string2) + 1).replace(reTrimStart, "") : string2;
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
      function debounce(func, wait, options) {
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
      module.exports = debounce;
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
  function getRandomValues(array2) {
    if (!(array2 instanceof Int8Array || array2 instanceof Uint8Array || array2 instanceof Int16Array || array2 instanceof Uint16Array || array2 instanceof Int32Array || array2 instanceof Uint32Array || array2 instanceof Uint8ClampedArray)) {
      throw new Error("Expected an integer array");
    }
    if (array2.byteLength > 65536) {
      throw new Error("Can only request a maximum of 65536 bytes");
    }
    const base64 = registerNativeBridge().function("getRandomBase64").call(array2.byteLength);
    const decoded = registerNativeBridge().function("base64Decode").call(base64);
    const bytes = new Uint8Array(array2.byteLength);
    for (let i2 = 0; i2 < array2.byteLength; i2++) {
      bytes[i2] = decoded.charCodeAt(i2);
    }
    array2.set(bytes);
    return array2;
  }
  registerJSBridge("crypto").function("getRandomValues", getRandomValues);

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
    const match2 = src.match(/^xstate\.invoke\.(\d+)\.(.*)/);
    if (!match2) {
      return machine.implementations.actors[src];
    }
    const [, indexStr, nodeId] = match2;
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
    on(type2, handler) {
      let listeners = this.eventListeners.get(type2);
      if (!listeners) {
        listeners = /* @__PURE__ */ new Set();
        this.eventListeners.set(type2, listeners);
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
        target: target ? target.map((t2) => `#${t2.id}`) : void 0
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
        transitions.set(descriptor, toTransitionConfigArray(transitionsConfig).map((t2) => formatTransition(stateNode, descriptor, t2)));
      }
    }
    if (stateNode.config.onDone) {
      const descriptor = `xstate.done.state.${stateNode.id}`;
      transitions.set(descriptor, toTransitionConfigArray(stateNode.config.onDone).map((t2) => formatTransition(stateNode, descriptor, t2)));
    }
    for (const invokeDef of stateNode.invoke) {
      if (invokeDef.onDone) {
        const descriptor = `xstate.done.actor.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onDone).map((t2) => formatTransition(stateNode, descriptor, t2)));
      }
      if (invokeDef.onError) {
        const descriptor = `xstate.error.actor.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onError).map((t2) => formatTransition(stateNode, descriptor, t2)));
      }
      if (invokeDef.onSnapshot) {
        const descriptor = `xstate.snapshot.${invokeDef.id}`;
        transitions.set(descriptor, toTransitionConfigArray(invokeDef.onSnapshot).map((t2) => formatTransition(stateNode, descriptor, t2)));
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
      target: normalizedTarget.map((t2) => typeof t2 === "string" ? getStateNodeByPath(stateNode.parent, t2) : t2)
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
      for (const t2 of filteredTransitions) {
        if (hasIntersection(computeExitSet([t1], stateNodeSet, historyValue), computeExitSet([t2], stateNodeSet, historyValue))) {
          if (isDescendant(t1.source, t2.source)) {
            transitionsToRemove.add(t2);
          } else {
            t1Preempted = true;
            break;
          }
        }
      }
      if (!t1Preempted) {
        for (const t3 of transitionsToRemove) {
          filteredTransitions.delete(t3);
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
    for (const t2 of transitions) {
      if (t2.target?.length) {
        const domain = getTransitionDomain(t2, historyValue);
        if (t2.reenter && t2.source === domain) {
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
    nextState = resolveActionsAndContext(nextState, event, actorScope, filteredTransitions.flatMap((t2) => t2.actions), internalQueue, void 0);
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
    for (const t2 of transitions) {
      const domain = getTransitionDomain(t2, historyValue);
      for (const s2 of t2.target || []) {
        if (!isHistoryNode(s2) && // if the target is different than the source then it will *definitely* be entered
        (t2.source !== s2 || // we know that the domain can't lie within the source
        // if it's different than the source then it's outside of it and it means that the target has to be entered as well
        t2.source !== domain || // reentering transitions always enter the target, even if it's the source itself
        t2.reenter)) {
          statesToEnter.add(s2);
          statesForDefaultEntry.add(s2);
        }
        addDescendantStatesToEnter(s2, historyValue, statesForDefaultEntry, statesToEnter);
      }
      const targetStates = getEffectiveTargetStates(t2, historyValue);
      for (const s2 of targetStates) {
        const ancestors = getProperAncestors(s2, domain);
        if (domain?.type === "parallel") {
          ancestors.push(domain);
        }
        addAncestorStatesToEnter(statesToEnter, historyValue, statesForDefaultEntry, ancestors, !t2.source.parent && t2.reenter ? void 0 : domain);
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
    transitionData.some((t2) => t2.target !== void 0 || t2.actions.length);
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
  function memo(object2, key, fn) {
    let memoizedData = cache.get(object2);
    if (!memoizedData) {
      memoizedData = {
        [key]: fn()
      };
      cache.set(object2, memoizedData);
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
        this.always = toTransitionConfigArray(this.config.always).map((t2) => formatTransition(this, NULL_EVENT, t2));
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
            target: this.initial.target.map((t2) => `#${t2.id}`),
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
        transitions: [...this.transitions.values()].flat().map((t2) => ({
          ...t2,
          actions: t2.actions.map(toSerializableAction)
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
        return [...transitions].flatMap(([descriptor, t2]) => t2.map((t3) => [descriptor, t3])).reduce((map2, [descriptor, transition]) => {
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
  var t = Symbol();
  var s = Object.getPrototypeOf;
  var c = /* @__PURE__ */ new WeakMap();
  var l = (e2) => e2 && (c.has(e2) ? c.get(e2) : s(e2) === Object.prototype || s(e2) === Array.prototype);
  var y = (e2) => l(e2) && e2[t] || null;
  var h = (e2, t2 = true) => {
    c.set(e2, t2);
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
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
    if (!validate_default(uuid)) {
      throw TypeError("Stringified UUID is invalid");
    }
    return uuid;
  }
  var stringify_default = stringify;

  // ../shared/node_modules/uuid/dist/esm-browser/v4.js
  function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)();
    rnds[6] = rnds[6] & 15 | 64;
    rnds[8] = rnds[8] & 63 | 128;
    if (buf) {
      offset = offset || 0;
      for (var i2 = 0; i2 < 16; ++i2) {
        buf[offset + i2] = rnds[i2];
      }
      return buf;
    }
    return stringify_default(rnds);
  }
  var v4_default = v4;

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
  var left = function(e2) {
    return { _tag: "Left", left: e2 };
  };
  var right = function(a) {
    return { _tag: "Right", right: a };
  };
  var matchW = function(onLeft, onRight) {
    return function(ma) {
      return isLeft2(ma) ? onLeft(ma.left) : onRight(ma.right);
    };
  };
  var match = matchW;
  var fold = match;
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

  // ../shared/node_modules/io-ts/es6/index.js
  var __extends = /* @__PURE__ */ function() {
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
  var __assign = function() {
    __assign = Object.assign || function(t2) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p))
          t2[p] = s2[p];
      }
      return t2;
    };
    return __assign.apply(this, arguments);
  };
  var __spreadArray = function(to, from, pack) {
    if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
      if (ar || !(i2 in from)) {
        if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
        ar[i2] = from[i2];
      }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
  var failures = left;
  var failure = function(value, context, message) {
    return failures([{ value, context, message }]);
  };
  var success = right;
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
          if (isLeft2(e2)) {
            return e2;
          }
          return ab.validate(e2.right, c2);
        }, this.encode === identity2 && ab.encode === identity2 ? identity2 : function(b) {
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
  var identity2 = function(a) {
    return a;
  };
  function getFunctionName(f) {
    return f.displayName || f.name || "<function".concat(f.length, ">");
  }
  function appendContext(c2, key, decoder, actual) {
    var len = c2.length;
    var r = Array(len + 1);
    for (var i2 = 0; i2 < len; i2++) {
      r[i2] = c2[i2];
    }
    r[len] = { key, type: decoder, actual };
    return r;
  }
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
      if (codecs[i2].encode !== identity2) {
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
    var exactCodec = strict(props, name);
    return new DictionaryType(name, function(u) {
      return exactCodec.is(u);
    }, exactCodec.validate, exactCodec.encode, domain, codomain);
  }
  function getDomainKeys(domain) {
    var _a;
    if (isLiteralC(domain)) {
      var literal_1 = domain.value;
      if (string.is(literal_1)) {
        return _a = {}, _a[literal_1] = null, _a;
      }
    } else if (isKeyofC(domain)) {
      return domain.keys;
    } else if (isUnionC(domain)) {
      var keys = domain.types.map(function(type2) {
        return getDomainKeys(type2);
      });
      return keys.some(undefinedType.is) ? void 0 : Object.assign.apply(Object, __spreadArray([{}], keys, false));
    }
    return void 0;
  }
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
      if (UnknownRecord.is(u)) {
        return Object.keys(u).every(function(k) {
          return !domain.is(k) || codomain.is(u[k]);
        });
      }
      return isAnyC(codomain) && Array.isArray(u);
    }, function(u, c2) {
      if (UnknownRecord.is(u)) {
        var a = {};
        var errors = [];
        var keys = Object.keys(u);
        var len = keys.length;
        var changed = false;
        for (var i2 = 0; i2 < len; i2++) {
          var k = keys[i2];
          var ok = u[k];
          var domainResult = domain.validate(k, appendContext(c2, k, domain, k));
          if (isLeft2(domainResult)) {
            changed = true;
          } else {
            var vk = domainResult.right;
            changed = changed || vk !== k;
            k = vk;
            var codomainResult = codomain.validate(ok, appendContext(c2, k, codomain, ok));
            if (isLeft2(codomainResult)) {
              pushAll(errors, codomainResult.left);
            } else {
              var vok = codomainResult.right;
              changed = changed || vok !== ok;
              a[k] = vok;
            }
          }
        }
        return errors.length > 0 ? failures(errors) : success(changed ? a : u);
      }
      if (isAnyC(codomain) && Array.isArray(u)) {
        return success(u);
      }
      return failure(u, c2);
    }, domain.encode === identity2 && codomain.encode === identity2 ? function(a) {
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
    return "(" + codecs.map(function(type2) {
      return type2.name;
    }).join(" | ") + ")";
  }
  function mergeAll(base, us) {
    var equal = true;
    var primitive = true;
    var baseIsNotADictionary = !UnknownRecord.is(base);
    for (var _i = 0, us_1 = us; _i < us_1.length; _i++) {
      var u = us_1[_i];
      if (u !== base) {
        equal = false;
      }
      if (UnknownRecord.is(u)) {
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
        return codec.types.reduce(function(props, type2) {
          return Object.assign(props, getProps(type2));
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
  var emptyTags = {};
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
    if (a === emptyTags) {
      return b;
    }
    if (b === emptyTags) {
      return a;
    }
    var r = Object.assign({}, a);
    for (var k in b) {
      if (hasOwnProperty.call(a, k)) {
        var intersection_1 = intersect(a[k], b[k]);
        if (isNonEmpty(intersection_1)) {
          r[k] = intersection_1;
        } else {
          r = emptyTags;
          break;
        }
      } else {
        r[k] = b[k];
      }
    }
    return r;
  }
  function intersectTags(a, b) {
    if (a === emptyTags || b === emptyTags) {
      return emptyTags;
    }
    var r = emptyTags;
    for (var k in a) {
      if (hasOwnProperty.call(b, k)) {
        var intersection_2 = intersect(a[k], b[k]);
        if (intersection_2.length === 0) {
          if (r === emptyTags) {
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
      return emptyTags;
    }
    if (isTypeC(codec) || isStrictC(codec)) {
      var index = emptyTags;
      for (var k in codec.props) {
        var prop = codec.props[k];
        if (isLiteralC(prop)) {
          if (index === emptyTags) {
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
      }, emptyTags);
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
    return emptyTags;
  }
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
  var NullType = (
    /** @class */
    function(_super) {
      __extends(NullType2, _super);
      function NullType2() {
        var _this = _super.call(this, "null", function(u) {
          return u === null;
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "NullType";
        return _this;
      }
      return NullType2;
    }(Type)
  );
  var nullType = new NullType();
  var UndefinedType = (
    /** @class */
    function(_super) {
      __extends(UndefinedType2, _super);
      function UndefinedType2() {
        var _this = _super.call(this, "undefined", function(u) {
          return u === void 0;
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "UndefinedType";
        return _this;
      }
      return UndefinedType2;
    }(Type)
  );
  var undefinedType = new UndefinedType();
  var VoidType = (
    /** @class */
    function(_super) {
      __extends(VoidType2, _super);
      function VoidType2() {
        var _this = _super.call(this, "void", undefinedType.is, undefinedType.validate, identity2) || this;
        _this._tag = "VoidType";
        return _this;
      }
      return VoidType2;
    }(Type)
  );
  var voidType = new VoidType();
  var UnknownType = (
    /** @class */
    function(_super) {
      __extends(UnknownType2, _super);
      function UnknownType2() {
        var _this = _super.call(this, "unknown", function(_) {
          return true;
        }, success, identity2) || this;
        _this._tag = "UnknownType";
        return _this;
      }
      return UnknownType2;
    }(Type)
  );
  var unknown = new UnknownType();
  var StringType = (
    /** @class */
    function(_super) {
      __extends(StringType2, _super);
      function StringType2() {
        var _this = _super.call(this, "string", function(u) {
          return typeof u === "string";
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "StringType";
        return _this;
      }
      return StringType2;
    }(Type)
  );
  var string = new StringType();
  var NumberType = (
    /** @class */
    function(_super) {
      __extends(NumberType2, _super);
      function NumberType2() {
        var _this = _super.call(this, "number", function(u) {
          return typeof u === "number";
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "NumberType";
        return _this;
      }
      return NumberType2;
    }(Type)
  );
  var number = new NumberType();
  var BigIntType = (
    /** @class */
    function(_super) {
      __extends(BigIntType2, _super);
      function BigIntType2() {
        var _this = _super.call(
          this,
          "bigint",
          // tslint:disable-next-line: valid-typeof
          function(u) {
            return typeof u === "bigint";
          },
          function(u, c2) {
            return _this.is(u) ? success(u) : failure(u, c2);
          },
          identity2
        ) || this;
        _this._tag = "BigIntType";
        return _this;
      }
      return BigIntType2;
    }(Type)
  );
  var bigint = new BigIntType();
  var BooleanType = (
    /** @class */
    function(_super) {
      __extends(BooleanType2, _super);
      function BooleanType2() {
        var _this = _super.call(this, "boolean", function(u) {
          return typeof u === "boolean";
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "BooleanType";
        return _this;
      }
      return BooleanType2;
    }(Type)
  );
  var boolean = new BooleanType();
  var AnyArrayType = (
    /** @class */
    function(_super) {
      __extends(AnyArrayType2, _super);
      function AnyArrayType2() {
        var _this = _super.call(this, "UnknownArray", Array.isArray, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "AnyArrayType";
        return _this;
      }
      return AnyArrayType2;
    }(Type)
  );
  var UnknownArray = new AnyArrayType();
  var AnyDictionaryType = (
    /** @class */
    function(_super) {
      __extends(AnyDictionaryType2, _super);
      function AnyDictionaryType2() {
        var _this = _super.call(this, "UnknownRecord", function(u) {
          return u !== null && typeof u === "object" && !Array.isArray(u);
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "AnyDictionaryType";
        return _this;
      }
      return AnyDictionaryType2;
    }(Type)
  );
  var UnknownRecord = new AnyDictionaryType();
  var LiteralType = (
    /** @class */
    function(_super) {
      __extends(LiteralType2, _super);
      function LiteralType2(name, is, validate2, encode2, value) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.value = value;
        _this._tag = "LiteralType";
        return _this;
      }
      return LiteralType2;
    }(Type)
  );
  function literal(value, name) {
    if (name === void 0) {
      name = JSON.stringify(value);
    }
    var is = function(u) {
      return u === value;
    };
    return new LiteralType(name, is, function(u, c2) {
      return is(u) ? success(value) : failure(u, c2);
    }, identity2, value);
  }
  var KeyofType = (
    /** @class */
    function(_super) {
      __extends(KeyofType2, _super);
      function KeyofType2(name, is, validate2, encode2, keys) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.keys = keys;
        _this._tag = "KeyofType";
        return _this;
      }
      return KeyofType2;
    }(Type)
  );
  function keyof(keys, name) {
    if (name === void 0) {
      name = Object.keys(keys).map(function(k) {
        return JSON.stringify(k);
      }).join(" | ");
    }
    var is = function(u) {
      return string.is(u) && hasOwnProperty.call(keys, u);
    };
    return new KeyofType(name, is, function(u, c2) {
      return is(u) ? success(u) : failure(u, c2);
    }, identity2, keys);
  }
  var RefinementType = (
    /** @class */
    function(_super) {
      __extends(RefinementType2, _super);
      function RefinementType2(name, is, validate2, encode2, type2, predicate) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.type = type2;
        _this.predicate = predicate;
        _this._tag = "RefinementType";
        return _this;
      }
      return RefinementType2;
    }(Type)
  );
  function brand(codec, predicate, name) {
    return refinement(codec, predicate, name);
  }
  var Int = brand(number, function(n) {
    return Number.isInteger(n);
  }, "Int");
  var RecursiveType = (
    /** @class */
    function(_super) {
      __extends(RecursiveType2, _super);
      function RecursiveType2(name, is, validate2, encode2, runDefinition) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.runDefinition = runDefinition;
        _this._tag = "RecursiveType";
        return _this;
      }
      return RecursiveType2;
    }(Type)
  );
  Object.defineProperty(RecursiveType.prototype, "type", {
    get: function() {
      return this.runDefinition();
    },
    enumerable: true,
    configurable: true
  });
  var ArrayType = (
    /** @class */
    function(_super) {
      __extends(ArrayType2, _super);
      function ArrayType2(name, is, validate2, encode2, type2) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.type = type2;
        _this._tag = "ArrayType";
        return _this;
      }
      return ArrayType2;
    }(Type)
  );
  function array(item, name) {
    if (name === void 0) {
      name = "Array<".concat(item.name, ">");
    }
    return new ArrayType(name, function(u) {
      return UnknownArray.is(u) && u.every(item.is);
    }, function(u, c2) {
      var e2 = UnknownArray.validate(u, c2);
      if (isLeft2(e2)) {
        return e2;
      }
      var us = e2.right;
      var len = us.length;
      var as = us;
      var errors = [];
      for (var i2 = 0; i2 < len; i2++) {
        var ui = us[i2];
        var result = item.validate(ui, appendContext(c2, String(i2), item, ui));
        if (isLeft2(result)) {
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
      return errors.length > 0 ? failures(errors) : success(as);
    }, item.encode === identity2 ? identity2 : function(a) {
      return a.map(item.encode);
    }, item);
  }
  var InterfaceType = (
    /** @class */
    function(_super) {
      __extends(InterfaceType2, _super);
      function InterfaceType2(name, is, validate2, encode2, props) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.props = props;
        _this._tag = "InterfaceType";
        return _this;
      }
      return InterfaceType2;
    }(Type)
  );
  function type(props, name) {
    if (name === void 0) {
      name = getInterfaceTypeName(props);
    }
    var keys = Object.keys(props);
    var types = keys.map(function(key) {
      return props[key];
    });
    var len = keys.length;
    return new InterfaceType(name, function(u) {
      if (UnknownRecord.is(u)) {
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
      var e2 = UnknownRecord.validate(u, c2);
      if (isLeft2(e2)) {
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
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          var vak = result.right;
          if (vak !== ak || vak === void 0 && !hasOwnProperty.call(a, k)) {
            if (a === o) {
              a = __assign({}, o);
            }
            a[k] = vak;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(a);
    }, useIdentity(types) ? identity2 : function(a) {
      var s2 = __assign({}, a);
      for (var i2 = 0; i2 < len; i2++) {
        var k = keys[i2];
        var encode2 = types[i2].encode;
        if (encode2 !== identity2) {
          s2[k] = encode2(a[k]);
        }
      }
      return s2;
    }, props);
  }
  var PartialType = (
    /** @class */
    function(_super) {
      __extends(PartialType2, _super);
      function PartialType2(name, is, validate2, encode2, props) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.props = props;
        _this._tag = "PartialType";
        return _this;
      }
      return PartialType2;
    }(Type)
  );
  function partial(props, name) {
    if (name === void 0) {
      name = getPartialTypeName(getInterfaceTypeName(props));
    }
    var keys = Object.keys(props);
    var types = keys.map(function(key) {
      return props[key];
    });
    var len = keys.length;
    return new PartialType(name, function(u) {
      if (UnknownRecord.is(u)) {
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
      var e2 = UnknownRecord.validate(u, c2);
      if (isLeft2(e2)) {
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
        if (isLeft2(result)) {
          if (ak !== void 0) {
            pushAll(errors, result.left);
          }
        } else {
          var vak = result.right;
          if (vak !== ak) {
            if (a === o) {
              a = __assign({}, o);
            }
            a[k] = vak;
          }
        }
      }
      return errors.length > 0 ? failures(errors) : success(a);
    }, useIdentity(types) ? identity2 : function(a) {
      var s2 = __assign({}, a);
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
  var DictionaryType = (
    /** @class */
    function(_super) {
      __extends(DictionaryType2, _super);
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
  function record(domain, codomain, name) {
    var keys = getDomainKeys(domain);
    return keys ? enumerableRecord(Object.keys(keys), domain, codomain, name) : nonEnumerableRecord(domain, codomain, name);
  }
  var UnionType = (
    /** @class */
    function(_super) {
      __extends(UnionType2, _super);
      function UnionType2(name, is, validate2, encode2, types) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.types = types;
        _this._tag = "UnionType";
        return _this;
      }
      return UnionType2;
    }(Type)
  );
  function union(codecs, name) {
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
        if (UnknownRecord.is(u)) {
          var i2 = find_1(u[tag_1]);
          return i2 !== void 0 ? codecs[i2].is(u) : false;
        }
        return false;
      }, function(u, c2) {
        var e2 = UnknownRecord.validate(u, c2);
        if (isLeft2(e2)) {
          return e2;
        }
        var r = e2.right;
        var i2 = find_1(r[tag_1]);
        if (i2 === void 0) {
          return failure(u, c2);
        }
        var codec = codecs[i2];
        return codec.validate(r, appendContext(c2, String(i2), codec, r));
      }, useIdentity(codecs) ? identity2 : function(a) {
        var i2 = find_1(a[tag_1]);
        if (i2 === void 0) {
          throw new Error("no codec found to encode value in union codec ".concat(name));
        } else {
          return codecs[i2].encode(a);
        }
      }, codecs, tag_1);
    } else {
      return new UnionType(name, function(u) {
        return codecs.some(function(type2) {
          return type2.is(u);
        });
      }, function(u, c2) {
        var errors = [];
        for (var i2 = 0; i2 < codecs.length; i2++) {
          var codec = codecs[i2];
          var result = codec.validate(u, appendContext(c2, String(i2), codec, u));
          if (isLeft2(result)) {
            pushAll(errors, result.left);
          } else {
            return success(result.right);
          }
        }
        return failures(errors);
      }, useIdentity(codecs) ? identity2 : function(a) {
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
  var IntersectionType = (
    /** @class */
    function(_super) {
      __extends(IntersectionType2, _super);
      function IntersectionType2(name, is, validate2, encode2, types) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.types = types;
        _this._tag = "IntersectionType";
        return _this;
      }
      return IntersectionType2;
    }(Type)
  );
  function intersection(codecs, name) {
    if (name === void 0) {
      name = "(".concat(codecs.map(function(type2) {
        return type2.name;
      }).join(" & "), ")");
    }
    var len = codecs.length;
    return new IntersectionType(name, function(u) {
      return codecs.every(function(type2) {
        return type2.is(u);
      });
    }, codecs.length === 0 ? success : function(u, c2) {
      var us = [];
      var errors = [];
      for (var i2 = 0; i2 < len; i2++) {
        var codec = codecs[i2];
        var result = codec.validate(u, appendContext(c2, String(i2), codec, u));
        if (isLeft2(result)) {
          pushAll(errors, result.left);
        } else {
          us.push(result.right);
        }
      }
      return errors.length > 0 ? failures(errors) : success(mergeAll(u, us));
    }, codecs.length === 0 ? identity2 : function(a) {
      return mergeAll(a, codecs.map(function(codec) {
        return codec.encode(a);
      }));
    }, codecs);
  }
  var TupleType = (
    /** @class */
    function(_super) {
      __extends(TupleType2, _super);
      function TupleType2(name, is, validate2, encode2, types) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.types = types;
        _this._tag = "TupleType";
        return _this;
      }
      return TupleType2;
    }(Type)
  );
  var ReadonlyType = (
    /** @class */
    function(_super) {
      __extends(ReadonlyType2, _super);
      function ReadonlyType2(name, is, validate2, encode2, type2) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.type = type2;
        _this._tag = "ReadonlyType";
        return _this;
      }
      return ReadonlyType2;
    }(Type)
  );
  var ReadonlyArrayType = (
    /** @class */
    function(_super) {
      __extends(ReadonlyArrayType2, _super);
      function ReadonlyArrayType2(name, is, validate2, encode2, type2) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.type = type2;
        _this._tag = "ReadonlyArrayType";
        return _this;
      }
      return ReadonlyArrayType2;
    }(Type)
  );
  var strict = function(props, name) {
    return exact(type(props), name);
  };
  var ExactType = (
    /** @class */
    function(_super) {
      __extends(ExactType2, _super);
      function ExactType2(name, is, validate2, encode2, type2) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.type = type2;
        _this._tag = "ExactType";
        return _this;
      }
      return ExactType2;
    }(Type)
  );
  function exact(codec, name) {
    if (name === void 0) {
      name = getExactTypeName(codec);
    }
    var props = getProps(codec);
    return new ExactType(name, codec.is, function(u, c2) {
      var e2 = UnknownRecord.validate(u, c2);
      if (isLeft2(e2)) {
        return e2;
      }
      var ce = codec.validate(u, c2);
      if (isLeft2(ce)) {
        return ce;
      }
      return right(stripKeys(ce.right, props));
    }, function(a) {
      return codec.encode(stripKeys(a, props));
    }, codec);
  }
  var FunctionType = (
    /** @class */
    function(_super) {
      __extends(FunctionType2, _super);
      function FunctionType2() {
        var _this = _super.call(
          this,
          "Function",
          // tslint:disable-next-line:strict-type-predicates
          function(u) {
            return typeof u === "function";
          },
          function(u, c2) {
            return _this.is(u) ? success(u) : failure(u, c2);
          },
          identity2
        ) || this;
        _this._tag = "FunctionType";
        return _this;
      }
      return FunctionType2;
    }(Type)
  );
  var Function2 = new FunctionType();
  var NeverType = (
    /** @class */
    function(_super) {
      __extends(NeverType2, _super);
      function NeverType2() {
        var _this = _super.call(
          this,
          "never",
          function(_) {
            return false;
          },
          function(u, c2) {
            return failure(u, c2);
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
  var never = new NeverType();
  var AnyType = (
    /** @class */
    function(_super) {
      __extends(AnyType2, _super);
      function AnyType2() {
        var _this = _super.call(this, "any", function(_) {
          return true;
        }, success, identity2) || this;
        _this._tag = "AnyType";
        return _this;
      }
      return AnyType2;
    }(Type)
  );
  var any = new AnyType();
  function refinement(codec, predicate, name) {
    if (name === void 0) {
      name = "(".concat(codec.name, " | ").concat(getFunctionName(predicate), ")");
    }
    return new RefinementType(name, function(u) {
      return codec.is(u) && predicate(u);
    }, function(i2, c2) {
      var e2 = codec.validate(i2, c2);
      if (isLeft2(e2)) {
        return e2;
      }
      var a = e2.right;
      return predicate(a) ? success(a) : failure(a, c2);
    }, codec.encode, codec, predicate);
  }
  var Integer = refinement(number, Number.isInteger, "Integer");
  var TaggedUnionType = (
    /** @class */
    function(_super) {
      __extends(TaggedUnionType2, _super);
      function TaggedUnionType2(name, is, validate2, encode2, codecs, tag) {
        var _this = _super.call(this, name, is, validate2, encode2, codecs) || this;
        _this.tag = tag;
        return _this;
      }
      return TaggedUnionType2;
    }(UnionType)
  );
  var getDefaultContext = function(decoder) {
    return [
      { key: "", type: decoder }
    ];
  };
  var ObjectType = (
    /** @class */
    function(_super) {
      __extends(ObjectType2, _super);
      function ObjectType2() {
        var _this = _super.call(this, "object", function(u) {
          return u !== null && typeof u === "object";
        }, function(u, c2) {
          return _this.is(u) ? success(u) : failure(u, c2);
        }, identity2) || this;
        _this._tag = "ObjectType";
        return _this;
      }
      return ObjectType2;
    }(Type)
  );
  var object = new ObjectType();
  var StrictType = (
    /** @class */
    function(_super) {
      __extends(StrictType2, _super);
      function StrictType2(name, is, validate2, encode2, props) {
        var _this = _super.call(this, name, is, validate2, encode2) || this;
        _this.props = props;
        _this._tag = "StrictType";
        return _this;
      }
      return StrictType2;
    }(Type)
  );

  // ../shared/src/types/entities/endUser.ts
  var NudgeInteractionStateV = type({
    type: union([
      literal("survey"),
      literal("tour"),
      literal("banner"),
      literal("tooltip"),
      literal("checklist"),
      string
    ]),
    activelifeCycleUuid: union([string, literal("")]),
    activatedTs: array(number),
    dismissedTs: array(number),
    isDismissed: boolean,
    completedTs: array(number),
    isCompleted: boolean,
    lastSeenTs: union([number, literal(-1)]),
    lastSeenSessionId: number,
    lastSeenDeviceId: string,
    snoozedUntilTs: union([number, literal(-1)]),
    stepIndexStack: array(number),
    currentStep: number,
    isChecklistExpanded: boolean,
    steps: record(
      string,
      type({
        completedTs: union([number, literal(-1)])
        // only used for checklists
      })
    )
  });
  var NudgeInteractionsV = record(string, NudgeInteractionStateV);
  var EndUserStoreDataV = type({
    nudgeInteractions: NudgeInteractionsV
  });

  // ../shared/src/sdk/symbols.ts
  var _analytics = "_analytics";
  var _configuration = "_configuration";

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

  // ../shared/src/internal/util/sentry.ts
  var sentryHubFactory = (_dsn) => {
    return void 0;
  };
  var getSentry = () => {
    return void 0;
  };

  // ../shared/src/internal/middleware/network.ts
  var MAX_WAIT_TIME_MS = 3e4;
  var isRetryable = ({ method, path }) => {
    const shouldRetryForMethod = method.toLowerCase() === "get";
    const shouldRetryForEndpoint = ["/decide", "/config", "/state"].some((s2) => path.includes(s2));
    return shouldRetryForMethod && shouldRetryForEndpoint;
  };
  var getBreadcrumbLogLevelFromHttpStatusCode = (statusCode) => {
    if (statusCode === void 0) {
      return void 0;
    } else if (statusCode >= 400 && statusCode < 500) {
      return "warning";
    } else if (statusCode >= 500) {
      return "error";
    } else {
      return void 0;
    }
  };
  var post = (url, data = void 0, options = {}) => _fetch("POST", url, data, options);
  var get = (url, options = {}) => _fetch("GET", url, void 0, options);
  var _fetch = async (method, path, data, options = {}, numRetries = 5) => {
    const _baseURL = getBaseURL_default();
    let json, response;
    while (path.startsWith("/")) path = path.slice(1);
    getSentry()?.addBreadcrumb({
      category: "fetch",
      data: {
        method,
        url: _baseURL + "/" + path
      },
      level: "info",
      type: "http"
    });
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
        getSentry()?.addBreadcrumb({
          category: "fetch",
          data: {
            method,
            url: _baseURL + "/" + path
          },
          level: getBreadcrumbLogLevelFromHttpStatusCode(response.status),
          type: "http"
        });
        if (isRetryable({ method, path })) {
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

  // ../shared/node_modules/io-ts/es6/PathReporter.js
  function stringify2(v) {
    if (typeof v === "function") {
      return getFunctionName(v);
    }
    if (typeof v === "number" && !isFinite(v)) {
      if (isNaN(v)) {
        return "NaN";
      }
      return v > 0 ? "Infinity" : "-Infinity";
    }
    return JSON.stringify(v);
  }
  function getContextPath(context) {
    return context.map(function(_a) {
      var key = _a.key, type2 = _a.type;
      return "".concat(key, ": ").concat(type2.name);
    }).join("/");
  }
  function getMessage(e2) {
    return e2.message !== void 0 ? e2.message : "Invalid value ".concat(stringify2(e2.value), " supplied to ").concat(getContextPath(e2.context));
  }
  function failure2(es) {
    return es.map(getMessage);
  }
  function success2() {
    return ["No errors!"];
  }
  var PathReporter = {
    report: fold(failure2, success2)
  };

  // ../shared/node_modules/@amplitude/analytics-types/lib/esm/logger.js
  var LogLevel;
  (function(LogLevel2) {
    LogLevel2[LogLevel2["None"] = 0] = "None";
    LogLevel2[LogLevel2["Error"] = 1] = "Error";
    LogLevel2[LogLevel2["Warn"] = 2] = "Warn";
    LogLevel2[LogLevel2["Verbose"] = 3] = "Verbose";
    LogLevel2[LogLevel2["Debug"] = 4] = "Debug";
  })(LogLevel || (LogLevel = {}));

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
  var get2 = (label, defaultValue, prefixOverride) => {
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
    get: get2,
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
      console.log(`${PREFIX2}[Log]: ${args.join(" ")}`);
    }
    warn(...args) {
      if (this.logLevel < LogLevel.Warn) {
        return;
      }
      console.warn(`${PREFIX2}[Warn]: ${args.join(" ")}`);
    }
    error(...args) {
      if (this.logLevel < LogLevel.Error) {
        return;
      }
      console.error(`${PREFIX2}[Error]: ${args.join(" ")}`);
    }
    debug(...args) {
      if (this.logLevel < LogLevel.Debug) {
        return;
      }
      console.log(`${PREFIX2}[Debug]: ${args.join(" ")}`);
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

  // ../shared/src/types/decode.ts
  var ALLOWED_NUDGE_INTERACTION_DEFAULTS = {
    lastSeenDeviceId: "",
    lastSeenSessionId: -1
  };
  function decodeEndUserStoreData(input) {
    const result = EndUserStoreDataV.decode(input);
    return pipe(
      result,
      fold(
        (_errors) => {
          const messages = PathReporter.report(result);
          logger.error(`${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`);
          getSentry()?.captureException(
            new Error(`${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`)
          );
          const handledErrors = /* @__PURE__ */ new Set();
          const nudgeInteractions = input.nudgeInteractions || {};
          for (const key in nudgeInteractions) {
            const interaction = nudgeInteractions[key];
            const interactionErrors = _errors.filter((error) => error.context.some((ctx) => ctx.key === key));
            for (const error of interactionErrors) {
              const lastError = error.context[error.context.length - 1];
              if (lastError && lastError.key in ALLOWED_NUDGE_INTERACTION_DEFAULTS) {
                interaction[lastError.key] = ALLOWED_NUDGE_INTERACTION_DEFAULTS[lastError.key];
                handledErrors.add(error);
              }
            }
          }
          const unhandledErrors = _errors.filter((error) => !handledErrors.has(error));
          if (unhandledErrors.length > 0) {
            throw new Error(`${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`);
          }
          return {
            ...input,
            nudgeInteractions
          };
        },
        (value) => value
      )
    );
  }
  function decodeThrowing(validator, input) {
    const result = validator.decode(input);
    return pipe(
      result,
      fold(
        (_errors) => {
          const messages = PathReporter.report(result);
          throw new Error(`${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`);
        },
        (value) => value
      )
    );
  }

  // ../shared/src/store/end-user/state.ts
  var import_isArray = __toESM(require_isArray());
  var import_mergeWith = __toESM(require_mergeWith());

  // ../shared/src/internal/util/encoding.ts
  var jsonBase64Encoder = (object2) => {
    const jsonString = JSON.stringify(object2);
    return globalThis.base64Encode(jsonString);
  };

  // ../shared/src/store/end-user/state.ts
  var emptyEndUserStoreData = () => {
    return {
      nudgeInteractions: {}
    };
  };
  var createDefaultNudgeInteractionState = () => {
    return {
      type: "__unknown__",
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
      steps: {}
    };
  };
  var updateEndUserStore = async (eus, updates, options = { replaceArrays: ["stepIndexStack"] }) => {
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
          if ((0, import_isArray.default)(obj)) {
            return options.replaceArrays?.includes(key) ? src : obj.concat(src);
          }
        });
      }
    });
    await eus.pushData();
  };
  var RemoteEndUserStore = class {
    data;
    initializedSuccessfully;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = false;
    }
    async fetchData() {
      const endUser = getSDK()._.user;
      if (!endUser) return;
      const { apiKey } = getSDK()._configuration;
      const userJsonBase64 = jsonBase64Encoder(endUser);
      const response = await get("/sdk/v1/state", {
        headers: {
          Authorization: `Api-Key ${apiKey}`,
          "X-Amp-User": userJsonBase64
        }
      });
      this.data = decodeEndUserStoreData(response.data);
      this.initializedSuccessfully = true;
    }
    async pushData() {
      const endUser = getSDK()._.user;
      if (!endUser || !this.initializedSuccessfully) return;
      const { apiKey } = getSDK()[_configuration];
      const userJsonBase64 = jsonBase64Encoder(endUser);
      const validData = decodeThrowing(EndUserStoreDataV, this.data);
      try {
        await post("/sdk/v1/state", validData, {
          headers: {
            Authorization: `Api-Key ${apiKey}`,
            "X-Amp-User": userJsonBase64
          }
        });
      } catch (e2) {
        logger.error("Failed to push data to remote end user store", { error: e2 });
      }
    }
  };
  var NullEndUserStore = class {
    data;
    initializedSuccessfully;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = true;
    }
    async fetchData() {
    }
    async pushData() {
    }
  };
  var LocalStorageTestEndUserStore = class {
    data;
    initializedSuccessfully;
    constructor() {
      this.data = emptyEndUserStoreData();
      this.initializedSuccessfully = false;
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
      this.data = decodeEndUserStoreData(data);
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
    publishAnalyticsEventToMessageBus: () => publishAnalyticsEventToMessageBus,
    removeCallback: () => removeCallback,
    setOrganization: () => setOrganization,
    setSessionProperties: () => setSessionProperties,
    setTheme: () => setTheme,
    setThemeMode: () => setThemeMode,
    urlMatchesTargeting: () => urlMatchesTargeting
  });
  var import_isEqual = __toESM(require_isEqual());

  // ../shared/src/products/nudges/service-actions.ts
  var service_actions_exports = {};
  __export(service_actions_exports, {
    closeAllNudgeMocks: () => closeAllNudgeMocks,
    forceTriggerSingleNudge: () => forceTriggerSingleNudge,
    getDebugSnapshot: () => getDebugSnapshot,
    initNudges: () => initNudges,
    resetNudge: () => resetNudge,
    resetTimedTriggers: () => resetTimedTriggers,
    sendDirectedTrigger: () => sendDirectedTrigger,
    sendIndirectTrigger: () => sendIndirectTrigger,
    setupTimedTriggers: () => setupTimedTriggers,
    showStepMock: () => showStepMock,
    shutdownNudges: () => shutdownNudges,
    startDebugSession: () => startDebugSession,
    stopDebugSession: () => stopDebugSession,
    updateNudgeStepForPreview: () => updateNudgeStepForPreview
  });

  // ../shared/src/internal/client/share_links.ts
  var isValidUrl = (sharePageUrl) => {
    if (!sharePageUrl) {
      return false;
    }
    let testUrl = sharePageUrl;
    if (testUrl.startsWith("/")) {
      testUrl = "https://www.example.com" + testUrl;
    }
    if (!testUrl.startsWith("http")) {
      testUrl = "https://" + testUrl;
    }
    try {
      new URL(testUrl);
    } catch (e2) {
      return false;
    }
    return true;
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

  // ../shared/src/products/nudges/store/selectors.ts
  var import_get = __toESM(require_get());

  // ../shared/src/internal/middleware/types.ts
  var isValidSessionPropertyKey = (key) => typeof key === "string" && key.length > 0;
  var isValidSessionPropertyValue = (value) => typeof value === "number" || typeof value === "string" || typeof value === "boolean";
  var isListBlock = (block) => block.type === "survey_list";
  var hasConditionalActionsBlock = (block) => (block.type === "survey_rating" || block.type === "survey_list") && (!!block.meta.conditionalActions || !!block.meta.defaultAction);

  // ../shared/src/products/nudges/store/rules.ts
  var RAGE_CLOSE_THRESHOLD = 2e3;
  var RULES = {
    generic: {
      stepsPresentation: "sequential",
      blockedBy: ["survey", "generic"],
      includedInCustomThrottles: true,
      inputs: false,
      media: true,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    survey: {
      stepsPresentation: "sequential",
      blockedBy: ["survey", "generic"],
      includedInCustomThrottles: true,
      inputs: true,
      media: true,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    checklist: {
      stepsPresentation: "all",
      blockedBy: ["checklist"],
      includedInCustomThrottles: true,
      inputs: false,
      media: false,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    banner: {
      stepsPresentation: "single",
      blockedBy: ["banner"],
      includedInCustomThrottles: false,
      inputs: false,
      media: false,
      stopOnSimulateStart: true,
      canBeActive: true
    },
    tooltip: {
      stepsPresentation: "single",
      blockedBy: [],
      includedInCustomThrottles: false,
      inputs: false,
      media: true,
      stopOnSimulateStart: false,
      canBeActive: false
    }
  };
  var getApplicableNudgeType = (nudgeType) => {
    if (nudgeType in RULES) {
      return nudgeType;
    }
    return "generic";
  };
  var isIncludedInCustomThrottles = (nudge) => {
    return RULES[getApplicableNudgeType(nudge.type)].includedInCustomThrottles;
  };
  var canBeActive = (nudge) => {
    return RULES[getApplicableNudgeType(nudge.type)].canBeActive;
  };
  var typeIsIncludedInCustomThrottles = (type2) => {
    return RULES[getApplicableNudgeType(type2)].includedInCustomThrottles;
  };
  var isBlocked = (nudge, renderingNudges) => {
    const renderingNudgeTypes = new Set(renderingNudges.map(({ type: type2 }) => getApplicableNudgeType(type2)));
    return RULES[getApplicableNudgeType(nudge.type)].blockedBy.some((element) => renderingNudgeTypes.has(element));
  };
  var hasSequentialSteps = (nudge) => {
    return RULES[getApplicableNudgeType(nudge.type)].stepsPresentation === "sequential";
  };
  var shouldStopOnSimulateStart = (nudge) => {
    return RULES[getApplicableNudgeType(nudge.type)].stopOnSimulateStart;
  };
  var isSurvey = (nudge) => {
    return nudge.type === "survey";
  };
  var getNudgeProductType = (nudge) => {
    return nudge.type === "survey" ? "survey" : "guide";
  };
  var getProductMeta = (nudge) => {
    const type2 = getNudgeProductType(nudge);
    return {
      type: type2,
      name: getNudgeProductType(nudge) === "guide" ? "Guide" : "Survey"
    };
  };

  // ../shared/src/products/nudges/store/selectors.ts
  var getAllNudgeActors = (_) => _.nudgesManager?.getSnapshot()?.context.nudgeMachines;
  var getNudgeActor = (_, id) => _.nudgesManager?.getSnapshot().context.nudgeMachines.get(id.toString());
  var getDebugActor = (_) => {
    const debuggingNudge = _.nudgesManager?.getSnapshot()?.context.debugMode.currentNudge;
    if (debuggingNudge) {
      return getNudgeActor(_, debuggingNudge.variantId);
    }
  };
  var getNudgeActorSnapshot = (_, id) => getNudgeActor(_, id)?.getSnapshot();
  var passesBuiltInThrottles = (_, nudge) => {
    const nudgesInRenderLoop = getNudgesInRenderLoop(_);
    return !isBlocked(nudge, nudgesInRenderLoop);
  };
  var passesCustomThrottles = (_, nudge) => {
    if (!_.organization) return true;
    const nudgesState = getAllNudgeDataFromUserStore(_);
    const nudgeProductType = getNudgeProductType(nudge);
    const allActivateTs = [];
    if (!nudgesState) return true;
    for (const nudgeState of Object.values(nudgesState)) {
      const stateNudgeProductType = nudgeState.type === "survey" ? "survey" : "guide";
      if (nudgeState.type && nudgeState?.activatedTs?.length && stateNudgeProductType === nudgeProductType && typeIsIncludedInCustomThrottles(nudgeState.type)) {
        allActivateTs.push(...nudgeState.activatedTs);
      }
    }
    const activationCounts = countsByTimeWindow(allActivateTs, _.sessionStart);
    const nudgeStateTarget = {
      context: {
        derivedNudgeState: { activationCounts }
      },
      result: {}
    };
    const conditions = nudgeProductType === "survey" ? _.organization.surveyThrottle.conditions : _.organization.guideThrottle.conditions;
    const retval = _.evalEngine.evaluateConditions(nudgeStateTarget, conditions);
    return retval;
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
    return {
      // TODO: return numbers directly once bug in evalengine with number value 0 is fixed
      session: `${countGreaterThan(sessionStart, timestamps)}`,
      day: `${countGreaterThan(currentEpoch - dayInMillis, timestamps)}`,
      week: `${countGreaterThan(currentEpoch - dayInMillis * 7, timestamps)}`,
      month: `${countGreaterThan(currentEpoch - dayInMillis * 30, timestamps)}`,
      quarter: `${countGreaterThan(currentEpoch - dayInMillis * 90, timestamps)}`,
      year: `${countGreaterThan(currentEpoch - dayInMillis * 365, timestamps)}`,
      ever: `${timestamps.length}`
    };
  };
  var passesCooldown = (_, nudge) => {
    const nudgeState = getNudgeDataFromUserStore(_, nudge.variantId);
    const timestamps = nudgeState?.activatedTs ?? [];
    const activationCounts = {};
    const legacyCounts = countsByTimeWindow(timestamps, _.sessionStart);
    Object.assign(activationCounts, legacyCounts);
    for (const cooldownLimit of nudge.lifecycleConfig.cooldownLimits) {
      if (cooldownLimit.period && cooldownLimit.periodCount) {
        const key = `${cooldownLimit.periodCount}_${cooldownLimit.period}`;
        activationCounts[key] = countForPeriod(
          timestamps,
          _.sessionStart,
          cooldownLimit.period,
          cooldownLimit.periodCount
        );
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
  var passesTriggerElement = (_, nudge, triggerEvent, nudgeSeenThisSessionTs) => {
    if (triggerEvent?.trigger.type == "element_appeared" && nudge.triggerConfig.type == "element_appeared") {
      if (nudgeSeenThisSessionTs.length > 0) {
        return false;
      }
      const elementToAppearIsVisible = _.services.isElementVisible(nudge.triggerConfig.data.selector);
      if (!elementToAppearIsVisible) return false;
    }
    return true;
  };
  var shouldTemporarilyHide = (_, nudge) => {
    return urlMatchesConditions(_, _.location.href, nudge.temporarilyHideTargeting.conditions, false);
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
    const sessionPropertyEvalTarget = {
      context: {
        sessionProperties: _.sessionProperties
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
      const evalTarget = {
        context: {
          ...triggerEvent?.trigger,
          sessionProperties: _.sessionProperties
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
  var isNudgeActive = (_, nudge) => !!getNudgeDataFromUserStore(_, nudge.variantId)?.activelifeCycleUuid;
  var passesPinnedElement = (_, nudge, stepIndex) => {
    const step = getNudgeStep(nudge, stepIndex);
    if (!step) return false;
    if (isAnchorableStep(step)) {
      return _.services.isElementVisible(step.formFactor.anchorSelector || step.formFactor.anchor);
    }
    return true;
  };
  var hasRemainingSteps = (nudge) => ({ stepIndex }) => stepIndex < nudge.steps.length - 1;
  var shouldBypassCustomThrottles = (_, nudge) => nudge.priority === 3 /* Urgent */ || !isIncludedInCustomThrottles(nudge) || _.nudgeDebugToolBar.visible && _.nudgeDebugToolBar.bypassCustomThrottles;
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
  var evaluateCondition = (condition, event, options) => {
    if (event.surveyResponse) {
      switch (condition.operator) {
        case "eq":
          return event.surveyResponse?.value === (typeof condition.operand === "string" ? options?.findIndex((option) => option === condition.operand) : condition.operand);
        case "neq":
          return event.surveyResponse?.value !== (typeof condition.operand === "string" ? options?.findIndex((option) => option === condition.operand) : condition.operand);
        case "gt":
          return typeof event.surveyResponse?.value === "number" && typeof condition.operand === "number" && event.surveyResponse?.value > condition.operand;
        case "lt":
          return typeof event.surveyResponse?.value === "number" && typeof condition.operand === "number" && event.surveyResponse?.value < condition.operand;
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
  var getActionBasedOnConditions = (step, event) => {
    const options = step.content.find(isListBlock)?.meta.options;
    const conditionalActions = step.content.find(hasConditionalActionsBlock)?.meta.conditionalActions;
    const defaultAction = step.content.find(hasConditionalActionsBlock)?.meta.defaultAction;
    if (conditionalActions) {
      for (const conditionalAction of conditionalActions) {
        if (evaluateCondition(conditionalAction, event, options)) {
          return conditionalAction.action || null;
        }
      }
    }
    return defaultAction ?? null;
  };
  var determineAction = (step, event) => {
    const immediateAction = getImmediateAction(event.buttonMeta);
    return event.buttonMeta?.action?.type === "use_conditional_logic" || !immediateAction ? getActionBasedOnConditions(step, event) : immediateAction;
  };
  var isTooltipNudge = (nudge) => nudge?.type === "tooltip";
  var isTooltipStep = (step) => step?.formFactor.type === "tooltip";
  var isPinStep = (step) => step?.formFactor.type === "pin";
  var isAnchorableStep = (step) => isPinStep(step) || isTooltipStep(step);
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
  var getCurrentLocale = () => {
    const locale = getSDK()?.[_configuration].locale;
    return locale ? locale.split("-")[0] : void 0;
  };

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
  var extractValue = (object2, key, throwErrorIfUndefined) => {
    if (object2 === void 0 || object2 === null) {
      return void 0;
    }
    switch (typeof object2) {
      case "string":
      case "number":
        return object2;
      case "object":
        if (Array.isArray(object2)) {
          return object2.toString();
        }
        if (key) {
          const toRet = (0, import_get2.default)(object2, key);
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
  var interpolateUserProperties = (s2, _, throwErrorIfUndefined) => {
    let toRet = s2;
    if (s2.includes("{{property")) {
      toRet = replaceInString(s2, ENGAGEMENT_CONTEXT_REFERENCE_REGEXP_INTERPOLATE, (match2) => {
        const [contextKey, fallback] = match2.replace(/\s*\|\s*/g, "|").split("|");
        const contextValue = extractValue(
          _.user?.user_properties,
          contextKey || match2,
          // Throw an error only if there is no fallback
          !fallback && throwErrorIfUndefined
        );
        return extractValue(contextValue, "value", throwErrorIfUndefined) ?? fallback;
      }).join("");
    }
    return toRet;
  };

  // ../shared/src/store/executables/executable-actions.ts
  var clickExecutable = (_, action) => {
    const value = interpolateUserProperties(action.value, _, true);
    const success3 = _.services.clickElement(value);
    if (!success3) {
      getSentry()?.captureMessage(`Click failed`);
      throw new InternalError(`Cannot find element to click: [${value}]`);
    }
  };
  var executeAction = (_, action, executionEventSource, forceOpenLinkInNewTab) => {
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
          activatePushExperience(_, nudge, {
            type: "nudge",
            id: executionEventSource
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
      case "document":
      case "video": {
        _.services.setCurrentContentId(_, action.value);
        break;
      }
    }
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
  var publishAnalyticsEventToMessageBus = (_, event_type, event_properties) => {
    event_properties = event_properties || {};
    _.messageBus.publish("analytics_event", { event_type, event_properties });
  };
  var urlMatchesTargeting = (_, sharePageUrl, pageTargeting) => {
    if (!isValidUrl(sharePageUrl)) {
      return false;
    }
    if (sharePageUrl.includes("{{")) {
      return true;
    }
    let testUrl = sharePageUrl;
    if (testUrl.startsWith("/")) {
      testUrl = "https://www.example.com" + testUrl;
    }
    if (!testUrl.startsWith("http")) {
      testUrl = "https://" + testUrl;
    }
    const url = new URL(testUrl);
    return urlMatchesConditions(_, url.href, pageTargeting);
  };
  var activatePushExperience = (_, experience, source) => {
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
    const result = await get(`/sdk/v1/decide`, {
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
  var getEventNameCreator = (nudge) => (type2) => {
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
    return events[type2];
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
      resultClicked: (title, excerpt, type2, id, sourceKey, position) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Result Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Excerpt" /* Excerpt */]: excerpt,
          ["[Guides-Surveys] Type" /* Type */]: type2,
          ["[Guides-Surveys] Key" /* Key */]: null,
          // Content Item ID is not tracked
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position
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
      recommendationClicked: (title, type2, url, key, sourceKey, position, recommendationSetKey, isDefault, isAutopilot) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Recommendation Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Type" /* Type */]: type2,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Key" /* Key */]: key,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position,
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
      quickLinkClicked: (title, type2, url, key, sourceKey, position, isDefault) => {
        getClient()?.trackEvent?.("[Guides-Surveys] Resource Center Quick Link Clicked", {
          ["[Guides-Surveys] Title" /* Title */]: title,
          ["[Guides-Surveys] Type" /* Type */]: type2,
          ["[Guides-Surveys] URL" /* URL */]: url,
          ["[Guides-Surveys] Key" /* Key */]: key,
          ["[Guides-Surveys] Source Key" /* SourceKey */]: sourceKey,
          // TODO: Add source property once we have a proper way to plumb it through
          ["[Guides-Surveys] Position" /* Position */]: position,
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
        return {
          ["[Guides-Surveys] Type" /* Type */]: nudge.type,
          ["[Guides-Surveys] Key" /* Key */]: nudge.flagKey,
          ["[Guides-Surveys] Tags" /* Tags */]: nudge.tags,
          ["[Guides-Surveys] Variant ID" /* Variant */]: nudge.variant,
          ["[Guides-Surveys] Step ID" /* StepId */]: nudgeStep?.id ?? 0,
          ["[Guides-Surveys] Step Index" /* StepIndex */]: stepIndex ?? 0,
          ["[Guides-Surveys] Step Title" /* StepTitle */]: nudgeStep?.title ?? "",
          ["[Guides-Surveys] Is Last Step" /* IsLastStep */]: isLastStep,
          ["[Guides-Surveys] Lifecycle UUID" /* LifecycleUuid */]: context?.interactionState?.activelifeCycleUuid,
          ["[Guides-Surveys] Is From Debug Mode" /* IsFromDebugMode */]: !!context?.triggerEvent?.overrides?.simulateMode
          // TODO: add once feature is implemented
          // tag
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
          ["[Guides-Surveys] Source" /* Source */]: source
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
  };

  // ../shared/src/store/resource-center-storage-manager.ts
  var STORAGE_KEY = "resourceCenter";
  var PERSISTED_FIELDS = [
    "visible",
    "minimized",
    "scrollPosition",
    "query",
    "currentContentItemId",
    "recentSearches",
    "isAdditionalResourcesExpanded"
  ];
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
      startDebugSession(_, message.event.data.experience.nudge, { toStepIndex: 0 });
    });
    _.messageBus.subscribe("start_recorder", (message) => {
      shutdownNudges(_);
      closeAllNudgeMocks(_);
      _.nudgeRecorderToolBar.visible = true;
      _.nudgeRecorderToolBar.experience = message.event.data.experience;
    });
  };

  // ../shared/src/products/nudges/store/nudgesManagerMachine.ts
  var import_isEqual3 = __toESM(require_isEqual());

  // ../shared/src/services/targeting/helpers.ts
  var getActiveVariantForFlag = (flagKey, decideResult) => {
    return decideResult?.[flagKey]?.key;
  };
  var nudgePassesDecide = (nudge, decideResult) => {
    if (nudge.platform !== __GS_PLATFORM__) {
      return false;
    }
    const activeVariantForNudge = getActiveVariantForFlag(nudge.flagKey, decideResult);
    if (!activeVariantForNudge) {
      logger.error("Nudge does not have a decide result!");
      return false;
    }
    return activeVariantForNudge === nudge.variant;
  };
  var getExperimentKey = (nudge, decideResult) => decideResult?.[nudge.flagKey]?.metadata?.experimentKey;

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
          if (passesPinnedElement(_, input.nudge, input.stepIndex)) {
            sendBack({ type: "PASSED_TARGET_ELEMENT" });
          }
          _.messageBus.subscribe(
            "dom_mutation",
            () => {
              if (passesPinnedElement(_, input.nudge, input.stepIndex)) {
                sendBack({ type: "PASSED_TARGET_ELEMENT" });
              }
            },
            `search-for-pin-target-${input.nudge.variantId}`
          );
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
  var submitSurveyResponse = async (_, variantId, nudgeStepId, response) => {
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
              response: {
                value: response.value,
                stringResponse: response.stringResponse,
                otherText: "otherText" in response ? response?.otherText : null
              }
              // Only send value - can send blockId/type in future if needed
            }
          ]
        },
        {
          headers: {
            Authorization: `Api-Key ${apiKey}`,
            "X-Amp-User": userJsonBase64
          }
        }
      );
    } catch (error) {
      getSentry()?.captureException(error);
      logger.debug("Error submitting response:", error);
    }
  };

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

  // ../shared/src/products/nudges/store/nudgeMachine.ts
  var NudgeMachine = (globalStore, nudge) => setup({
    types: {},
    actors: {
      StepConditionsMachine: StepConditionsMachine(globalStore)
    },
    guards: {
      passesNudgeMatch: ({ context }) => !context.triggerEvent?.nudgeId || context.nudge.variantId === context.triggerEvent.nudgeId,
      passesBuiltInThrottles: ({ context }) => context.triggerEvent?.overrides?.builtInThrottles || passesBuiltInThrottles(globalStore, context.nudge),
      passesTriggerMatch: ({ context }) => context.triggerEvent?.overrides?.triggerMatch || passesTriggerMatch(globalStore, context.nudge, context.triggerEvent),
      passesCooldown: ({ context }) => context.triggerEvent?.overrides?.cooldown || passesCooldown(globalStore, context.nudge),
      passesAudience: ({ context }) => context.triggerEvent?.overrides?.audience || context.triggerEvent?.overrides?.simulateMode || // In debug/simulate mode we always want our audience guard to pass
      nudgePassesDecide(context.nudge, globalStore.decide),
      passesSnoozed: ({ context }) => context.triggerEvent?.overrides?.snoozed || passesSnoozedConditions(globalStore, context.nudge),
      passesPage: ({ context }) => {
        const passesRegularPageTargeting = context.triggerEvent?.overrides?.page || passesPageTargeting(globalStore, context.nudge);
        return !shouldTemporarilyHide(globalStore, context.nudge) && passesRegularPageTargeting;
      },
      passesClicked: ({ context }) => passesClickedElement(globalStore, context.nudge, context.triggerEvent),
      passesTriggerElement: ({ context }) => passesTriggerElement(globalStore, context.nudge, context.triggerEvent, context.nudgeSeenThisSessionTs),
      passesCustomThrottles: ({ context }) => shouldBypassCustomThrottles(globalStore, context.nudge) || context.triggerEvent?.overrides?.customThrottles || passesCustomThrottles(globalStore, context.nudge),
      passesLocalization: ({ context }) => context.triggerEvent?.overrides?.localization || passesLocalization(globalStore, context.nudge, getCurrentLocale()),
      // step specific
      remainingSteps: ({ context }) => hasRemainingSteps(context.nudge)(context),
      advanceToSpecificStep: ({ context }, params) => params.step !== void 0 && params.step >= 0 && params.step < context.nudge.steps.length,
      stepChecksFailed: (_, params) => params.passed,
      canStepBack: ({ context }) => context.stepIndexStack.length > 0,
      isTooltipNudge: ({ context }) => !!isTooltipNudge(context.nudge),
      isPinStep: ({ context }) => !!isPinStep(getNudgeStep(context.nudge, context.stepIndex)),
      isWebPlatform: ({ context }) => context.nudge.platform === "web",
      hasSurveyResponse: (_, params) => "surveyResponse" in params.event,
      hasSequentialSteps: ({ context }) => hasSequentialSteps(context.nudge),
      isDismissal: (_, params) => params.isDismissAction
    },
    actions: {
      setTriggerEvent: assign({
        triggerEvent: (_, params) => params.triggerEvent
      }),
      setPassedConditions: assign({
        prevPassedConditions: () => true
      }),
      setFailedConditions: assign({
        prevPassedConditions: () => false
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
        globalStore.services.renderNudge(globalStore, context.nudge, context.stepIndex, { context });
      },
      incrementStep: assign({
        stepIndex: ({ context }) => context.stepIndex + 1,
        stepIndexStack: ({ context }) => [context.stepIndex, ...context.stepIndexStack]
      }),
      decrementStep: assign({
        stepIndex: ({ context }) => context.stepIndexStack[0],
        stepIndexStack: ({ context }) => context.stepIndexStack.slice(1)
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
          Track.experiment.exposure(context.nudge.flagKey, experimentKey, context.nudge.variant);
        }
      },
      reportExperimentControlExposure: ({ context }) => {
        const experimentKey = getExperimentKey(context.nudge, globalStore.decide);
        const activeVariantForExperiment = getActiveVariantForFlag(context.nudge.flagKey, globalStore.decide);
        if (experimentKey && typeof experimentKey === "string" && activeVariantForExperiment == "control") {
          const exposureKey = `experiment_control_${context.nudge.flagKey}_${experimentKey}`;
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
      reportRegress: ({ context }, params) => {
        Track.nudge.engaged(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
          source: {
            type: "cta",
            level: params.buttonType === "snooze" ? "tertiary" : params.buttonType ?? "primary"
          }
        });
      },
      reportAdvance: ({ context }, params) => {
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
        const surveyResponse = context?.surveyResponses[step.id];
        if (!surveyResponse) return;
        submitSurveyResponse(globalStore, context.nudge.variantId, step.id, surveyResponse);
        Track.nudge.surveySubmitted(context.nudge, context.stepIndex, {
          ...context,
          interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
          response: surveyResponse
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
        if (step && context.surveyResponses[step.id]) {
          Track.nudge.surveyAbandoned(context.nudge, context.stepIndex, {
            ...context,
            interactionState: getNudgeDataFromUserStore(globalStore, context.nudge.variantId),
            response: context.surveyResponses[step.id]
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
          addSeenTime: true,
          active: true,
          addActivatedTime: context.triggerEvent?.trigger.type !== "active" && canBeActive(context.nudge)
        });
      },
      saveInteraction: ({ context }) => {
        const { stepIndex, stepIndexStack, triggerEvent, isCompleted, isDismissed, nudge: nudge2 } = context;
        if (triggerEvent?.overrides?.saveProgress) return;
        saveProgressToEndUserStore(globalStore, {
          nudge: nudge2,
          stepIndex,
          stepIndexStack,
          isCompleted,
          isDismissed,
          active: !isCompleted && !isDismissed
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
      markDismissed: assign({
        isDismissed: () => true
      }),
      markCompleted: assign({
        isCompleted: () => true
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
        }
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
          if (params?.step && params.step >= 0 && params.step < context.nudge.steps.length) {
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
    /** @xstate-layout N4IgpgJg5mDOIC5QDkCu0wGIBKBRAyrgCoD6+RAgkbgNoAMAuoqAA4D2sAlgC6dsB2zEAA9EAFgBMAGhABPRAEYA7EoB0ATgCsAZgWaJADk1ilxugYC+FmWgw5cAMTz4AEiWQBVACIBxWoyF2Ll4BIVEESRl5BAMFVTF1RPUEwwMlZW0rG3QYVQBJCAAbLCJsPJ8-bHomJBAgnj5BWvD9KMRtADZNdVUJTSUxBTp1JQNzdSyQW1yAYQALMABjAGtOfigAAhmBCAaBWFV5pdX1jYp0TjB+RaxqwI49ptBwhQMJCVUh9W0JLQ6uhTaNoIXTDVR0bR0UyaAxiBIGSzWKY5MCHBYrNabbb8XYhfgHI4Y07nXZXG6YGgKGqsB54sKITQKZSfbSQiQKSSjYGaCG9AzqCTmBTfCSSTJI6aowknLE7R4E9Eyjb4fhsNgAL0gFICtXqdOa4kB2nBKmS-TZA2BP15HQ5wyMooM2kR2QwaOOmK2crxCo9pxVas1EApVPuwUa9IQjIkaiNdHZnIMwI6CU+YiMMLe6gREkmkvdRNlOPlBaVAAUAIYwbXUuq0iMGhCA76qIzJbTqBRdEyM4G-MQdPnmPqvCSs5R5lGlz3Y3GNX2FjaV6uU2t6hvPBlDWOs+McmNJuTtWGqZ2-H6Cpms7RKSdu6Uz73z6enGaFTgrLV3XX10KNsSaB0PRjmI5g9toCRAkeIKsh8hhQv0EISEBt4SlOD6vk++wvli76fsGq5ho8kaMjeLJsvuXLQQMcRDMoXY8pICSaHesyKo+xY+jhGxEAATpwUAwLxGy4MUAC2VzcDWRH6puUZ6DuFGJsCwoCqooyMlCSjOh0AysVK7GYZxz4YZsfECUJIniZJIZrr+TwiFuJjkXuynQU6xp0MYowdE67LqCm+ncbOJamV6bCFBAbAAO78NJP7hn+cmdCmqhdB0EIItCRgdFaUJiBoJjpp06h0MKQVhSFXGVWqkUxXFhEJcRjaMrpLkJgeVqAgY4LOkYoI5qhrpsX6RZzthYWShsACyFbcIsczxTSiUOeEoEFWkPI6HQYg-K8fZGAVTFeQK-S+eKw0GaNXrGRNhmbFNs3zYtjXLc1cmMiM7WUYe0TaGY6n9KBHR9emLrIve903eN+LceZglgMJT0LUtdYrZGyQfP9Iqldm-K6AdoGqN0UKQnQEKmBBFVQ1VJlQ-DlnIy9oZNbJjnyV9cYdVRf0JAVphKCDNHCrt1PXbTd3i6gsDcGwYk8XMvFsNw3DFLAqPrkl7PvKYp4DAixj8imOhdfGaV2tm+jFUYYuLhLsOVdLsvy0QivK6rcC2TJG7s4yaTfW5f03porbRuYgHY+D+Y1bdDtQwAMmwiwVu+6pzY0Gv2ZGvxfQKZr-DpgJiHlCLqWMsT9oM5VoZD4tYXH12J8nqfpwIXusz7LTKIprmddBPyAYV0aduT3wdEF+DcGALCYFF-CojLc2ovmk-T9+b1s+EyTOR2UJGEMxiaH2ZUh2VyiDIkPLxhPU8sMF9fq3PqJrAAbmwyyoqvLD27As0LWsYB15o3er7TsHxhSkU6KKBSKkmRqAhAoZCbxrzaRvtPe+sdH4CGfvwN+H9VBfx-n-OYADXrAM3gyMBnwtBGg6NA-oKk0gFV3Iyfo-IBh9DQXfMKs1hAbGwFcCAiMvw6g3p3RAukBifEdGaCCYxi7QVeGpLsfV+TrR5FHKcX9uK8P4YI4RBEWZiK1uESRBVEHplkemHaKk+jATYSYJkopBZcNUAInEiMNiJzYDPLweR8DTX8fgIBmtVqIDSCeLo3RBjkwHFCPs7wjqJAMHQ1k-JEgXQhrkbR7ihHCW8TPfAyAADyxSABa-g7Lo0bAiCCaVNDRKGDtDKSg+x0XBN8fQXkMwZUySvW+bj9H5LVDPPATgCBuE8L4Sp3sTGIFGETax7J-pKE7J0FSCRYxMP0BmEemi3Q5KGV4kZmAZjx2KYQEJWcalOgKlE5ITS4mtOgoKHkxNviWN0MgiYNdskDNyZ4gpmByDFLLFc6pckcx3IaQ82JLTj7kw6Z0H4Axg5pFcQC4ZPjMAODyMgfxLhwUgPCAiDk9TGlwviYot4HxRhfDGPBEwuZfmf3+UcoFHgyxeCoLgMgHhsAADVcAAE0SDODLMU5AlzRHkPEQgU0agMp6DoKkphuVFGgToOpCCZ4YwphSBi9lIzBkeP4usTAFAvACooMgGYMyO5zPleOeI7wyr-V0CmBQCTB7vCFpbdIWhDWmuOT4k1eTMT2EIKQcgPKiUUKdboF1l53VdkGH2W0Id0qAneFoWEXkg15JDXfTFEa8A+GcMEmVoTIzaUTZIZNOhU1epeU6HoShDB-ExghFiLKCFsuDQUsNiMI0UHwPgcoyASASolUK7AJAKAzCIMUqoVbrlySUCqnqiDG3Oh+PyI+LyVnxH0JbWIygoQFsBcakt5qvCSvtcYsJMR5Hkthc0ql0RU0hwHCknkXRNqBV7YcgdxqKAQBfhWa4EaSmkDvcgB9srHULLUO2ro-ZVkpmkIexIGgT2ZmTePID-bC2DrAxBqDt771xrlch9SyET0mACpEF5CC0rrWgTtJifStHEavaGsjkHFgRrg7QIxiGn0ROhRS99zzohjkFLhtk8YUyksI5dPt6DMVFowTDLB89VCv3fqy6eRCKz-3ntRx1knX0xJk32eEvQonGGzCdGMl6sXcJpg-We2CDO4KMxp7+D9iGkLE9WxstHUMMYw8xuTCRBzAyZLpOJ3d3PaYEVAXicAuDmss0+yL9H0NMaw3Jml4IjDaSApBUYaXB0Zay7AHLUB26PsjNZ+5tmnl9kPupKJKTzDxl3VYJEqohHwFqJKWZT6AC06hgTTcHOTJby3lv-R7epgoxQpsYzoR8LyPJIR810AeuTo9WxaFiQPJLamslXTtg-bbjYOx9nbT0YYKqdB+vSDd6OXnMHcRJJca4YBHtyT0G1EGvxfhDARE6PsZpejmnbTCACGRbZKh-txAMGpICg-ZjpNQSQApQmzExPK2kNCigQcMMcLje0x109xZcIOHVPqS3c1ZGkz4BRGAdLs7yoR2kFl0H56mGehRpnhD+EA8drT3WlIWMJAL7ZO+0QUHwSa+WJ4N0W9O-uM7CgzTxokwASX4NwWX4gBa9B1UYMqv7m1B0TX0bS6YYc05++hfXEu64RSirFS3IJ2QfF8ukJpMLkslxQ+aXpA5ITrduzpn3i5HpzQWoHtIhMCou5vH0WEjJUF67rv9w3-EEZIzT3MQPdCjqNrGK9nMB1IQuvWtebp+yRr3ZLzTJ2csFZKxVmrQP6u4hrJGKj-1JX2iAi1Tnuh7blDsk97XLvBuE5JxTpwNObNwtyRHIT5JpUby7ShOqv67TNdG3JiBbjBzb6B50O26hOhQJdl8gkYEfxia6AgnnYUyFb8-l0EvBsFA8BR+RTxdJ4wwJkJ0xusKcdkYQodbRmV1NtFxcfQH9JAtUIEIIyp-hYQ5tFFVkep+R30lMYQhpE90CoZdFMVcdWdIw6E3hpEewuxOwK5GFUpIR0gVUoEvhUDqDeMPNA8N0FNt0f8-J90VJJE0wvIb9H9kJatr0hlMRRDtwFcAJwCOQeRZNEBRQYQNAVUOQbw0VkhlD+NwNBM1DGCIt0hzEzBScAQtAElVl1J4x2xXgUxTALDPNi9dMM9ad6lbQewmVecXlBg9tVltp3gMh+hfDBlMtssbDWs7DEEXVwdTBYhdJHd9CUljRXkukYxARAIxBhsLAgA */
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
                actions: [{ type: "logCondition", params: { conditionName: "audience", conditionResult: "PASS" } }]
              },
              {
                target: "#Nudge.Idle",
                actions: [
                  { type: "setFailedConditions" },
                  { type: "logCondition", params: { conditionName: "audience", conditionResult: "FAIL" } },
                  { type: "reportExperimentControlExposure" }
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
            always: [
              {
                target: "#Nudge.Step",
                guard: "passesTriggerElement",
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
            ],
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
                guard: "passesTriggerMatch"
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
            type: "final"
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
            description: `This is where we check any step specific conditions.
This includes searching for elements to pin to or checking availability of commands on a CTA.`
          },
          "Checking Max Rendered": {
            always: [
              {
                target: "Render Loop",
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
          "Render Loop": {
            entry: enqueueActions(({ enqueue, check }) => {
              enqueue({ type: "sendEnterRenderLoop" });
              if (!(check({ type: "isPinStep" }) && check({ type: "isWebPlatform" }))) {
                enqueue({ type: "markSeen" });
                enqueue({ type: "saveSeen" });
              }
            }),
            states: {
              Rendering: {
                entry: enqueueActions(({ enqueue, check }) => {
                  enqueue({ type: "renderStep" });
                  enqueue({ type: "reevaluateChecklistItemGoals" });
                  if (!check({ type: "isTooltipNudge" }) && !(check({ type: "isPinStep" }) && check({ type: "isWebPlatform" }))) {
                    enqueue({ type: "reportSeen" });
                  }
                  enqueue({ type: "reportExposure" });
                }),
                exit: [{ type: "closeStep" }],
                on: {
                  ADVANCE: {
                    target: "Advancing",
                    actions: enqueueActions(({ enqueue, check, event }) => {
                      enqueue({ type: "execAction", params: { action: event.action } });
                      enqueue({
                        type: "reportSurveyResponse"
                      });
                      if (check("hasSequentialSteps")) {
                        enqueue({
                          type: "reportAdvance",
                          params: { cta: event.cta, buttonType: event.buttonType }
                        });
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
                    actions: [{ type: "reportRegress", params: ({ event }) => ({ buttonType: event.buttonType }) }]
                  },
                  ASSIGN_POPOVER_ACTOR: {
                    actions: [{ type: "assignPopoverActor", params: ({ event }) => ({ actor: event.actor }) }]
                  },
                  DONE: {
                    target: "#Nudge.Step.Done",
                    actions: [
                      { type: "markCompleted" },
                      { type: "reportCompleted" },
                      { type: "resetStep" },
                      { type: "saveInteraction" }
                    ]
                  },
                  STEP_VISIBLE: {
                    actions: [{ type: "markSeen" }, { type: "saveSeen" }, { type: "reportSeen" }]
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
                        { type: "markCompleted" },
                        { type: "reportCompleted" },
                        { type: "resetStep" },
                        { type: "saveInteraction" }
                      ],
                      guard: "isTooltipNudge"
                    },
                    {
                      target: "#Nudge.Step.Done",
                      actions: [
                        { type: "markCompleted" },
                        { type: "reportCompleted" },
                        { type: "resetStep" },
                        { type: "saveInteraction" }
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
                    actions: [{ type: "reportDismissed" }, { type: "markDismissed" }, { type: "saveInteraction" }]
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
                  enqueue({ type: "markDismissed" });
                  enqueue({ type: "saveInteraction" });
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
              STOP: "Done",
              FINISH: {
                target: "Done",
                actions: [
                  { type: "reportSurveyResponse" },
                  enqueueActions(({ enqueue, check }) => {
                    if (check({
                      type: "isDismissal",
                      params: ({ event }) => ({
                        isDismissAction: event.action?.type === "dismiss"
                      })
                    })) {
                      enqueue({ type: "reportDismissed" });
                      enqueue({ type: "markDismissed" });
                    } else {
                      enqueue({ type: "reportCompleted" });
                      enqueue({ type: "markCompleted" });
                    }
                  }),
                  { type: "resetStep" },
                  { type: "saveInteraction" }
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
                  enqueue.sendTo(({ context: context2 }) => context2.parentRef, {
                    type: "TRIGGER",
                    trigger: { type: "active" },
                    source: { type: "active" }
                  });
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
        onDone: "Idle",
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
        triggerEvent: null,
        prevPassedConditions: false,
        isDismissed: false,
        isCompleted: false
      };
    },
    on: {
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
      passesUser: () => !globalStore.isEditorPreview
    }
  }).createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QDkCu04FkCGA7bMATgMQDKAKgPIAKA+gCICiAQgKoDiA2gAwC6ioAA4B7WAEsALmOG4BIAB6IArAHYANCACeiACxKAjADoAnKYBMSgMzcdl-feMBfRxrQZYOfETLkAggCVyBhYOHn4kEBFxKRk5RQRVDW0EnQAOQz0zSwA2M25clR1uJxcQNxgPPAIwEgAqMLkoyWlZCPjjSxVDVMs8-TMVYx19bKGkxH1uJTMMlR7jAxVufpLXdArPasJDXwB3bGbcKAACVlga49IJYUIwYnJ-AEl2dkZ-BoimmNbQeNT1LSIFS5QwqfSDHojMymbKpZxrdybIg7faHE5nC5XG53RjIei0VikN60CiUfyMWgAGUoviY9A+QlEzVibV0lkshm4XO4FiUo0GSiU4wQqWMRlGmSsS2ywPhZXWWCqyIAYjd9oQIGIjsdyIQxFAiLBiABhSmMXzIVh0UiYAJBS30V6kBmRJnfOITMxFEypVJmX3caw6MEA5I6GWGdkWexpVL6BZTOXlRVeGqGVWEdWa7W6-WG4jk5Xk0gACVoRcomFoxsoyGVzxdXxaHoQ-R0xm6qRlZgGOXBOWFnW43UGnQ6llS3FSVmySYVlVT2wzWa1J1zBpqRsLxbLpEemFYlN85EY+Idr0bbubrNbWWHxl9-pUdh78bMwoGOgyZlywf0-2MFQ+VnUpkwXLZ0zVbANVXHU9Q3QgjVxE9-Fock8WJakaEvaJr1+T0lA7MVlhUUjsn-dtsmFcEukAux9CUQM5myQiVDnRElTTZdoOzNd4PzRgAA1HiCdCmFQrDqBw5kfgUT1YU5UVp0IyZgzGQERSMAxTD9X1SL5HR2I2TilygmCc34zdDEpMRYAkMBcFXe4nheN5pPdG9jGWTkGOyHQf2yTpLB0HRhS7LpuBUMxJkDGx9GGNjQPnJEuLM3i4LzKz1yIJz3LwuTW1hYdwynPzyPbfRhVGGZ41q8NCmhQMjJTCDuPMvjMsQwxjQACzAABjABrWCMRIPKWXwwrA0MQL-WCvIemisK5gyYZRX-VJ-I6ECEWMxdIMzHjYOyqzeoG4btVG4hOH0cJGVwiaCqGdJBlhOYeXbYNQo0v0jEi6KQv6INLBKUpcGECA4DkMCUsIRor0e9phQAWiUH1uQxzHDKSjj9r2A4pEu85CEua5bnhh7ZPieLskMHsfzBYw-M2wV3w0sU0fBex-0A8iFjMZrwJVNLjssxCKZklsZQ7fJozjPyJ0GKqbBmsV-hYtJ9E6JRBdhg6VwszrYGs2z7Mco4JY8yaooi3IDHl2wALCvkZsYn8Obsaw4RxvbWpFw2EONk69Qtz4EapiZ9MMJRwz9Cwp22sKQdBICfy7KZVCA3WTP1o6A8Nbq+qGkbict-Lqe5mbeknWLpdsML7FWt9+3-YpnGcIA */
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
      "Awaiting User Store": {
        on: {
          TRIGGER: {
            actions: [{ type: "enqueueTrigger", params: ({ event }) => ({ triggerEvent: event }) }],
            target: "Awaiting User Store",
            description: "Only triggers that match any of the spawned nudge actors' triggers will be enqueued."
          },
          END_USER_STORE_LOADED: {
            target: "Forwarding Triggers",
            actions: [{ type: "spawnNudgeMachines" }]
          }
        }
      },
      "Forwarding Triggers": {
        on: {
          CLEANUP_SMART_NUDGES: {
            target: ".",
            actions: [{ type: "updateSmartNudges", params: ({ event }) => ({ nudge: event.nudge }) }]
          },
          REFRESH_FROM_CONFIG: {
            target: "Forwarding Triggers",
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
          REFRESH_SIMULATED_NUDGE: {
            actions: [{ type: "refreshSimulatedNudge", params: ({ event }) => ({ nudge: event.nudge }) }]
          },
          ENTER_RENDER_LOOP: {
            actions: [{ type: "setActiveNudge", params: ({ event }) => ({ nudge: event.nudge }) }]
          },
          EXIT_RENDER_LOOP: {
            actions: [{ type: "clearActiveNudge" }]
          }
        },
        states: {
          Listening: {
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
                  const priorityA = a.getSnapshot()?.context.nudge.priority ?? 1 /* Medium */;
                  const priorityB = b.getSnapshot()?.context.nudge.priority ?? 1 /* Medium */;
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
                    if (nudgeToTrigger && nudge.variantId !== nudgeToTrigger.variantId && isBlocked(nudgeToTrigger, [nudge])) {
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
        initial: "Listening"
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
        target: ".Forwarding Triggers",
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
      START_DEBUG: {
        target: ".Forwarding Triggers",
        actions: [
          { type: "setDebuggingNudge", params: ({ event }) => ({ nudge: event.nudge }) },
          { type: "setOriginalDebuggingNudge", params: ({ event }) => ({ nudge: event.nudge }) },
          { type: "stopNudgeMachines" },
          { type: "initNudgeMachinesForDebug" },
          { type: "showDebugToolbar" }
        ]
      },
      SHUTDOWN: {
        actions: enqueueActions(({ context, enqueue, self: self2 }) => {
          const nudgeActors = context.nudgeMachines.values();
          for (const nudgeMachine of nudgeActors) {
            enqueue.sendTo(nudgeMachine, { type: "CLOSE" });
          }
          enqueue({ type: "stopAllNudgeMachines" });
          self2.stop();
        })
      }
    }
  });

  // ../shared/src/internal/middleware/evaluation.ts
  var EvaluationConditionV = type({
    selector: array(string),
    op: string,
    values: array(string)
  });

  // ../shared/src/internal/middleware/organization.ts
  var ThrottleV = intersection([
    type({
      max: number,
      period: string
    }),
    partial({
      enabled: boolean
    })
  ]);
  var CustomThrottleV = type({
    limit: ThrottleV,
    conditions: array(array(EvaluationConditionV))
  });
  var TranslationBehaviorV = keyof({
    showDefault: null,
    showOutOfDate: null,
    dontShow: null
  });
  var LocalizationV = type({
    enabled: boolean,
    defaultLocale: string,
    addedLocales: array(string),
    translationUnavailable: TranslationBehaviorV,
    translationOutdated: TranslationBehaviorV
  });
  var OrganizationV = intersection([
    type({
      branding: string,
      shareLinkParam: string,
      guideThrottle: CustomThrottleV,
      surveyThrottle: CustomThrottleV
    }),
    partial({
      localization: LocalizationV
    })
  ]);
  var defaults = {
    branding: "",
    shareLinkParam: "",
    guideThrottle: { limit: { enabled: false, max: 10, period: "day" }, conditions: [[]] },
    surveyThrottle: { limit: { enabled: false, max: 10, period: "day" }, conditions: [[]] },
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
      getSentry()?.captureException(e2);
      return decodeThrowing(OrganizationV, { ...defaults, ...data });
    }
  };

  // ../shared/node_modules/io-ts-types/es6/clone.js
  function clone(t2) {
    var r = Object.create(Object.getPrototypeOf(t2));
    Object.assign(r, t2);
    return r;
  }

  // ../shared/node_modules/io-ts-types/es6/withValidate.js
  function withValidate(codec, validate2, name) {
    if (name === void 0) {
      name = codec.name;
    }
    var r = clone(codec);
    r.validate = validate2;
    r.decode = function(i2) {
      return validate2(i2, getDefaultContext(r));
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
        return success(a);
      })(codec.validate(u, c2));
    }, name);
  }

  // ../shared/src/internal/middleware/generics.ts
  function decodeThrowing2(validator, input) {
    const result = validator.decode(input);
    return pipe(
      result,
      fold(
        (_errors) => {
          const messages = PathReporter.report(result);
          logger.debug(JSON.stringify(_errors));
          throw new Error(`${messages.join("\n")}
when parsing ${JSON.stringify(input, null, 2)}`);
        },
        (value) => value
      )
    );
  }
  var GenericObject = type({
    id: union([number, string])
  });
  var GenericBatchRequest = type({
    batch: array(unknown),
    note: string
  });

  // ../shared/src/types/entities/nudge/actions.ts
  var AdminAction = type({
    type: literal("admin"),
    value: string
  });
  var CallbackAction = type({
    type: literal("callback"),
    value: string
  });
  var LinkAction = intersection([
    type({
      type: literal("link"),
      value: string
    }),
    partial({
      operation: union([literal("router"), literal("self"), literal("blank"), undefinedType]),
      meta: type({
        command: string
      })
    })
  ]);
  var OpenChatActionTypeV = union([
    literal("intercom"),
    literal("helpscout"),
    literal("freshdesk"),
    literal("freshchat"),
    literal("crisp"),
    literal("zendesk"),
    literal("liveChat"),
    literal("gist"),
    literal("olark"),
    literal("hubspot"),
    literal("drift"),
    literal("pylon"),
    literal("talkdesk_v2"),
    literal("zendesk_handoff"),
    string
  ]);
  var OpenChatActionV = type({
    type: literal("open_chat"),
    meta: type({
      type: OpenChatActionTypeV
    })
  });
  var DismissAction = type({
    type: literal("dismiss")
  });
  var CompleteAction = type({
    type: literal("complete")
  });
  var StepBackAction = type({
    type: literal("step_back")
  });
  var StepForwardAction = type({
    type: literal("step_forward")
  });
  var SnoozeInterval = union([literal("hour"), literal("day"), literal("week")]);
  var SnoozeValue = number;
  var SnoozeAction = intersection([
    type({
      type: literal("snooze")
    }),
    partial({
      interval: SnoozeInterval,
      value: SnoozeValue
    })
  ]);
  var BuiltInAction = type({
    type: literal("builtin"),
    value: string
  });
  var ScriptAction = type({
    type: literal("script"),
    value: string
  });
  var VideoAction = type({
    type: literal("video"),
    value: string
  });
  var NoAction = type({ type: literal("no_action") });
  var ClickAction = type({
    type: literal("click"),
    value: string
  });
  var NudgeActionV = type({
    type: literal("nudge"),
    value: number
  });
  var GoToNudgeStepActionV = type({
    type: literal("go_to_step"),
    value: number
  });
  var UseConditionalLogicAction = type({
    type: literal("use_conditional_logic")
  });
  var ShowVideoAction = type({
    type: literal("video"),
    value: number
  });
  var ShowDocumentAction = type({
    type: literal("document"),
    value: number
  });
  var ActionV = union([
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
    CallbackAction,
    ShowVideoAction,
    ShowDocumentAction
  ]);
  var LabeledActionV = type({
    cta: string,
    action: ActionV
  });
  var TriggerAction = type({
    type: literal("trigger"),
    value: ActionV
  });

  // ../shared/src/internal/middleware/helpers/goals.ts
  var PageVisitedGoal = type({
    type: literal("page_visited"),
    value: string
  });
  var ElementClickedGoal = type({
    type: literal("element_clicked"),
    value: string
  });
  var CTAClickedGoal = type({
    type: literal("cta_clicked")
  });
  var EventTrackedGoal = intersection([
    type({
      type: literal("event_tracked"),
      event: string
    }),
    partial({
      conditions: array(array(EvaluationConditionV))
    })
  ]);

  // ../shared/src/internal/middleware/page-targeting.ts
  var PageTargetingConfigV = type({
    conditions: array(array(EvaluationConditionV)),
    configs: array(
      type({
        isExclude: boolean,
        matchType: union([
          literal("contains"),
          literal("endsWith"),
          literal("exact"),
          literal("pattern"),
          literal("regex"),
          literal("simple"),
          literal("startsWith")
        ]),
        url: string
      })
    )
  });

  // ../shared/src/internal/middleware/nudge.ts
  var NudgeContentMarkdownBlockV = type({
    type: literal("markdown"),
    meta: type({ value: string })
  });
  var NudgeContentImageBlockV = type({
    type: literal("image"),
    meta: intersection([
      type({ src: string, filename: string, size: string }),
      partial({
        altText: string,
        style: partial({
          scale: string
        })
      })
    ])
  });
  var NudgeContentVideoBlockV = type({
    type: literal("video"),
    meta: type({ type: literal("url"), src: string })
  });
  var Required = union([
    type({
      value: literal(true),
      message: string
    }),
    type({
      value: literal(false),
      message: union([nullType, undefinedType, string])
    })
  ]);
  var SurveyValidation = partial({
    validation: partial({
      required: Required
    })
  });
  var NudgeButtonActionV = union([
    NoAction,
    ClickAction,
    LinkAction,
    OpenChatActionV,
    DismissAction,
    CompleteAction,
    SnoozeAction,
    StepBackAction,
    StepForwardAction,
    NudgeActionV,
    GoToNudgeStepActionV,
    UseConditionalLogicAction,
    CallbackAction,
    ShowDocumentAction,
    ShowVideoAction
  ]);
  var NudgeConditionalActionV = type({
    operator: union([literal("eq"), literal("neq"), literal("gt"), literal("lt")]),
    operand: union([string, number]),
    action: NudgeButtonActionV
  });
  var NudgeContentButtonBlockV = type({
    type: literal("button"),
    meta: union([
      partial({
        label: string,
        action: NudgeButtonActionV,
        buttonType: union([literal("primary"), literal("secondary"), literal("snooze")], void 0)
      }),
      nullType
    ])
  });
  var NudgeContentSurveyTextBlockV = type({
    uuid: string,
    type: literal("survey_text"),
    meta: intersection([type({ prompt: string }), SurveyValidation, partial({ ariaLabel: string })])
  });
  var NudgeStepContentSurveyTextShortBlockTypeV = type({
    uuid: string,
    type: literal("survey_text_short"),
    meta: intersection([
      intersection([
        type({ prompt: string }),
        partial({ prefill: type({ enabled: boolean, userProperty: string }) })
      ]),
      SurveyValidation,
      partial({ ariaLabel: string })
    ])
  });
  var NudgeContentListBlockV = type({
    uuid: string,
    type: literal("survey_list"),
    meta: intersection([
      type({
        options: array(string),
        listType: union([literal("single"), literal("multiple")]),
        displayType: union([literal("dropdown"), literal("list"), literal("grid")])
      }),
      SurveyValidation,
      partial({
        conditionalActions: array(NudgeConditionalActionV),
        defaultAction: NudgeButtonActionV,
        isOrderRandom: boolean,
        otherOption: type({
          enabled: boolean,
          label: string,
          placeholderLabel: string
        }),
        ariaLabel: string
      })
    ])
  });
  var NudgeContentSurveyRatingBlockV = type({
    uuid: string,
    type: literal("survey_rating"),
    meta: intersection([
      union([
        type({
          type: literal("emojis"),
          lowerLabel: string,
          upperLabel: string,
          options: number,
          emojis: array(string)
        }),
        type({
          type: literal("numbers"),
          lowerLabel: string,
          upperLabel: string,
          options: number
        }),
        type({
          type: literal("stars"),
          lowerLabel: string,
          upperLabel: string,
          options: number
        }),
        type({
          type: literal("nps"),
          lowerLabel: string,
          upperLabel: string,
          options: number
        })
      ]),
      SurveyValidation,
      partial({
        conditionalActions: array(NudgeConditionalActionV),
        defaultAction: NudgeButtonActionV,
        ariaLabel: string
      })
    ])
  });
  var NudgeContentBlockV = union([
    NudgeContentMarkdownBlockV,
    NudgeContentImageBlockV,
    NudgeContentVideoBlockV,
    NudgeContentButtonBlockV,
    NudgeContentSurveyTextBlockV,
    NudgeStepContentSurveyTextShortBlockTypeV,
    NudgeContentSurveyRatingBlockV,
    NudgeContentListBlockV
  ]);
  var NudgeStepBaseV = type({
    id: number,
    title: string,
    content: array(NudgeContentBlockV)
  });
  var MediaPositionV = union([literal("left"), literal("right")]);
  var NudgeStepFooterLayoutConfigV = partial({
    footerLayout: union([literal("classic"), literal("split"), literal("centered"), literal("stacked")])
  });
  var NudgeStepLayoutConfigV = union([
    partial({
      layout: union([literal("classic"), literal("vertical")])
    }),
    partial({
      layout: literal("horizontal"),
      mediaPosition: MediaPositionV
    })
  ]);
  var ElementSelectorV = type({
    selector: string,
    text: string,
    tag: string,
    attributes: record(string, string)
  });
  var NudgeStepAdditionalV = intersection(
    [
      type({
        formFactor: union([
          intersection([
            type({
              type: literal("modal")
            }),
            partial({
              textAnimation: literal("typewriter"),
              canClickOutsideToClose: boolean
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          intersection([
            type({
              type: literal("checklist")
            }),
            partial({
              zIndexOverride: union([undefinedType, nullType, number])
            })
          ]),
          intersection([
            type({
              type: literal("popover"),
              position: union([
                literal("top-left"),
                literal("top-right"),
                literal("bottom-right"),
                literal("bottom-left"),
                literal("center")
              ])
            }),
            partial({
              textAnimation: literal("typewriter"),
              zIndexOverride: union([undefinedType, nullType, number])
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          intersection([
            type({
              type: literal("banner"),
              position: union([literal("top"), literal("bottom")]),
              placement: union([literal("default"), literal("overlay")]),
              sticky: boolean
            }),
            partial({
              layout: literal("classic"),
              textAnimation: literal("typewriter"),
              zIndexOverride: union([undefinedType, nullType, number])
            })
          ]),
          intersection([
            type({
              type: literal("pin"),
              anchor: string
            }),
            partial({
              anchorSelector: ElementSelectorV,
              isOpenByDefault: boolean,
              isShowingMask: boolean,
              advanceTrigger: string,
              offset: type({
                x: string,
                y: string
              }),
              position: union([
                literal("auto"),
                literal("top"),
                literal("bottom"),
                literal("left"),
                literal("right")
              ]),
              alignment: union([
                literal("center"),
                literal("top"),
                literal("bottom"),
                literal("left"),
                literal("right")
              ]),
              textAnimation: literal("typewriter"),
              zIndexOverride: union([undefinedType, nullType, number]),
              pointer: type({ type: union([literal("beacon"), literal("arrow")]) })
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ]),
          intersection([
            type({
              type: literal("tooltip"),
              anchor: string,
              showOn: union([literal("hover"), literal("click")]),
              marker: intersection([
                union([
                  type({
                    type: literal("beacon")
                  }),
                  type({
                    type: literal("icon"),
                    icon: union([
                      literal("helpCircle"),
                      literal("helpSquare"),
                      literal("infoCircle"),
                      literal("bookClosed"),
                      literal("lightBulb"),
                      literal("lightning")
                    ])
                  }),
                  type({
                    type: literal("image"),
                    source: string
                  })
                ]),
                type({
                  positioning: type({
                    position: union([
                      literal("left"),
                      literal("right"),
                      literal("inline_left"),
                      literal("inline_right")
                    ]),
                    offset: type({
                      x: string,
                      y: string
                    })
                  })
                })
              ])
            }),
            partial({
              anchorSelector: ElementSelectorV,
              textAnimation: literal("typewriter"),
              zIndexOverride: union([undefinedType, nullType, number]),
              pointer: type({ type: union([literal("none"), literal("arrow")]) })
            }),
            NudgeStepLayoutConfigV,
            NudgeStepFooterLayoutConfigV
          ])
        ])
      }),
      partial({
        goal: union([PageVisitedGoal, ElementClickedGoal, CTAClickedGoal, EventTrackedGoal, nullType])
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
  var NudgeStepV = intersection([NudgeStepBaseV, NudgeStepAdditionalV], "Nudge");
  var SimpleNudgeTriggerType = union([
    literal("immediately"),
    literal("smart_delay"),
    literal("rage_click"),
    literal("user_confusion"),
    literal("exit_intent"),
    literal("none")
  ]);
  var ElementAppearedTriggerConfigV = type({
    type: literal("element_appeared"),
    data: type({ selector: string }),
    conditions: array(array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var ElementClickedTriggerConfigV = type({
    type: literal("element_clicked"),
    data: type({ selector: string }),
    conditions: array(array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var EventTriggerConfigV = type({
    type: literal("analytics_event"),
    data: type({
      event: string
    }),
    conditions: array(array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var AfterTimeTriggerConfigV = type({
    type: literal("after_time"),
    data: type({ unit: union([literal("minute"), literal("second")]), value: number }),
    conditions: array(array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var NudgeTriggerConfigV = union([
    type({
      type: SimpleNudgeTriggerType,
      conditions: array(array(EvaluationConditionV)),
      data: union([nullType, undefinedType, record(string, any)])
    }),
    ElementAppearedTriggerConfigV,
    ElementClickedTriggerConfigV,
    EventTriggerConfigV,
    AfterTimeTriggerConfigV
  ]);
  var NudgeCooldownPeriodV = union([
    literal("day"),
    literal("week"),
    literal("month"),
    literal("year"),
    literal("session"),
    string
    // keep for forward compatibility
  ]);
  var NudgeCooldownLimitV = partial({
    max: number,
    period: NudgeCooldownPeriodV,
    periodCount: union([number, undefinedType])
  });
  var NudgeLifecycleConfigV = type({
    stopShowingIfCompleted: boolean,
    stopShowingIfDismissed: boolean,
    cooldownLimits: array(NudgeCooldownLimitV),
    conditions: array(array(EvaluationConditionV))
    // serialized from API (not in assistance-ui)
  });
  var NudgeBaseV = intersection(
    [
      type({
        title: string,
        // TODO: can be removed, not needed in the SDK
        variantId: number,
        steps: array(NudgeStepV),
        triggerConfig: NudgeTriggerConfigV,
        lifecycleConfig: NudgeLifecycleConfigV,
        flagKey: string
      }),
      partial({
        archived: boolean,
        displayTitle: string,
        displayDescription: string,
        position: union([literal("bottomRight"), literal("bottomLeft")]),
        priority: number,
        dir: union([literal("ltr"), literal("rtl")]),
        stepCounterFormat: union([literal("numeric"), literal("verbose")]),
        tags: array(string)
      })
    ],
    "NudgeBase"
  );
  var NudgeTypeV = union([
    literal("survey"),
    literal("tour"),
    literal("banner"),
    literal("tooltip"),
    literal("checklist"),
    string
  ]);
  var TranslationStatusV = type({
    translated: boolean,
    status: union([literal("missing"), literal("outdated"), literal("up-to-date"), nullType, undefinedType])
  });
  var NudgeAdditionalV = type(
    {
      platform: withFallback(union([literal("web"), literal("android"), literal("ios")]), "web"),
      showStepCounter: boolean,
      isDismissible: boolean,
      isSnoozable: boolean,
      isSnoozableOnAllSteps: boolean,
      snoozeLabel: string,
      doneLabel: string,
      snoozeDuration: type({
        interval: SnoozeInterval,
        value: SnoozeValue
      }),
      type: NudgeTypeV,
      previewUrl: union([string, nullType, undefinedType]),
      customThemeId: union([number, nullType, undefinedType]),
      variant: string,
      pageTargeting: PageTargetingConfigV,
      temporarilyHideTargeting: PageTargetingConfigV,
      translationStatus: union([TranslationStatusV, nullType, undefinedType])
    },
    "NudgeAdditional"
  );
  var defaults2 = {
    platform: "web",
    showStepCounter: false,
    isDismissible: true,
    isSnoozable: false,
    isSnoozableOnAllSteps: true,
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
    variant: "control",
    pageTargeting: {
      conditions: [[]],
      configs: []
    },
    temporarilyHideTargeting: {
      conditions: [[]],
      configs: []
    }
  };
  var NudgeV = intersection([NudgeBaseV, NudgeAdditionalV], "Nudge");
  var Nudge = class {
    static decode = (data) => {
      try {
        return decodeThrowing2(NudgeV, data);
      } catch (e2) {
        logger.error("Error decoding guide or survey", { error: e2 });
        getSentry()?.captureException(e2);
        return decodeThrowing2(NudgeV, {
          ...defaults2,
          ...data,
          steps: (data.steps || []).map((step) => ({ ...stepDefaults, ...step }))
        });
      }
    };
  };

  // ../shared/src/internal/middleware/theme.ts
  var ThemeModeV = type({
    varDefaults: record(string, union([string, number])),
    varOverrides: record(string, union([string, number])),
    componentOverrides: record(string, any),
    mobileOverrides: record(string, any)
  });
  var ThemeV = union([
    type({
      lightMode: ThemeModeV,
      darkMode: ThemeModeV
    }),
    nullType,
    undefinedType
  ]);
  var ThemeObjectV = type(
    {
      id: number,
      name: string,
      isDefault: boolean,
      theme: ThemeV
    },
    "Theme"
  );
  var defaults3 = {};
  var decode2 = (data) => {
    try {
      return decodeThrowing2(ThemeObjectV, data);
    } catch (e2) {
      logger.error("Error decoding theme", { error: e2 });
      getSentry()?.captureException(e2);
      return decodeThrowing2(ThemeObjectV, { ...defaults3, ...data });
    }
  };

  // ../shared/src/types/flags.ts
  var defaultFlags = {
    "support-ruby-on-rails": false,
    "enable-when-element-appears-trigger": true
  };

  // ../shared/src/types/api/resource-center.ts
  var LauncherV = intersection([
    type({
      type: string,
      position: string,
      offsetX: number,
      offsetY: number,
      zIndex: number
    }),
    partial({
      anchorElement: union([string, nullType]),
      iconSrc: union([string, nullType])
    })
  ]);
  var ResourceCenterV = intersection([
    type({
      isAutopilotEnabled: boolean,
      textStrings: record(string, string),
      showQuickLinks: boolean
    }),
    partial({
      key: union([string, nullType, undefinedType]),
      mobileLauncher: union([LauncherV, nullType]),
      desktopLauncher: union([LauncherV, nullType]),
      customTheme: union([number, nullType])
    })
  ]);
  var ResourceCenter = class {
    static decode = (data) => {
      return decodeThrowing2(ResourceCenterV, data);
    };
  };

  // ../shared/src/sdk/config.ts
  function guard(meta, fn, defaultValue) {
    try {
      const result = fn();
      if (result === void 0) return defaultValue;
      return result;
    } catch (e2) {
      getSentry()?.captureException(e2);
      logger.error(`Error decoding config response (${meta.apiKey}). Using default value for '${meta.field}'`, {
        error: e2,
        field: meta.field,
        defaultValue
      });
      return defaultValue;
    }
  }
  async function fetchConfig(apiKey, isEditorPreview, isAdmin = false, locale = void 0) {
    let path = isAdmin ? `/sdk/v1/admin/config` : `/sdk/v1/config`;
    if (locale) {
      path += `?locale=${locale}`;
    }
    if (isEditorPreview) return null;
    const result = await get(path, {
      headers: {
        Authorization: `Api-Key ${apiKey}`
      }
    });
    return result.data;
  }
  async function fetchResourceCenters(apiKey, isEditorPreview = false) {
    try {
      const path = `/sdk/v1/resource_center`;
      if (isEditorPreview) return [];
      const result = await get(path, {
        headers: {
          Authorization: `Api-Key ${apiKey}`
        }
      });
      const data = result.data;
      if (!data?.resourceCenters) {
        return [];
      }
      const resourceCenters = data.resourceCenters.map((rc) => {
        try {
          return ResourceCenter.decode(rc);
        } catch (e2) {
          getSentry()?.captureException(e2);
          logger.error("Error decoding resource center", JSON.stringify({ error: e2, resourceCenter: rc }));
          return void 0;
        }
      }).filter((rc) => Boolean(rc));
      return resourceCenters;
    } catch (error) {
      getSentry()?.captureException(error);
      logger.error("Error fetching resource center settings. Continuing with empty data.", { error });
      return [];
    }
  }
  async function getConfig(apiKey, isAdmin = false, locale = void 0, isEditorPreview = false) {
    const [data, resourceCenters, flags] = await Promise.all([
      fetchConfig(apiKey, isEditorPreview, isAdmin, locale).catch((error) => {
        logger.error("Error fetching config. Continuing with empty data.", { error });
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
    const decodedNudges = nudges?.flatMap((nudge) => {
      try {
        return [Nudge.decode(nudge)];
      } catch (e2) {
        getSentry()?.captureException(e2);
        logger.error("Error decoding nudge", JSON.stringify({ error: e2, nudge }));
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
      themes: (themes ?? []).flatMap(
        (theme) => guard({ apiKey, field: `themes[id=${theme?.id}]` }, () => [decode2(theme)], [])
      ),
      resourceCenters
    };
  }
  async function getAdminConfig(apiKey, isEditorPreview = false) {
    if (!apiKey) {
      return;
    }
    return getConfig(apiKey, true, getSDK()?.[_configuration].locale, isEditorPreview);
  }
  async function getEndUserConfig(apiKey, isEditorPreview = false) {
    return getConfig(apiKey, false, getSDK()?.[_configuration].locale, isEditorPreview);
  }

  // ../shared/src/products/nudges/store/actions.ts
  var shouldDebugNudges = !!LocalStorage_default.get("debug:nudges", false);
  var initNudges = (_, nudges) => {
    if (_.nudgesManager) {
      _.nudgesManager.send({ type: "REFRESH_FROM_CONFIG", nudges });
      return;
    }
    const machine = NudgesManagerMachine(_, nudges);
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
    setupMessageBusNudgeTriggerSubscriptions(_);
  };
  var sendIndirectTrigger = (_, triggerEventPayload) => {
    const simulatedNudge = getDebuggedNudge(_);
    if (simulatedNudge) {
      sendDirectedTrigger(_, simulatedNudge, triggerEventPayload);
    } else {
      _.nudgesManager?.send({
        type: "TRIGGER",
        ...triggerEventPayload
      });
    }
  };
  var forceTriggerSingleNudge = (_, nudge, triggerEventPayload) => {
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
      nudgeId: nudge.variantId,
      ...triggerEventPayload,
      overrides: {
        ...defaultOverrides,
        ...triggerEventPayload.overrides
      }
    });
  };
  var sendDirectedTrigger = (_, nudge, triggerEventPayload) => {
    _.nudgesManager?.send({
      type: "TRIGGER",
      nudgeId: nudge.variantId,
      ...triggerEventPayload
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
    const adminConfig = await getAdminConfig(configuration?.apiKey);
    if (adminConfig?.nudges) {
      await getSDK()?._reloadNudges(adminConfig);
    }
    if (adminConfig?.themes) {
      await getSDK()?._reloadThemes({ themes: adminConfig.themes });
    }
    const adminNudge = adminConfig?.nudges.find((n) => n.variantId === nudge.variantId);
    if (!adminNudge) {
      _.services.postMessageToDashboard("FAILED_TO_LOAD_PREVIEW_NUDGE" /* FailedToLoadPreviewNudge */);
      return;
    }
    _.nudgesManager?.send({ type: "START_DEBUG", nudge: adminNudge });
    const overrides = {
      stepIndex: options.toStepIndex
    };
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
  var restartDebugSession = async (_, options = { resetToOriginalDebugNudge: true }) => {
    const debugNudge = getDebuggedNudge(_, { getOriginal: !!options.resetToOriginalDebugNudge });
    if (debugNudge) {
      await stopDebugSession(_, { refreshDecide: false });
      resetNudge(_, debugNudge.variantId);
      setTimeout(() => {
        startDebugSession(_, debugNudge, { toStepIndex: options.toStepIndex, refreshDecide: false });
      }, 50);
    }
  };
  var stopDebugSession = async (_, options = { refreshDecide: true }) => {
    const debugNudge = getDebuggedNudge(_);
    if (debugNudge) {
      if (options.refreshDecide) {
        await refreshDecideResult(_);
      }
      _.nudgesManager?.send({ type: "STOP_DEBUG" });
    }
  };
  var showStepMock = (_, nudge, stepIndex, options) => {
    _.services.renderNudge(_, nudge, stepIndex ?? 0, {
      renderMode: 1 /* MOCK */,
      forceOpen: options?.forceOpen,
      anchorOverride: options?.anchorOverride
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
    addSeenTime,
    snoozed,
    active,
    addActivatedTime
  }) => {
    const type2 = nudge.type;
    const activelifeCycleUuid = addActivatedTime ? v4_default() : active === false ? "" : void 0;
    const updatedContext = {
      [Number(nudge.variantId)]: {
        type: type2,
        currentStep: stepIndex,
        stepIndexStack,
        lastSeenTs: addSeenTime ? Date.now() : void 0,
        lastSeenSessionId: _.user?.getSessionId?.(),
        lastSeenDeviceId: _.user?.device_id,
        activatedTs: addActivatedTime ? [Date.now()] : void 0,
        snoozedUntilTs: snoozed ? (0, import_dayjs3.default)().add(snoozed.value, snoozed.interval).valueOf() : void 0,
        isCompleted,
        isDismissed,
        completedTs: isCompleted ? [Date.now()] : void 0,
        dismissedTs: isDismissed ? [Date.now()] : void 0,
        activelifeCycleUuid
      }
    };
    try {
      updateEndUserStore(_.endUserStore, updatedContext);
    } catch (e2) {
      getSentry()?.captureException(e2, {
        captureContext: {
          tags: {
            product: "nudges"
          }
        }
      });
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
  var getDebugSnapshot = (_, nudge, stepIndex) => {
    const { type: type2, name } = getProductMeta(nudge);
    const globalChecks = {
      builtInThrottles: {
        result: passesBuiltInThrottles(_, nudge),
        explanation: `This ${type2} is blocked by another currently rendered guide or survey.`
      },
      customThrottles: {
        result: passesCustomThrottles(_, nudge),
        explanation: `The custom throttle for ${type2}s of this type prevents further guides or surveys from being shown.`,
        detail: {
          limit: type2 === "survey" ? _.organization?.surveyThrottle.limit.max : _.organization?.guideThrottle.limit.max,
          period: type2 === "survey" ? _.organization?.surveyThrottle.limit.period : _.organization?.guideThrottle.limit.period
        }
      }
    };
    const sessionPropertyConditions = getSessionPropertyConditions(nudge.triggerConfig.conditions);
    const nudgeChecks = {
      limits: {
        result: passesCooldown(_, nudge),
        explanation: `${name} has been seen the maximum number of times.`,
        detail: {
          limits: nudge.lifecycleConfig
        }
      },
      userTargeting: {
        result: nudgePassesDecide(nudge, _.decide),
        explanation: "Booted user is not targeted by this flag.",
        detail: {
          userTargeting: nudge.flagKey
        }
      },
      page: {
        result: passesPageTargeting(_, nudge),
        explanation: `${name} is not shown on this page.`,
        detail: {
          page: nudge.pageTargeting.conditions
        }
      },
      snooze: {
        result: passesSnoozedConditions(_, nudge),
        explanation: `${name} is snoozed.`,
        detail: {
          isSnoozable: nudge.isSnoozable,
          isSnoozableOnAllSteps: nudge.isSnoozableOnAllSteps,
          snoozeDuration: nudge.snoozeDuration
        }
      },
      sessionProperties: {
        result: passesSessionProperties(_, sessionPropertyConditions),
        explanation: "Session properties do not match the conditions.",
        detail: {
          conditions: sessionPropertyConditions,
          sessionProperties: _.sessionProperties
        }
      }
    };
    const nudgeActorContext = getNudgeActorSnapshot(_, nudge.variantId)?.context;
    const currentStep = stepIndex ?? nudgeActorContext?.stepIndex ?? 0;
    const step = nudgeActorContext ? getNudgeStep(nudgeActorContext.nudge, currentStep) : void 0;
    const stepChecks = {
      element: {
        result: passesPinnedElement(_, nudge, currentStep),
        explanation: "Pinned element is not visible on the page.",
        detail: {
          element: isAnchorableStep(step) ? step?.formFactor.anchor : "unknown"
        }
      }
    };
    const snapShot = {
      ...globalChecks,
      ...nudgeChecks,
      ...stepChecks
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
  var execNudgeAction = (_, action, meta, renderMode, actor) => {
    if (renderMode === 1 /* MOCK */ && _.nudgeRecorderToolBar.visible) {
      return;
    }
    switch (action?.type) {
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
          action
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
      default: {
        actor?.send({
          type: "ADVANCE",
          buttonType: meta?.buttonType,
          cta: meta?.label,
          action,
          ...action?.type === "go_to_step" && { step: action.value }
        });
        break;
      }
    }
  };

  // src/actions/nudge.ts
  var nudgeActionsBridge = registerJSBridge("nudgeActions");
  nudgeActionsBridge.function("dismissNudge", (nudge) => {
    dismissNudge(window.engagement._, nudge, 0 /* DEFAULT */);
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
      return determineAction(step, {
        buttonMeta,
        surveyResponse
      });
    }
  );
  nudgeActionsBridge.function(
    "updateSurveyResponse",
    (variantId, surveyResponse) => {
      const actor = getNudgeActor(window.engagement._, variantId);
      console.log("updateSurveyResponse", variantId, surveyResponse);
      actor?.send({ type: "UPDATE_SURVEY_RESPONSE", surveyResponse });
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
    notifyLocationSubscribers(location);
    getAllNudgeActors(_)?.forEach((actor) => {
      const snapshot = actor.getSnapshot();
      const nudge = snapshot.context.nudge;
      if (snapshot.matches({ Step: "Render Loop" }) && shouldTemporarilyHide(_, nudge)) {
        actor?.send({ type: "CLOSE" });
      }
    });
    sendIndirectTrigger(_, {
      trigger: { type: "active" },
      source: { type: "active" },
      overrides: { cooldown: true, customThrottles: true, page: true }
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
  var updateSimulationContext = (_, context, triggerMatched, updateTriggerMatched) => {
    if (_.nudgeDebugToolBar.visible) {
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
        passesPinnedElement: simulatedNudge ? passesPinnedElement(_, simulatedNudge, currentStepIndex) : false,
        shouldTemporarilyHide: simulatedNudge ? shouldTemporarilyHide(_, simulatedNudge) : false,
        passesTriggerMatch: simulatedNudge && context?.triggerEvent ? (() => {
          if (triggerMatched) {
            return true;
          }
          const hasOverride = context.triggerEvent.overrides?.triggerMatch;
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
            const triggerElementMatch = passesTriggerElement(_, simulatedNudge, context.triggerEvent, []);
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
      simulationActionsBridge.function("updateSimulationContext").call(JSON.stringify(relevantContext));
    }
  };
  var subscribeToSimulationActions = (_) => {
    let triggerMatched = false;
    const updateTriggerMatched = (value) => {
      triggerMatched = value;
    };
    sub(
      _,
      () => {
        if (_.nudgeDebugToolBar.visible) {
          simulationActionsBridge.function("showDebugToolbar").promise({});
        } else {
          simulationActionsBridge.function("hideDebugToolbar").promise({});
          updateTriggerMatched(false);
        }
      },
      [["nudgeDebugToolBar", "visible"]]
    );
    _.nudgesManager?.subscribe((x) => {
      updateSimulationContext(_, x.context, triggerMatched, updateTriggerMatched);
    });
    sub(
      _,
      () => {
        if (_.nudgeDebugToolBar.visible) {
          const snapshot = _.nudgesManager?.getSnapshot();
          if (snapshot) {
            updateSimulationContext(_, snapshot.context, triggerMatched, updateTriggerMatched);
          }
        }
      },
      [["nudgeDebugToolBar", "bypassCustomThrottles"]]
    );
  };

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
  var __assign2 = function() {
    __assign2 = Object.assign || function __assign4(t2) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t2[p] = s2[p];
      }
      return t2;
    };
    return __assign2.apply(this, arguments);
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
        var actingUserProperties = __assign2({}, this.identity.userProperties);
        var actingIdentity = __assign2(__assign2({}, this.identity), { userProperties: actingUserProperties });
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
        return __assign2({}, this.identity);
      };
      IdentityStoreImpl2.prototype.setIdentity = function(identity3) {
        var originalIdentity = __assign2({}, this.identity);
        this.identity = __assign2({}, identity3);
        if (!isEqual4(originalIdentity, this.identity)) {
          this.listeners.forEach(function(listener) {
            listener(identity3);
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
    const existingProxy = window.engagement;
    const proxy2 = {
      _q: existingProxy?._q ?? [],
      _configuration: {
        apiKey: existingProxy?._configuration?.apiKey ?? "",
        serverUrl: existingProxy?._configuration?.serverUrl,
        serverZone: existingProxy?._configuration?.serverZone ?? "US",
        options: {
          ...existingProxy?._configuration?.options
        }
      },
      _sentry: void 0,
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
        loadAsyncScripts(bundleURL, proxy2._configuration.options.splitting ? "module" : void 0);
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
              serverUrl: config.serverUrl?.includes("amplitude.com") ? void 0 : config.serverUrl,
              // default Amplitude server URLs are different for GS VS Analytics, we onyl want to pick up custom URLs used for proxying
              ...options,
              options: { logLevel: config.logLevel, logger: config.loggerProvider, ...options?.options }
            });
            await window.engagement.boot({
              user: () => {
                const identity3 = identityStore.getIdentity();
                return {
                  user_id: client.getUserId(),
                  device_id: client.getDeviceId(),
                  user_properties: identity3.userProperties,
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
            identityStore.addIdentityListener((identity3) => {
              window.engagement._setUserProperties(identity3.userProperties);
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
            await method(...args).then(resolve, reject);
          } catch (err) {
            logger.error(err);
          }
        } else {
          await method(...args);
        }
      } else {
        await method(...args);
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
        await call(item);
      } else {
        call(item);
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

  // ../shared/src/products/resource-center/service-actions.ts
  var service_actions_exports2 = {};
  __export(service_actions_exports2, {
    previewAutopilotKeywords: () => previewAutopilotKeywords,
    previewContentItem: () => previewContentItem,
    previewRecSet: () => previewRecSet,
    previewResourceCenter: () => previewResourceCenter,
    setInitialPage: () => setInitialPage,
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
          getSentry()?.captureException(e2);
        }
      } catch (error) {
        logger.error("Unexpected error logging event; ignoring", { error });
        getSentry()?.captureException(error);
      }
    }
    setBootStatus(hasBooted) {
      this.hasBooted = hasBooted;
    }
  };

  // ../shared/src/sdk/sdk.ts
  var _reloadTargets = ["reloadOrganization", "reloadNudges", "reloadThemes"];
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
      apiKey: "",
      options: { ...DEFAULT_OPTIONS }
    };
    _initStarted = false;
    _isProxy = false;
    _fingerprint;
    _sentry;
    constructor(_, sdkConfig) {
      this._ = _;
      this.nudgeActions = bindActions(_, service_actions_exports);
      this.resourceCenterActions = bindActions(_, service_actions_exports2);
      this.globalActions = bindActions(_, global_actions_exports);
      this.setRouter = this.setRouter.bind(this);
      this.boot = this.boot.bind(this);
      this._startNudgeDebug = this._startNudgeDebug.bind(this);
      this.forwardEvent = this.forwardEvent.bind(this);
      this.addIntegration = this.addIntegration.bind(this);
      this.setThemeMode = this.setThemeMode.bind(this);
      this.addCallback = this.addCallback.bind(this);
      this.setSessionProperty = this.setSessionProperty.bind(this);
      this._initStarted = window.engagement?._initStarted === true;
      this._configuration = {
        ...this._configuration,
        ...sdkConfig,
        options: { ...this._configuration.options, ...sdkConfig.options }
      };
      if (this._configuration.options.logger) {
        this._configuration.options.logger.enable(this._configuration.options.logLevel ?? 2);
      }
      this._sentry = sentryHubFactory(
        "https://86e449af9e7145de4804c2143988499b@o13027.ingest.us.sentry.io/4508580659462144"
      );
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
            const identity3 = identityStore.getIdentity();
            return {
              user_id: client.getUserId(),
              device_id: client.getDeviceId(),
              user_properties: identity3.userProperties,
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
        identityStore.addIdentityListener((identity3) => {
          this._setUserProperties(identity3.userProperties);
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
    gs = {
      /**
       * Resets a guide or survey to a specific step. If no step is provided, resets the nudge to initial step.
       * If the nudge is currently active, it will become inactive.
       *
       * @param id The id of the nudge to reset
       * @param step The step to reset the nudge to
       */
      reset: (flagKey, step) => {
        const nudge = getNudgeByFlagKey(this._, flagKey);
        if (!nudge) {
          logger.warn(`gs.reset: Guide or survey with flagKey: ${flagKey} not found`);
          return;
        }
        this.nudgeActions.resetNudge(nudge?.variantId, { step });
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
            status: rendering ? "visible" : "active"
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
       * Force closes all active guides and surveys
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
     * @param locale The new language code.
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
    /**
     * Make Guides and Surveys available to the user. They will not be available before `.boot` is called, even if the
     * snippet has been run on the page they are on.
     */
    async boot(options) {
      if (typeof options.user === "function") {
        try {
          this._.user = options.user();
        } catch (e2) {
          logger.error("Failed to get user from provider function", e2);
        }
      } else if (typeof options === "string") {
        this._.user = { user_id: options };
      } else if (typeof options.user === "string") {
        this._.user = { user_id: options.user };
      } else {
        this._.user = options.user;
      }
      if (!this._.user || !this._.user.user_id && !this._.user.device_id) {
        logger.error("User must specify at least a user_id or device_id");
        this._.user = void 0;
        return;
      }
      this._.integrations = [];
      options.integrations?.forEach((integration) => {
        this.addIntegration(integration);
      });
      logger.log("booting...", JSON.stringify(this._.user, null, 2));
      try {
        this._.decide = await decide_default.decide(this._configuration.apiKey, this._.user, this._.isEditorPreview);
        logger.debug("Decide data fetched successfully");
      } catch (e2) {
        logger.error("Failed to fetch decide data", e2);
        getSentry()?.captureException(e2);
      }
      try {
        await this._.endUserStore.fetchData();
        if (this._.endUserStore.initializedSuccessfully) {
          this._analytics.setBootStatus(true);
          this._.nudgesManager?.send({ type: "END_USER_STORE_LOADED" });
          logger.debug("End user state loaded successfully");
        }
      } catch (e2) {
        logger.error("Failed to fetch end user state", e2);
        getSentry()?.captureException(e2);
      }
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
    /** Internal SDK methods **/
    async _configUser() {
      getSentry()?.addBreadcrumb({
        level: "debug",
        category: "internal",
        message: "_configUser called"
      });
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
          fn(config);
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
    _startChat() {
      this.resourceCenterActions.setInitialPage({ item: { page: "chat", params: {} } });
      this.resourceCenterActions.showResourceCenter(true);
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
    _getDebugSnapshot(options) {
      if (options?.variantId) {
        if (typeof options.variantId === "number") {
          const nudge = getNudgeById(this._, options.variantId);
          if (nudge) {
            const stepIndex = typeof options.stepIndex === "number" ? options.stepIndex : 0;
            const snapshot = getDebugSnapshot(this._, nudge, stepIndex);
            const { name } = getProductMeta(nudge);
            const message = `${name} debug snapshot: ${snapshot.guideOrSurvey.title} - ${snapshot.guideOrSurvey.variant}`;
            console.log(message, snapshot);
          }
        }
        return;
      }
      const nudges = getAllNudges(this._);
      for (const nudge of nudges) {
        const snapshot = getDebugSnapshot(this._, nudge);
        const { name } = getProductMeta(nudge);
        const message = `${name} debug snapshot: ${snapshot.guideOrSurvey.title} - ${snapshot.guideOrSurvey.variant}`;
        console.log(message, snapshot);
      }
      return;
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
      } else {
        this._.endUserStore.data = {
          nudgeInteractions: Object.fromEntries(
            Object.keys(this._.endUserStore.data.nudgeInteractions).map((key) => [
              key,
              createDefaultNudgeInteractionState()
            ])
          )
        };
      }
      this._.endUserStore.pushData();
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
  function __extends2(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }
  var __assign3 = function() {
    __assign3 = Object.assign || function __assign4(t2) {
      for (var s2, i2 = 1, n = arguments.length; i2 < n; i2++) {
        s2 = arguments[i2];
        for (var p in s2) if (Object.prototype.hasOwnProperty.call(s2, p)) t2[p] = s2[p];
      }
      return t2;
    };
    return __assign3.apply(this, arguments);
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
        if (t2[0] & 1) throw t2[1];
        return t2[1];
      },
      trys: [],
      ops: []
    }, f, y2, t2, g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
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
        if (f = 1, y2 && (t2 = op[0] & 2 ? y2["return"] : op[0] ? y2["throw"] || ((t2 = y2["return"]) && t2.call(y2), 0) : y2.next) && !(t2 = t2.call(y2, op[1])).done) return t2;
        if (y2 = 0, t2) op = [op[0] & 2, t2.value];
        switch (op[0]) {
          case 0:
          case 1:
            t2 = op;
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
            if (!(t2 = _.trys, t2 = t2.length > 0 && t2[t2.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t2 || op[1] > t2[0] && op[1] < t2[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t2[1]) {
              _.label = t2[1];
              t2 = op;
              break;
            }
            if (t2 && _.label < t2[2]) {
              _.label = t2[2];
              _.ops.push(op);
              break;
            }
            if (t2[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e2) {
        op = [6, e2];
        y2 = 0;
      } finally {
        f = t2 = 0;
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
  function __spreadArray2(to, from, pack) {
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
    if (!selectable) {
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
      function SemanticVersion2(major, minor, patch2, preRelease) {
        if (preRelease === void 0) {
          preRelease = void 0;
        }
        this.major = major;
        this.minor = minor;
        this.patch = patch2;
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
        var patch2 = Number(matchGroup[4]) || 0;
        var preRelease = matchGroup[5] || void 0;
        return new SemanticVersion2(major, minor, patch2, preRelease);
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
              var metadata = __assign3(__assign3(__assign3({}, flag.metadata), segment.metadata), result.metadata);
              result = __assign3(__assign3({}, result), { metadata });
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
        var match2 = this.evaluateConditions(target, segment.conditions);
        if (match2) {
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
            var match2 = true;
            try {
              for (var innerConditions_1 = (e_4 = void 0, __values2(innerConditions)), innerConditions_1_1 = innerConditions_1.next(); !innerConditions_1_1.done; innerConditions_1_1 = innerConditions_1.next()) {
                var condition = innerConditions_1_1.value;
                match2 = this.matchCondition(target, condition);
                if (!match2) {
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
            if (match2) {
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
        if (!propValue) {
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
        return xs.size === ys.size && __spreadArray2([], __read2(ys), false).every(function(y2) {
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
  var version = "3.7.5";
  var VERSION = version;
  var _hasatob = typeof atob === "function";
  var _hasbtoa = typeof btoa === "function";
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
  var _btoa = _hasbtoa ? (bin) => btoa(bin) : _hasBuffer ? (bin) => Buffer.from(bin, "binary").toString("base64") : btoaPolyfill;
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
        var cp = (7 & cccc.charCodeAt(0)) << 18 | (63 & cccc.charCodeAt(1)) << 12 | (63 & cccc.charCodeAt(2)) << 6 | 63 & cccc.charCodeAt(3), offset = cp - 65536;
        return _fromCC((offset >>> 10) + 55296) + _fromCC((offset & 1023) + 56320);
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
  var _atob = _hasatob ? (asc) => atob(_tidyB64(asc)) : _hasBuffer ? (asc) => Buffer.from(asc, "base64").toString("binary") : atobPolyfill;
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
      __extends2(FetchError2, _super);
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
      __extends2(TimeoutError2, _super);
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
                return [4, this.httpClient.request({
                  requestUrl: "".concat(this.serverUrl, "/sdk/v2/flags"),
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
  var import_debounce = __toESM(require_debounce());
  var MessageBus = class {
    messageToSubscriberGroup;
    debounce;
    constructor(debounce = import_debounce.default) {
      this.messageToSubscriberGroup = /* @__PURE__ */ new Map();
      this.debounce = debounce;
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
    isElementVisible: () => false,
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
    }
  };
  var DEFAULT_OPTIONS2 = {
    isEditorPreview: false,
    platform: "unknown",
    location: {
      href: "",
      pathname: "",
      search: ""
    },
    services: NOOP_SERVICES,
    persistResourceCenter: true
  };
  var emptyGlobalStore = (optionsPartial) => {
    const options = { ...DEFAULT_OPTIONS2, ...optionsPartial };
    const { isEditorPreview, platform } = options;
    return {
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
      currentModalNudge: null,
      activeChecklist: null,
      timedTriggers: /* @__PURE__ */ new Map(),
      platform,
      trackedAppEvents: /* @__PURE__ */ new Set(),
      showWidgetTableau: false,
      widgetTableauSelection: { widgets: ["guide", "survey", "resourceCenter"] },
      themeMode: "lightMode",
      themes: [],
      messageBus: new MessageBus(),
      nudgeDebugToolBar: {
        visible: false,
        closeTabWhenToolbarClosed: false,
        bypassCustomThrottles: true,
        position: "bottom"
      },
      nudgeRecorderToolBar: {
        visible: false
      },
      // needed for dashboard preview
      editorPreviewDevice: "desktop",
      isEditorPreview,
      sessionStart: Date.now(),
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
        recentSearches: [],
        isAdditionalResourcesExpanded: true
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
        ...persistResourceCenter ? resourceCenterFromStorage : {}
      }
    });
  };
  var initGlobalSubs = (_) => {
    const unsubs = [...initValtioGlobalStoreSubs(_)];
    return () => unsubs.forEach((unsub) => unsub());
  };

  // src/services/index.ts
  var nudgeServicesBridge = registerNativeBridge("nudgeServices");
  var services = {
    ...NOOP_SERVICES,
    onLocationChange,
    linkExecutable: (_, action, forceNewTab) => nudgeServicesBridge.function("linkExecutable").call(JSON.stringify(action), forceNewTab),
    getDefaultUIMode: () => nudgeServicesBridge.function("getDefaultUIMode").call(),
    closeStep: (_, nudge, stepIndex) => nudgeServicesBridge.function("closeStep").call(JSON.stringify(nudge), stepIndex),
    clickElement: (selector) => nudgeServicesBridge.function("clickElement").call(selector),
    isElementVisible: (selector) => nudgeServicesBridge.function("isElementVisible").call(typeof selector === "string" ? selector : selector.selector || selector.text),
    renderNudge(_, nudge, stepIndex, options) {
      const _options = {
        renderMode: options?.renderMode,
        forceOpen: options?.forceOpen,
        anchorOverride: options?.anchorOverride
      };
      registerNativeBridge().function("renderNudge").promise({ nudge, stepIndex, options: _options }).then((result) => {
        logger.log("[JS] renderNudge result", result);
      }).catch((error) => {
        logger.error("[JS] renderNudge error", error);
      });
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
    if (!proxy2[_configuration].options?.logger) {
      console.log("Using default logger");
      proxy2[_configuration].options.logger = new DefaultLogger();
    } else {
      console.log("Using custom logger", proxy2[_configuration].options.logger);
    }
    if (proxy2[_configuration].options?.logger) {
      proxy2[_configuration].options.logger.enable(proxy2[_configuration].options?.logLevel ?? 2);
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
    console.log("Engagement bundle loaded");
  };
  window.engagement = createProxy(invokeImmediately);
})();
