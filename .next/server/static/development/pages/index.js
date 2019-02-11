module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/BreweryMarker.js":
/*!*************************************!*\
  !*** ./components/BreweryMarker.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/components/BreweryMarker.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var BreweryMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BreweryMarker, _React$Component);

  function BreweryMarker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BreweryMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BreweryMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleToggleClose", function () {
      _this.setState({
        isOpen: false
      });
    });

    return _this;
  }

  _createClass(BreweryMarker, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
        position: {
          lat: Number(this.props.brewery.latitude),
          lng: Number(this.props.brewery.longitude)
        },
        onClick: this.handleToggleOpen,
        icon: {
          url: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Beer_mug.svg',
          scaledSize: {
            width: 40,
            height: 40
          }
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, this.state.isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["InfoWindow"], {
        onCloseClick: this.handleToggleClose,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, this.props.brewery.name, this.props.brewery.brewery_type, this.props.brewery.street, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: this.props.brewery.website_url,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, this.props.brewery.website_url))) : null));
    }
  }]);

  return BreweryMarker;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (BreweryMarker);

/***/ }),

/***/ "./components/CitySearch.js":
/*!**********************************!*\
  !*** ./components/CitySearch.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Results__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Results */ "./components/Results.js");
var _jsxFileName = "/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/components/CitySearch.js";



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var CitySearch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CitySearch, _React$Component);

  function CitySearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CitySearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CitySearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      city: '',
      breweries: [],
      searched: false,
      query: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleSubmit", function (event) {
      event.preventDefault();
      var searchQuery = _this.state.city;
      fetch("https://api.openbrewerydb.org/breweries?by_city=".concat(searchQuery, "&per_page=50")).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.length < 1) {
          _this.setState({
            searched: !false,
            query: searchQuery
          });
        } // console.log(json);
        // Filter Breweries that have no lat or length, or are type planning


        var jsonFiltered = json.filter(function (json) {
          return json.latitude !== null;
        }); // console.log(jsonFiltered);

        _this.setState({
          breweries: jsonFiltered,
          searched: !false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (event) {
      _this.setState({
        city: event.target.value.trim()
      });
    });

    return _this;
  }

  _createClass(CitySearch, [{
    key: "render",
    value: function render() {
      var breweries = this.state.breweries;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, "City"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        placeholder: "US City",
        onChange: this.handleChange,
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        type: "submit",
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Search")), breweries.length > 1 && this.state.searched ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Results__WEBPACK_IMPORTED_MODULE_2__["default"], {
        breweries: this.state.breweries,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }) : breweries.length < 1 && this.state.searched ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-113864811",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "No results found for ", this.state.query) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "113864811",
        css: "form.jsx-113864811{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJhZ29uL0RvY3VtZW50cy9nb256YV93b3JrL3JlYWN0LWJyZXdlcnktY2l0eS1tYXBwZXIvY29tcG9uZW50cy9DaXR5U2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFVyxBQUdpQyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL2dhcmFnb24vRG9jdW1lbnRzL2dvbnphX3dvcmsvcmVhY3QtYnJld2VyeS1jaXR5LW1hcHBlci9jb21wb25lbnRzL0NpdHlTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSAnLi4vY29tcG9uZW50cy9SZXN1bHRzJztcblxuY2xhc3MgQ2l0eVNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGNpdHk6ICcnLFxuICAgIGJyZXdlcmllczogW10sXG4gICAgc2VhcmNoZWQ6IGZhbHNlLFxuICAgIHF1ZXJ5OiAnJyxcbiAgfTtcblxuICBoYW5kbGVTdWJtaXQgPSBldmVudCA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHNlYXJjaFF1ZXJ5ID0gdGhpcy5zdGF0ZS5jaXR5O1xuXG4gICAgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbmJyZXdlcnlkYi5vcmcvYnJld2VyaWVzP2J5X2NpdHk9JHtzZWFyY2hRdWVyeX0mcGVyX3BhZ2U9NTBgXG4gICAgKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgfSlcbiAgICAgIC50aGVuKGpzb24gPT4ge1xuICAgICAgICBpZiAoanNvbi5sZW5ndGggPCAxKSB7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBzZWFyY2hlZDogIWZhbHNlLFxuICAgICAgICAgICAgcXVlcnk6IHNlYXJjaFF1ZXJ5LFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGpzb24pO1xuICAgICAgICAvLyBGaWx0ZXIgQnJld2VyaWVzIHRoYXQgaGF2ZSBubyBsYXQgb3IgbGVuZ3RoLCBvciBhcmUgdHlwZSBwbGFubmluZ1xuICAgICAgICBjb25zdCBqc29uRmlsdGVyZWQgPSBqc29uLmZpbHRlcihqc29uID0+IGpzb24ubGF0aXR1ZGUgIT09IG51bGwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhqc29uRmlsdGVyZWQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBicmV3ZXJpZXM6IGpzb25GaWx0ZXJlZCxcbiAgICAgICAgICBzZWFyY2hlZDogIWZhbHNlLFxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIGhhbmRsZUNoYW5nZSA9IGV2ZW50ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgY2l0eTogZXZlbnQudGFyZ2V0LnZhbHVlLnRyaW0oKSB9KTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgYnJld2VyaWVzID0gdGhpcy5zdGF0ZS5icmV3ZXJpZXM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgPGxhYmVsPkNpdHk8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVUyBDaXR5XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAge2JyZXdlcmllcy5sZW5ndGggPiAxICYmIHRoaXMuc3RhdGUuc2VhcmNoZWQgPyAoXG4gICAgICAgICAgPFJlc3VsdHMgYnJld2VyaWVzPXt0aGlzLnN0YXRlLmJyZXdlcmllc30gLz5cbiAgICAgICAgKSA6IGJyZXdlcmllcy5sZW5ndGggPCAxICYmIHRoaXMuc3RhdGUuc2VhcmNoZWQgPyAoXG4gICAgICAgICAgPGRpdj5ObyByZXN1bHRzIGZvdW5kIGZvciB7dGhpcy5zdGF0ZS5xdWVyeX08L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgZm9ybSB7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXR5U2VhcmNoO1xuIl19 */\n/*@ sourceURL=/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/components/CitySearch.js */",
        __self: this
      }));
    }
  }]);

  return CitySearch;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CitySearch);

/***/ }),

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-maps */ "react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_BreweryMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BreweryMarker */ "./components/BreweryMarker.js");
var _jsxFileName = "/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/components/Map.js";




var Map = Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withScriptjs"])(Object(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["withGoogleMap"])(function (props) {
  var markers = props.breweries.map(function (brewery) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_BreweryMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: brewery.id,
      brewery: brewery,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    });
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    defaultZoom: 10,
    center: {
      lat: Number(props.breweries[0].latitude),
      lng: Number(props.breweries[0].longitude)
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, markers);
}));
/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ }),

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Map */ "./components/Map.js");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/components/Results.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var _getConfig = next_config__WEBPACK_IMPORTED_MODULE_2___default()(),
    publicRuntimeConfig = _getConfig.publicRuntimeConfig;

var Results =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Results, _React$Component);

  function Results() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Results);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Results)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleBreweryClick", function (event) {
      event.preventDefault(); // console.log(brewery.name);
    });

    return _this;
  }

  _createClass(Results, [{
    key: "render",
    value: function render() {
      var GMAP_API = publicRuntimeConfig.gmapAPI;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, this.props.breweries.map(function (brewery) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: brewery.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          onClick: function onClick(event) {
            event.preventDefault();
            console.log(brewery.name);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, brewery.name));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Map__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isMarkerShown: true,
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=".concat(GMAP_API, "&v=3.exp&libraries=geometry,drawing,places"),
        loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }),
        containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: "400px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }),
        mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            height: "100%"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }),
        breweries: this.props.breweries,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }));
    }
  }]);

  return Results;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Results);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_CitySearch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/CitySearch */ "./components/CitySearch.js");
var _jsxFileName = "/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/pages/index.js";




var Index = function Index() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-4270222549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-4270222549",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "City Brewery Mapper"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_CitySearch__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1965898015",
    css: "h1.jsx-4270222549{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJhZ29uL0RvY3VtZW50cy9nb256YV93b3JrL3JlYWN0LWJyZXdlcnktY2l0eS1tYXBwZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUU8sQUFHNkIsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9nYXJhZ29uL0RvY3VtZW50cy9nb256YV93b3JrL3JlYWN0LWJyZXdlcnktY2l0eS1tYXBwZXIvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2l0eVNlYXJjaCBmcm9tICcuLi9jb21wb25lbnRzL0NpdHlTZWFyY2gnO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IChcbiAgPGRpdj5cbiAgICA8aDE+Q2l0eSBCcmV3ZXJ5IE1hcHBlcjwvaDE+XG4gICAgPENpdHlTZWFyY2ggLz5cblxuICAgIDxzdHlsZSBqc3g+XG4gICAgICB7YFxuICAgICAgICBoMSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbiAgICAgIGh0bWwsXG4gICAgICBib2R5LFxuICAgICAgZGl2LFxuICAgICAgc3BhbixcbiAgICAgIGFwcGxldCxcbiAgICAgIG9iamVjdCxcbiAgICAgIGlmcmFtZSxcbiAgICAgIGgxLFxuICAgICAgaDIsXG4gICAgICBoMyxcbiAgICAgIGg0LFxuICAgICAgaDUsXG4gICAgICBoNixcbiAgICAgIHAsXG4gICAgICBibG9ja3F1b3RlLFxuICAgICAgcHJlLFxuICAgICAgYSxcbiAgICAgIGFiYnIsXG4gICAgICBhY3JvbnltLFxuICAgICAgYWRkcmVzcyxcbiAgICAgIGJpZyxcbiAgICAgIGNpdGUsXG4gICAgICBjb2RlLFxuICAgICAgZGVsLFxuICAgICAgZGZuLFxuICAgICAgZW0sXG4gICAgICBpbWcsXG4gICAgICBpbnMsXG4gICAgICBrYmQsXG4gICAgICBxLFxuICAgICAgcyxcbiAgICAgIHNhbXAsXG4gICAgICBzbWFsbCxcbiAgICAgIHN0cmlrZSxcbiAgICAgIHN0cm9uZyxcbiAgICAgIHN1YixcbiAgICAgIHN1cCxcbiAgICAgIHR0LFxuICAgICAgdmFyLFxuICAgICAgYixcbiAgICAgIHUsXG4gICAgICBpLFxuICAgICAgY2VudGVyLFxuICAgICAgZGwsXG4gICAgICBkdCxcbiAgICAgIGRkLFxuICAgICAgb2wsXG4gICAgICB1bCxcbiAgICAgIGxpLFxuICAgICAgZmllbGRzZXQsXG4gICAgICBmb3JtLFxuICAgICAgbGFiZWwsXG4gICAgICBsZWdlbmQsXG4gICAgICB0YWJsZSxcbiAgICAgIGNhcHRpb24sXG4gICAgICB0Ym9keSxcbiAgICAgIHRmb290LFxuICAgICAgdGhlYWQsXG4gICAgICB0cixcbiAgICAgIHRoLFxuICAgICAgdGQsXG4gICAgICBhcnRpY2xlLFxuICAgICAgYXNpZGUsXG4gICAgICBjYW52YXMsXG4gICAgICBkZXRhaWxzLFxuICAgICAgZW1iZWQsXG4gICAgICBmaWd1cmUsXG4gICAgICBmaWdjYXB0aW9uLFxuICAgICAgZm9vdGVyLFxuICAgICAgaGVhZGVyLFxuICAgICAgaGdyb3VwLFxuICAgICAgbWVudSxcbiAgICAgIG5hdixcbiAgICAgIG91dHB1dCxcbiAgICAgIHJ1YnksXG4gICAgICBzZWN0aW9uLFxuICAgICAgc3VtbWFyeSxcbiAgICAgIHRpbWUsXG4gICAgICBtYXJrLFxuICAgICAgYXVkaW8sXG4gICAgICB2aWRlbyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBmb250LXNpemU6IDEwMCU7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgICAgIH1cbiAgICAgIC8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbiAgICAgIGFydGljbGUsXG4gICAgICBhc2lkZSxcbiAgICAgIGRldGFpbHMsXG4gICAgICBmaWdjYXB0aW9uLFxuICAgICAgZmlndXJlLFxuICAgICAgZm9vdGVyLFxuICAgICAgaGVhZGVyLFxuICAgICAgaGdyb3VwLFxuICAgICAgbWVudSxcbiAgICAgIG5hdixcbiAgICAgIHNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIGJvZHkge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgIH1cbiAgICAgIG9sLFxuICAgICAgdWwge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgfVxuICAgICAgYmxvY2txdW90ZSxcbiAgICAgIHEge1xuICAgICAgICBxdW90ZXM6IG5vbmU7XG4gICAgICB9XG4gICAgICBibG9ja3F1b3RlOmJlZm9yZSxcbiAgICAgIGJsb2NrcXVvdGU6YWZ0ZXIsXG4gICAgICBxOmJlZm9yZSxcbiAgICAgIHE6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgY29udGVudDogbm9uZTtcbiAgICAgIH1cbiAgICAgIHRhYmxlIHtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/pages/index.js */",
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1364526147",
    css: "html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYXJhZ29uL0RvY3VtZW50cy9nb256YV93b3JrL3JlYWN0LWJyZXdlcnktY2l0eS1tYXBwZXIvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZXVCLEFBd0ZrQixBQW1CSyxBQUdBLEFBSUUsQUFJSixBQU1ELEFBSWMsU0F2Q2YsRUFvQ0csQ0FOZixFQVhBLEFBR0EsRUFJQSxHQXpCVyxLQW9DWCxDQUdtQixHQXRDRixjQXVDakIsQ0F0Q2UsYUFDVyx3QkFDMUIiLCJmaWxlIjoiL1VzZXJzL2dhcmFnb24vRG9jdW1lbnRzL2dvbnphX3dvcmsvcmVhY3QtYnJld2VyeS1jaXR5LW1hcHBlci9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaXR5U2VhcmNoIGZyb20gJy4uL2NvbXBvbmVudHMvQ2l0eVNlYXJjaCc7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4gKFxuICA8ZGl2PlxuICAgIDxoMT5DaXR5IEJyZXdlcnkgTWFwcGVyPC9oMT5cbiAgICA8Q2l0eVNlYXJjaCAvPlxuXG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgICAgIGgxIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0L1xuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuICAgICAgaHRtbCxcbiAgICAgIGJvZHksXG4gICAgICBkaXYsXG4gICAgICBzcGFuLFxuICAgICAgYXBwbGV0LFxuICAgICAgb2JqZWN0LFxuICAgICAgaWZyYW1lLFxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2LFxuICAgICAgcCxcbiAgICAgIGJsb2NrcXVvdGUsXG4gICAgICBwcmUsXG4gICAgICBhLFxuICAgICAgYWJicixcbiAgICAgIGFjcm9ueW0sXG4gICAgICBhZGRyZXNzLFxuICAgICAgYmlnLFxuICAgICAgY2l0ZSxcbiAgICAgIGNvZGUsXG4gICAgICBkZWwsXG4gICAgICBkZm4sXG4gICAgICBlbSxcbiAgICAgIGltZyxcbiAgICAgIGlucyxcbiAgICAgIGtiZCxcbiAgICAgIHEsXG4gICAgICBzLFxuICAgICAgc2FtcCxcbiAgICAgIHNtYWxsLFxuICAgICAgc3RyaWtlLFxuICAgICAgc3Ryb25nLFxuICAgICAgc3ViLFxuICAgICAgc3VwLFxuICAgICAgdHQsXG4gICAgICB2YXIsXG4gICAgICBiLFxuICAgICAgdSxcbiAgICAgIGksXG4gICAgICBjZW50ZXIsXG4gICAgICBkbCxcbiAgICAgIGR0LFxuICAgICAgZGQsXG4gICAgICBvbCxcbiAgICAgIHVsLFxuICAgICAgbGksXG4gICAgICBmaWVsZHNldCxcbiAgICAgIGZvcm0sXG4gICAgICBsYWJlbCxcbiAgICAgIGxlZ2VuZCxcbiAgICAgIHRhYmxlLFxuICAgICAgY2FwdGlvbixcbiAgICAgIHRib2R5LFxuICAgICAgdGZvb3QsXG4gICAgICB0aGVhZCxcbiAgICAgIHRyLFxuICAgICAgdGgsXG4gICAgICB0ZCxcbiAgICAgIGFydGljbGUsXG4gICAgICBhc2lkZSxcbiAgICAgIGNhbnZhcyxcbiAgICAgIGRldGFpbHMsXG4gICAgICBlbWJlZCxcbiAgICAgIGZpZ3VyZSxcbiAgICAgIGZpZ2NhcHRpb24sXG4gICAgICBmb290ZXIsXG4gICAgICBoZWFkZXIsXG4gICAgICBoZ3JvdXAsXG4gICAgICBtZW51LFxuICAgICAgbmF2LFxuICAgICAgb3V0cHV0LFxuICAgICAgcnVieSxcbiAgICAgIHNlY3Rpb24sXG4gICAgICBzdW1tYXJ5LFxuICAgICAgdGltZSxcbiAgICAgIG1hcmssXG4gICAgICBhdWRpbyxcbiAgICAgIHZpZGVvIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICAgICAgfVxuICAgICAgLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuICAgICAgYXJ0aWNsZSxcbiAgICAgIGFzaWRlLFxuICAgICAgZGV0YWlscyxcbiAgICAgIGZpZ2NhcHRpb24sXG4gICAgICBmaWd1cmUsXG4gICAgICBmb290ZXIsXG4gICAgICBoZWFkZXIsXG4gICAgICBoZ3JvdXAsXG4gICAgICBtZW51LFxuICAgICAgbmF2LFxuICAgICAgc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgfVxuICAgICAgb2wsXG4gICAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICB9XG4gICAgICBibG9ja3F1b3RlLFxuICAgICAgcSB7XG4gICAgICAgIHF1b3Rlczogbm9uZTtcbiAgICAgIH1cbiAgICAgIGJsb2NrcXVvdGU6YmVmb3JlLFxuICAgICAgYmxvY2txdW90ZTphZnRlcixcbiAgICAgIHE6YmVmb3JlLFxuICAgICAgcTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgfVxuICAgICAgdGFibGUge1xuICAgICAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgICAgICBib3JkZXItc3BhY2luZzogMDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/garagon/Documents/gonza_work/react-brewery-city-mapper/pages/index.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-google-maps":
/*!************************************!*\
  !*** external "react-google-maps" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-maps");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map