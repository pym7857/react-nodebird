import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Button, Row, Col } from 'antd';
import { useSelector, useDispatch } from 'react-redux';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {

  const { me } = useSelector(state => state.user);
  const dispatch = useDispatch();

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
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }}/>
        </Menu.Item>
      </Menu>
      {!me && <Link href="/signup"><a><Button>회원가입</Button></a></Link>}
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

        </Col>
      </Row>
      
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.elementType,
};

export default AppLayout;