var that = this;
function __skpm_run (key, context) {
  that.context = context;

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

/***/ "./src/data/file-names.json":
/*!**********************************!*\
  !*** ./src/data/file-names.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, default */
/***/ (function(module) {

module.exports = ["Customer Support Survey","Prospects Q3","Notes template","Brochure - New bag collection","Event Handout Final","Letterhead template","Logo bundle","Press Kit"];

/***/ }),

/***/ "./src/data/group-names.json":
/*!***********************************!*\
  !*** ./src/data/group-names.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, default */
/***/ (function(module) {

module.exports = ["Sales USA","Sales NL","Sales UK","Marketing","Product Design","Groceries","Case: CRM Implementation","HR News","Feedback & Reports","Marketing News","Company Health","Tech News","Cashiers"];

/***/ }),

/***/ "./src/data/job-titles.json":
/*!**********************************!*\
  !*** ./src/data/job-titles.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, default */
/***/ (function(module) {

module.exports = ["Floormanager","Visual Designer","Software Engineer","CTO","CFO","Software architect","Accountmanager","Manager Communications","Mobile designer","Sales Developer","Product Owner","Chief Marketing Officer","Marketing Designer","Web Developer","Cashier","Stock Clerk"];

/***/ }),

/***/ "./src/data/news-titles.json":
/*!***********************************!*\
  !*** ./src/data/news-titles.json ***!
  \***********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, default */
/***/ (function(module) {

module.exports = ["HR News: New recruits for March","Hola! New weekly menu","Team dinner","New HR Guidelines","Marketing campaign is a great success!","Engagement is through the roof! 79% increase in the past month!","HR News: Pension funds","Message from our CEO","Merry X-Mas Everybody","HR News: New salary slips"];

/***/ }),

/***/ "./src/data/private-messages.json":
/*!****************************************!*\
  !*** ./src/data/private-messages.json ***!
  \****************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, default */
/***/ (function(module) {

module.exports = ["Hi! Did you check the new product catalog?","No I haven’t seen it. Where can I find it?","Here you go!","Thanks, you're the best!","I have my old trusty ones ready to go with me tomorrow ;-) But thanks!","You can have some of mine, is it possible to share?","I believe so, although to be sure we will need to test it.","Thank you! I will take a look!","I will let you know as soon as I hear back from them and then F2F for sure :)","Cool, thanks!","On Tuesday, we have a 9:30 team meeting, so 10:30 is ok?","Cool. Thanks for being flexible. How's Tuesday sound? Afternoon?","Yes, on it!","Good luck, hope she recovers!"];

/***/ }),

/***/ "./src/data/updates.json":
/*!*******************************!*\
  !*** ./src/data/updates.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, default */
/***/ (function(module) {

module.exports = ["Notice: A car from Waternet drove past the building with the announcement that due to a calamity the water will be shut down until further notice.","As we gear up for the launch of our first research study on Jan 24, we've built a 360 degree launch plan (across all markets). Part of that includes driving some excitement/momentum for the study with a pre-launch sign up page (prompting folks to be the first to receive it when goes live). Full launch details and final assets will be provided here on Jan 24 (day of launch).","Hey team, I have a birthday today! Using magic forces (thanks Jane McDoe) I've brought you these cakes. Enjoy!","After a long recruitment process Adam Smith has been elected as our new Marketing manager. Adam will be replacing Susan as of next monday. If you want to welcome our new colleague and pay him a visit before his introduction, his office is at the third floor."];

/***/ }),

/***/ "./src/data/western-names.json":
/*!*************************************!*\
  !*** ./src/data/western-names.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, default */
/***/ (function(module) {

module.exports = ["Clara Reeve","Tamzin Sharma","Lizzie Stamp","Gabriela Robbins","Blossom Lees","Hadi Kidd","Harvey Drake","Patsy Palmer","Daniela Greer","Jasmin Nunez","Ahmed Lyon","Jonas Blaese","Erik Forster","Sonya Hulme","Warren Daniels","Harley Clarkson","Tyron Sexton","Abdul Haas","Igor Watkins","Betty Macfarlane","Lillian Gamble","Faheem Cunningham","Griffin Burns","Zaynah Walters","Vinay Mclean","Chanelle West","Braden Keenan","Shayan Booker","Ceri Donovan","Zishan Burks","Laura Hassan","Alberto Dunkley","Demi-Lee Hawes","Talia Mcpherson","Reanna Mill","Sheldon Phan","Caspar Stevens","Alivia Mcmanus","Keyaan Oneal","Brenda Garrison","Ayman Smith","Gethin Adams","Ayub Ryder","Miya Kent","Axel Shea","Conal Perez","Lennon Mcdermott","Ismael Mcgrath","Davey Buchanan","Cavan Crouch","Harrison Chambers","Harvir Marsh","Christos Neale","Junaid Lindsay","Aayush Wilkins","Marlie Watson","Ignacy Walker","Kimora Marriott","Joanne Lamb","Tyler-Jay Lin","Elisa Weber","Luqman Mcguire","Abdi Webb","Sakina Ferry","Ashton Le","Cillian Horner","Kashif Stein","Dainton Vang","Nabeel Fulton","Juan Solis","Zacharia Naylor","Lorelei Dodson","Giorgio Armstrong","Ebony Case","Rudy Thompson","Lauren Sutherland","Daniaal Thornton","Taya Kirkland","Darin Shepherd","Hayley Riley","Kiara Robertson","Mujtaba Horne","Nancy Anthony","Lillie-Rose Mcbride","Aliya Yates","Rajveer Chaney","Dillon Hart","Sahib Peacock","Caolan Valdez","Sonnie Cole"];

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: onStartup, onShutdown, onSupplyName, onSupplyJobTitle, onSupplyFileName, onSupplyGroupName, onSupplyNewsTitle, onSupplyPrivateMessage, onSupplyUpdate, onSupplyNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onStartup", function() { return onStartup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onShutdown", function() { return onShutdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyName", function() { return onSupplyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyJobTitle", function() { return onSupplyJobTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyFileName", function() { return onSupplyFileName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyGroupName", function() { return onSupplyGroupName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyNewsTitle", function() { return onSupplyNewsTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyPrivateMessage", function() { return onSupplyPrivateMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyUpdate", function() { return onSupplyUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onSupplyNumber", function() { return onSupplyNumber; });
var sketch = __webpack_require__(/*! sketch */ "sketch");

var DataSupplier = sketch.DataSupplier;

var util = __webpack_require__(/*! util */ "util");

function onStartup() {
  // Register a method to supply a random western name.
  DataSupplier.registerDataSupplier('public.text', 'Western name', 'SupplyName'); // Register a method to supply a random group name.

  DataSupplier.registerDataSupplier('public.text', 'Group name', 'SupplyGroupName'); // Register a method to supply a random job title.

  DataSupplier.registerDataSupplier('public.text', 'Job title', 'SupplyJobTitle'); // Register a method to supply a random file name.

  DataSupplier.registerDataSupplier('public.text', 'File name', 'SupplyFileName'); // Register a method to supply a random news title.

  DataSupplier.registerDataSupplier('public.text', 'News title', 'SupplyNewsTitle'); // Register a method to supply a random private message.

  DataSupplier.registerDataSupplier('public.text', 'Private message', 'SupplyPrivateMessage'); // Register a method to supply a random update.

  DataSupplier.registerDataSupplier('public.text', 'Update', 'SupplyUpdate'); // Register a method to supply a random number.

  DataSupplier.registerDataSupplier('public.text', 'Number', 'SupplyNumber');
}
function onShutdown() {
  // Deregister the plugin
  DataSupplier.deregisterDataSuppliers();
}
function onSupplyName(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/western-names.json */ "./src/data/western-names.json");

  var selectedData = []; // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    selectedData.push(randomItem);
  }); // Sort array alphabetically

  selectedData.sort();
  items.forEach(function (item, index) {
    DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
  });
}
function onSupplyJobTitle(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/job-titles.json */ "./src/data/job-titles.json"); // Start the data to be provided at a random position in the array.


  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyFileName(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/file-names.json */ "./src/data/file-names.json"); // Start the data to be provided at a random position in the array.


  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyGroupName(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/group-names.json */ "./src/data/group-names.json");

  var selectedData = []; // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    selectedData.push(randomItem);
  }); // Sort array alphabetically

  selectedData.sort();
  console.log(selectedData);
  items.forEach(function (item, index) {
    DataSupplier.supplyDataAtIndex(dataKey, selectedData[index], index);
  });
}
function onSupplyNewsTitle(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/news-titles.json */ "./src/data/news-titles.json"); // Start the data to be provided at a random position in the array.


  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyPrivateMessage(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/private-messages.json */ "./src/data/private-messages.json"); // Start the data to be provided at a random position in the array.


  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyUpdate(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative);

  var dataArray = __webpack_require__(/*! ./data/updates.json */ "./src/data/updates.json"); // Start the data to be provided at a random position in the array.


  items.forEach(function (item, index) {
    var randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    DataSupplier.supplyDataAtIndex(dataKey, randomItem, index);
  });
}
function onSupplyNumber(context) {
  var dataKey = context.data.key;
  var dataCount = context.data.requestedCount;
  var items = util.toArray(context.data.items).map(sketch.fromNative); // Start the data to be provided at a random position in the array.

  items.forEach(function (item, index) {
    var randomNumber = Math.floor(Math.random() * Math.floor(300));
    DataSupplier.supplyDataAtIndex(dataKey, randomNumber.toString(), index);
  });
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
  } else {
    exports[key](context);
  }
}
that['onStartup'] = __skpm_run.bind(this, 'onStartup');
that['onShutdown'] = __skpm_run.bind(this, 'onShutdown');
that['onSupplyName'] = __skpm_run.bind(this, 'onSupplyName');
that['onSupplyJobTitle'] = __skpm_run.bind(this, 'onSupplyJobTitle');
that['onSupplyFileName'] = __skpm_run.bind(this, 'onSupplyFileName');
that['onSupplyGroupName'] = __skpm_run.bind(this, 'onSupplyGroupName');
that['onSupplyNewsTitle'] = __skpm_run.bind(this, 'onSupplyNewsTitle');
that['onSupplyPrivateMessage'] = __skpm_run.bind(this, 'onSupplyPrivateMessage');
that['onSupplyUpdate'] = __skpm_run.bind(this, 'onSupplyUpdate');
that['onSupplyNumber'] = __skpm_run.bind(this, 'onSupplyNumber');
that['onRun'] = __skpm_run.bind(this, 'default')

//# sourceMappingURL=main.js.map