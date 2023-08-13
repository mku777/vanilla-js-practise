// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/lodash.throttle/index.js":[function(require,module,exports) {
var global = arguments[3];
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

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

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
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

module.exports = throttle;

},{}],"node_modules/@vimeo/player/dist/player.es.js":[function(require,module,exports) {
var define;
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*! @vimeo/player v2.20.1 | (c) 2023 Vimeo | MIT License | https://github.com/vimeo/player.js */
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _regeneratorRuntime() {
  _regeneratorRuntime = function () {
    return exports;
  };

  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      defineProperty = Object.defineProperty || function (obj, key, desc) {
    obj[key] = desc.value;
  },
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }

  try {
    define({}, "");
  } catch (err) {
    define = function (obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  exports.wrap = wrap;
  var ContinueSentinel = {};

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {}

  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }

      reject(record.arg);
    }

    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function (method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }

        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }

  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");

      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }

      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);

        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }

        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }

  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
        method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }

  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;

          return next.value = undefined, next.done = !0, next;
        };

        return next.next = next;
      }
    }

    return {
      next: doneResult
    };
  }

  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }

  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
        keys = [];

    for (var key in object) keys.push(key);

    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }

      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function (skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function () {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function (exception) {
      if (this.done) throw exception;
      var context = this;

      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function (type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function (record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function (finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    catch: function (tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      }

      throw new Error("illegal catch attempt");
    },
    delegateYield: function (iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}

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
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);

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
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
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
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
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
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
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

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}
/**
 * @module lib/functions
 */

/**
 * Check to see this is a node environment.
 * @type {Boolean}
 */

/* global global */


var isNode = typeof global !== 'undefined' && {}.toString.call(global) === '[object global]';
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */

function getMethodName(prop, type) {
  if (prop.indexOf(type.toLowerCase()) === 0) {
    return prop;
  }

  return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */


function isDomElement(element) {
  return Boolean(element && element.nodeType === 1 && 'nodeName' in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */


function isInteger(value) {
  // eslint-disable-next-line eqeqeq
  return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */


function isVimeoUrl(url) {
  return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */


function isVimeoEmbed(url) {
  var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
  return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */


function getVimeoUrl() {
  var oEmbedParameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var id = oEmbedParameters.id;
  var url = oEmbedParameters.url;
  var idOrUrl = id || url;

  if (!idOrUrl) {
    throw new Error('An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.');
  }

  if (isInteger(idOrUrl)) {
    return "https://vimeo.com/".concat(idOrUrl);
  }

  if (isVimeoUrl(idOrUrl)) {
    return idOrUrl.replace('http:', 'https:');
  }

  if (id) {
    throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
  }

  throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
/* eslint-disable max-params */

/**
 * A utility method for attaching and detaching event handlers
 *
 * @param {EventTarget} target
 * @param {string | string[]} eventName
 * @param {function} callback
 * @param {'addEventListener' | 'on'} onName
 * @param {'removeEventListener' | 'off'} offName
 * @return {{cancel: (function(): void)}}
 */


var subscribe = function subscribe(target, eventName, callback) {
  var onName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'addEventListener';
  var offName = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'removeEventListener';
  var eventNames = typeof eventName === 'string' ? [eventName] : eventName;
  eventNames.forEach(function (evName) {
    target[onName](evName, callback);
  });
  return {
    cancel: function cancel() {
      return eventNames.forEach(function (evName) {
        return target[offName](evName, callback);
      });
    }
  };
};

var arrayIndexOfSupport = typeof Array.prototype.indexOf !== 'undefined';
var postMessageSupport = typeof window !== 'undefined' && typeof window.postMessage !== 'undefined';

if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) {
  throw new Error('Sorry, the Vimeo Player API is not available in this browser.');
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
  return module = {
    exports: {}
  }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */


(function (self) {
  if (self.WeakMap) {
    return;
  }

  var hasOwnProperty = Object.prototype.hasOwnProperty;

  var hasDefine = Object.defineProperty && function () {
    try {
      // Avoid IE8's broken Object.defineProperty
      return Object.defineProperty({}, 'x', {
        value: 1
      }).x === 1;
    } catch (e) {}
  }();

  var defineProperty = function (object, name, value) {
    if (hasDefine) {
      Object.defineProperty(object, name, {
        configurable: true,
        writable: true,
        value: value
      });
    } else {
      object[name] = value;
    }
  };

  self.WeakMap = function () {
    // ECMA-262 23.3 WeakMap Objects
    function WeakMap() {
      if (this === void 0) {
        throw new TypeError("Constructor WeakMap requires 'new'");
      }

      defineProperty(this, '_id', genId('_WeakMap')); // ECMA-262 23.3.1.1 WeakMap([iterable])

      if (arguments.length > 0) {
        // Currently, WeakMap `iterable` argument is not supported
        throw new TypeError('WeakMap iterable is not supported');
      }
    } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)


    defineProperty(WeakMap.prototype, 'delete', function (key) {
      checkInstance(this, 'delete');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        delete key[this._id];
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)

    defineProperty(WeakMap.prototype, 'get', function (key) {
      checkInstance(this, 'get');

      if (!isObject(key)) {
        return void 0;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return entry[1];
      }

      return void 0;
    }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)

    defineProperty(WeakMap.prototype, 'has', function (key) {
      checkInstance(this, 'has');

      if (!isObject(key)) {
        return false;
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        return true;
      }

      return false;
    }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)

    defineProperty(WeakMap.prototype, 'set', function (key, value) {
      checkInstance(this, 'set');

      if (!isObject(key)) {
        throw new TypeError('Invalid value used as weak map key');
      }

      var entry = key[this._id];

      if (entry && entry[0] === key) {
        entry[1] = value;
        return this;
      }

      defineProperty(key, this._id, [key, value]);
      return this;
    });

    function checkInstance(x, methodName) {
      if (!isObject(x) || !hasOwnProperty.call(x, '_id')) {
        throw new TypeError(methodName + ' method called on incompatible receiver ' + typeof x);
      }
    }

    function genId(prefix) {
      return prefix + '_' + rand() + '.' + rand();
    }

    function rand() {
      return Math.random().toString().substring(2);
    }

    defineProperty(WeakMap, '_polyfill', true);
    return WeakMap;
  }();

  function isObject(x) {
    return Object(x) === x;
  }
})(typeof globalThis !== 'undefined' ? globalThis : typeof self !== 'undefined' ? self : typeof window !== 'undefined' ? window : typeof commonjsGlobal !== 'undefined' ? commonjsGlobal : commonjsGlobal);

var npo_src = createCommonjsModule(function (module) {
  /*! Native Promise Only
      v0.8.1 (c) Kyle Simpson
      MIT License: http://getify.mit-license.org
  */
  (function UMD(name, context, definition) {
    // special form of UMD for polyfilling across evironments
    context[name] = context[name] || definition();

    if (module.exports) {
      module.exports = context[name];
    }
  })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
    var builtInProp,
        cycle,
        scheduling_queue,
        ToString = Object.prototype.toString,
        timer = typeof setImmediate != "undefined" ? function timer(fn) {
      return setImmediate(fn);
    } : setTimeout; // dammit, IE8.

    try {
      Object.defineProperty({}, "x", {});

      builtInProp = function builtInProp(obj, name, val, config) {
        return Object.defineProperty(obj, name, {
          value: val,
          writable: true,
          configurable: config !== false
        });
      };
    } catch (err) {
      builtInProp = function builtInProp(obj, name, val) {
        obj[name] = val;
        return obj;
      };
    } // Note: using a queue instead of array for efficiency


    scheduling_queue = function Queue() {
      var first, last, item;

      function Item(fn, self) {
        this.fn = fn;
        this.self = self;
        this.next = void 0;
      }

      return {
        add: function add(fn, self) {
          item = new Item(fn, self);

          if (last) {
            last.next = item;
          } else {
            first = item;
          }

          last = item;
          item = void 0;
        },
        drain: function drain() {
          var f = first;
          first = last = cycle = void 0;

          while (f) {
            f.fn.call(f.self);
            f = f.next;
          }
        }
      };
    }();

    function schedule(fn, self) {
      scheduling_queue.add(fn, self);

      if (!cycle) {
        cycle = timer(scheduling_queue.drain);
      }
    } // promise duck typing


    function isThenable(o) {
      var _then,
          o_type = typeof o;

      if (o != null && (o_type == "object" || o_type == "function")) {
        _then = o.then;
      }

      return typeof _then == "function" ? _then : false;
    }

    function notify() {
      for (var i = 0; i < this.chain.length; i++) {
        notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
      }

      this.chain.length = 0;
    } // NOTE: This is a separate function to isolate
    // the `try..catch` so that other code can be
    // optimized better


    function notifyIsolated(self, cb, chain) {
      var ret, _then;

      try {
        if (cb === false) {
          chain.reject(self.msg);
        } else {
          if (cb === true) {
            ret = self.msg;
          } else {
            ret = cb.call(void 0, self.msg);
          }

          if (ret === chain.promise) {
            chain.reject(TypeError("Promise-chain cycle"));
          } else if (_then = isThenable(ret)) {
            _then.call(ret, chain.resolve, chain.reject);
          } else {
            chain.resolve(ret);
          }
        }
      } catch (err) {
        chain.reject(err);
      }
    }

    function resolve(msg) {
      var _then,
          self = this; // already triggered?


      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      try {
        if (_then = isThenable(msg)) {
          schedule(function () {
            var def_wrapper = new MakeDefWrapper(self);

            try {
              _then.call(msg, function $resolve$() {
                resolve.apply(def_wrapper, arguments);
              }, function $reject$() {
                reject.apply(def_wrapper, arguments);
              });
            } catch (err) {
              reject.call(def_wrapper, err);
            }
          });
        } else {
          self.msg = msg;
          self.state = 1;

          if (self.chain.length > 0) {
            schedule(notify, self);
          }
        }
      } catch (err) {
        reject.call(new MakeDefWrapper(self), err);
      }
    }

    function reject(msg) {
      var self = this; // already triggered?

      if (self.triggered) {
        return;
      }

      self.triggered = true; // unwrap

      if (self.def) {
        self = self.def;
      }

      self.msg = msg;
      self.state = 2;

      if (self.chain.length > 0) {
        schedule(notify, self);
      }
    }

    function iteratePromises(Constructor, arr, resolver, rejecter) {
      for (var idx = 0; idx < arr.length; idx++) {
        (function IIFE(idx) {
          Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
            resolver(idx, msg);
          }, rejecter);
        })(idx);
      }
    }

    function MakeDefWrapper(self) {
      this.def = self;
      this.triggered = false;
    }

    function MakeDef(self) {
      this.promise = self;
      this.state = 0;
      this.triggered = false;
      this.chain = [];
      this.msg = void 0;
    }

    function Promise(executor) {
      if (typeof executor != "function") {
        throw TypeError("Not a function");
      }

      if (this.__NPO__ !== 0) {
        throw TypeError("Not a promise");
      } // instance shadowing the inherited "brand"
      // to signal an already "initialized" promise


      this.__NPO__ = 1;
      var def = new MakeDef(this);

      this["then"] = function then(success, failure) {
        var o = {
          success: typeof success == "function" ? success : true,
          failure: typeof failure == "function" ? failure : false
        }; // Note: `then(..)` itself can be borrowed to be used against
        // a different promise constructor for making the chained promise,
        // by substituting a different `this` binding.

        o.promise = new this.constructor(function extractChain(resolve, reject) {
          if (typeof resolve != "function" || typeof reject != "function") {
            throw TypeError("Not a function");
          }

          o.resolve = resolve;
          o.reject = reject;
        });
        def.chain.push(o);

        if (def.state !== 0) {
          schedule(notify, def);
        }

        return o.promise;
      };

      this["catch"] = function $catch$(failure) {
        return this.then(void 0, failure);
      };

      try {
        executor.call(void 0, function publicResolve(msg) {
          resolve.call(def, msg);
        }, function publicReject(msg) {
          reject.call(def, msg);
        });
      } catch (err) {
        reject.call(def, err);
      }
    }

    var PromisePrototype = builtInProp({}, "constructor", Promise,
    /*configurable=*/
    false); // Note: Android 4 cannot use `Object.defineProperty(..)` here

    Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise

    builtInProp(PromisePrototype, "__NPO__", 0,
    /*configurable=*/
    false);
    builtInProp(Promise, "resolve", function Promise$resolve(msg) {
      var Constructor = this; // spec mandated checks
      // note: best "isPromise" check that's practical for now

      if (msg && typeof msg == "object" && msg.__NPO__ === 1) {
        return msg;
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        resolve(msg);
      });
    });
    builtInProp(Promise, "reject", function Promise$reject(msg) {
      return new this(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        reject(msg);
      });
    });
    builtInProp(Promise, "all", function Promise$all(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      if (arr.length === 0) {
        return Constructor.resolve([]);
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        var len = arr.length,
            msgs = Array(len),
            count = 0;
        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          msgs[idx] = msg;

          if (++count === len) {
            resolve(msgs);
          }
        }, reject);
      });
    });
    builtInProp(Promise, "race", function Promise$race(arr) {
      var Constructor = this; // spec mandated checks

      if (ToString.call(arr) != "[object Array]") {
        return Constructor.reject(TypeError("Not an array"));
      }

      return new Constructor(function executor(resolve, reject) {
        if (typeof resolve != "function" || typeof reject != "function") {
          throw TypeError("Not a function");
        }

        iteratePromises(Constructor, arr, function resolver(idx, msg) {
          resolve(msg);
        }, reject);
      });
    });
    return Promise;
  });
});
/**
 * @module lib/callbacks
 */

var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */

function storeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!(name in playerCallbacks)) {
    playerCallbacks[name] = [];
  }

  playerCallbacks[name].push(callback);
  callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */


function getCallbacks(player, name) {
  var playerCallbacks = callbackMap.get(player.element) || {};
  return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */


function removeCallback(player, name, callback) {
  var playerCallbacks = callbackMap.get(player.element) || {};

  if (!playerCallbacks[name]) {
    return true;
  } // If no callback is passed, remove all callbacks for the event


  if (!callback) {
    playerCallbacks[name] = [];
    callbackMap.set(player.element, playerCallbacks);
    return true;
  }

  var index = playerCallbacks[name].indexOf(callback);

  if (index !== -1) {
    playerCallbacks[name].splice(index, 1);
  }

  callbackMap.set(player.element, playerCallbacks);
  return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */


function shiftCallbacks(player, name) {
  var playerCallbacks = getCallbacks(player, name);

  if (playerCallbacks.length < 1) {
    return false;
  }

  var callback = playerCallbacks.shift();
  removeCallback(player, name, callback);
  return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */


function swapCallbacks(oldElement, newElement) {
  var playerCallbacks = callbackMap.get(oldElement);
  callbackMap.set(newElement, playerCallbacks);
  callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */

/**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */


function parseMessageData(data) {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data);
    } catch (error) {
      // If the message cannot be parsed, throw the error as a warning
      console.warn(error);
      return {};
    }
  }

  return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */


function postMessage(player, method, params) {
  if (!player.element.contentWindow || !player.element.contentWindow.postMessage) {
    return;
  }

  var message = {
    method: method
  };

  if (params !== undefined) {
    message.value = params;
  } // IE 8 and 9 do not support passing messages, so stringify them


  var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, '$1'));

  if (ieVersion >= 8 && ieVersion < 10) {
    message = JSON.stringify(message);
  }

  player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */


function processData(player, data) {
  data = parseMessageData(data);
  var callbacks = [];
  var param;

  if (data.event) {
    if (data.event === 'error') {
      var promises = getCallbacks(player, data.data.method);
      promises.forEach(function (promise) {
        var error = new Error(data.data.message);
        error.name = data.data.name;
        promise.reject(error);
        removeCallback(player, data.data.method, promise);
      });
    }

    callbacks = getCallbacks(player, "event:".concat(data.event));
    param = data.data;
  } else if (data.method) {
    var callback = shiftCallbacks(player, data.method);

    if (callback) {
      callbacks.push(callback);
      param = data.value;
    }
  }

  callbacks.forEach(function (callback) {
    try {
      if (typeof callback === 'function') {
        callback.call(player, param);
        return;
      }

      callback.resolve(param);
    } catch (e) {// empty
    }
  });
}
/**
 * @module lib/embed
 */


var oEmbedParameters = ['autopause', 'autoplay', 'background', 'byline', 'color', 'colors', 'controls', 'dnt', 'height', 'id', 'interactive_params', 'keyboard', 'loop', 'maxheight', 'maxwidth', 'muted', 'playsinline', 'portrait', 'responsive', 'speed', 'texttrack', 'title', 'transparent', 'url', 'width'];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */

function getOEmbedParameters(element) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return oEmbedParameters.reduce(function (params, param) {
    var value = element.getAttribute("data-vimeo-".concat(param));

    if (value || value === '') {
      params[param] = value === '' ? 1 : value;
    }

    return params;
  }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */


function createEmbed(_ref, element) {
  var html = _ref.html;

  if (!element) {
    throw new TypeError('An element must be provided');
  }

  if (element.getAttribute('data-vimeo-initialized') !== null) {
    return element.querySelector('iframe');
  }

  var div = document.createElement('div');
  div.innerHTML = html;
  element.appendChild(div.firstChild);
  element.setAttribute('data-vimeo-initialized', 'true');
  return element.querySelector('iframe');
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */


function getOEmbedData(videoUrl) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var element = arguments.length > 2 ? arguments[2] : undefined;
  return new Promise(function (resolve, reject) {
    if (!isVimeoUrl(videoUrl)) {
      throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
    }

    var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));

    for (var param in params) {
      if (params.hasOwnProperty(param)) {
        url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
      }
    }

    var xhr = 'XDomainRequest' in window ? new XDomainRequest() : new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onload = function () {
      if (xhr.status === 404) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
        return;
      }

      if (xhr.status === 403) {
        reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
        return;
      }

      try {
        var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed

        if (json.domain_status_code === 403) {
          // We still want to create the embed to give users visual feedback
          createEmbed(json, element);
          reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
          return;
        }

        resolve(json);
      } catch (error) {
        reject(error);
      }
    };

    xhr.onerror = function () {
      var status = xhr.status ? " (".concat(xhr.status, ")") : '';
      reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
    };

    xhr.send();
  });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function initializeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
  var elements = [].slice.call(parent.querySelectorAll('[data-vimeo-id], [data-vimeo-url]'));

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error creating an embed: ".concat(error));
    }
  };

  elements.forEach(function (element) {
    try {
      // Skip any that have data-vimeo-defer
      if (element.getAttribute('data-vimeo-defer') !== null) {
        return;
      }

      var params = getOEmbedParameters(element);
      var url = getVimeoUrl(params);
      getOEmbedData(url, params, element).then(function (data) {
        return createEmbed(data, element);
      }).catch(handleError);
    } catch (error) {
      handleError(error);
    }
  });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function resizeEmbeds() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; // Prevent execution if users include the player.js script multiple times.

  if (window.VimeoPlayerResizeEmbeds_) {
    return;
  }

  window.VimeoPlayerResizeEmbeds_ = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    } // 'spacechange' is fired only on embeds with cards


    if (!event.data || event.data.event !== 'spacechange') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      if (iframes[i].contentWindow !== event.source) {
        continue;
      } // Change padding-bottom of the enclosing div to accommodate
      // card carousel without distorting aspect ratio


      var space = iframes[i].parentElement;
      space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
      break;
    }
  };

  window.addEventListener('message', onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function initAppendVideoMetadata() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; //  Prevent execution if users include the player.js script multiple times.

  if (window.VimeoSeoMetadataAppended) {
    return;
  }

  window.VimeoSeoMetadataAppended = true;

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    }

    var data = parseMessageData(event.data);

    if (!data || data.event !== 'ready') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    for (var i = 0; i < iframes.length; i++) {
      var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed

      var isValidMessageSource = iframe.contentWindow === event.source;

      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
        var player = new Player(iframe);
        player.callMethod('appendVideoMetadata', window.location.href);
      }
    }
  };

  window.addEventListener('message', onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */


function checkUrlTimeParam() {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document; //  Prevent execution if users include the player.js script multiple times.

  if (window.VimeoCheckedUrlTimeParam) {
    return;
  }

  window.VimeoCheckedUrlTimeParam = true;

  var handleError = function handleError(error) {
    if ('console' in window && console.error) {
      console.error("There was an error getting video Id: ".concat(error));
    }
  };

  var onMessage = function onMessage(event) {
    if (!isVimeoUrl(event.origin)) {
      return;
    }

    var data = parseMessageData(event.data);

    if (!data || data.event !== 'ready') {
      return;
    }

    var iframes = parent.querySelectorAll('iframe');

    var _loop = function _loop() {
      var iframe = iframes[i];
      var isValidMessageSource = iframe.contentWindow === event.source;

      if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
        var player = new Player(iframe);
        player.getVideoId().then(function (videoId) {
          var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);

          if (matches && matches[1]) {
            var sec = decodeURI(matches[1]);
            player.setCurrentTime(sec);
          }

          return;
        }).catch(handleError);
      }
    };

    for (var i = 0; i < iframes.length; i++) {
      _loop();
    }
  };

  window.addEventListener('message', onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */


function initializeScreenfull() {
  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        for (i = 0; i < val.length; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    fullscreenchange: fn.fullscreenchange,
    fullscreenerror: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new Promise(function (resolve, reject) {
        var onFullScreenEntered = function onFullScreenEntered() {
          screenfull.off('fullscreenchange', onFullScreenEntered);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenEntered);
        element = element || document.documentElement;
        var returnPromise = element[fn.requestFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenEntered).catch(reject);
        }
      });
    },
    exit: function exit() {
      return new Promise(function (resolve, reject) {
        if (!screenfull.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function onFullScreenExit() {
          screenfull.off('fullscreenchange', onFullScreenExit);
          resolve();
        };

        screenfull.on('fullscreenchange', onFullScreenExit);
        var returnPromise = document[fn.exitFullscreen]();

        if (returnPromise instanceof Promise) {
          returnPromise.then(onFullScreenExit).catch(reject);
        }
      });
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback);
      }
    }
  };
  Object.defineProperties(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });
  return screenfull;
}
/** @typedef {import('./timing-src-connector.types').PlayerControls} PlayerControls */

/** @typedef {import('./timing-object.types').TimingObject} TimingObject */

/** @typedef {import('./timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */

/** @typedef {(msg: string) => any} Logger */

/** @typedef {import('timing-object.types').TConnectionState} TConnectionState */

/**
 * @type {TimingSrcConnectorOptions}
 *
 * For details on these properties and their effects, see the typescript definition referenced above.
 */


var defaultOptions = {
  role: 'viewer',
  autoPlayMuted: true,
  allowedDrift: 0.3,
  maxAllowedDrift: 1,
  minCheckInterval: 0.1,
  maxRateAdjustment: 0.2,
  maxTimeToCatchUp: 1
};
/**
 * There's a proposed W3C spec for the Timing Object which would introduce a new set of APIs that would simplify time-synchronization tasks for browser applications.
 *
 * Proposed spec: https://webtiming.github.io/timingobject/
 * V3 Spec: https://timingsrc.readthedocs.io/en/latest/
 * Demuxed talk: https://www.youtube.com/watch?v=cZSjDaGDmX8
 *
 * This class makes it easy to connect Vimeo.Player to a provided TimingObject via Vimeo.Player.setTimingSrc(myTimingObject, options) and the synchronization will be handled automatically.
 *
 * There are 5 general responsibilities in TimingSrcConnector:
 *
 * 1. `updatePlayer()` which sets the player's currentTime, playbackRate and pause/play state based on current state of the TimingObject.
 * 2. `updateTimingObject()` which sets the TimingObject's position and velocity from the player's state.
 * 3. `playerUpdater` which listens for change events on the TimingObject and will respond by calling updatePlayer.
 * 4. `timingObjectUpdater` which listens to the player events of seeked, play and pause and will respond by calling `updateTimingObject()`.
 * 5. `maintainPlaybackPosition` this is code that constantly monitors the player to make sure it's always in sync with the TimingObject. This is needed because videos will generally not play with precise time accuracy and there will be some drift which becomes more noticeable over longer periods (as noted in the timing-object spec). More details on this method below.
 */

var TimingSrcConnector =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(TimingSrcConnector, _EventTarget);

  var _super = _createSuper(TimingSrcConnector);
  /**
   * @param {PlayerControls} player
   * @param {TimingObject} timingObject
   * @param {TimingSrcConnectorOptions} options
   * @param {Logger} logger
   */


  function TimingSrcConnector(_player, timingObject) {
    var _this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var logger = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, TimingSrcConnector);

    _this = _super.call(this);

    _defineProperty(_assertThisInitialized(_this), "logger", void 0);

    _defineProperty(_assertThisInitialized(_this), "speedAdjustment", 0);
    /**
     * @param {PlayerControls} player
     * @param {number} newAdjustment
     * @return {Promise<void>}
     */


    _defineProperty(_assertThisInitialized(_this), "adjustSpeed",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime().mark(function _callee(player, newAdjustment) {
        var newPlaybackRate;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(_this.speedAdjustment === newAdjustment)) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return player.getPlaybackRate();

            case 4:
              _context.t0 = _context.sent;
              _context.t1 = _this.speedAdjustment;
              _context.t2 = _context.t0 - _context.t1;
              _context.t3 = newAdjustment;
              newPlaybackRate = _context.t2 + _context.t3;

              _this.log("New playbackRate:  ".concat(newPlaybackRate));

              _context.next = 12;
              return player.setPlaybackRate(newPlaybackRate);

            case 12:
              _this.speedAdjustment = newAdjustment;

            case 13:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    _this.logger = logger;

    _this.init(timingObject, _player, _objectSpread2(_objectSpread2({}, defaultOptions), options));

    return _this;
  }

  _createClass(TimingSrcConnector, [{
    key: "disconnect",
    value: function disconnect() {
      this.dispatchEvent(new Event('disconnect'));
    }
    /**
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */

  }, {
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime().mark(function _callee2(timingObject, player, options) {
        var _this2 = this;

        var playerUpdater, positionSync, timingObjectUpdater;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.waitForTOReadyState(timingObject, 'open');

            case 2:
              if (!(options.role === 'viewer')) {
                _context2.next = 10;
                break;
              }

              _context2.next = 5;
              return this.updatePlayer(timingObject, player, options);

            case 5:
              playerUpdater = subscribe(timingObject, 'change', function () {
                return _this2.updatePlayer(timingObject, player, options);
              });
              positionSync = this.maintainPlaybackPosition(timingObject, player, options);
              this.addEventListener('disconnect', function () {
                positionSync.cancel();
                playerUpdater.cancel();
              });
              _context2.next = 14;
              break;

            case 10:
              _context2.next = 12;
              return this.updateTimingObject(timingObject, player);

            case 12:
              timingObjectUpdater = subscribe(player, ['seeked', 'play', 'pause', 'ratechange'], function () {
                return _this2.updateTimingObject(timingObject, player);
              }, 'on', 'off');
              this.addEventListener('disconnect', function () {
                return timingObjectUpdater.cancel();
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));

      function init(_x3, _x4, _x5) {
        return _init.apply(this, arguments);
      }

      return init;
    }()
    /**
     * Sets the TimingObject's state to reflect that of the player
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @return {Promise<void>}
     */

  }, {
    key: "updateTimingObject",
    value: function () {
      var _updateTimingObject = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime().mark(function _callee3(timingObject, player) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.t0 = timingObject;
              _context3.next = 3;
              return player.getCurrentTime();

            case 3:
              _context3.t1 = _context3.sent;
              _context3.next = 6;
              return player.getPaused();

            case 6:
              if (!_context3.sent) {
                _context3.next = 10;
                break;
              }

              _context3.t2 = 0;
              _context3.next = 13;
              break;

            case 10:
              _context3.next = 12;
              return player.getPlaybackRate();

            case 12:
              _context3.t2 = _context3.sent;

            case 13:
              _context3.t3 = _context3.t2;
              _context3.t4 = {
                position: _context3.t1,
                velocity: _context3.t3
              };

              _context3.t0.update.call(_context3.t0, _context3.t4);

            case 16:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));

      function updateTimingObject(_x6, _x7) {
        return _updateTimingObject.apply(this, arguments);
      }

      return updateTimingObject;
    }()
    /**
     * Sets the player's timing state to reflect that of the TimingObject
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {Promise<void>}
     */

  }, {
    key: "updatePlayer",
    value: function () {
      var _updatePlayer = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime().mark(function _callee5(timingObject, player, options) {
        var _timingObject$query, position, velocity;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _timingObject$query = timingObject.query(), position = _timingObject$query.position, velocity = _timingObject$query.velocity;

              if (typeof position === 'number') {
                player.setCurrentTime(position);
              }

              if (!(typeof velocity === 'number')) {
                _context5.next = 25;
                break;
              }

              if (!(velocity === 0)) {
                _context5.next = 11;
                break;
              }

              _context5.next = 6;
              return player.getPaused();

            case 6:
              _context5.t0 = _context5.sent;

              if (!(_context5.t0 === false)) {
                _context5.next = 9;
                break;
              }

              player.pause();

            case 9:
              _context5.next = 25;
              break;

            case 11:
              if (!(velocity > 0)) {
                _context5.next = 25;
                break;
              }

              _context5.next = 14;
              return player.getPaused();

            case 14:
              _context5.t1 = _context5.sent;

              if (!(_context5.t1 === true)) {
                _context5.next = 19;
                break;
              }

              _context5.next = 18;
              return player.play().catch(
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                _regeneratorRuntime().mark(function _callee4(err) {
                  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                    while (1) switch (_context4.prev = _context4.next) {
                      case 0:
                        if (!(err.name === 'NotAllowedError' && options.autoPlayMuted)) {
                          _context4.next = 5;
                          break;
                        }

                        _context4.next = 3;
                        return player.setMuted(true);

                      case 3:
                        _context4.next = 5;
                        return player.play().catch(function (err2) {
                          return console.error('Couldn\'t play the video from TimingSrcConnector. Error:', err2);
                        });

                      case 5:
                      case "end":
                        return _context4.stop();
                    }
                  }, _callee4);
                }));

                return function (_x11) {
                  return _ref2.apply(this, arguments);
                };
              }());

            case 18:
              this.updatePlayer(timingObject, player, options);

            case 19:
              _context5.next = 21;
              return player.getPlaybackRate();

            case 21:
              _context5.t2 = _context5.sent;
              _context5.t3 = velocity;

              if (!(_context5.t2 !== _context5.t3)) {
                _context5.next = 25;
                break;
              }

              player.setPlaybackRate(velocity);

            case 25:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));

      function updatePlayer(_x8, _x9, _x10) {
        return _updatePlayer.apply(this, arguments);
      }

      return updatePlayer;
    }()
    /**
     * Since video players do not play with 100% time precision, we need to closely monitor
     * our player to be sure it remains in sync with the TimingObject.
     *
     * If out of sync, we use the current conditions and the options provided to determine
     * whether to re-sync via setting currentTime or adjusting the playbackRate
     *
     * @param {TimingObject} timingObject
     * @param {PlayerControls} player
     * @param {TimingSrcConnectorOptions} options
     * @return {{cancel: (function(): void)}}
     */

  }, {
    key: "maintainPlaybackPosition",
    value: function maintainPlaybackPosition(timingObject, player, options) {
      var _this3 = this;

      var allowedDrift = options.allowedDrift,
          maxAllowedDrift = options.maxAllowedDrift,
          minCheckInterval = options.minCheckInterval,
          maxRateAdjustment = options.maxRateAdjustment,
          maxTimeToCatchUp = options.maxTimeToCatchUp;
      var syncInterval = Math.min(maxTimeToCatchUp, Math.max(minCheckInterval, maxAllowedDrift)) * 1000;

      var check =
      /*#__PURE__*/
      function () {
        var _ref3 = _asyncToGenerator(
        /*#__PURE__*/
        _regeneratorRuntime().mark(function _callee6() {
          var diff, diffAbs, min, max, adjustment;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = timingObject.query().velocity === 0;

                if (_context6.t0) {
                  _context6.next = 6;
                  break;
                }

                _context6.next = 4;
                return player.getPaused();

              case 4:
                _context6.t1 = _context6.sent;
                _context6.t0 = _context6.t1 === true;

              case 6:
                if (!_context6.t0) {
                  _context6.next = 8;
                  break;
                }

                return _context6.abrupt("return");

              case 8:
                _context6.t2 = timingObject.query().position;
                _context6.next = 11;
                return player.getCurrentTime();

              case 11:
                _context6.t3 = _context6.sent;
                diff = _context6.t2 - _context6.t3;
                diffAbs = Math.abs(diff);

                _this3.log("Drift: ".concat(diff));

                if (!(diffAbs > maxAllowedDrift)) {
                  _context6.next = 22;
                  break;
                }

                _context6.next = 18;
                return _this3.adjustSpeed(player, 0);

              case 18:
                player.setCurrentTime(timingObject.query().position);

                _this3.log('Resync by currentTime');

                _context6.next = 29;
                break;

              case 22:
                if (!(diffAbs > allowedDrift)) {
                  _context6.next = 29;
                  break;
                }

                min = diffAbs / maxTimeToCatchUp;
                max = maxRateAdjustment;
                adjustment = min < max ? (max - min) / 2 : max;
                _context6.next = 28;
                return _this3.adjustSpeed(player, adjustment * Math.sign(diff));

              case 28:
                _this3.log('Resync by playbackRate');

              case 29:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));

        return function check() {
          return _ref3.apply(this, arguments);
        };
      }();

      var interval = setInterval(function () {
        return check();
      }, syncInterval);
      return {
        cancel: function cancel() {
          return clearInterval(interval);
        }
      };
    }
    /**
     * @param {string} msg
     */

  }, {
    key: "log",
    value: function log(msg) {
      var _this$logger;

      (_this$logger = this.logger) === null || _this$logger === void 0 ? void 0 : _this$logger.call(this, "TimingSrcConnector: ".concat(msg));
    }
  }, {
    key: "waitForTOReadyState",
    value:
    /**
     * @param {TimingObject} timingObject
     * @param {TConnectionState} state
     * @return {Promise<void>}
     */
    function waitForTOReadyState(timingObject, state) {
      return new Promise(function (resolve) {
        var check = function check() {
          if (timingObject.readyState === state) {
            resolve();
          } else {
            timingObject.addEventListener('readystatechange', check, {
              once: true
            });
          }
        };

        check();
      });
    }
  }]);

  return TimingSrcConnector;
}(
/*#__PURE__*/
_wrapNativeSuper(EventTarget));

var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};

var Player =
/*#__PURE__*/
function () {
  /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */
  function Player(element) {
    var _this = this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Player);
    /* global jQuery */


    if (window.jQuery && element instanceof jQuery) {
      if (element.length > 1 && window.console && console.warn) {
        console.warn('A jQuery object with multiple elements was passed, using the first element.');
      }

      element = element[0];
    } // Find an element by ID


    if (typeof document !== 'undefined' && typeof element === 'string') {
      element = document.getElementById(element);
    } // Not an element!


    if (!isDomElement(element)) {
      throw new TypeError('You must pass either a valid element or a valid id.');
    } // Already initialized an embed in this div, so grab the iframe


    if (element.nodeName !== 'IFRAME') {
      var iframe = element.querySelector('iframe');

      if (iframe) {
        element = iframe;
      }
    } // iframe url is not a Vimeo url


    if (element.nodeName === 'IFRAME' && !isVimeoUrl(element.getAttribute('src') || '')) {
      throw new Error('The player element passed isn’t a Vimeo embed.');
    } // If there is already a player object in the map, return that


    if (playerMap.has(element)) {
      return playerMap.get(element);
    }

    this._window = element.ownerDocument.defaultView;
    this.element = element;
    this.origin = '*';
    var readyPromise = new npo_src(function (resolve, reject) {
      _this._onMessage = function (event) {
        if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) {
          return;
        }

        if (_this.origin === '*') {
          _this.origin = event.origin;
        }

        var data = parseMessageData(event.data);
        var isError = data && data.event === 'error';
        var isReadyError = isError && data.data && data.data.method === 'ready';

        if (isReadyError) {
          var error = new Error(data.data.message);
          error.name = data.data.name;
          reject(error);
          return;
        }

        var isReadyEvent = data && data.event === 'ready';
        var isPingResponse = data && data.method === 'ping';

        if (isReadyEvent || isPingResponse) {
          _this.element.setAttribute('data-ready', 'true');

          resolve();
          return;
        }

        processData(_this, data);
      };

      _this._window.addEventListener('message', _this._onMessage);

      if (_this.element.nodeName !== 'IFRAME') {
        var params = getOEmbedParameters(element, options);
        var url = getVimeoUrl(params);
        getOEmbedData(url, params, element).then(function (data) {
          var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
          // but store reference to the original element

          _this.element = iframe;
          _this._originalElement = element;
          swapCallbacks(element, iframe);
          playerMap.set(_this.element, _this);
          return data;
        }).catch(reject);
      }
    }); // Store a copy of this Player in the map

    readyMap.set(this, readyPromise);
    playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
    // the player is already ready.

    if (this.element.nodeName === 'IFRAME') {
      postMessage(this, 'ping');
    }

    if (screenfull.isEnabled) {
      var exitFullscreen = function exitFullscreen() {
        return screenfull.exit();
      };

      this.fullscreenchangeHandler = function () {
        if (screenfull.isFullscreen) {
          storeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } else {
          removeCallback(_this, 'event:exitFullscreen', exitFullscreen);
        } // eslint-disable-next-line


        _this.ready().then(function () {
          postMessage(_this, 'fullscreenchange', screenfull.isFullscreen);
        });
      };

      screenfull.on('fullscreenchange', this.fullscreenchangeHandler);
    }

    return this;
  }
  /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */


  _createClass(Player, [{
    key: "callMethod",
    value: function callMethod(name) {
      var _this2 = this;

      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new npo_src(function (resolve, reject) {
        // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return
        return _this2.ready().then(function () {
          storeCallback(_this2, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this2, name, args);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for the value of a player property.
     *
     * @param {string} name The property name
     * @return {Promise}
     */

  }, {
    key: "get",
    value: function get(name) {
      var _this3 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'get'); // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return

        return _this3.ready().then(function () {
          storeCallback(_this3, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this3, name);
        }).catch(reject);
      });
    }
    /**
     * Get a promise for setting the value of a player property.
     *
     * @param {string} name The API method to call.
     * @param {mixed} value The value to set.
     * @return {Promise}
     */

  }, {
    key: "set",
    value: function set(name, value) {
      var _this4 = this;

      return new npo_src(function (resolve, reject) {
        name = getMethodName(name, 'set');

        if (value === undefined || value === null) {
          throw new TypeError('There must be a value to set.');
        } // We are storing the resolve/reject handlers to call later, so we
        // can’t return here.
        // eslint-disable-next-line promise/always-return


        return _this4.ready().then(function () {
          storeCallback(_this4, name, {
            resolve: resolve,
            reject: reject
          });
          postMessage(_this4, name, value);
        }).catch(reject);
      });
    }
    /**
     * Add an event listener for the specified event. Will call the
     * callback with a single parameter, `data`, that contains the data for
     * that event.
     *
     * @param {string} eventName The name of the event.
     * @param {function(*)} callback The function to call when the event fires.
     * @return {void}
     */

  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (!callback) {
        throw new TypeError('You must pass a callback function.');
      }

      if (typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var callbacks = getCallbacks(this, "event:".concat(eventName));

      if (callbacks.length === 0) {
        this.callMethod('addEventListener', eventName).catch(function () {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }

      storeCallback(this, "event:".concat(eventName), callback);
    }
    /**
     * Remove an event listener for the specified event. Will remove all
     * listeners for that event if a `callback` isn’t passed, or only that
     * specific callback if it is passed.
     *
     * @param {string} eventName The name of the event.
     * @param {function} [callback] The specific callback to remove.
     * @return {void}
     */

  }, {
    key: "off",
    value: function off(eventName, callback) {
      if (!eventName) {
        throw new TypeError('You must pass an event name.');
      }

      if (callback && typeof callback !== 'function') {
        throw new TypeError('The callback must be a function.');
      }

      var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener

      if (lastCallback) {
        this.callMethod('removeEventListener', eventName).catch(function (e) {// Ignore the error. There will be an error event fired that
          // will trigger the error callback if they are listening.
        });
      }
    }
    /**
     * A promise to load a new video.
     *
     * @promise LoadVideoPromise
     * @fulfill {number} The video with this id or url successfully loaded.
     * @reject {TypeError} The id was not a number.
     */

    /**
     * Load a new video into this embed. The promise will be resolved if
     * the video is successfully loaded, or it will be rejected if it could
     * not be loaded.
     *
     * @param {number|string|object} options The id of the video, the url of the video, or an object with embed options.
     * @return {LoadVideoPromise}
     */

  }, {
    key: "loadVideo",
    value: function loadVideo(options) {
      return this.callMethod('loadVideo', options);
    }
    /**
     * A promise to perform an action when the Player is ready.
     *
     * @todo document errors
     * @promise LoadVideoPromise
     * @fulfill {void}
     */

    /**
     * Trigger a function when the player iframe has initialized. You do not
     * need to wait for `ready` to trigger to begin adding event listeners
     * or calling other methods.
     *
     * @return {ReadyPromise}
     */

  }, {
    key: "ready",
    value: function ready() {
      var readyPromise = readyMap.get(this) || new npo_src(function (resolve, reject) {
        reject(new Error('Unknown player. Probably unloaded.'));
      });
      return npo_src.resolve(readyPromise);
    }
    /**
     * A promise to add a cue point to the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point to use for removeCuePoint.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Add a cue point to the player.
     *
     * @param {number} time The time for the cue point.
     * @param {object} [data] Arbitrary data to be returned with the cue point.
     * @return {AddCuePointPromise}
     */

  }, {
    key: "addCuePoint",
    value: function addCuePoint(time) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.callMethod('addCuePoint', {
        time: time,
        data: data
      });
    }
    /**
     * A promise to remove a cue point from the player.
     *
     * @promise AddCuePointPromise
     * @fulfill {string} The id of the cue point that was removed.
     * @reject {InvalidCuePoint} The cue point with the specified id was not
     *         found.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Remove a cue point from the video.
     *
     * @param {string} id The id of the cue point to remove.
     * @return {RemoveCuePointPromise}
     */

  }, {
    key: "removeCuePoint",
    value: function removeCuePoint(id) {
      return this.callMethod('removeCuePoint', id);
    }
    /**
     * A representation of a text track on a video.
     *
     * @typedef {Object} VimeoTextTrack
     * @property {string} language The ISO language code.
     * @property {string} kind The kind of track it is (captions or subtitles).
     * @property {string} label The human‐readable label for the track.
     */

    /**
     * A promise to enable a text track.
     *
     * @promise EnableTextTrackPromise
     * @fulfill {VimeoTextTrack} The text track that was enabled.
     * @reject {InvalidTrackLanguageError} No track was available with the
     *         specified language.
     * @reject {InvalidTrackError} No track was available with the specified
     *         language and kind.
     */

    /**
     * Enable the text track with the specified language, and optionally the
     * specified kind (captions or subtitles).
     *
     * When set via the API, the track language will not change the viewer’s
     * stored preference.
     *
     * @param {string} language The two‐letter language code.
     * @param {string} [kind] The kind of track to enable (captions or subtitles).
     * @return {EnableTextTrackPromise}
     */

  }, {
    key: "enableTextTrack",
    value: function enableTextTrack(language, kind) {
      if (!language) {
        throw new TypeError('You must pass a language.');
      }

      return this.callMethod('enableTextTrack', {
        language: language,
        kind: kind
      });
    }
    /**
     * A promise to disable the active text track.
     *
     * @promise DisableTextTrackPromise
     * @fulfill {void} The track was disabled.
     */

    /**
     * Disable the currently-active text track.
     *
     * @return {DisableTextTrackPromise}
     */

  }, {
    key: "disableTextTrack",
    value: function disableTextTrack() {
      return this.callMethod('disableTextTrack');
    }
    /**
     * A promise to pause the video.
     *
     * @promise PausePromise
     * @fulfill {void} The video was paused.
     */

    /**
     * Pause the video if it’s playing.
     *
     * @return {PausePromise}
     */

  }, {
    key: "pause",
    value: function pause() {
      return this.callMethod('pause');
    }
    /**
     * A promise to play the video.
     *
     * @promise PlayPromise
     * @fulfill {void} The video was played.
     */

    /**
     * Play the video if it’s paused. **Note:** on iOS and some other
     * mobile devices, you cannot programmatically trigger play. Once the
     * viewer has tapped on the play button in the player, however, you
     * will be able to use this function.
     *
     * @return {PlayPromise}
     */

  }, {
    key: "play",
    value: function play() {
      return this.callMethod('play');
    }
    /**
     * Request that the player enters fullscreen.
     * @return {Promise}
     */

  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.request(this.element);
      }

      return this.callMethod('requestFullscreen');
    }
    /**
     * Request that the player exits fullscreen.
     * @return {Promise}
     */

  }, {
    key: "exitFullscreen",
    value: function exitFullscreen() {
      if (screenfull.isEnabled) {
        return screenfull.exit();
      }

      return this.callMethod('exitFullscreen');
    }
    /**
     * Returns true if the player is currently fullscreen.
     * @return {Promise}
     */

  }, {
    key: "getFullscreen",
    value: function getFullscreen() {
      if (screenfull.isEnabled) {
        return npo_src.resolve(screenfull.isFullscreen);
      }

      return this.get('fullscreen');
    }
    /**
     * Request that the player enters picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "requestPictureInPicture",
    value: function requestPictureInPicture() {
      return this.callMethod('requestPictureInPicture');
    }
    /**
     * Request that the player exits picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "exitPictureInPicture",
    value: function exitPictureInPicture() {
      return this.callMethod('exitPictureInPicture');
    }
    /**
     * Returns true if the player is currently picture-in-picture.
     * @return {Promise}
     */

  }, {
    key: "getPictureInPicture",
    value: function getPictureInPicture() {
      return this.get('pictureInPicture');
    }
    /**
     * A promise to prompt the viewer to initiate remote playback.
     *
     * @promise RemotePlaybackPromptPromise
     * @fulfill {void}
     * @reject {NotFoundError} No remote playback device is available.
     */

    /**
     * Request to prompt the user to initiate remote playback.
     *
     * @return {RemotePlaybackPromptPromise}
     */

  }, {
    key: "remotePlaybackPrompt",
    value: function remotePlaybackPrompt() {
      return this.callMethod('remotePlaybackPrompt');
    }
    /**
     * A promise to unload the video.
     *
     * @promise UnloadPromise
     * @fulfill {void} The video was unloaded.
     */

    /**
     * Return the player to its initial state.
     *
     * @return {UnloadPromise}
     */

  }, {
    key: "unload",
    value: function unload() {
      return this.callMethod('unload');
    }
    /**
     * Cleanup the player and remove it from the DOM
     *
     * It won't be usable and a new one should be constructed
     *  in order to do any operations.
     *
     * @return {Promise}
     */

  }, {
    key: "destroy",
    value: function destroy() {
      var _this5 = this;

      return new npo_src(function (resolve) {
        readyMap.delete(_this5);
        playerMap.delete(_this5.element);

        if (_this5._originalElement) {
          playerMap.delete(_this5._originalElement);

          _this5._originalElement.removeAttribute('data-vimeo-initialized');
        }

        if (_this5.element && _this5.element.nodeName === 'IFRAME' && _this5.element.parentNode) {
          // If we've added an additional wrapper div, remove that from the DOM.
          // If not, just remove the iframe element.
          if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) {
            _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
          } else {
            _this5.element.parentNode.removeChild(_this5.element);
          }
        } // If the clip is private there is a case where the element stays the
        // div element. Destroy should reset the div and remove the iframe child.


        if (_this5.element && _this5.element.nodeName === 'DIV' && _this5.element.parentNode) {
          _this5.element.removeAttribute('data-vimeo-initialized');

          var iframe = _this5.element.querySelector('iframe');

          if (iframe && iframe.parentNode) {
            // If we've added an additional wrapper div, remove that from the DOM.
            // If not, just remove the iframe element.
            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) {
              iframe.parentNode.parentNode.removeChild(iframe.parentNode);
            } else {
              iframe.parentNode.removeChild(iframe);
            }
          }
        }

        _this5._window.removeEventListener('message', _this5._onMessage);

        if (screenfull.isEnabled) {
          screenfull.off('fullscreenchange', _this5.fullscreenchangeHandler);
        }

        resolve();
      });
    }
    /**
     * A promise to get the autopause behavior of the video.
     *
     * @promise GetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Get the autopause behavior for this player.
     *
     * @return {GetAutopausePromise}
     */

  }, {
    key: "getAutopause",
    value: function getAutopause() {
      return this.get('autopause');
    }
    /**
     * A promise to set the autopause behavior of the video.
     *
     * @promise SetAutopausePromise
     * @fulfill {boolean} Whether autopause is turned on or off.
     * @reject {UnsupportedError} Autopause is not supported with the current
     *         player or browser.
     */

    /**
     * Enable or disable the autopause behavior of this player.
     *
     * By default, when another video is played in the same browser, this
     * player will automatically pause. Unless you have a specific reason
     * for doing so, we recommend that you leave autopause set to the
     * default (`true`).
     *
     * @param {boolean} autopause
     * @return {SetAutopausePromise}
     */

  }, {
    key: "setAutopause",
    value: function setAutopause(autopause) {
      return this.set('autopause', autopause);
    }
    /**
     * A promise to get the buffered property of the video.
     *
     * @promise GetBufferedPromise
     * @fulfill {Array} Buffered Timeranges converted to an Array.
     */

    /**
     * Get the buffered property of the video.
     *
     * @return {GetBufferedPromise}
     */

  }, {
    key: "getBuffered",
    value: function getBuffered() {
      return this.get('buffered');
    }
    /**
     * @typedef {Object} CameraProperties
     * @prop {number} props.yaw - Number between 0 and 360.
     * @prop {number} props.pitch - Number between -90 and 90.
     * @prop {number} props.roll - Number between -180 and 180.
     * @prop {number} props.fov - The field of view in degrees.
     */

    /**
     * A promise to get the camera properties of the player.
     *
     * @promise GetCameraPromise
     * @fulfill {CameraProperties} The camera properties.
     */

    /**
     * For 360° videos get the camera properties for this player.
     *
     * @return {GetCameraPromise}
     */

  }, {
    key: "getCameraProps",
    value: function getCameraProps() {
      return this.get('cameraProps');
    }
    /**
     * A promise to set the camera properties of the player.
     *
     * @promise SetCameraPromise
     * @fulfill {Object} The camera was successfully set.
     * @reject {RangeError} The range was out of bounds.
     */

    /**
     * For 360° videos set the camera properties for this player.
     *
     * @param {CameraProperties} camera The camera properties
     * @return {SetCameraPromise}
     */

  }, {
    key: "setCameraProps",
    value: function setCameraProps(camera) {
      return this.set('cameraProps', camera);
    }
    /**
     * A representation of a chapter.
     *
     * @typedef {Object} VimeoChapter
     * @property {number} startTime The start time of the chapter.
     * @property {object} title The title of the chapter.
     * @property {number} index The place in the order of Chapters. Starts at 1.
     */

    /**
     * A promise to get chapters for the video.
     *
     * @promise GetChaptersPromise
     * @fulfill {VimeoChapter[]} The chapters for the video.
     */

    /**
     * Get an array of all the chapters for the video.
     *
     * @return {GetChaptersPromise}
     */

  }, {
    key: "getChapters",
    value: function getChapters() {
      return this.get('chapters');
    }
    /**
     * A promise to get the currently active chapter.
     *
     * @promise GetCurrentChaptersPromise
     * @fulfill {VimeoChapter|undefined} The current chapter for the video.
     */

    /**
     * Get the currently active chapter for the video.
     *
     * @return {GetCurrentChaptersPromise}
     */

  }, {
    key: "getCurrentChapter",
    value: function getCurrentChapter() {
      return this.get('currentChapter');
    }
    /**
     * A promise to get the accent color of the player.
     *
     * @promise GetColorPromise
     * @fulfill {string} The hex color of the player.
     */

    /**
     * Get the accent color for this player. Note this is deprecated in place of `getColorTwo`.
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColor",
    value: function getColor() {
      return this.get('color');
    }
    /**
     * A promise to get all colors for the player in an array.
     *
     * @promise GetColorsPromise
     * @fulfill {string[]} The hex colors of the player.
     */

    /**
     * Get all the colors for this player in an array: [colorOne, colorTwo, colorThree, colorFour]
     *
     * @return {GetColorPromise}
     */

  }, {
    key: "getColors",
    value: function getColors() {
      return npo_src.all([this.get('colorOne'), this.get('colorTwo'), this.get('colorThree'), this.get('colorFour')]);
    }
    /**
     * A promise to set the accent color of the player.
     *
     * @promise SetColorPromise
     * @fulfill {string} The color was successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the accent color of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * Note this is deprecated in place of `setColorTwo`.
     *
     * @param {string} color The hex or rgb color string to set.
     * @return {SetColorPromise}
     */

  }, {
    key: "setColor",
    value: function setColor(color) {
      return this.set('color', color);
    }
    /**
     * A promise to set all colors for the player.
     *
     * @promise SetColorsPromise
     * @fulfill {string[]} The colors were successfully set.
     * @reject {TypeError} The string was not a valid hex or rgb color.
     * @reject {ContrastError} The color was set, but the contrast is
     *         outside of the acceptable range.
     * @reject {EmbedSettingsError} The owner of the player has chosen to
     *         use a specific color.
     */

    /**
     * Set the colors of this player to a hex or rgb string. Setting the
     * color may fail if the owner of the video has set their embed
     * preferences to force a specific color.
     * The colors should be passed in as an array: [colorOne, colorTwo, colorThree, colorFour].
     * If a color should not be set, the index in the array can be left as null.
     *
     * @param {string[]} colors Array of the hex or rgb color strings to set.
     * @return {SetColorsPromise}
     */

  }, {
    key: "setColors",
    value: function setColors(colors) {
      if (!Array.isArray(colors)) {
        return new npo_src(function (resolve, reject) {
          return reject(new TypeError('Argument must be an array.'));
        });
      }

      var nullPromise = new npo_src(function (resolve) {
        return resolve(null);
      });
      var colorPromises = [colors[0] ? this.set('colorOne', colors[0]) : nullPromise, colors[1] ? this.set('colorTwo', colors[1]) : nullPromise, colors[2] ? this.set('colorThree', colors[2]) : nullPromise, colors[3] ? this.set('colorFour', colors[3]) : nullPromise];
      return npo_src.all(colorPromises);
    }
    /**
     * A representation of a cue point.
     *
     * @typedef {Object} VimeoCuePoint
     * @property {number} time The time of the cue point.
     * @property {object} data The data passed when adding the cue point.
     * @property {string} id The unique id for use with removeCuePoint.
     */

    /**
     * A promise to get the cue points of a video.
     *
     * @promise GetCuePointsPromise
     * @fulfill {VimeoCuePoint[]} The cue points added to the video.
     * @reject {UnsupportedError} Cue points are not supported with the current
     *         player or browser.
     */

    /**
     * Get an array of the cue points added to the video.
     *
     * @return {GetCuePointsPromise}
     */

  }, {
    key: "getCuePoints",
    value: function getCuePoints() {
      return this.get('cuePoints');
    }
    /**
     * A promise to get the current time of the video.
     *
     * @promise GetCurrentTimePromise
     * @fulfill {number} The current time in seconds.
     */

    /**
     * Get the current playback position in seconds.
     *
     * @return {GetCurrentTimePromise}
     */

  }, {
    key: "getCurrentTime",
    value: function getCurrentTime() {
      return this.get('currentTime');
    }
    /**
     * A promise to set the current time of the video.
     *
     * @promise SetCurrentTimePromise
     * @fulfill {number} The actual current time that was set.
     * @reject {RangeError} the time was less than 0 or greater than the
     *         video’s duration.
     */

    /**
     * Set the current playback position in seconds. If the player was
     * paused, it will remain paused. Likewise, if the player was playing,
     * it will resume playing once the video has buffered.
     *
     * You can provide an accurate time and the player will attempt to seek
     * to as close to that time as possible. The exact time will be the
     * fulfilled value of the promise.
     *
     * @param {number} currentTime
     * @return {SetCurrentTimePromise}
     */

  }, {
    key: "setCurrentTime",
    value: function setCurrentTime(currentTime) {
      return this.set('currentTime', currentTime);
    }
    /**
     * A promise to get the duration of the video.
     *
     * @promise GetDurationPromise
     * @fulfill {number} The duration in seconds.
     */

    /**
     * Get the duration of the video in seconds. It will be rounded to the
     * nearest second before playback begins, and to the nearest thousandth
     * of a second after playback begins.
     *
     * @return {GetDurationPromise}
     */

  }, {
    key: "getDuration",
    value: function getDuration() {
      return this.get('duration');
    }
    /**
     * A promise to get the ended state of the video.
     *
     * @promise GetEndedPromise
     * @fulfill {boolean} Whether or not the video has ended.
     */

    /**
     * Get the ended state of the video. The video has ended if
     * `currentTime === duration`.
     *
     * @return {GetEndedPromise}
     */

  }, {
    key: "getEnded",
    value: function getEnded() {
      return this.get('ended');
    }
    /**
     * A promise to get the loop state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the player is set to loop.
     */

    /**
     * Get the loop state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getLoop",
    value: function getLoop() {
      return this.get('loop');
    }
    /**
     * A promise to set the loop state of the player.
     *
     * @promise SetLoopPromise
     * @fulfill {boolean} The loop state that was set.
     */

    /**
     * Set the loop state of the player. When set to `true`, the player
     * will start over immediately once playback ends.
     *
     * @param {boolean} loop
     * @return {SetLoopPromise}
     */

  }, {
    key: "setLoop",
    value: function setLoop(loop) {
      return this.set('loop', loop);
    }
    /**
     * A promise to set the muted state of the player.
     *
     * @promise SetMutedPromise
     * @fulfill {boolean} The muted state that was set.
     */

    /**
     * Set the muted state of the player. When set to `true`, the player
     * volume will be muted.
     *
     * @param {boolean} muted
     * @return {SetMutedPromise}
     */

  }, {
    key: "setMuted",
    value: function setMuted(muted) {
      return this.set('muted', muted);
    }
    /**
     * A promise to get the muted state of the player.
     *
     * @promise GetMutedPromise
     * @fulfill {boolean} Whether or not the player is muted.
     */

    /**
     * Get the muted state of the player.
     *
     * @return {GetMutedPromise}
     */

  }, {
    key: "getMuted",
    value: function getMuted() {
      return this.get('muted');
    }
    /**
     * A promise to get the paused state of the player.
     *
     * @promise GetLoopPromise
     * @fulfill {boolean} Whether or not the video is paused.
     */

    /**
     * Get the paused state of the player.
     *
     * @return {GetLoopPromise}
     */

  }, {
    key: "getPaused",
    value: function getPaused() {
      return this.get('paused');
    }
    /**
     * A promise to get the playback rate of the player.
     *
     * @promise GetPlaybackRatePromise
     * @fulfill {number} The playback rate of the player on a scale from 0 to 2.
     */

    /**
     * Get the playback rate of the player on a scale from `0` to `2`.
     *
     * @return {GetPlaybackRatePromise}
     */

  }, {
    key: "getPlaybackRate",
    value: function getPlaybackRate() {
      return this.get('playbackRate');
    }
    /**
     * A promise to set the playbackrate of the player.
     *
     * @promise SetPlaybackRatePromise
     * @fulfill {number} The playback rate was set.
     * @reject {RangeError} The playback rate was less than 0 or greater than 2.
     */

    /**
     * Set the playback rate of the player on a scale from `0` to `2`. When set
     * via the API, the playback rate will not be synchronized to other
     * players or stored as the viewer's preference.
     *
     * @param {number} playbackRate
     * @return {SetPlaybackRatePromise}
     */

  }, {
    key: "setPlaybackRate",
    value: function setPlaybackRate(playbackRate) {
      return this.set('playbackRate', playbackRate);
    }
    /**
     * A promise to get the played property of the video.
     *
     * @promise GetPlayedPromise
     * @fulfill {Array} Played Timeranges converted to an Array.
     */

    /**
     * Get the played property of the video.
     *
     * @return {GetPlayedPromise}
     */

  }, {
    key: "getPlayed",
    value: function getPlayed() {
      return this.get('played');
    }
    /**
     * A promise to get the qualities available of the current video.
     *
     * @promise GetQualitiesPromise
     * @fulfill {Array} The qualities of the video.
     */

    /**
     * Get the qualities of the current video.
     *
     * @return {GetQualitiesPromise}
     */

  }, {
    key: "getQualities",
    value: function getQualities() {
      return this.get('qualities');
    }
    /**
     * A promise to get the current set quality of the video.
     *
     * @promise GetQualityPromise
     * @fulfill {string} The current set quality.
     */

    /**
     * Get the current set quality of the video.
     *
     * @return {GetQualityPromise}
     */

  }, {
    key: "getQuality",
    value: function getQuality() {
      return this.get('quality');
    }
    /**
     * A promise to set the video quality.
     *
     * @promise SetQualityPromise
     * @fulfill {number} The quality was set.
     * @reject {RangeError} The quality is not available.
     */

    /**
     * Set a video quality.
     *
     * @param {string} quality
     * @return {SetQualityPromise}
     */

  }, {
    key: "setQuality",
    value: function setQuality(quality) {
      return this.set('quality', quality);
    }
    /**
     * A promise to get the remote playback availability.
     *
     * @promise RemotePlaybackAvailabilityPromise
     * @fulfill {boolean} Whether remote playback is available.
     */

    /**
     * Get the availability of remote playback.
     *
     * @return {RemotePlaybackAvailabilityPromise}
     */

  }, {
    key: "getRemotePlaybackAvailability",
    value: function getRemotePlaybackAvailability() {
      return this.get('remotePlaybackAvailability');
    }
    /**
     * A promise to get the current remote playback state.
     *
     * @promise RemotePlaybackStatePromise
     * @fulfill {string} The state of the remote playback: connecting, connected, or disconnected.
     */

    /**
     * Get the current remote playback state.
     *
     * @return {RemotePlaybackStatePromise}
     */

  }, {
    key: "getRemotePlaybackState",
    value: function getRemotePlaybackState() {
      return this.get('remotePlaybackState');
    }
    /**
     * A promise to get the seekable property of the video.
     *
     * @promise GetSeekablePromise
     * @fulfill {Array} Seekable Timeranges converted to an Array.
     */

    /**
     * Get the seekable property of the video.
     *
     * @return {GetSeekablePromise}
     */

  }, {
    key: "getSeekable",
    value: function getSeekable() {
      return this.get('seekable');
    }
    /**
     * A promise to get the seeking property of the player.
     *
     * @promise GetSeekingPromise
     * @fulfill {boolean} Whether or not the player is currently seeking.
     */

    /**
     * Get if the player is currently seeking.
     *
     * @return {GetSeekingPromise}
     */

  }, {
    key: "getSeeking",
    value: function getSeeking() {
      return this.get('seeking');
    }
    /**
     * A promise to get the text tracks of a video.
     *
     * @promise GetTextTracksPromise
     * @fulfill {VimeoTextTrack[]} The text tracks associated with the video.
     */

    /**
     * Get an array of the text tracks that exist for the video.
     *
     * @return {GetTextTracksPromise}
     */

  }, {
    key: "getTextTracks",
    value: function getTextTracks() {
      return this.get('textTracks');
    }
    /**
     * A promise to get the embed code for the video.
     *
     * @promise GetVideoEmbedCodePromise
     * @fulfill {string} The `<iframe>` embed code for the video.
     */

    /**
     * Get the `<iframe>` embed code for the video.
     *
     * @return {GetVideoEmbedCodePromise}
     */

  }, {
    key: "getVideoEmbedCode",
    value: function getVideoEmbedCode() {
      return this.get('videoEmbedCode');
    }
    /**
     * A promise to get the id of the video.
     *
     * @promise GetVideoIdPromise
     * @fulfill {number} The id of the video.
     */

    /**
     * Get the id of the video.
     *
     * @return {GetVideoIdPromise}
     */

  }, {
    key: "getVideoId",
    value: function getVideoId() {
      return this.get('videoId');
    }
    /**
     * A promise to get the title of the video.
     *
     * @promise GetVideoTitlePromise
     * @fulfill {number} The title of the video.
     */

    /**
     * Get the title of the video.
     *
     * @return {GetVideoTitlePromise}
     */

  }, {
    key: "getVideoTitle",
    value: function getVideoTitle() {
      return this.get('videoTitle');
    }
    /**
     * A promise to get the native width of the video.
     *
     * @promise GetVideoWidthPromise
     * @fulfill {number} The native width of the video.
     */

    /**
     * Get the native width of the currently‐playing video. The width of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoWidthPromise}
     */

  }, {
    key: "getVideoWidth",
    value: function getVideoWidth() {
      return this.get('videoWidth');
    }
    /**
     * A promise to get the native height of the video.
     *
     * @promise GetVideoHeightPromise
     * @fulfill {number} The native height of the video.
     */

    /**
     * Get the native height of the currently‐playing video. The height of
     * the highest‐resolution available will be used before playback begins.
     *
     * @return {GetVideoHeightPromise}
     */

  }, {
    key: "getVideoHeight",
    value: function getVideoHeight() {
      return this.get('videoHeight');
    }
    /**
     * A promise to get the vimeo.com url for the video.
     *
     * @promise GetVideoUrlPromise
     * @fulfill {number} The vimeo.com url for the video.
     * @reject {PrivacyError} The url isn’t available because of the video’s privacy setting.
     */

    /**
     * Get the vimeo.com url for the video.
     *
     * @return {GetVideoUrlPromise}
     */

  }, {
    key: "getVideoUrl",
    value: function getVideoUrl() {
      return this.get('videoUrl');
    }
    /**
     * A promise to get the volume level of the player.
     *
     * @promise GetVolumePromise
     * @fulfill {number} The volume level of the player on a scale from 0 to 1.
     */

    /**
     * Get the current volume level of the player on a scale from `0` to `1`.
     *
     * Most mobile devices do not support an independent volume from the
     * system volume. In those cases, this method will always return `1`.
     *
     * @return {GetVolumePromise}
     */

  }, {
    key: "getVolume",
    value: function getVolume() {
      return this.get('volume');
    }
    /**
     * A promise to set the volume level of the player.
     *
     * @promise SetVolumePromise
     * @fulfill {number} The volume was set.
     * @reject {RangeError} The volume was less than 0 or greater than 1.
     */

    /**
     * Set the volume of the player on a scale from `0` to `1`. When set
     * via the API, the volume level will not be synchronized to other
     * players or stored as the viewer’s preference.
     *
     * Most mobile devices do not support setting the volume. An error will
     * *not* be triggered in that situation.
     *
     * @param {number} volume
     * @return {SetVolumePromise}
     */

  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      return this.set('volume', volume);
    }
    /** @typedef {import('./lib/timing-object.types').TimingObject} TimingObject */

    /** @typedef {import('./lib/timing-src-connector.types').TimingSrcConnectorOptions} TimingSrcConnectorOptions */

    /** @typedef {import('./lib/timing-src-connector').TimingSrcConnector} TimingSrcConnector */

    /**
     * Connects a TimingObject to the video player (https://webtiming.github.io/timingobject/)
     *
     * @param {TimingObject} timingObject
     * @param {TimingSrcConnectorOptions} options
     *
     * @return {Promise<TimingSrcConnector>}
     */

  }, {
    key: "setTimingSrc",
    value: function () {
      var _setTimingSrc = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime().mark(function _callee(timingObject, options) {
        var _this6 = this;

        var connector;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (timingObject) {
                _context.next = 2;
                break;
              }

              throw new TypeError('A Timing Object must be provided.');

            case 2:
              _context.next = 4;
              return this.ready();

            case 4:
              connector = new TimingSrcConnector(this, timingObject, options);
              postMessage(this, 'notifyTimingObjectConnect');
              connector.addEventListener('disconnect', function () {
                return postMessage(_this6, 'notifyTimingObjectDisconnect');
              });
              return _context.abrupt("return", connector);

            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));

      function setTimingSrc(_x, _x2) {
        return _setTimingSrc.apply(this, arguments);
      }

      return setTimingSrc;
    }()
  }]);

  return Player;
}(); // Setup embed only if this is not a node environment


if (!isNode) {
  screenfull = initializeScreenfull();
  initializeEmbeds();
  resizeEmbeds();
  initAppendVideoMetadata();
  checkUrlTimeParam();
}

var _default = Player;
exports.default = _default;
},{}],"node_modules/bootstrap.native/dist/bootstrap-native.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDataAPI = exports.initCallback = exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;
var Go = Object.defineProperty;

var Qo = (t, e, s) => e in t ? Go(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: s
}) : t[e] = s;

var h = (t, e, s) => (Qo(t, typeof e != "symbol" ? e + "" : e, s), s);

const Xn = "aria-describedby",
      Ae = "aria-expanded",
      Oe = "aria-hidden",
      Me = "aria-modal",
      Ls = "aria-pressed",
      Qe = "aria-selected",
      Jo = "DOMContentLoaded",
      Ts = "focus",
      ys = "focusin",
      Yn = "focusout",
      Le = "keydown",
      _o = "keyup",
      N = "click",
      Un = "mousedown",
      ti = "hover",
      Be = "mouseenter",
      Es = "mouseleave",
      ei = "pointerdown",
      si = "pointermove",
      ni = "pointerup",
      Re = "resize",
      We = "scroll",
      Cs = "touchstart",
      oi = "dragstart",
      rs = "ArrowDown",
      ls = "ArrowUp",
      Bs = "ArrowLeft",
      Rs = "ArrowRight",
      Hs = "Escape",
      ii = "transitionDuration",
      ci = "transitionDelay",
      Je = "transitionend",
      Zn = "transitionProperty",
      ai = navigator.userAgentData,
      Ie = ai,
      {
  userAgent: ri
} = navigator,
      ke = ri,
      Ws = /iPhone|iPad|iPod|Android/i;
Ie ? Ie.brands.some(t => Ws.test(t.brand)) : Ws.test(ke);
const Fs = /(iPhone|iPod|iPad)/,
      li = Ie ? Ie.brands.some(t => Fs.test(t.brand)) :
/* istanbul ignore next */
Fs.test(ke);
ke && ke.includes("Firefox");
const {
  head: Fe
} = document;
["webkitPerspective", "perspective"].some(t => t in Fe.style);

const di = (t, e, s, n) => {
  const o = n || !1;
  t.addEventListener(e, s, o);
},
      hi = (t, e, s, n) => {
  const o = n || !1;
  t.removeEventListener(e, s, o);
},
      fi = (t, e, s, n) => {
  const o = i => {
    (i.target === t || i.currentTarget === t) && (s.apply(t, [i]), hi(t, e, o, n));
  };

  di(t, e, o, n);
},
      ge = () => {};

(() => {
  let t = !1;

  try {
    const e = Object.defineProperty({}, "passive", {
      get: () => (t = !0, t)
    });
    fi(document, Jo, ge, e);
  } catch {}

  return t;
})();

["webkitTransform", "transform"].some(t => t in Fe.style);
["webkitAnimation", "animation"].some(t => t in Fe.style);
["webkitTransition", "transition"].some(t => t in Fe.style);

const it = (t, e) => t.getAttribute(e),
      Ne = (t, e) => t.hasAttribute(e),
      O = (t, e, s) => t.setAttribute(e, s),
      Nt = (t, e) => t.removeAttribute(e),
      p = (t, ...e) => {
  t.classList.add(...e);
},
      v = (t, ...e) => {
  t.classList.remove(...e);
},
      f = (t, e) => t.classList.contains(e),
      be = t => t != null && typeof t == "object" || !1,
      A = t => be(t) && typeof t.nodeType == "number" && [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].some(e => t.nodeType === e) || !1,
      y = t => A(t) && t.nodeType === 1 || !1,
      jt =
/* @__PURE__ */
new Map(),
      Dt = {
  data: jt,

  /**
   * Sets web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @param instance the component instance
   */
  set: (t, e, s) => {
    y(t) && (jt.has(e) || jt.set(e,
    /* @__PURE__ */
    new Map()), jt.get(e).set(t, s));
  },

  /**
   * Returns all instances for specified component.
   *
   * @param component the component's name or a unique key
   * @returns all the component instances
   */
  getAllFor: t => jt.get(t) || null,

  /**
   * Returns the instance associated with the target.
   *
   * @param element target element
   * @param component the component's name or a unique key
   * @returns the instance
   */
  get: (t, e) => {
    if (!y(t) || !e) return null;
    const s = Dt.getAllFor(e);
    return t && s && s.get(t) || null;
  },

  /**
   * Removes web components data.
   *
   * @param element target element
   * @param component the component's name or a unique key
   */
  remove: (t, e) => {
    const s = Dt.getAllFor(e);
    !s || !y(t) || (s.delete(t), s.size === 0 && jt.delete(e));
  }
},
      j = (t, e) => Dt.get(t, e),
      we = t => typeof t == "string" || !1,
      Ss = t => be(t) && t.constructor.name === "Window" || !1,
      qn = t => A(t) && t.nodeType === 9 || !1,
      w = t => Ss(t) ? t.document : qn(t) ? t : A(t) ? t.ownerDocument : window.document,
      dt = (t, ...e) => Object.assign(t, ...e),
      Tt = t => {
  if (!t) return;
  if (we(t)) return w().createElement(t);
  const {
    tagName: e
  } = t,
        s = Tt(e);
  if (!s) return;
  const n = { ...t
  };
  return delete n.tagName, dt(s, n);
},
      b = (t, e) => t.dispatchEvent(e),
      V = (t, e) => {
  const s = getComputedStyle(t),
        n = e.replace("webkit", "Webkit").replace(/([A-Z])/g, "-$1").toLowerCase();
  return s.getPropertyValue(n);
},
      pi = t => {
  const e = V(t, Zn),
        s = V(t, ci),
        n = s.includes("ms") ?
  /* istanbul ignore next */
  1 : 1e3,
        o = e && e !== "none" ? parseFloat(s) * n :
  /* istanbul ignore next */
  0;
  return Number.isNaN(o) ?
  /* istanbul ignore next */
  0 : o;
},
      Xt = t => {
  const e = V(t, Zn),
        s = V(t, ii),
        n = s.includes("ms") ?
  /* istanbul ignore next */
  1 : 1e3,
        o = e && e !== "none" ? parseFloat(s) * n :
  /* istanbul ignore next */
  0;
  return Number.isNaN(o) ?
  /* istanbul ignore next */
  0 : o;
},
      x = (t, e) => {
  let s = 0;
  const n = new Event(Je),
        o = Xt(t),
        i = pi(t);

  if (o) {
    const c = a => {
      a.target === t && (e.apply(t, [a]), t.removeEventListener(Je, c), s = 1);
    };

    t.addEventListener(Je, c), setTimeout(() => {
      s || b(t, n);
    }, o + i + 17);
  } else e.apply(t, [n]);
},
      ht = (t, e) => t.focus(e),
      js = t => ["true", !0].includes(t) ? !0 : ["false", !1].includes(t) ? !1 : ["null", "", null, void 0].includes(t) ? null : t !== "" && !Number.isNaN(+t) ? +t : t,
      He = t => Object.entries(t),
      Yt = t => t.toLowerCase(),
      gi = (t, e, s, n) => {
  const o = { ...s
  },
        i = { ...t.dataset
  },
        c = { ...e
  },
        a = {},
        r = "title";
  return He(i).forEach(([l, d]) => {
    const g = n && typeof l == "string" && l.includes(n) ? l.replace(n, "").replace(/[A-Z]/g, C => Yt(C)) : l;
    a[g] = js(d);
  }), He(o).forEach(([l, d]) => {
    o[l] = js(d);
  }), He(e).forEach(([l, d]) => {
    l in o ? c[l] = o[l] : l in a ? c[l] = a[l] : c[l] = l === r ? it(t, r) : d;
  }), c;
},
      zs = t => Object.keys(t),
      $ = (t, e) => {
  const s = new CustomEvent(t, {
    cancelable: !0,
    bubbles: !0
  });
  return be(e) && dt(s, e), s;
},
      st = {
  passive: !0
},
      Lt = t => t.offsetHeight,
      I = (t, e) => {
  He(e).forEach(([s, n]) => {
    if (n && we(s) && s.includes("--")) t.style.setProperty(s, n);else {
      const o = {};
      o[s] = n, dt(t.style, o);
    }
  });
},
      ds = t => be(t) && t.constructor.name === "Map" || !1,
      ui = t => typeof t == "number" || !1,
      bt =
/* @__PURE__ */
new Map(),
      u = {
  /**
   * Sets a new timeout timer for an element, or element -> key association.
   *
   * @param element target element
   * @param callback the callback
   * @param delay the execution delay
   * @param key a unique key
   */
  set: (t, e, s, n) => {
    y(t) && (n && n.length ? (bt.has(t) || bt.set(t,
    /* @__PURE__ */
    new Map()), bt.get(t).set(n, setTimeout(e, s))) : bt.set(t, setTimeout(e, s)));
  },

  /**
   * Returns the timer associated with the target.
   *
   * @param element target element
   * @param key a unique
   * @returns the timer
   */
  get: (t, e) => {
    if (!y(t)) return null;
    const s = bt.get(t);
    return e && s && ds(s) ? s.get(e) ||
    /* istanbul ignore next */
    null : ui(s) ? s : null;
  },

  /**
   * Clears the element's timer.
   *
   * @param element target element
   * @param key a unique key
   */
  clear: (t, e) => {
    if (!y(t)) return;
    const s = bt.get(t);
    e && e.length && ds(s) ? (clearTimeout(s.get(e)), s.delete(e), s.size === 0 && bt.delete(t)) : (clearTimeout(s), bt.delete(t));
  }
},
      $e = (t, e) => {
  const {
    width: s,
    height: n,
    top: o,
    right: i,
    bottom: c,
    left: a
  } = t.getBoundingClientRect();
  let r = 1,
      l = 1;

  if (e && y(t)) {
    const {
      offsetWidth: d,
      offsetHeight: g
    } = t;
    r = d > 0 ? Math.round(s) / d :
    /* istanbul ignore next */
    1, l = g > 0 ? Math.round(n) / g :
    /* istanbul ignore next */
    1;
  }

  return {
    width: s / r,
    height: n / l,
    top: o / l,
    right: i / r,
    bottom: c / l,
    left: a / r,
    x: a / r,
    y: o / l
  };
},
      Ht = t => w(t).body,
      ft = t => w(t).documentElement,
      Gn = t => A(t) && t.constructor.name === "ShadowRoot" || !1,
      mi = t => t.nodeName === "HTML" ? t : y(t) && t.assignedSlot || // step into the shadow DOM of the parent of a slotted node
A(t) && t.parentNode || // DOM Element detected
Gn(t) && t.host || // ShadowRoot detected
ft(t);

let Ks = 0,
    Vs = 0;

const zt =
/* @__PURE__ */
new Map(),
      Qn = (t, e) => {
  let s = e ? Ks : Vs;

  if (e) {
    const n = Qn(t),
          o = zt.get(n) ||
    /* @__PURE__ */
    new Map();
    zt.has(n) || zt.set(n, o), ds(o) && !o.has(e) ? (o.set(e, s), Ks += 1) : s = o.get(e);
  } else {
    const n = t.id || t;
    zt.has(n) ? s = zt.get(n) : (zt.set(n, s), Vs += 1);
  }

  return s;
},
      qt = t => {
  var e;
  return t ? qn(t) ? t.defaultView : A(t) ? (e = t == null ? void 0 : t.ownerDocument) == null ? void 0 : e.defaultView : t : window;
},
      vi = t => Array.isArray(t) || !1,
      Jn = t => {
  if (!A(t)) return !1;
  const {
    top: e,
    bottom: s
  } = $e(t),
        {
    clientHeight: n
  } = ft(t);
  return e <= n && s >= 0;
},
      bi = t => typeof t == "function" || !1,
      wi = t => be(t) && t.constructor.name === "NodeList" || !1,
      Ct = t => ft(t).dir === "rtl",
      $i = t => A(t) && ["TABLE", "TD", "TH"].includes(t.nodeName) || !1,
      M = (t, e) => t ? t.closest(e) || // break out of `ShadowRoot`
M(t.getRootNode().host, e) : null,
      P = (t, e) => y(t) ? t : (A(e) ? e : w()).querySelector(t),
      xs = (t, e) => (A(e) ? e : w()).getElementsByTagName(t),
      tt = (t, e) => (A(e) ? e : w()).querySelectorAll(t),
      rt = (t, e) => (e && A(e) ? e : w()).getElementsByClassName(t),
      _n = (t, e) => t.matches(e),
      Vt = {},
      to = t => {
  const {
    type: e,
    currentTarget: s
  } = t;
  [...Vt[e]].forEach(([n, o]) => {
    s === n && [...o].forEach(([i, c]) => {
      i.apply(n, [t]), typeof c == "object" && c.once && B(n, e, i, c);
    });
  });
},
      L = (t, e, s, n) => {
  Vt[e] || (Vt[e] =
  /* @__PURE__ */
  new Map());
  const o = Vt[e];
  o.has(t) || o.set(t,
  /* @__PURE__ */
  new Map());
  const i = o.get(t),
        {
    size: c
  } = i;
  i.set(s, n), c || t.addEventListener(e, to, n);
},
      B = (t, e, s, n) => {
  const o = Vt[e],
        i = o && o.get(t),
        c = i && i.get(s),
        a = c !== void 0 ? c : n;
  i && i.has(s) && i.delete(s), o && (!i || !i.size) && o.delete(t), (!o || !o.size) && delete Vt[e], (!i || !i.size) && t.removeEventListener(e, to, a);
},
      R = "fade",
      m = "show",
      je = "data-bs-dismiss",
      ze = "alert",
      eo = "Alert",
      Ti = "5.0.9",
      yi = Ti;

class nt {
  /**
   * @param target `HTMLElement` or selector string
   * @param config component instance options
   */
  constructor(e, s) {
    const n = P(e);
    if (!n) throw we(e) ? Error(`${this.name} Error: "${e}" is not a valid selector.`) : Error(`${this.name} Error: your target is not an instance of HTMLElement.`);
    const o = Dt.get(n, this.name);
    o && o.dispose(), this.element = n, this.options = this.defaults && zs(this.defaults).length ? gi(n, this.defaults, s || {}, "bs") : {}, Dt.set(n, this.name, this);
  }
  /* istanbul ignore next */


  get version() {
    return yi;
  }
  /* istanbul ignore next */


  get name() {
    return "BaseComponent";
  }
  /* istanbul ignore next */


  get defaults() {
    return {};
  }
  /** Removes component from target element. */


  dispose() {
    Dt.remove(this.element, this.name), zs(this).forEach(e => {
      delete this[e];
    });
  }

}

const Ei = `.${ze}`,
      Ci = `[${je}="${ze}"]`,
      Hi = t => j(t, eo),
      Si = t => new oe(t),
      Xs = $(`close.bs.${ze}`),
      xi = $(`closed.bs.${ze}`),
      Ys = t => {
  const {
    element: e
  } = t;
  hs(t), b(e, xi), t.dispose(), e.remove();
},
      hs = (t, e) => {
  const s = e ? L : B,
        {
    dismiss: n,
    close: o
  } = t;
  n && s(n, N, o);
};

class oe extends nt {
  constructor(s) {
    super(s);
    h(this, "dismiss"); // ALERT PUBLIC METHODS
    // ====================

    /**
     * Public method that hides the `.alert` element from the user,
     * disposes the instance once animation is complete, then
     * removes the element from the DOM.
     */

    h(this, "close", () => {
      const {
        element: s
      } = this;
      s && f(s, m) && (b(s, Xs), Xs.defaultPrevented || (v(s, m), f(s, R) ? x(s, () => Ys(this)) : Ys(this)));
    });
    this.dismiss = P(Ci, this.element), hs(this, !0);
  }
  /** Returns component name string. */


  get name() {
    return eo;
  }
  /** Remove the component from target element. */


  dispose() {
    hs(this), super.dispose();
  }

}

exports.Alert = oe;
h(oe, "selector", Ei), h(oe, "init", Si), h(oe, "getInstance", Hi);

const E = "active",
      ct = "data-bs-toggle",
      Pi = "button",
      so = "Button",
      Di = `[${ct}="${Pi}"]`,
      Ai = t => j(t, so),
      Ii = t => new ie(t),
      Us = (t, e) => {
  (e ? L : B)(t.element, N, t.toggle);
};

class ie extends nt {
  /**
   * @param target usually a `.btn` element
   */
  constructor(s) {
    super(s);
    h(this, "isActive", !1); // BUTTON PUBLIC METHODS
    // =====================

    /**
     * Toggles the state of the target button.
     *
     * @param e usually `click` Event object
     */

    h(this, "toggle", s => {
      s && s.preventDefault();
      const {
        element: n,
        isActive: o
      } = this;
      !f(n, "disabled") && !it(n, "disabled") && ((o ? v : p)(n, E), O(n, Ls, o ? "false" : "true"), this.isActive = f(n, E));
    });
    const {
      element: n
    } = this;
    this.isActive = f(n, E), O(n, Ls, String(!!this.isActive)), Us(this, !0);
  }
  /**
   * Returns component name string.
   */


  get name() {
    return so;
  }
  /** Removes the `Button` component from the target element. */


  dispose() {
    Us(this), super.dispose();
  }

}

exports.Button = ie;
h(ie, "selector", Di), h(ie, "init", Ii), h(ie, "getInstance", Ai);

const fs = "data-bs-target",
      At = "carousel",
      no = "Carousel",
      Zs = "data-bs-parent",
      ki = "data-bs-container",
      Y = t => {
  const e = [fs, Zs, ki, "href"],
        s = w(t);
  return e.map(n => {
    const o = it(t, n);
    return o ? n === Zs ? M(t, o) : P(o, s) : null;
  }).filter(n => n)[0];
},
      Te = `[data-bs-ride="${At}"]`,
      G = `${At}-item`,
      ps = "data-bs-slide-to",
      $t = "data-bs-slide",
      yt = "paused",
      qs = {
  pause: "hover",
  keyboard: !1,
  touch: !0,
  interval: 5e3
},
      pt = t => j(t, no),
      Ni = t => new ce(t);

let se = 0,
    Se = 0,
    _e = 0;

const ts = $(`slide.bs.${At}`),
      gs = $(`slid.bs.${At}`),
      Gs = t => {
  const {
    index: e,
    direction: s,
    element: n,
    slides: o,
    options: i
  } = t;

  if (t.isAnimating) {
    const c = us(t),
          a = s === "left" ? "next" : "prev",
          r = s === "left" ? "start" : "end";
    p(o[e], E), v(o[e], `${G}-${a}`), v(o[e], `${G}-${r}`), v(o[c], E), v(o[c], `${G}-${r}`), b(n, gs), u.clear(n, $t), t.cycle && !w(n).hidden && i.interval && !t.isPaused && t.cycle();
  }
};

function Oi() {
  const t = pt(this);
  t && !t.isPaused && !u.get(this, yt) && p(this, yt);
}

function Mi() {
  const t = pt(this);
  t && t.isPaused && !u.get(this, yt) && t.cycle();
}

function Li(t) {
  t.preventDefault();
  const e = M(this, Te) || Y(this),
        s = pt(e);

  if (s && !s.isAnimating) {
    const n = +(it(this, ps) ||
    /* istanbul ignore next */
    0);
    this && !f(this, E) && // event target is not active
    !Number.isNaN(n) && s.to(n);
  }
}

function Bi(t) {
  t.preventDefault();
  const e = M(this, Te) || Y(this),
        s = pt(e);

  if (s && !s.isAnimating) {
    const n = it(this, $t);
    n === "next" ? s.next() : n === "prev" && s.prev();
  }
}

const Ri = ({
  code: t,
  target: e
}) => {
  const s = w(e),
        [n] = [...tt(Te, s)].filter(i => Jn(i)),
        o = pt(n);

  if (o && !o.isAnimating && !/textarea|input/i.test(e.nodeName)) {
    const i = Ct(n);
    t === (i ? Rs : Bs) ? o.prev() : t === (i ? Bs : Rs) && o.next();
  }
};

function Qs(t) {
  const {
    target: e
  } = t,
        s = pt(this);
  s && s.isTouch && (s.indicator && !s.indicator.contains(e) || !s.controls.includes(e)) && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
}

function Wi(t) {
  const {
    target: e
  } = t,
        s = pt(this);

  if (s && !s.isAnimating && !s.isTouch) {
    const {
      controls: n,
      indicators: o
    } = s;
    [...n, ...o].every(i => i === e || i.contains(e)) || (se = t.pageX, this.contains(e) && (s.isTouch = !0, oo(s, !0)));
  }
}

const Fi = t => {
  Se = t.pageX;
},
      ji = t => {
  var o;
  const {
    target: e
  } = t,
        s = w(e),
        n = [...tt(Te, s)].map(i => pt(i)).find(i => i.isTouch);

  if (n) {
    const {
      element: i,
      index: c
    } = n,
          a = Ct(i);
    _e = t.pageX, n.isTouch = !1, oo(n), !((o = s.getSelection()) != null && o.toString().length) && i.contains(e) && Math.abs(se - _e) > 120 && (Se < se ? n.to(c + (a ? -1 : 1)) : Se > se && n.to(c + (a ? 1 : -1))), se = 0, Se = 0, _e = 0;
  }
},
      es = (t, e) => {
  const {
    indicators: s
  } = t;
  [...s].forEach(n => v(n, E)), t.indicators[e] && p(s[e], E);
},
      oo = (t, e) => {
  const {
    element: s
  } = t,
        n = e ? L : B;
  n(w(s), si, Fi, st), n(w(s), ni, ji, st);
},
      Js = (t, e) => {
  const {
    element: s,
    options: n,
    slides: o,
    controls: i,
    indicators: c
  } = t,
        {
    touch: a,
    pause: r,
    interval: l,
    keyboard: d
  } = n,
        g = e ? L : B;
  r && l && (g(s, Be, Oi), g(s, Es, Mi)), a && o.length > 2 && (g(s, ei, Wi, st), g(s, Cs, Qs, {
    passive: !1
  }), g(s, oi, Qs, {
    passive: !1
  })), i.length && i.forEach(C => {
    C && g(C, N, Bi);
  }), c.length && c.forEach(C => {
    g(C, N, Li);
  }), d && g(w(s), Le, Ri);
},
      us = t => {
  const {
    slides: e,
    element: s
  } = t,
        n = P(`.${G}.${E}`, s);
  return y(n) ? [...e].indexOf(n) : -1;
};

class ce extends nt {
  /**
   * @param target mostly a `.carousel` element
   * @param config instance options
   */
  constructor(e, s) {
    super(e, s);
    const {
      element: n
    } = this;
    this.direction = Ct(n) ? "right" : "left", this.isTouch = !1, this.slides = rt(G, n);
    const {
      slides: o
    } = this;

    if (o.length >= 2) {
      const i = us(this),
            c = [...o].find(l => _n(l, `.${G}-next,.${G}-next`));
      this.index = i;
      const a = w(n);
      this.controls = [...tt(`[${$t}]`, n), ...tt(`[${$t}][${fs}="#${n.id}"]`, a)].filter((l, d, g) => d === g.indexOf(l)), this.indicator = P(`.${At}-indicators`, n), this.indicators = [...(this.indicator ? tt(`[${ps}]`, this.indicator) : []), ...tt(`[${ps}][${fs}="#${n.id}"]`, a)].filter((l, d, g) => d === g.indexOf(l));
      const {
        options: r
      } = this;
      this.options.interval = r.interval === !0 ? qs.interval : r.interval, c ? this.index = [...o].indexOf(c) : i < 0 && (this.index = 0, p(o[0], E), this.indicators.length && es(this, 0)), this.indicators.length && es(this, this.index), Js(this, !0), r.interval && this.cycle();
    }
  }
  /**
   * Returns component name string.
   */


  get name() {
    return no;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return qs;
  }
  /**
   * Check if instance is paused.
   */


  get isPaused() {
    return f(this.element, yt);
  }
  /**
   * Check if instance is animating.
   */


  get isAnimating() {
    return P(`.${G}-next,.${G}-prev`, this.element) !== null;
  } // CAROUSEL PUBLIC METHODS
  // =======================

  /** Slide automatically through items. */


  cycle() {
    const {
      element: e,
      options: s,
      isPaused: n,
      index: o
    } = this;
    u.clear(e, At), n && (u.clear(e, yt), v(e, yt)), u.set(e, () => {
      this.element && !this.isPaused && !this.isTouch && Jn(e) && this.to(o + 1);
    }, s.interval, At);
  }
  /** Pause the automatic cycle. */


  pause() {
    const {
      element: e,
      options: s
    } = this;
    !this.isPaused && s.interval && (p(e, yt), u.set(e, () => {}, 1, yt));
  }
  /** Slide to the next item. */


  next() {
    this.isAnimating || this.to(this.index + 1);
  }
  /** Slide to the previous item. */


  prev() {
    this.isAnimating || this.to(this.index - 1);
  }
  /**
   * Jump to the item with the `idx` index.
   *
   * @param idx the index of the item to jump to
   */


  to(e) {
    const {
      element: s,
      slides: n,
      options: o
    } = this,
          i = us(this),
          c = Ct(s);
    let a = e;

    if (!this.isAnimating && i !== a && !u.get(s, $t)) {
      i < a || i === 0 && a === n.length - 1 ? this.direction = c ? "right" : "left" : (i > a || i === n.length - 1 && a === 0) && (this.direction = c ? "left" : "right");
      const {
        direction: r
      } = this;
      a < 0 ? a = n.length - 1 : a >= n.length && (a = 0);
      const l = r === "left" ? "next" : "prev",
            d = r === "left" ? "start" : "end",
            g = {
        relatedTarget: n[a],
        from: i,
        to: a,
        direction: r
      };
      dt(ts, g), dt(gs, g), b(s, ts), ts.defaultPrevented || (this.index = a, es(this, a), Xt(n[a]) && f(s, "slide") ? u.set(s, () => {
        p(n[a], `${G}-${l}`), Lt(n[a]), p(n[a], `${G}-${d}`), p(n[i], `${G}-${d}`), x(n[a], () => this.slides && this.slides.length && Gs(this));
      }, 0, $t) : (p(n[a], E), v(n[i], E), u.set(s, () => {
        u.clear(s, $t), s && o.interval && !this.isPaused && this.cycle(), b(s, gs);
      }, 0, $t)));
    }
  }
  /** Remove `Carousel` component from target. */


  dispose() {
    const {
      isAnimating: e
    } = this,
          s = { ...this,
      isAnimating: e
    };
    Js(s), super.dispose(), s.isAnimating && x(s.slides[s.index], () => {
      Gs(s);
    });
  }

}

exports.Carousel = ce;
h(ce, "selector", Te), h(ce, "init", Ni), h(ce, "getInstance", pt);

const Ot = "collapsing",
      X = "collapse",
      io = "Collapse",
      zi = `.${X}`,
      co = `[${ct}="${X}"]`,
      Ki = {
  parent: null
},
      xe = t => j(t, io),
      Vi = t => new ae(t),
      _s = $(`show.bs.${X}`),
      Xi = $(`shown.bs.${X}`),
      tn = $(`hide.bs.${X}`),
      Yi = $(`hidden.bs.${X}`),
      Ui = t => {
  const {
    element: e,
    parent: s,
    triggers: n
  } = t;
  b(e, _s), _s.defaultPrevented || (u.set(e, ge, 17), s && u.set(s, ge, 17), p(e, Ot), v(e, X), I(e, {
    height: `${e.scrollHeight}px`
  }), x(e, () => {
    u.clear(e), s && u.clear(s), n.forEach(o => O(o, Ae, "true")), v(e, Ot), p(e, X), p(e, m), I(e, {
      height: ""
    }), b(e, Xi);
  }));
},
      en = t => {
  const {
    element: e,
    parent: s,
    triggers: n
  } = t;
  b(e, tn), tn.defaultPrevented || (u.set(e, ge, 17), s && u.set(s, ge, 17), I(e, {
    height: `${e.scrollHeight}px`
  }), v(e, X), v(e, m), p(e, Ot), Lt(e), I(e, {
    height: "0px"
  }), x(e, () => {
    u.clear(e), s && u.clear(s), n.forEach(o => O(o, Ae, "false")), v(e, Ot), p(e, X), I(e, {
      height: ""
    }), b(e, Yi);
  }));
},
      sn = (t, e) => {
  const s = e ? L : B,
        {
    triggers: n
  } = t;
  n.length && n.forEach(o => s(o, N, Zi));
},
      Zi = t => {
  const {
    target: e
  } = t,
        s = e && M(e, co),
        n = s && Y(s),
        o = n && xe(n);
  o && o.toggle(), s && s.tagName === "A" && t.preventDefault();
};

class ae extends nt {
  /**
   * @param target and `Element` that matches the selector
   * @param config instance options
   */
  constructor(e, s) {
    super(e, s);
    const {
      element: n,
      options: o
    } = this,
          i = w(n);
    this.triggers = [...tt(co, i)].filter(c => Y(c) === n), this.parent = y(o.parent) ? o.parent : we(o.parent) ? Y(n) || P(o.parent, i) : null, sn(this, !0);
  }
  /**
   * Returns component name string.
   */


  get name() {
    return io;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return Ki;
  } // COLLAPSE PUBLIC METHODS
  // =======================

  /** Toggles the visibility of the collapse. */


  toggle() {
    f(this.element, m) ? this.hide() : this.show();
  }
  /** Hides the collapse. */


  hide() {
    const {
      triggers: e,
      element: s
    } = this;
    u.get(s) || (en(this), e.length && e.forEach(n => p(n, `${X}d`)));
  }
  /** Shows the collapse. */


  show() {
    const {
      element: e,
      parent: s,
      triggers: n
    } = this;
    let o, i;
    s && (o = [...tt(`.${X}.${m}`, s)].find(c => xe(c)), i = o && xe(o)), (!s || !u.get(s)) && !u.get(e) && (i && o !== e && (en(i), i.triggers.forEach(c => {
      p(c, `${X}d`);
    })), Ui(this), n.length && n.forEach(c => v(c, `${X}d`)));
  }
  /** Remove the `Collapse` component from the target `Element`. */


  dispose() {
    sn(this), super.dispose();
  }

}

exports.Collapse = ae;
h(ae, "selector", zi), h(ae, "init", Vi), h(ae, "getInstance", xe);

const Mt = ["dropdown", "dropup", "dropstart", "dropend"],
      ao = "Dropdown",
      ro = "dropdown-menu",
      lo = t => {
  const e = M(t, "A");
  return t.tagName === "A" && // anchor href starts with #
  Ne(t, "href") && it(t, "href").slice(-1) === "#" || // OR a child of an anchor with href starts with #
  e && Ne(e, "href") && it(e, "href").slice(-1) === "#";
},
      [et, ms, vs, bs] = Mt,
      ho = `[${ct}="${et}"]`,
      Ut = t => j(t, ao),
      qi = t => new re(t),
      Gi = `${ro}-end`,
      nn = [et, ms],
      on = [vs, bs],
      cn = ["A", "BUTTON"],
      Qi = {
  offset: 5,
  // [number] 5(px)
  display: "dynamic" // [dynamic|static]

},
      ss = $(`show.bs.${et}`),
      an = $(`shown.bs.${et}`),
      ns = $(`hide.bs.${et}`),
      rn = $(`hidden.bs.${et}`),
      fo = $(`updated.bs.${et}`),
      po = t => {
  const {
    element: e,
    menu: s,
    parentElement: n,
    options: o
  } = t,
        {
    offset: i
  } = o;

  if (V(s, "position") !== "static") {
    const c = Ct(e),
          a = f(s, Gi);
    ["margin", "top", "bottom", "left", "right"].forEach(k => {
      const ut = {};
      ut[k] = "", I(s, ut);
    });
    let l = Mt.find(k => f(n, k)) ||
    /* istanbul ignore next: fallback position */
    et;

    const d = {
      dropdown: [i, 0, 0],
      dropup: [0, 0, i],
      dropstart: c ? [-1, 0, 0, i] : [-1, i, 0],
      dropend: c ? [-1, i, 0] : [-1, 0, 0, i]
    },
          g = {
      dropdown: {
        top: "100%"
      },
      dropup: {
        top: "auto",
        bottom: "100%"
      },
      dropstart: c ? {
        left: "100%",
        right: "auto"
      } : {
        left: "auto",
        right: "100%"
      },
      dropend: c ? {
        left: "auto",
        right: "100%"
      } : {
        left: "100%",
        right: "auto"
      },
      menuStart: c ? {
        right: "0",
        left: "auto"
      } : {
        right: "auto",
        left: "0"
      },
      menuEnd: c ? {
        right: "auto",
        left: "0"
      } : {
        right: "0",
        left: "auto"
      }
    },
          {
      offsetWidth: C,
      offsetHeight: W
    } = s,
          {
      clientWidth: q,
      clientHeight: T
    } = ft(e),
          {
      left: z,
      top: U,
      width: Rt,
      height: at
    } = $e(e),
          H = z - C - i < 0,
          _ = z + C + Rt + i >= q,
          ot = U + W + i >= T,
          F = U + W + at + i >= T,
          K = U - W - i < 0,
          S = (!c && a || c && !a) && z + Rt - C < 0,
          Wt = (c && a || !c && !a) && z + C >= q;

    if (on.includes(l) && H && _ && (l = et), l === vs && (c ? _ : H) && (l = bs), l === bs && (c ? H : _) && (l = vs), l === ms && K && !F && (l = et), l === et && F && !K && (l = ms), on.includes(l) && ot && dt(g[l], {
      top: "auto",
      bottom: 0
    }), nn.includes(l) && (S || Wt)) {
      let k = {
        left: "auto",
        right: "auto"
      };
      !S && Wt && !c && (k = {
        left: "auto",
        right: 0
      }), S && !Wt && c && (k = {
        left: 0,
        right: "auto"
      }), k && dt(g[l], k);
    }

    const gt = d[l];
    I(s, { ...g[l],
      margin: `${gt.map(k => k && `${k}px`).join(" ")}`
    }), nn.includes(l) && a && a && I(s, g[!c && S || c && Wt ? "menuStart" :
    /* istanbul ignore next */
    "menuEnd"]), b(n, fo);
  }
},
      Ji = t => [...t.children].map(e => {
  if (e && cn.includes(e.tagName)) return e;
  const {
    firstElementChild: s
  } = e;
  return s && cn.includes(s.tagName) ? s : null;
}).filter(e => e),
      ln = t => {
  const {
    element: e,
    options: s
  } = t,
        n = t.open ? L : B,
        o = w(e);
  n(o, N, hn), n(o, Ts, hn), n(o, Le, tc), n(o, _o, ec), s.display === "dynamic" && [We, Re].forEach(i => {
    n(qt(e), i, sc, st);
  });
},
      dn = (t, e) => {
  (e ? L : B)(t.element, N, _i);
},
      Ke = t => {
  const e = [...Mt, "btn-group", "input-group"].map(s => rt(`${s} ${m}`, w(t))).find(s => s.length);
  if (e && e.length) return [...e[0].children].find(s => Mt.some(n => n === it(s, ct)));
},
      hn = t => {
  const {
    target: e,
    type: s
  } = t;

  if (e && y(e)) {
    const n = Ke(e),
          o = n && Ut(n);

    if (o) {
      const {
        parentElement: i,
        menu: c
      } = o,
            a = i && i.contains(e) && (e.tagName === "form" || M(e, "form") !== null);
      [N, Un].includes(s) && lo(e) && t.preventDefault(), !a && s !== Ts && e !== n && e !== c && o.hide();
    }
  }
},
      _i = t => {
  const {
    target: e
  } = t,
        s = e && M(e, ho),
        n = s && Ut(s);
  n && (t.stopPropagation(), n.toggle(), s && lo(s) && t.preventDefault());
},
      tc = t => {
  [rs, ls].includes(t.code) && t.preventDefault();
};

function ec(t) {
  const {
    code: e
  } = t,
        s = Ke(this),
        n = s && Ut(s),
        {
    activeElement: o
  } = s && w(s);

  if (n && o) {
    const {
      menu: i,
      open: c
    } = n,
          a = Ji(i);

    if (a && a.length && [rs, ls].includes(e)) {
      let r = a.indexOf(o);
      o === s ? r = 0 : e === ls ? r = r > 1 ? r - 1 : 0 : e === rs && (r = r < a.length - 1 ? r + 1 : r), a[r] && ht(a[r]);
    }

    Hs === e && c && (n.toggle(), ht(s));
  }
}

function sc() {
  const t = Ke(this),
        e = t && Ut(t);
  e && e.open && po(e);
}

class re extends nt {
  /**
   * @param target Element or string selector
   * @param config the instance options
   */
  constructor(e, s) {
    super(e, s);
    const {
      parentElement: n
    } = this.element,
          [o] = rt(ro, n);
    o && (this.parentElement = n, this.menu = o, dn(this, !0));
  }
  /**
   * Returns component name string.
   */


  get name() {
    return ao;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return Qi;
  } // DROPDOWN PUBLIC METHODS
  // =======================

  /** Shows/hides the dropdown menu to the user. */


  toggle() {
    this.open ? this.hide() : this.show();
  }
  /** Shows the dropdown menu to the user. */


  show() {
    const {
      element: e,
      open: s,
      menu: n,
      parentElement: o
    } = this;

    if (!s) {
      const i = Ke(e),
            c = i && Ut(i);
      c && c.hide(), [ss, an, fo].forEach(a => {
        a.relatedTarget = e;
      }), b(o, ss), ss.defaultPrevented || (p(n, m), p(o, m), O(e, Ae, "true"), po(this), this.open = !s, ht(e), ln(this), b(o, an));
    }
  }
  /** Hides the dropdown menu from the user. */


  hide() {
    const {
      element: e,
      open: s,
      menu: n,
      parentElement: o
    } = this;
    s && ([ns, rn].forEach(i => {
      i.relatedTarget = e;
    }), b(o, ns), ns.defaultPrevented || (v(n, m), v(o, m), O(e, Ae, "false"), this.open = !s, ln(this), b(o, rn)));
  }
  /** Removes the `Dropdown` component from the target element. */


  dispose() {
    this.open && this.hide(), dn(this), super.dispose();
  }

}

exports.Dropdown = re;
h(re, "selector", ho), h(re, "init", qi), h(re, "getInstance", Ut);

const Z = "modal",
      Ps = "Modal",
      Ds = "Offcanvas",
      nc = "fixed-top",
      oc = "fixed-bottom",
      go = "sticky-top",
      uo = "position-sticky",
      mo = t => [...rt(nc, t), ...rt(oc, t), ...rt(go, t), ...rt(uo, t), ...rt("is-fixed", t)],
      ic = t => {
  const e = Ht(t);
  I(e, {
    paddingRight: "",
    overflow: ""
  });
  const s = mo(e);
  s.length && s.forEach(n => {
    I(n, {
      paddingRight: "",
      marginRight: ""
    });
  });
},
      vo = t => {
  const {
    clientWidth: e
  } = ft(t),
        {
    innerWidth: s
  } = qt(t);
  return Math.abs(s - e);
},
      bo = (t, e) => {
  const s = Ht(t),
        n = parseInt(V(s, "paddingRight"), 10),
        i = V(s, "overflow") === "hidden" && n ? 0 : vo(t),
        c = mo(s);
  e && (I(s, {
    overflow: "hidden",
    paddingRight: `${n + i}px`
  }), c.length && c.forEach(a => {
    const r = V(a, "paddingRight");

    if (a.style.paddingRight = `${parseInt(r, 10) + i}px`, [go, uo].some(l => f(a, l))) {
      const l = V(a, "marginRight");
      a.style.marginRight = `${parseInt(l, 10) - i}px`;
    }
  }));
},
      Q = "offcanvas",
      Et = Tt({
  tagName: "div",
  className: "popup-container"
}),
      wo = (t, e) => {
  const s = A(e) && e.nodeName === "BODY",
        n = A(e) && !s ? e : Et,
        o = s ? e : Ht(t);
  A(t) && (n === Et && o.append(Et), n.append(t));
},
      $o = (t, e) => {
  const s = A(e) && e.nodeName === "BODY",
        n = A(e) && !s ? e : Et;
  A(t) && (t.remove(), n === Et && !Et.children.length && Et.remove());
},
      As = (t, e) => {
  const s = A(e) && e.nodeName !== "BODY" ? e : Et;
  return A(t) && s.contains(t);
},
      To = "backdrop",
      fn = `${Z}-${To}`,
      pn = `${Q}-${To}`,
      yo = `.${Z}.${m}`,
      Is = `.${Q}.${m}`,
      D = Tt("div"),
      Bt = t => P(`${yo},${Is}`, w(t)),
      ks = t => {
  const e = t ? fn : pn;
  [fn, pn].forEach(s => {
    v(D, s);
  }), p(D, e);
},
      Eo = (t, e, s) => {
  ks(s), wo(D, Ht(t)), e && p(D, R);
},
      Co = () => {
  f(D, m) || (p(D, m), Lt(D));
},
      Ve = () => {
  v(D, m);
},
      Ho = t => {
  Bt(t) || (v(D, R), $o(D, Ht(t)), ic(t));
},
      So = t => y(t) && V(t, "visibility") !== "hidden" && t.offsetParent !== null,
      cc = `.${Z}`,
      xo = `[${ct}="${Z}"]`,
      ac = `[${je}="${Z}"]`,
      Po = `${Z}-static`,
      rc = {
  backdrop: !0,
  keyboard: !0
},
      ue = t => j(t, Ps),
      lc = t => new le(t),
      Pe = $(`show.bs.${Z}`),
      gn = $(`shown.bs.${Z}`),
      os = $(`hide.bs.${Z}`),
      un = $(`hidden.bs.${Z}`),
      Do = t => {
  const {
    element: e
  } = t,
        s = vo(e),
        {
    clientHeight: n,
    scrollHeight: o
  } = ft(e),
        {
    clientHeight: i,
    scrollHeight: c
  } = e,
        a = i !== c;

  if (!a && s) {
    const r = Ct(e) ?
    /* istanbul ignore next */
    "paddingLeft" : "paddingRight",
          l = {};
    l[r] = `${s}px`, I(e, l);
  }

  bo(e, a || n !== o);
},
      Ao = (t, e) => {
  const s = e ? L : B,
        {
    element: n,
    update: o
  } = t;
  s(n, N, fc), s(qt(n), Re, o, st), s(w(n), Le, hc);
},
      mn = (t, e) => {
  const s = e ? L : B,
        {
    triggers: n
  } = t;
  n.length && n.forEach(o => s(o, N, dc));
},
      vn = t => {
  const {
    triggers: e,
    element: s,
    relatedTarget: n
  } = t;
  Ho(s), I(s, {
    paddingRight: "",
    display: ""
  }), Ao(t);
  const o = Pe.relatedTarget || e.find(So);
  o && ht(o), un.relatedTarget = n, b(s, un);
},
      bn = t => {
  const {
    element: e,
    relatedTarget: s
  } = t;
  ht(e), Ao(t, !0), gn.relatedTarget = s, b(e, gn);
},
      wn = t => {
  const {
    element: e,
    hasFade: s
  } = t;
  I(e, {
    display: "block"
  }), Do(t), Bt(e) || I(Ht(e), {
    overflow: "hidden"
  }), p(e, m), Nt(e, Oe), O(e, Me, "true"), s ? x(e, () => bn(t)) : bn(t);
},
      $n = t => {
  const {
    element: e,
    options: s,
    hasFade: n
  } = t;
  s.backdrop && n && f(D, m) && !Bt(e) ? (Ve(), x(D, () => vn(t))) : vn(t);
},
      dc = t => {
  const {
    target: e
  } = t,
        s = e && M(e, xo),
        n = s && Y(s),
        o = n && ue(n);
  o && (s && s.tagName === "A" && t.preventDefault(), o.relatedTarget = s, o.toggle());
},
      hc = ({
  code: t,
  target: e
}) => {
  const s = P(yo, w(e)),
        n = s && ue(s);

  if (n) {
    const {
      options: o
    } = n;
    o.keyboard && t === Hs && // the keyboard option is enabled and the key is 27
    f(s, m) && (n.relatedTarget = null, n.hide());
  }
};

function fc(t) {
  var s, n;
  const e = ue(this);

  if (e && !u.get(this)) {
    const {
      options: o,
      isStatic: i,
      modalDialog: c
    } = e,
          {
      backdrop: a
    } = o,
          {
      target: r
    } = t,
          l = (n = (s = w(this)) == null ? void 0 : s.getSelection()) == null ? void 0 : n.toString().length,
          d = c.contains(r),
          g = r && M(r, ac);
    i && !d ? u.set(this, () => {
      p(this, Po), x(c, () => pc(e));
    }, 17) : (g || !l && !i && !d && a) && (e.relatedTarget = g || null, e.hide(), t.preventDefault());
  }
}

const pc = t => {
  const {
    element: e,
    modalDialog: s
  } = t,
        n = (Xt(s) || 0) + 17;
  v(e, Po), u.set(e, () => u.clear(e), n);
};

class le extends nt {
  /**
   * @param target usually the `.modal` element
   * @param config instance options
   */
  constructor(s, n) {
    super(s, n);
    /**
     * Updates the modal layout.
     */

    h(this, "update", () => {
      f(this.element, m) && Do(this);
    });
    const {
      element: o
    } = this,
          i = P(`.${Z}-dialog`, o);
    i && (this.modalDialog = i, this.triggers = [...tt(xo, w(o))].filter(c => Y(c) === o), this.isStatic = this.options.backdrop === "static", this.hasFade = f(o, R), this.relatedTarget = null, mn(this, !0));
  }
  /**
   * Returns component name string.
   */


  get name() {
    return Ps;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return rc;
  } // MODAL PUBLIC METHODS
  // ====================

  /** Toggles the visibility of the modal. */


  toggle() {
    f(this.element, m) ? this.hide() : this.show();
  }
  /** Shows the modal to the user. */


  show() {
    const {
      element: s,
      options: n,
      hasFade: o,
      relatedTarget: i
    } = this,
          {
      backdrop: c
    } = n;
    let a = 0;

    if (!f(s, m) && (Pe.relatedTarget = i || void 0, b(s, Pe), !Pe.defaultPrevented)) {
      const r = Bt(s);

      if (r && r !== s) {
        const l = ue(r) ||
        /* istanbul ignore next */
        j(r, Ds);
        l && l.hide();
      }

      c ? (As(D) ? ks(!0) : Eo(s, o, !0), a = Xt(D), Co(), setTimeout(() => wn(this), a)) : (wn(this), r && f(D, m) && Ve());
    }
  }
  /** Hide the modal from the user. */


  hide() {
    const {
      element: s,
      hasFade: n,
      relatedTarget: o
    } = this;
    f(s, m) && (os.relatedTarget = o || void 0, b(s, os), os.defaultPrevented || (v(s, m), O(s, Oe, "true"), Nt(s, Me), n ? x(s, () => $n(this)) : $n(this)));
  }
  /** Removes the `Modal` component from target element. */


  dispose() {
    const s = { ...this
    },
          {
      element: n,
      modalDialog: o
    } = s,
          i = () => setTimeout(() => super.dispose(), 17);

    mn(s), this.hide(), f(n, "fade") ? x(o, i) : i();
  }

}

exports.Modal = le;
h(le, "selector", cc), h(le, "init", lc), h(le, "getInstance", ue);

const gc = `.${Q}`,
      Ns = `[${ct}="${Q}"]`,
      uc = `[${je}="${Q}"]`,
      Xe = `${Q}-toggling`,
      mc = {
  backdrop: !0,
  // boolean
  keyboard: !0,
  // boolean
  scroll: !1 // boolean

},
      me = t => j(t, Ds),
      vc = t => new de(t),
      De = $(`show.bs.${Q}`),
      Io = $(`shown.bs.${Q}`),
      is = $(`hide.bs.${Q}`),
      ko = $(`hidden.bs.${Q}`),
      bc = t => {
  const {
    element: e
  } = t,
        {
    clientHeight: s,
    scrollHeight: n
  } = ft(e);
  bo(e, s !== n);
},
      Tn = (t, e) => {
  const s = e ? L : B;
  t.triggers.forEach(n => s(n, N, $c));
},
      No = (t, e) => {
  const s = e ? L : B,
        n = w(t.element);
  s(n, Le, yc), s(n, N, Tc);
},
      yn = t => {
  const {
    element: e,
    options: s
  } = t;
  s.scroll || (bc(t), I(Ht(e), {
    overflow: "hidden"
  })), p(e, Xe), p(e, m), I(e, {
    visibility: "visible"
  }), x(e, () => Ec(t));
},
      wc = t => {
  const {
    element: e,
    options: s
  } = t,
        n = Bt(e);
  e.blur(), !n && s.backdrop && f(D, m) ? (Ve(), x(D, () => En(t))) : En(t);
},
      $c = t => {
  const e = M(t.target, Ns),
        s = e && Y(e),
        n = s && me(s);
  n && (n.relatedTarget = e, n.toggle(), e && e.tagName === "A" && t.preventDefault());
},
      Tc = t => {
  const {
    target: e
  } = t,
        s = P(Is, w(e)),
        n = P(uc, s),
        o = s && me(s);

  if (o) {
    const {
      options: i,
      triggers: c
    } = o,
          {
      backdrop: a
    } = i,
          r = M(e, Ns),
          l = w(s).getSelection();
    (!D.contains(e) || a !== "static") && (!(l && l.toString().length) && (!s.contains(e) && a && (
    /* istanbul ignore next */
    !r || c.includes(e)) || n && n.contains(e)) && (o.relatedTarget = n && n.contains(e) ? n : null, o.hide()), r && r.tagName === "A" && t.preventDefault());
  }
},
      yc = ({
  code: t,
  target: e
}) => {
  const s = P(Is, w(e)),
        n = s && me(s);
  n && n.options.keyboard && t === Hs && (n.relatedTarget = null, n.hide());
},
      Ec = t => {
  const {
    element: e
  } = t;
  v(e, Xe), Nt(e, Oe), O(e, Me, "true"), O(e, "role", "dialog"), b(e, Io), No(t, !0), ht(e);
},
      En = t => {
  const {
    element: e,
    triggers: s
  } = t;
  O(e, Oe, "true"), Nt(e, Me), Nt(e, "role"), I(e, {
    visibility: ""
  });
  const n = De.relatedTarget || s.find(So);
  n && ht(n), Ho(e), b(e, ko), v(e, Xe), Bt(e) || No(t);
};

class de extends nt {
  /**
   * @param target usually an `.offcanvas` element
   * @param config instance options
   */
  constructor(e, s) {
    super(e, s);
    const {
      element: n
    } = this;
    this.triggers = [...tt(Ns, w(n))].filter(o => Y(o) === n), this.relatedTarget = null, Tn(this, !0);
  }
  /**
   * Returns component name string.
   */


  get name() {
    return Ds;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return mc;
  } // OFFCANVAS PUBLIC METHODS
  // ========================

  /** Shows or hides the offcanvas from the user. */


  toggle() {
    f(this.element, m) ? this.hide() : this.show();
  }
  /** Shows the offcanvas to the user. */


  show() {
    const {
      element: e,
      options: s,
      relatedTarget: n
    } = this;
    let o = 0;

    if (!f(e, m) && (De.relatedTarget = n || void 0, Io.relatedTarget = n || void 0, b(e, De), !De.defaultPrevented)) {
      const i = Bt(e);

      if (i && i !== e) {
        const c = me(i) ||
        /* istanbul ignore next */
        j(i, Ps);
        c && c.hide();
      }

      s.backdrop ? (As(D) ? ks() : Eo(e, !0), o = Xt(D), Co(), setTimeout(() => yn(this), o)) : (yn(this), i && f(D, m) && Ve());
    }
  }
  /** Hides the offcanvas from the user. */


  hide() {
    const {
      element: e,
      relatedTarget: s
    } = this;
    f(e, m) && (is.relatedTarget = s || void 0, ko.relatedTarget = s || void 0, b(e, is), is.defaultPrevented || (p(e, Xe), v(e, m), wc(this)));
  }
  /** Removes the `Offcanvas` from the target element. */


  dispose() {
    const e = { ...this
    },
          {
      element: s,
      options: n
    } = e,
          o = n.backdrop ? Xt(D) :
    /* istanbul ignore next */
    0,
          i = () => setTimeout(() => super.dispose(), o + 17);

    Tn(e), this.hide(), f(s, m) ? x(s, i) : i();
  }

}

exports.Offcanvas = de;
h(de, "selector", gc), h(de, "init", vc), h(de, "getInstance", me);

const It = "popover",
      Ye = "Popover",
      lt = "tooltip",
      Oo = t => {
  const e = t === lt,
        s = e ? `${t}-inner` : `${t}-body`,
        n = e ? "" : `<h3 class="${t}-header"></h3>`,
        o = `<div class="${t}-arrow"></div>`,
        i = `<div class="${s}"></div>`;
  return `<div class="${t}" role="${lt}">${n + o + i}</div>`;
},
      Mo = {
  top: "top",
  bottom: "bottom",
  left: "start",
  right: "end"
},
      ws = t => {
  const e = /\b(top|bottom|start|end)+/,
        {
    element: s,
    tooltip: n,
    container: o,
    options: i,
    arrow: c
  } = t;

  if (n) {
    const a = { ...Mo
    },
          r = Ct(s);
    I(n, {
      // top: '0px', left: '0px', right: '', bottom: '',
      top: "",
      left: "",
      right: "",
      bottom: ""
    });
    const l = t.name === Ye,
          {
      offsetWidth: d,
      offsetHeight: g
    } = n,
          {
      clientWidth: C,
      clientHeight: W,
      offsetWidth: q
    } = ft(s);
    let {
      placement: T
    } = i;

    const {
      clientWidth: z,
      offsetWidth: U
    } = o,
          at = V(o, "position") === "fixed",
          H = Math.abs(at ? z - U : C - q),
          _ = r && at ?
    /* istanbul ignore next */
    H : 0,
          ot = C - (r ? 0 : H) - 1,
          {
      width: F,
      height: K,
      left: S,
      right: Wt,
      top: gt
    } = $e(s, !0),
          {
      x: k,
      y: ut
    } = {
      x: S,
      y: gt
    };

    I(c, {
      top: "",
      left: "",
      right: "",
      bottom: ""
    });
    let St = 0,
        Gt = "",
        mt = 0,
        Ue = "",
        Ft = "",
        Ee = "",
        Ze = "";
    const xt = c.offsetWidth || 0,
          vt = c.offsetHeight || 0,
          qe = xt / 2;

    let Qt = gt - g - vt < 0,
        Jt = gt + g + K + vt >= W,
        _t = S - d - xt < _,
        te = S + d + F + xt >= ot;

    const Ce = ["left", "right"],
          Ge = ["top", "bottom"];
    Qt = Ce.includes(T) ? gt + K / 2 - g / 2 - vt < 0 : Qt, Jt = Ce.includes(T) ? gt + g / 2 + K / 2 + vt >= W : Jt, _t = Ge.includes(T) ? S + F / 2 - d / 2 < _ : _t, te = Ge.includes(T) ? S + d / 2 + F / 2 >= ot : te, T = Ce.includes(T) && _t && te ? "top" : T, T = T === "top" && Qt ? "bottom" : T, T = T === "bottom" && Jt ? "top" : T, T = T === "left" && _t ? "right" : T, T = T === "right" && te ?
    /* istanbul ignore next */
    "left" : T, n.className.includes(T) || (n.className = n.className.replace(e, a[T])), Ce.includes(T) ? (T === "left" ? mt = k - d - (l ? xt : 0) : mt = k + F + (l ? xt : 0), Qt && Jt ? (St = 0, Gt = 0, Ft = gt + K / 2 - vt / 2) : Qt ? (St = ut, Gt = "", Ft = K / 2 - xt) : Jt ? (St = ut - g + K, Gt = "", Ft = g - K / 2 - xt) : (St = ut - g / 2 + K / 2, Ft = g / 2 - vt / 2)) : Ge.includes(T) && (T === "top" ? St = ut - g - (l ? vt : 0) : St = ut + K + (l ? vt : 0), _t ? (mt = 0, Ee = k + F / 2 - qe) : te ? (mt = "auto", Ue = 0, Ze = F / 2 + ot - Wt - qe) : (mt = k - d / 2 + F / 2, Ee = d / 2 - qe)), I(n, {
      top: `${St}px`,
      bottom: Gt === "" ? "" : `${Gt}px`,
      left: mt === "auto" ? mt : `${mt}px`,
      right: Ue !== "" ? `${Ue}px` : ""
    }), y(c) && (Ft !== "" && (c.style.top = `${Ft}px`), Ee !== "" ? c.style.left = `${Ee}px` : Ze !== "" && (c.style.right = `${Ze}px`));
    const qo = $(`updated.bs.${Yt(t.name)}`);
    b(s, qo);
  }
},
      $s = {
  template: Oo(lt),
  title: "",
  customClass: "",
  trigger: "hover focus",
  placement: "top",
  sanitizeFn: void 0,
  animation: !0,
  delay: 200,
  container: document.body,
  content: "",
  dismissible: !1,
  btnClose: ""
},
      Lo = "data-original-title",
      kt = "Tooltip",
      wt = (t, e, s) => {
  if (we(e) && e.length) {
    let n = e.trim();
    bi(s) && (n = s(n));
    const i = new DOMParser().parseFromString(n, "text/html");
    t.append(...i.body.childNodes);
  } else y(e) ? t.append(e) : (wi(e) || vi(e) && e.every(A)) && t.append(...e);
},
      Cc = t => {
  const e = t.name === kt,
        {
    id: s,
    element: n,
    options: o
  } = t,
        {
    title: i,
    placement: c,
    template: a,
    animation: r,
    customClass: l,
    sanitizeFn: d,
    dismissible: g,
    content: C,
    btnClose: W
  } = o,
        q = e ? lt : It,
        T = { ...Mo
  };
  let z = [],
      U = [];
  Ct(n) && (T.left = "end", T.right = "start");
  const Rt = `bs-${q}-${T[c]}`;
  let at;
  if (y(a)) at = a;else {
    const _ = Tt("div");

    wt(_, a, d), at = _.firstChild;
  }
  t.tooltip = y(at) ? at.cloneNode(!0) :
  /* istanbul ignore next */
  void 0;
  const {
    tooltip: H
  } = t;

  if (H) {
    O(H, "id", s), O(H, "role", lt);

    const _ = e ? `${lt}-inner` : `${It}-body`,
          ot = e ? null : P(`.${It}-header`, H),
          F = P(`.${_}`, H);

    t.arrow = P(`.${q}-arrow`, H);
    const {
      arrow: K
    } = t;
    if (y(i)) z = [i.cloneNode(!0)];else {
      const S = Tt("div");
      wt(S, i, d), z = [...S.childNodes];
    }
    if (y(C)) U = [C.cloneNode(!0)];else {
      const S = Tt("div");
      wt(S, C, d), U = [...S.childNodes];
    }
    if (g) if (i) {
      if (y(W)) z = [...z, W.cloneNode(!0)];else {
        const S = Tt("div");
        wt(S, W, d), z = [...z, S.firstChild];
      }
    } else if (ot && ot.remove(), y(W)) U = [...U, W.cloneNode(!0)];else {
      const S = Tt("div");
      wt(S, W, d), U = [...U, S.firstChild];
    }
    e ? i && F && wt(F, i, d) : (i && ot && wt(ot, z, d), C && F && wt(F, U, d), t.btn = P(".btn-close", H) || void 0), p(H, "position-fixed"), p(K, "position-absolute"), f(H, q) || p(H, q), r && !f(H, R) && p(H, R), l && !f(H, l) && p(H, l), f(H, Rt) || p(H, Rt);
  }
},
      Hc = t => {
  const e = ["HTML", "BODY"],
        s = [];
  let {
    parentNode: n
  } = t;

  for (; n && !e.includes(n.nodeName);) n = mi(n), Gn(n) || $i(n) || s.push(n);

  return s.find((o, i) => V(o, "position") !== "relative" && s.slice(i + 1).every(c => V(c, "position") === "static") ? o : null) ||
  /* istanbul ignore next: optional guard */
  w(t).body;
},
      Sc = `[${ct}="${lt}"],[data-tip="${lt}"]`,
      Bo = "title";

let Cn = t => j(t, kt);

const xc = t => new Pt(t),
      Pc = t => {
  const {
    element: e,
    tooltip: s,
    container: n,
    offsetParent: o
  } = t;
  Nt(e, Xn), $o(s, n === o ? n : o);
},
      ee = t => {
  const {
    tooltip: e,
    container: s,
    offsetParent: n
  } = t;
  return e && As(e, s === n ? s : n);
},
      Dc = (t, e) => {
  const {
    element: s
  } = t;
  ne(t), Ne(s, Lo) && t.name === kt && Wo(t), e && e();
},
      Ro = (t, e) => {
  const s = e ? L : B,
        {
    element: n
  } = t;
  s(w(n), Cs, t.handleTouch, st), [We, Re].forEach(o => {
    s(qt(n), o, t.update, st);
  });
},
      Hn = t => {
  const {
    element: e
  } = t,
        s = $(`shown.bs.${Yt(t.name)}`);
  Ro(t, !0), b(e, s), u.clear(e, "in");
},
      Sn = t => {
  const {
    element: e
  } = t,
        s = $(`hidden.bs.${Yt(t.name)}`);
  Ro(t), Pc(t), b(e, s), u.clear(e, "out");
},
      ne = (t, e) => {
  const s = e ? L : B,
        {
    element: n,
    options: o,
    btn: i
  } = t,
        {
    trigger: c
  } = o,
        r = !!(t.name !== kt && o.dismissible);
  c.includes("manual") || (t.enabled = !!e, c.split(" ").forEach(d => {
    d === ti ? (s(n, Un, t.handleShow), s(n, Be, t.handleShow), r || (s(n, Es, t.handleHide), s(w(n), Cs, t.handleTouch, st))) : d === N ? s(n, d, r ? t.handleShow : t.toggle) : d === Ts && (s(n, ys, t.handleShow), r || s(n, Yn, t.handleHide), li && s(n, N, t.handleFocus)), r && i && s(i, N, t.handleHide);
  }));
},
      xn = (t, e) => {
  const s = e ? L : B,
        {
    element: n,
    container: o,
    offsetParent: i
  } = t,
        {
    offsetHeight: c,
    scrollHeight: a
  } = o,
        r = M(n, `.${Z}`),
        l = M(n, `.${Q}`),
        d = qt(n),
        C = o === i && c !== a ? o : d;
  s(C, Re, t.update, st), s(C, We, t.update, st), r && s(r, `hide.bs.${Z}`, t.handleHide), l && s(l, `hide.bs.${Q}`, t.handleHide);
},
      Wo = (t, e) => {
  const s = [Lo, Bo],
        {
    element: n
  } = t;
  O(n, s[e ? 0 : 1], e || it(n, s[0]) ||
  /* istanbul ignore next */
  ""), Nt(n, s[e ? 1 : 0]);
};

class Pt extends nt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(s, n) {
    super(s, n); // TOOLTIP PUBLIC METHODS
    // ======================

    /** Handles the focus event on iOS. */

    h(this, "handleFocus", () => ht(this.element));
    /** Shows the tooltip. */

    h(this, "handleShow", () => this.show());
    /** Hides the tooltip. */

    h(this, "handleHide", () => this.hide());
    /** Updates the tooltip position. */

    h(this, "update", () => {
      ws(this);
    });
    /** Toggles the tooltip visibility. */

    h(this, "toggle", () => {
      const {
        tooltip: s
      } = this;
      s && !ee(this) ? this.show() : this.hide();
    });
    /**
     * Handles the `touchstart` event listener for `Tooltip`
     *
     * @this {Tooltip}
     * @param {TouchEvent} e the `Event` object
     */

    h(this, "handleTouch", ({
      target: s
    }) => {
      const {
        tooltip: n,
        element: o
      } = this;
      n && n.contains(s) || s === o || s && o.contains(s) || this.hide();
    });
    const {
      element: o
    } = this,
          i = this.name === kt,
          c = i ? lt : It,
          a = i ? kt : Ye;
    Cn = l => j(l, a), this.enabled = !0, this.id = `${c}-${Qn(o, c)}`;
    const {
      options: r
    } = this;
    !r.title && i || !i && !r.content || (dt($s, {
      titleAttr: ""
    }), Ne(o, Bo) && i && typeof r.title == "string" && Wo(this, r.title), this.container = Hc(o), this.offsetParent = ["sticky", "fixed"].some(l => V(this.container, "position") === l) ? this.container : w(this.element).body, Cc(this), ne(this, !0));
  }
  /**
   * Returns component name string.
   */


  get name() {
    return kt;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return $s;
  }

  show() {
    const {
      options: s,
      tooltip: n,
      element: o,
      container: i,
      offsetParent: c,
      id: a
    } = this,
          {
      animation: r
    } = s,
          l = u.get(o, "out"),
          d = i === c ? i : c;
    u.clear(o, "out"), n && !l && !ee(this) && u.set(o, () => {
      const g = $(`show.bs.${Yt(this.name)}`);
      b(o, g), g.defaultPrevented || (wo(n, d), O(o, Xn, `#${a}`), this.update(), xn(this, !0), f(n, m) || p(n, m), r ? x(n, () => Hn(this)) : Hn(this));
    }, 17, "in");
  }

  hide() {
    const {
      options: s,
      tooltip: n,
      element: o
    } = this,
          {
      animation: i,
      delay: c
    } = s;
    u.clear(o, "in"), n && ee(this) && u.set(o, () => {
      const a = $(`hide.bs.${Yt(this.name)}`);
      b(o, a), a.defaultPrevented || (this.update(), v(n, m), xn(this), i ? x(n, () => Sn(this)) : Sn(this));
    }, c + 17, "out");
  }
  /** Enables the tooltip. */


  enable() {
    const {
      enabled: s
    } = this;
    s || (ne(this, !0), this.enabled = !s);
  }
  /** Disables the tooltip. */


  disable() {
    const {
      tooltip: s,
      options: n,
      enabled: o
    } = this,
          {
      animation: i
    } = n;
    o && (s && ee(this) && i ? (this.hide(), x(s, () => ne(this))) : ne(this), this.enabled = !o);
  }
  /** Toggles the `disabled` property. */


  toggleEnabled() {
    this.enabled ? this.disable() : this.enable();
  }
  /** Removes the `Tooltip` from the target element. */


  dispose() {
    const {
      tooltip: s,
      options: n
    } = this,
          o = { ...this,
      name: this.name
    },
          i = () => setTimeout(() => Dc(o, () => super.dispose()), 17);

    n.animation && ee(o) ? (this.options.delay = 0, this.hide(), x(s, i)) : i();
  }

}

exports.Tooltip = Pt;
h(Pt, "selector", Sc), h(Pt, "init", xc), h(Pt, "getInstance", Cn), h(Pt, "styleTip", ws);

const Ac = `[${ct}="${It}"],[data-tip="${It}"]`,
      Ic = dt({}, $s, {
  template: Oo(It),
  content: "",
  dismissible: !1,
  btnClose: '<button class="btn-close" aria-label="Close"></button>'
}),
      kc = t => j(t, Ye),
      Nc = t => new Kt(t);

class Kt extends Pt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(s, n) {
    super(s, n);
    /* extend original `show()` */

    h(this, "show", () => {
      super.show();
      const {
        options: s,
        btn: n
      } = this;
      s.dismissible && n && setTimeout(() => ht(n), 17);
    });
  }
  /**
   * Returns component name string.
   */


  get name() {
    return Ye;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return Ic;
  }

}

exports.Popover = Kt;
h(Kt, "selector", Ac), h(Kt, "init", Nc), h(Kt, "getInstance", kc), h(Kt, "styleTip", ws);

const Oc = "scrollspy",
      Fo = "ScrollSpy",
      Mc = '[data-bs-spy="scroll"]',
      Lc = {
  offset: 10,
  target: null
},
      Bc = t => j(t, Fo),
      Rc = t => new he(t),
      Pn = $(`activate.bs.${Oc}`),
      Wc = t => {
  const {
    target: e,
    scrollTarget: s,
    options: n,
    itemsLength: o,
    scrollHeight: i,
    element: c
  } = t,
        {
    offset: a
  } = n,
        r = Ss(s),
        l = e && xs("A", e),
        d = s ? jo(s) :
  /* istanbul ignore next */
  i;

  if (t.scrollTop = r ? s.scrollY : s.scrollTop, l && (d !== i || o !== l.length)) {
    let g, C, W;
    t.items = [], t.offsets = [], t.scrollHeight = d, t.maxScroll = t.scrollHeight - Fc(t), [...l].forEach(q => {
      g = it(q, "href"), C = g && g.charAt(0) === "#" && g.slice(-1) !== "#" && P(g, w(c)), C && (t.items.push(q), W = $e(C), t.offsets.push((r ? W.top + t.scrollTop : C.offsetTop) - a));
    }), t.itemsLength = t.items.length;
  }
},
      jo = t => y(t) ? t.scrollHeight : ft(t).scrollHeight,
      Fc = ({
  element: t,
  scrollTarget: e
}) => Ss(e) ? e.innerHeight : $e(t).height,
      zo = t => {
  [...xs("A", t)].forEach(e => {
    f(e, E) && v(e, E);
  });
},
      Dn = (t, e) => {
  const {
    target: s,
    element: n
  } = t;
  y(s) && zo(s), t.activeItem = e, p(e, E);
  const o = [];
  let i = e;

  for (; i !== Ht(n);) i = i.parentElement, (f(i, "nav") || f(i, "dropdown-menu")) && o.push(i);

  o.forEach(c => {
    const a = c.previousElementSibling;
    a && !f(a, E) && p(a, E);
  }), Pn.relatedTarget = e, b(n, Pn);
},
      An = (t, e) => {
  (e ? L : B)(t.scrollTarget, We, t.refresh, st);
};

class he extends nt {
  /**
   * @param target the target element
   * @param config the instance options
   */
  constructor(s, n) {
    super(s, n);
    /* eslint-enable */
    // SCROLLSPY PUBLIC METHODS
    // ========================

    /** Updates all items. */

    h(this, "refresh", () => {
      const {
        target: s
      } = this;

      if (y(s) && s.offsetHeight > 0) {
        Wc(this);
        const {
          scrollTop: n,
          maxScroll: o,
          itemsLength: i,
          items: c,
          activeItem: a
        } = this;

        if (n >= o) {
          const l = c[i - 1];
          a !== l && Dn(this, l);
          return;
        }

        const {
          offsets: r
        } = this;

        if (a && n < r[0] && r[0] > 0) {
          this.activeItem = null, s && zo(s);
          return;
        }

        c.forEach((l, d) => {
          a !== l && n >= r[d] && (typeof r[d + 1] > "u" || n < r[d + 1]) && Dn(this, l);
        });
      }
    });
    const {
      element: o,
      options: i
    } = this;
    this.target = P(i.target, w(o)), this.target && (this.scrollTarget = o.clientHeight < o.scrollHeight ? o : qt(o), this.scrollHeight = jo(this.scrollTarget), An(this, !0), this.refresh());
  }
  /* eslint-disable */

  /**
   * Returns component name string.
   */


  get name() {
    return Fo;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return Lc;
  }
  /** Removes `ScrollSpy` from the target element. */


  dispose() {
    An(this), super.dispose();
  }

}

exports.ScrollSpy = he;
h(he, "selector", Mc), h(he, "init", Rc), h(he, "getInstance", Bc);

const ye = "tab",
      Ko = "Tab",
      In = `[${ct}="${ye}"]`,
      Vo = t => j(t, Ko),
      jc = t => new fe(t),
      cs = $(`show.bs.${ye}`),
      kn = $(`shown.bs.${ye}`),
      as = $(`hide.bs.${ye}`),
      Nn = $(`hidden.bs.${ye}`),
      ve =
/* @__PURE__ */
new Map(),
      On = t => {
  const {
    tabContent: e,
    nav: s
  } = t;
  e && f(e, Ot) && (e.style.height = "", v(e, Ot)), s && u.clear(s);
},
      Mn = t => {
  const {
    element: e,
    tabContent: s,
    content: n,
    nav: o
  } = t,
        {
    tab: i
  } = y(o) && ve.get(o) ||
  /* istanbul ignore next */
  {
    tab: null
  };

  if (s && n && f(n, R)) {
    const {
      currentHeight: c,
      nextHeight: a
    } = ve.get(e) ||
    /* istanbul ignore next */
    {
      currentHeight: 0,
      nextHeight: 0
    };
    c === a ? On(t) : setTimeout(() => {
      s.style.height = `${a}px`, Lt(s), x(s, () => On(t));
    }, 50);
  } else o && u.clear(o);

  kn.relatedTarget = i, b(e, kn);
},
      Ln = t => {
  const {
    element: e,
    content: s,
    tabContent: n,
    nav: o
  } = t,
        {
    tab: i,
    content: c
  } = o && ve.get(o) ||
  /* istanbul ignore next */
  {
    tab: null,
    content: null
  };
  let a = 0;

  if (n && s && f(s, R) && ([c, s].forEach(r => {
    y(r) && p(r, "overflow-hidden");
  }), a = y(c) ? c.scrollHeight :
  /* istanbul ignore next */
  0), cs.relatedTarget = i, Nn.relatedTarget = e, b(e, cs), !cs.defaultPrevented) {
    if (s && p(s, E), c && v(c, E), n && s && f(s, R)) {
      const r = s.scrollHeight;
      ve.set(e, {
        currentHeight: a,
        nextHeight: r,
        tab: null,
        content: null
      }), p(n, Ot), n.style.height = `${a}px`, Lt(n), [c, s].forEach(l => {
        l && v(l, "overflow-hidden");
      });
    }

    s && s && f(s, R) ? setTimeout(() => {
      p(s, m), x(s, () => {
        Mn(t);
      });
    }, 1) : (s && p(s, m), Mn(t)), i && b(i, Nn);
  }
},
      Bn = t => {
  const {
    nav: e
  } = t;
  if (!y(e)) return {
    tab: null,
    content: null
  };
  const s = rt(E, e);
  let n = null;
  s.length === 1 && !Mt.some(i => f(s[0].parentElement, i)) ? [n] = s : s.length > 1 && (n = s[s.length - 1]);
  const o = y(n) ? Y(n) : null;
  return {
    tab: n,
    content: o
  };
},
      Rn = t => {
  if (!y(t)) return null;
  const e = M(t, `.${Mt.join(",.")}`);
  return e ? P(`.${Mt[0]}-toggle`, e) : null;
},
      Wn = (t, e) => {
  (e ? L : B)(t.element, N, zc);
},
      zc = t => {
  const e = Vo(t.target);
  e && (t.preventDefault(), e.show());
};

class fe extends nt {
  /** @param target the target element */
  constructor(e) {
    super(e);
    const {
      element: s
    } = this,
          n = Y(s);

    if (n) {
      const o = M(s, ".nav"),
            i = M(n, ".tab-content");
      this.nav = o, this.content = n, this.tabContent = i, this.dropdown = Rn(s);
      const {
        tab: c
      } = Bn(this);

      if (o && !c) {
        const a = P(In, o),
              r = a && Y(a);
        r && (p(a, E), p(r, m), p(r, E), O(s, Qe, "true"));
      }

      Wn(this, !0);
    }
  }
  /**
   * Returns component name string.
   */


  get name() {
    return Ko;
  } // TAB PUBLIC METHODS
  // ==================

  /** Shows the tab to the user. */


  show() {
    const {
      element: e,
      content: s,
      nav: n,
      dropdown: o
    } = this;

    if (!(n && u.get(n)) && !f(e, E)) {
      const {
        tab: i,
        content: c
      } = Bn(this);

      if (n && ve.set(n, {
        tab: i,
        content: c,
        currentHeight: 0,
        nextHeight: 0
      }), as.relatedTarget = e, y(i) && (b(i, as), !as.defaultPrevented)) {
        p(e, E), O(e, Qe, "true");
        const a = y(i) && Rn(i);

        if (a && f(a, E) && v(a, E), n) {
          const r = () => {
            i && (v(i, E), O(i, Qe, "false")), o && !f(o, E) && p(o, E);
          };

          c && (f(c, R) || s && f(s, R)) ? u.set(n, r, 1) : r();
        }

        c && (v(c, m), f(c, R) ? x(c, () => Ln(this)) : Ln(this));
      }
    }
  }
  /** Removes the `Tab` component from the target element. */


  dispose() {
    Wn(this), super.dispose();
  }

}

exports.Tab = fe;
h(fe, "selector", In), h(fe, "init", jc), h(fe, "getInstance", Vo);

const J = "toast",
      Xo = "Toast",
      Kc = `.${J}`,
      Vc = `[${je}="${J}"]`,
      Yo = `[${ct}="${J}"]`,
      Zt = "showing",
      Uo = "hide",
      Xc = {
  animation: !0,
  autohide: !0,
  delay: 5e3
},
      Os = t => j(t, Xo),
      Yc = t => new pe(t),
      Fn = $(`show.bs.${J}`),
      Uc = $(`shown.bs.${J}`),
      jn = $(`hide.bs.${J}`),
      Zc = $(`hidden.bs.${J}`),
      zn = t => {
  const {
    element: e,
    options: s
  } = t;
  v(e, Zt), u.clear(e, Zt), b(e, Uc), s.autohide && u.set(e, () => t.hide(), s.delay, J);
},
      Kn = t => {
  const {
    element: e
  } = t;
  v(e, Zt), v(e, m), p(e, Uo), u.clear(e, J), b(e, Zc);
},
      qc = t => {
  const {
    element: e,
    options: s
  } = t;
  p(e, Zt), s.animation ? (Lt(e), x(e, () => Kn(t))) : Kn(t);
},
      Gc = t => {
  const {
    element: e,
    options: s
  } = t;
  u.set(e, () => {
    v(e, Uo), Lt(e), p(e, m), p(e, Zt), s.animation ? x(e, () => zn(t)) : zn(t);
  }, 17, Zt);
},
      Zo = (t, e) => {
  const s = e ? L : B,
        {
    element: n,
    triggers: o,
    dismiss: i,
    options: c,
    hide: a
  } = t;
  i && s(i, N, a), c.autohide && [ys, Yn, Be, Es].forEach(r => s(n, r, _c)), o.length && o.forEach(r => s(r, N, Jc));
},
      Qc = t => {
  u.clear(t.element, J), Zo(t);
},
      Jc = t => {
  const {
    target: e
  } = t,
        s = e && M(e, Yo),
        n = s && Y(s),
        o = n && Os(n);
  o && (s && s.tagName === "A" && t.preventDefault(), o.relatedTarget = s, o.show());
},
      _c = t => {
  const e = t.target,
        s = Os(e),
        {
    type: n,
    relatedTarget: o
  } = t;
  s && e !== o && !e.contains(o) && ([Be, ys].includes(n) ? u.clear(e, J) : u.set(e, () => s.hide(), s.options.delay, J));
};

class pe extends nt {
  /**
   * @param target the target `.toast` element
   * @param config the instance options
   */
  constructor(s, n) {
    super(s, n); // TOAST PUBLIC METHODS
    // ====================

    /** Shows the toast. */

    h(this, "show", () => {
      const {
        element: s,
        isShown: n
      } = this;
      s && !n && (b(s, Fn), Fn.defaultPrevented || Gc(this));
    });
    /** Hides the toast. */

    h(this, "hide", () => {
      const {
        element: s,
        isShown: n
      } = this;
      s && n && (b(s, jn), jn.defaultPrevented || qc(this));
    });
    const {
      element: o,
      options: i
    } = this;
    i.animation && !f(o, R) ? p(o, R) : !i.animation && f(o, R) && v(o, R), this.dismiss = P(Vc, o), this.triggers = [...tt(Yo, w(o))].filter(c => Y(c) === o), Zo(this, !0);
  }
  /**
   * Returns component name string.
   */


  get name() {
    return Xo;
  }
  /**
   * Returns component default options.
   */


  get defaults() {
    return Xc;
  }
  /**
   * Returns *true* when toast is visible.
   */


  get isShown() {
    return f(this.element, m);
  }
  /** Removes the `Toast` component from the target element. */


  dispose() {
    const {
      element: s,
      isShown: n
    } = this;
    n && v(s, m), Qc(this), super.dispose();
  }

}

exports.Toast = pe;
h(pe, "selector", Kc), h(pe, "init", Yc), h(pe, "getInstance", Os);
const Ms =
/* @__PURE__ */
new Map();
[oe, ie, ce, ae, re, le, de, Kt, he, fe, pe, Pt].forEach(t => Ms.set(t.prototype.name, t));

const ta = (t, e) => {
  [...e].forEach(s => t(s));
},
      ea = (t, e) => {
  const s = Dt.getAllFor(t);
  s && [...s].forEach(([n, o]) => {
    e.contains(n) && o.dispose();
  });
},
      Vn = t => {
  const e = t && t.nodeName ? t : document,
        s = [...xs("*", e)];
  Ms.forEach(n => {
    const {
      init: o,
      selector: i
    } = n;
    ta(o, s.filter(c => _n(c, i)));
  });
},
      na = t => {
  const e = t && t.nodeName ? t : document;
  Ms.forEach(s => {
    ea(s.prototype.name, e);
  });
};

exports.removeDataAPI = na;
exports.initCallback = Vn;
document.body ? Vn() : L(document, "DOMContentLoaded", () => Vn(), {
  once: !0
});
},{}],"localstorage.js":[function(require,module,exports) {
"use strict";

var _lodash = _interopRequireDefault(require("lodash.throttle"));

var _player = _interopRequireDefault(require("@vimeo/player"));

var _bootstrap = _interopRequireDefault(require("bootstrap.native"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const formEl = document.querySelector(".feedback-form");
// const textEl = document.querySelector(".feedback-form textarea");
// const formData = {
//   email: "",
//   message: "",
// };
// populateMsg();
// formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const email = e.target.email.value;
//   const message = e.target.message.value;
//   const userObj = {
//     email,
//     message,
//   };
//   console.log(userObj);
//   const strUser = JSON.stringify(userObj);
//   localStorage.setItem("user-data", strUser);
//   e.currentTarget.reset();
//   localStorage.removeItem("user-data");
// });
// formEl.addEventListener("input", throttle(onIputChange, 500));
// function onIputChange(e) {
//      formData[e.target.name] = e.target.value;
//      const strUser = JSON.stringify(formData);
//      localStorage.setItem("user-data", strUser);
// }
// function populateMsg() {
//   const savedMsg = localStorage.getItem("user-data");
//   if (savedMsg) {
//     const parsedObj = JSON.parse(savedMsg);
//     console.log(parsedObj);
//     formEl.email.value = parsedObj.email;
//     formEl.message.value = parsedObj.message;
//   }
// }
var iframe = document.querySelector("iframe");
var player = new _player.default(iframe);
player.on("timeupdate", (0, _lodash.default)(onTimeUpdate, 1000));

function onTimeUpdate(data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
},{"lodash.throttle":"node_modules/lodash.throttle/index.js","@vimeo/player":"node_modules/@vimeo/player/dist/player.es.js","bootstrap.native":"node_modules/bootstrap.native/dist/bootstrap-native.mjs"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57304" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","localstorage.js"], null)
//# sourceMappingURL=/localstorage.9d96130d.js.map