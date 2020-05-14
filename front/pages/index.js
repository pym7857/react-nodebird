import React, { useEffect } from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction, logoutAction } from '../reducers/user';

const Home = () => {
  /* Redux에서의 hooks문법 (@7.1이상 버전부터 가능)
     - useSelector(): hooks의 useState와 동일
     - dispatch(): useState안의 setState와 동일  
  */
  const dispatch = useDispatch(); // dispatch: 액션을 dispatch하는 함수 
  //const user = useSelector(state => state.user);  // state => state.user: 첫번째 state는 '전체'state를 뜻함(즉, reducers/index.js), 두번째 state=>user는 reducers/user.js의 initialState를 뜻함
  //console.log(user);  // 'isLoggedIn','user'가 state로 들어있는것을 확인가능 
  const { isLoggedIn } = useSelector(state => state.user); // 구조분해로 간단하게 표현 
  const { mainPosts } = useSelector(state => state.post);

  useEffect(() => {
    //dispatch(loginAction);
  }, []);   // []:비어있으면 componentDidMount와 동일 

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