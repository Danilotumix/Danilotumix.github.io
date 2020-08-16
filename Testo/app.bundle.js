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
        this.on('pointerup', function () {
            if (_this.is_clicked) {
                callback();
            }
            _this.is_clicked = false;
            _this.setFrame(1);
        });
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
    Karma.prototype.get_karma_score = function () {
        return this.karma;
    };
    Karma.prototype.update = function () {
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
var button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
var menu_1 = __webpack_require__(/*! ./menu */ "./src/menu.ts");
var title_1 = __webpack_require__(/*! ./title */ "./src/title.ts");
var MainSceneConfig = {
    active: false,
    visible: false,
    key: 'Game',
};
var GameScene = /** @class */ (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        return _super.call(this, MainSceneConfig) || this;
    }
    GameScene.prototype.preload = function () {
        this.load.audio('kek', 'assets/music/kek.mp3');
        this.load.spritesheet('b_volume', 'assets/sprites/ss_volumen.png', { frameWidth: 60, frameHeight: 45 });
        karma_1.Karma.preload(this);
    };
    GameScene.prototype.bclick = function () {
        this.scene.start('Menu', { karma: this.karma });
    };
    GameScene.prototype.create = function () {
        var _this = this;
        this.button = new button_1.Button(this, 40, 40, 'b_volume', 0);
        //this.button.link_func(() => {this.scene.start('Menu', { karma: this.karma });});
        this.button.link_func(function () { return _this.bclick(); });
        this.add.existing(this.button);
        this.karma = new karma_1.Karma(this);
        this.square = this.add.rectangle(400, 400, 100, 100, 0x00FF00);
        this.physics.add.existing(this.square);
        this.kek = this.sound.add('kek');
    };
    GameScene.prototype.update = function () {
        if (!(this.input.activePointer.y >= 0 &&
            this.input.activePointer.y <= this.game.canvas.height &&
            this.input.activePointer.x >= 0 &&
            this.input.activePointer.x <= this.game.canvas.width)) {
            return;
        }
        if (this.input.activePointer.leftButtonDown()) {
            console.log(this.game.canvas.height.toString());
            this.kek.play();
        }
        this.square.body.setVelocity(this.input.activePointer.x - this.square.x, this.input.activePointer.y - this.square.y);
        this.button.update(this);
    };
    return GameScene;
}(Phaser.Scene));
exports.GameScene = GameScene;
var GameConfig = {
    title: 'Sample',
    type: Phaser.CANVAS,
    scale: {
        parent: 'content',
        mode: Phaser.Scale.FIT,
        width: 1920,
        height: 1080,
    },
    scene: [title_1.Title, GameScene, menu_1.Menu],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    parent: 'title',
    backgroundColor: '#87CEEB',
};
exports.game = new Phaser.Game(GameConfig);


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
    Menu.prototype.init = function (data) {
        this.karma = data.karma;
    };
    Menu.prototype.create = function () {
        var _this = this;
        this.text = this.add.text(0, 0, "Karma: " + this.karma.get_karma_level().toString(), { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        this.buttons = Array();
        var btn = new button_1.Button(this, 300, 300, 'b_karma_up', 0);
        btn.link_func(function () { _this.karma.modify_karma(10); _this.text.setText("Karma: " + _this.karma.get_karma_score().toString()); });
        this.buttons.push(btn);
        var btn = new button_1.Button(this, 500, 500, 'b_karma_down', 0);
        btn.link_func(function () { _this.karma.modify_karma(-10); _this.text.setText("Karma: " + _this.karma.get_karma_score().toString()); });
        this.buttons.push(btn);
        this.buttons.forEach(function (elem) { this.add.existing(elem); }, this);
    };
    Menu.prototype.update = function () {
        this.buttons.forEach(function (elem) { elem.update(this); }, this);
    };
    return Menu;
}(Phaser.Scene));
exports.Menu = Menu;


/***/ }),

/***/ "./src/title.ts":
/*!**********************!*\
  !*** ./src/title.ts ***!
  \**********************/
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
exports.Title = void 0;
var Phaser = __webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js");
var button_1 = __webpack_require__(/*! ./button */ "./src/button.ts");
var TitleSceneConfig = {
    active: false,
    visible: false,
    key: 'Title',
};
var Title = /** @class */ (function (_super) {
    __extends(Title, _super);
    function Title() {
        return _super.call(this, TitleSceneConfig) || this;
    }
    Title.prototype.preload = function () {
        this.load.setCORS("Anonymous");
        this.load.image('title', 'assets/test/title.png');
        this.load.image('clouds', 'assets/test/clouds.png');
        this.load.spritesheet('button', 'assets/test/s_button.png', { frameWidth: 997, frameHeight: 168 });
    };
    Title.prototype.create = function () {
        var _this = this;
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'clouds');
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 4, 'title');
        this.start_button = new button_1.Button(this, this.cameras.main.width / 2, this.cameras.main.height / 1.5, 'button', 0);
        this.start_button.link_func(function () { return _this.scene.start('Game'); });
        this.add.existing(this.start_button);
    };
    Title.prototype.update = function () {
        this.start_button.update(this);
    };
    return Title;
}(Phaser.Scene));
exports.Title = Title;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2FybWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QUFDO0lBRU0sc0JBQU0sR0FBYjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGNBQU0sWUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVNLHNCQUFNLEdBQWI7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQ0F6QjBCLE1BQU0sQ0FBQyxLQUFLLEdBeUJ0QztBQXpCWSxzQkFBSyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFswLFwidmVuZG9yc1wiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuU3ByaXRle1xyXG4gICAgcHJpdmF0ZSBpc19pbiA6IEJvb2xlYW47XHJcbiAgICBwcml2YXRlIGlzX2NsaWNrZWQgOiBCb29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjZW5lIDogUGhhc2VyLlNjZW5lLCB4IDogbnVtYmVyLCB5IDogbnVtYmVyLCBpZCA6IHN0cmluZywgZnJhbWUgOiBudW1iZXIpe1xyXG4gICAgICAgIHN1cGVyKHNjZW5lLCB4LCB5LCBpZCwgZnJhbWUpO1xyXG4gICAgICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcclxuICAgICAgICB0aGlzLmlzX2luID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc19jbGlja2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJkb3duJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX2NsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldEZyYW1lKDIpO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmlzX2NsaWNrZWQgPyB0aGlzLnNldEZyYW1lKDIpIDogdGhpcy5zZXRGcmFtZSgxKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdXQnLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfaW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgwKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlua19mdW5jKGNhbGxiYWNrOiBGdW5jdGlvbil7XHJcbiAgICAgICAgdGhpcy5vbigncG9pbnRlcnVwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzX2NsaWNrZWQpe1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzX2NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgxKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoc2NlbmUgOiBQaGFzZXIuU2NlbmUpe1xyXG4gICAgICAgIGlmKHNjZW5lLmlucHV0LmFjdGl2ZVBvaW50ZXIubGVmdEJ1dHRvblJlbGVhc2VkKCkpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzX2luID09IGZhbHNlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNfY2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgS2FybWF7XHJcbiAgICBwcml2YXRlIGltZzogUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZTtcclxuICAgIHByaXZhdGUga2FybWEgOiBpbnRlZ2VyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSA6IFBoYXNlci5TY2VuZSl7XHJcbiAgICAgICAgdGhpcy5pbWcgPSBzY2VuZS5hZGQuc3ByaXRlKDMzMywgMzMzLCAna2FybWEnKS5zZXRPcmlnaW4oMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIHByZWxvYWQoc2NlbmUgOiBQaGFzZXIuU2NlbmUpe1xyXG4gICAgICAgIHNjZW5lLmxvYWQuaW1hZ2UoJ2thcm1hJywgJ2Fzc2V0cy9zcHJpdGVzL2thcm1hX2VhcnRoLnBuZycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQWRkIG9yIHN1YnN0cmFjdCBrYXJtYVxyXG4gICAgcHVibGljIG1vZGlmeV9rYXJtYSh2YWw6IGludGVnZXIpe1xyXG4gICAgICAgIHRoaXMua2FybWEgKz0gdmFsO1xyXG5cclxuICAgICAgICBpZih0aGlzLmthcm1hID4gOTkpe1xyXG4gICAgICAgICAgICB0aGlzLmthcm1hID0gOTk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5rYXJtYSA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLmthcm1hID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9HZXQga2FybWEgdHlwZVxyXG4gICAgcHVibGljIGdldF9rYXJtYV9sZXZlbCgpe1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgMCA9IFZlcnkgQmFkIEthcm1hXHJcbiAgICAgICAgMSA9IEJhZCBLYXJtYVxyXG4gICAgICAgIDIgPSBOZXV0cmFsIEthcm1hXHJcbiAgICAgICAgMyA9IEdvb2QgS2FybWFcclxuICAgICAgICA0ID0gVmVyeSBHb29kIEthcm1hXHJcbiAgICAgICAgKi9cclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcih0aGlzLmthcm1hLzIwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0X2thcm1hX3Njb3JlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2FybWE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpe1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEthcm1hIH0gZnJvbSAnLi9rYXJtYSc7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IHsgTWVudSB9IGZyb20gJy4vbWVudSc7XHJcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi90aXRsZSc7XHJcblxyXG5jb25zdCBNYWluU2NlbmVDb25maWc6IFBoYXNlci5UeXBlcy5TY2VuZXMuU2V0dGluZ3NDb25maWcgPSB7XHJcbiAgYWN0aXZlOiBmYWxzZSxcclxuICB2aXNpYmxlOiBmYWxzZSxcclxuICBrZXk6ICdHYW1lJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gIHByaXZhdGUgc3F1YXJlOiBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlICYgeyBib2R5OiBQaGFzZXIuUGh5c2ljcy5BcmNhZGUuQm9keSB9O1xyXG4gIHByaXZhdGUga2VrOiBQaGFzZXIuU291bmQuQmFzZVNvdW5kO1xyXG4gIHByaXZhdGUga2FybWE6IEthcm1hO1xyXG4gIHByaXZhdGUgYnV0dG9uOiBCdXR0b247XHJcbiBcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKE1haW5TY2VuZUNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgcHJlbG9hZCAoKXtcclxuICAgIHRoaXMubG9hZC5hdWRpbygna2VrJywgJ2Fzc2V0cy9tdXNpYy9rZWsubXAzJyk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfdm9sdW1lJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX3ZvbHVtZW4ucG5nJywge2ZyYW1lV2lkdGg6IDYwLCBmcmFtZUhlaWdodDogNDV9KTtcclxuICAgIEthcm1hLnByZWxvYWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmNsaWNrKCl7XHJcbiAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNZW51JywgeyBrYXJtYTogdGhpcy5rYXJtYSB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcywgNDAsIDQwLCAnYl92b2x1bWUnLCAwKTtcclxuICAgIC8vdGhpcy5idXR0b24ubGlua19mdW5jKCgpID0+IHt0aGlzLnNjZW5lLnN0YXJ0KCdNZW51JywgeyBrYXJtYTogdGhpcy5rYXJtYSB9KTt9KTtcclxuICAgIHRoaXMuYnV0dG9uLmxpbmtfZnVuYygoKSA9PiB0aGlzLmJjbGljaygpKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnV0dG9uKTtcclxuICAgIHRoaXMua2FybWEgPSBuZXcgS2FybWEodGhpcyk7XHJcbiAgICB0aGlzLnNxdWFyZSA9IHRoaXMuYWRkLnJlY3RhbmdsZSg0MDAsIDQwMCwgMTAwLCAxMDAsIDB4MDBGRjAwKSBhcyBhbnk7XHJcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMuc3F1YXJlKTtcclxuICAgIHRoaXMua2VrID0gdGhpcy5zb3VuZC5hZGQoJ2tlaycpO1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICBpZighKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55ID49IDAgJiZcclxuICAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkgPD0gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQgJiZcclxuICAgICAgICAgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnggPj0gMCAmJlxyXG4gICAgICAgICB0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueCA8PSB0aGlzLmdhbWUuY2FudmFzLndpZHRoKSl7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmKHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci5sZWZ0QnV0dG9uRG93bigpKXtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQudG9TdHJpbmcoKSk7XHJcbiAgICAgIHRoaXMua2VrLnBsYXkoKTtcclxuICAgIH1cclxuICAgIHRoaXMuc3F1YXJlLmJvZHkuc2V0VmVsb2NpdHkodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnggLSB0aGlzLnNxdWFyZS54LHRoaXMuaW5wdXQuYWN0aXZlUG9pbnRlci55IC0gdGhpcy5zcXVhcmUueSk7XHJcbiAgICB0aGlzLmJ1dHRvbi51cGRhdGUodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBHYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gIHRpdGxlOiAnU2FtcGxlJyxcclxuIFxyXG4gIHR5cGU6IFBoYXNlci5DQU5WQVMsXHJcbiBcclxuICBzY2FsZToge1xyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgd2lkdGg6IDE5MjAsXHJcbiAgICBoZWlnaHQ6IDEwODAsXHJcbiAgfSxcclxuICBcclxuICBzY2VuZTogWyBUaXRsZSwgR2FtZVNjZW5lLCBNZW51ICBdLFxyXG4gXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICBhcmNhZGU6IHtcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiBcclxuICBwYXJlbnQ6ICd0aXRsZScsXHJcbiAgYmFja2dyb3VuZENvbG9yOiAnIzg3Q0VFQicsXHJcbn07XHJcbiBcclxuZXhwb3J0IGNvbnN0IGdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoR2FtZUNvbmZpZyk7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uJztcclxuaW1wb3J0IHsgS2FybWEgfSBmcm9tICcuL2thcm1hJztcclxuXHJcbmNvbnN0IE1lbnVTY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ01lbnUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbnUgZXh0ZW5kcyBQaGFzZXIuU2NlbmUge1xyXG4gICAgcHJpdmF0ZSBidXR0b25zIDogQXJyYXk8QnV0dG9uPjtcclxuICAgIHByaXZhdGUgdGV4dCA6IFBoYXNlci5HYW1lT2JqZWN0cy5UZXh0O1xyXG4gICAgcHJpdmF0ZSBrYXJtYTogS2FybWE7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcihNZW51U2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdiX2thcm1hX2Rvd24nLCAnYXNzZXRzL3Nwcml0ZXMvc3NfYnV0dG9uX3JlZC5wbmcnLCB7ZnJhbWVXaWR0aDogNjAsIGZyYW1lSGVpZ2h0OiA2MH0pO1xyXG4gICAgICAgIHRoaXMubG9hZC5zcHJpdGVzaGVldCgnYl9rYXJtYV91cCcsICdhc3NldHMvc3ByaXRlcy9zc19idXR0b25fZ3JlZW4ucG5nJywge2ZyYW1lV2lkdGg6IDYwLCBmcmFtZUhlaWdodDogNjB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdChkYXRhKXtcclxuICAgICAgICB0aGlzLmthcm1hID0gZGF0YS5rYXJtYTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlKCl7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGhpcy5hZGQudGV4dCgwLCAwLCBcIkthcm1hOiBcIiArIHRoaXMua2FybWEuZ2V0X2thcm1hX2xldmVsKCkudG9TdHJpbmcoKSwgeyBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJyB9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheTxCdXR0b24+KCk7XHJcbiAgICAgICAgdmFyIGJ0biA6IEJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcywgMzAwLCAzMDAsICdiX2thcm1hX3VwJywgMCk7XHJcbiAgICAgICAgYnRuLmxpbmtfZnVuYygoKSA9PiB7dGhpcy5rYXJtYS5tb2RpZnlfa2FybWEoMTApOyB0aGlzLnRleHQuc2V0VGV4dChcIkthcm1hOiBcIiArIHRoaXMua2FybWEuZ2V0X2thcm1hX3Njb3JlKCkudG9TdHJpbmcoKSk7fSk7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLnB1c2goYnRuKTtcclxuICAgICAgICB2YXIgYnRuIDogQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLCA1MDAsIDUwMCwgJ2Jfa2FybWFfZG93bicsIDApO1xyXG4gICAgICAgIGJ0bi5saW5rX2Z1bmMoKCkgPT4ge3RoaXMua2FybWEubW9kaWZ5X2thcm1hKC0xMCk7IHRoaXMudGV4dC5zZXRUZXh0KFwiS2FybWE6IFwiICsgdGhpcy5rYXJtYS5nZXRfa2FybWFfc2NvcmUoKS50b1N0cmluZygpKTt9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaChidG4pO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe3RoaXMuYWRkLmV4aXN0aW5nKGVsZW0pfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW0pe2VsZW0udXBkYXRlKHRoaXMpfSwgdGhpcyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xyXG5cclxuY29uc3QgVGl0bGVTY2VuZUNvbmZpZzogUGhhc2VyLlR5cGVzLlNjZW5lcy5TZXR0aW5nc0NvbmZpZyA9IHtcclxuICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgIGtleTogJ1RpdGxlJyxcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXRsZSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIHN0YXJ0X2J1dHRvbiA6IEJ1dHRvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFRpdGxlU2NlbmVDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBwcmVsb2FkKCl7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNldENPUlMoXCJBbm9ueW1vdXNcIik7XHJcbiAgICAgICAgdGhpcy5sb2FkLmltYWdlKCd0aXRsZScsICdhc3NldHMvdGVzdC90aXRsZS5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ2Nsb3VkcycsICdhc3NldHMvdGVzdC9jbG91ZHMucG5nJyk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdidXR0b24nLCAnYXNzZXRzL3Rlc3Qvc19idXR0b24ucG5nJywge2ZyYW1lV2lkdGg6IDk5NywgZnJhbWVIZWlnaHQ6IDE2OH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aC8yLHRoaXMuY2FtZXJhcy5tYWluLmhlaWdodC8yLCdjbG91ZHMnKTtcclxuICAgICAgICB0aGlzLmFkZC5pbWFnZSh0aGlzLmNhbWVyYXMubWFpbi53aWR0aC8yLHRoaXMuY2FtZXJhcy5tYWluLmhlaWdodC80LCd0aXRsZScpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLCB0aGlzLmNhbWVyYXMubWFpbi53aWR0aC8yLHRoaXMuY2FtZXJhcy5tYWluLmhlaWdodC8xLjUsICdidXR0b24nLCAwKTtcclxuICAgICAgICB0aGlzLnN0YXJ0X2J1dHRvbi5saW5rX2Z1bmMoKCkgPT4gdGhpcy5zY2VuZS5zdGFydCgnR2FtZScpKTtcclxuICAgICAgICB0aGlzLmFkZC5leGlzdGluZyh0aGlzLnN0YXJ0X2J1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpe1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYnV0dG9uLnVwZGF0ZSh0aGlzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=