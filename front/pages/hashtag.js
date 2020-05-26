import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';

const Hashtag = ({ tag }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);

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
    const tag = context.query.tag;
    console.log('tag=', tag);

    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,     // 해당 해시태그 게시글들 가져오기 요청 
        data: tag,
    });
    return { tag };                           // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
};

export default Hashtag;