const path = require('../../utils/path')
const fs = require('fs')

module.exports = (router) => {  // 默认页面，展示api接口
  router.get("/", (req, res) => {
    try {
      const index = fs.readFileSync(path.src('views/index.html'), 'utf-8')
      res.end(index)
    } catch (error) {
      res.end(error)
    }
  });
}