module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', { // 테이블명은 images
      src: { 
        type: DataTypes.STRING(200),
        allowNull: false,
      },
    }, {
      charset: 'utf8',
      collate: 'utf8_general_ci', // 한글이 저장돼요
    });

    // 관계 설정 
    Image.associate = (db) => {
      db.Image.belongsTo(db.Post);  // 테이블에 PostId 컬럼이 생겨요
    };
    return Image;
  };