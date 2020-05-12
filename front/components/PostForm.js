import React from 'react';
import { Form, Input, Button } from 'antd';

const dummy = {
    isLoggedIn: true,
    imagePaths: [],
    mainPosts: [{
      User: {
        id: 1,
        nickname: '제로초',
      },
      content: '첫 게시글',
      img: 'https://image.yes24.com/Goods/62597864/XL',
    }],
  };

const PostForm = () => {
    return (
        <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data">
        <Input.TextArea maxLength={140} placeholder="어떤 신기한 일이 있었나요?" />
        <div>
          <input type="file" multiple hidden />
          <Button>이미지 업로드</Button>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
        </div>  

        {/* 업로드할 이미지 미리보기 */}
        <div>
          {dummy.imagePaths.map((v, i) => {
            return (
              <div key={v} style={{ display: 'inline-block' }}>
                <img src={'http://localhost:3065/' + v} style={{ width: '200px' }} alt={v} /> 
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