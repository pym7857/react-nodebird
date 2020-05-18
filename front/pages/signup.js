import React, { useState, useCallback, useEffect } from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { SIGN_UP_REQUEST } from '../reducers/user';

// 중복되는 로직의 이벤트 처리 -> 커스텀 훅
// export해놓으면 다른곳에서 모듈처럼 사용가능 !
export const useInput = (initValue = null) => {     
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) =>{
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);
    

    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');

    const dispatch = useDispatch();
    const { isSigningUp, me } = useSelector(state => state.user);

    // 회원가입 창에서 로그인 해버리는 경우, 메인페이지로 redirect
    useEffect(() => {
        if (me) {
            alert('로그인 되었습니다. 메인페이지로 이동합니다.')
            Router.push('/');
        }
    }, [me && me.id]);

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        if (password !== passwordCheck) {
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        return dispatch({   // front/sagas/user.js의 sighUp함수의 매개변수인 aciton에 data객체가 담긴다.
            type: SIGN_UP_REQUEST,
            data: {
                userId: id,
                password,
                nickname: nick,
            },
        });
    }, [id, nick, password, passwordCheck, term]);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(e.target.value !== password); // 비밀번호 확인 칠때마다, 비밀번호와 같은지 확인
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <>
            <Form onSubmit={onSubmit} style={{ padding: 50 }}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input name="user-id" value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호 확인</label>
                    <br />
                    <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
                        OOO 약관에 동의합니다.
                    </Checkbox>
                    {termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{ maringTop: 10 }}>
                    <Button type="primary" htmlType="submit" loading={isSigningUp}>가입하기</Button>
                </div>
            </Form>
        </>
    );
};

export default Signup;