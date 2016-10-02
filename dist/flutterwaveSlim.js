/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var css = __webpack_require__(1); // jshint ignore:line

	var ngFlutterwave = __webpack_require__(14); // jshint ignore:line


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "flutterwave {\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  margin: 0;\n  font-size: 80.5%;\n  line-height: 1.6;\n  font-weight: 400;\n  color: #222;\n}\n\n\n flutterwave article,\n flutterwave aside,\n flutterwave details,\n flutterwave figcaption,\n flutterwave figure,\n flutterwave footer,\n flutterwave header,\n flutterwave hgroup,\n flutterwave main,\n flutterwave menu,\n flutterwave nav,\n flutterwave section,\n flutterwave summary {\n  display: block;\n}\n\n flutterwave audio,\n flutterwave canvas,\n flutterwave progress,\n flutterwave video {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\n flutterwave audio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n flutterwave [hidden],\n flutterwave template {\n  display: none;\n}\n\n flutterwave a {\n  background-color: transparent;\n}\n\n flutterwave a:active,\n flutterwave a:hover {\n  outline: 0;\n}\n\n flutterwave abbr[title] {\n  border-bottom: 1px dotted;\n}\n\n flutterwave b,\n flutterwave strong {\n  font-weight: bold;\n}\n\n flutterwave dfn {\n  font-style: italic;\n}\n\n flutterwave h1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n flutterwave mark {\n  background: #ff0;\n  color: #000;\n}\n\n flutterwave small {\n  font-size: 80%;\n}\n\n flutterwave sub,\n flutterwave sup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nflutterwave sup {\n  top: -0.5em;\n}\n\nflutterwave sub {\n  bottom: -0.25em;\n}\n\n flutterwave img {\n  border: 0;\n}\n\n flutterwave svg:not(:root) {\n  overflow: hidden;\n}\n\n flutterwave figure {\n  margin: 1em 40px;\n}\n\n flutterwave hr {\n  -moz-box-sizing: content-box;\n  box-sizing: content-box;\n  height: 0;\n}\n\n flutterwave pre {\n  overflow: auto;\n}\n\n flutterwave code,\n flutterwave kbd,\n flutterwave pre,\n flutterwave samp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\n flutterwave button,\n flutterwave input,\n flutterwave optgroup,\n flutterwave select,\n flutterwave textarea {\n  color: inherit; /* 1 */\n  font: inherit; /* 2 */\n  margin: 0; /* 3 */\n}\n\n flutterwave button {\n  overflow: visible;\n}\n\n flutterwave button,\n flutterwave select {\n  text-transform: none;\n}\n\n flutterwave button,\n flutterwave html input[type=\"button\"], /* 1 */\n flutterwave input[type=\"reset\"],\n flutterwave input[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n  cursor: pointer; /* 3 */\n}\n\n flutterwave button[disabled],\n flutterwave html input[disabled] {\n  cursor: default;\n}\n\n flutterwave button::-moz-focus-inner,\n flutterwave input::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n flutterwave input {\n  line-height: normal;\n}\n\n flutterwave input[type=\"checkbox\"],\n flutterwave input[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n flutterwave input[type=\"number\"]::-webkit-inner-spin-button,\n flutterwave input[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n flutterwave input[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  -moz-box-sizing: content-box;\n  -webkit-box-sizing: content-box; /* 2 */\n  box-sizing: content-box;\n}\n\n flutterwave input[type=\"search\"]::-webkit-search-cancel-button,\n flutterwave input[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n flutterwave fieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n flutterwave legend {\n  border: 0; /* 1 */\n  padding: 0; /* 2 */\n}\n\n flutterwave textarea {\n  overflow: auto;\n}\n\n flutterwave optgroup {\n  font-weight: bold;\n}\n\n flutterwave table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nflutterwave td,\nflutterwave th {\n  padding: 0;\n}\n\nflutterwave h1, flutterwave h2, flutterwave h3, flutterwave h4, flutterwave h5, flutterwave h6 {\n  margin-top: 0;\n  margin-bottom: 2rem;\n  font-weight: 300; }\n  flutterwave h1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\n  flutterwave h2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\n  flutterwave h3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\n  flutterwave h4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\n  flutterwave h5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\n  flutterwave h6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\n\n  @media (min-width: 550px) {\n    flutterwave h1 { font-size: 5.0rem; }\n    flutterwave h2 { font-size: 4.2rem; }\n    flutterwave h3 { font-size: 3.6rem; }\n    flutterwave h4 { font-size: 3.0rem; }\n    flutterwave h5 { font-size: 2.4rem; }\n    flutterwave h6 { font-size: 1.5rem; }\n  }\n\n  flutterwave p {\n    margin-top: 0; }\n\n\nflutterwave a {\n  color: #1EAEDB; }\n  flutterwave a:hover {\n    color: #0FA0CE; }\n\nflutterwave .button,\nflutterwave button,\nflutterwave input[type=\"submit\"],\nflutterwave input[type=\"reset\"],\nflutterwave input[type=\"button\"] {\n  display: inline-block;\n  height: 38px;\n  padding: 0 30px;\n  color: #555;\n  text-align: center;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 38px;\n  letter-spacing: .1rem;\n  text-transform: uppercase;\n  text-decoration: none;\n  white-space: nowrap;\n  background-color: transparent;\n  border-radius: 4px;\n  border: 1px solid #bbb;\n  cursor: pointer;\n  box-sizing: border-box; }\n  flutterwave .button:hover,\n  flutterwave button:hover,\n  flutterwave input[type=\"submit\"]:hover,\n  flutterwave input[type=\"reset\"]:hover,\n  flutterwave input[type=\"button\"]:hover,\n  flutterwave .button:focus,\n  flutterwave button:focus,\n  flutterwave input[type=\"submit\"]:focus,\n  flutterwave input[type=\"reset\"]:focus,\n  flutterwave input[type=\"button\"]:focus {\n    color: #333;\n    border-color: #888;\n    outline: 0; }\n    flutterwave .button.button-primary,\n    flutterwave button.button-primary,\n    flutterwave input[type=\"submit\"].button-primary,\n    flutterwave input[type=\"reset\"].button-primary,\n    flutterwave input[type=\"button\"].button-primary {\n      color: #FFF;\n      background-color: rgb(0,109,199);\n      border-color: rgb(0,80,148); }\n      flutterwave .button.button-primary:hover,\n      flutterwave button.button-primary:hover,\n      flutterwave input[type=\"submit\"].button-primary:hover,\n      flutterwave input[type=\"reset\"].button-primary:hover,\n      flutterwave input[type=\"button\"].button-primary:hover,\n      flutterwave .button.button-primary:focus,\n      flutterwave button.button-primary:focus,\n      flutterwave input[type=\"submit\"].button-primary:focus,\n      flutterwave input[type=\"reset\"].button-primary:focus,\n      flutterwave input[type=\"button\"].button-primary:focus {\n        color: #FFF;\n        background-color: rgb(0,109,199);\n        border-color: rgb(0,109,199); }\n\nflutterwave input[type=\"email\"],\nflutterwave input[type=\"number\"],\nflutterwave input[type=\"search\"],\nflutterwave input[type=\"text\"],\nflutterwave input[type=\"tel\"],\nflutterwave input[type=\"url\"],\nflutterwave input[type=\"password\"],\nflutterwave textarea,\nflutterwave select {\n  height: 38px;\n  padding: 6px 10px;\n  background-color: #fff;\n  border: 1px solid #D1D1D1;\n  border-radius: 4px;\n  box-shadow: none;\n  box-sizing: border-box; }\n  flutterwave input[type=\"email\"],\n  flutterwave input[type=\"number\"],\n  flutterwave input[type=\"search\"],\n  flutterwave input[type=\"text\"],\n  flutterwave input[type=\"tel\"],\n  flutterwave input[type=\"url\"],\n  flutterwave input[type=\"password\"],\n  flutterwave textarea {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none; }\n    flutterwave textarea {\n      min-height: 65px;\n      padding-top: 6px;\n      padding-bottom: 6px; }\n      flutterwave input[type=\"email\"]:focus,\n      flutterwave input[type=\"number\"]:focus,\n      flutterwave input[type=\"search\"]:focus,\n      flutterwave input[type=\"text\"]:focus,\n      flutterwave input[type=\"tel\"]:focus,\n      flutterwave input[type=\"url\"]:focus,\n      flutterwave input[type=\"password\"]:focus,\n      flutterwave textarea:focus,\n      flutterwave select:focus {\n        border: 1px solid #33C3F0;\n        outline: 0; }\n        flutterwave label,\n        flutterwave legend {\n          display: block;\n          margin-bottom: .5rem;\n          font-weight: 600; }\n          flutterwave fieldset {\n            padding: 0;\n            border-width: 0; }\n            flutterwave input[type=\"checkbox\"],\n            flutterwave input[type=\"radio\"] {\n              display: inline; }\n              flutterwave label > .label-body {\n                display: inline-block;\n                margin-left: .5rem;\n                font-weight: normal; }\n\nflutterwave ul {\n  list-style: circle inside; }\n  flutterwave ol {\n    list-style: decimal inside; }\n    flutterwave ol, ul {\n      padding-left: 0;\n      margin-top: 0; }\n      flutterwave ul ul,\n      flutterwave ul ol,\n      flutterwave ol ol,\n      flutterwave ol ul {\n        margin: 1.5rem 0 1.5rem 3rem;\n        font-size: 90%; }\n        flutterwave li {\n          margin-bottom: 1rem; }\n\nflutterwave code {\n  padding: .2rem .5rem;\n  margin: 0 .2rem;\n  font-size: 90%;\n  white-space: nowrap;\n  background: #F1F1F1;\n  border: 1px solid #E1E1E1;\n  border-radius: 4px; }\n  flutterwave pre > code {\n    display: block;\n    padding: 1rem 1.5rem;\n    white-space: pre; }\n\nflutterwave th,\nflutterwave td {\n  padding: 12px 15px;\n  text-align: left;\n  border-bottom: 1px solid #E1E1E1; }\n  flutterwave th:first-child,\n  flutterwave td:first-child {\n    padding-left: 0; }\n    flutterwave th:last-child,\n    flutterwave td:last-child {\n      padding-right: 0; }\n\nflutterwave button,\nflutterwave .button {\n  margin-bottom: 1rem; }\n  flutterwave input,\n  flutterwave textarea,\n  flutterwave select,\n  flutterwave fieldset {\n    margin-bottom: 1.5rem; }\n    flutterwave pre,\n    flutterwave blockquote,\n    flutterwave dl,\n    flutterwave figure,\n    flutterwave table,\n    flutterwave p,\n    flutterwave ul,\n    flutterwave ol,\n    flutterwave form {\n      margin-bottom: 2.5rem; }\n\nflutterwave .u-full-width {\n  width: 100%;\n  box-sizing: border-box; }\n  flutterwave .u-max-full-width {\n    max-width: 100%;\n    box-sizing: border-box; }\n    flutterwave .u-pull-right {\n      float: right; }\n      flutterwave .u-pull-left {\n        float: left; }\n\nflutterwave hr {\n  margin-top: 3rem;\n  margin-bottom: 3.5rem;\n  border-width: 0;\n  border-top: 1px solid #E1E1E1; }\n\nflutterwave .container:after,\nflutterwave .row:after,\nflutterwave .u-cf {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n@media (min-width: 400px) {}\n\n@media (min-width: 550px) {\n  flutterwave .column,\n  flutterwave .columns {\n    margin-left: 4%; \n  }\n  flutterwave .column:first-child,\n  flutterwave .columns:first-child {\n    margin-left: 0; \n  }\n  flutterwave .six.columns { \n    width: 48%;\n  }\n}\n\n@media (min-width: 750px) {}\n\n@media (min-width: 1000px) {}\n\n@media (min-width: 1200px) {}\n\n\nflutterwave #topRow{\n  position:relative;\n  margin-top: 25%;\n  border-style:solid; \n  border-width:0.01vw; \n  border-color:#737373;\n  border-bottom-color:#cccccc; \n  padding-top:2vw;\n  border-radius:8px 8px 0 0;\n  background: rgba(222,222,222,1);\n  background: -moz-linear-gradient(top, rgba(222,222,222,1) 0%, rgba(236,239,241,1) 60%, rgba(246,246,246,1) 100%);\n  background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(222,222,222,1)), color-stop(60%, rgba(236,239,241,1)), color-stop(100%, rgba(246,246,246,1)));\n  background: -webkit-linear-gradient(top, rgba(222,222,222,1) 0%, rgba(236,239,241,1) 60%, rgba(246,246,246,1) 100%);\n  background: -o-linear-gradient(top, rgba(222,222,222,1) 0%, rgba(236,239,241,1) 60%, rgba(246,246,246,1) 100%);\n  background: -ms-linear-gradient(top, rgba(222,222,222,1) 0%, rgba(236,239,241,1) 60%, rgba(246,246,246,1) 100%);\n  background: linear-gradient(to bottom, rgba(222,222,222,1) 0%, rgba(236,239,241,1) 60%, rgba(246,246,246,1) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=\"#dedede\", endColorstr=\"#f6f6f6\", GradientType=0 );\n}\nflutterwave .overlay{\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  top: 0px;\n  left: 0px;\n}\nflutterwave .overlay, .overlay * {\n  -webkit-transition: all 300ms ease-in-out;\n  transition: all 300ms ease-in-out;\n  -moz-transition: all 300ms ease-in-out;\n  -ms-transition: all 300ms ease-in-out;\n  -o-transition: all 300ms ease-in-out;\n}\nflutterwave #bottomRow{\n  border-top-style:solid;\n  border-top-width:0.1vw;\n  border-color:#737373;\n  border-top-color:#e6e6e6;\n  border-style:solid;\n  border-width:0.1vw;\n  padding-left:2vw;\n  padding-right:2vw;\n  border-radius:0 0 8px 8px;\n  background-color:rgb(244,246,247);\n}\nflutterwave #primaryContainer{\n  min-width:300px;\n  max-width:300px;\n  margin: auto auto;\n}\nflutterwave #email{\n  background-image:url(\"data:image/png;base64,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\"); \n  background-repeat:no-repeat; \n  background-size:20px 20px; \n  background-position:2% 50%; \n  padding-left:35px;\n}\nflutterwave #card{\n  background-image:url(\"data:image/png;base64,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dQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCABJg//7pt3vk9rXLIEeAi9aI5/1aEgbBAgsTkAASBqybQBIal6zBLoI/EMA6OKoEQJLFBAAkkZNAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKTh2gaA+D9YC4E5C3w2542zbQQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMV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\"); \n  background-repeat:no-repeat; \n  background-size:20px 20px; \n  background-position:2% 50%;\n  padding-left:35px;\n}\nflutterwave #checkboxDiv{\n  border-style:solid; \n  border-radius:4px; \n  border-width:0.1vw; \n  border-color:#c0c0c0; \n  padding:0.3vw; \n  padding-left:1vw; \n  height:30px; \n}\n\nflutterwave .column,\nflutterwave .columns {\n  width: 100%;\n  float: left;\n  box-sizing: border-box; \n}\n\nflutterwave input:disabled{\n  color: #c7c7c7 !important;\n  background-color: rgb(0,109,199) !important;\n  border-color: rgb(0,109,199) !important;\n}\n\nflutterwave input:disabled:hover, \nflutterwave input[type=\"submit\"]:disabled:hover {\n  color: #c7c7c7 !important;\n  background-color: rgb(0,109,199) !important;\n  border-color: rgb(0,109,199) !important;\n  cursor: not-allowed;\n}\n\nflutterwave input[type=\"submit\"]:hover {\n  color: #fff !important;\n  background-color: rgb(0, 81, 150) !important;\n  border-color: rgb(0, 81, 150) !important;\n}\n\nflutterwave button#exit {\n    line-height: 0px;\n    padding: 14px 10px;\n    margin: 0px 0px;\n    height: 0px;\n    border-radius: 50%;\n    border: none;\n    color: #fff;\n    background-color: #333;\n    position: absolute;\n    top: -10px;\n    right: -10px;\n    box-shadow: -1px 1px 10px #333;\n    text-shadow: -1px 1px 1px #000;\n}\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {"use strict";

	(function(root) {

	    var createBuffer = null, copyBuffer = null, convertBytesToString, convertStringToBytes = null;

	    var slowCreateBuffer = function(arg) {

	        // Passed in a single number, the length to pre-allocate
	        if (typeof arg === 'number') {
	            var result = [];
	            for (var i = 0; i < arg; i++) {
	                result.push(0);
	            }
	            return result;

	        } else  {
	            // Make sure they are passing sensible data
	            for (var i = 0; i < arg.length; i++) {
	                if (arg[i] < 0 || arg[i] >= 256 || typeof arg[i] !== 'number') {
	                    throw new Error('invalid byte (' + arg[i] + ':' + i + ')');
	                }
	            }

	            // Most array-like things should support this
	            if (arg.slice) {
	                return arg.slice(0);
	            }

	            // Something *weird*; copy it into an array (see PR#2)
	            var result = [];
	            for (var i = 0; i < arg.length; i++) {
	                result.push(arg[i]);
	            }
	            return result;
	        }
	    }

	    if (typeof(Buffer) === 'undefined') {
	        createBuffer = slowCreateBuffer;

	        copyBuffer = function(sourceBuffer, targetBuffer, targetStart, sourceStart, sourceEnd) {
	            if (targetStart == null) { targetStart = 0; }
	            if (sourceStart == null) { sourceStart = 0; }
	            if (sourceEnd == null) { sourceEnd = sourceBuffer.length; }
	            for (var i = sourceStart; i < sourceEnd; i++) {
	                targetBuffer[targetStart++] = sourceBuffer[i];
	            }
	        }

	        convertStringToBytes = function(text, encoding) {

	            // "utf8", "utf-8", "utf 8", etc
	            if (encoding == null || encoding.toLowerCase().replace(/ |-/g, "") == 'utf8') {
	                var result = [], i = 0;
	                text = encodeURI(text);
	                while (i < text.length) {
	                    var c = text.charCodeAt(i++);

	                    // if it is a % sign, encode the following 2 bytes as a hex value
	                    if (c === 37) {
	                        result.push(parseInt(text.substr(i, 2), 16))
	                        i += 2;

	                    // otherwise, just the actual byte
	                    } else {
	                        result.push(c)
	                    }
	                }

	                return result;

	            // "hex"
	            } else if (encoding.toLowerCase() == 'hex') {
	                var result = [];
	                for (var i = 0; i < text.length; i += 2) {
	                    result.push(parseInt(text.substr(i, 2), 16));
	                }

	                return result;
	            }

	            // @TODO: Base64...

	            return null;
	        }

	        // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
	        var Hex = '0123456789abcdef';
	        convertBytesToString = function(bytes, encoding) {

	            // "utf8", "utf-8", "utf 8", etc
	            if (encoding == null || encoding.toLowerCase().replace(/ |-/g, "") == 'utf8') {
	                var result = [], i = 0;

	                while (i < bytes.length) {
	                    var c = bytes[i];

	                    if (c < 128) {
	                        result.push(String.fromCharCode(c));
	                        i++;
	                    } else if (c > 191 && c < 224) {
	                        result.push(String.fromCharCode(((c & 0x1f) << 6) | (bytes[i + 1] & 0x3f)));
	                        i += 2;
	                    } else {
	                        result.push(String.fromCharCode(((c & 0x0f) << 12) | ((bytes[i + 1] & 0x3f) << 6) | (bytes[i + 2] & 0x3f)));
	                        i += 3;
	                    }
	                }

	                return result.join('');

	            // "hex"
	            } else if (encoding.toLowerCase() == 'hex') {
	                var result = [];
	                for (var i = 0; i < bytes.length; i++) {
	                    var v = bytes[i];
	                    result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
	                }
	                return result.join('');
	            }

	            return result
	        }

	    } else {
	        createBuffer = function(arg) { return new Buffer(arg); }

	        copyBuffer = function(sourceBuffer, targetBuffer, targetStart, sourceStart, sourceEnd) {
	            sourceBuffer.copy(targetBuffer, targetStart, sourceStart, sourceEnd);
	        }

	        convertStringToBytes = function(text, encoding) {
	            return new Buffer(text, encoding);
	        }

	        convertBytesToString = function(bytes, encoding) {
	            return (new Buffer(bytes)).toString(encoding);
	        }
	    }


	    // Number of rounds by keysize
	    var numberOfRounds = {16: 10, 24: 12, 32: 14}

	    // Round constant words
	    var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

	    // S-box and Inverse S-box (S is for Substitution)
	    var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
	    var Si =[0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

	    // Transformations for encryption
	    var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
	    var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
	    var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
	    var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

	    // Transformations for decryption
	    var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
	    var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
	    var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
	    var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

	    // Transformations for decryption key expansion
	    var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
	    var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
	    var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
	    var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];


	    function convertToInt32(bytes) {
	        var result = [];
	        for (var i = 0; i < bytes.length; i += 4) {
	            result.push(
	                (bytes[i    ] << 24) |
	                (bytes[i + 1] << 16) |
	                (bytes[i + 2] <<  8) |
	                 bytes[i + 3]
	            );
	        }
	        return result;
	    }




	    var AES = function(key) {
	        if (!(this instanceof AES)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.key = createBuffer(key);
	        this._prepare();
	    }


	    AES.prototype._prepare = function() {

	        var rounds = numberOfRounds[this.key.length];
	        if (rounds == null) {
	            throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
	        }

	        // encryption round keys
	        this._Ke = [];

	        // decryption round keys
	        this._Kd = [];

	        for (var i = 0; i <= rounds; i++) {
	            this._Ke.push([0, 0, 0, 0]);
	            this._Kd.push([0, 0, 0, 0]);
	        }

	        var roundKeyCount = (rounds + 1) * 4;
	        var KC = this.key.length / 4;

	        // convert the key into ints
	        var tk = convertToInt32(this.key);

	        // copy values into round key arrays
	        var index;
	        for (var i = 0; i < KC; i++) {
	            index = i >> 2;
	            this._Ke[index][i % 4] = tk[i];
	            this._Kd[rounds - index][i % 4] = tk[i];
	        }

	        // key expansion (fips-197 section 5.2)
	        var rconpointer = 0;
	        var t = KC, tt;
	        while (t < roundKeyCount) {
	            tt = tk[KC - 1];
	            tk[0] ^= ((S[(tt >> 16) & 0xFF] << 24) ^
	                      (S[(tt >>  8) & 0xFF] << 16) ^
	                      (S[ tt        & 0xFF] <<  8) ^
	                       S[(tt >> 24) & 0xFF]        ^
	                      (rcon[rconpointer] << 24));
	            rconpointer += 1;

	            // key expansion (for non-256 bit)
	            if (KC != 8) {
	                for (var i = 1; i < KC; i++) {
	                    tk[i] ^= tk[i - 1];
	                }

	            // key expansion for 256-bit keys is "slightly different" (fips-197)
	            } else {
	                for (var i = 1; i < (KC / 2); i++) {
	                    tk[i] ^= tk[i - 1];
	                }
	                tt = tk[(KC / 2) - 1];

	                tk[KC / 2] ^= (S[ tt        & 0xFF]        ^
	                              (S[(tt >>  8) & 0xFF] <<  8) ^
	                              (S[(tt >> 16) & 0xFF] << 16) ^
	                              (S[(tt >> 24) & 0xFF] << 24));

	                for (var i = (KC / 2) + 1; i < KC; i++) {
	                    tk[i] ^= tk[i - 1];
	                }
	            }

	            // copy values into round key arrays
	            var i = 0, r, c;
	            while (i < KC && t < roundKeyCount) {
	                r = t >> 2;
	                c = t % 4;
	                this._Ke[r][c] = tk[i];
	                this._Kd[rounds - r][c] = tk[i++];
	                t++;
	            }
	        }

	        // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
	        for (var r = 1; r < rounds; r++) {
	            for (var c = 0; c < 4; c++) {
	                tt = this._Kd[r][c];
	                this._Kd[r][c] = (U1[(tt >> 24) & 0xFF] ^
	                                  U2[(tt >> 16) & 0xFF] ^
	                                  U3[(tt >>  8) & 0xFF] ^
	                                  U4[ tt        & 0xFF]);
	            }
	        }
	    }

	    AES.prototype.encrypt = function(plaintext) {
	        if (plaintext.length != 16) {
	            throw new Error('invalid plaintext size (must be 16 bytes)');
	        }

	        var rounds = this._Ke.length - 1;
	        var a = [0, 0, 0, 0];

	        // convert plaintext to (ints ^ key)
	        var t = convertToInt32(plaintext);
	        for (var i = 0; i < 4; i++) {
	            t[i] ^= this._Ke[0][i];
	        }

	        // apply round transforms
	        for (var r = 1; r < rounds; r++) {
	            for (var i = 0; i < 4; i++) {
	                a[i] = (T1[(t[ i         ] >> 24) & 0xff] ^
	                        T2[(t[(i + 1) % 4] >> 16) & 0xff] ^
	                        T3[(t[(i + 2) % 4] >>  8) & 0xff] ^
	                        T4[ t[(i + 3) % 4]        & 0xff] ^
	                        this._Ke[r][i]);
	            }
	            t = a.slice(0);
	        }

	        // the last round is special
	        var result = createBuffer(16), tt;
	        for (var i = 0; i < 4; i++) {
	            tt = this._Ke[rounds][i];
	            result[4 * i    ] = (S[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
	            result[4 * i + 1] = (S[(t[(i + 1) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
	            result[4 * i + 2] = (S[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
	            result[4 * i + 3] = (S[ t[(i + 3) % 4]        & 0xff] ^  tt       ) & 0xff;
	        }

	        return result;
	    }

	    AES.prototype.decrypt = function(ciphertext) {
	        if (ciphertext.length != 16) {
	            throw new Error('invalid ciphertext size (must be 16 bytes)');
	        }

	        var rounds = this._Kd.length - 1;
	        var a = [0, 0, 0, 0];

	        // convert plaintext to (ints ^ key)
	        var t = convertToInt32(ciphertext);
	        for (var i = 0; i < 4; i++) {
	            t[i] ^= this._Kd[0][i];
	        }

	        // apply round transforms
	        for (var r = 1; r < rounds; r++) {
	            for (var i = 0; i < 4; i++) {
	                a[i] = (T5[(t[ i          ] >> 24) & 0xff] ^
	                        T6[(t[(i + 3) % 4] >> 16) & 0xff] ^
	                        T7[(t[(i + 2) % 4] >>  8) & 0xff] ^
	                        T8[ t[(i + 1) % 4]        & 0xff] ^
	                        this._Kd[r][i]);
	            }
	            t = a.slice(0);
	        }

	        // the last round is special
	        var result = createBuffer(16), tt;
	        for (var i = 0; i < 4; i++) {
	            tt = this._Kd[rounds][i];
	            result[4 * i    ] = (Si[(t[ i         ] >> 24) & 0xff] ^ (tt >> 24)) & 0xff;
	            result[4 * i + 1] = (Si[(t[(i + 3) % 4] >> 16) & 0xff] ^ (tt >> 16)) & 0xff;
	            result[4 * i + 2] = (Si[(t[(i + 2) % 4] >>  8) & 0xff] ^ (tt >>  8)) & 0xff;
	            result[4 * i + 3] = (Si[ t[(i + 1) % 4]        & 0xff] ^  tt       ) & 0xff;
	        }

	        return result;
	    }


	    /**
	     *  Mode Of Operation - Electonic Codebook (ECB)
	     */
	    var ModeOfOperationECB = function(key) {
	        if (!(this instanceof ModeOfOperationECB)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.description = "Electronic Code Block";
	        this.name = "ecb";

	        this._aes = new AES(key);
	    }

	    ModeOfOperationECB.prototype.encrypt = function(plaintext) {
	        return this._aes.encrypt(plaintext);
	    }

	    ModeOfOperationECB.prototype.decrypt = function(ciphertext, encoding) {
	        return this._aes.decrypt(ciphertext);
	    }


	    /**
	     *  Mode Of Operation - Cipher Block Chaining (CBC)
	     */
	    var ModeOfOperationCBC = function(key, iv) {
	        if (!(this instanceof ModeOfOperationCBC)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.description = "Cipher Block Chaining";
	        this.name = "cbc";

	        if (!iv) {
	            iv = createBuffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	        } else if (iv.length != 16) {
	            throw new Error('invalid initialation vector size (must be 16 bytes)');
	        }

	        this._lastCipherblock = createBuffer(iv);

	        this._aes = new AES(key);
	    }

	    ModeOfOperationCBC.prototype.encrypt = function(plaintext) {
	        if (plaintext.length != 16) {
	            throw new Error('invalid plaintext size (must be 16 bytes)');
	        }

	        var precipherblock = createBuffer(plaintext);
	        for (var i = 0; i < 16; i++) {
	            precipherblock[i] ^= this._lastCipherblock[i];
	        }

	        this._lastCipherblock = this._aes.encrypt(precipherblock);

	        return this._lastCipherblock;
	    }

	    ModeOfOperationCBC.prototype.decrypt = function(ciphertext) {
	        if (ciphertext.length != 16) {
	            throw new Error('invalid ciphertext size (must be 16 bytes)');
	        }

	        var plaintext = this._aes.decrypt(ciphertext);
	        for (var i = 0; i < 16; i++) {
	            plaintext[i] ^= this._lastCipherblock[i];
	        }

	        copyBuffer(ciphertext, this._lastCipherblock);

	        return plaintext;
	    }


	    /**
	     *  Mode Of Operation - Cipher Feedback (CFB)
	     */
	    var ModeOfOperationCFB = function(key, iv, segmentSize) {
	        if (!(this instanceof ModeOfOperationCFB)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.description = "Cipher Feedback";
	        this.name = "cfb";

	        if (!iv) {
	            iv = createBuffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	        } else if (iv.length != 16) {
	            throw new Error('invalid initialation vector size (must be 16 size)');
	        }

	        if (!segmentSize) { segmentSize = 1; }

	        this.segmentSize = segmentSize;

	        this._shiftRegister = createBuffer(iv);

	        this._aes = new AES(key);
	    }

	    ModeOfOperationCFB.prototype.encrypt = function(plaintext) {
	        if ((plaintext.length % this.segmentSize) != 0) {
	            throw new Error('invalid plaintext size (must be segmentSize bytes)');
	        }

	        var encrypted = createBuffer(plaintext);

	        var xorSegment;
	        for (var i = 0; i < encrypted.length; i += this.segmentSize) {
	            xorSegment = this._aes.encrypt(this._shiftRegister);
	            for (var j = 0; j < this.segmentSize; j++) {
	                encrypted[i + j] ^= xorSegment[j];
	            }

	            // Shift the register
	            copyBuffer(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
	            copyBuffer(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
	        }

	        return encrypted;
	    }

	    ModeOfOperationCFB.prototype.decrypt = function(ciphertext) {
	        if ((ciphertext.length % this.segmentSize) != 0) {
	            throw new Error('invalid ciphertext size (must be segmentSize bytes)');
	        }

	        var plaintext = createBuffer(ciphertext);

	        var xorSegment;
	        for (var i = 0; i < plaintext.length; i += this.segmentSize) {
	            xorSegment = this._aes.encrypt(this._shiftRegister);

	            for (var j = 0; j < this.segmentSize; j++) {
	                plaintext[i + j] ^= xorSegment[j];
	            }

	            // Shift the register
	            copyBuffer(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
	            copyBuffer(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
	        }

	        return plaintext;
	    }

	    /**
	     *  Mode Of Operation - Output Feedback (OFB)
	     */
	    var ModeOfOperationOFB = function(key, iv) {
	        if (!(this instanceof ModeOfOperationOFB)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.description = "Output Feedback";
	        this.name = "ofb";

	        if (!iv) {
	            iv = createBuffer([0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

	        } else if (iv.length != 16) {
	            throw new Error('invalid initialation vector size (must be 16 bytes)');
	        }

	        this._lastPrecipher = createBuffer(iv);
	        this._lastPrecipherIndex = 16;

	        this._aes = new AES(key);
	    }

	    ModeOfOperationOFB.prototype.encrypt = function(plaintext) {
	        var encrypted = createBuffer(plaintext);

	        for (var i = 0; i < encrypted.length; i++) {
	            if (this._lastPrecipherIndex === 16) {
	                this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
	                this._lastPrecipherIndex = 0;
	            }
	            encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
	        }

	        return encrypted;
	    }

	    // Decryption is symetric
	    ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;


	    /**
	     *  Counter object for CTR common mode of operation
	     */
	    var Counter = function(initialValue) {
	        if (!(this instanceof Counter)) {
	            throw Error('Counter must be instanitated with `new`');
	        }

	        // We allow 0, but anything false-ish uses the default 1
	        if (initialValue !== 0 && !initialValue) { initialValue = 1; }

	        if (typeof(initialValue) === 'number') {
	            this._counter = createBuffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	            this.setValue(initialValue);

	        } else {
	            this.setBytes(initialValue);
	        }
	    }

	    Counter.prototype.setValue = function(value) {
	        if (typeof(value) !== 'number' || parseInt(value) != value) {
	            throw new Error('invalid counter value (must be an integer)');
	        }

	        for (var index = 15; index >= 0; --index) {
	            this._counter[index] = value % 256;
	            value = value >> 8;
	        }
	    }

	    Counter.prototype.setBytes = function(bytes) {
	        if (bytes.length != 16) {
	            throw new Error('invalid counter bytes size (must be 16 bytes)');
	        }
	        this._counter = createBuffer(bytes);
	    };

	    Counter.prototype.increment = function() {
	        for (var i = 15; i >= 0; i--) {
	            if (this._counter[i] === 255) {
	                this._counter[i] = 0;
	            } else {
	                this._counter[i]++;
	                break;
	            }
	        }
	    }


	    /**
	     *  Mode Of Operation - Counter (CTR)
	     */
	    var ModeOfOperationCTR = function(key, counter) {
	        if (!(this instanceof ModeOfOperationCTR)) {
	            throw Error('AES must be instanitated with `new`');
	        }

	        this.description = "Counter";
	        this.name = "ctr";

	        if (!(counter instanceof Counter)) {
	            counter = new Counter(counter)
	        }

	        this._counter = counter;

	        this._remainingCounter = null;
	        this._remainingCounterIndex = 16;

	        this._aes = new AES(key);
	    }

	    ModeOfOperationCTR.prototype.encrypt = function(plaintext) {
	        var encrypted = createBuffer(plaintext);

	        for (var i = 0; i < encrypted.length; i++) {
	            if (this._remainingCounterIndex === 16) {
	                this._remainingCounter = this._aes.encrypt(this._counter._counter);
	                this._remainingCounterIndex = 0;
	                this._counter.increment();
	            }
	            encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
	        }

	        return encrypted;
	    }

	    // Decryption is symetric
	    ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;


	    // The bsic modes of operation as a map
	    var ModeOfOperation = {
	        ecb: ModeOfOperationECB,
	        cbc: ModeOfOperationCBC,
	        cfb: ModeOfOperationCFB,
	        ofb: ModeOfOperationOFB,
	        ctr: ModeOfOperationCTR
	    };


	    ///////////////////////
	    // Exporting


	    // The block cipher
	    var aesjs = {
	        AES: AES,
	        Counter: Counter,
	        ModeOfOperation: ModeOfOperation,
	        util: {
	            convertBytesToString: convertBytesToString,
	            convertStringToBytes: convertStringToBytes,
	            _slowCreateBuffer: slowCreateBuffer
	        }
	    };


	    // node.js
	    if (true) {
	        module.exports = aesjs

	    // RequireJS/AMD
	    // http://www.requirejs.org/docs/api.html
	    // https://github.com/amdjs/amdjs-api/wiki/AMD
	    } else if (typeof(define) === 'function' && define.amd) {
	        define(aesjs);

	    // Web Browsers
	    } else {

	        // If there was an existing library at "aes" make sure it's still available
	        if (root.aes) {
	            aesjs._aes = root.aes;
	        }

	        root.aesjs = aesjs;
	    }


	})(this);

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).Buffer))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer, global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(10)
	var ieee754 = __webpack_require__(11)
	var isArray = __webpack_require__(12)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9).Buffer, (function() { return this; }())))

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict'

	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	function init () {
	  var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	  for (var i = 0, len = code.length; i < len; ++i) {
	    lookup[i] = code[i]
	    revLookup[code.charCodeAt(i)] = i
	  }

	  revLookup['-'.charCodeAt(0)] = 62
	  revLookup['_'.charCodeAt(0)] = 63
	}

	init()

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length

	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  placeHolders = b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0

	  // base64 is 4/3 + up to two characters of the original data
	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 12 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
	 * $Id: base64.js,v 2.15 2014/04/05 12:58:57 dankogai Exp dankogai $
	 *
	 *  Licensed under the MIT license.
	 *    http://opensource.org/licenses/mit-license
	 *
	 *  References:
	 *    http://en.wikipedia.org/wiki/Base64
	 */

	(function(global) {
	    'use strict';
	    // existing version for noConflict()
	    var _Base64 = global.Base64;
	    var version = "2.1.9";
	    // if node.js, we use Buffer
	    var buffer;
	    if (typeof module !== 'undefined' && module.exports) {
	        try {
	            buffer = __webpack_require__(9).Buffer;
	        } catch (err) {}
	    }
	    // constants
	    var b64chars
	        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
	    var b64tab = function(bin) {
	        var t = {};
	        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
	        return t;
	    }(b64chars);
	    var fromCharCode = String.fromCharCode;
	    // encoder stuff
	    var cb_utob = function(c) {
	        if (c.length < 2) {
	            var cc = c.charCodeAt(0);
	            return cc < 0x80 ? c
	                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
	                                + fromCharCode(0x80 | (cc & 0x3f)))
	                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
	                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                   + fromCharCode(0x80 | ( cc         & 0x3f)));
	        } else {
	            var cc = 0x10000
	                + (c.charCodeAt(0) - 0xD800) * 0x400
	                + (c.charCodeAt(1) - 0xDC00);
	            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
	                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
	                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
	                    + fromCharCode(0x80 | ( cc         & 0x3f)));
	        }
	    };
	    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
	    var utob = function(u) {
	        return u.replace(re_utob, cb_utob);
	    };
	    var cb_encode = function(ccc) {
	        var padlen = [0, 2, 1][ccc.length % 3],
	        ord = ccc.charCodeAt(0) << 16
	            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
	            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
	        chars = [
	            b64chars.charAt( ord >>> 18),
	            b64chars.charAt((ord >>> 12) & 63),
	            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
	            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
	        ];
	        return chars.join('');
	    };
	    var btoa = global.btoa ? function(b) {
	        return global.btoa(b);
	    } : function(b) {
	        return b.replace(/[\s\S]{1,3}/g, cb_encode);
	    };
	    var _encode = buffer ? function (u) {
	        return (u.constructor === buffer.constructor ? u : new buffer(u))
	        .toString('base64')
	    }
	    : function (u) { return btoa(utob(u)) }
	    ;
	    var encode = function(u, urisafe) {
	        return !urisafe
	            ? _encode(String(u))
	            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
	                return m0 == '+' ? '-' : '_';
	            }).replace(/=/g, '');
	    };
	    var encodeURI = function(u) { return encode(u, true) };
	    // decoder stuff
	    var re_btou = new RegExp([
	        '[\xC0-\xDF][\x80-\xBF]',
	        '[\xE0-\xEF][\x80-\xBF]{2}',
	        '[\xF0-\xF7][\x80-\xBF]{3}'
	    ].join('|'), 'g');
	    var cb_btou = function(cccc) {
	        switch(cccc.length) {
	        case 4:
	            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
	                |    ((0x3f & cccc.charCodeAt(1)) << 12)
	                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
	                |     (0x3f & cccc.charCodeAt(3)),
	            offset = cp - 0x10000;
	            return (fromCharCode((offset  >>> 10) + 0xD800)
	                    + fromCharCode((offset & 0x3FF) + 0xDC00));
	        case 3:
	            return fromCharCode(
	                ((0x0f & cccc.charCodeAt(0)) << 12)
	                    | ((0x3f & cccc.charCodeAt(1)) << 6)
	                    |  (0x3f & cccc.charCodeAt(2))
	            );
	        default:
	            return  fromCharCode(
	                ((0x1f & cccc.charCodeAt(0)) << 6)
	                    |  (0x3f & cccc.charCodeAt(1))
	            );
	        }
	    };
	    var btou = function(b) {
	        return b.replace(re_btou, cb_btou);
	    };
	    var cb_decode = function(cccc) {
	        var len = cccc.length,
	        padlen = len % 4,
	        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
	            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
	            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
	            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
	        chars = [
	            fromCharCode( n >>> 16),
	            fromCharCode((n >>>  8) & 0xff),
	            fromCharCode( n         & 0xff)
	        ];
	        chars.length -= [0, 0, 2, 1][padlen];
	        return chars.join('');
	    };
	    var atob = global.atob ? function(a) {
	        return global.atob(a);
	    } : function(a){
	        return a.replace(/[\s\S]{1,4}/g, cb_decode);
	    };
	    var _decode = buffer ? function(a) {
	        return (a.constructor === buffer.constructor
	                ? a : new buffer(a, 'base64')).toString();
	    }
	    : function(a) { return btou(atob(a)) };
	    var decode = function(a){
	        return _decode(
	            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
	                .replace(/[^A-Za-z0-9\+\/]/g, '')
	        );
	    };
	    var noConflict = function() {
	        var Base64 = global.Base64;
	        global.Base64 = _Base64;
	        return Base64;
	    };
	    // export Base64
	    global.Base64 = {
	        VERSION: version,
	        atob: atob,
	        btoa: btoa,
	        fromBase64: decode,
	        toBase64: encode,
	        utob: utob,
	        encode: encode,
	        encodeURI: encodeURI,
	        btou: btou,
	        decode: decode,
	        noConflict: noConflict
	    };
	    // if ES5 is available, make Base64.extendString() available
	    if (typeof Object.defineProperty === 'function') {
	        var noEnum = function(v){
	            return {value:v,enumerable:false,writable:true,configurable:true};
	        };
	        global.Base64.extendString = function () {
	            Object.defineProperty(
	                String.prototype, 'fromBase64', noEnum(function () {
	                    return decode(this)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64', noEnum(function (urisafe) {
	                    return encode(this, urisafe)
	                }));
	            Object.defineProperty(
	                String.prototype, 'toBase64URI', noEnum(function () {
	                    return encode(this, true)
	                }));
	        };
	    }
	    // that's it!
	    if (global['Meteor']) {
	       Base64 = global.Base64; // for normal export in Meteor.js
	    }
	})(this);


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* globals angular */
	"use strict";

	// Remember to include jQuery and Angular
	var noAngular;
	if(typeof angular === 'undefined'){
	  noAngular = true;
	  console.warn('Could not detect Angular. Please include Angular'); // jshint ignore:line 
	}else{
	  noAngular = false;
	}


	// inject aesjs
	var aesjs = __webpack_require__(8);
	// inject js-base64
	var Base64 = __webpack_require__(13).Base64;
	// inject jquery of jquery is not found
	// If angular is found, don't bootstarp
	// write separate doc for when running within angular and when running in a normal html app

	angular.module('ng-flutterwave',[])
	.config(['$httpProvider','$compileProvider','$logProvider', function($httpProvider,$compileProvider,$logProvider){
	  $httpProvider.interceptors.push('FlutterwaveSecurityInterceptor');
	  $compileProvider.debugInfoEnabled(false);
	  $logProvider.debugEnabled(false);
	}])
	// run this settings in config. set apiKey, merchantKey and url
	.factory('FlutterwaveSettings',['$rootScope','$log',function($rootScope,$log){
	  $rootScope.settings = {};
	  return {
	    get: function(key){
	      return $rootScope.settings[key];
	    },
	    set: function(key, value){
	      $rootScope.settings[key] = value;
	      $log.debug('Set: ', $rootScope.settings);
	      return $rootScope.settings[key];
	    }
	  };
	}])
	.factory('Flutterwave', ['$http','FlutterwaveSettings','$q','$rootScope','$log',function($http,FlutterwaveSettings,$q,$rootScope,$log){
	  return {
	    initialize: function(){
	      return $http({
	        method: 'GET',
	        url: FlutterwaveSettings.get('url')+'/initialize',
	      })
	      .then(function(resp){
	        $http.defaults.headers.common['x-apiKey'] = $rootScope.settings.apiKey;
	        $http.defaults.headers.common['x-merchantKey'] = $rootScope.settings.merchantKey;
	        return $q.resolve(FlutterwaveSettings.set('tag',resp.data.data['x-tag']));
	      });
	    },
	    card: {
	      tokenize: function(data){
	        $log.debug('I got this data: ', data);
	        return $http({
	          method: 'POST',
	          url: FlutterwaveSettings.get('url')+'/card/tokenize',
	          data: data
	        });
	      },
	      charge: function(data){
	        return $http({
	          method: 'POST',
	          url: FlutterwaveSettings.get('url')+'/card/charge',
	          data: data
	        });
	      },
	      validate: function(data){
	        return $http({
	          method: 'POST',
	          url: FlutterwaveSettings.get('url')+'/card/validate',
	          data: data
	        });
	      }
	    }
	  };
	}])
	.factory('FlutterwaveSecurityInterceptor', ['$q','AES','$log','FlutterwaveSettings',function($q,AES,$log,FlutterwaveSettings) {
	  return {
	    request: function(config) {
	      var deferred = $q.defer();
	      $log.debug('Request: ',config);
	      if(config.method === 'POST'){
	        var key  = FlutterwaveSettings.get('tag');
	        config.headers['x-tag'] = key;
	        var text = JSON.stringify(config.data);
	        AES.encrypt(text, key)
	        .then(function(resp){
	          config.data = {};
	          config.data.secureData = resp;
	          deferred.resolve(config);
	        })
	        .catch(function(err){
	          $log.debug('FlutterwaveSecurityInterceptor Request Error: ', err, config);
	          deferred.reject(err);
	        });
	      }else{
	        deferred.resolve(config);
	      }   
	      return deferred.promise;
	    },

	    response: function(response) {
	      var deferred = $q.defer();
	      $log.debug('Response: ',response.headers());
	      if(response.data){
	        if(response.data.secure){
	          var key  = response.headers('x-tag') ? response.headers('x-tag') : response.headers('X-Tag');
	          $log.debug('decrypt key: ', key);
	          var text = response.data.data;

	          AES.decrypt(text, key)
	          .then(function(resp){
	            response.data.data = JSON.parse(resp);
	            deferred.resolve(response);
	          })
	          .catch(function(err){
	            $log.debug('FlutterwaveSecurityInterceptor Response Error: ', err, response);
	            deferred.reject(err);
	          });
	        }else{
	          $log.debug(response);
	          deferred.resolve(response);
	        }
	      }else{
	        deferred.resolve(response);
	      }
	      return deferred.promise;
	    }
	  };
	}])
	.factory('AES',['$q','$log',function($q,$log){
	  return {
	    encrypt: function(text, key){
	      var deferred = $q.defer();
	      $log.debug('The request: ',text);
	      $log.debug('The Key: ', key, Base64.decode(key));
	      key =  Base64.decode(key);
	      var splitKey = key.split('//////');
	      $log.debug('splitKey: ', splitKey);
	      key = splitKey[0];
	      var counter = ((splitKey[1] * 1) * 10) / 5;
	      $log.debug('Key Again: ', key);
	      key = aesjs.util.convertStringToBytes(key, 'hex');
	      $log.debug('Key Again: ', key);
	        // Convert text to bytes
	        var textBytes = aesjs.util.convertStringToBytes(text);
	        var aesCbc = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
	        var encryptedBytes = aesCbc.encrypt(textBytes);

	        // Convert our bytes back into text
	        var encryptedText = aesjs.util.convertBytesToString(encryptedBytes, 'hex');
	        deferred.resolve(encryptedText);
	        return deferred.promise;
	      },

	      decrypt: function(text, key){
	        var deferred = $q.defer();
	        key = Base64.decode(key);
	        var splitKey = key.split('//////');
	        key = splitKey[0];
	        var counter = ((splitKey[1] * 1) * 10) / 5;
	        key = aesjs.util.convertStringToBytes(key, 'hex');

	        // Convert text to bytes
	        var textBytes = aesjs.util.convertStringToBytes(text, 'hex');

	        // The cipher-block chaining mode of operation maintains internal
	          // state, so to decrypt a new instance must be instantiated.
	          var aesCbc = new aesjs.ModeOfOperation.ctr(key, new aesjs.Counter(counter));
	          var decryptedBytes = aesCbc.decrypt(textBytes);

	          // Convert our bytes back into text
	          var decryptedText = aesjs.util.convertBytesToString(decryptedBytes);
	          deferred.resolve(decryptedText);
	          return deferred.promise;
	        }
	      };
	    }])
	.directive('flutterwaveForm',['FlutterwaveSettings',function(FlutterwaveSettings){
	  // Parameters
	  // title
	  // description
	  // email
	  // amount
	  // logo
	  var ourTemplate = '';
	  ourTemplate += '<flutterwave>';
	  ourTemplate += '<style type="text/css">flutterwave{font-family:Raleway,HelveticaNeue,"Helvetica Neue",Helvetica,Arial,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;font-size:80.5%;line-height:1.6;font-weight:400;color:#222}flutterwave article,flutterwave aside,flutterwave details,flutterwave figcaption,flutterwave figure,flutterwave footer,flutterwave header,flutterwave hgroup,flutterwave main,flutterwave menu,flutterwave nav,flutterwave section,flutterwave summary{display:block}flutterwave audio,flutterwave canvas,flutterwave progress,flutterwave video{display:inline-block;vertical-align:baseline}flutterwave audio:not([controls]){display:none;height:0}flutterwave [hidden],flutterwave template{display:none}flutterwave a{background-color:transparent;color:#1EAEDB}flutterwave a:active,flutterwave a:hover{outline:0}flutterwave abbr[title]{border-bottom:1px dotted}flutterwave b,flutterwave optgroup,flutterwave strong{font-weight:700}flutterwave dfn{font-style:italic}flutterwave h1{margin:.67em 0}flutterwave mark{background:#ff0;color:#000}flutterwave small{font-size:80%}flutterwave sub,flutterwave sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}flutterwave sup{top:-.5em}flutterwave sub{bottom:-.25em}flutterwave img{border:0}flutterwave svg:not(:root){overflow:hidden}flutterwave figure{margin:1em 40px}flutterwave hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}flutterwave pre{overflow:auto}flutterwave code,flutterwave kbd,flutterwave pre,flutterwave samp{font-family:monospace,monospace;font-size:1em}flutterwave button,flutterwave input,flutterwave optgroup,flutterwave select,flutterwave textarea{color:inherit;font:inherit;margin:0}flutterwave button{overflow:visible}flutterwave button,flutterwave select{text-transform:none}flutterwave button,flutterwave html input[type=button],flutterwave input[type=reset],flutterwave input[type=submit]{-webkit-appearance:button;cursor:pointer}flutterwave button[disabled],flutterwave html input[disabled]{cursor:default}flutterwave button::-moz-focus-inner,flutterwave input::-moz-focus-inner{border:0;padding:0}flutterwave input{line-height:normal}flutterwave input[type=checkbox],flutterwave input[type=radio]{box-sizing:border-box;padding:0}flutterwave input[type=number]::-webkit-inner-spin-button,flutterwave input[type=number]::-webkit-outer-spin-button{height:auto}flutterwave input[type=search]{-moz-box-sizing:content-box;-webkit-box-sizing:content-box}flutterwave input[type=search]::-webkit-search-cancel-button,flutterwave input[type=search]::-webkit-search-decoration{-webkit-appearance:none}flutterwave fieldset{border:1px solid silver;margin:0 2px}flutterwave legend{border:0;padding:0}flutterwave table{border-collapse:collapse;border-spacing:0}flutterwave h1,flutterwave h2,flutterwave h3,flutterwave h4,flutterwave h5,flutterwave h6{margin-top:0;margin-bottom:2rem;font-weight:300}flutterwave h1{font-size:4rem;line-height:1.2;letter-spacing:-.1rem}flutterwave h2{font-size:3.6rem;line-height:1.25;letter-spacing:-.1rem}flutterwave h3{font-size:3rem;line-height:1.3;letter-spacing:-.1rem}flutterwave h4{font-size:2.4rem;line-height:1.35;letter-spacing:-.08rem}flutterwave h5{font-size:1.8rem;line-height:1.5;letter-spacing:-.05rem}flutterwave h6{font-size:1.5rem;line-height:1.6;letter-spacing:0}@media (min-width:550px){flutterwave h1{font-size:5rem}flutterwave h2{font-size:4.2rem}flutterwave h3{font-size:3.6rem}flutterwave h4{font-size:3rem}flutterwave h5{font-size:2.4rem}flutterwave h6{font-size:1.5rem}}flutterwave p{margin-top:0}flutterwave a:hover{color:#0FA0CE}flutterwave .button,flutterwave button,flutterwave input[type=button],flutterwave input[type=reset],flutterwave input[type=submit]{display:inline-block;height:38px;padding:0 30px;color:#555;text-align:center;font-size:11px;font-weight:600;line-height:38px;letter-spacing:.1rem;text-transform:uppercase;text-decoration:none;white-space:nowrap;background-color:transparent;border-radius:4px;border:1px solid #bbb;cursor:pointer;box-sizing:border-box}flutterwave .button:focus,flutterwave .button:hover,flutterwave button:focus,flutterwave button:hover,flutterwave input[type=button]:focus,flutterwave input[type=button]:hover,flutterwave input[type=reset]:focus,flutterwave input[type=reset]:hover,flutterwave input[type=submit]:focus,flutterwave input[type=submit]:hover{color:#333;border-color:#888;outline:0}flutterwave .button.button-primary,flutterwave button.button-primary,flutterwave input[type=button].button-primary,flutterwave input[type=reset].button-primary,flutterwave input[type=submit].button-primary{color:#FFF;background-color:#006dc7;border-color:#005094}flutterwave .button.button-primary:focus,flutterwave .button.button-primary:hover,flutterwave button.button-primary:focus,flutterwave button.button-primary:hover,flutterwave input[type=button].button-primary:focus,flutterwave input[type=button].button-primary:hover,flutterwave input[type=reset].button-primary:focus,flutterwave input[type=reset].button-primary:hover,flutterwave input[type=submit].button-primary:focus,flutterwave input[type=submit].button-primary:hover{color:#FFF;background-color:#006dc7;border-color:#006dc7}flutterwave input[type=email],flutterwave input[type=text],flutterwave input[type=tel],flutterwave input[type=url],flutterwave input[type=password],flutterwave input[type=number],flutterwave input[type=search],flutterwave select,flutterwave textarea{height:38px;padding:6px 10px;background-color:#fff;border:1px solid #D1D1D1;border-radius:4px;box-shadow:none;box-sizing:border-box}flutterwave input[type=email],flutterwave input[type=text],flutterwave input[type=tel],flutterwave input[type=url],flutterwave input[type=password],flutterwave input[type=number],flutterwave input[type=search],flutterwave textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none}flutterwave textarea{overflow:auto;min-height:65px;padding-top:6px;padding-bottom:6px}flutterwave input[type=email]:focus,flutterwave input[type=text]:focus,flutterwave input[type=tel]:focus,flutterwave input[type=url]:focus,flutterwave input[type=password]:focus,flutterwave input[type=number]:focus,flutterwave input[type=search]:focus,flutterwave select:focus,flutterwave textarea:focus{border:1px solid #33C3F0;outline:0}flutterwave label,flutterwave legend{display:block;margin-bottom:.5rem;font-weight:600}flutterwave fieldset{padding:0;border-width:0}flutterwave input[type=checkbox],flutterwave input[type=radio]{display:inline}flutterwave label>.label-body{display:inline-block;margin-left:.5rem;font-weight:400}flutterwave ul{list-style:circle inside}flutterwave ol{list-style:decimal inside}flutterwave ol,ul{padding-left:0;margin-top:0}flutterwave ol ol,flutterwave ol ul,flutterwave ul ol,flutterwave ul ul{margin:1.5rem 0 1.5rem 3rem;font-size:90%}flutterwave .button,flutterwave button,flutterwave li{margin-bottom:1rem}flutterwave code{padding:.2rem .5rem;margin:0 .2rem;font-size:90%;white-space:nowrap;background:#F1F1F1;border:1px solid #E1E1E1;border-radius:4px}flutterwave pre>code{display:block;padding:1rem 1.5rem;white-space:pre}flutterwave #card,flutterwave #email{background-repeat:no-repeat;background-size:20px 20px;background-position:2% 50%;padding-left:35px}flutterwave td,flutterwave th{padding:12px 15px;text-align:left;border-bottom:1px solid #E1E1E1}flutterwave td:first-child,flutterwave th:first-child{padding-left:0}flutterwave td:last-child,flutterwave th:last-child{padding-right:0}flutterwave fieldset,flutterwave input,flutterwave select,flutterwave textarea{margin-bottom:1.5rem}flutterwave blockquote,flutterwave dl,flutterwave figure,flutterwave form,flutterwave ol,flutterwave p,flutterwave pre,flutterwave table,flutterwave ul{margin-bottom:2.5rem}flutterwave .u-full-width{width:100%;box-sizing:border-box}flutterwave .u-max-full-width{max-width:100%;box-sizing:border-box}flutterwave .u-pull-right{float:right}flutterwave .u-pull-left{float:left}flutterwave hr{margin-top:3rem;margin-bottom:3.5rem;border-width:0;border-top:1px solid #E1E1E1}flutterwave .container:after,flutterwave .row:after,flutterwave .u-cf{content:"";display:table;clear:both}@media (min-width:550px){flutterwave .column,flutterwave .columns{margin-left:4%}flutterwave .column:first-child,flutterwave .columns:first-child{margin-left:0}flutterwave .six.columns{width:48%}}flutterwave #topRow{position:relative;margin-top:25%;border-style:solid;border-width:.01vw;border-color:#737373 #737373 #ccc;padding-top:2vw;border-radius:8px 8px 0 0;background:rgba(222,222,222,1);background:-moz-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-webkit-gradient(left top,left bottom,color-stop(0,rgba(222,222,222,1)),color-stop(60%,rgba(236,239,241,1)),color-stop(100%,rgba(246,246,246,1)));background:-webkit-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-o-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:-ms-linear-gradient(top,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);background:linear-gradient(to bottom,rgba(222,222,222,1) 0,rgba(236,239,241,1) 60%,rgba(246,246,246,1) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr="#dedede", endColorstr="#f6f6f6", GradientType=0 )}flutterwave .overlay{position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.7);top:0;left:0}.overlay *,flutterwave .overlay{-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out}flutterwave #bottomRow{border-color:#e6e6e6 #737373 #737373;border-style:solid;border-width:.1vw;padding-left:2vw;padding-right:2vw;border-radius:0 0 8px 8px;background-color:#f4f6f7}flutterwave #primaryContainer{min-width:300px;max-width:300px;margin:auto}flutterwave #email{background-image:url(data:image/png;base64,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)}flutterwave #card{background-image:url(data:image/png;base64,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dQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCABJg//7pt3vk9rXLIEeAi9aI5/1aEgbBAgsTkAASBqybQBIal6zBLoI/EMA6OKoEQJLFBAAkkZNAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKTh2gaA+D9YC4E5C3w2542zbQQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAl80lr+oXfrL1qDv/dutLX3qq1XCe1qkgABAgQIVBOI/enXvYsWAHqLao8AAQIECPQVEAD6emqNAAECBAgsQiAtANy08t/vTOAUQGdQzREgQIBAWYGMAPBbnAJYt/VlZ1YBoDOo5ggQIECgrMDfWuVfdK7+TVYAeNM2dNV5YzVHgAABAgQqCmT8UL8NAD+29ePOogJAZ1DNESBAgEBZgYwA8DoCwFVbu99e0NqMti0ECBAgQIDAaQIpt+tnBoA/t3pvTqvZtwkQIECAQGmBi1b9PxMEXkUASHnCUGv3o7bGYQsLAQIECBAgcJzAqn3tp+O++uS3PooAkNX4V63tuHLRQoAAAQIECBwn8GX72jfHffX5APBe+8i/Ehr/trUZG24hQIAAAQIEjhPIuAUwtuTF9kK9f7c/vHvctj36rV/af/lL5zY1R4AAAQIEKgn83Ir9sHPB/2ntvbcNAOv2h94PA4rt/VNbI1xYCBAgQIAAgcMEso7Q396qvw0AWYcYPm2dxHMGLAQIECBAgMBhAlkX6d+eot8GgMv2h78ftl17fdp1AHsx+RABAgQIEPiDQNaP87+2nq63ASDOL8R5ht6L6wB6i2qPAAECBKoIZJz/D7u4Pu+X3af1ZTxpKDpyHUCVqapOAgQIEOglkHX+//YCwNjI3QCwbn/OuBDw9lBDLxHtECBAgACBAgKXrcaMU/N37+rZDQBXrbOMdwJEsIinAloIECBAgACB/QSyDv+/at3H/v6tIwCr9ueMxw1GP94LsN+A+xQBAgQIELhoBBnP/w/Zu8f0339jX8YDgaLDu8RhXAkQIECAAIEnBeIXesYR+bvz//ePAMSf4579jxMG5mZzFCChaU0SIECAAIGzEohf/3EUoPfyujUYzxa4Xe4fAbhs/y7jooPo6/a2g97VaI8AAQIECJyRQNZt+UH01kX59wNAJI6s8w7ftbYjYFgIECBAgACBhwWu27/+PAnnrevx7geA6DN+pX8wRedJfWiWAAECBAgsUSDzR/ivDeStlwo9FACy3j0cg+EowBKnpG0mQIAAgSkEMn/9f9UKiEcL3y0PBYDMBBIduyVwimmkDwIECBBYksDk+96HAkCAZd0N4CjAkqajbSVAgACBqQQyf/2/dfX/tqDHAsBl+0DW3QCOAkw1nfRDgAABAksQyP71/+Aj+R8LAAGW9VCg7RGGT5cwKraRAAECBAgkC/zQ2r+7P79zX289/Ge37acCQNZ7iLf93z2OsHOxmiNAgAABAksRiB1/BICs5dvWcFzc/4flqQBw0T6d9UyA2JCbtsbDgeJIg4UAAQIECFQTiNfyxkt/Yn+btTx64f1TASA2JvNiwGjfOwKyhly7BAgQIDB3gau2gRnP/N/W/eDFf9v/+FwAWLUPZr0hcLsNbguc+xS1fQQIECDQWyB+9WceZY/tffJU+3MBIBpYt/Vl78p32osnD8apAAsBAgQIEKgiEIf+33oyX+fC37T2Vk+1uU8AyL5AIbbv0YsUOoNojgABAgQIjBbIvsg+6nv2Qvt9AkA0tG5r5lGA6CNuC4xrDiwECBAgQOBcBab4Uf3sr//A3TcArNpns68FiLsB4lTAzbmOuroIECBAoLTARas+Dv3H1f+Zy7O//g8JAPHZdVuzjwLE9QCx4W4NzJwa2iZAgACBqQVipx8/pDPP+0dNe/36PzQArDYbn4123TqIxxZaCBAgQIDAuQjE4/UvJygmjqTHj+lnl31PAWwbip3z58+2evoHhIDTDbVAgAABAvMQmGrn/90hIePQABCHMG7a+u4Epu4MmABZFwQIECCQKjDFFf9RQDzz/6Kte59CPzQARCdXbc18ctHuSDz4BqPUodI4AQIECBDoI3DZmsl8s+7uVn7V/hBhY+/lmAAQjcf5hQ/27uW0DwoBp/n5NgECBAhMLzDlzv/XVt7BFxceGwCio7iVYarlqnUU7w2wECBAgACBuQvEUfLYb0217H3h3+4GHRsAoo0obqpTAdHfdVvdHTDVdNIPAQIECBwjMNUFf9ttO/qleqcEgOh8ylMBQsAxU9F3CBAgQGAqgal3/kcd+t9inBoA4lTAuq1T3BWw3WYPC5pqKuuHAAECBPYRmOohP7vbElf9xz74Zp8NfOgzpwaAaPPLtn5z7AYc+b24zSHeHRDhw0KAAAECBEYJrFrHP7Q1+/G+9+s7+Kr/+w30CADR5nVbp3hA0P3tv2r/wsWBo6a9fgkQIFBbYOqL/bbaBz3w57Eh6hUAIvnEr/Gpbg3crSf6jaMBez/8oPZ8VT0BAgQInCgQ+7z41b86sZ1jvh7n/aPfk/d5vQJAFDHieoAtXkDEqYhIRRYCBAgQIJAlEEe744E7Ux/yj3pOPu+/i9IzAES7U7zn+KlBXbf/GOdF9noRQtbs0C4BAgQInJ1A/MiN691WAyuLo90/9uq/dwCI7bps61SPPjuNXksAAAgaSURBVHzMIdJZXBtw8iGSXtDaIUCAAIFFCsQv/TjXH0eZRy7dn4qbEQACaKqXHzw1GE4LjJyq+iZAgMCyBWLH//FmfzbicP+uXsrL8bICQGz4dVtH3Blwf8pFEIhAEoCOCCz7L6StJ0CAQLZA7Oy/2PziH73jj1q7XPH/EFpmAJhTCIhtEQSy/9ponwABAssVmNuOP3XnH41nB4DoIy7IG3F74FPT8Lr9x7iQ4vVy56otJ0CAAIEOAnGYPy5gv+zQVs8m3rTGVj0bvN/WFAFg5DMCnrO72QSBOMTizoHntPx3AgQInIdAXNEfp6hjx38xw5K63ev/VG1TBIDoP0LAdVsjac11iQCw3qyRvFwvMNeRsl0ECBA4TCD2QS/butqsEQDmuqSd879f8FQBYNtvhIA5XBi4z8DvBoJIYzf7fMlnCBAgQGC4QOzg31/IDn8Xa7Kdf3Q6dQCIPpcUAu7P4ggFcWRgvQkEu6EgntDkNMLwv/c2gACBMxeInfvuG2gv2p9jXbU1funP+df9U0Mz6c5/VACIfuOBClO/QfDM/04ojwABAgQWKtD9IT/7OIw4ArDdrsv2D3F//m6S22ebfYYAAQIECJyDQBw5jh/E1yOKGRkAot44VBO348W5GgsBAgQIEKgi8FsrNO5CGHbqeHQAiIGOczYRAuIKTQsBAgQIEDh3gXgGzWVbh95tNocAsB3oq/YP8cIFCwECBAgQOFeBeFFd7O+GL3MKAIGxaut1W50SGD41bAABAgQIdBQYfsj/fi1zCwCxfXFKIC4OXMrzAjrOD00RIECAwBkKxC1+cbHf0EP+SwgA2210NOAM/xYoiQABAoUE4lf/ZVvXc6x5jkcAdp3iaMBVW+PVjBYCBAgQILAUgXgFfey/ZvWrfxdv7gFgu61xu2CcFnCnwFKmvu0kQIBATYF4l0wc7h92e9++7EsJANt64p7JCAIuEtx3hH2OAAECBKYQiMP9seOP29oXsSwtAGxR47BKQHuK4CKmmY0kQIDA2QoMfZrfKapLDQBRc1wfECFAEDhlBvguAQIECBwjEDv+OCId62zP8z9V2JIDwLauCAJxaiCOCjg1cMw09h0CBAgQ2FcgDvXH/iYO9S9yx78t9BwCwO6gXbY/xOpiwX2nss8RIECAwD4CcXHf9Wbd5/Oz/8y5BYAt+EX7hzg1EGHAdQKzn4Y2kAABArMUiMP8sdOPw/w3s9zCEzbqXAPALkmcHtiuwsAJk8VXCRAgUEAgdvpxeH+7nm3JFQKAMHC201dhBAgQ6CJQZqe/q1UtAOzWHg8XiiMDq7a6ZqDL3yGNECBAYDECcU5/vfmlP/uH9mSoVg4A9z0jEEQYiPWirR9kgGuTAAECBCYX+LX1eLPZ4cdOv+QO/766APD0PNyGgQgEu6vbDSf/+6tDAgQIPCkQt+fFTn53jR29nf0jbALAaX+j4hkEceTAQoAAAQLTC8TOfdH34k9P9t8eBYCR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwUEgJH6+iZAgAABAoMEBIBB8LolQIAAAQIjBQSAkfr6JkCAAAECgwQEgEHwuiVAgAABAiMFBICR+vomQIAAAQKDBASAQfC6JUCAAAECIwX+Hy9CYKPQvccRAAAAAElFTkSuQmCC)}flutterwave #checkboxDiv{border-style:solid;border-radius:4px;border-width:.1vw;border-color:silver;padding:.3vw .3vw .3vw 1vw;height:30px}flutterwave .column,flutterwave .columns{width:100%;float:left;box-sizing:border-box}flutterwave input:disabled{color:#c7c7c7!important;background-color:#006dc7!important;border-color:#006dc7!important}flutterwave input:disabled:hover,flutterwave input[type=submit]:disabled:hover{color:#c7c7c7!important;background-color:#006dc7!important;border-color:#006dc7!important;cursor:not-allowed}flutterwave input[type=submit]:hover{color:#fff!important;background-color:#005196!important;border-color:#005196!important}flutterwave button#exit{line-height:0;padding:14px 10px;margin:0;height:0;border-radius:50%;border:none;color:#fff;background-color:#333;position:absolute;top:-10px;right:-10px;box-shadow:-1px 1px 10px #333;text-shadow:-1px 1px 1px #000}</style>';
	  ourTemplate += '<input id="init" type="submit" class="button-primary" value="{{label}}"></input>';
	  ourTemplate += '<div class="overlay" ng-controller="flutterwaveController">';
	  ourTemplate += '<div id="primaryContainer">';
	  ourTemplate += '<form autocomplete="off">';
	  ourTemplate += '<div  id="topRow">';
	  ourTemplate += '<button id="exit">x</button>';
	  ourTemplate += '<img src="{{logo}}" style="position:absolute; top:-30px; left:38%; border-radius:100%; width:60px; height:60px;"></img>';
	  ourTemplate += '<img src="data:image/png;base64,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" style="position:absolute; top:-34px; left:36.3%; border-radius:100%; width:70px; height:70px;"></img>';
	  ourTemplate += '<br>';
	  ourTemplate += '<center>';
	  ourTemplate += '<h6 style="font-weight:bold; margin-bottom: 0px">{{title}}</h6>';
	  ourTemplate += '<div style="margin-bottom: 20px">{{description}}</div>';
	  ourTemplate += '</center>';
	  ourTemplate += '</div>';
	  ourTemplate += '<div id="bottomRow">';
	  ourTemplate += '<br>';
	  ourTemplate += '<input type="text" id="email" required="yes" placeholder="Email" ng-model="email" value={{email}} class="u-full-width togo">';
	  ourTemplate += '<input type="text" id="card" required="yes" onkeyup="" placeholder="Card Number" ng-model="cardno" class="u-full-width togo" maxlength="19">';
	  ourTemplate += '<div class="row togo">';
	  ourTemplate += '<div class="six columns">';
	  ourTemplate += '<input id="expiry" type="text" required="yes" placeholder="MM / YY" ng-model="expiry" class="u-full-width" maxlength="7">';
	  ourTemplate += '</div>';
	  ourTemplate += '<div class="six columns">';
	  ourTemplate += '<input id="cvv" type="text" required="yes" placeholder="CVV" class="u-full-width" ng-model="cvv" maxlength="3">';
	  ourTemplate += '</div>';
	  ourTemplate += '</div>';
	  ourTemplate += '<input id="pin" autocomplete="off" type="password" placeholder="PIN" class="u-full-width togo" ng-model="pin" maxlength="6" style="display: none;">';
	  ourTemplate += '<input id="bvn" autocomplete="off" type="text" placeholder="BVN" class="u-full-width togo" ng-model="bvn" maxlength="11" style="display: none;">';
	  ourTemplate += '<input id="otp" autocomplete="off" required="yes" type="text" placeholder="{{validatetext}}" class="u-full-width" ng-model="otp" maxlength="6" style="display: none;">';
	  ourTemplate += '<div id="checkboxDiv" class="togo" style="display: none;">';
	  ourTemplate += '<label style="vertical-align:middle; line-height:30px; color:#737373;">';
	  ourTemplate += '<input id="remembered" type="checkbox">';
	  ourTemplate += '<span id="rememberText" class="label-body">Remember me</span>';
	  ourTemplate += '</label>';
	  ourTemplate += '</div>';
	  ourTemplate += '<br style="display: none;" />';
	  ourTemplate += '<div>';
	  ourTemplate += '<input id="submit" ng-click="charge()" type="submit" class="togo {{classes}}" value="Pay {{amount}} {{currency}}" ng-disabled="disableCharge"></input>';
	  ourTemplate += '<input id="validate" ng-click="validate()" type="submit" class="{{classes}}" value="Validate payment" style="display:none;" ng-disabled="disableValidate"></input>';
	  ourTemplate += '</div>';
	  ourTemplate += '<br>';
	  ourTemplate += '</div>';
	  ourTemplate += '</form>';
	  ourTemplate += '</div>';
	  ourTemplate += '</div>';
	  ourTemplate += '</flutterwave>';
	  return {
	    scope:{},
	    restrict: 'E',
	    replace: true,
	    template: ourTemplate,
	    link: function(scope, elem, attrs) {
	      elem.find('.overlay').hide();
	      FlutterwaveSettings.set('apiKey',attrs.apiKey);
	      FlutterwaveSettings.set('merchantKey',attrs.merchantKey);
	      if(attrs.url){
	        FlutterwaveSettings.set('url',attrs.url);
	      }else if(attrs.env !== 'production'){
	        FlutterwaveSettings.set('url','https://flutterwaveapi.herokuapp.com');
	      }else{
	        FlutterwaveSettings.set('url','https://paybutton.prod1flutterwave.co');
	      }

	      scope.logo = attrs.logo;
	      scope.title = attrs.title;
	      scope.description = attrs.description;
	      scope.email = attrs.email;
	      scope.amount = attrs.amount;
	      scope.currency = attrs.currency;
	      scope.validateoption = attrs.validateoption;
	      scope.authmodel = attrs.authmodel;
	      scope.country = attrs.country;
	      scope.action = attrs.action;
	      scope.label = attrs.label;
	      scope.classes = attrs.class;
	      elem.removeAttr('api-key');
	      elem.removeAttr('merchant-key');
	      elem.removeAttr('url');
	      elem.removeAttr('title');
	      elem.removeAttr('description');
	      elem.removeAttr('email');
	      elem.removeAttr('amount');
	      elem.removeAttr('currency');
	      elem.removeAttr('validateoption');
	      elem.removeAttr('authmodel');
	      elem.removeAttr('country');
	      elem.removeAttr('action');
	      elem.removeAttr('logo');
	      elem.removeAttr('label');
	      elem.removeAttr('class');
	      elem.removeAttr('env');
	      scope.validatetext = (scope.authmodel === 'RANDOM_DEBIT') ? 'RANDOM DEBIT AMOUNT' : 'OTP';
	      if(scope.authmodel === 'BVN'){
	        elem.find('#bvn').show();
	      }

	      if(scope.authmodel === 'PIN'){
	        elem.find('#pin').show();
	      }

	      elem.find('#submit, #validate').click(function(e){
	        e.preventDefault();
	        $(this).val('Please wait...');
	      });

	      elem.find('#init').click(function(e){
	        e.preventDefault();
	        elem.find('.overlay').show();
	      });

	      elem.find('#exit').click(function(e){
	        e.preventDefault();
	        elem.find('.overlay').hide();
	      });
	      elem.append('<form id="flutterwaveCheckout" method="POST" action="'+scope.action+'"></form>');
	    }
	  };
	}])
	.controller('flutterwaveController',['$scope','Flutterwave','FlutterwaveSettings','$log',function($scope, Flutterwave, FlutterwaveSettings, $log){
	  // create a form, send the content of the form to the action url
	  $scope.charge = function(){
	    $scope.disableCharge = true;
	    
	    var data = {
	      validateoption: $scope.validateoption,
	      authmodel: $scope.authmodel,
	      cvv: $scope.cvv,
	      amount: $scope.amount,
	      currency: $scope.currency,
	      custid: $scope.email,
	      narration: $scope.description,
	      country: $scope.country,
	      pin: $scope.pin,
	      bvn: $scope.bvn,
	      responseurl: $scope.action
	    };

	    if($scope.expiry){
	      var spExpiry = $scope.expiry.split('/');
	      var month = spExpiry[0].trim();
	      var year = spExpiry[1].trim();
	      data.expirymonth =  month;
	      data.expiryyear = year;
	    }

	    if($scope.cardno){
	      var cardno = $scope.cardno.split(' ').join('');
	      data.cardno = cardno;
	    }

	    Flutterwave.initialize()
	    .then(function(resp){
	      $log.debug('x-tag: ',resp);
	      return Flutterwave.card.charge(data);
	    })
	    .then(function(resp){
	      $log.debug('The response',resp);
	      resp.data.data.status = resp.data.status;
	      $scope.disableCharge = false;
	      if(resp.data.data.requiresValidation && resp.data.data.responsehtml === null){
	        angular.element('.togo').hide();
	        angular.element('#validate').show();
	        angular.element('#otp').show();
	        $scope.otptransactionidentifier = resp.data.data.otptransactionidentifier;
	      }else{
	        // success! hide modal and redirect to success page
	        angular.element('.overlay').hide();
	        angular.forEach(resp.data.data, function(value, key) {
	          if(key === 'responsehtml' && (value !== null && value !== 'null')){
	            value = Base64.encode(value);
	          }
	          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
	        });
	        angular.element('flutterwave #flutterwaveCheckout').submit();
	      }
	    })
	    .catch(function(err){
	      $log.debug(err);
	      $scope.disableCharge = false;
	      // failed! hide modal and redirect to failure page
	      angular.element('.overlay').hide();
	      if(typeof err.data.data !== 'object'){
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="responsemessage" value="'+err.data.message+'" />');
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="status" value="error" />');
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="validations" value="'+err.data.data+'" />');
	      }else{
	        err.data.data.status = err.data.status;
	        angular.forEach(err.data.data, function(value, key) {
	          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
	        });
	      }
	      angular.element('flutterwave #flutterwaveCheckout').submit();
	    });
	  };

	  $scope.validate = function(){
	    $scope.disableValidate = true;

	    var data = {
	      "otptransactionidentifier": $scope.otptransactionidentifier,
	      "otp": $scope.otp
	    };
	    Flutterwave.initialize()
	    .then(function(resp){
	      $log.debug('x-tag: ',resp);
	      return Flutterwave.card.validate(data);
	    })
	    .then(function(resp){
	      $log.debug('The response',resp);
	      $scope.disableValidate = false;
	        // success! hide modal and redirect to success page
	        angular.element('.overlay').hide();
	        angular.forEach(resp.data.data, function(value, key) {
	          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
	        });
	        angular.element('flutterwave #flutterwaveCheckout').submit();
	      })
	    .catch(function(err){
	      $log.debug(err);
	      $scope.disableValidate = false;
	      // failed! hide modal and redirect to failure page
	      angular.element('.overlay').hide();
	      if(typeof err.data.data !== 'object'){
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="responsemessage" value="'+err.data.message+'" />');
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="status" value="error" />');
	        angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="validations" value="'+err.data.data+'" />');
	      }else{
	        err.data.data.status = err.data.status;
	        angular.forEach(err.data.data, function(value, key) {
	          angular.element('flutterwave #flutterwaveCheckout').append('<input type="hidden" name="'+key+'" value="'+value+'" />');
	        });
	      }
	      
	      angular.element('flutterwave #flutterwaveCheckout').submit();
	    });
	  };
	}]);

	if(noAngular){
	  angular.bootstrap('#flutterwaveContainer', ['ng-flutterwave']);
	}

	// Add jQuery script here

	if(typeof $ !== 'undefined'){

	  $('flutterwave').ready(function(){

	    function trimCard(cardNumber){ // jshint ignore:line 
	      while(/\s/.test(cardNumber)){
	        cardNumber= cardNumber.replace(" ", "");
	      }
	      return cardNumber;
	    }

	    function changeBG() {
	      var cardinput = $('flutterwave #card');
	      var cardnumber = $('flutterwave #card').val();
	      var mcArray = ["51", "52", "53", "54", "55"];

	      if ((cardnumber.charAt(0) * 1) === 4) {
	        cardinput.css('background-image', 'url("data:image/png;base64,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")');
	      } else if ((mcArray.indexOf(cardnumber.substr(0, 2)) * 1) !== -1) {
	        cardinput.css('background-image', 'url("data:image/gif;base64,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")');
	      } else {
	        cardinput.css('background-image', 'url("data:image/png;base64,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dQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCACFB1/pBAgQIFBXQACoO/YqJ0CAAIHCAgJA4cFXOgECBAjUFRAA6o69ygkQIECgsIAAUHjwlU6AAAECdQUEgLpjr3ICBAgQKCwgABQefKUTIECAQF0BAaDu2KucAAECBAoLCABJg//7pt3vk9rXLIEeAi9aI5/1aEgbBAgsTkAASBqybQBIal6zBLoI/EMA6OKoEQJLFBAAkkZNAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKThEgCSYDXbVUAA6MqpMQKLEhAAkoZLAEiC1WxXAQGgK6fGCCxKQABIGi4BIAlWs10FBICunBojsCgBASBpuASAJFjNdhUQALpyaozAogQEgKTh2gaA+D9YC4E5C3w2542zbQQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMVEADmOza2jAABAgQIpAkIAGm0GiZAgAABAvMV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")');
	      }
	    }

	    function changeCard(){
	      var text = document.getElementById("card").value;
	      text = text.replace(/\s/g, '');
	      text = text.replace(/[A-z]/, '');
	      text = text.replace(/((?![0-9]).)/, ''); // jshint ignore:line 
	      text = text.replace(/([0-9]{4})/g,'$1 ');
	      document.getElementById('card').value = text;
	    }

	    function changeDate(){ // jshint ignore:line 
	      var text= document.getElementById("expiry").value;
	      text= text.replace(/[0-9]{2}/g, text+ ' / ');
	      document.getElementById("expiry").value= text;
	    }

	    $("flutterwave input").keydown(function(evt){
	      var charCode=evt.charCode || evt.keyCode;
	      if((charCode * 1) === 32){
	        return false;
	      }

	    });


	    $("flutterwave #card").on('keyup', function(e){
	      if(!((e.keyCode * 1) === 8 || (e.keyCode * 1) === 37 || (e.keyCode * 1) === 38 || (e.keyCode * 1) === 39 || (e.keyCode * 1) === 40 || (e.keyCode * 1) === 17)){
	        changeCard();
	        changeBG();
	        if($(this).val().length >= 19){
	          $("flutterwave #expiry").focus();
	        }
	      }
	    });

	    $("flutterwave #card").blur(function(){
	      changeCard();
	    });


	    $("flutterwave #expiry").keyup(function(e){
	      var expiry= $("flutterwave #expiry").val();
	      if(!(((e.keyCode * 1) === 8 || (e.keyCode * 1) === 37 || (e.keyCode * 1) === 38 || (e.keyCode * 1) === 39 || (e.keyCode * 1) === 40))){ 
	        if(expiry.charAt(0) > 1){
	          document.getElementById("expiry").value = "0" +expiry+ " / ";
	        }   
	        if(expiry.length === 2){
	          document.getElementById("expiry").value = expiry += " / ";
	        }
	      }

	      if(expiry.length>=7){
	        $("flutterwave #cvv").focus();
	      }

	    });
	  });

	}else{
	  console.warn('Could not detect jquery. Please include Jquery'); // jshint ignore:line 
	}


/***/ }
/******/ ]);