webpackJsonp([114276838955818,60335399758886],{

/***/ 107:
/***/ (function(module, exports) {

	module.exports = {"data":{"site":{"siteMetadata":{"name":"Cookoon","title":"Recevons partout !","description":"Une communauté exclusive pour recevoir et partager","keywords":"cookoon, recevons, partout, communauté, exclusive, recevoir, partager","siteUrl":"https://cookoon.fr","twitter":"@cookoon"}}},"layoutContext":{}}

/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _index = __webpack_require__(205);
	
	var _index2 = _interopRequireDefault(_index);
	
	var _layoutIndex = __webpack_require__(107);
	
	var _layoutIndex2 = _interopRequireDefault(_layoutIndex);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (props) {
	  return _react2.default.createElement(_index2.default, _extends({}, props, _layoutIndex2.default));
	};
	
	module.exports = exports["default"];

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */
	
	(function () {
		'use strict';
	
		var hasOwn = {}.hasOwnProperty;
	
		function classNames () {
			var classes = [];
	
			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;
	
				var argType = typeof arg;
	
				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}
	
			return classes.join(' ');
		}
	
		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ }),

/***/ 347:
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/**
	 * Lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright JS Foundation and other contributors <https://js.foundation/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** `Object#toString` result references. */
	var asyncTag = '[object AsyncFunction]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    nullTag = '[object Null]',
	    proxyTag = '[object Proxy]',
	    undefinedTag = '[object Undefined]';
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
	
	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var nativeObjectToString = objectProto.toString;
	
	/** Built-in value references. */
	var Symbol = root.Symbol,
	    symToStringTag = Symbol ? Symbol.toStringTag : undefined;
	
	/**
	 * The base implementation of `getTag` without fallbacks for buggy environments.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  if (value == null) {
	    return value === undefined ? undefinedTag : nullTag;
	  }
	  return (symToStringTag && symToStringTag in Object(value))
	    ? getRawTag(value)
	    : objectToString(value);
	}
	
	/**
	 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the raw `toStringTag`.
	 */
	function getRawTag(value) {
	  var isOwn = hasOwnProperty.call(value, symToStringTag),
	      tag = value[symToStringTag];
	
	  try {
	    value[symToStringTag] = undefined;
	    var unmasked = true;
	  } catch (e) {}
	
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
	
	/**
	 * Converts `value` to a string using `Object.prototype.toString`.
	 *
	 * @private
	 * @param {*} value The value to convert.
	 * @returns {string} Returns the converted string.
	 */
	function objectToString(value) {
	  return nativeObjectToString.call(value);
	}
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 9 which returns 'object' for typed arrays and other constructors.
	  var tag = baseGetTag(value);
	  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
	}
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return value != null && (type == 'object' || type == 'function');
	}
	
	module.exports = isFunction;
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

	/**
	 * lodash 3.0.2 (Custom Build) <https://lodash.com/>
	 * Build: `lodash modern modularize exports="npm" -o ./`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	
	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;


/***/ }),

/***/ 349:
/***/ (function(module, exports) {

	/**
	 * lodash (Custom Build) <https://lodash.com/>
	 * Build: `lodash modularize exports="npm" -o ./`
	 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
	 * Released under MIT license <https://lodash.com/license>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 */
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}
	
	module.exports = toNumber;


/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	var react = __webpack_require__(1);
	var reactDom = __webpack_require__(19);
	
	function _inheritsLoose(subClass, superClass) {
	  subClass.prototype = Object.create(superClass.prototype);
	  subClass.prototype.constructor = subClass;
	  subClass.__proto__ = superClass;
	}
	
	function _objectWithoutProperties(source, excluded) {
	  if (source == null) return {};
	  var target = {};
	  var sourceKeys = Object.keys(source);
	  var key, i;
	
	  for (i = 0; i < sourceKeys.length; i++) {
	    key = sourceKeys[i];
	    if (excluded.indexOf(key) >= 0) continue;
	    target[key] = source[key];
	  }
	
	  if (Object.getOwnPropertySymbols) {
	    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
	
	    for (i = 0; i < sourceSymbolKeys.length; i++) {
	      key = sourceSymbolKeys[i];
	      if (excluded.indexOf(key) >= 0) continue;
	      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
	      target[key] = source[key];
	    }
	  }
	
	  return target;
	}
	
	/**
	 * Check whether some DOM node is our Component's node.
	 */
	function isNodeFound(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // SVG <use/> elements do not technically reside in the rendered DOM, so
	  // they do not have classList directly, but they offer a link to their
	  // corresponding element, which can have classList. This extra check is for
	  // that case.
	  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
	  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17
	
	
	  if (current.correspondingElement) {
	    return current.correspondingElement.classList.contains(ignoreClass);
	  }
	
	  return current.classList.contains(ignoreClass);
	}
	/**
	 * Try to find our node in a hierarchy of nodes, returning the document
	 * node as highest node if our node is not found in the path up.
	 */
	
	function findHighest(current, componentNode, ignoreClass) {
	  if (current === componentNode) {
	    return true;
	  } // If source=local then this event came from 'somewhere'
	  // inside and should be ignored. We could handle this with
	  // a layered approach, too, but that requires going back to
	  // thinking in terms of Dom node nesting, running counter
	  // to React's 'you shouldn't care about the DOM' philosophy.
	
	
	  while (current.parentNode) {
	    if (isNodeFound(current, componentNode, ignoreClass)) {
	      return true;
	    }
	
	    current = current.parentNode;
	  }
	
	  return current;
	}
	/**
	 * Check if the browser scrollbar was clicked
	 */
	
	function clickedScrollbar(evt) {
	  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
	}
	
	// ideally will get replaced with external dep
	// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
	var testPassiveEventSupport = function testPassiveEventSupport() {
	  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
	    return;
	  }
	
	  var passive = false;
	  var options = Object.defineProperty({}, 'passive', {
	    get: function get() {
	      passive = true;
	    }
	  });
	
	  var noop = function noop() {};
	
	  window.addEventListener('testPassiveEventSupport', noop, options);
	  window.removeEventListener('testPassiveEventSupport', noop, options);
	  return passive;
	};
	
	function autoInc(seed) {
	  if (seed === void 0) {
	    seed = 0;
	  }
	
	  return function () {
	    return ++seed;
	  };
	}
	
	var uid = autoInc();
	
	var passiveEventSupport;
	var handlersMap = {};
	var enabledInstances = {};
	var touchEvents = ['touchstart', 'touchmove'];
	var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
	/**
	 * Options for addEventHandler and removeEventHandler
	 */
	
	function getEventHandlerOptions(instance, eventName) {
	  var handlerOptions = null;
	  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;
	
	  if (isTouchEvent && passiveEventSupport) {
	    handlerOptions = {
	      passive: !instance.props.preventDefault
	    };
	  }
	
	  return handlerOptions;
	}
	/**
	 * This function generates the HOC function that you'll use
	 * in order to impart onOutsideClick listening to an
	 * arbitrary component. It gets called at the end of the
	 * bootstrapping code to yield an instance of the
	 * onClickOutsideHOC function defined inside setupHOC().
	 */
	
	
	function onClickOutsideHOC(WrappedComponent, config) {
	  var _class, _temp;
	
	  return _temp = _class =
	  /*#__PURE__*/
	  function (_Component) {
	    _inheritsLoose(onClickOutside, _Component);
	
	    function onClickOutside(props) {
	      var _this;
	
	      _this = _Component.call(this, props) || this;
	
	      _this.__outsideClickHandler = function (event) {
	        if (typeof _this.__clickOutsideHandlerProp === 'function') {
	          _this.__clickOutsideHandlerProp(event);
	
	          return;
	        }
	
	        var instance = _this.getInstance();
	
	        if (typeof instance.props.handleClickOutside === 'function') {
	          instance.props.handleClickOutside(event);
	          return;
	        }
	
	        if (typeof instance.handleClickOutside === 'function') {
	          instance.handleClickOutside(event);
	          return;
	        }
	
	        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
	      };
	
	      _this.enableOnClickOutside = function () {
	        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
	          return;
	        }
	
	        if (typeof passiveEventSupport === 'undefined') {
	          passiveEventSupport = testPassiveEventSupport();
	        }
	
	        enabledInstances[_this._uid] = true;
	        var events = _this.props.eventTypes;
	
	        if (!events.forEach) {
	          events = [events];
	        }
	
	        handlersMap[_this._uid] = function (event) {
	          if (_this.props.disableOnClickOutside) return;
	          if (_this.componentNode === null) return;
	
	          if (_this.props.preventDefault) {
	            event.preventDefault();
	          }
	
	          if (_this.props.stopPropagation) {
	            event.stopPropagation();
	          }
	
	          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
	          var current = event.target;
	
	          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
	            return;
	          }
	
	          _this.__outsideClickHandler(event);
	        };
	
	        events.forEach(function (eventName) {
	          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
	        });
	      };
	
	      _this.disableOnClickOutside = function () {
	        delete enabledInstances[_this._uid];
	        var fn = handlersMap[_this._uid];
	
	        if (fn && typeof document !== 'undefined') {
	          var events = _this.props.eventTypes;
	
	          if (!events.forEach) {
	            events = [events];
	          }
	
	          events.forEach(function (eventName) {
	            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
	          });
	          delete handlersMap[_this._uid];
	        }
	      };
	
	      _this.getRef = function (ref) {
	        return _this.instanceRef = ref;
	      };
	
	      _this._uid = uid();
	      return _this;
	    }
	    /**
	     * Access the WrappedComponent's instance.
	     */
	
	
	    var _proto = onClickOutside.prototype;
	
	    _proto.getInstance = function getInstance() {
	      if (!WrappedComponent.prototype.isReactComponent) {
	        return this;
	      }
	
	      var ref = this.instanceRef;
	      return ref.getInstance ? ref.getInstance() : ref;
	    };
	
	    /**
	     * Add click listeners to the current document,
	     * linked to this component's state.
	     */
	    _proto.componentDidMount = function componentDidMount() {
	      // If we are in an environment without a DOM such
	      // as shallow rendering or snapshots then we exit
	      // early to prevent any unhandled errors being thrown.
	      if (typeof document === 'undefined' || !document.createElement) {
	        return;
	      }
	
	      var instance = this.getInstance();
	
	      if (config && typeof config.handleClickOutside === 'function') {
	        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);
	
	        if (typeof this.__clickOutsideHandlerProp !== 'function') {
	          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
	        }
	      }
	
	      this.componentNode = reactDom.findDOMNode(this.getInstance());
	      this.enableOnClickOutside();
	    };
	
	    _proto.componentDidUpdate = function componentDidUpdate() {
	      this.componentNode = reactDom.findDOMNode(this.getInstance());
	    };
	    /**
	     * Remove all document's event listeners for this component
	     */
	
	
	    _proto.componentWillUnmount = function componentWillUnmount() {
	      this.disableOnClickOutside();
	    };
	    /**
	     * Can be called to explicitly enable event listening
	     * for clicks and touches outside of this element.
	     */
	
	
	    /**
	     * Pass-through render
	     */
	    _proto.render = function render() {
	      // eslint-disable-next-line no-unused-vars
	      var _props = this.props,
	          excludeScrollbar = _props.excludeScrollbar,
	          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);
	
	      if (WrappedComponent.prototype.isReactComponent) {
	        props.ref = this.getRef;
	      } else {
	        props.wrappedRef = this.getRef;
	      }
	
	      props.disableOnClickOutside = this.disableOnClickOutside;
	      props.enableOnClickOutside = this.enableOnClickOutside;
	      return react.createElement(WrappedComponent, props);
	    };
	
	    return onClickOutside;
	  }(react.Component), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
	    eventTypes: ['mousedown', 'touchstart'],
	    excludeScrollbar: config && config.excludeScrollbar || false,
	    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
	    preventDefault: false,
	    stopPropagation: false
	  }, _class.getClass = function () {
	    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
	  }, _temp;
	}
	
	exports.IGNORE_CLASS_NAME = IGNORE_CLASS_NAME;
	exports['default'] = onClickOutsideHOC;


/***/ }),

/***/ 421:
/***/ (function(module, exports) {

	export { default as Manager } from './Manager';
	export { default as Target } from './Target';
	export { default as Popper } from './Popper';
	export { default as Arrow } from './Arrow';

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(19);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // This file is a fallback for a consumer who is not yet on React 16
	// as createPortal was introduced in React 16
	
	var Portal = function (_React$Component) {
	  _inherits(Portal, _React$Component);
	
	  function Portal() {
	    _classCallCheck(this, Portal);
	
	    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }
	
	  _createClass(Portal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.renderPortal();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(props) {
	      this.renderPortal();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.defaultNode) {
	        document.body.removeChild(this.defaultNode);
	      } else {
	        // Unmount the children rendered in custom node
	        _reactDom2.default.unmountComponentAtNode(this.props.node);
	      }
	      this.defaultNode = null;
	      this.portal = null;
	    }
	  }, {
	    key: 'renderPortal',
	    value: function renderPortal(props) {
	      if (!this.props.node && !this.defaultNode) {
	        this.defaultNode = document.createElement('div');
	        document.body.appendChild(this.defaultNode);
	      }
	
	      var children = this.props.children;
	      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
	      if (typeof this.props.children.type === 'function') {
	        children = _react2.default.cloneElement(this.props.children);
	      }
	
	      this.portal = _reactDom2.default.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return null;
	    }
	  }]);
	
	  return Portal;
	}(_react2.default.Component);
	
	exports.default = Portal;
	
	
	Portal.propTypes = {
	  children: _propTypes2.default.node.isRequired,
	  node: _propTypes2.default.any
	};

/***/ }),

/***/ 423:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactDom = __webpack_require__(19);
	
	var _utils = __webpack_require__(426);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Portal = function (_React$Component) {
	  _inherits(Portal, _React$Component);
	
	  function Portal() {
	    _classCallCheck(this, Portal);
	
	    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
	  }
	
	  _createClass(Portal, [{
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.defaultNode) {
	        document.body.removeChild(this.defaultNode);
	      }
	      this.defaultNode = null;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!_utils.canUseDOM) {
	        return null;
	      }
	      if (!this.props.node && !this.defaultNode) {
	        this.defaultNode = document.createElement('div');
	        document.body.appendChild(this.defaultNode);
	      }
	      return (0, _reactDom.createPortal)(this.props.children, this.props.node || this.defaultNode);
	    }
	  }]);
	
	  return Portal;
	}(_react2.default.Component);
	
	Portal.propTypes = {
	  children: _propTypes2.default.node.isRequired,
	  node: _propTypes2.default.any
	};
	
	exports.default = Portal;

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reactDom = __webpack_require__(19);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _Portal = __webpack_require__(423);
	
	var _Portal2 = _interopRequireDefault(_Portal);
	
	var _LegacyPortal = __webpack_require__(422);
	
	var _LegacyPortal2 = _interopRequireDefault(_LegacyPortal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Portal = void 0;
	
	if (_reactDom2.default.createPortal) {
	  Portal = _Portal2.default;
	} else {
	  Portal = _LegacyPortal2.default;
	}
	
	exports.default = Portal;

/***/ }),

/***/ 424:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _PortalCompat = __webpack_require__(185);
	
	var _PortalCompat2 = _interopRequireDefault(_PortalCompat);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var KEYCODES = {
	  ESCAPE: 27
	};
	
	var PortalWithState = function (_React$Component) {
	  _inherits(PortalWithState, _React$Component);
	
	  function PortalWithState(props) {
	    _classCallCheck(this, PortalWithState);
	
	    var _this = _possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));
	
	    _this.portalNode = null;
	    _this.state = { active: !!props.defaultOpen };
	    _this.openPortal = _this.openPortal.bind(_this);
	    _this.closePortal = _this.closePortal.bind(_this);
	    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
	    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
	    _this.handleKeydown = _this.handleKeydown.bind(_this);
	    return _this;
	  }
	
	  _createClass(PortalWithState, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.closeOnEsc) {
	        document.addEventListener('keydown', this.handleKeydown);
	      }
	      if (this.props.closeOnOutsideClick) {
	        document.addEventListener('click', this.handleOutsideMouseClick);
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.closeOnEsc) {
	        document.removeEventListener('keydown', this.handleKeydown);
	      }
	      if (this.props.closeOnOutsideClick) {
	        document.removeEventListener('click', this.handleOutsideMouseClick);
	      }
	    }
	  }, {
	    key: 'openPortal',
	    value: function openPortal(e) {
	      if (this.state.active) {
	        return;
	      }
	      if (e && e.nativeEvent) {
	        e.nativeEvent.stopImmediatePropagation();
	      }
	      this.setState({ active: true }, this.props.onOpen);
	    }
	  }, {
	    key: 'closePortal',
	    value: function closePortal() {
	      if (!this.state.active) {
	        return;
	      }
	      this.setState({ active: false }, this.props.onClose);
	    }
	  }, {
	    key: 'wrapWithPortal',
	    value: function wrapWithPortal(children) {
	      var _this2 = this;
	
	      if (!this.state.active) {
	        return null;
	      }
	      return _react2.default.createElement(
	        _PortalCompat2.default,
	        {
	          node: this.props.node,
	          key: 'react-portal',
	          ref: function ref(portalNode) {
	            return _this2.portalNode = portalNode;
	          }
	        },
	        children
	      );
	    }
	  }, {
	    key: 'handleOutsideMouseClick',
	    value: function handleOutsideMouseClick(e) {
	      if (!this.state.active) {
	        return;
	      }
	      var root = this.portalNode.props.node || this.portalNode.defaultNode;
	      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
	        return;
	      }
	      this.closePortal();
	    }
	  }, {
	    key: 'handleKeydown',
	    value: function handleKeydown(e) {
	      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
	        this.closePortal();
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return this.props.children({
	        openPortal: this.openPortal,
	        closePortal: this.closePortal,
	        portal: this.wrapWithPortal,
	        isOpen: this.state.active
	      });
	    }
	  }]);
	
	  return PortalWithState;
	}(_react2.default.Component);
	
	PortalWithState.propTypes = {
	  children: _propTypes2.default.func.isRequired,
	  defaultOpen: _propTypes2.default.bool,
	  node: _propTypes2.default.any,
	  openByClickOn: _propTypes2.default.element,
	  closeOnEsc: _propTypes2.default.bool,
	  closeOnOutsideClick: _propTypes2.default.bool,
	  onOpen: _propTypes2.default.func,
	  onClose: _propTypes2.default.func
	};
	
	PortalWithState.defaultProps = {
	  onOpen: function onOpen() {},
	  onClose: function onClose() {}
	};
	
	exports.default = PortalWithState;

/***/ }),

/***/ 425:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.PortalWithState = exports.Portal = undefined;
	
	var _PortalCompat = __webpack_require__(185);
	
	var _PortalCompat2 = _interopRequireDefault(_PortalCompat);
	
	var _PortalWithState = __webpack_require__(424);
	
	var _PortalWithState2 = _interopRequireDefault(_PortalWithState);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.Portal = _PortalCompat2.default;
	exports.PortalWithState = _PortalWithState2.default;

/***/ }),

/***/ 426:
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var canUseDOM = exports.canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', { value: true });
	
	function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }
	
	var React = __webpack_require__(1);
	var React__default = _interopDefault(React);
	var PropTypes = _interopDefault(__webpack_require__(6));
	var classNames = _interopDefault(__webpack_require__(130));
	var isFunction = _interopDefault(__webpack_require__(347));
	var isobject = _interopDefault(__webpack_require__(348));
	var ReactDOM = _interopDefault(__webpack_require__(19));
	var reactPopper = __webpack_require__(421);
	var toNumber = _interopDefault(__webpack_require__(349));
	var reactPortal = __webpack_require__(425);
	
	// https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/js/src/modal.js#L436-L443
	function getScrollbarWidth() {
	  var scrollDiv = document.createElement('div');
	  // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113
	  scrollDiv.style.position = 'absolute';
	  scrollDiv.style.top = '-9999px';
	  scrollDiv.style.width = '50px';
	  scrollDiv.style.height = '50px';
	  scrollDiv.style.overflow = 'scroll';
	  document.body.appendChild(scrollDiv);
	  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
	  document.body.removeChild(scrollDiv);
	  return scrollbarWidth;
	}
	
	function setScrollbarWidth(padding) {
	  document.body.style.paddingRight = padding > 0 ? padding + 'px' : null;
	}
	
	function isBodyOverflowing() {
	  return document.body.clientWidth < window.innerWidth;
	}
	
	function getOriginalBodyPadding() {
	  var style = window.getComputedStyle(document.body, null);
	
	  return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
	}
	
	function conditionallyUpdateScrollbar() {
	  var scrollbarWidth = getScrollbarWidth();
	  // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433
	  var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
	  var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;
	
	  if (isBodyOverflowing()) {
	    setScrollbarWidth(bodyPadding + scrollbarWidth);
	  }
	}
	
	var globalCssModule = void 0;
	
	function setGlobalCssModule(cssModule) {
	  globalCssModule = cssModule;
	}
	
	function mapToCssModules() {
	  var className = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
	  var cssModule = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : globalCssModule;
	
	  if (!cssModule) return className;
	  return className.split(' ').map(function (c) {
	    return cssModule[c] || c;
	  }).join(' ');
	}
	
	/**
	 * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
	 */
	function omit(obj, omitKeys) {
	  var result = {};
	  Object.keys(obj).forEach(function (key) {
	    if (omitKeys.indexOf(key) === -1) {
	      result[key] = obj[key];
	    }
	  });
	  return result;
	}
	
	/**
	 * Returns a filtered copy of an object with only the specified keys.
	 */
	function pick(obj, keys) {
	  var pickKeys = Array.isArray(keys) ? keys : [keys];
	  var length = pickKeys.length;
	  var key = void 0;
	  var result = {};
	
	  while (length > 0) {
	    length -= 1;
	    key = pickKeys[length];
	    result[key] = obj[key];
	  }
	  return result;
	}
	
	var warned = {};
	
	function warnOnce(message) {
	  if (!warned[message]) {
	    /* istanbul ignore else */
	    if (typeof console !== 'undefined') {
	      console.error(message); // eslint-disable-line no-console
	    }
	    warned[message] = true;
	  }
	}
	
	function deprecated(propType, explanation) {
	  return function validate(props, propName, componentName) {
	    if (props[propName] !== null && typeof props[propName] !== 'undefined') {
	      warnOnce('"' + propName + '" property of "' + componentName + '" has been deprecated.\n' + explanation);
	    }
	
	    for (var _len = arguments.length, rest = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
	      rest[_key - 3] = arguments[_key];
	    }
	
	    return propType.apply(undefined, [props, propName, componentName].concat(rest));
	  };
	}
	
	function DOMElement(props, propName, componentName) {
	  if (!(props[propName] instanceof Element)) {
	    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
	  }
	}
	
	function getTarget(target) {
	  if (isFunction(target)) {
	    return target();
	  }
	
	  if (typeof target === 'string' && document) {
	    var selection = document.querySelector(target);
	    if (selection === null) {
	      selection = document.querySelector('#' + target);
	    }
	    if (selection === null) {
	      throw new Error('The target \'' + target + '\' could not be identified in the dom, tip: check spelling');
	    }
	    return selection;
	  }
	
	  return target;
	}
	
	/* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
	// These are all setup to match what is in the bootstrap _variables.scss
	// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss
	var TransitionTimeouts = {
	  Fade: 150, // $transition-fade
	  Collapse: 350, // $transition-collapse
	  Modal: 300, // $modal-transition
	  Carousel: 600 // $carousel-transition
	};
	
	// Duplicated Transition.propType keys to ensure that Reactstrap builds
	// for distribution properly exclude these keys for nested child HTML attributes
	// since `react-transition-group` removes propTypes in production builds.
	var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
	
	var TransitionStatuses = {
	  ENTERING: 'entering',
	  ENTERED: 'entered',
	  EXITING: 'exiting',
	  EXITED: 'exited'
	};
	
	var keyCodes = {
	  esc: 27,
	  space: 32,
	  tab: 9,
	  up: 38,
	  down: 40
	};
	
	var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
	
	var utils = Object.freeze({
		getScrollbarWidth: getScrollbarWidth,
		setScrollbarWidth: setScrollbarWidth,
		isBodyOverflowing: isBodyOverflowing,
		getOriginalBodyPadding: getOriginalBodyPadding,
		conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
		setGlobalCssModule: setGlobalCssModule,
		mapToCssModules: mapToCssModules,
		omit: omit,
		pick: pick,
		warnOnce: warnOnce,
		deprecated: deprecated,
		DOMElement: DOMElement,
		getTarget: getTarget,
		TransitionTimeouts: TransitionTimeouts,
		TransitionPropTypeKeys: TransitionPropTypeKeys,
		TransitionStatuses: TransitionStatuses,
		keyCodes: keyCodes,
		PopperPlacements: PopperPlacements
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
	  return typeof obj;
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	};
	
	
	
	
	
	
	
	
	
	
	
	var classCallCheck = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};
	
	var createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }
	
	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	}();
	
	
	
	
	
	var defineProperty = function (obj, key, value) {
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
	};
	
	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];
	
	    for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }
	
	  return target;
	};
	
	
	
	var inherits = function (subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	  }
	
	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      enumerable: false,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	};
	
	
	
	
	
	
	
	
	
	var objectWithoutProperties = function (obj, keys) {
	  var target = {};
	
	  for (var i in obj) {
	    if (keys.indexOf(i) >= 0) continue;
	    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
	    target[i] = obj[i];
	  }
	
	  return target;
	};
	
	var possibleConstructorReturn = function (self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }
	
	  return call && (typeof call === "object" || typeof call === "function") ? call : self;
	};
	
	var propTypes = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps = {
	  tag: 'div'
	};
	
	var Container = function Container(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      fluid = props.fluid,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'fluid', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, fluid ? 'container-fluid' : 'container'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Container.propTypes = propTypes;
	Container.defaultProps = defaultProps;
	
	var propTypes$1 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  noGutters: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$1 = {
	  tag: 'div'
	};
	
	var Row = function Row(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      noGutters = props.noGutters,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'noGutters', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, noGutters ? 'no-gutters' : null, 'row'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Row.propTypes = propTypes$1;
	Row.defaultProps = defaultProps$1;
	
	var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
	var stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps = PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string, PropTypes.shape({
	  size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
	  push: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp, 'Please use the prop "order"'),
	  order: stringOrNumberProp,
	  offset: stringOrNumberProp
	})]);
	
	var propTypes$2 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  xs: columnProps,
	  sm: columnProps,
	  md: columnProps,
	  lg: columnProps,
	  xl: columnProps,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  widths: PropTypes.array
	};
	
	var defaultProps$2 = {
	  tag: 'div',
	  widths: colWidths
	};
	
	var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Col = function Col(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      widths = props.widths,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'widths', 'tag']);
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames)), cssModule));
	    } else {
	      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);
	      colClasses.push(_colClass);
	    }
	  });
	
	  if (!colClasses.length) {
	    colClasses.push('col');
	  }
	
	  var classes = mapToCssModules(classNames(className, colClasses), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Col.propTypes = propTypes$2;
	Col.defaultProps = defaultProps$2;
	
	var propTypes$3 = {
	  light: PropTypes.bool,
	  dark: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  full: PropTypes.bool,
	  fixed: PropTypes.string,
	  sticky: PropTypes.string,
	  color: PropTypes.string,
	  role: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggleable: deprecated(PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), 'Please use the prop "expand"'),
	  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
	};
	
	var defaultProps$3 = {
	  tag: 'nav',
	  expand: false
	};
	
	var getExpandClass = function getExpandClass(expand) {
	  if (expand === false) {
	    return false;
	  } else if (expand === true || expand === 'xs') {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + expand;
	};
	
	// To better maintain backwards compatibility while toggleable is deprecated.
	// We must map breakpoints to the next breakpoint so that toggleable and expand do the same things at the same breakpoint.
	var toggleableToExpand = {
	  xs: 'sm',
	  sm: 'md',
	  md: 'lg',
	  lg: 'xl'
	};
	
	var getToggleableClass = function getToggleableClass(toggleable) {
	  if (toggleable === undefined || toggleable === 'xl') {
	    return false;
	  } else if (toggleable === false) {
	    return 'navbar-expand';
	  }
	
	  return 'navbar-expand-' + (toggleable === true ? 'sm' : toggleableToExpand[toggleable] || toggleable);
	};
	
	var Navbar = function Navbar(props) {
	  var _classNames;
	
	  var toggleable = props.toggleable,
	      expand = props.expand,
	      className = props.className,
	      cssModule = props.cssModule,
	      light = props.light,
	      dark = props.dark,
	      inverse = props.inverse,
	      fixed = props.fixed,
	      sticky = props.sticky,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['toggleable', 'expand', 'className', 'cssModule', 'light', 'dark', 'inverse', 'fixed', 'sticky', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar', getExpandClass(expand) || getToggleableClass(toggleable), (_classNames = {
	    'navbar-light': light,
	    'navbar-dark': inverse || dark
	  }, defineProperty(_classNames, 'bg-' + color, color), defineProperty(_classNames, 'fixed-' + fixed, fixed), defineProperty(_classNames, 'sticky-' + sticky, sticky), _classNames)), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Navbar.propTypes = propTypes$3;
	Navbar.defaultProps = defaultProps$3;
	
	var propTypes$4 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$4 = {
	  tag: 'a'
	};
	
	var NavbarBrand = function NavbarBrand(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-brand'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavbarBrand.propTypes = propTypes$4;
	NavbarBrand.defaultProps = defaultProps$4;
	
	var propTypes$5 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  type: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node
	};
	
	var defaultProps$5 = {
	  tag: 'button',
	  type: 'button'
	};
	
	var NavbarToggler = function NavbarToggler(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'navbar-toggler'), cssModule);
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, { className: classes }),
	    children || React__default.createElement('span', { className: mapToCssModules('navbar-toggler-icon', cssModule) })
	  );
	};
	
	NavbarToggler.propTypes = propTypes$5;
	NavbarToggler.defaultProps = defaultProps$5;
	
	var propTypes$6 = {
	  tabs: PropTypes.bool,
	  pills: PropTypes.bool,
	  vertical: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  horizontal: PropTypes.string,
	  justified: PropTypes.bool,
	  fill: PropTypes.bool,
	  navbar: PropTypes.bool,
	  card: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$6 = {
	  tag: 'ul',
	  vertical: false
	};
	
	var getVerticalClass = function getVerticalClass(vertical) {
	  if (vertical === false) {
	    return false;
	  } else if (vertical === true || vertical === 'xs') {
	    return 'flex-column';
	  }
	
	  return 'flex-' + vertical + '-column';
	};
	
	var Nav = function Nav(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabs = props.tabs,
	      pills = props.pills,
	      vertical = props.vertical,
	      horizontal = props.horizontal,
	      justified = props.justified,
	      fill = props.fill,
	      navbar = props.navbar,
	      card = props.card,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabs', 'pills', 'vertical', 'horizontal', 'justified', 'fill', 'navbar', 'card', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? 'justify-content-' + horizontal : false, getVerticalClass(vertical), {
	    'nav-tabs': tabs,
	    'card-header-tabs': card && tabs,
	    'nav-pills': pills,
	    'card-header-pills': card && pills,
	    'nav-justified': justified,
	    'nav-fill': fill
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Nav.propTypes = propTypes$6;
	Nav.defaultProps = defaultProps$6;
	
	var propTypes$7 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$7 = {
	  tag: 'li'
	};
	
	var NavItem = function NavItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'nav-item', active ? 'active' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	NavItem.propTypes = propTypes$7;
	NavItem.defaultProps = defaultProps$7;
	
	/* eslint react/no-find-dom-node: 0 */
	// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
	
	var propTypes$8 = {
	  disabled: PropTypes.bool,
	  dropup: deprecated(PropTypes.bool, 'Please use the prop "direction" with the value "up".'),
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']),
	  group: PropTypes.bool,
	  isOpen: PropTypes.bool,
	  nav: PropTypes.bool,
	  addonType: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['prepend', 'append'])]),
	  size: PropTypes.string,
	  tag: PropTypes.string,
	  toggle: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  inNavbar: PropTypes.bool
	};
	
	var defaultProps$8 = {
	  isOpen: false,
	  direction: 'down',
	  nav: false,
	  addonType: false,
	  inNavbar: false
	};
	
	var childContextTypes = {
	  toggle: PropTypes.func.isRequired,
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var Dropdown = function (_React$Component) {
	  inherits(Dropdown, _React$Component);
	
	  function Dropdown(props) {
	    classCallCheck(this, Dropdown);
	
	    var _this = possibleConstructorReturn(this, (Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call(this, props));
	
	    _this.addEvents = _this.addEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.handleKeyDown = _this.handleKeyDown.bind(_this);
	    _this.removeEvents = _this.removeEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(Dropdown, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        toggle: this.props.toggle,
	        isOpen: this.props.isOpen,
	        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
	        inNavbar: this.props.inNavbar
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeEvents();
	    }
	  }, {
	    key: 'getContainer',
	    value: function getContainer() {
	      return ReactDOM.findDOMNode(this);
	    }
	  }, {
	    key: 'addEvents',
	    value: function addEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeEvents',
	    value: function removeEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart', 'keyup'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
	      var container = this.getContainer();
	
	      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
	        return;
	      }
	
	      this.toggle(e);
	    }
	  }, {
	    key: 'handleKeyDown',
	    value: function handleKeyDown(e) {
	      if ([keyCodes.esc, keyCodes.up, keyCodes.down, keyCodes.space].indexOf(e.which) === -1 || /button/i.test(e.target.tagName) && e.which === keyCodes.space || /input|textarea/i.test(e.target.tagName)) {
	        return;
	      }
	
	      e.preventDefault();
	      if (this.props.disabled) return;
	
	      var container = this.getContainer();
	
	      if (e.which === keyCodes.space && this.props.isOpen && container !== e.target) {
	        e.target.click();
	      }
	
	      if (e.which === keyCodes.esc || !this.props.isOpen) {
	        this.toggle(e);
	        container.querySelector('[aria-expanded]').focus();
	        return;
	      }
	
	      var menuClass = mapToCssModules('dropdown-menu', this.props.cssModule);
	      var itemClass = mapToCssModules('dropdown-item', this.props.cssModule);
	      var disabledClass = mapToCssModules('disabled', this.props.cssModule);
	
	      var items = container.querySelectorAll('.' + menuClass + ' .' + itemClass + ':not(.' + disabledClass + ')');
	
	      if (!items.length) return;
	
	      var index = -1;
	      for (var i = 0; i < items.length; i += 1) {
	        if (items[i] === e.target) {
	          index = i;
	          break;
	        }
	      }
	
	      if (e.which === keyCodes.up && index > 0) {
	        index -= 1;
	      }
	
	      if (e.which === keyCodes.down && index < items.length - 1) {
	        index += 1;
	      }
	
	      if (index < 0) {
	        index = 0;
	      }
	
	      items[index].focus();
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.addEvents();
	      } else {
	        this.removeEvents();
	      }
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _classNames;
	
	      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'direction']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          dropup = _omit.dropup,
	          isOpen = _omit.isOpen,
	          group = _omit.group,
	          size = _omit.size,
	          nav = _omit.nav,
	          addonType = _omit.addonType,
	          attrs = objectWithoutProperties(_omit, ['className', 'cssModule', 'dropup', 'isOpen', 'group', 'size', 'nav', 'addonType']);
	
	      var direction = this.props.direction === 'down' && dropup ? 'up' : this.props.direction;
	
	      attrs.tag = attrs.tag || (nav ? 'li' : 'div');
	
	      var classes = mapToCssModules(classNames(className, direction !== 'down' && 'drop' + direction, (_classNames = {}, defineProperty(_classNames, 'input-group-' + addonType, addonType), defineProperty(_classNames, 'btn-group', group), defineProperty(_classNames, 'btn-group-' + size, !!size), defineProperty(_classNames, 'dropdown', !group && !addonType), defineProperty(_classNames, 'show', isOpen), defineProperty(_classNames, 'nav-item', nav), _classNames)), cssModule);
	      return React__default.createElement(reactPopper.Manager, _extends({}, attrs, { className: classes, onKeyDown: this.handleKeyDown }));
	    }
	  }]);
	  return Dropdown;
	}(React__default.Component);
	
	Dropdown.propTypes = propTypes$8;
	Dropdown.defaultProps = defaultProps$8;
	Dropdown.childContextTypes = childContextTypes;
	
	function NavDropdown(props) {
	  warnOnce('The "NavDropdown" component has been deprecated.\nPlease use component "Dropdown" with nav prop.');
	  return React__default.createElement(Dropdown, _extends({ nav: true }, props));
	}
	
	var propTypes$9 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  disabled: PropTypes.bool,
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  onClick: PropTypes.func,
	  href: PropTypes.any
	};
	
	var defaultProps$9 = {
	  tag: 'a'
	};
	
	var NavLink = function (_React$Component) {
	  inherits(NavLink, _React$Component);
	
	  function NavLink(props) {
	    classCallCheck(this, NavLink);
	
	    var _this = possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(NavLink, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.href === '#') {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          active = _props.active,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'active', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, 'nav-link', {
	        disabled: attributes.disabled,
	        active: active
	      }), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, onClick: this.onClick, className: classes }));
	    }
	  }]);
	  return NavLink;
	}(React__default.Component);
	
	NavLink.propTypes = propTypes$9;
	NavLink.defaultProps = defaultProps$9;
	
	var propTypes$10 = {
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$10 = {
	  tag: 'ol'
	};
	
	var Breadcrumb = function Breadcrumb(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'breadcrumb'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Breadcrumb.propTypes = propTypes$10;
	Breadcrumb.defaultProps = defaultProps$10;
	
	var propTypes$11 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$11 = {
	  tag: 'li'
	};
	
	var BreadcrumbItem = function BreadcrumbItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      active = props.active,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'active', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	BreadcrumbItem.propTypes = propTypes$11;
	BreadcrumbItem.defaultProps = defaultProps$11;
	
	var propTypes$12 = {
	  active: PropTypes.bool,
	  block: PropTypes.bool,
	  color: PropTypes.string,
	  disabled: PropTypes.bool,
	  outline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  onClick: PropTypes.func,
	  size: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$12 = {
	  color: 'secondary',
	  tag: 'button'
	};
	
	var Button = function (_React$Component) {
	  inherits(Button, _React$Component);
	
	  function Button(props) {
	    classCallCheck(this, Button);
	
	    var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(Button, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          active = _props.active,
	          block = _props.block,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          color = _props.color,
	          outline = _props.outline,
	          size = _props.size,
	          Tag = _props.tag,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['active', 'block', 'className', 'cssModule', 'color', 'outline', 'size', 'tag', 'innerRef']);
	
	
	      var classes = mapToCssModules(classNames(className, 'btn', 'btn' + (outline ? '-outline' : '') + '-' + color, size ? 'btn-' + size : false, block ? 'btn-block' : false, { active: active, disabled: this.props.disabled }), cssModule);
	
	      if (attributes.href && Tag === 'button') {
	        Tag = 'a';
	      }
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
	      }, attributes, {
	        className: classes,
	        ref: innerRef,
	        onClick: this.onClick
	      }));
	    }
	  }]);
	  return Button;
	}(React__default.Component);
	
	Button.propTypes = propTypes$12;
	Button.defaultProps = defaultProps$12;
	
	var propTypes$13 = {
	  children: PropTypes.node
	};
	
	var ButtonDropdown = function ButtonDropdown(props) {
	  return React__default.createElement(Dropdown, _extends({ group: true }, props));
	};
	
	ButtonDropdown.propTypes = propTypes$13;
	
	var propTypes$14 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string,
	  size: PropTypes.string,
	  vertical: PropTypes.bool
	};
	
	var defaultProps$13 = {
	  tag: 'div',
	  role: 'group'
	};
	
	var ButtonGroup = function ButtonGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      vertical = props.vertical,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'vertical', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonGroup.propTypes = propTypes$14;
	ButtonGroup.defaultProps = defaultProps$13;
	
	var propTypes$15 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  'aria-label': PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  role: PropTypes.string
	};
	
	var defaultProps$14 = {
	  tag: 'div',
	  role: 'toolbar'
	};
	
	var ButtonToolbar = function ButtonToolbar(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'btn-toolbar'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ButtonToolbar.propTypes = propTypes$15;
	ButtonToolbar.defaultProps = defaultProps$14;
	
	var propTypes$16 = {
	  children: PropTypes.node,
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  divider: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  header: PropTypes.bool,
	  onClick: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.bool
	};
	
	var contextTypes = {
	  toggle: PropTypes.func
	};
	
	var defaultProps$15 = {
	  tag: 'button',
	  toggle: true
	};
	
	var DropdownItem = function (_React$Component) {
	  inherits(DropdownItem, _React$Component);
	
	  function DropdownItem(props) {
	    classCallCheck(this, DropdownItem);
	
	    var _this = possibleConstructorReturn(this, (DropdownItem.__proto__ || Object.getPrototypeOf(DropdownItem)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    _this.getTabIndex = _this.getTabIndex.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownItem, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      if (this.props.toggle) {
	        this.context.toggle(e);
	      }
	    }
	  }, {
	    key: 'getTabIndex',
	    value: function getTabIndex() {
	      if (this.props.disabled || this.props.header || this.props.divider) {
	        return '-1';
	      }
	
	      return '0';
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var tabIndex = this.getTabIndex();
	
	      var _omit = omit(this.props, ['toggle']),
	          className = _omit.className,
	          cssModule = _omit.cssModule,
	          divider = _omit.divider,
	          Tag = _omit.tag,
	          header = _omit.header,
	          active = _omit.active,
	          props = objectWithoutProperties(_omit, ['className', 'cssModule', 'divider', 'tag', 'header', 'active']);
	
	      var classes = mapToCssModules(classNames(className, {
	        disabled: props.disabled,
	        'dropdown-item': !divider && !header,
	        active: active,
	        'dropdown-header': header,
	        'dropdown-divider': divider
	      }), cssModule);
	
	      if (Tag === 'button') {
	        if (header) {
	          Tag = 'h6';
	        } else if (divider) {
	          Tag = 'div';
	        } else if (props.href) {
	          Tag = 'a';
	        }
	      }
	
	      return React__default.createElement(Tag, _extends({
	        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
	      }, props, {
	        tabIndex: tabIndex,
	        className: classes,
	        onClick: this.onClick
	      }));
	    }
	  }]);
	  return DropdownItem;
	}(React__default.Component);
	
	DropdownItem.propTypes = propTypes$16;
	DropdownItem.defaultProps = defaultProps$15;
	DropdownItem.contextTypes = contextTypes;
	
	var propTypes$17 = {
	  tag: PropTypes.string,
	  children: PropTypes.node.isRequired,
	  right: PropTypes.bool,
	  flip: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$16 = {
	  tag: 'div',
	  flip: true
	};
	
	var contextTypes$1 = {
	  isOpen: PropTypes.bool.isRequired,
	  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var noFlipModifier = { flip: { enabled: false } };
	
	var directionPositionMap = {
	  up: 'top',
	  left: 'left',
	  right: 'right',
	  down: 'bottom'
	};
	
	var DropdownMenu = function DropdownMenu(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      right = props.right,
	      tag = props.tag,
	      flip = props.flip,
	      attrs = objectWithoutProperties(props, ['className', 'cssModule', 'right', 'tag', 'flip']);
	
	  var classes = mapToCssModules(classNames(className, 'dropdown-menu', {
	    'dropdown-menu-right': right,
	    show: context.isOpen
	  }), cssModule);
	
	  var Tag = tag;
	
	  if (context.isOpen && !context.inNavbar) {
	    Tag = reactPopper.Popper;
	
	    var position1 = directionPositionMap[context.direction] || 'bottom';
	    var position2 = right ? 'end' : 'start';
	    attrs.placement = position1 + '-' + position2;
	    attrs.component = tag;
	    attrs.modifiers = !flip ? noFlipModifier : undefined;
	  }
	
	  return React__default.createElement(Tag, _extends({
	    tabIndex: '-1',
	    role: 'menu'
	  }, attrs, {
	    'aria-hidden': !context.isOpen,
	    className: classes
	  }));
	};
	
	DropdownMenu.propTypes = propTypes$17;
	DropdownMenu.defaultProps = defaultProps$16;
	DropdownMenu.contextTypes = contextTypes$1;
	
	var propTypes$18 = {
	  caret: PropTypes.bool,
	  color: PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  onClick: PropTypes.func,
	  'aria-haspopup': PropTypes.bool,
	  split: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  nav: PropTypes.bool
	};
	
	var defaultProps$17 = {
	  'aria-haspopup': true,
	  color: 'secondary'
	};
	
	var contextTypes$2 = {
	  isOpen: PropTypes.bool.isRequired,
	  toggle: PropTypes.func.isRequired,
	  inNavbar: PropTypes.bool.isRequired
	};
	
	var DropdownToggle = function (_React$Component) {
	  inherits(DropdownToggle, _React$Component);
	
	  function DropdownToggle(props) {
	    classCallCheck(this, DropdownToggle);
	
	    var _this = possibleConstructorReturn(this, (DropdownToggle.__proto__ || Object.getPrototypeOf(DropdownToggle)).call(this, props));
	
	    _this.onClick = _this.onClick.bind(_this);
	    return _this;
	  }
	
	  createClass(DropdownToggle, [{
	    key: 'onClick',
	    value: function onClick(e) {
	      if (this.props.disabled) {
	        e.preventDefault();
	        return;
	      }
	
	      if (this.props.nav && !this.props.tag) {
	        e.preventDefault();
	      }
	
	      if (this.props.onClick) {
	        this.props.onClick(e);
	      }
	
	      this.context.toggle(e);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          color = _props.color,
	          cssModule = _props.cssModule,
	          caret = _props.caret,
	          split = _props.split,
	          nav = _props.nav,
	          tag = _props.tag,
	          props = objectWithoutProperties(_props, ['className', 'color', 'cssModule', 'caret', 'split', 'nav', 'tag']);
	
	      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
	      var classes = mapToCssModules(classNames(className, {
	        'dropdown-toggle': caret || split,
	        'dropdown-toggle-split': split,
	        'nav-link': nav
	      }), cssModule);
	      var children = props.children || React__default.createElement(
	        'span',
	        { className: 'sr-only' },
	        ariaLabel
	      );
	
	      var Tag = void 0;
	
	      if (nav && !tag) {
	        Tag = 'a';
	        props.href = '#';
	      } else if (!tag) {
	        Tag = Button;
	        props.color = color;
	        props.cssModule = cssModule;
	      } else {
	        Tag = tag;
	      }
	
	      if (this.context.inNavbar) {
	        return React__default.createElement(Tag, _extends({}, props, {
	          className: classes,
	          onClick: this.onClick,
	          'aria-expanded': this.context.isOpen,
	          children: children
	        }));
	      }
	
	      return React__default.createElement(reactPopper.Target, _extends({}, props, {
	        className: classes,
	        component: Tag,
	        onClick: this.onClick,
	        'aria-expanded': this.context.isOpen,
	        children: children
	      }));
	    }
	  }]);
	  return DropdownToggle;
	}(React__default.Component);
	
	DropdownToggle.propTypes = propTypes$18;
	DropdownToggle.defaultProps = defaultProps$17;
	DropdownToggle.contextTypes = contextTypes$2;
	
	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}
	
	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}
	
	var PropTypes$1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.classNamesShape = exports.timeoutsShape = undefined;
	  exports.transitionTimeout = transitionTimeout;
	
	  var _propTypes2 = _interopRequireDefault(PropTypes);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function transitionTimeout(transitionType) {
	    var timeoutPropName = 'transition' + transitionType + 'Timeout';
	    var enabledPropName = 'transition' + transitionType;
	
	    return function (props) {
	      // If the transition is enabled
	      if (props[enabledPropName]) {
	        // If no timeout duration is provided
	        if (props[timeoutPropName] == null) {
	          return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');
	
	          // If the duration isn't a number
	        } else if (typeof props[timeoutPropName] !== 'number') {
	          return new Error(timeoutPropName + ' must be a number (in milliseconds)');
	        }
	      }
	
	      return null;
	    };
	  }
	
	  var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
	    enter: _propTypes2.default.number,
	    exit: _propTypes2.default.number
	  }).isRequired]);
	
	  var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    active: _propTypes2.default.string
	  }), _propTypes2.default.shape({
	    enter: _propTypes2.default.string,
	    enterActive: _propTypes2.default.string,
	    exit: _propTypes2.default.string,
	    exitActive: _propTypes2.default.string
	  })]);
	});
	
	unwrapExports(PropTypes$1);
	
	var Transition_1 = createCommonjsModule(function (module, exports) {
	  'use strict';
	
	  exports.__esModule = true;
	  exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;
	
	  var PropTypes$$1 = _interopRequireWildcard(PropTypes);
	
	  var _react2 = _interopRequireDefault(React__default);
	
	  var _reactDom2 = _interopRequireDefault(ReactDOM);
	
	  function _interopRequireDefault(obj) {
	    return obj && obj.__esModule ? obj : { default: obj };
	  }
	
	  function _interopRequireWildcard(obj) {
	    if (obj && obj.__esModule) {
	      return obj;
	    } else {
	      var newObj = {};if (obj != null) {
	        for (var key in obj) {
	          if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
	        }
	      }newObj.default = obj;return newObj;
	    }
	  }
	
	  function _objectWithoutProperties(obj, keys) {
	    var target = {};for (var i in obj) {
	      if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
	    }return target;
	  }
	
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	
	  function _possibleConstructorReturn(self, call) {
	    if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	  }
	
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	  }
	
	  var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
	  var EXITED = exports.EXITED = 'exited';
	  var ENTERING = exports.ENTERING = 'entering';
	  var ENTERED = exports.ENTERED = 'entered';
	  var EXITING = exports.EXITING = 'exiting';
	
	  /**
	   * The Transition component lets you describe a transition from one component
	   * state to another _over time_ with a simple declarative API. Most commonly
	   * it's used to animate the mounting and unmounting of a component, but can also
	   * be used to describe in-place transition states as well.
	   *
	   * By default the `Transition` component does not alter the behavior of the
	   * component it renders, it only tracks "enter" and "exit" states for the components.
	   * It's up to you to give meaning and effect to those states. For example we can
	   * add styles to a component when it enters or exits:
	   *
	   * ```jsx
	   * import Transition from 'react-transition-group/Transition';
	   *
	   * const duration = 300;
	   *
	   * const defaultStyle = {
	   *   transition: `opacity ${duration}ms ease-in-out`,
	   *   opacity: 0,
	   * }
	   *
	   * const transitionStyles = {
	   *   entering: { opacity: 0 },
	   *   entered:  { opacity: 1 },
	   * };
	   *
	   * const Fade = ({ in: inProp }) => (
	   *   <Transition in={inProp} timeout={duration}>
	   *     {(state) => (
	   *       <div style={{
	   *         ...defaultStyle,
	   *         ...transitionStyles[state]
	   *       }}>
	   *         I'm A fade Transition!
	   *       </div>
	   *     )}
	   *   </Transition>
	   * );
	   * ```
	   *
	   * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
	   * What it does do is track transition states over time so you can update the
	   * component (such as by adding styles or classes) when it changes states.
	   *
	   * There are 4 main states a Transition can be in:
	   *  - `ENTERING`
	   *  - `ENTERED`
	   *  - `EXITING`
	   *  - `EXITED`
	   *
	   * Transition state is toggled via the `in` prop. When `true` the component begins the
	   * "Enter" stage. During this stage, the component will shift from its current transition state,
	   * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
	   * it's complete. Let's take the following example:
	   *
	   * ```jsx
	   * state= { in: false };
	   *
	   * toggleEnterState = () => {
	   *   this.setState({ in: true });
	   * }
	   *
	   * render() {
	   *   return (
	   *     <div>
	   *       <Transition in={this.state.in} timeout={500} />
	   *       <button onClick={this.toggleEnterState}>Click to Enter</button>
	   *     </div>
	   *   );
	   * }
	   * ```
	   *
	   * When the button is clicked the component will shift to the `'entering'` state and
	   * stay there for 500ms (the value of `timeout`) when finally switches to `'entered'`.
	   *
	   * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
	   */
	
	  var Transition = function (_React$Component) {
	    _inherits(Transition, _React$Component);
	
	    function Transition(props, context) {
	      _classCallCheck(this, Transition);
	
	      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));
	
	      var parentGroup = context.transitionGroup;
	      // In the context of a TransitionGroup all enters are really appears
	      var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
	
	      var initialStatus = void 0;
	      _this.nextStatus = null;
	
	      if (props.in) {
	        if (appear) {
	          initialStatus = EXITED;
	          _this.nextStatus = ENTERING;
	        } else {
	          initialStatus = ENTERED;
	        }
	      } else {
	        if (props.unmountOnExit || props.mountOnEnter) {
	          initialStatus = UNMOUNTED;
	        } else {
	          initialStatus = EXITED;
	        }
	      }
	
	      _this.state = { status: initialStatus };
	
	      _this.nextCallback = null;
	      return _this;
	    }
	
	    Transition.prototype.getChildContext = function getChildContext() {
	      return { transitionGroup: null }; // allows for nested Transitions
	    };
	
	    Transition.prototype.componentDidMount = function componentDidMount() {
	      this.updateStatus(true);
	    };
	
	    Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
	      var _ref = this.pendingState || this.state,
	          status = _ref.status;
	
	      if (nextProps.in) {
	        if (status === UNMOUNTED) {
	          this.setState({ status: EXITED });
	        }
	        if (status !== ENTERING && status !== ENTERED) {
	          this.nextStatus = ENTERING;
	        }
	      } else {
	        if (status === ENTERING || status === ENTERED) {
	          this.nextStatus = EXITING;
	        }
	      }
	    };
	
	    Transition.prototype.componentDidUpdate = function componentDidUpdate() {
	      this.updateStatus();
	    };
	
	    Transition.prototype.componentWillUnmount = function componentWillUnmount() {
	      this.cancelNextCallback();
	    };
	
	    Transition.prototype.getTimeouts = function getTimeouts() {
	      var timeout = this.props.timeout;
	
	      var exit = void 0,
	          enter = void 0,
	          appear = void 0;
	
	      exit = enter = appear = timeout;
	
	      if (timeout != null && typeof timeout !== 'number') {
	        exit = timeout.exit;
	        enter = timeout.enter;
	        appear = timeout.appear;
	      }
	      return { exit: exit, enter: enter, appear: appear };
	    };
	
	    Transition.prototype.updateStatus = function updateStatus() {
	      var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
	      var nextStatus = this.nextStatus;
	
	      if (nextStatus !== null) {
	        this.nextStatus = null;
	        // nextStatus will always be ENTERING or EXITING.
	        this.cancelNextCallback();
	        var node = _reactDom2.default.findDOMNode(this);
	
	        if (nextStatus === ENTERING) {
	          this.performEnter(node, mounting);
	        } else {
	          this.performExit(node);
	        }
	      } else if (this.props.unmountOnExit && this.state.status === EXITED) {
	        this.setState({ status: UNMOUNTED });
	      }
	    };
	
	    Transition.prototype.performEnter = function performEnter(node, mounting) {
	      var _this2 = this;
	
	      var enter = this.props.enter;
	
	      var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
	
	      var timeouts = this.getTimeouts();
	
	      // no enter animation skip right to ENTERED
	      // if we are mounting and running this it means appear _must_ be set
	      if (!mounting && !enter) {
	        this.safeSetState({ status: ENTERED }, function () {
	          _this2.props.onEntered(node);
	        });
	        return;
	      }
	
	      this.props.onEnter(node, appearing);
	
	      this.safeSetState({ status: ENTERING }, function () {
	        _this2.props.onEntering(node, appearing);
	
	        // FIXME: appear timeout?
	        _this2.onTransitionEnd(node, timeouts.enter, function () {
	          _this2.safeSetState({ status: ENTERED }, function () {
	            _this2.props.onEntered(node, appearing);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.performExit = function performExit(node) {
	      var _this3 = this;
	
	      var exit = this.props.exit;
	
	      var timeouts = this.getTimeouts();
	
	      // no exit animation skip right to EXITED
	      if (!exit) {
	        this.safeSetState({ status: EXITED }, function () {
	          _this3.props.onExited(node);
	        });
	        return;
	      }
	      this.props.onExit(node);
	
	      this.safeSetState({ status: EXITING }, function () {
	        _this3.props.onExiting(node);
	
	        _this3.onTransitionEnd(node, timeouts.exit, function () {
	          _this3.safeSetState({ status: EXITED }, function () {
	            _this3.props.onExited(node);
	          });
	        });
	      });
	    };
	
	    Transition.prototype.cancelNextCallback = function cancelNextCallback() {
	      if (this.nextCallback !== null) {
	        this.nextCallback.cancel();
	        this.nextCallback = null;
	      }
	    };
	
	    Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
	      var _this4 = this;
	
	      // We need to track pending updates for instances where a cWRP fires quickly
	      // after cDM and before the state flushes, which would double trigger a
	      // transition
	      this.pendingState = nextState;
	
	      // This shouldn't be necessary, but there are weird race conditions with
	      // setState callbacks and unmounting in testing, so always make sure that
	      // we can cancel any pending setState callbacks after we unmount.
	      callback = this.setNextCallback(callback);
	      this.setState(nextState, function () {
	        _this4.pendingState = null;
	        callback();
	      });
	    };
	
	    Transition.prototype.setNextCallback = function setNextCallback(callback) {
	      var _this5 = this;
	
	      var active = true;
	
	      this.nextCallback = function (event) {
	        if (active) {
	          active = false;
	          _this5.nextCallback = null;
	
	          callback(event);
	        }
	      };
	
	      this.nextCallback.cancel = function () {
	        active = false;
	      };
	
	      return this.nextCallback;
	    };
	
	    Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
	      this.setNextCallback(handler);
	
	      if (node) {
	        if (this.props.addEndListener) {
	          this.props.addEndListener(node, this.nextCallback);
	        }
	        if (timeout != null) {
	          setTimeout(this.nextCallback, timeout);
	        }
	      } else {
	        setTimeout(this.nextCallback, 0);
	      }
	    };
	
	    Transition.prototype.render = function render() {
	      var status = this.state.status;
	      if (status === UNMOUNTED) {
	        return null;
	      }
	
	      var _props = this.props,
	          children = _props.children,
	          childProps = _objectWithoutProperties(_props, ['children']);
	      // filter props for Transtition
	
	
	      delete childProps.in;
	      delete childProps.mountOnEnter;
	      delete childProps.unmountOnExit;
	      delete childProps.appear;
	      delete childProps.enter;
	      delete childProps.exit;
	      delete childProps.timeout;
	      delete childProps.addEndListener;
	      delete childProps.onEnter;
	      delete childProps.onEntering;
	      delete childProps.onEntered;
	      delete childProps.onExit;
	      delete childProps.onExiting;
	      delete childProps.onExited;
	
	      if (typeof children === 'function') {
	        return children(status, childProps);
	      }
	
	      var child = _react2.default.Children.only(children);
	      return _react2.default.cloneElement(child, childProps);
	    };
	
	    return Transition;
	  }(_react2.default.Component);
	
	  Transition.contextTypes = {
	    transitionGroup: PropTypes$$1.object
	  };
	  Transition.childContextTypes = {
	    transitionGroup: function transitionGroup() {}
	  };
	
	  Transition.propTypes =  false ? {
	    /**
	     * A `function` child can be used instead of a React element.
	     * This function is called with the current transition status
	     * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can used
	     * to apply context specific props to a component.
	     *
	     * ```jsx
	     * <Transition timeout={150}>
	     *   {(status) => (
	     *     <MyComponent className={`fade fade-${status}`} />
	     *   )}
	     * </Transition>
	     * ```
	     */
	    children: PropTypes$$1.oneOfType([PropTypes$$1.func.isRequired, PropTypes$$1.element.isRequired]).isRequired,
	
	    /**
	     * Show the component; triggers the enter or exit states
	     */
	    in: PropTypes$$1.bool,
	
	    /**
	     * By default the child component is mounted immediately along with
	     * the parent `Transition` component. If you want to "lazy mount" the component on the
	     * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
	     * mounted, even on "exited", unless you also specify `unmountOnExit`.
	     */
	    mountOnEnter: PropTypes$$1.bool,
	
	    /**
	     * By default the child component stays mounted after it reaches the `'exited'` state.
	     * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
	     */
	    unmountOnExit: PropTypes$$1.bool,
	
	    /**
	     * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
	     * If you want to transition on the first mount set `appear` to `true`, and the
	     * component will transition in as soon as the `<Transition>` mounts.
	     *
	     * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
	     */
	    appear: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable enter transitions.
	     */
	    enter: PropTypes$$1.bool,
	
	    /**
	     * Enable or disable exit transitions.
	     */
	    exit: PropTypes$$1.bool,
	
	    /**
	     * The duration of the transition, in milliseconds.
	     * Required unless `addEventListener` is provided
	     *
	     * You may specify a single timeout for all transitions like: `timeout={500}`,
	     * or individually like:
	     *
	     * ```jsx
	     * timeout={{
	     *  enter: 300,
	     *  exit: 500,
	     * }}
	     * ```
	     *
	     * @type {number | { enter?: number, exit?: number }}
	     */
	    timeout: function timeout(props) {
	      for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }
	
	      var pt = PropTypes$1.timeoutsShape;
	      if (!props.addEndListener) pt = pt.isRequired;
	      return pt.apply(undefined, [props].concat(args));
	    },
	
	    /**
	     * Add a custom transition end trigger. Called with the transitioning
	     * DOM node and a `done` callback. Allows for more fine grained transition end
	     * logic. **Note:** Timeouts are still used as a fallback if provided.
	     *
	     * ```jsx
	     * addEndListener={(node, done) => {
	     *   // use the css transitionend event to mark the finish of a transition
	     *   node.addEventListener('transitionend', done, false);
	     * }}
	     * ```
	     */
	    addEndListener: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEnter: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entering" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool)
	     */
	    onEntering: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "entered" status is applied. An extra parameter
	     * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
	     *
	     * @type Function(node: HtmlElement, isAppearing: bool) -> void
	     */
	    onEntered: PropTypes$$1.func,
	
	    /**
	     * Callback fired before the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExit: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exiting" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExiting: PropTypes$$1.func,
	
	    /**
	     * Callback fired after the "exited" status is applied.
	     *
	     * @type Function(node: HtmlElement) -> void
	     */
	    onExited: PropTypes$$1.func
	  } : {};
	
	  // Name the function so it is clearer in the documentation
	  function noop() {}
	
	  Transition.defaultProps = {
	    in: false,
	    mountOnEnter: false,
	    unmountOnExit: false,
	    appear: false,
	    enter: true,
	    exit: true,
	
	    onEnter: noop,
	    onEntering: noop,
	    onEntered: noop,
	
	    onExit: noop,
	    onExiting: noop,
	    onExited: noop
	  };
	
	  Transition.UNMOUNTED = 0;
	  Transition.EXITED = 1;
	  Transition.ENTERING = 2;
	  Transition.ENTERED = 3;
	  Transition.EXITING = 4;
	
	  exports.default = Transition;
	});
	
	var Transition = unwrapExports(Transition_1);
	
	var propTypes$19 = _extends({}, Transition.propTypes, {
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
	  baseClass: PropTypes.string,
	  baseClassActive: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	});
	
	var defaultProps$18 = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  baseClass: 'fade',
	  baseClassActive: 'show',
	  timeout: TransitionTimeouts.Fade,
	  appear: true,
	  enter: true,
	  exit: true,
	  in: true
	});
	
	function Fade(props) {
	  var Tag = props.tag,
	      baseClass = props.baseClass,
	      baseClassActive = props.baseClassActive,
	      className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      otherProps = objectWithoutProperties(props, ['tag', 'baseClass', 'baseClassActive', 'className', 'cssModule', 'children']);
	
	  // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	  // empty object "{}". This is the result of the `react-transition-group` babel
	  // configuration settings. Therefore, to ensure that production builds work without
	  // error, we can either explicitly define keys or use the Transition.defaultProps.
	  // Using the Transition.defaultProps excludes any required props. Thus, the best
	  // solution is to explicitly define required props in our utilities and reference these.
	  // This also gives us more flexibility in the future to remove the prop-types
	  // dependency in distribution builds (Similar to how `react-transition-group` does).
	  // Note: Without omitting the `react-transition-group` props, the resulting child
	  // Tag component would inherit the Transition properties as attributes for the HTML
	  // element which results in errors/warnings for non-valid attributes.
	
	  var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	  var childProps = omit(otherProps, TransitionPropTypeKeys);
	
	  return React__default.createElement(
	    Transition,
	    transitionProps,
	    function (status) {
	      var isActive = status === 'entered';
	      var classes = mapToCssModules(classNames(className, baseClass, isActive && baseClassActive), cssModule);
	      return React__default.createElement(
	        Tag,
	        _extends({ className: classes }, childProps),
	        children
	      );
	    }
	  );
	}
	
	Fade.propTypes = propTypes$19;
	Fade.defaultProps = defaultProps$18;
	
	var propTypes$20 = {
	  color: PropTypes.string,
	  pill: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$19 = {
	  color: 'secondary',
	  pill: false,
	  tag: 'span'
	};
	
	var Badge = function Badge(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      pill = props.pill,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'pill', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);
	
	  if (attributes.href && Tag === 'span') {
	    Tag = 'a';
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Badge.propTypes = propTypes$20;
	Badge.defaultProps = defaultProps$19;
	
	var propTypes$21 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  inverse: PropTypes.bool,
	  color: PropTypes.string,
	  block: deprecated(PropTypes.bool, 'Please use the props "body"'),
	  body: PropTypes.bool,
	  outline: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$20 = {
	  tag: 'div'
	};
	
	var Card = function Card(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      color = props.color,
	      block = props.block,
	      body = props.body,
	      inverse = props.inverse,
	      outline = props.outline,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'color', 'block', 'body', 'inverse', 'outline', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card', inverse ? 'text-white' : false, block || body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + '-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Card.propTypes = propTypes$21;
	Card.defaultProps = defaultProps$20;
	
	var propTypes$22 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$21 = {
	  tag: 'div'
	};
	
	var CardGroup = function CardGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-group'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardGroup.propTypes = propTypes$22;
	CardGroup.defaultProps = defaultProps$21;
	
	var propTypes$23 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$22 = {
	  tag: 'div'
	};
	
	var CardDeck = function CardDeck(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-deck'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardDeck.propTypes = propTypes$23;
	CardDeck.defaultProps = defaultProps$22;
	
	var propTypes$24 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$23 = {
	  tag: 'div'
	};
	
	var CardColumns = function CardColumns(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-columns'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardColumns.propTypes = propTypes$24;
	CardColumns.defaultProps = defaultProps$23;
	
	var propTypes$25 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$24 = {
	  tag: 'div'
	};
	
	var CardBody = function CardBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardBody.propTypes = propTypes$25;
	CardBody.defaultProps = defaultProps$24;
	
	function CardBlock(props) {
	  warnOnce('The "CardBlock" component has been deprecated.\nPlease use component "CardBody".');
	  return React__default.createElement(CardBody, props);
	}
	
	var propTypes$26 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$25 = {
	  tag: 'a'
	};
	
	var CardLink = function CardLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'innerRef']);
	
	  var classes = mapToCssModules(classNames(className, 'card-link'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	};
	
	CardLink.propTypes = propTypes$26;
	CardLink.defaultProps = defaultProps$25;
	
	var propTypes$27 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$26 = {
	  tag: 'div'
	};
	
	var CardFooter = function CardFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardFooter.propTypes = propTypes$27;
	CardFooter.defaultProps = defaultProps$26;
	
	var propTypes$28 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$27 = {
	  tag: 'div'
	};
	
	var CardHeader = function CardHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardHeader.propTypes = propTypes$28;
	CardHeader.defaultProps = defaultProps$27;
	
	var propTypes$29 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool,
	  bottom: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$28 = {
	  tag: 'img'
	};
	
	var CardImg = function CardImg(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      top = props.top,
	      bottom = props.bottom,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'top', 'bottom', 'tag']);
	
	
	  var cardImgClassName = 'card-img';
	  if (top) {
	    cardImgClassName = 'card-img-top';
	  }
	  if (bottom) {
	    cardImgClassName = 'card-img-bottom';
	  }
	
	  var classes = mapToCssModules(classNames(className, cardImgClassName), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImg.propTypes = propTypes$29;
	CardImg.defaultProps = defaultProps$28;
	
	var propTypes$30 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$29 = {
	  tag: 'div'
	};
	
	var CardImgOverlay = function CardImgOverlay(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-img-overlay'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardImgOverlay.propTypes = propTypes$30;
	CardImgOverlay.defaultProps = defaultProps$29;
	
	var CarouselItem = function (_React$Component) {
	  inherits(CarouselItem, _React$Component);
	
	  function CarouselItem(props) {
	    classCallCheck(this, CarouselItem);
	
	    var _this = possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));
	
	    _this.state = {
	      startAnimation: false
	    };
	
	    _this.onEnter = _this.onEnter.bind(_this);
	    _this.onEntering = _this.onEntering.bind(_this);
	    _this.onExit = _this.onExit.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(CarouselItem, [{
	    key: 'onEnter',
	    value: function onEnter(node, isAppearing) {
	      this.setState({ startAnimation: false });
	      this.props.onEnter(node, isAppearing);
	    }
	  }, {
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      // getting this variable triggers a reflow
	      var offsetHeight = node.offsetHeight;
	      this.setState({ startAnimation: true });
	      this.props.onEntering(node, isAppearing);
	      return offsetHeight;
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ startAnimation: false });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      this.setState({ startAnimation: true });
	      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          isIn = _props.in,
	          children = _props.children,
	          cssModule = _props.cssModule,
	          slide = _props.slide,
	          Tag = _props.tag,
	          className = _props.className,
	          transitionProps = objectWithoutProperties(_props, ['in', 'children', 'cssModule', 'slide', 'tag', 'className']);
	
	
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          enter: slide,
	          exit: slide,
	          'in': isIn,
	          onEnter: this.onEnter,
	          onEntering: this.onEntering,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var direction = _this2.context.direction;
	
	          var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
	          var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
	          var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
	          var itemClasses = mapToCssModules(classNames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
	
	          return React__default.createElement(
	            Tag,
	            { className: itemClasses },
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return CarouselItem;
	}(React__default.Component);
	
	CarouselItem.propTypes = _extends({}, Transition.propTypes, {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  in: PropTypes.bool,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  slide: PropTypes.bool,
	  className: PropTypes.string
	});
	
	CarouselItem.defaultProps = _extends({}, Transition.defaultProps, {
	  tag: 'div',
	  timeout: TransitionTimeouts.Carousel,
	  slide: true
	});
	
	CarouselItem.contextTypes = {
	  direction: PropTypes.string
	};
	
	var Carousel = function (_React$Component) {
	  inherits(Carousel, _React$Component);
	
	  function Carousel(props) {
	    classCallCheck(this, Carousel);
	
	    var _this = possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));
	
	    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
	    _this.renderItems = _this.renderItems.bind(_this);
	    _this.hoverStart = _this.hoverStart.bind(_this);
	    _this.hoverEnd = _this.hoverEnd.bind(_this);
	    _this.state = { direction: 'right' };
	    return _this;
	  }
	
	  createClass(Carousel, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return { direction: this.state.direction };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      // Set up the cycle
	      if (this.props.ride === 'carousel') {
	        this.setInterval();
	      }
	
	      // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.
	      document.addEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      this.setInterval(nextProps);
	      // Calculate the direction to turn
	      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'right' });
	      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
	        this.setState({ direction: 'left' });
	      } else if (this.props.activeIndex > nextProps.activeIndex) {
	        this.setState({ direction: 'right' });
	      } else if (this.props.activeIndex !== nextProps.activeIndex) {
	        this.setState({ direction: 'left' });
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearInterval();
	      document.removeEventListener('keyup', this.handleKeyPress);
	    }
	  }, {
	    key: 'setInterval',
	    value: function (_setInterval) {
	      function setInterval() {
	        return _setInterval.apply(this, arguments);
	      }
	
	      setInterval.toString = function () {
	        return _setInterval.toString();
	      };
	
	      return setInterval;
	    }(function () {
	      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
	
	      // make sure not to have multiple intervals going...
	      this.clearInterval();
	      if (props.interval) {
	        this.cycleInterval = setInterval(function () {
	          props.next();
	        }, parseInt(props.interval, 10));
	      }
	    })
	  }, {
	    key: 'clearInterval',
	    value: function (_clearInterval) {
	      function clearInterval() {
	        return _clearInterval.apply(this, arguments);
	      }
	
	      clearInterval.toString = function () {
	        return _clearInterval.toString();
	      };
	
	      return clearInterval;
	    }(function () {
	      clearInterval(this.cycleInterval);
	    })
	  }, {
	    key: 'hoverStart',
	    value: function hoverStart() {
	      if (this.props.pause === 'hover') {
	        this.clearInterval();
	      }
	      if (this.props.mouseEnter) {
	        var _props;
	
	        (_props = this.props).mouseEnter.apply(_props, arguments);
	      }
	    }
	  }, {
	    key: 'hoverEnd',
	    value: function hoverEnd() {
	      if (this.props.pause === 'hover') {
	        this.setInterval();
	      }
	      if (this.props.mouseLeave) {
	        var _props2;
	
	        (_props2 = this.props).mouseLeave.apply(_props2, arguments);
	      }
	    }
	  }, {
	    key: 'handleKeyPress',
	    value: function handleKeyPress(evt) {
	      if (this.props.keyboard) {
	        if (evt.keyCode === 37) {
	          this.props.previous();
	        } else if (evt.keyCode === 39) {
	          this.props.next();
	        }
	      }
	    }
	  }, {
	    key: 'renderItems',
	    value: function renderItems(carouselItems, className) {
	      var _this2 = this;
	
	      var slide = this.props.slide;
	
	      return React__default.createElement(
	        'div',
	        { role: 'listbox', className: className },
	        carouselItems.map(function (item, index) {
	          var isIn = index === _this2.props.activeIndex;
	          return React__default.cloneElement(item, {
	            in: isIn,
	            slide: slide
	          });
	        })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props,
	          children = _props3.children,
	          cssModule = _props3.cssModule,
	          slide = _props3.slide,
	          className = _props3.className;
	
	      var outerClasses = mapToCssModules(classNames(className, 'carousel', slide && 'slide'), cssModule);
	
	      var innerClasses = mapToCssModules(classNames('carousel-inner'), cssModule);
	
	      var slidesOnly = children.every(function (child) {
	        return child.type === CarouselItem;
	      });
	
	      // Rendering only slides
	      if (slidesOnly) {
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(children, innerClasses)
	        );
	      }
	
	      // Rendering slides and controls
	      if (children[0] instanceof Array) {
	        var _carouselItems = children[0];
	        var _controlLeft = children[1];
	        var _controlRight = children[2];
	
	        return React__default.createElement(
	          'div',
	          { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	          this.renderItems(_carouselItems, innerClasses),
	          _controlLeft,
	          _controlRight
	        );
	      }
	
	      // Rendering indicators, slides and controls
	      var indicators = children[0];
	      var carouselItems = children[1];
	      var controlLeft = children[2];
	      var controlRight = children[3];
	
	      return React__default.createElement(
	        'div',
	        { className: outerClasses, onMouseEnter: this.hoverStart, onMouseLeave: this.hoverEnd },
	        indicators,
	        this.renderItems(carouselItems, innerClasses),
	        controlLeft,
	        controlRight
	      );
	    }
	  }]);
	  return Carousel;
	}(React__default.Component);
	
	Carousel.propTypes = {
	  // the current active slide of the carousel
	  activeIndex: PropTypes.number,
	  // a function which should advance the carousel to the next slide (via activeIndex)
	  next: PropTypes.func.isRequired,
	  // a function which should advance the carousel to the previous slide (via activeIndex)
	  previous: PropTypes.func.isRequired,
	  // controls if the left and right arrow keys should control the carousel
	  keyboard: PropTypes.bool,
	  /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
	   * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
	   */
	  pause: PropTypes.oneOf(['hover', false]),
	  // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
	  // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
	  ride: PropTypes.oneOf(['carousel']),
	  // the interval at which the carousel automatically cycles (default: 5000)
	  // eslint-disable-next-line react/no-unused-prop-types
	  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.bool]),
	  children: PropTypes.array,
	  // called when the mouse enters the Carousel
	  mouseEnter: PropTypes.func,
	  // called when the mouse exits the Carousel
	  mouseLeave: PropTypes.func,
	  // controls whether the slide animation on the Carousel works or not
	  slide: PropTypes.bool,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	Carousel.defaultProps = {
	  interval: 5000,
	  pause: 'hover',
	  keyboard: true,
	  slide: true
	};
	
	Carousel.childContextTypes = {
	  direction: PropTypes.string
	};
	
	var CarouselControl = function CarouselControl(props) {
	  var direction = props.direction,
	      onClickHandler = props.onClickHandler,
	      cssModule = props.cssModule,
	      directionText = props.directionText,
	      className = props.className;
	
	
	  var anchorClasses = mapToCssModules(classNames(className, 'carousel-control-' + direction), cssModule);
	
	  var iconClasses = mapToCssModules(classNames('carousel-control-' + direction + '-icon'), cssModule);
	
	  var screenReaderClasses = mapToCssModules(classNames('sr-only'), cssModule);
	
	  return React__default.createElement(
	    'a',
	    {
	      className: anchorClasses,
	      role: 'button',
	      tabIndex: '0',
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler();
	      }
	    },
	    React__default.createElement('span', { className: iconClasses, 'aria-hidden': 'true' }),
	    React__default.createElement(
	      'span',
	      { className: screenReaderClasses },
	      directionText || direction
	    )
	  );
	};
	
	CarouselControl.propTypes = {
	  direction: PropTypes.oneOf(['prev', 'next']).isRequired,
	  onClickHandler: PropTypes.func.isRequired,
	  cssModule: PropTypes.object,
	  directionText: PropTypes.string,
	  className: PropTypes.string
	};
	
	var CarouselIndicators = function CarouselIndicators(props) {
	  var items = props.items,
	      activeIndex = props.activeIndex,
	      cssModule = props.cssModule,
	      onClickHandler = props.onClickHandler,
	      className = props.className;
	
	
	  var listClasses = mapToCssModules(classNames(className, 'carousel-indicators'), cssModule);
	  var indicators = items.map(function (item, idx) {
	    var indicatorClasses = mapToCssModules(classNames({ active: activeIndex === idx }), cssModule);
	    return React__default.createElement('li', {
	      key: '' + (item.key || item.src) + item.caption + item.altText,
	      onClick: function onClick(e) {
	        e.preventDefault();
	        onClickHandler(idx);
	      },
	      className: indicatorClasses
	    });
	  });
	
	  return React__default.createElement(
	    'ol',
	    { className: listClasses },
	    indicators
	  );
	};
	
	CarouselIndicators.propTypes = {
	  items: PropTypes.array.isRequired,
	  activeIndex: PropTypes.number.isRequired,
	  cssModule: PropTypes.object,
	  onClickHandler: PropTypes.func.isRequired,
	  className: PropTypes.string
	};
	
	var CarouselCaption = function CarouselCaption(props) {
	  var captionHeader = props.captionHeader,
	      captionText = props.captionText,
	      cssModule = props.cssModule,
	      className = props.className;
	
	  var classes = mapToCssModules(classNames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
	
	  return React__default.createElement(
	    'div',
	    { className: classes },
	    React__default.createElement(
	      'h3',
	      null,
	      captionHeader
	    ),
	    React__default.createElement(
	      'p',
	      null,
	      captionText
	    )
	  );
	};
	
	CarouselCaption.propTypes = {
	  captionHeader: PropTypes.string,
	  captionText: PropTypes.string.isRequired,
	  cssModule: PropTypes.object,
	  className: PropTypes.string
	};
	
	var propTypes$31 = {
	  items: PropTypes.array.isRequired,
	  indicators: PropTypes.bool,
	  controls: PropTypes.bool,
	  autoPlay: PropTypes.bool,
	  activeIndex: PropTypes.number,
	  next: PropTypes.func,
	  previous: PropTypes.func,
	  goToIndex: PropTypes.func
	};
	
	var UncontrolledCarousel = function (_Component) {
	  inherits(UncontrolledCarousel, _Component);
	
	  function UncontrolledCarousel(props) {
	    classCallCheck(this, UncontrolledCarousel);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledCarousel.__proto__ || Object.getPrototypeOf(UncontrolledCarousel)).call(this, props));
	
	    _this.animating = false;
	    _this.state = { activeIndex: 0 };
	    _this.next = _this.next.bind(_this);
	    _this.previous = _this.previous.bind(_this);
	    _this.goToIndex = _this.goToIndex.bind(_this);
	    _this.onExiting = _this.onExiting.bind(_this);
	    _this.onExited = _this.onExited.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledCarousel, [{
	    key: 'onExiting',
	    value: function onExiting() {
	      this.animating = true;
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited() {
	      this.animating = false;
	    }
	  }, {
	    key: 'next',
	    value: function next() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'previous',
	    value: function previous() {
	      if (this.animating) return;
	      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
	      this.setState({ activeIndex: nextIndex });
	    }
	  }, {
	    key: 'goToIndex',
	    value: function goToIndex(newIndex) {
	      if (this.animating) return;
	      this.setState({ activeIndex: newIndex });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var _props = this.props,
	          autoPlay = _props.autoPlay,
	          indicators = _props.indicators,
	          controls = _props.controls,
	          items = _props.items,
	          goToIndex = _props.goToIndex,
	          props = objectWithoutProperties(_props, ['autoPlay', 'indicators', 'controls', 'items', 'goToIndex']);
	      var activeIndex = this.state.activeIndex;
	
	
	      var slides = items.map(function (item) {
	        return React__default.createElement(
	          CarouselItem,
	          {
	            onExiting: _this2.onExiting,
	            onExited: _this2.onExited,
	            key: item.src
	          },
	          React__default.createElement('img', { src: item.src, alt: item.altText }),
	          React__default.createElement(CarouselCaption, { captionText: item.caption, captionHeader: item.caption })
	        );
	      });
	
	      return React__default.createElement(
	        Carousel,
	        _extends({
	          activeIndex: activeIndex,
	          next: this.next,
	          previous: this.previous,
	          ride: autoPlay ? 'carousel' : undefined
	        }, props),
	        indicators && React__default.createElement(CarouselIndicators, {
	          items: items,
	          activeIndex: props.activeIndex || activeIndex,
	          onClickHandler: goToIndex || this.goToIndex
	        }),
	        slides,
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'prev',
	          directionText: 'Previous',
	          onClickHandler: props.previous || this.previous
	        }),
	        controls && React__default.createElement(CarouselControl, {
	          direction: 'next',
	          directionText: 'Next',
	          onClickHandler: props.next || this.next
	        })
	      );
	    }
	  }]);
	  return UncontrolledCarousel;
	}(React.Component);
	
	UncontrolledCarousel.propTypes = propTypes$31;
	UncontrolledCarousel.defaultProps = {
	  controls: true,
	  indicators: true,
	  autoPlay: true
	};
	
	var propTypes$32 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$30 = {
	  tag: 'h6'
	};
	
	var CardSubtitle = function CardSubtitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-subtitle'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardSubtitle.propTypes = propTypes$32;
	CardSubtitle.defaultProps = defaultProps$30;
	
	var propTypes$33 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$31 = {
	  tag: 'p'
	};
	
	var CardText = function CardText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardText.propTypes = propTypes$33;
	CardText.defaultProps = defaultProps$31;
	
	var propTypes$34 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$32 = {
	  tag: 'h5'
	};
	
	var CardTitle = function CardTitle(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'card-title'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	CardTitle.propTypes = propTypes$34;
	CardTitle.defaultProps = defaultProps$32;
	
	var propTypes$35 = {
	  children: PropTypes.node.isRequired,
	  className: PropTypes.string,
	  placement: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  hideArrow: PropTypes.bool,
	  tag: PropTypes.string,
	  isOpen: PropTypes.bool.isRequired,
	  cssModule: PropTypes.object,
	  offset: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  fallbackPlacement: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
	  flip: PropTypes.bool,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  modifiers: PropTypes.object
	};
	
	var defaultProps$33 = {
	  placement: 'auto',
	  hideArrow: false,
	  isOpen: false,
	  offset: 0,
	  fallbackPlacement: 'flip',
	  flip: true,
	  container: 'body',
	  modifiers: {}
	};
	
	var childContextTypes$1 = {
	  popperManager: PropTypes.object.isRequired
	};
	
	var PopperContent = function (_React$Component) {
	  inherits(PopperContent, _React$Component);
	
	  function PopperContent(props) {
	    classCallCheck(this, PopperContent);
	
	    var _this = possibleConstructorReturn(this, (PopperContent.__proto__ || Object.getPrototypeOf(PopperContent)).call(this, props));
	
	    _this.handlePlacementChange = _this.handlePlacementChange.bind(_this);
	    _this.setTargetNode = _this.setTargetNode.bind(_this);
	    _this.getTargetNode = _this.getTargetNode.bind(_this);
	    _this.state = {};
	    return _this;
	  }
	
	  createClass(PopperContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        popperManager: {
	          setTargetNode: this.setTargetNode,
	          getTargetNode: this.getTargetNode
	        }
	      };
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps) {
	      if (this.props.isOpen !== prevProps.isOpen) {
	        this.handleProps();
	      } else if (this._element) {
	        // rerender
	        this.renderIntoSubtree();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.hide();
	    }
	  }, {
	    key: 'setTargetNode',
	    value: function setTargetNode(node) {
	      this.targetNode = node;
	    }
	  }, {
	    key: 'getTargetNode',
	    value: function getTargetNode() {
	      return this.targetNode;
	    }
	  }, {
	    key: 'getContainerNode',
	    value: function getContainerNode() {
	      return getTarget(this.props.container);
	    }
	  }, {
	    key: 'handlePlacementChange',
	    value: function handlePlacementChange(data) {
	      if (this.state.placement !== data.placement) {
	        this.setState({ placement: data.placement });
	      }
	      return data;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.container !== 'inline') {
	        if (this.props.isOpen) {
	          this.show();
	        } else {
	          this.hide();
	        }
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this._element) {
	        this.getContainerNode().removeChild(this._element);
	        ReactDOM.unmountComponentAtNode(this._element);
	        this._element = null;
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this._element = document.createElement('div');
	      this.getContainerNode().appendChild(this._element);
	      this.renderIntoSubtree();
	      if (this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
	        this._element.childNodes[0].focus();
	      }
	    }
	  }, {
	    key: 'renderIntoSubtree',
	    value: function renderIntoSubtree() {
	      ReactDOM.unstable_renderSubtreeIntoContainer(this, this.renderChildren(), this._element);
	    }
	  }, {
	    key: 'renderChildren',
	    value: function renderChildren() {
	      var _props = this.props,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          isOpen = _props.isOpen,
	          flip = _props.flip,
	          target = _props.target,
	          offset = _props.offset,
	          fallbackPlacement = _props.fallbackPlacement,
	          placementPrefix = _props.placementPrefix,
	          hideArrow = _props.hideArrow,
	          className = _props.className,
	          tag = _props.tag,
	          container = _props.container,
	          modifiers = _props.modifiers,
	          attrs = objectWithoutProperties(_props, ['cssModule', 'children', 'isOpen', 'flip', 'target', 'offset', 'fallbackPlacement', 'placementPrefix', 'hideArrow', 'className', 'tag', 'container', 'modifiers']);
	
	      var arrowClassName = mapToCssModules('arrow', cssModule);
	      var placement = (this.state.placement || attrs.placement).split('-')[0];
	      var popperClassName = mapToCssModules(classNames(className, placementPrefix ? placementPrefix + '-' + placement : placement), this.props.cssModule);
	
	      var extendedModifiers = _extends({
	        offset: { offset: offset },
	        flip: { enabled: flip, behavior: fallbackPlacement },
	        update: {
	          enabled: true,
	          order: 950,
	          fn: this.handlePlacementChange
	        }
	      }, modifiers);
	
	      return React__default.createElement(
	        reactPopper.Popper,
	        _extends({ modifiers: extendedModifiers }, attrs, { component: tag, className: popperClassName }),
	        children,
	        !hideArrow && React__default.createElement(reactPopper.Arrow, { className: arrowClassName })
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      this.setTargetNode(getTarget(this.props.target));
	
	      if (this.props.container === 'inline') {
	        return this.props.isOpen ? this.renderChildren() : null;
	      }
	
	      return null;
	    }
	  }]);
	  return PopperContent;
	}(React__default.Component);
	
	PopperContent.propTypes = propTypes$35;
	PopperContent.defaultProps = defaultProps$33;
	PopperContent.childContextTypes = childContextTypes$1;
	
	var PopperTargetHelper = function PopperTargetHelper(props, context) {
	  context.popperManager.setTargetNode(getTarget(props.target));
	  return null;
	};
	
	PopperTargetHelper.contextTypes = {
	  popperManager: PropTypes.object.isRequired
	};
	
	PopperTargetHelper.propTypes = {
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired
	};
	
	var propTypes$36 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  placementPrefix: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object
	};
	
	var DEFAULT_DELAYS = {
	  show: 0,
	  hide: 0
	};
	
	var defaultProps$34 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'right',
	  placementPrefix: 'bs-popover',
	  delay: DEFAULT_DELAYS,
	  toggle: function toggle() {}
	};
	
	var Popover = function (_React$Component) {
	  inherits(Popover, _React$Component);
	
	  function Popover(props) {
	    classCallCheck(this, Popover);
	
	    var _this = possibleConstructorReturn(this, (Popover.__proto__ || Object.getPrototypeOf(Popover)).call(this, props));
	
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.getRef = _this.getRef.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    return _this;
	  }
	
	  createClass(Popover, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.handleProps();
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate() {
	      this.handleProps();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.clearShowTimeout();
	      this.clearHideTimeout();
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'getRef',
	    value: function getRef(ref) {
	      this._popover = ref;
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'handleProps',
	    value: function handleProps() {
	      if (this.props.isOpen) {
	        this.show();
	      } else {
	        this.hide();
	      }
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      this.clearHideTimeout();
	      this.addTargetEvents();
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this._showTimeout = setTimeout(this.toggle, this.getDelay('show'));
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      this.clearShowTimeout();
	      this.removeTargetEvents();
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this._hideTimeout = setTimeout(this.toggle, this.getDelay('hide'));
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e.target !== this._target && !this._target.contains(e.target) && e.target !== this._popover && !(this._popover && this._popover.contains(e.target))) {
	        if (this._hideTimeout) {
	          this.clearHideTimeout();
	        }
	
	        if (this.props.isOpen) {
	          this.toggle();
	        }
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$36));
	      var classes = mapToCssModules(classNames('popover-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('popover', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          container: this.props.container,
	          modifiers: this.props.modifiers
	        },
	        React__default.createElement('div', _extends({}, attributes, { className: classes, ref: this.getRef }))
	      );
	    }
	  }]);
	  return Popover;
	}(React__default.Component);
	
	Popover.propTypes = propTypes$36;
	Popover.defaultProps = defaultProps$34;
	
	var propTypes$37 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$35 = {
	  tag: 'h3'
	};
	
	var PopoverHeader = function PopoverHeader(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-header'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverHeader.propTypes = propTypes$37;
	PopoverHeader.defaultProps = defaultProps$35;
	
	function PopoverTitle(props) {
	  warnOnce('The "PopoverTitle" component has been deprecated.\nPlease use component "PopoverHeader".');
	  return React__default.createElement(PopoverHeader, props);
	}
	
	var propTypes$38 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$36 = {
	  tag: 'div'
	};
	
	var PopoverBody = function PopoverBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'popover-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PopoverBody.propTypes = propTypes$38;
	PopoverBody.defaultProps = defaultProps$36;
	
	function PopoverContent(props) {
	  warnOnce('The "PopoverContent" component has been deprecated.\nPlease use component "PopoverBody".');
	  return React__default.createElement(PopoverBody, props);
	}
	
	var propTypes$39 = {
	  children: PropTypes.node,
	  bar: PropTypes.bool,
	  multi: PropTypes.bool,
	  tag: PropTypes.string,
	  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	  animated: PropTypes.bool,
	  striped: PropTypes.bool,
	  color: PropTypes.string,
	  className: PropTypes.string,
	  barClassName: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$37 = {
	  tag: 'div',
	  value: 0,
	  max: 100
	};
	
	var Progress = function Progress(props) {
	  var children = props.children,
	      className = props.className,
	      barClassName = props.barClassName,
	      cssModule = props.cssModule,
	      value = props.value,
	      max = props.max,
	      animated = props.animated,
	      striped = props.striped,
	      color = props.color,
	      bar = props.bar,
	      multi = props.multi,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['children', 'className', 'barClassName', 'cssModule', 'value', 'max', 'animated', 'striped', 'color', 'bar', 'multi', 'tag']);
	
	
	  var percent = toNumber(value) / toNumber(max) * 100;
	
	  var progressClasses = mapToCssModules(classNames(className, 'progress'), cssModule);
	
	  var progressBarClasses = mapToCssModules(classNames('progress-bar', bar ? className || barClassName : barClassName, animated ? 'progress-bar-animated' : null, color ? 'bg-' + color : null, striped || animated ? 'progress-bar-striped' : null), cssModule);
	
	  var ProgressBar = multi ? children : React__default.createElement('div', {
	    className: progressBarClasses,
	    style: { width: percent + '%' },
	    role: 'progressbar',
	    'aria-valuenow': value,
	    'aria-valuemin': '0',
	    'aria-valuemax': max,
	    children: children
	  });
	
	  if (bar) {
	    return ProgressBar;
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: progressClasses, children: ProgressBar }));
	};
	
	Progress.propTypes = propTypes$39;
	Progress.defaultProps = defaultProps$37;
	
	function noop() {}
	
	var FadePropTypes = PropTypes.shape(Fade.propTypes);
	
	var propTypes$40 = {
	  isOpen: PropTypes.bool,
	  autoFocus: PropTypes.bool,
	  centered: PropTypes.bool,
	  size: PropTypes.string,
	  toggle: PropTypes.func,
	  keyboard: PropTypes.bool,
	  role: PropTypes.string,
	  labelledBy: PropTypes.string,
	  backdrop: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['static'])]),
	  onEnter: PropTypes.func,
	  onExit: PropTypes.func,
	  onOpened: PropTypes.func,
	  onClosed: PropTypes.func,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  wrapClassName: PropTypes.string,
	  modalClassName: PropTypes.string,
	  backdropClassName: PropTypes.string,
	  contentClassName: PropTypes.string,
	  external: PropTypes.node,
	  fade: PropTypes.bool,
	  cssModule: PropTypes.object,
	  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	  backdropTransition: FadePropTypes,
	  modalTransition: FadePropTypes
	};
	
	var propsToOmit = Object.keys(propTypes$40);
	
	var defaultProps$38 = {
	  isOpen: false,
	  autoFocus: true,
	  centered: false,
	  role: 'dialog',
	  backdrop: true,
	  keyboard: true,
	  zIndex: 1050,
	  fade: true,
	  onOpened: noop,
	  onClosed: noop,
	  modalTransition: {
	    timeout: TransitionTimeouts.Modal
	  },
	  backdropTransition: {
	    mountOnEnter: true,
	    timeout: TransitionTimeouts.Fade // uses standard fade transition
	  }
	};
	
	var Modal = function (_React$Component) {
	  inherits(Modal, _React$Component);
	
	  function Modal(props) {
	    classCallCheck(this, Modal);
	
	    var _this = possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
	
	    _this._element = null;
	    _this._originalBodyPadding = null;
	    _this.handleBackdropClick = _this.handleBackdropClick.bind(_this);
	    _this.handleEscape = _this.handleEscape.bind(_this);
	    _this.onOpened = _this.onOpened.bind(_this);
	    _this.onClosed = _this.onClosed.bind(_this);
	
	    _this.state = {
	      isOpen: props.isOpen
	    };
	
	    if (props.isOpen) {
	      _this.init();
	    }
	    return _this;
	  }
	
	  createClass(Modal, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      if (this.props.onEnter) {
	        this.props.onEnter();
	      }
	
	      if (this.state.isOpen && this.props.autoFocus) {
	        this.setFocus();
	      }
	
	      this._isMounted = true;
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.isOpen && !this.props.isOpen) {
	        this.setState({ isOpen: nextProps.isOpen });
	      }
	    }
	  }, {
	    key: 'componentWillUpdate',
	    value: function componentWillUpdate(nextProps, nextState) {
	      if (nextState.isOpen && !this.state.isOpen) {
	        this.init();
	      }
	    }
	  }, {
	    key: 'componentDidUpdate',
	    value: function componentDidUpdate(prevProps, prevState) {
	      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
	        this.setFocus();
	      }
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      if (this.props.onExit) {
	        this.props.onExit();
	      }
	
	      if (this.state.isOpen) {
	        this.destroy();
	      }
	
	      this._isMounted = false;
	    }
	  }, {
	    key: 'onOpened',
	    value: function onOpened(node, isAppearing) {
	      this.props.onOpened();
	      (this.props.modalTransition.onEntered || noop)(node, isAppearing);
	    }
	  }, {
	    key: 'onClosed',
	    value: function onClosed(node) {
	      // so all methods get called before it is unmounted
	      this.props.onClosed();
	      (this.props.modalTransition.onExited || noop)(node);
	      this.destroy();
	
	      if (this._isMounted) {
	        this.setState({ isOpen: false });
	      }
	    }
	  }, {
	    key: 'setFocus',
	    value: function setFocus() {
	      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
	        this._dialog.parentNode.focus();
	      }
	    }
	  }, {
	    key: 'handleBackdropClick',
	    value: function handleBackdropClick(e) {
	      e.stopPropagation();
	      if (!this.props.isOpen || this.props.backdrop !== true) return;
	
	      var container = this._dialog;
	
	      if (e.target && !container.contains(e.target) && this.props.toggle) {
	        this.props.toggle();
	      }
	    }
	  }, {
	    key: 'handleEscape',
	    value: function handleEscape(e) {
	      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
	        this.props.toggle();
	      }
	    }
	  }, {
	    key: 'init',
	    value: function init() {
	      this._element = document.createElement('div');
	      this._element.setAttribute('tabindex', '-1');
	      this._element.style.position = 'relative';
	      this._element.style.zIndex = this.props.zIndex;
	      this._originalBodyPadding = getOriginalBodyPadding();
	
	      conditionallyUpdateScrollbar();
	
	      document.body.appendChild(this._element);
	
	      document.body.className = classNames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      document.body.removeChild(this._element);
	      this._element = null;
	
	      var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule);
	      // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`
	      var modalOpenClassNameRegex = new RegExp('(^| )' + modalOpenClassName + '( |$)');
	      document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
	
	      setScrollbarWidth(this._originalBodyPadding);
	    }
	  }, {
	    key: 'renderModalDialog',
	    value: function renderModalDialog() {
	      var _classNames,
	          _this2 = this;
	
	      var attributes = omit(this.props, propsToOmit);
	      var dialogBaseClass = 'modal-dialog';
	
	      return React__default.createElement(
	        'div',
	        _extends({}, attributes, {
	          className: mapToCssModules(classNames(dialogBaseClass, this.props.className, (_classNames = {}, defineProperty(_classNames, 'modal-' + this.props.size, this.props.size), defineProperty(_classNames, dialogBaseClass + '-centered', this.props.centered), _classNames)), this.props.cssModule),
	          role: 'document',
	          ref: function ref(c) {
	            _this2._dialog = c;
	          }
	        }),
	        React__default.createElement(
	          'div',
	          {
	            className: mapToCssModules(classNames('modal-content', this.props.contentClassName), this.props.cssModule)
	          },
	          this.props.children
	        )
	      );
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (this.state.isOpen) {
	        var _props = this.props,
	            wrapClassName = _props.wrapClassName,
	            modalClassName = _props.modalClassName,
	            backdropClassName = _props.backdropClassName,
	            cssModule = _props.cssModule,
	            isOpen = _props.isOpen,
	            backdrop = _props.backdrop,
	            role = _props.role,
	            labelledBy = _props.labelledBy,
	            external = _props.external;
	
	
	        var modalAttributes = {
	          onClick: this.handleBackdropClick,
	          onKeyUp: this.handleEscape,
	          style: { display: 'block' },
	          'aria-labelledby': labelledBy,
	          role: role,
	          tabIndex: '-1'
	        };
	
	        var hasTransition = this.props.fade;
	        var modalTransition = _extends({}, Fade.defaultProps, this.props.modalTransition, {
	          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
	          timeout: hasTransition ? this.props.modalTransition.timeout : 0
	        });
	        var backdropTransition = _extends({}, Fade.defaultProps, this.props.backdropTransition, {
	          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
	          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
	        });
	
	        return React__default.createElement(
	          reactPortal.Portal,
	          { node: this._element },
	          React__default.createElement(
	            'div',
	            { className: mapToCssModules(wrapClassName) },
	            React__default.createElement(
	              Fade,
	              _extends({}, modalAttributes, modalTransition, {
	                'in': isOpen,
	                onEntered: this.onOpened,
	                onExited: this.onClosed,
	                cssModule: cssModule,
	                className: mapToCssModules(classNames('modal', modalClassName), cssModule)
	              }),
	              external,
	              this.renderModalDialog()
	            ),
	            React__default.createElement(Fade, _extends({}, backdropTransition, {
	              'in': isOpen && !!backdrop,
	              cssModule: cssModule,
	              className: mapToCssModules(classNames('modal-backdrop', backdropClassName), cssModule)
	            }))
	          )
	        );
	      }
	
	      return null;
	    }
	  }]);
	  return Modal;
	}(React__default.Component);
	
	Modal.propTypes = propTypes$40;
	Modal.defaultProps = defaultProps$38;
	
	var propTypes$41 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  wrapTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  toggle: PropTypes.func,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  children: PropTypes.node,
	  closeAriaLabel: PropTypes.string
	};
	
	var defaultProps$39 = {
	  tag: 'h5',
	  wrapTag: 'div',
	  closeAriaLabel: 'Close'
	};
	
	var ModalHeader = function ModalHeader(props) {
	  var closeButton = void 0;
	  var className = props.className,
	      cssModule = props.cssModule,
	      children = props.children,
	      toggle = props.toggle,
	      Tag = props.tag,
	      WrapTag = props.wrapTag,
	      closeAriaLabel = props.closeAriaLabel,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'children', 'toggle', 'tag', 'wrapTag', 'closeAriaLabel']);
	
	
	  var classes = mapToCssModules(classNames(className, 'modal-header'), cssModule);
	
	  if (toggle) {
	    closeButton = React__default.createElement(
	      'button',
	      { type: 'button', onClick: toggle, className: mapToCssModules('close', cssModule), 'aria-label': closeAriaLabel },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        String.fromCharCode(215)
	      )
	    );
	  }
	
	  return React__default.createElement(
	    WrapTag,
	    _extends({}, attributes, { className: classes }),
	    React__default.createElement(
	      Tag,
	      { className: mapToCssModules('modal-title', cssModule) },
	      children
	    ),
	    closeButton
	  );
	};
	
	ModalHeader.propTypes = propTypes$41;
	ModalHeader.defaultProps = defaultProps$39;
	
	var propTypes$42 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$40 = {
	  tag: 'div'
	};
	
	var ModalBody = function ModalBody(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-body'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalBody.propTypes = propTypes$42;
	ModalBody.defaultProps = defaultProps$40;
	
	var propTypes$43 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$41 = {
	  tag: 'div'
	};
	
	var ModalFooter = function ModalFooter(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'modal-footer'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ModalFooter.propTypes = propTypes$43;
	ModalFooter.defaultProps = defaultProps$41;
	
	var propTypes$44 = {
	  placement: PropTypes.oneOf(PopperPlacements),
	  target: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]).isRequired,
	  container: PropTypes.oneOfType([PropTypes.string, PropTypes.func, DOMElement]),
	  isOpen: PropTypes.bool,
	  disabled: PropTypes.bool,
	  hideArrow: PropTypes.bool,
	  className: PropTypes.string,
	  innerClassName: PropTypes.string,
	  cssModule: PropTypes.object,
	  toggle: PropTypes.func,
	  autohide: PropTypes.bool,
	  placementPrefix: PropTypes.string,
	  delay: PropTypes.oneOfType([PropTypes.shape({ show: PropTypes.number, hide: PropTypes.number }), PropTypes.number]),
	  modifiers: PropTypes.object
	};
	
	var DEFAULT_DELAYS$1 = {
	  show: 0,
	  hide: 250
	};
	
	var defaultProps$42 = {
	  isOpen: false,
	  hideArrow: false,
	  placement: 'top',
	  placementPrefix: 'bs-tooltip',
	  delay: DEFAULT_DELAYS$1,
	  autohide: true,
	  toggle: function toggle() {}
	};
	
	var Tooltip = function (_React$Component) {
	  inherits(Tooltip, _React$Component);
	
	  function Tooltip(props) {
	    classCallCheck(this, Tooltip);
	
	    var _this = possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
	
	    _this.addTargetEvents = _this.addTargetEvents.bind(_this);
	    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
	    _this.removeTargetEvents = _this.removeTargetEvents.bind(_this);
	    _this.toggle = _this.toggle.bind(_this);
	    _this.onMouseOverTooltip = _this.onMouseOverTooltip.bind(_this);
	    _this.onMouseLeaveTooltip = _this.onMouseLeaveTooltip.bind(_this);
	    _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_this);
	    _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_this);
	    _this.show = _this.show.bind(_this);
	    _this.hide = _this.hide.bind(_this);
	    return _this;
	  }
	
	  createClass(Tooltip, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this._target = getTarget(this.props.target);
	      this.addTargetEvents();
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.removeTargetEvents();
	    }
	  }, {
	    key: 'onMouseOverTooltip',
	    value: function onMouseOverTooltip() {
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	      this._showTimeout = setTimeout(this.show, this.getDelay('show'));
	    }
	  }, {
	    key: 'onMouseLeaveTooltip',
	    value: function onMouseLeaveTooltip() {
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
	    }
	  }, {
	    key: 'onMouseOverTooltipContent',
	    value: function onMouseOverTooltipContent() {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._hideTimeout) {
	        this.clearHideTimeout();
	      }
	    }
	  }, {
	    key: 'onMouseLeaveTooltipContent',
	    value: function onMouseLeaveTooltipContent() {
	      if (this.props.autohide) {
	        return;
	      }
	      if (this._showTimeout) {
	        this.clearShowTimeout();
	      }
	      this._hideTimeout = setTimeout(this.hide, this.getDelay('hide'));
	    }
	  }, {
	    key: 'getDelay',
	    value: function getDelay(key) {
	      var delay = this.props.delay;
	
	      if ((typeof delay === 'undefined' ? 'undefined' : _typeof(delay)) === 'object') {
	        return isNaN(delay[key]) ? DEFAULT_DELAYS$1[key] : delay[key];
	      }
	      return delay;
	    }
	  }, {
	    key: 'show',
	    value: function show() {
	      if (!this.props.isOpen) {
	        this.clearShowTimeout();
	        this.toggle();
	      }
	    }
	  }, {
	    key: 'hide',
	    value: function hide() {
	      if (this.props.isOpen) {
	        this.clearHideTimeout();
	        this.toggle();
	      }
	    }
	  }, {
	    key: 'clearShowTimeout',
	    value: function clearShowTimeout() {
	      clearTimeout(this._showTimeout);
	      this._showTimeout = undefined;
	    }
	  }, {
	    key: 'clearHideTimeout',
	    value: function clearHideTimeout() {
	      clearTimeout(this._hideTimeout);
	      this._hideTimeout = undefined;
	    }
	  }, {
	    key: 'handleDocumentClick',
	    value: function handleDocumentClick(e) {
	      if (e.target === this._target || this._target.contains(e.target)) {
	        if (this._hideTimeout) {
	          this.clearHideTimeout();
	        }
	
	        if (!this.props.isOpen) {
	          this.toggle();
	        }
	      }
	    }
	  }, {
	    key: 'addTargetEvents',
	    value: function addTargetEvents() {
	      var _this2 = this;
	
	      this._target.addEventListener('mouseover', this.onMouseOverTooltip, true);
	      this._target.addEventListener('mouseout', this.onMouseLeaveTooltip, true);
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.addEventListener(event, _this2.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'removeTargetEvents',
	    value: function removeTargetEvents() {
	      var _this3 = this;
	
	      this._target.removeEventListener('mouseover', this.onMouseOverTooltip, true);
	      this._target.removeEventListener('mouseout', this.onMouseLeaveTooltip, true);
	      ['click', 'touchstart'].forEach(function (event) {
	        return document.removeEventListener(event, _this3.handleDocumentClick, true);
	      });
	    }
	  }, {
	    key: 'toggle',
	    value: function toggle(e) {
	      if (this.props.disabled) {
	        return e && e.preventDefault();
	      }
	
	      return this.props.toggle();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      if (!this.props.isOpen) {
	        return null;
	      }
	
	      var attributes = omit(this.props, Object.keys(propTypes$44));
	      var classes = mapToCssModules(classNames('tooltip-inner', this.props.innerClassName), this.props.cssModule);
	
	      var popperClasses = mapToCssModules(classNames('tooltip', 'show', this.props.className), this.props.cssModule);
	
	      return React__default.createElement(
	        PopperContent,
	        {
	          className: popperClasses,
	          target: this.props.target,
	          isOpen: this.props.isOpen,
	          hideArrow: this.props.hideArrow,
	          placement: this.props.placement,
	          placementPrefix: this.props.placementPrefix,
	          container: this.props.container,
	          modifiers: this.props.modifiers
	        },
	        React__default.createElement('div', _extends({}, attributes, {
	          className: classes,
	          onMouseOver: this.onMouseOverTooltipContent,
	          onMouseLeave: this.onMouseLeaveTooltipContent
	        }))
	      );
	    }
	  }]);
	  return Tooltip;
	}(React__default.Component);
	
	Tooltip.propTypes = propTypes$44;
	Tooltip.defaultProps = defaultProps$42;
	
	var propTypes$45 = {
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  bordered: PropTypes.bool,
	  striped: PropTypes.bool,
	  inverse: deprecated(PropTypes.bool, 'Please use the prop "dark"'),
	  dark: PropTypes.bool,
	  hover: PropTypes.bool,
	  responsive: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  responsiveTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$43 = {
	  tag: 'table',
	  responsiveTag: 'div'
	};
	
	var Table = function Table(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      bordered = props.bordered,
	      striped = props.striped,
	      inverse = props.inverse,
	      dark = props.dark,
	      hover = props.hover,
	      responsive = props.responsive,
	      Tag = props.tag,
	      ResponsiveTag = props.responsiveTag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'bordered', 'striped', 'inverse', 'dark', 'hover', 'responsive', 'tag', 'responsiveTag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, striped ? 'table-striped' : false, dark || inverse ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
	
	  var table = React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	
	  if (responsive) {
	    var responsiveClassName = responsive === true ? 'table-responsive' : 'table-responsive-' + responsive;
	
	    return React__default.createElement(
	      ResponsiveTag,
	      { className: responsiveClassName },
	      table
	    );
	  }
	
	  return table;
	};
	
	Table.propTypes = propTypes$45;
	Table.defaultProps = defaultProps$43;
	
	var propTypes$46 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  flush: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$44 = {
	  tag: 'ul'
	};
	
	var ListGroup = function ListGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      flush = props.flush,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'flush']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroup.propTypes = propTypes$46;
	ListGroup.defaultProps = defaultProps$44;
	
	var propTypes$47 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$45 = {
	  tag: 'form'
	};
	
	var Form = function Form(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      Tag = props.tag,
	      innerRef = props.innerRef,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'tag', 'innerRef']);
	
	
	  var classes = mapToCssModules(classNames(className, inline ? 'form-inline' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	};
	
	Form.propTypes = propTypes$47;
	Form.defaultProps = defaultProps$45;
	
	var propTypes$48 = {
	  children: PropTypes.node,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  valid: PropTypes.bool
	};
	
	var defaultProps$46 = {
	  tag: 'div',
	  valid: undefined
	};
	
	var FormFeedback = function FormFeedback(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      valid = props.valid,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'valid', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, valid ? 'valid-feedback' : 'invalid-feedback'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormFeedback.propTypes = propTypes$48;
	FormFeedback.defaultProps = defaultProps$46;
	
	var propTypes$49 = {
	  children: PropTypes.node,
	  row: PropTypes.bool,
	  check: PropTypes.bool,
	  inline: PropTypes.bool,
	  disabled: PropTypes.bool,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$47 = {
	  tag: 'div'
	};
	
	var FormGroup = function FormGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      row = props.row,
	      disabled = props.disabled,
	      check = props.check,
	      inline = props.inline,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'row', 'disabled', 'check', 'inline', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormGroup.propTypes = propTypes$49;
	FormGroup.defaultProps = defaultProps$47;
	
	var propTypes$50 = {
	  children: PropTypes.node,
	  inline: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  color: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$48 = {
	  tag: 'small',
	  color: 'muted'
	};
	
	var FormText = function FormText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      inline = props.inline,
	      color = props.color,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'inline', 'color', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, !inline ? 'form-text' : false, color ? 'text-' + color : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	FormText.propTypes = propTypes$50;
	FormText.defaultProps = defaultProps$48;
	
	/* eslint react/prefer-stateless-function: 0 */
	
	var propTypes$51 = {
	  children: PropTypes.node,
	  type: PropTypes.string,
	  size: PropTypes.string,
	  bsSize: PropTypes.string,
	  state: deprecated(PropTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
	  valid: PropTypes.bool,
	  invalid: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  static: deprecated(PropTypes.bool, 'Please use the prop "plaintext"'),
	  plaintext: PropTypes.bool,
	  addon: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$49 = {
	  type: 'text'
	};
	
	var Input = function (_React$Component) {
	  inherits(Input, _React$Component);
	
	  function Input() {
	    classCallCheck(this, Input);
	    return possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).apply(this, arguments));
	  }
	
	  createClass(Input, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          type = _props.type,
	          bsSize = _props.bsSize,
	          state = _props.state,
	          valid = _props.valid,
	          invalid = _props.invalid,
	          tag = _props.tag,
	          addon = _props.addon,
	          staticInput = _props.static,
	          plaintext = _props.plaintext,
	          innerRef = _props.innerRef,
	          attributes = objectWithoutProperties(_props, ['className', 'cssModule', 'type', 'bsSize', 'state', 'valid', 'invalid', 'tag', 'addon', 'static', 'plaintext', 'innerRef']);
	
	
	      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
	      var isNotaNumber = new RegExp('\\D', 'g');
	
	      var fileInput = type === 'file';
	      var textareaInput = type === 'textarea';
	      var selectInput = type === 'select';
	      var Tag = tag || (selectInput || textareaInput ? type : 'input');
	
	      var formControlClass = 'form-control';
	
	      if (plaintext || staticInput) {
	        formControlClass = formControlClass + '-plaintext';
	        Tag = tag || 'p';
	      } else if (fileInput) {
	        formControlClass = formControlClass + '-file';
	      } else if (checkInput) {
	        if (addon) {
	          formControlClass = null;
	        } else {
	          formControlClass = 'form-check-input';
	        }
	      }
	
	      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
	        if (state === 'danger') {
	          invalid = true;
	        } else if (state === 'success') {
	          valid = true;
	        }
	      }
	
	      if (attributes.size && isNotaNumber.test(attributes.size)) {
	        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
	        bsSize = attributes.size;
	        delete attributes.size;
	      }
	
	      var classes = mapToCssModules(classNames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? 'form-control-' + bsSize : false, formControlClass), cssModule);
	
	      if (Tag === 'input' || typeof tag !== 'string') {
	        attributes.type = type;
	      }
	
	      return React__default.createElement(Tag, _extends({}, attributes, { ref: innerRef, className: classes }));
	    }
	  }]);
	  return Input;
	}(React__default.Component);
	
	Input.propTypes = propTypes$51;
	Input.defaultProps = defaultProps$49;
	
	var propTypes$52 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  size: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$50 = {
	  tag: 'div'
	};
	
	var InputGroup = function InputGroup(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      size = props.size,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'size']);
	
	  var classes = mapToCssModules(classNames(className, 'input-group', size ? 'input-group-' + size : null), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroup.propTypes = propTypes$52;
	InputGroup.defaultProps = defaultProps$50;
	
	var propTypes$54 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$52 = {
	  tag: 'span'
	};
	
	var InputGroupText = function InputGroupText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	InputGroupText.propTypes = propTypes$54;
	InputGroupText.defaultProps = defaultProps$52;
	
	var propTypes$53 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$51 = {
	  tag: 'div'
	};
	
	var InputGroupAddon = function InputGroupAddon(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      addonType = props.addonType,
	      children = props.children,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'addonType', 'children']);
	
	
	  var classes = mapToCssModules(classNames(className, 'input-group-' + addonType), cssModule);
	
	  // Convenience to assist with transition
	  if (typeof children === 'string') {
	    return React__default.createElement(
	      Tag,
	      _extends({}, attributes, { className: classes }),
	      React__default.createElement(InputGroupText, { children: children })
	    );
	  }
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes, children: children }));
	};
	
	InputGroupAddon.propTypes = propTypes$53;
	InputGroupAddon.defaultProps = defaultProps$51;
	
	var propTypes$55 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node,
	  groupClassName: PropTypes.string,
	  groupAttributes: PropTypes.object,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var InputGroupButton = function InputGroupButton(props) {
	  warnOnce('The "InputGroupButton" component has been deprecated.\nPlease use component "InputGroupAddon".');
	
	  var children = props.children,
	      groupClassName = props.groupClassName,
	      groupAttributes = props.groupAttributes,
	      propsWithoutGroup = objectWithoutProperties(props, ['children', 'groupClassName', 'groupAttributes']);
	
	
	  if (typeof children === 'string') {
	    var cssModule = propsWithoutGroup.cssModule,
	        tag = propsWithoutGroup.tag,
	        addonType = propsWithoutGroup.addonType,
	        attributes = objectWithoutProperties(propsWithoutGroup, ['cssModule', 'tag', 'addonType']);
	
	
	    var allGroupAttributes = _extends({}, groupAttributes, {
	      cssModule: cssModule,
	      tag: tag,
	      addonType: addonType
	    });
	
	    return React__default.createElement(
	      InputGroupAddon,
	      _extends({}, allGroupAttributes, { className: groupClassName }),
	      React__default.createElement(Button, _extends({}, attributes, { children: children }))
	    );
	  }
	
	  return React__default.createElement(InputGroupAddon, _extends({}, props, { children: children }));
	};
	
	InputGroupButton.propTypes = propTypes$55;
	
	var propTypes$56 = {
	  addonType: PropTypes.oneOf(['prepend', 'append']).isRequired,
	  children: PropTypes.node
	};
	
	var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
	  return React__default.createElement(Dropdown, props);
	};
	
	InputGroupButtonDropdown.propTypes = propTypes$56;
	
	var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
	
	var stringOrNumberProp$1 = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
	
	var columnProps$1 = PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape({
	  size: stringOrNumberProp$1,
	  push: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  pull: deprecated(stringOrNumberProp$1, 'Please use the prop "order"'),
	  order: stringOrNumberProp$1,
	  offset: stringOrNumberProp$1
	})]);
	
	var propTypes$57 = {
	  children: PropTypes.node,
	  hidden: PropTypes.bool,
	  check: PropTypes.bool,
	  size: PropTypes.string,
	  for: PropTypes.string,
	  tag: PropTypes.string,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  xs: columnProps$1,
	  sm: columnProps$1,
	  md: columnProps$1,
	  lg: columnProps$1,
	  xl: columnProps$1,
	  widths: PropTypes.array
	};
	
	var defaultProps$53 = {
	  tag: 'label',
	  widths: colWidths$1
	};
	
	var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
	  if (colSize === true || colSize === '') {
	    return isXs ? 'col' : 'col-' + colWidth;
	  } else if (colSize === 'auto') {
	    return isXs ? 'col-auto' : 'col-' + colWidth + '-auto';
	  }
	
	  return isXs ? 'col-' + colSize : 'col-' + colWidth + '-' + colSize;
	};
	
	var Label = function Label(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      hidden = props.hidden,
	      widths = props.widths,
	      Tag = props.tag,
	      check = props.check,
	      size = props.size,
	      htmlFor = props.for,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'hidden', 'widths', 'tag', 'check', 'size', 'for']);
	
	
	  var colClasses = [];
	
	  widths.forEach(function (colWidth, i) {
	    var columnProp = props[colWidth];
	
	    delete attributes[colWidth];
	
	    if (!columnProp && columnProp !== '') {
	      return;
	    }
	
	    var isXs = !i;
	    var colClass = void 0;
	
	    if (isobject(columnProp)) {
	      var _classNames;
	
	      var colSizeInterfix = isXs ? '-' : '-' + colWidth + '-';
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
	
	      colClasses.push(mapToCssModules(classNames((_classNames = {}, defineProperty(_classNames, colClass, columnProp.size || columnProp.size === ''), defineProperty(_classNames, 'order' + colSizeInterfix + columnProp.order, columnProp.order || columnProp.order === 0), defineProperty(_classNames, 'offset' + colSizeInterfix + columnProp.offset, columnProp.offset || columnProp.offset === 0), _classNames))), cssModule);
	    } else {
	      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
	      colClasses.push(colClass);
	    }
	  });
	
	  var classes = mapToCssModules(classNames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? 'col-form-label-' + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({ htmlFor: htmlFor }, attributes, { className: classes }));
	};
	
	Label.propTypes = propTypes$57;
	Label.defaultProps = defaultProps$53;
	
	var propTypes$58 = {
	  body: PropTypes.bool,
	  bottom: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  heading: PropTypes.bool,
	  left: PropTypes.bool,
	  list: PropTypes.bool,
	  middle: PropTypes.bool,
	  object: PropTypes.bool,
	  right: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  top: PropTypes.bool
	};
	
	var Media = function Media(props) {
	  var body = props.body,
	      bottom = props.bottom,
	      className = props.className,
	      cssModule = props.cssModule,
	      heading = props.heading,
	      left = props.left,
	      list = props.list,
	      middle = props.middle,
	      object = props.object,
	      right = props.right,
	      tag = props.tag,
	      top = props.top,
	      attributes = objectWithoutProperties(props, ['body', 'bottom', 'className', 'cssModule', 'heading', 'left', 'list', 'middle', 'object', 'right', 'tag', 'top']);
	
	
	  var defaultTag = void 0;
	  if (heading) {
	    defaultTag = 'h4';
	  } else if (left || right) {
	    defaultTag = 'a';
	  } else if (object) {
	    defaultTag = 'img';
	  } else if (list) {
	    defaultTag = 'ul';
	  } else {
	    defaultTag = 'div';
	  }
	  var Tag = tag || defaultTag;
	
	  var classes = mapToCssModules(classNames(className, {
	    'media-body': body,
	    'media-heading': heading,
	    'media-left': left,
	    'media-right': right,
	    'media-top': top,
	    'media-bottom': bottom,
	    'media-middle': middle,
	    'media-object': object,
	    'media-list': list,
	    media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Media.propTypes = propTypes$58;
	
	var propTypes$59 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  size: PropTypes.string,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$54 = {
	  tag: 'ul'
	};
	
	var Pagination = function Pagination(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      size = props.size,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'size', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'pagination', defineProperty({}, 'pagination-' + size, !!size)), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Pagination.propTypes = propTypes$59;
	Pagination.defaultProps = defaultProps$54;
	
	var propTypes$60 = {
	  active: PropTypes.bool,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  disabled: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$55 = {
	  tag: 'li'
	};
	
	var PaginationItem = function PaginationItem(props) {
	  var active = props.active,
	      className = props.className,
	      cssModule = props.cssModule,
	      disabled = props.disabled,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['active', 'className', 'cssModule', 'disabled', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-item', {
	    active: active,
	    disabled: disabled
	  }), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	PaginationItem.propTypes = propTypes$60;
	PaginationItem.defaultProps = defaultProps$55;
	
	var propTypes$61 = {
	  'aria-label': PropTypes.string,
	  children: PropTypes.node,
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  next: PropTypes.bool,
	  previous: PropTypes.bool,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
	};
	
	var defaultProps$56 = {
	  tag: 'a'
	};
	
	var PaginationLink = function PaginationLink(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      next = props.next,
	      previous = props.previous,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'next', 'previous', 'tag']);
	
	
	  var classes = mapToCssModules(classNames(className, 'page-link'), cssModule);
	
	  var defaultAriaLabel = void 0;
	  if (previous) {
	    defaultAriaLabel = 'Previous';
	  } else if (next) {
	    defaultAriaLabel = 'Next';
	  }
	  var ariaLabel = props['aria-label'] || defaultAriaLabel;
	
	  var defaultCaret = void 0;
	  if (previous) {
	    defaultCaret = '\xAB';
	  } else if (next) {
	    defaultCaret = '\xBB';
	  }
	
	  var children = props.children;
	  if (children && Array.isArray(children) && children.length === 0) {
	    children = null;
	  }
	
	  if (previous || next) {
	    children = [React__default.createElement(
	      'span',
	      {
	        'aria-hidden': 'true',
	        key: 'caret'
	      },
	      children || defaultCaret
	    ), React__default.createElement(
	      'span',
	      {
	        className: 'sr-only',
	        key: 'sr'
	      },
	      ariaLabel
	    )];
	  }
	
	  return React__default.createElement(
	    Tag,
	    _extends({}, attributes, {
	      className: classes,
	      'aria-label': ariaLabel
	    }),
	    children
	  );
	};
	
	PaginationLink.propTypes = propTypes$61;
	PaginationLink.defaultProps = defaultProps$56;
	
	var propTypes$62 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  activeTab: PropTypes.any,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$57 = {
	  tag: 'div'
	};
	
	var childContextTypes$2 = {
	  activeTabId: PropTypes.any
	};
	
	var TabContent = function (_Component) {
	  inherits(TabContent, _Component);
	
	  function TabContent(props) {
	    classCallCheck(this, TabContent);
	
	    var _this = possibleConstructorReturn(this, (TabContent.__proto__ || Object.getPrototypeOf(TabContent)).call(this, props));
	
	    _this.state = {
	      activeTab: _this.props.activeTab
	    };
	    return _this;
	  }
	
	  createClass(TabContent, [{
	    key: 'getChildContext',
	    value: function getChildContext() {
	      return {
	        activeTabId: this.state.activeTab
	      };
	    }
	  }, {
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.state.activeTab !== nextProps.activeTab) {
	        this.setState({
	          activeTab: nextProps.activeTab
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          className = _props.className,
	          cssModule = _props.cssModule,
	          Tag = _props.tag;
	
	
	      var attributes = omit(this.props, Object.keys(propTypes$62));
	
	      var classes = mapToCssModules(classNames('tab-content', className), cssModule);
	
	      return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	    }
	  }]);
	  return TabContent;
	}(React.Component);
	
	TabContent.propTypes = propTypes$62;
	TabContent.defaultProps = defaultProps$57;
	TabContent.childContextTypes = childContextTypes$2;
	
	var propTypes$63 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.string,
	  cssModule: PropTypes.object,
	  tabId: PropTypes.any
	};
	
	var defaultProps$58 = {
	  tag: 'div'
	};
	
	var contextTypes$3 = {
	  activeTabId: PropTypes.any
	};
	
	function TabPane(props, context) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      tabId = props.tabId,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tabId', 'tag']);
	
	  var classes = mapToCssModules(classNames('tab-pane', className, { active: tabId === context.activeTabId }), cssModule);
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	}
	TabPane.propTypes = propTypes$63;
	TabPane.defaultProps = defaultProps$58;
	TabPane.contextTypes = contextTypes$3;
	
	var propTypes$64 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  fluid: PropTypes.bool,
	  className: PropTypes.string,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$59 = {
	  tag: 'div'
	};
	
	var Jumbotron = function Jumbotron(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      fluid = props.fluid,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'fluid']);
	
	
	  var classes = mapToCssModules(classNames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	Jumbotron.propTypes = propTypes$64;
	Jumbotron.defaultProps = defaultProps$59;
	
	var propTypes$65 = {
	  children: PropTypes.node,
	  className: PropTypes.string,
	  closeClassName: PropTypes.string,
	  closeAriaLabel: PropTypes.string,
	  cssModule: PropTypes.object,
	  color: PropTypes.string,
	  isOpen: PropTypes.bool,
	  toggle: PropTypes.func,
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  transition: PropTypes.shape(Fade.propTypes)
	};
	
	var defaultProps$60 = {
	  color: 'success',
	  isOpen: true,
	  tag: 'div',
	  closeAriaLabel: 'Close',
	  transition: _extends({}, Fade.defaultProps, {
	    unmountOnExit: true
	  })
	};
	
	function Alert(props) {
	  var className = props.className,
	      closeClassName = props.closeClassName,
	      closeAriaLabel = props.closeAriaLabel,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      color = props.color,
	      isOpen = props.isOpen,
	      toggle = props.toggle,
	      children = props.children,
	      transition = props.transition,
	      attributes = objectWithoutProperties(props, ['className', 'closeClassName', 'closeAriaLabel', 'cssModule', 'tag', 'color', 'isOpen', 'toggle', 'children', 'transition']);
	
	
	  var classes = mapToCssModules(classNames(className, 'alert', 'alert-' + color, { 'alert-dismissible': toggle }), cssModule);
	
	  var closeClasses = mapToCssModules(classNames('close', closeClassName), cssModule);
	
	  return React__default.createElement(
	    Fade,
	    _extends({}, attributes, transition, { tag: Tag, className: classes, 'in': isOpen, role: 'alert' }),
	    toggle ? React__default.createElement(
	      'button',
	      { type: 'button', className: closeClasses, 'aria-label': closeAriaLabel, onClick: toggle },
	      React__default.createElement(
	        'span',
	        { 'aria-hidden': 'true' },
	        '\xD7'
	      )
	    ) : null,
	    children
	  );
	}
	
	Alert.propTypes = propTypes$65;
	Alert.defaultProps = defaultProps$60;
	
	var _transitionStatusToCl;
	
	var propTypes$66 = _extends({}, Transition.propTypes, {
	  isOpen: PropTypes.bool,
	  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.node,
	  navbar: PropTypes.bool,
	  cssModule: PropTypes.object
	});
	
	var defaultProps$61 = _extends({}, Transition.defaultProps, {
	  isOpen: false,
	  appear: false,
	  enter: true,
	  exit: true,
	  tag: 'div',
	  timeout: TransitionTimeouts.Collapse
	});
	
	var transitionStatusToClassHash = (_transitionStatusToCl = {}, defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.ENTERED, 'collapse show'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITING, 'collapsing'), defineProperty(_transitionStatusToCl, TransitionStatuses.EXITED, 'collapse'), _transitionStatusToCl);
	
	function getTransitionClass(status) {
	  return transitionStatusToClassHash[status] || 'collapse';
	}
	
	function getHeight(node) {
	  return node.scrollHeight;
	}
	
	var Collapse = function (_Component) {
	  inherits(Collapse, _Component);
	
	  function Collapse(props) {
	    classCallCheck(this, Collapse);
	
	    var _this = possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, props));
	
	    _this.state = {
	      height: null
	    };
	
	    ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
	      _this[name] = _this[name].bind(_this);
	    });
	    return _this;
	  }
	
	  createClass(Collapse, [{
	    key: 'onEntering',
	    value: function onEntering(node, isAppearing) {
	      this.setState({ height: getHeight(node) });
	      this.props.onEntering(node, isAppearing);
	    }
	  }, {
	    key: 'onEntered',
	    value: function onEntered(node, isAppearing) {
	      this.setState({ height: null });
	      this.props.onEntered(node, isAppearing);
	    }
	  }, {
	    key: 'onExit',
	    value: function onExit(node) {
	      this.setState({ height: getHeight(node) });
	      this.props.onExit(node);
	    }
	  }, {
	    key: 'onExiting',
	    value: function onExiting(node) {
	      // getting this variable triggers a reflow
	      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars
	      this.setState({ height: 0 });
	      this.props.onExiting(node);
	    }
	  }, {
	    key: 'onExited',
	    value: function onExited(node) {
	      this.setState({ height: null });
	      this.props.onExited(node);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          Tag = _props.tag,
	          isOpen = _props.isOpen,
	          className = _props.className,
	          navbar = _props.navbar,
	          cssModule = _props.cssModule,
	          children = _props.children,
	          otherProps = objectWithoutProperties(_props, ['tag', 'isOpen', 'className', 'navbar', 'cssModule', 'children']);
	      var height = this.state.height;
	
	      // In NODE_ENV=production the Transition.propTypes are wrapped which results in an
	      // empty object "{}". This is the result of the `react-transition-group` babel
	      // configuration settings. Therefore, to ensure that production builds work without
	      // error, we can either explicitly define keys or use the Transition.defaultProps.
	      // Using the Transition.defaultProps excludes any required props. Thus, the best
	      // solution is to explicitly define required props in our utilities and reference these.
	      // This also gives us more flexibility in the future to remove the prop-types
	      // dependency in distribution builds (Similar to how `react-transition-group` does).
	      // Note: Without omitting the `react-transition-group` props, the resulting child
	      // Tag component would inherit the Transition properties as attributes for the HTML
	      // element which results in errors/warnings for non-valid attributes.
	
	      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
	      var childProps = omit(otherProps, TransitionPropTypeKeys);
	
	      return React__default.createElement(
	        Transition,
	        _extends({}, transitionProps, {
	          'in': isOpen,
	          onEntering: this.onEntering,
	          onEntered: this.onEntered,
	          onExit: this.onExit,
	          onExiting: this.onExiting,
	          onExited: this.onExited
	        }),
	        function (status) {
	          var collapseClass = getTransitionClass(status);
	          var classes = mapToCssModules(classNames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
	          var style = height === null ? null : { height: height };
	          return React__default.createElement(
	            Tag,
	            _extends({}, childProps, {
	              style: _extends({}, childProps.style, style),
	              className: classes
	            }),
	            children
	          );
	        }
	      );
	    }
	  }]);
	  return Collapse;
	}(React.Component);
	
	Collapse.propTypes = propTypes$66;
	Collapse.defaultProps = defaultProps$61;
	
	var propTypes$67 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  active: PropTypes.bool,
	  disabled: PropTypes.bool,
	  color: PropTypes.string,
	  action: PropTypes.bool,
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$62 = {
	  tag: 'li'
	};
	
	var handleDisabledOnClick = function handleDisabledOnClick(e) {
	  e.preventDefault();
	};
	
	var ListGroupItem = function ListGroupItem(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      active = props.active,
	      disabled = props.disabled,
	      action = props.action,
	      color = props.color,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag', 'active', 'disabled', 'action', 'color']);
	
	  var classes = mapToCssModules(classNames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? 'list-group-item-' + color : false, 'list-group-item'), cssModule);
	
	  // Prevent click event when disabled.
	  if (disabled) {
	    attributes.onClick = handleDisabledOnClick;
	  }
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItem.propTypes = propTypes$67;
	ListGroupItem.defaultProps = defaultProps$62;
	
	var propTypes$68 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$63 = {
	  tag: 'h5'
	};
	
	var ListGroupItemHeading = function ListGroupItemHeading(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-heading'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemHeading.propTypes = propTypes$68;
	ListGroupItemHeading.defaultProps = defaultProps$63;
	
	var propTypes$69 = {
	  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
	  className: PropTypes.any,
	  cssModule: PropTypes.object
	};
	
	var defaultProps$64 = {
	  tag: 'p'
	};
	
	var ListGroupItemText = function ListGroupItemText(props) {
	  var className = props.className,
	      cssModule = props.cssModule,
	      Tag = props.tag,
	      attributes = objectWithoutProperties(props, ['className', 'cssModule', 'tag']);
	
	  var classes = mapToCssModules(classNames(className, 'list-group-item-text'), cssModule);
	
	  return React__default.createElement(Tag, _extends({}, attributes, { className: classes }));
	};
	
	ListGroupItemText.propTypes = propTypes$69;
	ListGroupItemText.defaultProps = defaultProps$64;
	
	var UncontrolledAlert = function (_Component) {
	  inherits(UncontrolledAlert, _Component);
	
	  function UncontrolledAlert(props) {
	    classCallCheck(this, UncontrolledAlert);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledAlert.__proto__ || Object.getPrototypeOf(UncontrolledAlert)).call(this, props));
	
	    _this.state = { isOpen: true };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledAlert, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Alert, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledAlert;
	}(React.Component);
	
	var UncontrolledButtonDropdown = function (_Component) {
	  inherits(UncontrolledButtonDropdown, _Component);
	
	  function UncontrolledButtonDropdown(props) {
	    classCallCheck(this, UncontrolledButtonDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledButtonDropdown.__proto__ || Object.getPrototypeOf(UncontrolledButtonDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledButtonDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(ButtonDropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledButtonDropdown;
	}(React.Component);
	
	var UncontrolledDropdown = function (_Component) {
	  inherits(UncontrolledDropdown, _Component);
	
	  function UncontrolledDropdown(props) {
	    classCallCheck(this, UncontrolledDropdown);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledDropdown.__proto__ || Object.getPrototypeOf(UncontrolledDropdown)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledDropdown, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Dropdown, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledDropdown;
	}(React.Component);
	
	var UncontrolledNavDropdown = function UncontrolledNavDropdown(props) {
	  warnOnce('The "UncontrolledNavDropdown" component has been deprecated.\nPlease use component "UncontrolledDropdown" with nav prop.');
	
	  return React__default.createElement(UncontrolledDropdown, _extends({ nav: true }, props));
	};
	
	var UncontrolledTooltip = function (_Component) {
	  inherits(UncontrolledTooltip, _Component);
	
	  function UncontrolledTooltip(props) {
	    classCallCheck(this, UncontrolledTooltip);
	
	    var _this = possibleConstructorReturn(this, (UncontrolledTooltip.__proto__ || Object.getPrototypeOf(UncontrolledTooltip)).call(this, props));
	
	    _this.state = { isOpen: false };
	    _this.toggle = _this.toggle.bind(_this);
	    return _this;
	  }
	
	  createClass(UncontrolledTooltip, [{
	    key: 'toggle',
	    value: function toggle() {
	      this.setState({ isOpen: !this.state.isOpen });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return React__default.createElement(Tooltip, _extends({ isOpen: this.state.isOpen, toggle: this.toggle }, this.props));
	    }
	  }]);
	  return UncontrolledTooltip;
	}(React.Component);
	
	exports.Alert = Alert;
	exports.Container = Container;
	exports.Row = Row;
	exports.Col = Col;
	exports.Navbar = Navbar;
	exports.NavbarBrand = NavbarBrand;
	exports.NavbarToggler = NavbarToggler;
	exports.Nav = Nav;
	exports.NavItem = NavItem;
	exports.NavDropdown = NavDropdown;
	exports.NavLink = NavLink;
	exports.Breadcrumb = Breadcrumb;
	exports.BreadcrumbItem = BreadcrumbItem;
	exports.Button = Button;
	exports.ButtonDropdown = ButtonDropdown;
	exports.ButtonGroup = ButtonGroup;
	exports.ButtonToolbar = ButtonToolbar;
	exports.Dropdown = Dropdown;
	exports.DropdownItem = DropdownItem;
	exports.DropdownMenu = DropdownMenu;
	exports.DropdownToggle = DropdownToggle;
	exports.Fade = Fade;
	exports.Badge = Badge;
	exports.Card = Card;
	exports.CardLink = CardLink;
	exports.CardGroup = CardGroup;
	exports.CardDeck = CardDeck;
	exports.CardColumns = CardColumns;
	exports.CardBody = CardBody;
	exports.CardBlock = CardBlock;
	exports.CardFooter = CardFooter;
	exports.CardHeader = CardHeader;
	exports.CardImg = CardImg;
	exports.CardImgOverlay = CardImgOverlay;
	exports.Carousel = Carousel;
	exports.UncontrolledCarousel = UncontrolledCarousel;
	exports.CarouselControl = CarouselControl;
	exports.CarouselItem = CarouselItem;
	exports.CarouselIndicators = CarouselIndicators;
	exports.CarouselCaption = CarouselCaption;
	exports.CardSubtitle = CardSubtitle;
	exports.CardText = CardText;
	exports.CardTitle = CardTitle;
	exports.Popover = Popover;
	exports.PopoverContent = PopoverContent;
	exports.PopoverBody = PopoverBody;
	exports.PopoverTitle = PopoverTitle;
	exports.PopoverHeader = PopoverHeader;
	exports.Progress = Progress;
	exports.Modal = Modal;
	exports.ModalHeader = ModalHeader;
	exports.ModalBody = ModalBody;
	exports.ModalFooter = ModalFooter;
	exports.PopperContent = PopperContent;
	exports.PopperTargetHelper = PopperTargetHelper;
	exports.Tooltip = Tooltip;
	exports.Table = Table;
	exports.ListGroup = ListGroup;
	exports.Form = Form;
	exports.FormFeedback = FormFeedback;
	exports.FormGroup = FormGroup;
	exports.FormText = FormText;
	exports.Input = Input;
	exports.InputGroup = InputGroup;
	exports.InputGroupAddon = InputGroupAddon;
	exports.InputGroupButton = InputGroupButton;
	exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
	exports.InputGroupText = InputGroupText;
	exports.Label = Label;
	exports.Media = Media;
	exports.Pagination = Pagination;
	exports.PaginationItem = PaginationItem;
	exports.PaginationLink = PaginationLink;
	exports.TabContent = TabContent;
	exports.TabPane = TabPane;
	exports.Jumbotron = Jumbotron;
	exports.Collapse = Collapse;
	exports.ListGroupItem = ListGroupItem;
	exports.ListGroupItemText = ListGroupItemText;
	exports.ListGroupItemHeading = ListGroupItemHeading;
	exports.UncontrolledAlert = UncontrolledAlert;
	exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
	exports.UncontrolledDropdown = UncontrolledDropdown;
	exports.UncontrolledNavDropdown = UncontrolledNavDropdown;
	exports.UncontrolledTooltip = UncontrolledTooltip;
	exports.Util = utils;
	//# sourceMappingURL=reactstrap.cjs.js.map


/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(18);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _classnames = __webpack_require__(130);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _reactOnclickoutside = __webpack_require__(420);
	
	var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);
	
	var _reactstrap = __webpack_require__(457);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var CookoonNav = function (_Component) {
	  _inherits(CookoonNav, _Component);
	
	  function CookoonNav() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, CookoonNav);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
	      isOpen: false,
	      isTop: true
	    }, _this.toggleNavbar = function () {
	      _this.setState({
	        isOpen: !_this.state.isOpen
	      });
	    }, _this.closeNavbar = function () {
	      _this.setState({ isOpen: false });
	    }, _this.handleClickOutside = _this.closeNavbar, _this.handleScroll = function () {
	      var isTop = window.scrollY < 30;
	      if (isTop !== _this.state.isTop) {
	        _this.setState({ isTop: isTop });
	      }
	    }, _this.classes = function () {
	      return (0, _classnames2.default)('cookoon-nav', {
	        'cookoon-nav-simple': ['/conditions-generales', '/conditions-generales/', '/livre-blanc', '/livre-blanc/'].includes(_this.props.pathname),
	        'cookoon-nav-top': _this.state.isTop,
	        'cookoon-nav-opened': _this.state.isOpen
	      });
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  CookoonNav.prototype.componentDidMount = function componentDidMount() {
	    document.addEventListener('scroll', this.handleScroll);
	  };
	
	  CookoonNav.prototype.componentWillUnmount = function componentWillUnmount() {
	    document.removeEventListener('scroll', this.handleScroll);
	  };
	
	  CookoonNav.prototype.render = function render() {
	    return _react2.default.createElement(
	      'div',
	      { className: this.classes() },
	      _react2.default.createElement(
	        _reactstrap.Navbar,
	        { dark: true, expand: 'md' },
	        _react2.default.createElement(
	          'div',
	          { className: 'container' },
	          _react2.default.createElement(
	            _reactstrap.NavbarBrand,
	            { href: '/', onClick: this.closeNavbar },
	            _react2.default.createElement('i', { className: 'co co-logo fa-3x', 'aria-hidden': 'true' })
	          ),
	          _react2.default.createElement(
	            'button',
	            { className: 'navbar-toggler', onClick: this.toggleNavbar },
	            _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
	          ),
	          _react2.default.createElement(
	            _reactstrap.Collapse,
	            {
	              isOpen: this.state.isOpen,
	              onClick: this.closeNavbar,
	              navbar: true
	            },
	            _react2.default.createElement(
	              _reactstrap.Nav,
	              { navbar: true },
	              _react2.default.createElement(
	                _reactstrap.NavItem,
	                { className: 'px-3' },
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  {
	                    to: '/etre-membre/',
	                    className: 'nav-link',
	                    activeClassName: 'active'
	                  },
	                  '\xCAtre Membre'
	                )
	              ),
	              _react2.default.createElement(
	                _reactstrap.NavItem,
	                { className: 'px-3' },
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  {
	                    to: '/devenir-hote/',
	                    className: 'nav-link',
	                    activeClassName: 'active'
	                  },
	                  'Devenir H\xF4te'
	                )
	              ),
	              _react2.default.createElement(
	                _reactstrap.NavItem,
	                { className: 'px-3' },
	                _react2.default.createElement(
	                  _gatsbyLink2.default,
	                  {
	                    to: '/garanties/',
	                    className: 'nav-link',
	                    activeClassName: 'active'
	                  },
	                  'Garanties'
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  };
	
	  return CookoonNav;
	}(_react.Component);
	
	exports.default = (0, _reactOnclickoutside2.default)(CookoonNav);
	module.exports = exports['default'];

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _gatsbyLink = __webpack_require__(18);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Footer = function Footer() {
	  return _react2.default.createElement(
	    'footer',
	    { className: 'navbar navbar-expand-md navbar-dark bg-dark text-center' },
	    _react2.default.createElement(
	      'div',
	      { className: 'container py-4 justify-content-center justify-content-md-between' },
	      _react2.default.createElement(
	        'div',
	        { className: 'navbar-text' },
	        _react2.default.createElement(
	          'span',
	          { className: 'text-nowrap' },
	          '\xAE R\xE9ceptions Nouvelles 2018'
	        ),
	        ' \xB7',
	        ' ',
	        _react2.default.createElement(
	          'span',
	          { className: 'text-nowrap' },
	          'Tous droits r\xE9serv\xE9s'
	        )
	      ),
	      _react2.default.createElement(
	        'div',
	        { className: 'navbar-nav align-items-center' },
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'nav-link',
	              href: 'https://www.facebook.com/groups/378511112571275',
	              target: '_blank',
	              rel: 'noreferrer noopener'
	            },
	            _react2.default.createElement('i', { className: 'fa fa-facebook-square fa-2x', 'aria-hidden': 'true' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'nav-link',
	              href: 'https://fr.linkedin.com/company/cookoon',
	              target: '_blank',
	              rel: 'noreferrer noopener'
	            },
	            _react2.default.createElement('i', { className: 'fa fa-linkedin-square fa-2x', 'aria-hidden': 'true' })
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'nav-link',
	              href: 'mailto:Concierge Cookoon<concierge@cookoon.fr>',
	              target: '_blank',
	              rel: 'noreferrer noopener'
	            },
	            'Contact'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'nav-link',
	              href: 'mailto:Cookoon<presse@cookoon.fr>',
	              target: '_blank',
	              rel: 'noreferrer noopener'
	            },
	            'Presse'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3' },
	          _react2.default.createElement(
	            'a',
	            {
	              className: 'nav-link',
	              href: 'https://aide.cookoon.fr',
	              target: '_blank',
	              rel: 'noreferrer noopener'
	            },
	            'Aide'
	          )
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'nav-item px-3 pr-md-0' },
	          _react2.default.createElement(
	            _gatsbyLink2.default,
	            { to: '/conditions-generales/', className: 'nav-link' },
	            'Conditions g\xE9n\xE9rales'
	          )
	        )
	      )
	    )
	  );
	};
	
	exports.default = Footer;
	module.exports = exports['default'];

/***/ }),

/***/ 472:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/ogImage.14bfc53b.jpg";

/***/ }),

/***/ 473:
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/ogImageSquare.aee5e7bd.jpg";

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	exports.pageQuery = undefined;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(6);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactHelmet = __webpack_require__(27);
	
	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);
	
	var _CookoonNav = __webpack_require__(201);
	
	var _CookoonNav2 = _interopRequireDefault(_CookoonNav);
	
	var _Footer = __webpack_require__(204);
	
	var _Footer2 = _interopRequireDefault(_Footer);
	
	__webpack_require__(351);
	
	var _ogImage = __webpack_require__(472);
	
	var _ogImage2 = _interopRequireDefault(_ogImage);
	
	var _ogImageSquare = __webpack_require__(473);
	
	var _ogImageSquare2 = _interopRequireDefault(_ogImageSquare);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TemplateWrapper = function (_Component) {
	  _inherits(TemplateWrapper, _Component);
	
	  function TemplateWrapper() {
	    _classCallCheck(this, TemplateWrapper);
	
	    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
	  }
	
	  TemplateWrapper.prototype.render = function render() {
	    var _props$data$site$site = this.props.data.site.siteMetadata,
	        name = _props$data$site$site.name,
	        title = _props$data$site$site.title,
	        description = _props$data$site$site.description,
	        keywords = _props$data$site$site.keywords,
	        siteUrl = _props$data$site$site.siteUrl,
	        twitter = _props$data$site$site.twitter;
	
	
	    var nameAndTitle = name + ' \xB7 ' + title;
	
	    var ogImageUrl =  true ? siteUrl + _ogImage2.default : _ogImage2.default;
	    var ogImageSquareUrl =  true ? siteUrl + _ogImageSquare2.default : _ogImageSquare2.default;
	
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_reactHelmet2.default, {
	        htmlAttributes: { lang: 'fr' },
	        titleTemplate: name + ' \xB7 %s',
	        defaultTitle: nameAndTitle,
	        meta: [{ name: 'description', content: description }, { name: 'keywords', content: keywords }, { property: 'og:type', content: 'website' }, { property: 'og:site_name', content: name }, { property: 'og:url', content: siteUrl }, { property: 'og:title', content: nameAndTitle }, { property: 'og:description', content: description }, { property: 'og:image', content: ogImageUrl }, { property: 'og:image:width', content: '2400' }, { property: 'og:image:height', content: '1260' }, { property: 'og:image', content: ogImageSquareUrl }, { property: 'og:image:width', content: '600' }, { property: 'og:image:height', content: '600' }, { name: 'twitter:card', content: 'summary_large_image' }, { name: 'twitter:site', content: name }, { name: 'twitter:creator', content: twitter }, { name: 'twitter:title', content: nameAndTitle }, { name: 'twitter:description', content: description }, { name: 'twitter:image', content: ogImageUrl }]
	      }),
	      _react2.default.createElement(_CookoonNav2.default, { pathname: this.props.location.pathname }),
	      _react2.default.createElement(
	        'main',
	        null,
	        this.props.children()
	      ),
	      _react2.default.createElement(_Footer2.default, null)
	    );
	  };
	
	  return TemplateWrapper;
	}(_react.Component);
	
	TemplateWrapper.propTypes = {
	  children: _propTypes2.default.func
	};
	
	exports.default = TemplateWrapper;
	var pageQuery = exports.pageQuery = '** extracted graphql fragment **';

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

	// empty (null-loader)

/***/ })

});
//# sourceMappingURL=component---src-layouts-index-js-5f5f8e180a5c234f0d49.js.map