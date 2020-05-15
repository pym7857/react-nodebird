import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import AppLayout from '../components/AppLayout';
import rootSaga from '../sagas';
import reducer from '../reducers';  // ../reducers/index.js와 동일 (index.js는 생략 가능)
                                    // rootReducer인데 reducer이름으로 가져옴 (가져오는 이름은 이처럼 맘대로 가능)

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    Component: PropTypes.elementType.isRequired, // isRequired 넣으면 실수로 props안넣었을 때 경고를 해줌
    store: PropTypes.object.isRequired,
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
    sagaMiddleware.run(rootSaga);   // rootSaga를 sagaMiddleware에 연결 
    return store;
};

export default withRedux(configureStore)(NodeBird);