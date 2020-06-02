import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import Document, { Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/* _document.js는 Hooks문법 지원 (X) */
class MyDocument extends Document {
    static getInitialProps(context) {   // 함수형이 아니라 class로 쓰게되면, getInitialProps앞에 static이 붙는다.
        const sheet = new ServerStyleSheet();
        const page = context.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));    // _app.js(=App)를 호출한다. (_document.js가 더 상위 이다.)
        const styleTags = sheet.getStyleElement();
        return { ...page, helmet: Helmet.renderStatic(), styleTags };
    }

    render() {
        const { htmlAttributes, bodyAttributes, ...helmet } = this.props.helmet;    // static getInitialProps에서 return한 props값
        const htmlAttrs = htmlAttributes.toComponent(); // 객체형식 -> 컴포넌트형식 
        const bodyAttrs = bodyAttributes.toComponent(); // 객체형식 -> 컴포넌트형식 
        // helmet : <html>,<body>를 제외한, <meta>, <script>, <style>.. 등등이 들어있는 배열객체
        return(
            <html>
                <head {...htmlAttrs}>
                    {this.props.styleTags}
                    {Object.values(helmet).map(el => el.toComponent())}    {/* 객체형식 -> 컴포넌트형식 */}
                </head>
                <body {...bodyAttrs}>
                    <Main />
                    {process.env.NODE_ENV === 'production'
                    && <script src="https://polyfill.io/v3/polyfill.min.js?features=es6,es7,es8,es9,NodeList.prototype.forEach&flags=gated" />}
                    <NextScript />
                </body>
            </html>
        );
    }
}

MyDocument.propTypes = {
    helmet: PropTypes.object.isRequired,
    styleTags: PropTypes.object.isRequired,
};

export default MyDocument;