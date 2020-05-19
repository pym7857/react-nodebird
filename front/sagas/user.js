import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import { 
    LOAD_USER_FAILURE,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_OUT_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from '../reducers/user';

/**
 * 로그인 3종세트
 */
function loginAPI(loginData) {   // 서버에 요청을 보내는 부분 
    return axios.post('/user/login', loginData, {
        withCredentials: true,
    }); 
}
function* login(action) {
    try {
        const result = yield call(loginAPI, action.data); // 서버에 요청
        yield put({     // put은 dispatch와 동일 
            type: LOG_IN_SUCCESS,
            data: result.data, // axios응답(result)은 응답객체.data안에 들어있다. 
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}
function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}

/**
 * 회원가입 3종세트
 */
function signUpAPI(signUpData) {
    // 서버에 요청을 보내는 부분 
    return axios.post('/user', signUpData); // 백에서 signUpData를 req.body로 받는다.
}
function* signUp(action) {
    try {
        yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
            error: e,
        });
    }
}
function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}

/**
 * 로그아웃 3종세트
 */
function logOutAPI() {
    // 서버에 요청을 보내는 부분
    return axios.post('/user/logout', {}, {
      withCredentials: true,
    });
}
function* logOut() {
    try {
      // yield call(logOutAPI);
      yield call(logOutAPI);
      yield put({ // put은 dispatch 동일
        type: LOG_OUT_SUCCESS,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOG_OUT_FAILURE,
        error: e,
      });
    }
}
function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}
  
/**
 * 유저 정보 가져오기 3종세트
 */
function loadUserAPI() {
    // 서버에 요청을 보내는 부분
    return axios.get('/user/', {    
      withCredentials: true,    // 쿠키로 정보가져오기 
    });
}
function* loadUser() {
    try {
      // yield call(loadUserAPI);
      const result = yield call(loadUserAPI);
      yield put({ // put은 dispatch 동일
        type: LOAD_USER_SUCCESS,
        data: result.data,
      });
    } catch (e) { // loginAPI 실패
      console.error(e);
      yield put({
        type: LOAD_USER_FAILURE,
        error: e,
      });
    }
}
function* watchLoadUser() {
    yield takeEvery(LOAD_USER_REQUEST, loadUser);
}

/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/
function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchLoadUser),
        fork(watchSignUp),
    ]);
}
export default userSaga;