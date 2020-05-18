import React, { useCallback } from 'react';
import { Avatar, Card, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import { LOG_OUT_REQUEST } from '../reducers/user';

const UserProfile = () => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {    // useCallback으로 감싸는 이유는 자식컴포넌트에 props로 전달하기 때문
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Card     
            actions={[
            <div key="twit">게시글<br />{me.Post.length}</div>,
            <div key="following">팔로잉<br />{me.followings.length}</div>,
            <div key="follower">팔로워<br />{me.followers.length}</div>,
            ]}
        >
            <Card.Meta
            avatar={<Avatar>{me.nickname[0]}</Avatar>}
            title={me.nickname}
            />
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;