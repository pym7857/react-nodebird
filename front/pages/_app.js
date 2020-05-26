import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import axios from 'axios';

import AppLayout from '../components/AppLayout';
import rootSaga from '../sagas';
import reducer from '../reducers';  // ../reducers/index.js와 동일 (index.js는 생략 가능)
import { LOAD_USER_REQUEST } from '../reducers/user';
                                    // rootReducer인데 reducer이름으로 가져옴 (가져오는 이름은 이처럼 맘대로 가능)

const NodeBird = ({ Component, store, pageProps }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
                <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
            </Head>
            <AppLayout>
                <Component {...pageProps}/>
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired, // isRequired 넣으면 실수로 props안넣었을 때 경고를 해줌
    store: PropTypes.object.isRequired,
    pageProps: PropTypes.object.isRequired,
};

/* NodeBird.getInitialProps = async (context) => {
    //console.log(context);
    const { ctx } = context;
    let pageProps = {};
    if (context.Component.getInitialProps) {
        pageProps = await context.Component.getInitialProps(ctx);
    } 
    return { pageProps };
}; */

NodeBird.getInitialProps = async (context) => {
    //console.log(context);
    const { ctx, Component } = context;
    let pageProps = {};

    /* SSR일때는, 우리가 직접 cookie 넣어줘야 한다. */
    const cookie = ctx.isServer ? ctx.req.headers.cookie : '';    // 서버환경일때, ctx.req.headers안에 cookie 가 들어있다.
    /* 서버 환경이고, cookie가 존재할때만 아래 작업 실행 */
    if (ctx.isServer && cookie) {
        axios.defaults.headers.Cookie = cookie;     // axios에 cookie 데이터를 기본으로 심어준다. (SSR일때는 브라우저(=클라이언트)가 없기 때문에, 프론트'서버'-> 백 으로 쿠키 보내는 방법)
                                                    // axios.defaults 해주면 모든 axios에 적용이 된다. 
    }
    /* 내 정보 먼저 가져온 후에, */
    const state = ctx.store.getState();
    if (!state.user.me) {
        ctx.store.dispatch({
            type: LOAD_USER_REQUEST,
        });
    }

    /* 다른 컴포넌트들을 호출한다. */
    if (Component.getInitialProps) {                        // Component각각에 getInitialProps가 있으면 실행을 해주겠다는 뜻 
        pageProps = await Component.getInitialProps(ctx);   // _app.js의 (context.ctx)를 각 컴포넌트에서는 (context)로 받는다. 
    } 
    
    return { pageProps };
};

/* 위 const NodeBird에 store를 인자로 넣어주는 부분 -> 이 부분은 그냥 암기 ! */
const configureStore = (initialState, options) => {   // initialState는 매개변수로서, redux에서 넣어줍니다.
    const sagaMiddleware = createSagaMiddleware(); // redux-saga에서 미리 만들어놨기 때문에 그냥 갖다쓰면된다.
    
    /* 리덕스에 없는 기능 추가시키고 싶을때 middleware사용  ex)Redux Dev Tools */
    const middlewares = [sagaMiddleware]; 
    /* enhancer : middleware들을 적용(apply)해서, 리덕스의 기능을 향상시키는것 */
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares)) // 실제 배포시에는 REDUX_DEVTOOLS 있으면 X
        : compose(   /* compose : 미들웨어 적용할때, 미들웨어끼리 합성시켜줌 */
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );                  
    /* store = reducer + state */                               
    const store = createStore(reducer, initialState, enhancer);   
    //sagaMiddleware.run(rootSaga);   // rootSaga를 sagaMiddleware에 연결 
    store.sagaTask = sagaMiddleware.run(rootSaga);   // [SSR]store.sagaTask를 withReduxSaga가 필요로 함. 
    return store;
};

export default withRedux(configureStore)(withReduxSaga(NodeBird));