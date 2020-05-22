const express = require('express');
const db = require('../models');

const router = express.Router();

/* 페이지 새로 불러올때마다, 게시글들도 같이 가져와야된다. */
router.get('/', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,             // 게시글 가져올때 작성자도 함께 가져오도록.
                attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되니까 id, nickname만 가져오기
                                            // -> PostCard.js의 post.User.nickname[0].. 등으로 사용될것임
            }],
            order: [['createdAt', 'DESC']], // 가장 최신 게시글들을 맨 위로 가져오기
                                            // order가 2차원 배열인 이유는 조건을 여러개 줄 수 도 있기 때문 !! (ex. updatedAt등을 2순위로 추가 가능)
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;