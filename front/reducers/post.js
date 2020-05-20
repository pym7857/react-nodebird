/* redux state */
export const initialState = {
    mainPosts: [],
    imagePaths: [],             // 미리보기 이미지 경로 
    addPostErrorReason: '',     // 포스트 업로드 실패 사유 
    isAddingPost: false,        // 포스트 업로드 중 
    postAdded: false,           // 포스트 업로드 성공 여부 (쓰는 이유: 글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
    isAddingComment: false,     // 댓글 업로드 중 
    addCommentErrorReason: '',  // 댓글 업로드 에러 사유 
    commentAdded: false,        // 댓글이 추가되었는지 (쓰는 이유: 댓글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
};

/* Action의 이름 */
export const LOAD_MAIN_POSTS_REQUEST = 'LOAD_MAIN_POSTS_REQUEST';       // 메인 포스트 로딩 액션
export const LOAD_MAIN_POSTS_SUCCESS = 'LOAD_MAIN_POSTS_SUCCESS';
export const LOAD_MAIN_POSTS_FAILURE = 'LOAD_MAIN_POSTS_FAILURE';

export const LOAD_HASHTAG_POSTS_REQUEST = 'LOAD_HASHTAG_POSTS_REQUEST'; // 해시태그로 검색했을 때 결과 로딩 액션
export const LOAD_HASHTAG_POSTS_SUCCESS = 'LOAD_HASHTAG_POSTS_SUCCESS';
export const LOAD_HASHTAG_POSTS_FAILURE = 'LOAD_HASHTAG_POSTS_FAILURE';

export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';       // 사용자가 어떤 게시글을 썼는지 로딩 액션
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST';           // 이미지 업로드 액션 
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS';
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';                     // 게시글 업로드 액션
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';                   // 게시글 좋아요 
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';               // 게시글 좋아요 취소 
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const LOAD_COMMENTS_REQUEST = 'LOAD_COMMENTS_REQUEST';           // 게시글 댓글 불러오기 
export const LOAD_COMMENTS_SUCCESS = 'LOAD_COMMENTS_SUCCESS';
export const LOAD_COMMENTS_FAILURE = 'LOAD_COMMENTS_FAILURE';

export const RETWEET_REQUEST = 'RETWEET_REQUEST';                       // 리트윗
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS';
export const RETWEET_FAILURE = 'RETWEET_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';               // 포스트 제거 
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const REMOVE_IMAGE = 'REMOVE_IMAGE';

/* 실제 Action */
// ...

/* Reducer */
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MAIN_POSTS_REQUEST: {
            return {
              ...state,
              mainPosts: [],
            };
        }
        case LOAD_MAIN_POSTS_SUCCESS: {
            return {
              ...state,
              mainPosts: action.data,
            };
        }
        case LOAD_MAIN_POSTS_FAILURE: {
            return {
              ...state,
            };
        }
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                mainPosts: [action.data, ...state.mainPosts], // dummyPost가 기존에 있던 포스트들 앞에 들어가게 된다.
                postAdded: true,
            };
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            };
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            };
        }
        case ADD_COMMENT_SUCCESS: {
            // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
            const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            // 해당 게시글을 찾는다
            const post = state.mainPosts[postIndex];
            // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
            const Comments = [...post.Comments, action.data.comment];
            // mainPosts도 불변성을 확보해 줘야한다.
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Comments };

            return {
                ...state,
                isAddingComment: false,
                mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
                commentAdded: true,
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
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