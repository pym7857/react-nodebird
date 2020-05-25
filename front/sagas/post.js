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
    LOAD_HASHTAG_POSTS_FAILURE,
    LOAD_HASHTAG_POSTS_REQUEST,
    LOAD_HASHTAG_POSTS_SUCCESS,
    LOAD_USER_POSTS_FAILURE,
    LOAD_USER_POSTS_REQUEST,
    LOAD_USER_POSTS_SUCCESS,
    LOAD_COMMENTS_FAILURE,
    LOAD_COMMENTS_REQUEST,
    LOAD_COMMENTS_SUCCESS,
    UPLOAD_IMAGES_FAILURE,
    UPLOAD_IMAGES_REQUEST,
    UPLOAD_IMAGES_SUCCESS,
    LIKE_POST_FAILURE,
    LIKE_POST_REQUEST,
    LIKE_POST_SUCCESS,
    UNLIKE_POST_FAILURE,
    UNLIKE_POST_REQUEST,
    UNLIKE_POST_SUCCESS,
    RETWEET_FAILURE,
    RETWEET_REQUEST,
    RETWEET_SUCCESS
} from '../reducers/post';
import { ADD_POST_TO_ME } from '../reducers/user';

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
        console.error(e);
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
function addPostAPI(formData) {
    // 서버에 요청을 보내는 부분 
    return axios.post('/post', formData, {
        withCredentials: true,  // 로그인 한 사람만 글을 쓸 수 있도록 쿠키를 보내줘야한다.(쿠키를 보내서 내가 지금 로그인했는지를 인증받아야 한다.)
    });
}
function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data);
        yield put({   // post reducer의 데이터를 수정하는 부분 
            type: ADD_POST_SUCCESS,
            data: result.data,
        });
        yield put({   // user reducer의 데이터를 수정하는 부분 
          type: ADD_POST_TO_ME,
          data: result.data.id,
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
function addCommentAPI(data) {
    // 서버에 요청을 보내는 부분 
    return axios.post(`/post/${data.postId}/comment`, { content: data.content }, {
        withCredentials: true,
    });
}
function* addComment(action) {  // 사용자가 댓글 등록하면, 제일 먼저 PostCard.js의 onSubmitComment에서 dispatch 일어남. 이때의 action이 매개변수 action으로 들어온것.
    try {
        const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: {
                postId: action.data.postId,
                comment: result.data,
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

/**
 * 특정 해시태그에 해당하는 게시글 가져오기 3종세트
 */
function loadHashtagPostsAPI(tag) {
    return axios.get(`/hashtag/${tag}`);
}
function* loadHashtagPosts(action) {
    try {
      const result = yield call(loadHashtagPostsAPI, action.data);
      yield put({
        type: LOAD_HASHTAG_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            error: e,
        });
    }
}
function* watchLoadHashtagPosts() {
    yield takeLatest(LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

 /**
 * 게시글의 모든 댓글들 가져오기 3종세트
 */
function loadCommentsAPI(postId) {
    return axios.get(`/post/${postId}/comments`);
}
function* loadComments(action) {
    try {
      const result = yield call(loadCommentsAPI, action.data);
      yield put({
        type: LOAD_COMMENTS_SUCCESS,
        data: {
            postId: action.data,
            comments: result.data,
        }
      });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_COMMENTS_FAILURE,
            error: e,
        });
    }
}
function* watchLoadComments() {
    yield takeLatest(LOAD_COMMENTS_REQUEST, loadComments);
}

/**
 * 특정 id를 가진 user의 게시글들 가져오기 3종세트
 */
function loadUserPostsAPI(id) {
    return axios.get(`/user/${id}/posts`);
}
function* loadUserPosts(action) {
    try {
      const result = yield call(loadUserPostsAPI, action.data);
      yield put({
        type: LOAD_USER_POSTS_SUCCESS,
        data: result.data,
      });
    } catch (e) {
        console.error(e);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: e,
        });
    }
}
function* watchLoadUserPosts() {
    yield takeLatest(LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

/**
 * 이미지 업로드 3종세트
 */
function uploadImagesAPI(formData) {
    return axios.post('/post/images', formData, {   // 게시글을 아직 올리지 않은 상태에서 postId알 수 있는 방법이 없음 
      withCredentials: true,
    });
}
function* uploadImages(action) {
    try {
      const result = yield call(uploadImagesAPI, action.data);
      yield put({
        type: UPLOAD_IMAGES_SUCCESS,
        data: result.data,
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: UPLOAD_IMAGES_FAILURE,
        error: e,
      });
    }
}
function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

/**
 * 좋아요 누르기 3종세트
 */
function likePostAPI(postId) {
    return axios.post(`/post/${postId}/like`, {}, {     // 두번째 인자인 data:{}를 명시는 해놓아야됨 
      withCredentials: true,
    });
}
function* likePost(action) {
    try {
      const result = yield call(likePostAPI, action.data);
      yield put({
        type: LIKE_POST_SUCCESS,
        data: {
          postId: action.data,          // 게시글 id
          userId: result.data.userId,   // 좋아요 누른 사람의 id
        },
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: LIKE_POST_FAILURE,
        error: e,
      });
    }
}
function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}
  
/**
 * 좋아요 누르기 취소 3종세트
 */
function unlikePostAPI(postId) {
    return axios.delete(`/post/${postId}/like`, {   // delete는 두번째 인자인 data:{} 부분 없음. 
      withCredentials: true,
    });
}
function* unlikePost(action) {
    try {
      const result = yield call(unlikePostAPI, action.data);
      yield put({
        type: UNLIKE_POST_SUCCESS,
        data: {
          postId: action.data,          // 게시글 id
          userId: result.data.userId,   // 좋아요 취소한 사람의 id
        },
      });
    } catch (e) {
      console.error(e);
      yield put({
        type: UNLIKE_POST_FAILURE,
        error: e,
      });
    }
}
function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

/**
 * 리트윗 3종세트
 */
function retweetAPI(postId) {
  return axios.post(`/post/${postId}/retweet`, {}, {    // post 요청 시에는 data가 없더라도 빈 객체 {} 라도 넣어줘야 한다. 
    withCredentials: true,
  });
}
function* retweet(action) {
  try {
    const result = yield call(retweetAPI, action.data);
    yield put({
      type: RETWEET_SUCCESS,
      data: result.data,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: RETWEET_FAILURE,
      error: e,
    });
    console.dir(e);
    alert(e.response && e.response.data);   // alert로 에러 정보 알려주기 
  }
}
function* watchRetweet() {
  yield takeLatest(RETWEET_REQUEST, retweet);
}

/* ㅡㅡㅡㅡㅡ main ㅡㅡㅡㅡㅡ*/
function* postSaga() {
    yield all([
        fork(watchLoadMainPosts),
        fork(watchAddPost),
        fork(watchAddComment),
        fork(watchLoadComments),
        fork(watchLoadHashtagPosts),
        fork(watchLoadUserPosts),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchRetweet),
    ]);
}
export default postSaga;