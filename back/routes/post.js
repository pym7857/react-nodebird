const express = require('express');
const multer = require('multer');
const path = require('path');

const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

/* multer옵션 설정 */
const upload = multer({     
    storage: multer.diskStorage({
        /* 저장경로 설정 */
        destination(req, file, cb) {
            cb(null, 'uploads');    // cb(서버에러, 성공했을때)  -> passport의 done이라고 생각하면 됨  
                                    // cb(null, 'uploads')  -> 저장경로를 uploads폴더로 지정하겠다. 
        },
        /* 생성파일 이름 설정 */
        filename(req, file, cb) {
            const ext = path.extname(file.originalname);            // path모듈로 확장자 추출 
            const basename = path.basename(file.originalname, ext)  // path모듈로 확장자 제외한 이름 추출 
            cb(null, basename + new Date().valueOf() + ext);        // 현재 시간 추가해서 파일이름 작성 
        },
        /* 파일용량 제한 설정 */
        limits: { fileSize: 20 * 1024 * 1024 },
    }),
});
/**
 * upload.single() : 이미지 한장만 올리면 
 * upload.array() : 이미지 여러장 올리면 
 * upload.feilds() : (PostForm.js)FormData에서 append해주는 이름이 다른게 존재할 경우
 * upload.none() : FormData를 보내긴하는데, 이미지나 파일을 하나도 사용 안 할때 (=text 형식일때)
 * 
 * upload.array()안의 이름은, PostForm.js에서 FormData에 append할때 지정했던 이름으로 해야됨
 */

/* 게시글 작성 */
router.post('/', isLoggedIn, upload.none(), async (req, res, next) => {     // FormData에서 파일 -> req.file(s)
                                                                            // FormData에서 일반 값 -> req.body 
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
        /**
         * multer의 단점
         * - 이미지 주소를 여러개 올리면 image: [주소1, 주소2]      -> 배열 형식
         * - 이미지 주소를 한개만 올리면 image: 주소1               -> 그냥 값 
         */
        // FormData에서 파일 -> req.file(s)
        // FormData에서 일반 값 -> req.body 
        if (req.body.image) {
            if (Array.isArray(req.body.image)) {    // 배열 형식 이라면 ..
                /* 배열을 map으로 하고, Promise.all하면 DB의 작업들이 한방에 처리됨 */
                const images = await Promise.all(req.body.image.map((image) => {
                    return db.Image.create({ src: image });
                }));
                await newPost.addImages(images);    // sequelize에서 addImages() 메서드 추가해줌 
            } else {
                /* 이미지 주소를 따로 DB에 저장한 후, 게시글과 연결합니다. */
                const image = await db.Image.create({ src: req.body.image });
                await newPost.addImage(image);      // sequelize에서 addImage() 메서드 추가해줌 
            }
        }

        /* 게시글을 프론트로 보내기 */
        /* 방법1: sequelize에서 제공하는 get 메서드 사용하기 */
        /*
        const User = await newPost.getUser();   // 게시글과 연관된 사용자만 가져온다. (=게시글과 연관된 사용자는 글쓴이 딱 한명이다.)
        newPost.User = User;                    // Post에 User라는 속성을 달아줌.
                                                // -> (PostCard.js) post.User.nickname[0].. 이런식으로 사용가능 !! 
        return res.json(newPost);
        */

        /* 방법2: db에서 불러와서 프론트로 전달 */
        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            /* include: 게시글 불러올때 user정보와 image정보도 같이 불러온다. */
            include: [
            {
                model: db.User, // 게시글과 연관된 사용자만 가져온다. (=게시글과 연관된 사용자는 글쓴이 딱 한명이다.)
                                // include를 이렇게 '명시'해주면, Post에 User라는 속성을 달아줌.
                                // -> (PostCard.js) post.User.nickname[0].. 이런식으로 사용가능 !!
            }, 
            {
                model: db.Image,    // 프론트에서 Post.Image 로 사용가능 
            }],
        });
        res.json(fullPost);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

/* 이미지 업로드 라우터 */
router.post('/images', upload.array('image'), (req, res) => {   // FormData 파일 -> req.file(s)
                                                                // FormData 일반 값 -> req.body 
    console.log(req.files);
    res.json(req.files.map(v => v.filename));   // 이미지 업로드 결과가 v에 담겨있다. 
});

/* 해당 게시글의 댓글들 가져오기 */
router.get('/:id/comments', async (req, res, next) => {
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
          }
        /* 해당 게시글의 댓글들 전부 가져오기 */
        const comments = await db.Comment.findAll({
            where: {
                PostId: req.params.id,
            },
            order: [['createdAt', 'ASC']], 
            include: [{
                model: db.User,     // 댓글 작성자 정보도 같이 가져오기 
                attributes: ['id', 'nickname', 'color'],
            }],
        });
        res.json(comments);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

/* 해당 게시글에 댓글 작성하기 */
router.post('/:id/comment', isLoggedIn, async (req, res, next) => {     // ex) POST/api/post/3/comment
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
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
                attributes: ['id', 'nickname', 'color'],
            }],
        });
        res.json(comment);
    } catch (e) {
        console.error(e);
        return next(e);
    }
});

/* 해당 게시글에 '좋아요' 요청이 왔을때 */
router.post('/:id/like', isLoggedIn, async (req, res, next) => {
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        /* 게시글의 작성자와 현재 유저가 같다면  */
        if (post.UserId === req.user.id) {
            return res.status(403).send('본인 게시글에는 좋아요 할 수 없습니다.');
        }

        await post.addLiker(req.user.id);  
        res.json({ userId: req.user.id });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 해당 게시글에 '좋아요' 취소 요청이 왔을때 */
router.delete('/:id/like', isLoggedIn, async (req, res, next) => {
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }

        await post.removeLiker(req.user.id);
        res.json({ userId: req.user.id });
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 리트윗 라우터 */
router.post('/:id/retweet', isLoggedIn, async (req, res, next) => {
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
        const post = await db.Post.findOne({ 
            where: { id: req.params.id },
            include: [{
                model: db.Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        /* 게시글 작성자가 본인일 경우, 리트윗 못하도록 */
        /* 또는 남이 리트윗한 게시물의 원래 작성자가 본인일 경우, 리트윗 못하도록 */
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).send('자신의 글은 리트윗할 수 없습니다.');
        }
        /* 다른사람이 리트윗한 게시글을 또 리트윗 하는 경우  or 원본 게시글을 리트윗하는 경우 */
        const retweetTargetId = post.RetweetId || post.id;  
        /* 리트윗 하려는 게시글을 이미 리트윗 했었는지 */
        const exPost = await db.Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });
        if (exPost) {
            return res.status(403).send('이미 리트윗 한 게시글 입니다.');
        }
        /* 리트윗을 한 게시글 객체 생성 */
        const retweet = await db.Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',     // allowNull: false 
        });
        /* 리트윗 게시글의 특성: 항상 이전 게시글을 가지고 있어야 한다. */
        /* 리트윗한 게시글안에 남의 게시글이 들어있어야 한다. */
        const retweetWithPrevPost = await db.Post.findOne({
            where: { id: retweet.id },
            include: [
            {
                model: db.User,         // 작성자 정보 
                attributes: ['id', 'nickname', 'color'],
            }, 
            {
                model: db.Post,         // 리트윗한 게시글 정보 
                as: 'Retweet',
                include: [
                {
                    model: db.User,     // 리트윗한 게시글의 작성자 정보 
                    attributes: ['id', 'nickname', 'color'],
                }, 
                {
                    model: db.Image,    // 리트윗한 게시글의 이미지 정보 
                }],
            }],
        });
        res.json(retweetWithPrevPost);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 게시글 삭제 라우터 */
router.delete('/:id', isLoggedIn, async (req, res, next) => {
    try {
        /* 항상, 게시글이 먼저 있는지 확인 */
        const post = await db.Post.findOne({ where: { id: req.params.id } });
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        await db.Post.destroy({ where: { id: req.params.id } });        // destroy: 디비 컬럼 삭제 
        res.send(req.params.id);
    } catch (e) {
        console.error(e);
        next(e);
    }
});

/* 게시글 한개 가져오기 라우터 */
router.get('/:id', async (req, res, next) => {
    try {
      const post = await db.Post.findOne({
        where: { id: req.params.id },
        include: [{
          model: db.User,
          attributes: ['id', 'nickname', 'color'],
        }, {
          model: db.Image,
        }],
      });
      res.json(post);
    } catch (e) {
      console.error(e);
      next(e);
    }
});

module.exports = router;