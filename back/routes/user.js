const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const { isLoggedIn } = require('./middleware');
const db = require('../models');

const router = express.Router();

/* 페이지 새로 불러올때마다, 유저 정보(req.user) 받아오기 */
router.get('/', isLoggedIn, (req, res) => {
    const user = Object.assign({}, req.user.toJSON()); // 객체 복사해서 (toJSON() 안붙이면 에러),
    delete user.password;                               // 비밀번호 지우고 정보 보내기 
    return res.json(user);
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
            return res.status(403).send('실패 : 이미 사용중인 아이디입니다.');
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
router.get('/:id', async (req, res, next) => {
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) },
      include: [
        {
          model: db.Post,
          as: 'Posts',
          attributes: ['id'],   // 남의 게시글
        }, 
        {
          model: db.User,
          as: 'Followings',
          attributes: ['id'],   // 남의 팔로윙
        },
        {
          model: db.User,
          as: 'Followers',
          attributes: ['id'],   // 남의 팔로워
        }],
      attributes: ['id', 'nickname'],
    });
    // 남의 팔로윙 아이디와 팔로워 아이디가 보이면 사생활 침해될 수 있음
    // 보안코드 작성 -> 몇개 인지 개수만 알려주기 
    const jsonUser = user.toJSON();
    jsonUser.Posts = jsonUser.Posts ? jsonUser.Posts.length : 0;
    jsonUser.Followings = jsonUser.Followings ? jsonUser.Followings.length : 0;
    jsonUser.Followers = jsonUser.Followers ? jsonUser.Followers.length : 0;
    res.json(jsonUser);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 로그아웃 */
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('로그아웃 성공');
});

/* 로그인 */
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) { // 서버 에러가 나면 
          console.error(err);
          return next(err); // next로 보내면 express가 알아서 처리 
        }
        if (info) {
          console.log('로그인 에러 info.message=', info.message);
          return res.status(401).send(info.message); // 사유 프론트로 보내기 
        }
        return req.login(user, async (loginErr) => { // user는 local.js의 exUser
          try {
            if (loginErr) {
              return next(loginErr);
            }
            // 로그인 유저정보 보낼때, 게시글 수, 팔로잉 수, 팔로워 수 도 include로 같이 보낸다. 
            const fullUser = await db.User.findOne({
              where: { id: user.id },
              include: [{     // associate해놨던 관계를 include로 명시 
                model: db.Post,
                as: 'Posts',  // as 이름은 관계 설정 시,선언했던 대로 적어주어야 됨 
                attributes: ['id'], // 개수만 셀 것이기 때문에 id만 속성으로 지정 
              }, {
                model: db.User,
                as: 'Followings',
                attributes: ['id'], 
              }, {
                model: db.User,
                as: 'Followers',
                attributes: ['id'], 
              }],
              attributes: ['id', 'nickname', 'userId'], // password만 빼고 프론트로 보낸다. 
            });
            return res.json(fullUser); // { "id":2,"nickname":"22","userId":"22","Posts":[],"Followings":[],"Followers" }
          } catch (e) {
            next(e);
          }
        });
      })(req, res, next);
});

/* 팔로우 하기 라우터 */
router.post('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.addFollowing(req.params.id);   // add(): 시퀄라이즈에서 알아서 연결해줌 
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 언팔로우 하기 라우터 */
router.delete('/:id/follow', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollowing(req.params.id);   // remove(): 시퀄라이즈에서 알아서 삭제해줌  
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 내가 팔로잉 하고있는 사람들 목록 가져오기 라우터 */
router.get('/:id/followings', isLoggedIn, async (req, res, next) => { // /api/user/:id/followings
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0},
    });
    const myFollowings = await user.getFollowings({   // get() - sequelize에서 제공 
      attributes: ['id', 'nickname'],                 // password 제거하기 위해 옵션을 준다. 
    });
    res.json(myFollowings);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 내 팔로워들 목록 가져오기 라우터 */
router.get('/:id/followers', isLoggedIn, async (req, res, next) => { // /api/user/:id/followers
  try {
    const user = await db.User.findOne({
      where: { id: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0},
    });
    const myFollowers = await user.getFollowers({     // get() - sequelize에서 제공 
      attributes: ['id', 'nickname'],                 // password 제거하기 위해 옵션을 준다. 
    });
    res.json(myFollowers);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 팔로워 한명 삭제하기 라우터 */
router.delete('/:id/follower', isLoggedIn, async (req, res, next) => {
  try {
    const me = await db.User.findOne({
      where: { id: req.user.id },
    });
    await me.removeFollower(req.params.id);     // remove() - sequelize에서 제공 
    res.send(req.params.id);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

/* 특정id의user의 게시글들 가져오기 */
/* 이 경우에는, 리트윗 게시글 가져오지 않아도 됨 */
router.get('/:id/posts', async (req, res, next) => {
    try {
      const posts = await db.Post.findAll({
        where: {
          UserId: parseInt(req.params.id, 10) || (req.user && req.user.id) || 0,     // parseInt(req.params.id, 10)가 0 이라면, || 다음부분 실행 !  (숫자 0은 false 이기 때문)
          RetweetId: null,                      // 리트윗 게시글 X
        },
        include: [{
          model: db.User,
          attributes: ['id', 'nickname'],       // 사용자 정보 가져오기 
        }, {
          model: db.Image,                      // 게시글 이미지 가져오기 
        }, {
          model: db.User,
          through: 'Like',                      // 게시글 좋아요 누른사람을 include 
          as: 'Likers',
          attributes: ['id'],
      }]
    });
      res.json(posts);
    } catch (e) {
      console.error(e);
      next(e);
    }
});

/* 닉네임 수정 라우터 */
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
  try {
    await db.User.update({   // db업데이트 
      nickname: req.body.nickname,  
    }, {
      where: { id: req.user.id },
    });
    res.send(req.body.nickname);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;