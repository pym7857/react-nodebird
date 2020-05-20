import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_MAIN_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const { me } = useSelector(state => state.user); // 구조분해로 간단하게 표현 
  const { mainPosts } = useSelector(state => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: LOAD_MAIN_POSTS_REQUEST,
    });
  }, []); // ComponentDidMount

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
export default Home;