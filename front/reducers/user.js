/* redux state */
const dummyUser = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    id: 1,
};

export const initialState = {
    isLoggingOut: false,    // 로그아웃 시도 중
    isLogginIn: false,      // 로그인 시도 중 
    logInErrorReason: '',   // 로그인 에러 사유

    signedUp: false,        // 회원가입 성공
    isSignedUp: false,      // 회원가입 시도 중
    signUpErrorReason: '',  // 회원가입 에러 사유

    me: null,               // 내 정보
    followingList: [],
    followerList: [],              
    userInfo: null,         // 남의 정보 
};

/* Action의 이름 */
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';               // 사용자 불러오기 
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_FOLLOW_REQUEST = 'LOAD_FOLLOW_REQUEST';           // 팔로우 목록 불러오기
export const LOAD_FOLLOW_SUCCESS = 'LOAD_FOLLOW_SUCCESS';
export const LOAD_FOLLOW_FAILURE = 'LOAD_FOLLOW_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';           // 팔로우 액션
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';       // 언팔 액션
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';   // 팔로워 제거 
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';                     // 중요 -> 나중에 설명 


/* 실제 Action */
// ...

/* Reducer */
const reducer = (state = initialState, action) => {
    switch (action.type) {
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
            return {
              ...state,
              me: action.data,
            };
        }
        case LOAD_USER_FAILURE: {
            return {
              ...state,
            };
        }
        default: {
            return {
                ...state,
            };
        }
    }
};

export default reducer;