const express = require('express');
const db = require('../models');

const router = express.Router();

router.get('/:tag', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [
            {
                model: db.Hashtag,  // 게시글 가져올때 해시태그도 함께 가져오도록.
                where: { name: decodeURIComponent(req.params.tag) },   // decodeURIComponent(): tag에 한글이 들어오면 URIComponent로 감싸지게 되므로, 그것을 decodeURI 
            }, 
            {
                model: db.User,
                attributes: ['id', 'nickname'],
            }],
        });
        res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

module.exports = router;