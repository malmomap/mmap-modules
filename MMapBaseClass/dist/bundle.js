(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["MMapBaseClass"] = factory();
	else
		root["MMapBaseClass"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _extend = __webpack_require__(1);
	
	var _extend2 = _interopRequireDefault(_extend);
	
	var _queryString = __webpack_require__(2);
	
	var _queryString2 = _interopRequireDefault(_queryString);
	
	__webpack_require__(5);
	
	var _es6Promise = __webpack_require__(6);
	
	var _es6Promise2 = _interopRequireDefault(_es6Promise);
	
	var _hjson = __webpack_require__(9);
	
	var _hjson2 = _interopRequireDefault(_hjson);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MMApBaseClass = function () {
		// If language is not supported in module's options.lang this will be the fallback language
	
		// For transpiling with class properties: https://babeljs.io/docs/plugins/transform-class-properties/
		function MMApBaseClass() {
			_classCallCheck(this, MMApBaseClass);
	
			this.dirDefaultOptions = "modules/" + this.constructor.name + "/options/";
			this.dirCustomOptions = "modules/" + this.constructor.name + "/options/";
			this._options = null;
			this.defaultLangCode = "sv";
		}
	
		/**
	  * Returns the browser's current set language
	  * @return {String} An ISO code representing the language.
	  */
		// To be filled with contents from options files
	
	
		_createClass(MMApBaseClass, [{
			key: "getLangCode",
			value: function getLangCode() {
				return navigator.language || navigator.browserLanguage; // browserLanguage is for IE<11
			}
	
			/**
	   * Returns the language object for the current language (i.e. does not return lang object for all supported languages).
	   * @return {Object} The language object/hash table
	   */
	
		}, {
			key: "getLang",
			value: function getLang() {
				var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
				// TODO: Get object for current language
				var langObj = options.lang || {};
	
				var langExludingDialects = this.getLangCode().split("-")[0]; // e.g. sv-SE or sv-FI -> sv
				var supportedLangs = Object.keys(langObj);
				var langCode = supportedLangs.indexOf(langExludingDialects) === -1 ? this.defaultLangCode : langExludingDialects;
				var lang = langObj[langCode];
				if (!lang) {
					console.warn("Module {this.constructor.name} has no language defined in defaultOptions.json for lang code: {langCode}.");
					lang = supportedLangs.length ? supportedLangs[0] : null; // As a last fallback any supported language will be used (if any, otherwise none)
				}
				return lang || {};
			}
	
			// _getWebParamsAsObject() {
			// 	return queryString.parse(location.search);
			// }
	
		}, {
			key: "_getProfileName",
			value: function _getProfileName() {
				return window.cbKort && cbKort && cbKort.getProfile ? cbKort.getProfile() || null : null; //this._getWebParamsAsObject().profile || null;
			}
		}, {
			key: "_fetchDefaultOptions",
			value: function _fetchDefaultOptions() {
				// Options defined in defaultOptions.json inside the module
				var defaultOptionsName = "defaultOptions.json";
				var pathToDefaultOptions = this.dirDefaultOptions + defaultOptionsName;
				return new _es6Promise2.default(function (resolve, reject) {
					fetch(pathToDefaultOptions).then(function (response) {
						response.text().then(function (text) {
							return resolve(_hjson2.default.parse(text));
						}); //.catch(error => new Error("Error while parsing default options"));
					}).catch(function (error) {
						return reject(error);
					});
				});
			}
	
			/**
	   * Fetches custom options (if any). The custom options filename 
	   * is named like: "customOptions-" + profileName.
	   * @return {Promise}
	   *         - on success: 	returns options {Object}
	   *         - on fail: 		returns null {Object}
	   */
	
		}, {
			key: "_fetchCustomOptions",
			value: function _fetchCustomOptions() {
				var _this = this;
	
				// Options defined in customOptions.json inside the module
	
				var profileName = this._getProfileName() || "mock";
				var customOptionsName = "customOptions-" + profileName + ".json";
				var pathToCustomOptions = this.dirCustomOptions + customOptionsName;
				return fetch(pathToCustomOptions).then(function (response) {
					return response.text().then(function (text) {
						return _hjson2.default.parse(text);
					}); //.catch(error => new Error("Error while parsing default options"));
				}).catch(function (error) {
					console.warn("Profile: " + _this._getProfileName() + "has no custom config for module: " + _this.constructor.name + " (this might be expected and not an error). See error message below for details");
					console.warn(error);
					return null;
				});
			}
	
			/**
	   * Fetches default and custom options (if any). Overrides default options with custom options.
	   * @return {Promise}
	   *         - on success: 	returns merged options {Object}
	   *         - on fail: 		returns error {Object}
	   */
	
		}, {
			key: "_fetchOptions",
			value: function _fetchOptions() {
				return _es6Promise2.default.all([this._fetchDefaultOptions(), this._fetchCustomOptions()]).then(function (optionsArr) {
					return (0, _extend2.default)(true, optionsArr[0], optionsArr[1] || {});
				}, function (error) {
					console.log(error);
					return null; // Should we return default options if custom options were not found but default options were found?
				});
			}
	
			/**
	   * Public async method for fetching options (merged default and custom).
	   * This is a wrapper for _fetchOptions to add caching of this._options 
	   * for speeding up any subsequent calls.
	   * @return {Promise}
	   *         - on success: 	returns merged options {Object}
	   *         - on fail: 		returns error {Object}
	   */
	
		}, {
			key: "getOptions",
			value: function getOptions() {
				var _this2 = this;
	
				if (this._options) {
					return _es6Promise2.default.resolve(this._options);
				}
	
				return new _es6Promise2.default(function (resolve, reject) {
					_this2._fetchOptions().then(function (options) {
						_this2._options = options;
						resolve(options);
					}).catch(function (error) {
						return reject(error);
					});
				});
			}
		}]);
	
		return MMApBaseClass;
	}();
	
	exports.default = MMApBaseClass;
	;

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var hasOwn = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	
	var isArray = function isArray(arr) {
		if (typeof Array.isArray === 'function') {
			return Array.isArray(arr);
		}
	
		return toStr.call(arr) === '[object Array]';
	};
	
	var isPlainObject = function isPlainObject(obj) {
		if (!obj || toStr.call(obj) !== '[object Object]') {
			return false;
		}
	
		var hasOwnConstructor = hasOwn.call(obj, 'constructor');
		var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
		// Not own constructor property must be Object
		if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
			return false;
		}
	
		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		var key;
		for (key in obj) {/**/}
	
		return typeof key === 'undefined' || hasOwn.call(obj, key);
	};
	
	module.exports = function extend() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[0],
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if (typeof target === 'boolean') {
			deep = target;
			target = arguments[1] || {};
			// skip the boolean and the target
			i = 2;
		} else if ((typeof target !== 'object' && typeof target !== 'function') || target == null) {
			target = {};
		}
	
		for (; i < length; ++i) {
			options = arguments[i];
			// Only deal with non-null/undefined values
			if (options != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];
	
					// Prevent never-ending loop
					if (target !== copy) {
						// Recurse if we're merging plain objects or arrays
						if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
							if (copyIsArray) {
								copyIsArray = false;
								clone = src && isArray(src) ? src : [];
							} else {
								clone = src && isPlainObject(src) ? src : {};
							}
	
							// Never move original objects, clone them
							target[name] = extend(deep, clone, copy);
	
						// Don't bring in undefined values
						} else if (typeof copy !== 'undefined') {
							target[name] = copy;
						}
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strictUriEncode = __webpack_require__(3);
	var objectAssign = __webpack_require__(4);
	
	function encode(value, opts) {
		if (opts.encode) {
			return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
		}
	
		return value;
	}
	
	exports.extract = function (str) {
		return str.split('?')[1] || '';
	};
	
	exports.parse = function (str) {
		// Create an object with no prototype
		// https://github.com/sindresorhus/query-string/issues/47
		var ret = Object.create(null);
	
		if (typeof str !== 'string') {
			return ret;
		}
	
		str = str.trim().replace(/^(\?|#|&)/, '');
	
		if (!str) {
			return ret;
		}
	
		str.split('&').forEach(function (param) {
			var parts = param.replace(/\+/g, ' ').split('=');
			// Firefox (pre 40) decodes `%3D` to `=`
			// https://github.com/sindresorhus/query-string/pull/37
			var key = parts.shift();
			var val = parts.length > 0 ? parts.join('=') : undefined;
	
			key = decodeURIComponent(key);
	
			// missing `=` should be `null`:
			// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
			val = val === undefined ? null : decodeURIComponent(val);
	
			if (ret[key] === undefined) {
				ret[key] = val;
			} else if (Array.isArray(ret[key])) {
				ret[key].push(val);
			} else {
				ret[key] = [ret[key], val];
			}
		});
	
		return ret;
	};
	
	exports.stringify = function (obj, opts) {
		var defaults = {
			encode: true,
			strict: true
		};
	
		opts = objectAssign(defaults, opts);
	
		return obj ? Object.keys(obj).sort().map(function (key) {
			var val = obj[key];
	
			if (val === undefined) {
				return '';
			}
	
			if (val === null) {
				return encode(key, opts);
			}
	
			if (Array.isArray(val)) {
				var result = [];
	
				val.slice().forEach(function (val2) {
					if (val2 === undefined) {
						return;
					}
	
					if (val2 === null) {
						result.push(encode(key, opts));
					} else {
						result.push(encode(key, opts) + '=' + encode(val2, opts));
					}
				});
	
				return result.join('&');
			}
	
			return encode(key, opts) + '=' + encode(val, opts);
		}).filter(function (x) {
			return x.length > 0;
		}).join('&') : '';
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	module.exports = function (str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
			return '%' + c.charCodeAt(0).toString(16).toUpperCase();
		});
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ },
/* 5 */
/***/ function(module, exports) {

	(function(self) {
	  'use strict';
	
	  if (self.fetch) {
	    return
	  }
	
	  var support = {
	    searchParams: 'URLSearchParams' in self,
	    iterable: 'Symbol' in self && 'iterator' in Symbol,
	    blob: 'FileReader' in self && 'Blob' in self && (function() {
	      try {
	        new Blob()
	        return true
	      } catch(e) {
	        return false
	      }
	    })(),
	    formData: 'FormData' in self,
	    arrayBuffer: 'ArrayBuffer' in self
	  }
	
	  function normalizeName(name) {
	    if (typeof name !== 'string') {
	      name = String(name)
	    }
	    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
	      throw new TypeError('Invalid character in header field name')
	    }
	    return name.toLowerCase()
	  }
	
	  function normalizeValue(value) {
	    if (typeof value !== 'string') {
	      value = String(value)
	    }
	    return value
	  }
	
	  // Build a destructive iterator for the value list
	  function iteratorFor(items) {
	    var iterator = {
	      next: function() {
	        var value = items.shift()
	        return {done: value === undefined, value: value}
	      }
	    }
	
	    if (support.iterable) {
	      iterator[Symbol.iterator] = function() {
	        return iterator
	      }
	    }
	
	    return iterator
	  }
	
	  function Headers(headers) {
	    this.map = {}
	
	    if (headers instanceof Headers) {
	      headers.forEach(function(value, name) {
	        this.append(name, value)
	      }, this)
	
	    } else if (headers) {
	      Object.getOwnPropertyNames(headers).forEach(function(name) {
	        this.append(name, headers[name])
	      }, this)
	    }
	  }
	
	  Headers.prototype.append = function(name, value) {
	    name = normalizeName(name)
	    value = normalizeValue(value)
	    var list = this.map[name]
	    if (!list) {
	      list = []
	      this.map[name] = list
	    }
	    list.push(value)
	  }
	
	  Headers.prototype['delete'] = function(name) {
	    delete this.map[normalizeName(name)]
	  }
	
	  Headers.prototype.get = function(name) {
	    var values = this.map[normalizeName(name)]
	    return values ? values[0] : null
	  }
	
	  Headers.prototype.getAll = function(name) {
	    return this.map[normalizeName(name)] || []
	  }
	
	  Headers.prototype.has = function(name) {
	    return this.map.hasOwnProperty(normalizeName(name))
	  }
	
	  Headers.prototype.set = function(name, value) {
	    this.map[normalizeName(name)] = [normalizeValue(value)]
	  }
	
	  Headers.prototype.forEach = function(callback, thisArg) {
	    Object.getOwnPropertyNames(this.map).forEach(function(name) {
	      this.map[name].forEach(function(value) {
	        callback.call(thisArg, value, name, this)
	      }, this)
	    }, this)
	  }
	
	  Headers.prototype.keys = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push(name) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.values = function() {
	    var items = []
	    this.forEach(function(value) { items.push(value) })
	    return iteratorFor(items)
	  }
	
	  Headers.prototype.entries = function() {
	    var items = []
	    this.forEach(function(value, name) { items.push([name, value]) })
	    return iteratorFor(items)
	  }
	
	  if (support.iterable) {
	    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
	  }
	
	  function consumed(body) {
	    if (body.bodyUsed) {
	      return Promise.reject(new TypeError('Already read'))
	    }
	    body.bodyUsed = true
	  }
	
	  function fileReaderReady(reader) {
	    return new Promise(function(resolve, reject) {
	      reader.onload = function() {
	        resolve(reader.result)
	      }
	      reader.onerror = function() {
	        reject(reader.error)
	      }
	    })
	  }
	
	  function readBlobAsArrayBuffer(blob) {
	    var reader = new FileReader()
	    reader.readAsArrayBuffer(blob)
	    return fileReaderReady(reader)
	  }
	
	  function readBlobAsText(blob) {
	    var reader = new FileReader()
	    reader.readAsText(blob)
	    return fileReaderReady(reader)
	  }
	
	  function Body() {
	    this.bodyUsed = false
	
	    this._initBody = function(body) {
	      this._bodyInit = body
	      if (typeof body === 'string') {
	        this._bodyText = body
	      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
	        this._bodyBlob = body
	      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
	        this._bodyFormData = body
	      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	        this._bodyText = body.toString()
	      } else if (!body) {
	        this._bodyText = ''
	      } else if (support.arrayBuffer && ArrayBuffer.prototype.isPrototypeOf(body)) {
	        // Only support ArrayBuffers for POST method.
	        // Receiving ArrayBuffers happens via Blobs, instead.
	      } else {
	        throw new Error('unsupported BodyInit type')
	      }
	
	      if (!this.headers.get('content-type')) {
	        if (typeof body === 'string') {
	          this.headers.set('content-type', 'text/plain;charset=UTF-8')
	        } else if (this._bodyBlob && this._bodyBlob.type) {
	          this.headers.set('content-type', this._bodyBlob.type)
	        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
	          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
	        }
	      }
	    }
	
	    if (support.blob) {
	      this.blob = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return Promise.resolve(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as blob')
	        } else {
	          return Promise.resolve(new Blob([this._bodyText]))
	        }
	      }
	
	      this.arrayBuffer = function() {
	        return this.blob().then(readBlobAsArrayBuffer)
	      }
	
	      this.text = function() {
	        var rejected = consumed(this)
	        if (rejected) {
	          return rejected
	        }
	
	        if (this._bodyBlob) {
	          return readBlobAsText(this._bodyBlob)
	        } else if (this._bodyFormData) {
	          throw new Error('could not read FormData body as text')
	        } else {
	          return Promise.resolve(this._bodyText)
	        }
	      }
	    } else {
	      this.text = function() {
	        var rejected = consumed(this)
	        return rejected ? rejected : Promise.resolve(this._bodyText)
	      }
	    }
	
	    if (support.formData) {
	      this.formData = function() {
	        return this.text().then(decode)
	      }
	    }
	
	    this.json = function() {
	      return this.text().then(JSON.parse)
	    }
	
	    return this
	  }
	
	  // HTTP methods whose capitalization should be normalized
	  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']
	
	  function normalizeMethod(method) {
	    var upcased = method.toUpperCase()
	    return (methods.indexOf(upcased) > -1) ? upcased : method
	  }
	
	  function Request(input, options) {
	    options = options || {}
	    var body = options.body
	    if (Request.prototype.isPrototypeOf(input)) {
	      if (input.bodyUsed) {
	        throw new TypeError('Already read')
	      }
	      this.url = input.url
	      this.credentials = input.credentials
	      if (!options.headers) {
	        this.headers = new Headers(input.headers)
	      }
	      this.method = input.method
	      this.mode = input.mode
	      if (!body) {
	        body = input._bodyInit
	        input.bodyUsed = true
	      }
	    } else {
	      this.url = input
	    }
	
	    this.credentials = options.credentials || this.credentials || 'omit'
	    if (options.headers || !this.headers) {
	      this.headers = new Headers(options.headers)
	    }
	    this.method = normalizeMethod(options.method || this.method || 'GET')
	    this.mode = options.mode || this.mode || null
	    this.referrer = null
	
	    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
	      throw new TypeError('Body not allowed for GET or HEAD requests')
	    }
	    this._initBody(body)
	  }
	
	  Request.prototype.clone = function() {
	    return new Request(this)
	  }
	
	  function decode(body) {
	    var form = new FormData()
	    body.trim().split('&').forEach(function(bytes) {
	      if (bytes) {
	        var split = bytes.split('=')
	        var name = split.shift().replace(/\+/g, ' ')
	        var value = split.join('=').replace(/\+/g, ' ')
	        form.append(decodeURIComponent(name), decodeURIComponent(value))
	      }
	    })
	    return form
	  }
	
	  function headers(xhr) {
	    var head = new Headers()
	    var pairs = (xhr.getAllResponseHeaders() || '').trim().split('\n')
	    pairs.forEach(function(header) {
	      var split = header.trim().split(':')
	      var key = split.shift().trim()
	      var value = split.join(':').trim()
	      head.append(key, value)
	    })
	    return head
	  }
	
	  Body.call(Request.prototype)
	
	  function Response(bodyInit, options) {
	    if (!options) {
	      options = {}
	    }
	
	    this.type = 'default'
	    this.status = options.status
	    this.ok = this.status >= 200 && this.status < 300
	    this.statusText = options.statusText
	    this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers)
	    this.url = options.url || ''
	    this._initBody(bodyInit)
	  }
	
	  Body.call(Response.prototype)
	
	  Response.prototype.clone = function() {
	    return new Response(this._bodyInit, {
	      status: this.status,
	      statusText: this.statusText,
	      headers: new Headers(this.headers),
	      url: this.url
	    })
	  }
	
	  Response.error = function() {
	    var response = new Response(null, {status: 0, statusText: ''})
	    response.type = 'error'
	    return response
	  }
	
	  var redirectStatuses = [301, 302, 303, 307, 308]
	
	  Response.redirect = function(url, status) {
	    if (redirectStatuses.indexOf(status) === -1) {
	      throw new RangeError('Invalid status code')
	    }
	
	    return new Response(null, {status: status, headers: {location: url}})
	  }
	
	  self.Headers = Headers
	  self.Request = Request
	  self.Response = Response
	
	  self.fetch = function(input, init) {
	    return new Promise(function(resolve, reject) {
	      var request
	      if (Request.prototype.isPrototypeOf(input) && !init) {
	        request = input
	      } else {
	        request = new Request(input, init)
	      }
	
	      var xhr = new XMLHttpRequest()
	
	      function responseURL() {
	        if ('responseURL' in xhr) {
	          return xhr.responseURL
	        }
	
	        // Avoid security warnings on getResponseHeader when not allowed by CORS
	        if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
	          return xhr.getResponseHeader('X-Request-URL')
	        }
	
	        return
	      }
	
	      xhr.onload = function() {
	        var options = {
	          status: xhr.status,
	          statusText: xhr.statusText,
	          headers: headers(xhr),
	          url: responseURL()
	        }
	        var body = 'response' in xhr ? xhr.response : xhr.responseText
	        resolve(new Response(body, options))
	      }
	
	      xhr.onerror = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.ontimeout = function() {
	        reject(new TypeError('Network request failed'))
	      }
	
	      xhr.open(request.method, request.url, true)
	
	      if (request.credentials === 'include') {
	        xhr.withCredentials = true
	      }
	
	      if ('responseType' in xhr && support.blob) {
	        xhr.responseType = 'blob'
	      }
	
	      request.headers.forEach(function(value, name) {
	        xhr.setRequestHeader(name, value)
	      })
	
	      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
	    })
	  }
	  self.fetch.polyfill = true
	})(typeof self !== 'undefined' ? self : this);


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var require;/* WEBPACK VAR INJECTION */(function(process, global) {/*!
	 * @overview es6-promise - a tiny implementation of Promises/A+.
	 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
	 * @license   Licensed under MIT license
	 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
	 * @version   3.3.1
	 */
	
	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    (global.ES6Promise = factory());
	}(this, (function () { 'use strict';
	
	function objectOrFunction(x) {
	  return typeof x === 'function' || typeof x === 'object' && x !== null;
	}
	
	function isFunction(x) {
	  return typeof x === 'function';
	}
	
	var _isArray = undefined;
	if (!Array.isArray) {
	  _isArray = function (x) {
	    return Object.prototype.toString.call(x) === '[object Array]';
	  };
	} else {
	  _isArray = Array.isArray;
	}
	
	var isArray = _isArray;
	
	var len = 0;
	var vertxNext = undefined;
	var customSchedulerFn = undefined;
	
	var asap = function asap(callback, arg) {
	  queue[len] = callback;
	  queue[len + 1] = arg;
	  len += 2;
	  if (len === 2) {
	    // If len is 2, that means that we need to schedule an async flush.
	    // If additional callbacks are queued before the queue is flushed, they
	    // will be processed by this flush that we are scheduling.
	    if (customSchedulerFn) {
	      customSchedulerFn(flush);
	    } else {
	      scheduleFlush();
	    }
	  }
	};
	
	function setScheduler(scheduleFn) {
	  customSchedulerFn = scheduleFn;
	}
	
	function setAsap(asapFn) {
	  asap = asapFn;
	}
	
	var browserWindow = typeof window !== 'undefined' ? window : undefined;
	var browserGlobal = browserWindow || {};
	var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
	var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && ({}).toString.call(process) === '[object process]';
	
	// test for web worker but not in IE10
	var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';
	
	// node
	function useNextTick() {
	  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
	  // see https://github.com/cujojs/when/issues/410 for details
	  return function () {
	    return process.nextTick(flush);
	  };
	}
	
	// vertx
	function useVertxTimer() {
	  return function () {
	    vertxNext(flush);
	  };
	}
	
	function useMutationObserver() {
	  var iterations = 0;
	  var observer = new BrowserMutationObserver(flush);
	  var node = document.createTextNode('');
	  observer.observe(node, { characterData: true });
	
	  return function () {
	    node.data = iterations = ++iterations % 2;
	  };
	}
	
	// web worker
	function useMessageChannel() {
	  var channel = new MessageChannel();
	  channel.port1.onmessage = flush;
	  return function () {
	    return channel.port2.postMessage(0);
	  };
	}
	
	function useSetTimeout() {
	  // Store setTimeout reference so es6-promise will be unaffected by
	  // other code modifying setTimeout (like sinon.useFakeTimers())
	  var globalSetTimeout = setTimeout;
	  return function () {
	    return globalSetTimeout(flush, 1);
	  };
	}
	
	var queue = new Array(1000);
	function flush() {
	  for (var i = 0; i < len; i += 2) {
	    var callback = queue[i];
	    var arg = queue[i + 1];
	
	    callback(arg);
	
	    queue[i] = undefined;
	    queue[i + 1] = undefined;
	  }
	
	  len = 0;
	}
	
	function attemptVertx() {
	  try {
	    var r = require;
	    var vertx = __webpack_require__(8);
	    vertxNext = vertx.runOnLoop || vertx.runOnContext;
	    return useVertxTimer();
	  } catch (e) {
	    return useSetTimeout();
	  }
	}
	
	var scheduleFlush = undefined;
	// Decide what async method to use to triggering processing of queued callbacks:
	if (isNode) {
	  scheduleFlush = useNextTick();
	} else if (BrowserMutationObserver) {
	  scheduleFlush = useMutationObserver();
	} else if (isWorker) {
	  scheduleFlush = useMessageChannel();
	} else if (browserWindow === undefined && "function" === 'function') {
	  scheduleFlush = attemptVertx();
	} else {
	  scheduleFlush = useSetTimeout();
	}
	
	function then(onFulfillment, onRejection) {
	  var _arguments = arguments;
	
	  var parent = this;
	
	  var child = new this.constructor(noop);
	
	  if (child[PROMISE_ID] === undefined) {
	    makePromise(child);
	  }
	
	  var _state = parent._state;
	
	  if (_state) {
	    (function () {
	      var callback = _arguments[_state - 1];
	      asap(function () {
	        return invokeCallback(_state, child, callback, parent._result);
	      });
	    })();
	  } else {
	    subscribe(parent, child, onFulfillment, onRejection);
	  }
	
	  return child;
	}
	
	/**
	  `Promise.resolve` returns a promise that will become resolved with the
	  passed `value`. It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    resolve(1);
	  });
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.resolve(1);
	
	  promise.then(function(value){
	    // value === 1
	  });
	  ```
	
	  @method resolve
	  @static
	  @param {Any} value value that the returned promise will be resolved with
	  Useful for tooling.
	  @return {Promise} a promise that will become fulfilled with the given
	  `value`
	*/
	function resolve(object) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (object && typeof object === 'object' && object.constructor === Constructor) {
	    return object;
	  }
	
	  var promise = new Constructor(noop);
	  _resolve(promise, object);
	  return promise;
	}
	
	var PROMISE_ID = Math.random().toString(36).substring(16);
	
	function noop() {}
	
	var PENDING = void 0;
	var FULFILLED = 1;
	var REJECTED = 2;
	
	var GET_THEN_ERROR = new ErrorObject();
	
	function selfFulfillment() {
	  return new TypeError("You cannot resolve a promise with itself");
	}
	
	function cannotReturnOwn() {
	  return new TypeError('A promises callback cannot return that same promise.');
	}
	
	function getThen(promise) {
	  try {
	    return promise.then;
	  } catch (error) {
	    GET_THEN_ERROR.error = error;
	    return GET_THEN_ERROR;
	  }
	}
	
	function tryThen(then, value, fulfillmentHandler, rejectionHandler) {
	  try {
	    then.call(value, fulfillmentHandler, rejectionHandler);
	  } catch (e) {
	    return e;
	  }
	}
	
	function handleForeignThenable(promise, thenable, then) {
	  asap(function (promise) {
	    var sealed = false;
	    var error = tryThen(then, thenable, function (value) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	      if (thenable !== value) {
	        _resolve(promise, value);
	      } else {
	        fulfill(promise, value);
	      }
	    }, function (reason) {
	      if (sealed) {
	        return;
	      }
	      sealed = true;
	
	      _reject(promise, reason);
	    }, 'Settle: ' + (promise._label || ' unknown promise'));
	
	    if (!sealed && error) {
	      sealed = true;
	      _reject(promise, error);
	    }
	  }, promise);
	}
	
	function handleOwnThenable(promise, thenable) {
	  if (thenable._state === FULFILLED) {
	    fulfill(promise, thenable._result);
	  } else if (thenable._state === REJECTED) {
	    _reject(promise, thenable._result);
	  } else {
	    subscribe(thenable, undefined, function (value) {
	      return _resolve(promise, value);
	    }, function (reason) {
	      return _reject(promise, reason);
	    });
	  }
	}
	
	function handleMaybeThenable(promise, maybeThenable, then$$) {
	  if (maybeThenable.constructor === promise.constructor && then$$ === then && maybeThenable.constructor.resolve === resolve) {
	    handleOwnThenable(promise, maybeThenable);
	  } else {
	    if (then$$ === GET_THEN_ERROR) {
	      _reject(promise, GET_THEN_ERROR.error);
	    } else if (then$$ === undefined) {
	      fulfill(promise, maybeThenable);
	    } else if (isFunction(then$$)) {
	      handleForeignThenable(promise, maybeThenable, then$$);
	    } else {
	      fulfill(promise, maybeThenable);
	    }
	  }
	}
	
	function _resolve(promise, value) {
	  if (promise === value) {
	    _reject(promise, selfFulfillment());
	  } else if (objectOrFunction(value)) {
	    handleMaybeThenable(promise, value, getThen(value));
	  } else {
	    fulfill(promise, value);
	  }
	}
	
	function publishRejection(promise) {
	  if (promise._onerror) {
	    promise._onerror(promise._result);
	  }
	
	  publish(promise);
	}
	
	function fulfill(promise, value) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	
	  promise._result = value;
	  promise._state = FULFILLED;
	
	  if (promise._subscribers.length !== 0) {
	    asap(publish, promise);
	  }
	}
	
	function _reject(promise, reason) {
	  if (promise._state !== PENDING) {
	    return;
	  }
	  promise._state = REJECTED;
	  promise._result = reason;
	
	  asap(publishRejection, promise);
	}
	
	function subscribe(parent, child, onFulfillment, onRejection) {
	  var _subscribers = parent._subscribers;
	  var length = _subscribers.length;
	
	  parent._onerror = null;
	
	  _subscribers[length] = child;
	  _subscribers[length + FULFILLED] = onFulfillment;
	  _subscribers[length + REJECTED] = onRejection;
	
	  if (length === 0 && parent._state) {
	    asap(publish, parent);
	  }
	}
	
	function publish(promise) {
	  var subscribers = promise._subscribers;
	  var settled = promise._state;
	
	  if (subscribers.length === 0) {
	    return;
	  }
	
	  var child = undefined,
	      callback = undefined,
	      detail = promise._result;
	
	  for (var i = 0; i < subscribers.length; i += 3) {
	    child = subscribers[i];
	    callback = subscribers[i + settled];
	
	    if (child) {
	      invokeCallback(settled, child, callback, detail);
	    } else {
	      callback(detail);
	    }
	  }
	
	  promise._subscribers.length = 0;
	}
	
	function ErrorObject() {
	  this.error = null;
	}
	
	var TRY_CATCH_ERROR = new ErrorObject();
	
	function tryCatch(callback, detail) {
	  try {
	    return callback(detail);
	  } catch (e) {
	    TRY_CATCH_ERROR.error = e;
	    return TRY_CATCH_ERROR;
	  }
	}
	
	function invokeCallback(settled, promise, callback, detail) {
	  var hasCallback = isFunction(callback),
	      value = undefined,
	      error = undefined,
	      succeeded = undefined,
	      failed = undefined;
	
	  if (hasCallback) {
	    value = tryCatch(callback, detail);
	
	    if (value === TRY_CATCH_ERROR) {
	      failed = true;
	      error = value.error;
	      value = null;
	    } else {
	      succeeded = true;
	    }
	
	    if (promise === value) {
	      _reject(promise, cannotReturnOwn());
	      return;
	    }
	  } else {
	    value = detail;
	    succeeded = true;
	  }
	
	  if (promise._state !== PENDING) {
	    // noop
	  } else if (hasCallback && succeeded) {
	      _resolve(promise, value);
	    } else if (failed) {
	      _reject(promise, error);
	    } else if (settled === FULFILLED) {
	      fulfill(promise, value);
	    } else if (settled === REJECTED) {
	      _reject(promise, value);
	    }
	}
	
	function initializePromise(promise, resolver) {
	  try {
	    resolver(function resolvePromise(value) {
	      _resolve(promise, value);
	    }, function rejectPromise(reason) {
	      _reject(promise, reason);
	    });
	  } catch (e) {
	    _reject(promise, e);
	  }
	}
	
	var id = 0;
	function nextId() {
	  return id++;
	}
	
	function makePromise(promise) {
	  promise[PROMISE_ID] = id++;
	  promise._state = undefined;
	  promise._result = undefined;
	  promise._subscribers = [];
	}
	
	function Enumerator(Constructor, input) {
	  this._instanceConstructor = Constructor;
	  this.promise = new Constructor(noop);
	
	  if (!this.promise[PROMISE_ID]) {
	    makePromise(this.promise);
	  }
	
	  if (isArray(input)) {
	    this._input = input;
	    this.length = input.length;
	    this._remaining = input.length;
	
	    this._result = new Array(this.length);
	
	    if (this.length === 0) {
	      fulfill(this.promise, this._result);
	    } else {
	      this.length = this.length || 0;
	      this._enumerate();
	      if (this._remaining === 0) {
	        fulfill(this.promise, this._result);
	      }
	    }
	  } else {
	    _reject(this.promise, validationError());
	  }
	}
	
	function validationError() {
	  return new Error('Array Methods must be provided an Array');
	};
	
	Enumerator.prototype._enumerate = function () {
	  var length = this.length;
	  var _input = this._input;
	
	  for (var i = 0; this._state === PENDING && i < length; i++) {
	    this._eachEntry(_input[i], i);
	  }
	};
	
	Enumerator.prototype._eachEntry = function (entry, i) {
	  var c = this._instanceConstructor;
	  var resolve$$ = c.resolve;
	
	  if (resolve$$ === resolve) {
	    var _then = getThen(entry);
	
	    if (_then === then && entry._state !== PENDING) {
	      this._settledAt(entry._state, i, entry._result);
	    } else if (typeof _then !== 'function') {
	      this._remaining--;
	      this._result[i] = entry;
	    } else if (c === Promise) {
	      var promise = new c(noop);
	      handleMaybeThenable(promise, entry, _then);
	      this._willSettleAt(promise, i);
	    } else {
	      this._willSettleAt(new c(function (resolve$$) {
	        return resolve$$(entry);
	      }), i);
	    }
	  } else {
	    this._willSettleAt(resolve$$(entry), i);
	  }
	};
	
	Enumerator.prototype._settledAt = function (state, i, value) {
	  var promise = this.promise;
	
	  if (promise._state === PENDING) {
	    this._remaining--;
	
	    if (state === REJECTED) {
	      _reject(promise, value);
	    } else {
	      this._result[i] = value;
	    }
	  }
	
	  if (this._remaining === 0) {
	    fulfill(promise, this._result);
	  }
	};
	
	Enumerator.prototype._willSettleAt = function (promise, i) {
	  var enumerator = this;
	
	  subscribe(promise, undefined, function (value) {
	    return enumerator._settledAt(FULFILLED, i, value);
	  }, function (reason) {
	    return enumerator._settledAt(REJECTED, i, reason);
	  });
	};
	
	/**
	  `Promise.all` accepts an array of promises, and returns a new promise which
	  is fulfilled with an array of fulfillment values for the passed promises, or
	  rejected with the reason of the first passed promise to be rejected. It casts all
	  elements of the passed iterable to promises as it runs this algorithm.
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = resolve(2);
	  let promise3 = resolve(3);
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // The array here would be [ 1, 2, 3 ];
	  });
	  ```
	
	  If any of the `promises` given to `all` are rejected, the first promise
	  that is rejected will be given as an argument to the returned promises's
	  rejection handler. For example:
	
	  Example:
	
	  ```javascript
	  let promise1 = resolve(1);
	  let promise2 = reject(new Error("2"));
	  let promise3 = reject(new Error("3"));
	  let promises = [ promise1, promise2, promise3 ];
	
	  Promise.all(promises).then(function(array){
	    // Code here never runs because there are rejected promises!
	  }, function(error) {
	    // error.message === "2"
	  });
	  ```
	
	  @method all
	  @static
	  @param {Array} entries array of promises
	  @param {String} label optional string for labeling the promise.
	  Useful for tooling.
	  @return {Promise} promise that is fulfilled when all `promises` have been
	  fulfilled, or rejected if any of them become rejected.
	  @static
	*/
	function all(entries) {
	  return new Enumerator(this, entries).promise;
	}
	
	/**
	  `Promise.race` returns a new promise which is settled in the same way as the
	  first passed promise to settle.
	
	  Example:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 2');
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // result === 'promise 2' because it was resolved before promise1
	    // was resolved.
	  });
	  ```
	
	  `Promise.race` is deterministic in that only the state of the first
	  settled promise matters. For example, even if other promises given to the
	  `promises` array argument are resolved, but the first settled promise has
	  become rejected before the other promises became fulfilled, the returned
	  promise will become rejected:
	
	  ```javascript
	  let promise1 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      resolve('promise 1');
	    }, 200);
	  });
	
	  let promise2 = new Promise(function(resolve, reject){
	    setTimeout(function(){
	      reject(new Error('promise 2'));
	    }, 100);
	  });
	
	  Promise.race([promise1, promise2]).then(function(result){
	    // Code here never runs
	  }, function(reason){
	    // reason.message === 'promise 2' because promise 2 became rejected before
	    // promise 1 became fulfilled
	  });
	  ```
	
	  An example real-world use case is implementing timeouts:
	
	  ```javascript
	  Promise.race([ajax('foo.json'), timeout(5000)])
	  ```
	
	  @method race
	  @static
	  @param {Array} promises array of promises to observe
	  Useful for tooling.
	  @return {Promise} a promise which settles in the same way as the first passed
	  promise to settle.
	*/
	function race(entries) {
	  /*jshint validthis:true */
	  var Constructor = this;
	
	  if (!isArray(entries)) {
	    return new Constructor(function (_, reject) {
	      return reject(new TypeError('You must pass an array to race.'));
	    });
	  } else {
	    return new Constructor(function (resolve, reject) {
	      var length = entries.length;
	      for (var i = 0; i < length; i++) {
	        Constructor.resolve(entries[i]).then(resolve, reject);
	      }
	    });
	  }
	}
	
	/**
	  `Promise.reject` returns a promise rejected with the passed `reason`.
	  It is shorthand for the following:
	
	  ```javascript
	  let promise = new Promise(function(resolve, reject){
	    reject(new Error('WHOOPS'));
	  });
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  Instead of writing the above, your code now simply becomes the following:
	
	  ```javascript
	  let promise = Promise.reject(new Error('WHOOPS'));
	
	  promise.then(function(value){
	    // Code here doesn't run because the promise is rejected!
	  }, function(reason){
	    // reason.message === 'WHOOPS'
	  });
	  ```
	
	  @method reject
	  @static
	  @param {Any} reason value that the returned promise will be rejected with.
	  Useful for tooling.
	  @return {Promise} a promise rejected with the given `reason`.
	*/
	function reject(reason) {
	  /*jshint validthis:true */
	  var Constructor = this;
	  var promise = new Constructor(noop);
	  _reject(promise, reason);
	  return promise;
	}
	
	function needsResolver() {
	  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
	}
	
	function needsNew() {
	  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
	}
	
	/**
	  Promise objects represent the eventual result of an asynchronous operation. The
	  primary way of interacting with a promise is through its `then` method, which
	  registers callbacks to receive either a promise's eventual value or the reason
	  why the promise cannot be fulfilled.
	
	  Terminology
	  -----------
	
	  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
	  - `thenable` is an object or function that defines a `then` method.
	  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
	  - `exception` is a value that is thrown using the throw statement.
	  - `reason` is a value that indicates why a promise was rejected.
	  - `settled` the final resting state of a promise, fulfilled or rejected.
	
	  A promise can be in one of three states: pending, fulfilled, or rejected.
	
	  Promises that are fulfilled have a fulfillment value and are in the fulfilled
	  state.  Promises that are rejected have a rejection reason and are in the
	  rejected state.  A fulfillment value is never a thenable.
	
	  Promises can also be said to *resolve* a value.  If this value is also a
	  promise, then the original promise's settled state will match the value's
	  settled state.  So a promise that *resolves* a promise that rejects will
	  itself reject, and a promise that *resolves* a promise that fulfills will
	  itself fulfill.
	
	
	  Basic Usage:
	  ------------
	
	  ```js
	  let promise = new Promise(function(resolve, reject) {
	    // on success
	    resolve(value);
	
	    // on failure
	    reject(reason);
	  });
	
	  promise.then(function(value) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Advanced Usage:
	  ---------------
	
	  Promises shine when abstracting away asynchronous interactions such as
	  `XMLHttpRequest`s.
	
	  ```js
	  function getJSON(url) {
	    return new Promise(function(resolve, reject){
	      let xhr = new XMLHttpRequest();
	
	      xhr.open('GET', url);
	      xhr.onreadystatechange = handler;
	      xhr.responseType = 'json';
	      xhr.setRequestHeader('Accept', 'application/json');
	      xhr.send();
	
	      function handler() {
	        if (this.readyState === this.DONE) {
	          if (this.status === 200) {
	            resolve(this.response);
	          } else {
	            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
	          }
	        }
	      };
	    });
	  }
	
	  getJSON('/posts.json').then(function(json) {
	    // on fulfillment
	  }, function(reason) {
	    // on rejection
	  });
	  ```
	
	  Unlike callbacks, promises are great composable primitives.
	
	  ```js
	  Promise.all([
	    getJSON('/posts'),
	    getJSON('/comments')
	  ]).then(function(values){
	    values[0] // => postsJSON
	    values[1] // => commentsJSON
	
	    return values;
	  });
	  ```
	
	  @class Promise
	  @param {function} resolver
	  Useful for tooling.
	  @constructor
	*/
	function Promise(resolver) {
	  this[PROMISE_ID] = nextId();
	  this._result = this._state = undefined;
	  this._subscribers = [];
	
	  if (noop !== resolver) {
	    typeof resolver !== 'function' && needsResolver();
	    this instanceof Promise ? initializePromise(this, resolver) : needsNew();
	  }
	}
	
	Promise.all = all;
	Promise.race = race;
	Promise.resolve = resolve;
	Promise.reject = reject;
	Promise._setScheduler = setScheduler;
	Promise._setAsap = setAsap;
	Promise._asap = asap;
	
	Promise.prototype = {
	  constructor: Promise,
	
	  /**
	    The primary way of interacting with a promise is through its `then` method,
	    which registers callbacks to receive either a promise's eventual value or the
	    reason why the promise cannot be fulfilled.
	  
	    ```js
	    findUser().then(function(user){
	      // user is available
	    }, function(reason){
	      // user is unavailable, and you are given the reason why
	    });
	    ```
	  
	    Chaining
	    --------
	  
	    The return value of `then` is itself a promise.  This second, 'downstream'
	    promise is resolved with the return value of the first promise's fulfillment
	    or rejection handler, or rejected if the handler throws an exception.
	  
	    ```js
	    findUser().then(function (user) {
	      return user.name;
	    }, function (reason) {
	      return 'default name';
	    }).then(function (userName) {
	      // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
	      // will be `'default name'`
	    });
	  
	    findUser().then(function (user) {
	      throw new Error('Found user, but still unhappy');
	    }, function (reason) {
	      throw new Error('`findUser` rejected and we're unhappy');
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
	      // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
	    });
	    ```
	    If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
	  
	    ```js
	    findUser().then(function (user) {
	      throw new PedagogicalException('Upstream error');
	    }).then(function (value) {
	      // never reached
	    }).then(function (value) {
	      // never reached
	    }, function (reason) {
	      // The `PedgagocialException` is propagated all the way down to here
	    });
	    ```
	  
	    Assimilation
	    ------------
	  
	    Sometimes the value you want to propagate to a downstream promise can only be
	    retrieved asynchronously. This can be achieved by returning a promise in the
	    fulfillment or rejection handler. The downstream promise will then be pending
	    until the returned promise is settled. This is called *assimilation*.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // The user's comments are now available
	    });
	    ```
	  
	    If the assimliated promise rejects, then the downstream promise will also reject.
	  
	    ```js
	    findUser().then(function (user) {
	      return findCommentsByAuthor(user);
	    }).then(function (comments) {
	      // If `findCommentsByAuthor` fulfills, we'll have the value here
	    }, function (reason) {
	      // If `findCommentsByAuthor` rejects, we'll have the reason here
	    });
	    ```
	  
	    Simple Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let result;
	  
	    try {
	      result = findResult();
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	    findResult(function(result, err){
	      if (err) {
	        // failure
	      } else {
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findResult().then(function(result){
	      // success
	    }, function(reason){
	      // failure
	    });
	    ```
	  
	    Advanced Example
	    --------------
	  
	    Synchronous Example
	  
	    ```javascript
	    let author, books;
	  
	    try {
	      author = findAuthor();
	      books  = findBooksByAuthor(author);
	      // success
	    } catch(reason) {
	      // failure
	    }
	    ```
	  
	    Errback Example
	  
	    ```js
	  
	    function foundBooks(books) {
	  
	    }
	  
	    function failure(reason) {
	  
	    }
	  
	    findAuthor(function(author, err){
	      if (err) {
	        failure(err);
	        // failure
	      } else {
	        try {
	          findBoooksByAuthor(author, function(books, err) {
	            if (err) {
	              failure(err);
	            } else {
	              try {
	                foundBooks(books);
	              } catch(reason) {
	                failure(reason);
	              }
	            }
	          });
	        } catch(error) {
	          failure(err);
	        }
	        // success
	      }
	    });
	    ```
	  
	    Promise Example;
	  
	    ```javascript
	    findAuthor().
	      then(findBooksByAuthor).
	      then(function(books){
	        // found books
	    }).catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method then
	    @param {Function} onFulfilled
	    @param {Function} onRejected
	    Useful for tooling.
	    @return {Promise}
	  */
	  then: then,
	
	  /**
	    `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
	    as the catch block of a try/catch statement.
	  
	    ```js
	    function findAuthor(){
	      throw new Error('couldn't find that author');
	    }
	  
	    // synchronous
	    try {
	      findAuthor();
	    } catch(reason) {
	      // something went wrong
	    }
	  
	    // async with promises
	    findAuthor().catch(function(reason){
	      // something went wrong
	    });
	    ```
	  
	    @method catch
	    @param {Function} onRejection
	    Useful for tooling.
	    @return {Promise}
	  */
	  'catch': function _catch(onRejection) {
	    return this.then(null, onRejection);
	  }
	};
	
	function polyfill() {
	    var local = undefined;
	
	    if (typeof global !== 'undefined') {
	        local = global;
	    } else if (typeof self !== 'undefined') {
	        local = self;
	    } else {
	        try {
	            local = Function('return this')();
	        } catch (e) {
	            throw new Error('polyfill failed because global object is unavailable in this environment');
	        }
	    }
	
	    var P = local.Promise;
	
	    if (P) {
	        var promiseToString = null;
	        try {
	            promiseToString = Object.prototype.toString.call(P.resolve());
	        } catch (e) {
	            // silently ignored
	        }
	
	        if (promiseToString === '[object Promise]' && !P.cast) {
	            return;
	        }
	    }
	
	    local.Promise = Promise;
	}
	
	polyfill();
	// Strange compat..
	Promise.polyfill = polyfill;
	Promise.Promise = Promise;
	
	return Promise;
	
	})));
	//# sourceMappingURL=es6-promise.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7), (function() { return this; }())))

/***/ },
/* 7 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 8 */
/***/ function(module, exports) {

	/* (ignored) */

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*! @preserve
	 * Hjson v2.3.1
	 * http://hjson.org
	 *
	 * Copyright 2014-2016 Christian Zangl, MIT license
	 * Details and documentation:
	 * https://github.com/hjson/hjson-js
	 *
	 * This code is based on the the JSON version by Douglas Crockford:
	 * https://github.com/douglascrockford/JSON-js (json_parse.js, json2.js)
	 */
	
	/*
	
	  This file creates a Hjson object:
	
	
	    Hjson.parse(text, options)
	
	      options {
	        keepWsc     boolean, keep white space and comments. This is useful
	                    if you want to edit an hjson file and save it while
	                    preserving comments (default false)
	
	        dsf         array of DSF (see Hjson.dsf)
	      }
	
	      This method parses Hjson text to produce an object or array.
	      It can throw a SyntaxError exception.
	
	
	    Hjson.stringify(value, options)
	
	      value         any JavaScript value, usually an object or array.
	
	      options {     all options are
	
	        keepWsc     boolean, keep white space. See parse.
	
	        bracesSameLine
	                    boolean, makes braces appear on the same line as the key
	                    name. Default false.
	
	        emitRootBraces
	                    obsolete: will always emit braces
	
	        quotes      string, controls how strings are displayed.
	                    "min"     - no quotes whenever possible (default)
	                    "always"  - always use quotes
	
	        space       specifies the indentation of nested structures. If it is
	                    a number, it will specify the number of spaces to indent
	                    at each level. If it is a string (such as '\t' or '  '),
	                    it contains the characters used to indent at each level.
	
	        eol         specifies the EOL sequence (default is set by
	                    Hjson.setEndOfLine())
	
	        colors      boolean, output ascii color codes
	
	        dsf         array of DSF (see Hjson.dsf)
	      }
	
	      This method produces Hjson text from a JavaScript value.
	
	      Values that do not have JSON representations, such as undefined or
	      functions, will not be serialized. Such values in objects will be
	      dropped; in arrays they will be replaced with null.
	      stringify(undefined) returns undefined.
	
	
	    Hjson.endOfLine()
	    Hjson.setEndOfLine(eol)
	
	      Gets or sets the stringify EOL sequence ('\n' or '\r\n').
	      When running with node.js this defaults to os.EOL.
	
	
	    Hjson.rt { parse, stringify }
	
	      This is a shortcut to roundtrip your comments when reading and updating
	      a config file. It is the same as specifying the keepWsc option for the
	      parse and stringify functions.
	
	
	    Hjson.version
	
	      The version of this library.
	
	
	    Hjson.dsf
	
	      Domain specific formats are extensions to the Hjson syntax (see
	      hjson.org). These formats will be parsed and made available to
	      the application in place of strings (e.g. enable math to allow
	      NaN values).
	
	      Hjson.dsf ontains standard DSFs that can be passed to parse
	      and stringify.
	
	
	    Hjson.dsf.math()
	
	      Enables support for Inf/inf, -Inf/-inf, Nan/naN and -0.
	      Will output as Inf, -Inf, NaN and -0.
	
	
	    Hjson.dsf.hex(options)
	
	      Parse hexadecimal numbers prefixed with 0x.
	      set options.out = true to stringify _all_ integers as hex.
	
	
	    Hjson.dsf.date(options)
	
	      support ISO dates
	
	
	  This is a reference implementation. You are free to copy, modify, or
	  redistribute.
	
	*/
	
	/*jslint node: true */
	"use strict";
	
	var common = __webpack_require__(10);
	var version = __webpack_require__(12);
	var parse = __webpack_require__(13);
	var stringify = __webpack_require__(15);
	var comments = __webpack_require__(16);
	var dsf = __webpack_require__(14);
	
	module.exports={
	
	  parse: parse,
	  stringify: stringify,
	
	  endOfLine: function() { return common.EOL; },
	  setEndOfLine: function(eol) {
	    if (eol === '\n' || eol === '\r\n') common.EOL = eol;
	  },
	
	  version: version,
	
	  // round trip shortcut
	  rt: {
	    parse: function(text, options) {
	      (options=options||{}).keepWsc=true;
	      return parse(text, options);
	    },
	    stringify: function(value, options) {
	      (options=options||{}).keepWsc=true;
	      return stringify(value, options);
	    },
	  },
	
	  comments: comments,
	
	  dsf: dsf.std,
	
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* Hjson http://hjson.org */
	/* jslint node: true */
	"use strict";
	
	var os=__webpack_require__(11); // will be {} when used in a browser
	
	function tryParseNumber(text, stopAtNext) {
	
	  // try to parse a number
	
	  var number, string = '', leadingZeros = 0, testLeading = true;
	  var at = 0;
	  var ch;
	  function next() {
	    ch = text.charAt(at);
	    at++;
	    return ch;
	  }
	
	  next();
	  if (ch === '-') {
	    string = '-';
	    next();
	  }
	  while (ch >= '0' && ch <= '9') {
	    if (testLeading) {
	      if (ch == '0') leadingZeros++;
	      else testLeading = false;
	    }
	    string += ch;
	    next();
	  }
	  if (testLeading) leadingZeros--; // single 0 is allowed
	  if (ch === '.') {
	    string += '.';
	    while (next() && ch >= '0' && ch <= '9')
	      string += ch;
	  }
	  if (ch === 'e' || ch === 'E') {
	    string += ch;
	    next();
	    if (ch === '-' || ch === '+') {
	      string += ch;
	      next();
	    }
	    while (ch >= '0' && ch <= '9') {
	      string += ch;
	      next();
	    }
	  }
	
	  // skip white/to (newline)
	  while (ch && ch <= ' ') next();
	
	  if (stopAtNext) {
	    // end scan if we find a punctuator character like ,}] or a comment
	    if (ch === ',' || ch === '}' || ch === ']' ||
	      ch === '#' || ch === '/' && (text[at] === '/' || text[at] === '*')) ch = 0;
	  }
	
	  number = +string;
	  if (ch || leadingZeros || !isFinite(number)) return undefined;
	  else return number;
	}
	
	function createComment(value, comment) {
	  if (Object.defineProperty) Object.defineProperty(value, "__COMMENTS__", { enumerable: false, writable: true });
	  return (value.__COMMENTS__ = comment||{});
	}
	
	function removeComment(value) {
	  Object.defineProperty(value, "__COMMENTS__", { value: undefined });
	}
	
	function getComment(value) {
	  return value.__COMMENTS__;
	}
	
	function forceComment(text) {
	  if (!text) return "";
	  var a = text.split('\n');
	  var str, i, j, len;
	  for (j = 0; j < a.length; j++) {
	    str = a[j];
	    len = str.length;
	    for (i = 0; i < len; i++) {
	      var c = str[i];
	      if (c === '#') break;
	      else if (c === '/' && (str[i+1] === '/' || str[i+1] === '*')) {
	        if (str[i+1] === '*') j = a.length; // assume /**/ covers whole block, bail out
	        break;
	      }
	      else if (c > ' ') {
	        a[j] = '# ' + str;
	        break;
	      }
	    }
	  }
	  return a.join('\n');
	}
	
	module.exports = {
	  EOL: os.EOL || '\n',
	  tryParseNumber: tryParseNumber,
	  createComment: createComment,
	  removeComment: removeComment,
	  getComment: getComment,
	  forceComment: forceComment,
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	exports.endianness = function () { return 'LE' };
	
	exports.hostname = function () {
	    if (typeof location !== 'undefined') {
	        return location.hostname
	    }
	    else return '';
	};
	
	exports.loadavg = function () { return [] };
	
	exports.uptime = function () { return 0 };
	
	exports.freemem = function () {
	    return Number.MAX_VALUE;
	};
	
	exports.totalmem = function () {
	    return Number.MAX_VALUE;
	};
	
	exports.cpus = function () { return [] };
	
	exports.type = function () { return 'Browser' };
	
	exports.release = function () {
	    if (typeof navigator !== 'undefined') {
	        return navigator.appVersion;
	    }
	    return '';
	};
	
	exports.networkInterfaces
	= exports.getNetworkInterfaces
	= function () { return {} };
	
	exports.arch = function () { return 'javascript' };
	
	exports.platform = function () { return 'browser' };
	
	exports.tmpdir = exports.tmpDir = function () {
	    return '/tmp';
	};
	
	exports.EOL = '\n';


/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports="2.3.1";


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* Hjson http://hjson.org */
	/* jslint node: true */
	"use strict";
	
	module.exports = function($source, $opt) {
	
	  var common = __webpack_require__(10);
	  var dsf = __webpack_require__(14);
	
	  var text;
	  var at;   // The index of the current character
	  var ch;   // The current character
	  var escapee = {
	    '"': '"',
	    '\\': '\\',
	    '/': '/',
	    b:  '\b',
	    f:  '\f',
	    n:  '\n',
	    r:  '\r',
	    t:  '\t'
	  };
	
	  var keepComments;
	  var runDsf; // domain specific formats
	
	  function resetAt() {
	    at = 0;
	    ch = ' ';
	  }
	
	  function isPunctuatorChar(c) {
	    return c === '{' || c === '}' || c === '[' || c === ']' || c === ',' || c === ':';
	  }
	
	  // Call error when something is wrong.
	  function error(m) {
	    var i, col=0, line=1;
	    for (i = at-1; i > 0 && text[i] !== '\n'; i--, col++) {}
	    for (; i > 0; i--) if (text[i] === '\n') line++;
	    throw new Error(m + " at line " + line + "," + col + " >>>" + text.substr(at-col, 20) + " ...");
	  }
	
	  function next() {
	    // get the next character.
	    ch = text.charAt(at);
	    at++;
	    return ch;
	  }
	
	  function peek(offs) {
	    // range check is not required
	    return text.charAt(at + offs);
	  }
	
	  function string() {
	    // Parse a string value.
	    var string = '';
	
	    // When parsing for string values, we must look for " and \ characters.
	    if (ch === '"') {
	      while (next()) {
	        if (ch === '"') {
	          next();
	          return string;
	        }
	        if (ch === '\\') {
	          next();
	          if (ch === 'u') {
	            var uffff = 0;
	            for (var i = 0; i < 4; i++) {
	              next();
	              var c = ch.charCodeAt(0), hex;
	              if (ch >= '0' && ch <= '9') hex = c - 48;
	              else if (ch >= 'a' && ch <= 'f') hex = c - 97 + 0xa;
	              else if (ch >= 'A' && ch <= 'F') hex = c - 65 + 0xa;
	              else error("Bad \\u char " + ch);
	              uffff = uffff * 16 + hex;
	            }
	            string += String.fromCharCode(uffff);
	          } else if (typeof escapee[ch] === 'string') {
	            string += escapee[ch];
	          } else break;
	        } else {
	          string += ch;
	        }
	      }
	    }
	    error("Bad string");
	  }
	
	  function mlString() {
	    // Parse a multiline string value.
	    var string = '', triple = 0;
	
	    // we are at ''' +1 - get indent
	    var indent = 0;
	    while (true) {
	      var c=peek(-indent-5);
	      if (!c || c === '\n') break;
	      indent++;
	    }
	
	    function skipIndent() {
	      var skip = indent;
	      while (ch && ch <= ' ' && ch !== '\n' && skip-- > 0) next();
	    }
	
	    // skip white/to (newline)
	    while (ch && ch <= ' ' && ch !== '\n') next();
	    if (ch === '\n') { next(); skipIndent(); }
	
	    // When parsing multiline string values, we must look for ' characters.
	    while (true) {
	      if (!ch) {
	        error("Bad multiline string");
	      } else if (ch === '\'') {
	        triple++;
	        next();
	        if (triple === 3) {
	          if (string.slice(-1) === '\n') string=string.slice(0, -1); // remove last EOL
	          return string;
	        } else continue;
	      } else {
	        while (triple > 0) {
	          string += '\'';
	          triple--;
	        }
	      }
	      if (ch === '\n') {
	        string += '\n';
	        next();
	        skipIndent();
	      } else {
	        if (ch !== '\r') string += ch;
	        next();
	      }
	    }
	  }
	
	  function keyname() {
	    // quotes for keys are optional in Hjson
	    // unless they include {}[],: or whitespace.
	
	    if (ch === '"') return string();
	
	    var name = "", start = at, space = -1;
	    while (true) {
	      if (ch === ':') {
	        if (!name) error("Found ':' but no key name (for an empty key name use quotes)");
	        else if (space >=0 && space !== name.length) { at = start + space; error("Found whitespace in your key name (use quotes to include)"); }
	        return name;
	      } else if (ch <= ' ') {
	        if (!ch) error("Found EOF while looking for a key name (check your syntax)");
	        else if (space < 0) space = name.length;
	      } else if (isPunctuatorChar(ch)) {
	        error("Found '" + ch + "' where a key name was expected (check your syntax or use quotes if the key name includes {}[],: or whitespace)");
	      } else {
	        name += ch;
	      }
	      next();
	    }
	  }
	
	  function white() {
	    while (ch) {
	      // Skip whitespace.
	      while (ch && ch <= ' ') next();
	      // Hjson allows comments
	      if (ch === '#' || ch === '/' && peek(0) === '/') {
	        while (ch && ch !== '\n') next();
	      } else if (ch === '/' && peek(0) === '*') {
	        next(); next();
	        while (ch && !(ch === '*' && peek(0) === '/')) next();
	        if (ch) { next(); next(); }
	      } else break;
	    }
	  }
	
	  function tfnns() {
	    // Hjson strings can be quoteless
	    // returns string, true, false, or null.
	    var value = ch;
	    if (isPunctuatorChar(ch))
	      error("Found a punctuator character '" + ch + "' when expecting a quoteless string (check your syntax)");
	
	    for(;;) {
	      next();
	      if (value.length === 3 && value === "'''") return mlString();
	      var isEol = ch === '\r' || ch === '\n' || ch === '';
	      if (isEol ||
	        ch === ',' || ch === '}' || ch === ']' ||
	        ch === '#' ||
	        ch === '/' && (peek(0) === '/' || peek(0) === '*')
	        ) {
	        // this tests for the case of {true|false|null|num}
	        // followed by { ',' | '}' | ']' | '#' | '//' | '/*' }
	        // which needs to be parsed as the specified value
	        var chf = value[0];
	        switch (chf) {
	          case 'f': if (value.trim() === "false") return false; break;
	          case 'n': if (value.trim() === "null") return null; break;
	          case 't': if (value.trim() === "true") return true; break;
	          default:
	            if (chf === '-' || chf >= '0' && chf <= '9') {
	              var n = common.tryParseNumber(value);
	              if (n !== undefined) return n;
	            }
	        }
	        if (isEol) {
	          // remove any whitespace at the end (ignored in quoteless strings)
	          value = value.trim();
	          var dsfValue = runDsf(value);
	          return dsfValue !== undefined ? dsfValue : value;
	        }
	      }
	      value += ch;
	    }
	  }
	
	  function getComment(cAt, first) {
	    var i;
	    cAt--;
	    // remove trailing whitespace
	    // but only up to EOL
	    for (i = at - 2; i > cAt && text[i] <= ' ' && text[i] !== '\n'; i--);
	    if (text[i] === '\n') i--;
	    if (text[i] === '\r') i--;
	    var res = text.substr(cAt, i-cAt+1);
	    // return if we find anything other than whitespace
	    for (i = 0; i < res.length; i++) {
	      if (res[i] > ' ') {
	        var j = res.indexOf('\n');
	        if (j >= 0) {
	          var c = [res.substr(0, j), res.substr(j+1)];
	          if (first && c[0].trim().length === 0) c.shift();
	          return c;
	        } else return [res];
	      }
	    }
	    return [];
	  }
	
	  function errorClosingHint(value) {
	    function search(value, ch) {
	      var i, k, length, res;
	      switch (typeof value) {
	        case 'string':
	          if (value.indexOf(ch) >= 0) res=value;
	          break;
	        case 'object':
	          if (Object.prototype.toString.apply(value) === '[object Array]') {
	            for (i = 0, length = value.length; i < length; i++) {
	              res=search(value[i], ch) || res;
	            }
	          } else {
	            for (k in value) {
	              if (!Object.prototype.hasOwnProperty.call(value, k)) continue;
	              res=search(value[k], ch) || res;
	            }
	          }
	      }
	      return res;
	    }
	
	    function report(ch) {
	      var possibleErr=search(value, ch);
	      if (possibleErr) {
	        return "found '"+ch+"' in a string value, your mistake could be with:\n"+
	          "  > "+possibleErr+"\n"+
	          "  (unquoted strings contain everything up to the next line!)";
	      } else return "";
	    }
	
	    return report('}') || report(']');
	  }
	
	  function array() {
	    // Parse an array value.
	    // assuming ch === '['
	
	    var array = [];
	    var comments, cAt, nextComment;
	    try {
	      if (keepComments) comments = common.createComment(array, { a: [] });
	
	      next();
	      cAt = at;
	      white();
	      if (comments) nextComment = getComment(cAt, true).join('\n');
	      if (ch === ']') {
	        next();
	        if (comments) comments.e = [nextComment];
	        return array;  // empty array
	      }
	
	      while (ch) {
	        array.push(value());
	        cAt = at;
	        white();
	        // in Hjson the comma is optional and trailing commas are allowed
	        // note that we do not keep comments before the , if there are any
	        if (ch === ',') { next(); cAt = at; white(); }
	        if (comments) {
	          var c = getComment(cAt);
	          comments.a.push([nextComment||"", c[0]||""]);
	          nextComment = c[1];
	        }
	        if (ch === ']') {
	          next();
	          if (comments) comments.a[comments.a.length-1][1] += nextComment||"";
	          return array;
	        }
	        white();
	      }
	
	      error("End of input while parsing an array (missing ']')");
	    } catch (e) {
	      e.hint=e.hint||errorClosingHint(array);
	      throw e;
	    }
	  }
	
	  function object(withoutBraces) {
	    // Parse an object value.
	
	    var key = "", object = {};
	    var comments, cAt, nextComment;
	
	    try {
	      if (keepComments) comments = common.createComment(object, { c: {}, o: []  });
	
	      if (!withoutBraces) {
	        // assuming ch === '{'
	        next();
	        cAt = at;
	      } else cAt = 1;
	
	      white();
	      if (comments) nextComment = getComment(cAt, true).join('\n');
	      if (ch === '}' && !withoutBraces) {
	        if (comments) comments.e = [nextComment];
	        next();
	        return object;  // empty object
	      }
	      while (ch) {
	        key = keyname();
	        white();
	        if (ch !== ':') error("Expected ':' instead of '" + ch + "'");
	        next();
	        // duplicate keys overwrite the previous value
	        object[key] = value();
	        cAt = at;
	        white();
	        // in Hjson the comma is optional and trailing commas are allowed
	        // note that we do not keep comments before the , if there are any
	        if (ch === ',') { next(); cAt = at; white(); }
	        if (comments) {
	          var c = getComment(cAt);
	          comments.c[key] = [nextComment||"", c[0]||""];
	          nextComment = c[1];
	          comments.o.push(key);
	        }
	        if (ch === '}' && !withoutBraces) {
	          next();
	          if (comments) comments.c[key][1] += nextComment||"";
	          return object;
	        }
	        white();
	      }
	
	      if (withoutBraces) return object;
	      else error("End of input while parsing an object (missing '}')");
	    } catch (e) {
	      e.hint=e.hint||errorClosingHint(object);
	      throw e;
	    }
	  }
	
	  function value() {
	    // Parse a Hjson value. It could be an object, an array, a string, a number or a word.
	
	    white();
	    switch (ch) {
	      case '{': return object();
	      case '[': return array();
	      case '"': return string();
	      default: return tfnns();
	    }
	  }
	
	  function checkTrailing(v, c) {
	    var cAt = at;
	    white();
	    if (ch) error("Syntax error, found trailing characters");
	    if (keepComments) {
	      var b = c.join('\n'), a = getComment(cAt).join('\n');
	      if (a || b) {
	        var comments = common.createComment(v, common.getComment(v));
	        comments.r = [b, a];
	      }
	    }
	    return v;
	  }
	
	  function rootValue() {
	    // Braces for the root object are optional
	    white();
	    var c = keepComments ? getComment(1) : null;
	    switch (ch) {
	      case '{': return checkTrailing(object(), c);
	      case '[': return checkTrailing(array(), c);
	    }
	
	    try {
	      // assume we have a root object without braces
	      return checkTrailing(object(true), c);
	    } catch (e) {
	      // test if we are dealing with a single JSON value instead (true/false/null/num/"")
	      resetAt();
	      try { return checkTrailing(value(), c); }
	      catch (e2) { throw e; } // throw original error
	    }
	  }
	
	  function hjsonParse(source, opt) {
	    if (typeof source!=="string") throw new Error("source is not a string");
	    var dsfDef = null;
	    if (opt && typeof opt === 'object') {
	      keepComments = opt.keepWsc;
	      dsfDef = opt.dsf;
	    }
	    runDsf = dsf.loadDsf(dsfDef, "parse");
	    text = source;
	    resetAt();
	    return rootValue();
	  }
	
	  return hjsonParse($source, $opt);
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* Hjson http://hjson.org */
	/* jslint node: true */
	"use strict";
	
	var common = __webpack_require__(10);
	
	function loadDsf(col, type) {
	
	  if (Object.prototype.toString.apply(col) !== '[object Array]') {
	    if (col) throw new Error("dsf option must contain an array!");
	    else return nopDsf;
	  } else if (col.length === 0) return nopDsf;
	
	  var dsf = [];
	  function isFunction(f) { return {}.toString.call(f) === '[object Function]'; }
	
	  col.forEach(function(x) {
	    if (!x.name || !isFunction(x.parse) || !isFunction(x.stringify))
	      throw new Error("extension does not match the DSF interface");
	    dsf.push(function() {
	      try {
	        if (type == "parse") {
	          return x.parse.apply(null, arguments);
	        } else if (type == "stringify") {
	          var res=x.stringify.apply(null, arguments);
	          // check result
	          if (res !== undefined && (typeof res !== "string" ||
	            res.length === 0 ||
	            res[0] === '"' ||
	            [].some.call(res, function(c) { return isInvalidDsfChar(c); })))
	            throw new Error("value may not be empty, start with a quote or contain a punctuator character except colon: " + res);
	          return res;
	        } else throw new Error("Invalid type");
	      } catch (e) {
	        throw new Error("DSF-"+x.name+" failed; "+e.message);
	      }
	    });
	  });
	
	  return runDsf.bind(null, dsf);
	}
	
	function runDsf(dsf, value) {
	  if (dsf) {
	    for (var i = 0; i < dsf.length; i++) {
	      var res = dsf[i](value);
	      if (res !== undefined) return res;
	    }
	  }
	}
	
	function nopDsf(value) {
	}
	
	function isInvalidDsfChar(c) {
	  return c === '{' || c === '}' || c === '[' || c === ']' || c === ',';
	}
	
	
	function math(opt) {
	  return {
	    name: "math",
	    parse: function (value) {
	      switch (value) {
	        case "+inf":
	        case "inf":
	        case "+Inf":
	        case "Inf": return Infinity;
	        case "-inf":
	        case "-Inf": return -Infinity;
	        case "nan":
	        case "NaN": return NaN;
	      }
	    },
	    stringify: function (value) {
	      if (typeof value !== 'number') return;
	      if (1 / value === -Infinity) return "-0"; // 0 === -0
	      if (value === Infinity) return "Inf";
	      if (value === -Infinity) return "-Inf";
	      if (isNaN(value)) return "NaN";
	    },
	  };
	}
	math.description="support for Inf/inf, -Inf/-inf, Nan/naN and -0";
	
	function hex(opt) {
	  var out=opt && opt.out;
	  return {
	    name: "hex",
	    parse: function (value) {
	      if (/^0x[0-9A-Fa-f]+$/.test(value))
	        return parseInt(value, 16);
	    },
	    stringify: function (value) {
	      if (out && Number.isInteger(value))
	        return "0x"+value.toString(16);
	    },
	  };
	}
	hex.description="parse hexadecimal numbers prefixed with 0x";
	
	function date(opt) {
	  return {
	    name: "date",
	    parse: function (value) {
	      if (/^\d{4}-\d{2}-\d{2}$/.test(value) ||
	        /^\d{4}-\d{2}-\d{2}T\d{2}\:\d{2}\:\d{2}(?:.\d+)(?:Z|[+-]\d{2}:\d{2})$/.test(value)) {
	        var dt = Date.parse(value);
	        if (!isNaN(dt)) return new Date(dt);
	      }
	    },
	    stringify: function (value) {
	      if (Object.prototype.toString.call(value) === '[object Date]') {
	        var dt = value.toISOString();
	        if (dt.indexOf("T00:00:00.000Z", dt.length - 14) !== -1) return dt.substr(0, 10);
	        else return dt;
	      }
	    },
	  };
	}
	date.description="support ISO dates";
	
	module.exports = {
	  loadDsf: loadDsf,
	  std: {
	    math: math,
	    hex: hex,
	    date: date,
	  },
	};


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* Hjson http://hjson.org */
	/* jslint node: true */
	"use strict";
	
	module.exports = function($value, $opt) {
	
	  var common = __webpack_require__(10);
	  var dsf = __webpack_require__(14);
	
	  var runDsf; // domain specific formats
	
	  // needsEscape tests if the string can be written without escapes
	  var needsEscape = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	  // needsQuotes tests if the string can be written as a quoteless string (includes needsEscape but without \\ and \")
	  var needsQuotes = /^\s|^"|^'''|^#|^\/\*|^\/\/|^\{|^\}|^\[|^\]|^:|^,|\s$|[\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	  // needsEscapeML tests if the string can be written as a multiline string (includes needsEscape but without \n, \r, \\ and \")
	  var needsEscapeML = /'''|[\x00-\x09\x0b\x0c\x0e-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
	  // starts with a keyword and optionally is followed by a comment
	  var startsWithKeyword = /^(true|false|null)\s*((,|\]|\}|#|\/\/|\/\*).*)?$/;
	  var meta =
	  {  // table of character substitutions
	    '\b': 'b',
	    '\t': 't',
	    '\n': 'n',
	    '\f': 'f',
	    '\r': 'r',
	    '"' : '"',
	    '\\': '\\'
	  };
	  var needsEscapeName = /[,\{\[\}\]\s:#"]|\/\/|\/\*|'''/;
	  var gap = '';
	  var indent = '  ';
	  // options
	  var eol, keepComments, bracesSameLine, quoteAlways;
	  var token = {
	    obj:  [ '{', '}' ],
	    arr:  [ '[', ']' ],
	    key:  [ '',  '' ],
	    qkey: [ '"', '"' ],
	    col:  [ ':' ],
	    str:  [ '', '' ],
	    qstr: [ '"', '"' ],
	    mstr: [ "'''", "'''" ],
	    num:  [ '', '' ],
	    lit:  [ '', '' ],
	    dsf:  [ '', '' ],
	    esc:  [ '\\', '' ],
	    uni:  [ '\\u', '' ],
	    rem:  [ '', '' ],
	  };
	
	  function wrap(tk, v) { return tk[0] + v + tk[1]; }
	
	  function quoteReplace(string) {
	    return string.replace(needsEscape, function (a) {
	      var c = meta[a];
	      if (typeof c === 'string') return wrap(token.esc, c);
	      else return wrap(token.uni, ('0000' + a.charCodeAt(0).toString(16)).slice(-4));
	    });
	  }
	
	  function quote(string, gap, hasComment, isRootObject) {
	    if (!string) return wrap(token.qstr, '');
	
	    needsQuotes.lastIndex = 0;
	    startsWithKeyword.lastIndex = 0;
	
	    // Check if we can insert this string without quotes
	    // see hjson syntax (must not parse as true, false, null or number)
	
	    if (quoteAlways || hasComment ||
	      needsQuotes.test(string) ||
	      common.tryParseNumber(string, true) !== undefined ||
	      startsWithKeyword.test(string)) {
	
	      // If the string contains no control characters, no quote characters, and no
	      // backslash characters, then we can safely slap some quotes around it.
	      // Otherwise we first check if the string can be expressed in multiline
	      // format or we must replace the offending characters with safe escape
	      // sequences.
	
	      needsEscape.lastIndex = 0;
	      needsEscapeML.lastIndex = 0;
	      if (!needsEscape.test(string)) return wrap(token.qstr, string);
	      else if (!needsEscapeML.test(string) && !isRootObject) return mlString(string, gap);
	      else return wrap(token.qstr, quoteReplace(string));
	    } else {
	      // return without quotes
	      return wrap(token.str, string);
	    }
	  }
	
	  function mlString(string, gap) {
	    // wrap the string into the ''' (multiline) format
	
	    var i, a = string.replace(/\r/g, "").split('\n');
	    gap += indent;
	
	    if (a.length === 1) {
	      // The string contains only a single line. We still use the multiline
	      // format as it avoids escaping the \ character (e.g. when used in a
	      // regex).
	      return wrap(token.mstr, a[0]);
	    } else {
	      var res = eol + gap + token.mstr[0];
	      for (i = 0; i < a.length; i++) {
	        res += eol;
	        if (a[i]) res += gap + a[i];
	      }
	      return res + eol + gap + token.mstr[1];
	    }
	  }
	
	  function quoteKey(name) {
	    if (!name) return '""';
	
	    // Check if we can insert this key without quotes
	
	    if (needsEscapeName.test(name)) {
	      needsEscape.lastIndex = 0;
	      return wrap(token.qkey, needsEscape.test(name) ? quoteReplace(name) : name);
	    } else {
	      // return without quotes
	      return wrap(token.key, name);
	    }
	  }
	
	  function str(value, hasComment, noIndent, isRootObject) {
	    // Produce a string from value.
	
	    function startsWithNL(str) { return str && str[str[0] === '\r' ? 1 : 0] === '\n'; }
	    function commentOnThisLine(str) { return str && !startsWithNL(str); }
	    function makeComment(str, prefix, trim) {
	      if (!str) return "";
	      str = common.forceComment(str);
	      var i, len = str.length;
	      for (i = 0; i < len && str[i] <= ' '; i++) {}
	      if (trim && i > 0) str = str.substr(i);
	      if (i < len) return prefix + wrap(token.rem, str);
	      else return str;
	    }
	
	    // What happens next depends on the value's type.
	
	    // check for DSF
	    var dsfValue = runDsf(value);
	    if (dsfValue !== undefined) return wrap(token.dsf, dsfValue);
	
	    switch (typeof value) {
	      case 'string':
	        return quote(value, gap, hasComment, isRootObject);
	
	      case 'number':
	        // JSON numbers must be finite. Encode non-finite numbers as null.
	        return isFinite(value) ? wrap(token.num, String(value)) : wrap(token.lit, 'null');
	
	      case 'boolean':
	        return wrap(token.lit, String(value));
	
	      case 'object':
	        // If the type is 'object', we might be dealing with an object or an array or
	        // null.
	
	        // Due to a specification blunder in ECMAScript, typeof null is 'object',
	        // so watch out for that case.
	
	        if (!value) return wrap(token.lit, 'null');
	
	        var comments; // whitespace & comments
	        if (keepComments) comments = common.getComment(value);
	
	        var isArray = Object.prototype.toString.apply(value) === '[object Array]';
	
	        // Make an array to hold the partial results of stringifying this object value.
	        var mind = gap;
	        gap += indent;
	        var eolMind = eol + mind;
	        var eolGap = eol + gap;
	        var prefix = noIndent || bracesSameLine ? '' : eolMind;
	        var partial = [];
	
	        var i, length; // loop
	        var k, v; // key, value
	        var c, ca;
	
	        if (isArray) {
	          // The value is an array. Stringify every element. Use null as a placeholder
	          // for non-JSON values.
	
	          for (i = 0, length = value.length; i < length; i++) {
	            if (comments) {
	              c = comments.a[i]||[];
	              ca = commentOnThisLine(c[1]);
	              partial.push(makeComment(c[0], "\n") + eolGap);
	            }
	            partial.push(str(value[i], comments ? ca : false, true) || wrap(token.lit, 'null'));
	            if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
	          }
	
	          if (comments) {
	            if (length === 0) {
	              // when empty
	              partial.push((comments.e ? makeComment(comments.e[0], "\n") : "") + eolMind);
	            }
	            else partial.push(eolMind);
	          }
	
	          // Join all of the elements together, separated with newline, and wrap them in
	          // brackets.
	
	          if (comments) v = prefix + wrap(token.arr, partial.join(''));
	          else if (partial.length === 0) v = wrap(token.arr, '');
	          else v = prefix + wrap(token.arr, eolGap + partial.join(eolGap) + eolMind);
	        } else {
	          // Otherwise, iterate through all of the keys in the object.
	
	          if (comments) {
	            var keys = comments.o.slice();
	            for (k in value) {
	              if (Object.prototype.hasOwnProperty.call(value, k) && keys.indexOf(k) < 0)
	                keys.push(k);
	            }
	
	            for (i = 0, length = keys.length; i < length; i++) {
	              k = keys[i];
	              c = comments.c[k]||[];
	              ca = commentOnThisLine(c[1]);
	              partial.push(makeComment(c[0], "\n") + eolGap);
	
	              v = str(value[k], ca);
	              if (v) partial.push(quoteKey(k) + token.col + (startsWithNL(v) ? '' : ' ') + v);
	              if (comments && c[1]) partial.push(makeComment(c[1], ca ? " " : "\n", ca));
	            }
	            if (length === 0) {
	              // when empty
	              partial.push((comments.e ? makeComment(comments.e[0], "\n") : "") + eolMind);
	            }
	            else partial.push(eolMind);
	
	          } else {
	            for (k in value) {
	              if (Object.prototype.hasOwnProperty.call(value, k)) {
	                v = str(value[k]);
	                if (v) partial.push(quoteKey(k) + token.col + (startsWithNL(v) ? '' : ' ') + v);
	              }
	            }
	          }
	
	          // Join all of the member texts together, separated with newlines
	          if (partial.length === 0) {
	            v = wrap(token.obj, '');
	          } else {
	            // and wrap them in braces
	            if (comments) v = prefix + wrap(token.obj, partial.join(''));
	            else v = prefix + wrap(token.obj, eolGap + partial.join(eolGap) + eolMind);
	          }
	        }
	
	        gap = mind;
	        return v;
	    }
	  }
	
	  function hjsonStringify(value, opt) {
	    var i, space;
	    var dsfDef = null;
	
	    eol = common.EOL;
	    indent = '  ';
	    keepComments = false;
	    bracesSameLine = false;
	    quoteAlways = false;
	
	    if (opt && typeof opt === 'object') {
	      if (opt.eol === '\n' || opt.eol === '\r\n') eol = opt.eol;
	      space = opt.space;
	      keepComments = opt.keepWsc;
	      bracesSameLine = opt.bracesSameLine;
	      quoteAlways = opt.quotes === 'always';
	      dsfDef = opt.dsf;
	
	      if (opt.colors === true) {
	        token = {
	          obj:  [ '\x1b[30;1m{\x1b[0m', '\x1b[30;1m}\x1b[0m' ],
	          arr:  [ '\x1b[30;1m[\x1b[0m', '\x1b[30;1m]\x1b[0m' ],
	          key:  [ '\x1b[33m',  '\x1b[0m' ],
	          qkey: [ '\x1b[33m"', '"\x1b[0m' ],
	          col:  [ '\x1b[37m:\x1b[0m' ],
	          str:  [ '\x1b[37;1m', '\x1b[0m' ],
	          qstr: [ '\x1b[37;1m"', '"\x1b[0m' ],
	          mstr: [ "\x1b[37;1m'''", "'''\x1b[0m" ],
	          num:  [ '\x1b[36;1m', '\x1b[0m' ],
	          lit:  [ '\x1b[36m', '\x1b[0m' ],
	          dsf:  [ '\x1b[37m', '\x1b[0m' ],
	          esc:  [ '\x1b[31m\\', '\x1b[0m' ],
	          uni:  [ '\x1b[31m\\u', '\x1b[0m' ],
	          rem:  [ '\x1b[30;1m', '\x1b[0m' ],
	        };
	      }
	    }
	
	    runDsf = dsf.loadDsf(dsfDef, 'stringify');
	
	    // If the space parameter is a number, make an indent string containing that
	    // many spaces. If it is a string, it will be used as the indent string.
	
	    if (typeof space === 'number') {
	      indent = '';
	      for (i = 0; i < space; i++) indent += ' ';
	    } else if (typeof space === 'string') {
	      indent = space;
	    }
	
	    var res = "";
	    var comments = keepComments ? comments = (common.getComment(value) || {}).r : null;
	    if (comments && comments[0]) res = comments[0] + '\n';
	
	    // get the result of stringifying the value.
	    res += str(value, null, true, true);
	
	    if (comments) res += comments[1]||"";
	
	    return res;
	  }
	
	  return hjsonStringify($value, $opt);
	};


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/* Hjson http://hjson.org */
	/* jslint node: true */
	"use strict";
	
	var common=__webpack_require__(10);
	
	function makeComment(b, a, x) {
	  var c;
	  if (b) c={ b: b };
	  if (a) (c=c||{}).a=a;
	  if (x) (c=c||{}).x=x;
	  return c;
	}
	
	function extractComments(value, root) {
	
	  if (value===null || typeof value!=='object') return;
	  var comments=common.getComment(value);
	  if (comments) common.removeComment(value);
	
	  var i, length; // loop
	  var any, res;
	  if (Object.prototype.toString.apply(value) === '[object Array]') {
	    res={ a: [] };
	    for (i=0, length=value.length; i<length; i++) {
	      if (saveComment(res.a, i, comments.a[i], extractComments(value[i])))
	        any=true;
	    }
	    if (!any && comments.e){
	      res.e=makeComment(comments.e[0], comments.e[1]);
	      any=true;
	    }
	  } else {
	    res={ s: {} };
	
	    // get key order (comments and current)
	    var keys, currentKeys=Object.keys(value);
	    if (comments && comments.o) {
	      keys=[];
	      comments.o.concat(currentKeys).forEach(function(key) {
	        if (Object.prototype.hasOwnProperty.call(value, key) && keys.indexOf(key)<0)
	          keys.push(key);
	      });
	    } else keys=currentKeys;
	    res.o=keys;
	
	    // extract comments
	    for (i=0, length=keys.length; i<length; i++) {
	      var key=keys[i];
	      if (saveComment(res.s, key, comments.c[key], extractComments(value[key])))
	        any=true;
	    }
	    if (!any && comments.e) {
	      res.e=makeComment(comments.e[0], comments.e[1]);
	      any=true;
	    }
	  }
	
	  if (root && comments && comments.r) {
	    res.r=makeComment(comments.r[0], comments.r[1]);
	  }
	
	  return any?res:undefined;
	}
	
	function mergeStr() {
	  var res="";
	  [].forEach.call(arguments, function(c) {
	    if (c && c.trim()!=="") {
	      if (res) res+="; ";
	      res+=c.trim();
	    }
	  });
	  return res;
	}
	
	function mergeComments(comments, value) {
	  var dropped=[];
	  merge(comments, value, dropped, []);
	
	  // append dropped comments:
	  if (dropped.length>0) {
	    var text=rootComment(value, null, 1);
	    text+="\n# Orphaned comments:\n";
	    dropped.forEach(function(c) {
	      text+=("# "+c.path.join('/')+": "+mergeStr(c.b, c.a, c.e)).replace("\n", "\\n ")+"\n";
	    });
	    rootComment(value, text, 1);
	  }
	}
	
	function saveComment(res, key, item, col) {
	  var c=makeComment(item?item[0]:undefined, item?item[1]:undefined, col);
	  if (c) res[key]=c;
	  return c;
	}
	
	function droppedComment(path, c) {
	  var res=makeComment(c.b, c.a);
	  res.path=path;
	  return res;
	}
	
	function dropAll(comments, dropped, path) {
	
	  if (!comments) return;
	
	  var i, length; // loop
	
	  if (comments.a) {
	
	    for (i=0, length=comments.a.length; i<length; i++) {
	      var kpath=path.slice().concat([i]);
	      var c=comments.a[i];
	      if (c) {
	        dropped.push(droppedComment(kpath, c));
	        dropAll(c.x, dropped, kpath);
	      }
	    }
	  } else if (comments.o) {
	
	    comments.o.forEach(function(key) {
	      var kpath=path.slice().concat([key]);
	      var c=comments.s[key];
	      if (c) {
	        dropped.push(droppedComment(kpath, c));
	        dropAll(c.x, dropped, kpath);
	      }
	    });
	  }
	
	  if (comments.e)
	    dropped.push(droppedComment(path, comments.e));
	}
	
	function merge(comments, value, dropped, path) {
	
	  if (!comments) return;
	  if (value===null || typeof value!=='object') {
	    dropAll(comments, dropped, path);
	    return;
	  }
	
	  var i, length; // loop
	  var setComments=common.createComment(value);
	
	  if (path.length===0 && comments.r)
	    setComments.r=[comments.r.b, comments.r.a];
	
	  if (Object.prototype.toString.apply(value) === '[object Array]') {
	    setComments.a=[];
	    for (i=0, length=(comments.a||[]).length; i<length; i++) {
	      var kpath=path.slice().concat([i]);
	      var c=comments.a[i];
	      if (!c) continue;
	      if (i<value.length) {
	        setComments.a.push([c.b, c.a]);
	        merge(c.x, value[i], dropped, kpath);
	      } else {
	        dropped.push(droppedComment(kpath, c));
	        dropAll(c.x, dropped, kpath);
	      }
	    }
	    if (i===0 && comments.e) setComments.e=[comments.e.b, comments.e.a];
	  } else {
	    setComments.c={};
	    setComments.o=[];
	    (comments.o||[]).forEach(function(key) {
	      var kpath=path.slice().concat([key]);
	      var c=comments.s[key];
	      if (Object.prototype.hasOwnProperty.call(value, key)) {
	        setComments.o.push(key);
	        if (c) {
	          setComments.c[key]=[c.b, c.a];
	          merge(c.x, value[key], dropped, kpath);
	        }
	      } else if (c) {
	        dropped.push(droppedComment(kpath, c));
	        dropAll(c.x, dropped, kpath);
	      }
	    });
	    if (comments.e) setComments.e=[comments.e.b, comments.e.a];
	  }
	}
	
	function rootComment(value, setText, header) {
	  var comment=common.createComment(value, common.getComment(value));
	  if (!comment.r) comment.r=["", ""];
	  if (setText || setText==="") comment.r[header]=common.forceComment(setText);
	  return comment.r[header]||"";
	}
	
	module.exports={
	  extract: function(value) { return extractComments(value, true); },
	  merge: mergeComments,
	  header: function(value, setText) { return rootComment(value, setText, 0); },
	  footer: function(value, setText) { return rootComment(value, setText, 1); },
	};


/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxNTk5NzhiMDEzYjE4OWU4MzM0MCIsIndlYnBhY2s6Ly8vLi9zcmMvTU1hcEJhc2VDbGFzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2V4dGVuZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1ZXJ5LXN0cmluZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3N0cmljdC11cmktZW5jb2RlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L3doYXR3Zy1mZXRjaC9mZXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKSIsIndlYnBhY2s6Ly8vLi9+L2hqc29uL2xpYi9oanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2hqc29uL2xpYi9oanNvbi1jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oanNvbi9saWIvaGpzb24tdmVyc2lvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2hqc29uL2xpYi9oanNvbi1wYXJzZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2hqc29uL2xpYi9oanNvbi1kc2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9oanNvbi9saWIvaGpzb24tc3RyaW5naWZ5LmpzIiwid2VicGFjazovLy8uL34vaGpzb24vbGliL2hqc29uLWNvbW1lbnRzLmpzIl0sIm5hbWVzIjpbIk1NQXBCYXNlQ2xhc3MiLCJkaXJEZWZhdWx0T3B0aW9ucyIsImNvbnN0cnVjdG9yIiwibmFtZSIsImRpckN1c3RvbU9wdGlvbnMiLCJfb3B0aW9ucyIsImRlZmF1bHRMYW5nQ29kZSIsIm5hdmlnYXRvciIsImxhbmd1YWdlIiwiYnJvd3Nlckxhbmd1YWdlIiwib3B0aW9ucyIsImxhbmdPYmoiLCJsYW5nIiwibGFuZ0V4bHVkaW5nRGlhbGVjdHMiLCJnZXRMYW5nQ29kZSIsInNwbGl0Iiwic3VwcG9ydGVkTGFuZ3MiLCJPYmplY3QiLCJrZXlzIiwibGFuZ0NvZGUiLCJpbmRleE9mIiwiY29uc29sZSIsIndhcm4iLCJsZW5ndGgiLCJ3aW5kb3ciLCJjYktvcnQiLCJnZXRQcm9maWxlIiwiZGVmYXVsdE9wdGlvbnNOYW1lIiwicGF0aFRvRGVmYXVsdE9wdGlvbnMiLCJyZXNvbHZlIiwicmVqZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJ0ZXh0IiwicGFyc2UiLCJjYXRjaCIsImVycm9yIiwicHJvZmlsZU5hbWUiLCJfZ2V0UHJvZmlsZU5hbWUiLCJjdXN0b21PcHRpb25zTmFtZSIsInBhdGhUb0N1c3RvbU9wdGlvbnMiLCJhbGwiLCJfZmV0Y2hEZWZhdWx0T3B0aW9ucyIsIl9mZXRjaEN1c3RvbU9wdGlvbnMiLCJvcHRpb25zQXJyIiwibG9nIiwiX2ZldGNoT3B0aW9ucyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDdENBOzs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7OztLQUVxQkEsYTtBQUtJOztBQUY4QztBQUl0RSwyQkFBYztBQUFBOztBQUFBLFFBTGRDLGlCQUtjLEdBTE0sYUFBYSxLQUFLQyxXQUFMLENBQWlC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O0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXVEO0FBQ3ZELFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCwrRUFBOEU7QUFDOUU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWlCLHVDQUF1QztBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLFdBQVUsTUFBTTtBQUNoQixXQUFVLE9BQU87QUFDakI7QUFDQSxZQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7O0FBRUg7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVSxNQUFNO0FBQ2hCO0FBQ0EsWUFBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMLElBQUc7QUFDSDtBQUNBO0FBQ0Esc0JBQXFCLFlBQVk7QUFDakM7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxXQUFVLElBQUk7QUFDZDtBQUNBLFlBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQSxXQUFVLFNBQVM7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWCxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBLGFBQVksU0FBUztBQUNyQixhQUFZLFNBQVM7QUFDckI7QUFDQSxjQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0EsYUFBWSxTQUFTO0FBQ3JCO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxFQUFDO0FBQ0QscUM7Ozs7Ozs7QUNqb0NBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FB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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUJBQWdCOztBQUVoQjs7QUFFQSx3Q0FBdUMsVUFBVTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDhDQUE2QyxVQUFVO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNEIscUNBQXFDLEVBQUU7QUFDbkU7QUFDQSxxQ0FBb0MsdUNBQXVDLEVBQUU7QUFDN0UscUNBQW9DLHVDQUF1QyxFQUFFO0FBQzdFIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1NYXBCYXNlQ2xhc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTU1hcEJhc2VDbGFzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMTU5OTc4YjAxM2IxODllODMzNDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IGV4dGVuZCBmcm9tIFwiZXh0ZW5kXCI7XG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSBcInF1ZXJ5LXN0cmluZ1wiO1xuaW1wb3J0IFwid2hhdHdnLWZldGNoXCI7XG5pbXBvcnQgUHJvbWlzZSBmcm9tIFwiZXM2LXByb21pc2VcIjtcbmltcG9ydCBoanNvbiBmcm9tIFwiaGpzb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTU1BcEJhc2VDbGFzcyB7XG5cblx0ZGlyRGVmYXVsdE9wdGlvbnMgPSBcIm1vZHVsZXMvXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIi9vcHRpb25zL1wiO1xuXHRkaXJDdXN0b21PcHRpb25zID0gXCJtb2R1bGVzL1wiICsgdGhpcy5jb25zdHJ1Y3Rvci5uYW1lICsgXCIvb3B0aW9ucy9cIjsgIC8vIEZvciB0cmFuc3BpbGluZyB3aXRoIGNsYXNzIHByb3BlcnRpZXM6IGh0dHBzOi8vYmFiZWxqcy5pby9kb2NzL3BsdWdpbnMvdHJhbnNmb3JtLWNsYXNzLXByb3BlcnRpZXMvXG5cdF9vcHRpb25zID0gbnVsbDsgLy8gVG8gYmUgZmlsbGVkIHdpdGggY29udGVudHMgZnJvbSBvcHRpb25zIGZpbGVzXG5cdGRlZmF1bHRMYW5nQ29kZSA9IFwic3ZcIjsgLy8gSWYgbGFuZ3VhZ2UgaXMgbm90IHN1cHBvcnRlZCBpbiBtb2R1bGUncyBvcHRpb25zLmxhbmcgdGhpcyB3aWxsIGJlIHRoZSBmYWxsYmFjayBsYW5ndWFnZVxuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYnJvd3NlcidzIGN1cnJlbnQgc2V0IGxhbmd1YWdlXG5cdCAqIEByZXR1cm4ge1N0cmluZ30gQW4gSVNPIGNvZGUgcmVwcmVzZW50aW5nIHRoZSBsYW5ndWFnZS5cblx0ICovXG5cdGdldExhbmdDb2RlKCkge1xuXHRcdHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZTsgLy8gYnJvd3Nlckxhbmd1YWdlIGlzIGZvciBJRTwxMVxuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGxhbmd1YWdlIG9iamVjdCBmb3IgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKGkuZS4gZG9lcyBub3QgcmV0dXJuIGxhbmcgb2JqZWN0IGZvciBhbGwgc3VwcG9ydGVkIGxhbmd1YWdlcykuXG5cdCAqIEByZXR1cm4ge09iamVjdH0gVGhlIGxhbmd1YWdlIG9iamVjdC9oYXNoIHRhYmxlXG5cdCAqL1xuXHRnZXRMYW5nKG9wdGlvbnMgPSB7fSkge1xuXHRcdC8vIFRPRE86IEdldCBvYmplY3QgZm9yIGN1cnJlbnQgbGFuZ3VhZ2Vcblx0XHRsZXQgbGFuZ09iaiA9IG9wdGlvbnMubGFuZyB8fCB7fTtcblxuXHRcdGNvbnN0IGxhbmdFeGx1ZGluZ0RpYWxlY3RzID0gdGhpcy5nZXRMYW5nQ29kZSgpLnNwbGl0KFwiLVwiKVswXTsgLy8gZS5nLiBzdi1TRSBvciBzdi1GSSAtPiBzdlxuXHRcdGxldCBzdXBwb3J0ZWRMYW5ncyA9IE9iamVjdC5rZXlzKGxhbmdPYmopO1xuXHRcdGxldCBsYW5nQ29kZSA9IHN1cHBvcnRlZExhbmdzLmluZGV4T2YobGFuZ0V4bHVkaW5nRGlhbGVjdHMpID09PSAtMSA/IHRoaXMuZGVmYXVsdExhbmdDb2RlIDogbGFuZ0V4bHVkaW5nRGlhbGVjdHM7XG5cdFx0bGV0IGxhbmcgPSBsYW5nT2JqWyBsYW5nQ29kZSBdO1xuXHRcdGlmICghbGFuZykge1xuXHRcdFx0Y29uc29sZS53YXJuKGBNb2R1bGUge3RoaXMuY29uc3RydWN0b3IubmFtZX0gaGFzIG5vIGxhbmd1YWdlIGRlZmluZWQgaW4gZGVmYXVsdE9wdGlvbnMuanNvbiBmb3IgbGFuZyBjb2RlOiB7bGFuZ0NvZGV9LmApO1xuXHRcdFx0bGFuZyA9IHN1cHBvcnRlZExhbmdzLmxlbmd0aCA/IHN1cHBvcnRlZExhbmdzWzBdIDogbnVsbDsgLy8gQXMgYSBsYXN0IGZhbGxiYWNrIGFueSBzdXBwb3J0ZWQgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIChpZiBhbnksIG90aGVyd2lzZSBub25lKVxuXHRcdH1cblx0XHRyZXR1cm4gbGFuZyB8fCB7fTtcblx0fVxuXG5cdC8vIF9nZXRXZWJQYXJhbXNBc09iamVjdCgpIHtcblx0Ly8gXHRyZXR1cm4gcXVlcnlTdHJpbmcucGFyc2UobG9jYXRpb24uc2VhcmNoKTtcblx0Ly8gfVxuXG5cdF9nZXRQcm9maWxlTmFtZSgpIHtcblx0XHRyZXR1cm4gd2luZG93LmNiS29ydCAmJiBjYktvcnQgJiYgY2JLb3J0LmdldFByb2ZpbGUgPyAoY2JLb3J0LmdldFByb2ZpbGUoKSB8fCBudWxsKSA6IG51bGw7IC8vdGhpcy5fZ2V0V2ViUGFyYW1zQXNPYmplY3QoKS5wcm9maWxlIHx8IG51bGw7XG5cdH1cblxuXHRfZmV0Y2hEZWZhdWx0T3B0aW9ucygpIHtcblx0XHQvLyBPcHRpb25zIGRlZmluZWQgaW4gZGVmYXVsdE9wdGlvbnMuanNvbiBpbnNpZGUgdGhlIG1vZHVsZVxuXHRcdGNvbnN0IGRlZmF1bHRPcHRpb25zTmFtZSA9IFwiZGVmYXVsdE9wdGlvbnMuanNvblwiO1xuXHRcdGNvbnN0IHBhdGhUb0RlZmF1bHRPcHRpb25zID0gdGhpcy5kaXJEZWZhdWx0T3B0aW9ucyArIGRlZmF1bHRPcHRpb25zTmFtZTtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoIChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGZldGNoKHBhdGhUb0RlZmF1bHRPcHRpb25zKS50aGVuKCAocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0cmVzcG9uc2UudGV4dCgpLnRoZW4odGV4dCA9PiByZXNvbHZlKGhqc29uLnBhcnNlKHRleHQpKSApOyAvLy5jYXRjaChlcnJvciA9PiBuZXcgRXJyb3IoXCJFcnJvciB3aGlsZSBwYXJzaW5nIGRlZmF1bHQgb3B0aW9uc1wiKSk7XG5cdFx0XHR9KS5jYXRjaCggZXJyb3IgPT4gcmVqZWN0KGVycm9yKSApO1xuXHRcdH0pO1xuXHRcdFxuXHR9XG5cblx0LyoqXG5cdCAqIEZldGNoZXMgY3VzdG9tIG9wdGlvbnMgKGlmIGFueSkuIFRoZSBjdXN0b20gb3B0aW9ucyBmaWxlbmFtZSBcblx0ICogaXMgbmFtZWQgbGlrZTogXCJjdXN0b21PcHRpb25zLVwiICsgcHJvZmlsZU5hbWUuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqICAgICAgICAgLSBvbiBzdWNjZXNzOiBcdHJldHVybnMgb3B0aW9ucyB7T2JqZWN0fVxuXHQgKiAgICAgICAgIC0gb24gZmFpbDogXHRcdHJldHVybnMgbnVsbCB7T2JqZWN0fVxuXHQgKi9cblx0X2ZldGNoQ3VzdG9tT3B0aW9ucygpIHtcblx0XHQvLyBPcHRpb25zIGRlZmluZWQgaW4gY3VzdG9tT3B0aW9ucy5qc29uIGluc2lkZSB0aGUgbW9kdWxlXG5cblx0XHRjb25zdCBwcm9maWxlTmFtZSA9IHRoaXMuX2dldFByb2ZpbGVOYW1lKCkgfHwgXCJtb2NrXCI7XG5cdFx0Y29uc3QgY3VzdG9tT3B0aW9uc05hbWUgPSBcImN1c3RvbU9wdGlvbnMtXCIrcHJvZmlsZU5hbWUrXCIuanNvblwiO1xuXHRcdGNvbnN0IHBhdGhUb0N1c3RvbU9wdGlvbnMgPSB0aGlzLmRpckN1c3RvbU9wdGlvbnMgKyBjdXN0b21PcHRpb25zTmFtZTtcblx0XHRyZXR1cm4gZmV0Y2gocGF0aFRvQ3VzdG9tT3B0aW9ucylcblx0XHRcdFx0LnRoZW4oIChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbih0ZXh0ID0+IGhqc29uLnBhcnNlKHRleHQpKTsgLy8uY2F0Y2goZXJyb3IgPT4gbmV3IEVycm9yKFwiRXJyb3Igd2hpbGUgcGFyc2luZyBkZWZhdWx0IG9wdGlvbnNcIikpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goIGVycm9yID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oXCJQcm9maWxlOiBcIit0aGlzLl9nZXRQcm9maWxlTmFtZSgpICsgXCJoYXMgbm8gY3VzdG9tIGNvbmZpZyBmb3IgbW9kdWxlOiBcIiArIHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiICh0aGlzIG1pZ2h0IGJlIGV4cGVjdGVkIGFuZCBub3QgYW4gZXJyb3IpLiBTZWUgZXJyb3IgbWVzc2FnZSBiZWxvdyBmb3IgZGV0YWlsc1wiKTtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fSk7XG5cdH1cblxuXHQvKipcblx0ICogRmV0Y2hlcyBkZWZhdWx0IGFuZCBjdXN0b20gb3B0aW9ucyAoaWYgYW55KS4gT3ZlcnJpZGVzIGRlZmF1bHQgb3B0aW9ucyB3aXRoIGN1c3RvbSBvcHRpb25zLlxuXHQgKiBAcmV0dXJuIHtQcm9taXNlfVxuXHQgKiAgICAgICAgIC0gb24gc3VjY2VzczogXHRyZXR1cm5zIG1lcmdlZCBvcHRpb25zIHtPYmplY3R9XG5cdCAqICAgICAgICAgLSBvbiBmYWlsOiBcdFx0cmV0dXJucyBlcnJvciB7T2JqZWN0fVxuXHQgKi9cblx0X2ZldGNoT3B0aW9ucygpIHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoW3RoaXMuX2ZldGNoRGVmYXVsdE9wdGlvbnMoKSwgdGhpcy5fZmV0Y2hDdXN0b21PcHRpb25zKCldKVxuXHRcdFx0LnRoZW4oXG5cdFx0XHRcdG9wdGlvbnNBcnIgPT4gZXh0ZW5kKHRydWUsIG9wdGlvbnNBcnJbMF0sIG9wdGlvbnNBcnJbMV0gfHwge30pLFxuXHRcdFx0XHRlcnJvciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiBudWxsOyAvLyBTaG91bGQgd2UgcmV0dXJuIGRlZmF1bHQgb3B0aW9ucyBpZiBjdXN0b20gb3B0aW9ucyB3ZXJlIG5vdCBmb3VuZCBidXQgZGVmYXVsdCBvcHRpb25zIHdlcmUgZm91bmQ/XG5cdFx0XHRcdH1cblx0XHQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFB1YmxpYyBhc3luYyBtZXRob2QgZm9yIGZldGNoaW5nIG9wdGlvbnMgKG1lcmdlZCBkZWZhdWx0IGFuZCBjdXN0b20pLlxuXHQgKiBUaGlzIGlzIGEgd3JhcHBlciBmb3IgX2ZldGNoT3B0aW9ucyB0byBhZGQgY2FjaGluZyBvZiB0aGlzLl9vcHRpb25zIFxuXHQgKiBmb3Igc3BlZWRpbmcgdXAgYW55IHN1YnNlcXVlbnQgY2FsbHMuXG5cdCAqIEByZXR1cm4ge1Byb21pc2V9XG5cdCAqICAgICAgICAgLSBvbiBzdWNjZXNzOiBcdHJldHVybnMgbWVyZ2VkIG9wdGlvbnMge09iamVjdH1cblx0ICogICAgICAgICAtIG9uIGZhaWw6IFx0XHRyZXR1cm5zIGVycm9yIHtPYmplY3R9XG5cdCAqL1xuXHRnZXRPcHRpb25zKCkge1xuXHRcdGlmICh0aGlzLl9vcHRpb25zKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCB0aGlzLl9vcHRpb25zICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKCAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR0aGlzLl9mZXRjaE9wdGlvbnMoKVxuXHRcdFx0XHQudGhlbiggb3B0aW9ucyA9PiB7XG5cdFx0XHRcdFx0dGhpcy5fb3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0XHRcdFx0cmVzb2x2ZShvcHRpb25zKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKCAoZXJyb3IpID0+IHJlamVjdChlcnJvcikgKTtcblx0XHR9KTtcblx0fVxuXHRcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvTU1hcEJhc2VDbGFzcy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG52YXIgaXNBcnJheSA9IGZ1bmN0aW9uIGlzQXJyYXkoYXJyKSB7XG5cdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHJldHVybiBBcnJheS5pc0FycmF5KGFycik7XG5cdH1cblxuXHRyZXR1cm4gdG9TdHIuY2FsbChhcnIpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxudmFyIGlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuXHRpZiAoIW9iaiB8fCB0b1N0ci5jYWxsKG9iaikgIT09ICdbb2JqZWN0IE9iamVjdF0nKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0dmFyIGhhc0lzUHJvdG90eXBlT2YgPSBvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSAmJiBoYXNPd24uY2FsbChvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCAnaXNQcm90b3R5cGVPZicpO1xuXHQvLyBOb3Qgb3duIGNvbnN0cnVjdG9yIHByb3BlcnR5IG11c3QgYmUgT2JqZWN0XG5cdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0Ly8gT3duIHByb3BlcnRpZXMgYXJlIGVudW1lcmF0ZWQgZmlyc3RseSwgc28gdG8gc3BlZWQgdXAsXG5cdC8vIGlmIGxhc3Qgb25lIGlzIG93biwgdGhlbiBhbGwgcHJvcGVydGllcyBhcmUgb3duLlxuXHR2YXIga2V5O1xuXHRmb3IgKGtleSBpbiBvYmopIHsvKiovfVxuXG5cdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnYm9vbGVhbicpIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sxXSB8fCB7fTtcblx0XHQvLyBza2lwIHRoZSBib29sZWFuIGFuZCB0aGUgdGFyZ2V0XG5cdFx0aSA9IDI7XG5cdH0gZWxzZSBpZiAoKHR5cGVvZiB0YXJnZXQgIT09ICdvYmplY3QnICYmIHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHx8IHRhcmdldCA9PSBudWxsKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHRmb3IgKDsgaSA8IGxlbmd0aDsgKytpKSB7XG5cdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKG9wdGlvbnMgIT0gbnVsbCkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yIChuYW1lIGluIG9wdGlvbnMpIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0W25hbWVdO1xuXHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHQvLyBSZWN1cnNlIGlmIHdlJ3JlIG1lcmdpbmcgcGxhaW4gb2JqZWN0cyBvciBhcnJheXNcblx0XHRcdFx0XHRpZiAoZGVlcCAmJiBjb3B5ICYmIChpc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGlzQXJyYXkoY29weSkpKSkge1xuXHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgaXNQbGFpbk9iamVjdChzcmMpID8gc3JjIDoge307XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gZXh0ZW5kKGRlZXAsIGNsb25lLCBjb3B5KTtcblxuXHRcdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHR5cGVvZiBjb3B5ICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vZXh0ZW5kL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cmljdFVyaUVuY29kZSA9IHJlcXVpcmUoJ3N0cmljdC11cmktZW5jb2RlJyk7XG52YXIgb2JqZWN0QXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xuXG5mdW5jdGlvbiBlbmNvZGUodmFsdWUsIG9wdHMpIHtcblx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0cmV0dXJuIG9wdHMuc3RyaWN0ID8gc3RyaWN0VXJpRW5jb2RlKHZhbHVlKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG5cdH1cblxuXHRyZXR1cm4gdmFsdWU7XG59XG5cbmV4cG9ydHMuZXh0cmFjdCA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuIHN0ci5zcGxpdCgnPycpWzFdIHx8ICcnO1xufTtcblxuZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uIChzdHIpIHtcblx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9pc3N1ZXMvNDdcblx0dmFyIHJldCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cblx0aWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG5cdFx0cmV0dXJuIHJldDtcblx0fVxuXG5cdHN0ciA9IHN0ci50cmltKCkucmVwbGFjZSgvXihcXD98I3wmKS8sICcnKTtcblxuXHRpZiAoIXN0cikge1xuXHRcdHJldHVybiByZXQ7XG5cdH1cblxuXHRzdHIuc3BsaXQoJyYnKS5mb3JFYWNoKGZ1bmN0aW9uIChwYXJhbSkge1xuXHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0Ly8gRmlyZWZveCAocHJlIDQwKSBkZWNvZGVzIGAlM0RgIHRvIGA9YFxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL3B1bGwvMzdcblx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHR2YXIgdmFsID0gcGFydHMubGVuZ3RoID4gMCA/IHBhcnRzLmpvaW4oJz0nKSA6IHVuZGVmaW5lZDtcblxuXHRcdGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXG5cdFx0Ly8gbWlzc2luZyBgPWAgc2hvdWxkIGJlIGBudWxsYDpcblx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0dmFsID0gdmFsID09PSB1bmRlZmluZWQgPyBudWxsIDogZGVjb2RlVVJJQ29tcG9uZW50KHZhbCk7XG5cblx0XHRpZiAocmV0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0cmV0W2tleV0gPSB2YWw7XG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJldFtrZXldKSkge1xuXHRcdFx0cmV0W2tleV0ucHVzaCh2YWwpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXRba2V5XSA9IFtyZXRba2V5XSwgdmFsXTtcblx0XHR9XG5cdH0pO1xuXG5cdHJldHVybiByZXQ7XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcblx0dmFyIGRlZmF1bHRzID0ge1xuXHRcdGVuY29kZTogdHJ1ZSxcblx0XHRzdHJpY3Q6IHRydWVcblx0fTtcblxuXHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblxuXHRyZXR1cm4gb2JqID8gT2JqZWN0LmtleXMob2JqKS5zb3J0KCkubWFwKGZ1bmN0aW9uIChrZXkpIHtcblx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cblx0XHRpZiAodmFsID09PSB1bmRlZmluZWQpIHtcblx0XHRcdHJldHVybiAnJztcblx0XHR9XG5cblx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cyk7XG5cdFx0fVxuXG5cdFx0aWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0XHR2YWwuc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uICh2YWwyKSB7XG5cdFx0XHRcdGlmICh2YWwyID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodmFsMiA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdHJlc3VsdC5wdXNoKGVuY29kZShrZXksIG9wdHMpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQucHVzaChlbmNvZGUoa2V5LCBvcHRzKSArICc9JyArIGVuY29kZSh2YWwyLCBvcHRzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZW5jb2RlKGtleSwgb3B0cykgKyAnPScgKyBlbmNvZGUodmFsLCBvcHRzKTtcblx0fSkuZmlsdGVyKGZ1bmN0aW9uICh4KSB7XG5cdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0fSkuam9pbignJicpIDogJyc7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcXVlcnktc3RyaW5nL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyKS5yZXBsYWNlKC9bIScoKSpdL2csIGZ1bmN0aW9uIChjKSB7XG5cdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0fSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vc3RyaWN0LXVyaS1lbmNvZGUvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vYmplY3QtYXNzaWduL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiKGZ1bmN0aW9uKHNlbGYpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChzZWxmLmZldGNoKSB7XG4gICAgcmV0dXJuXG4gIH1cblxuICB2YXIgc3VwcG9ydCA9IHtcbiAgICBzZWFyY2hQYXJhbXM6ICdVUkxTZWFyY2hQYXJhbXMnIGluIHNlbGYsXG4gICAgaXRlcmFibGU6ICdTeW1ib2wnIGluIHNlbGYgJiYgJ2l0ZXJhdG9yJyBpbiBTeW1ib2wsXG4gICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgbmV3IEJsb2IoKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgIH0pKCksXG4gICAgZm9ybURhdGE6ICdGb3JtRGF0YScgaW4gc2VsZixcbiAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICBuYW1lID0gU3RyaW5nKG5hbWUpXG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLlxcXl9gfH5dL2kudGVzdChuYW1lKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBjaGFyYWN0ZXIgaW4gaGVhZGVyIGZpZWxkIG5hbWUnKVxuICAgIH1cbiAgICByZXR1cm4gbmFtZS50b0xvd2VyQ2FzZSgpXG4gIH1cblxuICBmdW5jdGlvbiBub3JtYWxpemVWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlXG4gIH1cblxuICAvLyBCdWlsZCBhIGRlc3RydWN0aXZlIGl0ZXJhdG9yIGZvciB0aGUgdmFsdWUgbGlzdFxuICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuICAgIHZhciBpdGVyYXRvciA9IHtcbiAgICAgIG5leHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvclxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpdGVyYXRvclxuICB9XG5cbiAgZnVuY3Rpb24gSGVhZGVycyhoZWFkZXJzKSB7XG4gICAgdGhpcy5tYXAgPSB7fVxuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpXG4gICAgICB9LCB0aGlzKVxuXG4gICAgfSBlbHNlIGlmIChoZWFkZXJzKSB7XG4gICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhoZWFkZXJzKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcbiAgICAgIH0sIHRoaXMpXG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuICAgIHZhbHVlID0gbm9ybWFsaXplVmFsdWUodmFsdWUpXG4gICAgdmFyIGxpc3QgPSB0aGlzLm1hcFtuYW1lXVxuICAgIGlmICghbGlzdCkge1xuICAgICAgbGlzdCA9IFtdXG4gICAgICB0aGlzLm1hcFtuYW1lXSA9IGxpc3RcbiAgICB9XG4gICAgbGlzdC5wdXNoKHZhbHVlKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGVbJ2RlbGV0ZSddID0gZnVuY3Rpb24obmFtZSkge1xuICAgIGRlbGV0ZSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuICAgIHJldHVybiB2YWx1ZXMgPyB2YWx1ZXNbMF0gOiBudWxsXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5nZXRBbGwgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldIHx8IFtdXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldID0gW25vcm1hbGl6ZVZhbHVlKHZhbHVlKV1cbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbihjYWxsYmFjaywgdGhpc0FyZykge1xuICAgIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMubWFwKS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgIHRoaXMubWFwW25hbWVdLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB2YWx1ZSwgbmFtZSwgdGhpcylcbiAgICAgIH0sIHRoaXMpXG4gICAgfSwgdGhpcylcbiAgfVxuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXVxuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkgeyBpdGVtcy5wdXNoKG5hbWUpIH0pXG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHsgaXRlbXMucHVzaCh2YWx1ZSkgfSlcbiAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG4gIH1cblxuICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGl0ZW1zID0gW11cbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChbbmFtZSwgdmFsdWVdKSB9KVxuICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcbiAgfVxuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXNcbiAgfVxuXG4gIGZ1bmN0aW9uIGNvbnN1bWVkKGJvZHkpIHtcbiAgICBpZiAoYm9keS5ib2R5VXNlZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuICAgIH1cbiAgICBib2R5LmJvZHlVc2VkID0gdHJ1ZVxuICB9XG5cbiAgZnVuY3Rpb24gZmlsZVJlYWRlclJlYWR5KHJlYWRlcikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHJlYWRlci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KVxuICAgICAgfVxuICAgICAgcmVhZGVyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcilcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuICAgIHJldHVybiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpXG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcbiAgICByZXR1cm4gZmlsZVJlYWRlclJlYWR5KHJlYWRlcilcbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlXG5cbiAgICB0aGlzLl9pbml0Qm9keSA9IGZ1bmN0aW9uKGJvZHkpIHtcbiAgICAgIHRoaXMuX2JvZHlJbml0ID0gYm9keVxuICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHlcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuZm9ybURhdGEgJiYgRm9ybURhdGEucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUZvcm1EYXRhID0gYm9keVxuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSBib2R5LnRvU3RyaW5nKClcbiAgICAgIH0gZWxzZSBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIEFycmF5QnVmZmVyLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIC8vIE9ubHkgc3VwcG9ydCBBcnJheUJ1ZmZlcnMgZm9yIFBPU1QgbWV0aG9kLlxuICAgICAgICAvLyBSZWNlaXZpbmcgQXJyYXlCdWZmZXJzIGhhcHBlbnMgdmlhIEJsb2JzLCBpbnN0ZWFkLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bnN1cHBvcnRlZCBCb2R5SW5pdCB0eXBlJylcbiAgICAgIH1cblxuICAgICAgaWYgKCF0aGlzLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKSkge1xuICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ3RleHQvcGxhaW47Y2hhcnNldD1VVEYtOCcpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUJsb2IgJiYgdGhpcy5fYm9keUJsb2IudHlwZSkge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdXBwb3J0LmJsb2IpIHtcbiAgICAgIHRoaXMuYmxvYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hcnJheUJ1ZmZlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG4gICAgICB9XG5cbiAgICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiByZWFkQmxvYkFzVGV4dCh0aGlzLl9ib2R5QmxvYilcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLl9ib2R5VGV4dClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHJlamVjdGVkID0gY29uc3VtZWQodGhpcylcbiAgICAgICAgcmV0dXJuIHJlamVjdGVkID8gcmVqZWN0ZWQgOiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcbiAgICAgIHRoaXMuZm9ybURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oZGVjb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMudGV4dCgpLnRoZW4oSlNPTi5wYXJzZSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddXG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplTWV0aG9kKG1ldGhvZCkge1xuICAgIHZhciB1cGNhc2VkID0gbWV0aG9kLnRvVXBwZXJDYXNlKClcbiAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICAgIHZhciBib2R5ID0gb3B0aW9ucy5ib2R5XG4gICAgaWYgKFJlcXVlc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5wdXQpKSB7XG4gICAgICBpZiAoaW5wdXQuYm9keVVzZWQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQWxyZWFkeSByZWFkJylcbiAgICAgIH1cbiAgICAgIHRoaXMudXJsID0gaW5wdXQudXJsXG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHNcbiAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKGlucHV0LmhlYWRlcnMpXG4gICAgICB9XG4gICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZVxuICAgICAgaWYgKCFib2R5KSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcbiAgICAgICAgaW5wdXQuYm9keVVzZWQgPSB0cnVlXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gaW5wdXRcbiAgICB9XG5cbiAgICB0aGlzLmNyZWRlbnRpYWxzID0gb3B0aW9ucy5jcmVkZW50aWFscyB8fCB0aGlzLmNyZWRlbnRpYWxzIHx8ICdvbWl0J1xuICAgIGlmIChvcHRpb25zLmhlYWRlcnMgfHwgIXRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIH1cbiAgICB0aGlzLm1ldGhvZCA9IG5vcm1hbGl6ZU1ldGhvZChvcHRpb25zLm1ldGhvZCB8fCB0aGlzLm1ldGhvZCB8fCAnR0VUJylcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbFxuXG4gICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQm9keSBub3QgYWxsb3dlZCBmb3IgR0VUIG9yIEhFQUQgcmVxdWVzdHMnKVxuICAgIH1cbiAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuICB9XG5cbiAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3QodGhpcylcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKVxuICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgIHZhciBzcGxpdCA9IGJ5dGVzLnNwbGl0KCc9JylcbiAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG4gICAgICAgIHZhciB2YWx1ZSA9IHNwbGl0LmpvaW4oJz0nKS5yZXBsYWNlKC9cXCsvZywgJyAnKVxuICAgICAgICBmb3JtLmFwcGVuZChkZWNvZGVVUklDb21wb25lbnQobmFtZSksIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gZm9ybVxuICB9XG5cbiAgZnVuY3Rpb24gaGVhZGVycyh4aHIpIHtcbiAgICB2YXIgaGVhZCA9IG5ldyBIZWFkZXJzKClcbiAgICB2YXIgcGFpcnMgPSAoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpIHx8ICcnKS50cmltKCkuc3BsaXQoJ1xcbicpXG4gICAgcGFpcnMuZm9yRWFjaChmdW5jdGlvbihoZWFkZXIpIHtcbiAgICAgIHZhciBzcGxpdCA9IGhlYWRlci50cmltKCkuc3BsaXQoJzonKVxuICAgICAgdmFyIGtleSA9IHNwbGl0LnNoaWZ0KCkudHJpbSgpXG4gICAgICB2YXIgdmFsdWUgPSBzcGxpdC5qb2luKCc6JykudHJpbSgpXG4gICAgICBoZWFkLmFwcGVuZChrZXksIHZhbHVlKVxuICAgIH0pXG4gICAgcmV0dXJuIGhlYWRcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXF1ZXN0LnByb3RvdHlwZSlcblxuICBmdW5jdGlvbiBSZXNwb25zZShib2R5SW5pdCwgb3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucykge1xuICAgICAgb3B0aW9ucyA9IHt9XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG4gICAgdGhpcy5zdGF0dXMgPSBvcHRpb25zLnN0YXR1c1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDBcbiAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzID8gb3B0aW9ucy5oZWFkZXJzIDogbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuICAgIHRoaXMudXJsID0gb3B0aW9ucy51cmwgfHwgJydcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcbiAgfVxuXG4gIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cbiAgUmVzcG9uc2UucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcbiAgICAgIHN0YXR1c1RleHQ6IHRoaXMuc3RhdHVzVGV4dCxcbiAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG4gICAgICB1cmw6IHRoaXMudXJsXG4gICAgfSlcbiAgfVxuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcbiAgICByZXNwb25zZS50eXBlID0gJ2Vycm9yJ1xuICAgIHJldHVybiByZXNwb25zZVxuICB9XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdXG5cbiAgUmVzcG9uc2UucmVkaXJlY3QgPSBmdW5jdGlvbih1cmwsIHN0YXR1cykge1xuICAgIGlmIChyZWRpcmVjdFN0YXR1c2VzLmluZGV4T2Yoc3RhdHVzKSA9PT0gLTEpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcbiAgfVxuXG4gIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcbiAgc2VsZi5SZXF1ZXN0ID0gUmVxdWVzdFxuICBzZWxmLlJlc3BvbnNlID0gUmVzcG9uc2VcblxuICBzZWxmLmZldGNoID0gZnVuY3Rpb24oaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdFxuICAgICAgaWYgKFJlcXVlc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5wdXQpICYmICFpbml0KSB7XG4gICAgICAgIHJlcXVlc3QgPSBpbnB1dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcblxuICAgICAgZnVuY3Rpb24gcmVzcG9uc2VVUkwoKSB7XG4gICAgICAgIGlmICgncmVzcG9uc2VVUkwnIGluIHhocikge1xuICAgICAgICAgIHJldHVybiB4aHIucmVzcG9uc2VVUkxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF2b2lkIHNlY3VyaXR5IHdhcm5pbmdzIG9uIGdldFJlc3BvbnNlSGVhZGVyIHdoZW4gbm90IGFsbG93ZWQgYnkgQ09SU1xuICAgICAgICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuICAgICAgICAgIHJldHVybiB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1gtUmVxdWVzdC1VUkwnKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuICAgICAgICAgIHN0YXR1c1RleHQ6IHhoci5zdGF0dXNUZXh0LFxuICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMoeGhyKSxcbiAgICAgICAgICB1cmw6IHJlc3BvbnNlVVJMKClcbiAgICAgICAgfVxuICAgICAgICB2YXIgYm9keSA9ICdyZXNwb25zZScgaW4geGhyID8geGhyLnJlc3BvbnNlIDogeGhyLnJlc3BvbnNlVGV4dFxuICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcbiAgICAgIH1cblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuICAgICAgfVxuXG4gICAgICB4aHIub3BlbihyZXF1ZXN0Lm1ldGhvZCwgcmVxdWVzdC51cmwsIHRydWUpXG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWVcbiAgICAgIH1cblxuICAgICAgaWYgKCdyZXNwb25zZVR5cGUnIGluIHhociAmJiBzdXBwb3J0LmJsb2IpIHtcbiAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuICAgICAgfVxuXG4gICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSlcbiAgICAgIH0pXG5cbiAgICAgIHhoci5zZW5kKHR5cGVvZiByZXF1ZXN0Ll9ib2R5SW5pdCA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogcmVxdWVzdC5fYm9keUluaXQpXG4gICAgfSlcbiAgfVxuICBzZWxmLmZldGNoLnBvbHlmaWxsID0gdHJ1ZVxufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vd2hhdHdnLWZldGNoL2ZldGNoLmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyohXG4gKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG4gKiBAY29weXJpZ2h0IENvcHlyaWdodCAoYykgMjAxNCBZZWh1ZGEgS2F0eiwgVG9tIERhbGUsIFN0ZWZhbiBQZW5uZXIgYW5kIGNvbnRyaWJ1dG9ycyAoQ29udmVyc2lvbiB0byBFUzYgQVBJIGJ5IEpha2UgQXJjaGliYWxkKVxuICogQGxpY2Vuc2UgICBMaWNlbnNlZCB1bmRlciBNSVQgbGljZW5zZVxuICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuICogQHZlcnNpb24gICAzLjMuMVxuICovXG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gICAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICAgIHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG4gICAgKGdsb2JhbC5FUzZQcm9taXNlID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBvYmplY3RPckZ1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nO1xufVxuXG52YXIgX2lzQXJyYXkgPSB1bmRlZmluZWQ7XG5pZiAoIUFycmF5LmlzQXJyYXkpIHtcbiAgX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG4gIH07XG59IGVsc2Uge1xuICBfaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG59XG5cbnZhciBpc0FycmF5ID0gX2lzQXJyYXk7XG5cbnZhciBsZW4gPSAwO1xudmFyIHZlcnR4TmV4dCA9IHVuZGVmaW5lZDtcbnZhciBjdXN0b21TY2hlZHVsZXJGbiA9IHVuZGVmaW5lZDtcblxudmFyIGFzYXAgPSBmdW5jdGlvbiBhc2FwKGNhbGxiYWNrLCBhcmcpIHtcbiAgcXVldWVbbGVuXSA9IGNhbGxiYWNrO1xuICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcbiAgbGVuICs9IDI7XG4gIGlmIChsZW4gPT09IDIpIHtcbiAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG4gICAgLy8gSWYgYWRkaXRpb25hbCBjYWxsYmFja3MgYXJlIHF1ZXVlZCBiZWZvcmUgdGhlIHF1ZXVlIGlzIGZsdXNoZWQsIHRoZXlcbiAgICAvLyB3aWxsIGJlIHByb2Nlc3NlZCBieSB0aGlzIGZsdXNoIHRoYXQgd2UgYXJlIHNjaGVkdWxpbmcuXG4gICAgaWYgKGN1c3RvbVNjaGVkdWxlckZuKSB7XG4gICAgICBjdXN0b21TY2hlZHVsZXJGbihmbHVzaCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNjaGVkdWxlRmx1c2goKTtcbiAgICB9XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gIGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbn1cblxuZnVuY3Rpb24gc2V0QXNhcChhc2FwRm4pIHtcbiAgYXNhcCA9IGFzYXBGbjtcbn1cblxudmFyIGJyb3dzZXJXaW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IHVuZGVmaW5lZDtcbnZhciBicm93c2VyR2xvYmFsID0gYnJvd3NlcldpbmRvdyB8fCB7fTtcbnZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgaXNOb2RlID0gdHlwZW9mIHNlbGYgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiAoe30pLnRvU3RyaW5nLmNhbGwocHJvY2VzcykgPT09ICdbb2JqZWN0IHByb2Nlc3NdJztcblxuLy8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcbnZhciBpc1dvcmtlciA9IHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGltcG9ydFNjcmlwdHMgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gJ3VuZGVmaW5lZCc7XG5cbi8vIG5vZGVcbmZ1bmN0aW9uIHVzZU5leHRUaWNrKCkge1xuICAvLyBub2RlIHZlcnNpb24gMC4xMC54IGRpc3BsYXlzIGEgZGVwcmVjYXRpb24gd2FybmluZyB3aGVuIG5leHRUaWNrIGlzIHVzZWQgcmVjdXJzaXZlbHlcbiAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICB9O1xufVxuXG4vLyB2ZXJ0eFxuZnVuY3Rpb24gdXNlVmVydHhUaW1lcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VNdXRhdGlvbk9ic2VydmVyKCkge1xuICB2YXIgaXRlcmF0aW9ucyA9IDA7XG4gIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG4gIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBvYnNlcnZlci5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIG5vZGUuZGF0YSA9IGl0ZXJhdGlvbnMgPSArK2l0ZXJhdGlvbnMgJSAyO1xuICB9O1xufVxuXG4vLyB3ZWIgd29ya2VyXG5mdW5jdGlvbiB1c2VNZXNzYWdlQ2hhbm5lbCgpIHtcbiAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcbiAgLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gZXM2LXByb21pc2Ugd2lsbCBiZSB1bmFmZmVjdGVkIGJ5XG4gIC8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxuICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGdsb2JhbFNldFRpbWVvdXQoZmx1c2gsIDEpO1xuICB9O1xufVxuXG52YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5mdW5jdGlvbiBmbHVzaCgpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gMikge1xuICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuICAgIHZhciBhcmcgPSBxdWV1ZVtpICsgMV07XG5cbiAgICBjYWxsYmFjayhhcmcpO1xuXG4gICAgcXVldWVbaV0gPSB1bmRlZmluZWQ7XG4gICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgbGVuID0gMDtcbn1cblxuZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuICB0cnkge1xuICAgIHZhciByID0gcmVxdWlyZTtcbiAgICB2YXIgdmVydHggPSByKCd2ZXJ0eCcpO1xuICAgIHZlcnR4TmV4dCA9IHZlcnR4LnJ1bk9uTG9vcCB8fCB2ZXJ0eC5ydW5PbkNvbnRleHQ7XG4gICAgcmV0dXJuIHVzZVZlcnR4VGltZXIoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB1c2VTZXRUaW1lb3V0KCk7XG4gIH1cbn1cblxudmFyIHNjaGVkdWxlRmx1c2ggPSB1bmRlZmluZWQ7XG4vLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuaWYgKGlzTm9kZSkge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTmV4dFRpY2soKTtcbn0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU11dGF0aW9uT2JzZXJ2ZXIoKTtcbn0gZWxzZSBpZiAoaXNXb3JrZXIpIHtcbiAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG59IGVsc2UgaWYgKGJyb3dzZXJXaW5kb3cgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgcmVxdWlyZSA9PT0gJ2Z1bmN0aW9uJykge1xuICBzY2hlZHVsZUZsdXNoID0gYXR0ZW1wdFZlcnR4KCk7XG59IGVsc2Uge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xufVxuXG5mdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBfYXJndW1lbnRzID0gYXJndW1lbnRzO1xuXG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGlmIChjaGlsZFtQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFrZVByb21pc2UoY2hpbGQpO1xuICB9XG5cbiAgdmFyIF9zdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cbiAgaWYgKF9zdGF0ZSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSBfYXJndW1lbnRzW19zdGF0ZSAtIDFdO1xuICAgICAgYXNhcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpbnZva2VDYWxsYmFjayhfc3RhdGUsIGNoaWxkLCBjYWxsYmFjaywgcGFyZW50Ll9yZXN1bHQpO1xuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkO1xufVxuXG4vKipcbiAgYFByb21pc2UucmVzb2x2ZWAgcmV0dXJucyBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSByZXNvbHZlZCB3aXRoIHRoZVxuICBwYXNzZWQgYHZhbHVlYC4gSXQgaXMgc2hvcnRoYW5kIGZvciB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHJlc29sdmUoMSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEluc3RlYWQgb2Ygd3JpdGluZyB0aGUgYWJvdmUsIHlvdXIgY29kZSBub3cgc2ltcGx5IGJlY29tZXMgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKDEpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gdmFsdWUgPT09IDFcbiAgfSk7XG4gIGBgYFxuXG4gIEBtZXRob2QgcmVzb2x2ZVxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSB2YWx1ZSB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgd2l0aFxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIGZ1bGZpbGxlZCB3aXRoIHRoZSBnaXZlblxuICBgdmFsdWVgXG4qL1xuZnVuY3Rpb24gcmVzb2x2ZShvYmplY3QpIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblxuICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gQ29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gb2JqZWN0O1xuICB9XG5cbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZXNvbHZlKHByb21pc2UsIG9iamVjdCk7XG4gIHJldHVybiBwcm9taXNlO1xufVxuXG52YXIgUFJPTUlTRV9JRCA9IE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cmluZygxNik7XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG52YXIgUEVORElORyA9IHZvaWQgMDtcbnZhciBGVUxGSUxMRUQgPSAxO1xudmFyIFJFSkVDVEVEID0gMjtcblxudmFyIEdFVF9USEVOX0VSUk9SID0gbmV3IEVycm9yT2JqZWN0KCk7XG5cbmZ1bmN0aW9uIHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xufVxuXG5mdW5jdGlvbiBjYW5ub3RSZXR1cm5Pd24oKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG59XG5cbmZ1bmN0aW9uIGdldFRoZW4ocHJvbWlzZSkge1xuICB0cnkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW47XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcbiAgICByZXR1cm4gR0VUX1RIRU5fRVJST1I7XG4gIH1cbn1cblxuZnVuY3Rpb24gdHJ5VGhlbih0aGVuLCB2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKSB7XG4gIHRyeSB7XG4gICAgdGhlbi5jYWxsKHZhbHVlLCBmdWxmaWxsbWVudEhhbmRsZXIsIHJlamVjdGlvbkhhbmRsZXIpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlLCB0aGVuKSB7XG4gIGFzYXAoZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG4gICAgdmFyIGVycm9yID0gdHJ5VGhlbih0aGVuLCB0aGVuYWJsZSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoc2VhbGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNlYWxlZCA9IHRydWU7XG4gICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG4gICAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cbiAgICBpZiAoIXNlYWxlZCAmJiBlcnJvcikge1xuICAgICAgc2VhbGVkID0gdHJ1ZTtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH1cbiAgfSwgcHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG4gIGlmICh0aGVuYWJsZS5fc3RhdGUgPT09IEZVTEZJTExFRCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSwgdGhlbiQkKSB7XG4gIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmIHRoZW4kJCA9PT0gdGhlbiAmJiBtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yLnJlc29sdmUgPT09IHJlc29sdmUpIHtcbiAgICBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAodGhlbiQkID09PSBHRVRfVEhFTl9FUlJPUikge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBHRVRfVEhFTl9FUlJPUi5lcnJvcik7XG4gICAgfSBlbHNlIGlmICh0aGVuJCQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhlbiQkKSkge1xuICAgICAgaGFuZGxlRm9yZWlnblRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZ1bGZpbGwocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgIF9yZWplY3QocHJvbWlzZSwgc2VsZkZ1bGZpbGxtZW50KCkpO1xuICB9IGVsc2UgaWYgKG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCB2YWx1ZSwgZ2V0VGhlbih2YWx1ZSkpO1xuICB9IGVsc2Uge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2hSZWplY3Rpb24ocHJvbWlzZSkge1xuICBpZiAocHJvbWlzZS5fb25lcnJvcikge1xuICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcbiAgfVxuXG4gIHB1Ymxpc2gocHJvbWlzZSk7XG59XG5cbmZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcHJvbWlzZS5fcmVzdWx0ID0gdmFsdWU7XG4gIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuXG4gIGlmIChwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggIT09IDApIHtcbiAgICBhc2FwKHB1Ymxpc2gsIHByb21pc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgYXNhcChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBfc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICB2YXIgbGVuZ3RoID0gX3N1YnNjcmliZXJzLmxlbmd0aDtcblxuICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXG4gIF9zdWJzY3JpYmVyc1tsZW5ndGhdID0gY2hpbGQ7XG4gIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIFJFSkVDVEVEXSA9IG9uUmVqZWN0aW9uO1xuXG4gIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuICAgIGFzYXAocHVibGlzaCwgcGFyZW50KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoKHByb21pc2UpIHtcbiAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG4gIHZhciBzZXR0bGVkID0gcHJvbWlzZS5fc3RhdGU7XG5cbiAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjaGlsZCA9IHVuZGVmaW5lZCxcbiAgICAgIGNhbGxiYWNrID0gdW5kZWZpbmVkLFxuICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3Vic2NyaWJlcnMubGVuZ3RoOyBpICs9IDMpIHtcbiAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuICAgIGNhbGxiYWNrID0gc3Vic2NyaWJlcnNbaSArIHNldHRsZWRdO1xuXG4gICAgaWYgKGNoaWxkKSB7XG4gICAgICBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBjaGlsZCwgY2FsbGJhY2ssIGRldGFpbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG4gICAgfVxuICB9XG5cbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoID0gMDtcbn1cblxuZnVuY3Rpb24gRXJyb3JPYmplY3QoKSB7XG4gIHRoaXMuZXJyb3IgPSBudWxsO1xufVxuXG52YXIgVFJZX0NBVENIX0VSUk9SID0gbmV3IEVycm9yT2JqZWN0KCk7XG5cbmZ1bmN0aW9uIHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIFRSWV9DQVRDSF9FUlJPUi5lcnJvciA9IGU7XG4gICAgcmV0dXJuIFRSWV9DQVRDSF9FUlJPUjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gIHZhciBoYXNDYWxsYmFjayA9IGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgdmFsdWUgPSB1bmRlZmluZWQsXG4gICAgICBlcnJvciA9IHVuZGVmaW5lZCxcbiAgICAgIHN1Y2NlZWRlZCA9IHVuZGVmaW5lZCxcbiAgICAgIGZhaWxlZCA9IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzQ2FsbGJhY2spIHtcbiAgICB2YWx1ZSA9IHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXG4gICAgaWYgKHZhbHVlID09PSBUUllfQ0FUQ0hfRVJST1IpIHtcbiAgICAgIGZhaWxlZCA9IHRydWU7XG4gICAgICBlcnJvciA9IHZhbHVlLmVycm9yO1xuICAgICAgdmFsdWUgPSBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWNjZWVkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkge1xuICAgICAgX3JlamVjdChwcm9taXNlLCBjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZGV0YWlsO1xuICAgIHN1Y2NlZWRlZCA9IHRydWU7XG4gIH1cblxuICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAvLyBub29wXG4gIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG4gICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG4gICAgfSBlbHNlIGlmIChmYWlsZWQpIHtcbiAgICAgIF9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgIH0gZWxzZSBpZiAoc2V0dGxlZCA9PT0gRlVMRklMTEVEKSB7XG4gICAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVQcm9taXNlKHByb21pc2UsIHJlc29sdmVyKSB7XG4gIHRyeSB7XG4gICAgcmVzb2x2ZXIoZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UodmFsdWUpIHtcbiAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgX3JlamVjdChwcm9taXNlLCBlKTtcbiAgfVxufVxuXG52YXIgaWQgPSAwO1xuZnVuY3Rpb24gbmV4dElkKCkge1xuICByZXR1cm4gaWQrKztcbn1cblxuZnVuY3Rpb24gbWFrZVByb21pc2UocHJvbWlzZSkge1xuICBwcm9taXNlW1BST01JU0VfSURdID0gaWQrKztcbiAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3Jlc3VsdCA9IHVuZGVmaW5lZDtcbiAgcHJvbWlzZS5fc3Vic2NyaWJlcnMgPSBbXTtcbn1cblxuZnVuY3Rpb24gRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICB0aGlzLnByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaWYgKCF0aGlzLnByb21pc2VbUFJPTUlTRV9JRF0pIHtcbiAgICBtYWtlUHJvbWlzZSh0aGlzLnByb21pc2UpO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgdGhpcy5faW5wdXQgPSBpbnB1dDtcbiAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICB0aGlzLl9yZW1haW5pbmcgPSBpbnB1dC5sZW5ndGg7XG5cbiAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG4gICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBfcmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsaWRhdGlvbkVycm9yKCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG59O1xuXG5FbnVtZXJhdG9yLnByb3RvdHlwZS5fZW51bWVyYXRlID0gZnVuY3Rpb24gKCkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gIHZhciBfaW5wdXQgPSB0aGlzLl9pbnB1dDtcblxuICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdGhpcy5fZWFjaEVudHJ5KF9pbnB1dFtpXSwgaSk7XG4gIH1cbn07XG5cbkVudW1lcmF0b3IucHJvdG90eXBlLl9lYWNoRW50cnkgPSBmdW5jdGlvbiAoZW50cnksIGkpIHtcbiAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuICB2YXIgcmVzb2x2ZSQkID0gYy5yZXNvbHZlO1xuXG4gIGlmIChyZXNvbHZlJCQgPT09IHJlc29sdmUpIHtcbiAgICB2YXIgX3RoZW4gPSBnZXRUaGVuKGVudHJ5KTtcblxuICAgIGlmIChfdGhlbiA9PT0gdGhlbiAmJiBlbnRyeS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcbiAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIF90aGVuICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl9yZW1haW5pbmctLTtcbiAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gUHJvbWlzZSkge1xuICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhub29wKTtcbiAgICAgIGhhbmRsZU1heWJlVGhlbmFibGUocHJvbWlzZSwgZW50cnksIF90aGVuKTtcbiAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fd2lsbFNldHRsZUF0KG5ldyBjKGZ1bmN0aW9uIChyZXNvbHZlJCQpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUkJChlbnRyeSk7XG4gICAgICB9KSwgaSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlJCQoZW50cnkpLCBpKTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX3NldHRsZWRBdCA9IGZ1bmN0aW9uIChzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzLnByb21pc2U7XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgdGhpcy5fcmVtYWluaW5nLS07XG5cbiAgICBpZiAoc3RhdGUgPT09IFJFSkVDVEVEKSB7XG4gICAgICBfcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcbiAgfVxufTtcblxuRW51bWVyYXRvci5wcm90b3R5cGUuX3dpbGxTZXR0bGVBdCA9IGZ1bmN0aW9uIChwcm9taXNlLCBpKSB7XG4gIHZhciBlbnVtZXJhdG9yID0gdGhpcztcblxuICBzdWJzY3JpYmUocHJvbWlzZSwgdW5kZWZpbmVkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChSRUpFQ1RFRCwgaSwgcmVhc29uKTtcbiAgfSk7XG59O1xuXG4vKipcbiAgYFByb21pc2UuYWxsYCBhY2NlcHRzIGFuIGFycmF5IG9mIHByb21pc2VzLCBhbmQgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoXG4gIGlzIGZ1bGZpbGxlZCB3aXRoIGFuIGFycmF5IG9mIGZ1bGZpbGxtZW50IHZhbHVlcyBmb3IgdGhlIHBhc3NlZCBwcm9taXNlcywgb3JcbiAgcmVqZWN0ZWQgd2l0aCB0aGUgcmVhc29uIG9mIHRoZSBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBiZSByZWplY3RlZC4gSXQgY2FzdHMgYWxsXG4gIGVsZW1lbnRzIG9mIHRoZSBwYXNzZWQgaXRlcmFibGUgdG8gcHJvbWlzZXMgYXMgaXQgcnVucyB0aGlzIGFsZ29yaXRobS5cblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVzb2x2ZSgyKTtcbiAgbGV0IHByb21pc2UzID0gcmVzb2x2ZSgzKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIFRoZSBhcnJheSBoZXJlIHdvdWxkIGJlIFsgMSwgMiwgMyBdO1xuICB9KTtcbiAgYGBgXG5cbiAgSWYgYW55IG9mIHRoZSBgcHJvbWlzZXNgIGdpdmVuIHRvIGBhbGxgIGFyZSByZWplY3RlZCwgdGhlIGZpcnN0IHByb21pc2VcbiAgdGhhdCBpcyByZWplY3RlZCB3aWxsIGJlIGdpdmVuIGFzIGFuIGFyZ3VtZW50IHRvIHRoZSByZXR1cm5lZCBwcm9taXNlcydzXG4gIHJlamVjdGlvbiBoYW5kbGVyLiBGb3IgZXhhbXBsZTpcblxuICBFeGFtcGxlOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UxID0gcmVzb2x2ZSgxKTtcbiAgbGV0IHByb21pc2UyID0gcmVqZWN0KG5ldyBFcnJvcihcIjJcIikpO1xuICBsZXQgcHJvbWlzZTMgPSByZWplY3QobmV3IEVycm9yKFwiM1wiKSk7XG4gIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXG4gIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcbiAgICAvLyBDb2RlIGhlcmUgbmV2ZXIgcnVucyBiZWNhdXNlIHRoZXJlIGFyZSByZWplY3RlZCBwcm9taXNlcyFcbiAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAvLyBlcnJvci5tZXNzYWdlID09PSBcIjJcIlxuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCBhbGxcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FycmF5fSBlbnRyaWVzIGFycmF5IG9mIHByb21pc2VzXG4gIEBwYXJhbSB7U3RyaW5nfSBsYWJlbCBvcHRpb25hbCBzdHJpbmcgZm9yIGxhYmVsaW5nIHRoZSBwcm9taXNlLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiBhbGwgYHByb21pc2VzYCBoYXZlIGJlZW5cbiAgZnVsZmlsbGVkLCBvciByZWplY3RlZCBpZiBhbnkgb2YgdGhlbSBiZWNvbWUgcmVqZWN0ZWQuXG4gIEBzdGF0aWNcbiovXG5mdW5jdGlvbiBhbGwoZW50cmllcykge1xuICByZXR1cm4gbmV3IEVudW1lcmF0b3IodGhpcywgZW50cmllcykucHJvbWlzZTtcbn1cblxuLyoqXG4gIGBQcm9taXNlLnJhY2VgIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaCBpcyBzZXR0bGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGVcbiAgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gc2V0dGxlLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAyJyk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gcmVzdWx0ID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIGl0IHdhcyByZXNvbHZlZCBiZWZvcmUgcHJvbWlzZTFcbiAgICAvLyB3YXMgcmVzb2x2ZWQuXG4gIH0pO1xuICBgYGBcblxuICBgUHJvbWlzZS5yYWNlYCBpcyBkZXRlcm1pbmlzdGljIGluIHRoYXQgb25seSB0aGUgc3RhdGUgb2YgdGhlIGZpcnN0XG4gIHNldHRsZWQgcHJvbWlzZSBtYXR0ZXJzLiBGb3IgZXhhbXBsZSwgZXZlbiBpZiBvdGhlciBwcm9taXNlcyBnaXZlbiB0byB0aGVcbiAgYHByb21pc2VzYCBhcnJheSBhcmd1bWVudCBhcmUgcmVzb2x2ZWQsIGJ1dCB0aGUgZmlyc3Qgc2V0dGxlZCBwcm9taXNlIGhhc1xuICBiZWNvbWUgcmVqZWN0ZWQgYmVmb3JlIHRoZSBvdGhlciBwcm9taXNlcyBiZWNhbWUgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAgcHJvbWlzZSB3aWxsIGJlY29tZSByZWplY3RlZDpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdwcm9taXNlIDInKSk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnNcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBwcm9taXNlIDIgYmVjYW1lIHJlamVjdGVkIGJlZm9yZVxuICAgIC8vIHByb21pc2UgMSBiZWNhbWUgZnVsZmlsbGVkXG4gIH0pO1xuICBgYGBcblxuICBBbiBleGFtcGxlIHJlYWwtd29ybGQgdXNlIGNhc2UgaXMgaW1wbGVtZW50aW5nIHRpbWVvdXRzOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgUHJvbWlzZS5yYWNlKFthamF4KCdmb28uanNvbicpLCB0aW1lb3V0KDUwMDApXSlcbiAgYGBgXG5cbiAgQG1ldGhvZCByYWNlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgdG8gb2JzZXJ2ZVxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB3aGljaCBzZXR0bGVzIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZmlyc3QgcGFzc2VkXG4gIHByb21pc2UgdG8gc2V0dGxlLlxuKi9cbmZ1bmN0aW9uIHJhY2UoZW50cmllcykge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmICghaXNBcnJheShlbnRyaWVzKSkge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAgYFByb21pc2UucmVqZWN0YCByZXR1cm5zIGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBwYXNzZWQgYHJlYXNvbmAuXG4gIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZWplY3QobmV3IEVycm9yKCdXSE9PUFMnKSk7XG4gIH0pO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuXG4gIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgLy8gQ29kZSBoZXJlIGRvZXNuJ3QgcnVuIGJlY2F1c2UgdGhlIHByb21pc2UgaXMgcmVqZWN0ZWQhXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gcmVhc29uLm1lc3NhZ2UgPT09ICdXSE9PUFMnXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlamVjdFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QW55fSByZWFzb24gdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkIHdpdGguXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIGdpdmVuIGByZWFzb25gLlxuKi9cbmZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cbiAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcbiAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG4gIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgcmV0dXJuIHByb21pc2U7XG59XG5cbmZ1bmN0aW9uIG5lZWRzUmVzb2x2ZXIoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbn1cblxuZnVuY3Rpb24gbmVlZHNOZXcoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG59XG5cbi8qKlxuICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICBUZXJtaW5vbG9neVxuICAtLS0tLS0tLS0tLVxuXG4gIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gIEJhc2ljIFVzYWdlOlxuICAtLS0tLS0tLS0tLS1cblxuICBgYGBqc1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgIC8vIG9uIGZhaWx1cmVcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBBZHZhbmNlZCBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICBgYGBqc1xuICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgYGBganNcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSk7XG4gIGBgYFxuXG4gIEBjbGFzcyBQcm9taXNlXG4gIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQGNvbnN0cnVjdG9yXG4qL1xuZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICB0aGlzW1BST01JU0VfSURdID0gbmV4dElkKCk7XG4gIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gIGlmIChub29wICE9PSByZXNvbHZlcikge1xuICAgIHR5cGVvZiByZXNvbHZlciAhPT0gJ2Z1bmN0aW9uJyAmJiBuZWVkc1Jlc29sdmVyKCk7XG4gICAgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UgPyBpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBuZWVkc05ldygpO1xuICB9XG59XG5cblByb21pc2UuYWxsID0gYWxsO1xuUHJvbWlzZS5yYWNlID0gcmFjZTtcblByb21pc2UucmVzb2x2ZSA9IHJlc29sdmU7XG5Qcm9taXNlLnJlamVjdCA9IHJlamVjdDtcblByb21pc2UuX3NldFNjaGVkdWxlciA9IHNldFNjaGVkdWxlcjtcblByb21pc2UuX3NldEFzYXAgPSBzZXRBc2FwO1xuUHJvbWlzZS5fYXNhcCA9IGFzYXA7XG5cblByb21pc2UucHJvdG90eXBlID0ge1xuICBjb25zdHJ1Y3RvcjogUHJvbWlzZSxcblxuICAvKipcbiAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgICB3aGljaCByZWdpc3RlcnMgY2FsbGJhY2tzIHRvIHJlY2VpdmUgZWl0aGVyIGEgcHJvbWlzZSdzIGV2ZW50dWFsIHZhbHVlIG9yIHRoZVxuICAgIHJlYXNvbiB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24odXNlcil7XG4gICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyB1c2VyIGlzIHVuYXZhaWxhYmxlLCBhbmQgeW91IGFyZSBnaXZlbiB0aGUgcmVhc29uIHdoeVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBDaGFpbmluZ1xuICAgIC0tLS0tLS0tXG4gIFxuICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gICAgcHJvbWlzZSBpcyByZXNvbHZlZCB3aXRoIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZpcnN0IHByb21pc2UncyBmdWxmaWxsbWVudFxuICAgIG9yIHJlamVjdGlvbiBoYW5kbGVyLCBvciByZWplY3RlZCBpZiB0aGUgaGFuZGxlciB0aHJvd3MgYW4gZXhjZXB0aW9uLlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuICAgICAgcmV0dXJuIHVzZXIubmFtZTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICByZXR1cm4gJ2RlZmF1bHQgbmFtZSc7XG4gICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcbiAgICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAgIC8vIHdpbGwgYmUgYCdkZWZhdWx0IG5hbWUnYFxuICAgIH0pO1xuICBcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG4gICAgICAvLyBJZiBgZmluZFVzZXJgIHJlamVjdGVkLCBgcmVhc29uYCB3aWxsIGJlICdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jy5cbiAgICB9KTtcbiAgICBgYGBcbiAgICBJZiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIGRvZXMgbm90IHNwZWNpZnkgYSByZWplY3Rpb24gaGFuZGxlciwgcmVqZWN0aW9uIHJlYXNvbnMgd2lsbCBiZSBwcm9wYWdhdGVkIGZ1cnRoZXIgZG93bnN0cmVhbS5cbiAgXG4gICAgYGBganNcbiAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBQZWRhZ29naWNhbEV4Y2VwdGlvbignVXBzdHJlYW0gZXJyb3InKTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgLy8gbmV2ZXIgcmVhY2hlZFxuICAgIH0pLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAvLyBuZXZlciByZWFjaGVkXG4gICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuICAgICAgLy8gVGhlIGBQZWRnYWdvY2lhbEV4Y2VwdGlvbmAgaXMgcHJvcGFnYXRlZCBhbGwgdGhlIHdheSBkb3duIHRvIGhlcmVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQXNzaW1pbGF0aW9uXG4gICAgLS0tLS0tLS0tLS0tXG4gIFxuICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG4gICAgcmV0cmlldmVkIGFzeW5jaHJvbm91c2x5LiBUaGlzIGNhbiBiZSBhY2hpZXZlZCBieSByZXR1cm5pbmcgYSBwcm9taXNlIGluIHRoZVxuICAgIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcbiAgICAgIC8vIElmIGBmaW5kQ29tbWVudHNCeUF1dGhvcmAgZnVsZmlsbHMsIHdlJ2xsIGhhdmUgdGhlIHZhbHVlIGhlcmVcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIFNpbXBsZSBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgXG4gICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IHJlc3VsdDtcbiAgXG4gICAgdHJ5IHtcbiAgICAgIHJlc3VsdCA9IGZpbmRSZXN1bHQoKTtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH1cbiAgICBgYGBcbiAgXG4gICAgRXJyYmFjayBFeGFtcGxlXG4gIFxuICAgIGBgYGpzXG4gICAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIC8vIGZhaWx1cmVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIHN1Y2Nlc3NcbiAgICAgIH1cbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgUHJvbWlzZSBFeGFtcGxlO1xuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgZmluZFJlc3VsdCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBBZHZhbmNlZCBFeGFtcGxlXG4gICAgLS0tLS0tLS0tLS0tLS1cbiAgXG4gICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICBcbiAgICBgYGBqYXZhc2NyaXB0XG4gICAgbGV0IGF1dGhvciwgYm9va3M7XG4gIFxuICAgIHRyeSB7XG4gICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG4gICAgICBib29rcyAgPSBmaW5kQm9va3NCeUF1dGhvcihhdXRob3IpO1xuICAgICAgLy8gc3VjY2Vzc1xuICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfVxuICAgIGBgYFxuICBcbiAgICBFcnJiYWNrIEV4YW1wbGVcbiAgXG4gICAgYGBganNcbiAgXG4gICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuICBcbiAgICB9XG4gIFxuICAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG4gIFxuICAgIH1cbiAgXG4gICAgZmluZEF1dGhvcihmdW5jdGlvbihhdXRob3IsIGVycil7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgLy8gZmFpbHVyZVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBmaW5kQm9vb2tzQnlBdXRob3IoYXV0aG9yLCBmdW5jdGlvbihib29rcywgZXJyKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgZm91bmRCb29rcyhib29rcyk7XG4gICAgICAgICAgICAgIH0gY2F0Y2gocmVhc29uKSB7XG4gICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc3VjY2Vzc1xuICAgICAgfVxuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBQcm9taXNlIEV4YW1wbGU7XG4gIFxuICAgIGBgYGphdmFzY3JpcHRcbiAgICBmaW5kQXV0aG9yKCkuXG4gICAgICB0aGVuKGZpbmRCb29rc0J5QXV0aG9yKS5cbiAgICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgICAvLyBmb3VuZCBib29rc1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICAgIH0pO1xuICAgIGBgYFxuICBcbiAgICBAbWV0aG9kIHRoZW5cbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvbkZ1bGZpbGxlZFxuICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0ZWRcbiAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gICAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cbiAgdGhlbjogdGhlbixcblxuICAvKipcbiAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG4gICAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cbiAgXG4gICAgYGBganNcbiAgICBmdW5jdGlvbiBmaW5kQXV0aG9yKCl7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgICB9XG4gIFxuICAgIC8vIHN5bmNocm9ub3VzXG4gICAgdHJ5IHtcbiAgICAgIGZpbmRBdXRob3IoKTtcbiAgICB9IGNhdGNoKHJlYXNvbikge1xuICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgICB9XG4gIFxuICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcbiAgICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAgIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gICAgfSk7XG4gICAgYGBgXG4gIFxuICAgIEBtZXRob2QgY2F0Y2hcbiAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGlvblxuICAgIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuICAnY2F0Y2gnOiBmdW5jdGlvbiBfY2F0Y2gob25SZWplY3Rpb24pIHtcbiAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcG9seWZpbGwoKSB7XG4gICAgdmFyIGxvY2FsID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gZ2xvYmFsO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGxvY2FsID0gc2VsZjtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gICAgaWYgKFApIHtcbiAgICAgICAgdmFyIHByb21pc2VUb1N0cmluZyA9IG51bGw7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBwcm9taXNlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBzaWxlbnRseSBpZ25vcmVkXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocHJvbWlzZVRvU3RyaW5nID09PSAnW29iamVjdCBQcm9taXNlXScgJiYgIVAuY2FzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWwuUHJvbWlzZSA9IFByb21pc2U7XG59XG5cbnBvbHlmaWxsKCk7XG4vLyBTdHJhbmdlIGNvbXBhdC4uXG5Qcm9taXNlLnBvbHlmaWxsID0gcG9seWZpbGw7XG5Qcm9taXNlLlByb21pc2UgPSBQcm9taXNlO1xuXG5yZXR1cm4gUHJvbWlzZTtcblxufSkpKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNi1wcm9taXNlLm1hcFxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2VzNi1wcm9taXNlL2Rpc3QvZXM2LXByb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogKGlnbm9yZWQpICovXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiB2ZXJ0eCAoaWdub3JlZClcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiEgQHByZXNlcnZlXG4gKiBIanNvbiB2Mi4zLjFcbiAqIGh0dHA6Ly9oanNvbi5vcmdcbiAqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE2IENocmlzdGlhbiBaYW5nbCwgTUlUIGxpY2Vuc2VcbiAqIERldGFpbHMgYW5kIGRvY3VtZW50YXRpb246XG4gKiBodHRwczovL2dpdGh1Yi5jb20vaGpzb24vaGpzb24tanNcbiAqXG4gKiBUaGlzIGNvZGUgaXMgYmFzZWQgb24gdGhlIHRoZSBKU09OIHZlcnNpb24gYnkgRG91Z2xhcyBDcm9ja2ZvcmQ6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vZG91Z2xhc2Nyb2NrZm9yZC9KU09OLWpzIChqc29uX3BhcnNlLmpzLCBqc29uMi5qcylcbiAqL1xuXG4vKlxuXG4gIFRoaXMgZmlsZSBjcmVhdGVzIGEgSGpzb24gb2JqZWN0OlxuXG5cbiAgICBIanNvbi5wYXJzZSh0ZXh0LCBvcHRpb25zKVxuXG4gICAgICBvcHRpb25zIHtcbiAgICAgICAga2VlcFdzYyAgICAgYm9vbGVhbiwga2VlcCB3aGl0ZSBzcGFjZSBhbmQgY29tbWVudHMuIFRoaXMgaXMgdXNlZnVsXG4gICAgICAgICAgICAgICAgICAgIGlmIHlvdSB3YW50IHRvIGVkaXQgYW4gaGpzb24gZmlsZSBhbmQgc2F2ZSBpdCB3aGlsZVxuICAgICAgICAgICAgICAgICAgICBwcmVzZXJ2aW5nIGNvbW1lbnRzIChkZWZhdWx0IGZhbHNlKVxuXG4gICAgICAgIGRzZiAgICAgICAgIGFycmF5IG9mIERTRiAoc2VlIEhqc29uLmRzZilcbiAgICAgIH1cblxuICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIEhqc29uIHRleHQgdG8gcHJvZHVjZSBhbiBvYmplY3Qgb3IgYXJyYXkuXG4gICAgICBJdCBjYW4gdGhyb3cgYSBTeW50YXhFcnJvciBleGNlcHRpb24uXG5cblxuICAgIEhqc29uLnN0cmluZ2lmeSh2YWx1ZSwgb3B0aW9ucylcblxuICAgICAgdmFsdWUgICAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cbiAgICAgIG9wdGlvbnMgeyAgICAgYWxsIG9wdGlvbnMgYXJlXG5cbiAgICAgICAga2VlcFdzYyAgICAgYm9vbGVhbiwga2VlcCB3aGl0ZSBzcGFjZS4gU2VlIHBhcnNlLlxuXG4gICAgICAgIGJyYWNlc1NhbWVMaW5lXG4gICAgICAgICAgICAgICAgICAgIGJvb2xlYW4sIG1ha2VzIGJyYWNlcyBhcHBlYXIgb24gdGhlIHNhbWUgbGluZSBhcyB0aGUga2V5XG4gICAgICAgICAgICAgICAgICAgIG5hbWUuIERlZmF1bHQgZmFsc2UuXG5cbiAgICAgICAgZW1pdFJvb3RCcmFjZXNcbiAgICAgICAgICAgICAgICAgICAgb2Jzb2xldGU6IHdpbGwgYWx3YXlzIGVtaXQgYnJhY2VzXG5cbiAgICAgICAgcXVvdGVzICAgICAgc3RyaW5nLCBjb250cm9scyBob3cgc3RyaW5ncyBhcmUgZGlzcGxheWVkLlxuICAgICAgICAgICAgICAgICAgICBcIm1pblwiICAgICAtIG5vIHF1b3RlcyB3aGVuZXZlciBwb3NzaWJsZSAoZGVmYXVsdClcbiAgICAgICAgICAgICAgICAgICAgXCJhbHdheXNcIiAgLSBhbHdheXMgdXNlIHF1b3Rlc1xuXG4gICAgICAgIHNwYWNlICAgICAgIHNwZWNpZmllcyB0aGUgaW5kZW50YXRpb24gb2YgbmVzdGVkIHN0cnVjdHVyZXMuIElmIGl0IGlzXG4gICAgICAgICAgICAgICAgICAgIGEgbnVtYmVyLCBpdCB3aWxsIHNwZWNpZnkgdGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50XG4gICAgICAgICAgICAgICAgICAgIGF0IGVhY2ggbGV2ZWwuIElmIGl0IGlzIGEgc3RyaW5nIChzdWNoIGFzICdcXHQnIG9yICcgICcpLFxuICAgICAgICAgICAgICAgICAgICBpdCBjb250YWlucyB0aGUgY2hhcmFjdGVycyB1c2VkIHRvIGluZGVudCBhdCBlYWNoIGxldmVsLlxuXG4gICAgICAgIGVvbCAgICAgICAgIHNwZWNpZmllcyB0aGUgRU9MIHNlcXVlbmNlIChkZWZhdWx0IGlzIHNldCBieVxuICAgICAgICAgICAgICAgICAgICBIanNvbi5zZXRFbmRPZkxpbmUoKSlcblxuICAgICAgICBjb2xvcnMgICAgICBib29sZWFuLCBvdXRwdXQgYXNjaWkgY29sb3IgY29kZXNcblxuICAgICAgICBkc2YgICAgICAgICBhcnJheSBvZiBEU0YgKHNlZSBIanNvbi5kc2YpXG4gICAgICB9XG5cbiAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIEhqc29uIHRleHQgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXG5cbiAgICAgIFZhbHVlcyB0aGF0IGRvIG5vdCBoYXZlIEpTT04gcmVwcmVzZW50YXRpb25zLCBzdWNoIGFzIHVuZGVmaW5lZCBvclxuICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcbiAgICAgIGRyb3BwZWQ7IGluIGFycmF5cyB0aGV5IHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBudWxsLlxuICAgICAgc3RyaW5naWZ5KHVuZGVmaW5lZCkgcmV0dXJucyB1bmRlZmluZWQuXG5cblxuICAgIEhqc29uLmVuZE9mTGluZSgpXG4gICAgSGpzb24uc2V0RW5kT2ZMaW5lKGVvbClcblxuICAgICAgR2V0cyBvciBzZXRzIHRoZSBzdHJpbmdpZnkgRU9MIHNlcXVlbmNlICgnXFxuJyBvciAnXFxyXFxuJykuXG4gICAgICBXaGVuIHJ1bm5pbmcgd2l0aCBub2RlLmpzIHRoaXMgZGVmYXVsdHMgdG8gb3MuRU9MLlxuXG5cbiAgICBIanNvbi5ydCB7IHBhcnNlLCBzdHJpbmdpZnkgfVxuXG4gICAgICBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gcm91bmR0cmlwIHlvdXIgY29tbWVudHMgd2hlbiByZWFkaW5nIGFuZCB1cGRhdGluZ1xuICAgICAgYSBjb25maWcgZmlsZS4gSXQgaXMgdGhlIHNhbWUgYXMgc3BlY2lmeWluZyB0aGUga2VlcFdzYyBvcHRpb24gZm9yIHRoZVxuICAgICAgcGFyc2UgYW5kIHN0cmluZ2lmeSBmdW5jdGlvbnMuXG5cblxuICAgIEhqc29uLnZlcnNpb25cblxuICAgICAgVGhlIHZlcnNpb24gb2YgdGhpcyBsaWJyYXJ5LlxuXG5cbiAgICBIanNvbi5kc2ZcblxuICAgICAgRG9tYWluIHNwZWNpZmljIGZvcm1hdHMgYXJlIGV4dGVuc2lvbnMgdG8gdGhlIEhqc29uIHN5bnRheCAoc2VlXG4gICAgICBoanNvbi5vcmcpLiBUaGVzZSBmb3JtYXRzIHdpbGwgYmUgcGFyc2VkIGFuZCBtYWRlIGF2YWlsYWJsZSB0b1xuICAgICAgdGhlIGFwcGxpY2F0aW9uIGluIHBsYWNlIG9mIHN0cmluZ3MgKGUuZy4gZW5hYmxlIG1hdGggdG8gYWxsb3dcbiAgICAgIE5hTiB2YWx1ZXMpLlxuXG4gICAgICBIanNvbi5kc2Ygb250YWlucyBzdGFuZGFyZCBEU0ZzIHRoYXQgY2FuIGJlIHBhc3NlZCB0byBwYXJzZVxuICAgICAgYW5kIHN0cmluZ2lmeS5cblxuXG4gICAgSGpzb24uZHNmLm1hdGgoKVxuXG4gICAgICBFbmFibGVzIHN1cHBvcnQgZm9yIEluZi9pbmYsIC1JbmYvLWluZiwgTmFuL25hTiBhbmQgLTAuXG4gICAgICBXaWxsIG91dHB1dCBhcyBJbmYsIC1JbmYsIE5hTiBhbmQgLTAuXG5cblxuICAgIEhqc29uLmRzZi5oZXgob3B0aW9ucylcblxuICAgICAgUGFyc2UgaGV4YWRlY2ltYWwgbnVtYmVycyBwcmVmaXhlZCB3aXRoIDB4LlxuICAgICAgc2V0IG9wdGlvbnMub3V0ID0gdHJ1ZSB0byBzdHJpbmdpZnkgX2FsbF8gaW50ZWdlcnMgYXMgaGV4LlxuXG5cbiAgICBIanNvbi5kc2YuZGF0ZShvcHRpb25zKVxuXG4gICAgICBzdXBwb3J0IElTTyBkYXRlc1xuXG5cbiAgVGhpcyBpcyBhIHJlZmVyZW5jZSBpbXBsZW1lbnRhdGlvbi4gWW91IGFyZSBmcmVlIHRvIGNvcHksIG1vZGlmeSwgb3JcbiAgcmVkaXN0cmlidXRlLlxuXG4qL1xuXG4vKmpzbGludCBub2RlOiB0cnVlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoXCIuL2hqc29uLWNvbW1vblwiKTtcbnZhciB2ZXJzaW9uID0gcmVxdWlyZShcIi4vaGpzb24tdmVyc2lvblwiKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoXCIuL2hqc29uLXBhcnNlXCIpO1xudmFyIHN0cmluZ2lmeSA9IHJlcXVpcmUoXCIuL2hqc29uLXN0cmluZ2lmeVwiKTtcbnZhciBjb21tZW50cyA9IHJlcXVpcmUoXCIuL2hqc29uLWNvbW1lbnRzXCIpO1xudmFyIGRzZiA9IHJlcXVpcmUoXCIuL2hqc29uLWRzZlwiKTtcblxubW9kdWxlLmV4cG9ydHM9e1xuXG4gIHBhcnNlOiBwYXJzZSxcbiAgc3RyaW5naWZ5OiBzdHJpbmdpZnksXG5cbiAgZW5kT2ZMaW5lOiBmdW5jdGlvbigpIHsgcmV0dXJuIGNvbW1vbi5FT0w7IH0sXG4gIHNldEVuZE9mTGluZTogZnVuY3Rpb24oZW9sKSB7XG4gICAgaWYgKGVvbCA9PT0gJ1xcbicgfHwgZW9sID09PSAnXFxyXFxuJykgY29tbW9uLkVPTCA9IGVvbDtcbiAgfSxcblxuICB2ZXJzaW9uOiB2ZXJzaW9uLFxuXG4gIC8vIHJvdW5kIHRyaXAgc2hvcnRjdXRcbiAgcnQ6IHtcbiAgICBwYXJzZTogZnVuY3Rpb24odGV4dCwgb3B0aW9ucykge1xuICAgICAgKG9wdGlvbnM9b3B0aW9uc3x8e30pLmtlZXBXc2M9dHJ1ZTtcbiAgICAgIHJldHVybiBwYXJzZSh0ZXh0LCBvcHRpb25zKTtcbiAgICB9LFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcbiAgICAgIChvcHRpb25zPW9wdGlvbnN8fHt9KS5rZWVwV3NjPXRydWU7XG4gICAgICByZXR1cm4gc3RyaW5naWZ5KHZhbHVlLCBvcHRpb25zKTtcbiAgICB9LFxuICB9LFxuXG4gIGNvbW1lbnRzOiBjb21tZW50cyxcblxuICBkc2Y6IGRzZi5zdGQsXG5cbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oanNvbi9saWIvaGpzb24uanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBIanNvbiBodHRwOi8vaGpzb24ub3JnICovXG4vKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBvcz1yZXF1aXJlKCdvcycpOyAvLyB3aWxsIGJlIHt9IHdoZW4gdXNlZCBpbiBhIGJyb3dzZXJcblxuZnVuY3Rpb24gdHJ5UGFyc2VOdW1iZXIodGV4dCwgc3RvcEF0TmV4dCkge1xuXG4gIC8vIHRyeSB0byBwYXJzZSBhIG51bWJlclxuXG4gIHZhciBudW1iZXIsIHN0cmluZyA9ICcnLCBsZWFkaW5nWmVyb3MgPSAwLCB0ZXN0TGVhZGluZyA9IHRydWU7XG4gIHZhciBhdCA9IDA7XG4gIHZhciBjaDtcbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBjaCA9IHRleHQuY2hhckF0KGF0KTtcbiAgICBhdCsrO1xuICAgIHJldHVybiBjaDtcbiAgfVxuXG4gIG5leHQoKTtcbiAgaWYgKGNoID09PSAnLScpIHtcbiAgICBzdHJpbmcgPSAnLSc7XG4gICAgbmV4dCgpO1xuICB9XG4gIHdoaWxlIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG4gICAgaWYgKHRlc3RMZWFkaW5nKSB7XG4gICAgICBpZiAoY2ggPT0gJzAnKSBsZWFkaW5nWmVyb3MrKztcbiAgICAgIGVsc2UgdGVzdExlYWRpbmcgPSBmYWxzZTtcbiAgICB9XG4gICAgc3RyaW5nICs9IGNoO1xuICAgIG5leHQoKTtcbiAgfVxuICBpZiAodGVzdExlYWRpbmcpIGxlYWRpbmdaZXJvcy0tOyAvLyBzaW5nbGUgMCBpcyBhbGxvd2VkXG4gIGlmIChjaCA9PT0gJy4nKSB7XG4gICAgc3RyaW5nICs9ICcuJztcbiAgICB3aGlsZSAobmV4dCgpICYmIGNoID49ICcwJyAmJiBjaCA8PSAnOScpXG4gICAgICBzdHJpbmcgKz0gY2g7XG4gIH1cbiAgaWYgKGNoID09PSAnZScgfHwgY2ggPT09ICdFJykge1xuICAgIHN0cmluZyArPSBjaDtcbiAgICBuZXh0KCk7XG4gICAgaWYgKGNoID09PSAnLScgfHwgY2ggPT09ICcrJykge1xuICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgICB3aGlsZSAoY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgbmV4dCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHNraXAgd2hpdGUvdG8gKG5ld2xpbmUpXG4gIHdoaWxlIChjaCAmJiBjaCA8PSAnICcpIG5leHQoKTtcblxuICBpZiAoc3RvcEF0TmV4dCkge1xuICAgIC8vIGVuZCBzY2FuIGlmIHdlIGZpbmQgYSBwdW5jdHVhdG9yIGNoYXJhY3RlciBsaWtlICx9XSBvciBhIGNvbW1lbnRcbiAgICBpZiAoY2ggPT09ICcsJyB8fCBjaCA9PT0gJ30nIHx8IGNoID09PSAnXScgfHxcbiAgICAgIGNoID09PSAnIycgfHwgY2ggPT09ICcvJyAmJiAodGV4dFthdF0gPT09ICcvJyB8fCB0ZXh0W2F0XSA9PT0gJyonKSkgY2ggPSAwO1xuICB9XG5cbiAgbnVtYmVyID0gK3N0cmluZztcbiAgaWYgKGNoIHx8IGxlYWRpbmdaZXJvcyB8fCAhaXNGaW5pdGUobnVtYmVyKSkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgZWxzZSByZXR1cm4gbnVtYmVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDb21tZW50KHZhbHVlLCBjb21tZW50KSB7XG4gIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgXCJfX0NPTU1FTlRTX19cIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSk7XG4gIHJldHVybiAodmFsdWUuX19DT01NRU5UU19fID0gY29tbWVudHx8e30pO1xufVxuXG5mdW5jdGlvbiByZW1vdmVDb21tZW50KHZhbHVlKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgXCJfX0NPTU1FTlRTX19cIiwgeyB2YWx1ZTogdW5kZWZpbmVkIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDb21tZW50KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5fX0NPTU1FTlRTX187XG59XG5cbmZ1bmN0aW9uIGZvcmNlQ29tbWVudCh0ZXh0KSB7XG4gIGlmICghdGV4dCkgcmV0dXJuIFwiXCI7XG4gIHZhciBhID0gdGV4dC5zcGxpdCgnXFxuJyk7XG4gIHZhciBzdHIsIGksIGosIGxlbjtcbiAgZm9yIChqID0gMDsgaiA8IGEubGVuZ3RoOyBqKyspIHtcbiAgICBzdHIgPSBhW2pdO1xuICAgIGxlbiA9IHN0ci5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB2YXIgYyA9IHN0cltpXTtcbiAgICAgIGlmIChjID09PSAnIycpIGJyZWFrO1xuICAgICAgZWxzZSBpZiAoYyA9PT0gJy8nICYmIChzdHJbaSsxXSA9PT0gJy8nIHx8IHN0cltpKzFdID09PSAnKicpKSB7XG4gICAgICAgIGlmIChzdHJbaSsxXSA9PT0gJyonKSBqID0gYS5sZW5ndGg7IC8vIGFzc3VtZSAvKiovIGNvdmVycyB3aG9sZSBibG9jaywgYmFpbCBvdXRcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChjID4gJyAnKSB7XG4gICAgICAgIGFbal0gPSAnIyAnICsgc3RyO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGEuam9pbignXFxuJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBFT0w6IG9zLkVPTCB8fCAnXFxuJyxcbiAgdHJ5UGFyc2VOdW1iZXI6IHRyeVBhcnNlTnVtYmVyLFxuICBjcmVhdGVDb21tZW50OiBjcmVhdGVDb21tZW50LFxuICByZW1vdmVDb21tZW50OiByZW1vdmVDb21tZW50LFxuICBnZXRDb21tZW50OiBnZXRDb21tZW50LFxuICBmb3JjZUNvbW1lbnQ6IGZvcmNlQ29tbWVudCxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oanNvbi9saWIvaGpzb24tY29tbW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImV4cG9ydHMuZW5kaWFubmVzcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdMRScgfTtcblxuZXhwb3J0cy5ob3N0bmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAodHlwZW9mIGxvY2F0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcbiAgICB9XG4gICAgZWxzZSByZXR1cm4gJyc7XG59O1xuXG5leHBvcnRzLmxvYWRhdmcgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXG5leHBvcnRzLnVwdGltZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDAgfTtcblxuZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBOdW1iZXIuTUFYX1ZBTFVFO1xufTtcblxuZXhwb3J0cy50b3RhbG1lbSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gTnVtYmVyLk1BWF9WQUxVRTtcbn07XG5cbmV4cG9ydHMuY3B1cyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFtdIH07XG5cbmV4cG9ydHMudHlwZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdCcm93c2VyJyB9O1xuXG5leHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbjtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufTtcblxuZXhwb3J0cy5uZXR3b3JrSW50ZXJmYWNlc1xuPSBleHBvcnRzLmdldE5ldHdvcmtJbnRlcmZhY2VzXG49IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cbmV4cG9ydHMuYXJjaCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICdqYXZhc2NyaXB0JyB9O1xuXG5leHBvcnRzLnBsYXRmb3JtID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ2Jyb3dzZXInIH07XG5cbmV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICcvdG1wJztcbn07XG5cbmV4cG9ydHMuRU9MID0gJ1xcbic7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9vcy1icm93c2VyaWZ5L2Jyb3dzZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHM9XCIyLjMuMVwiO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGpzb24vbGliL2hqc29uLXZlcnNpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogSGpzb24gaHR0cDovL2hqc29uLm9yZyAqL1xuLyoganNsaW50IG5vZGU6IHRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzb3VyY2UsICRvcHQpIHtcblxuICB2YXIgY29tbW9uID0gcmVxdWlyZShcIi4vaGpzb24tY29tbW9uXCIpO1xuICB2YXIgZHNmID0gcmVxdWlyZShcIi4vaGpzb24tZHNmXCIpO1xuXG4gIHZhciB0ZXh0O1xuICB2YXIgYXQ7ICAgLy8gVGhlIGluZGV4IG9mIHRoZSBjdXJyZW50IGNoYXJhY3RlclxuICB2YXIgY2g7ICAgLy8gVGhlIGN1cnJlbnQgY2hhcmFjdGVyXG4gIHZhciBlc2NhcGVlID0ge1xuICAgICdcIic6ICdcIicsXG4gICAgJ1xcXFwnOiAnXFxcXCcsXG4gICAgJy8nOiAnLycsXG4gICAgYjogICdcXGInLFxuICAgIGY6ICAnXFxmJyxcbiAgICBuOiAgJ1xcbicsXG4gICAgcjogICdcXHInLFxuICAgIHQ6ICAnXFx0J1xuICB9O1xuXG4gIHZhciBrZWVwQ29tbWVudHM7XG4gIHZhciBydW5Ec2Y7IC8vIGRvbWFpbiBzcGVjaWZpYyBmb3JtYXRzXG5cbiAgZnVuY3Rpb24gcmVzZXRBdCgpIHtcbiAgICBhdCA9IDA7XG4gICAgY2ggPSAnICc7XG4gIH1cblxuICBmdW5jdGlvbiBpc1B1bmN0dWF0b3JDaGFyKGMpIHtcbiAgICByZXR1cm4gYyA9PT0gJ3snIHx8IGMgPT09ICd9JyB8fCBjID09PSAnWycgfHwgYyA9PT0gJ10nIHx8IGMgPT09ICcsJyB8fCBjID09PSAnOic7XG4gIH1cblxuICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxuICBmdW5jdGlvbiBlcnJvcihtKSB7XG4gICAgdmFyIGksIGNvbD0wLCBsaW5lPTE7XG4gICAgZm9yIChpID0gYXQtMTsgaSA+IDAgJiYgdGV4dFtpXSAhPT0gJ1xcbic7IGktLSwgY29sKyspIHt9XG4gICAgZm9yICg7IGkgPiAwOyBpLS0pIGlmICh0ZXh0W2ldID09PSAnXFxuJykgbGluZSsrO1xuICAgIHRocm93IG5ldyBFcnJvcihtICsgXCIgYXQgbGluZSBcIiArIGxpbmUgKyBcIixcIiArIGNvbCArIFwiID4+PlwiICsgdGV4dC5zdWJzdHIoYXQtY29sLCAyMCkgKyBcIiAuLi5cIik7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0KCkge1xuICAgIC8vIGdldCB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gICAgY2ggPSB0ZXh0LmNoYXJBdChhdCk7XG4gICAgYXQrKztcbiAgICByZXR1cm4gY2g7XG4gIH1cblxuICBmdW5jdGlvbiBwZWVrKG9mZnMpIHtcbiAgICAvLyByYW5nZSBjaGVjayBpcyBub3QgcmVxdWlyZWRcbiAgICByZXR1cm4gdGV4dC5jaGFyQXQoYXQgKyBvZmZzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0cmluZygpIHtcbiAgICAvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cbiAgICB2YXIgc3RyaW5nID0gJyc7XG5cbiAgICAvLyBXaGVuIHBhcnNpbmcgZm9yIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgXCIgYW5kIFxcIGNoYXJhY3RlcnMuXG4gICAgaWYgKGNoID09PSAnXCInKSB7XG4gICAgICB3aGlsZSAobmV4dCgpKSB7XG4gICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICB2YXIgdWZmZmYgPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgbmV4dCgpO1xuICAgICAgICAgICAgICB2YXIgYyA9IGNoLmNoYXJDb2RlQXQoMCksIGhleDtcbiAgICAgICAgICAgICAgaWYgKGNoID49ICcwJyAmJiBjaCA8PSAnOScpIGhleCA9IGMgLSA0ODtcbiAgICAgICAgICAgICAgZWxzZSBpZiAoY2ggPj0gJ2EnICYmIGNoIDw9ICdmJykgaGV4ID0gYyAtIDk3ICsgMHhhO1xuICAgICAgICAgICAgICBlbHNlIGlmIChjaCA+PSAnQScgJiYgY2ggPD0gJ0YnKSBoZXggPSBjIC0gNjUgKyAweGE7XG4gICAgICAgICAgICAgIGVsc2UgZXJyb3IoXCJCYWQgXFxcXHUgY2hhciBcIiArIGNoKTtcbiAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUodWZmZmYpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZWVbY2hdID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgc3RyaW5nICs9IGVzY2FwZWVbY2hdO1xuICAgICAgICAgIH0gZWxzZSBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZXJyb3IoXCJCYWQgc3RyaW5nXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gbWxTdHJpbmcoKSB7XG4gICAgLy8gUGFyc2UgYSBtdWx0aWxpbmUgc3RyaW5nIHZhbHVlLlxuICAgIHZhciBzdHJpbmcgPSAnJywgdHJpcGxlID0gMDtcblxuICAgIC8vIHdlIGFyZSBhdCAnJycgKzEgLSBnZXQgaW5kZW50XG4gICAgdmFyIGluZGVudCA9IDA7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBjPXBlZWsoLWluZGVudC01KTtcbiAgICAgIGlmICghYyB8fCBjID09PSAnXFxuJykgYnJlYWs7XG4gICAgICBpbmRlbnQrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBza2lwSW5kZW50KCkge1xuICAgICAgdmFyIHNraXAgPSBpbmRlbnQ7XG4gICAgICB3aGlsZSAoY2ggJiYgY2ggPD0gJyAnICYmIGNoICE9PSAnXFxuJyAmJiBza2lwLS0gPiAwKSBuZXh0KCk7XG4gICAgfVxuXG4gICAgLy8gc2tpcCB3aGl0ZS90byAobmV3bGluZSlcbiAgICB3aGlsZSAoY2ggJiYgY2ggPD0gJyAnICYmIGNoICE9PSAnXFxuJykgbmV4dCgpO1xuICAgIGlmIChjaCA9PT0gJ1xcbicpIHsgbmV4dCgpOyBza2lwSW5kZW50KCk7IH1cblxuICAgIC8vIFdoZW4gcGFyc2luZyBtdWx0aWxpbmUgc3RyaW5nIHZhbHVlcywgd2UgbXVzdCBsb29rIGZvciAnIGNoYXJhY3RlcnMuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICghY2gpIHtcbiAgICAgICAgZXJyb3IoXCJCYWQgbXVsdGlsaW5lIHN0cmluZ1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXCcnKSB7XG4gICAgICAgIHRyaXBsZSsrO1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIGlmICh0cmlwbGUgPT09IDMpIHtcbiAgICAgICAgICBpZiAoc3RyaW5nLnNsaWNlKC0xKSA9PT0gJ1xcbicpIHN0cmluZz1zdHJpbmcuc2xpY2UoMCwgLTEpOyAvLyByZW1vdmUgbGFzdCBFT0xcbiAgICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgICB9IGVsc2UgY29udGludWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aGlsZSAodHJpcGxlID4gMCkge1xuICAgICAgICAgIHN0cmluZyArPSAnXFwnJztcbiAgICAgICAgICB0cmlwbGUtLTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGNoID09PSAnXFxuJykge1xuICAgICAgICBzdHJpbmcgKz0gJ1xcbic7XG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgc2tpcEluZGVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNoICE9PSAnXFxyJykgc3RyaW5nICs9IGNoO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24ga2V5bmFtZSgpIHtcbiAgICAvLyBxdW90ZXMgZm9yIGtleXMgYXJlIG9wdGlvbmFsIGluIEhqc29uXG4gICAgLy8gdW5sZXNzIHRoZXkgaW5jbHVkZSB7fVtdLDogb3Igd2hpdGVzcGFjZS5cblxuICAgIGlmIChjaCA9PT0gJ1wiJykgcmV0dXJuIHN0cmluZygpO1xuXG4gICAgdmFyIG5hbWUgPSBcIlwiLCBzdGFydCA9IGF0LCBzcGFjZSA9IC0xO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoY2ggPT09ICc6Jykge1xuICAgICAgICBpZiAoIW5hbWUpIGVycm9yKFwiRm91bmQgJzonIGJ1dCBubyBrZXkgbmFtZSAoZm9yIGFuIGVtcHR5IGtleSBuYW1lIHVzZSBxdW90ZXMpXCIpO1xuICAgICAgICBlbHNlIGlmIChzcGFjZSA+PTAgJiYgc3BhY2UgIT09IG5hbWUubGVuZ3RoKSB7IGF0ID0gc3RhcnQgKyBzcGFjZTsgZXJyb3IoXCJGb3VuZCB3aGl0ZXNwYWNlIGluIHlvdXIga2V5IG5hbWUgKHVzZSBxdW90ZXMgdG8gaW5jbHVkZSlcIik7IH1cbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgICB9IGVsc2UgaWYgKGNoIDw9ICcgJykge1xuICAgICAgICBpZiAoIWNoKSBlcnJvcihcIkZvdW5kIEVPRiB3aGlsZSBsb29raW5nIGZvciBhIGtleSBuYW1lIChjaGVjayB5b3VyIHN5bnRheClcIik7XG4gICAgICAgIGVsc2UgaWYgKHNwYWNlIDwgMCkgc3BhY2UgPSBuYW1lLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAoaXNQdW5jdHVhdG9yQ2hhcihjaCkpIHtcbiAgICAgICAgZXJyb3IoXCJGb3VuZCAnXCIgKyBjaCArIFwiJyB3aGVyZSBhIGtleSBuYW1lIHdhcyBleHBlY3RlZCAoY2hlY2sgeW91ciBzeW50YXggb3IgdXNlIHF1b3RlcyBpZiB0aGUga2V5IG5hbWUgaW5jbHVkZXMge31bXSw6IG9yIHdoaXRlc3BhY2UpXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmFtZSArPSBjaDtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB3aGl0ZSgpIHtcbiAgICB3aGlsZSAoY2gpIHtcbiAgICAgIC8vIFNraXAgd2hpdGVzcGFjZS5cbiAgICAgIHdoaWxlIChjaCAmJiBjaCA8PSAnICcpIG5leHQoKTtcbiAgICAgIC8vIEhqc29uIGFsbG93cyBjb21tZW50c1xuICAgICAgaWYgKGNoID09PSAnIycgfHwgY2ggPT09ICcvJyAmJiBwZWVrKDApID09PSAnLycpIHtcbiAgICAgICAgd2hpbGUgKGNoICYmIGNoICE9PSAnXFxuJykgbmV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJy8nICYmIHBlZWsoMCkgPT09ICcqJykge1xuICAgICAgICBuZXh0KCk7IG5leHQoKTtcbiAgICAgICAgd2hpbGUgKGNoICYmICEoY2ggPT09ICcqJyAmJiBwZWVrKDApID09PSAnLycpKSBuZXh0KCk7XG4gICAgICAgIGlmIChjaCkgeyBuZXh0KCk7IG5leHQoKTsgfVxuICAgICAgfSBlbHNlIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRmbm5zKCkge1xuICAgIC8vIEhqc29uIHN0cmluZ3MgY2FuIGJlIHF1b3RlbGVzc1xuICAgIC8vIHJldHVybnMgc3RyaW5nLCB0cnVlLCBmYWxzZSwgb3IgbnVsbC5cbiAgICB2YXIgdmFsdWUgPSBjaDtcbiAgICBpZiAoaXNQdW5jdHVhdG9yQ2hhcihjaCkpXG4gICAgICBlcnJvcihcIkZvdW5kIGEgcHVuY3R1YXRvciBjaGFyYWN0ZXIgJ1wiICsgY2ggKyBcIicgd2hlbiBleHBlY3RpbmcgYSBxdW90ZWxlc3Mgc3RyaW5nIChjaGVjayB5b3VyIHN5bnRheClcIik7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIG5leHQoKTtcbiAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDMgJiYgdmFsdWUgPT09IFwiJycnXCIpIHJldHVybiBtbFN0cmluZygpO1xuICAgICAgdmFyIGlzRW9sID0gY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJyc7XG4gICAgICBpZiAoaXNFb2wgfHxcbiAgICAgICAgY2ggPT09ICcsJyB8fCBjaCA9PT0gJ30nIHx8IGNoID09PSAnXScgfHxcbiAgICAgICAgY2ggPT09ICcjJyB8fFxuICAgICAgICBjaCA9PT0gJy8nICYmIChwZWVrKDApID09PSAnLycgfHwgcGVlaygwKSA9PT0gJyonKVxuICAgICAgICApIHtcbiAgICAgICAgLy8gdGhpcyB0ZXN0cyBmb3IgdGhlIGNhc2Ugb2Yge3RydWV8ZmFsc2V8bnVsbHxudW19XG4gICAgICAgIC8vIGZvbGxvd2VkIGJ5IHsgJywnIHwgJ30nIHwgJ10nIHwgJyMnIHwgJy8vJyB8ICcvKicgfVxuICAgICAgICAvLyB3aGljaCBuZWVkcyB0byBiZSBwYXJzZWQgYXMgdGhlIHNwZWNpZmllZCB2YWx1ZVxuICAgICAgICB2YXIgY2hmID0gdmFsdWVbMF07XG4gICAgICAgIHN3aXRjaCAoY2hmKSB7XG4gICAgICAgICAgY2FzZSAnZic6IGlmICh2YWx1ZS50cmltKCkgPT09IFwiZmFsc2VcIikgcmV0dXJuIGZhbHNlOyBicmVhaztcbiAgICAgICAgICBjYXNlICduJzogaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJudWxsXCIpIHJldHVybiBudWxsOyBicmVhaztcbiAgICAgICAgICBjYXNlICd0JzogaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJ0cnVlXCIpIHJldHVybiB0cnVlOyBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGNoZiA9PT0gJy0nIHx8IGNoZiA+PSAnMCcgJiYgY2hmIDw9ICc5Jykge1xuICAgICAgICAgICAgICB2YXIgbiA9IGNvbW1vbi50cnlQYXJzZU51bWJlcih2YWx1ZSk7XG4gICAgICAgICAgICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHJldHVybiBuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0VvbCkge1xuICAgICAgICAgIC8vIHJlbW92ZSBhbnkgd2hpdGVzcGFjZSBhdCB0aGUgZW5kIChpZ25vcmVkIGluIHF1b3RlbGVzcyBzdHJpbmdzKVxuICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICAgIHZhciBkc2ZWYWx1ZSA9IHJ1bkRzZih2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGRzZlZhbHVlICE9PSB1bmRlZmluZWQgPyBkc2ZWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YWx1ZSArPSBjaDtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBnZXRDb21tZW50KGNBdCwgZmlyc3QpIHtcbiAgICB2YXIgaTtcbiAgICBjQXQtLTtcbiAgICAvLyByZW1vdmUgdHJhaWxpbmcgd2hpdGVzcGFjZVxuICAgIC8vIGJ1dCBvbmx5IHVwIHRvIEVPTFxuICAgIGZvciAoaSA9IGF0IC0gMjsgaSA+IGNBdCAmJiB0ZXh0W2ldIDw9ICcgJyAmJiB0ZXh0W2ldICE9PSAnXFxuJzsgaS0tKTtcbiAgICBpZiAodGV4dFtpXSA9PT0gJ1xcbicpIGktLTtcbiAgICBpZiAodGV4dFtpXSA9PT0gJ1xccicpIGktLTtcbiAgICB2YXIgcmVzID0gdGV4dC5zdWJzdHIoY0F0LCBpLWNBdCsxKTtcbiAgICAvLyByZXR1cm4gaWYgd2UgZmluZCBhbnl0aGluZyBvdGhlciB0aGFuIHdoaXRlc3BhY2VcbiAgICBmb3IgKGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVzW2ldID4gJyAnKSB7XG4gICAgICAgIHZhciBqID0gcmVzLmluZGV4T2YoJ1xcbicpO1xuICAgICAgICBpZiAoaiA+PSAwKSB7XG4gICAgICAgICAgdmFyIGMgPSBbcmVzLnN1YnN0cigwLCBqKSwgcmVzLnN1YnN0cihqKzEpXTtcbiAgICAgICAgICBpZiAoZmlyc3QgJiYgY1swXS50cmltKCkubGVuZ3RoID09PSAwKSBjLnNoaWZ0KCk7XG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH0gZWxzZSByZXR1cm4gW3Jlc107XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVycm9yQ2xvc2luZ0hpbnQodmFsdWUpIHtcbiAgICBmdW5jdGlvbiBzZWFyY2godmFsdWUsIGNoKSB7XG4gICAgICB2YXIgaSwgaywgbGVuZ3RoLCByZXM7XG4gICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKGNoKSA+PSAwKSByZXM9dmFsdWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW5ndGggPSB2YWx1ZS5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICByZXM9c2VhcmNoKHZhbHVlW2ldLCBjaCkgfHwgcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgcmVzPXNlYXJjaCh2YWx1ZVtrXSwgY2gpIHx8IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcG9ydChjaCkge1xuICAgICAgdmFyIHBvc3NpYmxlRXJyPXNlYXJjaCh2YWx1ZSwgY2gpO1xuICAgICAgaWYgKHBvc3NpYmxlRXJyKSB7XG4gICAgICAgIHJldHVybiBcImZvdW5kICdcIitjaCtcIicgaW4gYSBzdHJpbmcgdmFsdWUsIHlvdXIgbWlzdGFrZSBjb3VsZCBiZSB3aXRoOlxcblwiK1xuICAgICAgICAgIFwiICA+IFwiK3Bvc3NpYmxlRXJyK1wiXFxuXCIrXG4gICAgICAgICAgXCIgICh1bnF1b3RlZCBzdHJpbmdzIGNvbnRhaW4gZXZlcnl0aGluZyB1cCB0byB0aGUgbmV4dCBsaW5lISlcIjtcbiAgICAgIH0gZWxzZSByZXR1cm4gXCJcIjtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwb3J0KCd9JykgfHwgcmVwb3J0KCddJyk7XG4gIH1cblxuICBmdW5jdGlvbiBhcnJheSgpIHtcbiAgICAvLyBQYXJzZSBhbiBhcnJheSB2YWx1ZS5cbiAgICAvLyBhc3N1bWluZyBjaCA9PT0gJ1snXG5cbiAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICB2YXIgY29tbWVudHMsIGNBdCwgbmV4dENvbW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChrZWVwQ29tbWVudHMpIGNvbW1lbnRzID0gY29tbW9uLmNyZWF0ZUNvbW1lbnQoYXJyYXksIHsgYTogW10gfSk7XG5cbiAgICAgIG5leHQoKTtcbiAgICAgIGNBdCA9IGF0O1xuICAgICAgd2hpdGUoKTtcbiAgICAgIGlmIChjb21tZW50cykgbmV4dENvbW1lbnQgPSBnZXRDb21tZW50KGNBdCwgdHJ1ZSkuam9pbignXFxuJyk7XG4gICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIGlmIChjb21tZW50cykgY29tbWVudHMuZSA9IFtuZXh0Q29tbWVudF07XG4gICAgICAgIHJldHVybiBhcnJheTsgIC8vIGVtcHR5IGFycmF5XG4gICAgICB9XG5cbiAgICAgIHdoaWxlIChjaCkge1xuICAgICAgICBhcnJheS5wdXNoKHZhbHVlKCkpO1xuICAgICAgICBjQXQgPSBhdDtcbiAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgLy8gaW4gSGpzb24gdGhlIGNvbW1hIGlzIG9wdGlvbmFsIGFuZCB0cmFpbGluZyBjb21tYXMgYXJlIGFsbG93ZWRcbiAgICAgICAgLy8gbm90ZSB0aGF0IHdlIGRvIG5vdCBrZWVwIGNvbW1lbnRzIGJlZm9yZSB0aGUgLCBpZiB0aGVyZSBhcmUgYW55XG4gICAgICAgIGlmIChjaCA9PT0gJywnKSB7IG5leHQoKTsgY0F0ID0gYXQ7IHdoaXRlKCk7IH1cbiAgICAgICAgaWYgKGNvbW1lbnRzKSB7XG4gICAgICAgICAgdmFyIGMgPSBnZXRDb21tZW50KGNBdCk7XG4gICAgICAgICAgY29tbWVudHMuYS5wdXNoKFtuZXh0Q29tbWVudHx8XCJcIiwgY1swXXx8XCJcIl0pO1xuICAgICAgICAgIG5leHRDb21tZW50ID0gY1sxXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2ggPT09ICddJykge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmFbY29tbWVudHMuYS5sZW5ndGgtMV1bMV0gKz0gbmV4dENvbW1lbnR8fFwiXCI7XG4gICAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgICAgICB9XG4gICAgICAgIHdoaXRlKCk7XG4gICAgICB9XG5cbiAgICAgIGVycm9yKFwiRW5kIG9mIGlucHV0IHdoaWxlIHBhcnNpbmcgYW4gYXJyYXkgKG1pc3NpbmcgJ10nKVwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLmhpbnQ9ZS5oaW50fHxlcnJvckNsb3NpbmdIaW50KGFycmF5KTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gb2JqZWN0KHdpdGhvdXRCcmFjZXMpIHtcbiAgICAvLyBQYXJzZSBhbiBvYmplY3QgdmFsdWUuXG5cbiAgICB2YXIga2V5ID0gXCJcIiwgb2JqZWN0ID0ge307XG4gICAgdmFyIGNvbW1lbnRzLCBjQXQsIG5leHRDb21tZW50O1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChrZWVwQ29tbWVudHMpIGNvbW1lbnRzID0gY29tbW9uLmNyZWF0ZUNvbW1lbnQob2JqZWN0LCB7IGM6IHt9LCBvOiBbXSAgfSk7XG5cbiAgICAgIGlmICghd2l0aG91dEJyYWNlcykge1xuICAgICAgICAvLyBhc3N1bWluZyBjaCA9PT0gJ3snXG4gICAgICAgIG5leHQoKTtcbiAgICAgICAgY0F0ID0gYXQ7XG4gICAgICB9IGVsc2UgY0F0ID0gMTtcblxuICAgICAgd2hpdGUoKTtcbiAgICAgIGlmIChjb21tZW50cykgbmV4dENvbW1lbnQgPSBnZXRDb21tZW50KGNBdCwgdHJ1ZSkuam9pbignXFxuJyk7XG4gICAgICBpZiAoY2ggPT09ICd9JyAmJiAhd2l0aG91dEJyYWNlcykge1xuICAgICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmUgPSBbbmV4dENvbW1lbnRdO1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIHJldHVybiBvYmplY3Q7ICAvLyBlbXB0eSBvYmplY3RcbiAgICAgIH1cbiAgICAgIHdoaWxlIChjaCkge1xuICAgICAgICBrZXkgPSBrZXluYW1lKCk7XG4gICAgICAgIHdoaXRlKCk7XG4gICAgICAgIGlmIChjaCAhPT0gJzonKSBlcnJvcihcIkV4cGVjdGVkICc6JyBpbnN0ZWFkIG9mICdcIiArIGNoICsgXCInXCIpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICAgIC8vIGR1cGxpY2F0ZSBrZXlzIG92ZXJ3cml0ZSB0aGUgcHJldmlvdXMgdmFsdWVcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZSgpO1xuICAgICAgICBjQXQgPSBhdDtcbiAgICAgICAgd2hpdGUoKTtcbiAgICAgICAgLy8gaW4gSGpzb24gdGhlIGNvbW1hIGlzIG9wdGlvbmFsIGFuZCB0cmFpbGluZyBjb21tYXMgYXJlIGFsbG93ZWRcbiAgICAgICAgLy8gbm90ZSB0aGF0IHdlIGRvIG5vdCBrZWVwIGNvbW1lbnRzIGJlZm9yZSB0aGUgLCBpZiB0aGVyZSBhcmUgYW55XG4gICAgICAgIGlmIChjaCA9PT0gJywnKSB7IG5leHQoKTsgY0F0ID0gYXQ7IHdoaXRlKCk7IH1cbiAgICAgICAgaWYgKGNvbW1lbnRzKSB7XG4gICAgICAgICAgdmFyIGMgPSBnZXRDb21tZW50KGNBdCk7XG4gICAgICAgICAgY29tbWVudHMuY1trZXldID0gW25leHRDb21tZW50fHxcIlwiLCBjWzBdfHxcIlwiXTtcbiAgICAgICAgICBuZXh0Q29tbWVudCA9IGNbMV07XG4gICAgICAgICAgY29tbWVudHMuby5wdXNoKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoID09PSAnfScgJiYgIXdpdGhvdXRCcmFjZXMpIHtcbiAgICAgICAgICBuZXh0KCk7XG4gICAgICAgICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5jW2tleV1bMV0gKz0gbmV4dENvbW1lbnR8fFwiXCI7XG4gICAgICAgICAgcmV0dXJuIG9iamVjdDtcbiAgICAgICAgfVxuICAgICAgICB3aGl0ZSgpO1xuICAgICAgfVxuXG4gICAgICBpZiAod2l0aG91dEJyYWNlcykgcmV0dXJuIG9iamVjdDtcbiAgICAgIGVsc2UgZXJyb3IoXCJFbmQgb2YgaW5wdXQgd2hpbGUgcGFyc2luZyBhbiBvYmplY3QgKG1pc3NpbmcgJ30nKVwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlLmhpbnQ9ZS5oaW50fHxlcnJvckNsb3NpbmdIaW50KG9iamVjdCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHZhbHVlKCkge1xuICAgIC8vIFBhcnNlIGEgSGpzb24gdmFsdWUuIEl0IGNvdWxkIGJlIGFuIG9iamVjdCwgYW4gYXJyYXksIGEgc3RyaW5nLCBhIG51bWJlciBvciBhIHdvcmQuXG5cbiAgICB3aGl0ZSgpO1xuICAgIHN3aXRjaCAoY2gpIHtcbiAgICAgIGNhc2UgJ3snOiByZXR1cm4gb2JqZWN0KCk7XG4gICAgICBjYXNlICdbJzogcmV0dXJuIGFycmF5KCk7XG4gICAgICBjYXNlICdcIic6IHJldHVybiBzdHJpbmcoKTtcbiAgICAgIGRlZmF1bHQ6IHJldHVybiB0Zm5ucygpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrVHJhaWxpbmcodiwgYykge1xuICAgIHZhciBjQXQgPSBhdDtcbiAgICB3aGl0ZSgpO1xuICAgIGlmIChjaCkgZXJyb3IoXCJTeW50YXggZXJyb3IsIGZvdW5kIHRyYWlsaW5nIGNoYXJhY3RlcnNcIik7XG4gICAgaWYgKGtlZXBDb21tZW50cykge1xuICAgICAgdmFyIGIgPSBjLmpvaW4oJ1xcbicpLCBhID0gZ2V0Q29tbWVudChjQXQpLmpvaW4oJ1xcbicpO1xuICAgICAgaWYgKGEgfHwgYikge1xuICAgICAgICB2YXIgY29tbWVudHMgPSBjb21tb24uY3JlYXRlQ29tbWVudCh2LCBjb21tb24uZ2V0Q29tbWVudCh2KSk7XG4gICAgICAgIGNvbW1lbnRzLnIgPSBbYiwgYV07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2O1xuICB9XG5cbiAgZnVuY3Rpb24gcm9vdFZhbHVlKCkge1xuICAgIC8vIEJyYWNlcyBmb3IgdGhlIHJvb3Qgb2JqZWN0IGFyZSBvcHRpb25hbFxuICAgIHdoaXRlKCk7XG4gICAgdmFyIGMgPSBrZWVwQ29tbWVudHMgPyBnZXRDb21tZW50KDEpIDogbnVsbDtcbiAgICBzd2l0Y2ggKGNoKSB7XG4gICAgICBjYXNlICd7JzogcmV0dXJuIGNoZWNrVHJhaWxpbmcob2JqZWN0KCksIGMpO1xuICAgICAgY2FzZSAnWyc6IHJldHVybiBjaGVja1RyYWlsaW5nKGFycmF5KCksIGMpO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICAvLyBhc3N1bWUgd2UgaGF2ZSBhIHJvb3Qgb2JqZWN0IHdpdGhvdXQgYnJhY2VzXG4gICAgICByZXR1cm4gY2hlY2tUcmFpbGluZyhvYmplY3QodHJ1ZSksIGMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIHRlc3QgaWYgd2UgYXJlIGRlYWxpbmcgd2l0aCBhIHNpbmdsZSBKU09OIHZhbHVlIGluc3RlYWQgKHRydWUvZmFsc2UvbnVsbC9udW0vXCJcIilcbiAgICAgIHJlc2V0QXQoKTtcbiAgICAgIHRyeSB7IHJldHVybiBjaGVja1RyYWlsaW5nKHZhbHVlKCksIGMpOyB9XG4gICAgICBjYXRjaCAoZTIpIHsgdGhyb3cgZTsgfSAvLyB0aHJvdyBvcmlnaW5hbCBlcnJvclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGhqc29uUGFyc2Uoc291cmNlLCBvcHQpIHtcbiAgICBpZiAodHlwZW9mIHNvdXJjZSE9PVwic3RyaW5nXCIpIHRocm93IG5ldyBFcnJvcihcInNvdXJjZSBpcyBub3QgYSBzdHJpbmdcIik7XG4gICAgdmFyIGRzZkRlZiA9IG51bGw7XG4gICAgaWYgKG9wdCAmJiB0eXBlb2Ygb3B0ID09PSAnb2JqZWN0Jykge1xuICAgICAga2VlcENvbW1lbnRzID0gb3B0LmtlZXBXc2M7XG4gICAgICBkc2ZEZWYgPSBvcHQuZHNmO1xuICAgIH1cbiAgICBydW5Ec2YgPSBkc2YubG9hZERzZihkc2ZEZWYsIFwicGFyc2VcIik7XG4gICAgdGV4dCA9IHNvdXJjZTtcbiAgICByZXNldEF0KCk7XG4gICAgcmV0dXJuIHJvb3RWYWx1ZSgpO1xuICB9XG5cbiAgcmV0dXJuIGhqc29uUGFyc2UoJHNvdXJjZSwgJG9wdCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGpzb24vbGliL2hqc29uLXBhcnNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qIEhqc29uIGh0dHA6Ly9oanNvbi5vcmcgKi9cbi8qIGpzbGludCBub2RlOiB0cnVlICovXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNvbW1vbiA9IHJlcXVpcmUoXCIuL2hqc29uLWNvbW1vblwiKTtcblxuZnVuY3Rpb24gbG9hZERzZihjb2wsIHR5cGUpIHtcblxuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShjb2wpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgaWYgKGNvbCkgdGhyb3cgbmV3IEVycm9yKFwiZHNmIG9wdGlvbiBtdXN0IGNvbnRhaW4gYW4gYXJyYXkhXCIpO1xuICAgIGVsc2UgcmV0dXJuIG5vcERzZjtcbiAgfSBlbHNlIGlmIChjb2wubGVuZ3RoID09PSAwKSByZXR1cm4gbm9wRHNmO1xuXG4gIHZhciBkc2YgPSBbXTtcbiAgZnVuY3Rpb24gaXNGdW5jdGlvbihmKSB7IHJldHVybiB7fS50b1N0cmluZy5jYWxsKGYpID09PSAnW29iamVjdCBGdW5jdGlvbl0nOyB9XG5cbiAgY29sLmZvckVhY2goZnVuY3Rpb24oeCkge1xuICAgIGlmICgheC5uYW1lIHx8ICFpc0Z1bmN0aW9uKHgucGFyc2UpIHx8ICFpc0Z1bmN0aW9uKHguc3RyaW5naWZ5KSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcImV4dGVuc2lvbiBkb2VzIG5vdCBtYXRjaCB0aGUgRFNGIGludGVyZmFjZVwiKTtcbiAgICBkc2YucHVzaChmdW5jdGlvbigpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlID09IFwicGFyc2VcIikge1xuICAgICAgICAgIHJldHVybiB4LnBhcnNlLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInN0cmluZ2lmeVwiKSB7XG4gICAgICAgICAgdmFyIHJlcz14LnN0cmluZ2lmeS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICAgICAgICAgIC8vIGNoZWNrIHJlc3VsdFxuICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiAodHlwZW9mIHJlcyAhPT0gXCJzdHJpbmdcIiB8fFxuICAgICAgICAgICAgcmVzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgcmVzWzBdID09PSAnXCInIHx8XG4gICAgICAgICAgICBbXS5zb21lLmNhbGwocmVzLCBmdW5jdGlvbihjKSB7IHJldHVybiBpc0ludmFsaWREc2ZDaGFyKGMpOyB9KSkpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ2YWx1ZSBtYXkgbm90IGJlIGVtcHR5LCBzdGFydCB3aXRoIGEgcXVvdGUgb3IgY29udGFpbiBhIHB1bmN0dWF0b3IgY2hhcmFjdGVyIGV4Y2VwdCBjb2xvbjogXCIgKyByZXMpO1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGVcIik7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkRTRi1cIit4Lm5hbWUrXCIgZmFpbGVkOyBcIitlLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gcnVuRHNmLmJpbmQobnVsbCwgZHNmKTtcbn1cblxuZnVuY3Rpb24gcnVuRHNmKGRzZiwgdmFsdWUpIHtcbiAgaWYgKGRzZikge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHNmLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmVzID0gZHNmW2ldKHZhbHVlKTtcbiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHJlcztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbm9wRHNmKHZhbHVlKSB7XG59XG5cbmZ1bmN0aW9uIGlzSW52YWxpZERzZkNoYXIoYykge1xuICByZXR1cm4gYyA9PT0gJ3snIHx8IGMgPT09ICd9JyB8fCBjID09PSAnWycgfHwgYyA9PT0gJ10nIHx8IGMgPT09ICcsJztcbn1cblxuXG5mdW5jdGlvbiBtYXRoKG9wdCkge1xuICByZXR1cm4ge1xuICAgIG5hbWU6IFwibWF0aFwiLFxuICAgIHBhcnNlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHN3aXRjaCAodmFsdWUpIHtcbiAgICAgICAgY2FzZSBcIitpbmZcIjpcbiAgICAgICAgY2FzZSBcImluZlwiOlxuICAgICAgICBjYXNlIFwiK0luZlwiOlxuICAgICAgICBjYXNlIFwiSW5mXCI6IHJldHVybiBJbmZpbml0eTtcbiAgICAgICAgY2FzZSBcIi1pbmZcIjpcbiAgICAgICAgY2FzZSBcIi1JbmZcIjogcmV0dXJuIC1JbmZpbml0eTtcbiAgICAgICAgY2FzZSBcIm5hblwiOlxuICAgICAgICBjYXNlIFwiTmFOXCI6IHJldHVybiBOYU47XG4gICAgICB9XG4gICAgfSxcbiAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHJldHVybjtcbiAgICAgIGlmICgxIC8gdmFsdWUgPT09IC1JbmZpbml0eSkgcmV0dXJuIFwiLTBcIjsgLy8gMCA9PT0gLTBcbiAgICAgIGlmICh2YWx1ZSA9PT0gSW5maW5pdHkpIHJldHVybiBcIkluZlwiO1xuICAgICAgaWYgKHZhbHVlID09PSAtSW5maW5pdHkpIHJldHVybiBcIi1JbmZcIjtcbiAgICAgIGlmIChpc05hTih2YWx1ZSkpIHJldHVybiBcIk5hTlwiO1xuICAgIH0sXG4gIH07XG59XG5tYXRoLmRlc2NyaXB0aW9uPVwic3VwcG9ydCBmb3IgSW5mL2luZiwgLUluZi8taW5mLCBOYW4vbmFOIGFuZCAtMFwiO1xuXG5mdW5jdGlvbiBoZXgob3B0KSB7XG4gIHZhciBvdXQ9b3B0ICYmIG9wdC5vdXQ7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJoZXhcIixcbiAgICBwYXJzZTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAoL14weFswLTlBLUZhLWZdKyQvLnRlc3QodmFsdWUpKVxuICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDE2KTtcbiAgICB9LFxuICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBpZiAob3V0ICYmIE51bWJlci5pc0ludGVnZXIodmFsdWUpKVxuICAgICAgICByZXR1cm4gXCIweFwiK3ZhbHVlLnRvU3RyaW5nKDE2KTtcbiAgICB9LFxuICB9O1xufVxuaGV4LmRlc2NyaXB0aW9uPVwicGFyc2UgaGV4YWRlY2ltYWwgbnVtYmVycyBwcmVmaXhlZCB3aXRoIDB4XCI7XG5cbmZ1bmN0aW9uIGRhdGUob3B0KSB7XG4gIHJldHVybiB7XG4gICAgbmFtZTogXCJkYXRlXCIsXG4gICAgcGFyc2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKC9eXFxkezR9LVxcZHsyfS1cXGR7Mn0kLy50ZXN0KHZhbHVlKSB8fFxuICAgICAgICAvXlxcZHs0fS1cXGR7Mn0tXFxkezJ9VFxcZHsyfVxcOlxcZHsyfVxcOlxcZHsyfSg/Oi5cXGQrKSg/Olp8WystXVxcZHsyfTpcXGR7Mn0pJC8udGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgdmFyIGR0ID0gRGF0ZS5wYXJzZSh2YWx1ZSk7XG4gICAgICAgIGlmICghaXNOYU4oZHQpKSByZXR1cm4gbmV3IERhdGUoZHQpO1xuICAgICAgfVxuICAgIH0sXG4gICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAgICAgdmFyIGR0ID0gdmFsdWUudG9JU09TdHJpbmcoKTtcbiAgICAgICAgaWYgKGR0LmluZGV4T2YoXCJUMDA6MDA6MDAuMDAwWlwiLCBkdC5sZW5ndGggLSAxNCkgIT09IC0xKSByZXR1cm4gZHQuc3Vic3RyKDAsIDEwKTtcbiAgICAgICAgZWxzZSByZXR1cm4gZHQ7XG4gICAgICB9XG4gICAgfSxcbiAgfTtcbn1cbmRhdGUuZGVzY3JpcHRpb249XCJzdXBwb3J0IElTTyBkYXRlc1wiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9hZERzZjogbG9hZERzZixcbiAgc3RkOiB7XG4gICAgbWF0aDogbWF0aCxcbiAgICBoZXg6IGhleCxcbiAgICBkYXRlOiBkYXRlLFxuICB9LFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2hqc29uL2xpYi9oanNvbi1kc2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyogSGpzb24gaHR0cDovL2hqc29uLm9yZyAqL1xuLyoganNsaW50IG5vZGU6IHRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR2YWx1ZSwgJG9wdCkge1xuXG4gIHZhciBjb21tb24gPSByZXF1aXJlKFwiLi9oanNvbi1jb21tb25cIik7XG4gIHZhciBkc2YgPSByZXF1aXJlKFwiLi9oanNvbi1kc2ZcIik7XG5cbiAgdmFyIHJ1bkRzZjsgLy8gZG9tYWluIHNwZWNpZmljIGZvcm1hdHNcblxuICAvLyBuZWVkc0VzY2FwZSB0ZXN0cyBpZiB0aGUgc3RyaW5nIGNhbiBiZSB3cml0dGVuIHdpdGhvdXQgZXNjYXBlc1xuICB2YXIgbmVlZHNFc2NhcGUgPSAvW1xcXFxcXFwiXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAvLyBuZWVkc1F1b3RlcyB0ZXN0cyBpZiB0aGUgc3RyaW5nIGNhbiBiZSB3cml0dGVuIGFzIGEgcXVvdGVsZXNzIHN0cmluZyAoaW5jbHVkZXMgbmVlZHNFc2NhcGUgYnV0IHdpdGhvdXQgXFxcXCBhbmQgXFxcIilcbiAgdmFyIG5lZWRzUXVvdGVzID0gL15cXHN8XlwifF4nJyd8XiN8XlxcL1xcKnxeXFwvXFwvfF5cXHt8XlxcfXxeXFxbfF5cXF18Xjp8Xix8XFxzJHxbXFx4MDAtXFx4MWZcXHg3Zi1cXHg5ZlxcdTAwYWRcXHUwNjAwLVxcdTA2MDRcXHUwNzBmXFx1MTdiNFxcdTE3YjVcXHUyMDBjLVxcdTIwMGZcXHUyMDI4LVxcdTIwMmZcXHUyMDYwLVxcdTIwNmZcXHVmZWZmXFx1ZmZmMC1cXHVmZmZmXS9nO1xuICAvLyBuZWVkc0VzY2FwZU1MIHRlc3RzIGlmIHRoZSBzdHJpbmcgY2FuIGJlIHdyaXR0ZW4gYXMgYSBtdWx0aWxpbmUgc3RyaW5nIChpbmNsdWRlcyBuZWVkc0VzY2FwZSBidXQgd2l0aG91dCBcXG4sIFxcciwgXFxcXCBhbmQgXFxcIilcbiAgdmFyIG5lZWRzRXNjYXBlTUwgPSAvJycnfFtcXHgwMC1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG4gIC8vIHN0YXJ0cyB3aXRoIGEga2V5d29yZCBhbmQgb3B0aW9uYWxseSBpcyBmb2xsb3dlZCBieSBhIGNvbW1lbnRcbiAgdmFyIHN0YXJ0c1dpdGhLZXl3b3JkID0gL14odHJ1ZXxmYWxzZXxudWxsKVxccyooKCx8XFxdfFxcfXwjfFxcL1xcL3xcXC9cXCopLiopPyQvO1xuICB2YXIgbWV0YSA9XG4gIHsgIC8vIHRhYmxlIG9mIGNoYXJhY3RlciBzdWJzdGl0dXRpb25zXG4gICAgJ1xcYic6ICdiJyxcbiAgICAnXFx0JzogJ3QnLFxuICAgICdcXG4nOiAnbicsXG4gICAgJ1xcZic6ICdmJyxcbiAgICAnXFxyJzogJ3InLFxuICAgICdcIicgOiAnXCInLFxuICAgICdcXFxcJzogJ1xcXFwnXG4gIH07XG4gIHZhciBuZWVkc0VzY2FwZU5hbWUgPSAvWyxcXHtcXFtcXH1cXF1cXHM6I1wiXXxcXC9cXC98XFwvXFwqfCcnJy87XG4gIHZhciBnYXAgPSAnJztcbiAgdmFyIGluZGVudCA9ICcgICc7XG4gIC8vIG9wdGlvbnNcbiAgdmFyIGVvbCwga2VlcENvbW1lbnRzLCBicmFjZXNTYW1lTGluZSwgcXVvdGVBbHdheXM7XG4gIHZhciB0b2tlbiA9IHtcbiAgICBvYmo6ICBbICd7JywgJ30nIF0sXG4gICAgYXJyOiAgWyAnWycsICddJyBdLFxuICAgIGtleTogIFsgJycsICAnJyBdLFxuICAgIHFrZXk6IFsgJ1wiJywgJ1wiJyBdLFxuICAgIGNvbDogIFsgJzonIF0sXG4gICAgc3RyOiAgWyAnJywgJycgXSxcbiAgICBxc3RyOiBbICdcIicsICdcIicgXSxcbiAgICBtc3RyOiBbIFwiJycnXCIsIFwiJycnXCIgXSxcbiAgICBudW06ICBbICcnLCAnJyBdLFxuICAgIGxpdDogIFsgJycsICcnIF0sXG4gICAgZHNmOiAgWyAnJywgJycgXSxcbiAgICBlc2M6ICBbICdcXFxcJywgJycgXSxcbiAgICB1bmk6ICBbICdcXFxcdScsICcnIF0sXG4gICAgcmVtOiAgWyAnJywgJycgXSxcbiAgfTtcblxuICBmdW5jdGlvbiB3cmFwKHRrLCB2KSB7IHJldHVybiB0a1swXSArIHYgKyB0a1sxXTsgfVxuXG4gIGZ1bmN0aW9uIHF1b3RlUmVwbGFjZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UobmVlZHNFc2NhcGUsIGZ1bmN0aW9uIChhKSB7XG4gICAgICB2YXIgYyA9IG1ldGFbYV07XG4gICAgICBpZiAodHlwZW9mIGMgPT09ICdzdHJpbmcnKSByZXR1cm4gd3JhcCh0b2tlbi5lc2MsIGMpO1xuICAgICAgZWxzZSByZXR1cm4gd3JhcCh0b2tlbi51bmksICgnMDAwMCcgKyBhLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpKS5zbGljZSgtNCkpO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gcXVvdGUoc3RyaW5nLCBnYXAsIGhhc0NvbW1lbnQsIGlzUm9vdE9iamVjdCkge1xuICAgIGlmICghc3RyaW5nKSByZXR1cm4gd3JhcCh0b2tlbi5xc3RyLCAnJyk7XG5cbiAgICBuZWVkc1F1b3Rlcy5sYXN0SW5kZXggPSAwO1xuICAgIHN0YXJ0c1dpdGhLZXl3b3JkLmxhc3RJbmRleCA9IDA7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBjYW4gaW5zZXJ0IHRoaXMgc3RyaW5nIHdpdGhvdXQgcXVvdGVzXG4gICAgLy8gc2VlIGhqc29uIHN5bnRheCAobXVzdCBub3QgcGFyc2UgYXMgdHJ1ZSwgZmFsc2UsIG51bGwgb3IgbnVtYmVyKVxuXG4gICAgaWYgKHF1b3RlQWx3YXlzIHx8IGhhc0NvbW1lbnQgfHxcbiAgICAgIG5lZWRzUXVvdGVzLnRlc3Qoc3RyaW5nKSB8fFxuICAgICAgY29tbW9uLnRyeVBhcnNlTnVtYmVyKHN0cmluZywgdHJ1ZSkgIT09IHVuZGVmaW5lZCB8fFxuICAgICAgc3RhcnRzV2l0aEtleXdvcmQudGVzdChzdHJpbmcpKSB7XG5cbiAgICAgIC8vIElmIHRoZSBzdHJpbmcgY29udGFpbnMgbm8gY29udHJvbCBjaGFyYWN0ZXJzLCBubyBxdW90ZSBjaGFyYWN0ZXJzLCBhbmQgbm9cbiAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG4gICAgICAvLyBPdGhlcndpc2Ugd2UgZmlyc3QgY2hlY2sgaWYgdGhlIHN0cmluZyBjYW4gYmUgZXhwcmVzc2VkIGluIG11bHRpbGluZVxuICAgICAgLy8gZm9ybWF0IG9yIHdlIG11c3QgcmVwbGFjZSB0aGUgb2ZmZW5kaW5nIGNoYXJhY3RlcnMgd2l0aCBzYWZlIGVzY2FwZVxuICAgICAgLy8gc2VxdWVuY2VzLlxuXG4gICAgICBuZWVkc0VzY2FwZS5sYXN0SW5kZXggPSAwO1xuICAgICAgbmVlZHNFc2NhcGVNTC5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKCFuZWVkc0VzY2FwZS50ZXN0KHN0cmluZykpIHJldHVybiB3cmFwKHRva2VuLnFzdHIsIHN0cmluZyk7XG4gICAgICBlbHNlIGlmICghbmVlZHNFc2NhcGVNTC50ZXN0KHN0cmluZykgJiYgIWlzUm9vdE9iamVjdCkgcmV0dXJuIG1sU3RyaW5nKHN0cmluZywgZ2FwKTtcbiAgICAgIGVsc2UgcmV0dXJuIHdyYXAodG9rZW4ucXN0ciwgcXVvdGVSZXBsYWNlKHN0cmluZykpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gd2l0aG91dCBxdW90ZXNcbiAgICAgIHJldHVybiB3cmFwKHRva2VuLnN0ciwgc3RyaW5nKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBtbFN0cmluZyhzdHJpbmcsIGdhcCkge1xuICAgIC8vIHdyYXAgdGhlIHN0cmluZyBpbnRvIHRoZSAnJycgKG11bHRpbGluZSkgZm9ybWF0XG5cbiAgICB2YXIgaSwgYSA9IHN0cmluZy5yZXBsYWNlKC9cXHIvZywgXCJcIikuc3BsaXQoJ1xcbicpO1xuICAgIGdhcCArPSBpbmRlbnQ7XG5cbiAgICBpZiAoYS5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIFRoZSBzdHJpbmcgY29udGFpbnMgb25seSBhIHNpbmdsZSBsaW5lLiBXZSBzdGlsbCB1c2UgdGhlIG11bHRpbGluZVxuICAgICAgLy8gZm9ybWF0IGFzIGl0IGF2b2lkcyBlc2NhcGluZyB0aGUgXFwgY2hhcmFjdGVyIChlLmcuIHdoZW4gdXNlZCBpbiBhXG4gICAgICAvLyByZWdleCkuXG4gICAgICByZXR1cm4gd3JhcCh0b2tlbi5tc3RyLCBhWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlcyA9IGVvbCArIGdhcCArIHRva2VuLm1zdHJbMF07XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkrKykge1xuICAgICAgICByZXMgKz0gZW9sO1xuICAgICAgICBpZiAoYVtpXSkgcmVzICs9IGdhcCArIGFbaV07XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzICsgZW9sICsgZ2FwICsgdG9rZW4ubXN0clsxXTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBxdW90ZUtleShuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSByZXR1cm4gJ1wiXCInO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGluc2VydCB0aGlzIGtleSB3aXRob3V0IHF1b3Rlc1xuXG4gICAgaWYgKG5lZWRzRXNjYXBlTmFtZS50ZXN0KG5hbWUpKSB7XG4gICAgICBuZWVkc0VzY2FwZS5sYXN0SW5kZXggPSAwO1xuICAgICAgcmV0dXJuIHdyYXAodG9rZW4ucWtleSwgbmVlZHNFc2NhcGUudGVzdChuYW1lKSA/IHF1b3RlUmVwbGFjZShuYW1lKSA6IG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyByZXR1cm4gd2l0aG91dCBxdW90ZXNcbiAgICAgIHJldHVybiB3cmFwKHRva2VuLmtleSwgbmFtZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc3RyKHZhbHVlLCBoYXNDb21tZW50LCBub0luZGVudCwgaXNSb290T2JqZWN0KSB7XG4gICAgLy8gUHJvZHVjZSBhIHN0cmluZyBmcm9tIHZhbHVlLlxuXG4gICAgZnVuY3Rpb24gc3RhcnRzV2l0aE5MKHN0cikgeyByZXR1cm4gc3RyICYmIHN0cltzdHJbMF0gPT09ICdcXHInID8gMSA6IDBdID09PSAnXFxuJzsgfVxuICAgIGZ1bmN0aW9uIGNvbW1lbnRPblRoaXNMaW5lKHN0cikgeyByZXR1cm4gc3RyICYmICFzdGFydHNXaXRoTkwoc3RyKTsgfVxuICAgIGZ1bmN0aW9uIG1ha2VDb21tZW50KHN0ciwgcHJlZml4LCB0cmltKSB7XG4gICAgICBpZiAoIXN0cikgcmV0dXJuIFwiXCI7XG4gICAgICBzdHIgPSBjb21tb24uZm9yY2VDb21tZW50KHN0cik7XG4gICAgICB2YXIgaSwgbGVuID0gc3RyLmxlbmd0aDtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gJiYgc3RyW2ldIDw9ICcgJzsgaSsrKSB7fVxuICAgICAgaWYgKHRyaW0gJiYgaSA+IDApIHN0ciA9IHN0ci5zdWJzdHIoaSk7XG4gICAgICBpZiAoaSA8IGxlbikgcmV0dXJuIHByZWZpeCArIHdyYXAodG9rZW4ucmVtLCBzdHIpO1xuICAgICAgZWxzZSByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIC8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cblxuICAgIC8vIGNoZWNrIGZvciBEU0ZcbiAgICB2YXIgZHNmVmFsdWUgPSBydW5Ec2YodmFsdWUpO1xuICAgIGlmIChkc2ZWYWx1ZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gd3JhcCh0b2tlbi5kc2YsIGRzZlZhbHVlKTtcblxuICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICByZXR1cm4gcXVvdGUodmFsdWUsIGdhcCwgaGFzQ29tbWVudCwgaXNSb290T2JqZWN0KTtcblxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgLy8gSlNPTiBudW1iZXJzIG11c3QgYmUgZmluaXRlLiBFbmNvZGUgbm9uLWZpbml0ZSBudW1iZXJzIGFzIG51bGwuXG4gICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyB3cmFwKHRva2VuLm51bSwgU3RyaW5nKHZhbHVlKSkgOiB3cmFwKHRva2VuLmxpdCwgJ251bGwnKTtcblxuICAgICAgY2FzZSAnYm9vbGVhbic6XG4gICAgICAgIHJldHVybiB3cmFwKHRva2VuLmxpdCwgU3RyaW5nKHZhbHVlKSk7XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIC8vIElmIHRoZSB0eXBlIGlzICdvYmplY3QnLCB3ZSBtaWdodCBiZSBkZWFsaW5nIHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9yXG4gICAgICAgIC8vIG51bGwuXG5cbiAgICAgICAgLy8gRHVlIHRvIGEgc3BlY2lmaWNhdGlvbiBibHVuZGVyIGluIEVDTUFTY3JpcHQsIHR5cGVvZiBudWxsIGlzICdvYmplY3QnLFxuICAgICAgICAvLyBzbyB3YXRjaCBvdXQgZm9yIHRoYXQgY2FzZS5cblxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gd3JhcCh0b2tlbi5saXQsICdudWxsJyk7XG5cbiAgICAgICAgdmFyIGNvbW1lbnRzOyAvLyB3aGl0ZXNwYWNlICYgY29tbWVudHNcbiAgICAgICAgaWYgKGtlZXBDb21tZW50cykgY29tbWVudHMgPSBjb21tb24uZ2V0Q29tbWVudCh2YWx1ZSk7XG5cbiAgICAgICAgdmFyIGlzQXJyYXkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblxuICAgICAgICAvLyBNYWtlIGFuIGFycmF5IHRvIGhvbGQgdGhlIHBhcnRpYWwgcmVzdWx0cyBvZiBzdHJpbmdpZnlpbmcgdGhpcyBvYmplY3QgdmFsdWUuXG4gICAgICAgIHZhciBtaW5kID0gZ2FwO1xuICAgICAgICBnYXAgKz0gaW5kZW50O1xuICAgICAgICB2YXIgZW9sTWluZCA9IGVvbCArIG1pbmQ7XG4gICAgICAgIHZhciBlb2xHYXAgPSBlb2wgKyBnYXA7XG4gICAgICAgIHZhciBwcmVmaXggPSBub0luZGVudCB8fCBicmFjZXNTYW1lTGluZSA/ICcnIDogZW9sTWluZDtcbiAgICAgICAgdmFyIHBhcnRpYWwgPSBbXTtcblxuICAgICAgICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG4gICAgICAgIHZhciBrLCB2OyAvLyBrZXksIHZhbHVlXG4gICAgICAgIHZhciBjLCBjYTtcblxuICAgICAgICBpZiAoaXNBcnJheSkge1xuICAgICAgICAgIC8vIFRoZSB2YWx1ZSBpcyBhbiBhcnJheS4gU3RyaW5naWZ5IGV2ZXJ5IGVsZW1lbnQuIFVzZSBudWxsIGFzIGEgcGxhY2Vob2xkZXJcbiAgICAgICAgICAvLyBmb3Igbm9uLUpTT04gdmFsdWVzLlxuXG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0gdmFsdWUubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21tZW50cykge1xuICAgICAgICAgICAgICBjID0gY29tbWVudHMuYVtpXXx8W107XG4gICAgICAgICAgICAgIGNhID0gY29tbWVudE9uVGhpc0xpbmUoY1sxXSk7XG4gICAgICAgICAgICAgIHBhcnRpYWwucHVzaChtYWtlQ29tbWVudChjWzBdLCBcIlxcblwiKSArIGVvbEdhcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJ0aWFsLnB1c2goc3RyKHZhbHVlW2ldLCBjb21tZW50cyA/IGNhIDogZmFsc2UsIHRydWUpIHx8IHdyYXAodG9rZW4ubGl0LCAnbnVsbCcpKTtcbiAgICAgICAgICAgIGlmIChjb21tZW50cyAmJiBjWzFdKSBwYXJ0aWFsLnB1c2gobWFrZUNvbW1lbnQoY1sxXSwgY2EgPyBcIiBcIiA6IFwiXFxuXCIsIGNhKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbW1lbnRzKSB7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgIC8vIHdoZW4gZW1wdHlcbiAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKChjb21tZW50cy5lID8gbWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgXCJcXG5cIikgOiBcIlwiKSArIGVvbE1pbmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBwYXJ0aWFsLnB1c2goZW9sTWluZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSm9pbiBhbGwgb2YgdGhlIGVsZW1lbnRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBuZXdsaW5lLCBhbmQgd3JhcCB0aGVtIGluXG4gICAgICAgICAgLy8gYnJhY2tldHMuXG5cbiAgICAgICAgICBpZiAoY29tbWVudHMpIHYgPSBwcmVmaXggKyB3cmFwKHRva2VuLmFyciwgcGFydGlhbC5qb2luKCcnKSk7XG4gICAgICAgICAgZWxzZSBpZiAocGFydGlhbC5sZW5ndGggPT09IDApIHYgPSB3cmFwKHRva2VuLmFyciwgJycpO1xuICAgICAgICAgIGVsc2UgdiA9IHByZWZpeCArIHdyYXAodG9rZW4uYXJyLCBlb2xHYXAgKyBwYXJ0aWFsLmpvaW4oZW9sR2FwKSArIGVvbE1pbmQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE90aGVyd2lzZSwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUga2V5cyBpbiB0aGUgb2JqZWN0LlxuXG4gICAgICAgICAgaWYgKGNvbW1lbnRzKSB7XG4gICAgICAgICAgICB2YXIga2V5cyA9IGNvbW1lbnRzLm8uc2xpY2UoKTtcbiAgICAgICAgICAgIGZvciAoayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbHVlLCBrKSAmJiBrZXlzLmluZGV4T2YoaykgPCAwKVxuICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBrID0ga2V5c1tpXTtcbiAgICAgICAgICAgICAgYyA9IGNvbW1lbnRzLmNba118fFtdO1xuICAgICAgICAgICAgICBjYSA9IGNvbW1lbnRPblRoaXNMaW5lKGNbMV0pO1xuICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2gobWFrZUNvbW1lbnQoY1swXSwgXCJcXG5cIikgKyBlb2xHYXApO1xuXG4gICAgICAgICAgICAgIHYgPSBzdHIodmFsdWVba10sIGNhKTtcbiAgICAgICAgICAgICAgaWYgKHYpIHBhcnRpYWwucHVzaChxdW90ZUtleShrKSArIHRva2VuLmNvbCArIChzdGFydHNXaXRoTkwodikgPyAnJyA6ICcgJykgKyB2KTtcbiAgICAgICAgICAgICAgaWYgKGNvbW1lbnRzICYmIGNbMV0pIHBhcnRpYWwucHVzaChtYWtlQ29tbWVudChjWzFdLCBjYSA/IFwiIFwiIDogXCJcXG5cIiwgY2EpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgLy8gd2hlbiBlbXB0eVxuICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2goKGNvbW1lbnRzLmUgPyBtYWtlQ29tbWVudChjb21tZW50cy5lWzBdLCBcIlxcblwiKSA6IFwiXCIpICsgZW9sTWluZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHBhcnRpYWwucHVzaChlb2xNaW5kKTtcblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGsgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcbiAgICAgICAgICAgICAgICB2ID0gc3RyKHZhbHVlW2tdKTtcbiAgICAgICAgICAgICAgICBpZiAodikgcGFydGlhbC5wdXNoKHF1b3RlS2V5KGspICsgdG9rZW4uY29sICsgKHN0YXJ0c1dpdGhOTCh2KSA/ICcnIDogJyAnKSArIHYpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gSm9pbiBhbGwgb2YgdGhlIG1lbWJlciB0ZXh0cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggbmV3bGluZXNcbiAgICAgICAgICBpZiAocGFydGlhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHYgPSB3cmFwKHRva2VuLm9iaiwgJycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBhbmQgd3JhcCB0aGVtIGluIGJyYWNlc1xuICAgICAgICAgICAgaWYgKGNvbW1lbnRzKSB2ID0gcHJlZml4ICsgd3JhcCh0b2tlbi5vYmosIHBhcnRpYWwuam9pbignJykpO1xuICAgICAgICAgICAgZWxzZSB2ID0gcHJlZml4ICsgd3JhcCh0b2tlbi5vYmosIGVvbEdhcCArIHBhcnRpYWwuam9pbihlb2xHYXApICsgZW9sTWluZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZ2FwID0gbWluZDtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGpzb25TdHJpbmdpZnkodmFsdWUsIG9wdCkge1xuICAgIHZhciBpLCBzcGFjZTtcbiAgICB2YXIgZHNmRGVmID0gbnVsbDtcblxuICAgIGVvbCA9IGNvbW1vbi5FT0w7XG4gICAgaW5kZW50ID0gJyAgJztcbiAgICBrZWVwQ29tbWVudHMgPSBmYWxzZTtcbiAgICBicmFjZXNTYW1lTGluZSA9IGZhbHNlO1xuICAgIHF1b3RlQWx3YXlzID0gZmFsc2U7XG5cbiAgICBpZiAob3B0ICYmIHR5cGVvZiBvcHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAob3B0LmVvbCA9PT0gJ1xcbicgfHwgb3B0LmVvbCA9PT0gJ1xcclxcbicpIGVvbCA9IG9wdC5lb2w7XG4gICAgICBzcGFjZSA9IG9wdC5zcGFjZTtcbiAgICAgIGtlZXBDb21tZW50cyA9IG9wdC5rZWVwV3NjO1xuICAgICAgYnJhY2VzU2FtZUxpbmUgPSBvcHQuYnJhY2VzU2FtZUxpbmU7XG4gICAgICBxdW90ZUFsd2F5cyA9IG9wdC5xdW90ZXMgPT09ICdhbHdheXMnO1xuICAgICAgZHNmRGVmID0gb3B0LmRzZjtcblxuICAgICAgaWYgKG9wdC5jb2xvcnMgPT09IHRydWUpIHtcbiAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgb2JqOiAgWyAnXFx4MWJbMzA7MW17XFx4MWJbMG0nLCAnXFx4MWJbMzA7MW19XFx4MWJbMG0nIF0sXG4gICAgICAgICAgYXJyOiAgWyAnXFx4MWJbMzA7MW1bXFx4MWJbMG0nLCAnXFx4MWJbMzA7MW1dXFx4MWJbMG0nIF0sXG4gICAgICAgICAga2V5OiAgWyAnXFx4MWJbMzNtJywgICdcXHgxYlswbScgXSxcbiAgICAgICAgICBxa2V5OiBbICdcXHgxYlszM21cIicsICdcIlxceDFiWzBtJyBdLFxuICAgICAgICAgIGNvbDogIFsgJ1xceDFiWzM3bTpcXHgxYlswbScgXSxcbiAgICAgICAgICBzdHI6ICBbICdcXHgxYlszNzsxbScsICdcXHgxYlswbScgXSxcbiAgICAgICAgICBxc3RyOiBbICdcXHgxYlszNzsxbVwiJywgJ1wiXFx4MWJbMG0nIF0sXG4gICAgICAgICAgbXN0cjogWyBcIlxceDFiWzM3OzFtJycnXCIsIFwiJycnXFx4MWJbMG1cIiBdLFxuICAgICAgICAgIG51bTogIFsgJ1xceDFiWzM2OzFtJywgJ1xceDFiWzBtJyBdLFxuICAgICAgICAgIGxpdDogIFsgJ1xceDFiWzM2bScsICdcXHgxYlswbScgXSxcbiAgICAgICAgICBkc2Y6ICBbICdcXHgxYlszN20nLCAnXFx4MWJbMG0nIF0sXG4gICAgICAgICAgZXNjOiAgWyAnXFx4MWJbMzFtXFxcXCcsICdcXHgxYlswbScgXSxcbiAgICAgICAgICB1bmk6ICBbICdcXHgxYlszMW1cXFxcdScsICdcXHgxYlswbScgXSxcbiAgICAgICAgICByZW06ICBbICdcXHgxYlszMDsxbScsICdcXHgxYlswbScgXSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBydW5Ec2YgPSBkc2YubG9hZERzZihkc2ZEZWYsICdzdHJpbmdpZnknKTtcblxuICAgIC8vIElmIHRoZSBzcGFjZSBwYXJhbWV0ZXIgaXMgYSBudW1iZXIsIG1ha2UgYW4gaW5kZW50IHN0cmluZyBjb250YWluaW5nIHRoYXRcbiAgICAvLyBtYW55IHNwYWNlcy4gSWYgaXQgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblxuICAgIGlmICh0eXBlb2Ygc3BhY2UgPT09ICdudW1iZXInKSB7XG4gICAgICBpbmRlbnQgPSAnJztcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBzcGFjZTsgaSsrKSBpbmRlbnQgKz0gJyAnO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHNwYWNlID09PSAnc3RyaW5nJykge1xuICAgICAgaW5kZW50ID0gc3BhY2U7XG4gICAgfVxuXG4gICAgdmFyIHJlcyA9IFwiXCI7XG4gICAgdmFyIGNvbW1lbnRzID0ga2VlcENvbW1lbnRzID8gY29tbWVudHMgPSAoY29tbW9uLmdldENvbW1lbnQodmFsdWUpIHx8IHt9KS5yIDogbnVsbDtcbiAgICBpZiAoY29tbWVudHMgJiYgY29tbWVudHNbMF0pIHJlcyA9IGNvbW1lbnRzWzBdICsgJ1xcbic7XG5cbiAgICAvLyBnZXQgdGhlIHJlc3VsdCBvZiBzdHJpbmdpZnlpbmcgdGhlIHZhbHVlLlxuICAgIHJlcyArPSBzdHIodmFsdWUsIG51bGwsIHRydWUsIHRydWUpO1xuXG4gICAgaWYgKGNvbW1lbnRzKSByZXMgKz0gY29tbWVudHNbMV18fFwiXCI7XG5cbiAgICByZXR1cm4gcmVzO1xuICB9XG5cbiAgcmV0dXJuIGhqc29uU3RyaW5naWZ5KCR2YWx1ZSwgJG9wdCk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vaGpzb24vbGliL2hqc29uLXN0cmluZ2lmeS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKiBIanNvbiBodHRwOi8vaGpzb24ub3JnICovXG4vKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjb21tb249cmVxdWlyZShcIi4vaGpzb24tY29tbW9uXCIpO1xuXG5mdW5jdGlvbiBtYWtlQ29tbWVudChiLCBhLCB4KSB7XG4gIHZhciBjO1xuICBpZiAoYikgYz17IGI6IGIgfTtcbiAgaWYgKGEpIChjPWN8fHt9KS5hPWE7XG4gIGlmICh4KSAoYz1jfHx7fSkueD14O1xuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gZXh0cmFjdENvbW1lbnRzKHZhbHVlLCByb290KSB7XG5cbiAgaWYgKHZhbHVlPT09bnVsbCB8fCB0eXBlb2YgdmFsdWUhPT0nb2JqZWN0JykgcmV0dXJuO1xuICB2YXIgY29tbWVudHM9Y29tbW9uLmdldENvbW1lbnQodmFsdWUpO1xuICBpZiAoY29tbWVudHMpIGNvbW1vbi5yZW1vdmVDb21tZW50KHZhbHVlKTtcblxuICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG4gIHZhciBhbnksIHJlcztcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgcmVzPXsgYTogW10gfTtcbiAgICBmb3IgKGk9MCwgbGVuZ3RoPXZhbHVlLmxlbmd0aDsgaTxsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHNhdmVDb21tZW50KHJlcy5hLCBpLCBjb21tZW50cy5hW2ldLCBleHRyYWN0Q29tbWVudHModmFsdWVbaV0pKSlcbiAgICAgICAgYW55PXRydWU7XG4gICAgfVxuICAgIGlmICghYW55ICYmIGNvbW1lbnRzLmUpe1xuICAgICAgcmVzLmU9bWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgY29tbWVudHMuZVsxXSk7XG4gICAgICBhbnk9dHJ1ZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVzPXsgczoge30gfTtcblxuICAgIC8vIGdldCBrZXkgb3JkZXIgKGNvbW1lbnRzIGFuZCBjdXJyZW50KVxuICAgIHZhciBrZXlzLCBjdXJyZW50S2V5cz1PYmplY3Qua2V5cyh2YWx1ZSk7XG4gICAgaWYgKGNvbW1lbnRzICYmIGNvbW1lbnRzLm8pIHtcbiAgICAgIGtleXM9W107XG4gICAgICBjb21tZW50cy5vLmNvbmNhdChjdXJyZW50S2V5cykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSAmJiBrZXlzLmluZGV4T2Yoa2V5KTwwKVxuICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGtleXM9Y3VycmVudEtleXM7XG4gICAgcmVzLm89a2V5cztcblxuICAgIC8vIGV4dHJhY3QgY29tbWVudHNcbiAgICBmb3IgKGk9MCwgbGVuZ3RoPWtleXMubGVuZ3RoOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga2V5PWtleXNbaV07XG4gICAgICBpZiAoc2F2ZUNvbW1lbnQocmVzLnMsIGtleSwgY29tbWVudHMuY1trZXldLCBleHRyYWN0Q29tbWVudHModmFsdWVba2V5XSkpKVxuICAgICAgICBhbnk9dHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFhbnkgJiYgY29tbWVudHMuZSkge1xuICAgICAgcmVzLmU9bWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgY29tbWVudHMuZVsxXSk7XG4gICAgICBhbnk9dHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAocm9vdCAmJiBjb21tZW50cyAmJiBjb21tZW50cy5yKSB7XG4gICAgcmVzLnI9bWFrZUNvbW1lbnQoY29tbWVudHMuclswXSwgY29tbWVudHMuclsxXSk7XG4gIH1cblxuICByZXR1cm4gYW55P3Jlczp1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIG1lcmdlU3RyKCkge1xuICB2YXIgcmVzPVwiXCI7XG4gIFtdLmZvckVhY2guY2FsbChhcmd1bWVudHMsIGZ1bmN0aW9uKGMpIHtcbiAgICBpZiAoYyAmJiBjLnRyaW0oKSE9PVwiXCIpIHtcbiAgICAgIGlmIChyZXMpIHJlcys9XCI7IFwiO1xuICAgICAgcmVzKz1jLnRyaW0oKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtZXJnZUNvbW1lbnRzKGNvbW1lbnRzLCB2YWx1ZSkge1xuICB2YXIgZHJvcHBlZD1bXTtcbiAgbWVyZ2UoY29tbWVudHMsIHZhbHVlLCBkcm9wcGVkLCBbXSk7XG5cbiAgLy8gYXBwZW5kIGRyb3BwZWQgY29tbWVudHM6XG4gIGlmIChkcm9wcGVkLmxlbmd0aD4wKSB7XG4gICAgdmFyIHRleHQ9cm9vdENvbW1lbnQodmFsdWUsIG51bGwsIDEpO1xuICAgIHRleHQrPVwiXFxuIyBPcnBoYW5lZCBjb21tZW50czpcXG5cIjtcbiAgICBkcm9wcGVkLmZvckVhY2goZnVuY3Rpb24oYykge1xuICAgICAgdGV4dCs9KFwiIyBcIitjLnBhdGguam9pbignLycpK1wiOiBcIittZXJnZVN0cihjLmIsIGMuYSwgYy5lKSkucmVwbGFjZShcIlxcblwiLCBcIlxcXFxuIFwiKStcIlxcblwiO1xuICAgIH0pO1xuICAgIHJvb3RDb21tZW50KHZhbHVlLCB0ZXh0LCAxKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzYXZlQ29tbWVudChyZXMsIGtleSwgaXRlbSwgY29sKSB7XG4gIHZhciBjPW1ha2VDb21tZW50KGl0ZW0/aXRlbVswXTp1bmRlZmluZWQsIGl0ZW0/aXRlbVsxXTp1bmRlZmluZWQsIGNvbCk7XG4gIGlmIChjKSByZXNba2V5XT1jO1xuICByZXR1cm4gYztcbn1cblxuZnVuY3Rpb24gZHJvcHBlZENvbW1lbnQocGF0aCwgYykge1xuICB2YXIgcmVzPW1ha2VDb21tZW50KGMuYiwgYy5hKTtcbiAgcmVzLnBhdGg9cGF0aDtcbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gZHJvcEFsbChjb21tZW50cywgZHJvcHBlZCwgcGF0aCkge1xuXG4gIGlmICghY29tbWVudHMpIHJldHVybjtcblxuICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG5cbiAgaWYgKGNvbW1lbnRzLmEpIHtcblxuICAgIGZvciAoaT0wLCBsZW5ndGg9Y29tbWVudHMuYS5sZW5ndGg7IGk8bGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrcGF0aD1wYXRoLnNsaWNlKCkuY29uY2F0KFtpXSk7XG4gICAgICB2YXIgYz1jb21tZW50cy5hW2ldO1xuICAgICAgaWYgKGMpIHtcbiAgICAgICAgZHJvcHBlZC5wdXNoKGRyb3BwZWRDb21tZW50KGtwYXRoLCBjKSk7XG4gICAgICAgIGRyb3BBbGwoYy54LCBkcm9wcGVkLCBrcGF0aCk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGNvbW1lbnRzLm8pIHtcblxuICAgIGNvbW1lbnRzLm8uZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHZhciBrcGF0aD1wYXRoLnNsaWNlKCkuY29uY2F0KFtrZXldKTtcbiAgICAgIHZhciBjPWNvbW1lbnRzLnNba2V5XTtcbiAgICAgIGlmIChjKSB7XG4gICAgICAgIGRyb3BwZWQucHVzaChkcm9wcGVkQ29tbWVudChrcGF0aCwgYykpO1xuICAgICAgICBkcm9wQWxsKGMueCwgZHJvcHBlZCwga3BhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbW1lbnRzLmUpXG4gICAgZHJvcHBlZC5wdXNoKGRyb3BwZWRDb21tZW50KHBhdGgsIGNvbW1lbnRzLmUpKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2UoY29tbWVudHMsIHZhbHVlLCBkcm9wcGVkLCBwYXRoKSB7XG5cbiAgaWYgKCFjb21tZW50cykgcmV0dXJuO1xuICBpZiAodmFsdWU9PT1udWxsIHx8IHR5cGVvZiB2YWx1ZSE9PSdvYmplY3QnKSB7XG4gICAgZHJvcEFsbChjb21tZW50cywgZHJvcHBlZCwgcGF0aCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGksIGxlbmd0aDsgLy8gbG9vcFxuICB2YXIgc2V0Q29tbWVudHM9Y29tbW9uLmNyZWF0ZUNvbW1lbnQodmFsdWUpO1xuXG4gIGlmIChwYXRoLmxlbmd0aD09PTAgJiYgY29tbWVudHMucilcbiAgICBzZXRDb21tZW50cy5yPVtjb21tZW50cy5yLmIsIGNvbW1lbnRzLnIuYV07XG5cbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgc2V0Q29tbWVudHMuYT1bXTtcbiAgICBmb3IgKGk9MCwgbGVuZ3RoPShjb21tZW50cy5hfHxbXSkubGVuZ3RoOyBpPGxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIga3BhdGg9cGF0aC5zbGljZSgpLmNvbmNhdChbaV0pO1xuICAgICAgdmFyIGM9Y29tbWVudHMuYVtpXTtcbiAgICAgIGlmICghYykgY29udGludWU7XG4gICAgICBpZiAoaTx2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgc2V0Q29tbWVudHMuYS5wdXNoKFtjLmIsIGMuYV0pO1xuICAgICAgICBtZXJnZShjLngsIHZhbHVlW2ldLCBkcm9wcGVkLCBrcGF0aCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkcm9wcGVkLnB1c2goZHJvcHBlZENvbW1lbnQoa3BhdGgsIGMpKTtcbiAgICAgICAgZHJvcEFsbChjLngsIGRyb3BwZWQsIGtwYXRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGk9PT0wICYmIGNvbW1lbnRzLmUpIHNldENvbW1lbnRzLmU9W2NvbW1lbnRzLmUuYiwgY29tbWVudHMuZS5hXTtcbiAgfSBlbHNlIHtcbiAgICBzZXRDb21tZW50cy5jPXt9O1xuICAgIHNldENvbW1lbnRzLm89W107XG4gICAgKGNvbW1lbnRzLm98fFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgdmFyIGtwYXRoPXBhdGguc2xpY2UoKS5jb25jYXQoW2tleV0pO1xuICAgICAgdmFyIGM9Y29tbWVudHMuc1trZXldO1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuICAgICAgICBzZXRDb21tZW50cy5vLnB1c2goa2V5KTtcbiAgICAgICAgaWYgKGMpIHtcbiAgICAgICAgICBzZXRDb21tZW50cy5jW2tleV09W2MuYiwgYy5hXTtcbiAgICAgICAgICBtZXJnZShjLngsIHZhbHVlW2tleV0sIGRyb3BwZWQsIGtwYXRoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjKSB7XG4gICAgICAgIGRyb3BwZWQucHVzaChkcm9wcGVkQ29tbWVudChrcGF0aCwgYykpO1xuICAgICAgICBkcm9wQWxsKGMueCwgZHJvcHBlZCwga3BhdGgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChjb21tZW50cy5lKSBzZXRDb21tZW50cy5lPVtjb21tZW50cy5lLmIsIGNvbW1lbnRzLmUuYV07XG4gIH1cbn1cblxuZnVuY3Rpb24gcm9vdENvbW1lbnQodmFsdWUsIHNldFRleHQsIGhlYWRlcikge1xuICB2YXIgY29tbWVudD1jb21tb24uY3JlYXRlQ29tbWVudCh2YWx1ZSwgY29tbW9uLmdldENvbW1lbnQodmFsdWUpKTtcbiAgaWYgKCFjb21tZW50LnIpIGNvbW1lbnQucj1bXCJcIiwgXCJcIl07XG4gIGlmIChzZXRUZXh0IHx8IHNldFRleHQ9PT1cIlwiKSBjb21tZW50LnJbaGVhZGVyXT1jb21tb24uZm9yY2VDb21tZW50KHNldFRleHQpO1xuICByZXR1cm4gY29tbWVudC5yW2hlYWRlcl18fFwiXCI7XG59XG5cbm1vZHVsZS5leHBvcnRzPXtcbiAgZXh0cmFjdDogZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIGV4dHJhY3RDb21tZW50cyh2YWx1ZSwgdHJ1ZSk7IH0sXG4gIG1lcmdlOiBtZXJnZUNvbW1lbnRzLFxuICBoZWFkZXI6IGZ1bmN0aW9uKHZhbHVlLCBzZXRUZXh0KSB7IHJldHVybiByb290Q29tbWVudCh2YWx1ZSwgc2V0VGV4dCwgMCk7IH0sXG4gIGZvb3RlcjogZnVuY3Rpb24odmFsdWUsIHNldFRleHQpIHsgcmV0dXJuIHJvb3RDb21tZW50KHZhbHVlLCBzZXRUZXh0LCAxKTsgfSxcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9oanNvbi9saWIvaGpzb24tY29tbWVudHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==