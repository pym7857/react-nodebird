module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', { // 테이블명은 posts
      content: {
        type: DataTypes.TEXT, // 매우 긴 글
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    });

    // 관계 설정 
    Post.associate = (db) => {
      db.Post.belongsTo(db.User); // belongsTo: 테이블에 UserId 컬럼이 생겨요
      db.Post.hasMany(db.Comment);
      db.Post.hasMany(db.Image);
      db.Post.belongsTo(db.Post, { as: 'Retweet' }); // Post,Post 테이블 이름 똑같아서, 구별 안될때는 as
                                                      // belongsTo: 테이블에 RetweetId 컬럼이 생겨요
      db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
      db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' });
    };
    return Post;
  };