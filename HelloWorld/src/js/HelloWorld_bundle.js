var HelloWorld =
/******/ (function(modules) { // webpackBootstrap
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
	exports.HelloWorld = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MMapBaseClass2 = __webpack_require__(1);
	
	var _MMapBaseClass3 = _interopRequireDefault(_MMapBaseClass2);
	
	var _utils = __webpack_require__(2);
	
	var utils = _interopRequireWildcard(_utils);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	// import Promise from "promise";  // Useful for handling async stuff
	
	
	// We should put utils in a common folder so we don't end up with one version per module.
	// import $ from "jQuery";
	
	var $ = jQuery; // It seems that Suckigo use 2 different jQuerys. "$" is NOT pointing at "jQuery". We need the one named jQuery but I am too lazy to type 6 letters.
	
	var HelloWorld = function (_MMapBaseClass) {
		_inherits(HelloWorld, _MMapBaseClass);
	
		function HelloWorld() {
			_classCallCheck(this, HelloWorld);
	
			// Calls the constructor method of the parent (super) class
	
			// Get options is an asynchrouneous method, which means it will 
			// not return the options directly. Instead it returns a Promise. The Promise has 2 methods:
			// 	- then: Takes a function as a parameter to handle the successful response (i.e. handle the options)
			// 	- catch: Takes a function as a parameter to handle the erroneous response (i.e. handle the error object)
			var _this = _possibleConstructorReturn(this, (HelloWorld.__proto__ || Object.getPrototypeOf(HelloWorld)).call(this));
	
			_this.dialogId = "helloworld-dialog";
			_this.initHooks = [];
			_this.isLoaded = false;
			_this.getOptions().then(function (options) {
				return _this.init(options);
			}).catch(function (error) {
				return console.log(error);
			}); // -> We could end up here if the option file(s) is not found or contains syntax errors.
			return _this;
		}
	
		_createClass(HelloWorld, [{
			key: "init",
			value: function init(options) {
				var lang = this.getLang(options);
				// this.lang = lang;
	
				// -- Do what you have to do to --
				this._drawDialog(lang, options.useBootstrapDialog);
			}
	
			/**
	   * Just an example of using Bootstrap's alert div
	   * @param  {String} msg  {string}
	   * @param  {String} type {string}
	   * @return {undefined}
	   */
	
		}, {
			key: "notify",
			value: function notify() {
				var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
				var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "success";
	
				// type = success/danger/info ...
				$("#helloworld-dialogdiv").append("<div class=\"alert alert-" + type + "\" role=\"alert\">" + msg + "</div>");
				setTimeout(function () {
					return $(".alert").remove();
				}, 10000);
			}
		}, {
			key: "onBtnClick",
			value: function onBtnClick() {
				var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
				this.notify(lang.alertMessage, "danger");
			}
		}, {
			key: "_drawDialog",
			value: function _drawDialog() {
				var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
				var useBootstrapDialog = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
	
				var $body = $('<div id="helloworld-dialogdiv" />');
				$body.append("<div><button class=\"btn btn-success\">" + lang.btnClickMe + "</button></div>");
				$body.find("button").on("click", this.onBtnClick.bind(this, lang));
				$body.append(lang.content);
				var $d = null;
				if (useBootstrapDialog) {
					var $footer = "<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">" + lang.btnCancel + "</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">" + lang.btnSave + "</button>";
					$d = utils.drawBootstrapDialog(lang.title, $body, $footer);
					$d.find(".modal-dialog").prop("id", this.dialogId);
				} else {
					var _$footer = "<div class=\"helloworld-csm-dialog-footer\"><button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">" + lang.btnCancel + "</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary\">" + lang.btnSave + "</button></div>";
					$body.append(_$footer);
					$d = utils.drawCSMDialog(lang.title, $body, {
						dialogId: this.dialogId
					});
				}
				this.$dialog = $d;
			}
		}, {
			key: "toggleDialog",
			value: function toggleDialog() {
				var isBootstrapModal = this.$dialog.modal && this.$dialog.modal.length;
				if (isBootstrapModal) {
					this.$dialog.modal("toggle");
				} else {
					var $d = this.$dialog;
					$d.isVisible() ? $d.hideDialog() : $d.showDialog(); // There is no toggle in CSM's Dialog
				}
			}
		}]);
	
		return HelloWorld;
	}(_MMapBaseClass3.default);
	
	exports.HelloWorld = HelloWorld;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
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

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.drawCSMDialog = drawCSMDialog;
	exports.drawBootstrapDialog = drawBootstrapDialog;
	
	var _Dialog = __webpack_require__(3);
	
	var _Dialog2 = _interopRequireDefault(_Dialog);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var $ = jQuery; // import $ from "jQuery";
	function drawCSMDialog(title, $body) {
		var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
		var $d = new _Dialog2.default({
			id: options.dialogId || undefined,
			resizable: options.resizable || false,
			title: title
		});
		$d._$dialogContent.append($body);
		return $d;
	}
	
	function drawBootstrapDialog(title, bodyContent, footerContent) {
		var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	
		var $d = $('<div class="modal fade"><div class="modal-dialog">\
				<div class="modal-content">\
					<div class="modal-header">\
						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + (title.search(/</g) === -1 ? '<h4 class="modal-title">' + title + '</h4>' : title) + '</div>\
				<div class="modal-body"></div>\
			</div>');
		$d.find(".modal-body").append(bodyContent);
		if (footerContent) {
			var footer = $('<div class="modal-footer"></div>');
			$d.find(".modal-body").after(footer);
			footer.append(footerContent);
		}
	
		if (options.size) {
			// $d.addClass("modal-"+options.size);
			$d.find(".modal-dialog").addClass("modal-" + options.size);
		}
	
		return $d;
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = Dialog;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMmQ1OTU1N2NlZWU2YmM5NzYyMzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0hlbGxvV29ybGQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9NTWFwQmFzZUNsYXNzL2Rpc3QvYnVuZGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy91dGlscy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJEaWFsb2dcIiJdLCJuYW1lcyI6WyJ1dGlscyIsIiQiLCJqUXVlcnkiLCJIZWxsb1dvcmxkIiwiZGlhbG9nSWQiLCJpbml0SG9va3MiLCJpc0xvYWRlZCIsImdldE9wdGlvbnMiLCJ0aGVuIiwiaW5pdCIsIm9wdGlvbnMiLCJjYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImxhbmciLCJnZXRMYW5nIiwiX2RyYXdEaWFsb2ciLCJ1c2VCb290c3RyYXBEaWFsb2ciLCJtc2ciLCJ0eXBlIiwiYXBwZW5kIiwic2V0VGltZW91dCIsInJlbW92ZSIsIm5vdGlmeSIsImFsZXJ0TWVzc2FnZSIsIiRib2R5IiwiYnRuQ2xpY2tNZSIsImZpbmQiLCJvbiIsIm9uQnRuQ2xpY2siLCJiaW5kIiwiY29udGVudCIsIiRkIiwiJGZvb3RlciIsImJ0bkNhbmNlbCIsImJ0blNhdmUiLCJkcmF3Qm9vdHN0cmFwRGlhbG9nIiwidGl0bGUiLCJwcm9wIiwiZHJhd0NTTURpYWxvZyIsIiRkaWFsb2ciLCJpc0Jvb3RzdHJhcE1vZGFsIiwibW9kYWwiLCJsZW5ndGgiLCJpc1Zpc2libGUiLCJoaWRlRGlhbG9nIiwic2hvd0RpYWxvZyIsImlkIiwidW5kZWZpbmVkIiwicmVzaXphYmxlIiwiXyRkaWFsb2dDb250ZW50IiwiYm9keUNvbnRlbnQiLCJmb290ZXJDb250ZW50Iiwic2VhcmNoIiwiZm9vdGVyIiwiYWZ0ZXIiLCJzaXplIiwiYWRkQ2xhc3MiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7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QUFFQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUEsU0FBUSxZQUFZO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7O0FBSUEsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7OztBQUdBLFFBQU87QUFD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O0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047O0FBRUE7QUFDQSx5Q0FBd0MsMEJBQTBCO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBZ0MsMEJBQTBCLGVBQWU7QUFDekU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUTs7QUFFUjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRTs7O0FBR0YsUUFBTztBQUNQO0FBQ0E7O0FBRUEsY0FBYSx1REFBdUQ7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRSxxQkFBcUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1GQUFrRjs7QUFFbEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUEyQixzQkFBc0I7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQWtCLFNBQVM7QUFDM0I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVE7QUFDUixPQUFNO0FBQ04sS0FBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxJQUFJO0FBQ2Y7QUFDQSxhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFrQix3QkFBd0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ04sS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBa0IsdUNBQXVDO0FBQ3pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0EsWUFBVyxNQUFNO0FBQ2pCLFlBQVcsT0FBTztBQUNsQjtBQUNBLGFBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOLEtBQUk7O0FBRUo7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sS0FBSTs7QUFFSjtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sS0FBSTs7QUFFSjtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXLE1BQU07QUFDakI7QUFDQSxhQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ04sS0FBSTtBQUNKO0FBQ0E7QUFDQSx1QkFBc0IsWUFBWTtBQUNsQztBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7O0FBRUo7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLFlBQVcsSUFBSTtBQUNmO0FBQ0EsYUFBWSxRQUFRO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFJOztBQUVKO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQSxLQUFJO0FBQ0o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBLEtBQUk7QUFDSjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUk7QUFDSjs7QUFFQTtBQUNBLFlBQVcsU0FBUztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTTs7QUFFTjtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQSxPQUFNO0FBQ047O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0EsT0FBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2Q7QUFDQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSxhQUFZO0FBQ1osV0FBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFNO0FBQ047QUFDQSxPQUFNO0FBQ047O0FBRUE7QUFDQSxjQUFhLFNBQVM7QUFDdEIsY0FBYSxTQUFTO0FBQ3RCO0FBQ0EsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjs7QUFFQTtBQUNBLGNBQWEsU0FBUztBQUN0QjtBQUNBLGVBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsV0FBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsR0FBRTtBQUNGO0FBQ0EsOEJBQTZCLG9EQUFvRCxhQUFhLEVBQUU7O0FBRWhHLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLFdBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7QUFD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OzttR0FBQSxJQUlJcUMsTUFBTWdCLE1BQU4sQ0FBYSxJQUFiLE1BQXVCLENBQUMsQ0FBeEIsR0FBNEIsNkJBQTJCaEIsS0FBM0IsR0FBaUMsT0FBN0QsR0FBdUVBLEtBSjNFLElBS0U7O1VBTk0sQ0FBVDtBQVVBTCxLQUFHTCxJQUFILENBQVEsYUFBUixFQUF1QlAsTUFBdkIsQ0FBOEIrQixXQUE5QjtBQUNBLE1BQUlDLGFBQUosRUFBbUI7QUFDbEIsT0FBSUUsU0FBU3RELEVBQUUsa0NBQUYsQ0FBYjtBQUNBZ0MsTUFBR0wsSUFBSCxDQUFRLGFBQVIsRUFBdUI0QixLQUF2QixDQUE2QkQsTUFBN0I7QUFDQUEsVUFBT2xDLE1BQVAsQ0FBY2dDLGFBQWQ7QUFDQTs7QUFFRCxNQUFJM0MsUUFBUStDLElBQVosRUFBa0I7QUFDakI7QUFDQXhCLE1BQUdMLElBQUgsQ0FBUSxlQUFSLEVBQXlCOEIsUUFBekIsQ0FBa0MsV0FBU2hELFFBQVErQyxJQUFuRDtBQUNBOztBQUVELFNBQU94QixFQUFQO0FBQ0EsRTs7Ozs7O0FDekNELHlCIiwiZmlsZSI6IkhlbGxvV29ybGRfYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMmQ1OTU1N2NlZWU2YmM5NzYyMzkiLCJcbi8vIGltcG9ydCBQcm9taXNlIGZyb20gXCJwcm9taXNlXCI7ICAvLyBVc2VmdWwgZm9yIGhhbmRsaW5nIGFzeW5jIHN0dWZmXG5pbXBvcnQgTU1hcEJhc2VDbGFzcyBmcm9tIFwiTU1hcEJhc2VDbGFzc1wiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4vdXRpbHNcIjsgLy8gV2Ugc2hvdWxkIHB1dCB1dGlscyBpbiBhIGNvbW1vbiBmb2xkZXIgc28gd2UgZG9uJ3QgZW5kIHVwIHdpdGggb25lIHZlcnNpb24gcGVyIG1vZHVsZS5cbi8vIGltcG9ydCAkIGZyb20gXCJqUXVlcnlcIjtcblxubGV0ICQgPSBqUXVlcnk7IC8vIEl0IHNlZW1zIHRoYXQgU3Vja2lnbyB1c2UgMiBkaWZmZXJlbnQgalF1ZXJ5cy4gXCIkXCIgaXMgTk9UIHBvaW50aW5nIGF0IFwialF1ZXJ5XCIuIFdlIG5lZWQgdGhlIG9uZSBuYW1lZCBqUXVlcnkgYnV0IEkgYW0gdG9vIGxhenkgdG8gdHlwZSA2IGxldHRlcnMuXG5cbmNsYXNzIEhlbGxvV29ybGQgZXh0ZW5kcyBNTWFwQmFzZUNsYXNzIHtcblxuXHRkaWFsb2dJZCA9IFwiaGVsbG93b3JsZC1kaWFsb2dcIjtcblx0aW5pdEhvb2tzID0gW107XG5cdGlzTG9hZGVkID0gZmFsc2U7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0c3VwZXIoKTsgLy8gQ2FsbHMgdGhlIGNvbnN0cnVjdG9yIG1ldGhvZCBvZiB0aGUgcGFyZW50IChzdXBlcikgY2xhc3Ncblx0XHRcblx0XHQvLyBHZXQgb3B0aW9ucyBpcyBhbiBhc3luY2hyb3VuZW91cyBtZXRob2QsIHdoaWNoIG1lYW5zIGl0IHdpbGwgXG5cdFx0Ly8gbm90IHJldHVybiB0aGUgb3B0aW9ucyBkaXJlY3RseS4gSW5zdGVhZCBpdCByZXR1cm5zIGEgUHJvbWlzZS4gVGhlIFByb21pc2UgaGFzIDIgbWV0aG9kczpcblx0XHQvLyBcdC0gdGhlbjogVGFrZXMgYSBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlciB0byBoYW5kbGUgdGhlIHN1Y2Nlc3NmdWwgcmVzcG9uc2UgKGkuZS4gaGFuZGxlIHRoZSBvcHRpb25zKVxuXHRcdC8vIFx0LSBjYXRjaDogVGFrZXMgYSBmdW5jdGlvbiBhcyBhIHBhcmFtZXRlciB0byBoYW5kbGUgdGhlIGVycm9uZW91cyByZXNwb25zZSAoaS5lLiBoYW5kbGUgdGhlIGVycm9yIG9iamVjdClcblx0XHR0aGlzLmdldE9wdGlvbnMoKVxuXHRcdFx0LnRoZW4oIG9wdGlvbnMgPT4gdGhpcy5pbml0KG9wdGlvbnMpIClcblx0XHRcdC5jYXRjaCggZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpICk7IC8vIC0+IFdlIGNvdWxkIGVuZCB1cCBoZXJlIGlmIHRoZSBvcHRpb24gZmlsZShzKSBpcyBub3QgZm91bmQgb3IgY29udGFpbnMgc3ludGF4IGVycm9ycy5cblx0fVxuXG5cdGluaXQob3B0aW9ucykge1xuXHRcdGxldCBsYW5nID0gdGhpcy5nZXRMYW5nKG9wdGlvbnMpO1xuXHRcdC8vIHRoaXMubGFuZyA9IGxhbmc7XG5cblx0XHQvLyAtLSBEbyB3aGF0IHlvdSBoYXZlIHRvIGRvIHRvIC0tXG5cdFx0dGhpcy5fZHJhd0RpYWxvZyhsYW5nLCBvcHRpb25zLnVzZUJvb3RzdHJhcERpYWxvZyk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBKdXN0IGFuIGV4YW1wbGUgb2YgdXNpbmcgQm9vdHN0cmFwJ3MgYWxlcnQgZGl2XG5cdCAqIEBwYXJhbSAge1N0cmluZ30gbXNnICB7c3RyaW5nfVxuXHQgKiBAcGFyYW0gIHtTdHJpbmd9IHR5cGUge3N0cmluZ31cblx0ICogQHJldHVybiB7dW5kZWZpbmVkfVxuXHQgKi9cblx0bm90aWZ5KG1zZz1cIlwiLCB0eXBlPVwic3VjY2Vzc1wiKSB7XG5cdFx0Ly8gdHlwZSA9IHN1Y2Nlc3MvZGFuZ2VyL2luZm8gLi4uXG5cdFx0JChcIiNoZWxsb3dvcmxkLWRpYWxvZ2RpdlwiKS5hcHBlbmQoYDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC0ke3R5cGV9XCIgcm9sZT1cImFsZXJ0XCI+JHttc2d9PC9kaXY+YCk7XG5cdFx0c2V0VGltZW91dCgoKSA9PiAkKFwiLmFsZXJ0XCIpLnJlbW92ZSgpLCAxMDAwMCk7XG5cdH1cblxuXHRvbkJ0bkNsaWNrKGxhbmc9e30pIHtcblx0XHR0aGlzLm5vdGlmeShsYW5nLmFsZXJ0TWVzc2FnZSwgXCJkYW5nZXJcIik7XG5cdH1cblxuXHRfZHJhd0RpYWxvZyhsYW5nPXt9LCB1c2VCb290c3RyYXBEaWFsb2c9ZmFsc2UpIHtcblxuXHRcdGxldCAkYm9keSA9ICQoJzxkaXYgaWQ9XCJoZWxsb3dvcmxkLWRpYWxvZ2RpdlwiIC8+Jyk7XG5cdFx0JGJvZHkuYXBwZW5kKGA8ZGl2PjxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIj4ke2xhbmcuYnRuQ2xpY2tNZX08L2J1dHRvbj48L2Rpdj5gKTtcblx0XHQkYm9keS5maW5kKFwiYnV0dG9uXCIpLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkJ0bkNsaWNrLmJpbmQodGhpcywgbGFuZykgKTtcblx0XHQkYm9keS5hcHBlbmQobGFuZy5jb250ZW50KTtcblx0XHRsZXQgJGQgPSBudWxsO1xuXHRcdGlmICh1c2VCb290c3RyYXBEaWFsb2cpIHtcblx0XHRcdGxldCAkZm9vdGVyID0gYDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIj4ke2xhbmcuYnRuQ2FuY2VsfTwvYnV0dG9uPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiR7bGFuZy5idG5TYXZlfTwvYnV0dG9uPmA7XG5cdFx0XHQkZCA9IHV0aWxzLmRyYXdCb290c3RyYXBEaWFsb2cobGFuZy50aXRsZSwgJGJvZHksICRmb290ZXIpO1xuXHRcdFx0JGQuZmluZChcIi5tb2RhbC1kaWFsb2dcIikucHJvcChcImlkXCIsIHRoaXMuZGlhbG9nSWQpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCAkZm9vdGVyID0gYDxkaXYgY2xhc3M9XCJoZWxsb3dvcmxkLWNzbS1kaWFsb2ctZm9vdGVyXCI+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLWRlZmF1bHRcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiPiR7bGFuZy5idG5DYW5jZWx9PC9idXR0b24+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+JHtsYW5nLmJ0blNhdmV9PC9idXR0b24+PC9kaXY+YDtcblx0XHRcdCRib2R5LmFwcGVuZCgkZm9vdGVyKTtcblx0XHRcdCRkID0gdXRpbHMuZHJhd0NTTURpYWxvZyhsYW5nLnRpdGxlLCAkYm9keSwge1xuXHRcdFx0XHRkaWFsb2dJZDogdGhpcy5kaWFsb2dJZFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdHRoaXMuJGRpYWxvZyA9ICRkO1xuXHR9XG5cblx0dG9nZ2xlRGlhbG9nKCkge1xuXHRcdGNvbnN0IGlzQm9vdHN0cmFwTW9kYWwgPSB0aGlzLiRkaWFsb2cubW9kYWwgJiYgdGhpcy4kZGlhbG9nLm1vZGFsLmxlbmd0aDtcblx0XHRpZiAoaXNCb290c3RyYXBNb2RhbCkge1xuXHRcdFx0dGhpcy4kZGlhbG9nLm1vZGFsKFwidG9nZ2xlXCIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGxldCAkZCA9IHRoaXMuJGRpYWxvZztcblx0XHRcdCRkLmlzVmlzaWJsZSgpID8gJGQuaGlkZURpYWxvZygpIDogJGQuc2hvd0RpYWxvZygpOyAvLyBUaGVyZSBpcyBubyB0b2dnbGUgaW4gQ1NNJ3MgRGlhbG9nXG5cdFx0fVxuXHRcdFxuXHR9XG5cblxuXG5cblxufVxuXG5leHBvcnQgeyBIZWxsb1dvcmxkIH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvSGVsbG9Xb3JsZC5qcyIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1NYXBCYXNlQ2xhc3NcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiTU1hcEJhc2VDbGFzc1wiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIC8qKioqKiovIChmdW5jdGlvbihtb2R1bGVzKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGV4cG9ydHM6IHt9LFxuLyoqKioqKi8gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bG9hZGVkOiBmYWxzZVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4vKioqKioqLyBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuLyoqKioqKi8gXHR9XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcblx0XHR2YWx1ZTogdHJ1ZVxuXHR9KTtcblx0XG5cdHZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cdFxuXHR2YXIgX2V4dGVuZCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG5cdFxuXHR2YXIgX2V4dGVuZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRlbmQpO1xuXHRcblx0dmFyIF9xdWVyeVN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG5cdFxuXHR2YXIgX3F1ZXJ5U3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3F1ZXJ5U3RyaW5nKTtcblx0XG5cdF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cdFxuXHR2YXIgX2VzNlByb21pc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuXHRcblx0dmFyIF9lczZQcm9taXNlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2VzNlByb21pc2UpO1xuXHRcblx0dmFyIF9oanNvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG5cdFxuXHR2YXIgX2hqc29uMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2hqc29uKTtcblx0XG5cdGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cdFxuXHRmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXHRcblx0dmFyIE1NQXBCYXNlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG5cdFx0Ly8gSWYgbGFuZ3VhZ2UgaXMgbm90IHN1cHBvcnRlZCBpbiBtb2R1bGUncyBvcHRpb25zLmxhbmcgdGhpcyB3aWxsIGJlIHRoZSBmYWxsYmFjayBsYW5ndWFnZVxuXHRcblx0XHQvLyBGb3IgdHJhbnNwaWxpbmcgd2l0aCBjbGFzcyBwcm9wZXJ0aWVzOiBodHRwczovL2JhYmVsanMuaW8vZG9jcy9wbHVnaW5zL3RyYW5zZm9ybS1jbGFzcy1wcm9wZXJ0aWVzL1xuXHRcdGZ1bmN0aW9uIE1NQXBCYXNlQ2xhc3MoKSB7XG5cdFx0XHRfY2xhc3NDYWxsQ2hlY2sodGhpcywgTU1BcEJhc2VDbGFzcyk7XG5cdFxuXHRcdFx0dGhpcy5kaXJEZWZhdWx0T3B0aW9ucyA9IFwibW9kdWxlcy9cIiArIHRoaXMuY29uc3RydWN0b3IubmFtZSArIFwiL29wdGlvbnMvXCI7XG5cdFx0XHR0aGlzLmRpckN1c3RvbU9wdGlvbnMgPSBcIm1vZHVsZXMvXCIgKyB0aGlzLmNvbnN0cnVjdG9yLm5hbWUgKyBcIi9vcHRpb25zL1wiO1xuXHRcdFx0dGhpcy5fb3B0aW9ucyA9IG51bGw7XG5cdFx0XHR0aGlzLmRlZmF1bHRMYW5nQ29kZSA9IFwic3ZcIjtcblx0XHR9XG5cdFxuXHRcdC8qKlxuXHQgICogUmV0dXJucyB0aGUgYnJvd3NlcidzIGN1cnJlbnQgc2V0IGxhbmd1YWdlXG5cdCAgKiBAcmV0dXJuIHtTdHJpbmd9IEFuIElTTyBjb2RlIHJlcHJlc2VudGluZyB0aGUgbGFuZ3VhZ2UuXG5cdCAgKi9cblx0XHQvLyBUbyBiZSBmaWxsZWQgd2l0aCBjb250ZW50cyBmcm9tIG9wdGlvbnMgZmlsZXNcblx0XG5cdFxuXHRcdF9jcmVhdGVDbGFzcyhNTUFwQmFzZUNsYXNzLCBbe1xuXHRcdFx0a2V5OiBcImdldExhbmdDb2RlXCIsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0TGFuZ0NvZGUoKSB7XG5cdFx0XHRcdHJldHVybiBuYXZpZ2F0b3IubGFuZ3VhZ2UgfHwgbmF2aWdhdG9yLmJyb3dzZXJMYW5ndWFnZTsgLy8gYnJvd3Nlckxhbmd1YWdlIGlzIGZvciBJRTwxMVxuXHRcdFx0fVxuXHRcblx0XHRcdC8qKlxuXHQgICAqIFJldHVybnMgdGhlIGxhbmd1YWdlIG9iamVjdCBmb3IgdGhlIGN1cnJlbnQgbGFuZ3VhZ2UgKGkuZS4gZG9lcyBub3QgcmV0dXJuIGxhbmcgb2JqZWN0IGZvciBhbGwgc3VwcG9ydGVkIGxhbmd1YWdlcykuXG5cdCAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgbGFuZ3VhZ2Ugb2JqZWN0L2hhc2ggdGFibGVcblx0ICAgKi9cblx0XG5cdFx0fSwge1xuXHRcdFx0a2V5OiBcImdldExhbmdcIixcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBnZXRMYW5nKCkge1xuXHRcdFx0XHR2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG5cdFxuXHRcdFx0XHQvLyBUT0RPOiBHZXQgb2JqZWN0IGZvciBjdXJyZW50IGxhbmd1YWdlXG5cdFx0XHRcdHZhciBsYW5nT2JqID0gb3B0aW9ucy5sYW5nIHx8IHt9O1xuXHRcblx0XHRcdFx0dmFyIGxhbmdFeGx1ZGluZ0RpYWxlY3RzID0gdGhpcy5nZXRMYW5nQ29kZSgpLnNwbGl0KFwiLVwiKVswXTsgLy8gZS5nLiBzdi1TRSBvciBzdi1GSSAtPiBzdlxuXHRcdFx0XHR2YXIgc3VwcG9ydGVkTGFuZ3MgPSBPYmplY3Qua2V5cyhsYW5nT2JqKTtcblx0XHRcdFx0dmFyIGxhbmdDb2RlID0gc3VwcG9ydGVkTGFuZ3MuaW5kZXhPZihsYW5nRXhsdWRpbmdEaWFsZWN0cykgPT09IC0xID8gdGhpcy5kZWZhdWx0TGFuZ0NvZGUgOiBsYW5nRXhsdWRpbmdEaWFsZWN0cztcblx0XHRcdFx0dmFyIGxhbmcgPSBsYW5nT2JqW2xhbmdDb2RlXTtcblx0XHRcdFx0aWYgKCFsYW5nKSB7XG5cdFx0XHRcdFx0Y29uc29sZS53YXJuKFwiTW9kdWxlIHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGhhcyBubyBsYW5ndWFnZSBkZWZpbmVkIGluIGRlZmF1bHRPcHRpb25zLmpzb24gZm9yIGxhbmcgY29kZToge2xhbmdDb2RlfS5cIik7XG5cdFx0XHRcdFx0bGFuZyA9IHN1cHBvcnRlZExhbmdzLmxlbmd0aCA/IHN1cHBvcnRlZExhbmdzWzBdIDogbnVsbDsgLy8gQXMgYSBsYXN0IGZhbGxiYWNrIGFueSBzdXBwb3J0ZWQgbGFuZ3VhZ2Ugd2lsbCBiZSB1c2VkIChpZiBhbnksIG90aGVyd2lzZSBub25lKVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBsYW5nIHx8IHt9O1xuXHRcdFx0fVxuXHRcblx0XHRcdC8vIF9nZXRXZWJQYXJhbXNBc09iamVjdCgpIHtcblx0XHRcdC8vIFx0cmV0dXJuIHF1ZXJ5U3RyaW5nLnBhcnNlKGxvY2F0aW9uLnNlYXJjaCk7XG5cdFx0XHQvLyB9XG5cdFxuXHRcdH0sIHtcblx0XHRcdGtleTogXCJfZ2V0UHJvZmlsZU5hbWVcIixcblx0XHRcdHZhbHVlOiBmdW5jdGlvbiBfZ2V0UHJvZmlsZU5hbWUoKSB7XG5cdFx0XHRcdHJldHVybiB3aW5kb3cuY2JLb3J0ICYmIGNiS29ydCAmJiBjYktvcnQuZ2V0UHJvZmlsZSA/IGNiS29ydC5nZXRQcm9maWxlKCkgfHwgbnVsbCA6IG51bGw7IC8vdGhpcy5fZ2V0V2ViUGFyYW1zQXNPYmplY3QoKS5wcm9maWxlIHx8IG51bGw7XG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0a2V5OiBcIl9mZXRjaERlZmF1bHRPcHRpb25zXCIsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gX2ZldGNoRGVmYXVsdE9wdGlvbnMoKSB7XG5cdFx0XHRcdC8vIE9wdGlvbnMgZGVmaW5lZCBpbiBkZWZhdWx0T3B0aW9ucy5qc29uIGluc2lkZSB0aGUgbW9kdWxlXG5cdFx0XHRcdHZhciBkZWZhdWx0T3B0aW9uc05hbWUgPSBcImRlZmF1bHRPcHRpb25zLmpzb25cIjtcblx0XHRcdFx0dmFyIHBhdGhUb0RlZmF1bHRPcHRpb25zID0gdGhpcy5kaXJEZWZhdWx0T3B0aW9ucyArIGRlZmF1bHRPcHRpb25zTmFtZTtcblx0XHRcdFx0cmV0dXJuIG5ldyBfZXM2UHJvbWlzZTIuZGVmYXVsdChmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdFx0XHRcdFx0ZmV0Y2gocGF0aFRvRGVmYXVsdE9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZS50ZXh0KCkudGhlbihmdW5jdGlvbiAodGV4dCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfaGpzb24yLmRlZmF1bHQucGFyc2UodGV4dCkpO1xuXHRcdFx0XHRcdFx0fSk7IC8vLmNhdGNoKGVycm9yID0+IG5ldyBFcnJvcihcIkVycm9yIHdoaWxlIHBhcnNpbmcgZGVmYXVsdCBvcHRpb25zXCIpKTtcblx0XHRcdFx0XHR9KS5jYXRjaChmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHQvKipcblx0ICAgKiBGZXRjaGVzIGN1c3RvbSBvcHRpb25zIChpZiBhbnkpLiBUaGUgY3VzdG9tIG9wdGlvbnMgZmlsZW5hbWUgXG5cdCAgICogaXMgbmFtZWQgbGlrZTogXCJjdXN0b21PcHRpb25zLVwiICsgcHJvZmlsZU5hbWUuXG5cdCAgICogQHJldHVybiB7UHJvbWlzZX1cblx0ICAgKiAgICAgICAgIC0gb24gc3VjY2VzczogXHRyZXR1cm5zIG9wdGlvbnMge09iamVjdH1cblx0ICAgKiAgICAgICAgIC0gb24gZmFpbDogXHRcdHJldHVybnMgbnVsbCB7T2JqZWN0fVxuXHQgICAqL1xuXHRcblx0XHR9LCB7XG5cdFx0XHRrZXk6IFwiX2ZldGNoQ3VzdG9tT3B0aW9uc1wiLFxuXHRcdFx0dmFsdWU6IGZ1bmN0aW9uIF9mZXRjaEN1c3RvbU9wdGlvbnMoKSB7XG5cdFx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XG5cdFxuXHRcdFx0XHQvLyBPcHRpb25zIGRlZmluZWQgaW4gY3VzdG9tT3B0aW9ucy5qc29uIGluc2lkZSB0aGUgbW9kdWxlXG5cdFxuXHRcdFx0XHR2YXIgcHJvZmlsZU5hbWUgPSB0aGlzLl9nZXRQcm9maWxlTmFtZSgpIHx8IFwibW9ja1wiO1xuXHRcdFx0XHR2YXIgY3VzdG9tT3B0aW9uc05hbWUgPSBcImN1c3RvbU9wdGlvbnMtXCIgKyBwcm9maWxlTmFtZSArIFwiLmpzb25cIjtcblx0XHRcdFx0dmFyIHBhdGhUb0N1c3RvbU9wdGlvbnMgPSB0aGlzLmRpckN1c3RvbU9wdGlvbnMgKyBjdXN0b21PcHRpb25zTmFtZTtcblx0XHRcdFx0cmV0dXJuIGZldGNoKHBhdGhUb0N1c3RvbU9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKGZ1bmN0aW9uICh0ZXh0KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX2hqc29uMi5kZWZhdWx0LnBhcnNlKHRleHQpO1xuXHRcdFx0XHRcdH0pOyAvLy5jYXRjaChlcnJvciA9PiBuZXcgRXJyb3IoXCJFcnJvciB3aGlsZSBwYXJzaW5nIGRlZmF1bHQgb3B0aW9uc1wiKSk7XG5cdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdGNvbnNvbGUud2FybihcIlByb2ZpbGU6IFwiICsgX3RoaXMuX2dldFByb2ZpbGVOYW1lKCkgKyBcImhhcyBubyBjdXN0b20gY29uZmlnIGZvciBtb2R1bGU6IFwiICsgX3RoaXMuY29uc3RydWN0b3IubmFtZSArIFwiICh0aGlzIG1pZ2h0IGJlIGV4cGVjdGVkIGFuZCBub3QgYW4gZXJyb3IpLiBTZWUgZXJyb3IgbWVzc2FnZSBiZWxvdyBmb3IgZGV0YWlsc1wiKTtcblx0XHRcdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XG5cdFx0XHQvKipcblx0ICAgKiBGZXRjaGVzIGRlZmF1bHQgYW5kIGN1c3RvbSBvcHRpb25zIChpZiBhbnkpLiBPdmVycmlkZXMgZGVmYXVsdCBvcHRpb25zIHdpdGggY3VzdG9tIG9wdGlvbnMuXG5cdCAgICogQHJldHVybiB7UHJvbWlzZX1cblx0ICAgKiAgICAgICAgIC0gb24gc3VjY2VzczogXHRyZXR1cm5zIG1lcmdlZCBvcHRpb25zIHtPYmplY3R9XG5cdCAgICogICAgICAgICAtIG9uIGZhaWw6IFx0XHRyZXR1cm5zIGVycm9yIHtPYmplY3R9XG5cdCAgICovXG5cdFxuXHRcdH0sIHtcblx0XHRcdGtleTogXCJfZmV0Y2hPcHRpb25zXCIsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gX2ZldGNoT3B0aW9ucygpIHtcblx0XHRcdFx0cmV0dXJuIF9lczZQcm9taXNlMi5kZWZhdWx0LmFsbChbdGhpcy5fZmV0Y2hEZWZhdWx0T3B0aW9ucygpLCB0aGlzLl9mZXRjaEN1c3RvbU9wdGlvbnMoKV0pLnRoZW4oZnVuY3Rpb24gKG9wdGlvbnNBcnIpIHtcblx0XHRcdFx0XHRyZXR1cm4gKDAsIF9leHRlbmQyLmRlZmF1bHQpKHRydWUsIG9wdGlvbnNBcnJbMF0sIG9wdGlvbnNBcnJbMV0gfHwge30pO1xuXHRcdFx0XHR9LCBmdW5jdGlvbiAoZXJyb3IpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlcnJvcik7XG5cdFx0XHRcdFx0cmV0dXJuIG51bGw7IC8vIFNob3VsZCB3ZSByZXR1cm4gZGVmYXVsdCBvcHRpb25zIGlmIGN1c3RvbSBvcHRpb25zIHdlcmUgbm90IGZvdW5kIGJ1dCBkZWZhdWx0IG9wdGlvbnMgd2VyZSBmb3VuZD9cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFxuXHRcdFx0LyoqXG5cdCAgICogUHVibGljIGFzeW5jIG1ldGhvZCBmb3IgZmV0Y2hpbmcgb3B0aW9ucyAobWVyZ2VkIGRlZmF1bHQgYW5kIGN1c3RvbSkuXG5cdCAgICogVGhpcyBpcyBhIHdyYXBwZXIgZm9yIF9mZXRjaE9wdGlvbnMgdG8gYWRkIGNhY2hpbmcgb2YgdGhpcy5fb3B0aW9ucyBcblx0ICAgKiBmb3Igc3BlZWRpbmcgdXAgYW55IHN1YnNlcXVlbnQgY2FsbHMuXG5cdCAgICogQHJldHVybiB7UHJvbWlzZX1cblx0ICAgKiAgICAgICAgIC0gb24gc3VjY2VzczogXHRyZXR1cm5zIG1lcmdlZCBvcHRpb25zIHtPYmplY3R9XG5cdCAgICogICAgICAgICAtIG9uIGZhaWw6IFx0XHRyZXR1cm5zIGVycm9yIHtPYmplY3R9XG5cdCAgICovXG5cdFxuXHRcdH0sIHtcblx0XHRcdGtleTogXCJnZXRPcHRpb25zXCIsXG5cdFx0XHR2YWx1ZTogZnVuY3Rpb24gZ2V0T3B0aW9ucygpIHtcblx0XHRcdFx0dmFyIF90aGlzMiA9IHRoaXM7XG5cdFxuXHRcdFx0XHRpZiAodGhpcy5fb3B0aW9ucykge1xuXHRcdFx0XHRcdHJldHVybiBfZXM2UHJvbWlzZTIuZGVmYXVsdC5yZXNvbHZlKHRoaXMuX29wdGlvbnMpO1xuXHRcdFx0XHR9XG5cdFxuXHRcdFx0XHRyZXR1cm4gbmV3IF9lczZQcm9taXNlMi5kZWZhdWx0KGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcblx0XHRcdFx0XHRfdGhpczIuX2ZldGNoT3B0aW9ucygpLnRoZW4oZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0XHRcdFx0XHRcdF90aGlzMi5fb3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0XHRcdFx0XHRyZXNvbHZlKG9wdGlvbnMpO1xuXHRcdFx0XHRcdH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1dKTtcblx0XG5cdFx0cmV0dXJuIE1NQXBCYXNlQ2xhc3M7XG5cdH0oKTtcblx0XG5cdGV4cG9ydHMuZGVmYXVsdCA9IE1NQXBCYXNlQ2xhc3M7XG5cdDtcblxuLyoqKi8gfSxcbi8qIDEgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0XG5cdHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgdG9TdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXHRcblx0dmFyIGlzQXJyYXkgPSBmdW5jdGlvbiBpc0FycmF5KGFycikge1xuXHRcdGlmICh0eXBlb2YgQXJyYXkuaXNBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0cmV0dXJuIEFycmF5LmlzQXJyYXkoYXJyKTtcblx0XHR9XG5cdFxuXHRcdHJldHVybiB0b1N0ci5jYWxsKGFycikgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdH07XG5cdFxuXHR2YXIgaXNQbGFpbk9iamVjdCA9IGZ1bmN0aW9uIGlzUGxhaW5PYmplY3Qob2JqKSB7XG5cdFx0aWYgKCFvYmogfHwgdG9TdHIuY2FsbChvYmopICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XG5cdFx0dmFyIGhhc093bkNvbnN0cnVjdG9yID0gaGFzT3duLmNhbGwob2JqLCAnY29uc3RydWN0b3InKTtcblx0XHR2YXIgaGFzSXNQcm90b3R5cGVPZiA9IG9iai5jb25zdHJ1Y3RvciAmJiBvYmouY29uc3RydWN0b3IucHJvdG90eXBlICYmIGhhc093bi5jYWxsKG9iai5jb25zdHJ1Y3Rvci5wcm90b3R5cGUsICdpc1Byb3RvdHlwZU9mJyk7XG5cdFx0Ly8gTm90IG93biBjb25zdHJ1Y3RvciBwcm9wZXJ0eSBtdXN0IGJlIE9iamVjdFxuXHRcdGlmIChvYmouY29uc3RydWN0b3IgJiYgIWhhc093bkNvbnN0cnVjdG9yICYmICFoYXNJc1Byb3RvdHlwZU9mKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcblx0XHQvLyBPd24gcHJvcGVydGllcyBhcmUgZW51bWVyYXRlZCBmaXJzdGx5LCBzbyB0byBzcGVlZCB1cCxcblx0XHQvLyBpZiBsYXN0IG9uZSBpcyBvd24sIHRoZW4gYWxsIHByb3BlcnRpZXMgYXJlIG93bi5cblx0XHR2YXIga2V5O1xuXHRcdGZvciAoa2V5IGluIG9iaikgey8qKi99XG5cdFxuXHRcdHJldHVybiB0eXBlb2Yga2V5ID09PSAndW5kZWZpbmVkJyB8fCBoYXNPd24uY2FsbChvYmosIGtleSk7XG5cdH07XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGV4dGVuZCgpIHtcblx0XHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0XHR0YXJnZXQgPSBhcmd1bWVudHNbMF0sXG5cdFx0XHRpID0gMSxcblx0XHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0XHRkZWVwID0gZmFsc2U7XG5cdFxuXHRcdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0XHRpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Jvb2xlYW4nKSB7XG5cdFx0XHRkZWVwID0gdGFyZ2V0O1xuXHRcdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzFdIHx8IHt9O1xuXHRcdFx0Ly8gc2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdFx0aSA9IDI7XG5cdFx0fSBlbHNlIGlmICgodHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHRhcmdldCAhPT0gJ2Z1bmN0aW9uJykgfHwgdGFyZ2V0ID09IG51bGwpIHtcblx0XHRcdHRhcmdldCA9IHt9O1xuXHRcdH1cblx0XG5cdFx0Zm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuXHRcdFx0b3B0aW9ucyA9IGFyZ3VtZW50c1tpXTtcblx0XHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdGlmIChvcHRpb25zICE9IG51bGwpIHtcblx0XHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0XHRmb3IgKG5hbWUgaW4gb3B0aW9ucykge1xuXHRcdFx0XHRcdHNyYyA9IHRhcmdldFtuYW1lXTtcblx0XHRcdFx0XHRjb3B5ID0gb3B0aW9uc1tuYW1lXTtcblx0XG5cdFx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRcdGlmICh0YXJnZXQgIT09IGNvcHkpIHtcblx0XHRcdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRcdFx0aWYgKGRlZXAgJiYgY29weSAmJiAoaXNQbGFpbk9iamVjdChjb3B5KSB8fCAoY29weUlzQXJyYXkgPSBpc0FycmF5KGNvcHkpKSkpIHtcblx0XHRcdFx0XHRcdFx0aWYgKGNvcHlJc0FycmF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29weUlzQXJyYXkgPSBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc0FycmF5KHNyYykgPyBzcmMgOiBbXTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBpc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0XHRcdHRhcmdldFtuYW1lXSA9IGV4dGVuZChkZWVwLCBjbG9uZSwgY29weSk7XG5cdFxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICh0eXBlb2YgY29weSAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdFx0XHRcdFx0dGFyZ2V0W25hbWVdID0gY29weTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFxuXHRcdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdFx0cmV0dXJuIHRhcmdldDtcblx0fTtcblx0XG5cblxuLyoqKi8gfSxcbi8qIDIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdCd1c2Ugc3RyaWN0Jztcblx0dmFyIHN0cmljdFVyaUVuY29kZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cdHZhciBvYmplY3RBc3NpZ24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuXHRcblx0ZnVuY3Rpb24gZW5jb2RlKHZhbHVlLCBvcHRzKSB7XG5cdFx0aWYgKG9wdHMuZW5jb2RlKSB7XG5cdFx0XHRyZXR1cm4gb3B0cy5zdHJpY3QgPyBzdHJpY3RVcmlFbmNvZGUodmFsdWUpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcblx0XHR9XG5cdFxuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRcblx0ZXhwb3J0cy5leHRyYWN0ID0gZnVuY3Rpb24gKHN0cikge1xuXHRcdHJldHVybiBzdHIuc3BsaXQoJz8nKVsxXSB8fCAnJztcblx0fTtcblx0XG5cdGV4cG9ydHMucGFyc2UgPSBmdW5jdGlvbiAoc3RyKSB7XG5cdFx0Ly8gQ3JlYXRlIGFuIG9iamVjdCB3aXRoIG5vIHByb3RvdHlwZVxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvcXVlcnktc3RyaW5nL2lzc3Vlcy80N1xuXHRcdHZhciByZXQgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuXHRcblx0XHRpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXHRcblx0XHRzdHIgPSBzdHIudHJpbSgpLnJlcGxhY2UoL14oXFw/fCN8JikvLCAnJyk7XG5cdFxuXHRcdGlmICghc3RyKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0XG5cdFx0c3RyLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcblx0XHRcdHZhciBwYXJ0cyA9IHBhcmFtLnJlcGxhY2UoL1xcKy9nLCAnICcpLnNwbGl0KCc9Jyk7XG5cdFx0XHQvLyBGaXJlZm94IChwcmUgNDApIGRlY29kZXMgYCUzRGAgdG8gYD1gXG5cdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL3F1ZXJ5LXN0cmluZy9wdWxsLzM3XG5cdFx0XHR2YXIga2V5ID0gcGFydHMuc2hpZnQoKTtcblx0XHRcdHZhciB2YWwgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHMuam9pbignPScpIDogdW5kZWZpbmVkO1xuXHRcblx0XHRcdGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuXHRcblx0XHRcdC8vIG1pc3NpbmcgYD1gIHNob3VsZCBiZSBgbnVsbGA6XG5cdFx0XHQvLyBodHRwOi8vdzMub3JnL1RSLzIwMTIvV0QtdXJsLTIwMTIwNTI0LyNjb2xsZWN0LXVybC1wYXJhbWV0ZXJzXG5cdFx0XHR2YWwgPSB2YWwgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBkZWNvZGVVUklDb21wb25lbnQodmFsKTtcblx0XG5cdFx0XHRpZiAocmV0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRyZXRba2V5XSA9IHZhbDtcblx0XHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXRba2V5XSkpIHtcblx0XHRcdFx0cmV0W2tleV0ucHVzaCh2YWwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0W2tleV0gPSBbcmV0W2tleV0sIHZhbF07XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFxuXHRcdHJldHVybiByZXQ7XG5cdH07XG5cdFxuXHRleHBvcnRzLnN0cmluZ2lmeSA9IGZ1bmN0aW9uIChvYmosIG9wdHMpIHtcblx0XHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0XHRlbmNvZGU6IHRydWUsXG5cdFx0XHRzdHJpY3Q6IHRydWVcblx0XHR9O1xuXHRcblx0XHRvcHRzID0gb2JqZWN0QXNzaWduKGRlZmF1bHRzLCBvcHRzKTtcblx0XG5cdFx0cmV0dXJuIG9iaiA/IE9iamVjdC5rZXlzKG9iaikuc29ydCgpLm1hcChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHR2YXIgdmFsID0gb2JqW2tleV07XG5cdFxuXHRcdFx0aWYgKHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJldHVybiAnJztcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAodmFsID09PSBudWxsKSB7XG5cdFx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKTtcblx0XHRcdH1cblx0XG5cdFx0XHRpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBbXTtcblx0XG5cdFx0XHRcdHZhbC5zbGljZSgpLmZvckVhY2goZnVuY3Rpb24gKHZhbDIpIHtcblx0XHRcdFx0XHRpZiAodmFsMiA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcblx0XHRcdFx0XHRpZiAodmFsMiA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnB1c2goZW5jb2RlKGtleSwgb3B0cykpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQucHVzaChlbmNvZGUoa2V5LCBvcHRzKSArICc9JyArIGVuY29kZSh2YWwyLCBvcHRzKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XG5cdFx0XHRcdHJldHVybiByZXN1bHQuam9pbignJicpO1xuXHRcdFx0fVxuXHRcblx0XHRcdHJldHVybiBlbmNvZGUoa2V5LCBvcHRzKSArICc9JyArIGVuY29kZSh2YWwsIG9wdHMpO1xuXHRcdH0pLmZpbHRlcihmdW5jdGlvbiAoeCkge1xuXHRcdFx0cmV0dXJuIHgubGVuZ3RoID4gMDtcblx0XHR9KS5qb2luKCcmJykgOiAnJztcblx0fTtcblxuXG4vKioqLyB9LFxuLyogMyAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0XHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cikucmVwbGFjZSgvWyEnKCkqXS9nLCBmdW5jdGlvbiAoYykge1xuXHRcdFx0cmV0dXJuICclJyArIGMuY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcblx0XHR9KTtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogNCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0J3VzZSBzdHJpY3QnO1xuXHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHR2YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXHR2YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cdFxuXHRmdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0XHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHRcdH1cblx0XG5cdFx0cmV0dXJuIE9iamVjdCh2YWwpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXHRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XG5cdFx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0XHR9KTtcblx0XHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdFx0dmFyIHRlc3QzID0ge307XG5cdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHRcdH0pO1xuXHRcdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0XG5cdG1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdFx0dmFyIGZyb207XG5cdFx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0XHR2YXIgc3ltYm9scztcblx0XG5cdFx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblx0XG5cdFx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0XHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRcdHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gdG87XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDUgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdChmdW5jdGlvbihzZWxmKSB7XG5cdCAgJ3VzZSBzdHJpY3QnO1xuXHRcblx0ICBpZiAoc2VsZi5mZXRjaCkge1xuXHQgICAgcmV0dXJuXG5cdCAgfVxuXHRcblx0ICB2YXIgc3VwcG9ydCA9IHtcblx0ICAgIHNlYXJjaFBhcmFtczogJ1VSTFNlYXJjaFBhcmFtcycgaW4gc2VsZixcblx0ICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuXHQgICAgYmxvYjogJ0ZpbGVSZWFkZXInIGluIHNlbGYgJiYgJ0Jsb2InIGluIHNlbGYgJiYgKGZ1bmN0aW9uKCkge1xuXHQgICAgICB0cnkge1xuXHQgICAgICAgIG5ldyBCbG9iKClcblx0ICAgICAgICByZXR1cm4gdHJ1ZVxuXHQgICAgICB9IGNhdGNoKGUpIHtcblx0ICAgICAgICByZXR1cm4gZmFsc2Vcblx0ICAgICAgfVxuXHQgICAgfSkoKSxcblx0ICAgIGZvcm1EYXRhOiAnRm9ybURhdGEnIGluIHNlbGYsXG5cdCAgICBhcnJheUJ1ZmZlcjogJ0FycmF5QnVmZmVyJyBpbiBzZWxmXG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBub3JtYWxpemVOYW1lKG5hbWUpIHtcblx0ICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcblx0ICAgICAgbmFtZSA9IFN0cmluZyhuYW1lKVxuXHQgICAgfVxuXHQgICAgaWYgKC9bXmEtejAtOVxcLSMkJSYnKisuXFxeX2B8fl0vaS50ZXN0KG5hbWUpKSB7XG5cdCAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcblx0ICAgIH1cblx0ICAgIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKClcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIG5vcm1hbGl6ZVZhbHVlKHZhbHVlKSB7XG5cdCAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuXHQgICAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSlcblx0ICAgIH1cblx0ICAgIHJldHVybiB2YWx1ZVxuXHQgIH1cblx0XG5cdCAgLy8gQnVpbGQgYSBkZXN0cnVjdGl2ZSBpdGVyYXRvciBmb3IgdGhlIHZhbHVlIGxpc3Rcblx0ICBmdW5jdGlvbiBpdGVyYXRvckZvcihpdGVtcykge1xuXHQgICAgdmFyIGl0ZXJhdG9yID0ge1xuXHQgICAgICBuZXh0OiBmdW5jdGlvbigpIHtcblx0ICAgICAgICB2YXIgdmFsdWUgPSBpdGVtcy5zaGlmdCgpXG5cdCAgICAgICAgcmV0dXJuIHtkb25lOiB2YWx1ZSA9PT0gdW5kZWZpbmVkLCB2YWx1ZTogdmFsdWV9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuXHQgICAgICBpdGVyYXRvcltTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgcmV0dXJuIGl0ZXJhdG9yXG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gaXRlcmF0b3Jcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIEhlYWRlcnMoaGVhZGVycykge1xuXHQgICAgdGhpcy5tYXAgPSB7fVxuXHRcblx0ICAgIGlmIChoZWFkZXJzIGluc3RhbmNlb2YgSGVhZGVycykge1xuXHQgICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcblx0ICAgICAgICB0aGlzLmFwcGVuZChuYW1lLCB2YWx1ZSlcblx0ICAgICAgfSwgdGhpcylcblx0XG5cdCAgICB9IGVsc2UgaWYgKGhlYWRlcnMpIHtcblx0ICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG5cdCAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgaGVhZGVyc1tuYW1lXSlcblx0ICAgICAgfSwgdGhpcylcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIEhlYWRlcnMucHJvdG90eXBlLmFwcGVuZCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cdCAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKVxuXHQgICAgdmFsdWUgPSBub3JtYWxpemVWYWx1ZSh2YWx1ZSlcblx0ICAgIHZhciBsaXN0ID0gdGhpcy5tYXBbbmFtZV1cblx0ICAgIGlmICghbGlzdCkge1xuXHQgICAgICBsaXN0ID0gW11cblx0ICAgICAgdGhpcy5tYXBbbmFtZV0gPSBsaXN0XG5cdCAgICB9XG5cdCAgICBsaXN0LnB1c2godmFsdWUpXG5cdCAgfVxuXHRcblx0ICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG5cdCAgICBkZWxldGUgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV1cblx0ICB9XG5cdFxuXHQgIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0ICAgIHZhciB2YWx1ZXMgPSB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXVxuXHQgICAgcmV0dXJuIHZhbHVlcyA/IHZhbHVlc1swXSA6IG51bGxcblx0ICB9XG5cdFxuXHQgIEhlYWRlcnMucHJvdG90eXBlLmdldEFsbCA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0ICAgIHJldHVybiB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSB8fCBbXVxuXHQgIH1cblx0XG5cdCAgSGVhZGVycy5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24obmFtZSkge1xuXHQgICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG5cdCAgfVxuXHRcblx0ICBIZWFkZXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHQgICAgdGhpcy5tYXBbbm9ybWFsaXplTmFtZShuYW1lKV0gPSBbbm9ybWFsaXplVmFsdWUodmFsdWUpXVxuXHQgIH1cblx0XG5cdCAgSGVhZGVycy5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG5cdCAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0aGlzLm1hcCkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG5cdCAgICAgIHRoaXMubWFwW25hbWVdLmZvckVhY2goZnVuY3Rpb24odmFsdWUpIHtcblx0ICAgICAgICBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHZhbHVlLCBuYW1lLCB0aGlzKVxuXHQgICAgICB9LCB0aGlzKVxuXHQgICAgfSwgdGhpcylcblx0ICB9XG5cdFxuXHQgIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcblx0ICAgIHZhciBpdGVtcyA9IFtdXG5cdCAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHsgaXRlbXMucHVzaChuYW1lKSB9KVxuXHQgICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuXHQgIH1cblx0XG5cdCAgSGVhZGVycy5wcm90b3R5cGUudmFsdWVzID0gZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgaXRlbXMgPSBbXVxuXHQgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlKSB7IGl0ZW1zLnB1c2godmFsdWUpIH0pXG5cdCAgICByZXR1cm4gaXRlcmF0b3JGb3IoaXRlbXMpXG5cdCAgfVxuXHRcblx0ICBIZWFkZXJzLnByb3RvdHlwZS5lbnRyaWVzID0gZnVuY3Rpb24oKSB7XG5cdCAgICB2YXIgaXRlbXMgPSBbXVxuXHQgICAgdGhpcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7IGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSkgfSlcblx0ICAgIHJldHVybiBpdGVyYXRvckZvcihpdGVtcylcblx0ICB9XG5cdFxuXHQgIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG5cdCAgICBIZWFkZXJzLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gSGVhZGVycy5wcm90b3R5cGUuZW50cmllc1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gY29uc3VtZWQoYm9keSkge1xuXHQgICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcblx0ICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpKVxuXHQgICAgfVxuXHQgICAgYm9keS5ib2R5VXNlZCA9IHRydWVcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpIHtcblx0ICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcblx0ICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdClcblx0ICAgICAgfVxuXHQgICAgICByZWFkZXIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpXG5cdCAgICAgIH1cblx0ICAgIH0pXG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiByZWFkQmxvYkFzQXJyYXlCdWZmZXIoYmxvYikge1xuXHQgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKClcblx0ICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKVxuXHQgICAgcmV0dXJuIGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpXG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiByZWFkQmxvYkFzVGV4dChibG9iKSB7XG5cdCAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKVxuXHQgICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYilcblx0ICAgIHJldHVybiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gQm9keSgpIHtcblx0ICAgIHRoaXMuYm9keVVzZWQgPSBmYWxzZVxuXHRcblx0ICAgIHRoaXMuX2luaXRCb2R5ID0gZnVuY3Rpb24oYm9keSkge1xuXHQgICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHlcblx0ICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keVxuXHQgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYmxvYiAmJiBCbG9iLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG5cdCAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5XG5cdCAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5mb3JtRGF0YSAmJiBGb3JtRGF0YS5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuXHQgICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHlcblx0ICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcblx0ICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKVxuXHQgICAgICB9IGVsc2UgaWYgKCFib2R5KSB7XG5cdCAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJ1xuXHQgICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIgJiYgQXJyYXlCdWZmZXIucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcblx0ICAgICAgICAvLyBPbmx5IHN1cHBvcnQgQXJyYXlCdWZmZXJzIGZvciBQT1NUIG1ldGhvZC5cblx0ICAgICAgICAvLyBSZWNlaXZpbmcgQXJyYXlCdWZmZXJzIGhhcHBlbnMgdmlhIEJsb2JzLCBpbnN0ZWFkLlxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgQm9keUluaXQgdHlwZScpXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcblx0ICAgICAgICBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG5cdCAgICAgICAgICB0aGlzLmhlYWRlcnMuc2V0KCdjb250ZW50LXR5cGUnLCAndGV4dC9wbGFpbjtjaGFyc2V0PVVURi04Jylcblx0ICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2JvZHlCbG9iICYmIHRoaXMuX2JvZHlCbG9iLnR5cGUpIHtcblx0ICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsIHRoaXMuX2JvZHlCbG9iLnR5cGUpXG5cdCAgICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LnNlYXJjaFBhcmFtcyAmJiBVUkxTZWFyY2hQYXJhbXMucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcblx0ICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCcpXG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKHN1cHBvcnQuYmxvYikge1xuXHQgICAgICB0aGlzLmJsb2IgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuXHQgICAgICAgIGlmIChyZWplY3RlZCkge1xuXHQgICAgICAgICAgcmV0dXJuIHJlamVjdGVkXG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcblx0ICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG5cdCAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5Rm9ybURhdGEpIHtcblx0ICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyBibG9iJylcblx0ICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keVRleHRdKSlcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICByZXR1cm4gdGhpcy5ibG9iKCkudGhlbihyZWFkQmxvYkFzQXJyYXlCdWZmZXIpXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHRoaXMudGV4dCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpXG5cdCAgICAgICAgaWYgKHJlamVjdGVkKSB7XG5cdCAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuXHQgICAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuXHQgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG5cdCAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkIG5vdCByZWFkIEZvcm1EYXRhIGJvZHkgYXMgdGV4dCcpXG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICB2YXIgcmVqZWN0ZWQgPSBjb25zdW1lZCh0aGlzKVxuXHQgICAgICAgIHJldHVybiByZWplY3RlZCA/IHJlamVjdGVkIDogUHJvbWlzZS5yZXNvbHZlKHRoaXMuX2JvZHlUZXh0KVxuXHQgICAgICB9XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKHN1cHBvcnQuZm9ybURhdGEpIHtcblx0ICAgICAgdGhpcy5mb3JtRGF0YSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcblx0ICAgICAgfVxuXHQgICAgfVxuXHRcblx0ICAgIHRoaXMuanNvbiA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuXHQgICAgfVxuXHRcblx0ICAgIHJldHVybiB0aGlzXG5cdCAgfVxuXHRcblx0ICAvLyBIVFRQIG1ldGhvZHMgd2hvc2UgY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIG5vcm1hbGl6ZWRcblx0ICB2YXIgbWV0aG9kcyA9IFsnREVMRVRFJywgJ0dFVCcsICdIRUFEJywgJ09QVElPTlMnLCAnUE9TVCcsICdQVVQnXVxuXHRcblx0ICBmdW5jdGlvbiBub3JtYWxpemVNZXRob2QobWV0aG9kKSB7XG5cdCAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpXG5cdCAgICByZXR1cm4gKG1ldGhvZHMuaW5kZXhPZih1cGNhc2VkKSA+IC0xKSA/IHVwY2FzZWQgOiBtZXRob2Rcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcblx0ICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9XG5cdCAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keVxuXHQgICAgaWYgKFJlcXVlc3QucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoaW5wdXQpKSB7XG5cdCAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuXHQgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FscmVhZHkgcmVhZCcpXG5cdCAgICAgIH1cblx0ICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmxcblx0ICAgICAgdGhpcy5jcmVkZW50aWFscyA9IGlucHV0LmNyZWRlbnRpYWxzXG5cdCAgICAgIGlmICghb3B0aW9ucy5oZWFkZXJzKSB7XG5cdCAgICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMoaW5wdXQuaGVhZGVycylcblx0ICAgICAgfVxuXHQgICAgICB0aGlzLm1ldGhvZCA9IGlucHV0Lm1ldGhvZFxuXHQgICAgICB0aGlzLm1vZGUgPSBpbnB1dC5tb2RlXG5cdCAgICAgIGlmICghYm9keSkge1xuXHQgICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXRcblx0ICAgICAgICBpbnB1dC5ib2R5VXNlZCA9IHRydWVcblx0ICAgICAgfVxuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgdGhpcy51cmwgPSBpbnB1dFxuXHQgICAgfVxuXHRcblx0ICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ29taXQnXG5cdCAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcblx0ICAgICAgdGhpcy5oZWFkZXJzID0gbmV3IEhlYWRlcnMob3B0aW9ucy5oZWFkZXJzKVxuXHQgICAgfVxuXHQgICAgdGhpcy5tZXRob2QgPSBub3JtYWxpemVNZXRob2Qob3B0aW9ucy5tZXRob2QgfHwgdGhpcy5tZXRob2QgfHwgJ0dFVCcpXG5cdCAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGxcblx0ICAgIHRoaXMucmVmZXJyZXIgPSBudWxsXG5cdFxuXHQgICAgaWYgKCh0aGlzLm1ldGhvZCA9PT0gJ0dFVCcgfHwgdGhpcy5tZXRob2QgPT09ICdIRUFEJykgJiYgYm9keSkge1xuXHQgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdCb2R5IG5vdCBhbGxvd2VkIGZvciBHRVQgb3IgSEVBRCByZXF1ZXN0cycpXG5cdCAgICB9XG5cdCAgICB0aGlzLl9pbml0Qm9keShib2R5KVxuXHQgIH1cblx0XG5cdCAgUmVxdWVzdC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcblx0ICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzKVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZGVjb2RlKGJvZHkpIHtcblx0ICAgIHZhciBmb3JtID0gbmV3IEZvcm1EYXRhKClcblx0ICAgIGJvZHkudHJpbSgpLnNwbGl0KCcmJykuZm9yRWFjaChmdW5jdGlvbihieXRlcykge1xuXHQgICAgICBpZiAoYnl0ZXMpIHtcblx0ICAgICAgICB2YXIgc3BsaXQgPSBieXRlcy5zcGxpdCgnPScpXG5cdCAgICAgICAgdmFyIG5hbWUgPSBzcGxpdC5zaGlmdCgpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG5cdCAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpXG5cdCAgICAgICAgZm9ybS5hcHBlbmQoZGVjb2RlVVJJQ29tcG9uZW50KG5hbWUpLCBkZWNvZGVVUklDb21wb25lbnQodmFsdWUpKVxuXHQgICAgICB9XG5cdCAgICB9KVxuXHQgICAgcmV0dXJuIGZvcm1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGhlYWRlcnMoeGhyKSB7XG5cdCAgICB2YXIgaGVhZCA9IG5ldyBIZWFkZXJzKClcblx0ICAgIHZhciBwYWlycyA9ICh4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKCkgfHwgJycpLnRyaW0oKS5zcGxpdCgnXFxuJylcblx0ICAgIHBhaXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG5cdCAgICAgIHZhciBzcGxpdCA9IGhlYWRlci50cmltKCkuc3BsaXQoJzonKVxuXHQgICAgICB2YXIga2V5ID0gc3BsaXQuc2hpZnQoKS50cmltKClcblx0ICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignOicpLnRyaW0oKVxuXHQgICAgICBoZWFkLmFwcGVuZChrZXksIHZhbHVlKVxuXHQgICAgfSlcblx0ICAgIHJldHVybiBoZWFkXG5cdCAgfVxuXHRcblx0ICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpXG5cdFxuXHQgIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG5cdCAgICBpZiAoIW9wdGlvbnMpIHtcblx0ICAgICAgb3B0aW9ucyA9IHt9XG5cdCAgICB9XG5cdFxuXHQgICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnXG5cdCAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzXG5cdCAgICB0aGlzLm9rID0gdGhpcy5zdGF0dXMgPj0gMjAwICYmIHRoaXMuc3RhdHVzIDwgMzAwXG5cdCAgICB0aGlzLnN0YXR1c1RleHQgPSBvcHRpb25zLnN0YXR1c1RleHRcblx0ICAgIHRoaXMuaGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycyBpbnN0YW5jZW9mIEhlYWRlcnMgPyBvcHRpb25zLmhlYWRlcnMgOiBuZXcgSGVhZGVycyhvcHRpb25zLmhlYWRlcnMpXG5cdCAgICB0aGlzLnVybCA9IG9wdGlvbnMudXJsIHx8ICcnXG5cdCAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdClcblx0ICB9XG5cdFxuXHQgIEJvZHkuY2FsbChSZXNwb25zZS5wcm90b3R5cGUpXG5cdFxuXHQgIFJlc3BvbnNlLnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuXHQgICAgcmV0dXJuIG5ldyBSZXNwb25zZSh0aGlzLl9ib2R5SW5pdCwge1xuXHQgICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuXHQgICAgICBzdGF0dXNUZXh0OiB0aGlzLnN0YXR1c1RleHQsXG5cdCAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHRoaXMuaGVhZGVycyksXG5cdCAgICAgIHVybDogdGhpcy51cmxcblx0ICAgIH0pXG5cdCAgfVxuXHRcblx0ICBSZXNwb25zZS5lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHQgICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSlcblx0ICAgIHJlc3BvbnNlLnR5cGUgPSAnZXJyb3InXG5cdCAgICByZXR1cm4gcmVzcG9uc2Vcblx0ICB9XG5cdFxuXHQgIHZhciByZWRpcmVjdFN0YXR1c2VzID0gWzMwMSwgMzAyLCAzMDMsIDMwNywgMzA4XVxuXHRcblx0ICBSZXNwb25zZS5yZWRpcmVjdCA9IGZ1bmN0aW9uKHVybCwgc3RhdHVzKSB7XG5cdCAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG5cdCAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHN0YXR1cyBjb2RlJylcblx0ICAgIH1cblx0XG5cdCAgICByZXR1cm4gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IHN0YXR1cywgaGVhZGVyczoge2xvY2F0aW9uOiB1cmx9fSlcblx0ICB9XG5cdFxuXHQgIHNlbGYuSGVhZGVycyA9IEhlYWRlcnNcblx0ICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0XG5cdCAgc2VsZi5SZXNwb25zZSA9IFJlc3BvbnNlXG5cdFxuXHQgIHNlbGYuZmV0Y2ggPSBmdW5jdGlvbihpbnB1dCwgaW5pdCkge1xuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgICB2YXIgcmVxdWVzdFxuXHQgICAgICBpZiAoUmVxdWVzdC5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihpbnB1dCkgJiYgIWluaXQpIHtcblx0ICAgICAgICByZXF1ZXN0ID0gaW5wdXRcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICByZXF1ZXN0ID0gbmV3IFJlcXVlc3QoaW5wdXQsIGluaXQpXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKVxuXHRcblx0ICAgICAgZnVuY3Rpb24gcmVzcG9uc2VVUkwoKSB7XG5cdCAgICAgICAgaWYgKCdyZXNwb25zZVVSTCcgaW4geGhyKSB7XG5cdCAgICAgICAgICByZXR1cm4geGhyLnJlc3BvbnNlVVJMXG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICAvLyBBdm9pZCBzZWN1cml0eSB3YXJuaW5ncyBvbiBnZXRSZXNwb25zZUhlYWRlciB3aGVuIG5vdCBhbGxvd2VkIGJ5IENPUlNcblx0ICAgICAgICBpZiAoL15YLVJlcXVlc3QtVVJMOi9tLnRlc3QoeGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpKSkge1xuXHQgICAgICAgICAgcmV0dXJuIHhoci5nZXRSZXNwb25zZUhlYWRlcignWC1SZXF1ZXN0LVVSTCcpXG5cdCAgICAgICAgfVxuXHRcblx0ICAgICAgICByZXR1cm5cblx0ICAgICAgfVxuXHRcblx0ICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHQgICAgICAgIHZhciBvcHRpb25zID0ge1xuXHQgICAgICAgICAgc3RhdHVzOiB4aHIuc3RhdHVzLFxuXHQgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG5cdCAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzKHhociksXG5cdCAgICAgICAgICB1cmw6IHJlc3BvbnNlVVJMKClcblx0ICAgICAgICB9XG5cdCAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHRcblx0ICAgICAgICByZXNvbHZlKG5ldyBSZXNwb25zZShib2R5LCBvcHRpb25zKSlcblx0ICAgICAgfVxuXHRcblx0ICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0ICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKVxuXHQgICAgICB9XG5cdFxuXHQgICAgICB4aHIub250aW1lb3V0ID0gZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ05ldHdvcmsgcmVxdWVzdCBmYWlsZWQnKSlcblx0ICAgICAgfVxuXHRcblx0ICAgICAgeGhyLm9wZW4ocmVxdWVzdC5tZXRob2QsIHJlcXVlc3QudXJsLCB0cnVlKVxuXHRcblx0ICAgICAgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdpbmNsdWRlJykge1xuXHQgICAgICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB0cnVlXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG5cdCAgICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdibG9iJ1xuXHQgICAgICB9XG5cdFxuXHQgICAgICByZXF1ZXN0LmhlYWRlcnMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSwgbmFtZSkge1xuXHQgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKVxuXHQgICAgICB9KVxuXHRcblx0ICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdClcblx0ICAgIH0pXG5cdCAgfVxuXHQgIHNlbGYuZmV0Y2gucG9seWZpbGwgPSB0cnVlXG5cdH0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzKTtcblxuXG4vKioqLyB9LFxuLyogNiAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0dmFyIHJlcXVpcmU7LyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKHByb2Nlc3MsIGdsb2JhbCkgey8qIVxuXHQgKiBAb3ZlcnZpZXcgZXM2LXByb21pc2UgLSBhIHRpbnkgaW1wbGVtZW50YXRpb24gb2YgUHJvbWlzZXMvQSsuXG5cdCAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG5cdCAqIEBsaWNlbnNlICAgTGljZW5zZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcblx0ICogICAgICAgICAgICBTZWUgaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3N0ZWZhbnBlbm5lci9lczYtcHJvbWlzZS9tYXN0ZXIvTElDRU5TRVxuXHQgKiBAdmVyc2lvbiAgIDMuMy4xXG5cdCAqL1xuXHRcblx0KGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0ICAgICB0cnVlID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHQgICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0ICAgIChnbG9iYWwuRVM2UHJvbWlzZSA9IGZhY3RvcnkoKSk7XG5cdH0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXHRcblx0ZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG5cdCAgcmV0dXJuIHR5cGVvZiB4ID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBpc0Z1bmN0aW9uKHgpIHtcblx0ICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG5cdH1cblx0XG5cdHZhciBfaXNBcnJheSA9IHVuZGVmaW5lZDtcblx0aWYgKCFBcnJheS5pc0FycmF5KSB7XG5cdCAgX2lzQXJyYXkgPSBmdW5jdGlvbiAoeCkge1xuXHQgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgQXJyYXldJztcblx0ICB9O1xuXHR9IGVsc2Uge1xuXHQgIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblx0fVxuXHRcblx0dmFyIGlzQXJyYXkgPSBfaXNBcnJheTtcblx0XG5cdHZhciBsZW4gPSAwO1xuXHR2YXIgdmVydHhOZXh0ID0gdW5kZWZpbmVkO1xuXHR2YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB1bmRlZmluZWQ7XG5cdFxuXHR2YXIgYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuXHQgIHF1ZXVlW2xlbl0gPSBjYWxsYmFjaztcblx0ICBxdWV1ZVtsZW4gKyAxXSA9IGFyZztcblx0ICBsZW4gKz0gMjtcblx0ICBpZiAobGVuID09PSAyKSB7XG5cdCAgICAvLyBJZiBsZW4gaXMgMiwgdGhhdCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gc2NoZWR1bGUgYW4gYXN5bmMgZmx1c2guXG5cdCAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuXHQgICAgLy8gd2lsbCBiZSBwcm9jZXNzZWQgYnkgdGhpcyBmbHVzaCB0aGF0IHdlIGFyZSBzY2hlZHVsaW5nLlxuXHQgICAgaWYgKGN1c3RvbVNjaGVkdWxlckZuKSB7XG5cdCAgICAgIGN1c3RvbVNjaGVkdWxlckZuKGZsdXNoKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHNjaGVkdWxlRmx1c2goKTtcblx0ICAgIH1cblx0ICB9XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBzZXRTY2hlZHVsZXIoc2NoZWR1bGVGbikge1xuXHQgIGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcblx0fVxuXHRcblx0ZnVuY3Rpb24gc2V0QXNhcChhc2FwRm4pIHtcblx0ICBhc2FwID0gYXNhcEZuO1xuXHR9XG5cdFxuXHR2YXIgYnJvd3NlcldpbmRvdyA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93IDogdW5kZWZpbmVkO1xuXHR2YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG5cdHZhciBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9IGJyb3dzZXJHbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBicm93c2VyR2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cdHZhciBpc05vZGUgPSB0eXBlb2Ygc2VsZiA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmICh7fSkudG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXHRcblx0Ly8gdGVzdCBmb3Igd2ViIHdvcmtlciBidXQgbm90IGluIElFMTBcblx0dmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblx0XG5cdC8vIG5vZGVcblx0ZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG5cdCAgLy8gbm9kZSB2ZXJzaW9uIDAuMTAueCBkaXNwbGF5cyBhIGRlcHJlY2F0aW9uIHdhcm5pbmcgd2hlbiBuZXh0VGljayBpcyB1c2VkIHJlY3Vyc2l2ZWx5XG5cdCAgLy8gc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jdWpvanMvd2hlbi9pc3N1ZXMvNDEwIGZvciBkZXRhaWxzXG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcblx0ICB9O1xuXHR9XG5cdFxuXHQvLyB2ZXJ0eFxuXHRmdW5jdGlvbiB1c2VWZXJ0eFRpbWVyKCkge1xuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICB2ZXJ0eE5leHQoZmx1c2gpO1xuXHQgIH07XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHVzZU11dGF0aW9uT2JzZXJ2ZXIoKSB7XG5cdCAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuXHQgIHZhciBvYnNlcnZlciA9IG5ldyBCcm93c2VyTXV0YXRpb25PYnNlcnZlcihmbHVzaCk7XG5cdCAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG5cdCAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cdFxuXHQgIHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdCAgICBub2RlLmRhdGEgPSBpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMjtcblx0ICB9O1xuXHR9XG5cdFxuXHQvLyB3ZWIgd29ya2VyXG5cdGZ1bmN0aW9uIHVzZU1lc3NhZ2VDaGFubmVsKCkge1xuXHQgIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG5cdCAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmbHVzaDtcblx0ICByZXR1cm4gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG5cdCAgfTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gdXNlU2V0VGltZW91dCgpIHtcblx0ICAvLyBTdG9yZSBzZXRUaW1lb3V0IHJlZmVyZW5jZSBzbyBlczYtcHJvbWlzZSB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcblx0ICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcblx0ICB2YXIgZ2xvYmFsU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0ICAgIHJldHVybiBnbG9iYWxTZXRUaW1lb3V0KGZsdXNoLCAxKTtcblx0ICB9O1xuXHR9XG5cdFxuXHR2YXIgcXVldWUgPSBuZXcgQXJyYXkoMTAwMCk7XG5cdGZ1bmN0aW9uIGZsdXNoKCkge1xuXHQgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcblx0ICAgIHZhciBjYWxsYmFjayA9IHF1ZXVlW2ldO1xuXHQgICAgdmFyIGFyZyA9IHF1ZXVlW2kgKyAxXTtcblx0XG5cdCAgICBjYWxsYmFjayhhcmcpO1xuXHRcblx0ICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuXHQgICAgcXVldWVbaSArIDFdID0gdW5kZWZpbmVkO1xuXHQgIH1cblx0XG5cdCAgbGVuID0gMDtcblx0fVxuXHRcblx0ZnVuY3Rpb24gYXR0ZW1wdFZlcnR4KCkge1xuXHQgIHRyeSB7XG5cdCAgICB2YXIgciA9IHJlcXVpcmU7XG5cdCAgICB2YXIgdmVydHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXHQgICAgdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcblx0ICAgIHJldHVybiB1c2VWZXJ0eFRpbWVyKCk7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcblx0ICB9XG5cdH1cblx0XG5cdHZhciBzY2hlZHVsZUZsdXNoID0gdW5kZWZpbmVkO1xuXHQvLyBEZWNpZGUgd2hhdCBhc3luYyBtZXRob2QgdG8gdXNlIHRvIHRyaWdnZXJpbmcgcHJvY2Vzc2luZyBvZiBxdWV1ZWQgY2FsbGJhY2tzOlxuXHRpZiAoaXNOb2RlKSB7XG5cdCAgc2NoZWR1bGVGbHVzaCA9IHVzZU5leHRUaWNrKCk7XG5cdH0gZWxzZSBpZiAoQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIpIHtcblx0ICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xuXHR9IGVsc2UgaWYgKGlzV29ya2VyKSB7XG5cdCAgc2NoZWR1bGVGbHVzaCA9IHVzZU1lc3NhZ2VDaGFubmVsKCk7XG5cdH0gZWxzZSBpZiAoYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIFwiZnVuY3Rpb25cIiA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgIHNjaGVkdWxlRmx1c2ggPSBhdHRlbXB0VmVydHgoKTtcblx0fSBlbHNlIHtcblx0ICBzY2hlZHVsZUZsdXNoID0gdXNlU2V0VGltZW91dCgpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG5cdCAgdmFyIF9hcmd1bWVudHMgPSBhcmd1bWVudHM7XG5cdFxuXHQgIHZhciBwYXJlbnQgPSB0aGlzO1xuXHRcblx0ICB2YXIgY2hpbGQgPSBuZXcgdGhpcy5jb25zdHJ1Y3Rvcihub29wKTtcblx0XG5cdCAgaWYgKGNoaWxkW1BST01JU0VfSURdID09PSB1bmRlZmluZWQpIHtcblx0ICAgIG1ha2VQcm9taXNlKGNoaWxkKTtcblx0ICB9XG5cdFxuXHQgIHZhciBfc3RhdGUgPSBwYXJlbnQuX3N0YXRlO1xuXHRcblx0ICBpZiAoX3N0YXRlKSB7XG5cdCAgICAoZnVuY3Rpb24gKCkge1xuXHQgICAgICB2YXIgY2FsbGJhY2sgPSBfYXJndW1lbnRzW19zdGF0ZSAtIDFdO1xuXHQgICAgICBhc2FwKGZ1bmN0aW9uICgpIHtcblx0ICAgICAgICByZXR1cm4gaW52b2tlQ2FsbGJhY2soX3N0YXRlLCBjaGlsZCwgY2FsbGJhY2ssIHBhcmVudC5fcmVzdWx0KTtcblx0ICAgICAgfSk7XG5cdCAgICB9KSgpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBzdWJzY3JpYmUocGFyZW50LCBjaGlsZCwgb25GdWxmaWxsbWVudCwgb25SZWplY3Rpb24pO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIGNoaWxkO1xuXHR9XG5cdFxuXHQvKipcblx0ICBgUHJvbWlzZS5yZXNvbHZlYCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgYmVjb21lIHJlc29sdmVkIHdpdGggdGhlXG5cdCAgcGFzc2VkIGB2YWx1ZWAuIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblx0XG5cdCAgYGBgamF2YXNjcmlwdFxuXHQgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgIHJlc29sdmUoMSk7XG5cdCAgfSk7XG5cdFxuXHQgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSl7XG5cdCAgICAvLyB2YWx1ZSA9PT0gMVxuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cdFxuXHQgIGBgYGphdmFzY3JpcHRcblx0ICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgxKTtcblx0XG5cdCAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgIC8vIHZhbHVlID09PSAxXG5cdCAgfSk7XG5cdCAgYGBgXG5cdFxuXHQgIEBtZXRob2QgcmVzb2x2ZVxuXHQgIEBzdGF0aWNcblx0ICBAcGFyYW0ge0FueX0gdmFsdWUgdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGhcblx0ICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgZnVsZmlsbGVkIHdpdGggdGhlIGdpdmVuXG5cdCAgYHZhbHVlYFxuXHQqL1xuXHRmdW5jdGlvbiByZXNvbHZlKG9iamVjdCkge1xuXHQgIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG5cdCAgdmFyIENvbnN0cnVjdG9yID0gdGhpcztcblx0XG5cdCAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG5cdCAgICByZXR1cm4gb2JqZWN0O1xuXHQgIH1cblx0XG5cdCAgdmFyIHByb21pc2UgPSBuZXcgQ29uc3RydWN0b3Iobm9vcCk7XG5cdCAgX3Jlc29sdmUocHJvbWlzZSwgb2JqZWN0KTtcblx0ICByZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRcblx0dmFyIFBST01JU0VfSUQgPSBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMTYpO1xuXHRcblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cdFxuXHR2YXIgUEVORElORyA9IHZvaWQgMDtcblx0dmFyIEZVTEZJTExFRCA9IDE7XG5cdHZhciBSRUpFQ1RFRCA9IDI7XG5cdFxuXHR2YXIgR0VUX1RIRU5fRVJST1IgPSBuZXcgRXJyb3JPYmplY3QoKTtcblx0XG5cdGZ1bmN0aW9uIHNlbGZGdWxmaWxsbWVudCgpIHtcblx0ICByZXR1cm4gbmV3IFR5cGVFcnJvcihcIllvdSBjYW5ub3QgcmVzb2x2ZSBhIHByb21pc2Ugd2l0aCBpdHNlbGZcIik7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGNhbm5vdFJldHVybk93bigpIHtcblx0ICByZXR1cm4gbmV3IFR5cGVFcnJvcignQSBwcm9taXNlcyBjYWxsYmFjayBjYW5ub3QgcmV0dXJuIHRoYXQgc2FtZSBwcm9taXNlLicpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBnZXRUaGVuKHByb21pc2UpIHtcblx0ICB0cnkge1xuXHQgICAgcmV0dXJuIHByb21pc2UudGhlbjtcblx0ICB9IGNhdGNoIChlcnJvcikge1xuXHQgICAgR0VUX1RIRU5fRVJST1IuZXJyb3IgPSBlcnJvcjtcblx0ICAgIHJldHVybiBHRVRfVEhFTl9FUlJPUjtcblx0ICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuXHQgIHRyeSB7XG5cdCAgICB0aGVuLmNhbGwodmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcik7XG5cdCAgfSBjYXRjaCAoZSkge1xuXHQgICAgcmV0dXJuIGU7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBoYW5kbGVGb3JlaWduVGhlbmFibGUocHJvbWlzZSwgdGhlbmFibGUsIHRoZW4pIHtcblx0ICBhc2FwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG5cdCAgICB2YXIgc2VhbGVkID0gZmFsc2U7XG5cdCAgICB2YXIgZXJyb3IgPSB0cnlUaGVuKHRoZW4sIHRoZW5hYmxlLCBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKHNlYWxlZCkge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgICAgfVxuXHQgICAgICBzZWFsZWQgPSB0cnVlO1xuXHQgICAgICBpZiAodGhlbmFibGUgIT09IHZhbHVlKSB7XG5cdCAgICAgICAgX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgICB9XG5cdCAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgIGlmIChzZWFsZWQpIHtcblx0ICAgICAgICByZXR1cm47XG5cdCAgICAgIH1cblx0ICAgICAgc2VhbGVkID0gdHJ1ZTtcblx0XG5cdCAgICAgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcblx0ICAgIH0sICdTZXR0bGU6ICcgKyAocHJvbWlzZS5fbGFiZWwgfHwgJyB1bmtub3duIHByb21pc2UnKSk7XG5cdFxuXHQgICAgaWYgKCFzZWFsZWQgJiYgZXJyb3IpIHtcblx0ICAgICAgc2VhbGVkID0gdHJ1ZTtcblx0ICAgICAgX3JlamVjdChwcm9taXNlLCBlcnJvcik7XG5cdCAgICB9XG5cdCAgfSwgcHJvbWlzZSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIHRoZW5hYmxlKSB7XG5cdCAgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gRlVMRklMTEVEKSB7XG5cdCAgICBmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuXHQgIH0gZWxzZSBpZiAodGhlbmFibGUuX3N0YXRlID09PSBSRUpFQ1RFRCkge1xuXHQgICAgX3JlamVjdChwcm9taXNlLCB0aGVuYWJsZS5fcmVzdWx0KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICByZXR1cm4gX3Jlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICByZXR1cm4gX3JlamVjdChwcm9taXNlLCByZWFzb24pO1xuXHQgICAgfSk7XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4kJCkge1xuXHQgIGlmIChtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yID09PSBwcm9taXNlLmNvbnN0cnVjdG9yICYmIHRoZW4kJCA9PT0gdGhlbiAmJiBtYXliZVRoZW5hYmxlLmNvbnN0cnVjdG9yLnJlc29sdmUgPT09IHJlc29sdmUpIHtcblx0ICAgIGhhbmRsZU93blRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUpO1xuXHQgIH0gZWxzZSB7XG5cdCAgICBpZiAodGhlbiQkID09PSBHRVRfVEhFTl9FUlJPUikge1xuXHQgICAgICBfcmVqZWN0KHByb21pc2UsIEdFVF9USEVOX0VSUk9SLmVycm9yKTtcblx0ICAgIH0gZWxzZSBpZiAodGhlbiQkID09PSB1bmRlZmluZWQpIHtcblx0ICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcblx0ICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0aGVuJCQpKSB7XG5cdCAgICAgIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuJCQpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcblx0ICAgIH1cblx0ICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKSB7XG5cdCAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG5cdCAgICBfcmVqZWN0KHByb21pc2UsIHNlbGZGdWxmaWxsbWVudCgpKTtcblx0ICB9IGVsc2UgaWYgKG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG5cdCAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCBnZXRUaGVuKHZhbHVlKSk7XG5cdCAgfSBlbHNlIHtcblx0ICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gcHVibGlzaFJlamVjdGlvbihwcm9taXNlKSB7XG5cdCAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcblx0ICAgIHByb21pc2UuX29uZXJyb3IocHJvbWlzZS5fcmVzdWx0KTtcblx0ICB9XG5cdFxuXHQgIHB1Ymxpc2gocHJvbWlzZSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpIHtcblx0ICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdFxuXHQgIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuXHQgIHByb21pc2UuX3N0YXRlID0gRlVMRklMTEVEO1xuXHRcblx0ICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG5cdCAgICBhc2FwKHB1Ymxpc2gsIHByb21pc2UpO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gX3JlamVjdChwcm9taXNlLCByZWFzb24pIHtcblx0ICBpZiAocHJvbWlzZS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcblx0ICAgIHJldHVybjtcblx0ICB9XG5cdCAgcHJvbWlzZS5fc3RhdGUgPSBSRUpFQ1RFRDtcblx0ICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cdFxuXHQgIGFzYXAocHVibGlzaFJlamVjdGlvbiwgcHJvbWlzZSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHN1YnNjcmliZShwYXJlbnQsIGNoaWxkLCBvbkZ1bGZpbGxtZW50LCBvblJlamVjdGlvbikge1xuXHQgIHZhciBfc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuXHQgIHZhciBsZW5ndGggPSBfc3Vic2NyaWJlcnMubGVuZ3RoO1xuXHRcblx0ICBwYXJlbnQuX29uZXJyb3IgPSBudWxsO1xuXHRcblx0ICBfc3Vic2NyaWJlcnNbbGVuZ3RoXSA9IGNoaWxkO1xuXHQgIF9zdWJzY3JpYmVyc1tsZW5ndGggKyBGVUxGSUxMRURdID0gb25GdWxmaWxsbWVudDtcblx0ICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgUkVKRUNURURdID0gb25SZWplY3Rpb247XG5cdFxuXHQgIGlmIChsZW5ndGggPT09IDAgJiYgcGFyZW50Ll9zdGF0ZSkge1xuXHQgICAgYXNhcChwdWJsaXNoLCBwYXJlbnQpO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gcHVibGlzaChwcm9taXNlKSB7XG5cdCAgdmFyIHN1YnNjcmliZXJzID0gcHJvbWlzZS5fc3Vic2NyaWJlcnM7XG5cdCAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblx0XG5cdCAgaWYgKHN1YnNjcmliZXJzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0XG5cdCAgdmFyIGNoaWxkID0gdW5kZWZpbmVkLFxuXHQgICAgICBjYWxsYmFjayA9IHVuZGVmaW5lZCxcblx0ICAgICAgZGV0YWlsID0gcHJvbWlzZS5fcmVzdWx0O1xuXHRcblx0ICBmb3IgKHZhciBpID0gMDsgaSA8IHN1YnNjcmliZXJzLmxlbmd0aDsgaSArPSAzKSB7XG5cdCAgICBjaGlsZCA9IHN1YnNjcmliZXJzW2ldO1xuXHQgICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cdFxuXHQgICAgaWYgKGNoaWxkKSB7XG5cdCAgICAgIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIGNhbGxiYWNrKGRldGFpbCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBFcnJvck9iamVjdCgpIHtcblx0ICB0aGlzLmVycm9yID0gbnVsbDtcblx0fVxuXHRcblx0dmFyIFRSWV9DQVRDSF9FUlJPUiA9IG5ldyBFcnJvck9iamVjdCgpO1xuXHRcblx0ZnVuY3Rpb24gdHJ5Q2F0Y2goY2FsbGJhY2ssIGRldGFpbCkge1xuXHQgIHRyeSB7XG5cdCAgICByZXR1cm4gY2FsbGJhY2soZGV0YWlsKTtcblx0ICB9IGNhdGNoIChlKSB7XG5cdCAgICBUUllfQ0FUQ0hfRVJST1IuZXJyb3IgPSBlO1xuXHQgICAgcmV0dXJuIFRSWV9DQVRDSF9FUlJPUjtcblx0ICB9XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIHByb21pc2UsIGNhbGxiYWNrLCBkZXRhaWwpIHtcblx0ICB2YXIgaGFzQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKGNhbGxiYWNrKSxcblx0ICAgICAgdmFsdWUgPSB1bmRlZmluZWQsXG5cdCAgICAgIGVycm9yID0gdW5kZWZpbmVkLFxuXHQgICAgICBzdWNjZWVkZWQgPSB1bmRlZmluZWQsXG5cdCAgICAgIGZhaWxlZCA9IHVuZGVmaW5lZDtcblx0XG5cdCAgaWYgKGhhc0NhbGxiYWNrKSB7XG5cdCAgICB2YWx1ZSA9IHRyeUNhdGNoKGNhbGxiYWNrLCBkZXRhaWwpO1xuXHRcblx0ICAgIGlmICh2YWx1ZSA9PT0gVFJZX0NBVENIX0VSUk9SKSB7XG5cdCAgICAgIGZhaWxlZCA9IHRydWU7XG5cdCAgICAgIGVycm9yID0gdmFsdWUuZXJyb3I7XG5cdCAgICAgIHZhbHVlID0gbnVsbDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG5cdCAgICB9XG5cdFxuXHQgICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB7XG5cdCAgICAgIF9yZWplY3QocHJvbWlzZSwgY2Fubm90UmV0dXJuT3duKCkpO1xuXHQgICAgICByZXR1cm47XG5cdCAgICB9XG5cdCAgfSBlbHNlIHtcblx0ICAgIHZhbHVlID0gZGV0YWlsO1xuXHQgICAgc3VjY2VlZGVkID0gdHJ1ZTtcblx0ICB9XG5cdFxuXHQgIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuXHQgICAgLy8gbm9vcFxuXHQgIH0gZWxzZSBpZiAoaGFzQ2FsbGJhY2sgJiYgc3VjY2VlZGVkKSB7XG5cdCAgICAgIF9yZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcblx0ICAgIH0gZWxzZSBpZiAoZmFpbGVkKSB7XG5cdCAgICAgIF9yZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuXHQgICAgfSBlbHNlIGlmIChzZXR0bGVkID09PSBGVUxGSUxMRUQpIHtcblx0ICAgICAgZnVsZmlsbChwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG5cdCAgICAgIF9yZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuXHQgICAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuXHQgIHRyeSB7XG5cdCAgICByZXNvbHZlcihmdW5jdGlvbiByZXNvbHZlUHJvbWlzZSh2YWx1ZSkge1xuXHQgICAgICBfcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuXHQgICAgICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG5cdCAgICB9KTtcblx0ICB9IGNhdGNoIChlKSB7XG5cdCAgICBfcmVqZWN0KHByb21pc2UsIGUpO1xuXHQgIH1cblx0fVxuXHRcblx0dmFyIGlkID0gMDtcblx0ZnVuY3Rpb24gbmV4dElkKCkge1xuXHQgIHJldHVybiBpZCsrO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBtYWtlUHJvbWlzZShwcm9taXNlKSB7XG5cdCAgcHJvbWlzZVtQUk9NSVNFX0lEXSA9IGlkKys7XG5cdCAgcHJvbWlzZS5fc3RhdGUgPSB1bmRlZmluZWQ7XG5cdCAgcHJvbWlzZS5fcmVzdWx0ID0gdW5kZWZpbmVkO1xuXHQgIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG5cdH1cblx0XG5cdGZ1bmN0aW9uIEVudW1lcmF0b3IoQ29uc3RydWN0b3IsIGlucHV0KSB7XG5cdCAgdGhpcy5faW5zdGFuY2VDb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuXHQgIHRoaXMucHJvbWlzZSA9IG5ldyBDb25zdHJ1Y3Rvcihub29wKTtcblx0XG5cdCAgaWYgKCF0aGlzLnByb21pc2VbUFJPTUlTRV9JRF0pIHtcblx0ICAgIG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG5cdCAgfVxuXHRcblx0ICBpZiAoaXNBcnJheShpbnB1dCkpIHtcblx0ICAgIHRoaXMuX2lucHV0ID0gaW5wdXQ7XG5cdCAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcblx0ICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblx0XG5cdCAgICB0aGlzLl9yZXN1bHQgPSBuZXcgQXJyYXkodGhpcy5sZW5ndGgpO1xuXHRcblx0ICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuXHQgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIHRoaXMubGVuZ3RoID0gdGhpcy5sZW5ndGggfHwgMDtcblx0ICAgICAgdGhpcy5fZW51bWVyYXRlKCk7XG5cdCAgICAgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcblx0ICAgICAgICBmdWxmaWxsKHRoaXMucHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH0gZWxzZSB7XG5cdCAgICBfcmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsaWRhdGlvbkVycm9yKCkpO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gdmFsaWRhdGlvbkVycm9yKCkge1xuXHQgIHJldHVybiBuZXcgRXJyb3IoJ0FycmF5IE1ldGhvZHMgbXVzdCBiZSBwcm92aWRlZCBhbiBBcnJheScpO1xuXHR9O1xuXHRcblx0RW51bWVyYXRvci5wcm90b3R5cGUuX2VudW1lcmF0ZSA9IGZ1bmN0aW9uICgpIHtcblx0ICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG5cdCAgdmFyIF9pbnB1dCA9IHRoaXMuX2lucHV0O1xuXHRcblx0ICBmb3IgKHZhciBpID0gMDsgdGhpcy5fc3RhdGUgPT09IFBFTkRJTkcgJiYgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICB0aGlzLl9lYWNoRW50cnkoX2lucHV0W2ldLCBpKTtcblx0ICB9XG5cdH07XG5cdFxuXHRFbnVtZXJhdG9yLnByb3RvdHlwZS5fZWFjaEVudHJ5ID0gZnVuY3Rpb24gKGVudHJ5LCBpKSB7XG5cdCAgdmFyIGMgPSB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yO1xuXHQgIHZhciByZXNvbHZlJCQgPSBjLnJlc29sdmU7XG5cdFxuXHQgIGlmIChyZXNvbHZlJCQgPT09IHJlc29sdmUpIHtcblx0ICAgIHZhciBfdGhlbiA9IGdldFRoZW4oZW50cnkpO1xuXHRcblx0ICAgIGlmIChfdGhlbiA9PT0gdGhlbiAmJiBlbnRyeS5fc3RhdGUgIT09IFBFTkRJTkcpIHtcblx0ICAgICAgdGhpcy5fc2V0dGxlZEF0KGVudHJ5Ll9zdGF0ZSwgaSwgZW50cnkuX3Jlc3VsdCk7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGVvZiBfdGhlbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHQgICAgICB0aGlzLl9yZW1haW5pbmctLTtcblx0ICAgICAgdGhpcy5fcmVzdWx0W2ldID0gZW50cnk7XG5cdCAgICB9IGVsc2UgaWYgKGMgPT09IFByb21pc2UpIHtcblx0ICAgICAgdmFyIHByb21pc2UgPSBuZXcgYyhub29wKTtcblx0ICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgX3RoZW4pO1xuXHQgICAgICB0aGlzLl93aWxsU2V0dGxlQXQocHJvbWlzZSwgaSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLl93aWxsU2V0dGxlQXQobmV3IGMoZnVuY3Rpb24gKHJlc29sdmUkJCkge1xuXHQgICAgICAgIHJldHVybiByZXNvbHZlJCQoZW50cnkpO1xuXHQgICAgICB9KSwgaSk7XG5cdCAgICB9XG5cdCAgfSBlbHNlIHtcblx0ICAgIHRoaXMuX3dpbGxTZXR0bGVBdChyZXNvbHZlJCQoZW50cnkpLCBpKTtcblx0ICB9XG5cdH07XG5cdFxuXHRFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24gKHN0YXRlLCBpLCB2YWx1ZSkge1xuXHQgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuXHRcblx0ICBpZiAocHJvbWlzZS5fc3RhdGUgPT09IFBFTkRJTkcpIHtcblx0ICAgIHRoaXMuX3JlbWFpbmluZy0tO1xuXHRcblx0ICAgIGlmIChzdGF0ZSA9PT0gUkVKRUNURUQpIHtcblx0ICAgICAgX3JlamVjdChwcm9taXNlLCB2YWx1ZSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB0aGlzLl9yZXN1bHRbaV0gPSB2YWx1ZTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGlmICh0aGlzLl9yZW1haW5pbmcgPT09IDApIHtcblx0ICAgIGZ1bGZpbGwocHJvbWlzZSwgdGhpcy5fcmVzdWx0KTtcblx0ICB9XG5cdH07XG5cdFxuXHRFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24gKHByb21pc2UsIGkpIHtcblx0ICB2YXIgZW51bWVyYXRvciA9IHRoaXM7XG5cdFxuXHQgIHN1YnNjcmliZShwcm9taXNlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgcmV0dXJuIGVudW1lcmF0b3IuX3NldHRsZWRBdChGVUxGSUxMRUQsIGksIHZhbHVlKTtcblx0ICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KFJFSkVDVEVELCBpLCByZWFzb24pO1xuXHQgIH0pO1xuXHR9O1xuXHRcblx0LyoqXG5cdCAgYFByb21pc2UuYWxsYCBhY2NlcHRzIGFuIGFycmF5IG9mIHByb21pc2VzLCBhbmQgcmV0dXJucyBhIG5ldyBwcm9taXNlIHdoaWNoXG5cdCAgaXMgZnVsZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzIGZvciB0aGUgcGFzc2VkIHByb21pc2VzLCBvclxuXHQgIHJlamVjdGVkIHdpdGggdGhlIHJlYXNvbiBvZiB0aGUgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gYmUgcmVqZWN0ZWQuIEl0IGNhc3RzIGFsbFxuXHQgIGVsZW1lbnRzIG9mIHRoZSBwYXNzZWQgaXRlcmFibGUgdG8gcHJvbWlzZXMgYXMgaXQgcnVucyB0aGlzIGFsZ29yaXRobS5cblx0XG5cdCAgRXhhbXBsZTpcblx0XG5cdCAgYGBgamF2YXNjcmlwdFxuXHQgIGxldCBwcm9taXNlMSA9IHJlc29sdmUoMSk7XG5cdCAgbGV0IHByb21pc2UyID0gcmVzb2x2ZSgyKTtcblx0ICBsZXQgcHJvbWlzZTMgPSByZXNvbHZlKDMpO1xuXHQgIGxldCBwcm9taXNlcyA9IFsgcHJvbWlzZTEsIHByb21pc2UyLCBwcm9taXNlMyBdO1xuXHRcblx0ICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG5cdCAgICAvLyBUaGUgYXJyYXkgaGVyZSB3b3VsZCBiZSBbIDEsIDIsIDMgXTtcblx0ICB9KTtcblx0ICBgYGBcblx0XG5cdCAgSWYgYW55IG9mIHRoZSBgcHJvbWlzZXNgIGdpdmVuIHRvIGBhbGxgIGFyZSByZWplY3RlZCwgdGhlIGZpcnN0IHByb21pc2Vcblx0ICB0aGF0IGlzIHJlamVjdGVkIHdpbGwgYmUgZ2l2ZW4gYXMgYW4gYXJndW1lbnQgdG8gdGhlIHJldHVybmVkIHByb21pc2VzJ3Ncblx0ICByZWplY3Rpb24gaGFuZGxlci4gRm9yIGV4YW1wbGU6XG5cdFxuXHQgIEV4YW1wbGU6XG5cdFxuXHQgIGBgYGphdmFzY3JpcHRcblx0ICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuXHQgIGxldCBwcm9taXNlMiA9IHJlamVjdChuZXcgRXJyb3IoXCIyXCIpKTtcblx0ICBsZXQgcHJvbWlzZTMgPSByZWplY3QobmV3IEVycm9yKFwiM1wiKSk7XG5cdCAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cdFxuXHQgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKGFycmF5KXtcblx0ICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zIGJlY2F1c2UgdGhlcmUgYXJlIHJlamVjdGVkIHByb21pc2VzIVxuXHQgIH0sIGZ1bmN0aW9uKGVycm9yKSB7XG5cdCAgICAvLyBlcnJvci5tZXNzYWdlID09PSBcIjJcIlxuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBAbWV0aG9kIGFsbFxuXHQgIEBzdGF0aWNcblx0ICBAcGFyYW0ge0FycmF5fSBlbnRyaWVzIGFycmF5IG9mIHByb21pc2VzXG5cdCAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG5cdCAgVXNlZnVsIGZvciB0b29saW5nLlxuXHQgIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2UgdGhhdCBpcyBmdWxmaWxsZWQgd2hlbiBhbGwgYHByb21pc2VzYCBoYXZlIGJlZW5cblx0ICBmdWxmaWxsZWQsIG9yIHJlamVjdGVkIGlmIGFueSBvZiB0aGVtIGJlY29tZSByZWplY3RlZC5cblx0ICBAc3RhdGljXG5cdCovXG5cdGZ1bmN0aW9uIGFsbChlbnRyaWVzKSB7XG5cdCAgcmV0dXJuIG5ldyBFbnVtZXJhdG9yKHRoaXMsIGVudHJpZXMpLnByb21pc2U7XG5cdH1cblx0XG5cdC8qKlxuXHQgIGBQcm9taXNlLnJhY2VgIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaCBpcyBzZXR0bGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGVcblx0ICBmaXJzdCBwYXNzZWQgcHJvbWlzZSB0byBzZXR0bGUuXG5cdFxuXHQgIEV4YW1wbGU6XG5cdFxuXHQgIGBgYGphdmFzY3JpcHRcblx0ICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuXHQgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgICAgICByZXNvbHZlKCdwcm9taXNlIDEnKTtcblx0ICAgIH0sIDIwMCk7XG5cdCAgfSk7XG5cdFxuXHQgIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG5cdCAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cdCAgICAgIHJlc29sdmUoJ3Byb21pc2UgMicpO1xuXHQgICAgfSwgMTAwKTtcblx0ICB9KTtcblx0XG5cdCAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG5cdCAgICAvLyByZXN1bHQgPT09ICdwcm9taXNlIDInIGJlY2F1c2UgaXQgd2FzIHJlc29sdmVkIGJlZm9yZSBwcm9taXNlMVxuXHQgICAgLy8gd2FzIHJlc29sdmVkLlxuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBgUHJvbWlzZS5yYWNlYCBpcyBkZXRlcm1pbmlzdGljIGluIHRoYXQgb25seSB0aGUgc3RhdGUgb2YgdGhlIGZpcnN0XG5cdCAgc2V0dGxlZCBwcm9taXNlIG1hdHRlcnMuIEZvciBleGFtcGxlLCBldmVuIGlmIG90aGVyIHByb21pc2VzIGdpdmVuIHRvIHRoZVxuXHQgIGBwcm9taXNlc2AgYXJyYXkgYXJndW1lbnQgYXJlIHJlc29sdmVkLCBidXQgdGhlIGZpcnN0IHNldHRsZWQgcHJvbWlzZSBoYXNcblx0ICBiZWNvbWUgcmVqZWN0ZWQgYmVmb3JlIHRoZSBvdGhlciBwcm9taXNlcyBiZWNhbWUgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcblx0ICBwcm9taXNlIHdpbGwgYmVjb21lIHJlamVjdGVkOlxuXHRcblx0ICBgYGBqYXZhc2NyaXB0XG5cdCAgbGV0IHByb21pc2UxID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0ICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG5cdCAgICB9LCAyMDApO1xuXHQgIH0pO1xuXHRcblx0ICBsZXQgcHJvbWlzZTIgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuXHQgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXHQgICAgICByZWplY3QobmV3IEVycm9yKCdwcm9taXNlIDInKSk7XG5cdCAgICB9LCAxMDApO1xuXHQgIH0pO1xuXHRcblx0ICBQcm9taXNlLnJhY2UoW3Byb21pc2UxLCBwcm9taXNlMl0pLnRoZW4oZnVuY3Rpb24ocmVzdWx0KXtcblx0ICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zXG5cdCAgfSwgZnVuY3Rpb24ocmVhc29uKXtcblx0ICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIHByb21pc2UgMiBiZWNhbWUgcmVqZWN0ZWQgYmVmb3JlXG5cdCAgICAvLyBwcm9taXNlIDEgYmVjYW1lIGZ1bGZpbGxlZFxuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBBbiBleGFtcGxlIHJlYWwtd29ybGQgdXNlIGNhc2UgaXMgaW1wbGVtZW50aW5nIHRpbWVvdXRzOlxuXHRcblx0ICBgYGBqYXZhc2NyaXB0XG5cdCAgUHJvbWlzZS5yYWNlKFthamF4KCdmb28uanNvbicpLCB0aW1lb3V0KDUwMDApXSlcblx0ICBgYGBcblx0XG5cdCAgQG1ldGhvZCByYWNlXG5cdCAgQHN0YXRpY1xuXHQgIEBwYXJhbSB7QXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIG9ic2VydmVcblx0ICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHdoaWNoIHNldHRsZXMgaW4gdGhlIHNhbWUgd2F5IGFzIHRoZSBmaXJzdCBwYXNzZWRcblx0ICBwcm9taXNlIHRvIHNldHRsZS5cblx0Ki9cblx0ZnVuY3Rpb24gcmFjZShlbnRyaWVzKSB7XG5cdCAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0ICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXHRcblx0ICBpZiAoIWlzQXJyYXkoZW50cmllcykpIHtcblx0ICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuXHQgICAgICByZXR1cm4gcmVqZWN0KG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYW4gYXJyYXkgdG8gcmFjZS4nKSk7XG5cdCAgICB9KTtcblx0ICB9IGVsc2Uge1xuXHQgICAgcmV0dXJuIG5ldyBDb25zdHJ1Y3RvcihmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG5cdCAgICAgIHZhciBsZW5ndGggPSBlbnRyaWVzLmxlbmd0aDtcblx0ICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICAgIENvbnN0cnVjdG9yLnJlc29sdmUoZW50cmllc1tpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuXHQgICAgICB9XG5cdCAgICB9KTtcblx0ICB9XG5cdH1cblx0XG5cdC8qKlxuXHQgIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuXHQgIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblx0XG5cdCAgYGBgamF2YXNjcmlwdFxuXHQgIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgIHJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblx0ICB9KTtcblx0XG5cdCAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuXHQgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG5cdCAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcblx0ICB9KTtcblx0ICBgYGBcblx0XG5cdCAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXHRcblx0ICBgYGBqYXZhc2NyaXB0XG5cdCAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblx0XG5cdCAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcblx0ICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuXHQgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG5cdCAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ1dIT09QUydcblx0ICB9KTtcblx0ICBgYGBcblx0XG5cdCAgQG1ldGhvZCByZWplY3Rcblx0ICBAc3RhdGljXG5cdCAgQHBhcmFtIHtBbnl9IHJlYXNvbiB2YWx1ZSB0aGF0IHRoZSByZXR1cm5lZCBwcm9taXNlIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aC5cblx0ICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHJlamVjdGVkIHdpdGggdGhlIGdpdmVuIGByZWFzb25gLlxuXHQqL1xuXHRmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG5cdCAgLypqc2hpbnQgdmFsaWR0aGlzOnRydWUgKi9cblx0ICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXHQgIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuXHQgIF9yZWplY3QocHJvbWlzZSwgcmVhc29uKTtcblx0ICByZXR1cm4gcHJvbWlzZTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gbmVlZHNSZXNvbHZlcigpIHtcblx0ICB0aHJvdyBuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGEgcmVzb2x2ZXIgZnVuY3Rpb24gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIHRoZSBwcm9taXNlIGNvbnN0cnVjdG9yJyk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG5lZWRzTmV3KCkge1xuXHQgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG5cdH1cblx0XG5cdC8qKlxuXHQgIFByb21pc2Ugb2JqZWN0cyByZXByZXNlbnQgdGhlIGV2ZW50dWFsIHJlc3VsdCBvZiBhbiBhc3luY2hyb25vdXMgb3BlcmF0aW9uLiBUaGVcblx0ICBwcmltYXJ5IHdheSBvZiBpbnRlcmFjdGluZyB3aXRoIGEgcHJvbWlzZSBpcyB0aHJvdWdoIGl0cyBgdGhlbmAgbWV0aG9kLCB3aGljaFxuXHQgIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuXHQgIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuXHRcblx0ICBUZXJtaW5vbG9neVxuXHQgIC0tLS0tLS0tLS0tXG5cdFxuXHQgIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG5cdCAgLSBgdGhlbmFibGVgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB0aGF0IGRlZmluZXMgYSBgdGhlbmAgbWV0aG9kLlxuXHQgIC0gYHZhbHVlYCBpcyBhbnkgbGVnYWwgSmF2YVNjcmlwdCB2YWx1ZSAoaW5jbHVkaW5nIHVuZGVmaW5lZCwgYSB0aGVuYWJsZSwgb3IgYSBwcm9taXNlKS5cblx0ICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cblx0ICAtIGByZWFzb25gIGlzIGEgdmFsdWUgdGhhdCBpbmRpY2F0ZXMgd2h5IGEgcHJvbWlzZSB3YXMgcmVqZWN0ZWQuXG5cdCAgLSBgc2V0dGxlZGAgdGhlIGZpbmFsIHJlc3Rpbmcgc3RhdGUgb2YgYSBwcm9taXNlLCBmdWxmaWxsZWQgb3IgcmVqZWN0ZWQuXG5cdFxuXHQgIEEgcHJvbWlzZSBjYW4gYmUgaW4gb25lIG9mIHRocmVlIHN0YXRlczogcGVuZGluZywgZnVsZmlsbGVkLCBvciByZWplY3RlZC5cblx0XG5cdCAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcblx0ICBzdGF0ZS4gIFByb21pc2VzIHRoYXQgYXJlIHJlamVjdGVkIGhhdmUgYSByZWplY3Rpb24gcmVhc29uIGFuZCBhcmUgaW4gdGhlXG5cdCAgcmVqZWN0ZWQgc3RhdGUuICBBIGZ1bGZpbGxtZW50IHZhbHVlIGlzIG5ldmVyIGEgdGhlbmFibGUuXG5cdFxuXHQgIFByb21pc2VzIGNhbiBhbHNvIGJlIHNhaWQgdG8gKnJlc29sdmUqIGEgdmFsdWUuICBJZiB0aGlzIHZhbHVlIGlzIGFsc28gYVxuXHQgIHByb21pc2UsIHRoZW4gdGhlIG9yaWdpbmFsIHByb21pc2UncyBzZXR0bGVkIHN0YXRlIHdpbGwgbWF0Y2ggdGhlIHZhbHVlJ3Ncblx0ICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcblx0ICBpdHNlbGYgcmVqZWN0LCBhbmQgYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aWxsXG5cdCAgaXRzZWxmIGZ1bGZpbGwuXG5cdFxuXHRcblx0ICBCYXNpYyBVc2FnZTpcblx0ICAtLS0tLS0tLS0tLS1cblx0XG5cdCAgYGBganNcblx0ICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuXHQgICAgLy8gb24gc3VjY2Vzc1xuXHQgICAgcmVzb2x2ZSh2YWx1ZSk7XG5cdFxuXHQgICAgLy8gb24gZmFpbHVyZVxuXHQgICAgcmVqZWN0KHJlYXNvbik7XG5cdCAgfSk7XG5cdFxuXHQgIHByb21pc2UudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuXHQgICAgLy8gb24gZnVsZmlsbG1lbnRcblx0ICB9LCBmdW5jdGlvbihyZWFzb24pIHtcblx0ICAgIC8vIG9uIHJlamVjdGlvblxuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBBZHZhbmNlZCBVc2FnZTpcblx0ICAtLS0tLS0tLS0tLS0tLS1cblx0XG5cdCAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuXHQgIGBYTUxIdHRwUmVxdWVzdGBzLlxuXHRcblx0ICBgYGBqc1xuXHQgIGZ1bmN0aW9uIGdldEpTT04odXJsKSB7XG5cdCAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcblx0ICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHRcblx0ICAgICAgeGhyLm9wZW4oJ0dFVCcsIHVybCk7XG5cdCAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuXHQgICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuXHQgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQWNjZXB0JywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcblx0ICAgICAgeGhyLnNlbmQoKTtcblx0XG5cdCAgICAgIGZ1bmN0aW9uIGhhbmRsZXIoKSB7XG5cdCAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG5cdCAgICAgICAgICBpZiAodGhpcy5zdGF0dXMgPT09IDIwMCkge1xuXHQgICAgICAgICAgICByZXNvbHZlKHRoaXMucmVzcG9uc2UpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignZ2V0SlNPTjogYCcgKyB1cmwgKyAnYCBmYWlsZWQgd2l0aCBzdGF0dXM6IFsnICsgdGhpcy5zdGF0dXMgKyAnXScpKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdCAgICAgIH07XG5cdCAgICB9KTtcblx0ICB9XG5cdFxuXHQgIGdldEpTT04oJy9wb3N0cy5qc29uJykudGhlbihmdW5jdGlvbihqc29uKSB7XG5cdCAgICAvLyBvbiBmdWxmaWxsbWVudFxuXHQgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuXHQgICAgLy8gb24gcmVqZWN0aW9uXG5cdCAgfSk7XG5cdCAgYGBgXG5cdFxuXHQgIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cdFxuXHQgIGBgYGpzXG5cdCAgUHJvbWlzZS5hbGwoW1xuXHQgICAgZ2V0SlNPTignL3Bvc3RzJyksXG5cdCAgICBnZXRKU09OKCcvY29tbWVudHMnKVxuXHQgIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcblx0ICAgIHZhbHVlc1swXSAvLyA9PiBwb3N0c0pTT05cblx0ICAgIHZhbHVlc1sxXSAvLyA9PiBjb21tZW50c0pTT05cblx0XG5cdCAgICByZXR1cm4gdmFsdWVzO1xuXHQgIH0pO1xuXHQgIGBgYFxuXHRcblx0ICBAY2xhc3MgUHJvbWlzZVxuXHQgIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyXG5cdCAgVXNlZnVsIGZvciB0b29saW5nLlxuXHQgIEBjb25zdHJ1Y3RvclxuXHQqL1xuXHRmdW5jdGlvbiBQcm9taXNlKHJlc29sdmVyKSB7XG5cdCAgdGhpc1tQUk9NSVNFX0lEXSA9IG5leHRJZCgpO1xuXHQgIHRoaXMuX3Jlc3VsdCA9IHRoaXMuX3N0YXRlID0gdW5kZWZpbmVkO1xuXHQgIHRoaXMuX3N1YnNjcmliZXJzID0gW107XG5cdFxuXHQgIGlmIChub29wICE9PSByZXNvbHZlcikge1xuXHQgICAgdHlwZW9mIHJlc29sdmVyICE9PSAnZnVuY3Rpb24nICYmIG5lZWRzUmVzb2x2ZXIoKTtcblx0ICAgIHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlID8gaW5pdGlhbGl6ZVByb21pc2UodGhpcywgcmVzb2x2ZXIpIDogbmVlZHNOZXcoKTtcblx0ICB9XG5cdH1cblx0XG5cdFByb21pc2UuYWxsID0gYWxsO1xuXHRQcm9taXNlLnJhY2UgPSByYWNlO1xuXHRQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuXHRQcm9taXNlLnJlamVjdCA9IHJlamVjdDtcblx0UHJvbWlzZS5fc2V0U2NoZWR1bGVyID0gc2V0U2NoZWR1bGVyO1xuXHRQcm9taXNlLl9zZXRBc2FwID0gc2V0QXNhcDtcblx0UHJvbWlzZS5fYXNhcCA9IGFzYXA7XG5cdFxuXHRQcm9taXNlLnByb3RvdHlwZSA9IHtcblx0ICBjb25zdHJ1Y3RvcjogUHJvbWlzZSxcblx0XG5cdCAgLyoqXG5cdCAgICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcblx0ICAgIHdoaWNoIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlXG5cdCAgICByZWFzb24gd2h5IHRoZSBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQuXG5cdCAgXG5cdCAgICBgYGBqc1xuXHQgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuXHQgICAgICAvLyB1c2VyIGlzIGF2YWlsYWJsZVxuXHQgICAgfSwgZnVuY3Rpb24ocmVhc29uKXtcblx0ICAgICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcblx0ICAgIH0pO1xuXHQgICAgYGBgXG5cdCAgXG5cdCAgICBDaGFpbmluZ1xuXHQgICAgLS0tLS0tLS1cblx0ICBcblx0ICAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG5cdCAgICBwcm9taXNlIGlzIHJlc29sdmVkIHdpdGggdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZmlyc3QgcHJvbWlzZSdzIGZ1bGZpbGxtZW50XG5cdCAgICBvciByZWplY3Rpb24gaGFuZGxlciwgb3IgcmVqZWN0ZWQgaWYgdGhlIGhhbmRsZXIgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cblx0ICBcblx0ICAgIGBgYGpzXG5cdCAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0ICAgICAgcmV0dXJuIHVzZXIubmFtZTtcblx0ICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0ICAgICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuXHQgICAgfSkudGhlbihmdW5jdGlvbiAodXNlck5hbWUpIHtcblx0ICAgICAgLy8gSWYgYGZpbmRVc2VyYCBmdWxmaWxsZWQsIGB1c2VyTmFtZWAgd2lsbCBiZSB0aGUgdXNlcidzIG5hbWUsIG90aGVyd2lzZSBpdFxuXHQgICAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2Bcblx0ICAgIH0pO1xuXHQgIFxuXHQgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cdCAgICAgIHRocm93IG5ldyBFcnJvcignRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknKTtcblx0ICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdgZmluZFVzZXJgIHJlamVjdGVkIGFuZCB3ZSdyZSB1bmhhcHB5Jyk7XG5cdCAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAvLyBuZXZlciByZWFjaGVkXG5cdCAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgIC8vIGlmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgcmVhc29uYCB3aWxsIGJlICdGb3VuZCB1c2VyLCBidXQgc3RpbGwgdW5oYXBweScuXG5cdCAgICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuXHQgICAgfSk7XG5cdCAgICBgYGBcblx0ICAgIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuXHQgIFxuXHQgICAgYGBganNcblx0ICAgIGZpbmRVc2VyKCkudGhlbihmdW5jdGlvbiAodXNlcikge1xuXHQgICAgICB0aHJvdyBuZXcgUGVkYWdvZ2ljYWxFeGNlcHRpb24oJ1Vwc3RyZWFtIGVycm9yJyk7XG5cdCAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAvLyBuZXZlciByZWFjaGVkXG5cdCAgICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICAvLyBuZXZlciByZWFjaGVkXG5cdCAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG5cdCAgICAgIC8vIFRoZSBgUGVkZ2Fnb2NpYWxFeGNlcHRpb25gIGlzIHByb3BhZ2F0ZWQgYWxsIHRoZSB3YXkgZG93biB0byBoZXJlXG5cdCAgICB9KTtcblx0ICAgIGBgYFxuXHQgIFxuXHQgICAgQXNzaW1pbGF0aW9uXG5cdCAgICAtLS0tLS0tLS0tLS1cblx0ICBcblx0ICAgIFNvbWV0aW1lcyB0aGUgdmFsdWUgeW91IHdhbnQgdG8gcHJvcGFnYXRlIHRvIGEgZG93bnN0cmVhbSBwcm9taXNlIGNhbiBvbmx5IGJlXG5cdCAgICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG5cdCAgICBmdWxmaWxsbWVudCBvciByZWplY3Rpb24gaGFuZGxlci4gVGhlIGRvd25zdHJlYW0gcHJvbWlzZSB3aWxsIHRoZW4gYmUgcGVuZGluZ1xuXHQgICAgdW50aWwgdGhlIHJldHVybmVkIHByb21pc2UgaXMgc2V0dGxlZC4gVGhpcyBpcyBjYWxsZWQgKmFzc2ltaWxhdGlvbiouXG5cdCAgXG5cdCAgICBgYGBqc1xuXHQgICAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG5cdCAgICAgIHJldHVybiBmaW5kQ29tbWVudHNCeUF1dGhvcih1c2VyKTtcblx0ICAgIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG5cdCAgICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcblx0ICAgIH0pO1xuXHQgICAgYGBgXG5cdCAgXG5cdCAgICBJZiB0aGUgYXNzaW1saWF0ZWQgcHJvbWlzZSByZWplY3RzLCB0aGVuIHRoZSBkb3duc3RyZWFtIHByb21pc2Ugd2lsbCBhbHNvIHJlamVjdC5cblx0ICBcblx0ICAgIGBgYGpzXG5cdCAgICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcblx0ICAgICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuXHQgICAgfSkudGhlbihmdW5jdGlvbiAoY29tbWVudHMpIHtcblx0ICAgICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuXHQgICAgfSwgZnVuY3Rpb24gKHJlYXNvbikge1xuXHQgICAgICAvLyBJZiBgZmluZENvbW1lbnRzQnlBdXRob3JgIHJlamVjdHMsIHdlJ2xsIGhhdmUgdGhlIHJlYXNvbiBoZXJlXG5cdCAgICB9KTtcblx0ICAgIGBgYFxuXHQgIFxuXHQgICAgU2ltcGxlIEV4YW1wbGVcblx0ICAgIC0tLS0tLS0tLS0tLS0tXG5cdCAgXG5cdCAgICBTeW5jaHJvbm91cyBFeGFtcGxlXG5cdCAgXG5cdCAgICBgYGBqYXZhc2NyaXB0XG5cdCAgICBsZXQgcmVzdWx0O1xuXHQgIFxuXHQgICAgdHJ5IHtcblx0ICAgICAgcmVzdWx0ID0gZmluZFJlc3VsdCgpO1xuXHQgICAgICAvLyBzdWNjZXNzXG5cdCAgICB9IGNhdGNoKHJlYXNvbikge1xuXHQgICAgICAvLyBmYWlsdXJlXG5cdCAgICB9XG5cdCAgICBgYGBcblx0ICBcblx0ICAgIEVycmJhY2sgRXhhbXBsZVxuXHQgIFxuXHQgICAgYGBganNcblx0ICAgIGZpbmRSZXN1bHQoZnVuY3Rpb24ocmVzdWx0LCBlcnIpe1xuXHQgICAgICBpZiAoZXJyKSB7XG5cdCAgICAgICAgLy8gZmFpbHVyZVxuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIC8vIHN1Y2Nlc3Ncblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBgYGBcblx0ICBcblx0ICAgIFByb21pc2UgRXhhbXBsZTtcblx0ICBcblx0ICAgIGBgYGphdmFzY3JpcHRcblx0ICAgIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG5cdCAgICAgIC8vIHN1Y2Nlc3Ncblx0ICAgIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG5cdCAgICAgIC8vIGZhaWx1cmVcblx0ICAgIH0pO1xuXHQgICAgYGBgXG5cdCAgXG5cdCAgICBBZHZhbmNlZCBFeGFtcGxlXG5cdCAgICAtLS0tLS0tLS0tLS0tLVxuXHQgIFxuXHQgICAgU3luY2hyb25vdXMgRXhhbXBsZVxuXHQgIFxuXHQgICAgYGBgamF2YXNjcmlwdFxuXHQgICAgbGV0IGF1dGhvciwgYm9va3M7XG5cdCAgXG5cdCAgICB0cnkge1xuXHQgICAgICBhdXRob3IgPSBmaW5kQXV0aG9yKCk7XG5cdCAgICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG5cdCAgICAgIC8vIHN1Y2Nlc3Ncblx0ICAgIH0gY2F0Y2gocmVhc29uKSB7XG5cdCAgICAgIC8vIGZhaWx1cmVcblx0ICAgIH1cblx0ICAgIGBgYFxuXHQgIFxuXHQgICAgRXJyYmFjayBFeGFtcGxlXG5cdCAgXG5cdCAgICBgYGBqc1xuXHQgIFxuXHQgICAgZnVuY3Rpb24gZm91bmRCb29rcyhib29rcykge1xuXHQgIFxuXHQgICAgfVxuXHQgIFxuXHQgICAgZnVuY3Rpb24gZmFpbHVyZShyZWFzb24pIHtcblx0ICBcblx0ICAgIH1cblx0ICBcblx0ICAgIGZpbmRBdXRob3IoZnVuY3Rpb24oYXV0aG9yLCBlcnIpe1xuXHQgICAgICBpZiAoZXJyKSB7XG5cdCAgICAgICAgZmFpbHVyZShlcnIpO1xuXHQgICAgICAgIC8vIGZhaWx1cmVcblx0ICAgICAgfSBlbHNlIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgZmluZEJvb29rc0J5QXV0aG9yKGF1dGhvciwgZnVuY3Rpb24oYm9va3MsIGVycikge1xuXHQgICAgICAgICAgICBpZiAoZXJyKSB7XG5cdCAgICAgICAgICAgICAgZmFpbHVyZShlcnIpO1xuXHQgICAgICAgICAgICB9IGVsc2Uge1xuXHQgICAgICAgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgICAgICBmb3VuZEJvb2tzKGJvb2tzKTtcblx0ICAgICAgICAgICAgICB9IGNhdGNoKHJlYXNvbikge1xuXHQgICAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuXHQgICAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfSk7XG5cdCAgICAgICAgfSBjYXRjaChlcnJvcikge1xuXHQgICAgICAgICAgZmFpbHVyZShlcnIpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICAvLyBzdWNjZXNzXG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgICAgYGBgXG5cdCAgXG5cdCAgICBQcm9taXNlIEV4YW1wbGU7XG5cdCAgXG5cdCAgICBgYGBqYXZhc2NyaXB0XG5cdCAgICBmaW5kQXV0aG9yKCkuXG5cdCAgICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuXHQgICAgICB0aGVuKGZ1bmN0aW9uKGJvb2tzKXtcblx0ICAgICAgICAvLyBmb3VuZCBib29rc1xuXHQgICAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcblx0ICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmdcblx0ICAgIH0pO1xuXHQgICAgYGBgXG5cdCAgXG5cdCAgICBAbWV0aG9kIHRoZW5cblx0ICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uRnVsZmlsbGVkXG5cdCAgICBAcGFyYW0ge0Z1bmN0aW9ufSBvblJlamVjdGVkXG5cdCAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgICBAcmV0dXJuIHtQcm9taXNlfVxuXHQgICovXG5cdCAgdGhlbjogdGhlbixcblx0XG5cdCAgLyoqXG5cdCAgICBgY2F0Y2hgIGlzIHNpbXBseSBzdWdhciBmb3IgYHRoZW4odW5kZWZpbmVkLCBvblJlamVjdGlvbilgIHdoaWNoIG1ha2VzIGl0IHRoZSBzYW1lXG5cdCAgICBhcyB0aGUgY2F0Y2ggYmxvY2sgb2YgYSB0cnkvY2F0Y2ggc3RhdGVtZW50LlxuXHQgIFxuXHQgICAgYGBganNcblx0ICAgIGZ1bmN0aW9uIGZpbmRBdXRob3IoKXtcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZG4ndCBmaW5kIHRoYXQgYXV0aG9yJyk7XG5cdCAgICB9XG5cdCAgXG5cdCAgICAvLyBzeW5jaHJvbm91c1xuXHQgICAgdHJ5IHtcblx0ICAgICAgZmluZEF1dGhvcigpO1xuXHQgICAgfSBjYXRjaChyZWFzb24pIHtcblx0ICAgICAgLy8gc29tZXRoaW5nIHdlbnQgd3Jvbmdcblx0ICAgIH1cblx0ICBcblx0ICAgIC8vIGFzeW5jIHdpdGggcHJvbWlzZXNcblx0ICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuXHQgICAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuXHQgICAgfSk7XG5cdCAgICBgYGBcblx0ICBcblx0ICAgIEBtZXRob2QgY2F0Y2hcblx0ICAgIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG5cdCAgICBVc2VmdWwgZm9yIHRvb2xpbmcuXG5cdCAgICBAcmV0dXJuIHtQcm9taXNlfVxuXHQgICovXG5cdCAgJ2NhdGNoJzogZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG5cdCAgICByZXR1cm4gdGhpcy50aGVuKG51bGwsIG9uUmVqZWN0aW9uKTtcblx0ICB9XG5cdH07XG5cdFxuXHRmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcblx0ICAgIHZhciBsb2NhbCA9IHVuZGVmaW5lZDtcblx0XG5cdCAgICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICBsb2NhbCA9IGdsb2JhbDtcblx0ICAgIH0gZWxzZSBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG5cdCAgICAgICAgbG9jYWwgPSBzZWxmO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBsb2NhbCA9IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdCAgICAgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3BvbHlmaWxsIGZhaWxlZCBiZWNhdXNlIGdsb2JhbCBvYmplY3QgaXMgdW5hdmFpbGFibGUgaW4gdGhpcyBlbnZpcm9ubWVudCcpO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICB2YXIgUCA9IGxvY2FsLlByb21pc2U7XG5cdFxuXHQgICAgaWYgKFApIHtcblx0ICAgICAgICB2YXIgcHJvbWlzZVRvU3RyaW5nID0gbnVsbDtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICBwcm9taXNlVG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUC5yZXNvbHZlKCkpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuXHQgICAgICAgIH1cblx0XG5cdCAgICAgICAgaWYgKHByb21pc2VUb1N0cmluZyA9PT0gJ1tvYmplY3QgUHJvbWlzZV0nICYmICFQLmNhc3QpIHtcblx0ICAgICAgICAgICAgcmV0dXJuO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBsb2NhbC5Qcm9taXNlID0gUHJvbWlzZTtcblx0fVxuXHRcblx0cG9seWZpbGwoKTtcblx0Ly8gU3RyYW5nZSBjb21wYXQuLlxuXHRQcm9taXNlLnBvbHlmaWxsID0gcG9seWZpbGw7XG5cdFByb21pc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cdFxuXHRyZXR1cm4gUHJvbWlzZTtcblx0XG5cdH0pKSk7XG5cdC8vIyBzb3VyY2VNYXBwaW5nVVJMPWVzNi1wcm9taXNlLm1hcFxuXHQvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyg3KSwgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0sXG4vKiA3ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHQvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcblx0dmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXHRcblx0Ly8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG5cdC8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuXHQvLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG5cdC8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cdFxuXHR2YXIgY2FjaGVkU2V0VGltZW91dDtcblx0dmFyIGNhY2hlZENsZWFyVGltZW91dDtcblx0XG5cdGZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcblx0fVxuXHRmdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcblx0ICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG5cdH1cblx0KGZ1bmN0aW9uICgpIHtcblx0ICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG5cdCAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuXHQgICAgICAgIH1cblx0ICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcblx0ICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuXHQgICAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG5cdCAgICAgICAgfVxuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG5cdCAgICB9XG5cdH0gKCkpXG5cdGZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG5cdCAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuXHQgICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuXHQgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9XG5cdCAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuXHQgICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG5cdCAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG5cdCAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcblx0ICAgIH1cblx0ICAgIHRyeSB7XG5cdCAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuXHQgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG5cdCAgICB9IGNhdGNoKGUpe1xuXHQgICAgICAgIHRyeSB7XG5cdCAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG5cdCAgICAgICAgfSBjYXRjaChlKXtcblx0ICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3Jcblx0ICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0XG5cdFxuXHR9XG5cdGZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcblx0ICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuXHQgICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuXHQgICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcblx0ICAgIH1cblx0ICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcblx0ICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuXHQgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcblx0ICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9XG5cdCAgICB0cnkge1xuXHQgICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3Ncblx0ICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG5cdCAgICB9IGNhdGNoIChlKXtcblx0ICAgICAgICB0cnkge1xuXHQgICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG5cdCAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuXHQgICAgICAgIH0gY2F0Y2ggKGUpe1xuXHQgICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cblx0ICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuXHQgICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcblx0ICAgICAgICB9XG5cdCAgICB9XG5cdFxuXHRcblx0XG5cdH1cblx0dmFyIHF1ZXVlID0gW107XG5cdHZhciBkcmFpbmluZyA9IGZhbHNlO1xuXHR2YXIgY3VycmVudFF1ZXVlO1xuXHR2YXIgcXVldWVJbmRleCA9IC0xO1xuXHRcblx0ZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuXHQgICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG5cdCAgICAgICAgcmV0dXJuO1xuXHQgICAgfVxuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG5cdCAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuXHQgICAgfVxuXHQgICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuXHQgICAgICAgIGRyYWluUXVldWUoKTtcblx0ICAgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcblx0ICAgIGlmIChkcmFpbmluZykge1xuXHQgICAgICAgIHJldHVybjtcblx0ICAgIH1cblx0ICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuXHQgICAgZHJhaW5pbmcgPSB0cnVlO1xuXHRcblx0ICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB3aGlsZShsZW4pIHtcblx0ICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcblx0ICAgICAgICBxdWV1ZSA9IFtdO1xuXHQgICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcblx0ICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuXHQgICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcblx0ICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG5cdCAgICB9XG5cdCAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuXHQgICAgZHJhaW5pbmcgPSBmYWxzZTtcblx0ICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0fVxuXHRcblx0cHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcblx0ICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcblx0ICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuXHQgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuXHQgICAgICAgIH1cblx0ICAgIH1cblx0ICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG5cdCAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuXHQgICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG5cdCAgICB9XG5cdH07XG5cdFxuXHQvLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5cdGZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuXHQgICAgdGhpcy5mdW4gPSBmdW47XG5cdCAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG5cdH1cblx0SXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuXHQgICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG5cdH07XG5cdHByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5cdHByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5cdHByb2Nlc3MuZW52ID0ge307XG5cdHByb2Nlc3MuYXJndiA9IFtdO1xuXHRwcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcblx0cHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXHRcblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cdFxuXHRwcm9jZXNzLm9uID0gbm9vcDtcblx0cHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3Mub25jZSA9IG5vb3A7XG5cdHByb2Nlc3Mub2ZmID0gbm9vcDtcblx0cHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5cdHByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcblx0cHJvY2Vzcy5lbWl0ID0gbm9vcDtcblx0XG5cdHByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG5cdH07XG5cdFxuXHRwcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xuXHRwcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuXHQgICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcblx0fTtcblx0cHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG4vKioqLyB9LFxuLyogOCAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblx0LyogKGlnbm9yZWQpICovXG5cbi8qKiovIH0sXG4vKiA5ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiEgQHByZXNlcnZlXG5cdCAqIEhqc29uIHYyLjMuMVxuXHQgKiBodHRwOi8vaGpzb24ub3JnXG5cdCAqXG5cdCAqIENvcHlyaWdodCAyMDE0LTIwMTYgQ2hyaXN0aWFuIFphbmdsLCBNSVQgbGljZW5zZVxuXHQgKiBEZXRhaWxzIGFuZCBkb2N1bWVudGF0aW9uOlxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vaGpzb24vaGpzb24tanNcblx0ICpcblx0ICogVGhpcyBjb2RlIGlzIGJhc2VkIG9uIHRoZSB0aGUgSlNPTiB2ZXJzaW9uIGJ5IERvdWdsYXMgQ3JvY2tmb3JkOlxuXHQgKiBodHRwczovL2dpdGh1Yi5jb20vZG91Z2xhc2Nyb2NrZm9yZC9KU09OLWpzIChqc29uX3BhcnNlLmpzLCBqc29uMi5qcylcblx0ICovXG5cdFxuXHQvKlxuXHRcblx0ICBUaGlzIGZpbGUgY3JlYXRlcyBhIEhqc29uIG9iamVjdDpcblx0XG5cdFxuXHQgICAgSGpzb24ucGFyc2UodGV4dCwgb3B0aW9ucylcblx0XG5cdCAgICAgIG9wdGlvbnMge1xuXHQgICAgICAgIGtlZXBXc2MgICAgIGJvb2xlYW4sIGtlZXAgd2hpdGUgc3BhY2UgYW5kIGNvbW1lbnRzLiBUaGlzIGlzIHVzZWZ1bFxuXHQgICAgICAgICAgICAgICAgICAgIGlmIHlvdSB3YW50IHRvIGVkaXQgYW4gaGpzb24gZmlsZSBhbmQgc2F2ZSBpdCB3aGlsZVxuXHQgICAgICAgICAgICAgICAgICAgIHByZXNlcnZpbmcgY29tbWVudHMgKGRlZmF1bHQgZmFsc2UpXG5cdFxuXHQgICAgICAgIGRzZiAgICAgICAgIGFycmF5IG9mIERTRiAoc2VlIEhqc29uLmRzZilcblx0ICAgICAgfVxuXHRcblx0ICAgICAgVGhpcyBtZXRob2QgcGFyc2VzIEhqc29uIHRleHQgdG8gcHJvZHVjZSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cdCAgICAgIEl0IGNhbiB0aHJvdyBhIFN5bnRheEVycm9yIGV4Y2VwdGlvbi5cblx0XG5cdFxuXHQgICAgSGpzb24uc3RyaW5naWZ5KHZhbHVlLCBvcHRpb25zKVxuXHRcblx0ICAgICAgdmFsdWUgICAgICAgICBhbnkgSmF2YVNjcmlwdCB2YWx1ZSwgdXN1YWxseSBhbiBvYmplY3Qgb3IgYXJyYXkuXG5cdFxuXHQgICAgICBvcHRpb25zIHsgICAgIGFsbCBvcHRpb25zIGFyZVxuXHRcblx0ICAgICAgICBrZWVwV3NjICAgICBib29sZWFuLCBrZWVwIHdoaXRlIHNwYWNlLiBTZWUgcGFyc2UuXG5cdFxuXHQgICAgICAgIGJyYWNlc1NhbWVMaW5lXG5cdCAgICAgICAgICAgICAgICAgICAgYm9vbGVhbiwgbWFrZXMgYnJhY2VzIGFwcGVhciBvbiB0aGUgc2FtZSBsaW5lIGFzIHRoZSBrZXlcblx0ICAgICAgICAgICAgICAgICAgICBuYW1lLiBEZWZhdWx0IGZhbHNlLlxuXHRcblx0ICAgICAgICBlbWl0Um9vdEJyYWNlc1xuXHQgICAgICAgICAgICAgICAgICAgIG9ic29sZXRlOiB3aWxsIGFsd2F5cyBlbWl0IGJyYWNlc1xuXHRcblx0ICAgICAgICBxdW90ZXMgICAgICBzdHJpbmcsIGNvbnRyb2xzIGhvdyBzdHJpbmdzIGFyZSBkaXNwbGF5ZWQuXG5cdCAgICAgICAgICAgICAgICAgICAgXCJtaW5cIiAgICAgLSBubyBxdW90ZXMgd2hlbmV2ZXIgcG9zc2libGUgKGRlZmF1bHQpXG5cdCAgICAgICAgICAgICAgICAgICAgXCJhbHdheXNcIiAgLSBhbHdheXMgdXNlIHF1b3Rlc1xuXHRcblx0ICAgICAgICBzcGFjZSAgICAgICBzcGVjaWZpZXMgdGhlIGluZGVudGF0aW9uIG9mIG5lc3RlZCBzdHJ1Y3R1cmVzLiBJZiBpdCBpc1xuXHQgICAgICAgICAgICAgICAgICAgIGEgbnVtYmVyLCBpdCB3aWxsIHNwZWNpZnkgdGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50XG5cdCAgICAgICAgICAgICAgICAgICAgYXQgZWFjaCBsZXZlbC4gSWYgaXQgaXMgYSBzdHJpbmcgKHN1Y2ggYXMgJ1xcdCcgb3IgJyAgJyksXG5cdCAgICAgICAgICAgICAgICAgICAgaXQgY29udGFpbnMgdGhlIGNoYXJhY3RlcnMgdXNlZCB0byBpbmRlbnQgYXQgZWFjaCBsZXZlbC5cblx0XG5cdCAgICAgICAgZW9sICAgICAgICAgc3BlY2lmaWVzIHRoZSBFT0wgc2VxdWVuY2UgKGRlZmF1bHQgaXMgc2V0IGJ5XG5cdCAgICAgICAgICAgICAgICAgICAgSGpzb24uc2V0RW5kT2ZMaW5lKCkpXG5cdFxuXHQgICAgICAgIGNvbG9ycyAgICAgIGJvb2xlYW4sIG91dHB1dCBhc2NpaSBjb2xvciBjb2Rlc1xuXHRcblx0ICAgICAgICBkc2YgICAgICAgICBhcnJheSBvZiBEU0YgKHNlZSBIanNvbi5kc2YpXG5cdCAgICAgIH1cblx0XG5cdCAgICAgIFRoaXMgbWV0aG9kIHByb2R1Y2VzIEhqc29uIHRleHQgZnJvbSBhIEphdmFTY3JpcHQgdmFsdWUuXG5cdFxuXHQgICAgICBWYWx1ZXMgdGhhdCBkbyBub3QgaGF2ZSBKU09OIHJlcHJlc2VudGF0aW9ucywgc3VjaCBhcyB1bmRlZmluZWQgb3Jcblx0ICAgICAgZnVuY3Rpb25zLCB3aWxsIG5vdCBiZSBzZXJpYWxpemVkLiBTdWNoIHZhbHVlcyBpbiBvYmplY3RzIHdpbGwgYmVcblx0ICAgICAgZHJvcHBlZDsgaW4gYXJyYXlzIHRoZXkgd2lsbCBiZSByZXBsYWNlZCB3aXRoIG51bGwuXG5cdCAgICAgIHN0cmluZ2lmeSh1bmRlZmluZWQpIHJldHVybnMgdW5kZWZpbmVkLlxuXHRcblx0XG5cdCAgICBIanNvbi5lbmRPZkxpbmUoKVxuXHQgICAgSGpzb24uc2V0RW5kT2ZMaW5lKGVvbClcblx0XG5cdCAgICAgIEdldHMgb3Igc2V0cyB0aGUgc3RyaW5naWZ5IEVPTCBzZXF1ZW5jZSAoJ1xcbicgb3IgJ1xcclxcbicpLlxuXHQgICAgICBXaGVuIHJ1bm5pbmcgd2l0aCBub2RlLmpzIHRoaXMgZGVmYXVsdHMgdG8gb3MuRU9MLlxuXHRcblx0XG5cdCAgICBIanNvbi5ydCB7IHBhcnNlLCBzdHJpbmdpZnkgfVxuXHRcblx0ICAgICAgVGhpcyBpcyBhIHNob3J0Y3V0IHRvIHJvdW5kdHJpcCB5b3VyIGNvbW1lbnRzIHdoZW4gcmVhZGluZyBhbmQgdXBkYXRpbmdcblx0ICAgICAgYSBjb25maWcgZmlsZS4gSXQgaXMgdGhlIHNhbWUgYXMgc3BlY2lmeWluZyB0aGUga2VlcFdzYyBvcHRpb24gZm9yIHRoZVxuXHQgICAgICBwYXJzZSBhbmQgc3RyaW5naWZ5IGZ1bmN0aW9ucy5cblx0XG5cdFxuXHQgICAgSGpzb24udmVyc2lvblxuXHRcblx0ICAgICAgVGhlIHZlcnNpb24gb2YgdGhpcyBsaWJyYXJ5LlxuXHRcblx0XG5cdCAgICBIanNvbi5kc2Zcblx0XG5cdCAgICAgIERvbWFpbiBzcGVjaWZpYyBmb3JtYXRzIGFyZSBleHRlbnNpb25zIHRvIHRoZSBIanNvbiBzeW50YXggKHNlZVxuXHQgICAgICBoanNvbi5vcmcpLiBUaGVzZSBmb3JtYXRzIHdpbGwgYmUgcGFyc2VkIGFuZCBtYWRlIGF2YWlsYWJsZSB0b1xuXHQgICAgICB0aGUgYXBwbGljYXRpb24gaW4gcGxhY2Ugb2Ygc3RyaW5ncyAoZS5nLiBlbmFibGUgbWF0aCB0byBhbGxvd1xuXHQgICAgICBOYU4gdmFsdWVzKS5cblx0XG5cdCAgICAgIEhqc29uLmRzZiBvbnRhaW5zIHN0YW5kYXJkIERTRnMgdGhhdCBjYW4gYmUgcGFzc2VkIHRvIHBhcnNlXG5cdCAgICAgIGFuZCBzdHJpbmdpZnkuXG5cdFxuXHRcblx0ICAgIEhqc29uLmRzZi5tYXRoKClcblx0XG5cdCAgICAgIEVuYWJsZXMgc3VwcG9ydCBmb3IgSW5mL2luZiwgLUluZi8taW5mLCBOYW4vbmFOIGFuZCAtMC5cblx0ICAgICAgV2lsbCBvdXRwdXQgYXMgSW5mLCAtSW5mLCBOYU4gYW5kIC0wLlxuXHRcblx0XG5cdCAgICBIanNvbi5kc2YuaGV4KG9wdGlvbnMpXG5cdFxuXHQgICAgICBQYXJzZSBoZXhhZGVjaW1hbCBudW1iZXJzIHByZWZpeGVkIHdpdGggMHguXG5cdCAgICAgIHNldCBvcHRpb25zLm91dCA9IHRydWUgdG8gc3RyaW5naWZ5IF9hbGxfIGludGVnZXJzIGFzIGhleC5cblx0XG5cdFxuXHQgICAgSGpzb24uZHNmLmRhdGUob3B0aW9ucylcblx0XG5cdCAgICAgIHN1cHBvcnQgSVNPIGRhdGVzXG5cdFxuXHRcblx0ICBUaGlzIGlzIGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uLiBZb3UgYXJlIGZyZWUgdG8gY29weSwgbW9kaWZ5LCBvclxuXHQgIHJlZGlzdHJpYnV0ZS5cblx0XG5cdCovXG5cdFxuXHQvKmpzbGludCBub2RlOiB0cnVlICovXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0dmFyIGNvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHR2YXIgdmVyc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xuXHR2YXIgcGFyc2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblx0dmFyIHN0cmluZ2lmeSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xuXHR2YXIgY29tbWVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KTtcblx0dmFyIGRzZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xuXHRcblx0bW9kdWxlLmV4cG9ydHM9e1xuXHRcblx0ICBwYXJzZTogcGFyc2UsXG5cdCAgc3RyaW5naWZ5OiBzdHJpbmdpZnksXG5cdFxuXHQgIGVuZE9mTGluZTogZnVuY3Rpb24oKSB7IHJldHVybiBjb21tb24uRU9MOyB9LFxuXHQgIHNldEVuZE9mTGluZTogZnVuY3Rpb24oZW9sKSB7XG5cdCAgICBpZiAoZW9sID09PSAnXFxuJyB8fCBlb2wgPT09ICdcXHJcXG4nKSBjb21tb24uRU9MID0gZW9sO1xuXHQgIH0sXG5cdFxuXHQgIHZlcnNpb246IHZlcnNpb24sXG5cdFxuXHQgIC8vIHJvdW5kIHRyaXAgc2hvcnRjdXRcblx0ICBydDoge1xuXHQgICAgcGFyc2U6IGZ1bmN0aW9uKHRleHQsIG9wdGlvbnMpIHtcblx0ICAgICAgKG9wdGlvbnM9b3B0aW9uc3x8e30pLmtlZXBXc2M9dHJ1ZTtcblx0ICAgICAgcmV0dXJuIHBhcnNlKHRleHQsIG9wdGlvbnMpO1xuXHQgICAgfSxcblx0ICAgIHN0cmluZ2lmeTogZnVuY3Rpb24odmFsdWUsIG9wdGlvbnMpIHtcblx0ICAgICAgKG9wdGlvbnM9b3B0aW9uc3x8e30pLmtlZXBXc2M9dHJ1ZTtcblx0ICAgICAgcmV0dXJuIHN0cmluZ2lmeSh2YWx1ZSwgb3B0aW9ucyk7XG5cdCAgICB9LFxuXHQgIH0sXG5cdFxuXHQgIGNvbW1lbnRzOiBjb21tZW50cyxcblx0XG5cdCAgZHNmOiBkc2Yuc3RkLFxuXHRcblx0fTtcblxuXG4vKioqLyB9LFxuLyogMTAgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIEhqc29uIGh0dHA6Ly9oanNvbi5vcmcgKi9cblx0LyoganNsaW50IG5vZGU6IHRydWUgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHR2YXIgb3M9X193ZWJwYWNrX3JlcXVpcmVfXygxMSk7IC8vIHdpbGwgYmUge30gd2hlbiB1c2VkIGluIGEgYnJvd3NlclxuXHRcblx0ZnVuY3Rpb24gdHJ5UGFyc2VOdW1iZXIodGV4dCwgc3RvcEF0TmV4dCkge1xuXHRcblx0ICAvLyB0cnkgdG8gcGFyc2UgYSBudW1iZXJcblx0XG5cdCAgdmFyIG51bWJlciwgc3RyaW5nID0gJycsIGxlYWRpbmdaZXJvcyA9IDAsIHRlc3RMZWFkaW5nID0gdHJ1ZTtcblx0ICB2YXIgYXQgPSAwO1xuXHQgIHZhciBjaDtcblx0ICBmdW5jdGlvbiBuZXh0KCkge1xuXHQgICAgY2ggPSB0ZXh0LmNoYXJBdChhdCk7XG5cdCAgICBhdCsrO1xuXHQgICAgcmV0dXJuIGNoO1xuXHQgIH1cblx0XG5cdCAgbmV4dCgpO1xuXHQgIGlmIChjaCA9PT0gJy0nKSB7XG5cdCAgICBzdHJpbmcgPSAnLSc7XG5cdCAgICBuZXh0KCk7XG5cdCAgfVxuXHQgIHdoaWxlIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSB7XG5cdCAgICBpZiAodGVzdExlYWRpbmcpIHtcblx0ICAgICAgaWYgKGNoID09ICcwJykgbGVhZGluZ1plcm9zKys7XG5cdCAgICAgIGVsc2UgdGVzdExlYWRpbmcgPSBmYWxzZTtcblx0ICAgIH1cblx0ICAgIHN0cmluZyArPSBjaDtcblx0ICAgIG5leHQoKTtcblx0ICB9XG5cdCAgaWYgKHRlc3RMZWFkaW5nKSBsZWFkaW5nWmVyb3MtLTsgLy8gc2luZ2xlIDAgaXMgYWxsb3dlZFxuXHQgIGlmIChjaCA9PT0gJy4nKSB7XG5cdCAgICBzdHJpbmcgKz0gJy4nO1xuXHQgICAgd2hpbGUgKG5leHQoKSAmJiBjaCA+PSAnMCcgJiYgY2ggPD0gJzknKVxuXHQgICAgICBzdHJpbmcgKz0gY2g7XG5cdCAgfVxuXHQgIGlmIChjaCA9PT0gJ2UnIHx8IGNoID09PSAnRScpIHtcblx0ICAgIHN0cmluZyArPSBjaDtcblx0ICAgIG5leHQoKTtcblx0ICAgIGlmIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycpIHtcblx0ICAgICAgc3RyaW5nICs9IGNoO1xuXHQgICAgICBuZXh0KCk7XG5cdCAgICB9XG5cdCAgICB3aGlsZSAoY2ggPj0gJzAnICYmIGNoIDw9ICc5Jykge1xuXHQgICAgICBzdHJpbmcgKz0gY2g7XG5cdCAgICAgIG5leHQoKTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIC8vIHNraXAgd2hpdGUvdG8gKG5ld2xpbmUpXG5cdCAgd2hpbGUgKGNoICYmIGNoIDw9ICcgJykgbmV4dCgpO1xuXHRcblx0ICBpZiAoc3RvcEF0TmV4dCkge1xuXHQgICAgLy8gZW5kIHNjYW4gaWYgd2UgZmluZCBhIHB1bmN0dWF0b3IgY2hhcmFjdGVyIGxpa2UgLH1dIG9yIGEgY29tbWVudFxuXHQgICAgaWYgKGNoID09PSAnLCcgfHwgY2ggPT09ICd9JyB8fCBjaCA9PT0gJ10nIHx8XG5cdCAgICAgIGNoID09PSAnIycgfHwgY2ggPT09ICcvJyAmJiAodGV4dFthdF0gPT09ICcvJyB8fCB0ZXh0W2F0XSA9PT0gJyonKSkgY2ggPSAwO1xuXHQgIH1cblx0XG5cdCAgbnVtYmVyID0gK3N0cmluZztcblx0ICBpZiAoY2ggfHwgbGVhZGluZ1plcm9zIHx8ICFpc0Zpbml0ZShudW1iZXIpKSByZXR1cm4gdW5kZWZpbmVkO1xuXHQgIGVsc2UgcmV0dXJuIG51bWJlcjtcblx0fVxuXHRcblx0ZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh2YWx1ZSwgY29tbWVudCkge1xuXHQgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh2YWx1ZSwgXCJfX0NPTU1FTlRTX19cIiwgeyBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUgfSk7XG5cdCAgcmV0dXJuICh2YWx1ZS5fX0NPTU1FTlRTX18gPSBjb21tZW50fHx7fSk7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIHJlbW92ZUNvbW1lbnQodmFsdWUpIHtcblx0ICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmFsdWUsIFwiX19DT01NRU5UU19fXCIsIHsgdmFsdWU6IHVuZGVmaW5lZCB9KTtcblx0fVxuXHRcblx0ZnVuY3Rpb24gZ2V0Q29tbWVudCh2YWx1ZSkge1xuXHQgIHJldHVybiB2YWx1ZS5fX0NPTU1FTlRTX187XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGZvcmNlQ29tbWVudCh0ZXh0KSB7XG5cdCAgaWYgKCF0ZXh0KSByZXR1cm4gXCJcIjtcblx0ICB2YXIgYSA9IHRleHQuc3BsaXQoJ1xcbicpO1xuXHQgIHZhciBzdHIsIGksIGosIGxlbjtcblx0ICBmb3IgKGogPSAwOyBqIDwgYS5sZW5ndGg7IGorKykge1xuXHQgICAgc3RyID0gYVtqXTtcblx0ICAgIGxlbiA9IHN0ci5sZW5ndGg7XG5cdCAgICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0ICAgICAgdmFyIGMgPSBzdHJbaV07XG5cdCAgICAgIGlmIChjID09PSAnIycpIGJyZWFrO1xuXHQgICAgICBlbHNlIGlmIChjID09PSAnLycgJiYgKHN0cltpKzFdID09PSAnLycgfHwgc3RyW2krMV0gPT09ICcqJykpIHtcblx0ICAgICAgICBpZiAoc3RyW2krMV0gPT09ICcqJykgaiA9IGEubGVuZ3RoOyAvLyBhc3N1bWUgLyoqLyBjb3ZlcnMgd2hvbGUgYmxvY2ssIGJhaWwgb3V0XG5cdCAgICAgICAgYnJlYWs7XG5cdCAgICAgIH1cblx0ICAgICAgZWxzZSBpZiAoYyA+ICcgJykge1xuXHQgICAgICAgIGFbal0gPSAnIyAnICsgc3RyO1xuXHQgICAgICAgIGJyZWFrO1xuXHQgICAgICB9XG5cdCAgICB9XG5cdCAgfVxuXHQgIHJldHVybiBhLmpvaW4oJ1xcbicpO1xuXHR9XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBFT0w6IG9zLkVPTCB8fCAnXFxuJyxcblx0ICB0cnlQYXJzZU51bWJlcjogdHJ5UGFyc2VOdW1iZXIsXG5cdCAgY3JlYXRlQ29tbWVudDogY3JlYXRlQ29tbWVudCxcblx0ICByZW1vdmVDb21tZW50OiByZW1vdmVDb21tZW50LFxuXHQgIGdldENvbW1lbnQ6IGdldENvbW1lbnQsXG5cdCAgZm9yY2VDb21tZW50OiBmb3JjZUNvbW1lbnQsXG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDExICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuXHRleHBvcnRzLmVuZGlhbm5lc3MgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnTEUnIH07XG5cdFxuXHRleHBvcnRzLmhvc3RuYW1lID0gZnVuY3Rpb24gKCkge1xuXHQgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICByZXR1cm4gbG9jYXRpb24uaG9zdG5hbWVcblx0ICAgIH1cblx0ICAgIGVsc2UgcmV0dXJuICcnO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5sb2FkYXZnID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gW10gfTtcblx0XG5cdGV4cG9ydHMudXB0aW1lID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gMCB9O1xuXHRcblx0ZXhwb3J0cy5mcmVlbWVtID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG5cdH07XG5cdFxuXHRleHBvcnRzLnRvdGFsbWVtID0gZnVuY3Rpb24gKCkge1xuXHQgICAgcmV0dXJuIE51bWJlci5NQVhfVkFMVUU7XG5cdH07XG5cdFxuXHRleHBvcnRzLmNwdXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBbXSB9O1xuXHRcblx0ZXhwb3J0cy50eXBlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJ0Jyb3dzZXInIH07XG5cdFxuXHRleHBvcnRzLnJlbGVhc2UgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0ICAgICAgICByZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb247XG5cdCAgICB9XG5cdCAgICByZXR1cm4gJyc7XG5cdH07XG5cdFxuXHRleHBvcnRzLm5ldHdvcmtJbnRlcmZhY2VzXG5cdD0gZXhwb3J0cy5nZXROZXR3b3JrSW50ZXJmYWNlc1xuXHQ9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHt9IH07XG5cdFxuXHRleHBvcnRzLmFyY2ggPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnamF2YXNjcmlwdCcgfTtcblx0XG5cdGV4cG9ydHMucGxhdGZvcm0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnYnJvd3NlcicgfTtcblx0XG5cdGV4cG9ydHMudG1wZGlyID0gZXhwb3J0cy50bXBEaXIgPSBmdW5jdGlvbiAoKSB7XG5cdCAgICByZXR1cm4gJy90bXAnO1xuXHR9O1xuXHRcblx0ZXhwb3J0cy5FT0wgPSAnXFxuJztcblxuXG4vKioqLyB9LFxuLyogMTIgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5cdG1vZHVsZS5leHBvcnRzPVwiMi4zLjFcIjtcblxuXG4vKioqLyB9LFxuLyogMTMgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIEhqc29uIGh0dHA6Ly9oanNvbi5vcmcgKi9cblx0LyoganNsaW50IG5vZGU6IHRydWUgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzb3VyY2UsICRvcHQpIHtcblx0XG5cdCAgdmFyIGNvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuXHQgIHZhciBkc2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblx0XG5cdCAgdmFyIHRleHQ7XG5cdCAgdmFyIGF0OyAgIC8vIFRoZSBpbmRleCBvZiB0aGUgY3VycmVudCBjaGFyYWN0ZXJcblx0ICB2YXIgY2g7ICAgLy8gVGhlIGN1cnJlbnQgY2hhcmFjdGVyXG5cdCAgdmFyIGVzY2FwZWUgPSB7XG5cdCAgICAnXCInOiAnXCInLFxuXHQgICAgJ1xcXFwnOiAnXFxcXCcsXG5cdCAgICAnLyc6ICcvJyxcblx0ICAgIGI6ICAnXFxiJyxcblx0ICAgIGY6ICAnXFxmJyxcblx0ICAgIG46ICAnXFxuJyxcblx0ICAgIHI6ICAnXFxyJyxcblx0ICAgIHQ6ICAnXFx0J1xuXHQgIH07XG5cdFxuXHQgIHZhciBrZWVwQ29tbWVudHM7XG5cdCAgdmFyIHJ1bkRzZjsgLy8gZG9tYWluIHNwZWNpZmljIGZvcm1hdHNcblx0XG5cdCAgZnVuY3Rpb24gcmVzZXRBdCgpIHtcblx0ICAgIGF0ID0gMDtcblx0ICAgIGNoID0gJyAnO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gaXNQdW5jdHVhdG9yQ2hhcihjKSB7XG5cdCAgICByZXR1cm4gYyA9PT0gJ3snIHx8IGMgPT09ICd9JyB8fCBjID09PSAnWycgfHwgYyA9PT0gJ10nIHx8IGMgPT09ICcsJyB8fCBjID09PSAnOic7XG5cdCAgfVxuXHRcblx0ICAvLyBDYWxsIGVycm9yIHdoZW4gc29tZXRoaW5nIGlzIHdyb25nLlxuXHQgIGZ1bmN0aW9uIGVycm9yKG0pIHtcblx0ICAgIHZhciBpLCBjb2w9MCwgbGluZT0xO1xuXHQgICAgZm9yIChpID0gYXQtMTsgaSA+IDAgJiYgdGV4dFtpXSAhPT0gJ1xcbic7IGktLSwgY29sKyspIHt9XG5cdCAgICBmb3IgKDsgaSA+IDA7IGktLSkgaWYgKHRleHRbaV0gPT09ICdcXG4nKSBsaW5lKys7XG5cdCAgICB0aHJvdyBuZXcgRXJyb3IobSArIFwiIGF0IGxpbmUgXCIgKyBsaW5lICsgXCIsXCIgKyBjb2wgKyBcIiA+Pj5cIiArIHRleHQuc3Vic3RyKGF0LWNvbCwgMjApICsgXCIgLi4uXCIpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gbmV4dCgpIHtcblx0ICAgIC8vIGdldCB0aGUgbmV4dCBjaGFyYWN0ZXIuXG5cdCAgICBjaCA9IHRleHQuY2hhckF0KGF0KTtcblx0ICAgIGF0Kys7XG5cdCAgICByZXR1cm4gY2g7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBwZWVrKG9mZnMpIHtcblx0ICAgIC8vIHJhbmdlIGNoZWNrIGlzIG5vdCByZXF1aXJlZFxuXHQgICAgcmV0dXJuIHRleHQuY2hhckF0KGF0ICsgb2Zmcyk7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBzdHJpbmcoKSB7XG5cdCAgICAvLyBQYXJzZSBhIHN0cmluZyB2YWx1ZS5cblx0ICAgIHZhciBzdHJpbmcgPSAnJztcblx0XG5cdCAgICAvLyBXaGVuIHBhcnNpbmcgZm9yIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgXCIgYW5kIFxcIGNoYXJhY3RlcnMuXG5cdCAgICBpZiAoY2ggPT09ICdcIicpIHtcblx0ICAgICAgd2hpbGUgKG5leHQoKSkge1xuXHQgICAgICAgIGlmIChjaCA9PT0gJ1wiJykge1xuXHQgICAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgICAgcmV0dXJuIHN0cmluZztcblx0ICAgICAgICB9XG5cdCAgICAgICAgaWYgKGNoID09PSAnXFxcXCcpIHtcblx0ICAgICAgICAgIG5leHQoKTtcblx0ICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG5cdCAgICAgICAgICAgIHZhciB1ZmZmZiA9IDA7XG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgICAgICAgIHZhciBjID0gY2guY2hhckNvZGVBdCgwKSwgaGV4O1xuXHQgICAgICAgICAgICAgIGlmIChjaCA+PSAnMCcgJiYgY2ggPD0gJzknKSBoZXggPSBjIC0gNDg7XG5cdCAgICAgICAgICAgICAgZWxzZSBpZiAoY2ggPj0gJ2EnICYmIGNoIDw9ICdmJykgaGV4ID0gYyAtIDk3ICsgMHhhO1xuXHQgICAgICAgICAgICAgIGVsc2UgaWYgKGNoID49ICdBJyAmJiBjaCA8PSAnRicpIGhleCA9IGMgLSA2NSArIDB4YTtcblx0ICAgICAgICAgICAgICBlbHNlIGVycm9yKFwiQmFkIFxcXFx1IGNoYXIgXCIgKyBjaCk7XG5cdCAgICAgICAgICAgICAgdWZmZmYgPSB1ZmZmZiAqIDE2ICsgaGV4O1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHVmZmZmKTtcblx0ICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGVzY2FwZWVbY2hdID09PSAnc3RyaW5nJykge1xuXHQgICAgICAgICAgICBzdHJpbmcgKz0gZXNjYXBlZVtjaF07XG5cdCAgICAgICAgICB9IGVsc2UgYnJlYWs7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIHN0cmluZyArPSBjaDtcblx0ICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGVycm9yKFwiQmFkIHN0cmluZ1wiKTtcblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIG1sU3RyaW5nKCkge1xuXHQgICAgLy8gUGFyc2UgYSBtdWx0aWxpbmUgc3RyaW5nIHZhbHVlLlxuXHQgICAgdmFyIHN0cmluZyA9ICcnLCB0cmlwbGUgPSAwO1xuXHRcblx0ICAgIC8vIHdlIGFyZSBhdCAnJycgKzEgLSBnZXQgaW5kZW50XG5cdCAgICB2YXIgaW5kZW50ID0gMDtcblx0ICAgIHdoaWxlICh0cnVlKSB7XG5cdCAgICAgIHZhciBjPXBlZWsoLWluZGVudC01KTtcblx0ICAgICAgaWYgKCFjIHx8IGMgPT09ICdcXG4nKSBicmVhaztcblx0ICAgICAgaW5kZW50Kys7XG5cdCAgICB9XG5cdFxuXHQgICAgZnVuY3Rpb24gc2tpcEluZGVudCgpIHtcblx0ICAgICAgdmFyIHNraXAgPSBpbmRlbnQ7XG5cdCAgICAgIHdoaWxlIChjaCAmJiBjaCA8PSAnICcgJiYgY2ggIT09ICdcXG4nICYmIHNraXAtLSA+IDApIG5leHQoKTtcblx0ICAgIH1cblx0XG5cdCAgICAvLyBza2lwIHdoaXRlL3RvIChuZXdsaW5lKVxuXHQgICAgd2hpbGUgKGNoICYmIGNoIDw9ICcgJyAmJiBjaCAhPT0gJ1xcbicpIG5leHQoKTtcblx0ICAgIGlmIChjaCA9PT0gJ1xcbicpIHsgbmV4dCgpOyBza2lwSW5kZW50KCk7IH1cblx0XG5cdCAgICAvLyBXaGVuIHBhcnNpbmcgbXVsdGlsaW5lIHN0cmluZyB2YWx1ZXMsIHdlIG11c3QgbG9vayBmb3IgJyBjaGFyYWN0ZXJzLlxuXHQgICAgd2hpbGUgKHRydWUpIHtcblx0ICAgICAgaWYgKCFjaCkge1xuXHQgICAgICAgIGVycm9yKFwiQmFkIG11bHRpbGluZSBzdHJpbmdcIik7XG5cdCAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXCcnKSB7XG5cdCAgICAgICAgdHJpcGxlKys7XG5cdCAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgIGlmICh0cmlwbGUgPT09IDMpIHtcblx0ICAgICAgICAgIGlmIChzdHJpbmcuc2xpY2UoLTEpID09PSAnXFxuJykgc3RyaW5nPXN0cmluZy5zbGljZSgwLCAtMSk7IC8vIHJlbW92ZSBsYXN0IEVPTFxuXHQgICAgICAgICAgcmV0dXJuIHN0cmluZztcblx0ICAgICAgICB9IGVsc2UgY29udGludWU7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgd2hpbGUgKHRyaXBsZSA+IDApIHtcblx0ICAgICAgICAgIHN0cmluZyArPSAnXFwnJztcblx0ICAgICAgICAgIHRyaXBsZS0tO1xuXHQgICAgICAgIH1cblx0ICAgICAgfVxuXHQgICAgICBpZiAoY2ggPT09ICdcXG4nKSB7XG5cdCAgICAgICAgc3RyaW5nICs9ICdcXG4nO1xuXHQgICAgICAgIG5leHQoKTtcblx0ICAgICAgICBza2lwSW5kZW50KCk7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgaWYgKGNoICE9PSAnXFxyJykgc3RyaW5nICs9IGNoO1xuXHQgICAgICAgIG5leHQoKTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24ga2V5bmFtZSgpIHtcblx0ICAgIC8vIHF1b3RlcyBmb3Iga2V5cyBhcmUgb3B0aW9uYWwgaW4gSGpzb25cblx0ICAgIC8vIHVubGVzcyB0aGV5IGluY2x1ZGUge31bXSw6IG9yIHdoaXRlc3BhY2UuXG5cdFxuXHQgICAgaWYgKGNoID09PSAnXCInKSByZXR1cm4gc3RyaW5nKCk7XG5cdFxuXHQgICAgdmFyIG5hbWUgPSBcIlwiLCBzdGFydCA9IGF0LCBzcGFjZSA9IC0xO1xuXHQgICAgd2hpbGUgKHRydWUpIHtcblx0ICAgICAgaWYgKGNoID09PSAnOicpIHtcblx0ICAgICAgICBpZiAoIW5hbWUpIGVycm9yKFwiRm91bmQgJzonIGJ1dCBubyBrZXkgbmFtZSAoZm9yIGFuIGVtcHR5IGtleSBuYW1lIHVzZSBxdW90ZXMpXCIpO1xuXHQgICAgICAgIGVsc2UgaWYgKHNwYWNlID49MCAmJiBzcGFjZSAhPT0gbmFtZS5sZW5ndGgpIHsgYXQgPSBzdGFydCArIHNwYWNlOyBlcnJvcihcIkZvdW5kIHdoaXRlc3BhY2UgaW4geW91ciBrZXkgbmFtZSAodXNlIHF1b3RlcyB0byBpbmNsdWRlKVwiKTsgfVxuXHQgICAgICAgIHJldHVybiBuYW1lO1xuXHQgICAgICB9IGVsc2UgaWYgKGNoIDw9ICcgJykge1xuXHQgICAgICAgIGlmICghY2gpIGVycm9yKFwiRm91bmQgRU9GIHdoaWxlIGxvb2tpbmcgZm9yIGEga2V5IG5hbWUgKGNoZWNrIHlvdXIgc3ludGF4KVwiKTtcblx0ICAgICAgICBlbHNlIGlmIChzcGFjZSA8IDApIHNwYWNlID0gbmFtZS5sZW5ndGg7XG5cdCAgICAgIH0gZWxzZSBpZiAoaXNQdW5jdHVhdG9yQ2hhcihjaCkpIHtcblx0ICAgICAgICBlcnJvcihcIkZvdW5kICdcIiArIGNoICsgXCInIHdoZXJlIGEga2V5IG5hbWUgd2FzIGV4cGVjdGVkIChjaGVjayB5b3VyIHN5bnRheCBvciB1c2UgcXVvdGVzIGlmIHRoZSBrZXkgbmFtZSBpbmNsdWRlcyB7fVtdLDogb3Igd2hpdGVzcGFjZSlcIik7XG5cdCAgICAgIH0gZWxzZSB7XG5cdCAgICAgICAgbmFtZSArPSBjaDtcblx0ICAgICAgfVxuXHQgICAgICBuZXh0KCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiB3aGl0ZSgpIHtcblx0ICAgIHdoaWxlIChjaCkge1xuXHQgICAgICAvLyBTa2lwIHdoaXRlc3BhY2UuXG5cdCAgICAgIHdoaWxlIChjaCAmJiBjaCA8PSAnICcpIG5leHQoKTtcblx0ICAgICAgLy8gSGpzb24gYWxsb3dzIGNvbW1lbnRzXG5cdCAgICAgIGlmIChjaCA9PT0gJyMnIHx8IGNoID09PSAnLycgJiYgcGVlaygwKSA9PT0gJy8nKSB7XG5cdCAgICAgICAgd2hpbGUgKGNoICYmIGNoICE9PSAnXFxuJykgbmV4dCgpO1xuXHQgICAgICB9IGVsc2UgaWYgKGNoID09PSAnLycgJiYgcGVlaygwKSA9PT0gJyonKSB7XG5cdCAgICAgICAgbmV4dCgpOyBuZXh0KCk7XG5cdCAgICAgICAgd2hpbGUgKGNoICYmICEoY2ggPT09ICcqJyAmJiBwZWVrKDApID09PSAnLycpKSBuZXh0KCk7XG5cdCAgICAgICAgaWYgKGNoKSB7IG5leHQoKTsgbmV4dCgpOyB9XG5cdCAgICAgIH0gZWxzZSBicmVhaztcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHRmbm5zKCkge1xuXHQgICAgLy8gSGpzb24gc3RyaW5ncyBjYW4gYmUgcXVvdGVsZXNzXG5cdCAgICAvLyByZXR1cm5zIHN0cmluZywgdHJ1ZSwgZmFsc2UsIG9yIG51bGwuXG5cdCAgICB2YXIgdmFsdWUgPSBjaDtcblx0ICAgIGlmIChpc1B1bmN0dWF0b3JDaGFyKGNoKSlcblx0ICAgICAgZXJyb3IoXCJGb3VuZCBhIHB1bmN0dWF0b3IgY2hhcmFjdGVyICdcIiArIGNoICsgXCInIHdoZW4gZXhwZWN0aW5nIGEgcXVvdGVsZXNzIHN0cmluZyAoY2hlY2sgeW91ciBzeW50YXgpXCIpO1xuXHRcblx0ICAgIGZvcig7Oykge1xuXHQgICAgICBuZXh0KCk7XG5cdCAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDMgJiYgdmFsdWUgPT09IFwiJycnXCIpIHJldHVybiBtbFN0cmluZygpO1xuXHQgICAgICB2YXIgaXNFb2wgPSBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnJztcblx0ICAgICAgaWYgKGlzRW9sIHx8XG5cdCAgICAgICAgY2ggPT09ICcsJyB8fCBjaCA9PT0gJ30nIHx8IGNoID09PSAnXScgfHxcblx0ICAgICAgICBjaCA9PT0gJyMnIHx8XG5cdCAgICAgICAgY2ggPT09ICcvJyAmJiAocGVlaygwKSA9PT0gJy8nIHx8IHBlZWsoMCkgPT09ICcqJylcblx0ICAgICAgICApIHtcblx0ICAgICAgICAvLyB0aGlzIHRlc3RzIGZvciB0aGUgY2FzZSBvZiB7dHJ1ZXxmYWxzZXxudWxsfG51bX1cblx0ICAgICAgICAvLyBmb2xsb3dlZCBieSB7ICcsJyB8ICd9JyB8ICddJyB8ICcjJyB8ICcvLycgfCAnLyonIH1cblx0ICAgICAgICAvLyB3aGljaCBuZWVkcyB0byBiZSBwYXJzZWQgYXMgdGhlIHNwZWNpZmllZCB2YWx1ZVxuXHQgICAgICAgIHZhciBjaGYgPSB2YWx1ZVswXTtcblx0ICAgICAgICBzd2l0Y2ggKGNoZikge1xuXHQgICAgICAgICAgY2FzZSAnZic6IGlmICh2YWx1ZS50cmltKCkgPT09IFwiZmFsc2VcIikgcmV0dXJuIGZhbHNlOyBicmVhaztcblx0ICAgICAgICAgIGNhc2UgJ24nOiBpZiAodmFsdWUudHJpbSgpID09PSBcIm51bGxcIikgcmV0dXJuIG51bGw7IGJyZWFrO1xuXHQgICAgICAgICAgY2FzZSAndCc6IGlmICh2YWx1ZS50cmltKCkgPT09IFwidHJ1ZVwiKSByZXR1cm4gdHJ1ZTsgYnJlYWs7XG5cdCAgICAgICAgICBkZWZhdWx0OlxuXHQgICAgICAgICAgICBpZiAoY2hmID09PSAnLScgfHwgY2hmID49ICcwJyAmJiBjaGYgPD0gJzknKSB7XG5cdCAgICAgICAgICAgICAgdmFyIG4gPSBjb21tb24udHJ5UGFyc2VOdW1iZXIodmFsdWUpO1xuXHQgICAgICAgICAgICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHJldHVybiBuO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgfVxuXHQgICAgICAgIGlmIChpc0VvbCkge1xuXHQgICAgICAgICAgLy8gcmVtb3ZlIGFueSB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgKGlnbm9yZWQgaW4gcXVvdGVsZXNzIHN0cmluZ3MpXG5cdCAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcblx0ICAgICAgICAgIHZhciBkc2ZWYWx1ZSA9IHJ1bkRzZih2YWx1ZSk7XG5cdCAgICAgICAgICByZXR1cm4gZHNmVmFsdWUgIT09IHVuZGVmaW5lZCA/IGRzZlZhbHVlIDogdmFsdWU7XG5cdCAgICAgICAgfVxuXHQgICAgICB9XG5cdCAgICAgIHZhbHVlICs9IGNoO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZ2V0Q29tbWVudChjQXQsIGZpcnN0KSB7XG5cdCAgICB2YXIgaTtcblx0ICAgIGNBdC0tO1xuXHQgICAgLy8gcmVtb3ZlIHRyYWlsaW5nIHdoaXRlc3BhY2Vcblx0ICAgIC8vIGJ1dCBvbmx5IHVwIHRvIEVPTFxuXHQgICAgZm9yIChpID0gYXQgLSAyOyBpID4gY0F0ICYmIHRleHRbaV0gPD0gJyAnICYmIHRleHRbaV0gIT09ICdcXG4nOyBpLS0pO1xuXHQgICAgaWYgKHRleHRbaV0gPT09ICdcXG4nKSBpLS07XG5cdCAgICBpZiAodGV4dFtpXSA9PT0gJ1xccicpIGktLTtcblx0ICAgIHZhciByZXMgPSB0ZXh0LnN1YnN0cihjQXQsIGktY0F0KzEpO1xuXHQgICAgLy8gcmV0dXJuIGlmIHdlIGZpbmQgYW55dGhpbmcgb3RoZXIgdGhhbiB3aGl0ZXNwYWNlXG5cdCAgICBmb3IgKGkgPSAwOyBpIDwgcmVzLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGlmIChyZXNbaV0gPiAnICcpIHtcblx0ICAgICAgICB2YXIgaiA9IHJlcy5pbmRleE9mKCdcXG4nKTtcblx0ICAgICAgICBpZiAoaiA+PSAwKSB7XG5cdCAgICAgICAgICB2YXIgYyA9IFtyZXMuc3Vic3RyKDAsIGopLCByZXMuc3Vic3RyKGorMSldO1xuXHQgICAgICAgICAgaWYgKGZpcnN0ICYmIGNbMF0udHJpbSgpLmxlbmd0aCA9PT0gMCkgYy5zaGlmdCgpO1xuXHQgICAgICAgICAgcmV0dXJuIGM7XG5cdCAgICAgICAgfSBlbHNlIHJldHVybiBbcmVzXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIFtdO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gZXJyb3JDbG9zaW5nSGludCh2YWx1ZSkge1xuXHQgICAgZnVuY3Rpb24gc2VhcmNoKHZhbHVlLCBjaCkge1xuXHQgICAgICB2YXIgaSwgaywgbGVuZ3RoLCByZXM7XG5cdCAgICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG5cdCAgICAgICAgY2FzZSAnc3RyaW5nJzpcblx0ICAgICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKGNoKSA+PSAwKSByZXM9dmFsdWU7XG5cdCAgICAgICAgICBicmVhaztcblx0ICAgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cdCAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgICAgcmVzPXNlYXJjaCh2YWx1ZVtpXSwgY2gpIHx8IHJlcztcblx0ICAgICAgICAgICAgfVxuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG5cdCAgICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGspKSBjb250aW51ZTtcblx0ICAgICAgICAgICAgICByZXM9c2VhcmNoKHZhbHVlW2tdLCBjaCkgfHwgcmVzO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICB9XG5cdCAgICAgIH1cblx0ICAgICAgcmV0dXJuIHJlcztcblx0ICAgIH1cblx0XG5cdCAgICBmdW5jdGlvbiByZXBvcnQoY2gpIHtcblx0ICAgICAgdmFyIHBvc3NpYmxlRXJyPXNlYXJjaCh2YWx1ZSwgY2gpO1xuXHQgICAgICBpZiAocG9zc2libGVFcnIpIHtcblx0ICAgICAgICByZXR1cm4gXCJmb3VuZCAnXCIrY2grXCInIGluIGEgc3RyaW5nIHZhbHVlLCB5b3VyIG1pc3Rha2UgY291bGQgYmUgd2l0aDpcXG5cIitcblx0ICAgICAgICAgIFwiICA+IFwiK3Bvc3NpYmxlRXJyK1wiXFxuXCIrXG5cdCAgICAgICAgICBcIiAgKHVucXVvdGVkIHN0cmluZ3MgY29udGFpbiBldmVyeXRoaW5nIHVwIHRvIHRoZSBuZXh0IGxpbmUhKVwiO1xuXHQgICAgICB9IGVsc2UgcmV0dXJuIFwiXCI7XG5cdCAgICB9XG5cdFxuXHQgICAgcmV0dXJuIHJlcG9ydCgnfScpIHx8IHJlcG9ydCgnXScpO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gYXJyYXkoKSB7XG5cdCAgICAvLyBQYXJzZSBhbiBhcnJheSB2YWx1ZS5cblx0ICAgIC8vIGFzc3VtaW5nIGNoID09PSAnWydcblx0XG5cdCAgICB2YXIgYXJyYXkgPSBbXTtcblx0ICAgIHZhciBjb21tZW50cywgY0F0LCBuZXh0Q29tbWVudDtcblx0ICAgIHRyeSB7XG5cdCAgICAgIGlmIChrZWVwQ29tbWVudHMpIGNvbW1lbnRzID0gY29tbW9uLmNyZWF0ZUNvbW1lbnQoYXJyYXksIHsgYTogW10gfSk7XG5cdFxuXHQgICAgICBuZXh0KCk7XG5cdCAgICAgIGNBdCA9IGF0O1xuXHQgICAgICB3aGl0ZSgpO1xuXHQgICAgICBpZiAoY29tbWVudHMpIG5leHRDb21tZW50ID0gZ2V0Q29tbWVudChjQXQsIHRydWUpLmpvaW4oJ1xcbicpO1xuXHQgICAgICBpZiAoY2ggPT09ICddJykge1xuXHQgICAgICAgIG5leHQoKTtcblx0ICAgICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmUgPSBbbmV4dENvbW1lbnRdO1xuXHQgICAgICAgIHJldHVybiBhcnJheTsgIC8vIGVtcHR5IGFycmF5XG5cdCAgICAgIH1cblx0XG5cdCAgICAgIHdoaWxlIChjaCkge1xuXHQgICAgICAgIGFycmF5LnB1c2godmFsdWUoKSk7XG5cdCAgICAgICAgY0F0ID0gYXQ7XG5cdCAgICAgICAgd2hpdGUoKTtcblx0ICAgICAgICAvLyBpbiBIanNvbiB0aGUgY29tbWEgaXMgb3B0aW9uYWwgYW5kIHRyYWlsaW5nIGNvbW1hcyBhcmUgYWxsb3dlZFxuXHQgICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBkbyBub3Qga2VlcCBjb21tZW50cyBiZWZvcmUgdGhlICwgaWYgdGhlcmUgYXJlIGFueVxuXHQgICAgICAgIGlmIChjaCA9PT0gJywnKSB7IG5leHQoKTsgY0F0ID0gYXQ7IHdoaXRlKCk7IH1cblx0ICAgICAgICBpZiAoY29tbWVudHMpIHtcblx0ICAgICAgICAgIHZhciBjID0gZ2V0Q29tbWVudChjQXQpO1xuXHQgICAgICAgICAgY29tbWVudHMuYS5wdXNoKFtuZXh0Q29tbWVudHx8XCJcIiwgY1swXXx8XCJcIl0pO1xuXHQgICAgICAgICAgbmV4dENvbW1lbnQgPSBjWzFdO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoY2ggPT09ICddJykge1xuXHQgICAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5hW2NvbW1lbnRzLmEubGVuZ3RoLTFdWzFdICs9IG5leHRDb21tZW50fHxcIlwiO1xuXHQgICAgICAgICAgcmV0dXJuIGFycmF5O1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGl0ZSgpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBlcnJvcihcIkVuZCBvZiBpbnB1dCB3aGlsZSBwYXJzaW5nIGFuIGFycmF5IChtaXNzaW5nICddJylcIik7XG5cdCAgICB9IGNhdGNoIChlKSB7XG5cdCAgICAgIGUuaGludD1lLmhpbnR8fGVycm9yQ2xvc2luZ0hpbnQoYXJyYXkpO1xuXHQgICAgICB0aHJvdyBlO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gb2JqZWN0KHdpdGhvdXRCcmFjZXMpIHtcblx0ICAgIC8vIFBhcnNlIGFuIG9iamVjdCB2YWx1ZS5cblx0XG5cdCAgICB2YXIga2V5ID0gXCJcIiwgb2JqZWN0ID0ge307XG5cdCAgICB2YXIgY29tbWVudHMsIGNBdCwgbmV4dENvbW1lbnQ7XG5cdFxuXHQgICAgdHJ5IHtcblx0ICAgICAgaWYgKGtlZXBDb21tZW50cykgY29tbWVudHMgPSBjb21tb24uY3JlYXRlQ29tbWVudChvYmplY3QsIHsgYzoge30sIG86IFtdICB9KTtcblx0XG5cdCAgICAgIGlmICghd2l0aG91dEJyYWNlcykge1xuXHQgICAgICAgIC8vIGFzc3VtaW5nIGNoID09PSAneydcblx0ICAgICAgICBuZXh0KCk7XG5cdCAgICAgICAgY0F0ID0gYXQ7XG5cdCAgICAgIH0gZWxzZSBjQXQgPSAxO1xuXHRcblx0ICAgICAgd2hpdGUoKTtcblx0ICAgICAgaWYgKGNvbW1lbnRzKSBuZXh0Q29tbWVudCA9IGdldENvbW1lbnQoY0F0LCB0cnVlKS5qb2luKCdcXG4nKTtcblx0ICAgICAgaWYgKGNoID09PSAnfScgJiYgIXdpdGhvdXRCcmFjZXMpIHtcblx0ICAgICAgICBpZiAoY29tbWVudHMpIGNvbW1lbnRzLmUgPSBbbmV4dENvbW1lbnRdO1xuXHQgICAgICAgIG5leHQoKTtcblx0ICAgICAgICByZXR1cm4gb2JqZWN0OyAgLy8gZW1wdHkgb2JqZWN0XG5cdCAgICAgIH1cblx0ICAgICAgd2hpbGUgKGNoKSB7XG5cdCAgICAgICAga2V5ID0ga2V5bmFtZSgpO1xuXHQgICAgICAgIHdoaXRlKCk7XG5cdCAgICAgICAgaWYgKGNoICE9PSAnOicpIGVycm9yKFwiRXhwZWN0ZWQgJzonIGluc3RlYWQgb2YgJ1wiICsgY2ggKyBcIidcIik7XG5cdCAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgIC8vIGR1cGxpY2F0ZSBrZXlzIG92ZXJ3cml0ZSB0aGUgcHJldmlvdXMgdmFsdWVcblx0ICAgICAgICBvYmplY3Rba2V5XSA9IHZhbHVlKCk7XG5cdCAgICAgICAgY0F0ID0gYXQ7XG5cdCAgICAgICAgd2hpdGUoKTtcblx0ICAgICAgICAvLyBpbiBIanNvbiB0aGUgY29tbWEgaXMgb3B0aW9uYWwgYW5kIHRyYWlsaW5nIGNvbW1hcyBhcmUgYWxsb3dlZFxuXHQgICAgICAgIC8vIG5vdGUgdGhhdCB3ZSBkbyBub3Qga2VlcCBjb21tZW50cyBiZWZvcmUgdGhlICwgaWYgdGhlcmUgYXJlIGFueVxuXHQgICAgICAgIGlmIChjaCA9PT0gJywnKSB7IG5leHQoKTsgY0F0ID0gYXQ7IHdoaXRlKCk7IH1cblx0ICAgICAgICBpZiAoY29tbWVudHMpIHtcblx0ICAgICAgICAgIHZhciBjID0gZ2V0Q29tbWVudChjQXQpO1xuXHQgICAgICAgICAgY29tbWVudHMuY1trZXldID0gW25leHRDb21tZW50fHxcIlwiLCBjWzBdfHxcIlwiXTtcblx0ICAgICAgICAgIG5leHRDb21tZW50ID0gY1sxXTtcblx0ICAgICAgICAgIGNvbW1lbnRzLm8ucHVzaChrZXkpO1xuXHQgICAgICAgIH1cblx0ICAgICAgICBpZiAoY2ggPT09ICd9JyAmJiAhd2l0aG91dEJyYWNlcykge1xuXHQgICAgICAgICAgbmV4dCgpO1xuXHQgICAgICAgICAgaWYgKGNvbW1lbnRzKSBjb21tZW50cy5jW2tleV1bMV0gKz0gbmV4dENvbW1lbnR8fFwiXCI7XG5cdCAgICAgICAgICByZXR1cm4gb2JqZWN0O1xuXHQgICAgICAgIH1cblx0ICAgICAgICB3aGl0ZSgpO1xuXHQgICAgICB9XG5cdFxuXHQgICAgICBpZiAod2l0aG91dEJyYWNlcykgcmV0dXJuIG9iamVjdDtcblx0ICAgICAgZWxzZSBlcnJvcihcIkVuZCBvZiBpbnB1dCB3aGlsZSBwYXJzaW5nIGFuIG9iamVjdCAobWlzc2luZyAnfScpXCIpO1xuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICBlLmhpbnQ9ZS5oaW50fHxlcnJvckNsb3NpbmdIaW50KG9iamVjdCk7XG5cdCAgICAgIHRocm93IGU7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiB2YWx1ZSgpIHtcblx0ICAgIC8vIFBhcnNlIGEgSGpzb24gdmFsdWUuIEl0IGNvdWxkIGJlIGFuIG9iamVjdCwgYW4gYXJyYXksIGEgc3RyaW5nLCBhIG51bWJlciBvciBhIHdvcmQuXG5cdFxuXHQgICAgd2hpdGUoKTtcblx0ICAgIHN3aXRjaCAoY2gpIHtcblx0ICAgICAgY2FzZSAneyc6IHJldHVybiBvYmplY3QoKTtcblx0ICAgICAgY2FzZSAnWyc6IHJldHVybiBhcnJheSgpO1xuXHQgICAgICBjYXNlICdcIic6IHJldHVybiBzdHJpbmcoKTtcblx0ICAgICAgZGVmYXVsdDogcmV0dXJuIHRmbm5zKCk7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBjaGVja1RyYWlsaW5nKHYsIGMpIHtcblx0ICAgIHZhciBjQXQgPSBhdDtcblx0ICAgIHdoaXRlKCk7XG5cdCAgICBpZiAoY2gpIGVycm9yKFwiU3ludGF4IGVycm9yLCBmb3VuZCB0cmFpbGluZyBjaGFyYWN0ZXJzXCIpO1xuXHQgICAgaWYgKGtlZXBDb21tZW50cykge1xuXHQgICAgICB2YXIgYiA9IGMuam9pbignXFxuJyksIGEgPSBnZXRDb21tZW50KGNBdCkuam9pbignXFxuJyk7XG5cdCAgICAgIGlmIChhIHx8IGIpIHtcblx0ICAgICAgICB2YXIgY29tbWVudHMgPSBjb21tb24uY3JlYXRlQ29tbWVudCh2LCBjb21tb24uZ2V0Q29tbWVudCh2KSk7XG5cdCAgICAgICAgY29tbWVudHMuciA9IFtiLCBhXTtcblx0ICAgICAgfVxuXHQgICAgfVxuXHQgICAgcmV0dXJuIHY7XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiByb290VmFsdWUoKSB7XG5cdCAgICAvLyBCcmFjZXMgZm9yIHRoZSByb290IG9iamVjdCBhcmUgb3B0aW9uYWxcblx0ICAgIHdoaXRlKCk7XG5cdCAgICB2YXIgYyA9IGtlZXBDb21tZW50cyA/IGdldENvbW1lbnQoMSkgOiBudWxsO1xuXHQgICAgc3dpdGNoIChjaCkge1xuXHQgICAgICBjYXNlICd7JzogcmV0dXJuIGNoZWNrVHJhaWxpbmcob2JqZWN0KCksIGMpO1xuXHQgICAgICBjYXNlICdbJzogcmV0dXJuIGNoZWNrVHJhaWxpbmcoYXJyYXkoKSwgYyk7XG5cdCAgICB9XG5cdFxuXHQgICAgdHJ5IHtcblx0ICAgICAgLy8gYXNzdW1lIHdlIGhhdmUgYSByb290IG9iamVjdCB3aXRob3V0IGJyYWNlc1xuXHQgICAgICByZXR1cm4gY2hlY2tUcmFpbGluZyhvYmplY3QodHJ1ZSksIGMpO1xuXHQgICAgfSBjYXRjaCAoZSkge1xuXHQgICAgICAvLyB0ZXN0IGlmIHdlIGFyZSBkZWFsaW5nIHdpdGggYSBzaW5nbGUgSlNPTiB2YWx1ZSBpbnN0ZWFkICh0cnVlL2ZhbHNlL251bGwvbnVtL1wiXCIpXG5cdCAgICAgIHJlc2V0QXQoKTtcblx0ICAgICAgdHJ5IHsgcmV0dXJuIGNoZWNrVHJhaWxpbmcodmFsdWUoKSwgYyk7IH1cblx0ICAgICAgY2F0Y2ggKGUyKSB7IHRocm93IGU7IH0gLy8gdGhyb3cgb3JpZ2luYWwgZXJyb3Jcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIGhqc29uUGFyc2Uoc291cmNlLCBvcHQpIHtcblx0ICAgIGlmICh0eXBlb2Ygc291cmNlIT09XCJzdHJpbmdcIikgdGhyb3cgbmV3IEVycm9yKFwic291cmNlIGlzIG5vdCBhIHN0cmluZ1wiKTtcblx0ICAgIHZhciBkc2ZEZWYgPSBudWxsO1xuXHQgICAgaWYgKG9wdCAmJiB0eXBlb2Ygb3B0ID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBrZWVwQ29tbWVudHMgPSBvcHQua2VlcFdzYztcblx0ICAgICAgZHNmRGVmID0gb3B0LmRzZjtcblx0ICAgIH1cblx0ICAgIHJ1bkRzZiA9IGRzZi5sb2FkRHNmKGRzZkRlZiwgXCJwYXJzZVwiKTtcblx0ICAgIHRleHQgPSBzb3VyY2U7XG5cdCAgICByZXNldEF0KCk7XG5cdCAgICByZXR1cm4gcm9vdFZhbHVlKCk7XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gaGpzb25QYXJzZSgkc291cmNlLCAkb3B0KTtcblx0fTtcblxuXG4vKioqLyB9LFxuLyogMTQgKi9cbi8qKiovIGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cdC8qIEhqc29uIGh0dHA6Ly9oanNvbi5vcmcgKi9cblx0LyoganNsaW50IG5vZGU6IHRydWUgKi9cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHR2YXIgY29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG5cdFxuXHRmdW5jdGlvbiBsb2FkRHNmKGNvbCwgdHlwZSkge1xuXHRcblx0ICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShjb2wpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG5cdCAgICBpZiAoY29sKSB0aHJvdyBuZXcgRXJyb3IoXCJkc2Ygb3B0aW9uIG11c3QgY29udGFpbiBhbiBhcnJheSFcIik7XG5cdCAgICBlbHNlIHJldHVybiBub3BEc2Y7XG5cdCAgfSBlbHNlIGlmIChjb2wubGVuZ3RoID09PSAwKSByZXR1cm4gbm9wRHNmO1xuXHRcblx0ICB2YXIgZHNmID0gW107XG5cdCAgZnVuY3Rpb24gaXNGdW5jdGlvbihmKSB7IHJldHVybiB7fS50b1N0cmluZy5jYWxsKGYpID09PSAnW29iamVjdCBGdW5jdGlvbl0nOyB9XG5cdFxuXHQgIGNvbC5mb3JFYWNoKGZ1bmN0aW9uKHgpIHtcblx0ICAgIGlmICgheC5uYW1lIHx8ICFpc0Z1bmN0aW9uKHgucGFyc2UpIHx8ICFpc0Z1bmN0aW9uKHguc3RyaW5naWZ5KSlcblx0ICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZXh0ZW5zaW9uIGRvZXMgbm90IG1hdGNoIHRoZSBEU0YgaW50ZXJmYWNlXCIpO1xuXHQgICAgZHNmLnB1c2goZnVuY3Rpb24oKSB7XG5cdCAgICAgIHRyeSB7XG5cdCAgICAgICAgaWYgKHR5cGUgPT0gXCJwYXJzZVwiKSB7XG5cdCAgICAgICAgICByZXR1cm4geC5wYXJzZS5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuXHQgICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PSBcInN0cmluZ2lmeVwiKSB7XG5cdCAgICAgICAgICB2YXIgcmVzPXguc3RyaW5naWZ5LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG5cdCAgICAgICAgICAvLyBjaGVjayByZXN1bHRcblx0ICAgICAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCAmJiAodHlwZW9mIHJlcyAhPT0gXCJzdHJpbmdcIiB8fFxuXHQgICAgICAgICAgICByZXMubGVuZ3RoID09PSAwIHx8XG5cdCAgICAgICAgICAgIHJlc1swXSA9PT0gJ1wiJyB8fFxuXHQgICAgICAgICAgICBbXS5zb21lLmNhbGwocmVzLCBmdW5jdGlvbihjKSB7IHJldHVybiBpc0ludmFsaWREc2ZDaGFyKGMpOyB9KSkpXG5cdCAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInZhbHVlIG1heSBub3QgYmUgZW1wdHksIHN0YXJ0IHdpdGggYSBxdW90ZSBvciBjb250YWluIGEgcHVuY3R1YXRvciBjaGFyYWN0ZXIgZXhjZXB0IGNvbG9uOiBcIiArIHJlcyk7XG5cdCAgICAgICAgICByZXR1cm4gcmVzO1xuXHQgICAgICAgIH0gZWxzZSB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHR5cGVcIik7XG5cdCAgICAgIH0gY2F0Y2ggKGUpIHtcblx0ICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJEU0YtXCIreC5uYW1lK1wiIGZhaWxlZDsgXCIrZS5tZXNzYWdlKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgfSk7XG5cdFxuXHQgIHJldHVybiBydW5Ec2YuYmluZChudWxsLCBkc2YpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBydW5Ec2YoZHNmLCB2YWx1ZSkge1xuXHQgIGlmIChkc2YpIHtcblx0ICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZHNmLmxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciByZXMgPSBkc2ZbaV0odmFsdWUpO1xuXHQgICAgICBpZiAocmVzICE9PSB1bmRlZmluZWQpIHJldHVybiByZXM7XG5cdCAgICB9XG5cdCAgfVxuXHR9XG5cdFxuXHRmdW5jdGlvbiBub3BEc2YodmFsdWUpIHtcblx0fVxuXHRcblx0ZnVuY3Rpb24gaXNJbnZhbGlkRHNmQ2hhcihjKSB7XG5cdCAgcmV0dXJuIGMgPT09ICd7JyB8fCBjID09PSAnfScgfHwgYyA9PT0gJ1snIHx8IGMgPT09ICddJyB8fCBjID09PSAnLCc7XG5cdH1cblx0XG5cdFxuXHRmdW5jdGlvbiBtYXRoKG9wdCkge1xuXHQgIHJldHVybiB7XG5cdCAgICBuYW1lOiBcIm1hdGhcIixcblx0ICAgIHBhcnNlOiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgc3dpdGNoICh2YWx1ZSkge1xuXHQgICAgICAgIGNhc2UgXCIraW5mXCI6XG5cdCAgICAgICAgY2FzZSBcImluZlwiOlxuXHQgICAgICAgIGNhc2UgXCIrSW5mXCI6XG5cdCAgICAgICAgY2FzZSBcIkluZlwiOiByZXR1cm4gSW5maW5pdHk7XG5cdCAgICAgICAgY2FzZSBcIi1pbmZcIjpcblx0ICAgICAgICBjYXNlIFwiLUluZlwiOiByZXR1cm4gLUluZmluaXR5O1xuXHQgICAgICAgIGNhc2UgXCJuYW5cIjpcblx0ICAgICAgICBjYXNlIFwiTmFOXCI6IHJldHVybiBOYU47XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykgcmV0dXJuO1xuXHQgICAgICBpZiAoMSAvIHZhbHVlID09PSAtSW5maW5pdHkpIHJldHVybiBcIi0wXCI7IC8vIDAgPT09IC0wXG5cdCAgICAgIGlmICh2YWx1ZSA9PT0gSW5maW5pdHkpIHJldHVybiBcIkluZlwiO1xuXHQgICAgICBpZiAodmFsdWUgPT09IC1JbmZpbml0eSkgcmV0dXJuIFwiLUluZlwiO1xuXHQgICAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm4gXCJOYU5cIjtcblx0ICAgIH0sXG5cdCAgfTtcblx0fVxuXHRtYXRoLmRlc2NyaXB0aW9uPVwic3VwcG9ydCBmb3IgSW5mL2luZiwgLUluZi8taW5mLCBOYW4vbmFOIGFuZCAtMFwiO1xuXHRcblx0ZnVuY3Rpb24gaGV4KG9wdCkge1xuXHQgIHZhciBvdXQ9b3B0ICYmIG9wdC5vdXQ7XG5cdCAgcmV0dXJuIHtcblx0ICAgIG5hbWU6IFwiaGV4XCIsXG5cdCAgICBwYXJzZTogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdCAgICAgIGlmICgvXjB4WzAtOUEtRmEtZl0rJC8udGVzdCh2YWx1ZSkpXG5cdCAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxNik7XG5cdCAgICB9LFxuXHQgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0ICAgICAgaWYgKG91dCAmJiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSlcblx0ICAgICAgICByZXR1cm4gXCIweFwiK3ZhbHVlLnRvU3RyaW5nKDE2KTtcblx0ICAgIH0sXG5cdCAgfTtcblx0fVxuXHRoZXguZGVzY3JpcHRpb249XCJwYXJzZSBoZXhhZGVjaW1hbCBudW1iZXJzIHByZWZpeGVkIHdpdGggMHhcIjtcblx0XG5cdGZ1bmN0aW9uIGRhdGUob3B0KSB7XG5cdCAgcmV0dXJuIHtcblx0ICAgIG5hbWU6IFwiZGF0ZVwiLFxuXHQgICAgcGFyc2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoL15cXGR7NH0tXFxkezJ9LVxcZHsyfSQvLnRlc3QodmFsdWUpIHx8XG5cdCAgICAgICAgL15cXGR7NH0tXFxkezJ9LVxcZHsyfVRcXGR7Mn1cXDpcXGR7Mn1cXDpcXGR7Mn0oPzouXFxkKykoPzpafFsrLV1cXGR7Mn06XFxkezJ9KSQvLnRlc3QodmFsdWUpKSB7XG5cdCAgICAgICAgdmFyIGR0ID0gRGF0ZS5wYXJzZSh2YWx1ZSk7XG5cdCAgICAgICAgaWYgKCFpc05hTihkdCkpIHJldHVybiBuZXcgRGF0ZShkdCk7XG5cdCAgICAgIH1cblx0ICAgIH0sXG5cdCAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHQgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG5cdCAgICAgICAgdmFyIGR0ID0gdmFsdWUudG9JU09TdHJpbmcoKTtcblx0ICAgICAgICBpZiAoZHQuaW5kZXhPZihcIlQwMDowMDowMC4wMDBaXCIsIGR0Lmxlbmd0aCAtIDE0KSAhPT0gLTEpIHJldHVybiBkdC5zdWJzdHIoMCwgMTApO1xuXHQgICAgICAgIGVsc2UgcmV0dXJuIGR0O1xuXHQgICAgICB9XG5cdCAgICB9LFxuXHQgIH07XG5cdH1cblx0ZGF0ZS5kZXNjcmlwdGlvbj1cInN1cHBvcnQgSVNPIGRhdGVzXCI7XG5cdFxuXHRtb2R1bGUuZXhwb3J0cyA9IHtcblx0ICBsb2FkRHNmOiBsb2FkRHNmLFxuXHQgIHN0ZDoge1xuXHQgICAgbWF0aDogbWF0aCxcblx0ICAgIGhleDogaGV4LFxuXHQgICAgZGF0ZTogZGF0ZSxcblx0ICB9LFxuXHR9O1xuXG5cbi8qKiovIH0sXG4vKiAxNSAqL1xuLyoqKi8gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblx0LyogSGpzb24gaHR0cDovL2hqc29uLm9yZyAqL1xuXHQvKiBqc2xpbnQgbm9kZTogdHJ1ZSAqL1xuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHZhbHVlLCAkb3B0KSB7XG5cdFxuXHQgIHZhciBjb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0ICB2YXIgZHNmID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG5cdFxuXHQgIHZhciBydW5Ec2Y7IC8vIGRvbWFpbiBzcGVjaWZpYyBmb3JtYXRzXG5cdFxuXHQgIC8vIG5lZWRzRXNjYXBlIHRlc3RzIGlmIHRoZSBzdHJpbmcgY2FuIGJlIHdyaXR0ZW4gd2l0aG91dCBlc2NhcGVzXG5cdCAgdmFyIG5lZWRzRXNjYXBlID0gL1tcXFxcXFxcIlxceDAwLVxceDFmXFx4N2YtXFx4OWZcXHUwMGFkXFx1MDYwMC1cXHUwNjA0XFx1MDcwZlxcdTE3YjRcXHUxN2I1XFx1MjAwYy1cXHUyMDBmXFx1MjAyOC1cXHUyMDJmXFx1MjA2MC1cXHUyMDZmXFx1ZmVmZlxcdWZmZjAtXFx1ZmZmZl0vZztcblx0ICAvLyBuZWVkc1F1b3RlcyB0ZXN0cyBpZiB0aGUgc3RyaW5nIGNhbiBiZSB3cml0dGVuIGFzIGEgcXVvdGVsZXNzIHN0cmluZyAoaW5jbHVkZXMgbmVlZHNFc2NhcGUgYnV0IHdpdGhvdXQgXFxcXCBhbmQgXFxcIilcblx0ICB2YXIgbmVlZHNRdW90ZXMgPSAvXlxcc3xeXCJ8XicnJ3xeI3xeXFwvXFwqfF5cXC9cXC98Xlxce3xeXFx9fF5cXFt8XlxcXXxeOnxeLHxcXHMkfFtcXHgwMC1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG5cdCAgLy8gbmVlZHNFc2NhcGVNTCB0ZXN0cyBpZiB0aGUgc3RyaW5nIGNhbiBiZSB3cml0dGVuIGFzIGEgbXVsdGlsaW5lIHN0cmluZyAoaW5jbHVkZXMgbmVlZHNFc2NhcGUgYnV0IHdpdGhvdXQgXFxuLCBcXHIsIFxcXFwgYW5kIFxcXCIpXG5cdCAgdmFyIG5lZWRzRXNjYXBlTUwgPSAvJycnfFtcXHgwMC1cXHgwOVxceDBiXFx4MGNcXHgwZS1cXHgxZlxceDdmLVxceDlmXFx1MDBhZFxcdTA2MDAtXFx1MDYwNFxcdTA3MGZcXHUxN2I0XFx1MTdiNVxcdTIwMGMtXFx1MjAwZlxcdTIwMjgtXFx1MjAyZlxcdTIwNjAtXFx1MjA2ZlxcdWZlZmZcXHVmZmYwLVxcdWZmZmZdL2c7XG5cdCAgLy8gc3RhcnRzIHdpdGggYSBrZXl3b3JkIGFuZCBvcHRpb25hbGx5IGlzIGZvbGxvd2VkIGJ5IGEgY29tbWVudFxuXHQgIHZhciBzdGFydHNXaXRoS2V5d29yZCA9IC9eKHRydWV8ZmFsc2V8bnVsbClcXHMqKCgsfFxcXXxcXH18I3xcXC9cXC98XFwvXFwqKS4qKT8kLztcblx0ICB2YXIgbWV0YSA9XG5cdCAgeyAgLy8gdGFibGUgb2YgY2hhcmFjdGVyIHN1YnN0aXR1dGlvbnNcblx0ICAgICdcXGInOiAnYicsXG5cdCAgICAnXFx0JzogJ3QnLFxuXHQgICAgJ1xcbic6ICduJyxcblx0ICAgICdcXGYnOiAnZicsXG5cdCAgICAnXFxyJzogJ3InLFxuXHQgICAgJ1wiJyA6ICdcIicsXG5cdCAgICAnXFxcXCc6ICdcXFxcJ1xuXHQgIH07XG5cdCAgdmFyIG5lZWRzRXNjYXBlTmFtZSA9IC9bLFxce1xcW1xcfVxcXVxcczojXCJdfFxcL1xcL3xcXC9cXCp8JycnLztcblx0ICB2YXIgZ2FwID0gJyc7XG5cdCAgdmFyIGluZGVudCA9ICcgICc7XG5cdCAgLy8gb3B0aW9uc1xuXHQgIHZhciBlb2wsIGtlZXBDb21tZW50cywgYnJhY2VzU2FtZUxpbmUsIHF1b3RlQWx3YXlzO1xuXHQgIHZhciB0b2tlbiA9IHtcblx0ICAgIG9iajogIFsgJ3snLCAnfScgXSxcblx0ICAgIGFycjogIFsgJ1snLCAnXScgXSxcblx0ICAgIGtleTogIFsgJycsICAnJyBdLFxuXHQgICAgcWtleTogWyAnXCInLCAnXCInIF0sXG5cdCAgICBjb2w6ICBbICc6JyBdLFxuXHQgICAgc3RyOiAgWyAnJywgJycgXSxcblx0ICAgIHFzdHI6IFsgJ1wiJywgJ1wiJyBdLFxuXHQgICAgbXN0cjogWyBcIicnJ1wiLCBcIicnJ1wiIF0sXG5cdCAgICBudW06ICBbICcnLCAnJyBdLFxuXHQgICAgbGl0OiAgWyAnJywgJycgXSxcblx0ICAgIGRzZjogIFsgJycsICcnIF0sXG5cdCAgICBlc2M6ICBbICdcXFxcJywgJycgXSxcblx0ICAgIHVuaTogIFsgJ1xcXFx1JywgJycgXSxcblx0ICAgIHJlbTogIFsgJycsICcnIF0sXG5cdCAgfTtcblx0XG5cdCAgZnVuY3Rpb24gd3JhcCh0aywgdikgeyByZXR1cm4gdGtbMF0gKyB2ICsgdGtbMV07IH1cblx0XG5cdCAgZnVuY3Rpb24gcXVvdGVSZXBsYWNlKHN0cmluZykge1xuXHQgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKG5lZWRzRXNjYXBlLCBmdW5jdGlvbiAoYSkge1xuXHQgICAgICB2YXIgYyA9IG1ldGFbYV07XG5cdCAgICAgIGlmICh0eXBlb2YgYyA9PT0gJ3N0cmluZycpIHJldHVybiB3cmFwKHRva2VuLmVzYywgYyk7XG5cdCAgICAgIGVsc2UgcmV0dXJuIHdyYXAodG9rZW4udW5pLCAoJzAwMDAnICsgYS5jaGFyQ29kZUF0KDApLnRvU3RyaW5nKDE2KSkuc2xpY2UoLTQpKTtcblx0ICAgIH0pO1xuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gcXVvdGUoc3RyaW5nLCBnYXAsIGhhc0NvbW1lbnQsIGlzUm9vdE9iamVjdCkge1xuXHQgICAgaWYgKCFzdHJpbmcpIHJldHVybiB3cmFwKHRva2VuLnFzdHIsICcnKTtcblx0XG5cdCAgICBuZWVkc1F1b3Rlcy5sYXN0SW5kZXggPSAwO1xuXHQgICAgc3RhcnRzV2l0aEtleXdvcmQubGFzdEluZGV4ID0gMDtcblx0XG5cdCAgICAvLyBDaGVjayBpZiB3ZSBjYW4gaW5zZXJ0IHRoaXMgc3RyaW5nIHdpdGhvdXQgcXVvdGVzXG5cdCAgICAvLyBzZWUgaGpzb24gc3ludGF4IChtdXN0IG5vdCBwYXJzZSBhcyB0cnVlLCBmYWxzZSwgbnVsbCBvciBudW1iZXIpXG5cdFxuXHQgICAgaWYgKHF1b3RlQWx3YXlzIHx8IGhhc0NvbW1lbnQgfHxcblx0ICAgICAgbmVlZHNRdW90ZXMudGVzdChzdHJpbmcpIHx8XG5cdCAgICAgIGNvbW1vbi50cnlQYXJzZU51bWJlcihzdHJpbmcsIHRydWUpICE9PSB1bmRlZmluZWQgfHxcblx0ICAgICAgc3RhcnRzV2l0aEtleXdvcmQudGVzdChzdHJpbmcpKSB7XG5cdFxuXHQgICAgICAvLyBJZiB0aGUgc3RyaW5nIGNvbnRhaW5zIG5vIGNvbnRyb2wgY2hhcmFjdGVycywgbm8gcXVvdGUgY2hhcmFjdGVycywgYW5kIG5vXG5cdCAgICAgIC8vIGJhY2tzbGFzaCBjaGFyYWN0ZXJzLCB0aGVuIHdlIGNhbiBzYWZlbHkgc2xhcCBzb21lIHF1b3RlcyBhcm91bmQgaXQuXG5cdCAgICAgIC8vIE90aGVyd2lzZSB3ZSBmaXJzdCBjaGVjayBpZiB0aGUgc3RyaW5nIGNhbiBiZSBleHByZXNzZWQgaW4gbXVsdGlsaW5lXG5cdCAgICAgIC8vIGZvcm1hdCBvciB3ZSBtdXN0IHJlcGxhY2UgdGhlIG9mZmVuZGluZyBjaGFyYWN0ZXJzIHdpdGggc2FmZSBlc2NhcGVcblx0ICAgICAgLy8gc2VxdWVuY2VzLlxuXHRcblx0ICAgICAgbmVlZHNFc2NhcGUubGFzdEluZGV4ID0gMDtcblx0ICAgICAgbmVlZHNFc2NhcGVNTC5sYXN0SW5kZXggPSAwO1xuXHQgICAgICBpZiAoIW5lZWRzRXNjYXBlLnRlc3Qoc3RyaW5nKSkgcmV0dXJuIHdyYXAodG9rZW4ucXN0ciwgc3RyaW5nKTtcblx0ICAgICAgZWxzZSBpZiAoIW5lZWRzRXNjYXBlTUwudGVzdChzdHJpbmcpICYmICFpc1Jvb3RPYmplY3QpIHJldHVybiBtbFN0cmluZyhzdHJpbmcsIGdhcCk7XG5cdCAgICAgIGVsc2UgcmV0dXJuIHdyYXAodG9rZW4ucXN0ciwgcXVvdGVSZXBsYWNlKHN0cmluZykpO1xuXHQgICAgfSBlbHNlIHtcblx0ICAgICAgLy8gcmV0dXJuIHdpdGhvdXQgcXVvdGVzXG5cdCAgICAgIHJldHVybiB3cmFwKHRva2VuLnN0ciwgc3RyaW5nKTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIG1sU3RyaW5nKHN0cmluZywgZ2FwKSB7XG5cdCAgICAvLyB3cmFwIHRoZSBzdHJpbmcgaW50byB0aGUgJycnIChtdWx0aWxpbmUpIGZvcm1hdFxuXHRcblx0ICAgIHZhciBpLCBhID0gc3RyaW5nLnJlcGxhY2UoL1xcci9nLCBcIlwiKS5zcGxpdCgnXFxuJyk7XG5cdCAgICBnYXAgKz0gaW5kZW50O1xuXHRcblx0ICAgIGlmIChhLmxlbmd0aCA9PT0gMSkge1xuXHQgICAgICAvLyBUaGUgc3RyaW5nIGNvbnRhaW5zIG9ubHkgYSBzaW5nbGUgbGluZS4gV2Ugc3RpbGwgdXNlIHRoZSBtdWx0aWxpbmVcblx0ICAgICAgLy8gZm9ybWF0IGFzIGl0IGF2b2lkcyBlc2NhcGluZyB0aGUgXFwgY2hhcmFjdGVyIChlLmcuIHdoZW4gdXNlZCBpbiBhXG5cdCAgICAgIC8vIHJlZ2V4KS5cblx0ICAgICAgcmV0dXJuIHdyYXAodG9rZW4ubXN0ciwgYVswXSk7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgICB2YXIgcmVzID0gZW9sICsgZ2FwICsgdG9rZW4ubXN0clswXTtcblx0ICAgICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcblx0ICAgICAgICByZXMgKz0gZW9sO1xuXHQgICAgICAgIGlmIChhW2ldKSByZXMgKz0gZ2FwICsgYVtpXTtcblx0ICAgICAgfVxuXHQgICAgICByZXR1cm4gcmVzICsgZW9sICsgZ2FwICsgdG9rZW4ubXN0clsxXTtcblx0ICAgIH1cblx0ICB9XG5cdFxuXHQgIGZ1bmN0aW9uIHF1b3RlS2V5KG5hbWUpIHtcblx0ICAgIGlmICghbmFtZSkgcmV0dXJuICdcIlwiJztcblx0XG5cdCAgICAvLyBDaGVjayBpZiB3ZSBjYW4gaW5zZXJ0IHRoaXMga2V5IHdpdGhvdXQgcXVvdGVzXG5cdFxuXHQgICAgaWYgKG5lZWRzRXNjYXBlTmFtZS50ZXN0KG5hbWUpKSB7XG5cdCAgICAgIG5lZWRzRXNjYXBlLmxhc3RJbmRleCA9IDA7XG5cdCAgICAgIHJldHVybiB3cmFwKHRva2VuLnFrZXksIG5lZWRzRXNjYXBlLnRlc3QobmFtZSkgPyBxdW90ZVJlcGxhY2UobmFtZSkgOiBuYW1lKTtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICAgIC8vIHJldHVybiB3aXRob3V0IHF1b3Rlc1xuXHQgICAgICByZXR1cm4gd3JhcCh0b2tlbi5rZXksIG5hbWUpO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgZnVuY3Rpb24gc3RyKHZhbHVlLCBoYXNDb21tZW50LCBub0luZGVudCwgaXNSb290T2JqZWN0KSB7XG5cdCAgICAvLyBQcm9kdWNlIGEgc3RyaW5nIGZyb20gdmFsdWUuXG5cdFxuXHQgICAgZnVuY3Rpb24gc3RhcnRzV2l0aE5MKHN0cikgeyByZXR1cm4gc3RyICYmIHN0cltzdHJbMF0gPT09ICdcXHInID8gMSA6IDBdID09PSAnXFxuJzsgfVxuXHQgICAgZnVuY3Rpb24gY29tbWVudE9uVGhpc0xpbmUoc3RyKSB7IHJldHVybiBzdHIgJiYgIXN0YXJ0c1dpdGhOTChzdHIpOyB9XG5cdCAgICBmdW5jdGlvbiBtYWtlQ29tbWVudChzdHIsIHByZWZpeCwgdHJpbSkge1xuXHQgICAgICBpZiAoIXN0cikgcmV0dXJuIFwiXCI7XG5cdCAgICAgIHN0ciA9IGNvbW1vbi5mb3JjZUNvbW1lbnQoc3RyKTtcblx0ICAgICAgdmFyIGksIGxlbiA9IHN0ci5sZW5ndGg7XG5cdCAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gJiYgc3RyW2ldIDw9ICcgJzsgaSsrKSB7fVxuXHQgICAgICBpZiAodHJpbSAmJiBpID4gMCkgc3RyID0gc3RyLnN1YnN0cihpKTtcblx0ICAgICAgaWYgKGkgPCBsZW4pIHJldHVybiBwcmVmaXggKyB3cmFwKHRva2VuLnJlbSwgc3RyKTtcblx0ICAgICAgZWxzZSByZXR1cm4gc3RyO1xuXHQgICAgfVxuXHRcblx0ICAgIC8vIFdoYXQgaGFwcGVucyBuZXh0IGRlcGVuZHMgb24gdGhlIHZhbHVlJ3MgdHlwZS5cblx0XG5cdCAgICAvLyBjaGVjayBmb3IgRFNGXG5cdCAgICB2YXIgZHNmVmFsdWUgPSBydW5Ec2YodmFsdWUpO1xuXHQgICAgaWYgKGRzZlZhbHVlICE9PSB1bmRlZmluZWQpIHJldHVybiB3cmFwKHRva2VuLmRzZiwgZHNmVmFsdWUpO1xuXHRcblx0ICAgIHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XG5cdCAgICAgIGNhc2UgJ3N0cmluZyc6XG5cdCAgICAgICAgcmV0dXJuIHF1b3RlKHZhbHVlLCBnYXAsIGhhc0NvbW1lbnQsIGlzUm9vdE9iamVjdCk7XG5cdFxuXHQgICAgICBjYXNlICdudW1iZXInOlxuXHQgICAgICAgIC8vIEpTT04gbnVtYmVycyBtdXN0IGJlIGZpbml0ZS4gRW5jb2RlIG5vbi1maW5pdGUgbnVtYmVycyBhcyBudWxsLlxuXHQgICAgICAgIHJldHVybiBpc0Zpbml0ZSh2YWx1ZSkgPyB3cmFwKHRva2VuLm51bSwgU3RyaW5nKHZhbHVlKSkgOiB3cmFwKHRva2VuLmxpdCwgJ251bGwnKTtcblx0XG5cdCAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuXHQgICAgICAgIHJldHVybiB3cmFwKHRva2VuLmxpdCwgU3RyaW5nKHZhbHVlKSk7XG5cdFxuXHQgICAgICBjYXNlICdvYmplY3QnOlxuXHQgICAgICAgIC8vIElmIHRoZSB0eXBlIGlzICdvYmplY3QnLCB3ZSBtaWdodCBiZSBkZWFsaW5nIHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5IG9yXG5cdCAgICAgICAgLy8gbnVsbC5cblx0XG5cdCAgICAgICAgLy8gRHVlIHRvIGEgc3BlY2lmaWNhdGlvbiBibHVuZGVyIGluIEVDTUFTY3JpcHQsIHR5cGVvZiBudWxsIGlzICdvYmplY3QnLFxuXHQgICAgICAgIC8vIHNvIHdhdGNoIG91dCBmb3IgdGhhdCBjYXNlLlxuXHRcblx0ICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm4gd3JhcCh0b2tlbi5saXQsICdudWxsJyk7XG5cdFxuXHQgICAgICAgIHZhciBjb21tZW50czsgLy8gd2hpdGVzcGFjZSAmIGNvbW1lbnRzXG5cdCAgICAgICAgaWYgKGtlZXBDb21tZW50cykgY29tbWVudHMgPSBjb21tb24uZ2V0Q29tbWVudCh2YWx1ZSk7XG5cdFxuXHQgICAgICAgIHZhciBpc0FycmF5ID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XSc7XG5cdFxuXHQgICAgICAgIC8vIE1ha2UgYW4gYXJyYXkgdG8gaG9sZCB0aGUgcGFydGlhbCByZXN1bHRzIG9mIHN0cmluZ2lmeWluZyB0aGlzIG9iamVjdCB2YWx1ZS5cblx0ICAgICAgICB2YXIgbWluZCA9IGdhcDtcblx0ICAgICAgICBnYXAgKz0gaW5kZW50O1xuXHQgICAgICAgIHZhciBlb2xNaW5kID0gZW9sICsgbWluZDtcblx0ICAgICAgICB2YXIgZW9sR2FwID0gZW9sICsgZ2FwO1xuXHQgICAgICAgIHZhciBwcmVmaXggPSBub0luZGVudCB8fCBicmFjZXNTYW1lTGluZSA/ICcnIDogZW9sTWluZDtcblx0ICAgICAgICB2YXIgcGFydGlhbCA9IFtdO1xuXHRcblx0ICAgICAgICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG5cdCAgICAgICAgdmFyIGssIHY7IC8vIGtleSwgdmFsdWVcblx0ICAgICAgICB2YXIgYywgY2E7XG5cdFxuXHQgICAgICAgIGlmIChpc0FycmF5KSB7XG5cdCAgICAgICAgICAvLyBUaGUgdmFsdWUgaXMgYW4gYXJyYXkuIFN0cmluZ2lmeSBldmVyeSBlbGVtZW50LiBVc2UgbnVsbCBhcyBhIHBsYWNlaG9sZGVyXG5cdCAgICAgICAgICAvLyBmb3Igbm9uLUpTT04gdmFsdWVzLlxuXHRcblx0ICAgICAgICAgIGZvciAoaSA9IDAsIGxlbmd0aCA9IHZhbHVlLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgICAgICAgIGlmIChjb21tZW50cykge1xuXHQgICAgICAgICAgICAgIGMgPSBjb21tZW50cy5hW2ldfHxbXTtcblx0ICAgICAgICAgICAgICBjYSA9IGNvbW1lbnRPblRoaXNMaW5lKGNbMV0pO1xuXHQgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChtYWtlQ29tbWVudChjWzBdLCBcIlxcblwiKSArIGVvbEdhcCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgcGFydGlhbC5wdXNoKHN0cih2YWx1ZVtpXSwgY29tbWVudHMgPyBjYSA6IGZhbHNlLCB0cnVlKSB8fCB3cmFwKHRva2VuLmxpdCwgJ251bGwnKSk7XG5cdCAgICAgICAgICAgIGlmIChjb21tZW50cyAmJiBjWzFdKSBwYXJ0aWFsLnB1c2gobWFrZUNvbW1lbnQoY1sxXSwgY2EgPyBcIiBcIiA6IFwiXFxuXCIsIGNhKSk7XG5cdCAgICAgICAgICB9XG5cdFxuXHQgICAgICAgICAgaWYgKGNvbW1lbnRzKSB7XG5cdCAgICAgICAgICAgIGlmIChsZW5ndGggPT09IDApIHtcblx0ICAgICAgICAgICAgICAvLyB3aGVuIGVtcHR5XG5cdCAgICAgICAgICAgICAgcGFydGlhbC5wdXNoKChjb21tZW50cy5lID8gbWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgXCJcXG5cIikgOiBcIlwiKSArIGVvbE1pbmQpO1xuXHQgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIGVsc2UgcGFydGlhbC5wdXNoKGVvbE1pbmQpO1xuXHQgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgIC8vIEpvaW4gYWxsIG9mIHRoZSBlbGVtZW50cyB0b2dldGhlciwgc2VwYXJhdGVkIHdpdGggbmV3bGluZSwgYW5kIHdyYXAgdGhlbSBpblxuXHQgICAgICAgICAgLy8gYnJhY2tldHMuXG5cdFxuXHQgICAgICAgICAgaWYgKGNvbW1lbnRzKSB2ID0gcHJlZml4ICsgd3JhcCh0b2tlbi5hcnIsIHBhcnRpYWwuam9pbignJykpO1xuXHQgICAgICAgICAgZWxzZSBpZiAocGFydGlhbC5sZW5ndGggPT09IDApIHYgPSB3cmFwKHRva2VuLmFyciwgJycpO1xuXHQgICAgICAgICAgZWxzZSB2ID0gcHJlZml4ICsgd3JhcCh0b2tlbi5hcnIsIGVvbEdhcCArIHBhcnRpYWwuam9pbihlb2xHYXApICsgZW9sTWluZCk7XG5cdCAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgIC8vIE90aGVyd2lzZSwgaXRlcmF0ZSB0aHJvdWdoIGFsbCBvZiB0aGUga2V5cyBpbiB0aGUgb2JqZWN0LlxuXHRcblx0ICAgICAgICAgIGlmIChjb21tZW50cykge1xuXHQgICAgICAgICAgICB2YXIga2V5cyA9IGNvbW1lbnRzLm8uc2xpY2UoKTtcblx0ICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG5cdCAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykgJiYga2V5cy5pbmRleE9mKGspIDwgMClcblx0ICAgICAgICAgICAgICAgIGtleXMucHVzaChrKTtcblx0ICAgICAgICAgICAgfVxuXHRcblx0ICAgICAgICAgICAgZm9yIChpID0gMCwgbGVuZ3RoID0ga2V5cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuXHQgICAgICAgICAgICAgIGsgPSBrZXlzW2ldO1xuXHQgICAgICAgICAgICAgIGMgPSBjb21tZW50cy5jW2tdfHxbXTtcblx0ICAgICAgICAgICAgICBjYSA9IGNvbW1lbnRPblRoaXNMaW5lKGNbMV0pO1xuXHQgICAgICAgICAgICAgIHBhcnRpYWwucHVzaChtYWtlQ29tbWVudChjWzBdLCBcIlxcblwiKSArIGVvbEdhcCk7XG5cdFxuXHQgICAgICAgICAgICAgIHYgPSBzdHIodmFsdWVba10sIGNhKTtcblx0ICAgICAgICAgICAgICBpZiAodikgcGFydGlhbC5wdXNoKHF1b3RlS2V5KGspICsgdG9rZW4uY29sICsgKHN0YXJ0c1dpdGhOTCh2KSA/ICcnIDogJyAnKSArIHYpO1xuXHQgICAgICAgICAgICAgIGlmIChjb21tZW50cyAmJiBjWzFdKSBwYXJ0aWFsLnB1c2gobWFrZUNvbW1lbnQoY1sxXSwgY2EgPyBcIiBcIiA6IFwiXFxuXCIsIGNhKSk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuXHQgICAgICAgICAgICAgIC8vIHdoZW4gZW1wdHlcblx0ICAgICAgICAgICAgICBwYXJ0aWFsLnB1c2goKGNvbW1lbnRzLmUgPyBtYWtlQ29tbWVudChjb21tZW50cy5lWzBdLCBcIlxcblwiKSA6IFwiXCIpICsgZW9sTWluZCk7XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgICAgZWxzZSBwYXJ0aWFsLnB1c2goZW9sTWluZCk7XG5cdFxuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgZm9yIChrIGluIHZhbHVlKSB7XG5cdCAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwgaykpIHtcblx0ICAgICAgICAgICAgICAgIHYgPSBzdHIodmFsdWVba10pO1xuXHQgICAgICAgICAgICAgICAgaWYgKHYpIHBhcnRpYWwucHVzaChxdW90ZUtleShrKSArIHRva2VuLmNvbCArIChzdGFydHNXaXRoTkwodikgPyAnJyA6ICcgJykgKyB2KTtcblx0ICAgICAgICAgICAgICB9XG5cdCAgICAgICAgICAgIH1cblx0ICAgICAgICAgIH1cblx0XG5cdCAgICAgICAgICAvLyBKb2luIGFsbCBvZiB0aGUgbWVtYmVyIHRleHRzIHRvZ2V0aGVyLCBzZXBhcmF0ZWQgd2l0aCBuZXdsaW5lc1xuXHQgICAgICAgICAgaWYgKHBhcnRpYWwubGVuZ3RoID09PSAwKSB7XG5cdCAgICAgICAgICAgIHYgPSB3cmFwKHRva2VuLm9iaiwgJycpO1xuXHQgICAgICAgICAgfSBlbHNlIHtcblx0ICAgICAgICAgICAgLy8gYW5kIHdyYXAgdGhlbSBpbiBicmFjZXNcblx0ICAgICAgICAgICAgaWYgKGNvbW1lbnRzKSB2ID0gcHJlZml4ICsgd3JhcCh0b2tlbi5vYmosIHBhcnRpYWwuam9pbignJykpO1xuXHQgICAgICAgICAgICBlbHNlIHYgPSBwcmVmaXggKyB3cmFwKHRva2VuLm9iaiwgZW9sR2FwICsgcGFydGlhbC5qb2luKGVvbEdhcCkgKyBlb2xNaW5kKTtcblx0ICAgICAgICAgIH1cblx0ICAgICAgICB9XG5cdFxuXHQgICAgICAgIGdhcCA9IG1pbmQ7XG5cdCAgICAgICAgcmV0dXJuIHY7XG5cdCAgICB9XG5cdCAgfVxuXHRcblx0ICBmdW5jdGlvbiBoanNvblN0cmluZ2lmeSh2YWx1ZSwgb3B0KSB7XG5cdCAgICB2YXIgaSwgc3BhY2U7XG5cdCAgICB2YXIgZHNmRGVmID0gbnVsbDtcblx0XG5cdCAgICBlb2wgPSBjb21tb24uRU9MO1xuXHQgICAgaW5kZW50ID0gJyAgJztcblx0ICAgIGtlZXBDb21tZW50cyA9IGZhbHNlO1xuXHQgICAgYnJhY2VzU2FtZUxpbmUgPSBmYWxzZTtcblx0ICAgIHF1b3RlQWx3YXlzID0gZmFsc2U7XG5cdFxuXHQgICAgaWYgKG9wdCAmJiB0eXBlb2Ygb3B0ID09PSAnb2JqZWN0Jykge1xuXHQgICAgICBpZiAob3B0LmVvbCA9PT0gJ1xcbicgfHwgb3B0LmVvbCA9PT0gJ1xcclxcbicpIGVvbCA9IG9wdC5lb2w7XG5cdCAgICAgIHNwYWNlID0gb3B0LnNwYWNlO1xuXHQgICAgICBrZWVwQ29tbWVudHMgPSBvcHQua2VlcFdzYztcblx0ICAgICAgYnJhY2VzU2FtZUxpbmUgPSBvcHQuYnJhY2VzU2FtZUxpbmU7XG5cdCAgICAgIHF1b3RlQWx3YXlzID0gb3B0LnF1b3RlcyA9PT0gJ2Fsd2F5cyc7XG5cdCAgICAgIGRzZkRlZiA9IG9wdC5kc2Y7XG5cdFxuXHQgICAgICBpZiAob3B0LmNvbG9ycyA9PT0gdHJ1ZSkge1xuXHQgICAgICAgIHRva2VuID0ge1xuXHQgICAgICAgICAgb2JqOiAgWyAnXFx4MWJbMzA7MW17XFx4MWJbMG0nLCAnXFx4MWJbMzA7MW19XFx4MWJbMG0nIF0sXG5cdCAgICAgICAgICBhcnI6ICBbICdcXHgxYlszMDsxbVtcXHgxYlswbScsICdcXHgxYlszMDsxbV1cXHgxYlswbScgXSxcblx0ICAgICAgICAgIGtleTogIFsgJ1xceDFiWzMzbScsICAnXFx4MWJbMG0nIF0sXG5cdCAgICAgICAgICBxa2V5OiBbICdcXHgxYlszM21cIicsICdcIlxceDFiWzBtJyBdLFxuXHQgICAgICAgICAgY29sOiAgWyAnXFx4MWJbMzdtOlxceDFiWzBtJyBdLFxuXHQgICAgICAgICAgc3RyOiAgWyAnXFx4MWJbMzc7MW0nLCAnXFx4MWJbMG0nIF0sXG5cdCAgICAgICAgICBxc3RyOiBbICdcXHgxYlszNzsxbVwiJywgJ1wiXFx4MWJbMG0nIF0sXG5cdCAgICAgICAgICBtc3RyOiBbIFwiXFx4MWJbMzc7MW0nJydcIiwgXCInJydcXHgxYlswbVwiIF0sXG5cdCAgICAgICAgICBudW06ICBbICdcXHgxYlszNjsxbScsICdcXHgxYlswbScgXSxcblx0ICAgICAgICAgIGxpdDogIFsgJ1xceDFiWzM2bScsICdcXHgxYlswbScgXSxcblx0ICAgICAgICAgIGRzZjogIFsgJ1xceDFiWzM3bScsICdcXHgxYlswbScgXSxcblx0ICAgICAgICAgIGVzYzogIFsgJ1xceDFiWzMxbVxcXFwnLCAnXFx4MWJbMG0nIF0sXG5cdCAgICAgICAgICB1bmk6ICBbICdcXHgxYlszMW1cXFxcdScsICdcXHgxYlswbScgXSxcblx0ICAgICAgICAgIHJlbTogIFsgJ1xceDFiWzMwOzFtJywgJ1xceDFiWzBtJyBdLFxuXHQgICAgICAgIH07XG5cdCAgICAgIH1cblx0ICAgIH1cblx0XG5cdCAgICBydW5Ec2YgPSBkc2YubG9hZERzZihkc2ZEZWYsICdzdHJpbmdpZnknKTtcblx0XG5cdCAgICAvLyBJZiB0aGUgc3BhY2UgcGFyYW1ldGVyIGlzIGEgbnVtYmVyLCBtYWtlIGFuIGluZGVudCBzdHJpbmcgY29udGFpbmluZyB0aGF0XG5cdCAgICAvLyBtYW55IHNwYWNlcy4gSWYgaXQgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgdXNlZCBhcyB0aGUgaW5kZW50IHN0cmluZy5cblx0XG5cdCAgICBpZiAodHlwZW9mIHNwYWNlID09PSAnbnVtYmVyJykge1xuXHQgICAgICBpbmRlbnQgPSAnJztcblx0ICAgICAgZm9yIChpID0gMDsgaSA8IHNwYWNlOyBpKyspIGluZGVudCArPSAnICc7XG5cdCAgICB9IGVsc2UgaWYgKHR5cGVvZiBzcGFjZSA9PT0gJ3N0cmluZycpIHtcblx0ICAgICAgaW5kZW50ID0gc3BhY2U7XG5cdCAgICB9XG5cdFxuXHQgICAgdmFyIHJlcyA9IFwiXCI7XG5cdCAgICB2YXIgY29tbWVudHMgPSBrZWVwQ29tbWVudHMgPyBjb21tZW50cyA9IChjb21tb24uZ2V0Q29tbWVudCh2YWx1ZSkgfHwge30pLnIgOiBudWxsO1xuXHQgICAgaWYgKGNvbW1lbnRzICYmIGNvbW1lbnRzWzBdKSByZXMgPSBjb21tZW50c1swXSArICdcXG4nO1xuXHRcblx0ICAgIC8vIGdldCB0aGUgcmVzdWx0IG9mIHN0cmluZ2lmeWluZyB0aGUgdmFsdWUuXG5cdCAgICByZXMgKz0gc3RyKHZhbHVlLCBudWxsLCB0cnVlLCB0cnVlKTtcblx0XG5cdCAgICBpZiAoY29tbWVudHMpIHJlcyArPSBjb21tZW50c1sxXXx8XCJcIjtcblx0XG5cdCAgICByZXR1cm4gcmVzO1xuXHQgIH1cblx0XG5cdCAgcmV0dXJuIGhqc29uU3RyaW5naWZ5KCR2YWx1ZSwgJG9wdCk7XG5cdH07XG5cblxuLyoqKi8gfSxcbi8qIDE2ICovXG4vKioqLyBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXHQvKiBIanNvbiBodHRwOi8vaGpzb24ub3JnICovXG5cdC8qIGpzbGludCBub2RlOiB0cnVlICovXG5cdFwidXNlIHN0cmljdFwiO1xuXHRcblx0dmFyIGNvbW1vbj1fX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcblx0XG5cdGZ1bmN0aW9uIG1ha2VDb21tZW50KGIsIGEsIHgpIHtcblx0ICB2YXIgYztcblx0ICBpZiAoYikgYz17IGI6IGIgfTtcblx0ICBpZiAoYSkgKGM9Y3x8e30pLmE9YTtcblx0ICBpZiAoeCkgKGM9Y3x8e30pLng9eDtcblx0ICByZXR1cm4gYztcblx0fVxuXHRcblx0ZnVuY3Rpb24gZXh0cmFjdENvbW1lbnRzKHZhbHVlLCByb290KSB7XG5cdFxuXHQgIGlmICh2YWx1ZT09PW51bGwgfHwgdHlwZW9mIHZhbHVlIT09J29iamVjdCcpIHJldHVybjtcblx0ICB2YXIgY29tbWVudHM9Y29tbW9uLmdldENvbW1lbnQodmFsdWUpO1xuXHQgIGlmIChjb21tZW50cykgY29tbW9uLnJlbW92ZUNvbW1lbnQodmFsdWUpO1xuXHRcblx0ICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG5cdCAgdmFyIGFueSwgcmVzO1xuXHQgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmFwcGx5KHZhbHVlKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuXHQgICAgcmVzPXsgYTogW10gfTtcblx0ICAgIGZvciAoaT0wLCBsZW5ndGg9dmFsdWUubGVuZ3RoOyBpPGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIGlmIChzYXZlQ29tbWVudChyZXMuYSwgaSwgY29tbWVudHMuYVtpXSwgZXh0cmFjdENvbW1lbnRzKHZhbHVlW2ldKSkpXG5cdCAgICAgICAgYW55PXRydWU7XG5cdCAgICB9XG5cdCAgICBpZiAoIWFueSAmJiBjb21tZW50cy5lKXtcblx0ICAgICAgcmVzLmU9bWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgY29tbWVudHMuZVsxXSk7XG5cdCAgICAgIGFueT10cnVlO1xuXHQgICAgfVxuXHQgIH0gZWxzZSB7XG5cdCAgICByZXM9eyBzOiB7fSB9O1xuXHRcblx0ICAgIC8vIGdldCBrZXkgb3JkZXIgKGNvbW1lbnRzIGFuZCBjdXJyZW50KVxuXHQgICAgdmFyIGtleXMsIGN1cnJlbnRLZXlzPU9iamVjdC5rZXlzKHZhbHVlKTtcblx0ICAgIGlmIChjb21tZW50cyAmJiBjb21tZW50cy5vKSB7XG5cdCAgICAgIGtleXM9W107XG5cdCAgICAgIGNvbW1lbnRzLm8uY29uY2F0KGN1cnJlbnRLZXlzKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHQgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIGtleSkgJiYga2V5cy5pbmRleE9mKGtleSk8MClcblx0ICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuXHQgICAgICB9KTtcblx0ICAgIH0gZWxzZSBrZXlzPWN1cnJlbnRLZXlzO1xuXHQgICAgcmVzLm89a2V5cztcblx0XG5cdCAgICAvLyBleHRyYWN0IGNvbW1lbnRzXG5cdCAgICBmb3IgKGk9MCwgbGVuZ3RoPWtleXMubGVuZ3RoOyBpPGxlbmd0aDsgaSsrKSB7XG5cdCAgICAgIHZhciBrZXk9a2V5c1tpXTtcblx0ICAgICAgaWYgKHNhdmVDb21tZW50KHJlcy5zLCBrZXksIGNvbW1lbnRzLmNba2V5XSwgZXh0cmFjdENvbW1lbnRzKHZhbHVlW2tleV0pKSlcblx0ICAgICAgICBhbnk9dHJ1ZTtcblx0ICAgIH1cblx0ICAgIGlmICghYW55ICYmIGNvbW1lbnRzLmUpIHtcblx0ICAgICAgcmVzLmU9bWFrZUNvbW1lbnQoY29tbWVudHMuZVswXSwgY29tbWVudHMuZVsxXSk7XG5cdCAgICAgIGFueT10cnVlO1xuXHQgICAgfVxuXHQgIH1cblx0XG5cdCAgaWYgKHJvb3QgJiYgY29tbWVudHMgJiYgY29tbWVudHMucikge1xuXHQgICAgcmVzLnI9bWFrZUNvbW1lbnQoY29tbWVudHMuclswXSwgY29tbWVudHMuclsxXSk7XG5cdCAgfVxuXHRcblx0ICByZXR1cm4gYW55P3Jlczp1bmRlZmluZWQ7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIG1lcmdlU3RyKCkge1xuXHQgIHZhciByZXM9XCJcIjtcblx0ICBbXS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBmdW5jdGlvbihjKSB7XG5cdCAgICBpZiAoYyAmJiBjLnRyaW0oKSE9PVwiXCIpIHtcblx0ICAgICAgaWYgKHJlcykgcmVzKz1cIjsgXCI7XG5cdCAgICAgIHJlcys9Yy50cmltKCk7XG5cdCAgICB9XG5cdCAgfSk7XG5cdCAgcmV0dXJuIHJlcztcblx0fVxuXHRcblx0ZnVuY3Rpb24gbWVyZ2VDb21tZW50cyhjb21tZW50cywgdmFsdWUpIHtcblx0ICB2YXIgZHJvcHBlZD1bXTtcblx0ICBtZXJnZShjb21tZW50cywgdmFsdWUsIGRyb3BwZWQsIFtdKTtcblx0XG5cdCAgLy8gYXBwZW5kIGRyb3BwZWQgY29tbWVudHM6XG5cdCAgaWYgKGRyb3BwZWQubGVuZ3RoPjApIHtcblx0ICAgIHZhciB0ZXh0PXJvb3RDb21tZW50KHZhbHVlLCBudWxsLCAxKTtcblx0ICAgIHRleHQrPVwiXFxuIyBPcnBoYW5lZCBjb21tZW50czpcXG5cIjtcblx0ICAgIGRyb3BwZWQuZm9yRWFjaChmdW5jdGlvbihjKSB7XG5cdCAgICAgIHRleHQrPShcIiMgXCIrYy5wYXRoLmpvaW4oJy8nKStcIjogXCIrbWVyZ2VTdHIoYy5iLCBjLmEsIGMuZSkpLnJlcGxhY2UoXCJcXG5cIiwgXCJcXFxcbiBcIikrXCJcXG5cIjtcblx0ICAgIH0pO1xuXHQgICAgcm9vdENvbW1lbnQodmFsdWUsIHRleHQsIDEpO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gc2F2ZUNvbW1lbnQocmVzLCBrZXksIGl0ZW0sIGNvbCkge1xuXHQgIHZhciBjPW1ha2VDb21tZW50KGl0ZW0/aXRlbVswXTp1bmRlZmluZWQsIGl0ZW0/aXRlbVsxXTp1bmRlZmluZWQsIGNvbCk7XG5cdCAgaWYgKGMpIHJlc1trZXldPWM7XG5cdCAgcmV0dXJuIGM7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGRyb3BwZWRDb21tZW50KHBhdGgsIGMpIHtcblx0ICB2YXIgcmVzPW1ha2VDb21tZW50KGMuYiwgYy5hKTtcblx0ICByZXMucGF0aD1wYXRoO1xuXHQgIHJldHVybiByZXM7XG5cdH1cblx0XG5cdGZ1bmN0aW9uIGRyb3BBbGwoY29tbWVudHMsIGRyb3BwZWQsIHBhdGgpIHtcblx0XG5cdCAgaWYgKCFjb21tZW50cykgcmV0dXJuO1xuXHRcblx0ICB2YXIgaSwgbGVuZ3RoOyAvLyBsb29wXG5cdFxuXHQgIGlmIChjb21tZW50cy5hKSB7XG5cdFxuXHQgICAgZm9yIChpPTAsIGxlbmd0aD1jb21tZW50cy5hLmxlbmd0aDsgaTxsZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIga3BhdGg9cGF0aC5zbGljZSgpLmNvbmNhdChbaV0pO1xuXHQgICAgICB2YXIgYz1jb21tZW50cy5hW2ldO1xuXHQgICAgICBpZiAoYykge1xuXHQgICAgICAgIGRyb3BwZWQucHVzaChkcm9wcGVkQ29tbWVudChrcGF0aCwgYykpO1xuXHQgICAgICAgIGRyb3BBbGwoYy54LCBkcm9wcGVkLCBrcGF0aCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICB9IGVsc2UgaWYgKGNvbW1lbnRzLm8pIHtcblx0XG5cdCAgICBjb21tZW50cy5vLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG5cdCAgICAgIHZhciBrcGF0aD1wYXRoLnNsaWNlKCkuY29uY2F0KFtrZXldKTtcblx0ICAgICAgdmFyIGM9Y29tbWVudHMuc1trZXldO1xuXHQgICAgICBpZiAoYykge1xuXHQgICAgICAgIGRyb3BwZWQucHVzaChkcm9wcGVkQ29tbWVudChrcGF0aCwgYykpO1xuXHQgICAgICAgIGRyb3BBbGwoYy54LCBkcm9wcGVkLCBrcGF0aCk7XG5cdCAgICAgIH1cblx0ICAgIH0pO1xuXHQgIH1cblx0XG5cdCAgaWYgKGNvbW1lbnRzLmUpXG5cdCAgICBkcm9wcGVkLnB1c2goZHJvcHBlZENvbW1lbnQocGF0aCwgY29tbWVudHMuZSkpO1xuXHR9XG5cdFxuXHRmdW5jdGlvbiBtZXJnZShjb21tZW50cywgdmFsdWUsIGRyb3BwZWQsIHBhdGgpIHtcblx0XG5cdCAgaWYgKCFjb21tZW50cykgcmV0dXJuO1xuXHQgIGlmICh2YWx1ZT09PW51bGwgfHwgdHlwZW9mIHZhbHVlIT09J29iamVjdCcpIHtcblx0ICAgIGRyb3BBbGwoY29tbWVudHMsIGRyb3BwZWQsIHBhdGgpO1xuXHQgICAgcmV0dXJuO1xuXHQgIH1cblx0XG5cdCAgdmFyIGksIGxlbmd0aDsgLy8gbG9vcFxuXHQgIHZhciBzZXRDb21tZW50cz1jb21tb24uY3JlYXRlQ29tbWVudCh2YWx1ZSk7XG5cdFxuXHQgIGlmIChwYXRoLmxlbmd0aD09PTAgJiYgY29tbWVudHMucilcblx0ICAgIHNldENvbW1lbnRzLnI9W2NvbW1lbnRzLnIuYiwgY29tbWVudHMuci5hXTtcblx0XG5cdCAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG5cdCAgICBzZXRDb21tZW50cy5hPVtdO1xuXHQgICAgZm9yIChpPTAsIGxlbmd0aD0oY29tbWVudHMuYXx8W10pLmxlbmd0aDsgaTxsZW5ndGg7IGkrKykge1xuXHQgICAgICB2YXIga3BhdGg9cGF0aC5zbGljZSgpLmNvbmNhdChbaV0pO1xuXHQgICAgICB2YXIgYz1jb21tZW50cy5hW2ldO1xuXHQgICAgICBpZiAoIWMpIGNvbnRpbnVlO1xuXHQgICAgICBpZiAoaTx2YWx1ZS5sZW5ndGgpIHtcblx0ICAgICAgICBzZXRDb21tZW50cy5hLnB1c2goW2MuYiwgYy5hXSk7XG5cdCAgICAgICAgbWVyZ2UoYy54LCB2YWx1ZVtpXSwgZHJvcHBlZCwga3BhdGgpO1xuXHQgICAgICB9IGVsc2Uge1xuXHQgICAgICAgIGRyb3BwZWQucHVzaChkcm9wcGVkQ29tbWVudChrcGF0aCwgYykpO1xuXHQgICAgICAgIGRyb3BBbGwoYy54LCBkcm9wcGVkLCBrcGF0aCk7XG5cdCAgICAgIH1cblx0ICAgIH1cblx0ICAgIGlmIChpPT09MCAmJiBjb21tZW50cy5lKSBzZXRDb21tZW50cy5lPVtjb21tZW50cy5lLmIsIGNvbW1lbnRzLmUuYV07XG5cdCAgfSBlbHNlIHtcblx0ICAgIHNldENvbW1lbnRzLmM9e307XG5cdCAgICBzZXRDb21tZW50cy5vPVtdO1xuXHQgICAgKGNvbW1lbnRzLm98fFtdKS5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuXHQgICAgICB2YXIga3BhdGg9cGF0aC5zbGljZSgpLmNvbmNhdChba2V5XSk7XG5cdCAgICAgIHZhciBjPWNvbW1lbnRzLnNba2V5XTtcblx0ICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh2YWx1ZSwga2V5KSkge1xuXHQgICAgICAgIHNldENvbW1lbnRzLm8ucHVzaChrZXkpO1xuXHQgICAgICAgIGlmIChjKSB7XG5cdCAgICAgICAgICBzZXRDb21tZW50cy5jW2tleV09W2MuYiwgYy5hXTtcblx0ICAgICAgICAgIG1lcmdlKGMueCwgdmFsdWVba2V5XSwgZHJvcHBlZCwga3BhdGgpO1xuXHQgICAgICAgIH1cblx0ICAgICAgfSBlbHNlIGlmIChjKSB7XG5cdCAgICAgICAgZHJvcHBlZC5wdXNoKGRyb3BwZWRDb21tZW50KGtwYXRoLCBjKSk7XG5cdCAgICAgICAgZHJvcEFsbChjLngsIGRyb3BwZWQsIGtwYXRoKTtcblx0ICAgICAgfVxuXHQgICAgfSk7XG5cdCAgICBpZiAoY29tbWVudHMuZSkgc2V0Q29tbWVudHMuZT1bY29tbWVudHMuZS5iLCBjb21tZW50cy5lLmFdO1xuXHQgIH1cblx0fVxuXHRcblx0ZnVuY3Rpb24gcm9vdENvbW1lbnQodmFsdWUsIHNldFRleHQsIGhlYWRlcikge1xuXHQgIHZhciBjb21tZW50PWNvbW1vbi5jcmVhdGVDb21tZW50KHZhbHVlLCBjb21tb24uZ2V0Q29tbWVudCh2YWx1ZSkpO1xuXHQgIGlmICghY29tbWVudC5yKSBjb21tZW50LnI9W1wiXCIsIFwiXCJdO1xuXHQgIGlmIChzZXRUZXh0IHx8IHNldFRleHQ9PT1cIlwiKSBjb21tZW50LnJbaGVhZGVyXT1jb21tb24uZm9yY2VDb21tZW50KHNldFRleHQpO1xuXHQgIHJldHVybiBjb21tZW50LnJbaGVhZGVyXXx8XCJcIjtcblx0fVxuXHRcblx0bW9kdWxlLmV4cG9ydHM9e1xuXHQgIGV4dHJhY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBleHRyYWN0Q29tbWVudHModmFsdWUsIHRydWUpOyB9LFxuXHQgIG1lcmdlOiBtZXJnZUNvbW1lbnRzLFxuXHQgIGhlYWRlcjogZnVuY3Rpb24odmFsdWUsIHNldFRleHQpIHsgcmV0dXJuIHJvb3RDb21tZW50KHZhbHVlLCBzZXRUZXh0LCAwKTsgfSxcblx0ICBmb290ZXI6IGZ1bmN0aW9uKHZhbHVlLCBzZXRUZXh0KSB7IHJldHVybiByb290Q29tbWVudCh2YWx1ZSwgc2V0VGV4dCwgMSk7IH0sXG5cdH07XG5cblxuLyoqKi8gfVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5kbFluQmhZMnM2THk4dmQyVmljR0ZqYXk5MWJtbDJaWEp6WVd4TmIyUjFiR1ZFWldacGJtbDBhVzl1SWl3aWQyVmljR0ZqYXpvdkx5OTNaV0p3WVdOckwySnZiM1J6ZEhKaGNDQXhOVGs1TnpoaU1ERXpZakU0T1dVNE16TTBNQ0lzSW5kbFluQmhZMnM2THk4dkxpOXpjbU12VFUxaGNFSmhjMlZEYkdGemN5NXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMMlY0ZEdWdVpDOXBibVJsZUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wzRjFaWEo1TFhOMGNtbHVaeTlwYm1SbGVDNXFjeUlzSW5kbFluQmhZMnM2THk4dkxpOStMM04wY21samRDMTFjbWt0Wlc1amIyUmxMMmx1WkdWNExtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZiMkpxWldOMExXRnpjMmxuYmk5cGJtUmxlQzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDNkb1lYUjNaeTFtWlhSamFDOW1aWFJqYUM1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyVnpOaTF3Y205dGFYTmxMMlJwYzNRdlpYTTJMWEJ5YjIxcGMyVXVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTl3Y205alpYTnpMMkp5YjNkelpYSXVhbk1pTENKM1pXSndZV05yT2k4dkwzWmxjblI0SUNocFoyNXZjbVZrS1NJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJocWMyOXVMMnhwWWk5b2FuTnZiaTVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJocWMyOXVMMnhwWWk5b2FuTnZiaTFqYjIxdGIyNHVhbk1pTENKM1pXSndZV05yT2k4dkx5NHZmaTl2Y3kxaWNtOTNjMlZ5YVdaNUwySnliM2R6WlhJdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOW9hbk52Ymk5c2FXSXZhR3B6YjI0dGRtVnljMmx2Ymk1cWN5SXNJbmRsWW5CaFkyczZMeTh2TGk5K0wyaHFjMjl1TDJ4cFlpOW9hbk52Ymkxd1lYSnpaUzVxY3lJc0luZGxZbkJoWTJzNkx5OHZMaTkrTDJocWMyOXVMMnhwWWk5b2FuTnZiaTFrYzJZdWFuTWlMQ0ozWldKd1lXTnJPaTh2THk0dmZpOW9hbk52Ymk5c2FXSXZhR3B6YjI0dGMzUnlhVzVuYVdaNUxtcHpJaXdpZDJWaWNHRmphem92THk4dUwzNHZhR3B6YjI0dmJHbGlMMmhxYzI5dUxXTnZiVzFsYm5SekxtcHpJbDBzSW01aGJXVnpJanBiSWsxTlFYQkNZWE5sUTJ4aGMzTWlMQ0prYVhKRVpXWmhkV3gwVDNCMGFXOXVjeUlzSW1OdmJuTjBjblZqZEc5eUlpd2libUZ0WlNJc0ltUnBja04xYzNSdmJVOXdkR2x2Ym5NaUxDSmZiM0IwYVc5dWN5SXNJbVJsWm1GMWJIUk1ZVzVuUTI5a1pTSXNJbTVoZG1sbllYUnZjaUlzSW14aGJtZDFZV2RsSWl3aVluSnZkM05sY2t4aGJtZDFZV2RsSWl3aWIzQjBhVzl1Y3lJc0lteGhibWRQWW1vaUxDSnNZVzVuSWl3aWJHRnVaMFY0YkhWa2FXNW5SR2xoYkdWamRITWlMQ0puWlhSTVlXNW5RMjlrWlNJc0luTndiR2wwSWl3aWMzVndjRzl5ZEdWa1RHRnVaM01pTENKUFltcGxZM1FpTENKclpYbHpJaXdpYkdGdVowTnZaR1VpTENKcGJtUmxlRTltSWl3aVkyOXVjMjlzWlNJc0luZGhjbTRpTENKc1pXNW5kR2dpTENKM2FXNWtiM2NpTENKallrdHZjblFpTENKblpYUlFjbTltYVd4bElpd2laR1ZtWVhWc2RFOXdkR2x2Ym5OT1lXMWxJaXdpY0dGMGFGUnZSR1ZtWVhWc2RFOXdkR2x2Ym5NaUxDSnlaWE52YkhabElpd2ljbVZxWldOMElpd2labVYwWTJnaUxDSjBhR1Z1SWl3aWNtVnpjRzl1YzJVaUxDSjBaWGgwSWl3aWNHRnljMlVpTENKallYUmphQ0lzSW1WeWNtOXlJaXdpY0hKdlptbHNaVTVoYldVaUxDSmZaMlYwVUhKdlptbHNaVTVoYldVaUxDSmpkWE4wYjIxUGNIUnBiMjV6VG1GdFpTSXNJbkJoZEdoVWIwTjFjM1J2YlU5d2RHbHZibk1pTENKaGJHd2lMQ0pmWm1WMFkyaEVaV1poZFd4MFQzQjBhVzl1Y3lJc0lsOW1aWFJqYUVOMWMzUnZiVTl3ZEdsdmJuTWlMQ0p2Y0hScGIyNXpRWEp5SWl3aWJHOW5JaXdpWDJabGRHTm9UM0IwYVc5dWN5SmRMQ0p0WVhCd2FXNW5jeUk2SWtGQlFVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNRMEZCUXp0QlFVTkVMRTg3UVVOV1FUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3gxUWtGQlpUdEJRVU5tTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96czdRVUZIUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdPenM3TzBGRGRFTkJPenM3T3pzN096dEJRVVZCT3pzN08wRkJRMEU3T3pzN1FVRkRRVHM3UVVGRFFUczdPenRCUVVOQk96czdPenM3T3p0TFFVVnhRa0VzWVR0QlFVdEpPenRCUVVZNFF6dEJRVWwwUlN3eVFrRkJZenRCUVVGQk96dEJRVUZCTEZGQlRHUkRMR2xDUVV0akxFZEJURTBzWVVGQllTeExRVUZMUXl4WFFVRk1MRU5CUVdsQ1F5eEpRVUU1UWl4SFFVRnhReXhYUVVzelF6dEJRVUZCTEZGQlNtUkRMR2RDUVVsakxFZEJTa3NzWVVGQllTeExRVUZMUml4WFFVRk1MRU5CUVdsQ1F5eEpRVUU1UWl4SFFVRnhReXhYUVVreFF6dEJRVUZCTEZGQlNHUkZMRkZCUjJNc1IwRklTQ3hKUVVkSE8wRkJRVUVzVVVGR1pFTXNaVUZGWXl4SFFVWkpMRWxCUlVvN1FVRkJSVHM3UVVGRmFFSTdPenM3UVVGTWFVSTdPenM3TzJsRFFWTklPMEZCUTJJc1YwRkJUME1zVlVGQlZVTXNVVUZCVml4SlFVRnpRa1FzVlVGQlZVVXNaVUZCZGtNc1EwRkVZU3hEUVVNeVF6dEJRVU40UkRzN1FVRkZSRHM3T3pzN096czJRa0ZKYzBJN1FVRkJRU3hSUVVGa1F5eFBRVUZqTEhWRlFVRktMRVZCUVVrN08wRkJRM0pDTzBGQlEwRXNVVUZCU1VNc1ZVRkJWVVFzVVVGQlVVVXNTVUZCVWl4SlFVRm5RaXhGUVVFNVFqczdRVUZGUVN4UlFVRk5ReXgxUWtGQmRVSXNTMEZCUzBNc1YwRkJUQ3hIUVVGdFFrTXNTMEZCYmtJc1EwRkJlVUlzUjBGQmVrSXNSVUZCT0VJc1EwRkJPVUlzUTBGQk4wSXNRMEZLY1VJc1EwRkpNRU03UVVGREwwUXNVVUZCU1VNc2FVSkJRV2xDUXl4UFFVRlBReXhKUVVGUUxFTkJRVmxRTEU5QlFWb3NRMEZCY2tJN1FVRkRRU3hSUVVGSlVTeFhRVUZYU0N4bFFVRmxTU3hQUVVGbUxFTkJRWFZDVUN4dlFrRkJka0lzVFVGQmFVUXNRMEZCUXl4RFFVRnNSQ3hIUVVGelJDeExRVUZMVUN4bFFVRXpSQ3hIUVVFMlJVOHNiMEpCUVRWR08wRkJRMEVzVVVGQlNVUXNUMEZCVDBRc1VVRkJVMUVzVVVGQlZDeERRVUZZTzBGQlEwRXNVVUZCU1N4RFFVRkRVQ3hKUVVGTUxFVkJRVmM3UVVGRFZsTXNZVUZCVVVNc1NVRkJVanRCUVVOQlZpeFpRVUZQU1N4bFFVRmxUeXhOUVVGbUxFZEJRWGRDVUN4bFFVRmxMRU5CUVdZc1EwRkJlRUlzUjBGQk5FTXNTVUZCYmtRc1EwRkdWU3hEUVVVclF6dEJRVU42UkR0QlFVTkVMRmRCUVU5S0xGRkJRVkVzUlVGQlpqdEJRVU5CT3p0QlFVVkVPMEZCUTBFN1FVRkRRVHM3T3p0eFEwRkZhMEk3UVVGRGFrSXNWMEZCVDFrc1QwRkJUME1zVFVGQlVDeEpRVUZwUWtFc1RVRkJha0lzU1VGQk1rSkJMRTlCUVU5RExGVkJRV3hETEVkQlFXZEVSQ3hQUVVGUFF5eFZRVUZRTEUxQlFYVkNMRWxCUVhaRkxFZEJRU3RGTEVsQlFYUkdMRU5CUkdsQ0xFTkJRekpGTzBGQlF6VkdPenM3TUVOQlJYTkNPMEZCUTNSQ08wRkJRMEVzVVVGQlRVTXNjVUpCUVhGQ0xIRkNRVUV6UWp0QlFVTkJMRkZCUVUxRExIVkNRVUYxUWl4TFFVRkxNMElzYVVKQlFVd3NSMEZCZVVJd1FpeHJRa0ZCZEVRN1FVRkRRU3hYUVVGUExIbENRVUZoTEZWQlFVTkZMRTlCUVVRc1JVRkJWVU1zVFVGQlZpeEZRVUZ4UWp0QlFVTjRRME1zVjBGQlRVZ3NiMEpCUVU0c1JVRkJORUpKTEVsQlFUVkNMRU5CUVd0RExGVkJRVU5ETEZGQlFVUXNSVUZCWXp0QlFVTXZRMEVzWlVGQlUwTXNTVUZCVkN4SFFVRm5Ra1lzU1VGQmFFSXNRMEZCY1VJN1FVRkJRU3hqUVVGUlNDeFJRVUZSTEdkQ1FVRk5UU3hMUVVGT0xFTkJRVmxFTEVsQlFWb3NRMEZCVWl4RFFVRlNPMEZCUVVFc1QwRkJja0lzUlVGRUswTXNRMEZEV1R0QlFVTXpSQ3hOUVVaRUxFVkJSVWRGTEV0QlJrZ3NRMEZGVlR0QlFVRkJMR0ZCUVZOT0xFOUJRVTlQTEV0QlFWQXNRMEZCVkR0QlFVRkJMRTFCUmxZN1FVRkhRU3hMUVVwTkxFTkJRVkE3UVVGTlFUczdRVUZGUkRzN096czdPenM3T3p0NVEwRlBjMEk3UVVGQlFUczdRVUZEY2tJN08wRkJSVUVzVVVGQlRVTXNZMEZCWXl4TFFVRkxReXhsUVVGTUxFMUJRVEJDTEUxQlFUbERPMEZCUTBFc1VVRkJUVU1zYjBKQlFXOUNMRzFDUVVGcFFrWXNWMEZCYWtJc1IwRkJOa0lzVDBGQmRrUTdRVUZEUVN4UlFVRk5SeXh6UWtGQmMwSXNTMEZCUzNKRExHZENRVUZNTEVkQlFYZENiME1zYVVKQlFYQkVPMEZCUTBFc1YwRkJUMVFzVFVGQlRWVXNiVUpCUVU0c1JVRkRTbFFzU1VGRVNTeERRVU5GTEZWQlFVTkRMRkZCUVVRc1JVRkJZenRCUVVOd1FpeFpRVUZQUVN4VFFVRlRReXhKUVVGVUxFZEJRV2RDUml4SlFVRm9RaXhEUVVGeFFqdEJRVUZCTEdGQlFWRXNaMEpCUVUxSExFdEJRVTRzUTBGQldVUXNTVUZCV2l4RFFVRlNPMEZCUVVFc1RVRkJja0lzUTBGQlVDeERRVVJ2UWl4RFFVTnZRenRCUVVONFJDeExRVWhKTEVWQlNVcEZMRXRCU2trc1EwRkpSeXhwUWtGQlV6dEJRVU5vUW1Zc1lVRkJVVU1zU1VGQlVpeERRVUZoTEdOQlFWa3NUVUZCUzJsQ0xHVkJRVXdzUlVGQldpeEhRVUZ4UXl4dFEwRkJja01zUjBGQk1rVXNUVUZCUzNKRExGZEJRVXdzUTBGQmFVSkRMRWxCUVRWR0xFZEJRVzFITEdsR1FVRm9TRHRCUVVOQmEwSXNZVUZCVVVNc1NVRkJVaXhEUVVGaFpTeExRVUZpTzBGQlEwRXNXVUZCVHl4SlFVRlFPMEZCUTBRc1MwRlNTeXhEUVVGUU8wRkJVMEU3TzBGQlJVUTdPenM3T3pzN096dHRRMEZOWjBJN1FVRkRaaXhYUVVGUExIRkNRVUZSU3l4SFFVRlNMRU5CUVZrc1EwRkJReXhMUVVGTFF5eHZRa0ZCVEN4RlFVRkVMRVZCUVRoQ0xFdEJRVXRETEcxQ1FVRk1MRVZCUVRsQ0xFTkJRVm9zUlVGRFRGb3NTVUZFU3l4RFFVVk1PMEZCUVVFc1dVRkJZeXh6UWtGQlR5eEpRVUZRTEVWQlFXRmhMRmRCUVZjc1EwRkJXQ3hEUVVGaUxFVkJRVFJDUVN4WFFVRlhMRU5CUVZnc1MwRkJhVUlzUlVGQk4wTXNRMEZCWkR0QlFVRkJMRXRCUmtzc1JVRkhUQ3hwUWtGQlV6dEJRVU5TZUVJc1lVRkJVWGxDTEVkQlFWSXNRMEZCV1ZRc1MwRkJXanRCUVVOQkxGbEJRVThzU1VGQlVDeERRVVpSTEVOQlJVczdRVUZEWWl4TFFVNUpMRU5CUVZBN1FVRlJRVHM3UVVGRlJEczdPenM3T3pzN096czdaME5CVVdFN1FVRkJRVHM3UVVGRFdpeFJRVUZKTEV0QlFVdG9ReXhSUVVGVUxFVkJRVzFDTzBGQlEyeENMRmxCUVU4c2NVSkJRVkYzUWl4UFFVRlNMRU5CUVdsQ0xFdEJRVXQ0UWl4UlFVRjBRaXhEUVVGUU8wRkJRMEU3TzBGQlJVUXNWMEZCVHl4NVFrRkJZU3hWUVVGRGQwSXNUMEZCUkN4RlFVRlZReXhOUVVGV0xFVkJRWEZDTzBGQlEzaERMRmxCUVV0cFFpeGhRVUZNTEVkQlEwVm1MRWxCUkVZc1EwRkRVU3h0UWtGQlZ6dEJRVU5xUWl4aFFVRkxNMElzVVVGQlRDeEhRVUZuUWtzc1QwRkJhRUk3UVVGRFFXMUNMR05CUVZGdVFpeFBRVUZTTzBGQlEwRXNUVUZLUml4RlFVdEZNRUlzUzBGTVJpeERRVXRUTEZWQlFVTkRMRXRCUVVRN1FVRkJRU3hoUVVGWFVDeFBRVUZQVHl4TFFVRlFMRU5CUVZnN1FVRkJRU3hOUVV4VU8wRkJUVUVzUzBGUVRTeERRVUZRTzBGQlVVRTdPenM3T3p0dFFrRjBTRzFDY2tNc1lUdEJRWGRJY0VJc1JUczdPenM3TzBGRGFFbEVPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNiMEpCUVcxQ096dEJRVVZ1UWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SFFVRkZPMEZCUTBZN1FVRkRRVHM3UVVGRlFTeFJRVUZQTEZsQlFWazdRVUZEYmtJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UlFVRlBPMEZCUTFBN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFc1QwRkJUVHRCUVVOT08wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3T3pzN096czdPMEZEY0VaQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0R0QlFVTkJMRWxCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEVzUjBGQlJUczdRVUZGUmp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNTMEZCU1RzN1FVRkZTanRCUVVOQk96dEJRVVZCTzBGQlEwRXNSMEZCUlR0QlFVTkdPMEZCUTBFc1IwRkJSVHRCUVVOR096czdPenM3TzBGRGFrZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzUjBGQlJUdEJRVU5HT3pzN096czdPMEZEVEVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFc2FVTkJRV2RETzBGQlEyaERPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4clFrRkJhVUlzVVVGQlVUdEJRVU42UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEpRVUZITzBGQlEwZ3NiVU5CUVd0RE8wRkJRMnhETzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxFZEJRVVU3UVVGRFJqdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN4cFFrRkJaMElzYzBKQlFYTkNPMEZCUTNSRE96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEcxQ1FVRnJRaXh2UWtGQmIwSTdRVUZEZEVNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3UVVOc1JrRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFJRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzYVVKQlFXZENPMEZCUTJoQ08wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHpzN1FVRkZVQ3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTEZGQlFVODdRVUZEVUR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRkZCUVU4N1FVRkRVQ3hOUVVGTE8wRkJRMHc3TzBGQlJVRTdRVUZEUVR0QlFVTkJMSGxEUVVGM1F5eHRRa0ZCYlVJN1FVRkRNMFE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2JVTkJRV3RETEc5Q1FVRnZRanRCUVVOMFJEdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3g1UTBGQmQwTXNORUpCUVRSQ08wRkJRM0JGTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVVVGQlR6dEJRVU5RTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFc1VVRkJUenRCUVVOUU8wRkJRMEVzVVVGQlR6dEJRVU5RTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRU3hSUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc2QwUkJRWFZFTzBGQlEzWkVMRlZCUVZNN1FVRkRWRHRCUVVOQkxGVkJRVk03UVVGRFZDd3JSVUZCT0VVN1FVRkRPVVU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEVzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N08wRkJSVUU3UVVGRFFTeDNRMEZCZFVNc01FSkJRVEJDTzBGQlEycEZPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeG5RMEZCSzBJc01FSkJRVEJDTEdWQlFXVTdRVUZEZUVVN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFJRVUZQTzBGQlExQTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVVVGQlR6czdRVUZGVUR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUlVGQlF6czdPenM3T3p0aFEyaGlSRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVWQlFVTXNjVUpCUVhGQ096dEJRVVYwUWp0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeEZRVUZETzBGQlEwUTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeHJSa0ZCYVVZN08wRkJSV3BHTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3lRa0ZCTUVJc2MwSkJRWE5DT3p0QlFVVm9SRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxHdENRVUZwUWl4VFFVRlRPMEZCUXpGQ08wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNTVUZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRVZCUVVNN1FVRkRSRHRCUVVOQkxFVkJRVU03UVVGRFJEdEJRVU5CTEVWQlFVTTdRVUZEUkR0QlFVTkJMRVZCUVVNN1FVRkRSRHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hSUVVGUE8wRkJRMUFzVFVGQlN6dEJRVU5NTEVsQlFVYzdRVUZEU0R0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQkxFbEJRVWM3UVVGRFNEczdRVUZGUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWVXNTVUZCU1R0QlFVTmtPMEZCUTBFc1dVRkJWeXhSUVVGUk8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hOUVVGTE96dEJRVVZNTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVjN1FVRkRTRHRCUVVOQkxFbEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRXNTVUZCUnp0QlFVTklPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFTeHJRa0ZCYVVJc2QwSkJRWGRDTzBGQlEzcERPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEVzVFVGQlN6dEJRVU5NTEVsQlFVYzdRVUZEU0R0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2EwSkJRV2xDTEhWRFFVRjFRenRCUVVONFJEdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEVzU1VGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFTeEpRVUZITzBGQlEwZzdRVUZEUVN4SlFVRkhPMEZCUTBnN08wRkJSVUU3UVVGRFFUdEJRVU5CTEZkQlFWVXNUVUZCVFR0QlFVTm9RaXhYUVVGVkxFOUJRVTg3UVVGRGFrSTdRVUZEUVN4WlFVRlhMRkZCUVZFN1FVRkRia0k3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVEN4SlFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVEN4SlFVRkhPenRCUVVWSU8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdRVUZEU0RzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTEVsQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTEVsQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQkxFbEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRXNTVUZCUnp0QlFVTklPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzVjBGQlZTeE5RVUZOTzBGQlEyaENPMEZCUTBFc1dVRkJWeXhSUVVGUk8wRkJRMjVDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1MRWxCUVVjN1FVRkRTRHRCUVVOQk8wRkJRMEVzYzBKQlFYRkNMRmxCUVZrN1FVRkRha003UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE96dEJRVVZJTzBGQlEwRTdRVUZEUVN4SlFVRkhPMEZCUTBnN1FVRkRRU3hKUVVGSE8wRkJRMGc3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNTVUZCUnp0QlFVTklPMEZCUTBFc1NVRkJSenRCUVVOSU96dEJRVVZCTzBGQlEwRTdRVUZEUVN4WFFVRlZMRWxCUVVrN1FVRkRaRHRCUVVOQkxGbEJRVmNzVVVGQlVUdEJRVU51UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPMEZCUjBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6czdRVUZGU0R0QlFVTkJPMEZCUTBFc1NVRkJSenRCUVVOSU8wRkJRMEVzU1VGQlJ6dEJRVU5JT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNXVUZCVnp0QlFVTllPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NT3p0QlFVVkJPMEZCUTBFN1FVRkRRU3hKUVVGSE8wRkJRMGc3UVVGRFFTeEpRVUZITzBGQlEwZzdPMEZCUlVFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFTeEpRVUZITzBGQlEwZzdPMEZCUlVFN1FVRkRRU3hYUVVGVkxGTkJRVk03UVVGRGJrSTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQkxFMUJRVXM3UVVGRFREczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMRTFCUVVzN08wRkJSVXc3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRXNUVUZCU3p0QlFVTk1PenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFc1RVRkJTenRCUVVOTU96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJMRTFCUVVzN1FVRkRURHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTEUxQlFVczdRVUZEVERzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCT3p0QlFVVkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1VVRkJUenRCUVVOUU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWVR0QlFVTmlPMEZCUTBFN1FVRkRRU3huUWtGQlpUdEJRVU5tTzBGQlEwRTdRVUZEUVR0QlFVTkJMRmxCUVZjN1FVRkRXQ3hWUVVGVE8wRkJRMVE3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTEUxQlFVczdRVUZEVERzN1FVRkZRVHRCUVVOQkxHRkJRVmtzVTBGQlV6dEJRVU55UWl4aFFVRlpMRk5CUVZNN1FVRkRja0k3UVVGRFFTeGpRVUZoTzBGQlEySTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PenRCUVVWQk8wRkJRMEVzWVVGQldTeFRRVUZUTzBGQlEzSkNPMEZCUTBFc1kwRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1ZVRkJVenRCUVVOVU8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUczdRVUZGUVN4RlFVRkRPMEZCUTBRc2NVTTdPenM3T3pzN1FVTnFiME5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJMRTFCUVVzN1FVRkRURHRCUVVOQk8wRkJRMEVzUlVGQlF6dEJRVU5FTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CTEZWQlFWTTdRVUZEVkR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3TzBGQlIwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenRCUVVsQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3gzUWtGQmRVSXNjMEpCUVhOQ08wRkJRemRETzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2MwSkJRWEZDTzBGQlEzSkNPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3cwUWtGQk1rSTdRVUZETTBJN1FVRkRRVHRCUVVOQk8wRkJRMEVzTmtKQlFUUkNMRlZCUVZVN096czdPenM3UVVOdVRIUkRMR2RDT3pzN096czdRVU5CUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCT3pzN1FVRkhRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPenRCUVVkQk96dEJRVVZCT3p0QlFVVkJMR2RDUVVGbE96dEJRVVZtT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR1ZCUVdNN1FVRkRaRHM3TzBGQlIwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk96czdRVUZIUVN4bFFVRmpPenRCUVVWa08wRkJRMEU3UVVGRFFUczdPMEZCUjBFN08wRkJSVUU3T3p0QlFVZEJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCT3p0QlFVVkJPMEZCUTBFN096dEJRVWRCT3p0QlFVVkJPenM3UVVGSFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzTUVKQlFYbENMRzFDUVVGdFFpeEZRVUZGTzBGQlF6bERPMEZCUTBFN1FVRkRRU3hKUVVGSE96dEJRVVZJT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxESkNRVUV3UWp0QlFVTXhRanRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTERKQ1FVRXdRanRCUVVNeFFqdEJRVU5CTEUxQlFVczdRVUZEVEN4SlFVRkhPenRCUVVWSU96dEJRVVZCT3p0QlFVVkJPenM3T3pzN08wRkRha3RCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3huUTBGQmNVSXNZMEZCWXpzN1FVRkZia003TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEcxRFFVRnJRenRCUVVOc1F6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3d3UkVGQmVVUTdRVUZEZWtRc1owTkJRU3RDTzBGQlF5OUNPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3cwUlVGQk1rVXNiME5CUVc5RE8wRkJReTlITERKRFFVRXdRenRCUVVNeFF6czdRVUZGUVR0QlFVTkJMR2xFUVVGblJDeHRRa0ZCYlVJN1FVRkRia1U3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNZMEZCWVN4alFVRmpPMEZCUXpOQ08wRkJRMEU3UVVGRFFTeG5Ra0ZCWlN4VFFVRlRPMEZCUTNoQ08wRkJRMEU3UVVGRFFUdEJRVU5CTERSRFFVRXlRenRCUVVNelF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN096czdPMEZETlVkQkxHMURRVUZyUXpzN1FVRkZiRU03UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxHZERRVUVyUWpzN1FVRkZMMElzSzBKQlFUaENPenRCUVVVNVFqdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTERaQ1FVRTBRanM3UVVGRk5VSXNOa0pCUVRSQ096dEJRVVUxUWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMR2RDUVVGbExGVkJRVlU3TzBGQlJYcENMRFpDUVVFMFFqczdRVUZGTlVJc2FVTkJRV2RET3p0QlFVVm9RenRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPenM3T3pzN1FVTTFRMEU3T3pzN096czdRVU5CUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxGVkJRVk03UVVGRFZDeFZRVUZUTzBGQlExUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3hqUVVGaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYjBKQlFXMUNMR0ZCUVdFN1FVRkRhRU03TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2JVSkJRV3RDTERKQ1FVRXlRanRCUVVNM1F5eFhRVUZWTEU5QlFVODdRVUZEYWtJN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3MFFrRkJNa0lzVDBGQlR6dEJRVU5zUXp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4WlFVRlhPMEZCUTFnN1FVRkRRU3haUVVGWE8wRkJRMWdzVlVGQlV6dEJRVU5VTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMSFZDUVVGelFpeFJRVUZSTEdOQlFXTTdPMEZCUlRWRE8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQkxIRkZRVUZ2UlR0QlFVTndSVHRCUVVOQkxGVkJRVk03UVVGRFZDeFJRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNVVUZCVHp0QlFVTlFPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRGhDUVVFMlFqczdRVUZGTjBJN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4MVJFRkJjMFFzYjBKQlFXOUNMRzlGUVVGdlJUdEJRVU01U1R0QlFVTkJMRkZCUVU4N1FVRkRVRHRCUVVOQk8wRkJRMEVzVVVGQlR6dEJRVU5RTERaSVFVRTBTRHRCUVVNMVNDeFJRVUZQTzBGQlExQTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGRkJRVTg3UVVGRFVDeG5Ra0ZCWlR0QlFVTm1PMEZCUTBFc2EwSkJRV2xDTEZGQlFWRXNVVUZCVVR0QlFVTnFReXhSUVVGUE8wRkJRMUE3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRXNWMEZCVlR0QlFVTldPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzWjBOQlFTdENPMEZCUXk5Q08wRkJRMEU3UVVGRFFUdEJRVU5CTEhkRFFVRjFRenRCUVVOMlF5eDVRa0ZCZDBJc1UwRkJVenRCUVVOcVF6dEJRVU5CTzBGQlEwRTdRVUZEUVN4blJVRkJLMFE3UVVGREwwUXNPRVJCUVRaRU8wRkJRemRFTERoRVFVRTJSRHRCUVVNM1JEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc2NVSkJRVzlDTEN0RFFVRXJRenRCUVVOdVJUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR2RDUVVGbExHZENRVUZuUWp0QlFVTXZRanRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNLME5CUVRoRExGbEJRVms3UVVGRE1VUTdRVUZEUVR0QlFVTkJMRmxCUVZjN1FVRkRXRHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRkZCUVU4N1FVRkRVRHM3UVVGRlFTeHhRa0ZCYjBJN1FVRkRjRUk3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEdsRlFVRm5SU3hSUVVGUk96dEJRVVY0UlR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEhOQ1FVRnhRanRCUVVOeVFqczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTd3dRa0ZCZVVJc1VVRkJVU3hWUVVGVkxGTkJRVk03UVVGRGNFUTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQkxHdEZRVUZwUlN4TlFVRk5MRlZCUVZVN08wRkJSV3BHTzBGQlEwRXNPRUpCUVRaQ08wRkJRemRDTzBGQlEwRTdRVUZEUVN4UlFVRlBPenRCUVVWUU8wRkJRMEU3UVVGRFFTeHZRa0ZCYlVJN1FVRkRia0k3UVVGRFFUdEJRVU5CTEhWQ1FVRnpRanRCUVVOMFFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN3d1FrRkJlVUlzVVVGQlVTeFZRVUZWTEZOQlFWTTdRVUZEY0VRN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNjMEpCUVhGQ08wRkJRM0pDTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTEcxRlFVRnJSVHRCUVVOc1JTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFc1kwRkJZVHRCUVVOaU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxHTkJRV0U3UVVGRFlqdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRXNXVUZCVnl4clEwRkJhME03UVVGRE4wTXNiVUpCUVd0Q0xGTkJRVk1zUlVGQlJUdEJRVU0zUWp0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenM3T3pzN08wRkRkbUpCTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRU3hKUVVGSE96dEJRVVZJTzBGQlEwRXNNa0pCUVRCQ0xGVkJRVlVzTUVOQlFUQkRPenRCUVVVNVJUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFc05FTkJRVEpETERSQ1FVRTBRaXhGUVVGRk8wRkJRM3BGTzBGQlEwRTdRVUZEUVN4VlFVRlRPMEZCUTFRc1VVRkJUenRCUVVOUUxHZEVRVUVyUXp0QlFVTXZRenRCUVVOQkxFMUJRVXM3UVVGRFRDeEpRVUZIT3p0QlFVVklPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTEc5Q1FVRnRRaXhuUWtGQlowSTdRVUZEYmtNN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEVzYTBKQlFXbENMR0ZCUVdFN1FVRkRPVUk3T3p0QlFVZEJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJMR2RFUVVFclF6dEJRVU12UXp0QlFVTkJPMEZCUTBFN1FVRkRRU3hOUVVGTE8wRkJRMHc3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFN1FVRkRRVHRCUVVOQkxFMUJRVXM3UVVGRFREdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeG5Ra0ZCWlN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVU3UVVGRE4wSXNZMEZCWVN4RlFVRkZMRWxCUVVrc1JVRkJSU3hKUVVGSkxFVkJRVVVzU1VGQlNTeEZRVUZGTEV0QlFVc3NSVUZCUlN4TFFVRkxMRVZCUVVVc2IwSkJRVzlDTEVWQlFVVXNTVUZCU1N4RlFVRkZPMEZCUXpORk8wRkJRMEU3UVVGRFFUdEJRVU5CTEUxQlFVczdRVUZEVER0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMRWxCUVVjN1FVRkRTRHM3T3pzN096dEJRMnBKUVR0QlFVTkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRU3hqUVVGaE96dEJRVVZpTzBGQlEwRTdRVUZEUVR0QlFVTkJMRzlFUVVGdFJDeEpRVUZKTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQkxEQkVRVUY1UkR0QlFVTjZSRHRCUVVOQkxFbEJRVWM3UVVGRFNEdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzT0VKQlFUWkNMRWxCUVVrN1FVRkRha003UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJMR1ZCUVdNc1MwRkJTenRCUVVOdVFqdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQkxIbENRVUYzUWl3d1FrRkJNRUk3TzBGQlJXeEVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFTeE5RVUZMTzBGQlEwdzdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNUVUZCU3p0QlFVTk1PMEZCUTBFc2EwSkJRV2xDTEdOQlFXTTdRVUZETDBJN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFc1RVRkJTenRCUVVOTU8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUVzYVVOQlFXZERMSEZFUVVGeFJEdEJRVU55Uml4elEwRkJjVU1zYTBOQlFXdERPMEZCUTNaRk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ0xEQkNRVUV3UWp0QlFVTXpRenRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTEhOQ1FVRnhRanRCUVVOeVFqczdRVUZGUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3gxUWtGQmMwSTdRVUZEZEVJc2EwSkJRV2xDTzBGQlEycENPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVN3MlEwRkJORU1zV1VGQldUdEJRVU40UkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRXNWVUZCVXp0QlFVTlVPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3c0UTBGQk5rTXNXVUZCV1R0QlFVTjZSRHRCUVVOQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc1dVRkJWenRCUVVOWU8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZsQlFWYzdRVUZEV0R0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUczdRVUZGUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN3MFFrRkJNa0lzUjBGQlJ5eHRRa0ZCYlVJc1IwRkJSenRCUVVOd1JDdzBRa0ZCTWtJc2MwSkJRWE5DTzBGQlEycEVPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUV5UWp0QlFVTXpRaXcwUWtGQk1rSTdRVUZETTBJc05FSkJRVEpDTzBGQlF6TkNMRFJDUVVFeVFqdEJRVU16UWp0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxEUkNRVUV5UWp0QlFVTXpRanRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN1FVRkRRVHM3UVVGRlFUdEJRVU5CTzBGQlEwRXNhMEpCUVdsQ0xGZEJRVmM3UVVGRE5VSXNUVUZCU3p0QlFVTk1PMEZCUTBFN08wRkJSVUU3UVVGRFFTdzJSVUZCTkVVN1FVRkROVVU3TzBGQlJVRTdRVUZEUVRzN1FVRkZRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN096czdPenM3UVVOMFZVRTdRVUZEUVR0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVN4aFFVRlpPMEZCUTFvc2EwSkJRV2xDTzBGQlEycENMR3RDUVVGcFFqdEJRVU5xUWp0QlFVTkJPenRCUVVWQk96dEJRVVZCTzBGQlEwRTdRVUZEUVRzN1FVRkZRU3hwUWtGQlowSTdRVUZEYUVJN1FVRkRRVHRCUVVOQkxGVkJRVk03UVVGRFZDeHRRMEZCYTBNc1ZVRkJWVHRCUVVNMVF6dEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQkxFbEJRVWM3UVVGRFNDeFZRVUZUTEUxQlFVMDdPMEZCUldZN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UlFVRlBPMEZCUTFBc1RVRkJTenRCUVVOTU96dEJRVVZCTzBGQlEwRXNhME5CUVdsRExGVkJRVlU3UVVGRE0wTTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHM3UVVGRlFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzZFVKQlFYTkNPMEZCUTNSQ08wRkJRMEU3UVVGRFFTeEpRVUZITzBGQlEwZzdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3TzBGQlJVRTdPMEZCUlVFN08wRkJSVUVzYVVKQlFXZENPenRCUVVWb1FqczdRVUZGUVN4M1EwRkJkVU1zVlVGQlZUdEJRVU5xUkR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEVsQlFVYzdPMEZCUlVnN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4TlFVRkxPMEZCUTB3N08wRkJSVUU3UVVGRFFUdEJRVU5CT3p0QlFVVkJPenRCUVVWQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFc2FVSkJRV2RDTzBGQlEyaENPenRCUVVWQk8wRkJRMEU3TzBGQlJVRTdRVUZEUVR0QlFVTkJMRGhEUVVFMlF5eFZRVUZWTzBGQlEzWkVPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTEZGQlFVODdRVUZEVUR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlJ6dEJRVU5JTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVN4UlFVRlBPMEZCUTFBN1FVRkRRVHRCUVVOQk8wRkJRMEVzVFVGQlN6dEJRVU5NTzBGQlEwRTdRVUZEUVRzN1FVRkZRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdPMEZCUlVFN1FVRkRRU3cyUWtGQk5FSXNjVU5CUVhGRExFVkJRVVU3UVVGRGJrVTdRVUZEUVN4eFEwRkJiME1zZFVOQlFYVkRMRVZCUVVVN1FVRkROMFVzY1VOQlFXOURMSFZEUVVGMVF5eEZRVUZGTzBGQlF6ZEZJaXdpWm1sc1pTSTZJbUoxYm1Sc1pTNXFjeUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSWlobWRXNWpkR2x2YmlCM1pXSndZV05yVlc1cGRtVnljMkZzVFc5a2RXeGxSR1ZtYVc1cGRHbHZiaWh5YjI5MExDQm1ZV04wYjNKNUtTQjdYRzVjZEdsbUtIUjVjR1Z2WmlCbGVIQnZjblJ6SUQwOVBTQW5iMkpxWldOMEp5QW1KaUIwZVhCbGIyWWdiVzlrZFd4bElEMDlQU0FuYjJKcVpXTjBKeWxjYmx4MFhIUnRiMlIxYkdVdVpYaHdiM0owY3lBOUlHWmhZM1J2Y25rb0tUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaR1ZtYVc1bElEMDlQU0FuWm5WdVkzUnBiMjRuSUNZbUlHUmxabWx1WlM1aGJXUXBYRzVjZEZ4MFpHVm1hVzVsS0Z0ZExDQm1ZV04wYjNKNUtUdGNibHgwWld4elpTQnBaaWgwZVhCbGIyWWdaWGh3YjNKMGN5QTlQVDBnSjI5aWFtVmpkQ2NwWEc1Y2RGeDBaWGh3YjNKMGMxdGNJazFOWVhCQ1lYTmxRMnhoYzNOY0lsMGdQU0JtWVdOMGIzSjVLQ2s3WEc1Y2RHVnNjMlZjYmx4MFhIUnliMjkwVzF3aVRVMWhjRUpoYzJWRGJHRnpjMXdpWFNBOUlHWmhZM1J2Y25rb0tUdGNibjBwS0hSb2FYTXNJR1oxYm1OMGFXOXVLQ2tnZTF4dWNtVjBkWEp1SUZ4dVhHNWNiaThxS2lCWFJVSlFRVU5MSUVaUFQxUkZVaUFxS2x4dUlDb3FJSGRsWW5CaFkyc3ZkVzVwZG1WeWMyRnNUVzlrZFd4bFJHVm1hVzVwZEdsdmJseHVJQ29xTHlJc0lpQmNkQzh2SUZSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RIWmhjaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpJRDBnZTMwN1hHNWNiaUJjZEM4dklGUm9aU0J5WlhGMWFYSmxJR1oxYm1OMGFXOXVYRzRnWEhSbWRXNWpkR2x2YmlCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktHMXZaSFZzWlVsa0tTQjdYRzVjYmlCY2RGeDBMeThnUTJobFkyc2dhV1lnYlc5a2RXeGxJR2x6SUdsdUlHTmhZMmhsWEc0Z1hIUmNkR2xtS0dsdWMzUmhiR3hsWkUxdlpIVnNaWE5iYlc5a2RXeGxTV1JkS1Z4dUlGeDBYSFJjZEhKbGRIVnliaUJwYm5OMFlXeHNaV1JOYjJSMWJHVnpXMjF2WkhWc1pVbGtYUzVsZUhCdmNuUnpPMXh1WEc0Z1hIUmNkQzh2SUVOeVpXRjBaU0JoSUc1bGR5QnRiMlIxYkdVZ0tHRnVaQ0J3ZFhRZ2FYUWdhVzUwYnlCMGFHVWdZMkZqYUdVcFhHNGdYSFJjZEhaaGNpQnRiMlIxYkdVZ1BTQnBibk4wWVd4c1pXUk5iMlIxYkdWelcyMXZaSFZzWlVsa1hTQTlJSHRjYmlCY2RGeDBYSFJsZUhCdmNuUnpPaUI3ZlN4Y2JpQmNkRngwWEhScFpEb2diVzlrZFd4bFNXUXNYRzRnWEhSY2RGeDBiRzloWkdWa09pQm1ZV3h6WlZ4dUlGeDBYSFI5TzF4dVhHNGdYSFJjZEM4dklFVjRaV04xZEdVZ2RHaGxJRzF2WkhWc1pTQm1kVzVqZEdsdmJseHVJRngwWEhSdGIyUjFiR1Z6VzIxdlpIVnNaVWxrWFM1allXeHNLRzF2WkhWc1pTNWxlSEJ2Y25SekxDQnRiMlIxYkdVc0lHMXZaSFZzWlM1bGVIQnZjblJ6TENCZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZktUdGNibHh1SUZ4MFhIUXZMeUJHYkdGbklIUm9aU0J0YjJSMWJHVWdZWE1nYkc5aFpHVmtYRzRnWEhSY2RHMXZaSFZzWlM1c2IyRmtaV1FnUFNCMGNuVmxPMXh1WEc0Z1hIUmNkQzh2SUZKbGRIVnliaUIwYUdVZ1pYaHdiM0owY3lCdlppQjBhR1VnYlc5a2RXeGxYRzRnWEhSY2RISmxkSFZ5YmlCdGIyUjFiR1V1Wlhod2IzSjBjenRjYmlCY2RIMWNibHh1WEc0Z1hIUXZMeUJsZUhCdmMyVWdkR2hsSUcxdlpIVnNaWE1nYjJKcVpXTjBJQ2hmWDNkbFluQmhZMnRmYlc5a2RXeGxjMTlmS1Z4dUlGeDBYMTkzWldKd1lXTnJYM0psY1hWcGNtVmZYeTV0SUQwZ2JXOWtkV3hsY3p0Y2JseHVJRngwTHk4Z1pYaHdiM05sSUhSb1pTQnRiMlIxYkdVZ1kyRmphR1ZjYmlCY2RGOWZkMlZpY0dGamExOXlaWEYxYVhKbFgxOHVZeUE5SUdsdWMzUmhiR3hsWkUxdlpIVnNaWE03WEc1Y2JpQmNkQzh2SUY5ZmQyVmljR0ZqYTE5d2RXSnNhV05mY0dGMGFGOWZYRzRnWEhSZlgzZGxZbkJoWTJ0ZmNtVnhkV2x5WlY5ZkxuQWdQU0JjSWx3aU8xeHVYRzRnWEhRdkx5Qk1iMkZrSUdWdWRISjVJRzF2WkhWc1pTQmhibVFnY21WMGRYSnVJR1Y0Y0c5eWRITmNiaUJjZEhKbGRIVnliaUJmWDNkbFluQmhZMnRmY21WeGRXbHlaVjlmS0RBcE8xeHVYRzVjYmx4dUx5b3FJRmRGUWxCQlEwc2dSazlQVkVWU0lDb3FYRzRnS2lvZ2QyVmljR0ZqYXk5aWIyOTBjM1J5WVhBZ01UVTVPVGM0WWpBeE0ySXhPRGxsT0RNek5EQmNiaUFxS2k4aUxDSmNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVhVzF3YjNKMElHVjRkR1Z1WkNCbWNtOXRJRndpWlhoMFpXNWtYQ0k3WEc1cGJYQnZjblFnY1hWbGNubFRkSEpwYm1jZ1puSnZiU0JjSW5GMVpYSjVMWE4wY21sdVoxd2lPMXh1YVcxd2IzSjBJRndpZDJoaGRIZG5MV1psZEdOb1hDSTdYRzVwYlhCdmNuUWdVSEp2YldselpTQm1jbTl0SUZ3aVpYTTJMWEJ5YjIxcGMyVmNJanRjYm1sdGNHOXlkQ0JvYW5OdmJpQm1jbTl0SUZ3aWFHcHpiMjVjSWp0Y2JseHVaWGh3YjNKMElHUmxabUYxYkhRZ1kyeGhjM01nVFUxQmNFSmhjMlZEYkdGemN5QjdYRzVjYmx4MFpHbHlSR1ZtWVhWc2RFOXdkR2x2Ym5NZ1BTQmNJbTF2WkhWc1pYTXZYQ0lnS3lCMGFHbHpMbU52Ym5OMGNuVmpkRzl5TG01aGJXVWdLeUJjSWk5dmNIUnBiMjV6TDF3aU8xeHVYSFJrYVhKRGRYTjBiMjFQY0hScGIyNXpJRDBnWENKdGIyUjFiR1Z6TDF3aUlDc2dkR2hwY3k1amIyNXpkSEoxWTNSdmNpNXVZVzFsSUNzZ1hDSXZiM0IwYVc5dWN5OWNJanNnSUM4dklFWnZjaUIwY21GdWMzQnBiR2x1WnlCM2FYUm9JR05zWVhOeklIQnliM0JsY25ScFpYTTZJR2gwZEhCek9pOHZZbUZpWld4cWN5NXBieTlrYjJOekwzQnNkV2RwYm5NdmRISmhibk5tYjNKdExXTnNZWE56TFhCeWIzQmxjblJwWlhNdlhHNWNkRjl2Y0hScGIyNXpJRDBnYm5Wc2JEc2dMeThnVkc4Z1ltVWdabWxzYkdWa0lIZHBkR2dnWTI5dWRHVnVkSE1nWm5KdmJTQnZjSFJwYjI1eklHWnBiR1Z6WEc1Y2RHUmxabUYxYkhSTVlXNW5RMjlrWlNBOUlGd2ljM1pjSWpzZ0x5OGdTV1lnYkdGdVozVmhaMlVnYVhNZ2JtOTBJSE4xY0hCdmNuUmxaQ0JwYmlCdGIyUjFiR1VuY3lCdmNIUnBiMjV6TG14aGJtY2dkR2hwY3lCM2FXeHNJR0psSUhSb1pTQm1ZV3hzWW1GamF5QnNZVzVuZFdGblpWeHVYRzVjZEdOdmJuTjBjblZqZEc5eUtDa2dlMzFjYmx4dVhIUXZLaXBjYmx4MElDb2dVbVYwZFhKdWN5QjBhR1VnWW5KdmQzTmxjaWR6SUdOMWNuSmxiblFnYzJWMElHeGhibWQxWVdkbFhHNWNkQ0FxSUVCeVpYUjFjbTRnZTFOMGNtbHVaMzBnUVc0Z1NWTlBJR052WkdVZ2NtVndjbVZ6Wlc1MGFXNW5JSFJvWlNCc1lXNW5kV0ZuWlM1Y2JseDBJQ292WEc1Y2RHZGxkRXhoYm1kRGIyUmxLQ2tnZTF4dVhIUmNkSEpsZEhWeWJpQnVZWFpwWjJGMGIzSXViR0Z1WjNWaFoyVWdmSHdnYm1GMmFXZGhkRzl5TG1KeWIzZHpaWEpNWVc1bmRXRm5aVHNnTHk4Z1luSnZkM05sY2t4aGJtZDFZV2RsSUdseklHWnZjaUJKUlR3eE1WeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRkpsZEhWeWJuTWdkR2hsSUd4aGJtZDFZV2RsSUc5aWFtVmpkQ0JtYjNJZ2RHaGxJR04xY25KbGJuUWdiR0Z1WjNWaFoyVWdLR2t1WlM0Z1pHOWxjeUJ1YjNRZ2NtVjBkWEp1SUd4aGJtY2diMkpxWldOMElHWnZjaUJoYkd3Z2MzVndjRzl5ZEdWa0lHeGhibWQxWVdkbGN5a3VYRzVjZENBcUlFQnlaWFIxY200Z2UwOWlhbVZqZEgwZ1ZHaGxJR3hoYm1kMVlXZGxJRzlpYW1WamRDOW9ZWE5vSUhSaFlteGxYRzVjZENBcUwxeHVYSFJuWlhSTVlXNW5LRzl3ZEdsdmJuTWdQU0I3ZlNrZ2UxeHVYSFJjZEM4dklGUlBSRTg2SUVkbGRDQnZZbXBsWTNRZ1ptOXlJR04xY25KbGJuUWdiR0Z1WjNWaFoyVmNibHgwWEhSc1pYUWdiR0Z1WjA5aWFpQTlJRzl3ZEdsdmJuTXViR0Z1WnlCOGZDQjdmVHRjYmx4dVhIUmNkR052Ym5OMElHeGhibWRGZUd4MVpHbHVaMFJwWVd4bFkzUnpJRDBnZEdocGN5NW5aWFJNWVc1blEyOWtaU2dwTG5Od2JHbDBLRndpTFZ3aUtWc3dYVHNnTHk4Z1pTNW5MaUJ6ZGkxVFJTQnZjaUJ6ZGkxR1NTQXRQaUJ6ZGx4dVhIUmNkR3hsZENCemRYQndiM0owWldSTVlXNW5jeUE5SUU5aWFtVmpkQzVyWlhsektHeGhibWRQWW1vcE8xeHVYSFJjZEd4bGRDQnNZVzVuUTI5a1pTQTlJSE4xY0hCdmNuUmxaRXhoYm1kekxtbHVaR1Y0VDJZb2JHRnVaMFY0YkhWa2FXNW5SR2xoYkdWamRITXBJRDA5UFNBdE1TQS9JSFJvYVhNdVpHVm1ZWFZzZEV4aGJtZERiMlJsSURvZ2JHRnVaMFY0YkhWa2FXNW5SR2xoYkdWamRITTdYRzVjZEZ4MGJHVjBJR3hoYm1jZ1BTQnNZVzVuVDJKcVd5QnNZVzVuUTI5a1pTQmRPMXh1WEhSY2RHbG1JQ2doYkdGdVp5a2dlMXh1WEhSY2RGeDBZMjl1YzI5c1pTNTNZWEp1S0dCTmIyUjFiR1VnZTNSb2FYTXVZMjl1YzNSeWRXTjBiM0l1Ym1GdFpYMGdhR0Z6SUc1dklHeGhibWQxWVdkbElHUmxabWx1WldRZ2FXNGdaR1ZtWVhWc2RFOXdkR2x2Ym5NdWFuTnZiaUJtYjNJZ2JHRnVaeUJqYjJSbE9pQjdiR0Z1WjBOdlpHVjlMbUFwTzF4dVhIUmNkRngwYkdGdVp5QTlJSE4xY0hCdmNuUmxaRXhoYm1kekxteGxibWQwYUNBL0lITjFjSEJ2Y25SbFpFeGhibWR6V3pCZElEb2diblZzYkRzZ0x5OGdRWE1nWVNCc1lYTjBJR1poYkd4aVlXTnJJR0Z1ZVNCemRYQndiM0owWldRZ2JHRnVaM1ZoWjJVZ2QybHNiQ0JpWlNCMWMyVmtJQ2hwWmlCaGJua3NJRzkwYUdWeWQybHpaU0J1YjI1bEtWeHVYSFJjZEgxY2JseDBYSFJ5WlhSMWNtNGdiR0Z1WnlCOGZDQjdmVHRjYmx4MGZWeHVYRzVjZEM4dklGOW5aWFJYWldKUVlYSmhiWE5CYzA5aWFtVmpkQ2dwSUh0Y2JseDBMeThnWEhSeVpYUjFjbTRnY1hWbGNubFRkSEpwYm1jdWNHRnljMlVvYkc5allYUnBiMjR1YzJWaGNtTm9LVHRjYmx4MEx5OGdmVnh1WEc1Y2RGOW5aWFJRY205bWFXeGxUbUZ0WlNncElIdGNibHgwWEhSeVpYUjFjbTRnZDJsdVpHOTNMbU5pUzI5eWRDQW1KaUJqWWt0dmNuUWdKaVlnWTJKTGIzSjBMbWRsZEZCeWIyWnBiR1VnUHlBb1kySkxiM0owTG1kbGRGQnliMlpwYkdVb0tTQjhmQ0J1ZFd4c0tTQTZJRzUxYkd3N0lDOHZkR2hwY3k1ZloyVjBWMlZpVUdGeVlXMXpRWE5QWW1wbFkzUW9LUzV3Y205bWFXeGxJSHg4SUc1MWJHdzdYRzVjZEgxY2JseHVYSFJmWm1WMFkyaEVaV1poZFd4MFQzQjBhVzl1Y3lncElIdGNibHgwWEhRdkx5QlBjSFJwYjI1eklHUmxabWx1WldRZ2FXNGdaR1ZtWVhWc2RFOXdkR2x2Ym5NdWFuTnZiaUJwYm5OcFpHVWdkR2hsSUcxdlpIVnNaVnh1WEhSY2RHTnZibk4wSUdSbFptRjFiSFJQY0hScGIyNXpUbUZ0WlNBOUlGd2laR1ZtWVhWc2RFOXdkR2x2Ym5NdWFuTnZibHdpTzF4dVhIUmNkR052Ym5OMElIQmhkR2hVYjBSbFptRjFiSFJQY0hScGIyNXpJRDBnZEdocGN5NWthWEpFWldaaGRXeDBUM0IwYVc5dWN5QXJJR1JsWm1GMWJIUlBjSFJwYjI1elRtRnRaVHRjYmx4MFhIUnlaWFIxY200Z2JtVjNJRkJ5YjIxcGMyVW9JQ2h5WlhOdmJIWmxMQ0J5WldwbFkzUXBJRDArSUh0Y2JseDBYSFJjZEdabGRHTm9LSEJoZEdoVWIwUmxabUYxYkhSUGNIUnBiMjV6S1M1MGFHVnVLQ0FvY21WemNHOXVjMlVwSUQwK0lIdGNibHgwWEhSY2RGeDBjbVZ6Y0c5dWMyVXVkR1Y0ZENncExuUm9aVzRvZEdWNGRDQTlQaUJ5WlhOdmJIWmxLR2hxYzI5dUxuQmhjbk5sS0hSbGVIUXBLU0FwT3lBdkx5NWpZWFJqYUNobGNuSnZjaUE5UGlCdVpYY2dSWEp5YjNJb1hDSkZjbkp2Y2lCM2FHbHNaU0J3WVhKemFXNW5JR1JsWm1GMWJIUWdiM0IwYVc5dWMxd2lLU2s3WEc1Y2RGeDBYSFI5S1M1allYUmphQ2dnWlhKeWIzSWdQVDRnY21WcVpXTjBLR1Z5Y205eUtTQXBPMXh1WEhSY2RIMHBPMXh1WEhSY2RGeHVYSFI5WEc1Y2JseDBMeW9xWEc1Y2RDQXFJRVpsZEdOb1pYTWdZM1Z6ZEc5dElHOXdkR2x2Ym5NZ0tHbG1JR0Z1ZVNrdUlGUm9aU0JqZFhOMGIyMGdiM0IwYVc5dWN5Qm1hV3hsYm1GdFpTQmNibHgwSUNvZ2FYTWdibUZ0WldRZ2JHbHJaVG9nWENKamRYTjBiMjFQY0hScGIyNXpMVndpSUNzZ2NISnZabWxzWlU1aGJXVXVYRzVjZENBcUlFQnlaWFIxY200Z2UxQnliMjFwYzJWOVhHNWNkQ0FxSUNBZ0lDQWdJQ0FnTFNCdmJpQnpkV05qWlhOek9pQmNkSEpsZEhWeWJuTWdiM0IwYVc5dWN5QjdUMkpxWldOMGZWeHVYSFFnS2lBZ0lDQWdJQ0FnSUMwZ2IyNGdabUZwYkRvZ1hIUmNkSEpsZEhWeWJuTWdiblZzYkNCN1QySnFaV04wZlZ4dVhIUWdLaTljYmx4MFgyWmxkR05vUTNWemRHOXRUM0IwYVc5dWN5Z3BJSHRjYmx4MFhIUXZMeUJQY0hScGIyNXpJR1JsWm1sdVpXUWdhVzRnWTNWemRHOXRUM0IwYVc5dWN5NXFjMjl1SUdsdWMybGtaU0IwYUdVZ2JXOWtkV3hsWEc1Y2JseDBYSFJqYjI1emRDQndjbTltYVd4bFRtRnRaU0E5SUhSb2FYTXVYMmRsZEZCeWIyWnBiR1ZPWVcxbEtDa2dmSHdnWENKdGIyTnJYQ0k3WEc1Y2RGeDBZMjl1YzNRZ1kzVnpkRzl0VDNCMGFXOXVjMDVoYldVZ1BTQmNJbU4xYzNSdmJVOXdkR2x2Ym5NdFhDSXJjSEp2Wm1sc1pVNWhiV1VyWENJdWFuTnZibHdpTzF4dVhIUmNkR052Ym5OMElIQmhkR2hVYjBOMWMzUnZiVTl3ZEdsdmJuTWdQU0IwYUdsekxtUnBja04xYzNSdmJVOXdkR2x2Ym5NZ0t5QmpkWE4wYjIxUGNIUnBiMjV6VG1GdFpUdGNibHgwWEhSeVpYUjFjbTRnWm1WMFkyZ29jR0YwYUZSdlEzVnpkRzl0VDNCMGFXOXVjeWxjYmx4MFhIUmNkRngwTG5Sb1pXNG9JQ2h5WlhOd2IyNXpaU2tnUFQ0Z2UxeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnlaWE53YjI1elpTNTBaWGgwS0NrdWRHaGxiaWgwWlhoMElEMCtJR2hxYzI5dUxuQmhjbk5sS0hSbGVIUXBLVHNnTHk4dVkyRjBZMmdvWlhKeWIzSWdQVDRnYm1WM0lFVnljbTl5S0Z3aVJYSnliM0lnZDJocGJHVWdjR0Z5YzJsdVp5QmtaV1poZFd4MElHOXdkR2x2Ym5OY0lpa3BPMXh1WEhSY2RGeDBYSFI5S1Z4dVhIUmNkRngwWEhRdVkyRjBZMmdvSUdWeWNtOXlJRDArSUh0Y2JseDBYSFJjZEZ4MFhIUmpiMjV6YjJ4bExuZGhjbTRvWENKUWNtOW1hV3hsT2lCY0lpdDBhR2x6TGw5blpYUlFjbTltYVd4bFRtRnRaU2dwSUNzZ1hDSm9ZWE1nYm04Z1kzVnpkRzl0SUdOdmJtWnBaeUJtYjNJZ2JXOWtkV3hsT2lCY0lpQXJJSFJvYVhNdVkyOXVjM1J5ZFdOMGIzSXVibUZ0WlNBcklGd2lJQ2gwYUdseklHMXBaMmgwSUdKbElHVjRjR1ZqZEdWa0lHRnVaQ0J1YjNRZ1lXNGdaWEp5YjNJcExpQlRaV1VnWlhKeWIzSWdiV1Z6YzJGblpTQmlaV3h2ZHlCbWIzSWdaR1YwWVdsc2Mxd2lLVHRjYmx4MFhIUmNkRngwWEhSamIyNXpiMnhsTG5kaGNtNG9aWEp5YjNJcE8xeHVYSFJjZEZ4MFhIUmNkSEpsZEhWeWJpQnVkV3hzTzF4dVhIUmNkRngwZlNrN1hHNWNkSDFjYmx4dVhIUXZLaXBjYmx4MElDb2dSbVYwWTJobGN5QmtaV1poZFd4MElHRnVaQ0JqZFhOMGIyMGdiM0IwYVc5dWN5QW9hV1lnWVc1NUtTNGdUM1psY25KcFpHVnpJR1JsWm1GMWJIUWdiM0IwYVc5dWN5QjNhWFJvSUdOMWMzUnZiU0J2Y0hScGIyNXpMbHh1WEhRZ0tpQkFjbVYwZFhKdUlIdFFjbTl0YVhObGZWeHVYSFFnS2lBZ0lDQWdJQ0FnSUMwZ2IyNGdjM1ZqWTJWemN6b2dYSFJ5WlhSMWNtNXpJRzFsY21kbFpDQnZjSFJwYjI1eklIdFBZbXBsWTNSOVhHNWNkQ0FxSUNBZ0lDQWdJQ0FnTFNCdmJpQm1ZV2xzT2lCY2RGeDBjbVYwZFhKdWN5Qmxjbkp2Y2lCN1QySnFaV04wZlZ4dVhIUWdLaTljYmx4MFgyWmxkR05vVDNCMGFXOXVjeWdwSUh0Y2JseDBYSFJ5WlhSMWNtNGdVSEp2YldselpTNWhiR3dvVzNSb2FYTXVYMlpsZEdOb1JHVm1ZWFZzZEU5d2RHbHZibk1vS1N3Z2RHaHBjeTVmWm1WMFkyaERkWE4wYjIxUGNIUnBiMjV6S0NsZEtWeHVYSFJjZEZ4MExuUm9aVzRvWEc1Y2RGeDBYSFJjZEc5d2RHbHZibk5CY25JZ1BUNGdaWGgwWlc1a0tIUnlkV1VzSUc5d2RHbHZibk5CY25KYk1GMHNJRzl3ZEdsdmJuTkJjbkpiTVYwZ2ZId2dlMzBwTEZ4dVhIUmNkRngwWEhSbGNuSnZjaUE5UGlCN1hHNWNkRngwWEhSY2RGeDBZMjl1YzI5c1pTNXNiMmNvWlhKeWIzSXBPMXh1WEhSY2RGeDBYSFJjZEhKbGRIVnliaUJ1ZFd4c095QXZMeUJUYUc5MWJHUWdkMlVnY21WMGRYSnVJR1JsWm1GMWJIUWdiM0IwYVc5dWN5QnBaaUJqZFhOMGIyMGdiM0IwYVc5dWN5QjNaWEpsSUc1dmRDQm1iM1Z1WkNCaWRYUWdaR1ZtWVhWc2RDQnZjSFJwYjI1eklIZGxjbVVnWm05MWJtUS9YRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUXBPMXh1WEhSOVhHNWNibHgwTHlvcVhHNWNkQ0FxSUZCMVlteHBZeUJoYzNsdVl5QnRaWFJvYjJRZ1ptOXlJR1psZEdOb2FXNW5JRzl3ZEdsdmJuTWdLRzFsY21kbFpDQmtaV1poZFd4MElHRnVaQ0JqZFhOMGIyMHBMbHh1WEhRZ0tpQlVhR2x6SUdseklHRWdkM0poY0hCbGNpQm1iM0lnWDJabGRHTm9UM0IwYVc5dWN5QjBieUJoWkdRZ1kyRmphR2x1WnlCdlppQjBhR2x6TGw5dmNIUnBiMjV6SUZ4dVhIUWdLaUJtYjNJZ2MzQmxaV1JwYm1jZ2RYQWdZVzU1SUhOMVluTmxjWFZsYm5RZ1kyRnNiSE11WEc1Y2RDQXFJRUJ5WlhSMWNtNGdlMUJ5YjIxcGMyVjlYRzVjZENBcUlDQWdJQ0FnSUNBZ0xTQnZiaUJ6ZFdOalpYTnpPaUJjZEhKbGRIVnlibk1nYldWeVoyVmtJRzl3ZEdsdmJuTWdlMDlpYW1WamRIMWNibHgwSUNvZ0lDQWdJQ0FnSUNBdElHOXVJR1poYVd3NklGeDBYSFJ5WlhSMWNtNXpJR1Z5Y205eUlIdFBZbXBsWTNSOVhHNWNkQ0FxTDF4dVhIUm5aWFJQY0hScGIyNXpLQ2tnZTF4dVhIUmNkR2xtSUNoMGFHbHpMbDl2Y0hScGIyNXpLU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdVSEp2YldselpTNXlaWE52YkhabEtDQjBhR2x6TGw5dmNIUnBiMjV6SUNrN1hHNWNkRngwZlZ4dVhHNWNkRngwY21WMGRYSnVJRzVsZHlCUWNtOXRhWE5sS0NBb2NtVnpiMngyWlN3Z2NtVnFaV04wS1NBOVBpQjdYRzVjZEZ4MFhIUjBhR2x6TGw5bVpYUmphRTl3ZEdsdmJuTW9LVnh1WEhSY2RGeDBYSFF1ZEdobGJpZ2diM0IwYVc5dWN5QTlQaUI3WEc1Y2RGeDBYSFJjZEZ4MGRHaHBjeTVmYjNCMGFXOXVjeUE5SUc5d2RHbHZibk03WEc1Y2RGeDBYSFJjZEZ4MGNtVnpiMngyWlNodmNIUnBiMjV6S1R0Y2JseDBYSFJjZEZ4MGZTbGNibHgwWEhSY2RGeDBMbU5oZEdOb0tDQW9aWEp5YjNJcElEMCtJSEpsYW1WamRDaGxjbkp2Y2lrZ0tUdGNibHgwWEhSOUtUdGNibHgwZlZ4dVhIUmNibjA3WEc1Y2JseHVMeW9xSUZkRlFsQkJRMHNnUms5UFZFVlNJQ29xWEc0Z0tpb2dMaTl6Y21NdlRVMWhjRUpoYzJWRGJHRnpjeTVxYzF4dUlDb3FMeUlzSWlkMWMyVWdjM1J5YVdOMEp6dGNibHh1ZG1GeUlHaGhjMDkzYmlBOUlFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGs3WEc1MllYSWdkRzlUZEhJZ1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bk8xeHVYRzUyWVhJZ2FYTkJjbkpoZVNBOUlHWjFibU4wYVc5dUlHbHpRWEp5WVhrb1lYSnlLU0I3WEc1Y2RHbG1JQ2gwZVhCbGIyWWdRWEp5WVhrdWFYTkJjbkpoZVNBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dVhIUmNkSEpsZEhWeWJpQkJjbkpoZVM1cGMwRnljbUY1S0dGeWNpazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkRzlUZEhJdVkyRnNiQ2hoY25JcElEMDlQU0FuVzI5aWFtVmpkQ0JCY25KaGVWMG5PMXh1ZlR0Y2JseHVkbUZ5SUdselVHeGhhVzVQWW1wbFkzUWdQU0JtZFc1amRHbHZiaUJwYzFCc1lXbHVUMkpxWldOMEtHOWlhaWtnZTF4dVhIUnBaaUFvSVc5aWFpQjhmQ0IwYjFOMGNpNWpZV3hzS0c5aWFpa2dJVDA5SUNkYmIySnFaV04wSUU5aWFtVmpkRjBuS1NCN1hHNWNkRngwY21WMGRYSnVJR1poYkhObE8xeHVYSFI5WEc1Y2JseDBkbUZ5SUdoaGMwOTNia052Ym5OMGNuVmpkRzl5SUQwZ2FHRnpUM2R1TG1OaGJHd29iMkpxTENBblkyOXVjM1J5ZFdOMGIzSW5LVHRjYmx4MGRtRnlJR2hoYzBselVISnZkRzkwZVhCbFQyWWdQU0J2WW1vdVkyOXVjM1J5ZFdOMGIzSWdKaVlnYjJKcUxtTnZibk4wY25WamRHOXlMbkJ5YjNSdmRIbHdaU0FtSmlCb1lYTlBkMjR1WTJGc2JDaHZZbW91WTI5dWMzUnlkV04wYjNJdWNISnZkRzkwZVhCbExDQW5hWE5RY205MGIzUjVjR1ZQWmljcE8xeHVYSFF2THlCT2IzUWdiM2R1SUdOdmJuTjBjblZqZEc5eUlIQnliM0JsY25SNUlHMTFjM1FnWW1VZ1QySnFaV04wWEc1Y2RHbG1JQ2h2WW1vdVkyOXVjM1J5ZFdOMGIzSWdKaVlnSVdoaGMwOTNia052Ym5OMGNuVmpkRzl5SUNZbUlDRm9ZWE5KYzFCeWIzUnZkSGx3WlU5bUtTQjdYRzVjZEZ4MGNtVjBkWEp1SUdaaGJITmxPMXh1WEhSOVhHNWNibHgwTHk4Z1QzZHVJSEJ5YjNCbGNuUnBaWE1nWVhKbElHVnVkVzFsY21GMFpXUWdabWx5YzNSc2VTd2djMjhnZEc4Z2MzQmxaV1FnZFhBc1hHNWNkQzh2SUdsbUlHeGhjM1FnYjI1bElHbHpJRzkzYml3Z2RHaGxiaUJoYkd3Z2NISnZjR1Z5ZEdsbGN5QmhjbVVnYjNkdUxseHVYSFIyWVhJZ2EyVjVPMXh1WEhSbWIzSWdLR3RsZVNCcGJpQnZZbW9wSUhzdktpb3ZmVnh1WEc1Y2RISmxkSFZ5YmlCMGVYQmxiMllnYTJWNUlEMDlQU0FuZFc1a1pXWnBibVZrSnlCOGZDQm9ZWE5QZDI0dVkyRnNiQ2h2WW1vc0lHdGxlU2s3WEc1OU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVJR1Y0ZEdWdVpDZ3BJSHRjYmx4MGRtRnlJRzl3ZEdsdmJuTXNJRzVoYldVc0lITnlZeXdnWTI5d2VTd2dZMjl3ZVVselFYSnlZWGtzSUdOc2IyNWxMRnh1WEhSY2RIUmhjbWRsZENBOUlHRnlaM1Z0Wlc1MGMxc3dYU3hjYmx4MFhIUnBJRDBnTVN4Y2JseDBYSFJzWlc1bmRHZ2dQU0JoY21kMWJXVnVkSE11YkdWdVozUm9MRnh1WEhSY2RHUmxaWEFnUFNCbVlXeHpaVHRjYmx4dVhIUXZMeUJJWVc1a2JHVWdZU0JrWldWd0lHTnZjSGtnYzJsMGRXRjBhVzl1WEc1Y2RHbG1JQ2gwZVhCbGIyWWdkR0Z5WjJWMElEMDlQU0FuWW05dmJHVmhiaWNwSUh0Y2JseDBYSFJrWldWd0lEMGdkR0Z5WjJWME8xeHVYSFJjZEhSaGNtZGxkQ0E5SUdGeVozVnRaVzUwYzFzeFhTQjhmQ0I3ZlR0Y2JseDBYSFF2THlCemEybHdJSFJvWlNCaWIyOXNaV0Z1SUdGdVpDQjBhR1VnZEdGeVoyVjBYRzVjZEZ4MGFTQTlJREk3WEc1Y2RIMGdaV3h6WlNCcFppQW9LSFI1Y0dWdlppQjBZWEpuWlhRZ0lUMDlJQ2R2WW1wbFkzUW5JQ1ltSUhSNWNHVnZaaUIwWVhKblpYUWdJVDA5SUNkbWRXNWpkR2x2YmljcElIeDhJSFJoY21kbGRDQTlQU0J1ZFd4c0tTQjdYRzVjZEZ4MGRHRnlaMlYwSUQwZ2UzMDdYRzVjZEgxY2JseHVYSFJtYjNJZ0tEc2dhU0E4SUd4bGJtZDBhRHNnS3l0cEtTQjdYRzVjZEZ4MGIzQjBhVzl1Y3lBOUlHRnlaM1Z0Wlc1MGMxdHBYVHRjYmx4MFhIUXZMeUJQYm14NUlHUmxZV3dnZDJsMGFDQnViMjR0Ym5Wc2JDOTFibVJsWm1sdVpXUWdkbUZzZFdWelhHNWNkRngwYVdZZ0tHOXdkR2x2Ym5NZ0lUMGdiblZzYkNrZ2UxeHVYSFJjZEZ4MEx5OGdSWGgwWlc1a0lIUm9aU0JpWVhObElHOWlhbVZqZEZ4dVhIUmNkRngwWm05eUlDaHVZVzFsSUdsdUlHOXdkR2x2Ym5NcElIdGNibHgwWEhSY2RGeDBjM0pqSUQwZ2RHRnlaMlYwVzI1aGJXVmRPMXh1WEhSY2RGeDBYSFJqYjNCNUlEMGdiM0IwYVc5dWMxdHVZVzFsWFR0Y2JseHVYSFJjZEZ4MFhIUXZMeUJRY21WMlpXNTBJRzVsZG1WeUxXVnVaR2x1WnlCc2IyOXdYRzVjZEZ4MFhIUmNkR2xtSUNoMFlYSm5aWFFnSVQwOUlHTnZjSGtwSUh0Y2JseDBYSFJjZEZ4MFhIUXZMeUJTWldOMWNuTmxJR2xtSUhkbEozSmxJRzFsY21kcGJtY2djR3hoYVc0Z2IySnFaV04wY3lCdmNpQmhjbkpoZVhOY2JseDBYSFJjZEZ4MFhIUnBaaUFvWkdWbGNDQW1KaUJqYjNCNUlDWW1JQ2hwYzFCc1lXbHVUMkpxWldOMEtHTnZjSGtwSUh4OElDaGpiM0I1U1hOQmNuSmhlU0E5SUdselFYSnlZWGtvWTI5d2VTa3BLU2tnZTF4dVhIUmNkRngwWEhSY2RGeDBhV1lnS0dOdmNIbEpjMEZ5Y21GNUtTQjdYRzVjZEZ4MFhIUmNkRngwWEhSY2RHTnZjSGxKYzBGeWNtRjVJRDBnWm1Gc2MyVTdYRzVjZEZ4MFhIUmNkRngwWEhSY2RHTnNiMjVsSUQwZ2MzSmpJQ1ltSUdselFYSnlZWGtvYzNKaktTQS9JSE55WXlBNklGdGRPMXh1WEhSY2RGeDBYSFJjZEZ4MGZTQmxiSE5sSUh0Y2JseDBYSFJjZEZ4MFhIUmNkRngwWTJ4dmJtVWdQU0J6Y21NZ0ppWWdhWE5RYkdGcGJrOWlhbVZqZENoemNtTXBJRDhnYzNKaklEb2dlMzA3WEc1Y2RGeDBYSFJjZEZ4MFhIUjlYRzVjYmx4MFhIUmNkRngwWEhSY2RDOHZJRTVsZG1WeUlHMXZkbVVnYjNKcFoybHVZV3dnYjJKcVpXTjBjeXdnWTJ4dmJtVWdkR2hsYlZ4dVhIUmNkRngwWEhSY2RGeDBkR0Z5WjJWMFcyNWhiV1ZkSUQwZ1pYaDBaVzVrS0dSbFpYQXNJR05zYjI1bExDQmpiM0I1S1R0Y2JseHVYSFJjZEZ4MFhIUmNkQzh2SUVSdmJpZDBJR0p5YVc1bklHbHVJSFZ1WkdWbWFXNWxaQ0IyWVd4MVpYTmNibHgwWEhSY2RGeDBYSFI5SUdWc2MyVWdhV1lnS0hSNWNHVnZaaUJqYjNCNUlDRTlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVYSFJjZEZ4MFhIUmNkRngwZEdGeVoyVjBXMjVoYldWZElEMGdZMjl3ZVR0Y2JseDBYSFJjZEZ4MFhIUjlYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDFjYmx4MFhIUjlYRzVjZEgxY2JseHVYSFF2THlCU1pYUjFjbTRnZEdobElHMXZaR2xtYVdWa0lHOWlhbVZqZEZ4dVhIUnlaWFIxY200Z2RHRnlaMlYwTzF4dWZUdGNibHh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2WlhoMFpXNWtMMmx1WkdWNExtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNVnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1ZG1GeUlITjBjbWxqZEZWeWFVVnVZMjlrWlNBOUlISmxjWFZwY21Vb0ozTjBjbWxqZEMxMWNta3RaVzVqYjJSbEp5azdYRzUyWVhJZ2IySnFaV04wUVhOemFXZHVJRDBnY21WeGRXbHlaU2duYjJKcVpXTjBMV0Z6YzJsbmJpY3BPMXh1WEc1bWRXNWpkR2x2YmlCbGJtTnZaR1VvZG1Gc2RXVXNJRzl3ZEhNcElIdGNibHgwYVdZZ0tHOXdkSE11Wlc1amIyUmxLU0I3WEc1Y2RGeDBjbVYwZFhKdUlHOXdkSE11YzNSeWFXTjBJRDhnYzNSeWFXTjBWWEpwUlc1amIyUmxLSFpoYkhWbEtTQTZJR1Z1WTI5a1pWVlNTVU52YlhCdmJtVnVkQ2gyWVd4MVpTazdYRzVjZEgxY2JseHVYSFJ5WlhSMWNtNGdkbUZzZFdVN1hHNTlYRzVjYm1WNGNHOXlkSE11WlhoMGNtRmpkQ0E5SUdaMWJtTjBhVzl1SUNoemRISXBJSHRjYmx4MGNtVjBkWEp1SUhOMGNpNXpjR3hwZENnblB5Y3BXekZkSUh4OElDY25PMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NXdZWEp6WlNBOUlHWjFibU4wYVc5dUlDaHpkSElwSUh0Y2JseDBMeThnUTNKbFlYUmxJR0Z1SUc5aWFtVmpkQ0IzYVhSb0lHNXZJSEJ5YjNSdmRIbHdaVnh1WEhRdkx5Qm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZjMmx1WkhKbGMyOXlhSFZ6TDNGMVpYSjVMWE4wY21sdVp5OXBjM04xWlhNdk5EZGNibHgwZG1GeUlISmxkQ0E5SUU5aWFtVmpkQzVqY21WaGRHVW9iblZzYkNrN1hHNWNibHgwYVdZZ0tIUjVjR1Z2WmlCemRISWdJVDA5SUNkemRISnBibWNuS1NCN1hHNWNkRngwY21WMGRYSnVJSEpsZER0Y2JseDBmVnh1WEc1Y2RITjBjaUE5SUhOMGNpNTBjbWx0S0NrdWNtVndiR0ZqWlNndlhpaGNYRDk4STN3bUtTOHNJQ2NuS1R0Y2JseHVYSFJwWmlBb0lYTjBjaWtnZTF4dVhIUmNkSEpsZEhWeWJpQnlaWFE3WEc1Y2RIMWNibHh1WEhSemRISXVjM0JzYVhRb0p5WW5LUzVtYjNKRllXTm9LR1oxYm1OMGFXOXVJQ2h3WVhKaGJTa2dlMXh1WEhSY2RIWmhjaUJ3WVhKMGN5QTlJSEJoY21GdExuSmxjR3hoWTJVb0wxeGNLeTluTENBbklDY3BMbk53YkdsMEtDYzlKeWs3WEc1Y2RGeDBMeThnUm1seVpXWnZlQ0FvY0hKbElEUXdLU0JrWldOdlpHVnpJR0FsTTBSZ0lIUnZJR0E5WUZ4dVhIUmNkQzh2SUdoMGRIQnpPaTh2WjJsMGFIVmlMbU52YlM5emFXNWtjbVZ6YjNKb2RYTXZjWFZsY25rdGMzUnlhVzVuTDNCMWJHd3ZNemRjYmx4MFhIUjJZWElnYTJWNUlEMGdjR0Z5ZEhNdWMyaHBablFvS1R0Y2JseDBYSFIyWVhJZ2RtRnNJRDBnY0dGeWRITXViR1Z1WjNSb0lENGdNQ0EvSUhCaGNuUnpMbXB2YVc0b0p6MG5LU0E2SUhWdVpHVm1hVzVsWkR0Y2JseHVYSFJjZEd0bGVTQTlJR1JsWTI5a1pWVlNTVU52YlhCdmJtVnVkQ2hyWlhrcE8xeHVYRzVjZEZ4MEx5OGdiV2x6YzJsdVp5QmdQV0FnYzJodmRXeGtJR0psSUdCdWRXeHNZRHBjYmx4MFhIUXZMeUJvZEhSd09pOHZkek11YjNKbkwxUlNMekl3TVRJdlYwUXRkWEpzTFRJd01USXdOVEkwTHlOamIyeHNaV04wTFhWeWJDMXdZWEpoYldWMFpYSnpYRzVjZEZ4MGRtRnNJRDBnZG1Gc0lEMDlQU0IxYm1SbFptbHVaV1FnUHlCdWRXeHNJRG9nWkdWamIyUmxWVkpKUTI5dGNHOXVaVzUwS0haaGJDazdYRzVjYmx4MFhIUnBaaUFvY21WMFcydGxlVjBnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1WEhSY2RGeDBjbVYwVzJ0bGVWMGdQU0IyWVd3N1hHNWNkRngwZlNCbGJITmxJR2xtSUNoQmNuSmhlUzVwYzBGeWNtRjVLSEpsZEZ0clpYbGRLU2tnZTF4dVhIUmNkRngwY21WMFcydGxlVjB1Y0hWemFDaDJZV3dwTzF4dVhIUmNkSDBnWld4elpTQjdYRzVjZEZ4MFhIUnlaWFJiYTJWNVhTQTlJRnR5WlhSYmEyVjVYU3dnZG1Gc1hUdGNibHgwWEhSOVhHNWNkSDBwTzF4dVhHNWNkSEpsZEhWeWJpQnlaWFE3WEc1OU8xeHVYRzVsZUhCdmNuUnpMbk4wY21sdVoybG1lU0E5SUdaMWJtTjBhVzl1SUNodlltb3NJRzl3ZEhNcElIdGNibHgwZG1GeUlHUmxabUYxYkhSeklEMGdlMXh1WEhSY2RHVnVZMjlrWlRvZ2RISjFaU3hjYmx4MFhIUnpkSEpwWTNRNklIUnlkV1ZjYmx4MGZUdGNibHh1WEhSdmNIUnpJRDBnYjJKcVpXTjBRWE56YVdkdUtHUmxabUYxYkhSekxDQnZjSFJ6S1R0Y2JseHVYSFJ5WlhSMWNtNGdiMkpxSUQ4Z1QySnFaV04wTG10bGVYTW9iMkpxS1M1emIzSjBLQ2t1YldGd0tHWjFibU4wYVc5dUlDaHJaWGtwSUh0Y2JseDBYSFIyWVhJZ2RtRnNJRDBnYjJKcVcydGxlVjA3WEc1Y2JseDBYSFJwWmlBb2RtRnNJRDA5UFNCMWJtUmxabWx1WldRcElIdGNibHgwWEhSY2RISmxkSFZ5YmlBbkp6dGNibHgwWEhSOVhHNWNibHgwWEhScFppQW9kbUZzSUQwOVBTQnVkV3hzS1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWlc1amIyUmxLR3RsZVN3Z2IzQjBjeWs3WEc1Y2RGeDBmVnh1WEc1Y2RGeDBhV1lnS0VGeWNtRjVMbWx6UVhKeVlYa29kbUZzS1NrZ2UxeHVYSFJjZEZ4MGRtRnlJSEpsYzNWc2RDQTlJRnRkTzF4dVhHNWNkRngwWEhSMllXd3VjMnhwWTJVb0tTNW1iM0pGWVdOb0tHWjFibU4wYVc5dUlDaDJZV3d5S1NCN1hHNWNkRngwWEhSY2RHbG1JQ2gyWVd3eUlEMDlQU0IxYm1SbFptbHVaV1FwSUh0Y2JseDBYSFJjZEZ4MFhIUnlaWFIxY200N1hHNWNkRngwWEhSY2RIMWNibHh1WEhSY2RGeDBYSFJwWmlBb2RtRnNNaUE5UFQwZ2JuVnNiQ2tnZTF4dVhIUmNkRngwWEhSY2RISmxjM1ZzZEM1d2RYTm9LR1Z1WTI5a1pTaHJaWGtzSUc5d2RITXBLVHRjYmx4MFhIUmNkRngwZlNCbGJITmxJSHRjYmx4MFhIUmNkRngwWEhSeVpYTjFiSFF1Y0hWemFDaGxibU52WkdVb2EyVjVMQ0J2Y0hSektTQXJJQ2M5SnlBcklHVnVZMjlrWlNoMllXd3lMQ0J2Y0hSektTazdYRzVjZEZ4MFhIUmNkSDFjYmx4MFhIUmNkSDBwTzF4dVhHNWNkRngwWEhSeVpYUjFjbTRnY21WemRXeDBMbXB2YVc0b0p5WW5LVHRjYmx4MFhIUjlYRzVjYmx4MFhIUnlaWFIxY200Z1pXNWpiMlJsS0d0bGVTd2diM0IwY3lrZ0t5QW5QU2NnS3lCbGJtTnZaR1VvZG1Gc0xDQnZjSFJ6S1R0Y2JseDBmU2t1Wm1sc2RHVnlLR1oxYm1OMGFXOXVJQ2g0S1NCN1hHNWNkRngwY21WMGRYSnVJSGd1YkdWdVozUm9JRDRnTUR0Y2JseDBmU2t1YW05cGJpZ25KaWNwSURvZ0p5YzdYRzU5TzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmNYVmxjbmt0YzNSeWFXNW5MMmx1WkdWNExtcHpYRzRnS2lvZ2JXOWtkV3hsSUdsa0lEMGdNbHh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aUozVnpaU0J6ZEhKcFkzUW5PMXh1Ylc5a2RXeGxMbVY0Y0c5eWRITWdQU0JtZFc1amRHbHZiaUFvYzNSeUtTQjdYRzVjZEhKbGRIVnliaUJsYm1OdlpHVlZVa2xEYjIxd2IyNWxiblFvYzNSeUtTNXlaWEJzWVdObEtDOWJJU2NvS1NwZEwyY3NJR1oxYm1OMGFXOXVJQ2hqS1NCN1hHNWNkRngwY21WMGRYSnVJQ2NsSnlBcklHTXVZMmhoY2tOdlpHVkJkQ2d3S1M1MGIxTjBjbWx1WnlneE5pa3VkRzlWY0hCbGNrTmhjMlVvS1R0Y2JseDBmU2s3WEc1OU8xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZjM1J5YVdOMExYVnlhUzFsYm1OdlpHVXZhVzVrWlhndWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXpYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENJbmRYTmxJSE4wY21samRDYzdYRzR2S2lCbGMyeHBiblF0WkdsellXSnNaU0J1YnkxMWJuVnpaV1F0ZG1GeWN5QXFMMXh1ZG1GeUlHaGhjMDkzYmxCeWIzQmxjblI1SUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1b1lYTlBkMjVRY205d1pYSjBlVHRjYm5aaGNpQndjbTl3U1hORmJuVnRaWEpoWW14bElEMGdUMkpxWldOMExuQnliM1J2ZEhsd1pTNXdjbTl3WlhKMGVVbHpSVzUxYldWeVlXSnNaVHRjYmx4dVpuVnVZM1JwYjI0Z2RHOVBZbXBsWTNRb2RtRnNLU0I3WEc1Y2RHbG1JQ2gyWVd3Z1BUMDlJRzUxYkd3Z2ZId2dkbUZzSUQwOVBTQjFibVJsWm1sdVpXUXBJSHRjYmx4MFhIUjBhSEp2ZHlCdVpYY2dWSGx3WlVWeWNtOXlLQ2RQWW1wbFkzUXVZWE56YVdkdUlHTmhibTV2ZENCaVpTQmpZV3hzWldRZ2QybDBhQ0J1ZFd4c0lHOXlJSFZ1WkdWbWFXNWxaQ2NwTzF4dVhIUjlYRzVjYmx4MGNtVjBkWEp1SUU5aWFtVmpkQ2gyWVd3cE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCemFHOTFiR1JWYzJWT1lYUnBkbVVvS1NCN1hHNWNkSFJ5ZVNCN1hHNWNkRngwYVdZZ0tDRlBZbXBsWTNRdVlYTnphV2R1S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnWm1Gc2MyVTdYRzVjZEZ4MGZWeHVYRzVjZEZ4MEx5OGdSR1YwWldOMElHSjFaMmQ1SUhCeWIzQmxjblI1SUdWdWRXMWxjbUYwYVc5dUlHOXlaR1Z5SUdsdUlHOXNaR1Z5SUZZNElIWmxjbk5wYjI1ekxseHVYRzVjZEZ4MEx5OGdhSFIwY0hNNkx5OWlkV2R6TG1Ob2NtOXRhWFZ0TG05eVp5OXdMM1k0TDJsemMzVmxjeTlrWlhSaGFXdy9hV1E5TkRFeE9GeHVYSFJjZEhaaGNpQjBaWE4wTVNBOUlHNWxkeUJUZEhKcGJtY29KMkZpWXljcE95QWdMeThnWlhOc2FXNTBMV1JwYzJGaWJHVXRiR2x1WlZ4dVhIUmNkSFJsYzNReFd6VmRJRDBnSjJSbEp6dGNibHgwWEhScFppQW9UMkpxWldOMExtZGxkRTkzYmxCeWIzQmxjblI1VG1GdFpYTW9kR1Z6ZERFcFd6QmRJRDA5UFNBbk5TY3BJSHRjYmx4MFhIUmNkSEpsZEhWeWJpQm1ZV3h6WlR0Y2JseDBYSFI5WEc1Y2JseDBYSFF2THlCb2RIUndjem92TDJKMVozTXVZMmh5YjIxcGRXMHViM0puTDNBdmRqZ3ZhWE56ZFdWekwyUmxkR0ZwYkQ5cFpEMHpNRFUyWEc1Y2RGeDBkbUZ5SUhSbGMzUXlJRDBnZTMwN1hHNWNkRngwWm05eUlDaDJZWElnYVNBOUlEQTdJR2tnUENBeE1Ec2dhU3NyS1NCN1hHNWNkRngwWEhSMFpYTjBNbHNuWHljZ0t5QlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxLR2twWFNBOUlHazdYRzVjZEZ4MGZWeHVYSFJjZEhaaGNpQnZjbVJsY2pJZ1BTQlBZbXBsWTNRdVoyVjBUM2R1VUhKdmNHVnlkSGxPWVcxbGN5aDBaWE4wTWlrdWJXRndLR1oxYm1OMGFXOXVJQ2h1S1NCN1hHNWNkRngwWEhSeVpYUjFjbTRnZEdWemRESmJibDA3WEc1Y2RGeDBmU2s3WEc1Y2RGeDBhV1lnS0c5eVpHVnlNaTVxYjJsdUtDY25LU0FoUFQwZ0p6QXhNak0wTlRZM09Ea25LU0I3WEc1Y2RGeDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkRngwZlZ4dVhHNWNkRngwTHk4Z2FIUjBjSE02THk5aWRXZHpMbU5vY205dGFYVnRMbTl5Wnk5d0wzWTRMMmx6YzNWbGN5OWtaWFJoYVd3L2FXUTlNekExTmx4dVhIUmNkSFpoY2lCMFpYTjBNeUE5SUh0OU8xeHVYSFJjZENkaFltTmtaV1puYUdscWEyeHRibTl3Y1hKemRDY3VjM0JzYVhRb0p5Y3BMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNGdLR3hsZEhSbGNpa2dlMXh1WEhSY2RGeDBkR1Z6ZEROYmJHVjBkR1Z5WFNBOUlHeGxkSFJsY2p0Y2JseDBYSFI5S1R0Y2JseDBYSFJwWmlBb1QySnFaV04wTG10bGVYTW9UMkpxWldOMExtRnpjMmxuYmloN2ZTd2dkR1Z6ZERNcEtTNXFiMmx1S0NjbktTQWhQVDFjYmx4MFhIUmNkRngwSjJGaVkyUmxabWRvYVdwcmJHMXViM0J4Y25OMEp5a2dlMXh1WEhSY2RGeDBjbVYwZFhKdUlHWmhiSE5sTzF4dVhIUmNkSDFjYmx4dVhIUmNkSEpsZEhWeWJpQjBjblZsTzF4dVhIUjlJR05oZEdOb0lDaGxLU0I3WEc1Y2RGeDBMeThnVjJVZ1pHOXVKM1FnWlhod1pXTjBJR0Z1ZVNCdlppQjBhR1VnWVdKdmRtVWdkRzhnZEdoeWIzY3NJR0oxZENCaVpYUjBaWElnZEc4Z1ltVWdjMkZtWlM1Y2JseDBYSFJ5WlhSMWNtNGdabUZzYzJVN1hHNWNkSDFjYm4xY2JseHViVzlrZFd4bExtVjRjRzl5ZEhNZ1BTQnphRzkxYkdSVmMyVk9ZWFJwZG1Vb0tTQS9JRTlpYW1WamRDNWhjM05wWjI0Z09pQm1kVzVqZEdsdmJpQW9kR0Z5WjJWMExDQnpiM1Z5WTJVcElIdGNibHgwZG1GeUlHWnliMjA3WEc1Y2RIWmhjaUIwYnlBOUlIUnZUMkpxWldOMEtIUmhjbWRsZENrN1hHNWNkSFpoY2lCemVXMWliMnh6TzF4dVhHNWNkR1p2Y2lBb2RtRnlJSE1nUFNBeE95QnpJRHdnWVhKbmRXMWxiblJ6TG14bGJtZDBhRHNnY3lzcktTQjdYRzVjZEZ4MFpuSnZiU0E5SUU5aWFtVmpkQ2hoY21kMWJXVnVkSE5iYzEwcE8xeHVYRzVjZEZ4MFptOXlJQ2gyWVhJZ2EyVjVJR2x1SUdaeWIyMHBJSHRjYmx4MFhIUmNkR2xtSUNob1lYTlBkMjVRY205d1pYSjBlUzVqWVd4c0tHWnliMjBzSUd0bGVTa3BJSHRjYmx4MFhIUmNkRngwZEc5YmEyVjVYU0E5SUdaeWIyMWJhMlY1WFR0Y2JseDBYSFJjZEgxY2JseDBYSFI5WEc1Y2JseDBYSFJwWmlBb1QySnFaV04wTG1kbGRFOTNibEJ5YjNCbGNuUjVVM2x0WW05c2N5a2dlMXh1WEhSY2RGeDBjM2x0WW05c2N5QTlJRTlpYW1WamRDNW5aWFJQZDI1UWNtOXdaWEowZVZONWJXSnZiSE1vWm5KdmJTazdYRzVjZEZ4MFhIUm1iM0lnS0haaGNpQnBJRDBnTURzZ2FTQThJSE41YldKdmJITXViR1Z1WjNSb095QnBLeXNwSUh0Y2JseDBYSFJjZEZ4MGFXWWdLSEJ5YjNCSmMwVnVkVzFsY21GaWJHVXVZMkZzYkNobWNtOXRMQ0J6ZVcxaWIyeHpXMmxkS1NrZ2UxeHVYSFJjZEZ4MFhIUmNkSFJ2VzNONWJXSnZiSE5iYVYxZElEMGdabkp2YlZ0emVXMWliMnh6VzJsZFhUdGNibHgwWEhSY2RGeDBmVnh1WEhSY2RGeDBmVnh1WEhSY2RIMWNibHgwZlZ4dVhHNWNkSEpsZEhWeWJpQjBienRjYm4wN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOXZZbXBsWTNRdFlYTnphV2R1TDJsdVpHVjRMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lLR1oxYm1OMGFXOXVLSE5sYkdZcElIdGNiaUFnSjNWelpTQnpkSEpwWTNRbk8xeHVYRzRnSUdsbUlDaHpaV3htTG1abGRHTm9LU0I3WEc0Z0lDQWdjbVYwZFhKdVhHNGdJSDFjYmx4dUlDQjJZWElnYzNWd2NHOXlkQ0E5SUh0Y2JpQWdJQ0J6WldGeVkyaFFZWEpoYlhNNklDZFZVa3hUWldGeVkyaFFZWEpoYlhNbklHbHVJSE5sYkdZc1hHNGdJQ0FnYVhSbGNtRmliR1U2SUNkVGVXMWliMnduSUdsdUlITmxiR1lnSmlZZ0oybDBaWEpoZEc5eUp5QnBiaUJUZVcxaWIyd3NYRzRnSUNBZ1lteHZZam9nSjBacGJHVlNaV0ZrWlhJbklHbHVJSE5sYkdZZ0ppWWdKMEpzYjJJbklHbHVJSE5sYkdZZ0ppWWdLR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdibVYzSUVKc2IySW9LVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdkSEoxWlZ4dUlDQWdJQ0FnZlNCallYUmphQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCbVlXeHpaVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBLQ2tzWEc0Z0lDQWdabTl5YlVSaGRHRTZJQ2RHYjNKdFJHRjBZU2NnYVc0Z2MyVnNaaXhjYmlBZ0lDQmhjbkpoZVVKMVptWmxjam9nSjBGeWNtRjVRblZtWm1WeUp5QnBiaUJ6Wld4bVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnViM0p0WVd4cGVtVk9ZVzFsS0c1aGJXVXBJSHRjYmlBZ0lDQnBaaUFvZEhsd1pXOW1JRzVoYldVZ0lUMDlJQ2R6ZEhKcGJtY25LU0I3WEc0Z0lDQWdJQ0J1WVcxbElEMGdVM1J5YVc1bktHNWhiV1VwWEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2d2VzE1aExYb3dMVGxjWEMwakpDVW1KeW9yTGx4Y1hsOWdmSDVkTDJrdWRHVnpkQ2h1WVcxbEtTa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRlI1Y0dWRmNuSnZjaWduU1c1MllXeHBaQ0JqYUdGeVlXTjBaWElnYVc0Z2FHVmhaR1Z5SUdacFpXeGtJRzVoYldVbktWeHVJQ0FnSUgxY2JpQWdJQ0J5WlhSMWNtNGdibUZ0WlM1MGIweHZkMlZ5UTJGelpTZ3BYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJ1YjNKdFlXeHBlbVZXWVd4MVpTaDJZV3gxWlNrZ2UxeHVJQ0FnSUdsbUlDaDBlWEJsYjJZZ2RtRnNkV1VnSVQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQjJZV3gxWlNBOUlGTjBjbWx1WnloMllXeDFaU2xjYmlBZ0lDQjlYRzRnSUNBZ2NtVjBkWEp1SUhaaGJIVmxYRzRnSUgxY2JseHVJQ0F2THlCQ2RXbHNaQ0JoSUdSbGMzUnlkV04wYVhabElHbDBaWEpoZEc5eUlHWnZjaUIwYUdVZ2RtRnNkV1VnYkdsemRGeHVJQ0JtZFc1amRHbHZiaUJwZEdWeVlYUnZja1p2Y2locGRHVnRjeWtnZTF4dUlDQWdJSFpoY2lCcGRHVnlZWFJ2Y2lBOUlIdGNiaUFnSUNBZ0lHNWxlSFE2SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnZG1Gc2RXVWdQU0JwZEdWdGN5NXphR2xtZENncFhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCN1pHOXVaVG9nZG1Gc2RXVWdQVDA5SUhWdVpHVm1hVzVsWkN3Z2RtRnNkV1U2SUhaaGJIVmxmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h6ZFhCd2IzSjBMbWwwWlhKaFlteGxLU0I3WEc0Z0lDQWdJQ0JwZEdWeVlYUnZjbHRUZVcxaWIyd3VhWFJsY21GMGIzSmRJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCcGRHVnlZWFJ2Y2x4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEhWeWJpQnBkR1Z5WVhSdmNseHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdTR1ZoWkdWeWN5aG9aV0ZrWlhKektTQjdYRzRnSUNBZ2RHaHBjeTV0WVhBZ1BTQjdmVnh1WEc0Z0lDQWdhV1lnS0dobFlXUmxjbk1nYVc1emRHRnVZMlZ2WmlCSVpXRmtaWEp6S1NCN1hHNGdJQ0FnSUNCb1pXRmtaWEp6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzVoYldVcElIdGNiaUFnSUNBZ0lDQWdkR2hwY3k1aGNIQmxibVFvYm1GdFpTd2dkbUZzZFdVcFhHNGdJQ0FnSUNCOUxDQjBhR2x6S1Z4dVhHNGdJQ0FnZlNCbGJITmxJR2xtSUNob1pXRmtaWEp6S1NCN1hHNGdJQ0FnSUNCUFltcGxZM1F1WjJWMFQzZHVVSEp2Y0dWeWRIbE9ZVzFsY3lob1pXRmtaWEp6S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWhjSEJsYm1Rb2JtRnRaU3dnYUdWaFpHVnljMXR1WVcxbFhTbGNiaUFnSUNBZ0lIMHNJSFJvYVhNcFhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dVdVlYQndaVzVrSUQwZ1puVnVZM1JwYjI0b2JtRnRaU3dnZG1Gc2RXVXBJSHRjYmlBZ0lDQnVZVzFsSUQwZ2JtOXliV0ZzYVhwbFRtRnRaU2h1WVcxbEtWeHVJQ0FnSUhaaGJIVmxJRDBnYm05eWJXRnNhWHBsVm1Gc2RXVW9kbUZzZFdVcFhHNGdJQ0FnZG1GeUlHeHBjM1FnUFNCMGFHbHpMbTFoY0Z0dVlXMWxYVnh1SUNBZ0lHbG1JQ2doYkdsemRDa2dlMXh1SUNBZ0lDQWdiR2x6ZENBOUlGdGRYRzRnSUNBZ0lDQjBhR2x6TG0xaGNGdHVZVzFsWFNBOUlHeHBjM1JjYmlBZ0lDQjlYRzRnSUNBZ2JHbHpkQzV3ZFhOb0tIWmhiSFZsS1Z4dUlDQjlYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dWYkoyUmxiR1YwWlNkZElEMGdablZ1WTNScGIyNG9ibUZ0WlNrZ2UxeHVJQ0FnSUdSbGJHVjBaU0IwYUdsekxtMWhjRnR1YjNKdFlXeHBlbVZPWVcxbEtHNWhiV1VwWFZ4dUlDQjlYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dVdVoyVjBJRDBnWm5WdVkzUnBiMjRvYm1GdFpTa2dlMXh1SUNBZ0lIWmhjaUIyWVd4MVpYTWdQU0IwYUdsekxtMWhjRnR1YjNKdFlXeHBlbVZPWVcxbEtHNWhiV1VwWFZ4dUlDQWdJSEpsZEhWeWJpQjJZV3gxWlhNZ1B5QjJZV3gxWlhOYk1GMGdPaUJ1ZFd4c1hHNGdJSDFjYmx4dUlDQklaV0ZrWlhKekxuQnliM1J2ZEhsd1pTNW5aWFJCYkd3Z1BTQm1kVzVqZEdsdmJpaHVZVzFsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXRndXMjV2Y20xaGJHbDZaVTVoYldVb2JtRnRaU2xkSUh4OElGdGRYRzRnSUgxY2JseHVJQ0JJWldGa1pYSnpMbkJ5YjNSdmRIbHdaUzVvWVhNZ1BTQm1kVzVqZEdsdmJpaHVZVzFsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNdWJXRndMbWhoYzA5M2JsQnliM0JsY25SNUtHNXZjbTFoYkdsNlpVNWhiV1VvYm1GdFpTa3BYRzRnSUgxY2JseHVJQ0JJWldGa1pYSnpMbkJ5YjNSdmRIbHdaUzV6WlhRZ1BTQm1kVzVqZEdsdmJpaHVZVzFsTENCMllXeDFaU2tnZTF4dUlDQWdJSFJvYVhNdWJXRndXMjV2Y20xaGJHbDZaVTVoYldVb2JtRnRaU2xkSUQwZ1cyNXZjbTFoYkdsNlpWWmhiSFZsS0haaGJIVmxLVjFjYmlBZ2ZWeHVYRzRnSUVobFlXUmxjbk11Y0hKdmRHOTBlWEJsTG1admNrVmhZMmdnUFNCbWRXNWpkR2x2YmloallXeHNZbUZqYXl3Z2RHaHBjMEZ5WnlrZ2UxeHVJQ0FnSUU5aWFtVmpkQzVuWlhSUGQyNVFjbTl3WlhKMGVVNWhiV1Z6S0hSb2FYTXViV0Z3S1M1bWIzSkZZV05vS0daMWJtTjBhVzl1S0c1aGJXVXBJSHRjYmlBZ0lDQWdJSFJvYVhNdWJXRndXMjVoYldWZExtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ1kyRnNiR0poWTJzdVkyRnNiQ2gwYUdselFYSm5MQ0IyWVd4MVpTd2dibUZ0WlN3Z2RHaHBjeWxjYmlBZ0lDQWdJSDBzSUhSb2FYTXBYRzRnSUNBZ2ZTd2dkR2hwY3lsY2JpQWdmVnh1WEc0Z0lFaGxZV1JsY25NdWNISnZkRzkwZVhCbExtdGxlWE1nUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCMllYSWdhWFJsYlhNZ1BTQmJYVnh1SUNBZ0lIUm9hWE11Wm05eVJXRmphQ2htZFc1amRHbHZiaWgyWVd4MVpTd2dibUZ0WlNrZ2V5QnBkR1Z0Y3k1d2RYTm9LRzVoYldVcElIMHBYRzRnSUNBZ2NtVjBkWEp1SUdsMFpYSmhkRzl5Um05eUtHbDBaVzF6S1Z4dUlDQjlYRzVjYmlBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dVdWRtRnNkV1Z6SUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ2RtRnlJR2wwWlcxeklEMGdXMTFjYmlBZ0lDQjBhR2x6TG1admNrVmhZMmdvWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHNnYVhSbGJYTXVjSFZ6YUNoMllXeDFaU2tnZlNsY2JpQWdJQ0J5WlhSMWNtNGdhWFJsY21GMGIzSkdiM0lvYVhSbGJYTXBYRzRnSUgxY2JseHVJQ0JJWldGa1pYSnpMbkJ5YjNSdmRIbHdaUzVsYm5SeWFXVnpJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlHbDBaVzF6SUQwZ1cxMWNiaUFnSUNCMGFHbHpMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9kbUZzZFdVc0lHNWhiV1VwSUhzZ2FYUmxiWE11Y0hWemFDaGJibUZ0WlN3Z2RtRnNkV1ZkS1NCOUtWeHVJQ0FnSUhKbGRIVnliaUJwZEdWeVlYUnZja1p2Y2locGRHVnRjeWxjYmlBZ2ZWeHVYRzRnSUdsbUlDaHpkWEJ3YjNKMExtbDBaWEpoWW14bEtTQjdYRzRnSUNBZ1NHVmhaR1Z5Y3k1d2NtOTBiM1I1Y0dWYlUzbHRZbTlzTG1sMFpYSmhkRzl5WFNBOUlFaGxZV1JsY25NdWNISnZkRzkwZVhCbExtVnVkSEpwWlhOY2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHTnZibk4xYldWa0tHSnZaSGtwSUh0Y2JpQWdJQ0JwWmlBb1ltOWtlUzVpYjJSNVZYTmxaQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJRkJ5YjIxcGMyVXVjbVZxWldOMEtHNWxkeUJVZVhCbFJYSnliM0lvSjBGc2NtVmhaSGtnY21WaFpDY3BLVnh1SUNBZ0lIMWNiaUFnSUNCaWIyUjVMbUp2WkhsVmMyVmtJRDBnZEhKMVpWeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdabWxzWlZKbFlXUmxjbEpsWVdSNUtISmxZV1JsY2lrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1VISnZiV2x6WlNobWRXNWpkR2x2YmloeVpYTnZiSFpsTENCeVpXcGxZM1FwSUh0Y2JpQWdJQ0FnSUhKbFlXUmxjaTV2Ym14dllXUWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVnpiMngyWlNoeVpXRmtaWEl1Y21WemRXeDBLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdjbVZoWkdWeUxtOXVaWEp5YjNJZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnY21WcVpXTjBLSEpsWVdSbGNpNWxjbkp2Y2lsY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5S1Z4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVmhaRUpzYjJKQmMwRnljbUY1UW5WbVptVnlLR0pzYjJJcElIdGNiaUFnSUNCMllYSWdjbVZoWkdWeUlEMGdibVYzSUVacGJHVlNaV0ZrWlhJb0tWeHVJQ0FnSUhKbFlXUmxjaTV5WldGa1FYTkJjbkpoZVVKMVptWmxjaWhpYkc5aUtWeHVJQ0FnSUhKbGRIVnliaUJtYVd4bFVtVmhaR1Z5VW1WaFpIa29jbVZoWkdWeUtWeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdjbVZoWkVKc2IySkJjMVJsZUhRb1lteHZZaWtnZTF4dUlDQWdJSFpoY2lCeVpXRmtaWElnUFNCdVpYY2dSbWxzWlZKbFlXUmxjaWdwWEc0Z0lDQWdjbVZoWkdWeUxuSmxZV1JCYzFSbGVIUW9ZbXh2WWlsY2JpQWdJQ0J5WlhSMWNtNGdabWxzWlZKbFlXUmxjbEpsWVdSNUtISmxZV1JsY2lsY2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlFSnZaSGtvS1NCN1hHNGdJQ0FnZEdocGN5NWliMlI1VlhObFpDQTlJR1poYkhObFhHNWNiaUFnSUNCMGFHbHpMbDlwYm1sMFFtOWtlU0E5SUdaMWJtTjBhVzl1S0dKdlpIa3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgySnZaSGxKYm1sMElEMGdZbTlrZVZ4dUlDQWdJQ0FnYVdZZ0tIUjVjR1Z2WmlCaWIyUjVJRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5aWIyUjVWR1Y0ZENBOUlHSnZaSGxjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvYzNWd2NHOXlkQzVpYkc5aUlDWW1JRUpzYjJJdWNISnZkRzkwZVhCbExtbHpVSEp2ZEc5MGVYQmxUMllvWW05a2VTa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZbTlrZVVKc2IySWdQU0JpYjJSNVhHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tITjFjSEJ2Y25RdVptOXliVVJoZEdFZ0ppWWdSbTl5YlVSaGRHRXVjSEp2ZEc5MGVYQmxMbWx6VUhKdmRHOTBlWEJsVDJZb1ltOWtlU2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWW05a2VVWnZjbTFFWVhSaElEMGdZbTlrZVZ4dUlDQWdJQ0FnZlNCbGJITmxJR2xtSUNoemRYQndiM0owTG5ObFlYSmphRkJoY21GdGN5QW1KaUJWVWt4VFpXRnlZMmhRWVhKaGJYTXVjSEp2ZEc5MGVYQmxMbWx6VUhKdmRHOTBlWEJsVDJZb1ltOWtlU2twSUh0Y2JpQWdJQ0FnSUNBZ2RHaHBjeTVmWW05a2VWUmxlSFFnUFNCaWIyUjVMblJ2VTNSeWFXNW5LQ2xjYmlBZ0lDQWdJSDBnWld4elpTQnBaaUFvSVdKdlpIa3BJSHRjYmlBZ0lDQWdJQ0FnZEdocGN5NWZZbTlrZVZSbGVIUWdQU0FuSjF4dUlDQWdJQ0FnZlNCbGJITmxJR2xtSUNoemRYQndiM0owTG1GeWNtRjVRblZtWm1WeUlDWW1JRUZ5Y21GNVFuVm1abVZ5TG5CeWIzUnZkSGx3WlM1cGMxQnliM1J2ZEhsd1pVOW1LR0p2WkhrcEtTQjdYRzRnSUNBZ0lDQWdJQzh2SUU5dWJIa2djM1Z3Y0c5eWRDQkJjbkpoZVVKMVptWmxjbk1nWm05eUlGQlBVMVFnYldWMGFHOWtMbHh1SUNBZ0lDQWdJQ0F2THlCU1pXTmxhWFpwYm1jZ1FYSnlZWGxDZFdabVpYSnpJR2hoY0hCbGJuTWdkbWxoSUVKc2IySnpMQ0JwYm5OMFpXRmtMbHh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZDFibk4xY0hCdmNuUmxaQ0JDYjJSNVNXNXBkQ0IwZVhCbEp5bGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdhV1lnS0NGMGFHbHpMbWhsWVdSbGNuTXVaMlYwS0NkamIyNTBaVzUwTFhSNWNHVW5LU2tnZTF4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlHSnZaSGtnUFQwOUlDZHpkSEpwYm1jbktTQjdYRzRnSUNBZ0lDQWdJQ0FnZEdocGN5NW9aV0ZrWlhKekxuTmxkQ2duWTI5dWRHVnVkQzEwZVhCbEp5d2dKM1JsZUhRdmNHeGhhVzQ3WTJoaGNuTmxkRDFWVkVZdE9DY3BYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NWZZbTlrZVVKc2IySWdKaVlnZEdocGN5NWZZbTlrZVVKc2IySXVkSGx3WlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdWFHVmhaR1Z5Y3k1elpYUW9KMk52Ym5SbGJuUXRkSGx3WlNjc0lIUm9hWE11WDJKdlpIbENiRzlpTG5SNWNHVXBYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvYzNWd2NHOXlkQzV6WldGeVkyaFFZWEpoYlhNZ0ppWWdWVkpNVTJWaGNtTm9VR0Z5WVcxekxuQnliM1J2ZEhsd1pTNXBjMUJ5YjNSdmRIbHdaVTltS0dKdlpIa3BLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVvWldGa1pYSnpMbk5sZENnblkyOXVkR1Z1ZEMxMGVYQmxKeXdnSjJGd2NHeHBZMkYwYVc5dUwzZ3RkM2QzTFdadmNtMHRkWEpzWlc1amIyUmxaRHRqYUdGeWMyVjBQVlZVUmkwNEp5bGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2h6ZFhCd2IzSjBMbUpzYjJJcElIdGNiaUFnSUNBZ0lIUm9hWE11WW14dllpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdjbVZxWldOMFpXUWdQU0JqYjI1emRXMWxaQ2gwYUdsektWeHVJQ0FnSUNBZ0lDQnBaaUFvY21WcVpXTjBaV1FwSUh0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2NtVnFaV04wWldSY2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJR2xtSUNoMGFHbHpMbDlpYjJSNVFteHZZaWtnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCUWNtOXRhWE5sTG5KbGMyOXNkbVVvZEdocGN5NWZZbTlrZVVKc2IySXBYRzRnSUNBZ0lDQWdJSDBnWld4elpTQnBaaUFvZEdocGN5NWZZbTlrZVVadmNtMUVZWFJoS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZGpiM1ZzWkNCdWIzUWdjbVZoWkNCR2IzSnRSR0YwWVNCaWIyUjVJR0Z6SUdKc2IySW5LVnh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJRY205dGFYTmxMbkpsYzI5c2RtVW9ibVYzSUVKc2IySW9XM1JvYVhNdVgySnZaSGxVWlhoMFhTa3BYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZEdocGN5NWhjbkpoZVVKMVptWmxjaUE5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVpYkc5aUtDa3VkR2hsYmloeVpXRmtRbXh2WWtGelFYSnlZWGxDZFdabVpYSXBYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSFJvYVhNdWRHVjRkQ0E5SUdaMWJtTjBhVzl1S0NrZ2UxeHVJQ0FnSUNBZ0lDQjJZWElnY21WcVpXTjBaV1FnUFNCamIyNXpkVzFsWkNoMGFHbHpLVnh1SUNBZ0lDQWdJQ0JwWmlBb2NtVnFaV04wWldRcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdjbVZxWldOMFpXUmNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUdsbUlDaDBhR2x6TGw5aWIyUjVRbXh2WWlrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaV0ZrUW14dllrRnpWR1Y0ZENoMGFHbHpMbDlpYjJSNVFteHZZaWxjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHbHpMbDlpYjJSNVJtOXliVVJoZEdFcElIdGNiaUFnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMk52ZFd4a0lHNXZkQ0J5WldGa0lFWnZjbTFFWVhSaElHSnZaSGtnWVhNZ2RHVjRkQ2NwWEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUZCeWIyMXBjMlV1Y21WemIyeDJaU2gwYUdsekxsOWliMlI1VkdWNGRDbGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNCMGFHbHpMblJsZUhRZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlISmxhbVZqZEdWa0lEMGdZMjl1YzNWdFpXUW9kR2hwY3lsY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhKbGFtVmpkR1ZrSUQ4Z2NtVnFaV04wWldRZ09pQlFjbTl0YVhObExuSmxjMjlzZG1Vb2RHaHBjeTVmWW05a2VWUmxlSFFwWEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdhV1lnS0hOMWNIQnZjblF1Wm05eWJVUmhkR0VwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVabTl5YlVSaGRHRWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVkR1Y0ZENncExuUm9aVzRvWkdWamIyUmxLVnh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lIUm9hWE11YW5OdmJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdWRHVjRkQ2dwTG5Sb1pXNG9TbE5QVGk1d1lYSnpaU2xjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2RHaHBjMXh1SUNCOVhHNWNiaUFnTHk4Z1NGUlVVQ0J0WlhSb2IyUnpJSGRvYjNObElHTmhjR2wwWVd4cGVtRjBhVzl1SUhOb2IzVnNaQ0JpWlNCdWIzSnRZV3hwZW1Wa1hHNGdJSFpoY2lCdFpYUm9iMlJ6SUQwZ1d5ZEVSVXhGVkVVbkxDQW5SMFZVSnl3Z0owaEZRVVFuTENBblQxQlVTVTlPVXljc0lDZFFUMU5VSnl3Z0oxQlZWQ2RkWEc1Y2JpQWdablZ1WTNScGIyNGdibTl5YldGc2FYcGxUV1YwYUc5a0tHMWxkR2h2WkNrZ2UxeHVJQ0FnSUhaaGNpQjFjR05oYzJWa0lEMGdiV1YwYUc5a0xuUnZWWEJ3WlhKRFlYTmxLQ2xjYmlBZ0lDQnlaWFIxY200Z0tHMWxkR2h2WkhNdWFXNWtaWGhQWmloMWNHTmhjMlZrS1NBK0lDMHhLU0EvSUhWd1kyRnpaV1FnT2lCdFpYUm9iMlJjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUZKbGNYVmxjM1FvYVc1d2RYUXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQnZjSFJwYjI1eklEMGdiM0IwYVc5dWN5QjhmQ0I3ZlZ4dUlDQWdJSFpoY2lCaWIyUjVJRDBnYjNCMGFXOXVjeTVpYjJSNVhHNGdJQ0FnYVdZZ0tGSmxjWFZsYzNRdWNISnZkRzkwZVhCbExtbHpVSEp2ZEc5MGVYQmxUMllvYVc1d2RYUXBLU0I3WEc0Z0lDQWdJQ0JwWmlBb2FXNXdkWFF1WW05a2VWVnpaV1FwSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RV3h5WldGa2VTQnlaV0ZrSnlsY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhSb2FYTXVkWEpzSUQwZ2FXNXdkWFF1ZFhKc1hHNGdJQ0FnSUNCMGFHbHpMbU55WldSbGJuUnBZV3h6SUQwZ2FXNXdkWFF1WTNKbFpHVnVkR2xoYkhOY2JpQWdJQ0FnSUdsbUlDZ2hiM0IwYVc5dWN5NW9aV0ZrWlhKektTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdWFHVmhaR1Z5Y3lBOUlHNWxkeUJJWldGa1pYSnpLR2x1Y0hWMExtaGxZV1JsY25NcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCMGFHbHpMbTFsZEdodlpDQTlJR2x1Y0hWMExtMWxkR2h2WkZ4dUlDQWdJQ0FnZEdocGN5NXRiMlJsSUQwZ2FXNXdkWFF1Ylc5a1pWeHVJQ0FnSUNBZ2FXWWdLQ0ZpYjJSNUtTQjdYRzRnSUNBZ0lDQWdJR0p2WkhrZ1BTQnBibkIxZEM1ZlltOWtlVWx1YVhSY2JpQWdJQ0FnSUNBZ2FXNXdkWFF1WW05a2VWVnpaV1FnUFNCMGNuVmxYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUhSb2FYTXVkWEpzSUQwZ2FXNXdkWFJjYmlBZ0lDQjlYRzVjYmlBZ0lDQjBhR2x6TG1OeVpXUmxiblJwWVd4eklEMGdiM0IwYVc5dWN5NWpjbVZrWlc1MGFXRnNjeUI4ZkNCMGFHbHpMbU55WldSbGJuUnBZV3h6SUh4OElDZHZiV2wwSjF4dUlDQWdJR2xtSUNodmNIUnBiMjV6TG1obFlXUmxjbk1nZkh3Z0lYUm9hWE11YUdWaFpHVnljeWtnZTF4dUlDQWdJQ0FnZEdocGN5NW9aV0ZrWlhKeklEMGdibVYzSUVobFlXUmxjbk1vYjNCMGFXOXVjeTVvWldGa1pYSnpLVnh1SUNBZ0lIMWNiaUFnSUNCMGFHbHpMbTFsZEdodlpDQTlJRzV2Y20xaGJHbDZaVTFsZEdodlpDaHZjSFJwYjI1ekxtMWxkR2h2WkNCOGZDQjBhR2x6TG0xbGRHaHZaQ0I4ZkNBblIwVlVKeWxjYmlBZ0lDQjBhR2x6TG0xdlpHVWdQU0J2Y0hScGIyNXpMbTF2WkdVZ2ZId2dkR2hwY3k1dGIyUmxJSHg4SUc1MWJHeGNiaUFnSUNCMGFHbHpMbkpsWm1WeWNtVnlJRDBnYm5Wc2JGeHVYRzRnSUNBZ2FXWWdLQ2gwYUdsekxtMWxkR2h2WkNBOVBUMGdKMGRGVkNjZ2ZId2dkR2hwY3k1dFpYUm9iMlFnUFQwOUlDZElSVUZFSnlrZ0ppWWdZbTlrZVNrZ2UxeHVJQ0FnSUNBZ2RHaHliM2NnYm1WM0lGUjVjR1ZGY25KdmNpZ25RbTlrZVNCdWIzUWdZV3hzYjNkbFpDQm1iM0lnUjBWVUlHOXlJRWhGUVVRZ2NtVnhkV1Z6ZEhNbktWeHVJQ0FnSUgxY2JpQWdJQ0IwYUdsekxsOXBibWwwUW05a2VTaGliMlI1S1Z4dUlDQjlYRzVjYmlBZ1VtVnhkV1Z6ZEM1d2NtOTBiM1I1Y0dVdVkyeHZibVVnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGSmxjWFZsYzNRb2RHaHBjeWxjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUdSbFkyOWtaU2hpYjJSNUtTQjdYRzRnSUNBZ2RtRnlJR1p2Y20wZ1BTQnVaWGNnUm05eWJVUmhkR0VvS1Z4dUlDQWdJR0p2WkhrdWRISnBiU2dwTG5Od2JHbDBLQ2NtSnlrdVptOXlSV0ZqYUNobWRXNWpkR2x2YmloaWVYUmxjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHSjVkR1Z6S1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJ6Y0d4cGRDQTlJR0o1ZEdWekxuTndiR2wwS0NjOUp5bGNiaUFnSUNBZ0lDQWdkbUZ5SUc1aGJXVWdQU0J6Y0d4cGRDNXphR2xtZENncExuSmxjR3hoWTJVb0wxeGNLeTluTENBbklDY3BYRzRnSUNBZ0lDQWdJSFpoY2lCMllXeDFaU0E5SUhOd2JHbDBMbXB2YVc0b0p6MG5LUzV5WlhCc1lXTmxLQzljWENzdlp5d2dKeUFuS1Z4dUlDQWdJQ0FnSUNCbWIzSnRMbUZ3Y0dWdVpDaGtaV052WkdWVlVrbERiMjF3YjI1bGJuUW9ibUZ0WlNrc0lHUmxZMjlrWlZWU1NVTnZiWEJ2Ym1WdWRDaDJZV3gxWlNrcFhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNsY2JpQWdJQ0J5WlhSMWNtNGdabTl5YlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2FHVmhaR1Z5Y3loNGFISXBJSHRjYmlBZ0lDQjJZWElnYUdWaFpDQTlJRzVsZHlCSVpXRmtaWEp6S0NsY2JpQWdJQ0IyWVhJZ2NHRnBjbk1nUFNBb2VHaHlMbWRsZEVGc2JGSmxjM0J2Ym5ObFNHVmhaR1Z5Y3lncElIeDhJQ2NuS1M1MGNtbHRLQ2t1YzNCc2FYUW9KMXhjYmljcFhHNGdJQ0FnY0dGcGNuTXVabTl5UldGamFDaG1kVzVqZEdsdmJpaG9aV0ZrWlhJcElIdGNiaUFnSUNBZ0lIWmhjaUJ6Y0d4cGRDQTlJR2hsWVdSbGNpNTBjbWx0S0NrdWMzQnNhWFFvSnpvbktWeHVJQ0FnSUNBZ2RtRnlJR3RsZVNBOUlITndiR2wwTG5Ob2FXWjBLQ2t1ZEhKcGJTZ3BYRzRnSUNBZ0lDQjJZWElnZG1Gc2RXVWdQU0J6Y0d4cGRDNXFiMmx1S0NjNkp5a3VkSEpwYlNncFhHNGdJQ0FnSUNCb1pXRmtMbUZ3Y0dWdVpDaHJaWGtzSUhaaGJIVmxLVnh1SUNBZ0lIMHBYRzRnSUNBZ2NtVjBkWEp1SUdobFlXUmNiaUFnZlZ4dVhHNGdJRUp2WkhrdVkyRnNiQ2hTWlhGMVpYTjBMbkJ5YjNSdmRIbHdaU2xjYmx4dUlDQm1kVzVqZEdsdmJpQlNaWE53YjI1elpTaGliMlI1U1c1cGRDd2diM0IwYVc5dWN5a2dlMXh1SUNBZ0lHbG1JQ2doYjNCMGFXOXVjeWtnZTF4dUlDQWdJQ0FnYjNCMGFXOXVjeUE5SUh0OVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZEdocGN5NTBlWEJsSUQwZ0oyUmxabUYxYkhRblhHNGdJQ0FnZEdocGN5NXpkR0YwZFhNZ1BTQnZjSFJwYjI1ekxuTjBZWFIxYzF4dUlDQWdJSFJvYVhNdWIyc2dQU0IwYUdsekxuTjBZWFIxY3lBK1BTQXlNREFnSmlZZ2RHaHBjeTV6ZEdGMGRYTWdQQ0F6TURCY2JpQWdJQ0IwYUdsekxuTjBZWFIxYzFSbGVIUWdQU0J2Y0hScGIyNXpMbk4wWVhSMWMxUmxlSFJjYmlBZ0lDQjBhR2x6TG1obFlXUmxjbk1nUFNCdmNIUnBiMjV6TG1obFlXUmxjbk1nYVc1emRHRnVZMlZ2WmlCSVpXRmtaWEp6SUQ4Z2IzQjBhVzl1Y3k1b1pXRmtaWEp6SURvZ2JtVjNJRWhsWVdSbGNuTW9iM0IwYVc5dWN5NW9aV0ZrWlhKektWeHVJQ0FnSUhSb2FYTXVkWEpzSUQwZ2IzQjBhVzl1Y3k1MWNtd2dmSHdnSnlkY2JpQWdJQ0IwYUdsekxsOXBibWwwUW05a2VTaGliMlI1U1c1cGRDbGNiaUFnZlZ4dVhHNGdJRUp2WkhrdVkyRnNiQ2hTWlhOd2IyNXpaUzV3Y205MGIzUjVjR1VwWEc1Y2JpQWdVbVZ6Y0c5dWMyVXVjSEp2ZEc5MGVYQmxMbU5zYjI1bElEMGdablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHNWxkeUJTWlhOd2IyNXpaU2gwYUdsekxsOWliMlI1U1c1cGRDd2dlMXh1SUNBZ0lDQWdjM1JoZEhWek9pQjBhR2x6TG5OMFlYUjFjeXhjYmlBZ0lDQWdJSE4wWVhSMWMxUmxlSFE2SUhSb2FYTXVjM1JoZEhWelZHVjRkQ3hjYmlBZ0lDQWdJR2hsWVdSbGNuTTZJRzVsZHlCSVpXRmtaWEp6S0hSb2FYTXVhR1ZoWkdWeWN5a3NYRzRnSUNBZ0lDQjFjbXc2SUhSb2FYTXVkWEpzWEc0Z0lDQWdmU2xjYmlBZ2ZWeHVYRzRnSUZKbGMzQnZibk5sTG1WeWNtOXlJRDBnWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnZG1GeUlISmxjM0J2Ym5ObElEMGdibVYzSUZKbGMzQnZibk5sS0c1MWJHd3NJSHR6ZEdGMGRYTTZJREFzSUhOMFlYUjFjMVJsZUhRNklDY25mU2xjYmlBZ0lDQnlaWE53YjI1elpTNTBlWEJsSUQwZ0oyVnljbTl5SjF4dUlDQWdJSEpsZEhWeWJpQnlaWE53YjI1elpWeHVJQ0I5WEc1Y2JpQWdkbUZ5SUhKbFpHbHlaV04wVTNSaGRIVnpaWE1nUFNCYk16QXhMQ0F6TURJc0lETXdNeXdnTXpBM0xDQXpNRGhkWEc1Y2JpQWdVbVZ6Y0c5dWMyVXVjbVZrYVhKbFkzUWdQU0JtZFc1amRHbHZiaWgxY213c0lITjBZWFIxY3lrZ2UxeHVJQ0FnSUdsbUlDaHlaV1JwY21WamRGTjBZWFIxYzJWekxtbHVaR1Y0VDJZb2MzUmhkSFZ6S1NBOVBUMGdMVEVwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpiblpoYkdsa0lITjBZWFIxY3lCamIyUmxKeWxjYmlBZ0lDQjlYRzVjYmlBZ0lDQnlaWFIxY200Z2JtVjNJRkpsYzNCdmJuTmxLRzUxYkd3c0lIdHpkR0YwZFhNNklITjBZWFIxY3l3Z2FHVmhaR1Z5Y3pvZ2UyeHZZMkYwYVc5dU9pQjFjbXg5ZlNsY2JpQWdmVnh1WEc0Z0lITmxiR1l1U0dWaFpHVnljeUE5SUVobFlXUmxjbk5jYmlBZ2MyVnNaaTVTWlhGMVpYTjBJRDBnVW1WeGRXVnpkRnh1SUNCelpXeG1MbEpsYzNCdmJuTmxJRDBnVW1WemNHOXVjMlZjYmx4dUlDQnpaV3htTG1abGRHTm9JRDBnWm5WdVkzUnBiMjRvYVc1d2RYUXNJR2x1YVhRcElIdGNiaUFnSUNCeVpYUjFjbTRnYm1WM0lGQnliMjFwYzJVb1puVnVZM1JwYjI0b2NtVnpiMngyWlN3Z2NtVnFaV04wS1NCN1hHNGdJQ0FnSUNCMllYSWdjbVZ4ZFdWemRGeHVJQ0FnSUNBZ2FXWWdLRkpsY1hWbGMzUXVjSEp2ZEc5MGVYQmxMbWx6VUhKdmRHOTBlWEJsVDJZb2FXNXdkWFFwSUNZbUlDRnBibWwwS1NCN1hHNGdJQ0FnSUNBZ0lISmxjWFZsYzNRZ1BTQnBibkIxZEZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnY21WeGRXVnpkQ0E5SUc1bGR5QlNaWEYxWlhOMEtHbHVjSFYwTENCcGJtbDBLVnh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0IyWVhJZ2VHaHlJRDBnYm1WM0lGaE5URWgwZEhCU1pYRjFaWE4wS0NsY2JseHVJQ0FnSUNBZ1puVnVZM1JwYjI0Z2NtVnpjRzl1YzJWVlVrd29LU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDZ25jbVZ6Y0c5dWMyVlZVa3duSUdsdUlIaG9jaWtnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCNGFISXVjbVZ6Y0c5dWMyVlZVa3hjYmlBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDOHZJRUYyYjJsa0lITmxZM1Z5YVhSNUlIZGhjbTVwYm1keklHOXVJR2RsZEZKbGMzQnZibk5sU0dWaFpHVnlJSGRvWlc0Z2JtOTBJR0ZzYkc5M1pXUWdZbmtnUTA5U1UxeHVJQ0FnSUNBZ0lDQnBaaUFvTDE1WUxWSmxjWFZsYzNRdFZWSk1PaTl0TG5SbGMzUW9lR2h5TG1kbGRFRnNiRkpsYzNCdmJuTmxTR1ZoWkdWeWN5Z3BLU2tnZTF4dUlDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCNGFISXVaMlYwVW1WemNHOXVjMlZJWldGa1pYSW9KMWd0VW1WeGRXVnpkQzFWVWt3bktWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnY21WMGRYSnVYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSGhvY2k1dmJteHZZV1FnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdkbUZ5SUc5d2RHbHZibk1nUFNCN1hHNGdJQ0FnSUNBZ0lDQWdjM1JoZEhWek9pQjRhSEl1YzNSaGRIVnpMRnh1SUNBZ0lDQWdJQ0FnSUhOMFlYUjFjMVJsZUhRNklIaG9jaTV6ZEdGMGRYTlVaWGgwTEZ4dUlDQWdJQ0FnSUNBZ0lHaGxZV1JsY25NNklHaGxZV1JsY25Nb2VHaHlLU3hjYmlBZ0lDQWdJQ0FnSUNCMWNtdzZJSEpsYzNCdmJuTmxWVkpNS0NsY2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjJZWElnWW05a2VTQTlJQ2R5WlhOd2IyNXpaU2NnYVc0Z2VHaHlJRDhnZUdoeUxuSmxjM0J2Ym5ObElEb2dlR2h5TG5KbGMzQnZibk5sVkdWNGRGeHVJQ0FnSUNBZ0lDQnlaWE52YkhabEtHNWxkeUJTWlhOd2IyNXpaU2hpYjJSNUxDQnZjSFJwYjI1ektTbGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdlR2h5TG05dVpYSnliM0lnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lDQWdjbVZxWldOMEtHNWxkeUJVZVhCbFJYSnliM0lvSjA1bGRIZHZjbXNnY21WeGRXVnpkQ0JtWVdsc1pXUW5LU2xjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnZUdoeUxtOXVkR2x0Wlc5MWRDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNCeVpXcGxZM1FvYm1WM0lGUjVjR1ZGY25KdmNpZ25UbVYwZDI5eWF5QnlaWEYxWlhOMElHWmhhV3hsWkNjcEtWeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjRhSEl1YjNCbGJpaHlaWEYxWlhOMExtMWxkR2h2WkN3Z2NtVnhkV1Z6ZEM1MWNtd3NJSFJ5ZFdVcFhHNWNiaUFnSUNBZ0lHbG1JQ2h5WlhGMVpYTjBMbU55WldSbGJuUnBZV3h6SUQwOVBTQW5hVzVqYkhWa1pTY3BJSHRjYmlBZ0lDQWdJQ0FnZUdoeUxuZHBkR2hEY21Wa1pXNTBhV0ZzY3lBOUlIUnlkV1ZjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnYVdZZ0tDZHlaWE53YjI1elpWUjVjR1VuSUdsdUlIaG9jaUFtSmlCemRYQndiM0owTG1Kc2IySXBJSHRjYmlBZ0lDQWdJQ0FnZUdoeUxuSmxjM0J2Ym5ObFZIbHdaU0E5SUNkaWJHOWlKMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0J5WlhGMVpYTjBMbWhsWVdSbGNuTXVabTl5UldGamFDaG1kVzVqZEdsdmJpaDJZV3gxWlN3Z2JtRnRaU2tnZTF4dUlDQWdJQ0FnSUNCNGFISXVjMlYwVW1WeGRXVnpkRWhsWVdSbGNpaHVZVzFsTENCMllXeDFaU2xjYmlBZ0lDQWdJSDBwWEc1Y2JpQWdJQ0FnSUhob2NpNXpaVzVrS0hSNWNHVnZaaUJ5WlhGMVpYTjBMbDlpYjJSNVNXNXBkQ0E5UFQwZ0ozVnVaR1ZtYVc1bFpDY2dQeUJ1ZFd4c0lEb2djbVZ4ZFdWemRDNWZZbTlrZVVsdWFYUXBYRzRnSUNBZ2ZTbGNiaUFnZlZ4dUlDQnpaV3htTG1abGRHTm9MbkJ2YkhsbWFXeHNJRDBnZEhKMVpWeHVmU2tvZEhsd1pXOW1JSE5sYkdZZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z2MyVnNaaUE2SUhSb2FYTXBPMXh1WEc1Y2JseHVMeW9xS2lvcUtpb3FLaW9xS2lvcUtpb3FYRzRnS2lvZ1YwVkNVRUZEU3lCR1QwOVVSVkpjYmlBcUtpQXVMMzR2ZDJoaGRIZG5MV1psZEdOb0wyWmxkR05vTG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ05WeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHlvaFhHNGdLaUJBYjNabGNuWnBaWGNnWlhNMkxYQnliMjFwYzJVZ0xTQmhJSFJwYm5rZ2FXMXdiR1Z0Wlc1MFlYUnBiMjRnYjJZZ1VISnZiV2x6WlhNdlFTc3VYRzRnS2lCQVkyOXdlWEpwWjJoMElFTnZjSGx5YVdkb2RDQW9ZeWtnTWpBeE5DQlpaV2gxWkdFZ1MyRjBlaXdnVkc5dElFUmhiR1VzSUZOMFpXWmhiaUJRWlc1dVpYSWdZVzVrSUdOdmJuUnlhV0oxZEc5eWN5QW9RMjl1ZG1WeWMybHZiaUIwYnlCRlV6WWdRVkJKSUdKNUlFcGhhMlVnUVhKamFHbGlZV3hrS1Z4dUlDb2dRR3hwWTJWdWMyVWdJQ0JNYVdObGJuTmxaQ0IxYm1SbGNpQk5TVlFnYkdsalpXNXpaVnh1SUNvZ0lDQWdJQ0FnSUNBZ0lDQlRaV1VnYUhSMGNITTZMeTl5WVhjdVoybDBhSFZpZFhObGNtTnZiblJsYm5RdVkyOXRMM04wWldaaGJuQmxibTVsY2k5bGN6WXRjSEp2YldselpTOXRZWE4wWlhJdlRFbERSVTVUUlZ4dUlDb2dRSFpsY25OcGIyNGdJQ0F6TGpNdU1WeHVJQ292WEc1Y2JpaG1kVzVqZEdsdmJpQW9aMnh2WW1Gc0xDQm1ZV04wYjNKNUtTQjdYRzRnSUNBZ2RIbHdaVzltSUdWNGNHOXlkSE1nUFQwOUlDZHZZbXBsWTNRbklDWW1JSFI1Y0dWdlppQnRiMlIxYkdVZ0lUMDlJQ2QxYm1SbFptbHVaV1FuSUQ4Z2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCbVlXTjBiM0o1S0NrZ09seHVJQ0FnSUhSNWNHVnZaaUJrWldacGJtVWdQVDA5SUNkbWRXNWpkR2x2YmljZ0ppWWdaR1ZtYVc1bExtRnRaQ0EvSUdSbFptbHVaU2htWVdOMGIzSjVLU0E2WEc0Z0lDQWdLR2RzYjJKaGJDNUZVelpRY205dGFYTmxJRDBnWm1GamRHOXllU2dwS1R0Y2JuMG9kR2hwY3l3Z0tHWjFibU4wYVc5dUlDZ3BJSHNnSjNWelpTQnpkSEpwWTNRbk8xeHVYRzVtZFc1amRHbHZiaUJ2WW1wbFkzUlBja1oxYm1OMGFXOXVLSGdwSUh0Y2JpQWdjbVYwZFhKdUlIUjVjR1Z2WmlCNElEMDlQU0FuWm5WdVkzUnBiMjRuSUh4OElIUjVjR1Z2WmlCNElEMDlQU0FuYjJKcVpXTjBKeUFtSmlCNElDRTlQU0J1ZFd4c08xeHVmVnh1WEc1bWRXNWpkR2x2YmlCcGMwWjFibU4wYVc5dUtIZ3BJSHRjYmlBZ2NtVjBkWEp1SUhSNWNHVnZaaUI0SUQwOVBTQW5ablZ1WTNScGIyNG5PMXh1ZlZ4dVhHNTJZWElnWDJselFYSnlZWGtnUFNCMWJtUmxabWx1WldRN1hHNXBaaUFvSVVGeWNtRjVMbWx6UVhKeVlYa3BJSHRjYmlBZ1gybHpRWEp5WVhrZ1BTQm1kVzVqZEdsdmJpQW9lQ2tnZTF4dUlDQWdJSEpsZEhWeWJpQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvZUNrZ1BUMDlJQ2RiYjJKcVpXTjBJRUZ5Y21GNVhTYzdYRzRnSUgwN1hHNTlJR1ZzYzJVZ2UxeHVJQ0JmYVhOQmNuSmhlU0E5SUVGeWNtRjVMbWx6UVhKeVlYazdYRzU5WEc1Y2JuWmhjaUJwYzBGeWNtRjVJRDBnWDJselFYSnlZWGs3WEc1Y2JuWmhjaUJzWlc0Z1BTQXdPMXh1ZG1GeUlIWmxjblI0VG1WNGRDQTlJSFZ1WkdWbWFXNWxaRHRjYm5aaGNpQmpkWE4wYjIxVFkyaGxaSFZzWlhKR2JpQTlJSFZ1WkdWbWFXNWxaRHRjYmx4dWRtRnlJR0Z6WVhBZ1BTQm1kVzVqZEdsdmJpQmhjMkZ3S0dOaGJHeGlZV05yTENCaGNtY3BJSHRjYmlBZ2NYVmxkV1ZiYkdWdVhTQTlJR05oYkd4aVlXTnJPMXh1SUNCeGRXVjFaVnRzWlc0Z0t5QXhYU0E5SUdGeVp6dGNiaUFnYkdWdUlDczlJREk3WEc0Z0lHbG1JQ2hzWlc0Z1BUMDlJRElwSUh0Y2JpQWdJQ0F2THlCSlppQnNaVzRnYVhNZ01pd2dkR2hoZENCdFpXRnVjeUIwYUdGMElIZGxJRzVsWldRZ2RHOGdjMk5vWldSMWJHVWdZVzRnWVhONWJtTWdabXgxYzJndVhHNGdJQ0FnTHk4Z1NXWWdZV1JrYVhScGIyNWhiQ0JqWVd4c1ltRmphM01nWVhKbElIRjFaWFZsWkNCaVpXWnZjbVVnZEdobElIRjFaWFZsSUdseklHWnNkWE5vWldRc0lIUm9aWGxjYmlBZ0lDQXZMeUIzYVd4c0lHSmxJSEJ5YjJObGMzTmxaQ0JpZVNCMGFHbHpJR1pzZFhOb0lIUm9ZWFFnZDJVZ1lYSmxJSE5qYUdWa2RXeHBibWN1WEc0Z0lDQWdhV1lnS0dOMWMzUnZiVk5qYUdWa2RXeGxja1p1S1NCN1hHNGdJQ0FnSUNCamRYTjBiMjFUWTJobFpIVnNaWEpHYmlobWJIVnphQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lITmphR1ZrZFd4bFJteDFjMmdvS1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjA3WEc1Y2JtWjFibU4wYVc5dUlITmxkRk5qYUdWa2RXeGxjaWh6WTJobFpIVnNaVVp1S1NCN1hHNGdJR04xYzNSdmJWTmphR1ZrZFd4bGNrWnVJRDBnYzJOb1pXUjFiR1ZHYmp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJWMFFYTmhjQ2hoYzJGd1JtNHBJSHRjYmlBZ1lYTmhjQ0E5SUdGellYQkdianRjYm4xY2JseHVkbUZ5SUdKeWIzZHpaWEpYYVc1a2IzY2dQU0IwZVhCbGIyWWdkMmx1Wkc5M0lDRTlQU0FuZFc1a1pXWnBibVZrSnlBL0lIZHBibVJ2ZHlBNklIVnVaR1ZtYVc1bFpEdGNiblpoY2lCaWNtOTNjMlZ5UjJ4dlltRnNJRDBnWW5KdmQzTmxjbGRwYm1SdmR5QjhmQ0I3ZlR0Y2JuWmhjaUJDY205M2MyVnlUWFYwWVhScGIyNVBZbk5sY25abGNpQTlJR0p5YjNkelpYSkhiRzlpWVd3dVRYVjBZWFJwYjI1UFluTmxjblpsY2lCOGZDQmljbTkzYzJWeVIyeHZZbUZzTGxkbFlrdHBkRTExZEdGMGFXOXVUMkp6WlhKMlpYSTdYRzUyWVhJZ2FYTk9iMlJsSUQwZ2RIbHdaVzltSUhObGJHWWdQVDA5SUNkMWJtUmxabWx1WldRbklDWW1JSFI1Y0dWdlppQndjbTlqWlhOeklDRTlQU0FuZFc1a1pXWnBibVZrSnlBbUppQW9lMzBwTG5SdlUzUnlhVzVuTG1OaGJHd29jSEp2WTJWemN5a2dQVDA5SUNkYmIySnFaV04wSUhCeWIyTmxjM05kSnp0Y2JseHVMeThnZEdWemRDQm1iM0lnZDJWaUlIZHZjbXRsY2lCaWRYUWdibTkwSUdsdUlFbEZNVEJjYm5aaGNpQnBjMWR2Y210bGNpQTlJSFI1Y0dWdlppQlZhVzUwT0VOc1lXMXdaV1JCY25KaGVTQWhQVDBnSjNWdVpHVm1hVzVsWkNjZ0ppWWdkSGx3Wlc5bUlHbHRjRzl5ZEZOamNtbHdkSE1nSVQwOUlDZDFibVJsWm1sdVpXUW5JQ1ltSUhSNWNHVnZaaUJOWlhOellXZGxRMmhoYm01bGJDQWhQVDBnSjNWdVpHVm1hVzVsWkNjN1hHNWNiaTh2SUc1dlpHVmNibVoxYm1OMGFXOXVJSFZ6WlU1bGVIUlVhV05yS0NrZ2UxeHVJQ0F2THlCdWIyUmxJSFpsY25OcGIyNGdNQzR4TUM1NElHUnBjM0JzWVhseklHRWdaR1Z3Y21WallYUnBiMjRnZDJGeWJtbHVaeUIzYUdWdUlHNWxlSFJVYVdOcklHbHpJSFZ6WldRZ2NtVmpkWEp6YVhabGJIbGNiaUFnTHk4Z2MyVmxJR2gwZEhCek9pOHZaMmwwYUhWaUxtTnZiUzlqZFdwdmFuTXZkMmhsYmk5cGMzTjFaWE12TkRFd0lHWnZjaUJrWlhSaGFXeHpYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJSEJ5YjJObGMzTXVibVY0ZEZScFkyc29abXgxYzJncE8xeHVJQ0I5TzF4dWZWeHVYRzR2THlCMlpYSjBlRnh1Wm5WdVkzUnBiMjRnZFhObFZtVnlkSGhVYVcxbGNpZ3BJSHRjYmlBZ2NtVjBkWEp1SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCMlpYSjBlRTVsZUhRb1pteDFjMmdwTzF4dUlDQjlPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjFjMlZOZFhSaGRHbHZiazlpYzJWeWRtVnlLQ2tnZTF4dUlDQjJZWElnYVhSbGNtRjBhVzl1Y3lBOUlEQTdYRzRnSUhaaGNpQnZZbk5sY25abGNpQTlJRzVsZHlCQ2NtOTNjMlZ5VFhWMFlYUnBiMjVQWW5ObGNuWmxjaWhtYkhWemFDazdYRzRnSUhaaGNpQnViMlJsSUQwZ1pHOWpkVzFsYm5RdVkzSmxZWFJsVkdWNGRFNXZaR1VvSnljcE8xeHVJQ0J2WW5ObGNuWmxjaTV2WW5ObGNuWmxLRzV2WkdVc0lIc2dZMmhoY21GamRHVnlSR0YwWVRvZ2RISjFaU0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJRzV2WkdVdVpHRjBZU0E5SUdsMFpYSmhkR2x2Ym5NZ1BTQXJLMmwwWlhKaGRHbHZibk1nSlNBeU8xeHVJQ0I5TzF4dWZWeHVYRzR2THlCM1pXSWdkMjl5YTJWeVhHNW1kVzVqZEdsdmJpQjFjMlZOWlhOellXZGxRMmhoYm01bGJDZ3BJSHRjYmlBZ2RtRnlJR05vWVc1dVpXd2dQU0J1WlhjZ1RXVnpjMkZuWlVOb1lXNXVaV3dvS1R0Y2JpQWdZMmhoYm01bGJDNXdiM0owTVM1dmJtMWxjM05oWjJVZ1BTQm1iSFZ6YUR0Y2JpQWdjbVYwZFhKdUlHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQnlaWFIxY200Z1kyaGhibTVsYkM1d2IzSjBNaTV3YjNOMFRXVnpjMkZuWlNnd0tUdGNiaUFnZlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnZFhObFUyVjBWR2x0Wlc5MWRDZ3BJSHRjYmlBZ0x5OGdVM1J2Y21VZ2MyVjBWR2x0Wlc5MWRDQnlaV1psY21WdVkyVWdjMjhnWlhNMkxYQnliMjFwYzJVZ2QybHNiQ0JpWlNCMWJtRm1abVZqZEdWa0lHSjVYRzRnSUM4dklHOTBhR1Z5SUdOdlpHVWdiVzlrYVdaNWFXNW5JSE5sZEZScGJXVnZkWFFnS0d4cGEyVWdjMmx1YjI0dWRYTmxSbUZyWlZScGJXVnljeWdwS1Z4dUlDQjJZWElnWjJ4dlltRnNVMlYwVkdsdFpXOTFkQ0E5SUhObGRGUnBiV1Z2ZFhRN1hHNGdJSEpsZEhWeWJpQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdjbVYwZFhKdUlHZHNiMkpoYkZObGRGUnBiV1Z2ZFhRb1pteDFjMmdzSURFcE8xeHVJQ0I5TzF4dWZWeHVYRzUyWVhJZ2NYVmxkV1VnUFNCdVpYY2dRWEp5WVhrb01UQXdNQ2s3WEc1bWRXNWpkR2x2YmlCbWJIVnphQ2dwSUh0Y2JpQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc0N0lHa2dLejBnTWlrZ2UxeHVJQ0FnSUhaaGNpQmpZV3hzWW1GamF5QTlJSEYxWlhWbFcybGRPMXh1SUNBZ0lIWmhjaUJoY21jZ1BTQnhkV1YxWlZ0cElDc2dNVjA3WEc1Y2JpQWdJQ0JqWVd4c1ltRmpheWhoY21jcE8xeHVYRzRnSUNBZ2NYVmxkV1ZiYVYwZ1BTQjFibVJsWm1sdVpXUTdYRzRnSUNBZ2NYVmxkV1ZiYVNBcklERmRJRDBnZFc1a1pXWnBibVZrTzF4dUlDQjlYRzVjYmlBZ2JHVnVJRDBnTUR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWVhSMFpXMXdkRlpsY25SNEtDa2dlMXh1SUNCMGNua2dlMXh1SUNBZ0lIWmhjaUJ5SUQwZ2NtVnhkV2x5WlR0Y2JpQWdJQ0IyWVhJZ2RtVnlkSGdnUFNCeUtDZDJaWEowZUNjcE8xeHVJQ0FnSUhabGNuUjRUbVY0ZENBOUlIWmxjblI0TG5KMWJrOXVURzl2Y0NCOGZDQjJaWEowZUM1eWRXNVBia052Ym5SbGVIUTdYRzRnSUNBZ2NtVjBkWEp1SUhWelpWWmxjblI0VkdsdFpYSW9LVHRjYmlBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lISmxkSFZ5YmlCMWMyVlRaWFJVYVcxbGIzVjBLQ2s3WEc0Z0lIMWNibjFjYmx4dWRtRnlJSE5qYUdWa2RXeGxSbXgxYzJnZ1BTQjFibVJsWm1sdVpXUTdYRzR2THlCRVpXTnBaR1VnZDJoaGRDQmhjM2x1WXlCdFpYUm9iMlFnZEc4Z2RYTmxJSFJ2SUhSeWFXZG5aWEpwYm1jZ2NISnZZMlZ6YzJsdVp5QnZaaUJ4ZFdWMVpXUWdZMkZzYkdKaFkydHpPbHh1YVdZZ0tHbHpUbTlrWlNrZ2UxeHVJQ0J6WTJobFpIVnNaVVpzZFhOb0lEMGdkWE5sVG1WNGRGUnBZMnNvS1R0Y2JuMGdaV3h6WlNCcFppQW9Rbkp2ZDNObGNrMTFkR0YwYVc5dVQySnpaWEoyWlhJcElIdGNiaUFnYzJOb1pXUjFiR1ZHYkhWemFDQTlJSFZ6WlUxMWRHRjBhVzl1VDJKelpYSjJaWElvS1R0Y2JuMGdaV3h6WlNCcFppQW9hWE5YYjNKclpYSXBJSHRjYmlBZ2MyTm9aV1IxYkdWR2JIVnphQ0E5SUhWelpVMWxjM05oWjJWRGFHRnVibVZzS0NrN1hHNTlJR1ZzYzJVZ2FXWWdLR0p5YjNkelpYSlhhVzVrYjNjZ1BUMDlJSFZ1WkdWbWFXNWxaQ0FtSmlCMGVYQmxiMllnY21WeGRXbHlaU0E5UFQwZ0oyWjFibU4wYVc5dUp5a2dlMXh1SUNCelkyaGxaSFZzWlVac2RYTm9JRDBnWVhSMFpXMXdkRlpsY25SNEtDazdYRzU5SUdWc2MyVWdlMXh1SUNCelkyaGxaSFZzWlVac2RYTm9JRDBnZFhObFUyVjBWR2x0Wlc5MWRDZ3BPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQjBhR1Z1S0c5dVJuVnNabWxzYkcxbGJuUXNJRzl1VW1WcVpXTjBhVzl1S1NCN1hHNGdJSFpoY2lCZllYSm5kVzFsYm5SeklEMGdZWEpuZFcxbGJuUnpPMXh1WEc0Z0lIWmhjaUJ3WVhKbGJuUWdQU0IwYUdsek8xeHVYRzRnSUhaaGNpQmphR2xzWkNBOUlHNWxkeUIwYUdsekxtTnZibk4wY25WamRHOXlLRzV2YjNBcE8xeHVYRzRnSUdsbUlDaGphR2xzWkZ0UVVrOU5TVk5GWDBsRVhTQTlQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnYldGclpWQnliMjFwYzJVb1kyaHBiR1FwTzF4dUlDQjlYRzVjYmlBZ2RtRnlJRjl6ZEdGMFpTQTlJSEJoY21WdWRDNWZjM1JoZEdVN1hHNWNiaUFnYVdZZ0tGOXpkR0YwWlNrZ2UxeHVJQ0FnSUNobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQjJZWElnWTJGc2JHSmhZMnNnUFNCZllYSm5kVzFsYm5SelcxOXpkR0YwWlNBdElERmRPMXh1SUNBZ0lDQWdZWE5oY0NobWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBiblp2YTJWRFlXeHNZbUZqYXloZmMzUmhkR1VzSUdOb2FXeGtMQ0JqWVd4c1ltRmpheXdnY0dGeVpXNTBMbDl5WlhOMWJIUXBPMXh1SUNBZ0lDQWdmU2s3WEc0Z0lDQWdmU2tvS1R0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCemRXSnpZM0pwWW1Vb2NHRnlaVzUwTENCamFHbHNaQ3dnYjI1R2RXeG1hV3hzYldWdWRDd2diMjVTWldwbFkzUnBiMjRwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdOb2FXeGtPMXh1ZlZ4dVhHNHZLaXBjYmlBZ1lGQnliMjFwYzJVdWNtVnpiMngyWldBZ2NtVjBkWEp1Y3lCaElIQnliMjFwYzJVZ2RHaGhkQ0IzYVd4c0lHSmxZMjl0WlNCeVpYTnZiSFpsWkNCM2FYUm9JSFJvWlZ4dUlDQndZWE56WldRZ1lIWmhiSFZsWUM0Z1NYUWdhWE1nYzJodmNuUm9ZVzVrSUdadmNpQjBhR1VnWm05c2JHOTNhVzVuT2x4dVhHNGdJR0JnWUdwaGRtRnpZM0pwY0hSY2JpQWdiR1YwSUhCeWIyMXBjMlVnUFNCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpaHlaWE52YkhabExDQnlaV3BsWTNRcGUxeHVJQ0FnSUhKbGMyOXNkbVVvTVNrN1hHNGdJSDBwTzF4dVhHNGdJSEJ5YjIxcGMyVXVkR2hsYmlobWRXNWpkR2x2YmloMllXeDFaU2w3WEc0Z0lDQWdMeThnZG1Gc2RXVWdQVDA5SURGY2JpQWdmU2s3WEc0Z0lHQmdZRnh1WEc0Z0lFbHVjM1JsWVdRZ2IyWWdkM0pwZEdsdVp5QjBhR1VnWVdKdmRtVXNJSGx2ZFhJZ1kyOWtaU0J1YjNjZ2MybHRjR3g1SUdKbFkyOXRaWE1nZEdobElHWnZiR3h2ZDJsdVp6cGNibHh1SUNCZ1lHQnFZWFpoYzJOeWFYQjBYRzRnSUd4bGRDQndjbTl0YVhObElEMGdVSEp2YldselpTNXlaWE52YkhabEtERXBPMXh1WEc0Z0lIQnliMjFwYzJVdWRHaGxiaWhtZFc1amRHbHZiaWgyWVd4MVpTbDdYRzRnSUNBZ0x5OGdkbUZzZFdVZ1BUMDlJREZjYmlBZ2ZTazdYRzRnSUdCZ1lGeHVYRzRnSUVCdFpYUm9iMlFnY21WemIyeDJaVnh1SUNCQWMzUmhkR2xqWEc0Z0lFQndZWEpoYlNCN1FXNTVmU0IyWVd4MVpTQjJZV3gxWlNCMGFHRjBJSFJvWlNCeVpYUjFjbTVsWkNCd2NtOXRhWE5sSUhkcGJHd2dZbVVnY21WemIyeDJaV1FnZDJsMGFGeHVJQ0JWYzJWbWRXd2dabTl5SUhSdmIyeHBibWN1WEc0Z0lFQnlaWFIxY200Z2UxQnliMjFwYzJWOUlHRWdjSEp2YldselpTQjBhR0YwSUhkcGJHd2dZbVZqYjIxbElHWjFiR1pwYkd4bFpDQjNhWFJvSUhSb1pTQm5hWFpsYmx4dUlDQmdkbUZzZFdWZ1hHNHFMMXh1Wm5WdVkzUnBiMjRnY21WemIyeDJaU2h2WW1wbFkzUXBJSHRjYmlBZ0x5cHFjMmhwYm5RZ2RtRnNhV1IwYUdsek9uUnlkV1VnS2k5Y2JpQWdkbUZ5SUVOdmJuTjBjblZqZEc5eUlEMGdkR2hwY3p0Y2JseHVJQ0JwWmlBb2IySnFaV04wSUNZbUlIUjVjR1Z2WmlCdlltcGxZM1FnUFQwOUlDZHZZbXBsWTNRbklDWW1JRzlpYW1WamRDNWpiMjV6ZEhKMVkzUnZjaUE5UFQwZ1EyOXVjM1J5ZFdOMGIzSXBJSHRjYmlBZ0lDQnlaWFIxY200Z2IySnFaV04wTzF4dUlDQjlYRzVjYmlBZ2RtRnlJSEJ5YjIxcGMyVWdQU0J1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9ibTl2Y0NrN1hHNGdJRjl5WlhOdmJIWmxLSEJ5YjIxcGMyVXNJRzlpYW1WamRDazdYRzRnSUhKbGRIVnliaUJ3Y205dGFYTmxPMXh1ZlZ4dVhHNTJZWElnVUZKUFRVbFRSVjlKUkNBOUlFMWhkR2d1Y21GdVpHOXRLQ2t1ZEc5VGRISnBibWNvTXpZcExuTjFZbk4wY21sdVp5Z3hOaWs3WEc1Y2JtWjFibU4wYVc5dUlHNXZiM0FvS1NCN2ZWeHVYRzUyWVhJZ1VFVk9SRWxPUnlBOUlIWnZhV1FnTUR0Y2JuWmhjaUJHVlV4R1NVeE1SVVFnUFNBeE8xeHVkbUZ5SUZKRlNrVkRWRVZFSUQwZ01qdGNibHh1ZG1GeUlFZEZWRjlVU0VWT1gwVlNVazlTSUQwZ2JtVjNJRVZ5Y205eVQySnFaV04wS0NrN1hHNWNibVoxYm1OMGFXOXVJSE5sYkdaR2RXeG1hV3hzYldWdWRDZ3BJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0paYjNVZ1kyRnVibTkwSUhKbGMyOXNkbVVnWVNCd2NtOXRhWE5sSUhkcGRHZ2dhWFJ6Wld4bVhDSXBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQmpZVzV1YjNSU1pYUjFjbTVQZDI0b0tTQjdYRzRnSUhKbGRIVnliaUJ1WlhjZ1ZIbHdaVVZ5Y205eUtDZEJJSEJ5YjIxcGMyVnpJR05oYkd4aVlXTnJJR05oYm01dmRDQnlaWFIxY200Z2RHaGhkQ0J6WVcxbElIQnliMjFwYzJVdUp5azdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHZGxkRlJvWlc0b2NISnZiV2x6WlNrZ2UxeHVJQ0IwY25rZ2UxeHVJQ0FnSUhKbGRIVnliaUJ3Y205dGFYTmxMblJvWlc0N1hHNGdJSDBnWTJGMFkyZ2dLR1Z5Y205eUtTQjdYRzRnSUNBZ1IwVlVYMVJJUlU1ZlJWSlNUMUl1WlhKeWIzSWdQU0JsY25KdmNqdGNiaUFnSUNCeVpYUjFjbTRnUjBWVVgxUklSVTVmUlZKU1QxSTdYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnZEhKNVZHaGxiaWgwYUdWdUxDQjJZV3gxWlN3Z1puVnNabWxzYkcxbGJuUklZVzVrYkdWeUxDQnlaV3BsWTNScGIyNUlZVzVrYkdWeUtTQjdYRzRnSUhSeWVTQjdYRzRnSUNBZ2RHaGxiaTVqWVd4c0tIWmhiSFZsTENCbWRXeG1hV3hzYldWdWRFaGhibVJzWlhJc0lISmxhbVZqZEdsdmJraGhibVJzWlhJcE8xeHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnY21WMGRYSnVJR1U3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2FHRnVaR3hsUm05eVpXbG5ibFJvWlc1aFlteGxLSEJ5YjIxcGMyVXNJSFJvWlc1aFlteGxMQ0IwYUdWdUtTQjdYRzRnSUdGellYQW9ablZ1WTNScGIyNGdLSEJ5YjIxcGMyVXBJSHRjYmlBZ0lDQjJZWElnYzJWaGJHVmtJRDBnWm1Gc2MyVTdYRzRnSUNBZ2RtRnlJR1Z5Y205eUlEMGdkSEo1VkdobGJpaDBhR1Z1TENCMGFHVnVZV0pzWlN3Z1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCcFppQW9jMlZoYkdWa0tTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNBZ0lIMWNiaUFnSUNBZ0lITmxZV3hsWkNBOUlIUnlkV1U3WEc0Z0lDQWdJQ0JwWmlBb2RHaGxibUZpYkdVZ0lUMDlJSFpoYkhWbEtTQjdYRzRnSUNBZ0lDQWdJRjl5WlhOdmJIWmxLSEJ5YjIxcGMyVXNJSFpoYkhWbEtUdGNiaUFnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lHWjFiR1pwYkd3b2NISnZiV2x6WlN3Z2RtRnNkV1VwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzSUdaMWJtTjBhVzl1SUNoeVpXRnpiMjRwSUh0Y2JpQWdJQ0FnSUdsbUlDaHpaV0ZzWldRcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2MyVmhiR1ZrSUQwZ2RISjFaVHRjYmx4dUlDQWdJQ0FnWDNKbGFtVmpkQ2h3Y205dGFYTmxMQ0J5WldGemIyNHBPMXh1SUNBZ0lIMHNJQ2RUWlhSMGJHVTZJQ2NnS3lBb2NISnZiV2x6WlM1ZmJHRmlaV3dnZkh3Z0p5QjFibXR1YjNkdUlIQnliMjFwYzJVbktTazdYRzVjYmlBZ0lDQnBaaUFvSVhObFlXeGxaQ0FtSmlCbGNuSnZjaWtnZTF4dUlDQWdJQ0FnYzJWaGJHVmtJRDBnZEhKMVpUdGNiaUFnSUNBZ0lGOXlaV3BsWTNRb2NISnZiV2x6WlN3Z1pYSnliM0lwTzF4dUlDQWdJSDFjYmlBZ2ZTd2djSEp2YldselpTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHaGhibVJzWlU5M2JsUm9aVzVoWW14bEtIQnliMjFwYzJVc0lIUm9aVzVoWW14bEtTQjdYRzRnSUdsbUlDaDBhR1Z1WVdKc1pTNWZjM1JoZEdVZ1BUMDlJRVpWVEVaSlRFeEZSQ2tnZTF4dUlDQWdJR1oxYkdacGJHd29jSEp2YldselpTd2dkR2hsYm1GaWJHVXVYM0psYzNWc2RDazdYRzRnSUgwZ1pXeHpaU0JwWmlBb2RHaGxibUZpYkdVdVgzTjBZWFJsSUQwOVBTQlNSVXBGUTFSRlJDa2dlMXh1SUNBZ0lGOXlaV3BsWTNRb2NISnZiV2x6WlN3Z2RHaGxibUZpYkdVdVgzSmxjM1ZzZENrN1hHNGdJSDBnWld4elpTQjdYRzRnSUNBZ2MzVmljMk55YVdKbEtIUm9aVzVoWW14bExDQjFibVJsWm1sdVpXUXNJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlGOXlaWE52YkhabEtIQnliMjFwYzJVc0lIWmhiSFZsS1R0Y2JpQWdJQ0I5TENCbWRXNWpkR2x2YmlBb2NtVmhjMjl1S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWDNKbGFtVmpkQ2h3Y205dGFYTmxMQ0J5WldGemIyNHBPMXh1SUNBZ0lIMHBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdoaGJtUnNaVTFoZVdKbFZHaGxibUZpYkdVb2NISnZiV2x6WlN3Z2JXRjVZbVZVYUdWdVlXSnNaU3dnZEdobGJpUWtLU0I3WEc0Z0lHbG1JQ2h0WVhsaVpWUm9aVzVoWW14bExtTnZibk4wY25WamRHOXlJRDA5UFNCd2NtOXRhWE5sTG1OdmJuTjBjblZqZEc5eUlDWW1JSFJvWlc0a0pDQTlQVDBnZEdobGJpQW1KaUJ0WVhsaVpWUm9aVzVoWW14bExtTnZibk4wY25WamRHOXlMbkpsYzI5c2RtVWdQVDA5SUhKbGMyOXNkbVVwSUh0Y2JpQWdJQ0JvWVc1a2JHVlBkMjVVYUdWdVlXSnNaU2h3Y205dGFYTmxMQ0J0WVhsaVpWUm9aVzVoWW14bEtUdGNiaUFnZlNCbGJITmxJSHRjYmlBZ0lDQnBaaUFvZEdobGJpUWtJRDA5UFNCSFJWUmZWRWhGVGw5RlVsSlBVaWtnZTF4dUlDQWdJQ0FnWDNKbGFtVmpkQ2h3Y205dGFYTmxMQ0JIUlZSZlZFaEZUbDlGVWxKUFVpNWxjbkp2Y2lrN1hHNGdJQ0FnZlNCbGJITmxJR2xtSUNoMGFHVnVKQ1FnUFQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lDQWdablZzWm1sc2JDaHdjbTl0YVhObExDQnRZWGxpWlZSb1pXNWhZbXhsS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dselJuVnVZM1JwYjI0b2RHaGxiaVFrS1NrZ2UxeHVJQ0FnSUNBZ2FHRnVaR3hsUm05eVpXbG5ibFJvWlc1aFlteGxLSEJ5YjIxcGMyVXNJRzFoZVdKbFZHaGxibUZpYkdVc0lIUm9aVzRrSkNrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR1oxYkdacGJHd29jSEp2YldselpTd2diV0Y1WW1WVWFHVnVZV0pzWlNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzU5WEc1Y2JtWjFibU4wYVc5dUlGOXlaWE52YkhabEtIQnliMjFwYzJVc0lIWmhiSFZsS1NCN1hHNGdJR2xtSUNod2NtOXRhWE5sSUQwOVBTQjJZV3gxWlNrZ2UxeHVJQ0FnSUY5eVpXcGxZM1FvY0hKdmJXbHpaU3dnYzJWc1prWjFiR1pwYkd4dFpXNTBLQ2twTzF4dUlDQjlJR1ZzYzJVZ2FXWWdLRzlpYW1WamRFOXlSblZ1WTNScGIyNG9kbUZzZFdVcEtTQjdYRzRnSUNBZ2FHRnVaR3hsVFdGNVltVlVhR1Z1WVdKc1pTaHdjbTl0YVhObExDQjJZV3gxWlN3Z1oyVjBWR2hsYmloMllXeDFaU2twTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUdaMWJHWnBiR3dvY0hKdmJXbHpaU3dnZG1Gc2RXVXBPMXh1SUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUhCMVlteHBjMmhTWldwbFkzUnBiMjRvY0hKdmJXbHpaU2tnZTF4dUlDQnBaaUFvY0hKdmJXbHpaUzVmYjI1bGNuSnZjaWtnZTF4dUlDQWdJSEJ5YjIxcGMyVXVYMjl1WlhKeWIzSW9jSEp2YldselpTNWZjbVZ6ZFd4MEtUdGNiaUFnZlZ4dVhHNGdJSEIxWW14cGMyZ29jSEp2YldselpTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHWjFiR1pwYkd3b2NISnZiV2x6WlN3Z2RtRnNkV1VwSUh0Y2JpQWdhV1lnS0hCeWIyMXBjMlV1WDNOMFlYUmxJQ0U5UFNCUVJVNUVTVTVIS1NCN1hHNGdJQ0FnY21WMGRYSnVPMXh1SUNCOVhHNWNiaUFnY0hKdmJXbHpaUzVmY21WemRXeDBJRDBnZG1Gc2RXVTdYRzRnSUhCeWIyMXBjMlV1WDNOMFlYUmxJRDBnUmxWTVJrbE1URVZFTzF4dVhHNGdJR2xtSUNod2NtOXRhWE5sTGw5emRXSnpZM0pwWW1WeWN5NXNaVzVuZEdnZ0lUMDlJREFwSUh0Y2JpQWdJQ0JoYzJGd0tIQjFZbXhwYzJnc0lIQnliMjFwYzJVcE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJRjl5WldwbFkzUW9jSEp2YldselpTd2djbVZoYzI5dUtTQjdYRzRnSUdsbUlDaHdjbTl0YVhObExsOXpkR0YwWlNBaFBUMGdVRVZPUkVsT1J5a2dlMXh1SUNBZ0lISmxkSFZ5Ymp0Y2JpQWdmVnh1SUNCd2NtOXRhWE5sTGw5emRHRjBaU0E5SUZKRlNrVkRWRVZFTzF4dUlDQndjbTl0YVhObExsOXlaWE4xYkhRZ1BTQnlaV0Z6YjI0N1hHNWNiaUFnWVhOaGNDaHdkV0pzYVhOb1VtVnFaV04wYVc5dUxDQndjbTl0YVhObEtUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z2MzVmljMk55YVdKbEtIQmhjbVZ1ZEN3Z1kyaHBiR1FzSUc5dVJuVnNabWxzYkcxbGJuUXNJRzl1VW1WcVpXTjBhVzl1S1NCN1hHNGdJSFpoY2lCZmMzVmljMk55YVdKbGNuTWdQU0J3WVhKbGJuUXVYM04xWW5OamNtbGlaWEp6TzF4dUlDQjJZWElnYkdWdVozUm9JRDBnWDNOMVluTmpjbWxpWlhKekxteGxibWQwYUR0Y2JseHVJQ0J3WVhKbGJuUXVYMjl1WlhKeWIzSWdQU0J1ZFd4c08xeHVYRzRnSUY5emRXSnpZM0pwWW1WeWMxdHNaVzVuZEdoZElEMGdZMmhwYkdRN1hHNGdJRjl6ZFdKelkzSnBZbVZ5YzF0c1pXNW5kR2dnS3lCR1ZVeEdTVXhNUlVSZElEMGdiMjVHZFd4bWFXeHNiV1Z1ZER0Y2JpQWdYM04xWW5OamNtbGlaWEp6VzJ4bGJtZDBhQ0FySUZKRlNrVkRWRVZFWFNBOUlHOXVVbVZxWldOMGFXOXVPMXh1WEc0Z0lHbG1JQ2hzWlc1bmRHZ2dQVDA5SURBZ0ppWWdjR0Z5Wlc1MExsOXpkR0YwWlNrZ2UxeHVJQ0FnSUdGellYQW9jSFZpYkdsemFDd2djR0Z5Wlc1MEtUdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJ3ZFdKc2FYTm9LSEJ5YjIxcGMyVXBJSHRjYmlBZ2RtRnlJSE4xWW5OamNtbGlaWEp6SUQwZ2NISnZiV2x6WlM1ZmMzVmljMk55YVdKbGNuTTdYRzRnSUhaaGNpQnpaWFIwYkdWa0lEMGdjSEp2YldselpTNWZjM1JoZEdVN1hHNWNiaUFnYVdZZ0tITjFZbk5qY21saVpYSnpMbXhsYm1kMGFDQTlQVDBnTUNrZ2UxeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUhaaGNpQmphR2xzWkNBOUlIVnVaR1ZtYVc1bFpDeGNiaUFnSUNBZ0lHTmhiR3hpWVdOcklEMGdkVzVrWldacGJtVmtMRnh1SUNBZ0lDQWdaR1YwWVdsc0lEMGdjSEp2YldselpTNWZjbVZ6ZFd4ME8xeHVYRzRnSUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2MzVmljMk55YVdKbGNuTXViR1Z1WjNSb095QnBJQ3M5SURNcElIdGNiaUFnSUNCamFHbHNaQ0E5SUhOMVluTmpjbWxpWlhKelcybGRPMXh1SUNBZ0lHTmhiR3hpWVdOcklEMGdjM1ZpYzJOeWFXSmxjbk5iYVNBcklITmxkSFJzWldSZE8xeHVYRzRnSUNBZ2FXWWdLR05vYVd4a0tTQjdYRzRnSUNBZ0lDQnBiblp2YTJWRFlXeHNZbUZqYXloelpYUjBiR1ZrTENCamFHbHNaQ3dnWTJGc2JHSmhZMnNzSUdSbGRHRnBiQ2s3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTmhiR3hpWVdOcktHUmxkR0ZwYkNrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NISnZiV2x6WlM1ZmMzVmljMk55YVdKbGNuTXViR1Z1WjNSb0lEMGdNRHRjYm4xY2JseHVablZ1WTNScGIyNGdSWEp5YjNKUFltcGxZM1FvS1NCN1hHNGdJSFJvYVhNdVpYSnliM0lnUFNCdWRXeHNPMXh1ZlZ4dVhHNTJZWElnVkZKWlgwTkJWRU5JWDBWU1VrOVNJRDBnYm1WM0lFVnljbTl5VDJKcVpXTjBLQ2s3WEc1Y2JtWjFibU4wYVc5dUlIUnllVU5oZEdOb0tHTmhiR3hpWVdOckxDQmtaWFJoYVd3cElIdGNiaUFnZEhKNUlIdGNiaUFnSUNCeVpYUjFjbTRnWTJGc2JHSmhZMnNvWkdWMFlXbHNLVHRjYmlBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lGUlNXVjlEUVZSRFNGOUZVbEpQVWk1bGNuSnZjaUE5SUdVN1hHNGdJQ0FnY21WMGRYSnVJRlJTV1Y5RFFWUkRTRjlGVWxKUFVqdGNiaUFnZlZ4dWZWeHVYRzVtZFc1amRHbHZiaUJwYm5admEyVkRZV3hzWW1GamF5aHpaWFIwYkdWa0xDQndjbTl0YVhObExDQmpZV3hzWW1GamF5d2daR1YwWVdsc0tTQjdYRzRnSUhaaGNpQm9ZWE5EWVd4c1ltRmpheUE5SUdselJuVnVZM1JwYjI0b1kyRnNiR0poWTJzcExGeHVJQ0FnSUNBZ2RtRnNkV1VnUFNCMWJtUmxabWx1WldRc1hHNGdJQ0FnSUNCbGNuSnZjaUE5SUhWdVpHVm1hVzVsWkN4Y2JpQWdJQ0FnSUhOMVkyTmxaV1JsWkNBOUlIVnVaR1ZtYVc1bFpDeGNiaUFnSUNBZ0lHWmhhV3hsWkNBOUlIVnVaR1ZtYVc1bFpEdGNibHh1SUNCcFppQW9hR0Z6UTJGc2JHSmhZMnNwSUh0Y2JpQWdJQ0IyWVd4MVpTQTlJSFJ5ZVVOaGRHTm9LR05oYkd4aVlXTnJMQ0JrWlhSaGFXd3BPMXh1WEc0Z0lDQWdhV1lnS0haaGJIVmxJRDA5UFNCVVVsbGZRMEZVUTBoZlJWSlNUMUlwSUh0Y2JpQWdJQ0FnSUdaaGFXeGxaQ0E5SUhSeWRXVTdYRzRnSUNBZ0lDQmxjbkp2Y2lBOUlIWmhiSFZsTG1WeWNtOXlPMXh1SUNBZ0lDQWdkbUZzZFdVZ1BTQnVkV3hzTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnpkV05qWldWa1pXUWdQU0IwY25WbE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUdsbUlDaHdjbTl0YVhObElEMDlQU0IyWVd4MVpTa2dlMXh1SUNBZ0lDQWdYM0psYW1WamRDaHdjbTl0YVhObExDQmpZVzV1YjNSU1pYUjFjbTVQZDI0b0tTazdYRzRnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhaaGJIVmxJRDBnWkdWMFlXbHNPMXh1SUNBZ0lITjFZMk5sWldSbFpDQTlJSFJ5ZFdVN1hHNGdJSDFjYmx4dUlDQnBaaUFvY0hKdmJXbHpaUzVmYzNSaGRHVWdJVDA5SUZCRlRrUkpUa2NwSUh0Y2JpQWdJQ0F2THlCdWIyOXdYRzRnSUgwZ1pXeHpaU0JwWmlBb2FHRnpRMkZzYkdKaFkyc2dKaVlnYzNWalkyVmxaR1ZrS1NCN1hHNGdJQ0FnSUNCZmNtVnpiMngyWlNod2NtOXRhWE5sTENCMllXeDFaU2s3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2htWVdsc1pXUXBJSHRjYmlBZ0lDQWdJRjl5WldwbFkzUW9jSEp2YldselpTd2daWEp5YjNJcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2MyVjBkR3hsWkNBOVBUMGdSbFZNUmtsTVRFVkVLU0I3WEc0Z0lDQWdJQ0JtZFd4bWFXeHNLSEJ5YjIxcGMyVXNJSFpoYkhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tITmxkSFJzWldRZ1BUMDlJRkpGU2tWRFZFVkVLU0I3WEc0Z0lDQWdJQ0JmY21WcVpXTjBLSEJ5YjIxcGMyVXNJSFpoYkhWbEtUdGNiaUFnSUNCOVhHNTlYRzVjYm1aMWJtTjBhVzl1SUdsdWFYUnBZV3hwZW1WUWNtOXRhWE5sS0hCeWIyMXBjMlVzSUhKbGMyOXNkbVZ5S1NCN1hHNGdJSFJ5ZVNCN1hHNGdJQ0FnY21WemIyeDJaWElvWm5WdVkzUnBiMjRnY21WemIyeDJaVkJ5YjIxcGMyVW9kbUZzZFdVcElIdGNiaUFnSUNBZ0lGOXlaWE52YkhabEtIQnliMjFwYzJVc0lIWmhiSFZsS1R0Y2JpQWdJQ0I5TENCbWRXNWpkR2x2YmlCeVpXcGxZM1JRY205dGFYTmxLSEpsWVhOdmJpa2dlMXh1SUNBZ0lDQWdYM0psYW1WamRDaHdjbTl0YVhObExDQnlaV0Z6YjI0cE8xeHVJQ0FnSUgwcE8xeHVJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnWDNKbGFtVmpkQ2h3Y205dGFYTmxMQ0JsS1R0Y2JpQWdmVnh1ZlZ4dVhHNTJZWElnYVdRZ1BTQXdPMXh1Wm5WdVkzUnBiMjRnYm1WNGRFbGtLQ2tnZTF4dUlDQnlaWFIxY200Z2FXUXJLenRjYm4xY2JseHVablZ1WTNScGIyNGdiV0ZyWlZCeWIyMXBjMlVvY0hKdmJXbHpaU2tnZTF4dUlDQndjbTl0YVhObFcxQlNUMDFKVTBWZlNVUmRJRDBnYVdRckt6dGNiaUFnY0hKdmJXbHpaUzVmYzNSaGRHVWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lIQnliMjFwYzJVdVgzSmxjM1ZzZENBOUlIVnVaR1ZtYVc1bFpEdGNiaUFnY0hKdmJXbHpaUzVmYzNWaWMyTnlhV0psY25NZ1BTQmJYVHRjYm4xY2JseHVablZ1WTNScGIyNGdSVzUxYldWeVlYUnZjaWhEYjI1emRISjFZM1J2Y2l3Z2FXNXdkWFFwSUh0Y2JpQWdkR2hwY3k1ZmFXNXpkR0Z1WTJWRGIyNXpkSEoxWTNSdmNpQTlJRU52Ym5OMGNuVmpkRzl5TzF4dUlDQjBhR2x6TG5CeWIyMXBjMlVnUFNCdVpYY2dRMjl1YzNSeWRXTjBiM0lvYm05dmNDazdYRzVjYmlBZ2FXWWdLQ0YwYUdsekxuQnliMjFwYzJWYlVGSlBUVWxUUlY5SlJGMHBJSHRjYmlBZ0lDQnRZV3RsVUhKdmJXbHpaU2gwYUdsekxuQnliMjFwYzJVcE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dselFYSnlZWGtvYVc1d2RYUXBLU0I3WEc0Z0lDQWdkR2hwY3k1ZmFXNXdkWFFnUFNCcGJuQjFkRHRjYmlBZ0lDQjBhR2x6TG14bGJtZDBhQ0E5SUdsdWNIVjBMbXhsYm1kMGFEdGNiaUFnSUNCMGFHbHpMbDl5WlcxaGFXNXBibWNnUFNCcGJuQjFkQzVzWlc1bmRHZzdYRzVjYmlBZ0lDQjBhR2x6TGw5eVpYTjFiSFFnUFNCdVpYY2dRWEp5WVhrb2RHaHBjeTVzWlc1bmRHZ3BPMXh1WEc0Z0lDQWdhV1lnS0hSb2FYTXViR1Z1WjNSb0lEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCbWRXeG1hV3hzS0hSb2FYTXVjSEp2YldselpTd2dkR2hwY3k1ZmNtVnpkV3gwS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1c1pXNW5kR2dnUFNCMGFHbHpMbXhsYm1kMGFDQjhmQ0F3TzF4dUlDQWdJQ0FnZEdocGN5NWZaVzUxYldWeVlYUmxLQ2s3WEc0Z0lDQWdJQ0JwWmlBb2RHaHBjeTVmY21WdFlXbHVhVzVuSUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUdaMWJHWnBiR3dvZEdocGN5NXdjbTl0YVhObExDQjBhR2x6TGw5eVpYTjFiSFFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JmY21WcVpXTjBLSFJvYVhNdWNISnZiV2x6WlN3Z2RtRnNhV1JoZEdsdmJrVnljbTl5S0NrcE8xeHVJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJSFpoYkdsa1lYUnBiMjVGY25KdmNpZ3BJSHRjYmlBZ2NtVjBkWEp1SUc1bGR5QkZjbkp2Y2lnblFYSnlZWGtnVFdWMGFHOWtjeUJ0ZFhOMElHSmxJSEJ5YjNacFpHVmtJR0Z1SUVGeWNtRjVKeWs3WEc1OU8xeHVYRzVGYm5WdFpYSmhkRzl5TG5CeWIzUnZkSGx3WlM1ZlpXNTFiV1Z5WVhSbElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQjJZWElnYkdWdVozUm9JRDBnZEdocGN5NXNaVzVuZEdnN1hHNGdJSFpoY2lCZmFXNXdkWFFnUFNCMGFHbHpMbDlwYm5CMWREdGNibHh1SUNCbWIzSWdLSFpoY2lCcElEMGdNRHNnZEdocGN5NWZjM1JoZEdVZ1BUMDlJRkJGVGtSSlRrY2dKaVlnYVNBOElHeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdkR2hwY3k1ZlpXRmphRVZ1ZEhKNUtGOXBibkIxZEZ0cFhTd2dhU2s3WEc0Z0lIMWNibjA3WEc1Y2JrVnVkVzFsY21GMGIzSXVjSEp2ZEc5MGVYQmxMbDlsWVdOb1JXNTBjbmtnUFNCbWRXNWpkR2x2YmlBb1pXNTBjbmtzSUdrcElIdGNiaUFnZG1GeUlHTWdQU0IwYUdsekxsOXBibk4wWVc1alpVTnZibk4wY25WamRHOXlPMXh1SUNCMllYSWdjbVZ6YjJ4MlpTUWtJRDBnWXk1eVpYTnZiSFpsTzF4dVhHNGdJR2xtSUNoeVpYTnZiSFpsSkNRZ1BUMDlJSEpsYzI5c2RtVXBJSHRjYmlBZ0lDQjJZWElnWDNSb1pXNGdQU0JuWlhSVWFHVnVLR1Z1ZEhKNUtUdGNibHh1SUNBZ0lHbG1JQ2hmZEdobGJpQTlQVDBnZEdobGJpQW1KaUJsYm5SeWVTNWZjM1JoZEdVZ0lUMDlJRkJGVGtSSlRrY3BJSHRjYmlBZ0lDQWdJSFJvYVhNdVgzTmxkSFJzWldSQmRDaGxiblJ5ZVM1ZmMzUmhkR1VzSUdrc0lHVnVkSEo1TGw5eVpYTjFiSFFwTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JRjkwYUdWdUlDRTlQU0FuWm5WdVkzUnBiMjRuS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDl5WlcxaGFXNXBibWN0TFR0Y2JpQWdJQ0FnSUhSb2FYTXVYM0psYzNWc2RGdHBYU0E5SUdWdWRISjVPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZeUE5UFQwZ1VISnZiV2x6WlNrZ2UxeHVJQ0FnSUNBZ2RtRnlJSEJ5YjIxcGMyVWdQU0J1WlhjZ1l5aHViMjl3S1R0Y2JpQWdJQ0FnSUdoaGJtUnNaVTFoZVdKbFZHaGxibUZpYkdVb2NISnZiV2x6WlN3Z1pXNTBjbmtzSUY5MGFHVnVLVHRjYmlBZ0lDQWdJSFJvYVhNdVgzZHBiR3hUWlhSMGJHVkJkQ2h3Y205dGFYTmxMQ0JwS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdkR2hwY3k1ZmQybHNiRk5sZEhSc1pVRjBLRzVsZHlCaktHWjFibU4wYVc5dUlDaHlaWE52YkhabEpDUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSEpsYzI5c2RtVWtKQ2hsYm5SeWVTazdYRzRnSUNBZ0lDQjlLU3dnYVNrN1hHNGdJQ0FnZlZ4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhSb2FYTXVYM2RwYkd4VFpYUjBiR1ZCZENoeVpYTnZiSFpsSkNRb1pXNTBjbmtwTENCcEtUdGNiaUFnZlZ4dWZUdGNibHh1Ulc1MWJXVnlZWFJ2Y2k1d2NtOTBiM1I1Y0dVdVgzTmxkSFJzWldSQmRDQTlJR1oxYm1OMGFXOXVJQ2h6ZEdGMFpTd2dhU3dnZG1Gc2RXVXBJSHRjYmlBZ2RtRnlJSEJ5YjIxcGMyVWdQU0IwYUdsekxuQnliMjFwYzJVN1hHNWNiaUFnYVdZZ0tIQnliMjFwYzJVdVgzTjBZWFJsSUQwOVBTQlFSVTVFU1U1SEtTQjdYRzRnSUNBZ2RHaHBjeTVmY21WdFlXbHVhVzVuTFMwN1hHNWNiaUFnSUNCcFppQW9jM1JoZEdVZ1BUMDlJRkpGU2tWRFZFVkVLU0I3WEc0Z0lDQWdJQ0JmY21WcVpXTjBLSEJ5YjIxcGMyVXNJSFpoYkhWbEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZEdocGN5NWZjbVZ6ZFd4MFcybGRJRDBnZG1Gc2RXVTdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdhV1lnS0hSb2FYTXVYM0psYldGcGJtbHVaeUE5UFQwZ01Da2dlMXh1SUNBZ0lHWjFiR1pwYkd3b2NISnZiV2x6WlN3Z2RHaHBjeTVmY21WemRXeDBLVHRjYmlBZ2ZWeHVmVHRjYmx4dVJXNTFiV1Z5WVhSdmNpNXdjbTkwYjNSNWNHVXVYM2RwYkd4VFpYUjBiR1ZCZENBOUlHWjFibU4wYVc5dUlDaHdjbTl0YVhObExDQnBLU0I3WEc0Z0lIWmhjaUJsYm5WdFpYSmhkRzl5SUQwZ2RHaHBjenRjYmx4dUlDQnpkV0p6WTNKcFltVW9jSEp2YldselpTd2dkVzVrWldacGJtVmtMQ0JtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQnlaWFIxY200Z1pXNTFiV1Z5WVhSdmNpNWZjMlYwZEd4bFpFRjBLRVpWVEVaSlRFeEZSQ3dnYVN3Z2RtRnNkV1VwTzF4dUlDQjlMQ0JtZFc1amRHbHZiaUFvY21WaGMyOXVLU0I3WEc0Z0lDQWdjbVYwZFhKdUlHVnVkVzFsY21GMGIzSXVYM05sZEhSc1pXUkJkQ2hTUlVwRlExUkZSQ3dnYVN3Z2NtVmhjMjl1S1R0Y2JpQWdmU2s3WEc1OU8xeHVYRzR2S2lwY2JpQWdZRkJ5YjIxcGMyVXVZV3hzWUNCaFkyTmxjSFJ6SUdGdUlHRnljbUY1SUc5bUlIQnliMjFwYzJWekxDQmhibVFnY21WMGRYSnVjeUJoSUc1bGR5QndjbTl0YVhObElIZG9hV05vWEc0Z0lHbHpJR1oxYkdacGJHeGxaQ0IzYVhSb0lHRnVJR0Z5Y21GNUlHOW1JR1oxYkdacGJHeHRaVzUwSUhaaGJIVmxjeUJtYjNJZ2RHaGxJSEJoYzNObFpDQndjbTl0YVhObGN5d2diM0pjYmlBZ2NtVnFaV04wWldRZ2QybDBhQ0IwYUdVZ2NtVmhjMjl1SUc5bUlIUm9aU0JtYVhKemRDQndZWE56WldRZ2NISnZiV2x6WlNCMGJ5QmlaU0J5WldwbFkzUmxaQzRnU1hRZ1kyRnpkSE1nWVd4c1hHNGdJR1ZzWlcxbGJuUnpJRzltSUhSb1pTQndZWE56WldRZ2FYUmxjbUZpYkdVZ2RHOGdjSEp2YldselpYTWdZWE1nYVhRZ2NuVnVjeUIwYUdseklHRnNaMjl5YVhSb2JTNWNibHh1SUNCRmVHRnRjR3hsT2x4dVhHNGdJR0JnWUdwaGRtRnpZM0pwY0hSY2JpQWdiR1YwSUhCeWIyMXBjMlV4SUQwZ2NtVnpiMngyWlNneEtUdGNiaUFnYkdWMElIQnliMjFwYzJVeUlEMGdjbVZ6YjJ4MlpTZ3lLVHRjYmlBZ2JHVjBJSEJ5YjIxcGMyVXpJRDBnY21WemIyeDJaU2d6S1R0Y2JpQWdiR1YwSUhCeWIyMXBjMlZ6SUQwZ1d5QndjbTl0YVhObE1Td2djSEp2YldselpUSXNJSEJ5YjIxcGMyVXpJRjA3WEc1Y2JpQWdVSEp2YldselpTNWhiR3dvY0hKdmJXbHpaWE1wTG5Sb1pXNG9ablZ1WTNScGIyNG9ZWEp5WVhrcGUxeHVJQ0FnSUM4dklGUm9aU0JoY25KaGVTQm9aWEpsSUhkdmRXeGtJR0psSUZzZ01Td2dNaXdnTXlCZE8xeHVJQ0I5S1R0Y2JpQWdZR0JnWEc1Y2JpQWdTV1lnWVc1NUlHOW1JSFJvWlNCZ2NISnZiV2x6WlhOZ0lHZHBkbVZ1SUhSdklHQmhiR3hnSUdGeVpTQnlaV3BsWTNSbFpDd2dkR2hsSUdacGNuTjBJSEJ5YjIxcGMyVmNiaUFnZEdoaGRDQnBjeUJ5WldwbFkzUmxaQ0IzYVd4c0lHSmxJR2RwZG1WdUlHRnpJR0Z1SUdGeVozVnRaVzUwSUhSdklIUm9aU0J5WlhSMWNtNWxaQ0J3Y205dGFYTmxjeWR6WEc0Z0lISmxhbVZqZEdsdmJpQm9ZVzVrYkdWeUxpQkdiM0lnWlhoaGJYQnNaVHBjYmx4dUlDQkZlR0Z0Y0d4bE9seHVYRzRnSUdCZ1lHcGhkbUZ6WTNKcGNIUmNiaUFnYkdWMElIQnliMjFwYzJVeElEMGdjbVZ6YjJ4MlpTZ3hLVHRjYmlBZ2JHVjBJSEJ5YjIxcGMyVXlJRDBnY21WcVpXTjBLRzVsZHlCRmNuSnZjaWhjSWpKY0lpa3BPMXh1SUNCc1pYUWdjSEp2YldselpUTWdQU0J5WldwbFkzUW9ibVYzSUVWeWNtOXlLRndpTTF3aUtTazdYRzRnSUd4bGRDQndjbTl0YVhObGN5QTlJRnNnY0hKdmJXbHpaVEVzSUhCeWIyMXBjMlV5TENCd2NtOXRhWE5sTXlCZE8xeHVYRzRnSUZCeWIyMXBjMlV1WVd4c0tIQnliMjFwYzJWektTNTBhR1Z1S0daMWJtTjBhVzl1S0dGeWNtRjVLWHRjYmlBZ0lDQXZMeUJEYjJSbElHaGxjbVVnYm1WMlpYSWdjblZ1Y3lCaVpXTmhkWE5sSUhSb1pYSmxJR0Z5WlNCeVpXcGxZM1JsWkNCd2NtOXRhWE5sY3lGY2JpQWdmU3dnWm5WdVkzUnBiMjRvWlhKeWIzSXBJSHRjYmlBZ0lDQXZMeUJsY25KdmNpNXRaWE56WVdkbElEMDlQU0JjSWpKY0lseHVJQ0I5S1R0Y2JpQWdZR0JnWEc1Y2JpQWdRRzFsZEdodlpDQmhiR3hjYmlBZ1FITjBZWFJwWTF4dUlDQkFjR0Z5WVcwZ2UwRnljbUY1ZlNCbGJuUnlhV1Z6SUdGeWNtRjVJRzltSUhCeWIyMXBjMlZ6WEc0Z0lFQndZWEpoYlNCN1UzUnlhVzVuZlNCc1lXSmxiQ0J2Y0hScGIyNWhiQ0J6ZEhKcGJtY2dabTl5SUd4aFltVnNhVzVuSUhSb1pTQndjbTl0YVhObExseHVJQ0JWYzJWbWRXd2dabTl5SUhSdmIyeHBibWN1WEc0Z0lFQnlaWFIxY200Z2UxQnliMjFwYzJWOUlIQnliMjFwYzJVZ2RHaGhkQ0JwY3lCbWRXeG1hV3hzWldRZ2QyaGxiaUJoYkd3Z1lIQnliMjFwYzJWellDQm9ZWFpsSUdKbFpXNWNiaUFnWm5Wc1ptbHNiR1ZrTENCdmNpQnlaV3BsWTNSbFpDQnBaaUJoYm5rZ2IyWWdkR2hsYlNCaVpXTnZiV1VnY21WcVpXTjBaV1F1WEc0Z0lFQnpkR0YwYVdOY2Jpb3ZYRzVtZFc1amRHbHZiaUJoYkd3b1pXNTBjbWxsY3lrZ2UxeHVJQ0J5WlhSMWNtNGdibVYzSUVWdWRXMWxjbUYwYjNJb2RHaHBjeXdnWlc1MGNtbGxjeWt1Y0hKdmJXbHpaVHRjYm4xY2JseHVMeW9xWEc0Z0lHQlFjbTl0YVhObExuSmhZMlZnSUhKbGRIVnlibk1nWVNCdVpYY2djSEp2YldselpTQjNhR2xqYUNCcGN5QnpaWFIwYkdWa0lHbHVJSFJvWlNCellXMWxJSGRoZVNCaGN5QjBhR1ZjYmlBZ1ptbHljM1FnY0dGemMyVmtJSEJ5YjIxcGMyVWdkRzhnYzJWMGRHeGxMbHh1WEc0Z0lFVjRZVzF3YkdVNlhHNWNiaUFnWUdCZ2FtRjJZWE5qY21sd2RGeHVJQ0JzWlhRZ2NISnZiV2x6WlRFZ1BTQnVaWGNnVUhKdmJXbHpaU2htZFc1amRHbHZiaWh5WlhOdmJIWmxMQ0J5WldwbFkzUXBlMXh1SUNBZ0lITmxkRlJwYldWdmRYUW9ablZ1WTNScGIyNG9LWHRjYmlBZ0lDQWdJSEpsYzI5c2RtVW9KM0J5YjIxcGMyVWdNU2NwTzF4dUlDQWdJSDBzSURJd01DazdYRzRnSUgwcE8xeHVYRzRnSUd4bGRDQndjbTl0YVhObE1pQTlJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2w3WEc0Z0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaWdwZTF4dUlDQWdJQ0FnY21WemIyeDJaU2duY0hKdmJXbHpaU0F5SnlrN1hHNGdJQ0FnZlN3Z01UQXdLVHRjYmlBZ2ZTazdYRzVjYmlBZ1VISnZiV2x6WlM1eVlXTmxLRnR3Y205dGFYTmxNU3dnY0hKdmJXbHpaVEpkS1M1MGFHVnVLR1oxYm1OMGFXOXVLSEpsYzNWc2RDbDdYRzRnSUNBZ0x5OGdjbVZ6ZFd4MElEMDlQU0FuY0hKdmJXbHpaU0F5SnlCaVpXTmhkWE5sSUdsMElIZGhjeUJ5WlhOdmJIWmxaQ0JpWldadmNtVWdjSEp2YldselpURmNiaUFnSUNBdkx5QjNZWE1nY21WemIyeDJaV1F1WEc0Z0lIMHBPMXh1SUNCZ1lHQmNibHh1SUNCZ1VISnZiV2x6WlM1eVlXTmxZQ0JwY3lCa1pYUmxjbTFwYm1semRHbGpJR2x1SUhSb1lYUWdiMjVzZVNCMGFHVWdjM1JoZEdVZ2IyWWdkR2hsSUdacGNuTjBYRzRnSUhObGRIUnNaV1FnY0hKdmJXbHpaU0J0WVhSMFpYSnpMaUJHYjNJZ1pYaGhiWEJzWlN3Z1pYWmxiaUJwWmlCdmRHaGxjaUJ3Y205dGFYTmxjeUJuYVhabGJpQjBieUIwYUdWY2JpQWdZSEJ5YjIxcGMyVnpZQ0JoY25KaGVTQmhjbWQxYldWdWRDQmhjbVVnY21WemIyeDJaV1FzSUdKMWRDQjBhR1VnWm1seWMzUWdjMlYwZEd4bFpDQndjbTl0YVhObElHaGhjMXh1SUNCaVpXTnZiV1VnY21WcVpXTjBaV1FnWW1WbWIzSmxJSFJvWlNCdmRHaGxjaUJ3Y205dGFYTmxjeUJpWldOaGJXVWdablZzWm1sc2JHVmtMQ0IwYUdVZ2NtVjBkWEp1WldSY2JpQWdjSEp2YldselpTQjNhV3hzSUdKbFkyOXRaU0J5WldwbFkzUmxaRHBjYmx4dUlDQmdZR0JxWVhaaGMyTnlhWEIwWEc0Z0lHeGxkQ0J3Y205dGFYTmxNU0E5SUc1bGR5QlFjbTl0YVhObEtHWjFibU4wYVc5dUtISmxjMjlzZG1Vc0lISmxhbVZqZENsN1hHNGdJQ0FnYzJWMFZHbHRaVzkxZENobWRXNWpkR2x2YmlncGUxeHVJQ0FnSUNBZ2NtVnpiMngyWlNnbmNISnZiV2x6WlNBeEp5azdYRzRnSUNBZ2ZTd2dNakF3S1R0Y2JpQWdmU2s3WEc1Y2JpQWdiR1YwSUhCeWIyMXBjMlV5SUQwZ2JtVjNJRkJ5YjIxcGMyVW9ablZ1WTNScGIyNG9jbVZ6YjJ4MlpTd2djbVZxWldOMEtYdGNiaUFnSUNCelpYUlVhVzFsYjNWMEtHWjFibU4wYVc5dUtDbDdYRzRnSUNBZ0lDQnlaV3BsWTNRb2JtVjNJRVZ5Y205eUtDZHdjbTl0YVhObElESW5LU2s3WEc0Z0lDQWdmU3dnTVRBd0tUdGNiaUFnZlNrN1hHNWNiaUFnVUhKdmJXbHpaUzV5WVdObEtGdHdjbTl0YVhObE1Td2djSEp2YldselpUSmRLUzUwYUdWdUtHWjFibU4wYVc5dUtISmxjM1ZzZENsN1hHNGdJQ0FnTHk4Z1EyOWtaU0JvWlhKbElHNWxkbVZ5SUhKMWJuTmNiaUFnZlN3Z1puVnVZM1JwYjI0b2NtVmhjMjl1S1h0Y2JpQWdJQ0F2THlCeVpXRnpiMjR1YldWemMyRm5aU0E5UFQwZ0ozQnliMjFwYzJVZ01pY2dZbVZqWVhWelpTQndjbTl0YVhObElESWdZbVZqWVcxbElISmxhbVZqZEdWa0lHSmxabTl5WlZ4dUlDQWdJQzh2SUhCeWIyMXBjMlVnTVNCaVpXTmhiV1VnWm5Wc1ptbHNiR1ZrWEc0Z0lIMHBPMXh1SUNCZ1lHQmNibHh1SUNCQmJpQmxlR0Z0Y0d4bElISmxZV3d0ZDI5eWJHUWdkWE5sSUdOaGMyVWdhWE1nYVcxd2JHVnRaVzUwYVc1bklIUnBiV1Z2ZFhSek9seHVYRzRnSUdCZ1lHcGhkbUZ6WTNKcGNIUmNiaUFnVUhKdmJXbHpaUzV5WVdObEtGdGhhbUY0S0NkbWIyOHVhbk52YmljcExDQjBhVzFsYjNWMEtEVXdNREFwWFNsY2JpQWdZR0JnWEc1Y2JpQWdRRzFsZEdodlpDQnlZV05sWEc0Z0lFQnpkR0YwYVdOY2JpQWdRSEJoY21GdElIdEJjbkpoZVgwZ2NISnZiV2x6WlhNZ1lYSnlZWGtnYjJZZ2NISnZiV2x6WlhNZ2RHOGdiMkp6WlhKMlpWeHVJQ0JWYzJWbWRXd2dabTl5SUhSdmIyeHBibWN1WEc0Z0lFQnlaWFIxY200Z2UxQnliMjFwYzJWOUlHRWdjSEp2YldselpTQjNhR2xqYUNCelpYUjBiR1Z6SUdsdUlIUm9aU0J6WVcxbElIZGhlU0JoY3lCMGFHVWdabWx5YzNRZ2NHRnpjMlZrWEc0Z0lIQnliMjFwYzJVZ2RHOGdjMlYwZEd4bExseHVLaTljYm1aMWJtTjBhVzl1SUhKaFkyVW9aVzUwY21sbGN5a2dlMXh1SUNBdkttcHphR2x1ZENCMllXeHBaSFJvYVhNNmRISjFaU0FxTDF4dUlDQjJZWElnUTI5dWMzUnlkV04wYjNJZ1BTQjBhR2x6TzF4dVhHNGdJR2xtSUNnaGFYTkJjbkpoZVNobGJuUnlhV1Z6S1NrZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9ablZ1WTNScGIyNGdLRjhzSUhKbGFtVmpkQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSEpsYW1WamRDaHVaWGNnVkhsd1pVVnljbTl5S0NkWmIzVWdiWFZ6ZENCd1lYTnpJR0Z1SUdGeWNtRjVJSFJ2SUhKaFkyVXVKeWtwTzF4dUlDQWdJSDBwTzF4dUlDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUhKbGRIVnliaUJ1WlhjZ1EyOXVjM1J5ZFdOMGIzSW9ablZ1WTNScGIyNGdLSEpsYzI5c2RtVXNJSEpsYW1WamRDa2dlMXh1SUNBZ0lDQWdkbUZ5SUd4bGJtZDBhQ0E5SUdWdWRISnBaWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0JzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ0lDQkRiMjV6ZEhKMVkzUnZjaTV5WlhOdmJIWmxLR1Z1ZEhKcFpYTmJhVjBwTG5Sb1pXNG9jbVZ6YjJ4MlpTd2djbVZxWldOMEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUtUdGNiaUFnZlZ4dWZWeHVYRzR2S2lwY2JpQWdZRkJ5YjIxcGMyVXVjbVZxWldOMFlDQnlaWFIxY201eklHRWdjSEp2YldselpTQnlaV3BsWTNSbFpDQjNhWFJvSUhSb1pTQndZWE56WldRZ1lISmxZWE52Ym1BdVhHNGdJRWwwSUdseklITm9iM0owYUdGdVpDQm1iM0lnZEdobElHWnZiR3h2ZDJsdVp6cGNibHh1SUNCZ1lHQnFZWFpoYzJOeWFYQjBYRzRnSUd4bGRDQndjbTl0YVhObElEMGdibVYzSUZCeWIyMXBjMlVvWm5WdVkzUnBiMjRvY21WemIyeDJaU3dnY21WcVpXTjBLWHRjYmlBZ0lDQnlaV3BsWTNRb2JtVjNJRVZ5Y205eUtDZFhTRTlQVUZNbktTazdYRzRnSUgwcE8xeHVYRzRnSUhCeWIyMXBjMlV1ZEdobGJpaG1kVzVqZEdsdmJpaDJZV3gxWlNsN1hHNGdJQ0FnTHk4Z1EyOWtaU0JvWlhKbElHUnZaWE51SjNRZ2NuVnVJR0psWTJGMWMyVWdkR2hsSUhCeWIyMXBjMlVnYVhNZ2NtVnFaV04wWldRaFhHNGdJSDBzSUdaMWJtTjBhVzl1S0hKbFlYTnZiaWw3WEc0Z0lDQWdMeThnY21WaGMyOXVMbTFsYzNOaFoyVWdQVDA5SUNkWFNFOVBVRk1uWEc0Z0lIMHBPMXh1SUNCZ1lHQmNibHh1SUNCSmJuTjBaV0ZrSUc5bUlIZHlhWFJwYm1jZ2RHaGxJR0ZpYjNabExDQjViM1Z5SUdOdlpHVWdibTkzSUhOcGJYQnNlU0JpWldOdmJXVnpJSFJvWlNCbWIyeHNiM2RwYm1jNlhHNWNiaUFnWUdCZ2FtRjJZWE5qY21sd2RGeHVJQ0JzWlhRZ2NISnZiV2x6WlNBOUlGQnliMjFwYzJVdWNtVnFaV04wS0c1bGR5QkZjbkp2Y2lnblYwaFBUMUJUSnlrcE8xeHVYRzRnSUhCeWIyMXBjMlV1ZEdobGJpaG1kVzVqZEdsdmJpaDJZV3gxWlNsN1hHNGdJQ0FnTHk4Z1EyOWtaU0JvWlhKbElHUnZaWE51SjNRZ2NuVnVJR0psWTJGMWMyVWdkR2hsSUhCeWIyMXBjMlVnYVhNZ2NtVnFaV04wWldRaFhHNGdJSDBzSUdaMWJtTjBhVzl1S0hKbFlYTnZiaWw3WEc0Z0lDQWdMeThnY21WaGMyOXVMbTFsYzNOaFoyVWdQVDA5SUNkWFNFOVBVRk1uWEc0Z0lIMHBPMXh1SUNCZ1lHQmNibHh1SUNCQWJXVjBhRzlrSUhKbGFtVmpkRnh1SUNCQWMzUmhkR2xqWEc0Z0lFQndZWEpoYlNCN1FXNTVmU0J5WldGemIyNGdkbUZzZFdVZ2RHaGhkQ0IwYUdVZ2NtVjBkWEp1WldRZ2NISnZiV2x6WlNCM2FXeHNJR0psSUhKbGFtVmpkR1ZrSUhkcGRHZ3VYRzRnSUZWelpXWjFiQ0JtYjNJZ2RHOXZiR2x1Wnk1Y2JpQWdRSEpsZEhWeWJpQjdVSEp2YldselpYMGdZU0J3Y205dGFYTmxJSEpsYW1WamRHVmtJSGRwZEdnZ2RHaGxJR2RwZG1WdUlHQnlaV0Z6YjI1Z0xseHVLaTljYm1aMWJtTjBhVzl1SUhKbGFtVmpkQ2h5WldGemIyNHBJSHRjYmlBZ0x5cHFjMmhwYm5RZ2RtRnNhV1IwYUdsek9uUnlkV1VnS2k5Y2JpQWdkbUZ5SUVOdmJuTjBjblZqZEc5eUlEMGdkR2hwY3p0Y2JpQWdkbUZ5SUhCeWIyMXBjMlVnUFNCdVpYY2dRMjl1YzNSeWRXTjBiM0lvYm05dmNDazdYRzRnSUY5eVpXcGxZM1FvY0hKdmJXbHpaU3dnY21WaGMyOXVLVHRjYmlBZ2NtVjBkWEp1SUhCeWIyMXBjMlU3WEc1OVhHNWNibVoxYm1OMGFXOXVJRzVsWldSelVtVnpiMngyWlhJb0tTQjdYRzRnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0oxbHZkU0J0ZFhOMElIQmhjM01nWVNCeVpYTnZiSFpsY2lCbWRXNWpkR2x2YmlCaGN5QjBhR1VnWm1seWMzUWdZWEpuZFcxbGJuUWdkRzhnZEdobElIQnliMjFwYzJVZ1kyOXVjM1J5ZFdOMGIzSW5LVHRjYm4xY2JseHVablZ1WTNScGIyNGdibVZsWkhOT1pYY29LU0I3WEc0Z0lIUm9jbTkzSUc1bGR5QlVlWEJsUlhKeWIzSW9YQ0pHWVdsc1pXUWdkRzhnWTI5dWMzUnlkV04wSUNkUWNtOXRhWE5sSnpvZ1VHeGxZWE5sSUhWelpTQjBhR1VnSjI1bGR5Y2diM0JsY21GMGIzSXNJSFJvYVhNZ2IySnFaV04wSUdOdmJuTjBjblZqZEc5eUlHTmhibTV2ZENCaVpTQmpZV3hzWldRZ1lYTWdZU0JtZFc1amRHbHZiaTVjSWlrN1hHNTlYRzVjYmk4cUtseHVJQ0JRY205dGFYTmxJRzlpYW1WamRITWdjbVZ3Y21WelpXNTBJSFJvWlNCbGRtVnVkSFZoYkNCeVpYTjFiSFFnYjJZZ1lXNGdZWE41Ym1Ob2NtOXViM1Z6SUc5d1pYSmhkR2x2Ymk0Z1ZHaGxYRzRnSUhCeWFXMWhjbmtnZDJGNUlHOW1JR2x1ZEdWeVlXTjBhVzVuSUhkcGRHZ2dZU0J3Y205dGFYTmxJR2x6SUhSb2NtOTFaMmdnYVhSeklHQjBhR1Z1WUNCdFpYUm9iMlFzSUhkb2FXTm9YRzRnSUhKbFoybHpkR1Z5Y3lCallXeHNZbUZqYTNNZ2RHOGdjbVZqWldsMlpTQmxhWFJvWlhJZ1lTQndjbTl0YVhObEozTWdaWFpsYm5SMVlXd2dkbUZzZFdVZ2IzSWdkR2hsSUhKbFlYTnZibHh1SUNCM2FIa2dkR2hsSUhCeWIyMXBjMlVnWTJGdWJtOTBJR0psSUdaMWJHWnBiR3hsWkM1Y2JseHVJQ0JVWlhKdGFXNXZiRzluZVZ4dUlDQXRMUzB0TFMwdExTMHRMVnh1WEc0Z0lDMGdZSEJ5YjIxcGMyVmdJR2x6SUdGdUlHOWlhbVZqZENCdmNpQm1kVzVqZEdsdmJpQjNhWFJvSUdFZ1lIUm9aVzVnSUcxbGRHaHZaQ0IzYUc5elpTQmlaV2hoZG1sdmNpQmpiMjVtYjNKdGN5QjBieUIwYUdseklITndaV05wWm1sallYUnBiMjR1WEc0Z0lDMGdZSFJvWlc1aFlteGxZQ0JwY3lCaGJpQnZZbXBsWTNRZ2IzSWdablZ1WTNScGIyNGdkR2hoZENCa1pXWnBibVZ6SUdFZ1lIUm9aVzVnSUcxbGRHaHZaQzVjYmlBZ0xTQmdkbUZzZFdWZ0lHbHpJR0Z1ZVNCc1pXZGhiQ0JLWVhaaFUyTnlhWEIwSUhaaGJIVmxJQ2hwYm1Oc2RXUnBibWNnZFc1a1pXWnBibVZrTENCaElIUm9aVzVoWW14bExDQnZjaUJoSUhCeWIyMXBjMlVwTGx4dUlDQXRJR0JsZUdObGNIUnBiMjVnSUdseklHRWdkbUZzZFdVZ2RHaGhkQ0JwY3lCMGFISnZkMjRnZFhOcGJtY2dkR2hsSUhSb2NtOTNJSE4wWVhSbGJXVnVkQzVjYmlBZ0xTQmdjbVZoYzI5dVlDQnBjeUJoSUhaaGJIVmxJSFJvWVhRZ2FXNWthV05oZEdWeklIZG9lU0JoSUhCeWIyMXBjMlVnZDJGeklISmxhbVZqZEdWa0xseHVJQ0F0SUdCelpYUjBiR1ZrWUNCMGFHVWdabWx1WVd3Z2NtVnpkR2x1WnlCemRHRjBaU0J2WmlCaElIQnliMjFwYzJVc0lHWjFiR1pwYkd4bFpDQnZjaUJ5WldwbFkzUmxaQzVjYmx4dUlDQkJJSEJ5YjIxcGMyVWdZMkZ1SUdKbElHbHVJRzl1WlNCdlppQjBhSEpsWlNCemRHRjBaWE02SUhCbGJtUnBibWNzSUdaMWJHWnBiR3hsWkN3Z2IzSWdjbVZxWldOMFpXUXVYRzVjYmlBZ1VISnZiV2x6WlhNZ2RHaGhkQ0JoY21VZ1puVnNabWxzYkdWa0lHaGhkbVVnWVNCbWRXeG1hV3hzYldWdWRDQjJZV3gxWlNCaGJtUWdZWEpsSUdsdUlIUm9aU0JtZFd4bWFXeHNaV1JjYmlBZ2MzUmhkR1V1SUNCUWNtOXRhWE5sY3lCMGFHRjBJR0Z5WlNCeVpXcGxZM1JsWkNCb1lYWmxJR0VnY21WcVpXTjBhVzl1SUhKbFlYTnZiaUJoYm1RZ1lYSmxJR2x1SUhSb1pWeHVJQ0J5WldwbFkzUmxaQ0J6ZEdGMFpTNGdJRUVnWm5Wc1ptbHNiRzFsYm5RZ2RtRnNkV1VnYVhNZ2JtVjJaWElnWVNCMGFHVnVZV0pzWlM1Y2JseHVJQ0JRY205dGFYTmxjeUJqWVc0Z1lXeHpieUJpWlNCellXbGtJSFJ2SUNweVpYTnZiSFpsS2lCaElIWmhiSFZsTGlBZ1NXWWdkR2hwY3lCMllXeDFaU0JwY3lCaGJITnZJR0ZjYmlBZ2NISnZiV2x6WlN3Z2RHaGxiaUIwYUdVZ2IzSnBaMmx1WVd3Z2NISnZiV2x6WlNkeklITmxkSFJzWldRZ2MzUmhkR1VnZDJsc2JDQnRZWFJqYUNCMGFHVWdkbUZzZFdVbmMxeHVJQ0J6WlhSMGJHVmtJSE4wWVhSbExpQWdVMjhnWVNCd2NtOXRhWE5sSUhSb1lYUWdLbkpsYzI5c2RtVnpLaUJoSUhCeWIyMXBjMlVnZEdoaGRDQnlaV3BsWTNSeklIZHBiR3hjYmlBZ2FYUnpaV3htSUhKbGFtVmpkQ3dnWVc1a0lHRWdjSEp2YldselpTQjBhR0YwSUNweVpYTnZiSFpsY3lvZ1lTQndjbTl0YVhObElIUm9ZWFFnWm5Wc1ptbHNiSE1nZDJsc2JGeHVJQ0JwZEhObGJHWWdablZzWm1sc2JDNWNibHh1WEc0Z0lFSmhjMmxqSUZWellXZGxPbHh1SUNBdExTMHRMUzB0TFMwdExTMWNibHh1SUNCZ1lHQnFjMXh1SUNCc1pYUWdjSEp2YldselpTQTlJRzVsZHlCUWNtOXRhWE5sS0daMWJtTjBhVzl1S0hKbGMyOXNkbVVzSUhKbGFtVmpkQ2tnZTF4dUlDQWdJQzh2SUc5dUlITjFZMk5sYzNOY2JpQWdJQ0J5WlhOdmJIWmxLSFpoYkhWbEtUdGNibHh1SUNBZ0lDOHZJRzl1SUdaaGFXeDFjbVZjYmlBZ0lDQnlaV3BsWTNRb2NtVmhjMjl1S1R0Y2JpQWdmU2s3WEc1Y2JpQWdjSEp2YldselpTNTBhR1Z1S0daMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lDQWdMeThnYjI0Z1puVnNabWxzYkcxbGJuUmNiaUFnZlN3Z1puVnVZM1JwYjI0b2NtVmhjMjl1S1NCN1hHNGdJQ0FnTHk4Z2IyNGdjbVZxWldOMGFXOXVYRzRnSUgwcE8xeHVJQ0JnWUdCY2JseHVJQ0JCWkhaaGJtTmxaQ0JWYzJGblpUcGNiaUFnTFMwdExTMHRMUzB0TFMwdExTMHRYRzVjYmlBZ1VISnZiV2x6WlhNZ2MyaHBibVVnZDJobGJpQmhZbk4wY21GamRHbHVaeUJoZDJGNUlHRnplVzVqYUhKdmJtOTFjeUJwYm5SbGNtRmpkR2x2Ym5NZ2MzVmphQ0JoYzF4dUlDQmdXRTFNU0hSMGNGSmxjWFZsYzNSZ2N5NWNibHh1SUNCZ1lHQnFjMXh1SUNCbWRXNWpkR2x2YmlCblpYUktVMDlPS0hWeWJDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCdVpYY2dVSEp2YldselpTaG1kVzVqZEdsdmJpaHlaWE52YkhabExDQnlaV3BsWTNRcGUxeHVJQ0FnSUNBZ2JHVjBJSGhvY2lBOUlHNWxkeUJZVFV4SWRIUndVbVZ4ZFdWemRDZ3BPMXh1WEc0Z0lDQWdJQ0I0YUhJdWIzQmxiaWduUjBWVUp5d2dkWEpzS1R0Y2JpQWdJQ0FnSUhob2NpNXZibkpsWVdSNWMzUmhkR1ZqYUdGdVoyVWdQU0JvWVc1a2JHVnlPMXh1SUNBZ0lDQWdlR2h5TG5KbGMzQnZibk5sVkhsd1pTQTlJQ2RxYzI5dUp6dGNiaUFnSUNBZ0lIaG9jaTV6WlhSU1pYRjFaWE4wU0dWaFpHVnlLQ2RCWTJObGNIUW5MQ0FuWVhCd2JHbGpZWFJwYjI0dmFuTnZiaWNwTzF4dUlDQWdJQ0FnZUdoeUxuTmxibVFvS1R0Y2JseHVJQ0FnSUNBZ1puVnVZM1JwYjI0Z2FHRnVaR3hsY2lncElIdGNiaUFnSUNBZ0lDQWdhV1lnS0hSb2FYTXVjbVZoWkhsVGRHRjBaU0E5UFQwZ2RHaHBjeTVFVDA1RktTQjdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tIUm9hWE11YzNSaGRIVnpJRDA5UFNBeU1EQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxjMjlzZG1Vb2RHaHBjeTV5WlhOd2IyNXpaU2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSEpsYW1WamRDaHVaWGNnUlhKeWIzSW9KMmRsZEVwVFQwNDZJR0FuSUNzZ2RYSnNJQ3NnSjJBZ1ptRnBiR1ZrSUhkcGRHZ2djM1JoZEhWek9pQmJKeUFySUhSb2FYTXVjM1JoZEhWeklDc2dKMTBuS1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5TzF4dUlDQWdJSDBwTzF4dUlDQjlYRzVjYmlBZ1oyVjBTbE5QVGlnbkwzQnZjM1J6TG1wemIyNG5LUzUwYUdWdUtHWjFibU4wYVc5dUtHcHpiMjRwSUh0Y2JpQWdJQ0F2THlCdmJpQm1kV3htYVd4c2JXVnVkRnh1SUNCOUxDQm1kVzVqZEdsdmJpaHlaV0Z6YjI0cElIdGNiaUFnSUNBdkx5QnZiaUJ5WldwbFkzUnBiMjVjYmlBZ2ZTazdYRzRnSUdCZ1lGeHVYRzRnSUZWdWJHbHJaU0JqWVd4c1ltRmphM01zSUhCeWIyMXBjMlZ6SUdGeVpTQm5jbVZoZENCamIyMXdiM05oWW14bElIQnlhVzFwZEdsMlpYTXVYRzVjYmlBZ1lHQmdhbk5jYmlBZ1VISnZiV2x6WlM1aGJHd29XMXh1SUNBZ0lHZGxkRXBUVDA0b0p5OXdiM04wY3ljcExGeHVJQ0FnSUdkbGRFcFRUMDRvSnk5amIyMXRaVzUwY3ljcFhHNGdJRjBwTG5Sb1pXNG9ablZ1WTNScGIyNG9kbUZzZFdWektYdGNiaUFnSUNCMllXeDFaWE5iTUYwZ0x5OGdQVDRnY0c5emRITktVMDlPWEc0Z0lDQWdkbUZzZFdWeld6RmRJQzh2SUQwK0lHTnZiVzFsYm5SelNsTlBUbHh1WEc0Z0lDQWdjbVYwZFhKdUlIWmhiSFZsY3p0Y2JpQWdmU2s3WEc0Z0lHQmdZRnh1WEc0Z0lFQmpiR0Z6Y3lCUWNtOXRhWE5sWEc0Z0lFQndZWEpoYlNCN1puVnVZM1JwYjI1OUlISmxjMjlzZG1WeVhHNGdJRlZ6WldaMWJDQm1iM0lnZEc5dmJHbHVaeTVjYmlBZ1FHTnZibk4wY25WamRHOXlYRzRxTDF4dVpuVnVZM1JwYjI0Z1VISnZiV2x6WlNoeVpYTnZiSFpsY2lrZ2UxeHVJQ0IwYUdselcxQlNUMDFKVTBWZlNVUmRJRDBnYm1WNGRFbGtLQ2s3WEc0Z0lIUm9hWE11WDNKbGMzVnNkQ0E5SUhSb2FYTXVYM04wWVhSbElEMGdkVzVrWldacGJtVmtPMXh1SUNCMGFHbHpMbDl6ZFdKelkzSnBZbVZ5Y3lBOUlGdGRPMXh1WEc0Z0lHbG1JQ2h1YjI5d0lDRTlQU0J5WlhOdmJIWmxjaWtnZTF4dUlDQWdJSFI1Y0dWdlppQnlaWE52YkhabGNpQWhQVDBnSjJaMWJtTjBhVzl1SnlBbUppQnVaV1ZrYzFKbGMyOXNkbVZ5S0NrN1hHNGdJQ0FnZEdocGN5QnBibk4wWVc1alpXOW1JRkJ5YjIxcGMyVWdQeUJwYm1sMGFXRnNhWHBsVUhKdmJXbHpaU2gwYUdsekxDQnlaWE52YkhabGNpa2dPaUJ1WldWa2MwNWxkeWdwTzF4dUlDQjlYRzU5WEc1Y2JsQnliMjFwYzJVdVlXeHNJRDBnWVd4c08xeHVVSEp2YldselpTNXlZV05sSUQwZ2NtRmpaVHRjYmxCeWIyMXBjMlV1Y21WemIyeDJaU0E5SUhKbGMyOXNkbVU3WEc1UWNtOXRhWE5sTG5KbGFtVmpkQ0E5SUhKbGFtVmpkRHRjYmxCeWIyMXBjMlV1WDNObGRGTmphR1ZrZFd4bGNpQTlJSE5sZEZOamFHVmtkV3hsY2p0Y2JsQnliMjFwYzJVdVgzTmxkRUZ6WVhBZ1BTQnpaWFJCYzJGd08xeHVVSEp2YldselpTNWZZWE5oY0NBOUlHRnpZWEE3WEc1Y2JsQnliMjFwYzJVdWNISnZkRzkwZVhCbElEMGdlMXh1SUNCamIyNXpkSEoxWTNSdmNqb2dVSEp2YldselpTeGNibHh1SUNBdktpcGNiaUFnSUNCVWFHVWdjSEpwYldGeWVTQjNZWGtnYjJZZ2FXNTBaWEpoWTNScGJtY2dkMmwwYUNCaElIQnliMjFwYzJVZ2FYTWdkR2h5YjNWbmFDQnBkSE1nWUhSb1pXNWdJRzFsZEdodlpDeGNiaUFnSUNCM2FHbGphQ0J5WldkcGMzUmxjbk1nWTJGc2JHSmhZMnR6SUhSdklISmxZMlZwZG1VZ1pXbDBhR1Z5SUdFZ2NISnZiV2x6WlNkeklHVjJaVzUwZFdGc0lIWmhiSFZsSUc5eUlIUm9aVnh1SUNBZ0lISmxZWE52YmlCM2FIa2dkR2hsSUhCeWIyMXBjMlVnWTJGdWJtOTBJR0psSUdaMWJHWnBiR3hsWkM1Y2JpQWdYRzRnSUNBZ1lHQmdhbk5jYmlBZ0lDQm1hVzVrVlhObGNpZ3BMblJvWlc0b1puVnVZM1JwYjI0b2RYTmxjaWw3WEc0Z0lDQWdJQ0F2THlCMWMyVnlJR2x6SUdGMllXbHNZV0pzWlZ4dUlDQWdJSDBzSUdaMWJtTjBhVzl1S0hKbFlYTnZiaWw3WEc0Z0lDQWdJQ0F2THlCMWMyVnlJR2x6SUhWdVlYWmhhV3hoWW14bExDQmhibVFnZVc5MUlHRnlaU0JuYVhabGJpQjBhR1VnY21WaGMyOXVJSGRvZVZ4dUlDQWdJSDBwTzF4dUlDQWdJR0JnWUZ4dUlDQmNiaUFnSUNCRGFHRnBibWx1WjF4dUlDQWdJQzB0TFMwdExTMHRYRzRnSUZ4dUlDQWdJRlJvWlNCeVpYUjFjbTRnZG1Gc2RXVWdiMllnWUhSb1pXNWdJR2x6SUdsMGMyVnNaaUJoSUhCeWIyMXBjMlV1SUNCVWFHbHpJSE5sWTI5dVpDd2dKMlJ2ZDI1emRISmxZVzBuWEc0Z0lDQWdjSEp2YldselpTQnBjeUJ5WlhOdmJIWmxaQ0IzYVhSb0lIUm9aU0J5WlhSMWNtNGdkbUZzZFdVZ2IyWWdkR2hsSUdacGNuTjBJSEJ5YjIxcGMyVW5jeUJtZFd4bWFXeHNiV1Z1ZEZ4dUlDQWdJRzl5SUhKbGFtVmpkR2x2YmlCb1lXNWtiR1Z5TENCdmNpQnlaV3BsWTNSbFpDQnBaaUIwYUdVZ2FHRnVaR3hsY2lCMGFISnZkM01nWVc0Z1pYaGpaWEIwYVc5dUxseHVJQ0JjYmlBZ0lDQmdZR0JxYzF4dUlDQWdJR1pwYm1SVmMyVnlLQ2t1ZEdobGJpaG1kVzVqZEdsdmJpQW9kWE5sY2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhWelpYSXVibUZ0WlR0Y2JpQWdJQ0I5TENCbWRXNWpkR2x2YmlBb2NtVmhjMjl1S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnSjJSbFptRjFiSFFnYm1GdFpTYzdYRzRnSUNBZ2ZTa3VkR2hsYmlobWRXNWpkR2x2YmlBb2RYTmxjazVoYldVcElIdGNiaUFnSUNBZ0lDOHZJRWxtSUdCbWFXNWtWWE5sY21BZ1puVnNabWxzYkdWa0xDQmdkWE5sY2s1aGJXVmdJSGRwYkd3Z1ltVWdkR2hsSUhWelpYSW5jeUJ1WVcxbExDQnZkR2hsY25kcGMyVWdhWFJjYmlBZ0lDQWdJQzh2SUhkcGJHd2dZbVVnWUNka1pXWmhkV3gwSUc1aGJXVW5ZRnh1SUNBZ0lIMHBPMXh1SUNCY2JpQWdJQ0JtYVc1a1ZYTmxjaWdwTG5Sb1pXNG9ablZ1WTNScGIyNGdLSFZ6WlhJcElIdGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblJtOTFibVFnZFhObGNpd2dZblYwSUhOMGFXeHNJSFZ1YUdGd2NIa25LVHRjYmlBZ0lDQjlMQ0JtZFc1amRHbHZiaUFvY21WaGMyOXVLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMkJtYVc1a1ZYTmxjbUFnY21WcVpXTjBaV1FnWVc1a0lIZGxKM0psSUhWdWFHRndjSGtuS1R0Y2JpQWdJQ0I5S1M1MGFHVnVLR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdMeThnYm1WMlpYSWdjbVZoWTJobFpGeHVJQ0FnSUgwc0lHWjFibU4wYVc5dUlDaHlaV0Z6YjI0cElIdGNiaUFnSUNBZ0lDOHZJR2xtSUdCbWFXNWtWWE5sY21BZ1puVnNabWxzYkdWa0xDQmdjbVZoYzI5dVlDQjNhV3hzSUdKbElDZEdiM1Z1WkNCMWMyVnlMQ0JpZFhRZ2MzUnBiR3dnZFc1b1lYQndlU2N1WEc0Z0lDQWdJQ0F2THlCSlppQmdabWx1WkZWelpYSmdJSEpsYW1WamRHVmtMQ0JnY21WaGMyOXVZQ0IzYVd4c0lHSmxJQ2RnWm1sdVpGVnpaWEpnSUhKbGFtVmpkR1ZrSUdGdVpDQjNaU2R5WlNCMWJtaGhjSEI1Snk1Y2JpQWdJQ0I5S1R0Y2JpQWdJQ0JnWUdCY2JpQWdJQ0JKWmlCMGFHVWdaRzkzYm5OMGNtVmhiU0J3Y205dGFYTmxJR1J2WlhNZ2JtOTBJSE53WldOcFpua2dZU0J5WldwbFkzUnBiMjRnYUdGdVpHeGxjaXdnY21WcVpXTjBhVzl1SUhKbFlYTnZibk1nZDJsc2JDQmlaU0J3Y205d1lXZGhkR1ZrSUdaMWNuUm9aWElnWkc5M2JuTjBjbVZoYlM1Y2JpQWdYRzRnSUNBZ1lHQmdhbk5jYmlBZ0lDQm1hVzVrVlhObGNpZ3BMblJvWlc0b1puVnVZM1JwYjI0Z0tIVnpaWElwSUh0Y2JpQWdJQ0FnSUhSb2NtOTNJRzVsZHlCUVpXUmhaMjluYVdOaGJFVjRZMlZ3ZEdsdmJpZ25WWEJ6ZEhKbFlXMGdaWEp5YjNJbktUdGNiaUFnSUNCOUtTNTBhR1Z1S0daMWJtTjBhVzl1SUNoMllXeDFaU2tnZTF4dUlDQWdJQ0FnTHk4Z2JtVjJaWElnY21WaFkyaGxaRnh1SUNBZ0lIMHBMblJvWlc0b1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNBdkx5QnVaWFpsY2lCeVpXRmphR1ZrWEc0Z0lDQWdmU3dnWm5WdVkzUnBiMjRnS0hKbFlYTnZiaWtnZTF4dUlDQWdJQ0FnTHk4Z1ZHaGxJR0JRWldSbllXZHZZMmxoYkVWNFkyVndkR2x2Ym1BZ2FYTWdjSEp2Y0dGbllYUmxaQ0JoYkd3Z2RHaGxJSGRoZVNCa2IzZHVJSFJ2SUdobGNtVmNiaUFnSUNCOUtUdGNiaUFnSUNCZ1lHQmNiaUFnWEc0Z0lDQWdRWE56YVcxcGJHRjBhVzl1WEc0Z0lDQWdMUzB0TFMwdExTMHRMUzB0WEc0Z0lGeHVJQ0FnSUZOdmJXVjBhVzFsY3lCMGFHVWdkbUZzZFdVZ2VXOTFJSGRoYm5RZ2RHOGdjSEp2Y0dGbllYUmxJSFJ2SUdFZ1pHOTNibk4wY21WaGJTQndjbTl0YVhObElHTmhiaUJ2Ym14NUlHSmxYRzRnSUNBZ2NtVjBjbWxsZG1Wa0lHRnplVzVqYUhKdmJtOTFjMng1TGlCVWFHbHpJR05oYmlCaVpTQmhZMmhwWlhabFpDQmllU0J5WlhSMWNtNXBibWNnWVNCd2NtOXRhWE5sSUdsdUlIUm9aVnh1SUNBZ0lHWjFiR1pwYkd4dFpXNTBJRzl5SUhKbGFtVmpkR2x2YmlCb1lXNWtiR1Z5TGlCVWFHVWdaRzkzYm5OMGNtVmhiU0J3Y205dGFYTmxJSGRwYkd3Z2RHaGxiaUJpWlNCd1pXNWthVzVuWEc0Z0lDQWdkVzUwYVd3Z2RHaGxJSEpsZEhWeWJtVmtJSEJ5YjIxcGMyVWdhWE1nYzJWMGRHeGxaQzRnVkdocGN5QnBjeUJqWVd4c1pXUWdLbUZ6YzJsdGFXeGhkR2x2YmlvdVhHNGdJRnh1SUNBZ0lHQmdZR3B6WEc0Z0lDQWdabWx1WkZWelpYSW9LUzUwYUdWdUtHWjFibU4wYVc5dUlDaDFjMlZ5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1sdVpFTnZiVzFsYm5SelFubEJkWFJvYjNJb2RYTmxjaWs3WEc0Z0lDQWdmU2t1ZEdobGJpaG1kVzVqZEdsdmJpQW9ZMjl0YldWdWRITXBJSHRjYmlBZ0lDQWdJQzh2SUZSb1pTQjFjMlZ5SjNNZ1kyOXRiV1Z1ZEhNZ1lYSmxJRzV2ZHlCaGRtRnBiR0ZpYkdWY2JpQWdJQ0I5S1R0Y2JpQWdJQ0JnWUdCY2JpQWdYRzRnSUNBZ1NXWWdkR2hsSUdGemMybHRiR2xoZEdWa0lIQnliMjFwYzJVZ2NtVnFaV04wY3l3Z2RHaGxiaUIwYUdVZ1pHOTNibk4wY21WaGJTQndjbTl0YVhObElIZHBiR3dnWVd4emJ5QnlaV3BsWTNRdVhHNGdJRnh1SUNBZ0lHQmdZR3B6WEc0Z0lDQWdabWx1WkZWelpYSW9LUzUwYUdWdUtHWjFibU4wYVc5dUlDaDFjMlZ5S1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWm1sdVpFTnZiVzFsYm5SelFubEJkWFJvYjNJb2RYTmxjaWs3WEc0Z0lDQWdmU2t1ZEdobGJpaG1kVzVqZEdsdmJpQW9ZMjl0YldWdWRITXBJSHRjYmlBZ0lDQWdJQzh2SUVsbUlHQm1hVzVrUTI5dGJXVnVkSE5DZVVGMWRHaHZjbUFnWm5Wc1ptbHNiSE1zSUhkbEoyeHNJR2hoZG1VZ2RHaGxJSFpoYkhWbElHaGxjbVZjYmlBZ0lDQjlMQ0JtZFc1amRHbHZiaUFvY21WaGMyOXVLU0I3WEc0Z0lDQWdJQ0F2THlCSlppQmdabWx1WkVOdmJXMWxiblJ6UW5sQmRYUm9iM0pnSUhKbGFtVmpkSE1zSUhkbEoyeHNJR2hoZG1VZ2RHaGxJSEpsWVhOdmJpQm9aWEpsWEc0Z0lDQWdmU2s3WEc0Z0lDQWdZR0JnWEc0Z0lGeHVJQ0FnSUZOcGJYQnNaU0JGZUdGdGNHeGxYRzRnSUNBZ0xTMHRMUzB0TFMwdExTMHRMUzFjYmlBZ1hHNGdJQ0FnVTNsdVkyaHliMjV2ZFhNZ1JYaGhiWEJzWlZ4dUlDQmNiaUFnSUNCZ1lHQnFZWFpoYzJOeWFYQjBYRzRnSUNBZ2JHVjBJSEpsYzNWc2REdGNiaUFnWEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUhKbGMzVnNkQ0E5SUdacGJtUlNaWE4xYkhRb0tUdGNiaUFnSUNBZ0lDOHZJSE4xWTJObGMzTmNiaUFnSUNCOUlHTmhkR05vS0hKbFlYTnZiaWtnZTF4dUlDQWdJQ0FnTHk4Z1ptRnBiSFZ5WlZ4dUlDQWdJSDFjYmlBZ0lDQmdZR0JjYmlBZ1hHNGdJQ0FnUlhKeVltRmpheUJGZUdGdGNHeGxYRzRnSUZ4dUlDQWdJR0JnWUdwelhHNGdJQ0FnWm1sdVpGSmxjM1ZzZENobWRXNWpkR2x2YmloeVpYTjFiSFFzSUdWeWNpbDdYRzRnSUNBZ0lDQnBaaUFvWlhKeUtTQjdYRzRnSUNBZ0lDQWdJQzh2SUdaaGFXeDFjbVZjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQzh2SUhOMVkyTmxjM05jYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ0lDQmdZR0JjYmlBZ1hHNGdJQ0FnVUhKdmJXbHpaU0JGZUdGdGNHeGxPMXh1SUNCY2JpQWdJQ0JnWUdCcVlYWmhjMk55YVhCMFhHNGdJQ0FnWm1sdVpGSmxjM1ZzZENncExuUm9aVzRvWm5WdVkzUnBiMjRvY21WemRXeDBLWHRjYmlBZ0lDQWdJQzh2SUhOMVkyTmxjM05jYmlBZ0lDQjlMQ0JtZFc1amRHbHZiaWh5WldGemIyNHBlMXh1SUNBZ0lDQWdMeThnWm1GcGJIVnlaVnh1SUNBZ0lIMHBPMXh1SUNBZ0lHQmdZRnh1SUNCY2JpQWdJQ0JCWkhaaGJtTmxaQ0JGZUdGdGNHeGxYRzRnSUNBZ0xTMHRMUzB0TFMwdExTMHRMUzFjYmlBZ1hHNGdJQ0FnVTNsdVkyaHliMjV2ZFhNZ1JYaGhiWEJzWlZ4dUlDQmNiaUFnSUNCZ1lHQnFZWFpoYzJOeWFYQjBYRzRnSUNBZ2JHVjBJR0YxZEdodmNpd2dZbTl2YTNNN1hHNGdJRnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0JoZFhSb2IzSWdQU0JtYVc1a1FYVjBhRzl5S0NrN1hHNGdJQ0FnSUNCaWIyOXJjeUFnUFNCbWFXNWtRbTl2YTNOQ2VVRjFkR2h2Y2loaGRYUm9iM0lwTzF4dUlDQWdJQ0FnTHk4Z2MzVmpZMlZ6YzF4dUlDQWdJSDBnWTJGMFkyZ29jbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQXZMeUJtWVdsc2RYSmxYRzRnSUNBZ2ZWeHVJQ0FnSUdCZ1lGeHVJQ0JjYmlBZ0lDQkZjbkppWVdOcklFVjRZVzF3YkdWY2JpQWdYRzRnSUNBZ1lHQmdhbk5jYmlBZ1hHNGdJQ0FnWm5WdVkzUnBiMjRnWm05MWJtUkNiMjlyY3loaWIyOXJjeWtnZTF4dUlDQmNiaUFnSUNCOVhHNGdJRnh1SUNBZ0lHWjFibU4wYVc5dUlHWmhhV3gxY21Vb2NtVmhjMjl1S1NCN1hHNGdJRnh1SUNBZ0lIMWNiaUFnWEc0Z0lDQWdabWx1WkVGMWRHaHZjaWhtZFc1amRHbHZiaWhoZFhSb2IzSXNJR1Z5Y2lsN1hHNGdJQ0FnSUNCcFppQW9aWEp5S1NCN1hHNGdJQ0FnSUNBZ0lHWmhhV3gxY21Vb1pYSnlLVHRjYmlBZ0lDQWdJQ0FnTHk4Z1ptRnBiSFZ5WlZ4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0JtYVc1a1FtOXZiMnR6UW5sQmRYUm9iM0lvWVhWMGFHOXlMQ0JtZFc1amRHbHZiaWhpYjI5cmN5d2daWEp5S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb1pYSnlLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR1poYVd4MWNtVW9aWEp5S1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnWm05MWJtUkNiMjlyY3loaWIyOXJjeWs3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSDBnWTJGMFkyZ29jbVZoYzI5dUtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdabUZwYkhWeVpTaHlaV0Z6YjI0cE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2ZTazdYRzRnSUNBZ0lDQWdJSDBnWTJGMFkyZ29aWEp5YjNJcElIdGNiaUFnSUNBZ0lDQWdJQ0JtWVdsc2RYSmxLR1Z5Y2lrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdMeThnYzNWalkyVnpjMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBPMXh1SUNBZ0lHQmdZRnh1SUNCY2JpQWdJQ0JRY205dGFYTmxJRVY0WVcxd2JHVTdYRzRnSUZ4dUlDQWdJR0JnWUdwaGRtRnpZM0pwY0hSY2JpQWdJQ0JtYVc1a1FYVjBhRzl5S0NrdVhHNGdJQ0FnSUNCMGFHVnVLR1pwYm1SQ2IyOXJjMEo1UVhWMGFHOXlLUzVjYmlBZ0lDQWdJSFJvWlc0b1puVnVZM1JwYjI0b1ltOXZhM01wZTF4dUlDQWdJQ0FnSUNBdkx5Qm1iM1Z1WkNCaWIyOXJjMXh1SUNBZ0lIMHBMbU5oZEdOb0tHWjFibU4wYVc5dUtISmxZWE52YmlsN1hHNGdJQ0FnSUNBdkx5QnpiMjFsZEdocGJtY2dkMlZ1ZENCM2NtOXVaMXh1SUNBZ0lIMHBPMXh1SUNBZ0lHQmdZRnh1SUNCY2JpQWdJQ0JBYldWMGFHOWtJSFJvWlc1Y2JpQWdJQ0JBY0dGeVlXMGdlMFoxYm1OMGFXOXVmU0J2YmtaMWJHWnBiR3hsWkZ4dUlDQWdJRUJ3WVhKaGJTQjdSblZ1WTNScGIyNTlJRzl1VW1WcVpXTjBaV1JjYmlBZ0lDQlZjMlZtZFd3Z1ptOXlJSFJ2YjJ4cGJtY3VYRzRnSUNBZ1FISmxkSFZ5YmlCN1VISnZiV2x6WlgxY2JpQWdLaTljYmlBZ2RHaGxiam9nZEdobGJpeGNibHh1SUNBdktpcGNiaUFnSUNCZ1kyRjBZMmhnSUdseklITnBiWEJzZVNCemRXZGhjaUJtYjNJZ1lIUm9aVzRvZFc1a1pXWnBibVZrTENCdmJsSmxhbVZqZEdsdmJpbGdJSGRvYVdOb0lHMWhhMlZ6SUdsMElIUm9aU0J6WVcxbFhHNGdJQ0FnWVhNZ2RHaGxJR05oZEdOb0lHSnNiMk5ySUc5bUlHRWdkSEo1TDJOaGRHTm9JSE4wWVhSbGJXVnVkQzVjYmlBZ1hHNGdJQ0FnWUdCZ2FuTmNiaUFnSUNCbWRXNWpkR2x2YmlCbWFXNWtRWFYwYUc5eUtDbDdYRzRnSUNBZ0lDQjBhSEp2ZHlCdVpYY2dSWEp5YjNJb0oyTnZkV3hrYmlkMElHWnBibVFnZEdoaGRDQmhkWFJvYjNJbktUdGNiaUFnSUNCOVhHNGdJRnh1SUNBZ0lDOHZJSE41Ym1Ob2NtOXViM1Z6WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUdacGJtUkJkWFJvYjNJb0tUdGNiaUFnSUNCOUlHTmhkR05vS0hKbFlYTnZiaWtnZTF4dUlDQWdJQ0FnTHk4Z2MyOXRaWFJvYVc1bklIZGxiblFnZDNKdmJtZGNiaUFnSUNCOVhHNGdJRnh1SUNBZ0lDOHZJR0Z6ZVc1aklIZHBkR2dnY0hKdmJXbHpaWE5jYmlBZ0lDQm1hVzVrUVhWMGFHOXlLQ2t1WTJGMFkyZ29ablZ1WTNScGIyNG9jbVZoYzI5dUtYdGNiaUFnSUNBZ0lDOHZJSE52YldWMGFHbHVaeUIzWlc1MElIZHliMjVuWEc0Z0lDQWdmU2s3WEc0Z0lDQWdZR0JnWEc0Z0lGeHVJQ0FnSUVCdFpYUm9iMlFnWTJGMFkyaGNiaUFnSUNCQWNHRnlZVzBnZTBaMWJtTjBhVzl1ZlNCdmJsSmxhbVZqZEdsdmJseHVJQ0FnSUZWelpXWjFiQ0JtYjNJZ2RHOXZiR2x1Wnk1Y2JpQWdJQ0JBY21WMGRYSnVJSHRRY205dGFYTmxmVnh1SUNBcUwxeHVJQ0FuWTJGMFkyZ25PaUJtZFc1amRHbHZiaUJmWTJGMFkyZ29iMjVTWldwbFkzUnBiMjRwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdkR2hwY3k1MGFHVnVLRzUxYkd3c0lHOXVVbVZxWldOMGFXOXVLVHRjYmlBZ2ZWeHVmVHRjYmx4dVpuVnVZM1JwYjI0Z2NHOXNlV1pwYkd3b0tTQjdYRzRnSUNBZ2RtRnlJR3h2WTJGc0lEMGdkVzVrWldacGJtVmtPMXh1WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJuYkc5aVlXd2dJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJR3h2WTJGc0lEMGdaMnh2WW1Gc08xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUhObGJHWWdJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzRnSUNBZ0lDQWdJR3h2WTJGc0lEMGdjMlZzWmp0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IwY25rZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnYkc5allXd2dQU0JHZFc1amRHbHZiaWduY21WMGRYSnVJSFJvYVhNbktTZ3BPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM0J2YkhsbWFXeHNJR1poYVd4bFpDQmlaV05oZFhObElHZHNiMkpoYkNCdlltcGxZM1FnYVhNZ2RXNWhkbUZwYkdGaWJHVWdhVzRnZEdocGN5QmxiblpwY205dWJXVnVkQ2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dVhHNGdJQ0FnZG1GeUlGQWdQU0JzYjJOaGJDNVFjbTl0YVhObE8xeHVYRzRnSUNBZ2FXWWdLRkFwSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJSEJ5YjIxcGMyVlViMU4wY21sdVp5QTlJRzUxYkd3N1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQndjbTl0YVhObFZHOVRkSEpwYm1jZ1BTQlBZbXBsWTNRdWNISnZkRzkwZVhCbExuUnZVM1J5YVc1bkxtTmhiR3dvVUM1eVpYTnZiSFpsS0NrcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJ6YVd4bGJuUnNlU0JwWjI1dmNtVmtYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNCcFppQW9jSEp2YldselpWUnZVM1J5YVc1bklEMDlQU0FuVzI5aWFtVmpkQ0JRY205dGFYTmxYU2NnSmlZZ0lWQXVZMkZ6ZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdmVnh1WEc0Z0lDQWdiRzlqWVd3dVVISnZiV2x6WlNBOUlGQnliMjFwYzJVN1hHNTlYRzVjYm5CdmJIbG1hV3hzS0NrN1hHNHZMeUJUZEhKaGJtZGxJR052YlhCaGRDNHVYRzVRY205dGFYTmxMbkJ2YkhsbWFXeHNJRDBnY0c5c2VXWnBiR3c3WEc1UWNtOXRhWE5sTGxCeWIyMXBjMlVnUFNCUWNtOXRhWE5sTzF4dVhHNXlaWFIxY200Z1VISnZiV2x6WlR0Y2JseHVmU2twS1R0Y2JpOHZJeUJ6YjNWeVkyVk5ZWEJ3YVc1blZWSk1QV1Z6Tmkxd2NtOXRhWE5sTG0xaGNGeHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyVnpOaTF3Y205dGFYTmxMMlJwYzNRdlpYTTJMWEJ5YjIxcGMyVXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0EyWEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSXZMeUJ6YUdsdElHWnZjaUIxYzJsdVp5QndjbTlqWlhOeklHbHVJR0p5YjNkelpYSmNiblpoY2lCd2NtOWpaWE56SUQwZ2JXOWtkV3hsTG1WNGNHOXlkSE1nUFNCN2ZUdGNibHh1THk4Z1kyRmphR1ZrSUdaeWIyMGdkMmhoZEdWMlpYSWdaMnh2WW1Gc0lHbHpJSEJ5WlhObGJuUWdjMjhnZEdoaGRDQjBaWE4wSUhKMWJtNWxjbk1nZEdoaGRDQnpkSFZpSUdsMFhHNHZMeUJrYjI0bmRDQmljbVZoYXlCMGFHbHVaM011SUNCQ2RYUWdkMlVnYm1WbFpDQjBieUIzY21Gd0lHbDBJR2x1SUdFZ2RISjVJR05oZEdOb0lHbHVJR05oYzJVZ2FYUWdhWE5jYmk4dklIZHlZWEJ3WldRZ2FXNGdjM1J5YVdOMElHMXZaR1VnWTI5a1pTQjNhR2xqYUNCa2IyVnpiaWQwSUdSbFptbHVaU0JoYm5rZ1oyeHZZbUZzY3k0Z0lFbDBKM01nYVc1emFXUmxJR0ZjYmk4dklHWjFibU4wYVc5dUlHSmxZMkYxYzJVZ2RISjVMMk5oZEdOb1pYTWdaR1Z2Y0hScGJXbDZaU0JwYmlCalpYSjBZV2x1SUdWdVoybHVaWE11WEc1Y2JuWmhjaUJqWVdOb1pXUlRaWFJVYVcxbGIzVjBPMXh1ZG1GeUlHTmhZMmhsWkVOc1pXRnlWR2x0Wlc5MWREdGNibHh1Wm5WdVkzUnBiMjRnWkdWbVlYVnNkRk5sZEZScGJXOTFkQ2dwSUh0Y2JpQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KM05sZEZScGJXVnZkWFFnYUdGeklHNXZkQ0JpWldWdUlHUmxabWx1WldRbktUdGNibjFjYm1aMWJtTjBhVzl1SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRZ0tDa2dlMXh1SUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2lnblkyeGxZWEpVYVcxbGIzVjBJR2hoY3lCdWIzUWdZbVZsYmlCa1pXWnBibVZrSnlrN1hHNTlYRzRvWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoMGVYQmxiMllnYzJWMFZHbHRaVzkxZENBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdaR1ZtWVhWc2RGTmxkRlJwYlc5MWREdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5SUdSbFptRjFiSFJUWlhSVWFXMXZkWFE3WEc0Z0lDQWdmVnh1SUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsYjJZZ1kyeGxZWEpVYVcxbGIzVjBJRDA5UFNBblpuVnVZM1JwYjI0bktTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRZ1BTQmpiR1ZoY2xScGJXVnZkWFE3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQU0JrWldaaGRXeDBRMnhsWVhKVWFXMWxiM1YwTzF4dUlDQWdJSDFjYm4wZ0tDa3BYRzVtZFc1amRHbHZiaUJ5ZFc1VWFXMWxiM1YwS0daMWJpa2dlMXh1SUNBZ0lHbG1JQ2hqWVdOb1pXUlRaWFJVYVcxbGIzVjBJRDA5UFNCelpYUlVhVzFsYjNWMEtTQjdYRzRnSUNBZ0lDQWdJQzh2Ym05eWJXRnNJR1Z1ZG1seWIyMWxiblJ6SUdsdUlITmhibVVnYzJsMGRXRjBhVzl1YzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYzJWMFZHbHRaVzkxZENobWRXNHNJREFwTzF4dUlDQWdJSDFjYmlBZ0lDQXZMeUJwWmlCelpYUlVhVzFsYjNWMElIZGhjMjRuZENCaGRtRnBiR0ZpYkdVZ1luVjBJSGRoY3lCc1lYUjBaWElnWkdWbWFXNWxaRnh1SUNBZ0lHbG1JQ2dvWTJGamFHVmtVMlYwVkdsdFpXOTFkQ0E5UFQwZ1pHVm1ZWFZzZEZObGRGUnBiVzkxZENCOGZDQWhZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDa2dKaVlnYzJWMFZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQmpZV05vWldSVFpYUlVhVzFsYjNWMElEMGdjMlYwVkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE5sZEZScGJXVnZkWFFvWm5WdUxDQXdLVHRjYmlBZ0lDQjlYRzRnSUNBZ2RISjVJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2QyaGxiaUIzYUdWdUlITnZiV1ZpYjJSNUlHaGhjeUJ6WTNKbGQyVmtJSGRwZEdnZ2MyVjBWR2x0Wlc5MWRDQmlkWFFnYm04Z1NTNUZMaUJ0WVdSa2JtVnpjMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDaG1kVzRzSURBcE8xeHVJQ0FnSUgwZ1kyRjBZMmdvWlNsN1hHNGdJQ0FnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQXZMeUJYYUdWdUlIZGxJR0Z5WlNCcGJpQkpMa1V1SUdKMWRDQjBhR1VnYzJOeWFYQjBJR2hoY3lCaVpXVnVJR1YyWVd4bFpDQnpieUJKTGtVdUlHUnZaWE51SjNRZ2RISjFjM1FnZEdobElHZHNiMkpoYkNCdlltcGxZM1FnZDJobGJpQmpZV3hzWldRZ2JtOXliV0ZzYkhsY2JpQWdJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQmpZV05vWldSVFpYUlVhVzFsYjNWMExtTmhiR3dvYm5Wc2JDd2dablZ1TENBd0tUdGNiaUFnSUNBZ0lDQWdmU0JqWVhSamFDaGxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSE5oYldVZ1lYTWdZV0p2ZG1VZ1luVjBJSGRvWlc0Z2FYUW5jeUJoSUhabGNuTnBiMjRnYjJZZ1NTNUZMaUIwYUdGMElHMTFjM1FnYUdGMlpTQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQm1iM0lnSjNSb2FYTW5MQ0JvYjNCbWRXeHNlU0J2ZFhJZ1kyOXVkR1Y0ZENCamIzSnlaV04wSUc5MGFHVnlkMmx6WlNCcGRDQjNhV3hzSUhSb2NtOTNJR0VnWjJ4dlltRnNJR1Z5Y205eVhHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZqYUdWa1UyVjBWR2x0Wlc5MWRDNWpZV3hzS0hSb2FYTXNJR1oxYml3Z01DazdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmx4dWZWeHVablZ1WTNScGIyNGdjblZ1UTJ4bFlYSlVhVzFsYjNWMEtHMWhjbXRsY2lrZ2UxeHVJQ0FnSUdsbUlDaGpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQVDA5SUdOc1pXRnlWR2x0Wlc5MWRDa2dlMXh1SUNBZ0lDQWdJQ0F2TDI1dmNtMWhiQ0JsYm5acGNtOXRaVzUwY3lCcGJpQnpZVzVsSUhOcGRIVmhkR2x2Ym5OY2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOc1pXRnlWR2x0Wlc5MWRDaHRZWEpyWlhJcE8xeHVJQ0FnSUgxY2JpQWdJQ0F2THlCcFppQmpiR1ZoY2xScGJXVnZkWFFnZDJGemJpZDBJR0YyWVdsc1lXSnNaU0JpZFhRZ2QyRnpJR3hoZEhSbGNpQmtaV1pwYm1Wa1hHNGdJQ0FnYVdZZ0tDaGpZV05vWldSRGJHVmhjbFJwYldWdmRYUWdQVDA5SUdSbFptRjFiSFJEYkdWaGNsUnBiV1Z2ZFhRZ2ZId2dJV05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQ2tnSmlZZ1kyeGxZWEpVYVcxbGIzVjBLU0I3WEc0Z0lDQWdJQ0FnSUdOaFkyaGxaRU5zWldGeVZHbHRaVzkxZENBOUlHTnNaV0Z5VkdsdFpXOTFkRHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJR05zWldGeVZHbHRaVzkxZENodFlYSnJaWElwTzF4dUlDQWdJSDFjYmlBZ0lDQjBjbmtnZTF4dUlDQWdJQ0FnSUNBdkx5QjNhR1Z1SUhkb1pXNGdjMjl0WldKdlpIa2dhR0Z6SUhOamNtVjNaV1FnZDJsMGFDQnpaWFJVYVcxbGIzVjBJR0oxZENCdWJ5QkpMa1V1SUcxaFpHUnVaWE56WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJqWVdOb1pXUkRiR1ZoY2xScGJXVnZkWFFvYldGeWEyVnlLVHRjYmlBZ0lDQjlJR05oZEdOb0lDaGxLWHRjYmlBZ0lDQWdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lDQWdJQ0FnSUM4dklGZG9aVzRnZDJVZ1lYSmxJR2x1SUVrdVJTNGdZblYwSUhSb1pTQnpZM0pwY0hRZ2FHRnpJR0psWlc0Z1pYWmhiR1ZrSUhOdklFa3VSUzRnWkc5bGMyNG5kQ0FnZEhKMWMzUWdkR2hsSUdkc2IySmhiQ0J2WW1wbFkzUWdkMmhsYmlCallXeHNaV1FnYm05eWJXRnNiSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lISmxkSFZ5YmlCallXTm9aV1JEYkdWaGNsUnBiV1Z2ZFhRdVkyRnNiQ2h1ZFd4c0xDQnRZWEpyWlhJcE8xeHVJQ0FnSUNBZ0lDQjlJR05oZEdOb0lDaGxLWHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJSE5oYldVZ1lYTWdZV0p2ZG1VZ1luVjBJSGRvWlc0Z2FYUW5jeUJoSUhabGNuTnBiMjRnYjJZZ1NTNUZMaUIwYUdGMElHMTFjM1FnYUdGMlpTQjBhR1VnWjJ4dlltRnNJRzlpYW1WamRDQm1iM0lnSjNSb2FYTW5MQ0JvYjNCbWRXeHNlU0J2ZFhJZ1kyOXVkR1Y0ZENCamIzSnlaV04wSUc5MGFHVnlkMmx6WlNCcGRDQjNhV3hzSUhSb2NtOTNJR0VnWjJ4dlltRnNJR1Z5Y205eUxseHVJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z1UyOXRaU0IyWlhKemFXOXVjeUJ2WmlCSkxrVXVJR2hoZG1VZ1pHbG1abVZ5Wlc1MElISjFiR1Z6SUdadmNpQmpiR1ZoY2xScGJXVnZkWFFnZG5NZ2MyVjBWR2x0Wlc5MWRGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR05oWTJobFpFTnNaV0Z5VkdsdFpXOTFkQzVqWVd4c0tIUm9hWE1zSUcxaGNtdGxjaWs3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JseHVYRzU5WEc1MllYSWdjWFZsZFdVZ1BTQmJYVHRjYm5aaGNpQmtjbUZwYm1sdVp5QTlJR1poYkhObE8xeHVkbUZ5SUdOMWNuSmxiblJSZFdWMVpUdGNiblpoY2lCeGRXVjFaVWx1WkdWNElEMGdMVEU3WEc1Y2JtWjFibU4wYVc5dUlHTnNaV0Z1VlhCT1pYaDBWR2xqYXlncElIdGNiaUFnSUNCcFppQW9JV1J5WVdsdWFXNW5JSHg4SUNGamRYSnlaVzUwVVhWbGRXVXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lIMWNiaUFnSUNCa2NtRnBibWx1WnlBOUlHWmhiSE5sTzF4dUlDQWdJR2xtSUNoamRYSnlaVzUwVVhWbGRXVXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJSEYxWlhWbElEMGdZM1Z5Y21WdWRGRjFaWFZsTG1OdmJtTmhkQ2h4ZFdWMVpTazdYRzRnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2NYVmxkV1ZKYm1SbGVDQTlJQzB4TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvY1hWbGRXVXViR1Z1WjNSb0tTQjdYRzRnSUNBZ0lDQWdJR1J5WVdsdVVYVmxkV1VvS1R0Y2JpQWdJQ0I5WEc1OVhHNWNibVoxYm1OMGFXOXVJR1J5WVdsdVVYVmxkV1VvS1NCN1hHNGdJQ0FnYVdZZ0tHUnlZV2x1YVc1bktTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJqdGNiaUFnSUNCOVhHNGdJQ0FnZG1GeUlIUnBiV1Z2ZFhRZ1BTQnlkVzVVYVcxbGIzVjBLR05zWldGdVZYQk9aWGgwVkdsamF5azdYRzRnSUNBZ1pISmhhVzVwYm1jZ1BTQjBjblZsTzF4dVhHNGdJQ0FnZG1GeUlHeGxiaUE5SUhGMVpYVmxMbXhsYm1kMGFEdGNiaUFnSUNCM2FHbHNaU2hzWlc0cElIdGNiaUFnSUNBZ0lDQWdZM1Z5Y21WdWRGRjFaWFZsSUQwZ2NYVmxkV1U3WEc0Z0lDQWdJQ0FnSUhGMVpYVmxJRDBnVzEwN1hHNGdJQ0FnSUNBZ0lIZG9hV3hsSUNnckszRjFaWFZsU1c1a1pYZ2dQQ0JzWlc0cElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpkWEp5Wlc1MFVYVmxkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCamRYSnlaVzUwVVhWbGRXVmJjWFZsZFdWSmJtUmxlRjB1Y25WdUtDazdYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdjWFZsZFdWSmJtUmxlQ0E5SUMweE8xeHVJQ0FnSUNBZ0lDQnNaVzRnUFNCeGRXVjFaUzVzWlc1bmRHZzdYRzRnSUNBZ2ZWeHVJQ0FnSUdOMWNuSmxiblJSZFdWMVpTQTlJRzUxYkd3N1hHNGdJQ0FnWkhKaGFXNXBibWNnUFNCbVlXeHpaVHRjYmlBZ0lDQnlkVzVEYkdWaGNsUnBiV1Z2ZFhRb2RHbHRaVzkxZENrN1hHNTlYRzVjYm5CeWIyTmxjM011Ym1WNGRGUnBZMnNnUFNCbWRXNWpkR2x2YmlBb1puVnVLU0I3WEc0Z0lDQWdkbUZ5SUdGeVozTWdQU0J1WlhjZ1FYSnlZWGtvWVhKbmRXMWxiblJ6TG14bGJtZDBhQ0F0SURFcE8xeHVJQ0FnSUdsbUlDaGhjbWQxYldWdWRITXViR1Z1WjNSb0lENGdNU2tnZTF4dUlDQWdJQ0FnSUNCbWIzSWdLSFpoY2lCcElEMGdNVHNnYVNBOElHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdZWEpuYzF0cElDMGdNVjBnUFNCaGNtZDFiV1Z1ZEhOYmFWMDdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ2NYVmxkV1V1Y0hWemFDaHVaWGNnU1hSbGJTaG1kVzRzSUdGeVozTXBLVHRjYmlBZ0lDQnBaaUFvY1hWbGRXVXViR1Z1WjNSb0lEMDlQU0F4SUNZbUlDRmtjbUZwYm1sdVp5a2dlMXh1SUNBZ0lDQWdJQ0J5ZFc1VWFXMWxiM1YwS0dSeVlXbHVVWFZsZFdVcE8xeHVJQ0FnSUgxY2JuMDdYRzVjYmk4dklIWTRJR3hwYTJWeklIQnlaV1JwWTNScFlteGxJRzlpYW1WamRITmNibVoxYm1OMGFXOXVJRWwwWlcwb1puVnVMQ0JoY25KaGVTa2dlMXh1SUNBZ0lIUm9hWE11Wm5WdUlEMGdablZ1TzF4dUlDQWdJSFJvYVhNdVlYSnlZWGtnUFNCaGNuSmhlVHRjYm4xY2JrbDBaVzB1Y0hKdmRHOTBlWEJsTG5KMWJpQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0IwYUdsekxtWjFiaTVoY0hCc2VTaHVkV3hzTENCMGFHbHpMbUZ5Y21GNUtUdGNibjA3WEc1d2NtOWpaWE56TG5ScGRHeGxJRDBnSjJKeWIzZHpaWEluTzF4dWNISnZZMlZ6Y3k1aWNtOTNjMlZ5SUQwZ2RISjFaVHRjYm5CeWIyTmxjM011Wlc1MklEMGdlMzA3WEc1d2NtOWpaWE56TG1GeVozWWdQU0JiWFR0Y2JuQnliMk5sYzNNdWRtVnljMmx2YmlBOUlDY25PeUF2THlCbGJYQjBlU0J6ZEhKcGJtY2dkRzhnWVhadmFXUWdjbVZuWlhod0lHbHpjM1ZsYzF4dWNISnZZMlZ6Y3k1MlpYSnphVzl1Y3lBOUlIdDlPMXh1WEc1bWRXNWpkR2x2YmlCdWIyOXdLQ2tnZTMxY2JseHVjSEp2WTJWemN5NXZiaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbUZrWkV4cGMzUmxibVZ5SUQwZ2JtOXZjRHRjYm5CeWIyTmxjM011YjI1alpTQTlJRzV2YjNBN1hHNXdjbTlqWlhOekxtOW1aaUE5SUc1dmIzQTdYRzV3Y205alpYTnpMbkpsYlc5MlpVeHBjM1JsYm1WeUlEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdWNtVnRiM1psUVd4c1RHbHpkR1Z1WlhKeklEMGdibTl2Y0R0Y2JuQnliMk5sYzNNdVpXMXBkQ0E5SUc1dmIzQTdYRzVjYm5CeWIyTmxjM011WW1sdVpHbHVaeUE5SUdaMWJtTjBhVzl1SUNodVlXMWxLU0I3WEc0Z0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZHdjbTlqWlhOekxtSnBibVJwYm1jZ2FYTWdibTkwSUhOMWNIQnZjblJsWkNjcE8xeHVmVHRjYmx4dWNISnZZMlZ6Y3k1amQyUWdQU0JtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlBbkx5Y2dmVHRjYm5CeWIyTmxjM011WTJoa2FYSWdQU0JtZFc1amRHbHZiaUFvWkdseUtTQjdYRzRnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0Nkd2NtOWpaWE56TG1Ob1pHbHlJR2x6SUc1dmRDQnpkWEJ3YjNKMFpXUW5LVHRjYm4wN1hHNXdjbTlqWlhOekxuVnRZWE5ySUQwZ1puVnVZM1JwYjI0b0tTQjdJSEpsZEhWeWJpQXdPeUI5TzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmNISnZZMlZ6Y3k5aWNtOTNjMlZ5TG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ04xeHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHlvZ0tHbG5ibTl5WldRcElDb3ZYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lCMlpYSjBlQ0FvYVdkdWIzSmxaQ2xjYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0E0WEc0Z0tpb2diVzlrZFd4bElHTm9kVzVyY3lBOUlEQmNiaUFxS2k4aUxDSXZLaUVnUUhCeVpYTmxjblpsWEc0Z0tpQklhbk52YmlCMk1pNHpMakZjYmlBcUlHaDBkSEE2THk5b2FuTnZiaTV2Y21kY2JpQXFYRzRnS2lCRGIzQjVjbWxuYUhRZ01qQXhOQzB5TURFMklFTm9jbWx6ZEdsaGJpQmFZVzVuYkN3Z1RVbFVJR3hwWTJWdWMyVmNiaUFxSUVSbGRHRnBiSE1nWVc1a0lHUnZZM1Z0Wlc1MFlYUnBiMjQ2WEc0Z0tpQm9kSFJ3Y3pvdkwyZHBkR2gxWWk1amIyMHZhR3B6YjI0dmFHcHpiMjR0YW5OY2JpQXFYRzRnS2lCVWFHbHpJR052WkdVZ2FYTWdZbUZ6WldRZ2IyNGdkR2hsSUhSb1pTQktVMDlPSUhabGNuTnBiMjRnWW5rZ1JHOTFaMnhoY3lCRGNtOWphMlp2Y21RNlhHNGdLaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2Wkc5MVoyeGhjMk55YjJOclptOXlaQzlLVTA5T0xXcHpJQ2hxYzI5dVgzQmhjbk5sTG1wekxDQnFjMjl1TWk1cWN5bGNiaUFxTDF4dVhHNHZLbHh1WEc0Z0lGUm9hWE1nWm1sc1pTQmpjbVZoZEdWeklHRWdTR3B6YjI0Z2IySnFaV04wT2x4dVhHNWNiaUFnSUNCSWFuTnZiaTV3WVhKelpTaDBaWGgwTENCdmNIUnBiMjV6S1Z4dVhHNGdJQ0FnSUNCdmNIUnBiMjV6SUh0Y2JpQWdJQ0FnSUNBZ2EyVmxjRmR6WXlBZ0lDQWdZbTl2YkdWaGJpd2dhMlZsY0NCM2FHbDBaU0J6Y0dGalpTQmhibVFnWTI5dGJXVnVkSE11SUZSb2FYTWdhWE1nZFhObFpuVnNYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlIbHZkU0IzWVc1MElIUnZJR1ZrYVhRZ1lXNGdhR3B6YjI0Z1ptbHNaU0JoYm1RZ2MyRjJaU0JwZENCM2FHbHNaVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCd2NtVnpaWEoyYVc1bklHTnZiVzFsYm5SeklDaGtaV1poZFd4MElHWmhiSE5sS1Z4dVhHNGdJQ0FnSUNBZ0lHUnpaaUFnSUNBZ0lDQWdJR0Z5Y21GNUlHOW1JRVJUUmlBb2MyVmxJRWhxYzI5dUxtUnpaaWxjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnVkdocGN5QnRaWFJvYjJRZ2NHRnljMlZ6SUVocWMyOXVJSFJsZUhRZ2RHOGdjSEp2WkhWalpTQmhiaUJ2WW1wbFkzUWdiM0lnWVhKeVlYa3VYRzRnSUNBZ0lDQkpkQ0JqWVc0Z2RHaHliM2NnWVNCVGVXNTBZWGhGY25KdmNpQmxlR05sY0hScGIyNHVYRzVjYmx4dUlDQWdJRWhxYzI5dUxuTjBjbWx1WjJsbWVTaDJZV3gxWlN3Z2IzQjBhVzl1Y3lsY2JseHVJQ0FnSUNBZ2RtRnNkV1VnSUNBZ0lDQWdJQ0JoYm5rZ1NtRjJZVk5qY21sd2RDQjJZV3gxWlN3Z2RYTjFZV3hzZVNCaGJpQnZZbXBsWTNRZ2IzSWdZWEp5WVhrdVhHNWNiaUFnSUNBZ0lHOXdkR2x2Ym5NZ2V5QWdJQ0FnWVd4c0lHOXdkR2x2Ym5NZ1lYSmxYRzVjYmlBZ0lDQWdJQ0FnYTJWbGNGZHpZeUFnSUNBZ1ltOXZiR1ZoYml3Z2EyVmxjQ0IzYUdsMFpTQnpjR0ZqWlM0Z1UyVmxJSEJoY25ObExseHVYRzRnSUNBZ0lDQWdJR0p5WVdObGMxTmhiV1ZNYVc1bFhHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJR0p2YjJ4bFlXNHNJRzFoYTJWeklHSnlZV05sY3lCaGNIQmxZWElnYjI0Z2RHaGxJSE5oYldVZ2JHbHVaU0JoY3lCMGFHVWdhMlY1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHNWhiV1V1SUVSbFptRjFiSFFnWm1Gc2MyVXVYRzVjYmlBZ0lDQWdJQ0FnWlcxcGRGSnZiM1JDY21GalpYTmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYjJKemIyeGxkR1U2SUhkcGJHd2dZV3gzWVhseklHVnRhWFFnWW5KaFkyVnpYRzVjYmlBZ0lDQWdJQ0FnY1hWdmRHVnpJQ0FnSUNBZ2MzUnlhVzVuTENCamIyNTBjbTlzY3lCb2IzY2djM1J5YVc1bmN5QmhjbVVnWkdsemNHeGhlV1ZrTGx4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQmNJbTFwYmx3aUlDQWdJQ0F0SUc1dklIRjFiM1JsY3lCM2FHVnVaWFpsY2lCd2IzTnphV0pzWlNBb1pHVm1ZWFZzZENsY2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdYQ0poYkhkaGVYTmNJaUFnTFNCaGJIZGhlWE1nZFhObElIRjFiM1JsYzF4dVhHNGdJQ0FnSUNBZ0lITndZV05sSUNBZ0lDQWdJSE53WldOcFptbGxjeUIwYUdVZ2FXNWtaVzUwWVhScGIyNGdiMllnYm1WemRHVmtJSE4wY25WamRIVnlaWE11SUVsbUlHbDBJR2x6WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHRWdiblZ0WW1WeUxDQnBkQ0IzYVd4c0lITndaV05wWm5rZ2RHaGxJRzUxYldKbGNpQnZaaUJ6Y0dGalpYTWdkRzhnYVc1a1pXNTBYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUdGMElHVmhZMmdnYkdWMlpXd3VJRWxtSUdsMElHbHpJR0VnYzNSeWFXNW5JQ2h6ZFdOb0lHRnpJQ2RjWEhRbklHOXlJQ2NnSUNjcExGeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwZENCamIyNTBZV2x1Y3lCMGFHVWdZMmhoY21GamRHVnljeUIxYzJWa0lIUnZJR2x1WkdWdWRDQmhkQ0JsWVdOb0lHeGxkbVZzTGx4dVhHNGdJQ0FnSUNBZ0lHVnZiQ0FnSUNBZ0lDQWdJSE53WldOcFptbGxjeUIwYUdVZ1JVOU1JSE5sY1hWbGJtTmxJQ2hrWldaaGRXeDBJR2x6SUhObGRDQmllVnh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnSUNCSWFuTnZiaTV6WlhSRmJtUlBaa3hwYm1Vb0tTbGNibHh1SUNBZ0lDQWdJQ0JqYjJ4dmNuTWdJQ0FnSUNCaWIyOXNaV0Z1TENCdmRYUndkWFFnWVhOamFXa2dZMjlzYjNJZ1kyOWtaWE5jYmx4dUlDQWdJQ0FnSUNCa2MyWWdJQ0FnSUNBZ0lDQmhjbkpoZVNCdlppQkVVMFlnS0hObFpTQklhbk52Ymk1a2MyWXBYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJRlJvYVhNZ2JXVjBhRzlrSUhCeWIyUjFZMlZ6SUVocWMyOXVJSFJsZUhRZ1puSnZiU0JoSUVwaGRtRlRZM0pwY0hRZ2RtRnNkV1V1WEc1Y2JpQWdJQ0FnSUZaaGJIVmxjeUIwYUdGMElHUnZJRzV2ZENCb1lYWmxJRXBUVDA0Z2NtVndjbVZ6Wlc1MFlYUnBiMjV6TENCemRXTm9JR0Z6SUhWdVpHVm1hVzVsWkNCdmNseHVJQ0FnSUNBZ1puVnVZM1JwYjI1ekxDQjNhV3hzSUc1dmRDQmlaU0J6WlhKcFlXeHBlbVZrTGlCVGRXTm9JSFpoYkhWbGN5QnBiaUJ2WW1wbFkzUnpJSGRwYkd3Z1ltVmNiaUFnSUNBZ0lHUnliM0J3WldRN0lHbHVJR0Z5Y21GNWN5QjBhR1Y1SUhkcGJHd2dZbVVnY21Wd2JHRmpaV1FnZDJsMGFDQnVkV3hzTGx4dUlDQWdJQ0FnYzNSeWFXNW5hV1o1S0hWdVpHVm1hVzVsWkNrZ2NtVjBkWEp1Y3lCMWJtUmxabWx1WldRdVhHNWNibHh1SUNBZ0lFaHFjMjl1TG1WdVpFOW1UR2x1WlNncFhHNGdJQ0FnU0dwemIyNHVjMlYwUlc1a1QyWk1hVzVsS0dWdmJDbGNibHh1SUNBZ0lDQWdSMlYwY3lCdmNpQnpaWFJ6SUhSb1pTQnpkSEpwYm1kcFpua2dSVTlNSUhObGNYVmxibU5sSUNnblhGeHVKeUJ2Y2lBblhGeHlYRnh1SnlrdVhHNGdJQ0FnSUNCWGFHVnVJSEoxYm01cGJtY2dkMmwwYUNCdWIyUmxMbXB6SUhSb2FYTWdaR1ZtWVhWc2RITWdkRzhnYjNNdVJVOU1MbHh1WEc1Y2JpQWdJQ0JJYW5OdmJpNXlkQ0I3SUhCaGNuTmxMQ0J6ZEhKcGJtZHBabmtnZlZ4dVhHNGdJQ0FnSUNCVWFHbHpJR2x6SUdFZ2MyaHZjblJqZFhRZ2RHOGdjbTkxYm1SMGNtbHdJSGx2ZFhJZ1kyOXRiV1Z1ZEhNZ2QyaGxiaUJ5WldGa2FXNW5JR0Z1WkNCMWNHUmhkR2x1WjF4dUlDQWdJQ0FnWVNCamIyNW1hV2NnWm1sc1pTNGdTWFFnYVhNZ2RHaGxJSE5oYldVZ1lYTWdjM0JsWTJsbWVXbHVaeUIwYUdVZ2EyVmxjRmR6WXlCdmNIUnBiMjRnWm05eUlIUm9aVnh1SUNBZ0lDQWdjR0Z5YzJVZ1lXNWtJSE4wY21sdVoybG1lU0JtZFc1amRHbHZibk11WEc1Y2JseHVJQ0FnSUVocWMyOXVMblpsY25OcGIyNWNibHh1SUNBZ0lDQWdWR2hsSUhabGNuTnBiMjRnYjJZZ2RHaHBjeUJzYVdKeVlYSjVMbHh1WEc1Y2JpQWdJQ0JJYW5OdmJpNWtjMlpjYmx4dUlDQWdJQ0FnUkc5dFlXbHVJSE53WldOcFptbGpJR1p2Y20xaGRITWdZWEpsSUdWNGRHVnVjMmx2Ym5NZ2RHOGdkR2hsSUVocWMyOXVJSE41Ym5SaGVDQW9jMlZsWEc0Z0lDQWdJQ0JvYW5OdmJpNXZjbWNwTGlCVWFHVnpaU0JtYjNKdFlYUnpJSGRwYkd3Z1ltVWdjR0Z5YzJWa0lHRnVaQ0J0WVdSbElHRjJZV2xzWVdKc1pTQjBiMXh1SUNBZ0lDQWdkR2hsSUdGd2NHeHBZMkYwYVc5dUlHbHVJSEJzWVdObElHOW1JSE4wY21sdVozTWdLR1V1Wnk0Z1pXNWhZbXhsSUcxaGRHZ2dkRzhnWVd4c2IzZGNiaUFnSUNBZ0lFNWhUaUIyWVd4MVpYTXBMbHh1WEc0Z0lDQWdJQ0JJYW5OdmJpNWtjMllnYjI1MFlXbHVjeUJ6ZEdGdVpHRnlaQ0JFVTBaeklIUm9ZWFFnWTJGdUlHSmxJSEJoYzNObFpDQjBieUJ3WVhKelpWeHVJQ0FnSUNBZ1lXNWtJSE4wY21sdVoybG1lUzVjYmx4dVhHNGdJQ0FnU0dwemIyNHVaSE5tTG0xaGRHZ29LVnh1WEc0Z0lDQWdJQ0JGYm1GaWJHVnpJSE4xY0hCdmNuUWdabTl5SUVsdVppOXBibVlzSUMxSmJtWXZMV2x1Wml3Z1RtRnVMMjVoVGlCaGJtUWdMVEF1WEc0Z0lDQWdJQ0JYYVd4c0lHOTFkSEIxZENCaGN5QkpibVlzSUMxSmJtWXNJRTVoVGlCaGJtUWdMVEF1WEc1Y2JseHVJQ0FnSUVocWMyOXVMbVJ6Wmk1b1pYZ29iM0IwYVc5dWN5bGNibHh1SUNBZ0lDQWdVR0Z5YzJVZ2FHVjRZV1JsWTJsdFlXd2diblZ0WW1WeWN5QndjbVZtYVhobFpDQjNhWFJvSURCNExseHVJQ0FnSUNBZ2MyVjBJRzl3ZEdsdmJuTXViM1YwSUQwZ2RISjFaU0IwYnlCemRISnBibWRwWm5rZ1gyRnNiRjhnYVc1MFpXZGxjbk1nWVhNZ2FHVjRMbHh1WEc1Y2JpQWdJQ0JJYW5OdmJpNWtjMll1WkdGMFpTaHZjSFJwYjI1ektWeHVYRzRnSUNBZ0lDQnpkWEJ3YjNKMElFbFRUeUJrWVhSbGMxeHVYRzVjYmlBZ1ZHaHBjeUJwY3lCaElISmxabVZ5Wlc1alpTQnBiWEJzWlcxbGJuUmhkR2x2Ymk0Z1dXOTFJR0Z5WlNCbWNtVmxJSFJ2SUdOdmNIa3NJRzF2WkdsbWVTd2diM0pjYmlBZ2NtVmthWE4wY21saWRYUmxMbHh1WEc0cUwxeHVYRzR2S21wemJHbHVkQ0J1YjJSbE9pQjBjblZsSUNvdlhHNWNJblZ6WlNCemRISnBZM1JjSWp0Y2JseHVkbUZ5SUdOdmJXMXZiaUE5SUhKbGNYVnBjbVVvWENJdUwyaHFjMjl1TFdOdmJXMXZibHdpS1R0Y2JuWmhjaUIyWlhKemFXOXVJRDBnY21WeGRXbHlaU2hjSWk0dmFHcHpiMjR0ZG1WeWMybHZibHdpS1R0Y2JuWmhjaUJ3WVhKelpTQTlJSEpsY1hWcGNtVW9YQ0l1TDJocWMyOXVMWEJoY25ObFhDSXBPMXh1ZG1GeUlITjBjbWx1WjJsbWVTQTlJSEpsY1hWcGNtVW9YQ0l1TDJocWMyOXVMWE4wY21sdVoybG1lVndpS1R0Y2JuWmhjaUJqYjIxdFpXNTBjeUE5SUhKbGNYVnBjbVVvWENJdUwyaHFjMjl1TFdOdmJXMWxiblJ6WENJcE8xeHVkbUZ5SUdSelppQTlJSEpsY1hWcGNtVW9YQ0l1TDJocWMyOXVMV1J6Wmx3aUtUdGNibHh1Ylc5a2RXeGxMbVY0Y0c5eWRITTllMXh1WEc0Z0lIQmhjbk5sT2lCd1lYSnpaU3hjYmlBZ2MzUnlhVzVuYVdaNU9pQnpkSEpwYm1kcFpua3NYRzVjYmlBZ1pXNWtUMlpNYVc1bE9pQm1kVzVqZEdsdmJpZ3BJSHNnY21WMGRYSnVJR052YlcxdmJpNUZUMHc3SUgwc1hHNGdJSE5sZEVWdVpFOW1UR2x1WlRvZ1puVnVZM1JwYjI0b1pXOXNLU0I3WEc0Z0lDQWdhV1lnS0dWdmJDQTlQVDBnSjF4Y2JpY2dmSHdnWlc5c0lEMDlQU0FuWEZ4eVhGeHVKeWtnWTI5dGJXOXVMa1ZQVENBOUlHVnZiRHRjYmlBZ2ZTeGNibHh1SUNCMlpYSnphVzl1T2lCMlpYSnphVzl1TEZ4dVhHNGdJQzh2SUhKdmRXNWtJSFJ5YVhBZ2MyaHZjblJqZFhSY2JpQWdjblE2SUh0Y2JpQWdJQ0J3WVhKelpUb2dablZ1WTNScGIyNG9kR1Y0ZEN3Z2IzQjBhVzl1Y3lrZ2UxeHVJQ0FnSUNBZ0tHOXdkR2x2Ym5NOWIzQjBhVzl1YzN4OGUzMHBMbXRsWlhCWGMyTTlkSEoxWlR0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ3WVhKelpTaDBaWGgwTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0I5TEZ4dUlDQWdJSE4wY21sdVoybG1lVG9nWm5WdVkzUnBiMjRvZG1Gc2RXVXNJRzl3ZEdsdmJuTXBJSHRjYmlBZ0lDQWdJQ2h2Y0hScGIyNXpQVzl3ZEdsdmJuTjhmSHQ5S1M1clpXVndWM05qUFhSeWRXVTdYRzRnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuYVdaNUtIWmhiSFZsTENCdmNIUnBiMjV6S1R0Y2JpQWdJQ0I5TEZ4dUlDQjlMRnh1WEc0Z0lHTnZiVzFsYm5Sek9pQmpiMjF0Wlc1MGN5eGNibHh1SUNCa2MyWTZJR1J6Wmk1emRHUXNYRzVjYm4wN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOW9hbk52Ymk5c2FXSXZhR3B6YjI0dWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQTVYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENJdktpQklhbk52YmlCb2RIUndPaTh2YUdwemIyNHViM0puSUNvdlhHNHZLaUJxYzJ4cGJuUWdibTlrWlRvZ2RISjFaU0FxTDF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JuWmhjaUJ2Y3oxeVpYRjFhWEpsS0NkdmN5Y3BPeUF2THlCM2FXeHNJR0psSUh0OUlIZG9aVzRnZFhObFpDQnBiaUJoSUdKeWIzZHpaWEpjYmx4dVpuVnVZM1JwYjI0Z2RISjVVR0Z5YzJWT2RXMWlaWElvZEdWNGRDd2djM1J2Y0VGMFRtVjRkQ2tnZTF4dVhHNGdJQzh2SUhSeWVTQjBieUJ3WVhKelpTQmhJRzUxYldKbGNseHVYRzRnSUhaaGNpQnVkVzFpWlhJc0lITjBjbWx1WnlBOUlDY25MQ0JzWldGa2FXNW5XbVZ5YjNNZ1BTQXdMQ0IwWlhOMFRHVmhaR2x1WnlBOUlIUnlkV1U3WEc0Z0lIWmhjaUJoZENBOUlEQTdYRzRnSUhaaGNpQmphRHRjYmlBZ1puVnVZM1JwYjI0Z2JtVjRkQ2dwSUh0Y2JpQWdJQ0JqYUNBOUlIUmxlSFF1WTJoaGNrRjBLR0YwS1R0Y2JpQWdJQ0JoZENzck8xeHVJQ0FnSUhKbGRIVnliaUJqYUR0Y2JpQWdmVnh1WEc0Z0lHNWxlSFFvS1R0Y2JpQWdhV1lnS0dOb0lEMDlQU0FuTFNjcElIdGNiaUFnSUNCemRISnBibWNnUFNBbkxTYzdYRzRnSUNBZ2JtVjRkQ2dwTzF4dUlDQjlYRzRnSUhkb2FXeGxJQ2hqYUNBK1BTQW5NQ2NnSmlZZ1kyZ2dQRDBnSnprbktTQjdYRzRnSUNBZ2FXWWdLSFJsYzNSTVpXRmthVzVuS1NCN1hHNGdJQ0FnSUNCcFppQW9ZMmdnUFQwZ0p6QW5LU0JzWldGa2FXNW5XbVZ5YjNNckt6dGNiaUFnSUNBZ0lHVnNjMlVnZEdWemRFeGxZV1JwYm1jZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0I5WEc0Z0lDQWdjM1J5YVc1bklDczlJR05vTzF4dUlDQWdJRzVsZUhRb0tUdGNiaUFnZlZ4dUlDQnBaaUFvZEdWemRFeGxZV1JwYm1jcElHeGxZV1JwYm1kYVpYSnZjeTB0T3lBdkx5QnphVzVuYkdVZ01DQnBjeUJoYkd4dmQyVmtYRzRnSUdsbUlDaGphQ0E5UFQwZ0p5NG5LU0I3WEc0Z0lDQWdjM1J5YVc1bklDczlJQ2N1Snp0Y2JpQWdJQ0IzYUdsc1pTQW9ibVY0ZENncElDWW1JR05vSUQ0OUlDY3dKeUFtSmlCamFDQThQU0FuT1NjcFhHNGdJQ0FnSUNCemRISnBibWNnS3owZ1kyZzdYRzRnSUgxY2JpQWdhV1lnS0dOb0lEMDlQU0FuWlNjZ2ZId2dZMmdnUFQwOUlDZEZKeWtnZTF4dUlDQWdJSE4wY21sdVp5QXJQU0JqYUR0Y2JpQWdJQ0J1WlhoMEtDazdYRzRnSUNBZ2FXWWdLR05vSUQwOVBTQW5MU2NnZkh3Z1kyZ2dQVDA5SUNjckp5a2dlMXh1SUNBZ0lDQWdjM1J5YVc1bklDczlJR05vTzF4dUlDQWdJQ0FnYm1WNGRDZ3BPMXh1SUNBZ0lIMWNiaUFnSUNCM2FHbHNaU0FvWTJnZ1BqMGdKekFuSUNZbUlHTm9JRHc5SUNjNUp5a2dlMXh1SUNBZ0lDQWdjM1J5YVc1bklDczlJR05vTzF4dUlDQWdJQ0FnYm1WNGRDZ3BPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJQzh2SUhOcmFYQWdkMmhwZEdVdmRHOGdLRzVsZDJ4cGJtVXBYRzRnSUhkb2FXeGxJQ2hqYUNBbUppQmphQ0E4UFNBbklDY3BJRzVsZUhRb0tUdGNibHh1SUNCcFppQW9jM1J2Y0VGMFRtVjRkQ2tnZTF4dUlDQWdJQzh2SUdWdVpDQnpZMkZ1SUdsbUlIZGxJR1pwYm1RZ1lTQndkVzVqZEhWaGRHOXlJR05vWVhKaFkzUmxjaUJzYVd0bElDeDlYU0J2Y2lCaElHTnZiVzFsYm5SY2JpQWdJQ0JwWmlBb1kyZ2dQVDA5SUNjc0p5QjhmQ0JqYUNBOVBUMGdKMzBuSUh4OElHTm9JRDA5UFNBblhTY2dmSHhjYmlBZ0lDQWdJR05vSUQwOVBTQW5JeWNnZkh3Z1kyZ2dQVDA5SUNjdkp5QW1KaUFvZEdWNGRGdGhkRjBnUFQwOUlDY3ZKeUI4ZkNCMFpYaDBXMkYwWFNBOVBUMGdKeW9uS1NrZ1kyZ2dQU0F3TzF4dUlDQjlYRzVjYmlBZ2JuVnRZbVZ5SUQwZ0szTjBjbWx1Wnp0Y2JpQWdhV1lnS0dOb0lIeDhJR3hsWVdScGJtZGFaWEp2Y3lCOGZDQWhhWE5HYVc1cGRHVW9iblZ0WW1WeUtTa2djbVYwZFhKdUlIVnVaR1ZtYVc1bFpEdGNiaUFnWld4elpTQnlaWFIxY200Z2JuVnRZbVZ5TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJqY21WaGRHVkRiMjF0Wlc1MEtIWmhiSFZsTENCamIyMXRaVzUwS1NCN1hHNGdJR2xtSUNoUFltcGxZM1F1WkdWbWFXNWxVSEp2Y0dWeWRIa3BJRTlpYW1WamRDNWtaV1pwYm1WUWNtOXdaWEowZVNoMllXeDFaU3dnWENKZlgwTlBUVTFGVGxSVFgxOWNJaXdnZXlCbGJuVnRaWEpoWW14bE9pQm1ZV3h6WlN3Z2QzSnBkR0ZpYkdVNklIUnlkV1VnZlNrN1hHNGdJSEpsZEhWeWJpQW9kbUZzZFdVdVgxOURUMDFOUlU1VVUxOWZJRDBnWTI5dGJXVnVkSHg4ZTMwcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCeVpXMXZkbVZEYjIxdFpXNTBLSFpoYkhWbEtTQjdYRzRnSUU5aWFtVmpkQzVrWldacGJtVlFjbTl3WlhKMGVTaDJZV3gxWlN3Z1hDSmZYME5QVFUxRlRsUlRYMTljSWl3Z2V5QjJZV3gxWlRvZ2RXNWtaV1pwYm1Wa0lIMHBPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm5aWFJEYjIxdFpXNTBLSFpoYkhWbEtTQjdYRzRnSUhKbGRIVnliaUIyWVd4MVpTNWZYME5QVFUxRlRsUlRYMTg3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1p2Y21ObFEyOXRiV1Z1ZENoMFpYaDBLU0I3WEc0Z0lHbG1JQ2doZEdWNGRDa2djbVYwZFhKdUlGd2lYQ0k3WEc0Z0lIWmhjaUJoSUQwZ2RHVjRkQzV6Y0d4cGRDZ25YRnh1SnlrN1hHNGdJSFpoY2lCemRISXNJR2tzSUdvc0lHeGxianRjYmlBZ1ptOXlJQ2hxSUQwZ01Ec2dhaUE4SUdFdWJHVnVaM1JvT3lCcUt5c3BJSHRjYmlBZ0lDQnpkSElnUFNCaFcycGRPMXh1SUNBZ0lHeGxiaUE5SUhOMGNpNXNaVzVuZEdnN1hHNGdJQ0FnWm05eUlDaHBJRDBnTURzZ2FTQThJR3hsYmpzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IyWVhJZ1l5QTlJSE4wY2x0cFhUdGNiaUFnSUNBZ0lHbG1JQ2hqSUQwOVBTQW5JeWNwSUdKeVpXRnJPMXh1SUNBZ0lDQWdaV3h6WlNCcFppQW9ZeUE5UFQwZ0p5OG5JQ1ltSUNoemRISmJhU3N4WFNBOVBUMGdKeThuSUh4OElITjBjbHRwS3pGZElEMDlQU0FuS2ljcEtTQjdYRzRnSUNBZ0lDQWdJR2xtSUNoemRISmJhU3N4WFNBOVBUMGdKeW9uS1NCcUlEMGdZUzVzWlc1bmRHZzdJQzh2SUdGemMzVnRaU0F2S2lvdklHTnZkbVZ5Y3lCM2FHOXNaU0JpYkc5amF5d2dZbUZwYkNCdmRYUmNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCbGJITmxJR2xtSUNoaklENGdKeUFuS1NCN1hHNGdJQ0FnSUNBZ0lHRmJhbDBnUFNBbkl5QW5JQ3NnYzNSeU8xeHVJQ0FnSUNBZ0lDQmljbVZoYXp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNiaUFnY21WMGRYSnVJR0V1YW05cGJpZ25YRnh1SnlrN1hHNTlYRzVjYm0xdlpIVnNaUzVsZUhCdmNuUnpJRDBnZTF4dUlDQkZUMHc2SUc5ekxrVlBUQ0I4ZkNBblhGeHVKeXhjYmlBZ2RISjVVR0Z5YzJWT2RXMWlaWEk2SUhSeWVWQmhjbk5sVG5WdFltVnlMRnh1SUNCamNtVmhkR1ZEYjIxdFpXNTBPaUJqY21WaGRHVkRiMjF0Wlc1MExGeHVJQ0J5WlcxdmRtVkRiMjF0Wlc1ME9pQnlaVzF2ZG1WRGIyMXRaVzUwTEZ4dUlDQm5aWFJEYjIxdFpXNTBPaUJuWlhSRGIyMXRaVzUwTEZ4dUlDQm1iM0pqWlVOdmJXMWxiblE2SUdadmNtTmxRMjl0YldWdWRDeGNibjA3WEc1Y2JseHVYRzR2S2lvcUtpb3FLaW9xS2lvcUtpb3FLaXBjYmlBcUtpQlhSVUpRUVVOTElFWlBUMVJGVWx4dUlDb3FJQzR2Zmk5b2FuTnZiaTlzYVdJdmFHcHpiMjR0WTI5dGJXOXVMbXB6WEc0Z0tpb2diVzlrZFd4bElHbGtJRDBnTVRCY2JpQXFLaUJ0YjJSMWJHVWdZMmgxYm10eklEMGdNRnh1SUNvcUx5SXNJbVY0Y0c5eWRITXVaVzVrYVdGdWJtVnpjeUE5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlDZE1SU2NnZlR0Y2JseHVaWGh3YjNKMGN5NW9iM04wYm1GdFpTQTlJR1oxYm1OMGFXOXVJQ2dwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUd4dlkyRjBhVzl1SUNFOVBTQW5kVzVrWldacGJtVmtKeWtnZTF4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnYkc5allYUnBiMjR1YUc5emRHNWhiV1ZjYmlBZ0lDQjlYRzRnSUNBZ1pXeHpaU0J5WlhSMWNtNGdKeWM3WEc1OU8xeHVYRzVsZUhCdmNuUnpMbXh2WVdSaGRtY2dQU0JtZFc1amRHbHZiaUFvS1NCN0lISmxkSFZ5YmlCYlhTQjlPMXh1WEc1bGVIQnZjblJ6TG5Wd2RHbHRaU0E5SUdaMWJtTjBhVzl1SUNncElIc2djbVYwZFhKdUlEQWdmVHRjYmx4dVpYaHdiM0owY3k1bWNtVmxiV1Z0SUQwZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCT2RXMWlaWEl1VFVGWVgxWkJURlZGTzF4dWZUdGNibHh1Wlhod2IzSjBjeTUwYjNSaGJHMWxiU0E5SUdaMWJtTjBhVzl1SUNncElIdGNiaUFnSUNCeVpYUjFjbTRnVG5WdFltVnlMazFCV0Y5V1FVeFZSVHRjYm4wN1hHNWNibVY0Y0c5eWRITXVZM0IxY3lBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJRnRkSUgwN1hHNWNibVY0Y0c5eWRITXVkSGx3WlNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2RDY205M2MyVnlKeUI5TzF4dVhHNWxlSEJ2Y25SekxuSmxiR1ZoYzJVZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdhV1lnS0hSNWNHVnZaaUJ1WVhacFoyRjBiM0lnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0FnSUhKbGRIVnliaUJ1WVhacFoyRjBiM0l1WVhCd1ZtVnljMmx2Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlDY25PMXh1ZlR0Y2JseHVaWGh3YjNKMGN5NXVaWFIzYjNKclNXNTBaWEptWVdObGMxeHVQU0JsZUhCdmNuUnpMbWRsZEU1bGRIZHZjbXRKYm5SbGNtWmhZMlZ6WEc0OUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJSHQ5SUgwN1hHNWNibVY0Y0c5eWRITXVZWEpqYUNBOUlHWjFibU4wYVc5dUlDZ3BJSHNnY21WMGRYSnVJQ2RxWVhaaGMyTnlhWEIwSnlCOU8xeHVYRzVsZUhCdmNuUnpMbkJzWVhSbWIzSnRJRDBnWm5WdVkzUnBiMjRnS0NrZ2V5QnlaWFIxY200Z0oySnliM2R6WlhJbklIMDdYRzVjYm1WNGNHOXlkSE11ZEcxd1pHbHlJRDBnWlhod2IzSjBjeTUwYlhCRWFYSWdQU0JtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnY21WMGRYSnVJQ2N2ZEcxd0p6dGNibjA3WEc1Y2JtVjRjRzl5ZEhNdVJVOU1JRDBnSjF4Y2JpYzdYRzVjYmx4dVhHNHZLaW9xS2lvcUtpb3FLaW9xS2lvcUtpcGNiaUFxS2lCWFJVSlFRVU5MSUVaUFQxUkZVbHh1SUNvcUlDNHZmaTl2Y3kxaWNtOTNjMlZ5YVdaNUwySnliM2R6WlhJdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXhNVnh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWl3aWJXOWtkV3hsTG1WNGNHOXlkSE05WENJeUxqTXVNVndpTzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmFHcHpiMjR2YkdsaUwyaHFjMjl1TFhabGNuTnBiMjR1YW5OY2JpQXFLaUJ0YjJSMWJHVWdhV1FnUFNBeE1seHVJQ29xSUcxdlpIVnNaU0JqYUhWdWEzTWdQU0F3WEc0Z0tpb3ZJaXdpTHlvZ1NHcHpiMjRnYUhSMGNEb3ZMMmhxYzI5dUxtOXlaeUFxTDF4dUx5b2dhbk5zYVc1MElHNXZaR1U2SUhSeWRXVWdLaTljYmx3aWRYTmxJSE4wY21samRGd2lPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUdaMWJtTjBhVzl1S0NSemIzVnlZMlVzSUNSdmNIUXBJSHRjYmx4dUlDQjJZWElnWTI5dGJXOXVJRDBnY21WeGRXbHlaU2hjSWk0dmFHcHpiMjR0WTI5dGJXOXVYQ0lwTzF4dUlDQjJZWElnWkhObUlEMGdjbVZ4ZFdseVpTaGNJaTR2YUdwemIyNHRaSE5tWENJcE8xeHVYRzRnSUhaaGNpQjBaWGgwTzF4dUlDQjJZWElnWVhRN0lDQWdMeThnVkdobElHbHVaR1Y0SUc5bUlIUm9aU0JqZFhKeVpXNTBJR05vWVhKaFkzUmxjbHh1SUNCMllYSWdZMmc3SUNBZ0x5OGdWR2hsSUdOMWNuSmxiblFnWTJoaGNtRmpkR1Z5WEc0Z0lIWmhjaUJsYzJOaGNHVmxJRDBnZTF4dUlDQWdJQ2RjSWljNklDZGNJaWNzWEc0Z0lDQWdKMXhjWEZ3bk9pQW5YRnhjWENjc1hHNGdJQ0FnSnk4bk9pQW5MeWNzWEc0Z0lDQWdZam9nSUNkY1hHSW5MRnh1SUNBZ0lHWTZJQ0FuWEZ4bUp5eGNiaUFnSUNCdU9pQWdKMXhjYmljc1hHNGdJQ0FnY2pvZ0lDZGNYSEluTEZ4dUlDQWdJSFE2SUNBblhGeDBKMXh1SUNCOU8xeHVYRzRnSUhaaGNpQnJaV1Z3UTI5dGJXVnVkSE03WEc0Z0lIWmhjaUJ5ZFc1RWMyWTdJQzh2SUdSdmJXRnBiaUJ6Y0dWamFXWnBZeUJtYjNKdFlYUnpYRzVjYmlBZ1puVnVZM1JwYjI0Z2NtVnpaWFJCZENncElIdGNiaUFnSUNCaGRDQTlJREE3WEc0Z0lDQWdZMmdnUFNBbklDYzdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJwYzFCMWJtTjBkV0YwYjNKRGFHRnlLR01wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZeUE5UFQwZ0ozc25JSHg4SUdNZ1BUMDlJQ2Q5SnlCOGZDQmpJRDA5UFNBbld5Y2dmSHdnWXlBOVBUMGdKMTBuSUh4OElHTWdQVDA5SUNjc0p5QjhmQ0JqSUQwOVBTQW5PaWM3WEc0Z0lIMWNibHh1SUNBdkx5QkRZV3hzSUdWeWNtOXlJSGRvWlc0Z2MyOXRaWFJvYVc1bklHbHpJSGR5YjI1bkxseHVJQ0JtZFc1amRHbHZiaUJsY25KdmNpaHRLU0I3WEc0Z0lDQWdkbUZ5SUdrc0lHTnZiRDB3TENCc2FXNWxQVEU3WEc0Z0lDQWdabTl5SUNocElEMGdZWFF0TVRzZ2FTQStJREFnSmlZZ2RHVjRkRnRwWFNBaFBUMGdKMXhjYmljN0lHa3RMU3dnWTI5c0t5c3BJSHQ5WEc0Z0lDQWdabTl5SUNnN0lHa2dQaUF3T3lCcExTMHBJR2xtSUNoMFpYaDBXMmxkSUQwOVBTQW5YRnh1SnlrZ2JHbHVaU3NyTzF4dUlDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpaHRJQ3NnWENJZ1lYUWdiR2x1WlNCY0lpQXJJR3hwYm1VZ0t5QmNJaXhjSWlBcklHTnZiQ0FySUZ3aUlENCtQbHdpSUNzZ2RHVjRkQzV6ZFdKemRISW9ZWFF0WTI5c0xDQXlNQ2tnS3lCY0lpQXVMaTVjSWlrN1hHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnVaWGgwS0NrZ2UxeHVJQ0FnSUM4dklHZGxkQ0IwYUdVZ2JtVjRkQ0JqYUdGeVlXTjBaWEl1WEc0Z0lDQWdZMmdnUFNCMFpYaDBMbU5vWVhKQmRDaGhkQ2s3WEc0Z0lDQWdZWFFyS3p0Y2JpQWdJQ0J5WlhSMWNtNGdZMmc3WEc0Z0lIMWNibHh1SUNCbWRXNWpkR2x2YmlCd1pXVnJLRzltWm5NcElIdGNiaUFnSUNBdkx5QnlZVzVuWlNCamFHVmpheUJwY3lCdWIzUWdjbVZ4ZFdseVpXUmNiaUFnSUNCeVpYUjFjbTRnZEdWNGRDNWphR0Z5UVhRb1lYUWdLeUJ2Wm1aektUdGNiaUFnZlZ4dVhHNGdJR1oxYm1OMGFXOXVJSE4wY21sdVp5Z3BJSHRjYmlBZ0lDQXZMeUJRWVhKelpTQmhJSE4wY21sdVp5QjJZV3gxWlM1Y2JpQWdJQ0IyWVhJZ2MzUnlhVzVuSUQwZ0p5YzdYRzVjYmlBZ0lDQXZMeUJYYUdWdUlIQmhjbk5wYm1jZ1ptOXlJSE4wY21sdVp5QjJZV3gxWlhNc0lIZGxJRzExYzNRZ2JHOXZheUJtYjNJZ1hDSWdZVzVrSUZ4Y0lHTm9ZWEpoWTNSbGNuTXVYRzRnSUNBZ2FXWWdLR05vSUQwOVBTQW5YQ0luS1NCN1hHNGdJQ0FnSUNCM2FHbHNaU0FvYm1WNGRDZ3BLU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaGphQ0E5UFQwZ0oxd2lKeWtnZTF4dUlDQWdJQ0FnSUNBZ0lHNWxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYUNBOVBUMGdKMXhjWEZ3bktTQjdYRzRnSUNBZ0lDQWdJQ0FnYm1WNGRDZ3BPMXh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGphQ0E5UFQwZ0ozVW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnZFdabVptWWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lDQWdabTl5SUNoMllYSWdhU0E5SURBN0lHa2dQQ0EwT3lCcEt5c3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdibVY0ZENncE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdZeUE5SUdOb0xtTm9ZWEpEYjJSbFFYUW9NQ2tzSUdobGVEdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05vSUQ0OUlDY3dKeUFtSmlCamFDQThQU0FuT1NjcElHaGxlQ0E5SUdNZ0xTQTBPRHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCcFppQW9ZMmdnUGowZ0oyRW5JQ1ltSUdOb0lEdzlJQ2RtSnlrZ2FHVjRJRDBnWXlBdElEazNJQ3NnTUhoaE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJR2xtSUNoamFDQStQU0FuUVNjZ0ppWWdZMmdnUEQwZ0owWW5LU0JvWlhnZ1BTQmpJQzBnTmpVZ0t5QXdlR0U3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR1ZzYzJVZ1pYSnliM0lvWENKQ1lXUWdYRnhjWEhVZ1kyaGhjaUJjSWlBcklHTm9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdkV1ptWm1ZZ1BTQjFabVptWmlBcUlERTJJQ3NnYUdWNE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNBZ0lDQWdjM1J5YVc1bklDczlJRk4wY21sdVp5NW1jbTl0UTJoaGNrTnZaR1VvZFdabVptWXBPMXh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RIbHdaVzltSUdWelkyRndaV1ZiWTJoZElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjM1J5YVc1bklDczlJR1Z6WTJGd1pXVmJZMmhkTzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCaWNtVmhhenRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNCemRISnBibWNnS3owZ1kyZzdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUNBZ1pYSnliM0lvWENKQ1lXUWdjM1J5YVc1blhDSXBPMXh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYld4VGRISnBibWNvS1NCN1hHNGdJQ0FnTHk4Z1VHRnljMlVnWVNCdGRXeDBhV3hwYm1VZ2MzUnlhVzVuSUhaaGJIVmxMbHh1SUNBZ0lIWmhjaUJ6ZEhKcGJtY2dQU0FuSnl3Z2RISnBjR3hsSUQwZ01EdGNibHh1SUNBZ0lDOHZJSGRsSUdGeVpTQmhkQ0FuSnljZ0t6RWdMU0JuWlhRZ2FXNWtaVzUwWEc0Z0lDQWdkbUZ5SUdsdVpHVnVkQ0E5SURBN1hHNGdJQ0FnZDJocGJHVWdLSFJ5ZFdVcElIdGNiaUFnSUNBZ0lIWmhjaUJqUFhCbFpXc29MV2x1WkdWdWRDMDFLVHRjYmlBZ0lDQWdJR2xtSUNnaFl5QjhmQ0JqSUQwOVBTQW5YRnh1SnlrZ1luSmxZV3M3WEc0Z0lDQWdJQ0JwYm1SbGJuUXJLenRjYmlBZ0lDQjlYRzVjYmlBZ0lDQm1kVzVqZEdsdmJpQnphMmx3U1c1a1pXNTBLQ2tnZTF4dUlDQWdJQ0FnZG1GeUlITnJhWEFnUFNCcGJtUmxiblE3WEc0Z0lDQWdJQ0IzYUdsc1pTQW9ZMmdnSmlZZ1kyZ2dQRDBnSnlBbklDWW1JR05vSUNFOVBTQW5YRnh1SnlBbUppQnphMmx3TFMwZ1BpQXdLU0J1WlhoMEtDazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdjMnRwY0NCM2FHbDBaUzkwYnlBb2JtVjNiR2x1WlNsY2JpQWdJQ0IzYUdsc1pTQW9ZMmdnSmlZZ1kyZ2dQRDBnSnlBbklDWW1JR05vSUNFOVBTQW5YRnh1SnlrZ2JtVjRkQ2dwTzF4dUlDQWdJR2xtSUNoamFDQTlQVDBnSjF4Y2JpY3BJSHNnYm1WNGRDZ3BPeUJ6YTJsd1NXNWtaVzUwS0NrN0lIMWNibHh1SUNBZ0lDOHZJRmRvWlc0Z2NHRnljMmx1WnlCdGRXeDBhV3hwYm1VZ2MzUnlhVzVuSUhaaGJIVmxjeXdnZDJVZ2JYVnpkQ0JzYjI5cklHWnZjaUFuSUdOb1lYSmhZM1JsY25NdVhHNGdJQ0FnZDJocGJHVWdLSFJ5ZFdVcElIdGNiaUFnSUNBZ0lHbG1JQ2doWTJncElIdGNiaUFnSUNBZ0lDQWdaWEp5YjNJb1hDSkNZV1FnYlhWc2RHbHNhVzVsSUhOMGNtbHVaMXdpS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1kyZ2dQVDA5SUNkY1hDY25LU0I3WEc0Z0lDQWdJQ0FnSUhSeWFYQnNaU3NyTzF4dUlDQWdJQ0FnSUNCdVpYaDBLQ2s3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBjbWx3YkdVZ1BUMDlJRE1wSUh0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvYzNSeWFXNW5Mbk5zYVdObEtDMHhLU0E5UFQwZ0oxeGNiaWNwSUhOMGNtbHVaejF6ZEhKcGJtY3VjMnhwWTJVb01Dd2dMVEVwT3lBdkx5QnlaVzF2ZG1VZ2JHRnpkQ0JGVDB4Y2JpQWdJQ0FnSUNBZ0lDQnlaWFIxY200Z2MzUnlhVzVuTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnWTI5dWRHbHVkV1U3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0IzYUdsc1pTQW9kSEpwY0d4bElENGdNQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lITjBjbWx1WnlBclBTQW5YRnduSnp0Y2JpQWdJQ0FnSUNBZ0lDQjBjbWx3YkdVdExUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0dOb0lEMDlQU0FuWEZ4dUp5a2dlMXh1SUNBZ0lDQWdJQ0J6ZEhKcGJtY2dLejBnSjF4Y2JpYzdYRzRnSUNBZ0lDQWdJRzVsZUhRb0tUdGNiaUFnSUNBZ0lDQWdjMnRwY0VsdVpHVnVkQ2dwTzF4dUlDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTm9JQ0U5UFNBblhGeHlKeWtnYzNSeWFXNW5JQ3M5SUdOb08xeHVJQ0FnSUNBZ0lDQnVaWGgwS0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2EyVjVibUZ0WlNncElIdGNiaUFnSUNBdkx5QnhkVzkwWlhNZ1ptOXlJR3RsZVhNZ1lYSmxJRzl3ZEdsdmJtRnNJR2x1SUVocWMyOXVYRzRnSUNBZ0x5OGdkVzVzWlhOeklIUm9aWGtnYVc1amJIVmtaU0I3ZlZ0ZExEb2diM0lnZDJocGRHVnpjR0ZqWlM1Y2JseHVJQ0FnSUdsbUlDaGphQ0E5UFQwZ0oxd2lKeWtnY21WMGRYSnVJSE4wY21sdVp5Z3BPMXh1WEc0Z0lDQWdkbUZ5SUc1aGJXVWdQU0JjSWx3aUxDQnpkR0Z5ZENBOUlHRjBMQ0J6Y0dGalpTQTlJQzB4TzF4dUlDQWdJSGRvYVd4bElDaDBjblZsS1NCN1hHNGdJQ0FnSUNCcFppQW9ZMmdnUFQwOUlDYzZKeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9JVzVoYldVcElHVnljbTl5S0Z3aVJtOTFibVFnSnpvbklHSjFkQ0J1YnlCclpYa2dibUZ0WlNBb1ptOXlJR0Z1SUdWdGNIUjVJR3RsZVNCdVlXMWxJSFZ6WlNCeGRXOTBaWE1wWENJcE8xeHVJQ0FnSUNBZ0lDQmxiSE5sSUdsbUlDaHpjR0ZqWlNBK1BUQWdKaVlnYzNCaFkyVWdJVDA5SUc1aGJXVXViR1Z1WjNSb0tTQjdJR0YwSUQwZ2MzUmhjblFnS3lCemNHRmpaVHNnWlhKeWIzSW9YQ0pHYjNWdVpDQjNhR2wwWlhOd1lXTmxJR2x1SUhsdmRYSWdhMlY1SUc1aGJXVWdLSFZ6WlNCeGRXOTBaWE1nZEc4Z2FXNWpiSFZrWlNsY0lpazdJSDFjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzVoYldVN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHTm9JRHc5SUNjZ0p5a2dlMXh1SUNBZ0lDQWdJQ0JwWmlBb0lXTm9LU0JsY25KdmNpaGNJa1p2ZFc1a0lFVlBSaUIzYUdsc1pTQnNiMjlyYVc1bklHWnZjaUJoSUd0bGVTQnVZVzFsSUNoamFHVmpheUI1YjNWeUlITjViblJoZUNsY0lpazdYRzRnSUNBZ0lDQWdJR1ZzYzJVZ2FXWWdLSE53WVdObElEd2dNQ2tnYzNCaFkyVWdQU0J1WVcxbExteGxibWQwYUR0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FYTlFkVzVqZEhWaGRHOXlRMmhoY2loamFDa3BJSHRjYmlBZ0lDQWdJQ0FnWlhKeWIzSW9YQ0pHYjNWdVpDQW5YQ0lnS3lCamFDQXJJRndpSnlCM2FHVnlaU0JoSUd0bGVTQnVZVzFsSUhkaGN5QmxlSEJsWTNSbFpDQW9ZMmhsWTJzZ2VXOTFjaUJ6ZVc1MFlYZ2diM0lnZFhObElIRjFiM1JsY3lCcFppQjBhR1VnYTJWNUlHNWhiV1VnYVc1amJIVmtaWE1nZTMxYlhTdzZJRzl5SUhkb2FYUmxjM0JoWTJVcFhDSXBPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdibUZ0WlNBclBTQmphRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJRzVsZUhRb0tUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQjNhR2wwWlNncElIdGNiaUFnSUNCM2FHbHNaU0FvWTJncElIdGNiaUFnSUNBZ0lDOHZJRk5yYVhBZ2QyaHBkR1Z6Y0dGalpTNWNiaUFnSUNBZ0lIZG9hV3hsSUNoamFDQW1KaUJqYUNBOFBTQW5JQ2NwSUc1bGVIUW9LVHRjYmlBZ0lDQWdJQzh2SUVocWMyOXVJR0ZzYkc5M2N5QmpiMjF0Wlc1MGMxeHVJQ0FnSUNBZ2FXWWdLR05vSUQwOVBTQW5JeWNnZkh3Z1kyZ2dQVDA5SUNjdkp5QW1KaUJ3WldWcktEQXBJRDA5UFNBbkx5Y3BJSHRjYmlBZ0lDQWdJQ0FnZDJocGJHVWdLR05vSUNZbUlHTm9JQ0U5UFNBblhGeHVKeWtnYm1WNGRDZ3BPMXh1SUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hqYUNBOVBUMGdKeThuSUNZbUlIQmxaV3NvTUNrZ1BUMDlJQ2NxSnlrZ2UxeHVJQ0FnSUNBZ0lDQnVaWGgwS0NrN0lHNWxlSFFvS1R0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0dOb0lDWW1JQ0VvWTJnZ1BUMDlJQ2NxSnlBbUppQndaV1ZyS0RBcElEMDlQU0FuTHljcEtTQnVaWGgwS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYUNrZ2V5QnVaWGgwS0NrN0lHNWxlSFFvS1RzZ2ZWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdKeVpXRnJPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR1oxYm1OMGFXOXVJSFJtYm01ektDa2dlMXh1SUNBZ0lDOHZJRWhxYzI5dUlITjBjbWx1WjNNZ1kyRnVJR0psSUhGMWIzUmxiR1Z6YzF4dUlDQWdJQzh2SUhKbGRIVnlibk1nYzNSeWFXNW5MQ0IwY25WbExDQm1ZV3h6WlN3Z2IzSWdiblZzYkM1Y2JpQWdJQ0IyWVhJZ2RtRnNkV1VnUFNCamFEdGNiaUFnSUNCcFppQW9hWE5RZFc1amRIVmhkRzl5UTJoaGNpaGphQ2twWEc0Z0lDQWdJQ0JsY25KdmNpaGNJa1p2ZFc1a0lHRWdjSFZ1WTNSMVlYUnZjaUJqYUdGeVlXTjBaWElnSjF3aUlDc2dZMmdnS3lCY0lpY2dkMmhsYmlCbGVIQmxZM1JwYm1jZ1lTQnhkVzkwWld4bGMzTWdjM1J5YVc1bklDaGphR1ZqYXlCNWIzVnlJSE41Ym5SaGVDbGNJaWs3WEc1Y2JpQWdJQ0JtYjNJb096c3BJSHRjYmlBZ0lDQWdJRzVsZUhRb0tUdGNiaUFnSUNBZ0lHbG1JQ2gyWVd4MVpTNXNaVzVuZEdnZ1BUMDlJRE1nSmlZZ2RtRnNkV1VnUFQwOUlGd2lKeWNuWENJcElISmxkSFZ5YmlCdGJGTjBjbWx1WnlncE8xeHVJQ0FnSUNBZ2RtRnlJR2x6Ulc5c0lEMGdZMmdnUFQwOUlDZGNYSEluSUh4OElHTm9JRDA5UFNBblhGeHVKeUI4ZkNCamFDQTlQVDBnSnljN1hHNGdJQ0FnSUNCcFppQW9hWE5GYjJ3Z2ZIeGNiaUFnSUNBZ0lDQWdZMmdnUFQwOUlDY3NKeUI4ZkNCamFDQTlQVDBnSjMwbklIeDhJR05vSUQwOVBTQW5YU2NnZkh4Y2JpQWdJQ0FnSUNBZ1kyZ2dQVDA5SUNjakp5QjhmRnh1SUNBZ0lDQWdJQ0JqYUNBOVBUMGdKeThuSUNZbUlDaHdaV1ZyS0RBcElEMDlQU0FuTHljZ2ZId2djR1ZsYXlnd0tTQTlQVDBnSnlvbktWeHVJQ0FnSUNBZ0lDQXBJSHRjYmlBZ0lDQWdJQ0FnTHk4Z2RHaHBjeUIwWlhOMGN5Qm1iM0lnZEdobElHTmhjMlVnYjJZZ2UzUnlkV1Y4Wm1Gc2MyVjhiblZzYkh4dWRXMTlYRzRnSUNBZ0lDQWdJQzh2SUdadmJHeHZkMlZrSUdKNUlIc2dKeXduSUh3Z0ozMG5JSHdnSjEwbklId2dKeU1uSUh3Z0p5OHZKeUI4SUNjdktpY2dmVnh1SUNBZ0lDQWdJQ0F2THlCM2FHbGphQ0J1WldWa2N5QjBieUJpWlNCd1lYSnpaV1FnWVhNZ2RHaGxJSE53WldOcFptbGxaQ0IyWVd4MVpWeHVJQ0FnSUNBZ0lDQjJZWElnWTJobUlEMGdkbUZzZFdWYk1GMDdYRzRnSUNBZ0lDQWdJSE4zYVhSamFDQW9ZMmhtS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZMkZ6WlNBblppYzZJR2xtSUNoMllXeDFaUzUwY21sdEtDa2dQVDA5SUZ3aVptRnNjMlZjSWlrZ2NtVjBkWEp1SUdaaGJITmxPeUJpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElDZHVKem9nYVdZZ0tIWmhiSFZsTG5SeWFXMG9LU0E5UFQwZ1hDSnVkV3hzWENJcElISmxkSFZ5YmlCdWRXeHNPeUJpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0JqWVhObElDZDBKem9nYVdZZ0tIWmhiSFZsTG5SeWFXMG9LU0E5UFQwZ1hDSjBjblZsWENJcElISmxkSFZ5YmlCMGNuVmxPeUJpY21WaGF6dGNiaUFnSUNBZ0lDQWdJQ0JrWldaaGRXeDBPbHh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR05vWmlBOVBUMGdKeTBuSUh4OElHTm9aaUErUFNBbk1DY2dKaVlnWTJobUlEdzlJQ2M1SnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCMllYSWdiaUE5SUdOdmJXMXZiaTUwY25sUVlYSnpaVTUxYldKbGNpaDJZV3gxWlNrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0FnSUdsbUlDaHVJQ0U5UFNCMWJtUmxabWx1WldRcElISmxkSFZ5YmlCdU8xeHVJQ0FnSUNBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lHbG1JQ2hwYzBWdmJDa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklISmxiVzkyWlNCaGJua2dkMmhwZEdWemNHRmpaU0JoZENCMGFHVWdaVzVrSUNocFoyNXZjbVZrSUdsdUlIRjFiM1JsYkdWemN5QnpkSEpwYm1kektWeHVJQ0FnSUNBZ0lDQWdJSFpoYkhWbElEMGdkbUZzZFdVdWRISnBiU2dwTzF4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJrYzJaV1lXeDFaU0E5SUhKMWJrUnpaaWgyWVd4MVpTazdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJR1J6WmxaaGJIVmxJQ0U5UFNCMWJtUmxabWx1WldRZ1B5QmtjMlpXWVd4MVpTQTZJSFpoYkhWbE8xeHVJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQjJZV3gxWlNBclBTQmphRHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJuWlhSRGIyMXRaVzUwS0dOQmRDd2dabWx5YzNRcElIdGNiaUFnSUNCMllYSWdhVHRjYmlBZ0lDQmpRWFF0TFR0Y2JpQWdJQ0F2THlCeVpXMXZkbVVnZEhKaGFXeHBibWNnZDJocGRHVnpjR0ZqWlZ4dUlDQWdJQzh2SUdKMWRDQnZibXg1SUhWd0lIUnZJRVZQVEZ4dUlDQWdJR1p2Y2lBb2FTQTlJR0YwSUMwZ01qc2dhU0ErSUdOQmRDQW1KaUIwWlhoMFcybGRJRHc5SUNjZ0p5QW1KaUIwWlhoMFcybGRJQ0U5UFNBblhGeHVKenNnYVMwdEtUdGNiaUFnSUNCcFppQW9kR1Y0ZEZ0cFhTQTlQVDBnSjF4Y2JpY3BJR2t0TFR0Y2JpQWdJQ0JwWmlBb2RHVjRkRnRwWFNBOVBUMGdKMXhjY2ljcElHa3RMVHRjYmlBZ0lDQjJZWElnY21WeklEMGdkR1Y0ZEM1emRXSnpkSElvWTBGMExDQnBMV05CZENzeEtUdGNiaUFnSUNBdkx5QnlaWFIxY200Z2FXWWdkMlVnWm1sdVpDQmhibmwwYUdsdVp5QnZkR2hsY2lCMGFHRnVJSGRvYVhSbGMzQmhZMlZjYmlBZ0lDQm1iM0lnS0drZ1BTQXdPeUJwSUR3Z2NtVnpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCcFppQW9jbVZ6VzJsZElENGdKeUFuS1NCN1hHNGdJQ0FnSUNBZ0lIWmhjaUJxSUQwZ2NtVnpMbWx1WkdWNFQyWW9KMXhjYmljcE8xeHVJQ0FnSUNBZ0lDQnBaaUFvYWlBK1BTQXdLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR01nUFNCYmNtVnpMbk4xWW5OMGNpZ3dMQ0JxS1N3Z2NtVnpMbk4xWW5OMGNpaHFLekVwWFR0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWm1seWMzUWdKaVlnWTFzd1hTNTBjbWx0S0NrdWJHVnVaM1JvSUQwOVBTQXdLU0JqTG5Ob2FXWjBLQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdNN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCeVpYUjFjbTRnVzNKbGMxMDdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0FnSUhKbGRIVnliaUJiWFR0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHVnljbTl5UTJ4dmMybHVaMGhwYm5Rb2RtRnNkV1VwSUh0Y2JpQWdJQ0JtZFc1amRHbHZiaUJ6WldGeVkyZ29kbUZzZFdVc0lHTm9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2FTd2dheXdnYkdWdVozUm9MQ0J5WlhNN1hHNGdJQ0FnSUNCemQybDBZMmdnS0hSNWNHVnZaaUIyWVd4MVpTa2dlMXh1SUNBZ0lDQWdJQ0JqWVhObElDZHpkSEpwYm1jbk9seHVJQ0FnSUNBZ0lDQWdJR2xtSUNoMllXeDFaUzVwYm1SbGVFOW1LR05vS1NBK1BTQXdLU0J5WlhNOWRtRnNkV1U3WEc0Z0lDQWdJQ0FnSUNBZ1luSmxZV3M3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMjlpYW1WamRDYzZYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVlYQndiSGtvZG1Gc2RXVXBJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JtYjNJZ0tHa2dQU0F3TENCc1pXNW5kR2dnUFNCMllXeDFaUzVzWlc1bmRHZzdJR2tnUENCc1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQnlaWE05YzJWaGNtTm9LSFpoYkhWbFcybGRMQ0JqYUNrZ2ZId2djbVZ6TzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQm1iM0lnS0dzZ2FXNGdkbUZzZFdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLQ0ZQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMbWhoYzA5M2JsQnliM0JsY25SNUxtTmhiR3dvZG1Gc2RXVXNJR3NwS1NCamIyNTBhVzUxWlR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnY21WelBYTmxZWEpqYUNoMllXeDFaVnRyWFN3Z1kyZ3BJSHg4SUhKbGN6dGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFIxY200Z2NtVnpPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHWjFibU4wYVc5dUlISmxjRzl5ZENoamFDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhCdmMzTnBZbXhsUlhKeVBYTmxZWEpqYUNoMllXeDFaU3dnWTJncE8xeHVJQ0FnSUNBZ2FXWWdLSEJ2YzNOcFlteGxSWEp5S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCY0ltWnZkVzVrSUNkY0lpdGphQ3RjSWljZ2FXNGdZU0J6ZEhKcGJtY2dkbUZzZFdVc0lIbHZkWElnYldsemRHRnJaU0JqYjNWc1pDQmlaU0IzYVhSb09seGNibHdpSzF4dUlDQWdJQ0FnSUNBZ0lGd2lJQ0ErSUZ3aUszQnZjM05wWW14bFJYSnlLMXdpWEZ4dVhDSXJYRzRnSUNBZ0lDQWdJQ0FnWENJZ0lDaDFibkYxYjNSbFpDQnpkSEpwYm1keklHTnZiblJoYVc0Z1pYWmxjbmwwYUdsdVp5QjFjQ0IwYnlCMGFHVWdibVY0ZENCc2FXNWxJU2xjSWp0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0J5WlhSMWNtNGdYQ0pjSWp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdjbVZ3YjNKMEtDZDlKeWtnZkh3Z2NtVndiM0owS0NkZEp5azdYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJoY25KaGVTZ3BJSHRjYmlBZ0lDQXZMeUJRWVhKelpTQmhiaUJoY25KaGVTQjJZV3gxWlM1Y2JpQWdJQ0F2THlCaGMzTjFiV2x1WnlCamFDQTlQVDBnSjFzblhHNWNiaUFnSUNCMllYSWdZWEp5WVhrZ1BTQmJYVHRjYmlBZ0lDQjJZWElnWTI5dGJXVnVkSE1zSUdOQmRDd2dibVY0ZEVOdmJXMWxiblE3WEc0Z0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUdsbUlDaHJaV1Z3UTI5dGJXVnVkSE1wSUdOdmJXMWxiblJ6SUQwZ1kyOXRiVzl1TG1OeVpXRjBaVU52YlcxbGJuUW9ZWEp5WVhrc0lIc2dZVG9nVzEwZ2ZTazdYRzVjYmlBZ0lDQWdJRzVsZUhRb0tUdGNiaUFnSUNBZ0lHTkJkQ0E5SUdGME8xeHVJQ0FnSUNBZ2QyaHBkR1VvS1R0Y2JpQWdJQ0FnSUdsbUlDaGpiMjF0Wlc1MGN5a2dibVY0ZEVOdmJXMWxiblFnUFNCblpYUkRiMjF0Wlc1MEtHTkJkQ3dnZEhKMVpTa3VhbTlwYmlnblhGeHVKeWs3WEc0Z0lDQWdJQ0JwWmlBb1kyZ2dQVDA5SUNkZEp5a2dlMXh1SUNBZ0lDQWdJQ0J1WlhoMEtDazdYRzRnSUNBZ0lDQWdJR2xtSUNoamIyMXRaVzUwY3lrZ1kyOXRiV1Z1ZEhNdVpTQTlJRnR1WlhoMFEyOXRiV1Z1ZEYwN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCaGNuSmhlVHNnSUM4dklHVnRjSFI1SUdGeWNtRjVYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJSGRvYVd4bElDaGphQ2tnZTF4dUlDQWdJQ0FnSUNCaGNuSmhlUzV3ZFhOb0tIWmhiSFZsS0NrcE8xeHVJQ0FnSUNBZ0lDQmpRWFFnUFNCaGREdGNiaUFnSUNBZ0lDQWdkMmhwZEdVb0tUdGNiaUFnSUNBZ0lDQWdMeThnYVc0Z1NHcHpiMjRnZEdobElHTnZiVzFoSUdseklHOXdkR2x2Ym1Gc0lHRnVaQ0IwY21GcGJHbHVaeUJqYjIxdFlYTWdZWEpsSUdGc2JHOTNaV1JjYmlBZ0lDQWdJQ0FnTHk4Z2JtOTBaU0IwYUdGMElIZGxJR1J2SUc1dmRDQnJaV1Z3SUdOdmJXMWxiblJ6SUdKbFptOXlaU0IwYUdVZ0xDQnBaaUIwYUdWeVpTQmhjbVVnWVc1NVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYUNBOVBUMGdKeXduS1NCN0lHNWxlSFFvS1RzZ1kwRjBJRDBnWVhRN0lIZG9hWFJsS0NrN0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJXMWxiblJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdNZ1BTQm5aWFJEYjIxdFpXNTBLR05CZENrN1hHNGdJQ0FnSUNBZ0lDQWdZMjl0YldWdWRITXVZUzV3ZFhOb0tGdHVaWGgwUTI5dGJXVnVkSHg4WENKY0lpd2dZMXN3WFh4OFhDSmNJbDBwTzF4dUlDQWdJQ0FnSUNBZ0lHNWxlSFJEYjIxdFpXNTBJRDBnWTFzeFhUdGNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0JwWmlBb1kyZ2dQVDA5SUNkZEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUc1bGVIUW9LVHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9ZMjl0YldWdWRITXBJR052YlcxbGJuUnpMbUZiWTI5dGJXVnVkSE11WVM1c1pXNW5kR2d0TVYxYk1WMGdLejBnYm1WNGRFTnZiVzFsYm5SOGZGd2lYQ0k3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdGeWNtRjVPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUhkb2FYUmxLQ2s3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUdWeWNtOXlLRndpUlc1a0lHOW1JR2x1Y0hWMElIZG9hV3hsSUhCaGNuTnBibWNnWVc0Z1lYSnlZWGtnS0cxcGMzTnBibWNnSjEwbktWd2lLVHRjYmlBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0JsTG1ocGJuUTlaUzVvYVc1MGZIeGxjbkp2Y2tOc2IzTnBibWRJYVc1MEtHRnljbUY1S1R0Y2JpQWdJQ0FnSUhSb2NtOTNJR1U3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYjJKcVpXTjBLSGRwZEdodmRYUkNjbUZqWlhNcElIdGNiaUFnSUNBdkx5QlFZWEp6WlNCaGJpQnZZbXBsWTNRZ2RtRnNkV1V1WEc1Y2JpQWdJQ0IyWVhJZ2EyVjVJRDBnWENKY0lpd2diMkpxWldOMElEMGdlMzA3WEc0Z0lDQWdkbUZ5SUdOdmJXMWxiblJ6TENCalFYUXNJRzVsZUhSRGIyMXRaVzUwTzF4dVhHNGdJQ0FnZEhKNUlIdGNiaUFnSUNBZ0lHbG1JQ2hyWldWd1EyOXRiV1Z1ZEhNcElHTnZiVzFsYm5SeklEMGdZMjl0Ylc5dUxtTnlaV0YwWlVOdmJXMWxiblFvYjJKcVpXTjBMQ0I3SUdNNklIdDlMQ0J2T2lCYlhTQWdmU2s3WEc1Y2JpQWdJQ0FnSUdsbUlDZ2hkMmwwYUc5MWRFSnlZV05sY3lrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJoYzNOMWJXbHVaeUJqYUNBOVBUMGdKM3NuWEc0Z0lDQWdJQ0FnSUc1bGVIUW9LVHRjYmlBZ0lDQWdJQ0FnWTBGMElEMGdZWFE3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdZMEYwSUQwZ01UdGNibHh1SUNBZ0lDQWdkMmhwZEdVb0tUdGNiaUFnSUNBZ0lHbG1JQ2hqYjIxdFpXNTBjeWtnYm1WNGRFTnZiVzFsYm5RZ1BTQm5aWFJEYjIxdFpXNTBLR05CZEN3Z2RISjFaU2t1YW05cGJpZ25YRnh1SnlrN1hHNGdJQ0FnSUNCcFppQW9ZMmdnUFQwOUlDZDlKeUFtSmlBaGQybDBhRzkxZEVKeVlXTmxjeWtnZTF4dUlDQWdJQ0FnSUNCcFppQW9ZMjl0YldWdWRITXBJR052YlcxbGJuUnpMbVVnUFNCYmJtVjRkRU52YlcxbGJuUmRPMXh1SUNBZ0lDQWdJQ0J1WlhoMEtDazdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnZZbXBsWTNRN0lDQXZMeUJsYlhCMGVTQnZZbXBsWTNSY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhkb2FXeGxJQ2hqYUNrZ2UxeHVJQ0FnSUNBZ0lDQnJaWGtnUFNCclpYbHVZVzFsS0NrN1hHNGdJQ0FnSUNBZ0lIZG9hWFJsS0NrN1hHNGdJQ0FnSUNBZ0lHbG1JQ2hqYUNBaFBUMGdKem9uS1NCbGNuSnZjaWhjSWtWNGNHVmpkR1ZrSUNjNkp5QnBibk4wWldGa0lHOW1JQ2RjSWlBcklHTm9JQ3NnWENJblhDSXBPMXh1SUNBZ0lDQWdJQ0J1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQzh2SUdSMWNHeHBZMkYwWlNCclpYbHpJRzkyWlhKM2NtbDBaU0IwYUdVZ2NISmxkbWx2ZFhNZ2RtRnNkV1ZjYmlBZ0lDQWdJQ0FnYjJKcVpXTjBXMnRsZVYwZ1BTQjJZV3gxWlNncE8xeHVJQ0FnSUNBZ0lDQmpRWFFnUFNCaGREdGNiaUFnSUNBZ0lDQWdkMmhwZEdVb0tUdGNiaUFnSUNBZ0lDQWdMeThnYVc0Z1NHcHpiMjRnZEdobElHTnZiVzFoSUdseklHOXdkR2x2Ym1Gc0lHRnVaQ0IwY21GcGJHbHVaeUJqYjIxdFlYTWdZWEpsSUdGc2JHOTNaV1JjYmlBZ0lDQWdJQ0FnTHk4Z2JtOTBaU0IwYUdGMElIZGxJR1J2SUc1dmRDQnJaV1Z3SUdOdmJXMWxiblJ6SUdKbFptOXlaU0IwYUdVZ0xDQnBaaUIwYUdWeVpTQmhjbVVnWVc1NVhHNGdJQ0FnSUNBZ0lHbG1JQ2hqYUNBOVBUMGdKeXduS1NCN0lHNWxlSFFvS1RzZ1kwRjBJRDBnWVhRN0lIZG9hWFJsS0NrN0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dOdmJXMWxiblJ6S1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUdNZ1BTQm5aWFJEYjIxdFpXNTBLR05CZENrN1hHNGdJQ0FnSUNBZ0lDQWdZMjl0YldWdWRITXVZMXRyWlhsZElEMGdXMjVsZUhSRGIyMXRaVzUwZkh4Y0lsd2lMQ0JqV3pCZGZIeGNJbHdpWFR0Y2JpQWdJQ0FnSUNBZ0lDQnVaWGgwUTI5dGJXVnVkQ0E5SUdOYk1WMDdYRzRnSUNBZ0lDQWdJQ0FnWTI5dGJXVnVkSE11Ynk1d2RYTm9LR3RsZVNrN1hHNGdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdhV1lnS0dOb0lEMDlQU0FuZlNjZ0ppWWdJWGRwZEdodmRYUkNjbUZqWlhNcElIdGNiaUFnSUNBZ0lDQWdJQ0J1WlhoMEtDazdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tHTnZiVzFsYm5SektTQmpiMjF0Wlc1MGN5NWpXMnRsZVYxYk1WMGdLejBnYm1WNGRFTnZiVzFsYm5SOGZGd2lYQ0k3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUc5aWFtVmpkRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnSUNCM2FHbDBaU2dwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCcFppQW9kMmwwYUc5MWRFSnlZV05sY3lrZ2NtVjBkWEp1SUc5aWFtVmpkRHRjYmlBZ0lDQWdJR1ZzYzJVZ1pYSnliM0lvWENKRmJtUWdiMllnYVc1d2RYUWdkMmhwYkdVZ2NHRnljMmx1WnlCaGJpQnZZbXBsWTNRZ0tHMXBjM05wYm1jZ0ozMG5LVndpS1R0Y2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNCbExtaHBiblE5WlM1b2FXNTBmSHhsY25KdmNrTnNiM05wYm1kSWFXNTBLRzlpYW1WamRDazdYRzRnSUNBZ0lDQjBhSEp2ZHlCbE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlIWmhiSFZsS0NrZ2UxeHVJQ0FnSUM4dklGQmhjbk5sSUdFZ1NHcHpiMjRnZG1Gc2RXVXVJRWwwSUdOdmRXeGtJR0psSUdGdUlHOWlhbVZqZEN3Z1lXNGdZWEp5WVhrc0lHRWdjM1J5YVc1bkxDQmhJRzUxYldKbGNpQnZjaUJoSUhkdmNtUXVYRzVjYmlBZ0lDQjNhR2wwWlNncE8xeHVJQ0FnSUhOM2FYUmphQ0FvWTJncElIdGNiaUFnSUNBZ0lHTmhjMlVnSjNzbk9pQnlaWFIxY200Z2IySnFaV04wS0NrN1hHNGdJQ0FnSUNCallYTmxJQ2RiSnpvZ2NtVjBkWEp1SUdGeWNtRjVLQ2s3WEc0Z0lDQWdJQ0JqWVhObElDZGNJaWM2SUhKbGRIVnliaUJ6ZEhKcGJtY29LVHRjYmlBZ0lDQWdJR1JsWm1GMWJIUTZJSEpsZEhWeWJpQjBabTV1Y3lncE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHTm9aV05yVkhKaGFXeHBibWNvZGl3Z1l5a2dlMXh1SUNBZ0lIWmhjaUJqUVhRZ1BTQmhkRHRjYmlBZ0lDQjNhR2wwWlNncE8xeHVJQ0FnSUdsbUlDaGphQ2tnWlhKeWIzSW9YQ0pUZVc1MFlYZ2daWEp5YjNJc0lHWnZkVzVrSUhSeVlXbHNhVzVuSUdOb1lYSmhZM1JsY25OY0lpazdYRzRnSUNBZ2FXWWdLR3RsWlhCRGIyMXRaVzUwY3lrZ2UxeHVJQ0FnSUNBZ2RtRnlJR0lnUFNCakxtcHZhVzRvSjF4Y2JpY3BMQ0JoSUQwZ1oyVjBRMjl0YldWdWRDaGpRWFFwTG1wdmFXNG9KMXhjYmljcE8xeHVJQ0FnSUNBZ2FXWWdLR0VnZkh3Z1lpa2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ1kyOXRiV1Z1ZEhNZ1BTQmpiMjF0YjI0dVkzSmxZWFJsUTI5dGJXVnVkQ2gyTENCamIyMXRiMjR1WjJWMFEyOXRiV1Z1ZENoMktTazdYRzRnSUNBZ0lDQWdJR052YlcxbGJuUnpMbklnUFNCYllpd2dZVjA3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmVnh1SUNBZ0lISmxkSFZ5YmlCMk8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdjbTl2ZEZaaGJIVmxLQ2tnZTF4dUlDQWdJQzh2SUVKeVlXTmxjeUJtYjNJZ2RHaGxJSEp2YjNRZ2IySnFaV04wSUdGeVpTQnZjSFJwYjI1aGJGeHVJQ0FnSUhkb2FYUmxLQ2s3WEc0Z0lDQWdkbUZ5SUdNZ1BTQnJaV1Z3UTI5dGJXVnVkSE1nUHlCblpYUkRiMjF0Wlc1MEtERXBJRG9nYm5Wc2JEdGNiaUFnSUNCemQybDBZMmdnS0dOb0tTQjdYRzRnSUNBZ0lDQmpZWE5sSUNkN0p6b2djbVYwZFhKdUlHTm9aV05yVkhKaGFXeHBibWNvYjJKcVpXTjBLQ2tzSUdNcE8xeHVJQ0FnSUNBZ1kyRnpaU0FuV3ljNklISmxkSFZ5YmlCamFHVmphMVJ5WVdsc2FXNW5LR0Z5Y21GNUtDa3NJR01wTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBdkx5QmhjM04xYldVZ2QyVWdhR0YyWlNCaElISnZiM1FnYjJKcVpXTjBJSGRwZEdodmRYUWdZbkpoWTJWelhHNGdJQ0FnSUNCeVpYUjFjbTRnWTJobFkydFVjbUZwYkdsdVp5aHZZbXBsWTNRb2RISjFaU2tzSUdNcE8xeHVJQ0FnSUgwZ1kyRjBZMmdnS0dVcElIdGNiaUFnSUNBZ0lDOHZJSFJsYzNRZ2FXWWdkMlVnWVhKbElHUmxZV3hwYm1jZ2QybDBhQ0JoSUhOcGJtZHNaU0JLVTA5T0lIWmhiSFZsSUdsdWMzUmxZV1FnS0hSeWRXVXZabUZzYzJVdmJuVnNiQzl1ZFcwdlhDSmNJaWxjYmlBZ0lDQWdJSEpsYzJWMFFYUW9LVHRjYmlBZ0lDQWdJSFJ5ZVNCN0lISmxkSFZ5YmlCamFHVmphMVJ5WVdsc2FXNW5LSFpoYkhWbEtDa3NJR01wT3lCOVhHNGdJQ0FnSUNCallYUmphQ0FvWlRJcElIc2dkR2h5YjNjZ1pUc2dmU0F2THlCMGFISnZkeUJ2Y21sbmFXNWhiQ0JsY25KdmNseHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlHaHFjMjl1VUdGeWMyVW9jMjkxY21ObExDQnZjSFFwSUh0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUhOdmRYSmpaU0U5UFZ3aWMzUnlhVzVuWENJcElIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0luTnZkWEpqWlNCcGN5QnViM1FnWVNCemRISnBibWRjSWlrN1hHNGdJQ0FnZG1GeUlHUnpaa1JsWmlBOUlHNTFiR3c3WEc0Z0lDQWdhV1lnS0c5d2RDQW1KaUIwZVhCbGIyWWdiM0IwSUQwOVBTQW5iMkpxWldOMEp5a2dlMXh1SUNBZ0lDQWdhMlZsY0VOdmJXMWxiblJ6SUQwZ2IzQjBMbXRsWlhCWGMyTTdYRzRnSUNBZ0lDQmtjMlpFWldZZ1BTQnZjSFF1WkhObU8xeHVJQ0FnSUgxY2JpQWdJQ0J5ZFc1RWMyWWdQU0JrYzJZdWJHOWhaRVJ6Wmloa2MyWkVaV1lzSUZ3aWNHRnljMlZjSWlrN1hHNGdJQ0FnZEdWNGRDQTlJSE52ZFhKalpUdGNiaUFnSUNCeVpYTmxkRUYwS0NrN1hHNGdJQ0FnY21WMGRYSnVJSEp2YjNSV1lXeDFaU2dwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUdocWMyOXVVR0Z5YzJVb0pITnZkWEpqWlN3Z0pHOXdkQ2s3WEc1OU8xeHVYRzVjYmx4dUx5b3FLaW9xS2lvcUtpb3FLaW9xS2lvcVhHNGdLaW9nVjBWQ1VFRkRTeUJHVDA5VVJWSmNiaUFxS2lBdUwzNHZhR3B6YjI0dmJHbGlMMmhxYzI5dUxYQmhjbk5sTG1welhHNGdLaW9nYlc5a2RXeGxJR2xrSUQwZ01UTmNiaUFxS2lCdGIyUjFiR1VnWTJoMWJtdHpJRDBnTUZ4dUlDb3FMeUlzSWk4cUlFaHFjMjl1SUdoMGRIQTZMeTlvYW5OdmJpNXZjbWNnS2k5Y2JpOHFJR3B6YkdsdWRDQnViMlJsT2lCMGNuVmxJQ292WEc1Y0luVnpaU0J6ZEhKcFkzUmNJanRjYmx4dWRtRnlJR052YlcxdmJpQTlJSEpsY1hWcGNtVW9YQ0l1TDJocWMyOXVMV052YlcxdmJsd2lLVHRjYmx4dVpuVnVZM1JwYjI0Z2JHOWhaRVJ6WmloamIyd3NJSFI1Y0dVcElIdGNibHh1SUNCcFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNTBiMU4wY21sdVp5NWhjSEJzZVNoamIyd3BJQ0U5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuS1NCN1hHNGdJQ0FnYVdZZ0tHTnZiQ2tnZEdoeWIzY2dibVYzSUVWeWNtOXlLRndpWkhObUlHOXdkR2x2YmlCdGRYTjBJR052Ym5SaGFXNGdZVzRnWVhKeVlYa2hYQ0lwTzF4dUlDQWdJR1ZzYzJVZ2NtVjBkWEp1SUc1dmNFUnpaanRjYmlBZ2ZTQmxiSE5sSUdsbUlDaGpiMnd1YkdWdVozUm9JRDA5UFNBd0tTQnlaWFIxY200Z2JtOXdSSE5tTzF4dVhHNGdJSFpoY2lCa2MyWWdQU0JiWFR0Y2JpQWdablZ1WTNScGIyNGdhWE5HZFc1amRHbHZiaWhtS1NCN0lISmxkSFZ5YmlCN2ZTNTBiMU4wY21sdVp5NWpZV3hzS0dZcElEMDlQU0FuVzI5aWFtVmpkQ0JHZFc1amRHbHZibDBuT3lCOVhHNWNiaUFnWTI5c0xtWnZja1ZoWTJnb1puVnVZM1JwYjI0b2VDa2dlMXh1SUNBZ0lHbG1JQ2doZUM1dVlXMWxJSHg4SUNGcGMwWjFibU4wYVc5dUtIZ3VjR0Z5YzJVcElIeDhJQ0ZwYzBaMWJtTjBhVzl1S0hndWMzUnlhVzVuYVdaNUtTbGNiaUFnSUNBZ0lIUm9jbTkzSUc1bGR5QkZjbkp2Y2loY0ltVjRkR1Z1YzJsdmJpQmtiMlZ6SUc1dmRDQnRZWFJqYUNCMGFHVWdSRk5HSUdsdWRHVnlabUZqWlZ3aUtUdGNiaUFnSUNCa2MyWXVjSFZ6YUNobWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsbUlDaDBlWEJsSUQwOUlGd2ljR0Z5YzJWY0lpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUI0TG5CaGNuTmxMbUZ3Y0d4NUtHNTFiR3dzSUdGeVozVnRaVzUwY3lrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9kSGx3WlNBOVBTQmNJbk4wY21sdVoybG1lVndpS1NCN1hHNGdJQ0FnSUNBZ0lDQWdkbUZ5SUhKbGN6MTRMbk4wY21sdVoybG1lUzVoY0hCc2VTaHVkV3hzTENCaGNtZDFiV1Z1ZEhNcE8xeHVJQ0FnSUNBZ0lDQWdJQzh2SUdOb1pXTnJJSEpsYzNWc2RGeHVJQ0FnSUNBZ0lDQWdJR2xtSUNoeVpYTWdJVDA5SUhWdVpHVm1hVzVsWkNBbUppQW9kSGx3Wlc5bUlISmxjeUFoUFQwZ1hDSnpkSEpwYm1kY0lpQjhmRnh1SUNBZ0lDQWdJQ0FnSUNBZ2NtVnpMbXhsYm1kMGFDQTlQVDBnTUNCOGZGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21Weld6QmRJRDA5UFNBblhDSW5JSHg4WEc0Z0lDQWdJQ0FnSUNBZ0lDQmJYUzV6YjIxbExtTmhiR3dvY21WekxDQm1kVzVqZEdsdmJpaGpLU0I3SUhKbGRIVnliaUJwYzBsdWRtRnNhV1JFYzJaRGFHRnlLR01wT3lCOUtTa3BYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvWENKMllXeDFaU0J0WVhrZ2JtOTBJR0psSUdWdGNIUjVMQ0J6ZEdGeWRDQjNhWFJvSUdFZ2NYVnZkR1VnYjNJZ1kyOXVkR0ZwYmlCaElIQjFibU4wZFdGMGIzSWdZMmhoY21GamRHVnlJR1Y0WTJWd2RDQmpiMnh2YmpvZ1hDSWdLeUJ5WlhNcE8xeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWE03WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pKYm5aaGJHbGtJSFI1Y0dWY0lpazdYRzRnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWhjSWtSVFJpMWNJaXQ0TG01aGJXVXJYQ0lnWm1GcGJHVmtPeUJjSWl0bExtMWxjM05oWjJVcE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgwcE8xeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdjblZ1UkhObUxtSnBibVFvYm5Wc2JDd2daSE5tS1R0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnY25WdVJITm1LR1J6Wml3Z2RtRnNkV1VwSUh0Y2JpQWdhV1lnS0dSelppa2dlMXh1SUNBZ0lHWnZjaUFvZG1GeUlHa2dQU0F3T3lCcElEd2daSE5tTG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQjJZWElnY21WeklEMGdaSE5tVzJsZEtIWmhiSFZsS1R0Y2JpQWdJQ0FnSUdsbUlDaHlaWE1nSVQwOUlIVnVaR1ZtYVc1bFpDa2djbVYwZFhKdUlISmxjenRjYmlBZ0lDQjlYRzRnSUgxY2JuMWNibHh1Wm5WdVkzUnBiMjRnYm05d1JITm1LSFpoYkhWbEtTQjdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHpTVzUyWVd4cFpFUnpaa05vWVhJb1l5a2dlMXh1SUNCeVpYUjFjbTRnWXlBOVBUMGdKM3NuSUh4OElHTWdQVDA5SUNkOUp5QjhmQ0JqSUQwOVBTQW5XeWNnZkh3Z1l5QTlQVDBnSjEwbklIeDhJR01nUFQwOUlDY3NKenRjYm4xY2JseHVYRzVtZFc1amRHbHZiaUJ0WVhSb0tHOXdkQ2tnZTF4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUc1aGJXVTZJRndpYldGMGFGd2lMRnh1SUNBZ0lIQmhjbk5sT2lCbWRXNWpkR2x2YmlBb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUhOM2FYUmphQ0FvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJQ0FnWTJGelpTQmNJaXRwYm1aY0lqcGNiaUFnSUNBZ0lDQWdZMkZ6WlNCY0ltbHVabHdpT2x4dUlDQWdJQ0FnSUNCallYTmxJRndpSzBsdVpsd2lPbHh1SUNBZ0lDQWdJQ0JqWVhObElGd2lTVzVtWENJNklISmxkSFZ5YmlCSmJtWnBibWwwZVR0Y2JpQWdJQ0FnSUNBZ1kyRnpaU0JjSWkxcGJtWmNJanBjYmlBZ0lDQWdJQ0FnWTJGelpTQmNJaTFKYm1aY0lqb2djbVYwZFhKdUlDMUpibVpwYm1sMGVUdGNiaUFnSUNBZ0lDQWdZMkZ6WlNCY0ltNWhibHdpT2x4dUlDQWdJQ0FnSUNCallYTmxJRndpVG1GT1hDSTZJSEpsZEhWeWJpQk9ZVTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdmU3hjYmlBZ0lDQnpkSEpwYm1kcFpuazZJR1oxYm1OMGFXOXVJQ2gyWVd4MVpTa2dlMXh1SUNBZ0lDQWdhV1lnS0hSNWNHVnZaaUIyWVd4MVpTQWhQVDBnSjI1MWJXSmxjaWNwSUhKbGRIVnlianRjYmlBZ0lDQWdJR2xtSUNneElDOGdkbUZzZFdVZ1BUMDlJQzFKYm1acGJtbDBlU2tnY21WMGRYSnVJRndpTFRCY0lqc2dMeThnTUNBOVBUMGdMVEJjYmlBZ0lDQWdJR2xtSUNoMllXeDFaU0E5UFQwZ1NXNW1hVzVwZEhrcElISmxkSFZ5YmlCY0lrbHVabHdpTzF4dUlDQWdJQ0FnYVdZZ0tIWmhiSFZsSUQwOVBTQXRTVzVtYVc1cGRIa3BJSEpsZEhWeWJpQmNJaTFKYm1aY0lqdGNiaUFnSUNBZ0lHbG1JQ2hwYzA1aFRpaDJZV3gxWlNrcElISmxkSFZ5YmlCY0lrNWhUbHdpTzF4dUlDQWdJSDBzWEc0Z0lIMDdYRzU5WEc1dFlYUm9MbVJsYzJOeWFYQjBhVzl1UFZ3aWMzVndjRzl5ZENCbWIzSWdTVzVtTDJsdVppd2dMVWx1Wmk4dGFXNW1MQ0JPWVc0dmJtRk9JR0Z1WkNBdE1Gd2lPMXh1WEc1bWRXNWpkR2x2YmlCb1pYZ29iM0IwS1NCN1hHNGdJSFpoY2lCdmRYUTliM0IwSUNZbUlHOXdkQzV2ZFhRN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2JtRnRaVG9nWENKb1pYaGNJaXhjYmlBZ0lDQndZWEp6WlRvZ1puVnVZM1JwYjI0Z0tIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCcFppQW9MMTR3ZUZzd0xUbEJMVVpoTFdaZEt5UXZMblJsYzNRb2RtRnNkV1VwS1Z4dUlDQWdJQ0FnSUNCeVpYUjFjbTRnY0dGeWMyVkpiblFvZG1Gc2RXVXNJREUyS1R0Y2JpQWdJQ0I5TEZ4dUlDQWdJSE4wY21sdVoybG1lVG9nWm5WdVkzUnBiMjRnS0haaGJIVmxLU0I3WEc0Z0lDQWdJQ0JwWmlBb2IzVjBJQ1ltSUU1MWJXSmxjaTVwYzBsdWRHVm5aWElvZG1Gc2RXVXBLVnh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdYQ0l3ZUZ3aUszWmhiSFZsTG5SdlUzUnlhVzVuS0RFMktUdGNiaUFnSUNCOUxGeHVJQ0I5TzF4dWZWeHVhR1Y0TG1SbGMyTnlhWEIwYVc5dVBWd2ljR0Z5YzJVZ2FHVjRZV1JsWTJsdFlXd2diblZ0WW1WeWN5QndjbVZtYVhobFpDQjNhWFJvSURCNFhDSTdYRzVjYm1aMWJtTjBhVzl1SUdSaGRHVW9iM0IwS1NCN1hHNGdJSEpsZEhWeWJpQjdYRzRnSUNBZ2JtRnRaVG9nWENKa1lYUmxYQ0lzWEc0Z0lDQWdjR0Z5YzJVNklHWjFibU4wYVc5dUlDaDJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ2FXWWdLQzllWEZ4a2V6UjlMVnhjWkhzeWZTMWNYR1I3TW4wa0x5NTBaWE4wS0haaGJIVmxLU0I4ZkZ4dUlDQWdJQ0FnSUNBdlhseGNaSHMwZlMxY1hHUjdNbjB0WEZ4a2V6SjlWRnhjWkhzeWZWeGNPbHhjWkhzeWZWeGNPbHhjWkhzeWZTZy9PaTVjWEdRcktTZy9PbHA4V3lzdFhWeGNaSHN5ZlRwY1hHUjdNbjBwSkM4dWRHVnpkQ2gyWVd4MVpTa3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUjBJRDBnUkdGMFpTNXdZWEp6WlNoMllXeDFaU2s3WEc0Z0lDQWdJQ0FnSUdsbUlDZ2hhWE5PWVU0b1pIUXBLU0J5WlhSMWNtNGdibVYzSUVSaGRHVW9aSFFwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBzWEc0Z0lDQWdjM1J5YVc1bmFXWjVPaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQWdJR2xtSUNoUFltcGxZM1F1Y0hKdmRHOTBlWEJsTG5SdlUzUnlhVzVuTG1OaGJHd29kbUZzZFdVcElEMDlQU0FuVzI5aWFtVmpkQ0JFWVhSbFhTY3BJSHRjYmlBZ0lDQWdJQ0FnZG1GeUlHUjBJRDBnZG1Gc2RXVXVkRzlKVTA5VGRISnBibWNvS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1IwTG1sdVpHVjRUMllvWENKVU1EQTZNREE2TURBdU1EQXdXbHdpTENCa2RDNXNaVzVuZEdnZ0xTQXhOQ2tnSVQwOUlDMHhLU0J5WlhSMWNtNGdaSFF1YzNWaWMzUnlLREFzSURFd0tUdGNiaUFnSUNBZ0lDQWdaV3h6WlNCeVpYUjFjbTRnWkhRN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlN4Y2JpQWdmVHRjYm4xY2JtUmhkR1V1WkdWelkzSnBjSFJwYjI0OVhDSnpkWEJ3YjNKMElFbFRUeUJrWVhSbGMxd2lPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUh0Y2JpQWdiRzloWkVSelpqb2diRzloWkVSelppeGNiaUFnYzNSa09pQjdYRzRnSUNBZ2JXRjBhRG9nYldGMGFDeGNiaUFnSUNCb1pYZzZJR2hsZUN4Y2JpQWdJQ0JrWVhSbE9pQmtZWFJsTEZ4dUlDQjlMRnh1ZlR0Y2JseHVYRzVjYmk4cUtpb3FLaW9xS2lvcUtpb3FLaW9xS2x4dUlDb3FJRmRGUWxCQlEwc2dSazlQVkVWU1hHNGdLaW9nTGk5K0wyaHFjMjl1TDJ4cFlpOW9hbk52Ymkxa2MyWXVhbk5jYmlBcUtpQnRiMlIxYkdVZ2FXUWdQU0F4TkZ4dUlDb3FJRzF2WkhWc1pTQmphSFZ1YTNNZ1BTQXdYRzRnS2lvdklpd2lMeW9nU0dwemIyNGdhSFIwY0RvdkwyaHFjMjl1TG05eVp5QXFMMXh1THlvZ2FuTnNhVzUwSUc1dlpHVTZJSFJ5ZFdVZ0tpOWNibHdpZFhObElITjBjbWxqZEZ3aU8xeHVYRzV0YjJSMWJHVXVaWGh3YjNKMGN5QTlJR1oxYm1OMGFXOXVLQ1IyWVd4MVpTd2dKRzl3ZENrZ2UxeHVYRzRnSUhaaGNpQmpiMjF0YjI0Z1BTQnlaWEYxYVhKbEtGd2lMaTlvYW5OdmJpMWpiMjF0YjI1Y0lpazdYRzRnSUhaaGNpQmtjMllnUFNCeVpYRjFhWEpsS0Z3aUxpOW9hbk52Ymkxa2MyWmNJaWs3WEc1Y2JpQWdkbUZ5SUhKMWJrUnpaanNnTHk4Z1pHOXRZV2x1SUhOd1pXTnBabWxqSUdadmNtMWhkSE5jYmx4dUlDQXZMeUJ1WldWa2MwVnpZMkZ3WlNCMFpYTjBjeUJwWmlCMGFHVWdjM1J5YVc1bklHTmhiaUJpWlNCM2NtbDBkR1Z1SUhkcGRHaHZkWFFnWlhOallYQmxjMXh1SUNCMllYSWdibVZsWkhORmMyTmhjR1VnUFNBdlcxeGNYRnhjWEZ3aVhGeDRNREF0WEZ4NE1XWmNYSGczWmkxY1hIZzVabHhjZFRBd1lXUmNYSFV3TmpBd0xWeGNkVEEyTURSY1hIVXdOekJtWEZ4MU1UZGlORnhjZFRFM1lqVmNYSFV5TURCakxWeGNkVEl3TUdaY1hIVXlNREk0TFZ4Y2RUSXdNbVpjWEhVeU1EWXdMVnhjZFRJd05tWmNYSFZtWldabVhGeDFabVptTUMxY1hIVm1abVptWFM5bk8xeHVJQ0F2THlCdVpXVmtjMUYxYjNSbGN5QjBaWE4wY3lCcFppQjBhR1VnYzNSeWFXNW5JR05oYmlCaVpTQjNjbWwwZEdWdUlHRnpJR0VnY1hWdmRHVnNaWE56SUhOMGNtbHVaeUFvYVc1amJIVmtaWE1nYm1WbFpITkZjMk5oY0dVZ1luVjBJSGRwZEdodmRYUWdYRnhjWENCaGJtUWdYRnhjSWlsY2JpQWdkbUZ5SUc1bFpXUnpVWFZ2ZEdWeklEMGdMMTVjWEhOOFhsd2lmRjRuSnlkOFhpTjhYbHhjTDF4Y0tueGVYRnd2WEZ3dmZGNWNYSHQ4WGx4Y2ZYeGVYRnhiZkY1Y1hGMThYanA4WGl4OFhGeHpKSHhiWEZ4NE1EQXRYRng0TVdaY1hIZzNaaTFjWEhnNVpseGNkVEF3WVdSY1hIVXdOakF3TFZ4Y2RUQTJNRFJjWEhVd056Qm1YRngxTVRkaU5GeGNkVEUzWWpWY1hIVXlNREJqTFZ4Y2RUSXdNR1pjWEhVeU1ESTRMVnhjZFRJd01tWmNYSFV5TURZd0xWeGNkVEl3Tm1aY1hIVm1aV1ptWEZ4MVptWm1NQzFjWEhWbVptWm1YUzluTzF4dUlDQXZMeUJ1WldWa2MwVnpZMkZ3WlUxTUlIUmxjM1J6SUdsbUlIUm9aU0J6ZEhKcGJtY2dZMkZ1SUdKbElIZHlhWFIwWlc0Z1lYTWdZU0J0ZFd4MGFXeHBibVVnYzNSeWFXNW5JQ2hwYm1Oc2RXUmxjeUJ1WldWa2MwVnpZMkZ3WlNCaWRYUWdkMmwwYUc5MWRDQmNYRzRzSUZ4Y2Npd2dYRnhjWENCaGJtUWdYRnhjSWlsY2JpQWdkbUZ5SUc1bFpXUnpSWE5qWVhCbFRVd2dQU0F2SnljbmZGdGNYSGd3TUMxY1hIZ3dPVnhjZURCaVhGeDRNR05jWEhnd1pTMWNYSGd4Wmx4Y2VEZG1MVnhjZURsbVhGeDFNREJoWkZ4Y2RUQTJNREF0WEZ4MU1EWXdORnhjZFRBM01HWmNYSFV4TjJJMFhGeDFNVGRpTlZ4Y2RUSXdNR010WEZ4MU1qQXdabHhjZFRJd01qZ3RYRngxTWpBeVpseGNkVEl3TmpBdFhGeDFNakEyWmx4Y2RXWmxabVpjWEhWbVptWXdMVnhjZFdabVptWmRMMmM3WEc0Z0lDOHZJSE4wWVhKMGN5QjNhWFJvSUdFZ2EyVjVkMjl5WkNCaGJtUWdiM0IwYVc5dVlXeHNlU0JwY3lCbWIyeHNiM2RsWkNCaWVTQmhJR052YlcxbGJuUmNiaUFnZG1GeUlITjBZWEowYzFkcGRHaExaWGwzYjNKa0lEMGdMMTRvZEhKMVpYeG1ZV3h6Wlh4dWRXeHNLVnhjY3lvb0tDeDhYRnhkZkZ4Y2ZYd2pmRnhjTDF4Y0wzeGNYQzljWENvcExpb3BQeVF2TzF4dUlDQjJZWElnYldWMFlTQTlYRzRnSUhzZ0lDOHZJSFJoWW14bElHOW1JR05vWVhKaFkzUmxjaUJ6ZFdKemRHbDBkWFJwYjI1elhHNGdJQ0FnSjF4Y1lpYzZJQ2RpSnl4Y2JpQWdJQ0FuWEZ4MEp6b2dKM1FuTEZ4dUlDQWdJQ2RjWEc0bk9pQW5iaWNzWEc0Z0lDQWdKMXhjWmljNklDZG1KeXhjYmlBZ0lDQW5YRnh5SnpvZ0ozSW5MRnh1SUNBZ0lDZGNJaWNnT2lBblhDSW5MRnh1SUNBZ0lDZGNYRnhjSnpvZ0oxeGNYRnduWEc0Z0lIMDdYRzRnSUhaaGNpQnVaV1ZrYzBWelkyRndaVTVoYldVZ1BTQXZXeXhjWEh0Y1hGdGNYSDFjWEYxY1hITTZJMXdpWFh4Y1hDOWNYQzk4WEZ3dlhGd3FmQ2NuSnk4N1hHNGdJSFpoY2lCbllYQWdQU0FuSnp0Y2JpQWdkbUZ5SUdsdVpHVnVkQ0E5SUNjZ0lDYzdYRzRnSUM4dklHOXdkR2x2Ym5OY2JpQWdkbUZ5SUdWdmJDd2dhMlZsY0VOdmJXMWxiblJ6TENCaWNtRmpaWE5UWVcxbFRHbHVaU3dnY1hWdmRHVkJiSGRoZVhNN1hHNGdJSFpoY2lCMGIydGxiaUE5SUh0Y2JpQWdJQ0J2WW1vNklDQmJJQ2Q3Snl3Z0ozMG5JRjBzWEc0Z0lDQWdZWEp5T2lBZ1d5QW5XeWNzSUNkZEp5QmRMRnh1SUNBZ0lHdGxlVG9nSUZzZ0p5Y3NJQ0FuSnlCZExGeHVJQ0FnSUhGclpYazZJRnNnSjF3aUp5d2dKMXdpSnlCZExGeHVJQ0FnSUdOdmJEb2dJRnNnSnpvbklGMHNYRzRnSUNBZ2MzUnlPaUFnV3lBbkp5d2dKeWNnWFN4Y2JpQWdJQ0J4YzNSeU9pQmJJQ2RjSWljc0lDZGNJaWNnWFN4Y2JpQWdJQ0J0YzNSeU9pQmJJRndpSnljblhDSXNJRndpSnljblhDSWdYU3hjYmlBZ0lDQnVkVzA2SUNCYklDY25MQ0FuSnlCZExGeHVJQ0FnSUd4cGREb2dJRnNnSnljc0lDY25JRjBzWEc0Z0lDQWdaSE5tT2lBZ1d5QW5KeXdnSnljZ1hTeGNiaUFnSUNCbGMyTTZJQ0JiSUNkY1hGeGNKeXdnSnljZ1hTeGNiaUFnSUNCMWJtazZJQ0JiSUNkY1hGeGNkU2NzSUNjbklGMHNYRzRnSUNBZ2NtVnRPaUFnV3lBbkp5d2dKeWNnWFN4Y2JpQWdmVHRjYmx4dUlDQm1kVzVqZEdsdmJpQjNjbUZ3S0hSckxDQjJLU0I3SUhKbGRIVnliaUIwYTFzd1hTQXJJSFlnS3lCMGExc3hYVHNnZlZ4dVhHNGdJR1oxYm1OMGFXOXVJSEYxYjNSbFVtVndiR0ZqWlNoemRISnBibWNwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjM1J5YVc1bkxuSmxjR3hoWTJVb2JtVmxaSE5GYzJOaGNHVXNJR1oxYm1OMGFXOXVJQ2hoS1NCN1hHNGdJQ0FnSUNCMllYSWdZeUE5SUcxbGRHRmJZVjA3WEc0Z0lDQWdJQ0JwWmlBb2RIbHdaVzltSUdNZ1BUMDlJQ2R6ZEhKcGJtY25LU0J5WlhSMWNtNGdkM0poY0NoMGIydGxiaTVsYzJNc0lHTXBPMXh1SUNBZ0lDQWdaV3h6WlNCeVpYUjFjbTRnZDNKaGNDaDBiMnRsYmk1MWJta3NJQ2duTURBd01DY2dLeUJoTG1Ob1lYSkRiMlJsUVhRb01Da3VkRzlUZEhKcGJtY29NVFlwS1M1emJHbGpaU2d0TkNrcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5WEc1Y2JpQWdablZ1WTNScGIyNGdjWFZ2ZEdVb2MzUnlhVzVuTENCbllYQXNJR2hoYzBOdmJXMWxiblFzSUdselVtOXZkRTlpYW1WamRDa2dlMXh1SUNBZ0lHbG1JQ2doYzNSeWFXNW5LU0J5WlhSMWNtNGdkM0poY0NoMGIydGxiaTV4YzNSeUxDQW5KeWs3WEc1Y2JpQWdJQ0J1WldWa2MxRjFiM1JsY3k1c1lYTjBTVzVrWlhnZ1BTQXdPMXh1SUNBZ0lITjBZWEowYzFkcGRHaExaWGwzYjNKa0xteGhjM1JKYm1SbGVDQTlJREE3WEc1Y2JpQWdJQ0F2THlCRGFHVmpheUJwWmlCM1pTQmpZVzRnYVc1elpYSjBJSFJvYVhNZ2MzUnlhVzVuSUhkcGRHaHZkWFFnY1hWdmRHVnpYRzRnSUNBZ0x5OGdjMlZsSUdocWMyOXVJSE41Ym5SaGVDQW9iWFZ6ZENCdWIzUWdjR0Z5YzJVZ1lYTWdkSEoxWlN3Z1ptRnNjMlVzSUc1MWJHd2diM0lnYm5WdFltVnlLVnh1WEc0Z0lDQWdhV1lnS0hGMWIzUmxRV3gzWVhseklIeDhJR2hoYzBOdmJXMWxiblFnZkh4Y2JpQWdJQ0FnSUc1bFpXUnpVWFZ2ZEdWekxuUmxjM1FvYzNSeWFXNW5LU0I4ZkZ4dUlDQWdJQ0FnWTI5dGJXOXVMblJ5ZVZCaGNuTmxUblZ0WW1WeUtITjBjbWx1Wnl3Z2RISjFaU2tnSVQwOUlIVnVaR1ZtYVc1bFpDQjhmRnh1SUNBZ0lDQWdjM1JoY25SelYybDBhRXRsZVhkdmNtUXVkR1Z6ZENoemRISnBibWNwS1NCN1hHNWNiaUFnSUNBZ0lDOHZJRWxtSUhSb1pTQnpkSEpwYm1jZ1kyOXVkR0ZwYm5NZ2JtOGdZMjl1ZEhKdmJDQmphR0Z5WVdOMFpYSnpMQ0J1YnlCeGRXOTBaU0JqYUdGeVlXTjBaWEp6TENCaGJtUWdibTljYmlBZ0lDQWdJQzh2SUdKaFkydHpiR0Z6YUNCamFHRnlZV04wWlhKekxDQjBhR1Z1SUhkbElHTmhiaUJ6WVdabGJIa2djMnhoY0NCemIyMWxJSEYxYjNSbGN5QmhjbTkxYm1RZ2FYUXVYRzRnSUNBZ0lDQXZMeUJQZEdobGNuZHBjMlVnZDJVZ1ptbHljM1FnWTJobFkyc2dhV1lnZEdobElITjBjbWx1WnlCallXNGdZbVVnWlhod2NtVnpjMlZrSUdsdUlHMTFiSFJwYkdsdVpWeHVJQ0FnSUNBZ0x5OGdabTl5YldGMElHOXlJSGRsSUcxMWMzUWdjbVZ3YkdGalpTQjBhR1VnYjJabVpXNWthVzVuSUdOb1lYSmhZM1JsY25NZ2QybDBhQ0J6WVdabElHVnpZMkZ3WlZ4dUlDQWdJQ0FnTHk4Z2MyVnhkV1Z1WTJWekxseHVYRzRnSUNBZ0lDQnVaV1ZrYzBWelkyRndaUzVzWVhOMFNXNWtaWGdnUFNBd08xeHVJQ0FnSUNBZ2JtVmxaSE5GYzJOaGNHVk5UQzVzWVhOMFNXNWtaWGdnUFNBd08xeHVJQ0FnSUNBZ2FXWWdLQ0Z1WldWa2MwVnpZMkZ3WlM1MFpYTjBLSE4wY21sdVp5a3BJSEpsZEhWeWJpQjNjbUZ3S0hSdmEyVnVMbkZ6ZEhJc0lITjBjbWx1WnlrN1hHNGdJQ0FnSUNCbGJITmxJR2xtSUNnaGJtVmxaSE5GYzJOaGNHVk5UQzUwWlhOMEtITjBjbWx1WnlrZ0ppWWdJV2x6VW05dmRFOWlhbVZqZENrZ2NtVjBkWEp1SUcxc1UzUnlhVzVuS0hOMGNtbHVaeXdnWjJGd0tUdGNiaUFnSUNBZ0lHVnNjMlVnY21WMGRYSnVJSGR5WVhBb2RHOXJaVzR1Y1hOMGNpd2djWFZ2ZEdWU1pYQnNZV05sS0hOMGNtbHVaeWtwTzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQXZMeUJ5WlhSMWNtNGdkMmwwYUc5MWRDQnhkVzkwWlhOY2JpQWdJQ0FnSUhKbGRIVnliaUIzY21Gd0tIUnZhMlZ1TG5OMGNpd2djM1J5YVc1bktUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnRiRk4wY21sdVp5aHpkSEpwYm1jc0lHZGhjQ2tnZTF4dUlDQWdJQzh2SUhkeVlYQWdkR2hsSUhOMGNtbHVaeUJwYm5SdklIUm9aU0FuSnljZ0tHMTFiSFJwYkdsdVpTa2dabTl5YldGMFhHNWNiaUFnSUNCMllYSWdhU3dnWVNBOUlITjBjbWx1Wnk1eVpYQnNZV05sS0M5Y1hISXZaeXdnWENKY0lpa3VjM0JzYVhRb0oxeGNiaWNwTzF4dUlDQWdJR2RoY0NBclBTQnBibVJsYm5RN1hHNWNiaUFnSUNCcFppQW9ZUzVzWlc1bmRHZ2dQVDA5SURFcElIdGNiaUFnSUNBZ0lDOHZJRlJvWlNCemRISnBibWNnWTI5dWRHRnBibk1nYjI1c2VTQmhJSE5wYm1kc1pTQnNhVzVsTGlCWFpTQnpkR2xzYkNCMWMyVWdkR2hsSUcxMWJIUnBiR2x1WlZ4dUlDQWdJQ0FnTHk4Z1ptOXliV0YwSUdGeklHbDBJR0YyYjJsa2N5QmxjMk5oY0dsdVp5QjBhR1VnWEZ3Z1kyaGhjbUZqZEdWeUlDaGxMbWN1SUhkb1pXNGdkWE5sWkNCcGJpQmhYRzRnSUNBZ0lDQXZMeUJ5WldkbGVDa3VYRzRnSUNBZ0lDQnlaWFIxY200Z2QzSmhjQ2gwYjJ0bGJpNXRjM1J5TENCaFd6QmRLVHRjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ2RtRnlJSEpsY3lBOUlHVnZiQ0FySUdkaGNDQXJJSFJ2YTJWdUxtMXpkSEpiTUYwN1hHNGdJQ0FnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnWVM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdJQ0J5WlhNZ0t6MGdaVzlzTzF4dUlDQWdJQ0FnSUNCcFppQW9ZVnRwWFNrZ2NtVnpJQ3M5SUdkaGNDQXJJR0ZiYVYwN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCeVpYUjFjbTRnY21WeklDc2daVzlzSUNzZ1oyRndJQ3NnZEc5clpXNHViWE4wY2xzeFhUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnhkVzkwWlV0bGVTaHVZVzFsS1NCN1hHNGdJQ0FnYVdZZ0tDRnVZVzFsS1NCeVpYUjFjbTRnSjF3aVhDSW5PMXh1WEc0Z0lDQWdMeThnUTJobFkyc2dhV1lnZDJVZ1kyRnVJR2x1YzJWeWRDQjBhR2x6SUd0bGVTQjNhWFJvYjNWMElIRjFiM1JsYzF4dVhHNGdJQ0FnYVdZZ0tHNWxaV1J6UlhOallYQmxUbUZ0WlM1MFpYTjBLRzVoYldVcEtTQjdYRzRnSUNBZ0lDQnVaV1ZrYzBWelkyRndaUzVzWVhOMFNXNWtaWGdnUFNBd08xeHVJQ0FnSUNBZ2NtVjBkWEp1SUhkeVlYQW9kRzlyWlc0dWNXdGxlU3dnYm1WbFpITkZjMk5oY0dVdWRHVnpkQ2h1WVcxbEtTQS9JSEYxYjNSbFVtVndiR0ZqWlNodVlXMWxLU0E2SUc1aGJXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBdkx5QnlaWFIxY200Z2QybDBhRzkxZENCeGRXOTBaWE5jYmlBZ0lDQWdJSEpsZEhWeWJpQjNjbUZ3S0hSdmEyVnVMbXRsZVN3Z2JtRnRaU2s3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnWm5WdVkzUnBiMjRnYzNSeUtIWmhiSFZsTENCb1lYTkRiMjF0Wlc1MExDQnViMGx1WkdWdWRDd2dhWE5TYjI5MFQySnFaV04wS1NCN1hHNGdJQ0FnTHk4Z1VISnZaSFZqWlNCaElITjBjbWx1WnlCbWNtOXRJSFpoYkhWbExseHVYRzRnSUNBZ1puVnVZM1JwYjI0Z2MzUmhjblJ6VjJsMGFFNU1LSE4wY2lrZ2V5QnlaWFIxY200Z2MzUnlJQ1ltSUhOMGNsdHpkSEpiTUYwZ1BUMDlJQ2RjWEhJbklEOGdNU0E2SURCZElEMDlQU0FuWEZ4dUp6c2dmVnh1SUNBZ0lHWjFibU4wYVc5dUlHTnZiVzFsYm5SUGJsUm9hWE5NYVc1bEtITjBjaWtnZXlCeVpYUjFjbTRnYzNSeUlDWW1JQ0Z6ZEdGeWRITlhhWFJvVGt3b2MzUnlLVHNnZlZ4dUlDQWdJR1oxYm1OMGFXOXVJRzFoYTJWRGIyMXRaVzUwS0hOMGNpd2djSEpsWm1sNExDQjBjbWx0S1NCN1hHNGdJQ0FnSUNCcFppQW9JWE4wY2lrZ2NtVjBkWEp1SUZ3aVhDSTdYRzRnSUNBZ0lDQnpkSElnUFNCamIyMXRiMjR1Wm05eVkyVkRiMjF0Wlc1MEtITjBjaWs3WEc0Z0lDQWdJQ0IyWVhJZ2FTd2diR1Z1SUQwZ2MzUnlMbXhsYm1kMGFEdGNiaUFnSUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCc1pXNGdKaVlnYzNSeVcybGRJRHc5SUNjZ0p6c2dhU3NyS1NCN2ZWeHVJQ0FnSUNBZ2FXWWdLSFJ5YVcwZ0ppWWdhU0ErSURBcElITjBjaUE5SUhOMGNpNXpkV0p6ZEhJb2FTazdYRzRnSUNBZ0lDQnBaaUFvYVNBOElHeGxiaWtnY21WMGRYSnVJSEJ5WldacGVDQXJJSGR5WVhBb2RHOXJaVzR1Y21WdExDQnpkSElwTzF4dUlDQWdJQ0FnWld4elpTQnlaWFIxY200Z2MzUnlPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRmRvWVhRZ2FHRndjR1Z1Y3lCdVpYaDBJR1JsY0dWdVpITWdiMjRnZEdobElIWmhiSFZsSjNNZ2RIbHdaUzVjYmx4dUlDQWdJQzh2SUdOb1pXTnJJR1p2Y2lCRVUwWmNiaUFnSUNCMllYSWdaSE5tVm1Gc2RXVWdQU0J5ZFc1RWMyWW9kbUZzZFdVcE8xeHVJQ0FnSUdsbUlDaGtjMlpXWVd4MVpTQWhQVDBnZFc1a1pXWnBibVZrS1NCeVpYUjFjbTRnZDNKaGNDaDBiMnRsYmk1a2MyWXNJR1J6WmxaaGJIVmxLVHRjYmx4dUlDQWdJSE4zYVhSamFDQW9kSGx3Wlc5bUlIWmhiSFZsS1NCN1hHNGdJQ0FnSUNCallYTmxJQ2R6ZEhKcGJtY25PbHh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdjWFZ2ZEdVb2RtRnNkV1VzSUdkaGNDd2dhR0Z6UTI5dGJXVnVkQ3dnYVhOU2IyOTBUMkpxWldOMEtUdGNibHh1SUNBZ0lDQWdZMkZ6WlNBbmJuVnRZbVZ5SnpwY2JpQWdJQ0FnSUNBZ0x5OGdTbE5QVGlCdWRXMWlaWEp6SUcxMWMzUWdZbVVnWm1sdWFYUmxMaUJGYm1OdlpHVWdibTl1TFdacGJtbDBaU0J1ZFcxaVpYSnpJR0Z6SUc1MWJHd3VYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnBjMFpwYm1sMFpTaDJZV3gxWlNrZ1B5QjNjbUZ3S0hSdmEyVnVMbTUxYlN3Z1UzUnlhVzVuS0haaGJIVmxLU2tnT2lCM2NtRndLSFJ2YTJWdUxteHBkQ3dnSjI1MWJHd25LVHRjYmx4dUlDQWdJQ0FnWTJGelpTQW5ZbTl2YkdWaGJpYzZYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQjNjbUZ3S0hSdmEyVnVMbXhwZEN3Z1UzUnlhVzVuS0haaGJIVmxLU2s3WEc1Y2JpQWdJQ0FnSUdOaGMyVWdKMjlpYW1WamRDYzZYRzRnSUNBZ0lDQWdJQzh2SUVsbUlIUm9aU0IwZVhCbElHbHpJQ2R2WW1wbFkzUW5MQ0IzWlNCdGFXZG9kQ0JpWlNCa1pXRnNhVzVuSUhkcGRHZ2dZVzRnYjJKcVpXTjBJRzl5SUdGdUlHRnljbUY1SUc5eVhHNGdJQ0FnSUNBZ0lDOHZJRzUxYkd3dVhHNWNiaUFnSUNBZ0lDQWdMeThnUkhWbElIUnZJR0VnYzNCbFkybG1hV05oZEdsdmJpQmliSFZ1WkdWeUlHbHVJRVZEVFVGVFkzSnBjSFFzSUhSNWNHVnZaaUJ1ZFd4c0lHbHpJQ2R2WW1wbFkzUW5MRnh1SUNBZ0lDQWdJQ0F2THlCemJ5QjNZWFJqYUNCdmRYUWdabTl5SUhSb1lYUWdZMkZ6WlM1Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvSVhaaGJIVmxLU0J5WlhSMWNtNGdkM0poY0NoMGIydGxiaTVzYVhRc0lDZHVkV3hzSnlrN1hHNWNiaUFnSUNBZ0lDQWdkbUZ5SUdOdmJXMWxiblJ6T3lBdkx5QjNhR2wwWlhOd1lXTmxJQ1lnWTI5dGJXVnVkSE5jYmlBZ0lDQWdJQ0FnYVdZZ0tHdGxaWEJEYjIxdFpXNTBjeWtnWTI5dGJXVnVkSE1nUFNCamIyMXRiMjR1WjJWMFEyOXRiV1Z1ZENoMllXeDFaU2s3WEc1Y2JpQWdJQ0FnSUNBZ2RtRnlJR2x6UVhKeVlYa2dQU0JQWW1wbFkzUXVjSEp2ZEc5MGVYQmxMblJ2VTNSeWFXNW5MbUZ3Y0d4NUtIWmhiSFZsS1NBOVBUMGdKMXR2WW1wbFkzUWdRWEp5WVhsZEp6dGNibHh1SUNBZ0lDQWdJQ0F2THlCTllXdGxJR0Z1SUdGeWNtRjVJSFJ2SUdodmJHUWdkR2hsSUhCaGNuUnBZV3dnY21WemRXeDBjeUJ2WmlCemRISnBibWRwWm5scGJtY2dkR2hwY3lCdlltcGxZM1FnZG1Gc2RXVXVYRzRnSUNBZ0lDQWdJSFpoY2lCdGFXNWtJRDBnWjJGd08xeHVJQ0FnSUNBZ0lDQm5ZWEFnS3owZ2FXNWtaVzUwTzF4dUlDQWdJQ0FnSUNCMllYSWdaVzlzVFdsdVpDQTlJR1Z2YkNBcklHMXBibVE3WEc0Z0lDQWdJQ0FnSUhaaGNpQmxiMnhIWVhBZ1BTQmxiMndnS3lCbllYQTdYRzRnSUNBZ0lDQWdJSFpoY2lCd2NtVm1hWGdnUFNCdWIwbHVaR1Z1ZENCOGZDQmljbUZqWlhOVFlXMWxUR2x1WlNBL0lDY25JRG9nWlc5c1RXbHVaRHRjYmlBZ0lDQWdJQ0FnZG1GeUlIQmhjblJwWVd3Z1BTQmJYVHRjYmx4dUlDQWdJQ0FnSUNCMllYSWdhU3dnYkdWdVozUm9PeUF2THlCc2IyOXdYRzRnSUNBZ0lDQWdJSFpoY2lCckxDQjJPeUF2THlCclpYa3NJSFpoYkhWbFhHNGdJQ0FnSUNBZ0lIWmhjaUJqTENCallUdGNibHh1SUNBZ0lDQWdJQ0JwWmlBb2FYTkJjbkpoZVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUZSb1pTQjJZV3gxWlNCcGN5QmhiaUJoY25KaGVTNGdVM1J5YVc1bmFXWjVJR1YyWlhKNUlHVnNaVzFsYm5RdUlGVnpaU0J1ZFd4c0lHRnpJR0VnY0d4aFkyVm9iMnhrWlhKY2JpQWdJQ0FnSUNBZ0lDQXZMeUJtYjNJZ2JtOXVMVXBUVDA0Z2RtRnNkV1Z6TGx4dVhHNGdJQ0FnSUNBZ0lDQWdabTl5SUNocElEMGdNQ3dnYkdWdVozUm9JRDBnZG1Gc2RXVXViR1Z1WjNSb095QnBJRHdnYkdWdVozUm9PeUJwS3lzcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDaGpiMjF0Wlc1MGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpJRDBnWTI5dGJXVnVkSE11WVZ0cFhYeDhXMTA3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJR05oSUQwZ1kyOXRiV1Z1ZEU5dVZHaHBjMHhwYm1Vb1kxc3hYU2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSEJoY25ScFlXd3VjSFZ6YUNodFlXdGxRMjl0YldWdWRDaGpXekJkTENCY0lseGNibHdpS1NBcklHVnZiRWRoY0NrN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ0lDQndZWEowYVdGc0xuQjFjMmdvYzNSeUtIWmhiSFZsVzJsZExDQmpiMjF0Wlc1MGN5QS9JR05oSURvZ1ptRnNjMlVzSUhSeWRXVXBJSHg4SUhkeVlYQW9kRzlyWlc0dWJHbDBMQ0FuYm5Wc2JDY3BLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHbG1JQ2hqYjIxdFpXNTBjeUFtSmlCald6RmRLU0J3WVhKMGFXRnNMbkIxYzJnb2JXRnJaVU52YlcxbGJuUW9ZMXN4WFN3Z1kyRWdQeUJjSWlCY0lpQTZJRndpWEZ4dVhDSXNJR05oS1NrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR052YlcxbGJuUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvYkdWdVozUm9JRDA5UFNBd0tTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDOHZJSGRvWlc0Z1pXMXdkSGxjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdjR0Z5ZEdsaGJDNXdkWE5vS0NoamIyMXRaVzUwY3k1bElEOGdiV0ZyWlVOdmJXMWxiblFvWTI5dGJXVnVkSE11WlZzd1hTd2dYQ0pjWEc1Y0lpa2dPaUJjSWx3aUtTQXJJR1Z2YkUxcGJtUXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQWdJQ0FnWld4elpTQndZWEowYVdGc0xuQjFjMmdvWlc5c1RXbHVaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1NtOXBiaUJoYkd3Z2IyWWdkR2hsSUdWc1pXMWxiblJ6SUhSdloyVjBhR1Z5TENCelpYQmhjbUYwWldRZ2QybDBhQ0J1Wlhkc2FXNWxMQ0JoYm1RZ2QzSmhjQ0IwYUdWdElHbHVYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1luSmhZMnRsZEhNdVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb1kyOXRiV1Z1ZEhNcElIWWdQU0J3Y21WbWFYZ2dLeUIzY21Gd0tIUnZhMlZ1TG1GeWNpd2djR0Z5ZEdsaGJDNXFiMmx1S0NjbktTazdYRzRnSUNBZ0lDQWdJQ0FnWld4elpTQnBaaUFvY0dGeWRHbGhiQzVzWlc1bmRHZ2dQVDA5SURBcElIWWdQU0IzY21Gd0tIUnZhMlZ1TG1GeWNpd2dKeWNwTzF4dUlDQWdJQ0FnSUNBZ0lHVnNjMlVnZGlBOUlIQnlaV1pwZUNBcklIZHlZWEFvZEc5clpXNHVZWEp5TENCbGIyeEhZWEFnS3lCd1lYSjBhV0ZzTG1wdmFXNG9aVzlzUjJGd0tTQXJJR1Z2YkUxcGJtUXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUM4dklFOTBhR1Z5ZDJselpTd2dhWFJsY21GMFpTQjBhSEp2ZFdkb0lHRnNiQ0J2WmlCMGFHVWdhMlY1Y3lCcGJpQjBhR1VnYjJKcVpXTjBMbHh1WEc0Z0lDQWdJQ0FnSUNBZ2FXWWdLR052YlcxbGJuUnpLU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjJZWElnYTJWNWN5QTlJR052YlcxbGJuUnpMbTh1YzJ4cFkyVW9LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lHWnZjaUFvYXlCcGJpQjJZV3gxWlNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCcFppQW9UMkpxWldOMExuQnliM1J2ZEhsd1pTNW9ZWE5QZDI1UWNtOXdaWEowZVM1allXeHNLSFpoYkhWbExDQnJLU0FtSmlCclpYbHpMbWx1WkdWNFQyWW9heWtnUENBd0tWeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBZ0lHdGxlWE11Y0hWemFDaHJLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUNBZ1ptOXlJQ2hwSUQwZ01Dd2diR1Z1WjNSb0lEMGdhMlY1Y3k1c1pXNW5kR2c3SUdrZ1BDQnNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0JySUQwZ2EyVjVjMXRwWFR0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnWXlBOUlHTnZiVzFsYm5SekxtTmJhMTE4ZkZ0ZE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCallTQTlJR052YlcxbGJuUlBibFJvYVhOTWFXNWxLR05iTVYwcE8xeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNCd1lYSjBhV0ZzTG5CMWMyZ29iV0ZyWlVOdmJXMWxiblFvWTFzd1hTd2dYQ0pjWEc1Y0lpa2dLeUJsYjJ4SFlYQXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJSFlnUFNCemRISW9kbUZzZFdWYmExMHNJR05oS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tIWXBJSEJoY25ScFlXd3VjSFZ6YUNoeGRXOTBaVXRsZVNocktTQXJJSFJ2YTJWdUxtTnZiQ0FySUNoemRHRnlkSE5YYVhSb1Rrd29kaWtnUHlBbkp5QTZJQ2NnSnlrZ0t5QjJLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dOdmJXMWxiblJ6SUNZbUlHTmJNVjBwSUhCaGNuUnBZV3d1Y0hWemFDaHRZV3RsUTI5dGJXVnVkQ2hqV3pGZExDQmpZU0EvSUZ3aUlGd2lJRG9nWENKY1hHNWNJaXdnWTJFcEtUdGNiaUFnSUNBZ0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUNBZ0lDQWdJR2xtSUNoc1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdMeThnZDJobGJpQmxiWEIwZVZ4dUlDQWdJQ0FnSUNBZ0lDQWdJQ0J3WVhKMGFXRnNMbkIxYzJnb0tHTnZiVzFsYm5SekxtVWdQeUJ0WVd0bFEyOXRiV1Z1ZENoamIyMXRaVzUwY3k1bFd6QmRMQ0JjSWx4Y2Jsd2lLU0E2SUZ3aVhDSXBJQ3NnWlc5c1RXbHVaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCbGJITmxJSEJoY25ScFlXd3VjSFZ6YUNobGIyeE5hVzVrS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCbWIzSWdLR3NnYVc0Z2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaDJZV3gxWlN3Z2F5a3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0IySUQwZ2MzUnlLSFpoYkhWbFcydGRLVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb2Rpa2djR0Z5ZEdsaGJDNXdkWE5vS0hGMWIzUmxTMlY1S0dzcElDc2dkRzlyWlc0dVkyOXNJQ3NnS0hOMFlYSjBjMWRwZEdoT1RDaDJLU0EvSUNjbklEb2dKeUFuS1NBcklIWXBPMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQjlYRzRnSUNBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdTbTlwYmlCaGJHd2diMllnZEdobElHMWxiV0psY2lCMFpYaDBjeUIwYjJkbGRHaGxjaXdnYzJWd1lYSmhkR1ZrSUhkcGRHZ2dibVYzYkdsdVpYTmNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2NHRnlkR2xoYkM1c1pXNW5kR2dnUFQwOUlEQXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIWWdQU0IzY21Gd0tIUnZhMlZ1TG05aWFpd2dKeWNwTzF4dUlDQWdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0F2THlCaGJtUWdkM0poY0NCMGFHVnRJR2x1SUdKeVlXTmxjMXh1SUNBZ0lDQWdJQ0FnSUNBZ2FXWWdLR052YlcxbGJuUnpLU0IySUQwZ2NISmxabWw0SUNzZ2QzSmhjQ2gwYjJ0bGJpNXZZbW9zSUhCaGNuUnBZV3d1YW05cGJpZ25KeWtwTzF4dUlDQWdJQ0FnSUNBZ0lDQWdaV3h6WlNCMklEMGdjSEpsWm1sNElDc2dkM0poY0NoMGIydGxiaTV2WW1vc0lHVnZiRWRoY0NBcklIQmhjblJwWVd3dWFtOXBiaWhsYjJ4SFlYQXBJQ3NnWlc5c1RXbHVaQ2s3WEc0Z0lDQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnWjJGd0lEMGdiV2x1WkR0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUhZN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2FHcHpiMjVUZEhKcGJtZHBabmtvZG1Gc2RXVXNJRzl3ZENrZ2UxeHVJQ0FnSUhaaGNpQnBMQ0J6Y0dGalpUdGNiaUFnSUNCMllYSWdaSE5tUkdWbUlEMGdiblZzYkR0Y2JseHVJQ0FnSUdWdmJDQTlJR052YlcxdmJpNUZUMHc3WEc0Z0lDQWdhVzVrWlc1MElEMGdKeUFnSnp0Y2JpQWdJQ0JyWldWd1EyOXRiV1Z1ZEhNZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0JpY21GalpYTlRZVzFsVEdsdVpTQTlJR1poYkhObE8xeHVJQ0FnSUhGMWIzUmxRV3gzWVhseklEMGdabUZzYzJVN1hHNWNiaUFnSUNCcFppQW9iM0IwSUNZbUlIUjVjR1Z2WmlCdmNIUWdQVDA5SUNkdlltcGxZM1FuS1NCN1hHNGdJQ0FnSUNCcFppQW9iM0IwTG1WdmJDQTlQVDBnSjF4Y2JpY2dmSHdnYjNCMExtVnZiQ0E5UFQwZ0oxeGNjbHhjYmljcElHVnZiQ0E5SUc5d2RDNWxiMnc3WEc0Z0lDQWdJQ0J6Y0dGalpTQTlJRzl3ZEM1emNHRmpaVHRjYmlBZ0lDQWdJR3RsWlhCRGIyMXRaVzUwY3lBOUlHOXdkQzVyWldWd1YzTmpPMXh1SUNBZ0lDQWdZbkpoWTJWelUyRnRaVXhwYm1VZ1BTQnZjSFF1WW5KaFkyVnpVMkZ0WlV4cGJtVTdYRzRnSUNBZ0lDQnhkVzkwWlVGc2QyRjVjeUE5SUc5d2RDNXhkVzkwWlhNZ1BUMDlJQ2RoYkhkaGVYTW5PMXh1SUNBZ0lDQWdaSE5tUkdWbUlEMGdiM0IwTG1SelpqdGNibHh1SUNBZ0lDQWdhV1lnS0c5d2RDNWpiMnh2Y25NZ1BUMDlJSFJ5ZFdVcElIdGNiaUFnSUNBZ0lDQWdkRzlyWlc0Z1BTQjdYRzRnSUNBZ0lDQWdJQ0FnYjJKcU9pQWdXeUFuWEZ4NE1XSmJNekE3TVcxN1hGeDRNV0piTUcwbkxDQW5YRng0TVdKYk16QTdNVzE5WEZ4NE1XSmJNRzBuSUYwc1hHNGdJQ0FnSUNBZ0lDQWdZWEp5T2lBZ1d5QW5YRng0TVdKYk16QTdNVzFiWEZ4NE1XSmJNRzBuTENBblhGeDRNV0piTXpBN01XMWRYRng0TVdKYk1HMG5JRjBzWEc0Z0lDQWdJQ0FnSUNBZ2EyVjVPaUFnV3lBblhGeDRNV0piTXpOdEp5d2dJQ2RjWEhneFlsc3diU2NnWFN4Y2JpQWdJQ0FnSUNBZ0lDQnhhMlY1T2lCYklDZGNYSGd4WWxzek0yMWNJaWNzSUNkY0lseGNlREZpV3pCdEp5QmRMRnh1SUNBZ0lDQWdJQ0FnSUdOdmJEb2dJRnNnSjF4Y2VERmlXek0zYlRwY1hIZ3hZbHN3YlNjZ1hTeGNiaUFnSUNBZ0lDQWdJQ0J6ZEhJNklDQmJJQ2RjWEhneFlsc3pOenN4YlNjc0lDZGNYSGd4WWxzd2JTY2dYU3hjYmlBZ0lDQWdJQ0FnSUNCeGMzUnlPaUJiSUNkY1hIZ3hZbHN6TnpzeGJWd2lKeXdnSjF3aVhGeDRNV0piTUcwbklGMHNYRzRnSUNBZ0lDQWdJQ0FnYlhOMGNqb2dXeUJjSWx4Y2VERmlXek0zT3pGdEp5Y25YQ0lzSUZ3aUp5Y25YRng0TVdKYk1HMWNJaUJkTEZ4dUlDQWdJQ0FnSUNBZ0lHNTFiVG9nSUZzZ0oxeGNlREZpV3pNMk96RnRKeXdnSjF4Y2VERmlXekJ0SnlCZExGeHVJQ0FnSUNBZ0lDQWdJR3hwZERvZ0lGc2dKMXhjZURGaVd6TTJiU2NzSUNkY1hIZ3hZbHN3YlNjZ1hTeGNiaUFnSUNBZ0lDQWdJQ0JrYzJZNklDQmJJQ2RjWEhneFlsc3pOMjBuTENBblhGeDRNV0piTUcwbklGMHNYRzRnSUNBZ0lDQWdJQ0FnWlhOak9pQWdXeUFuWEZ4NE1XSmJNekZ0WEZ4Y1hDY3NJQ2RjWEhneFlsc3diU2NnWFN4Y2JpQWdJQ0FnSUNBZ0lDQjFibWs2SUNCYklDZGNYSGd4WWxzek1XMWNYRnhjZFNjc0lDZGNYSGd4WWxzd2JTY2dYU3hjYmlBZ0lDQWdJQ0FnSUNCeVpXMDZJQ0JiSUNkY1hIZ3hZbHN6TURzeGJTY3NJQ2RjWEhneFlsc3diU2NnWFN4Y2JpQWdJQ0FnSUNBZ2ZUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCeWRXNUVjMllnUFNCa2MyWXViRzloWkVSelppaGtjMlpFWldZc0lDZHpkSEpwYm1kcFpua25LVHRjYmx4dUlDQWdJQzh2SUVsbUlIUm9aU0J6Y0dGalpTQndZWEpoYldWMFpYSWdhWE1nWVNCdWRXMWlaWElzSUcxaGEyVWdZVzRnYVc1a1pXNTBJSE4wY21sdVp5QmpiMjUwWVdsdWFXNW5JSFJvWVhSY2JpQWdJQ0F2THlCdFlXNTVJSE53WVdObGN5NGdTV1lnYVhRZ2FYTWdZU0J6ZEhKcGJtY3NJR2wwSUhkcGJHd2dZbVVnZFhObFpDQmhjeUIwYUdVZ2FXNWtaVzUwSUhOMGNtbHVaeTVjYmx4dUlDQWdJR2xtSUNoMGVYQmxiMllnYzNCaFkyVWdQVDA5SUNkdWRXMWlaWEluS1NCN1hHNGdJQ0FnSUNCcGJtUmxiblFnUFNBbkp6dGNiaUFnSUNBZ0lHWnZjaUFvYVNBOUlEQTdJR2tnUENCemNHRmpaVHNnYVNzcktTQnBibVJsYm5RZ0t6MGdKeUFuTzF4dUlDQWdJSDBnWld4elpTQnBaaUFvZEhsd1pXOW1JSE53WVdObElEMDlQU0FuYzNSeWFXNW5KeWtnZTF4dUlDQWdJQ0FnYVc1a1pXNTBJRDBnYzNCaFkyVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2RtRnlJSEpsY3lBOUlGd2lYQ0k3WEc0Z0lDQWdkbUZ5SUdOdmJXMWxiblJ6SUQwZ2EyVmxjRU52YlcxbGJuUnpJRDhnWTI5dGJXVnVkSE1nUFNBb1kyOXRiVzl1TG1kbGRFTnZiVzFsYm5Rb2RtRnNkV1VwSUh4OElIdDlLUzV5SURvZ2JuVnNiRHRjYmlBZ0lDQnBaaUFvWTI5dGJXVnVkSE1nSmlZZ1kyOXRiV1Z1ZEhOYk1GMHBJSEpsY3lBOUlHTnZiVzFsYm5Seld6QmRJQ3NnSjF4Y2JpYzdYRzVjYmlBZ0lDQXZMeUJuWlhRZ2RHaGxJSEpsYzNWc2RDQnZaaUJ6ZEhKcGJtZHBabmxwYm1jZ2RHaGxJSFpoYkhWbExseHVJQ0FnSUhKbGN5QXJQU0J6ZEhJb2RtRnNkV1VzSUc1MWJHd3NJSFJ5ZFdVc0lIUnlkV1VwTzF4dVhHNGdJQ0FnYVdZZ0tHTnZiVzFsYm5SektTQnlaWE1nS3owZ1kyOXRiV1Z1ZEhOYk1WMThmRndpWENJN1hHNWNiaUFnSUNCeVpYUjFjbTRnY21Wek8xeHVJQ0I5WEc1Y2JpQWdjbVYwZFhKdUlHaHFjMjl1VTNSeWFXNW5hV1o1S0NSMllXeDFaU3dnSkc5d2RDazdYRzU5TzF4dVhHNWNibHh1THlvcUtpb3FLaW9xS2lvcUtpb3FLaW9xWEc0Z0tpb2dWMFZDVUVGRFN5QkdUMDlVUlZKY2JpQXFLaUF1TDM0dmFHcHpiMjR2YkdsaUwyaHFjMjl1TFhOMGNtbHVaMmxtZVM1cWMxeHVJQ29xSUcxdlpIVnNaU0JwWkNBOUlERTFYRzRnS2lvZ2JXOWtkV3hsSUdOb2RXNXJjeUE5SURCY2JpQXFLaThpTENJdktpQklhbk52YmlCb2RIUndPaTh2YUdwemIyNHViM0puSUNvdlhHNHZLaUJxYzJ4cGJuUWdibTlrWlRvZ2RISjFaU0FxTDF4dVhDSjFjMlVnYzNSeWFXTjBYQ0k3WEc1Y2JuWmhjaUJqYjIxdGIyNDljbVZ4ZFdseVpTaGNJaTR2YUdwemIyNHRZMjl0Ylc5dVhDSXBPMXh1WEc1bWRXNWpkR2x2YmlCdFlXdGxRMjl0YldWdWRDaGlMQ0JoTENCNEtTQjdYRzRnSUhaaGNpQmpPMXh1SUNCcFppQW9ZaWtnWXoxN0lHSTZJR0lnZlR0Y2JpQWdhV1lnS0dFcElDaGpQV044Zkh0OUtTNWhQV0U3WEc0Z0lHbG1JQ2g0S1NBb1l6MWpmSHg3ZlNrdWVEMTRPMXh1SUNCeVpYUjFjbTRnWXp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWlhoMGNtRmpkRU52YlcxbGJuUnpLSFpoYkhWbExDQnliMjkwS1NCN1hHNWNiaUFnYVdZZ0tIWmhiSFZsUFQwOWJuVnNiQ0I4ZkNCMGVYQmxiMllnZG1Gc2RXVWhQVDBuYjJKcVpXTjBKeWtnY21WMGRYSnVPMXh1SUNCMllYSWdZMjl0YldWdWRITTlZMjl0Ylc5dUxtZGxkRU52YlcxbGJuUW9kbUZzZFdVcE8xeHVJQ0JwWmlBb1kyOXRiV1Z1ZEhNcElHTnZiVzF2Ymk1eVpXMXZkbVZEYjIxdFpXNTBLSFpoYkhWbEtUdGNibHh1SUNCMllYSWdhU3dnYkdWdVozUm9PeUF2THlCc2IyOXdYRzRnSUhaaGNpQmhibmtzSUhKbGN6dGNiaUFnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVlYQndiSGtvZG1Gc2RXVXBJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuS1NCN1hHNGdJQ0FnY21WelBYc2dZVG9nVzEwZ2ZUdGNiaUFnSUNCbWIzSWdLR2s5TUN3Z2JHVnVaM1JvUFhaaGJIVmxMbXhsYm1kMGFEc2dhVHhzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2FXWWdLSE5oZG1WRGIyMXRaVzUwS0hKbGN5NWhMQ0JwTENCamIyMXRaVzUwY3k1aFcybGRMQ0JsZUhSeVlXTjBRMjl0YldWdWRITW9kbUZzZFdWYmFWMHBLU2xjYmlBZ0lDQWdJQ0FnWVc1NVBYUnlkV1U3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2doWVc1NUlDWW1JR052YlcxbGJuUnpMbVVwZTF4dUlDQWdJQ0FnY21WekxtVTliV0ZyWlVOdmJXMWxiblFvWTI5dGJXVnVkSE11WlZzd1hTd2dZMjl0YldWdWRITXVaVnN4WFNrN1hHNGdJQ0FnSUNCaGJuazlkSEoxWlR0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnY21WelBYc2djem9nZTMwZ2ZUdGNibHh1SUNBZ0lDOHZJR2RsZENCclpYa2diM0prWlhJZ0tHTnZiVzFsYm5SeklHRnVaQ0JqZFhKeVpXNTBLVnh1SUNBZ0lIWmhjaUJyWlhsekxDQmpkWEp5Wlc1MFMyVjVjejFQWW1wbFkzUXVhMlY1Y3loMllXeDFaU2s3WEc0Z0lDQWdhV1lnS0dOdmJXMWxiblJ6SUNZbUlHTnZiVzFsYm5SekxtOHBJSHRjYmlBZ0lDQWdJR3RsZVhNOVcxMDdYRzRnSUNBZ0lDQmpiMjF0Wlc1MGN5NXZMbU52Ym1OaGRDaGpkWEp5Wlc1MFMyVjVjeWt1Wm05eVJXRmphQ2htZFc1amRHbHZiaWhyWlhrcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0U5aWFtVmpkQzV3Y205MGIzUjVjR1V1YUdGelQzZHVVSEp2Y0dWeWRIa3VZMkZzYkNoMllXeDFaU3dnYTJWNUtTQW1KaUJyWlhsekxtbHVaR1Y0VDJZb2EyVjVLVHd3S1Z4dUlDQWdJQ0FnSUNBZ0lHdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlNrN1hHNGdJQ0FnZlNCbGJITmxJR3RsZVhNOVkzVnljbVZ1ZEV0bGVYTTdYRzRnSUNBZ2NtVnpMbTg5YTJWNWN6dGNibHh1SUNBZ0lDOHZJR1Y0ZEhKaFkzUWdZMjl0YldWdWRITmNiaUFnSUNCbWIzSWdLR2s5TUN3Z2JHVnVaM1JvUFd0bGVYTXViR1Z1WjNSb095QnBQR3hsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnSUNCMllYSWdhMlY1UFd0bGVYTmJhVjA3WEc0Z0lDQWdJQ0JwWmlBb2MyRjJaVU52YlcxbGJuUW9jbVZ6TG5Nc0lHdGxlU3dnWTI5dGJXVnVkSE11WTF0clpYbGRMQ0JsZUhSeVlXTjBRMjl0YldWdWRITW9kbUZzZFdWYmEyVjVYU2twS1Z4dUlDQWdJQ0FnSUNCaGJuazlkSEoxWlR0Y2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0NGaGJua2dKaVlnWTI5dGJXVnVkSE11WlNrZ2UxeHVJQ0FnSUNBZ2NtVnpMbVU5YldGclpVTnZiVzFsYm5Rb1kyOXRiV1Z1ZEhNdVpWc3dYU3dnWTI5dGJXVnVkSE11WlZzeFhTazdYRzRnSUNBZ0lDQmhibms5ZEhKMVpUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnBaaUFvY205dmRDQW1KaUJqYjIxdFpXNTBjeUFtSmlCamIyMXRaVzUwY3k1eUtTQjdYRzRnSUNBZ2NtVnpMbkk5YldGclpVTnZiVzFsYm5Rb1kyOXRiV1Z1ZEhNdWNsc3dYU3dnWTI5dGJXVnVkSE11Y2xzeFhTazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdZVzU1UDNKbGN6cDFibVJsWm1sdVpXUTdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMWxjbWRsVTNSeUtDa2dlMXh1SUNCMllYSWdjbVZ6UFZ3aVhDSTdYRzRnSUZ0ZExtWnZja1ZoWTJndVkyRnNiQ2hoY21kMWJXVnVkSE1zSUdaMWJtTjBhVzl1S0dNcElIdGNiaUFnSUNCcFppQW9ZeUFtSmlCakxuUnlhVzBvS1NFOVBWd2lYQ0lwSUh0Y2JpQWdJQ0FnSUdsbUlDaHlaWE1wSUhKbGN5czlYQ0k3SUZ3aU8xeHVJQ0FnSUNBZ2NtVnpLejFqTG5SeWFXMG9LVHRjYmlBZ0lDQjlYRzRnSUgwcE8xeHVJQ0J5WlhSMWNtNGdjbVZ6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ0WlhKblpVTnZiVzFsYm5SektHTnZiVzFsYm5SekxDQjJZV3gxWlNrZ2UxeHVJQ0IyWVhJZ1pISnZjSEJsWkQxYlhUdGNiaUFnYldWeVoyVW9ZMjl0YldWdWRITXNJSFpoYkhWbExDQmtjbTl3Y0dWa0xDQmJYU2s3WEc1Y2JpQWdMeThnWVhCd1pXNWtJR1J5YjNCd1pXUWdZMjl0YldWdWRITTZYRzRnSUdsbUlDaGtjbTl3Y0dWa0xteGxibWQwYUQ0d0tTQjdYRzRnSUNBZ2RtRnlJSFJsZUhROWNtOXZkRU52YlcxbGJuUW9kbUZzZFdVc0lHNTFiR3dzSURFcE8xeHVJQ0FnSUhSbGVIUXJQVndpWEZ4dUl5QlBjbkJvWVc1bFpDQmpiMjF0Wlc1MGN6cGNYRzVjSWp0Y2JpQWdJQ0JrY205d2NHVmtMbVp2Y2tWaFkyZ29ablZ1WTNScGIyNG9ZeWtnZTF4dUlDQWdJQ0FnZEdWNGRDczlLRndpSXlCY0lpdGpMbkJoZEdndWFtOXBiaWduTHljcEsxd2lPaUJjSWl0dFpYSm5aVk4wY2loakxtSXNJR011WVN3Z1l5NWxLU2t1Y21Wd2JHRmpaU2hjSWx4Y2Jsd2lMQ0JjSWx4Y1hGeHVJRndpS1N0Y0lseGNibHdpTzF4dUlDQWdJSDBwTzF4dUlDQWdJSEp2YjNSRGIyMXRaVzUwS0haaGJIVmxMQ0IwWlhoMExDQXhLVHRjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCellYWmxRMjl0YldWdWRDaHlaWE1zSUd0bGVTd2dhWFJsYlN3Z1kyOXNLU0I3WEc0Z0lIWmhjaUJqUFcxaGEyVkRiMjF0Wlc1MEtHbDBaVzAvYVhSbGJWc3dYVHAxYm1SbFptbHVaV1FzSUdsMFpXMC9hWFJsYlZzeFhUcDFibVJsWm1sdVpXUXNJR052YkNrN1hHNGdJR2xtSUNoaktTQnlaWE5iYTJWNVhUMWpPMXh1SUNCeVpYUjFjbTRnWXp0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKdmNIQmxaRU52YlcxbGJuUW9jR0YwYUN3Z1l5a2dlMXh1SUNCMllYSWdjbVZ6UFcxaGEyVkRiMjF0Wlc1MEtHTXVZaXdnWXk1aEtUdGNiaUFnY21WekxuQmhkR2c5Y0dGMGFEdGNiaUFnY21WMGRYSnVJSEpsY3p0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnWkhKdmNFRnNiQ2hqYjIxdFpXNTBjeXdnWkhKdmNIQmxaQ3dnY0dGMGFDa2dlMXh1WEc0Z0lHbG1JQ2doWTI5dGJXVnVkSE1wSUhKbGRIVnlianRjYmx4dUlDQjJZWElnYVN3Z2JHVnVaM1JvT3lBdkx5QnNiMjl3WEc1Y2JpQWdhV1lnS0dOdmJXMWxiblJ6TG1FcElIdGNibHh1SUNBZ0lHWnZjaUFvYVQwd0xDQnNaVzVuZEdnOVkyOXRiV1Z1ZEhNdVlTNXNaVzVuZEdnN0lHazhiR1Z1WjNSb095QnBLeXNwSUh0Y2JpQWdJQ0FnSUhaaGNpQnJjR0YwYUQxd1lYUm9Mbk5zYVdObEtDa3VZMjl1WTJGMEtGdHBYU2s3WEc0Z0lDQWdJQ0IyWVhJZ1l6MWpiMjF0Wlc1MGN5NWhXMmxkTzF4dUlDQWdJQ0FnYVdZZ0tHTXBJSHRjYmlBZ0lDQWdJQ0FnWkhKdmNIQmxaQzV3ZFhOb0tHUnliM0J3WldSRGIyMXRaVzUwS0d0d1lYUm9MQ0JqS1NrN1hHNGdJQ0FnSUNBZ0lHUnliM0JCYkd3b1l5NTRMQ0JrY205d2NHVmtMQ0JyY0dGMGFDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdhV1lnS0dOdmJXMWxiblJ6TG04cElIdGNibHh1SUNBZ0lHTnZiVzFsYm5SekxtOHVabTl5UldGamFDaG1kVzVqZEdsdmJpaHJaWGtwSUh0Y2JpQWdJQ0FnSUhaaGNpQnJjR0YwYUQxd1lYUm9Mbk5zYVdObEtDa3VZMjl1WTJGMEtGdHJaWGxkS1R0Y2JpQWdJQ0FnSUhaaGNpQmpQV052YlcxbGJuUnpMbk5iYTJWNVhUdGNiaUFnSUNBZ0lHbG1JQ2hqS1NCN1hHNGdJQ0FnSUNBZ0lHUnliM0J3WldRdWNIVnphQ2hrY205d2NHVmtRMjl0YldWdWRDaHJjR0YwYUN3Z1l5a3BPMXh1SUNBZ0lDQWdJQ0JrY205d1FXeHNLR011ZUN3Z1pISnZjSEJsWkN3Z2EzQmhkR2dwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDBwTzF4dUlDQjlYRzVjYmlBZ2FXWWdLR052YlcxbGJuUnpMbVVwWEc0Z0lDQWdaSEp2Y0hCbFpDNXdkWE5vS0dSeWIzQndaV1JEYjIxdFpXNTBLSEJoZEdnc0lHTnZiVzFsYm5SekxtVXBLVHRjYm4xY2JseHVablZ1WTNScGIyNGdiV1Z5WjJVb1kyOXRiV1Z1ZEhNc0lIWmhiSFZsTENCa2NtOXdjR1ZrTENCd1lYUm9LU0I3WEc1Y2JpQWdhV1lnS0NGamIyMXRaVzUwY3lrZ2NtVjBkWEp1TzF4dUlDQnBaaUFvZG1Gc2RXVTlQVDF1ZFd4c0lIeDhJSFI1Y0dWdlppQjJZV3gxWlNFOVBTZHZZbXBsWTNRbktTQjdYRzRnSUNBZ1pISnZjRUZzYkNoamIyMXRaVzUwY3l3Z1pISnZjSEJsWkN3Z2NHRjBhQ2s3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdkbUZ5SUdrc0lHeGxibWQwYURzZ0x5OGdiRzl2Y0Z4dUlDQjJZWElnYzJWMFEyOXRiV1Z1ZEhNOVkyOXRiVzl1TG1OeVpXRjBaVU52YlcxbGJuUW9kbUZzZFdVcE8xeHVYRzRnSUdsbUlDaHdZWFJvTG14bGJtZDBhRDA5UFRBZ0ppWWdZMjl0YldWdWRITXVjaWxjYmlBZ0lDQnpaWFJEYjIxdFpXNTBjeTV5UFZ0amIyMXRaVzUwY3k1eUxtSXNJR052YlcxbGJuUnpMbkl1WVYwN1hHNWNiaUFnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWRHOVRkSEpwYm1jdVlYQndiSGtvZG1Gc2RXVXBJRDA5UFNBblcyOWlhbVZqZENCQmNuSmhlVjBuS1NCN1hHNGdJQ0FnYzJWMFEyOXRiV1Z1ZEhNdVlUMWJYVHRjYmlBZ0lDQm1iM0lnS0drOU1Dd2diR1Z1WjNSb1BTaGpiMjF0Wlc1MGN5NWhmSHhiWFNrdWJHVnVaM1JvT3lCcFBHeGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdJQ0IyWVhJZ2EzQmhkR2c5Y0dGMGFDNXpiR2xqWlNncExtTnZibU5oZENoYmFWMHBPMXh1SUNBZ0lDQWdkbUZ5SUdNOVkyOXRiV1Z1ZEhNdVlWdHBYVHRjYmlBZ0lDQWdJR2xtSUNnaFl5a2dZMjl1ZEdsdWRXVTdYRzRnSUNBZ0lDQnBaaUFvYVR4MllXeDFaUzVzWlc1bmRHZ3BJSHRjYmlBZ0lDQWdJQ0FnYzJWMFEyOXRiV1Z1ZEhNdVlTNXdkWE5vS0Z0akxtSXNJR011WVYwcE8xeHVJQ0FnSUNBZ0lDQnRaWEpuWlNoakxuZ3NJSFpoYkhWbFcybGRMQ0JrY205d2NHVmtMQ0JyY0dGMGFDazdYRzRnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQmtjbTl3Y0dWa0xuQjFjMmdvWkhKdmNIQmxaRU52YlcxbGJuUW9hM0JoZEdnc0lHTXBLVHRjYmlBZ0lDQWdJQ0FnWkhKdmNFRnNiQ2hqTG5nc0lHUnliM0J3WldRc0lHdHdZWFJvS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lDQWdhV1lnS0drOVBUMHdJQ1ltSUdOdmJXMWxiblJ6TG1VcElITmxkRU52YlcxbGJuUnpMbVU5VzJOdmJXMWxiblJ6TG1VdVlpd2dZMjl0YldWdWRITXVaUzVoWFR0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCelpYUkRiMjF0Wlc1MGN5NWpQWHQ5TzF4dUlDQWdJSE5sZEVOdmJXMWxiblJ6TG04OVcxMDdYRzRnSUNBZ0tHTnZiVzFsYm5SekxtOThmRnRkS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1S0d0bGVTa2dlMXh1SUNBZ0lDQWdkbUZ5SUd0d1lYUm9QWEJoZEdndWMyeHBZMlVvS1M1amIyNWpZWFFvVzJ0bGVWMHBPMXh1SUNBZ0lDQWdkbUZ5SUdNOVkyOXRiV1Z1ZEhNdWMxdHJaWGxkTzF4dUlDQWdJQ0FnYVdZZ0tFOWlhbVZqZEM1d2NtOTBiM1I1Y0dVdWFHRnpUM2R1VUhKdmNHVnlkSGt1WTJGc2JDaDJZV3gxWlN3Z2EyVjVLU2tnZTF4dUlDQWdJQ0FnSUNCelpYUkRiMjF0Wlc1MGN5NXZMbkIxYzJnb2EyVjVLVHRjYmlBZ0lDQWdJQ0FnYVdZZ0tHTXBJSHRjYmlBZ0lDQWdJQ0FnSUNCelpYUkRiMjF0Wlc1MGN5NWpXMnRsZVYwOVcyTXVZaXdnWXk1aFhUdGNiaUFnSUNBZ0lDQWdJQ0J0WlhKblpTaGpMbmdzSUhaaGJIVmxXMnRsZVYwc0lHUnliM0J3WldRc0lHdHdZWFJvS1R0Y2JpQWdJQ0FnSUNBZ2ZWeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGpLU0I3WEc0Z0lDQWdJQ0FnSUdSeWIzQndaV1F1Y0hWemFDaGtjbTl3Y0dWa1EyOXRiV1Z1ZENocmNHRjBhQ3dnWXlrcE8xeHVJQ0FnSUNBZ0lDQmtjbTl3UVd4c0tHTXVlQ3dnWkhKdmNIQmxaQ3dnYTNCaGRHZ3BPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMHBPMXh1SUNBZ0lHbG1JQ2hqYjIxdFpXNTBjeTVsS1NCelpYUkRiMjF0Wlc1MGN5NWxQVnRqYjIxdFpXNTBjeTVsTG1Jc0lHTnZiVzFsYm5SekxtVXVZVjA3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z2NtOXZkRU52YlcxbGJuUW9kbUZzZFdVc0lITmxkRlJsZUhRc0lHaGxZV1JsY2lrZ2UxeHVJQ0IyWVhJZ1kyOXRiV1Z1ZEQxamIyMXRiMjR1WTNKbFlYUmxRMjl0YldWdWRDaDJZV3gxWlN3Z1kyOXRiVzl1TG1kbGRFTnZiVzFsYm5Rb2RtRnNkV1VwS1R0Y2JpQWdhV1lnS0NGamIyMXRaVzUwTG5JcElHTnZiVzFsYm5RdWNqMWJYQ0pjSWl3Z1hDSmNJbDA3WEc0Z0lHbG1JQ2h6WlhSVVpYaDBJSHg4SUhObGRGUmxlSFE5UFQxY0lsd2lLU0JqYjIxdFpXNTBMbkpiYUdWaFpHVnlYVDFqYjIxdGIyNHVabTl5WTJWRGIyMXRaVzUwS0hObGRGUmxlSFFwTzF4dUlDQnlaWFIxY200Z1kyOXRiV1Z1ZEM1eVcyaGxZV1JsY2wxOGZGd2lYQ0k3WEc1OVhHNWNibTF2WkhWc1pTNWxlSEJ2Y25SelBYdGNiaUFnWlhoMGNtRmpkRG9nWm5WdVkzUnBiMjRvZG1Gc2RXVXBJSHNnY21WMGRYSnVJR1Y0ZEhKaFkzUkRiMjF0Wlc1MGN5aDJZV3gxWlN3Z2RISjFaU2s3SUgwc1hHNGdJRzFsY21kbE9pQnRaWEpuWlVOdmJXMWxiblJ6TEZ4dUlDQm9aV0ZrWlhJNklHWjFibU4wYVc5dUtIWmhiSFZsTENCelpYUlVaWGgwS1NCN0lISmxkSFZ5YmlCeWIyOTBRMjl0YldWdWRDaDJZV3gxWlN3Z2MyVjBWR1Y0ZEN3Z01DazdJSDBzWEc0Z0lHWnZiM1JsY2pvZ1puVnVZM1JwYjI0b2RtRnNkV1VzSUhObGRGUmxlSFFwSUhzZ2NtVjBkWEp1SUhKdmIzUkRiMjF0Wlc1MEtIWmhiSFZsTENCelpYUlVaWGgwTENBeEtUc2dmU3hjYm4wN1hHNWNibHh1WEc0dktpb3FLaW9xS2lvcUtpb3FLaW9xS2lwY2JpQXFLaUJYUlVKUVFVTkxJRVpQVDFSRlVseHVJQ29xSUM0dmZpOW9hbk52Ymk5c2FXSXZhR3B6YjI0dFkyOXRiV1Z1ZEhNdWFuTmNiaUFxS2lCdGIyUjFiR1VnYVdRZ1BTQXhObHh1SUNvcUlHMXZaSFZzWlNCamFIVnVhM01nUFNBd1hHNGdLaW92SWwwc0luTnZkWEpqWlZKdmIzUWlPaUlpZlE9PVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9NTWFwQmFzZUNsYXNzL2Rpc3QvYnVuZGxlLmpzXG4vLyBtb2R1bGUgaWQgPSAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIGltcG9ydCAkIGZyb20gXCJqUXVlcnlcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIkRpYWxvZ1wiO1xuXG5sZXQgJCA9IGpRdWVyeTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdDU01EaWFsb2codGl0bGUsICRib2R5LCBvcHRpb25zPXt9KSB7XG5cdGxldCAkZCA9IG5ldyBEaWFsb2coe1xuXHRcdGlkOiBvcHRpb25zLmRpYWxvZ0lkIHx8IHVuZGVmaW5lZCxcblx0XHRyZXNpemFibGU6IG9wdGlvbnMucmVzaXphYmxlIHx8IGZhbHNlLFxuXHRcdHRpdGxlOiB0aXRsZVxuXHR9KTtcblx0JGQuXyRkaWFsb2dDb250ZW50LmFwcGVuZCggJGJvZHkgKTtcblx0cmV0dXJuICRkO1xuXG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRyYXdCb290c3RyYXBEaWFsb2codGl0bGUsIGJvZHlDb250ZW50LCBmb290ZXJDb250ZW50LCBvcHRpb25zPXt9KSB7XG5cdHZhciAkZCA9ICQoXG5cdFx0JzxkaXYgY2xhc3M9XCJtb2RhbCBmYWRlXCI+PGRpdiBjbGFzcz1cIm1vZGFsLWRpYWxvZ1wiPlxcXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxcXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtb2RhbC1oZWFkZXJcIj5cXFxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj4nK1xuXHRcdFx0XHRcdCh0aXRsZS5zZWFyY2goLzwvZykgPT09IC0xID8gJzxoNCBjbGFzcz1cIm1vZGFsLXRpdGxlXCI+Jyt0aXRsZSsnPC9oND4nIDogdGl0bGUpICsgXG5cdFx0XHRcdCc8L2Rpdj5cXFxuXHRcdFx0PGRpdiBjbGFzcz1cIm1vZGFsLWJvZHlcIj48L2Rpdj5cXFxuXHRcdDwvZGl2Pidcblx0KTtcblx0JGQuZmluZChcIi5tb2RhbC1ib2R5XCIpLmFwcGVuZChib2R5Q29udGVudCk7XG5cdGlmIChmb290ZXJDb250ZW50KSB7XG5cdFx0dmFyIGZvb3RlciA9ICQoJzxkaXYgY2xhc3M9XCJtb2RhbC1mb290ZXJcIj48L2Rpdj4nKTtcblx0XHQkZC5maW5kKFwiLm1vZGFsLWJvZHlcIikuYWZ0ZXIoZm9vdGVyKTtcblx0XHRmb290ZXIuYXBwZW5kKGZvb3RlckNvbnRlbnQpO1xuXHR9XG5cdFxuXHRpZiAob3B0aW9ucy5zaXplKSB7XG5cdFx0Ly8gJGQuYWRkQ2xhc3MoXCJtb2RhbC1cIitvcHRpb25zLnNpemUpO1xuXHRcdCRkLmZpbmQoXCIubW9kYWwtZGlhbG9nXCIpLmFkZENsYXNzKFwibW9kYWwtXCIrb3B0aW9ucy5zaXplKTtcblx0fVxuXHRcblx0cmV0dXJuICRkO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy91dGlscy5qcyIsIm1vZHVsZS5leHBvcnRzID0gRGlhbG9nO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiRGlhbG9nXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==