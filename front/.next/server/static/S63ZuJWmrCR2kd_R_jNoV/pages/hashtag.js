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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("davr");


/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Exp3":
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "J3/a":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNFOLLOW_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNFOLLOW_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNFOLLOW_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EDIT_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EDIT_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EDIT_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* unused harmony export REMOVE_POST_OF_ME */
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

/* const dummyUser = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    id: 1,
}; */

/* redux state */

var initialState = {
  isLoggingOut: false,
  // 로그아웃 시도 중
  isLogginIn: false,
  // 로그인 시도 중 
  logInErrorReason: '',
  // 로그인 에러 사유
  signedUp: false,
  // 회원가입 성공
  isSignedUp: false,
  // 회원가입 시도 중
  signUpErrorReason: '',
  // 회원가입 에러 사유
  me: null,
  // 내 정보
  followingList: [],
  // '내'가 팔로잉 하고있는 사람들 목록 (프로필 페이지에서 쓰임)
  followerList: [],
  // '나'의 팔로워들 목록              (프로필 페이지에서 쓰임)
  userInfo: null,
  // 남의 정보 
  isEditingNickname: false,
  // 닉네임 변경 중 
  editNicknameErrorReason: '',
  // 닉네임 변경 실패 사유 
  hasMoreFollower: false,
  // 더보기 버튼을 존재시킬지
  hasMoreFollowing: false // 더보기 버튼을 존재시킬지

};
/* Action의 이름 */

var SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
var SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
var SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';
var LOG_IN_REQUEST = 'LOG_IN_REQUEST';
var LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
var LOG_IN_FAILURE = 'LOG_IN_FAILURE';
var LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
var LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
var LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';
var LOAD_USER_REQUEST = 'LOAD_USER_REQUEST'; // 사용자 불러오기 

var LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
var LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';
var LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
var LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
var LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';
var LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
var LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
var LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';
var FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST'; // 팔로우 액션

var FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
var FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';
var UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST'; // 언팔 액션

var UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
var UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';
var REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST'; // 팔로워 제거 

var REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
var REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';
var EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
var EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
var EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';
var ADD_POST_TO_ME = 'ADD_POST_TO_ME';
var REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';
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
      case LOG_IN_REQUEST:
        {
          draft.isLoggingIn = true;
          draft.isLoggedIn = false;
          draft.logInErrorReason = '';
          break;
          /* return {
              ...state,
              isLoggingIn: true,
              isLoggedIn: false,
              logInErrorReason: '',
          }; */
        }

      case LOG_IN_SUCCESS:
        {
          draft.isLoggingIn = false;
          draft.me = action.data;
          break;
          /* return {
              ...state,
              isLoggingIn: false,
              me: action.data,
              isLoading: false,
          }; */
        }

      case LOG_IN_FAILURE:
        {
          draft.isLoggingIn = false;
          draft.logInErrorReason = action.reason; // saga에서 보낸 action.reason

          console.log('로그인에러=', logInErrorReason);
          draft.me = null;
          break;
          /* return {
              ...state,
              isLoggingIn: false,
              logInErrorReason: action.error,
              me: null,
          }; */
        }

      case LOG_OUT_REQUEST:
        {
          draft.isLoggingOut = true;
          break;
          /* return {
            ...state,
            isLoggingOut: true,
          }; */
        }

      case LOG_OUT_SUCCESS:
        {
          draft.isLoggingOut = false;
          draft.me = null;
          break;
          /* return {
            ...state,
            isLoggingOut: false,
            me: null,
          }; */
        }

      case SIGN_UP_REQUEST:
        {
          draft.isSigningUp = true;
          draft.isSignedUp = false;
          draft.signUpErrorReason = '';
          break;
          /* return {
              ...state,
              isSigningUp: true,
              isSignedUp: false,
              signUpErrorReason: '',
          }; */
        }

      case SIGN_UP_SUCCESS:
        {
          alert('회원가입 성공!');
          draft.isSigningUp = false;
          draft.isSignedUp = true;
          break;
          /* return {
              isSigningUp: false,
              isSignedUp: true,
          }; */
        }

      case SIGN_UP_FAILURE:
        {
          draft.isSigningUp = false;
          draft.signUpErrorReason = action.error;
          break;
          /* return {
              isSigningUp: false,
              signUpErrorReason: action.error,
          }; */
        }

      case LOAD_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case LOAD_USER_SUCCESS:
        {
          if (action.isThisMe) {
            draft.me = action.data;
            break;
          } else {
            draft.userInfo = action.data;
            break;
          }
          /* if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
              return {
                  ...state,
                  me: action.data,
                };
          } else {
              return {
                  ...state,
                  userInfo: action.data,
                };
          } */

        }

      case LOAD_USER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case FOLLOW_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case FOLLOW_USER_SUCCESS:
        {
          draft.me.Followings.unshift({
            id: action.data
          });
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Followings: [{ id: action.data }, ...state.me.Followings],
            },
          }; */
        }

      case FOLLOW_USER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNFOLLOW_USER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case UNFOLLOW_USER_SUCCESS:
        {
          // me.Followings 배열 안에 상대방 id가 들었는지 찾기 
          var index = draft.me.Followings.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Followings.splice(index, 1); // followingList 배열 안에 상대방 id가 들었는지 찾기 (me.FollowingList가 아니다!!!!!!!!!!!)

          var index2 = draft.followingList.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.followingList.splice(index2, 1);
          break;
        }

      case UNFOLLOW_USER_FAILURE:
        {
          console.log('action.error=', action.error);
          break;
          /* return {
            ...state,
          }; */
        }

      case ADD_POST_TO_ME:
        {
          draft.me.Posts.unshift({
            id: action.data
          });
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
            },
          }; */
        }

      case LOAD_FOLLOWERS_REQUEST:
        {
          draft.followerList = !action.offset ? [] : draft.followerList; // offset이 없는 경우, followerList = []
          // 이렇게 해줘야 2번씩 로딩 안됨 

          break;
          /* return {
            ...state,
            //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                              // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                              // 여기 없어도 됨 (내 Q&A 답글)
          }; */
        }

      case LOAD_FOLLOWERS_SUCCESS:
        {
          action.data.forEach(function (f) {
            draft.followerList.push(f);
          });
          draft.hasMoreFollower = action.data.length === 3;
          break;
          /* return {
            ...state,
            followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
            hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                  // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
          }; */
        }

      case LOAD_FOLLOWERS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      /* 프로필 페이지에서 팔로잉 목록 불러오는 명령 */

      case LOAD_FOLLOWINGS_REQUEST:
        {
          draft.followingList = !action.offset ? [] : draft.followingList; // offset이 없는 경우, followerList = []
          // 이렇게 해줘야 2번씩 로딩 안됨 

          break;
        }

      case LOAD_FOLLOWINGS_SUCCESS:
        {
          action.data.forEach(function (f) {
            draft.followingList.push(f);
          });
          draft.hasMoreFollowing = action.data.length === 3;
          break;
        }

      case LOAD_FOLLOWINGS_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_FOLLOWER_REQUEST:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case REMOVE_FOLLOWER_SUCCESS:
        {
          var userIndex1 = draft.Followers.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Followers.splice(userIndex1, 1); // me.followerList가 아니다!!!!!!!!!!!!!!!!!! 

          var userIndex2 = draft.followerList.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.followerList.splice(userIndex2, 1);
          break;
        }

      case REMOVE_FOLLOWER_FAILURE:
        {
          break;
          /* return {
            ...state,
          }; */
        }

      case EDIT_NICKNAME_REQUEST:
        {
          draft.isEditingNickname = true;
          draft.editNicknameErrorReason = '';
          break;
          /* return {
            ...state,
            isEditingNickname: true,
            editNicknameErrorReason: '',
          }; */
        }

      case EDIT_NICKNAME_SUCCESS:
        {
          draft.isEditingNickname = false;
          draft.me.nickname = action.data;
          break;
          /* return {
            ...state,
            isEditingNickname: false,
            me: {
              ...state.me,
              nickname: action.data,
            },
          }; */
        }

      case EDIT_NICKNAME_FAILURE:
        {
          draft.isEditingNickname = false;
          draft.editNicknameErrorReason = action.error;
          break;
          /* return {
            ...state,
            isEditingNickname: false,
            editNicknameErrorReason: action.error,
          }; */
        }

      case REMOVE_POST_OF_ME:
        {
          var postIndex = draft.me.Posts.findIndex(function (v) {
            return v.id === action.data;
          });
          draft.me.Posts.splice(postIndex, 1);
          break;
          /* return {
            ...state,
            me: {
              ...state.me,
              Posts: state.me.Posts.filter(v => v.id != action.data),
            }
          }; */
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

/* harmony default export */ __webpack_exports__["F"] = (reducer);
/* switch (action.type) {
  case LOG_IN_REQUEST: {
      return {
          ...state,
          isLoggingIn: true,
          isLoggedIn: false,
          logInErrorReason: '',
      };
  }
  case LOG_IN_SUCCESS: {
      return {
          ...state,
          isLoggingIn: false,
          me: action.data,
          isLoading: false,
      };
  }
  case LOG_IN_FAILURE: {
      return {
          ...state,
          isLoggingIn: false,
          logInErrorReason: action.error,
          me: null,
      };
  }
  case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
  }
  case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
  }
  case SIGN_UP_REQUEST: {
      return {
          ...state,
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: '',
      };
  }
  case SIGN_UP_SUCCESS: {
      alert('회원가입 성공!'); 
      return {
          isSigningUp: false,
          isSignedUp: true,
      };
  }
  case SIGN_UP_FAILURE: {
      return {
          isSigningUp: false,
          signUpErrorReason: action.error,
      };
  }
  case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case LOAD_USER_SUCCESS: {
      if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
          return {
              ...state,
              me: action.data,
            };
      } else {
          return {
              ...state,
              userInfo: action.data,
            };
      }
      
  }
  case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: [{ id: action.data }, ...state.me.Followings],
        },
      };
  }
  case FOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data),
        },
        followingList: state.followingList.filter(v => v.id !== action.data),
      };
  }
  case UNFOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case ADD_POST_TO_ME: {
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
        },
      };
  }
  case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state,
        //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                          // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                          // 여기 없어도 됨 (내 Q&A 답글)
      };
  }
  case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
        hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                              // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
      };
  }
  case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state,
      };
  }
  case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state,
        //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                            // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) 
                                                                            // 여기 없어도 됨 (내 Q&A 답글)      
      };
  }
  case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가
        hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                  // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. 
      };
  }
  case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followers: state.me.Followers.filter(v => v.id !== action.data),
        },
        followerList: state.followerList.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_FOLLOWER_FAILURE: {
      return {
        ...state,
      };
  }
  case EDIT_NICKNAME_REQUEST: {
    return {
      ...state,
      isEditingNickname: true,
      editNicknameErrorReason: '',
    };
  }
  case EDIT_NICKNAME_SUCCESS: {
    return {
      ...state,
      isEditingNickname: false,
      me: {
        ...state.me,
        nickname: action.data,
      },
    };
  }
  case EDIT_NICKNAME_FAILURE: {
    return {
      ...state,
      isEditingNickname: false,
      editNicknameErrorReason: action.error,
    };
  }
  case REMOVE_POST_OF_ME: {
    //const index = draft.me.Posts.findIndex(v => v.id === action.data);
    //draft.me.Posts.splice(index, 1);
    //break;
    return {
      ...state,
      me: {
        ...state.me,
        Posts: state.me.Posts.filter(v => v.id != action.data),
      }
    };
  }
  default: {
      return {
          ...state,
      };
  }
} */

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

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

/***/ "R2Q7":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "XXOK":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("J3/a");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "davr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ln6h");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("O40h");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("p+NB");
/* harmony import */ var _containers_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("uor+");







var Hashtag = function Hashtag(_ref) {
  var tag = _ref.tag;
  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();

  var _useSelector = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(function (state) {
    return state.post;
  }),
      mainPosts = _useSelector.mainPosts,
      hasMorePost = _useSelector.hasMorePost;

  var onScroll = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    //console.log('scrollY, clientHeight, scrollHeight = ',window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    // 설명
    // scrollY      : 이제까지 내린 y좌표값 (=현재 보이는 화면의 맨 윗부분 까지를 측정한 값)
    // clientHeight : 현재 client화면의 높이값 (=항상 일정한 값)
    // scrollHeight : 페이지의 맨 위 ~ 맨 아래 까지의 y좌표값 (=항상 일정한 값)
    // ==> 맨 마지막까지 스크롤 내렸을때, scrollY + clientHeight = scrollHeight 가 된다.
    if (window.scrollY + document.documentElement.clientHeight + 300 > document.documentElement.scrollHeigh) {
      // 300 정도 남겨놓은 상태에서 
      if (hasMorePost) {
        dispatch({
          type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[/* LOAD_HASHTAG_POSTS_REQUEST */ "n"],
          lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
          // 마지막 게시글의 id를 가져옴 
          data: tag
        });
      } // hasMorePost가 false이면, 더이상 REQUEST하지 않게 된다.
      // 하지만, 이미 scroll감지 부분에서 너무 많은 REQUEST를 보냈다. -> sagas/post.js로 가서 throttle 설정을 해주자 

    }
  }, [hasMorePost, mainPosts.length]);
  /* 프론트에서 마우스 스크롤 감지위해서 useEffect() 사용 */

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', onScroll); // 마우스 스크롤 감지 

    return function () {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts]); // onScroll함수에서 사용하고있는 state를 넣어준 것.(=의존하고 있기 때문)

  /* useEffect(() => {
      dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,     // 해당 해시태그 게시글들 가져오기 요청 
        data: tag,
      });
  }, []);  */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, mainPosts.map(function (c) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_containers_PostCard__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
      key: +c.createdAt,
      post: c
    });
  }));
};

/* Hashtag.getInitialProps = async (context) => {   // _app.js의 (ctx) -> Hashtag.getInitialProps에서 (context)로 받는다. 
    console.log(context.query.tag);                 // query: { tag: '가위바위보' }, 
    return { tag: context.query.tag };              // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
}; */
Hashtag.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var tag;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //const tag = context.query.tag;                   // query: { tag: '가위바위보' }
            //console.log('tag=', tag);
            tag = context.query.tag;
            console.log('hashtag getInitialProps에서..=', tag);
            context.store.dispatch({
              type: _reducers_post__WEBPACK_IMPORTED_MODULE_4__[/* LOAD_HASHTAG_POSTS_REQUEST */ "n"],
              // 해당 해시태그 게시글들 가져오기 요청 
              data: tag
            });
            return _context.abrupt("return", {
              tag: tag
            });

          case 4:
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

/* harmony default export */ __webpack_exports__["default"] = (Hashtag);

/***/ }),

/***/ "doui":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js
var is_array = __webpack_require__("p0XB");
var is_array_default = /*#__PURE__*/__webpack_require__.n(is_array);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js

function _arrayWithHoles(arr) {
  if (is_array_default()(arr)) return arr;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js
var get_iterator = __webpack_require__("XXOK");
var get_iterator_default = /*#__PURE__*/__webpack_require__.n(get_iterator);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = get_iterator_default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _slicedToArray; });



function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "nZwT":
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

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

/***/ "p0XB":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("R2Q7");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "rt45":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2Eek");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("FbiP");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "uor+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__("doui");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("rt45");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__("nZwT");

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__("Exp3");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__("wy2R");
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: ./reducers/post.js
var reducers_post = __webpack_require__("p+NB");

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// CONCATENATED MODULE: ./components/ImagesZoom/style.js


function _templateObject6() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    padding: 32px; \n    textAlign: center;\n\n    & img {\n        margin: 0 auto;\n        maxHeight: 750px;\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    text-align: center;\n\n    & > div {\n        width: 75px; \n        height: 30px; \n        lineHeight: 30px; \n        borderRadius: 15px; \n        background: #313131; \n        display: inline-block; \n        textAlign: center; \n        color: white; \n        fontSize: 15px;\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    position: absolute; \n    right: 0; \n    top: 0;\n    padding: 15px;\n    lineHeight: 14px; \n    cursor: pointer;  \n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    height: calc(100% - 44px);\n    background: #090909;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    height: 44px; \n    background: white; \n    position: relative; \n    padding: 0; \n    textAlign: center;\n\n    & h1 {\n        margin: 0;\n        fontSize: 17px;\n        color: #333; \n        lineHeight: 44px;  \n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n    position: fixed; \n    zIndex: 5000; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Overlay = external_styled_components_default.a.div(_templateObject());
var Header = external_styled_components_default.a.header(_templateObject2());
var SlickWrapper = external_styled_components_default.a.div(_templateObject3());
var CloseBtn = external_styled_components_default()(icons_["CloseOutlined"])(_templateObject4());
var Indicator = external_styled_components_default.a.div(_templateObject5());
var ImgWrapper = external_styled_components_default.a.div(_templateObject6());
// CONCATENATED MODULE: ./components/ImagesZoom/index.js





var ImagesZoom_ImagesZoom = function ImagesZoom(_ref) {
  var images = _ref.images,
      onClose = _ref.onClose;

  var _useState = Object(external_react_["useState"])(0),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      currentSlide = _useState2[0],
      setCurrentSlide = _useState2[1];

  var backURL = 'http://localhost:3067';
  return /*#__PURE__*/external_react_default.a.createElement(Overlay, null, /*#__PURE__*/external_react_default.a.createElement(Header, null, /*#__PURE__*/external_react_default.a.createElement("h1", null, "\uC0C1\uC138 \uC774\uBBF8\uC9C0"), /*#__PURE__*/external_react_default.a.createElement(CloseBtn, {
    onClick: onClose
  })), /*#__PURE__*/external_react_default.a.createElement(SlickWrapper, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement(external_react_slick_default.a, {
    initialSlide: 0,
    afterChange: function afterChange(slide) {
      return setCurrentSlide(slide);
    },
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1
  }, images.map(function (v) {
    return /*#__PURE__*/external_react_default.a.createElement(ImgWrapper, null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(v.src)
    }));
  })), /*#__PURE__*/external_react_default.a.createElement(Indicator, null, /*#__PURE__*/external_react_default.a.createElement("div", null, currentSlide + 1, " / ", images.length)))));
  /* return (
      <div style={{ position: 'fixed', zIndex: 5000, top: 0, left: 0, right: 0, bottom: 0 }}>
          <header style={{ height: 44, background: 'white', position: 'relative', padding: 0, textAlign: 'center'}}>
              <h1 style={{ margin: 0, fontSize: '17px', color: '#333', lineHeight: '44px' }}>상세 이미지</h1>
              <CloseOutlined onClick={onClose} style={{ position: 'absolute', right: 0, top: 0, padding: 15, lineHeight: '14px', cursor: 'pointer' }} />
          </header>
          <div style={{ height: 'calc(100% - 44px)', background: '#090909' }}>
              <div>
                  <Slick
                      initialSlide={0}
                      afterChange={slide => setCurrentSlide(slide)}
                      infinite={false}
                      arrows
                      slidesToShow={1}
                      slidesToScroll={1}
                  >
                      {images.map((v) => {
                          return (
                              <div style={{ padding: 32, textAlign: 'center' }}>
                                  <img src={ `${backURL}/${v.src}` } style={{ margin: '0 auto', maxHeight: 750 }}/>
                              </div>
                          );
                      })}
                  </Slick>
                  <div style={{ textAlign: 'center' }}>
                      <div style={{ width: 75, height: 30, lineHeight: '30px', borderRadius: 15, background: '#313131', display: 'inline-block', textAlign: 'center', color: 'white', fontSize: '15px' }}>
                          {currentSlide + 1} / {images.length}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  ) */
};

/* harmony default export */ var components_ImagesZoom = (ImagesZoom_ImagesZoom);
// CONCATENATED MODULE: ./components/PostImages.js





var PostImages_PostImages = function PostImages(_ref) {
  var images = _ref.images;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      showImagesZoom = _useState2[0],
      setShowImagesZoom = _useState2[1]; // 확대 이미지를 보여줄지 말지 


  var backURL = 'http://localhost:3067';
  var onZoom = Object(external_react_["useCallback"])(function () {
    setShowImagesZoom(true);
  }, []);
  /* 확대 된 이미지 끄는것은 component내에서 하는것이기 때문에, 이 함수를 props로 넘겨줘야 한다. */

  var onClose = Object(external_react_["useCallback"])(function () {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    // 이미지가 1장 일때 
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[0].src),
      onClick: onZoom
    }), showImagesZoom && /*#__PURE__*/external_react_default.a.createElement(components_ImagesZoom, {
      images: images,
      onClose: onClose
    }));
  }

  if (images.length === 2) {
    // 이미지가 2장 일때 
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[0].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[1].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    })), showImagesZoom && /*#__PURE__*/external_react_default.a.createElement(components_ImagesZoom, {
      images: images,
      onClose: onClose
    }));
  }

  if (images.length === 3) {
    // 이미지가 3장 일때 
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[0].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[1].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[2].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    })), showImagesZoom && /*#__PURE__*/external_react_default.a.createElement(components_ImagesZoom, {
      images: images,
      onClose: onClose
    }));
  } else {
    // 이미지가 4장 이상 일때 
    return /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("div", null, /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[0].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[1].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("br", null), /*#__PURE__*/external_react_default.a.createElement("img", {
      src: "".concat(backURL, "/").concat(images[2].src),
      width: "50%",
      height: "50%",
      onClick: onZoom
    }), /*#__PURE__*/external_react_default.a.createElement("div", {
      style: {
        display: 'inline-block',
        width: '50%',
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    }, /*#__PURE__*/external_react_default.a.createElement(icons_["PlusOutlined"], null), /*#__PURE__*/external_react_default.a.createElement("br", null), images.length - 3, "\uAC1C\uC758 \uC0AC\uC9C4 \uB354\uBCF4\uAE30")), showImagesZoom && /*#__PURE__*/external_react_default.a.createElement(components_ImagesZoom, {
      images: images,
      onClose: onClose
    }));
  }
};

/* harmony default export */ var components_PostImages = (PostImages_PostImages);
// CONCATENATED MODULE: ./components/PostCardContent.js



var PostCardContent_PostCardContent = function PostCardContent(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/external_react_default.a.createElement("div", null, postData.split(/(#[^\s]+)/g).map(function (v) {
    if (v.match(/#[^\s]+/)) {
      // 쪼개진 애가 해시태그면 링크로 바꿔주기
      return /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
        href: {
          pathname: '/hashtag',
          query: {
            tag: v.slice(1)
          }
        },
        as: "/hashtag/".concat(v.slice(1)),
        key: v
      }, /*#__PURE__*/external_react_default.a.createElement("a", null, v));
    }

    return v; // 해시태그(#)가 아니라면, 그냥 문자열만 리턴 
  }));
};

/* harmony default export */ var components_PostCardContent = (PostCardContent_PostCardContent);
// CONCATENATED MODULE: ./containers/CommentForm.js






var CommentForm_CommentForm = function CommentForm(_ref) {
  var post = _ref.post;

  var _useState = Object(external_react_["useState"])(''),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      commentText = _useState2[0],
      setCommentText = _useState2[1];

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.post;
  }),
      commentAdded = _useSelector.commentAdded,
      isAddingComment = _useSelector.isAddingComment;

  var _useSelector2 = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector2.me;

  var dispatch = Object(external_react_redux_["useDispatch"])();
  /* 댓글 업로드 */

  var onSubmitComment = Object(external_react_["useCallback"])(function (e) {
    e.preventDefault();

    if (!me) {
      return alert('댓글을 작성하려면, 로그인이 필요합니다.');
    }

    return dispatch({
      type: reducers_post["b" /* ADD_COMMENT_REQUEST */],
      data: {
        postId: post.id,
        content: commentText
      }
    });
  }, [me && me.id, commentText]);
  /* 댓글 작성 완료되면, 댓글 입력창 비워주기 */

  Object(external_react_["useEffect"])(function () {
    setCommentText('');
  }, [commentAdded === true]);
  /* 댓글이 작성되는 중에 */

  var onChangeCommentText = Object(external_react_["useCallback"])(function (e) {
    setCommentText(e.target.value);
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"], {
    onSubmit: onSubmitComment
  }, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Form"].Item, null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Input"].TextArea, {
    rows: 4,
    value: commentText,
    onChange: onChangeCommentText
  })), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    type: "primary",
    htmlType: "submit",
    loading: isAddingComment
  }, "\uC090\uC57D"));
};

/* harmony default export */ var containers_CommentForm = (CommentForm_CommentForm);
// CONCATENATED MODULE: ./components/FollowButton.js



/* props가 자주 달라지는 컴포넌트들은, memo로 감싼다. */

var FollowButton = Object(external_react_["memo"])(function (_ref) {
  var post = _ref.post,
      onUnfollow = _ref.onUnfollow,
      onFollow = _ref.onFollow;

  var _useSelector = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user;
  }),
      me = _useSelector.me;

  return !me || post.User.id === me.id ? null : me.Followings && me.Followings.find(function (v) {
    return v.id === post.User.id;
  }) ? /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: onUnfollow(post.User.id)
  }, "\uC5B8\uD314\uB85C\uC6B0") : /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
    onClick: onFollow(post.User.id)
  }, "\uD314\uB85C\uC6B0");
});
/* harmony default export */ var components_FollowButton = (FollowButton);
// CONCATENATED MODULE: ./containers/PostCard.js



function PostCard_templateObject() {
  var data = Object(taggedTemplateLiteral["a" /* default */])(["\n  margin-bottom: 20px;\n"]);

  PostCard_templateObject = function _templateObject() {
    return data;
  };

  return data;
}














external_moment_default.a.locale('ko'); // moment에 한글 설정 

var CardWrapper = external_styled_components_default.a.div(PostCard_templateObject());
var PostCard = Object(external_react_["memo"])(function (_ref) {
  var post = _ref.post;

  var _useState = Object(external_react_["useState"])(false),
      _useState2 = Object(slicedToArray["a" /* default */])(_useState, 2),
      commentFormOpened = _useState2[0],
      setCommentFormOpened = _useState2[1];

  var myId = Object(external_react_redux_["useSelector"])(function (state) {
    return state.user.me && state.user.me.id;
  });
  var dispatch = Object(external_react_redux_["useDispatch"])();
  var isLiked = myId && post.Likers && post.Likers.find(function (v) {
    return v.id === myId;
  }); // 내가 '좋아요' 했었는지 

  /* onClick 했을때, 댓글창 열고닫기 */

  var onToggleComment = Object(external_react_["useCallback"])(function () {
    //console.log(commentFormOpened);
    setCommentFormOpened(function (prev) {
      return !prev;
    }); // 현재 루프안에서 즉시 바뀌지는 않음. (현재 루프 끝나면 true로 바뀜)
    // 앞,뒤 console.log()로 확인 해보기 
    //console.log(commentFormOpened);

    if (!commentFormOpened) {
      // 닫혀있는 경우에, 댓글 아이콘 눌렀을때(onClick)
      // commentFormOpened === false 이면..
      dispatch({
        type: reducers_post["k" /* LOAD_COMMENTS_REQUEST */],
        data: post.id
      });
    }
  }, [commentFormOpened]);
  /* onClick 했을때, '좋아요' 처리 */

  var onToggleLike = Object(external_react_["useCallback"])(function () {
    if (!myId) {
      return alert('로그인이 필요합니다.'); // 로그인 안된 사용자는 '좋아요' 클릭 불가
    }

    if (isLiked) {
      // 내가 '좋아요' 이미 누른 상태이면   
      dispatch({
        type: reducers_post["G" /* UNLIKE_POST_REQUEST */],
        data: post.id
      });
    } else {
      dispatch({
        type: reducers_post["h" /* LIKE_POST_REQUEST */],
        data: post.id
      });
    }
  }, [myId, post && post.id, isLiked]);
  var onRetweet = Object(external_react_["useCallback"])(function () {
    if (!myId) {
      return alert('로그인이 필요합니다.');
    }

    return dispatch({
      type: reducers_post["D" /* RETWEET_REQUEST */],
      data: post.id
    });
  }, [myId, post.id]);
  /* 팔로우 하기 눌렀을때 */

  var onFollow = Object(external_react_["useCallback"])(function (userId) {
    return function () {
      //console.log(me.id, userId);   // 12, 1
      dispatch({
        type: user["f" /* FOLLOW_USER_REQUEST */],
        data: userId
      });
    };
  }, []);
  /* 언팔로우 하기 눌렀을때 */

  var onUnfollow = Object(external_react_["useCallback"])(function (userId) {
    return function () {
      dispatch({
        type: user["D" /* UNFOLLOW_USER_REQUEST */],
        data: userId
      });
    };
  }, []);
  var onRemovePost = Object(external_react_["useCallback"])(function (postId) {
    return function () {
      dispatch({
        type: reducers_post["A" /* REMOVE_POST_REQUEST */],
        data: postId
      });
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(CardWrapper, null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: post.Images && post.Images[0] && /*#__PURE__*/external_react_default.a.createElement(components_PostImages, {
      images: post.Images
    }),
    actions: [/*#__PURE__*/external_react_default.a.createElement(icons_["RetweetOutlined"], {
      onClick: onRetweet
    }), isLiked ? /*#__PURE__*/external_react_default.a.createElement(icons_["HeartTwoTone"], {
      twoToneColor: "#eb2f96",
      onClick: onToggleLike
    }) : /*#__PURE__*/external_react_default.a.createElement(icons_["HeartOutlined"], {
      onClick: onToggleLike
    }), /*#__PURE__*/external_react_default.a.createElement(icons_["MessageOutlined"], {
      onClick: onToggleComment
    }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Popover"], {
      key: "ellipsis",
      content: /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"].Group, null, myId && post.UserId === myId ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], null, "\uC218\uC815"), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], {
        type: "danger",
        onClick: onRemovePost(post.id)
      }, "\uC0AD\uC81C")) : /*#__PURE__*/external_react_default.a.createElement(external_antd_["Button"], null, "\uC2E0\uACE0"))
    }, /*#__PURE__*/external_react_default.a.createElement(icons_["EllipsisOutlined"], null))],
    title: post.RetweetId ? "".concat(post.User.nickname, "\uB2D8\uC774 \uB9AC\uD2B8\uC717\uD558\uC168\uC2B5\uB2C8\uB2E4.") : null,
    extra: /*#__PURE__*/external_react_default.a.createElement(components_FollowButton, {
      post: post,
      onUnfollow: onUnfollow,
      onFollow: onFollow
    })
  }, post.RetweetId && post.Retweet ? /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"], {
    cover: post.Retweet.Images[0] && /*#__PURE__*/external_react_default.a.createElement(components_PostImages, {
      images: post.Retweet.Images
    })
  }, /*#__PURE__*/external_react_default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, external_moment_default()(post.createdAt).format('YYYY.MM.DD.')), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"].Meta, {
    avatar: /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.Retweet.User.id
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Avatar"], null, post.Retweet.User.nickname[0]))),
    title: post.Retweet.User.nickname,
    description: /*#__PURE__*/external_react_default.a.createElement(components_PostCardContent, {
      postData: post.Retweet.content
    }) // a tag x -> Link

  })) : /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement("span", {
    style: {
      float: 'right'
    }
  }, external_moment_default()(post.createdAt).format('YYYY.MM.DD.')), /*#__PURE__*/external_react_default.a.createElement(external_antd_["Card"].Meta, {
    avatar: /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
      href: {
        pathname: '/user',
        query: {
          id: post.User.id
        }
      }
    }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Avatar"], null, post.User.nickname[0]))),
    title: post.User.nickname,
    description: /*#__PURE__*/external_react_default.a.createElement(components_PostCardContent, {
      postData: post.content
    })
  }))), commentFormOpened && /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(containers_CommentForm, {
    post: post
  }), /*#__PURE__*/external_react_default.a.createElement(external_antd_["List"], {
    header: "".concat(post.Comments ? post.Comments.length : 0, " \uB313\uAE00"),
    itemLayout: "horizontal",
    dataSource: post.Comments || [],
    renderItem: function renderItem(item) {
      return /*#__PURE__*/external_react_default.a.createElement("li", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Comment"], {
        author: item.User.nickname,
        avatar: /*#__PURE__*/external_react_default.a.createElement(link_default.a, {
          href: {
            pathname: '/user',
            query: {
              id: item.User.id
            }
          }
        }, /*#__PURE__*/external_react_default.a.createElement("a", null, /*#__PURE__*/external_react_default.a.createElement(external_antd_["Avatar"], null, item.User.nickname[0]))),
        content: item.content
      }));
    }
  })));
});
/* harmony default export */ var containers_PostCard = __webpack_exports__["a"] = (PostCard);

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "wy2R":
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })

/******/ });