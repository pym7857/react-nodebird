import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { ADD_POST_REQUEST, UPLOAD_IMAGES_REQUEST, REMOVE_IMAGE } from '../reducers/post';

const PostForm = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    const { imagePaths, isAddingPost, postAdded } = useSelector(state => state.post);
    const imageInput = useRef();

    // 글 작성 후, TextArea 비워주기 
    useEffect(() => {
      setText('');
    }, [postAdded === true]);

    const onSubmitForm = useCallback((e) => { // props로 들어가는 함수는 무조건 useCallback
      e.preventDefault();
      if (!text || !text.trim()) {    // trim(): 스페이스바만 치는 사람들 있기때문에 넣어준다.
        return alert('내용을 입력해주세요!');
      }
      /* FormData 사용 */
      const formData = new FormData();
      imagePaths.forEach((el) => {
        formData.append('image', el);   // 이건 이미지 파일(x). 이미지 경로(=text) 이다. 
      });
      formData.append('content', text);
      dispatch({
          type: ADD_POST_REQUEST,
          data: formData,
      });
    }, [text, imagePaths]); // useCallback에서 사용된 state는 여기에 무조건 넣어줘야한다.

    const onChangeText = useCallback((e) => { // props로 들어가는 함수는 무조건 useCallback
      setText(e.target.value);
    }, []);

    const onChangeImages = useCallback((e) => {
      console.log(e.target.files);            // e.target.files안에 업도드 할 파일이 들어있다. (=유사배열)
      /* FormData 사용 */
      const imageFormData = new FormData();   // FormData()를 브라우저에서 제공 
      [].forEach.call(e.target.files, (f) => {
        imageFormData.append('image', f);     // AJAX를 위해서 FormData객체에 일일히 담아준다. (SPA 유지하기 위해)
                                              // append할때 정해준 'image'라는 변수는 서버에서도 쓰이게된다.
      });
      dispatch({
        type: UPLOAD_IMAGES_REQUEST,
        data: imageFormData,
      });
    }, []);

    const onClickImageUpload = useCallback(() => {
      imageInput.current.click();
    }, [imageInput.current]);

    const onRemoveImage = useCallback(index => () => {
      dispatch({
        type: REMOVE_IMAGE,
        index,
      });
    }, []);

    return (
      <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm} >
        {/* 글쓰기 */}
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" value={text} onChange={onChangeText} />
        <div>
          <input type="file" multiple hidden ref={imageInput} onChange={onChangeImages}/>
          <Button onClick={onClickImageUpload}>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>  

        {/* 업로드할 이미지 미리보기 */}
        <div>
          {imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={`http://localhost:3067/${v}`} style={{ width: '200px' }} alt={v} /> 
                <div>
                  <Button onClick={onRemoveImage(i)}>제거</Button>
                </div>
              </div>
            )
          })}
        </div>
      </Form>
    );
};

export default PostForm;