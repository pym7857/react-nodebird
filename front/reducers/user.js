import produce from 'immer';

/* const dummyUser = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    id: 1,
}; */

/* redux state */
export const initialState = {
    isLoggingOut: false,          // 로그아웃 시도 중
    isLogginIn: false,            // 로그인 시도 중 
    logInErrorReason: '',         // 로그인 에러 사유

    signedUp: false,              // 회원가입 성공
    isSignedUp: false,            // 회원가입 시도 중
    signUpErrorReason: '',        // 회원가입 에러 사유

    me: null,                     // 내 정보
    followingList: [],
    followerList: [],              
    userInfo: null,               // 남의 정보 

    isEditingNickname: false,     // 닉네임 변경 중 
    editNicknameErrorReason: '',  // 닉네임 변경 실패 사유 

    hasMoreFollower: false,       // 더보기 버튼을 존재시킬지
    hasMoreFollowing: false,      // 더보기 버튼을 존재시킬지
};

/* Action의 이름 */
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';               // 사용자 불러오기 
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

export const LOAD_FOLLOWERS_REQUEST = 'LOAD_FOLLOWERS_REQUEST';
export const LOAD_FOLLOWERS_SUCCESS = 'LOAD_FOLLOWERS_SUCCESS';
export const LOAD_FOLLOWERS_FAILURE = 'LOAD_FOLLOWERS_FAILURE';

export const LOAD_FOLLOWINGS_REQUEST = 'LOAD_FOLLOWINGS_REQUEST';
export const LOAD_FOLLOWINGS_SUCCESS = 'LOAD_FOLLOWINGS_SUCCESS';
export const LOAD_FOLLOWINGS_FAILURE = 'LOAD_FOLLOWINGS_FAILURE';

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';           // 팔로우 액션
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_FAILURE = 'FOLLOW_USER_FAILURE';

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';       // 언팔 액션
export const UNFOLLOW_USER_SUCCESS = 'UNFOLLOW_USER_SUCCESS';
export const UNFOLLOW_USER_FAILURE = 'UNFOLLOW_USER_FAILURE';

export const REMOVE_FOLLOWER_REQUEST = 'REMOVE_FOLLOWER_REQUEST';   // 팔로워 제거 
export const REMOVE_FOLLOWER_SUCCESS = 'REMOVE_FOLLOWER_SUCCESS';
export const REMOVE_FOLLOWER_FAILURE = 'REMOVE_FOLLOWER_FAILURE';

export const EDIT_NICKNAME_REQUEST = 'EDIT_NICKNAME_REQUEST';
export const EDIT_NICKNAME_SUCCESS = 'EDIT_NICKNAME_SUCCESS';
export const EDIT_NICKNAME_FAILURE = 'EDIT_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';                    
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

/* 실제 Action */
// ...

/* Reducer */
const reducer = (state = initialState, action) => {
    /* immer */
    return produce(state, (draft) => {      // immer에게 불변성을 맡기고, 우리는 draft만 자유롭게 변경해주면 된다.
      switch (action.type) {
        case LOG_IN_REQUEST: {
            draft.isLoggingIn = true;
            draft.isLoggedIn = false;
            draft.logInErrorReason = '';
            break;
            /* return {
                ...state,
                isLoggingIn: true,
                isLoggedIn: false,
                logInErrorReason: '',
            }; */
        }
        case LOG_IN_SUCCESS: {
            draft.isLoggingIn = false;
            draft.me = action.data;
            break;
            /* return {
                ...state,
                isLoggingIn: false,
                me: action.data,
                isLoading: false,
            }; */
        }
        case LOG_IN_FAILURE: {
            draft.isLoggingIn = false;
            draft.logInErrorReason = action.error;
            draft.me = null;
            break;
            /* return {
                ...state,
                isLoggingIn: false,
                logInErrorReason: action.error,
                me: null,
            }; */
        }
        case LOG_OUT_REQUEST: {
            draft.isLoggingOut = true;
            break;
            /* return {
              ...state,
              isLoggingOut: true,
            }; */
        }
        case LOG_OUT_SUCCESS: {
            draft.isLoggingOut = false;
            draft.me = null;
            break;
            /* return {
              ...state,
              isLoggingOut: false,
              me: null,
            }; */
        }
        case SIGN_UP_REQUEST: {
            draft.isSigningUp = true;
            draft.isSignedUp = false;
            draft.signUpErrorReason = '';
            break;
            /* return {
                ...state,
                isSigningUp: true,
                isSignedUp: false,
                signUpErrorReason: '',
            }; */
        }
        case SIGN_UP_SUCCESS: {
            alert('회원가입 성공!'); 
            draft.isSigningUp = false;
            draft.isSignedUp = true;
            break;
            /* return {
                isSigningUp: false,
                isSignedUp: true,
            }; */
        }
        case SIGN_UP_FAILURE: {
            draft.isSigningUp = false;
            draft.signUpErrorReason = action.error;
            break;
            /* return {
                isSigningUp: false,
                signUpErrorReason: action.error,
            }; */
        }
        case LOAD_USER_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case LOAD_USER_SUCCESS: {
            if (action.isThisMe) {
              draft.me = action.data;
              break;
            } else {
              draft.userInfo = action.data;
              break;
            }
            /* if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
                return {
                    ...state,
                    me: action.data,
                  };
            } else {
                return {
                    ...state,
                    userInfo: action.data,
                  };
            } */
        }
        case LOAD_USER_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case FOLLOW_USER_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case FOLLOW_USER_SUCCESS: {
            draft.me.Followings.unshift({ id: action.data });
            break;
            /* return {
              ...state,
              me: {
                ...state.me,
                Followings: [{ id: action.data }, ...state.me.Followings],
              },
            }; */
        }
        case FOLLOW_USER_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case UNFOLLOW_USER_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case UNFOLLOW_USER_SUCCESS: {
            const userIndex1 = draft.me.Followings.findIndex(v => v.id === action.data);
            draft.me.Followings.splice(userIndex1, 1);
            const userIndex2 = draft.me.FollowingList.findIndex(v => v.id === action.data);
            draft.followingList.splice(userIndex2, 1);
            break;
            /* return {
              ...state,
              me: {
                ...state.me,
                Followings: state.me.Followings.filter(v => v.id !== action.data),
              },
              followingList: state.followingList.filter(v => v.id !== action.data),
            }; */
        }
        case UNFOLLOW_USER_FAILURE: { 
            break;
            /* return {
              ...state,
            }; */
        }
        case ADD_POST_TO_ME: {
            draft.me.Posts.unshift({ id: action.data });
            break;
            /* return {
              ...state,
              me: {
                ...state.me,
                Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
              },
            }; */
        }
        case LOAD_FOLLOWERS_REQUEST: {
            break;
            /* return {
              ...state,
              //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                                // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                                // 여기 없어도 됨 (내 Q&A 답글)
            }; */
        }
        case LOAD_FOLLOWERS_SUCCESS: {
            action.data.forEach((f) => {
              draft.followerList.push(f);
            });
            draft.hasMoreFollower = action.data.length === 3;
            break;
            /* return {
              ...state,
              followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
              hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                    // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
            }; */
        }
        case LOAD_FOLLOWERS_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case LOAD_FOLLOWINGS_REQUEST: {
            break;
            /* return {
              ...state,
              //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                                  // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) 
                                                                                  // 여기 없어도 됨 (내 Q&A 답글)      
            }; */
        }
        case LOAD_FOLLOWINGS_SUCCESS: {
            action.data.forEach((f) => {
              draft.followingList.push(f);
            });
            draft.hasMoreFollowing = action.data.length === 3;
            break;
            /* return {
              ...state,
              followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가
              hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                        // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. 
            }; */
        }
        case LOAD_FOLLOWINGS_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case REMOVE_FOLLOWER_REQUEST: {
            break;
            /* return {
              ...state,
            }; */
        }
        case REMOVE_FOLLOWER_SUCCESS: {
            const userIndex1 = draft.Followers.findIndex(v => v.id === action.data);
            draft.me.Followers.splice(userIndex1, 1);
            const userIndex2 = draft.followerList.findIndex(v => v.id === action.data);
            draft.me.followerList.splice(userIndex2, 1);
            break;
            /* return {
              ...state,
              me: {
                ...state.me,
                Followers: state.me.Followers.filter(v => v.id !== action.data),
              },
              followerList: state.followerList.filter(v => v.id !== action.data),
            }; */
        }
        case REMOVE_FOLLOWER_FAILURE: {
            break;
            /* return {
              ...state,
            }; */
        }
        case EDIT_NICKNAME_REQUEST: {
            draft.isEditingNickname = true;
            draft.editNicknameErrorReason = '';
            break;
            /* return {
              ...state,
              isEditingNickname: true,
              editNicknameErrorReason: '',
            }; */
        }
        case EDIT_NICKNAME_SUCCESS: {
            draft.isEditingNickname = false;
            draft.me.nickname = action.data;
            break;
            /* return {
              ...state,
              isEditingNickname: false,
              me: {
                ...state.me,
                nickname: action.data,
              },
            }; */
        }
        case EDIT_NICKNAME_FAILURE: {
            draft.isEditingNickname = false;
            draft.editNicknameErrorReason = action.error;
            break;
            /* return {
              ...state,
              isEditingNickname: false,
              editNicknameErrorReason: action.error,
            }; */
        }
        case REMOVE_POST_OF_ME: {
            const postIndex = draft.me.Posts.findIndex(v => v.id === action.data);
            draft.me.Posts.splice(postIndex, 1);
            break;
            /* return {
              ...state,
              me: {
                ...state.me,
                Posts: state.me.Posts.filter(v => v.id != action.data),
              }
            }; */
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


/* switch (action.type) {
  case LOG_IN_REQUEST: {
      return {
          ...state,
          isLoggingIn: true,
          isLoggedIn: false,
          logInErrorReason: '',
      };
  }
  case LOG_IN_SUCCESS: {
      return {
          ...state,
          isLoggingIn: false,
          me: action.data,
          isLoading: false,
      };
  }
  case LOG_IN_FAILURE: {
      return {
          ...state,
          isLoggingIn: false,
          logInErrorReason: action.error,
          me: null,
      };
  }
  case LOG_OUT_REQUEST: {
      return {
        ...state,
        isLoggingOut: true,
      };
  }
  case LOG_OUT_SUCCESS: {
      return {
        ...state,
        isLoggingOut: false,
        me: null,
      };
  }
  case SIGN_UP_REQUEST: {
      return {
          ...state,
          isSigningUp: true,
          isSignedUp: false,
          signUpErrorReason: '',
      };
  }
  case SIGN_UP_SUCCESS: {
      alert('회원가입 성공!'); 
      return {
          isSigningUp: false,
          isSignedUp: true,
      };
  }
  case SIGN_UP_FAILURE: {
      return {
          isSigningUp: false,
          signUpErrorReason: action.error,
      };
  }
  case LOAD_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case LOAD_USER_SUCCESS: {
      if (action.isThisMe) {    // (sagas/user.js)의 function*loadUser() 에서 put으로 넘겨준것이 바로, action.me
          return {
              ...state,
              me: action.data,
            };
      } else {
          return {
              ...state,
              userInfo: action.data,
            };
      }
      
  }
  case LOAD_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case FOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: [{ id: action.data }, ...state.me.Followings],
        },
      };
  }
  case FOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_REQUEST: {
      return {
        ...state,
      };
  }
  case UNFOLLOW_USER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followings: state.me.Followings.filter(v => v.id !== action.data),
        },
        followingList: state.followingList.filter(v => v.id !== action.data),
      };
  }
  case UNFOLLOW_USER_FAILURE: {
      return {
        ...state,
      };
  }
  case ADD_POST_TO_ME: {
      return {
        ...state,
        me: {
          ...state.me,
          Posts: [{ id: action.data }, ...state.me.Posts],    // 작성한 게시글을, user정보안의 게시글 정보에 넣어주기 
        },
      };
  }
  case LOAD_FOLLOWERS_REQUEST: {
      return {
        ...state,
        //hasMoreFollower: action.offset ? state.hasMoreFollower : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                          // (처음화면일때 offset이 0인것은, router.get('/:id/followers'... 에서 확인가능)      
                                                                          // 여기 없어도 됨 (내 Q&A 답글)
      };
  }
  case LOAD_FOLLOWERS_SUCCESS: {
      return {
        ...state,
        followerList: state.followerList.concat(action.data), // 기존것을 덮어쓰지 말고, 기존것에 추가 
        hasMoreFollower: action.data.length === 3,            // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                              // 방금 로드된 팔로워가 3명일때만, 더보기 버튼을 보여줄 필요가 있다.
      };
  }
  case LOAD_FOLLOWERS_FAILURE: {
      return {
        ...state,
      };
  }
  case LOAD_FOLLOWINGS_REQUEST: {
      return {
        ...state,
        //hasMoreFollowing: action.offset ? state.hasMoreFollowing : true,  // 처음화면 일때는, offset은 0 이므로, false취급을 받아서 true로 넘어간다.(=더보기 버튼을 보여준다.)                                                         
                                                                            // (처음화면일때 offset이 0인것은, router.get('/:id/followings'... 에서 확인가능) 
                                                                            // 여기 없어도 됨 (내 Q&A 답글)      
      };
  }
  case LOAD_FOLLOWINGS_SUCCESS: {
      return {
        ...state,
        followingList: state.followingList.concat(action.data),   // 기존것을 덮어쓰지 말고, 기존것에 추가
        hasMoreFollowing: action.data.length === 3,               // 방금 로드된 팔로워가 1명 또는 2명이라면, 더보기 버튼을 보여줄 필요가 없다.
                                                                  // 방금 로드된 팔로워가 3명일때만(=limit은 3이었음), 더보기 버튼을 보여줄 필요가 있다. 
      };
  }
  case LOAD_FOLLOWINGS_FAILURE: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_REQUEST: {
      return {
        ...state,
      };
  }
  case REMOVE_FOLLOWER_SUCCESS: {
      return {
        ...state,
        me: {
          ...state.me,
          Followers: state.me.Followers.filter(v => v.id !== action.data),
        },
        followerList: state.followerList.filter(v => v.id !== action.data),
      };
  }
  case REMOVE_FOLLOWER_FAILURE: {
      return {
        ...state,
      };
  }
  case EDIT_NICKNAME_REQUEST: {
    return {
      ...state,
      isEditingNickname: true,
      editNicknameErrorReason: '',
    };
  }
  case EDIT_NICKNAME_SUCCESS: {
    return {
      ...state,
      isEditingNickname: false,
      me: {
        ...state.me,
        nickname: action.data,
      },
    };
  }
  case EDIT_NICKNAME_FAILURE: {
    return {
      ...state,
      isEditingNickname: false,
      editNicknameErrorReason: action.error,
    };
  }
  case REMOVE_POST_OF_ME: {
    //const index = draft.me.Posts.findIndex(v => v.id === action.data);
    //draft.me.Posts.splice(index, 1);
    //break;
    return {
      ...state,
      me: {
        ...state.me,
        Posts: state.me.Posts.filter(v => v.id != action.data),
      }
    };
  }
  default: {
      return {
          ...state,
      };
  }
} */