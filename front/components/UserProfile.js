import React from 'react';
import { Avatar, Card } from 'antd';

const dummy = {
    nickname: '제로초',
    Post: [],
    followings: [],
    followers: [],
    isLoggedIn: false,
  };

const UserProfile = () => {
    return (
        <Card     
            actions={[
            <div key="twit">게시글<br />{dummy.Post.length}</div>,
            <div key="following">팔로잉<br />{dummy.followings.length}</div>,
            <div key="follower">팔로워<br />{dummy.followers.length}</div>,
            ]}
        >
            <Card.Meta
            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
            />
        </Card>
    );
};

export default UserProfile;