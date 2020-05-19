const passport = require('passport');
const db = require('../models');
const local = require('./local');

module.exports = () => {
    /* 사용자 정보 객체를 세션에 저장 */
    passport.serializeUser((user, done) => {
        return done(null, user.id); // user의 고유id
    });
    /* 세션에 저장한 아이디를 이용해서, 사용자 정보 객체를 불러옴 */
    /* 매 요청시 실행되는 부분 */
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await db.User.findOne({
                where: { id },
            });
            return done(null, user); // req.user에 저장 
        } catch (e) {
            console.error(e);
            return done(e);
        }
    });

    local();
};