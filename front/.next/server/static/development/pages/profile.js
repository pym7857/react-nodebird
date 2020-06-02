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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FollowButton.js":
/*!************************************!*\
  !*** ./components/FollowButton.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n/* props가 자주 달라지는 컴포넌트들은, memo로 감싼다. */\n\nvar FollowButton = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(function (_ref) {\n  var post = _ref.post,\n      onUnfollow = _ref.onUnfollow,\n      onFollow = _ref.onFollow;\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me;\n\n  return !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(function (v) {\n    return v.id === post.User.id;\n  }) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onUnfollow(post.User.id)\n  }, \"\\uC5B8\\uD314\\uB85C\\uC6B0\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    onClick: onFollow(post.User.id)\n  }, \"\\uD314\\uB85C\\uC6B0\");\n});\nFollowButton.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,\n  onUnfollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,\n  onFollow: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowButton);\n\n//# sourceURL=webpack:///./components/FollowButton.js?");

/***/ }),

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar FollowList = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"memo\"])(function (_ref) {\n  var header = _ref.header,\n      hasMore = _ref.hasMore,\n      onClickMore = _ref.onClickMore,\n      data = _ref.data,\n      onClickStop = _ref.onClickStop;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n    style: {\n      marginBottom: '20px'\n    },\n    grid: {\n      gutter: 4,\n      xs: 2,\n      md: 3\n    },\n    size: \"small\",\n    header: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, header),\n    loadMore: hasMore && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n      style: {\n        width: '100%'\n      },\n      onClick: onClickMore\n    }, \"\\uB354 \\uBCF4\\uAE30\"),\n    bordered: true,\n    dataSource: data,\n    renderItem: function renderItem(item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"].Item, {\n        style: {\n          maringTop: '20px'\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n        actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"StopOutlined\"], {\n          key: \"stop\",\n          onClick: onClickStop(item.id)\n        })]\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n        description: item.nickname\n      })));\n    }\n  });\n});\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  hasMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,\n  onClickMore: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired,\n  onClickStop: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\n//# sourceURL=webpack:///./components/FollowList.js?");

/***/ }),

/***/ "./components/ImagesZoom/index.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ \"react-slick\");\n/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ \"./components/ImagesZoom/style.js\");\n\n\n\n\n\n\nvar ImagesZoom = function ImagesZoom(_ref) {\n  var images = _ref.images,\n      onClose = _ref.onClose;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      currentSlide = _useState2[0],\n      setCurrentSlide = _useState2[1];\n\n  var backURL = 'http://localhost:3067';\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"Overlay\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"Header\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"h1\", null, \"\\uC0C1\\uC138 \\uC774\\uBBF8\\uC9C0\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"CloseBtn\"], {\n    onClick: onClose\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"SlickWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    initialSlide: 0,\n    afterChange: function afterChange(slide) {\n      return setCurrentSlide(slide);\n    },\n    infinite: false,\n    arrows: true,\n    slidesToShow: 1,\n    slidesToScroll: 1\n  }, images.map(function (v) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"ImgWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(v.src)\n    }));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style__WEBPACK_IMPORTED_MODULE_4__[\"Indicator\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, currentSlide + 1, \" / \", images.length)))));\n  /* return (\r\n      <div style={{ position: 'fixed', zIndex: 5000, top: 0, left: 0, right: 0, bottom: 0 }}>\r\n          <header style={{ height: 44, background: 'white', position: 'relative', padding: 0, textAlign: 'center'}}>\r\n              <h1 style={{ margin: 0, fontSize: '17px', color: '#333', lineHeight: '44px' }}>상세 이미지</h1>\r\n              <CloseOutlined onClick={onClose} style={{ position: 'absolute', right: 0, top: 0, padding: 15, lineHeight: '14px', cursor: 'pointer' }} />\r\n          </header>\r\n          <div style={{ height: 'calc(100% - 44px)', background: '#090909' }}>\r\n              <div>\r\n                  <Slick\r\n                      initialSlide={0}\r\n                      afterChange={slide => setCurrentSlide(slide)}\r\n                      infinite={false}\r\n                      arrows\r\n                      slidesToShow={1}\r\n                      slidesToScroll={1}\r\n                  >\r\n                      {images.map((v) => {\r\n                          return (\r\n                              <div style={{ padding: 32, textAlign: 'center' }}>\r\n                                  <img src={ `${backURL}/${v.src}` } style={{ margin: '0 auto', maxHeight: 750 }}/>\r\n                              </div>\r\n                          );\r\n                      })}\r\n                  </Slick>\r\n                  <div style={{ textAlign: 'center' }}>\r\n                      <div style={{ width: 75, height: 30, lineHeight: '30px', borderRadius: 15, background: '#313131', display: 'inline-block', textAlign: 'center', color: 'white', fontSize: '15px' }}>\r\n                          {currentSlide + 1} / {images.length}\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  ) */\n};\n\nImagesZoom.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n  })).isRequired,\n  onClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImagesZoom);\n\n//# sourceURL=webpack:///./components/ImagesZoom/index.js?");

/***/ }),

/***/ "./components/ImagesZoom/style.js":
/*!****************************************!*\
  !*** ./components/ImagesZoom/style.js ***!
  \****************************************/
/*! exports provided: Overlay, Header, SlickWrapper, CloseBtn, Indicator, ImgWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Overlay\", function() { return Overlay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SlickWrapper\", function() { return SlickWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CloseBtn\", function() { return CloseBtn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Indicator\", function() { return Indicator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImgWrapper\", function() { return ImgWrapper; });\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);\n\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding: 32px; \\n    textAlign: center;\\n\\n    & img {\\n        margin: 0 auto;\\n        maxHeight: 750px;\\n    }\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n\\n    & > div {\\n        width: 75px; \\n        height: 30px; \\n        lineHeight: 30px; \\n        borderRadius: 15px; \\n        background: #313131; \\n        display: inline-block; \\n        textAlign: center; \\n        color: white; \\n        fontSize: 15px;\\n    }\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute; \\n    right: 0; \\n    top: 0;\\n    padding: 15px;\\n    lineHeight: 14px; \\n    cursor: pointer;  \\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    height: calc(100% - 44px);\\n    background: #090909;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    height: 44px; \\n    background: white; \\n    position: relative; \\n    padding: 0; \\n    textAlign: center;\\n\\n    & h1 {\\n        margin: 0;\\n        fontSize: 17px;\\n        color: #333; \\n        lineHeight: 44px;  \\n    }\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: fixed; \\n    zIndex: 5000; \\n    top: 0; \\n    left: 0; \\n    right: 0; \\n    bottom: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar Overlay = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());\nvar Header = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.header(_templateObject2());\nvar SlickWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject3());\nvar CloseBtn = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__[\"CloseOutlined\"])(_templateObject4());\nvar Indicator = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject5());\nvar ImgWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject6());\n\n//# sourceURL=webpack:///./components/ImagesZoom/style.js?");

/***/ }),

/***/ "./components/PostCardContent.js":
/*!***************************************!*\
  !*** ./components/PostCardContent.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nvar PostCardContent = function PostCardContent(_ref) {\n  var postData = _ref.postData;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, postData.split(/(#[^\\s]+)/g).map(function (v) {\n    if (v.match(/#[^\\s]+/)) {\n      // 쪼개진 애가 해시태그면 링크로 바꿔주기\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: {\n          pathname: '/hashtag',\n          query: {\n            tag: v.slice(1)\n          }\n        },\n        as: \"/hashtag/\".concat(v.slice(1)),\n        key: v\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", null, v));\n    }\n\n    return v; // 해시태그(#)가 아니라면, 그냥 문자열만 리턴 \n  }));\n};\n\nPostCardContent.propTypes = {\n  postData: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCardContent);\n\n//# sourceURL=webpack:///./components/PostCardContent.js?");

/***/ }),

/***/ "./components/PostImages.js":
/*!**********************************!*\
  !*** ./components/PostImages.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ImagesZoom_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImagesZoom/index */ \"./components/ImagesZoom/index.js\");\n\n\n\n\n\n\nvar PostImages = function PostImages(_ref) {\n  var images = _ref.images;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      showImagesZoom = _useState2[0],\n      setShowImagesZoom = _useState2[1]; // 확대 이미지를 보여줄지 말지 \n\n\n  var backURL = 'http://localhost:3067';\n  var onZoom = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setShowImagesZoom(true);\n  }, []);\n  /* 확대 된 이미지 끄는것은 component내에서 하는것이기 때문에, 이 함수를 props로 넘겨줘야 한다. */\n\n  var onClose = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n    setShowImagesZoom(false);\n  }, []);\n\n  if (images.length === 1) {\n    // 이미지가 1장 일때 \n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[0].src),\n      onClick: onZoom\n    }), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  }\n\n  if (images.length === 2) {\n    // 이미지가 2장 일때 \n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[0].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[1].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    })), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  }\n\n  if (images.length === 3) {\n    // 이미지가 3장 일때 \n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[0].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[1].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[2].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    })), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  } else {\n    // 이미지가 4장 이상 일때 \n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[0].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[1].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"img\", {\n      src: \"\".concat(backURL, \"/\").concat(images[2].src),\n      width: \"50%\",\n      height: \"50%\",\n      onClick: onZoom\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n      style: {\n        display: 'inline-block',\n        width: '50%',\n        textAlign: 'center',\n        verticalAlign: 'middle'\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"PlusOutlined\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null), images.length - 3, \"\\uAC1C\\uC758 \\uC0AC\\uC9C4 \\uB354\\uBCF4\\uAE30\")), showImagesZoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ImagesZoom_index__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      images: images,\n      onClose: onClose\n    }));\n  }\n};\n\nPostImages.propTypes = {\n  images: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({\n    src: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string\n  })).isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostImages);\n\n//# sourceURL=webpack:///./components/PostImages.js?");

/***/ }),

/***/ "./containers/CommentForm.js":
/*!***********************************!*\
  !*** ./containers/CommentForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n\n\n\n\n\n\n\nvar CommentForm = function CommentForm(_ref) {\n  var post = _ref.post;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      commentText = _useState2[0],\n      setCommentText = _useState2[1];\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      commentAdded = _useSelector.commentAdded,\n      isAddingComment = _useSelector.isAddingComment;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector2.me;\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n  /* 댓글 업로드 */\n\n  var onSubmitComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n\n    if (!me) {\n      return alert('댓글을 작성하려면, 로그인이 필요합니다.');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"ADD_COMMENT_REQUEST\"],\n      data: {\n        postId: post.id,\n        content: commentText\n      }\n    });\n  }, [me && me.id, commentText]);\n  /* 댓글 작성 완료되면, 댓글 입력창 비워주기 */\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setCommentText('');\n  }, [commentAdded === true]);\n  /* 댓글이 작성되는 중에 */\n\n  var onChangeCommentText = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (e) {\n    setCommentText(e.target.value);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], {\n    onSubmit: onSubmitComment\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea, {\n    rows: 4,\n    value: commentText,\n    onChange: onChangeCommentText\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isAddingComment\n  }, \"\\uC090\\uC57D\"));\n};\n\nCommentForm.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CommentForm);\n\n//# sourceURL=webpack:///./containers/CommentForm.js?");

/***/ }),

/***/ "./containers/NicknameEditForm.js":
/*!****************************************!*\
  !*** ./containers/NicknameEditForm.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n\n\n\n\n\n\nvar NicknameEditForm = function NicknameEditForm() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      editedName = _useState2[0],\n      setEditedName = _useState2[1];\n\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      me = _useSelector.me,\n      isEditingNickname = _useSelector.isEditingNickname;\n\n  var onChangeNickname = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    setEditedName(e.target.value);\n  }, []);\n  var onEditNickname = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (e) {\n    e.preventDefault();\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"EDIT_NICKNAME_REQUEST\"],\n      data: editedName\n    });\n  }, [editedName]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], {\n    style: {\n      marginBottom: '20px',\n      border: '1px solid #d9d9d9',\n      padding: '20px'\n    },\n    onSubmit: onEditNickname\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"], {\n    addonBefore: \"\\uB2C9\\uB124\\uC784\",\n    value: editedName || me && me.nickname,\n    onChange: onChangeNickname\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n    type: \"primary\",\n    htmlType: \"submit\",\n    loading: isEditingNickname\n  }, \"\\uC218\\uC815\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NicknameEditForm);\n\n//# sourceURL=webpack:///./containers/NicknameEditForm.js?");

/***/ }),

/***/ "./containers/PostCard.js":
/*!********************************!*\
  !*** ./containers/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"@ant-design/icons\");\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"antd\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _components_PostImages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/PostImages */ \"./components/PostImages.js\");\n/* harmony import */ var _components_PostCardContent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/PostCardContent */ \"./components/PostCardContent.js\");\n/* harmony import */ var _CommentForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./CommentForm */ \"./containers/CommentForm.js\");\n/* harmony import */ var _components_FollowButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/FollowButton */ \"./components/FollowButton.js\");\n\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  margin-bottom: 20px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nmoment__WEBPACK_IMPORTED_MODULE_9___default.a.locale('ko'); // moment에 한글 설정 \n\nvar CardWrapper = styled_components__WEBPACK_IMPORTED_MODULE_8___default.a.div(_templateObject());\nvar PostCard = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"memo\"])(function (_ref) {\n  var post = _ref.post;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useState, 2),\n      commentFormOpened = _useState2[0],\n      setCommentFormOpened = _useState2[1];\n\n  var myId = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useSelector\"])(function (state) {\n    return state.user.me && state.user.me.id;\n  });\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_7__[\"useDispatch\"])();\n  var isLiked = myId && post.Likers && post.Likers.find(function (v) {\n    return v.id === myId;\n  }); // 내가 '좋아요' 했었는지 \n\n  /* onClick 했을때, 댓글창 열고닫기 */\n\n  var onToggleComment = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    //console.log(commentFormOpened);\n    setCommentFormOpened(function (prev) {\n      return !prev;\n    }); // 현재 루프안에서 즉시 바뀌지는 않음. (현재 루프 끝나면 true로 바뀜)\n    // 앞,뒤 console.log()로 확인 해보기 \n    //console.log(commentFormOpened);\n\n    if (!commentFormOpened) {\n      // 닫혀있는 경우에, 댓글 아이콘 눌렀을때(onClick)\n      // commentFormOpened === false 이면..\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__[\"LOAD_COMMENTS_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, [commentFormOpened]);\n  /* onClick 했을때, '좋아요' 처리 */\n\n  var onToggleLike = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!myId) {\n      return alert('로그인이 필요합니다.'); // 로그인 안된 사용자는 '좋아요' 클릭 불가\n    }\n\n    if (isLiked) {\n      // 내가 '좋아요' 이미 누른 상태이면   \n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__[\"UNLIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    } else {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__[\"LIKE_POST_REQUEST\"],\n        data: post.id\n      });\n    }\n  }, [myId, post && post.id, isLiked]);\n  var onRetweet = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    if (!myId) {\n      return alert('로그인이 필요합니다.');\n    }\n\n    return dispatch({\n      type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__[\"RETWEET_REQUEST\"],\n      data: post.id\n    });\n  }, [myId, post.id]);\n  /* 팔로우 하기 눌렀을때 */\n\n  var onFollow = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (userId) {\n    return function () {\n      //console.log(me.id, userId);   // 12, 1\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__[\"FOLLOW_USER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  /* 언팔로우 하기 눌렀을때 */\n\n  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_11__[\"UNFOLLOW_USER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  var onRemovePost = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (postId) {\n    return function () {\n      dispatch({\n        type: _reducers_post__WEBPACK_IMPORTED_MODULE_10__[\"REMOVE_POST_REQUEST\"],\n        data: postId\n      });\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CardWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    cover: post.Images && post.Images[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostImages__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      images: post.Images\n    }),\n    actions: [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"RetweetOutlined\"], {\n      onClick: onRetweet\n    }), isLiked ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"HeartTwoTone\"], {\n      twoToneColor: \"#eb2f96\",\n      onClick: onToggleLike\n    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"HeartOutlined\"], {\n      onClick: onToggleLike\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"MessageOutlined\"], {\n      onClick: onToggleComment\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Popover\"], {\n      key: \"ellipsis\",\n      content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"].Group, null, myId && post.UserId === myId ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], null, \"\\uC218\\uC815\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        type: \"danger\",\n        onClick: onRemovePost(post.id)\n      }, \"\\uC0AD\\uC81C\")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], null, \"\\uC2E0\\uACE0\"))\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__[\"EllipsisOutlined\"], null))],\n    title: post.RetweetId ? \"\".concat(post.User.nickname, \"\\uB2D8\\uC774 \\uB9AC\\uD2B8\\uC717\\uD558\\uC168\\uC2B5\\uB2C8\\uB2E4.\") : null,\n    extra: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FollowButton__WEBPACK_IMPORTED_MODULE_15__[\"default\"], {\n      post: post,\n      onUnfollow: onUnfollow,\n      onFollow: onFollow\n    })\n  }, post.RetweetId && post.Retweet ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"], {\n    cover: post.Retweet.Images[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostImages__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      images: post.Retweet.Images\n    })\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n    style: {\n      float: 'right'\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(post.createdAt).format('YYYY.MM.DD.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Meta, {\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: {\n        pathname: '/user',\n        query: {\n          id: post.Retweet.User.id\n        }\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, post.Retweet.User.nickname[0]))),\n    title: post.Retweet.User.nickname,\n    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      postData: post.Retweet.content\n    }) // a tag x -> Link\n\n  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"span\", {\n    style: {\n      float: 'right'\n    }\n  }, moment__WEBPACK_IMPORTED_MODULE_9___default()(post.createdAt).format('YYYY.MM.DD.')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Card\"].Meta, {\n    avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: {\n        pathname: '/user',\n        query: {\n          id: post.User.id\n        }\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, post.User.nickname[0]))),\n    title: post.User.nickname,\n    description: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_PostCardContent__WEBPACK_IMPORTED_MODULE_13__[\"default\"], {\n      postData: post.content\n    })\n  }))), commentFormOpened && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_CommentForm__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    post: post\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"List\"], {\n    header: \"\".concat(post.Comments ? post.Comments.length : 0, \" \\uB313\\uAE00\"),\n    itemLayout: \"horizontal\",\n    dataSource: post.Comments || [],\n    renderItem: function renderItem(item) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"li\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Comment\"], {\n        author: item.User.nickname,\n        avatar: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n          href: {\n            pathname: '/user',\n            query: {\n              id: item.User.id\n            }\n          }\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"a\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Avatar\"], null, item.User.nickname[0]))),\n        content: item.content\n      }));\n    }\n  })));\n});\nPostCard.propTypes = {\n  post: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({\n    User: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,\n    content: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n    img: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,\n    //createdAt: PropTypes.object,\n    createdAt: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string\n  })\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\n//# sourceURL=webpack:///./containers/PostCard.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ \"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ \"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ \"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ \"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/create.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ \"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ \"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ \"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ \"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ \"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/promise */ \"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/promise.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ \"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ \"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js\");\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n\n    _Object$defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _arrayWithHoles; });\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ \"./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js\");\n/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _arrayWithHoles(arr) {\n  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _asyncToGenerator; });\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ \"./node_modules/@babel/runtime-corejs2/core-js/promise.js\");\n/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n  try {\n    var info = gen[key](arg);\n    var value = info.value;\n  } catch (error) {\n    reject(error);\n    return;\n  }\n\n  if (info.done) {\n    resolve(value);\n  } else {\n    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);\n  }\n}\n\nfunction _asyncToGenerator(fn) {\n  return function () {\n    var self = this,\n        args = arguments;\n    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {\n      var gen = fn.apply(self, args);\n\n      function _next(value) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n      }\n\n      function _throw(err) {\n        asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n      }\n\n      _next(undefined);\n    });\n  };\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _iterableToArrayLimit; });\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js\");\n/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction _iterableToArrayLimit(arr, i) {\n  var _arr = [];\n  var _n = true;\n  var _d = false;\n  var _e = undefined;\n\n  try {\n    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {\n      _arr.push(_s.value);\n\n      if (i && _arr.length === i) break;\n    }\n  } catch (err) {\n    _d = true;\n    _e = err;\n  } finally {\n    try {\n      if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n    } finally {\n      if (_d) throw _e;\n    }\n  }\n\n  return _arr;\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _nonIterableRest; });\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _slicedToArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js\");\n\n\n\nfunction _slicedToArray(arr, i) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _taggedTemplateLiteral; });\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ \"./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js\");\n/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ \"./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js\");\n/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction _taggedTemplateLiteral(strings, raw) {\n  if (!raw) {\n    raw = strings.slice(0);\n  }\n\n  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {\n    raw: {\n      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)\n    }\n  }));\n}\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js\");\n\nvar _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || _Object$getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$create = __webpack_require__(/*! ../core-js/object/create */ \"./node_modules/@babel/runtime-corejs2/core-js/object/create.js\");\n\nvar setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = _Object$create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    default: obj\n  };\n}\n\nmodule.exports = _interopRequireDefault;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! ../helpers/typeof */ \"./node_modules/@babel/runtime-corejs2/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ \"./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js\");\n\nfunction _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js\");\n\nvar _Symbol = __webpack_require__(/*! ../core-js/symbol */ \"./node_modules/@babel/runtime-corejs2/core-js/symbol.js\");\n\nfunction _typeof2(obj) { if (typeof _Symbol === \"function\" && typeof _Symbol$iterator === \"symbol\") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof2(obj); }\n\nfunction _typeof(obj) {\n  if (typeof _Symbol === \"function\" && _typeof2(_Symbol$iterator) === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return _typeof2(obj);\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof _Symbol === \"function\" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? \"symbol\" : _typeof2(obj);\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/helpers/typeof.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! regenerator-runtime */ \"regenerator-runtime\");\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime-corejs2/regenerator/index.js?");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/* global __NEXT_DATA__ */\n\nvar _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ \"./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js\");\n\nvar _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ \"./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js\"));\n\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ \"./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js\"));\n\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ \"./node_modules/@babel/runtime-corejs2/helpers/createClass.js\"));\n\nvar _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js\"));\n\nvar _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js\"));\n\nvar _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ \"./node_modules/@babel/runtime-corejs2/helpers/inherits.js\"));\n\nvar __importStar = void 0 && (void 0).__importStar || function (mod) {\n  if (mod && mod.__esModule) return mod;\n  var result = {};\n  if (mod != null) for (var k in mod) {\n    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n  }\n  result[\"default\"] = mod;\n  return result;\n};\n\nvar __importDefault = void 0 && (void 0).__importDefault || function (mod) {\n  return mod && mod.__esModule ? mod : {\n    \"default\": mod\n  };\n};\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar url_1 = __webpack_require__(/*! url */ \"url\");\n\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n\nvar prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar router_1 = __importStar(__webpack_require__(/*! next/router */ \"next/router\"));\n\nvar utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ \"next-server/dist/lib/utils\");\n\nfunction isLocal(href) {\n  var url = url_1.parse(href, false, true);\n  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);\n  return !url.host || url.protocol === origin.protocol && url.host === origin.host;\n}\n\nfunction memoizedFormatUrl(formatFunc) {\n  var lastHref = null;\n  var lastAs = null;\n  var lastResult = null;\n  return function (href, as) {\n    if (href === lastHref && as === lastAs) {\n      return lastResult;\n    }\n\n    var result = formatFunc(href, as);\n    lastHref = href;\n    lastAs = as;\n    lastResult = result;\n    return result;\n  };\n}\n\nfunction formatUrl(url) {\n  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;\n}\n\nvar Link =\n/*#__PURE__*/\nfunction (_react_1$Component) {\n  (0, _inherits2.default)(Link, _react_1$Component);\n\n  function Link() {\n    var _this;\n\n    (0, _classCallCheck2.default)(this, Link);\n    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed\n    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html\n\n    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {\n      return {\n        href: formatUrl(href),\n        as: formatUrl(asHref, true)\n      };\n    });\n\n    _this.linkClicked = function (e) {\n      var _e$currentTarget = e.currentTarget,\n          nodeName = _e$currentTarget.nodeName,\n          target = _e$currentTarget.target;\n\n      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {\n        // ignore click for new tab / new window behavior\n        return;\n      }\n\n      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),\n          href = _this$formatUrls.href,\n          as = _this$formatUrls.as;\n\n      if (!isLocal(href)) {\n        // ignore click if it's outside our scope\n        return;\n      }\n\n      var pathname = window.location.pathname;\n      href = url_1.resolve(pathname, href);\n      as = as ? url_1.resolve(pathname, as) : href;\n      e.preventDefault(); //  avoid scroll for urls with anchor refs\n\n      var scroll = _this.props.scroll;\n\n      if (scroll == null) {\n        scroll = as.indexOf('#') < 0;\n      } // replace state instead of push if prop is present\n\n\n      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {\n        shallow: _this.props.shallow\n      }).then(function (success) {\n        if (!success) return;\n\n        if (scroll) {\n          window.scrollTo(0, 0);\n          document.body.focus();\n        }\n      }).catch(function (err) {\n        if (_this.props.onError) _this.props.onError(err);\n      });\n    };\n\n    return _this;\n  }\n\n  (0, _createClass2.default)(Link, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.prefetch();\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {\n        this.prefetch();\n      }\n    }\n  }, {\n    key: \"prefetch\",\n    value: function prefetch() {\n      if (!this.props.prefetch) return;\n      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)\n\n      var pathname = window.location.pathname;\n\n      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),\n          parsedHref = _this$formatUrls2.href;\n\n      var href = url_1.resolve(pathname, parsedHref);\n      router_1.default.prefetch(href);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var children = this.props.children;\n\n      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),\n          href = _this$formatUrls3.href,\n          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag\n\n\n      if (typeof children === 'string') {\n        children = react_1.default.createElement(\"a\", null, children);\n      } // This will return the first child, if multiple are provided it will throw an error\n\n\n      var child = react_1.Children.only(children);\n      var props = {\n        onClick: function onClick(e) {\n          if (child.props && typeof child.props.onClick === 'function') {\n            child.props.onClick(e);\n          }\n\n          if (!e.defaultPrevented) {\n            _this2.linkClicked(e);\n          }\n        }\n      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is\n      // defined, we specify the current 'href', so that repetition is not needed by the user\n\n      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {\n        props.href = as || href;\n      } // Add the ending slash to the paths. So, we can serve the\n      // \"<page>/index.html\" directly.\n\n\n      if (true) {\n        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {\n          props.href = router_1.Router._rewriteUrlForNextExport(props.href);\n        }\n      }\n\n      return react_1.default.cloneElement(child, props);\n    }\n  }]);\n  return Link;\n}(react_1.Component);\n\nif (true) {\n  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin\n\n  var exact = __webpack_require__(/*! prop-types-exact */ \"prop-types-exact\");\n\n  Link.propTypes = exact({\n    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,\n    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),\n    prefetch: prop_types_1.default.bool,\n    replace: prop_types_1.default.bool,\n    shallow: prop_types_1.default.bool,\n    passHref: prop_types_1.default.bool,\n    scroll: prop_types_1.default.bool,\n    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {\n      var value = props[propName];\n\n      if (typeof value === 'string') {\n        warn(\"Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>\");\n      }\n\n      return null;\n    }]).isRequired\n  });\n}\n\nexports.default = Link;\n\n//# sourceURL=webpack:///./node_modules/next/dist/client/link.js?");

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./dist/client/link */ \"./node_modules/next/dist/client/link.js\")\n\n\n//# sourceURL=webpack:///./node_modules/next/link.js?");

/***/ }),

/***/ "./pages/profile.js":
/*!**************************!*\
  !*** ./pages/profile.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ \"./node_modules/@babel/runtime-corejs2/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ \"./reducers/user.js\");\n/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/post */ \"./reducers/post.js\");\n/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/PostCard */ \"./containers/PostCard.js\");\n/* harmony import */ var _containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/NicknameEditForm */ \"./containers/NicknameEditForm.js\");\n/* harmony import */ var _components_FollowList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/FollowList */ \"./components/FollowList.js\");\n\n\n\n\n\n\n\n\n\n\nvar Profile = function Profile() {\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useDispatch\"])();\n\n  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.user;\n  }),\n      followingList = _useSelector.followingList,\n      followerList = _useSelector.followerList,\n      hasMoreFollower = _useSelector.hasMoreFollower,\n      hasMoreFollowing = _useSelector.hasMoreFollowing;\n\n  var _useSelector2 = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"useSelector\"])(function (state) {\n    return state.post;\n  }),\n      mainPosts = _useSelector2.mainPosts;\n  /* useEffect(() => {\r\n      if (me) {\r\n          dispatch({\r\n              type: LOAD_FOLLOWERS_REQUEST,\r\n              data: me.id,\r\n          });\r\n          dispatch({\r\n              type: LOAD_FOLLOWINGS_REQUEST,\r\n              data: me.id,\r\n          });\r\n          dispatch({\r\n              type: LOAD_USER_POSTS_REQUEST,      // 내가 쓴 게시글들 가져오기 요청 \r\n              data: me.id,\r\n          });\r\n      }\r\n  }, [me && me.id]); */\n\n\n  var onUnfollow = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"UNFOLLOW_USER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  var onRemoveFollower = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function (userId) {\n    return function () {\n      dispatch({\n        type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"REMOVE_FOLLOWER_REQUEST\"],\n        data: userId\n      });\n    };\n  }, []);\n  /* [팔로윙] 더보기 버튼 눌렀을때 */\n\n  var loadMoreFollowings = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOAD_FOLLOWINGS_REQUEST\"],\n      offset: followingList.length\n    });\n  }, [followingList.length]);\n  /* [팔로워] 더보기 버튼 눌렀을때 */\n\n  var loadMoreFollowers = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useCallback\"])(function () {\n    dispatch({\n      type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOAD_FOLLOWERS_REQUEST\"],\n      offset: followerList.length\n    });\n  }, [followerList.length]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_NicknameEditForm__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    header: \"\\uD314\\uB85C\\uC789 \\uBAA9\\uB85D\",\n    hasMore: hasMoreFollowing,\n    onClickMore: loadMoreFollowings,\n    data: followingList,\n    onClickStop: onUnfollow\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_FollowList__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    header: \"\\uD314\\uB85C\\uC6CC \\uBAA9\\uB85D\",\n    hasMore: hasMoreFollower,\n    onClickMore: loadMoreFollowers,\n    data: followerList,\n    onClickStop: onRemoveFollower\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, mainPosts.map(function (c) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_PostCard__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: +c.createdAt,\n      post: c\n    });\n  })));\n};\n\nProfile.getInitialProps = /*#__PURE__*/function () {\n  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {\n    var state;\n    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            state = context.store.getState();\n            /* 이 직전에 (_app.js)LOAD_USER_REQUEST */\n\n            context.store.dispatch({\n              type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOAD_FOLLOWERS_REQUEST\"],\n              // 첫 화면일때, 팔로워 로드 request\n              data: state.user.me && state.user.me.id\n            });\n            context.store.dispatch({\n              type: _reducers_user__WEBPACK_IMPORTED_MODULE_4__[\"LOAD_FOLLOWINGS_REQUEST\"],\n              // 첫 화면일때, 팔로잉 로드 request\n              data: state.user.me && state.user.me.id\n            });\n            context.store.dispatch({\n              type: _reducers_post__WEBPACK_IMPORTED_MODULE_5__[\"LOAD_USER_POSTS_REQUEST\"],\n              // 첫 화면일때, 게시글 로드 request\n              data: state.user.me && state.user.me.id\n            });\n            /* 여기서 LOAD_USER_SUCCESS 되서, me가 생김 */\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function (_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\n\n//# sourceURL=webpack:///./pages/profile.js?");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, LOAD_MAIN_POSTS_REQUEST, LOAD_MAIN_POSTS_SUCCESS, LOAD_MAIN_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS, LOAD_HASHTAG_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS, LOAD_USER_POSTS_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS, UPLOAD_IMAGES_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS, LIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS, UNLIKE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, LOAD_COMMENTS_REQUEST, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS, RETWEET_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, REMOVE_IMAGE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS, LOAD_POST_FAILURE, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_REQUEST\", function() { return LOAD_MAIN_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_SUCCESS\", function() { return LOAD_MAIN_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_MAIN_POSTS_FAILURE\", function() { return LOAD_MAIN_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_REQUEST\", function() { return LOAD_HASHTAG_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_SUCCESS\", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_HASHTAG_POSTS_FAILURE\", function() { return LOAD_HASHTAG_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_REQUEST\", function() { return LOAD_USER_POSTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_SUCCESS\", function() { return LOAD_USER_POSTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_POSTS_FAILURE\", function() { return LOAD_USER_POSTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_REQUEST\", function() { return UPLOAD_IMAGES_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_SUCCESS\", function() { return UPLOAD_IMAGES_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UPLOAD_IMAGES_FAILURE\", function() { return UPLOAD_IMAGES_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_REQUEST\", function() { return ADD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_SUCCESS\", function() { return ADD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_FAILURE\", function() { return ADD_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_REQUEST\", function() { return LIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_SUCCESS\", function() { return LIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LIKE_POST_FAILURE\", function() { return LIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_REQUEST\", function() { return UNLIKE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_SUCCESS\", function() { return UNLIKE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNLIKE_POST_FAILURE\", function() { return UNLIKE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_REQUEST\", function() { return ADD_COMMENT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_SUCCESS\", function() { return ADD_COMMENT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_COMMENT_FAILURE\", function() { return ADD_COMMENT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_REQUEST\", function() { return LOAD_COMMENTS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_SUCCESS\", function() { return LOAD_COMMENTS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_COMMENTS_FAILURE\", function() { return LOAD_COMMENTS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_REQUEST\", function() { return RETWEET_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_SUCCESS\", function() { return RETWEET_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RETWEET_FAILURE\", function() { return RETWEET_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_REQUEST\", function() { return REMOVE_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_SUCCESS\", function() { return REMOVE_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_FAILURE\", function() { return REMOVE_POST_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_IMAGE\", function() { return REMOVE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_REQUEST\", function() { return LOAD_POST_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_SUCCESS\", function() { return LOAD_POST_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_POST_FAILURE\", function() { return LOAD_POST_FAILURE; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* redux state */\n\nvar initialState = {\n  mainPosts: [],\n  imagePaths: [],\n  // 미리보기 이미지 경로 \n  isAddingPost: false,\n  // 포스트 업로드 중\n  addPostErrorReason: '',\n  // 포스트 업로드 실패 사유 \n  postAdded: false,\n  // 포스트 업로드 성공 여부 (쓰는 이유: 글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)\n  isAddingComment: false,\n  // 댓글 업로드 중 \n  addCommentErrorReason: '',\n  // 댓글 업로드 에러 사유 \n  commentAdded: false,\n  // 댓글이 추가되었는지 (쓰는 이유: 댓글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)\n  addLikeErrorReason: '',\n  hasMorePost: false,\n  // 스크롤을 더 내려야 할지 \n  singlePost: null\n};\n/* Action의 이름 */\n\nvar LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST'; // 메인 포스트 로딩 액션\n\nvar LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';\nvar LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';\nvar LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST'; // 해시태그로 검색했을 때 결과 로딩 액션\n\nvar LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';\nvar LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';\nvar LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST'; // 사용자가 어떤 게시글을 썼는지 로딩 액션\n\nvar LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';\nvar LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';\nvar UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 이미지 업로드 액션 \n\nvar UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';\nvar UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';\nvar ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 게시글 업로드 액션\n\nvar ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';\nvar ADD_POST_FAILURE = 'ADD_POST_FAILURE';\nvar LIKE_POST_REQUEST = 'LIKE_POST_REQUEST'; // 게시글 좋아요 \n\nvar LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';\nvar LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';\nvar UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST'; // 게시글 좋아요 취소 \n\nvar UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';\nvar UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';\nvar ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';\nvar ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';\nvar ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';\nvar LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST'; // 게시글 댓글 불러오기 \n\nvar LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';\nvar LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';\nvar RETWEET_REQUEST = 'RETWEET_REQUEST'; // 리트윗\n\nvar RETWEET_SUCCESS = 'RETWEET_SUCCESS';\nvar RETWEET_FAILURE = 'RETWEET_FAILURE';\nvar REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'; // 포스트 제거 \n\nvar REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';\nvar REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';\nvar REMOVE_IMAGE = 'REMOVE_IMAGE';\nvar LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시글 한개 불러오기 \n\nvar LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';\nvar LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';\n/* 실제 Action */\n// ...\n\n/* Reducer */\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  /* immer */\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {\n    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.\n    switch (action.type) {\n      case UPLOAD_IMAGES_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UPLOAD_IMAGES_SUCCESS:\n        {\n          action.data.forEach(function (p) {\n            // 이처럼, 더이상 불변성을 유지하지 않아도 된다. (immer에서 draft보고 알아서 불변성 감지해준다.)\n            draft.imagePaths.push(p);\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 \r\n          }; */\n        }\n\n      case UPLOAD_IMAGES_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_IMAGE:\n        {\n          var index = draft.imagePaths.findIndex(function (v, i) {\n            return i === action.index;\n          });\n          draft.imagePaths.splice(index, 1);\n          break;\n          /* return {\r\n              ...state,\r\n              imagePaths: state.imagePaths.filter((v, i) => i !== action.index),\r\n          }; */\n        }\n\n      case LOAD_MAIN_POSTS_REQUEST:\n      case LOAD_HASHTAG_POSTS_REQUEST:\n      case LOAD_USER_POSTS_REQUEST:\n        {\n          draft.mainPosts = !action.lastId ? [] : draft.mainPosts; // lastId가 없으면, mainPosts = []\n\n          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;\n          break;\n          /* return {\r\n            ...state,\r\n            mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  \r\n                                                                    // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 \r\n            hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)\r\n          }; */\n        }\n\n      case LOAD_MAIN_POSTS_SUCCESS:\n      case LOAD_HASHTAG_POSTS_SUCCESS:\n      case LOAD_USER_POSTS_SUCCESS:\n        {\n          action.data.forEach(function (p) {\n            draft.mainPosts.push(p);\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기\r\n            hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!\r\n          }; */\n        }\n\n      case LOAD_MAIN_POSTS_FAILURE:\n      case LOAD_HASHTAG_POSTS_FAILURE:\n      case LOAD_USER_POSTS_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case ADD_POST_REQUEST:\n        {\n          draft.isAddingPost = true;\n          draft.addPostErrorReason = '';\n          draft.postAdded = false;\n          break;\n          /* return {\r\n              ...state,\r\n              isAddingPost: true,\r\n              addPostErrorReason: '',\r\n              postAdded: false,\r\n          }; */\n        }\n\n      case ADD_POST_SUCCESS:\n        {\n          draft.isAddingPost = false;\n          draft.mainPosts.unshift(action.data); // 배열 맨 앞에 추가할때는 unshift()\n\n          draft.postAdded = true;\n          draft.imagePaths = [];\n          break;\n          /* return {\r\n              ...state,\r\n              isAddingPost: false,\r\n              mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.\r\n              postAdded: true,\r\n              imagePaths: [],                               // success하는 순간, imagePaths 비워주기 \r\n          }; */\n        }\n\n      case ADD_POST_FAILURE:\n        {\n          draft.isAddingPost = false;\n          draft.addPostErrorReason = action.error;\n          break;\n          /* return {\r\n              ...state,\r\n              isAddingPost: false,\r\n              addPostErrorReason: action.error,\r\n          }; */\n        }\n\n      case ADD_COMMENT_REQUEST:\n        {\n          draft.isAddingComment = true;\n          draft.addCommentErrorReason = '';\n          draft.commentAdded = false;\n          break;\n          /* return {\r\n              ...state,\r\n              isAddingComment: true,\r\n              addCommentErrorReason: '',\r\n              commentAdded: false,\r\n          }; */\n        }\n\n      case ADD_COMMENT_SUCCESS:\n        {\n          var postIndex = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n          draft.mainPosts[postIndex].Comments.push(action.data.comment);\n          draft.isAddingComment = false;\n          draft.commentAdded = true;\n          break;\n          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,\r\n          const post = state.mainPosts[postIndex];                  // 해당 게시글을 찾는다\r\n          const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 \r\n          const mainPosts = [...state.mainPosts];                   // mainPosts도 불변성을 확보해 줘야한다.\r\n          mainPosts[postIndex] = { ...post, Comments };\r\n          return {\r\n              ...state,\r\n              isAddingComment: false,\r\n              mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)\r\n              commentAdded: true,\r\n          }; */\n        }\n\n      case ADD_COMMENT_FAILURE:\n        {\n          draft.isAddingComment = false;\n          draft.addCommentErrorReason = action.error;\n          break;\n          /* return {\r\n              ...state,\r\n              isAddingComment: false,\r\n              addCommentErrorReason: action.error,\r\n          }; */\n        }\n\n      case LOAD_COMMENTS_SUCCESS:\n        {\n          var _postIndex = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          draft.mainPosts[_postIndex].Comments = action.data.comments;\n          break;\n          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n          const post = state.mainPosts[postIndex];\r\n          const Comments = action.data.comments;\r\n          const mainPosts = [...state.mainPosts];         // mainPosts도 불변성을 확보해 줘야한다.\r\n          mainPosts[postIndex] = { ...post, Comments };\r\n          return {\r\n            ...state,\r\n            mainPosts,\r\n          }; */\n        }\n\n      case LIKE_POST_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case LIKE_POST_SUCCESS:\n        {\n          var _postIndex2 = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          draft.mainPosts[_postIndex2].Likers.unshift({\n            id: action.data.userId\n          }); // 배열 맨 앞에 추가할때는 unshift()\n\n\n          break;\n          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n          const post = state.mainPosts[postIndex];\r\n          const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 \r\n          const mainPosts = [...state.mainPosts];\r\n          mainPosts[postIndex] = { ...post, Likers };\r\n          return {\r\n            ...state,\r\n            mainPosts,\r\n          }; */\n        }\n\n      case LIKE_POST_FAILURE:\n        {\n          alert('좋아요 실패!');\n          draft.addLikeErrorReason = action.error;\n          break;\n          /* return {\r\n            ...state,\r\n            addLikeErrorReason: action.error,\r\n          }; */\n        }\n\n      case UNLIKE_POST_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UNLIKE_POST_SUCCESS:\n        {\n          var _postIndex3 = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data.postId;\n          });\n\n          var likerIndex = draft.mainPosts[_postIndex3].Likers.findIndex(function (v) {\n            return v.id === action.data.userId;\n          });\n\n          draft.mainPosts[_postIndex3].Likers.splice(likerIndex, 1);\n\n          break;\n          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n          const post = state.mainPosts[postIndex];\r\n          const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  \r\n          const mainPosts = [...state.mainPosts];\r\n          mainPosts[postIndex] = { ...post, Likers };\r\n          return {\r\n            ...state,\r\n            mainPosts,\r\n          }; */\n        }\n\n      case UNLIKE_POST_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case RETWEET_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case RETWEET_SUCCESS:\n        {\n          draft.mainPosts.unshift(action.data);\n          break;\n          /* return {\r\n            ...state,\r\n            mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. \r\n          }; */\n        }\n\n      case RETWEET_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_POST_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_POST_SUCCESS:\n        {\n          var _index = draft.mainPosts.findIndex(function (v) {\n            return v.id === action.data;\n          });\n\n          draft.mainPosts.splice(_index, 1);\n          break;\n          /* return {\r\n            ...state,\r\n            mainPosts: state.mainPosts.filter(v => v.id !== action.data),\r\n          }; */\n        }\n\n      case REMOVE_POST_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case LOAD_POST_SUCCESS:\n        {\n          draft.singlePost = action.data;\n          break;\n        }\n\n      default:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n/* immer쓰기 전 코드 */\n\n/* switch (action.type) {\r\n  case UPLOAD_IMAGES_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UPLOAD_IMAGES_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 \r\n      };\r\n  }\r\n  case UPLOAD_IMAGES_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_IMAGE: {\r\n      return {\r\n          ...state,\r\n          imagePaths: state.imagePaths.filter((v, i) => i !== action.index),\r\n      };\r\n  }\r\n  case LOAD_MAIN_POSTS_REQUEST: \r\n  case LOAD_HASHTAG_POSTS_REQUEST:\r\n  case LOAD_USER_POSTS_REQUEST: {\r\n      return {\r\n        ...state,\r\n        mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  \r\n                                                                // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 \r\n        hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)\r\n      };\r\n  }\r\n  case LOAD_MAIN_POSTS_SUCCESS: \r\n  case LOAD_HASHTAG_POSTS_SUCCESS:\r\n  case LOAD_USER_POSTS_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기\r\n        hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!\r\n      };\r\n  }\r\n  case LOAD_MAIN_POSTS_FAILURE: \r\n  case LOAD_HASHTAG_POSTS_FAILURE:\r\n  case LOAD_USER_POSTS_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case ADD_POST_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isAddingPost: true,\r\n          addPostErrorReason: '',\r\n          postAdded: false,\r\n      };\r\n  }\r\n  case ADD_POST_SUCCESS: {\r\n      return {\r\n          ...state,\r\n          isAddingPost: false,\r\n          mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.\r\n          postAdded: true,\r\n          imagePaths: [],                               // success하는 순간, imagePaths 비워주기 \r\n      };\r\n  }\r\n  case ADD_POST_FAILURE: {\r\n      return {\r\n          ...state,\r\n          isAddingPost: false,\r\n          addPostErrorReason: action.error,\r\n      };\r\n  }\r\n  case ADD_COMMENT_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isAddingComment: true,\r\n          addCommentErrorReason: '',\r\n          commentAdded: false,\r\n      };\r\n  }\r\n  case ADD_COMMENT_SUCCESS: {\r\n      // 항상 불변성을 조심해야 된다. \r\n      // 바뀔 객체만 새로 만들어 줘야된다. \r\n      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,\r\n      const post = state.mainPosts[postIndex]; // 해당 게시글을 찾는다\r\n      const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 \r\n      const mainPosts = [...state.mainPosts]; // mainPosts도 불변성을 확보해 줘야한다.\r\n      mainPosts[postIndex] = { ...post, Comments };\r\n\r\n      return {\r\n          ...state,\r\n          isAddingComment: false,\r\n          mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)\r\n          commentAdded: true,\r\n      };\r\n  }\r\n  case ADD_COMMENT_FAILURE: {\r\n      return {\r\n          ...state,\r\n          isAddingComment: false,\r\n          addCommentErrorReason: action.error,\r\n      };\r\n  }\r\n  case LOAD_COMMENTS_SUCCESS: {\r\n      // 항상 불변성을 조심해야 된다. \r\n      // 바뀔 객체만 새로 만들어 줘야된다. \r\n      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n      const post = state.mainPosts[postIndex];\r\n      const Comments = action.data.comments;\r\n      const mainPosts = [...state.mainPosts];\r\n      mainPosts[postIndex] = { ...post, Comments };\r\n\r\n      return {\r\n        ...state,\r\n        mainPosts,\r\n      };\r\n  }\r\n  case LIKE_POST_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case LIKE_POST_SUCCESS: {\r\n      // 항상 불변성을 조심해야 된다. \r\n      // 바뀔 객체만 새로 만들어 줘야된다. \r\n      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n      const post = state.mainPosts[postIndex];\r\n      const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 \r\n      const mainPosts = [...state.mainPosts];\r\n      mainPosts[postIndex] = { ...post, Likers };\r\n\r\n      return {\r\n        ...state,\r\n        mainPosts,\r\n      };\r\n  }\r\n  case LIKE_POST_FAILURE: {\r\n      alert('좋아요 실패!');\r\n      return {\r\n        ...state,\r\n        addLikeErrorReason: action.error,\r\n      };\r\n  }\r\n  case UNLIKE_POST_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UNLIKE_POST_SUCCESS: {\r\n      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);\r\n      const post = state.mainPosts[postIndex];\r\n      const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  \r\n      const mainPosts = [...state.mainPosts];\r\n      mainPosts[postIndex] = { ...post, Likers };\r\n\r\n      return {\r\n        ...state,\r\n        mainPosts,\r\n      };\r\n  }\r\n  case UNLIKE_POST_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case RETWEET_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case RETWEET_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. \r\n      };\r\n  }\r\n  case RETWEET_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_POST_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_POST_SUCCESS: {\r\n      //const index = draft.mainPosts.findIndex(v => v.id === action.data);\r\n      //draft.mainPosts.splice(index, 1);\r\n      //break;\r\n      return {\r\n        ...state,\r\n        mainPosts: state.mainPosts.filter(v => v.id !== action.data),\r\n      };\r\n  }\r\n  case REMOVE_POST_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  default: {\r\n      return {\r\n          ...state,\r\n      };\r\n  }\r\n} */\n\n//# sourceURL=webpack:///./reducers/post.js?");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE, LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWERS_SUCCESS, LOAD_FOLLOWERS_FAILURE, LOAD_FOLLOWINGS_REQUEST, LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, FOLLOW_USER_REQUEST, FOLLOW_USER_SUCCESS, FOLLOW_USER_FAILURE, UNFOLLOW_USER_REQUEST, UNFOLLOW_USER_SUCCESS, UNFOLLOW_USER_FAILURE, REMOVE_FOLLOWER_REQUEST, REMOVE_FOLLOWER_SUCCESS, REMOVE_FOLLOWER_FAILURE, EDIT_NICKNAME_REQUEST, EDIT_NICKNAME_SUCCESS, EDIT_NICKNAME_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_REQUEST\", function() { return SIGN_UP_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_SUCCESS\", function() { return SIGN_UP_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SIGN_UP_FAILURE\", function() { return SIGN_UP_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_REQUEST\", function() { return LOG_IN_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_SUCCESS\", function() { return LOG_IN_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_IN_FAILURE\", function() { return LOG_IN_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_REQUEST\", function() { return LOG_OUT_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_SUCCESS\", function() { return LOG_OUT_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOG_OUT_FAILURE\", function() { return LOG_OUT_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_REQUEST\", function() { return LOAD_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_SUCCESS\", function() { return LOAD_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_USER_FAILURE\", function() { return LOAD_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_REQUEST\", function() { return LOAD_FOLLOWERS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_SUCCESS\", function() { return LOAD_FOLLOWERS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWERS_FAILURE\", function() { return LOAD_FOLLOWERS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_REQUEST\", function() { return LOAD_FOLLOWINGS_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_SUCCESS\", function() { return LOAD_FOLLOWINGS_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LOAD_FOLLOWINGS_FAILURE\", function() { return LOAD_FOLLOWINGS_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_REQUEST\", function() { return FOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_SUCCESS\", function() { return FOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FOLLOW_USER_FAILURE\", function() { return FOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_REQUEST\", function() { return UNFOLLOW_USER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_SUCCESS\", function() { return UNFOLLOW_USER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UNFOLLOW_USER_FAILURE\", function() { return UNFOLLOW_USER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_REQUEST\", function() { return REMOVE_FOLLOWER_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_SUCCESS\", function() { return REMOVE_FOLLOWER_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_FOLLOWER_FAILURE\", function() { return REMOVE_FOLLOWER_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_REQUEST\", function() { return EDIT_NICKNAME_REQUEST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_SUCCESS\", function() { return EDIT_NICKNAME_SUCCESS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EDIT_NICKNAME_FAILURE\", function() { return EDIT_NICKNAME_FAILURE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_POST_TO_ME\", function() { return ADD_POST_TO_ME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REMOVE_POST_OF_ME\", function() { return REMOVE_POST_OF_ME; });\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ \"immer\");\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);\n\n/* const dummyUser = {\r\n    nickname: '제로초',\r\n    Post: [],\r\n    followings: [],\r\n    followers: [],\r\n    id: 1,\r\n}; */\n\n/* redux state */\n\nvar initialState = {\n  isLoggingOut: false,\n  // 로그아웃 시도 중\n  isLogginIn: false,\n  // 로그인 시도 중 \n  logInErrorReason: '',\n  // 로그인 에러 사유\n  signedUp: false,\n  // 회원가입 성공\n  isSignedUp: false,\n  // 회원가입 시도 중\n  signUpErrorReason: '',\n  // 회원가입 에러 사유\n  me: null,\n  // 내 정보\n  followingList: [],\n  // '내'가 팔로잉 하고있는 사람들 목록 (프로필 페이지에서 쓰임)\n  followerList: [],\n  // '나'의 팔로워들 목록              (프로필 페이지에서 쓰임)\n  userInfo: null,\n  // 남의 정보 \n  isEditingNickname: false,\n  // 닉네임 변경 중 \n  editNicknameErrorReason: '',\n  // 닉네임 변경 실패 사유 \n  hasMoreFollower: false,\n  // 더보기 버튼을 존재시킬지\n  hasMoreFollowing: false // 더보기 버튼을 존재시킬지\n\n};\n/* Action의 이름 */\n\nvar SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';\nvar SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';\nvar SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';\nvar LOG_IN_REQUEST = 'LOG_IN_REQUEST';\nvar LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';\nvar LOG_IN_FAILURE = 'LOG_IN_FAILURE';\nvar LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';\nvar LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';\nvar LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';\nvar LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 불러오기 \n\nvar LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';\nvar LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';\nvar LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';\nvar LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';\nvar LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';\nvar LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';\nvar LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';\nvar LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';\nvar FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; // 팔로우 액션\n\nvar FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';\nvar FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';\nvar UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; // 언팔 액션\n\nvar UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';\nvar UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';\nvar REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; // 팔로워 제거 \n\nvar REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';\nvar REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';\nvar EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';\nvar EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';\nvar EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';\nvar ADD_POST_TO_ME = 'ADD_POST_TO_ME';\nvar REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';\n/* 실제 Action */\n// ...\n\n/* Reducer */\n\nvar reducer = function reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  /* immer */\n  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {\n    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.\n    switch (action.type) {\n      case LOG_IN_REQUEST:\n        {\n          draft.isLoggingIn = true;\n          draft.isLoggedIn = false;\n          draft.logInErrorReason = '';\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: true,\r\n              isLoggedIn: false,\r\n              logInErrorReason: '',\r\n          }; */\n        }\n\n      case LOG_IN_SUCCESS:\n        {\n          draft.isLoggingIn = false;\n          draft.me = action.data;\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: false,\r\n              me: action.data,\r\n              isLoading: false,\r\n          }; */\n        }\n\n      case LOG_IN_FAILURE:\n        {\n          draft.isLoggingIn = false;\n          draft.logInErrorReason = action.error;\n          draft.me = null;\n          break;\n          /* return {\r\n              ...state,\r\n              isLoggingIn: false,\r\n              logInErrorReason: action.error,\r\n              me: null,\r\n          }; */\n        }\n\n      case LOG_OUT_REQUEST:\n        {\n          draft.isLoggingOut = true;\n          break;\n          /* return {\r\n            ...state,\r\n            isLoggingOut: true,\r\n          }; */\n        }\n\n      case LOG_OUT_SUCCESS:\n        {\n          draft.isLoggingOut = false;\n          draft.me = null;\n          break;\n          /* return {\r\n            ...state,\r\n            isLoggingOut: false,\r\n            me: null,\r\n          }; */\n        }\n\n      case SIGN_UP_REQUEST:\n        {\n          draft.isSigningUp = true;\n          draft.isSignedUp = false;\n          draft.signUpErrorReason = '';\n          break;\n          /* return {\r\n              ...state,\r\n              isSigningUp: true,\r\n              isSignedUp: false,\r\n              signUpErrorReason: '',\r\n          }; */\n        }\n\n      case SIGN_UP_SUCCESS:\n        {\n          alert('회원가입 성공!');\n          draft.isSigningUp = false;\n          draft.isSignedUp = true;\n          break;\n          /* return {\r\n              isSigningUp: false,\r\n              isSignedUp: true,\r\n          }; */\n        }\n\n      case SIGN_UP_FAILURE:\n        {\n          draft.isSigningUp = false;\n          draft.signUpErrorReason = action.error;\n          break;\n          /* return {\r\n              isSigningUp: false,\r\n              signUpErrorReason: action.error,\r\n          }; */\n        }\n\n      case LOAD_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case LOAD_USER_SUCCESS:\n        {\n          if (action.isThisMe) {\n            draft.me = action.data;\n            break;\n          } else {\n            draft.userInfo = action.data;\n            break;\n          }\n          /* if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me\r\n              return {\r\n                  ...state,\r\n                  me: action.data,\r\n                };\r\n          } else {\r\n              return {\r\n                  ...state,\r\n                  userInfo: action.data,\r\n                };\r\n          } */\n\n        }\n\n      case LOAD_USER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case FOLLOW_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case FOLLOW_USER_SUCCESS:\n        {\n          draft.me.Followings.unshift({\n            id: action.data\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Followings: [{ id: action.data }, ...state.me.Followings],\r\n            },\r\n          }; */\n        }\n\n      case FOLLOW_USER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UNFOLLOW_USER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case UNFOLLOW_USER_SUCCESS:\n        {\n          // me.Followings 배열 안에 상대방 id가 들었는지 찾기 \n          var index = draft.me.Followings.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Followings.splice(index, 1); // followingList 배열 안에 상대방 id가 들었는지 찾기 (me.FollowingList가 아니다!!!!!!!!!!!)\n\n          var index2 = draft.followingList.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.followingList.splice(index2, 1);\n          break;\n        }\n\n      case UNFOLLOW_USER_FAILURE:\n        {\n          console.log('action.error=', action.error);\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case ADD_POST_TO_ME:\n        {\n          draft.me.Posts.unshift({\n            id: action.data\n          });\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 \r\n            },\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_REQUEST:\n        {\n          draft.followerList = !action.offset ? [] : draft.followerList; // offset이 없는 경우, followerList = []\n          // 이렇게 해줘야 2번씩 로딩 안됨 \n\n          break;\n          /* return {\r\n            ...state,\r\n            //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                              // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      \r\n                                                                              // 여기 없어도 됨 (내 Q&A 답글)\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_SUCCESS:\n        {\n          action.data.forEach(function (f) {\n            draft.followerList.push(f);\n          });\n          draft.hasMoreFollower = action.data.length === 3;\n          break;\n          /* return {\r\n            ...state,\r\n            followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 \r\n            hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                                  // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.\r\n          }; */\n        }\n\n      case LOAD_FOLLOWERS_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      /* 프로필 페이지에서 팔로잉 목록 불러오는 명령 */\n\n      case LOAD_FOLLOWINGS_REQUEST:\n        {\n          draft.followingList = !action.offset ? [] : draft.followingList; // offset이 없는 경우, followerList = []\n          // 이렇게 해줘야 2번씩 로딩 안됨 \n\n          break;\n        }\n\n      case LOAD_FOLLOWINGS_SUCCESS:\n        {\n          action.data.forEach(function (f) {\n            draft.followingList.push(f);\n          });\n          draft.hasMoreFollowing = action.data.length === 3;\n          break;\n        }\n\n      case LOAD_FOLLOWINGS_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_FOLLOWER_REQUEST:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case REMOVE_FOLLOWER_SUCCESS:\n        {\n          var userIndex1 = draft.Followers.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Followers.splice(userIndex1, 1); // me.followerList가 아니다!!!!!!!!!!!!!!!!!! \n\n          var userIndex2 = draft.followerList.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.followerList.splice(userIndex2, 1);\n          break;\n        }\n\n      case REMOVE_FOLLOWER_FAILURE:\n        {\n          break;\n          /* return {\r\n            ...state,\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_REQUEST:\n        {\n          draft.isEditingNickname = true;\n          draft.editNicknameErrorReason = '';\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: true,\r\n            editNicknameErrorReason: '',\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_SUCCESS:\n        {\n          draft.isEditingNickname = false;\n          draft.me.nickname = action.data;\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: false,\r\n            me: {\r\n              ...state.me,\r\n              nickname: action.data,\r\n            },\r\n          }; */\n        }\n\n      case EDIT_NICKNAME_FAILURE:\n        {\n          draft.isEditingNickname = false;\n          draft.editNicknameErrorReason = action.error;\n          break;\n          /* return {\r\n            ...state,\r\n            isEditingNickname: false,\r\n            editNicknameErrorReason: action.error,\r\n          }; */\n        }\n\n      case REMOVE_POST_OF_ME:\n        {\n          var postIndex = draft.me.Posts.findIndex(function (v) {\n            return v.id === action.data;\n          });\n          draft.me.Posts.splice(postIndex, 1);\n          break;\n          /* return {\r\n            ...state,\r\n            me: {\r\n              ...state.me,\r\n              Posts: state.me.Posts.filter(v => v.id != action.data),\r\n            }\r\n          }; */\n        }\n\n      default:\n        {\n          break;\n          /* return {\r\n              ...state,\r\n          }; */\n        }\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n/* switch (action.type) {\r\n  case LOG_IN_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: true,\r\n          isLoggedIn: false,\r\n          logInErrorReason: '',\r\n      };\r\n  }\r\n  case LOG_IN_SUCCESS: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: false,\r\n          me: action.data,\r\n          isLoading: false,\r\n      };\r\n  }\r\n  case LOG_IN_FAILURE: {\r\n      return {\r\n          ...state,\r\n          isLoggingIn: false,\r\n          logInErrorReason: action.error,\r\n          me: null,\r\n      };\r\n  }\r\n  case LOG_OUT_REQUEST: {\r\n      return {\r\n        ...state,\r\n        isLoggingOut: true,\r\n      };\r\n  }\r\n  case LOG_OUT_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        isLoggingOut: false,\r\n        me: null,\r\n      };\r\n  }\r\n  case SIGN_UP_REQUEST: {\r\n      return {\r\n          ...state,\r\n          isSigningUp: true,\r\n          isSignedUp: false,\r\n          signUpErrorReason: '',\r\n      };\r\n  }\r\n  case SIGN_UP_SUCCESS: {\r\n      alert('회원가입 성공!'); \r\n      return {\r\n          isSigningUp: false,\r\n          isSignedUp: true,\r\n      };\r\n  }\r\n  case SIGN_UP_FAILURE: {\r\n      return {\r\n          isSigningUp: false,\r\n          signUpErrorReason: action.error,\r\n      };\r\n  }\r\n  case LOAD_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case LOAD_USER_SUCCESS: {\r\n      if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me\r\n          return {\r\n              ...state,\r\n              me: action.data,\r\n            };\r\n      } else {\r\n          return {\r\n              ...state,\r\n              userInfo: action.data,\r\n            };\r\n      }\r\n      \r\n  }\r\n  case LOAD_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case FOLLOW_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case FOLLOW_USER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followings: [{ id: action.data }, ...state.me.Followings],\r\n        },\r\n      };\r\n  }\r\n  case FOLLOW_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followings: state.me.Followings.filter(v => v.id !== action.data),\r\n        },\r\n        followingList: state.followingList.filter(v => v.id !== action.data),\r\n      };\r\n  }\r\n  case UNFOLLOW_USER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case ADD_POST_TO_ME: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 \r\n        },\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_REQUEST: {\r\n      return {\r\n        ...state,\r\n        //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                          // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      \r\n                                                                          // 여기 없어도 됨 (내 Q&A 답글)\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 \r\n        hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                              // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.\r\n      };\r\n  }\r\n  case LOAD_FOLLOWERS_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_REQUEST: {\r\n      return {\r\n        ...state,\r\n        //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         \r\n                                                                            // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) \r\n                                                                            // 여기 없어도 됨 (내 Q&A 답글)      \r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가\r\n        hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.\r\n                                                                  // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. \r\n      };\r\n  }\r\n  case LOAD_FOLLOWINGS_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_REQUEST: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_SUCCESS: {\r\n      return {\r\n        ...state,\r\n        me: {\r\n          ...state.me,\r\n          Followers: state.me.Followers.filter(v => v.id !== action.data),\r\n        },\r\n        followerList: state.followerList.filter(v => v.id !== action.data),\r\n      };\r\n  }\r\n  case REMOVE_FOLLOWER_FAILURE: {\r\n      return {\r\n        ...state,\r\n      };\r\n  }\r\n  case EDIT_NICKNAME_REQUEST: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: true,\r\n      editNicknameErrorReason: '',\r\n    };\r\n  }\r\n  case EDIT_NICKNAME_SUCCESS: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: false,\r\n      me: {\r\n        ...state.me,\r\n        nickname: action.data,\r\n      },\r\n    };\r\n  }\r\n  case EDIT_NICKNAME_FAILURE: {\r\n    return {\r\n      ...state,\r\n      isEditingNickname: false,\r\n      editNicknameErrorReason: action.error,\r\n    };\r\n  }\r\n  case REMOVE_POST_OF_ME: {\r\n    //const index = draft.me.Posts.findIndex(v => v.id === action.data);\r\n    //draft.me.Posts.splice(index, 1);\r\n    //break;\r\n    return {\r\n      ...state,\r\n      me: {\r\n        ...state.me,\r\n        Posts: state.me.Posts.filter(v => v.id != action.data),\r\n      }\r\n    };\r\n  }\r\n  default: {\r\n      return {\r\n          ...state,\r\n      };\r\n  }\r\n} */\n\n//# sourceURL=webpack:///./reducers/user.js?");

/***/ }),

/***/ 5:
/*!********************************!*\
  !*** multi ./pages/profile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\MiRcomputer\\Documents\\GitHub\\react-nodebird\\front\\pages\\profile.js */\"./pages/profile.js\");\n\n\n//# sourceURL=webpack:///multi_./pages/profile.js?");

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@ant-design/icons\");\n\n//# sourceURL=webpack:///external_%22@ant-design/icons%22?");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"antd\");\n\n//# sourceURL=webpack:///external_%22antd%22?");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/array/is-array\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/array/is-array%22?");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/get-iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/get-iterator%22?");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/json/stringify\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/json/stringify%22?");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/create\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/create%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-properties\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-properties%22?");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/define-property\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/define-property%22?");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/freeze\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/freeze%22?");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/get-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/get-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/object/set-prototype-of\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/object/set-prototype-of%22?");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/promise\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/promise%22?");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol%22?");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"core-js/library/fn/symbol/iterator\");\n\n//# sourceURL=webpack:///external_%22core-js/library/fn/symbol/iterator%22?");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"immer\");\n\n//# sourceURL=webpack:///external_%22immer%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-server/dist/lib/utils\");\n\n//# sourceURL=webpack:///external_%22next-server/dist/lib/utils%22?");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");\n\n//# sourceURL=webpack:///external_%22next/router%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types-exact\");\n\n//# sourceURL=webpack:///external_%22prop-types-exact%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-slick\");\n\n//# sourceURL=webpack:///external_%22react-slick%22?");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"regenerator-runtime\");\n\n//# sourceURL=webpack:///external_%22regenerator-runtime%22?");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");\n\n//# sourceURL=webpack:///external_%22styled-components%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });