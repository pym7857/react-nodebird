const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');
const bcrypt = require('bcrypt');
const db = require('../models');

module.exports = () => {
    passport.use(new LocalStrategy({
        usernameField: 'userId',    // 프론트에서 보낸 정보가 req.body.userId에 담겨 들어온다 (이유 : back/index.js 참조)
        passwordField: 'password',  // 프론트에서 보낸 정보가 req.body.password 담겨 들어온다 (이유 : back/index.js 참조)
    }, async (userId, password, done) => {
        try {
            const exUser = await db.User.findOne({ where: { userId } });
            if (exUser) {
                const result = await bcrypt.compare(password, exUser.password);
                if (result) { // true이면 
                    done(null, exUser);
                } else {
                    done(null, false, { message: '비밀번호가 일치하지 않습니다.' });
                }
            } else {
                done(null, false, { message: '가입되지 않은 회원입니다.' });
            }
        } catch (e) {
            console.error(e);
            return done(e);
        }
    }));
};