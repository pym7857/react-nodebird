const express = require('express');
const db = require('../models');

const router = express.Router();

/* 페이지 새로 불러올때마다, 게시글들도 같이 가져와야된다. */
router.get('/', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            /* include: 게시글 불러올때 user정보와 image정보도 같이 불러온다. */
            include: [
            {
                model: db.User,                 // 게시글 작성자를 include 
                attributes: ['id', 'nickname'], // 비밀번호 가져오면 안되니까 id, nickname만 가져오기
                                                // -> PostCard.js의 post.User.nickname[0].. 등으로 사용될것임
            }, 
            {
                model: db.Image,                // 게시글 이미지 가져오기 
            }, 
            {
                model: db.User,
                through: 'Like',                // 게시글 좋아요 누른사람을 include 
                as: 'Likers',
                attributes: ['id'],
            }, 
            {
                model: db.Post,                 // 리트윗한 게시글 정보 
                as: 'Retweet',
                include: [
                {
                    model: db.User,             // 리트윗한 게시글의 작성자 정보 
                    attributes: ['id', 'nickname'],
                }, 
                {
                    model: db.Image,            // 리트윗한 게시글의 이미지 정보 
                }],
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