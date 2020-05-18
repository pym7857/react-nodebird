import React from 'react';
import { useSelector } from 'react-redux';

import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

const Home = () => {
  const { isLoggedIn } = useSelector(state => state.user); // 구조분해로 간단하게 표현 
  const { mainPosts } = useSelector(state => state.post);

  return (
    <div>
      {/* 글 쓰기 */}
      {isLoggedIn && <PostForm />}

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