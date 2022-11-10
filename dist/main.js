/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  margin: 0;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n\nbody {\n  height: auto;\n}\n\n.hidden {\n  visibility: hidden;\n}\n\nbutton {\n  width: 80px;\n  height: 45px;\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #ebebeb;\n  border-radius: 200px;\n  -webkit-box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(255, 255, 255, 0.4);\n          box-shadow: inset 0 5px 15px rgba(0, 0, 0, 0.4), inset 0 -5px 15px rgba(255, 255, 255, 0.4);\n  cursor: pointer;\n  -webkit-transition: 0.3s;\n  transition: 0.3s;\n}\n\n#toggle-icon {\n  position: absolute;\n  width: 40%;\n  height: auto;\n}\n\n.carousel {\n  background: #eee;\n}\n\n.carousel-cell {\n  width: 28%;\n  height: 250px;\n  margin-right: 10px;\n  background: #8c8;\n  border-radius: 5px;\n}\n\n#loader {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  z-index: 1;\n  width: 120px;\n  height: 120px;\n  margin: -76px 0 0 -76px;\n  border: 16px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 16px solid #3498db;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n.animate-bottom {\n  position: relative;\n  -webkit-animation-name: animatebottom;\n  -webkit-animation-duration: 1s;\n  animation-name: animatebottom;\n  animation-duration: 1s;\n}\n\n@-webkit-keyframes animatebottom {\n  from {\n    bottom: -100px;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n@keyframes animatebottom {\n  from {\n    bottom: -100px;\n    opacity: 0;\n  }\n  to {\n    bottom: 0;\n    opacity: 1;\n  }\n}\n\n#main-section, header {\n  display: none;\n}\n\nmain #daily-info {\n  border: solid black;\n  width: 100%;\n  height: 400px;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[2];\n      grid-template-columns: repeat(2, 1fr);\n  -ms-grid-rows: (1fr)[2];\n      grid-template-rows: repeat(2, 1fr);\n}\n\nmain #daily-info div {\n  border: solid black;\n}\n\nmain #daily-info div .daily-icon {\n  width: 80px;\n}\n\nmain #chart {\n  position: relative;\n}\n\nmain #chart #myChart {\n  width: auto;\n}\n/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/styles/_base.scss","webpack://./src/styles/style.css","webpack://./src/styles/_toggle_button.scss","webpack://./src/styles/_carousel.scss","webpack://./src/styles/_loader.scss","webpack://./src/styles/style.scss"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,8BAAsB;UACvB,sBAAA;ACCD;;AAEA;EDCC,YAAA;ACCD;;AAEA;EDCC,kBAAA;ACCD;;AAEA;ECfE,WAAQ;EACR,YAAU;EACV,kBAAa;EACb,oBAAmB;EACnB,oBAAiB;EACjB,aAAY;EACZ,yBAAoB;MACpB,sBAAwB;UAChB,mBAAO;EACf,wBAAgB;MACjB,qBAAA;UDiBS,uBAAuB;ECfjC,mBAAa;EACX,oBAAkB;EAClB,mGAAU;UACF,2FAAI;EACb,eAAA;EDiBC,wBAAwB;EEnC1B,gBAAU;AFqCV;;AAEA;EEnCA,kBAAe;EACb,UAAU;EACV,YAAQ;AFqCV;;AAEA;EEnCC,gBAAA;AFqCD;;AAEA;EG/CE,UAAS;EACT,aAAQ;EACR,kBAAU;EACV,gBAAY;EACZ,kBAAa;AHiDf;;AAEA;EG/CE,kBAAY;EACZ,SAAA;EACA,QAAA;EACD,UAAA;EHiDC,YAAY;EG/Cd,aAAA;EACE,uBAAE;EHiDF,0BGjDwB;EHkDxB,kBAAkB;EGjDlB,8BAAI;EHmDJ,0CGnDwC;EHoDxC,kCAAkC;AACpC;;AGlDA;EACE;IAAK,+BAAuB;EHsD5B;EGrDA;IAAO,iCAAyB;EHwDhC;AACF;;AGtDA;EACE;IACA,+BAAwB;YACxB,uBAA8B;EAC9B;EACA;IACD,iCAAA;YHyDW,yBAAyB;EGvDrC;AHyDA;;AAEA;EACE,kBAAkB;EGtDlB,qCAAE;EHwDF,8BGvDW;EHwDX,6BGvDY;EHwDZ,sBAAsB;AACxB;;AGrDA;EACE;IACE,cAAc;IACd,UAAU;EHwDZ;EGrDA;IACE,SAAS;IACT,UAAU;EHuDZ;AACF;;AIxGA;EACE;IACD,cAAA;IJ2GG,UAAU;EIzGd;EAEI;IACA,SAAW;IACX,UAAQ;EACR;AJ0GJ;;AAEA;EACE,aAAa;AIlHf;;AJqHA;EACE,mBAAmB;EItHrB,WACE;EAYM,aAAW;EACZ,iBAAA;EJ4GL,aAAa;EI1Hf,0BAkBS;MACL,qCAAkB;EAKnB,uBAAA;MJsGG,kCAAkC;AI9HxC;;AJiIA;EACE,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;AACA,oCAAoC","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _toggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _currentWeather_createCurrentWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _forecast_chart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
/* harmony import */ var _forecast_7DayForecast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _currentWeather_createDailyInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21);






const displayContents = () => {
  document.getElementById('loader').style.display = 'none';

  document.querySelector('header').style.display = 'block';

  document.getElementById('main-section').style.display = 'block';

  document.querySelector('.carousel').style.visibility = 'visible';
};

const loadContents = () => {
  setTimeout(displayContents, 5000);
  (0,_toggle__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_currentWeather_createCurrentWeather__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_forecast_chart__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_forecast_7DayForecast__WEBPACK_IMPORTED_MODULE_3__["default"])();
  (0,_currentWeather_createDailyInfo__WEBPACK_IMPORTED_MODULE_4__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContents);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toggleDarkMode = () => {
  const toggleBtn = document.querySelector('button');
  const toggleIcon = document.getElementById('toggle-icon');

  toggleIcon.src = '../icons/moon.png';

  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if (document.body.className === '') {
      toggleIcon.src = '../icons/moon.png';
      toggleBtn.style.background = '#ebebeb';
    } else {
      toggleIcon.src = '../icons/sun.png';
      toggleBtn.style.background = '#000';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleDarkMode);


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _tempConversion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);



const createCurrentWeather = async () => {
  const {
    description, temperature, icon, name, country, lat, lon,
  } = await (0,_currentWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const location = document.getElementById('location');
  location.textContent = `Location: ${name}, ${country}`;

  const latitude = document.getElementById('lat');
  latitude.textContent = `Latitude: ${lat}`;

  const longitude = document.getElementById('lon');
  longitude.textContent = `Longitude: ${lon}`;

  const currentTemp = document.getElementById('current-temp');
  currentTemp.textContent = `${(0,_tempConversion__WEBPACK_IMPORTED_MODULE_1__.conversionToCelsius)(temperature)} °C`;

  const currentDescription = document.getElementById('description');
  currentDescription.textContent = description;

  const currentIcon = document.getElementById('current-weather-icon');
  currentIcon.src = `icons/${icon}.png`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createCurrentWeather);


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);



const fetchWeatherData = async () => {
  const { lat, lon, country, name } = await (0,_cityData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const response = await fetch(`${_apiURL__WEBPACK_IMPORTED_MODULE_1__.weatherURL}lat=${lat}&lon=${lon}${_apiURL__WEBPACK_IMPORTED_MODULE_1__.appID}`)
    .then((res) => res.json())
    .then((data) => {
      const { description } = data.weather[0];
      const windSpeed = data.wind.speed;
      const windDeg = data.wind.deg;
      const { humidity } = data.main;
      const temperature = data.main.temp;
      const { icon } = data.weather[0];
      const { pressure } = data.main;

      return {
        description,
        pressure,
        windSpeed,
        windDeg,
        humidity,
        temperature,
        icon,
        name,
        country,
        lat,
        lon,
      };
    });
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchWeatherData);


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);


const search = document.getElementById('search');

let city = JSON.parse(localStorage.getItem('city')) || 'London';

search.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (search.value === '') {
      return;
    }
    city = search.value.trim();
    localStorage.setItem('city', JSON.stringify(city));
    window.location.reload();
  }
});

const fetchCityData = async () => {
  const response = await fetch(`${_apiURL__WEBPACK_IMPORTED_MODULE_0__.cityURL}${city}${_apiURL__WEBPACK_IMPORTED_MODULE_0__.appID}`)
    .then((res) => res.json())
    .then((data) => {
      const { lat, lon, country, name } = data[0];
      return {
        lat,
        lon,
        country,
        name,
      };
    })
    .catch(() => {
      const errorMsg = document.getElementById('error');
      errorMsg.textContent =
        'Please, enter a correct city or a starting letter...';
      errorMsg.style.display = 'block';
      document.querySelector('main').style.display = 'none';
    });
  search.value = '';
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchCityData);


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "airPollutionURL": () => (/* binding */ airPollutionURL),
/* harmony export */   "appID": () => (/* binding */ appID),
/* harmony export */   "cityURL": () => (/* binding */ cityURL),
/* harmony export */   "forecastURL": () => (/* binding */ forecastURL),
/* harmony export */   "weatherURL": () => (/* binding */ weatherURL)
/* harmony export */ });
const appID = `&appid=${"31d683314d5ebc4e9834eae1972044a2"}`;
const cityURL = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherURL = 'https://api.openweathermap.org/data/2.5/weather?';
const airPollutionURL = 'http://api.openweathermap.org/data/2.5/air_pollution?';
const forecastURL = 'http://api.openweathermap.org/data/2.5/forecast?';




/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conversionToCelsius": () => (/* binding */ conversionToCelsius),
/* harmony export */   "conversionToFahrenheit": () => (/* binding */ conversionToFahrenheit)
/* harmony export */ });
const conversionToCelsius = (temp) => {
  const celsius = temp - 273.15;
  return celsius.toFixed(1);
};

const conversionToFahrenheit = (temp) => {
  const fahrenheit = ((temp - 273.15) * 9) / 5 + 32;
  return fahrenheit.toFixed(2);
};




/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forecastData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const xValues = [];
let temperature;

const createChart = () => {
  /* eslint-disable */
  const weatherChart = new Chart('myChart', {
    /* eslint-enable */
    type: 'line',
    data: {
      labels: xValues,
      datasets: [
        {
          data: temperature,
          borderColor: 'blue',
          fill: false,
          label: 'Temperature °C',
        },
      ],
    },
    options: {
      legend: { display: true },
    },
  });
  return weatherChart;
};

const getTemperature = (arr) => {
  temperature = arr.map((data) => data.main.temp);
  return temperature;
};

const getNext24HoursChart = async () => {
  const { dateArray } = await (0,_forecastData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const next24Hours = dateArray.slice(0, 9);
  console.log(next24Hours);
  const hoursArray = next24Hours.map((data) => data.dt_txt.split(' '));
  const hours = hoursArray.map((arr) => arr[1]);
  hours.map((hour) => xValues.push(hour));
  getTemperature(next24Hours);
  createChart();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNext24HoursChart);


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);



const fetchForecast = async () => {
  const { lat, lon } = await (0,_cityData__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const response = await fetch(`${_apiURL__WEBPACK_IMPORTED_MODULE_1__.forecastURL}lat=${lat}&lon=${lon}${_apiURL__WEBPACK_IMPORTED_MODULE_1__.appID}`)
    .then((res) => res.json())
    .then((data) => {
      const dateArray = data.list;
      const temperatureArray = data.list.map((d) => d.main.temp);
      const maxTemperatureArray = data.list.map((d) => d.main.temp_max);
      const minTemperatureArray = data.list.map((d) => d.main.temp_min);
      const iconArray = data.list.map((d) => d.weather[0].icon);
      const descriptionArray = data.list.map((d) => d.weather[0].description);
      return {
        dateArray,
        temperatureArray,
        maxTemperatureArray,
        minTemperatureArray,
        iconArray,
        descriptionArray,
      };
    });
  console.log(response);
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchForecast);


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forecastData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);


const createForecast = async () => {
  const {
    maxTemperatureArray,
    minTemperatureArray,
    descriptionArray,
    iconArray,
    temperatureArray,
    dateArray,
  } = await (0,_forecastData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const cells = [...document.querySelectorAll('.carousel-cell')];

  for (let i = 0; i < cells.length; i += 1) {
    const dayIcon = document.createElement('img');
    dayIcon.setAttribute('class', 'day-icon');
    dayIcon.src = `icons/${iconArray[i]}.png`;

    const temperature = document.createElement('span');
    temperature.textContent = `${temperatureArray[i]}`;

    const weatherDescription = document.createElement('span');
    weatherDescription.textContent = `${descriptionArray[i]}`;

    const maxTemp = document.createElement('span');
    maxTemp.textContent = `Max: ${maxTemperatureArray[i]}°C`;

    const minTemp = document.createElement('span');
    minTemp.textContent = `Min: ${minTemperatureArray[i]}°C`;

    const day = document.createElement('span');
    const hour = document.createElement('span');
    const hoursAndDateArray = dateArray.map((data) => data.dt_txt.split(' '));
    day.textContent = `${hoursAndDateArray[i][0]}`;
    hour.textContent = `${hoursAndDateArray[i][1]}`;

    cells[i].appendChild(dayIcon);
    cells[i].appendChild(temperature);
    cells[i].appendChild(weatherDescription);
    cells[i].appendChild(maxTemp);
    cells[i].appendChild(minTemp);
    cells[i].appendChild(day);
    cells[i].appendChild(hour);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForecast);


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _pressure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var _airQuality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _humidity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26);





const createDailyInfo = async () => {
  (0,_wind__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_pressure__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_airQuality__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_humidity__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createDailyInfo);


/***/ }),
/* 22 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const estimateWindSpeed = (speed) => {
  let description;
  switch (true) {
    case 0:
      description = 'Calm';
      break;
    case speed >= 1 && speed <= 3:
      description = 'Light Air';
      break;
    case speed >= 4 && speed <= 7:
      description = 'Light Breeze';
      break;
    case speed >= 8 && speed <= 12:
      description = 'Gentle Breeze';
      break;
    case speed >= 13 && speed <= 18:
      description = 'Moderate Breeze';
      break;
    case speed >= 19 && speed <= 24:
      description = 'Fresh Breeze';
      break;
    case speed >= 25 && speed <= 31:
      description = 'Strong Breeze';
      break;
    case speed >= 32 && speed <= 38:
      description = 'Near Gale';
      break;
    case speed >= 39 && speed <= 46:
      description = 'Gale';
      break;
    case speed >= 47 && speed <= 54:
      description = 'Strong Gale';
      break;
    case speed >= 55 && speed <= 63:
      description = 'Whole Gale';
      break;
    case speed >= 64 && speed <= 75:
      description = 'Storm Force';
      break;
    case speed > 75:
      description = 'Hurricane Force';
      break;
    default:
      description = 'Calm';
      break;
  }
  return description;
};

const createWindInfo = async () => {
  const { windSpeed, windDeg } = await (0,_currentWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const windDescription = document.getElementById('wind-description');
  windDescription.textContent = estimateWindSpeed(speed);

  const windDegree = document.getElementById('deg');
  windDegree.textContent = `Degree: ${windDeg}`;

  const dailyWindSpeed = document.getElementById('speed');
  dailyWindSpeed.textContent = `Speed: ${windSpeed}mph`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createWindInfo);


/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const getPressure = (inHg) => {
  let description;
  switch (true) {
    case inHg > 30.2:
      description = 'High';
      break;
    case inHg >= 29.8 && inHg <= 30.2:
      description = 'Normal';
      break;
    case inHg < 29.8:
      description = 'Low';
      break;
    default:
      description = 'Normal';
      break;
  }
  return description;
};

const convertPressureToInchOfMercury = (pressure) => pressure * 0.02953;

const createPressureInfo = async () => {
  const { pressure } = await (0,_currentWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const inchOfMercury = convertPressureToInchOfMercury(pressure);
  const pressureDescription = document.getElementById('pressure-description');
  pressureDescription.textContent = getPressure(inchOfMercury);

  const dailyPressure = document.getElementById('pressure');
  dailyPressure.textContent = `Pressure: ${pressure}hPa`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPressureInfo);


/***/ }),
/* 24 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _airQualityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);


const getAirQuality = (data) => {
  let qualityOfAir = '';
  switch (data) {
    case 1:
      qualityOfAir = 'Good';
      break;
    case 2:
      qualityOfAir = 'Fair';
      break;
    case 3:
      qualityOfAir = 'Moderate';
      break;
    case 4:
      qualityOfAir = 'Poor';
      break;
    case 5:
      qualityOfAir = 'Very Poor';
      break;
    default:
      qualityOfAir = 'Good';
      break;
  }
  return qualityOfAir;
};

const createAirQuality = async () => {
  const { airQuality, carbonMonoxide, nitrogenMonoxide, nitrogenDioxide } =
    await (0,_airQualityData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const quality = document.getElementById('quality');
  quality.textContent = getAirQuality(airQuality);

  const carbonMonoxideAmount = document.getElementById('carbon-monoxide');
  carbonMonoxideAmount.innerHTML = `CO: ${carbonMonoxide}μg/m<sup>3</sup>`;

  const nitrogenMonoxideAmount = document.getElementById('nitrogen-monoxide');
  nitrogenMonoxideAmount.innerHTML = `NO: ${nitrogenMonoxide}μg/m<sup>3</sup>`;

  const nitrogenDioxideAmount = document.getElementById('nitrogen-dioxide');
  nitrogenDioxideAmount.innerHTML = `NO<sub>2</sub>: ${nitrogenDioxide}μg/m<sup>3</sup>`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAirQuality);


/***/ }),
/* 25 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _cityData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _apiURL__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16);



const fetchAirPollutionData = async () => {
  const { lat, lon } = await (0,_cityData__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const response = await fetch(
    `${_apiURL__WEBPACK_IMPORTED_MODULE_1__.airPollutionURL}lat=${lat}&lon=${lon}${_apiURL__WEBPACK_IMPORTED_MODULE_1__.appID}`
  )
    .then((res) => res.json())
    .then((data) => {
      const airQuality = data.list[0].main.aqi;
      const carbonMonoxide = data.list[0].components.co;
      const nitrogenMonoxide = data.list[0].components.no;
      const nitrogenDioxide = data.list[0].components.no2;
      return {
        airQuality,
        carbonMonoxide,
        nitrogenMonoxide,
        nitrogenDioxide,
      };
    });
  return response;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchAirPollutionData);


/***/ }),
/* 26 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _currentWeatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);


const createHumidity = async () => {
  const { humidity } = await (0,_currentWeatherData__WEBPACK_IMPORTED_MODULE_0__["default"])();

  const dailyHumidity = document.getElementById('humidity');
  dailyHumidity.textContent = `Humidity: ${humidity}%`;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHumidity);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_loadContents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);



window.onload = () => {
  (0,_modules_loadContents__WEBPACK_IMPORTED_MODULE_1__["default"])();
};

})();

/******/ })()
;
//# sourceMappingURL=main.js.map