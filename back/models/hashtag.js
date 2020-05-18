module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', { // 테이블명은 hashtags
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    }, {
      charset: 'utf8mb4', //  한글+이모티콘
      collate: 'utf8mb4_general_ci',
    });

    // 관계 설정 
    Hashtag.associate = (db) => {
      db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    return Hashtag;
  };