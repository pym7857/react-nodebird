const express = require('express');
const db = require('../models');
const router = express.Router();

/* 게시글 작성 */
router.post('/', async (req, res, next) => {
    try {
        // 문자열에서 해시태그(#) 뽑아내기
        const hashtags = req.body.content.match(/#[^\s]+/g); // var regExp = /정규표현식/[Flag]; (JS에서 정규표현식 사용법 - 2번째)
                                                             // ^는 []안에서 쓰일때는 not의 의미. 문자열에서 ^는 문자열의 처음을 의미.
                                                             // \s: 공백문자를 찾습니다.  +: 1개 이상있을떄
                                                             // [flag] g: 문자열 내의 모든 패턴을 찾는다. 
                                                             // 만약 Flag를 설정하지 않을 경우에는 문자열 내에서 검색대상이 많더라도 한번만 찾고 끝나게 됩니다. (http://www.nextree.co.kr/p4327/)
        const newPost = await db.Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });
        if (hashtags) {
            const result = await Promise.all(hashtags.map(tag => db.Hashtag.findOrCreate({   // findOrCreate: 없으면 만들고, 있으면 찾고(사실상 없으면 넣고, 있으면 아무것도 안한다.)
                where: { name: tag.slice(1).toLowerCase() }, // slice(1): 앞에 # 떼는것.  toLowerCase(): 영어 해시태그는 전부 소문자로 통일하는것
            })));
            console.log('result=', result); // 이차원 배열 형태 (그래서 r => r[0])
            await newPost.addHashtags(result.map(r => r[0]));   // addHashtags(): sequelize에서 우리가 associate에 맺어놓은 관계를 보고 addHashtags, getHashtags, removeHashtags..등등을 자동 지원한다.
        }

        /* 게시글을 프론트로 보내기 */
        /* 방법1: sequelize에서 제공하는 get 메서드 사용하기 */
        const User = await newPost.getUser();   // 게시글과 연관된 사용자만 가져온다. (=게시글과 연관된 사용자는 글쓴이 딱 한명이다.)
        newPost.User = User;                    // Post에 User라는 속성을 달아줌.
                                                // -> (PostCard.js) post.User.nickname[0].. 이런식으로 사용가능 !! 
        return res.json(newPost);

        /* 방법2: db에서 불러와서 프론트로 전달 */
        /*
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User, // 게시글과 연관된 사용자만 가져온다. (=게시글과 연관된 사용자는 글쓴이 딱 한명이다.)
                                // include를 이렇게 '명시'해주면, Post에 User라는 속성을 달아줌.
                                // -> (PostCard.js) post.User.nickname[0].. 이런식으로 사용가능 !!
            }],
        });
        res.json(fullPost);
        */
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

router.post('/images', async (req, res, next) => {
    
});

/* 해당 게시글의 댓글들 가져오기 */
router.get('/:id/comments', async (req, res, next) => {
    try {
        /* 댓글을 가져오려면, 그 댓글의 부모가되는 포스트가 있는지 항상 먼저 검사 */
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if(!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        /* 해당 게시글의 댓글들 전부 가져오기 */
        const comments = await db.Comment.findAll({
            where: {
                PostId: req.params.id,
            },
            order: [['created', 'ASC']], 
            include: [{
                model: db.User,     // 댓글 작성자 정보도 같이 가져오기 
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(comments);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

/* 해당 게시글에 댓글 작성하기 */
router.post('/:id/comment', async (req, res, next) => {     // ex) POST/api/post/3/comment
    try {
        if (!req.user) {
            return res.status(401).send('댓글을 작성하려면 로그인이 필요합니다.');
        }
        /* 댓글을 남기려면, 그 댓글의 부모가되는 포스트가 있는지 항상 먼저 검사 */
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if(!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        /* New댓글 객체를 Comments테이블에 생성 */
        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        /* New댓글 객체를 Post에 Add해주기 */
        await post.addComment(newComment.id);    // addComment() : sequelize에서 우리가 associate에 맺어놓은 관계를 보고 addComment를 자동 지원한다.
        
        /* db에서 New댓글에 해당하는 댓글객체 가져오기 */
        const comment = await db.Comment.findOne({
            where: {
                id: newComment.id,
            },
            include: [{
                model: db.User,     // 댓글 작성자 정보도 같이 가져오기 
                attributes: ['id', 'nickname'],
            }],
        });
        return res.json(comment);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

module.exports = router;