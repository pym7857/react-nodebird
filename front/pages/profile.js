import React, { useEffect, useCallback } from 'react';
import { Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWINGS_REQUEST,
    REMOVE_FOLLOWER_REQUEST,
    UNFOLLOW_USER_REQUEST,
} from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const dispatch = useDispatch();
    const { me, followingList, followerList } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    useEffect(() => {
        if (me) {
            dispatch({
                type: LOAD_FOLLOWERS_REQUEST,
                data: me.id,
            });
            dispatch({
                type: LOAD_FOLLOWINGS_REQUEST,
                data: me.id,
            });
            dispatch({
                type: LOAD_USER_POSTS_REQUEST,      // 내가 쓴 게시글들 가져오기 요청 
                data: me.id,
            });
        }
    }, [me && me.id]);

    const onUnfollow = useCallback(userId => () => {
        dispatch({
            type: UNFOLLOW_USER_REQUEST,
            data: userId,
        });
    }, []);

    const onRemoveFollower = useCallback(userId => () => {
        dispatch({
            type: REMOVE_FOLLOWER_REQUEST,
            data: userId,
        });
    }, []);

    return (
        <div>
            {/* 닉네임 수정폼 */}
            <NicknameEditForm />

            {/* 팔로잉 목록 */}
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로잉 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={followingList}
                renderItem={item => (
                    <List.Item style={{ maringTop: '20px' }}>
                        <Card actions={[<StopOutlined key="stop" onClick={onUnfollow(item.id)}/>]}>
                            <Card.Meta description={item.nickname} />
                        </Card>
                    </List.Item>
                )}
            />

            {/* 팔로워 목록 */}
            <List 
                style={{ marginBottom: '20px' }}
                grid={{ gutter: 4, xs: 2, md: 3 }}
                size="small"
                header={<div>팔로워 목록</div>}
                loadMore={<Button style={{ width: '100%' }}>더 보기</Button>}
                bordered
                dataSource={followerList}
                renderItem={item => (
                    <List.Item style={{ maringTop: '20px' }}>
                        <Card actions={[<StopOutlined key="stop" onClick={onRemoveFollower(item.id)}/>]}>
                            <Card.Meta description={item.nickname} />
                        </Card>
                    </List.Item>
                )}
            />

            {/* '내가 쓴' 게시글 목록 */}
            <div>
                {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
                ))}
            </div>
        </div>
    );
};

export default Profile;