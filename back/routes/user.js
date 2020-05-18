const express = require('express');
const bcrypt = require('bcrypt');
const db = require('../models');

const router = express.Router();

router.get('/', (req, res) => {

});

/* 회원가입 */
router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12); // 비밀번호 암호화(salt는 10~13)
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        return res.json(newUser);
    } catch (e) {
        console.error(e);
        return next(e); // 알아서 프론트에 에러 났다고 알려줌 
    }
});

/* 다른 유저의 정보 가져오기 */
router.get('/:id', (req, res) => {

});

router.post('/logout', (req, res) => {

});

router.post('/login', (req, res, next) => {

});

router.get('/:id/follow', (req, res) => {

});

router.post('/:id/follow', (req, res) => {

});

router.delete('/:id/follow', (req, res) => {

});

router.delete('/:id/follower', (req, res) => {

});

router.get('/:id/posts', (req, res) => {

});

module.exports = router;