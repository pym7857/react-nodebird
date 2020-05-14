import { all, fork, takeLatest, call, put } from 'redux-saga';
import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_FAILURE } from '../reducers/user';

function loginAPI() {   // 서버에 요청을 보내는 부분 

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
    yield takeLatest(LOG_IN, login) // takeLatest가 LOG_IN 액션이 dispatch되길 기다려서 dispatch될 때, login 제너레이터를 호출합니다.
}

function* userSaga() {
    yield all([
        fork(watchLogin),
    ]);
}

export default userSaga;