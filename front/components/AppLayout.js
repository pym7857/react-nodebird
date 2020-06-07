import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col } from 'antd';
import { TwitterOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import LoginForm from '../containers/LoginForm';
import UserProfile from '../containers/UserProfile';

const AppLayout = ({ children }) => {

  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const onSearch = (value) => {
    /* 프론트에서의 동적 라우팅 */
    Router.push({ pathname: '/hashtag', query: { tag: value } }, `hashtag/${value}`);   // 내부적으로는 pathname: '/hashtag', query: { tag: value } } 로 접근
                                                                                        // 외부적으로는 `hashtag/${value}`로 보인다.
  };

  /* useEffect(() => {
    if (!me) {  // 내 정보 없다면 
      dispatch({
        type: LOAD_USER_REQUEST,  // 내 정보 불러오기 ( 쿠키를 이용하여.. -> sagas/user.js의 loadUserAPI() 참조 )
                                  // 로그인을 안한 상태면, 쿠키도 없을테니 LOAD_USER_REQUEST 불가 
      });
    }
  }, []); */ 

  return (
    <div>
      {/* 로고 */}
      <div style={{ float: 'left', width: '250px'}}>
        <Link href="/">
          <a>
            <TwitterOutlined 
              style={{ 
                float: 'left', 
                fontSize: '45px', 
                marginLeft: '20px', 
                marginRight: '0px'
              }}
            />
            <h1 style={{ float: 'left'}}>undefined</h1>
          </a>
        </Link>
      </div>
      {/* 메뉴 */}
      <Menu mode="horizontal" style={{ verticalAlign: 'middle', marginTop: '5px' }}>
        <Menu.Item key="home">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
        <Menu.Item key=""><Link href="/"><a>Chat</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search 
            enterButton 
            style={{ verticalAlign: 'middle', width: '400px'}}
            placeholder='#해시태그 검색'
            onSearch={onSearch}
          />
        </Menu.Item>
      </Menu>
      {/*{!me && <Link href="/signup"><a><Button>회원가입</Button></a></Link>}*/}
      {/* 화면 N분할 */}
      <Row gutter={10}>   {/* gutter={10} : xs, sm 등으로 N등분한 화면의 간격을 넓혀주는 역할  */}
        <Col xs={24} md={6}>
          {me
            ? <UserProfile />
            :
            <LoginForm />
          }
        </Col>
        <Col xs={24} md={12}>
          칠드런 {children}
        </Col>
        <Col xs={24} md={6}>
          오른쪽
        </Col>
      </Row>
      
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.elementType,
};

export default AppLayout;