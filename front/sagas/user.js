import { all, fork, takeLatest, takeEvery, call, put, take, delay } from 'redux-saga';
import axios from 'axios';
import { 
    LOG_IN_REQUEST, 
    LOG_IN_SUCCESS, 
    LOG_IN_FAILURE, 
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
} from '../reducers/user';

/* 로그인 */
function loginAPI() {   
    // 서버에 요청을 보내는 부분 
    return axios.post('/login');
}
function* login() {
    try {
        yield call(loginAPI); // 서버에 요청

        yield put({     // put은 dispatch와 동일 
            type: LOG_IN_SUCCESS,
        })
    } catch (e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        })
    }
}
function* watchLogin() {
    yield takeEvery(LOG_IN_REQUEST, login);
}


/* 회원가입 */
function signUpAPI() {
    // 서버에 요청을 보내는 부분 
    return axios.post('/login');
}
function* signUp() {
    try {
        yield call(signUpAPI);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: SIGN_UP_FAILURE,
        });
    }
}
function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}


function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignUp),
    ]);
}
export default userSaga;