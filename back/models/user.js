module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', { // 테이블명은 users
      nickname: {
        type: DataTypes.STRING(20), // 20글자 이하
        allowNull: false, // 필수
      },
      userId: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true, // 고유한 값
      },
      password: {
        type: DataTypes.STRING(100), // 100글자 이하
        allowNull: false,
      },
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글이 저장돼요
    });
  
    // 관계 설정 
    User.associate = (db) => {
      db.User.hasMany(db.Post, { as: 'Posts' });    // User,Post관계가 총 두번 정의 되었으므로(25번째 줄), 구별하기위해 as
      db.User.hasMany(db.Comment);
      db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' });  // belongsToMany에는 왠만하면 as를 넣어주는게 나중에 편리하다
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers' }); 
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings' });
    };
    return User;
  };