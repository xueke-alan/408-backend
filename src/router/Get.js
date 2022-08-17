/* 查 操作 */

const path = require('../../utils/path')
const { route } = require('./Router')
const sequelize = require(path.root('src/mysql/index.js'))
// const { QueryTypes } = require('sequelize');

// 封装参数
const rewrite = (router) => {
  router.gets = (path, sqlStr) => {
    router.get(`/${path}`, async (req, res) => {
      res.send(await sequelize.select(sqlStr))
    })
  }
}

module.exports = router => {
  rewrite(router)

  // 获取subject数据
  router.gets('subjects', 'select * from subjects')
  router.gets('teachers', 'select * from teachers')
  router.gets('lessons', 'select * from lessons')
  router.gets('courses', 'select * from courses')

  return router

}
