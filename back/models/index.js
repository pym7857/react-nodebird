const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];  // config폴더안의 config.json을 불러옴 
const db = {};

// 불러온 config.json파일 이용해서 sequelize를 초기화(=설정들을 적용한 것)
let sequelize = new Sequelize(config.database, config.username, config.password, config);

// db객체에 모델들 연결
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

// 위에서 모델들을 먼저 객체에 연결 해놔야, associate함수(관계 설정) 호출 가능 
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
