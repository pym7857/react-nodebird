import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user); // 구조분해로 간단하게 표현 
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  /* useEffect(() => {
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
  console.log(Object.keys(context));          // ['err','req','res','pathname','query','asPath','store','isServer']
                                              // 이 중에, 'store'가 redux store이다. 
                                              // 이 'store'안에는 dispatch(), getState()가 들어있다. 
  context.store.dispatch({
    type: LOAD_MAIN_POSTS_REQUEST,
  });
};

export default Home;