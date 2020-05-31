import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { LOAD_POST_REQUEST } from '../reducers/post';

/* 개별 포스트 불러오는 페이지 */
/* 검색 엔진이 컨텐츠를 어떻게 긁어가는지 테스트 하기 위한 페이지 */
const Post = ({ id }) => {
    const { singlePost } = useSelector(state => state.post);

    const backURL = 'http://localhost:3067';
    return (
        <>
            <Helmet 
                title={`${singlePost.User.nickname}님의 글`}
                description={singlePost.content}
                meta={[{
                    name: 'description', content: singlePost.content,
                }, {
                    property: 'og:title', content: `${singlePost.User.nickname}님의 게시글`,
                }, {
                    property: 'og:description', content: singlePost.content,
                }, {
                    property: 'og:image', content: singlePost.Images[0] && `${backURL}/${singlePost.Images[0].src}`,
                }, {
                    property: 'og:url', content: `${backURL}/post/${id}`,
                }]}
            />
            <div>{ singlePost.content }</div>
            <div>{ singlePost.User.nickname }</div>
            <div>
                { singlePost.Images[0] && <img src={`${backURL}/${singlePost.Images[0].src}`} /> }
            </div>
        </>
    );
};

Post.getInitialProps = async (context) => {
    // [SSR] dispatch
    context.store.dispatch({
        type: LOAD_POST_REQUEST,
        data: context.query.id,
    });
    return { id: parseInt(context.query.id, 10) };
};

Post.propTypes = {
    id: PropTypes.number.isRequired,
};

export default Post;