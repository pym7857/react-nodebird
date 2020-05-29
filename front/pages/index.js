import React, { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user); // 구조분해로 간단하게 표현 
  const { mainPosts, hasMorePost } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const countRef = useRef([]);      // 보냈던 lastId들 기억하는 배열: []

  const onScroll = useCallback(() => {
    //console.log('scrollY, clientHeight, scrollHeight = ',window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
    // 설명
    // scrollY      : 이제까지 내린 y좌표값 (=현재 보이는 화면의 맨 윗부분 까지를 측정한 값)
    // clientHeight : 현재 client화면의 높이값 (=항상 일정한 값)
    // scrollHeight : 페이지의 맨 위 ~ 맨 아래 까지의 y좌표값 (=항상 일정한 값)
    // ==> 맨 마지막까지 스크롤 내렸을때, scrollY + clientHeight = scrollHeight 가 된다.
    if (window.scrollY + document.documentElement.clientHeight + 300 > document.documentElement.scrollHeight) {  // 300 정도 남겨놓은 상태에서 
      if (hasMorePost) {
        const lastId = mainPosts[mainPosts.length -1].id
        if (!countRef.current.includes(lastId)) {   // 한번 보냈었던 lastId는 다시 보내지 않도록 (=동일한 REQUEST 2번씩 일어나는 현상 방지)
          dispatch({
            type: LOAD_MAIN_POSTS_REQUEST,
            lastId: lastId,    // 마지막 게시글의 id를 가져옴 
          });
        }
        countRef.current.push(lastId);  // 보낸 lastId 들을 기록
      }
      // hasMorePost가 false이면, 더이상 REQUEST하지 않게 된다.
      // 하지만, 이미 scroll감지 부분에서 너무 많은 REQUEST를 보냈다. -> sagas/post.js로 가서 throttle 설정을 해주자 
    }
  }, [hasMorePost, mainPosts.length]);

  /* 프론트에서 마우스 스크롤 감지위해서 useEffect() 사용 */
  useEffect(() => {
    window.addEventListener('scroll', onScroll);      // 마우스 스크롤 감지 
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts.length]); // onScroll함수에서 사용하고있는 state를 넣어준 것.(=의존하고 있기 때문)

  /* useEffect(() => {                -> SSR을 위해, Home.getInitialProps에 넣어 주자 
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []); */

  return (
    <div>
      {/* 글 쓰기 */}
      {me && <PostForm />}

      {/* 게시글 보기 */}
      {mainPosts.map((c) => {
        return (
          <PostCard key={c} post={c} />
        )
      })}
    </div>
  );
};

Home.getInitialProps = async (context) => {   // _app.js의 (context.ctx)를 각 컴포넌트에서는 (context)로 받는다.
  //console.log(Object.keys(context));          // ['err','req','res','pathname','query','asPath','store','isServer']
                                              // 이 중에, 'store'가 redux store이다. 
                                              // 이 'store'안에는 dispatch(), getState()가 들어있다. 
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST,
  });
};

export default Home;