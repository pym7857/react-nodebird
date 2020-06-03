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
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING(20),
        allowNull: true,
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
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'followingId' }); 
      db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'followerId' }); // 같은 테이블에서 다대다 관계일때는 foreignKey넣어주어야 됨
                                                                                                          // WHY? : 자바스크립트 객체에서 구별하는 이름이 as이고, DB에서는 foreignKey를 이용해 구별한다.
    };
    return User;
  };