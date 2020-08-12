/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
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
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ "./src/karma.ts":
/*!**********************!*\
  !*** ./src/karma.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Karma = void 0;
var Karma = /** @class */ (function () {
    function Karma(scene) {
        this.karma = 0;
        this.img = scene.add.sprite(333, 333, 'karma').setOrigin(0, 1);
    }
    Karma.preload = function (scene) {
        scene.load.image('karma', 'assets/sprites/karma_earth.png');
    };
    //Add or substract karma
    Karma.prototype.modify_karma = function (val) {
        this.karma += val;
        if (this.karma > 99) {
            this.karma = 99;
        }
        else if (this.karma < 0) {
            this.karma = 0;
        }
    };
    //Get karma type
    Karma.prototype.get_karma_level = function () {
        /*
        0 = Very Bad Karma
        1 = Bad Karma
        2 = Neutral Karma
        3 = Good Karma
        4 = Very Good Karma
        */
        return Math.floor(this.karma / 20);
    };
    Karma.prototype.update = function () {
        this.img.setPosition(this.karma, this.karma);
        console.log(this.get_karma_level());
    };
    return Karma;
}());
exports.Karma = Karma;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.game = exports.GameScene = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var karma_1 = __webpack_require__(/*! ./karma */ "./src/karma.ts");
var sceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, sceneConfig) || this;
    }
    GameScene.prototype.b_karma_func = function () {
        this.karma.modify_karma(10);
        this.b_karma_up.setFrame(2);
    };
    GameScene.prototype.b_volume_func = function () {
    };
    GameScene.prototype.preload = function () {
        this.load.setCORS("Anonymous");
        this.load.audio('kek', 'assets/music/kek.mp3');
        this.load.spritesheet('b_karma_up', 'assets/sprites/ss_button_red.png', { frameWidth: 50, frameHeight: 45 });
        this.load.spritesheet('b_volume', 'assets/sprites/ss_volumen.png', { frameWidth: 60, frameHeight: 45 });
        karma_1.Karma.preload(this);
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.b_karma_up = this.add.sprite(100, 100, 'b_karma_up', 0).setInteractive();
        this.karma = new karma_1.Karma(this);
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF);
        this.physics.add.existing(this.square);
        this.kek = this.sound.add('kek');
        this.b_karma_up.on('pointerup', function () { return _this.b_karma_func(); });
        this.b_karma_up.on('pointerdown', function () {
            _this.b_karma_up.setFrame(1);
        });
        this.b_karma_up.on('pointerover', function () {
            _this.b_karma_up.setFrame(1);
        });
        this.b_karma_up.on('pointerout', function () {
            _this.b_karma_up.setFrame(0);
        });
    };
    GameScene.prototype.update = function () {
        if (this.input.activePointer.leftButtonDown()) {
            //this.square.setPosition(this.input.activePointer.x, this.input.activePointer.y);
            this.kek.play();
            this.karma.update();
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var gameConfig = {
    title: 'Sample',
    type: Phaser.CANVAS,
    scale: {
        parent: 'content',
        mode: Phaser.Scale.FIT,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: GameScene,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#000000',
};
exports.game = new Phaser.Game(gameConfig);


/***/ }),

/***/ 0:
/*!*****************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://localhost:8080 ./src/main.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\dani9\Documents\WebGames\Testo\node_modules\webpack-dev-server\client\index.js?http://localhost:8080 */"./node_modules/webpack-dev-server/client/index.js?http://localhost:8080");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2thcm1hLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFD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QUFDLFlBQVksRUFBRTtZQUMvQixLQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwwQkFBTSxHQUFiO1FBQ0UsSUFBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsRUFBQztZQUMzQyxrRkFBa0Y7WUFDbEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3JCO0lBQ0gsQ0FBQztJQUNILGdCQUFDO0FBQUQsQ0FBQyxDQXhEOEIsTUFBTSxDQUFDLEtBQUssR0F3RDFDO0FBeERZLDhCQUFTO0FBMER0QixJQUFNLFVBQVUsR0FBaUM7SUFDL0MsS0FBSyxFQUFFLFFBQVE7SUFFZixJQUFJLEVBQUUsTUFBTSxDQUFDLE1BQU07SUFFbkIsS0FBSyxFQUFFO1FBQ0wsTUFBTSxFQUFFLFNBQVM7UUFDakIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRztRQUN0QixLQUFLLEVBQUUsTUFBTSxDQUFDLFVBQVU7UUFDeEIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO0tBQzNCO0lBRUQsS0FBSyxFQUFFLFNBQVM7SUFFaEIsT0FBTyxFQUFFO1FBQ1AsT0FBTyxFQUFFLFFBQVE7UUFDakIsTUFBTSxFQUFFO1lBQ04sS0FBSyxFQUFFLElBQUk7U0FDWjtLQUNGO0lBRUQsTUFBTSxFQUFFLE1BQU07SUFDZCxlQUFlLEVBQUUsU0FBUztDQUMzQixDQUFDO0FBRVcsWUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBLYXJtYXtcclxuICAgIHByaXZhdGUgaW1nOiBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRlO1xyXG4gICAgcHJpdmF0ZSBrYXJtYSA6IGludGVnZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lIDogUGhhc2VyLlNjZW5lKXtcclxuICAgICAgICB0aGlzLmltZyA9IHNjZW5lLmFkZC5zcHJpdGUoMzMzLCAzMzMsICdrYXJtYScpLnNldE9yaWdpbigwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgcHJlbG9hZChzY2VuZSA6IFBoYXNlci5TY2VuZSl7XHJcbiAgICAgICAgc2NlbmUubG9hZC5pbWFnZSgna2FybWEnLCAnYXNzZXRzL3Nwcml0ZXMva2FybWFfZWFydGgucG5nJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9BZGQgb3Igc3Vic3RyYWN0IGthcm1hXHJcbiAgICBwdWJsaWMgbW9kaWZ5X2thcm1hKHZhbDogaW50ZWdlcil7XHJcbiAgICAgICAgdGhpcy5rYXJtYSArPSB2YWw7XHJcblxyXG4gICAgICAgIGlmKHRoaXMua2FybWEgPiA5OSl7XHJcbiAgICAgICAgICAgIHRoaXMua2FybWEgPSA5OTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmthcm1hIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMua2FybWEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0dldCBrYXJtYSB0eXBlXHJcbiAgICBwdWJsaWMgZ2V0X2thcm1hX2xldmVsKCl7XHJcbiAgICAgICAgLypcclxuICAgICAgICAwID0gVmVyeSBCYWQgS2FybWFcclxuICAgICAgICAxID0gQmFkIEthcm1hXHJcbiAgICAgICAgMiA9IE5ldXRyYWwgS2FybWFcclxuICAgICAgICAzID0gR29vZCBLYXJtYVxyXG4gICAgICAgIDQgPSBWZXJ5IEdvb2QgS2FybWFcclxuICAgICAgICAqL1xyXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMua2FybWEvMjApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLmltZy5zZXRQb3NpdGlvbih0aGlzLmthcm1hLCB0aGlzLmthcm1hKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldF9rYXJtYV9sZXZlbCgpKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBLYXJtYSB9IGZyb20gJy4va2FybWEnO1xyXG5cclxuY29uc3Qgc2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdHYW1lJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHByaXZhdGUgc3F1YXJlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xyXG4gIHByaXZhdGUga2VrOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kICYge307XHJcbiAgcHJpdmF0ZSBrYXJtYTogS2FybWEgJiB7fTtcclxuICBwcml2YXRlIGJfa2FybWFfdXA6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKHNjZW5lQ29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYl9rYXJtYV9mdW5jKCl7XHJcbiAgICB0aGlzLmthcm1hLm1vZGlmeV9rYXJtYSgxMCk7XHJcbiAgICB0aGlzLmJfa2FybWFfdXAuc2V0RnJhbWUoMik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGJfdm9sdW1lX2Z1bmMoKXtcclxuXHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlbG9hZCAoKXtcclxuICAgIHRoaXMubG9hZC5zZXRDT1JTKFwiQW5vbnltb3VzXCIpO1xyXG4gICAgdGhpcy5sb2FkLmF1ZGlvKCdrZWsnLCAnYXNzZXRzL211c2ljL2tlay5tcDMnKTtcclxuICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYl9rYXJtYV91cCcsICdhc3NldHMvc3ByaXRlcy9zc19idXR0b25fcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA1MCwgZnJhbWVIZWlnaHQ6IDQ1fSk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfdm9sdW1lJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX3ZvbHVtZW4ucG5nJywge2ZyYW1lV2lkdGg6IDYwLCBmcmFtZUhlaWdodDogNDV9KTtcclxuICAgIEthcm1hLnByZWxvYWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5iX2thcm1hX3VwID0gdGhpcy5hZGQuc3ByaXRlKDEwMCwxMDAsJ2Jfa2FybWFfdXAnLDApLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICB0aGlzLmthcm1hID0gbmV3IEthcm1hKHRoaXMpO1xyXG4gICAgdGhpcy5zcXVhcmUgPSB0aGlzLmFkZC5yZWN0YW5nbGUoNDAwLCA0MDAsIDEwMCwgMTAwLCAweEZGRkZGRikgYXMgYW55O1xyXG4gICAgdGhpcy5waHlzaWNzLmFkZC5leGlzdGluZyh0aGlzLnNxdWFyZSk7XHJcbiAgICB0aGlzLmtlayA9IHRoaXMuc291bmQuYWRkKCdrZWsnKTtcclxuXHJcbiAgICB0aGlzLmJfa2FybWFfdXAub24oJ3BvaW50ZXJ1cCcsICgpID0+IHRoaXMuYl9rYXJtYV9mdW5jKCkpO1xyXG5cclxuICAgIHRoaXMuYl9rYXJtYV91cC5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYl9rYXJtYV91cC5zZXRGcmFtZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYl9rYXJtYV91cC5vbigncG9pbnRlcm92ZXInLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuYl9rYXJtYV91cC5zZXRGcmFtZSgxKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuYl9rYXJtYV91cC5vbigncG9pbnRlcm91dCcsICgpID0+IHtcclxuICAgICAgdGhpcy5iX2thcm1hX3VwLnNldEZyYW1lKDApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgIGlmKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5sZWZ0QnV0dG9uRG93bigpKXtcclxuICAgICAgLy90aGlzLnNxdWFyZS5zZXRQb3NpdGlvbih0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueCwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkpO1xyXG4gICAgICB0aGlzLmtlay5wbGF5KCk7XHJcbiAgICAgIHRoaXMua2FybWEudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gIHRpdGxlOiAnU2FtcGxlJyxcclxuIFxyXG4gIHR5cGU6IFBoYXNlci5DQU5WQVMsXHJcbiBcclxuICBzY2FsZToge1xyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxyXG4gICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgfSxcclxuICBcclxuICBzY2VuZTogR2FtZVNjZW5lLFxyXG4gXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICBhcmNhZGU6IHtcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiBcclxuICBwYXJlbnQ6ICdnYW1lJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwJyxcclxufTtcclxuIFxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShnYW1lQ29uZmlnKTsiXSwic291cmNlUm9vdCI6IiJ9