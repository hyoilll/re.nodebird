module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\dlgyd\\OneDrive\\\uBB38\uC11C\\GitHub\\re.nodebird\\front\\pages\\_app.js";



 // 모든 페이지에서 공통적으로 쓰이는 것




const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "NodeBird"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

App.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"].withRedux(App));

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user */ "./reducers/user.js");
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./reducers/post.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // reducer = (이전상태, 액션) => 다음상태
// combineReducers => 쪼개진 reducer들을 합쳐주는 함수

const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_3__["combineReducers"])({
  index: (state = {}, action) => {
    switch (action.type) {
      //     case "CHANGE_NICKNAME":
      //       return {
      //         ...state,
      //         name: action.data,
      //       };
      //   }
      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["HYDRATE"]:
        return _objectSpread(_objectSpread({}, state), action.payload);

      default:
        return state;
    }
  },
  user: _user__WEBPACK_IMPORTED_MODULE_1__["default"],
  post: _post__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer); // action 형태
// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "boogicho",
// };
// const changeNickname = {
//   type: "CHANGE_NICKNAME",
//   data: "pika",
// };
// =>
// < action creator > : Change_nickname의 형태의 action이 많아지면 코드량도 많아지고 중복되는것이 많기 떄문에 함수로 줄인 것
// const changeNickname = (data) => {
//     return {
//       type: "CHANGE_NICKNAME",
//       data: data,
//     };
//   };
// changeNickname("hyoro");
// action 생성 -> actino dispatch
// store.dispatch(changeNickname('hyoro'))

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, generateDummyPost, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE, addPost, addComment, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDummyPost", function() { return generateDummyPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_REQUEST", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_SUCCESS", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_POSTS_FAILURE", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_REQUEST", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_SUCCESS", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_FAILURE", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_REQUEST", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_SUCCESS", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_FAILURE", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_REQUEST", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_SUCCESS", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COMMENT_FAILURE", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addPost", function() { return addPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "faker");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
 // npm i shortid, 항상 새로운 아이디를 생성해줌

 // npm i immer

 // npm i faker

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null
};
const generateDummyPost = number => {
  return Array(number).fill().map(() => {
    return {
      id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
      User: {
        id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
        nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
      },
      content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.paragraph(),
      Images: [{
        src: faker__WEBPACK_IMPORTED_MODULE_2___default.a.image.image()
      }],
      Comments: [{
        User: {
          id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
          nickname: faker__WEBPACK_IMPORTED_MODULE_2___default.a.name.findName()
        },
        content: faker__WEBPACK_IMPORTED_MODULE_2___default.a.lorem.sentence()
      }]
    };
  });
}; // --- 상수화

const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE"; // ---

const addPost = data => ({
  type: ADD_POST_REQUEST,
  data
});
const addComment = data => ({
  type: ADD_COMMENT_REQUEST,
  data
});

const dummyPost = data => {
  return {
    id: data.id,
    content: data.content,
    User: {
      id: 1,
      nickname: "hyoil"
    },
    Images: [],
    Comments: []
  };
};

const dummyComment = data => {
  return {
    id: shortid__WEBPACK_IMPORTED_MODULE_0___default.a.generate(),
    // npm i shortid, 항상 새로운 아이디를 생성해줌
    content: data,
    User: {
      id: 1,
      nickname: "hyoil"
    }
  };
}; // 이전 상태를 액션을 통해 다음 상태로 만들어 내는 함수(불변성은 지키면서)


const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_1___default()(state, draft => {
    switch (action.type) {
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_POSTS_SUCCESS:
        draft.mainPosts = action.data.concat(draft.mainPosts);
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.hasMorePosts = draft.mainPosts.length < 50;
        break;

      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;
      // return {
      //   ...state,
      //   addPostLoading: true,
      //   addPostDone: false,
      //   addPostError: null,
      // };

      case ADD_POST_SUCCESS:
        // draft가 알아서 불변성을 지켜주기 때문에 그냥 삽입하면 됨
        draft.mainPosts.unshift(dummyPost(action.data));
        draft.addPostLoading = false;
        draft.addPostDone = true;
        break;
      // return {
      //   ...state,
      //   mainPosts: [dummyPost(action.data), ...state.mainPosts], // 객체가 삽임되므로 객체를 반환하는 함수를 통해서 data를 넘겨줌
      //   addPostLoading: false,
      //   addPostDone: true,
      //   // const a = [1, 2, 3, 4]
      //   // const b = [5, ...a]
      //   // b => [5, 1, 2, 3, 4]};
      // };

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;
      // return {
      //   ...state,
      //   addPostLoading: false,
      //   addPostError: action.error,
      // };

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;
      //   return {
      //   ...state,
      //   addCommentLoading: true,
      //   addCommentDone: false,
      //   addCommentError: null,
      // };

      case ADD_COMMENT_SUCCESS:
        const post = draft.mainPosts.find(v => v.id === action.data.postId);
        post.Comments.unshift(dummyComment(action.data.content));
        draft.addCommentLoading = false;
        draft.addCommentDone = true;
        break;
      // action : {content: commentText, postId: post.id, userId: id}
      // const postIndex = state.mainPosts.findIndex(
      //   (v) => v.id === action.data.postId
      // );
      // const post = { ...state.mainPosts[postIndex] };
      // post.Comments = [dummyComment(action.data.content), ...post.Comments];
      // const addMainPosts = [...state.mainPosts];
      // addMainPosts[postIndex] = post;
      // return {
      //   ...state,
      //   mainPosts: addMainPosts,
      //   addCommentLoading: false,
      //   addCommentDone: true,
      // };

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;
      //   return {
      //   ...state,
      //   addCommentLoading: false,
      //   addCommentError: action.error,
      // };

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;
      // return {
      //   ...state,
      //   removePostLoading: true,
      //   removePostDone: false,
      //   removePostError: null,
      // };

      case REMOVE_POST_SUCCESS:
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data);
        draft.removePostLoading = false;
        draft.removePostDone = true;
        break;
      // return {
      //   ...state,
      //   mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
      //   removePostLoading: false,
      //   removePostDone: true,
      // };

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
      // return {
      //   ...state,
      //   addPostLoading: false,
      //   addPostError: action.error,
      // };

      default:
        break;
      // return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE, CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_SUCCESS, CHANGE_NICKNAME_FAILURE, FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE, UNFOLLOW_REQUEST, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE, ADD_POST_TO_ME, REMOVE_POST_OF_ME, loginRequestAction, logoutRequestAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_REQUEST", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_SUCCESS", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_IN_FAILURE", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_REQUEST", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_SUCCESS", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOG_OUT_FAILURE", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_REQUEST", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_SUCCESS", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGN_UP_FAILURE", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_REQUEST", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_SUCCESS", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_NICKNAME_FAILURE", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_REQUEST", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_SUCCESS", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOLLOW_FAILURE", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_REQUEST", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_SUCCESS", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNFOLLOW_FAILURE", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_POST_TO_ME", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_POST_OF_ME", function() { return REMOVE_POST_OF_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRequestAction", function() { return loginRequestAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutRequestAction", function() { return logoutRequestAction; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  logInLoading: false,
  // 로그인 시도중인지 확인하는 변수
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  // 로그아웃 시도중인지 확인하는 변수
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  // 회원가입중인지 확인하는 변수
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  // 닉네임 변경 시도중인지 확인하는 변수
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  // follow 시도중인지 확인하는 변수
  followDone: false,
  followError: null,
  unfollowLoading: false,
  // unfollow 시도중인지 확인하는 변수
  unfollowDone: false,
  unfollowError: null,
  me: null,
  signUpData: {},
  loginData: {}
}; // --- 상수화

const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE"; // user reducer의 상태를 바꿀 수 있는 액션

const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME"; // ---

const dummyUser = data => {
  return _objectSpread(_objectSpread({}, data), {}, {
    nickname: "hyoil",
    id: 1,
    Posts: [{
      id: 1
    }],
    Followings: [{
      nickname: "aaa"
    }, {
      nickname: "bbb"
    }, {
      nickname: "ccc"
    }],
    Followers: [{
      nickname: "aaa"
    }, {
      nickname: "bbb"
    }, {
      nickname: "ccc"
    }]
  });
};

const loginRequestAction = data => {
  return {
    type: LOG_IN_REQUEST,
    data
  };
};
const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST
  };
};

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unfollowLoading = true;
        draft.unfollowDone = false;
        draft.unfollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unfollowLoading = false;
        draft.unfollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data);
        break;

      case UNFOLLOW_FAILURE:
        draft.unfollowLoading = false;
        draft.unfollowError = action.error;
        break;

      case LOG_IN_REQUEST:
        // 리듀서의 액션이 실행되면서 saga의 액션도 같이 실행이됨 동시에
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      // return {
      //   // request에서 3개의 변수를 모두 초기화 시켜줌
      //   ...state,
      //   logInLoading: true,
      //   logInDone: false,
      //   logInError: null,
      // };

      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      // return {
      //   // success에서 필요한 변수만 초기화 시켜줌
      //   ...state,
      //   logInLoading: false,
      //   logInDone: true,
      //   me: dummyUser(action.data),
      // };

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;
      // return {
      //   // failure에서 필요한 변수만 초기화 시켜줌
      //   ...state,
      //   logInLoading: false,
      //   logInError: action.error,
      // };

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      // return {
      //   ...state,
      //   logOutLoading: true,
      //   logOutDone: false,
      //   logOutError: null,
      // };

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logInDone = false;
        draft.me = null;
        break;
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutDone: true,
      //   logInDone: false,
      //   me: null,
      // };

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;
      // return {
      //   ...state,
      //   logOutLoading: false,
      //   logOutError: action.error,
      // };

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;
      // return {
      //   ...state,
      //   signUpLoading: true,
      //   signUpDone: false,
      //   signUpError: null,
      // };

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   signUpDone: true,
      // };

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      // return {
      //   ...state,
      //   signUpLoading: false,
      //   signUpError: action.error,
      // };

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: true,
      //   changeNicknameDone: false,
      //   changeNicknameError: null,
      // };

      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameDone: true,
      // };

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      // return {
      //   ...state,
      //   changeNicknameLoading: false,
      //   changeNicknameError: action.error,
      // };

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: [{ id: action.data }, ...state.me.Posts],
      //   },
      // };

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;
      // const postIndex = state.me.Posts.findIndex((v) => v.id === action.data);
      // const posts = [...state.me.Posts];
      // posts.splice(postIndex, 1);
      // return {
      //   ...state,
      //   me: {
      //     ...state.me,
      //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
      //   },
      // };

      default:
        break;
      // return state;
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post */ "./sagas/post.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./sagas/user.js");




function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_post__WEBPACK_IMPORTED_MODULE_2__["default"]), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(_user__WEBPACK_IMPORTED_MODULE_3__["default"])]);
} // all : 매개변수로서 배열을 받고, 배열안의 원소들을 한번에 실행시켜줌
// fork : 비동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다리지 않고 그대로 실행함
// call : 동기 함수를 실행시켜줌 / 서버에서의 결과값을 기다림 await과 같은 효과
// put : dispatch와 같은 역할, 액션을 디스패치해줌
// take : (1회용) 매개변수의 액션이 실행될 때 까지 기다리겠다는 것
//  1. while take : 동기적으로 동작
//  2. takeEvery : 비동기적으로 동작
// takeLatest : 실수로 여러번 발생된 액션을 마지막 액션 1번으로 취급해주는 것
//              3개의 액션을 서버로 요청하면 서버로부터 응답을 1개로 줄여주는 것이지, 요청까지 1개로 줄여주진 않음 => 서버에 3개의 액션 기록이 남음
//              => 서버쪽 검사가 필요함 (이미 등록한 액션이기 때문에 등록되지 않습니다. 와 같은 메세지를 안내함)
//              위의 문제를 해결해준 것이 "throttle" 지정한 시간당 한번밖에 요청을 할 수 없도록 제한을 둠
//  ex) 3번의 액션발생하였을 때 앞의 2번의 액션이 이미 완료된 것이면 적용되고
//      2번의 액션이 완료되지 않고 마지막 액션과 같이 액션이 발생된 것이라면 앞의 2개의 액션은 적용안됨
// throttling / debouncing의 차이
// https://www.zerocho.com/category/JavaScript/post/59a8e9cb15ac0000182794fa

/***/ }),

/***/ "./sagas/post.js":
/*!***********************!*\
  !*** ./sagas/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return postSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! shortid */ "shortid");
/* harmony import */ var shortid__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(shortid__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers/post */ "./reducers/post.js");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");





function addPostAPI(data) {
  return axios.post("/api/addpost", data);
}

function* addPost(action) {
  // 아래의 ADD_POST_SUCCESS, ADD_POST_TO_ME와 같이
  // 다른 액션을 한번에 할 수 없으므로 다중 액션으로
  try {
    // const result = yield call(addPostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    const id = shortid__WEBPACK_IMPORTED_MODULE_1___default.a.generate();
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_SUCCESS"],
      data: {
        id,
        content: action.data
      } // 성공결과가 담겨있음

    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["ADD_POST_TO_ME"],
      data: id
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_FAILURE"],
      data: err.response.data // 실패결과가 담겨있음

    });
  }
}

function removePostAPI(data) {
  return axios.post("/api/removepost", data);
}

function* removePost(action) {
  try {
    // const result = yield call(removePostAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_SUCCESS"],
      data: action.data //post.id

    });
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_3__["REMOVE_POST_OF_ME"],
      data: action.data
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_FAILURE"],
      data: err.response.data // 실패결과가 담겨있음

    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_SUCCESS"],
      data: action.data // { content: commentText, postId: post.id, userId: id }

    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_FAILURE"],
      data: err.response.data // 실패결과가 담겨있음

    });
  }
}

function loadPostsAPI(data) {
  return axios.post(`/api/posts`, data);
}

function* loadPosts(action) {
  try {
    // const result = yield call(loadPostsAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_SUCCESS"],
      data: Object(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["generateDummyPost"])(10)
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_FAILURE"],
      data: err.response.data // 실패결과가 담겨있음

    });
  }
}

function* watchAddPost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_POST_REQUEST"], addPost);
}

function* watchRemovePost() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["REMOVE_POST_REQUEST"], removePost);
}

function* watchAddComment() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_post__WEBPACK_IMPORTED_MODULE_2__["ADD_COMMENT_REQUEST"], addComment);
}

function* watchLoadPosts() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["throttle"])(5000, _reducers_post__WEBPACK_IMPORTED_MODULE_2__["LOAD_POSTS_REQUEST"], loadPosts);
}

function* postSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddPost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchAddComment), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchRemovePost), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLoadPosts)]);
}

/***/ }),

/***/ "./sagas/user.js":
/*!***********************!*\
  !*** ./sagas/user.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userSaga; });
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redux-saga/core/effects */ "@redux-saga/core/effects");
/* harmony import */ var _redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers/user */ "./reducers/user.js");



function logInAPI(data) {
  return axios.post("/api/login", data);
} // action 매개변수로 로그인 정보가 들어옴
// action.type : "~~"
// action.data : data
// loginAPI(action.data) ==> call(logInAPI, action.data)


function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_SUCCESS"],
      data: action.data // 성공결과가 담겨있음

    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_FAILURE"],
      error: err.response.data // 실패결과가 담겨있음

    });
  }
}

function logOutAPI() {
  return axios.post("/api/logout");
}

function* logOut() {
  try {
    // const result = yield call(logOutAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_SUCCESS"],
      data: null // 성공결과가 담겨있음

    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_FAILURE"],
      error: err.response.data // 실패결과가 담겨있음

    });
  }
}

function signUpAPI() {
  return axios.post("/api/signup");
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_SUCCESS"]
    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_FAILURE"],
      error: err.response.data // 실패결과가 담겨있음

    });
  }
}

function followAPI() {
  return axios.post("/api/follow");
}

function* follow(action) {
  try {
    // const result = yield call(followAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_SUCCESS"],
      data: action.data //post.User.id

    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_FAILURE"],
      error: err.response.data // 실패결과가 담겨있음

    });
  }
}

function unfollowAPI() {
  return axios.post("/api/unfollow");
}

function* unfollow(action) {
  try {
    // const result = yield call(infollowAPI);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["delay"])(1000);
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_SUCCESS"],
      data: action.data //post.User.id

    });
  } catch (err) {
    yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["put"])({
      type: _reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_FAILURE"],
      error: err.response.data // 실패결과가 담겨있음

    });
  }
}

function* watchLogin() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_IN_REQUEST"], logIn); // LOG_IN 액션이 실행되면 logIn함수가 실행 , reducer와 saga가 동시에 실행됨
}

function* watchLogOut() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["LOG_OUT_REQUEST"], logOut);
}

function* watchSignUp() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["SIGN_UP_REQUEST"], signUp);
}

function* watchFollow() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["FOLLOW_REQUEST"], follow);
}

function* watchUnfollow() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])(_reducers_user__WEBPACK_IMPORTED_MODULE_1__["UNFOLLOW_REQUEST"], unfollow);
}

function* userSaga() {
  yield Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogin), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchLogOut), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchSignUp), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchFollow), Object(_redux_saga_core_effects__WEBPACK_IMPORTED_MODULE_0__["fork"])(watchUnfollow)]);
}

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers */ "./reducers/index.js");
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sagas */ "./sagas/index.js");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()(); // redux-thunk는 redux의 미들웨어
  // 미들웨어 - redux의 기능을 향상시켜줌
  // redux-thunk - redux가 비동기 액션을 dispatch할 때 도와줌

  const middlewares = [sagaMiddleware, loggerMiddleware]; // DevTools가 있어야 브라우저의 Redux관리 탭에 연결되어 확인할 수 있음
  // 밑에와 같이 개발모드일때만 DevTools를 연결하는 이유는 개발할 때 History를 참고하기 위함이다, 그렇기에 연결해주고,
  // 베포용일때는 연결안해주는 이유가 남겨지는 History로 인해 보안에 위협이 될 수 있기 때문

  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(...middlewares));
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["default"], enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return store;
};

const wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__["createWrapper"])(configureStore, {
  debug: true
});
/* harmony default export */ __webpack_exports__["default"] = (wrapper); // < 리덕스의 원리와 불변성 >
// store : state + reducer
// 중앙저장소(이름:효일, 나이:29)의 데이터를 변경하기 위해서는 action이 필요함.
// action을 dispatch하면 중앙저장소의 데이터가 바뀜
// a컴포넌트에서 중앙저장소의 이름을 유키로 변경하면 a컴포넌트를 포함하여 중앙저장소의 데이터를 참조하고 있는 모든 컴포넌트에서 이름값이 바뀜
// but action의 type:change_name을 자바스크립트가 그냥 알 수는 없기 때문에, reducer를 활용하여 action.type이 change_name일 경우에 어떻게 변경되는지 제시해줌
// 단점 : 데이터를 변경하거나 할 때, action이 점점 늘어남 => reducer도 늘어남
// 이러한 단점이 있음에도 불구하고 redux를 사용하는게, action을 기준으로 과거 history가 추적이 되기 때문에, 버그잡을 때 매우 편함

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@redux-saga/core/effects":
/*!*******************************************!*\
  !*** external "@redux-saga/core/effects" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@redux-saga/core/effects");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "faker":
/*!************************!*\
  !*** external "faker" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("shortid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzIiwid2VicGFjazovLy8uL3JlZHVjZXJzL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2FnYXMvcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zYWdhcy91c2VyLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByZWR1eC1zYWdhL2NvcmUvZWZmZWN0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFrZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbW1lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzaG9ydGlkXCIiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZWxlbWVudFR5cGUiLCJpc1JlcXVpcmVkIiwid3JhcHBlciIsIndpdGhSZWR1eCIsInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwicGF5bG9hZCIsInVzZXIiLCJwb3N0IiwiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaW1hZ2VQYXRocyIsImhhc01vcmVQb3N0cyIsImxvYWRQb3N0c0xvYWRpbmciLCJsb2FkUG9zdHNEb25lIiwibG9hZFBvc3RzRXJyb3IiLCJhZGRQb3N0TG9hZGluZyIsImFkZFBvc3REb25lIiwiYWRkUG9zdEVycm9yIiwicmVtb3ZlUG9zdExvYWRpbmciLCJyZW1vdmVQb3N0RG9uZSIsInJlbW92ZVBvc3RFcnJvciIsImFkZENvbW1lbnRMb2FkaW5nIiwiYWRkQ29tbWVudERvbmUiLCJhZGRDb21tZW50RXJyb3IiLCJnZW5lcmF0ZUR1bW15UG9zdCIsIm51bWJlciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsImlkIiwic2hvcnRJZCIsImdlbmVyYXRlIiwiVXNlciIsIm5pY2tuYW1lIiwiZmFrZXIiLCJuYW1lIiwiZmluZE5hbWUiLCJjb250ZW50IiwibG9yZW0iLCJwYXJhZ3JhcGgiLCJJbWFnZXMiLCJzcmMiLCJpbWFnZSIsIkNvbW1lbnRzIiwic2VudGVuY2UiLCJMT0FEX1BPU1RTX1JFUVVFU1QiLCJMT0FEX1BPU1RTX1NVQ0NFU1MiLCJMT0FEX1BPU1RTX0ZBSUxVUkUiLCJBRERfUE9TVF9SRVFVRVNUIiwiQUREX1BPU1RfU1VDQ0VTUyIsIkFERF9QT1NUX0ZBSUxVUkUiLCJSRU1PVkVfUE9TVF9SRVFVRVNUIiwiUkVNT1ZFX1BPU1RfU1VDQ0VTUyIsIlJFTU9WRV9QT1NUX0ZBSUxVUkUiLCJBRERfQ09NTUVOVF9SRVFVRVNUIiwiQUREX0NPTU1FTlRfU1VDQ0VTUyIsIkFERF9DT01NRU5UX0ZBSUxVUkUiLCJhZGRQb3N0IiwiZGF0YSIsImFkZENvbW1lbnQiLCJkdW1teVBvc3QiLCJkdW1teUNvbW1lbnQiLCJyZWR1Y2VyIiwicHJvZHVjZSIsImRyYWZ0IiwiY29uY2F0IiwibGVuZ3RoIiwiZXJyb3IiLCJ1bnNoaWZ0IiwiZmluZCIsInYiLCJwb3N0SWQiLCJmaWx0ZXIiLCJsb2dJbkxvYWRpbmciLCJsb2dJbkRvbmUiLCJsb2dJbkVycm9yIiwibG9nT3V0TG9hZGluZyIsImxvZ091dERvbmUiLCJsb2dPdXRFcnJvciIsInNpZ25VcExvYWRpbmciLCJzaWduVXBEb25lIiwic2lnblVwRXJyb3IiLCJjaGFuZ2VOaWNrbmFtZUxvYWRpbmciLCJjaGFuZ2VOaWNrbmFtZURvbmUiLCJjaGFuZ2VOaWNrbmFtZUVycm9yIiwiZm9sbG93TG9hZGluZyIsImZvbGxvd0RvbmUiLCJmb2xsb3dFcnJvciIsInVuZm9sbG93TG9hZGluZyIsInVuZm9sbG93RG9uZSIsInVuZm9sbG93RXJyb3IiLCJtZSIsInNpZ25VcERhdGEiLCJsb2dpbkRhdGEiLCJMT0dfSU5fUkVRVUVTVCIsIkxPR19JTl9TVUNDRVNTIiwiTE9HX0lOX0ZBSUxVUkUiLCJMT0dfT1VUX1JFUVVFU1QiLCJMT0dfT1VUX1NVQ0NFU1MiLCJMT0dfT1VUX0ZBSUxVUkUiLCJTSUdOX1VQX1JFUVVFU1QiLCJTSUdOX1VQX1NVQ0NFU1MiLCJTSUdOX1VQX0ZBSUxVUkUiLCJDSEFOR0VfTklDS05BTUVfUkVRVUVTVCIsIkNIQU5HRV9OSUNLTkFNRV9TVUNDRVNTIiwiQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkUiLCJGT0xMT1dfUkVRVUVTVCIsIkZPTExPV19TVUNDRVNTIiwiRk9MTE9XX0ZBSUxVUkUiLCJVTkZPTExPV19SRVFVRVNUIiwiVU5GT0xMT1dfU1VDQ0VTUyIsIlVORk9MTE9XX0ZBSUxVUkUiLCJBRERfUE9TVF9UT19NRSIsIlJFTU9WRV9QT1NUX09GX01FIiwiZHVtbXlVc2VyIiwiUG9zdHMiLCJGb2xsb3dpbmdzIiwiRm9sbG93ZXJzIiwibG9naW5SZXF1ZXN0QWN0aW9uIiwibG9nb3V0UmVxdWVzdEFjdGlvbiIsInB1c2giLCJyb290U2FnYSIsImFsbCIsImZvcmsiLCJwb3N0U2FnYSIsInVzZXJTYWdhIiwiYWRkUG9zdEFQSSIsImF4aW9zIiwiZGVsYXkiLCJzaG9ydGlkIiwicHV0IiwiZXJyIiwicmVzcG9uc2UiLCJyZW1vdmVQb3N0QVBJIiwicmVtb3ZlUG9zdCIsImFkZENvbW1lbnRBUEkiLCJsb2FkUG9zdHNBUEkiLCJsb2FkUG9zdHMiLCJ3YXRjaEFkZFBvc3QiLCJ0YWtlTGF0ZXN0Iiwid2F0Y2hSZW1vdmVQb3N0Iiwid2F0Y2hBZGRDb21tZW50Iiwid2F0Y2hMb2FkUG9zdHMiLCJ0aHJvdHRsZSIsImxvZ0luQVBJIiwibG9nSW4iLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJzaWduVXBBUEkiLCJzaWduVXAiLCJmb2xsb3dBUEkiLCJmb2xsb3ciLCJ1bmZvbGxvd0FQSSIsInVuZm9sbG93Iiwid2F0Y2hMb2dpbiIsIndhdGNoTG9nT3V0Iiwid2F0Y2hTaWduVXAiLCJ3YXRjaEZvbGxvdyIsIndhdGNoVW5mb2xsb3ciLCJsb2dnZXJNaWRkbGV3YXJlIiwiZGlzcGF0Y2giLCJnZXRTdGF0ZSIsIm5leHQiLCJjb25zb2xlIiwibG9nIiwiY29uZmlndXJlU3RvcmUiLCJzYWdhTWlkZGxld2FyZSIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInNhZ2FUYXNrIiwicnVuIiwiY3JlYXRlV3JhcHBlciIsImRlYnVnIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FB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QU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ2hILGlEQUFELEVBQVUyRyxRQUFWLENBQXpCO0FBQ0FJLE9BQUssQ0FBQ0UsUUFBTixHQUFpQlQsY0FBYyxDQUFDVSxHQUFmLENBQW1CdkQsOENBQW5CLENBQWpCO0FBQ0EsU0FBT29ELEtBQVA7QUFDRCxDQWhCRDs7QUFrQkEsTUFBTWpMLE9BQU8sR0FBR3FMLHdFQUFhLENBQUNaLGNBQUQsRUFBaUI7QUFDNUNhLE9BQUs7QUFEdUMsQ0FBakIsQ0FBN0I7QUFJZXRMLHNFQUFmLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLG9GOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hEQSxxRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxvQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5cclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcblxyXG4vLyDrqqjrk6Ag7Y6Y7J207KeA7JeQ7IScIOqzte2GteyggeycvOuhnCDsk7DsnbTripQg6rKDXHJcblxyXG5jb25zdCBBcHAgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIj48L21ldGE+XHJcbiAgICAgICAgPHRpdGxlPk5vZGVCaXJkPC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8Q29tcG9uZW50PjwvQ29tcG9uZW50PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbkFwcC5wcm9wVHlwZXMgPSB7XHJcbiAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEFwcCk7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcblxyXG5pbXBvcnQgdXNlciBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBwb3N0IGZyb20gXCIuL3Bvc3RcIjtcclxuaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG4vLyByZWR1Y2VyID0gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5xcclxuLy8gY29tYmluZVJlZHVjZXJzID0+IOyqvOqwnOynhCByZWR1Y2Vy65Ok7J2EIO2VqeyzkOyjvOuKlCDtlajsiJhcclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGluZGV4OiAoc3RhdGUgPSB7fSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgIC8vICAgICBjYXNlIFwiQ0hBTkdFX05JQ0tOQU1FXCI6XHJcbiAgICAgIC8vICAgICAgIHJldHVybiB7XHJcbiAgICAgIC8vICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgICAgICAgbmFtZTogYWN0aW9uLmRhdGEsXHJcbiAgICAgIC8vICAgICAgIH07XHJcbiAgICAgIC8vICAgfVxyXG4gICAgICBjYXNlIEhZRFJBVEU6XHJcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgIH1cclxuICB9LFxyXG4gIHVzZXIsXHJcbiAgcG9zdCxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuXHJcbi8vIGFjdGlvbiDtmJXtg5xcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSB7XHJcbi8vICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuLy8gICBkYXRhOiBcImJvb2dpY2hvXCIsXHJcbi8vIH07XHJcbi8vIGNvbnN0IGNoYW5nZU5pY2tuYW1lID0ge1xyXG4vLyAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXHJcbi8vICAgZGF0YTogXCJwaWthXCIsXHJcbi8vIH07XHJcblxyXG4vLyA9PlxyXG5cclxuLy8gPCBhY3Rpb24gY3JlYXRvciA+IDogQ2hhbmdlX25pY2tuYW1l7J2YIO2Yle2DnOydmCBhY3Rpb27snbQg66eO7JWE7KeA66m0IOy9lOuTnOufieuPhCDrp47slYTsp4Dqs6Ag7KSR67O165CY64qU6rKD7J20IOunjuq4sCDrloTrrLjsl5Ag7ZWo7IiY66GcIOykhOyduCDqsoNcclxuLy8gY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHtcclxuLy8gICAgICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcclxuLy8gICAgICAgZGF0YTogZGF0YSxcclxuLy8gICAgIH07XHJcbi8vICAgfTtcclxuXHJcbi8vIGNoYW5nZU5pY2tuYW1lKFwiaHlvcm9cIik7XHJcblxyXG4vLyBhY3Rpb24g7IOd7ISxIC0+IGFjdGlubyBkaXNwYXRjaFxyXG4vLyBzdG9yZS5kaXNwYXRjaChjaGFuZ2VOaWNrbmFtZSgnaHlvcm8nKSlcclxuIiwiaW1wb3J0IHNob3J0SWQgZnJvbSBcInNob3J0aWRcIjsgLy8gbnBtIGkgc2hvcnRpZCwg7ZWt7IOBIOyDiOuhnOyatCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSMXHJcbmltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiOyAvLyBucG0gaSBpbW1lclxyXG5pbXBvcnQgZmFrZXIgZnJvbSBcImZha2VyXCI7IC8vIG5wbSBpIGZha2VyXHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5Qb3N0czogW10sXHJcbiAgaW1hZ2VQYXRoczogW10sXHJcbiAgaGFzTW9yZVBvc3RzOiB0cnVlLFxyXG4gIGxvYWRQb3N0c0xvYWRpbmc6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0RvbmU6IGZhbHNlLFxyXG4gIGxvYWRQb3N0c0Vycm9yOiBudWxsLFxyXG4gIGFkZFBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRQb3N0RG9uZTogZmFsc2UsXHJcbiAgYWRkUG9zdEVycm9yOiBudWxsLFxyXG4gIHJlbW92ZVBvc3RMb2FkaW5nOiBmYWxzZSxcclxuICByZW1vdmVQb3N0RG9uZTogZmFsc2UsXHJcbiAgcmVtb3ZlUG9zdEVycm9yOiBudWxsLFxyXG4gIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlRHVtbXlQb3N0ID0gKG51bWJlcikgPT4ge1xyXG4gIHJldHVybiBBcnJheShudW1iZXIpXHJcbiAgICAuZmlsbCgpXHJcbiAgICAubWFwKCgpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpZDogc2hvcnRJZC5nZW5lcmF0ZSgpLFxyXG4gICAgICAgIFVzZXI6IHtcclxuICAgICAgICAgIGlkOiBzaG9ydElkLmdlbmVyYXRlKCksXHJcbiAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDogZmFrZXIubG9yZW0ucGFyYWdyYXBoKCksXHJcbiAgICAgICAgSW1hZ2VzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogZmFrZXIuaW1hZ2UuaW1hZ2UoKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBDb21tZW50czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBVc2VyOiB7XHJcbiAgICAgICAgICAgICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgICAgICBuaWNrbmFtZTogZmFrZXIubmFtZS5maW5kTmFtZSgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiBmYWtlci5sb3JlbS5zZW50ZW5jZSgpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbn07XHJcblxyXG4vLyAtLS0g7IOB7IiY7ZmUXHJcbmV4cG9ydCBjb25zdCBMT0FEX1BPU1RTX1JFUVVFU1QgPSBcIkxPQURfUE9TVFNfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgTE9BRF9QT1NUU19TVUNDRVNTID0gXCJMT0FEX1BPU1RTX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPQURfUE9TVFNfRkFJTFVSRSA9IFwiTE9BRF9QT1NUU19GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfUkVRVUVTVCA9IFwiQUREX1BPU1RfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfU1VDQ0VTUyA9IFwiQUREX1BPU1RfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfRkFJTFVSRSA9IFwiQUREX1BPU1RfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1JFUVVFU1QgPSBcIlJFTU9WRV9QT1NUX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX1NVQ0NFU1MgPSBcIlJFTU9WRV9QT1NUX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9QT1NUX0ZBSUxVUkUgPSBcIlJFTU9WRV9QT1NUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9SRVFVRVNUID0gXCJBRERfQ09NTUVOVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9TVUNDRVNTID0gXCJBRERfQ09NTUVOVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBBRERfQ09NTUVOVF9GQUlMVVJFID0gXCJBRERfQ09NTUVOVF9GQUlMVVJFXCI7XHJcbi8vIC0tLVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZFBvc3QgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfUE9TVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSAoZGF0YSkgPT4gKHtcclxuICB0eXBlOiBBRERfQ09NTUVOVF9SRVFVRVNULFxyXG4gIGRhdGEsXHJcbn0pO1xyXG5cclxuY29uc3QgZHVtbXlQb3N0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IGRhdGEuaWQsXHJcbiAgICBjb250ZW50OiBkYXRhLmNvbnRlbnQsXHJcbiAgICBVc2VyOiB7XHJcbiAgICAgIGlkOiAxLFxyXG4gICAgICBuaWNrbmFtZTogXCJoeW9pbFwiLFxyXG4gICAgfSxcclxuICAgIEltYWdlczogW10sXHJcbiAgICBDb21tZW50czogW10sXHJcbiAgfTtcclxufTtcclxuY29uc3QgZHVtbXlDb21tZW50ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IHNob3J0SWQuZ2VuZXJhdGUoKSwgLy8gbnBtIGkgc2hvcnRpZCwg7ZWt7IOBIOyDiOuhnOyatCDslYTsnbTrlJTrpbwg7IOd7ISx7ZW07KSMXHJcbiAgICBjb250ZW50OiBkYXRhLFxyXG4gICAgVXNlcjoge1xyXG4gICAgICBpZDogMSxcclxuICAgICAgbmlja25hbWU6IFwiaHlvaWxcIixcclxuICAgIH0sXHJcbiAgfTtcclxufTtcclxuXHJcbi8vIOydtOyghCDsg4Htg5zrpbwg7JWh7IWY7J2EIO2Gte2VtCDri6TsnYwg7IOB7YOc66GcIOunjOuTpOyWtCDrgrTripQg7ZWo7IiYKOu2iOuzgOyEseydgCDsp4DtgqTrqbTshJwpXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQubWFpblBvc3RzID0gYWN0aW9uLmRhdGEuY29uY2F0KGRyYWZ0Lm1haW5Qb3N0cyk7XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lmhhc01vcmVQb3N0cyA9IGRyYWZ0Lm1haW5Qb3N0cy5sZW5ndGggPCA1MDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBMT0FEX1BPU1RTX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9hZFBvc3RzTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvYWRQb3N0c0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBBRERfUE9TVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgYWRkUG9zdExvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgYWRkUG9zdERvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RFcnJvcjogbnVsbCxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBBRERfUE9TVF9TVUNDRVNTOlxyXG4gICAgICAgIC8vIGRyYWZ06rCAIOyVjOyVhOyEnCDrtojrs4DshLHsnYQg7KeA7Lyc7KO86riwIOuVjOusuOyXkCDqt7jrg6Ug7IK97J6F7ZWY66m0IOuQqFxyXG4gICAgICAgIGRyYWZ0Lm1haW5Qb3N0cy51bnNoaWZ0KGR1bW15UG9zdChhY3Rpb24uZGF0YSkpO1xyXG4gICAgICAgIGRyYWZ0LmFkZFBvc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIG1haW5Qb3N0czogW2R1bW15UG9zdChhY3Rpb24uZGF0YSksIC4uLnN0YXRlLm1haW5Qb3N0c10sIC8vIOqwneyytOqwgCDsgr3snoTrkJjrr4DroZwg6rCd7LK066W8IOuwmO2ZmO2VmOuKlCDtlajsiJjrpbwg7Ya17ZW07IScIGRhdGHrpbwg64SY6rKo7KSMXHJcbiAgICAgIC8vICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZFBvc3REb25lOiB0cnVlLFxyXG4gICAgICAvLyAgIC8vIGNvbnN0IGEgPSBbMSwgMiwgMywgNF1cclxuICAgICAgLy8gICAvLyBjb25zdCBiID0gWzUsIC4uLmFdXHJcbiAgICAgIC8vICAgLy8gYiA9PiBbNSwgMSwgMiwgMywgNF19O1xyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIEFERF9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuYWRkUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5hZGRQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgICAgY2FzZSBBRERfQ09NTUVOVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vICAgcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogdHJ1ZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RG9uZTogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudEVycm9yOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIEFERF9DT01NRU5UX1NVQ0NFU1M6XHJcbiAgICAgICAgY29uc3QgcG9zdCA9IGRyYWZ0Lm1haW5Qb3N0cy5maW5kKCh2KSA9PiB2LmlkID09PSBhY3Rpb24uZGF0YS5wb3N0SWQpO1xyXG4gICAgICAgIHBvc3QuQ29tbWVudHMudW5zaGlmdChkdW1teUNvbW1lbnQoYWN0aW9uLmRhdGEuY29udGVudCkpO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYWRkQ29tbWVudERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBhY3Rpb24gOiB7Y29udGVudDogY29tbWVudFRleHQsIHBvc3RJZDogcG9zdC5pZCwgdXNlcklkOiBpZH1cclxuICAgICAgLy8gY29uc3QgcG9zdEluZGV4ID0gc3RhdGUubWFpblBvc3RzLmZpbmRJbmRleChcclxuICAgICAgLy8gICAodikgPT4gdi5pZCA9PT0gYWN0aW9uLmRhdGEucG9zdElkXHJcbiAgICAgIC8vICk7XHJcbiAgICAgIC8vIGNvbnN0IHBvc3QgPSB7IC4uLnN0YXRlLm1haW5Qb3N0c1twb3N0SW5kZXhdIH07XHJcbiAgICAgIC8vIHBvc3QuQ29tbWVudHMgPSBbZHVtbXlDb21tZW50KGFjdGlvbi5kYXRhLmNvbnRlbnQpLCAuLi5wb3N0LkNvbW1lbnRzXTtcclxuICAgICAgLy8gY29uc3QgYWRkTWFpblBvc3RzID0gWy4uLnN0YXRlLm1haW5Qb3N0c107XHJcbiAgICAgIC8vIGFkZE1haW5Qb3N0c1twb3N0SW5kZXhdID0gcG9zdDtcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtYWluUG9zdHM6IGFkZE1haW5Qb3N0cyxcclxuICAgICAgLy8gICBhZGRDb21tZW50TG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgYWRkQ29tbWVudERvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgQUREX0NPTU1FTlRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5hZGRDb21tZW50TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmFkZENvbW1lbnRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gICByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGFkZENvbW1lbnRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBhZGRDb21tZW50RXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIHJlbW92ZVBvc3RMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAvLyAgIHJlbW92ZVBvc3REb25lOiBmYWxzZSxcclxuICAgICAgLy8gICByZW1vdmVQb3N0RXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgUkVNT1ZFX1BPU1RfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5tYWluUG9zdHMgPSBkcmFmdC5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSk7XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbWFpblBvc3RzOiBzdGF0ZS5tYWluUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgcmVtb3ZlUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIHJlbW92ZVBvc3REb25lOiB0cnVlLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIFJFTU9WRV9QT1NUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQucmVtb3ZlUG9zdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5yZW1vdmVQb3N0RXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgYWRkUG9zdExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGFkZFBvc3RFcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZWR1Y2VyO1xyXG4iLCJpbXBvcnQgcHJvZHVjZSBmcm9tIFwiaW1tZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbG9nSW5Mb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47J24IOyLnOuPhOykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICBsb2dJbkVycm9yOiBudWxsLFxyXG5cclxuICBsb2dPdXRMb2FkaW5nOiBmYWxzZSwgLy8g66Gc6re47JWE7JuDIOyLnOuPhOykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgbG9nT3V0RG9uZTogZmFsc2UsXHJcbiAgbG9nT3V0RXJyb3I6IG51bGwsXHJcblxyXG4gIHNpZ25VcExvYWRpbmc6IGZhbHNlLCAvLyDtmozsm5DqsIDsnoXspJHsnbjsp4Ag7ZmV7J247ZWY64qUIOuzgOyImFxyXG4gIHNpZ25VcERvbmU6IGZhbHNlLFxyXG4gIHNpZ25VcEVycm9yOiBudWxsLFxyXG5cclxuICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLCAvLyDri4nrhKTsnoQg67OA6rK9IOyLnOuPhOykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG5cclxuICBmb2xsb3dMb2FkaW5nOiBmYWxzZSwgLy8gZm9sbG93IOyLnOuPhOykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgZm9sbG93RG9uZTogZmFsc2UsXHJcbiAgZm9sbG93RXJyb3I6IG51bGwsXHJcblxyXG4gIHVuZm9sbG93TG9hZGluZzogZmFsc2UsIC8vIHVuZm9sbG93IOyLnOuPhOykkeyduOyngCDtmZXsnbjtlZjripQg67OA7IiYXHJcbiAgdW5mb2xsb3dEb25lOiBmYWxzZSxcclxuICB1bmZvbGxvd0Vycm9yOiBudWxsLFxyXG5cclxuICBtZTogbnVsbCxcclxuICBzaWduVXBEYXRhOiB7fSxcclxuICBsb2dpbkRhdGE6IHt9LFxyXG59O1xyXG5cclxuLy8gLS0tIOyDgeyImO2ZlFxyXG5leHBvcnQgY29uc3QgTE9HX0lOX1JFUVVFU1QgPSBcIkxPR19JTl9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfSU5fU1VDQ0VTUyA9IFwiTE9HX0lOX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IExPR19JTl9GQUlMVVJFID0gXCJMT0dfSU5fRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IExPR19PVVRfUkVRVUVTVCA9IFwiTE9HX09VVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBMT0dfT1VUX1NVQ0NFU1MgPSBcIkxPR19PVVRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgTE9HX09VVF9GQUlMVVJFID0gXCJMT0dfT1VUX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTSUdOX1VQX1JFUVVFU1QgPSBcIlNJR05fVVBfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgU0lHTl9VUF9TVUNDRVNTID0gXCJTSUdOX1VQX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IFNJR05fVVBfRkFJTFVSRSA9IFwiU0lHTl9VUF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1QgPSBcIkNIQU5HRV9OSUNLTkFNRV9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBDSEFOR0VfTklDS05BTUVfU1VDQ0VTUyA9IFwiQ0hBTkdFX05JQ0tOQU1FX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IENIQU5HRV9OSUNLTkFNRV9GQUlMVVJFID0gXCJDSEFOR0VfTklDS05BTUVfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZPTExPV19SRVFVRVNUID0gXCJGT0xMT1dfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgRk9MTE9XX1NVQ0NFU1MgPSBcIkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBGT0xMT1dfRkFJTFVSRSA9IFwiRk9MTE9XX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19SRVFVRVNUID0gXCJVTkZPTExPV19SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19TVUNDRVNTID0gXCJVTkZPTExPV19TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBVTkZPTExPV19GQUlMVVJFID0gXCJVTkZPTExPV19GQUlMVVJFXCI7XHJcblxyXG4vLyB1c2VyIHJlZHVjZXLsnZgg7IOB7YOc66W8IOuwlOq/gCDsiJgg7J6I64qUIOyVoeyFmFxyXG5leHBvcnQgY29uc3QgQUREX1BPU1RfVE9fTUUgPSBcIkFERF9QT1NUX1RPX01FXCI7XHJcbmV4cG9ydCBjb25zdCBSRU1PVkVfUE9TVF9PRl9NRSA9IFwiUkVNT1ZFX1BPU1RfT0ZfTUVcIjtcclxuLy8gLS0tXHJcblxyXG5jb25zdCBkdW1teVVzZXIgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICAuLi5kYXRhLFxyXG4gICAgbmlja25hbWU6IFwiaHlvaWxcIixcclxuICAgIGlkOiAxLFxyXG4gICAgUG9zdHM6IFt7IGlkOiAxIH1dLFxyXG4gICAgRm9sbG93aW5nczogW3sgbmlja25hbWU6IFwiYWFhXCIgfSwgeyBuaWNrbmFtZTogXCJiYmJcIiB9LCB7IG5pY2tuYW1lOiBcImNjY1wiIH1dLFxyXG4gICAgRm9sbG93ZXJzOiBbeyBuaWNrbmFtZTogXCJhYWFcIiB9LCB7IG5pY2tuYW1lOiBcImJiYlwiIH0sIHsgbmlja25hbWU6IFwiY2NjXCIgfV0sXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RBY3Rpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfSU5fUkVRVUVTVCxcclxuICAgIGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsb2dvdXRSZXF1ZXN0QWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICB0eXBlOiBMT0dfT1VUX1JFUVVFU1QsXHJcbiAgfTtcclxufTtcclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHJldHVybiBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBGT0xMT1dfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5mb2xsb3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZm9sbG93RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZPTExPV19TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5mb2xsb3dEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5tZS5Gb2xsb3dpbmdzLnB1c2goeyBpZDogYWN0aW9uLmRhdGEgfSk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRk9MTE9XX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuZm9sbG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBVTkZPTExPV19SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LnVuZm9sbG93TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQudW5mb2xsb3dFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0RvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm1lLkZvbGxvd2luZ3MgPSBkcmFmdC5tZS5Gb2xsb3dpbmdzLmZpbHRlcihcclxuICAgICAgICAgICh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgVU5GT0xMT1dfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC51bmZvbGxvd0Vycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBMT0dfSU5fUkVRVUVTVDogLy8g66as65OA7ISc7J2YIOyVoeyFmOydtCDsi6TtlonrkJjrqbTshJwgc2FnYeydmCDslaHshZjrj4Qg6rCZ7J20IOyLpO2WieydtOuQqCDrj5nsi5zsl5BcclxuICAgICAgICBkcmFmdC5sb2dJbkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC8vIHJlcXVlc3Tsl5DshJwgM+qwnOydmCDrs4DsiJjrpbwg66qo65GQIOy0iOq4sO2ZlCDsi5zsvJzspIxcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBsb2dJbkxvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgLy8gICBsb2dJbkVycm9yOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIExPR19JTl9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmxvZ0luTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ0luRG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubWUgPSBkdW1teVVzZXIoYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC8vIHN1Y2Nlc3Psl5DshJwg7ZWE7JqU7ZWcIOuzgOyImOunjCDstIjquLDtmZQg7Iuc7Lyc7KSMXHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgbG9nSW5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBsb2dJbkRvbmU6IHRydWUsXHJcbiAgICAgIC8vICAgbWU6IGR1bW15VXNlcihhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgTE9HX0lOX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nSW5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nSW5FcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAvLyBmYWlsdXJl7JeQ7IScIO2VhOyalO2VnCDrs4DsiJjrp4wg7LSI6riw7ZmUIOyLnOy8nOykjFxyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ0luTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgbG9nSW5FcnJvcjogYWN0aW9uLmVycm9yLFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgICAgY2FzZSBMT0dfT1VUX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBsb2dPdXRMb2FkaW5nOiB0cnVlLFxyXG4gICAgICAvLyAgIGxvZ091dERvbmU6IGZhbHNlLFxyXG4gICAgICAvLyAgIGxvZ091dEVycm9yOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIExPR19PVVRfU1VDQ0VTUzpcclxuICAgICAgICBkcmFmdC5sb2dPdXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubG9nT3V0RG9uZSA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQubG9nSW5Eb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQubWUgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGxvZ091dERvbmU6IHRydWUsXHJcbiAgICAgIC8vICAgbG9nSW5Eb25lOiBmYWxzZSxcclxuICAgICAgLy8gICBtZTogbnVsbCxcclxuICAgICAgLy8gfTtcclxuICAgICAgY2FzZSBMT0dfT1VUX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQubG9nT3V0TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmxvZ091dEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIGxvZ091dExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGxvZ091dEVycm9yOiBhY3Rpb24uZXJyb3IsXHJcbiAgICAgIC8vIH07XHJcblxyXG4gICAgICBjYXNlIFNJR05fVVBfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyByZXR1cm4ge1xyXG4gICAgICAvLyAgIC4uLnN0YXRlLFxyXG4gICAgICAvLyAgIHNpZ25VcExvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgc2lnblVwRG9uZTogZmFsc2UsXHJcbiAgICAgIC8vICAgc2lnblVwRXJyb3I6IG51bGwsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgU0lHTl9VUF9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LnNpZ25VcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5zaWduVXBEb25lID0gdHJ1ZTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBzaWduVXBMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBzaWduVXBEb25lOiB0cnVlLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIFNJR05fVVBfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5zaWduVXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuc2lnblVwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgc2lnblVwTG9hZGluZzogZmFsc2UsXHJcbiAgICAgIC8vICAgc2lnblVwRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZURvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5jaGFuZ2VOaWNrbmFtZUVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IHRydWUsXHJcbiAgICAgIC8vICAgY2hhbmdlTmlja25hbWVEb25lOiBmYWxzZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZUVycm9yOiBudWxsLFxyXG4gICAgICAvLyB9O1xyXG4gICAgICBjYXNlIENIQU5HRV9OSUNLTkFNRV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmNoYW5nZU5pY2tuYW1lRG9uZSA9IHRydWU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIC8vIHJldHVybiB7XHJcbiAgICAgIC8vICAgLi4uc3RhdGUsXHJcbiAgICAgIC8vICAgY2hhbmdlTmlja25hbWVMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZURvbmU6IHRydWUsXHJcbiAgICAgIC8vIH07XHJcbiAgICAgIGNhc2UgQ0hBTkdFX05JQ0tOQU1FX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuY2hhbmdlTmlja25hbWVFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBjaGFuZ2VOaWNrbmFtZUxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAvLyAgIGNoYW5nZU5pY2tuYW1lRXJyb3I6IGFjdGlvbi5lcnJvcixcclxuICAgICAgLy8gfTtcclxuXHJcbiAgICAgIGNhc2UgQUREX1BPU1RfVE9fTUU6XHJcbiAgICAgICAgZHJhZnQubWUuUG9zdHMudW5zaGlmdCh7IGlkOiBhY3Rpb24uZGF0YSB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogW3sgaWQ6IGFjdGlvbi5kYXRhIH0sIC4uLnN0YXRlLm1lLlBvc3RzXSxcclxuICAgICAgLy8gICB9LFxyXG4gICAgICAvLyB9O1xyXG5cclxuICAgICAgY2FzZSBSRU1PVkVfUE9TVF9PRl9NRTpcclxuICAgICAgICBkcmFmdC5tZS5Qb3N0cyA9IGRyYWZ0Lm1lLlBvc3RzLmZpbHRlcigodikgPT4gdi5pZCAhPT0gYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICAvLyBjb25zdCBwb3N0SW5kZXggPSBzdGF0ZS5tZS5Qb3N0cy5maW5kSW5kZXgoKHYpID0+IHYuaWQgPT09IGFjdGlvbi5kYXRhKTtcclxuICAgICAgLy8gY29uc3QgcG9zdHMgPSBbLi4uc3RhdGUubWUuUG9zdHNdO1xyXG4gICAgICAvLyBwb3N0cy5zcGxpY2UocG9zdEluZGV4LCAxKTtcclxuICAgICAgLy8gcmV0dXJuIHtcclxuICAgICAgLy8gICAuLi5zdGF0ZSxcclxuICAgICAgLy8gICBtZToge1xyXG4gICAgICAvLyAgICAgLi4uc3RhdGUubWUsXHJcbiAgICAgIC8vICAgICBQb3N0czogc3RhdGUubWUuUG9zdHMuZmlsdGVyKCh2KSA9PiB2LmlkICE9PSBhY3Rpb24uZGF0YSksXHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gfTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgICAgLy8gcmV0dXJuIHN0YXRlO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgYWxsLCBmb3JrIH0gZnJvbSBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5pbXBvcnQgcG9zdFNhZ2EgZnJvbSBcIi4vcG9zdFwiO1xyXG5pbXBvcnQgdXNlclNhZ2EgZnJvbSBcIi4vdXNlclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIHJvb3RTYWdhKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayhwb3N0U2FnYSksIGZvcmsodXNlclNhZ2EpXSk7XHJcbn1cclxuXHJcbi8vIGFsbCA6IOunpOqwnOuzgOyImOuhnOyEnCDrsLDsl7TsnYQg67Cb6rOgLCDrsLDsl7TslYjsnZgg7JuQ7IaM65Ok7J2EIO2VnOuyiOyXkCDsi6Ttlonsi5zsvJzspIxcclxuLy8gZm9yayA6IOu5hOuPmeq4sCDtlajsiJjrpbwg7Iuk7ZaJ7Iuc7Lyc7KSMIC8g7ISc67KE7JeQ7ISc7J2YIOqysOqzvOqwkuydhCDquLDri6Trpqzsp4Ag7JWK6rOgIOq3uOuMgOuhnCDsi6TtlontlahcclxuLy8gY2FsbCA6IOuPmeq4sCDtlajsiJjrpbwg7Iuk7ZaJ7Iuc7Lyc7KSMIC8g7ISc67KE7JeQ7ISc7J2YIOqysOqzvOqwkuydhCDquLDri6TrprwgYXdhaXTqs7wg6rCZ7J2AIO2aqOqzvFxyXG4vLyBwdXQgOiBkaXNwYXRjaOyZgCDqsJnsnYAg7Jet7ZWgLCDslaHshZjsnYQg65SU7Iqk7Yyo7LmY7ZW07KSMXHJcbi8vIHRha2UgOiAoMe2ajOyaqSkg66ek6rCc67OA7IiY7J2YIOyVoeyFmOydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg6rKDXHJcbi8vICAxLiB3aGlsZSB0YWtlIDog64+Z6riw7KCB7Jy866GcIOuPmeyekVxyXG4vLyAgMi4gdGFrZUV2ZXJ5IDog67mE64+Z6riw7KCB7Jy866GcIOuPmeyekVxyXG4vLyB0YWtlTGF0ZXN0IDog7Iuk7IiY66GcIOyXrOufrOuyiCDrsJzsg53rkJwg7JWh7IWY7J2EIOuniOyngOuniSDslaHshZggMeuyiOycvOuhnCDst6jquIntlbTso7zripQg6rKDXHJcbi8vICAgICAgICAgICAgICAz6rCc7J2YIOyVoeyFmOydhCDshJzrsoTroZwg7JqU7LKt7ZWY66m0IOyEnOuyhOuhnOu2gO2EsCDsnZHri7XsnYQgMeqwnOuhnCDspITsl6zso7zripQg6rKD7J207KeALCDsmpTssq3quYzsp4AgMeqwnOuhnCDspITsl6zso7zsp4Qg7JWK7J2MID0+IOyEnOuyhOyXkCAz6rCc7J2YIOyVoeyFmCDquLDroZ3snbQg64Ko7J2MXHJcbi8vICAgICAgICAgICAgICA9PiDshJzrsoTsqr0g6rKA7IKs6rCAIO2VhOyalO2VqCAo7J2066+4IOuTseuhne2VnCDslaHshZjsnbTquLAg65WM66y47JeQIOuTseuhneuQmOyngCDslYrsirXri4jri6QuIOyZgCDqsJnsnYAg66mU7IS47KeA66W8IOyViOuCtO2VqClcclxuLy8gICAgICAgICAgICAgIOychOydmCDrrLjsoJzrpbwg7ZW06rKw7ZW07KSAIOqyg+ydtCBcInRocm90dGxlXCIg7KeA7KCV7ZWcIOyLnOqwhOuLuSDtlZzrsojrsJbsl5Ag7JqU7LKt7J2EIO2VoCDsiJgg7JeG64+E66GdIOygnO2VnOydhCDrkaBcclxuLy8gIGV4KSAz67KI7J2YIOyVoeyFmOuwnOyDne2VmOyYgOydhCDrlYwg7JWe7J2YIDLrsojsnZgg7JWh7IWY7J20IOydtOuvuCDsmYTro4zrkJwg6rKD7J2066m0IOyggeyaqeuQmOqzoFxyXG4vLyAgICAgIDLrsojsnZgg7JWh7IWY7J20IOyZhOujjOuQmOyngCDslYrqs6Ag66eI7KeA66eJIOyVoeyFmOqzvCDqsJnsnbQg7JWh7IWY7J20IOuwnOyDneuQnCDqsoPsnbTrnbzrqbQg7JWe7J2YIDLqsJzsnZgg7JWh7IWY7J2AIOyggeyaqeyViOuQqFxyXG4vLyB0aHJvdHRsaW5nIC8gZGVib3VuY2luZ+ydmCDssKjsnbRcclxuLy8gaHR0cHM6Ly93d3cuemVyb2Noby5jb20vY2F0ZWdvcnkvSmF2YVNjcmlwdC9wb3N0LzU5YThlOWNiMTVhYzAwMDAxODI3OTRmYVxyXG4iLCJpbXBvcnQge1xyXG4gIGFsbCxcclxuICBkZWxheSxcclxuICBmb3JrLFxyXG4gIHB1dCxcclxuICB0YWtlTGF0ZXN0LFxyXG4gIHRocm90dGxlLFxyXG59IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IHNob3J0aWQgZnJvbSBcInNob3J0aWRcIjtcclxuaW1wb3J0IHtcclxuICBBRERfQ09NTUVOVF9GQUlMVVJFLFxyXG4gIEFERF9DT01NRU5UX1JFUVVFU1QsXHJcbiAgQUREX0NPTU1FTlRfU1VDQ0VTUyxcclxuICBBRERfUE9TVF9GQUlMVVJFLFxyXG4gIEFERF9QT1NUX1JFUVVFU1QsXHJcbiAgQUREX1BPU1RfU1VDQ0VTUyxcclxuICBnZW5lcmF0ZUR1bW15UG9zdCxcclxuICBMT0FEX1BPU1RTX0ZBSUxVUkUsXHJcbiAgTE9BRF9QT1NUU19SRVFVRVNULFxyXG4gIExPQURfUE9TVFNfU1VDQ0VTUyxcclxuICBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gIFJFTU9WRV9QT1NUX1JFUVVFU1QsXHJcbiAgUkVNT1ZFX1BPU1RfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvcG9zdFwiO1xyXG5pbXBvcnQgeyBBRERfUE9TVF9UT19NRSwgUkVNT1ZFX1BPU1RfT0ZfTUUgfSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gYWRkUG9zdEFQSShkYXRhKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL2FkZHBvc3RcIiwgZGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiBhZGRQb3N0KGFjdGlvbikge1xyXG4gIC8vIOyVhOuemOydmCBBRERfUE9TVF9TVUNDRVNTLCBBRERfUE9TVF9UT19NReyZgCDqsJnsnbRcclxuICAvLyDri6Trpbgg7JWh7IWY7J2EIO2VnOuyiOyXkCDtlaAg7IiYIOyXhuycvOuvgOuhnCDri6TspJEg7JWh7IWY7Jy866GcXHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICBjb25zdCBpZCA9IHNob3J0aWQuZ2VuZXJhdGUoKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBjb250ZW50OiBhY3Rpb24uZGF0YSxcclxuICAgICAgfSwgLy8g7ISx6rO16rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfUE9TVF9UT19NRSxcclxuICAgICAgZGF0YTogaWQsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEFERF9QT1NUX0ZBSUxVUkUsXHJcbiAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLCAvLyDsi6TtjKjqsrDqs7zqsIAg64u06rKo7J6I7J2MXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVBvc3RBUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9yZW1vdmVwb3N0XCIsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogcmVtb3ZlUG9zdChhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChyZW1vdmVQb3N0QVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFJFTU9WRV9QT1NUX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLCAvL3Bvc3QuaWRcclxuICAgIH0pO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogUkVNT1ZFX1BPU1RfT0ZfTUUsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBSRU1PVkVfUE9TVF9GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8g7Iuk7Yyo6rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDb21tZW50QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0LyR7ZGF0YS5wb3N0SWR9L2NvbW1lbnRgLCBkYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIGFkZENvbW1lbnQoYWN0aW9uKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkQ29tbWVudEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBBRERfQ09NTUVOVF9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSwgLy8geyBjb250ZW50OiBjb21tZW50VGV4dCwgcG9zdElkOiBwb3N0LmlkLCB1c2VySWQ6IGlkIH1cclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQUREX0NPTU1FTlRfRkFJTFVSRSxcclxuICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsIC8vIOyLpO2MqOqysOqzvOqwgCDri7TqsqjsnojsnYxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBvc3RzQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChgL2FwaS9wb3N0c2AsIGRhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9hZFBvc3RzKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvYWRQb3N0c0FQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0FEX1BPU1RTX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGdlbmVyYXRlRHVtbXlQb3N0KDEwKSxcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogTE9BRF9QT1NUU19GQUlMVVJFLFxyXG4gICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8g7Iuk7Yyo6rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hBZGRQb3N0KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQUREX1BPU1RfUkVRVUVTVCwgYWRkUG9zdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFJlbW92ZVBvc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChSRU1PVkVfUE9TVF9SRVFVRVNULCByZW1vdmVQb3N0KTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoQWRkQ29tbWVudCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KEFERF9DT01NRU5UX1JFUVVFU1QsIGFkZENvbW1lbnQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2FkUG9zdHMoKSB7XHJcbiAgeWllbGQgdGhyb3R0bGUoNTAwMCwgTE9BRF9QT1NUU19SRVFVRVNULCBsb2FkUG9zdHMpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcG9zdFNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hBZGRDb21tZW50KSxcclxuICAgIGZvcmsod2F0Y2hSZW1vdmVQb3N0KSxcclxuICAgIGZvcmsod2F0Y2hMb2FkUG9zdHMpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGFsbCwgZGVsYXksIGZvcmssIHB1dCwgdGFrZUxhdGVzdCB9IGZyb20gXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIjtcclxuaW1wb3J0IHtcclxuICBGT0xMT1dfRkFJTFVSRSxcclxuICBGT0xMT1dfUkVRVUVTVCxcclxuICBGT0xMT1dfU1VDQ0VTUyxcclxuICBMT0dfSU5fRkFJTFVSRSxcclxuICBMT0dfSU5fUkVRVUVTVCxcclxuICBMT0dfSU5fU1VDQ0VTUyxcclxuICBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgTE9HX09VVF9SRVFVRVNULFxyXG4gIExPR19PVVRfU1VDQ0VTUyxcclxuICBTSUdOX1VQX0ZBSUxVUkUsXHJcbiAgU0lHTl9VUF9SRVFVRVNULFxyXG4gIFNJR05fVVBfU1VDQ0VTUyxcclxuICBVTkZPTExPV19GQUlMVVJFLFxyXG4gIFVORk9MTE9XX1JFUVVFU1QsXHJcbiAgVU5GT0xMT1dfU1VDQ0VTUyxcclxufSBmcm9tIFwiLi4vcmVkdWNlcnMvdXNlclwiO1xyXG5cclxuZnVuY3Rpb24gbG9nSW5BUEkoZGF0YSkge1xyXG4gIHJldHVybiBheGlvcy5wb3N0KFwiL2FwaS9sb2dpblwiLCBkYXRhKTtcclxufVxyXG5cclxuLy8gYWN0aW9uIOunpOqwnOuzgOyImOuhnCDroZzqt7jsnbgg7KCV67O06rCAIOuTpOyWtOyYtFxyXG4vLyBhY3Rpb24udHlwZSA6IFwifn5cIlxyXG4vLyBhY3Rpb24uZGF0YSA6IGRhdGFcclxuLy8gbG9naW5BUEkoYWN0aW9uLmRhdGEpID09PiBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSlcclxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ0luQVBJLCBhY3Rpb24uZGF0YSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19JTl9TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSwgLy8g7ISx6rO16rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfSU5fRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLCAvLyDsi6TtjKjqsrDqs7zqsIAg64u06rKo7J6I7J2MXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvZ091dEFQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvbG9nb3V0XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogbG9nT3V0KCkge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGxvZ091dEFQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IExPR19PVVRfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogbnVsbCwgLy8g7ISx6rO16rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBMT0dfT1VUX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8g7Iuk7Yyo6rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaWduVXBBUEkoKSB7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoXCIvYXBpL3NpZ251cFwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHNpZ25VcCgpIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChzaWduVXBBUEkpO1xyXG4gICAgeWllbGQgZGVsYXkoMTAwMCk7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTSUdOX1VQX1NVQ0NFU1MsXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNJR05fVVBfRkFJTFVSRSxcclxuICAgICAgZXJyb3I6IGVyci5yZXNwb25zZS5kYXRhLCAvLyDsi6TtjKjqsrDqs7zqsIAg64u06rKo7J6I7J2MXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvZm9sbG93XCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiogZm9sbG93KGFjdGlvbikge1xyXG4gIHRyeSB7XHJcbiAgICAvLyBjb25zdCByZXN1bHQgPSB5aWVsZCBjYWxsKGZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEZPTExPV19TVUNDRVNTLFxyXG4gICAgICBkYXRhOiBhY3Rpb24uZGF0YSwgLy9wb3N0LlVzZXIuaWRcclxuICAgIH0pO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRk9MTE9XX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIucmVzcG9uc2UuZGF0YSwgLy8g7Iuk7Yyo6rKw6rO86rCAIOuLtOqyqOyeiOydjFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiB1bmZvbGxvd0FQSSgpIHtcclxuICByZXR1cm4gYXhpb3MucG9zdChcIi9hcGkvdW5mb2xsb3dcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB1bmZvbGxvdyhhY3Rpb24pIHtcclxuICB0cnkge1xyXG4gICAgLy8gY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChpbmZvbGxvd0FQSSk7XHJcbiAgICB5aWVsZCBkZWxheSgxMDAwKTtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFVORk9MTE9XX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IGFjdGlvbi5kYXRhLCAvL3Bvc3QuVXNlci5pZFxyXG4gICAgfSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBVTkZPTExPV19GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLnJlc3BvbnNlLmRhdGEsIC8vIOyLpO2MqOqysOqzvOqwgCDri7TqsqjsnojsnYxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoTG9naW4oKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfSU5fUkVRVUVTVCwgbG9nSW4pOyAvLyBMT0dfSU4g7JWh7IWY7J20IOyLpO2WieuQmOuptCBsb2dJbu2VqOyImOqwgCDsi6TtlokgLCByZWR1Y2Vy7JmAIHNhZ2HqsIAg64+Z7Iuc7JeQIOyLpO2WieuQqFxyXG59XHJcblxyXG5mdW5jdGlvbiogd2F0Y2hMb2dPdXQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChMT0dfT1VUX1JFUVVFU1QsIGxvZ091dCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFNpZ25VcCgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNJR05fVVBfUkVRVUVTVCwgc2lnblVwKTtcclxufVxyXG5cclxuZnVuY3Rpb24qIHdhdGNoRm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoRk9MTE9XX1JFUVVFU1QsIGZvbGxvdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uKiB3YXRjaFVuZm9sbG93KCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoVU5GT0xMT1dfUkVRVUVTVCwgdW5mb2xsb3cpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogdXNlclNhZ2EoKSB7XHJcbiAgeWllbGQgYWxsKFtcclxuICAgIGZvcmsod2F0Y2hMb2dpbiksXHJcbiAgICBmb3JrKHdhdGNoTG9nT3V0KSxcclxuICAgIGZvcmsod2F0Y2hTaWduVXApLFxyXG4gICAgZm9yayh3YXRjaEZvbGxvdyksXHJcbiAgICBmb3JrKHdhdGNoVW5mb2xsb3cpLFxyXG4gIF0pO1xyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY29tcG9zZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlIGZyb20gXCJyZWR1eC1zYWdhXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IHJvb3RTYWdhIGZyb20gXCIuLi9zYWdhc1wiO1xyXG5cclxuY29uc3QgbG9nZ2VyTWlkZGxld2FyZSA9XHJcbiAgKHsgZGlzcGF0Y2gsIGdldFN0YXRlIH0pID0+XHJcbiAgKG5leHQpID0+XHJcbiAgKGFjdGlvbikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbiAgfTtcclxuXHJcbmNvbnN0IGNvbmZpZ3VyZVN0b3JlID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNhZ2FNaWRkbGV3YXJlID0gY3JlYXRlU2FnYU1pZGRsZXdhcmUoKTtcclxuICAvLyByZWR1eC10aHVua+uKlCByZWR1eOydmCDrr7jrk6Tsm6jslrRcclxuICAvLyDrr7jrk6Tsm6jslrQgLSByZWR1eOydmCDquLDriqXsnYQg7Zal7IOB7Iuc7Lyc7KSMXHJcbiAgLy8gcmVkdXgtdGh1bmsgLSByZWR1eOqwgCDruYTrj5nquLAg7JWh7IWY7J2EIGRpc3BhdGNo7ZWgIOuVjCDrj4TsmYDspIxcclxuICBjb25zdCBtaWRkbGV3YXJlcyA9IFtzYWdhTWlkZGxld2FyZSwgbG9nZ2VyTWlkZGxld2FyZV07XHJcbiAgLy8gRGV2VG9vbHPqsIAg7J6I7Ja07JW8IOu4jOudvOyasOyggOydmCBSZWR1eOq0gOumrCDtg63sl5Ag7Jew6rKw65CY7Ja0IO2ZleyduO2VoCDsiJgg7J6I7J2MXHJcbiAgLy8g67CR7JeQ7JmAIOqwmeydtCDqsJzrsJzrqqjrk5zsnbzrlYzrp4wgRGV2VG9vbHPrpbwg7Jew6rKw7ZWY64qUIOydtOycoOuKlCDqsJzrsJztlaAg65WMIEhpc3Rvcnnrpbwg7LC46rOg7ZWY6riwIOychO2VqOydtOuLpCwg6re466CH6riw7JeQIOyXsOqysO2VtOyjvOqzoCxcclxuICAvLyDrsqDtj6zsmqnsnbzrlYzripQg7Jew6rKw7JWI7ZW07KO864qUIOydtOycoOqwgCDrgqjqsqjsp4DripQgSGlzdG9yeeuhnCDsnbjtlbQg67O07JWI7JeQIOychO2YkeydtCDrkKAg7IiYIOyeiOq4sCDrlYzrrLhcclxuICBjb25zdCBlbmhhbmNlciA9XHJcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCJcclxuICAgICAgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXHJcbiAgICAgIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGVuaGFuY2VyKTtcclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyO1xyXG5cclxuLy8gPCDrpqzrjZXsiqTsnZgg7JuQ66as7JmAIOu2iOuzgOyEsSA+XHJcbi8vIHN0b3JlIDogc3RhdGUgKyByZWR1Y2VyXHJcbi8vIOykkeyVmeyggOyepeyGjCjsnbTrpoQ67Zqo7J28LCDrgpjsnbQ6Mjkp7J2YIOuNsOydtO2EsOulvCDrs4Dqsr3tlZjquLAg7JyE7ZW07ISc64qUIGFjdGlvbuydtCDtlYTsmpTtlaguXHJcbi8vIGFjdGlvbuydhCBkaXNwYXRjaO2VmOuptCDspJHslZnsoIDsnqXshozsnZgg642w7J207YSw6rCAIOuwlOuAnFxyXG4vLyBh7Lu07Y+s64SM7Yq47JeQ7IScIOykkeyVmeyggOyepeyGjOydmCDsnbTrpoTsnYQg7Jyg7YKk66GcIOuzgOqyve2VmOuptCBh7Lu07Y+s64SM7Yq466W8IO2PrO2VqO2VmOyXrCDspJHslZnsoIDsnqXshozsnZgg642w7J207YSw66W8IOywuOyhsO2VmOqzoCDsnojripQg66qo65OgIOy7tO2PrOuEjO2KuOyXkOyEnCDsnbTrpoTqsJLsnbQg67CU64CcXHJcbi8vIGJ1dCBhY3Rpb27snZggdHlwZTpjaGFuZ2VfbmFtZeydhCDsnpDrsJTsiqTtgazrpr3tirjqsIAg6re464OlIOyVjCDsiJjripQg7JeG6riwIOuVjOusuOyXkCwgcmVkdWNlcuulvCDtmZzsmqntlZjsl6wgYWN0aW9uLnR5cGXsnbQgY2hhbmdlX25hbWXsnbwg6rK97Jqw7JeQIOyWtOuWu+qyjCDrs4Dqsr3rkJjripTsp4Ag7KCc7Iuc7ZW07KSMXHJcblxyXG4vLyDri6jsoJAgOiDrjbDsnbTthLDrpbwg67OA6rK97ZWY6rGw64KYIO2VoCDrlYwsIGFjdGlvbuydtCDsoJDsoJAg64qY7Ja064KoID0+IHJlZHVjZXLrj4Qg64qY7Ja064KoXHJcbi8vIOydtOufrO2VnCDri6jsoJDsnbQg7J6I7J2M7JeQ64+EIOu2iOq1rO2VmOqzoCByZWR1eOulvCDsgqzsmqntlZjripTqsowsIGFjdGlvbuydhCDquLDspIDsnLzroZwg6rO86rGwIGhpc3RvcnnqsIAg7LaU7KCB7J20IOuQmOq4sCDrlYzrrLjsl5AsIOuyhOq3uOyeoeydhCDrlYwg66ek7JqwIO2OuO2VqFxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmVkdXgtc2FnYS9jb3JlL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW1tZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC1yZWR1eC13cmFwcGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhL2VmZmVjdHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic2hvcnRpZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9