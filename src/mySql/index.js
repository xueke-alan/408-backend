// 引入密码文件
const { host, port, user, password } = require('./db.psw.json')


const { Sequelize, QueryTypes } = require('sequelize');
// 建立连接
const sequelize = new Sequelize('deep', user, password, {
  host, port,
  dialect: 'mysql'
});

// 测试链接
sequelize.authenticate().then(
  () => {
    console.log('Connection has been established successfully.');
  },
  () => {
    console.error('Unable to connect to the database:', error);
  }
)

// 重写query
sequelize.select = async (sqlStr) => {
  return await sequelize.query(sqlStr, { type: QueryTypes.SELECT });
}

module.exports = sequelize
