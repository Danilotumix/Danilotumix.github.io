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
        this.img.setPosition(this.karma, this.karma);
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
        this.load.setCORS("Anonymous");
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
        if (this.input.activePointer.leftButtonDown()) {
            this.kek.play();
            this.karma.update();
            //this.square.setPosition(this.input.activePointer.x, this.input.activePointer.y);
        }
        if (this.input.activePointer.middleButtonDown()) {
        }
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
    parent: 'game',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9ob3Qgc3luYyBub25yZWN1cnNpdmUgXlxcLlxcL2xvZyQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMva2FybWEudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RpdGxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlD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QUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUMsR0FBRyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxjQUFNLFlBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxzQkFBTSxHQUFiO0lBQ0EsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLENBdkIwQixNQUFNLENBQUMsS0FBSyxHQXVCdEM7QUF2Qlksc0JBQUsiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbMCxcInZlbmRvcnNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiaW1wb3J0ICogYXMgUGhhc2VyIGZyb20gJ3BoYXNlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLlNwcml0ZXtcclxuICAgIHByaXZhdGUgaXNfaW4gOiBCb29sZWFuO1xyXG4gICAgcHJpdmF0ZSBpc19jbGlja2VkIDogQm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY2VuZSA6IFBoYXNlci5TY2VuZSwgeCA6IG51bWJlciwgeSA6IG51bWJlciwgaWQgOiBzdHJpbmcsIGZyYW1lIDogbnVtYmVyKXtcclxuICAgICAgICBzdXBlcihzY2VuZSwgeCwgeSwgaWQsIGZyYW1lKTtcclxuICAgICAgICB0aGlzLnNldEludGVyYWN0aXZlKCk7XHJcbiAgICAgICAgdGhpcy5pc19pbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNfY2xpY2tlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyZG93bicsIGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5pc19jbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zZXRGcmFtZSgyKTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIFxyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJvdmVyJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX2luID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc19jbGlja2VkID8gdGhpcy5zZXRGcmFtZSgyKSA6IHRoaXMuc2V0RnJhbWUoMSk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICBcclxuICAgICAgICB0aGlzLm9uKCdwb2ludGVyb3V0JywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmlzX2luID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMCk7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxpbmtfZnVuYyhjYWxsYmFjazogRnVuY3Rpb24pe1xyXG4gICAgICAgIHRoaXMub24oJ3BvaW50ZXJ1cCcsICgpID0+IHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc19jbGlja2VkKXtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pc19jbGlja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RnJhbWUoMSlcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKHNjZW5lIDogUGhhc2VyLlNjZW5lKXtcclxuICAgICAgICBpZihzY2VuZS5pbnB1dC5hY3RpdmVQb2ludGVyLmxlZnRCdXR0b25SZWxlYXNlZCgpKXtcclxuICAgICAgICAgICAgaWYodGhpcy5pc19pbiA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzX2NsaWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEthcm1he1xyXG4gICAgcHJpdmF0ZSBpbWc6IFBoYXNlci5HYW1lT2JqZWN0cy5TcHJpdGU7XHJcbiAgICBwcml2YXRlIGthcm1hIDogaW50ZWdlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3Ioc2NlbmUgOiBQaGFzZXIuU2NlbmUpe1xyXG4gICAgICAgIHRoaXMuaW1nID0gc2NlbmUuYWRkLnNwcml0ZSgzMzMsIDMzMywgJ2thcm1hJykuc2V0T3JpZ2luKDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBwcmVsb2FkKHNjZW5lIDogUGhhc2VyLlNjZW5lKXtcclxuICAgICAgICBzY2VuZS5sb2FkLmltYWdlKCdrYXJtYScsICdhc3NldHMvc3ByaXRlcy9rYXJtYV9lYXJ0aC5wbmcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0FkZCBvciBzdWJzdHJhY3Qga2FybWFcclxuICAgIHB1YmxpYyBtb2RpZnlfa2FybWEodmFsOiBpbnRlZ2VyKXtcclxuICAgICAgICB0aGlzLmthcm1hICs9IHZhbDtcclxuXHJcbiAgICAgICAgaWYodGhpcy5rYXJtYSA+IDk5KXtcclxuICAgICAgICAgICAgdGhpcy5rYXJtYSA9IDk5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMua2FybWEgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5rYXJtYSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vR2V0IGthcm1hIHR5cGVcclxuICAgIHB1YmxpYyBnZXRfa2FybWFfbGV2ZWwoKXtcclxuICAgICAgICAvKlxyXG4gICAgICAgIDAgPSBWZXJ5IEJhZCBLYXJtYVxyXG4gICAgICAgIDEgPSBCYWQgS2FybWFcclxuICAgICAgICAyID0gTmV1dHJhbCBLYXJtYVxyXG4gICAgICAgIDMgPSBHb29kIEthcm1hXHJcbiAgICAgICAgNCA9IFZlcnkgR29vZCBLYXJtYVxyXG4gICAgICAgICovXHJcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy5rYXJtYS8yMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldF9rYXJtYV9zY29yZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLmthcm1hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKXtcclxuICAgICAgICB0aGlzLmltZy5zZXRQb3NpdGlvbih0aGlzLmthcm1hLCB0aGlzLmthcm1hKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBLYXJtYSB9IGZyb20gJy4va2FybWEnO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XHJcbmltcG9ydCB7IE1lbnUgfSBmcm9tICcuL21lbnUnO1xyXG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4vdGl0bGUnO1xyXG5cclxuY29uc3QgTWFpblNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gIGFjdGl2ZTogZmFsc2UsXHJcbiAgdmlzaWJsZTogZmFsc2UsXHJcbiAga2V5OiAnR2FtZScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZVNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICBwcml2YXRlIHNxdWFyZTogUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSAmIHsgYm9keTogUGhhc2VyLlBoeXNpY3MuQXJjYWRlLkJvZHkgfTtcclxuICBwcml2YXRlIGtlazogUGhhc2VyLlNvdW5kLkJhc2VTb3VuZDtcclxuICBwcml2YXRlIGthcm1hOiBLYXJtYTtcclxuICBwcml2YXRlIGJ1dHRvbjogQnV0dG9uO1xyXG4gXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcihNYWluU2NlbmVDb25maWcpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHByZWxvYWQgKCl7XHJcbiAgICB0aGlzLmxvYWQuc2V0Q09SUyhcIkFub255bW91c1wiKTtcclxuICAgIHRoaXMubG9hZC5hdWRpbygna2VrJywgJ2Fzc2V0cy9tdXNpYy9rZWsubXAzJyk7XHJcbiAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfdm9sdW1lJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX3ZvbHVtZW4ucG5nJywge2ZyYW1lV2lkdGg6IDYwLCBmcmFtZUhlaWdodDogNDV9KTtcclxuICAgIEthcm1hLnByZWxvYWQodGhpcyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgYmNsaWNrKCl7XHJcbiAgICB0aGlzLnNjZW5lLnN0YXJ0KCdNZW51JywgeyBrYXJtYTogdGhpcy5rYXJtYSB9KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjcmVhdGUoKSB7XHJcbiAgICB0aGlzLmJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcywgNDAsIDQwLCAnYl92b2x1bWUnLCAwKTtcclxuICAgIC8vdGhpcy5idXR0b24ubGlua19mdW5jKCgpID0+IHt0aGlzLnNjZW5lLnN0YXJ0KCdNZW51JywgeyBrYXJtYTogdGhpcy5rYXJtYSB9KTt9KTtcclxuICAgIHRoaXMuYnV0dG9uLmxpbmtfZnVuYygoKSA9PiB0aGlzLmJjbGljaygpKTtcclxuICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuYnV0dG9uKTtcclxuICAgIHRoaXMua2FybWEgPSBuZXcgS2FybWEodGhpcyk7XHJcbiAgICB0aGlzLnNxdWFyZSA9IHRoaXMuYWRkLnJlY3RhbmdsZSg0MDAsIDQwMCwgMTAwLCAxMDAsIDB4MDBGRjAwKSBhcyBhbnk7XHJcbiAgICB0aGlzLnBoeXNpY3MuYWRkLmV4aXN0aW5nKHRoaXMuc3F1YXJlKTtcclxuICAgIHRoaXMua2VrID0gdGhpcy5zb3VuZC5hZGQoJ2tlaycpO1xyXG4gIH1cclxuIFxyXG4gIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICBpZih0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIubGVmdEJ1dHRvbkRvd24oKSl7XHJcbiAgICAgIHRoaXMua2VrLnBsYXkoKTtcclxuICAgICAgdGhpcy5rYXJtYS51cGRhdGUoKTtcclxuICAgICAgLy90aGlzLnNxdWFyZS5zZXRQb3NpdGlvbih0aGlzLmlucHV0LmFjdGl2ZVBvaW50ZXIueCwgdGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLnkpO1xyXG4gICAgfVxyXG4gICAgaWYodGhpcy5pbnB1dC5hY3RpdmVQb2ludGVyLm1pZGRsZUJ1dHRvbkRvd24oKSl7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBHYW1lQ29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnID0ge1xyXG4gIHRpdGxlOiAnU2FtcGxlJyxcclxuIFxyXG4gIHR5cGU6IFBoYXNlci5DQU5WQVMsXHJcbiBcclxuICBzY2FsZToge1xyXG4gICAgcGFyZW50OiAnY29udGVudCcsXHJcbiAgICBtb2RlOiBQaGFzZXIuU2NhbGUuRklULFxyXG4gICAgd2lkdGg6IDE5MjAsXHJcbiAgICBoZWlnaHQ6IDEwODAsXHJcbiAgfSxcclxuICBcclxuICBzY2VuZTogWyBUaXRsZSwgR2FtZVNjZW5lLCBNZW51ICBdLFxyXG4gXHJcbiAgcGh5c2ljczoge1xyXG4gICAgZGVmYXVsdDogJ2FyY2FkZScsXHJcbiAgICBhcmNhZGU6IHtcclxuICAgICAgZGVidWc6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiBcclxuICBwYXJlbnQ6ICdnYW1lJyxcclxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjODdDRUVCJyxcclxufTtcclxuIFxyXG5leHBvcnQgY29uc3QgZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZShHYW1lQ29uZmlnKTsiLCJpbXBvcnQgKiBhcyBQaGFzZXIgZnJvbSAncGhhc2VyJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24nO1xyXG5pbXBvcnQgeyBLYXJtYSB9IGZyb20gJy4va2FybWEnO1xyXG5cclxuY29uc3QgTWVudVNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnTWVudScsXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgTWVudSBleHRlbmRzIFBoYXNlci5TY2VuZSB7XHJcbiAgICBwcml2YXRlIGJ1dHRvbnMgOiBBcnJheTxCdXR0b24+O1xyXG4gICAgcHJpdmF0ZSB0ZXh0IDogUGhhc2VyLkdhbWVPYmplY3RzLlRleHQ7XHJcbiAgICBwcml2YXRlIGthcm1hOiBLYXJtYTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKE1lbnVTY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2Jfa2FybWFfZG93bicsICdhc3NldHMvc3ByaXRlcy9zc19idXR0b25fcmVkLnBuZycsIHtmcmFtZVdpZHRoOiA2MCwgZnJhbWVIZWlnaHQ6IDYwfSk7XHJcbiAgICAgICAgdGhpcy5sb2FkLnNwcml0ZXNoZWV0KCdiX2thcm1hX3VwJywgJ2Fzc2V0cy9zcHJpdGVzL3NzX2J1dHRvbl9ncmVlbi5wbmcnLCB7ZnJhbWVXaWR0aDogNjAsIGZyYW1lSGVpZ2h0OiA2MH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbml0KGRhdGEpe1xyXG4gICAgICAgIHRoaXMua2FybWEgPSBkYXRhLmthcm1hO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGUoKXtcclxuICAgICAgICB0aGlzLnRleHQgPSB0aGlzLmFkZC50ZXh0KDAsIDAsIFwiS2FybWE6IFwiICsgdGhpcy5rYXJtYS5nZXRfa2FybWFfbGV2ZWwoKS50b1N0cmluZygpLCB7IGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnIH0pO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5PEJ1dHRvbj4oKTtcclxuICAgICAgICB2YXIgYnRuIDogQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLCAzMDAsIDMwMCwgJ2Jfa2FybWFfdXAnLCAwKTtcclxuICAgICAgICBidG4ubGlua19mdW5jKCgpID0+IHt0aGlzLmthcm1hLm1vZGlmeV9rYXJtYSgxMCk7IHRoaXMudGV4dC5zZXRUZXh0KFwiS2FybWE6IFwiICsgdGhpcy5rYXJtYS5nZXRfa2FybWFfc2NvcmUoKS50b1N0cmluZygpKTt9KTtcclxuICAgICAgICB0aGlzLmJ1dHRvbnMucHVzaChidG4pO1xyXG4gICAgICAgIHZhciBidG4gOiBCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMsIDUwMCwgNTAwLCAnYl9rYXJtYV9kb3duJywgMCk7XHJcbiAgICAgICAgYnRuLmxpbmtfZnVuYygoKSA9PiB7dGhpcy5rYXJtYS5tb2RpZnlfa2FybWEoLTEwKTsgdGhpcy50ZXh0LnNldFRleHQoXCJLYXJtYTogXCIgKyB0aGlzLmthcm1hLmdldF9rYXJtYV9zY29yZSgpLnRvU3RyaW5nKCkpO30pO1xyXG4gICAgICAgIHRoaXMuYnV0dG9ucy5wdXNoKGJ0bik7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7dGhpcy5hZGQuZXhpc3RpbmcoZWxlbSl9LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCl7XHJcbiAgICAgICAgdGhpcy5idXR0b25zLmZvckVhY2goZnVuY3Rpb24oZWxlbSl7ZWxlbS51cGRhdGUodGhpcyl9LCB0aGlzKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIFBoYXNlciBmcm9tICdwaGFzZXInO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbic7XHJcblxyXG5jb25zdCBUaXRsZVNjZW5lQ29uZmlnOiBQaGFzZXIuVHlwZXMuU2NlbmVzLlNldHRpbmdzQ29uZmlnID0ge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAga2V5OiAnVGl0bGUnLFxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpdGxlIGV4dGVuZHMgUGhhc2VyLlNjZW5lIHtcclxuICAgIHByaXZhdGUgc3RhcnRfYnV0dG9uIDogQnV0dG9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoVGl0bGVTY2VuZUNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHByZWxvYWQoKXtcclxuICAgICAgICB0aGlzLmxvYWQuaW1hZ2UoJ3RpdGxlJywgJ2Fzc2V0cy90ZXN0L3RpdGxlLnBuZycpO1xyXG4gICAgICAgIHRoaXMubG9hZC5pbWFnZSgnY2xvdWRzJywgJ2Fzc2V0cy90ZXN0L2Nsb3Vkcy5wbmcnKTtcclxuICAgICAgICB0aGlzLmxvYWQuc3ByaXRlc2hlZXQoJ2J1dHRvbicsICdhc3NldHMvdGVzdC9zX2J1dHRvbi5wbmcnLCB7ZnJhbWVXaWR0aDogOTk3LCBmcmFtZUhlaWdodDogMTY4fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZSgpe1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLzIsdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0LzIsJ2Nsb3VkcycpO1xyXG4gICAgICAgIHRoaXMuYWRkLmltYWdlKHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLzIsdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0LzQsJ3RpdGxlJyk7XHJcbiAgICAgICAgdGhpcy5zdGFydF9idXR0b24gPSBuZXcgQnV0dG9uKHRoaXMsIHRoaXMuY2FtZXJhcy5tYWluLndpZHRoLzIsdGhpcy5jYW1lcmFzLm1haW4uaGVpZ2h0LzEuNSwgJ2J1dHRvbicsIDApO1xyXG4gICAgICAgIHRoaXMuc3RhcnRfYnV0dG9uLmxpbmtfZnVuYygoKSA9PiB0aGlzLnNjZW5lLnN0YXJ0KCdHYW1lJykpO1xyXG4gICAgICAgIHRoaXMuYWRkLmV4aXN0aW5nKHRoaXMuc3RhcnRfYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCl7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9