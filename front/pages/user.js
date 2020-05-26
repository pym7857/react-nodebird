import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Card } from 'antd';

import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import { LOAD_USER_REQUEST } from '../reducers/user';
import PostCard from '../components/PostCard';

const User = ({ id }) => {
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);
    const { userInfo } = useSelector(state => state.user);

    /* useEffect(() => {
        dispatch({
          type: LOAD_USER_REQUEST,          // 남의 정보
          data: id,
        });
        dispatch({
          type: LOAD_USER_POSTS_REQUEST,    // 남의 게시글 
          data: id,
        });
    }, []);  */

    return (
        <div>
            {/* 남의 정보 */}
            {userInfo           
                ? (
                    <Card
                        actions={[
                            <div key="twit">
                                짹짹
                                <br />
                                {userInfo.Posts}
                            </div>,
                            <div key="following">
                                팔로잉
                                <br />
                                {userInfo.Followings}
                            </div>,
                            <div key="follower">
                                팔로워
                                <br />
                                {userInfo.Followers}
                            </div>,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                            title={userInfo.nickname}
                        />
                    </Card>
                )
                : null}
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    );
};

User.propTypes = {
    id: PropTypes.number.isRequired,
};

/* User.getInitialProps = async (context) => {          // _app.js의 (ctx) -> Hashtag.getInitialProps에서 (context)로 받는다. 
    console.log(context.query.id);
    return { id: parseInt(context.query.id, 10) };      // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
}; */

User.getInitialProps = async (context) => { 
    console.log('id=', context.query.id);
    const id = parseInt(context.query.id, 10);

    context.store.dispatch({
        type: LOAD_USER_REQUEST,          // 남의 정보
        data: id,
    });

    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,    // 남의 게시글 
        data: id,
    });
    return { id };                        // return 값이 (_app.js)NodeBird.getInitialProps의 pageProps에 담긴다
};

export default User;