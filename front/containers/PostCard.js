import React, { useState, useCallback, useEffect } from 'react';
import { RetweetOutlined, HeartOutlined, HeartTwoTone, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Button, Avatar, Form, Input, List, Comment, Popover } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment';

import { 
  ADD_COMMENT_REQUEST, 
  LOAD_COMMENTS_REQUEST, 
  UNLIKE_POST_REQUEST, 
  LIKE_POST_REQUEST, 
  RETWEET_REQUEST,
  REMOVE_POST_REQUEST
} from '../reducers/post';
import { FOLLOW_USER_REQUEST, UNFOLLOW_USER_REQUEST } from '../reducers/user';
import PostImages from '../components/PostImages';
import PostCardContent from '../components/PostCardContent';

moment.locale('ko');    // moment에 한글 설정 

const CardWrapper = styled.div`
  margin-bottom: 20px;
`; 

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  const isLiked = me && post.Likers && post.Likers.find(v => v.id === me.id); // 내가 '좋아요' 했었는지 

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

  /* 댓글 업로드 */
  const onSubmitComment = useCallback((e) => {
    e.preventDefault();
    if (!me) {
      return alert('댓글을 작성하려면, 로그인이 필요합니다.');
    }
    return dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        postId: post.id,
        content: commentText,
      },
    });
  }, [me && me.id, commentText]);

  /* 댓글 작성 완료되면, 댓글 입력창 비워주기 */
  useEffect(() => {
    setCommentText('');
  }, [commentAdded === true]); 

  /* 댓글이 작성되는 중에 */
  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  /* onClick 했을때, '좋아요' 처리 */
  const onToggleLike = useCallback(() => {
    if (!me) {
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
  }, [me && me.id, post && post.id, isLiked]);

  const onRetweet = useCallback(() => {
    if (!me) {
      return alert('로그인이 필요합니다.');
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [me && me.id, post.id]);

  const onFollow = useCallback(userId => () => {
    dispatch({
      type: FOLLOW_USER_REQUEST,
      data: userId,
    });
  }, []);

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
                  {me && post.UserId === me.id
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
        extra={
          !me || post.User.id === me.id
          ? null
          : me.Followings && me.Followings.find(v => v.id === post.User.id)
            ? <Button onClick={onUnfollow(post.User.id)}>언팔로우</Button>
            : <Button onClick={onFollow(post.User.id)}>팔로우</Button>
        }
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
                    <a><Avatar>{post.Retweet.User.nickname[0]}</Avatar></a>
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
                    <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                  </Link>
                )}
                title={post.User.nickname}
                description={<PostCardContent postData={post.content}/>}
              />
            </>
          )}
      </Card>

      {commentFormOpened && (
        <>
          <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
          </Form>
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={item => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Link href={{ pathname: '/user', query: { id: item.User.id } }}><a><Avatar>{item.User.nickname[0]}</Avatar></a></Link>}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

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