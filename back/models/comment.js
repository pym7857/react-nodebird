module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', { // 테이블명은 comments
      content: {
        type: DataTypes.TEXT, // 긴 글
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    });

    // 관계 설정 
    Comment.associate = (db) => {
      db.Comment.belongsTo(db.User); // 테이블에 UserId 컬럼이 생겨요
      db.Comment.belongsTo(db.Post); // 테이블에 PostId 컬럼이 생겨요
    };
    return Comment;
  };