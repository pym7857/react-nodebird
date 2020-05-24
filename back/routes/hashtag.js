const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            /* include: 게시글 불러올때, 해당 해시태그, user정보, image정보 같이 불러온다. */
            include: [
            {
                model: db.Hashtag,  // 게시글 가져올때 해시태그도 함께 가져오도록.
                where: { name: decodeURIComponent(req.params.tag) },   // decodeURIComponent(): tag에 한글이 들어오면 URIComponent로 감싸지게 되므로, 그것을 decodeURI 
            }, 
            {
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,                // 게시글 이미지 가져오기 
            }, {
                model: db.User,
                through: 'Like',                // 게시글 좋아요 누른사람을 include 
                as: 'Likers',
                attributes: ['id'],
            }],
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;