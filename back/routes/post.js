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
            console.log('result=', result); // 이차원 배열 형태 
            await newPost.addHashtags(result.map(r => r[0]));   // addHashtags: sequelize에서 우리가 associate에 맺어놓은 관계를 보고 addHashtags, getHashtags, removeHashtags..등등을 자동 지원한다.
        }
        // 방법1: sequelize에서 제공하는 get 메서드 사용하기
        // const User = await newPost.getUser();
        // newPost.User = User;   // PostCard.js의 post.User.nickname[0].. 등에서 사용됨
        // res.json(newPost);

        // 방법2: db에서 불러와서 프론트로 전달 
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User, // 이렇게 하면, 게시글과 연관된 사용자만 가져온다. (게시글과 연관된 사용자는 글쓴이 딱 한명이다.)
            }],
        });
        res.json(fullPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

router.post('/images', async (req, res, next) => {
    
});

module.exports = router;