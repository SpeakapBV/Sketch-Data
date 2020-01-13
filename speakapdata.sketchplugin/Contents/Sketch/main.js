var globalThis = this;
var global = this;
function __skpm_run (key, context) {
  globalThis.context = context;
  try {

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/assert/assert.js":
/*!***************************************!*\
  !*** ./node_modules/assert/assert.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

// compare and isBuffer taken from https://github.com/feross/buffer/blob/680e9e5e488f22aac27599a57dc844a6315928dd/index.js
// original notice:

/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
function compare(a, b) {
  if (a === b) {
    return 0;
  }

  var x = a.length;
  var y = b.length;

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i];
      y = b[i];
      break;
    }
  }

  if (x < y) {
    return -1;
  }
  if (y < x) {
    return 1;
  }
  return 0;
}
function isBuffer(b) {
  if (global.Buffer && typeof global.Buffer.isBuffer === 'function') {
    return global.Buffer.isBuffer(b);
  }
  return !!(b != null && b._isBuffer);
}

// based on node assert, original notice:
// NB: The URL to the CommonJS spec is kept just for tradition.
//     node-assert has evolved a lot since then, both in API and behavior.

// http://wiki.commonjs.org/wiki/Unit_Testing/1.0
//
// THIS IS NOT TESTED NOR LIKELY TO WORK OUTSIDE V8!
//
// Originally from narwhal.js (http://narwhaljs.org)
// Copyright (c) 2009 Thomas Robinson <280north.com>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the 'Software'), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
// ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
// WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

var util = __webpack_require__(/*! util/ */ "./node_modules/assert/node_modules/util/util.js");
var hasOwn = Object.prototype.hasOwnProperty;
var pSlice = Array.prototype.slice;
var functionsHaveNames = (function () {
  return function foo() {}.name === 'foo';
}());
function pToString (obj) {
  return Object.prototype.toString.call(obj);
}
function isView(arrbuf) {
  if (isBuffer(arrbuf)) {
    return false;
  }
  if (typeof global.ArrayBuffer !== 'function') {
    return false;
  }
  if (typeof ArrayBuffer.isView === 'function') {
    return ArrayBuffer.isView(arrbuf);
  }
  if (!arrbuf) {
    return false;
  }
  if (arrbuf instanceof DataView) {
    return true;
  }
  if (arrbuf.buffer && arrbuf.buffer instanceof ArrayBuffer) {
    return true;
  }
  return false;
}
// 1. The assert module provides functions that throw
// AssertionError's when particular conditions are not met. The
// assert module must conform to the following interface.

var assert = module.exports = ok;

// 2. The AssertionError is defined in assert.
// new assert.AssertionError({ message: message,
//                             actual: actual,
//                             expected: expected })

var regex = /\s*function\s+([^\(\s]*)\s*/;
// based on https://github.com/ljharb/function.prototype.name/blob/adeeeec8bfcc6068b187d7d9fb3d5bb1d3a30899/implementation.js
function getName(func) {
  if (!util.isFunction(func)) {
    return;
  }
  if (functionsHaveNames) {
    return func.name;
  }
  var str = func.toString();
  var match = str.match(regex);
  return match && match[1];
}
assert.AssertionError = function AssertionError(options) {
  this.name = 'AssertionError';
  this.actual = options.actual;
  this.expected = options.expected;
  this.operator = options.operator;
  if (options.message) {
    this.message = options.message;
    this.generatedMessage = false;
  } else {
    this.message = getMessage(this);
    this.generatedMessage = true;
  }
  var stackStartFunction = options.stackStartFunction || fail;
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, stackStartFunction);
  } else {
    // non v8 browsers so we can have a stacktrace
    var err = new Error();
    if (err.stack) {
      var out = err.stack;

      // try to strip useless frames
      var fn_name = getName(stackStartFunction);
      var idx = out.indexOf('\n' + fn_name);
      if (idx >= 0) {
        // once we have located the function frame
        // we need to strip out everything before it (and its line)
        var next_line = out.indexOf('\n', idx + 1);
        out = out.substring(next_line + 1);
      }

      this.stack = out;
    }
  }
};

// assert.AssertionError instanceof Error
util.inherits(assert.AssertionError, Error);

function truncate(s, n) {
  if (typeof s === 'string') {
    return s.length < n ? s : s.slice(0, n);
  } else {
    return s;
  }
}
function inspect(something) {
  if (functionsHaveNames || !util.isFunction(something)) {
    return util.inspect(something);
  }
  var rawname = getName(something);
  var name = rawname ? ': ' + rawname : '';
  return '[Function' +  name + ']';
}
function getMessage(self) {
  return truncate(inspect(self.actual), 128) + ' ' +
         self.operator + ' ' +
         truncate(inspect(self.expected), 128);
}

// At present only the three keys mentioned above are used and
// understood by the spec. Implementations or sub modules can pass
// other keys to the AssertionError's constructor - they will be
// ignored.

// 3. All of the following functions must throw an AssertionError
// when a corresponding condition is not met, with a message that
// may be undefined if not provided.  All assertion methods provide
// both the actual and expected values to the assertion error for
// display purposes.

function fail(actual, expected, message, operator, stackStartFunction) {
  throw new assert.AssertionError({
    message: message,
    actual: actual,
    expected: expected,
    operator: operator,
    stackStartFunction: stackStartFunction
  });
}

// EXTENSION! allows for well behaved errors defined elsewhere.
assert.fail = fail;

// 4. Pure assertion tests whether a value is truthy, as determined
// by !!guard.
// assert.ok(guard, message_opt);
// This statement is equivalent to assert.equal(true, !!guard,
// message_opt);. To test strictly for the value true, use
// assert.strictEqual(true, guard, message_opt);.

function ok(value, message) {
  if (!value) fail(value, true, message, '==', assert.ok);
}
assert.ok = ok;

// 5. The equality assertion tests shallow, coercive equality with
// ==.
// assert.equal(actual, expected, message_opt);

assert.equal = function equal(actual, expected, message) {
  if (actual != expected) fail(actual, expected, message, '==', assert.equal);
};

// 6. The non-equality assertion tests for whether two objects are not equal
// with != assert.notEqual(actual, expected, message_opt);

assert.notEqual = function notEqual(actual, expected, message) {
  if (actual == expected) {
    fail(actual, expected, message, '!=', assert.notEqual);
  }
};

// 7. The equivalence assertion tests a deep equality relation.
// assert.deepEqual(actual, expected, message_opt);

assert.deepEqual = function deepEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'deepEqual', assert.deepEqual);
  }
};

assert.deepStrictEqual = function deepStrictEqual(actual, expected, message) {
  if (!_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'deepStrictEqual', assert.deepStrictEqual);
  }
};

function _deepEqual(actual, expected, strict, memos) {
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (isBuffer(actual) && isBuffer(expected)) {
    return compare(actual, expected) === 0;

  // 7.2. If the expected value is a Date object, the actual value is
  // equivalent if it is also a Date object that refers to the same time.
  } else if (util.isDate(actual) && util.isDate(expected)) {
    return actual.getTime() === expected.getTime();

  // 7.3 If the expected value is a RegExp object, the actual value is
  // equivalent if it is also a RegExp object with the same source and
  // properties (`global`, `multiline`, `lastIndex`, `ignoreCase`).
  } else if (util.isRegExp(actual) && util.isRegExp(expected)) {
    return actual.source === expected.source &&
           actual.global === expected.global &&
           actual.multiline === expected.multiline &&
           actual.lastIndex === expected.lastIndex &&
           actual.ignoreCase === expected.ignoreCase;

  // 7.4. Other pairs that do not both pass typeof value == 'object',
  // equivalence is determined by ==.
  } else if ((actual === null || typeof actual !== 'object') &&
             (expected === null || typeof expected !== 'object')) {
    return strict ? actual === expected : actual == expected;

  // If both values are instances of typed arrays, wrap their underlying
  // ArrayBuffers in a Buffer each to increase performance
  // This optimization requires the arrays to have the same type as checked by
  // Object.prototype.toString (aka pToString). Never perform binary
  // comparisons for Float*Arrays, though, since e.g. +0 === -0 but their
  // bit patterns are not identical.
  } else if (isView(actual) && isView(expected) &&
             pToString(actual) === pToString(expected) &&
             !(actual instanceof Float32Array ||
               actual instanceof Float64Array)) {
    return compare(new Uint8Array(actual.buffer),
                   new Uint8Array(expected.buffer)) === 0;

  // 7.5 For all other Object pairs, including Array objects, equivalence is
  // determined by having the same number of owned properties (as verified
  // with Object.prototype.hasOwnProperty.call), the same set of keys
  // (although not necessarily the same order), equivalent values for every
  // corresponding key, and an identical 'prototype' property. Note: this
  // accounts for both named and indexed properties on Arrays.
  } else if (isBuffer(actual) !== isBuffer(expected)) {
    return false;
  } else {
    memos = memos || {actual: [], expected: []};

    var actualIndex = memos.actual.indexOf(actual);
    if (actualIndex !== -1) {
      if (actualIndex === memos.expected.indexOf(expected)) {
        return true;
      }
    }

    memos.actual.push(actual);
    memos.expected.push(expected);

    return objEquiv(actual, expected, strict, memos);
  }
}

function isArguments(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
}

function objEquiv(a, b, strict, actualVisitedObjects) {
  if (a === null || a === undefined || b === null || b === undefined)
    return false;
  // if one is a primitive, the other must be same
  if (util.isPrimitive(a) || util.isPrimitive(b))
    return a === b;
  if (strict && Object.getPrototypeOf(a) !== Object.getPrototypeOf(b))
    return false;
  var aIsArgs = isArguments(a);
  var bIsArgs = isArguments(b);
  if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs))
    return false;
  if (aIsArgs) {
    a = pSlice.call(a);
    b = pSlice.call(b);
    return _deepEqual(a, b, strict);
  }
  var ka = objectKeys(a);
  var kb = objectKeys(b);
  var key, i;
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length !== kb.length)
    return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] !== kb[i])
      return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!_deepEqual(a[key], b[key], strict, actualVisitedObjects))
      return false;
  }
  return true;
}

// 8. The non-equivalence assertion tests for any deep inequality.
// assert.notDeepEqual(actual, expected, message_opt);

assert.notDeepEqual = function notDeepEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, false)) {
    fail(actual, expected, message, 'notDeepEqual', assert.notDeepEqual);
  }
};

assert.notDeepStrictEqual = notDeepStrictEqual;
function notDeepStrictEqual(actual, expected, message) {
  if (_deepEqual(actual, expected, true)) {
    fail(actual, expected, message, 'notDeepStrictEqual', notDeepStrictEqual);
  }
}


// 9. The strict equality assertion tests strict equality, as determined by ===.
// assert.strictEqual(actual, expected, message_opt);

assert.strictEqual = function strictEqual(actual, expected, message) {
  if (actual !== expected) {
    fail(actual, expected, message, '===', assert.strictEqual);
  }
};

// 10. The strict non-equality assertion tests for strict inequality, as
// determined by !==.  assert.notStrictEqual(actual, expected, message_opt);

assert.notStrictEqual = function notStrictEqual(actual, expected, message) {
  if (actual === expected) {
    fail(actual, expected, message, '!==', assert.notStrictEqual);
  }
};

function expectedException(actual, expected) {
  if (!actual || !expected) {
    return false;
  }

  if (Object.prototype.toString.call(expected) == '[object RegExp]') {
    return expected.test(actual);
  }

  try {
    if (actual instanceof expected) {
      return true;
    }
  } catch (e) {
    // Ignore.  The instanceof check doesn't work for arrow functions.
  }

  if (Error.isPrototypeOf(expected)) {
    return false;
  }

  return expected.call({}, actual) === true;
}

function _tryBlock(block) {
  var error;
  try {
    block();
  } catch (e) {
    error = e;
  }
  return error;
}

function _throws(shouldThrow, block, expected, message) {
  var actual;

  if (typeof block !== 'function') {
    throw new TypeError('"block" argument must be a function');
  }

  if (typeof expected === 'string') {
    message = expected;
    expected = null;
  }

  actual = _tryBlock(block);

  message = (expected && expected.name ? ' (' + expected.name + ').' : '.') +
            (message ? ' ' + message : '.');

  if (shouldThrow && !actual) {
    fail(actual, expected, 'Missing expected exception' + message);
  }

  var userProvidedMessage = typeof message === 'string';
  var isUnwantedException = !shouldThrow && util.isError(actual);
  var isUnexpectedException = !shouldThrow && actual && !expected;

  if ((isUnwantedException &&
      userProvidedMessage &&
      expectedException(actual, expected)) ||
      isUnexpectedException) {
    fail(actual, expected, 'Got unwanted exception' + message);
  }

  if ((shouldThrow && actual && expected &&
      !expectedException(actual, expected)) || (!shouldThrow && actual)) {
    throw actual;
  }
}

// 11. Expected to throw an error:
// assert.throws(block, Error_opt, message_opt);

assert.throws = function(block, /*optional*/error, /*optional*/message) {
  _throws(true, block, error, message);
};

// EXTENSION! This is annoying to write outside this module.
assert.doesNotThrow = function(block, /*optional*/error, /*optional*/message) {
  _throws(false, block, error, message);
};

assert.ifError = function(err) { if (err) throw err; };

// Expose a strict only variant of assert
function strict(value, message) {
  if (!value) fail(value, true, message, '==', strict);
}
assert.strict = objectAssign(strict, assert, {
  equal: assert.strictEqual,
  deepEqual: assert.deepStrictEqual,
  notEqual: assert.notStrictEqual,
  notDeepEqual: assert.notDeepStrictEqual
});
assert.strict.strict = assert.strict;

var objectKeys = Object.keys || function (obj) {
  var keys = [];
  for (var key in obj) {
    if (hasOwn.call(obj, key)) keys.push(key);
  }
  return keys;
};


/***/ }),

/***/ "./node_modules/assert/node_modules/inherits/inherits_browser.js":
/*!***********************************************************************!*\
  !*** ./node_modules/assert/node_modules/inherits/inherits_browser.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "./node_modules/assert/node_modules/util/support/isBufferBrowser.js":
/*!**************************************************************************!*\
  !*** ./node_modules/assert/node_modules/util/support/isBufferBrowser.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}

/***/ }),

/***/ "./node_modules/assert/node_modules/util/util.js":
/*!*******************************************************!*\
  !*** ./node_modules/assert/node_modules/util/util.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

var formatRegExp = /%[sdj%]/g;
exports.format = function(f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }

  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function(x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s': return String(args[i++]);
      case '%d': return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};


// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function(fn, msg) {
  // Allow for deprecating things in the process of starting up.
  if (isUndefined(global.process)) {
    return function() {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }

  if (process.noDeprecation === true) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
};


var debugs = {};
var debugEnviron;
exports.debuglog = function(set) {
  if (isUndefined(debugEnviron))
    debugEnviron = process.env.NODE_DEBUG || '';
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
      var pid = process.pid;
      debugs[set] = function() {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function() {};
    }
  }
  return debugs[set];
};


/**
 * Echos the value of a value. Trys to print the value out
 * in the best way possible given the different types.
 *
 * @param {Object} obj The object to print out.
 * @param {Object} opts Optional options object that alters the output.
 */
/* legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;


// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold' : [1, 22],
  'italic' : [3, 23],
  'underline' : [4, 24],
  'inverse' : [7, 27],
  'white' : [37, 39],
  'grey' : [90, 39],
  'black' : [30, 39],
  'blue' : [34, 39],
  'cyan' : [36, 39],
  'green' : [32, 39],
  'magenta' : [35, 39],
  'red' : [31, 39],
  'yellow' : [33, 39]
};

// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};


function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];

  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
           '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}


function stylizeNoColor(str, styleType) {
  return str;
}


function arrayToHash(array) {
  var hash = {};

  array.forEach(function(val, idx) {
    hash[val] = true;
  });

  return hash;
}


function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect &&
      value &&
      isFunction(value.inspect) &&
      // Filter out the util module, it's inspect function is special
      value.inspect !== exports.inspect &&
      // Also filter out any prototype objects using the circular check.
      !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }

  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }

  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);

  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }

  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value)
      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }

  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }

  var base = '', array = false, braces = ['{', '}'];

  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }

  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }

  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }

  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }

  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }

  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }

  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }

  ctx.seen.push(value);

  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function(key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }

  ctx.seen.pop();

  return reduceToSingleString(output, base, braces);
}


function formatPrimitive(ctx, value) {
  if (isUndefined(value))
    return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
                                             .replace(/'/g, "\\'")
                                             .replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value))
    return ctx.stylize('' + value, 'number');
  if (isBoolean(value))
    return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value))
    return ctx.stylize('null', 'null');
}


function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}


function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function(key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
          key, true));
    }
  });
  return output;
}


function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function(line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function(line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'")
                 .replace(/\\"/g, '"')
                 .replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }

  return name + ': ' + str;
}


function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function(prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);

  if (length > 60) {
    return braces[0] +
           (base === '' ? '' : base + '\n ') +
           ' ' +
           output.join(',\n  ') +
           ' ' +
           braces[1];
  }

  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}


// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;

function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;

function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;

function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;

function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;

function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;

function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;

function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;

function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;

function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;

function isError(e) {
  return isObject(e) &&
      (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;

function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;

function isPrimitive(arg) {
  return arg === null ||
         typeof arg === 'boolean' ||
         typeof arg === 'number' ||
         typeof arg === 'string' ||
         typeof arg === 'symbol' ||  // ES6 symbol
         typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;

exports.isBuffer = __webpack_require__(/*! ./support/isBuffer */ "./node_modules/assert/node_modules/util/support/isBufferBrowser.js");

function objectToString(o) {
  return Object.prototype.toString.call(o);
}


function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'];

// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()),
              pad(d.getMinutes()),
              pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}


// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function() {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};


/**
 * Inherit the prototype methods from one constructor into another.
 *
 * The Function.prototype.inherits from lang.js rewritten as a standalone
 * function (not on Function.prototype). NOTE: If this file is to be loaded
 * during bootstrapping this function needs to be rewritten using some native
 * functions as prototype setup using normal JavaScript does not work as
 * expected during bootstrapping (see mirror.js in r114903).
 *
 * @param {function} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {function} superCtor Constructor function to inherit prototype from.
 */
exports.inherits = __webpack_require__(/*! inherits */ "./node_modules/assert/node_modules/inherits/inherits_browser.js");

exports._extend = function(origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;

  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};

function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
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
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
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
	} catch (err) {
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

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./src/data sync recursive ^\\.\\/.*\\.json$":
/*!**************************************!*\
  !*** ./src/data sync ^\.\/.*\.json$ ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./department-names.json": "./src/data/department-names.json",
	"./event-titles.json": "./src/data/event-titles.json",
	"./file-names.json": "./src/data/file-names.json",
	"./flags.json": "./src/data/flags.json",
	"./font-awesome.json": "./src/data/font-awesome.json",
	"./group-names.json": "./src/data/group-names.json",
	"./job-titles.json": "./src/data/job-titles.json",
	"./news-titles.json": "./src/data/news-titles.json",
	"./private-messages.json": "./src/data/private-messages.json",
	"./updates-long.json": "./src/data/updates-long.json",
	"./updates-short.json": "./src/data/updates-short.json",
	"./western-names.json": "./src/data/western-names.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/data sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./src/data/department-names.json":
/*!****************************************!*\
  !*** ./src/data/department-names.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Commercial\",\"Manufacturing\",\"Research and development\",\"Marketing\",\"Product Design\",\"Education\",\"Accounting and Finance\",\"Human Resource\",\"Transportation\",\"Management\",\"Operations\",\"IT\",\"Development\",\"Quality Assurance\",\"Internal Communications\",\"Information Design\",\"Training and Publications\",\"Customer Communications\",\"Customer Support\",\"Security\",\"Recruitment\"]");

/***/ }),

/***/ "./src/data/event-titles.json":
/*!************************************!*\
  !*** ./src/data/event-titles.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Team introduction\",\"Shared tech session\",\"Team dinner\",\"New collection briefing\",\"Farewell drinks\",\"Planning session\",\"Team A retrospective\",\"Inventory check Q2\",\"Christmass drinks\",\"Photoshoot - portraits\"]");

/***/ }),

/***/ "./src/data/file-names.json":
/*!**********************************!*\
  !*** ./src/data/file-names.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Customer Support Survey\",\"Prospects Q3\",\"Notes template\",\"Brochure - New bag collection\",\"Event Handout Final\",\"Letterhead template\",\"Logo bundle\",\"Press Kit\"]");

/***/ }),

/***/ "./src/data/flags.json":
/*!*****************************!*\
  !*** ./src/data/flags.json ***!
  \*****************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"AD\",\"AE\",\"AF\",\"AG\",\"AL\",\"AM\",\"AR\",\"AT\",\"AU\",\"AZ\",\"BA\",\"BB\",\"BD\",\"BE\",\"BF\",\"BG\",\"BH\",\"BI\",\"BJ\",\"BN\",\"BO\",\"BR\",\"BS\",\"BT\",\"BW\",\"BY\",\"BZ\",\"ca-ES\",\"CA\",\"CD\",\"CF\",\"CG\",\"CH\",\"CI\",\"CL\",\"CM\",\"CN\",\"CO\",\"CR\",\"CU\",\"CV\",\"CY\",\"CZ\",\"DE\",\"DJ\",\"DK\",\"DM\",\"DO\",\"DZ\",\"EC\",\"EE\",\"EG\",\"ER\",\"ES\",\"ET\",\"FI\",\"FJ\",\"FM\",\"FR\",\"FY\",\"GA\",\"GB\",\"GD\",\"GE\",\"GH\",\"GM\",\"GN\",\"GQ\",\"GR\",\"GT\",\"GW\",\"GY\",\"HN\",\"HR\",\"HT\",\"HU\",\"ID\",\"IE\",\"IL\",\"IN\",\"IQ\",\"IR\",\"IS\",\"IT\",\"JM\",\"JO\",\"JP\",\"KE\",\"KG\",\"KH\",\"KI\",\"KM\",\"KN\",\"KO\",\"KP\",\"KR\",\"KW\",\"KZ\",\"LA\",\"LB\",\"LC\",\"LI\",\"LK\",\"LR\",\"LS\",\"LT\",\"LU\",\"LV\",\"LY\",\"MA\",\"MC\",\"MD\",\"ME\",\"MG\",\"MH\",\"MK\",\"ML\",\"MM\",\"MN\",\"MR\",\"MT\",\"MU\",\"MV\",\"MW\",\"MX\",\"MY\",\"MZ\",\"NA\",\"NE\",\"NG\",\"NI\",\"NL\",\"NO\",\"NP\",\"NR\",\"NZ\",\"OM\",\"PA\",\"PE\",\"PG\",\"PH\",\"PK\",\"PL\",\"PT\",\"PW\",\"PY\",\"QA\",\"RO\",\"RS\",\"RU\",\"RW\",\"SA\",\"SB\",\"SC\",\"SD\",\"SE\",\"SG\",\"SI\",\"SK\",\"SL\",\"SM\",\"SN\",\"SO\",\"SR\",\"SS\",\"ST\",\"SV\",\"SY\",\"SZ\",\"TD\",\"TG\",\"TH\",\"TJ\",\"TM\",\"TN\",\"TO\",\"TR\",\"TT\",\"TV\",\"TW\",\"TZ\",\"UA\",\"UG\",\"US\",\"UY\",\"UZ\",\"VC\",\"VE\",\"VN\",\"VU\",\"WS\",\"YE\",\"ZA\",\"ZM\",\"ZW\"]");

/***/ }),

/***/ "./src/data/font-awesome.json":
/*!************************************!*\
  !*** ./src/data/font-awesome.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"address-book\",\"address-card\",\"adjust\",\"alarm-clock\",\"align-center\",\"align-justify\",\"align-left\",\"align-right\",\"allergies\",\"ambulance\",\"american-sign-language-interpreting\",\"anchor\",\"angle-double-down\",\"angle-double-left\",\"angle-double-right\",\"angle-double-up\",\"angle-down\",\"angle-left\",\"angle-right\",\"angle-up\",\"archive\",\"arrow-alt-circle-down\",\"arrow-alt-circle-left\",\"arrow-alt-circle-right\",\"arrow-alt-circle-up\",\"arrow-alt-down\",\"arrow-alt-from-bottom\",\"arrow-alt-from-left\",\"arrow-alt-from-right\",\"arrow-alt-from-top\",\"arrow-alt-left\",\"arrow-alt-right\",\"arrow-alt-square-down\",\"arrow-alt-square-left\",\"arrow-alt-square-right\",\"arrow-alt-square-up\",\"arrow-alt-to-bottom\",\"arrow-alt-to-left\",\"arrow-alt-to-right\",\"arrow-alt-to-top\",\"arrow-alt-up\",\"arrow-circle-down\",\"arrow-circle-left\",\"arrow-circle-right\",\"arrow-circle-up\",\"arrow-down\",\"arrow-from-bottom\",\"arrow-from-left\",\"arrow-from-right\",\"arrow-from-top\",\"arrow-left\",\"arrow-right\",\"arrow-square-down\",\"arrow-square-left\",\"arrow-square-right\",\"arrow-square-up\",\"arrow-to-bottom\",\"arrow-to-left\",\"arrow-to-right\",\"arrow-to-top\",\"arrow-up\",\"arrows\",\"arrows-alt\",\"arrows-alt-h\",\"arrows-alt-v\",\"arrows-h\",\"arrows-v\",\"assistive-listening-systems\",\"asterisk\",\"at\",\"audio-description\",\"backward\",\"badge\",\"badge-check\",\"balance-scale\",\"ban\",\"band-aid\",\"barcode\",\"barcode-alt\",\"barcode-read\",\"barcode-scan\",\"bars\",\"baseball\",\"baseball-ball\",\"basketball-ball\",\"basketball-hoop\",\"bath\",\"battery-bolt\",\"battery-empty\",\"battery-full\",\"battery-half\",\"battery-quarter\",\"battery-slash\",\"battery-three-quarters\",\"bed\",\"beer\",\"bell\",\"bell-slash\",\"bicycle\",\"binoculars\",\"birthday-cake\",\"blanket\",\"blind\",\"bold\",\"bolt\",\"bomb\",\"book\",\"book-heart\",\"bookmark\",\"bowling-ball\",\"bowling-pins\",\"box\",\"box-alt\",\"box-check\",\"box-fragile\",\"box-full\",\"box-heart\",\"box-open\",\"box-up\",\"box-usd\",\"boxes\",\"boxes-alt\",\"boxing-glove\",\"braille\",\"briefcase\",\"briefcase-medical\",\"browser\",\"bug\",\"building\",\"bullhorn\",\"bullseye\",\"burn\",\"bus\",\"calculator\",\"calendar\",\"calendar-alt\",\"calendar-check\",\"calendar-edit\",\"calendar-exclamation\",\"calendar-minus\",\"calendar-plus\",\"calendar-times\",\"camera\",\"camera-alt\",\"camera-retro\",\"capsules\",\"car\",\"caret-circle-down\",\"caret-circle-left\",\"caret-circle-right\",\"caret-circle-up\",\"caret-down\",\"caret-left\",\"caret-right\",\"caret-square-down\",\"caret-square-left\",\"caret-square-right\",\"caret-square-up\",\"caret-up\",\"cart-arrow-down\",\"cart-plus\",\"certificate\",\"chart-area\",\"chart-bar\",\"chart-line\",\"chart-pie\",\"check\",\"check-circle\",\"check-square\",\"chess\",\"chess-bishop\",\"chess-bishop-alt\",\"chess-board\",\"chess-clock\",\"chess-clock-alt\",\"chess-king\",\"chess-king-alt\",\"chess-knight\",\"chess-knight-alt\",\"chess-pawn\",\"chess-pawn-alt\",\"chess-queen\",\"chess-queen-alt\",\"chess-rook\",\"chess-rook-alt\",\"chevron-circle-down\",\"chevron-circle-left\",\"chevron-circle-right\",\"chevron-circle-up\",\"chevron-double-down\",\"chevron-double-left\",\"chevron-double-right\",\"chevron-double-up\",\"chevron-down\",\"chevron-left\",\"chevron-right\",\"chevron-square-down\",\"chevron-square-left\",\"chevron-square-right\",\"chevron-square-up\",\"chevron-up\",\"child\",\"circle\",\"circle-notch\",\"clipboard\",\"clipboard-check\",\"clipboard-list\",\"clock\",\"clone\",\"closed-captioning\",\"cloud\",\"cloud-download\",\"cloud-download-alt\",\"cloud-upload\",\"cloud-upload-alt\",\"club\",\"code\",\"code-branch\",\"code-commit\",\"code-merge\",\"coffee\",\"cog\",\"cogs\",\"columns\",\"comment\",\"comment-alt\",\"comment-alt-check\",\"comment-alt-dots\",\"comment-alt-edit\",\"comment-alt-exclamation\",\"comment-alt-lines\",\"comment-alt-minus\",\"comment-alt-plus\",\"comment-alt-slash\",\"comment-alt-smile\",\"comment-alt-times\",\"comment-check\",\"comment-dots\",\"comment-edit\",\"comment-exclamation\",\"comment-lines\",\"comment-minus\",\"comment-plus\",\"comment-slash\",\"comment-smile\",\"comment-times\",\"comments\",\"comments-alt\",\"compass\",\"compress\",\"compress-alt\",\"compress-wide\",\"container-storage\",\"conveyor-belt\",\"conveyor-belt-alt\",\"copy\",\"copyright\",\"couch\",\"credit-card\",\"credit-card-blank\",\"credit-card-front\",\"cricket\",\"crop\",\"crosshairs\",\"cube\",\"cubes\",\"curling\",\"cut\",\"database\",\"deaf\",\"desktop\",\"desktop-alt\",\"diagnoses\",\"diamond\",\"dna\",\"dollar-sign\",\"dolly\",\"dolly-empty\",\"dolly-flatbed\",\"dolly-flatbed-alt\",\"dolly-flatbed-empty\",\"donate\",\"dot-circle\",\"dove\",\"download\",\"dumbbell\",\"edit\",\"eject\",\"ellipsis-h\",\"ellipsis-h-alt\",\"ellipsis-v\",\"ellipsis-v-alt\",\"envelope\",\"envelope-open\",\"envelope-square\",\"eraser\",\"euro-sign\",\"exchange\",\"exchange-alt\",\"exclamation\",\"exclamation-circle\",\"exclamation-square\",\"exclamation-triangle\",\"expand\",\"expand-alt\",\"expand-arrows\",\"expand-arrows-alt\",\"expand-wide\",\"external-link\",\"external-link-alt\",\"external-link-square\",\"external-link-square-alt\",\"eye\",\"eye-dropper\",\"eye-slash\",\"fast-backward\",\"fast-forward\",\"fax\",\"female\",\"field-hockey\",\"fighter-jet\",\"file\",\"file-alt\",\"file-archive\",\"file-audio\",\"file-check\",\"file-code\",\"file-edit\",\"file-excel\",\"file-exclamation\",\"file-image\",\"file-medical\",\"file-medical-alt\",\"file-minus\",\"file-pdf\",\"file-plus\",\"file-powerpoint\",\"file-times\",\"file-video\",\"file-word\",\"film\",\"film-alt\",\"filter\",\"fire\",\"fire-extinguisher\",\"first-aid\",\"flag\",\"flag-checkered\",\"flask\",\"folder\",\"folder-open\",\"font\",\"football-ball\",\"football-helmet\",\"forklift\",\"forward\",\"fragile\",\"frown\",\"futbol\",\"gamepad\",\"gavel\",\"gem\",\"genderless\",\"gift\",\"glass-martini\",\"globe\",\"golf-ball\",\"golf-club\",\"graduation-cap\",\"h-square\",\"h1\",\"h2\",\"h3\",\"hand-heart\",\"hand-holding\",\"hand-holding-box\",\"hand-holding-heart\",\"hand-holding-seedling\",\"hand-holding-usd\",\"hand-holding-water\",\"hand-lizard\",\"hand-paper\",\"hand-peace\",\"hand-point-down\",\"hand-point-left\",\"hand-point-right\",\"hand-point-up\",\"hand-pointer\",\"hand-receiving\",\"hand-rock\",\"hand-scissors\",\"hand-spock\",\"hands\",\"hands-heart\",\"hands-helping\",\"hands-usd\",\"handshake\",\"handshake-alt\",\"hashtag\",\"hdd\",\"heading\",\"headphones\",\"heart\",\"heart-circle\",\"heart-square\",\"heartbeat\",\"hexagon\",\"history\",\"hockey-puck\",\"hockey-sticks\",\"home\",\"home-heart\",\"hospital\",\"hospital-alt\",\"hospital-symbol\",\"hourglass\",\"hourglass-end\",\"hourglass-half\",\"hourglass-start\",\"i-cursor\",\"id-badge\",\"id-card\",\"id-card-alt\",\"image\",\"images\",\"inbox\",\"inbox-in\",\"inbox-out\",\"indent\",\"industry\",\"industry-alt\",\"info\",\"info-circle\",\"info-square\",\"inventory\",\"italic\",\"jack-o-lantern\",\"key\",\"keyboard\",\"lamp\",\"language\",\"laptop\",\"leaf\",\"leaf-heart\",\"lemon\",\"level-down\",\"level-down-alt\",\"level-up\",\"level-up-alt\",\"life-ring\",\"lightbulb\",\"link\",\"lira-sign\",\"list\",\"list-alt\",\"list-ol\",\"list-ul\",\"location-arrow\",\"lock\",\"lock-alt\",\"lock-open\",\"lock-open-alt\",\"long-arrow-alt-down\",\"long-arrow-alt-left\",\"long-arrow-alt-right\",\"long-arrow-alt-up\",\"long-arrow-down\",\"long-arrow-left\",\"long-arrow-right\",\"long-arrow-up\",\"loveseat\",\"low-vision\",\"luchador\",\"magic\",\"magnet\",\"male\",\"map\",\"map-marker\",\"map-marker-alt\",\"map-pin\",\"map-signs\",\"mars\",\"mars-double\",\"mars-stroke\",\"mars-stroke-h\",\"mars-stroke-v\",\"medkit\",\"meh\",\"mercury\",\"microchip\",\"microphone\",\"microphone-alt\",\"microphone-slash\",\"minus\",\"minus-circle\",\"minus-hexagon\",\"minus-octagon\",\"minus-square\",\"mobile\",\"mobile-alt\",\"mobile-android\",\"mobile-android-alt\",\"money-bill\",\"money-bill-alt\",\"moon\",\"motorcycle\",\"mouse-pointer\",\"music\",\"neuter\",\"newspaper\",\"notes-medical\",\"object-group\",\"object-ungroup\",\"octagon\",\"outdent\",\"paint-brush\",\"pallet\",\"pallet-alt\",\"paper-plane\",\"paperclip\",\"parachute-box\",\"paragraph\",\"paste\",\"pause\",\"pause-circle\",\"paw\",\"pen\",\"pen-alt\",\"pen-square\",\"pencil\",\"pencil-alt\",\"pennant\",\"people-carry\",\"percent\",\"person-carry\",\"person-dolly\",\"person-dolly-empty\",\"phone\",\"phone-plus\",\"phone-slash\",\"phone-square\",\"phone-volume\",\"piggy-bank\",\"pills\",\"plane\",\"plane-alt\",\"play\",\"play-circle\",\"plug\",\"plus\",\"plus-circle\",\"plus-hexagon\",\"plus-octagon\",\"plus-square\",\"podcast\",\"poo\",\"portrait\",\"pound-sign\",\"power-off\",\"prescription-bottle\",\"prescription-bottle-alt\",\"print\",\"procedures\",\"puzzle-piece\",\"qrcode\",\"question\",\"question-circle\",\"question-square\",\"quidditch\",\"quote-left\",\"quote-right\",\"racquet\",\"ramp-loading\",\"random\",\"rectangle-landscape\",\"rectangle-portrait\",\"rectangle-wide\",\"recycle\",\"redo\",\"redo-alt\",\"registered\",\"repeat\",\"repeat-1\",\"repeat-1-alt\",\"repeat-alt\",\"reply\",\"reply-all\",\"retweet\",\"retweet-alt\",\"ribbon\",\"road\",\"rocket\",\"route\",\"rss\",\"rss-square\",\"ruble-sign\",\"rupee-sign\",\"save\",\"scanner\",\"scanner-keyboard\",\"scanner-touchscreen\",\"scrubber\",\"search\",\"search-minus\",\"search-plus\",\"seedling\",\"server\",\"share\",\"share-all\",\"share-alt\",\"share-alt-square\",\"share-square\",\"shekel-sign\",\"shield\",\"shield-alt\",\"shield-check\",\"ship\",\"shipping-fast\",\"shipping-timed\",\"shopping-bag\",\"shopping-basket\",\"shopping-cart\",\"shower\",\"shuttlecock\",\"sign\",\"sign-in\",\"sign-in-alt\",\"sign-language\",\"sign-out\",\"sign-out-alt\",\"signal\",\"sitemap\",\"sliders-h\",\"sliders-h-square\",\"sliders-v\",\"sliders-v-square\",\"smile\",\"smile-plus\",\"smoking\",\"snowflake\",\"sort\",\"sort-alpha-down\",\"sort-alpha-up\",\"sort-amount-down\",\"sort-amount-up\",\"sort-down\",\"sort-numeric-down\",\"sort-numeric-up\",\"sort-up\",\"space-shuttle\",\"spade\",\"spinner\",\"spinner-third\",\"square\",\"square-full\",\"star\",\"star-exclamation\",\"star-half\",\"step-backward\",\"step-forward\",\"stethoscope\",\"sticky-note\",\"stop\",\"stop-circle\",\"stopwatch\",\"street-view\",\"strikethrough\",\"subscript\",\"subway\",\"suitcase\",\"sun\",\"superscript\",\"sync\",\"sync-alt\",\"syringe\",\"table\",\"table-tennis\",\"tablet\",\"tablet-alt\",\"tablet-android\",\"tablet-android-alt\",\"tablet-rugged\",\"tablets\",\"tachometer\",\"tachometer-alt\",\"tag\",\"tags\",\"tape\",\"tasks\",\"taxi\",\"tennis-ball\",\"terminal\",\"text-height\",\"text-width\",\"th\",\"th-large\",\"th-list\",\"thermometer\",\"thermometer-empty\",\"thermometer-full\",\"thermometer-half\",\"thermometer-quarter\",\"thermometer-three-quarters\",\"thumbs-down\",\"thumbs-up\",\"thumbtack\",\"ticket\",\"ticket-alt\",\"times\",\"times-circle\",\"times-hexagon\",\"times-octagon\",\"times-square\",\"tint\",\"toggle-off\",\"toggle-on\",\"trademark\",\"train\",\"transgender\",\"transgender-alt\",\"trash\",\"trash-alt\",\"tree\",\"tree-alt\",\"triangle\",\"trophy\",\"trophy-alt\",\"truck\",\"truck-container\",\"truck-couch\",\"truck-loading\",\"truck-moving\",\"truck-ramp\",\"tty\",\"tv\",\"tv-retro\",\"umbrella\",\"underline\",\"undo\",\"undo-alt\",\"universal-access\",\"university\",\"unlink\",\"unlock\",\"unlock-alt\",\"upload\",\"usd-circle\",\"usd-square\",\"user\",\"user-alt\",\"user-circle\",\"user-md\",\"user-plus\",\"user-secret\",\"user-times\",\"users\",\"utensil-fork\",\"utensil-knife\",\"utensil-spoon\",\"utensils\",\"utensils-alt\",\"venus\",\"venus-double\",\"venus-mars\",\"vial\",\"vials\",\"video\",\"video-plus\",\"video-slash\",\"volleyball-ball\",\"volume-down\",\"volume-mute\",\"volume-off\",\"volume-up\",\"warehouse\",\"warehouse-alt\",\"watch\",\"weight\",\"wheelchair\",\"whistle\",\"wifi\",\"window\",\"window-alt\",\"window-close\",\"window-maximize\",\"window-minimize\",\"window-restore\",\"wine-glass\",\"won-sign\",\"wrench\",\"x-ray\",\"yen-sign\"]");

/***/ }),

/***/ "./src/data/group-names.json":
/*!***********************************!*\
  !*** ./src/data/group-names.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Sales USA\",\"Sales NL\",\"Sales UK\",\"Marketing\",\"Product Design\",\"Groceries\",\"Case: CRM Implementation\",\"HR News\",\"Feedback & Reports\",\"Marketing News\",\"Company Health\",\"Tech News\",\"Cashiers\",\"Company Drinks\",\"Brainstorm\",\"Demos\",\"Deploy updates\",\"Sales Successes\",\"Design and print\",\"Office Expansion\",\"Recruitment\",\"Culture Crew\",\"Product news\",\"Sales news\",\"Company sports\",\"Technical support\",\"Board games\",\"Customer info\",\"Internal communication feedback\",\"Ideas\"]");

/***/ }),

/***/ "./src/data/job-titles.json":
/*!**********************************!*\
  !*** ./src/data/job-titles.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Floormanager\",\"Visual Designer\",\"Software Engineer\",\"CTO\",\"CFO\",\"Software architect\",\"Accountmanager\",\"Manager Communications\",\"Mobile designer\",\"Sales Developer\",\"Product Owner\",\"Chief Marketing Officer\",\"Marketing Designer\",\"Web Developer\",\"Cashier\",\"Stock Clerk\"]");

/***/ }),

/***/ "./src/data/news-titles.json":
/*!***********************************!*\
  !*** ./src/data/news-titles.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"HR News: New recruits for March\",\"Hola! New weekly menu\",\"Team dinner\",\"New HR Guidelines\",\"Marketing campaign is a great success!\",\"Engagement is through the roof! 79% increase in the past month!\",\"HR News: Pension funds\",\"Message from our CEO\",\"Merry X-Mas Everybody\",\"HR News: New salary slips\"]");

/***/ }),

/***/ "./src/data/private-messages.json":
/*!****************************************!*\
  !*** ./src/data/private-messages.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Hi! Did you check the new product catalog?\",\"No I haven’t seen it. Where can I find it?\",\"Here you go!\",\"Thanks, you're the best!\",\"I have my old trusty ones ready to go with me tomorrow ;-) But thanks!\",\"You can have some of mine, is it possible to share?\",\"I believe so, although to be sure we will need to test it.\",\"Thank you! I will take a look!\",\"I will let you know as soon as I hear back from them and then F2F for sure :)\",\"Cool, thanks!\",\"On Tuesday, we have a 9:30 team meeting, so 10:30 is ok?\",\"Cool. Thanks for being flexible. How's Tuesday sound? Afternoon?\",\"Yes, on it!\",\"Good luck, hope she recovers!\"]");

/***/ }),

/***/ "./src/data/updates-long.json":
/*!************************************!*\
  !*** ./src/data/updates-long.json ***!
  \************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"As we gear up for the launch of our first research study on Jan 24, we've built a 360 degree launch plan (across all markets). Part of that includes driving some excitement/momentum for the study with a pre-launch sign up page (prompting folks to be the first to receive it when goes live). Full launch details and final assets will be provided here on Jan 24 (day of launch).\",\"After a long recruitment process Adam Smith has been elected as our new Marketing manager. Adam will be replacing Susan as of next monday. If you want to welcome our new colleague and pay him a visit before his introduction, his office is at the third floor. Or just leave him a message on this post :-)\",\"Family communication study looks at topics such as family rules, family roles or family dialectics and how those factors could affect the communication between family members. Researchers develop theories to understand communication behaviors. Family communication study also digs deep into certain time periods of family life such as marriage, parenthood or divorce and how communication stands in those situations. It is important for family members to understand communication as a trusted way which leads to a well constructed family.\",\"Nonverbal cues are heavily relied on to express communication and to interpret others' communication and can replace or substitute verbal messages. However, non-verbal communication is ambiguous. When verbal messages contradict non-verbal messages, observation of non-verbal behaviour is relied on to judge another's attitudes and feelings, rather than assuming the truth of the verbal message alone.Unfortunately, we still have to cover a case when we we add something new to the resource of known message type. As we did for video in news. We believe that for this kind of cases we need to tackle the problem from the product perspective.\",\"The landlady was going to reply, but was prevented by the peace-making sergeant, sorely to the displeasure of Partridge, who was a great lover of what is called fun, and a great promoter of those harmless quarrels which tend rather to the production of comical than tragical incidents.\",\"We have an idea to introduce fallback for unknown message types on client side for the future. For this we will add 'fallback' section to every message type from  the API perspective. On the client side, we introduce functionality which will use fallback data from the message resource.\"]");

/***/ }),

/***/ "./src/data/updates-short.json":
/*!*************************************!*\
  !*** ./src/data/updates-short.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"A car from Waternet drove past the building with the announcement that due to a calamity the water will be shut down until further notice.\",\"Hey team, I have a birthday today! Using magic forces (thanks Jane McDoe) I've brought you these cakes. Enjoy!\",\"New report by Johnny Snow. Also great landingpage example to showcase some information about the research before people download it by signing up, good to capture leads.\",\"Many different non-verbal channels are engaged at the same time in communication acts and allow the chance for simultaneous messages to be sent and received.\",\"It’s been a whirlwind few months for everyone at our company. We are delighted to announce that we are the proud first occupants of the WeWork Coworking Office Space.\",\"I think Aarons work looks great! What do you think?\",\"Many physical activities provide opportunities to play and have fun. Not only can these activities be fun but can also improve physical and mental states.\"]");

/***/ }),

/***/ "./src/data/western-names.json":
/*!*************************************!*\
  !*** ./src/data/western-names.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Clara Reeve\",\"Tamzin Sharma\",\"Lizzie Stamp\",\"Gabriela Robbins\",\"Blossom Lees\",\"Hadi Kidd\",\"Harvey Drake\",\"Patsy Palmer\",\"Daniela Greer\",\"Jasmin Nunez\",\"Ahmed Lyon\",\"Jonas Blaese\",\"Erik Forster\",\"Sonya Hulme\",\"Warren Daniels\",\"Harley Clarkson\",\"Tyron Sexton\",\"Abdul Haas\",\"Igor Watkins\",\"Betty Macfarlane\",\"Lillian Gamble\",\"Faheem Cunningham\",\"Griffin Burns\",\"Zaynah Walters\",\"Vinay Mclean\",\"Chanelle West\",\"Braden Keenan\",\"Shayan Booker\",\"Ceri Donovan\",\"Zishan Burks\",\"Laura Hassan\",\"Alberto Dunkley\",\"Demi-Lee Hawes\",\"Talia Mcpherson\",\"Reanna Mill\",\"Sheldon Phan\",\"Caspar Stevens\",\"Alivia Mcmanus\",\"Keyaan Oneal\",\"Brenda Garrison\",\"Ayman Smith\",\"Gethin Adams\",\"Ayub Ryder\",\"Miya Kent\",\"Axel Shea\",\"Conal Perez\",\"Lennon Mcdermott\",\"Ismael Mcgrath\",\"Davey Buchanan\",\"Cavan Crouch\",\"Harrison Chambers\",\"Harvir Marsh\",\"Christos Neale\",\"Junaid Lindsay\",\"Aayush Wilkins\",\"Marlie Watson\",\"Ignacy Walker\",\"Kimora Marriott\",\"Joanne Lamb\",\"Tyler-Jay Lin\",\"Elisa Weber\",\"Luqman Mcguire\",\"Abdi Webb\",\"Sakina Ferry\",\"Ashton Le\",\"Cillian Horner\",\"Kashif Stein\",\"Dainton Vang\",\"Nabeel Fulton\",\"Juan Solis\",\"Zacharia Naylor\",\"Lorelei Dodson\",\"Giorgio Armstrong\",\"Ebony Case\",\"Rudy Thompson\",\"Lauren Sutherland\",\"Daniaal Thornton\",\"Taya Kirkland\",\"Darin Shepherd\",\"Hayley Riley\",\"Kiara Robertson\",\"Mujtaba Horne\",\"Nancy Anthony\",\"Lillie-Rose Mcbride\",\"Aliya Yates\",\"Rajveer Chaney\",\"Dillon Hart\",\"Sahib Peacock\",\"Caolan Valdez\",\"Sonnie Cole\"]");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: onStartup, onShutdown, retrieveData, onSupplyJobTitle, onSupplyFileName, onSupplyNewsTitle, onSupplyEventTitle, onSupplyPrivateMessage, onSupplyUpdateShort, onSupplyUpdateLong, onSupplyIcon, onSupplyName, onSupplyGroupName, onSupplyDeptName, onSupplyNumber, onSupplyEmailAddress, onSupplyPhoneNumber, onSupplyTimestampMinutes, onSupplyTimestampFullDate, onSupplyFlag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retrieveData", function() { return retrieveData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyJobTitle", function() { return onSupplyJobTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyFileName", function() { return onSupplyFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyNewsTitle", function() { return onSupplyNewsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyEventTitle", function() { return onSupplyEventTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyPrivateMessage", function() { return onSupplyPrivateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyUpdateShort", function() { return onSupplyUpdateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyUpdateLong", function() { return onSupplyUpdateLong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyIcon", function() { return onSupplyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyName", function() { return onSupplyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyGroupName", function() { return onSupplyGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyDeptName", function() { return onSupplyDeptName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyNumber", function() { return onSupplyNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyEmailAddress", function() { return onSupplyEmailAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyPhoneNumber", function() { return onSupplyPhoneNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyTimestampMinutes", function() { return onSupplyTimestampMinutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyTimestampFullDate", function() { return onSupplyTimestampFullDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyFlag", function() { return onSupplyFlag; });
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);


var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

function onStartup() {
  // Register methods to supply data.
  DataSupplier.registerDataSupplier('public.text', 'Western name', 'SupplyName');
  DataSupplier.registerDataSupplier('public.text', 'Group name', 'SupplyGroupName');
  DataSupplier.registerDataSupplier('public.text', 'Department name', 'SupplyDeptName');
  DataSupplier.registerDataSupplier('public.text', 'Job title', 'SupplyJobTitle');
  DataSupplier.registerDataSupplier('public.text', 'File name', 'SupplyFileName');
  DataSupplier.registerDataSupplier('public.text', 'News title', 'SupplyNewsTitle');
  DataSupplier.registerDataSupplier('public.text', 'Event title', 'SupplyEventTitle');
  DataSupplier.registerDataSupplier('public.text', 'Private message', 'SupplyPrivateMessage');
  DataSupplier.registerDataSupplier('public.text', 'Update / Short', 'SupplyUpdateShort');
  DataSupplier.registerDataSupplier('public.text', 'Update / Long', 'SupplyUpdateLong');
  DataSupplier.registerDataSupplier('public.text', 'FontAwesome icon name', 'SupplyIcon');
  DataSupplier.registerDataSupplier('public.text', 'Number', 'SupplyNumber');
  DataSupplier.registerDataSupplier('public.text', 'Email address', 'SupplyEmailAddress');
  DataSupplier.registerDataSupplier('public.text', 'Phone number', 'SupplyPhoneNumber');
  DataSupplier.registerDataSupplier('public.text', 'Timestamp / Minutes', 'SupplyTimestampMinutes');
  DataSupplier.registerDataSupplier('public.text', 'Timestamp / Full date', 'SupplyTimestampFullDate');
  DataSupplier.registerDataSupplier('public.image', 'Country flags', 'SupplyFlag');
}
function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}
function retrieveData(filename, context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__("./src/data sync recursive ^\\.\\/.*\\.json$")("./" + filename + ".json");

  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyJobTitle(context) {
  retrieveData('job-titles', context);
}
function onSupplyFileName(context) {
  retrieveData('file-names', context);
}
function onSupplyNewsTitle(context) {
  retrieveData('news-titles', context);
}
function onSupplyEventTitle(context) {
  retrieveData('event-titles', context);
}
function onSupplyPrivateMessage(context) {
  retrieveData('private-messages', context);
}
function onSupplyUpdateShort(context) {
  retrieveData('updates-short', context);
}
function onSupplyUpdateLong(context) {
  retrieveData('updates-long', context);
}
function onSupplyIcon(context) {
  retrieveData('font-awesome', context);
}
function onSupplyName(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/western-names.json */ "./src/data/western-names.json");

  var selectedData = []; // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    selectedData.push(randomItem);
  }); // Sort array alphabetically

  selectedData.sort().reverse();
  items.forEach(function (item, index) {
    DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
  });
}
function onSupplyGroupName(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/group-names.json */ "./src/data/group-names.json");

  var selectedData = [];
  var selectedKeys = []; // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    // Get random key
    var randomKey = Math.floor(Math.random() * dataArray.length); // Check if random key is already in selected keys

    var i = 0;

    while (selectedKeys.includes(randomKey) && i < dataArray.length) {
      i++; // If it's already in selected keys, generate a new one

      randomKey = Math.floor(Math.random() * dataArray.length); //console.log("Random key already in array", randomKey);
    }

    if (i >= dataArray.length) {
      selectedData.push("Out of data");
    } else {
      // Push new key into selected keys
      selectedKeys.push(randomKey); //console.log("Pushed new key into array", selectedKeys);
      // Grab new item and push it into selected data

      var randomItem = dataArray[randomKey];
      selectedData.push(randomItem); //console.log("Pushed new data into array", selectedData);
    }
  }); // Sort array alphabetically

  selectedData.sort().reverse();
  items.forEach(function (item, index) {
    DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
  });
}
function onSupplyDeptName(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/department-names.json */ "./src/data/department-names.json");

  var selectedData = [];
  var selectedKeys = []; // Get data for all selected layers

  items.forEach(function (item, index) {
    // Get random key
    var randomKey = Math.floor(Math.random() * dataArray.length); // Check if random key is already in selected keys

    var i = 0;

    while (selectedKeys.includes(randomKey) && i < dataArray.length) {
      i++; // If it's already in selected keys, generate a new one

      randomKey = Math.floor(Math.random() * dataArray.length);
    }

    if (i >= dataArray.length) {
      selectedData.push("Out of data");
    } else {
      // Push new key into selected keys
      selectedKeys.push(randomKey); // Grab new item and push it into selected data

      var randomItem = dataArray[randomKey];
      selectedData.push(randomItem);
    }
  }); // Sort array alphabetically

  selectedData.sort().reverse();
  items.forEach(function (item, index) {
    DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
  });
}
function onSupplyNumber(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative); // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomNumber = Math.floor(Math.random() * Math.floor(300));
    DataSupplier.supplyDataAtIndex(dataKey, randomNumber.toString(), index);
  });
}
function onSupplyEmailAddress(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/western-names.json */ "./src/data/western-names.json");

  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    randomItem = randomItem.toLowerCase().replace(" ", ".") + "@domain.com";
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyPhoneNumber(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative); // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomNumberOne = Math.floor(100 + Math.random() * 900);
    var randomNumberTwo = Math.floor(1000 + Math.random() * 9000);
    var phoneNumber = "1 415-" + randomNumberOne.toString() + "-" + randomNumberTwo.toString();
    DataSupplier.supplyDataAtIndex(dataKey, phoneNumber, index);
  });
}
function onSupplyTimestampMinutes(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  items.forEach(function (item, index) {
    // Get minute
    var randomNumber = Math.floor(Math.random() * Math.floor(45));
    var timestamp = randomNumber.toString() + " minutes ago";
    DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
  });
}
function onSupplyTimestampFullDate(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);
  var monthsArray = ["January", "February", "March", "April", "June", "July", "August", "September", "Oktober", "November", "December"];
  items.forEach(function (item, index) {
    // Get random day
    var randomNumber = Math.floor(Math.random() * Math.floor(29));
    var randomMonth = monthsArray[Math.floor(Math.random() * monthsArray.length)];
    var timestamp = randomMonth + " " + randomNumber.toString() + ", 2019";
    DataSupplier.supplyDataAtIndex(dataKey, timestamp, index);
  });
}
function onSupplyFlag(context) {
  var dataKey = context.data.key;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/flags.json */ "./src/data/flags.json"); // Iterate over selected shapes


  items.forEach(function (item, index) {
    var randomKey = Math.floor(Math.random() * dataArray.length);
    var imagePath = 'https://static.staging.speakap.io/img/flags/' + dataArray[randomKey] + '.png';
    var image = fetchImage(imagePath);
    DataSupplier.supplyDataAtIndex(dataKey, imagePath, index);
    setImage(image, item);
  }); // Fetch the flag image remotely

  function fetchImage(url, ingnoreCache) {
    var request = ingnoreCache ? NSURLRequest.requestWithURL_cachePolicy_timeoutInterval(NSURL.URLWithString(url), NSURLRequestReloadIgnoringLocalCacheData, 60) : NSURLRequest.requestWithURL(NSURL.URLWithString(url));
    var responsePtr = MOPointer.alloc().init();
    var errorPtr = MOPointer.alloc().init();
    var data = NSURLConnection.sendSynchronousRequest_returningResponse_error(request, responsePtr, errorPtr);

    if (errorPtr.value() != null) {
      print(errorPtr.value());
      return null;
    }

    var response = responsePtr.value();

    if (response.statusCode() != 200) {
      return null;
    }

    var mimeType = response.allHeaderFields()["Content-Type"];

    if (!mimeType || !mimeType.hasPrefix("image/")) {
      return null;
    }

    return NSImage.alloc().initWithData(data);
  } // Set image as fill


  function setImage(image, layer) {
    if (image) {
      layer.style.fills = [{
        fillType: Style.FillType.Pattern,
        pattern: {
          patternType: Style.PatternFillType.Fit,
          image: MSImageData.alloc().initWithImage(image)
        }
      }];
    } else {
      console.log('No image loaded');
      return null;
    }
  }
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
    if (key === 'default' && typeof exports === 'function') {
      exports(context);
    } else if (typeof exports[key] !== 'function') {
      throw new Error('Missing export named "' + key + '". Your command should contain something like `export function " + key +"() {}`.');
    } else {
      exports[key](context);
    }
  } catch (err) {
    if (typeof process !== 'undefined' && process.listenerCount && process.listenerCount('uncaughtException')) {
      process.emit("uncaughtException", err, "uncaughtException");
    } else {
      throw err
    }
  }
}
globalThis['onStartup'] = __skpm_run.bind(this, 'onStartup');
globalThis['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
globalThis['onSupplyName'] = __skpm_run.bind(this, 'onSupplyName');
globalThis['onSupplyJobTitle'] = __skpm_run.bind(this, 'onSupplyJobTitle');
globalThis['onSupplyFileName'] = __skpm_run.bind(this, 'onSupplyFileName');
globalThis['onSupplyGroupName'] = __skpm_run.bind(this, 'onSupplyGroupName');
globalThis['onSupplyDeptName'] = __skpm_run.bind(this, 'onSupplyDeptName');
globalThis['onSupplyNewsTitle'] = __skpm_run.bind(this, 'onSupplyNewsTitle');
globalThis['onSupplyEventTitle'] = __skpm_run.bind(this, 'onSupplyEventTitle');
globalThis['onSupplyPrivateMessage'] = __skpm_run.bind(this, 'onSupplyPrivateMessage');
globalThis['onSupplyUpdateShort'] = __skpm_run.bind(this, 'onSupplyUpdateShort');
globalThis['onSupplyUpdateLong'] = __skpm_run.bind(this, 'onSupplyUpdateLong');
globalThis['onSupplyIcon'] = __skpm_run.bind(this, 'onSupplyIcon');
globalThis['onSupplyNumber'] = __skpm_run.bind(this, 'onSupplyNumber');
globalThis['onSupplyEmailAddress'] = __skpm_run.bind(this, 'onSupplyEmailAddress');
globalThis['onSupplyPhoneNumber'] = __skpm_run.bind(this, 'onSupplyPhoneNumber');
globalThis['onSupplyTimestampMinutes'] = __skpm_run.bind(this, 'onSupplyTimestampMinutes');
globalThis['onSupplyTimestampFullDate'] = __skpm_run.bind(this, 'onSupplyTimestampFullDate');
globalThis['onSupplyFlag'] = __skpm_run.bind(this, 'onSupplyFlag');
globalThis['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=main.js.map