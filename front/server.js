const express = require('express');
const next = require('next');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production'; // true, false
const prod = process.env.NODE_ENV === 'production'; // true, false

// express와 next를 연결하는 방법
const app = next({ dev });
const handle = app.getRequestHandler();     // getRequestHandler(): get요청 처리기 
dotenv.config();

app.prepare().then(() => {
    const server = express();

    server.use(morgan('dev'));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cookieParser(process.env.COOKIE_SECRET));    // 백엔드와 동일하게 설정해주자 
    server.use(expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.COOKIE_SECRET,
        cookie: {
            httpOnly: true,
            secure: true,
        },
    }));

    /* 해당 태그의 게시물들 가져오기 */
    server.get('/hashtag/:tag', (req, res) => {
        return app.render(req, res, '/hashtag', { tag: req.params.tag });    // pages/hashtag.js 를 렌더링 (동적 주소 처리 가능)
                                                                             // 서버에서 이렇게, query {}를 같이 전달해줘야, 프론트에서 동적인 tag를 캐치 가능 
    });

    /* 해당 id의 유저의 정보(=남의 정보)&게시글 가져오기 */
    server.get('/user/:id', (req, res) => {
        return app.render(req, res, '/user', { id: req.params.id });    // pages/user.js 를 렌더링 (동적 주소 처리 가능)
                                                                        // 서버에서 이렇게, query {}를 같이 전달해줘야, 프론트에서 동적인 tag를 캐치 가능 
    });

    server.get('*', (req, res) => {     // *은 모든 get요청을 여기서 처리하겠다는 뜻 
        return handle(req, res);
    });

    server.listen(3061, () => {
        console.log('next-express running on port 3061');
    });
});
