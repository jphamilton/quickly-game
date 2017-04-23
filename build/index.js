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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var timestamp = function () {
    return window.performance && window.performance.now ? window.performance.now() : new Date().getTime();
};
var now;
var delta = 0;
var last = timestamp();
var DT = 1 / 60;
var ONE_SECOND = 1000;
var init = function (game) {
    var frame = function () {
        now = timestamp();
        delta += Math.min(1, (now - last) / ONE_SECOND);
        while (delta > DT) {
            game.update(DT);
            delta -= DT;
        }
        game.render(delta);
        last = now;
        requestAnimationFrame(frame);
    };
    frame();
};
exports.loop = function (state) {
    init(state);
};


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var loop_1 = __webpack_require__(0);
var keys_1 = __webpack_require__(2);
var Game = (function () {
    function Game() {
        this.init();
    }
    Game.prototype.init = function () {
    };
    Game.prototype.update = function (dt) {
    };
    Game.prototype.render = function (dt) {
        keys_1.keys.reset();
    };
    return Game;
}());
var game = new Game();
setTimeout(function () {
    loop_1.loop(game);
}, 1000);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var LEN = 222;
var Keys = (function () {
    function Keys() {
        var _this = this;
        this.SPACE = 32;
        this.LEFT = 37;
        this.RIGHT = 39;
        this.UP = 38;
        this.DOWN = 40;
        this.CTRL = 17;
        this.PAUSE = 80;
        this.keys = new Array(LEN);
        this.prev = new Array(LEN);
        for (var i = 0; i < LEN; i++) {
            this.keys[i] = this.prev[i] = false;
        }
        window.onkeydown = function (e) {
            _this.keys[e.keyCode] = true;
        };
        window.onkeyup = function (e) {
            _this.keys[e.keyCode] = false;
        };
    }
    Keys.prototype.reset = function () {
        for (var i = 0; i < LEN; i++) {
            this.prev[i] = this.keys[i];
        }
    };
    Keys.prototype.isPressed = function (key) {
        return this.prev[key] === false && this.keys[key] === true;
    };
    Keys.prototype.wasPressed = function (key) {
        return this.prev[key] && !this.keys[key];
    };
    Keys.prototype.isDown = function (key) {
        return this.keys[key];
    };
    return Keys;
}());
exports.Keys = Keys;
exports.keys = new Keys();


/***/ })
/******/ ]);