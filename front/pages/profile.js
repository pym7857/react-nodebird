import React, { useCallback } from 'react';
import { Button, List, Card } from 'antd';
import { StopOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import {
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_FOLLOWERS_REQUEST,
    REMOVE_FOLLOWER_REQUEST,
    UNFOLLOW_USER_REQUEST,
} from '../reducers/user';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';
import NicknameEditForm from '../components/NicknameEditForm';

const Profile = () => {
    const dispatch = useDispatch();
    const { followingList, followerList, hasMoreFollower, hasMoreFollowing } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);
    
    /* useEffect(() => {
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
    }, [me && me.id]); */

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

    /* [팔로윙] 더보기 버튼 눌렀을때 */
    const loadMoreFollowings = useCallback(() => {
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
            offset: followingList.length,
        })
    }, [followingList.length]);

    /* [팔로워] 더보기 버튼 눌렀을때 */
    const loadMoreFollowers = useCallback(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
            offset: followerList.length,
        })
    }, [followerList.length]);

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
                loadMore={hasMoreFollowing && <Button style={{ width: '100%' }} onClick={loadMoreFollowings}>더 보기</Button>}
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
                loadMore={hasMoreFollower &&<Button style={{ width: '100%' }} onClick={loadMoreFollowers}>더 보기</Button>}
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

Profile.getInitialProps = async (context) => {
    const state = context.store.getState();
    /* 이 직전에 (_app.js)LOAD_USER_REQUEST */
    context.store.dispatch({
        type: LOAD_FOLLOWERS_REQUEST,              // 첫 화면일때, 팔로워 로드 request
        data: state.user.me && state.user.me.id,
    });
    context.store.dispatch({
        type: LOAD_FOLLOWINGS_REQUEST,             // 첫 화면일때, 팔로잉 로드 request
        data: state.user.me && state.user.me.id,
    });
    context.store.dispatch({
        type: LOAD_USER_POSTS_REQUEST,             // 첫 화면일때, 게시글 로드 request
        data: state.user.me && state.user.me.id,
    });

    /* 여기서 LOAD_USER_SUCCESS 되서, me가 생김 */
};

export default Profile;