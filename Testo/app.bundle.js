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

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
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
exports.Button = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(scene, x, y, id, frame) {
        var _this = _super.call(this, scene, x, y, id, frame) || this;
        _this.setInteractive();
        _this.is_in = false;
        _this.is_clicked = false;
        _this.on('pointerdown', function (event) {
            this.is_clicked = true;
            this.setFrame(2);
        }, _this);
        _this.on('pointerover', function (event) {
            this.is_in = true;
            this.is_clicked ? this.setFrame(2) : this.setFrame(1);
        }, _this);
        _this.on('pointerout', function (event) {
            this.is_in = false;
            this.setFrame(0);
        }, _this);
        return _this;
    }
    Button.prototype.link_func = function (callback) {
        var _this = this;
        this.on('pointerup', function () { if (_this.is_clicked) {
            callback();
        } ; _this.is_clicked = false; _this.setFrame(1); });
    };
    Button.prototype.update = function (scene) {
        if (scene.input.activePointer.leftButtonReleased()) {
            if (this.is_in == false) {
                this.is_clicked = false;
            }
        }
    };
    return Button;
}(Phaser.GameObjects.Sprite));
exports.Button = Button;


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
var menu_1 = __webpack_require__(/*! ./menu */ "./src/menu.ts");
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
    GameScene.prototype.preload = function () {
        this.load.setCORS("Anonymous");
        this.load.audio('kek', 'assets/music/kek.mp3');
        this.load.spritesheet('b_volume', 'assets/sprites/ss_volumen.png', { frameWidth: 60, frameHeight: 45 });
        karma_1.Karma.preload(this);
    };
    GameScene.prototype.create = function () {
        this.karma = new karma_1.Karma(this);
        this.square = this.add.rectangle(400, 400, 100, 100, 0xFFFFFF);
        this.physics.add.existing(this.square);
        this.kek = this.sound.add('kek');
    };
    GameScene.prototype.update = function () {
        if (this.input.activePointer.leftButtonDown()) {
            this.kek.play();
            this.karma.update();
        }
        if (this.input.activePointer.middleButtonDown()) {
            this.scene.start('Menu');
        }
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var MainSceneConfig = {
    title: 'Sample',
    type: Phaser.CANVAS,
    scale: {
        parent: 'content',
        mode: Phaser.Scale.FIT,
        width: window.innerWidth,
        height: window.innerHeight,
    },
    scene: [GameScene, menu_1.Menu],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'game',
    backgroundColor: '#87CEEB',
};
exports.game = new Phaser.Game(MainSceneConfig);


/***/ }),

/***/ "./src/menu.ts":
/*!*********************!*\
  !*** ./src/menu.ts ***!
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
exports.Menu = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
var MenuSceneConfig = {
    active: false,
    visible: false,
    key: 'Menu',
};
var Menu = /** @class */ (function (_super) {
    __extends(Menu, _super);
    function Menu() {
        return _super.call(this, MenuSceneConfig) || this;
    }
    Menu.prototype.preload = function () {
        this.load.spritesheet('b_karma_down', 'assets/sprites/ss_button_red.png', { frameWidth: 60, frameHeight: 60 });
        this.load.spritesheet('b_karma_up', 'assets/sprites/ss_button_green.png', { frameWidth: 60, frameHeight: 60 });
    };
    Menu.prototype.create = function () {
        this.buttons = Array();
        var btn = new button_1.Button(this, 300, 300, 'b_karma_up', 0);
        btn.link_func(function () { return console.log("Button click!"); });
        this.buttons.push(btn);
        this.add.existing(this.buttons[0]);
    };
    Menu.prototype.update = function () {
        this.buttons.forEach(function (elem) { elem.update(this); }, this);
    };
    return Menu;
}(Phaser.Scene));
exports.Menu = Menu;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2FybWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFB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Q0FBQyxZQUFZLEVBQUUsb0NBQW9DLEVBQUUsRUFBQyxVQUFVLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO0lBQ2pILENBQUM7SUFFTSxxQkFBTSxHQUFiO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEVBQVUsQ0FBQztRQUMvQixJQUFJLEdBQUcsR0FBWSxJQUFJLGVBQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDLFNBQVMsQ0FBQyxjQUFNLGNBQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLEVBQTVCLENBQTRCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVNLHFCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFTLElBQUksSUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLENBdkJ5QixNQUFNLENBQUMsS0FBSyxHQXVCckM7QUF2Qlksb0JBQUkiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZXtcclxuICAgIHByaXZhdGUgaXNfaW4gOiBCb29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpc19jbGlja2VkIDogQm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSA6IFBoYXNlci5TY2VuZSwgeCA6IG51bWJlciwgeSA6IG51bWJlciwgaWQgOiBzdHJpbmcsIGZyYW1lIDogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgaWQsIGZyYW1lKTtcclxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5pc19pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNfY2xpY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyZG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5pc19jbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMik7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgIHRoaXMuaXNfaW4gPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5pc19jbGlja2VkID8gdGhpcy5zZXRGcmFtZSgyKSA6IHRoaXMuc2V0RnJhbWUoMSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgdGhpcy5pc19pbiA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlua19mdW5jKGNhbGxiYWNrIDogRnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJ1cCcsICgpID0+IHsgaWYodGhpcy5pc19jbGlja2VkKXtjYWxsYmFjaygpfTsgdGhpcy5pc19jbGlja2VkID0gZmFsc2U7IHRoaXMuc2V0RnJhbWUoMSl9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHNjZW5lIDogUGhhc2VyLlNjZW5lKXtcclxuICAgICAgICBpZihzY2VuZS5pbnB1dC5hY3RpdmVQb2ludGVyLmxlZnRCdXR0b25SZWxlYXNlZCgpKXtcclxuICAgICAgICAgICAgaWYodGhpcy5pc19pbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEthcm1he1xyXG4gICAgcHJpdmF0ZSBpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICBwcml2YXRlIGthcm1hIDogaW50ZWdlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUgOiBQaGFzZXIuU2NlbmUpe1xyXG4gICAgICAgIHRoaXMuaW1nID0gc2NlbmUuYWRkLnNwcml0ZSgzMzMsIDMzMywgJ2thcm1hJykuc2V0T3JpZ2luKDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmVsb2FkKHNjZW5lIDogUGhhc2VyLlNjZW5lKXtcclxuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdrYXJtYScsICdhc3NldHMvc3ByaXRlcy9rYXJtYV9lYXJ0aC5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FkZCBvciBzdWJzdHJhY3Qga2FybWFcclxuICAgIHB1YmxpYyBtb2RpZnlfa2FybWEodmFsOiBpbnRlZ2VyKXtcclxuICAgICAgICB0aGlzLmthcm1hICs9IHZhbDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5rYXJtYSA+IDk5KXtcclxuICAgICAgICAgICAgdGhpcy5rYXJtYSA9IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMua2FybWEgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5rYXJtYSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGthcm1hIHR5cGVcclxuICAgIHB1YmxpYyBnZXRfa2FybWFfbGV2ZWwoKXtcclxuICAgICAgICAvKlxyXG4gICAgICAgIDAgPSBWZXJ5IEJhZCBLYXJtYVxyXG4gICAgICAgIDEgPSBCYWQgS2FybWFcclxuICAgICAgICAyID0gTmV1dHJhbCBLYXJtYVxyXG4gICAgICAgIDMgPSBHb29kIEthcm1hXHJcbiAgICAgICAgNCA9IFZlcnkgR29vZCBLYXJtYVxyXG4gICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5rYXJtYS8yMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuaW1nLnNldFBvc2l0aW9uKHRoaXMua2FybWEsIHRoaXMua2FybWEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0X2thcm1hX2xldmVsKCkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEthcm1hIH0gZnJvbSAnLi9rYXJtYSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vbWVudSc7XHJcblxyXG5jb25zdCBzY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICBhY3RpdmU6IGZhbHNlLFxyXG4gIHZpc2libGU6IGZhbHNlLFxyXG4gIGtleTogJ0dhbWUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVTY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgcHJpdmF0ZSBzcXVhcmU6IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgJiB7IGJvZHk6IFBoYXNlci5QaHlzaWNzLkFyY2FkZS5Cb2R5IH07XHJcbiAgcHJpdmF0ZSBrZWs6IFBoYXNlci5Tb3VuZC5CYXNlU291bmQgJiB7fTtcclxuICBwcml2YXRlIGthcm1hOiBLYXJtYSAmIHt9O1xyXG4gIHByaXZhdGUgYl9rYXJtYV91cDogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICBwcml2YXRlIGJfa2FybWFfdXBfZG9zOiBCdXR0b24gJiB7fTtcclxuIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoc2NlbmVDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZWxvYWQgKCl7XHJcbiAgICB0aGlzLmxvYWQuc2V0Q09SUyhcIkFub255bW91c1wiKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygna2VrJywgJ2Fzc2V0cy9tdXNpYy9rZWsubXAzJyk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfdm9sdW1lJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX3ZvbHVtZW4ucG5nJywge2ZyYW1lV2lkdGg6IDYwLCBmcmFtZUhlaWdodDogNDV9KTtcclxuICAgIEthcm1hLnByZWxvYWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY3JlYXRlKCkge1xyXG4gICAgdGhpcy5rYXJtYSA9IG5ldyBLYXJtYSh0aGlzKTtcclxuICAgIHRoaXMuc3F1YXJlID0gdGhpcy5hZGQucmVjdGFuZ2xlKDQwMCwgNDAwLCAxMDAsIDEwMCwgMHhGRkZGRkYpIGFzIGFueTtcclxuICAgIHRoaXMucGh5c2ljcy5hZGQuZXhpc3RpbmcodGhpcy5zcXVhcmUpO1xyXG4gICAgdGhpcy5rZWsgPSB0aGlzLnNvdW5kLmFkZCgna2VrJyk7XHJcbiAgfVxyXG4gXHJcbiAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgIGlmKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5sZWZ0QnV0dG9uRG93bigpKXtcclxuICAgICAgdGhpcy5rZWsucGxheSgpO1xyXG4gICAgICB0aGlzLmthcm1hLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLm1pZGRsZUJ1dHRvbkRvd24oKSl7XHJcbiAgICAgIHRoaXMuc2NlbmUuc3RhcnQoJ01lbnUnKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IE1haW5TY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLkNvcmUuR2FtZUNvbmZpZyA9IHtcclxuICB0aXRsZTogJ1NhbXBsZScsXHJcbiBcclxuICB0eXBlOiBQaGFzZXIuQ0FOVkFTLFxyXG4gXHJcbiAgc2NhbGU6IHtcclxuICAgIHBhcmVudDogJ2NvbnRlbnQnLFxyXG4gICAgbW9kZTogUGhhc2VyLlNjYWxlLkZJVCxcclxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIH0sXHJcbiAgXHJcbiAgc2NlbmU6IFsgR2FtZVNjZW5lLCBNZW51IF0sXHJcbiBcclxuICBwaHlzaWNzOiB7XHJcbiAgICBkZWZhdWx0OiAnYXJjYWRlJyxcclxuICAgIGFyY2FkZToge1xyXG4gICAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIH0sXHJcbiAgfSxcclxuIFxyXG4gIHBhcmVudDogJ2dhbWUnLFxyXG4gIGJhY2tncm91bmRDb2xvcjogJyM4N0NFRUInLFxyXG59O1xyXG4gXHJcbmV4cG9ydCBjb25zdCBnYW1lID0gbmV3IFBoYXNlci5HYW1lKE1haW5TY2VuZUNvbmZpZyk7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuXHJcbmNvbnN0IE1lbnVTY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ01lbnUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBidXR0b25zIDogQXJyYXk8QnV0dG9uPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKE1lbnVTY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfa2FybWFfZG93bicsICdhc3NldHMvc3ByaXRlcy9zc19idXR0b25fcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA2MCwgZnJhbWVIZWlnaHQ6IDYwfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdiX2thcm1hX3VwJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX2J1dHRvbl9ncmVlbi5wbmcnLCB7ZnJhbWVXaWR0aDogNjAsIGZyYW1lSGVpZ2h0OiA2MH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheTxCdXR0b24+KCk7XHJcbiAgICAgICAgdmFyIGJ0biA6IEJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcywgMzAwLCAzMDAsICdiX2thcm1hX3VwJywgMCk7XHJcbiAgICAgICAgYnRuLmxpbmtfZnVuYygoKSA9PiBjb25zb2xlLmxvZyhcIkJ1dHRvbiBjbGljayFcIikpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ0bik7XHJcbiAgICAgICAgdGhpcy5hZGQuZXhpc3RpbmcodGhpcy5idXR0b25zWzBdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7ZWxlbS51cGRhdGUodGhpcyl9LCB0aGlzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=