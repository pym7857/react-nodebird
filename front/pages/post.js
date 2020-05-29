import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {  } from '../reducers/post';

/* 개별 포스트 불러오는 페이지 */
const Post = ({ id }) => {
    const { post } = useSelector(state => state.post);
    return (
        <>
            <div>post</div>
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