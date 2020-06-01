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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("EhLH");


/***/ }),

/***/ "6BQ9":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wa65");

/***/ }),

/***/ "EhLH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("6BQ9");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("O40h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("zIXN");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("p+NB");







/* 개별 포스트 불러오는 페이지 */

/* 검색 엔진이 컨텐츠를 어떻게 긁어가는지 테스트 하기 위한 페이지 */

var Post = function Post(_ref) {
  var id = _ref.id;

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useSelector"])(function (state) {
    return state.post;
  }),
      singlePost = _useSelector.singlePost;

  var backURL = 'http://localhost:3067';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_5___default.a, {
    title: "".concat(singlePost.User.nickname, "\uB2D8\uC758 \uAE00"),
    description: singlePost.content,
    meta: [{
      name: 'description',
      content: singlePost.content
    }, {
      property: 'og:title',
      content: "".concat(singlePost.User.nickname, "\uB2D8\uC758 \uAC8C\uC2DC\uAE00")
    }, {
      property: 'og:description',
      content: singlePost.content
    }, {
      property: 'og:image',
      content: singlePost.Images[0] && "".concat(backURL, "/").concat(singlePost.Images[0].src)
    }, {
      property: 'og:url',
      content: "".concat(backURL, "/post/").concat(id)
    }]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, singlePost.content), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, singlePost.User.nickname), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, singlePost.Images[0] && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
    src: "".concat(backURL, "/").concat(singlePost.Images[0].src)
  })));
};

Post.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // [SSR] dispatch
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_6__[/* LOAD_POST_REQUEST */ "t"],
              data: context.query.id
            });
            return _context.abrupt("return", {
              id: _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(context.query.id, 10)
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_MAIN_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_MAIN_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_MAIN_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_COMMENTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_COMMENTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_COMMENTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_POST_FAILURE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* redux state */

var initialState = {
  mainPosts: [],
  imagePaths: [],
  // 미리보기 이미지 경로 
  isAddingPost: false,
  // 포스트 업로드 중
  addPostErrorReason: '',
  // 포스트 업로드 실패 사유 
  postAdded: false,
  // 포스트 업로드 성공 여부 (쓰는 이유: 글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
  isAddingComment: false,
  // 댓글 업로드 중 
  addCommentErrorReason: '',
  // 댓글 업로드 에러 사유 
  commentAdded: false,
  // 댓글이 추가되었는지 (쓰는 이유: 댓글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
  addLikeErrorReason: '',
  hasMorePost: false,
  // 스크롤을 더 내려야 할지 
  singlePost: null
};
/* Action의 이름 */

var LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST'; // 메인 포스트 로딩 액션

var LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
var LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';
var LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST'; // 해시태그로 검색했을 때 결과 로딩 액션

var LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
var LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';
var LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST'; // 사용자가 어떤 게시글을 썼는지 로딩 액션

var LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
var LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';
var UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST'; // 이미지 업로드 액션 

var UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
var UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';
var ADD_POST_REQUEST = 'ADD_POST_REQUEST'; // 게시글 업로드 액션

var ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
var ADD_POST_FAILURE = 'ADD_POST_FAILURE';
var LIKE_POST_REQUEST = 'LIKE_POST_REQUEST'; // 게시글 좋아요 

var LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
var LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';
var UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST'; // 게시글 좋아요 취소 

var UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
var UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';
var ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
var ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
var ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';
var LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST'; // 게시글 댓글 불러오기 

var LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
var LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';
var RETWEET_REQUEST = 'RETWEET_REQUEST'; // 리트윗

var RETWEET_SUCCESS = 'RETWEET_SUCCESS';
var RETWEET_FAILURE = 'RETWEET_FAILURE';
var REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST'; // 포스트 제거 

var REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
var REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';
var REMOVE_IMAGE = 'REMOVE_IMAGE';
var LOAD_POST_REQUEST = 'LOAD_POST_REQUEST'; // 게시글 한개 불러오기 

var LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
var LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';
/* 실제 Action */
// ...

/* Reducer */

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  /* immer */
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, function (draft) {
    // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.
    switch (action.type) {
      case UPLOAD_IMAGES_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UPLOAD_IMAGES_SUCCESS:
        {
          action.data.forEach(function (p) {
            // 이처럼, 더이상 불변성을 유지하지 않아도 된다. (immer에서 draft보고 알아서 불변성 감지해준다.)
            draft.imagePaths.push(p);
          });
          break;
          /* return {
            ...state,
            imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
          }; */
        }

      case UPLOAD_IMAGES_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_IMAGE:
        {
          var index = draft.imagePaths.findIndex(function (v, i) {
            return i === action.index;
          });
          draft.imagePaths.splice(index, 1);
          break;
          /* return {
              ...state,
              imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
          }; */
        }

      case LOAD_MAIN_POSTS_REQUEST:
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
        {
          draft.mainPosts = !action.lastId ? [] : draft.mainPosts; // lastId가 없으면, mainPosts = []

          draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
          break;
          /* return {
            ...state,
            mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                    // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
            hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
          }; */
        }

      case LOAD_MAIN_POSTS_SUCCESS:
      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
        {
          action.data.forEach(function (p) {
            draft.mainPosts.push(p);
          });
          break;
          /* return {
            ...state,
            mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
            hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
          }; */
        }

      case LOAD_MAIN_POSTS_FAILURE:
      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case ADD_POST_REQUEST:
        {
          draft.isAddingPost = true;
          draft.addPostErrorReason = '';
          draft.postAdded = false;
          break;
          /* return {
              ...state,
              isAddingPost: true,
              addPostErrorReason: '',
              postAdded: false,
          }; */
        }

      case ADD_POST_SUCCESS:
        {
          draft.isAddingPost = false;
          draft.mainPosts.unshift(action.data); // 배열 맨 앞에 추가할때는 unshift()

          draft.postAdded = true;
          draft.imagePaths = [];
          break;
          /* return {
              ...state,
              isAddingPost: false,
              mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
              postAdded: true,
              imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
          }; */
        }

      case ADD_POST_FAILURE:
        {
          draft.isAddingPost = false;
          draft.addPostErrorReason = action.error;
          break;
          /* return {
              ...state,
              isAddingPost: false,
              addPostErrorReason: action.error,
          }; */
        }

      case ADD_COMMENT_REQUEST:
        {
          draft.isAddingComment = true;
          draft.addCommentErrorReason = '';
          draft.commentAdded = false;
          break;
          /* return {
              ...state,
              isAddingComment: true,
              addCommentErrorReason: '',
              commentAdded: false,
          }; */
        }

      case ADD_COMMENT_SUCCESS:
        {
          var postIndex = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });
          draft.mainPosts[postIndex].Comments.push(action.data.comment);
          draft.isAddingComment = false;
          draft.commentAdded = true;
          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
          const post = state.mainPosts[postIndex];                  // 해당 게시글을 찾는다
          const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
          const mainPosts = [...state.mainPosts];                   // mainPosts도 불변성을 확보해 줘야한다.
          mainPosts[postIndex] = { ...post, Comments };
          return {
              ...state,
              isAddingComment: false,
              mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
              commentAdded: true,
          }; */
        }

      case ADD_COMMENT_FAILURE:
        {
          draft.isAddingComment = false;
          draft.addCommentErrorReason = action.error;
          break;
          /* return {
              ...state,
              isAddingComment: false,
              addCommentErrorReason: action.error,
          }; */
        }

      case LOAD_COMMENTS_SUCCESS:
        {
          var _postIndex = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          draft.mainPosts[_postIndex].Comments = action.data.comments;
          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Comments = action.data.comments;
          const mainPosts = [...state.mainPosts];         // mainPosts도 불변성을 확보해 줘야한다.
          mainPosts[postIndex] = { ...post, Comments };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case LIKE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LIKE_POST_SUCCESS:
        {
          var _postIndex2 = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          draft.mainPosts[_postIndex2].Likers.unshift({
            id: action.data.userId
          }); // 배열 맨 앞에 추가할때는 unshift()


          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case LIKE_POST_FAILURE:
        {
          alert('좋아요 실패!');
          draft.addLikeErrorReason = action.error;
          break;
          /* return {
            ...state,
            addLikeErrorReason: action.error,
          }; */
        }

      case UNLIKE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNLIKE_POST_SUCCESS:
        {
          var _postIndex3 = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data.postId;
          });

          var likerIndex = draft.mainPosts[_postIndex3].Likers.findIndex(function (v) {
            return v.id === action.data.userId;
          });

          draft.mainPosts[_postIndex3].Likers.splice(likerIndex, 1);

          break;
          /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
          const post = state.mainPosts[postIndex];
          const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
          const mainPosts = [...state.mainPosts];
          mainPosts[postIndex] = { ...post, Likers };
          return {
            ...state,
            mainPosts,
          }; */
        }

      case UNLIKE_POST_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case RETWEET_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case RETWEET_SUCCESS:
        {
          draft.mainPosts.unshift(action.data);
          break;
          /* return {
            ...state,
            mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
          }; */
        }

      case RETWEET_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_POST_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_POST_SUCCESS:
        {
          var _index = draft.mainPosts.findIndex(function (v) {
            return v.id === action.data;
          });

          draft.mainPosts.splice(_index, 1);
          break;
          /* return {
            ...state,
            mainPosts: state.mainPosts.filter(v => v.id !== action.data),
          }; */
        }

      case REMOVE_POST_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LOAD_POST_SUCCESS:
        {
          draft.singlePost = action.data;
          break;
        }

      default:
        {
          break;
          /* return {
            ...state,
          }; */
        }
    }
  });
};

/* harmony default export */ __webpack_exports__["L"] = (reducer);
/* immer쓰기 전 코드 */

/* switch (action.type) {
  case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state,
      };
  }
  case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
      };
  }
  case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_IMAGE: {
      return {
          ...state,
          imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
      };
  }
  case LOAD_MAIN_POSTS_REQUEST: 
  case LOAD_HASHTAG_POSTS_REQUEST:
  case LOAD_USER_POSTS_REQUEST: {
      return {
        ...state,
        mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
        hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
      };
  }
  case LOAD_MAIN_POSTS_SUCCESS: 
  case LOAD_HASHTAG_POSTS_SUCCESS:
  case LOAD_USER_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
        hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
      };
  }
  case LOAD_MAIN_POSTS_FAILURE: 
  case LOAD_HASHTAG_POSTS_FAILURE:
  case LOAD_USER_POSTS_FAILURE: {
      return {
        ...state,
      };
  }
  case ADD_POST_REQUEST: {
      return {
          ...state,
          isAddingPost: true,
          addPostErrorReason: '',
          postAdded: false,
      };
  }
  case ADD_POST_SUCCESS: {
      return {
          ...state,
          isAddingPost: false,
          mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
          postAdded: true,
          imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
      };
  }
  case ADD_POST_FAILURE: {
      return {
          ...state,
          isAddingPost: false,
          addPostErrorReason: action.error,
      };
  }
  case ADD_COMMENT_REQUEST: {
      return {
          ...state,
          isAddingComment: true,
          addCommentErrorReason: '',
          commentAdded: false,
      };
  }
  case ADD_COMMENT_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
      const post = state.mainPosts[postIndex]; // 해당 게시글을 찾는다
      const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
      const mainPosts = [...state.mainPosts]; // mainPosts도 불변성을 확보해 줘야한다.
      mainPosts[postIndex] = { ...post, Comments };

      return {
          ...state,
          isAddingComment: false,
          mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
          commentAdded: true,
      };
  }
  case ADD_COMMENT_FAILURE: {
      return {
          ...state,
          isAddingComment: false,
          addCommentErrorReason: action.error,
      };
  }
  case LOAD_COMMENTS_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = action.data.comments;
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case LIKE_POST_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_FAILURE: {
      alert('좋아요 실패!');
      return {
        ...state,
        addLikeErrorReason: action.error,
      };
  }
  case UNLIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case UNLIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case UNLIKE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  case RETWEET_REQUEST: {
      return {
        ...state,
      };
  }
  case RETWEET_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
      };
  }
  case RETWEET_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_SUCCESS: {
      //const index = draft.mainPosts.findIndex(v => v.id === action.data);
      //draft.mainPosts.splice(index, 1);
      //break;
      return {
        ...state,
        mainPosts: state.mainPosts.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  default: {
      return {
          ...state,
      };
  }
} */

/***/ }),

/***/ "wa65":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "zIXN":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ })

/******/ });