import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../containers/PostCard';

const Hashtag = ({ tag }) => {
    const dispatch = useDispatch();
    const { mainPosts, hasMorePost } = useSelector(state => state.post);

    const onScroll = useCallback(() => {
        //console.log('scrollY, clientHeight, scrollHeight = ',window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
        // 설명
        // scrollY      : 이제까지 내린 y좌표값 (=현재 보이는 화면의 맨 윗부분 까지를 측정한 값)
        // clientHeight : 현재 client화면의 높이값 (=항상 일정한 값)
        // scrollHeight : 페이지의 맨 위 ~ 맨 아래 까지의 y좌표값 (=항상 일정한 값)
        // ==> 맨 마지막까지 스크롤 내렸을때, scrollY + clientHeight = scrollHeight 가 된다.
        if (window.scrollY + document.documentElement.clientHeight + 300 > document.documentElement.scrollHeigh) {  // 300 정도 남겨놓은 상태에서 
          if (hasMorePost) {
            dispatch({
              type: LOAD_HASHTAG_POSTS_REQUEST,
              lastId: mainPosts[mainPosts.length -1] && mainPosts[mainPosts.length -1].id,    // 마지막 게시글의 id를 가져옴 
              data: tag,
            });
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
    }, [mainPosts]); // onScroll함수에서 사용하고있는 state를 넣어준 것.(=의존하고 있기 때문)

    /* useEffect(() => {
        dispatch({
          type: LOAD_HASHTAG_POSTS_REQUEST,     // 해당 해시태그 게시글들 가져오기 요청 
          data: tag,
        });
    }, []);  */

    return (
        <div>
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    );
};

Hashtag.propTypes = {
    tag: PropTypes.string.isRequired,
};

/* Hashtag.getInitialProps = async (context) => {   // _app.js의 (ctx) -> Hashtag.getInitialProps에서 (context)로 받는다. 
    console.log(context.query.tag);                 // query: { tag: '가위바위보' }, 
    return { tag: context.query.tag };              // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
}; */

Hashtag.getInitialProps = async (context) => {
    //const tag = context.query.tag;                   // query: { tag: '가위바위보' }
    //console.log('tag=', tag);

    const { tag } = context.query;
    console.log('hashtag getInitialProps에서..=', tag);

    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,     // 해당 해시태그 게시글들 가져오기 요청 
        data: tag,
    });
    return { tag };                           // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
};

export default Hashtag;