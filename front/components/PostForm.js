import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST } from '../reducers/post';

const PostForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);

    // 글 작성 후, TextArea 비워주기 
    useEffect(() => {
      setText('');
    }, [postAdded === true]);

    const onSubmitForm = useCallback((e) => { // props로 들어가는 함수는 무조건 useCallback
      e.preventDefault();
      dispatch({
          type: ADD_POST_REQUEST,
          data: {
            text,
          },
        });
    }, []);

    const onChangeText = useCallback((e) => { // props로 들어가는 함수는 무조건 useCallback
      setText(e.target.value);
    }, []);

    return (
      <Form onSubmit={onSubmitForm} style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
        {/* 글쓰기 */}
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
        <div>
          <input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>  

        {/* 업로드할 이미지 미리보기 */}
        <div>
          {imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} /> 
                <div>
                  <Button>제거</Button>
                </div>
              </div>
            )
          })}
        </div>
      </Form>
    );
};

export default PostForm;