import { all, takeLatest, delay, put, fork, actionChannel } from 'redux-saga/effects';
import { 
    ADD_POST_REQUEST, 
    ADD_POST_SUCCESS, 
    ADD_POST_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS,
    ADD_COMMENT_FAILURE
} from '../reducers/post';

/* ㅡㅡㅡㅡㅡ 게시글 업로드 3종세트 ㅡㅡㅡㅡㅡ*/
function addPostAPI() {
    return // 서버에 요청을 보내는 부분 
}
function* addPost() {
    try {
        yield delay(2000);
        yield put({
            type: ADD_POST_SUCCESS,
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_POST_FAILURE,
            error: e,
        });
    }
}
function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

/* ㅡㅡㅡㅡㅡ 댓글 업로드 3종세트 ㅡㅡㅡㅡㅡ*/
function addCommentAPI() {
    return // 서버에 요청을 보내는 부분 
}
function* addComment(action) {  // 사용자가 댓글 등록하면, 제일 먼저 PostCard.js의 onSubmitComment에서 dispatch 일어남. 이때의 action이 매개변수 action으로 들어온것.
    try {
        yield delay(2000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
            }
        });
    } catch (e) {
        console.error(e);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: e,
        });
    }
}
function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/
function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}
export default postSaga;