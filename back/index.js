const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models'); // index.js경로는 생략가능 
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');     // 게시글 한개 대상
const postsAPIRouter = require('./routes/posts');   // 게시글 여러개 대상

dotenv.config();    // dotenv 실행 
const app = express();
db.sequelize.sync(); // 알아서 models폴더안에 정의해놓은 db테이블들 생성해줌 
passportConfig();

app.use(morgan('dev'));
app.use(express.json());                            // 프론트에서 백으로 보낸 데이터를 req.body에 넣어주는 역할
app.use(express.urlencoded({ extended: true }));    // 프론트에서 백으로 보낸 데이터를 req.body에 넣어주는 역할
app.use(cors({
    origin: true,       // origin: 'http://localhost:3000'로도 가능 
    credentials: true,
}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
        httpOnly: true,
        secure: false,
    },
    name: 'abcd',
}));
app.use(passport.initialize());
app.use(passport.session()); // 반드시 express session밑에 적어줘야 한다. (express session이 먼저 실행되어야 passport session이 원활하게 진행가능)

app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);

app.get('/', (req, res) => {
    res.send('Hello!');
});

app.listen(3065, () => {
    console.log('server is running on http://localhost:3065');
});