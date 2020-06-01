import { Button, Form, Input } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ADD_COMMENT_REQUEST } from '../reducers/post';

const CommentForm = ({ post }) => {
    const [commentText, setCommentText] = useState('');
    const { commentAdded, isAddingComment } = useSelector(state => state.post);
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

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

    return (
        <Form onSubmit={onSubmitComment}>
            <Form.Item>
              <Input.TextArea rows={4} value={commentText} onChange={onChangeCommentText} />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isAddingComment}>삐약</Button>
        </Form>
    );
};

CommentForm.propTypes = {
    post: PropTypes.object.isRequired,
};

export default CommentForm;