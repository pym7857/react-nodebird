import { all, fork, takeEvery, call, put, delay } from 'redux-saga/effects';
import axios from 'axios';
import { 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
} from '../reducers/user';

/* ㅡㅡㅡㅡㅡ 로그인 3종세트 ㅡㅡㅡㅡㅡ*/
function loginAPI() {   
    return axios.post('/login'); // 서버에 요청을 보내는 부분 
}
function* login() {
    try {
        //yield call(loginAPI); // 서버에 요청
        yield delay(2000);
        yield put({     // put은 dispatch와 동일 
            type: LOG_IN_SUCCESS,
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

/* ㅡㅡㅡㅡㅡ 회원가입 3종세트 ㅡㅡㅡㅡㅡ*/
function signUpAPI(signUpData) {
    // 서버에 요청을 보내는 부분 
    return axios.post('http://localhost:3065/api/user', signUpData); // 백에서 signUpData를 req.body로 받는다.
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

/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/
function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}
export default userSaga;