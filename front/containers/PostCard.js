import React, { useState, useCallback, useEffect, memo } from 'react';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Button, Avatar, Form, Input, List, Comment, Popover } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { 
  LOAD_COMMENTS_REQUEST, 
  UNLIKE_POST_REQUEST, 
  LIKE_POST_REQUEST, 
  RETWEET_REQUEST,
  REMOVE_POST_REQUEST
} from '../reducers/post';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';
import CommentForm from './CommentForm';
import FollowButton from '../components/FollowButton';

moment.locale('ko');    // moment에 한글 설정 

const CardWrapper = styled.div`
  margin-bottom: 20px;
`; 

const PostCard = memo( ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const myId = useSelector(state => state.user.me && state.user.me.id);
  const dispatch = useDispatch();
  const isLiked = myId && post.Likers && post.Likers.find(v => v.id === myId); // 내가 '좋아요' 했었는지 

  /* onClick 했을때, 댓글창 열고닫기 */
  const onToggleComment = useCallback(() => {
    //console.log(commentFormOpened);
    setCommentFormOpened(prev => !prev);  // 현재 루프안에서 즉시 바뀌지는 않음. (현재 루프 끝나면 true로 바뀜)
                                          // 앞,뒤 console.log()로 확인 해보기 
    //console.log(commentFormOpened);
    if (!commentFormOpened) { // 닫혀있는 경우에, 댓글 아이콘 눌렀을때(onClick)
                              // commentFormOpened === false 이면..
      dispatch({
        type: LOAD_COMMENTS_REQUEST,
        data: post.id,
      });
    }
  }, [commentFormOpened]);

  /* onClick 했을때, '좋아요' 처리 */
  const onToggleLike = useCallback(() => {
    if (!myId) {
      return alert('로그인이 필요합니다.');    // 로그인 안된 사용자는 '좋아요' 클릭 불가
    }
    if (isLiked) {   // 내가 '좋아요' 이미 누른 상태이면   
      dispatch({
        type: UNLIKE_POST_REQUEST,
        data: post.id,
      });
    } else {
      dispatch({
        type: LIKE_POST_REQUEST,
        data: post.id,
          
      });
    }
  }, [myId, post && post.id, isLiked]);

  const onRetweet = useCallback(() => {
    if (!myId) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [myId, post.id]);

  /* 팔로우 하기 눌렀을때 */
  const onFollow = useCallback(userId => () => {
    //console.log(me.id, userId);   // 12, 1
    dispatch({
      type: FOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

  /* 언팔로우 하기 눌렀을때 */
  const onUnfollow = useCallback(userId => () => {
    dispatch({
      type: UNFOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

  const onRemovePost = useCallback(postId => () => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: postId,
    });
  }, []);

  return (
    <CardWrapper>
      <Card
        cover={post.Images && post.Images[0] && <PostImages images={post.Images} />}
        actions={[
            <RetweetOutlined onClick={onRetweet}/>,
            isLiked ? <HeartTwoTone twoToneColor="#eb2f96" onClick={onToggleLike}/> : <HeartOutlined onClick={onToggleLike}/>,
            <MessageOutlined onClick={onToggleComment}/>,
            <Popover
              key="ellipsis"
              content={(
                <Button.Group>
                  {myId && post.UserId === myId
                    ? (
                      <>
                        <Button>수정</Button>
                        <Button type="danger" onClick={onRemovePost(post.id)}>삭제</Button>
                      </>
                    )
                    : <Button>신고</Button>}
                </Button.Group>
              )}
            >
              <EllipsisOutlined />
            </Popover>,
        ]}
        title={post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다.` : null}
        extra={<FollowButton post={post} onUnfollow={onUnfollow} onFollow={onFollow} />}
      >
        {/* 리트윗 한 경우에는 Card 안에 Card를 하나 더 만들어 준다. */}
        {post.RetweetId && post.Retweet 
          ? (
            <Card
              cover={post.Retweet.Images[0] && <PostImages images={post.Retweet.Images} />}
            >
              <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
              <Card.Meta
                avatar={(
                  <Link
                    href={{ pathname: '/user', query: { id: post.Retweet.User.id } }}
                  >
                    <a><Avatar style={{ backgroundColor: post.Retweet.User.color || 'gray' }}>{post.Retweet.User.nickname[0]}</Avatar></a>
                  </Link>
                )}
                title={post.Retweet.User.nickname}
                description={<PostCardContent postData={post.Retweet.content} />} // a tag x -> Link
              />
            </Card>
          )
          : (
            <>
              <span style={{ float: 'right' }}>{moment(post.createdAt).format('YYYY.MM.DD.')}</span>
              <Card.Meta
                avatar={(
                  <Link href={{ pathname: '/user', query: { id: post.User.id } }}>
                    <a>
                      <Avatar style={{ backgroundColor: post.User.color || 'gray' }}>
                        {post.User.nickname[0]}         {/* 닉네임의 첫글자만 보여준다 */}
                      </Avatar>
                    </a>                   
                  </Link>
                )}
                title={post.User.nickname}
                description={<pre><PostCardContent postData={post.content}/></pre>}
              />
            </>
          )}
      </Card>

      {commentFormOpened && (
        <>
          <CommentForm post={post}/>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }}>
                      <a>
                        <Avatar style={{ backgroundColor: item.User.color || 'gray' }}>
                          {item.User.nickname[0]}
                        </Avatar>
                      </a>
                    </Link>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
});

PostCard.propTypes = {
    post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    //createdAt: PropTypes.object,
    createdAt: PropTypes.string,
  }),
};

export default PostCard;