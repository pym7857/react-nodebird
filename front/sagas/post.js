import { all, takeLatest, delay, put, fork, call } from 'redux-saga/effects';
import axios from 'axios';
import { 
    ADD_POST_FAILURE, 
    ADD_POST_REQUEST, 
    ADD_POST_SUCCESS,
    ADD_COMMENT_FAILURE,
    ADD_COMMENT_REQUEST,
    ADD_COMMENT_SUCCESS, 
    LOAD_MAIN_POSTS_FAILURE, 
    LOAD_MAIN_POSTS_REQUEST,
    LOAD_MAIN_POSTS_SUCCESS,
} from '../reducers/post';

/**
 * 게시글 불러오기 3종세트
 */
function loadMainPostsAPI() {
    // 서버에 요청을 보내는 부분 
    return axios.get('/posts');
}
function* loadMainPosts() {
    try {
      const result = yield call(loadMainPostsAPI);
      yield put({
        type: LOAD_MAIN_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      yield put({
        type: LOAD_MAIN_POSTS_FAILURE,
        error: e,
      });
    }
}
function* watchLoadMainPosts() {
    yield takeLatest(LOAD_MAIN_POSTS_REQUEST, loadMainPosts);
}

/**
 * 게시글 업로드 3종세트
 */
function addPostAPI(postData) {
    // 서버에 요청을 보내는 부분 
    return axios.post('/post', postData, {
        withCredentials: true,  // 로그인 한 사람만 글을 쓸 수 있도록 쿠키를 보내줘야한다.(쿠키를 보내서 내가 지금 로그인했는지를 인증받아야 한다.)
    });
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
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

/**
 * 댓글 업로드 3종세트
 */
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
        fork(watchLoadMainPosts),
        fork(watchAddPost),
        fork(watchAddComment),
    ]);
}
export default postSaga;