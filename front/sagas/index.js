import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import user from './user';
import post from './post';

// axios.post에서 공통되는 URL을 이렇게 따로 뺼 수 있음 
axios.defaults.baseURL = 'http://localhost:3065/api';

function* rootSaga() {
    yield all([
        fork(user),
        fork(post),
    ]);
}

export default rootSaga;