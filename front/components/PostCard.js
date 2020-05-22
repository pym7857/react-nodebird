import React, { useState, useCallback, useEffect } from 'react';
import { RetweetOutlined, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card, Icon, Button, Avatar, Form, Input, List, Comment } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENT_REQUEST, LOAD_COMMENTS_REQUEST } from '../reducers/post';

const PostCard = ({ post }) => {
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [commentText, setCommentText] = useState('');
  const { me } = useSelector(state => state.user);
  const { commentAdded, isAddingComment } = useSelector(state => state.post);
  const dispatch = useDispatch();

  /* onClick -> 댓글창 열고닫기 */
  const onToggleComment = useCallback(() => {
    console.log(commentFormOpened);
    setCommentFormOpened(prev => !prev);  // 현재 루프안에서 즉시 바뀌지는 않음. (현재 루프 끝나면 true로 바뀜)
                                          // 앞,뒤 console.log()로 확인 해보기 
    console.log(commentFormOpened);
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

  useEffect(() => {
    setCommentText('');
  }, [commentAdded === true]);

  const onChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  }, []);

  return (
    <div>
      <Card
        key={+post.createdAt}
        cover={post.img && <img alt="example" src={post.img} />}
        actions={[
            <RetweetOutlined />,
            <HeartOutlined />,
            <MessageOutlined onClick={onToggleComment}/>,
            <EllipsisOutlined />,
        ]}
        extra={<Button>팔로우</Button>}
      >
        <Card.Meta
          avatar={<Link href={{ pathname: '/user', query: { id: post.User.id } }}><a><Avatar>{post.User.nickname[0]}</Avatar></a></Link>}
          title={post.User.nickname}
          description={(
            <div>
              {post.content.split(/(#[^\s]+)/g).map((v) => {
                if (v.match(/#[^\s]+/)) {  // 쪼개진 애가 해시태그면 링크로 바꿔주기
                  return (
                    <Link href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} key={v}><a>{v}</a></Link>
                  );
                }
                return v; // 해시태그(#)가 아니라면, 그냥 문자열만 리턴 
              })}
            </div>
          )}
        />
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
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    User: PropTypes.object,
    content: PropTypes.string,
    img: PropTypes.string,
    createdAt: PropTypes.object,
  }),
};

export default PostCard;