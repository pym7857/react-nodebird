import produce from 'immer';

/* redux state */
export const initialState = {
    mainPosts: [],
    imagePaths: [],             // 미리보기 이미지 경로 
    
    isAddingPost: false,        // 포스트 업로드 중
    addPostErrorReason: '',     // 포스트 업로드 실패 사유 
    postAdded: false,           // 포스트 업로드 성공 여부 (쓰는 이유: 글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
    
    isAddingComment: false,     // 댓글 업로드 중 
    addCommentErrorReason: '',  // 댓글 업로드 에러 사유 
    commentAdded: false,        // 댓글이 추가되었는지 (쓰는 이유: 댓글 작성후, 이게 true가 되면 TextArea 비워주기 위해서)
    
    addLikeErrorReason: '',

    hasMorePost: false,         // 스크롤을 더 내려야 할지 
    singlePost: null,
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

export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';           // 게시글 한개 불러오기 
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

/* 실제 Action */
// ...

/* Reducer */
const reducer = (state = initialState, action) => {
    /* immer */
    return produce(state, (draft) => {      // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.
      switch (action.type) {
        case UPLOAD_IMAGES_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case UPLOAD_IMAGES_SUCCESS: {
            action.data.forEach((p) => {    // 이처럼, 더이상 불변성을 유지하지 않아도 된다. (immer에서 draft보고 알아서 불변성 감지해준다.)
              draft.imagePaths.push(p);
            }); 
            break; 
            /* return {
              ...state,
              imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
            }; */
        }
        case UPLOAD_IMAGES_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case REMOVE_IMAGE: {
            const index = draft.imagePaths.findIndex((v, i) => i === action.index);
            draft.imagePaths.splice(index, 1);
            break;
            /* return {
                ...state,
                imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
            }; */
        }
        case LOAD_MAIN_POSTS_REQUEST: 
        case LOAD_HASHTAG_POSTS_REQUEST:
        case LOAD_USER_POSTS_REQUEST: {
            draft.mainPosts = !action.lastId ? [] : draft.mainPosts;      // lastId가 없으면, mainPosts = []
            draft.hasMorePost = action.lastId ? draft.hasMorePost : true;
            break;
            /* return {
              ...state,
              mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                      // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
              hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
            }; */
        }
        case LOAD_MAIN_POSTS_SUCCESS: 
        case LOAD_HASHTAG_POSTS_SUCCESS:
        case LOAD_USER_POSTS_SUCCESS: {
            action.data.forEach((p) => {
              draft.mainPosts.push(p);
            });
            break;
            /* return {
              ...state,
              mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
              hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
            }; */
        }
        case LOAD_MAIN_POSTS_FAILURE: 
        case LOAD_HASHTAG_POSTS_FAILURE:
        case LOAD_USER_POSTS_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case ADD_POST_REQUEST: {
            draft.isAddingPost = true;
            draft.addPostErrorReason = '';
            draft.postAdded = false;
            break;
            /* return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                postAdded: false,
            }; */
        }
        case ADD_POST_SUCCESS: {
            draft.isAddingPost = false;
            draft.mainPosts.unshift(action.data);   // 배열 맨 앞에 추가할때는 unshift()
            draft.postAdded = true;
            draft.imagePaths = [];
            break;
            /* return {
                ...state,
                isAddingPost: false,
                mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
                postAdded: true,
                imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
            }; */
        }
        case ADD_POST_FAILURE: {
            draft.isAddingPost = false;
            draft.addPostErrorReason = action.error;
            break;
            /* return {
                ...state,
                isAddingPost: false,
                addPostErrorReason: action.error,
            }; */
        }
        case ADD_COMMENT_REQUEST: {
            draft.isAddingComment = true;
            draft.addCommentErrorReason = '';
            draft.commentAdded = false;
            break;
            /* return {
                ...state,
                isAddingComment: true,
                addCommentErrorReason: '',
                commentAdded: false,
            }; */
            
        }
        case ADD_COMMENT_SUCCESS: {
            const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
            draft.mainPosts[postIndex].Comments.push(action.data.comment);
            draft.isAddingComment = false;
            draft.commentAdded = true;
            break;
            /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
            const post = state.mainPosts[postIndex];                  // 해당 게시글을 찾는다
            const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
            const mainPosts = [...state.mainPosts];                   // mainPosts도 불변성을 확보해 줘야한다.
            mainPosts[postIndex] = { ...post, Comments };
            return {
                ...state,
                isAddingComment: false,
                mainPosts, // 여러 게시글 중에 해당하는 게시글에 해당 댓글 달아주기 (불변성 때문에 복잡한 작업)
                commentAdded: true,
            }; */
        }
        case ADD_COMMENT_FAILURE: {
            draft.isAddingComment = false;
            draft.addCommentErrorReason = action.error;
            break;
            /* return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error,
            }; */
        }
        case LOAD_COMMENTS_SUCCESS: {
            const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
            draft.mainPosts[postIndex].Comments = action.data.comments;
            break;
            /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Comments = action.data.comments;
            const mainPosts = [...state.mainPosts];         // mainPosts도 불변성을 확보해 줘야한다.
            mainPosts[postIndex] = { ...post, Comments };
            return {
              ...state,
              mainPosts,
            }; */
        }
        case LIKE_POST_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case LIKE_POST_SUCCESS: {
            const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
            draft.mainPosts[postIndex].Likers.unshift({ id: action.data.userId });            // 배열 맨 앞에 추가할때는 unshift()
            break;
            /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Likers };
            return {
              ...state,
              mainPosts,
            }; */
        }
        case LIKE_POST_FAILURE: {
            alert('좋아요 실패!');
            draft.addLikeErrorReason = action.error;
            break;
            /* return {
              ...state,
              addLikeErrorReason: action.error,
            }; */
        }
        case UNLIKE_POST_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case UNLIKE_POST_SUCCESS: {
            const postIndex = draft.mainPosts.findIndex(v => v.id === action.data.postId);
            const likerIndex = draft.mainPosts[postIndex].Likers.findIndex(v => v.id === action.data.userId);
            draft.mainPosts[postIndex].Likers.splice(likerIndex, 1);
            break;
            /* const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
            const post = state.mainPosts[postIndex];
            const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
            const mainPosts = [...state.mainPosts];
            mainPosts[postIndex] = { ...post, Likers };
            return {
              ...state,
              mainPosts,
            }; */
        }
        case UNLIKE_POST_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case RETWEET_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case RETWEET_SUCCESS: {
            draft.mainPosts.unshift(action.data);
            break;
            /* return {
              ...state,
              mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
            }; */
        }
        case RETWEET_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case REMOVE_POST_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case REMOVE_POST_SUCCESS: {
            const index = draft.mainPosts.findIndex(v => v.id === action.data);
            draft.mainPosts.splice(index, 1);
            break;
            /* return {
              ...state,
              mainPosts: state.mainPosts.filter(v => v.id !== action.data),
            }; */
        }
        case REMOVE_POST_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case LOAD_POST_SUCCESS: {
          draft.singlePost = action.data;
          break;
        }
        default: {
            break;
            /* return {
              ...state,
            }; */
        }
      }
    });
};
export default reducer;



/* immer쓰기 전 코드 */
/* switch (action.type) {
  case UPLOAD_IMAGES_REQUEST: {
      return {
        ...state,
      };
  }
  case UPLOAD_IMAGES_SUCCESS: {
      return {
        ...state,
        imagePaths: [...state.imagePaths, ...action.data],    // 기존 imagePaths배열에 action.data 추가 
      };
  }
  case UPLOAD_IMAGES_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_IMAGE: {
      return {
          ...state,
          imagePaths: state.imagePaths.filter((v, i) => i !== action.index),
      };
  }
  case LOAD_MAIN_POSTS_REQUEST: 
  case LOAD_HASHTAG_POSTS_REQUEST:
  case LOAD_USER_POSTS_REQUEST: {
      return {
        ...state,
        mainPosts: action.lastId === 0 ? [] : state.mainPosts,  // lastId가 0 이면(=처음 화면이면): REQUEST시, mainPosts = []  -> 다른데 갔다가 다시 메인화면 올 수 도 있기 때문  
                                                                // lastId가 0 이 아니라면(=더보기 클릭시): REQUEST시, 기존 mainPosts가져오기 
        hasMorePost: action.lastId ? state.hasMorePost : true,  // 맨 첫 페이지에 게시글 로딩할때, hasMorePost가 true가 되야함. (pages/index.js hasMorePost분기 부분 참조)
      };
  }
  case LOAD_MAIN_POSTS_SUCCESS: 
  case LOAD_HASHTAG_POSTS_SUCCESS:
  case LOAD_USER_POSTS_SUCCESS: {
      return {
        ...state,
        mainPosts: state.mainPosts.concat(action.data),   // 덮어쓰는게 아니라, 이전 게시글에 추가하기
        hasMorePost: action.data.length === 10,           // reducers/user.js에서 hasMoreFollower했던거랑 동일한 원리 !!
      };
  }
  case LOAD_MAIN_POSTS_FAILURE: 
  case LOAD_HASHTAG_POSTS_FAILURE:
  case LOAD_USER_POSTS_FAILURE: {
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
          mainPosts: [action.data, ...state.mainPosts], // 포스트들 앞에 들어가게 된다.
          postAdded: true,
          imagePaths: [],                               // success하는 순간, imagePaths 비워주기 
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
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId); // 먼저, 여러개의 게시글 중에 해당 게시글의 index를 도출한 후,
      const post = state.mainPosts[postIndex]; // 해당 게시글을 찾는다
      const Comments = [...post.Comments, action.data.comment]; // 불변성을 확보하면서, 뒤에다가 새 댓글 달아준다 
      const mainPosts = [...state.mainPosts]; // mainPosts도 불변성을 확보해 줘야한다.
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
  case LOAD_COMMENTS_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Comments = action.data.comments;
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Comments };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case LIKE_POST_SUCCESS: {
      // 항상 불변성을 조심해야 된다. 
      // 바뀔 객체만 새로 만들어 줘야된다. 
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = [{ id: action.data.userId }, ...post.Likers];    // 좋아요 누른 사람들 목록에, 본인 추가 
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case LIKE_POST_FAILURE: {
      alert('좋아요 실패!');
      return {
        ...state,
        addLikeErrorReason: action.error,
      };
  }
  case UNLIKE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case UNLIKE_POST_SUCCESS: {
      const postIndex = state.mainPosts.findIndex(v => v.id === action.data.postId);
      const post = state.mainPosts[postIndex];
      const Likers = post.Likers.filter(v => v.id !== action.data.userId);  // 좋아요 누른 사람들 목록에, 본인 제외  
      const mainPosts = [...state.mainPosts];
      mainPosts[postIndex] = { ...post, Likers };

      return {
        ...state,
        mainPosts,
      };
  }
  case UNLIKE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  case RETWEET_REQUEST: {
      return {
        ...state,
      };
  }
  case RETWEET_SUCCESS: {
      return {
        ...state,
        mainPosts: [action.data, ...state.mainPosts],     // 기존 게시글의 제일 앞에 추가해준다. 
      };
  }
  case RETWEET_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_POST_SUCCESS: {
      //const index = draft.mainPosts.findIndex(v => v.id === action.data);
      //draft.mainPosts.splice(index, 1);
      //break;
      return {
        ...state,
        mainPosts: state.mainPosts.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_POST_FAILURE: {
      return {
        ...state,
      };
  }
  default: {
      return {
          ...state,
      };
  }
} */